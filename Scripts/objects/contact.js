let objects;
(function (objects) {

    class Contact {
        constructor(name = "", number = "", email = "", address = "") {
            this.name = name;
            this.number = number;
            this.email = email;
            this.address = address;
        }
    }

    objects.Contact = Contact;

})(objects || (objects = {}));