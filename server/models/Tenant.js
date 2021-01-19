const mongoose = require('mongoose');

const { Schema } = mongoose;


const tenantSchema = new Schema ({
    leaseDate: {
        type: String,
        trim: true
    },
    activeTenant: {
        type: Boolean,
        required: true
    }
})

const TenantData = mongoose.model('Tenant', tenantSchema);

module.exports = TenantData;