const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            infoCharacter: [],
            infoPlanet: [],
            infoVehicle: [],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            /**
            	fetch().then().then(data => setStore({ "foo": data.bar }))
            */

            infoCharacter: () => {
                fetch("https://swapi.dev/api/people")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        infoCharacter: data.results
                    }))
                    .catch((err) => console.error(err));
            },


            infoPlanet: () => {
                fetch("https://swapi.dev/api/planets")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        infoPlanet: data.results
                    }))
                    .catch((err) => console.error(err));
            },

            infoVehicle: () => {
                fetch("https://swapi.dev/api/vehicles")
                    .then((res) => res.json())
                    .then((data) => setStore({
                        infoVehicle: data.results
                    }))
                    .catch((err) => console.error(err));
            },



        },
        changeColor: (index, color) => {
            //get the store
            const store = getStore();

            //we have to loop the entire demo array to look for the respective index
            //and change its color
            const demo = store.demo.map((elm, i) => {
                if (i === index) elm.background = color;
                return elm;
            });

            //reset the global store
            setStore({
                demo: demo
            });
        }
    }
};


export default getState;