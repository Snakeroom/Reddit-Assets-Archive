// https://www.redditstatic.com/desktop2x/9.0c56e89410a67eb269de.js
// Retrieved at 3/29/2022, 10:20:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[9], {
		"./src/reddit/actions/pages/emailVerification.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "emailVerificationRequested", (function() {
				return _
			}));
			var r = i("./node_modules/react-router-redux/es/index.js"),
				s = i("./src/reddit/actions/preferences.ts"),
				c = i("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				a = i("./src/reddit/helpers/trackers/emailVerification.ts"),
				n = i("./src/reddit/models/EmailSettings/index.ts"),
				d = i("./src/reddit/selectors/user.ts"),
				o = i("./src/telemetry/index.ts"),
				u = i("./src/reddit/actions/emailVerification.ts");
			const _ = e => async (t, i) => {
				await t(s.A());
				const _ = i(),
					l = e.params.verificationToken,
					m = e.queryParams && e.queryParams.source;
				if (m && Object(o.a)(Object(a.b)(m)(_)), !Object(d.P)(_)) return Object(c.a)(t, _);
				const O = await t(Object(u.b)(l));
				O === n.a.Success && Object(o.a)(Object(a.d)()(_)), t(Object(r.c)(`/?verifiedEmail=${O}`))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/9.0c56e89410a67eb269de.js.map