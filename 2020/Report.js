// https://www.redditstatic.com/desktop2x/Report.e429102c2cb73eb1a8d1.js
// Retrieved at 9/8/2020, 4:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Report"], {
		"./src/reddit/actions/pages/report/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "reportPageFailed", (function() {
				return _
			})), n.d(t, "reportPagePending", (function() {
				return g
			})), n.d(t, "reportPageLoaded", (function() {
				return O
			})), n.d(t, "reportPageInitialReasonSet", (function() {
				return P
			})), n.d(t, "reportPageRequested", (function() {
				return R
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts");
			var i = n("./src/reddit/actions/reportPageRules/constants.ts");
			const d = Object(s.a)(i.a),
				u = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					const i = t();
					if (!i.user || !i.user.language) return;
					const u = await (e => Object(a.a)(Object(o.a)(e, [c.a]), {
						endpoint: "".concat(e.apiUrl, "/api/report_page_rules.json"),
						method: r.db.GET
					}))(s());
					if (u.ok) {
						const {
							rules: t
						} = u.body, n = t.map(e => (e.nextStepReasons && e.nextStepReasons.length || (e.nextStepReasons = [Object.assign({}, e)]), e));
						e(d(n))
					}
				};
			var p = n("./src/reddit/endpoints/me/index.ts"),
				b = n("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				l = n("./src/reddit/actions/pages/report/constants.ts");
			const _ = Object(s.a)(l.b),
				g = Object(s.a)(l.d),
				O = Object(s.a)(l.c),
				P = Object(s.a)(l.a),
				R = e => async (t, n, s) => {
					let r, {
						apiContext: a
					} = s;
					e.queryParams && e.queryParams.reason && (r = e.queryParams.reason, t(P(r))), t(u()), t(g());
					const o = await Object(p.a)(a());
					if (o.ok && o.body)
						if (o.body.account) t(O(o.body));
						else {
							const e = n();
							Object(b.a)(t, e)
						}
					else t(_(o.error))
				}
		},
		"./src/reddit/actions/reportPageRules/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "REPORT_PAGE_RULES__LOADED"
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Report.e429102c2cb73eb1a8d1.js.map