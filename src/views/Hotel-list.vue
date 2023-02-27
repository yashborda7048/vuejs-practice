<template>
    <!-- hotel-list component  -->
    <div class="pt-5 pb-4 container-fluid hotel-list">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body position-relative overflow-auto">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">NAME</th>
                                    <th scope="col">ADDRESS</th>
                                    <th scope="col">CITY</th>
                                    <th scope="col">STATE</th>
                                    <th scope="col">COUNTRY</th>
                                    <th scope="col">E-MAIL</th>
                                </tr>
                            </thead>
                            <tbody v-if="isStillLoading">
                                <tr v-for="item in 10" :key="item">
                                    <td class="placeholder-glow">
                                        <span class="placeholder w-100 placeholder-lg"></span>
                                    </td>
                                    <td class="placeholder-glow">
                                        <span class="placeholder w-100 placeholder-lg"></span>
                                    </td>
                                    <td class="placeholder-glow">
                                        <span class="placeholder w-100 placeholder-lg"></span>
                                    </td>
                                    <td class="placeholder-glow">
                                        <span class="placeholder w-100 placeholder-lg"></span>
                                    </td>
                                    <td class="placeholder-glow">
                                        <span class="placeholder w-100 placeholder-lg"></span>
                                    </td>
                                    <td class="placeholder-glow">
                                        <span class="placeholder w-100 placeholder-lg"></span>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr v-for="hotel in hotels" :key="hotel.id">
                                    <td>
                                        <div v-if="hotel.logo != null" class="d-flex align-items-center">
                                            <img class="img-fluid image-logo" :src="hotel.logo" alt="Avatar" />
                                            <p class="mx-3 mb-0">{{ hotel.name }}</p>
                                        </div>
                                        <div v-else class="d-flex align-items-center">
                                            <span
                                                class="d-flex align-items-center justify-content-center bg-soft bg-primary text-white image-logo">
                                                {{ (hotel.name).charAt(0) }}
                                            </span>
                                            <span class="ms-2"> {{ hotel.name }}</span>
                                        </div>
                                    </td>
                                    <td class="text-left ">
                                        <p class="mb-0">{{ hotel.address ? hotel.address : "-" }}</p>
                                    </td>
                                    <td class="text-left ">
                                        <p class="mb-0">{{ hotel.city ? hotel.city : "-" }}</p>
                                    </td>
                                    <td class="text-left ">
                                        <p class="mb-0">{{ hotel.state ? hotel.state : "-" }}</p>
                                    </td>
                                    <td class="text-left ">
                                        <p class="mb-0">{{ hotel.country ? hotel.country : "-" }}</p>
                                    </td>
                                    <td class="text-left">
                                        <p class="mb-0">{{ hotel.email ? hotel.email : "-" }}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import UserService from "../store/user.service";

export default {
    name: "Hotel-list",
    data() {
        return {
            hotels: {},
            isStillLoading: false
        };
    },
    mounted() {
        this.getHotelsData();
    },
    methods: {
        async getHotelsData() {
            this.isStillLoading = true;
            try {
                const response = await UserService.getHotelsList();
                if (response) {
                    this.hotels = response;
                    this.isStillLoading = false;
                }
            } catch (error) {
                console.log(error);
            }
        },

    }
};
</script>
  
<style scoped>
table thead th {
    padding: 0.5rem 0.5rem;
}

.image-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}

table tbody p,
table thead th {
    font-size: 14px;
}

table tbody tr td:nth-of-type(1) div {
    min-width: 380px;
}
</style>
  