// https://www.redditstatic.com/desktop2x/8.aeeed673791505d5f25e.js
// Retrieved at 2/22/2022, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[8], {
		"./src/reddit/actions/pages/emailVerification.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "emailVerificationRequested", (function() {
				return O
			}));
			var r = i("./node_modules/react-router-redux/es/index.js"),
				s = i("./src/reddit/actions/preferences.ts"),
				c = i("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				a = i("./src/reddit/helpers/trackers/emailVerification.ts"),
				n = i("./src/reddit/models/EmailSettings/index.ts"),
				d = i("./src/reddit/selectors/user.ts"),
				o = i("./src/telemetry/index.ts"),
				u = i("./src/reddit/actions/emailVerification.ts");
			const O = e => async (t, i) => {
				await t(s.A());
				const O = i(),
					_ = e.params.verificationToken,
					l = e.queryParams && e.queryParams.source;
				if (l && Object(o.a)(Object(a.b)(l)(O)), !Object(d.O)(O)) return Object(c.a)(t, O);
				const m = await t(Object(u.b)(_));
				m === n.a.Success && Object(o.a)(Object(a.d)()(O)), t(Object(r.c)(`/?verifiedEmail=${m}`))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/8.aeeed673791505d5f25e.js.map