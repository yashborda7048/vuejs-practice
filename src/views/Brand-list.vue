<template>
    <div class="pt-5 pb-4 container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">NAME</th>
                                    <th scope="col">MEMBERSHIP REWARDS </th>
                                    <th scope="col">STATUS</th>
                                    <th scope="col">MOBILE</th>
                                    <th scope="col">E-MAIL</th>
                                    <th scope="col">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="brand in brands" :key="brand.id">
                                    <td>
                                        <div class="d-flex gap-3 align-items-center">
                                            <img class="img-fluid image-logo" :src="brand.logo" alt="Avatar" />
                                            <p class="mb-0">{{ brand.name }}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0">{{ brand.is_support_membership_rewards ? "Available" :
                                            "Not Available" }}</p>
                                    </td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input inputClass" v-model="brand.is_active"
                                                type="checkbox" @change="changePremiumStatus(brand.id, {
                                                    is_active: brand.is_active,
                                                })" />
                                            <label class="form-check-label labelClass"></label>
                                        </div>
                                    </td>
                                    <td class="text-left text-capitalize">
                                        <p class="mb-0"> {{ brand.mobile ? brand.mobile : "-" }}</p>
                                    </td>
                                    <td class="text-left">
                                        <p class="mb-0"> {{ brand.email ? brand.email : "-" }} </p>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center" role="button" data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasForm" @click="detailer(brand)">
                                            <i class="fas fa-pencil-alt text-success fs-5"></i>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasForm">
        <div class="offcanvas-header" v-if="offcanvasForm">
            <h5 class="offcanvas-title">
                {{ brandData.name ? brandData.name : "Adding A New Brand" }}
            </h5>
            <div>
                <i class="fa fa-close text-dark" data-bs-dismiss="offcanvas" aria-label="Close"></i>
            </div>
        </div>
        <div class="offcanvas-body">
            <div class="row">
                <div class="col-12">
                    <div class="card mb-0">
                        <div class="card-body p-3">
                            <form @submit.prevent="edittask">
                                <div class="form-group row mb-4">
                                    <label for="name" class="col-form-label col-12">BRAND NAME *</label>
                                    <div class="col-12">
                                        <input class="form-control" v-model.trim="avgData.name" type="text"
                                            placeholder="Enter Brand Name">
                                    </div>
                                </div>

                                <div class="form-group row mb-4">
                                    <label for="email" class="col-form-label col-12">Email *</label>
                                    <div class="col-12">
                                        <input class="form-control" v-model.trim="avgData.email" type="email"
                                            placeholder="Enter Email ">
                                    </div>
                                </div>

                                <div class="form-group row mb-4">
                                    <label for="mobile" class="col-form-label col-12">Mobile *</label>
                                    <div class="col-12">
                                        <input class="form-control" v-model.trim="avgData.mobile" type="text"
                                            placeholder="Enter Mobile ">
                                    </div>
                                </div>

                                <div class="form-group row mb-4">
                                    <label for="" class="col-form-label col-12">MEMBERSHIP REWARDS</label>
                                    <div class="col-12">
                                        <select class="form-control" v-model="avgData.is_support_membership_rewards">
                                            <option v-for="option in options" :value="option.value" :key="option.value">
                                                {{ option.text }}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group row mb-4">
                                    <label for="" class="col-form-label col-12">REWARDS WEBSITE JOIN URL</label>
                                    <div class="col-12">
                                        <input class="form-control" v-model.trim="avgData.rewards_website_join_url"
                                            type="text" placeholder="Enter Rewards Joining URL ">
                                    </div>
                                </div>

                                <div class="form-group row mb-4">
                                    <label for="" class="col-form-label col-12">REWARDS WEBSITE URL </label>
                                    <div class="col-12">
                                        <input class="form-control" v-model.trim="avgData.rewards_website_url" type="text"
                                            placeholder="Enter Reward Website ">
                                    </div>
                                </div>
                                <hr>

                                <div class="mb-3 mb-0">
                                    <div>
                                        <button type="submit" class="btn btn-primary">Update</button>
                                        <button type="reset" class="btn btn-secondary ms-1">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- end card -->
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import UserService from '../store/user.service'
export default {
    name: "Billing",
    data() {
        return {
            brands: '',
            brandData: {},
            avgData: {},
            options: [
                { text: "Yes", value: true },
                { text: "No", value: false },
            ],
            offcanvasForm: false
        }
    },
    mounted() {
        this.getBrandedData();
    },
    methods: {
        async getBrandedData() {
            try {
                const response = await UserService.getBrandData();
                console.log(response.data);
                if (response) {
                    this.brands = response;
                    this.selected = response[0];
                }
            } catch (error) {
                console.log(error);
            }
        },
        changePremiumStatus(data, brandID) {
            UserService.editBrandData(data, brandID)
                .then(() => {
                    alert("Brand status changed!");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        detailer(data) {
            if (data) {
                if (!data.name) {
                    this.addNew = true;
                } else {
                    this.addNew = false;
                }
            }
            this.avgData = data;
            this.offcanvasForm = !this.offcanvasForm;
            console.log(this.avgData);
        },
        closer() {
            this.offcanvasForm = !this.offcanvasForm;
        },
    }
};
</script>

<style scoped>
table thead th {
    padding: 0.5rem 0.5rem;
}

.image-logo {
    width: 50px;
    height: 40px;
}

table tbody p,
table thead th {
    font-size: 14px;
}
</style>
  