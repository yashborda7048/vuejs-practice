<template>
  <!-- brand-list component  -->
  <div class="py-4 container-fluid brand-list">
    <div class="row">
      <div class="d-flex justify-content-between mb-3 mt-2">
        <div>
          <h6>HOTEL BRANDS</h6>
        </div>
        <div>
          <button type="submit" class="bg-gradient-success btn-lg w-100 border-0 text-white" data-bs-toggle="offcanvas"
            data-bs-target="#addForm" @click="detailer(editbrand)">
            Add New Brand
          </button>
        </div>
      </div>

      <div class="col-12">
        <div class="card">
          <div class="card-body position-relative overflow-auto">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">MEMBERSHIP REWARDS</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">MOBILE</th>
                  <th scope="col">E-MAIL</th>
                  <th scope="col">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="brand in brands" :key="brand.id">
                  <td>
                    <div class="d-flex align-items-center">
                      <img class="img-fluid image-logo" :src="brand.logo" alt="Avatar" />
                      <p class="mx-3 mb-0">{{ brand.name }}</p>
                    </div>
                  </td>
                  <td>
                    <p class="mb-0">
                      {{
                        brand.is_support_membership_rewards
                        ? "Available"
                        : "Not Available"
                      }}
                    </p>
                  </td>
                  <td>
                    <div class="form-check form-switch">
                      <input class="form-check-input inputClass" v-model="brand.is_active" type="checkbox" @change="
                        changePremiumStatus(brand.id, {
                          is_active: brand.is_active,
                        })
                      " />
                      <label class="form-check-label labelClass"></label>
                    </div>
                  </td>
                  <td class="text-left text-capitalize">
                    <p class="mb-0">{{ brand.mobile ? brand.mobile : "-" }}</p>
                  </td>
                  <td class="text-left">
                    <p class="mb-0">{{ brand.email ? brand.email : "-" }}</p>
                  </td>
                  <td>
                    <div class="d-flex align-items-center justify-content-center" role="button" data-bs-toggle="offcanvas"
                      data-bs-target="#editForm" @click="detailer(brand)">
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

  <!-- addForm -->
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="addForm">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Adding A New Brand</h5>
      <div>
        <i class="fa fa-close text-dark" data-bs-dismiss="offcanvas" aria-label="Close"></i>
      </div>
    </div>
    <div class="offcanvas-body">
      <div class="row">
        <div class="col-12">
          <div class="card mb-0">
            <div class="card-body p-3">
              <form @submit.prevent="AddBrandData()">
                <div class="row mb-4">
                  <div class="col-md-6 mb-4">
                    <label for="name" class="col-form-label">BRAND NAME *</label>
                    <div class="">
                      <input class="form-control" v-model.trim="AddData.name" type="text"
                        placeholder="Enter Brand Name" />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="email" class="col-form-label">Email *</label>
                    <div class="">
                      <input class="form-control" v-model.trim="AddData.email" type="email" placeholder="Enter Email " />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="mobile" class="col-form-label">Mobile *</label>
                    <div class="">
                      <input class="form-control" v-model.trim="AddData.mobile" type="text" placeholder="Enter Mobile " />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="" class="col-form-label">MEMBERSHIP REWARDS</label>
                    <div class="">
                      <select class="form-control" v-model="AddData.is_support_membership_rewards">
                        <option v-for="option in options" :value="option.value" :key="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="" class="col-form-label">REWARDS WEBSITE JOIN URL</label>
                    <div class="">
                      <input class="form-control" v-model.trim="AddData.rewards_website_join_url" type="text"
                        placeholder="Enter Rewards Joining URL " />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="" class="col-form-label">REWARDS WEBSITE URL
                    </label>
                    <div class="">
                      <input class="form-control" v-model.trim="AddData.rewards_website_url" type="text"
                        placeholder="Enter Reward Website " />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="" class="col-form-label">logo
                      <span v-if="AddData.logo == null">
                        (Upload Image)</span></label>
                    <div v-if="AddData.logo == null">
                      <input class="form-control" type="file" @change="AddLogo($event)" accept="image/*" />
                    </div>
                    <div v-else>
                      <img :src="AddData.logo" class="img-fluid" :alt="AddData.logo" />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="" class="col-form-label">FAVICON ICON
                      <span v-if="AddData.favicon_icon == null">
                        (Upload Image)
                      </span>
                    </label>
                    <div v-if="AddData.favicon_icon == null">
                      <input class="form-control" type="file" @change="AddFavicon($event)" accept="image/*" />
                    </div>
                    <div v-else>
                      <img :src="AddData.favicon_icon" class="img-fluid" :alt="AddData.favicon_icon" />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="" class="col-form-label">REWARD IMAGE
                      <span v-if="AddData.membership_reward_image == null">
                        (Upload Image)</span></label>
                    <div v-if="AddData.membership_reward_image == null">
                      <input class="form-control" type="file" @change="AddRewardImage($event)" accept="image/*" />
                    </div>
                    <div v-else class="">
                      <img :src="AddData.membership_reward_image" class="img-fluid"
                        :alt="AddData.membership_reward_image" />
                    </div>
                  </div>
                  <hr />
                  <div class="mb-3 mb-0">
                    <div>
                      <button type="submit" class="btn btn-primary">
                        Save
                      </button>
                      <button type="reset" class="btn btn-secondary ms-1">
                        Cancel
                      </button>
                    </div>
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

  <!-- editForm -->
  <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="editForm">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">
        {{ EditData.name }}
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
              <form @submit.prevent="UpdateBrandData()">
                <div class="row mb-4">
                  <div class="col-md-6 mb-4">
                    <label for="name" class="col-form-label">BRAND NAME *</label>
                    <div class="">
                      <input class="form-control" v-model.trim="EditData.name" type="text"
                        placeholder="Enter Brand Name" />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="email" class="col-form-label">Email *</label>
                    <div class="">
                      <input class="form-control" v-model.trim="EditData.email" type="email" placeholder="Enter Email " />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="mobile" class="col-form-label">Mobile *</label>
                    <div class="">
                      <input class="form-control" v-model.trim="EditData.mobile" type="text"
                        placeholder="Enter Mobile " />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="" class="col-form-label">MEMBERSHIP REWARDS</label>
                    <div class="">
                      <select class="form-control" v-model="EditData.is_support_membership_rewards">
                        <option v-for="option in options" :value="option.value" :key="option.value">
                          {{ option.text }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="" class="col-form-label">REWARDS WEBSITE JOIN URL</label>
                    <div class="">
                      <input class="form-control" v-model.trim="EditData.rewards_website_join_url" type="text"
                        placeholder="Enter Rewards Joining URL " />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="" class="col-form-label">REWARDS WEBSITE URL
                    </label>
                    <div class="">
                      <input class="form-control" v-model.trim="EditData.rewards_website_url" type="text"
                        placeholder="Enter Reward Website " />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="" class="col-form-label">logo
                      <span v-if="EditData.logo == null">
                        (Upload Image)</span></label>
                    <div v-if="EditData.logo == null">
                      <input class="form-control" type="file" @change="EditLogo($event)" accept="image/*" />
                    </div>
                    <div v-else>
                      <img :src="EditData.logo" class="img-fluid" :alt="EditData.logo" />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="" class="col-form-label">FAVICON ICON
                      <span v-if="EditData.favicon_icon == null">
                        (Upload Image)
                      </span>
                    </label>
                    <div v-if="EditData.favicon_icon == null">
                      <input class="form-control" type="file" @change="EditFavicon($event)" accept="image/*" />
                    </div>
                    <div v-else>
                      <img :src="EditData.favicon_icon" class="img-fluid" :alt="EditData.favicon_icon" />
                    </div>
                  </div>

                  <div class="col-md-6 mb-4">
                    <label for="" class="col-form-label">REWARD IMAGE
                      <span v-if="EditData.membership_reward_image == null">
                        (Upload Image)</span></label>
                    <div v-if="EditData.membership_reward_image == null">
                      <input class="form-control" type="file" @change="EditRewardImage($event)" accept="image/*" />
                    </div>
                    <div v-else class="">
                      <img :src="EditData.membership_reward_image" class="img-fluid"
                        :alt="EditData.membership_reward_image" />
                    </div>
                  </div>
                </div>
                <hr />

                <div class="mb-3 mb-0">
                  <div>
                    <button type="submit" class="btn btn-primary">
                      Update
                    </button>
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
import Swal from "sweetalert2";
import UserService from "../store/user.service";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export default {
  name: "Billing",
  data() {
    return {
      brands: "",
      addNew: false,
      brandData: {},
      EditData: {},
      AddData: {},
      options: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
      offcanvasForm: false,
      rewardImages: "",
    };
  },
  mounted() {
    this.getBrandedData();
  },
  methods: {
    async getBrandedData() {
      try {
        const response = await UserService.getBrandData();
        if (response) {
          this.brands = response;
          this.selected = response[0];
        }
      } catch (error) {
        console.log(error);
      }
    },
    async changePremiumStatus(data, brandID) {
      await UserService.editBrandData(data, brandID)
        .then(() => {
          Toast.fire({
            icon: "warning",
            title: "Brand status changed!",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    detailer(data) {
      this.EditData = data;
      console.log(this.EditData, "EditData");
    },
    async UpdateBrandData() {
      await UserService.editBrandData(this.EditData.id, {
        name: this.EditData.name,
        email: this.EditData.email,
        mobile: this.EditData.mobile,
        is_support_membership_rewards: this.EditData
          .is_support_membership_rewards,
        rewards_website_join_url: this.EditData.rewards_website_join_url,
        rewards_website_url: this.EditData.rewards_website_url,
        // membership_reward_image: this.EditData.membership_reward_image
      }).then((response) => {
        console.log(response);
      });
    },
    async AddBrandData() {
      await UserService.addBrandData({
        name: this.AddData.name,
        email: this.AddData.email,
        mobile: this.AddData.mobile,
        is_support_membership_rewards: this.AddData
          .is_support_membership_rewards,
        rewards_website_join_url: this.AddData.rewards_website_join_url,
        rewards_website_url: this.AddData.rewards_website_url,
        // membership_reward_image: this.AddData.membership_reward_image
      }).then((response) => {
        console.log(response);
      });
    },
    EditLogo($event) {
      console.log($event.target.files[0].name);
      this.EditData.membership_reward_image = $event.target.files[0].name;
    },
    EditFavicon($event) {
      console.log($event.target.files[0].name);
      this.EditData.membership_reward_image = $event.target.files[0].name;
    },
    EditRewardImage($event) {
      console.log($event.target.files[0].name);
      this.EditData.membership_reward_image = $event.target.files[0].name;
    },
    AddLogo($event) {
      console.log($event.target.files[0].name);
      this.AddData.membership_reward_image = $event.target.files[0].name;
    },
    AddFavicon($event) {
      console.log($event.target.files[0].name);
      this.AddData.membership_reward_image = $event.target.files[0].name;
    },
    AddRewardImage($event) {
      console.log($event.target.files[0].name);
      this.AddData.membership_reward_image = $event.target.files[0].name;
    },
  },
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

table tbody tr td:nth-of-type(1) div {
  /* min-width: 180px; */
}

.offcanvas-end {
  width: 900px !important;
}

form .img-fluid {
  width: 100%;
  height: 300px;
  border: 1px solid black;
  object-fit: scale-down;
}
</style>
