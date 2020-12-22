Feature('landingpage');

Scenario('test something', ({ I }) => {

    I.amOnPage('https://klopapier.exchange')
    I.wait(4)
    I.see('Klopapier Exchange')
    I.click('Play')
    I.wait(4)
    I.see('In our game people who work at a central bank are paid for printing Central Bank Wipepaper (CBWP) so you will first need to give them some Ether to print a bunch of CBWP for you.')
});
