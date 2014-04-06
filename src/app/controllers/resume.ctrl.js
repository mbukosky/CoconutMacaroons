angular.module('app').controller('ResumeCtrl', ['$scope',
    function($scope) {

        $scope.film = [{
            title: "The Spaceship",
            role: "Anna Shurin (lead)",
            production: "Eric Norcross / Dreamland Studios LLC"
        }, {
            title: "Caroline of Virginia",
            role: "Caronline (lead)",
            production: "Eric Norcross / Dreamland Studios LLC"
        }, {
            title: "Flowers",
            role: "Katie (lead)",
            production: "Nick Shakos / Q over Q Films"
        }, {
            title: "Tragedy By The Sea<",
            role: "Bereaved Mother (lead)",
            production: "Cutter Hodierne / Figure on the Wall Prod."
        }];

        $scope.theater = {
            off_broadway: [{
                title: "The Columbine Project",
                role: "Jen/Becca, u.s. Rachel Scott",
                production: "Paul Storiale / The Actors Temple Theater"
            }],
            off_off_broadway: [{
                title: "Father Mike",
                role: "Angela Francis (supporting)",
                production: "Mark Harborth / The Gallery Players"
            }, {
                title: "Measuring Up",
                role: "Lorna (supporting)",
                production: "John Cooper / Turtle Shell Productions"
            }],
            baltimore: [{
                title: "You Can’t Take It With You",
                role: "Essie Carmichael",
                production: "Harry McShea / Perry Hall Theater"
            }]
        };

        $scope.tv = [{
            title: "Most Likely To...",
            role: "Rebecca (principal)",
            production: "Greg Palmer / Discovery ID Network"
        }];

        $scope.web = [{
            title: "In Fear Of: Mnemophobia",
            role: "Emma (principal)",
            production: "Alfredo Salvatore Arcilesi / Scott W. Perry"
        }];

        $scope.rep_roles = [{
            title: "The Lonesome West",
            role: "Girleen Kelleher",
            production: "Terry Schreiber"
        }];

        $scope.training = [{
            title: "Penny Templeton Studio",
            role: "Master Scene Study (Ongoing)",
            production: "Penny Templeton"
        }];

        $scope.special = {
            general: [
                'Stage Combat', 'Basic French', 'Clarinet', 'Marching Band Pom Squad'
            ],
            dance_movement: [
                'Ballet', 'Jazz', 'Hip Hop', 'Tap', 'Modern', 'Character', 'Lyrical', 'Yoga', 'Pilates'
            ],
            accents: [
                'General American', 'British', 'New York', 'West Irish', 'Southern'
            ]
        };
    }
]);
