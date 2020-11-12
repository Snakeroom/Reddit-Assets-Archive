// https://www.redditstatic.com/desktop2x/Chat~RedesignChat.8d0163a3c7f5c3688703.js
// Retrieved at 11/12/2020, 3:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Chat~RedesignChat"], {
		"./src/chat/actions/apiRequestHeaders.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			const s = "API_REQUEST_HEADERS__set";
			Object(a.a)(s)
		},
		"./src/chat/actions/channel.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return M
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "p", (function() {
				return L
			})), n.d(t, "o", (function() {
				return U
			})), n.d(t, "q", (function() {
				return B
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "v", (function() {
				return H
			})), n.d(t, "w", (function() {
				return F
			})), n.d(t, "x", (function() {
				return K
			})), n.d(t, "t", (function() {
				return G
			})), n.d(t, "j", (function() {
				return z
			})), n.d(t, "k", (function() {
				return V
			})), n.d(t, "h", (function() {
				return W
			})), n.d(t, "i", (function() {
				return q
			})), n.d(t, "a", (function() {
				return Z
			})), n.d(t, "b", (function() {
				return J
			})), n.d(t, "s", (function() {
				return Q
			})), n.d(t, "r", (function() {
				return Y
			})), n.d(t, "m", (function() {
				return X
			})), n.d(t, "u", (function() {
				return $
			})), n.d(t, "n", (function() {
				return ee
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "L", (function() {
				return ne
			})), n.d(t, "K", (function() {
				return se
			})), n.d(t, "y", (function() {
				return re
			})), n.d(t, "C", (function() {
				return oe
			})), n.d(t, "R", (function() {
				return ue
			})), n.d(t, "Q", (function() {
				return be
			})), n.d(t, "P", (function() {
				return Oe
			})), n.d(t, "N", (function() {
				return Ee
			})), n.d(t, "J", (function() {
				return _e
			})), n.d(t, "B", (function() {
				return Se
			})), n.d(t, "A", (function() {
				return Ne
			})), n.d(t, "H", (function() {
				return ke
			})), n.d(t, "O", (function() {
				return Ae
			})), n.d(t, "E", (function() {
				return Fe
			})), n.d(t, "F", (function() {
				return Ge
			})), n.d(t, "G", (function() {
				return ze
			})), n.d(t, "D", (function() {
				return We
			})), n.d(t, "z", (function() {
				return qe
			})), n.d(t, "M", (function() {
				return Ze
			})), n.d(t, "I", (function() {
				return Je
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.regexp.split.js");
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				c = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/chat/actions/channel/subreddit.ts"),
				i = n("./src/chat/actions/members.ts"),
				l = n("./src/chat/actions/message/index.ts"),
				d = n("./src/chat/actions/message/unreadCount.ts"),
				u = (n("./src/chat/actions/platform.ts"), n("./src/chat/actions/tracking.ts")),
				h = n("./src/chat/actions/user.ts"),
				m = n("./src/chat/actions/sidebar.ts"),
				b = n("./src/chat/constants/batchSizes.ts"),
				p = n("./src/chat/constants/channels.ts"),
				g = n("./src/chat/constants/sendbird.ts"),
				O = n("./src/chat/endpoints/sendbird/index.ts"),
				f = n("./src/chat/helpers/errors.ts"),
				j = n("./src/chat/helpers/urls/index.ts"),
				C = n("./src/chat/models/Channel/index.ts"),
				E = n("./src/chat/models/Channel/platform.ts"),
				_ = n("./src/chat/models/Channel/utils/index.ts"),
				v = n("./src/chat/models/Subreddit/index.ts"),
				y = n("./src/chat/selectors/channels.ts"),
				I = n("./src/chat/selectors/channels/next.tsx"),
				x = n("./src/chat/selectors/experiments.ts"),
				S = n("./src/chat/selectors/platform.ts"),
				N = n("./src/chat/selectors/promos.ts"),
				k = n("./src/chat/selectors/sidebar.ts"),
				w = n("./src/chat/selectors/subreddit.ts"),
				T = n("./src/chat/singleton/SendbirdSDK.ts");
			const M = "CHANNEL__ADD_SUCCESS",
				A = "CHANNEL__ADD_FAIL",
				D = "CHANNEL__CREATE_CHANNEL_START",
				L = "CHANNEL__SELECT_BEGIN",
				U = "CHANNEL__RESET_UNREAD_COUNT",
				B = "CHANNEL__SELECT_END",
				R = "CHANNEL__EXPAND_INVITE_LIST",
				P = "CHANNEL__COLLAPSE_INVITE_LIST",
				H = "CHANNEL__UPDATE_MODEL",
				F = "CHANNEL__INVITED_UPDATE",
				K = "CHANNEL__JOINED_UPDATE",
				G = "CHANNEL__SET_UPDATED_CHANNEL_ON_TOP",
				z = "CHANNEL__FETCHING_JOINED_CHANNELS",
				V = "CHANNEL__FETCHING_JOINED_CHANNELS_FAILED",
				W = "CHANNEL__FETCHING_INVITED_CHANNELS",
				q = "CHANNEL__FETCHING_INVITED_CHANNELS_FAILED",
				Z = "CHANNEL__ADD_EXISTING_INVITED_CHANNELS",
				J = "CHANNEL__ADD_EXISTING_JOINED_CHANNELS",
				Q = "CHANNEL__SET_INVITED_CHANNEL_TO_JOINED",
				Y = "CHANNEL__SET_EXISTING_CHANNELS_END",
				X = "CHANNEL__REMOVE_CHANNEL",
				$ = "CHANNEL__UNSORT_CHANNEL",
				ee = "CHANNEL__RESET_CHANNEL_MESSAGE_LIST",
				te = "CHANNEL__FETCH_FIRST_MESSAGE",
				ne = Object(r.a)(X),
				ae = Object(r.a)($),
				se = (e, t) => async (n, a) => {
					const s = a(),
						c = Object(y.O)(s, e);
					n(c ? ae({
						channelId: e,
						subredditName: t,
						isRecommended: c
					}) : ne({
						channelId: e,
						subredditName: t
					}))
				}, ce = Object(r.a)(Q), re = e => async (t, n) => {
					const a = n(),
						{
							channels: {
								selected: s
							},
							contacts: {
								models: r
							}
						} = a,
						o = e || s.channelId;
					if (!o) throw new f.a("accepted channelId", e);
					const i = Object(y.k)(a),
						d = i && i.firstMessageId,
						u = !!(i && d && i.hasMoreMessages),
						h = Object(y.b)(a, r),
						m = Object(N.a)(a);
					h && m ? t(Object(c.b)(Object(j.channelAction)(o, p.a.VIEW_NSFW_CONFIRMATION))) : await T.b.acceptChannelInvite().then(() => u && t(Object(l.r)(d))).then(() => t(ce({
						channelId: o
					}))).then(() => t(Object(c.b)(Object(j.channelUrl)(o))))
				}, oe = e => async (t, n) => {
					const a = n(),
						s = Object(y.A)(a, "channelState"),
						c = Object(y.A)(a, "channelId"),
						r = a.channels.models[c];
					if (!c) throw new f.a("declinedChannelId", c);
					if (!s) throw new f.a("declinedChannelType", s);
					try {
						await T.b.declineChannelInvite()
					} catch (o) {
						return Object(f.b)("Error declining channel: ".concat(o.message))
					}
					t(_e(c)), t(((e, t) => async n => n(se(e, t)))(c, e)), t(we(r.channelState))
				}, ie = Object(r.a)(F), le = Object(r.a)(K), de = Object(r.a)(H), ue = e => async (t, n) => {
					const a = n();
					Object(y.O)(a, e.channelId) && e.channelState === p.b.UNSORTED && (e.channelState = p.b.PARTIAL), t(de({
						channel: e
					}))
				}, he = e => async t => {
					if (e.type === C.a.Subreddit) {
						const n = Object(v.c)([e]);
						await t(Object(o.o)(n)), t(Object(o.w)({
							channel: e
						}))
					} else await t(ie({
						channel: e
					})), t((e => async (t, n) => {
						const a = n().user.account.id,
							s = e.members.filter(e => e.id !== a).map(e => e.id);
						t(Object(h.w)(s))
					})(e))
				}, me = e => async (t, n) => {
					const a = n(),
						{
							channelId: s
						} = e,
						c = (e => {
							if (e.type === C.a.Subreddit) {
								const {
									subreddit: t
								} = e.customData;
								return t && t.name
							}
						})(e),
						r = Object(y.w)(a);
					r && r.channelId === e.channelId && (await t(ne({
						channelId: s,
						subredditName: c
					})), await t(ue(e)), t(we(r.channelState)))
				}, be = (e, t) => async (n, a) => {
					if (e) {
						const c = a(),
							r = Object(y.h)(c, e.channelId);
						if (e.channelState !== p.b.INVITED && !r || t) return;
						if (e = pe(c, e), s()(e, r)) return;
						switch (e.channelState) {
							case p.b.INVITED:
								await n(he(e));
								break;
							case p.b.UNSORTED:
								await n(me(e));
								break;
							case p.b.JOINED:
								await n(le({
									channel: e
								}));
								break;
							default:
								Object(f.b)("Error updating channel. ChannelState not found.")
						}
						n(Object(d.b)())
					}
				}, pe = (e, t) => {
					const n = Object(S.d)(e),
						a = Object(y.h)(e, t.channelId),
						s = n === t.channelId,
						c = t.type === C.a.Subreddit;
					return s && (t.unreadMessageCount = 0), !s && c && (t.unreadMessageCount = t.unreadMessageCount ? 1 : 0), a && c && (t.lastMessage = a.lastMessage, t.isMessageListLoaded = a.isMessageListLoaded, t.hasMoreMessages = a.hasMoreMessages), t
				}, ge = Object(r.a)(G), Oe = e => async (t, n) => {
					const {
						channelId: a,
						type: s
					} = e;
					s !== C.a.Subreddit && t(ge({
						channelId: a
					}))
				}, fe = Object(r.a)(U), je = Object(r.a)(L), Ce = Object(r.a)(B), Ee = () => async (e, t) => {
					const n = t(),
						a = Object(S.d)(n),
						s = Object(S.c)(n),
						{
							CREATE: r,
							DENY: o,
							VIEW_JOIN: d
						} = p.a;
					if (!n.platform.currentPage) return;
					const {
						activeIndex: u
					} = n.sidebarTabs;
					a && e(Object(m.e)({
						channelId: a,
						tabIndex: u
					})), await e(Object(i.f)());
					const h = a && Object(y.h)(n, a),
						b = h && Object(w.b)(n, h.channelId),
						O = b && b.name || void 0;
					if (!h && (s === o || s === r)) return;
					const f = !(!h || h.channelState !== p.b.UNSORTED),
						C = !(!a || !Object(y.P)(n, a));
					if ((C || f) && h && !s) return void e(Object(c.b)(Object(j.channelAction)(h.channelId, d, O)));
					const E = !(!h || h.channelState !== p.b.JOINED);
					if (h && E && s && p.i.includes(s)) e(Object(c.b)(Object(j.channelUrl)(h.channelId, O)));
					else if (h && a) {
						e(je({
							channelId: a
						}));
						const t = C || f,
							n = await T.b.enterChannel(h, !1, t);
						if (n && !n.error) {
							const {
								messageListData: t
							} = n.data;
							await e(Object(l.o)(t)), await e(Ce()), e(_e(a))
						} else e(Object(l.A)()), e(Ce())
					} else {
						const t = n.sendbird.sdk.connectionStatus === g.b.Open;
						if (!h && a && t) {
							const t = await T.b.addChannelModelByChannelId(a);
							if (t && !s) return void e(Object(c.b)(Object(j.channelAction)(t.channelId, d, O)))
						}
						e(Ae()), e(Object(l.A)())
					}
				}, _e = (Object(r.a)("MESSAGE__MARK_AS_READ"), e => async (t, n) => {
					const a = n(),
						s = e || Object(S.d)(a);
					s && (await t(fe(s)), await T.b.markChannelAsRead(), t(Object(d.b)()))
				}), ve = Object(r.a)(D), ye = Object(r.a)(M), Ie = Object(r.a)(A), xe = (e, t, n) => {
					const a = e.map(e => ({
						user_id: e,
						nickname: t[e].name
					}));
					if (n) {
						const {
							id: e,
							name: t
						} = n; - 1 === a.findIndex(t => t.user_id === e) && a.unshift({
							user_id: e,
							nickname: t
						})
					}
					return a
				}, Se = (e, t) => async (n, a, s) => {
					let {
						apiContext: r
					} = s;
					const o = a(),
						{
							user: {
								account: i,
								session: l
							},
							contacts: {
								models: d
							},
							channels: {
								joined: h,
								invited: m
							}
						} = o;
					if (i && l) {
						n(ve());
						const a = xe(e, d, i);
						if (a.length < 2) return;
						const s = await Object(O.c)(r(), l, a, t);
						if (s.ok) {
							const t = s.body,
								a = Object(E.a)(t, p.b.JOINED),
								{
									channelId: r
								} = a;
							m.sortedKeys.includes(r) ? (n(re(r)), n(Object(u.i)(e, r))) : h.sortedKeys.includes(r) ? (n(Object(c.b)(Object(j.channelUrl)(r))), n(Object(u.i)(e, r))) : (await n(ye({
								[r]: a
							})), n(Object(u.i)(e, r)), n(Object(c.b)(Object(j.channelUrl)(r))))
						} else n(Ie()), n(Object(u.A)(e))
					}
				}, Ne = e => async t => {
					e = e.slice(0, 1), await t(Object(h.w)(e)), t(Se(e)), t(Object(u.j)(e))
				}, ke = e => async (t, n, a) => {
					let {
						apiContext: s
					} = a;
					const r = n(),
						{
							user: {
								account: o,
								session: i
							},
							contacts: {
								models: l
							}
						} = r,
						d = Object(y.A)(r, "channelSendbirdUrl");
					if (o && i) {
						const n = xe(e, l);
						(await Object(O.k)(s(), i, n, d)).body ? (t(Object(u.c)()), t(Object(c.a)())) : Object(f.b)("Error inviting user to existing channel")
					}
				}, we = e => async (t, n) => {
					const a = n(),
						s = Object(k.b)(a),
						c = e === p.b.INVITED,
						r = Object(I.d)(a),
						o = Object(I.f)(a),
						i = Object(I.g)(a),
						l = Object(I.c)(a),
						d = Object(I.e)(a);
					s && c && Object(x.b)(a) ? r.channelId ? t(Me(r)) : t(Me(o)) : s && !c && Object(x.b)(a) ? o.channelId ? t(Me(o)) : t(Me(i)) : s || !c ? s || c ? t(Te()) : d.channelId ? t(Me(d)) : t(Te()) : l.channelId ? t(Me(l)) : t(Me(d))
				}, Te = () => async (e, t) => {
					const n = t();
					if (n.channels.firstLoaded) {
						const t = !!n.platform.currentPage,
							a = Object(I.b)(n, t);
						e(Me(a))
					}
				}, Me = e => async (t, n) => {
					e && e.channelId ? e.channelAction ? t(Object(c.c)(Object(j.channelAction)(e.channelId, e.channelAction, e.subredditName))) : t(Object(c.c)(Object(j.channelUrl)(e.channelId, e.subredditName))) : t(Object(c.c)(j.rootUrl))
				}, Ae = e => async (t, n) => {
					const {
						platform: {
							currentPage: a
						}
					} = n();
					if (a && a.urlParams.userIds) {
						const e = a.urlParams.userIds.split(",");
						return t(Ne(e))
					}
					return t(e ? we(e) : Te())
				}, De = Object(r.a)(W), Le = Object(r.a)(q), Ue = Object(r.a)(z), Be = Object(r.a)(V), Re = Object(r.a)(Z), Pe = Object(r.a)(J), He = Object(r.a)(Y), Fe = () => async (e, t) => {
					await Promise.all([e(Ve()), e(Object(o.r)()), e(Object(o.q)()), e(Object(o.p)()), e(Ge()), e(ze())]);
					const n = t().channels.models;
					await e(Ke(n)), e(He()), e(Ee())
				}, Ke = e => async t => {
					const n = Object(_.c)(e, [C.a.Direct, C.a.Group, C.a.Subreddit]);
					if (!n) return;
					const a = {};
					for (const e in n) {
						const t = n[e];
						t.channelState !== p.b.PARTIAL && (a[t.channelId] = t)
					}
					if (a) {
						const e = [];
						for (const t in a) a[t].members.map(t => e.push(t.id));
						t(Object(h.w)(e))
					}
				}, Ge = () => async (e, t) => {
					e(De());
					const n = await T.b.getExistingChannels(p.b.INVITED, p.h.NonSuper).catch(() => null);
					if (n) {
						const {
							hasMoreChannels: t
						} = n, a = Object(C.e)(n.channels);
						return e(Ke(a)), void e(Re({
							channels: a,
							hasMoreChannels: t
						}))
					}
					e(Le()), Object(f.b)("Error fetching invited channels")
				}, ze = () => async (e, t) => {
					e(Ue());
					const n = await T.b.getExistingChannels(p.b.JOINED, p.h.NonSuper).catch(t => {
						Object(f.b)(t), e(Be())
					});
					if (n) {
						const {
							hasMoreChannels: a
						} = n, s = Object(C.e)(n.channels), c = Object(y.r)(t());
						return e(Pe({
							channels: s,
							hasMoreChannels: a
						})), void(a && c < b.a.InitChannels && e(ze()))
					}
					e(Be())
				}, Ve = () => async (e, t) => {
					const n = t(),
						a = Object(S.d)(n);
					a && await T.b.addChannelModelByChannelId(a)
				}, We = Object(r.a)(R), qe = Object(r.a)(P), Ze = (Object(r.a)("CHANNEL__MESSAGES_LOADED"), Object(r.a)(ee)), Je = (e, t) => async (n, a) => {
					const s = a(),
						c = Object(y.A)(s, "channelState");
					T.b.leaveChannel().then(() => n(se(e, t))).then(() => n(we(c))).catch(e => Object(f.b)("Error leaving channels: ".concat(e.message)))
				}
		},
		"./src/chat/actions/channel/dropdown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "h", (function() {
				return T
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/actions/channel.ts"),
				r = n("./src/chat/actions/tooltip.ts"),
				o = n("./src/chat/actions/tracking.ts"),
				i = n("./src/chat/constants/channels.ts"),
				l = n("./src/chat/endpoints/sendbird/index.ts"),
				d = n("./src/chat/helpers/errors.ts"),
				u = n("./src/chat/helpers/urls/index.ts"),
				h = n("./src/chat/selectors/channels.ts"),
				m = n("./src/chat/selectors/subreddit.ts"),
				b = n("./src/chat/singleton/SendbirdSDK.ts");
			const {
				INVITE_MEMBERS: p,
				LEAVE: g,
				LOCK_CHANNEL_CONFIRMATION: O,
				VIEW_MEMBERS: f
			} = i.a, j = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(h.w)(n),
					c = Object(m.b)(n),
					r = c && c.name;
				e(Object(a.b)(Object(u.channelAction)(s, p, r)))
			}, C = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(h.w)(n),
					c = Object(m.b)(n),
					r = c && c.name;
				e(Object(a.b)(Object(u.channelAction)(s, g, r)))
			}, E = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(h.w)(n),
					c = Object(m.b)(n),
					r = c && c.name;
				e(Object(a.b)(Object(u.channelAction)(s, O, r)))
			}, _ = e => async (t, n) => {
				t(Object(r.c)({
					tooltipId: e
				})), t(Object(o.D)())
			}, v = e => async (t, n) => {
				e && (t(Object(o.n)()), t(Object(o.q)()).then(() => {
					window.open(Object(u.viewProfileUrl)(e))
				}))
			}, y = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(h.w)(n),
					c = Object(m.b)(n),
					r = c && c.name;
				e(Object(a.b)(Object(u.channelAction)(s, f, r)))
			}, I = "CHANNEL__UPDATE_CHANNEL_NAME", x = Object(s.a)(I), S = e => async (t, n) => {
				const a = Object(h.w)(n());
				if (a) {
					const n = Object.assign(Object.assign({}, a), {
							name: e
						}),
						s = Object.assign({}, a);
					t(x(n)), await b.b.updateChannel(n).catch(e => {
						Object(d.b)(e), t(x(s))
					})
				}
			}, N = e => {
				let {
					channelId: t
				} = e;
				return async () => {
					b.b.setMyCountPreference(t, i.c.Off).catch(d.b)
				}
			}, k = e => {
				let {
					channelId: t
				} = e;
				return async () => {
					b.b.setMyCountPreference(t, i.c.All).catch(d.b)
				}
			}, w = e => async (t, n, a) => {
				let {
					apiContext: s
				} = a;
				await Promise.all([Object(l.n)(s(), e.channelId), b.b.setPushPreference(e.channelId, !0)]).then(() => {
					const a = Object(h.h)(n(), e);
					a && t(Object(c.Q)(Object.assign(Object.assign({}, a), {
						isNotifsMuted: !0
					})))
				}).catch(d.b)
			}, T = e => async (t, n, a) => {
				let {
					apiContext: s
				} = a;
				await Promise.all([Object(l.p)(s(), e.channelId), b.b.setPushPreference(e.channelId, !1)]).then(() => {
					const a = Object(h.h)(n(), e);
					a && t(Object(c.Q)(Object.assign(Object.assign({}, a), {
						isNotifsMuted: !1
					})))
				}).catch(d.b)
			}
		},
		"./src/chat/actions/channel/subreddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return E
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "q", (function() {
				return L
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "h", (function() {
				return B
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "p", (function() {
				return K
			})), n.d(t, "m", (function() {
				return G
			})), n.d(t, "w", (function() {
				return z
			})), n.d(t, "b", (function() {
				return V
			})), n.d(t, "t", (function() {
				return q
			})), n.d(t, "n", (function() {
				return Z
			})), n.d(t, "u", (function() {
				return Q
			})), n.d(t, "c", (function() {
				return Y
			})), n.d(t, "a", (function() {
				return $
			})), n.d(t, "s", (function() {
				return ne
			})), n.d(t, "v", (function() {
				return ae
			}));
			var a = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/actions/channel.ts"),
				r = n("./src/chat/actions/message/index.ts"),
				o = n("./src/chat/actions/user.ts"),
				i = n("./src/chat/constants/channels.ts"),
				l = n("./src/chat/endpoints/sendbird/index.ts"),
				d = n("./src/chat/helpers/errors.ts"),
				u = n("./src/chat/helpers/urls/index.ts"),
				h = n("./src/chat/models/Channel/index.ts"),
				m = n("./src/chat/models/Channel/subreddit.ts"),
				b = n("./src/chat/models/Subreddit/index.ts"),
				p = n("./src/chat/selectors/channels.ts"),
				g = n("./src/chat/selectors/subreddit.ts"),
				O = n("./src/chat/selectors/user.ts"),
				f = n("./src/chat/singleton/SendbirdSDK.ts"),
				j = n("./src/chat/tracking/events/chatPreview.ts"),
				C = n("./src/chat/tracking/events/chatSettings.ts");
			const E = "SUBREDDIT__ADD_SUBREDDIT_COLLECTION",
				_ = Object(s.a)(E),
				v = "SUBREDDIT_CHANNELS__FETCH_RECOMMENDED",
				y = "SUBREDDIT_CHANNELS__ADD_RECOMMENDED_COLLECTION",
				I = Object(s.a)("SUBREDDIT_CHANNELS__FETCH_RECOMMENDED_FAILED"),
				x = Object(s.a)(v),
				S = Object(s.a)(y),
				N = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					const {
						user: {
							account: s,
							session: c
						},
						channels: {
							subreddit: {
								recommended: {
									fetchingChannels: r
								}
							}
						}
					} = t();
					if (!s || !c || r) return;
					e(x());
					const o = await Object(l.f)(a(), c),
						i = o.ok && o.body;
					if (i && i.length) {
						const t = Object(b.a)(i);
						await e(_(t));
						const n = Object(m.a)(i);
						e(S(n))
					} else e(I(o.error))
				}, k = "SUBREDDIT_CHANNELS__FETCH_JOINED_FAILED", w = "SUBREDDIT_CHANNELS__FETCH_JOINED", T = "SUBREDDIT_CHANNELS__ADD_JOINED_COLLECTION", M = Object(s.a)(k), A = Object(s.a)(w), D = Object(s.a)(T), L = () => async (e, t) => {
					const n = t(),
						{
							JOINED: a
						} = i.b;
					if (!Object(O.f)(n)) return;
					e(A());
					const s = await f.b.getExistingChannels(a, i.h.Super).catch(() => null);
					if (s) {
						const {
							channels: n
						} = s, c = Object(b.c)(n);
						await e(_(c));
						const r = t(),
							o = Object(m.c)(n, a),
							i = Object(p.t)(r, o);
						return await e(D(Object.assign(Object.assign({}, o), {
							sortedKeys: i
						}))), void(s.hasMoreChannels && e(L()))
					}
					e(M())
				}, U = "SUBREDDIT_CHANNELS__FETCH_INVITED_FAILED", B = "SUBREDDIT_CHANNELS__FETCH_INVITED", R = "SUBREDDIT_CHANNELS__ADD_INVITED_COLLECTION", P = Object(s.a)(U), H = Object(s.a)(B), F = Object(s.a)(R), K = () => async (e, t) => {
					const {
						user: {
							account: n,
							session: a
						},
						channels: {
							subreddit: {
								invited: {
									fetchingChannels: s
								}
							}
						}
					} = t();
					if (!n || !a || s) return;
					e(H());
					const c = await f.b.getExistingChannels(i.b.INVITED, i.h.Super).catch(() => null);
					if (c) {
						const t = Object(b.c)(c.channels),
							n = Object(m.c)(c.channels, i.b.INVITED);
						return await e(_(t)), void e(F(n))
					}
					e(P())
				}, G = "SUBREDDIT_CHANNELS__UPDATE_INVITED", z = Object(s.a)(G), V = "SET__INVITED_SUBREDDIT_CHANNEL_TO_JOINED", W = Object(s.a)(V), q = (e, t) => async (n, s) => {
					const c = s(),
						{
							channels: o
						} = c,
						l = e || o.selected.channelId;
					if (!l) throw new d.a("joinedChannelId", l);
					const m = Object(p.h)(c, l);
					if (m && m.type === h.a.Subreddit) {
						Object(j.a)(c);
						const e = Object(p.t)(c, void 0, [m]),
							{
								data: s
							} = await f.b.enterChannel(m, !0),
							{
								messageListData: o
							} = s;
						o ? (n(Object(r.o)(o)), n(W({
							channelId: l,
							sortedKeys: e
						})), n(J(l)), n(Object(a.b)(Object(u.channelUrl)(l, t)))) : s === f.a.KICKED || s === f.a.BANNED ? n(te(s, t)) : n(Object(a.b)(Object(u.channelAction)(l, i.a.VIEW_PRIVATE, t)))
					}
				}, Z = (e, t) => async (n, s, c) => {
					let {
						apiContext: r
					} = c;
					const o = s(),
						{
							channels: h
						} = o,
						m = e || h.selected.channelId,
						b = Object(O.c)(o);
					if (!m) throw new d.a("requestChannelId", m);
					const g = Object(p.h)(o, m),
						f = Object(p.t)(o, void 0, [g]);
					if (g && b) {
						(await Object(l.a)(r(), b, g.channelSendbirdUrl)).error ? n(Object(a.b)(Object(u.channelAction)(m, i.a.VIEW_PRIVATE, t))) : (n(W({
							channelId: m,
							sortedKeys: f
						})), n(J(m)), n(Object(a.b)(Object(u.channelUrl)(m, t))))
					}
				}, J = e => async (t, n) => {
					const a = n(),
						s = Object(p.h)(a, e);
					if (s) {
						const e = [];
						s.members.map(t => e.push(t.id)), t(Object(o.w)(e))
					}
				}, Q = (e, t) => async (n, a, s) => {
					let {
						apiContext: c
					} = s;
					const r = a(),
						{
							user: {
								account: o,
								session: i
							}
						} = r;
					if (o && i) return new Promise(async n => {
						await Object(l.l)(c(), i, e, t).then(e => {
							n(e)
						}).catch(e => {
							n(e)
						})
					})
				}, Y = "SUBREDDIT_CHANNEL__SET_KICKED_CHANNEL", X = Object(s.a)(Y), $ = "SUBREDDIT_CHANNEL__SET_BANNED_CHANNEL", ee = Object(s.a)($), te = (e, t) => async (n, s) => {
					const c = s(),
						r = Object(p.k)(c),
						o = r && r.channelId;
					o && (e === f.a.KICKED ? n(X({
						channelId: o
					})) : e === f.a.BANNED && n(ee({
						channelId: o
					})), n(Object(a.b)(Object(u.channelAction)(o, i.a.DENY, t))))
				}, ne = (e, t) => async (n, s) => {
					const r = s(),
						{
							channelId: o
						} = e,
						l = Object(p.x)(r),
						d = Object(g.b)(r, o),
						h = Object(O.a)(r);
					d && t === h && (n(Object(c.K)(o, d.name)), o === l && n(Object(a.b)(Object(u.channelAction)(o, i.a.DENY, d.name))))
				}, ae = (e, t) => async (n, a) => {
					await e ? f.b.lockChannel() : f.b.unlockChannel(), Object(C.e)(a(), e, t)
				}
		},
		"./src/chat/actions/members.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "f", (function() {
				return v
			}));
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				c = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/chat/endpoints/users/index.ts"),
				o = n("./src/chat/helpers/errors.ts"),
				i = n("./src/chat/models/User/index.ts"),
				l = n("./src/chat/selectors/channels.ts"),
				d = n("./src/chat/selectors/members.ts"),
				u = n("./src/chat/singleton/SendbirdSDK.ts");
			const h = "MEMBERS__FETCHING_MEMBERS",
				m = Object(c.a)(h),
				b = Object(c.a)("MEMBERS__FETCHING_MEMBERS_FAILED"),
				p = e => {
					let {
						filter: t,
						loadMore: n
					} = e;
					return async (e, a) => {
						const s = a(),
							c = Object(l.x)(s);
						if (c) {
							e(m({
								channelId: c
							}));
							const a = t ? await u.b.getChannelMembersStartsWith(c, t).catch(e => Object(o.b)("Error getting channel members: ".concat(e.message))) : await u.b.getChannelMembers(c, n).catch(e => Object(o.b)("Error getting subreddit channel members: ".concat(e.message)));
							if (a) {
								const {
									hasMoreMembers: t,
									members: n
								} = a;
								e(C(c, n, t))
							} else e(b())
						}
					}
				},
				g = "MEMBERS__FETCHING_MEMBERS_COMPLETED",
				O = Object(c.a)(g),
				f = "MEMBERS__ADD_CHANNEL_MEMBERS",
				j = Object(c.a)(f),
				C = (e, t, n) => async (a, c, o) => {
					let {
						apiContext: l
					} = o;
					const u = t.map(e => e.userId),
						h = await Object(r.d)(l(), u);
					if (h.ok) {
						const n = c(),
							r = Object(i.a)(h.body),
							o = t.reduce((e, t) => {
								const {
									userId: a
								} = t, c = r[a];
								if (c) {
									const r = n.contacts.models[a],
										o = Object(d.e)(c, t, r),
										i = e[a];
									e[a] = s()(o, i) ? i : o
								}
								return e
							}, {});
						a(j({
							channelId: e,
							members: o
						}))
					}
					a(O({
						channelId: e,
						hasMoreMembers: n
					}))
				}, E = "MEMBERS__REMOVE_CHANNEL_MEMBERS", _ = Object(c.a)(E), v = () => async e => {
					e(_())
				}
		},
		"./src/chat/actions/message/inboxScroller.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return h
			}));
			var a = n("./node_modules/lodash/sortBy.js"),
				s = n.n(a),
				c = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/chat/constants/batchSizes.ts"),
				o = n("./src/chat/selectors/channels.ts"),
				i = n("./src/chat/singleton/SendbirdSDK.ts");
			const l = e => async (t, n) => {
				const a = Object(o.x)(n()),
					c = (e => {
						return s()(e, "createAt").splice(0, e.length - r.a.Messages).map(e => e.messageId)
					})(e);
				a && (t(u({
					messageIdList: c
				})), t(m({
					channelId: a
				})), i.c.resetPreviousMessageListQuery())
			}, d = "MESSAGE__REMOVE_MESSAGES_FROM_CURRENT_CHANNEL", u = Object(c.a)(d), h = "CHANNEL__RESET_HAS_MORE_MESSAGES", m = Object(c.a)(h)
		},
		"./src/chat/actions/message/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "p", (function() {
				return L
			})), n.d(t, "x", (function() {
				return U
			})), n.d(t, "m", (function() {
				return B
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "w", (function() {
				return H
			})), n.d(t, "i", (function() {
				return K
			})), n.d(t, "u", (function() {
				return z
			})), n.d(t, "b", (function() {
				return V
			})), n.d(t, "o", (function() {
				return q
			})), n.d(t, "l", (function() {
				return Z
			})), n.d(t, "A", (function() {
				return J
			})), n.d(t, "d", (function() {
				return Q
			})), n.d(t, "r", (function() {
				return Y
			})), n.d(t, "q", (function() {
				return X
			})), n.d(t, "j", (function() {
				return $
			})), n.d(t, "v", (function() {
				return te
			})), n.d(t, "g", (function() {
				return ne
			})), n.d(t, "e", (function() {
				return ae
			})), n.d(t, "f", (function() {
				return se
			})), n.d(t, "s", (function() {
				return ie
			})), n.d(t, "z", (function() {
				return le
			})), n.d(t, "y", (function() {
				return de
			})), n.d(t, "n", (function() {
				return ue
			})), n.d(t, "B", (function() {
				return me
			})), n.d(t, "h", (function() {
				return be
			})), n.d(t, "t", (function() {
				return pe
			}));
			n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/flatten.js"),
				s = n.n(a),
				c = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/linkMatchers/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/chat/actions/channel.ts"),
				l = n("./src/chat/actions/tracking.ts"),
				d = n("./src/chat/constants/messages.ts"),
				u = n("./node_modules/lodash/isEmpty.js"),
				h = n.n(u),
				m = n("./src/config.ts"),
				b = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeRequest/index.ts");
			const g = m.a.embedlyApiKey,
				O = e => e && e.length > 0 && e[0] ? e[0].url : void 0,
				f = e => e.filter(e => !h()(e)).map(e => ({
					name: e.provider_name,
					title: e.title,
					description: e.description,
					faviconUrl: e.favicon_url,
					imageUrl: O(e.images),
					url: e.url
				}));
			var j = n("./src/chat/endpoints/sendbird/index.ts"),
				C = n("./src/chat/helpers/errors.ts"),
				E = n("./src/chat/helpers/linkParser/index.ts"),
				_ = n("./src/chat/models/Message/index.ts"),
				v = n("./src/chat/models/Message/adapter.ts"),
				y = n("./src/chat/selectors/app.ts"),
				I = n("./src/chat/selectors/channels.ts"),
				x = n("./src/chat/selectors/contacts.ts"),
				S = n("./src/chat/selectors/messages.ts"),
				N = n("./src/chat/singleton/SendbirdSDK.ts");
			const k = "MESSAGE__ADD_ONE",
				w = Object(o.a)(k),
				T = (e, t, n) => async (a, s) => {
					const c = s(),
						r = Object(v.b)(n),
						o = await M(t, c, a);
					N.b.addMessage(t, n, o).then(t => {
						const n = {
							[t.messageId]: t
						};
						a(w({
							message: n,
							channelId: e,
							clientMessageId: r
						})), a(Object(l.y)(t.messageId))
					}).catch(e => {
						if (r) {
							const t = "".concat(e.code, ": ").concat(e.message);
							a(Object(l.C)(r, t)), a(R({
								clientMessageId: r,
								toggle: !0
							}))
						}
					})
				}, M = async (e, t, n) => {
					const a = Object(r.c)(e);
					if (!a.length) return [];
					const c = [];
					return [...a.map(e => {
						const n = Object(x.g)(t, e);
						return n || c.push(e), n && n.id
					}).filter(e => e), ...(c.length && s()(await Promise.all(c.slice(0, 3).map(e => N.b.searchMemberByName(e, !0)))) || []).map(e => e && e.id).filter(e => e)]
				}, A = "MESSAGE__ADD_PENDING_ONE", D = Object(o.a)(A), L = (e, t, n) => async (a, s) => {
					const c = s();
					if (Object(E.b)(t) && 1 === t.split(" ").length) return void F(a, c, e, t);
					const r = Object(_.a)(c, e, t, n);
					a(D(r)), a(T(e, t, r.data))
				}, U = (e, t) => async (n, a) => {
					const s = a(),
						c = Object(S.h)(s, t);
					c && (n(R({
						clientMessageId: t,
						toggle: !1
					})), n(T(e, c.messageData.value, c.data)))
				}, B = "MESSAGE__TOGGLE_PENDING_MESSAGE_ERROR", R = Object(o.a)(B), P = "MESSAGE__REMOVE_PENDING_ONE", H = Object(o.a)(P), F = async (e, t, n, a) => {
					const s = r.e.match(a).map(e => e.url).join(""),
						c = d.c.EMBED;
					let o = {
						url: a
					};
					const i = Object(_.a)(t, n, JSON.stringify(o), c);
					if (i) {
						e(D(i));
						const t = await (async e => {
							let {
								chars: t,
								scheme: n,
								url: a
							} = e;
							return Object(p.b)({
								endpoint: "https://api.embed.ly/1/extract",
								method: b.db.GET,
								data: {
									key: g,
									url: a,
									scheme: n,
									chars: t
								}
							}).then(e => e.ok && Array.isArray(e.body) ? e.body : [e.body]).then(f)
						})({
							url: s,
							scheme: "https",
							chars: 140
						});
						if (t) {
							o = Object.assign(Object.assign({}, o), {
								embed: t[0]
							});
							const a = JSON.stringify(o),
								s = JSON.stringify(Object(v.a)(a, c, i.clientMessageId));
							e(T(n, o.url, s))
						}
					}
				}, K = "MESSAGE__RECEIVE_ADD_ONE", G = Object(o.a)(K), z = e => async (t, n) => {
					const a = n(),
						s = Object(I.x)(a) === e.channelId;
					Object(y.c)(a) && s && t(Object(i.J)(e.channelId)), t(G({
						[e.messageId]: e
					}))
				}, V = "MESSAGE__ADD_LIST", W = Object(o.a)(V), q = e => async (t, n, a) => {
					let {
						apiContext: s
					} = a;
					const c = Object(I.A)(n(), "channelId");
					t(W(Object.assign({
						channelId: c
					}, e)))
				}, Z = "MESSAGE__SET_MESSAGE_LIST_IS_LOADED", J = Object(o.a)(Z), Q = "MESSAGE__DELETE_ONE", Y = Object(o.a)(Q), X = e => async (t, n) => {
					const a = n(),
						s = Object(S.c)(a, e);
					s && s.messageType === d.d.USER && N.b.deleteMessage(s).then(() => t(Y(s.messageId))).then(() => t(Object(c.a)()))
				}, $ = "MESSAGE__RECEIVE_DELETE_ONE", ee = Object(o.a)($), te = e => async (t, n) => {
					t(ee(e))
				}, ne = "MESSAGE__GET_PREVIOUS_MESSAGES_START", ae = "MESSAGE__GET_PREVIOUS_MESSAGES_END", se = "MESSAGE__GET_PREVIOUS_MESSAGES_ERROR", ce = Object(o.a)(ne), re = Object(o.a)(ae), oe = Object(o.a)(se), ie = e => async (t, n) => {
					const a = Object(I.A)(n(), "channelId");
					t(ce(a)), t(Object(l.F)()), a && await N.b.getPreviousMessages(e).then(e => t(re(Object.assign({
						channelId: a
					}, e)))).catch(() => t(oe(a)))
				}, le = (e, t) => async (n, a, s) => {
					let {
						apiContext: c
					} = s;
					try {
						await Object(j.j)(c(), t, e)
					} catch (r) {
						Object(C.b)(r)
					}
				}, de = (e, t) => async (n, a, s) => {
					let {
						apiContext: c
					} = s;
					try {
						await Object(j.d)(c(), t, e)
					} catch (r) {
						Object(C.b)(r)
					}
				}, ue = "MESSAGE__UNCOLLAPSE", he = Object(o.a)(ue), me = e => async t => {
					t(he(e))
				}, be = "MESSAGE__HIDE_REPORT_PROMPT_FOR_COLLAPSE_MESSAGE", pe = Object(o.a)(be)
		},
		"./src/chat/actions/message/unreadCount.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return g
			}));
			var a = n("./node_modules/lodash/debounce.js"),
				s = n.n(a),
				c = n("./node_modules/lodash/isEqual.js"),
				r = n.n(c),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/chat/endpoints/sendbird/index.ts"),
				d = n("./src/chat/helpers/errors.ts"),
				u = n("./src/chat/selectors/user.ts"),
				h = n("./src/chat/singleton/SendbirdSDK.ts");
			const m = "MESSAGE__SET_UNREAD_COUNT",
				b = Object(i.a)(m),
				p = e => ({
					basicChannelCount: e && Number(e.unread_count) || 0,
					subredditChannelCount: e && Number(e.subreddit_unread_count) ? 1 : 0,
					subredditMentionCount: e && Number(e.subreddit_mention_count) || 0
				}),
				g = s()((e, t, n) => async (a, s, c) => {
					let {
						apiContext: o
					} = c;
					const i = s();
					let m;
					(m = "number" == typeof e || "number" == typeof t || "number" == typeof n ? {
						basicChannelCount: e || 0,
						subredditChannelCount: t || 0,
						subredditMentionCount: n || 0
					} : h.b.isConnected() ? await (async () => {
						try {
							const e = await h.b.getUnreadCount();
							return p(e)
						} catch (e) {
							Object(d.b)(e)
						}
					})() : await (async (e, t) => {
						const n = Object(u.c)(e);
						if (n) try {
							const e = await Object(l.i)(t(), n);
							return p(e && e.body)
						} catch (a) {
							Object(d.b)("Error getting proxy unread count: ".concat(a))
						}
					})(i, o)) && !r()(i.messages.unread, m) && await a(b(m))
				}, o.Fb, {
					leading: !0
				})
		},
		"./src/chat/actions/meta.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "META_RECEIVED", (function() {
				return s
			})), n.d(t, "metaReceived", (function() {
				return c
			})), n.d(t, "SET_EXTERNAL_DATA", (function() {
				return r
			})), n.d(t, "setExternalData", (function() {
				return o
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			const s = "META__META_RECEIVED",
				c = Object(a.a)(s),
				r = "META__SET_EXTERNAL_DATA",
				o = Object(a.a)(r)
		},
		"./src/chat/actions/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var a = n("./node_modules/lodash/noop.js"),
				s = n.n(a),
				c = n("./src/lib/notifications/token.ts"),
				r = n("./src/lib/notifications/index.ts"),
				o = n("./src/lib/notifications/constants.ts"),
				i = n("./src/chat/selectors/app.ts");
			const l = (e, t) => async (n, a, l) => {
				const d = a();
				if (Object(i.d)(d)) return;
				Object(r.a)(e, t, () => {
					n(Object(o.n)()), n(Object(o.m)())
				}, () => {
					n(Object(o.k)())
				}, () => {
					n(Object(o.l)()), Object(c.b)(l.gqlContext)
				}, s.a)
			}
		},
		"./src/chat/actions/page.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var a = n("./src/chat/actions/channel.ts"),
				s = n("./src/chat/actions/sidebar.ts"),
				c = n("./src/chat/actions/user.ts"),
				r = n("./src/chat/selectors/platform.ts");

			function o(e) {
				return t => async (n, a, o) => {
					const i = Object(r.f)(a());
					n(Object(s.d)(i)), await Object(c.l)()(n, a, o), await Object(c.p)()(n, a, o), await e(t)(n, a, o)
				}
			}
			const i = o(e => async (e, t, n) => {}),
				l = o(e => async (e, t, n) => {}),
				d = o(e => async (e, t, n) => {}),
				u = o(e => async (e, t) => {
					const {
						platform: {
							currentPage: n
						}
					} = t();
					if (n && n.urlParams.userIds) {
						const t = n.urlParams.userIds.split(",");
						e(Object(a.A)(t))
					}
				})
		},
		"./src/chat/actions/platform.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./src/config.ts"), n("./node_modules/fbt/lib/FbtPublic.js");
			var a = n("./src/lib/areUrlsEqual/index.ts"),
				s = (n("./src/lib/constants/index.ts"), n("./src/lib/logs/timing.js")),
				c = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/chat/actions/channel.ts"),
				o = n("./src/chat/actions/sendbird/index.ts");
			const i = "PLATFORM__HISTORY_LOCATION_SET",
				l = "PLATFORM__INITIAL_REFERRER_SET",
				d = "PLATFORM__PAGE_META_SET",
				u = (e, t, n) => async (c, i, l) => {
					const d = Date.now(),
						u = i().platform.currentPage;
					if (n && (c(h({
							action: t,
							location: e,
							routeMatch: n
						})), !u || !Object(a.a)(u.url, e))) {
						if (n) {
							const {
								match: e
							} = n;
							await n.route.action(e)(c, i, l);
							const {
								meta: t
							} = n.route;
							if (t) {
								const e = Date.now() - d;
								Object(s.b)({
									duration: e,
									meta: t
								})
							}
						}
						n.match.params.subredditName && c(Object(o.l)()), n.match.params.channelId && c(Object(r.N)())
					}
				}, h = Object(c.a)(i);
			Object(c.a)(l), Object(c.a)(d), Object(c.a)("PLATFORM__MODAL_TOGGLED")
		},
		"./src/chat/actions/promo/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "c", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/lib/cache/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts");
			var r = n("./src/chat/endpoints/users/index.ts"),
				o = n("./src/chat/models/Promo/index.ts"),
				i = n("./src/chat/selectors/experiments.ts"),
				l = n("./src/chat/selectors/messages.ts"),
				d = n("./src/chat/selectors/user.ts"),
				u = n("./src/chat/tracking/events/platform.ts");
			var h = e => {
					const t = Object(a.a)("chat.promo") || [];
					return e = (e => {
						switch (e) {
							case o.c.LegacySubredditChatFtux:
								return o.a.SubredditChatFtux;
							case o.c.LegacyNSFWWarning:
								return o.b.NSFWWarning;
							default:
								return e
						}
					})(e), t.includes(e)
				},
				m = n("./src/chat/actions/promo/constants.ts");
			const b = Object(c.a)(m.a),
				p = Object(c.a)(m.b),
				g = e => async (t, n) => {
					t(p(e)), (e => {
						if (!h(e)) {
							const t = [...Object(a.a)("chat.promo") || [], e];
							Object(a.c)("chat.promo", t, s.ac)
						}
					})(e)
				}, O = () => async (e, t) => {
					Object.keys(o.b).forEach(t => {
						h(o.b[t]) || e(b(o.b[t]))
					})
				}, f = "PROMO__DISPLAY_SUBREDDIT_CHAT_FTUX_PROMO", j = Object(c.a)(f), C = "PROMO__SEEN_SUBREDDIT_CHAT_FTUX", E = Object(c.a)(C), _ = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					Object(r.e)(a()), e(E()), e(g(o.a.SubredditChatFtux))
				}, v = () => async (e, t) => {
					const n = t(),
						a = h(o.a.SubredditChatFtux),
						s = Object(d.e)(n),
						c = Object(i.a)(n),
						r = Object(i.b)(n);
					!a && !s && c && r && (await e(b(o.a.SubredditChatFtux)), await e(j(Object(l.i)(n))), Object(u.b)(n))
				}
		},
		"./src/chat/actions/sendbird/config.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/endpoints/sendbird/index.ts");
			const c = "SENDBIRD_CONFIG__PROXY",
				r = Object(a.a)(c),
				o = "SENDBIRD_CONFIG__GLOBAL_SETTINGS",
				i = Object(a.a)(o),
				l = "SENDBIRD_CONFIG__USER_EXPERIMENTS",
				d = Object(a.a)(l),
				u = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					const c = await Object(s.e)(a());
					c.ok && await Promise.all([e(r({
						host: c.body.proxy_host
					})), e(i({
						maxMessageLength: parseInt(c.body.max_message_length, 10)
					})), e(d({
						userSubredditChatEnabled: c.body.user_subreddit_chat_enabled
					}))])
				}
		},
		"./src/chat/actions/sendbird/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return h
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "k", (function() {
				return N
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "l", (function() {
				return T
			}));
			var a = n("./src/lib/cache/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/chat/actions/tracking.ts"),
				o = n("./src/chat/endpoints/accounts/index.ts"),
				i = n("./src/chat/endpoints/sendbird/index.ts"),
				l = n("./src/chat/models/Contact/index.ts"),
				d = n("./src/chat/selectors/contacts.ts"),
				u = n("./src/chat/selectors/experiments.ts");
			const h = "SENDBIRD__DEACTIVATE_SENDBIRD_SESSION",
				m = "SENDBIRD__ACTIVATE_SENDBIRD_SESSION",
				b = Object(c.a)(h),
				p = (Object(c.a)(m), "SENDBIRD__SET_SENDBIRD_SESSION"),
				g = Object(c.a)(p),
				O = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					return async (t, n, c) => {
						let {
							apiContext: r
						} = c;
						const o = n(),
							{
								account: l,
								session: d
							} = o.user;
						if (d && l) {
							let n;
							const c = Object(a.b)(s.o.CHAT, "session", l.id),
								o = Object(a.a)(c);
							if (o && o.token) n = o;
							else {
								const e = await Object(i.h)(r(), d);
								if (e.ok) {
									const {
										valid_until: t,
										sb_access_token: s
									} = e.body;
									n = {
										expires: t,
										token: s
									}, Object(a.c)(c, n, new Date(t))
								}
							}
							if (n) return void t(g(Object.assign(Object.assign({}, n), {
								active: e
							})))
						}
						t(b())
					}
				},
				f = "SENDBIRD__ADD_MEMBERS_TO_KNOWN_CONTACTS",
				j = Object(c.a)(f),
				C = "SENDBIRD__SET_REDDIT_CONTACT_LIST",
				E = 6 * s.J,
				_ = Object(c.a)(C),
				v = () => async (e, t, n) => {
					let {
						apiContext: c
					} = n;
					const r = t(),
						o = r.contacts.models,
						d = Object(a.b)(s.o.CHAT, "contacts", r.user.account.id),
						u = Object(a.a)(d);
					if (u && u.version === l.a) return void e(_(u.data));
					const h = t().user.session;
					if (!h) return;
					const m = await Object(i.g)(c(), h, 25),
						b = Object(l.c)(m.body).map(e => o[e.id] ? o[e.id] : e),
						p = {
							version: l.a,
							data: b
						};
					Object(a.c)(d, p, E), e(_(b))
				}, y = "SENDBIRD__IDENTIFY_CONTACT_BEGIN", I = "SENDBIRD__IDENTIFY_CONTACT_END", x = Object(c.a)(y), S = Object(c.a)(I), N = e => async (t, n, a) => {
					let {
						apiContext: c
					} = a;
					if (e.username === s.A) return;
					Object(d.c)(n(), e.username) || (t(x({
						username: e.username
					})), Object(o.b)(c(), e.username).then(n => {
						if (n.ok) {
							const a = Object(l.d)(n.body.data);
							if (a) return t(S({
								username: e.username,
								contact: a,
								valid: !0
							}))
						} else t(Object(r.B)(e.username));
						t(S({
							username: e.username,
							valid: !1
						}))
					}))
				}, k = "SENDBIRD__OPT_IN", w = Object(c.a)(k), T = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					Object(u.b)(t()) || (e(w({
						userSubredditChatEnabled: !0
					})), Object(i.o)(a()))
				}
		},
		"./src/chat/actions/sendbird/sdk.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "g", (function() {
				return y
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/actions/channel.ts"),
				c = n("./src/chat/actions/message/index.ts"),
				r = n("./src/chat/actions/message/unreadCount.ts"),
				o = n("./src/chat/actions/sendbird/index.ts"),
				i = n("./src/chat/actions/toast.ts"),
				l = n("./src/chat/constants/sendbird.ts"),
				d = n("./src/chat/constants/toast.ts"),
				u = n("./src/chat/selectors/sendbird.ts"),
				h = n("./src/chat/selectors/user.ts"),
				m = n("./src/chat/singleton/SendbirdSDK.ts");
			const b = "SENDBIRD_SDK__CONNECT_FAIL",
				p = "SENDBIRD_SDK__CONNECT_SUCCESS",
				g = "SENDBIRD_SDK__DISCONNECT",
				O = "SENDBIRD_SDK__UPDATE_CONNECTION_STATUS",
				f = Object(a.a)(b),
				j = Object(a.a)(p),
				C = e => async (t, n) => {
					const a = n(),
						o = Object(u.d)(a),
						b = Object(u.c)(a),
						p = Object(u.b)(a),
						g = Object(h.d)(a),
						O = {
							connectionStatus: l.b.Closed
						};
					if (g && p && b) {
						const {
							id: n
						} = g;
						o && t(Object(i.e)({
							toast: d.a.ConnectionPending
						})), e = e || b.token, m.b.connect(p, e, n, t).then(e => {
							if (e.error) t(f(e.error)), t(v(Object.assign({}, O))), t(Object(i.e)({
								toast: d.a.ConnectionClosed
							}));
							else {
								if (t(j()), o) {
									const e = !0;
									t(Object(c.s)(e)), t(Object(i.e)({
										toast: d.a.ConnectionOpen
									})), t(Object(i.c)(3))
								}
								t(Object(r.b)()), t(Object(s.E)())
							}
						})
					}
				}, E = Object(a.a)(g), _ = () => async e => {
					m.b.disconnect().then(() => {
						e(E()), e(Object(o.j)())
					})
				}, v = Object(a.a)(O), y = () => m.b.reconnect()
		},
		"./src/chat/actions/session.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return u
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts");
			const r = "SESSION__USER_AUTHENTICATED",
				o = "SESSION__USER_LOGGED_OUT",
				i = "SESSION__USER_REAUTHENTICATED",
				l = (Object(a.a)(r), Object(a.a)(i)),
				d = Object(a.a)(o),
				u = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					const r = t().user.session;
					if (r) {
						const t = await ((e, t) => Object(c.a)(e, {
							data: t,
							endpoint: "/refreshproxy",
							method: s.db.POST
						}))(a(), r);
						if (t.ok) {
							const n = t.body;
							if (n.unsafeLoggedOut) return void(r.unsafeLoggedOut || e(d()));
							e(l(n))
						}
					}
				}
		},
		"./src/chat/actions/sidebar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "c", (function() {
				return p
			}));
			var a = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/constants/sidebar.ts"),
				r = n("./src/chat/helpers/urls/index.ts"),
				o = n("./src/chat/selectors/channels.ts"),
				i = n("./src/chat/selectors/channels/next.tsx"),
				l = n("./src/chat/selectors/subreddit.ts");
			const d = "SIDEBAR__SET_SIDEBAR_ACTIVE_INDEX",
				u = Object(s.a)(d),
				h = e => async (t, n) => {
					const a = n();
					e !== a.sidebarTabs.activeIndex && t(u({
						activeIndex: e
					}))
				}, m = "SIDEBAR__SET_LAST_CHANNEL_ID_PER_TAB", b = Object(s.a)(m), p = e => async (t, n) => {
					const s = n(),
						{
							lastChannelIdPerTab: d
						} = s.sidebarTabs,
						u = d[e] || ((e, t) => {
							switch (t) {
								case c.a.SubredditChannels:
									return Object(i.a)(e, c.a.SubredditChannels);
								case c.a.DirectChannels:
									return Object(i.a)(e, c.a.DirectChannels)
							}
						})(s, e);
					if (t(h(e)), u) {
						const e = Object(o.h)(s, u);
						if (e) {
							const n = Object(l.b)(s, u),
								c = n && n.name,
								o = Object(r.getChannelUrl)(e, c);
							return void t(Object(a.b)(o))
						}
					}
				}
		},
		"./src/chat/actions/sitewideRules.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts");
			var i = n("./node_modules/fbt/lib/FbtPublic.js");
			const l = "SITEWIDE_RULES_LOADED",
				d = Object(a.a)(l),
				u = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					const l = t();
					if (!l.user || !l.user.language) return;
					if (l.sitewideRules && l.sitewideRules.length) return;
					const u = await (e => Object(c.a)(Object(r.a)(e, [o.a]), {
						endpoint: "".concat(e.apiUrl, "/api/sitewide_rules.json"),
						method: s.db.GET
					}))(a());
					if (u.ok) {
						const {
							sitewide_rules: t
						} = u.body;
						let n = [];
						if (t && t.length) {
							const e = {
								reasonTextToShow: i.fbt._("It's spam or abuse", null, {
									hk: "21rHqk"
								}),
								nextStepReasons: [t[0], t[1], t[2]]
							};
							5 === t.length && e.nextStepReasons && e.nextStepReasons.push(t[3]), n.push(e), n = n.concat(t.slice(t.length - 1))
						}
						e(d(n))
					}
				}
		},
		"./src/chat/actions/theme.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "THEME_CHANGED", (function() {
				return c
			})), n.d(t, "themeToggle", (function() {
				return l
			})), n.d(t, "switchTheme", (function() {
				return d
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/constants/theme.ts");
			const c = "THEME_CHANGED",
				{
					REDDIT: r,
					NIGHT: o
				} = s.b,
				i = Object(a.a)(c),
				l = () => async (e, t) => {
					const {
						globalTheme: n
					} = t().user.prefs;
					e(i({
						themeKey: n === r ? o : r
					}))
				}, d = e => async (t, n) => {
					t(i({
						themeKey: e ? o : r
					}))
				}
		},
		"./src/chat/actions/toast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/constants/index.ts");
			const c = "TOAST__RESET_TOAST",
				r = Object(a.a)(c),
				o = "TOAST__UPDATE_TOAST",
				i = Object(a.a)(o),
				l = e => async (t, n) => {
					setTimeout(() => t(r()), e * s.Fb)
				}
		},
		"./src/chat/actions/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			const s = "TOOLTIP__DROPDOWN_TOGGLED",
				c = "TOOLTIP__DROPDOWN_UNSET",
				r = Object(a.a)(s),
				o = Object(a.a)(c)
		},
		"./src/chat/actions/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return j
			})), n.d(t, "y", (function() {
				return C
			})), n.d(t, "C", (function() {
				return E
			})), n.d(t, "z", (function() {
				return _
			})), n.d(t, "F", (function() {
				return v
			})), n.d(t, "D", (function() {
				return y
			})), n.d(t, "w", (function() {
				return I
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "x", (function() {
				return N
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "B", (function() {
				return w
			})), n.d(t, "A", (function() {
				return T
			})), n.d(t, "i", (function() {
				return M
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "m", (function() {
				return U
			})), n.d(t, "n", (function() {
				return B
			})), n.d(t, "k", (function() {
				return R
			})), n.d(t, "f", (function() {
				return P
			})), n.d(t, "j", (function() {
				return H
			})), n.d(t, "d", (function() {
				return F
			})), n.d(t, "p", (function() {
				return K
			})), n.d(t, "H", (function() {
				return G
			})), n.d(t, "s", (function() {
				return z
			})), n.d(t, "G", (function() {
				return V
			})), n.d(t, "r", (function() {
				return W
			})), n.d(t, "t", (function() {
				return q
			})), n.d(t, "b", (function() {
				return Z
			})), n.d(t, "E", (function() {
				return J
			})), n.d(t, "v", (function() {
				return Q
			})), n.d(t, "a", (function() {
				return Y
			})), n.d(t, "u", (function() {
				return X
			}));
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/constants/channels.ts"),
				c = n("./src/chat/selectors/channels.ts"),
				r = n("./src/chat/selectors/contacts.ts"),
				o = n("./src/chat/selectors/platform.ts"),
				i = n("./src/chat/selectors/sidebar.ts"),
				l = n("./src/chat/tracking/fields/chat.ts"),
				d = n("./src/chat/tracking/fields/common.ts"),
				u = n("./src/chat/tracking/fields/subreddit.ts"),
				h = n("./src/chat/tracking/sendEvent.ts");
			var m = n("./src/chat/tracking/events/chatSettings.ts"),
				b = n("./src/chat/tracking/events/chatView.ts"),
				p = n("./src/chat/tracking/events/contactsList.ts"),
				g = n("./src/chat/tracking/events/invitationInbox.ts"),
				O = n("./src/chat/tracking/events/messagesInbox.ts"),
				f = n("./src/chat/selectors/telemetry.ts");
			const j = () => async (e, t) => {
				Object(O.b)(t())
			}, C = e => async (t, n) => {
				Object(b.a)(n(), e)
			}, E = (e, t) => async (n, a) => {
				Object(b.d)(a(), e, t)
			}, _ = (e, t) => async (n, a) => {
				Object(b.b)(a(), e, t)
			}, v = () => async (e, t) => {
				Object(b.e)(t())
			}, y = () => async (e, t) => {
				Object(m.f)(t())
			}, I = () => async (e, t) => {
				const n = Object(c.u)(t());
				if (n && n.length) {
					const e = n[0].id;
					Object(m.c)(t(), e)
				}
			}, x = () => async (e, t) => {
				const n = t();
				Object(o.c)(n) !== s.a.VIEW_INVITE && Object(m.b)(n)
			}, S = () => async (e, t) => {
				Object(m.a)(t())
			}, N = e => async (t, n) => {
				Object(m.d)(n(), e)
			}, k = e => async (t, n) => {
				Object(p.c)(n(), e)
			}, w = e => async (t, n) => {
				Object(r.c)(n(), e) && Object(p.f)(n())
			}, T = e => async (t, n) => {
				const a = n(),
					s = e && e.filter(e => e !== a.user.account.id),
					c = s && s[0],
					o = a.contacts.models[c],
					i = o && o.name,
					l = Object(r.a)(n(), i);
				l && Object(p.e)(n(), l)
			}, M = (e, t) => async (e, n) => {
				Object(p.d)(n(), t)
			}, A = () => async (e, t) => {
				Object(p.b)(t())
			}, D = () => async (e, t) => {
				Object(p.a)(t())
			}, L = () => async (e, t) => {
				Object(g.d)(t())
			}, U = () => async (e, t) => {
				Object(g.e)(t())
			}, B = () => async (e, t) => {
				const n = t();
				Object(o.c)(n) === s.a.VIEW_INVITE && Object(g.f)(n)
			}, R = () => async (e, t) => {
				const n = t();
				Object(g.c)(n), Object(i.b)(n) && Object(g.i)(t())
			}, P = () => async (e, t) => {
				Object(g.b)(t())
			}, H = e => async (t, n) => {
				((e, t) => {
					Object(h.a)(Object.assign(Object.assign({
						noun: "create_chat",
						source: a.b.UserHovercard,
						action: a.a.Click,
						chat: Object.assign(Object.assign(Object.assign({}, Object(l.F)(e, t)), Object(l.D)(e, t)), Object(l.E)(e, t))
					}, Object(d.a)(e)), Object(d.b)(e)))
				})(n(), e)
			}, F = () => async (e, t) => {
				Object(O.a)(t())
			}, K = () => async (e, t) => {
				Object(O.c)(t())
			}, G = () => async (e, t) => {
				Object(O.g)(t())
			}, z = () => async (e, t) => {
				Object(O.d)(t())
			}, V = e => async (t, n) => {
				const s = n();
				s.tooltipId !== e && (e => {
					Object(h.a)(Object.assign({
						noun: "snoomoji",
						source: a.b.ChatKeyboard,
						action: a.a.View,
						chat: Object.assign(Object.assign(Object.assign({}, Object(l.B)(e)), Object(l.q)(e)), Object(l.g)(e)),
						subreddit: Object.assign(Object.assign({}, Object(u.a)(e)), Object(u.b)(e))
					}, Object(d.a)(e)))
				})(s)
			}, W = () => async (e, t) => {
				(e => {
					Object(h.a)(Object.assign({
						noun: "other_message",
						source: a.b.ChatView,
						action: a.a.ModDelete,
						chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(l.B)(e)), Object(l.q)(e)), Object(l.g)(e)), Object(l.t)(e)), Object(l.o)(e)), Object(l.y)(e)),
						subreddit: Object.assign(Object.assign({}, Object(u.a)(e)), Object(u.b)(e))
					}, Object(d.a)(e)))
				})(t())
			}, q = e => async (t, n) => {
				const s = n(),
					c = Object(o.b)(s),
					r = (e => {
						switch (e) {
							case a.b.ChatSettings:
								return a.b.ChatSettings;
							default:
								return a.b.ChatView
						}
					})(c && c.source);
				((e, t, n) => {
					Object(h.a)(Object.assign(Object.assign({
						noun: "user",
						source: n,
						action: a.a.Kick,
						chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(l.B)(e)), Object(l.q)(e)), Object(l.g)(e)), Object(l.t)(e)), Object(l.o)(e)), Object(l.y)(e)),
						subreddit: Object.assign(Object.assign({}, Object(u.a)(e)), Object(u.b)(e))
					}, Object(d.a)(e)), {
						actionInfo: Object.assign({
							settingValue: t
						}, Object(f.a)(e))
					}))
				})(n(), e, r)
			}, Z = e => async (t, n) => {
				((e, t) => {
					Object(h.a)(Object.assign({
						noun: "ban_user",
						source: t,
						action: a.a.Submit,
						chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(l.B)(e)), Object(l.q)(e)), Object(l.g)(e)), Object(l.t)(e)), Object(l.o)(e)), Object(l.y)(e)),
						subreddit: Object.assign(Object.assign({}, Object(u.a)(e)), Object(u.b)(e))
					}, Object(d.a)(e)))
				})(n(), e)
			}, J = e => async (t, n) => {
				Object(g.h)(n(), e)
			}, Q = e => async (t, n) => {
				Object(g.h)(n(), e)
			}, Y = (e, t) => async (n, a) => {
				Object(g.a)(a(), e, t)
			}, X = (e, t) => async (n, a) => {
				Object(g.g)(a(), e, t)
			}
		},
		"./src/chat/actions/typingIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return l
			}));
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				c = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/chat/selectors/channels.ts");
			const o = "TYPING_INDICATOR__UPDATE",
				i = Object(c.a)(o),
				l = e => {
					let {
						channelId: t,
						usernames: n
					} = e;
					return async (e, a) => {
						const c = Object(r.A)(a(), "channelId"),
							o = a().typingIndicator.usernames,
							l = t === c,
							d = n.length > 3 && o.length > 3,
							u = !s()(n, o);
						l && u && !d && e(i({
							usernames: n
						}))
					}
				}
		},
		"./src/chat/actions/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "s", (function() {
				return L
			})), n.d(t, "v", (function() {
				return U
			})), n.d(t, "l", (function() {
				return R
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "w", (function() {
				return G
			})), n.d(t, "h", (function() {
				return z
			})), n.d(t, "m", (function() {
				return W
			})), n.d(t, "k", (function() {
				return q
			})), n.d(t, "u", (function() {
				return Z
			})), n.d(t, "j", (function() {
				return J
			})), n.d(t, "t", (function() {
				return Q
			})), n.d(t, "c", (function() {
				return Y
			})), n.d(t, "o", (function() {
				return ee
			})), n.d(t, "b", (function() {
				return te
			})), n.d(t, "p", (function() {
				return se
			})), n.d(t, "n", (function() {
				return ce
			})), n.d(t, "q", (function() {
				return oe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/lodash/chunk.js"),
				s = n.n(a),
				c = n("./node_modules/lodash/isEmpty.js"),
				r = n.n(c),
				o = n("./node_modules/react-router-redux/es/index.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/chat/actions/channel.ts"),
				d = n("./src/chat/actions/theme.ts"),
				u = n("./src/chat/actions/tracking.ts"),
				h = n("./src/chat/constants/channels.ts"),
				m = n("./src/chat/endpoints/accounts/index.ts"),
				b = n("./src/chat/endpoints/sendbird/index.ts"),
				p = n("./src/chat/endpoints/users/index.ts"),
				g = n("./src/chat/helpers/errors.ts"),
				O = n("./src/chat/models/Channel/index.ts"),
				f = n("./src/chat/models/Contact/index.ts");
			const j = e => ({
				experimentId: e.experiment_id,
				owner: e.owner,
				variant: e.variant
			});
			var C = n("./src/chat/models/User/index.ts"),
				E = n("./src/chat/selectors/channels.ts"),
				_ = n("./src/chat/selectors/user.ts"),
				v = n("./src/chat/singleton/SendbirdSDK.ts"),
				y = n("./src/telemetry/models/Event.ts"),
				I = function(e, t) {
					var n = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
					}
					return n
				};
			const x = "USER__ACCOUNT_FETCH_COMPLETED",
				S = "USER__REDDAID_RECEIVED",
				N = "USER__LOID_RECEIVED",
				k = "USER__SESSION_TRACKER_RECEIVED",
				w = "FETCH_EXPERIMENTS_COMPLETED",
				T = Object(i.a)(N),
				M = Object(i.a)("USER__ACCOUNT_FETCH_PENDING"),
				A = Object(i.a)(x),
				D = Object(i.a)("USER__ACCOUNT_FETCH_FAILED"),
				L = Object(i.a)(S),
				U = Object(i.a)(k),
				B = Object(i.a)(w),
				R = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					const s = t(),
						{
							session: c,
							account: o,
							experiments: i
						} = s.user;
					if (!c || o && !r()(i)) return;
					e(M());
					const l = await Object(m.c)(a());
					if (l.ok && l.body && l.body.features) {
						const {
							body: t,
							body: {
								features: n
							}
						} = l, a = Object(C.b)(t), s = (e => Object.keys(e).reduce((t, n) => {
							const a = e[n];
							return "boolean" == typeof a && (t[n] = a), "object" == typeof a && (t[n] = j(a)), t
						}, {}))(n), c = !!a.prefNightmode;
						e(A(a)), e(B(s)), e(Object(d.switchTheme)(c))
					} else e(D(l.error))
				}, P = "USER__USERS_FETCH_COMPLETED", H = Object(i.a)("USER__USERS_FETCH_PENDING"), F = Object(i.a)(P), K = Object(i.a)("USER__USERS_FETCH_FAILED"), G = e => async (t, n, a) => {
					let {
						apiContext: c
					} = a;
					const r = n().contacts.models,
						o = e.filter(e => !r[e]),
						i = s()(o, 100);
					if (!o.length) return;
					t(H(e));
					const l = await Promise.all(i.map(e => Object(p.d)(c(), e))).catch(() => []);
					for (const e of l)
						if (e.ok) {
							const n = Object(C.a)(e.body);
							t(F(n))
						} else t(K())
				}, z = "USERS__USERS_ADD_SELECTED", V = Object(i.a)(z), W = e => async (t, n) => {
					t(V(e)), t(Object(u.g)(e))
				}, q = "USERS__USERS_REMOVE_SELECTED", Z = Object(i.a)(q), J = "USERS__USERS_REMOVE_ALL_SELECTED", Q = Object(i.a)(J), Y = "USERS__BLOCK_USER_COMPLETED", X = Object(i.a)(Y), $ = Object(i.a)("USERS__BLOCK_USER_FAILED"), ee = (e, t) => async (n, a, s) => {
					let {
						apiContext: c
					} = s;
					const r = a(),
						i = r.contacts.models[e],
						d = i && i.name,
						u = Object(E.w)(r),
						b = Object(E.i)(r) || h.b.JOINED,
						p = u && u.type === O.a.Direct,
						f = Object(E.k)(r);
					if (!f) throw new g.a("currentChannel", f);
					const j = f.channelId;
					if (!j) throw new g.a("blockedChannelId", j);
					const C = await Object(m.a)(c(), e);
					C && C.ok && p ? (await v.b.hideChannel(), n(X({
						userId: e,
						username: d
					})), t || (n(Object(l.K)(j)), n(Object(l.O)(b)))) : C && C.ok && !p ? (n(X({
						userId: e,
						username: d
					})), t || n(Object(o.a)())) : C && n($(C.error))
				}, te = "BLOCKED_USER_LIST_FETCH_COMPLETED", ne = Object(i.a)("BLOCKED_USER_LIST_FETCH_FAILED"), ae = Object(i.a)(te), se = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					const {
						contacts: s
					} = t();
					if (!s.fetchedBlockedUsers) {
						const t = await Object(p.c)(a());
						if (t.ok && t.body && t.body.data) {
							const {
								children: n
							} = t.body.data, {
								models: a
							} = s, c = {};
							n.forEach(e => {
								if (a[e.id]) c[e.id] = Object.assign(Object.assign({}, a[e.id]), {
									isBlocked: !0
								});
								else {
									const {
										date: t
									} = e, n = I(e, ["date"]);
									c[e.id] = Object.assign(Object.assign(Object.assign({}, f.b), n), {
										isBlocked: !0
									})
								}
							}), e(ae({
								blockedContacts: c
							}))
						} else e(ne(t.error))
					}
				}, ce = e => async (t, n, a) => {
					let {
						apiContext: s
					} = a;
					const c = n(),
						r = Object(_.c)(c);
					if (r) {
						const n = (e => ({
							chat_ban: e.chatBan,
							delete_all_messages: e.deleteAllMessages,
							subreddit_id: e.subredditId,
							user_id: e.userId
						}))(e);
						(await Object(b.b)(s(), r, n)).ok || Object(g.b)("Error with ban user and delete all messages"), t(Object(o.a)())
					}
					t(Object(u.b)(y.b.ChatSettings))
				}, re = Object(i.a)("MODERATOR__KICK_USER"), oe = (e, t, n) => async (a, s, c) => {
					let {
						apiContext: r
					} = c;
					await Object(b.m)(r(), e, t, n).then(() => {
						a(re({
							userId: t
						})), a(Object(o.a)())
					}).catch(g.b)
				}
		},
		"./src/chat/components/BasicJoined/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIndicator: "ig0HUUOzAEYQrNAtx6nVm",
				loadingIndicator: "ig0HUUOzAEYQrNAtx6nVm",
				Text: "_3k0sISq1Sewv-7h_jA7Nhh",
				text: "_3k0sISq1Sewv-7h_jA7Nhh"
			}
		},
		"./src/chat/components/ChannelHeaderDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				Dropdown: "_1qhSxdEj1WQNv1ToBDZ2SG",
				dropdown: "_1qhSxdEj1WQNv1ToBDZ2SG",
				DropdownRow: "_3EydiRSMl_H2N9IS6m76km",
				dropdownRow: "_3EydiRSMl_H2N9IS6m76km",
				DropdownTrigger: "_2g2FuE9xJbJ5iuYJEimir3",
				dropdownTrigger: "_2g2FuE9xJbJ5iuYJEimir3"
			}
		},
		"./src/chat/components/ChatIcon/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_31wl61nRiy0UL2YxoDjz2D",
				iconWrapper: "_31wl61nRiy0UL2YxoDjz2D",
				Userpic: "fe-_chEHN4wNlORq9_m6c",
				userpic: "fe-_chEHN4wNlORq9_m6c",
				TopUserpic: "_3hrLerMvj3lz0atZrar82R",
				topUserpic: "_3hrLerMvj3lz0atZrar82R",
				BottomUserpic: "_10qnPCOiTCWch5MdQoHupL",
				bottomUserpic: "_10qnPCOiTCWch5MdQoHupL"
			}
		},
		"./src/chat/components/ChatListItem/index.m.less": function(e, t, n) {
			e.exports = {
				activityStyle: "_1PVlOhNZbGo7nEpTkL6Gh0",
				active: "_2rJ3EIF1aYMVsu_oc8J96G",
				unread: "_1ibPLfkwlA3DRLbvoeDQ-z",
				ChatListItem: "_3X4hbg4asgVvLaVYU6dUzs",
				chatListItem: "_3X4hbg4asgVvLaVYU6dUzs",
				ChatIcon: "VrCsXoT_hmeIwuKljzKl0",
				chatIcon: "VrCsXoT_hmeIwuKljzKl0",
				ItemTitle: "_3bFoFHzAF-p75iQXilwXZu",
				itemTitle: "_3bFoFHzAF-p75iQXilwXZu",
				ItemTitleName: "_2uA0PzZKH32GoGhEYmjNQY",
				itemTitleName: "_2uA0PzZKH32GoGhEYmjNQY",
				Description: "inhRCnEPMGix0YN6H1tG-",
				description: "inhRCnEPMGix0YN6H1tG-",
				ItemControls: "Vq8lNsMCbhivjYa37NfXE",
				itemControls: "Vq8lNsMCbhivjYa37NfXE",
				TimeStamp: "_3d9H4ACD6bXp0ZIcchz-ys",
				timeStamp: "_3d9H4ACD6bXp0ZIcchz-ys",
				ChannelName: "_2O9bxNWfKdVw3DGR5RL3qM",
				channelName: "_2O9bxNWfKdVw3DGR5RL3qM",
				selected: "_1kLrU4-nGav42QWAbioHOC"
			}
		},
		"./src/chat/components/ChatMemberList/index.m.less": function(e, t, n) {
			e.exports = {
				MemberActionDropdown: "_35hMJITNiOe39zEBZZIhTb",
				memberActionDropdown: "_35hMJITNiOe39zEBZZIhTb",
				ListItem: "_1r5uWTYsfJO7mPIndnsjxX",
				listItem: "_1r5uWTYsfJO7mPIndnsjxX",
				selected: "_3pi1mfWzFHB0awpfsGqhRY",
				withMenu: "KMmw-k4V45HXPFE1XL2S5",
				IconContainer: "_1sD1FML2DnIYX9pKhe9bWr",
				iconContainer: "_1sD1FML2DnIYX9pKhe9bWr",
				Title: "gwMzsQ4nu6WVY2c9v7Mus",
				title: "gwMzsQ4nu6WVY2c9v7Mus",
				Warning: "Z3RlgS8V_RlK5YYIfJ2C4",
				warning: "Z3RlgS8V_RlK5YYIfJ2C4",
				Info: "_3rIxy-XZtD_FuN9IeEaIYU",
				info: "_3rIxy-XZtD_FuN9IeEaIYU"
			}
		},
		"./src/chat/components/CloseIcon/index.m.less": function(e, t, n) {
			e.exports = {
				IconButton: "_2SeZKjVwSpNwqshVnDJkYF",
				iconButton: "_2SeZKjVwSpNwqshVnDJkYF"
			}
		},
		"./src/chat/components/CloseIcon/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				c = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/actions/container.ts"),
				l = n("./src/chat/actions/tracking.ts"),
				d = n("./src/chat/constants/container.ts"),
				u = n("./src/chat/controls/Button/index.tsx"),
				h = n("./src/chat/helpers/chatSelector.ts"),
				m = n("./src/chat/helpers/dom.ts"),
				b = n("./src/chat/icons/svgs/NavClose/index.tsx"),
				p = n("./src/chat/components/CloseIcon/index.m.less"),
				g = n.n(p);
			const O = o.a.wrapped(u.d, "IconButton", g.a),
				f = Object(r.b)(() => Object(h.a)({
					containerSize: e => e.container.size
				}), e => ({
					close: () => {
						e(Object(i.sizeChanged)(d.a.HIDDEN)), e(Object(l.d)())
					}
				}));
			t.a = f(e => {
				let {
					className: t,
					close: n,
					containerSize: s
				} = e;
				return s === d.a.EMBED || s === d.a.MINIMIZED ? c.a.createElement(O, {
					onClick: Object(m.b)(n),
					title: a.fbt._("Close chat", null, {
						hk: "4dFacQ"
					}),
					className: t
				}, c.a.createElement(b.a, null)) : null
			})
		},
		"./src/chat/components/DateSplitter/index.m.less": function(e, t, n) {
			e.exports = {
				TimeWrapper: "_1XAkyv2F6byrdWJg-SHZ7i",
				timeWrapper: "_1XAkyv2F6byrdWJg-SHZ7i",
				Time: "_2LyKshutzx3TO04UvQTYsq",
				time: "_2LyKshutzx3TO04UvQTYsq"
			}
		},
		"./src/chat/components/FirstTimeUserExpPromo/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3jv230PJLqyvzYi6HLSGNM",
				wrapper: "_3jv230PJLqyvzYi6HLSGNM",
				Header: "_1OSc6SRgz_0qyXqscJJ81m",
				header: "_1OSc6SRgz_0qyXqscJJ81m",
				LabelText: "kPr-1VYwxZCZyCL060cvm",
				labelText: "kPr-1VYwxZCZyCL060cvm",
				TitleText: "_3ki1nL4m3gEsHslCdrmsKK",
				titleText: "_3ki1nL4m3gEsHslCdrmsKK",
				BodyText: "_3sUoTD4J2O46aAXCLOaXIg",
				bodyText: "_3sUoTD4J2O46aAXCLOaXIg",
				ChatBubbleIcon: "_3bA0NgJYJ3INjss53obrKL",
				chatBubbleIcon: "_3bA0NgJYJ3INjss53obrKL",
				Button: "_9zFuE5zPCg7R9QqIEJ3KS",
				button: "_9zFuE5zPCg7R9QqIEJ3KS"
			}
		},
		"./src/chat/components/FrameContent/index.m.less": function(e, t, n) {
			e.exports = {
				Main: "RaDn8d65cHW3dCPgTkSRN",
				main: "RaDn8d65cHW3dCPgTkSRN",
				Content: "_2K5FjgfpUbS22QcAEaqgts",
				content: "_2K5FjgfpUbS22QcAEaqgts",
				Modal: "Jz9-gUKS4kLBzcOh-ylJF",
				modal: "Jz9-gUKS4kLBzcOh-ylJF"
			}
		},
		"./src/chat/components/FrameContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Zb
			}));
			n("./node_modules/core-js/modules/es6.regexp.match.js");
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				c = n("./node_modules/react/index.js"),
				r = n.n(c),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/chat/actions/promo/index.ts"),
				d = n("./node_modules/lodash/map.js"),
				u = n.n(d),
				h = n("./node_modules/lodash/sortBy.js"),
				m = n.n(h),
				b = n("./src/lib/constants/index.ts"),
				p = n("./src/chat/actions/channel.ts"),
				g = n("./src/chat/actions/message/index.ts"),
				O = n("./src/chat/actions/message/inboxScroller.ts"),
				f = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./node_modules/reselect/es/index.js"),
				C = n("./src/chat/selectors/channels.ts");
			const E = Object(j.c)({
				channel: C.k
			});
			var _ = Object(o.b)(E)((function(e) {
				let {
					channel: t
				} = e;
				return r.a.createElement(r.a.Fragment, null, t ? f.fbt._({
					"*": "{Member count} Members",
					_1: "1 Member"
				}, [f.fbt._plural(t.memberCount, "Member count")], {
					hk: "2Eb5yZ"
				}) : f.fbt._("Members", null, {
					hk: "2WCLby"
				}))
			}));
			const v = (new Date).setHours(0, 0, 0, 0),
				y = e => (e => v < e.getTime())(e) ? I(e) : (e => {
					return v - b.x < e.getTime()
				})(e) ? f.fbt._("Yesterday", null, {
					hk: "2GVGk3"
				}) : S(e),
				I = new Intl.DateTimeFormat(void 0, {
					hour: "2-digit",
					minute: "2-digit"
				}).format,
				x = new Intl.DateTimeFormat(void 0, {
					day: "numeric",
					month: "short",
					year: "2-digit"
				}).format,
				S = new Intl.DateTimeFormat(void 0, {
					day: "numeric",
					month: "short"
				}).format,
				N = new Intl.DateTimeFormat(void 0, {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric"
				}).format,
				k = e => e.toISOString();
			var w = n("./src/chat/components/DateSplitter/index.m.less"),
				T = n.n(w);
			const M = i.a.div("TimeWrapper", T.a),
				A = i.a.time("Time", T.a);
			var D = e => r.a.createElement(M, null, r.a.createElement(A, null, (e => {
					const t = v - b.x,
						n = new Date(v).setDate(1),
						a = new Date(n).setMonth(0),
						s = new Date(e);
					return e >= v ? f.fbt._("Today", null, {
						hk: "1W0rfJ"
					}) : e >= t ? f.fbt._("Yesterday", null, {
						hk: "2GVGk3"
					}) : e >= n ? S(s) : e >= a ? S(s) : x(s)
				})(e.date))),
				L = n("./src/chat/helpers/json.ts"),
				U = (n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./src/config.ts")),
				B = n("./src/chat/helpers/chatSelector.ts"),
				R = n("./src/chat/controls/Svg/index.tsx"),
				P = n("./src/chat/icons/Nsfw/index.m.less"),
				H = n.n(P);
			const F = e => r.a.createElement(R.a, {
					width: e.width,
					height: e.height,
					className: e.className,
					viewBox: "0 0 200 200"
				}, r.a.createElement("g", null, r.a.createElement("rect", {
					width: "100%",
					height: "100%",
					fill: "white"
				}), r.a.createElement("path", {
					fill: "#000000",
					d: "M0 100v100h200V0H0v100zm82.1-20.3c2 .4 2.9.2 2.9-.8 0-.8.3-.9.9-.4 1.2 1.4 2.2 12.5 1 12.5-.5 0-.9-.7-.9-1.6 0-.9-1.5-3.1-3.4-5C77.2 79 70 79.9 70 86c0 3 3.1 6.1 10.8 11 7.6 4.7 9.9 9.9 6.8 15.8-2.5 4.8-9.1 6.9-16.2 5.1-3.6-.9-4.8-.9-5.4.1-1.1 1.8-1.7.2-2.4-6.5-.6-5.1-.5-5.7.6-4.1 4 6 7.4 8.8 11 8.9 4.5.1 7.8-2.5 7.8-6.3 0-3.4-1.3-4.9-8.5-9.7-10-6.7-11.9-10.2-8.8-16.3 2-3.8 7.1-6.3 11.2-5.4 1.3.3 3.6.8 5.2 1.1zM39.8 93.1L51 107.3V95.4c0-12.5-.3-13.5-3.5-14.9-1.7-.8-1.6-.9 1.2-1.3 1.8-.2 5-.2 7 0l3.8.4-2.7 1.2-2.8 1.1-.2 18.8-.3 18.8-13.2-16.3L27 86.9v28l2.8 1.5c2.6 1.5 2.4 1.5-4.8 1.5-6 0-7-.2-5-1 1.3-.6 2.8-1.5 3.2-2.2.4-.7.8-8 .8-16.3 0-15.8-.3-17-5-18.7-.8-.3 1-.6 4-.6l5.5-.1 11.3 14.1zM125 83c0 4.2-1.4 5.4-2.3 2-.7-2.7-4.6-4-11.8-4H105v15.1l6.3-.3c5.3-.3 6.3-.6 7.2-2.6 1.7-3.8 2.5-2.4 2.5 4.3 0 6.7-.8 8.1-2.5 4.2-.9-1.9-1.9-2.2-7.2-2.5l-6.3-.3v8.5c0 8.3 0 8.5 2.8 9.4 2.1.8.9 1-6.3 1-6.9 0-8.4-.2-6.4-.9 3.4-1.2 3.9-3.8 3.9-18.4 0-14.6-.5-17.2-3.9-18.4-1.9-.7 2-1 13.7-1L125 79v4zm13.3-2.5l-2.2 1.6 3 8.1c1.6 4.5 3.8 10 4.8 12.2l1.7 4.1 3.1-8c3-8 3-8 1.3-12.4-.9-2.4-2.8-5-4.1-5.7-2.2-1.2-1.5-1.3 6.1-1.3 5.8 0 7.8.3 6.4.9-1.2.5-2.5 1.3-2.8 1.8-.5.9 7.3 22.4 8.6 23.7.3.3 2.5-4.7 4.9-11.1l4.3-11.7-2.3-1.8-2.3-1.9 5.8.1c5.5 0 5.8.1 3.8 1.5-1.5 1-4.2 7.1-8.5 19.4-3.5 9.9-6.7 18-7 18-.3 0-2.5-5.2-4.9-11.5-2.3-6.3-4.6-11.3-5-11-.4.2-2.4 5.3-4.5 11.2-2.1 5.9-4.1 11.2-4.5 11.6-.4.5-1.8-2.2-3-6-5.5-16.5-11.1-29.9-13.2-31.5-2.2-1.7-2.1-1.8 5.2-1.8 7 0 7.3.1 5.3 1.5z"
				}))),
				K = i.a.wrapped(F, "NSFWIcon", H.a),
				G = i.a.wrapped(F, "SmallNSFWIcon", H.a);
			var z = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				V = n("./src/chat/icons/Userpic/index.m.less"),
				W = n.n(V);
			const q = i.a.i("FallbackAvatar", W.a),
				Z = i.a.wrapped(q, "FallbackAvatarWrapper", W.a),
				J = i.a.wrapped(e => {
					const {
						className: t,
						height: n,
						width: a,
						userId: s
					} = e, {
						processingAvatarImageUrl: c
					} = U.a, o = (e => e.replace(b.yb.Account + "_", ""))(s), {
						avatar: i,
						color: l
					} = (e => {
						const t = z.length,
							n = parseInt(e, 36),
							a = n % 20 + 1,
							s = Math.floor(n / 20) % t;
						return {
							avatar: ("0" + a).slice(-2),
							color: z[s]
						}
					})(o), d = "".concat(c, "/avatar_default_").concat(i, "_").concat(l, ".png"), u = {
						backgroundColor: l,
						backgroundImage: "url(".concat(d, ")"),
						height: n,
						width: a
					};
					return r.a.createElement("i", {
						className: t,
						style: u
					})
				}, "SnooIcon", W.a);
			class Q extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						profileImgFailed: !1
					}, this.onError = this.onError.bind(this)
				}
				onError() {
					this.setState({
						profileImgFailed: !0
					})
				}
				render() {
					const {
						className: e,
						height: t,
						width: n,
						profileImg: a,
						name: s
					} = this.props, {
						profileImgFailed: c
					} = this.state, o = {
						height: t,
						width: n
					};
					return c || !a ? r.a.createElement(Z, {
						style: o,
						className: e,
						title: "".concat(s, " ").concat(f.fbt._("Snoovatar", null, {
							hk: "1jT1ZL"
						}))
					}) : r.a.createElement("img", {
						style: o,
						onError: this.onError,
						className: e,
						src: a,
						alt: "".concat(s, " ").concat(f.fbt._("Snoovatar", null, {
							hk: "1jT1ZL"
						}))
					})
				}
			}
			const Y = i.a.wrapped(Q, "VoicesAvatar", W.a),
				X = Object(B.a)({
					contact: (e, t) => e.contacts.models[t.userId],
					currentUser: e => e.user.account
				});
			var $ = Object(o.b)(X)(e => {
					const {
						className: t,
						contact: n,
						currentUser: a,
						height: s,
						width: c,
						userId: o
					} = e, i = o === a.id, {
						profileImg: l = "",
						name: d = ""
					} = i ? a : n || {};
					return n && n.isNSFW && !i ? r.a.createElement(G, {
						className: t,
						height: s,
						width: c
					}) : l ? r.a.createElement(Y, {
						className: t,
						height: s,
						width: c,
						profileImg: l,
						name: d
					}) : r.a.createElement(J, {
						className: t,
						height: s,
						width: c,
						userId: o
					})
				}),
				ee = n("./src/chat/models/Channel/index.ts"),
				te = n("./src/chat/components/Intro/index.m.less"),
				ne = n.n(te);
			const ae = i.a.span("Wrapper", ne.a),
				se = i.a.span("SubredditName", ne.a),
				ce = i.a.span("ChannelName", ne.a),
				re = i.a.div("ChannelDescription", ne.a),
				oe = i.a.ul("Users", ne.a),
				ie = i.a.li("User", ne.a),
				le = i.a.span("UserTitle", ne.a),
				de = (e, t) => r.a.createElement(r.a.Fragment, null, r.a.createElement(oe, null, t.map((e, t, n) => r.a.createElement(ie, {
					key: e.id
				}, r.a.createElement($, {
					height: "16px",
					width: "16px",
					userId: e.id
				}), r.a.createElement(le, null, "".concat(e.name).concat(t < n.length - 1 ? "," : ""))))), r.a.createElement(re, null, (e => {
					try {
						const t = e.data && Object(L.a)(e.data, {
							welcome_text: ""
						});
						if (t && t.welcome_text) return t && t.welcome_text
					} catch (t) {}
					return f.fbt._("This is the start of a beautiful thing. Say something nice, or share a cat fact.", null, {
						hk: "J8whX"
					})
				})(e)));
			var ue, he = e => {
					let {
						channel: t,
						subredditName: n,
						users: a
					} = e;
					return r.a.createElement(ae, null, t.type === ee.a.Subreddit && n ? ((e, t) => {
						const n = e.customData && e.customData.description;
						return r.a.createElement(r.a.Fragment, null, r.a.createElement(se, null, "r/".concat(t)), r.a.createElement(ce, null, e.name), r.a.createElement(re, null, n))
					})(t, n) : de(t, a))
				},
				me = n("./src/lib/classNames/index.ts"),
				be = n("./src/lib/opener/index.ts"),
				pe = n("./node_modules/react-router-redux/es/index.js"),
				ge = n("./src/chat/constants/messages.ts");
			! function(e) {
				e.Ban = "ban", e.Block = "block", e.Kick = "kick", e.Report = "report"
			}(ue || (ue = {}));
			var Oe = n("./src/chat/controls/Button/index.tsx"),
				fe = n("./src/chat/helpers/urls/index.ts"),
				je = n("./src/telemetry/models/Event.ts"),
				Ce = n("./src/chat/components/Message/ActionButtonGroup.m.less"),
				Ee = n.n(Ce);
			const _e = i.a.span("Wrapper", Ee.a),
				ve = i.a.span("ActionButton", Ee.a),
				ye = Object(B.a)({
					channel: C.w,
					isMod: C.a
				});
			var Ie = Object(o.b)(ye, e => ({
					onDeleteMessage: (t, n, a) => {
						e(Object(pe.b)(Object(fe.messageActionUrl)(t, n, ge.a.DELETE, a)))
					},
					onReportMessage: (t, n, a) => e(Object(pe.b)(Object(fe.messageActionUrl)(t, n, ge.a.REPORT, a))),
					onReportInvitedMessage: (t, n, a) => e(Object(pe.b)(Object(fe.inviteMessageActionUrl)(t, n, ge.a.REPORT, a))),
					onKickUser: (t, n, a) => e(Object(pe.b)(Object(fe.userActionUrl)(t, n, ue.Kick, a, {
						source: je.b.ChatView
					}))),
					onBanUser: (t, n, a) => {
						e(Object(pe.b)(Object(fe.userActionUrl)(t, n, ue.Ban, a)))
					}
				}))(e => {
					const {
						isMod: t,
						channel: n,
						message: {
							messageId: a,
							sender: s
						},
						fromCurrentUser: c,
						fromInvite: o,
						onBanUser: i,
						onDeleteMessage: l,
						onKickUser: d,
						onReportMessage: u,
						onReportInvitedMessage: h,
						subredditName: m
					} = e, b = n && n.channelId;
					return b ? r.a.createElement(_e, {
						className: e.className
					}, t && !c ? r.a.createElement(r.a.Fragment, null, r.a.createElement(ve, {
						onClick: () => l(b, a, m)
					}, r.a.createElement(Oe.f, null)), r.a.createElement(ve, {
						onClick: () => o ? h(b, a, m) : u(b, a, m)
					}, r.a.createElement(Oe.c, null)), r.a.createElement(ve, {
						onClick: () => s && d(b, s.userId, m)
					}, r.a.createElement(Oe.e, null)), m && r.a.createElement(ve, {
						onClick: () => s && i(b, s.userId, m)
					}, r.a.createElement(Oe.a, null))) : c ? r.a.createElement(ve, {
						onClick: () => l(b, a, m)
					}, r.a.createElement(Oe.f, null)) : r.a.createElement(ve, {
						onClick: () => o ? h(b, a, m) : u(b, a, m)
					}, r.a.createElement(Oe.c, null))) : null
				}),
				xe = n("./src/chat/actions/tracking.ts"),
				Se = n("./src/chat/controls/TextButton.m.less"),
				Ne = n.n(Se);
			var ke = i.a.wrapped(e => r.a.createElement("button", {
					onClick: e.onClick,
					className: Object(me.a)(e.className, {
						[Ne.a.hidden]: e.hidden
					})
				}, e.children), "TextButton", Ne.a),
				we = n("./src/chat/components/Message/CollapsedMessage.m.less"),
				Te = n.n(we);
			var Me = Object(o.b)(void 0, (e, t) => ({
					uncollapseMessage: () => {
						e(Object(g.B)(t)), e(Object(xe.v)(t.messageId))
					},
					viewCollapsedMessage: () => {
						e(Object(xe.E)(t.messageId))
					}
				}))(i.a.wrapped(e => {
					let {
						className: t,
						uncollapseMessage: n,
						viewCollapsedMessage: a
					} = e;
					return r.a.createElement("div", {
						onLoad: a,
						className: t
					}, f.fbt._("This message has been collapsed due to potentially offensive language.", null, {
						hk: "4qscuz"
					}), r.a.createElement("div", null, r.a.createElement(ke, {
						onClick: n
					}, f.fbt._("View Message", null, {
						hk: "QjaEs"
					}))))
				}, "CollapsedMessage", Te.a)),
				Ae = n("./src/chat/components/Message/FailedMenu.m.less"),
				De = n.n(Ae);
			const Le = i.a.div("ButtonControls", De.a),
				Ue = i.a.span("Text", De.a),
				Be = i.a.wrapped(Oe.b, "Button", De.a);
			class Re extends c.Component {
				constructor() {
					super(...arguments), this.handleResend = () => this.props.onResend(this.props.clientMessageId), this.handleDelete = () => this.props.onDelete(this.props.clientMessageId)
				}
				render() {
					return r.a.createElement(Le, null, r.a.createElement(Ue, null, f.fbt._("Failed to send", null, {
						hk: "2feF2H"
					})), r.a.createElement(Be, {
						primaryNoBorder: !0,
						onClick: this.handleResend
					}, f.fbt._("Resend", null, {
						hk: "cXpU3"
					})), r.a.createElement(Be, {
						warningNoBorder: !0,
						onClick: this.handleDelete
					}, f.fbt._("Delete", null, {
						hk: "2dtAT"
					})))
				}
			}
			var Pe = Object(o.b)(void 0, (e, t) => {
					let {
						channelId: n
					} = t;
					return {
						onResend: t => e(Object(g.x)(n, t)),
						onDelete: t => e(Object(g.w)({
							clientMessageId: t
						}))
					}
				})(Re),
				He = n("./src/chat/helpers/linkParser/index.ts"),
				Fe = n("./src/chat/components/Message/Link.m.less"),
				Ke = n.n(Fe);
			const Ge = i.a.wrapped(e => r.a.createElement("a", {
					className: Object(me.a)(e.className, {
						[Ke.a.noUnderline]: e.noUnderline
					}),
					href: Object(He.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children), "Link", Ke.a),
				ze = i.a.span("LinkedText", Ke.a),
				Ve = i.a.span("NameWrapper", Ke.a),
				We = i.a.span("Name", Ke.a),
				qe = i.a.span("DetailsWrapper", Ke.a),
				Ze = i.a.span("Title", Ke.a),
				Je = i.a.p("Description", Ke.a),
				Qe = e => r.a.createElement(Ge, {
					noUnderline: e.noUnderline,
					href: Object(He.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children),
				Ye = e => e.isEmbed ? (e => r.a.createElement(Qe, e, r.a.createElement(Ve, null, r.a.createElement(We, null, e.name)), r.a.createElement(qe, null, r.a.createElement("span", null, r.a.createElement(Ze, null, e.title), r.a.createElement(Je, null, e.description)))))(e) : (e => e.href ? r.a.createElement(Qe, e, e.children) : r.a.createElement(ze, e, e.children))(e);
			var Xe = n("./src/lib/linkMatchers/customLinks.ts"),
				$e = n("./src/chat/components/Message/LinkedText.m.less"),
				et = n.n($e);
			const tt = i.a.pre("MessageText", et.a),
				nt = (e, t, n, a, s) => r.a.createElement(Ye, {
					key: s || e,
					href: e,
					target: n,
					rel: be.b,
					noUnderline: a === Xe.d.mention || a === Xe.d.profile || a === Xe.d.profileFull || a === Xe.d.subreddit || a === Xe.d.subredditFull
				}, t);
			var at = e => {
					const {
						value: t,
						highlighMentionGroupLinks: n,
						className: a
					} = e, s = !(!n || !n.length), c = Object(He.a)(t, s, nt);
					return r.a.createElement(tt, {
						className: a
					}, c)
				},
				st = n("./src/chat/components/Message/OffensiveMessageReportPrompt.m.less"),
				ct = n.n(st);
			const rt = i.a.wrapped(ke, "Regular", ct.a),
				ot = i.a.wrapped(ke, "Active", ct.a),
				it = Object(o.b)(void 0, (e, t) => ({
					cancel: () => {
						e(Object(g.t)(t)), e(Object(xe.a)(t.channelId, t.messageId))
					},
					reportMessage: () => {
						e(Object(pe.b)(Object(fe.inviteMessageActionUrl)(t.channelId, t.messageId, ge.a.REPORT, t.subredditName))), e(Object(g.t)(t)), e(Object(xe.u)(t.channelId, t.messageId))
					}
				}));
			var lt = i.a.wrapped(it(e => r.a.createElement("div", {
					className: e.className
				}, f.fbt._("Was this message offensive?", null, {
					hk: "1sBVkd"
				}), r.a.createElement("div", null, r.a.createElement(rt, {
					onClick: () => e.cancel(e)
				}, f.fbt._("No", null, {
					hk: "SG3Y"
				})), r.a.createElement(ot, {
					onClick: () => e.reportMessage(e)
				}, f.fbt._("Yes", null, {
					hk: "3ONldA"
				}))))), "OffensiveMessageReport", ct.a),
				dt = n("./node_modules/lodash/isEmpty.js"),
				ut = n.n(dt);
			var ht = e => r.a.createElement(R.a, {
					className: e.className,
					viewBox: "0 0 14 11"
				}, r.a.createElement("path", {
					d: "M13.1656,4.55472 L12.0464,3.43472 C11.896,3.28432 11.6928,3.20032 11.4808,3.20032 C11.268,3.20032 11.0648,3.28432 10.9152,3.43472 L5.32,9.02912 L3.0856,6.79472 C2.7736,6.48192 2.2672,6.48192 1.9544,6.79472 L0.8344,7.91472 C0.5216,8.22752 0.5216,8.73392 0.8344,9.04592 L4.7544,12.96592 C4.9112,13.12192 5.1152,13.20032 5.32,13.20032 C5.5248,13.20032 5.7296,13.12192 5.8856,12.96592 L13.1656,5.68592 C13.4784,5.37312 13.4784,4.86752 13.1656,4.55472",
					transform: "translate(0 -3)"
				})),
				mt = n("./src/chat/icons/svgs/Trash/index.tsx"),
				bt = n("./src/chat/components/MessageReportDialog/ActionMenu.m.less"),
				pt = n.n(bt);
			const {
				fbt: gt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ot = i.a.wrapped(ht, "Approve", pt.a), ft = i.a.wrapped(mt.a, "Trash", pt.a), jt = i.a.div("ButtonControls", pt.a), Ct = i.a.wrapped(Oe.b, "Button", pt.a), Et = i.a.span("ButtonText", pt.a);
			class _t extends c.Component {
				render() {
					const {
						onDelete: e,
						onIgnore: t,
						reportedChannelId: n,
						reportedMessageId: a
					} = this.props;
					return r.a.createElement(jt, null, r.a.createElement(Ct, {
						primaryNoBorder: !0,
						onClick: () => e(a, n)
					}, r.a.createElement(ft, null), r.a.createElement(Et, null, gt._("Delete Message", null, {
						hk: "3ksti7"
					}))), r.a.createElement(Ct, {
						primaryNoBorder: !0,
						onClick: () => t(a, n)
					}, r.a.createElement(Ot, null), r.a.createElement(Et, null, gt._("Ignore Report", null, {
						hk: "1QScZP"
					}))))
				}
			}
			var vt = Object(o.b)(void 0, e => ({
					onDelete: (t, n) => e(Object(g.y)(t, n)),
					onIgnore: (t, n) => e(Object(g.z)(t, n))
				}))(_t),
				yt = n("./node_modules/lodash/difference.js"),
				It = n.n(yt),
				xt = n("./node_modules/lodash/noop.js"),
				St = n.n(xt),
				Nt = n("./src/higherOrderComponents/asTooltip.tsx"),
				kt = n("./src/chat/actions/tooltip.ts"),
				wt = n("./src/chat/selectors/platform.ts");
			const {
				Ban: Tt,
				Block: Mt,
				Report: At,
				Kick: Dt
			} = ue, Lt = e => async (t, n) => {
				const a = n(),
					s = Object(wt.d)(a),
					c = Object(wt.e)(a);
				s && t(Object(pe.b)(Object(fe.userActionUrl)(s, e, Mt, c)))
			};
			var Ut;
			! function(e) {
				e.AddToRoom = "addToRoom", e.AddToGroup = "addToGroup", e.Ban = "ban", e.Block = "block", e.CopyLink = "copyLink", e.Kick = "kick", e.Leave = "leave", e.LeaveRoom = "leaveRoom", e.LockRoom = "lockRoom", e.MuteBadging = "muteBadging", e.MuteNotifs = "muteNotifs", e.Profile = "profile", e.Report = "report", e.RenameGroup = "renameGroup", e.UnlockRoom = "unlockRoom", e.UnmuteBadging = "unmuteBadging", e.UnmuteNotifs = "unmuteNotifs", e.ViewMembers = "members"
			}(Ut || (Ut = {}));
			const {
				AddToGroup: Bt,
				AddToRoom: Rt,
				Ban: Pt,
				Block: Ht,
				CopyLink: Ft,
				Kick: Kt,
				Leave: Gt,
				LeaveRoom: zt,
				LockRoom: Vt,
				MuteBadging: Wt,
				MuteNotifs: qt,
				Profile: Zt,
				RenameGroup: Jt,
				UnlockRoom: Qt,
				UnmuteBadging: Yt,
				UnmuteNotifs: Xt,
				ViewMembers: $t
			} = Ut, en = [Wt, Yt, qt, Xt], tn = {
				directChannel: [Zt, Ht, ...en],
				groupChannel: [Jt, $t, Bt, Gt, ...en],
				subredditChannel: [Rt, Ft, zt, Vt, Wt, Qt, ...en],
				members: [Ht, Kt, Pt]
			}, nn = (e, t, n) => !(e === Vt && (!t || n)), an = (e, t, n) => !!(e !== Qt || t && n), sn = (e, t) => !(e === Ft && !t), cn = (e, t) => !(e === Wt && t), rn = (e, t) => !(e === Yt && !t), on = (e, t) => !(e === qt && t), ln = (e, t) => !(e === Xt && !t), dn = "dropdown-container";
			var un = n("./src/chat/controls/Dropdown/index.tsx"),
				hn = n("./src/chat/controls/Dropdown/Row.tsx"),
				mn = n("./src/chat/helpers/dom.ts");

			function bn() {
				return (bn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var pn = e => r.a.createElement(R.a, bn({}, e, {
					viewBox: "0 0 14 4"
				}), r.a.createElement("g", {
					transform: "translate(-475.000000, -286.000000)"
				}, r.a.createElement("path", {
					d: "M485.479375,287.804009 C485.479375,288.796214 486.265328,289.608018 487.225938,289.608018 C488.186547,289.608018 488.9725,288.796214 488.9725,287.804009 C488.9725,286.811804 488.186547,286 487.225938,286 C486.265328,286 485.479375,286.811804 485.479375,287.804009 M480.239688,287.804009 C480.239688,288.796214 481.025641,289.608018 481.98625,289.608018 C482.946859,289.608018 483.732813,288.796214 483.732813,287.804009 C483.732813,286.811804 482.946859,286 481.98625,286 C481.025641,286 480.239688,286.811804 480.239688,287.804009 M478.493125,287.804009 C478.493125,286.811804 477.707172,286 476.746563,286 C475.785953,286 475,286.811804 475,287.804009 C475,288.796214 475.785953,289.608018 476.746563,289.608018 C477.707172,289.608018 478.493125,288.796214 478.493125,287.804009"
				}))),
				gn = n("./src/chat/components/MemberActionDropdown/index.m.less"),
				On = n.n(gn);
			const fn = ["t2_2ednvld6"],
				jn = i.a.wrapped(e => r.a.createElement("span", {
					className: Object(me.a)({
						[On.a.active]: e.id === e.dropdownId
					}, e.className)
				}, e.children), "Wrapper", On.a),
				Cn = Object(Nt.a)(i.a.wrapped(un.a, "Component", On.a)),
				En = i.a.wrapped(hn.a, "DropdownRow", On.a),
				_n = i.a.wrapped(Oe.d, "IconButton", On.a),
				vn = e => r.a.createElement("span", {
					className: e.className,
					id: e.id,
					onClick: e.onClick,
					role: "button"
				}, r.a.createElement(_n, null, r.a.createElement(pn, null))),
				yn = Object(B.a)({
					dropdownId: e => e.tooltipId || "",
					currentUserIsChannelMod: C.a
				});
			class In extends c.Component {
				constructor() {
					super(...arguments), this.onOptionClick = e => {
						switch (e) {
							case Ut.Block:
								return this.props.onBlockUser(this.props.userId);
							case Ut.Report:
								return this.props.onReportUser(this.props.userId);
							case Ut.Kick:
								return this.props.onKickUser(this.props.userId);
							case Ut.Ban:
								return this.props.onBanUser(this.props.userId);
							default:
								return St.a
						}
					}, this.getContainer = e => document.getElementsByClassName(this.props.containerClassName || dn)[e], this.getDropdownOptions = () => {
						const {
							isBlockedUser: e,
							currentUserIsChannelMod: t
						} = this.props, {
							Ban: n,
							Block: a,
							Kick: s
						} = Ut;
						return e && !t ? It()(tn.members, [a, n, s]) : t ? e ? It()(tn.members, [a]) : tn.members : It()(tn.members, [n, s])
					}, this.getDropdownOptionDisplayText = e => {
						switch (e) {
							case Ut.Block:
								return f.fbt._("Block", null, {
									hk: "t44ep"
								});
							case Ut.Report:
								return f.fbt._("Report", null, {
									hk: "4oVcnd"
								});
							case Ut.Kick:
								return f.fbt._("Kick", null, {
									hk: "oXEqT"
								});
							case Ut.Ban:
								return f.fbt._("Ban", null, {
									hk: "2oxlBJ"
								});
							default:
								return ""
						}
					}
				}
				render() {
					const {
						props: {
							className: e,
							dropdownId: t,
							dropdownIndex: n,
							id: a,
							onOpenDropdown: s,
							userId: c
						},
						getDropdownOptions: o,
						getContainer: i
					} = this;
					if (fn.includes(c)) return null;
					const l = o();
					return !!l.length && r.a.createElement(jn, {
						className: e,
						id: a,
						dropdownId: t
					}, r.a.createElement(vn, {
						id: a,
						menu: !0,
						onClick: Object(mn.b)(s)
					}), r.a.createElement(Cn, {
						tooltipId: a,
						isOpen: t === a,
						container: i(n),
						closeOnClickOutside: !0
					}, l.map((e, t) => r.a.createElement(En, {
						key: t,
						displayText: this.getDropdownOptionDisplayText(e),
						onClick: Object(mn.b)(() => this.onOptionClick(e))
					}))))
				}
			}
			var xn = Object(o.b)(yn, (e, t) => ({
					onOpenDropdown: () => e((e => async (t, n) => {
						t(Object(kt.c)({
							tooltipId: e
						})), t(Object(xe.D)())
					})(t.id)),
					onBlockUser: t => e(Lt(t)),
					onReportUser: t => e((e => async (t, n) => {
						const a = n(),
							s = Object(wt.d)(a),
							c = Object(wt.e)(a);
						s && t(Object(pe.b)(Object(fe.userActionUrl)(s, e, At, c)))
					})(t)),
					onBanUser: t => {
						e((e => async (t, n) => {
							const a = n(),
								s = Object(C.x)(a),
								c = Object(wt.e)(a);
							s && t(Object(pe.b)(Object(fe.userActionUrl)(s, e, Tt, c)))
						})(t))
					},
					onKickUser: t => e((e => async (t, n) => {
						const a = n(),
							s = Object(wt.d)(a),
							c = Object(wt.e)(a);
						s && t(Object(pe.b)(Object(fe.userActionUrl)(s, e, Dt, c, {
							source: je.b.ChatSettings
						})))
					})(t))
				}))(In),
				Sn = n("./src/chat/components/ChatIcon/index.m.less"),
				Nn = n.n(Sn);
			const kn = i.a.wrapped($, "Userpic", Nn.a),
				wn = i.a.wrapped(kn, "TopUserpic", Nn.a),
				Tn = i.a.wrapped(kn, "BottomUserpic", Nn.a);
			var Mn = i.a.wrapped(e => r.a.createElement("span", {
					className: e.className
				}, e.secondUserId ? r.a.createElement(r.a.Fragment, null, r.a.createElement(wn, {
					userId: e.userId
				}), ",", r.a.createElement(Tn, {
					userId: e.secondUserId
				})) : r.a.createElement(kn, {
					userId: e.userId
				})), "IconWrapper", Nn.a),
				An = n("./src/chat/controls/TimeStamp/index.m.less"),
				Dn = n.n(An);
			var Ln = i.a.wrapped(e => {
					const t = "number" == typeof e.date ? new Date(e.date) : e.date;
					return r.a.createElement("time", {
						className: e.className,
						dateTime: k(t),
						title: N(t)
					}, e.children)
				}, "TimeStamp", Dn.a),
				Un = n("./src/chat/components/MessageHeader/index.m.less"),
				Bn = n.n(Un);
			const Rn = i.a.wrapped(Ln, "TimeStamp", Bn.a),
				Pn = i.a.span("UserName", Bn.a);
			var Hn = i.a.wrapped(e => r.a.createElement("a", {
				target: be.c.BLANK,
				rel: be.b,
				className: e.className,
				href: "".concat(U.a.redditUrl, "/user/").concat(e.nickname)
			}, r.a.createElement(Mn, {
				userId: e.userId
			}), r.a.createElement("span", null, r.a.createElement(Pn, null, e.nickname), r.a.createElement(Rn, {
				date: e.createdAt
			}, I(new Date(e.createdAt))), e.children)), "UserHeader", Bn.a);
			var Fn = e => r.a.createElement(R.a, {
				className: e.className,
				disable: !0,
				viewBox: "0 0 16 16"
			}, r.a.createElement("g", {
				transform: "translate(-26.000000, -37.000000)"
			}, r.a.createElement("path", {
				d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
			})));

			function Kn() {
				return (Kn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Gn = e => r.a.createElement(R.a, Kn({}, e, {
					viewBox: "0 0 16 16"
				}), r.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				})),
				zn = n("./src/chat/components/MessageReportDialog/Header.m.less"),
				Vn = n.n(zn);
			const Wn = i.a.wrapped(Fn, "Group", Vn.a),
				qn = i.a.wrapped(Gn, "Key", Vn.a),
				Zn = i.a.wrapped(xn, "MemberActionDropdown", Vn.a),
				Jn = i.a.wrapped(Hn, "MessageHeaderLink", Vn.a),
				Qn = i.a.h5("ChannelName", Vn.a),
				Yn = i.a.span("TextOverflow", Vn.a),
				Xn = i.a.wrapped(Oe.d, "IconButton", Vn.a),
				$n = i.a.div("Header", Vn.a);
			var ea = e => {
					const {
						channelId: t,
						channelIsPublic: n,
						channelName: a,
						messageCreatedAt: s,
						messageId: c,
						reportedUserId: o,
						reportedUserName: i
					} = e, l = "UserAction--Item-".concat(c);
					return r.a.createElement($n, null, r.a.createElement(Jn, {
						createdAt: s,
						nickname: i,
						userId: o
					}, r.a.createElement(Qn, null, n ? r.a.createElement(Wn, null) : r.a.createElement(qn, null), r.a.createElement(Yn, null, a))), r.a.createElement(Zn, {
						channelId: t,
						containerClassName: l,
						className: l,
						dropdownIndex: 0,
						id: "UserAction--Select-".concat(c),
						isBlockedUser: !1,
						userId: o
					}, r.a.createElement(Xn, null, r.a.createElement(pn, null))))
				},
				ta = n("./src/chat/components/MessageReportDialog/index.m.less"),
				na = n.n(ta);
			const {
				fbt: aa
			} = n("./node_modules/fbt/lib/FbtPublic.js"), sa = i.a.p("ReasonText", na.a), ca = i.a.p("DeleteText", na.a), ra = i.a.p("AcceptText", na.a);
			var oa = e => {
				const {
					actions: t,
					channelId: n,
					channelIsPublic: a,
					channelName: s,
					messageCreatedAt: c,
					messageValue: o,
					messageId: i,
					reason: l,
					reportedUserId: d,
					reportedUserName: u,
					reporterUserName: h
				} = e.report;
				return r.a.createElement(r.a.Fragment, null, n && s && a && i && c && d && u && r.a.createElement(ea, {
					channelId: n,
					channelIsPublic: a,
					channelName: s,
					messageCreatedAt: c,
					messageId: i,
					reportedUserId: d,
					reportedUserName: u
				}), o, r.a.createElement(sa, null, aa._("Reported for {reason}", [aa._param("reason", l)], {
					hk: "2BwGqI"
				}), " ", h && aa._("by /u{reporter}", [aa._param("reporter", h)], {
					hk: "1hrZNZ"
				})), t && t.deleted && r.a.createElement(ca, null, aa._("Deleted by {username}", [aa._param("username", "u/".concat(t.deleted.userName))], {
					hk: "4mxZZS"
				})), t && t.ignored && r.a.createElement(ra, null, aa._("Approved by {username}", [aa._param("username", "u/".concat(t.ignored.userName))], {
					hk: "m22OH"
				})), ut()(t) && r.a.createElement(vt, {
					reportedMessageId: e.message.messageId,
					reportedChannelId: e.message.channelId
				}))
			};
			const ia = ["snoo_heart_eyes_pride", "snoo_give_upvote_pride", "upvote_pride", "snoo", "snoo_simple_smile", "snoo_smile", "snoo_joy", "snoo_tongue", "snoo_wink", "snoo_sad", "snoo_biblethump", "snoo_angry", "snoo_disapproval", "snoo_trollface", "snoo_dealwithit", "snoo_facepalm", "snoo_shrug", "snoo_scream", "snoo_thoughtful", "snoo_surprised", "snoo_hearteyes", "snoo_hug", "snoo_feelsbadman", "snoo_feelsgoodman", "snoo_putback", "snoo_tableflip", "upvote", "downvote", "karma", "cake", "redditgold", "illuminati", "kappa", "sloth", "cat_blep", "pupper", "partyparrot", "orly", "hamster", "doge"];
			var la = {
				simple_smile: "".concat(U.a.assetPath, "/img/snoomoji/snoo_simple_smile.png"),
				smile: "".concat(U.a.assetPath, "/img/snoomoji/snoo_smile.png"),
				joy: "".concat(U.a.assetPath, "/img/snoomoji/snoo_joy.png"),
				tongue: "".concat(U.a.assetPath, "/img/snoomoji/snoo_tongue.png"),
				wink: "".concat(U.a.assetPath, "/img/snoomoji/snoo_wink.png"),
				sad: "".concat(U.a.assetPath, "/img/snoomoji/snoo_sad.png"),
				biblethump: "".concat(U.a.assetPath, "/img/snoomoji/snoo_cry.png"),
				angry: "".concat(U.a.assetPath, "/img/snoomoji/snoo_angry.png"),
				disapproval: "".concat(U.a.assetPath, "/img/snoomoji/snoo_disapproval.png"),
				trollface: "".concat(U.a.assetPath, "/img/snoomoji/snoo_trollface.png"),
				dealwithit: "".concat(U.a.assetPath, "/img/snoomoji/snoo_dealwithit.png"),
				facepalm: "".concat(U.a.assetPath, "/img/snoomoji/snoo_facepalm.png"),
				shrug: "".concat(U.a.assetPath, "/img/snoomoji/snoo_shrug.png"),
				scream: "".concat(U.a.assetPath, "/img/snoomoji/snoo_scream.png"),
				thoughtful: "".concat(U.a.assetPath, "/img/snoomoji/snoo_thoughtful.png"),
				surprised: "".concat(U.a.assetPath, "/img/snoomoji/snoo_surprised.png"),
				hearteyes: "".concat(U.a.assetPath, "/img/snoomoji/snoo_hearteyes.png"),
				tableflip: "".concat(U.a.assetPath, "/img/snoomoji/snoo_tableflip.png"),
				putback: "".concat(U.a.assetPath, "/img/snoomoji/snoo_putback.png"),
				hug: "".concat(U.a.assetPath, "/img/snoomoji/snoo_hug.png"),
				feelsbadman: "".concat(U.a.assetPath, "/img/snoomoji/snoo_feelsbadman.png"),
				feelsgoodman: "".concat(U.a.assetPath, "/img/snoomoji/snoo_feelsgoodman.png"),
				snoo: "".concat(U.a.assetPath, "/img/snoomoji/snoo.png"),
				snoo_simple_smile: "".concat(U.a.assetPath, "/img/snoomoji/snoo_simple_smile.png"),
				slightly_smiling: "".concat(U.a.assetPath, "/img/snoomoji/snoo_simple_smile.png"),
				snoo_smile: "".concat(U.a.assetPath, "/img/snoomoji/snoo_smile.png"),
				snoo_joy: "".concat(U.a.assetPath, "/img/snoomoji/snoo_joy.png"),
				snoo_tongue: "".concat(U.a.assetPath, "/img/snoomoji/snoo_tongue.png"),
				stuck_out_tongue: "".concat(U.a.assetPath, "/img/snoomoji/snoo_tongue.png"),
				snoo_wink: "".concat(U.a.assetPath, "/img/snoomoji/snoo_wink.png"),
				snoo_sad: "".concat(U.a.assetPath, "/img/snoomoji/snoo_sad.png"),
				snoo_biblethump: "".concat(U.a.assetPath, "/img/snoomoji/snoo_cry.png"),
				cry: "".concat(U.a.assetPath, "/img/snoomoji/snoo_cry.png"),
				snoo_angry: "".concat(U.a.assetPath, "/img/snoomoji/snoo_angry.png"),
				snoo_disapproval: "".concat(U.a.assetPath, "/img/snoomoji/snoo_disapproval.png"),
				snoo_trollface: "".concat(U.a.assetPath, "/img/snoomoji/snoo_trollface.png"),
				snoo_dealwithit: "".concat(U.a.assetPath, "/img/snoomoji/snoo_dealwithit.png"),
				sunglasses: "".concat(U.a.assetPath, "/img/snoomoji/snoo_dealwithit.png"),
				snoo_facepalm: "".concat(U.a.assetPath, "/img/snoomoji/snoo_facepalm.png"),
				snoo_shrug: "".concat(U.a.assetPath, "/img/snoomoji/snoo_shrug.png"),
				snoo_scream: "".concat(U.a.assetPath, "/img/snoomoji/snoo_scream.png"),
				snoo_thoughtful: "".concat(U.a.assetPath, "/img/snoomoji/snoo_thoughtful.png"),
				snoo_surprised: "".concat(U.a.assetPath, "/img/snoomoji/snoo_surprised.png"),
				flushed: "".concat(U.a.assetPath, "/img/snoomoji/snoo_surprised.png"),
				snoo_hearteyes: "".concat(U.a.assetPath, "/img/snoomoji/snoo_hearteyes.png"),
				heart_eyes: "".concat(U.a.assetPath, "/img/snoomoji/snoo_hearteyes.png"),
				snoo_tableflip: "".concat(U.a.assetPath, "/img/snoomoji/snoo_tableflip.png"),
				table_flip: "".concat(U.a.assetPath, "/img/snoomoji/snoo_tableflip.png"),
				snoo_putback: "".concat(U.a.assetPath, "/img/snoomoji/snoo_putback.png"),
				table: "".concat(U.a.assetPath, "/img/snoomoji/snoo_putback.png"),
				snoo_hug: "".concat(U.a.assetPath, "/img/snoomoji/snoo_hug.png"),
				snoo_feelsbadman: "".concat(U.a.assetPath, "/img/snoomoji/snoo_feelsbadman.png"),
				feels_bad_man: "".concat(U.a.assetPath, "/img/snoomoji/snoo_feelsbadman.png"),
				snoo_feelsgoodman: "".concat(U.a.assetPath, "/img/snoomoji/snoo_feelsgoodman.png"),
				feels_good_man: "".concat(U.a.assetPath, "/img/snoomoji/snoo_feelsgoodman.png"),
				upvote: "".concat(U.a.assetPath, "/img/snoomoji/upvote.png"),
				downvote: "".concat(U.a.assetPath, "/img/snoomoji/downvote.png"),
				karma: "".concat(U.a.assetPath, "/img/snoomoji/karma.png"),
				cake: "".concat(U.a.assetPath, "/img/snoomoji/cake.png"),
				redditgold: "".concat(U.a.assetPath, "/img/snoomoji/redditgold.png"),
				gold: "".concat(U.a.assetPath, "/img/snoomoji/redditgold.png"),
				illuminati: "".concat(U.a.assetPath, "/img/snoomoji/illuminati.png"),
				kappa: "".concat(U.a.assetPath, "/img/snoomoji/kappa.png"),
				sloth: "".concat(U.a.assetPath, "/img/snoomoji/sloth.png"),
				cat_blep: "".concat(U.a.assetPath, "/img/snoomoji/cat_blep.png"),
				pupper: "".concat(U.a.assetPath, "/img/snoomoji/pupper.png"),
				partyparrot: "".concat(U.a.assetPath, "/img/snoomoji/partyparrot.gif"),
				party_parrot: "".concat(U.a.assetPath, "/img/snoomoji/partyparrot.gif"),
				orly: "".concat(U.a.assetPath, "/img/snoomoji/orly.png"),
				o_rly_owl: "".concat(U.a.assetPath, "/img/snoomoji/orly.png"),
				party_pigeon: "".concat(U.a.assetPath, "/img/snoomoji/orly.png"),
				partypigeon: "".concat(U.a.assetPath, "/img/snoomoji/orly.png"),
				hamster: "".concat(U.a.assetPath, "/img/snoomoji/hamster.png"),
				doge: "".concat(U.a.assetPath, "/img/snoomoji/doge.png"),
				upvote_pride: "".concat(U.a.assetPath, "/img/snoomoji/upvote_pride.png"),
				snoo_heart_eyes_pride: "".concat(U.a.assetPath, "/img/snoomoji/heart_eyes_pride.png"),
				snoo_give_upvote_pride: "".concat(U.a.assetPath, "/img/snoomoji/give_upvote_pride.png")
			};
			const da = e => e.emojis && e.emojis.snoomojis;
			var ua = n("./src/chat/components/Snoomoji/index.m.less"),
				ha = n.n(ua);
			const ma = i.a.img("SnooImg", ha.a),
				ba = Object(B.a)({
					snoomojis: da
				});
			var pa = Object(o.b)(ba)(e => {
					const {
						className: t,
						iconName: n
					} = e, a = n && la[n] || la.smile;
					return r.a.createElement(ma, {
						className: t,
						src: a
					})
				}),
				ga = n("./src/chat/components/Message/Bubble.m.less"),
				Oa = n.n(ga);
			const {
				PENDING: fa,
				USER: ja
			} = ge.d, {
				TEXT: Ca,
				POST: Ea,
				EMBED: _a,
				SNOOMOJI: va
			} = ge.c, ya = i.a.wrapped(Ie, "ActionButtonGroup", Oa.a), Ia = i.a.wrapped(e => r.a.createElement("div", {
				className: Object(me.a)(e.className, {
					[Oa.a.dark]: e.darkBackground,
					[Oa.a.disabled]: e.disabled,
					[Oa.a.withBorder]: e.withBorder
				})
			}, e.children, e.withButton && e.message.messageType === ja && r.a.createElement(ya, {
				message: e.message,
				subredditName: e.subredditName,
				fromCurrentUser: e.fromCurrentUser,
				fromInvite: e.fromInvite
			})), "MessageBubble", Oa.a), xa = i.a.div("Snoo", Oa.a);

			function Sa(e) {
				return "messageId" in e && "channelId" in e
			}
			var Na = i.a.wrapped(e => {
					const {
						className: t,
						embedText: n,
						darkBackground: a,
						fromCurrentUser: s,
						fromInvite: c,
						message: o,
						withButton: i,
						inPreview: l,
						subredditName: d
					} = e;
					if (o) {
						const {
							type: e,
							report: u,
							collapsedInvitePreview: h
						} = o.messageData, m = ((e, t, n) => {
							const {
								messageType: a,
								messageData: s,
								messageData: {
									highlights: c,
									value: o
								}
							} = e;
							if (n) return o;
							switch (s.type) {
								case _a:
									const {
										embed: e
									} = s;
									return t || a === fa || !e ? r.a.createElement(at, {
										value: o,
										highlighMentionGroupLinks: c
									}) : r.a.createElement(Ye, {
										isEmbed: !0,
										name: e.name,
										title: e.title,
										description: e.description,
										favicon: e.faviconUrl,
										thumbnailUrl: e.imageUrl,
										href: e.url,
										target: be.c.BLANK,
										rel: be.b
									});
								case Ea:
									return r.a.createElement(Ye, {
										href: o,
										target: be.c.BLANK,
										rel: be.b
									}, o);
								case Ca:
									return r.a.createElement(at, {
										value: o,
										highlighMentionGroupLinks: c
									});
								case va:
									return r.a.createElement(xa, null, r.a.createElement(pa, {
										iconName: o
									}));
								default:
									return o
							}
						})(o, n, l), b = o.messageType === fa && o.error && o.clientMessageId;
						return r.a.createElement("div", {
							className: t
						}, r.a.createElement(Ia, {
							darkBackground: a,
							fromCurrentUser: s,
							fromInvite: c,
							withButton: i && !b && !u,
							withBorder: e !== va,
							message: o,
							disabled: !!b,
							subredditName: d
						}, u && o.messageType === ja ? r.a.createElement(oa, {
							report: u,
							message: o
						}) : c && Sa(o) && function(e) {
							return Boolean(null == e ? void 0 : e.shouldCollapse)
						}(h) ? r.a.createElement(Me, {
							channelId: o.channelId,
							messageId: o.messageId
						}) : m), c && Sa(o) && function(e) {
							return Boolean(!(null == e ? void 0 : e.shouldCollapse) && (null == e ? void 0 : e.shouldShowReportPrompt))
						}(h) && r.a.createElement(lt, {
							channelId: o.channelId,
							messageId: o.messageId
						}), b && r.a.createElement(Pe, {
							channelId: o.channelId,
							clientMessageId: b
						}))
					}
					return null
				}, "MessageItemBubble", Oa.a),
				ka = n("./src/chat/components/Message/SystemMessage.m.less"),
				wa = n.n(ka);
			const Ta = i.a.wrapped(at, "LinkedText", wa.a);
			var Ma = i.a.wrapped(e => {
					const {
						message: t,
						className: n
					} = e, {
						messageData: {
							value: a,
							highlights: s
						}
					} = t;
					return r.a.createElement("div", {
						className: n
					}, r.a.createElement(Ta, {
						value: a,
						highlighMentionGroupLinks: s
					}))
				}, "SystemMessage", wa.a),
				Aa = n("./node_modules/react-dom/index.js"),
				Da = n("./src/chat/actions/channel/subreddit.ts");

			function La() {
				return (La = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ua = e => r.a.createElement(R.a, La({}, e, {
					viewBox: "0 0 12 12"
				}), r.a.createElement("g", {
					fill: "#FFD635",
					fillRule: "evenodd"
				}, r.a.createElement("path", {
					d: "M3.857 3.571C3.857 2.39 4.82 1.43 6 1.43c1.181 0 2.143.961 2.143 2.142V5H3.857V3.571zM10.286 5H9.57V3.571A3.575 3.575 0 0 0 6 0a3.575 3.575 0 0 0-3.571 3.571V5h-.715A.714.714 0 0 0 1 5.714v5c0 .395.32.715.714.715h8.572c.394 0 .714-.32.714-.715v-5A.714.714 0 0 0 10.286 5z"
				}))),
				Ba = n("./src/chat/components/MessageInput/locker.m.less"),
				Ra = n.n(Ba);
			const Pa = i.a.div("LockPanel", Ra.a),
				Ha = i.a.wrapped(Oe.d, "IconButton", Ra.a),
				Fa = i.a.wrapped(Ua, "LockIcon", Ra.a);
			class Ka extends r.a.Component {
				constructor(e) {
					super(e), this.toggleSubmitButton = this.toggleSubmitButton.bind(this), this.onUnlockChannel = this.onUnlockChannel.bind(this), this.state = {
						isSubmitDisabled: !1
					}
				}
				toggleSubmitButton(e) {
					this.setState({
						isSubmitDisabled: e
					})
				}
				onUnlockChannel() {
					this.toggleSubmitButton(!0), this.props.onUnlockChannel().catch(() => {
						this.toggleSubmitButton(!1)
					})
				}
				render() {
					return r.a.createElement(Pa, null, r.a.createElement(Fa, null), f.fbt._("This chat has been locked.", null, {
						hk: "hjzi4"
					}), this.props.isModerator && r.a.createElement(Ha, {
						primary: !0,
						disabled: this.state.isSubmitDisabled,
						onClick: this.onUnlockChannel,
						title: f.fbt._("Unlock room", null, {
							hk: "3yPxoR"
						})
					}, f.fbt._("Unlock room", null, {
						hk: "3yPxoR"
					})))
				}
			}
			var Ga = Object(o.b)(void 0, (e, t) => ({
				onUnlockChannel: () => e(Object(Da.v)(!1, !1))
			}))(Ka);

			function za() {
				return (za = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Va = e => r.a.createElement(R.a, za({}, e, {
					viewBox: "0 0 24 20"
				}), r.a.createElement("defs", null, r.a.createElement("path", {
					id: "chatMuted",
					d: "M13.03 10.46a.75.75 0 1 1-1.06 1.06L10 9.55l-1.97 1.97a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L8.94 8.5 6.97 6.52a.75.75 0 1 1 1.06-1.06L10 7.43l1.97-1.97a.75.75 0 1 1 1.06 1.06L11.06 8.5l1.97 1.97zM16 2H4a2 2 0 0 0-2 2v9.24c0 1.1.9 2 2 2h3.63l1.54 2.3a1 1 0 0 0 1.66 0l1.54-2.3H16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
				})), r.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd",
					transform: "translate(2)"
				}, r.a.createElement("mask", {
					id: "chatMutedMask",
					fill: "#fff"
				}, r.a.createElement("use", {
					xlinkHref: "#chatMuted"
				})), r.a.createElement("g", {
					fill: "#A4A7A8",
					mask: "url(#chatMutedMask)"
				}, r.a.createElement("path", {
					d: "M0 0h20v20H0z"
				})))),
				Wa = n("./src/chat/components/MessageInput/muted.m.less"),
				qa = n.n(Wa);
			const {
				fbt: Za
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ja = i.a.div("Panel", qa.a), Qa = i.a.wrapped(Va, "Icon", qa.a);
			var Ya = () => r.a.createElement(Ja, null, r.a.createElement(Qa, null), Za._("You are temporarily muted in this room", null, {
					hk: "2eUfly"
				})),
				Xa = n("./node_modules/lodash/debounce.js"),
				$a = n.n(Xa),
				es = n("./src/chat/components/Scroller/index.m.less"),
				ts = n.n(es);
			class ns extends r.a.Component {
				constructor(e) {
					super(e), this.isUserScrolling = !1, this.list = null, this.previousScrollHeight = 0, this.scrollHandlers = [], this._isBatchLoading = !1, this.debounceScrollToBottom = $a()(() => this.scrollToBottom(!0), 1, {
						leading: !1,
						trailing: !0
					}), this.debounceScrollToTop = $a()(() => this.scrollToTop(!0), 1, {
						leading: !1,
						trailing: !0
					}), this.addScrollHandlers = this.addScrollHandlers.bind(this), this.preventParentScroll = this.preventParentScroll.bind(this), this.paginateContent = this.paginateContent.bind(this), this.scrollHandlers = [this.preventParentScroll, this.paginateContent]
				}
				get isBatchLoading() {
					return this.props.isLoadMoreRowsComplete ? this.props.isLoadMoreRowsComplete() : this._isBatchLoading
				}
				shouldComponentUpdate(e, t) {
					return !s()(this.props, e) || !s()(this.state, t)
				}
				componentDidMount() {
					this.props.autoScrollBottom && this.scrollToBottom(), this.addScrollListener()
				}
				componentWillUnmount() {
					this.removeScrollListener()
				}
				componentDidUpdate() {
					this.paginateContentUpdate(), this.autoScrollByContentUpdate()
				}
				addScrollListener() {
					this.list && this.list.addEventListener("wheel", this.addScrollHandlers, !1)
				}
				removeScrollListener() {
					this.list && this.list.removeEventListener("wheel", this.addScrollHandlers, !1)
				}
				addScrollHandlers(e) {
					this.scrollHandlers.length && (this.isUserScrolling = !0, this.scrollHandlers.forEach(t => t(e)))
				}
				preventParentScroll(e) {
					if (this.list) {
						const {
							scrollTop: t
						} = this.list, {
							deltaY: n
						} = e, a = n > 0;
						a && this.isScrolledToBottom(n) ? (this.debounceScrollToBottom(), e.preventDefault()) : !a && -n > t && (this.debounceScrollToTop(), e.preventDefault())
					}
				}
				paginateContent() {
					if (this.list) {
						const {
							scrollHeight: e
						} = this.list, {
							autoScrollBottom: t,
							loadMoreRows: n
						} = this.props;
						if (n) {
							const a = t && this.isScrolledToTop(1),
								s = !t && this.isScrolledToBottom(1);
							!a && !s || this.isBatchLoading || (this._isBatchLoading = !0, this.previousScrollHeight = e, n())
						}
					}
				}
				paginateContentUpdate() {
					if (this.list) {
						const {
							scrollHeight: e,
							scrollTop: t
						} = this.list, {
							autoScrollBottom: n
						} = this.props;
						n && this.isBatchLoading && (this.list.scrollTop = t + (e - this.previousScrollHeight), this._isBatchLoading = !1)
					}
				}
				autoScrollByContentUpdate() {
					this.list && this.props.autoScrollBottom && (this.isScrolledToBottom() || !this.isUserScrolling) && this.scrollToBottom()
				}
				safeScrollPadding() {
					return this.list ? 10 * this.list.scrollHeight / 100 : 0
				}
				scrollToTop(e) {
					this.list && (this.list.scrollTop = 0, this.isUserScrolling = e || !1)
				}
				scrollToBottom(e) {
					this.list && (this.list.scrollTop = this.list.scrollHeight, this.isUserScrolling = e || !1)
				}
				isScrolledToBottom(e) {
					if (this.list) {
						const {
							clientHeight: t,
							scrollHeight: n,
							scrollTop: a
						} = this.list;
						return (e || this.safeScrollPadding()) > n - t - a
					}
					return !1
				}
				isScrolledToTop(e) {
					if (this.list) {
						const {
							scrollTop: t
						} = this.list;
						return (e || this.safeScrollPadding()) > t
					}
					return !1
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return r.a.createElement(as, {
						className: t,
						innerRef: e => this.list = e
					}, e)
				}
			}
			const as = i.a.div("Scroller", ts.a);
			as.displayName = "Scroller";
			var ss = ns,
				cs = n("./src/chat/constants/container.ts"),
				rs = n("./src/chat/constants/page.ts"),
				os = n("./src/chat/icons/svgs/NavClose/index.tsx"),
				is = n("./src/chat/components/MessageTooltip/index.m.less"),
				ls = n.n(is);
			const ds = "MessageInputTooltip--Container",
				us = i.a.wrapped(Object(Nt.a)(un.a), "Dropdown", ls.a),
				hs = i.a.div("DropdownWrapper", ls.a),
				ms = i.a.div("Picker", ls.a),
				bs = i.a.h4("PickerHeader", ls.a),
				ps = i.a.wrapped(Oe.d, "IconButton", ls.a),
				gs = i.a.wrapped(e => r.a.createElement(ss, {
					className: Object(me.a)(e.className, {
						[ls.a.embedded]: e.isEmbedded
					})
				}, e.children), "PickerWrapper", ls.a);
			gs.displayName = "PickerWrapper";
			const Os = Object(B.a)({
				dropdownIsOpen: (e, t) => e.tooltipId === t.id,
				isEmbedded: e => !(!e.container || e.container.size !== cs.a.EMBED)
			});
			var fs = Object(o.b)(Os, e => ({
					closeTooltip: () => e(Object(kt.d)())
				}))(e => r.a.createElement(us, {
					tooltipId: ds,
					container: document.getElementById(rs.a),
					isOpen: e.isOpen || e.dropdownIsOpen,
					targetPosition: ["left", "top"],
					excludeContainerPosition: !0,
					closeOnClickOutside: !0,
					isOverlayOff: !0
				}, r.a.createElement(hs, {
					onClick: () => e.closeTooltip()
				}, r.a.createElement(ms, null, r.a.createElement(bs, null, e.title, r.a.createElement(ps, null, r.a.createElement(os.a, null))), r.a.createElement(gs, {
					isEmbedded: e.isEmbedded
				}, e.children))))),
				js = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/times.js")),
				Cs = n.n(js),
				Es = n("./src/chat/components/MessageTooltip/Picker/Snoomoji.m.less"),
				_s = n.n(Es);
			const vs = 15,
				ys = i.a.div("IconWrapper", _s.a);
			ys.displayName = "IconWrapper";
			const Is = i.a.span("EmptyIcons", _s.a),
				xs = i.a.div("LoadingIndicator", _s.a),
				Ss = i.a.div("Wrapper", _s.a),
				Ns = Object(B.a)({
					snoomojis: da
				});
			class ks extends c.Component {
				constructor(e) {
					super(e), this.loadCounter = 0, this.snooIcons = la, this.snoomojiIconOrder = this.getSnoomojiPickerOrder(), this.state = {
						isReady: !!this.props.isReady
					}
				}
				componentDidMount() {
					this.preloadIcons()
				}
				getSnoomojiPickerOrder() {
					const {
						snoomojis: e
					} = this.props, t = e ? Object.keys(e) : [];
					return [...It()(t, ia), ...ia]
				}
				preloadIcons() {
					!this.state.isReady && this.snooIcons && Promise.all(this.snoomojiIconOrder.map(e => new Promise(t => {
						const n = new Image;
						n.onload = () => t(), n.src = this.snooIcons[e]
					}))).then(() => {
						this.setState({
							isReady: !0
						})
					})
				}
				renderSnooIcons() {
					return this.snoomojiIconOrder.map((e, t) => r.a.createElement(ys, {
						key: "icon-".concat(t),
						onClick: () => this.props.onPickSnoomoji(e)
					}, r.a.createElement(pa, {
						iconName: e
					})))
				}
				renderBlankItems() {
					return this.snoomojiIconOrder && Cs()(Math.ceil(100 / vs), e => r.a.createElement(Is, {
						key: "empty-".concat(e)
					}))
				}
				render() {
					return this.state.isReady ? r.a.createElement(Ss, null, this.renderSnooIcons(), this.renderBlankItems()) : r.a.createElement(xs, null, f.fbt._("Loading snoomoji...", null, {
						hk: "39nqLy"
					}))
				}
			}
			var ws = Object(o.b)(Ns)(ks),
				Ts = n("./src/chat/actions/members.ts"),
				Ms = n("./src/chat/controls/Title/index.m.less"),
				As = n.n(Ms);
			const Ds = i.a.wrapped(e => {
				let {
					bold: t,
					children: n,
					className: a
				} = e;
				return r.a.createElement("h4", {
					className: Object(me.a)({
						[As.a.bold]: t
					}, a)
				}, n)
			}, "Title", As.a);
			var Ls = n("./src/chat/selectors/members.ts"),
				Us = n("./src/chat/selectors/user.ts"),
				Bs = n("./src/chat/components/ChatMemberList/index.m.less"),
				Rs = n.n(Bs);
			const Ps = i.a.wrapped(xn, "MemberActionDropdown", Rs.a),
				Hs = i.a.wrapped(e => {
					let {
						className: t,
						children: n,
						onClick: a
					} = e;
					return r.a.createElement("li", {
						onClick: a,
						className: t
					}, n)
				}, "ListItem", Rs.a),
				Fs = i.a.span("IconContainer", Rs.a),
				Ks = i.a.wrapped(Ds, "Title", Rs.a),
				Gs = i.a.span("Warning", Rs.a),
				zs = i.a.span("Info", Rs.a),
				Vs = Object(B.a)({
					channelType: e => Object(C.A)(e, "type"),
					members: (e, t) => t.members || Object(Ls.b)(e, t.channelId) || [],
					currentUserId: Us.a
				}),
				Ws = Object(o.b)(Vs, e => ({
					onViewProfile: t => {
						e(Object(xe.n)()), e(Object(xe.q)()).then(() => {
							window.open("".concat(U.a.redditUrl, "/user/").concat(t))
						})
					}
				})),
				qs = e => {
					let {
						className: t,
						channelId: n,
						channelType: a,
						currentUserId: s,
						members: c,
						minimal: o,
						modIndicator: i,
						onClick: l,
						onSelectName: d,
						onViewProfile: u,
						selectIndex: h,
						useNSFWIcons: m
					} = e;
					return ((e, t, n) => {
						if (n && void 0 !== t && e.length >= t) {
							const a = e[t];
							a && n(a.name)
						}
					})(c, h, d), r.a.createElement("ul", {
						className: t
					}, c && c.map((e, t) => r.a.createElement(Hs, {
						key: e.name,
						className: Object(me.a)(dn, {
							[Rs.a.selected]: h === t,
							[Rs.a.withMenu]: !o
						}),
						onClick: () => {
							l ? l(e.name) : u(e.name)
						}
					}, r.a.createElement(Fs, null, m && e.isNSFW ? r.a.createElement(G, null) : r.a.createElement($, {
						userId: e.id
					})), r.a.createElement(Ks, null, e.name), e.isModerator && i && r.a.createElement(zs, null, a && a === ee.a.Subreddit ? f.fbt._("Moderator", null, {
						hk: "48EtBe"
					}) : f.fbt._("Host", null, {
						hk: "4berci"
					})), e.isNSFW && r.a.createElement(Gs, null, f.fbt._("NSFW", null, {
						hk: "36qPno"
					})), e.isBlockedByMe && r.a.createElement(Gs, null, f.fbt._("Blocked", null, {
						hk: "1RUrSV"
					})), !o && e.id !== s && r.a.createElement(Ps, {
						channelId: n,
						containerClassName: dn,
						dropdownIndex: t,
						id: "MemberAction--Select-".concat(t),
						userId: e.id,
						isBlockedUser: e.isBlockedByMe
					}))))
				};
			qs.displayName = "ChatMemberList";
			var Zs = Ws(qs),
				Js = n("./src/chat/components/MessageTooltip/Picker/Userlist.m.less"),
				Qs = n.n(Js);
			const Ys = i.a.div("LoadingIndicator", Qs.a),
				Xs = i.a.wrapped(Zs, "ChatMemberList", Qs.a),
				$s = i.a.div("Wrapper", Qs.a),
				ec = Object(B.a)({
					channelId: C.x,
					channelMembers: Ls.f,
					hasMoreMembers: Ls.d,
					fetchingMembers: Ls.a
				});
			class tc extends c.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.fetchedFilter = "", this.isMount = !1, this.fetchSubredditChannelUsers = $a()((function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
						t.props.fetchSubredditChannelUsers(e)
					}), b.Fb, {
						leading: !0,
						trailing: !1
					}), this.onKeyUpListener = e => {
						this.isMount && (this.setState({
							selectIndex: Math.max(this.state.selectIndex - 1, 0)
						}), e.preventDefault(), e.stopPropagation())
					}, this.onKeyDownListener = e => {
						this.isMount && void 0 !== this.members && (this.setState({
							selectIndex: Math.min(this.state.selectIndex + 1, this.members.length - 1)
						}), e.preventDefault(), e.stopPropagation())
					}, this.props.bindKeyUp(this.onKeyUpListener), this.props.bindKeyDown(this.onKeyDownListener), this.state = {
						selectIndex: 0,
						userName: this.props.inputUserName || ""
					}
				}
				componentDidMount() {
					this.isMount = !0;
					const {
						channelMembers: e
					} = this.props;
					e && e && e.length || this.fetchSubredditChannelUsers()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.bindKeyUp !== e.bindKeyUp && e.bindKeyUp(this.onKeyUpListener), this.props.bindKeyDown !== e.bindKeyDown && e.bindKeyDown(this.onKeyDownListener), this.props.inputUserName !== e.inputUserName && this.setState({
						userName: e.inputUserName
					})
				}
				componentWillUnmount() {
					this.isMount = !1
				}
				filterMembers() {
					const {
						userName: e
					} = this.state, {
						channelMembers: t,
						fetchingMembers: n
					} = this.props;
					if (!e.length) return t || [];
					const a = t && t.length && t.filter(t => t.name.toLowerCase().startsWith(e.toLowerCase())) || t || [];
					return a.length || n || this.fetchedFilter === e || (this.fetchedFilter = e, this.fetchSubredditChannelUsers(e)), a || []
				}
				render() {
					const {
						channelId: e,
						onPickUserName: t,
						onSelectUserName: n,
						fetchingMembers: a
					} = this.props;
					return this.members = this.filterMembers(), this.members && this.members.length && e ? r.a.createElement($s, null, r.a.createElement(Xs, {
						minimal: !0,
						channelId: e,
						members: this.members,
						modIndicator: !0,
						onClick: t,
						onSelectName: n,
						selectIndex: this.state.selectIndex,
						useNSFWIcons: !0
					})) : a || this.members && this.members.length ? r.a.createElement(Ys, null, f.fbt._("Loading members...", null, {
						hk: "23phIt"
					})) : r.a.createElement(Ys, null, f.fbt._("Member not found!", null, {
						hk: "4DkpQe"
					}))
				}
			}
			var nc = Object(o.b)(ec, e => ({
				fetchSubredditChannelUsers: t => e(Object(Ts.e)({
					filter: t
				}))
			}))(tc);
			const ac = "Backspace",
				sc = "Enter",
				cc = "ArrowLeft",
				rc = "ArrowUp",
				oc = "ArrowRight",
				ic = "ArrowDown",
				lc = "Delete";
			var dc = n("./src/chat/singleton/SendbirdSDK.ts"),
				uc = n("./src/chat/controls/ContentEditable/index.m.less"),
				hc = n.n(uc);
			const mc = i.a.textarea("Textarea", hc.a);
			class bc extends r.a.Component {
				constructor(e) {
					super(e), this.offset = 0, this._ref = r.a.createRef(), this.emitChange = this.emitChange.bind(this), this.emitChangeOnce = this.emitChangeOnce.bind(this), this.handleKeyPress = this.handleKeyPress.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleSizing = this.handleSizing.bind(this)
				}
				get textarea() {
					return this._ref.current
				}
				componentDidMount() {
					if (this.textarea) {
						const e = this.textarea;
						this.offset = e.offsetHeight - e.clientHeight, this.handleSizing()
					}
				}
				componentWillReceiveProps(e) {
					this.props.channelId !== e.channelId && this.textarea && (this.textarea.value = ""), this.textarea && this.textarea.value.length ? dc.b.startTypingIndicator() : dc.b.endTypingIndicator(), this.textarea && e.textUpdate && e.textUpdate.length && (this.textarea.value = e.textUpdate, this.props.onChangeOnce(this.textarea.value), this.handleSizing())
				}
				componentDidUpdate() {
					this.textarea && this.textarea.focus()
				}
				emitChange(e) {
					const t = e.currentTarget.value;
					this.props.onChange(t), this.handleSizing()
				}
				emitChangeOnce(e) {
					const t = e.currentTarget.value;
					this.props.onChangeOnce(t)
				}
				handleKeyPress(e) {
					e.key !== sc || e.shiftKey || (e.preventDefault(), this.props.onSubmit()), this.handleSizing()
				}
				handleKeyDown(e) {
					e.key === rc && this.props.onKeyUp(e), e.key === ic && this.props.onKeyDown(e), this.handleSizing()
				}
				handleSizing() {
					if (this.textarea) {
						const e = this.textarea;
						e.style.height = "auto", e.style.height = e.scrollHeight + this.offset + "px"
					}
				}
				render() {
					return r.a.createElement(mc, {
						innerRef: this._ref,
						rows: 1,
						className: this.props.className,
						"aria-label": "Message #chat",
						"aria-multiline": !0,
						"aria-haspopup": !0,
						autoCorrect: "off",
						autoComplete: "off",
						role: "textbox",
						placeholder: f.fbt._("Enter text here…", null, {
							hk: "3rd5I3"
						}),
						onKeyPress: this.handleKeyPress,
						onKeyDown: this.handleKeyDown,
						onInput: this.emitChange,
						onBlur: this.emitChange,
						onChange: e => {
							this.emitChange(e), this.emitChangeOnce(e)
						}
					})
				}
			}

			function pc() {
				return (pc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var gc = e => r.a.createElement(R.a, pc({}, e, {
				viewBox: "0 0 18 18"
			}), r.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			}));

			function Oc() {
				return (Oc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var fc = e => r.a.createElement(R.a, Oc({}, e, {
					viewBox: "0 0 330 330"
				}), r.a.createElement("path", {
					d: "M165 0a165 165 0 1 0 0 330 165 165 0 0 0 0-330zM81 133a20 20 0 0 1 20-20 20 20 0 0 1 20 20 20 20 0 0 1-20 20 20 20 0 0 1-20-20zm146 94a86 86 0 0 1-124 0 15 15 0 0 1 11-26h102a15 15 0 0 1 11 26zm16-80a20 20 0 0 1-28 0 20 20 0 0 1 0-28 20 20 0 0 1 28 0 20 20 0 0 1 0 28z"
				})),
				jc = n("./src/chat/components/MessageInput/index.m.less"),
				Cc = n.n(jc);
			const Ec = "MessageInputTooltip--Snoomoji",
				_c = "MessageInputTooltip--Userlist",
				vc = i.a.wrapped(Oe.d, "SubmitButton", Cc.a);
			vc.displayName = "SubmitButton";
			const yc = i.a.wrapped(gc, "SendIcon", Cc.a),
				Ic = i.a.form("Form", Cc.a),
				xc = i.a.div("Wrapper", Cc.a),
				Sc = i.a.div("Icons", Cc.a),
				Nc = i.a.wrapped(bc, "ContentEditable", Cc.a),
				kc = i.a.wrapped(e => r.a.createElement("div", {
					className: Object(me.a)({
						[Cc.a.active]: e.active
					}, e.className),
					onClick: e.onClick
				}, e.children), "IconButton", Cc.a),
				wc = Object(B.a)({
					activeDropdownId: e => e.tooltipId || void 0
				});
			class Tc extends c.PureComponent {
				constructor(e) {
					super(e), this.editableContent = null, this.selectUserName = "", this.handleChangeText = e => {
						this.setState({
							text: e.trim()
						})
					}, this.handleChangeOnce = e => {
						this.toggleUserlistTooltipByTextChange(e), this.cleanTextUpdate()
					}, this.sendEnabled = () => !!this.state.text, this.onKeyUpUserlistListener = St.a, this.onKeyDownUserlistListener = St.a, this.handleSubmitText = this.handleSubmitText.bind(this), this.handleSubmitSnoo = this.handleSubmitSnoo.bind(this), this.state = {
						text: "",
						textUpdate: "",
						inputUserName: ""
					}
				}
				componentWillReceiveProps(e) {
					this.props.channelId !== e.channelId && this.clearText()
				}
				cleanTextUpdate() {
					this.setState({
						textUpdate: ""
					})
				}
				clearText() {
					if (!this.editableContent) return;
					const e = Object(Aa.findDOMNode)(this.editableContent);
					e && (e.value = "", e.style.height = "auto", this.setState({
						text: ""
					}), this.cleanTextUpdate())
				}
				handleSubmitText() {
					this.sendEnabled() && (this.props.activeDropdownId === _c ? this.onPickUserName(this.selectUserName || this.state.inputUserName) : (this.props.onSubmitText(this.state.text), this.props.onSubmit && this.props.onSubmit(), this.clearText()))
				}
				handleSubmitSnoo(e) {
					this.props.onSubmitSnoo(e), this.props.onSubmit && this.props.onSubmit()
				}
				addPrefixToValue(e) {
					const t = /^$/.test(this.state.text) ? "" : " ",
						n = "".concat(this.state.text).concat(t).concat(e);
					this.setState({
						textUpdate: n
					})
				}
				onPickUserName(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const {
						text: n
					} = this.state, a = t ? "" : " ", s = n.replace(/(@|u\/)(?:[A-Za-z0-9_-]+)?$/i, "$1".concat(e).concat(a));
					this.setState({
						textUpdate: s
					})
				}
				toggleUserlistTooltipByTextChange(e) {
					const t = this.props.activeDropdownId === _c,
						n = /(?:^|\s)(?:@|\/?u\/)([A-Za-z0-9_-]{0,20})$/i.exec(e),
						a = n && n[1];
					return null !== a && e.trim().length ? (t || this.props.toggleUserlistTooltip(_c), this.setState({
						text: e,
						inputUserName: a
					})) : (t && this.props.toggleUserlistTooltip(_c), this.setState({
						text: e,
						inputUserName: ""
					}))
				}
				render() {
					const {
						activeDropdownId: e,
						className: t,
						channelId: n,
						isLocked: a,
						isMuted: s,
						isModerator: c,
						toggleSnoomojiTooltip: o
					} = this.props;
					return s ? r.a.createElement(Ya, null) : a ? r.a.createElement(Ga, {
						isModerator: c
					}) : r.a.createElement(Ic, {
						className: t,
						id: ds,
						onSubmit: Object(mn.b)(this.handleSubmitText)
					}, r.a.createElement(Nc, {
						channelId: n,
						ref: e => this.editableContent = e,
						onSubmit: this.handleSubmitText,
						onChange: this.handleChangeText,
						onChangeOnce: this.handleChangeOnce,
						textUpdate: this.state.textUpdate,
						onKeyUp: e => this.onKeyUpUserlistListener(e),
						onKeyDown: e => this.onKeyDownUserlistListener(e)
					}), r.a.createElement(xc, null, r.a.createElement(Sc, null, r.a.createElement(kc, {
						onClick: () => o(Ec),
						active: e === Ec
					}, r.a.createElement(fc, null)), r.a.createElement(fs, {
						id: Ec,
						title: f.fbt._("Choose Snoomoji", null, {
							hk: "qOyxa"
						})
					}, r.a.createElement(ws, {
						onPickSnoomoji: this.handleSubmitSnoo
					})), r.a.createElement(kc, {
						active: e === _c,
						onClick: () => e !== _c && this.addPrefixToValue("u/")
					}, "u/"), r.a.createElement(fs, {
						id: _c,
						title: "u/".concat(this.state.inputUserName)
					}, r.a.createElement(nc, {
						inputUserName: this.state.inputUserName,
						onPickUserName: e => this.onPickUserName(e),
						onSelectUserName: e => this.selectUserName = e,
						bindKeyUp: e => this.onKeyUpUserlistListener = e,
						bindKeyDown: e => this.onKeyDownUserlistListener = e
					})), r.a.createElement(kc, {
						active: !1,
						onClick: () => this.addPrefixToValue("r/")
					}, "r/")), r.a.createElement(vc, {
						type: "submit",
						disabled: !this.sendEnabled()
					}, r.a.createElement(yc, {
						active: !0
					}))))
				}
			}
			var Mc = Object(o.b)(wc, (e, t) => {
					let {
						channelId: n
					} = t;
					return {
						onSubmitText: t => e(Object(g.p)(n, t, ge.c.TEXT)),
						onSubmitSnoo: t => e(Object(g.p)(n, t, ge.c.SNOOMOJI)),
						toggleSnoomojiTooltip: t => {
							e(Object(xe.G)(t)), e(Object(kt.c)({
								tooltipId: t
							}))
						},
						toggleUserlistTooltip: t => {
							e(Object(kt.c)({
								tooltipId: t
							}))
						}
					}
				})(Tc),
				Ac = n("./src/chat/actions/container.ts"),
				Dc = n("./src/lib/copyToClipboard/index.ts"),
				Lc = n("./src/chat/actions/channel/dropdown.ts"),
				Uc = n("./src/chat/actions/theme.ts");

			function Bc() {
				return (Bc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Rc = e => r.a.createElement(R.a, Bc({}, e, {
					viewBox: "0 0 59.077 59.077"
				}), r.a.createElement("g", null, r.a.createElement("path", {
					d: "M55.906,28.463c-0.235,0.129-0.469,0.258-0.711,0.379c-11.339,5.68-25.186,1.072-30.864-10.268   C21.8,13.517,21.22,7.726,22.699,2.268L23.315,0l-2.061,1.129C9.807,7.402,5.107,21.605,10.554,33.464   c0.231,0.501,0.826,0.722,1.326,0.491c0.502-0.23,0.723-0.824,0.492-1.326C7.684,22.424,11.164,10.333,20.253,4.09   c-0.891,5.221-0.102,10.602,2.289,15.379c5.952,11.884,20.155,16.965,32.216,11.78c-2.045,5.346-6.026,9.775-11.183,12.357   c-3.167,1.586-6.557,2.407-10.074,2.438c-0.638,0.007-1.285-0.016-1.917-0.063c-0.551-0.05-1.031,0.371-1.072,0.922   c-0.041,0.551,0.371,1.031,0.922,1.072c0.617,0.046,1.244,0.07,1.867,0.07c0.073,0,0.146,0,0.218-0.001   c3.825-0.034,7.51-0.926,10.952-2.65c6.357-3.183,11.071-8.95,12.935-15.822l0.562-2.239L55.906,28.463z"
				}), r.a.createElement("path", {
					d: "M31.271,43.412c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.179,0.867-0.5c0.276-0.479,0.112-1.09-0.366-1.366   l-2.83-1.634l2.83-1.634c0.479-0.276,0.643-0.888,0.366-1.366c-0.277-0.479-0.89-0.642-1.366-0.366l-2.83,1.634v-3.268   c0-0.552-0.447-1-1-1s-1,0.448-1,1v3.268l-2.83-1.634c-0.478-0.276-1.09-0.113-1.366,0.366c-0.276,0.479-0.112,1.09,0.366,1.366   l2.83,1.634l-2.83,1.634c-0.479,0.276-0.643,0.888-0.366,1.366c0.186,0.321,0.521,0.5,0.867,0.5c0.17,0,0.342-0.043,0.499-0.134   l2.83-1.634v3.268c0,0.552,0.447,1,1,1s1-0.448,1-1v-3.268L31.271,43.412z"
				}), r.a.createElement("path", {
					d: "M11.637,37.046c-0.277-0.479-0.89-0.642-1.366-0.366l-2.83,1.634v-3.268c0-0.552-0.447-1-1-1s-1,0.448-1,1v3.268   l-2.83-1.634c-0.478-0.276-1.09-0.113-1.366,0.366c-0.276,0.479-0.112,1.09,0.366,1.366l2.83,1.634l-2.83,1.634   c-0.479,0.276-0.643,0.888-0.366,1.366c0.186,0.321,0.521,0.5,0.867,0.5c0.17,0,0.342-0.043,0.499-0.134l2.83-1.634v3.268   c0,0.552,0.447,1,1,1s1-0.448,1-1v-3.268l2.83,1.634c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.179,0.867-0.5   c0.276-0.479,0.112-1.09-0.366-1.366l-2.83-1.634l2.83-1.634C11.749,38.136,11.913,37.524,11.637,37.046z"
				}), r.a.createElement("path", {
					d: "M22.637,50.077c-0.277-0.479-0.89-0.642-1.366-0.366l-2.83,1.634v-3.268c0-0.552-0.447-1-1-1s-1,0.448-1,1v3.268   l-2.83-1.634c-0.478-0.276-1.09-0.112-1.366,0.366s-0.112,1.09,0.366,1.366l2.83,1.634l-2.83,1.634   c-0.479,0.276-0.643,0.888-0.366,1.366c0.186,0.321,0.521,0.5,0.867,0.5c0.17,0,0.342-0.043,0.499-0.134l2.83-1.634v3.268   c0,0.552,0.447,1,1,1s1-0.448,1-1v-3.268l2.83,1.634c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.179,0.867-0.5   c0.276-0.479,0.112-1.09-0.366-1.366l-2.83-1.634l2.83-1.634C22.749,51.167,22.913,50.556,22.637,50.077z"
				}))),
				Pc = n("./src/chat/components/ThemeSwitcher/index.m.less"),
				Hc = n.n(Pc);
			const Fc = Object(B.a)({
					theme: e => e.user.prefs.globalTheme
				}),
				Kc = Object(o.b)(Fc, (e, t) => ({
					changeModeClicked: () => e(Object(Uc.themeToggle)())
				})),
				Gc = i.a.div("Wrapper", Hc.a);
			Kc(e => {
				let {
					changeModeClicked: t,
					theme: n
				} = e;
				return r.a.createElement(Gc, {
					onClick: t
				}, r.a.createElement(Rc, {
					active: !0
				}))
			});
			var zc = n("./src/chat/constants/channels.ts");

			function Vc() {
				return (Vc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Wc = e => r.a.createElement(R.a, Vc({}, e, {
				viewBox: "0 0 24 20"
			}), r.a.createElement("path", {
				d: "M16,8H12V4a1,1,0,0,0-1-1H9A1,1,0,0,0,8,4V8H4A1,1,0,0,0,3,9v2a1,1,0,0,0,1,1H8v4a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V12h4a1,1,0,0,0,1-1V9A1,1,0,0,0,16,8Z"
			}));

			function qc() {
				return (qc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Zc = e => r.a.createElement(R.a, qc({}, e, {
				viewBox: "0 0 24 20"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 15.5C7.568 15.5 6.248 15.029 5.172 14.242L14.242 5.172C15.029 6.248 15.5 7.568 15.5 9C15.5 12.584 12.584 15.5 9 15.5ZM2.5 9C2.5 5.416 5.416 2.5 9 2.5C10.432 2.5 11.752 2.971 12.828 3.758L3.758 12.828C2.971 11.752 2.5 10.432 2.5 9ZM9 0.5C4.313 0.5 0.5 4.313 0.5 9C0.5 13.687 4.313 17.5 9 17.5C13.687 17.5 17.5 13.687 17.5 9C17.5 4.313 13.687 0.5 9 0.5Z"
			}));

			function Jc() {
				return (Jc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Qc = e => r.a.createElement(R.a, Jc({}, e, {
				viewBox: "0 0 24 20"
			}), r.a.createElement("path", {
				d: "M16.345 14.931L17.707 16.293C18.098 16.684 18.098 17.316 17.707 17.707C17.512 17.902 17.256 18 17 18C16.744 18 16.488 17.902 16.293 17.707L0.293 1.70701C-0.0979999 1.31601 -0.0979999 0.684006 0.293 0.293006C0.684 -0.0979941 1.316 -0.0979941 1.707 0.293006L4.493 3.07901C5.591 1.81601 7.199 1.01001 9 1.01001C12.303 1.01001 14.99 3.69701 14.99 7.00001L15 11.998C15 12.552 15.449 13 16 13C16.552 13 17 13.447 17 14C17 14.431 16.726 14.789 16.345 14.931ZM3.0103 6.99801L3.0003 12C3.0003 12.552 2.5513 13 2.0003 13C1.4483 13 1.0003 13.447 1.0003 14C1.0003 14.553 1.4483 15 2.0003 15H11.5863L3.0383 6.45201C3.0213 6.63201 3.0103 6.81301 3.0103 6.99801ZM8 16H7C7 17.103 7.897 18 9 18C10.103 18 11 17.103 11 16H10H8Z"
			}));

			function Yc() {
				return (Yc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Xc = e => r.a.createElement(R.a, Yc({}, e, {
				viewBox: "0 0 24 20"
			}), r.a.createElement("path", {
				d: "M14 10.9882C14 11.5422 14.449 11.9902 15 11.9902C15.552 11.9902 16 12.4372 16 12.9902C16 13.5432 15.552 13.9902 15 13.9902H1C0.448 13.9902 0 13.5432 0 12.9902C0 12.4372 0.448 11.9902 1 11.9902C1.551 11.9902 2 11.5422 2 10.9902L2.01 5.9882C2.01 2.6872 4.697 0.000198364 8 0.000198364C11.303 0.000198364 13.99 2.6872 13.99 5.9902L14 10.9882ZM6 14.9902H7H9H10C10 16.0932 9.103 16.9902 8 16.9902C6.897 16.9902 6 16.0932 6 14.9902Z"
			}));

			function $c() {
				return ($c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var er = e => r.a.createElement(R.a, $c({}, e, {
				viewBox: "0 0 24 20"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M7 0H14C15.654 0 17 1.346 17 3V15C17 16.654 15.654 18 14 18H7C5.346 18 4 16.654 4 15V14C4 13.448 4.447 13 5 13C5.553 13 6 13.448 6 14V15C6 15.551 6.448 16 7 16H14C14.552 16 15 15.551 15 15V3C15 2.449 14.552 2 14 2H7C6.448 2 6 2.449 6 3V4C6 4.552 5.553 5 5 5C4.447 5 4 4.552 4 4V3C4 1.346 5.346 0 7 0ZM8.293 12.707C7.902 12.316 7.902 11.684 8.293 11.293L9.586 10H1C0.447 10 0 9.552 0 9C0 8.448 0.447 8 1 8H9.586L8.293 6.707C7.902 6.316 7.902 5.684 8.293 5.293C8.684 4.902 9.316 4.902 9.707 5.293L12.706 8.293C12.799 8.385 12.872 8.495 12.923 8.618C13.024 8.862 13.024 9.138 12.923 9.382C12.872 9.505 12.799 9.615 12.706 9.708L9.707 12.707C9.512 12.902 9.256 13 9 13C8.744 13 8.488 12.902 8.293 12.707Z"
			}));

			function tr() {
				return (tr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var nr = e => r.a.createElement(R.a, tr({}, e, {
				viewBox: "0 0 24 20"
			}), r.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), r.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}));

			function ar() {
				return (ar = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var sr = e => r.a.createElement(R.a, ar({}, e, {
				viewBox: "0 0 24 20"
			}), r.a.createElement("path", {
				d: "M16,9H15V7A5,5,0,0,0,5,7V9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V10A1,1,0,0,0,16,9ZM7,7a3,3,0,0,1,6,0V9H7Z"
			}));

			function cr() {
				return (cr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var rr = e => r.a.createElement(R.a, cr({}, e, {
				viewBox: "0 0 24 20"
			}), r.a.createElement("path", {
				d: "M2.01557 4.0152V13.4922C2.01557 13.6692 2.04557 13.8372 2.08857 14.0002H0.999573C0.447573 14.0002 -0.000427246 13.5532 -0.000427246 13.0002V1.0002C-0.000427246 0.4472 0.447573 0.000200272 0.999573 0.000200272H12.9996C13.5526 0.000200272 13.9996 0.4472 13.9996 1.0002V2.0892C13.8366 2.0462 13.6686 2.0152 13.4926 2.0152H4.01557C2.91157 2.0152 2.01557 2.9112 2.01557 4.0152ZM4.99997 14C4.99997 14.276 5.22397 14.5 5.49997 14.5H13.5C13.776 14.5 14 14.276 14 14C14 12.07 12.43 10.5 10.5 10.5H8.49997C6.56997 10.5 4.99997 12.07 4.99997 14ZM12 7.00002C12 5.62102 10.878 4.50002 9.49997 4.50002C8.12197 4.50002 6.99997 5.62102 6.99997 7.00002C6.99997 8.37902 8.12197 9.50002 9.49997 9.50002C10.878 9.50002 12 8.37902 12 7.00002ZM3.99997 3.00002H15C15.552 3.00002 16 3.44702 16 4.00002V15C16 15.553 15.552 16 15 16H3.99997C3.44797 16 2.99997 15.553 2.99997 15V4.00002C2.99997 3.44702 3.44797 3.00002 3.99997 3.00002Z"
			}));

			function or() {
				return (or = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ir = e => r.a.createElement(R.a, or({}, e, {
				viewBox: "0 0 24 20"
			}), r.a.createElement("path", {
				d: "M14.06 0.854L16.146 2.94C16.731 3.525 16.731 4.476 16.146 5.061L14.31 6.897C14.212 6.995 14.084 7.044 13.957 7.044C13.829 7.044 13.701 6.995 13.603 6.897L10.103 3.397C9.908 3.202 9.908 2.885 10.103 2.69L11.939 0.854C12.524 0.269 13.475 0.269 14.06 0.854ZM8.689 4.104C8.884 3.909 9.201 3.909 9.396 4.104L12.896 7.604C13.091 7.799 13.091 8.116 12.896 8.311L4.353 16.854C4.259 16.948 4.132 17 4 17H0.5C0.223 17 0 16.777 0 16.5V13C0 12.868 0.052 12.741 0.146 12.647L8.689 4.104Z"
			}));

			function lr() {
				return (lr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var dr = e => r.a.createElement(R.a, lr({}, e, {
				viewBox: "0 0 20 20"
			}), r.a.createElement("path", {
				d: "M7.69 10A2.312 2.312 0 0 1 10 7.69 2.311 2.311 0 0 1 12.308 10 2.311 2.311 0 0 1 10 12.31 2.312 2.312 0 0 1 7.69 10m7.29-1.173a5.068 5.068 0 0 0-.631-1.515l.725-1.148a.898.898 0 0 0-1.238-1.238l-1.148.725a5.046 5.046 0 0 0-1.515-.63L10.875 3.7a.898.898 0 0 0-1.75 0l-.298 1.32a5.081 5.081 0 0 0-1.516.63l-1.147-.724a.898.898 0 0 0-1.238 1.238L5.65 7.31a5.106 5.106 0 0 0-.63 1.516l-1.32.298a.898.898 0 0 0 0 1.75l1.32.298c.129.545.344 1.054.63 1.516l-.724 1.147a.898.898 0 0 0 1.238 1.238l1.147-.724c.462.286.971.501 1.516.63l.298 1.32a.898.898 0 0 0 1.75 0l.298-1.32a5.046 5.046 0 0 0 1.515-.631l1.148.725a.896.896 0 0 0 1.238-1.238l-.725-1.148c.287-.461.501-.97.63-1.515l1.321-.298a.898.898 0 0 0 0-1.75l-1.32-.298z",
				fillRule: "evenodd"
			}));

			function ur() {
				return (ur = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var hr = e => r.a.createElement(R.a, ur({}, e, {
					viewBox: "0 0 24 20"
				}), r.a.createElement("path", {
					d: "M5,9H4a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1H14.59L5,8.41Z"
				}), r.a.createElement("path", {
					d: "M18.71,17.29,17,15.59V10a1,1,0,0,0-1-1H15V7A5,5,0,0,0,5.78,4.37L2.71,1.29A1,1,0,0,0,1.29,2.71l16,16a1,1,0,0,0,1.41-1.41ZM10,4a3,3,0,0,1,3,3V9H10.41L7.24,5.83A3,3,0,0,1,10,4Z"
				})),
				mr = n("./src/chat/components/ChannelHeaderDropdown/index.m.less"),
				br = n.n(mr);
			const pr = "OverlayNavTooltip--Default",
				gr = i.a.wrapped(Object(Nt.a)(un.a), "Dropdown", br.a);
			gr.displayName = "Dropdown";
			const Or = i.a.wrapped(hn.a, "DropdownRow", br.a);
			Or.displayName = "DropdownRow";
			const fr = i.a.wrapped(Oe.d, "DropdownTrigger", br.a),
				jr = e => {
					switch (e) {
						case Ut.AddToRoom:
							return {
								text: f.fbt._("Add to Room", null, {
									hk: "2mqAnD"
								}), icon: r.a.createElement(Wc, null)
							};
						case Ut.AddToGroup:
							return {
								text: f.fbt._("Add to group", null, {
									hk: "3ZCBwZ"
								}), icon: r.a.createElement(Wc, null)
							};
						case Ut.Block:
							return {
								text: f.fbt._("Block", null, {
									hk: "1s7OxS"
								}), icon: r.a.createElement(Zc, null)
							};
						case Ut.CopyLink:
							return {
								text: f.fbt._("Copy link", null, {
									hk: "2OPNVI"
								}), icon: r.a.createElement(nr, null)
							};
						case Ut.Leave:
							return {
								text: f.fbt._("Leave group", null, {
									hk: "zStpq"
								}), icon: r.a.createElement(er, null)
							};
						case Ut.LeaveRoom:
							return {
								text: f.fbt._("Leave room", null, {
									hk: "42PJCV"
								}), icon: r.a.createElement(er, null)
							};
						case Ut.LockRoom:
							return {
								text: f.fbt._("Lock room", null, {
									hk: "3rS9oB"
								}), icon: r.a.createElement(sr, null)
							};
						case Ut.MuteBadging:
							return {
								text: f.fbt._("Disable notification badging", null, {
									hk: "4BzTkp"
								}), icon: r.a.createElement(Qc, null)
							};
						case Ut.MuteNotifs:
							return {
								text: f.fbt._("Mute Notifications", null, {
									hk: "3EpiuE"
								}), icon: r.a.createElement(Qc, null)
							};
						case Ut.Profile:
							return {
								text: f.fbt._("View Profile", null, {
									hk: "3qjq7q"
								}), icon: r.a.createElement(rr, null)
							};
						case Ut.RenameGroup:
							return {
								text: f.fbt._("Rename group", null, {
									hk: "hTeQ"
								}), icon: r.a.createElement(ir, null)
							};
						case Ut.UnlockRoom:
							return {
								text: f.fbt._("Unlock room", null, {
									hk: "1KiSHK"
								}), icon: r.a.createElement(hr, null)
							};
						case Ut.UnmuteBadging:
							return {
								text: f.fbt._("Enable notification badging", null, {
									hk: "87Nfa"
								}), icon: r.a.createElement(Xc, null)
							};
						case Ut.UnmuteNotifs:
							return {
								text: f.fbt._("Unmute notifications", null, {
									hk: "2TcEwL"
								}), icon: r.a.createElement(Xc, null)
							};
						case Ut.ViewMembers:
							return {
								text: f.fbt._("View members", null, {
									hk: "PC84"
								}), icon: r.a.createElement(rr, null)
							};
						default:
							return {
								text: "Unknown item", icon: r.a.createElement("span", null)
							}
					}
				},
				Cr = Object(B.a)({
					currentUserId: Us.a,
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: n
						} = t;
						return e.tooltipId === n || e.tooltipId === pr
					},
					channel: C.h,
					isModerator: C.a,
					isChannelLocked: C.K,
					isChannelBadgingMuted: C.J,
					isChannelNotifsMuted: C.L
				});
			var Er = Object(o.b)(Cr, (e, t) => ({
					onInviteToChannel: () => e(Object(Lc.b)()),
					onLeaveChannel: () => e(Object(Lc.c)()),
					onLockChannel: () => e(Object(Lc.d)()),
					onUnlockChannel: () => e(Object(Da.v)(!1, !0)),
					onViewMembers: () => e(Object(Lc.k)()),
					onBlockUser: t => e(Lt(t)),
					onViewProfile: t => e(Object(Lc.l)(t)),
					onOpenDropdown: t => e(Object(Lc.i)(t)),
					onMuteBadging: () => e(Object(Lc.e)(t)),
					onUnmuteBadging: () => e(Object(Lc.g)(t)),
					onMuteNotifs: () => e(Object(Lc.f)(t)),
					onUnmuteNotifs: () => e(Object(Lc.h)(t)),
					closeTooltip: () => e(Object(kt.d)())
				}))(e => {
					const {
						channel: t,
						currentUserId: n,
						isModerator: a,
						isChannelLocked: s,
						isChannelBadgingMuted: c,
						isChannelNotifsMuted: o
					} = e, i = a => {
						const {
							onInviteToChannel: s,
							onBlockUser: c,
							onLeaveChannel: r,
							toggleChannelNameInput: o,
							onViewMembers: i,
							onLockChannel: d,
							onUnlockChannel: u,
							onMuteBadging: h,
							onUnmuteBadging: m,
							onMuteNotifs: b,
							onUnmuteNotifs: p
						} = e;
						switch (a) {
							case Ut.AddToGroup:
							case Ut.AddToRoom:
								return s();
							case Ut.Block: {
								const e = (() => t && t.members.find(e => e.id !== n))();
								return e && c(e.id)
							}
							case Ut.Leave:
							case Ut.LeaveRoom:
								return r();
							case Ut.Profile:
								return l();
							case Ut.RenameGroup:
								return o();
							case Ut.ViewMembers:
								return i();
							case Ut.LockRoom:
								return d();
							case Ut.UnlockRoom:
								return u();
							case Ut.CopyLink: {
								const {
									channelId: t
								} = e;
								if (t) {
									const e = Object(fe.getShortChannelUrl)(t);
									Object(Dc.a)(e)
								}
								return
							}
							case Ut.MuteBadging:
								return h();
							case Ut.UnmuteBadging:
								return m();
							case Ut.MuteNotifs:
								return b();
							case Ut.UnmuteNotifs:
								return p();
							default:
								return St.a
						}
					}, l = () => {
						const {
							channel: t,
							currentUserId: n,
							onViewProfile: a,
							inviterName: s
						} = e;
						if (t && t.channelState === zc.b.JOINED) {
							const e = t.members.find(e => e.id !== n);
							if (e && e.name) return a(e.name)
						}
						return s && a(s)
					}, {
						dropdownId: d = pr,
						dropdownIsOpen: u,
						onOpenDropdown: h,
						closeTooltip: m
					} = e, b = (() => {
						if (t) switch (t.type) {
							case ee.a.Direct:
								return tn.directChannel.filter(e => cn(e, c)).filter(e => rn(e, c)).filter(e => on(e, o)).filter(e => ln(e, o));
							case ee.a.Group:
								return tn.groupChannel.filter(e => cn(e, c)).filter(e => rn(e, c)).filter(e => on(e, o)).filter(e => ln(e, o));
							case ee.a.Subreddit:
								return tn.subredditChannel.filter(e => nn(e, a, s)).filter(e => an(e, a, s)).filter(e => sn(e, !!t.isPublic)).filter(e => cn(e, c)).filter(e => rn(e, c)).filter(e => on(e, o)).filter(e => ln(e, o))
						}
					})();
					return r.a.createElement(r.a.Fragment, null, !1, r.a.createElement(fr, {
						id: d,
						onClick: () => h(d),
						title: f.fbt._("Settings", null, {
							hk: "4lO98u"
						})
					}, r.a.createElement(dr, null)), r.a.createElement(gr, {
						isOpen: u,
						tooltipId: d,
						container: document.getElementById(rs.a),
						excludeContainerPosition: !0,
						closeOnClickOutside: !0
					}, b && b.map((e, t) => r.a.createElement(Or, {
						key: t,
						displayText: jr(e).text,
						onClick: () => {
							i(e), m()
						}
					}, jr(e).icon))))
				}),
				_r = n("./src/chat/components/CloseIcon/index.tsx");

			function vr() {
				return (vr = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const yr = e => r.a.createElement(R.a, vr({}, e, {
				viewBox: "0 0 20 20"
			}), r.a.createElement("path", {
				id: "a",
				d: "M10 15a.997.997 0 0 1-.707-.293l-6-6a1 1 0 1 1 1.414-1.415L10 12.588l5.293-5.294a1 1 0 0 1 1.415 1.415l-6 6A.997.997 0 0 1 10 15"
			}));

			function Ir() {
				return (Ir = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			yr.displayName = "NavMinimize";
			const xr = e => r.a.createElement(R.a, Ir({}, e, {
				viewBox: "0 0 20 20"
			}), r.a.createElement("path", {
				d: "M14.398 11.016c.443 0 .802.359.802.8v1.782A2.406 2.406 0 0 1 12.795 16h-6.39A2.406 2.406 0 0 1 4 13.598V7.202A2.406 2.406 0 0 1 6.405 4.8h1.784a.801.801 0 1 1 0 1.602H6.405a.803.803 0 0 0-.802.8v6.396c0 .441.36.801.802.801h6.39c.442 0 .802-.36.802-.8v-1.782c0-.442.359-.8.801-.8zm1.54-6.516c.04.1.061.204.061.31v3.236a.809.809 0 1 1-1.618 0V6.763l-4.2 4.2a.808.808 0 1 1-1.144-1.144l4.2-4.2h-1.284a.809.809 0 1 1 0-1.619h3.237a.814.814 0 0 1 .747.5z",
				fillRule: "evenodd"
			}));
			xr.displayName = "NavPopout";
			var Sr = n("./src/chat/selectors/app.ts"),
				Nr = n("./src/chat/components/OverlayNavButtonGroup/index.m.less"),
				kr = n.n(Nr);
			const wr = i.a.wrapped(Oe.d, "IconButton", kr.a),
				Tr = i.a.wrapped(_r.a, "CloseButton", kr.a);
			Tr.displayName = "CloseButton";
			const Mr = i.a.span("Wrapper", kr.a);
			var Ar = Object(o.b)(() => Object(B.a)({
					containerSize: e => e.container.size,
					inviterName: C.I,
					isReady: Sr.f
				}), e => ({
					close: () => e(Object(Ac.sizeChanged)(cs.a.HIDDEN)),
					minimize: () => {
						e(Object(Ac.sizeChanged)(cs.a.MINIMIZED)), e(Object(xe.p)())
					},
					popout: () => e(Object(Ac.popoutOpened)())
				}))(e => {
					let {
						channelId: t,
						containerSize: n,
						dropdownId: a,
						showMenu: s,
						inviterName: c,
						isReady: o,
						minimize: i,
						popout: l,
						toggleChannelNameInput: d
					} = e;
					const u = o && n === cs.a.EMBED;
					return r.a.createElement(Mr, null, s && r.a.createElement(Er, {
						channelId: t,
						dropdownId: a,
						inviterName: c,
						toggleChannelNameInput: d
					}), u && r.a.createElement(r.a.Fragment, null, r.a.createElement(wr, {
						onClick: l,
						title: f.fbt._("Open chat in new window", null, {
							hk: "3S8f7W"
						})
					}, r.a.createElement(xr, null)), r.a.createElement(wr, {
						onClick: i,
						title: f.fbt._("Minimize chat", null, {
							hk: "1gym9X"
						})
					}, r.a.createElement(yr, null)), r.a.createElement(Tr, null)))
				}),
				Dr = n("./src/chat/controls/ChannelNameInput/index.m.less"),
				Lr = n.n(Dr);

			function Ur() {
				return (Ur = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Br = i.a.input("Input", Lr.a),
				Rr = i.a.wrapped(e => r.a.createElement("label", {
					className: e.className
				}, r.a.createElement(Br, {
					placeholder: e.placeholder,
					onChange: e.onChange,
					value: e.value
				}), e.children), "NameInput", Lr.a);
			class Pr extends r.a.Component {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = e.currentTarget.value;
						this.props.handleChannelNameInput(t)
					}
				}
				render() {
					return r.a.createElement(Rr, Ur({
						withBackground: this.props.withBackground,
						onChange: this.onChange
					}, this.props), this.props.children)
				}
			}
			var Hr = n("./src/chat/controls/Counter/index.tsx"),
				Fr = n("./src/chat/components/RenameGroupInput/index.m.less"),
				Kr = n.n(Fr);
			const Gr = i.a.wrapped(e => r.a.createElement("span", {
					className: Object(me.a)({
						[Kr.a.visible]: e.isVisible
					}, e.className)
				}, e.children), "InputWrapper", Kr.a),
				zr = i.a.div("InputContent", Kr.a),
				Vr = i.a.span("InputControls", Kr.a),
				Wr = i.a.wrapped(Oe.b, "CancelButton", Kr.a),
				qr = i.a.wrapped(Oe.b, "SaveButton", Kr.a);
			class Zr extends c.Component {
				constructor() {
					super(...arguments), this.displayName = "RenameGroupInput", this.state = {
						groupName: this.props.name || ""
					}, this.getAvailableCharacters = () => zc.e - this.state.groupName.length, this.handleChannelNameInput = e => this.setState({
						groupName: e
					}), this.submitGroupName = () => {
						this.props.onUpdateChannelName(this.state.groupName.trim()), this.props.hideChannelNameInput()
					}
				}
				componentWillReceiveProps(e) {
					this.props.channelId !== e.channelId && (this.setState(t => ({
						groupName: e.name
					})), this.props.hideChannelNameInput()), this.props.name === e.name || this.props.isVisible || this.setState(t => ({
						groupName: e.name
					}))
				}
				render() {
					const {
						props: {
							hideChannelNameInput: e,
							isVisible: t
						},
						state: {
							groupName: n
						},
						handleChannelNameInput: a,
						submitGroupName: s
					} = this, c = this.getAvailableCharacters();
					return r.a.createElement(Gr, {
						isVisible: t
					}, r.a.createElement(zr, null, r.a.createElement(Pr, {
						handleChannelNameInput: a,
						placeholder: f.fbt._("Rename group", null, {
							hk: "1mjXbx"
						}),
						withBackground: !0,
						value: n
					}, r.a.createElement(Hr.a, {
						count: c
					})), r.a.createElement(Vr, null, r.a.createElement(Wr, {
						secondaryNoBorder: !0,
						onClick: e
					}, f.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(qr, {
						primaryNoBorder: !0,
						disabled: c < 0 || c >= zc.e,
						onClick: s
					}, f.fbt._("Save", null, {
						hk: "1qAtYt"
					})))))
				}
			}
			var Jr = Object(o.b)(void 0, (e, t) => ({
					onUpdateChannelName: t => e(Object(Lc.j)(t))
				}))(Zr),
				Qr = n("./src/chat/actions/sendbird/sdk.ts"),
				Yr = n("./src/chat/constants/toast.ts"),
				Xr = n("./src/chat/icons/svgs/Refresh/index.tsx"),
				$r = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAB/FJREFUWAnFWFtolUcQ/nMxprUp9MFGUZJgSaqlahSRNm2KTUoetD4oKppWxBJsfbAiRQhY0SL4EA2WoJRCrVYMwVta8IJVo9LEaC410ZpYxcQ7ao0arTEn57b9vjn//Oc/yUmiEu3A/Du7Ozvz7ezO7p4TY708ioGrONsd5SA4YNf/94KAopECjtYnbb0N7HXAc3TEYgyjRfocnAVuB5eCm8DuflRfDtFpvM0ahPJVq1aZU6dOmd27dxv0EXQOmNRvJENqA/ON5uyjefPmGa/X6zPGeMGdx48fJ8hjtktOKCpxlgNJjBY3/kjwDPCElJSUtGvXrmUmJSVZgwYNigkEAvFxcXGxw4YNQ7f1Oj8ggn3hpJErgKc2cAP4GMD8lJGR8Q3khydPnkTwjCcYDHauWbOGoIrApIEOVMiq66tLlIS2J+B8V5+KX0EwJSUlZtmyZQTXvGTJEo2gjlfdAS81etz018GaGIMgK1sjRozIRf17cOHixYvfQEl64eDohCBIheBqkUJtCpRN0YBEa7OHh4p+FSK0Iyscy70Tt3r1atnk2PjpiJIC9KGP7apHmZHmGDLB6/kI8fmIRpTVAp24I6Ptr0GoAm8Bp4PTADwRpZsUmLutTzmaIw4gCJL7rmQbo6CzzoD8AZg3w4TMzMyMoUOHJg0ePNh68uSJ1dra2nHlypV/0Mds/tXmDpQkAqUt+neXbn/o6kkcoOCkF8dC921AQL/Pnj07UFpaas6ePWtu375tHj16ZDo6OoIAF3z8+LG5f/++AUBz4sQJU1xcbIYPH34d43jcJIjh6B/66i1o4U2cmJiYDcXN4Dow78tqROZHlL8tXbrUNDU1ma6uLp5pejP4IQfYYFMQJetsp46vvb3d7Nu3z6Smpv4NO19Onz49D+V34B3gkvHjx3+IUqkHSHeUNkHLbN261TQ2NhrcAmblypVcBokGDln4k+sqiFvBKLO9O7v7MIZgvQ8fPjTr168Xe7yTKysrzYYNG6QOH8WKEKUDkoJWSvPz883NmzfFGI1WVFT4586d67tx4wbvUEZDgNlAUX06UrDQlqiWl5f7161bpza7sCp+XIsE+q0NkvtUSIVlWVlZ5sGDB1w7CZP96pD9RBh+v1+iRPl5iUB1cvv37zdbtmxRU/6GhgYC9EydOjXVxhZa2cLCQp7qbTU1NVSWvXThwgUJ+71798QAwQ0UESCBkg4ePGjOnDmjpn32mfq1DVAvAOvTmTNncuM7KLZt22ZOnz4tA93gNAJuJ2q9r1KX2D1e9flG7OzsZNV39OhRBoZ5QIrX5R0+adIkKyEhgUpWTEyMhWPEQjZbrONFIiVHxMaG84l6qs++vsg9jnocp2MnTpxo+Xy8eCyLzzKQlx9QjAL8FxGRBjrFOWbxwFVSQ6xfvHjRqqqqkq7s7GwrPZ2XRv907tw5C49UC+ehlZeXJ0AUJN6JfCvSSMzVq1dZVvIDYjSF3p02bVoAhyzGmOChQ4cMD1uphI4VkcvKymRfzpkzx+Tm5orMJemuJw346D7bs2eP6HJ/paWlmfnz5zuJogkDXT8mbsaNG8ezV0lOFz1iqplF2IdenoHqVJ3U1dWJE5ZKBw4cMJi57h/HqY5liaUzGzduNIiMDKM9HmWHDx+WOvtJSEY/UNHHZzY6J0F0mXNmzJghaY8ZS4rRmM5w4cKFZvPmzWJM21jBmSkgpCPKRyfILk02XoNuwOgK3L1714wcOfJ+cnLymzbA8GZHg9y/o0aN+gKy2bFjB+3JgUyBhL0XESmCdAMNaUX/Uk+Buse42v28z+G7xgbHQlZWUfIVEd/a2vozyl8wGyr4mTBKTAbNarZrH5yoSp+l6rPENJwMtgfxgqB4kx/sVeIi4PADAbKiaaytrbUwYwFBY6QoRqWfx0dfINnnnhBtda/TPILDrr/4sQFSjCBZ5rFjx36CVg5w9mH0hQtnqfZzGbsz+5gIiJCqOSWXGIQiGMQPKEbiPRuRYIlAh4pEcOfOna9AvmJnsl/3jmM1ZFGqe/fuNUwePr9sZ241kW/dumWYfBUVFVJ369m2vZcvXya4P1yAdDWdZdU+ZrQ/Pj5+OTKuCBvXi6xKgCG5TVQJnmSZ+HKurq628KiwhgwZYuFNx19uIrOPh25zc7PcSpMnT9bhUto2CMysWLEidu3atR9DPg5m9Hp9WQtyDGb55/LlyzlrDz96RFCORoxUfX294SHPBwAP3ZaWlv6y12PfvfwpSoq6tKGu8FeUFi1alIKmu0VFRXRCkM4DVQFyuaJtAe3X0q1jy9x8Hvt5dTTsuseKuroiRTm8FyxY8BaaWwoKCpg0NOo8WOnIvZ8ULNvdzHbts/VpI3DkyBHZd1OmTNFffnrkRSLpoyYgN23axJ+T/H1itm/fbtra2giUL2E+zeAzFEUF1b1OHZsJzMebB3uO4Da6fD/V0rr0HdEZOHr0aP6aO4iflvJ7hfvL45HtyeNInPdSBvgD69KlS/K/DGzUg3McD5Fnsas5JDrp3KMn3MDQU08z633IvNBzZ82alZ6TkxM3ZswYC/8qSPbiTSlvO2bxnTt3rPPnz1tYzq5du3bVYswP4DIwiZPnNcRo9kpPA1AHRxhEtGJxI7yNznfAb4GTwa+C+SrxgB+D74GvgvnTVa4KlCQ5zkLiwH8JVPbnM5pmMDjuWYLybMrdANGRLj9lg4x0VPB6ViBcQi4l+ZnpP8ZJaQD2wM13AAAAAElFTkSuQmCC",
				eo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAACPtJREFUWAm9WHtQVscVX+DjIVAzRqStVAnUCc7UBx2jKEarFeNYJrHVxvQPtSPTaDL1UbWVf4IZJ6Rm1DQdH4Dji1oZJ1BHJiMyU3V8iw98piWjOID4accCWhEEvtf299vvnpvL55c0NDFn5tzdPXvuOb89u3t2741S3xxFwpQOMedCO8Li0L4Q1fDNqPDi/0tKABPAueDvgJvAATDlZIJl+1snGeS7hYWFurm5WR8/fpyADoAnDBw48Kcon7dQMZrfKnFaSemLFy/2eb1eDfKA/Xv37iVIz7Bhw5pRPgS/Ayb1CaQ4CL7a96e8nzJy5Mgol8tFcJR509LSaK3q1q1bQ1G+Al4J/i1YphvVZ08SjWi4ulpbW6v9fr9ub2/Xq1atIpA8B4SFqLsdbXnXIXo2VYni92D+L7Nnz67PzMysQ/0PlrsEq5yKsgecbLXlPav5bAunM0bT2RbPFajclQbKrxRBbv2vQ3QiTGDc0d2WwYyoqKiXMeU/QjsX/KJVspt6flaeBREQB/aFg0tISFiHfq7BO+A94DXg4WBSuOgGe/r4lMiwJAmwYAvP8vJyRuIF8I/BWeAM8K8TExP1uHHjlqAeSn0GJ86dhiijY59DSBkjIpSDyq/Ak5DnhmRkZPSLiYlRHo9H1dfXq5s3b/LEYOSqwWfBbjCJdmmHLL6lDdH/pl4jnD9/PnegMTRmzJh41N8AX1i3bp0+c+aMOTUePnyonzx5oru6ukz54MED3dTUFGDK2b59u54+ffp/8A43SDb4i4jLpZfvcIocndq2bRsX++/B58HNo0aNuobyOOtlZWWaAHhSgJmUfVY9gNLJaGoeKz4CJ9gFCxYwUh/NnDlzUF5eHs/q1NGjR6dAx7mWDQb0PUUGfVpa2nfRc3nLli26rq5Ot7S0mIS7cOFCfffuXTolIG8AxIRMRvUpdvZB3wyGx+ChQ4cIksfeHZw8T1C2g2+ANyKxJ6EkOQEbgawFNs6eOnWKQLoI5NixYz6ANaAsR+zrE3EAPh9NmAh7b9y4YdYcwfLEuXbtml67di1l/544ceJLBlEISEE8d+PGjTTUw8fly5fNGmKdREO7S0t1SXGxbmxsNDI6D0fhouoA6r99+7YfuzzgdrsZXaLvqqysJMhHOIlSLZD2dAvATQQB8j5+/FgfOXKEde3H6N/98E9m1HhRl1X8TePaYvr68pDBWNHUV69e1XPnzpXo0lQ31j/9/N0CaM+sAPywoaGBit5Hjx7p7u5u1vWf8VIBgLXMytRtLytd9MbPdSumhiROTcN6EEBra6tua2vTbbBD7sRGcZKAPHDggL548aJ0BZARfKmpqQQ5zQJpsHHXkt68dOkSlb1c5CT3/fv6nQFK658laT0jTutf/FDXAGz1yZOmX/TYELAE99prs7RK7K/fnjRBr/pJtn4le4KutmaEeqLLINTU1Dhtebdu3UqA7xtESkVz98qZ+MmJEyfaOjo6XPRHhY6ubpXCPRfTX3l8OGIjY+2Dlv1OioiIwEi0wg1a5b7+utrV0a6K4j9VfwycVWUdNaokJ0fVNzQq0aNubGysGjt2rNOMQgTZlhu4uVwSDEN5f+XKlQeLiooUDnkDMD1lsGpc9Ka6U9mgYp4fodpq61T5iylqzIgRNGKcmUrIw9fToyZRlvADFRkXp5KGj1K/Q/OzxkZbk0CFsKRUZGQwT/fgXVCL1RcRmr1PiiKmQUW7XOrtgjXqg1mvqo8q/qHyM3LUW5WH1aABAxT7nU5okFEhJSUPUvdZiU1Urujn0BFQhDZk8Pcp7UW0cf78eYU8SXnEuXPnWPKQIAUNoiIbJWfDhg3wY5KrScZsdOAo+6yxyZRsyxpi3UmyJpvdbp0J43Cl3SOU3oVyzXvv2aryvujv27ePOdHbgE0KLLeQfwVPhFQEaSfDDWJkNaPJSCX066eGv5BKuWlLlI3A8aAcKNSQlBT117o6tau8QrW3tqiX8ser/DmzjSb7QyMfHR0dQOJ2VVfzbqHyp06dyosKsdkXFpnq1Dlz5nRiHXC0fhkpS45W2uwMJfYLO/UwDbaqU06hFcHAzp07GSDyW2CS4Am28Px8xeK2cu/ePb5vpxs2BKQADQeGekLMdQJI3pG+kNKzevVqgiu00Mis2uCkIh0reOyAPGJYHIUYtpsEw3zG0wf3QVv+Ze9JHy4knEYdFxc3xQIiOEzTGUqTWiDdWVhY+K/Ozs5orCk/1wsZJ4PC4lWlpaWquLhY7dmzR+G4MmsOacno4K+CKigoUMuWLTP6fA9oLb+9C0seuHDhAs/c1hUrVnxqaUhe7v2C1RL0vykpKWEkvACqef3Kzc01lwekAXOOHjx4UCcnJ+vly5ebyyqVhfApoK1bkawz6TKlRA93xZ5p06ZxBFst//YFISw6CLkWZT1WVVRU6Hnz5nkJkBeIUOJNeujQoXr37t2my/r1YasJEFuACmVcOiAf34O/9iVLlgy2ADln1BI9XUgUs9DFaNnbUDYGSwGDJKsnT55s30ocAAjCJsrlkgChl+uV9sePHx/MP5/n4qcROSQSPYqqeKsGwW5wR9IJ2RKakjpZWVnaSk12PztF34oYRUxdPfv37zfg0tPT8yzfEhQHlPBVUfzl+vXradBH4+KIAhCaBiWRBjZt2qQxRabDGWEHKOrxAum5fv26XrRoEcHdw6Cm9xUc9WUNfCxXL2sqjROsOa/cE4nx6NGj3Pk+7F4CcDI/qNj28/p1+vRpjV1KYA/A72NQ/VGSJCDBVpinU4HTK6kmAxGgug+/1Fhyd7mqqqoU/vup7OxsP/Jd5I4dOyLwQRXFFITdblINloPiccmUc+XKFYVPz25cRPll+PHSpUv3bt68uYVpiPbA9lFGQThyrjn2EwiRfTBjxox8TJ2Kj483H+OHDx8+hbVThr5acCfYNWXKlCT8TU1FndcU/t3i5yQjxa81N5hfbP8EN4GFCIyBkGCIPGwZCpBtOiC9CuY64c+gT8CnwV+H+gRMHIUCpNwJUvR4IuBgMLef0JFTP9w7IqM+By0Dt21+lQqNhCPKJauzTidfegSFM/JNyP4LuTh8ZaAXiQ4AAAAASUVORK5CYII=",
				to = n("./src/chat/components/ToastNotification/index.m.less"),
				no = n.n(to);
			const ao = [Yr.a.ConnectionClosed, Yr.a.ConnectionPending],
				so = e => ao.includes(e),
				co = i.a.wrapped(e => r.a.createElement("span", {
					className: Object(me.a)(e.className, {
						[no.a.pending]: so(e.toast)
					}),
					style: {
						height: e.toast ? "2.5em" : "0"
					}
				}, e.children), "Wrapper", no.a),
				ro = i.a.span("Text", no.a),
				oo = i.a.img("SnooImg", no.a);
			oo.displayName = "SnooImg";
			const io = i.a.button("Button", no.a);
			io.displayName = "Button";
			const lo = i.a.wrapped(Xr.a, "RefreshIcon", no.a),
				uo = Object(B.a)({
					toast: e => e.toast
				}),
				ho = Object(o.b)(uo),
				mo = r.a.createElement(oo, {
					src: $r
				}),
				bo = r.a.createElement(oo, {
					src: eo
				}),
				po = e => {
					let {
						className: t,
						toast: n
					} = e;
					return r.a.createElement(co, {
						toast: n,
						className: t
					}, n && (e => {
						switch (e) {
							case Yr.a.ConnectionOpen:
								return mo;
							case Yr.a.ConnectionPending:
							case Yr.a.ConnectionClosed:
								return bo;
							default:
								return null
						}
					})(n), r.a.createElement(ro, null, n && (e => {
						switch (e) {
							case Yr.a.ConnectionOpen:
								return f.fbt._("Found the internet!", null, {
									hk: "3jLr8W"
								});
							case Yr.a.ConnectionPending:
								return f.fbt._("Looking for the internet...", null, {
									hk: "1JPRuh"
								});
							case Yr.a.ConnectionClosed:
								return f.fbt._("Hmm, no internet?", null, {
									hk: "134peM"
								});
							default:
								return null
						}
					})(n)), n && (e => e === Yr.a.ConnectionClosed ? r.a.createElement(io, {
						onClick: Qr.g
					}, r.a.createElement(lo, null)) : null)(n))
				};
			po.displayName = "ToastNotification";
			var go = ho(po),
				Oo = n("./src/chat/components/OverlayNav/index.m.less"),
				fo = n.n(Oo);
			const jo = i.a.wrapped(Fn, "Group", fo.a),
				Co = i.a.wrapped(Gn, "Key", fo.a),
				Eo = i.a.nav("Nav", fo.a),
				_o = i.a.span("TitleWrapper", fo.a),
				vo = i.a.span("Title", fo.a);
			vo.displayName = "Title";
			const yo = i.a.span("SubTitle", fo.a);
			var Io;
			yo.displayName = "SubTitle",
				function(e) {
					e[e.Key = 0] = "Key", e[e.Group = 1] = "Group"
				}(Io || (Io = {}));
			const xo = Object(B.a)({
				isEmbedded: Sr.d
			});
			class So extends c.Component {
				constructor(e) {
					super(e), this.hideChannelNameInput = () => this.setState({
						isRenameGroupInputVisible: !1
					}), this.toggleChannelNameInput = () => this.setState(e => ({
						isRenameGroupInputVisible: !e.isRenameGroupInputVisible
					})), this.getTitleIconElem = e => {
						switch (e) {
							case Io.Group:
								return r.a.createElement(jo, null);
							case Io.Key:
								return r.a.createElement(Co, null);
							default:
								return null
						}
					}, this.state = {
						channelId: e.channelId,
						isRenameGroupInputVisible: !1
					}
				}
				static getDerivedStateFromProps(e, t) {
					return e.channelId !== t.channelId ? {
						channelId: e.channelId,
						isRenameGroupInputVisible: !1
					} : null
				}
				render() {
					const {
						props: {
							channelId: e,
							dropdownId: t,
							isEmbedded: n,
							minimize: a,
							showMenu: s,
							subTitle: c,
							title: o,
							titleIcon: i
						},
						state: {
							isRenameGroupInputVisible: l
						},
						hideChannelNameInput: d,
						toggleChannelNameInput: u
					} = this, h = this.getTitleIconElem(i);
					return r.a.createElement(Eo, null, r.a.createElement(_o, {
						onClick: n ? Object(mn.b)(a) : void 0
					}, r.a.createElement(vo, null, h, o), r.a.createElement(yo, null, c)), e && r.a.createElement(Ar, {
						channelId: e,
						toggleChannelNameInput: u,
						showMenu: !!s,
						dropdownId: t
					}), e && o && r.a.createElement(Jr, {
						channelId: e,
						name: o,
						isVisible: l,
						hideChannelNameInput: d
					}), r.a.createElement(go, null))
				}
			}
			var No = Object(o.b)(xo, e => ({
					minimize: () => {
						e(Object(Ac.sizeChanged)(cs.a.MINIMIZED)), e(Object(xe.p)())
					}
				}))(So),
				ko = n("./src/chat/components/TypingIndicator/index.m.less"),
				wo = n.n(ko);
			const To = i.a.span("IndicatorText", wo.a);
			To.displayName = "IndicatorText";
			var Mo = e => r.a.createElement(To, {
					className: e.className
				}, ((e, t) => e === ee.a.Direct ? f.fbt._("is typing...", null, {
					hk: "UTaH4"
				}) : 1 === t.length ? f.fbt._("{firstUser} is typing...", [f.fbt._param("firstUser", t[0])], {
					hk: "480JMK"
				}) : 2 === t.length ? f.fbt._("{firstUser} and {secondUser} are typing", [f.fbt._param("firstUser", t[0]), f.fbt._param("secondUser", t[1])], {
					hk: "3zfAnp"
				}) : t.length > 2 ? f.fbt._("Several people are typing...", null, {
					hk: "39edn3"
				}) : void 0)(e.channelType, e.usernames)),
				Ao = n("./src/chat/constants/batchSizes.ts"),
				Do = n("./src/chat/selectors/subreddit.ts"),
				Lo = n("./src/chat/components/MessageList/index.m.less"),
				Uo = n.n(Lo);
			const {
				fbt: Bo
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ro = i.a.wrapped(Ma, "SystemBubble", Uo.a), Po = i.a.wrapped(Na, "MessageItemBubble", Uo.a), Ho = i.a.wrapped(ss, "Scroller", Uo.a), Fo = i.a.div("Container", Uo.a), Ko = i.a.div("ReverseCol", Uo.a), Go = i.a.wrapped(Mc, "MessageInput", Uo.a), zo = i.a.span("LoadingIndicator", Uo.a), Vo = i.a.span("LoadingError", Uo.a), Wo = i.a.div("TypingIndicatorWrapper", Uo.a), qo = Object(B.a)({
				currentUser: e => e.user.account,
				channelMessages: e => Object(C.y)(e),
				channelPendingMessages: e => Object(C.z)(e),
				fetchingMessages: e => Object(C.A)(e, "fetchingMessages"),
				fetchingMessagesError: e => Object(C.A)(e, "fetchingMessagesError"),
				hasMoreMessages: e => Object(C.A)(e, "hasMoreMessages"),
				isMessageListLoaded: e => Object(C.A)(e, "isMessageListLoaded"),
				subreddit: e => Object(Do.b)(e),
				subredditName: e => Object(wt.e)(e),
				isModerator: e => Object(C.a)(e),
				typingIndicatorUsernames: e => e.typingIndicator.usernames
			}), Zo = Object(o.b)(qo, e => ({
				getPreviousMessages: () => e(Object(g.s)()),
				removeAndResetMessages: t => e(Object(O.c)(t)),
				resetChannelMessageList: t => e(Object(p.M)(t))
			})), Jo = 30, Qo = 2 * Ao.a.Messages;
			class Yo extends r.a.Component {
				constructor(e) {
					super(e), this.list = r.a.createRef(), this.getOtherMemberName = () => {
						const {
							channel: e,
							currentUser: t
						} = this.props, n = e.members.find(e => {
							let {
								id: n
							} = e;
							return n !== t.id
						});
						return n ? n.name : t.name
					}, this.getTitle = () => {
						switch (this.props.channel.type) {
							case ee.a.Group:
							case ee.a.Subreddit:
								return this.props.channel.name;
							default:
								return this.getOtherMemberName()
						}
					}, this.getTitleIcon = () => {
						const e = this.props.channel;
						return e.type === ee.a.Subreddit ? e.isPublic ? Io.Group : Io.Key : void 0
					}, this.isSplitterDisplayed = (e, t, n) => {
						if (0 === t) return !0;
						const a = new Date(e.createdAt).toDateString(),
							s = this.getPreviousTime(t, n);
						if (s) {
							return a !== new Date(s).toDateString()
						}
						return !1
					}, this.isSystemMessageDisplayed = (e, t) => {
						const {
							mentionType: n,
							mentionedUsers: a,
							messageType: s
						} = t;
						if (s !== ge.d.SYSTEM) return !1;
						if (n === ge.b.CHANNEL) return !0;
						if (n === ge.b.USERS && Array.isArray(a)) {
							const t = 0 === a.length,
								n = a.some(t => e.id === t.userId);
							return t || n
						}
						return !1
					}, this.renderMessages = () => {
						const {
							channelMessages: e,
							channelPendingMessages: t,
							currentUser: n,
							subredditName: a
						} = this.props;
						if (e.length) {
							return m()([...e, ...t], "createdAt").map((e, t, s) => {
								const {
									createdAt: c,
									messageData: o,
									sender: i
								} = e, l = i && i.userId, d = i && i.nickname, u = n.id === l, h = this.isSplitterDisplayed(e, t, s), m = this.getPreviousTime(t, s), p = this.getPreviousUserId(t, s) === l, g = c - m < 5 * b.eb, O = !(p && g), f = o.type === ge.c.EMBED, j = e.messageType === ge.d.SYSTEM && this.isSystemMessageDisplayed(n, e), C = h && r.a.createElement(D, {
									date: c
								}), E = O && d && l && r.a.createElement(Hn, {
									createdAt: c,
									userId: l,
									nickname: d
								});
								switch (e.messageType) {
									case ge.d.PENDING:
									case ge.d.USER:
										return r.a.createElement(r.a.Fragment, {
											key: e.createdAt
										}, C, r.a.createElement(r.a.Fragment, null, E, r.a.createElement(Po, {
											message: e,
											fromCurrentUser: u,
											fromInvite: !1,
											subredditName: a,
											darkBackground: u,
											withButton: !0,
											embedText: f
										})));
									case ge.d.SYSTEM:
										return j && r.a.createElement(r.a.Fragment, {
											key: e.createdAt
										}, C, r.a.createElement(Ro, {
											message: e
										}));
									default:
										return null
								}
							})
						}
					}, this.getPreviousTime = this.getPreviousTime.bind(this), this.getPreviousUserId = this.getPreviousUserId.bind(this), this.loadMoreRows = this.loadMoreRows.bind(this)
				}
				shouldComponentUpdate(e, t) {
					return !s()(this.props, e) || !s()(this.state, t)
				}
				getSnapshotBeforeUpdate() {
					return this.resetMessageNumberOnChannelSwitch(this.props), this.removeResetTooOldMessages(), null
				}
				componentDidUpdate(e) {
					this.scrollDownOnChannelSwitch(e)
				}
				isChannelSwitched(e) {
					return this.props.channel.channelId !== e.channel.channelId
				}
				scrollDownOnChannelSwitch(e) {
					this.list.current && this.isChannelSwitched(e) && this.list.current.scrollToBottom()
				}
				resetMessageNumberOnChannelSwitch(e) {
					const {
						channelMessages: t,
						resetChannelMessageList: n
					} = this.props;
					if (t.length > Jo && this.isChannelSwitched(e)) {
						const e = t.length - Jo,
							a = t.slice(0, e);
						n(u()(a, e => {
							let {
								messageId: t
							} = e;
							return String(t)
						}))
					}
				}
				removeResetTooOldMessages() {
					const e = this.props.channelMessages.length > Qo,
						t = !(!this.list.current || !this.list.current.isScrolledToBottom());
					e && t && this.props.removeAndResetMessages(this.props.channelMessages)
				}
				getPreviousUserId(e, t) {
					if (e > 0) {
						const {
							sender: n
						} = t[e - 1];
						return n && n.userId
					}
				}
				getPreviousTime(e, t) {
					let n = NaN;
					return e > 0 && (n = t[e - 1].createdAt), n
				}
				loadMoreRows() {
					const {
						fetchingMessages: e,
						hasMoreMessages: t,
						getPreviousMessages: n,
						isMessageListLoaded: a
					} = this.props;
					if (!e && t && a) return n()
				}
				render() {
					const {
						props: {
							channel: e,
							channelId: t,
							fetchingMessagesError: n,
							getPreviousMessages: a,
							isMessageListLoaded: s,
							isModerator: c,
							hasMoreMessages: o,
							subredditName: i,
							typingIndicatorUsernames: l
						},
						loadMoreRows: d
					} = this, u = this.renderMessages(), h = this.getTitle(), m = this.getTitleIcon(), b = !o && s && e.members;
					return r.a.createElement(Fo, null, r.a.createElement(No, {
						channelId: t,
						showMenu: !0,
						subTitle: r.a.createElement(_, null),
						title: h,
						titleIcon: m
					}), r.a.createElement(Ko, null, r.a.createElement(Ho, {
						autoScrollBottom: !0,
						loadMoreRows: d,
						innerRef: this.list
					}, n && r.a.createElement(Vo, {
						onClick: a
					}, Bo._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})), b ? r.a.createElement(he, {
						users: e.members,
						channel: e,
						subredditName: i
					}) : n ? r.a.createElement(Vo, {
						onClick: a
					}, Bo._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})) : r.a.createElement(zo, null, Bo._("Loading history...", null, {
						hk: "4tLHUG"
					})), u)), r.a.createElement(Wo, null, e && l.length ? r.a.createElement(Mo, {
						usernames: l,
						channelType: e.type
					}) : null), r.a.createElement(Go, {
						channelId: e.channelId,
						isLocked: e.isFrozen,
						isModerator: c,
						isMuted: e.isUserMuted,
						onSubmit: () => this.list.current && this.list.current.scrollToBottom()
					}))
				}
			}
			var Xo = Zo(Yo),
				$o = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				ei = n("./src/chat/controls/Overlay/index.m.less"),
				ti = n.n(ei);
			const ni = i.a.div("Content", ti.a),
				ai = i.a.wrapped(e => {
					const t = e.form ? "form" : "div",
						[n, a, s] = r.a.Children.toArray(e.children),
						c = {
							className: e.className,
							onSubmit: e.onSubmit
						},
						o = r.a.createElement(r.a.Fragment, null, n, e.innerContent ? a : r.a.createElement(ni, null, a), s);
					return r.a.createElement(t, c, o)
				}, "Overlay", ti.a);
			ai.displayName = "Overlay";
			var si = ai,
				ci = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				ri = n.n(ci);
			const oi = i.a.wrapped(Oe.b, "Button", ri.a),
				ii = Object(o.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(mn.b)(() => e(Object(pe.a)()))
				})),
				li = i.a.div("OverlayControlBar", ri.a),
				di = ii(e => r.a.createElement(li, {
					className: Object(me.a)({
						[ri.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? r.a.createElement(oi, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, f.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : r.a.createElement(oi, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || f.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && r.a.createElement(oi, {
					type: "submit",
					primary: !0,
					onClick: e.primaryButtonAction || e.onSubmit,
					disabled: e.primaryButtonDisabled
				}, e.primaryButtonText || f.fbt._("Submit", null, {
					hk: "2Iwjdv"
				}))));
			di.displayName = "OverlayControlBar";
			var ui = di,
				hi = n("./src/chat/controls/OverlayHeader/index.m.less"),
				mi = n.n(hi);
			const bi = i.a.header("Header", mi.a),
				pi = i.a.h1("Title", mi.a),
				gi = i.a.span("Normal", mi.a),
				Oi = i.a.span("Warning", mi.a);
			var fi = e => {
					let {
						message: t,
						title: n,
						warning: a
					} = e;
					const s = a ? Oi : gi;
					return r.a.createElement(bi, null, r.a.createElement(pi, null, n), r.a.createElement(s, null, t), r.a.createElement(go, null))
				},
				ji = n("./src/chat/components/OverlayChatMembers/index.m.less"),
				Ci = n.n(ji);
			const Ei = i.a.wrapped(ss, "Scroller", Ci.a),
				_i = i.a.div("LoadingIndicator", Ci.a),
				vi = Object(B.a)({
					channelType: e => Object(C.A)(e, "type"),
					currentChannel: C.k,
					memberCount: e => Object(C.A)(e, "memberCount"),
					members: e => Object(Ls.f)(e),
					fetchingMembers: Ls.a,
					hasMoreMembers: Ls.d
				});
			var yi = Object(o.b)(vi, e => ({
					fetchChannelMembers: t => e(Object(Ts.e)({
						loadMore: t
					}))
				}))((function(e) {
					const {
						channelId: t,
						currentChannel: n,
						memberCount: a,
						members: s,
						fetchChannelMembers: c,
						fetchingMembers: o,
						hasMoreMembers: i
					} = e;
					if (n) {
						const {
							channelState: e
						} = n, l = e === zc.b.INVITED, d = e === zc.b.JOINED, u = () => {
							!o && i && c({
								loadMore: !0
							})
						}, h = () => !!o;
						return o || s.length || c(), r.a.createElement(si, {
							form: !0,
							innerContent: !0
						}, r.a.createElement(fi, {
							title: f.fbt._({
								"*": "{number of members} group members",
								_1: "1 group member"
							}, [f.fbt._plural(a, "number of members")], {
								hk: "4phXDa"
							})
						}), r.a.createElement(Ei, {
							loadMoreRows: u,
							isLoadMoreRowsComplete: h,
							threshold: 0
						}, r.a.createElement(Zs, {
							channelId: t,
							members: s,
							modIndicator: !0,
							useNSFWIcons: l || d
						}), o && r.a.createElement(_i, {
							role: "progressbar"
						}, f.fbt._("Loading members...", null, {
							hk: "2sCDrM"
						}))), r.a.createElement(ui, {
							secondaryButtonOnly: !0,
							secondaryButtonText: f.fbt._("Done", null, {
								hk: "2xerWP"
							})
						}))
					}
					return null
				})),
				Ii = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/lodash/uniqBy.js")),
				xi = n.n(Ii),
				Si = n("./src/chat/actions/sendbird/index.ts"),
				Ni = n("./src/chat/actions/user.ts"),
				ki = n("./node_modules/lodash/last.js"),
				wi = n.n(ki),
				Ti = n("./src/chat/components/SearchBar/index.m.less"),
				Mi = n.n(Ti);
			const Ai = i.a.span("Bubble", Mi.a),
				Di = i.a.span("SearchBarLabel", Mi.a),
				Li = i.a.span("SearchBarField", Mi.a),
				Ui = i.a.input("SearchBarInput", Mi.a),
				Bi = i.a.wrapped(ss, "SearchBarWrapper", Mi.a);
			class Ri extends r.a.Component {
				constructor(e) {
					super(e), this.bubbleRefs = {}, this.searchBarInputRef = {}, this.timeoutToken = null, this.onBubbleKey = e => t => {
						switch (t.key) {
							case lc:
							case ac:
								return Object(Aa.findDOMNode)(this.searchBarInputRef).focus(), this.props.onUnselect(e.id);
							case cc: {
								const e = t.target;
								if (e.previousElementSibling) {
									e.previousElementSibling.focus()
								}
								break
							}
							case oc: {
								const e = t.target;
								if (e.nextElementSibling) {
									e.nextElementSibling.focus()
								}
							}
						}
					}, this.onBubbleKey = this.onBubbleKey.bind(this), this.onFilterChange = this.onFilterChange.bind(this), this.stopEnter = this.stopEnter.bind(this), this.searchKeyHandler = this.searchKeyHandler.bind(this)
				}
				stopEnter(e) {
					e.key === sc && e.preventDefault()
				}
				onFilterChange(e) {
					this.props.onFilterContacts(e.currentTarget.value)
				}
				searchKeyHandler(e) {
					const {
						props: {
							onFilterContacts: t,
							onIdentifyContact: n,
							onIdentifyContactTimeout: a
						}
					} = this, s = e.currentTarget, c = () => s.value;
					switch (this.timeoutToken && clearTimeout(this.timeoutToken), this.timeoutToken = setTimeout(() => {
						c() && n(c())
					}, a), e.key) {
						case sc:
							return n((() => s.id)());
						case cc:
						case lc:
						case ac:
							if (0 === c().length) {
								const e = wi()(this.props.selectedContacts);
								e && e.name && Object(Aa.findDOMNode)(this.bubbleRefs[e.name]).focus()
							}
					}
					return t(c())
				}
				render() {
					const {
						props: {
							filter: e,
							innerRef: t,
							resetFilter: n,
							selectedContacts: a,
							onFilterReset: s
						}
					} = this, c = n ? "" : e;
					return r.a.createElement(Bi, {
						autoScrollBottom: !0
					}, r.a.createElement(Di, null, f.fbt._("To:", null, {
						hk: "2eyFcf"
					})), r.a.createElement(Li, null, a && a.length > 0 && a.map((e, t) => r.a.createElement(Ai, {
						key: "selected-contact-".concat(t),
						tabIndex: 0,
						onKeyDown: Object(mn.a)(this.onBubbleKey(e)),
						ref: t => {
							this.bubbleRefs[e.name] = t
						}
					}, e.name)), r.a.createElement(Ui, {
						key: "search-bar",
						type: "text",
						autoFocus: !0,
						value: c,
						onFocus: s,
						onChange: this.onFilterChange,
						onKeyDown: this.stopEnter,
						onKeyUp: this.searchKeyHandler,
						ref: e => {
							this.searchBarInputRef = e
						},
						innerRef: e => t(e)
					})))
				}
			}
			Ri.defaultProps = {
				onIdentifyContactTimeout: 1e3
			};
			var Pi = n("./src/chat/controls/Checkbox/index.tsx"),
				Hi = n("./src/chat/components/SelectableUser/index.m.less"),
				Fi = n.n(Hi);
			const Ki = i.a.wrapped(Pi.a, "Checkbox", Fi.a),
				Gi = i.a.wrapped($, "UserPic", Fi.a),
				zi = i.a.span("Name", Fi.a);
			class Vi extends c.Component {
				constructor() {
					super(...arguments), this.CONTACT_FORM_NAME = "contactForm"
				}
				render() {
					const {
						contact: {
							id: e,
							name: t
						},
						formName: n,
						isChecked: a,
						onChange: s
					} = this.props;
					return r.a.createElement(Ki, {
						type: "checkbox",
						name: n,
						value: t,
						onChange: s,
						checked: a(e),
						id: e
					}, r.a.createElement(Gi, {
						userId: e
					}), r.a.createElement(zi, null, t))
				}
			}
			var Wi = n("./src/chat/components/UnselectableUser/index.m.less"),
				qi = n.n(Wi);
			const Zi = i.a.span("Wrapper", qi.a),
				Ji = i.a.span("Content", qi.a),
				Qi = i.a.wrapped($, "UserPic", qi.a),
				Yi = i.a.span("Name", qi.a),
				Xi = i.a.span("Context", qi.a);
			class $i extends c.Component {
				render() {
					const {
						contact: {
							id: e,
							name: t
						},
						context: n
					} = this.props;
					return r.a.createElement(Zi, null, r.a.createElement(Ji, null, r.a.createElement(Qi, {
						userId: e
					}), r.a.createElement(Yi, null, t)), r.a.createElement(Xi, null, n))
				}
			}
			var el = n("./src/chat/selectors/contacts.ts"),
				tl = n("./src/chat/components/OverlayCreateChannel/index.m.less"),
				nl = n.n(tl);
			const al = "contactForm",
				sl = i.a.div("Content", nl.a),
				cl = i.a.wrapped(Pi.a, "Checkbox", nl.a),
				rl = i.a.wrapped(ss, "Scroller", nl.a),
				ol = i.a.div("ListItem", nl.a),
				il = i.a.div("ListItemHeader", nl.a),
				ll = i.a.h4("ChatListHeader", nl.a),
				dl = i.a.span("Name", nl.a),
				ul = i.a.span("Error", nl.a),
				hl = i.a.wrapped(Pr, "ChannelNameInput", nl.a),
				ml = i.a.div("OverlayContent", nl.a),
				bl = i.a.wrapped(e => r.a.createElement("div", {
					className: Object(me.a)(e.className, {
						[nl.a.shown]: e.isShown
					})
				}, e.children), "ChannelNameWrapper", nl.a);
			bl.displayName = "ChannelNameWrapper";
			const pl = e => e.toLocaleLowerCase(),
				gl = Object(B.a)({
					channelAction: e => Object(wt.c)(e),
					channel: e => Object(C.k)(e),
					contacts: el.i,
					isCreatingChannel: C.M,
					loadedContacts: el.j,
					knownContacts: el.h,
					memberCount: e => Object(C.A)(e, "memberCount"),
					existingGroupUsers: e => {
						const t = Object(C.A)(e, "members");
						return t && t.map(e => e.id)
					},
					selectedUsers: el.k,
					selectedUsersCount: el.l
				}),
				Ol = Object(o.b)(gl, e => ({
					onCreateNewChannel: (t, n) => e(Object(p.B)(t, n)),
					onInviteUsersToExistingChannel: t => e(Object(p.H)(t)),
					onIdentifyContact: t => e(Object(Si.k)({
						username: t
					})),
					onCancelAndGoBack: () => {
						e(Object(pe.a)()), e(Object(xe.e)())
					},
					onSelectUser: t => e(Object(Ni.m)(t)),
					onUnselectUser: t => e(Object(Ni.u)(t)),
					removeAllSelectedUsers: () => e(Object(Ni.t)()),
					requestSuggestedContacts: () => e(Object(Si.n)())
				}));
			class fl extends r.a.Component {
				constructor(e) {
					super(e), this.searchBarElement = null, this.isUserSelected = e => this.props.selectedUsers.includes(e), this.isCreateChannelURLAction = () => this.props.channelAction === zc.a.CREATE, this.isInviteMembersURLAction = () => this.props.channelAction === zc.a.INVITE_MEMBERS, this.isSubredditChannel = () => !(!this.props.channel || this.props.channel.type !== ee.a.Subreddit), this.isExistingGroupUser = e => !(!(this.isInviteMembersURLAction() && this.props.existingGroupUsers && this.props.existingGroupUsers.includes(e)) || this.isUserSelected(e)), this.hasTooManyMembers = () => {
						const {
							isCreatingChannel: e,
							memberCount: t,
							selectedUsersCount: n
						} = this.props;
						if (e) return n > zc.f;
						return (n || 0) + (t || 0) > zc.f
					}, this.isSubmitDisabled = e => {
						const {
							isCreatingChannel: t,
							selectedUsersCount: n
						} = this.props, a = this.isCreateChannelURLAction(), s = e < 0 || e === zc.e, c = n > 1, r = this.hasTooManyMembers();
						return !this.isSubredditChannel() && (!n || t || a && c && (s || r) || !a && r)
					}, this.getInviteMembersText = () => this.isSubredditChannel() ? f.fbt._("Add to room", null, {
						hk: "2SDTyo"
					}) : f.fbt._("Add to group", null, {
						hk: "4n0y9e"
					}), this.primaryButtonText = () => this.isInviteMembersURLAction() ? this.getInviteMembersText() : f.fbt._("Start a chat", null, {
						hk: "4BZNdM"
					}), this.getBlockedContactText = e => e.isBlocked ? f.fbt._("blocked", null, {
						hk: "3BVDae"
					}) : !1 === e.acceptChats ? f.fbt._("unable to message this account", null, {
						hk: "SDEZ3"
					}) : this.isSubredditChannel() ? f.fbt._("already in room", null, {
						hk: "108K9z"
					}) : f.fbt._("already in group", null, {
						hk: "1z5QI7"
					}), this.getOverlayTitle = () => this.isCreateChannelURLAction() ? f.fbt._("Create Group", null, {
						hk: "1SQOf3"
					}) : this.getInviteMembersText(), this.getOverlayMessage = () => {
						const {
							memberCount: e,
							selectedUsersCount: t
						} = this.props, n = t + (this.isCreateChannelURLAction() ? 1 : e), a = (zc.f - n).toString();
						return t === zc.f ? this.isSubredditChannel() ? f.fbt._("You can add {remaining count} more Redditors", [f.fbt._param("remaining count", a)], {
							hk: "4qe3Ep"
						}) : f.fbt._("Maximum group size reached", null, {
							hk: "7hpRV"
						}) : ""
					}, this.getSelectedContacts = this.getSelectedContacts.bind(this), this.onContactsSelect = this.onContactsSelect.bind(this), this.onFilterContacts = this.onFilterContacts.bind(this), this.onFilterReset = this.onFilterReset.bind(this), this.onSubmit = this.onSubmit.bind(this), this.onCancel = this.onCancel.bind(this), this.handleChannelNameInput = this.handleChannelNameInput.bind(this), this.state = {
						filter: "",
						resetFilter: !1,
						groupName: ""
					}
				}
				componentWillMount() {
					this.props.requestSuggestedContacts()
				}
				componentWillUnmount() {
					this.props.removeAllSelectedUsers()
				}
				onContactsSelect(e) {
					const t = e.target.id,
						{
							onSelectUser: n,
							onUnselectUser: a,
							selectedUsers: s,
							selectedUsersCount: c
						} = this.props;
					s.includes(t) ? a(t) : (c < zc.f || c < 1) && (this.setState(e => Object.assign(Object.assign({}, e), {
						resetFilter: !0
					})), n(t)), this.searchBarElement && this.searchBarElement.focus()
				}
				onFilterContacts(e) {
					this.setState({
						filter: e
					})
				}
				onFilterReset() {
					this.setState({
						filter: "",
						resetFilter: !1
					})
				}
				handleChannelNameInput(e) {
					this.setState({
						groupName: e
					})
				}
				onSubmit() {
					const {
						props: {
							onCreateNewChannel: e,
							onInviteUsersToExistingChannel: t
						},
						state: {
							groupName: n
						}
					} = this, a = this.getSelectedContacts().map(e => e.id);
					a && a.length && (this.isCreateChannelURLAction() ? e(a, n.trim()) : t(a))
				}
				onCancel() {
					this.props.onCancelAndGoBack()
				}
				getSelectedContacts() {
					const {
						loadedContacts: e,
						selectedUsers: t
					} = this.props, n = [];
					return t.map(t => {
						for (const a in e) pl(e[a].id) === t && n.push(e[a])
					}), n
				}
				getFilteredContacts() {
					const {
						props: {
							contacts: e
						},
						state: {
							filter: t
						}
					} = this;
					return t ? e.filter(e => pl(e.name).includes(pl(t)) && !e.isBlocked) : e
				}
				getLoadedContact() {
					return this.props.loadedContacts.find(e => e && pl(e.name) === pl(this.state.filter))
				}
				getIsValidUser(e) {
					const t = this.props.knownContacts[pl(e)];
					return !t || !t.loaded || t.valid
				}
				availableCharacters(e) {
					return zc.e - e.length
				}
				render() {
					const {
						props: {
							className: e,
							onIdentifyContact: t,
							selectedUsersCount: n
						},
						state: {
							filter: a,
							resetFilter: s,
							groupName: c
						},
						isUserSelected: o,
						isExistingGroupUser: i,
						onFilterReset: l,
						onFilterContacts: d,
						onContactsSelect: u,
						onSubmit: h,
						onCancel: m
					} = this, b = this.getSelectedContacts(), p = this.getFilteredContacts(), g = this.getLoadedContact(), O = !!a && !g, j = !!g, C = !this.getIsValidUser(a), E = this.handleChannelNameInput, _ = this.availableCharacters(c), v = this.isSubmitDisabled(_), y = this.primaryButtonText(), I = this.isCreateChannelURLAction(), x = n >= zc.f && !this.isSubredditChannel();
					return r.a.createElement(si, {
						className: e,
						onSubmit: Object(mn.a)(h),
						innerContent: !0,
						form: !0
					}, r.a.createElement(ml, null, r.a.createElement(fi, {
						message: this.getOverlayMessage(),
						title: this.getOverlayTitle(),
						warning: x
					}), r.a.createElement(sl, null, I && r.a.createElement(bl, {
						isShown: n > 1
					}, r.a.createElement(hl, {
						handleChannelNameInput: E,
						placeholder: f.fbt._("Group name (required)", null, {
							hk: "49Py5W"
						})
					}, r.a.createElement(Hr.a, {
						count: _
					}))), r.a.createElement(Ri, {
						innerRef: e => this.searchBarElement = e,
						filter: a,
						resetFilter: s,
						selectedContacts: b,
						onFilterReset: l,
						onFilterContacts: d,
						onIdentifyContact: t,
						onUnselect: this.props.onUnselectUser
					}), r.a.createElement(rl, {
						loadMoreRows: St.a,
						threshold: 0
					}, xi()(p, e => e.name).map(e => r.a.createElement(ol, {
						key: e.name
					}, i(e.id) || e.isBlocked || !1 === e.acceptChats ? r.a.createElement($i, {
						contact: e,
						context: this.getBlockedContactText(e)
					}) : r.a.createElement(Vi, {
						formName: al,
						contact: e,
						onChange: u,
						isChecked: o
					}))), (O || j) && r.a.createElement(il, null, r.a.createElement(ll, null, f.fbt._("Click to add", null, {
						hk: "4khdH7"
					}))), O && !j && r.a.createElement(ol, null, r.a.createElement(cl, {
						type: "checkbox",
						disabled: !0,
						name: al,
						value: a,
						onChange: u
					}, r.a.createElement(dl, null, a, C && r.a.createElement(ul, null, f.fbt._("User doesn't exist", null, {
						hk: "2nKv7P"
					}))))), j && g && r.a.createElement(ol, null, !I && (i(g.id) || g.isBlocked) || !1 === g.acceptChats ? r.a.createElement($i, {
						contact: g,
						context: this.getBlockedContactText(g)
					}) : r.a.createElement(Vi, {
						formName: al,
						contact: g,
						onChange: u,
						isChecked: o
					})))), r.a.createElement(ui, {
						primaryButtonText: y,
						primaryButtonDisabled: v,
						secondaryButtonAction: m
					})))
				}
			}
			fl.displayName = "OverlayCreateChannel";
			var jl = Ol(fl),
				Cl = n("./src/chat/actions/sidebar.ts");
			var El = e => r.a.createElement(R.a, {
					className: e.className,
					viewBox: "0 0 25 25"
				}, r.a.createElement("path", {
					d: "M18.5 13.17a1.62 1.62 0 0 1-2.35 0c-.31-.3-.48-.73-.48-1.17 0-.44.17-.87.49-1.17a1.7 1.7 0 0 1 2.35 0c.32.3.49.73.49 1.17 0 .44-.17.87-.5 1.17m-4.86-.85c-.03.1-.05.21-.1.32l-.15.28c-.07.1-.14.19-.22.25a1.62 1.62 0 0 1-2.35 0 1.85 1.85 0 0 1-.36-.53c-.05-.1-.07-.21-.1-.32-.01-.1-.03-.21-.03-.32 0-.44.18-.87.5-1.17a1.7 1.7 0 0 1 2.34 0c.32.3.5.73.5 1.17l-.03.32m-5.33 0c-.03.1-.06.21-.11.32-.04.1-.1.2-.15.28-.06.1-.13.19-.21.27a1.67 1.67 0 0 1-2.35 0c-.08-.08-.14-.18-.21-.27a1.85 1.85 0 0 1-.25-.6 1.62 1.62 0 0 1 .47-1.5 1.7 1.7 0 0 1 2.34 0 1.85 1.85 0 0 1 .47.85l.02.33-.02.32M12 0A12.01 12.01 0 0 0 1.99 18.6L.7 22.46a.67.67 0 0 0 .84.84L5.4 22A12.01 12.01 0 0 0 24 12c0-6.62-5.38-12-12-12"
				}), r.a.createElement("path", {
					d: "M18.5 13.17a1.62 1.62 0 0 1-2.35 0c-.31-.3-.48-.73-.48-1.17 0-.44.17-.87.49-1.17a1.7 1.7 0 0 1 2.35 0c.32.3.49.73.49 1.17 0 .44-.17.87-.5 1.17",
					fill: "#FFFFFF"
				}), r.a.createElement("path", {
					d: "M13.64 12.32c-.03.1-.05.21-.1.32l-.15.28c-.07.1-.14.19-.22.25a1.62 1.62 0 0 1-2.35 0 1.85 1.85 0 0 1-.36-.53c-.05-.1-.07-.21-.1-.32-.01-.1-.03-.21-.03-.32 0-.44.18-.87.5-1.17a1.7 1.7 0 0 1 2.34 0c.32.3.5.73.5 1.17l-.03.32",
					fill: "#FFFFFF"
				}), r.a.createElement("path", {
					d: "M8.3 12.32a1.85 1.85 0 0 1-.25.6c-.06.1-.13.19-.21.27a1.67 1.67 0 0 1-2.35 0c-.08-.08-.14-.18-.21-.27a1.85 1.85 0 0 1-.25-.6 1.62 1.62 0 0 1 .47-1.5 1.7 1.7 0 0 1 2.34 0 1.85 1.85 0 0 1 .47.85l.02.33-.02.32",
					fill: "#FFFFFF"
				})),
				_l = n("./src/chat/components/FirstTimeUserExpPromo/index.m.less"),
				vl = n.n(_l);
			const yl = i.a.div("Wrapper", vl.a),
				Il = i.a.span("Header", vl.a),
				xl = i.a.span("LabelText", vl.a),
				Sl = i.a.h5("TitleText", vl.a),
				Nl = i.a.p("BodyText", vl.a),
				kl = i.a.wrapped(El, "ChatBubbleIcon", vl.a),
				wl = i.a.wrapped(Oe.b, "Button", vl.a),
				Tl = Object(o.b)(void 0, e => ({
					setSeenSubredditChatFtuxAction: () => e(Object(l.f)()),
					viewSubredditChatFtuxPromoTracking: () => e(Object(xe.H)()),
					dismissSubredditChatFtuxPromoTracking: () => e(Object(xe.s)())
				}));
			class Ml extends c.Component {
				componentDidMount() {
					this.props.viewSubredditChatFtuxPromoTracking()
				}
				closePromo() {
					this.props.setSeenSubredditChatFtuxAction(), this.props.dismissSubredditChatFtuxPromoTracking()
				}
				render() {
					return r.a.createElement(yl, {
						className: this.props.className
					}, r.a.createElement(Il, null, r.a.createElement("span", null, r.a.createElement(xl, null, f.fbt._("New Feature", null, {
						hk: "1LvO55"
					})), r.a.createElement(Sl, null, f.fbt._("Community Chat Rooms", null, {
						hk: "3No0ew"
					}))), r.a.createElement(kl, null)), r.a.createElement(Nl, null, f.fbt._("Some subreddits now have chat rooms. You've got early access - find topics you're interested in and join the conversation!", null, {
						hk: "1WTJoU"
					})), r.a.createElement(wl, {
						primary: !0,
						onClick: () => this.closePromo()
					}, f.fbt._("Got it", null, {
						hk: "3WYsfV"
					})))
				}
			}
			Ml.displayName = "FirstTimeUserExpPromo";
			var Al = Tl(Ml),
				Dl = n("./src/chat/icons/svgs/ChatNew/index.tsx"),
				Ll = n("./src/chat/components/Sidebar/CreateChannel/index.m.less"),
				Ul = n.n(Ll);
			const Bl = i.a.wrapped(Dl.a, "ChatNew", Ul.a),
				Rl = i.a.span("Button", Ul.a),
				Pl = i.a.span("Text", Ul.a);
			var Hl = Object(o.b)(null, e => ({
					createChannel: () => {
						e(Object(pe.b)(Object(fe.channelUrl)("create"))), e(Object(xe.h)())
					}
				}))(e => r.a.createElement(Rl, {
					onClick: e.createChannel,
					title: f.fbt._("Start a new chat", null, {
						hk: "3C4ek3"
					}),
					tabIndex: 0
				}, r.a.createElement(Bl, null), r.a.createElement(Pl, null, f.fbt._("Start a chat", null, {
					hk: "4w1obG"
				})))),
				Fl = n("./node_modules/lodash/values.js"),
				Kl = n.n(Fl),
				Gl = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				zl = n("./src/chat/components/Message/Preview.m.less"),
				Vl = n.n(zl);
			const Wl = e => {
					if (e.isInvited) return [f.fbt._("Wants to message you", null, {
						hk: "3CbciS"
					})];
					if (!e.message) return [];
					const t = (e => {
						let {
							currentUserId: t,
							isGroup: n,
							message: a
						} = e;
						return n && a && a.sender ? t === a.sender.userId ? f.fbt._("You:", null, {
							hk: "wP43r"
						}) : "".concat(a.sender.nickname, ":") : ""
					})(e);
					switch (e.message.messageData.type) {
						case ge.c.TEXT: {
							const {
								value: n
							} = e.message.messageData;
							return [t, " ", Object(He.b)(n) ? f.fbt._("Shared a link", null, {
								hk: "4bNVW7"
							}) : n]
						}
						case ge.c.POST:
							return [t, " ", f.fbt._("Shared a post", null, {
								hk: "1hd8l1"
							}), " ", e.message.messageData.subreddit];
						case ge.c.EMBED:
							return [t, " ", f.fbt._("Shared a post", null, {
								hk: "1hd8l1"
							}), " ", e.message.messageData.value];
						case ge.c.SNOOMOJI:
							return [t, " ", f.fbt._("Sent a Snoomoji", null, {
								hk: "4hD30K"
							})];
						default:
							return []
					}
				},
				ql = i.a.wrapped(e => r.a.createElement("sub", {
					className: Object(me.a)(e.className, {
						[Vl.a.active]: e.isActive,
						[Vl.a.unread]: e.isInvited || e.isUnread
					})
				}, Wl(e)), "MessagePreview", Vl.a);
			var Zl = e => r.a.createElement(R.a, {
					className: e.className,
					disable: !0,
					viewBox: "0 0 9 12"
				}, r.a.createElement("g", {
					transform: "translate(-321.000000, -286.000000)"
				}, r.a.createElement("path", {
					d: "M328.379326,295.820899 L329.259195,297.344876 L329.259195,297.344876 C329.33686,297.479395 329.29077,297.651405 329.15625,297.72907 L329.15625,297.72907 C329.02173,297.806735 328.84972,297.760645 328.772055,297.626126 L322.303305,286.421922 L322.303305,286.421922 C322.22564,286.287402 322.27173,286.115392 322.40625,286.037727 L322.40625,286.037727 L322.40625,286.037727 C322.54077,285.960062 322.71278,286.006152 322.790445,286.140672 L323.811767,287.909655 C324.114951,287.754406 324.444225,287.640531 324.791552,287.575791 C324.78955,287.555022 324.784974,287.534806 324.784974,287.513206 C324.784974,287.131053 325.105006,286.820899 325.49997,286.820899 C325.894933,286.820899 326.214965,287.131053 326.214965,287.513206 C326.214965,287.534806 326.210389,287.555022 326.208387,287.575791 C327.841151,287.88013 329.074947,289.270283 329.074947,290.94013 L329.074947,293.333299 C329.074947,294.039453 329.364664,294.716806 329.880318,295.216099 L329.894618,295.229945 C330.119699,295.447883 329.960398,295.820899 329.641796,295.820899 L328.379326,295.820899 Z M326.996393,295.820899 L321.358143,295.820899 C321.039827,295.820899 320.88024,295.447883 321.105321,295.229945 L321.119621,295.216099 C321.635276,294.716806 321.924992,294.039453 321.924992,293.333299 L321.924992,290.94013 C321.924992,290.051737 322.274213,289.242509 322.846942,288.633839 L326.996393,295.820899 Z M325.78125,297.508399 C325.151952,297.508399 324.611984,297.045274 324.375,296.383399 L327.1875,296.383399 C326.950516,297.045274 326.410548,297.508399 325.78125,297.508399 Z"
				}))),
				Jl = n("./src/chat/components/ChatListItem/index.m.less"),
				Ql = n.n(Jl);

			function Yl() {
				return (Yl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Xl = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
				}
				return n
			};
			const $l = i.a.wrapped(Mn, "ChatIcon", Ql.a),
				ed = i.a.div("ItemTitle", Ql.a),
				td = i.a.div("ItemControls", Ql.a),
				nd = i.a.span("ChannelName", Ql.a),
				ad = i.a.div("Description", Ql.a),
				sd = i.a.wrapped(Ln, "TimeStamp", Ql.a),
				cd = e => {
					var {
						className: t
					} = e, n = Xl(e, ["className"]);
					return r.a.createElement(sd, Yl({
						className: Object(me.a)(t, {
							[Ql.a.active]: n.active,
							[Ql.a.unread]: n.unread
						})
					}, n), n.children)
				},
				rd = i.a.wrapped(e => r.a.createElement("h4", {
					className: Object(me.a)(e.className, {
						[Ql.a.active]: e.active,
						[Ql.a.unread]: e.unread
					})
				}, e.children), "ItemTitleName", Ql.a),
				od = Object(B.a)({
					inviterContact: (e, t) => {
						const n = e.channels.models[t.channelId];
						return Object(el.e)(e, n)
					}
				});
			var id = Object(o.b)(od)(i.a.wrapped(e => {
					const {
						className: t,
						channelId: n,
						currentUserId: a,
						isGroup: s,
						isSelected: c,
						channelState: o,
						userId: i,
						secondUserId: l,
						name: d,
						message: u,
						muted: h,
						unread: m,
						mentionCount: b,
						updatedAt: p
					} = e, g = o === zc.b.INVITED, O = g ? Object(fe.channelAction)(n, zc.a.VIEW_INVITE) : Object(fe.channelUrl)(n);
					return r.a.createElement(Gl.a, {
						to: O,
						className: Object(me.a)(t, {
							[Ql.a.selected]: c
						})
					}, h && r.a.createElement(td, null, r.a.createElement(Zl, null)), r.a.createElement($l, {
						userId: i,
						secondUserId: l
					}), r.a.createElement(ed, null, r.a.createElement(rd, {
						unread: m || g,
						active: c
					}, r.a.createElement(nd, null, d), p && r.a.createElement(cd, {
						date: p,
						unread: m,
						active: c
					}, y(new Date(p)))), r.a.createElement(ad, null, r.a.createElement(ql, {
						currentUserId: a,
						isGroup: s,
						isInvited: g,
						isUnread: m,
						isActive: c,
						message: u
					}), !!b && r.a.createElement(Hr.b, {
						count: b
					}))))
				}, "ChatListItem", Ql.a)),
				ld = n("./src/chat/components/Sidebar/SidebarDivider/index.m.less"),
				dd = n.n(ld);
			const ud = i.a.div("Divider", dd.a),
				hd = e => r.a.createElement(ud, null, e.children),
				md = i.a.div("SubDivider", dd.a),
				bd = e => r.a.createElement(md, null, e.children);
			var pd = n("./src/chat/controls/InviteExpander/index.m.less"),
				gd = n.n(pd);
			const Od = i.a.div("ButtonContainer", gd.a),
				fd = i.a.div("LoadingIndicator", gd.a);
			class jd extends r.a.Component {
				constructor(e) {
					super(e), this.onExpand = this.onExpand.bind(this), this.onCollapse = this.onCollapse.bind(this), this.state = {
						expanded: !1
					}
				}
				onExpand() {
					const {
						expandInviteList: e,
						fetchInvitedChannels: t,
						fetchingInvitedChannels: n,
						hasMoreInvitedChannels: a,
						inviteListExpanded: s
					} = this.props;
					s ? a && !n && s && t() : e(), this.props.onTrackExpandToggle(!0)
				}
				onCollapse() {
					this.props.collapseInviteList(), this.props.onTrackExpandToggle(!1)
				}
				render() {
					const {
						className: e,
						fetchingInvitedChannels: t,
						inviteListExpanded: n,
						hasMoreInvitedChannels: a
					} = this.props;
					return t ? r.a.createElement(fd, {
						role: "progressbar"
					}, f.fbt._("Loading channels...", null, {
						hk: "4gUIDq"
					})) : r.a.createElement(Od, {
						className: e
					}, r.a.createElement(ke, {
						onClick: this.onExpand,
						hidden: n && !a
					}, f.fbt._("Show more", null, {
						hk: "3aeUi6"
					})), r.a.createElement(ke, {
						onClick: this.onCollapse,
						hidden: !n
					}, f.fbt._("Collapse", null, {
						hk: "aLyRg"
					})))
				}
			}
			var Cd = Object(o.b)(null, e => ({
				onTrackExpandToggle: t => e(t ? Object(xe.k)() : Object(xe.f)()),
				expandInviteList: () => e(Object(p.D)()),
				collapseInviteList: () => e(Object(p.z)()),
				fetchInvitedChannels: () => e(Object(p.F)())
			}))(jd);
			const Ed = (e, t) => t.type === ee.a.Group ? t.name && "Group Channel" !== t.name ? t.name : t.members.map(e => e.name).join(", ") : e.firstUser.name,
				_d = (e, t) => {
					const n = t.channelState === zc.b.JOINED,
						a = t.channelState === zc.b.INVITED;
					let s, c, r;
					for (const o of t.members) o.id === e ? c = o : o.id === (t.inviter && t.inviter.id) ? r = o : (!s || s.name.toLocaleLowerCase() > o.name.toLocaleLowerCase()) && (s = o);
					return t.type === ee.a.Direct ? {
						firstUser: s || t.inviter
					} : n && c && !s && !r ? {
						firstUser: c
					} : n && c && r ? {
						firstUser: c,
						secondUser: r
					} : n && c && s ? {
						firstUser: c,
						secondUser: s
					} : a && c && r ? {
						firstUser: c,
						secondUser: r
					} : a && c && t.inviter ? {
						firstUser: c,
						secondUser: t.inviter
					} : {
						firstUser: t.inviter
					}
				},
				vd = Object(B.a)({
					currentUserId: Us.a,
					invitedChannels: C.H,
					selectedChannelId: e => Object(C.A)(e, "channelId"),
					fetchingInvitedChannels: C.c,
					inviteListExpanded: C.G,
					hasMoreInvitedChannels: C.D
				});
			var yd = Object(o.b)(vd)(e => {
					const {
						currentUserId: t,
						fetchingInvitedChannels: n,
						hasMoreInvitedChannels: a,
						invitedChannels: s,
						inviteListExpanded: c,
						selectedChannelId: o
					} = e;
					let i = s.slice(0, 2);
					return c && (i = s), s && s.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(hd, null, f.fbt._("Requests", null, {
						hk: "eDJtL"
					})), Kl()(i).map((e, n) => {
						const a = _d(t, e),
							{
								channelId: s,
								lastMessage: c,
								channelState: i,
								unreadMessageCount: l,
								unreadMentionCount: d
							} = e;
						return r.a.createElement(id, {
							key: s,
							channelId: s,
							channelState: i,
							name: Ed(a, e),
							isSelected: s === o,
							isGroup: e.type === ee.a.Group,
							message: c,
							updatedAt: c && c.createdAt,
							unread: !!l,
							mentionCount: d,
							currentUserId: t,
							userId: a && a.firstUser ? a && a.firstUser.id : "",
							secondUserId: a && a.secondUser ? a && a.secondUser.id : ""
						})
					}), s.length > 2 ? r.a.createElement(Cd, {
						fetchingInvitedChannels: n,
						hasMoreInvitedChannels: a,
						inviteListExpanded: c
					}) : null) : null
				}),
				Id = n("./src/chat/components/BasicJoined/index.m.less"),
				xd = n.n(Id);
			const Sd = i.a.div("LoadingIndicator", xd.a),
				Nd = i.a.p("Text", xd.a),
				kd = Object(B.a)({
					currentUserId: Us.a,
					fetchingJoinedChannels: C.e,
					hasMoreJoinedChannels: C.F,
					joinedChannels: C.R,
					selectedChannelId: e => Object(C.A)(e, "channelId")
				});
			var wd = Object(o.b)(kd, e => ({
					fetchJoinedChannels: () => e(Object(p.G)())
				}))(e => {
					const {
						className: t,
						currentUserId: n,
						fetchingJoinedChannels: a,
						joinedChannels: s,
						selectedChannelId: c
					} = e;
					return r.a.createElement("div", {
						className: t
					}, r.a.createElement(hd, null, f.fbt._("Chats", null, {
						hk: "Bzl0R"
					})), (!s || !s.length) && r.a.createElement(Nd, null, f.fbt._("All the direct chats that you're in will show up here", null, {
						hk: "4A1UXC"
					})), s.map((e, t) => {
						const a = _d(n, e),
							{
								channelId: s,
								lastMessage: o,
								channelState: i,
								unreadMessageCount: l,
								unreadMentionCount: d
							} = e;
						return r.a.createElement(id, {
							key: s,
							channelId: s,
							channelState: i,
							name: Ed(a, e),
							isSelected: s === c,
							isGroup: e.type === ee.a.Group,
							message: o,
							updatedAt: o && o.createdAt,
							unread: !!l,
							mentionCount: d,
							currentUserId: n,
							userId: a && a.firstUser ? a && a.firstUser.id : "",
							secondUserId: a && a.secondUser ? a && a.secondUser.id : ""
						})
					}), a && r.a.createElement(Sd, {
						role: "progressbar"
					}, f.fbt._("Loading channels...", null, {
						hk: "4rLWwM"
					})))
				}),
				Td = n("./src/chat/components/Sidebar/DirectsPanel/index.m.less"),
				Md = n.n(Td);
			const Ad = i.a.wrapped(ss, "Scroller", Md.a),
				Dd = Object(B.a)({
					fetchingJoinedChannels: C.e,
					hasMoreJoinedChannels: C.F
				});
			var Ld = Object(o.b)(Dd, e => ({
				fetchJoinedChannels: () => e(Object(p.G)())
			}))(e => {
				const {
					fetchingJoinedChannels: t,
					fetchJoinedChannels: n,
					hasMoreJoinedChannels: a
				} = e;
				return r.a.createElement(Ad, {
					loadMoreRows: () => {
						!t && a && n()
					},
					threshold: 0
				}, r.a.createElement(yd, null), r.a.createElement(wd, null))
			});

			function Ud() {
				return (Ud = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Bd = e => r.a.createElement(R.a, Ud({}, e, {
					viewBox: "0 0 25 25"
				}), r.a.createElement("g", null, r.a.createElement("path", {
					d: "M18.5 13.17a1.62 1.62 0 0 1-2.35 0c-.31-.3-.48-.73-.48-1.17 0-.44.17-.87.49-1.17a1.7 1.7 0 0 1 2.35 0c.32.3.49.73.49 1.17 0 .44-.17.87-.5 1.17m-4.86-.85c-.03.1-.05.21-.1.32l-.15.28c-.07.1-.14.19-.22.25a1.62 1.62 0 0 1-2.35 0 1.85 1.85 0 0 1-.36-.53c-.05-.1-.07-.21-.1-.32-.01-.1-.03-.21-.03-.32 0-.44.18-.87.5-1.17a1.7 1.7 0 0 1 2.34 0c.32.3.5.73.5 1.17l-.03.32m-5.33 0c-.03.1-.06.21-.11.32-.04.1-.1.2-.15.28-.06.1-.13.19-.21.27a1.67 1.67 0 0 1-2.35 0c-.08-.08-.14-.18-.21-.27a1.85 1.85 0 0 1-.25-.6 1.62 1.62 0 0 1 .47-1.5 1.7 1.7 0 0 1 2.34 0 1.85 1.85 0 0 1 .47.85l.02.33-.02.32M12 0A12.01 12.01 0 0 0 1.99 18.6L.7 22.46a.67.67 0 0 0 .84.84L5.4 22A12.01 12.01 0 0 0 24 12c0-6.62-5.38-12-12-12"
				}), r.a.createElement("path", {
					d: "M18.5 13.17a1.62 1.62 0 0 1-2.35 0c-.31-.3-.48-.73-.48-1.17 0-.44.17-.87.49-1.17a1.7 1.7 0 0 1 2.35 0c.32.3.49.73.49 1.17 0 .44-.17.87-.5 1.17",
					fill: "#FFFFFF"
				}), r.a.createElement("path", {
					d: "M13.64 12.32c-.03.1-.05.21-.1.32l-.15.28c-.07.1-.14.19-.22.25a1.62 1.62 0 0 1-2.35 0 1.85 1.85 0 0 1-.36-.53c-.05-.1-.07-.21-.1-.32-.01-.1-.03-.21-.03-.32 0-.44.18-.87.5-1.17a1.7 1.7 0 0 1 2.34 0c.32.3.5.73.5 1.17l-.03.32",
					fill: "#FFFFFF"
				}), r.a.createElement("path", {
					d: "M8.3 12.32a1.85 1.85 0 0 1-.25.6c-.06.1-.13.19-.21.27a1.67 1.67 0 0 1-2.35 0c-.08-.08-.14-.18-.21-.27a1.85 1.85 0 0 1-.25-.6 1.62 1.62 0 0 1 .47-1.5 1.7 1.7 0 0 1 2.34 0 1.85 1.85 0 0 1 .47.85l.02.33-.02.32",
					fill: "#FFFFFF"
				}))),
				Rd = n("./src/chat/components/SubredditHeader/index.m.less"),
				Pd = n.n(Rd);
			const Hd = i.a.wrapped(Fn, "Group", Pd.a),
				Fd = i.a.wrapped(Gn, "Key", Pd.a),
				Kd = i.a.wrapped(Bd, "SubChat", Pd.a),
				Gd = i.a.span("TextOverflow", Pd.a),
				zd = i.a.span("Icon", Pd.a),
				Vd = i.a.wrapped(K, "NSFWIcon", Pd.a),
				Wd = i.a.img("SubredditHeaderIcon", Pd.a),
				qd = i.a.div("SubredditHeaderTitle", Pd.a),
				Zd = i.a.wrapped(e => r.a.createElement("h3", {
					className: Object(me.a)(e.className, {
						[Pd.a.selected]: e.isSelected
					})
				}, e.children), "SubredditName", Pd.a),
				Jd = i.a.wrapped(e => r.a.createElement("h4", {
					className: Object(me.a)(e.className, {
						[Pd.a.selected]: e.isSelected
					})
				}, e.children), "ChannelName", Pd.a);
			var Qd = i.a.wrapped(e => r.a.createElement("div", {
					className: e.className
				}, e.isNSFW ? r.a.createElement(Vd, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Wd, {
					alt: e.subredditName,
					src: e.subredditIconUrl && e.subredditIconUrl.length ? e.subredditIconUrl : "".concat(U.a.assetPath, "/img/chat/community-icon.png")
				}), r.a.createElement(zd, null, r.a.createElement(Kd, null))), r.a.createElement(qd, null, r.a.createElement(Zd, {
					isSelected: e.isSelected
				}, r.a.createElement(Gd, null, "r/".concat(e.subredditName))), r.a.createElement(Jd, {
					isSelected: e.isSelected
				}, void 0 === e.isPublic || e.isPublic ? r.a.createElement(Hd, null) : r.a.createElement(Fd, null), r.a.createElement(Gd, null, e.channelName)))), "SubredditHeader", Pd.a),
				Yd = n("./src/chat/components/SubredditInvitedLink/index.m.less"),
				Xd = n.n(Yd);
			var $d = i.a.wrapped(e => r.a.createElement(Gl.a, {
				className: Object(me.a)(e.className, {
					[Xd.a.selected]: e.isSelected
				}),
				to: Object(fe.channelAction)(e.channel.channelId, zc.a.VIEW_INVITE, e.subreddit.name)
			}, r.a.createElement(Qd, {
				channelName: e.channel.name,
				subredditName: e.subreddit.name,
				subredditIconUrl: e.subreddit.iconImg,
				isSelected: e.isSelected,
				isPublic: e.channel.isPublic
			})), "SubredditInvitedLink", Xd.a);
			const eu = Object(B.a)({
				fetchingInvitedSubredditChannels: C.d,
				hasMoreInvitedSubredditChannels: C.E,
				inviteListExpanded: C.G,
				subreddits: e => Object(Do.e)(e),
				subredditChannels: e => Object(C.o)(e),
				selectedChannelId: e => Object(C.A)(e, "channelId")
			});
			class tu extends r.a.Component {
				shouldComponentUpdate(e, t) {
					return !s()(this.props, e) || !s()(this.state, t)
				}
				render() {
					const {
						fetchingInvitedSubredditChannels: e,
						hasMoreInvitedSubredditChannels: t,
						inviteListExpanded: n,
						subredditChannels: a,
						selectedChannelId: s,
						subreddits: c,
						routeAction: o
					} = this.props;
					let i = a && a.slice(0, 2);
					return n && (i = a), a && a.length && i ? r.a.createElement(r.a.Fragment, null, r.a.createElement(hd, null, f.fbt._("Invites", null, {
						hk: "1T4f2K"
					})), i.map((e, t) => r.a.createElement($d, {
						key: "subreddit-invited-link-".concat(t),
						channel: e,
						isSelected: o === zc.a.VIEW_INVITE && e.channelId === s,
						subreddit: c[e.customData.subredditId]
					})), a.length > 2 && r.a.createElement(Cd, {
						fetchingInvitedChannels: e,
						hasMoreInvitedChannels: t,
						inviteListExpanded: n
					})) : null
				}
			}
			var nu = Object(o.b)(eu)(tu),
				au = n("./src/chat/components/SubredditJoined/index.m.less"),
				su = n.n(au);
			const cu = i.a.wrapped(Fn, "Group", su.a),
				ru = i.a.wrapped(Gn, "Key", su.a),
				ou = i.a.ul("Wrapper", su.a),
				iu = i.a.ul("SubredditList", su.a),
				lu = i.a.h2("BlankStateText", su.a),
				du = (i.a.span("SubredditName", su.a), i.a.wrapped(e => r.a.createElement("li", {
					key: e.key,
					className: Object(me.a)(e.className, {
						[su.a.active]: e.active,
						[su.a.unread]: e.hasUnread
					})
				}, e.children), "SubredditHeader", su.a)),
				uu = i.a.wrapped(e => r.a.createElement(Gl.a, {
					key: e.key,
					to: e.to,
					className: Object(me.a)(e.className, {
						[su.a.active]: e.active,
						[su.a.unread]: e.hasUnread
					})
				}, e.children), "SubredditChannelLink", su.a),
				hu = i.a.wrapped(e => {
					let {
						className: t,
						iconImg: n,
						keyColor: a
					} = e;
					return r.a.createElement("i", {
						role: "img",
						className: t,
						style: {
							backgroundColor: a || void 0,
							backgroundImage: 'url("'.concat(n || "".concat(U.a.assetPath, "/img/chat/community-icon.png"), '")')
						}
					})
				}, "SubredditIcon", su.a),
				mu = Object(B.a)({
					subredditList: e => Object(Do.a)(e),
					selectedChannelId: e => Object(C.x)(e)
				}),
				bu = Object(o.b)(mu),
				pu = e => {
					const {
						subredditList: t
					} = e;
					return t ? t.map((t, n) => {
						const {
							sortedChannels: a,
							name: s
						} = t;
						return r.a.createElement(du, {
							key: t.name
						}, r.a.createElement(hu, {
							iconImg: t.iconImg,
							keyColor: t.keyColor
						}), "r/".concat(t.name), r.a.createElement(iu, null, ((e, t, n) => {
							const {
								routeAction: a,
								selectedChannelId: s
							} = e;
							return t.map((e, t) => {
								const c = !!e.unreadMessageCount,
									o = e.channelId === s && a !== zc.a.VIEW_JOIN;
								return r.a.createElement("li", {
									key: "joinedItem-".concat(e.channelId)
								}, r.a.createElement(uu, {
									key: e.channelId,
									active: o,
									hasUnread: c,
									to: Object(fe.channelUrl)(e.channelId, n)
								}, e.isPublic ? r.a.createElement(cu, null) : r.a.createElement(ru, null), e.name, !!e.unreadMentionCount && r.a.createElement(Hr.b, {
									count: e.unreadMentionCount
								})))
							})
						})(e, a, s)))
					}) : null
				};
			class gu extends r.a.Component {
				shouldComponentUpdate(e, t) {
					return !s()(this.props, e) || !s()(this.state, t)
				}
				render() {
					const {
						subredditList: e
					} = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(hd, null, f.fbt._("Joined Rooms", null, {
						hk: "4pYpIa"
					})), r.a.createElement(ou, null, e ? pu(this.props) : r.a.createElement(lu, null, f.fbt._("Community chatrooms that you join will show up here.", null, {
						hk: "1v5ejq"
					}))))
				}
			}
			var Ou = bu(gu),
				fu = n("./src/chat/components/SubredditRecommendedLink/index.m.less"),
				ju = n.n(fu);
			const Cu = i.a.wrapped(e => r.a.createElement("p", {
				className: Object(me.a)(e.className, {
					[ju.a.selected]: e.isSelected
				})
			}, e.children), "ChannelDesc", ju.a);
			var Eu = i.a.wrapped(e => r.a.createElement(Gl.a, {
					className: Object(me.a)(e.className, {
						[ju.a.selected]: e.isSelected
					}),
					to: Object(fe.channelAction)(e.channel.channelId, zc.a.VIEW_JOIN, e.subreddit.name)
				}, r.a.createElement(Qd, {
					channelName: e.channel.name,
					subredditName: e.subreddit.name,
					subredditIconUrl: e.subreddit.iconImg,
					isSelected: e.isSelected
				}), r.a.createElement(Cu, {
					isSelected: e.isSelected
				}, e.channel.customData.description), r.a.createElement(Cu, {
					isSelected: e.isSelected
				}, f.fbt._({
					"*": "{number} Members",
					_1: "1 Member"
				}, [f.fbt._plural(e.channel.memberCount, "number")], {
					hk: "1SfBCq"
				}))), "SubredditChannelLink", ju.a),
				_u = n("./src/chat/components/SubredditRecommended/index.m.less"),
				vu = n.n(_u);
			const yu = Object(B.a)({
					channels: e => Object(C.v)(e),
					subreddits: e => Object(Do.e)(e),
					selectedChannelId: e => Object(C.A)(e, "channelId")
				}),
				Iu = Object(o.b)(yu),
				xu = i.a.div("Wrapper", vu.a);
			class Su extends r.a.Component {
				shouldComponentUpdate(e, t) {
					return !s()(this.props, e) || !s()(this.state, t)
				}
				render() {
					const {
						channels: e,
						routeAction: t,
						subreddits: n,
						selectedChannelId: a
					} = this.props;
					return e && e.length ? r.a.createElement(xu, null, r.a.createElement(hd, null, f.fbt._("Recommended Rooms", null, {
						hk: "3pJd5S"
					})), r.a.createElement(bd, null, f.fbt._("Also check out", null, {
						hk: "1DZIvy"
					}) + " ", r.a.createElement(Ge, {
						noUnderline: !0,
						target: be.c.BLANK,
						rel: be.b,
						href: "".concat(U.a.redditUrl, "/r/SubChats")
					}, "r/SubChats")), e.map((e, s) => e && r.a.createElement(Eu, {
						key: "subreddit-recommended-link-".concat(s),
						channel: e,
						isSelected: (t === zc.a.VIEW_JOIN || t === zc.a.VIEW_PRIVATE || t === zc.a.DENY) && e.channelId === a,
						subreddit: n[e.customData.subredditId]
					}))) : null
				}
			}
			var Nu = Iu(Su),
				ku = n("./src/chat/components/Sidebar/SubredditPanel/index.m.less"),
				wu = n.n(ku);
			const Tu = i.a.wrapped(ss, "Scroller", wu.a);
			var Mu = e => r.a.createElement(Tu, null, r.a.createElement(nu, {
					routeAction: e.routeAction
				}), r.a.createElement(Ou, {
					routeAction: e.routeAction
				}), r.a.createElement(Nu, {
					routeAction: e.routeAction
				})),
				Au = n("./src/chat/components/Sidebar/index.m.less"),
				Du = n.n(Au);
			const Lu = 0;
			class Uu extends c.Component {
				constructor(e) {
					super(e), this.onTabSelect = this.onTabSelect.bind(this), this.getClonedChildren = this.getClonedChildren.bind(this), this.state = {
						activeIndex: Lu
					}
				}
				onTabSelect(e) {
					this.props.onTabSelect ? this.props.onTabSelect(e) : this.setState({
						activeIndex: e
					})
				}
				getClonedChildren() {
					const {
						props: {
							children: e
						},
						onTabSelect: t
					} = this, n = this.props.activeIndex || this.state.activeIndex;
					return r.a.Children.map(e, e => r.a.cloneElement(e, {
						activeIndex: n,
						onTabSelect: t
					}))
				}
				render() {
					const {
						className: e
					} = this.props, t = this.getClonedChildren();
					return r.a.createElement("div", {
						className: e
					}, t)
				}
			}
			const Bu = e => {
				let {
					activeIndex: t,
					children: n
				} = e;
				return n && n[t || Lu]
			};
			var Ru = n("./src/chat/constants/sidebar.ts"),
				Pu = n("./src/chat/selectors/experiments.ts"),
				Hu = n("./src/chat/selectors/messages.ts"),
				Fu = n("./src/chat/selectors/promos.ts"),
				Ku = n("./src/chat/selectors/sidebar.ts");
			const Gu = i.a.div("Wrapper", Du.a),
				zu = i.a.wrapped(Uu, "Tabs", Du.a),
				Vu = i.a.wrapped(e => {
					let {
						activeIndex: t,
						children: n,
						className: a,
						onTabSelect: s
					} = e;
					return s ? r.a.createElement("div", {
						className: a
					}, r.a.Children.map(n, (e, n) => r.a.cloneElement(e, {
						active: n === t,
						onTabSelect: () => s(n)
					}))) : null
				}, "TabList", Du.a),
				Wu = i.a.wrapped(e => {
					let {
						active: t,
						children: n,
						className: a,
						onTabSelect: s
					} = e;
					return r.a.createElement("button", {
						type: "button",
						className: Object(me.a)(a, {
							[Du.a.active]: t
						}),
						onClick: s
					}, n)
				}, "Tab", Du.a),
				qu = i.a.wrapped(Al, "FirstTimeUserExpPromo", Du.a),
				Zu = Object(B.a)({
					channelId: C.x,
					displaySubredditChatFtux: Fu.c,
					sidebarActiveIndex: Ku.a,
					subredditChatEnabled: Pu.b,
					unreadCount: Hu.k
				});
			class Ju extends r.a.Component {
				shouldComponentUpdate(e) {
					return !s()(this.props, e)
				}
				render() {
					const {
						displaySubredditChatFtux: e,
						onTabSelect: t,
						routeAction: n,
						sidebarActiveIndex: a,
						subredditChatEnabled: s,
						unreadCount: c
					} = this.props, {
						subredditChannelCount: o,
						basicChannelCount: i
					} = c, l = !s || a === Ru.a.DirectChannels;
					return r.a.createElement(Gu, null, s && r.a.createElement(zu, {
						activeIndex: a,
						onTabSelect: t
					}, r.a.createElement(Vu, null, r.a.createElement(Wu, null, f.fbt._("Rooms", null, {
						hk: "uE11M"
					}), o.unread && r.a.createElement(Hr.b, null)), r.a.createElement(Wu, null, f.fbt._("Directs", null, {
						hk: "3e8PpR"
					}), i.unread && r.a.createElement(Hr.b, {
						count: i.count
					}))), r.a.createElement(Bu, null, r.a.createElement(Mu, {
						routeAction: n
					}), r.a.createElement(Ld, null))), e && r.a.createElement(qu, null), !s && r.a.createElement(Ld, null), l && r.a.createElement(Hl, null))
				}
			}
			var Qu = Object(o.b)(Zu, e => ({
					onTabSelect: t => e(Object(Cl.c)(t))
				}))(Ju),
				Yu = n("./src/chat/controls/Checkbox/DeleteAllMessages.m.less"),
				Xu = n.n(Yu);
			const $u = i.a.wrapped(mt.a, "Trash", Xu.a),
				eh = i.a.wrapped(Pi.a, "Checkbox", Xu.a),
				th = i.a.span("CheckboxText", Xu.a),
				nh = i.a.span("CheckboxItem", Xu.a),
				ah = i.a.span("CheckboxDetails", Xu.a);
			var sh = e => {
					const {
						className: t,
						onChange: n
					} = e;
					return r.a.createElement(nh, {
						className: t
					}, r.a.createElement(ah, null, r.a.createElement($u, null), r.a.createElement(th, null, f.fbt._("Remove all messages", null, {
						hk: "3JQNeR"
					}))), r.a.createElement(eh, {
						onChange: n
					}))
				},
				ch = n("./src/chat/components/OverlayBanUser/index.m.less"),
				rh = n.n(ch);
			const oh = i.a.div("Container", rh.a),
				ih = i.a.h4("Warning", rh.a),
				lh = i.a.p("Details", rh.a),
				dh = i.a.a("LinkText", rh.a),
				uh = i.a.span("CheckboxContainer", rh.a),
				hh = Object(B.a)({
					contacts: el.d,
					subredditId: C.C
				});
			class mh extends c.Component {
				constructor(e) {
					super(e), this.toggleCheckbox = () => {
						this.setState({
							deleteAllMessages: !this.state.deleteAllMessages
						})
					}, this.state = {
						deleteAllMessages: !1
					}
				}
				render() {
					const {
						channelId: e,
						confirmBanClick: t,
						contacts: n,
						subredditId: a,
						subredditName: s,
						userId: c
					} = this.props, o = Object.assign({
						userId: c,
						chatBan: !0,
						subredditId: a
					}, this.state), i = n && n[c] && n[c].name, l = Object(fe.banUserUrl)(s), d = f.fbt._("this user", null, {
						hk: "1cCwek"
					});
					return r.a.createElement(si, null, r.a.createElement(No, {
						channelId: e,
						title: f.fbt._("Confirm Ban", null, {
							hk: "41cHbm"
						})
					}), r.a.createElement(oh, null, r.a.createElement(ih, null, f.fbt._("Are you sure you want to ban {name} from chat?", [f.fbt._param("name", i || d)], {
						hk: "1LxgYV"
					})), r.a.createElement(lh, null, f.fbt._("They won't be able to send messages in any chatrooms or be invited to private chatrooms.", null, {
						hk: "3zgcvI"
					})), r.a.createElement(lh, null, f.fbt._("You can also remove all messages they've sent across all rooms or {=ban from the subreddit.}", [f.fbt._param("=ban from the subreddit.", r.a.createElement(dh, {
						href: l
					}, f.fbt._("ban from the subreddit.", null, {
						hk: "394IEZ"
					})))], {
						hk: "4Bz18u"
					})), r.a.createElement(uh, null, r.a.createElement(sh, {
						onChange: this.toggleCheckbox
					}))), r.a.createElement(ui, {
						primaryButtonText: f.fbt._("Confirm Ban", null, {
							hk: "2HCZ1N"
						}),
						primaryButtonAction: () => t(o)
					}))
				}
			}
			var bh = Object(o.b)(hh, e => ({
					confirmBanClick: t => {
						e(Object(Ni.n)(t))
					}
				}))(mh),
				ph = n("./src/chat/components/OverlayBlockUser/index.m.less"),
				gh = n.n(ph);
			const Oh = i.a.div("Container", gh.a),
				fh = i.a.p("Text", gh.a),
				jh = Object(B.a)({
					blockedUser: (e, t) => e.contacts.models[t.blockedUserId]
				});
			var Ch = Object(o.b)(jh, e => ({
					onChannelBlock: t => {
						e(Ni.o(t)), e(xe.w())
					}
				}))(e => {
					const {
						blockedUser: t,
						blockedUserId: n,
						onChannelBlock: a
					} = e, s = t ? t.name : f.fbt._("user", null, {
						hk: "3ddTpU"
					});
					return r.a.createElement(si, null, r.a.createElement(No, {
						channelId: e.channelId,
						title: f.fbt._("Block {username}", [f.fbt._param("username", s)], {
							hk: "2aTkTS"
						})
					}), r.a.createElement(Oh, null, r.a.createElement(fh, null, f.fbt._("Are you sure you want to block this user?", null, {
						hk: "31Tn9j"
					})), r.a.createElement(fh, null, f.fbt._("You will no longer see their comments, posts, and messages. They will not know that you've blocked them. You will no longer get notifications from this user.", null, {
						hk: "veMnN"
					}))), r.a.createElement(ui, {
						primaryButtonText: f.fbt._("Block", null, {
							hk: "8i5gq"
						}),
						primaryButtonAction: () => a(n)
					}))
				}),
				Eh = n("./src/lib/timeAgo/index.ts"),
				_h = n("./src/chat/controls/MediaObject/index.m.less"),
				vh = n.n(_h);
			const yh = i.a.wrapped(e => {
				const [t, n, a] = r.a.Children.toArray(e.children);
				return r.a.createElement("div", {
					className: e.className
				}, t, n, a)
			}, "MediaObject", vh.a);
			var Ih = n("./src/chat/components/OverlayChannelInvited/index.m.less"),
				xh = n.n(Ih);
			const Sh = "OverlayNavTooltip--ChatRequest",
				Nh = i.a.div("Container", xh.a),
				kh = i.a.div("TitleContainer", xh.a),
				wh = i.a.wrapped(K, "NSFWIcon", xh.a),
				Th = i.a.wrapped($, "UserPic", xh.a),
				Mh = i.a.span("WarningTextNSFW", xh.a),
				Ah = i.a.p("Text", xh.a),
				Dh = i.a.wrapped(yh, "MediaObject", xh.a),
				Lh = i.a.span("LightText", xh.a),
				Uh = i.a.wrapped(e => r.a.createElement("span", {
					className: e.className
				}, e.children), "LightTextSmall", xh.a);
			Uh.displayName = "LightTextSmall";
			const Bh = i.a.b("Warning", xh.a),
				Rh = i.a.wrapped(Na, "MessageItemBubble", xh.a),
				Ph = i.a.wrapped(e => r.a.createElement("p", {
					className: Object(me.a)(e.className, {
						[xh.a.count]: !!e.count
					})
				}, e.children), "MemberListHeader", xh.a),
				Hh = Object(B.a)({
					currentUserId: Us.a,
					channel: e => Object(C.k)(e),
					inviterContact: (e, t) => {
						const n = e.channels.models[t.channelId];
						return Object(el.e)(e, n)
					},
					channelMessages: e => Object(C.y)(e)
				}),
				Fh = Object(o.b)(Hh, e => ({
					onAcceptChannelRequest: () => {
						e(Object(xe.l)()), e(Object(p.y)())
					},
					onDeclineChannelRequest: t => {
						e(Object(pe.b)(Object(fe.channelAction)(t, zc.a.DECLINE_REQUEST)))
					},
					getPreviousMessages: g.s
				}), (e, t, n) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), n), {
					hasBlockedUsers: () => {
						const {
							channel: t
						} = e;
						return !(!t || !t.members.some(e => e.isBlockedByMe))
					}
				}));
			class Kh extends r.a.Component {
				constructor(e) {
					super(e), this.renderContent = this.renderContent.bind(this), this.renderUserInfo = this.renderUserInfo.bind(this), this.renderPreviewMessages = this.renderPreviewMessages.bind(this), this.onDeclineChannelRequest = this.onDeclineChannelRequest.bind(this)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						channel: t,
						getPreviousMessages: n
					} = this.props;
					if (t && e.channel) {
						const a = e.channel.channelId === t.channelId;
						t.type === ee.a.Direct && !t.firstMessageId && !t.fetchingFirstMessage && a && n()
					}
				}
				onDeclineChannelRequest() {
					this.props.onDeclineChannelRequest(this.props.channelId)
				}
				renderUserInfo() {
					const {
						inviterContact: e
					} = this.props;
					if (e) {
						const {
							linkKarma: t,
							created: n
						} = e, a = f.fbt._("Redditor since {amount of time}", [f.fbt._param("amount of time", Object(Eh.a)(n))], {
							hk: "37XXLN"
						}), s = f.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [f.fbt._plural(t, "karma count")], {
							hk: "4uraW2"
						});
						return r.a.createElement(Uh, null, a, " • ", s)
					}
				}
				renderPreviewMessages() {
					if (this.props.channel && this.props.channelMessages && this.props.channelMessages.length) {
						const e = m()([...this.props.channelMessages], "createdAt");
						return r.a.createElement(Nh, null, r.a.createElement(Lh, null, f.fbt._("Preview of this chat", null, {
							hk: "42xxX4"
						})), e.map(e => r.a.createElement(r.a.Fragment, {
							key: e.createdAt
						}, r.a.createElement(Rh, {
							message: e,
							inPreview: !0,
							fromCurrentUser: !1,
							fromInvite: !0,
							embedText: !0,
							withButton: !0,
							darkBackground: !0
						}))))
					}
				}
				renderBlockedUserHeader() {
					return this.props.hasBlockedUsers() && r.a.createElement(Ah, null, r.a.createElement(Bh, null, f.fbt._("Heads up: you previously blocked at least one person in this group.", null, {
						hk: "1vpXV1"
					})), f.fbt._("If you join, you'll be able to see any messages they send. They'll remain blocked on the rest of Reddit.", null, {
						hk: "1vGIVA"
					}))
				}
				renderMemberListHeader(e, t) {
					const n = e.length,
						a = t || f.fbt._("group", null, {
							hk: "1ixukL"
						});
					return r.a.createElement(Ph, {
						count: n
					}, f.fbt._({
						"*": "{number} Redditors in {channelName}",
						_1: "1 Redditor in {channelName}"
					}, [f.fbt._plural(n, "number"), f.fbt._param("channelName", a)], {
						hk: "3M9s4k"
					}))
				}
				renderMembersList() {
					const {
						channel: e,
						channelId: t,
						currentUserId: n
					} = this.props;
					if (e && e.members.length) {
						const {
							members: a,
							name: s
						} = e, c = a.filter(e => {
							let {
								id: t
							} = e;
							return t !== n
						});
						return r.a.createElement(r.a.Fragment, null, this.renderBlockedUserHeader(), this.renderMemberListHeader(c, s), r.a.createElement(Zs, {
							channelId: t,
							members: c,
							modIndicator: !1,
							useNSFWIcons: !0
						}))
					}
					return null
				}
				renderContent() {
					const {
						inviterContact: e,
						channel: t
					} = this.props, n = e && !!e.isNSFW;
					if (t && t.inviter) return r.a.createElement("div", null, r.a.createElement("a", {
						target: be.c.BLANK,
						rel: be.b,
						href: "".concat(U.a.redditUrl, "/user/").concat(t.inviter.name)
					}, r.a.createElement(Dh, null, n ? r.a.createElement(wh, null) : r.a.createElement(Th, {
						userId: t.inviter.id
					}), r.a.createElement(kh, null, r.a.createElement(Ds, {
						bold: !0
					}, t.inviter.name), n && r.a.createElement(Mh, null, f.fbt._("NSFW", null, {
						hk: "3rI4EF"
					}))), this.renderUserInfo())), r.a.createElement(Ah, null, f.fbt._("Accept their request if you'd like to continue the conversation. We won't notify them if you decline.", null, {
						hk: "1wbHBD"
					})), t && t.type === ee.a.Group ? this.renderMembersList() : this.renderPreviewMessages())
				}
				render() {
					const {
						props: {
							channel: e,
							channelId: t,
							onAcceptChannelRequest: n
						},
						onDeclineChannelRequest: a
					} = this, s = e && e.type === ee.a.Direct, c = s ? f.fbt._("Chat Request", null, {
						hk: "1sWJM0"
					}) : f.fbt._("Group invite", null, {
						hk: "JPFyz"
					});
					return r.a.createElement(si, null, r.a.createElement(No, {
						channelId: t,
						title: c,
						showMenu: s,
						dropdownId: Sh
					}), this.renderContent(), r.a.createElement(ui, {
						secondaryButtonText: f.fbt._("Decline", null, {
							hk: "3rdClY"
						}),
						secondaryButtonAction: a,
						primaryButtonText: f.fbt._("Accept", null, {
							hk: "249yqF"
						}),
						primaryButtonAction: n
					}))
				}
			}
			Kh.displayName = "OverlayChannelInvited";
			var Gh = Fh(Kh),
				zh = n("./src/chat/constants/channelRemovalReason.ts"),
				Vh = n("./src/chat/components/OverlayChannelRemoval/index.m.less"),
				Wh = n.n(Vh);
			const qh = i.a.p("SubHeader", Wh.a),
				Zh = i.a.span("Header", Wh.a),
				Jh = e => {
					switch (e) {
						case zh.a.DEFAULT:
							return f.fbt._("Removed", null, {
								hk: "3yZ2SQ"
							});
						case zh.a.BANNED:
							return f.fbt._("Banned", null, {
								hk: "45AEK1"
							});
						case zh.a.KICKED:
							return f.fbt._("Kicked", null, {
								hk: "20JwrF"
							});
						default:
							return ""
					}
				},
				Qh = Object(B.a)({
					status: (e, t) => {
						const {
							channelId: n
						} = t;
						return Object(C.q)(e, n)
					}
				});
			var Yh = Object(o.b)(Qh)(e => r.a.createElement(si, null, r.a.createElement(No, {
					channelId: e.channelId,
					title: Jh(e.status)
				}), r.a.createElement(r.a.Fragment, null, r.a.createElement(Zh, null, (e => {
					switch (e) {
						case zh.a.DEFAULT:
							return f.fbt._("You have been removed from this room.", null, {
								hk: "46tIu8"
							});
						case zh.a.BANNED:
							return f.fbt._("You are banned from this room.", null, {
								hk: "2MKZpa"
							});
						case zh.a.KICKED:
							return f.fbt._("You are temporarily kicked from this room.", null, {
								hk: "48m5JB"
							});
						default:
							return ""
					}
				})(e.status)), r.a.createElement(qh, null, (e => {
					switch (e) {
						case zh.a.DEFAULT:
							return f.fbt._("You have been removed from this room.", null, {
								hk: "46tIu8"
							});
						case zh.a.BANNED:
							return f.fbt._("You are banned from this room and may not join until you are unbanned.", null, {
								hk: "1SH7uY"
							});
						case zh.a.KICKED:
							return f.fbt._("You are temporarily kicked from this room and may not join until you are no longer kicked.", null, {
								hk: "1QQa96"
							});
						default:
							return ""
					}
				})(e.status))))),
				Xh = n("./src/chat/components/OverlayDeclineChannel/index.m.less"),
				$h = n.n(Xh);
			const em = i.a.p("Text", $h.a);
			em.displayName = "Text";
			var tm = Object(o.b)(null, e => ({
					onDeclineChannelRequest: t => {
						e(Object(xe.m)()), e(Object(p.C)(t))
					}
				}))(e => {
					let {
						channelId: t,
						onDeclineChannelRequest: n,
						subredditName: a
					} = e;
					return r.a.createElement(si, null, r.a.createElement(No, {
						channelId: t,
						title: f.fbt._("Decline invite?", null, {
							hk: "1YDLYU"
						})
					}), r.a.createElement(em, null, f.fbt._("This chat will be deleted, and this person will not be notified that you've declined their request.", null, {
						hk: "39qzrL"
					})), r.a.createElement(ui, {
						primaryButtonText: f.fbt._("Decline", null, {
							hk: "1U14k6"
						}),
						primaryButtonAction: () => n(a)
					}))
				}),
				nm = n("./src/lib/makeActionCreator/index.ts");
			const am = Object(nm.a)("OVERLAY_CLOSE");
			var sm = n("./src/chat/components/OverlayDeleteMessage/index.m.less"),
				cm = n.n(sm);
			const rm = i.a.div("Container", cm.a),
				om = i.a.p("Text", cm.a),
				im = i.a.span("CheckboxContainer", cm.a),
				lm = Object(B.a)({
					isModerator: C.a,
					message: (e, t) => e.messages.models[t.messageId],
					senderUserId: (e, t) => Object(Hu.f)(e, t.messageId),
					subredditId: C.C
				});
			class dm extends c.Component {
				constructor(e) {
					super(e), this.toggleCheckbox = () => {
						this.setState({
							deleteAllMessages: !this.state.deleteAllMessages
						})
					}, this.state = {
						deleteAllMessages: !1
					}
				}
				render() {
					const {
						deleteAllMessages: e
					} = this.state, {
						channelId: t,
						isModerator: n,
						message: a,
						onConfirmationClick: s,
						subredditId: c,
						senderUserId: o
					} = this.props, i = {
						userId: o,
						chatBan: !1,
						subredditId: c,
						deleteAllMessages: e
					};
					return r.a.createElement(si, null, r.a.createElement(No, {
						channelId: t,
						title: f.fbt._("Delete message", null, {
							hk: "1ZCVBI"
						})
					}), r.a.createElement(rm, null, r.a.createElement(om, null, f.fbt._("Are you sure you want to delete this message?", null, {
						hk: "3cAxYZ"
					}), r.a.createElement("br", null), f.fbt._("You can't undo this.", null, {
						hk: "4ockoK"
					})), a && r.a.createElement(Na, {
						message: a,
						fromCurrentUser: !0,
						fromInvite: !1,
						darkBackground: !0,
						withButton: !1,
						embedText: !0
					}), n && r.a.createElement(im, null, r.a.createElement(sh, {
						onChange: this.toggleCheckbox
					}))), r.a.createElement(ui, {
						primaryButtonText: f.fbt._("Delete", null, {
							hk: "vtGdC"
						}),
						primaryButtonAction: () => s(i)
					}))
				}
			}
			var um = Object(o.b)(lm, (e, t) => ({
					onConfirmationClick: n => ((e, t, n) => {
						e.deleteAllMessages ? t(Object(Ni.n)(e)) : (t(Object(g.q)(n)), t(Object(xe.r)()))
					})(n, e, t.messageId),
					onCancel: () => e(am())
				}))(dm),
				hm = n("./src/chat/components/OverlayDirectsEmptyState/index.m.less"),
				mm = n.n(hm);
			const bm = i.a.div("OverlayContent", mm.a),
				pm = i.a.img("Image", mm.a),
				gm = i.a.div("Info", mm.a),
				Om = i.a.h4("Header", mm.a),
				fm = i.a.p("Text", mm.a);
			var jm = Object(o.b)(null, e => ({
					onCreateMessage: () => e(Object(pe.b)(Object(fe.channelUrl)("create")))
				}))(e => r.a.createElement(si, {
					innerContent: !0
				}, r.a.createElement(No, {
					title: f.fbt._("Start chatting", null, {
						hk: "3B5dRm"
					})
				}), r.a.createElement(bm, null, r.a.createElement(pm, {
					src: "".concat(U.a.assetPath, "/img/chat/empty-hero.png")
				}), r.a.createElement(gm, null, r.a.createElement(Om, null, f.fbt._("Start a direct chat", null, {
					hk: "4qVzlj"
				})), r.a.createElement(fm, null, f.fbt._("You can start a new direct chat with the button below or from someone's profile", null, {
					hk: "3wS0vs"
				})))), r.a.createElement(ui, {
					primaryButtonText: f.fbt._("New Chat", null, {
						hk: "33WSw"
					}),
					primaryButtonAction: e.onCreateMessage,
					primaryButtonOnly: !0
				}))),
				Cm = n("./src/chat/components/OverlayJoinChannel/index.m.less"),
				Em = n.n(Cm);
			const _m = "OverlayNavTooltip--JoinSubredditChannel",
				vm = i.a.div("Wrapper", Em.a),
				ym = i.a.h4("Title", Em.a),
				Im = i.a.p("Desc", Em.a),
				xm = i.a.span("Warning", Em.a),
				Sm = Object(B.a)({
					channel: (e, t) => {
						let {
							channelId: n
						} = t;
						return Object(Do.d)(e, n)
					},
					subreddit: (e, t) => {
						let {
							channelId: n
						} = t;
						return Object(Do.c)(e, n)
					}
				});
			class Nm extends r.a.Component {
				constructor(e) {
					super(e), this.renderContent = this.renderContent.bind(this), this.state = {
						isSubmitDisabled: !1
					}
				}
				disableSubmit() {
					this.setState({
						isSubmitDisabled: !0
					})
				}
				renderContent() {
					const {
						channel: e,
						subreddit: t
					} = this.props;
					if (e && t) return r.a.createElement(vm, null, r.a.createElement(Qd, {
						isPublic: e.isPublic,
						channelName: e.name,
						subredditName: t.name,
						subredditIconUrl: t.iconImg
					}), e.customData.description && r.a.createElement(r.a.Fragment, null, r.a.createElement(ym, null, f.fbt._("Description", null, {
						hk: "1RyehZ"
					})), r.a.createElement(Im, null, e.customData.description)), t.nsfw && r.a.createElement(r.a.Fragment, null, r.a.createElement(ym, null, f.fbt._("NSFW Community", null, {
						hk: "3hPGRs"
					})), r.a.createElement(Im, null, f.fbt._("{=Heads up: this community is labeled not safe for work.} It may contain explicit or adult content.", [f.fbt._param("=Heads up: this community is labeled not safe for work.", r.a.createElement(xm, null, f.fbt._("Heads up: this community is labeled not safe for work.", null, {
						hk: "2f5VCb"
					})))], {
						hk: "1yjANJ"
					}))))
				}
				render() {
					const {
						channel: e,
						channelId: t,
						subreddit: n
					} = this.props, {
						isSubmitDisabled: a
					} = this.state;
					if (e && n) {
						const {
							memberCount: s
						} = e, c = f.fbt._({
							"*": "{number} Members",
							_1: "1 Member"
						}, [f.fbt._plural(s, "number")], {
							hk: "2sN8W7"
						});
						return r.a.createElement(si, null, r.a.createElement(No, {
							channelId: t,
							title: f.fbt._("Room Details", null, {
								hk: "eVFma"
							}),
							subTitle: c,
							showMenu: !1,
							dropdownId: _m
						}), this.renderContent(), r.a.createElement(ui, {
							primaryButtonText: f.fbt._("Join Room", null, {
								hk: "xd6cn"
							}),
							primaryButtonAction: () => {
								this.props.onJoinSubredditChannel(t, n.name), this.disableSubmit()
							},
							primaryButtonOnly: !0,
							primaryButtonDisabled: a
						}))
					}
					return null
				}
			}
			var km = Object(o.b)(Sm, e => ({
					onJoinSubredditChannel: (t, n) => e(Object(Da.t)(t, n))
				}))(Nm),
				wm = n("./src/chat/routes/chat.ts"),
				Tm = n("./src/chat/components/OverlayKickUser/index.m.less"),
				Mm = n.n(Tm);
			const Am = "kickUser",
				Dm = i.a.p("SubHeader", Mm.a),
				Lm = i.a.span("Title", Mm.a),
				Um = i.a.span("Header", Mm.a),
				Bm = i.a.wrapped(Pi.a, "Checkbox", Mm.a),
				Rm = i.a.div("ListItem", Mm.a),
				Pm = i.a.div("OverlayContent", Mm.a);
			var Hm;
			! function(e) {
				e[e.TenMins = 600] = "TenMins", e[e.OneHour = 3600] = "OneHour", e[e.OneDay = 86400] = "OneDay", e[e.ThreeDays = 259200] = "ThreeDays", e[e.Permanently = -1] = "Permanently"
			}(Hm || (Hm = {}));
			const Fm = () => ({
					[Hm.TenMins]: f.fbt._("10 minutes", null, {
						hk: "3y8skZ"
					}),
					[Hm.OneHour]: f.fbt._("1 hour", null, {
						hk: "mgKhy"
					}),
					[Hm.OneDay]: f.fbt._("1 day", null, {
						hk: "37HQV9"
					}),
					[Hm.ThreeDays]: f.fbt._("3 days", null, {
						hk: "2R7GCT"
					}),
					[Hm.Permanently]: f.fbt._("Permanently", null, {
						hk: "2CHcpm"
					})
				}),
				Km = Object(B.a)({
					message: (e, t) => t.attr === wm.a.Message ? e.messages.models[t.attrId] : void 0,
					user: (e, t) => t.attr === wm.a.User ? e.contacts.models[t.attrId] : void 0
				});
			class Gm extends c.Component {
				constructor(e) {
					super(e), this.onSubmit = e => {
						const {
							attrId: t,
							channelId: n,
							onKickUser: a
						} = this.props;
						e.target[Am].forEach(e => {
							let {
								checked: s,
								value: c
							} = e;
							if (s) {
								const e = Number(c);
								a(n, t, e)
							}
						})
					}, this.renderIntro = this.renderIntro.bind(this)
				}
				renderIntro() {
					const {
						message: e,
						user: t
					} = this.props, n = e && e.sender ? e.sender.nickname : t ? "u/" + t.name : "this user";
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(Um, null, f.fbt._("Are you sure you want to kick {username} from this room?", [f.fbt._param("username", n)], {
						hk: "n1L3B"
					})), r.a.createElement(Dm, null, f.fbt._("They'll be able to join again once the kick duration is over.", null, {
						hk: "4zi1U1"
					})))
				}
				render() {
					const e = Fm(),
						{
							channelId: t
						} = this.props;
					return r.a.createElement(si, {
						onSubmit: Object(mn.a)(this.onSubmit),
						form: !0,
						innerContent: !0
					}, r.a.createElement(No, {
						channelId: t,
						title: f.fbt._("Confirm Kick", null, {
							hk: "1upcSi"
						})
					}), r.a.createElement(Pm, null, r.a.createElement(ss, null, this.renderIntro(), r.a.createElement(Lm, null, f.fbt._("Kick Duration", null, {
						hk: "4nENS8"
					})), Object.keys(e).map(t => r.a.createElement(Rm, {
						key: t
					}, r.a.createElement(Bm, {
						type: "radio",
						name: Am,
						value: t
					}, e[t]))))), r.a.createElement(ui, {
						primaryButtonText: f.fbt._("Kick", null, {
							hk: "10O2jX"
						}),
						secondaryButtonText: f.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})
					}))
				}
			}
			var zm = Object(o.b)(Km, e => ({
					onKickUser: (t, n, a) => {
						e(Object(Ni.q)(t, n, a)), e(Object(xe.t)(a))
					}
				}))(Gm),
				Vm = n("./src/chat/components/OverlayLeaveChannel/index.m.less"),
				Wm = n.n(Vm);
			const qm = i.a.div("Container", Wm.a),
				Zm = i.a.p("Text", Wm.a),
				Jm = i.a.wrapped(Zm, "TextBold", Wm.a);
			var Qm = Object(o.b)(void 0, e => ({
					onChannelLeave: (t, n) => {
						e(Object(xe.o)()), e(Object(p.I)(t, n))
					}
				}))(e => {
					const {
						channelId: t,
						onChannelLeave: n,
						subredditName: a
					} = e;
					return r.a.createElement(si, null, r.a.createElement(No, {
						channelId: t,
						title: f.fbt._("Are you sure", null, {
							hk: "4fJTRG"
						})
					}), r.a.createElement(qm, null, r.a.createElement(Jm, null, a ? f.fbt._("Leave Room?", null, {
						hk: "4xjqwe"
					}) : f.fbt._("Leave group chat?", null, {
						hk: "vEsVO"
					})), r.a.createElement(Zm, null, a ? f.fbt._("You will be removed from the room and no longer receive new messages.", null, {
						hk: "13cSxL"
					}) : f.fbt._("You will be removed from the group and no longer receive new messages. You will not be able to join this group again unless you receive another invite.", null, {
						hk: "3oISyF"
					}))), r.a.createElement(ui, {
						primaryButtonText: f.fbt._("Leave", null, {
							hk: "1s8gFw"
						}),
						primaryButtonAction: () => n(t, a)
					}))
				}),
				Ym = n("./src/chat/components/OverlayLockChannel/index.m.less"),
				Xm = n.n(Ym);
			const $m = i.a.div("Container", Xm.a),
				eb = i.a.p("Text", Xm.a),
				tb = i.a.wrapped(eb, "TextBold", Xm.a),
				nb = Object(B.a)({
					channel: e => Object(C.m)(e)
				});
			class ab extends r.a.Component {
				constructor(e) {
					super(e), this.toggleSubmitButton = this.toggleSubmitButton.bind(this), this.onLockChannel = this.onLockChannel.bind(this), this.state = {
						isSubmitDisabled: !1
					}
				}
				toggleSubmitButton(e) {
					this.setState({
						isSubmitDisabled: e
					})
				}
				onLockChannel() {
					this.toggleSubmitButton(!0), this.props.onLockChannel().catch(() => {
						this.toggleSubmitButton(!1)
					})
				}
				isLockingComplete() {
					const {
						channel: e,
						channelId: t,
						goBackToChannel: n,
						subredditName: a
					} = this.props;
					if (e && e.isFrozen) return n(t, a)
				}
				componentDidUpdate() {
					this.isLockingComplete()
				}
				render() {
					const {
						channelId: e,
						subredditName: t
					} = this.props, {
						isSubmitDisabled: n
					} = this.state;
					return r.a.createElement(si, null, r.a.createElement(No, {
						channelId: e,
						title: f.fbt._("Are you sure", null, {
							hk: "Kzqon"
						})
					}), r.a.createElement($m, null, t && r.a.createElement(r.a.Fragment, null, r.a.createElement(tb, null, f.fbt._("Lock Room?", null, {
						hk: "3eUK70"
					})), r.a.createElement(eb, null, f.fbt._("No one in this room will be able to send messages in while it is locked.", null, {
						hk: "2l4QGl"
					})))), r.a.createElement(ui, {
						primaryButtonText: f.fbt._("Lock", null, {
							hk: "2pox6m"
						}),
						primaryButtonAction: this.onLockChannel,
						primaryButtonDisabled: n
					}))
				}
			}
			var sb = Object(o.b)(nb, e => ({
					onLockChannel: () => e(Object(Da.v)(!0, !0)),
					goBackToChannel: (t, n) => e(Object(pe.b)(Object(fe.channelUrl)(t, n)))
				}))(ab),
				cb = n("./src/chat/models/Promo/index.ts"),
				rb = n("./src/chat/components/OverlayNSFWWarning/index.m.less"),
				ob = n.n(rb);
			const ib = i.a.div("Container", ob.a),
				lb = i.a.p("Text", ob.a);
			var db = Object(o.b)(null, e => ({
					onAccept: () => {
						e(Object(l.d)(cb.b.NSFWWarning)), e(Object(p.y)())
					}
				}))(e => r.a.createElement(si, null, r.a.createElement(No, {
					channelId: e.channelId,
					title: f.fbt._("NSFW User", null, {
						hk: "3W2Bw2"
					})
				}), r.a.createElement(ib, null, r.a.createElement(lb, null, f.fbt._("One or more users in this chat are marked as NSFW (not safe for work), which means they tend to post explicit content elsewhere on Reddit. This doesn't necessarily mean that the content of this chat is explicit.", null, {
					hk: "4cRpQH"
				}))), r.a.createElement(ui, {
					primaryButtonText: f.fbt._("Accept", null, {
						hk: "2ILlth"
					}),
					primaryButtonAction: e.onAccept
				}))),
				ub = n("./src/chat/components/OverlayPrivateChannel/index.m.less"),
				hb = n.n(ub);
			const mb = i.a.div("OverlayContent", hb.a),
				bb = i.a.p("Description", hb.a),
				pb = i.a.div("Wrapper", hb.a),
				gb = i.a.img("Image", hb.a),
				Ob = i.a.h3("Title", hb.a),
				fb = Object(B.a)({
					channel: e => Object(C.k)(e),
					subreddits: e => Object(Do.e)(e)
				});
			class jb extends r.a.Component {
				getSubreddit() {
					const {
						channel: e,
						subreddits: t
					} = this.props;
					return e && t[e.customData.subredditId]
				}
				render() {
					const {
						channel: e,
						channelId: t
					} = this.props, n = this.getSubreddit();
					if (e && n) {
						const {
							memberCount: a
						} = e, s = f.fbt._({
							"*": "{number} Members",
							_1: "1 Member"
						}, [f.fbt._plural(a, "number")], {
							hk: "1R5VgJ"
						});
						return r.a.createElement(si, {
							innerContent: !0
						}, r.a.createElement(No, {
							channelId: t,
							title: f.fbt._("Room Details", null, {
								hk: "3NZsfb"
							}),
							subTitle: e && s,
							showMenu: !1
						}), r.a.createElement(mb, null, r.a.createElement(pb, null, r.a.createElement(gb, {
							src: "".concat(U.a.assetPath, "/img/content-gate-icons/private.png")
						}), r.a.createElement(Ob, null, f.fbt._("{subreddit name} is a private community", [f.fbt._param("subreddit name", "r/".concat(n.name))], {
							hk: "5QRxu"
						})), r.a.createElement(bb, null, f.fbt._("The moderators in this community have set it to private. You must be a moderator or approved user to join this room.", null, {
							hk: "1RNUxL"
						})))))
					}
					return null
				}
			}
			var Cb = Object(o.b)(fb)(jb),
				Eb = n("./src/chat/endpoints/users/index.ts"),
				_b = n("./src/chat/models/Message/report.ts");
			var vb = n("./src/higherOrderComponents/makeAsync.tsx"),
				yb = n("./src/lib/loadWithRetries/index.ts");
			const Ib = () => null;
			var xb = Object(vb.a)({
				ErrorComponent: Ib,
				getComponent: () => Object(yb.a)(() => n.e("ChatReportFlow").then(n.bind(null, "./src/chat/components/ReportFlow/index.tsx"))).then(e => e.default),
				LoadingComponent: Ib
			});
			const Sb = "reportReason";
			var Nb;
			! function(e) {
				e.Threats = "threats", e.Violence = "violence", e.Personal = "personal", e.Impersonation = "impersonation", e.MinorSexualization = "minorSexualization"
			}(Nb || (Nb = {}));
			var kb = n("./src/chat/models/ReportFlow/index.ts"),
				wb = n("./src/chat/components/OverlayReport/index.m.less"),
				Tb = n.n(wb);
			const Mb = i.a.wrapped(Pi.a, "Checkbox", Tb.a),
				Ab = i.a.div("ListItem", Tb.a),
				Db = Object(B.a)({
					user: (e, t) => t.attr === wm.a.User ? e.contacts.models[t.attrId] : void 0,
					message: (e, t) => t.attr === wm.a.Invite || t.attr === wm.a.Message ? Object(Hu.c)(e, Number(t.attrId)) : void 0,
					messageList: e => Object(C.B)(e),
					currentUserId: (e, t) => Object(Us.a)(e)
				});
			class Lb extends c.Component {
				constructor(e) {
					super(e), this.selectReason = e => this.setState({
						selectedReason: e
					}), this.isMessageReportFlow = () => this.props.attr === wm.a.Invite || this.props.attr === wm.a.Message, this.isSubmitDisabled = () => !this.state.selectedReason, this.isCTLControls = () => this.state.currentFlow === kb.a.CrisisTextLine && !this.state.ctlSubmitted, this.isSingleButton = () => this.state.currentFlow === kb.a.CrisisTextLine && !0 === this.state.ctlSubmitted || this.state.currentFlow === kb.a.BlockUser || this.state.currentFlow === kb.a.FileComplaint, this.nextReportFlow = () => {
						const {
							selectedReason: e
						} = this.state, t = e && e.requestCrisisSupport ? kb.a.CrisisTextLine : e && e.fileComplaint ? kb.a.FileComplaint : kb.a.BlockUser;
						this.setState({
							currentFlow: t
						})
					}, this.getMessageReportFlow = () => {
						const {
							message: e
						} = this.props;
						if (e && e.sender) return r.a.createElement(xb, {
							onRuleChange: e => this.selectReason(e),
							currentFlow: this.state.currentFlow,
							blockedUserId: e.sender.userId,
							blockedUserName: e.sender.nickname,
							ctlSubmitted: this.state.ctlSubmitted
						})
					}, this.getReportReasonText = e => {
						switch (e) {
							case Nb.Threats:
								return f.fbt._("Threatens, harrasses, or bullies", null, {
									hk: "9lzw2"
								});
							case Nb.Violence:
								return f.fbt._("It threatens violence or physical harm", null, {
									hk: "2LziPg"
								});
							case Nb.Personal:
								return f.fbt._("It's personal and confidential information", null, {
									hk: "2w0qDN"
								});
							case Nb.Impersonation:
								return f.fbt._("Impersonation", null, {
									hk: "2dg9bu"
								});
							case Nb.MinorSexualization:
								return f.fbt._("It's sexual or suggestive content involving minors", null, {
									hk: "Ofq3r"
								})
						}
					}, this.getUserReportFlow = () => u()(Nb, e => {
						const t = this.getReportReasonText(e);
						return r.a.createElement(Ab, {
							key: t
						}, r.a.createElement(Mb, {
							type: "radio",
							value: t,
							name: Sb,
							onChange: e => this.selectReason({
								reasonText: e.target.value
							})
						}, t))
					}), this.onSubmit = () => {
						const {
							selectedReason: e
						} = this.state, {
							onReportUser: t,
							user: n
						} = this.props;
						e && e.reasonText && (this.isMessageReportFlow() ? this.onMessageSubmit() : n && t(e.reasonText, n))
					}, this.onMessageSubmit = () => {
						const {
							message: e,
							messageList: t,
							onReportMessage: n
						} = this.props, {
							currentFlow: a,
							selectedReason: s
						} = this.state;
						if (s && s.requestCrisisSupport && e && e.messageType === ge.d.USER) return a === kb.a.CrisisTextLine ? (n(s.reasonText, e, t), this.setState({
							ctlSubmitted: !0
						})) : this.nextReportFlow();
						s && s.reasonText && e && e.messageType === ge.d.USER && (n(s.reasonText, e, t), this.nextReportFlow())
					}, this.state = {
						selectedReason: void 0,
						currentFlow: this.props.attr === wm.a.Invite ? kb.a.Invite : kb.a.Default,
						ctlSubmitted: !1
					}
				}
				render() {
					const {
						channelId: e,
						message: t,
						user: n
					} = this.props;
					return r.a.createElement(si, {
						onSubmit: Object(mn.a)(this.onSubmit),
						form: !0
					}, r.a.createElement(No, {
						channelId: e,
						title: f.fbt._("Reason for report", null, {
							hk: "EqHEf"
						})
					}), r.a.createElement(as, null, this.isMessageReportFlow() ? t && this.getMessageReportFlow() : n && this.getUserReportFlow()), r.a.createElement(ui, {
						primaryButtonText: this.isCTLControls() ? f.fbt._("Yes", null, {
							hk: "1nxheD"
						}) : f.fbt._("Submit", null, {
							hk: "2Iwjdv"
						}),
						primaryButtonDisabled: this.isSubmitDisabled(),
						secondaryButtonOnly: this.isSingleButton(),
						secondaryButtonCTLOptions: this.isCTLControls(),
						secondaryButtonText: this.isSingleButton() ? f.fbt._("Close", null, {
							hk: "4gbyAA"
						}) : f.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})
					}))
				}
			}
			var Ub = Object(o.b)(Db, e => ({
					onReportUser: (t, n) => {
						e(Object(xe.x)(n.id)), e((e => async (t, n, a) => {
							let {
								apiContext: s
							} = a;
							const {
								user: c,
								reason: r
							} = e, o = {
								reason: r,
								userNickname: c.name
							};
							await Object(Eb.a)(s(), o)
						})({
							user: n,
							reason: t
						})).then(() => e(Object(pe.a)()))
					},
					onReportMessage: (t, n, a) => {
						e(Object(xe.z)(n.messageId, t)), e(((e, t, n) => async (a, s, c) => {
							let {
								apiContext: r
							} = c;
							const o = Object(_b.a)(e, t),
								i = Object(_b.b)(e, t, n);
							o && await Object(Eb.b)(r(), o, i)
						})(t, n, a))
					}
				}))(Lb),
				Bb = n("./src/chat/components/OverlaySubredditChatRequest/index.m.less"),
				Rb = n.n(Bb);
			const Pb = i.a.wrapped(Qd, "SubredditHeader", Rb.a),
				Hb = i.a.h4("Title", Rb.a),
				Fb = i.a.p("Text", Rb.a),
				Kb = Object(B.a)({
					currentUserId: Us.a,
					subredditChannel: e => Object(C.k)(e),
					subreddit: e => Object(Do.b)(e)
				});
			class Gb extends r.a.Component {
				constructor(e) {
					super(e), this.renderContent = this.renderContent.bind(this), this.onDeclineChannelRequest = this.onDeclineChannelRequest.bind(this)
				}
				onDeclineChannelRequest() {
					this.props.onDeclineChannelRequest(this.props.channelId, this.props.subredditName)
				}
				renderChatDescription() {
					const {
						subredditChannel: e
					} = this.props;
					if (e && e.type === ee.a.Subreddit) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Hb, null, f.fbt._("Description", null, {
						hk: "EsHcE"
					})), r.a.createElement(Fb, null, e.customData.description))
				}
				renderMembersList() {
					const {
						subredditChannel: e,
						channelId: t,
						currentUserId: n
					} = this.props;
					if (e && e.memberCount) {
						const {
							members: a
						} = e, s = a.filter(e => {
							let {
								id: t
							} = e;
							return t !== n
						});
						return r.a.createElement(r.a.Fragment, null, r.a.createElement(Hb, null, f.fbt._("Members", null, {
							hk: "2IDokz"
						})), r.a.createElement(Zs, {
							channelId: t,
							members: s,
							modIndicator: !1,
							useNSFWIcons: !0
						}))
					}
					return null
				}
				renderContent() {
					const {
						subredditChannel: e,
						subreddit: t
					} = this.props, n = t && t.nsfw;
					if (t && e) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Pb, {
						channelName: e.name,
						subredditName: t.name,
						subredditIconUrl: t.iconImg,
						isNSFW: n,
						isPublic: e.isPublic
					}), this.renderChatDescription(), this.renderMembersList())
				}
				render() {
					const {
						props: {
							onAcceptSubredditChannelRequest: e,
							subredditChannel: t,
							channelId: n,
							subredditName: a
						},
						onDeclineChannelRequest: s
					} = this, c = t && t.memberCount, o = f.fbt._({
						"*": "{number} Members",
						_1: "1 Member"
					}, [f.fbt._plural(c || 0, "number")], {
						hk: "2sN8W7"
					});
					return r.a.createElement(si, null, r.a.createElement(No, {
						channelId: n,
						title: f.fbt._("Room Details", null, {
							hk: "3nxwrj"
						}),
						subTitle: o
					}), r.a.createElement("div", null, this.renderContent()), r.a.createElement(ui, {
						secondaryButtonText: f.fbt._("Decline", null, {
							hk: "27vIjr"
						}),
						secondaryButtonAction: s,
						primaryButtonText: f.fbt._("Accept", null, {
							hk: "2ogEDT"
						}),
						primaryButtonAction: () => e(n, a)
					}))
				}
			}
			var zb = Object(o.b)(Kb, e => ({
				onAcceptSubredditChannelRequest: (t, n) => {
					e(Object(xe.l)()), e(Object(Da.n)(t, n))
				},
				onDeclineChannelRequest: (t, n) => {
					e(Object(pe.b)(Object(fe.channelAction)(t, zc.a.DECLINE_REQUEST, n)))
				}
			}))(Gb);
			const Vb = e => e.channelId || e.subredditName ? e.subredditName && e.action === zc.a.VIEW_JOIN && e.channelId ? r.a.createElement(km, {
				channelId: e.channelId,
				subredditName: e.subredditName
			}) : e.subredditName && e.action === zc.a.VIEW_INVITE && e.channelId ? r.a.createElement(zb, {
				channelId: e.channelId,
				subredditName: e.subredditName
			}) : e.action === zc.a.VIEW_INVITE && e.channelId ? r.a.createElement(Gh, {
				channelId: e.channelId
			}) : e.action === zc.a.VIEW_MEMBERS && e.channelId ? r.a.createElement(yi, {
				channelId: e.channelId
			}) : e.action === zc.a.LEAVE && e.channelId ? r.a.createElement(Qm, {
				channelId: e.channelId,
				subredditName: e.subredditName
			}) : e.action === zc.a.LOCK_CHANNEL_CONFIRMATION && e.channelId ? r.a.createElement(sb, {
				channelId: e.channelId,
				subredditName: e.subredditName
			}) : e.action === zc.a.VIEW_NSFW_CONFIRMATION && e.channelId ? r.a.createElement(db, {
				channelId: e.channelId
			}) : e.action === zc.a.DECLINE_REQUEST && e.channelId ? r.a.createElement(tm, {
				channelId: e.channelId,
				subredditName: e.subredditName
			}) : e.channelId && e.action === ue.Ban && e.subredditName && e.attrId ? r.a.createElement(bh, {
				channelId: e.channelId,
				subredditName: e.subredditName,
				userId: e.attrId
			}) : e.action === ue.Block && e.attrId && e.channelId ? r.a.createElement(Ch, {
				channelId: e.channelId,
				blockedUserId: e.attrId,
				subredditName: e.subredditName
			}) : e.action === ge.a.DELETE && e.channelId && e.attrId ? r.a.createElement(um, {
				channelId: e.channelId,
				messageId: parseInt(e.attrId)
			}) : e.action === ge.a.REPORT && e.attr && e.attrId && e.channelId ? r.a.createElement(Ub, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : e.action === ue.Kick && e.attr && e.attrId && e.channelId ? r.a.createElement(zm, {
				channelId: e.channelId,
				attr: e.attr,
				attrId: e.attrId
			}) : e.action === zc.a.VIEW_PRIVATE && e.channelId ? r.a.createElement(Cb, {
				channelId: e.channelId,
				subredditName: e.subredditName
			}) : e.action === zc.a.DENY && e.channelId ? r.a.createElement(Yh, {
				channelId: e.channelId
			}) : void 0 : r.a.createElement(jm, null);
			var Wb = n("./src/chat/components/FrameContent/index.m.less"),
				qb = n.n(Wb);
			const Zb = qb.a.Main,
				Jb = Object(B.a)({
					channel: e => Object(C.l)(e),
					container: e => e && e.container && e.container.size,
					isUserAccountEmpty: e => !e.user.account
				}),
				Qb = Object(o.b)(Jb, e => ({
					setInternalPromos: () => e(Object(l.e)())
				})),
				Yb = i.a.main("Main", qb.a),
				Xb = i.a.div("Content", qb.a),
				$b = i.a.div("Modal", qb.a);
			class ep extends r.a.Component {
				componentDidMount() {
					this.props.setInternalPromos()
				}
				shouldComponentUpdate(e, t) {
					return !s()(this.props, e) || !s()(this.state, t)
				}
				getContent() {
					const {
						channel: e,
						container: t,
						isUserAccountEmpty: n
					} = this.props, {
						action: a,
						channelId: s
					} = this.props.match.params;
					switch (!0) {
						case n:
							return null;
						case a === zc.a.VIEW_MEMBERS:
							return s && r.a.createElement(yi, {
								channelId: s
							});
						case a === zc.a.CREATE:
						case a === zc.a.INVITE_MEMBERS:
							return r.a.createElement(jl, null);
						case t === cs.a.MINIMIZED:
							return r.a.createElement($o.a, null);
						default: {
							const t = Vb(this.props.match.params);
							return r.a.createElement(r.a.Fragment, null, r.a.createElement(Qu, {
								routeAction: a
							}), r.a.createElement(Xb, null, t ? r.a.createElement($b, null, t) : e && s && r.a.createElement(Xo, {
								channelId: s,
								channel: e
							})))
						}
					}
				}
				render() {
					return r.a.createElement(Yb, {
						id: rs.a
					}, this.getContent())
				}
			}
			t.b = Qb(ep)
		},
		"./src/chat/components/Intro/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_1dxQZlhErc-I-blSStMR5f",
				wrapper: "_1dxQZlhErc-I-blSStMR5f",
				SubredditName: "_3Kv3jqbxFImYySH3DSpC5o",
				subredditName: "_3Kv3jqbxFImYySH3DSpC5o",
				ChannelName: "_2htqlRdkdf14bGHN8tjChC",
				channelName: "_2htqlRdkdf14bGHN8tjChC",
				ChannelDescription: "_3MNba8--t1UBx-AdDlI7-M",
				channelDescription: "_3MNba8--t1UBx-AdDlI7-M",
				Users: "_3bsj7mNSaueYuWuWvZFWKW",
				users: "_3bsj7mNSaueYuWuWvZFWKW",
				User: "_19wIp0aPDGDq60b_dkaA-l",
				user: "_19wIp0aPDGDq60b_dkaA-l",
				UserTitle: "_2MAeUeEw0C9eRjZ5ETlKtA",
				userTitle: "_2MAeUeEw0C9eRjZ5ETlKtA"
			}
		},
		"./src/chat/components/MemberActionDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3PtM_OV6__gZxG1pYTrSvV",
				wrapper: "_3PtM_OV6__gZxG1pYTrSvV",
				active: "vsh8XY7piOUkVO7Dpne-c",
				Component: "siQdu9tlWQtPG_X76vdUv",
				component: "siQdu9tlWQtPG_X76vdUv",
				DropdownRow: "Rk39fDehaLfWZULtyXGyD",
				dropdownRow: "Rk39fDehaLfWZULtyXGyD",
				IconButton: "_2ZCSEIUbXFLRFwa3VeJF8h",
				iconButton: "_2ZCSEIUbXFLRFwa3VeJF8h"
			}
		},
		"./src/chat/components/Message/ActionButtonGroup.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3XbiiumtyFt3sE7RwhZepo",
				wrapper: "_3XbiiumtyFt3sE7RwhZepo",
				ActionButton: "_1y_b1drkqSJBFVthfMESWB",
				actionButton: "_1y_b1drkqSJBFVthfMESWB"
			}
		},
		"./src/chat/components/Message/Bubble.m.less": function(e, t, n) {
			e.exports = {
				ActionButtonGroup: "_21AjIPw12tUSwZ-OuirupT",
				actionButtonGroup: "_21AjIPw12tUSwZ-OuirupT",
				MessageBubble: "_1nAhIjgz7pfSX4_5eYD8-T",
				messageBubble: "_1nAhIjgz7pfSX4_5eYD8-T",
				disabled: "_1wNcvJbWLV0ZNzE0xAGErH",
				withBorder: "_3ey3bKaKuSVt2EZD-7y5ng",
				dark: "_1bCd4DBKF0Osr6neFkpLF3",
				MessageText: "_1q32G7u8aTwBaLUSN_06Cl",
				messageText: "_1q32G7u8aTwBaLUSN_06Cl",
				Snoo: "GrZzft2XLFp0NKhLfZaMc",
				snoo: "GrZzft2XLFp0NKhLfZaMc",
				MessageItemBubble: "_19iAGNPVtW4H4cmtpESqQs",
				messageItemBubble: "_19iAGNPVtW4H4cmtpESqQs"
			}
		},
		"./src/chat/components/Message/CollapsedMessage.m.less": function(e, t, n) {
			e.exports = {
				CollapsedMessage: "_2kJ76RCn75GfIw3OboXjVf",
				collapsedMessage: "_2kJ76RCn75GfIw3OboXjVf"
			}
		},
		"./src/chat/components/Message/FailedMenu.m.less": function(e, t, n) {
			e.exports = {
				ButtonControls: "_1lET98C95RTxCsjGofopjF",
				buttonControls: "_1lET98C95RTxCsjGofopjF",
				Button: "Rti1O-QF7eeL7NwtWdIx6",
				button: "Rti1O-QF7eeL7NwtWdIx6",
				Text: "_1JyKY8zLHmCkHuVzN4Z5kf",
				text: "_1JyKY8zLHmCkHuVzN4Z5kf"
			}
		},
		"./src/chat/components/Message/Link.m.less": function(e, t, n) {
			e.exports = {
				Link: "f-H4y4OBMWm-zTJesHDLp",
				link: "f-H4y4OBMWm-zTJesHDLp",
				noUnderline: "_2QNuJ1cZnZdkjTqG4TqJUL",
				LinkedText: "_3p-OO8ZLuqNd4RSZ8rkwyk",
				linkedText: "_3p-OO8ZLuqNd4RSZ8rkwyk",
				NameWrapper: "_1Hq0IdlCxGSl9C3f7ukKGL",
				nameWrapper: "_1Hq0IdlCxGSl9C3f7ukKGL",
				Favicon: "_35f8GbipRuaLxttOX_IKrM",
				favicon: "_35f8GbipRuaLxttOX_IKrM",
				Name: "BHEv75NDp3QRXCKiVNrDz",
				name: "BHEv75NDp3QRXCKiVNrDz",
				DetailsWrapper: "_39kO_VUpEOe8XhQf3VjyBZ",
				detailsWrapper: "_39kO_VUpEOe8XhQf3VjyBZ",
				Title: "_2s5D_Edw2hyJFbL47FPwxD",
				title: "_2s5D_Edw2hyJFbL47FPwxD",
				Description: "_3uSavIlsKFRyGduozas6CT",
				description: "_3uSavIlsKFRyGduozas6CT",
				Thumbnail: "_43ndcqW0zpQdGgVg1dbRi",
				thumbnail: "_43ndcqW0zpQdGgVg1dbRi"
			}
		},
		"./src/chat/components/Message/LinkedText.m.less": function(e, t, n) {
			e.exports = {
				MessageText: "_3Gy8WZD53wWAE41lr57by3",
				messageText: "_3Gy8WZD53wWAE41lr57by3"
			}
		},
		"./src/chat/components/Message/OffensiveMessageReportPrompt.m.less": function(e, t, n) {
			e.exports = {
				OffensiveMessageReport: "_2b8jsRfsHQLvU5JXHABgW3",
				offensiveMessageReport: "_2b8jsRfsHQLvU5JXHABgW3",
				Active: "_276IwTNTCP-a5DhetfPcDZ",
				active: "_276IwTNTCP-a5DhetfPcDZ",
				Regular: "_2U9iMWOKQVK6pp-lg7Jx4K",
				regular: "_2U9iMWOKQVK6pp-lg7Jx4K"
			}
		},
		"./src/chat/components/Message/Preview.m.less": function(e, t, n) {
			e.exports = {
				MessagePreview: "_3jmT-9zep7RA7TC5j3FouL",
				messagePreview: "_3jmT-9zep7RA7TC5j3FouL",
				active: "_2lGUX0yuAdDzSX2WjmPrG8",
				unread: "_16OvoKuUZbmePhJ1n_8Gcn"
			}
		},
		"./src/chat/components/Message/SystemMessage.m.less": function(e, t, n) {
			e.exports = {
				SystemMessage: "_2nARRm49mfeGOwZguO6Qp0",
				systemMessage: "_2nARRm49mfeGOwZguO6Qp0",
				LinkedText: "_20HH1FKf7FsnFm5YEZVUCb",
				linkedText: "_20HH1FKf7FsnFm5YEZVUCb"
			}
		},
		"./src/chat/components/MessageHeader/index.m.less": function(e, t, n) {
			e.exports = {
				TimeStamp: "kImIBv_zM-xrgXW4wo4a1",
				timeStamp: "kImIBv_zM-xrgXW4wo4a1",
				UserName: "pqdGGYoXaBuzfPrYLoqaM",
				userName: "pqdGGYoXaBuzfPrYLoqaM",
				UserHeader: "_1MCWBTca7AOAi7tbaohdii",
				userHeader: "_1MCWBTca7AOAi7tbaohdii"
			}
		},
		"./src/chat/components/MessageInput/index.m.less": function(e, t, n) {
			e.exports = {
				SubmitButton: "t19vywnuK8ouXSeGyGCTh",
				submitButton: "t19vywnuK8ouXSeGyGCTh",
				SendIcon: "_3wKXNlfxBUxkAv7PrVd8OO",
				sendIcon: "_3wKXNlfxBUxkAv7PrVd8OO",
				Form: "_1U1dh1DsLuq2PUt8AwKbAc",
				form: "_1U1dh1DsLuq2PUt8AwKbAc",
				Wrapper: "_2ERphYf08pZHF6WWqsLCvA",
				wrapper: "_2ERphYf08pZHF6WWqsLCvA",
				Icons: "_1H6XmzDZeFebELnU6sY0C0",
				icons: "_1H6XmzDZeFebELnU6sY0C0",
				ContentEditable: "TqpfKgK2FdKbljZzdRLIU",
				contentEditable: "TqpfKgK2FdKbljZzdRLIU",
				IconButton: "_3mRkaGP5f0vxRe_U_Gy02A",
				iconButton: "_3mRkaGP5f0vxRe_U_Gy02A",
				active: "_2DlIVUCHN0i6ffc7V4yOsc"
			}
		},
		"./src/chat/components/MessageInput/locker.m.less": function(e, t, n) {
			e.exports = {
				LockPanel: "_2h_JiBv-nPBnaM3N5JvyUv",
				lockPanel: "_2h_JiBv-nPBnaM3N5JvyUv",
				IconButton: "_2NYmknXxbchViinWy54HO5",
				iconButton: "_2NYmknXxbchViinWy54HO5",
				LockIcon: "_1ciI81_jNxkY71WoD59pgs",
				lockIcon: "_1ciI81_jNxkY71WoD59pgs"
			}
		},
		"./src/chat/components/MessageInput/muted.m.less": function(e, t, n) {
			e.exports = {
				Panel: "_27oSiXvL65xhTdkc_Uw6Tk",
				panel: "_27oSiXvL65xhTdkc_Uw6Tk",
				Icon: "_2g9vi8MITwKeNSmmeI8-Lz",
				icon: "_2g9vi8MITwKeNSmmeI8-Lz"
			}
		},
		"./src/chat/components/MessageList/index.m.less": function(e, t, n) {
			e.exports = {
				MessageItemBubble: "uaJN7fdQ7gwgTpZ7jtgcz",
				messageItemBubble: "uaJN7fdQ7gwgTpZ7jtgcz",
				Scroller: "_3SalNr9zKm9cow28G6Et8k",
				scroller: "_3SalNr9zKm9cow28G6Et8k",
				Container: "_1xras3hyI4R7t2fVZ1ignJ",
				container: "_1xras3hyI4R7t2fVZ1ignJ",
				ReverseCol: "_1GHvFO18gi7t3Pp59H7IuA",
				reverseCol: "_1GHvFO18gi7t3Pp59H7IuA",
				MessageInput: "bKDndaDKpLDQDnRx42iAH",
				messageInput: "bKDndaDKpLDQDnRx42iAH",
				LoadingIndicator: "ZLheoiA0Ou5i6qztt72Fo",
				loadingIndicator: "ZLheoiA0Ou5i6qztt72Fo",
				LoadingError: "_3NndSEXY_RxH5czXJ4Rt-A",
				loadingError: "_3NndSEXY_RxH5czXJ4Rt-A",
				SystemBubble: "zXSCzweFvK-RhyFTWZ0Eu",
				systemBubble: "zXSCzweFvK-RhyFTWZ0Eu",
				TypingIndicatorWrapper: "_1b-g4iuU52ClVq4jUeFT8g",
				typingIndicatorWrapper: "_1b-g4iuU52ClVq4jUeFT8g"
			}
		},
		"./src/chat/components/MessageReportDialog/ActionMenu.m.less": function(e, t, n) {
			e.exports = {
				Button: "wfQctZu1ecaMbjcsHSg6h",
				button: "wfQctZu1ecaMbjcsHSg6h",
				Approve: "_2XFuYeis9y8Xsjyz5z5FB9",
				approve: "_2XFuYeis9y8Xsjyz5z5FB9",
				Trash: "_1eVFNoal45S0Twwt9LfOLs",
				trash: "_1eVFNoal45S0Twwt9LfOLs",
				ButtonControls: "_2qC81FyHPci89SVLcGzmoM",
				buttonControls: "_2qC81FyHPci89SVLcGzmoM",
				ButtonText: "_1N1UGPomuGwkRLXua7X8Nw",
				buttonText: "_1N1UGPomuGwkRLXua7X8Nw"
			}
		},
		"./src/chat/components/MessageReportDialog/Header.m.less": function(e, t, n) {
			e.exports = {
				Group: "_3-_td-aLD0FzFbyGsifCaa",
				group: "_3-_td-aLD0FzFbyGsifCaa",
				Key: "_1fIHkblmv-fsEACA0XcjPo",
				key: "_1fIHkblmv-fsEACA0XcjPo",
				MemberActionDropdown: "BhVefEa8VOdz2snp27-b9",
				memberActionDropdown: "BhVefEa8VOdz2snp27-b9",
				MessageHeaderLink: "_13B1OwQItr3utcd8_sodio",
				messageHeaderLink: "_13B1OwQItr3utcd8_sodio",
				ChannelName: "_2EO-IzQX0HzamivHHyPE0_",
				channelName: "_2EO-IzQX0HzamivHHyPE0_",
				TextOverflow: "_1HY6d09ZB5WaqA20PtBOHv",
				textOverflow: "_1HY6d09ZB5WaqA20PtBOHv",
				IconButton: "_1o6HaT_x3GNHtreJOyG6NH",
				iconButton: "_1o6HaT_x3GNHtreJOyG6NH",
				Header: "_1GwIJseiZ5KeFqqtv5VA0Y",
				header: "_1GwIJseiZ5KeFqqtv5VA0Y"
			}
		},
		"./src/chat/components/MessageReportDialog/index.m.less": function(e, t, n) {
			e.exports = {
				ReasonText: "_2fWfSMLrcPv-OustcNUPwq",
				reasonText: "_2fWfSMLrcPv-OustcNUPwq",
				DeleteText: "Q4PD3whY2fxqRYIcy2FXa",
				deleteText: "Q4PD3whY2fxqRYIcy2FXa",
				AcceptText: "_32x3uiNNGBeL31mFrtoazH",
				acceptText: "_32x3uiNNGBeL31mFrtoazH"
			}
		},
		"./src/chat/components/MessageTooltip/Picker/Snoomoji.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2R3oRa4ekCI_1D9V0YXda5",
				iconWrapper: "_2R3oRa4ekCI_1D9V0YXda5",
				EmptyIcons: "_1Z8KF6toANJpDE4kWozfKY",
				emptyIcons: "_1Z8KF6toANJpDE4kWozfKY",
				LoadingIndicator: "_3vs9Yh0oFvFZXZsofl_USs",
				loadingIndicator: "_3vs9Yh0oFvFZXZsofl_USs",
				Wrapper: "_2v9AoSifv20X3GQbcYnxmn",
				wrapper: "_2v9AoSifv20X3GQbcYnxmn"
			}
		},
		"./src/chat/components/MessageTooltip/Picker/Userlist.m.less": function(e, t, n) {
			e.exports = {
				LoadingIndicator: "_3-kYuEEP6KWAfJLiayTR6s",
				loadingIndicator: "_3-kYuEEP6KWAfJLiayTR6s",
				ChatMemberList: "_2o13OlNIydnvz809gFZ87R",
				chatMemberList: "_2o13OlNIydnvz809gFZ87R",
				Wrapper: "dBeQ2cMBzl6WHb5eSjBRI",
				wrapper: "dBeQ2cMBzl6WHb5eSjBRI"
			}
		},
		"./src/chat/components/MessageTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				Dropdown: "_1EGv9VTTmrhOfRfonVFzsG",
				dropdown: "_1EGv9VTTmrhOfRfonVFzsG",
				DropdownWrapper: "_3sO7SmiWrXASRtvv7d_dJk",
				dropdownWrapper: "_3sO7SmiWrXASRtvv7d_dJk",
				Picker: "_1AjUa6WOfWNHT6Hgt6TPmK",
				picker: "_1AjUa6WOfWNHT6Hgt6TPmK",
				PickerHeader: "_1ekaLCxKd98FlrNC_Oo2rT",
				pickerHeader: "_1ekaLCxKd98FlrNC_Oo2rT",
				IconButton: "_2DfO2KxP69OlZwaxjwUq9q",
				iconButton: "_2DfO2KxP69OlZwaxjwUq9q",
				PickerWrapper: "_1h1uw7kxU6VJk75NglIHM2",
				pickerWrapper: "_1h1uw7kxU6VJk75NglIHM2",
				embedded: "Hu4mluXNcKxmITzoPIZ2"
			}
		},
		"./src/chat/components/MinimizedPortalContainer/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1FE1o9C7Gk8k6ciF8-oeXx",
				container: "_1FE1o9C7Gk8k6ciF8-oeXx",
				HiddenCloseButton: "_3kOgjtISRZqbdX0TbLj1qf",
				hiddenCloseButton: "_3kOgjtISRZqbdX0TbLj1qf",
				TitleWithCounter: "_3bzYm5d0EW5ZCDVM6kmYIh",
				titleWithCounter: "_3bzYm5d0EW5ZCDVM6kmYIh"
			}
		},
		"./src/chat/components/MinimizedPortalContainer/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/actions/container.ts"),
				i = n("./src/chat/components/CloseIcon/index.tsx"),
				l = n("./src/chat/components/PortalContainer/index.tsx"),
				d = n("./src/chat/components/ThemeProvider/index.tsx"),
				u = n("./src/chat/constants/container.ts"),
				h = n("./src/chat/constants/zIndex.ts"),
				m = n("./src/chat/controls/Counter/index.tsx"),
				b = n("./src/chat/helpers/chatSelector.ts"),
				p = n("./src/chat/selectors/messages.ts"),
				g = n("./src/chat/components/MinimizedPortalContainer/index.m.less"),
				O = n.n(g);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), {
				minimized: j
			} = u.b, C = r.a.wrapped(i.a, "HiddenCloseButton", O.a);
			C.displayName = "CloseButton";
			const E = r.a.wrapped(e => s.a.createElement("div", {
					onClick: e.onClick,
					className: e.className,
					style: {
						zIndex: h.a,
						width: "".concat(Object(l.b)(j.width), "px"),
						height: "".concat(Object(l.b)(j.height), "px")
					}
				}, e.children), "Container", O.a),
				_ = r.a.span("TitleWithCounter", O.a),
				v = Object(b.a)({
					unreadCount: p.a
				}),
				y = Object(c.b)(v, e => ({
					close: () => e(Object(o.sizeChanged)(u.a.HIDDEN)),
					open: () => e(Object(o.sizeChanged)(u.a.EMBED))
				}));
			t.a = y(e => {
				const {
					unread: t,
					count: n
				} = e.unreadCount, a = n > 0 ? n : void 0;
				return s.a.createElement(d.a, null, s.a.createElement(E, {
					className: e.className,
					onClick: e.open
				}, s.a.createElement(_, null, f._("Chat", null, {
					hk: "3ZWpRR"
				}), t && s.a.createElement(m.b, {
					count: a
				})), s.a.createElement(C, null)))
			})
		},
		"./src/chat/components/OverlayBanUser/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1_HXUFfqNLhPa3ECg2uYKU",
				container: "_1_HXUFfqNLhPa3ECg2uYKU",
				Warning: "_1M-N-qskTvUR9X1wHof2x",
				warning: "_1M-N-qskTvUR9X1wHof2x",
				Details: "_2RJd8VyczSTaQ0THm9INBL",
				details: "_2RJd8VyczSTaQ0THm9INBL",
				LinkText: "_1G1OtnYB5kEysHY3gEX-vR",
				linkText: "_1G1OtnYB5kEysHY3gEX-vR",
				CheckboxContainer: "_2WeM6zjwdfeMqzjvRnp-6x",
				checkboxContainer: "_2WeM6zjwdfeMqzjvRnp-6x"
			}
		},
		"./src/chat/components/OverlayBlockUser/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1krdNYK7ugIMXB3ZghbFue",
				container: "_1krdNYK7ugIMXB3ZghbFue",
				Text: "_2d8sdMroAZbA6U92LFXNXQ",
				text: "_2d8sdMroAZbA6U92LFXNXQ"
			}
		},
		"./src/chat/components/OverlayChannelInvited/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2_usm-6VxbuOWiTnRHrW6_",
				container: "_2_usm-6VxbuOWiTnRHrW6_",
				TitleContainer: "_286hA91kPPTG16FrntDjnI",
				titleContainer: "_286hA91kPPTG16FrntDjnI",
				NSFWIcon: "KMxUr4-PgnXZGf5PDaXpK",
				nsfwIcon: "KMxUr4-PgnXZGf5PDaXpK",
				UserPic: "_1VfnsRlasisMwqxtizmNQG",
				userPic: "_1VfnsRlasisMwqxtizmNQG",
				WarningTextNSFW: "_2J7sY3CGM_vmQmlMoGfZrh",
				warningTextNsfw: "_2J7sY3CGM_vmQmlMoGfZrh",
				Text: "_22QVrPPpZBzynTY8RED1SZ",
				text: "_22QVrPPpZBzynTY8RED1SZ",
				MediaObject: "_2P47kg53Xxq3BQhzoaYl9a",
				mediaObject: "_2P47kg53Xxq3BQhzoaYl9a",
				LightText: "_2buWE0oBQ93N4BIt3Klp0T",
				lightText: "_2buWE0oBQ93N4BIt3Klp0T",
				LightTextSmall: "_2EZY5lK_rrQ9EWQLO-bTOa",
				lightTextSmall: "_2EZY5lK_rrQ9EWQLO-bTOa",
				Warning: "_1qjZD8w4dikSOteKrNjSx8",
				warning: "_1qjZD8w4dikSOteKrNjSx8",
				MessageItemBubble: "_159DMqa2u910mCXNaj7psO",
				messageItemBubble: "_159DMqa2u910mCXNaj7psO",
				MemberListHeader: "_2Okgg_b1qun6jCu2zoGgIr",
				memberListHeader: "_2Okgg_b1qun6jCu2zoGgIr",
				count: "_3OeY3h8ewj9TQNqMGBjQAy"
			}
		},
		"./src/chat/components/OverlayChannelRemoval/index.m.less": function(e, t, n) {
			e.exports = {
				SubHeader: "wmCucbS6jibsxQaqbOhd-",
				subHeader: "wmCucbS6jibsxQaqbOhd-",
				Header: "_2sNvTIhUwrcntNuPu0dMCh",
				header: "_2sNvTIhUwrcntNuPu0dMCh"
			}
		},
		"./src/chat/components/OverlayChatMembers/index.m.less": function(e, t, n) {
			e.exports = {
				Scroller: "_2IqNvO7mqMEE5ZWWtZ2wz",
				scroller: "_2IqNvO7mqMEE5ZWWtZ2wz",
				LoadingIndicator: "_2AvW8S-YJtH3dTzD1erN9w",
				loadingIndicator: "_2AvW8S-YJtH3dTzD1erN9w"
			}
		},
		"./src/chat/components/OverlayCreateChannel/index.m.less": function(e, t, n) {
			e.exports = {
				Content: "_1hC_Uia5BNA3T_u7HMpSZG",
				content: "_1hC_Uia5BNA3T_u7HMpSZG",
				Checkbox: "_3GsQM0WckX2LUq1uXLAPFK",
				checkbox: "_3GsQM0WckX2LUq1uXLAPFK",
				Scroller: "_3jTOQRN48SYTsqhBKHqC4Z",
				scroller: "_3jTOQRN48SYTsqhBKHqC4Z",
				ListItem: "_1xahoE-aw4Dlt5luSt2p4M",
				listItem: "_1xahoE-aw4Dlt5luSt2p4M",
				ListItemHeader: "_3WOxEuf3YCyzuUH93Vlyc5",
				listItemHeader: "_3WOxEuf3YCyzuUH93Vlyc5",
				ChatListHeader: "f1Vn8P6AnRNELbDzUjx9e",
				chatListHeader: "f1Vn8P6AnRNELbDzUjx9e",
				Name: "JBR5EOMqd72EqgfXylDwk",
				name: "JBR5EOMqd72EqgfXylDwk",
				Error: "_38k-vHCy1mrtIvoNMijbPz",
				error: "_38k-vHCy1mrtIvoNMijbPz",
				ChannelNameInput: "_1q7NucdJkk8imHDBisfJyk",
				channelNameInput: "_1q7NucdJkk8imHDBisfJyk",
				OverlayContent: "_1ppnyRj_9LpVLO_D4hSmuD",
				overlayContent: "_1ppnyRj_9LpVLO_D4hSmuD",
				ChannelNameWrapper: "_3kiusu26cM8caGCqS2DjBs",
				channelNameWrapper: "_3kiusu26cM8caGCqS2DjBs",
				shown: "_2Mva-9o8IuN_QrvvZYRHyH"
			}
		},
		"./src/chat/components/OverlayDeclineChannel/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_2ZpOIeJdHuQaCPzB1Zitjs",
				text: "_2ZpOIeJdHuQaCPzB1Zitjs"
			}
		},
		"./src/chat/components/OverlayDeleteMessage/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2Yb29uEhP7-68Kfyyoi055",
				container: "_2Yb29uEhP7-68Kfyyoi055",
				Text: "_1uVJNk1TcTYh4J-adHysAR",
				text: "_1uVJNk1TcTYh4J-adHysAR",
				CheckboxContainer: "FeyWJeFioarZziU9gnPV1",
				checkboxContainer: "FeyWJeFioarZziU9gnPV1"
			}
		},
		"./src/chat/components/OverlayDirectsEmptyState/index.m.less": function(e, t, n) {
			e.exports = {
				OverlayContent: "_1q866gGcJPftLTxyLf0X3g",
				overlayContent: "_1q866gGcJPftLTxyLf0X3g",
				Image: "_1vp6IUbUAKft1309x-FLvY",
				image: "_1vp6IUbUAKft1309x-FLvY",
				Info: "_3ReB8hehAg-xasLSPknuTf",
				info: "_3ReB8hehAg-xasLSPknuTf",
				Header: "_3Tai9WhmvPt75f5hVNehsd",
				header: "_3Tai9WhmvPt75f5hVNehsd",
				Text: "_2qqSe8MO2ASeWjo69rQv-U",
				text: "_2qqSe8MO2ASeWjo69rQv-U"
			}
		},
		"./src/chat/components/OverlayJoinChannel/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "xaCHlHDpK0tSJsxZHvjhD",
				wrapper: "xaCHlHDpK0tSJsxZHvjhD",
				Title: "Y5uqrnMGgmRDTkZKWQBvt",
				title: "Y5uqrnMGgmRDTkZKWQBvt",
				Desc: "Wv-6I7UewbR428Q1rjFxN",
				desc: "Wv-6I7UewbR428Q1rjFxN",
				Warning: "_3gIU6LRa2c1ApZy9J6-NPi",
				warning: "_3gIU6LRa2c1ApZy9J6-NPi"
			}
		},
		"./src/chat/components/OverlayKickUser/index.m.less": function(e, t, n) {
			e.exports = {
				SubHeader: "jGKnqvkzsltpANG0DJlgO",
				subHeader: "jGKnqvkzsltpANG0DJlgO",
				Title: "_3Ra9KcBL07oH70jU3LOAXh",
				title: "_3Ra9KcBL07oH70jU3LOAXh",
				Header: "_1Tqno2ajLSYCm3V_okJFQ8",
				header: "_1Tqno2ajLSYCm3V_okJFQ8",
				Checkbox: "WElCAKjceOsUlyjpoY3xB",
				checkbox: "WElCAKjceOsUlyjpoY3xB",
				ListItem: "_2_OE0sk8Db21HH8QSRH1Bx",
				listItem: "_2_OE0sk8Db21HH8QSRH1Bx",
				OverlayContent: "_33MAHgxzLWMgmJnRELO8em",
				overlayContent: "_33MAHgxzLWMgmJnRELO8em"
			}
		},
		"./src/chat/components/OverlayLeaveChannel/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3EeEvLNf7oLUv7HADlg78v",
				container: "_3EeEvLNf7oLUv7HADlg78v",
				Text: "_3KBF2WZWeb-cDtVGxJrB_M",
				text: "_3KBF2WZWeb-cDtVGxJrB_M",
				TextBold: "_2viZeky_1285ai6miwQrbQ",
				textBold: "_2viZeky_1285ai6miwQrbQ"
			}
		},
		"./src/chat/components/OverlayLockChannel/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "G8ApzOO0MGwRaeXN6lVxi",
				container: "G8ApzOO0MGwRaeXN6lVxi",
				Text: "_3OZR-pdEysnVmOVvCZPSGc",
				text: "_3OZR-pdEysnVmOVvCZPSGc",
				TextBold: "_36mA0iX729-4-ZAKKn7Zf-",
				textBold: "_36mA0iX729-4-ZAKKn7Zf-"
			}
		},
		"./src/chat/components/OverlayNSFWWarning/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3pqnKF777RDT3fBIOXoVeh",
				container: "_3pqnKF777RDT3fBIOXoVeh",
				Text: "v8ouzYTWr_vsFsZU3nJB4",
				text: "v8ouzYTWr_vsFsZU3nJB4"
			}
		},
		"./src/chat/components/OverlayNav/index.m.less": function(e, t, n) {
			e.exports = {
				Group: "_1YPPlxZVDby6iOxA_2zGt5",
				group: "_1YPPlxZVDby6iOxA_2zGt5",
				Key: "_2VJvEvcJEb5Qi5bR-kioln",
				key: "_2VJvEvcJEb5Qi5bR-kioln",
				Nav: "_3CVk8skSg_xIxuTdTvDN73",
				nav: "_3CVk8skSg_xIxuTdTvDN73",
				TitleWrapper: "_1FXx-0D9q_ppO-Wvhxl2SH",
				titleWrapper: "_1FXx-0D9q_ppO-Wvhxl2SH",
				Title: "ylMZS-KGeMjDd_L-rq4Rq",
				title: "ylMZS-KGeMjDd_L-rq4Rq",
				SubTitle: "AxqaQ2FQrA19yH4bFOCfx",
				subTitle: "AxqaQ2FQrA19yH4bFOCfx"
			}
		},
		"./src/chat/components/OverlayNavButtonGroup/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_1YLHv7p-GZBHZ9sw1cUr3T",
				wrapper: "_1YLHv7p-GZBHZ9sw1cUr3T",
				CloseButton: "bwxXoigjZ4E9ofWIggxmp",
				closeButton: "bwxXoigjZ4E9ofWIggxmp",
				IconButton: "_8nwxQjcY53lLegyj4XGyA",
				iconButton: "_8nwxQjcY53lLegyj4XGyA"
			}
		},
		"./src/chat/components/OverlayPrivateChannel/index.m.less": function(e, t, n) {
			e.exports = {
				OverlayContent: "_3a5Sy3shTDbXa5QpnNKysQ",
				overlayContent: "_3a5Sy3shTDbXa5QpnNKysQ",
				Wrapper: "_1bBGJuhjmvvKcNlSQ0EK8b",
				wrapper: "_1bBGJuhjmvvKcNlSQ0EK8b",
				Description: "_3Z--CAa9bC0C7gbEdQIZQo",
				description: "_3Z--CAa9bC0C7gbEdQIZQo",
				Title: "Z_tVgFs5kTvmGcfeKejtc",
				title: "Z_tVgFs5kTvmGcfeKejtc",
				Image: "_4h1K0zE5EjNzWkb0Tjov_",
				image: "_4h1K0zE5EjNzWkb0Tjov_"
			}
		},
		"./src/chat/components/OverlayReport/index.m.less": function(e, t, n) {
			e.exports = {
				Checkbox: "_3_ggjAPRo5VjUmv6nJLlil",
				checkbox: "_3_ggjAPRo5VjUmv6nJLlil",
				ListItem: "_2qQcEGZtboU7wa6nmfyOoD",
				listItem: "_2qQcEGZtboU7wa6nmfyOoD"
			}
		},
		"./src/chat/components/OverlaySubredditChatRequest/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditHeader: "_3j1-6eOBPizZoztx72CDde",
				subredditHeader: "_3j1-6eOBPizZoztx72CDde",
				Title: "_3X61dNX9-tl6Qvt9TNsJFu",
				title: "_3X61dNX9-tl6Qvt9TNsJFu",
				Text: "_1HAsUcKyFjgjMGRC3kk1kN",
				text: "_1HAsUcKyFjgjMGRC3kk1kN"
			}
		},
		"./src/chat/components/PortalContainer/index.m.less": function(e, t, n) {
			e.exports = {
				BasePortalContainer: "yU9j1WJPhK5O625xcz254",
				basePortalContainer: "yU9j1WJPhK5O625xcz254",
				EmbedPortalContainer: "_1ScY1cHS-Vgv6eoU-LmjTi",
				embedPortalContainer: "_1ScY1cHS-Vgv6eoU-LmjTi",
				HiddenPortalContainer: "_3Txi0nOg7zVE4_CBYqUaRq",
				hiddenPortalContainer: "_3Txi0nOg7zVE4_CBYqUaRq",
				MinimizedRedesignPortalContainer: "_29tNelkz3zQzbXmYFOCncy",
				minimizedRedesignPortalContainer: "_29tNelkz3zQzbXmYFOCncy"
			}
		},
		"./src/chat/components/PortalContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "a", (function() {
				return I
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/CSSVariableProvider/index.tsx"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				l = n("./src/chat/components/Root/index.tsx"),
				d = n("./src/chat/constants/container.ts"),
				u = n("./src/chat/constants/zIndex.ts"),
				h = n("./src/chat/helpers/chatSelector.ts"),
				m = n("./src/chat/components/PortalContainer/index.m.less"),
				b = n.n(m);
			const {
				embed: p,
				hidden: g
			} = d.b;

			function O(e) {
				return void 0 !== e ? e : -1
			}
			const f = o.a.wrapped(e => s.a.createElement("div", {
					className: e.className,
					style: {
						zIndex: u.a
					}
				}, e.children), "BasePortalContainer", b.a),
				j = o.a.wrapped(e => s.a.createElement("div", {
					className: e.className,
					style: {
						zIndex: u.a,
						width: "".concat(O(p.width), "px"),
						height: "".concat(O(p.height), "px")
					}
				}, e.children), "EmbedPortalContainer", b.a),
				C = o.a.wrapped(e => s.a.createElement("div", {
					className: e.className,
					style: {
						zIndex: u.a,
						width: "".concat(O(g.width), "px"),
						height: "".concat(O(g.height), "px")
					}
				}, e.children), "HiddenPortalContainer", b.a),
				E = o.a.wrapped(i.a, "MinimizedRedesignPortalContainer", b.a),
				_ = f,
				v = Object(h.a)({
					container: e => e && e.container && e.container.size
				});

			function y(e) {
				switch (e.container) {
					case d.a.EMBED:
						return s.a.createElement(j, null, e.children);
					case d.a.HIDDEN:
						return s.a.createElement(C, null, e.children);
					case d.a.FULL:
						return s.a.createElement(_, null, e.children);
					case d.a.MINIMIZED:
						return s.a.createElement(E, null);
					default:
						return s.a.createElement(j, null, e.children)
				}
			}

			function I(e, t) {
				const n = Object(c.b)(v)(y);
				return s.a.createElement("div", null, Object(r.d)(s.a.createElement(n, null, Object(l.a)(e, t)), document.body))
			}
		},
		"./src/chat/components/RenameGroupInput/index.m.less": function(e, t, n) {
			e.exports = {
				InputWrapper: "_28P30CIc0Sg6khzTfdUtFS",
				inputWrapper: "_28P30CIc0Sg6khzTfdUtFS",
				CancelButton: "_2BKC2-yw3SDROeMlQVuzV0",
				cancelButton: "_2BKC2-yw3SDROeMlQVuzV0",
				SaveButton: "_28q7tJbZaPoQlfqYhxGvo7",
				saveButton: "_28q7tJbZaPoQlfqYhxGvo7",
				visible: "_2B6VdxRSaCahlnbS9GaF2t",
				InputContent: "_3a3Jtb-a_YmBRB4rWbdfNE",
				inputContent: "_3a3Jtb-a_YmBRB4rWbdfNE",
				InputControls: "_1zk-MS9-Wk_eyGcUZvopQX",
				inputControls: "_1zk-MS9-Wk_eyGcUZvopQX"
			}
		},
		"./src/chat/components/Root/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-router/esm/react-router.js"),
				r = (n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./src/chat/components/FrameContent/index.tsx")),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/config.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/helpers/chatSelector.ts"),
				u = n("./src/chat/constants/theme.ts");
			const {
				REDDIT: h
			} = u.b;
			var m = n("./src/chat/icons/Loader/index.m.less"),
				b = n.n(m);
			const p = l.a.div("Square", b.a),
				g = l.a.img("LoadingIcon", b.a),
				O = l.a.wrapped(e => s.a.createElement("div", {
					role: "progressbar",
					className: e.className,
					style: {
						zIndex: e.zIndex || 1
					}
				}, e.children), "Wrapper", b.a),
				f = Object(d.a)({
					isNightmode: e => (e => !(e.user.prefs.globalTheme !== h))(e)
				});
			var j = Object(o.b)(f)(e => s.a.createElement(O, {
					zIndex: e.zIndex || 1
				}, s.a.createElement(p, null, s.a.createElement(g, {
					src: e.isNightmode ? "".concat(i.a.assetPath, "/img/loader_2orbit_loop.gif") : "".concat(i.a.assetPath, "/img/loader_2orbit_loop_nightmode.gif"),
					alt: "Loading"
				})))),
				C = n("./src/chat/components/CloseIcon/index.tsx"),
				E = n("./src/chat/selectors/app.ts");
			const _ = Object(d.a)({
				isHidden: E.e,
				isReady: E.f,
				alert: E.b,
				experiments: E.a
			});
			var v = Object(o.b)(_)(e => e.isHidden ? null : e.isReady && e.experiments ? e.children : s.a.createElement(s.a.Fragment, null, s.a.createElement(C.a, null), s.a.createElement(j, {
					textType: e.alert || "",
					isFadeOut: e.isReady,
					zIndex: 2
				}))),
				y = n("./src/chat/components/ThemeProvider/index.tsx");

			function I(e, t) {
				return s.a.createElement(y.a, {
					className: r.a
				}, s.a.createElement(e, null, s.a.createElement(c.d, {
					component: e => s.a.createElement(v, null, s.a.createElement(c.f, {
						location: e.location
					}, t))
				})))
			}
		},
		"./src/chat/components/Scroller/index.m.less": function(e, t, n) {
			e.exports = {
				Scroller: "_3GDyz0bgwoWgoxYSYSxXyA",
				scroller: "_3GDyz0bgwoWgoxYSYSxXyA"
			}
		},
		"./src/chat/components/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				SearchBarWrapper: "KhZg0bTs9OULHNVuM28-j",
				searchBarWrapper: "KhZg0bTs9OULHNVuM28-j",
				SearchBarLabel: "n8QUlQDkULMxz2adkFkZN",
				searchBarLabel: "n8QUlQDkULMxz2adkFkZN",
				SearchBarField: "_3vilBtEofGPjLW8XnN__LH",
				searchBarField: "_3vilBtEofGPjLW8XnN__LH",
				SearchBarInput: "_2clRIy8wf_7H8xNNrUPaiU",
				searchBarInput: "_2clRIy8wf_7H8xNNrUPaiU",
				Bubble: "_3Os5eNEJdv4w6tsQdtTT5d",
				bubble: "_3Os5eNEJdv4w6tsQdtTT5d"
			}
		},
		"./src/chat/components/SelectableUser/index.m.less": function(e, t, n) {
			e.exports = {
				Checkbox: "_245EMGvr6FxhYfqTf2m6Zk",
				checkbox: "_245EMGvr6FxhYfqTf2m6Zk",
				UserPic: "zW7z1umVHXoa1LGs0PhqY",
				userPic: "zW7z1umVHXoa1LGs0PhqY",
				Name: "_1HoUzT_zRlnm-zLSJPRh28",
				name: "_1HoUzT_zRlnm-zLSJPRh28"
			}
		},
		"./src/chat/components/Sidebar/CreateChannel/index.m.less": function(e, t, n) {
			e.exports = {
				ChatNew: "_1epWdlh2iK8Z3OcxO5pWF9",
				chatNew: "_1epWdlh2iK8Z3OcxO5pWF9",
				Button: "eBsUucD7aSgQuofWx8Jq",
				button: "eBsUucD7aSgQuofWx8Jq",
				Text: "_3PwciL3YN1pDFVJw--NedB",
				text: "_3PwciL3YN1pDFVJw--NedB"
			}
		},
		"./src/chat/components/Sidebar/DirectsPanel/index.m.less": function(e, t, n) {
			e.exports = {
				Scroller: "_809obLHiY5wS3ZHNVH0QY",
				scroller: "_809obLHiY5wS3ZHNVH0QY"
			}
		},
		"./src/chat/components/Sidebar/SidebarDivider/index.m.less": function(e, t, n) {
			e.exports = {
				Divider: "_24QCVGgaI_yk8y13wbgEWe",
				divider: "_24QCVGgaI_yk8y13wbgEWe",
				SubDivider: "nWrfwV5vA2rcFcl2jBpkS",
				subDivider: "nWrfwV5vA2rcFcl2jBpkS"
			}
		},
		"./src/chat/components/Sidebar/SubredditPanel/index.m.less": function(e, t, n) {
			e.exports = {
				Scroller: "_1-wLghHbwdfnXW3hgKe4KX",
				scroller: "_1-wLghHbwdfnXW3hgKe4KX"
			}
		},
		"./src/chat/components/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3Vfwehx1_6SL3j8elUC4s1",
				wrapper: "_3Vfwehx1_6SL3j8elUC4s1",
				Tabs: "_1WMBA90B9UJsaA8abIOXkg",
				tabs: "_1WMBA90B9UJsaA8abIOXkg",
				TabList: "_2xkfmbE0b2UUTNI7Pe-SR4",
				tabList: "_2xkfmbE0b2UUTNI7Pe-SR4",
				Tab: "_2wJ9IK0tQpgSzeHzXJyT3D",
				tab: "_2wJ9IK0tQpgSzeHzXJyT3D",
				active: "_3iLNO7R8VMvJ4Dn89SVFVg",
				FirstTimeUserExpPromo: "_29KVZN_UShyL2c0U8mio78",
				firstTimeUserExpPromo: "_29KVZN_UShyL2c0U8mio78"
			}
		},
		"./src/chat/components/Snoomoji/index.m.less": function(e, t, n) {
			e.exports = {
				SnooImg: "_1b2msiYMaWuRyunCT4E35G",
				snooImg: "_1b2msiYMaWuRyunCT4E35G"
			}
		},
		"./src/chat/components/SubredditHeader/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditHeaderTitle: "_3O_FYyPnsqn2ysgBTgUiPG",
				subredditHeaderTitle: "_3O_FYyPnsqn2ysgBTgUiPG",
				SubredditName: "_2w1-pMuQustKyxbIy4NaQ-",
				subredditName: "_2w1-pMuQustKyxbIy4NaQ-",
				selected: "_32syq2jHC0wZb1itE7LceE",
				ChannelName: "laqy5CSOZ3RtB6SfWG59x",
				channelName: "laqy5CSOZ3RtB6SfWG59x",
				Group: "_3M_HM9NWld2deZB0sZNs5E",
				group: "_3M_HM9NWld2deZB0sZNs5E",
				Key: "_1bYAImPe6Ha4GVwba-mE6a",
				key: "_1bYAImPe6Ha4GVwba-mE6a",
				TextOverflow: "gxpU7poFPJjaonNUILn5",
				textOverflow: "gxpU7poFPJjaonNUILn5",
				NSFWIcon: "_3fZPKI35bF46yDVzrkx1bZ",
				nsfwIcon: "_3fZPKI35bF46yDVzrkx1bZ",
				SubredditHeader: "_1g17GpsA_cdFZEa4yYOFom",
				subredditHeader: "_1g17GpsA_cdFZEa4yYOFom",
				Icon: "_3MVxGN4RtL4Cc57eIAM0AF",
				icon: "_3MVxGN4RtL4Cc57eIAM0AF",
				SubChat: "_11QDG1BLADvUHKrJk627nE",
				subChat: "_11QDG1BLADvUHKrJk627nE",
				SubredditHeaderIcon: "_2cHerJ1xIdjzYZvzHxxVtn",
				subredditHeaderIcon: "_2cHerJ1xIdjzYZvzHxxVtn"
			}
		},
		"./src/chat/components/SubredditInvitedLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditInvitedLink: "_1cM4NY-nRBgg0N7J2zeZom",
				subredditInvitedLink: "_1cM4NY-nRBgg0N7J2zeZom",
				selected: "fTXjoy46dzJ97kxXeNugh"
			}
		},
		"./src/chat/components/SubredditJoined/index.m.less": function(e, t, n) {
			e.exports = {
				Group: "_1Vj79Z25y4rOvl3AepTJWj",
				group: "_1Vj79Z25y4rOvl3AepTJWj",
				Key: "_3Gb4tRNWqZbOcPLnWHxYRP",
				key: "_3Gb4tRNWqZbOcPLnWHxYRP",
				SubredditChannelLink: "_2YXMIjJYTPOEMFDCo2YfeL",
				subredditChannelLink: "_2YXMIjJYTPOEMFDCo2YfeL",
				active: "_2Tt4jrYMmv3BA4eJBWCl1K",
				unread: "_31bpHIk9RyhsmrsqCcNMiG",
				Wrapper: "m1tjINo67gOxLTYVpXMEK",
				wrapper: "m1tjINo67gOxLTYVpXMEK",
				SubredditHeader: "_1a4WrbQTfal9tcCL0MkQec",
				subredditHeader: "_1a4WrbQTfal9tcCL0MkQec",
				SubredditList: "PzxWl7Mbg346IwB7gxYaP",
				subredditList: "PzxWl7Mbg346IwB7gxYaP",
				BlankStateText: "_26L2tn7xwZ23KgODtQMagS",
				blankStateText: "_26L2tn7xwZ23KgODtQMagS",
				SubredditIcon: "_36xlVFccraXxJ-bul5NynV",
				subredditIcon: "_36xlVFccraXxJ-bul5NynV",
				SubredditName: "_1jsjKTfbiOtdnSLS0lXstL",
				subredditName: "_1jsjKTfbiOtdnSLS0lXstL"
			}
		},
		"./src/chat/components/SubredditRecommended/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_2rAezUR1zUOR5dOIZAR9OF",
				wrapper: "_2rAezUR1zUOR5dOIZAR9OF"
			}
		},
		"./src/chat/components/SubredditRecommendedLink/index.m.less": function(e, t, n) {
			e.exports = {
				ChannelDesc: "_2MAYeyM0SS2mwSPkG0b3pY",
				channelDesc: "_2MAYeyM0SS2mwSPkG0b3pY",
				selected: "qTijf5vcQE7xnXJmD6eDk",
				SubredditChannelLink: "_1uYq_b7LvkEZrfcbgktTjV",
				subredditChannelLink: "_1uYq_b7LvkEZrfcbgktTjV"
			}
		},
		"./src/chat/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/index.tsx");
			const i = Object(r.a)(e => e.themes.current, e => ({
				theme: e
			}));
			t.a = Object(c.b)(i)(e => {
				const {
					className: t,
					children: n,
					theme: a
				} = e;
				return s.a.createElement(o.e, {
					className: t,
					isRootOrUniqueClassName: o.c,
					theme: a
				}, n)
			})
		},
		"./src/chat/components/ThemeSwitcher/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_2fg9MSpO2XXVCGhMa9C2eH",
				wrapper: "_2fg9MSpO2XXVCGhMa9C2eH"
			}
		},
		"./src/chat/components/ToastNotification/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_1F_LuK64VyIwueMX3ce6a_",
				wrapper: "_1F_LuK64VyIwueMX3ce6a_",
				pending: "_3-akkAdjwf5GRaaBFDvNJN",
				Text: "Z2zpHoQtb1-SNgOtRrt8J",
				text: "Z2zpHoQtb1-SNgOtRrt8J",
				SnooImg: "_2YMWtqHjEMBexSlMPZP1ez",
				snooImg: "_2YMWtqHjEMBexSlMPZP1ez",
				Button: "_3ehS3sQSThwrbXGwdIUSt3",
				button: "_3ehS3sQSThwrbXGwdIUSt3",
				RefreshIcon: "_3ymunKenTsVYMVusTFZv4F",
				refreshIcon: "_3ymunKenTsVYMVusTFZv4F"
			}
		},
		"./src/chat/components/TypingIndicator/index.m.less": function(e, t, n) {
			e.exports = {
				IndicatorText: "_9ILBgizV58pKhJFWM-mPy",
				indicatorText: "_9ILBgizV58pKhJFWM-mPy"
			}
		},
		"./src/chat/components/UnselectableUser/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "oifWWeXtU7UUw2o2ujOPY",
				wrapper: "oifWWeXtU7UUw2o2ujOPY",
				Content: "Dfb74heOWSZF6_doPiIDe",
				content: "Dfb74heOWSZF6_doPiIDe",
				UserPic: "_367xw6e_C8q7AIpViUzQ4",
				userPic: "_367xw6e_C8q7AIpViUzQ4",
				Name: "_2UYcL31wx648GQ4cbrbg8b",
				name: "_2UYcL31wx648GQ4cbrbg8b",
				Context: "_1ombhjP6A9filW0mZ6Wxv1",
				context: "_1ombhjP6A9filW0mZ6Wxv1"
			}
		},
		"./src/chat/constants/batchSizes.ts": function(e, t, n) {
			"use strict";
			var a;
			n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e[e.Channels = 10] = "Channels", e[e.InitChannels = 50] = "InitChannels", e[e.Messages = 40] = "Messages"
				}(a || (a = {}))
		},
		"./src/chat/constants/page.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = "tooltip-container"
		},
		"./src/chat/constants/sidebar.ts": function(e, t, n) {
			"use strict";
			var a;
			n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e[e.SubredditChannels = 0] = "SubredditChannels", e[e.DirectChannels = 1] = "DirectChannels"
				}(a || (a = {}))
		},
		"./src/chat/constants/theme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return s
			}));
			const a = {
					REDDIT: "REDDIT",
					NIGHT: "NIGHT"
				},
				s = a.REDDIT
		},
		"./src/chat/constants/toast.ts": function(e, t, n) {
			"use strict";
			var a;
			n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.ConnectionClosed = "connectionClosed", e.ConnectionPending = "connectionPending", e.ConnectionOpen = "connectionOpen"
				}(a || (a = {}))
		},
		"./src/chat/constants/zIndex.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = 90
		},
		"./src/chat/controls/Button/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_3QHhpmOrsIj9Hy8FecxWKa",
				button: "_3QHhpmOrsIj9Hy8FecxWKa",
				primaryStyles: "zn4gOEY3isnsK7xZtTvNH",
				secondaryStyles: "_2kbPN0C-4BcmdmHFrCuIIq",
				noBorderStyles: "_226W8BEi6TuRBJaz_fqgVK",
				primaryNoBorder: "_1xj0FyWu4n5wjObmiR5rku",
				secondaryNoBorder: "_3_-cZycKEZz0Iz-8wXJzLU",
				warningNoBorder: "oSSBg-pv9or4z1x1mHJaE",
				IconButton: "_1PhPhuhKHqFwivRAkg2DkH",
				iconButton: "_1PhPhuhKHqFwivRAkg2DkH",
				MessageIconButton: "_1C9dkDKKpS1LYs4gYdxFyL",
				messageIconButton: "_1C9dkDKKpS1LYs4gYdxFyL"
			}
		},
		"./src/chat/controls/Button/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return v
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "e", (function() {
				return N
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				c = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/opener/index.ts"),
				l = n("./src/chat/controls/Svg/index.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var u = e => c.a.createElement(l.a, d({}, e, {
				viewBox: "0 0 16 16"
			}), c.a.createElement("path", {
				d: "M11.829 6.722l1.677-3.145A.802.802 0 0 0 12.8 2.4H3.2a.8.8 0 0 0-.8.8v10.243a.8.8 0 1 0 1.6 0v-2.4h8.8a.799.799 0 0 0 .706-1.176L11.83 6.722z"
			}));

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var m = e => c.a.createElement(l.a, h({}, e, {
				viewBox: "0 0 20 20"
			}), c.a.createElement("g", null, c.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})));

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var p = e => c.a.createElement(l.a, b({}, e, {
					viewBox: "0 0 16 16"
				}), c.a.createElement("path", {
					d: "M7.634 10.034L8.67 9H1.8a.8.8 0 1 1 0-1.6h6.869L7.634 6.366a.8.8 0 1 1 1.132-1.132l2.399 2.4a.8.8 0 0 1 0 1.132l-2.4 2.4a.798.798 0 0 1-1.13 0 .8.8 0 0 1 0-1.132zM12.2 1c1.323 0 2.4 1.077 2.4 2.4V13c0 1.323-1.077 2.4-2.4 2.4H6.6A2.403 2.403 0 0 1 4.2 13v-.8a.8.8 0 1 1 1.6 0v.8c0 .44.358.8.8.8h5.6a.8.8 0 0 0 .8-.8V3.4a.8.8 0 0 0-.8-.8H6.6a.8.8 0 0 0-.8.8v.8a.8.8 0 1 1-1.6 0v-.8C4.2 2.077 5.277 1 6.6 1h5.6z",
					fillRule: "evenodd"
				})),
				g = n("./src/chat/icons/svgs/Trash/index.tsx"),
				O = n("./src/chat/controls/Button/index.m.less"),
				f = n.n(O);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const C = o.a.a("Button", f.a),
				E = o.a.button("Button", f.a),
				_ = o.a.button("MessageIconButton", f.a),
				v = e => {
					const t = Object(r.a)({
							[f.a.primaryStyles]: e.primary,
							[f.a.secondaryStyles]: e.secondary,
							[f.a.primaryNoBorder]: e.primaryNoBorder,
							[f.a.warningNoBorder]: e.warningNoBorder,
							[f.a.secondaryNoBorder]: e.secondaryNoBorder
						}, e.className),
						n = {
							height: e.height || void 0,
							width: e.width || void 0
						};
					return e.href ? c.a.createElement(C, {
						href: e.href,
						target: i.c.BLANK,
						rel: i.b,
						title: e.title,
						className: t,
						tabIndex: 0,
						style: n
					}, e.children) : c.a.createElement(E, {
						type: e.type || "button",
						tabIndex: 0,
						id: e.id,
						className: t,
						onClick: e.onClick,
						disabled: e.disabled,
						title: e.title,
						style: n
					}, e.children)
				},
				y = o.a.wrapped(v, "IconButton", f.a),
				I = e => c.a.createElement(_, j({}, e, {
					title: a.fbt._("Report message", null, {
						hk: "2XKeNq"
					})
				}), c.a.createElement(u, null)),
				x = e => c.a.createElement(_, j({}, e, {
					title: a.fbt._("Delete message", null, {
						hk: "Z4Zm0"
					})
				}), c.a.createElement(g.a, null)),
				S = e => c.a.createElement(_, j({}, e, {
					title: a.fbt._("Block user", null, {
						hk: "1A4DCU"
					})
				}), c.a.createElement(m, null)),
				N = e => c.a.createElement(_, j({}, e, {
					title: a.fbt._("Kick user", null, {
						hk: "5PnyH"
					})
				}), c.a.createElement(p, null))
		},
		"./src/chat/controls/ChannelNameInput/index.m.less": function(e, t, n) {
			e.exports = {
				Input: "_2BjAxRl-BYxJgVcYmAQUKV",
				input: "_2BjAxRl-BYxJgVcYmAQUKV",
				NameInput: "_3vihSysDa9MEMS9CcMWUiN",
				nameInput: "_3vihSysDa9MEMS9CcMWUiN"
			}
		},
		"./src/chat/controls/Checkbox/DeleteAllMessages.m.less": function(e, t, n) {
			e.exports = {
				Trash: "_11Lf6AEz-o69r4zfyrdiER",
				trash: "_11Lf6AEz-o69r4zfyrdiER",
				Checkbox: "VcG-dg580xu2WzudiUZ9a",
				checkbox: "VcG-dg580xu2WzudiUZ9a",
				CheckboxText: "_2oh1le9oaK39_e1ctTejQq",
				checkboxText: "_2oh1le9oaK39_e1ctTejQq",
				CheckboxItem: "_26BHu9RZQUu0OAHm2_nNM0",
				checkboxItem: "_26BHu9RZQUu0OAHm2_nNM0",
				CheckboxDetails: "_1VxTTIdHVZZzqjrdDE7RpN",
				checkboxDetails: "_1VxTTIdHVZZzqjrdDE7RpN"
			}
		},
		"./src/chat/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckInput: "_1_de1ouiEaWxe0lu0R54Zf",
				checkInput: "_1_de1ouiEaWxe0lu0R54Zf",
				Content: "_1RHO7h5PWuKEmC8QD2KnOB",
				content: "_1RHO7h5PWuKEmC8QD2KnOB",
				Control: "aKXv6qpFIjz-_IZOZsYLz",
				control: "aKXv6qpFIjz-_IZOZsYLz",
				HiddenInput: "_3Q1_Do5LHdBSUlaIowvrfb",
				hiddenInput: "_3Q1_Do5LHdBSUlaIowvrfb",
				Checked: "_2rAAUOr_BEoWHcPUCIHPl_",
				checked: "_2rAAUOr_BEoWHcPUCIHPl_",
				Unchecked: "lKC5fIFqmLCg9yYtpR5rw",
				unchecked: "lKC5fIFqmLCg9yYtpR5rw",
				Wrapper: "_1SMteSSKECXjIaZTOLZ2z-",
				wrapper: "_1SMteSSKECXjIaZTOLZ2z-"
			}
		},
		"./src/chat/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Svg/index.tsx"),
				i = n("./src/chat/icons/svgs/Checkbox/checked.m.less"),
				l = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const u = r.a.wrapped(e => s.a.createElement("circle", {
					className: e.className,
					cy: "10",
					cx: "10",
					r: "10"
				}), "StyledCircle", l.a),
				h = r.a.wrapped(e => s.a.createElement("path", {
					className: e.className,
					d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z"
				}), "StyledCheckmark", l.a);
			var m = e => s.a.createElement(o.a, d({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("g", null, s.a.createElement(u, null), s.a.createElement(h, null))),
				b = n("./src/chat/icons/svgs/Checkbox/unchecked.m.less"),
				p = n.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const O = r.a.wrapped(e => s.a.createElement("circle", {
				className: e.className,
				cy: "10",
				cx: "10",
				r: "9"
			}), "StyledCircle", p.a);
			var f = e => s.a.createElement(o.a, g({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("g", null, s.a.createElement(O, null))),
				j = n("./src/chat/controls/Checkbox/index.m.less"),
				C = n.n(j);
			const E = r.a.input("HiddenInput", C.a),
				_ = r.a.wrapped(m, "Checked", C.a),
				v = r.a.wrapped(f, "Unchecked", C.a),
				y = r.a.span("Wrapper", C.a),
				I = r.a.span("Content", C.a),
				x = r.a.span("Control", C.a),
				S = r.a.label("CheckInput", C.a);
			t.a = e => s.a.createElement(S, {
				className: Object(c.a)(e.className, {
					[C.a.checked]: e.checked
				}),
				style: {
					height: e.height || void 0,
					width: e.width || void 0
				}
			}, s.a.createElement(y, null, e.children && !e.rightPosition && s.a.createElement(I, null, e.children), s.a.createElement(x, null, s.a.createElement(E, {
				tabIndex: 0,
				type: e.type || "checkbox",
				checked: e.checked,
				disabled: e.disabled,
				name: e.name,
				value: e.value,
				onChange: e.onChange,
				id: e.id
			}), s.a.createElement(_, null), s.a.createElement(v, null)), e.children && e.rightPosition && s.a.createElement(I, null, e.children)))
		},
		"./src/chat/controls/ContentEditable/index.m.less": function(e, t, n) {
			e.exports = {
				Textarea: "_24sbNUBZcOO5r5rr66_bs4",
				textarea: "_24sbNUBZcOO5r5rr66_bs4"
			}
		},
		"./src/chat/controls/Counter/index.m.less": function(e, t, n) {
			e.exports = {
				Counter: "_29dC2XgR_0UoDAMGqRjcN3",
				counter: "_29dC2XgR_0UoDAMGqRjcN3",
				count: "_3DpJiXpzJYYt_dzquncBNg",
				UnreadCounter: "MkRbNWPhGFV272x8SVGyf",
				unreadCounter: "MkRbNWPhGFV272x8SVGyf"
			}
		},
		"./src/chat/controls/Counter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Counter/index.m.less"),
				i = n.n(o);
			const l = e => s.a.createElement("span", {
					className: e.className
				}, e.count ? e.count : ""),
				d = r.a.wrapped(l, "Counter", i.a),
				u = e => {
					let {
						className: t,
						count: n
					} = e;
					return s.a.createElement(d, {
						className: Object(c.a)(t, {
							[i.a.count]: !!n && n < 0
						}),
						count: n
					})
				};
			u.displayName = "Counter";
			const h = r.a.wrapped(l, "UnreadCounter", i.a),
				m = e => {
					let {
						className: t,
						count: n
					} = e;
					return s.a.createElement(h, {
						className: Object(c.a)(t, {
							[i.a.count]: !n
						}),
						count: n
					})
				};
			m.displayName = "UnreadCounter"
		},
		"./src/chat/controls/Dropdown/Row.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "qKe4d1r36F9OOtq-XhVf9",
				iconWrapper: "qKe4d1r36F9OOtq-XhVf9",
				Text: "_1QLRzzdhJM_LEu2w38yEOx",
				text: "_1QLRzzdhJM_LEu2w38yEOx",
				Component: "tN3ccVHcnPD-hU9Iy1MAV",
				component: "tN3ccVHcnPD-hU9Iy1MAV",
				selected: "_1yVvFtI4g78_7OjOGhP26K"
			}
		},
		"./src/chat/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.tsx"),
				i = n("./src/chat/controls/Dropdown/Row.m.less"),
				l = n.n(i);
			const d = r.a.div("IconWrapper", l.a),
				u = r.a.span("Text", l.a);
			t.a = r.a.wrapped(e => s.a.createElement(o.a, {
				id: e.id,
				className: Object(c.a)(e.className, {
					[l.a.selected]: e.isSelected
				}),
				onClick: e.onClick ? e.onClick : () => {},
				role: "button"
			}, e.children && s.a.createElement(d, null, e.children), s.a.createElement(u, null, e.displayText)), "Component", l.a)
		},
		"./src/chat/controls/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_1W4rx6zj3WfNob8r3IC3NP",
				component: "_1W4rx6zj3WfNob8r3IC3NP"
			}
		},
		"./src/chat/controls/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/actions/tooltip.ts"),
				i = n("./src/chat/controls/Dropdown/index.m.less"),
				l = n.n(i);
			class d extends a.Component {
				constructor(e) {
					super(e), this.elem = s.a.createRef(), this.handleClick = this.handleClick.bind(this), this.handleClickInside = this.handleClickInside.bind(this), this.handleClickOutside = this.handleClickOutside.bind(this)
				}
				componentDidMount() {
					document.addEventListener("mousedown", this.handleClick, !0)
				}
				componentWillUnmount() {
					document.removeEventListener("mousedown", this.handleClick, !0)
				}
				handleClick(e) {
					const t = this.elem.current,
						n = e.target;
					t && n instanceof Node && t.contains(n) ? this.handleClickInside() : this.handleClickOutside()
				}
				handleClickInside() {}
				handleClickOutside() {
					this.props.closeOnClickOutside && this.props.closeTooltip()
				}
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement("div", {
						ref: this.elem,
						className: e.className,
						style: e.style
					}, e.children)
				}
			}
			const u = Object(c.b)(void 0, e => ({
				closeTooltip: () => e(Object(o.d)())
			}))(d);
			t.a = r.a.wrapped(u, "Component", l.a)
		},
		"./src/chat/controls/InviteExpander/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonContainer: "_1E2gGzB9EsGIHhxladNCYq",
				buttonContainer: "_1E2gGzB9EsGIHhxladNCYq",
				LoadingIndicator: "_23MdJl-7rahZ1WGq4-EqCa",
				loadingIndicator: "_23MdJl-7rahZ1WGq4-EqCa"
			}
		},
		"./src/chat/controls/MediaObject/index.m.less": function(e, t, n) {
			e.exports = {
				MediaObject: "Q7TqGkVgPLQj2DDlAsN1q",
				mediaObject: "Q7TqGkVgPLQj2DDlAsN1q"
			}
		},
		"./src/chat/controls/Overlay/index.m.less": function(e, t, n) {
			e.exports = {
				Content: "_2JIrSX2iUneCfhMGppuv22",
				content: "_2JIrSX2iUneCfhMGppuv22",
				Overlay: "_249eIqU0mX7GU1qrI9k3F3",
				overlay: "_249eIqU0mX7GU1qrI9k3F3"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "jKsK0jQWRidPglQ7Czk8y",
				button: "jKsK0jQWRidPglQ7Czk8y",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				primary: "_3fM86Pr7r-ObXeea2Dms_o"
			}
		},
		"./src/chat/controls/OverlayHeader/index.m.less": function(e, t, n) {
			e.exports = {
				BaseMessageStyles: "_1E1yA4seaLlh26LjsJZ5DE",
				baseMessageStyles: "_1E1yA4seaLlh26LjsJZ5DE",
				Header: "_3scCev7HurKBoQph3rzCoU",
				header: "_3scCev7HurKBoQph3rzCoU",
				Title: "_3A0guGtMzQKVwbvpqNB97u",
				title: "_3A0guGtMzQKVwbvpqNB97u",
				Normal: "_1Aqcks07FlOaxti1O-onw7",
				normal: "_1Aqcks07FlOaxti1O-onw7",
				Warning: "_14Pn1s4X6btpX11HaKT9P2",
				warning: "_14Pn1s4X6btpX11HaKT9P2"
			}
		},
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Svg/index.m.less"),
				i = n.n(o);
			t.a = r.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: a,
						hover: r
					} = e;
				return s.a.createElement("svg", {
					className: Object(c.a)(e.className, {
						[i.a.disable]: n,
						[i.a.active]: a,
						[i.a.hover]: !!r
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", i.a)
		},
		"./src/chat/controls/TextButton.m.less": function(e, t, n) {
			e.exports = {
				TextButton: "_30dIx1oZvFQY2tAjC92QzC",
				textButton: "_30dIx1oZvFQY2tAjC92QzC",
				hidden: "_7speb72Hh-rLLikXCbOWJ"
			}
		},
		"./src/chat/controls/TimeStamp/index.m.less": function(e, t, n) {
			e.exports = {
				TimeStamp: "_17YpjmUgvP6IL4c_hNW34t",
				timeStamp: "_17YpjmUgvP6IL4c_hNW34t"
			}
		},
		"./src/chat/controls/Title/index.m.less": function(e, t, n) {
			e.exports = {
				Title: "_2oXQ8aRcV_k61wDVT-T8Be",
				title: "_2oXQ8aRcV_k61wDVT-T8Be",
				bold: "_29EQzGGchWdTfIUCkc3hT6"
			}
		},
		"./src/chat/customMiddleware/heartbeat.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/chat/constants/container.ts"),
				s = n("./src/chat/tracking/sendEvent.ts"),
				c = n("./src/telemetry/models/Event.ts"),
				r = n("./src/chat/tracking/fields/common.ts");
			const o = e => {
				Object(s.a)(Object.assign({
					noun: "timing",
					source: c.b.Global,
					action: c.a.Heartbeat
				}, Object(r.a)(e)))
			};
			var i = n("./src/lib/constants/index.ts");
			t.a = e => {
				let t = e.getState();
				o(t);
				const n = () => {
					setTimeout(() => {
						const {
							size: e
						} = t.container;
						e !== a.a.EMBED && e !== a.a.FULL || !document.hasFocus() || o(t), n()
					}, 30 * i.Fb)
				};
				return n(), n => a => {
					const s = n(a);
					return t = e.getState(), s
				}
			}
		},
		"./src/chat/customMiddleware/iframeDispatcher.ts": function(e, t, n) {
			"use strict";
			var a, s = n("./node_modules/lodash/once.js"),
				c = n.n(s),
				r = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				i = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/postParentMessage/index.ts"),
				d = n("./src/chat/actions/channel.ts"),
				u = n("./src/chat/actions/container.ts"),
				h = n("./src/chat/actions/message/unreadCount.ts"),
				m = n("./src/chat/actions/promo/index.ts"),
				b = n("./src/chat/constants/container.ts"),
				p = n("./src/chat/customMiddleware/noop.ts"),
				g = n("./src/chat/helpers/unreadCount.ts"),
				O = n("./src/chat/helpers/urls/index.ts"),
				f = n("./src/chat/selectors/promos.ts"),
				j = n("./src/chat/tracking/events/platform.ts");
			! function(e) {
				e.Navigate = "navigate.chat", e.Websocket = "websocket.chat", e.Expand = "expand.chat", e.UnreadCount = "unreadCount.chat"
			}(a || (a = {}));
			const C = e => t => {
					const n = (e => {
						try {
							return "object" == typeof e.data ? e.data : JSON.parse(e.data)
						} catch (t) {
							return
						}
					})(t);
					if (n) switch (n.type) {
						case a.Navigate: {
							const t = Object(o.parse)(n.data.href).pathname || O.rootUrl;
							e.dispatch(Object(r.b)(t)), e.dispatch(Object(u.sizeChanged)(b.a.EMBED));
							break
						}
						case a.Websocket:
							e.dispatch(Object(h.b)());
							break;
						case a.Expand: {
							const t = e.getState();
							e.dispatch(Object(u.sizeChanged)(b.a.EMBED));
							const a = t.platform.currentPage;
							a && a.meta && a.meta.name === i.Bb.CHAT_MINIMIZE && e.dispatch(Object(d.O)());
							const {
								action: s,
								noun: c,
								source: r
							} = n.data.telemetry;
							Object(j.a)(t, c, r, s);
							break
						}
					}
				},
				E = c()(e => {
					window.addEventListener("message", C(e)), window.navigator.serviceWorker.addEventListener("message", C(e))
				});
			t.a = e => "undefined" == typeof window ? p.a : (window.addEventListener("load", () => {
				E(e)
			}), t => n => {
				switch (n.type) {
					case m.a:
					case h.a: {
						const t = Object(f.b)(e.getState()),
							s = Object.assign({}, n.payload),
							{
								unread: c,
								count: r
							} = Object(g.a)(s, t);
						Object(l.a)({
							type: a.UnreadCount,
							data: {
								unread: c,
								count: r
							}
						})
					}
				}
				return t(n)
			})
		},
		"./src/chat/customMiddleware/loggedOutPreferencesSync.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/pick.js"),
				s = n.n(a),
				c = n("./src/chat/actions/theme.ts"),
				r = n("./node_modules/@reddit/onetrust-integration/dist/esm/index.js"),
				o = n("./node_modules/Base64/base64.js"),
				i = n("./node_modules/icepick/icepick.js"),
				l = n("./node_modules/js-cookie/src/js.cookie.js"),
				d = n.n(l),
				u = n("./src/lib/permanentCookieOptions.ts");
			const h = "USER";

			function m(e) {
				const t = function() {
						const e = d.a.get(h);
						if (e) try {
							return JSON.parse(Object(o.atob)(e))
						} catch (t) {
							0
						}
					}(),
					n = Object(i.merge)(t || {}, e),
					a = new Date;
				a.setFullYear(a.getFullYear() + 2), Object(r.b)(h, btoa(JSON.stringify(n)), Object(u.a)(2))
			}
			const b = new Set([c.THEME_CHANGED]);
			t.a = e => t => n => {
				const a = t(n);
				if (b.has(n.type)) {
					const t = e.getState().user;
					m({
						prefs: s()(t.prefs, ["layout", "globalTheme", "subscriptionsPinned"])
					})
				}
				return a
			}
		},
		"./src/chat/customMiddleware/sendbirdToken.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/defer.js"),
				s = n.n(a),
				c = n("./src/lib/constants/index.ts"),
				r = n("./src/chat/actions/channel.ts"),
				o = n("./src/chat/actions/container.ts"),
				i = n("./src/chat/actions/message/unreadCount.ts"),
				l = n("./src/chat/actions/platform.ts"),
				d = n("./src/chat/actions/sendbird/index.ts"),
				u = n("./src/chat/actions/sendbird/config.ts"),
				h = n("./src/chat/actions/sendbird/sdk.ts"),
				m = n("./src/chat/actions/session.ts"),
				b = n("./src/chat/constants/container.ts"),
				p = n("./src/chat/constants/sendbird.ts"),
				g = n("./src/chat/customMiddleware/noop.ts"),
				O = n("./src/chat/selectors/platform.ts"),
				f = n("./src/chat/selectors/sendbird.ts");
			const j = (e, t) => {
				const n = t && t.type === o.SIZE_CHANGED ? t.payload : e.container.size,
					a = n === b.a.MINIMIZED || n === b.a.HIDDEN,
					s = t && t.type === l.a ? t.payload && t.payload.routeMatch && t.payload.routeMatch.route.meta.name === c.Bb.CHAT_MINIMIZE : e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name === c.Bb.CHAT_MINIMIZE;
				return !a && s
			};
			t.a = e => {
				if ("undefined" == typeof window) return g.a;
				let t;
				const n = () => {
					const {
						session: n
					} = e.getState().sendbird;
					n.expires && n.active ? (n => {
						const a = new Date,
							s = new Date(n.expires || 0),
							c = Math.floor(.9 * (s.getTime() - a.getTime()));
						t = setTimeout(() => {
							e.dispatch(Object(d.m)())
						}, c)
					})(n) : s()(() => e.dispatch(Object(d.m)()))
				};
				let a;
				Object(O.a)(e.getState()) === c.Bb.CHAT_MINIMIZE ? s()(async () => {
					j(e.getState()) ? n() : (await e.dispatch(Object(d.m)(!1)), e.getState().sendbird.session.token && await e.dispatch(Object(i.b)()))
				}) : n();
				return i => g => {
					const O = e.getState(),
						C = Object(f.a)(O) === p.b.Closed,
						E = Object(f.e)(O);
					switch (g.type) {
						case o.SIZE_CHANGED: {
							if (!g.payload) break;
							const t = g.payload !== b.a.MINIMIZED && g.payload !== b.a.HIDDEN;
							t && (clearTimeout(a), a = null), C && t && !E && n(), !E || g.payload !== b.a.HIDDEN && g.payload !== b.a.MINIMIZED || (a = setTimeout(() => {
								e.dispatch(Object(h.f)())
							}, 10 * c.eb));
							break
						}
						case l.a: {
							const t = j(O, g);
							C && t ? n() : t && e.dispatch(Object(r.O)());
							break
						}
						case d.h:
							if (!g.payload) break;
							if (!g.payload.active) break;
							s()(async () => {
								if (await e.dispatch(Object(u.d)()), g.payload && g.payload.token) {
									const {
										token: t
									} = g.payload;
									await e.dispatch(Object(h.e)(t))
								}
							});
							break;
						case m.b:
							e.dispatch(Object(h.f)()), clearTimeout(t), clearTimeout(a), t = null, a = null
					}
					return i(g)
				}
			}
		},
		"./src/chat/customMiddleware/title.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var a = n("./src/chat/actions/message/unreadCount.ts"),
				s = n("./src/chat/customMiddleware/noop.ts"),
				c = n("./src/chat/helpers/errors.ts"),
				r = n("./src/chat/selectors/app.ts");
			const o = /^\([\d*]+?\)\s+/,
				i = e => {
					const t = null === window || void 0 === window ? void 0 : window.navigator;
					if (t && "setAppBadge" in t && "clearAppBadge" in t) {
						(e >= 0 ? t.setAppBadge(e) : t.clearAppBadge()).catch(e => Object(c.b)(e))
					}
				};
			t.a = e => {
				return "undefined" != typeof window ? t => n => {
					const s = t(n),
						c = e.getState();
					if (!Object(r.d)(c) && n.type === a.a) {
						const {
							basicChannelCount: e,
							subredditChannelCount: t
						} = n.payload;
						((e, t) => {
							var n, a;
							const s = null === (a = null === (n = null === window || void 0 === window ? void 0 : window.document) || void 0 === n ? void 0 : n.title) || void 0 === a ? void 0 : a.replace(o, "");
							e > 0 ? (i(e), window.document.title = "(".concat(e, ") ").concat(s)) : t > 0 ? (i(1), window.document.title = "(*) ".concat(s)) : (i(0), window.document.title = s)
						})(e, t)
					}
					return s
				} : s.a
			}
		},
		"./src/chat/customMiddleware/tokenRefresher.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/throttle.js"),
				s = n.n(a),
				c = n("./src/lib/constants/index.ts"),
				r = n("./src/chat/actions/channel.ts"),
				o = n("./src/chat/actions/session.ts"),
				i = n("./src/chat/helpers/errors.ts");
			const l = 5 * c.eb;
			t.a = e => {
				const t = s()(() => {
					e.dispatch(Object(o.d)())
				}, l);
				let n, a;
				const c = () => {
						const n = e.getState().user.session;
						if (!n || !a) return;
						const s = new Date(n.expires),
							c = a + Math.floor(.8 * (s.getTime() - a));
						Date.now() > c && t && t()
					},
					d = e => {
						a = Date.now();
						const s = new Date(e.expires).getTime() - a,
							c = .8 + .1 * Math.random(),
							r = Math.min(Math.floor(c * e.expiresIn * 1e3), Math.floor(c * s));
						n = setTimeout(t, r)
					},
					u = e.getState();
				u.user.session && d(u.user.session);
				try {
					window.parent.addEventListener("focus", c), window.parent.addEventListener("touchend", c), document.body.addEventListener("mouseenter", c)
				} catch (h) {
					Object(i.b)("Token Refresher Error: ".concat(h))
				}
				return e => t => (t.type !== o.a && t.type !== o.c || d(t.payload), t.type === r.v && c(), t.type === o.b && (clearTimeout(n), n = null), e(t))
			}
		},
		"./src/chat/customMiddleware/tracking.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/once.js"),
				s = n.n(a),
				c = n("./src/lib/logs/timing.js"),
				r = n("./src/chat/actions/channel.ts"),
				o = n("./src/chat/actions/message/index.ts"),
				i = n("./src/chat/actions/platform.ts"),
				l = n("./src/chat/actions/sendbird/index.ts"),
				d = n("./src/chat/actions/sidebar.ts"),
				u = n("./src/chat/constants/channels.ts"),
				h = n("./src/chat/constants/sidebar.ts"),
				m = n("./src/chat/selectors/channels.ts"),
				b = n("./src/chat/selectors/platform.ts"),
				p = n("./src/chat/tracking/sendEvent.ts"),
				g = n("./src/telemetry/models/Event.ts"),
				O = n("./src/telemetry/models/Timer.ts"),
				f = n("./src/chat/tracking/fields/chat.ts"),
				j = n("./src/chat/tracking/fields/common.ts");
			const C = e => ({
					type: e
				}),
				E = e => ({
					millis: e
				});
			var _ = n("./src/chat/tracking/events/chatPreview.ts"),
				v = n("./src/chat/tracking/events/chatView.ts"),
				y = n("./src/chat/tracking/events/contactsList.ts"),
				I = n("./src/chat/tracking/events/invitationInbox.ts"),
				x = n("./src/chat/tracking/events/messagesInbox.ts");
			const S = s()((e, t) => ((e, t) => {
					Object(p.a)(Object.assign({
						noun: "inbox_new",
						source: g.b.ChatPerformance,
						action: g.a.Load,
						chat: Object.assign(Object.assign({}, Object(f.p)(e)), Object(f.r)(e)),
						timer: Object.assign(Object.assign({}, C(O.TimerType.ChatLoadInboxNew)), E(t))
					}, Object(j.a)(e)))
				})(e, (e => Date.now() - e)(t))),
				N = s()(e => Object(b.d)(e) && k(e)),
				k = e => {
					e.sidebarTabs.activeIndex === h.a.DirectChannels ? Object(x.e)(e) : Object(x.f)(e)
				},
				w = Object(c.c)((e, t, n) => {
					Object(m.N)(e) ? ((e, t) => {
						Object(p.a)(Object.assign({
							noun: "channel_cached",
							source: g.b.ChatPerformance,
							action: g.a.Load,
							chat: Object.assign({}, Object(f.g)(e)),
							timer: Object.assign(Object.assign({}, C(O.TimerType.ChatLoadChannelCached)), E(t))
						}, Object(j.a)(e)))
					})(t, n) : ((e, t) => {
						Object(p.a)(Object.assign({
							noun: "channel_new",
							source: g.b.ChatPerformance,
							action: g.a.Load,
							chat: Object.assign({}, Object(f.g)(e)),
							timer: Object.assign(Object.assign({}, C(O.TimerType.ChatLoadChannelNew)), E(t))
						}, Object(j.a)(e)))
					})(t, n)
				}),
				T = e => {
					Object(b.c)(e) === u.a.CREATE && Object(y.g)(e)
				};
			t.a = e => t => n => a => {
				const s = n(a),
					c = t.getState();
				switch (a.type) {
					case i.a:
						S(c, e), T(c);
						break;
					case r.p:
						w(c, !0);
						break;
					case r.r:
						T(c), N(c);
						break;
					case r.q:
						S(c, e), (e => {
							Object(b.c)(e) === u.a.VIEW_INVITE && Object(I.j)(e)
						})(c), (e => Object(b.g)(e) && Object(v.c)(e))(c), w(c), (e => {
							Object(b.c)(e) === u.a.VIEW_JOIN && Object(_.b)(e)
						})(c);
						break;
					case o.l:
					case l.c:
						S(c, e);
						break;
					case d.b:
						k(c)
				}
				return s
			}
		},
		"./src/chat/customMiddleware/unreadMessageCount.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/debounce.js"),
				s = n.n(a),
				c = n("./src/chat/actions/message/unreadCount.ts"),
				r = n("./src/chat/customMiddleware/noop.ts"),
				o = n("./src/lib/cache/index.ts"),
				i = n("./src/lib/constants/index.ts");
			let l, d;
			const u = s()(e => {
				Object(o.c)(l, e, 5 * i.eb)
			}, 5 * i.Fb, {
				leading: !1,
				trailing: !0
			});
			let h;
			const m = () => {
				h && clearInterval(h), h = setInterval(() => {
					void 0 === Object(o.a)(l) && Object(c.b)()
				}, 5 * i.eb)
			};
			t.a = e => {
				if ("undefined" == typeof window) return r.a;
				const t = e.getState(),
					{
						user: {
							account: n
						}
					} = t,
					a = n && n.id || "unknown";
				l = Object(o.b)(i.o.CHAT, "unread_message_count", a), u(t.messages.unread.basicChannelCount), m();
				try {
					window.parent.addEventListener("focus", m)
				} catch (s) {}
				return e => t => {
					const n = e(t);
					switch (t.type) {
						case c.a: {
							const {
								basicChannelCount: e
							} = t.payload;
							e !== d && u(e);
							break
						}
					}
					return n
				}
			}
		},
		"./src/chat/endpoints/accounts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts");
			const c = async e => Object(s.a)(e, {
				endpoint: "".concat(e.apiUrl, "/api/v1/me"),
				method: a.db.GET,
				data: {
					raw_json: 1
				}
			}), r = async (e, t) => Object(s.a)(e, {
				data: {
					account_id: t,
					raw_json: 1
				},
				endpoint: "".concat(e.apiUrl, "/api/block_user"),
				method: a.db.POST
			}), o = async (e, t) => Object(s.a)(e, {
				endpoint: "".concat(e.apiUrl, "/user/").concat(t, "/about"),
				method: a.db.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/chat/endpoints/users/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return h
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				r = n("./src/reddit/constants/headers.ts"),
				o = n("./src/chat/models/Message/report.ts");
			const i = (e, t) => Object(s.a)(e, {
					method: a.db.POST,
					endpoint: "".concat(e.apiUrl, "/api/report_user"),
					data: {
						reason: t.reason,
						user: t.userNickname
					}
				}),
				l = (e, t, n) => {
					const c = Object(o.c)(t, n);
					return Object(s.a)(e, {
						method: a.db.POST,
						endpoint: "".concat(e.apiUrl, "/api/report_user"),
						data: {
							details: JSON.stringify(c),
							reason: t.reason,
							user: t.userNickname
						}
					})
				},
				d = (e, t) => Object(s.a)(e, {
					method: a.db.GET,
					endpoint: "".concat(e.apiUrl, "/api/user_data_by_account_ids"),
					data: {
						raw_json: 1,
						ids: t.join(",")
					}
				}),
				u = e => Object(s.a)(e, {
					method: a.db.GET,
					endpoint: "".concat(e.apiUrl, "/prefs/blocked.json")
				}),
				h = e => Object(s.a)(Object(c.a)(e, [r.a]), {
					method: a.db.POST,
					endpoint: "".concat(e.apiUrl, "/api/seen_subreddit_chat_ftux")
				})
		},
		"./src/chat/helpers/chatSelector.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				c = n("./node_modules/reselect/es/index.js");
			const r = Object(c.b)(c.d, s.a),
				o = e => Object(c.c)(e, r)
		},
		"./src/chat/helpers/dom.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			}));
			const a = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				s = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/chat/helpers/linkParser/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/es6.regexp.match.js");
			var a = n("./src/lib/linkMatchers/index.ts");
			const s = e => !!a.e.test(e),
				c = (e, t, n) => {
					const a = [];
					let s = 0;
					return t.forEach(t => {
						let {
							index: c,
							lastIndex: r,
							text: o,
							url: i,
							schema: l
						} = t;
						const d = "mailto:" === l ? "_self" : "_blank";
						a.push(e.substring(s, c)), a.push(n(i, o, d, l, "link-".concat(c, "-").concat(o))), s = r
					}), a.push(e.substring(s, e.length)), a
				},
				r = /^(((file|https?|ftps?):)?\/|mailto:)/i,
				o = e => {
					if (void 0 === e) return e;
					return e.match(r) ? e : "#"
				};
			t.a = (e, t, n) => {
				const s = Object(a.b)(e, t);
				return s && s.length ? c(e, s, n) : e
			}
		},
		"./src/chat/icons/Loader/index.m.less": function(e, t, n) {
			e.exports = {
				Square: "_1o-ux8CJI01lsz3U88wukN",
				square: "_1o-ux8CJI01lsz3U88wukN",
				LoadingIcon: "_2aBU27Uc0L10Q-sondXGQo",
				loadingIcon: "_2aBU27Uc0L10Q-sondXGQo",
				Wrapper: "_2zstkXjlzum5VrIXwJ_LbE",
				wrapper: "_2zstkXjlzum5VrIXwJ_LbE"
			}
		},
		"./src/chat/icons/Nsfw/index.m.less": function(e, t, n) {
			e.exports = {
				NSFWIcon: "_3tGjpjmj4u2KBLEzbnRoY8",
				nsfwIcon: "_3tGjpjmj4u2KBLEzbnRoY8",
				SmallNSFWIcon: "_1-70BdutOVjeysjfA7hXNi",
				smallNsfwIcon: "_1-70BdutOVjeysjfA7hXNi"
			}
		},
		"./src/chat/icons/Userpic/index.m.less": function(e, t, n) {
			e.exports = {
				FallbackAvatar: "_3fWTn-X4PrDQLucVMSXwyV",
				fallbackAvatar: "_3fWTn-X4PrDQLucVMSXwyV",
				FallbackAvatarWrapper: "_3CFk8xpOzvpvSC_PBxNSK4",
				fallbackAvatarWrapper: "_3CFk8xpOzvpvSC_PBxNSK4",
				SnooIcon: "_1GdxTd_KdBwXGklhIJkGJa",
				snooIcon: "_1GdxTd_KdBwXGklhIJkGJa",
				VoicesAvatar: "_3WnOjkciK_EV9-9Ak459rx",
				voicesAvatar: "_3WnOjkciK_EV9-9Ak459rx"
			}
		},
		"./src/chat/icons/svgs/ChatNew/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/chat/controls/Svg/index.tsx");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(c.a, r({}, e, {
				viewBox: "0 0 16 16"
			}), s.a.createElement("path", {
				d: "M10.625 8.656h-1.97v1.97c0 .36-.293.655-.655.655-.362 0-.656-.293-.656-.655v-1.97h-1.97c-.36 0-.655-.293-.655-.655 0-.362.293-.656.655-.656h1.97v-1.97c0-.36.293-.655.655-.655.362 0 .656.293.656.655v1.97h1.97c.36 0 .655.293.655.655 0 .362-.293.656-.655.656M8 1C4.14 1 1 4.14 1 8c0 1.222.317 2.372.87 3.373l-.824 2.476c-.105.313-.024.66.21.894.167.167.39.256.62.256.09 0 .185-.015.275-.045l2.478-.825c1 .553 2.15.87 3.372.87 3.86 0 7-3.14 7-7s-3.14-7-7-7"
			}))
		},
		"./src/chat/icons/svgs/Checkbox/checked.m.less": function(e, t, n) {
			e.exports = {
				StyledCircle: "_2QEVbfgOdAh_E_UteGSdz9",
				styledCircle: "_2QEVbfgOdAh_E_UteGSdz9",
				StyledCheckmark: "_2hHL8LCEXapDOjiChO0JWH",
				styledCheckmark: "_2hHL8LCEXapDOjiChO0JWH"
			}
		},
		"./src/chat/icons/svgs/Checkbox/unchecked.m.less": function(e, t, n) {
			e.exports = {
				StyledCircle: "_2WDOoyLYNQZODKF6ScpgSO",
				styledCircle: "_2WDOoyLYNQZODKF6ScpgSO"
			}
		},
		"./src/chat/icons/svgs/NavClose/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/chat/controls/Svg/index.tsx");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const o = e => s.a.createElement(c.a, r({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M11.105 9.75l4.114-4.114a.957.957 0 1 0-1.355-1.355L9.75 8.395 5.636 4.281a.957.957 0 1 0-1.355 1.355L8.395 9.75l-4.114 4.114a.957.957 0 1 0 1.355 1.355l4.114-4.114 4.114 4.114a.956.956 0 0 0 1.355 0 .957.957 0 0 0 0-1.355L11.105 9.75z",
				fillRule: "evenodd"
			}));
			o.displayName = "NavClose"
		},
		"./src/chat/icons/svgs/Refresh/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/chat/controls/Svg/index.tsx");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(c.a, r({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M18 9a1 1 0 0 1 1 1v2c0 2.757-2.243 5-5 5H5v1.5a.5.5 0 0 1-.82.384l-3-2.5a.497.497 0 0 1 0-.768l3-2.5A.5.5 0 0 1 5 13.5V15h9c1.654 0 3-1.346 3-3v-2a1 1 0 0 1 1-1zM2 11a1 1 0 0 1-1-1V8c0-2.757 2.243-5 5-5h9V1.5a.5.5 0 0 1 .82-.384l3 2.5a.497.497 0 0 1 0 .768l-3 2.5A.5.5 0 0 1 15 6.5V5H6C4.346 5 3 6.346 3 8v2a1 1 0 0 1-1 1z"
			}))
		},
		"./src/chat/icons/svgs/Trash/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/chat/controls/Svg/index.tsx");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(c.a, r({}, e, {
				viewBox: "0 0 16 16"
			}), s.a.createElement("path", {
				d: "M10.845 11.6c0 .22-.182.4-.407.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.225 0 .407.18.407.4v4.4zm-2.438 0c0 .22-.183.4-.407.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.224 0 .407.18.407.4v4.4zm-2.439 0c0 .22-.182.4-.406.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.224 0 .406.18.406.4v4.4zm6.426-6.8c.225 0 .406.18.406.4v8c0 .662-.547 1.2-1.219 1.2H4.42c-.672 0-1.219-.538-1.219-1.2v-8c0-.22.181-.4.407-.4h8.787zm0-2.4c.224 0 .406.18.406.4v.8c0 .22-.182.4-.407.4H3.606a.403.403 0 0 1-.406-.4v-.8c0-.22.182-.4.406-.4H6.01l.602-.666a.411.411 0 0 1 .304-.134h2.166c.116 0 .226.049.304.134l.602.666h2.404z",
				fillRule: "evenodd"
			}))
		},
		"./src/chat/models/Channel/platform.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var a = n("./src/chat/models/Channel/subreddit.ts"),
				s = n("./src/chat/models/Channel/utils/index.ts"),
				c = n("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				r = n("./src/chat/models/User/inviter.ts"),
				o = n("./src/chat/models/User/member.ts");

			function i(e, t) {
				return {
					channelId: Object(c.a)(e.channel_url),
					channelSendbirdUrl: e.channel_url,
					channelState: Object(s.b)(t),
					fetchingFirstMessage: !1,
					fetchingMessages: !1,
					fetchingMessagesError: !1,
					hasMoreMessages: !1,
					isMessageListLoaded: !1,
					inviter: Object(r.b)(e.inviter),
					coverUrl: e.cover_url,
					createdAt: e.created_at,
					customType: e.custom_type,
					data: e.data,
					maxLengthMessage: -1,
					memberCount: e.member_count,
					name: e.name,
					type: Object(s.d)(e),
					lastMessage: void 0,
					unreadMessageCount: e.unread_message_count,
					unreadMentionCount: e.unread_mention_count,
					members: Object(o.a)(e.members),
					customData: Object(a.d)(e.data)
				}
			}
		},
		"./src/chat/models/Contact/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var a = n("./src/lib/constants/index.ts");

			function s(e) {
				return e ? e.map(r).filter(e => !!e) : []
			}
			const c = 4;

			function r(e) {
				if (e.contact_account_id || e.id) return {
					id: e.contact_account_id || "".concat(a.yb.Account, "_").concat(e.id),
					name: e.name,
					lastInteraction: e.last_interaction,
					created: e.created_utc,
					linkKarma: e.link_karma,
					commentKarma: e.comment_karma,
					profileImg: e.profile_img,
					isNSFW: e.profile_over_18,
					acceptChats: e.accept_chats
				}
			}
			const o = {
				id: "",
				name: "",
				profileImg: "",
				lastInteraction: 0,
				created: 0,
				linkKarma: 0,
				commentKarma: 0,
				isNSFW: !1
			}
		},
		"./src/chat/models/Message/report.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			var a = n("./node_modules/lodash/sortBy.js"),
				s = n.n(a),
				c = n("./src/chat/helpers/errors.ts");
			const r = (e, t) => t && t.sender ? {
					channelUrl: t.channelSendbirdUrl,
					channelType: t.channelType,
					createdAt: t.createdAt,
					customData: t.data,
					customType: t.customType,
					messageBody: t.messageData.value,
					messageId: t.messageId,
					userId: t.sender.userId,
					fileUrl: "",
					reason: e,
					userNickname: t.sender.nickname
				} : Object(c.b)("\n      Error reporting message: ".concat(t && t.messageId, ".\n      The sender is unknown.\n    ")),
				o = (e, t, n) => {
					if (!t || !t.sender) return [];
					const a = s()(n, ["createdAt"]),
						c = a.findIndex(e => {
							let {
								messageId: n
							} = e;
							return n === t.messageId
						}),
						o = Math.max(c - 20, 0),
						i = c + 20;
					return a.slice(o, i).reduce((t, n) => {
						const a = r(e, n);
						return a && t.push(a), t
					}, [])
				},
				i = (e, t) => t ? {
					sendbirdChatMessage: e,
					sendbirdEphemeralChatLog: t
				} : {
					sendbirdChatMessage: e
				}
		},
		"./src/chat/models/ReportFlow/index.ts": function(e, t, n) {
			"use strict";
			var a;
			n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e[e.Default = 0] = "Default", e[e.BlockUser = 1] = "BlockUser", e[e.FileComplaint = 2] = "FileComplaint", e[e.CrisisTextLine = 3] = "CrisisTextLine", e[e.Invite = 4] = "Invite"
				}(a || (a = {}))
		},
		"./src/chat/models/Theme/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var a = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/constants/theme.ts"),
				c = n("./src/reddit/models/Theme/index.ts"),
				r = n("./src/chat/constants/theme.ts"),
				o = n("./src/reddit/constants/colors.ts");
			const {
				REDDIT: i,
				NIGHT: l
			} = s.b, d = e => c.d[e].newRedditTheme, u = {
				activity: {
					icon: {
						default: Object(a.a)(.3, o.a.white),
						active: o.a.op,
						disable: Object(a.a)(.5, o.a.white),
						hover: Object(a.a)(.5, o.a.white),
						contrast: d(i).bodyText,
						nsfw: {
							bg: o.a.black,
							text: o.a.white
						}
					},
					text: {
						regular: d(i).bodyText,
						active: o.a.op,
						fade: Object(a.a)(.4, o.a.white),
						light: d(i).actionIcon,
						warning: o.a.warning,
						highlight: o.a.white,
						success: o.a.approved
					},
					button: {
						active: o.a.alienblue
					},
					send: {
						disable: Object(a.a)(.5, o.a.white),
						hover: Object(a.a)(.08, o.a.op)
					},
					checkbox: {
						checked: o.a.alienblue,
						checkmark: o.a.white,
						unchecked: d(i).body,
						uncheckedBorder: Object(a.a)(.3, o.a.white)
					},
					input: {
						border: o.a.defaultFlair,
						focusColor: o.a.white,
						focusBg: o.a.approved,
						ownerBg: d(i).line,
						color: d(i).bodyText,
						error: o.a.warning,
						channelRename: Object(a.a)(.1, o.a.white)
					},
					link: {
						staticUnderline: o.a.alienblue,
						staticText: o.a.op,
						hoverText: o.a.snoo
					}
				},
				layout: {
					body: d(i).body,
					colsBorder: d(i).line,
					controlsBorder: Object(a.g)(o.a.black, .15),
					header: {
						counterBg: o.a.snoo,
						counterText: o.a.white
					},
					scrollbar: Object(a.a)(.2, o.a.white),
					scrollbarHover: Object(a.a)(.4, o.a.white)
				},
				message: {
					list: {
						item: {
							ownerBg: d(i).inactive,
							button: d(i).actionIcon
						}
					}
				},
				subreddit: {
					iconBg: o.a.alienblue
				},
				sidebar: {
					background: Object(a.g)(Object(a.a)(.3, o.a.white), .1),
					subreddit: {
						background: {
							active: o.a.alienblue,
							hover: d(i).canvas
						}
					},
					basic: {
						background: {
							active: o.a.alienblue,
							hover: d(i).canvas
						}
					},
					text: {
						divider: Object(a.a)(.5, o.a.white)
					}
				},
				toast: {
					pending: o.a.black,
					success: o.a.approved
				}
			}, h = {
				activity: {
					icon: {
						default: Object(a.a)(.3, o.a.white),
						active: o.a.op,
						disable: Object(a.a)(.5, o.a.white),
						hover: Object(a.a)(.5, o.a.white),
						contrast: Object(a.a)(.4, d(l).bodyText),
						nsfw: {
							bg: o.a.black,
							text: o.a.white
						}
					},
					text: {
						regular: d(l).bodyText,
						active: o.a.op,
						fade: Object(a.a)(.4, o.a.white),
						light: d(l).actionIcon,
						warning: o.a.warning,
						highlight: o.a.white,
						success: o.a.approved
					},
					button: {
						active: o.a.alienblue
					},
					send: {
						disable: Object(a.a)(.5, o.a.white),
						hover: Object(a.a)(.08, o.a.op)
					},
					checkbox: {
						checked: o.a.alienblue,
						checkmark: o.a.white,
						unchecked: d(l).body,
						uncheckedBorder: Object(a.a)(.3, o.a.white)
					},
					input: {
						border: o.a.defaultFlair,
						focusColor: o.a.white,
						focusBg: o.a.approved,
						ownerBg: d(l).line,
						color: d(l).bodyText,
						error: o.a.warning,
						channelRename: Object(a.a)(.1, o.a.white)
					},
					link: {
						staticUnderline: o.a.alienblue,
						staticText: o.a.op,
						hoverText: o.a.snoo
					}
				},
				layout: {
					body: d(l).body,
					colsBorder: d(l).line,
					controlsBorder: Object(a.g)(o.a.white, .15),
					header: {
						counterBg: o.a.snoo,
						counterText: o.a.white
					},
					scrollbar: Object(a.a)(.2, d(l).bodyText),
					scrollbarHover: Object(a.a)(.1, d(l).bodyText)
				},
				message: {
					list: {
						item: {
							ownerBg: d(l).inactive,
							button: d(l).actionIcon
						}
					}
				},
				subreddit: {
					iconBg: o.a.alienblue
				},
				sidebar: {
					background: Object(a.g)(Object(a.a)(.4, o.a.white), .1),
					subreddit: {
						background: {
							active: o.a.alienblue,
							hover: Object(a.h)(.2, d(l).canvas)
						}
					},
					basic: {
						background: {
							active: o.a.alienblue,
							hover: Object(a.h)(.2, d(l).canvas)
						}
					},
					text: {
						divider: Object(a.a)(.5, o.a.white)
					}
				},
				toast: {
					pending: o.a.black,
					success: o.a.approved
				}
			}, m = {
				[r.b.REDDIT]: u,
				[r.b.NIGHT]: h
			}
		},
		"./src/chat/models/User/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/convertToCamelCase/index.ts");
			const c = "".concat(a.yb.Account, "_"),
				r = e => {
					const t = {};
					for (const n in e) t[n] = o(Object.assign(Object.assign({}, e[n]), {
						id: n
					}));
					return t
				};

			function o(e) {
				return {
					id: e.id,
					name: e.name,
					created: e.created_utc,
					linkKarma: e.link_karma,
					commentKarma: e.comment_karma,
					profileImg: e.profile_img,
					isNSFW: e.profile_over_18
				}
			}
			const i = e => {
				const t = (e => (e && e.id && (e.id.includes(c) ? e.id = e.id : e.id = c + e.id), e))(e);
				return Object(s.a)(t)
			}
		},
		"./src/chat/reducers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return zt
			}));
			var a = n("./node_modules/redux/es/redux.js"),
				s = n("./src/chat/actions/channel.ts");
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.r:
							return !0;
						default:
							return e
					}
				},
				r = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/uniq.js")),
				o = n.n(r),
				i = n("./src/chat/models/Channel/index.ts"),
				l = n("./src/chat/models/Channel/utils/index.ts");
			const d = {
				fetchingChannels: !1,
				hasMoreChannels: !1,
				sortedKeys: []
			};
			var u = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.h:
						return Object.assign(Object.assign({}, e), {
							fetchingChannels: !0
						});
					case s.i:
						return Object.assign(Object.assign({}, e), {
							fetchingChannels: !1
						});
					case s.a: {
						const {
							channels: n,
							hasMoreChannels: a
						} = t.payload, s = Object(l.c)(n, [i.a.Direct, i.a.Group]);
						if (!s) return e;
						const c = Object.keys(s),
							r = a && !!c.length;
						return Object.assign(Object.assign({}, e), {
							fetchingChannels: !1,
							hasMoreChannels: r,
							sortedKeys: [...e.sortedKeys, ...c]
						})
					}
					case s.s: {
						const {
							channelId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						})
					}
					case s.u:
					case s.m: {
						const {
							channelId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						})
					}
					case s.x: {
						const n = t.payload.channel.channelId;
						return e.sortedKeys.indexOf(n) > -1 ? Object.assign(Object.assign({}, e), {
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						}) : e
					}
					case s.w: {
						const {
							channel: n
						} = t.payload;
						return e.sortedKeys.includes(n.channelId) ? e : Object.assign(Object.assign({}, e), {
							sortedKeys: o()([n.channelId, ...e.sortedKeys])
						})
					}
					default:
						return e
				}
			};
			var h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.c:
						return !1;
					case s.g:
						return !0;
					default:
						return e
				}
			};
			var m = n("./src/chat/actions/message/index.ts");
			const b = {
				fetchingChannels: !1,
				hasMoreChannels: !0,
				sortedKeys: []
			};
			var p = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.j:
							return Object.assign(Object.assign({}, e), {
								fetchingChannels: !0
							});
						case s.k:
							return Object.assign(Object.assign({}, e), {
								fetchingChannels: !1
							});
						case s.b: {
							const {
								channels: n,
								hasMoreChannels: a
							} = t.payload, s = Object(l.c)(n, [i.a.Direct, i.a.Group]);
							if (!s) return e;
							const c = Object.keys(s),
								r = a && !!c.length;
							return Object.assign(Object.assign({}, e), {
								fetchingChannels: !1,
								hasMoreChannels: r,
								sortedKeys: [...e.sortedKeys, ...c]
							})
						}
						case s.u:
						case s.m: {
							const {
								channelId: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								sortedKeys: e.sortedKeys.filter(e => e !== n)
							})
						}
						case s.s: {
							const {
								channelId: n
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								sortedKeys: [n, ...e.sortedKeys]
							})
						}
						case s.f: {
							const n = Object.keys(t.payload);
							return Object.assign(Object.assign({}, e), {
								sortedKeys: o()([...n, ...e.sortedKeys])
							})
						}
						case s.t:
						case m.a: {
							const {
								channelId: n
							} = t.payload;
							return e.sortedKeys.includes(n) ? Object.assign(Object.assign({}, e), {
								sortedKeys: o()([n, ...e.sortedKeys])
							}) : e
						}
						default:
							return e
					}
				},
				g = n("./node_modules/lodash/first.js"),
				O = n.n(g),
				f = n("./node_modules/lodash/forEach.js"),
				j = n.n(f),
				C = n("./node_modules/lodash/omit.js"),
				E = n.n(C),
				_ = n("./node_modules/lodash/reduce.js"),
				v = n.n(_),
				y = n("./src/chat/actions/channel/dropdown.ts"),
				I = n("./src/chat/actions/channel/subreddit.ts"),
				x = n("./src/chat/actions/message/inboxScroller.ts"),
				S = n("./src/chat/constants/channels.ts");
			const N = {};
			var k = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.f:
						return Object.assign(Object.assign({}, e), t.payload);
					case s.b:
					case s.a:
					case I.e:
					case I.f: {
						const {
							channels: n
						} = t.payload, a = v()(e, (e, t, a) => n[a] && t.channelState === S.b.PARTIAL && (e[a] = n[a]) && e || e, {});
						return Object.assign(Object.assign(Object.assign({}, n), e), a)
					}
					case I.g: {
						const {
							channels: n
						} = t.payload, a = Object.assign(Object.assign({}, n), e);
						return j()(n, (e, t) => {
							a[t].channelState === S.b.UNSORTED && (a[t].channelState = S.b.PARTIAL)
						}), a
					}
					case s.o: {
						const n = t.payload,
							a = e[n];
						return !a || a && 0 === a.unreadMessageCount ? e : Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, a), {
								unreadMessageCount: 0,
								unreadMentionCount: 0
							})
						})
					}
					case s.s:
					case I.b: {
						const {
							channelId: n
						} = t.payload, a = Object.assign(Object.assign({}, e[n]), {
							channelState: S.b.JOINED
						});
						return Object.assign(Object.assign({}, e), {
							[a.channelId]: a
						})
					}
					case s.x: {
						const n = t.payload.channel,
							a = e[n.channelId],
							s = Object.assign(Object.assign({}, a), E()(n, "hasMoreMessages", "isMessageListLoaded")),
							c = {
								[n.channelId]: s
							};
						return Object.assign(Object.assign({}, e), c)
					}
					case I.m:
					case s.w: {
						const n = t.payload.channel,
							a = e[n.channelId],
							s = Object.assign(Object.assign(Object.assign({}, a), n), {
								channelState: S.b.INVITED
							}),
							c = {
								[n.channelId]: s
							};
						return Object.assign(Object.assign({}, e), c)
					}
					case s.v: {
						const {
							channel: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n.channelId]: n
						})
					}
					case s.m: {
						const {
							channelId: n
						} = t.payload;
						return E()(e, n)
					}
					case s.u: {
						const {
							channelId: n,
							isRecommended: a
						} = t.payload, s = Object.assign(Object.assign({}, e[n]), {
							channelState: a ? S.b.PARTIAL : S.b.UNSORTED
						});
						return Object.assign(Object.assign({}, e), {
							[s.channelId]: s
						})
					}
					case y.a: {
						const {
							channelId: n,
							name: a
						} = t.payload, s = Object.assign(Object.assign({}, e[n]), {
							name: a
						});
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign({}, s)
						})
					}
					case m.a: {
						const n = t.payload.channelId,
							a = Number(O()(Object.keys(t.payload.message))),
							s = Object.assign(Object.assign({}, e[n]), {
								lastMessage: t.payload.message[a]
							});
						return Object.assign(Object.assign({}, e), {
							[n]: s
						})
					}
					case m.g: {
						const n = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								fetchingMessages: !0,
								fetchingMessagesError: !1
							})
						})
					}
					case m.b:
					case m.e: {
						const {
							hasMore: n,
							channelId: a
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[a]: Object.assign(Object.assign({}, e[a]), {
								isMessageListLoaded: !0,
								hasMoreMessages: n,
								fetchingMessages: !1,
								fetchingMessagesError: !1
							})
						})
					}
					case m.f: {
						const n = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								fetchingMessages: !1,
								fetchingMessagesError: !0
							})
						})
					}
					case s.l: {
						const {
							channelId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								fetchingFirstMessage: !0
							})
						})
					}
					case x.b: {
						const {
							channelId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								hasMoreMessages: !0
							})
						})
					}
					default:
						return e
				}
			};
			const w = {
				channelId: void 0,
				isLoaded: !1
			};
			var T = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.p: {
						const n = Object.assign(Object.assign({}, e), {
							isLoaded: !1
						});
						if (t.payload) {
							const e = t.payload.channelId;
							e && (n.channelId = e)
						}
						return n
					}
					case s.q:
						return Object.assign(Object.assign({}, e), {
							isLoaded: !0
						});
					case s.u:
					case s.m:
						return t.payload.channelId !== e.channelId ? e : Object.assign(Object.assign({}, e), {
							channelId: ""
						});
					default:
						return e
				}
			};
			const M = {
				sortedKeys: []
			};
			var A = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I.a: {
						const {
							channelId: e
						} = t.payload;
						return {
							sortedKeys: [e]
						}
					}
					default:
						return e
				}
			};
			const D = {
				fetchingChannels: !1,
				hasMoreChannels: !1,
				sortedKeys: []
			};
			var L = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I.h:
						return Object.assign(Object.assign({}, e), {
							fetchingChannels: !0
						});
					case I.i:
						return Object.assign(Object.assign({}, e), {
							fetchingChannels: !1
						});
					case I.e: {
						const {
							channels: n,
							hasMoreChannels: a
						} = t.payload, s = Object(l.e)(n, "name"), c = Object.keys(s);
						return c.length ? {
							fetchingChannels: !1,
							hasMoreChannels: a && !!c,
							sortedKeys: [...c]
						} : e
					}
					case s.u:
					case s.m:
					case I.b: {
						const {
							channelId: n
						} = t.payload;
						return e.sortedKeys.includes(n) ? Object.assign(Object.assign({}, e), {
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						}) : e
					}
					case I.m: {
						const n = t.payload.channel;
						return Object.assign(Object.assign({}, e), {
							sortedKeys: o()([n.channelId, ...e.sortedKeys])
						})
					}
					default:
						return e
				}
			};
			const U = {
					fetchingChannels: !1,
					sortedKeys: {}
				},
				B = (e, t, n) => Object.assign(Object.assign({}, e), {
					[t.toLowerCase()]: e[t.toLowerCase()].filter(e => e !== n)
				});
			var R = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I.j:
						return Object.assign(Object.assign({}, e), {
							fetchingChannels: !0
						});
					case I.k:
						return Object.assign(Object.assign({}, e), {
							fetchingChannels: !1
						});
					case I.b:
					case I.f: {
						const {
							sortedKeys: e
						} = t.payload;
						return {
							fetchingChannels: !1,
							sortedKeys: Object.assign({}, e)
						}
					}
					case s.u:
					case s.m: {
						const {
							channelId: n,
							subredditName: a
						} = t.payload, s = a && a.toLowerCase();
						if (!e.sortedKeys[s] || !e.sortedKeys[s].includes(n)) return e;
						const c = e.sortedKeys[s].length <= 1 ? E()(e.sortedKeys, s) : B(e.sortedKeys, s, n);
						return Object.assign(Object.assign({}, e), {
							sortedKeys: c
						})
					}
					case s.v: {
						const {
							sortedKeys: n
						} = e, {
							channelId: a
						} = t.payload.channel;
						for (const t in n) e.sortedKeys[t.toLowerCase()].includes(a) && B(n, t.toLowerCase(), a);
						return Object.assign(Object.assign({}, e), {
							sortedKeys: n
						})
					}
					default:
						return e
				}
			};
			const P = {
				sortedKeys: []
			};
			var H = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I.c: {
						const {
							channelId: e
						} = t.payload;
						return {
							sortedKeys: [e]
						}
					}
					default:
						return e
				}
			};
			const F = {
				fetchingChannels: !1,
				firstLoaded: !1,
				sortedKeys: []
			};
			var K = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I.l:
							return Object.assign(Object.assign({}, e), {
								firstLoaded: !0,
								fetchingChannels: !0
							});
						case I.g: {
							const {
								channels: n
							} = t.payload, a = Object.keys(n);
							return a.length ? {
								fetchingChannels: !1,
								firstLoaded: e.firstLoaded,
								sortedKeys: [...a]
							} : e
						}
						default:
							return e
					}
				},
				G = Object(a.c)({
					banned: A,
					invited: L,
					joined: R,
					kicked: H,
					recommended: K
				}),
				z = Object(a.c)({
					isCreatingChannel: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							t = arguments.length > 1 ? arguments[1] : void 0;
						switch (t.type) {
							case s.e:
								return !0;
							case s.f:
							case s.d:
								return !1;
							default:
								return e
						}
					},
					firstLoaded: c,
					inviteListExpanded: h,
					invited: u,
					joined: p,
					models: k,
					selected: T,
					subreddit: G
				}),
				V = n("./src/chat/actions/user.ts");
			var W = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.b:
							return !0;
						default:
							return e
					}
				},
				q = n("./node_modules/lodash/values.js"),
				Z = n.n(q),
				J = n("./src/chat/actions/sendbird/index.ts");
			const Q = "search",
				Y = "contacts",
				X = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case J.g:
						return Object.assign(Object.assign({}, e), t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
							loaded: !0,
							userId: t.id,
							valid: !0,
							method: Y
						}, e), {}));
					case J.b:
						return Object.assign(Object.assign({}, t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
							loaded: !0,
							userId: t.id,
							valid: !0,
							method: Y
						}, e), {})), e);
					case J.d: {
						const n = t.payload.username;
						return Object.assign(Object.assign({}, e), {
							[n]: {
								loaded: !1,
								userId: null,
								valid: !1,
								method: Q
							}
						})
					}
					case J.e: {
						const {
							payload: {
								contact: n,
								username: a,
								valid: s
							}
						} = t, c = !!(s && n && n.id);
						return Object.assign(Object.assign({}, e), {
							[a.toLowerCase()]: {
								loaded: !0,
								userId: n ? n.id : null,
								valid: c,
								method: Q
							}
						})
					}
					case V.i: {
						const n = t.payload;
						return Object.assign(Object.assign({}, e), Z()(n).reduce((e, t) => (e[t.name.toLowerCase()] = {
							loaded: !0,
							userId: t.id,
							valid: !0,
							method: Q
						}, e), {}))
					}
					case V.c: {
						const {
							username: n
						} = t.payload;
						return n ? E()(e, n) : e
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case J.g:
						return Object.assign(Object.assign({}, e), t.payload.reduce((t, n) => (t[n.id] = Object.assign(Object.assign({}, e[n.id]), n), t), {}));
					case J.e: {
						const {
							payload: {
								contact: n
							}
						} = t;
						return n ? Object.assign(Object.assign({}, e), {
							[n.id]: n
						}) : e
					}
					case V.i:
						return Object.assign(Object.assign({}, e), t.payload || {});
					case V.c: {
						const {
							userId: n
						} = t.payload;
						return n ? Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								isBlocked: !0
							})
						}) : e
					}
					case V.b: {
						const {
							blockedContacts: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), n)
					}
					default:
						return e
				}
			};
			const ne = [];
			var ae = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.h:
						return [...e, t.payload];
					case V.k:
						return e.filter(e => e !== t.payload);
					case V.j:
						return ne;
					default:
						return e
				}
			};
			const se = [];
			var ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : se,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case J.g:
							return [...e, ...t.payload.map(e => e.id)];
						case V.c:
							return e.filter(e => e !== t.payload.userId);
						default:
							return e
					}
				},
				re = Object(a.c)({
					fetchedBlockedUsers: W,
					knownContacts: $,
					models: te,
					selectedUserIds: ae,
					suggestedKeys: ce
				}),
				oe = n("./src/chat/actions/container.ts"),
				ie = n("./src/chat/constants/container.ts");
			const le = {
				size: ie.a.EMBED
			};
			var de = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case oe.SIZE_CHANGED:
							if (ie.b[t.payload]) return Object.assign(Object.assign({}, e), {
								size: t.payload
							});
						default:
							return e
					}
				},
				ue = n("./src/lib/makeActionCreator/index.ts"),
				he = n("./src/lib/constants/index.ts");
			n("./src/lib/makeApiRequest/index.ts");
			Object(ue.a)("EMOJIS__FETCH_EMOJIS_FAILED"), Object(ue.a)("EMOJI__ADD_EMOJIS");
			const me = {
				snoomojis: {}
			};
			var be = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : me,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "EMOJI__ADD_EMOJIS": {
							const {
								snoomojis: e
							} = t.payload;
							return {
								snoomojis: Object.assign({}, e)
							}
						}
						default:
							return e
					}
				},
				pe = n("./node_modules/lodash/toArray.js"),
				ge = n.n(pe),
				Oe = n("./node_modules/lodash/uniqBy.js"),
				fe = n.n(Oe),
				je = n("./src/chat/actions/members.ts");
			const Ce = {};
			var Ee = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.b: {
						const {
							channelId: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								fetchingMembers: !0
							})
						})
					}
					case je.c: {
						const {
							channelId: n,
							hasMoreMembers: a
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								hasMoreMembers: a,
								fetchingMembers: !1
							})
						})
					}
					case je.a: {
						const {
							channelId: n,
							members: a
						} = t.payload, s = ge()(a), c = e[n] && e[n].model || [], r = fe()([...c, ...s], "id");
						return Object.assign(Object.assign({}, e), {
							[n]: Object.assign(Object.assign({}, e[n]), {
								model: r
							})
						})
					}
					case je.d:
						return {};
					default:
						return e
				}
			};
			var _e = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case m.b:
					case m.l:
						return !0;
					default:
						return e
				}
			};
			const ve = {};
			var ye = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ve,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case m.b: {
						const {
							messages: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), n)
					}
					case m.a:
						return Object.assign(Object.assign({}, e), t.payload.message);
					case m.i:
						return Object.assign(Object.assign({}, e), t.payload);
					case m.d:
					case m.j:
						return E()(e, t.payload);
					case m.e: {
						const {
							messages: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), n)
					}
					case s.n: {
						const n = t.payload;
						return Object.assign({}, E()(e, ...n))
					}
					case x.a: {
						const {
							messageIdList: n
						} = t.payload;
						return E()(e, n)
					}
					case m.n: {
						const n = e[t.payload.messageId];
						return Object.assign(Object.assign({}, e), {
							[n.messageId]: Object.assign(Object.assign({}, n), {
								messageData: Object.assign(Object.assign({}, n.messageData), {
									collapsedInvitePreview: Object.assign(Object.assign({}, n.messageData.collapsedInvitePreview), {
										shouldCollapse: !1
									})
								})
							})
						})
					}
					case m.h: {
						const n = e[t.payload.messageId];
						return Object.assign(Object.assign({}, e), {
							[n.messageId]: Object.assign(Object.assign({}, n), {
								messageData: Object.assign(Object.assign({}, n.messageData), {
									collapsedInvitePreview: Object.assign(Object.assign({}, n.messageData.collapsedInvitePreview), {
										shouldShowReportPrompt: !1
									})
								})
							})
						})
					}
					default:
						return e
				}
			};
			const Ie = {};
			var xe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ie,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case m.c: {
							const n = t.payload;
							return Object.assign(Object.assign({}, e), {
								[n.clientMessageId]: n
							})
						}
						case m.m: {
							const {
								clientMessageId: n,
								toggle: a
							} = t.payload;
							if (n) {
								const t = e[n];
								return Object.assign(Object.assign({}, e), {
									[n]: Object.assign(Object.assign({}, t), {
										error: a
									})
								})
							}
							return Object.assign({}, e)
						}
						case m.a:
						case m.k: {
							const {
								clientMessageId: n
							} = t.payload;
							return Object.assign({}, n ? E()(e, n) : e)
						}
						default:
							return e
					}
				},
				Se = n("./node_modules/lodash/isEqual.js"),
				Ne = n.n(Se),
				ke = n("./src/chat/actions/message/unreadCount.ts");
			const we = {
				basicChannelCount: 0,
				subredditChannelCount: 0,
				subredditMentionCount: 0
			};
			var Te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : we,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ke.a:
							return Ne()(e, t.payload) ? e : Object.assign(Object.assign({}, e), t.payload)
					}
					return e
				},
				Me = Object(a.c)({
					firstLoaded: _e,
					models: ye,
					pending: xe,
					unread: Te
				}),
				Ae = n("./src/chat/reducers/meta/index.ts"),
				De = n("./src/chat/reducers/platform/index.ts"),
				Le = n("./src/chat/reducers/promos/index.ts"),
				Ue = n("./src/chat/actions/sendbird/config.ts");
			const Be = {
				maxMessageLength: void 0
			};
			var Re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.b:
						return Object.assign(Object.assign({}, e), t.payload);
					default:
						return e
				}
			};
			const Pe = {
				host: void 0
			};
			var He = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pe,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.c:
							return Object.assign(Object.assign({}, e), t.payload);
						default:
							return e
					}
				},
				Fe = n("./src/chat/actions/sendbird/sdk.ts"),
				Ke = n("./src/chat/constants/sendbird.ts");
			const Ge = {
				connectionStatus: Ke.b.Closed,
				initialized: !1
			};
			var ze = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ge,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.a:
						return Object.assign(Object.assign({}, e), {
							initialized: !0,
							connectionStatus: Ke.b.Open
						});
					case Fe.c: {
						const n = Object.assign({}, t.payload);
						return Object.assign(Object.assign({}, e), {
							error: n,
							connectionStatus: Ke.b.Closed
						})
					}
					case Fe.b:
						return Object.assign(Object.assign({}, e), {
							connectionStatus: Ke.b.Closed
						});
					case Fe.d: {
						const {
							connectionStatus: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							connectionStatus: n
						})
					}
					default:
						return e
				}
			};
			const Ve = {
				expires: void 0,
				token: void 0,
				active: !1
			};
			var We = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ve,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case J.h:
							return Object.assign(Object.assign({}, e), t.payload);
						case J.a:
							return Object.assign(Object.assign({}, e), {
								active: !0
							});
						case J.c:
							return Object.assign(Object.assign({}, e), {
								active: !1
							});
						default:
							return e
					}
				},
				qe = Object(a.c)({
					globalSettings: Re,
					proxy: He,
					session: We,
					sdk: ze
				}),
				Ze = n("./src/chat/actions/sidebar.ts");
			const Je = n("./src/chat/constants/sidebar.ts").a.SubredditChannels;
			var Qe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ze.b: {
						const {
							activeIndex: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Ye = {};
			var Xe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ze.a: {
							const {
								channelId: n,
								tabIndex: a
							} = t.payload;
							return Object.assign(Object.assign({}, e), {
								[a]: n
							})
						}
						default:
							return e
					}
				},
				$e = Object(a.c)({
					activeIndex: Qe,
					lastChannelIdPerTab: Xe
				}),
				et = n("./src/chat/actions/sitewideRules.ts");
			const tt = [];
			var nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case et.a:
							return t.payload;
						default:
							return e
					}
				},
				at = n("./node_modules/lodash/isEmpty.js"),
				st = n.n(at),
				ct = n("./node_modules/lodash/keyBy.js"),
				rt = n.n(ct),
				ot = n("./src/chat/models/Channel/subreddit.ts");
			const it = {};
			var lt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : it,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case I.d:
							return Object.assign(Object.assign({}, e), t.payload);
						case s.b:
						case s.a: {
							const {
								channels: n
							} = t.payload, a = Object(l.c)(n, [i.a.Subreddit]);
							if (st()(a)) return e;
							const s = ge()(a).map(e => {
								const t = e && Object(ot.d)(e.data);
								if (t && t.subreddit) return t.subreddit
							});
							return Object.assign(Object.assign({}, e), rt()(s, "id"))
						}
						default:
							return e
					}
				},
				dt = Object(a.c)({
					models: lt
				}),
				ut = n("./src/chat/reducers/subscribe.ts"),
				ht = n("./src/chat/actions/theme.ts"),
				mt = n("./src/chat/constants/theme.ts"),
				bt = n("./src/chat/models/Theme/index.ts");
			const pt = {
				current: bt.a[mt.a],
				cached: {}
			};
			var gt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ht.THEME_CHANGED:
							return e.current = bt.a[t.payload.themeKey], Object.assign({}, e);
						default:
							return e
					}
				},
				Ot = n("./src/chat/actions/toast.ts");
			var ft = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ot.a:
							return null;
						case Ot.b: {
							const {
								toast: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				jt = n("./src/chat/actions/platform.ts"),
				Ct = n("./src/chat/actions/tooltip.ts");
			var Et = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ct.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case Ct.b:
						case jt.a:
							return null;
						default:
							return e
					}
				},
				_t = n("./src/chat/actions/typingIndicator.ts");
			const vt = {
				usernames: []
			};

			function yt(e, t) {
				return e === t || (0 === e.length && 0 === t.length || !(0 === e.length && t.length > 0) && (!(e.length > 0 && 0 === t.length) && (1 === e.length && 1 === t.length ? e[0] === t[0] : 2 === e.length && 2 === t.length ? e[0] === t[0] && e[1] === t[1] : 3 === e.length && 3 === t.length ? e[0] === t[0] && e[1] === t[1] && e[2] === t[2] : Ne()(e, t))))
			}
			var It = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _t.a: {
							const {
								usernames: n
							} = t.payload;
							return yt(n, e.usernames) ? e : {
								usernames: n
							}
						}
						case s.p:
							return {
								usernames: []
							};
						default:
							return e
					}
				},
				xt = n("./src/chat/actions/promo/index.ts"),
				St = n("./src/lib/reducers/addAuthentication/index.ts");
			var Nt = Object(St.a)((e, t) => {
				switch (void 0 === e && (e = null), t.type) {
					case V.a: {
						const e = t.payload.profileImg || t.payload.subreddit && t.payload.subreddit.icon_img || t.payload.iconImg;
						return {
							id: t.payload.id,
							name: t.payload.name,
							profileImg: e,
							features: t.payload.features,
							prefNightmode: t.payload.prefNightmode,
							inChat: t.payload.inChat,
							lastInteraction: t.payload.lastInteraction,
							created: t.payload.created,
							linkKarma: t.payload.linkKarma,
							commentKarma: t.payload.commentKarma,
							isNSFW: t.payload.isNSFW,
							seenSubredditChatFtux: t.payload.seenSubredditChatFtux
						}
					}
					case xt.b:
						return e ? Object.assign(Object.assign({}, e), {
							seenSubredditChatFtux: !0
						}) : null;
					default:
						return e
				}
			}, null);
			const kt = {
				userSubredditChatEnabled: !1
			};
			var wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case J.f:
					case Ue.a: {
						const {
							userSubredditChatEnabled: n
						} = t.payload || kt;
						return Object.assign(Object.assign(Object.assign({}, e), t.payload), {
							userSubredditChatEnabled: e.userSubredditChatEnabled || n
						})
					}
				}
				return e
			};
			const Tt = {};
			var Mt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Tt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.d:
						return t.payload;
					default:
						return e
				}
			};
			const At = he.z;
			var Dt = Object(St.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : At,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return t.type, e
			}), At);
			const Lt = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var Ut = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case V.e:
						return t.payload;
					default:
						return e
				}
			};
			const Bt = {
				globalTheme: mt.a
			};
			var Rt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ht.THEME_CHANGED: {
						const {
							themeKey: n
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							globalTheme: n
						})
					}
					default:
						return e
				}
			};
			var Pt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.f:
							return t.payload;
						default:
							return e
					}
				},
				Ht = n("./src/chat/actions/session.ts");
			var Ft = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ht.a:
					case Ht.c:
						return t.payload;
					case Ht.b:
						return null;
					default:
						return e
				}
			};
			var Kt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case V.g:
							return t.payload;
						default:
							return e
					}
				},
				Gt = Object(a.c)({
					account: Nt,
					chatExperiments: wt,
					experiments: Mt,
					language: Dt,
					loid: Ut,
					prefs: Rt,
					reddaid: Pt,
					session: Ft,
					sessionTracker: Kt
				});
			const zt = {
				channels: z,
				contacts: re,
				container: de,
				emojis: be,
				members: Ee,
				messages: Me,
				meta: Ae.b,
				platform: De.b,
				promos: Le.b,
				sendbird: qe,
				sidebarTabs: $e,
				sitewideRules: nt,
				subreddits: dt,
				themes: gt,
				toast: ft,
				tooltipId: Et,
				typingIndicator: It,
				user: Gt,
				lastAction: ut.a
			}
		},
		"./src/chat/reducers/meta/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./src/chat/actions/meta.ts");
			const s = {
				country: "",
				domain: "",
				externalData: {
					comment: null,
					post: null,
					profile: null
				},
				isBot: !1,
				isRedesign: !1,
				isSessionSeo: !1,
				method: "",
				platform: null,
				protocol: "",
				sessionReferrerDomain: "",
				userAgent: ""
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.META_RECEIVED:
						return t.payload;
					case a.SET_EXTERNAL_DATA:
						return e.externalData = Object.assign({}, t.payload), Object.assign({}, e);
					default:
						return e
				}
			}
		},
		"./src/chat/reducers/platform/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/history/esm/history.js"),
				s = n("./src/chat/actions/platform.ts"),
				c = function(e, t) {
					var n = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
					}
					return n
				};
			const r = {
					currentPage: null,
					referrers: {},
					metas: {}
				},
				o = (e, t) => ({
					key: e,
					locationState: {},
					queryParams: {},
					routeMatch: null,
					status: 404,
					url: t,
					urlParams: {}
				}),
				i = (e, t, n, a) => {
					const s = n.route,
						{
							action: r
						} = s,
						o = c(s, ["action"]);
					return {
						key: e,
						locationState: a.state,
						meta: n.route.meta,
						queryParams: n.match.queryParams,
						routeMatch: Object.assign(Object.assign({}, n), {
							route: o
						}),
						status: 200,
						url: t,
						urlParams: n.match.params
					}
				};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a: {
						if (!t.payload) return e;
						const n = e.currentPage,
							s = t.payload,
							{
								routeMatch: c,
								location: r
							} = s,
							{
								key: l
							} = r;
						if (void 0 === l) return e;
						const d = Object(a.e)(r),
							u = c ? i(l, d, c, r) : o(l, d);
						let {
							referrers: h
						} = e;
						if ("PUSH" === s.action) {
							const e = n && n.url || "";
							h = Object.assign(Object.assign({}, h), {
								[l]: e
							})
						}
						return Object.assign(Object.assign({}, e), {
							referrers: h,
							currentPage: u
						})
					}
					case s.c: {
						if (!t.payload) return e;
						const {
							key: n,
							title: a,
							description: s,
							icon: c,
							type: r
						} = t.payload;
						return Object.assign(Object.assign({}, e), {
							metas: Object.assign(Object.assign({}, e.metas), {
								[n]: {
									description: s,
									icon: c,
									title: a,
									type: r
								}
							})
						})
					}
					case s.b:
						return t.payload, e;
					default:
						return e
				}
			}
		},
		"./src/chat/reducers/promos/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./src/chat/actions/promo/constants.ts");
			const s = {
				displayNSFWWarning: !1,
				displaySubredditChatFtux: !1
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.a: {
						const n = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: !0
						})
					}
					case a.b: {
						const n = t.payload;
						return Object.assign(Object.assign({}, e), {
							[n]: !1
						})
					}
					default:
						return e
				}
			}
		},
		"./src/chat/routes/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/chat/actions/page.ts"),
				r;
			! function(e) {
				e.Invite = "invite", e.Message = "message", e.User = "user"
			}(r || (r = {}));
			const o = Object(a.a)({
					resolved: {},
					chunkName: () => "ChatPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ChatPage").then(n.bind(null, "./src/chat/pages/Chat.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/chat/pages/Chat.tsx"
					}
				}),
				i = {
					action: c.b,
					chunk: s.p.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Bb.CHAT
					},
					path: "/chat/"
				},
				l = Object(a.a)({
					resolved: {},
					chunkName: () => "ChatEmpty",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ChatEmpty").then(n.bind(null, "./src/chat/pages/Empty.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/chat/pages/Empty.tsx"
					}
				});
			l.preload();
			const d = {
					action: c.b,
					chunk: s.p.CHAT_EMPTY,
					component: l,
					exact: !0,
					meta: {
						name: s.Bb.CHAT_EMPTY
					},
					path: "/chat/empty/"
				},
				u = Object(a.a)({
					resolved: {},
					chunkName: () => "ChatMinimize",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ChatMinimize").then(n.bind(null, "./src/chat/pages/Minimize.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/chat/pages/Minimize.tsx"
					}
				});
			u.preload();
			const h = {
					action: c.c,
					chunk: s.p.CHAT_MINIMIZE,
					component: u,
					exact: !0,
					meta: {
						name: s.Bb.CHAT_MINIMIZE
					},
					path: "/chat/minimize/"
				},
				m = ["/chat/", "/chat/channel/:action(create)/", "/chat/channel/:channelId/:action(block|decline|delete|invite|invited|kick|members|leave|nsfw|report)?/:attr(invite|message|user)?/:attrId?", "/chat/r/:subredditName/channel/:channelId/:action(ban|block|decline|delete|deny|invite|invited|join|kick|leave|lock_confirmation|members|private|report)?/:attr(invite|message|user)?/:attrId?"],
				b = {
					action: c.a,
					chunk: s.p.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Bb.CHAT
					},
					path: m
				},
				p = ["/chat/user_id/:userIds/"],
				g = {
					action: c.d,
					chunk: s.p.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Bb.CHAT
					},
					path: p
				};
			t.b = [i, d, h, b, g]
		},
		"./src/chat/routes/index.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/constants/index.ts");
			var s = {
				action: n("./src/chat/actions/page.ts").b,
				chunk: a.p.CHAT,
				exact: !0,
				meta: {
					name: a.Bb.CHAT
				},
				path: "/chat/*"
			};
			const c = [...n("./src/chat/routes/chat.ts").b, s];
			t.a = c
		},
		"./src/chat/selectors/channels/next.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/chat/constants/channels.ts"),
				s = n("./src/chat/constants/sidebar.ts"),
				c = n("./src/chat/selectors/channels.ts"),
				r = n("./src/chat/selectors/subreddit.ts");
			const o = e => {
					const {
						channels: t
					} = e, n = t.subreddit.invited.sortedKeys[0], s = Object(r.b)(e, n);
					return {
						channelId: n,
						subredditName: s && s.name,
						channelAction: a.a.VIEW_INVITE
					}
				},
				i = e => {
					const {
						channels: t
					} = e, {
						sortedKeys: n
					} = t.subreddit.joined, a = Object.keys(n), s = !a.length ? void 0 : a[0];
					return {
						channelId: s && n[s][0],
						subredditName: s
					}
				},
				l = e => {
					const {
						channels: t
					} = e, n = t.subreddit.recommended.sortedKeys[0], s = Object(r.b)(e, n);
					return {
						channelId: n,
						subredditName: s && s.name,
						channelAction: a.a.VIEW_JOIN
					}
				},
				d = e => {
					const {
						channels: t
					} = e;
					return {
						channelId: t.invited.sortedKeys[0],
						channelAction: a.a.VIEW_INVITE
					}
				},
				u = e => {
					const {
						channels: t
					} = e;
					return {
						channelId: t.joined.sortedKeys[0]
					}
				},
				h = e => [d(e), u(e)],
				m = e => {
					const t = Object(c.k)(e);
					return {
						channelId: t && t.channelId
					}
				},
				b = e => e.find(e => !!e.channelId),
				p = (e, t) => {
					const n = t === s.a.SubredditChannels ? (e => [o(e), i(e), l(e)])(e) : h(e),
						a = b(n);
					return a && a.channelId
				},
				g = (e, t) => {
					const n = [...t ? [m(e)] : [], ...h(e)];
					return b(n)
				}
		},
		"./src/chat/selectors/contacts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return r
			})), n.d(t, "j", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "d", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/values.js"),
				s = n.n(a),
				c = n("./src/chat/selectors/members.ts");
			const r = e => e.contacts.suggestedKeys.map(t => e.contacts.models[t]),
				o = e => {
					const {
						knownContacts: t,
						models: n
					} = e.contacts;
					return Object.keys(t).map(e => t[e]).filter(e => e && e.loaded && e.valid).map(e => e.userId && n[e.userId]).filter(e => !!e)
				},
				i = (e, t) => {
					return s()(e.contacts.models).find(e => e.id === t)
				},
				l = (e, t) => {
					return s()(e.contacts.models).find(e => e.name.toLowerCase() === t.toLowerCase())
				},
				d = (e, t) => e.contacts.knownContacts[t.toLowerCase()],
				u = (e, t) => {
					const n = d(e, t);
					return n && n.method
				},
				h = (e, t) => {
					if (t && t.inviter) return e.contacts.models[t.inviter.id]
				},
				m = e => e.contacts.knownContacts,
				b = e => e.contacts.selectedUserIds,
				p = e => b(e).length,
				g = e => {
					const {
						selectedUserIds: t
					} = e.contacts;
					return t.length && t.map(t => {
						const n = i(e, t);
						return n && n.id
					})
				},
				O = (e, t) => {
					const n = l(e, t);
					if (n) return {
						name: t,
						id: n.id
					};
					const a = d(e, t);
					if (a && a.userId) return {
						name: t,
						id: a.userId
					};
					const s = Object(c.c)(e, t);
					return s ? {
						name: t,
						id: s.id
					} : void 0
				},
				f = e => e.contacts.models
		},
		"./src/chat/selectors/experiments.ts": function(e, t, n) {
			"use strict";
			var a;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return c
				})),
				function(e) {
					e.SubredditChat = "chat_subreddit", e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
				}(a || (a = {}));
			const s = e => !!e.user.experiments[a.SubredditChat] || !!e.user.chatExperiments.userSubredditChatEnabled,
				c = e => !!e.user.experiments[a.SubredditChatNotifcationFtux]
		},
		"./src/chat/selectors/members.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "c", (function() {
				return p
			}));
			var a = n("./node_modules/lodash/sortBy.js"),
				s = n.n(a),
				c = n("./src/chat/models/Channel/index.ts"),
				r = n("./src/chat/selectors/channels.ts");
			const o = e => {
					const t = Object(r.x)(e);
					if (t) return e.members[t]
				},
				i = e => {
					const t = o(e);
					if (t) return t.fetchingMembers
				},
				l = e => {
					const t = o(e);
					if (t) return t.hasMoreMembers
				},
				d = (e, t) => {
					if (t && e.members[t]) {
						const n = e.members[t];
						if (n.model) {
							const t = n.model.map(t => h(t, e.contacts.models));
							return m(t)
						}
					}
				},
				u = (e, t, n) => ({
					id: e.id,
					name: e.name,
					isBlockedByMe: (null == n ? void 0 : n.isBlocked) || e.isBlocked || t.isBlockedByMe,
					isModerator: Object(c.c)(t.role),
					isNSFW: Boolean(null == n ? void 0 : n.isNSFW),
					profileUrl: e.profileImg || (null == n ? void 0 : n.profileImg) || t.profileUrl,
					state: t.state
				}),
				h = (e, t) => {
					const n = t[e.id];
					return n ? {
						id: e.id,
						name: e.name,
						isBlockedByMe: (null == n ? void 0 : n.isBlocked) || e.isBlockedByMe,
						isModerator: e.isModerator,
						isNSFW: Boolean(null == n ? void 0 : n.isNSFW),
						profileUrl: e.profileUrl,
						state: e.state
					} : e
				},
				m = e => {
					if (!e) return [];
					const t = [],
						n = [],
						a = [],
						c = [],
						r = [];
					e.forEach(e => {
						e.isModerator ? t.push(e) : e.isNSFW && e.isBlockedByMe ? a.push(e) : e.isNSFW ? c.push(e) : e.isBlockedByMe ? n.push(e) : r.push(e)
					});
					const o = e => e.name && e.name.toLowerCase();
					return [...s()(t, o), ...s()(n, o), ...s()(a, o), ...s()(c, o), ...s()(r, o)]
				},
				b = e => {
					const t = o(e);
					return (null == t ? void 0 : t.model) || []
				},
				p = (e, t) => {
					const n = o(e);
					return n && n.model && n.model.find(e => e.name === t)
				}
		},
		"./src/chat/selectors/platform.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			}));
			var a = n("./src/chat/constants/sidebar.ts");
			const s = e => e.platform && e.platform.currentPage && e.platform.currentPage.urlParams.channelId,
				c = e => e.platform && e.platform.currentPage && e.platform.currentPage.urlParams.action,
				r = e => e.platform && e.platform.currentPage && e.platform.currentPage.urlParams.subredditName || void 0,
				o = e => e.platform && e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name,
				i = e => {
					return !!r(e) ? a.a.SubredditChannels : a.a.DirectChannels
				},
				l = e => {
					var t, n;
					return null === (n = null === (t = e.platform) || void 0 === t ? void 0 : t.currentPage) || void 0 === n ? void 0 : n.queryParams
				},
				d = e => !(!s(e) || c(e))
		},
		"./src/chat/selectors/sendbird.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			}));
			const a = e => e.sendbird.sdk.connectionStatus,
				s = e => e.sendbird.sdk.initialized,
				c = e => e.sendbird.proxy.host,
				r = e => e.sendbird.session,
				o = e => e.sendbird.session.active
		},
		"./src/chat/selectors/sidebar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			}));
			var a = n("./src/chat/constants/sidebar.ts");
			const s = e => e.sidebarTabs.activeIndex === a.a.SubredditChannels,
				c = e => e.sidebarTabs.activeIndex
		},
		"./src/chat/selectors/subreddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return m
			}));
			var a = n("./node_modules/lodash/isEmpty.js"),
				s = n.n(a),
				c = n("./node_modules/lodash/map.js"),
				r = n.n(c),
				o = n("./src/chat/models/Channel/index.ts"),
				i = n("./src/chat/selectors/channels.ts");
			const l = e => e.subreddits && e.subreddits.models,
				d = (e, t) => {
					const n = Object(i.h)(e, t);
					return n && n.type === o.a.Subreddit ? n : void 0
				},
				u = (e, t) => {
					const n = Object(i.h)(e, t);
					if (n && n.type === o.a.Subreddit) {
						const {
							customData: t
						} = n;
						return ((e, t) => {
							const n = l(e);
							return n && n[t]
						})(e, t.subredditId)
					}
				},
				h = (e, t) => {
					if (!t) {
						const n = Object(i.w)(e);
						n && (t = n.channelId)
					}
					if (t) return u(e, t)
				},
				m = e => {
					const t = e.subreddits.models,
						n = e.channels.models,
						a = e.channels.subreddit.joined.sortedKeys,
						c = e => r()(e, e => n[e]);
					if (!s()(a)) return r()(a, e => {
						const a = e[0],
							s = n[a].customData.subredditId;
						return {
							name: t[s].name,
							keyColor: t[s].keyColor,
							iconImg: t[s].iconImg,
							sortedChannels: c(e)
						}
					})
				}
		},
		"./src/chat/selectors/telemetry.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "e", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var a = n("./node_modules/js-cookie/src/js.cookie.js"),
				s = n.n(a),
				c = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = n.n(c),
				o = n("./src/lib/constants/cookie.ts"),
				i = n("./src/chat/selectors/app.ts");
			const l = e => ({
					pageType: Object(i.d)(e) ? "chat" : "chat_fullscreen"
				}),
				d = e => e.meta.platform || void 0,
				u = e => {
					const t = s.a.get(o.g);
					return {
						id: (e.user.sessionTracker || t).split(".")[0]
					}
				},
				h = e => ({
					id: e.user.account ? e.user.account.id : "accessed_chat_without_login",
					isLoggedIn: !!e.user.account
				}),
				m = e => {
					const t = e.platform.currentPage ? e.platform.referrers[e.platform.currentPage.key] : void 0;
					if (t) {
						const {
							hostname: e
						} = r.a.parse(t);
						return {
							domain: e,
							url: t
						}
					}
				},
				b = e => ({}),
				p = e => e.meta.externalData.post,
				g = e => e.meta.externalData.comment,
				O = e => e.meta.externalData.profile
		},
		"./src/chat/singleton/SendbirdSDK.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return B
			})), n.d(t, "c", (function() {
				return R
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/config.ts"),
				s = n("./node_modules/lodash/noop.js"),
				c = n.n(s),
				r = n("./node_modules/sendbird/SendBird.min.js"),
				o = n.n(r),
				i = n("./node_modules/timers-browserify/main.js"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/sentry/index.ts"),
				u = n("./src/chat/actions/channel.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				m = n("./src/chat/constants/channels.ts"),
				b = n("./src/chat/helpers/urls/index.ts"),
				p = n("./src/chat/selectors/channels.ts"),
				g = n("./src/chat/selectors/subreddit.ts");
			const O = e => async (t, n) => {
				const a = n(),
					s = Object(p.w)(a),
					c = Object(g.b)(a, e),
					r = c && c.name.toLowerCase();
				r && (t(Object(u.L)({
					channelId: e,
					subredditName: r
				})), s && s.channelId === e && t(Object(h.b)(Object(b.channelAction)(e, m.a.DENY, r))))
			};
			var f = n("./src/chat/actions/channel/subreddit.ts"),
				j = n("./src/chat/actions/message/index.ts"),
				C = n("./src/chat/actions/sendbird/index.ts"),
				E = n("./src/chat/actions/sendbird/sdk.ts"),
				_ = n("./src/chat/actions/toast.ts"),
				v = n("./src/chat/actions/typingIndicator.ts"),
				y = n("./src/chat/constants/batchSizes.ts"),
				I = n("./src/chat/constants/messages.ts"),
				x = n("./src/chat/constants/sendbird.ts"),
				S = n("./src/chat/constants/toast.ts"),
				N = n("./src/chat/helpers/errors.ts"),
				k = n("./src/chat/models/Channel/index.ts"),
				w = n("./src/chat/models/Channel/platform.ts"),
				T = n("./src/chat/models/Channel/subreddit.ts"),
				M = n("./src/chat/models/Channel/utils/index.ts"),
				A = n("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				D = n("./src/chat/models/Message/index.ts"),
				L = n("./src/chat/models/User/member.ts");
			const {
				sendbirdAppId: U
			} = a.a;
			var B;
			! function(e) {
				e.VIEW_PRIVATE = "view_private", e.KICKED = "kicked", e.BANNED = "banned"
			}(B || (B = {}));
			const R = new class {
				constructor() {
					this.dispatch = c.a, this.channels = {}, this.channelUniqueHandlerID = [], this.connectionUniqueHandlerID = [], this.switchChannel = (e, t) => {
						if (this.channel = e, t) return Promise.resolve([]); {
							this.channelMembersQuery = this.channel.createMemberListQuery(), this.memberListQuery = this.channel.createMemberListQuery();
							const e = !0,
								t = this.getPreviousMessages(e);
							return Promise.all([t])
						}
					}, (this.self = new o.a({
						appId: U
					})).Options.typingIndicatorThrottle = 1e4
				}
				connect(e, t, n, a) {
					return new Promise(s => {
						this.dispatch = a, this.self.connect(n, t, "https://".concat(e), "wss://".concat(e), (e, t) => {
							this.toggleUpdateListeners(!0), s({
								data: e,
								error: t
							})
						})
					})
				}
				isConnected() {
					return !!this.self.currentUser
				}
				disconnect() {
					return new Promise(e => {
						this.isConnected() && (this.toggleUpdateListeners(!1), this.self.disconnect(() => e()))
					})
				}
				toggleUpdateListeners(e) {
					e ? (this.onChannelChanged(), this.onChannelDeleted(), this.onChannelMuted(), this.onChannelUnmuted(), this.onChannelLocked(), this.onChannelUnlocked(), this.onReceiveInvite(), this.onReceiveMessage(), this.onUpdateMessage(), this.onDeleteMessage(), this.onUserActions(), this.onUserKicked(), this.onTypingStatusUpdated(), this.onReconnectStarted(), this.onReconnectSucceeded(), this.onReconnectFailed()) : (this.channelUniqueHandlerID.length && this.channelUniqueHandlerID.forEach(e => {
						this.self.removeChannelHandler(e)
					}), this.connectionUniqueHandlerID.length && this.channelUniqueHandlerID.forEach(e => {
						this.self.removeConnectionHandler(e)
					}))
				}
				reconnect() {
					this.dispatch(Object(_.e)({
						toast: S.a.ConnectionPending
					})), this.dispatch(Object(C.m)())
				}
				onReconnectStarted() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: x.b.Pending
						},
						n = {
							toast: S.a.ConnectionPending
						};
					e.onReconnectStarted = () => {
						this.dispatch(Object(E.h)(t)), this.dispatch(Object(_.e)(n))
					}, this.self.addConnectionHandler("CONNECTION_CHANGE", e), this.connectionUniqueHandlerID.push("CONNECTION_CHANGE")
				}
				onReconnectSucceeded() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: x.b.Open
						};
					e.onReconnectSucceeded = () => {
						this.dispatch(Object(E.h)(t)), this.dispatch(Object(_.e)({
							toast: S.a.ConnectionOpen
						})), Object(i.setTimeout)(() => this.dispatch(Object(_.d)()), 3 * l.Fb);
						this.dispatch(Object(j.s)(!0)), this.dispatch(Object(u.E)())
					}, this.self.addConnectionHandler("RECONNECT_SUCCEEDED", e), this.connectionUniqueHandlerID.push("RECONNECT_SUCCEEDED")
				}
				onReconnectFailed() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: x.b.Closed
						};
					e.onReconnectFailed = () => {
						this.dispatch(Object(E.h)(t)), this.dispatch(Object(_.e)({
							toast: S.a.ConnectionClosed
						}))
					}, this.self.addConnectionHandler("RECONNECT_FAILED", e), this.connectionUniqueHandlerID.push("RECONNECT_FAILED")
				}
				onReceiveInvite() {
					const e = new this.self.ChannelHandler;
					e.onUserReceivedInvitation = e => {
						const t = Object(k.f)(e);
						this.dispatch(Object(u.Q)(t))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_INVITE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_INVITE")
				}
				onReceiveMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageReceived = (e, t) => {
						const n = Object(k.f)(e);
						this.dispatch(Object(u.P)(n));
						const a = Object(D.b)(t);
						a && this.dispatch(Object(j.u)(a))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_MESSAGE")
				}
				onUpdateMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageUpdated = (e, t) => {
						const n = Object(k.f)(e);
						this.dispatch(Object(u.P)(n));
						const a = Object(D.b)(t);
						a && this.dispatch(Object(j.u)(a))
					}, this.self.addChannelHandler("UPDATE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("UPDATE_CHANNEL_MESSAGE")
				}
				onDeleteMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageDeleted = (e, t) => {
						try {
							const e = Number(t);
							this.dispatch(Object(j.v)(e))
						} catch (n) {
							Object(N.b)(n)
						}
					}, this.self.addChannelHandler("DELETE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("DELETE_CHANNEL_MESSAGE")
				}
				onTypingStatusUpdated() {
					const e = new this.self.ChannelHandler;
					e.onTypingStatusUpdated = e => {
						const t = Object(A.a)(e.url),
							n = e.getTypingMembers().map(e => e.nickname);
						this.dispatch(Object(v.b)({
							channelId: t,
							usernames: n
						}))
					}, this.self.addChannelHandler("TYPING_STATUS_UPDATED", e), this.channelUniqueHandlerID.push("TYPING_STATUS_UPDATED")
				}
				onUserActions() {
					let e;
					! function(e) {
						e.onUserLeft = "USER_LEFT_CHANNEL", e.onUserBanned = "USER_BANNED_CHANNEL"
					}(e || (e = {})), Object.keys(e).filter(e => "string" == typeof e).map(t => {
						const n = t,
							a = new this.self.ChannelHandler,
							s = e[n];
						a[n] = e => {
							const t = Object(k.f)(e);
							this.dispatch(Object(u.Q)(t, !0))
						}, this.self.addChannelHandler(s, a), this.channelUniqueHandlerID.push(s)
					})
				}
				onChannelChanged() {
					const e = new this.self.ChannelHandler;
					e.onChannelChanged = e => {
						const t = Object(k.f)(e);
						this.dispatch(Object(u.Q)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_CHANGED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_CHANGED")
				}
				onChannelDeleted() {
					const e = new this.self.ChannelHandler;
					e.onChannelDeleted = e => {
						const t = Object(A.a)(e);
						this.dispatch(O(t))
					}, this.self.addChannelHandler("ON_CHANNEL_DELETED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_DELETED")
				}
				onChannelMuted() {
					const e = new this.self.ChannelHandler;
					e.onUserMuted = e => {
						const t = Object(k.f)(e);
						this.dispatch(Object(u.Q)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_MUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_MUTED")
				}
				onChannelUnmuted() {
					const e = new this.self.ChannelHandler;
					e.onUserUnmuted = e => {
						const t = Object(k.f)(e);
						this.dispatch(Object(u.Q)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNMUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNMUTED")
				}
				onChannelLocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelFrozen = e => {
						const t = Object(k.f)(e);
						this.dispatch(Object(u.Q)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_LOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_LOCKED")
				}
				onChannelUnlocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelUnfrozen = e => {
						const t = Object(k.f)(e);
						this.dispatch(Object(u.Q)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNLOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNLOCKED")
				}
				mapCodeToError(e) {
					switch (e) {
						case 400750:
							return B.KICKED;
						case 400751:
							return B.BANNED;
						default:
							return B.VIEW_PRIVATE
					}
				}
				autoJoinSubredditChannel(e, t) {
					return new Promise((e, n) => {
						const {
							channelSendbirdUrl: a,
							customData: s
						} = t;
						s && s.subredditId ? this.dispatch(Object(f.u)(a, s.subredditId)).then(t => {
							t.error ? n({
								error: this.mapCodeToError(t.error.code)
							}) : e(t.body)
						}).catch(e => {
							Object(N.b)("Error: can't join subreddit channel"), n({
								error: this.mapCodeToError(e.code)
							})
						}) : e()
					})
				}
				updatePartialChannelModel(e, t) {
					const {
						PARTIAL: n,
						UNSORTED: a
					} = m.b;
					t === n && e.channelState === a && (e.channelState = n, this.dispatch(Object(u.R)(e)))
				}
				getChannelByChannelId(e) {
					return new Promise((t, n) => {
						const a = Object(M.a)(e);
						this.self.GroupChannel.getChannel(a, (e, a) => {
							a ? (Object(N.b)("Error: can't get channel by id"), n(a)) : t(e)
						})
					})
				}
				addChannelModelByChannelId(e) {
					return new Promise((t, n) => {
						this.getChannelByChannelId(e).then(e => {
							if (!e) return t();
							const n = Object(k.f)(e);
							if (!n) return t();
							if (n.type === k.a.Subreddit) {
								const {
									subreddit: e
								} = n.customData;
								e && this.dispatch(Object(f.o)({
									[e.id]: e
								}))
							}
							this.dispatch(Object(u.R)(n)), t(n)
						}).catch(e => {
							Object(N.b)("Error: can't add channel by id"), n(e)
						})
					})
				}
				enterChannel(e, t, n) {
					return new Promise(a => {
						const s = function() {
							let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
							return {
								data: e
							}
						};
						if (!this.isConnected()) return a(s());
						const {
							channelId: c
						} = e, r = this.channels[c];
						if (r && !t) return this.switchChannel(r, n).then(e => {
							let [t] = e;
							return a(s({
								messageListData: t
							}))
						}).catch(() => a(s()));
						this.getChannelByChannelId(c).then(r => {
							if (!r) return a(s());
							this.channels[c] = r;
							const o = Object(k.f)(r);
							if (this.updatePartialChannelModel(o, e.channelState), t && o.type === k.a.Subreddit) return this.autoJoinSubredditChannel(r, o).then(e => {
								const t = Object(w.a)(e, m.b.JOINED);
								this.dispatch(Object(u.R)(t)), this.switchChannel(r).then(e => {
									let [t] = e;
									return a(s({
										messageListData: t
									}))
								}).catch(() => a(s()))
							}).catch(e => a(s(e.error)));
							this.switchChannel(r, n).then(e => {
								let [t] = e;
								return a(s({
									messageListData: t
								}))
							}).catch(() => a(s()))
						}).catch(() => a(s()))
					})
				}
				updateChannel(e) {
					let {
						name: t,
						coverUrl: n,
						data: a
					} = e;
					return new Promise((e, s) => {
						this.channel ? this.channel.updateChannel(t, n, a, (t, n) => t ? e() : s(n)) : s("No channel selected")
					})
				}
				hideChannel() {
					return new Promise(e => {
						this.channel ? this.channel.hide(e) : e()
					})
				}
				leaveChannel() {
					return new Promise((e, t) => {
						if (this.channel) return this.channel.leave((e, n) => {
							n && t(n)
						}), e();
						t("No channel selected")
					})
				}
				acceptChannelInvite() {
					return new Promise(e => {
						this.channel ? this.channel.acceptInvitation(e) : e()
					})
				}
				declineChannelInvite() {
					return new Promise((e, t) => {
						this.channel ? this.channel.declineInvitation((n, a) => {
							a ? t(a) : e(n)
						}) : e()
					})
				}
				lockChannel() {
					return new Promise((e, t) => (this.channel && this.channel.freeze((e, n) => {
						n && t(n)
					}), e()))
				}
				unlockChannel() {
					return new Promise((e, t) => (this.channel && this.channel.unfreeze((e, n) => {
						n && t(n)
					}), e()))
				}
				onUserKicked() {
					const e = new this.self.ChannelHandler;
					e.onUserBanned = (e, t) => {
						const n = Object(T.b)(e);
						n && this.dispatch(Object(f.s)(n, t.userId))
					}, this.self.addChannelHandler("CHANNEL_USER_KICKED", e), this.channelUniqueHandlerID.push("CHANNEL_USER_KICKED")
				}
				getExistingChannels(e, t) {
					return new Promise((n, a) => {
						let s;
						if (e === m.b.INVITED && t === m.h.NonSuper ? this.channelListQueryInvited ? s = this.channelListQueryInvited : (this.channelListQueryInvited = this.self.GroupChannel.createMyGroupChannelListQuery(), s = this.channelListQueryInvited) : e === m.b.JOINED && t === m.h.NonSuper ? this.channelListQueryJoined ? s = this.channelListQueryJoined : (this.channelListQueryJoined = this.self.GroupChannel.createMyGroupChannelListQuery(), s = this.channelListQueryJoined) : e === m.b.JOINED && t === m.h.Super ? this.channelListQueryJoinedSubreddit ? s = this.channelListQueryJoinedSubreddit : (this.channelListQueryJoinedSubreddit = this.self.GroupChannel.createMyGroupChannelListQuery(), s = this.channelListQueryJoinedSubreddit) : e === m.b.INVITED && t === m.h.Super && (this.channelListQueryInvitedSubreddit ? s = this.channelListQueryInvitedSubreddit : (this.channelListQueryInvitedSubreddit = this.self.GroupChannel.createMyGroupChannelListQuery(), s = this.channelListQueryInvitedSubreddit)), s)
							if (s.includeEmpty = !0, s.limit = y.a.Channels, s.order = m.d.LATEST_MESSAGE, s.memberStateFilter = e === m.b.INVITED ? m.g.INVITED : m.g.JOINED, s.superChannelFilter = t, s.hasNext) {
								const e = s._token;
								s.next((t, a) => {
									if (!a && s) {
										let a = s.hasNext;
										const c = s._token;
										s && e && c && e === c && (a = !1, d.c.withScope(t => {
											t.setExtra("info", {
												query: JSON.stringify(s),
												currentNextToken: e,
												undatedNextToken: c
											}), d.c.captureMessage("Chat paging request infinite looping!")
										})), n({
											channels: t,
											hasMoreChannels: a
										})
									} else 800170 !== a.code && n()
								})
							} else n();
						else a()
					})
				}
				getChannelMembers(e, t) {
					return new Promise((n, a) => {
						const s = this.channels[e];
						if (!s) return a(new Error("this.channel is null or undefined"));
						this.channelMembersQuery = this.channelMembersQuery && t ? this.channelMembersQuery : s.createMemberListQuery(), this.channelMembersQuery && this.channelMembersQuery.hasNext && this.channelMembersQuery.next((e, t) => {
							if (!t && this.channelMembersQuery) {
								const t = this.channelMembersQuery.hasNext;
								n({
									members: e,
									hasMoreMembers: t
								})
							} else a(t)
						})
					})
				}
				getChannelMembersStartsWith(e, t) {
					return new Promise((n, a) => {
						const s = this.channels[e];
						if (!s) return a(new Error("this.channel is null or undefined"));
						this.memberListQuery = s.createMemberListQuery(), this.memberListQuery ? (this.memberListQuery.nicknameStartsWithFilter = t, this.memberListQuery.next((e, t) => {
							if (t) a(t);
							else {
								const t = this.memberListQuery && this.memberListQuery.hasNext || !1;
								n({
									members: e,
									hasMoreMembers: t
								})
							}
						})) : a(Error("this.memberListQuery is null or undefined"))
					})
				}
				searchMemberByName(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return new Promise((n, a) => {
						if (!this.channel) return a(new Error("this.channel is null or undefined"));
						this.memberListQuery = this.channel.createMemberListQuery(), this.memberListQuery ? (this.memberListQuery.nicknameStartsWithFilter = e, this.memberListQuery.next((a, s) => {
							const c = Object(L.a)(a),
								r = c.filter(n => t && n && n.name === e || !t && n);
							c.length && this.dispatch(Object(C.i)(c)), n(r)
						})) : a(Error("this.memberListQuery is null or undefined"))
					})
				}
				startTypingIndicator() {
					this.channel && this.channel.startTyping()
				}
				endTypingIndicator() {
					this.channel && this.channel.endTyping()
				}
				getPreviousMessages(e) {
					return new Promise((t, n) => {
						e && this.createPreviousMessageListQuery(), this.channel && this.prevMessageListQuery ? (this.prevMessageListQuery.reverse = !0, this.prevMessageListQuery.limit = y.a.Messages, this.prevMessageListQuery.load((e, a) => {
							if (!a && this.prevMessageListQuery) {
								const n = {},
									{
										hasMore: a
									} = this.prevMessageListQuery;
								e.forEach(e => {
									const t = Object(D.b)(e);
									t && (n[t.messageId] = t)
								}), t({
									messages: n,
									hasMore: a
								})
							} else Object(N.b)("Error with getting previous messages from Sendbird: ".concat(a)), n()
						})) : (Object(N.b)("Sendbird channel does not exist"), n())
					})
				}
				addMessage(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					return new Promise((a, s) => {
						if (this.channel) {
							const c = new(0, this.self.UserMessageParams);
							c.data = t, c.message = e, n && n.length && (c.mentionType = I.b.USERS, c.mentionedUserIds = n), this.channel.sendUserMessage(c, (e, t) => {
								if (t) Object(N.b)("Error with sending the message to Sendbird: ".concat(t)), s(t);
								else {
									const t = Object(D.b)(e);
									if (t && t.messageType === I.d.USER) return a(t);
									Object(N.b)("Unsupported message type: ".concat(t && t.messageType)), s()
								}
							})
						}
					})
				}
				createPreviousMessageListQuery() {
					this.channel && (this.prevMessageListQuery = this.channel.createPreviousMessageListQuery())
				}
				deleteMessage(e) {
					return new Promise(t => {
						if (this.channel) {
							const n = e;
							this.channel.deleteMessage(n, (e, n) => {
								n ? Object(N.b)("Error with deleting the message on Sendbird: ".concat(n)) : t(e)
							})
						}
					})
				}
				getFirstMessage() {
					return new Promise((e, t) => {
						this.channel ? this.channel.getNextMessagesByTimestamp(0, !0, 1, !0, "", "", (t, n) => {
							n ? Object(N.b)("Error with getting first message from Sendbird: ".concat(n)) : e(t)
						}) : (Object(N.b)("Sendbird channel does not exist"), t())
					})
				}
				getUnreadCount() {
					return new Promise((e, t) => {
						const n = ["super_group_channel_unread_message_count", "super_group_channel_invitation_count", "super_group_channel_unread_mention_count", "non_super_group_channel_unread_message_count", "non_super_group_channel_invitation_count"];
						this.self.GroupChannel.getUnreadItemCount(n, (n, a) => {
							if (a) t(a);
							else {
								const t = (Number(n.super_group_channel_unread_message_count) || 0) + (Number(n.super_group_channel_invitation_count) || 0),
									a = Number(n.super_group_channel_unread_mention_count) || 0,
									s = (Number(n.non_super_group_channel_unread_message_count) || 0) + (Number(n.non_super_group_channel_invitation_count) || 0);
								e({
									unread_count: s,
									subreddit_unread_count: t,
									subreddit_mention_count: a
								})
							}
						})
					})
				}
				markChannelAsRead() {
					return new Promise(e => {
						this.channel && this.channel.markAsRead(), e()
					})
				}
				setMyCountPreference(e, t) {
					return new Promise((n, a) => {
						const s = this.channels[e];
						s && s.setMyCountPreference(t, (e, t) => t ? a(t) : n())
					})
				}
				setPushPreference(e, t) {
					return new Promise((n, a) => {
						const s = this.channels[e],
							c = !t;
						s && s.setPushPreference(c, (e, t) => t ? a(t) : n())
					})
				}
				resetPreviousMessageListQuery() {
					return new Promise((e, t) => {
						this.channel ? (this.createPreviousMessageListQuery(), e()) : t("this.channel does not exist")
					})
				}
			};
			t.b = R
		},
		"./src/chat/tracking/events/chatPreview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			}));
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/tracking/fields/chat.ts"),
				c = n("./src/chat/tracking/fields/common.ts"),
				r = n("./src/chat/tracking/fields/subreddit.ts"),
				o = n("./src/chat/tracking/sendEvent.ts");
			const i = e => {
					Object(o.a)(Object.assign({
						noun: "preview",
						source: a.b.ChatPreview,
						action: a.a.View,
						chat: Object.assign(Object.assign(Object.assign(Object.assign({}, Object(s.g)(e)), Object(s.B)(e)), Object(s.q)(e)), Object(s.t)(e)),
						subreddit: Object.assign(Object.assign({}, Object(r.a)(e)), Object(r.b)(e))
					}, Object(c.a)(e)))
				},
				l = e => {
					Object(o.a)(Object.assign({
						noun: "join",
						source: a.b.ChatPreview,
						action: a.a.Click,
						chat: Object.assign(Object.assign(Object.assign(Object.assign({}, Object(s.g)(e)), Object(s.B)(e)), Object(s.q)(e)), Object(s.t)(e)),
						subreddit: Object.assign(Object.assign({}, Object(r.a)(e)), Object(r.b)(e))
					}, Object(c.a)(e)))
				}
		},
		"./src/chat/tracking/events/chatSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "e", (function() {
				return m
			}));
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/tracking/fields/chat.ts"),
				c = n("./src/chat/tracking/fields/common.ts"),
				r = n("./src/chat/tracking/fields/subreddit.ts"),
				o = n("./src/chat/tracking/sendEvent.ts");
			const i = e => Object(o.a)(Object.assign({
					noun: "chat_settings",
					source: a.b.ChatSettings,
					action: a.a.View,
					chat: Object.assign(Object.assign(Object.assign({}, Object(s.B)(e)), Object(s.q)(e)), Object(s.g)(e)),
					subreddit: Object.assign(Object.assign({}, Object(r.a)(e)), Object(r.b)(e))
				}, Object(c.a)(e))),
				l = (e, t) => Object(o.a)(Object.assign({
					noun: "chat_member_block",
					source: a.b.ChatSettings,
					action: a.a.Submit,
					chat: Object.assign(Object.assign(Object.assign(Object.assign({}, Object(s.B)(e)), Object(s.q)(e)), Object(s.g)(e)), Object(s.b)(t)),
					subreddit: Object.assign(Object.assign({}, Object(r.a)(e)), Object(r.b)(e))
				}, Object(c.a)(e))),
				d = e => {
					Object(o.a)(Object.assign({
						noun: "view_member",
						source: a.b.ChatSettings,
						action: a.a.Click,
						chat: Object.assign(Object.assign(Object.assign(Object.assign({}, Object(s.B)(e)), Object(s.q)(e)), Object(s.v)(e)), Object(s.g)(e))
					}, Object(c.a)(e)))
				},
				u = (e, t) => {
					Object(o.a)(Object.assign({
						noun: "chat_member_report",
						source: a.b.ChatSettings,
						action: a.a.Submit,
						chat: Object.assign(Object.assign(Object.assign(Object.assign({}, Object(s.B)(e)), Object(s.q)(e)), Object(s.g)(e)), Object(s.x)(t)),
						subreddit: Object.assign(Object.assign({}, Object(r.a)(e)), Object(r.b)(e))
					}, Object(c.a)(e)))
				},
				h = e => Object(o.a)(Object.assign({
					noun: "leave_group",
					source: a.b.ChatSettings,
					action: a.a.Click,
					chat: Object.assign(Object.assign(Object.assign(Object.assign({}, Object(s.B)(e)), Object(s.q)(e)), Object(s.g)(e)), Object(s.z)(e)),
					subreddit: Object.assign(Object.assign({}, Object(r.a)(e)), Object(r.b)(e))
				}, Object(c.a)(e))),
				m = (e, t, n) => Object(o.a)(Object.assign({
					noun: t ? "lock_room" : "unlock_room",
					source: a.b.ChatSettings,
					action: n ? a.a.Click : a.a.View,
					chat: Object.assign(Object.assign(Object.assign({}, Object(s.B)(e)), Object(s.q)(e)), Object(s.g)(e)),
					subreddit: Object.assign(Object.assign({}, Object(r.a)(e)), Object(r.b)(e))
				}, Object(c.a)(e)))
		},
		"./src/chat/tracking/events/chatView.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "e", (function() {
				return m
			}));
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/selectors/telemetry.ts"),
				c = n("./src/chat/tracking/fields/chat.ts"),
				r = n("./src/chat/tracking/fields/common.ts"),
				o = n("./src/chat/tracking/fields/subreddit.ts"),
				i = n("./src/chat/tracking/sendEvent.ts");
			const l = e => Object(i.a)(Object.assign({
					noun: "chat",
					source: a.b.ChatView,
					action: a.a.View,
					chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.B)(e)), Object(c.q)(e)), Object(c.g)(e)), Object(c.t)(e)), Object(c.l)(e)), Object(c.z)(e)),
					subreddit: Object.assign(Object.assign({}, Object(o.a)(e)), Object(o.b)(e))
				}, Object(r.a)(e))),
				d = (e, t) => {
					Object(i.a)(Object.assign({
						noun: "chat_message",
						source: a.b.ChatView,
						action: a.a.Submit,
						chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.B)(e)), Object(c.q)(e)), Object(c.g)(e)), Object(c.t)(e, 0)), Object(c.o)(e, t)), Object(c.y)(e, t)), Object(c.z)(e)),
						subreddit: Object.assign(Object.assign({}, Object(o.a)(e)), Object(o.b)(e))
					}, Object(r.a)(e)))
				},
				u = (e, t, n) => {
					Object(i.a)(Object.assign(Object.assign({
						noun: "chat_message_failed",
						source: a.b.ChatView,
						action: a.a.View,
						chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.B)(e)), Object(c.q)(e)), Object(c.g)(e)), Object(c.t)(e, 0)), Object(c.u)(e, t)), Object(c.y)(e)), Object(c.z)(e)), Object(c.m)(e, t)),
						subreddit: Object.assign(Object.assign({}, Object(o.a)(e)), Object(o.b)(e))
					}, Object(r.a)(e)), {
						actionInfo: Object.assign({
							reason: n
						}, Object(s.a)(e))
					}))
				},
				h = (e, t, n) => {
					Object(i.a)(Object.assign({
						noun: "report_message",
						source: a.b.ChatView,
						action: a.a.Submit,
						chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.B)(e)), Object(c.q)(e)), Object(c.g)(e)), Object(c.t)(e, 0)), Object(c.n)(t)), Object(c.o)(e, t)), Object(c.w)(n)), Object(c.y)(e, t)), Object(c.z)(e)),
						subreddit: Object.assign(Object.assign({}, Object(o.a)(e)), Object(o.b)(e))
					}, Object(r.a)(e)))
				},
				m = e => {
					Object(i.a)(Object.assign({
						noun: "history",
						source: a.b.ChatView,
						action: a.a.View,
						chat: Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.B)(e)), Object(c.q)(e)), Object(c.g)(e)), Object(c.z)(e)),
						subreddit: Object.assign(Object.assign({}, Object(o.a)(e)), Object(o.b)(e))
					}, Object(r.a)(e)))
				}
		},
		"./src/chat/tracking/events/contactsList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			}));
			var a = n("./src/chat/tracking/sendEvent.ts"),
				s = n("./src/telemetry/models/Event.ts"),
				c = n("./src/chat/tracking/fields/chat.ts"),
				r = n("./src/chat/tracking/fields/common.ts"),
				o = n("./src/chat/tracking/fields/subreddit.ts");
			const i = e => {
					Object(a.a)(Object.assign({
						noun: "contacts",
						source: s.b.ContactsList,
						action: s.a.View,
						chat: Object.assign(Object.assign({}, Object(c.c)(e)), Object(c.d)(e))
					}, Object(r.a)(e)))
				},
				l = (e, t) => {
					Object(a.a)(Object.assign({
						noun: "contact_add",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.e)(e)), Object(c.a)(e, t)), Object(c.c)(e)), Object(c.g)(e)), Object(c.f)(e)), Object(c.C)(e, t))
					}, Object(r.a)(e)))
				},
				d = e => {
					Object(a.a)(Object.assign({
						noun: "alert_invalid_user",
						source: s.b.ContactsList,
						action: s.a.View,
						chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.B)(e)), Object(c.c)(e)), Object(c.d)(e)), Object(c.g)(e)), Object(c.C)(e, "search")), Object(c.f)(e))
					}, Object(r.a)(e)))
				},
				u = (e, t) => {
					Object(a.a)(Object.assign({
						noun: "alert_invalid_channel",
						source: s.b.ContactsList,
						action: s.a.View,
						chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.B)(e)), Object(c.c)(e)), Object(c.d)(e)), Object(c.g)(e)), Object(c.C)(e, t)), Object(c.f)(e))
					}, Object(r.a)(e)))
				},
				h = (e, t) => {
					Object(a.a)(Object.assign({
						noun: "create_chat",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.B)(e, t)), Object(c.c)(e)), Object(c.d)(e)), Object(c.g)(e, t)), Object(c.f)(e))
					}, Object(r.a)(e)))
				},
				m = e => {
					Object(a.a)(Object.assign({
						noun: "close_contacts",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.e)(e)), Object(c.c)(e)), Object(c.d)(e)), Object(c.g)(e)), Object(c.f)(e))
					}, Object(r.a)(e)))
				},
				b = e => {
					Object(a.a)(Object.assign({
						noun: "add_to_chat",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.B)(e)), Object(c.q)(e)), Object(c.g)(e)), Object(c.d)(e)), Object(c.f)(e)),
						subreddit: Object.assign(Object.assign({}, Object(o.a)(e)), Object(o.b)(e))
					}, Object(r.a)(e)))
				}
		},
		"./src/chat/tracking/events/invitationInbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "g", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/chat/tracking/sendEvent.ts"),
				s = n("./src/telemetry/models/Event.ts"),
				c = n("./src/chat/tracking/fields/chat.ts"),
				r = n("./src/chat/tracking/fields/common.ts"),
				o = n("./src/chat/tracking/fields/subreddit.ts");
			const i = e => Object(a.a)(Object.assign({
					noun: "inbox",
					source: s.b.InvitationInbox,
					action: s.a.View,
					chat: Object.assign(Object.assign({}, Object(c.j)(e, "room")), Object(c.r)(e))
				}, Object(r.a)(e))),
				l = e => Object(a.a)(Object.assign({
					noun: "invitation",
					source: s.b.InvitationInbox,
					action: s.a.View,
					chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.j)(e)), Object(c.k)(e)), Object(c.h)(e)), Object(c.i)(e)), Object(c.q)(e)),
					subreddit: Object.assign(Object.assign({}, Object(o.a)(e)), Object(o.b)(e))
				}, Object(r.a)(e))),
				d = e => Object(a.a)(Object.assign({
					noun: "invitation_accept",
					source: s.b.InvitationInbox,
					action: s.a.Click,
					chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.j)(e)), Object(c.k)(e)), Object(c.h)(e)), Object(c.i)(e)), Object(c.q)(e)),
					subreddit: Object.assign(Object.assign({}, Object(o.a)(e)), Object(o.b)(e))
				}, Object(r.a)(e))),
				u = e => Object(a.a)(Object.assign({
					noun: "invitation_decline",
					source: s.b.InvitationInbox,
					action: s.a.Click,
					chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.j)(e)), Object(c.k)(e)), Object(c.h)(e)), Object(c.i)(e)), Object(c.q)(e)),
					subreddit: Object.assign(Object.assign({}, Object(o.a)(e)), Object(o.b)(e))
				}, Object(r.a)(e))),
				h = e => Object(a.a)(Object.assign({
					noun: "invitation_view_member",
					source: s.b.InvitationInbox,
					action: s.a.Click,
					chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.j)(e)), Object(c.k)(e)), Object(c.h)(e)), Object(c.i)(e)), Object(c.q)(e)),
					subreddit: Object.assign(Object.assign({}, Object(o.a)(e)), Object(o.b)(e))
				}, Object(r.a)(e))),
				m = e => {
					Object(a.a)(Object.assign({
						noun: "expand",
						source: s.b.InvitationInbox,
						action: s.a.Click
					}, Object(r.a)(e)))
				},
				b = e => {
					Object(a.a)(Object.assign({
						noun: "collapse",
						source: s.b.InvitationInbox,
						action: s.a.Click
					}, Object(r.a)(e)))
				},
				p = new Set,
				g = (e, t) => {
					p.has(t) || (p.add(t), Object(a.a)(Object.assign({
						noun: "collapsed_message",
						source: s.b.Chat,
						action: s.a.View,
						chat: {
							message_id: t
						}
					}, Object(r.a)(e))))
				},
				O = (e, t, n) => {
					Object(a.a)(Object.assign({
						noun: "collapsed_message",
						source: s.b.Chat,
						action: s.a.Approve,
						chat: {
							id: t,
							message_id: n
						}
					}, Object(r.a)(e)))
				},
				f = (e, t, n) => {
					Object(a.a)(Object.assign({
						noun: "collapsed_message",
						source: s.b.Chat,
						action: s.a.Report,
						chat: {
							id: t,
							message_id: n
						}
					}, Object(r.a)(e)))
				}
		},
		"./src/chat/tracking/events/messagesInbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return g
			}));
			var a = n("./src/chat/selectors/telemetry.ts"),
				s = n("./src/chat/selectors/promos.ts");
			const c = e => {
				return {
					settingValue: Object(s.c)(e) ? "ftue_none" : "ftue_open"
				}
			};
			var r = n("./src/chat/tracking/fields/chat.ts"),
				o = n("./src/chat/tracking/fields/common.ts"),
				i = n("./src/chat/tracking/sendEvent.ts"),
				l = n("./src/telemetry/models/Event.ts");
			const d = e => {
					Object(i.a)(Object.assign({
						noun: "inbox",
						source: l.b.MessageInbox,
						action: l.a.View,
						chat: Object.assign(Object.assign(Object.assign({}, Object(r.p)(e)), Object(r.A)(e)), Object(r.r)(e, !1))
					}, Object(o.a)(e)))
				},
				u = e => {
					Object(i.a)(Object.assign({
						noun: "rooms_inbox",
						source: l.b.MessageInbox,
						action: l.a.View,
						chat: Object.assign(Object.assign({}, Object(r.s)(e)), Object(r.r)(e, !0))
					}, Object(o.a)(e)))
				},
				h = e => {
					Object(i.a)(Object.assign({
						noun: "create_chat",
						source: l.b.MessageInbox,
						action: l.a.Click,
						chat: Object.assign(Object.assign(Object.assign({}, Object(r.p)(e)), Object(r.A)(e)), Object(r.r)(e))
					}, Object(o.a)(e)))
				},
				m = e => {
					Object(i.a)(Object.assign(Object.assign({
						noun: "close_chat",
						source: l.b.MessageInbox,
						action: l.a.Click,
						chat: Object.assign(Object.assign({}, Object(r.p)(e)), Object(r.r)(e))
					}, Object(o.a)(e)), {
						actionInfo: Object.assign(Object.assign({}, c(e)), Object(a.a)(e))
					}))
				},
				b = e => {
					Object(i.a)(Object.assign({
						noun: "rooms_tooltip_523",
						source: l.b.MessageInbox,
						action: l.a.View,
						chat: Object.assign(Object.assign({}, Object(r.p)(e)), Object(r.r)(e))
					}, Object(o.a)(e)))
				},
				p = e => {
					Object(i.a)(Object.assign({
						noun: "dismiss_rooms_tooltip_523",
						source: l.b.MessageInbox,
						action: l.a.Click,
						chat: Object.assign(Object.assign({}, Object(r.p)(e)), Object(r.r)(e))
					}, Object(o.a)(e)))
				},
				g = e => {
					Object(i.a)(Object.assign(Object.assign({
						noun: "minimize_chat",
						source: l.b.MessageInbox,
						action: l.a.Click,
						chat: Object.assign(Object.assign({}, Object(r.p)(e)), Object(r.r)(e))
					}, Object(o.a)(e)), {
						actionInfo: Object.assign(Object.assign({}, c(e)), Object(a.a)(e))
					}))
				}
		},
		"./src/chat/tracking/events/platform.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var a = n("./src/chat/tracking/sendEvent.ts"),
				s = n("./src/telemetry/models/Event.ts"),
				c = n("./src/chat/tracking/fields/chat.ts"),
				r = n("./src/chat/tracking/fields/common.ts");
			const o = (e, t, n, o) => {
					Object(a.a)(Object.assign({
						noun: t || "chat",
						source: n || s.b.Nav,
						action: o || s.a.Click,
						chat: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Object(c.g)(e)), Object(c.v)(e)), Object(c.q)(e)), Object(c.A)(e)), Object(c.B)(e))
					}, Object(r.a)(e)))
				},
				i = e => {
					Object(a.a)(Object.assign({
						source: s.b.Nav,
						action: s.a.View,
						noun: "orangered_06"
					}, Object(r.a)(e)))
				}
		},
		"./src/chat/tracking/fields/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return m
			})), n.d(t, "B", (function() {
				return b
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "F", (function() {
				return O
			})), n.d(t, "E", (function() {
				return f
			})), n.d(t, "q", (function() {
				return j
			})), n.d(t, "y", (function() {
				return C
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "D", (function() {
				return _
			})), n.d(t, "A", (function() {
				return v
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "s", (function() {
				return x
			})), n.d(t, "r", (function() {
				return S
			})), n.d(t, "o", (function() {
				return N
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "C", (function() {
				return w
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "j", (function() {
				return A
			})), n.d(t, "i", (function() {
				return D
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "x", (function() {
				return U
			})), n.d(t, "v", (function() {
				return B
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "l", (function() {
				return H
			})), n.d(t, "z", (function() {
				return F
			})), n.d(t, "n", (function() {
				return K
			})), n.d(t, "w", (function() {
				return G
			})), n.d(t, "m", (function() {
				return z
			}));
			n("./node_modules/core-js/modules/es6.array.sort.js");
			var a, s = n("./node_modules/lodash/difference.js"),
				c = n.n(s),
				r = n("./node_modules/lodash/isEmpty.js"),
				o = n.n(r),
				i = n("./src/chat/models/Channel/index.ts"),
				l = n("./src/chat/selectors/channels.ts"),
				d = n("./src/chat/selectors/contacts.ts"),
				u = n("./src/chat/selectors/messages.ts");
			! function(e) {
				e.Direct = "direct", e.Group = "group", e.SubredditPublic = "room_public", e.SubredditPrivate = "room_private"
			}(a || (a = {}));
			const h = (e, t) => {
					switch (e) {
						case i.a.Direct:
							return a.Direct;
						case i.a.Group:
							return a.Group;
						case i.a.Subreddit:
							return t ? a.SubredditPublic : a.SubredditPrivate
					}
				},
				m = (e, t) => {
					const n = t ? Object(l.h)(e, t) : Object(l.k)(e);
					return n && {
						id: n.channelSendbirdUrl
					}
				},
				b = (e, t) => {
					const n = t ? Object(l.h)(e, t) : Object(l.m)(e);
					if (n) {
						const {
							type: e,
							isPublic: t
						} = n, a = h(e, t);
						return a && {
							type: a
						}
					}
				},
				p = e => {
					return {
						type: Object(d.l)(e) > 1 ? a.Group : a.Direct
					}
				},
				g = e => {
					const t = Object(d.l)(e);
					return {
						number_members: t ? t + 1 : 0
					}
				},
				O = (e, t) => {
					return {
						type: (t && t.length) > 2 ? a.Group : a.Direct
					}
				},
				f = (e, t) => {
					const {
						members: n
					} = _(e, t);
					return {
						number_members: n.length
					}
				},
				j = e => {
					const t = Object(l.m)(e);
					return {
						number_members: t && t.memberCount
					}
				},
				C = (e, t) => {
					const n = Object(u.e)(e, t);
					return {
						sender_user_id: n && n.userId || e.user.account.id
					}
				},
				E = e => {
					const t = Object(l.k)(e);
					return {
						sender_user_id: t && t.inviter && t.inviter.id
					}
				},
				_ = (e, t) => (t.push(e.user.account.id), {
					members: t
				}),
				v = e => ({
					number_unreads: Object(u.j)(e)
				}),
				y = (e, t) => {
					const n = Object(l.m)(e),
						a = n && n.unreadMessageCount;
					return {
						number_unreads: "number" == typeof t ? t : a || 0
					}
				},
				I = e => ({
					number_channels: Object(l.r)(e)
				}),
				x = e => ({
					number_channels: Object(l.s)(e)
				}),
				S = (e, t) => {
					const n = Object(l.m)(e),
						a = n && n.type === i.a.Subreddit;
					return void 0 !== t ? {
						number_pending_invites: t ? Object(l.p)(e) : Object(l.n)(e)
					} : {
						number_pending_invites: a ? Object(l.p)(e) : Object(l.n)(e)
					}
				},
				N = (e, t) => ({
					message_type: Object(u.g)(e, t) || "text"
				}),
				k = (e, t) => {
					const n = Object(u.h)(e, t);
					return n && {
						message_type: n.messageData.type
					}
				},
				w = (e, t, n) => {
					const a = Object(d.a)(e, t);
					return {
						user_added_method: n || (a || null)
					}
				},
				T = e => {
					let t = !1;
					const n = Object(d.f)(e),
						a = Object(l.f)(e);
					return n && n.length && a && a.length && (t = !!a.find(e => o()(c()(n.sort(), e.sort())))), {
						existing_channel: t
					}
				},
				M = e => {
					const t = Object(l.m)(e);
					return {
						invitation_id: t ? t.channelSendbirdUrl : null
					}
				},
				A = (e, t) => {
					if (t) return {
						invitation_type: t
					};
					const n = Object(l.m)(e),
						a = n && h(n.type, n.isPublic);
					return a && {
						invitation_type: a
					}
				},
				D = e => {
					const t = Object(l.m)(e);
					return {
						invitation_timestamp: t ? t.createdAt : null
					}
				},
				L = e => ({
					blocked_user_id: e || null
				}),
				U = e => ({
					reported_user_id: e || null
				}),
				B = e => {
					const t = Object(l.m)(e),
						n = !(!t || t.type !== i.a.Direct),
						a = Object(l.u)(e),
						s = a && a.length && a[0].id;
					return {
						recipient_user_id: n ? s : null
					}
				},
				R = (e, t) => {
					const n = Object(d.b)(e, t);
					return {
						recipient_user_id: n ? n.id : null
					}
				},
				P = e => {
					const t = Object(d.k)(e);
					return {
						recipient_user_id: 1 === t.length ? t[0] : null
					}
				},
				H = e => ({
					is_member: Object(l.Q)(e)
				}),
				F = e => {
					const t = Object(l.l)(e);
					return t && {
						shown_history: !!t.lastMessage
					}
				},
				K = e => ({
					message_id: e
				}),
				G = e => ({
					report_reason: e
				}),
				z = (e, t) => {
					const n = Object(u.d)(e, t);
					if (n) return {
						message_body: n.value
					}
				}
		},
		"./src/chat/tracking/fields/common.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var a = n("./src/config.ts"),
				s = n("./src/chat/constants/container.ts"),
				c = n("./src/chat/selectors/telemetry.ts");
			const r = e => ({
					app: {
						name: e.meta.isRedesign || e.container.size === s.a.FULL ? a.a.telemetry.appName.chat2x : a.a.telemetry.appName.chatR2
					},
					platform: Object(c.b)(e),
					user: Object(c.i)(e),
					screen: Object(c.g)(e),
					session: Object(c.h)(e),
					referrer: Object(c.f)(e),
					actionInfo: Object(c.a)(e)
				}),
				o = e => ({
					comment: Object(c.c)(e),
					post: Object(c.d)(e),
					profile: Object(c.e)(e)
				})
		},
		"./src/chat/tracking/fields/subreddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			}));
			var a = n("./src/chat/selectors/subreddit.ts");
			const s = e => {
					const t = Object(a.b)(e);
					return t && {
						id: t.id
					}
				},
				c = e => {
					const t = Object(a.b)(e);
					return t && {
						name: t.name
					}
				}
		},
		"./src/chat/tracking/sendEvent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./src/telemetry/index.ts"),
				s = n("./src/chat/helpers/errors.ts");
			const c = e => {
				if (e.session && e.session.id) try {
					Object(a.a)(e)
				} catch (t) {
					Object(s.b)("Error sending telemetry event: ".concat(t))
				}
			}
		},
		"./src/graphql/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		},
		"./src/higherOrderComponents/addOverlayEvents.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return u
			}));
			var a, s = n("./node_modules/lodash/debounce.js"),
				c = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/overlayEvents.ts");

			function u(e, t) {
				class n extends r.Component {
					constructor(e) {
						super(e), this.handleKeyDown = e => {
							e.keyCode === l.F && this.props.onKeyDown(e)
						}, this.handleMouseClick = e => {
							this.props.onMouseClick(e)
						}, this.handleResize = c()(e => {
							this.props.onResize(e)
						}, 250, {
							leading: !0
						})
					}
					componentDidMount() {
						t && -1 !== t.indexOf(a.Keydown) || document.addEventListener("keydown", this.handleKeyDown), t && -1 !== t.indexOf(a.Click) || document.addEventListener("click", this.handleMouseClick), t && -1 !== t.indexOf(a.Resize) || window.addEventListener("resize", this.handleResize)
					}
					componentWillUnmount() {
						document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("click", this.handleMouseClick), window.removeEventListener("resize", this.handleResize)
					}
					render() {
						return o.a.createElement(e, this.props)
					}
				}
				return Object(i.b)(null, e => ({
					onKeyDown: t => e(d.d({
						event: t
					})),
					onMouseClick: t => e(d.e({
						event: t
					})),
					onResize: t => e(d.f({
						event: t
					}))
				}))(n)
			}! function(e) {
				e.Click = "click", e.Keydown = "keydown", e.Resize = "resize"
			}(a || (a = {}))
		},
		"./src/higherOrderComponents/asTooltip.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "a", (function() {
				return f
			}));
			var a = n("./node_modules/lodash/omit.js"),
				s = n.n(a),
				c = n("./node_modules/react/index.js"),
				r = n.n(c),
				o = n("./src/lib/fastdom/index.ts"),
				i = n("./src/reddit/components/Portal/index.tsx"),
				l = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/higherOrderComponents/sizeMe.tsx"),
				u = n("./src/reddit/components/HiddenDiv.m.less"),
				h = n.n(u),
				m = n("./src/lib/lessComponent.tsx").a.div("Component", h.a);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const p = ["left", "bottom"],
				g = ["left", "top"],
				O = e => {
					let {
						container: t,
						containerHeight: n,
						excludeContainerPosition: a,
						isFixed: s,
						targetBox: c,
						isOverlayOff: r,
						targetPosition: o,
						tooltipSize: i,
						tooltipPosition: l
					} = e;
					const d = document.body,
						u = d.clientTop || 0,
						h = d.clientLeft || 0,
						[m, b, p, g] = t ? [t.scrollLeft, t.scrollTop, t.scrollWidth, n || t.scrollHeight] : [window.pageXOffset, window.pageYOffset, window.innerWidth, document.body.scrollHeight],
						O = {
							bottom: c.bottom,
							center: c.top + c.height / 2,
							top: c.top
						} [o[1]] + {
							bottom: -i.height,
							center: -i.height / 2,
							top: 0
						} [l[1]],
						f = {
							left: c.left,
							center: c.left + c.width / 2,
							right: c.right
						} [o[0]] + {
							left: 0,
							center: -i.width / 2,
							right: -i.width
						} [l[0]];
					let j, C;
					s ? (j = O - u, C = f - h) : (C = m + h + f, j = b + u + O);
					const E = {
							left: C,
							top: j
						},
						_ = {
							bottom: Math.max(0, j + i.height - g),
							left: Math.max(0, 0 - C),
							right: Math.max(0, C + i.width - p),
							top: Math.max(0, 0 - j)
						};
					if (p > 320 && g > 667 && !r && (Boolean(_.left) !== Boolean(_.right) && (_.left ? E.left = 0 : E.left -= _.right), Boolean(_.top) !== Boolean(_.bottom) && (_.top ? E.top = 0 : E.top -= _.bottom)), a && t) {
						const e = t.getBoundingClientRect();
						E.top = E.top - e.top, E.left = E.left - e.left
					}
					return {
						overflow: _,
						style: E
					}
				};

			function f(e, t) {
				const n = Object(l.b)(e, t),
					a = Object(d.a)(e => {
						const {
							container: t,
							containerHeight: a,
							domEl: c,
							excludeContainerPosition: o,
							isFixed: i,
							target: l,
							isOverlayOff: d,
							targetPosition: u,
							tooltipPosition: h
						} = e;
						if (!l || !c) return null;
						const m = c.getBoundingClientRect(),
							f = l.getBoundingClientRect(),
							j = O({
								container: t,
								containerHeight: a,
								excludeContainerPosition: o,
								isOverlayOff: d,
								isFixed: !!i,
								targetBox: f,
								targetPosition: u || p,
								tooltipSize: {
									height: m.height,
									width: m.width
								},
								tooltipPosition: h || g
							}),
							C = s()(e, "target", "targetPosition", "tooltipPosition"),
							E = e.style ? Object.assign(Object.assign({}, j.style), e.style) : j.style;
						return r.a.createElement(n, b({}, C, {
							overflow: j.overflow,
							style: E,
							targetBox: f
						}))
					});
				class u extends c.Component {
					constructor() {
						super(...arguments), this.state = {
							containerHeight: null,
							isOpen: !1,
							mounted: !1
						}, this.target = null
					}
					componentDidMount() {
						this.target = this.props.tooltipTarget || document.getElementById(this.props.tooltipId), this.props.isOpen && o.a.write(() => {
							this.setState({
								mounted: !0
							})
						})
					}
					componentDidUpdate() {
						this.target = this.props.tooltipTarget || document.getElementById(this.props.tooltipId)
					}
					static getDerivedStateFromProps(e, t) {
						if (t.isOpen === e.isOpen) return null;
						return {
							containerHeight: e.isOpen && !t.isOpen && e.container ? e.container.scrollHeight : null,
							isOpen: e.isOpen
						}
					}
					render() {
						if (!this.props.isOpen) return this.props.renderContentsHidden ? r.a.createElement(m, null, this.props.children) : null;
						const {
							isOpen: e,
							tooltipId: t,
							tooltipTarget: n
						} = this.props, {
							containerHeight: c,
							mounted: o
						} = this.state, l = s()(this.props, "isOpen"), d = t ? this.target : n, u = "".concat(e, "-").concat(o, "-").concat(t || "");
						return r.a.createElement(i.a, {
							key: u,
							container: this.props.container
						}, r.a.createElement(a, b({}, l, {
							containerHeight: c,
							target: d
						})))
					}
				}
				return u
			}
		},
		"./src/higherOrderComponents/makeAsync.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function c(e) {
				var t;
				return (t = class t extends s.a.Component {
					constructor(e) {
						super(e), this.mounted = !1, this.state = {
							Component: t.Component
						}
					}
					componentDidMount() {
						this.mounted = !0, this.state.Component !== e.ErrorComponent && e.getComponent().then(e => {
							t.Component = e, this.mounted && this.setState({
								Component: e
							})
						}, t => (this.mounted && this.setState({
							Component: e.ErrorComponent
						}), Promise.reject(t)))
					}
					componentWillUnmount() {
						this.mounted = !1
					}
					render() {
						const t = this.state.Component || e.LoadingComponent;
						return s.a.createElement(t, this.props)
					}
				}).Component = null, t
			}
		},
		"./src/higherOrderComponents/sizeMe.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/omit.js"),
				s = n.n(a),
				c = n("./node_modules/react/index.js"),
				r = n.n(c),
				o = n("./node_modules/react-dom/index.js"),
				i = n.n(o);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				return e.displayName || e.name || "Component"
			}
			class u extends c.Component {
				render() {
					return c.Children.only(this.props.children)
				}
			}
			u.displayName = "SizeMeReferenceWrapper";
			const h = e => {
				let {
					style: t
				} = e;
				const n = {
					style: t || {
						width: "100%",
						height: "100%"
					}
				};
				return r.a.createElement("div", n)
			};
			h.displayName = "SizeMePlaceholder", t.a = function(e) {
				const t = function(e) {
					const t = t => {
						const {
							domEl: n,
							explicitRef: a,
							placeholder: c,
							size: o,
							style: i
						} = t, d = s()(t, "explicitRef", "size", "style"), m = "object" != typeof o || "number" != typeof o.width && "number" != typeof o.height, b = {
							domEl: n,
							style: i
						};
						"object" == typeof o && (b.size = o);
						const p = m && !1 !== c ? r.a.createElement(h, {
							style: i
						}) : r.a.createElement(e, l({}, b, d));
						return r.a.createElement(u, {
							ref: a
						}, p)
					};
					return t.displayName = "SizeMeRenderer(".concat(d(e), ")"), t
				}(e);
				class n extends r.a.Component {
					constructor() {
						super(...arguments), this.state = {
							width: void 0,
							height: void 0
						}, this.refCallback = e => {
							this.reactInst = e
						}, this.hasSizeChanged = (e, t) => {
							const n = e,
								a = t;
							return Number(n.height).toFixed(0) !== Number(a.height).toFixed(0) || Number(n.width).toFixed(0) !== Number(a.width).toFixed(0)
						}, this.checkIfSizeChanged = e => {
							const {
								width: t,
								height: n
							} = e.getBoundingClientRect(), a = {
								width: t,
								height: n
							};
							this.hasSizeChanged(this.state, a) && this.setState(a)
						}
					}
					componentDidMount() {
						this.handleDOMNode()
					}
					componentDidUpdate() {
						this.handleDOMNode()
					}
					componentWillUnmount() {
						this.hasSizeChanged = () => !1, this.checkIfSizeChanged = e => void 0, this.domEl && (this.domEl = null)
					}
					handleDOMNode() {
						const e = this.reactInst && i.a.findDOMNode(this.reactInst);
						e ? (this.domEl = e, this.checkIfSizeChanged(this.domEl)) : this.domEl && (this.domEl = null)
					}
					render() {
						const e = Object.assign({}, this.state);
						return r.a.createElement(t, l({
							domEl: this.domEl,
							explicitRef: this.refCallback,
							size: e
						}, this.props))
					}
				}
				return n.displayName = "SizeMe(".concat(d(e), ")"), n
			}
		},
		"./src/lib/convertToCamelCase/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = e => {
				const t = {};
				for (const n in e) {
					t[n.replace(/_\w/g, e => e[1].toUpperCase())] = e[n]
				}
				return t
			}
		},
		"./src/lib/lessComponent.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				r = function(e, t) {
					var n = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
					}
					return n
				};
			const o = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noindex", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview", "svg", "animate", "animateMotion", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "switch", "symbol", "text", "textPath", "tspan", "use", "view"],
				i = (e, t, n) => {
					const a = n[t];
					class o extends s.a.PureComponent {
						render() {
							const t = this.props,
								{
									className: n,
									innerRef: o
								} = t,
								i = r(t, ["className", "innerRef"]);
							return s.a.createElement(e, Object.assign(Object.assign({}, i), {
								ref: o,
								className: Object(c.a)(a, n)
							}))
						}
					}
					return o.cssClassName = a, o.displayName = t, o
				},
				l = {};
			for (const d of o) l[d] = (e, t) => i(d, e, t);
			t.a = Object.assign(Object.assign({}, l), {
				wrapped: (e, t, n) => {
					const a = n[t];
					class o extends s.a.PureComponent {
						render() {
							const t = this.props,
								{
									className: n
								} = t,
								o = r(t, ["className"]);
							return s.a.createElement(e, Object.assign(Object.assign({}, o), {
								className: Object(c.a)(a, n)
							}))
						}
					}
					return o.cssClassName = a, o.displayName = t, o
				}
			})
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "h", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var a = n("./node_modules/linkify-it/index.js"),
				s = n.n(a),
				c = n("./node_modules/tlds/index.js"),
				r = n.n(c),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./node_modules/lodash/values.js"),
				l = n.n(i);
			const d = e => l()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				h = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				m = s()().tlds(r.a).set({
					fuzzyIP: !0
				}),
				b = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				p = h(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				g = h(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				O = s()().tlds(r.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				f = m.normalize;
			m.normalize = e => {
				f.call(m, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const j = (e, t) => {
					return (O.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				C = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !d(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				E = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				_ = e => {
					const t = m.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var a = n("./src/lib/localStorageAvailable/index.ts"),
				s = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const r = async (e, t, n, r, o, i) => {
				if (Object(a.a)()) {
					const t = localStorage.getItem(s.h),
						n = (new Date).getTime();
					if (!e && t && parseInt(t) + s.i > n) return void i();
					localStorage.setItem(s.h, n.toString())
				}
				const l = Object(c.a)();
				if (l === s.c.BrowserUnsupported || l === s.c.LocalStorageUnavailable || l === s.c.NotAllRequiredAPIsSupported) return void i();
				if ("denied" === Notification.permission) return r(!1, !1), void i();
				if ("granted" === Notification.permission) return o(!1), void i();
				const d = localStorage.getItem(s.f);
				if (t || !d || d !== s.g) switch (n(), await Notification.requestPermission()) {
					case "granted":
						o(!0);
						break;
					case "denied":
						r(!0, !0);
						break;
					default:
						r(!0, !1), localStorage.setItem(s.f, s.g)
				} else i()
			}
		},
		"./src/lib/notifications/token.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var a = n("./src/config.ts"),
				s = n("./src/graphql/operations/RegisterWebPushToken.json"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/lib/serviceWorker/index.ts"),
				o = n("./src/lib/timezone/index.ts"),
				i = (n("./node_modules/core-js/modules/es6.regexp.replace.js"), e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						n = window.atob(t),
						a = new Uint8Array(n.length);
					for (let s = 0; s < n.length; ++s) a[s] = n.charCodeAt(s);
					return a
				});
			var l;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(l || (l = {}));
			const d = async e => {
				try {
					const t = await Object(r.a)();
					if (!t) return l.FailedNoServiceWorker;
					let n = await t.pushManager.getSubscription();
					if (!n) {
						const e = {
							userVisibleOnly: !0,
							applicationServerKey: i(a.a.pushNotificationApplicationServerKey)
						};
						n = await t.pushManager.subscribe(e)
					}
					if (!n) return l.FailedNoSubscription;
					const d = await ((e, t) => {
						const n = {
							pushToken: JSON.stringify(t),
							timezoneName: Object(o.b)() || o.a,
							timestamp: (new Date).toISOString(),
							language: "en_us"
						};
						return Object(c.a)(e(), Object.assign(Object.assign({}, s), {
							variables: n
						}))
					})(e, n);
					if (d && !d.ok) return l.FailedResponse;
					const u = null == d ? void 0 : d.body.data.registerWebPushToken;
					return u && !u.ok ? l.FailedGqlReponse : l.Success
				} catch (t) {
					return console.error(t), l.FailedGeneric
				}
			}
		},
		"./src/lib/serviceWorker/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			}));
			const a = "/sw.js";
			async function s(e) {
				if ("undefined" != typeof window && "serviceWorker" in navigator) return navigator.serviceWorker.register(a, e)
			}
			const c = (e, t) => {
				navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: e,
					payload: t
				})
			}
		},
		"./src/reddit/components/HiddenDiv.m.less": function(e, t, n) {
			e.exports = {
				Component: "_1VhYfuKTAdUU_3j4cMjkr5",
				component: "_1VhYfuKTAdUU_3j4cMjkr5"
			}
		},
		"./src/reddit/components/Portal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/react/index.js"),
				s = n("./src/lib/CSSVariableProvider/index.tsx");
			class c extends a.PureComponent {
				render() {
					const {
						children: e,
						container: t
					} = this.props;
					return Object(s.d)(e, t || document.body)
				}
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				c = n.n(s);
			t.a = a.a.div("inlineRow", c.a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Chat~RedesignChat.8d0163a3c7f5c3688703.js.map