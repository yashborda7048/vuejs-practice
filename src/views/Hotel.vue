<template>
    <div class="container-fluid">
        <div class=" py-5">
            <form @submit.prevent="onSubmit">
                <div class="row" v-if="isLoading">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card-header">
                                            <h4 class="card-title">General Details</h4>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div class="card-header">
                                            <h4 class="card-title">Address Details</h4>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-8 placeholder-glow">
                                        <span class="placeholder w-100 p-4"></span>
                                    </div>
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div class="card-header">
                                            <h4 class="card-title">Contact Details</h4>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="card-header">
                                            <h4 class="card-title">Additional Details</h4>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 placeholder-glow">
                                        <span class="placeholder w-100 h-200"></span>
                                    </div>
                                    <div class="col-md-6 placeholder-glow">
                                        <span class="placeholder w-100 h-200"></span>
                                    </div>
                                    <div class="col-md-4 placeholder-glow mt-2">
                                        <span class="placeholder w-25 p-3"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" v-else>
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="card-header row p-0">
                                            <div class="col-md-2">
                                                <h6 class="card-title mb-0">General Details</h6>
                                            </div>
                                            <div class="col-md-8">
                                                <h5 class="text-center text-uppercase text-primary cursor mb-0">
                                                    {{ hotel_fields.property_code }}
                                                    <i class="fas fa-copy fs-4 ms-1"
                                                        @click="copyCode(hotel_fields.property_code)"></i>
                                                </h5>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 placeholder-glow">
                                        <div class="mb-3">
                                            <label class="form-label">NAME <span class="text-danger">*</span></label>
                                            <input class="form-control" v-model="hotel_fields.name" type="text"
                                                autocomplete="off">
                                        </div>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <div class="mb-3">
                                            <label class="form-label">BRAND <span class="text-danger">*</span></label>
                                            <input class="form-control" v-model="hotel_fields.brand" type="text"
                                                autocomplete="off" disabled>
                                        </div>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <div class="mb-3">
                                            <label class="form-label">CURRENCY <span class="text-danger">*</span></label>
                                            <select class="form-control" v-model="hotel_fields.currency">
                                                <option v-for="option in currency_option" :value="option.value" :key="option.value">
                                                    {{ option.text }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <div class="mb-3">
                                            <label class="form-label">RATING <span class="text-danger">*</span></label>
                                            <select class="form-control" v-model="hotel_fields.rating">
                                                <option v-for="option in hotel_stars" :value="option.value" :key="option.value">
                                                    {{ option.text }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div class="card-header">
                                            <h4 class="card-title">Address Details</h4>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-8 placeholder-glow">
                                        <span class="placeholder w-100 p-4"></span>
                                    </div>
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-4 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12">
                                        <div class="card-header">
                                            <h4 class="card-title">Contact Details</h4>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                    <div class="col-md-3 placeholder-glow">
                                        <span class="placeholder w-100"></span>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-12">
                                        <div class="card-header">
                                            <h4 class="card-title">Additional Details</h4>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 placeholder-glow">
                                        <span class="placeholder w-100 h-200"></span>
                                    </div>
                                    <div class="col-md-6 placeholder-glow">
                                        <span class="placeholder w-100 h-200"></span>
                                    </div>
                                    <div class="col-md-4 placeholder-glow mt-2">
                                        <span class="placeholder w-25 p-3"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
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
    name: "Hotel",
    data() {
        return {
            isLoading: true,
            hotel_fields: {},
            currency_option: [
                { text: "USD", value: true },
                { text: "INR", value: false }
            ],
            hotel_stars :[
                { text: "1", value: 1},
                { text: "2", value: 2},
                { text: "3", value: 3},
                { text: "4", value: 4},
                { text: "5", value: 5},
                { text: "6", value: 6},
                { text: "7", value: 7}
            ]
        }
    },
    async mounted() {
        await this.getHotel();
    },
    methods: {
        copyCode(code) {
            var input = document.createElement("textarea");
            input.innerHTML = code;
            document.body.appendChild(input);
            input.select();
            var result = document.execCommand("copy");
            document.body.removeChild(input);
            Toast.show({
                icon: "success",
                title: "Copied"
            });
            return result;
        },
        getHotel() {
            UserService.getHotelsList().then((response) => {
                this.hotel_fields = response;
                console.log(response);
                // this.phone_number_iso = response.phone_number_iso;
                // this.phone_number = response.phone_number;

                // this.front_desk_number_iso = response.front_desk_number_iso;
                // this.front_desk_number = response.front_desk_number;

                // this.whatsapp_number_iso = response.whatsapp_number_iso;
                // this.whatsapp_number = response.whatsapp_number;

                // this.sms_number_iso = response.sms_number_iso;
                // this.sms_number = response.sms_number;

                // let date_format =
                //     response.date_format != null ? response.date_format : "MMM-DD-YYYY";
                // let time_format =
                //     response.time_formate !== null ? response.time_formate : "HH:MM:SS";
                // let date_time_format =
                //     response.date_time_format !== null
                //         ? response.date_time_format
                //         : "MM-DD-YYYY HH:MM:SS";

                // this.logo.url = response.logo !== null ? response.logo : "";
                // this.favicon_icon.url =
                //     response.favicon_icon !== null ? response.favicon_icon : "";
                // const rewards_website_join_url =
                //     response.brand.rewards_website_join_url;
                // const rewards_website_url = response.rewards_website_url;
                // const brand = response.brand.name;
                // this.hotel_fields = {
                //     ...this.hotel_fields,
                //     phone_number,
                //     front_desk_number,
                //     whatsapp_number,
                //     sms_number,
                //     date_format,
                //     time_format,
                //     date_time_format,
                //     rewards_website_join_url,
                //     rewards_website_url,
                //     brand,
                // };
                this.isLoading = false;
            })
        }
    }
};
</script>
  