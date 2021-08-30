// https://www.redditstatic.com/desktop2x/OnboardingActions.a67fd725d6616d77f4ae.js
// Retrieved at 8/30/2021, 3:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OnboardingActions"], {
		"./src/reddit/actions/onboarding/index.ts": function(n, t, s) {
			"use strict";
			s.r(t);
			var i = s("./src/reddit/actions/login.ts"),
				c = s("./src/reddit/selectors/onboarding.ts");
			t.default = () => async (n, t) => {
				const s = t();
				Object(c.b)(s) && n(Object(i.c)())
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingActions.a67fd725d6616d77f4ae.js.map