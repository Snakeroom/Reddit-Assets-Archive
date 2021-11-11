// https://www.redditstatic.com/desktop2x/Report.996eb1a90bc01cf1a4fd.js
// Retrieved at 11/11/2021, 4:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Report"], {
		"./src/reddit/actions/pages/report/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "reportPageFailed", (function() {
				return g
			})), r.d(t, "reportPagePending", (function() {
				return _
			})), r.d(t, "reportPageLoaded", (function() {
				return O
			})), r.d(t, "reportPageInitialReasonSet", (function() {
				return j
			})), r.d(t, "reportPageRequested", (function() {
				return x
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts");
			var c = r("./src/reddit/actions/reportPageRules/constants.ts");
			const d = Object(n.a)(c.a),
				p = () => async (e, t, {
					apiContext: r
				}) => {
					const n = t();
					if (!n.user || !n.user.language) return;
					const c = await (e => Object(a.a)(Object(o.a)(e, [i.a]), {
						endpoint: `${e.apiUrl}/api/report_page_rules.json`,
						method: s.jb.GET
					}))(r());
					if (c.ok) {
						const {
							rules: t
						} = c.body, r = t.map(e => (e.nextStepReasons && e.nextStepReasons.length || (e.nextStepReasons = [{
							...e
						}]), e));
						e(d(r))
					}
				};
			var u = r("./src/reddit/endpoints/me/index.ts"),
				b = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				l = r("./src/reddit/actions/pages/report/constants.ts");
			const g = Object(n.a)(l.b),
				_ = Object(n.a)(l.d),
				O = Object(n.a)(l.c),
				j = Object(n.a)(l.a),
				x = e => async (t, r, {
					apiContext: n
				}) => {
					let s;
					e.queryParams && e.queryParams.reason && (s = e.queryParams.reason, t(j(s))), t(p()), t(_());
					const a = await Object(u.a)(n());
					if (a.ok && a.body)
						if (a.body.account) t(O(a.body));
						else {
							const e = r();
							Object(b.a)(t, e)
						}
					else t(g(a.error))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Report.996eb1a90bc01cf1a4fd.js.map