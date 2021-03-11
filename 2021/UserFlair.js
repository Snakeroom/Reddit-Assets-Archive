// https://www.redditstatic.com/desktop2x/UserFlair.989d665cce084fb1829b.js
// Retrieved at 3/11/2021, 2:10:04 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "p", (function() {
				return l
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "o", (function() {
				return S
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "m", (function() {
				return R
			})), r.d(t, "n", (function() {
				return O
			})), r.d(t, "l", (function() {
				return F
			})), r.d(t, "k", (function() {
				return f
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				d = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				c = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				o = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				E = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				S = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				_ = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				T = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				R = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				F = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				f = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/actions/userFlair/userFlair.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "userFlairEnabledSettingPending", (function() {
				return F
			})), r.d(t, "userFlairEnabledSettingSuccess", (function() {
				return f
			})), r.d(t, "userFlairEnabledSettingFailed", (function() {
				return A
			})), r.d(t, "userFlairAllowAssingOwnSettingPending", (function() {
				return U
			})), r.d(t, "userFlairAllowAssingOwnSettingSuccess", (function() {
				return L
			})), r.d(t, "userFlairAllowAssingOwnSettingFailed", (function() {
				return I
			})), r.d(t, "userFlairSaveTemplatePending", (function() {
				return j
			})), r.d(t, "userFlairSaveTemplateSuccess", (function() {
				return D
			})), r.d(t, "userFlairSaveTemplateFailed", (function() {
				return m
			})), r.d(t, "userFlairDeleteTemplatePending", (function() {
				return C
			})), r.d(t, "userFlairDeleteTemplateSuccess", (function() {
				return p
			})), r.d(t, "userFlairDeleteTemplateFailed", (function() {
				return N
			})), r.d(t, "userFlairReorderTemplatesPending", (function() {
				return g
			})), r.d(t, "userFlairReorderTemplatesSuccess", (function() {
				return k
			})), r.d(t, "userFlairReorderTemplatesFailed", (function() {
				return w
			})), r.d(t, "userFlairFetchSuccess", (function() {
				return P
			})), r.d(t, "userFlairMutated", (function() {
				return h
			})), r.d(t, "authorFlairMutated", (function() {
				return y
			})), r.d(t, "userFlairChanged", (function() {
				return M
			})), r.d(t, "toggleUserFlairInSubreddit", (function() {
				return Y
			})), r.d(t, "toggleAssignOwnFlairPermission", (function() {
				return v
			})), r.d(t, "saveUserFlairTemplate", (function() {
				return x
			})), r.d(t, "deleteUserFlairTemplate", (function() {
				return G
			})), r.d(t, "reorderUserFlairTemplates", (function() {
				return H
			})), r.d(t, "userFlairLoadedAndModalOpened", (function() {
				return W
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./node_modules/lodash/isEmpty.js"),
				i = r.n(d),
				c = r("./src/reddit/actions/authorFlair.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/endpoints/flair/index.ts"),
				o = r("./src/reddit/helpers/flair.ts"),
				l = r("./src/reddit/models/Flair/index.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				S = r("./src/reddit/models/User/index.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/reddit/selectors/userFlair.ts"),
				T = r("./src/lib/initializeClient/installReducer.ts"),
				R = r("./src/reddit/reducers/features/userFlair/index.ts"),
				O = r("./src/reddit/actions/userFlair/constants.ts");
			Object(T.a)({
				features: {
					userFlair: R.a
				}
			});
			const F = Object(s.a)(O.i),
				f = Object(s.a)(O.j),
				A = Object(s.a)(O.h),
				U = Object(s.a)(O.c),
				L = Object(s.a)(O.d),
				I = Object(s.a)(O.b),
				j = Object(s.a)(O.p),
				D = Object(s.a)(O.q),
				m = Object(s.a)(O.o),
				C = Object(s.a)(O.f),
				p = Object(s.a)(O.g),
				N = Object(s.a)(O.e),
				g = Object(s.a)(O.m),
				k = Object(s.a)(O.n),
				w = Object(s.a)(O.l),
				P = Object(s.a)(O.k),
				h = Object(s.a)(O.r),
				y = Object(s.a)(O.a),
				M = (e, t, r, n, s) => async (d, i, {
					apiContext: c
				}) => {
					const u = i(),
						l = u.user.account,
						E = l ? Object(S.e)(l) : void 0,
						T = {
							...Object(b.c)(u, {
								subredditId: s
							}).displaySettings,
							isUserEnabled: r
						},
						R = {
							userName: n,
							subredditId: s,
							applied: e,
							displaySettings: T
						};
					d(n === E ? h(R) : y(R));
					const O = Object(_.T)(u, {
							subredditId: s
						}),
						F = t && e ? Object(o.g)(e) : void 0;
					Object(a.g)(c(), n, O.name, t, F), Object(a.i)(c(), r, O.name)
				}, Y = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const d = n(),
						i = Object(_.T)(d, {
							subredditId: e
						}).name;
					r(F());
					const c = await Object(a.l)(s(), i, t);
					if (c.ok) {
						r(f({
							subredditId: e,
							isEnabled: t
						}))
					} else r(A());
					return c.ok
				}, v = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const d = n(),
						i = Object(_.T)(d, {
							subredditId: e
						}).name;
					r(U());
					const c = await Object(a.j)(s(), t, l.d.UserFlair, i);
					if (c.ok) {
						r(L({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(I());
					return c.ok
				}, x = (e, t) => async (r, s, {
					apiContext: d
				}) => {
					const i = s(),
						c = Object(_.T)(i, {
							subredditId: t
						}).name;
					r(j());
					const o = await Object(a.f)(d(), e, c, l.d.UserFlair),
						S = o.ok && !(o.body && !1 === o.body.success);
					if (S) {
						const e = {
							subredditId: t,
							template: o.body
						};
						r(D(e));
						const s = Object(u.d)(n.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), E.b.SuccessMod);
						r(Object(u.e)(s))
					} else {
						r(m());
						const s = Object(u.d)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), E.b.Error, n.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), x(e, t));
						r(Object(u.e)(s))
					}
					return S
				}, G = (e, t) => async (r, s, {
					apiContext: d
				}) => {
					const i = s(),
						c = Object(_.T)(i, {
							subredditId: t
						}).name;
					if (r(C()), (await Object(a.b)(d(), e, c)).ok) {
						r(p({
							subredditId: t,
							templateId: e
						}));
						const s = Object(u.d)(n.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), E.b.SuccessMod);
						r(Object(u.e)(s))
					} else {
						r(N());
						const s = Object(u.d)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), E.b.Error, n.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), G(e, t));
						r(Object(u.e)(s))
					}
				}, H = (e, t) => async (r, s, {
					apiContext: d
				}) => {
					const i = s(),
						c = Object(_.T)(i, {
							subredditId: t
						}).name,
						o = Object(b.c)(i, {
							subredditId: t
						}).templateIds;
					if (r(g({
							subredditId: t,
							templateIds: e
						})), (await Object(a.e)(d(), c, l.d.UserFlair, e)).ok) {
						r(k());
						const e = Object(u.d)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), E.b.SuccessMod);
						r(Object(u.e)(e))
					} else {
						r(w({
							subredditId: t,
							templateIds: o
						}));
						const s = Object(u.d)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), E.b.Error, n.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), H(e, t));
						r(Object(u.e)(s))
					}
				}, W = (e, t) => async (r, s, {
					apiContext: d
				}) => {
					var o;
					const l = s(),
						S = null === (o = l.features) || void 0 === o ? void 0 : o.userFlair;
					if (S && S[e] && S[e].displaySettings.isEnabled && i()(S[e].templateIds)) {
						const s = Object(_.T)(l, {
								subredditId: e
							}).name,
							i = await Object(a.d)(d(), s);
						if (i.ok) r(P(i.body)), r(Object(c.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(u.d)(n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), E.b.Error);
							r(Object(u.e)(e))
						}
					} else r(Object(c.b)({
						username: t,
						subredditId: e
					}))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UserFlair.989d665cce084fb1829b.js.map