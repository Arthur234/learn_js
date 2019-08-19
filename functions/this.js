let user = {
    name: 'John Johnovich',
    get_name: function ()  {
        console.log(this.name)
    }
};

user.get_name();
