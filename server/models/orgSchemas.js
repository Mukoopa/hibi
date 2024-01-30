const org_schema = new mongoose.schema({
    name: [String],

});

const Org = mongoose.model("Org", OrgSchema)

// const (org_name) = new Business({name: "(Org Name)"})

// org_name.save()
//     .then((student))

 module.export