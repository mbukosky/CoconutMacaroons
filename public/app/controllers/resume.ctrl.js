angular.module('app').controller('ResumeCtrl', ['$scope', '$anchorScroll', '$document', '$location',
    function($scope, $anchorScroll, $document, $location) {

        // Only scroll when we navigate to the resume tab
        if ($location.$$hash == 'resume') {
            var someElement = angular.element(document.getElementById('resume'));
            $document.scrollToElement(someElement, 0, 2000);
        } else if ($location.$$hash == 'contact') {
            //For some reason the height of the document is now calculating correctly,
            //so lets just hard code it for now
            $document.scrollTop(3000, 2000)
        }

        $scope.film = [{
            title: "By the Wake (2016)",
            role: "Jessie (supporting)",
            production: "Joe Cardamone / Twelvesteed Productions"
        }, {
            title: "The Spaceship (feature, 2015; co-produced)",
            role: "Anna Shurin (lead)",
            production: "Eric Norcross / Dreamland Studios LLC"
        }, {
            title: "Caroline of Virginia (short)*",
            role: "Caroline (lead)",
            production: "Eric Norcross / Norcross Media LLC"
        }, {
            title: "Flowers (feature)",
            role: "Katie (lead)",
            production: "Nick Shakos / Q over Q Films"
        }, {
            title: "Tragedy By The Sea (short)",
            role: "Bereaved Young Mother (lead)",
            production: "Cutter Hodierne / Figure on the Wall Prod."
        }, {
            title: "Book of Lore (feature)",
            role: "Kristin Matthews (supporting)",
            production: "Chris LaMartina / LaMartina Productions"
        }, {
            title: "Mary (short)",
            role: "Leslie (supporting)",
            production: "Christopher Cornwell / Drive-In Productions"
        }, {
            title: "Aduri (feature)",
            role: "News Anchor Woman",
            production: "Riyadh Mahmood / Company Ink Prod."
        }, {
            title: "Unfinished Business (short)",
            role: "Monica (lead)",
            production: "Riyadh Mahmood / Mahmood Prod."
        }, {
            title: "The Azure Sky (short)",
            role: "Vivian (supporting)",
            production: "Christopher Fernandez / Dying Rhyme Prod."
        }, {
            title: "Syringe (short)",
            role: "Melissa (lead)",
            production: "Steven Nahaj / KDK Productions"
        }, {
            title: "bent (feature)",
            role: "Autumn (supporting)",
            production: "Art Hall / Buckwilde Entertainment LLC"
        }, {
            title: "At The Margin (short)",
            role: "Vak Cell (lead)",
            production: "Christopher Cornwell / Drive-In Productions"
        }, {
            title: "National Treasure: Book of Secrets",
            role: "White House Staffer",
            production: "Jon Turteltaub / Jerry Bruckheimer Films"
        }, {
            title: "Step Up",
            role: "Maryland School of Arts Dancer",
            production: "Anne Fletcher / Eketahuna LLC"
        }, {
            title: "Noah (2014)",
            role: "Refugee",
            production: "Darren Aronofsky / Protozoa Pictures"
        }];

        $scope.theater = {
            off_broadway: [{
                title: "The Columbine Project",
                role: "Jen/Becca, u.s. Rachel Scott",
                production: "Paul Storiale / The Actor's Temple Theater"
            }],
            off_off_broadway: [{
                title: "All My Sons",
                role: "Ann Deever (lead)",
                production: "Susanna Frazer / The Morningside Players"
            }, {
                title: "Father Mike",
                role: "Angela Francis (supporting)",
                production: "Mark Harborth / The Gallery Players"
            }, {
                title: "Measuring Up",
                role: "Lorna (supporting)",
                production: "John Cooper / Turtle Shell Productions"
            }, {
                title: "The Battle of Puebla",
                role: "Amy (lead)",
                production: "Chris Bell/ Phare Play Productions"
            }, {
                title: "Love & Humor - Showcase",
                role: "Sarah (supporting)",
                production: "Bobby Holder / The Actor\'s Project NYC"
            }, {
                title: "Enigmatic Lucidity",
                role: "Angelina (lead)",
                production: "Michael Patranek / 13th Street Repertory"
            }, {
                title: "Three Cheers for the UFO",
                role: "Phoebe (lead)",
                production: "Malika Moro-Cohen / 13th Street Repertory"

            }],
            baltimore: [{
                title: "The Green Sweater (Staged Reading, 2016)",
                role: "Parker (lead)",
                production: "Hannah Fogler and Alexander Scally"
            }, {
                title: "You Can’t Take It With You",
                role: "Essie Carmichael (supporting)",
                production: "Harry McShea / Perry Hall Theater"
            }, {
                title: "Oklahoma",
                role: "Dream Laurey (dance feature)",
                production: "Harry McShea / Perry Hall Theater"
            }, {
                title: "A Christmas Carol",
                role: "Martha Cratchit (supporting)",
                production: "Paul Sacks / Wishing Star Theater"
            }, {
                title: "Wind in the Willows",
                role: "Piper (dance feature)",
                production: "Paul Sacks / Wishing Star Theater"
            }]
        };

        $scope.tv = [{
            title: "Most Likely To...",
            role: "Rebecca (principal)",
            production: "Greg Palmer / Discovery ID Network"
        }, {
            title: "Boardwalk Empire (Season 1)",
            role: "Blackstone Hotel Escort",
            production: "Timothy Van Patten / Bootleg Productions"
        }, {
            title: "Oleanna",
            role: "Carol (principal)",
            production: "Cory Stambler / NYU Television Project"
        }, {
            title: "Family Practice",
            role: "Miss Maritz (guest)",
            production: "Eric Norcross / Norcross Media LLC"

        }];

        $scope.web = [{
            title: "In Fear Of: Mnemophobia",
            role: "Emma (principal)",
            production: "Alfredo Salvatore Arcilesi / Scott W. Perry Prod."
        }, {
            title: "Roommates",
            role: "Pam (supporting)",
            production: "Ray Gootz / Ray Gootz Productions"
        }, {
            title: "Connections",
            role: "Lauren (principal)",
            production: "Russell Nohelty / INH Prod. LLC"

        }];

        $scope.rep_roles = [{
            title: "The Lonesome West",
            role: "Girleen Kelleher",
            production: "Terry Schreiber"
        }, {
            title: "Snow Leopards",
            role: "Sally",
            production: "Terry Schreiber"
        }, {
            title: "Brilliant Traces",
            role: "Rosannah Deluce",
            production: "Terry Schreiber"
        }, {
            title: "A Streetcar Named Desire",
            role: "Stella Kowalski",
            production: "Peter Jensen"
        }, {
            title: "A View from the Bridge",
            role: "Catherine",
            production: "Peter Jensen"
        }, {
            title: "42 Seconds From Broadway",
            role: "Robin",
            production: "Peter Jensen"
        }, {
            title: "A Hatful of Rain",
            role: "Celia Pope",
            production: "Robert Verlaque"
        }, {
            title: "American Beauty",
            role: "Jane Burnham",
            production: "Penny Templeton"
        }];

        $scope.training = [{
            title: "Penny Templeton Studio",
            role: "Master Scene Study (3 years)",
            production: "Penny Templeton"
        }, {
            title: "Penny Templeton Studio",
            role: "Advanced On-Camera",
            production: "Penny Templeton, Hank Schob"
        }, {
            title: "Acting on Impulse",
            role: "Improvmania",
            production: "Seth Michael May, Bryan Radtke"
        }, {
            title: "Judy Henderson Casting",
            role: "Advanced Film Master Class",
            production: "Kimberly Graham"
        }, {
            title: "T. Schreiber Studio",
            role: "Scene Study (2 years)",
            production: "Peter Jensen"
        }, {
            title: "T. Schreiber Conservatory",
            role: "Acting Technique",
            production: "Robert Verlaque"
        }, {
            title: "T. Schreiber Conservatory",
            role: "Vocal Production",
            production: "Page Clements"
        }, {
            title: "T. Schreiber Conservatory",
            role: "Body Dynamics",
            production: "Carol Reynolds"
        }, {
            title: "Terry Schreiber Intensive",
            role: "Scene Study (6 weeks; Baltimore)",
            production: "Terry Schreiber"
        }, {
            title: "Mitchell / Rudolph Casting",
            role: "Film / TV Audition Technique",
            production: "Jennifer Rudolph"
        }, {
            title: "Performance Workshop Theatre",
            role: "Acting Workshop",
            production: "Marc Horwitz"
        }, {
            title: "Loch Raven Academy",
            role: "Curriculum",
            production: "Paul Sacks"
        }, {
            title: "Perry Hall High School",
            role: "Curriculum",
            production: "Harry McShea"
        }];

        $scope.special = {
            general: [
                'Stage Combat', 'Basic French', 'Marching Band Pom Squad / Color Guard'
            ],
            dance_movement: [
                'Ballet', 'Modern', 'Jazz', 'Tap', 'Advanced Yoga', 'Pilates', 'Boot Camps', 'Kickboxing'
            ],
            accents: [
                'General American', 'British', 'New York', 'West Irish', 'Southern'
            ],
            fun_facts: [
                'Baltimore native', 'Graduated Magna Cum Laude from UMD', '*CAROLINE OF VIRGINIA won NY Spotlight Award at Manhattan Film Festival (2012)', '*Co-produced and starred in feature film THE SPACESHIP (2015)'
            ]
        };
    }
]);
