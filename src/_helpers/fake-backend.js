import { Country } from './'

export function configureFakeBackend() {
    // array in local storage for user records
    let users = JSON.parse(localStorage.getItem('users')) || [
        { 
            id: 1,
            name: 'Ann Henry',
            birthdate: '04/12/1990',
            jobTitle: 'Product manager',
            country: 'United States',
            salary: '60,000'
        },
        { 
            id: 2,
            name: 'Annette Williamson',
            birthdate: '20/04/1985',
            jobTitle: 'CEO',
            country: 'United States',
            salary: '60,000'
        },
        { 
            id: 3,
            name: 'Philip Alexander',
            birthdate: '25/07/1989',
            jobTitle: 'Software engineer',
            country: 'United States',
            salary: '60,000'
        },

    ];

    // monkey patch fetch to setup fake backend
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
                const { method } = opts;
                switch (true) {
                    case url.endsWith('/users') && method === 'GET':
                        return getUsers();
                    case url.match(/\/users\/\d+$/) && method === 'GET':
                        return getUserById();
                    case url.endsWith('/users') && method === 'POST':
                        return createUser();
                    case url.match(/\/users\/\d+$/) && method === 'PUT':
                        return updateUser();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            function getUsers() {
                return ok(users);
            }

            function getUserById() {
                let user = users.find(x => x.id === idFromUrl());
                return ok(user);
            }
    
            function createUser() {
                const user = body();

                // assign user id and a few other properties then save
                user.id = newUserId();
                user.dateCreated = new Date().toISOString();
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));

                return ok();
            }
    
            function updateUser() {
                let params = body();
                let user = users.find(x => x.id === idFromUrl());

                // update and save user
                Object.assign(user, params);
                localStorage.setItem('users', JSON.stringify(users));

                return ok();
            }
        
            // helper functions

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
            }

            function idFromUrl() {
                const urlParts = url.split('/');
                return parseInt(urlParts[urlParts.length - 1]);
            }

            function body() {
                return opts.body && JSON.parse(opts.body);    
            }

            function newUserId() {
                return users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            }
        });
    }
};