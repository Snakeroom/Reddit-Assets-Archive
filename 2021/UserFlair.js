// https://www.redditstatic.com/desktop2x/UserFlair.fe257954426b7c0222a1.js
// Retrieved at 3/4/2021, 6:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UserFlair"], {
		"./src/reddit/actions/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				d = Object(n.a)(s)
		},
		"./src/reddit/actions/userFlair/userFlair.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "userFlairEnabledSettingPending", (function() {
				return S
			})), r.d(t, "userFlairEnabledSettingSuccess", (function() {
				return g
			})), r.d(t, "userFlairEnabledSettingFailed", (function() {
				return _
			})), r.d(t, "userFlairAllowAssingOwnSettingPending", (function() {
				return I
			})), r.d(t, "userFlairAllowAssingOwnSettingSuccess", (function() {
				return w
			})), r.d(t, "userFlairAllowAssingOwnSettingFailed", (function() {
				return k
			})), r.d(t, "userFlairSaveTemplatePending", (function() {
				return y
			})), r.d(t, "userFlairSaveTemplateSuccess", (function() {
				return A
			})), r.d(t, "userFlairSaveTemplateFailed", (function() {
				return h
			})), r.d(t, "userFlairDeleteTemplatePending", (function() {
				return T
			})), r.d(t, "userFlairDeleteTemplateSuccess", (function() {
				return E
			})), r.d(t, "userFlairDeleteTemplateFailed", (function() {
				return C
			})), r.d(t, "userFlairReorderTemplatesPending", (function() {
				return v
			})), r.d(t, "userFlairReorderTemplatesSuccess", (function() {
				return x
			})), r.d(t, "userFlairReorderTemplatesFailed", (function() {
				return U
			})), r.d(t, "userFlairFetchSuccess", (function() {
				return D
			})), r.d(t, "userFlairMutated", (function() {
				return N
			})), r.d(t, "authorFlairMutated", (function() {
				return R
			})), r.d(t, "userFlairChanged", (function() {
				return P
			})), r.d(t, "toggleUserFlairInSubreddit", (function() {
				return L
			})), r.d(t, "toggleAssignOwnFlairPermission", (function() {
				return M
			})), r.d(t, "saveUserFlairTemplate", (function() {
				return H
			})), r.d(t, "deleteUserFlairTemplate", (function() {
				return z
			})), r.d(t, "reorderUserFlairTemplates", (function() {
				return K
			})), r.d(t, "userFlairLoadedAndModalOpened", (function() {
				return B
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./node_modules/lodash/isEmpty.js"),
				i = r.n(d),
				a = r("./src/reddit/actions/authorFlair.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/endpoints/flair/index.ts"),
				l = r("./src/reddit/helpers/flair.ts"),
				o = r("./src/reddit/models/Flair/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/models/User/index.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/reddit/selectors/userFlair.ts"),
				F = r("./src/lib/initializeClient/installReducer.ts"),
				m = r("./src/reddit/reducers/features/userFlair/index.ts"),
				p = r("./src/reddit/actions/userFlair/constants.ts");
			Object(F.a)({
				features: {
					userFlair: m.a
				}
			});
			const S = Object(s.a)(p.i),
				g = Object(s.a)(p.j),
				_ = Object(s.a)(p.h),
				I = Object(s.a)(p.c),
				w = Object(s.a)(p.d),
				k = Object(s.a)(p.b),
				y = Object(s.a)(p.p),
				A = Object(s.a)(p.q),
				h = Object(s.a)(p.o),
				T = Object(s.a)(p.f),
				E = Object(s.a)(p.g),
				C = Object(s.a)(p.e),
				v = Object(s.a)(p.m),
				x = Object(s.a)(p.n),
				U = Object(s.a)(p.l),
				D = Object(s.a)(p.k),
				N = Object(s.a)(p.r),
				R = Object(s.a)(p.a),
				P = (e, t, r, n, s) => async (d, i, {
					apiContext: a
				}) => {
					const c = i(),
						o = c.user.account,
						b = o ? Object(O.e)(o) : void 0,
						F = {
							...Object(f.c)(c, {
								subredditId: s
							}).displaySettings,
							isUserEnabled: r
						},
						m = {
							userName: n,
							subredditId: s,
							applied: e,
							displaySettings: F
						};
					d(n === b ? N(m) : R(m));
					const p = Object(j.S)(c, {
							subredditId: s
						}),
						S = t && e ? Object(l.g)(e) : void 0;
					Object(u.g)(a(), n, p.name, t, S), Object(u.i)(a(), r, p.name)
				}, L = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const d = n(),
						i = Object(j.S)(d, {
							subredditId: e
						}).name;
					r(S());
					const a = await Object(u.l)(s(), i, t);
					if (a.ok) {
						r(g({
							subredditId: e,
							isEnabled: t
						}))
					} else r(_());
					return a.ok
				}, M = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const d = n(),
						i = Object(j.S)(d, {
							subredditId: e
						}).name;
					r(I());
					const a = await Object(u.j)(s(), t, o.d.UserFlair, i);
					if (a.ok) {
						r(w({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(k());
					return a.ok
				}, H = (e, t) => async (r, s, {
					apiContext: d
				}) => {
					const i = s(),
						a = Object(j.S)(i, {
							subredditId: t
						}).name;
					r(y());
					const l = await Object(u.f)(d(), e, a, o.d.UserFlair),
						O = l.ok && !(l.body && !1 === l.body.success);
					if (O) {
						const e = {
							subredditId: t,
							template: l.body
						};
						r(A(e));
						const s = Object(c.d)(n.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), b.b.SuccessMod);
						r(Object(c.e)(s))
					} else {
						r(h());
						const s = Object(c.d)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), H(e, t));
						r(Object(c.e)(s))
					}
					return O
				}, z = (e, t) => async (r, s, {
					apiContext: d
				}) => {
					const i = s(),
						a = Object(j.S)(i, {
							subredditId: t
						}).name;
					if (r(T()), (await Object(u.b)(d(), e, a)).ok) {
						r(E({
							subredditId: t,
							templateId: e
						}));
						const s = Object(c.d)(n.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), b.b.SuccessMod);
						r(Object(c.e)(s))
					} else {
						r(C());
						const s = Object(c.d)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), z(e, t));
						r(Object(c.e)(s))
					}
				}, K = (e, t) => async (r, s, {
					apiContext: d
				}) => {
					const i = s(),
						a = Object(j.S)(i, {
							subredditId: t
						}).name,
						l = Object(f.c)(i, {
							subredditId: t
						}).templateIds;
					if (r(v({
							subredditId: t,
							templateIds: e
						})), (await Object(u.e)(d(), a, o.d.UserFlair, e)).ok) {
						r(x());
						const e = Object(c.d)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), b.b.SuccessMod);
						r(Object(c.e)(e))
					} else {
						r(U({
							subredditId: t,
							templateIds: l
						}));
						const s = Object(c.d)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), b.b.Error, n.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), K(e, t));
						r(Object(c.e)(s))
					}
				}, B = (e, t) => async (r, s, {
					apiContext: d
				}) => {
					var l;
					const o = s(),
						O = null === (l = o.features) || void 0 === l ? void 0 : l.userFlair;
					if (O && O[e] && O[e].displaySettings.isEnabled && i()(O[e].templateIds)) {
						const s = Object(j.S)(o, {
								subredditId: e
							}).name,
							i = await Object(u.d)(d(), s);
						if (i.ok) r(D(i.body)), r(Object(a.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(c.d)(n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), b.b.Error);
							r(Object(c.e)(e))
						}
					} else r(Object(a.b)({
						username: t,
						subredditId: e
					}))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UserFlair.fe257954426b7c0222a1.js.map