(function(){

  angular
    .module('distress')
    .controller('ContactCtrl', ContactCtrl);

  ContactCtrl.$inject = ['$scope', 'ContactEditor'];

  function ContactCtrl($scope, ContactEditor){
    $scope.contacts = [];
    $scope.addContactForm = false;
    $scope.addContactBtn = true;

    $scope.showAddContactForm = function () {
      $scope.addContactForm = true;
      $scope.addContactBtn = false;
    }

    // Will add a contact into the users emergency contacts.
    // Then it syncs with the database.
    $scope.addContact = function(){
      var person = {name: $scope.contact.name, phone: $scope.contact.phone};

      ContactEditor.addContact(person).then(function(response){
        if(response.status === 200){
          $scope.getContacts();
          $scope.contact.name = '';
          $scope.contact.phone = '';
        }
      });
    };

    // This function will get all the emergency contacts for a user.
    $scope.getContacts = function(){
      var contactsFromDB = ContactEditor.getContacts().then(function(result){
        $scope.contacts = result;
        $scope.contacts.forEach(function(contact){
          if(!contact.editing)
            contact.editing = false;
        });
      });
    };

    // This function will update a contact based on the id.
    $scope.updateContact = function(){
      ContactEditor.updateContact(this.person).then(function(result){
        this.person.editing = false;
      }.bind(this));
    };

    // This will switch between the editing view and the contact view.
    $scope.editContact = function(view){
      this.person.editing = true;
    }

    $scope.deleteContact = function(person){
      ContactEditor.deleteContact(person).then(function(result){
        person.editing = false;
        $scope.getContacts();      
      });
    }

    $scope.editCancel = function(view){
      this.person.editing = false;
    }

    $scope.getContacts();
  }
})();
