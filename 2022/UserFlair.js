// https://www.redditstatic.com/desktop2x/UserFlair.d5e481307040a48baec8.js
// Retrieved at 11/10/2022, 1:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UserFlair"], {
		"./src/reddit/actions/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				i = Object(n.a)(s)
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "p", (function() {
				return o
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
				return f
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "k", (function() {
				return F
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				c = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				o = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				E = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				S = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				_ = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				T = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				R = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				f = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				F = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/actions/userFlair/userFlair.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "userFlairEnabledSettingPending", (function() {
				return O
			})), r.d(t, "userFlairEnabledSettingSuccess", (function() {
				return F
			})), r.d(t, "userFlairEnabledSettingFailed", (function() {
				return A
			})), r.d(t, "userFlairAllowAssingOwnSettingPending", (function() {
				return U
			})), r.d(t, "userFlairAllowAssignOwnSettingSuccess", (function() {
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
				return Y
			})), r.d(t, "authorFlairMutated", (function() {
				return h
			})), r.d(t, "userFlairChanged", (function() {
				return y
			})), r.d(t, "toggleUserFlairInSubreddit", (function() {
				return M
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
				i = r("./node_modules/lodash/isEmpty.js"),
				d = r.n(i),
				c = r("./src/reddit/actions/authorFlair.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/endpoints/flair/index.ts"),
				l = r("./src/reddit/helpers/flair.ts"),
				o = r("./src/reddit/models/Flair/index.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				S = r("./src/reddit/models/User/index.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/reddit/selectors/userFlair.ts"),
				T = r("./src/lib/initializeClient/installReducer.ts"),
				R = r("./src/reddit/reducers/features/userFlair/index.ts"),
				f = r("./src/reddit/actions/userFlair/constants.ts");
			Object(T.a)({
				features: {
					userFlair: R.a
				}
			});
			const O = Object(s.a)(f.i),
				F = Object(s.a)(f.j),
				A = Object(s.a)(f.h),
				U = Object(s.a)(f.c),
				L = Object(s.a)(f.d),
				I = Object(s.a)(f.b),
				j = Object(s.a)(f.p),
				D = Object(s.a)(f.q),
				m = Object(s.a)(f.o),
				C = Object(s.a)(f.f),
				p = Object(s.a)(f.g),
				N = Object(s.a)(f.e),
				g = Object(s.a)(f.m),
				k = Object(s.a)(f.n),
				w = Object(s.a)(f.l),
				P = Object(s.a)(f.k),
				Y = Object(s.a)(f.r),
				h = Object(s.a)(f.a),
				y = (e, t, r, n, s) => async (i, d, c) => {
					let {
						apiContext: u
					} = c;
					const o = d(),
						E = o.user.account,
						T = E ? Object(S.e)(E) : void 0,
						R = {
							...Object(b.d)(o, {
								subredditId: s
							}).displaySettings,
							isUserEnabled: r
						},
						f = {
							userName: n,
							subredditId: s,
							applied: e,
							displaySettings: R
						};
					i(n === T ? Y(f) : h(f));
					const O = Object(_.Y)(o, {
							subredditId: s
						}),
						F = t && e ? Object(l.g)(e) : void 0;
					Object(a.g)(u(), n, O.name, t, F), n === T && Object(a.i)(u(), r, O.name)
				}, M = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const d = n(),
						c = Object(_.Y)(d, {
							subredditId: e
						}).name;
					r(O());
					const u = await Object(a.l)(i(), c, t);
					if (u.ok) {
						r(F({
							subredditId: e,
							isEnabled: t
						}))
					} else r(A());
					return u.ok
				}, v = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const d = n(),
						c = Object(_.Y)(d, {
							subredditId: e
						}).name;
					r(U());
					const u = await Object(a.j)(i(), t, o.d.UserFlair, c);
					if (u.ok) {
						r(L({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(I());
					return u.ok
				}, x = (e, t) => async (r, s, i) => {
					let {
						apiContext: d
					} = i;
					const c = s(),
						l = Object(_.Y)(c, {
							subredditId: t
						}).name;
					r(j());
					const S = await Object(a.f)(d(), e, l, o.d.UserFlair),
						b = S.ok && !(S.body && !1 === S.body.success);
					if (b) {
						const e = {
							subredditId: t,
							template: S.body
						};
						r(D(e));
						const s = Object(u.e)(n.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), E.b.SuccessMod);
						r(Object(u.f)(s))
					} else {
						r(m());
						const s = Object(u.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), E.b.Error, n.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), x(e, t));
						r(Object(u.f)(s))
					}
					return b
				}, G = (e, t) => async (r, s, i) => {
					let {
						apiContext: d
					} = i;
					const c = s(),
						l = Object(_.Y)(c, {
							subredditId: t
						}).name;
					if (r(C()), (await Object(a.b)(d(), e, l)).ok) {
						r(p({
							subredditId: t,
							templateId: e
						}));
						const s = Object(u.e)(n.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), E.b.SuccessMod);
						r(Object(u.f)(s))
					} else {
						r(N());
						const s = Object(u.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), E.b.Error, n.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), G(e, t));
						r(Object(u.f)(s))
					}
				}, H = (e, t) => async (r, s, i) => {
					let {
						apiContext: d
					} = i;
					const c = s(),
						l = Object(_.Y)(c, {
							subredditId: t
						}).name,
						S = Object(b.d)(c, {
							subredditId: t
						}).templateIds;
					if (r(g({
							subredditId: t,
							templateIds: e
						})), (await Object(a.e)(d(), l, o.d.UserFlair, e)).ok) {
						r(k());
						const e = Object(u.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), E.b.SuccessMod);
						r(Object(u.f)(e))
					} else {
						r(w({
							subredditId: t,
							templateIds: S
						}));
						const s = Object(u.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), E.b.Error, n.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), H(e, t));
						r(Object(u.f)(s))
					}
				}, W = (e, t) => async (r, s, i) => {
					let {
						apiContext: l
					} = i;
					var o;
					const S = s(),
						b = null === (o = S.features) || void 0 === o ? void 0 : o.userFlair;
					if (b && b[e] && b[e].displaySettings.isEnabled && d()(b[e].templateIds)) {
						const s = Object(_.Y)(S, {
								subredditId: e
							}).name,
							i = await Object(a.d)(l(), s);
						if (i.ok) r(P(i.body)), r(Object(c.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(u.e)(n.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), E.b.Error);
							r(Object(u.f)(e))
						}
					} else r(Object(c.b)({
						username: t,
						subredditId: e
					}))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UserFlair.d5e481307040a48baec8.js.map