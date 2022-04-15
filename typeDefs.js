//Imports
const { gql } = require('apollo-server-express')

//TypeDefs
const typeDefs = gql`
    type Contact {
        id: ID!
        prenom: String!
        nom: String!
        courriel: String!
        telephone: String!
        ville: String!
        province: String!
        codePostal: String!
        pays: String!
        commentaires1: String
        commentaires2: String
    }

    type Query {
        hello : String 
        
        getAllContacts: [Contact]    
        
        getContact(id: ID): Contact
    }
    
    input ContactInput {
        prenom: String!,
        nom: String!,
        courriel: String,
        telephone: String
    }
    
    
    type Mutation {
        createContact(
            prenom: String!,
            nom: String!,
            courriel: String!,
            telephone: String!,
            ville: String!,
            province: String!,
            codePostal: String!,
            pays: String!,
            commentaires1: String,
            commentaires2: String): Contact 
            
        deleteContact(id: ID) : String
        
        updateContact(id: ID!, contact: ContactInput!) : Contact
    }
`;

module.exports = typeDefs;