const ApplicationForm = {
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                confirmPassword: '',
                email: '',
                streetAddress: '',
                suburb: '',
                postcode: '',
                mobileNumber: '',
                dateOfBirth: '',
                jobCategory: ''
            },
            errors: {},
            showTerms: false,
            jobCategories: ['AI', 'Data Science', 'Software Development', 'DevOps', 'Cybersecurity']
        }
    },
    methods: {
        validateForm() {
            this.errors = {};
            let isValid = true;
            
            if (!this.form.firstName) {
                this.errors.firstName = 'First name is required';
                isValid = false;
            } else if (!/^[A-Za-z]+$/.test(this.form.firstName)) {
                this.errors.firstName = 'First name must contain letters only';
                isValid = false;
            }
            
            if (!this.form.lastName) {
                this.errors.lastName = 'Last name is required';
                isValid = false;
            } else if (!/^[A-Za-z]+$/.test(this.form.lastName)) {
                this.errors.lastName = 'Last name must contain letters only';
                isValid = false;
            }
            
            if (!this.form.username) {
                this.errors.username = 'Username is required';
                isValid = false;
            } else if (this.form.username.length < 3) {
                this.errors.username = 'Username must be at least 3 characters';
                isValid = false;
            }
            
            if (!this.form.password) {
                this.errors.password = 'Password is required';
                isValid = false;
            } else if (this.form.password.length < 8) {
                this.errors.password = 'Password must be at least 8 characters';
                isValid = false;
            } else if (!/[$%^&*]/.test(this.form.password)) {
                this.errors.password = 'Password must include at least one special character ($, %, ^, &, *)';
                isValid = false;
            }
            
            if (this.form.password !== this.form.confirmPassword) {
                this.errors.confirmPassword = 'Passwords do not match';
                isValid = false;
            }
            
            if (!this.form.email) {
                this.errors.email = 'Email is required';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
                this.errors.email = 'Please enter a valid email address';
                isValid = false;
            }
            
            if (this.form.streetAddress && this.form.streetAddress.length > 40) {
                this.errors.streetAddress = 'Street address must be less than 40 characters';
                isValid = false;
            }
            
            if (this.form.suburb && this.form.suburb.length > 20) {
                this.errors.suburb = 'Suburb must be less than 20 characters';
                isValid = false;
            }
            
            if (!this.form.postcode) {
                this.errors.postcode = 'Postcode is required';
                isValid = false;
            } else if (!/^\d{4}$/.test(this.form.postcode)) {
                this.errors.postcode = 'Postcode must be exactly 4 digits';
                isValid = false;
            }
            
            if (!this.form.mobileNumber) {
                this.errors.mobileNumber = 'Mobile number is required';
                isValid = false;
            } else if (!/^04\d{8}$/.test(this.form.mobileNumber)) {
                this.errors.mobileNumber = 'Mobile number must be exactly 10 digits and start with 04';
                isValid = false;
            }
            
            if (!this.form.dateOfBirth) {
                this.errors.dateOfBirth = 'Date of birth is required';
                isValid = false;
            } else {
                const birthDate = new Date(this.form.dateOfBirth);
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                
                if (age < 16) {
                    this.errors.dateOfBirth = 'You must be at least 16 years old';
                    isValid = false;
                }
            }
            
            if (!this.form.jobCategory) {
                this.errors.jobCategory = 'Please select a job category';
                isValid = false;
            }
            
            return isValid;
        },
        submitForm() {
            if (this.validateForm()) {
                document.getElementById('applicationForm').submit();
            }
        },
        toggleTerms() {
            this.showTerms = !this.showTerms;
        }
    },
    template: `
        <div class="card">
            <div class="card-body">
                <form id="applicationForm" method="post" action="http://mercury.swin.edu.au/cos30043/s104315180/formtest.php" @submit.prevent="submitForm">
                    <!-- Personal Information -->
                    <fieldset class="mb-3">
                        <legend>Personal Information</legend>
                        
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="firstName" class="form-label">First Name *</label>
                                <input type="text" class="form-control" id="firstName" v-model="form.firstName" 
                                    :class="{'is-invalid': errors.firstName}">
                                <div class="invalid-feedback" v-if="errors.firstName">{{ errors.firstName }}</div>
                            </div>
                            
                            <div class="col-md-6">
                                <label for="lastName" class="form-label">Last Name *</label>
                                <input type="text" class="form-control" id="lastName" v-model="form.lastName"
                                    :class="{'is-invalid': errors.lastName}">
                                <div class="invalid-feedback" v-if="errors.lastName">{{ errors.lastName }}</div>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <label for="dob" class="form-label">Date of Birth *</label>
                            <input type="date" class="form-control" id="dob" v-model="form.dateOfBirth"
                                :class="{'is-invalid': errors.dateOfBirth}">
                            <div class="invalid-feedback" v-if="errors.dateOfBirth">{{ errors.dateOfBirth }}</div>
                        </div>
                    </fieldset>
                    
                    <!-- Account Information -->
                    <fieldset class="mb-3">
                        <legend>Account Information</legend>
                        
                        <div class="mb-3">
                            <label for="username" class="form-label">Username *</label>
                            <input type="text" class="form-control" id="username" v-model="form.username"
                                :class="{'is-invalid': errors.username}">
                            <div class="invalid-feedback" v-if="errors.username">{{ errors.username }}</div>
                        </div>
                        
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="password" class="form-label">Password *</label>
                                <input type="password" class="form-control" id="password" v-model="form.password"
                                    :class="{'is-invalid': errors.password}">
                                <div class="invalid-feedback" v-if="errors.password">{{ errors.password }}</div>
                            </div>
                            
                            <div class="col-md-6">
                                <label for="confirmPassword" class="form-label">Confirm Password *</label>
                                <input type="password" class="form-control" id="confirmPassword" v-model="form.confirmPassword"
                                    :class="{'is-invalid': errors.confirmPassword}">
                                <div class="invalid-feedback" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</div>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <label for="email" class="form-label">Email *</label>
                            <input type="email" class="form-control" id="email" v-model="form.email"
                                :class="{'is-invalid': errors.email}">
                            <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
                        </div>
                    </fieldset>
                    
                    <!-- Contact Information -->
                    <fieldset class="mb-3">
                        <legend>Address</legend>
                        
                        <div class="mb-3">
                            <label for="streetAddress" class="form-label">Street Address</label>
                            <input type="text" class="form-control" id="streetAddress" v-model="form.streetAddress"
                                :class="{'is-invalid': errors.streetAddress}">
                            <div class="invalid-feedback" v-if="errors.streetAddress">{{ errors.streetAddress }}</div>
                        </div>
                        
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <label for="suburb" class="form-label">Suburb</label>
                                <input type="text" class="form-control" id="suburb" v-model="form.suburb"
                                    :class="{'is-invalid': errors.suburb}">
                                <div class="invalid-feedback" v-if="errors.suburb">{{ errors.suburb }}</div>
                            </div>
                            
                            <div class="col-md-6">
                                <label for="postcode" class="form-label">Postcode *</label>
                                <input type="text" class="form-control" id="postcode" v-model="form.postcode"
                                    :class="{'is-invalid': errors.postcode}">
                                <div class="invalid-feedback" v-if="errors.postcode">{{ errors.postcode }}</div>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <label for="mobileNumber" class="form-label">Mobile Number *</label>
                            <input type="text" class="form-control" id="mobileNumber" v-model="form.mobileNumber"
                                :class="{'is-invalid': errors.mobileNumber}">
                            <div class="invalid-feedback" v-if="errors.mobileNumber">{{ errors.mobileNumber }}</div>
                        </div>
                    </fieldset>
                    
                    <!-- Job Preferences -->
                    <fieldset class="mb-3">
                        <legend>Job Preferences</legend>
                        
                        <div class="mb-3">
                            <label for="jobCategory" class="form-label">Preferred Job Category *</label>
                            <select class="form-select" id="jobCategory" v-model="form.jobCategory"
                                :class="{'is-invalid': errors.jobCategory}">
                                <option value="">Select a category</option>
                                <option v-for="category in jobCategories" :key="category" :value="category">
                                    {{ category }}
                                </option>
                            </select>
                            <div class="invalid-feedback" v-if="errors.jobCategory">{{ errors.jobCategory }}</div>
                        </div>
                    </fieldset>
                    
                    <!-- Terms and Conditions -->
                    <div class="mb-3">
                        <button type="button" class="btn btn-secondary" @click="toggleTerms">
                            Toggle Terms and Conditions
                        </button>
                        
                        <div class="card mt-2" v-if="showTerms">
                            <div class="card-body">
                                <h5>Terms and Conditions</h5>
                                <p>By submitting this application, you agree to our terms and conditions.</p>
                                <p>This includes allowing us to process your personal information for job application purposes and to contact you regarding job opportunities.</p>
                                <p>Your data will be handled according to our privacy policy and applicable data protection laws.</p>
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit Application</button>
                </form>
            </div>
        </div>
    `
}