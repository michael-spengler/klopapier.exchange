Feature('landingpage');

Scenario('test landingpage', ({ I }) => {

    I.amOnPage('https://klopapier.exchange')
    I.wait(4)
    I.see('Klopapier Exchange')

});

Scenario('test connect browserwallet', ({ I }) => { // John

    I.amOnPage('https://klopapier.exchange')
    I.wait(4)
    I.connectBrowserWallet()

});

Scenario('test user swapping from ETH to CBWP', ({ I }) => { // Fabian

    I.amOnPage('https://klopapier.exchange')
    I.wait(4)
    I.swapFromETHToCBWP(0.002)

});


Scenario('test user swapping from CBWP to ETH', ({ I }) => { // Fabian
    // youtube video ... 

    // backing with ETH (e.g. 1 ETH === 100 % of CBWP)

    I.amOnPage('https://klopapier.exchange')
    I.wait(4)
    I.swapCBWPToETH('0.002')

});

