document.addEventListener("onOverlayStateUpdate", function (e) {
	if (!e.detail.isLocked) {
		displayResizeHandle();
	} else {
		hideResizeHandle();
	}
});

addOverlayListener("LogLine", (e) => {
	if (e.line[0] === "21" && e.line[9].slice(-4) !== "1000") {
		// log(e)
		addDamage(e.line)
	}

	if (e.line[0] === "26" && Object.keys(cards.cards).includes(e.line[3])) {
		startCard(e.line)
	}

	if (e.line[0] === "30" && cards.stopCodes.includes(e.line[2])) {
		stopCard(e.line)
	}
});

addOverlayListener("PartyChanged", (e) => {
	updateParty(e.party)
});

startOverlayEvents();
