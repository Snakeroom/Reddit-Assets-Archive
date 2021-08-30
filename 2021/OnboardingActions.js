// https://www.redditstatic.com/desktop2x/OnboardingActions.2867574c7adb31888b6d.js
// Retrieved at 8/30/2021, 12:20:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OnboardingActions"], {
		"./src/reddit/actions/onboarding/index.ts": function(e, s, t) {
			"use strict";
			t.r(s);
			var r = t("./src/reddit/actions/login.ts"),
				n = t("./node_modules/reselect/es/index.js"),
				c = t("./src/reddit/helpers/localStorage/index.ts"),
				d = t("./src/reddit/selectors/experiments/onboarding.ts"),
				i = t("./src/reddit/selectors/user.ts");
			const o = Object(n.a)(c.W, e => e),
				a = Object(n.a)(o, d.a, i.N, i.O, (e, s, t, r) => !e && s && t && r);
			s.default = () => async (e, s) => {
				const t = s();
				a(t) && e(Object(r.c)())
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingActions.2867574c7adb31888b6d.js.map