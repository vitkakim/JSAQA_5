Feature: Search a course
    Scenario: Should book available ticket
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user choose date 4
        When user choose time of a movie 2 2
        When user choose a sit 3 7
        When user click on the booking button
        When user click on the button to get booking code 
        Then user get the code and text "Электронный билет"

    Scenario: Should book some available tickets
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user choose date 4
        When user choose time of a movie 2 2
        When user choose a sit 5 8
        When user choose a sit 5 9
        When user click on the booking button
        When user click on the button to get booking code 
        Then user get the code and text "Электронный билет"

    Scenario: Should try to book unavailable ticket, but unsuccessfully
        Given user is on page "http://qamid.tmweb.ru/client/index.php"
        When user choose date 4
        When user choose time of a movie 2 2
        When user choose a sit 3 7
        When user click on the booking button
        Then button for booking is inactive "true"