// https://www.redditstatic.com/desktop2x/Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241.7b531c9a52c01cddedf2.js
// Retrieved at 10/12/2021, 11:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"], {
		"./src/reddit/actions/downToChat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return S
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "h", (function() {
				return R
			})), r.d(t, "i", (function() {
				return L
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/chat/toggle.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/constants/modals.ts"),
				a = r("./src/config.ts"),
				c = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				l = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/constants/headers.ts");
			var p = r("./src/reddit/helpers/parseUrl.ts"),
				f = r("./src/reddit/selectors/telemetry.ts"),
				m = r("./src/telemetry/models/Event.ts");
			var O = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/selectors/downToChat.ts"),
				j = r("./src/telemetry/index.ts");
			const {
				fbt: _
			} = r("./node_modules/fbt/lib/FbtPublic.js"), S = "FETCH_DOWN_TO_CHAT_AVAILABILITY__PENDING", I = "FETCH_DOWN_TO_CHAT_AVAILABILITY__SUCCESS", T = "FETCH_DOWN_TO_CHAT_AVAILABILITY__FAILED", E = "DISMISS_DOWN_TO_CHAT_BANNER__PENDING", h = "DISMISS_DOWN_TO_CHAT_BANNER__SUCCESS", y = "DISMISS_DOWN_TO_CHAT_BANNER__FAILED", x = "DISMISS_EACH_SUBREDDIT_BANNER", D = Object(s.a)(S), v = Object(s.a)(I), w = Object(s.a)(T), A = Object(s.a)(E), C = Object(s.a)(h), k = (Object(s.a)(y), Object(s.a)(x)), N = e => async (t, r, {
				apiContext: s
			}) => {
				const n = r();
				if (Object(g.a)(n, e)) return;
				t(D({
					subredditId: e
				}));
				const d = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.a]), {
					endpoint: `${a.a.sendbirdServiceUrl}/api/v1/sendbird/down_to_chat/availability`,
					method: c.ib.GET,
					type: "json",
					data: {
						subreddit_id: t
					},
					timeoutMs: 650
				}))(s(), e);
				if (d.ok && d.body) {
					const {
						feature_enabled: r,
						experiment_enabled: s
					} = d.body;
					if (t(v({
							subredditId: e,
							bannerEnabled: r,
							buttonEnabled: s
						})), r) {
						const e = (e => ({
							source: m.b.Chat,
							action: m.a.View,
							noun: "down_to_chat_subreddit_entry",
							subreddit: Object(f.subreddit)(e),
							...Object(f.defaults)(e)
						}))(n);
						Object(j.a)(e)
					}
				} else t(w({
					subredditId: e,
					error: "Failed to fetch subreddit's down to chat availability data"
				}))
			}, R = e => async (t, r, {
				apiContext: s
			}) => {
				t(A({
					subredditId: e
				}));
				const n = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.a]), {
					endpoint: `${a.a.sendbirdServiceUrl}/api/v1/sendbird/down_to_chat/availability`,
					method: c.ib.DELETE,
					data: {
						subreddit_id: t
					}
				}))(s(), e);
				if (n.ok && n.body) {
					const {
						feature_enabled: r,
						experiment_enabled: s
					} = n.body;
					t(C({
						subredditId: e,
						bannerEnabled: r,
						buttonEnabled: s
					})), r || t(k())
				}
				const d = (e => ({
					source: m.b.Chat,
					action: m.a.Dismiss,
					noun: "down_to_chat_subreddit_entry",
					subreddit: Object(f.subreddit)(e),
					...Object(f.defaults)(e)
				}))(r());
				Object(j.a)(d)
			}, L = e => async (t, r, {
				apiContext: s
			}) => {
				const g = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.a]), {
					endpoint: `${a.a.sendbirdServiceUrl}/api/v1/sendbird/down_to_chat/join`,
					method: c.ib.POST,
					type: "json",
					data: {
						subreddit_id: t
					}
				}))(s(), e);
				if (g.ok && g.body) {
					t(Object(d.i)(o.a.DOWN_TO_CHAT_PENDING_MODAL));
					const {
						deeplink_url: e
					} = g.body, r = Object(p.a)(e);
					r && r.pathname && t(Object(n.d)({
						channelUrl: r.pathname
					}))
				} else t(Object(i.f)({
					kind: O.b.Error,
					duration: i.a,
					text: _._("Failed to join a subreddit channel", null, {
						hk: "mZam3"
					})
				}));
				setTimeout(() => t(Object(d.f)()), 1e3);
				const S = (e => ({
					source: m.b.Chat,
					action: m.a.Click,
					noun: "down_to_chat_subreddit_entry",
					subreddit: Object(f.subreddit)(e),
					...Object(f.defaults)(e)
				}))(r());
				Object(j.a)(S)
			}
		},
		"./src/reddit/actions/economics/helpers/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = e => async t => {
				const s = await (() => r.e("EconHelperActions").then(r.bind(null, "./src/reddit/actions/economics/helpers/index.ts")).then(e => e.fetchAll))();
				await t(s(e))
			}
		},
		"./src/reddit/actions/economics/powerups/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || ""
		},
		"./src/reddit/actions/externalAccount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return S
			})), r.d(t, "k", (function() {
				return I
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "o", (function() {
				return k
			})), r.d(t, "p", (function() {
				return N
			})), r.d(t, "b", (function() {
				return R
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "e", (function() {
				return F
			})), r.d(t, "f", (function() {
				return M
			})), r.d(t, "d", (function() {
				return Q
			})), r.d(t, "m", (function() {
				return H
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/addQueryParams/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/constants/parameters.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				b = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const p = e => {
				return e.reduce((e, t) => (e[t.provider] = t, e), {})
			};
			var f = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/models/User/index.ts"),
				O = r("./src/reddit/selectors/externalAccount.ts"),
				g = r("./src/reddit/selectors/platform.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/user.ts");
			const S = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				I = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				T = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				E = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				h = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				y = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				x = Object(n.a)(S),
				D = Object(n.a)(I),
				v = Object(n.a)(T),
				w = Object(n.a)(E),
				A = Object(n.a)(h),
				C = Object(n.a)(y),
				k = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r(),
						d = Object(_.k)(n),
						i = e || d && Object(m.e)(d);
					if (!i) return;
					if (Object(O.d)(n, {
							username: i
						})) return;
					t(x(i));
					const o = await ((e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/user/${t}.json`),
						traceRequestName: "get_external_accounts",
						method: a.ib.GET
					}))(s(), i);
					if (o.ok) {
						const e = p(o.body);
						t(D({
							username: i,
							accountsData: e
						}))
					} else t(v(o.error))
				}, N = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t(),
						n = Object(g.d)(s);
					if (!n) return;
					const d = s.externalAccount.api.subreddit.fetched[n],
						i = s.externalAccount.api.subreddit.pending[n];
					if (d || i) return;
					const o = Object(j.t)(s, {
						subredditName: n
					});
					if (!(o && o.hasExternalAccount)) return;
					e(w(n));
					const f = await ((e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/subreddit/${t}.json`),
						method: a.ib.GET
					}))(r(), n);
					if (f.ok) {
						const t = p(f.body);
						e(A({
							subredditName: n,
							accountsData: t
						}))
					} else e(C(f.error))
				}, R = "EXTERNAL_ACCOUNT_DISCONNECT_PENDING", L = "EXTERNAL_ACCOUNT_DISCONNECT_SUCCESS", P = "EXTERNAL_ACCOUNT_DISCONNECT_FAILED", U = Object(n.a)(R), G = Object(n.a)(L), B = Object(n.a)(P), q = e => async (t, r, {
					apiContext: s
				}) => {
					t(U({
						provider: e
					}));
					const n = Object(_.k)(r()),
						d = Object(m.e)(n),
						i = await ((e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/disconnect.json`),
							method: a.ib.POST
						}))(s(), e);
					i.ok ? t(G({
						provider: e,
						username: d
					})) : t(B({
						provider: e,
						error: i.error
					}))
				}, F = "OAUTH_FLOW_URL_PENDING", M = "OAUTH_FLOW_URL_SUCCESS", Q = "OAUTH_FLOW_URL_FAILED", W = Object(n.a)(F), $ = Object(n.a)(M), J = Object(n.a)(Q), H = e => async (t, r, {
					apiContext: n
				}) => {
					t(W({
						provider: e
					}));
					const p = Object(d.a)(window.location.href, {
							[o.d]: e
						}),
						m = await ((e, t, r) => Object(c.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/connect.json`),
							method: a.ib.POST,
							data: {
								redirect_url: r
							}
						}))(n(), e, p);
					if (m.ok) {
						const {
							redirect_url: r
						} = m.body;
						t($({
							provider: e
						})), window.location.href = r
					} else t(J({
						provider: e,
						error: m.error
					})), t(Object(i.f)({
						kind: f.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "196FiB"
						})
					}))
				}
		},
		"./src/reddit/actions/gold/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "n", (function() {
				return j
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "l", (function() {
				return v
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "j", (function() {
				return F
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "c", (function() {
				return Q
			})), r.d(t, "i", (function() {
				return W
			})), r.d(t, "h", (function() {
				return $
			})), r.d(t, "f", (function() {
				return J
			})), r.d(t, "g", (function() {
				return H
			})), r.d(t, "e", (function() {
				return z
			})), r.d(t, "m", (function() {
				return K
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				i = r("./src/telemetry/index.ts"),
				o = r("./src/reddit/actions/login.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/endpoints/gold/powerups/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/helpers/trackers/powerups.ts"),
				g = r("./src/reddit/actions/gold/constants.ts");
			const j = e => async (t, r, {
				gqlContext: n
			}) => {
				if (!!r().user.powerups.fetched && !e) return;
				t(_());
				const i = s.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const e = await Object(l.j)(n());
					if (e.ok) {
						const r = e.body;
						if (r.errors && r.errors.length) return void(await t(T(i)));
						if (!r.data.identity) return void(await t(I(i)));
						await t(S({
							powerups: r.data.identity.powerups
						}))
					}
				} catch (o) {
					d.c.captureException(o), await t(T(i))
				}
			}, _ = Object(n.a)(g.Bb), S = Object(n.a)(g.Ab), I = Object(n.a)(g.zb), T = e => async (t, r) => {
				await t(I(e)), t(Object(c.f)({
					kind: b.b.Error,
					duration: c.a,
					text: e
				}))
			}, E = (e, t) => async (e, r, {
				gqlContext: n
			}) => {
				var i;
				if (!!r().users.powerups.fetched) return;
				e(h());
				const o = s.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const r = await Object(l.g)(n(), t);
					if (r.ok) {
						const s = r.body;
						if (s.errors && s.errors.length) return void(await e(D(o)));
						if (!s.data.redditorInfoById) return void(await e(x(o)));
						const n = (null === (i = s.data.redditorInfoById.powerups) || void 0 === i ? void 0 : i.supportedSubreddits) || [];
						await e(y({
							supportedSubreddits: n,
							userId: t
						}))
					}
				} catch (a) {
					d.c.captureException(a), await e(D(o))
				}
			}, h = Object(n.a)(g.hb), y = Object(n.a)(g.gb), x = Object(n.a)(g.fb), D = e => async (t, r) => {
				await t(x(e)), t(Object(c.f)({
					kind: b.b.Error,
					duration: c.a,
					text: e
				}))
			}, v = (e, t = {}) => async (r, n, {
				gqlContext: i
			}) => {
				var o;
				const a = n();
				if (Object(p.k)(a, {
						subredditId: e
					}) && Object(f.a)(a, {
						subredditId: e
					}) && (!t.fullData || Object(p.m)(a, {
						subredditId: e
					})) && !t.forceLoad) return;
				r(k());
				const c = t.fullData ? l.i : l.h;
				try {
					const s = await c(i(), e, !!t.includeIdentity);
					if (s.ok) {
						const n = s.body;
						if (null === (o = n.errors) || void 0 === o ? void 0 : o.length) return void(await r(P(n.errors[0].message)));
						if (t.fullData) {
							const {
								data: t
							} = n;
							w(r, e, t.subredditInfoById, t.identity)
						} else {
							const {
								powerups: t = null,
								powerupsSettings: s = null
							} = n.data.subredditInfoById || {};
							await r(N({
								powerups: t,
								subredditId: e,
								benefitStatuses: null == s ? void 0 : s.benefitStatuses
							}))
						}
					}
				} catch (u) {
					d.c.captureException(u), await r(P(s.fbt._("Something went wrong", null, {
						hk: "1IJNeH"
					})))
				}
			}, w = (e, t, r, s) => {
				var n, d, i;
				const {
					powerups: o = null,
					powerupsSettings: a = null,
					supporters: c = null,
					productOffers: u = null,
					subredditAchievementFlairs: l
				} = r || {}, b = null == s ? void 0 : s.powerups;
				e(R({
					powerups: o,
					benefitStatuses: null == a ? void 0 : a.benefitStatuses,
					productOffers: null !== (n = null == u ? void 0 : u.offers) && void 0 !== n ? n : [],
					recentSupporters: null !== (d = null == c ? void 0 : c.recentSupporters) && void 0 !== d ? d : [],
					subredditId: t,
					topSupporters: null !== (i = null == c ? void 0 : c.topSupporters) && void 0 !== i ? i : [],
					userPowerups: b,
					subredditAchievementFlairs: null != l ? l : []
				}))
			}, A = Object(n.a)(g.I), C = e => async (t, r, {
				gqlContext: s
			}) => {
				try {
					const r = await Object(l.e)(s(), e);
					t(A({
						subredditsPowerupsInfo: r
					}))
				} catch (n) {
					await t(P(n.message))
				}
			}, k = Object(n.a)(g.rb), N = Object(n.a)(g.qb), R = Object(n.a)(g.pb), L = Object(n.a)(g.ob), P = e => async (t, r) => {
				await t(L(e)), t(Object(c.f)({
					kind: b.b.Error,
					duration: c.a,
					text: e
				}))
			}, U = Object(n.a)(g.T), G = Object(n.a)(g.U), B = Object(n.a)(g.V), q = e => async (t, r) => {
				await t(U(e)), t(Object(c.f)({
					kind: b.b.Error,
					duration: c.a,
					text: e
				}))
			}, F = (e, t, r, n) => async (i, o, {
				gqlContext: p
			}) => {
				i(G({
					subredditId: e,
					powerupsCount: t,
					isAnonymous: r,
					allocatedAt: n
				}));
				try {
					const d = {
							subredditId: e,
							powerupsCount: t,
							isAnonymous: r
						},
						f = await Object(l.f)(p(), {
							input: d
						});
					let O = !1,
						g = null;
					if (f.ok) {
						const e = f.body;
						O = e.data.reallocatePowerups.ok, g = e.data.reallocatePowerups.errors
					}
					const _ = Object(m.k)(o());
					if (O && _) await i((e => async (t, r) => {
						t(B(e)), t(v(e.subredditId, {
							forceLoad: !0,
							fullData: !1
						})), t(j(!0)), e.powerupsCount && (t(Object(a.g)(u.a.ECON_POWERUPS_PURCHASE)), e.powerupsCount > 0 ? t(Object(a.h)(u.a.ECON_POWERUPS_SUCCESS)) : t(Object(c.f)({
							kind: b.b.SuccessCommunityGreen,
							duration: c.a,
							text: s.fbt._("Your Powerup subscription has been canceled.", null, {
								hk: "z7ZJZ"
							})
						})))
					})({
						subredditId: e,
						powerupsCount: t,
						isAnonymous: r,
						user: _,
						allocatedAt: n
					}));
					else {
						const e = g && g[0] && g[0].message || s.fbt._("An unknown error occurred", null, {
							hk: "2oAbwZ"
						});
						await i(q(e))
					}
				} catch (f) {
					d.c.captureException(f);
					const e = f,
						t = e && e.message || s.fbt._("An unknown error occurred", null, {
							hk: "2oAbwZ"
						});
					await i(q(t))
				}
			}, M = e => async (t, r, {
				gqlContext: s
			}) => {
				await Object(l.c)(s(), e)
			}, Q = Object(n.a)(g.E), W = Object(n.a)(g.R), $ = e => Object(a.h)(u.a.ECON_SUPPORTERS_LIST, {
				subredditId: e
			}), J = e => async (t, r) => {
				const s = r();
				return Object(m.k)(s) ? (Object(i.a)(Object(O.h)(e)(s)), t(Object(a.h)(u.a.ECON_POWERUPS_MARKETING))) : t(Object(o.i)())
			}, H = e => async t => t(Object(a.h)(u.a.ECON_POWERUPS_PREMIUM_UPSELL, {
				subredditId: e
			})), z = () => async (e, t) => {
				const r = t();
				return Object(m.k)(r) ? e(Object(a.h)(u.a.ACHIEVEMENT_FLAIR)) : e(Object(o.i)())
			}, V = Object(n.a)(g.N), K = (e, t) => async (r, s, {
				gqlContext: n
			}) => {
				const d = await Object(l.k)(n(), e, (e => Object.keys(e).map(t => ({
					benefit: t,
					isEnabled: e[t]
				})))(t));
				if (d.ok) {
					const t = d.body.data.updatePowerupsSettings.powerupsSettings.benefitStatuses;
					return r(V({
						subredditId: e,
						benefitStatuses: t
					})), !0
				}
				return !1
			}
		},
		"./src/reddit/actions/meta.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "k", (function() {
				return j
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "j", (function() {
				return T
			}));
			var s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				n = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				u = r("./src/reddit/selectors/user.ts");
			const l = "META__GEO_CHANGED",
				b = Object(d.a)(l),
				p = "META__META_RECEIVED",
				f = (Object(d.a)(p), "META__SET_LOCALE"),
				m = Object(d.a)(f),
				O = e => async (t, r, {
					apiContext: d
				}) => {
					if (!e) return;
					const l = r(),
						b = d();
					let p;
					if (t(m(e)), Object(s.isPseudoLocale)(e) ? (Object(u.H)(l) || Object(c.b)(l)) && (p = e) : p = Object(s.isoLocaleToR2Language)(e), !p) return;
					const f = new URL(window.location.href);
					Object(u.K)(l) ? Object(s.isPseudoLocale)(p) ? f.searchParams.set("locale", p) : (await Object(i.a)(Object(o.a)(b, [a.a]), {
						data: {
							lang: p
						},
						endpoint: `${b.apiUrl}/api/v1/me/prefs`,
						method: n.ib.PATCH,
						type: "json"
					}), f.searchParams.delete("locale")) : f.searchParams.delete("locale"), window.location.href = f.toString()
				}, g = "META__SET_POPULAR_GEO_FILTER", j = Object(d.a)(g), _ = "META__PWA_ENTERED", S = "META__PWA_LEFT", I = Object(d.a)(_), T = Object(d.a)(S)
		},
		"./src/reddit/actions/pages/subreddit.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "handleSubredditPageApiError", (function() {
				return De
			})), r.d(t, "SUBREDDIT_PENDING", (function() {
				return ve
			})), r.d(t, "SUBREDDIT_LOADED", (function() {
				return we
			})), r.d(t, "SUBREDDIT_FAILED", (function() {
				return Ae
			})), r.d(t, "subredditPending", (function() {
				return Ce
			})), r.d(t, "subredditLoaded", (function() {
				return ke
			})), r.d(t, "subredditFailed", (function() {
				return Ne
			})), r.d(t, "subredditDataRequested", (function() {
				return Re
			})), r.d(t, "subredditDataFirstChunkRequested", (function() {
				return Le
			})), r.d(t, "makeSubredditPageKey", (function() {
				return Ue
			})), r.d(t, "subredditRequested", (function() {
				return Ge
			})), r.d(t, "SUBREDDIT_INVALIDATE_LISTING", (function() {
				return Be
			})), r.d(t, "subredditInvalidateListing", (function() {
				return qe
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/find.js"),
				d = r.n(n),
				i = r("./node_modules/lodash/pick.js"),
				o = r.n(i),
				a = r("./node_modules/react-router-redux/es/index.js"),
				c = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/countrySites/index.ts"),
				l = r("./src/lib/isAdHocMultireddit/index.ts"),
				b = r("./src/lib/isFakeSubreddit/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				f = r("./src/lib/makeListingKey/index.ts"),
				m = r("./src/lib/makeSearchKey/index.ts"),
				O = r("./src/lib/performanceTimings/index.tsx"),
				g = r("./src/reddit/actions/ads/index.ts"),
				j = r("./src/reddit/actions/communityFlairs/index.ts"),
				_ = r("./src/reddit/actions/contentGate.ts"),
				S = r("./src/reddit/actions/discoveryUnit.ts"),
				I = (r("./src/reddit/actions/downToChat.ts"), r("./src/reddit/actions/economics/helpers/async.ts")),
				T = r("./src/reddit/actions/externalAccount.ts"),
				E = r("./src/reddit/actions/gold/powerups.ts"),
				h = r("./src/reddit/actions/meta.ts"),
				y = r("./src/reddit/actions/pages/search.ts"),
				x = r("./src/reddit/actions/platform.ts"),
				D = r("./src/reddit/actions/publicAccessNetwork/api.ts"),
				v = r("./src/reddit/actions/seo/linksModule.ts"),
				w = r("./src/reddit/actions/seo/topicLinks.ts"),
				A = r("./src/lib/makeGqlRequest/index.ts");
			r("./src/redditGQL/operations/SubredditInfo.json");
			const C = e => ({
				communityIcon: e.styles && e.styles.icon || void 0,
				iconUrl: e.styles && e.styles.legacyIcon && e.styles.legacyIcon.url || void 0,
				id: e.id,
				isNSFW: e.isNSFW || !1,
				isSubscribed: e.isSubscribed,
				name: e.name,
				primaryColor: e.styles && e.styles.primaryColor || void 0,
				subscribers: e.subscribers,
				type: "subreddit"
			});
			var k = e => {
				var t;
				return {
					subreddits: (null === (t = e.data.subredditInfoById) || void 0 === t ? void 0 : t.linkedSubreddits) ? e.data.subredditInfoById.linkedSubreddits.map(C) : []
				}
			};
			var N = e => {
					var t, r;
					return (null === (r = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.subredditInfoById) || void 0 === r ? void 0 : r.topicLinks) || void 0
				},
				R = (r("./src/reddit/selectors/seo/linksModule.ts"), r("./src/reddit/selectors/seo/topicLinks.ts"), r("./src/reddit/selectors/subreddit.ts")),
				L = r("./src/reddit/selectors/widgets.ts");

			function P(e, t, r, s) {
				const n = t(),
					d = Object(R.Q)(n, {
						subredditId: r
					}),
					i = Object(L.j)(n, {
						subredditId: r
					});
				if (d.isNSFW || i.some(e => "community-list" === e)) return;
				const o = k(s);
				o && e(Object(v.e)({
					id: r,
					data: o
				}))
			}

			function U(e, t, r) {
				const s = N(r);
				s && e(Object(w.b)({
					id: t,
					data: s
				}))
			}
			var G = r("./src/reddit/actions/structuredStyles/index.ts"),
				B = r("./src/reddit/actions/subreddit.ts"),
				q = r("./src/reddit/actions/toaster.ts"),
				F = r("./src/reddit/helpers/localStorage/index.ts"),
				M = r("./src/reddit/models/Subreddit/index.ts"),
				Q = r("./src/reddit/models/Toast/index.ts"),
				W = r("./src/reddit/routes/postCreation/constants.ts"),
				$ = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				J = r("./src/reddit/selectors/platform.ts"),
				H = r("./src/reddit/selectors/user.ts");
			const z = () => async (e, t, r) => {
				const s = t(),
					n = Object(J.e)(s);
				if (!n || n.type !== M.f.Public) return;
				const d = n.name,
					i = Object(J.l)(s),
					o = Object(R.t)(s, {
						subredditName: d
					});
				if (!o) return;
				const {
					activity7Day: c
				} = o, u = !!c && c >= 51 && c <= 100, l = !d || Object(b.a)(d), p = i && i.urlParams.subredditName === d, f = Object(H.K)(s), m = Object($.c)(s, {
					subredditId: Object(R.B)(s, d)
				});
				if (l || p || Object(F.D)() || !u || !f || m) return;
				const O = Object(L.d)(t(), {
					subredditName: d
				});
				if (!O || !O.currentlyViewingCount) return;
				const g = (24 * O.currentlyViewingCount * 7).toString(),
					j = g[0].padEnd(g.length, "0");
				e(Object(q.f)({
					buttonAction: async () => e(Object(a.b)(`/r/${d}${W.b}`)),
					buttonText: "Create Post",
					duration: -1,
					id: "createPostCta",
					kind: Q.b.Modal,
					name: "createPostCta",
					secondButtonAction: async () => Object(F.Fb)(),
					secondButtonText: "Dismiss",
					text: `There have been over ${j} visits to r/${d} in the past week. Create a new post and start the next conversation.`
				}))
			};
			var V = r("./src/reddit/actions/subreddit/questions.ts"),
				K = r("./src/reddit/actions/subredditSettings.ts"),
				Y = r("./src/reddit/actions/subredditWelcomeMessage.ts"),
				X = r("./src/reddit/actions/tags/index.ts"),
				Z = r("./src/reddit/constants/page.ts"),
				ee = r("./src/reddit/constants/parameters.ts"),
				te = r("./src/reddit/constants/postLayout.ts"),
				re = r("./src/reddit/contexts/PageLayer/index.tsx"),
				se = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				ne = r("./src/reddit/endpoints/governance/posts.ts"),
				de = r("./src/reddit/endpoints/page/subredditPage.ts"),
				ie = r("./src/redditGQL/operations/SubredditPageExtra.json");
			var oe = r("./src/reddit/endpoints/profile/info.ts"),
				ae = r("./src/reddit/helpers/canonicalUrls.ts"),
				ce = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				ue = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				le = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts");

			function be({
				econLeaderboards: e,
				identity: t,
				trendingSubreddits: r
			}) {
				const s = e.topAwardedPosts.map(e => e.post).filter(e => !e.removedBy && !e.isNsfw);
				return Object(le.b)(s, r, t)
			}
			var pe = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				fe = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				me = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Oe = r("./src/reddit/models/RichTextJson/index.ts"),
				ge = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				je = r("./src/reddit/selectors/communityFlairs.ts"),
				_e = r("./src/reddit/selectors/experiments/econ/powerupsAward.ts"),
				Se = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				Ie = r("./src/reddit/selectors/experiments/topPosts.ts"),
				Te = r("./src/reddit/selectors/gold/powerups/index.ts"),
				Ee = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				he = r("./src/reddit/selectors/moderatorPermissions.ts"),
				ye = r("./src/reddit/selectors/multireddit.ts"),
				xe = r("./src/reddit/selectors/posts.ts");
			const De = (e, t) => async r => {
				if (!e.ok && e.body && (e => !!e.reason)(e.body)) {
					const {
						body: {
							data: s,
							reason: n
						}
					} = e, d = s ? s.account : void 0, i = s && s.features || void 0, o = t ? t.toLowerCase() : "";
					if (404 === e.status)
						if (n === M.e.NotFoundSubreddit) r(_.o({
							account: d,
							features: i,
							subredditName: o
						}));
						else if (n === M.e.BannedSubreddit) {
						const e = s ? s.banMessage || s.ban_message : void 0;
						r(_.m({
							banMessage: e,
							account: d,
							features: i,
							subredditName: o
						}))
					}
					if (451 === e.status && r(_.n({
							account: d,
							features: i,
							subredditName: o
						})), 403 === e.status)
						if (n === M.e.GoldSubreddit) r(_.q({
							account: d,
							features: i,
							subredditName: o
						}));
						else if (n === M.e.PrivateSubreddit) r(_.r({
						account: d,
						features: i,
						subredditDescription: s.description || "",
						subredditName: o,
						isContributorRequestsDisabled: !!s.isContributorRequestsDisabled,
						isContributorRequestTimestamp: s.isContributorRequestTimestamp ? parseInt(s.isContributorRequestTimestamp, 10) : void 0,
						subredditId: s.id
					}));
					else if (n === M.e.QuarantinedSubreddit) {
						const e = !s || void 0 === s.quarantineRequiresEmailOptin || s.quarantineRequiresEmailOptin;
						r(_.t({
							account: d,
							features: i,
							subredditName: o,
							quarantineRequiresEmail: e,
							quarantineMessage: s.quarantineMessage,
							quarantineMessageHtml: s.quarantineMessageHtml || "",
							quarantineMessageRTJson: s.quarantineMessageRTJson || Oe.i
						}))
					}
				}
			}, ve = "PAGE__SUBREDDIT_PENDING", we = "PAGE__SUBREDDIT_LOADED", Ae = "PAGE__SUBREDDIT_FAILED", Ce = Object(p.a)(ve), ke = Object(p.a)(we), Ne = Object(p.a)(Ae), Re = (e, t, r, n) => async (i, o, a) => {
				var u, l, p, f, m, _, S;
				const y = o(),
					D = Object(H.J)(y) || Object(H.K)(y);
				if (y.listings.postOrder.api.pending[e]) return;
				const v = null === (l = null === (u = Object(J.b)(y)) || void 0 === u ? void 0 : u.routeMatch) || void 0 === l ? void 0 : l.route.chunk,
					{
						currentPage: w
					} = y.platform,
					{
						countryCode: C,
						languageCode: k
					} = (null == w ? void 0 : w.urlParams) || {},
					N = Object(b.a)(t, C, k),
					L = Object(b.c)(t, C, k),
					G = (Object(b.b)(t, C, k) || L) && y.posts.recent.length ? {
						...r,
						recentPostIds: y.posts.recent
					} : r;
				G.layout = te.e[Object(re.Q)(y, {})], L && (G.forceGeopopular = !0), i(Ce({
					key: e
				}));
				const F = Object(Se.b)(y);
				let M;
				if (r.sort === c.V.AWARDED && L) M = Object(se.a)(a.gqlContext(), {
					top: 0,
					includeListingMetadata: !0
				}).then(e => {
					const t = e.body;
					return {
						...e,
						body: be(t.data)
					}
				});
				else {
					const e = F ? () => Object(de.b)(a.gqlContext(), Object(de.c)(y, t, G), D) : () => Object(de.a)(a.apiContext(), t, G);
					M = Object(O.i)(e, {
						name: "fetchSubredditPage",
						page: v,
						isLoggedIn: D
					})
				}
				const W = Object(R.P)(o(), {
						subredditId: Object(R.B)(o(), t)
					}).length > 0,
					$ = Object(O.i)(() => {
						var e, r;
						return async function(e, t) {
							return Object(A.a)(e, {
								...ie,
								variables: t
							})
						}(a.gqlContext(), {
							subredditName: t,
							isFake: N,
							includeIdentity: D,
							includePowerups: !N,
							includeQuestions: D && !N,
							includeRules: !N && !W,
							includeRedditorKarma: D && !(null === (r = null === (e = y.user.account) || void 0 === e ? void 0 : e.karma) || void 0 === r ? void 0 : r.total),
							includeSubredditLinks: !D,
							includeTopicLinks: !D,
							includeWelcome: !0
						})
					}, {
						name: "fetchSubredditPageExtra",
						page: v,
						isLoggedIn: D
					}),
					[z, Z] = await Promise.all([M, $]);
				let ee = null;
				(null == Z ? void 0 : Z.ok) && (ee = Z.body.data);
				const ae = z.body,
					ce = (null == ae ? void 0 : ae.subreddits) ? ((e, t) => {
						var r;
						return null === (r = d()(e, e => (null == e ? void 0 : e.name.toLowerCase()) === t.toLowerCase())) || void 0 === r ? void 0 : r.id
					})(ae.subreddits, t) : null;
				i(x.m(z.status));
				const ue = `error-${e}`,
					le = N || ce;
				if (z.ok && le) {
					if (!N && ce) {
						const e = null !== (f = null === (p = null == ee ? void 0 : ee.subredditInfoByName) || void 0 === p ? void 0 : p.welcomeMessage) && void 0 !== f ? f : ae.welcomeMessage;
						e && i(Object(Y.f)({
							welcomeMessage: e,
							subredditId: ce
						})), Object(E.b)(i, ce, null == ee ? void 0 : ee.subredditInfoByName, null == ee ? void 0 : ee.identity), Object(Te.h)(o(), {
							subredditId: ce
						}) && Object(_e.a)(o())
					}
					let r;
					ae.geoFilter && i(Object(h.k)(ae.geoFilter));
					const s = ae.postIds.filter(e => !!ae.posts[e].isMeta);
					if (s.length && ce) {
						const e = Object(O.i)(() => Object(ne.a)(a.apiContext(), ce, s), {
								name: "getGovernanceData",
								page: v,
								isLoggedIn: D
							}),
							t = await e;
						t.ok && (r = t.body)
					}
					if (Z && Z.ok) {
						const e = null === (_ = null === (m = Z.body.data.identity) || void 0 === m ? void 0 : m.redditor) || void 0 === _ ? void 0 : _.karma,
							t = {
								karma: {
									...oe.a,
									...e
								}
							};
						if (ae.account && Object.assign(ae.account, t), ce) {
							const e = null == Z ? void 0 : Z.body;
							if (function(e) {
									return Boolean(e && e.data && e.data.subredditInfoByName)
								}(e) && ae.subredditAboutInfo[ce]) {
								const t = e.data.subredditInfoByName,
									r = t && t.notificationLevel;
								ae.subredditAboutInfo[ce].notificationLevel = r
							}
						}
					}
					if (i(ke({
							key: e,
							meta: y.meta,
							governance: r,
							...ae,
							postIds: ae.postIds
						})), !N) {
						const e = Object(R.B)(o(), t);
						(null === (S = null == ee ? void 0 : ee.subreddit) || void 0 === S ? void 0 : S.rules) && i(B.t({
							rules: Object(pe.a)(ee.subreddit.rules),
							subredditId: e
						}));
						const r = Object(j.c)(ae.posts, e),
							s = Object(j.b)(ae.structuredStyles),
							n = (s ? Object(j.d)(s) : []).concat(r);
						i(Object(j.a)(n, e))
					}
					if (n && i(q.g(ue)), i(Object(g.b)(ge.a.SUBREDDIT)), i(Object(T.p)()), ce) {
						Object(V.a)(i, ce, null == ee ? void 0 : ee.subredditInfoByName), P(i, o, ce, {
							data: {
								subredditInfoById: null == ee ? void 0 : ee.subredditInfoByName
							}
						}), U(i, ce, {
							data: {
								subredditInfoById: null == ee ? void 0 : ee.subredditInfoByName
							}
						});
						const e = [Object(O.i)(() => i(Object(I.a)({
							subredditId: ce,
							postIds: ae.postIds,
							skip: ["subscription"]
						})), {
							name: "fetchAllEconomicsData",
							page: v,
							isLoggedIn: D
						})];
						if (Object(Ee.a)(o(), {
								subredditId: ce
							})) {
							const r = Object(O.i)(() => i(Object(K.h)(t, ce)), {
									name: "subredditSettingsRequested",
									isLoggedIn: D,
									page: v
								}),
								s = Object(O.i)(() => i(Object(X.g)(ce, fe.a.idCard)), {
									name: "subredditTagsRequested",
									isLoggedIn: D,
									page: v
								});
							e.push(r, s)
						}
						0, await Promise.all(e)
					}
				} else {
					if (403 === z.status || 404 === z.status || 451 === z.status) return void i(De(z, t));
					i(Ne({
						error: !z.ok && z.error || {
							type: c.H.NOT_FOUND_ERROR
						},
						key: e,
						...ae
					})), n && i(q.f({
						id: ue,
						kind: Q.b.Error,
						text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: Re(e, t, r, n)
					}))
				}
			}, Le = (e, t, r) => async (s, n) => {
				const d = n(),
					i = Object(f.a)(e, t.sort, t);
				Object(xe.A)(d, {
					listingKey: i
				}).length > 0 || await s(Re(i, e, t, r))
			}, Pe = (e, t, r, s) => {
				if (Object(b.a)(t, r, s)) {
					if (Object(l.a)(t)) {
						return Object(ye.a)(e, {
							listingName: t
						}).displayText
					}
					switch (t.toLowerCase()) {
						case Z.d.Popular:
							return "r/popular";
						case Z.d.All:
							return "r/all"
					}
				}
				return Object(R.T)(e, {
					subredditName: t
				})
			}, Ue = (e, t, r, s) => s ? Object(m.b)(e.subredditName, void 0, s) : Object(f.a)(e.subredditName, t, r), Ge = (e, t) => async (r, s) => {
				var n, d;
				const {
					countryCode: i,
					languageCode: l
				} = e.params, p = Object(u.c)(e.params), {
					styling: _
				} = e.queryParams, I = s(), E = Object(ce.a)(e.params, I);
				if ("Popular" === p) return void r(Object(a.c)(e.url.replace("r/Popular", "r/popular")));
				if ("All" === p) return void r(Object(a.c)(e.url.replace("r/All", "r/all")));
				const h = Object(m.d)(e.queryParams, Object(H.eb)(I)),
					v = Ue({
						subredditName: p,
						countryCode: i,
						languageCode: l
					}, E, e.queryParams, h),
					w = E,
					A = I.listings.postOrder.api.error[v],
					C = I.listings.postOrder.api.pending[v];
				let k = !!I.listings.postOrder.ids[v];
				const N = I.listings.postOrder.listingSort[v];
				N && N.hasChanged && (k = !1);
				let L = Object(R.B)(I, p);
				const P = (e, t) => "true" === _ && ((e, t) => Object(he.b)(me.c.config)(e, {
						subredditId: t
					}) || Object(he.b)(me.c.flair)(e, {
						subredditId: t
					}))(e, t),
					U = ee.y in e.queryParams && e.queryParams[ee.y].toUpperCase() || "",
					B = U in c.dc && c.dc[U];
				if (C || k && !A && !t) {
					if (P(I, L) && r(G.i(L)), k) {
						const t = Pe(s(), p, i, l);
						r(x.l({
							title: t
						})), Object(ae.e)(s(), r, e), window.addEventListener("load", () => {
							r(Object(T.p)())
						}), I.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
							r(Object(g.b)(ge.a.SUBREDDIT))
						}), r(z())
					}
					return
				}
				r(S.g());
				const q = null === (d = null === (n = Object(J.b)(I)) || void 0 === n ? void 0 : n.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
					F = Object(H.K)(s()),
					M = Object(O.i)(() => r(Object(D.c)(`r/${p}`)), {
						name: "rpanConfigRequested",
						isLoggedIn: F,
						page: q
					});
				if (h) {
					const e = Object(O.i)(() => r(Object(y.searchDataRequested)(v, h, p)), {
						name: "searchDataRequested",
						isLoggedIn: F,
						page: q
					});
					await e
				} else {
					const t = {
						...o()(e.queryParams, [...ee.l, ...ee.k, ee.h]),
						sort: w,
						t: Object(ue.a)(w, B)
					};
					await r(Re(v, p, t, !0))
				}
				const Q = I.platform.currentPage,
					W = Object(Ie.d)(I, {
						pageLayer: Q
					});
				if (Object(Ie.a)(W) || Object(Ie.b)(W) || Object(Ie.c)(W)) {
					const e = Object(f.a)(p, c.V.TOP, {
							t: c.dc.WEEK
						}),
						t = {
							sort: c.V.TOP,
							t: c.dc.WEEK
						};
					await r(Re(e, p, t, !1))
				}
				if (L = L || Object(R.B)(s(), p), !Object(je.a)(I, L) && !Object(b.a)(p, i, l)) {
					const e = Object(O.i)(() => r(Object(j.e)(p)), {
						name: "getTopCommunityFlair",
						page: q,
						isLoggedIn: F
					});
					await e
				}
				P(s(), L) && r(G.i(L)), Object(ae.e)(s(), r, e);
				const $ = Pe(s(), p);
				r(x.l({
					title: $
				})), r(z()), await M
			}, Be = "PAGE__SUBREDDIT_INVALIDATE_LISTING", qe = Object(p.a)(Be)
		},
		"./src/reddit/actions/publicAccessNetwork/api.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return I
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/post.ts"),
				d = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = r("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				o = r("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				a = r("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = Object(s.a)(d.w),
				u = Object(s.a)(d.x),
				l = Object(s.a)(d.G),
				b = (Object(s.a)(d.H), Object(s.a)(d.I)),
				p = Object(s.a)(d.T),
				f = e => async (t, r) => {
					if (Object(o.a)(r())) return t(m(e))
				}, m = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = Object(a.k)(r()),
						d = Object(a.m)(r(), {
							subreddit: e
						}),
						o = d && d.lastUpdated || 0,
						p = 1e3 * n.global.rpan_config_refresh_rate;
					if (n.isPending || n.isPermanentlyCanceled || Date.now() < o + p) return;
					t(l());
					const f = await Object(i.c)(s(), e);
					if (!f.ok) return void t(b());
					const m = f.body;
					t(c({
						...m.global,
						lastUpdated: Date.now()
					})), t(u({
						name: e,
						config: {
							...m.listing_info,
							lastUpdated: Date.now()
						}
					}))
				}, O = e => async (t, r, {
					gqlContext: s
				}) => {
					t(p()), await Object(i.h)(s(), e)
				}, g = e => async (t, r, {
					apiContext: s
				}) => {
					r().posts.models[e] || await t(Object(n.L)(e))
				}, j = Object(s.a)(d.v), _ = Object(s.a)(d.J), S = Object(s.a)(d.K), I = () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t();
					if (Object(a.h)(s)) return;
					e(_());
					const n = await Object(i.d)(r());
					n.ok && n.body && n.body.data ? e(j({
						subreddits: n.body.data
					})) : e(S({
						error: n.error
					}))
				}
		},
		"./src/reddit/actions/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return b
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/loadWithRetries/index.ts");
			const d = "FRONTPAGE_LINKS__REQUEST_LOADED",
				i = "SUBREDDIT_LINKS_LOADED",
				o = 10,
				a = Object(s.a)("FRONTPAGE_LINKS__REQUEST_PENDING"),
				c = Object(s.a)("FRONTPAGE_LINKS__REQUEST_FAILED"),
				u = Object(s.a)(d),
				l = Object(s.a)(i),
				b = () => async e => {
					e(a());
					const t = await (async () => (await Object(n.a)(() => r.e("FrontpageLinks").then(r.t.bind(null, "./src/reddit/endpoints/goodContent/frontpageLinks.json", 3)))).default)();
					e(t ? u(t) : c())
				}
		},
		"./src/reddit/actions/seo/topicLinks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "SUBREDDIT_TOPIC_LINKS_LOADED",
				d = Object(s.a)(n)
		},
		"./src/reddit/actions/subreddit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "m", (function() {
				return F
			})), r.d(t, "l", (function() {
				return M
			})), r.d(t, "k", (function() {
				return Q
			})), r.d(t, "j", (function() {
				return W
			})), r.d(t, "i", (function() {
				return $
			})), r.d(t, "h", (function() {
				return J
			})), r.d(t, "d", (function() {
				return H
			})), r.d(t, "p", (function() {
				return Y
			})), r.d(t, "t", (function() {
				return X
			})), r.d(t, "o", (function() {
				return te
			})), r.d(t, "r", (function() {
				return ne
			})), r.d(t, "g", (function() {
				return de
			})), r.d(t, "f", (function() {
				return ie
			})), r.d(t, "e", (function() {
				return oe
			})), r.d(t, "q", (function() {
				return le
			})), r.d(t, "b", (function() {
				return be
			})), r.d(t, "c", (function() {
				return pe
			})), r.d(t, "a", (function() {
				return fe
			})), r.d(t, "u", (function() {
				return je
			})), r.d(t, "n", (function() {
				return _e
			})), r.d(t, "s", (function() {
				return Se
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/pick.js"),
				d = r.n(n),
				i = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/listingSort/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				u = r("./src/reddit/actions/economics/helpers/async.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				b = r("./src/reddit/actions/pages/subreddit.ts"),
				p = r("./src/reddit/actions/preferences.ts"),
				f = r("./src/reddit/actions/subredditRules/constants.ts"),
				m = r("./src/reddit/actions/toaster.ts"),
				O = r("./src/reddit/constants/modals.ts"),
				g = r("./src/reddit/constants/page.ts"),
				j = r("./src/reddit/constants/parameters.ts"),
				_ = r("./src/reddit/constants/postLayout.ts"),
				S = r("./src/reddit/contexts/PageLayer/index.tsx"),
				I = r("./src/reddit/endpoints/governance/posts.ts"),
				T = r("./src/reddit/endpoints/messages/index.ts"),
				E = r("./src/reddit/endpoints/modQueue/index.ts"),
				h = r("./src/reddit/endpoints/page/subredditPage.ts"),
				y = r("./src/reddit/endpoints/subreddit/about.ts"),
				x = r("./src/reddit/endpoints/subreddit/rules.ts"),
				D = r("./src/reddit/endpoints/user/preferences.ts"),
				v = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				w = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				A = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				C = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				k = r("./src/reddit/models/Subreddit/index.ts"),
				N = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				R = r("./src/reddit/models/Toast/index.ts"),
				L = r("./src/reddit/models/User/index.ts"),
				P = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				U = r("./src/reddit/selectors/profile.ts"),
				G = r("./src/reddit/selectors/subreddit.ts"),
				B = r("./src/reddit/selectors/user.ts");
			const q = {},
				F = "SUBREDDIT__MODEL_SUCCEEDED",
				M = "SUBREDDIT__MODEL_PENDING",
				Q = "SUBREDDIT__MODEL_FAILED",
				W = "SUBREDDIT__MORE_POSTS_PENDING",
				$ = "SUBREDDIT__MORE_POSTS_LOADED",
				J = "SUBREDDIT__MORE_POSTS_FAILED",
				H = "SUBREDDIT__META_FILTER_TOGGLED",
				z = Object(a.a)(W),
				V = Object(a.a)($),
				K = Object(a.a)(J),
				Y = Object(a.a)(H),
				X = Object(a.a)(f.b),
				Z = Object(a.a)(f.c),
				ee = Object(a.a)(f.a),
				te = (e, t) => async (r, s) => {
					await (t === k.f.User ? r(re(e)) : r(se(e)))
				}, re = e => async (t, r, {
					apiContext: s
				}) => {
					const n = Object(U.m)(r(), e),
						d = await Object(x.c)(s(), e);
					if (d.ok) {
						const e = d.body;
						t(X({
							rules: e,
							subredditId: n
						}))
					}
				}, se = e => async (t, r, {
					gqlContext: n
				}) => {
					const d = Object(G.B)(r(), e);
					t(Z());
					const i = await Object(x.b)(n(), e);
					if (i.ok) {
						const e = i.body;
						t(X({
							rules: e,
							subredditId: d
						}))
					} else {
						t(ee());
						const r = `error-block-${e}`;
						t(m.f({
							id: r,
							kind: R.b.Error,
							text: s.fbt._("An error has occurred. Please try again later", null, {
								hk: "Elbdz"
							})
						}))
					}
				}, ne = e => async (t, r, {
					apiContext: s,
					gqlContext: n
				}) => {
					const {
						subredditName: a
					} = e;
					let l = e.t;
					const b = r(),
						p = Object(w.a)(e, b),
						f = b.platform.currentPage ? b.platform.currentPage.queryParams : {},
						m = Object(c.a)(a, p, {
							t: l,
							...f
						}),
						O = b.listings.postOrder.loadMore[m],
						T = b.listings.postOrder.listingSort[m];
					let E = p;
					if (T && !E) {
						const e = Object(o.d)(T.sort);
						E = e.sort, l = e.timeSort
					}
					const y = b.listings.postOrder.api.pending[m],
						{
							fetchedTokens: x
						} = b.listings.postOrder,
						D = !(!x[m] || !x[m][O.token]);
					if (y || D) return;
					if (E === i.V.AWARDED && a === g.g) return;
					t(z({
						key: m,
						fetchedToken: O.token
					}));
					const A = {
							after: O.token,
							dist: O.dist,
							forceGeopopular: a === g.d.Popular,
							layout: _.e[Object(S.Q)(b, {})],
							sort: E,
							t: l,
							...d()(f, [...j.l, j.h])
						},
						C = Object(P.a)(b) ? () => Object(h.b)(n(), Object(h.c)(b, a, {
							...A,
							limit: _.a
						}), Object(B.T)(b)) : () => Object(h.a)(s(), a, A),
						k = await C(),
						N = {
							...k.body,
							...Object(v.a)(b, m, k.body)
						};
					if (k.ok) {
						let e;
						const n = N.postIds.filter(e => !!N.posts[e].isMeta),
							d = Object(G.B)(r(), a);
						if (n.length) {
							const t = await Object(I.a)(s(), d, n);
							t.ok && (e = t.body)
						}
						t(V({
							fetchedToken: O.token,
							key: m,
							meta: b.meta,
							governance: e,
							...N
						})), await t(Object(u.a)({
							subredditId: d,
							postIds: N.postIds,
							skip: ["communityDetails", "subscription"]
						}))
					} else t(K({
						error: k.error,
						fetchedToken: O.token,
						key: m,
						...N
					}))
				}, de = "SUBSCRIPTION__MODERATED_SUBREDDITS_PENDING", ie = "SUBSCRIPTION__MODERATED_SUBREDDITS_LOADED", oe = "SUBSCRIPTION__MODERATED_SUBREDDITS_FAILED", ae = Object(a.a)(de), ce = Object(a.a)(ie), ue = Object(a.a)(oe), le = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t();
					if (!s.user.account || s.subreddits.moderated.api.fetched) return;
					e(ae());
					const n = await Object(E.b)(r(), i.qb.Modqueue, {
						moderated: !0,
						moderated_limit: 50
					});
					n.ok ? e(ce(n.body)) : e(ue({
						error: n.error
					}))
				}, be = "SUBREDDIT__ABOUT_PENDING", pe = "SUBREDDIT__ABOUT_SUCCEEDED", fe = "SUBREDDIT__ABOUT_FAILED", me = Object(a.a)(be), Oe = Object(a.a)(pe), ge = Object(a.a)(fe), je = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r();
					if (Object(G.t)(n, {
							subredditName: e
						}) || n.subreddits.api.about.error[e.toLowerCase()] || n.subreddits.api.about.pending[e.toLowerCase()]) return;
					t(me({
						subredditName: e
					}));
					const d = !Object(G.B)(n, e),
						i = await Object(y.a)(s(), e, d);
					if (i.ok) {
						const r = i.body.data.subreddit,
							s = Object(A.a)(r),
							n = d ? Object(C.a)(r) : void 0;
						t(Oe({
							subredditName: e,
							subreddits: n ? {
								[n.id]: n
							} : void 0,
							data: s
						}))
					} else t(ge({
						subredditName: e,
						error: i.error
					}))
				}, _e = (e, t, r) => async (s, n, {
					apiContext: d
				}) => {
					var i;
					const o = e.substring(2),
						a = r === N.e.View ? null === (i = Object(B.f)(n(), o)) || void 0 === i ? void 0 : i.subredditId : Object(G.B)(n(), o),
						c = Object(B.k)(n());
					if (c && a) {
						const e = ((e, t, r, s) => {
							return {
								to: `/r/${e}`,
								subject: `[join] I would like to join ${e}`,
								text: r + "\n\n   *To approve this user*, visit [the approved users page for r/" + e + "](https://www.reddit.com/r/" + e + "/about/contributors?user=" + t + ') and click "ADD USER".\n    Approving this user gives them permission to ' + s + ". You can change these community restrictions from the [community settings](/r/" + e + "/about/edit) page.\n\n   To get more information about this user, visit the profile page of [u/" + t + "](/u/" + t + ") or reply to this message to start a conversation."
							}
						})(o, Object(L.e)(c), t, r);
						if ((await Object(T.b)(d(), e)).ok) {
							const e = new Date,
								t = {
									isContributorRequestTimestamp: e.setDate(e.getDate())
								};
							s(Object(p.C)({
								subredditId: a,
								prefs: t
							})), Object(D.h)(a, t, d()), r !== N.e.View && s(Object(l.i)(O.a.CONTRIBUTOR_REQUEST_PENDING))
						}
					}
				}, Se = e => async (t, r) => {
					const s = r(),
						{
							subredditName: n
						} = e,
						d = e.t,
						i = Object(w.a)(e, s),
						o = s.platform.currentPage ? s.platform.currentPage.queryParams : q,
						a = Object(c.a)(n, i, {
							t: d,
							...o
						}),
						u = {
							t: d,
							sort: i,
							...o
						};
					await t(Object(b.subredditDataRequested)(a, n, u, !0))
				}
		},
		"./src/reddit/actions/subreddit/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "r", (function() {
				return a
			})), r.d(t, "q", (function() {
				return c
			})), r.d(t, "m", (function() {
				return u
			})), r.d(t, "l", (function() {
				return l
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "p", (function() {
				return p
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "w", (function() {
				return _
			})), r.d(t, "v", (function() {
				return S
			})), r.d(t, "x", (function() {
				return I
			})), r.d(t, "y", (function() {
				return T
			})), r.d(t, "z", (function() {
				return E
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "t", (function() {
				return x
			})), r.d(t, "u", (function() {
				return D
			})), r.d(t, "s", (function() {
				return v
			}));
			const s = "SUBREDDIT__ADD_TOP_SUBREDDIT_MODELS",
				n = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS",
				d = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS_PAGE_INFO",
				i = "SUBREDDIT__POSTS_LOADED",
				o = "SUBREDDIT__POSTS_SET_FAILED",
				a = "SUBREDDIT__SUBREDDITS_POSTS_LOADED",
				c = "SUBREDDIT__SUBREDDITS_POSTS_SET_FAILED",
				u = "SUBREDDIT__RANKINGS_PENDING",
				l = "SUBREDDIT__RANKINGS_LOADED",
				b = "SUBREDDIT__RANKINGS_FAILED",
				p = "SUBREDDIT__SIMILAR_SUBREDDITS_PENDING",
				f = "SUBREDDIT__SIMILAR_SUBREDDITS_LOADED",
				m = "SUBREDDIT__SIMILAR_SUBREDDITS_FAILED",
				O = "SUBREDDIT__ONBOARDING_SUBREDDITS_PENDING",
				g = "SUBREDDIT__ONBOARDING_SUBREDDITS_LOADED",
				j = "SUBREDDIT__ONBOARDING_SUBREDDITS_FAILED",
				_ = "SUBREDDIT__EDIT_REQUESTED",
				S = "SUBREDDIT__EDIT_FAILED",
				I = "SUBREDDIT__EDIT_SUCCESS",
				T = "SUBREDDIT_QUESTIONS_LOADED",
				E = "SUBREDDIT_SURVEY_ANSWERED",
				h = "SUBREDDIT_SURVEY_DISMISSED",
				y = "SUBREDDIT_SURVEY_DISMISS",
				x = "SUBREDDIT_ABOUT_INFO_UPDATE__PENDING",
				D = "SUBREDDIT_ABOUT_INFO_UPDATE__SUCCESS",
				v = "SUBREDDIT_ABOUT_INFO_UPDATE__FAILED"
		},
		"./src/reddit/actions/subreddit/questions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/GetSubredditQuestions.json"),
				d = r("./src/reddit/actions/subreddit/constants.ts");
			const i = e => async (t, r, {
				gqlContext: d
			}) => {
				var i;
				const a = (await ((e, t) => Object(s.a)(e, {
					...n,
					variables: t
				}))(d(), {
					id: e
				})).body;
				o(t, e, null === (i = a.data) || void 0 === i ? void 0 : i.subredditInfoById)
			};

			function o(e, t, r) {
				const s = null == r ? void 0 : r.answerableQuestions,
					n = null == r ? void 0 : r.contentRatingSurvey,
					i = null == r ? void 0 : r.communityProgressModule;
				(s || n || i) && e({
					type: d.y,
					payload: {
						id: t,
						questions: s,
						survey: n,
						progressModule: i
					}
				})
			}
		},
		"./src/reddit/actions/subredditRules/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			}));
			const s = "SUBREDDIT__RULES_LOADED",
				n = "SUBREDDIT__RULES_PENDING",
				d = "SUBREDDIT__RULES_FAILED",
				i = "SUBREDDIT__RULE_ADDED",
				o = "SUBREDDIT__RULE_EDITED",
				a = "SUBREDDIT__RULE_REMOVED",
				c = "SUBREDDIT__RULES_REORDERED"
		},
		"./src/reddit/actions/subredditSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "h", (function() {
				return A
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "j", (function() {
				return G
			})), r.d(t, "i", (function() {
				return B
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/invert.js"),
				d = r.n(n),
				i = r("./node_modules/lodash/pick.js"),
				o = r.n(i),
				a = r("./node_modules/lodash/xor.js"),
				c = r.n(a),
				u = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/makeActionCreator/index.ts"),
				b = r("./src/reddit/endpoints/subreddit/settings.ts"),
				p = r("./src/telemetry/index.ts"),
				f = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/models/User/index.ts"),
				S = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/selectors/subredditSettings.ts"),
				T = r("./src/reddit/selectors/user.ts"),
				E = r("./src/reddit/selectors/widgets.ts");
			const h = "SUBREDDIT_SETTINGS_LOADED",
				y = Object(l.a)(h),
				x = "SUBREDDIT_NOTIFICATION_SETTINGS_LOADED",
				D = Object(l.a)(x),
				v = "SUBREDDIT_NOTIFICATION_SETTINGS_UPDATED",
				w = Object(l.a)(v),
				A = (e, t) => async (r, s, {
					apiContext: n,
					gqlContext: d
				}) => {
					if (!t || !Object(S.S)(s(), t)) {
						const t = await Object(b.c)(n(), e);
						t && t.ok && r(y(t.body))
					}
					if (t && !Object(I.b)(s(), {
							subredditId: t
						})) {
						const e = await Object(m.a)(d(), t);
						if (e && e.ok) {
							const t = e.body,
								s = Object(O.e)(t.data);
							r(D(s))
						}
					}
				}, C = () => async (e, t, {
					apiContext: r
				}) => {
					const s = Object(T.k)(t());
					s && await e(A(u.fc + Object(_.e)(s)))
				}, k = "SUBREDDIT_SETTINGS_UPDATE_REQUESTED", N = "SUBREDDIT_SETTINGS_UPDATE_SUCCESS", R = "SUBREDDIT_SETTINGS_UPDATE_FAILURE", L = Object(l.a)(k), P = Object(l.a)(N), U = Object(l.a)(R), G = (e, t, r = {}, n = !1) => async (i, a, {
					apiContext: u,
					gqlContext: l
				}) => {
					i(L());
					const O = a(),
						_ = o()(Object(S.S)(O, e), ...Object.keys(t)),
						T = o()(Object(I.b)(O, {
							subredditId: e
						}), ...Object.keys(r)),
						h = await Object(b.g)(u(), e, t),
						y = Object.keys(r).length > 0;
					let x = !0;
					if (y) {
						x = (await Object(m.b)(l(), e, r)).ok
					}
					if (!h.ok || y && !x) i(U()), i(Object(f.f)({
						kind: j.b.Error,
						text: s.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
							hk: "3wBPeO"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: G(e, t, T, void 0)
					})), n && Object(p.a)(Object(g.c)(O, "BE returned an error:"));
					else {
						const o = Object(b.d)(h.body, d()(b.a));
						i(P({
							settings: {
								...o,
								subredditId: e
							},
							idCardWidgetId: Object(E.c)(O, {
								subredditId: e
							})
						})), y && i(w({
							notificationSettings: r,
							subredditId: e
						}));
						const a = {};
						n && 0 === c()(Object.keys(t), Object.keys(_)).length && (a.buttonText = s.fbt._("Undo", null, {
							hk: "1Gskii"
						}), a.buttonAction = G(e, _, T, n)), i(Object(f.f)({
							kind: j.b.SuccessCommunity,
							text: s.fbt._("Subreddit settings updated successfully", null, {
								hk: "2fmdlZ"
							}),
							...a
						}))
					}
				}, B = (e, t) => async (r, n, {
					apiContext: d
				}) => {
					(await Object(b.e)(d(), e, t)).ok ? r(Object(f.f)({
						kind: j.b.SuccessCommunity,
						text: s.fbt._("Test message was sent to your inbox", null, {
							hk: "1ZtKzO"
						})
					})) : r(Object(f.f)({
						kind: j.b.Error,
						text: s.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
							hk: "3wBPeO"
						})
					}))
				}
		},
		"./src/reddit/actions/subredditWelcomeMessage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return S
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "f", (function() {
				return x
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/telemetry/index.ts"),
				d = r("./src/reddit/actions/login.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/redditGQL/operations/GetSubredditWelcomeMessage.json"),
				l = r("./src/redditGQL/operations/UpdateSubredditWelcomeMessage.json");
			const b = e => {
				if (e) return {
					...e
				}
			};
			var p = r("./src/reddit/helpers/trackers/welcomeMessage.ts"),
				f = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				m = r("./src/reddit/selectors/experiments/subredditWelcomeMessage.ts"),
				O = r("./src/reddit/selectors/platform.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/selectors/welcomeMessage.ts");
			const S = () => async e => {
				await e(Object(i.g)(a.a.SUBREDDIT_WELCOME_MESSAGE))
			}, I = e => async (t, r, {
				gqlContext: s
			}) => {
				const n = r(),
					d = Object(O.d)(n);
				if (!d) return;
				const i = await ((e, t) => Object(c.a)(e, {
					...u,
					variables: t
				}))(s(), {
					subredditName: d
				});
				if (i.ok) {
					const r = (e => {
						var t, r;
						const s = null === (r = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.subredditInfoByName) || void 0 === r ? void 0 : r.welcomeMessage;
						return b(s)
					})(i.body);
					r && t(x({
						subredditId: e,
						welcomeMessage: r
					}))
				}
			}, T = e => async (t, r) => {
				var s;
				const c = r();
				if (!Object(j.K)(c)) return void(await t(Object(d.i)()));
				const u = Object(_.a)(c, e),
					l = (null == u ? void 0 : u.isEnabled) && (null == u ? void 0 : u.isRenderedOnJoin),
					b = (null === (s = Object(g.P)(c, {
						subredditId: e
					})) || void 0 === s ? void 0 : s.length) > 0,
					O = Object(g.bb)(c, {
						subredditId: e
					}),
					S = Object(g.f)(c),
					I = Object(g.q)(c, f.e.Post);
				if (!l || !b || (S || I || O)) return;
				const T = Object(m.a)(c);
				(T === o.re.Post || T === o.re.Rules) && (Object(n.a)(Object(p.d)()(c)), await t(Object(i.h)(a.a.SUBREDDIT_WELCOME_MESSAGE)))
			}, E = e => async (t, r) => {
				let s = r(),
					n = Object(_.a)(s, e);
				n || (await t(I(e)), s = r(), n = Object(_.a)(s, e)), n && await t(Object(i.h)(a.a.SUBREDDIT_WELCOME_MESSAGE))
			}, h = (e, t, r) => async (s, n, {
				gqlContext: d
			}) => {
				const i = {
						subredditId: e,
						isWelcomeMessageEnabled: t,
						welcomeMessage: {
							markdown: r
						}
					},
					o = await ((e, t) => Object(c.a)(e, {
						...l,
						variables: t
					}))(d(), {
						input: i
					});
				if (o.ok) {
					const t = (e => {
						var t, r;
						const s = null === (r = null === (t = null == e ? void 0 : e.data.updateSubredditSettings) || void 0 === t ? void 0 : t.subreddit) || void 0 === r ? void 0 : r.welcomeMessage;
						return b(s)
					})(o.body);
					t && s(x({
						subredditId: e,
						welcomeMessage: t
					}))
				}
			}, y = "SUBREDDIT_WELCOME_MESSAGE__LOADED", x = Object(s.a)(y)
		},
		"./src/reddit/actions/tags/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "t", (function() {
				return s
			})), r.d(t, "j", (function() {
				return n
			})), r.d(t, "r", (function() {
				return d
			})), r.d(t, "q", (function() {
				return i
			})), r.d(t, "s", (function() {
				return o
			})), r.d(t, "l", (function() {
				return a
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "o", (function() {
				return l
			})), r.d(t, "p", (function() {
				return b
			})), r.d(t, "n", (function() {
				return p
			})), r.d(t, "v", (function() {
				return f
			})), r.d(t, "w", (function() {
				return m
			})), r.d(t, "u", (function() {
				return O
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "A", (function() {
				return S
			})), r.d(t, "z", (function() {
				return I
			})), r.d(t, "D", (function() {
				return T
			})), r.d(t, "y", (function() {
				return E
			})), r.d(t, "C", (function() {
				return h
			})), r.d(t, "x", (function() {
				return y
			})), r.d(t, "B", (function() {
				return x
			})), r.d(t, "e", (function() {
				return D
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "i", (function() {
				return k
			}));
			const s = "TAGS__REQUESTED",
				n = "TAGS__AVAILABLE_LOADED",
				d = "TAGS__LOADED",
				i = "TAGS__FAILURE",
				o = "TAGS__RELEVANCE_LOADED",
				a = "TAGS__CREATE_REQUESTED",
				c = "TAGS__CREATE_SUCCESS",
				u = "TAGS__CREATE_FAILURE",
				l = "TAGS__DELETE_REQUESTED",
				b = "TAGS__DELETE_SUCCESS",
				p = "TAGS__DELETE_FAILURE",
				f = "TAGS__UPDATE_STATE_REQUESTED",
				m = "TAGS__UPDATE_STATE_SUCCESS",
				O = "TAGS__UPDATE_STATE_FAILURE",
				g = "PRIMARY_TAG__UPDATE_STATE_REQUESTED",
				j = "PRIMARY_TAG__UPDATE_STATE_SUCCESS",
				_ = "PRIMARY_TAG__UPDATE_STATE_FAILURE",
				S = "TAGS__OPTIONS_CANCELLED",
				I = "TAGS__OPTION_SELECTED",
				T = "TAGS__SUGGESTED_OPTION_SELECTED",
				E = "TAGS__OPTION_DESELECTED",
				h = "TAGS__SUGGESTED_OPTION_DESELECTED",
				y = "TAGS__INPUT_CHANGED",
				x = "TAGS__SUGGESTED_INPUT_CHANGED",
				D = "GLOBAL__TAGS__LOADED",
				v = "CREATION__TAGS_INPUT_CHANGED",
				w = "CREATION__TAGS_OPTION_SELECTED",
				A = "CREATION__TAGS_OPTION_DESELECTED",
				C = "CREATION__PRIMARY_TAG_SELECTED",
				k = "SETTINGS_PAGE_PRIMARY_TAG_UPDATE"
		},
		"./src/reddit/actions/tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return C
			})), r.d(t, "m", (function() {
				return k
			})), r.d(t, "i", (function() {
				return N
			})), r.d(t, "l", (function() {
				return R
			})), r.d(t, "h", (function() {
				return L
			})), r.d(t, "k", (function() {
				return P
			})), r.d(t, "a", (function() {
				return q
			})), r.d(t, "f", (function() {
				return F
			})), r.d(t, "g", (function() {
				return Q
			})), r.d(t, "e", (function() {
				return H
			})), r.d(t, "d", (function() {
				return z
			})), r.d(t, "b", (function() {
				return V
			})), r.d(t, "n", (function() {
				return K
			})), r.d(t, "c", (function() {
				return Y
			})), r.d(t, "o", (function() {
				return X
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/tags/constants.ts"),
				i = r("./src/reddit/actions/toaster.ts");
			const o = e => {
				const {
					subredditInfoById: t
				} = e, r = {
					global: {},
					[t.id]: {}
				};
				t.availableTags && t.availableTags.edges.reduce((e, {
					node: t
				}) => (e[t.subreddit && t.subreddit.id || "global"][t.id] = t, e), r);
				const s = {
					[t.id]: {}
				};
				t.secondaryTags && t.secondaryTags.edges.reduce((e, {
					node: r
				}) => (e[t.id][r.tag.id] = r, e), s);
				const n = {
					[t.id]: {}
				};
				return t.suggestedTags && t.suggestedTags.edges.reduce((e, {
					node: r
				}) => (e[t.id][r.tag.id] = r, e), n), {
					primaryTag: t.primaryTag,
					globalSubredditTags: r.global,
					subredditScopedTags: {
						[t.id]: r[t.id]
					},
					subredditId: t.id,
					itemTags: s,
					suggestedItemTags: n,
					geoPlace: t.geoPlace
				}
			};
			var a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/CreateSubredditTags.json");
			r("./src/redditGQL/operations/FetchGlobalTags.json");
			var u = r("./src/redditGQL/operations/FetchSubredditTags.json");
			const l = (e, {
				subredditId: t,
				pageSize: r = 1050,
				after: s,
				includeAvailableTags: n
			}) => Object(a.a)(e, {
				...u,
				variables: {
					subredditId: t,
					pageSize: r,
					after: s,
					includeAvailableTags: n
				}
			});
			var b = r("./src/redditGQL/operations/MaybeDeleteTagsAndUpdateItemTags.json");
			var p = r("./src/redditGQL/operations/UpdateSubredditTagStatesRelevance.json");
			var f = r("./src/redditGQL/operations/UpdateSubredditPrimaryTag.json");
			var m = r("./src/reddit/helpers/tags/index.ts"),
				O = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				g = r("./src/reddit/models/Tags/index.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/reducers/tags/selected/index.ts"),
				S = r("./src/reddit/selectors/tags.ts");
			Object(n.a)(d.e);
			const I = Object(n.a)(d.t),
				T = Object(n.a)(d.r),
				E = Object(n.a)(d.s),
				h = Object(n.a)(d.q),
				y = Object(n.a)(d.l),
				x = Object(n.a)(d.m),
				D = Object(n.a)(d.k),
				v = Object(n.a)(d.v),
				w = Object(n.a)(d.w),
				A = Object(n.a)(d.u),
				C = Object(n.a)(d.z),
				k = Object(n.a)(d.D),
				N = Object(n.a)(d.y),
				R = Object(n.a)(d.C),
				L = Object(n.a)(d.x),
				P = Object(n.a)(d.B),
				U = (Object(n.a)(d.d), Object(n.a)(d.c), Object(n.a)(d.b), Object(n.a)(d.g)),
				G = Object(n.a)(d.h),
				B = Object(n.a)(d.f),
				q = Object(n.a)(d.a),
				F = Object(n.a)(d.i),
				M = Object(n.a)(d.A),
				Q = (e, t, r = !1) => async (n, d, {
					gqlContext: a
				}) => {
					const c = d();
					n(I());
					const u = await l(a(), {
							subredditId: e
						}),
						b = u.body;
					if (u.ok && b.data.subredditInfoById.secondaryTags && b.data.subredditInfoById.availableTags && b.data.subredditInfoById.suggestedTags) n(T(o(b.data))), r && O.h(d(), e, {
						context: t
					});
					else {
						n(h());
						const d = r ? "topics_save" : "topics_load";
						O.g(c, e, d, {
							context: t
						}), n(Object(i.f)(Object(i.e)(s.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
							hk: "2DUkWX"
						}), j.b.Error, s.fbt._("Retry", null, {
							hk: "1c2xrJ"
						}), Q(e, t, r))))
					}
				}, W = e => async (t, r, {
					gqlContext: n
				}) => {
					t(I());
					const d = await l(n(), {
						subredditId: e
					});
					if (d.ok) {
						const e = d.body;
						t(E(o(e.data)))
					} else t(h()), t(Object(i.f)(Object(i.e)(s.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
						hk: "2DUkWX"
					}), j.b.Error, s.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), E(e))))
				}, $ = (e, t) => async (r, s, {
					gqlContext: n
				}) => {
					if (!t.length) return null;
					r(y());
					const d = t.map(t => ({
							subredditId: e,
							...t
						})),
						i = await ((e, t) => Object(a.a)(e, {
							...c,
							variables: t
						}))(n(), {
							input: d
						}),
						o = i.body && i.body.data || null;
					return i.ok && o && o.createSubredditTags && o.createSubredditTags.ok ? (r(x()), o.createSubredditTags.createdTags || []) : (r(D()), null)
				}, J = (e, t, r = []) => async (s, n, {
					gqlContext: d
				}) => {
					if (!t.length && !r.length) return;
					s(v());
					const i = n(),
						c = Object(S.d)(i, {
							subredditId: e
						}),
						u = Object(S.o)(i, {
							itemId: e
						}),
						l = Object(S.z)(i, {
							itemId: e
						}),
						p = new Set;
					for (const e of t)
						if (e.state === g.d.NONE && c[e.tagId] && !l[e.tagId]) {
							!!r.find(t => t.state === g.d.TAGGED && t.tagId === e.tagId) || p.add(e.tagId)
						} for (const e of r)
						if (e.state === g.d.NONE && c[e.tagId] && !u[e.tagId]) {
							!!t.find(t => t.state === g.d.TAGGED && t.tagId === e.tagId) || p.add(e.tagId)
						} const f = await ((e, t) => Object(a.a)(e, {
							...b,
							variables: {
								...t,
								deleteTags: 0 !== t.deleteTagsInput.length,
								pageSize: 1050
							}
						}))(d(), {
							deleteTagsInput: [...p].map(t => ({
								tagId: t,
								subredditId: e
							})),
							updateTagStatesInput: {
								subredditId: e,
								suggestedTagStates: r,
								tagStates: t
							}
						}),
						m = f.body && f.body.data || null;
					f.ok && m && m.updateSubredditTagStates && m.updateSubredditTagStates.ok && m.updateSubredditTagStates.subreddit ? s(w(o({
						subredditInfoById: m.updateSubredditTagStates.subreddit
					}))) : s(A())
				}, H = (e, t, r = !1) => async (n, d, o) => {
					const a = d(),
						c = Object(S.q)(a, {
							subredditId: e
						}),
						u = Object(S.C)(a, {
							subredditId: e
						});
					let l = c.filter(e => !!e.id && !!e.action).map(e => ({
						tagId: e.id,
						state: e.action === _.a.ADD ? g.d.TAGGED : g.d.NONE
					}));
					if (u.length > 0) {
						const t = await $(e, u)(n, d, o);
						l = l.concat((t || []).map(e => ({
							tagId: e.id,
							state: g.d.TAGGED
						})))
					}
					await J(e, l)(n, d, o), Object(S.A)(d()) ? n(Object(i.f)(Object(i.e)(s.fbt._("Yikes! It looks like we didn't save all of your topics. Please try again", null, {
						hk: "2Jbh5V"
					}), j.b.Error, s.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), H(e, t, r)))) : r && n(Object(i.f)(Object(i.e)(s.fbt._("Community topics saved!", null, {
						hk: "3wtajT"
					}), j.b.SuccessCommunity)))
				}, z = (e, t, r) => async (r, n, d) => {
					const o = {
						state: g.d.TAGGED
					};
					if (Object(m.b)(t)) {
						const s = await $(e, [{
							text: t.displayText,
							type: g.c.CLASSIFICATION
						}])(r, n, d);
						s && 1 === s.length && (o.tagId = s[0].id)
					} else {
						if (!t.id) return void r(Object(i.f)(Object(i.e)(s.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
							hk: "CxjiK"
						}), j.b.Error)));
						o.tagId = t.id
					}(e => !!e.tagId && !!e.state)(o) ? await J(e, [], [o])(r, n, d): r(Object(i.f)(Object(i.e)(s.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
						hk: "CxjiK"
					}), j.b.Error)))
				}, V = (e, t, r) => async (s, n, d) => {
					t.id ? await J(e, [], [{
						state: g.d.NONE,
						tagId: t.id
					}])(s, n, d) : s(Q(e, r, !1))
				}, K = (e, t, r, n, d = !1) => async (o, c, {
					gqlContext: u
				}) => {
					if (!(await ((e, t) => Object(a.a)(e, {
							...p,
							variables: t
						}))(u(), {
							input: {
								tagStatesRelevance: t,
								suggestedTagStatesRelevance: r
							}
						})).ok) return o(Object(i.f)(Object(i.e)(s.fbt._("Whoops! Unable to update topics relevance status", null, {
						hk: "17akdT"
					}), j.b.Error, s.fbt._("Retry", null, {
						hk: "1wqK2v"
					}), K(e, t, r, n, d)))), void o(W(e));
					if (d)
						for (const e of r) O.f(c(), e, {
							context: n
						});
					o(Object(i.f)(Object(i.e)(s.fbt._("Successfully updated topics relevance!", null, {
						hk: "3KIYlz"
					}), j.b.SuccessCommunity, s.fbt._("Undo", null, {
						hk: "34apPL"
					}), K(e, t.map(e => ({
						...e,
						isRelevant: !e.isRelevant
					})), r.map(e => ({
						...e,
						isRelevant: !e.isRelevant
					})), n, d)))), o(W(e))
				}, Y = e => async (t, r) => {
					t(M({
						itemTagsState: {
							[e]: Object(S.o)(r(), {
								itemId: e
							})
						}
					}))
				}, X = (e, t, r = !0) => async (n, d, {
					gqlContext: o
				}) => {
					const c = Object(S.x)(d(), {
						subredditId: e
					});
					if ((null == c ? void 0 : c.id) === t.tagId && t.state === g.d.TAGGED) return;
					n(U());
					const u = await ((e, t) => Object(a.a)(e, {
							...f,
							variables: t
						}))(o(), {
							input: {
								subredditId: e,
								primaryTagState: t
							}
						}),
						l = u.body && u.body.data || null;
					u.ok && l && l.updateSubredditTagStates && l.updateSubredditTagStates.ok ? (n(G((e => {
						const {
							secondaryTags: t,
							id: r,
							primaryTag: s
						} = e.updateSubredditTagStates.subreddit, n = t && t.edges || [];
						return {
							subredditId: r,
							primaryTagId: s && s.tag.id || null,
							secondaryTags: n.reduce((e, {
								node: t
							}) => (e[t.tag.id] = t, e), {})
						}
					})(l))), r && n(Object(i.f)(Object(i.e)(s.fbt._("Successfully updated primary topic!", null, {
						hk: "1NL90v"
					}), j.b.SuccessCommunity)))) : (n(B()), n(Object(i.f)(Object(i.e)(s.fbt._("Whoops! Unable to update primary topic", null, {
						hk: "3ilZqp"
					}), j.b.Error, s.fbt._("Retry", null, {
						hk: "1dRYXW"
					}), X(e, t)))))
				}
		},
		"./src/reddit/constants/graphql.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Card = "CARD", e.Classic = "CLASSIC", e.Compact = "COMPACT"
				}(s || (s = {}))
		},
		"./src/reddit/endpoints/gold/powerups/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return O
			})), r.d(t, "j", (function() {
				return g
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "k", (function() {
				return x
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/CreateCustomEmoji.json"),
				d = r("./src/redditGQL/operations/DeleteCustomEmoji.json"),
				i = r("./src/redditGQL/operations/EnablePowerups.json"),
				o = r("./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json"),
				a = r("./src/redditGQL/operations/ReallocatePowerups.json"),
				c = r("./src/redditGQL/operations/RedditorPowerups.json"),
				u = r("./src/redditGQL/operations/SubredditPowerups.json"),
				l = r("./src/redditGQL/operations/SubredditPowerupsFull.json"),
				b = r("./src/redditGQL/operations/SubredditsPowerups.json"),
				p = r("./src/redditGQL/operations/UpdatePowerupsSettings.json"),
				f = r("./src/redditGQL/operations/UserPowerups.json"),
				m = r("./src/reddit/actions/economics/powerups/helpers.ts");
			const O = async (e, t) => {
				const r = await Object(s.a)(e, {
					...i,
					variables: {
						subredditId: t
					}
				});
				if (!r.ok || !r.body.data.enablePowerups.ok) {
					const {
						errors: e
					} = r.body, t = Object(m.a)(e);
					throw new Error(t || "Error enabling powerups for given subreddit")
				}
			}, g = e => Object(s.a)(e, f, {
				traceRequestName: "user_powerups"
			}), j = (e, t) => Object(s.a)(e, {
				variables: {
					id: t
				},
				...c
			}, {
				traceRequestName: "redditor_powerups"
			}), _ = (e, t, r) => Object(s.a)(e, {
				...u,
				variables: {
					subredditId: t,
					includeIdentity: r
				}
			}, {
				traceRequestName: "subreddit_powerups"
			}), S = (e, t, r) => Object(s.a)(e, {
				...l,
				variables: {
					subredditId: t,
					includeIdentity: r
				}
			}, {
				traceRequestName: "subreddit_powerups_full"
			}), I = async (e, t) => {
				const r = await Object(s.a)(e, {
					...b,
					variables: {
						subredditsIds: t
					}
				});
				if (!r.ok) {
					const {
						errors: e
					} = r.body, t = Object(m.a)(e);
					throw new Error(t || "Unable to fetch subreddit powerups")
				}
				return r.body.data.subredditsInfoByIds
			}, T = (e, t) => Object(s.a)(e, {
				...a,
				variables: t
			}), E = (e, t) => Object(s.a)(e, {
				...o,
				variables: t
			}), h = (e, t) => Object(s.a)(e, {
				...n,
				variables: t
			}), y = (e, t) => Object(s.a)(e, {
				...d,
				variables: t
			}), x = async (e, t, r) => {
				const n = {
					input: {
						subredditId: t,
						powerupsSettings: {
							benefitSettings: r
						}
					}
				};
				return Object(s.a)(e, {
					...p,
					variables: n
				})
			}
		},
		"./src/reddit/endpoints/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/TopAwardedPosts.json"),
				d = r("./src/redditGQL/operations/TopAwardersLeaderboard.json");
			const i = (e, t) => Object(s.a)(e, {
					...n,
					variables: {
						...t,
						includeListingMetadata: !!t.includeListingMetadata
					}
				}),
				o = (e, t) => Object(s.a)(e, {
					...d,
					variables: t
				})
		},
		"./src/reddit/endpoints/governance/posts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/config.ts"),
				n = (r("./src/reddit/models/Poll/index.ts"), r("./src/reddit/endpoints/governance/requester.ts"));

			function d(e, t, r) {
				return Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/polls/${t}?postIds=${r.join(",")}`
				})
			}
		},
		"./src/reddit/endpoints/governance/requester.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/lib/makeApiRequest/index.ts");

			function n(e, t) {
				return Object(s.a)(e, {
					type: "json",
					...t
				}).then(e => {
					if (e.ok) return {
						body: e.body,
						ok: !0,
						status: e.status
					};
					return {
						error: e.error && e.error.fields && e.error.fields[0] ? e.error.fields[0].msg : {
							...e.body,
							code: e.status
						},
						ok: !1,
						status: e.status
					}
				})
			}
		},
		"./src/reddit/endpoints/messages/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			}));
			var s = r("./src/redditGQL/operations/ReportMessage.json"),
				n = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t) => Object(d.a)(Object(o.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/compose`),
					method: n.ib.POST,
					data: t
				}),
				l = (e, t) => Object(i.a)(e, {
					...s,
					variables: t
				})
		},
		"./src/reddit/endpoints/modQueue/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				c = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const u = (e, t, r) => Object(d.a)(e, {
					endpoint: Object(c.a)(Object(a.a)(`${s.a.gatewayUrl}/desktopapi/v1/${t}`)),
					method: n.ib.GET,
					data: {
						moderated_limit: 25,
						...r
					}
				}),
				l = (e, t, r) => Object(d.a)(Object(i.a)(e, [o.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/${t}`,
					method: n.ib.POST,
					type: "json",
					data: r
				})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts");
			t.a = async e => Object(n.a)(Object(d.a)(e, [i.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: s.ib.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/page/subredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return S
			})), r.d(t, "b", (function() {
				return I
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/isAdHocMultireddit/index.ts"),
				i = r("./src/lib/isFakeSubreddit/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/lib/performanceTimings/index.tsx"),
				u = r("./src/reddit/constants/graphql.ts"),
				l = r("./src/reddit/constants/page.ts"),
				b = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = r("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts"),
				m = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				O = r("./src/reddit/models/Subreddit/index.ts"),
				g = r("./src/reddit/selectors/platform.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/redditGQL/operations/SubredditPage.json");
			const S = (e, t, r) => {
					const {
						after: s,
						geo_filter: n,
						isMobile: o,
						layout: a,
						limit: c,
						recentPostIds: b,
						sort: f,
						t: m
					} = r, O = Object(j.T)(e), _ = Object(g.p)(e), S = Object(d.a)(t), I = Object(i.a)(t), T = {
						name: t,
						includeIdentity: O && !e.user.account,
						adContext: {
							layout: a ? a.toUpperCase() : u.a.Card,
							reddaid: e.user.reddaid
						},
						isFake: I,
						includeRecents: I && b && b.length > 0 || !1,
						includeTrending: I,
						isAdHocMulti: S,
						isAll: t === l.d.All,
						isPopular: t === l.d.Popular,
						recentPostIds: b || [],
						subredditNames: S ? t.split("+") : []
					};
					return f && (T.sort = f.toUpperCase()), m && (T.range = m.toUpperCase()), o ? T.pageSize = Object(p.a)(a) : c && (T.pageSize = c), _ && _.ad && (T.forceAds = {
						ad: _.ad
					}), (_ && _.geo_filter || n) && (T.region = _ && _.geo_filter || n), s && (T.after = btoa(s)), T
				},
				I = async (e, t, r) => {
					const s = Date.now(),
						d = await ((e, t) => Object(a.a)(e, {
							..._,
							variables: t
						}))(e, t),
						i = Date.now();
					if (!d.ok || !d.body) return d;
					const o = d.body,
						u = Date.now(),
						l = Object(f.a)(o.data),
						b = Date.now(),
						p = [{
							duration: i - s,
							logKeyType: c.a.gqlFetchTiming
						}, {
							duration: b - u,
							logKeyType: c.a.gqlNormalizationTiming
						}];
					return Object(c.h)({
						name: n.r.SUBREDDIT,
						isLoggedIn: r,
						metrics: p
					}), {
						...d,
						ok: !!o.data.subredditInfoByName && !Object(O.j)(o.data.subredditInfoByName),
						status: T(o.data),
						body: l
					}
				}, T = e => {
					if (!e.subredditInfoByName) return 404;
					if (Object(O.j)(e.subredditInfoByName)) {
						if (e.subredditInfoByName.forbiddenReason === O.c.Banned) return 404;
						if (e.subredditInfoByName.forbiddenReason === O.c.GoldOnly || e.subredditInfoByName.forbiddenReason === O.c.Private || e.subredditInfoByName.forbiddenReason === O.c.Quarantined) return 403
					}
					return 200
				}, E = ({
					recentPostIds: e,
					...t
				}) => e && e.length ? {
					...t,
					recentPostIds: e.join(",")
				} : t;
			t.a = (e, t, r) => Object(o.a)(e, {
				endpoint: Object(b.a)(Object(m.a)(`${s.a.gatewayUrl}/desktopapi/v1/subreddits/${t}`)),
				method: n.ib.GET,
				data: r && E(r) || {},
				traceRequestName: "get_subreddit_page"
			})
		},
		"./src/reddit/endpoints/publicAccessNetwork/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return S
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "i", (function() {
				return D
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "a", (function() {
				return N
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/omit.js"),
				d = r.n(n),
				i = r("./src/config.ts"),
				o = r("./src/lib/addQueryParams/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/constants/headers.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/lib/makeRequest/index.ts"),
				b = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				p = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = r("./src/reddit/featureFlags/useProductionStreamingApi.ts"),
				m = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				O = r("./src/reddit/models/PostCreationForm/index.ts"),
				g = r("./src/reddit/models/Vote/index.ts"),
				j = r("./src/redditGQL/operations/LiveVideoPosts.json");

			function _() {
				return Object(f.b)() ? "https://strapi.reddit.com" : i.a.streamingApiUrl
			}
			const S = async (e, t) => {
				let r;
				return r = t === b.R ? "/config" : `/${t}/config`, Object(l.b)({
					endpoint: `${_()}${r}`,
					method: a.ib.GET,
					headers: d()(e.headers(), [c.c, c.b]),
					timeoutMs: void 0
				}).then(A)
			}, I = (e, {
				subredditId: t,
				options: r
			}) => Object(u.a)(e, {
				...j,
				variables: {
					feedContext: {
						subredditId: t
					},
					first: null == r ? void 0 : r.pageSize,
					after: null == r ? void 0 : r.cursor
				}
			}), T = async (e, t) => Object(l.b)({
				endpoint: `${_()}/videos/${t}`,
				method: a.ib.GET,
				headers: d()(e.headers(), [c.c, c.b])
			}).then(A), E = async (e, t, r) => {
				let s;
				s = t === b.R ? "/broadcasts" : `/${t}/broadcasts`;
				const n = Object(o.a)(s, {
					cursor: null == r ? void 0 : r.cursor,
					page_size: null == r ? void 0 : r.pageSize
				});
				return Object(l.b)({
					endpoint: `${_()}${n}`,
					method: a.ib.GET,
					headers: d()(e.headers(), [c.c, c.b])
				}).then(A)
			}, h = async e => Object(l.b)({
				endpoint: `${_()}/recommended_viewer_subreddits`,
				method: a.ib.GET,
				headers: d()(e.headers(), [c.c, c.b])
			}).then(A), y = async (e, t, r) => Object(l.b)({
				endpoint: `${_()}/videos/${t}/vote/${C(r)}`,
				method: a.ib.POST,
				headers: d()(e.headers, [c.c, c.b])
			}).then(A), x = async (e, t) => Object(l.b)({
				endpoint: `${_()}/videos/${t}/heartbeat`,
				method: a.ib.POST,
				headers: d()(e.headers(), [c.c, c.b])
			}).then(A), D = async (e, t, r, s) => {
				const n = r.rteState;
				if (!n) return Promise.reject(new Error("Editor state is undefined"));
				const d = p.a.getRawText(n);
				return d ? v(e, t, d).then(e => e.ok && e.body && e.body.data ? {
					...e,
					body: {
						parentId: t,
						comment: {
							...Object(m.a)(e.body.data.r2_comment, s),
							media: w(n)
						},
						automuteLevel: e.body.data.auto_mute_status.level
					},
					error: void 0
				} : e) : Promise.reject(new Error("Cannot send empty message"))
			}, v = async (e, t, r) => Object(l.b)({
				endpoint: `${_()}/broadcasts/${t}/comment_v2`,
				method: a.ib.POST,
				headers: d()(e.headers, [c.c, c.b]),
				data: {
					text: r
				},
				type: "json"
			}).then(A), w = e => ({
				type: "rtjson",
				richtextContent: {
					document: p.a.toRichTextJSON(e).document
				},
				rteMode: O.i.RICH_TEXT
			}), A = e => {
				if (e.ok) return {
					...e,
					error: void 0
				}; {
					const t = {
						type: 404 === e.status ? a.H.NOT_FOUND_ERROR : a.H.SERVER_ERROR
					};
					return 429 === e.status && (t.fields = [{
						field: "",
						msg: s.fbt._("Try again later", null, {
							hk: "3BBLIU"
						})
					}]), {
						...e,
						error: t
					}
				}
			}, C = e => e === g.a.upvoted ? "up" : e === g.a.downvoted ? "down" : "unset", k = async (e, t, r) => Object(l.b)({
				endpoint: `${_()}/broadcasts/${t}`,
				method: a.ib.PUT,
				headers: d()(e.headers, [c.c, c.b]),
				data: {
					data: {
						chat_disabled: r
					}
				},
				type: "json"
			}).then(A), N = async (e, t) => Object(l.b)({
				endpoint: `${_()}/broadcasts/${t}/auto_mute_status`,
				method: a.ib.GET,
				headers: d()(e.headers, [c.c, c.b])
			}).then(A)
		},
		"./src/reddit/endpoints/subreddit/about.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/SubredditAbout.json");
			t.a = (e, t, r) => Object(s.a)(e, {
				...n,
				variables: {
					subredditName: t,
					includeSubreddit: r
				}
			})
		},
		"./src/reddit/endpoints/subreddit/notificationSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/redditGQL/operations/FetchSubredditsNotificationSettings.json"),
				n = r("./src/redditGQL/operations/UpdateSubredditNotificationSettings.json"),
				d = r("./src/lib/makeGqlRequest/index.ts");
			const i = (e, t) => Object(d.a)(e, {
					...s,
					variables: {
						subredditIds: [t]
					}
				}),
				o = (e, t, r) => Object(d.a)(e, {
					...n,
					variables: {
						input: {
							...r,
							subredditId: t
						}
					}
				})
		},
		"./src/reddit/endpoints/subreddit/rules.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "e", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/camelCase.js"),
				n = r.n(s),
				d = r("./node_modules/lodash/mapKeys.js"),
				i = r.n(d),
				o = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/redditGQL/operations/SubredditRules.json"),
				b = r("./src/reddit/constants/headers.ts"),
				p = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				f = r("./src/reddit/models/Rule/index.ts");
			const m = ({
					rules: e
				}) => ({
					rules: e.map(e => ({
						...i()(e, (e, t) => n()(t)),
						kind: "link" === e.kind ? "post" : e.kind
					}))
				}),
				O = (e, t) => Object(c.a)(e, {
					...l,
					variables: {
						subredditName: t
					}
				}).then(e => {
					var t, r, s;
					return e.ok && e.body && (e => Object.keys(e).length > 0)(e.body) && (null === (s = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit) || void 0 === s ? void 0 : s.rules) ? e.body = Object(p.a)(e.body.data.subreddit.rules) : e.body = {
						rules: []
					}, e
				}),
				g = (e, t) => Object(a.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/user/${t}/about/rules.json`,
					method: o.ib.GET
				}).then(e => (e.ok && e.body.rules && (e.body = m(e.body)), e)),
				j = e => e.ok ? (e.body = Object(f.h)(JSON.parse(e.body.json.data.rules)), e) : e.body,
				_ = async (e, t, r) => Object(a.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/add_subreddit_rule`,
					method: o.ib.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === f.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), S = async (e, t, r, s) => Object(a.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/update_subreddit_rule`,
					method: o.ib.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === f.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						old_short_name: s,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), I = async (e, t, r) => Object(a.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/remove_subreddit_rule`,
					method: o.ib.POST,
					data: {
						r: t,
						short_name: r,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), T = e => e.map(e => encodeURIComponent(e)).join(), E = async (e, t, r) => Object(a.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/reorder_subreddit_rules`,
					method: o.ib.POST,
					data: {
						r: t,
						new_rule_order: T(r),
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e))
		},
		"./src/reddit/helpers/filterListingResponse/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/findLastIndex.js"),
				n = r.n(s),
				d = r("./src/reddit/models/WhitelistStatus/index.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/index.ts");
			const a = (e, {
				subreddits: t,
				profiles: r
			}) => {
				const s = t[e.belongsTo.id] || r[e.belongsTo.id];
				return !e.isNSFW && s && d.a.has(s.wls || d.b.NO_ADS)
			};
			t.a = (e, t, {
				postIds: r,
				posts: s,
				subreddits: d,
				profiles: c,
				...u
			}) => {
				const l = e.listings.postOrder.ids[t],
					b = (r || []).filter(e => !l || !l.includes(e)),
					p = l.map(t => e.posts.models[t]),
					f = p.length - (n()(p, e => e.isSponsored) + 1),
					m = b.map(e => s[e]);
				let O;
				const g = [],
					j = {
						subreddits: d,
						profiles: c
					};
				for (let n = 0; n < m.length; n++) {
					const r = m[n];
					let s = !1;
					if (r.isSponsored) {
						const e = n > 0 && m[n - 1],
							t = n < m.length - 1 && m[n + 1];
						e && a(e, j) && t && a(t, j) && (s = !0)
					}
					r.isSponsored && s && (null == O && f + n >= 3 || n - O >= 3) ? (O = n, g.push(r.id)) : r.isSponsored ? r.isSponsored && Object(o.a)({
						source: "feed",
						action: "remove",
						noun: "ad",
						...i.defaults(e),
						listing: i.listing(e, t)
					}) : g.push(r.id)
				}
				return {
					...u,
					subreddits: d,
					profiles: c,
					posts: s,
					postIds: g
				}
			}
		},
		"./src/reddit/helpers/getPostLimitForMobile/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/reddit/constants/postLayout.ts");

			function n(e) {
				return e ? s.c[e] : s.f
			}
		},
		"./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/models/Flair/index.ts");

			function n(e) {
				switch (e) {
					case s.h.LEFT:
						return s.b.Left;
					case s.h.RIGHT:
						return s.b.Right;
					default:
						return null
				}
			}

			function d({
				isEnabled: e = !1,
				position: t
			}) {
				return {
					isEnabled: e,
					position: n(t)
				}
			}
			t.a = ({
				postFlairSettings: e
			}) => ({
				...e && {
					displaySettings: e && d(e)
				}
			})
		},
		"./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return B
			}));
			var s = r("./src/lib/assertNever.ts"),
				n = r("./src/lib/env/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/models/Post/index.ts"),
				o = r("./src/reddit/models/RichTextJson/index.ts"),
				a = r("./src/reddit/models/Subreddit/index.ts"),
				c = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				b = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeSubredditModPermissions/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				S = r("./src/reddit/models/Flair/index.ts"),
				I = r("./src/reddit/models/Widgets/index.ts"),
				T = e => {
					const {
						rules: t,
						widgets: r,
						name: s
					} = e;
					if (!r) return null;
					const n = {
							items: {},
							layout: {
								topbar: {
									order: []
								},
								sidebar: {
									order: []
								},
								moderatorWidget: "",
								idCardWidget: ""
							}
						},
						{
							orderedSidebarWidgets: d,
							orderedTopbarWidgets: i
						} = r;
					for (const o of i) {
						if (o.__typename !== I.d.Menu) break;
						n.items[o.id] = E(o), n.layout.topbar.order.push(o.id)
					}
					for (const o of d) switch (o.__typename !== I.c.IdCard && o.__typename !== I.c.Moderators && n.layout.sidebar.order.push(o.id), o.__typename) {
						case I.c.Button:
							n.items[o.id] = h(o);
							break;
						case I.c.Calendar:
							n.items[o.id] = y(o);
							break;
						case I.c.CommunityList:
							n.items[o.id] = x(o);
							break;
						case I.c.Custom:
							n.items[o.id] = D(o);
							break;
						case I.c.IdCard:
							n.items[o.id] = v(o), n.layout.idCardWidget = o.id;
							break;
						case I.c.Image:
							n.items[o.id] = w(o);
							break;
						case I.c.Moderators:
							n.items[o.id] = A(o), n.layout.moderatorWidget = o.id;
							break;
						case I.c.PostFlair:
							n.items[o.id] = N(o);
							break;
						case I.c.SubredditRules:
							n.items[o.id] = R({
								widget: o,
								rules: t,
								name: s
							});
							break;
						case I.c.TextArea:
							n.items[o.id] = L(o)
					}
					return n
				};
			const E = e => ({
					...P(e),
					kind: I.j.Menu,
					showWiki: e.isWikiShown,
					data: e.menus
				}),
				h = e => ({
					...P(e),
					kind: I.i.Button,
					shortName: e.shortName,
					description: e.description.markdown,
					descriptionHtml: null,
					buttons: e.buttons.map(e => {
						var t, r, s, n, d, i, o;
						return {
							text: e.text,
							hoverState: e.hoverState.kind === I.e.Image ? {
								kind: I.k.Image,
								url: (null === (t = e.hoverState.media.source) || void 0 === t ? void 0 : t.url) || "",
								height: (null === (r = e.hoverState.media.source) || void 0 === r ? void 0 : r.dimensions.height) || 0,
								width: (null === (s = e.hoverState.media.source) || void 0 === s ? void 0 : s.dimensions.width) || 0
							} : {
								kind: I.k.Text,
								text: e.hoverState.text,
								color: e.hoverState.color,
								fillColor: e.hoverState.fillColor,
								textColor: e.hoverState.textColor
							},
							...e.kind === I.e.Image ? {
								kind: I.k.Image,
								linkUrl: e.media.linkUrl,
								url: (null === (n = e.media.source) || void 0 === n ? void 0 : n.url) || "",
								height: (null === (d = e.media.source) || void 0 === d ? void 0 : d.dimensions.height) || 0,
								width: (null === (i = e.media.source) || void 0 === i ? void 0 : i.dimensions.width) || 0
							} : {
								kind: I.k.Text,
								url: (null === (o = e.media.source) || void 0 === o ? void 0 : o.url) || "",
								color: e.color,
								fillColor: e.fillColor,
								textColor: e.textColor
							}
						}
					})
				}),
				y = e => ({
					...P(e),
					kind: I.i.Calendar,
					shortName: e.shortName,
					configuration: {
						numEvents: e.eventsCount,
						showDate: e.isDateShown,
						showDescription: e.isDescriptionShown,
						showLocation: e.isLocationShown,
						showTime: e.isTimeShown
					},
					configuredAtUTC: null,
					data: e.events.map(e => ({
						allDay: e.isAllDay,
						description: e.description.markdown,
						endTime: e.endsAt,
						location: e.location.markdown,
						startTime: e.startsAt,
						title: e.title.markdown
					})),
					googleCalendarId: e.googleCalendarId,
					moderator: null,
					requiresSync: e.isSyncRequired,
					synchronizedAtUTC: null
				}),
				x = e => ({
					...P(e),
					kind: I.i.CommunityList,
					shortName: e.shortName,
					data: e.communities.map(e => ({
						name: e.name,
						type: "subreddit",
						id: e.id,
						bannerBackgroundColor: e.styles.bannerBackgroundColor,
						bannerBackgroundImage: e.styles.bannerBackgroundImage,
						communityIcon: e.styles.icon,
						description: e.publicDescriptionText,
						displayText: e.name,
						subscribers: e.subscribersCount,
						iconUrl: e.styles.icon,
						isSubscribed: e.isSubscribed,
						primaryColor: e.styles.primaryColor,
						isNSFW: e.isNsfw
					}))
				}),
				D = e => ({
					...P(e),
					kind: I.i.Custom,
					shortName: e.shortName,
					text: e.text.markdown,
					css: e.css,
					stylesheetUrl: e.stylesheetUrl,
					height: e.height,
					imageData: e.imageData.map(e => {
						var t, r, s;
						return {
							name: e.name || "",
							url: (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
							height: (null === (r = e.source) || void 0 === r ? void 0 : r.dimensions.height) || 0,
							width: (null === (s = e.source) || void 0 === s ? void 0 : s.dimensions.width) || 0
						}
					})
				}),
				v = e => ({
					...P(e),
					kind: I.i.IdCard,
					shortName: e.shortName,
					currentlyViewingCount: e.currentlyViewingCount,
					currentlyViewingText: e.currentlyViewingText,
					description: e.descriptionText,
					subscribersCount: e.subscribersCount,
					subscribersText: e.subscribersText
				}),
				w = e => ({
					...P(e),
					kind: I.i.Image,
					shortName: e.shortName,
					data: e.data.map(e => {
						var t, r, s;
						return {
							linkUrl: e.linkUrl,
							url: (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
							height: (null === (r = e.source) || void 0 === r ? void 0 : r.dimensions.height) || 0,
							width: (null === (s = e.source) || void 0 === s ? void 0 : s.dimensions.width) || 0
						}
					})
				}),
				A = e => ({
					...P(e),
					kind: I.i.Moderators,
					mods: e.moderators.map(e => ({
						name: e.redditor.name,
						...e.flair ? {
							authorFlairBackgroundColor: e.flair.template.backgroundColor,
							authorFlairRichText: JSON.parse(e.flair.richtext),
							authorFlairText: e.flair.text,
							authorFlairTextColor: e.flair.textColor === S.i.Light ? S.e.Light : S.e.Dark,
							authorFlairType: e.flair.type
						} : {
							authorFlairBackgroundColor: "",
							authorFlairRichText: [],
							authorFlairText: "",
							authorFlairTextColor: S.e.Dark,
							authorFlairType: S.f.Text
						}
					}))
				}),
				C = e => {
					switch (e) {
						case S.g.All:
							return S.a.All;
						case S.g.Text:
							return S.a.Text;
						case S.g.Emoji:
							return S.a.Emoji
					}
				},
				k = e => e === S.i.Light ? S.e.Light : S.e.Dark,
				N = e => ({
					...P(e),
					kind: I.i.PostFlair,
					shortName: e.shortName,
					order: e.templates.map(e => e.id || ""),
					display: e.display,
					templates: e.templates.reduce((e, t) => t.id ? (e[t.id] = {
						allowableContent: C(t.allowableContent),
						backgroundColor: t.backgroundColor,
						cssClass: t.cssClass,
						id: t.id,
						maxEmojis: t.maxEmojis,
						modOnly: t.isModOnly,
						richtext: t.richtext ? JSON.parse(t.richtext) : [],
						text: t.text,
						textColor: k(t.textColor),
						textEditable: t.isEditable,
						type: t.type
					}, e) : e, {})
				}),
				R = ({
					widget: e,
					rules: t,
					name: r
				}) => ({
					...P(e),
					kind: I.i.SubredditRules,
					shortName: e.shortName,
					display: e.display,
					subreddit: r,
					data: t ? Object(_.a)(t).rules : []
				}),
				L = e => ({
					...P(e),
					kind: I.i.Textarea,
					shortName: e.shortName,
					text: e.text.markdown
				}),
				P = e => ({
					id: e.id,
					styles: e.styles
				});
			var U = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				G = r("./src/reddit/helpers/graphql/helpers.ts");
			const B = (e, t, r) => {
				const o = {
						account: null,
						authorFlair: {},
						postIds: [],
						postInstances: {},
						posts: {},
						postFlair: {},
						preferences: null,
						profiles: {},
						recentPostIds: [],
						structuredStyles: {},
						subredditAboutInfo: {},
						subredditPermissions: {},
						subreddits: {},
						token: "",
						trendingSubredditIds: [],
						welcomeMessage: void 0
					},
					a = e => {
						if (Object(i.j)(e) || Object(i.i)(e)) return null;
						if (o.posts[e.id]) return e.id;
						const t = Object(b.e)(e);
						o.posts[t.id] = t;
						const {
							crosspostRoot: r
						} = e;
						r && r.type === i.a.Post && r.postInfo && a(r.postInfo);
						let l = t.id;
						if (e.authorFlair && (o.authorFlair[t.belongsTo.id] || (o.authorFlair[t.belongsTo.id] = {}), o.authorFlair[t.belongsTo.id][t.author] = Object(c.a)(e.authorFlair)[0]), Object(i.l)(e)) o.profiles[e.profile.id] || (o.profiles[e.profile.id] = Object(f.a)(e.profile));
						else if (Object(i.m)(e)) o.subreddits[e.subreddit.id] || (o.subreddits[e.subreddit.id] = Object(O.a)(e.subreddit)), o.postFlair[e.subreddit.id] || (o.postFlair[e.subreddit.id] = Object(u.a)(e.subreddit));
						else if (Object(i.h)(e)) {
							const r = Object(b.b)(e);
							if (!r) return null;
							l = r, o.posts[r] = {
								...t,
								id: r,
								permalink: `${t.permalink}?instanceId=${encodeURIComponent(r)}`
							}, o.posts[t.id] || (o.posts[t.id] = {
								...t,
								events: []
							}), o.postInstances[e.id] || (o.postInstances[e.id] = []), o.postInstances[e.id].push(r)
						} else try {
							Object(s.a)(e)
						} catch (p) {
							const t = `Received unhandled element type when processing subreddit posts: "${e.__typename}"`;
							Object(n.b)() || console.warn(t), d.c.captureMessage(t)
						}
						return l && o.postIds.push(l), l
					};
				if (e.forEach(e => a(e)), t) {
					o.trendingSubredditIds = t.map(e => e.id);
					for (const e of t) o.subreddits[e.id] = Object(O.a)(e)
				}
				const l = o.postIds.length - 1;
				return o.token = l >= 0 ? o.postIds[l] : "", r && (o.account = Object(U.a)(r), o.preferences = r.preferences && Object(p.a)(r.preferences, r.interactions) || null), o
			};
			t.a = ({
				adhocMultiredditByNames: e,
				all: t,
				identity: r,
				popular: s,
				recentPosts: c,
				subredditInfoByName: u,
				trendingSubreddits: b
			}) => {
				if (!u) return {
					reason: a.e.NotFoundSubreddit,
					data: {
						account: r && Object(U.a)(r) || null
					}
				};
				if (Object(a.j)(u)) {
					const {
						banMessage: e,
						publicDescriptionText: t,
						quarantineMessage: s,
						isEmailRequiredForQuarantineOptin: n
					} = u;
					return {
						reason: q(u.forbiddenReason),
						data: {
							account: r && Object(U.a)(r) || null,
							banMessage: e || void 0,
							description: t,
							quarantineRequiresEmailOptin: n,
							...s ? {
								quarantineMessage: s.markdown,
								quarantineMessageRTJson: Object(G.f)(s.richtext, o.i)
							} : {}
						}
					}
				}
				const p = {},
					f = u || s || t || e,
					[O, _] = f.elements.edges.reduce((e, t) => {
						var r, s, n, d, o, a, c, u;
						const [b, f] = e, m = t.node;
						return Object(i.k)(m) ? (b.push(m), (null === (s = null === (r = null == m ? void 0 : m.flair) || void 0 === r ? void 0 : r.template) || void 0 === s ? void 0 : s.postStyle) && "string" == typeof(null === (d = null === (n = null == m ? void 0 : m.flair) || void 0 === n ? void 0 : n.template) || void 0 === d ? void 0 : d.postStyle) && (null === (a = null === (o = null == m ? void 0 : m.flair) || void 0 === o ? void 0 : o.template) || void 0 === a ? void 0 : a.id) && "string" == typeof(null === (u = null === (c = null == m ? void 0 : m.flair) || void 0 === c ? void 0 : c.template) || void 0 === u ? void 0 : u.id) && (p[m.flair.template.id] = Object(l.a)(m.flair.template.postStyle))) : f.push(m), [b, f]
					}, [
						[],
						[]
					]);
				if (_.length) {
					const e = `Received unhandled ${_.length} elements when processing subreddit data: "${_[0].__typename}"`;
					Object(n.b)() || console.warn(e), d.c.captureMessage(e)
				}
				c && O.push(...c);
				const S = f.elements.dist,
					I = B(O, b, r);
				return u && u.styles && (I.structuredStyles = {
					data: {
						style: Object(j.a)(u.styles)
					}
				}), u && (I.structuredStyles = {
					data: {
						...u.styles ? {
							style: Object(j.a)(u.styles)
						} : {},
						content: {
							...u.widgets ? {
								widgets: T(u)
							} : {}
						},
						flairTemplate: p
					}
				}), u && (I.subredditAboutInfo = Object(m.a)(u), u.modPermissions && (I.subredditPermissions = Object(g.a)(u.modPermissions)), u.welcomeMessage && (I.welcomeMessage = u.welcomeMessage)), {
					...I,
					...null !== S && {
						dist: S
					}
				}
			};
			const q = e => {
				switch (e) {
					case a.c.Banned:
						return a.e.BannedSubreddit;
					case a.c.GoldOnly:
						return a.e.GoldSubreddit;
					case a.c.Private:
						return a.e.PrivateSubreddit;
					case a.c.Quarantined:
						return a.e.QuarantinedSubreddit;
					case a.c.Unknown:
						return a.e.ForbiddenSubreddit
				}
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/helpers/graphql/helpers.ts"),
				n = r("./src/reddit/models/Rule/index.ts");
			t.a = e => ({
				rules: e.map(e => ({
					kind: n.c[e.kind],
					description: e.content.markdown,
					descriptionRichText: e.content.richtext,
					shortName: e.name,
					violationReason: e.violationReason || "",
					createdUtc: Object(s.e)(e.createdAt, s.a.Millis),
					priority: e.priority
				}))
			})
		},
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/helpers/isComment.ts"),
				d = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				i = r("./src/reddit/models/Vote/index.ts"),
				o = e => !0 === e ? i.a.upvoted : !1 === e ? i.a.downvoted : i.a.notVoted,
				a = r("./src/reddit/models/Comment/index.ts");
			t.a = (e, t) => {
				const r = {
					approvedAtUTC: e.approved_at_utc,
					approvedBy: e.approved_by,
					author: e.author,
					authorId: e.author_fullname,
					bannedAtUTC: e.banned_at_utc,
					bannedBy: e.banned_by,
					body: e.body_html,
					bodyMD: e.body,
					collapsed: e.collapsed,
					collapsedReason: e.collapsed_reason,
					collapsedReasonCode: e.collapsed_reason_code,
					collapsedBecauseCrowdControl: e.collapsed_because_crowd_control,
					commentType: e.comment_type,
					created: e.created_utc,
					deletedBy: u(e),
					distinguishType: e.distinguished || "",
					editedAt: null,
					id: e.name,
					ignoreReports: e.ignore_reports,
					isAdmin: "admin" === e.distinguished,
					isAuthorPremium: !!e.author_premium,
					isApproved: e.approved,
					isDeleted: e.author === s.D,
					isGildable: e.can_gild,
					isLocked: e.locked,
					isMod: "moderator" === e.distinguished,
					isOp: e.is_submitter,
					isRemoved: e.removed,
					isScoreHidden: e.score_hidden,
					isSpam: e.spam,
					isStickied: e.stickied,
					isSaved: e.isSaved,
					isSystem: !1,
					subredditId: e.subreddit_id,
					markdown: e.body,
					media: {
						mediaMetadata: e.media_metadata,
						type: "rtjson",
						richtextContent: c(e.rtjson),
						rteMode: e.rte_mode
					},
					modReports: e.mod_reports,
					modReportsDismissed: e.mod_reports_dismissed,
					numReports: e.num_reports,
					parentId: Object(n.a)(e.parent_id) ? e.parent_id : null,
					permalink: e.permalink,
					postAuthor: e.link_author || null,
					postId: e.link_id,
					postTitle: e.link_title || null,
					sendReplies: e.send_replies,
					score: e.score,
					treatmentTags: e.treatment_tags,
					userReports: e.user_reports,
					userReportsDismissed: e.user_reports_dismissed,
					voteState: o(e.likes)
				};
				return e.all_awardings && (r.allAwardings = Object(d.a)(e.all_awardings)), e.awarders && (r.awarders = e.awarders), e.associated_award && (r.associatedAwardId = e.associated_award.id, r.associatedAward = Object(d.b)(e.associated_award)), r
			};
			const c = e => "string" == typeof e ? JSON.parse(e) : e,
				u = e => e.author !== s.D ? null : e.body === s.E ? a.c.User : e.body === s.Ib ? a.c.Moderator : null
		},
		"./src/reddit/helpers/tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			}));
			var s = r("./node_modules/lodash/values.js"),
				n = r.n(s);
			const d = e => n()(e).sort((t, r) => {
					const s = e[t.tag.id].tag.text.toLowerCase(),
						n = e[r.tag.id].tag.text.toLowerCase();
					return s < n ? -1 : s > n ? 1 : 0
				}),
				i = e => !e.id && !!e.action
		},
		"./src/reddit/helpers/trackers/communityTopics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "g", (function() {
				return j
			}));
			var s, n = r("./src/reddit/selectors/tags.ts"),
				d = r("./src/reddit/selectors/telemetry.ts"),
				i = r("./src/telemetry/index.ts");
			! function(e) {
				e.communitySettings = "community_settings", e.idCard = "id_card"
			}(s || (s = {}));
			const o = (e, t, r) => {
					const s = Object(n.x)(e, {
						subredditId: t
					});
					return !!s && s.id === r
				},
				a = (e, t) => Object(n.u)(e, {
					itemId: t
				}).reduce(({
					topicTagIds: e,
					topicTagContents: t,
					topicTagTypes: r
				}, s) => (e.push(s.tag.id), t.push(s.tag.text), r.push(s.tag.type), {
					topicTagIds: e,
					topicTagContents: t,
					topicTagTypes: r
				}), {
					topicTagIds: [],
					topicTagContents: [],
					topicTagTypes: []
				}),
				c = (e, t, r) => {
					if (!r.id) return {
						content: r.displayText
					};
					const s = Object(n.b)(e)[r.id] || Object(n.d)(e, {
						subredditId: t
					})[r.id];
					return s ? {
						id: s.id,
						content: s.text,
						type: s.type,
						isPrimary: o(e, t, s.id)
					} : null
				},
				u = (e, t, r) => {
					if (!r) return null;
					const s = Object(n.b)(e)[r] || Object(n.d)(e, {
						subredditId: t
					})[r];
					return s ? {
						id: s.id,
						content: s.text,
						type: s.type,
						isPrimary: o(e, t, s.id)
					} : null
				},
				l = (e, t, r) => ({
					...d.defaults(e),
					subreddit: {
						...d.subreddit(e) || {},
						id: t,
						...a(e, t)
					},
					source: r.context,
					action: "click"
				}),
				b = (e, t, r) => {
					Object(i.a)(((e, t, r) => ({
						...l(e, t.subredditId, r),
						noun: t.isRelevant ? "restore_related_topic" : "remove_related_topic",
						topicTag: u(e, t.subredditId, t.tagId)
					}))(e, t, r))
				},
				p = (e, t, r, s) => {
					Object(i.a)({
						...l(e, t, s),
						topicTag: c(e, t, r),
						noun: "add_related_topic"
					})
				},
				f = (e, t, r, s) => {
					return !Object(n.i)(e, {
						subredditId: t
					}) && r.id ? Object(i.a)(((e, t, r, s) => ({
						...l(e, t, s),
						topicTag: c(e, t, r),
						noun: "topic_auto_suggest"
					}))(e, t, r, s)) : r.id ? Object(i.a)(((e, t, r, s) => ({
						...l(e, t, s),
						topicTag: c(e, t, r),
						noun: "topic_auto_complete"
					}))(e, t, r, s)) : Object(i.a)(((e, t, r, s) => ({
						...l(e, t, s),
						topicTag: c(e, t, r),
						noun: "topic_add_new"
					}))(e, t, r, s))
				},
				m = (e, t, r, s) => Object(i.a)({
					...l(e, t, s),
					topicTag: c(e, t, r),
					noun: "topic_remove"
				}),
				O = (e, t, r) => Object(i.a)({
					...l(e, t, r),
					noun: "topic_tag_field"
				}),
				g = (e, t, r) => Object(i.a)({
					...l(e, t, r),
					noun: r.context === s.communitySettings ? "save" : "save_community_topics"
				}),
				j = (e, t, r, s) => {
					const n = l(e, t, s);
					Object(i.a)({
						...n,
						action: "view",
						noun: "error",
						actionInfo: {
							...n.actionInfo,
							reason: r
						}
					})
				}
		},
		"./src/reddit/helpers/trackers/inlineSubredditEditing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			}));
			var s, n = r("./src/reddit/constants/tracking.ts"),
				d = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.SubredditInlineTooltip = "subreddit_inline_tooltip", e.EditSubredditIcon = "edit_subreddit_icon", e.EditSubredditDescription = "edit_subreddit_description", e.SaveDescription = "save_description", e.Error = "error"
			}(s || (s = {}));
			const i = e => ({
					subreddit: d.subreddit(e),
					userSubreddit: d.userSubreddit(e)
				}),
				o = e => ({
					source: "subreddit_tooltip",
					noun: s.SubredditInlineTooltip,
					action: n.c.VIEW,
					...i(e)
				}),
				a = e => ({
					source: "id_card",
					noun: s.EditSubredditIcon,
					action: n.c.CLICK,
					...i(e)
				}),
				c = e => ({
					source: "id_card",
					noun: s.EditSubredditDescription,
					action: n.c.CLICK,
					...i(e)
				}),
				u = (e, t) => r => ({
					source: "id_card",
					noun: s.SaveDescription,
					action: n.c.CLICK,
					setting: {
						value: String(e),
						oldValue: String(t)
					},
					...i(r)
				}),
				l = (e, t) => ({
					source: "id_card",
					noun: s.Error,
					action: n.c.VIEW,
					...i(e),
					...d.defaults(e),
					actionInfo: d.actionInfo(e, {
						reason: t
					})
				})
		},
		"./src/reddit/helpers/trackers/welcomeMessage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "b", (function() {
				return u
			}));
			var s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const d = (e, t) => r => ({
					...n.defaults(r),
					source: "sheet",
					action: e,
					noun: "welcome_message",
					subreddit: n.subreddit(r),
					actionInfo: n.actionInfo(r, {
						...t && {
							reason: t
						}
					})
				}),
				i = () => d("view"),
				o = () => d("click", "lets_go"),
				a = () => e => ({
					...n.defaults(e),
					source: "post_composer",
					action: "click",
					noun: "create_post",
					subreddit: n.subreddit(e),
					actionInfo: n.actionInfo(e, {
						pageType: "community",
						reason: "welcome_message"
					}),
					correlationId: Object(s.d)(s.a.PostComposer)
				}),
				c = () => e => ({
					...n.defaults(e),
					source: "sheet",
					action: "view",
					noun: "welcome_message_rules",
					subreddit: n.subreddit(e),
					actionInfo: n.actionInfo(e, {
						pageType: "community"
					})
				}),
				u = () => e => ({
					...n.defaults(e),
					source: "sheet",
					action: "click",
					noun: "welcome_message_rules",
					subreddit: n.subreddit(e),
					actionInfo: n.actionInfo(e, {
						pageType: "community"
					})
				})
		},
		"./src/reddit/models/ExternalAccount/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Twitter = "twitter"
				}(s || (s = {}))
		},
		"./src/reddit/models/Option/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			const s = e => !e.id,
				n = e => !!e.id,
				d = (e, t) => s(e) && s(t) ? e.displayText.toLowerCase().trim() === t.displayText.toLowerCase().trim() : !(!n(e) || !n(t)) && e.id === t.id
		},
		"./src/reddit/models/Rule/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "h", (function() {
				return l
			}));
			const s = {
					all: "all",
					post: "post",
					comment: "comment"
				},
				n = {
					all: "all",
					link: "post",
					comment: "comment"
				},
				d = {
					LINK_AND_COMMENT: "all",
					LINK: "post",
					COMMENT: "comment"
				},
				i = 15,
				o = 100,
				a = 100,
				c = 500,
				u = 2e3,
				l = e => ({
					rules: e.map(e => ({
						kind: n[e.kind],
						description: e.description,
						descriptionHtml: e.description_html,
						shortName: e.short_name,
						violationReason: e.violation_reason,
						createdUtc: e.created_utc,
						priority: e.priority
					}))
				})
		},
		"./src/reddit/models/Tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "d", (function() {
				return a
			}));
			const s = 25,
				n = 64;
			var d;
			! function(e) {
				e.EVENT = "EVENT", e.COLLECTION = "COLLECTION", e.CLASSIFICATION = "CLASSIFICATION", e.POST_CLASSIFICATION = "POST_CLASSIFICATION", e.SUBREDDIT_CLASSIFICATION = "SUBREDDIT_CLASSIFICATION", e.COMMENT_CLASSIFICATION = "COMMENT_CLASSIFICATION"
			}(d || (d = {}));
			const i = (e, t = !1) => ({
					id: e.id,
					displayText: e.text,
					selected: t
				}),
				o = (e, t = !1) => i(e.tag, t);
			var a;
			! function(e) {
				e.TAGGED = "TAGGED", e.NONE = "NONE"
			}(a || (a = {}))
		},
		"./src/reddit/reducers/tags/selected/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, n = r("./node_modules/lodash/uniqWith.js"),
				d = r.n(n),
				i = r("./node_modules/lodash/values.js"),
				o = r.n(i),
				a = r("./src/reddit/actions/tags/constants.ts"),
				c = r("./src/reddit/models/Option/index.ts"),
				u = r("./src/reddit/models/Tags/index.ts");
			! function(e) {
				e.ADD = "ADD", e.REMOVE = "REMOVE"
			}(s || (s = {}));
			const l = {
				selectedPrimaryTagId: {},
				selectedOptions: {},
				selectedSuggestedOptions: {},
				deselectedOptions: {},
				deselectedSuggestedOptions: {},
				inputByItemId: {},
				suggestedInputByItemId: {}
			};
			t.b = (e = l, t) => {
				switch (t.type) {
					case a.w:
					case a.r: {
						const {
							subredditId: r,
							itemTags: s,
							suggestedItemTags: n,
							primaryTag: i
						} = t.payload, a = d()([...(e.selectedOptions[r] || []).map(e => {
							if (!e.id) {
								const t = o()(s[r] || {}).find(t => e.displayText.toLowerCase().trim() === t.tag.text.toLowerCase().trim());
								if (t) return {
									...Object(u.e)(t, !0),
									action: null
								}
							}
							return e
						}), ...o()(s[r] || {}).map(e => ({
							...Object(u.e)(e, !0),
							action: null
						}))], c.a);
						let l = e.selectedPrimaryTagId;
						return i && (l = {
							...l,
							[r]: i.tag.id
						}), {
							...e,
							selectedOptions: {
								...e.selectedOptions,
								[r]: a.map(e => ({
									...e,
									action: e.id ? null : e.action
								}))
							},
							selectedSuggestedOptions: {
								...e.selectedSuggestedOptions,
								[r]: o()(n[r] || {}).map(e => ({
									...Object(u.e)(e, !0),
									action: null
								}))
							},
							deselectedOptions: {
								...e.deselectedOptions,
								[r]: []
							},
							selectedPrimaryTagId: l
						}
					}
					case a.D:
					case a.z: {
						const {
							subredditId: r,
							option: n
						} = t.payload, i = t.type === a.z ? "selectedOptions" : "selectedSuggestedOptions", o = t.type === a.z ? "deselectedOptions" : "deselectedSuggestedOptions", u = (e[o][r] || []).slice(), l = u.findIndex(e => Object(c.a)(e, n));
						let b = s.ADD;
						return l > -1 && (b = null, u.splice(l, 1)), {
							...e,
							[i]: {
								...e[i],
								[r]: d()([...e[i][r] || [], {
									...n,
									action: b
								}], c.a)
							},
							[o]: {
								...e[o],
								[r]: u
							}
						}
					}
					case a.C:
					case a.y: {
						const {
							subredditId: r,
							option: n
						} = t.payload, d = t.type === a.y ? "selectedOptions" : "selectedSuggestedOptions", i = t.type === a.y ? "deselectedOptions" : "deselectedSuggestedOptions", o = (e[i][r] || []).slice(), u = (e[d][r] || []).slice(), l = u.findIndex(e => Object(c.a)(e, n));
						return l > -1 && (null === u[l].action && o.push({
							...u[l],
							action: s.REMOVE
						}), u.splice(l, 1)), {
							...e,
							[d]: {
								...e[d],
								[r]: u
							},
							[i]: {
								...e[i],
								[r]: o
							}
						}
					}
					case a.A: {
						const {
							itemTagsState: r
						} = t.payload, s = Object.keys(r);
						if (!s.length) return e;
						const n = {
								selectedOptions: {},
								deselectedOptions: {},
								inputByItemId: {}
							},
							d = s.reduce((e, t) => (e.selectedOptions[t] = o()(r[t]).map(e => ({
								...Object(u.e)(e, !0),
								action: null
							})), e.deselectedOptions[t] = [], e.inputByItemId[t] = "", e), n);
						return {
							...e,
							inputByItemId: {
								...e.inputByItemId,
								...d.inputByItemId
							},
							selectedOptions: {
								...e.selectedOptions,
								...d.selectedOptions
							},
							deselectedOptions: {
								...e.deselectedOptions,
								...d.deselectedOptions
							}
						}
					}
					case a.B:
					case a.x: {
						const {
							subredditId: r,
							input: s
						} = t.payload, n = t.type === a.x ? "inputByItemId" : "suggestedInputByItemId";
						return {
							...e,
							[n]: {
								...e[n],
								[r]: s
							}
						}
					}
					case a.i:
					case a.h: {
						const {
							subredditId: r,
							primaryTagId: s
						} = t.payload;
						if (!s || !r) return e;
						const n = {
								...e,
								selectedPrimaryTagId: {
									...e.selectedPrimaryTagId,
									[r]: s
								}
							},
							d = e.selectedOptions[r];
						if (d) {
							const t = d.findIndex(e => e.id === s),
								i = [...d];
							return t >= 0 && i.splice(t, 1), {
								...n,
								selectedOptions: {
									...e.selectedOptions,
									[r]: i
								}
							}
						}
						return n
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/PublicAccessNetwork/api.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "m", (function() {
				return f
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "o", (function() {
				return O
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "h", (function() {
				return I
			})), r.d(t, "j", (function() {
				return E
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/objectSelector/index.ts"),
				d = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = r("./src/reddit/helpers/publicAccessNetwork/index.ts");
			const o = e => e.publicAccessNetwork.api.config,
				a = (e, t) => !!t && !!e.publicAccessNetwork.api.error[Object(i.g)(t)],
				c = e => a(e, d.b),
				u = (e, t) => !!t && !!e.publicAccessNetwork.api.pending[Object(i.g)(t)] && e.publicAccessNetwork.api.pending[Object(i.g)(t)].isPending,
				l = e => u(e, d.b),
				b = e => e.publicAccessNetwork.api.pending[d.b] && e.publicAccessNetwork.api.pending[d.b].fetchedUtcTimeStamp,
				p = Object(s.a)(o, e => e.global),
				f = Object(s.a)((e, {
					subreddit: t
				}) => t, o, (e, t) => {
					const r = e.toLowerCase();
					return t.subreddits[r]
				}),
				m = Object(s.a)(o, e => e.global.rpan_intro_video_url),
				O = Object(s.a)(o, e => e.global.url_to_show_for_unavailable_video),
				g = Object(s.a)(o, e => !1),
				j = Object(s.a)(o, e => e.isError),
				_ = Object(s.a)(o, e => e.global.max_chat_comment_length),
				S = e => e.publicAccessNetwork.api.recommendedViewerSubreddits,
				I = (Object(s.a)(S, e => e.isError), Object(s.a)(S, e => e.isPending)),
				T = Object(n.a)(Object(s.a)(S, e => e.subreddits)),
				E = Object(s.a)(T, e => [{
					name: "All",
					prefixedName: "All",
					path: Object(i.e)()
				}, ...e.map(e => ({
					name: e,
					prefixedName: `r/${e}`,
					path: Object(i.f)(e)
				}))])
		},
		"./src/reddit/selectors/downToChat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "a", (function() {
				return d
			}));
			const s = (e, t) => e.chat.downToChat.subreddits[t] && e.chat.downToChat.subreddits[t].bannerEnabled,
				n = (e, t) => e.chat.downToChat.subreddits[t] && e.chat.downToChat.subreddits[t].buttonEnabled,
				d = (e, t) => !!e.chat.downToChat.subreddits[t]
		},
		"./src/reddit/selectors/experiments/econ/powerupsAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const o = e => Object(d.c)(e, {
					experimentName: n.nc,
					experimentEligibilitySelector: i.K
				}),
				a = Object(s.a)(o, e => e === n.Kc.Community || e === n.Kc.Supporter)
		},
		"./src/reddit/selectors/experiments/gqlSubredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const d = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.lb
				}) === s.Ib.Enabled,
				i = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.kb
				}) === s.Hb.Enabled
		},
		"./src/reddit/selectors/experiments/publicAccessNetwork.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return p
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const d = e => s.Sd.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.ae
				}),
				i = e => s.Sd.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Kd
				}),
				o = e => s.ne.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.he
				}),
				a = (e, t, r) => {
					const d = r(e, t);
					return !(!d || !d.meter) && (d.meter.enabled && o(e) && s.He.Enabled === Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.Ge
					}))
				},
				c = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Zd
				}),
				u = e => {
					switch (e) {
						case s.fe.Five:
							return .05;
						case s.fe.Ten:
							return .1;
						case s.fe.Fifty:
							return .5;
						default:
							return .01
					}
				},
				l = e => s.Sd.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.be
				}),
				b = e => s.Sd.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Xd
				}),
				p = e => s.Sd.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Yd
				})
		},
		"./src/reddit/selectors/experiments/subredditWelcomeMessage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				d = r("./src/reddit/helpers/chooseVariant/index.ts"),
				i = r("./src/reddit/selectors/experiments/index.ts"),
				o = r("./src/reddit/selectors/experiments/utils.ts");
			const a = Object(s.a)(e => Object(d.c)(e, {
				experimentName: n.le,
				experimentEligibilitySelector: i.e
			}), o.a)
		},
		"./src/reddit/selectors/externalAccount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return u
			}));
			var s = r("./src/reddit/models/ExternalAccount/index.ts"),
				n = r("./src/reddit/models/User/index.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const i = (e, {
					username: t
				}) => !!e.externalAccount.api.user.pending[t],
				o = (e, {
					username: t
				}) => e.externalAccount.user[t],
				a = e => {
					const t = Object(d.k)(e);
					if (!t) return;
					const r = Object(n.e)(t),
						s = o(e, {
							username: r
						});
					return s ? s.twitter : void 0
				},
				c = e => !!e.externalAccount.api.connect.pending[s.a.Twitter],
				u = (e, {
					profileName: t
				}) => {
					if (!t) return null;
					const r = o(e, {
						username: t
					});
					if (!r) return null;
					const i = r[s.a.Twitter];
					if (!i) return null;
					const a = Object(d.k)(e);
					if (!(a && Object(n.e)(a).toLowerCase() === t.toLowerCase())) return i;
					const c = Object(d.nb)(e, {
						userName: t
					});
					return c ? c.prefShowTwitter ? i : null : i
				}
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return u
			}));
			var s = r("./src/reddit/models/Gold/Powerups/index.ts"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/actions/gold/constants.ts");
			const i = {};
			var o = (e = i, t) => {
					var r, s;
					switch (t.type) {
						case d.pb:
						case d.qb: {
							const {
								benefitStatuses: s,
								subredditId: n
							} = t.payload;
							if (!s) return e;
							const d = null !== (r = e[n]) && void 0 !== r ? r : {},
								i = {};
							return s.forEach(({
								benefit: e,
								isEnabled: t
							}) => {
								i[e] = t
							}), {
								...e,
								[n]: {
									...d,
									...i
								}
							}
						}
						case d.N: {
							const {
								benefitStatuses: r,
								subredditId: n
							} = t.payload, d = null !== (s = e[n]) && void 0 !== s ? s : {}, i = {};
							return r.forEach(({
								benefit: e,
								isEnabled: t
							}) => {
								i[e] = t
							}), {
								...e,
								[n]: {
									...d,
									...i
								}
							}
						}
						default:
							return e
					}
				},
				a = r("./node_modules/reselect/es/index.js");
			Object(n.a)({
				features: {
					powerupsBenefitSettings: o
				}
			});
			const c = (e, {
					subredditId: t
				}) => t ? e.features.powerupsBenefitSettings[t] : null,
				u = (e => Object(a.a)(c, t => !!(null == t ? void 0 : t[e])))(s.a.CommentsWithGifs)
		},
		"./src/reddit/selectors/inlineSubredditEditing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			}));
			var s = r("./src/reddit/featureFlags/index.ts"),
				n = r("./src/reddit/selectors/moderatorPermissions.ts");
			const d = (e, {
					subredditId: t
				}) => {
					if (!s.d.subredditInlineEditing(e)) return !1;
					const r = t ? Object(n.m)(e, {
						subredditId: t
					}) : null;
					return !!r && (e => !!e && e.config)(r)
				},
				i = e => e.subreddits.api.inlineEditing.pending
		},
		"./src/reddit/selectors/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/selectors/user.ts");
			const d = e => !Object(n.K)(e) && e.seo.linksModule.frontpage || null,
				i = e => {
					const t = e.split("/");
					if ("r" === t[1]) return t[2]
				},
				o = Object(s.a)(d, e => e ? e.map(e => ({
					...e,
					links: e.links.map(e => ({
						...e,
						title: i(e.url)
					})).filter(e => e.title)
				})) : null),
				a = Object(s.a)(o, e => e ? e.map(e => ({
					...e,
					links: e.links.filter(e => e.visible)
				})) : null),
				c = (e, {
					subredditId: t
				}) => {
					const r = ((e, {
						subredditId: t
					}) => e.seo.linksModule.subreddits && e.seo.linksModule.subreddits[t])(e, {
						subredditId: t
					});
					return r && r.subreddits
				}
		},
		"./src/reddit/selectors/seo/topicLinks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = (e, {
				subredditId: t
			}) => e.seo.topicLinks.subreddits && e.seo.topicLinks.subreddits[t]
		},
		"./src/reddit/selectors/tags.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return l
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "A", (function() {
				return m
			})), r.d(t, "B", (function() {
				return O
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "j", (function() {
				return j
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "r", (function() {
				return I
			})), r.d(t, "t", (function() {
				return T
			})), r.d(t, "p", (function() {
				return x
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "z", (function() {
				return N
			})), r.d(t, "y", (function() {
				return R
			})), r.d(t, "u", (function() {
				return L
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "q", (function() {
				return U
			})), r.d(t, "C", (function() {
				return G
			})), r.d(t, "w", (function() {
				return B
			})), r.d(t, "s", (function() {
				return F
			})), r.d(t, "x", (function() {
				return M
			})), r.d(t, "h", (function() {
				return Q
			})), r.d(t, "v", (function() {
				return W
			})), r.d(t, "D", (function() {
				return $
			})), r.d(t, "m", (function() {
				return J
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/some.js"),
				n = r.n(s),
				d = r("./node_modules/lodash/values.js"),
				i = r.n(d),
				o = r("./src/lib/objectSelector/index.ts"),
				a = r("./src/reddit/helpers/tags/index.ts"),
				c = r("./src/reddit/models/Tags/index.ts");
			const u = e => e.tags.creation.selectedOptions || [],
				l = e => {
					const t = [];
					for (let r = 0; r < u(e).length; r++) u(e)[r].id && t.push(u(e)[r].id);
					return t || []
				},
				b = e => (u(e) || []).filter(e => !!e.displayText).map(e => e.displayText),
				p = e => {
					const t = [];
					for (let r = 0; r < u(e).length; r++) u(e)[r].id || t.push(u(e)[r].displayText);
					return t || []
				},
				f = e => Object.keys(e.tags.models.globalSubredditTags).length > 0,
				m = e => e.tags.api.create.error || e.tags.api.deleteTag.error || e.tags.api.fetch.error || e.tags.api.update.error,
				O = e => e.tags.api.create.pending || e.tags.api.deleteTag.pending || e.tags.api.fetch.pending || e.tags.api.update.pending,
				g = (e, {
					subredditId: t
				}) => e.tags.selected.inputByItemId[t] || "",
				j = (e, {
					subredditId: t
				}) => e.tags.selected.suggestedInputByItemId[t] || "",
				_ = [],
				S = (e, {
					subredditId: t
				}) => n()(I(e, {
					subredditId: t
				}), e => !!e.action) || n()(E(e, {
					subredditId: t
				}), e => !!e.action),
				I = (e, {
					subredditId: t
				}) => e.tags.selected.selectedOptions[t] || _,
				T = (e, {
					subredditId: t
				}) => e.tags.selected.selectedSuggestedOptions[t] || _,
				E = (e, {
					subredditId: t
				}) => e.tags.selected.deselectedOptions[t] || _,
				h = {},
				y = {},
				x = e => e.tags.availableGlobalTagOrder.recommendedGlobal.map(t => e.tags.models.globalSubredditTags[t]),
				D = e => e.tags.models.globalSubredditTags,
				v = e => e.tags.availableGlobalTagOrder.global.map(t => e.tags.models.globalSubredditTags[t]),
				w = (e, {
					subredditId: t
				}) => e.tags.models.subredditScopedTags[t] || y,
				A = (e, t) => {
					const r = i()(t);
					for (let s = 0; s < r.length; s++)
						if (r[s].text.toLowerCase().trim() === e.toLowerCase().trim()) return r[s];
					return null
				},
				C = (e, {
					itemId: t
				}) => e.tags.models.itemTags[t] || h,
				k = (e, {
					itemId: t
				}) => !!e.tags.models.itemTags[t],
				N = (e, {
					itemId: t
				}) => e.tags.models.suggestedItemTags[t] || h,
				R = (e, {
					itemId: t
				}) => i()(N(e, {
					itemId: t
				})).filter(e => e.isRelevant).map(e => Object(c.e)(e, !0)),
				L = (e, {
					itemId: t
				}) => e.tags.models.sortedItemTags[t] || [],
				P = Object(o.a)((e, {
					thingId: t,
					suggested: r = !1
				}) => {
					const s = B(e, {
						subredditId: t
					});
					return i()(((e, {
						thingId: t,
						suggested: r = !1
					}) => {
						const s = (r ? j(e, {
								subredditId: t
							}) : g(e, {
								subredditId: t
							})) ? v(e) : x(e),
							n = r ? T(e, {
								subredditId: t
							}) : I(e, {
								subredditId: t
							}),
							d = s.reduce((e, t) => (e[t.id] = Object(c.f)(t), e), {});
						return n.reduce((e, t) => (t.id && e[t.id] && (e[t.id].selected = !0), e), d)
					})(e, {
						thingId: t,
						suggested: r
					})).filter(e => !e.selected && e.id !== s)
				}),
				U = (e, {
					subredditId: t
				}) => I(e, {
					subredditId: t
				}).concat(E(e, {
					subredditId: t
				})),
				G = (e, {
					subredditId: t
				}) => I(e, {
					subredditId: t
				}).filter(a.b).map(e => ({
					text: e.displayText,
					type: c.c.CLASSIFICATION
				})),
				B = (e, {
					subredditId: t
				}) => e.tags.models.subredditPrimaryTagId[t] || null,
				q = (e, t) => t && e.tags.models.globalSubredditTags[t] || null,
				F = (e, t) => {
					const r = e.tags.selected.selectedPrimaryTagId[t.subredditId] || null;
					return q(e, r)
				},
				M = (e, t) => {
					const r = B(e, t);
					return q(e, r)
				},
				Q = e => e.tags.creation.selectedPrimaryTagId || null,
				W = e => {
					const t = Q(e);
					return q(e, t)
				},
				$ = e => e.tags.api.updatePrimaryTag.pending,
				J = (e, {
					subredditId: t
				}) => Object.keys(C(e, {
					itemId: t
				})).length > 0
		},
		"./src/reddit/selectors/welcomeMessage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = (e, t) => e.subreddits.welcomeMessage[t],
				n = e => e.subreddits.welcomeMessage
		},
		"./src/reddit/selectors/widgets.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "k", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "j", (function() {
				return g
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "b", (function() {
				return S
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/constants/posts.ts"),
				d = r("./src/reddit/helpers/name/index.ts"),
				i = r("./src/reddit/models/Widgets/index.ts"),
				o = r("./src/reddit/selectors/profile.ts"),
				a = r("./src/reddit/selectors/subreddit.ts");
			const c = [],
				u = e => e.widgets.models,
				l = Object(s.a)((e, t) => Object(i.w)(t) ? e.widgets.models[t.widgetId] : Object(i.q)(t.widgetKind)),
				b = (e, t) => e.widgets.idCardIds[t.subredditId],
				p = (e, t) => {
					let r = t.subredditId;
					if (!r && t.subredditName && (r = Object(a.B)(e, t.subredditName)), r) {
						const t = b(e, {
							subredditId: r
						});
						if (t) return e.widgets.models[t]
					}
					return null
				},
				f = (e, t) => e.widgets.sidebar[t.subredditId] || [],
				m = (e, t) => e.widgets.menuIds[t.subredditId],
				O = (e, t) => {
					const r = m(e, t);
					return r ? e.widgets.models[r] : null
				},
				g = (e, t) => {
					const r = e.widgets.sidebar[t.subredditId];
					return Array.isArray(r) ? r.reduce((t, r) => {
						const s = e.widgets.models[r];
						return s && t.push(s.kind), t
					}, []) : c
				},
				j = (e, t) => {
					const r = f(e, t);
					for (const s of r) {
						const t = e.widgets.models[s];
						if ("subreddit-rules" === t.kind) return t
					}
					return null
				},
				_ = (e, t) => {
					const r = f(e, t).map(t => e.widgets.models[t]).filter(e => "post-flair" === e.kind);
					return r.length ? r : null
				},
				S = Object(s.a)((e, t) => {
					if (t.type === n.a.PROFILE) {
						const r = Object(o.j)(e, {
							profileName: t.name
						});
						return r ? {
							profile: {
								id: r.id,
								name: Object(d.g)(r.name)
							}
						} : {}
					}
					const r = Object(a.w)(e, {
							subredditName: t.name
						}),
						s = Object(a.t)(e, {
							subredditName: t.name
						});
					return {
						subreddit: {
							categoryName: s ? s.contentCategory : null,
							id: r.id,
							name: Object(d.g)(r.name)
						}
					}
				})
		},
		"./src/redditGQL/operations/CreateCustomEmoji.json": function(e) {
			e.exports = JSON.parse('{"id":"e443629d50b0"}')
		},
		"./src/redditGQL/operations/CreateSubredditTags.json": function(e) {
			e.exports = JSON.parse('{"id":"80c9a3cd96b8"}')
		},
		"./src/redditGQL/operations/DeleteCustomEmoji.json": function(e) {
			e.exports = JSON.parse('{"id":"c13d195ee7ca"}')
		},
		"./src/redditGQL/operations/EnablePowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"059b6d024156"}')
		},
		"./src/redditGQL/operations/FetchGlobalTags.json": function(e) {
			e.exports = JSON.parse('{"id":"f4a581740c21"}')
		},
		"./src/redditGQL/operations/FetchSubredditTags.json": function(e) {
			e.exports = JSON.parse('{"id":"bac623887684"}')
		},
		"./src/redditGQL/operations/FetchSubredditsNotificationSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"5d042135b4c5"}')
		},
		"./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json": function(e) {
			e.exports = JSON.parse('{"id":"cbcafcbff9c6"}')
		},
		"./src/redditGQL/operations/GetSubredditQuestions.json": function(e) {
			e.exports = JSON.parse('{"id":"15c4ad40a0bc"}')
		},
		"./src/redditGQL/operations/GetSubredditWelcomeMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"ba4eb4e2972f"}')
		},
		"./src/redditGQL/operations/LiveVideoPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"b3343d9362cd"}')
		},
		"./src/redditGQL/operations/MaybeDeleteTagsAndUpdateItemTags.json": function(e) {
			e.exports = JSON.parse('{"id":"023547ccdaf6"}')
		},
		"./src/redditGQL/operations/ReallocatePowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"d02bf38ca840"}')
		},
		"./src/redditGQL/operations/RedditorPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"e2bcd0fbaace"}')
		},
		"./src/redditGQL/operations/ReportMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"ae01229e1caa"}')
		},
		"./src/redditGQL/operations/SubredditAbout.json": function(e) {
			e.exports = JSON.parse('{"id":"c005672ff6d5"}')
		},
		"./src/redditGQL/operations/SubredditInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"29aee4089528"}')
		},
		"./src/redditGQL/operations/SubredditPage.json": function(e) {
			e.exports = JSON.parse('{"id":"2a4acdb8420f"}')
		},
		"./src/redditGQL/operations/SubredditPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"45499a0307cd"}')
		},
		"./src/redditGQL/operations/SubredditPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"8d2145ac1ec5"}')
		},
		"./src/redditGQL/operations/SubredditPowerupsFull.json": function(e) {
			e.exports = JSON.parse('{"id":"5ef02d19b2e0"}')
		},
		"./src/redditGQL/operations/SubredditRules.json": function(e) {
			e.exports = JSON.parse('{"id":"c398abb500f1"}')
		},
		"./src/redditGQL/operations/SubredditsPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"1cd60899cb27"}')
		},
		"./src/redditGQL/operations/TopAwardedPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"c74aa366ff92"}')
		},
		"./src/redditGQL/operations/TopAwardersLeaderboard.json": function(e) {
			e.exports = JSON.parse('{"id":"aba8fd5909b4"}')
		},
		"./src/redditGQL/operations/UpdatePowerupsSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"699ae1616006"}')
		},
		"./src/redditGQL/operations/UpdateSubredditNotificationSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"0af4f630a2e1"}')
		},
		"./src/redditGQL/operations/UpdateSubredditPrimaryTag.json": function(e) {
			e.exports = JSON.parse('{"id":"a2d0aa1efdbc"}')
		},
		"./src/redditGQL/operations/UpdateSubredditTagStatesRelevance.json": function(e) {
			e.exports = JSON.parse('{"id":"ee43ccb6e5eb"}')
		},
		"./src/redditGQL/operations/UpdateSubredditWelcomeMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"5f408850ebd9"}')
		},
		"./src/redditGQL/operations/UserPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"5460e33eb672"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241.7b531c9a52c01cddedf2.js.map