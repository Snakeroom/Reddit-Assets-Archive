// https://www.redditstatic.com/desktop2x/OnboardingActions.538e4be29d8ee1b57189.js
// Retrieved at 12/16/2021, 5:30:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OnboardingActions"], {
		"./src/reddit/actions/onboarding/index.ts": function(t, n, s) {
			"use strict";
			s.r(n), s.d(n, "resetGenderUpdateState", (function() {
				return o
			}));
			var c = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/login.ts"),
				e = s("./src/reddit/actions/onboarding/constants.ts"),
				i = s("./src/reddit/selectors/onboarding.ts");
			const o = Object(c.a)(e.a);
			n.default = () => async (t, n) => {
				const s = n();
				Object(i.c)(s) && t(Object(r.c)())
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingActions.538e4be29d8ee1b57189.js.map