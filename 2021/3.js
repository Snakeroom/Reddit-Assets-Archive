// https://www.redditstatic.com/desktop2x/3.0df6d2a0f5430291199f.js
// Retrieved at 11/4/2021, 4:00:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[3], {
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
				await t(s.z());
				const _ = i(),
					l = e.params.verificationToken,
					m = e.queryParams && e.queryParams.source;
				if (m && Object(o.a)(Object(a.b)(m)(_)), !Object(d.K)(_)) return Object(c.a)(t, _);
				const O = await t(Object(u.b)(l));
				O === n.a.Success && Object(o.a)(Object(a.d)()(_)), t(Object(r.c)(`/?verifiedEmail=${O}`))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/3.0df6d2a0f5430291199f.js.map