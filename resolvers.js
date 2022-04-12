const Contact = require('./models/Contact')

//Resolvers
const resolvers = {
    Query: {
        hello : () => {
            return 'Hello World';
        },
        getAllContacts: async () => {
            return Contact.find();
        },

        getContact: async (_parent, {id}, _context, _info) => {
            return await Contact.findById(id);
        }
    },

    Mutation : {
        createContact : async (parent, args, context, info) => {
            const { prenom, nom, courriel, telephone } = args;
            const contact = new Contact({
                prenom,
                nom,
                courriel,
                telephone
            });
            await contact.save()
            return contact;
        },

        deleteContact : async (parent, args, context, info) => {
            const { id } = args;
            await Contact.findByIdAndDelete(id);
            return "Contact deleted";
        },

        updateContact : async (parent, args, context, info) => {
            const { id } = args
            const{ prenom, nom, courriel, telephone } = args.contact;
            const contact = await Contact.findByIdAndUpdate(
                id,
                {prenom, nom, courriel, telephone},
                {new: true}
                );
            return contact;
        }
    }
};

module.exports = resolvers;