"use strict";

// Exercise 1

    const wait = (number) => {
        return new Promise((res) => {
            setTimeout(() => {
                res(number);
            }, number);
        });
    };

    wait(3000).then((ms) => {
        console.log(`You\'ll see this after ${ms / 1000} seconds`);
    });


// Exercise 2

/*

Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

 */

    const getDateOfMostRecentCommit = (username) => {
        const token = gitHubToken;
        const baseGitHubUrl = 'https://api.github.com';
        const endpoint = `/users/${username}/events`;
        const options = {
            headers: {
                "Authorization": `token ${token}`
            }
        };
        return fetch(baseGitHubUrl + endpoint, options)
            // parse response into JSON
            .then(res => res.json())

            // return most recent push event
            .then((events) => {
                return events.find(event => event.type === "PushEvent");
            })

            // return most recent commit from the event
            .then(event => {
                return event.payload.commits.reverse()[0];
            })

            // fetch details about most recent commit
            .then(commit => {
                return fetch(commit.url);
            })

            // parse response into JSON
            .then(res => res.json())

            // return the specific date
            .then(commitDetails => {
                return new Date(commitDetails.commit.author.date).toDateString();
            })
    };

    getDateOfMostRecentCommit("jreich5")
        .then(console.log)
        .catch(console.log);





