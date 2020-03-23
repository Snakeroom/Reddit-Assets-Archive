// https://www.redditstatic.com/desktop2x/Report.739c52f59b07dfc185e3.js
// Retrieved at 3/23/2020, 6:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Report"], {
		"./src/reddit/actions/pages/report/index.ts": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts");
			var i = r("./src/reddit/actions/reportPageRules/constants.ts");
			const d = Object(n.a)(i.a),
				p = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const i = t();
					if (!i.user || !i.user.language) return;
					const p = await (e => Object(a.b)(Object(o.a)(e, [c.a]), {
						endpoint: "".concat(e.apiUrl, "/api/report_page_rules.json"),
						method: s.cb.GET
					}))(n());
					if (p.ok) {
						const {
							rules: t
						} = p.body, r = t.map(e => (e.nextStepReasons && e.nextStepReasons.length || (e.nextStepReasons = [Object.assign({}, e)]), e));
						e(d(r))
					}
				};
			var u = r("./src/reddit/endpoints/me/index.ts"),
				b = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				l = r("./src/reddit/actions/pages/report/constants.ts");
			r.d(t, "reportPageFailed", (function() {
				return g
			})), r.d(t, "reportPagePending", (function() {
				return O
			})), r.d(t, "reportPageLoaded", (function() {
				return _
			})), r.d(t, "reportPageInitialReasonSet", (function() {
				return j
			})), r.d(t, "reportPageRequested", (function() {
				return x
			}));
			const g = Object(n.a)(l.b),
				O = Object(n.a)(l.d),
				_ = Object(n.a)(l.c),
				j = Object(n.a)(l.a),
				x = e => async (t, r, n) => {
					let s, {
						apiContext: a
					} = n;
					e.queryParams && e.queryParams.reason && (s = e.queryParams.reason, t(j(s))), t(p()), t(O());
					const o = await Object(u.a)(a());
					if (o.ok && o.body)
						if (o.body.account) t(_(o.body));
						else {
							const e = r();
							Object(b.a)(t, e)
						}
					else t(g(o.error))
				}
		}
	}
]);
//# sourceMappingURL=Report.739c52f59b07dfc185e3.js.map