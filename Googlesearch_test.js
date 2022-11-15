Feature('Googlesearch');

Scenario('TC1- Google Search', ({I}) => {
        I.amOnPage('/');
        I.fillField('q','FIDx');
        I.click("btnK");

        I.wait(6);
    });
