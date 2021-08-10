// https://www.redditstatic.com/desktop2x/Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241.3342b85547ff3f73ee80.js
// Retrieved at 8/10/2021, 9:50:09 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"], {
		"./src/reddit/actions/downToChat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return S
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "i", (function() {
				return L
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/chat/toggle.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/constants/modals.ts"),
				c = r("./src/config.ts"),
				a = r("./src/lib/constants/index.ts"),
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
			} = r("./node_modules/fbt/lib/FbtPublic.js"), S = "FETCH_DOWN_TO_CHAT_AVAILABILITY__PENDING", I = "FETCH_DOWN_TO_CHAT_AVAILABILITY__SUCCESS", E = "FETCH_DOWN_TO_CHAT_AVAILABILITY__FAILED", T = "DISMISS_DOWN_TO_CHAT_BANNER__PENDING", h = "DISMISS_DOWN_TO_CHAT_BANNER__SUCCESS", y = "DISMISS_DOWN_TO_CHAT_BANNER__FAILED", D = "DISMISS_EACH_SUBREDDIT_BANNER", w = Object(s.a)(S), x = Object(s.a)(I), A = Object(s.a)(E), v = Object(s.a)(T), R = Object(s.a)(h), C = (Object(s.a)(y), Object(s.a)(D)), N = e => async (t, r, {
				apiContext: s
			}) => {
				const n = r();
				if (Object(g.a)(n, e)) return;
				t(w({
					subredditId: e
				}));
				const d = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.a]), {
					endpoint: `${c.a.sendbirdServiceUrl}/api/v1/sendbird/down_to_chat/availability`,
					method: a.hb.GET,
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
					if (t(x({
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
				} else t(A({
					subredditId: e,
					error: "Failed to fetch subreddit's down to chat availability data"
				}))
			}, k = e => async (t, r, {
				apiContext: s
			}) => {
				t(v({
					subredditId: e
				}));
				const n = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.a]), {
					endpoint: `${c.a.sendbirdServiceUrl}/api/v1/sendbird/down_to_chat/availability`,
					method: a.hb.DELETE,
					data: {
						subreddit_id: t
					}
				}))(s(), e);
				if (n.ok && n.body) {
					const {
						feature_enabled: r,
						experiment_enabled: s
					} = n.body;
					t(R({
						subredditId: e,
						bannerEnabled: r,
						buttonEnabled: s
					})), r || t(C())
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
					endpoint: `${c.a.sendbirdServiceUrl}/api/v1/sendbird/down_to_chat/join`,
					method: a.hb.POST,
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
				return E
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "p", (function() {
				return N
			})), r.d(t, "b", (function() {
				return k
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
				return z
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/addQueryParams/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/constants/parameters.ts"),
				c = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
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
				E = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				T = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				h = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				y = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				D = Object(n.a)(S),
				w = Object(n.a)(I),
				x = Object(n.a)(E),
				A = Object(n.a)(T),
				v = Object(n.a)(h),
				R = Object(n.a)(y),
				C = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r(),
						d = Object(_.j)(n),
						i = e || d && Object(m.e)(d);
					if (!i) return;
					if (Object(O.d)(n, {
							username: i
						})) return;
					t(D(i));
					const o = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/user/${t}.json`),
						traceRequestName: "get_external_accounts",
						method: c.hb.GET
					}))(s(), i);
					if (o.ok) {
						const e = p(o.body);
						t(w({
							username: i,
							accountsData: e
						}))
					} else t(x(o.error))
				}, N = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t(),
						n = Object(g.d)(s);
					if (!n) return;
					const d = s.externalAccount.api.subreddit.fetched[n],
						i = s.externalAccount.api.subreddit.pending[n];
					if (d || i) return;
					const o = Object(j.v)(s, {
						subredditName: n
					});
					if (!(o && o.hasExternalAccount)) return;
					e(A(n));
					const f = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/subreddit/${t}.json`),
						method: c.hb.GET
					}))(r(), n);
					if (f.ok) {
						const t = p(f.body);
						e(v({
							subredditName: n,
							accountsData: t
						}))
					} else e(R(f.error))
				}, k = "EXTERNAL_ACCOUNT_DISCONNECT_PENDING", L = "EXTERNAL_ACCOUNT_DISCONNECT_SUCCESS", P = "EXTERNAL_ACCOUNT_DISCONNECT_FAILED", U = Object(n.a)(k), G = Object(n.a)(L), B = Object(n.a)(P), q = e => async (t, r, {
					apiContext: s
				}) => {
					t(U({
						provider: e
					}));
					const n = Object(_.j)(r()),
						d = Object(m.e)(n),
						i = await ((e, t) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/disconnect.json`),
							method: c.hb.POST
						}))(s(), e);
					i.ok ? t(G({
						provider: e,
						username: d
					})) : t(B({
						provider: e,
						error: i.error
					}))
				}, F = "OAUTH_FLOW_URL_PENDING", M = "OAUTH_FLOW_URL_SUCCESS", Q = "OAUTH_FLOW_URL_FAILED", $ = Object(n.a)(F), J = Object(n.a)(M), W = Object(n.a)(Q), z = e => async (t, r, {
					apiContext: n
				}) => {
					t($({
						provider: e
					}));
					const p = Object(d.a)(window.location.href, {
							[o.d]: e
						}),
						m = await ((e, t, r) => Object(a.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/connect.json`),
							method: c.hb.POST,
							data: {
								redirect_url: r
							}
						}))(n(), e, p);
					if (m.ok) {
						const {
							redirect_url: r
						} = m.body;
						t(J({
							provider: e
						})), window.location.href = r
					} else t(W({
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
			r.d(t, "m", (function() {
				return j
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "i", (function() {
				return F
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "c", (function() {
				return Q
			})), r.d(t, "h", (function() {
				return $
			})), r.d(t, "g", (function() {
				return J
			})), r.d(t, "f", (function() {
				return W
			})), r.d(t, "e", (function() {
				return z
			})), r.d(t, "l", (function() {
				return V
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				i = r("./src/telemetry/index.ts"),
				o = r("./src/reddit/actions/login.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
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
						if (r.errors && r.errors.length) return void(await t(E(i)));
						if (!r.data.identity) return void(await t(I(i)));
						await t(S({
							powerups: r.data.identity.powerups
						}))
					}
				} catch (o) {
					d.c.captureException(o), await t(E(i))
				}
			}, _ = Object(n.a)(g.Bb), S = Object(n.a)(g.Ab), I = Object(n.a)(g.zb), E = e => async (t, r) => {
				await t(I(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, T = (e, t) => async (e, r, {
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
						if (s.errors && s.errors.length) return void(await e(w(o)));
						if (!s.data.redditorInfoById) return void(await e(D(o)));
						const n = (null === (i = s.data.redditorInfoById.powerups) || void 0 === i ? void 0 : i.supportedSubreddits) || [];
						await e(y({
							supportedSubreddits: n,
							userId: t
						}))
					}
				} catch (c) {
					d.c.captureException(c), await e(w(o))
				}
			}, h = Object(n.a)(g.hb), y = Object(n.a)(g.gb), D = Object(n.a)(g.fb), w = e => async (t, r) => {
				await t(D(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, x = (e, t = {}) => async (r, n, {
				gqlContext: i
			}) => {
				var o;
				const c = n();
				if (Object(p.i)(c, {
						subredditId: e
					}) && Object(f.a)(c, {
						subredditId: e
					}) && (!t.fullData || Object(p.k)(c, {
						subredditId: e
					})) && !t.forceLoad) return;
				r(C());
				const a = t.fullData ? l.i : l.h;
				try {
					const s = await a(i(), e, !!t.includeIdentity);
					if (s.ok) {
						const n = s.body;
						if (null === (o = n.errors) || void 0 === o ? void 0 : o.length) return void(await r(P(n.errors[0].message)));
						if (t.fullData) {
							const {
								data: t
							} = n;
							A(r, e, t.subredditInfoById, t.identity)
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
			}, A = (e, t, r, s) => {
				var n, d, i;
				const {
					powerups: o = null,
					powerupsSettings: c = null,
					supporters: a = null,
					productOffers: u = null,
					subredditAchievementFlairs: l
				} = r || {}, b = null == s ? void 0 : s.powerups;
				e(k({
					powerups: o,
					benefitStatuses: null == c ? void 0 : c.benefitStatuses,
					productOffers: null !== (n = null == u ? void 0 : u.offers) && void 0 !== n ? n : [],
					recentSupporters: null !== (d = null == a ? void 0 : a.recentSupporters) && void 0 !== d ? d : [],
					subredditId: t,
					topSupporters: null !== (i = null == a ? void 0 : a.topSupporters) && void 0 !== i ? i : [],
					userPowerups: b,
					subredditAchievementFlairs: null != l ? l : []
				}))
			}, v = Object(n.a)(g.I), R = e => async (t, r, {
				gqlContext: s
			}) => {
				try {
					const r = await Object(l.e)(s(), e);
					t(v({
						subredditsPowerupsInfo: r
					}))
				} catch (n) {
					await t(P(n.message))
				}
			}, C = Object(n.a)(g.rb), N = Object(n.a)(g.qb), k = Object(n.a)(g.pb), L = Object(n.a)(g.ob), P = e => async (t, r) => {
				await t(L(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
					text: e
				}))
			}, U = Object(n.a)(g.T), G = Object(n.a)(g.U), B = Object(n.a)(g.V), q = e => async (t, r) => {
				await t(U(e)), t(Object(a.f)({
					kind: b.b.Error,
					duration: a.a,
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
					const _ = Object(m.j)(o());
					if (O && _) await i((e => async (t, r) => {
						t(B(e)), t(x(e.subredditId, {
							forceLoad: !0,
							fullData: !1
						})), t(j(!0)), e.powerupsCount && (t(Object(c.g)(u.a.ECON_POWERUPS_PURCHASE)), e.powerupsCount > 0 ? t(Object(c.h)(u.a.ECON_POWERUPS_SUCCESS)) : t(Object(a.f)({
							kind: b.b.SuccessCommunityGreen,
							duration: a.a,
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
			}, Q = Object(n.a)(g.E), $ = Object(n.a)(g.R), J = e => Object(c.h)(u.a.ECON_SUPPORTERS_LIST, {
				subredditId: e
			}), W = e => async (t, r) => {
				const s = r();
				return Object(m.j)(s) ? (Object(i.a)(Object(O.f)(e)(s)), t(Object(c.h)(u.a.ECON_POWERUPS_MARKETING))) : t(Object(o.h)())
			}, z = () => async (e, t) => {
				const r = t();
				return Object(m.j)(r) ? e(Object(c.h)(u.a.ACHIEVEMENT_FLAIR)) : e(Object(o.h)())
			}, H = Object(n.a)(g.N), V = (e, t) => async (r, s, {
				gqlContext: n
			}) => {
				const d = await Object(l.k)(n(), e, (e => Object.keys(e).map(t => ({
					benefit: t,
					isEnabled: e[t]
				})))(t));
				if (d.ok) {
					const t = d.body.data.updatePowerupsSettings.powerupsSettings.benefitStatuses;
					return r(H({
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
				return E
			}));
			var s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				n = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/selectors/runTimeEnvVars.ts"),
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
					if (t(m(e)), Object(s.isPseudoLocale)(e) ? (Object(u.G)(l) || Object(a.b)(l)) && (p = e) : p = Object(s.isoLocaleToR2Language)(e), !p) return;
					const f = new URL(window.location.href);
					Object(u.J)(l) ? Object(s.isPseudoLocale)(p) ? f.searchParams.set("locale", p) : (await Object(i.a)(Object(o.a)(b, [c.a]), {
						data: {
							lang: p
						},
						endpoint: `${b.apiUrl}/api/v1/me/prefs`,
						method: n.hb.PATCH,
						type: "json"
					}), f.searchParams.delete("locale")) : f.searchParams.delete("locale"), window.location.href = f.toString()
				}, g = "META__SET_POPULAR_GEO_FILTER", j = Object(d.a)(g), _ = "META__PWA_ENTERED", S = "META__PWA_LEFT", I = Object(d.a)(_), E = Object(d.a)(S)
		},
		"./src/reddit/actions/pages/subreddit.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "handleSubredditPageApiError", (function() {
				return he
			})), r.d(t, "SUBREDDIT_PENDING", (function() {
				return ye
			})), r.d(t, "SUBREDDIT_LOADED", (function() {
				return De
			})), r.d(t, "SUBREDDIT_FAILED", (function() {
				return we
			})), r.d(t, "subredditPending", (function() {
				return xe
			})), r.d(t, "subredditLoaded", (function() {
				return Ae
			})), r.d(t, "subredditFailed", (function() {
				return ve
			})), r.d(t, "subredditDataRequested", (function() {
				return Re
			})), r.d(t, "subredditDataFirstChunkRequested", (function() {
				return Ce
			})), r.d(t, "makeSubredditPageKey", (function() {
				return ke
			})), r.d(t, "subredditRequested", (function() {
				return Le
			})), r.d(t, "SUBREDDIT_INVALIDATE_LISTING", (function() {
				return Pe
			})), r.d(t, "subredditInvalidateListing", (function() {
				return Ue
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/find.js"),
				d = r.n(n),
				i = r("./node_modules/lodash/pick.js"),
				o = r.n(i),
				c = r("./node_modules/react-router-redux/es/index.js"),
				a = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/isAdHocMultireddit/index.ts"),
				l = r("./src/lib/isFakeSubreddit/index.ts"),
				b = r("./src/lib/makeActionCreator/index.ts"),
				p = r("./src/lib/makeListingKey/index.ts"),
				f = r("./src/lib/makeSearchKey/index.ts"),
				m = r("./src/lib/performanceTimings/index.tsx"),
				O = r("./src/reddit/actions/ads/index.ts"),
				g = r("./src/reddit/actions/communityFlairs/index.ts"),
				j = r("./src/reddit/actions/contentGate.ts"),
				_ = r("./src/reddit/actions/discoveryUnit.ts"),
				S = (r("./src/reddit/actions/downToChat.ts"), r("./src/reddit/actions/economics/helpers/async.ts")),
				I = r("./src/reddit/actions/externalAccount.ts"),
				E = r("./src/reddit/actions/gold/powerups.ts"),
				T = r("./src/reddit/actions/meta.ts"),
				h = r("./src/reddit/actions/pages/search.ts"),
				y = r("./src/reddit/actions/platform.ts"),
				D = r("./src/reddit/actions/publicAccessNetwork/api.ts"),
				w = r("./src/reddit/actions/seo/linksModule.ts"),
				x = r("./src/reddit/actions/seo/topicLinks.ts"),
				A = r("./src/lib/makeGqlRequest/index.ts");
			r("./src/redditGQL/operations/SubredditInfo.json");
			const v = e => ({
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
			var R = e => {
				var t;
				return {
					subreddits: (null === (t = e.data.subredditInfoById) || void 0 === t ? void 0 : t.linkedSubreddits) ? e.data.subredditInfoById.linkedSubreddits.map(v) : []
				}
			};
			var C = e => {
					var t, r;
					return (null === (r = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.subredditInfoById) || void 0 === r ? void 0 : r.topicLinks) || void 0
				},
				N = (r("./src/reddit/selectors/seo/linksModule.ts"), r("./src/reddit/selectors/seo/topicLinks.ts"), r("./src/reddit/selectors/subreddit.ts")),
				k = r("./src/reddit/selectors/widgets.ts");

			function L(e, t, r, s) {
				const n = t(),
					d = Object(N.S)(n, {
						subredditId: r
					}),
					i = Object(k.j)(n, {
						subredditId: r
					});
				if (d.isNSFW || i.some(e => "community-list" === e)) return;
				const o = R(s);
				o && e(Object(w.e)({
					id: r,
					data: o
				}))
			}

			function P(e, t, r) {
				const s = C(r);
				s && e(Object(x.b)({
					id: t,
					data: s
				}))
			}
			var U = r("./src/reddit/actions/structuredStyles/index.ts"),
				G = r("./src/reddit/actions/subreddit.ts"),
				B = r("./src/reddit/actions/toaster.ts"),
				q = r("./src/reddit/helpers/localStorage/index.ts"),
				F = r("./src/reddit/models/Subreddit/index.ts"),
				M = r("./src/reddit/models/Toast/index.ts"),
				Q = r("./src/reddit/routes/postCreation/constants.ts"),
				$ = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				J = r("./src/reddit/selectors/platform.ts"),
				W = r("./src/reddit/selectors/user.ts");
			const z = () => async (e, t, r) => {
				const s = t(),
					n = Object(J.e)(s);
				if (!n || n.type !== F.f.Public) return;
				const d = n.name,
					i = Object(J.k)(s),
					o = Object(N.v)(s, {
						subredditName: d
					});
				if (!o) return;
				const {
					activity7Day: a
				} = o, u = !!a && a >= 51 && a <= 100, b = !d || Object(l.a)(d), p = i && i.urlParams.subredditName === d, f = Object(W.J)(s), m = Object($.c)(s, {
					subredditId: Object(N.D)(s, d)
				});
				if (b || p || Object(q.B)() || !u || !f || m) return;
				const O = Object(k.d)(t(), {
					subredditName: d
				});
				if (!O || !O.currentlyViewingCount) return;
				const g = (24 * O.currentlyViewingCount * 7).toString(),
					j = g[0].padEnd(g.length, "0");
				e(Object(B.f)({
					buttonAction: async () => e(Object(c.b)(`/r/${d}${Q.b}`)),
					buttonText: "Create Post",
					duration: -1,
					id: "createPostCta",
					kind: M.b.Modal,
					name: "createPostCta",
					secondButtonAction: async () => Object(q.Bb)(),
					secondButtonText: "Dismiss",
					text: `There have been over ${j} visits to r/${d} in the past week. Create a new post and start the next conversation.`
				}))
			};
			var H = r("./src/reddit/actions/subreddit/questions.ts"),
				V = r("./src/reddit/actions/subredditSettings.ts"),
				K = r("./src/reddit/actions/subredditWelcomeMessage.ts"),
				Y = r("./src/reddit/actions/tags/index.ts"),
				X = r("./src/reddit/constants/page.ts"),
				Z = r("./src/reddit/constants/parameters.ts"),
				ee = r("./src/reddit/constants/postLayout.ts"),
				te = r("./src/reddit/contexts/PageLayer/index.tsx"),
				re = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				se = r("./src/reddit/endpoints/governance/posts.ts"),
				ne = r("./src/reddit/endpoints/page/subredditPage.ts"),
				de = r("./src/redditGQL/operations/SubredditPageExtra.json");
			var ie = r("./src/reddit/endpoints/profile/info.ts"),
				oe = r("./src/reddit/helpers/canonicalUrls.ts"),
				ce = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				ae = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				ue = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts");

			function le({
				econLeaderboards: e,
				identity: t,
				trendingSubreddits: r
			}) {
				const s = e.topAwardedPosts.map(e => e.post).filter(e => !e.removedBy && !e.isNsfw);
				return Object(ue.b)(s, r, t)
			}
			var be = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				pe = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				fe = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				me = r("./src/reddit/models/RichTextJson/index.ts"),
				Oe = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				ge = r("./src/reddit/selectors/communityFlairs.ts"),
				je = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				_e = r("./src/reddit/selectors/experiments/topPosts.ts"),
				Se = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				Ie = r("./src/reddit/selectors/moderatorPermissions.ts"),
				Ee = r("./src/reddit/selectors/multireddit.ts"),
				Te = r("./src/reddit/selectors/posts.ts");
			const he = (e, t) => async r => {
				if (!e.ok && e.body && (e => !!e.reason)(e.body)) {
					const {
						body: {
							data: s,
							reason: n
						}
					} = e, d = s ? s.account : void 0, i = s && s.features || void 0, o = t ? t.toLowerCase() : "";
					if (404 === e.status)
						if (n === F.e.NotFoundSubreddit) r(j.o({
							account: d,
							features: i,
							subredditName: o
						}));
						else if (n === F.e.BannedSubreddit) {
						const e = s ? s.banMessage || s.ban_message : void 0;
						r(j.m({
							banMessage: e,
							account: d,
							features: i,
							subredditName: o
						}))
					}
					if (451 === e.status && r(j.n({
							account: d,
							features: i,
							subredditName: o
						})), 403 === e.status)
						if (n === F.e.GoldSubreddit) r(j.q({
							account: d,
							features: i,
							subredditName: o
						}));
						else if (n === F.e.PrivateSubreddit) r(j.r({
						account: d,
						features: i,
						subredditDescription: s.description || "",
						subredditName: o,
						isContributorRequestsDisabled: !!s.isContributorRequestsDisabled,
						isContributorRequestTimestamp: s.isContributorRequestTimestamp ? parseInt(s.isContributorRequestTimestamp, 10) : void 0,
						subredditId: s.id
					}));
					else if (n === F.e.QuarantinedSubreddit) {
						const e = !s || void 0 === s.quarantineRequiresEmailOptin || s.quarantineRequiresEmailOptin;
						r(j.t({
							account: d,
							features: i,
							subredditName: o,
							quarantineRequiresEmail: e,
							quarantineMessage: s.quarantineMessage,
							quarantineMessageHtml: s.quarantineMessageHtml || "",
							quarantineMessageRTJson: s.quarantineMessageRTJson || me.i
						}))
					}
				}
			}, ye = "PAGE__SUBREDDIT_PENDING", De = "PAGE__SUBREDDIT_LOADED", we = "PAGE__SUBREDDIT_FAILED", xe = Object(b.a)(ye), Ae = Object(b.a)(De), ve = Object(b.a)(we), Re = (e, t, r, n) => async (i, o, c) => {
				var u, b, p, f, j, _;
				const h = o(),
					D = Object(W.I)(h) || Object(W.J)(h),
					w = h.listings.postOrder.api.pending[e],
					x = null === (b = null === (u = Object(J.b)(h)) || void 0 === u ? void 0 : u.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
					v = Object(l.a)(t);
				if (w) return;
				const R = t !== X.c.All && t !== X.c.Popular || !h.posts.recent.length ? r : {
					...r,
					recentPostIds: h.posts.recent
				};
				R.layout = ee.e[Object(te.O)(h, {})], t === X.c.Popular && (R.forceGeopopular = !0), i(xe({
					key: e
				}));
				const C = Object(je.b)(h);
				let k;
				if (r.sort === a.U.AWARDED && t === X.c.Popular) k = Object(re.a)(c.gqlContext(), {
					top: 0,
					includeListingMetadata: !0
				}).then(e => {
					const t = e.body;
					return {
						...e,
						body: le(t.data)
					}
				});
				else {
					const e = C ? () => Object(ne.b)(c.gqlContext(), Object(ne.c)(h, t, R), D) : () => Object(ne.a)(c.apiContext(), t, R);
					k = Object(m.i)(e, {
						name: "fetchSubredditPage",
						page: x,
						isLoggedIn: D
					})
				}
				const U = Object(N.R)(o(), {
						subredditId: Object(N.D)(o(), t)
					}).length > 0,
					q = Object(m.i)(() => {
						var e, r;
						return async function(e, t) {
							return Object(A.a)(e, {
								...de,
								variables: t
							})
						}(c.gqlContext(), {
							subredditName: t,
							isFake: v,
							includeIdentity: D,
							includePowerups: !v,
							includeQuestions: D && !v,
							includeRules: !v && !U,
							includeRedditorKarma: D && !(null === (r = null === (e = h.user.account) || void 0 === e ? void 0 : e.karma) || void 0 === r ? void 0 : r.total),
							includeSubredditLinks: !D,
							includeTopicLinks: !D,
							includeWelcome: !0
						})
					}, {
						name: "fetchSubredditPageExtra",
						page: x,
						isLoggedIn: D
					}),
					[F, Q] = await Promise.all([k, q]);
				let $ = null;
				(null == Q ? void 0 : Q.ok) && ($ = Q.body.data);
				const z = F.body,
					Z = (null == z ? void 0 : z.subreddits) ? ((e, t) => {
						var r;
						return null === (r = d()(e, e => (null == e ? void 0 : e.name.toLowerCase()) === t.toLowerCase())) || void 0 === r ? void 0 : r.id
					})(z.subreddits, t) : null;
				i(y.m(F.status));
				const oe = `error-${e}`,
					ce = v || Z;
				if (F.ok && ce) {
					if (!v && Z) {
						const e = null !== (f = null === (p = null == $ ? void 0 : $.subredditInfoByName) || void 0 === p ? void 0 : p.welcomeMessage) && void 0 !== f ? f : z.welcomeMessage;
						e && i(Object(K.f)({
							welcomeMessage: e,
							subredditId: Z
						})), Object(E.b)(i, Z, null == $ ? void 0 : $.subredditInfoByName, null == $ ? void 0 : $.identity)
					}
					let r;
					z.geoFilter && i(Object(T.k)(z.geoFilter));
					const s = z.postIds.filter(e => !!z.posts[e].isMeta);
					if (s.length && Z) {
						const e = Object(m.i)(() => Object(se.a)(c.apiContext(), Z, s), {
								name: "getGovernanceData",
								page: x,
								isLoggedIn: D
							}),
							t = await e;
						t.ok && (r = t.body)
					}
					if (Q && Q.ok) {
						const e = null === (_ = null === (j = Q.body.data.identity) || void 0 === j ? void 0 : j.redditor) || void 0 === _ ? void 0 : _.karma,
							t = {
								karma: {
									...ie.a,
									...e
								}
							};
						if (z.account && Object.assign(z.account, t), Z) {
							const e = null == Q ? void 0 : Q.body;
							if (function(e) {
									return Boolean(e && e.data && e.data.subredditInfoByName)
								}(e) && z.subredditAboutInfo[Z]) {
								const t = e.data.subredditInfoByName,
									r = t && t.notificationLevel;
								z.subredditAboutInfo[Z].notificationLevel = r
							}
						}
					}
					if (i(Ae({
							key: e,
							meta: h.meta,
							governance: r,
							...z,
							postIds: z.postIds
						})), !v) {
						const e = Object(N.D)(o(), t);
						(null == $ ? void 0 : $.subreddit) && i(G.t({
							rules: Object(be.a)({
								data: {
									subreddit: $.subreddit
								}
							}),
							subredditId: e
						}));
						const r = Object(g.c)(z.posts, e),
							s = Object(g.b)(z.structuredStyles),
							n = (s ? Object(g.d)(s) : []).concat(r);
						i(Object(g.a)(n, e))
					}
					if (n && i(B.g(oe)), i(Object(O.b)(Oe.a.SUBREDDIT)), i(Object(I.p)()), Z) {
						Object(H.a)(i, Z, null == $ ? void 0 : $.subredditInfoByName), L(i, o, Z, {
							data: {
								subredditInfoById: null == $ ? void 0 : $.subredditInfoByName
							}
						}), P(i, Z, {
							data: {
								subredditInfoById: null == $ ? void 0 : $.subredditInfoByName
							}
						});
						const e = [Object(m.i)(() => i(Object(S.a)({
							subredditId: Z,
							postIds: z.postIds,
							skip: ["subscription"]
						})), {
							name: "fetchAllEconomicsData",
							page: x,
							isLoggedIn: D
						})];
						if (Object(Se.a)(o(), {
								subredditId: Z
							})) {
							const r = Object(m.i)(() => i(Object(V.h)(t, Z)), {
									name: "subredditSettingsRequested",
									isLoggedIn: D,
									page: x
								}),
								s = Object(m.i)(() => i(Object(Y.k)(Z, pe.a.idCard)), {
									name: "subredditTagsRequested",
									isLoggedIn: D,
									page: x
								});
							e.push(r, s)
						}
						0, await Promise.all(e)
					}
				} else {
					if (403 === F.status || 404 === F.status || 451 === F.status) return void i(he(F, t));
					i(ve({
						error: !F.ok && F.error || {
							type: a.G.NOT_FOUND_ERROR
						},
						key: e,
						...z
					})), n && i(B.f({
						id: oe,
						kind: M.b.Error,
						text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: Re(e, t, r, n)
					}))
				}
			}, Ce = (e, t, r) => async (s, n) => {
				const d = n(),
					i = Object(p.a)(e, t.sort, t);
				Object(Te.z)(d, {
					listingKey: i
				}).length > 0 || await s(Re(i, e, t, r))
			}, Ne = (e, t) => {
				if (Object(l.a)(t)) {
					if (Object(u.a)(t)) {
						return Object(Ee.a)(e, {
							listingName: t
						}).displayText
					}
					switch (t.toLowerCase()) {
						case X.c.Popular:
							return "r/popular";
						case X.c.All:
							return "r/all"
					}
				}
				return Object(N.V)(e, {
					subredditName: t
				})
			}, ke = (e, t, r, s) => s ? Object(f.b)(e, void 0, s) : Object(p.a)(e, t, r), Le = (e, t) => async (r, s) => {
				var n, d;
				const {
					subredditName: i
				} = e.params, {
					styling: u
				} = e.queryParams, b = s(), j = Object(ce.a)(e.params, b);
				if ("Popular" === i) return void r(Object(c.c)(e.url.replace("r/Popular", "r/popular")));
				if ("All" === i) return void r(Object(c.c)(e.url.replace("r/All", "r/all")));
				const S = Object(f.d)(e.queryParams, Object(W.cb)(b)),
					E = ke(i, j, e.queryParams, S),
					T = j,
					w = b.listings.postOrder.api.error[E],
					x = b.listings.postOrder.api.pending[E];
				let A = !!b.listings.postOrder.ids[E];
				const v = b.listings.postOrder.listingSort[E];
				v && v.hasChanged && (A = !1);
				let R = Object(N.D)(b, i);
				const C = (e, t) => "true" === u && ((e, t) => Object(Ie.b)(fe.c.config)(e, {
						subredditId: t
					}) || Object(Ie.b)(fe.c.flair)(e, {
						subredditId: t
					}))(e, t),
					k = Z.x in e.queryParams && e.queryParams[Z.x].toUpperCase() || "",
					L = k in a.bc && a.bc[k];
				if (x || A && !w && !t) {
					if (C(b, R) && r(U.i(R)), A) {
						const t = Ne(s(), i);
						r(y.l({
							title: t
						})), Object(oe.e)(s(), r, e), window.addEventListener("load", () => {
							r(Object(I.p)())
						}), b.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
							r(Object(O.b)(Oe.a.SUBREDDIT))
						}), r(z())
					}
					return
				}
				r(_.g());
				const P = null === (d = null === (n = Object(J.b)(b)) || void 0 === n ? void 0 : n.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
					G = Object(W.J)(s()),
					B = Object(m.i)(() => r(Object(D.c)(`r/${i}`)), {
						name: "rpanConfigRequested",
						isLoggedIn: G,
						page: P
					});
				if (S) {
					const e = Object(m.i)(() => r(Object(h.searchDataRequested)(E, S, i)), {
						name: "searchDataRequested",
						isLoggedIn: G,
						page: P
					});
					await e
				} else {
					const t = {
						...o()(e.queryParams, [...Z.l, ...Z.k, Z.h]),
						sort: T,
						t: Object(ae.a)(T, L)
					};
					await r(Re(E, i, t, !0))
				}
				const q = b.platform.currentPage,
					F = Object(_e.d)(b, {
						pageLayer: q
					});
				if (Object(_e.a)(F) || Object(_e.b)(F) || Object(_e.c)(F)) {
					const e = Object(p.a)(i, a.U.TOP, {
							t: a.bc.WEEK
						}),
						t = {
							sort: a.U.TOP,
							t: a.bc.WEEK
						};
					await r(Re(e, i, t, !1))
				}
				if (R = R || Object(N.D)(s(), i), !Object(ge.a)(b, R) && !Object(l.a)(i)) {
					const e = Object(m.i)(() => r(Object(g.e)(i)), {
						name: "getTopCommunityFlair",
						page: P,
						isLoggedIn: G
					});
					await e
				}
				C(s(), R) && r(U.i(R)), Object(oe.e)(s(), r, e);
				const M = Ne(s(), i);
				r(y.l({
					title: M
				})), r(z()), await B
			}, Pe = "PAGE__SUBREDDIT_INVALIDATE_LISTING", Ue = Object(b.a)(Pe)
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
				c = r("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = Object(s.a)(d.w),
				u = Object(s.a)(d.x),
				l = Object(s.a)(d.G),
				b = (Object(s.a)(d.H), Object(s.a)(d.I)),
				p = Object(s.a)(d.T),
				f = e => async (t, r) => {
					if (Object(o.a)(r())) return t(m(e))
				}, m = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = Object(c.k)(r()),
						d = Object(c.m)(r(), {
							subreddit: e
						}),
						o = d && d.lastUpdated || 0,
						p = 1e3 * n.global.rpan_config_refresh_rate;
					if (n.isPending || n.isPermanentlyCanceled || Date.now() < o + p) return;
					t(l());
					const f = await Object(i.c)(s(), e);
					if (!f.ok) return void t(b());
					const m = f.body;
					t(a({
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
					if (Object(c.h)(s)) return;
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
				c = Object(s.a)("FRONTPAGE_LINKS__REQUEST_PENDING"),
				a = Object(s.a)("FRONTPAGE_LINKS__REQUEST_FAILED"),
				u = Object(s.a)(d),
				l = Object(s.a)(i),
				b = () => async e => {
					e(c());
					const t = await (async () => (await Object(n.a)(() => r.e("FrontpageLinks").then(r.t.bind(null, "./src/reddit/endpoints/goodContent/frontpageLinks.json", 3)))).default)();
					e(t ? u(t) : a())
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
				return $
			})), r.d(t, "i", (function() {
				return J
			})), r.d(t, "h", (function() {
				return W
			})), r.d(t, "d", (function() {
				return z
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
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/makeListingKey/index.ts"),
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
				E = r("./src/reddit/endpoints/messages/index.ts"),
				T = r("./src/reddit/endpoints/modQueue/index.ts"),
				h = r("./src/reddit/endpoints/page/subredditPage.ts"),
				y = r("./src/reddit/endpoints/subreddit/about.ts"),
				D = r("./src/reddit/endpoints/subreddit/rules.ts"),
				w = r("./src/reddit/endpoints/user/preferences.ts"),
				x = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				A = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				v = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				R = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				C = r("./src/reddit/models/Subreddit/index.ts"),
				N = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				k = r("./src/reddit/models/Toast/index.ts"),
				L = r("./src/reddit/models/User/index.ts"),
				P = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				U = r("./src/reddit/selectors/profile.ts"),
				G = r("./src/reddit/selectors/subreddit.ts"),
				B = r("./src/reddit/selectors/user.ts");
			const q = {},
				F = "SUBREDDIT__MODEL_SUCCEEDED",
				M = "SUBREDDIT__MODEL_PENDING",
				Q = "SUBREDDIT__MODEL_FAILED",
				$ = "SUBREDDIT__MORE_POSTS_PENDING",
				J = "SUBREDDIT__MORE_POSTS_LOADED",
				W = "SUBREDDIT__MORE_POSTS_FAILED",
				z = "SUBREDDIT__META_FILTER_TOGGLED",
				H = Object(c.a)($),
				V = Object(c.a)(J),
				K = Object(c.a)(W),
				Y = Object(c.a)(z),
				X = Object(c.a)(f.b),
				Z = Object(c.a)(f.c),
				ee = Object(c.a)(f.a),
				te = (e, t) => async (r, s) => {
					await (t === C.f.User ? r(re(e)) : r(se(e)))
				}, re = e => async (t, r, {
					apiContext: s
				}) => {
					const n = Object(U.m)(r(), e),
						d = await Object(D.c)(s(), e);
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
					const d = Object(G.D)(r(), e);
					t(Z());
					const i = await Object(D.b)(n(), e);
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
							kind: k.b.Error,
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
						subredditName: c
					} = e;
					let l = e.t;
					const b = r(),
						p = Object(A.a)(e, b),
						f = b.platform.currentPage ? b.platform.currentPage.queryParams : {},
						m = Object(a.a)(c, p, {
							t: l,
							...f
						}),
						O = b.listings.postOrder.loadMore[m],
						E = b.listings.postOrder.listingSort[m];
					let T = p;
					if (E && !T) {
						const e = Object(o.d)(E.sort);
						T = e.sort, l = e.timeSort
					}
					const y = b.listings.postOrder.api.pending[m],
						{
							fetchedTokens: D
						} = b.listings.postOrder,
						w = !(!D[m] || !D[m][O.token]);
					if (y || w) return;
					if (T === i.U.AWARDED && c === g.f) return;
					t(H({
						key: m,
						fetchedToken: O.token
					}));
					const v = {
							after: O.token,
							dist: O.dist,
							forceGeopopular: c === g.c.Popular,
							layout: _.e[Object(S.O)(b, {})],
							sort: T,
							t: l,
							...d()(f, [...j.l, j.h])
						},
						R = Object(P.a)(b) ? () => Object(h.b)(n(), Object(h.c)(b, c, {
							...v,
							limit: _.a
						}), Object(B.Q)(b)) : () => Object(h.a)(s(), c, v),
						C = await R(),
						N = {
							...C.body,
							...Object(x.a)(b, m, C.body)
						};
					if (C.ok) {
						let e;
						const n = N.postIds.filter(e => !!N.posts[e].isMeta),
							d = Object(G.D)(r(), c);
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
						error: C.error,
						fetchedToken: O.token,
						key: m,
						...N
					}))
				}, de = "SUBSCRIPTION__MODERATED_SUBREDDITS_PENDING", ie = "SUBSCRIPTION__MODERATED_SUBREDDITS_LOADED", oe = "SUBSCRIPTION__MODERATED_SUBREDDITS_FAILED", ce = Object(c.a)(de), ae = Object(c.a)(ie), ue = Object(c.a)(oe), le = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t();
					if (!s.user.account || s.subreddits.moderated.api.fetched) return;
					e(ce());
					const n = await Object(T.b)(r(), i.pb.Modqueue, {
						moderated: !0,
						moderated_limit: 50
					});
					n.ok ? e(ae(n.body)) : e(ue({
						error: n.error
					}))
				}, be = "SUBREDDIT__ABOUT_PENDING", pe = "SUBREDDIT__ABOUT_SUCCEEDED", fe = "SUBREDDIT__ABOUT_FAILED", me = Object(c.a)(be), Oe = Object(c.a)(pe), ge = Object(c.a)(fe), je = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r();
					if (Object(G.v)(n, {
							subredditName: e
						}) || n.subreddits.api.about.error[e.toLowerCase()] || n.subreddits.api.about.pending[e.toLowerCase()]) return;
					t(me({
						subredditName: e
					}));
					const d = !Object(G.D)(n, e),
						i = await Object(y.a)(s(), e, d);
					if (i.ok) {
						const r = i.body.data.subreddit,
							s = Object(v.a)(r),
							n = d ? Object(R.a)(r) : void 0;
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
						c = r === N.e.View ? null === (i = Object(B.e)(n(), o)) || void 0 === i ? void 0 : i.subredditId : Object(G.D)(n(), o),
						a = Object(B.j)(n());
					if (a && c) {
						const e = ((e, t, r, s) => {
							return {
								to: `/r/${e}`,
								subject: `[join] I would like to join ${e}`,
								text: r + "\n\n   *To approve this user*, visit [the approved users page for r/" + e + "](https://www.reddit.com/r/" + e + "/about/contributors?user=" + t + ') and click "ADD USER".\n    Approving this user gives them permission to ' + s + ". You can change these community restrictions from the [community settings](/r/" + e + "/about/edit) page.\n\n   To get more information about this user, visit the profile page of [u/" + t + "](/u/" + t + ") or reply to this message to start a conversation."
							}
						})(o, Object(L.e)(a), t, r);
						if ((await Object(E.b)(d(), e)).ok) {
							const e = new Date,
								t = {
									isContributorRequestTimestamp: e.setDate(e.getDate())
								};
							s(Object(p.C)({
								subredditId: c,
								prefs: t
							})), Object(w.h)(c, t, d()), r !== N.e.View && s(Object(l.i)(O.a.CONTRIBUTOR_REQUEST_PENDING))
						}
					}
				}, Se = e => async (t, r) => {
					const s = r(),
						{
							subredditName: n
						} = e,
						d = e.t,
						i = Object(A.a)(e, s),
						o = s.platform.currentPage ? s.platform.currentPage.queryParams : q,
						c = Object(a.a)(n, i, {
							t: d,
							...o
						}),
						u = {
							t: d,
							sort: i,
							...o
						};
					await t(Object(b.subredditDataRequested)(c, n, u, !0))
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
				return c
			})), r.d(t, "q", (function() {
				return a
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
				return E
			})), r.d(t, "z", (function() {
				return T
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "t", (function() {
				return D
			})), r.d(t, "u", (function() {
				return w
			})), r.d(t, "s", (function() {
				return x
			}));
			const s = "SUBREDDIT__ADD_TOP_SUBREDDIT_MODELS",
				n = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS",
				d = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS_PAGE_INFO",
				i = "SUBREDDIT__POSTS_LOADED",
				o = "SUBREDDIT__POSTS_SET_FAILED",
				c = "SUBREDDIT__SUBREDDITS_POSTS_LOADED",
				a = "SUBREDDIT__SUBREDDITS_POSTS_SET_FAILED",
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
				E = "SUBREDDIT_QUESTIONS_LOADED",
				T = "SUBREDDIT_SURVEY_ANSWERED",
				h = "SUBREDDIT_SURVEY_DISMISSED",
				y = "SUBREDDIT_SURVEY_DISMISS",
				D = "SUBREDDIT_ABOUT_INFO_UPDATE__PENDING",
				w = "SUBREDDIT_ABOUT_INFO_UPDATE__SUCCESS",
				x = "SUBREDDIT_ABOUT_INFO_UPDATE__FAILED"
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
				const c = (await ((e, t) => Object(s.a)(e, {
					...n,
					variables: t
				}))(d(), {
					id: e
				})).body;
				o(t, e, null === (i = c.data) || void 0 === i ? void 0 : i.subredditInfoById)
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
				return c
			})), r.d(t, "d", (function() {
				return a
			}));
			const s = "SUBREDDIT__RULES_LOADED",
				n = "SUBREDDIT__RULES_PENDING",
				d = "SUBREDDIT__RULES_FAILED",
				i = "SUBREDDIT__RULE_ADDED",
				o = "SUBREDDIT__RULE_EDITED",
				c = "SUBREDDIT__RULE_REMOVED",
				a = "SUBREDDIT__RULES_REORDERED"
		},
		"./src/reddit/actions/subredditSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return x
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "g", (function() {
				return L
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "f", (function() {
				return U
			})), r.d(t, "d", (function() {
				return G
			})), r.d(t, "j", (function() {
				return M
			})), r.d(t, "i", (function() {
				return Q
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/invert.js"),
				d = r.n(n),
				i = r("./node_modules/lodash/pick.js"),
				o = r.n(i),
				c = r("./node_modules/lodash/xor.js"),
				a = r.n(c),
				u = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/makeActionCreator/index.ts"),
				b = r("./src/reddit/endpoints/subreddit/settings.ts"),
				p = r("./src/telemetry/index.ts"),
				f = r("./src/reddit/actions/gold/powerups.ts"),
				m = r("./src/reddit/actions/toaster.ts"),
				O = r("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				j = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				S = r("./src/reddit/models/User/index.ts"),
				I = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts"),
				E = r("./src/reddit/selectors/subreddit.ts"),
				T = r("./src/reddit/selectors/subredditSettings.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/selectors/widgets.ts"),
				D = r("./src/lib/initializeClient/installReducer.ts"),
				w = r("./src/reddit/reducers/features/powerupsBenefitSettings/index.ts");
			Object(D.a)({
				features: {
					powerupsBenefitSettings: w.a
				}
			});
			const x = "SUBREDDIT_SETTINGS_LOADED",
				A = Object(l.a)(x),
				v = "SUBREDDIT_NOTIFICATION_SETTINGS_LOADED",
				R = Object(l.a)(v),
				C = "SUBREDDIT_NOTIFICATION_SETTINGS_UPDATED",
				N = Object(l.a)(C),
				k = (e, t) => async (r, s, {
					apiContext: n,
					gqlContext: d
				}) => {
					if (!t || !Object(E.U)(s(), t)) {
						const t = await Object(b.c)(n(), e);
						t && t.ok && r(A(t.body))
					}
					if (t && !Object(T.b)(s(), {
							subredditId: t
						})) {
						const e = await Object(O.a)(d(), t);
						if (e && e.ok) {
							const t = e.body,
								s = Object(g.e)(t.data);
							r(R(s))
						}
					}
					t && r(Object(f.k)(t))
				}, L = () => async (e, t, {
					apiContext: r
				}) => {
					const s = Object(h.j)(t());
					s && await e(k(u.dc + Object(S.e)(s)))
				}, P = "SUBREDDIT_SETTINGS_UPDATE_REQUESTED", U = "SUBREDDIT_SETTINGS_UPDATE_SUCCESS", G = "SUBREDDIT_SETTINGS_UPDATE_FAILURE", B = Object(l.a)(P), q = Object(l.a)(U), F = Object(l.a)(G), M = (e, t, r = {}, n = !1, i = {}) => async (c, u, {
					apiContext: l,
					gqlContext: g
				}) => {
					c(B());
					const S = u(),
						h = o()(Object(E.U)(S, e), ...Object.keys(t)),
						D = o()(Object(T.b)(S, {
							subredditId: e
						}), ...Object.keys(r)),
						w = o()(Object(I.a)(S, {
							subredditId: e
						}), ...Object.keys(i)),
						x = await Object(b.g)(l(), e, t),
						A = Object.keys(r).length > 0;
					let v = !0;
					if (A) {
						v = (await Object(O.b)(g(), e, r)).ok
					}
					const R = Object.keys(i).length > 0;
					let C = !0;
					if (R) {
						C = await c(Object(f.l)(e, i))
					}
					if (!x.ok || A && !v || R && !C) c(F()), c(Object(m.f)({
						kind: _.b.Error,
						text: s.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
							hk: "3wBPeO"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: M(e, t, D, void 0, i)
					})), n && Object(p.a)(Object(j.c)(S, "BE returned an error:"));
					else {
						const i = Object(b.d)(x.body, d()(b.a));
						c(q({
							settings: {
								...i,
								subredditId: e
							},
							idCardWidgetId: Object(y.c)(S, {
								subredditId: e
							})
						})), A && c(N({
							notificationSettings: r,
							subredditId: e
						}));
						const o = {};
						n && 0 === a()(Object.keys(t), Object.keys(h)).length && (o.buttonText = s.fbt._("Undo", null, {
							hk: "1Gskii"
						}), o.buttonAction = M(e, h, D, n, w)), c(Object(m.f)({
							kind: _.b.SuccessCommunity,
							text: s.fbt._("Subreddit settings updated successfully", null, {
								hk: "2fmdlZ"
							}),
							...o
						}))
					}
				}, Q = (e, t) => async (r, n, {
					apiContext: d
				}) => {
					(await Object(b.e)(d(), e, t)).ok ? r(Object(m.f)({
						kind: _.b.SuccessCommunity,
						text: s.fbt._("Test message was sent to your inbox", null, {
							hk: "1ZtKzO"
						})
					})) : r(Object(m.f)({
						kind: _.b.Error,
						text: s.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
							hk: "3wBPeO"
						})
					}))
				}
		},
		"./src/reddit/actions/subredditWelcomeMessage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return g
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "f", (function() {
				return T
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/telemetry/index.ts"),
				d = r("./src/reddit/actions/login.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/constants/modals.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/GetSubredditWelcomeMessage.json"),
				u = r("./src/redditGQL/operations/UpdateSubredditWelcomeMessage.json");
			const l = e => {
				if (e) return {
					...e
				}
			};
			var b = r("./src/reddit/helpers/trackers/welcomeMessage.ts"),
				p = r("./src/reddit/selectors/experiments/subredditWelcomeMessage.ts"),
				f = r("./src/reddit/selectors/platform.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/selectors/welcomeMessage.ts");
			const g = () => async e => {
				await e(Object(i.g)(o.a.SUBREDDIT_WELCOME_MESSAGE))
			}, j = e => async (t, r, {
				gqlContext: s
			}) => {
				const n = r(),
					d = Object(f.d)(n);
				if (!d) return;
				const i = await ((e, t) => Object(c.a)(e, {
					...a,
					variables: t
				}))(s(), {
					subredditName: d
				});
				if (i.ok) {
					const r = (e => {
						var t, r;
						const s = null === (r = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.subredditInfoByName) || void 0 === r ? void 0 : r.welcomeMessage;
						return l(s)
					})(i.body);
					r && t(T({
						subredditId: e,
						welcomeMessage: r
					}))
				}
			}, _ = e => async (t, r) => {
				const s = r(),
					c = Object(O.a)(s, e),
					a = Object(p.a)(s),
					u = (null == c ? void 0 : c.isEnabled) && (null == c ? void 0 : c.isRenderedOnJoin) && a,
					l = Object(m.J)(s);
				l && u ? (Object(n.a)(Object(b.b)()(s)), await t(Object(i.h)(o.a.SUBREDDIT_WELCOME_MESSAGE))) : l || await t(Object(d.h)())
			}, S = e => async (t, r) => {
				let s = r(),
					n = Object(O.a)(s, e);
				n || (await t(j(e)), s = r(), n = Object(O.a)(s, e)), n && await t(Object(i.h)(o.a.SUBREDDIT_WELCOME_MESSAGE))
			}, I = (e, t, r) => async (s, n, {
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
						...u,
						variables: t
					}))(d(), {
						input: i
					});
				if (o.ok) {
					const t = (e => {
						var t, r;
						const s = null === (r = null === (t = null == e ? void 0 : e.data.updateSubredditSettings) || void 0 === t ? void 0 : t.subreddit) || void 0 === r ? void 0 : r.welcomeMessage;
						return l(s)
					})(o.body);
					t && s(T({
						subredditId: e,
						welcomeMessage: t
					}))
				}
			}, E = "SUBREDDIT_WELCOME_MESSAGE__LOADED", T = Object(s.a)(E)
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
				return c
			})), r.d(t, "m", (function() {
				return a
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
				return E
			})), r.d(t, "y", (function() {
				return T
			})), r.d(t, "C", (function() {
				return h
			})), r.d(t, "x", (function() {
				return y
			})), r.d(t, "B", (function() {
				return D
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "a", (function() {
				return R
			})), r.d(t, "i", (function() {
				return C
			}));
			const s = "TAGS__REQUESTED",
				n = "TAGS__AVAILABLE_LOADED",
				d = "TAGS__LOADED",
				i = "TAGS__FAILURE",
				o = "TAGS__RELEVANCE_LOADED",
				c = "TAGS__CREATE_REQUESTED",
				a = "TAGS__CREATE_SUCCESS",
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
				E = "TAGS__SUGGESTED_OPTION_SELECTED",
				T = "TAGS__OPTION_DESELECTED",
				h = "TAGS__SUGGESTED_OPTION_DESELECTED",
				y = "TAGS__INPUT_CHANGED",
				D = "TAGS__SUGGESTED_INPUT_CHANGED",
				w = "GLOBAL__TAGS__LOADED",
				x = "CREATION__TAGS_INPUT_CHANGED",
				A = "CREATION__TAGS_OPTION_SELECTED",
				v = "CREATION__TAGS_OPTION_DESELECTED",
				R = "CREATION__PRIMARY_TAG_SELECTED",
				C = "SETTINGS_PAGE_PRIMARY_TAG_UPDATE"
		},
		"./src/reddit/actions/tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "n", (function() {
				return N
			})), r.d(t, "q", (function() {
				return k
			})), r.d(t, "m", (function() {
				return L
			})), r.d(t, "p", (function() {
				return P
			})), r.d(t, "l", (function() {
				return U
			})), r.d(t, "o", (function() {
				return G
			})), r.d(t, "c", (function() {
				return B
			})), r.d(t, "b", (function() {
				return q
			})), r.d(t, "a", (function() {
				return F
			})), r.d(t, "d", (function() {
				return J
			})), r.d(t, "j", (function() {
				return W
			})), r.d(t, "k", (function() {
				return H
			})), r.d(t, "f", (function() {
				return K
			})), r.d(t, "i", (function() {
				return Z
			})), r.d(t, "h", (function() {
				return ee
			})), r.d(t, "e", (function() {
				return te
			})), r.d(t, "r", (function() {
				return re
			})), r.d(t, "g", (function() {
				return se
			})), r.d(t, "s", (function() {
				return ne
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
			var c = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/CreateSubredditTags.json");
			var u = r("./src/redditGQL/operations/FetchGlobalTags.json"),
				l = r("./src/redditGQL/operations/FetchSubredditTags.json");
			const b = (e, {
				subredditId: t,
				pageSize: r = 1050,
				after: s,
				includeAvailableTags: n
			}) => Object(c.a)(e, {
				...l,
				variables: {
					subredditId: t,
					pageSize: r,
					after: s,
					includeAvailableTags: n
				}
			});
			var p = r("./src/redditGQL/operations/MaybeDeleteTagsAndUpdateItemTags.json");
			var f = r("./src/redditGQL/operations/UpdateSubredditTagStatesRelevance.json");
			var m = r("./src/redditGQL/operations/UpdateSubredditPrimaryTag.json");
			var O = r("./src/reddit/helpers/tags/index.ts"),
				g = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				j = r("./src/reddit/models/Tags/index.ts"),
				_ = r("./src/reddit/models/Toast/index.ts"),
				S = r("./src/reddit/reducers/tags/selected/index.ts"),
				I = r("./src/reddit/selectors/tags.ts");
			const E = Object(n.a)(d.e),
				T = Object(n.a)(d.t),
				h = Object(n.a)(d.r),
				y = Object(n.a)(d.s),
				D = Object(n.a)(d.q),
				w = Object(n.a)(d.l),
				x = Object(n.a)(d.m),
				A = Object(n.a)(d.k),
				v = Object(n.a)(d.v),
				R = Object(n.a)(d.w),
				C = Object(n.a)(d.u),
				N = Object(n.a)(d.z),
				k = Object(n.a)(d.D),
				L = Object(n.a)(d.y),
				P = Object(n.a)(d.C),
				U = Object(n.a)(d.x),
				G = Object(n.a)(d.B),
				B = Object(n.a)(d.d),
				q = Object(n.a)(d.c),
				F = Object(n.a)(d.b),
				M = Object(n.a)(d.g),
				Q = Object(n.a)(d.h),
				$ = Object(n.a)(d.f),
				J = Object(n.a)(d.a),
				W = Object(n.a)(d.i),
				z = Object(n.a)(d.A),
				H = (e, t, r = !1) => async (n, d, {
					gqlContext: c
				}) => {
					const a = d();
					n(T());
					const u = await b(c(), {
							subredditId: e
						}),
						l = u.body;
					if (u.ok && l.data.subredditInfoById.secondaryTags && l.data.subredditInfoById.availableTags && l.data.subredditInfoById.suggestedTags) n(h(o(l.data))), r && g.h(d(), e, {
						context: t
					});
					else {
						n(D());
						const d = r ? "topics_save" : "topics_load";
						g.g(a, e, d, {
							context: t
						}), n(Object(i.f)(Object(i.e)(s.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
							hk: "2DUkWX"
						}), _.b.Error, s.fbt._("Retry", null, {
							hk: "1c2xrJ"
						}), H(e, t, r))))
					}
				}, V = e => async (t, r, {
					gqlContext: n
				}) => {
					t(T());
					const d = await b(n(), {
						subredditId: e
					});
					if (d.ok) {
						const e = d.body;
						t(y(o(e.data)))
					} else t(D()), t(Object(i.f)(Object(i.e)(s.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
						hk: "2DUkWX"
					}), _.b.Error, s.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), y(e))))
				}, K = () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t();
					if (Object(I.r)(s)) return;
					e(T());
					const n = await ((e, {
						pageSize: t = 1050,
						after: r
					}) => Object(c.a)(e, {
						...u,
						variables: {
							pageSize: t,
							after: r
						}
					}))(r(), {});
					if (n.ok) {
						const t = n.body;
						e(E((e => {
							return {
								globalSubredditTags: e.globalTags.edges.reduce((e, t) => (e[t.node.id] = t.node, e), {})
							}
						})(t.data)))
					}
				}, Y = (e, t) => async (r, s, {
					gqlContext: n
				}) => {
					if (!t.length) return null;
					r(w());
					const d = t.map(t => ({
							subredditId: e,
							...t
						})),
						i = await ((e, t) => Object(c.a)(e, {
							...a,
							variables: t
						}))(n(), {
							input: d
						}),
						o = i.body && i.body.data || null;
					return i.ok && o && o.createSubredditTags && o.createSubredditTags.ok ? (r(x()), o.createSubredditTags.createdTags || []) : (r(A()), null)
				}, X = (e, t, r = []) => async (s, n, {
					gqlContext: d
				}) => {
					if (!t.length && !r.length) return;
					s(v());
					const i = n(),
						a = Object(I.d)(i, {
							subredditId: e
						}),
						u = Object(I.s)(i, {
							itemId: e
						}),
						l = Object(I.D)(i, {
							itemId: e
						}),
						b = new Set;
					for (const e of t)
						if (e.state === j.d.NONE && a[e.tagId] && !l[e.tagId]) {
							!!r.find(t => t.state === j.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
						} for (const e of r)
						if (e.state === j.d.NONE && a[e.tagId] && !u[e.tagId]) {
							!!t.find(t => t.state === j.d.TAGGED && t.tagId === e.tagId) || b.add(e.tagId)
						} const f = await ((e, t) => Object(c.a)(e, {
							...p,
							variables: {
								...t,
								deleteTags: 0 !== t.deleteTagsInput.length,
								pageSize: 1050
							}
						}))(d(), {
							deleteTagsInput: [...b].map(e => ({
								tagId: e
							})),
							updateTagStatesInput: {
								subredditId: e,
								suggestedTagStates: r,
								tagStates: t
							}
						}),
						m = f.body && f.body.data || null;
					f.ok && m && m.updateSubredditTagStates && m.updateSubredditTagStates.ok && m.updateSubredditTagStates.subreddit ? s(R(o({
						subredditInfoById: m.updateSubredditTagStates.subreddit
					}))) : s(C())
				}, Z = (e, t, r = !1) => async (n, d, o) => {
					const c = d(),
						a = Object(I.u)(c, {
							subredditId: e
						}),
						u = Object(I.G)(c, {
							subredditId: e
						});
					let l = a.filter(e => !!e.id && !!e.action).map(e => ({
						tagId: e.id,
						state: e.action === S.a.ADD ? j.d.TAGGED : j.d.NONE
					}));
					if (u.length > 0) {
						const t = await Y(e, u)(n, d, o);
						l = l.concat((t || []).map(e => ({
							tagId: e.id,
							state: j.d.TAGGED
						})))
					}
					await X(e, l)(n, d, o), Object(I.E)(d()) ? n(Object(i.f)(Object(i.e)(s.fbt._("Yikes! It looks like we didn't save all of your topics. Please try again", null, {
						hk: "2Jbh5V"
					}), _.b.Error, s.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), Z(e, t, r)))) : r && n(Object(i.f)(Object(i.e)(s.fbt._("Community topics saved!", null, {
						hk: "3wtajT"
					}), _.b.SuccessCommunity)))
				}, ee = (e, t, r) => async (r, n, d) => {
					const o = {
						state: j.d.TAGGED
					};
					if (Object(O.b)(t)) {
						const s = await Y(e, [{
							text: t.displayText,
							type: j.c.CLASSIFICATION
						}])(r, n, d);
						s && 1 === s.length && (o.tagId = s[0].id)
					} else {
						if (!t.id) return void r(Object(i.f)(Object(i.e)(s.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
							hk: "CxjiK"
						}), _.b.Error)));
						o.tagId = t.id
					}(e => !!e.tagId && !!e.state)(o) ? await X(e, [], [o])(r, n, d): r(Object(i.f)(Object(i.e)(s.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
						hk: "CxjiK"
					}), _.b.Error)))
				}, te = (e, t, r) => async (s, n, d) => {
					t.id ? await X(e, [], [{
						state: j.d.NONE,
						tagId: t.id
					}])(s, n, d) : s(H(e, r, !1))
				}, re = (e, t, r, n, d = !1) => async (o, a, {
					gqlContext: u
				}) => {
					if (!(await ((e, t) => Object(c.a)(e, {
							...f,
							variables: t
						}))(u(), {
							input: {
								tagStatesRelevance: t,
								suggestedTagStatesRelevance: r
							}
						})).ok) return o(Object(i.f)(Object(i.e)(s.fbt._("Whoops! Unable to update topics relevance status", null, {
						hk: "17akdT"
					}), _.b.Error, s.fbt._("Retry", null, {
						hk: "1wqK2v"
					}), re(e, t, r, n, d)))), void o(V(e));
					if (d)
						for (const e of r) g.f(a(), e, {
							context: n
						});
					o(Object(i.f)(Object(i.e)(s.fbt._("Successfully updated topics relevance!", null, {
						hk: "3KIYlz"
					}), _.b.SuccessCommunity, s.fbt._("Undo", null, {
						hk: "34apPL"
					}), re(e, t.map(e => ({
						...e,
						isRelevant: !e.isRelevant
					})), r.map(e => ({
						...e,
						isRelevant: !e.isRelevant
					})), n, d)))), o(V(e))
				}, se = e => async (t, r) => {
					t(z({
						itemTagsState: {
							[e]: Object(I.s)(r(), {
								itemId: e
							})
						}
					}))
				}, ne = (e, t, r = !0) => async (n, d, {
					gqlContext: o
				}) => {
					const a = Object(I.B)(d(), {
						subredditId: e
					});
					if ((null == a ? void 0 : a.id) === t.tagId && t.state === j.d.TAGGED) return;
					n(M());
					const u = await ((e, t) => Object(c.a)(e, {
							...m,
							variables: t
						}))(o(), {
							input: {
								subredditId: e,
								primaryTagState: t
							}
						}),
						l = u.body && u.body.data || null;
					u.ok && l && l.updateSubredditTagStates && l.updateSubredditTagStates.ok ? (n(Q((e => {
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
					}), _.b.SuccessCommunity)))) : (n($()), n(Object(i.f)(Object(i.e)(s.fbt._("Whoops! Unable to update primary topic", null, {
						hk: "3ilZqp"
					}), _.b.Error, s.fbt._("Retry", null, {
						hk: "1dRYXW"
					}), ne(e, t)))))
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
				return E
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "k", (function() {
				return D
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/CreateCustomEmoji.json"),
				d = r("./src/redditGQL/operations/DeleteCustomEmoji.json"),
				i = r("./src/redditGQL/operations/EnablePowerups.json"),
				o = r("./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json"),
				c = r("./src/redditGQL/operations/ReallocatePowerups.json"),
				a = r("./src/redditGQL/operations/RedditorPowerups.json"),
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
				...a
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
			}, E = (e, t) => Object(s.a)(e, {
				...c,
				variables: t
			}), T = (e, t) => Object(s.a)(e, {
				...o,
				variables: t
			}), h = (e, t) => Object(s.a)(e, {
				...n,
				variables: t
			}), y = (e, t) => Object(s.a)(e, {
				...d,
				variables: t
			}), D = async (e, t, r) => {
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
				c = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t) => Object(d.a)(Object(o.a)(e, [c.a]), {
					endpoint: Object(a.a)(`${e.apiUrl}/api/compose`),
					method: n.hb.POST,
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
				c = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				a = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const u = (e, t, r) => Object(d.a)(e, {
					endpoint: Object(a.a)(Object(c.a)(`${s.a.gatewayUrl}/desktopapi/v1/${t}`)),
					method: n.hb.GET,
					data: {
						moderated_limit: 25,
						...r
					}
				}),
				l = (e, t, r) => Object(d.a)(Object(i.a)(e, [o.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/${t}`,
					method: n.hb.POST,
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
				method: s.hb.GET,
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
				c = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/lib/performanceTimings/index.tsx"),
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
						layout: c,
						limit: a,
						recentPostIds: b,
						sort: f,
						t: m
					} = r, O = Object(j.Q)(e), _ = Object(g.o)(e), S = Object(d.a)(t), I = Object(i.a)(t), E = {
						name: t,
						includeIdentity: O && !e.user.account,
						adContext: {
							layout: c ? c.toUpperCase() : u.a.Card,
							reddaid: e.user.reddaid
						},
						isFake: I,
						includeRecents: I && b && b.length > 0 || !1,
						includeTrending: I,
						isAdHocMulti: S,
						isAll: t === l.c.All,
						isPopular: t === l.c.Popular,
						recentPostIds: b || [],
						subredditNames: S ? t.split("+") : []
					};
					return f && (E.sort = f.toUpperCase()), m && (E.range = m.toUpperCase()), o ? E.pageSize = Object(p.a)(c) : a && (E.pageSize = a), _ && _.ad && (E.forceAds = {
						ad: _.ad
					}), (_ && _.geo_filter || n) && (E.region = _ && _.geo_filter || n), s && (E.after = btoa(s)), E
				},
				I = async (e, t, r) => {
					const s = Date.now(),
						d = await ((e, t) => Object(c.a)(e, {
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
							logKeyType: a.a.gqlFetchTiming
						}, {
							duration: b - u,
							logKeyType: a.a.gqlNormalizationTiming
						}];
					return Object(a.h)({
						name: n.q.SUBREDDIT,
						isLoggedIn: r,
						metrics: p
					}), {
						...d,
						ok: !!o.data.subredditInfoByName && !Object(O.j)(o.data.subredditInfoByName),
						status: E(o.data),
						body: l
					}
				}, E = e => {
					if (!e.subredditInfoByName) return 404;
					if (Object(O.j)(e.subredditInfoByName)) {
						if (e.subredditInfoByName.forbiddenReason === O.c.Banned) return 404;
						if (e.subredditInfoByName.forbiddenReason === O.c.GoldOnly || e.subredditInfoByName.forbiddenReason === O.c.Private || e.subredditInfoByName.forbiddenReason === O.c.Quarantined) return 403
					}
					return 200
				}, T = ({
					recentPostIds: e,
					...t
				}) => e && e.length ? {
					...t,
					recentPostIds: e.join(",")
				} : t;
			t.a = (e, t, r) => Object(o.a)(e, {
				endpoint: Object(b.a)(Object(m.a)(`${s.a.gatewayUrl}/desktopapi/v1/subreddits/${t}`)),
				method: n.hb.GET,
				data: r && T(r) || {},
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
				return E
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "h", (function() {
				return D
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "a", (function() {
				return N
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/omit.js"),
				d = r.n(n),
				i = r("./src/config.ts"),
				o = r("./src/lib/addQueryParams/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/constants/headers.ts"),
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
					method: c.hb.GET,
					headers: d()(e.headers(), [a.c, a.b]),
					timeoutMs: void 0
				}).then(v)
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
			}), E = async (e, t) => Object(l.b)({
				endpoint: `${_()}/videos/${t}`,
				method: c.hb.GET,
				headers: d()(e.headers(), [a.c, a.b])
			}).then(v), T = async (e, t, r) => {
				let s;
				s = t === b.R ? "/broadcasts" : `/${t}/broadcasts`;
				const n = Object(o.a)(s, {
					cursor: null == r ? void 0 : r.cursor,
					page_size: null == r ? void 0 : r.pageSize
				});
				return Object(l.b)({
					endpoint: `${_()}${n}`,
					method: c.hb.GET,
					headers: d()(e.headers(), [a.c, a.b])
				}).then(v)
			}, h = async e => Object(l.b)({
				endpoint: `${_()}/recommended_viewer_subreddits`,
				method: c.hb.GET,
				headers: d()(e.headers(), [a.c, a.b])
			}).then(v), y = async (e, t, r) => Object(l.b)({
				endpoint: `${_()}/videos/${t}/vote/${R(r)}`,
				method: c.hb.POST,
				headers: d()(e.headers, [a.c, a.b])
			}).then(v), D = async (e, t) => Object(l.b)({
				endpoint: `${_()}/videos/${t}/heartbeat`,
				method: c.hb.POST,
				headers: d()(e.headers(), [a.c, a.b])
			}).then(v), w = async (e, t, r, s) => {
				const n = r.rteState;
				if (!n) return Promise.reject(new Error("Editor state is undefined"));
				const d = p.a.getRawText(n);
				return d ? x(e, t, d).then(e => e.ok && e.body && e.body.data ? {
					...e,
					body: {
						parentId: t,
						comment: {
							...Object(m.a)(e.body.data.r2_comment, s),
							media: A(n)
						},
						automuteLevel: e.body.data.auto_mute_status.level
					},
					error: void 0
				} : e) : Promise.reject(new Error("Cannot send empty message"))
			}, x = async (e, t, r) => Object(l.b)({
				endpoint: `${_()}/broadcasts/${t}/comment_v2`,
				method: c.hb.POST,
				headers: d()(e.headers, [a.c, a.b]),
				data: {
					text: r
				},
				type: "json"
			}).then(v), A = e => ({
				type: "rtjson",
				richtextContent: {
					document: p.a.toRichTextJSON(e).document
				},
				rteMode: O.h.RICH_TEXT
			}), v = e => {
				if (e.ok) return {
					...e,
					error: void 0
				}; {
					const t = {
						type: 404 === e.status ? c.G.NOT_FOUND_ERROR : c.G.SERVER_ERROR
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
			}, R = e => e === g.a.upvoted ? "up" : e === g.a.downvoted ? "down" : "unset", C = async (e, t, r) => Object(l.b)({
				endpoint: `${_()}/broadcasts/${t}`,
				method: c.hb.PUT,
				headers: d()(e.headers, [a.c, a.b]),
				data: {
					data: {
						chat_disabled: r
					}
				},
				type: "json"
			}).then(v), N = async (e, t) => Object(l.b)({
				endpoint: `${_()}/broadcasts/${t}/auto_mute_status`,
				method: c.hb.GET,
				headers: d()(e.headers, [a.c, a.b])
			}).then(v)
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
				return T
			}));
			var s = r("./node_modules/lodash/camelCase.js"),
				n = r.n(s),
				d = r("./node_modules/lodash/mapKeys.js"),
				i = r.n(d),
				o = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
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
				O = (e, t) => Object(a.a)(e, {
					...l,
					variables: {
						subredditName: t
					}
				}).then(e => (e.ok && e.body && (e.body = Object(p.a)(e.body)), e)),
				g = (e, t) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/user/${t}/about/rules.json`,
					method: o.hb.GET
				}).then(e => (e.ok && e.body.rules && (e.body = m(e.body)), e)),
				j = e => e.ok ? (e.body = Object(f.h)(JSON.parse(e.body.json.data.rules)), e) : e.body,
				_ = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/add_subreddit_rule`,
					method: o.hb.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === f.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), S = async (e, t, r, s) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/update_subreddit_rule`,
					method: o.hb.POST,
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
				}).then(e => j(e)), I = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/remove_subreddit_rule`,
					method: o.hb.POST,
					data: {
						r: t,
						short_name: r,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), E = e => e.map(e => encodeURIComponent(e)).join(), T = async (e, t, r) => Object(c.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/reorder_subreddit_rules`,
					method: o.hb.POST,
					data: {
						r: t,
						new_rule_order: E(r),
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
			const c = (e, {
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
				profiles: a,
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
						profiles: a
					};
				for (let n = 0; n < m.length; n++) {
					const r = m[n];
					let s = !1;
					if (r.isSponsored) {
						const e = n > 0 && m[n - 1],
							t = n < m.length - 1 && m[n + 1];
						e && c(e, j) && t && c(t, j) && (s = !0)
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
					profiles: a,
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
					case s.g.LEFT:
						return s.b.Left;
					case s.g.RIGHT:
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
				return S
			}));
			var s = r("./src/lib/assertNever.ts"),
				n = r("./src/lib/env/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/models/Post/index.ts"),
				o = r("./src/reddit/models/RichTextJson/index.ts"),
				c = r("./src/reddit/models/Subreddit/index.ts"),
				a = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				b = r("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeSubredditModPermissions/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				_ = r("./src/reddit/helpers/graphql/helpers.ts");
			const S = (e, t, r) => {
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
					c = e => {
						if (Object(i.j)(e) || Object(i.i)(e)) return null;
						if (o.posts[e.id]) return e.id;
						const t = Object(l.e)(e);
						o.posts[t.id] = t;
						const {
							crosspostRoot: r
						} = e;
						r && r.type === i.a.Post && r.postInfo && c(r.postInfo);
						let b = t.id;
						if (e.authorFlair && (o.authorFlair[t.belongsTo.id] || (o.authorFlair[t.belongsTo.id] = {}), o.authorFlair[t.belongsTo.id][t.author] = Object(a.a)(e.authorFlair)[0]), Object(i.l)(e)) o.profiles[e.profile.id] || (o.profiles[e.profile.id] = Object(p.a)(e.profile));
						else if (Object(i.m)(e)) o.subreddits[e.subreddit.id] || (o.subreddits[e.subreddit.id] = Object(m.a)(e.subreddit)), o.postFlair[e.subreddit.id] || (o.postFlair[e.subreddit.id] = Object(u.a)(e.subreddit));
						else if (Object(i.h)(e)) {
							const r = Object(l.b)(e);
							if (!r) return null;
							b = r, o.posts[r] = {
								...t,
								id: r,
								permalink: `${t.permalink}?instanceId=${encodeURIComponent(r)}`
							}, o.posts[t.id] || (o.posts[t.id] = {
								...t,
								events: []
							}), o.postInstances[e.id] || (o.postInstances[e.id] = []), o.postInstances[e.id].push(r)
						} else try {
							Object(s.a)(e)
						} catch (f) {
							const t = `Received unhandled element type when processing subreddit posts: "${e.__typename}"`;
							Object(n.b)() || console.warn(t), d.c.captureMessage(t)
						}
						return b && o.postIds.push(b), b
					};
				if (e.forEach(e => c(e)), t) {
					o.trendingSubredditIds = t.map(e => e.id);
					for (const e of t) o.subreddits[e.id] = Object(m.a)(e)
				}
				const f = o.postIds.length - 1;
				return o.token = f >= 0 ? o.postIds[f] : "", r && (o.account = Object(j.a)(r), o.preferences = r.preferences && Object(b.a)(r.preferences, r.interactions) || null), o
			};
			t.a = ({
				adhocMultiredditByNames: e,
				all: t,
				identity: r,
				popular: s,
				recentPosts: a,
				subredditInfoByName: u,
				trendingSubreddits: l
			}) => {
				if (!u) return {
					reason: c.e.NotFoundSubreddit,
					data: {
						account: r && Object(j.a)(r) || null
					}
				};
				if (Object(c.j)(u)) {
					const {
						banMessage: e,
						publicDescriptionText: t,
						quarantineMessage: s,
						isEmailRequiredForQuarantineOptin: n
					} = u;
					return {
						reason: I(u.forbiddenReason),
						data: {
							account: r && Object(j.a)(r) || null,
							banMessage: e || void 0,
							description: t,
							quarantineRequiresEmailOptin: n,
							...s ? {
								quarantineMessage: s.markdown,
								quarantineMessageRTJson: Object(_.f)(s.richtext, o.i)
							} : {}
						}
					}
				}
				const b = u || s || t || e,
					[p, m] = b.elements.edges.reduce((e, t) => {
						const [r, s] = e, n = t.node;
						return Object(i.k)(n) ? r.push(n) : s.push(n), [r, s]
					}, [
						[],
						[]
					]);
				if (m.length) {
					const e = `Received unhandled ${m.length} elements when processing subreddit data: "${m[0].__typename}"`;
					Object(n.b)() || console.warn(e), d.c.captureMessage(e)
				}
				a && p.push(...a);
				const E = b.elements.dist,
					T = S(p, l, r);
				return u && u.styles && (T.structuredStyles = {
					data: {
						style: Object(g.a)(u.styles)
					}
				}), u && (T.subredditAboutInfo = Object(f.a)(u), u.modPermissions && (T.subredditPermissions = Object(O.a)(u.modPermissions)), u.welcomeMessage && (T.welcomeMessage = u.welcomeMessage)), {
					...T,
					...null !== E && {
						dist: E
					}
				}
			};
			const I = e => {
				switch (e) {
					case c.c.Banned:
						return c.e.BannedSubreddit;
					case c.c.GoldOnly:
						return c.e.GoldSubreddit;
					case c.c.Private:
						return c.e.PrivateSubreddit;
					case c.c.Quarantined:
						return c.e.QuarantinedSubreddit;
					case c.c.Unknown:
						return c.e.ForbiddenSubreddit
				}
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/helpers/graphql/helpers.ts"),
				n = r("./src/reddit/models/Rule/index.ts");
			t.a = e => {
				return {
					rules: (e.data.subreddit && e.data.subreddit.rules || []).map(e => ({
						kind: n.c[e.kind],
						description: e.content.markdown,
						descriptionRichText: e.content.richtext,
						shortName: e.name,
						violationReason: e.violationReason || "",
						createdUtc: Object(s.e)(e.createdAt, s.a.Millis),
						priority: e.priority
					}))
				}
			}
		},
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/helpers/isComment.ts"),
				d = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				i = r("./src/reddit/models/Vote/index.ts"),
				o = e => !0 === e ? i.a.upvoted : !1 === e ? i.a.downvoted : i.a.notVoted,
				c = r("./src/reddit/models/Comment/index.ts");
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
					isDeleted: e.author === s.C,
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
						richtextContent: a(e.rtjson),
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
			const a = e => "string" == typeof e ? JSON.parse(e) : e,
				u = e => e.author !== s.C ? null : e.body === s.D ? c.c.User : e.body === s.Hb ? c.c.Moderator : null
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
					const s = Object(n.B)(e, {
						subredditId: t
					});
					return !!s && s.id === r
				},
				c = (e, t) => Object(n.y)(e, {
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
				a = (e, t, r) => {
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
						...c(e, t)
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
						topicTag: a(e, t, r),
						noun: "add_related_topic"
					})
				},
				f = (e, t, r, s) => {
					return !Object(n.l)(e, {
						subredditId: t
					}) && r.id ? Object(i.a)(((e, t, r, s) => ({
						...l(e, t, s),
						topicTag: a(e, t, r),
						noun: "topic_auto_suggest"
					}))(e, t, r, s)) : r.id ? Object(i.a)(((e, t, r, s) => ({
						...l(e, t, s),
						topicTag: a(e, t, r),
						noun: "topic_auto_complete"
					}))(e, t, r, s)) : Object(i.a)(((e, t, r, s) => ({
						...l(e, t, s),
						topicTag: a(e, t, r),
						noun: "topic_add_new"
					}))(e, t, r, s))
				},
				m = (e, t, r, s) => Object(i.a)({
					...l(e, t, s),
					topicTag: a(e, t, r),
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
				return c
			})), r.d(t, "a", (function() {
				return a
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
				c = e => ({
					source: "id_card",
					noun: s.EditSubredditIcon,
					action: n.c.CLICK,
					...i(e)
				}),
				a = e => ({
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
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "s", (function() {
				return i
			})), r.d(t, "m", (function() {
				return o
			})), r.d(t, "o", (function() {
				return c
			})), r.d(t, "t", (function() {
				return u
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "l", (function() {
				return b
			})), r.d(t, "k", (function() {
				return p
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "p", (function() {
				return m
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "q", (function() {
				return S
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "n", (function() {
				return T
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "r", (function() {
				return D
			}));
			var s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const d = (e, t, r) => ({
					...n.defaults(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					profile: n.profile(e),
					subreddit: n.subreddit(e),
					powerups: {
						...n.subredditPowerups(e),
						freeCount: t,
						paidCount: r
					}
				}),
				i = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...d(t),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				o = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersup_become_hero",
					...d(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersups_see_all_heroes",
					...d(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				a = e => (t, r) => s => ({
					source: e,
					action: "click",
					noun: "powerup_supporter",
					...d(s),
					profile: {
						id: t,
						name: r,
						type: "default"
					}
				}),
				u = a("postlist_supporters_cta"),
				l = a("comm_heroes_modal"),
				b = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...d(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				p = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...d(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				f = e => t => ({
					source: "powerups",
					action: "click",
					noun: "join_supporters",
					...d(t),
					actionInfo: n.actionInfo(t, {
						reason: e
					})
				}),
				m = () => e => ({
					source: "powerups",
					action: "click",
					noun: "premium",
					...d(e)
				}),
				O = e => t => ({
					source: "powerups_modal",
					action: "view",
					noun: "marketing_step",
					...d(t),
					actionInfo: n.actionInfo(t, {
						reason: e
					})
				}),
				g = e => t => ({
					source: "powerups",
					action: "click",
					noun: "benefit",
					...d(t),
					powerups: {
						...n.subredditPowerups(t),
						benefit: e
					}
				}),
				j = (e, t) => r => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...d(r, e, t)
				}),
				_ = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...d(r, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				S = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...d(e),
					correlationId: Object(s.d)(s.a.PowerupsFlow, !0)
				}),
				I = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...d(e)
				}),
				E = e => t => ({
					source: "powerups",
					action: "click",
					noun: "add_custom_emojis",
					...d(t),
					powerups: {
						...n.subredditPowerups(t),
						emojiCount: e
					}
				}),
				T = e => t => ({
					source: "powerups",
					action: "save",
					noun: "custom_emojis",
					...d(t),
					powerups: {
						...n.subredditPowerups(t),
						emojiCount: e
					}
				}),
				h = (e = 1) => t => ({
					source: "powerups",
					action: "delete",
					noun: "custom_emojis",
					...d(t),
					powerups: {
						...n.subredditPowerups(t),
						emojiCount: e
					}
				}),
				y = (e, t) => r => ({
					source: "meta",
					action: "open",
					noun: "gif_tooltip",
					subreddit: t ? n.subredditById(r, t) : void 0,
					...d(r),
					correlationId: e
				}),
				D = (e, t, r) => s => ({
					source: "powerups_settings",
					action: "click",
					noun: e,
					setting: {
						value: String(t),
						oldValue: String(r)
					},
					subreddit: n.subreddit(s),
					...n.defaults(s)
				})
		},
		"./src/reddit/helpers/trackers/welcomeMessage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/reddit/selectors/telemetry.ts");
			const n = (e, t) => r => ({
					...s.defaults(r),
					source: "sheet",
					action: e,
					noun: "welcome_message",
					subreddit: s.subreddit(r),
					actionInfo: s.actionInfo(r, {
						...t && {
							reason: t
						}
					})
				}),
				d = () => n("view"),
				i = () => n("click", "lets_go")
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
				return c
			})), r.d(t, "a", (function() {
				return a
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
				c = 100,
				a = 500,
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
				return c
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
			var c;
			! function(e) {
				e.TAGGED = "TAGGED", e.NONE = "NONE"
			}(c || (c = {}))
		},
		"./src/reddit/reducers/features/powerupsBenefitSettings/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/actions/gold/constants.ts");
			const n = {};
			t.a = (e = n, t) => {
				var r, d;
				switch (t.type) {
					case s.pb:
					case s.qb: {
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
					case s.N: {
						const {
							benefitStatuses: r,
							subredditId: s
						} = t.payload, n = null !== (d = e[s]) && void 0 !== d ? d : {}, i = {};
						return r.forEach(({
							benefit: e,
							isEnabled: t
						}) => {
							i[e] = t
						}), {
							...e,
							[s]: {
								...n,
								...i
							}
						}
					}
					default:
						return e
				}
			}
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
				c = r("./src/reddit/actions/tags/constants.ts"),
				a = r("./src/reddit/models/Option/index.ts"),
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
					case c.w:
					case c.r: {
						const {
							subredditId: r,
							itemTags: s,
							suggestedItemTags: n,
							primaryTag: i
						} = t.payload, c = d()([...(e.selectedOptions[r] || []).map(e => {
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
						}))], a.a);
						let l = e.selectedPrimaryTagId;
						return i && (l = {
							...l,
							[r]: i.tag.id
						}), {
							...e,
							selectedOptions: {
								...e.selectedOptions,
								[r]: c.map(e => ({
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
					case c.D:
					case c.z: {
						const {
							subredditId: r,
							option: n
						} = t.payload, i = t.type === c.z ? "selectedOptions" : "selectedSuggestedOptions", o = t.type === c.z ? "deselectedOptions" : "deselectedSuggestedOptions", u = (e[o][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, n));
						let b = s.ADD;
						return l > -1 && (b = null, u.splice(l, 1)), {
							...e,
							[i]: {
								...e[i],
								[r]: d()([...e[i][r] || [], {
									...n,
									action: b
								}], a.a)
							},
							[o]: {
								...e[o],
								[r]: u
							}
						}
					}
					case c.C:
					case c.y: {
						const {
							subredditId: r,
							option: n
						} = t.payload, d = t.type === c.y ? "selectedOptions" : "selectedSuggestedOptions", i = t.type === c.y ? "deselectedOptions" : "deselectedSuggestedOptions", o = (e[i][r] || []).slice(), u = (e[d][r] || []).slice(), l = u.findIndex(e => Object(a.a)(e, n));
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
					case c.A: {
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
					case c.B:
					case c.x: {
						const {
							subredditId: r,
							input: s
						} = t.payload, n = t.type === c.x ? "inputByItemId" : "suggestedInputByItemId";
						return {
							...e,
							[n]: {
								...e[n],
								[r]: s
							}
						}
					}
					case c.i:
					case c.h: {
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
				return c
			})), r.d(t, "e", (function() {
				return a
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
				return T
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/objectSelector/index.ts"),
				d = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = r("./src/reddit/helpers/publicAccessNetwork/index.ts");
			const o = e => e.publicAccessNetwork.api.config,
				c = (e, t) => !!t && !!e.publicAccessNetwork.api.error[Object(i.g)(t)],
				a = e => c(e, d.b),
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
				E = Object(n.a)(Object(s.a)(S, e => e.subreddits)),
				T = Object(s.a)(E, e => [{
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
					experimentName: s.W
				}) === s.ob.Enabled,
				i = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.V
				}) === s.nb.Enabled
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
				return c
			})), r.d(t, "i", (function() {
				return a
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
			const d = e => s.pd.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.xd
				}),
				i = e => s.pd.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.fd
				}),
				o = e => s.Od.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Gd
				}),
				c = (e, t, r) => {
					const d = r(e, t);
					return !(!d || !d.meter) && (d.meter.enabled && o(e) && s.de.Enabled === Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.ce
					}))
				},
				a = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.wd
				}),
				u = e => {
					switch (e) {
						case s.Cd.Five:
							return .05;
						case s.Cd.Ten:
							return .1;
						case s.Cd.Fifty:
							return .5;
						default:
							return .01
					}
				},
				l = e => s.pd.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.yd
				}),
				b = e => s.pd.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.ud
				}),
				p = e => s.pd.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.vd
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
			const c = Object(s.a)(e => Object(d.c)(e, {
					experimentName: n.Kd,
					experimentEligibilitySelector: i.e
				}), o.a),
				a = Object(s.a)(c, e => e === n.Sd.Enabled)
		},
		"./src/reddit/selectors/externalAccount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
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
				c = e => {
					const t = Object(d.j)(e);
					if (!t) return;
					const r = Object(n.e)(t),
						s = o(e, {
							username: r
						});
					return s ? s.twitter : void 0
				},
				a = e => !!e.externalAccount.api.connect.pending[s.a.Twitter],
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
					const c = Object(d.j)(e);
					if (!(c && Object(n.e)(c).toLowerCase() === t.toLowerCase())) return i;
					const a = Object(d.mb)(e, {
						userName: t
					});
					return a ? a.prefShowTwitter ? i : null : i
				}
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			}));
			var s = r("./src/reddit/models/Gold/Powerups/index.ts"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/reducers/features/powerupsBenefitSettings/index.ts"),
				i = r("./node_modules/reselect/es/index.js");
			Object(n.a)({
				features: {
					powerupsBenefitSettings: d.a
				}
			});
			const o = (e, {
					subredditId: t
				}) => t ? e.features.powerupsBenefitSettings[t] : null,
				c = (e => Object(i.a)(o, t => !!(null == t ? void 0 : t[e])))(s.a.CommentsWithGifs)
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
					const r = t ? Object(n.l)(e, {
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
				return c
			})), r.d(t, "c", (function() {
				return a
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/selectors/user.ts");
			const d = e => !Object(n.J)(e) && e.seo.linksModule.frontpage || null,
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
				c = Object(s.a)(o, e => e ? e.map(e => ({
					...e,
					links: e.links.filter(e => e.visible)
				})) : null),
				a = (e, {
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
				return u
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "i", (function() {
				return m
			})), r.d(t, "r", (function() {
				return O
			})), r.d(t, "E", (function() {
				return g
			})), r.d(t, "F", (function() {
				return j
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "m", (function() {
				return S
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "v", (function() {
				return T
			})), r.d(t, "x", (function() {
				return h
			})), r.d(t, "t", (function() {
				return x
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "s", (function() {
				return N
			})), r.d(t, "n", (function() {
				return k
			})), r.d(t, "D", (function() {
				return L
			})), r.d(t, "C", (function() {
				return P
			})), r.d(t, "y", (function() {
				return U
			})), r.d(t, "a", (function() {
				return G
			})), r.d(t, "u", (function() {
				return B
			})), r.d(t, "G", (function() {
				return q
			})), r.d(t, "A", (function() {
				return F
			})), r.d(t, "w", (function() {
				return Q
			})), r.d(t, "B", (function() {
				return $
			})), r.d(t, "j", (function() {
				return J
			})), r.d(t, "z", (function() {
				return W
			})), r.d(t, "H", (function() {
				return z
			})), r.d(t, "p", (function() {
				return H
			})), r.d(t, "q", (function() {
				return V
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/some.js"),
				n = r.n(s),
				d = r("./node_modules/lodash/values.js"),
				i = r.n(d),
				o = r("./src/lib/objectSelector/index.ts"),
				c = r("./src/reddit/helpers/tags/index.ts"),
				a = r("./src/reddit/models/Tags/index.ts");
			const u = e => {
					const t = W(e),
						r = t && t.id;
					return i()((e => {
						const t = l(e) ? v(e) : x(e),
							r = b(e),
							s = t.reduce((e, t) => (e[t.id] = Object(a.f)(t), e), {});
						return r.reduce((e, t) => (t.id && e[t.id] && (e[t.id].selected = !0), e), s)
					})(e)).filter(e => !e.selected && e.id !== r)
				},
				l = e => e.tags.creation.tagInput || "",
				b = e => e.tags.creation.selectedOptions || [],
				p = e => {
					const t = [];
					for (let r = 0; r < b(e).length; r++) b(e)[r].id && t.push(b(e)[r].id);
					return t || []
				},
				f = e => (b(e) || []).filter(e => !!e.displayText).map(e => e.displayText),
				m = e => {
					const t = [];
					for (let r = 0; r < b(e).length; r++) b(e)[r].id || t.push(b(e)[r].displayText);
					return t || []
				},
				O = e => Object.keys(e.tags.models.globalSubredditTags).length > 0,
				g = e => e.tags.api.create.error || e.tags.api.deleteTag.error || e.tags.api.fetch.error || e.tags.api.update.error,
				j = e => e.tags.api.create.pending || e.tags.api.deleteTag.pending || e.tags.api.fetch.pending || e.tags.api.update.pending,
				_ = (e, {
					subredditId: t
				}) => e.tags.selected.inputByItemId[t] || "",
				S = (e, {
					subredditId: t
				}) => e.tags.selected.suggestedInputByItemId[t] || "",
				I = [],
				E = (e, {
					subredditId: t
				}) => n()(T(e, {
					subredditId: t
				}), e => !!e.action) || n()(y(e, {
					subredditId: t
				}), e => !!e.action),
				T = (e, {
					subredditId: t
				}) => e.tags.selected.selectedOptions[t] || I,
				h = (e, {
					subredditId: t
				}) => e.tags.selected.selectedSuggestedOptions[t] || I,
				y = (e, {
					subredditId: t
				}) => e.tags.selected.deselectedOptions[t] || I,
				D = {},
				w = {},
				x = e => e.tags.availableGlobalTagOrder.recommendedGlobal.map(t => e.tags.models.globalSubredditTags[t]),
				A = e => e.tags.models.globalSubredditTags,
				v = e => e.tags.availableGlobalTagOrder.global.map(t => e.tags.models.globalSubredditTags[t]),
				R = (e, {
					subredditId: t
				}) => e.tags.models.subredditScopedTags[t] || w,
				C = (e, t) => {
					const r = i()(t);
					for (let s = 0; s < r.length; s++)
						if (r[s].text.toLowerCase().trim() === e.toLowerCase().trim()) return r[s];
					return null
				},
				N = (e, {
					itemId: t
				}) => e.tags.models.itemTags[t] || D,
				k = (e, {
					itemId: t
				}) => !!e.tags.models.itemTags[t],
				L = (e, {
					itemId: t
				}) => e.tags.models.suggestedItemTags[t] || D,
				P = (e, {
					itemId: t
				}) => i()(L(e, {
					itemId: t
				})).filter(e => e.isRelevant).map(e => Object(a.e)(e, !0)),
				U = (e, {
					itemId: t
				}) => e.tags.models.sortedItemTags[t] || [],
				G = Object(o.a)((e, {
					thingId: t,
					suggested: r = !1
				}) => {
					const s = F(e, {
						subredditId: t
					});
					return i()(((e, {
						thingId: t,
						suggested: r = !1
					}) => {
						const s = (r ? S(e, {
								subredditId: t
							}) : _(e, {
								subredditId: t
							})) ? v(e) : x(e),
							n = r ? h(e, {
								subredditId: t
							}) : T(e, {
								subredditId: t
							}),
							d = s.reduce((e, t) => (e[t.id] = Object(a.f)(t), e), {});
						return n.reduce((e, t) => (t.id && e[t.id] && (e[t.id].selected = !0), e), d)
					})(e, {
						thingId: t,
						suggested: r
					})).filter(e => !e.selected && e.id !== s)
				}),
				B = (e, {
					subredditId: t
				}) => T(e, {
					subredditId: t
				}).concat(y(e, {
					subredditId: t
				})),
				q = (e, {
					subredditId: t
				}) => T(e, {
					subredditId: t
				}).filter(c.b).map(e => ({
					text: e.displayText,
					type: a.c.CLASSIFICATION
				})),
				F = (e, {
					subredditId: t
				}) => e.tags.models.subredditPrimaryTagId[t] || null,
				M = (e, t) => t && e.tags.models.globalSubredditTags[t] || null,
				Q = (e, t) => {
					const r = e.tags.selected.selectedPrimaryTagId[t.subredditId] || null;
					return M(e, r)
				},
				$ = (e, t) => {
					const r = F(e, t);
					return M(e, r)
				},
				J = e => e.tags.creation.selectedPrimaryTagId || null,
				W = e => {
					const t = J(e);
					return M(e, t)
				},
				z = e => e.tags.api.updatePrimaryTag.pending,
				H = (e, {
					subredditId: t
				}) => Object.keys(N(e, {
					itemId: t
				})).length > 0,
				V = e => b(e).length > 0
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
				c = r("./src/reddit/selectors/subreddit.ts");
			const a = [],
				u = e => e.widgets.models,
				l = Object(s.a)((e, t) => Object(i.r)(t) ? e.widgets.models[t.widgetId] : Object(i.l)(t.widgetKind)),
				b = (e, t) => e.widgets.idCardIds[t.subredditId],
				p = (e, t) => {
					let r = t.subredditId;
					if (!r && t.subredditName && (r = Object(c.D)(e, t.subredditName)), r) {
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
					}, []) : a
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
					const r = Object(c.y)(e, {
							subredditName: t.name
						}),
						s = Object(c.v)(e, {
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
			e.exports = JSON.parse('{"id":"b85af9fd9703"}')
		},
		"./src/redditGQL/operations/SubredditInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"29aee4089528"}')
		},
		"./src/redditGQL/operations/SubredditPage.json": function(e) {
			e.exports = JSON.parse('{"id":"5ab88b6f66c1"}')
		},
		"./src/redditGQL/operations/SubredditPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"c866357e6956"}')
		},
		"./src/redditGQL/operations/SubredditPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"8d2145ac1ec5"}')
		},
		"./src/redditGQL/operations/SubredditPowerupsFull.json": function(e) {
			e.exports = JSON.parse('{"id":"26b3a5248aab"}')
		},
		"./src/redditGQL/operations/SubredditRules.json": function(e) {
			e.exports = JSON.parse('{"id":"c398abb500f1"}')
		},
		"./src/redditGQL/operations/SubredditsPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"1cd60899cb27"}')
		},
		"./src/redditGQL/operations/TopAwardedPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"0ac0276ebc2f"}')
		},
		"./src/redditGQL/operations/TopAwardersLeaderboard.json": function(e) {
			e.exports = JSON.parse('{"id":"2a194e7926dd"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241.3342b85547ff3f73ee80.js.map