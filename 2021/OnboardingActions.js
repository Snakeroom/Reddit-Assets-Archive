// https://www.redditstatic.com/desktop2x/OnboardingActions.d7b3a6076108ff26b90f.js
// Retrieved at 8/18/2021, 7:50:06 PM by Reddit Dataminer v1.0.0
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
				a = Object(n.a)(o, d.a, i.M, i.N, (e, s, t, r) => !e && s && t && r);
			s.default = () => async (e, s) => {
				const t = s();
				a(t) && e(Object(r.c)())
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OnboardingActions.d7b3a6076108ff26b90f.js.map