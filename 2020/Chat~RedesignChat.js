// https://www.redditstatic.com/desktop2x/Chat~RedesignChat.10f038f34a2963e2ac11.js
// Retrieved at 6/3/2020, 5:10:06 PM by Reddit Dataminer v1.0.0
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
				return A
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "p", (function() {
				return U
			})), n.d(t, "o", (function() {
				return R
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "c", (function() {
				return H
			})), n.d(t, "w", (function() {
				return F
			})), n.d(t, "x", (function() {
				return K
			})), n.d(t, "y", (function() {
				return z
			})), n.d(t, "u", (function() {
				return G
			})), n.d(t, "j", (function() {
				return W
			})), n.d(t, "k", (function() {
				return V
			})), n.d(t, "h", (function() {
				return q
			})), n.d(t, "i", (function() {
				return J
			})), n.d(t, "a", (function() {
				return Z
			})), n.d(t, "b", (function() {
				return Q
			})), n.d(t, "t", (function() {
				return Y
			})), n.d(t, "r", (function() {
				return X
			})), n.d(t, "m", (function() {
				return $
			})), n.d(t, "v", (function() {
				return ee
			})), n.d(t, "n", (function() {
				return te
			})), n.d(t, "l", (function() {
				return ne
			})), n.d(t, "s", (function() {
				return ae
			})), n.d(t, "M", (function() {
				return se
			})), n.d(t, "L", (function() {
				return re
			})), n.d(t, "z", (function() {
				return ie
			})), n.d(t, "D", (function() {
				return le
			})), n.d(t, "T", (function() {
				return me
			})), n.d(t, "S", (function() {
				return ge
			})), n.d(t, "R", (function() {
				return je
			})), n.d(t, "O", (function() {
				return ve
			})), n.d(t, "K", (function() {
				return ye
			})), n.d(t, "C", (function() {
				return Ne
			})), n.d(t, "B", (function() {
				return we
			})), n.d(t, "I", (function() {
				return Te
			})), n.d(t, "P", (function() {
				return Le
			})), n.d(t, "F", (function() {
				return ze
			})), n.d(t, "G", (function() {
				return We
			})), n.d(t, "H", (function() {
				return Ve
			})), n.d(t, "E", (function() {
				return Je
			})), n.d(t, "A", (function() {
				return Ze
			})), n.d(t, "N", (function() {
				return Qe
			})), n.d(t, "J", (function() {
				return Ye
			})), n.d(t, "Q", (function() {
				return et
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
				f = n("./src/chat/endpoints/sendbird/index.ts"),
				O = n("./src/chat/helpers/errors.ts"),
				j = n("./src/chat/helpers/urls/index.ts"),
				C = n("./src/chat/models/Channel/index.ts"),
				_ = n("./src/chat/models/Channel/platform.ts"),
				E = n("./src/chat/models/Channel/utils/index.ts"),
				v = n("./src/chat/models/Message/index.ts"),
				y = n("./src/chat/models/Subreddit/index.ts"),
				I = n("./src/chat/selectors/channels.ts"),
				x = n("./src/chat/selectors/channels/next.tsx"),
				S = n("./src/chat/selectors/experiments.ts"),
				k = n("./src/chat/selectors/platform.ts"),
				N = n("./src/chat/selectors/promos.ts"),
				w = n("./src/chat/selectors/sidebar.ts"),
				T = n("./src/chat/selectors/subreddit.ts"),
				M = n("./src/chat/singleton/SendbirdSDK.ts");
			const A = "CHANNEL__ADD_SUCCESS",
				D = "CHANNEL__ADD_FAIL",
				L = "CHANNEL__CREATE_CHANNEL_START",
				U = "CHANNEL__SELECT_BEGIN",
				R = "CHANNEL__RESET_UNREAD_COUNT",
				P = "CHANNEL__SELECT_END",
				B = "CHANNEL__EXPAND_INVITE_LIST",
				H = "CHANNEL__COLLAPSE_INVITE_LIST",
				F = "CHANNEL__UPDATE_MODEL",
				K = "CHANNEL__INVITED_UPDATE",
				z = "CHANNEL__JOINED_UPDATE",
				G = "CHANNEL__SET_UPDATED_CHANNEL_ON_TOP",
				W = "CHANNEL__FETCHING_JOINED_CHANNELS",
				V = "CHANNEL__FETCHING_JOINED_CHANNELS_FAILED",
				q = "CHANNEL__FETCHING_INVITED_CHANNELS",
				J = "CHANNEL__FETCHING_INVITED_CHANNELS_FAILED",
				Z = "CHANNEL__ADD_EXISTING_INVITED_CHANNELS",
				Q = "CHANNEL__ADD_EXISTING_JOINED_CHANNELS",
				Y = "CHANNEL__SET_INVITED_CHANNEL_TO_JOINED",
				X = "CHANNEL__SET_EXISTING_CHANNELS_END",
				$ = "CHANNEL__REMOVE_CHANNEL",
				ee = "CHANNEL__UNSORT_CHANNEL",
				te = "CHANNEL__RESET_CHANNEL_MESSAGE_LIST",
				ne = "CHANNEL__FETCH_FIRST_MESSAGE",
				ae = "CHANNEL__SET_FIRST_MESSAGE_ID",
				se = Object(r.a)($),
				ce = Object(r.a)(ee),
				re = (e, t) => async (n, a) => {
					const s = a(),
						c = Object(I.K)(s, e);
					n(c ? ce({
						channelId: e,
						subredditName: t,
						isRecommended: c
					}) : se({
						channelId: e,
						subredditName: t
					}))
				}, oe = Object(r.a)(Y), ie = e => async (t, n) => {
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
					if (!o) throw new O.a("accepted channelId", e);
					const i = Object(I.k)(a),
						d = i && i.firstMessageId,
						u = !!(i && d && i.hasMoreMessages),
						h = Object(I.b)(a, r),
						m = Object(N.a)(a);
					h && m ? t(Object(c.b)(Object(j.channelAction)(o, p.a.VIEW_NSFW_CONFIRMATION))) : await M.b.acceptChannelInvite().then(() => u && t(Object(l.p)(d))).then(() => t(oe({
						channelId: o
					}))).then(() => t(Object(c.b)(Object(j.channelUrl)(o))))
				}, le = e => async (t, n) => {
					const a = n(),
						s = Object(I.A)(a, "channelState"),
						c = Object(I.A)(a, "channelId"),
						r = a.channels.models[c];
					if (!c) throw new O.a("declinedChannelId", c);
					if (!s) throw new O.a("declinedChannelType", s);
					try {
						await M.b.declineChannelInvite()
					} catch (o) {
						return Object(O.b)("Error declining channel: ".concat(o.message))
					}
					t(ye(c)), t(((e, t) => async n => n(re(e, t)))(c, e)), t(Me(r.channelState))
				}, de = Object(r.a)(K), ue = Object(r.a)(z), he = Object(r.a)(F), me = e => async (t, n) => {
					const a = n();
					Object(I.K)(a, e.channelId) && e.channelState === p.b.UNSORTED && (e.channelState = p.b.PARTIAL), t(he({
						channel: e
					}))
				}, be = e => async t => {
					if (e.type === C.a.Subreddit) {
						const n = Object(y.c)([e]);
						await t(Object(o.o)(n)), t(Object(o.w)({
							channel: e
						}))
					} else await t(de({
						channel: e
					})), t((e => async (t, n) => {
						const a = n().user.account.id,
							s = e.members.filter(e => e.id !== a).map(e => e.id);
						t(Object(h.v)(s))
					})(e))
				}, pe = e => async (t, n) => {
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
						r = Object(I.w)(a);
					r && r.channelId === e.channelId && (await t(se({
						channelId: s,
						subredditName: c
					})), await t(me(e)), t(Me(r.channelState)))
				}, ge = (e, t) => async (n, a) => {
					if (e) {
						const c = a(),
							r = Object(I.h)(c, e.channelId);
						if (e.channelState !== p.b.INVITED && !r || t) return;
						if (e = fe(c, e), s()(e, r)) return;
						switch (e.channelState) {
							case p.b.INVITED:
								await n(be(e));
								break;
							case p.b.UNSORTED:
								await n(pe(e));
								break;
							case p.b.JOINED:
								await n(ue({
									channel: e
								}));
								break;
							default:
								Object(O.b)("Error updating channel. ChannelState not found.")
						}
						n(Object(d.b)())
					}
				}, fe = (e, t) => {
					const n = Object(k.d)(e),
						a = Object(I.h)(e, t.channelId),
						s = n === t.channelId,
						c = t.type === C.a.Subreddit;
					return s && (t.unreadMessageCount = 0), !s && c && (t.unreadMessageCount = t.unreadMessageCount ? 1 : 0), a && c && (t.lastMessage = a.lastMessage, t.isMessageListLoaded = a.isMessageListLoaded, t.hasMoreMessages = a.hasMoreMessages), t
				}, Oe = Object(r.a)(G), je = e => async (t, n) => {
					const {
						channelId: a,
						type: s
					} = e;
					s !== C.a.Subreddit && t(Oe({
						channelId: a
					}))
				}, Ce = Object(r.a)(R), _e = Object(r.a)(U), Ee = Object(r.a)(P), ve = () => async (e, t) => {
					const n = t(),
						a = Object(k.d)(n),
						s = Object(k.c)(n),
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
					}));
					const h = a && Object(I.h)(n, a),
						b = h && Object(T.b)(n, h.channelId),
						f = b && b.name || void 0;
					if (!h && (s === o || s === r)) return;
					const O = !(!h || h.channelState !== p.b.UNSORTED),
						C = !(!a || !Object(I.L)(n, a));
					if ((C || O) && h && !s) return void e(Object(c.b)(Object(j.channelAction)(h.channelId, d, f)));
					const _ = !(!h || h.channelState !== p.b.JOINED);
					if (h && _ && s && p.g.includes(s)) e(Object(c.b)(Object(j.channelUrl)(h.channelId, f)));
					else if (h && a) {
						e(_e({
							channelId: a
						}));
						const t = C || O,
							n = await M.b.enterChannel(h, !1, t);
						if (n && !n.error) {
							const {
								messageListData: t
							} = n.data;
							await e(Object(l.m)(t)), await e(Ee()), e(ye(a)), e(Object(i.f)())
						} else e(Object(l.y)()), e(Ee())
					} else {
						const t = n.sendbird.sdk.connectionStatus === g.b.Open;
						if (!h && a && t) {
							const t = await M.b.addChannelModelByChannelId(a);
							if (t && !s) return void e(Object(c.b)(Object(j.channelAction)(t.channelId, d, f)))
						}
						e(Le()), e(Object(l.y)())
					}
				}, ye = (Object(r.a)("MESSAGE__MARK_AS_READ"), e => async (t, n) => {
					const a = n(),
						s = e || Object(k.d)(a);
					s && (await t(Ce(s)), await M.b.markChannelAsRead(), t(Object(d.b)()))
				}), Ie = Object(r.a)(L), xe = Object(r.a)(A), Se = Object(r.a)(D), ke = (e, t, n) => {
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
				}, Ne = (e, t) => async (n, a, s) => {
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
						n(Ie());
						const a = ke(e, d, i);
						if (a.length < 2) return;
						const s = await Object(f.c)(r(), l, a, t);
						if (s.ok) {
							const t = s.body,
								a = Object(_.a)(t, p.b.JOINED),
								{
									channelId: r
								} = a;
							m.sortedKeys.includes(r) ? (n(ie(r)), n(Object(u.h)(e, r))) : h.sortedKeys.includes(r) ? (n(Object(c.b)(Object(j.channelUrl)(r))), n(Object(u.h)(e, r))) : (await n(xe({
								[r]: a
							})), n(Object(u.h)(e, r)), n(Object(c.b)(Object(j.channelUrl)(r))))
						} else n(Se()), n(Object(u.x)(e))
					}
				}, we = e => async t => {
					e = e.slice(0, 1), await t(Object(h.v)(e)), t(Ne(e)), t(Object(u.i)(e))
				}, Te = e => async (t, n, a) => {
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
						d = Object(I.A)(r, "channelSendbirdUrl");
					if (o && i) {
						const n = ke(e, l);
						(await Object(f.k)(s(), i, n, d)).body ? (t(Object(u.b)()), t(Object(c.a)())) : Object(O.b)("Error inviting user to existing channel")
					}
				}, Me = e => async (t, n) => {
					const a = n(),
						s = Object(w.b)(a),
						c = e === p.b.INVITED,
						r = Object(x.d)(a),
						o = Object(x.f)(a),
						i = Object(x.g)(a),
						l = Object(x.c)(a),
						d = Object(x.e)(a);
					s && c && Object(S.b)(a) ? r.channelId ? t(De(r)) : t(De(o)) : s && !c && Object(S.b)(a) ? o.channelId ? t(De(o)) : t(De(i)) : s || !c ? s || c ? t(Ae()) : d.channelId ? t(De(d)) : t(Ae()) : l.channelId ? t(De(l)) : t(De(d))
				}, Ae = () => async (e, t) => {
					const n = t();
					if (n.channels.firstLoaded) {
						const t = !!n.platform.currentPage,
							a = Object(x.b)(n, t);
						e(De(a))
					}
				}, De = e => async (t, n) => {
					e && e.channelId ? e.channelAction ? t(Object(c.c)(Object(j.channelAction)(e.channelId, e.channelAction, e.subredditName))) : t(Object(c.c)(Object(j.channelUrl)(e.channelId, e.subredditName))) : t(Object(c.c)(j.rootUrl))
				}, Le = e => async (t, n) => {
					const {
						platform: {
							currentPage: a
						}
					} = n();
					if (a && a.urlParams.userIds) {
						const e = a.urlParams.userIds.split(",");
						return t(we(e))
					}
					return t(e ? Me(e) : Ae())
				}, Ue = Object(r.a)(q), Re = Object(r.a)(J), Pe = Object(r.a)(W), Be = Object(r.a)(V), He = Object(r.a)(Z), Fe = Object(r.a)(Q), Ke = Object(r.a)(X), ze = () => async (e, t) => {
					await Promise.all([e(qe()), e(Object(o.r)()), e(Object(o.q)()), e(Object(o.p)()), e(We()), e(Ve())]);
					const n = t().channels.models;
					await e(Ge(n)), e(Ke()), e(ve())
				}, Ge = e => async t => {
					const n = Object(E.c)(e, [C.a.Direct, C.a.Group, C.a.Subreddit]);
					if (!n) return;
					const a = {};
					for (const e in n) {
						const t = n[e];
						t.channelState !== p.b.PARTIAL && (a[t.channelId] = t)
					}
					if (a) {
						const e = [];
						for (const t in a) a[t].members.map(t => e.push(t.id));
						t(Object(h.v)(e))
					}
				}, We = () => async (e, t) => {
					e(Ue());
					const n = await M.b.getExistingChannels(p.b.INVITED, p.f.NonSuper).catch(() => null);
					if (n) {
						const {
							hasMoreChannels: t
						} = n, a = Object(C.e)(n.channels);
						return e(Ge(a)), void e(He({
							channels: a,
							hasMoreChannels: t
						}))
					}
					e(Re()), Object(O.b)("Error fetching invited channels")
				}, Ve = () => async (e, t) => {
					e(Pe());
					const n = await M.b.getExistingChannels(p.b.JOINED, p.f.NonSuper).catch(t => {
						Object(O.b)(t), e(Be())
					});
					if (n) {
						const {
							hasMoreChannels: a
						} = n, s = Object(C.e)(n.channels), c = Object(I.r)(t());
						return e(Fe({
							channels: s,
							hasMoreChannels: a
						})), void(a && c < b.a.InitChannels && e(Ve()))
					}
					e(Be())
				}, qe = () => async (e, t) => {
					const n = t(),
						a = Object(k.d)(n);
					a && await M.b.addChannelModelByChannelId(a)
				}, Je = Object(r.a)(B), Ze = Object(r.a)(H), Qe = (Object(r.a)("CHANNEL__MESSAGES_LOADED"), Object(r.a)(te)), Ye = (e, t) => async (n, a) => {
					const s = a(),
						c = Object(I.A)(s, "channelState");
					M.b.leaveChannel().then(() => n(re(e, t))).then(() => n(Me(c))).catch(e => Object(O.b)("Error leaving channels: ".concat(e.message)))
				}, Xe = Object(r.a)(ne), $e = Object(r.a)(ae), et = e => async (t, n) => {
					const a = n(),
						s = Object(I.k)(a);
					t(Xe({
						channelId: e
					})), M.b.getFirstMessage().then(e => {
						const n = e[0];
						if (n) {
							if (s && s.hasMoreMessages) {
								const e = Object(v.b)(n);
								t(Object(l.s)({
									[n.messageId]: e
								}))
							}
							return n.messageId
						}
					}).then(n => n && t($e({
						channelId: e,
						firstMessageId: n
					}))).catch(e => Object(O.b)("Error setting of first message: ".concat(e.message)))
				}
		},
		"./src/chat/actions/channel/dropdown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "f", (function() {
				return S
			}));
			var a = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/actions/tooltip.ts"),
				r = n("./src/chat/actions/tracking.ts"),
				o = n("./src/chat/constants/channels.ts"),
				i = n("./src/chat/helpers/errors.ts"),
				l = n("./src/chat/helpers/urls/index.ts"),
				d = n("./src/chat/selectors/channels.ts"),
				u = n("./src/chat/selectors/subreddit.ts"),
				h = n("./src/chat/singleton/SendbirdSDK.ts");
			const {
				INVITE_MEMBERS: m,
				LEAVE: b,
				LOCK_CHANNEL_CONFIRMATION: p,
				VIEW_MEMBERS: g
			} = o.a, f = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(d.w)(n),
					c = Object(u.b)(n),
					r = c && c.name;
				e(Object(a.b)(Object(l.channelAction)(s, m, r)))
			}, O = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(d.w)(n),
					c = Object(u.b)(n),
					r = c && c.name;
				e(Object(a.b)(Object(l.channelAction)(s, b, r)))
			}, j = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(d.w)(n),
					c = Object(u.b)(n),
					r = c && c.name;
				e(Object(a.b)(Object(l.channelAction)(s, p, r)))
			}, C = e => async (t, n) => {
				t(Object(c.c)({
					tooltipId: e
				})), t(Object(r.A)())
			}, _ = e => async (t, n) => {
				e && (t(Object(r.m)()), t(Object(r.p)()).then(() => {
					window.open(Object(l.viewProfileUrl)(e))
				}))
			}, E = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(d.w)(n),
					c = Object(u.b)(n),
					r = c && c.name;
				e(Object(a.b)(Object(l.channelAction)(s, g, r)))
			}, v = "CHANNEL__UPDATE_CHANNEL_NAME", y = Object(s.a)(v), I = e => async (t, n) => {
				const a = Object(d.w)(n());
				if (a) {
					const n = Object.assign({}, a, {
							name: e
						}),
						s = Object.assign({}, a);
					t(y(n)), await h.b.updateChannel(n).catch(e => {
						Object(i.b)(e), t(y(s))
					})
				}
			}, x = () => async (e, t) => {
				h.b.setMyCountPreference(o.c.Off)
			}, S = () => async (e, t) => {
				h.b.setMyCountPreference(o.c.All)
			}
		},
		"./src/chat/actions/channel/subreddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return _
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "k", (function() {
				return N
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "q", (function() {
				return L
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "h", (function() {
				return R
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "p", (function() {
				return K
			})), n.d(t, "m", (function() {
				return z
			})), n.d(t, "w", (function() {
				return G
			})), n.d(t, "b", (function() {
				return W
			})), n.d(t, "t", (function() {
				return q
			})), n.d(t, "n", (function() {
				return J
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
				f = n("./src/chat/selectors/user.ts"),
				O = n("./src/chat/singleton/SendbirdSDK.ts"),
				j = n("./src/chat/tracking/events/chatPreview.ts"),
				C = n("./src/chat/tracking/events/chatSettings.ts");
			const _ = "SUBREDDIT__ADD_SUBREDDIT_COLLECTION",
				E = Object(s.a)(_),
				v = "SUBREDDIT_CHANNELS__FETCH_RECOMMENDED",
				y = "SUBREDDIT_CHANNELS__ADD_RECOMMENDED_COLLECTION",
				I = Object(s.a)("SUBREDDIT_CHANNELS__FETCH_RECOMMENDED_FAILED"),
				x = Object(s.a)(v),
				S = Object(s.a)(y),
				k = () => async (e, t, n) => {
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
						await e(E(t));
						const n = Object(m.a)(i);
						e(S(n))
					} else e(I(o.error))
				}, N = "SUBREDDIT_CHANNELS__FETCH_JOINED_FAILED", w = "SUBREDDIT_CHANNELS__FETCH_JOINED", T = "SUBREDDIT_CHANNELS__ADD_JOINED_COLLECTION", M = Object(s.a)(N), A = Object(s.a)(w), D = Object(s.a)(T), L = () => async (e, t) => {
					const n = t(),
						{
							JOINED: a
						} = i.b;
					if (!Object(f.f)(n)) return;
					e(A());
					const s = await O.b.getExistingChannels(a, i.f.Super).catch(() => null);
					if (s) {
						const {
							channels: n
						} = s, c = Object(b.c)(n);
						await e(E(c));
						const r = t(),
							o = Object(m.c)(n, a),
							i = Object(p.t)(r, o);
						return await e(D(Object.assign({}, o, {
							sortedKeys: i
						}))), void(s.hasMoreChannels && e(L()))
					}
					e(M())
				}, U = "SUBREDDIT_CHANNELS__FETCH_INVITED_FAILED", R = "SUBREDDIT_CHANNELS__FETCH_INVITED", P = "SUBREDDIT_CHANNELS__ADD_INVITED_COLLECTION", B = Object(s.a)(U), H = Object(s.a)(R), F = Object(s.a)(P), K = () => async (e, t) => {
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
					const c = await O.b.getExistingChannels(i.b.INVITED, i.f.Super).catch(() => null);
					if (c) {
						const t = Object(b.c)(c.channels),
							n = Object(m.c)(c.channels, i.b.INVITED);
						return await e(E(t)), void e(F(n))
					}
					e(B())
				}, z = "SUBREDDIT_CHANNELS__UPDATE_INVITED", G = Object(s.a)(z), W = "SET__INVITED_SUBREDDIT_CHANNEL_TO_JOINED", V = Object(s.a)(W), q = (e, t) => async (n, s) => {
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
							} = await O.b.enterChannel(m, !0),
							{
								messageListData: o
							} = s;
						o ? (n(Object(r.m)(o)), n(V({
							channelId: l,
							sortedKeys: e
						})), n(Z(l)), n(Object(a.b)(Object(u.channelUrl)(l, t)))) : s === O.a.KICKED || s === O.a.BANNED ? n(te(s, t)) : n(Object(a.b)(Object(u.channelAction)(l, i.a.VIEW_PRIVATE, t)))
					}
				}, J = (e, t) => async (n, s, c) => {
					let {
						apiContext: r
					} = c;
					const o = s(),
						{
							channels: h
						} = o,
						m = e || h.selected.channelId,
						b = Object(f.c)(o);
					if (!m) throw new d.a("requestChannelId", m);
					const g = Object(p.h)(o, m),
						O = Object(p.t)(o, void 0, [g]);
					if (g && b) {
						(await Object(l.a)(r(), b, g.channelSendbirdUrl)).error ? n(Object(a.b)(Object(u.channelAction)(m, i.a.VIEW_PRIVATE, t))) : (n(V({
							channelId: m,
							sortedKeys: O
						})), n(Z(m)), n(Object(a.b)(Object(u.channelUrl)(m, t))))
					}
				}, Z = e => async (t, n) => {
					const a = n(),
						s = Object(p.h)(a, e);
					if (s) {
						const e = [];
						s.members.map(t => e.push(t.id)), t(Object(o.v)(e))
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
					o && (e === O.a.KICKED ? n(X({
						channelId: o
					})) : e === O.a.BANNED && n(ee({
						channelId: o
					})), n(Object(a.b)(Object(u.channelAction)(o, i.a.DENY, t))))
				}, ne = (e, t) => async (n, s) => {
					const r = s(),
						{
							channelId: o
						} = e,
						l = Object(p.x)(r),
						d = Object(g.b)(r, o),
						h = Object(f.a)(r);
					d && t === h && (n(Object(c.L)(o, d.name)), o === l && n(Object(a.b)(Object(u.channelAction)(o, i.a.DENY, d.name))))
				}, ae = (e, t) => async (n, a) => {
					await e ? O.b.lockChannel() : O.b.unlockChannel(), Object(C.e)(a(), e, t)
				}
		},
		"./src/chat/actions/members.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "f", (function() {
				return _
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/endpoints/users/index.ts"),
				c = n("./src/chat/helpers/errors.ts"),
				r = n("./src/chat/models/User/index.ts"),
				o = n("./src/chat/selectors/channels.ts"),
				i = n("./src/chat/selectors/members.ts"),
				l = n("./src/chat/singleton/SendbirdSDK.ts");
			const d = "MEMBERS__FETCHING_MEMBERS",
				u = Object(a.a)(d),
				h = Object(a.a)("MEMBERS__FETCHING_MEMBERS_FAILED"),
				m = e => async (t, n) => {
					const a = n(),
						s = Object(o.x)(a);
					if (s) {
						t(u({
							channelId: s
						}));
						const n = e ? await l.b.getChannelMembersStartsWith(e).catch(e => Object(c.b)("Error getting channel members: ".concat(e.message))) : await l.b.getSubredditChannelMembers().catch(e => Object(c.b)("Error getting subreddit channel members: ".concat(e.message)));
						if (n) {
							const {
								hasMoreMembers: e
							} = n, a = n.members.map(e => e.userId);
							t(O(s, a, e))
						} else t(h())
					}
				}, b = "MEMBERS__FETCHING_MEMBERS_COMPLETED", p = Object(a.a)(b), g = "MEMBERS__ADD_CHANNEL_MEMBERS", f = Object(a.a)(g), O = (e, t, n) => async (a, c, o) => {
					let {
						apiContext: l
					} = o;
					const d = await Object(s.d)(l(), t);
					if (d.ok) {
						const n = c(),
							s = Object(r.a)(d.body),
							o = t.reduce((e, t) => {
								const a = s[t];
								return a && (e[t] = Object(i.e)(a, n.contacts.models)), e
							}, {});
						a(f({
							channelId: e,
							members: o
						}))
					}
					a(p({
						channelId: e,
						hasMoreMembers: n
					}))
				}, j = "MEMBERS__REMOVE_CHANNEL_MEMBERS", C = Object(a.a)(j), _ = () => async e => {
					e(C())
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
				})), i.c.resetChannelMessageListQuery())
			}, d = "MESSAGE__REMOVE_MESSAGES_FROM_CURRENT_CHANNEL", u = Object(c.a)(d), h = "CHANNEL__RESET_HAS_MORE_MESSAGES", m = Object(c.a)(h)
		},
		"./src/chat/actions/message/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			})), n.d(t, "c", (function() {
				return A
			})), n.d(t, "n", (function() {
				return L
			})), n.d(t, "v", (function() {
				return U
			})), n.d(t, "l", (function() {
				return R
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "u", (function() {
				return H
			})), n.d(t, "h", (function() {
				return K
			})), n.d(t, "s", (function() {
				return z
			})), n.d(t, "r", (function() {
				return G
			})), n.d(t, "b", (function() {
				return W
			})), n.d(t, "m", (function() {
				return q
			})), n.d(t, "k", (function() {
				return J
			})), n.d(t, "y", (function() {
				return Z
			})), n.d(t, "d", (function() {
				return Q
			})), n.d(t, "p", (function() {
				return Y
			})), n.d(t, "o", (function() {
				return X
			})), n.d(t, "i", (function() {
				return $
			})), n.d(t, "t", (function() {
				return te
			})), n.d(t, "g", (function() {
				return ne
			})), n.d(t, "e", (function() {
				return ae
			})), n.d(t, "f", (function() {
				return se
			})), n.d(t, "q", (function() {
				return ie
			})), n.d(t, "x", (function() {
				return le
			})), n.d(t, "w", (function() {
				return de
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
				f = e => e && e.length > 0 && e[0] ? e[0].url : void 0,
				O = e => e.filter(e => !h()(e)).map(e => ({
					name: e.provider_name,
					title: e.title,
					description: e.description,
					faviconUrl: e.favicon_url,
					imageUrl: f(e.images),
					url: e.url
				}));
			var j = n("./src/chat/endpoints/sendbird/index.ts"),
				C = n("./src/chat/helpers/errors.ts"),
				_ = n("./src/chat/helpers/linkParser/index.ts"),
				E = n("./src/chat/models/Message/index.ts"),
				v = n("./src/chat/models/Message/adapter.ts"),
				y = n("./src/chat/selectors/app.ts"),
				I = n("./src/chat/selectors/channels.ts"),
				x = n("./src/chat/selectors/contacts.ts"),
				S = n("./src/chat/selectors/messages.ts"),
				k = n("./src/chat/singleton/SendbirdSDK.ts");
			const N = "MESSAGE__ADD_ONE",
				w = Object(o.a)(N),
				T = (e, t, n) => async (a, s) => {
					const c = s(),
						r = Object(v.b)(n),
						o = await M(t, c, a);
					k.b.addMessage(t, n, o).then(t => {
						const n = {
							[t.messageId]: t
						};
						a(w({
							message: n,
							channelId: e,
							clientMessageId: r
						})), a(Object(l.v)(t.messageId))
					}).catch(() => {
						r && (a(Object(l.z)(r)), a(P({
							clientMessageId: r,
							toggle: !0
						})))
					})
				}, M = async (e, t, n) => {
					const a = Object(r.c)(e);
					if (!a.length) return [];
					const c = [];
					return [...a.map(e => {
						const n = Object(x.g)(t, e);
						return n || c.push(e), n && n.id
					}).filter(e => e), ...(c.length && s()(await Promise.all(c.slice(0, 3).map(e => k.b.searchMemberByName(e, !0)))) || []).map(e => e && e.id).filter(e => e)]
				}, A = "MESSAGE__ADD_PENDING_ONE", D = Object(o.a)(A), L = (e, t, n) => async (a, s) => {
					const c = s();
					if (Object(_.b)(t) && 1 === t.split(" ").length) return void F(a, c, e, t);
					const r = Object(E.a)(c, e, t, n),
						o = n === d.b.TEXT ? t : "";
					a(D(r)), a(T(e, o, r.data))
				}, U = (e, t) => async (n, a) => {
					const s = a(),
						c = Object(S.h)(s, t);
					c && (n(P({
						clientMessageId: t,
						toggle: !1
					})), n(T(e, c.messageData.value, c.data)))
				}, R = "MESSAGE__TOGGLE_PENDING_MESSAGE_ERROR", P = Object(o.a)(R), B = "MESSAGE__REMOVE_PENDING_ONE", H = Object(o.a)(B), F = async (e, t, n, a) => {
					const s = r.e.match(a).map(e => e.url).join(""),
						c = d.b.EMBED;
					let o = {
						url: a
					};
					const i = Object(E.a)(t, n, JSON.stringify(o), c);
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
								method: b.ab.GET,
								data: {
									key: g,
									url: a,
									scheme: n,
									chars: t
								}
							}).then(e => e.ok && Array.isArray(e.body) ? e.body : [e.body]).then(O)
						})({
							url: s,
							scheme: "https",
							chars: 140
						});
						if (t) {
							o = Object.assign({}, o, {
								embed: t[0]
							});
							const a = JSON.stringify(o),
								s = JSON.stringify(Object(v.a)(a, c, i.clientMessageId));
							e(T(n, o.url, s))
						}
					}
				}, K = "MESSAGE__RECEIVE_ADD_ONE", z = Object(o.a)(K), G = e => async (t, n, a) => {
					let {
						apiContext: s
					} = a;
					const c = n(),
						r = Object(I.x)(c) === e.channelId;
					Object(y.c)(c) && r && t(Object(i.K)(e.channelId)), t(z({
						[e.messageId]: e
					}))
				}, W = "MESSAGE__ADD_LIST", V = Object(o.a)(W), q = e => async (t, n, a) => {
					let {
						apiContext: s
					} = a;
					const c = Object(I.A)(n(), "channelId");
					t(V(Object.assign({
						channelId: c
					}, e)))
				}, J = "MESSAGE__SET_MESSAGE_LIST_IS_LOADED", Z = Object(o.a)(J), Q = "MESSAGE__DELETE_ONE", Y = Object(o.a)(Q), X = e => async (t, n) => {
					const a = n(),
						s = Object(S.d)(a, e);
					s && k.b.deleteMessage(s).then(() => t(Y(s.messageId))).then(() => t(Object(c.a)()))
				}, $ = "MESSAGE__RECEIVE_DELETE_ONE", ee = Object(o.a)($), te = e => async (t, n) => {
					t(ee(e))
				}, ne = "MESSAGE__GET_PREVIOUS_MESSAGES_START", ae = "MESSAGE__GET_PREVIOUS_MESSAGES_END", se = "MESSAGE__GET_PREVIOUS_MESSAGES_ERROR", ce = Object(o.a)(ne), re = Object(o.a)(ae), oe = Object(o.a)(se), ie = e => async (t, n) => {
					const a = Object(I.A)(n(), "channelId");
					t(ce(a)), t(Object(l.B)()), a && await k.b.getPreviousMessages(d.c.USER, e).then(e => t(re(Object.assign({
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
				}
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
				}, o.Cb, {
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
						e(Object(a.B)(t))
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
						n.match.params.subredditName && c(Object(o.l)()), n.match.params.channelId && c(Object(r.O)())
					}
				}, h = Object(c.a)(i);
			Object(c.a)(l), Object(c.a)(d), Object(c.a)("PLATFORM__MODAL_TOGGLED")
		},
		"./src/chat/actions/promo/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "f", (function() {
				return E
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
							Object(a.c)("chat.promo", t, s.Xb)
						}
					})(e)
				}, f = () => async (e, t) => {
					Object.keys(o.b).forEach(t => {
						h(o.b[t]) || e(b(o.b[t]))
					})
				}, O = "PROMO__DISPLAY_SUBREDDIT_CHAT_FTUX_PROMO", j = Object(c.a)(O), C = "PROMO__SEEN_SUBREDDIT_CHAT_FTUX", _ = Object(c.a)(C), E = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					Object(r.e)(a()), e(_()), e(g(o.a.SubredditChatFtux))
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
				return f
			})), n.d(t, "b", (function() {
				return O
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
				return k
			})), n.d(t, "f", (function() {
				return N
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
				f = function() {
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
							const c = Object(a.b)(s.n.CHAT, "session", l.id),
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
							if (n) return void t(g(Object.assign({}, n, {
								active: e
							})))
						}
						t(b())
					}
				},
				O = "SENDBIRD__ADD_MEMBERS_TO_KNOWN_CONTACTS",
				j = Object(c.a)(O),
				C = "SENDBIRD__SET_REDDIT_CONTACT_LIST",
				_ = 6 * s.H,
				E = Object(c.a)(C),
				v = () => async (e, t, n) => {
					let {
						apiContext: c
					} = n;
					const r = t(),
						o = r.contacts.models,
						d = Object(a.b)(s.n.CHAT, "contacts", r.user.account.id),
						u = Object(a.a)(d);
					if (u && u.version === l.a) return void e(E(u.data));
					const h = t().user.session;
					if (!h) return;
					const m = await Object(i.g)(c(), h, 25),
						b = Object(l.c)(m.body).map(e => o[e.id] ? o[e.id] : e),
						p = {
							version: l.a,
							data: b
						};
					Object(a.c)(d, p, _), e(E(b))
				}, y = "SENDBIRD__IDENTIFY_CONTACT_BEGIN", I = "SENDBIRD__IDENTIFY_CONTACT_END", x = Object(c.a)(y), S = Object(c.a)(I), k = e => async (t, n, a) => {
					let {
						apiContext: s
					} = a;
					Object(d.c)(n(), e.username) || (t(x({
						username: e.username
					})), Object(o.b)(s(), e.username).then(n => {
						if (n.ok) {
							const a = Object(l.d)(n.body.data);
							if (a) return t(S({
								username: e.username,
								contact: a,
								valid: !0
							}))
						} else t(Object(r.y)(e.username));
						t(S({
							username: e.username,
							valid: !1
						}))
					}))
				}, N = "SENDBIRD__OPT_IN", w = Object(c.a)(N), T = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					Object(u.b)(t()) || (e(w({
						userSubredditChatEnabled: !0
					})), Object(i.m)(a()))
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
				return f
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "f", (function() {
				return E
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
				f = "SENDBIRD_SDK__UPDATE_CONNECTION_STATUS",
				O = Object(a.a)(b),
				j = Object(a.a)(p),
				C = e => async (t, n) => {
					const a = n(),
						o = Object(u.d)(a),
						b = Object(u.c)(a),
						p = Object(u.a)(a),
						g = Object(h.d)(a),
						f = {
							connectionStatus: l.b.Closed
						};
					if (g && p && b) {
						const {
							id: n
						} = g;
						o && t(Object(i.e)({
							toast: d.a.ConnectionPending
						})), e = e || b.token, m.b.connect(p, e, n, t).then(e => {
							e.error ? (t(O(e.error)), t(v(Object.assign({}, f))), t(Object(i.e)({
								toast: d.a.ConnectionClosed
							}))) : (t(j()), o && (t(Object(c.q)(!0)), t(Object(i.e)({
								toast: d.a.ConnectionOpen
							})), t(Object(i.c)(3))), t(Object(r.b)()), t(Object(s.F)()))
						})
					}
				}, _ = Object(a.a)(g), E = () => async e => {
					m.b.disconnect().then(() => {
						e(_()), e(Object(o.j)())
					})
				}, v = Object(a.a)(f), y = () => m.b.reconnect()
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
							method: s.ab.POST
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
						method: s.ab.GET
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
							n.push(e), n = n.concat(t.slice(3))
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
					setTimeout(() => t(r()), e * s.Cb)
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
			n.d(t, "g", (function() {
				return C
			})), n.d(t, "v", (function() {
				return _
			})), n.d(t, "z", (function() {
				return E
			})), n.d(t, "w", (function() {
				return v
			})), n.d(t, "B", (function() {
				return y
			})), n.d(t, "A", (function() {
				return I
			})), n.d(t, "t", (function() {
				return x
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "u", (function() {
				return N
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "y", (function() {
				return T
			})), n.d(t, "x", (function() {
				return M
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "k", (function() {
				return U
			})), n.d(t, "l", (function() {
				return R
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "c", (function() {
				return K
			})), n.d(t, "o", (function() {
				return z
			})), n.d(t, "D", (function() {
				return G
			})), n.d(t, "r", (function() {
				return W
			})), n.d(t, "C", (function() {
				return V
			})), n.d(t, "q", (function() {
				return q
			})), n.d(t, "s", (function() {
				return J
			})), n.d(t, "a", (function() {
				return Z
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
				f = n("./src/chat/tracking/events/messagesInbox.ts"),
				O = n("./src/chat/selectors/telemetry.ts");
			const j = e => ({
					id: e.user.account.id
				}),
				C = () => async (e, t) => {
					Object(f.b)(t())
				}, _ = e => async (t, n) => {
					Object(b.a)(n(), e)
				}, E = e => async (t, n) => {
					Object(b.d)(n(), e)
				}, v = (e, t) => async (n, a) => {
					Object(b.b)(a(), e, t)
				}, y = () => async (e, t) => {
					Object(b.e)(t())
				}, I = () => async (e, t) => {
					Object(m.f)(t())
				}, x = () => async (e, t) => {
					const n = Object(c.u)(t());
					if (n && n.length) {
						const e = n[0].id;
						Object(m.c)(t(), e)
					}
				}, S = () => async (e, t) => {
					const n = t();
					Object(o.c)(n) !== s.a.VIEW_INVITE && Object(m.b)(n)
				}, k = () => async (e, t) => {
					Object(m.a)(t())
				}, N = e => async (t, n) => {
					Object(m.d)(n(), e)
				}, w = e => async (t, n) => {
					Object(p.c)(n(), e)
				}, T = e => async (t, n) => {
					Object(r.c)(n(), e) && Object(p.f)(n())
				}, M = e => async (t, n) => {
					const a = n(),
						s = e && e.filter(e => e !== a.user.account.id),
						c = s && s[0],
						o = a.contacts.models[c],
						i = o && o.name,
						l = Object(r.a)(n(), i);
					l && Object(p.e)(n(), l)
				}, A = (e, t) => async (e, n) => {
					Object(p.d)(n(), t)
				}, D = () => async (e, t) => {
					Object(p.b)(t())
				}, L = () => async (e, t) => {
					Object(p.a)(t())
				}, U = () => async (e, t) => {
					Object(g.c)(t())
				}, R = () => async (e, t) => {
					Object(g.d)(t())
				}, P = () => async (e, t) => {
					const n = t();
					Object(o.c)(n) === s.a.VIEW_INVITE && Object(g.e)(n)
				}, B = () => async (e, t) => {
					const n = t();
					Object(g.b)(n), Object(i.b)(n) && Object(g.f)(t())
				}, H = () => async (e, t) => {
					Object(g.a)(t())
				}, F = e => async (t, n) => {
					((e, t) => {
						Object(h.a)(Object.assign({
							noun: "create_chat",
							source: a.b.UserHovercard,
							action: a.a.Click,
							chat: Object.assign({}, Object(l.E)(e, t), Object(l.C)(e, t), Object(l.D)(e, t)),
							user: Object.assign({}, j(e))
						}, Object(d.a)(e), Object(d.b)(e)))
					})(n(), e)
				}, K = () => async (e, t) => {
					Object(f.a)(t())
				}, z = () => async (e, t) => {
					Object(f.c)(t())
				}, G = () => async (e, t) => {
					Object(f.g)(t())
				}, W = () => async (e, t) => {
					Object(f.d)(t())
				}, V = e => async (t, n) => {
					const s = n();
					s.tooltipId !== e && (e => {
						Object(h.a)(Object.assign({
							noun: "snoomoji",
							source: a.b.ChatKeyboard,
							action: a.a.View,
							chat: Object.assign({}, Object(l.A)(e), Object(l.p)(e), Object(l.g)(e)),
							subreddit: Object.assign({}, Object(u.a)(e), Object(u.b)(e))
						}, Object(d.a)(e)))
					})(s)
				}, q = () => async (e, t) => {
					(e => {
						Object(h.a)(Object.assign({
							noun: "other_message",
							source: a.b.ChatView,
							action: a.a.ModDelete,
							chat: Object.assign({}, Object(l.A)(e), Object(l.p)(e), Object(l.g)(e), Object(l.s)(e), Object(l.n)(e), Object(l.x)(e)),
							subreddit: Object.assign({}, Object(u.a)(e), Object(u.b)(e))
						}, Object(d.a)(e)))
					})(t())
				}, J = e => async (t, n) => {
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
						Object(h.a)(Object.assign({
							noun: "user",
							source: n,
							action: a.a.Kick,
							chat: Object.assign({}, Object(l.A)(e), Object(l.p)(e), Object(l.g)(e), Object(l.s)(e), Object(l.n)(e), Object(l.x)(e)),
							subreddit: Object.assign({}, Object(u.a)(e), Object(u.b)(e))
						}, Object(d.a)(e), {
							actionInfo: Object.assign({
								settingValue: t
							}, Object(O.a)(e))
						}))
					})(n(), e, r)
				}, Z = e => async (t, n) => {
					((e, t) => {
						Object(h.a)(Object.assign({
							noun: "ban_user",
							source: t,
							action: a.a.Click,
							chat: Object.assign({}, Object(l.A)(e), Object(l.p)(e), Object(l.g)(e), Object(l.s)(e), Object(l.n)(e), Object(l.x)(e)),
							subreddit: Object.assign({}, Object(u.a)(e), Object(u.b)(e))
						}, Object(d.a)(e)))
					})(n(), e)
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
				return I
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "r", (function() {
				return D
			})), n.d(t, "u", (function() {
				return L
			})), n.d(t, "l", (function() {
				return R
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "v", (function() {
				return K
			})), n.d(t, "h", (function() {
				return z
			})), n.d(t, "m", (function() {
				return W
			})), n.d(t, "k", (function() {
				return V
			})), n.d(t, "t", (function() {
				return q
			})), n.d(t, "j", (function() {
				return J
			})), n.d(t, "s", (function() {
				return Z
			})), n.d(t, "c", (function() {
				return Q
			})), n.d(t, "o", (function() {
				return $
			})), n.d(t, "b", (function() {
				return ee
			})), n.d(t, "p", (function() {
				return ae
			})), n.d(t, "n", (function() {
				return se
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
				f = n("./src/chat/models/Channel/index.ts"),
				O = n("./src/chat/models/Contact/index.ts");
			const j = e => ({
				experimentId: e.experiment_id,
				owner: e.owner,
				variant: e.variant
			});
			var C = n("./src/chat/models/User/index.ts"),
				_ = n("./src/chat/selectors/channels.ts"),
				E = n("./src/chat/selectors/user.ts"),
				v = n("./src/chat/singleton/SendbirdSDK.ts"),
				y = function(e, t) {
					var n = {};
					for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
					}
					return n
				};
			const I = "USER__ACCOUNT_FETCH_COMPLETED",
				x = "USER__REDDAID_RECEIVED",
				S = "USER__LOID_RECEIVED",
				k = "USER__SESSION_TRACKER_RECEIVED",
				N = "FETCH_EXPERIMENTS_COMPLETED",
				w = Object(i.a)(S),
				T = Object(i.a)("USER__ACCOUNT_FETCH_PENDING"),
				M = Object(i.a)(I),
				A = Object(i.a)("USER__ACCOUNT_FETCH_FAILED"),
				D = Object(i.a)(x),
				L = Object(i.a)(k),
				U = Object(i.a)(N),
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
					e(T());
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
						e(M(a)), e(U(s)), e(Object(d.switchTheme)(c))
					} else e(A(l.error))
				}, P = "USER__USERS_FETCH_COMPLETED", B = Object(i.a)("USER__USERS_FETCH_PENDING"), H = Object(i.a)(P), F = Object(i.a)("USER__USERS_FETCH_FAILED"), K = e => async (t, n, a) => {
					let {
						apiContext: c
					} = a;
					const r = n().contacts.models,
						o = e.filter(e => !r[e]),
						i = s()(o, 100);
					if (!o.length) return;
					t(B(e));
					const l = await Promise.all(i.map(e => Object(p.d)(c(), e))).catch(() => []);
					for (const e of l)
						if (e.ok) {
							const n = Object(C.a)(e.body);
							t(H(n))
						} else t(F())
				}, z = "USERS__USERS_ADD_SELECTED", G = Object(i.a)(z), W = e => async (t, n) => {
					t(G(e)), t(Object(u.f)(e))
				}, V = "USERS__USERS_REMOVE_SELECTED", q = Object(i.a)(V), J = "USERS__USERS_REMOVE_ALL_SELECTED", Z = Object(i.a)(J), Q = "USERS__BLOCK_USER_COMPLETED", Y = Object(i.a)(Q), X = Object(i.a)("USERS__BLOCK_USER_FAILED"), $ = (e, t) => async (n, a, s) => {
					let {
						apiContext: c
					} = s;
					const r = a(),
						i = r.contacts.models[e],
						d = i && i.name,
						u = Object(_.w)(r),
						b = Object(_.i)(r) || h.b.JOINED,
						p = u && u.type === f.a.Direct,
						O = Object(_.k)(r);
					if (!O) throw new g.a("currentChannel", O);
					const j = O.channelId;
					if (!j) throw new g.a("blockedChannelId", j);
					const C = await Object(m.a)(c(), e);
					C && C.ok && p ? (await v.b.hideChannel(), n(Y({
						userId: e,
						username: d
					})), t || (n(Object(l.L)(j)), n(Object(l.P)(b)))) : C && C.ok && !p ? (n(Y({
						userId: e,
						username: d
					})), t || n(Object(o.a)())) : C && n(X(C.error))
				}, ee = "BLOCKED_USER_LIST_FETCH_COMPLETED", te = Object(i.a)("BLOCKED_USER_LIST_FETCH_FAILED"), ne = Object(i.a)(ee), ae = () => async (e, t, n) => {
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
								if (a[e.id]) c[e.id] = Object.assign({}, a[e.id], {
									isBlocked: !0
								});
								else {
									const {
										date: t
									} = e, n = y(e, ["date"]);
									c[e.id] = Object.assign({}, O.b, n, {
										isBlocked: !0
									})
								}
							}), e(ne({
								blockedContacts: c
							}))
						} else e(te(t.error))
					}
				}, se = e => async (t, n, a) => {
					let {
						apiContext: s
					} = a;
					const c = n(),
						r = Object(E.c)(c);
					if (r) {
						const n = (e => ({
							chat_ban: e.chatBan,
							delete_all_messages: e.deleteAllMessages,
							subreddit_id: e.subredditId,
							user_id: e.userId
						}))(e);
						(await Object(b.b)(s(), r, n)).ok || Object(g.b)("Error with ban user and delete all messages"), t(Object(o.a)())
					}
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
				IconContainer: "_1sD1FML2DnIYX9pKhe9bWr",
				iconContainer: "_1sD1FML2DnIYX9pKhe9bWr",
				Title: "gwMzsQ4nu6WVY2c9v7Mus",
				title: "gwMzsQ4nu6WVY2c9v7Mus",
				Warning: "Z3RlgS8V_RlK5YYIfJ2C4",
				warning: "Z3RlgS8V_RlK5YYIfJ2C4"
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
			const f = o.a.wrapped(u.d, "IconButton", g.a),
				O = Object(r.b)(() => Object(h.a)({
					containerSize: e => e.container.size
				}), e => ({
					close: () => {
						e(Object(i.sizeChanged)(d.a.HIDDEN)), e(Object(l.c)())
					}
				}));
			t.a = O(e => {
				let {
					className: t,
					close: n,
					containerSize: s
				} = e;
				return s === d.a.EMBED || s === d.a.MINIMIZED ? c.a.createElement(f, {
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
				return Qm
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
				f = n("./src/chat/actions/message/inboxScroller.ts"),
				O = n("./node_modules/fbt/lib/FbtPublic.js"),
				j = n("./node_modules/reselect/es/index.js"),
				C = n("./src/chat/models/Channel/index.ts"),
				_ = n("./src/chat/components/TypingIndicator/index.m.less"),
				E = n.n(_);
			const v = i.a.span("IndicatorText", E.a);
			v.displayName = "IndicatorText";
			var y = e => r.a.createElement(v, {
					className: e.className
				}, ((e, t) => e === C.a.Direct ? O.fbt._("is typing...", null, {
					hk: "UTaH4"
				}) : 1 === t.length ? O.fbt._("{firstUser} is typing...", [O.fbt._param("firstUser", t[0])], {
					hk: "480JMK"
				}) : 2 === t.length ? O.fbt._("{firstUser} and {secondUser} are typing", [O.fbt._param("firstUser", t[0]), O.fbt._param("secondUser", t[1])], {
					hk: "3zfAnp"
				}) : t.length > 2 ? O.fbt._("Several people are typing...", null, {
					hk: "39edn3"
				}) : void 0)(e.channelType, e.usernames)),
				I = n("./src/chat/selectors/channels.ts");
			const x = Object(j.c)({
				typingIndicatorUsernames: e => e.typingIndicator.usernames,
				channel: I.k
			});
			var S = Object(o.b)(x)((function(e) {
				let {
					channel: t,
					typingIndicatorUsernames: n
				} = e;
				return t && n.length ? r.a.createElement(y, {
					usernames: n,
					channelType: t.type
				}) : t ? r.a.createElement(r.a.Fragment, null, O.fbt._({
					"*": "{Member count} Members",
					_1: "1 Member"
				}, [O.fbt._plural(t.memberCount, "Member count")], {
					hk: "2Eb5yZ"
				})) : r.a.createElement(r.a.Fragment, null, O.fbt._("Members", null, {
					hk: "2WCLby"
				}))
			}));
			const k = (new Date).setHours(0, 0, 0, 0),
				N = e => (e => k < e.getTime())(e) ? w(e) : (e => {
					return k - b.v < e.getTime()
				})(e) ? O.fbt._("Yesterday", null, {
					hk: "2GVGk3"
				}) : M(e),
				w = new Intl.DateTimeFormat(void 0, {
					hour: "2-digit",
					minute: "2-digit"
				}).format,
				T = new Intl.DateTimeFormat(void 0, {
					day: "numeric",
					month: "short",
					year: "2-digit"
				}).format,
				M = new Intl.DateTimeFormat(void 0, {
					day: "numeric",
					month: "short"
				}).format,
				A = new Intl.DateTimeFormat(void 0, {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric"
				}).format,
				D = e => e.toISOString();
			var L = n("./src/chat/components/DateSplitter/index.m.less"),
				U = n.n(L);
			const R = i.a.div("TimeWrapper", U.a),
				P = i.a.time("Time", U.a);
			var B = e => r.a.createElement(R, null, r.a.createElement(P, null, (e => {
					const t = k - b.v,
						n = new Date(k).setDate(1),
						a = new Date(n).setMonth(0),
						s = new Date(e);
					return e >= k ? O.fbt._("Today", null, {
						hk: "1W0rfJ"
					}) : e >= t ? O.fbt._("Yesterday", null, {
						hk: "2GVGk3"
					}) : e >= n ? M(s) : e >= a ? M(s) : T(s)
				})(e.date))),
				H = (n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./src/config.ts")),
				F = n("./src/chat/helpers/chatSelector.ts"),
				K = n("./src/chat/controls/Svg/index.tsx"),
				z = n("./src/chat/icons/Nsfw/index.m.less"),
				G = n.n(z);
			const W = e => r.a.createElement(K.a, {
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
				V = i.a.wrapped(W, "NSFWIcon", G.a),
				q = i.a.wrapped(W, "SmallNSFWIcon", G.a);
			var J = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				Z = n("./src/chat/icons/Userpic/index.m.less"),
				Q = n.n(Z);
			const Y = e => e.replace(b.vb.Account + "_", ""),
				X = i.a.i("FallbackAvatar", Q.a),
				$ = i.a.wrapped(X, "FallbackAvatarWrapper", Q.a),
				ee = i.a.wrapped(e => {
					const {
						className: t,
						height: n,
						width: a,
						userId: s
					} = e, {
						processingAvatarImageUrl: c
					} = H.a, o = Y(s), {
						avatar: i,
						color: l
					} = (e => {
						const t = J.length,
							n = parseInt(e, 36),
							a = n % 20 + 1,
							s = Math.floor(n / 20) % t;
						return {
							avatar: ("0" + a).slice(-2),
							color: J[s]
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
				}, "SnooIcon", Q.a);
			class te extends r.a.Component {
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
					return c || !a ? r.a.createElement($, {
						style: o,
						className: e,
						title: "".concat(s, " ").concat(O.fbt._("Snoovatar", null, {
							hk: "1jT1ZL"
						}))
					}) : r.a.createElement("img", {
						style: o,
						onError: this.onError,
						className: e,
						src: a,
						alt: "".concat(s, " ").concat(O.fbt._("Snoovatar", null, {
							hk: "1jT1ZL"
						}))
					})
				}
			}
			const ne = i.a.wrapped(te, "VoicesAvatar", Q.a),
				ae = Object(F.a)({
					contact: (e, t) => e.contacts.models[t.userId],
					currentUser: e => e.user.account
				});
			var se = Object(o.b)(ae)(e => {
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
					return n && n.isNSFW && !i ? r.a.createElement(q, {
						className: t,
						height: s,
						width: c
					}) : l ? r.a.createElement(ne, {
						className: t,
						height: s,
						width: c,
						profileImg: l,
						name: d
					}) : r.a.createElement(ee, {
						className: t,
						height: s,
						width: c,
						userId: o
					})
				}),
				ce = n("./src/chat/components/Intro/index.m.less"),
				re = n.n(ce);
			const oe = i.a.span("Wrapper", re.a),
				ie = i.a.span("SubredditName", re.a),
				le = i.a.span("ChannelName", re.a),
				de = i.a.div("ChannelDescription", re.a),
				ue = i.a.ul("Users", re.a),
				he = i.a.li("User", re.a),
				me = i.a.span("UserTitle", re.a);
			var be, pe = e => {
					let {
						channel: t,
						subreddit: n,
						users: a
					} = e;
					const s = t.data && JSON.parse(t.data),
						c = s && s.welcome_text;
					return r.a.createElement(oe, null, n ? ((e, t) => {
						const n = e.customData && e.customData.description;
						return r.a.createElement(r.a.Fragment, null, r.a.createElement(ie, null, "r/".concat(t.name)), r.a.createElement(le, null, e.name), r.a.createElement(de, null, n))
					})(t, n) : ((e, t) => r.a.createElement(r.a.Fragment, null, r.a.createElement(ue, null, e.map((e, t, n) => r.a.createElement(he, {
						key: e.id
					}, r.a.createElement(se, {
						height: "16px",
						width: "16px",
						userId: e.id
					}), r.a.createElement(me, null, "".concat(e.name).concat(t < n.length - 1 ? "," : ""))))), r.a.createElement(de, null, t || O.fbt._("This is the start of a beautiful thing. Say something nice, or share a cat fact.", null, {
						hk: "J8whX"
					}))))(a, c))
				},
				ge = n("./node_modules/uuid/v4.js"),
				fe = n.n(ge),
				Oe = n("./src/lib/classNames/index.ts"),
				je = n("./src/lib/linkMatchers/customLinks.ts"),
				Ce = n("./src/lib/opener/index.ts"),
				_e = n("./node_modules/react-router-redux/es/index.js"),
				Ee = n("./src/chat/actions/tracking.ts"),
				ve = n("./src/chat/constants/messages.ts");
			! function(e) {
				e.Ban = "ban", e.Block = "block", e.Kick = "kick", e.Report = "report"
			}(be || (be = {}));
			var ye = n("./src/chat/controls/Button/index.tsx"),
				Ie = n("./src/chat/helpers/urls/index.ts"),
				xe = n("./src/telemetry/models/Event.ts"),
				Se = n("./src/chat/components/Message/ActionButtonGroup.m.less"),
				ke = n.n(Se);
			const Ne = i.a.span("Wrapper", ke.a),
				we = i.a.span("ActionButton", ke.a),
				Te = Object(F.a)({
					channel: I.w,
					isMod: I.a
				});
			var Me = Object(o.b)(Te, e => ({
					onDeleteMessage: (t, n, a) => {
						e(Object(_e.b)(Object(Ie.messageActionUrl)(t, n, ve.a.DELETE, a)))
					},
					onReportMessage: (t, n, a) => e(Object(_e.b)(Object(Ie.messageActionUrl)(t, n, ve.a.REPORT, a))),
					onReportInvitedMessage: (t, n, a) => e(Object(_e.b)(Object(Ie.inviteMessageActionUrl)(t, n, ve.a.REPORT, a))),
					onKickUser: (t, n, a) => e(Object(_e.b)(Object(Ie.userActionUrl)(t, n, be.Kick, a, {
						source: xe.b.ChatView
					}))),
					onBanUser: (t, n, a) => {
						e(Object(_e.b)(Object(Ie.userActionUrl)(t, n, be.Ban, a))), e(Object(Ee.a)(xe.b.ChatView))
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
					return b ? r.a.createElement(Ne, {
						className: e.className
					}, t && !c ? r.a.createElement(r.a.Fragment, null, r.a.createElement(we, {
						onClick: () => l(b, a, m)
					}, r.a.createElement(ye.f, null)), r.a.createElement(we, {
						onClick: () => o ? h(b, a, m) : u(b, a, m)
					}, r.a.createElement(ye.b, null)), r.a.createElement(we, {
						onClick: () => s && d(b, s.userId, m)
					}, r.a.createElement(ye.e, null)), r.a.createElement(we, {
						onClick: () => s && m && i(b, s.userId, m)
					}, r.a.createElement(ye.c, null))) : c ? r.a.createElement(we, {
						onClick: () => l(b, a, m)
					}, r.a.createElement(ye.f, null)) : r.a.createElement(we, {
						onClick: () => o ? h(b, a, m) : u(b, a, m)
					}, r.a.createElement(ye.b, null))) : null
				}),
				Ae = n("./src/chat/components/Message/FailedMenu.m.less"),
				De = n.n(Ae);
			const Le = i.a.div("ButtonControls", De.a),
				Ue = i.a.span("Text", De.a),
				Re = i.a.wrapped(ye.a, "Button", De.a);
			class Pe extends c.Component {
				constructor() {
					super(...arguments), this.handleResend = () => this.props.onResend(this.props.clientMessageId), this.handleDelete = () => this.props.onDelete(this.props.clientMessageId)
				}
				render() {
					return r.a.createElement(Le, null, r.a.createElement(Ue, null, O.fbt._("Failed to send", null, {
						hk: "2feF2H"
					})), r.a.createElement(Re, {
						primaryNoBorder: !0,
						onClick: this.handleResend
					}, O.fbt._("Resend", null, {
						hk: "cXpU3"
					})), r.a.createElement(Re, {
						warningNoBorder: !0,
						onClick: this.handleDelete
					}, O.fbt._("Delete", null, {
						hk: "2dtAT"
					})))
				}
			}
			var Be = Object(o.b)(void 0, (e, t) => {
					let {
						channelId: n
					} = t;
					return {
						onResend: t => e(Object(g.v)(n, t)),
						onDelete: t => e(Object(g.u)({
							clientMessageId: t
						}))
					}
				})(Pe),
				He = n("./src/chat/helpers/linkParser/index.ts"),
				Fe = n("./src/chat/components/Message/Link.m.less"),
				Ke = n.n(Fe);
			const ze = i.a.wrapped(e => r.a.createElement("a", {
					className: Object(Oe.a)(e.className, {
						[Ke.a.noUnderline]: e.noUnderline
					}),
					href: Object(He.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children), "Link", Ke.a),
				Ge = i.a.span("LinkedText", Ke.a),
				We = i.a.span("NameWrapper", Ke.a),
				Ve = i.a.span("Name", Ke.a),
				qe = i.a.span("DetailsWrapper", Ke.a),
				Je = i.a.span("Title", Ke.a),
				Ze = i.a.p("Description", Ke.a),
				Qe = e => r.a.createElement(ze, {
					noUnderline: e.noUnderline,
					href: Object(He.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children),
				Ye = e => e.isEmbed ? (e => r.a.createElement(Qe, e, r.a.createElement(We, null, r.a.createElement(Ve, null, e.name)), r.a.createElement(qe, null, r.a.createElement("span", null, r.a.createElement(Je, null, e.title), r.a.createElement(Ze, null, e.description)))))(e) : (e => e.href ? r.a.createElement(Qe, e, e.children) : r.a.createElement(Ge, e, e.children))(e);
			var Xe = n("./node_modules/lodash/isEmpty.js"),
				$e = n.n(Xe),
				et = n("./src/chat/icons/svgs/Trash/index.tsx"),
				tt = n("./src/chat/components/MessageReportDialog/ActionMenu.m.less"),
				nt = n.n(tt);
			const {
				fbt: at
			} = n("./node_modules/fbt/lib/FbtPublic.js"), st = i.a.wrapped(e => r.a.createElement(K.a, {
				className: e.className,
				viewBox: "0 0 14 11"
			}, r.a.createElement("path", {
				d: "M13.1656,4.55472 L12.0464,3.43472 C11.896,3.28432 11.6928,3.20032 11.4808,3.20032 C11.268,3.20032 11.0648,3.28432 10.9152,3.43472 L5.32,9.02912 L3.0856,6.79472 C2.7736,6.48192 2.2672,6.48192 1.9544,6.79472 L0.8344,7.91472 C0.5216,8.22752 0.5216,8.73392 0.8344,9.04592 L4.7544,12.96592 C4.9112,13.12192 5.1152,13.20032 5.32,13.20032 C5.5248,13.20032 5.7296,13.12192 5.8856,12.96592 L13.1656,5.68592 C13.4784,5.37312 13.4784,4.86752 13.1656,4.55472",
				transform: "translate(0 -3)"
			})), "Approve", nt.a), ct = i.a.wrapped(et.a, "Trash", nt.a), rt = i.a.div("ButtonControls", nt.a), ot = i.a.wrapped(ye.a, "Button", nt.a), it = i.a.span("ButtonText", nt.a);
			class lt extends c.Component {
				render() {
					const {
						onDelete: e,
						onIgnore: t,
						reportedChannelId: n,
						reportedMessageId: a
					} = this.props;
					return r.a.createElement(rt, null, r.a.createElement(ot, {
						primaryNoBorder: !0,
						onClick: () => e(a, n)
					}, r.a.createElement(ct, null), r.a.createElement(it, null, at._("Delete Message", null, {
						hk: "3ksti7"
					}))), r.a.createElement(ot, {
						primaryNoBorder: !0,
						onClick: () => t(a, n)
					}, r.a.createElement(st, null), r.a.createElement(it, null, at._("Ignore Report", null, {
						hk: "1QScZP"
					}))))
				}
			}
			var dt = Object(o.b)(void 0, e => ({
					onDelete: (t, n) => e(Object(g.w)(t, n)),
					onIgnore: (t, n) => e(Object(g.x)(t, n))
				}))(lt),
				ut = n("./node_modules/lodash/difference.js"),
				ht = n.n(ut),
				mt = n("./node_modules/lodash/noop.js"),
				bt = n.n(mt),
				pt = n("./src/higherOrderComponents/asTooltip.tsx"),
				gt = n("./src/chat/actions/tooltip.ts"),
				ft = n("./src/chat/selectors/platform.ts");
			const {
				Ban: Ot,
				Block: jt,
				Report: Ct,
				Kick: _t
			} = be, Et = e => async (t, n) => {
				const a = n(),
					s = Object(ft.d)(a),
					c = Object(ft.e)(a);
				s && t(Object(_e.b)(Object(Ie.userActionUrl)(s, e, jt, c)))
			};
			var vt;
			! function(e) {
				e.AddToRoom = "addToRoom", e.AddToGroup = "addToGroup", e.Ban = "ban", e.Block = "block", e.CopyLink = "copyLink", e.Kick = "kick", e.Leave = "leave", e.LeaveRoom = "leaveRoom", e.LockRoom = "lockRoom", e.MuteChannel = "muteChannel", e.Profile = "profile", e.Report = "report", e.RenameGroup = "renameGroup", e.UnlockRoom = "unlockRoom", e.UnmuteChannel = "unmuteChannel", e.ViewMembers = "members"
			}(vt || (vt = {}));
			const {
				AddToGroup: yt,
				AddToRoom: It,
				Ban: xt,
				Block: St,
				CopyLink: kt,
				Kick: Nt,
				Leave: wt,
				LeaveRoom: Tt,
				LockRoom: Mt,
				MuteChannel: At,
				Profile: Dt,
				RenameGroup: Lt,
				UnlockRoom: Ut,
				UnmuteChannel: Rt,
				ViewMembers: Pt
			} = vt, Bt = {
				directChannel: [Dt, St, At, Rt],
				groupChannel: [Lt, Pt, yt, wt, At, Rt],
				subredditChannel: [It, kt, Tt, Mt, At, Ut, Rt, Pt],
				members: [St, Nt, xt]
			}, Ht = {
				lockRoom: (e, t, n) => !(e === Mt && (!t || n)),
				unlockRoom: (e, t, n) => !!(e !== Ut || t && n),
				copyLink: (e, t) => !(e === kt && !t),
				muteChannel: (e, t) => !(e === At && t),
				unmuteChannel: (e, t) => !(e === Rt && !t)
			}, Ft = "dropdown-container";
			var Kt = n("./src/chat/controls/Dropdown/index.tsx"),
				zt = n("./src/chat/controls/Dropdown/Row.tsx"),
				Gt = n("./src/chat/helpers/dom.ts");

			function Wt() {
				return (Wt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Vt = e => r.a.createElement(K.a, Wt({}, e, {
					viewBox: "0 0 14 4"
				}), r.a.createElement("g", {
					transform: "translate(-475.000000, -286.000000)"
				}, r.a.createElement("path", {
					d: "M485.479375,287.804009 C485.479375,288.796214 486.265328,289.608018 487.225938,289.608018 C488.186547,289.608018 488.9725,288.796214 488.9725,287.804009 C488.9725,286.811804 488.186547,286 487.225938,286 C486.265328,286 485.479375,286.811804 485.479375,287.804009 M480.239688,287.804009 C480.239688,288.796214 481.025641,289.608018 481.98625,289.608018 C482.946859,289.608018 483.732813,288.796214 483.732813,287.804009 C483.732813,286.811804 482.946859,286 481.98625,286 C481.025641,286 480.239688,286.811804 480.239688,287.804009 M478.493125,287.804009 C478.493125,286.811804 477.707172,286 476.746563,286 C475.785953,286 475,286.811804 475,287.804009 C475,288.796214 475.785953,289.608018 476.746563,289.608018 C477.707172,289.608018 478.493125,288.796214 478.493125,287.804009"
				}))),
				qt = n("./src/chat/components/MemberActionDropdown/index.m.less"),
				Jt = n.n(qt);
			const Zt = ["2ednvld6"],
				Qt = i.a.wrapped(e => r.a.createElement("span", {
					className: Object(Oe.a)({
						[Jt.a.active]: e.id === e.dropdownId
					}, e.className)
				}, e.children), "Wrapper", Jt.a),
				Yt = Object(pt.a)(i.a.wrapped(Kt.a, "Component", Jt.a)),
				Xt = i.a.wrapped(zt.a, "DropdownRow", Jt.a),
				$t = i.a.wrapped(ye.d, "IconButton", Jt.a),
				en = e => r.a.createElement("span", {
					className: e.className,
					id: e.id,
					onClick: e.onClick,
					role: "button"
				}, r.a.createElement($t, null, r.a.createElement(Vt, null))),
				tn = Object(F.a)({
					dropdownId: e => e.tooltipId || "",
					currentUserIsChannelMod: I.a
				});
			class nn extends c.Component {
				constructor() {
					super(...arguments), this.onOptionClick = e => {
						switch (e) {
							case vt.Block:
								return this.props.onBlockUser(this.props.userId);
							case vt.Report:
								return this.props.onReportUser(this.props.userId);
							case vt.Kick:
								return this.props.onKickUser(this.props.userId);
							case vt.Ban:
								return this.props.onBanUser(this.props.userId);
							default:
								return bt.a
						}
					}, this.getContainer = e => document.getElementsByClassName(this.props.containerClassName || Ft)[e], this.getDropdownOptions = () => {
						const {
							isBlockedUser: e,
							currentUserIsChannelMod: t
						} = this.props, {
							Ban: n,
							Block: a,
							Kick: s
						} = vt;
						return e && !t ? ht()(Bt.members, [a, n, s]) : t ? e ? ht()(Bt.members, [a]) : Bt.members : ht()(Bt.members, [n, s])
					}, this.getDropdownOptionDisplayText = e => {
						switch (e) {
							case vt.Block:
								return O.fbt._("Block", null, {
									hk: "t44ep"
								});
							case vt.Report:
								return O.fbt._("Report", null, {
									hk: "1PKCOJ"
								});
							case vt.Kick:
								return O.fbt._("Kick", null, {
									hk: "oXEqT"
								});
							case vt.Ban:
								return O.fbt._("Ban", null, {
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
					} = this, l = Y(c);
					if (Zt.includes(l)) return null;
					const d = o();
					return !!d.length && r.a.createElement(Qt, {
						className: e,
						id: a,
						dropdownId: t
					}, r.a.createElement(en, {
						id: a,
						menu: !0,
						onClick: Object(Gt.b)(s)
					}), r.a.createElement(Yt, {
						tooltipId: a,
						isOpen: t === a,
						container: i(n),
						closeOnClickOutside: !0
					}, d.map((e, t) => r.a.createElement(Xt, {
						key: t,
						displayText: this.getDropdownOptionDisplayText(e),
						onClick: Object(Gt.b)(() => this.onOptionClick(e))
					}))))
				}
			}
			var an = Object(o.b)(tn, (e, t) => ({
					onOpenDropdown: () => e((e => async (t, n) => {
						t(Object(gt.c)({
							tooltipId: e
						})), t(Object(Ee.A)())
					})(t.id)),
					onBlockUser: t => e(Et(t)),
					onReportUser: t => e((e => async (t, n) => {
						const a = n(),
							s = Object(ft.d)(a),
							c = Object(ft.e)(a);
						s && t(Object(_e.b)(Object(Ie.userActionUrl)(s, e, Ct, c)))
					})(t)),
					onBanUser: t => {
						e((e => async (t, n) => {
							const a = n(),
								s = Object(I.x)(a),
								c = Object(ft.e)(a);
							s && t(Object(_e.b)(Object(Ie.userActionUrl)(s, e, Ot, c)))
						})(t)), e(Object(Ee.a)(xe.b.ChatSettings))
					},
					onKickUser: t => e((e => async (t, n) => {
						const a = n(),
							s = Object(ft.d)(a),
							c = Object(ft.e)(a);
						s && t(Object(_e.b)(Object(Ie.userActionUrl)(s, e, _t, c, {
							source: xe.b.ChatSettings
						})))
					})(t))
				}))(nn),
				sn = n("./src/chat/components/ChatIcon/index.m.less"),
				cn = n.n(sn);
			const rn = i.a.wrapped(se, "Userpic", cn.a),
				on = i.a.wrapped(rn, "TopUserpic", cn.a),
				ln = i.a.wrapped(rn, "BottomUserpic", cn.a);
			var dn = i.a.wrapped(e => r.a.createElement("span", {
					className: e.className
				}, e.secondUserId ? r.a.createElement(r.a.Fragment, null, r.a.createElement(on, {
					userId: e.userId
				}), ",", r.a.createElement(ln, {
					userId: e.secondUserId
				})) : r.a.createElement(rn, {
					userId: e.userId
				})), "IconWrapper", cn.a),
				un = n("./src/chat/controls/TimeStamp/index.m.less"),
				hn = n.n(un);
			var mn = i.a.wrapped(e => {
					const t = "number" == typeof e.date ? new Date(e.date) : e.date;
					return r.a.createElement("time", {
						className: e.className,
						dateTime: D(t),
						title: A(t)
					}, e.children)
				}, "TimeStamp", hn.a),
				bn = n("./src/chat/components/MessageHeader/index.m.less"),
				pn = n.n(bn);
			const gn = i.a.wrapped(mn, "TimeStamp", pn.a),
				fn = i.a.span("UserName", pn.a);
			var On = i.a.wrapped(e => r.a.createElement("a", {
					target: Ce.c.BLANK,
					rel: Ce.b,
					className: e.className,
					href: "".concat(H.a.redditUrl, "/user/").concat(e.nickname)
				}, r.a.createElement(dn, {
					userId: e.userId
				}), r.a.createElement("span", null, r.a.createElement(fn, null, e.nickname), r.a.createElement(gn, {
					date: e.createdAt
				}, w(new Date(e.createdAt))), e.children)), "UserHeader", pn.a),
				jn = e => r.a.createElement(K.a, {
					className: e.className,
					disable: !0,
					viewBox: "0 0 16 16"
				}, r.a.createElement("g", {
					transform: "translate(-26.000000, -37.000000)"
				}, r.a.createElement("path", {
					d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
				})));

			function Cn() {
				return (Cn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var _n = e => r.a.createElement(K.a, Cn({}, e, {
					viewBox: "0 0 16 16"
				}), r.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				})),
				En = n("./src/chat/components/MessageReportDialog/Header.m.less"),
				vn = n.n(En);
			const yn = i.a.wrapped(jn, "Group", vn.a),
				In = i.a.wrapped(_n, "Key", vn.a),
				xn = i.a.wrapped(an, "MemberActionDropdown", vn.a),
				Sn = i.a.wrapped(On, "MessageHeaderLink", vn.a),
				kn = i.a.h5("ChannelName", vn.a),
				Nn = i.a.span("TextOverflow", vn.a),
				wn = i.a.wrapped(ye.d, "IconButton", vn.a),
				Tn = i.a.div("Header", vn.a);
			var Mn = e => {
					const {
						channelId: t,
						channelIsPublic: n,
						channelName: a,
						messageCreatedAt: s,
						messageId: c,
						reportedUserId: o,
						reportedUserName: i
					} = e, l = "UserAction--Item-".concat(c);
					return r.a.createElement(Tn, null, r.a.createElement(Sn, {
						createdAt: s,
						nickname: i,
						userId: o
					}, r.a.createElement(kn, null, n ? r.a.createElement(yn, null) : r.a.createElement(In, null), r.a.createElement(Nn, null, a))), r.a.createElement(xn, {
						channelId: t,
						containerClassName: l,
						className: l,
						dropdownIndex: 0,
						id: "UserAction--Select-".concat(c),
						isBlockedUser: !1,
						userId: o
					}, r.a.createElement(wn, null, r.a.createElement(Vt, null))))
				},
				An = n("./src/chat/components/MessageReportDialog/index.m.less"),
				Dn = n.n(An);
			const {
				fbt: Ln
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Un = i.a.p("ReasonText", Dn.a), Rn = i.a.p("DeleteText", Dn.a), Pn = i.a.p("AcceptText", Dn.a);
			var Bn = e => {
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
					reportedUserName: u
				} = e.report;
				return r.a.createElement(r.a.Fragment, null, n && s && a && i && c && d && u && r.a.createElement(Mn, {
					channelId: n,
					channelIsPublic: a,
					channelName: s,
					messageCreatedAt: c,
					messageId: i,
					reportedUserId: d,
					reportedUserName: u
				}), o, r.a.createElement(Un, null, Ln._("Reported for {reason}", [Ln._param("reason", l)], {
					hk: "2BwGqI"
				})), t && t.deleted && r.a.createElement(Rn, null, Ln._("Deleted by {username}", [Ln._param("username", "u/".concat(t.deleted.userName))], {
					hk: "4mxZZS"
				})), t && t.ignored && r.a.createElement(Pn, null, Ln._("Approved by {username}", [Ln._param("username", "u/".concat(t.ignored.userName))], {
					hk: "m22OH"
				})), $e()(t) && r.a.createElement(dt, {
					reportedMessageId: e.message.messageId,
					reportedChannelId: e.message.channelId
				}))
			};
			const Hn = ["snoo_heart_eyes_pride", "snoo_give_upvote_pride", "upvote_pride", "snoo", "snoo_simple_smile", "snoo_smile", "snoo_joy", "snoo_tongue", "snoo_wink", "snoo_sad", "snoo_biblethump", "snoo_angry", "snoo_disapproval", "snoo_trollface", "snoo_dealwithit", "snoo_facepalm", "snoo_shrug", "snoo_scream", "snoo_thoughtful", "snoo_surprised", "snoo_hearteyes", "snoo_hug", "snoo_feelsbadman", "snoo_feelsgoodman", "snoo_putback", "snoo_tableflip", "upvote", "downvote", "karma", "cake", "redditgold", "illuminati", "kappa", "sloth", "cat_blep", "pupper", "partyparrot", "orly", "hamster", "doge"];
			var Fn = {
				simple_smile: "".concat(H.a.assetPath, "/img/snoomoji/snoo_simple_smile.png"),
				smile: "".concat(H.a.assetPath, "/img/snoomoji/snoo_smile.png"),
				joy: "".concat(H.a.assetPath, "/img/snoomoji/snoo_joy.png"),
				tongue: "".concat(H.a.assetPath, "/img/snoomoji/snoo_tongue.png"),
				wink: "".concat(H.a.assetPath, "/img/snoomoji/snoo_wink.png"),
				sad: "".concat(H.a.assetPath, "/img/snoomoji/snoo_sad.png"),
				biblethump: "".concat(H.a.assetPath, "/img/snoomoji/snoo_cry.png"),
				angry: "".concat(H.a.assetPath, "/img/snoomoji/snoo_angry.png"),
				disapproval: "".concat(H.a.assetPath, "/img/snoomoji/snoo_disapproval.png"),
				trollface: "".concat(H.a.assetPath, "/img/snoomoji/snoo_trollface.png"),
				dealwithit: "".concat(H.a.assetPath, "/img/snoomoji/snoo_dealwithit.png"),
				facepalm: "".concat(H.a.assetPath, "/img/snoomoji/snoo_facepalm.png"),
				shrug: "".concat(H.a.assetPath, "/img/snoomoji/snoo_shrug.png"),
				scream: "".concat(H.a.assetPath, "/img/snoomoji/snoo_scream.png"),
				thoughtful: "".concat(H.a.assetPath, "/img/snoomoji/snoo_thoughtful.png"),
				surprised: "".concat(H.a.assetPath, "/img/snoomoji/snoo_surprised.png"),
				hearteyes: "".concat(H.a.assetPath, "/img/snoomoji/snoo_hearteyes.png"),
				tableflip: "".concat(H.a.assetPath, "/img/snoomoji/snoo_tableflip.png"),
				putback: "".concat(H.a.assetPath, "/img/snoomoji/snoo_putback.png"),
				hug: "".concat(H.a.assetPath, "/img/snoomoji/snoo_hug.png"),
				feelsbadman: "".concat(H.a.assetPath, "/img/snoomoji/snoo_feelsbadman.png"),
				feelsgoodman: "".concat(H.a.assetPath, "/img/snoomoji/snoo_feelsgoodman.png"),
				snoo: "".concat(H.a.assetPath, "/img/snoomoji/snoo.png"),
				snoo_simple_smile: "".concat(H.a.assetPath, "/img/snoomoji/snoo_simple_smile.png"),
				slightly_smiling: "".concat(H.a.assetPath, "/img/snoomoji/snoo_simple_smile.png"),
				snoo_smile: "".concat(H.a.assetPath, "/img/snoomoji/snoo_smile.png"),
				snoo_joy: "".concat(H.a.assetPath, "/img/snoomoji/snoo_joy.png"),
				snoo_tongue: "".concat(H.a.assetPath, "/img/snoomoji/snoo_tongue.png"),
				stuck_out_tongue: "".concat(H.a.assetPath, "/img/snoomoji/snoo_tongue.png"),
				snoo_wink: "".concat(H.a.assetPath, "/img/snoomoji/snoo_wink.png"),
				snoo_sad: "".concat(H.a.assetPath, "/img/snoomoji/snoo_sad.png"),
				snoo_biblethump: "".concat(H.a.assetPath, "/img/snoomoji/snoo_cry.png"),
				cry: "".concat(H.a.assetPath, "/img/snoomoji/snoo_cry.png"),
				snoo_angry: "".concat(H.a.assetPath, "/img/snoomoji/snoo_angry.png"),
				snoo_disapproval: "".concat(H.a.assetPath, "/img/snoomoji/snoo_disapproval.png"),
				snoo_trollface: "".concat(H.a.assetPath, "/img/snoomoji/snoo_trollface.png"),
				snoo_dealwithit: "".concat(H.a.assetPath, "/img/snoomoji/snoo_dealwithit.png"),
				sunglasses: "".concat(H.a.assetPath, "/img/snoomoji/snoo_dealwithit.png"),
				snoo_facepalm: "".concat(H.a.assetPath, "/img/snoomoji/snoo_facepalm.png"),
				snoo_shrug: "".concat(H.a.assetPath, "/img/snoomoji/snoo_shrug.png"),
				snoo_scream: "".concat(H.a.assetPath, "/img/snoomoji/snoo_scream.png"),
				snoo_thoughtful: "".concat(H.a.assetPath, "/img/snoomoji/snoo_thoughtful.png"),
				snoo_surprised: "".concat(H.a.assetPath, "/img/snoomoji/snoo_surprised.png"),
				flushed: "".concat(H.a.assetPath, "/img/snoomoji/snoo_surprised.png"),
				snoo_hearteyes: "".concat(H.a.assetPath, "/img/snoomoji/snoo_hearteyes.png"),
				heart_eyes: "".concat(H.a.assetPath, "/img/snoomoji/snoo_hearteyes.png"),
				snoo_tableflip: "".concat(H.a.assetPath, "/img/snoomoji/snoo_tableflip.png"),
				table_flip: "".concat(H.a.assetPath, "/img/snoomoji/snoo_tableflip.png"),
				snoo_putback: "".concat(H.a.assetPath, "/img/snoomoji/snoo_putback.png"),
				table: "".concat(H.a.assetPath, "/img/snoomoji/snoo_putback.png"),
				snoo_hug: "".concat(H.a.assetPath, "/img/snoomoji/snoo_hug.png"),
				snoo_feelsbadman: "".concat(H.a.assetPath, "/img/snoomoji/snoo_feelsbadman.png"),
				feels_bad_man: "".concat(H.a.assetPath, "/img/snoomoji/snoo_feelsbadman.png"),
				snoo_feelsgoodman: "".concat(H.a.assetPath, "/img/snoomoji/snoo_feelsgoodman.png"),
				feels_good_man: "".concat(H.a.assetPath, "/img/snoomoji/snoo_feelsgoodman.png"),
				upvote: "".concat(H.a.assetPath, "/img/snoomoji/upvote.png"),
				downvote: "".concat(H.a.assetPath, "/img/snoomoji/downvote.png"),
				karma: "".concat(H.a.assetPath, "/img/snoomoji/karma.png"),
				cake: "".concat(H.a.assetPath, "/img/snoomoji/cake.png"),
				redditgold: "".concat(H.a.assetPath, "/img/snoomoji/redditgold.png"),
				gold: "".concat(H.a.assetPath, "/img/snoomoji/redditgold.png"),
				illuminati: "".concat(H.a.assetPath, "/img/snoomoji/illuminati.png"),
				kappa: "".concat(H.a.assetPath, "/img/snoomoji/kappa.png"),
				sloth: "".concat(H.a.assetPath, "/img/snoomoji/sloth.png"),
				cat_blep: "".concat(H.a.assetPath, "/img/snoomoji/cat_blep.png"),
				pupper: "".concat(H.a.assetPath, "/img/snoomoji/pupper.png"),
				partyparrot: "".concat(H.a.assetPath, "/img/snoomoji/partyparrot.gif"),
				party_parrot: "".concat(H.a.assetPath, "/img/snoomoji/partyparrot.gif"),
				orly: "".concat(H.a.assetPath, "/img/snoomoji/orly.png"),
				o_rly_owl: "".concat(H.a.assetPath, "/img/snoomoji/orly.png"),
				party_pigeon: "".concat(H.a.assetPath, "/img/snoomoji/orly.png"),
				partypigeon: "".concat(H.a.assetPath, "/img/snoomoji/orly.png"),
				hamster: "".concat(H.a.assetPath, "/img/snoomoji/hamster.png"),
				doge: "".concat(H.a.assetPath, "/img/snoomoji/doge.png"),
				upvote_pride: "".concat(H.a.assetPath, "/img/snoomoji/upvote_pride.png"),
				snoo_heart_eyes_pride: "".concat(H.a.assetPath, "/img/snoomoji/heart_eyes_pride.png"),
				snoo_give_upvote_pride: "".concat(H.a.assetPath, "/img/snoomoji/give_upvote_pride.png")
			};
			const Kn = e => e.emojis && e.emojis.snoomojis;
			var zn = n("./src/chat/components/Snoomoji/index.m.less"),
				Gn = n.n(zn);
			const Wn = i.a.img("SnooImg", Gn.a),
				Vn = Object(F.a)({
					snoomojis: Kn
				});
			var qn = Object(o.b)(Vn)(e => {
					const {
						className: t,
						iconName: n
					} = e, a = n && Fn[n] || Fn.smile;
					return r.a.createElement(Wn, {
						className: t,
						src: a
					})
				}),
				Jn = n("./src/chat/components/Message/Bubble.m.less"),
				Zn = n.n(Jn);
			const {
				PENDING: Qn
			} = ve.c, {
				TEXT: Yn,
				POST: Xn,
				EMBED: $n,
				SNOOMOJI: ea
			} = ve.b, ta = i.a.wrapped(Me, "ActionButtonGroup", Zn.a), na = i.a.wrapped(e => r.a.createElement("div", {
				className: Object(Oe.a)(e.className, {
					[Zn.a.dark]: e.darkBackground,
					[Zn.a.disabled]: e.disabled,
					[Zn.a.withBorder]: e.withBorder
				})
			}, e.children, e.withButton && e.message.messageType !== Qn && r.a.createElement(ta, {
				message: e.message,
				subredditName: e.subredditName,
				fromCurrentUser: e.fromCurrentUser,
				fromInvite: e.fromInvite
			})), "MessageBubble", Zn.a), aa = (e, t, n, a) => r.a.createElement(Ye, {
				key: fe()(),
				href: e,
				target: n,
				rel: Ce.b,
				noUnderline: a === je.d.mention || a === je.d.profile || a === je.d.profileFull || a === je.d.subreddit || a === je.d.subredditFull
			}, t), sa = e => {
				const {
					value: t,
					highlighMentionGroupLinks: n
				} = e, a = !(!n || !n.length), s = Object(He.a)(t, a, aa);
				return r.a.createElement(ca, null, s)
			}, ca = i.a.pre("MessageText", Zn.a), ra = i.a.div("Snoo", Zn.a);
			var oa = i.a.wrapped(e => {
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
							report: u
						} = o.messageData, h = ((e, t, n) => {
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
								case $n:
									const {
										embed: e
									} = s;
									return t || a === Qn || !e ? r.a.createElement(sa, {
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
										target: Ce.c.BLANK,
										rel: Ce.b
									});
								case Xn:
									return r.a.createElement(Ye, {
										href: o,
										target: Ce.c.BLANK,
										rel: Ce.b
									}, o);
								case Yn:
									return r.a.createElement(sa, {
										value: o,
										highlighMentionGroupLinks: c
									});
								case ea:
									return r.a.createElement(ra, null, r.a.createElement(qn, {
										iconName: o
									}));
								default:
									return o
							}
						})(o, n, l), m = o.messageType === Qn && o.error && o.clientMessageId;
						return r.a.createElement("div", {
							className: t
						}, r.a.createElement(na, {
							darkBackground: a,
							fromCurrentUser: s,
							fromInvite: c,
							withButton: i && !m && !u,
							withBorder: e !== ea,
							message: o,
							disabled: !!m,
							subredditName: d
						}, u && o.messageType !== Qn ? r.a.createElement(Bn, {
							report: u,
							message: o
						}) : h), m && r.a.createElement(Be, {
							channelId: o.channelId,
							clientMessageId: m
						}))
					}
					return null
				}, "MessageItemBubble", Zn.a),
				ia = n("./node_modules/react-dom/index.js"),
				la = n("./src/chat/actions/channel/subreddit.ts");

			function da() {
				return (da = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ua = n("./src/chat/components/MessageInput/locker.m.less"),
				ha = n.n(ua);
			const ma = i.a.div("LockPanel", ha.a),
				ba = i.a.wrapped(ye.d, "IconButton", ha.a),
				pa = i.a.wrapped(e => r.a.createElement(K.a, da({}, e, {
					viewBox: "0 0 12 12"
				}), r.a.createElement("g", {
					fill: "#FFD635",
					fillRule: "evenodd"
				}, r.a.createElement("path", {
					d: "M3.857 3.571C3.857 2.39 4.82 1.43 6 1.43c1.181 0 2.143.961 2.143 2.142V5H3.857V3.571zM10.286 5H9.57V3.571A3.575 3.575 0 0 0 6 0a3.575 3.575 0 0 0-3.571 3.571V5h-.715A.714.714 0 0 0 1 5.714v5c0 .395.32.715.714.715h8.572c.394 0 .714-.32.714-.715v-5A.714.714 0 0 0 10.286 5z"
				}))), "LockIcon", ha.a);
			class ga extends r.a.Component {
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
					return r.a.createElement(ma, null, r.a.createElement(pa, null), O.fbt._("This chat has been locked.", null, {
						hk: "hjzi4"
					}), this.props.isModerator && r.a.createElement(ba, {
						primary: !0,
						disabled: this.state.isSubmitDisabled,
						onClick: this.onUnlockChannel,
						title: O.fbt._("Unlock room", null, {
							hk: "3yPxoR"
						})
					}, O.fbt._("Unlock room", null, {
						hk: "3yPxoR"
					})))
				}
			}
			var fa = Object(o.b)(void 0, (e, t) => ({
				onUnlockChannel: () => e(Object(la.v)(!1, !1))
			}))(ga);

			function Oa() {
				return (Oa = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ja = n("./src/chat/components/MessageInput/muted.m.less"),
				Ca = n.n(ja);
			const {
				fbt: _a
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ea = i.a.div("Panel", Ca.a), va = i.a.wrapped(e => r.a.createElement(K.a, Oa({}, e, {
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
			})))), "Icon", Ca.a);
			var ya = () => r.a.createElement(Ea, null, r.a.createElement(va, null), _a._("You are temporarily muted in this room", null, {
					hk: "2eUfly"
				})),
				Ia = n("./node_modules/lodash/debounce.js"),
				xa = n.n(Ia),
				Sa = n("./src/chat/components/Scroller/index.m.less"),
				ka = n.n(Sa);
			class Na extends r.a.Component {
				constructor(e) {
					super(e), this.isUserScrolling = !1, this.list = null, this.previousScrollHeight = 0, this.scrollHandlers = [], this._isBatchLoading = !1, this.debounceScrollToBottom = xa()(() => this.scrollToBottom(!0), 1, {
						leading: !1,
						trailing: !0
					}), this.debounceScrollToTop = xa()(() => this.scrollToTop(!0), 1, {
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
					return r.a.createElement(wa, {
						className: t,
						innerRef: e => this.list = e
					}, e)
				}
			}
			const wa = i.a.div("Scroller", ka.a);
			wa.displayName = "Scroller";
			var Ta = Na,
				Ma = n("./src/chat/constants/container.ts"),
				Aa = n("./src/chat/constants/page.ts"),
				Da = n("./src/chat/icons/svgs/NavClose/index.tsx"),
				La = n("./src/chat/components/MessageTooltip/index.m.less"),
				Ua = n.n(La);
			const Ra = "MessageInputTooltip--Container",
				Pa = i.a.wrapped(Object(pt.a)(Kt.a), "Dropdown", Ua.a),
				Ba = i.a.div("DropdownWrapper", Ua.a),
				Ha = i.a.div("Picker", Ua.a),
				Fa = i.a.h4("PickerHeader", Ua.a),
				Ka = i.a.wrapped(ye.d, "IconButton", Ua.a),
				za = i.a.wrapped(e => r.a.createElement(Ta, {
					className: Object(Oe.a)(e.className, {
						[Ua.a.embedded]: e.isEmbedded
					})
				}, e.children), "PickerWrapper", Ua.a);
			za.displayName = "PickerWrapper";
			const Ga = Object(F.a)({
				dropdownIsOpen: (e, t) => e.tooltipId === t.id,
				isEmbedded: e => !(!e.container || e.container.size !== Ma.a.EMBED)
			});
			var Wa = Object(o.b)(Ga, e => ({
					closeTooltip: () => e(Object(gt.d)())
				}))(e => r.a.createElement(Pa, {
					tooltipId: Ra,
					container: document.getElementById(Aa.a),
					isOpen: e.isOpen || e.dropdownIsOpen,
					targetPosition: ["left", "top"],
					excludeContainerPosition: !0,
					closeOnClickOutside: !0,
					isOverlayOff: !0
				}, r.a.createElement(Ba, {
					onClick: () => e.closeTooltip()
				}, r.a.createElement(Ha, null, r.a.createElement(Fa, null, e.title, r.a.createElement(Ka, null, r.a.createElement(Da.a, null))), r.a.createElement(za, {
					isEmbedded: e.isEmbedded
				}, e.children))))),
				Va = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/times.js")),
				qa = n.n(Va),
				Ja = n("./src/chat/components/MessageTooltip/Picker/Snoomoji.m.less"),
				Za = n.n(Ja);
			const Qa = 15,
				Ya = i.a.div("IconWrapper", Za.a);
			Ya.displayName = "IconWrapper";
			const Xa = i.a.span("EmptyIcons", Za.a),
				$a = i.a.div("LoadingIndicator", Za.a),
				es = i.a.div("Wrapper", Za.a),
				ts = Object(F.a)({
					snoomojis: Kn
				});
			class ns extends c.Component {
				constructor(e) {
					super(e), this.loadCounter = 0, this.snooIcons = Fn, this.snoomojiIconOrder = this.getSnoomojiPickerOrder(), this.state = {
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
					return [...ht()(t, Hn), ...Hn]
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
					return this.snoomojiIconOrder.map((e, t) => r.a.createElement(Ya, {
						key: "icon-".concat(t),
						onClick: () => this.props.onPickSnoomoji(e)
					}, r.a.createElement(qn, {
						iconName: e
					})))
				}
				renderBlankItems() {
					return this.snoomojiIconOrder && qa()(Math.ceil(100 / Qa), e => r.a.createElement(Xa, {
						key: "empty-".concat(e)
					}))
				}
				render() {
					return this.state.isReady ? r.a.createElement(es, null, this.renderSnooIcons(), this.renderBlankItems()) : r.a.createElement($a, null, O.fbt._("Loading snoomoji...", null, {
						hk: "39nqLy"
					}))
				}
			}
			var as = Object(o.b)(ts)(ns),
				ss = n("./src/chat/actions/members.ts"),
				cs = n("./src/chat/controls/Title/index.m.less"),
				rs = n.n(cs);
			const os = i.a.wrapped(e => {
				let {
					bold: t,
					children: n,
					className: a
				} = e;
				return r.a.createElement("h4", {
					className: Object(Oe.a)({
						[rs.a.bold]: t
					}, a)
				}, n)
			}, "Title", rs.a);
			var is = n("./src/chat/selectors/members.ts"),
				ls = n("./src/chat/selectors/user.ts"),
				ds = n("./src/chat/components/ChatMemberList/index.m.less"),
				us = n.n(ds);
			const hs = i.a.wrapped(an, "MemberActionDropdown", us.a),
				ms = i.a.wrapped(e => r.a.createElement("li", {
					onClick: e.onClick,
					className: Object(Oe.a)(e.className, {
						[us.a.selected]: e.isSelected
					})
				}, e.children), "ListItem", us.a),
				bs = i.a.span("IconContainer", us.a),
				ps = i.a.wrapped(os, "Title", us.a),
				gs = i.a.span("Warning", us.a),
				fs = Object(F.a)({
					channelType: e => Object(I.A)(e, "type"),
					contacts: e => e.contacts.models,
					members: (e, t) => t.members || Object(is.b)(e, t.channelId) || [],
					currentUserId: ls.a
				}),
				Os = Object(o.b)(fs, e => ({
					onViewProfile: t => {
						e(Object(Ee.m)()), e(Object(Ee.p)()).then(() => {
							window.open("".concat(H.a.redditUrl, "/user/").concat(t))
						})
					}
				})),
				js = e => {
					let {
						className: t,
						channelId: n,
						currentUserId: a,
						members: s,
						minimal: c,
						onClick: o,
						onSelectName: i,
						onViewProfile: l,
						selectIndex: d,
						useNSFWIcons: u
					} = e;
					return ((e, t, n) => {
						if (n && void 0 !== t && e.length >= t) {
							const a = e[t];
							a && n(a.name)
						}
					})(s, d, i), r.a.createElement("ul", {
						className: t
					}, s && s.map((e, t) => r.a.createElement(ms, {
						key: e.name,
						isSelected: d === t,
						className: Ft,
						onClick: () => {
							o ? o(e.name) : l(e.name)
						}
					}, r.a.createElement(bs, null, u && e.isNSFW ? r.a.createElement(q, null) : r.a.createElement(se, {
						userId: e.id
					})), r.a.createElement(ps, null, e.name), e.isNSFW && r.a.createElement(gs, null, O.fbt._("NSFW", null, {
						hk: "36qPno"
					})), e.isBlockedByMe && r.a.createElement(gs, null, O.fbt._("Blocked", null, {
						hk: "1RUrSV"
					})), !c && e.id !== a && r.a.createElement(hs, {
						channelId: n,
						containerClassName: Ft,
						dropdownIndex: t,
						id: "MemberAction--Select-".concat(t),
						userId: e.id,
						isBlockedUser: e.isBlockedByMe
					}))))
				};
			js.displayName = "ChatMemberList";
			var Cs = Os(js),
				_s = n("./src/chat/components/MessageTooltip/Picker/Userlist.m.less"),
				Es = n.n(_s);
			const vs = i.a.div("LoadingIndicator", Es.a),
				ys = i.a.wrapped(Cs, "ChatMemberList", Es.a),
				Is = i.a.div("Wrapper", Es.a),
				xs = Object(F.a)({
					channelId: I.x,
					channelMembers: is.f,
					hasMoreMembers: is.d,
					fetchingMembers: is.a
				});
			class Ss extends c.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.fetchedFilter = "", this.isMount = !1, this.fetchSubredditChannelUsers = xa()((function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
						t.props.fetchSubredditChannelUsers(e)
					}), b.Cb, {
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
				componentWillReceiveProps(e) {
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
					return this.members = this.filterMembers(), this.members && this.members.length && e ? r.a.createElement(Is, null, r.a.createElement(ys, {
						minimal: !0,
						channelId: e,
						members: this.members,
						onClick: t,
						onSelectName: n,
						selectIndex: this.state.selectIndex,
						useNSFWIcons: !0
					})) : a || this.members && this.members.length ? r.a.createElement(vs, null, O.fbt._("Loading members...", null, {
						hk: "23phIt"
					})) : r.a.createElement(vs, null, O.fbt._("Member not found!", null, {
						hk: "4DkpQe"
					}))
				}
			}
			var ks = Object(o.b)(xs, e => ({
				fetchSubredditChannelUsers: t => e(Object(ss.e)(t))
			}))(Ss);
			const Ns = "Backspace",
				ws = "Enter",
				Ts = "ArrowLeft",
				Ms = "ArrowUp",
				As = "ArrowRight",
				Ds = "ArrowDown",
				Ls = "Delete";
			var Us = n("./src/chat/singleton/SendbirdSDK.ts"),
				Rs = n("./src/chat/controls/ContentEditable/index.m.less"),
				Ps = n.n(Rs);
			const Bs = i.a.textarea("Textarea", Ps.a);
			class Hs extends r.a.Component {
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
					this.props.channelId !== e.channelId && this.textarea && (this.textarea.value = ""), this.textarea && this.textarea.value.length ? Us.b.startTypingIndicator() : Us.b.endTypingIndicator(), this.textarea && e.textUpdate && e.textUpdate.length && (this.textarea.value = e.textUpdate, this.props.onChangeOnce(this.textarea.value), this.handleSizing())
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
					e.key !== ws || e.shiftKey || (e.preventDefault(), this.props.onSubmit()), this.handleSizing()
				}
				handleKeyDown(e) {
					e.key === Ms && this.props.onKeyUp(e), e.key === Ds && this.props.onKeyDown(e), this.handleSizing()
				}
				handleSizing() {
					if (this.textarea) {
						const e = this.textarea;
						e.style.height = "auto", e.style.height = e.scrollHeight + this.offset + "px"
					}
				}
				render() {
					return r.a.createElement(Bs, {
						innerRef: this._ref,
						rows: 1,
						className: this.props.className,
						"aria-label": "Message #chat",
						"aria-multiline": !0,
						"aria-haspopup": !0,
						autoCorrect: "off",
						autoComplete: "off",
						role: "textbox",
						placeholder: O.fbt._("Enter text here…", null, {
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

			function Fs() {
				return (Fs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}

			function Ks() {
				return (Ks = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var zs = e => r.a.createElement(K.a, Ks({}, e, {
					viewBox: "0 0 330 330"
				}), r.a.createElement("path", {
					d: "M165 0a165 165 0 1 0 0 330 165 165 0 0 0 0-330zM81 133a20 20 0 0 1 20-20 20 20 0 0 1 20 20 20 20 0 0 1-20 20 20 20 0 0 1-20-20zm146 94a86 86 0 0 1-124 0 15 15 0 0 1 11-26h102a15 15 0 0 1 11 26zm16-80a20 20 0 0 1-28 0 20 20 0 0 1 0-28 20 20 0 0 1 28 0 20 20 0 0 1 0 28z"
				})),
				Gs = n("./src/chat/components/MessageInput/index.m.less"),
				Ws = n.n(Gs);
			const Vs = "MessageInputTooltip--Snoomoji",
				qs = "MessageInputTooltip--Userlist",
				Js = i.a.wrapped(ye.d, "SubmitButton", Ws.a);
			Js.displayName = "SubmitButton";
			const Zs = i.a.wrapped(e => r.a.createElement(K.a, Fs({}, e, {
					viewBox: "0 0 18 18"
				}), r.a.createElement("path", {
					d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
				})), "SendIcon", Ws.a),
				Qs = i.a.form("Form", Ws.a),
				Ys = i.a.div("Wrapper", Ws.a),
				Xs = i.a.div("Icons", Ws.a),
				$s = i.a.wrapped(Hs, "ContentEditable", Ws.a),
				ec = i.a.wrapped(e => r.a.createElement("div", {
					className: Object(Oe.a)({
						[Ws.a.active]: e.active
					}, e.className),
					onClick: e.onClick
				}, e.children), "IconButton", Ws.a),
				tc = Object(F.a)({
					activeDropdownId: e => e.tooltipId || void 0
				});
			class nc extends c.PureComponent {
				constructor(e) {
					super(e), this.editableContent = null, this.selectUserName = "", this.handleChangeText = e => {
						this.setState({
							text: e.trim()
						})
					}, this.handleChangeOnce = e => {
						this.toggleUserlistTooltipByTextChange(e), this.cleanTextUpdate()
					}, this.sendEnabled = () => !!this.state.text, this.onKeyUpUserlistListener = bt.a, this.onKeyDownUserlistListener = bt.a, this.handleSubmitText = this.handleSubmitText.bind(this), this.handleSubmitSnoo = this.handleSubmitSnoo.bind(this), this.state = {
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
					const e = Object(ia.findDOMNode)(this.editableContent);
					e && (e.value = "", e.style.height = "auto", this.setState({
						text: ""
					}), this.cleanTextUpdate())
				}
				handleSubmitText() {
					this.sendEnabled() && (this.props.activeDropdownId === qs ? this.onPickUserName(this.selectUserName || this.state.inputUserName) : (this.props.onSubmitText(this.state.text), this.props.onSubmit && this.props.onSubmit(), this.clearText()))
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
					const t = this.props.activeDropdownId === qs,
						n = /(?:^|\s)(?:@|\/?u\/)([A-Za-z0-9_-]{0,20})$/i.exec(e),
						a = n && n[1];
					return null !== a && e.trim().length ? (t || this.props.toggleUserlistTooltip(qs), this.setState({
						text: e,
						inputUserName: a
					})) : (t && this.props.toggleUserlistTooltip(qs), this.setState({
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
					return s ? r.a.createElement(ya, null) : a ? r.a.createElement(fa, {
						isModerator: c
					}) : r.a.createElement(Qs, {
						className: t,
						id: Ra,
						onSubmit: Object(Gt.b)(this.handleSubmitText)
					}, r.a.createElement($s, {
						channelId: n,
						ref: e => this.editableContent = e,
						onSubmit: this.handleSubmitText,
						onChange: this.handleChangeText,
						onChangeOnce: this.handleChangeOnce,
						textUpdate: this.state.textUpdate,
						onKeyUp: e => this.onKeyUpUserlistListener(e),
						onKeyDown: e => this.onKeyDownUserlistListener(e)
					}), r.a.createElement(Ys, null, r.a.createElement(Xs, null, r.a.createElement(ec, {
						onClick: () => o(Vs),
						active: e === Vs
					}, r.a.createElement(zs, null)), r.a.createElement(Wa, {
						id: Vs,
						title: O.fbt._("Choose Snoomoji", null, {
							hk: "qOyxa"
						})
					}, r.a.createElement(as, {
						onPickSnoomoji: this.handleSubmitSnoo
					})), r.a.createElement(ec, {
						active: e === qs,
						onClick: () => e !== qs && this.addPrefixToValue("u/")
					}, "u/"), r.a.createElement(Wa, {
						id: qs,
						title: "u/".concat(this.state.inputUserName)
					}, r.a.createElement(ks, {
						inputUserName: this.state.inputUserName,
						onPickUserName: e => this.onPickUserName(e),
						onSelectUserName: e => this.selectUserName = e,
						bindKeyUp: e => this.onKeyUpUserlistListener = e,
						bindKeyDown: e => this.onKeyDownUserlistListener = e
					})), r.a.createElement(ec, {
						active: !1,
						onClick: () => this.addPrefixToValue("r/")
					}, "r/")), r.a.createElement(Js, {
						type: "submit",
						disabled: !this.sendEnabled()
					}, r.a.createElement(Zs, {
						active: !0
					}))))
				}
			}
			var ac = Object(o.b)(tc, (e, t) => {
					let {
						channelId: n
					} = t;
					return {
						onSubmitText: t => e(Object(g.n)(n, t, ve.b.TEXT)),
						onSubmitSnoo: t => e(Object(g.n)(n, t, ve.b.SNOOMOJI)),
						toggleSnoomojiTooltip: t => {
							e(Object(Ee.C)(t)), e(Object(gt.c)({
								tooltipId: t
							}))
						},
						toggleUserlistTooltip: t => {
							e(Object(gt.c)({
								tooltipId: t
							}))
						}
					}
				})(nc),
				sc = n("./src/chat/actions/container.ts"),
				cc = n("./src/lib/copyToClipboard/index.ts"),
				rc = n("./src/chat/actions/channel/dropdown.ts"),
				oc = n("./src/chat/actions/theme.ts");

			function ic() {
				return (ic = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var lc = e => r.a.createElement(K.a, ic({}, e, {
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
				dc = n("./src/chat/components/ThemeSwitcher/index.m.less"),
				uc = n.n(dc);
			const hc = Object(F.a)({
					theme: e => e.user.prefs.globalTheme
				}),
				mc = Object(o.b)(hc, (e, t) => ({
					changeModeClicked: () => e(Object(oc.themeToggle)())
				})),
				bc = i.a.div("Wrapper", uc.a);
			mc(e => {
				let {
					changeModeClicked: t,
					theme: n
				} = e;
				return r.a.createElement(bc, {
					onClick: t
				}, r.a.createElement(lc, {
					active: !0
				}))
			});
			var pc = n("./src/chat/constants/channels.ts");

			function gc() {
				return (gc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var fc = e => r.a.createElement(K.a, gc({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("path", {
					d: "M7.69 10A2.312 2.312 0 0 1 10 7.69 2.311 2.311 0 0 1 12.308 10 2.311 2.311 0 0 1 10 12.31 2.312 2.312 0 0 1 7.69 10m7.29-1.173a5.068 5.068 0 0 0-.631-1.515l.725-1.148a.898.898 0 0 0-1.238-1.238l-1.148.725a5.046 5.046 0 0 0-1.515-.63L10.875 3.7a.898.898 0 0 0-1.75 0l-.298 1.32a5.081 5.081 0 0 0-1.516.63l-1.147-.724a.898.898 0 0 0-1.238 1.238L5.65 7.31a5.106 5.106 0 0 0-.63 1.516l-1.32.298a.898.898 0 0 0 0 1.75l1.32.298c.129.545.344 1.054.63 1.516l-.724 1.147a.898.898 0 0 0 1.238 1.238l1.147-.724c.462.286.971.501 1.516.63l.298 1.32a.898.898 0 0 0 1.75 0l.298-1.32a5.046 5.046 0 0 0 1.515-.631l1.148.725a.896.896 0 0 0 1.238-1.238l-.725-1.148c.287-.461.501-.97.63-1.515l1.321-.298a.898.898 0 0 0 0-1.75l-1.32-.298z",
					fillRule: "evenodd"
				})),
				Oc = n("./src/chat/components/ChannelHeaderDropdown/index.m.less"),
				jc = n.n(Oc);
			const Cc = i.a.wrapped(Object(pt.a)(Kt.a), "Dropdown", jc.a);
			Cc.displayName = "Dropdown";
			const _c = i.a.wrapped(zt.a, "DropdownRow", jc.a),
				Ec = i.a.wrapped(ye.d, "DropdownTrigger", jc.a);

			function vc(e) {
				switch (e) {
					case vt.AddToRoom:
						return O.fbt._("Add to Room", null, {
							hk: "2mqAnD"
						});
					case vt.AddToGroup:
						return O.fbt._("Add to group", null, {
							hk: "3ZCBwZ"
						});
					case vt.Block:
						return O.fbt._("Ban", null, {
							hk: "2Nd06J"
						});
					case vt.CopyLink:
						return O.fbt._("Copy link", null, {
							hk: "2OPNVI"
						});
					case vt.Leave:
						return O.fbt._("Leave group", null, {
							hk: "zStpq"
						});
					case vt.LeaveRoom:
						return O.fbt._("Leave room", null, {
							hk: "42PJCV"
						});
					case vt.LockRoom:
						return O.fbt._("Lock room", null, {
							hk: "3rS9oB"
						});
					case vt.MuteChannel:
						return O.fbt._("Disable notification badging", null, {
							hk: "OJkik"
						});
					case vt.Profile:
						return O.fbt._("View Profile", null, {
							hk: "3qjq7q"
						});
					case vt.RenameGroup:
						return O.fbt._("Rename group", null, {
							hk: "hTeQ"
						});
					case vt.UnlockRoom:
						return O.fbt._("Unlock room", null, {
							hk: "1KiSHK"
						});
					case vt.UnmuteChannel:
						return O.fbt._("Enable notification badging", null, {
							hk: "4ErrUW"
						});
					case vt.ViewMembers:
						return O.fbt._("View members", null, {
							hk: "PC84"
						});
					default:
						return e
				}
			}
			const yc = Object(F.a)({
					currentUserId: ls.a,
					channelId: e => Object(I.x)(e),
					dropdownIsOpen: (e, t) => e.tooltipId === t.dropdownId || "OverlayNavTooltip--Default" === e.tooltipId,
					selectedChannel: e => Object(I.w)(e),
					isModerator: e => Object(I.a)(e),
					isChannelLocked: e => Object(I.M)(e),
					isChannelMuted: I.N
				}),
				Ic = Object(o.b)(yc, (e, t) => ({
					onInviteToChannel: () => e(Object(rc.b)()),
					onLeaveChannel: () => e(Object(rc.c)()),
					onLockChannel: () => e(Object(rc.d)()),
					onUnlockChannel: () => e(Object(la.v)(!1, !0)),
					onViewMembers: () => e(Object(rc.i)()),
					onBlockUser: t => e(Et(t)),
					onViewProfile: t => e(Object(rc.j)(t)),
					onOpenDropdown: t => e(Object(rc.g)(t)),
					onMuteChannel: () => e(Object(rc.e)()),
					onUnmuteChannel: () => e(Object(rc.f)()),
					closeTooltip: () => e(Object(gt.d)())
				}));
			class xc extends c.Component {
				constructor() {
					super(...arguments), this.getDropdownGroupOptions = () => {
						const {
							isModerator: e,
							isChannelLocked: t,
							isChannelMuted: n,
							selectedChannel: a
						} = this.props;
						if (a) switch (a.type) {
							case C.a.Direct:
								return Bt.directChannel.filter(e => Ht.muteChannel(e, n)).filter(e => Ht.unmuteChannel(e, n));
							case C.a.Group:
								return Bt.groupChannel.filter(e => Ht.muteChannel(e, n)).filter(e => Ht.unmuteChannel(e, n));
							case C.a.Subreddit:
								return Bt.subredditChannel.filter(n => Ht.lockRoom(n, e, t)).filter(n => Ht.unlockRoom(n, e, t)).filter(e => Ht.copyLink(e, !!a.isPublic)).filter(e => Ht.muteChannel(e, n)).filter(e => Ht.unmuteChannel(e, n))
						}
					}, this.getBlockedUser = () => {
						const {
							selectedChannel: e,
							currentUserId: t
						} = this.props;
						return e && e.members.find(e => e.id !== t)
					}, this.onOptionClick = e => {
						switch (e) {
							case vt.AddToGroup:
							case vt.AddToRoom:
								return this.props.onInviteToChannel();
							case vt.Block: {
								const e = this.getBlockedUser();
								return e && this.props.onBlockUser(e.id)
							}
							case vt.Leave:
							case vt.LeaveRoom:
								return this.props.onLeaveChannel();
							case vt.Profile:
								return this.onProfileClick();
							case vt.RenameGroup:
								return this.props.toggleChannelNameInput();
							case vt.ViewMembers:
								return this.props.onViewMembers();
							case vt.LockRoom:
								return this.props.onLockChannel();
							case vt.UnlockRoom:
								return this.props.onUnlockChannel();
							case vt.CopyLink: {
								const {
									channelId: e
								} = this.props;
								if (e) {
									const t = Object(Ie.getShortChannelUrl)(e);
									Object(cc.a)(t)
								}
								return
							}
							case vt.MuteChannel:
								return this.props.onMuteChannel();
							case vt.UnmuteChannel:
								return this.props.onUnmuteChannel();
							default:
								return bt.a
						}
					}
				}
				onProfileClick() {
					const e = this.props.selectedChannel;
					if (e && e.channelState === pc.b.JOINED) {
						const t = e.members.find(e => e.id !== this.props.currentUserId);
						if (t && t.name) return this.props.onViewProfile(t.name)
					}
					return this.props.inviterName && this.props.onViewProfile(this.props.inviterName)
				}
				render() {
					const {
						dropdownId: e,
						dropdownIsOpen: t,
						onOpenDropdown: n
					} = this.props, a = this.getDropdownGroupOptions();
					return r.a.createElement(r.a.Fragment, null, !1, r.a.createElement(Ec, {
						id: e,
						onClick: () => n(e)
					}, r.a.createElement(fc, null)), r.a.createElement(Cc, {
						isOpen: t,
						tooltipId: e,
						container: document.getElementById(Aa.a),
						excludeContainerPosition: !0,
						closeOnClickOutside: !0
					}, a && a.map((e, t) => r.a.createElement(_c, {
						key: t,
						displayText: vc(e),
						onClick: () => {
							this.onOptionClick(e), this.props.closeTooltip()
						}
					}))))
				}
			}
			xc.defaultProps = {
				dropdownId: "OverlayNavTooltip--Default"
			};
			var Sc = Ic(xc),
				kc = n("./src/chat/components/CloseIcon/index.tsx");

			function Nc() {
				return (Nc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const wc = e => r.a.createElement(K.a, Nc({}, e, {
				viewBox: "0 0 20 20"
			}), r.a.createElement("path", {
				id: "a",
				d: "M10 15a.997.997 0 0 1-.707-.293l-6-6a1 1 0 1 1 1.414-1.415L10 12.588l5.293-5.294a1 1 0 0 1 1.415 1.415l-6 6A.997.997 0 0 1 10 15"
			}));

			function Tc() {
				return (Tc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			wc.displayName = "NavMinimize";
			const Mc = e => r.a.createElement(K.a, Tc({}, e, {
				viewBox: "0 0 20 20"
			}), r.a.createElement("path", {
				d: "M14.398 11.016c.443 0 .802.359.802.8v1.782A2.406 2.406 0 0 1 12.795 16h-6.39A2.406 2.406 0 0 1 4 13.598V7.202A2.406 2.406 0 0 1 6.405 4.8h1.784a.801.801 0 1 1 0 1.602H6.405a.803.803 0 0 0-.802.8v6.396c0 .441.36.801.802.801h6.39c.442 0 .802-.36.802-.8v-1.782c0-.442.359-.8.801-.8zm1.54-6.516c.04.1.061.204.061.31v3.236a.809.809 0 1 1-1.618 0V6.763l-4.2 4.2a.808.808 0 1 1-1.144-1.144l4.2-4.2h-1.284a.809.809 0 1 1 0-1.619h3.237a.814.814 0 0 1 .747.5z",
				fillRule: "evenodd"
			}));
			Mc.displayName = "NavPopout";
			var Ac = n("./src/chat/selectors/app.ts"),
				Dc = n("./src/chat/components/OverlayNavButtonGroup/index.m.less"),
				Lc = n.n(Dc);
			const Uc = i.a.wrapped(ye.d, "IconButton", Lc.a),
				Rc = i.a.wrapped(kc.a, "CloseButton", Lc.a);
			Rc.displayName = "CloseButton";
			const Pc = i.a.span("Wrapper", Lc.a);
			var Bc = Object(o.b)(() => Object(F.a)({
					containerSize: e => e.container.size,
					inviterName: I.H,
					isReady: Ac.f
				}), e => ({
					close: () => e(Object(sc.sizeChanged)(Ma.a.HIDDEN)),
					minimize: () => {
						e(Object(sc.sizeChanged)(Ma.a.MINIMIZED)), e(Object(Ee.o)())
					},
					popout: () => e(Object(sc.popoutOpened)())
				}))(e => {
					let {
						containerSize: t,
						close: n,
						dropdownId: a,
						showMenu: s,
						inviterName: c,
						isReady: o,
						minimize: i,
						popout: l,
						toggleChannelNameInput: d
					} = e;
					const u = o && t === Ma.a.EMBED;
					return r.a.createElement(Pc, null, s && r.a.createElement(Sc, {
						dropdownId: a,
						inviterName: c,
						toggleChannelNameInput: d
					}), u && r.a.createElement(r.a.Fragment, null, r.a.createElement(Uc, {
						onClick: l,
						title: O.fbt._("Open chat in new window", null, {
							hk: "3S8f7W"
						})
					}, r.a.createElement(Mc, null)), r.a.createElement(Uc, {
						onClick: i,
						title: O.fbt._("Minimize chat", null, {
							hk: "1gym9X"
						})
					}, r.a.createElement(wc, null)), r.a.createElement(Rc, null)))
				}),
				Hc = n("./src/chat/controls/ChannelNameInput/index.m.less"),
				Fc = n.n(Hc);

			function Kc() {
				return (Kc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const zc = i.a.input("Input", Fc.a),
				Gc = i.a.wrapped(e => r.a.createElement("label", {
					className: e.className
				}, r.a.createElement(zc, {
					placeholder: e.placeholder,
					onChange: e.onChange,
					value: e.value
				}), e.children), "NameInput", Fc.a);
			class Wc extends r.a.Component {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = e.currentTarget.value;
						this.props.handleChannelNameInput(t)
					}
				}
				render() {
					return r.a.createElement(Gc, Kc({
						withBackground: this.props.withBackground,
						onChange: this.onChange
					}, this.props), this.props.children)
				}
			}
			var Vc = n("./src/chat/controls/Counter/index.tsx"),
				qc = n("./src/chat/components/RenameGroupInput/index.m.less"),
				Jc = n.n(qc);
			const Zc = i.a.wrapped(e => r.a.createElement("span", {
					className: Object(Oe.a)({
						[Jc.a.visible]: e.isVisible
					}, e.className)
				}, e.children), "InputWrapper", Jc.a),
				Qc = i.a.div("InputContent", Jc.a),
				Yc = i.a.span("InputControls", Jc.a),
				Xc = i.a.wrapped(ye.a, "CancelButton", Jc.a),
				$c = i.a.wrapped(ye.a, "SaveButton", Jc.a);
			class er extends c.Component {
				constructor() {
					super(...arguments), this.displayName = "RenameGroupInput", this.state = {
						groupName: this.props.name || ""
					}, this.getAvailableCharacters = () => pc.d - this.state.groupName.length, this.handleChannelNameInput = e => this.setState({
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
					return r.a.createElement(Zc, {
						isVisible: t
					}, r.a.createElement(Qc, null, r.a.createElement(Wc, {
						handleChannelNameInput: a,
						placeholder: O.fbt._("Rename group", null, {
							hk: "1mjXbx"
						}),
						withBackground: !0,
						value: n
					}, r.a.createElement(Vc.a, {
						count: c
					})), r.a.createElement(Yc, null, r.a.createElement(Xc, {
						secondaryNoBorder: !0,
						onClick: e
					}, O.fbt._("Cancel", null, {
						hk: "1f5Zk8"
					})), r.a.createElement($c, {
						primaryNoBorder: !0,
						disabled: c < 0 || c >= pc.d,
						onClick: s
					}, O.fbt._("Save", null, {
						hk: "1qAtYt"
					})))))
				}
			}
			var tr = Object(o.b)(void 0, (e, t) => ({
					onUpdateChannelName: t => e(Object(rc.h)(t))
				}))(er),
				nr = n("./src/chat/actions/sendbird/sdk.ts"),
				ar = n("./src/chat/constants/toast.ts"),
				sr = n("./src/chat/icons/svgs/Refresh/index.tsx"),
				cr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAB/FJREFUWAnFWFtolUcQ/nMxprUp9MFGUZJgSaqlahSRNm2KTUoetD4oKppWxBJsfbAiRQhY0SL4EA2WoJRCrVYMwVta8IJVo9LEaC410ZpYxcQ7ao0arTEn57b9vjn//Oc/yUmiEu3A/Du7Ozvz7ezO7p4TY708ioGrONsd5SA4YNf/94KAopECjtYnbb0N7HXAc3TEYgyjRfocnAVuB5eCm8DuflRfDtFpvM0ahPJVq1aZU6dOmd27dxv0EXQOmNRvJENqA/ON5uyjefPmGa/X6zPGeMGdx48fJ8hjtktOKCpxlgNJjBY3/kjwDPCElJSUtGvXrmUmJSVZgwYNigkEAvFxcXGxw4YNQ7f1Oj8ggn3hpJErgKc2cAP4GMD8lJGR8Q3khydPnkTwjCcYDHauWbOGoIrApIEOVMiq66tLlIS2J+B8V5+KX0EwJSUlZtmyZQTXvGTJEo2gjlfdAS81etz018GaGIMgK1sjRozIRf17cOHixYvfQEl64eDohCBIheBqkUJtCpRN0YBEa7OHh4p+FSK0Iyscy70Tt3r1atnk2PjpiJIC9KGP7apHmZHmGDLB6/kI8fmIRpTVAp24I6Ptr0GoAm8Bp4PTADwRpZsUmLutTzmaIw4gCJL7rmQbo6CzzoD8AZg3w4TMzMyMoUOHJg0ePNh68uSJ1dra2nHlypV/0Mds/tXmDpQkAqUt+neXbn/o6kkcoOCkF8dC921AQL/Pnj07UFpaas6ePWtu375tHj16ZDo6OoIAF3z8+LG5f/++AUBz4sQJU1xcbIYPH34d43jcJIjh6B/66i1o4U2cmJiYDcXN4Dow78tqROZHlL8tXbrUNDU1ma6uLp5pejP4IQfYYFMQJetsp46vvb3d7Nu3z6Smpv4NO19Onz49D+V34B3gkvHjx3+IUqkHSHeUNkHLbN261TQ2NhrcAmblypVcBokGDln4k+sqiFvBKLO9O7v7MIZgvQ8fPjTr168Xe7yTKysrzYYNG6QOH8WKEKUDkoJWSvPz883NmzfFGI1WVFT4586d67tx4wbvUEZDgNlAUX06UrDQlqiWl5f7161bpza7sCp+XIsE+q0NkvtUSIVlWVlZ5sGDB1w7CZP96pD9RBh+v1+iRPl5iUB1cvv37zdbtmxRU/6GhgYC9EydOjXVxhZa2cLCQp7qbTU1NVSWvXThwgUJ+71798QAwQ0UESCBkg4ePGjOnDmjpn32mfq1DVAvAOvTmTNncuM7KLZt22ZOnz4tA93gNAJuJ2q9r1KX2D1e9flG7OzsZNV39OhRBoZ5QIrX5R0+adIkKyEhgUpWTEyMhWPEQjZbrONFIiVHxMaG84l6qs++vsg9jnocp2MnTpxo+Xy8eCyLzzKQlx9QjAL8FxGRBjrFOWbxwFVSQ6xfvHjRqqqqkq7s7GwrPZ2XRv907tw5C49UC+ehlZeXJ0AUJN6JfCvSSMzVq1dZVvIDYjSF3p02bVoAhyzGmOChQ4cMD1uphI4VkcvKymRfzpkzx+Tm5orMJemuJw346D7bs2eP6HJ/paWlmfnz5zuJogkDXT8mbsaNG8ezV0lOFz1iqplF2IdenoHqVJ3U1dWJE5ZKBw4cMJi57h/HqY5liaUzGzduNIiMDKM9HmWHDx+WOvtJSEY/UNHHZzY6J0F0mXNmzJghaY8ZS4rRmM5w4cKFZvPmzWJM21jBmSkgpCPKRyfILk02XoNuwOgK3L1714wcOfJ+cnLymzbA8GZHg9y/o0aN+gKy2bFjB+3JgUyBhL0XESmCdAMNaUX/Uk+Buse42v28z+G7xgbHQlZWUfIVEd/a2vozyl8wGyr4mTBKTAbNarZrH5yoSp+l6rPENJwMtgfxgqB4kx/sVeIi4PADAbKiaaytrbUwYwFBY6QoRqWfx0dfINnnnhBtda/TPILDrr/4sQFSjCBZ5rFjx36CVg5w9mH0hQtnqfZzGbsz+5gIiJCqOSWXGIQiGMQPKEbiPRuRYIlAh4pEcOfOna9AvmJnsl/3jmM1ZFGqe/fuNUwePr9sZ241kW/dumWYfBUVFVJ369m2vZcvXya4P1yAdDWdZdU+ZrQ/Pj5+OTKuCBvXi6xKgCG5TVQJnmSZ+HKurq628KiwhgwZYuFNx19uIrOPh25zc7PcSpMnT9bhUto2CMysWLEidu3atR9DPg5m9Hp9WQtyDGb55/LlyzlrDz96RFCORoxUfX294SHPBwAP3ZaWlv6y12PfvfwpSoq6tKGu8FeUFi1alIKmu0VFRXRCkM4DVQFyuaJtAe3X0q1jy9x8Hvt5dTTsuseKuroiRTm8FyxY8BaaWwoKCpg0NOo8WOnIvZ8ULNvdzHbts/VpI3DkyBHZd1OmTNFffnrkRSLpoyYgN23axJ+T/H1itm/fbtra2giUL2E+zeAzFEUF1b1OHZsJzMebB3uO4Da6fD/V0rr0HdEZOHr0aP6aO4iflvJ7hfvL45HtyeNInPdSBvgD69KlS/K/DGzUg3McD5Fnsas5JDrp3KMn3MDQU08z633IvNBzZ82alZ6TkxM3ZswYC/8qSPbiTSlvO2bxnTt3rPPnz1tYzq5du3bVYswP4DIwiZPnNcRo9kpPA1AHRxhEtGJxI7yNznfAb4GTwa+C+SrxgB+D74GvgvnTVa4KlCQ5zkLiwH8JVPbnM5pmMDjuWYLybMrdANGRLj9lg4x0VPB6ViBcQi4l+ZnpP8ZJaQD2wM13AAAAAElFTkSuQmCC",
				rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAACPtJREFUWAm9WHtQVscVX+DjIVAzRqStVAnUCc7UBx2jKEarFeNYJrHVxvQPtSPTaDL1UbWVf4IZJ6Rm1DQdH4Dji1oZJ1BHJiMyU3V8iw98piWjOID4accCWhEEvtf299vvnpvL55c0NDFn5tzdPXvuOb89u3t2741S3xxFwpQOMedCO8Li0L4Q1fDNqPDi/0tKABPAueDvgJvAATDlZIJl+1snGeS7hYWFurm5WR8/fpyADoAnDBw48Kcon7dQMZrfKnFaSemLFy/2eb1eDfKA/Xv37iVIz7Bhw5pRPgS/Ayb1CaQ4CL7a96e8nzJy5Mgol8tFcJR509LSaK3q1q1bQ1G+Al4J/i1YphvVZ08SjWi4ulpbW6v9fr9ub2/Xq1atIpA8B4SFqLsdbXnXIXo2VYni92D+L7Nnz67PzMysQ/0PlrsEq5yKsgecbLXlPav5bAunM0bT2RbPFajclQbKrxRBbv2vQ3QiTGDc0d2WwYyoqKiXMeU/QjsX/KJVspt6flaeBREQB/aFg0tISFiHfq7BO+A94DXg4WBSuOgGe/r4lMiwJAmwYAvP8vJyRuIF8I/BWeAM8K8TExP1uHHjlqAeSn0GJ86dhiijY59DSBkjIpSDyq/Ak5DnhmRkZPSLiYlRHo9H1dfXq5s3b/LEYOSqwWfBbjCJdmmHLL6lDdH/pl4jnD9/PnegMTRmzJh41N8AX1i3bp0+c+aMOTUePnyonzx5oru6ukz54MED3dTUFGDK2b59u54+ffp/8A43SDb4i4jLpZfvcIocndq2bRsX++/B58HNo0aNuobyOOtlZWWaAHhSgJmUfVY9gNLJaGoeKz4CJ9gFCxYwUh/NnDlzUF5eHs/q1NGjR6dAx7mWDQb0PUUGfVpa2nfRc3nLli26rq5Ot7S0mIS7cOFCfffuXTolIG8AxIRMRvUpdvZB3wyGx+ChQ4cIksfeHZw8T1C2g2+ANyKxJ6EkOQEbgawFNs6eOnWKQLoI5NixYz6ANaAsR+zrE3EAPh9NmAh7b9y4YdYcwfLEuXbtml67di1l/544ceJLBlEISEE8d+PGjTTUw8fly5fNGmKdREO7S0t1SXGxbmxsNDI6D0fhouoA6r99+7YfuzzgdrsZXaLvqqysJMhHOIlSLZD2dAvATQQB8j5+/FgfOXKEde3H6N/98E9m1HhRl1X8TePaYvr68pDBWNHUV69e1XPnzpXo0lQ31j/9/N0CaM+sAPywoaGBit5Hjx7p7u5u1vWf8VIBgLXMytRtLytd9MbPdSumhiROTcN6EEBra6tua2vTbbBD7sRGcZKAPHDggL548aJ0BZARfKmpqQQ5zQJpsHHXkt68dOkSlb1c5CT3/fv6nQFK658laT0jTutf/FDXAGz1yZOmX/TYELAE99prs7RK7K/fnjRBr/pJtn4le4KutmaEeqLLINTU1Dhtebdu3UqA7xtESkVz98qZ+MmJEyfaOjo6XPRHhY6ubpXCPRfTX3l8OGIjY+2Dlv1OioiIwEi0wg1a5b7+utrV0a6K4j9VfwycVWUdNaokJ0fVNzQq0aNubGysGjt2rNOMQgTZlhu4uVwSDEN5f+XKlQeLiooUDnkDMD1lsGpc9Ka6U9mgYp4fodpq61T5iylqzIgRNGKcmUrIw9fToyZRlvADFRkXp5KGj1K/Q/OzxkZbk0CFsKRUZGQwT/fgXVCL1RcRmr1PiiKmQUW7XOrtgjXqg1mvqo8q/qHyM3LUW5WH1aABAxT7nU5okFEhJSUPUvdZiU1Urujn0BFQhDZk8Pcp7UW0cf78eYU8SXnEuXPnWPKQIAUNoiIbJWfDhg3wY5KrScZsdOAo+6yxyZRsyxpi3UmyJpvdbp0J43Cl3SOU3oVyzXvv2aryvujv27ePOdHbgE0KLLeQfwVPhFQEaSfDDWJkNaPJSCX066eGv5BKuWlLlI3A8aAcKNSQlBT117o6tau8QrW3tqiX8ser/DmzjSb7QyMfHR0dQOJ2VVfzbqHyp06dyosKsdkXFpnq1Dlz5nRiHXC0fhkpS45W2uwMJfYLO/UwDbaqU06hFcHAzp07GSDyW2CS4Am28Px8xeK2cu/ePb5vpxs2BKQADQeGekLMdQJI3pG+kNKzevVqgiu00Mis2uCkIh0reOyAPGJYHIUYtpsEw3zG0wf3QVv+Ze9JHy4knEYdFxc3xQIiOEzTGUqTWiDdWVhY+K/Ozs5orCk/1wsZJ4PC4lWlpaWquLhY7dmzR+G4MmsOacno4K+CKigoUMuWLTP6fA9oLb+9C0seuHDhAs/c1hUrVnxqaUhe7v2C1RL0vykpKWEkvACqef3Kzc01lwekAXOOHjx4UCcnJ+vly5ebyyqVhfApoK1bkawz6TKlRA93xZ5p06ZxBFst//YFISw6CLkWZT1WVVRU6Hnz5nkJkBeIUOJNeujQoXr37t2my/r1YasJEFuACmVcOiAf34O/9iVLlgy2ADln1BI9XUgUs9DFaNnbUDYGSwGDJKsnT55s30ocAAjCJsrlkgChl+uV9sePHx/MP5/n4qcROSQSPYqqeKsGwW5wR9IJ2RKakjpZWVnaSk12PztF34oYRUxdPfv37zfg0tPT8yzfEhQHlPBVUfzl+vXradBH4+KIAhCaBiWRBjZt2qQxRabDGWEHKOrxAum5fv26XrRoEcHdw6Cm9xUc9WUNfCxXL2sqjROsOa/cE4nx6NGj3Pk+7F4CcDI/qNj28/p1+vRpjV1KYA/A72NQ/VGSJCDBVpinU4HTK6kmAxGgug+/1Fhyd7mqqqoU/vup7OxsP/Jd5I4dOyLwQRXFFITdblINloPiccmUc+XKFYVPz25cRPll+PHSpUv3bt68uYVpiPbA9lFGQThyrjn2EwiRfTBjxox8TJ2Kj483H+OHDx8+hbVThr5acCfYNWXKlCT8TU1FndcU/t3i5yQjxa81N5hfbP8EN4GFCIyBkGCIPGwZCpBtOiC9CuY64c+gT8CnwV+H+gRMHIUCpNwJUvR4IuBgMLef0JFTP9w7IqM+By0Dt21+lQqNhCPKJauzTidfegSFM/JNyP4LuTh8ZaAXiQ4AAAAASUVORK5CYII=",
				or = n("./src/chat/components/ToastNotification/index.m.less"),
				ir = n.n(or);
			const lr = [ar.a.ConnectionClosed, ar.a.ConnectionPending],
				dr = e => lr.includes(e),
				ur = i.a.wrapped(e => r.a.createElement("span", {
					className: Object(Oe.a)(e.className, {
						[ir.a.pending]: dr(e.toast)
					}),
					style: {
						height: e.toast ? "2.5em" : "0"
					}
				}, e.children), "Wrapper", ir.a),
				hr = i.a.span("Text", ir.a),
				mr = i.a.img("SnooImg", ir.a);
			mr.displayName = "SnooImg";
			const br = i.a.button("Button", ir.a);
			br.displayName = "Button";
			const pr = i.a.wrapped(sr.a, "RefreshIcon", ir.a),
				gr = Object(F.a)({
					toast: e => e.toast
				}),
				fr = Object(o.b)(gr),
				Or = r.a.createElement(mr, {
					src: cr
				}),
				jr = r.a.createElement(mr, {
					src: rr
				}),
				Cr = e => {
					let {
						className: t,
						toast: n
					} = e;
					return r.a.createElement(ur, {
						toast: n,
						className: t
					}, n && (e => {
						switch (e) {
							case ar.a.ConnectionOpen:
								return Or;
							case ar.a.ConnectionPending:
							case ar.a.ConnectionClosed:
								return jr;
							default:
								return null
						}
					})(n), r.a.createElement(hr, null, n && (e => {
						switch (e) {
							case ar.a.ConnectionOpen:
								return O.fbt._("Found the internet!", null, {
									hk: "3jLr8W"
								});
							case ar.a.ConnectionPending:
								return O.fbt._("Looking for the internet...", null, {
									hk: "1JPRuh"
								});
							case ar.a.ConnectionClosed:
								return O.fbt._("Hmm, no internet?", null, {
									hk: "134peM"
								});
							default:
								return null
						}
					})(n)), n && (e => e === ar.a.ConnectionClosed ? r.a.createElement(br, {
						onClick: nr.g
					}, r.a.createElement(pr, null)) : null)(n))
				};
			Cr.displayName = "ToastNotification";
			var _r = fr(Cr),
				Er = n("./src/chat/components/OverlayNav/index.m.less"),
				vr = n.n(Er);
			const yr = i.a.wrapped(jn, "Group", vr.a),
				Ir = i.a.wrapped(_n, "Key", vr.a),
				xr = i.a.nav("Nav", vr.a),
				Sr = i.a.span("TitleWrapper", vr.a),
				kr = i.a.span("Title", vr.a);
			kr.displayName = "Title";
			const Nr = i.a.span("SubTitle", vr.a);
			Nr.displayName = "SubTitle";
			const wr = Object(F.a)({
				isEmbedded: Ac.d
			});
			class Tr extends c.Component {
				constructor() {
					super(...arguments), this.state = {
						isRenameGroupInputVisible: !1
					}, this.hideChannelNameInput = () => this.setState({
						isRenameGroupInputVisible: !1
					}), this.toggleChannelNameInput = () => this.setState(e => ({
						isRenameGroupInputVisible: !e.isRenameGroupInputVisible
					}))
				}
				componentWillReceiveProps(e) {
					this.props.channel && e.channel && this.props.channel.channelId !== e.channel.channelId && this.hideChannelNameInput()
				}
				render() {
					const {
						props: {
							channel: e,
							dropdownId: t,
							isEmbedded: n,
							minimize: a,
							showMenu: s,
							subTitle: c,
							title: o
						},
						state: {
							isRenameGroupInputVisible: i
						},
						hideChannelNameInput: l,
						toggleChannelNameInput: d
					} = this, u = e && !e.isPublic;
					return r.a.createElement(xr, null, r.a.createElement(Sr, {
						onClick: n ? Object(Gt.b)(a) : void 0
					}, r.a.createElement(kr, null, e && e.type === C.a.Subreddit ? u ? r.a.createElement(Ir, null) : r.a.createElement(yr, null) : null, o), r.a.createElement(Nr, null, c)), r.a.createElement(Bc, {
						toggleChannelNameInput: d,
						showMenu: !!s,
						dropdownId: t
					}), r.a.createElement(tr, {
						channelId: e && e.channelId,
						name: o,
						isVisible: i,
						hideChannelNameInput: l
					}), r.a.createElement(_r, null))
				}
			}
			var Mr = Object(o.b)(wr, e => ({
					minimize: () => {
						e(Object(sc.sizeChanged)(Ma.a.MINIMIZED)), e(Object(Ee.o)())
					}
				}))(Tr),
				Ar = n("./src/chat/constants/batchSizes.ts"),
				Dr = n("./src/chat/selectors/subreddit.ts"),
				Lr = n("./src/chat/components/MessageList/index.m.less"),
				Ur = n.n(Lr);
			const {
				fbt: Rr
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Pr = i.a.wrapped(oa, "MessageItemBubble", Ur.a), Br = i.a.wrapped(Ta, "Scroller", Ur.a), Hr = i.a.div("Container", Ur.a), Fr = i.a.div("ReverseCol", Ur.a), Kr = i.a.wrapped(ac, "MessageInput", Ur.a), zr = i.a.span("LoadingIndicator", Ur.a), Gr = i.a.span("LoadingError", Ur.a), Wr = Object(F.a)({
				currentUser: e => e.user.account,
				channelMessages: e => Object(I.y)(e),
				channelPendingMessages: e => Object(I.z)(e),
				fetchingMessages: e => Object(I.A)(e, "fetchingMessages"),
				fetchingMessagesError: e => Object(I.A)(e, "fetchingMessagesError"),
				hasMoreMessages: e => Object(I.A)(e, "hasMoreMessages"),
				isMessageListLoaded: e => Object(I.A)(e, "isMessageListLoaded"),
				subreddit: e => Object(Dr.b)(e),
				subredditName: e => Object(ft.e)(e),
				isModerator: e => Object(I.a)(e)
			}), Vr = Object(o.b)(Wr, e => ({
				getPreviousMessages: () => e(Object(g.q)()),
				removeAndResetMessages: t => e(Object(f.c)(t)),
				resetChannelMessageList: t => e(Object(p.N)(t))
			})), qr = 30, Jr = 2 * Ar.a.Messages;
			class Zr extends r.a.Component {
				constructor(e) {
					super(e), this.getOtherMemberName = () => {
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
							case C.a.Group:
							case C.a.Subreddit:
								return this.props.channel.name;
							default:
								return this.getOtherMemberName()
						}
					}, this.isSplitterDisplayed = (e, t, n) => {
						return new Date(e.createdAt).toDateString() !== new Date(this.getPreviousTime(t, n)).toDateString()
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
								} = e, l = i && i.userId, d = i && i.nickname, u = n.id === l, h = this.isSplitterDisplayed(e, t, s), m = this.getPreviousTime(t, s), p = this.getPreviousUserId(t, s) === l, g = c - m < 5 * b.bb, f = !(p && g), O = o.type === ve.b.EMBED, j = h && r.a.createElement(B, {
									date: c
								}), C = f && d && l && r.a.createElement(On, {
									createdAt: c,
									userId: l,
									nickname: d
								});
								return r.a.createElement(r.a.Fragment, {
									key: e.createdAt
								}, j, C, r.a.createElement(Pr, {
									message: e,
									fromCurrentUser: u,
									fromInvite: !1,
									subredditName: a,
									darkBackground: u,
									withButton: !0,
									embedText: O
								}))
							})
						}
					}, this.getPreviousTime = this.getPreviousTime.bind(this), this.getPreviousUserId = this.getPreviousUserId.bind(this), this.loadMoreRows = this.loadMoreRows.bind(this)
				}
				shouldComponentUpdate(e, t) {
					return !s()(this.props, e) || !s()(this.state, t)
				}
				componentWillReceiveProps(e) {
					this.resetMessageNumberOnChannelSwitch(e), this.removeResetTooOldMessages()
				}
				componentDidUpdate(e) {
					this.scrollDownOnChannelSwitch(e)
				}
				isChannelSwitched(e) {
					return this.props.channel.channelId !== e.channel.channelId
				}
				scrollDownOnChannelSwitch(e) {
					this.list && this.isChannelSwitched(e) && this.list.scrollToBottom()
				}
				resetMessageNumberOnChannelSwitch(e) {
					const {
						channelMessages: t,
						resetChannelMessageList: n
					} = this.props;
					if (t.length > qr && this.isChannelSwitched(e)) {
						const e = t.length - qr,
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
					const e = this.props.channelMessages.length > Jr,
						t = !(!this.list || !this.list.isScrolledToBottom());
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
					if (e > 0) return t[e - 1].createdAt
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
							fetchingMessagesError: t,
							getPreviousMessages: n,
							isMessageListLoaded: a,
							isModerator: s,
							hasMoreMessages: c,
							subreddit: o
						},
						loadMoreRows: i
					} = this, l = this.renderMessages(), d = this.getTitle(), u = !c && a && e.members;
					return r.a.createElement(Hr, null, r.a.createElement(Mr, {
						channel: e,
						showMenu: !0,
						subTitle: r.a.createElement(S, null),
						title: d
					}), r.a.createElement(Fr, null, r.a.createElement(Br, {
						autoScrollBottom: !0,
						loadMoreRows: i,
						innerRef: e => this.list = e
					}, t && r.a.createElement(Gr, {
						onClick: n
					}, Rr._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})), u ? r.a.createElement(pe, {
						users: e.members,
						channel: e,
						subreddit: o
					}) : t ? r.a.createElement(Gr, {
						onClick: n
					}, Rr._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})) : r.a.createElement(zr, null, Rr._("Loading history...", null, {
						hk: "4tLHUG"
					})), l)), r.a.createElement(Kr, {
						channelId: e.channelId,
						isLocked: e.isFrozen,
						isModerator: s,
						isMuted: e.isUserMuted,
						onSubmit: () => this.list && this.list.scrollToBottom()
					}))
				}
			}
			var Qr = Vr(Zr),
				Yr = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				Xr = n("./src/chat/controls/Overlay/index.m.less"),
				$r = n.n(Xr);
			const eo = i.a.div("Content", $r.a),
				to = i.a.wrapped(e => {
					const t = e.form ? "form" : "div",
						[n, a, s] = r.a.Children.toArray(e.children),
						c = {
							className: e.className,
							onSubmit: e.onSubmit
						},
						o = r.a.createElement(r.a.Fragment, null, n, e.innerContent ? a : r.a.createElement(eo, null, a), s);
					return r.a.createElement(t, c, o)
				}, "Overlay", $r.a);
			to.displayName = "Overlay";
			var no = to,
				ao = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				so = n.n(ao);
			const co = i.a.wrapped(ye.a, "Button", so.a),
				ro = Object(o.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(Gt.b)(() => e(Object(_e.a)()))
				})),
				oo = i.a.div("OverlayControlBar", so.a),
				io = ro(e => r.a.createElement(oo, {
					className: Object(Oe.a)({
						[so.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? r.a.createElement(co, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, O.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : r.a.createElement(co, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || O.fbt._("Cancel", null, {
					hk: "370pdF"
				}))), !e.secondaryButtonOnly && r.a.createElement(co, {
					type: "submit",
					primary: !0,
					onClick: e.primaryButtonAction || e.onSubmit,
					disabled: e.primaryButtonDisabled
				}, e.primaryButtonText || O.fbt._("Submit", null, {
					hk: "2Iwjdv"
				}))));
			io.displayName = "OverlayControlBar";
			var lo = io,
				uo = n("./src/chat/controls/OverlayHeader/index.m.less"),
				ho = n.n(uo);
			const mo = i.a.header("Header", ho.a),
				bo = i.a.h1("Title", ho.a),
				po = i.a.span("Normal", ho.a),
				go = i.a.span("Warning", ho.a);
			var fo = e => {
					let {
						message: t,
						title: n,
						warning: a
					} = e;
					const s = a ? go : po;
					return r.a.createElement(mo, null, r.a.createElement(bo, null, n), r.a.createElement(s, null, t), r.a.createElement(_r, null))
				},
				Oo = n("./src/chat/components/OverlayChatMembers/index.m.less"),
				jo = n.n(Oo);
			const Co = i.a.wrapped(Ta, "Scroller", jo.a),
				_o = i.a.div("LoadingIndicator", jo.a),
				Eo = Object(F.a)({
					channelType: e => Object(I.A)(e, "type"),
					currentChannel: I.k,
					memberCount: e => Object(I.A)(e, "memberCount"),
					subredditChannelMembers: is.f,
					fetchingMembers: is.a,
					hasMoreMembers: is.d
				});
			var vo = Object(o.b)(Eo, e => ({
					fetchSubredditChannelUsers: () => e(Object(ss.e)())
				}))((function(e) {
					const {
						channelId: t,
						channelType: n,
						currentChannel: a,
						memberCount: s,
						subredditChannelMembers: c,
						fetchSubredditChannelUsers: o,
						fetchingMembers: i,
						hasMoreMembers: l
					} = e;
					if (a) {
						const {
							channelState: e
						} = a, d = e === pc.b.INVITED, u = e === pc.b.JOINED, h = a.type === C.a.Subreddit ? c || [] : a.members, m = () => {
							!i && l && o()
						}, b = "boolean" == typeof i ? () => i : void 0;
						return n !== C.a.Subreddit || i || c || o(), r.a.createElement(no, {
							form: !0,
							innerContent: !0
						}, r.a.createElement(fo, {
							title: O.fbt._({
								"*": "{number of members} group members",
								_1: "1 group member"
							}, [O.fbt._plural(s, "number of members")], {
								hk: "4phXDa"
							})
						}), r.a.createElement(Co, {
							loadMoreRows: m,
							isLoadMoreRowsComplete: b,
							threshold: 0
						}, r.a.createElement(Cs, {
							channelId: t,
							members: h,
							useNSFWIcons: d || u
						}), i && r.a.createElement(_o, {
							role: "progressbar"
						}, O.fbt._("Loading members...", null, {
							hk: "2sCDrM"
						}))), r.a.createElement(lo, {
							secondaryButtonOnly: !0,
							secondaryButtonText: O.fbt._("Done", null, {
								hk: "2xerWP"
							})
						}))
					}
					return null
				})),
				yo = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/lodash/uniqBy.js")),
				Io = n.n(yo),
				xo = n("./src/chat/actions/sendbird/index.ts"),
				So = n("./src/chat/actions/user.ts"),
				ko = n("./node_modules/lodash/last.js"),
				No = n.n(ko),
				wo = n("./src/chat/components/SearchBar/index.m.less"),
				To = n.n(wo);
			const Mo = i.a.span("Bubble", To.a),
				Ao = i.a.span("SearchBarLabel", To.a),
				Do = i.a.span("SearchBarField", To.a),
				Lo = i.a.input("SearchBarInput", To.a),
				Uo = i.a.wrapped(Ta, "SearchBarWrapper", To.a);
			class Ro extends r.a.Component {
				constructor(e) {
					super(e), this.bubbleRefs = {}, this.searchBarInputRef = {}, this.timeoutToken = null, this.onBubbleKey = e => t => {
						switch (t.key) {
							case Ls:
							case Ns:
								return Object(ia.findDOMNode)(this.searchBarInputRef).focus(), this.props.onUnselect(e.id);
							case Ts: {
								const e = t.target;
								if (e.previousElementSibling) {
									e.previousElementSibling.focus()
								}
								break
							}
							case As: {
								const e = t.target;
								if (e.nextElementSibling) {
									e.nextElementSibling.focus()
								}
							}
						}
					}, this.onBubbleKey = this.onBubbleKey.bind(this), this.onFilterChange = this.onFilterChange.bind(this), this.stopEnter = this.stopEnter.bind(this), this.searchKeyHandler = this.searchKeyHandler.bind(this)
				}
				stopEnter(e) {
					e.key === ws && e.preventDefault()
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
						case ws:
							return n((() => s.id)());
						case Ts:
						case Ls:
						case Ns:
							if (0 === c().length) {
								const e = No()(this.props.selectedContacts);
								e && e.name && Object(ia.findDOMNode)(this.bubbleRefs[e.name]).focus()
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
					return r.a.createElement(Uo, {
						autoScrollBottom: !0
					}, r.a.createElement(Ao, null, O.fbt._("To:", null, {
						hk: "2eyFcf"
					})), r.a.createElement(Do, null, a && a.length > 0 && a.map((e, t) => r.a.createElement(Mo, {
						key: "selected-contact-".concat(t),
						tabIndex: 0,
						onKeyDown: Object(Gt.a)(this.onBubbleKey(e)),
						ref: t => {
							this.bubbleRefs[e.name] = t
						}
					}, e.name)), r.a.createElement(Lo, {
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
			Ro.defaultProps = {
				onIdentifyContactTimeout: 1e3
			};
			var Po = n("./src/chat/controls/Checkbox/index.tsx"),
				Bo = n("./src/chat/components/SelectableUser/index.m.less"),
				Ho = n.n(Bo);
			const Fo = i.a.wrapped(Po.a, "Checkbox", Ho.a),
				Ko = i.a.wrapped(se, "UserPic", Ho.a),
				zo = i.a.span("Name", Ho.a);
			class Go extends c.Component {
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
					return r.a.createElement(Fo, {
						type: "checkbox",
						name: n,
						value: t,
						onChange: s,
						checked: a(e),
						id: e
					}, r.a.createElement(Ko, {
						userId: e
					}), r.a.createElement(zo, null, t))
				}
			}
			var Wo = n("./src/chat/components/UnselectableUser/index.m.less"),
				Vo = n.n(Wo);
			const qo = i.a.span("Wrapper", Vo.a),
				Jo = i.a.span("Content", Vo.a),
				Zo = i.a.wrapped(se, "UserPic", Vo.a),
				Qo = i.a.span("Name", Vo.a),
				Yo = i.a.span("Context", Vo.a);
			class Xo extends c.Component {
				render() {
					const {
						contact: {
							id: e,
							name: t
						},
						context: n
					} = this.props;
					return r.a.createElement(qo, null, r.a.createElement(Jo, null, r.a.createElement(Zo, {
						userId: e
					}), r.a.createElement(Qo, null, t)), r.a.createElement(Yo, null, n))
				}
			}
			var $o = n("./src/chat/selectors/contacts.ts"),
				ei = n("./src/chat/components/OverlayCreateChannel/index.m.less"),
				ti = n.n(ei);
			const ni = "contactForm",
				ai = i.a.div("Content", ti.a),
				si = i.a.wrapped(Po.a, "Checkbox", ti.a),
				ci = i.a.wrapped(Ta, "Scroller", ti.a),
				ri = i.a.div("ListItem", ti.a),
				oi = i.a.div("ListItemHeader", ti.a),
				ii = i.a.h4("ChatListHeader", ti.a),
				li = i.a.span("Name", ti.a),
				di = i.a.span("Error", ti.a),
				ui = i.a.wrapped(Wc, "ChannelNameInput", ti.a),
				hi = i.a.div("OverlayContent", ti.a),
				mi = i.a.wrapped(e => r.a.createElement("div", {
					className: Object(Oe.a)(e.className, {
						[ti.a.shown]: e.isShown
					})
				}, e.children), "ChannelNameWrapper", ti.a);
			mi.displayName = "ChannelNameWrapper";
			const bi = e => e.toLocaleLowerCase(),
				pi = Object(F.a)({
					channelAction: e => Object(ft.c)(e),
					channel: e => Object(I.k)(e),
					contacts: $o.i,
					isCreatingChannel: I.I,
					loadedContacts: $o.j,
					knownContacts: $o.h,
					memberCount: e => Object(I.A)(e, "memberCount"),
					existingGroupUsers: e => {
						const t = Object(I.A)(e, "members");
						return t && t.map(e => e.id)
					},
					selectedUsers: $o.k,
					selectedUsersCount: $o.l
				}),
				gi = Object(o.b)(pi, e => ({
					onCreateNewChannel: (t, n) => e(Object(p.C)(t, n)),
					onInviteUsersToExistingChannel: t => e(Object(p.I)(t)),
					onIdentifyContact: t => e(Object(xo.k)({
						username: t
					})),
					onCancelAndGoBack: () => {
						e(Object(_e.a)()), e(Object(Ee.d)())
					},
					onSelectUser: t => e(Object(So.m)(t)),
					onUnselectUser: t => e(Object(So.t)(t)),
					removeAllSelectedUsers: () => e(Object(So.s)()),
					requestSuggestedContacts: () => e(Object(xo.n)())
				}));
			class fi extends r.a.Component {
				constructor(e) {
					super(e), this.searchBarElement = null, this.isUserSelected = e => this.props.selectedUsers.includes(e), this.isCreateChannelURLAction = () => this.props.channelAction === pc.a.CREATE, this.isInviteMembersURLAction = () => this.props.channelAction === pc.a.INVITE_MEMBERS, this.isSubredditChannel = () => !(!this.props.channel || this.props.channel.type !== C.a.Subreddit), this.isExistingGroupUser = e => !(!(this.isInviteMembersURLAction() && this.props.existingGroupUsers && this.props.existingGroupUsers.includes(e)) || this.isUserSelected(e)), this.hasTooManyMembers = () => {
						const {
							isCreatingChannel: e,
							memberCount: t,
							selectedUsersCount: n
						} = this.props;
						if (e) return n > pc.e;
						return (n || 0) + (t || 0) > pc.e
					}, this.isSubmitDisabled = e => {
						const {
							isCreatingChannel: t,
							selectedUsersCount: n
						} = this.props, a = this.isCreateChannelURLAction(), s = e < 0 || e === pc.d, c = n > 1, r = this.hasTooManyMembers();
						return !this.isSubredditChannel() && (!n || t || a && c && (s || r) || !a && r)
					}, this.getInviteMembersText = () => this.isSubredditChannel() ? O.fbt._("Add to room", null, {
						hk: "2SDTyo"
					}) : O.fbt._("Add to group", null, {
						hk: "4n0y9e"
					}), this.primaryButtonText = () => this.isInviteMembersURLAction() ? this.getInviteMembersText() : O.fbt._("Start a chat", null, {
						hk: "4BZNdM"
					}), this.getBlockedContactText = e => e ? O.fbt._("blocked", null, {
						hk: "3BVDae"
					}) : this.isSubredditChannel() ? O.fbt._("already in room", null, {
						hk: "108K9z"
					}) : O.fbt._("already in group", null, {
						hk: "1z5QI7"
					}), this.getOverlayTitle = () => this.isCreateChannelURLAction() ? O.fbt._("Create Group", null, {
						hk: "1SQOf3"
					}) : this.getInviteMembersText(), this.getOverlayMessage = () => {
						const {
							memberCount: e,
							selectedUsersCount: t
						} = this.props, n = t + (this.isCreateChannelURLAction() ? 1 : e), a = (pc.e - n).toString();
						return t === pc.e ? this.isSubredditChannel() ? O.fbt._("You can add {remaining count} more Redditors", [O.fbt._param("remaining count", a)], {
							hk: "4qe3Ep"
						}) : O.fbt._("Maximum group size reached", null, {
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
					s.includes(t) ? a(t) : (c < pc.e || c < 1) && (this.setState(e => Object.assign({}, e, {
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
						for (const a in e) bi(e[a].id) === t && n.push(e[a])
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
					return t ? e.filter(e => bi(e.name).includes(bi(t)) && !e.isBlocked) : e
				}
				getLoadedContact() {
					return this.props.loadedContacts.find(e => e && bi(e.name) === bi(this.state.filter))
				}
				getIsValidUser(e) {
					const t = this.props.knownContacts[bi(e)];
					return !t || !t.loaded || t.valid
				}
				availableCharacters(e) {
					return pc.d - e.length
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
					} = this, b = this.getSelectedContacts(), p = this.getFilteredContacts(), g = this.getLoadedContact(), f = !!a && !g, j = !!g, C = !this.getIsValidUser(a), _ = this.handleChannelNameInput, E = this.availableCharacters(c), v = this.isSubmitDisabled(E), y = this.primaryButtonText(), I = this.isCreateChannelURLAction(), x = n >= pc.e && !this.isSubredditChannel();
					return r.a.createElement(no, {
						className: e,
						onSubmit: Object(Gt.a)(h),
						innerContent: !0,
						form: !0
					}, r.a.createElement(hi, null, r.a.createElement(fo, {
						message: this.getOverlayMessage(),
						title: this.getOverlayTitle(),
						warning: x
					}), r.a.createElement(ai, null, I && r.a.createElement(mi, {
						isShown: n > 1
					}, r.a.createElement(ui, {
						handleChannelNameInput: _,
						placeholder: O.fbt._("Group name (required)", null, {
							hk: "49Py5W"
						})
					}, r.a.createElement(Vc.a, {
						count: E
					}))), r.a.createElement(Ro, {
						innerRef: e => this.searchBarElement = e,
						filter: a,
						resetFilter: s,
						selectedContacts: b,
						onFilterReset: l,
						onFilterContacts: d,
						onIdentifyContact: t,
						onUnselect: this.props.onUnselectUser
					}), r.a.createElement(ci, {
						loadMoreRows: bt.a,
						threshold: 0
					}, Io()(p, e => e.name).map(e => r.a.createElement(ri, {
						key: e.name
					}, i(e.id) || e.isBlocked ? r.a.createElement(Xo, {
						contact: e,
						context: this.getBlockedContactText(!!e.isBlocked)
					}) : r.a.createElement(Go, {
						formName: ni,
						contact: e,
						onChange: u,
						isChecked: o
					}))), (f || j) && r.a.createElement(oi, null, r.a.createElement(ii, null, O.fbt._("Click to add", null, {
						hk: "4khdH7"
					}))), f && !j && r.a.createElement(ri, null, r.a.createElement(si, {
						type: "checkbox",
						disabled: !0,
						name: ni,
						value: a,
						onChange: u
					}, r.a.createElement(li, null, a, C && r.a.createElement(di, null, O.fbt._("User doesn't exist", null, {
						hk: "2nKv7P"
					}))))), j && g && r.a.createElement(ri, null, I || !i(g.id) && !g.isBlocked ? r.a.createElement(Go, {
						formName: ni,
						contact: g,
						onChange: u,
						isChecked: o
					}) : r.a.createElement(Xo, {
						contact: g,
						context: this.getBlockedContactText(!!g.isBlocked)
					})))), r.a.createElement(lo, {
						primaryButtonText: y,
						primaryButtonDisabled: v,
						secondaryButtonAction: m
					})))
				}
			}
			fi.displayName = "OverlayCreateChannel";
			var Oi = gi(fi),
				ji = n("./src/chat/actions/sidebar.ts"),
				Ci = n("./src/chat/components/FirstTimeUserExpPromo/index.m.less"),
				_i = n.n(Ci);
			const Ei = i.a.div("Wrapper", _i.a),
				vi = i.a.span("Header", _i.a),
				yi = i.a.span("LabelText", _i.a),
				Ii = i.a.h5("TitleText", _i.a),
				xi = i.a.p("BodyText", _i.a),
				Si = i.a.wrapped(e => r.a.createElement(K.a, {
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
				})), "ChatBubbleIcon", _i.a),
				ki = i.a.wrapped(ye.a, "Button", _i.a),
				Ni = Object(o.b)(void 0, e => ({
					setSeenSubredditChatFtuxAction: () => e(Object(l.f)()),
					viewSubredditChatFtuxPromoTracking: () => e(Object(Ee.D)()),
					dismissSubredditChatFtuxPromoTracking: () => e(Object(Ee.r)())
				}));
			class wi extends c.Component {
				componentDidMount() {
					this.props.viewSubredditChatFtuxPromoTracking()
				}
				closePromo() {
					this.props.setSeenSubredditChatFtuxAction(), this.props.dismissSubredditChatFtuxPromoTracking()
				}
				render() {
					return r.a.createElement(Ei, {
						className: this.props.className
					}, r.a.createElement(vi, null, r.a.createElement("span", null, r.a.createElement(yi, null, O.fbt._("New Feature", null, {
						hk: "1LvO55"
					})), r.a.createElement(Ii, null, O.fbt._("Community Chat Rooms", null, {
						hk: "3No0ew"
					}))), r.a.createElement(Si, null)), r.a.createElement(xi, null, O.fbt._("Some subreddits now have chat rooms. You've got early access - find topics you're interested in and join the conversation!", null, {
						hk: "1WTJoU"
					})), r.a.createElement(ki, {
						primary: !0,
						onClick: () => this.closePromo()
					}, O.fbt._("Got it", null, {
						hk: "3WYsfV"
					})))
				}
			}
			wi.displayName = "FirstTimeUserExpPromo";
			var Ti = Ni(wi),
				Mi = n("./src/chat/icons/svgs/ChatNew/index.tsx"),
				Ai = n("./src/chat/components/Sidebar/CreateChannel/index.m.less"),
				Di = n.n(Ai);
			const Li = i.a.wrapped(Mi.a, "ChatNew", Di.a),
				Ui = i.a.span("Button", Di.a),
				Ri = i.a.span("Text", Di.a);
			var Pi = Object(o.b)(null, e => ({
					createChannel: () => {
						e(Object(_e.b)(Object(Ie.channelUrl)("create"))), e(Object(Ee.g)())
					}
				}))(e => r.a.createElement(Ui, {
					onClick: e.createChannel,
					title: O.fbt._("Start a new chat", null, {
						hk: "3C4ek3"
					}),
					tabIndex: 0
				}, r.a.createElement(Li, null), r.a.createElement(Ri, null, O.fbt._("Start a chat", null, {
					hk: "4w1obG"
				})))),
				Bi = n("./node_modules/lodash/values.js"),
				Hi = n.n(Bi),
				Fi = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				Ki = n("./src/chat/components/Message/Preview.m.less"),
				zi = n.n(Ki);
			const Gi = e => {
					if (e.isInvited) return [O.fbt._("Wants to message you", null, {
						hk: "3CbciS"
					})];
					if (!e.message) return [];
					const t = (e => {
						let {
							currentUserId: t,
							isGroup: n,
							message: a
						} = e;
						return n && a && a.sender ? t === a.sender.userId ? O.fbt._("You:", null, {
							hk: "wP43r"
						}) : "".concat(a.sender.nickname, ":") : ""
					})(e);
					switch (e.message.messageData.type) {
						case ve.b.TEXT: {
							const {
								value: n
							} = e.message.messageData;
							return [t, " ", Object(He.b)(n) ? O.fbt._("Shared a link", null, {
								hk: "4bNVW7"
							}) : n]
						}
						case ve.b.POST:
							return [t, " ", O.fbt._("Shared a post", null, {
								hk: "1hd8l1"
							}), " ", e.message.messageData.subreddit];
						case ve.b.EMBED:
							return [t, " ", O.fbt._("Shared a post", null, {
								hk: "1hd8l1"
							}), " ", e.message.messageData.value];
						case ve.b.SNOOMOJI:
							return [t, " ", O.fbt._("Sent a Snoomoji", null, {
								hk: "4hD30K"
							})];
						default:
							return []
					}
				},
				Wi = i.a.wrapped(e => r.a.createElement("sub", {
					className: Object(Oe.a)(e.className, {
						[zi.a.active]: e.isActive,
						[zi.a.unread]: e.isInvited || e.isUnread
					})
				}, Gi(e)), "MessagePreview", zi.a);
			var Vi = e => r.a.createElement(K.a, {
					className: e.className,
					disable: !0,
					viewBox: "0 0 9 12"
				}, r.a.createElement("g", {
					transform: "translate(-321.000000, -286.000000)"
				}, r.a.createElement("path", {
					d: "M328.379326,295.820899 L329.259195,297.344876 L329.259195,297.344876 C329.33686,297.479395 329.29077,297.651405 329.15625,297.72907 L329.15625,297.72907 C329.02173,297.806735 328.84972,297.760645 328.772055,297.626126 L322.303305,286.421922 L322.303305,286.421922 C322.22564,286.287402 322.27173,286.115392 322.40625,286.037727 L322.40625,286.037727 L322.40625,286.037727 C322.54077,285.960062 322.71278,286.006152 322.790445,286.140672 L323.811767,287.909655 C324.114951,287.754406 324.444225,287.640531 324.791552,287.575791 C324.78955,287.555022 324.784974,287.534806 324.784974,287.513206 C324.784974,287.131053 325.105006,286.820899 325.49997,286.820899 C325.894933,286.820899 326.214965,287.131053 326.214965,287.513206 C326.214965,287.534806 326.210389,287.555022 326.208387,287.575791 C327.841151,287.88013 329.074947,289.270283 329.074947,290.94013 L329.074947,293.333299 C329.074947,294.039453 329.364664,294.716806 329.880318,295.216099 L329.894618,295.229945 C330.119699,295.447883 329.960398,295.820899 329.641796,295.820899 L328.379326,295.820899 Z M326.996393,295.820899 L321.358143,295.820899 C321.039827,295.820899 320.88024,295.447883 321.105321,295.229945 L321.119621,295.216099 C321.635276,294.716806 321.924992,294.039453 321.924992,293.333299 L321.924992,290.94013 C321.924992,290.051737 322.274213,289.242509 322.846942,288.633839 L326.996393,295.820899 Z M325.78125,297.508399 C325.151952,297.508399 324.611984,297.045274 324.375,296.383399 L327.1875,296.383399 C326.950516,297.045274 326.410548,297.508399 325.78125,297.508399 Z"
				}))),
				qi = n("./src/chat/components/ChatListItem/index.m.less"),
				Ji = n.n(qi);

			function Zi() {
				return (Zi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Qi = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
				}
				return n
			};
			const Yi = i.a.wrapped(dn, "ChatIcon", Ji.a),
				Xi = i.a.div("ItemTitle", Ji.a),
				$i = i.a.div("ItemControls", Ji.a),
				el = i.a.span("ChannelName", Ji.a),
				tl = i.a.div("Description", Ji.a),
				nl = i.a.wrapped(mn, "TimeStamp", Ji.a),
				al = e => {
					var {
						className: t
					} = e, n = Qi(e, ["className"]);
					return r.a.createElement(nl, Zi({
						className: Object(Oe.a)(t, {
							[Ji.a.active]: n.active,
							[Ji.a.unread]: n.unread
						})
					}, n), n.children)
				},
				sl = i.a.wrapped(e => r.a.createElement("h4", {
					className: Object(Oe.a)(e.className, {
						[Ji.a.active]: e.active,
						[Ji.a.unread]: e.unread
					})
				}, e.children), "ItemTitleName", Ji.a),
				cl = Object(F.a)({
					inviterContact: (e, t) => {
						const n = e.channels.models[t.channelId];
						return Object($o.e)(e, n)
					}
				});
			var rl = Object(o.b)(cl)(i.a.wrapped(e => {
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
					} = e, g = o === pc.b.INVITED, f = g ? Object(Ie.channelAction)(n, pc.a.VIEW_INVITE) : Object(Ie.channelUrl)(n);
					return r.a.createElement(Fi.a, {
						to: f,
						className: Object(Oe.a)(t, {
							[Ji.a.selected]: c
						})
					}, h && r.a.createElement($i, null, r.a.createElement(Vi, null)), r.a.createElement(Yi, {
						userId: i,
						secondUserId: l
					}), r.a.createElement(Xi, null, r.a.createElement(sl, {
						unread: m || g,
						active: c
					}, r.a.createElement(el, null, d), p && r.a.createElement(al, {
						date: p,
						unread: m,
						active: c
					}, N(new Date(p)))), r.a.createElement(tl, null, r.a.createElement(Wi, {
						currentUserId: a,
						isGroup: s,
						isInvited: g,
						isUnread: m,
						isActive: c,
						message: u
					}), !!b && r.a.createElement(Vc.b, {
						count: b
					}))))
				}, "ChatListItem", Ji.a)),
				ol = n("./src/chat/components/Sidebar/SidebarDivider/index.m.less"),
				il = n.n(ol);
			const ll = i.a.div("Divider", il.a),
				dl = e => r.a.createElement(ll, null, e.children),
				ul = i.a.div("SubDivider", il.a),
				hl = e => r.a.createElement(ul, null, e.children);
			var ml = n("./src/chat/controls/InviteExpander/index.m.less"),
				bl = n.n(ml);
			const pl = i.a.div("ButtonContainer", bl.a),
				gl = i.a.wrapped(e => r.a.createElement("button", {
					onClick: e.onClick,
					className: Object(Oe.a)(e.className, {
						[bl.a.hidden]: e.hidden
					})
				}, e.children), "TextButton", bl.a),
				fl = i.a.div("LoadingIndicator", bl.a);
			class Ol extends r.a.Component {
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
					return t ? r.a.createElement(fl, {
						role: "progressbar"
					}, O.fbt._("Loading channels...", null, {
						hk: "4gUIDq"
					})) : r.a.createElement(pl, {
						className: e
					}, r.a.createElement(gl, {
						onClick: this.onExpand,
						hidden: n && !a
					}, O.fbt._("Show more", null, {
						hk: "3aeUi6"
					})), r.a.createElement(gl, {
						onClick: this.onCollapse,
						hidden: !n
					}, O.fbt._("Collapse", null, {
						hk: "aLyRg"
					})))
				}
			}
			var jl = Object(o.b)(null, e => ({
				onTrackExpandToggle: t => e(t ? Object(Ee.j)() : Object(Ee.e)()),
				expandInviteList: () => e(Object(p.E)()),
				collapseInviteList: () => e(Object(p.A)()),
				fetchInvitedChannels: () => e(Object(p.G)())
			}))(Ol);
			const Cl = (e, t) => t.type === C.a.Group ? t.name && "Group Channel" !== t.name ? t.name : t.members.map(e => e.name).join(", ") : e.firstUser.name,
				_l = (e, t) => {
					const n = t.channelState === pc.b.JOINED,
						a = t.channelState === pc.b.INVITED;
					let s, c, r;
					for (const o of t.members) o.id === e ? c = o : o.id === (t.inviter && t.inviter.id) ? r = o : (!s || s.name.toLocaleLowerCase() > o.name.toLocaleLowerCase()) && (s = o);
					return t.type === C.a.Direct ? {
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
				El = Object(F.a)({
					currentUserId: ls.a,
					invitedChannels: I.G,
					selectedChannelId: e => Object(I.A)(e, "channelId"),
					fetchingInvitedChannels: I.c,
					inviteListExpanded: I.F,
					hasMoreInvitedChannels: I.C
				});
			var vl = Object(o.b)(El)(e => {
					const {
						currentUserId: t,
						fetchingInvitedChannels: n,
						hasMoreInvitedChannels: a,
						invitedChannels: s,
						inviteListExpanded: c,
						selectedChannelId: o
					} = e;
					let i = s.slice(0, 2);
					return c && (i = s), s && s.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(dl, null, O.fbt._("Requests", null, {
						hk: "eDJtL"
					})), Hi()(i).map((e, n) => {
						const a = _l(t, e),
							{
								channelId: s,
								lastMessage: c,
								channelState: i,
								unreadMessageCount: l,
								unreadMentionCount: d
							} = e;
						return r.a.createElement(rl, {
							key: s,
							channelId: s,
							channelState: i,
							name: Cl(a, e),
							isSelected: s === o,
							isGroup: e.type === C.a.Group,
							message: c,
							updatedAt: c && c.createdAt,
							unread: !!l,
							mentionCount: d,
							currentUserId: t,
							userId: a && a.firstUser ? a && a.firstUser.id : "",
							secondUserId: a && a.secondUser ? a && a.secondUser.id : ""
						})
					}), s.length > 2 ? r.a.createElement(jl, {
						fetchingInvitedChannels: n,
						hasMoreInvitedChannels: a,
						inviteListExpanded: c
					}) : null) : null
				}),
				yl = n("./src/chat/components/BasicJoined/index.m.less"),
				Il = n.n(yl);
			const xl = i.a.div("LoadingIndicator", Il.a),
				Sl = i.a.p("Text", Il.a),
				kl = Object(F.a)({
					currentUserId: ls.a,
					fetchingJoinedChannels: I.e,
					hasMoreJoinedChannels: I.E,
					joinedChannels: I.P,
					selectedChannelId: e => Object(I.A)(e, "channelId")
				});
			var Nl = Object(o.b)(kl, e => ({
					fetchJoinedChannels: () => e(Object(p.H)())
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
					}, r.a.createElement(dl, null, O.fbt._("Chats", null, {
						hk: "Bzl0R"
					})), (!s || !s.length) && r.a.createElement(Sl, null, O.fbt._("All the direct chats that you're in will show up here", null, {
						hk: "4A1UXC"
					})), s.map((e, t) => {
						const a = _l(n, e),
							{
								channelId: s,
								lastMessage: o,
								channelState: i,
								unreadMessageCount: l,
								unreadMentionCount: d
							} = e;
						return r.a.createElement(rl, {
							key: s,
							channelId: s,
							channelState: i,
							name: Cl(a, e),
							isSelected: s === c,
							isGroup: e.type === C.a.Group,
							message: o,
							updatedAt: o && o.createdAt,
							unread: !!l,
							mentionCount: d,
							currentUserId: n,
							userId: a && a.firstUser ? a && a.firstUser.id : "",
							secondUserId: a && a.secondUser ? a && a.secondUser.id : ""
						})
					}), a && r.a.createElement(xl, {
						role: "progressbar"
					}, O.fbt._("Loading channels...", null, {
						hk: "4rLWwM"
					})))
				}),
				wl = n("./src/chat/components/Sidebar/DirectsPanel/index.m.less"),
				Tl = n.n(wl);
			const Ml = i.a.wrapped(Ta, "Scroller", Tl.a),
				Al = Object(F.a)({
					fetchingJoinedChannels: I.e,
					hasMoreJoinedChannels: I.E
				});
			var Dl = Object(o.b)(Al, e => ({
				fetchJoinedChannels: () => e(Object(p.H)())
			}))(e => {
				const {
					fetchingJoinedChannels: t,
					fetchJoinedChannels: n,
					hasMoreJoinedChannels: a
				} = e;
				return r.a.createElement(Ml, {
					loadMoreRows: () => {
						!t && a && n()
					},
					threshold: 0
				}, r.a.createElement(vl, null), r.a.createElement(Nl, null))
			});

			function Ll() {
				return (Ll = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ul = n("./src/chat/components/SubredditHeader/index.m.less"),
				Rl = n.n(Ul);
			const Pl = i.a.wrapped(jn, "Group", Rl.a),
				Bl = i.a.wrapped(_n, "Key", Rl.a),
				Hl = i.a.wrapped(e => r.a.createElement(K.a, Ll({}, e, {
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
				}))), "SubChat", Rl.a),
				Fl = i.a.span("TextOverflow", Rl.a),
				Kl = i.a.span("Icon", Rl.a),
				zl = i.a.wrapped(V, "NSFWIcon", Rl.a),
				Gl = i.a.img("SubredditHeaderIcon", Rl.a),
				Wl = i.a.div("SubredditHeaderTitle", Rl.a),
				Vl = i.a.wrapped(e => r.a.createElement("h3", {
					className: Object(Oe.a)(e.className, {
						[Rl.a.selected]: e.isSelected
					})
				}, e.children), "SubredditName", Rl.a),
				ql = i.a.wrapped(e => r.a.createElement("h4", {
					className: Object(Oe.a)(e.className, {
						[Rl.a.selected]: e.isSelected
					})
				}, e.children), "ChannelName", Rl.a);
			var Jl = i.a.wrapped(e => r.a.createElement("div", {
					className: e.className
				}, e.isNSFW ? r.a.createElement(zl, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(Gl, {
					alt: e.subredditName,
					src: e.subredditIconUrl && e.subredditIconUrl.length ? e.subredditIconUrl : "".concat(H.a.assetPath, "/img/chat/community-icon.png")
				}), r.a.createElement(Kl, null, r.a.createElement(Hl, null))), r.a.createElement(Wl, null, r.a.createElement(Vl, {
					isSelected: e.isSelected
				}, r.a.createElement(Fl, null, "r/".concat(e.subredditName))), r.a.createElement(ql, {
					isSelected: e.isSelected
				}, void 0 === e.isPublic || e.isPublic ? r.a.createElement(Pl, null) : r.a.createElement(Bl, null), r.a.createElement(Fl, null, e.channelName)))), "SubredditHeader", Rl.a),
				Zl = n("./src/chat/components/SubredditInvitedLink/index.m.less"),
				Ql = n.n(Zl);
			var Yl = i.a.wrapped(e => r.a.createElement(Fi.a, {
				className: Object(Oe.a)(e.className, {
					[Ql.a.selected]: e.isSelected
				}),
				to: Object(Ie.channelAction)(e.channel.channelId, pc.a.VIEW_INVITE, e.subreddit.name)
			}, r.a.createElement(Jl, {
				channelName: e.channel.name,
				subredditName: e.subreddit.name,
				subredditIconUrl: e.subreddit.iconImg,
				isSelected: e.isSelected,
				isPublic: e.channel.isPublic
			})), "SubredditInvitedLink", Ql.a);
			const Xl = Object(F.a)({
				fetchingInvitedSubredditChannels: I.d,
				hasMoreInvitedSubredditChannels: I.D,
				inviteListExpanded: I.F,
				subreddits: e => Object(Dr.d)(e),
				subredditChannels: e => Object(I.o)(e),
				selectedChannelId: e => Object(I.A)(e, "channelId")
			});
			class $l extends r.a.Component {
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
					return n && (i = a), a && a.length && i ? r.a.createElement(r.a.Fragment, null, r.a.createElement(dl, null, O.fbt._("Invites", null, {
						hk: "1T4f2K"
					})), i.map((e, t) => r.a.createElement(Yl, {
						key: "subreddit-invited-link-".concat(t),
						channel: e,
						isSelected: o === pc.a.VIEW_INVITE && e.channelId === s,
						subreddit: c[e.customData.subredditId]
					})), a.length > 2 && r.a.createElement(jl, {
						fetchingInvitedChannels: e,
						hasMoreInvitedChannels: t,
						inviteListExpanded: n
					})) : null
				}
			}
			var ed = Object(o.b)(Xl)($l),
				td = n("./src/chat/components/SubredditJoined/index.m.less"),
				nd = n.n(td);
			const ad = i.a.wrapped(jn, "Group", nd.a),
				sd = i.a.wrapped(_n, "Key", nd.a),
				cd = i.a.ul("Wrapper", nd.a),
				rd = i.a.ul("SubredditList", nd.a),
				od = i.a.h2("BlankStateText", nd.a),
				id = (i.a.span("SubredditName", nd.a), i.a.wrapped(e => r.a.createElement("li", {
					key: e.key,
					className: Object(Oe.a)(e.className, {
						[nd.a.active]: e.active,
						[nd.a.unread]: e.hasUnread
					})
				}, e.children), "SubredditHeader", nd.a)),
				ld = i.a.wrapped(e => r.a.createElement(Fi.a, {
					key: e.key,
					to: e.to,
					className: Object(Oe.a)(e.className, {
						[nd.a.active]: e.active,
						[nd.a.unread]: e.hasUnread
					})
				}, e.children), "SubredditChannelLink", nd.a),
				dd = i.a.wrapped(e => {
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
							backgroundImage: 'url("'.concat(n || "".concat(H.a.assetPath, "/img/chat/community-icon.png"), '")')
						}
					})
				}, "SubredditIcon", nd.a),
				ud = Object(F.a)({
					subredditList: e => Object(Dr.a)(e),
					selectedChannelId: e => Object(I.x)(e)
				}),
				hd = Object(o.b)(ud),
				md = e => {
					const {
						subredditList: t
					} = e;
					return t ? t.map((t, n) => {
						const {
							sortedChannels: a,
							name: s
						} = t;
						return r.a.createElement(id, {
							key: t.name
						}, r.a.createElement(dd, {
							iconImg: t.iconImg,
							keyColor: t.keyColor
						}), "r/".concat(t.name), r.a.createElement(rd, null, ((e, t, n) => {
							const {
								routeAction: a,
								selectedChannelId: s
							} = e;
							return t.map((e, t) => {
								const c = !!e.unreadMessageCount,
									o = e.channelId === s && a !== pc.a.VIEW_JOIN;
								return r.a.createElement("li", {
									key: "joinedItem-".concat(e.channelId)
								}, r.a.createElement(ld, {
									key: e.channelId,
									active: o,
									hasUnread: c,
									to: Object(Ie.channelUrl)(e.channelId, n)
								}, e.isPublic ? r.a.createElement(ad, null) : r.a.createElement(sd, null), e.name, !!e.unreadMentionCount && r.a.createElement(Vc.b, {
									count: e.unreadMentionCount
								})))
							})
						})(e, a, s)))
					}) : null
				};
			class bd extends r.a.Component {
				shouldComponentUpdate(e, t) {
					return !s()(this.props, e) || !s()(this.state, t)
				}
				render() {
					const {
						subredditList: e
					} = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(dl, null, O.fbt._("Joined Rooms", null, {
						hk: "4pYpIa"
					})), r.a.createElement(cd, null, e ? md(this.props) : r.a.createElement(od, null, O.fbt._("Community chatrooms that you join will show up here.", null, {
						hk: "1v5ejq"
					}))))
				}
			}
			var pd = hd(bd),
				gd = n("./src/chat/components/SubredditRecommendedLink/index.m.less"),
				fd = n.n(gd);
			const Od = i.a.wrapped(e => r.a.createElement("p", {
				className: Object(Oe.a)(e.className, {
					[fd.a.selected]: e.isSelected
				})
			}, e.children), "ChannelDesc", fd.a);
			var jd = i.a.wrapped(e => r.a.createElement(Fi.a, {
					className: Object(Oe.a)(e.className, {
						[fd.a.selected]: e.isSelected
					}),
					to: Object(Ie.channelAction)(e.channel.channelId, pc.a.VIEW_JOIN, e.subreddit.name)
				}, r.a.createElement(Jl, {
					channelName: e.channel.name,
					subredditName: e.subreddit.name,
					subredditIconUrl: e.subreddit.iconImg,
					isSelected: e.isSelected
				}), r.a.createElement(Od, {
					isSelected: e.isSelected
				}, e.channel.customData.description), r.a.createElement(Od, {
					isSelected: e.isSelected
				}, O.fbt._({
					"*": "{number} Members",
					_1: "1 Member"
				}, [O.fbt._plural(e.channel.memberCount, "number")], {
					hk: "1SfBCq"
				}))), "SubredditChannelLink", fd.a),
				Cd = n("./src/chat/components/SubredditRecommended/index.m.less"),
				_d = n.n(Cd);
			const Ed = Object(F.a)({
					channels: e => Object(I.v)(e),
					subreddits: e => Object(Dr.d)(e),
					selectedChannelId: e => Object(I.A)(e, "channelId")
				}),
				vd = Object(o.b)(Ed),
				yd = i.a.div("Wrapper", _d.a);
			class Id extends r.a.Component {
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
					return e && e.length ? r.a.createElement(yd, null, r.a.createElement(dl, null, O.fbt._("Recommended Rooms", null, {
						hk: "3pJd5S"
					})), r.a.createElement(hl, null, O.fbt._("Also check out", null, {
						hk: "1DZIvy"
					}) + " ", r.a.createElement(ze, {
						noUnderline: !0,
						target: Ce.c.BLANK,
						rel: Ce.b,
						href: "".concat(H.a.redditUrl, "/r/SubChats")
					}, "r/SubChats")), e.map((e, s) => e && r.a.createElement(jd, {
						key: "subreddit-recommended-link-".concat(s),
						channel: e,
						isSelected: (t === pc.a.VIEW_JOIN || t === pc.a.VIEW_PRIVATE || t === pc.a.DENY) && e.channelId === a,
						subreddit: n[e.customData.subredditId]
					}))) : null
				}
			}
			var xd = vd(Id),
				Sd = n("./src/chat/components/Sidebar/SubredditPanel/index.m.less"),
				kd = n.n(Sd);
			const Nd = i.a.wrapped(Ta, "Scroller", kd.a);
			var wd = e => r.a.createElement(Nd, null, r.a.createElement(ed, {
					routeAction: e.routeAction
				}), r.a.createElement(pd, {
					routeAction: e.routeAction
				}), r.a.createElement(xd, {
					routeAction: e.routeAction
				})),
				Td = n("./src/chat/components/Sidebar/index.m.less"),
				Md = n.n(Td);
			const Ad = 0;
			class Dd extends c.Component {
				constructor(e) {
					super(e), this.onTabSelect = this.onTabSelect.bind(this), this.getClonedChildren = this.getClonedChildren.bind(this), this.state = {
						activeIndex: Ad
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
			const Ld = e => {
				let {
					activeIndex: t,
					children: n
				} = e;
				return n && n[t || Ad]
			};
			var Ud = n("./src/chat/constants/sidebar.ts"),
				Rd = n("./src/chat/selectors/experiments.ts"),
				Pd = n("./src/chat/selectors/messages.ts"),
				Bd = n("./src/chat/selectors/promos.ts"),
				Hd = n("./src/chat/selectors/sidebar.ts");
			const Fd = i.a.div("Wrapper", Md.a),
				Kd = i.a.wrapped(Dd, "Tabs", Md.a),
				zd = i.a.wrapped(e => {
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
				}, "TabList", Md.a),
				Gd = i.a.wrapped(e => {
					let {
						active: t,
						children: n,
						className: a,
						onTabSelect: s
					} = e;
					return r.a.createElement("button", {
						type: "button",
						className: Object(Oe.a)(a, {
							[Md.a.active]: t
						}),
						onClick: s
					}, n)
				}, "Tab", Md.a),
				Wd = i.a.wrapped(Ti, "FirstTimeUserExpPromo", Md.a),
				Vd = Object(F.a)({
					channelId: I.x,
					displaySubredditChatFtux: Bd.c,
					sidebarActiveIndex: Hd.a,
					subredditChatEnabled: Rd.b,
					unreadCount: Pd.k
				});
			class qd extends r.a.Component {
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
					} = c, l = !s || a === Ud.a.DirectChannels;
					return r.a.createElement(Fd, null, s && r.a.createElement(Kd, {
						activeIndex: a,
						onTabSelect: t
					}, r.a.createElement(zd, null, r.a.createElement(Gd, null, O.fbt._("Rooms", null, {
						hk: "uE11M"
					}), o.unread && r.a.createElement(Vc.b, null)), r.a.createElement(Gd, null, O.fbt._("Directs", null, {
						hk: "3e8PpR"
					}), i.unread && r.a.createElement(Vc.b, {
						count: i.count
					}))), r.a.createElement(Ld, null, r.a.createElement(wd, {
						routeAction: n
					}), r.a.createElement(Dl, null))), e && r.a.createElement(Wd, null), !s && r.a.createElement(Dl, null), l && r.a.createElement(Pi, null))
				}
			}
			var Jd = Object(o.b)(Vd, e => ({
					onTabSelect: t => e(Object(ji.c)(t))
				}))(qd),
				Zd = n("./src/chat/controls/Checkbox/DeleteAllMessages.m.less"),
				Qd = n.n(Zd);
			const Yd = i.a.wrapped(et.a, "Trash", Qd.a),
				Xd = i.a.wrapped(Po.a, "Checkbox", Qd.a),
				$d = i.a.span("CheckboxText", Qd.a),
				eu = i.a.span("CheckboxItem", Qd.a),
				tu = i.a.span("CheckboxDetails", Qd.a);
			var nu = e => {
					const {
						className: t,
						onChange: n
					} = e;
					return r.a.createElement(eu, {
						className: t
					}, r.a.createElement(tu, null, r.a.createElement(Yd, null), r.a.createElement($d, null, O.fbt._("Remove all messages", null, {
						hk: "3JQNeR"
					}))), r.a.createElement(Xd, {
						onChange: n
					}))
				},
				au = n("./src/chat/components/OverlayBanUser/index.m.less"),
				su = n.n(au);
			const cu = i.a.div("Container", su.a),
				ru = i.a.h4("Warning", su.a),
				ou = i.a.p("Details", su.a),
				iu = i.a.a("LinkText", su.a),
				lu = i.a.span("CheckboxContainer", su.a),
				du = Object(F.a)({
					contacts: $o.d,
					subredditId: I.B
				});
			class uu extends c.Component {
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
						confirmBanClick: e,
						contacts: t,
						subredditId: n,
						subredditName: a,
						userId: s
					} = this.props, c = Object.assign({
						userId: s,
						chatBan: !0,
						subredditId: n
					}, this.state), o = t && t[s] && t[s].name, i = Object(Ie.banUserUrl)(a), l = O.fbt._("this user", null, {
						hk: "1cCwek"
					});
					return r.a.createElement(no, null, r.a.createElement(Mr, {
						title: O.fbt._("Confirm Ban", null, {
							hk: "41cHbm"
						})
					}), r.a.createElement(cu, null, r.a.createElement(ru, null, O.fbt._("Are you sure you want to ban {name} from chat?", [O.fbt._param("name", o || l)], {
						hk: "1LxgYV"
					})), r.a.createElement(ou, null, O.fbt._("They won't be able to send messages in any chatrooms or be invited to private chatrooms.", null, {
						hk: "3zgcvI"
					})), r.a.createElement(ou, null, O.fbt._("You can also remove all messages they've sent across all rooms or {=ban from the subreddit.}", [O.fbt._param("=ban from the subreddit.", r.a.createElement(iu, {
						href: i
					}, O.fbt._("ban from the subreddit.", null, {
						hk: "394IEZ"
					})))], {
						hk: "4Bz18u"
					})), r.a.createElement(lu, null, r.a.createElement(nu, {
						onChange: this.toggleCheckbox
					}))), r.a.createElement(lo, {
						primaryButtonText: O.fbt._("Confirm Ban", null, {
							hk: "2HCZ1N"
						}),
						primaryButtonAction: () => e(c)
					}))
				}
			}
			var hu = Object(o.b)(du, e => ({
					confirmBanClick: t => {
						e(Object(So.n)(t))
					}
				}))(uu),
				mu = n("./src/chat/components/OverlayBlockUser/index.m.less"),
				bu = n.n(mu);
			const pu = i.a.div("Container", bu.a),
				gu = i.a.p("Text", bu.a),
				fu = Object(F.a)({
					blockedUser: (e, t) => e.contacts.models[t.blockedUserId]
				});
			var Ou = Object(o.b)(fu, e => ({
					onChannelBlock: t => {
						e(So.o(t)), e(Ee.t())
					}
				}))(e => {
					const {
						blockedUser: t,
						blockedUserId: n,
						onChannelBlock: a
					} = e, s = t ? t.name : O.fbt._("user", null, {
						hk: "3ddTpU"
					});
					return r.a.createElement(no, null, r.a.createElement(Mr, {
						title: O.fbt._("Block {username}", [O.fbt._param("username", s)], {
							hk: "2aTkTS"
						})
					}), r.a.createElement(pu, null, r.a.createElement(gu, null, O.fbt._("Are you sure you want to block this user?", null, {
						hk: "31Tn9j"
					})), r.a.createElement(gu, null, O.fbt._("You will no longer see their comments, posts, and messages. They will not know that you've blocked them. You will no longer get notifications from this user.", null, {
						hk: "veMnN"
					}))), r.a.createElement(lo, {
						primaryButtonText: O.fbt._("Block", null, {
							hk: "8i5gq"
						}),
						primaryButtonAction: () => a(n)
					}))
				}),
				ju = n("./src/lib/timeAgo/index.ts"),
				Cu = n("./src/chat/controls/MediaObject/index.m.less"),
				_u = n.n(Cu);
			const Eu = i.a.wrapped(e => {
				const [t, n, a] = r.a.Children.toArray(e.children);
				return r.a.createElement("div", {
					className: e.className
				}, t, n, a)
			}, "MediaObject", _u.a);
			var vu = n("./src/chat/components/OverlayChannelInvited/index.m.less"),
				yu = n.n(vu);
			const Iu = "OverlayNavTooltip--ChatRequest",
				xu = i.a.div("Container", yu.a),
				Su = i.a.div("TitleContainer", yu.a),
				ku = i.a.wrapped(V, "NSFWIcon", yu.a),
				Nu = i.a.wrapped(se, "UserPic", yu.a),
				wu = i.a.span("WarningTextNSFW", yu.a),
				Tu = i.a.p("Text", yu.a),
				Mu = i.a.wrapped(Eu, "MediaObject", yu.a),
				Au = i.a.span("LightText", yu.a),
				Du = i.a.span("LightTextSmall", yu.a),
				Lu = i.a.b("Warning", yu.a),
				Uu = i.a.wrapped(oa, "MessageItemBubble", yu.a),
				Ru = i.a.wrapped(e => r.a.createElement("p", {
					className: Object(Oe.a)(e.className, {
						[yu.a.count]: !!e.count
					})
				}, e.children), "MemberListHeader", yu.a),
				Pu = Object(F.a)({
					currentUserId: ls.a,
					firstMessage: Pd.b,
					channel: e => Object(I.k)(e),
					inviterContact: (e, t) => {
						const n = e.channels.models[t.channelId];
						return Object($o.e)(e, n)
					}
				});
			class Bu extends r.a.Component {
				componentWillReceiveProps(e) {
					const {
						channel: t,
						setFirstMessageId: n
					} = this.props;
					if (t && e.channel) {
						const a = e.channel.channelId === t.channelId;
						t.type === C.a.Direct && !t.firstMessageId && !t.fetchingFirstMessage && a && n(t.channelId)
					}
				}
				constructor(e) {
					super(e), this.renderContent = this.renderContent.bind(this), this.renderUserInfo = this.renderUserInfo.bind(this), this.renderPreviewMessage = this.renderPreviewMessage.bind(this), this.onDeclineChannelRequest = this.onDeclineChannelRequest.bind(this)
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
						} = e;
						return r.a.createElement(Du, null, O.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [O.fbt._plural(t, "karma count")], {
							hk: "4uraW2"
						}), "  •  ", O.fbt._("redditor for {amount of time}", [O.fbt._param("amount of time", Object(ju.d)("en", n, !0))], {
							hk: "3o8EdY"
						}))
					}
				}
				renderPreviewMessage() {
					return this.props.channel && this.props.firstMessage && r.a.createElement(xu, null, r.a.createElement(Au, null, O.fbt._("Preview of this chat", null, {
						hk: "42xxX4"
					})), r.a.createElement(Uu, {
						darkBackground: !0,
						message: this.props.firstMessage,
						inPreview: !0,
						fromCurrentUser: !1,
						fromInvite: !0,
						embedText: !0,
						withButton: !0
					}))
				}
				renderBlockedUserHeader() {
					return this.props.hasBlockedUsers() && r.a.createElement(Tu, null, r.a.createElement(Lu, null, O.fbt._("Heads up: you previously blocked at least one person in this group.", null, {
						hk: "1vpXV1"
					})), O.fbt._("If you join, you'll be able to see any messages they send. They'll remain blocked on the rest of Reddit.", null, {
						hk: "1vGIVA"
					}))
				}
				renderMemberListHeader(e, t) {
					const n = e.length,
						a = t || O.fbt._("group", null, {
							hk: "1ixukL"
						});
					return r.a.createElement(Ru, {
						count: n
					}, O.fbt._({
						"*": "{number} Redditors in {channelName}",
						_1: "1 Redditor in {channelName}"
					}, [O.fbt._plural(n, "number"), O.fbt._param("channelName", a)], {
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
						return r.a.createElement(r.a.Fragment, null, this.renderBlockedUserHeader(), this.renderMemberListHeader(c, s), r.a.createElement(Cs, {
							channelId: t,
							members: c,
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
					if (t && t.inviter) return r.a.createElement("div", null, r.a.createElement(Mu, null, n ? r.a.createElement(ku, null) : r.a.createElement(Nu, {
						userId: t.inviter.id
					}), r.a.createElement(Su, null, r.a.createElement(os, {
						bold: !0
					}, t.inviter.name), n && r.a.createElement(wu, null, O.fbt._("NSFW", null, {
						hk: "3rI4EF"
					}))), this.renderUserInfo()), r.a.createElement(Tu, null, O.fbt._("Accept their request if you'd like to continue the conversation. We won't notify them if you decline.", null, {
						hk: "1wbHBD"
					})), t && t.type === C.a.Group ? this.renderMembersList() : this.renderPreviewMessage())
				}
				render() {
					const {
						props: {
							channel: e,
							onAcceptChannelRequest: t
						},
						onDeclineChannelRequest: n
					} = this, a = e && e.type === C.a.Direct, s = a ? O.fbt._("Chat Request", null, {
						hk: "1sWJM0"
					}) : O.fbt._("Group invite", null, {
						hk: "JPFyz"
					});
					return r.a.createElement(no, null, r.a.createElement(Mr, {
						channel: e,
						title: s,
						showMenu: a,
						dropdownId: Iu
					}), this.renderContent(), r.a.createElement(lo, {
						secondaryButtonText: O.fbt._("Decline", null, {
							hk: "3rdClY"
						}),
						secondaryButtonAction: n,
						primaryButtonText: O.fbt._("Accept", null, {
							hk: "249yqF"
						}),
						primaryButtonAction: t
					}))
				}
			}
			var Hu = Object(o.b)(Pu, e => ({
					onAcceptChannelRequest: () => {
						e(Object(Ee.k)()), e(Object(p.z)())
					},
					onDeclineChannelRequest: t => {
						e(Object(_e.b)(Object(Ie.channelAction)(t, pc.a.DECLINE_REQUEST)))
					},
					setFirstMessageId: t => e(Object(p.Q)(t))
				}), (e, t, n) => Object.assign({}, e, t, n, {
					hasBlockedUsers: () => {
						const {
							channel: t
						} = e;
						return !(!t || !t.members.some(e => e.isBlockedByMe))
					}
				}))(Bu),
				Fu = n("./src/chat/constants/channelRemovalReason.ts"),
				Ku = n("./src/chat/components/OverlayChannelRemoval/index.m.less"),
				zu = n.n(Ku);
			const Gu = i.a.p("SubHeader", zu.a),
				Wu = i.a.span("Header", zu.a),
				Vu = e => {
					switch (e) {
						case Fu.a.DEFAULT:
							return O.fbt._("Removed", null, {
								hk: "3yZ2SQ"
							});
						case Fu.a.BANNED:
							return O.fbt._("Banned", null, {
								hk: "45AEK1"
							});
						case Fu.a.KICKED:
							return O.fbt._("Kicked", null, {
								hk: "20JwrF"
							});
						default:
							return ""
					}
				},
				qu = Object(F.a)({
					status: (e, t) => {
						const {
							channelId: n
						} = t;
						return Object(I.q)(e, n)
					}
				});
			var Ju = Object(o.b)(qu)(e => r.a.createElement(no, null, r.a.createElement(Mr, {
					title: Vu(e.status)
				}), r.a.createElement(r.a.Fragment, null, r.a.createElement(Wu, null, (e => {
					switch (e) {
						case Fu.a.DEFAULT:
							return O.fbt._("You have been removed from this room.", null, {
								hk: "46tIu8"
							});
						case Fu.a.BANNED:
							return O.fbt._("You are banned from this room.", null, {
								hk: "2MKZpa"
							});
						case Fu.a.KICKED:
							return O.fbt._("You are temporarily kicked from this room.", null, {
								hk: "48m5JB"
							});
						default:
							return ""
					}
				})(e.status)), r.a.createElement(Gu, null, (e => {
					switch (e) {
						case Fu.a.DEFAULT:
							return O.fbt._("You have been removed from this room.", null, {
								hk: "46tIu8"
							});
						case Fu.a.BANNED:
							return O.fbt._("You are banned from this room and may not join until you are unbanned.", null, {
								hk: "1SH7uY"
							});
						case Fu.a.KICKED:
							return O.fbt._("You are temporarily kicked from this room and may not join until you are no longer kicked.", null, {
								hk: "1QQa96"
							});
						default:
							return ""
					}
				})(e.status))))),
				Zu = n("./src/chat/components/OverlayDeclineChannel/index.m.less"),
				Qu = n.n(Zu);
			const Yu = i.a.p("Text", Qu.a);
			Yu.displayName = "Text";
			var Xu = Object(o.b)(null, e => ({
					onDeclineChannelRequest: t => {
						e(Object(Ee.l)()), e(Object(p.D)(t))
					}
				}))(e => {
					let {
						onDeclineChannelRequest: t,
						subredditName: n
					} = e;
					return r.a.createElement(no, null, r.a.createElement(Mr, {
						title: O.fbt._("Decline invite?", null, {
							hk: "1YDLYU"
						})
					}), r.a.createElement(Yu, null, O.fbt._("This chat will be deleted, and this person will not be notified that you've declined their request.", null, {
						hk: "39qzrL"
					})), r.a.createElement(lo, {
						primaryButtonText: O.fbt._("Decline", null, {
							hk: "1U14k6"
						}),
						primaryButtonAction: () => t(n)
					}))
				}),
				$u = n("./src/lib/makeActionCreator/index.ts");
			const eh = Object($u.a)("OVERLAY_CLOSE");
			var th = n("./src/chat/components/OverlayDeleteMessage/index.m.less"),
				nh = n.n(th);
			const ah = i.a.div("Container", nh.a),
				sh = i.a.p("Text", nh.a),
				ch = i.a.span("CheckboxContainer", nh.a),
				rh = Object(F.a)({
					isModerator: I.a,
					message: (e, t) => e.messages.models[t.messageId],
					senderUserId: (e, t) => Object(Pd.f)(e, t.messageId),
					subredditId: I.B
				});
			class oh extends c.Component {
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
						isModerator: t,
						message: n,
						onConfirmationClick: a,
						subredditId: s,
						senderUserId: c
					} = this.props, o = {
						userId: c,
						chatBan: !1,
						subredditId: s,
						deleteAllMessages: e
					};
					return r.a.createElement(no, null, r.a.createElement(Mr, {
						title: O.fbt._("Delete message", null, {
							hk: "1ZCVBI"
						})
					}), r.a.createElement(ah, null, r.a.createElement(sh, null, O.fbt._("Are you sure you want to delete this message?", null, {
						hk: "3cAxYZ"
					}), r.a.createElement("br", null), O.fbt._("You can't undo this.", null, {
						hk: "4ockoK"
					})), n && r.a.createElement(oa, {
						message: n,
						fromCurrentUser: !0,
						fromInvite: !1,
						darkBackground: !0,
						withButton: !1,
						embedText: !0
					}), t && r.a.createElement(ch, null, r.a.createElement(nu, {
						onChange: this.toggleCheckbox
					}))), r.a.createElement(lo, {
						primaryButtonText: O.fbt._("Delete", null, {
							hk: "vtGdC"
						}),
						primaryButtonAction: () => a(o)
					}))
				}
			}
			var ih = Object(o.b)(rh, (e, t) => ({
					onConfirmationClick: n => ((e, t, n) => {
						e.deleteAllMessages ? t(Object(So.n)(e)) : (t(Object(g.o)(n)), t(Object(Ee.q)()))
					})(n, e, t.messageId),
					onCancel: () => e(eh())
				}))(oh),
				lh = n("./src/chat/components/OverlayDirectsEmptyState/index.m.less"),
				dh = n.n(lh);
			const uh = i.a.div("OverlayContent", dh.a),
				hh = i.a.img("Image", dh.a),
				mh = i.a.div("Info", dh.a),
				bh = i.a.h4("Header", dh.a),
				ph = i.a.p("Text", dh.a);
			var gh = Object(o.b)(null, e => ({
					onCreateMessage: () => e(Object(_e.b)(Object(Ie.channelUrl)("create")))
				}))(e => r.a.createElement(no, {
					innerContent: !0
				}, r.a.createElement(Mr, {
					title: O.fbt._("Start chatting", null, {
						hk: "3B5dRm"
					})
				}), r.a.createElement(uh, null, r.a.createElement(hh, {
					src: "".concat(H.a.assetPath, "/img/chat/empty-hero.png")
				}), r.a.createElement(mh, null, r.a.createElement(bh, null, O.fbt._("Start a direct chat", null, {
					hk: "4qVzlj"
				})), r.a.createElement(ph, null, O.fbt._("You can start a new direct chat with the button below or from someone's profile", null, {
					hk: "3wS0vs"
				})))), r.a.createElement(lo, {
					primaryButtonText: O.fbt._("New Chat", null, {
						hk: "33WSw"
					}),
					primaryButtonAction: e.onCreateMessage,
					primaryButtonOnly: !0
				}))),
				fh = n("./src/chat/components/OverlayJoinChannel/index.m.less"),
				Oh = n.n(fh);
			const jh = "OverlayNavTooltip--JoinSubredditChannel",
				Ch = i.a.div("Wrapper", Oh.a),
				_h = i.a.h4("Title", Oh.a),
				Eh = i.a.p("Desc", Oh.a),
				vh = i.a.span("Warning", Oh.a),
				yh = Object(F.a)({
					channel: e => Object(I.k)(e),
					subreddit: e => {
						const t = Object(I.k)(e);
						if (t && t.customData) {
							const n = t.customData.subreddit;
							if (n) return Object(Dr.c)(e, n.id)
						}
					}
				});
			class Ih extends r.a.Component {
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
					if (e && t) return r.a.createElement(Ch, null, r.a.createElement(Jl, {
						isPublic: e.isPublic,
						channelName: e.name,
						subredditName: t.name,
						subredditIconUrl: t.iconImg
					}), e.customData.description && r.a.createElement(r.a.Fragment, null, r.a.createElement(_h, null, O.fbt._("Description", null, {
						hk: "1RyehZ"
					})), r.a.createElement(Eh, null, e.customData.description)), t.nsfw && r.a.createElement(r.a.Fragment, null, r.a.createElement(_h, null, O.fbt._("NSFW Community", null, {
						hk: "3hPGRs"
					})), r.a.createElement(Eh, null, O.fbt._("{=Heads up: this community is labeled not safe for work.} It may contain explicit or adult content.", [O.fbt._param("=Heads up: this community is labeled not safe for work.", r.a.createElement(vh, null, O.fbt._("Heads up: this community is labeled not safe for work.", null, {
						hk: "2f5VCb"
					})))], {
						hk: "1yjANJ"
					}))))
				}
				render() {
					const {
						channel: e,
						subreddit: t
					} = this.props, {
						isSubmitDisabled: n
					} = this.state;
					if (e && t) {
						const {
							memberCount: a,
							channelId: s
						} = e, c = O.fbt._({
							"*": "{number} Members",
							_1: "1 Member"
						}, [O.fbt._plural(a, "number")], {
							hk: "2sN8W7"
						});
						return r.a.createElement(no, null, r.a.createElement(Mr, {
							channel: e,
							title: O.fbt._("Room Details", null, {
								hk: "eVFma"
							}),
							subTitle: e && c,
							showMenu: !1,
							dropdownId: jh
						}), this.renderContent(), r.a.createElement(lo, {
							primaryButtonText: O.fbt._("Join Room", null, {
								hk: "xd6cn"
							}),
							primaryButtonAction: () => {
								this.props.onJoinSubredditChannel(s, t.name), this.disableSubmit()
							},
							primaryButtonOnly: !0,
							primaryButtonDisabled: n
						}))
					}
					return null
				}
			}
			var xh = Object(o.b)(yh, e => ({
				onJoinSubredditChannel: (t, n) => e(Object(la.t)(t, n))
			}))(Ih);
			const Sh = Object($u.a)("MODERATOR__KICK_USER"),
				kh = "kickUser";
			var Nh = n("./src/chat/routes/chat.ts"),
				wh = n("./src/chat/components/OverlayKickUser/index.m.less"),
				Th = n.n(wh);
			const Mh = i.a.p("SubHeader", Th.a),
				Ah = i.a.span("Title", Th.a),
				Dh = i.a.span("Header", Th.a),
				Lh = i.a.wrapped(Po.a, "Checkbox", Th.a),
				Uh = i.a.div("ListItem", Th.a),
				Rh = i.a.div("OverlayContent", Th.a),
				Ph = "10 minutes",
				Bh = "1 hour",
				Hh = "1 day",
				Fh = "3 days",
				Kh = () => [{
					value: Ph,
					text: O.fbt._("10 minutes", null, {
						hk: "3y8skZ"
					})
				}, {
					value: Bh,
					text: O.fbt._("1 hour", null, {
						hk: "mgKhy"
					})
				}, {
					value: Hh,
					text: O.fbt._("1 day", null, {
						hk: "37HQV9"
					})
				}, {
					value: Fh,
					text: O.fbt._("3 days", null, {
						hk: "2R7GCT"
					})
				}],
				zh = Object(F.a)({
					message: (e, t) => t.attr === Nh.a.Message ? e.messages.models[t.attrId] : void 0,
					user: (e, t) => t.attr === Nh.a.User ? e.contacts.models[t.attrId] : void 0
				});
			class Gh extends c.Component {
				constructor(e) {
					super(e), this.onSubmit = e => {
						const {
							onKickUser: t,
							attrId: n
						} = this.props;
						Array.prototype.forEach.call(e.target[kh], (e, a) => {
							if (e.checked && Nh.a.User) {
								const a = (e => e === Ph ? 600 : e === Bh ? 3600 : e === Hh ? 86400 : e === Fh ? 259200 : 0)(e.value);
								t(n, a)
							}
						})
					}, this.renderIntro = this.renderIntro.bind(this)
				}
				renderIntro() {
					const {
						message: e,
						user: t
					} = this.props, n = e && e.sender ? e.sender.nickname : t ? "u/" + t.name : "this user";
					return [r.a.createElement(Dh, null, O.fbt._("Are you sure you want to kick {username} from this room?", [O.fbt._param("username", n)], {
						hk: "n1L3B"
					})), r.a.createElement(Mh, null, O.fbt._("They'll be able to join again once the kick duration is over.", null, {
						hk: "4zi1U1"
					}))]
				}
				render() {
					const e = Kh();
					return r.a.createElement(no, {
						onSubmit: Object(Gt.a)(this.onSubmit),
						form: !0,
						innerContent: !0
					}, r.a.createElement(Mr, {
						title: O.fbt._("Confirm Kick", null, {
							hk: "1upcSi"
						})
					}), r.a.createElement(Rh, null, r.a.createElement(Ta, null, this.renderIntro(), r.a.createElement(Ah, null, O.fbt._("Kick Duration", null, {
						hk: "4nENS8"
					})), e && e.map(e => r.a.createElement(Uh, {
						key: e.value
					}, r.a.createElement(Lh, {
						type: "radio",
						name: kh,
						value: e.value
					}, e.text))))), r.a.createElement(lo, {
						primaryButtonText: O.fbt._("Kick", null, {
							hk: "10O2jX"
						}),
						secondaryButtonText: O.fbt._("Cancel", null, {
							hk: "4E3LKX"
						})
					}))
				}
			}
			var Wh = Object(o.b)(zh, e => ({
					onKickUser: (t, n) => {
						e(((e, t) => async (n, a) => {
							await Us.b.kickUserFromChannel(e, t, "Temporary ban from room").then(() => {
								n(Sh({
									userId: e
								})), n(Object(_e.a)())
							})
						})(t, n)), e(Object(Ee.s)(n))
					}
				}))(Gh),
				Vh = n("./src/chat/components/OverlayLeaveChannel/index.m.less"),
				qh = n.n(Vh);
			const Jh = i.a.div("Container", qh.a),
				Zh = i.a.p("Text", qh.a),
				Qh = i.a.wrapped(Zh, "TextBold", qh.a);
			var Yh = Object(o.b)(void 0, e => ({
					onChannelLeave: (t, n) => {
						e(Object(Ee.n)()), e(Object(p.J)(t, n))
					}
				}))(e => {
					const {
						channelId: t,
						onChannelLeave: n,
						subredditName: a
					} = e;
					return r.a.createElement(no, null, r.a.createElement(Mr, {
						title: O.fbt._("Are you sure", null, {
							hk: "4fJTRG"
						})
					}), r.a.createElement(Jh, null, r.a.createElement(Qh, null, a ? O.fbt._("Leave Room?", null, {
						hk: "4xjqwe"
					}) : O.fbt._("Leave group chat?", null, {
						hk: "vEsVO"
					})), r.a.createElement(Zh, null, a ? O.fbt._("You will be removed from the room and no longer receive new messages.", null, {
						hk: "13cSxL"
					}) : O.fbt._("You will be removed from the group and no longer receive new messages. You will not be able to join this group again unless you receive another invite.", null, {
						hk: "3oISyF"
					}))), r.a.createElement(lo, {
						primaryButtonText: O.fbt._("Leave", null, {
							hk: "1s8gFw"
						}),
						primaryButtonAction: () => n(t, a)
					}))
				}),
				Xh = n("./src/chat/components/OverlayLockChannel/index.m.less"),
				$h = n.n(Xh);
			const em = i.a.div("Container", $h.a),
				tm = i.a.p("Text", $h.a),
				nm = i.a.wrapped(tm, "TextBold", $h.a),
				am = Object(F.a)({
					channel: e => Object(I.m)(e)
				});
			class sm extends r.a.Component {
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
						subredditName: e
					} = this.props, {
						isSubmitDisabled: t
					} = this.state;
					return r.a.createElement(no, null, r.a.createElement(Mr, {
						title: O.fbt._("Are you sure", null, {
							hk: "Kzqon"
						})
					}), r.a.createElement(em, null, e && r.a.createElement(r.a.Fragment, null, r.a.createElement(nm, null, O.fbt._("Lock Room?", null, {
						hk: "3eUK70"
					})), r.a.createElement(tm, null, O.fbt._("No one in this room will be able to send messages in while it is locked.", null, {
						hk: "2l4QGl"
					})))), r.a.createElement(lo, {
						primaryButtonText: O.fbt._("Lock", null, {
							hk: "2pox6m"
						}),
						primaryButtonAction: this.onLockChannel,
						primaryButtonDisabled: t
					}))
				}
			}
			var cm = Object(o.b)(am, e => ({
					onLockChannel: () => e(Object(la.v)(!0, !0)),
					goBackToChannel: (t, n) => e(Object(_e.b)(Object(Ie.channelUrl)(t, n)))
				}))(sm),
				rm = n("./src/chat/models/Promo/index.ts"),
				om = n("./src/chat/components/OverlayNSFWWarning/index.m.less"),
				im = n.n(om);
			const lm = i.a.div("Container", im.a),
				dm = i.a.p("Text", im.a);
			var um = Object(o.b)(null, e => ({
					onAccept: () => {
						e(Object(l.d)(rm.b.NSFWWarning)), e(Object(p.z)())
					}
				}))(e => r.a.createElement(no, null, r.a.createElement(Mr, {
					title: O.fbt._("NSFW User", null, {
						hk: "3W2Bw2"
					})
				}), r.a.createElement(lm, null, r.a.createElement(dm, null, O.fbt._("One or more users in this chat are marked as NSFW (not safe for work), which means they tend to post explicit content elsewhere on Reddit. This doesn't necessarily mean that the content of this chat is explicit.", null, {
					hk: "4cRpQH"
				}))), r.a.createElement(lo, {
					primaryButtonText: O.fbt._("Accept", null, {
						hk: "2ILlth"
					}),
					primaryButtonAction: e.onAccept
				}))),
				hm = n("./src/chat/components/OverlayPrivateChannel/index.m.less"),
				mm = n.n(hm);
			const bm = i.a.div("OverlayContent", mm.a),
				pm = i.a.p("Description", mm.a),
				gm = i.a.div("Wrapper", mm.a),
				fm = i.a.img("Image", mm.a),
				Om = i.a.h3("Title", mm.a),
				jm = Object(F.a)({
					channel: e => Object(I.k)(e),
					subreddits: e => Object(Dr.d)(e)
				});
			class Cm extends r.a.Component {
				getSubreddit() {
					const {
						channel: e,
						subreddits: t
					} = this.props;
					return e && t[e.customData.subredditId]
				}
				render() {
					const {
						channel: e
					} = this.props, t = this.getSubreddit();
					if (e && t) {
						const {
							memberCount: n
						} = e, a = O.fbt._({
							"*": "{number} Members",
							_1: "1 Member"
						}, [O.fbt._plural(n, "number")], {
							hk: "1R5VgJ"
						});
						return r.a.createElement(no, {
							innerContent: !0
						}, r.a.createElement(Mr, {
							channel: e,
							title: O.fbt._("Room Details", null, {
								hk: "3NZsfb"
							}),
							subTitle: e && a,
							showMenu: !1
						}), r.a.createElement(bm, null, r.a.createElement(gm, null, r.a.createElement(fm, {
							src: "".concat(H.a.assetPath, "/img/content-gate-icons/private.png")
						}), r.a.createElement(Om, null, O.fbt._("{subreddit name} is a private community", [O.fbt._param("subreddit name", "r/".concat(t.name))], {
							hk: "5QRxu"
						})), r.a.createElement(pm, null, O.fbt._("The moderators in this community have set it to private. You must be a moderator or approved user to join this room.", null, {
							hk: "1RNUxL"
						})))))
					}
					return null
				}
			}
			var _m = Object(o.b)(jm)(Cm),
				Em = n("./src/chat/endpoints/sendbird/index.ts"),
				vm = n("./src/chat/endpoints/users/index.ts"),
				ym = n("./src/chat/models/Message/report.ts");
			var Im = n("./src/higherOrderComponents/makeAsync.tsx"),
				xm = n("./src/lib/loadWithRetries/index.ts");
			const Sm = () => null;
			var km = Object(Im.a)({
				ErrorComponent: Sm,
				getComponent: () => Object(xm.a)(() => n.e("ChatReportFlow").then(n.bind(null, "./src/chat/components/ReportFlow/index.tsx"))).then(e => e.default),
				LoadingComponent: Sm
			});
			const Nm = "reportReason";
			var wm;
			! function(e) {
				e.Threats = "threats", e.Violence = "violence", e.Personal = "personal", e.Impersonation = "impersonation", e.MinorSexualization = "minorSexualization"
			}(wm || (wm = {}));
			var Tm = n("./src/chat/models/ReportFlow/index.ts"),
				Mm = n("./src/chat/components/OverlayReport/index.m.less"),
				Am = n.n(Mm);
			const Dm = i.a.wrapped(Po.a, "Checkbox", Am.a),
				Lm = i.a.div("ListItem", Am.a),
				Um = Object(F.a)({
					user: (e, t) => t.attr === Nh.a.User ? e.contacts.models[t.attrId] : void 0,
					message: (e, t) => t.attr === Nh.a.Invite || t.attr === Nh.a.Message ? e.messages.models[t.attrId] : void 0,
					messageList: e => Object(I.y)(e),
					currentUserId: (e, t) => Object(ls.a)(e)
				});
			class Rm extends c.Component {
				constructor(e) {
					super(e), this.selectReason = e => this.setState({
						selectedReason: e
					}), this.isMessageReportFlow = () => this.props.attr === Nh.a.Invite || this.props.attr === Nh.a.Message, this.isSubmitDisabled = () => !this.state.selectedReason, this.isCTLControls = () => this.state.currentFlow === Tm.a.CrisisTextLine && !this.state.ctlSubmitted, this.isSingleButton = () => this.state.currentFlow === Tm.a.CrisisTextLine && !0 === this.state.ctlSubmitted || this.state.currentFlow === Tm.a.BlockUser || this.state.currentFlow === Tm.a.FileComplaint, this.nextReportFlow = () => {
						const {
							selectedReason: e
						} = this.state, t = e && e.requestCrisisSupport ? Tm.a.CrisisTextLine : e && e.fileComplaint ? Tm.a.FileComplaint : Tm.a.BlockUser;
						this.setState({
							currentFlow: t
						})
					}, this.getMessageReportFlow = () => {
						const {
							message: e
						} = this.props;
						if (e && e.sender) return r.a.createElement(km, {
							onRuleChange: e => this.selectReason(e),
							currentFlow: this.state.currentFlow,
							blockedUserId: e.sender.userId,
							blockedUserName: e.sender.nickname,
							ctlSubmitted: this.state.ctlSubmitted
						})
					}, this.getReportReasonText = e => {
						switch (e) {
							case wm.Threats:
								return O.fbt._("Threatens, harrasses, or bullies", null, {
									hk: "9lzw2"
								});
							case wm.Violence:
								return O.fbt._("It threatens violence or physical harm", null, {
									hk: "2LziPg"
								});
							case wm.Personal:
								return O.fbt._("It's personal and confidential information", null, {
									hk: "2w0qDN"
								});
							case wm.Impersonation:
								return O.fbt._("Impersonation", null, {
									hk: "2dg9bu"
								});
							case wm.MinorSexualization:
								return O.fbt._("It's sexual or suggestive content involving minors", null, {
									hk: "Ofq3r"
								})
						}
					}, this.getUserReportFlow = () => u()(wm, e => {
						const t = this.getReportReasonText(e);
						return r.a.createElement(Lm, {
							key: t
						}, r.a.createElement(Dm, {
							type: "radio",
							value: t,
							name: Nm,
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
							currentUserId: e,
							message: t,
							messageList: n,
							onReportMessage: a,
							onReportInvite: s
						} = this.props, {
							currentFlow: c,
							selectedReason: r
						} = this.state;
						if (console.log(r, c, Tm.a), r && r.requestCrisisSupport && t) return c === Tm.a.CrisisTextLine ? (a(r.reasonText, t, n), this.setState({
							ctlSubmitted: !0
						})) : this.nextReportFlow();
						if (r && r.reasonText && t) {
							switch (c) {
								case Tm.a.Default:
									a(r.reasonText, t, n);
									break;
								case Tm.a.Invite:
									s(t.channelId, e, t.sender.userId, r.reasonText)
							}
							this.nextReportFlow()
						}
					}, this.state = {
						selectedReason: void 0,
						currentFlow: this.props.attr === Nh.a.Invite ? Tm.a.Invite : Tm.a.Default,
						ctlSubmitted: !1
					}
				}
				render() {
					const {
						message: e,
						user: t
					} = this.props;
					return r.a.createElement(no, {
						onSubmit: Object(Gt.a)(this.onSubmit),
						form: !0
					}, r.a.createElement(Mr, {
						title: O.fbt._("Reason for report", null, {
							hk: "EqHEf"
						})
					}), r.a.createElement(wa, null, this.isMessageReportFlow() ? e && this.getMessageReportFlow() : t && this.getUserReportFlow()), r.a.createElement(lo, {
						primaryButtonText: this.isCTLControls() ? O.fbt._("Yes", null, {
							hk: "1nxheD"
						}) : O.fbt._("Submit", null, {
							hk: "2Iwjdv"
						}),
						primaryButtonDisabled: this.isSubmitDisabled(),
						secondaryButtonOnly: this.isSingleButton(),
						secondaryButtonCTLOptions: this.isCTLControls(),
						secondaryButtonText: this.isSingleButton() ? O.fbt._("Close", null, {
							hk: "1pTwDA"
						}) : O.fbt._("Cancel", null, {
							hk: "1SIXQb"
						})
					}))
				}
			}
			var Pm = Object(o.b)(Um, e => ({
					onReportUser: (t, n) => {
						e(Object(Ee.u)(n.id)), e((e => async (t, n, a) => {
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
							await Object(vm.a)(s(), o)
						})({
							user: n,
							reason: t
						})).then(() => e(Object(_e.a)()))
					},
					onReportMessage: (t, n, a) => {
						e(Object(Ee.w)(n.messageId, t)), e(((e, t, n) => async (a, s, c) => {
							let {
								apiContext: r
							} = c;
							const o = Object(ym.a)(e, t),
								i = Object(ym.b)(e, t, n);
							o && await Object(vm.b)(r(), o, i)
						})(t, n, a))
					},
					onReportInvite: (t, n, a, s) => {
						e(((e, t, n, a) => async (s, c, r) => {
							let {
								apiContext: o
							} = r;
							await Object(Em.n)(o(), e, t, n, a)
						})(t, n, a, s))
					}
				}))(Rm),
				Bm = n("./src/chat/components/OverlaySubredditChatRequest/index.m.less"),
				Hm = n.n(Bm);
			const Fm = i.a.wrapped(Jl, "SubredditHeader", Hm.a),
				Km = i.a.h4("Title", Hm.a),
				zm = i.a.p("Text", Hm.a),
				Gm = Object(F.a)({
					currentUserId: ls.a,
					subredditChannel: e => Object(I.k)(e),
					subreddit: e => Object(Dr.b)(e)
				});
			class Wm extends r.a.Component {
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
					if (e && e.type === C.a.Subreddit) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Km, null, O.fbt._("Description", null, {
						hk: "EsHcE"
					})), r.a.createElement(zm, null, e.customData.description))
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
						return r.a.createElement(r.a.Fragment, null, r.a.createElement(Km, null, O.fbt._("Members", null, {
							hk: "2IDokz"
						})), r.a.createElement(Cs, {
							channelId: t,
							members: s,
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
					if (t && e) return r.a.createElement(r.a.Fragment, null, r.a.createElement(Fm, {
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
					} = this, c = t && t.memberCount, o = O.fbt._({
						"*": "{number} Members",
						_1: "1 Member"
					}, [O.fbt._plural(c || 0, "number")], {
						hk: "2sN8W7"
					});
					return r.a.createElement(no, null, r.a.createElement(Mr, {
						channel: t,
						title: O.fbt._("Room Details", null, {
							hk: "3nxwrj"
						}),
						subTitle: o
					}), r.a.createElement("div", null, this.renderContent()), r.a.createElement(lo, {
						secondaryButtonText: O.fbt._("Decline", null, {
							hk: "27vIjr"
						}),
						secondaryButtonAction: s,
						primaryButtonText: O.fbt._("Accept", null, {
							hk: "2ogEDT"
						}),
						primaryButtonAction: () => e(n, a)
					}))
				}
			}
			var Vm = Object(o.b)(Gm, e => ({
				onAcceptSubredditChannelRequest: (t, n) => {
					e(Object(Ee.k)()), e(Object(la.n)(t, n))
				},
				onDeclineChannelRequest: (t, n) => {
					e(Object(_e.b)(Object(Ie.channelAction)(t, pc.a.DECLINE_REQUEST, n)))
				}
			}))(Wm);
			const qm = e => e.channelId || e.subredditName ? e.subredditName && e.action === pc.a.VIEW_JOIN && e.channelId ? r.a.createElement(xh, {
				channelId: e.channelId,
				subredditName: e.subredditName
			}) : e.subredditName && e.action === pc.a.VIEW_INVITE && e.channelId ? r.a.createElement(Vm, {
				channelId: e.channelId,
				subredditName: e.subredditName
			}) : e.action === pc.a.VIEW_INVITE && e.channelId ? r.a.createElement(Hu, {
				channelId: e.channelId
			}) : e.action === pc.a.VIEW_MEMBERS && e.channelId ? r.a.createElement(vo, {
				channelId: e.channelId
			}) : e.action === pc.a.LEAVE && e.channelId ? r.a.createElement(Yh, {
				channelId: e.channelId,
				subredditName: e.subredditName
			}) : e.action === pc.a.LOCK_CHANNEL_CONFIRMATION && e.channelId ? r.a.createElement(cm, {
				channelId: e.channelId,
				subredditName: e.subredditName
			}) : e.action === pc.a.VIEW_NSFW_CONFIRMATION && e.channelId ? r.a.createElement(um, null) : e.action === pc.a.DECLINE_REQUEST && e.channelId ? r.a.createElement(Xu, {
				subredditName: e.subredditName
			}) : e.action === be.Ban && e.subredditName && e.attrId ? r.a.createElement(hu, {
				subredditName: e.subredditName,
				userId: e.attrId
			}) : e.action === be.Block && e.attrId ? r.a.createElement(Ou, {
				channelId: e.channelId,
				blockedUserId: e.attrId,
				subredditName: e.subredditName
			}) : e.action === ve.a.DELETE && e.attrId ? r.a.createElement(ih, {
				messageId: parseInt(e.attrId)
			}) : e.action === ve.a.REPORT && e.attr && e.attrId && e.channelId ? r.a.createElement(Pm, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : e.action === be.Kick && e.attr && e.attrId ? r.a.createElement(Wh, {
				attr: e.attr,
				attrId: e.attrId
			}) : e.action === pc.a.VIEW_PRIVATE && e.channelId ? r.a.createElement(_m, {
				channelId: e.channelId,
				subredditName: e.subredditName
			}) : e.action === pc.a.DENY && e.channelId ? r.a.createElement(Ju, {
				channelId: e.channelId
			}) : void 0 : r.a.createElement(gh, null);
			var Jm = n("./src/chat/components/FrameContent/index.m.less"),
				Zm = n.n(Jm);
			const Qm = Zm.a.Main,
				Ym = Object(F.a)({
					channel: e => Object(I.l)(e),
					container: e => e && e.container && e.container.size,
					isUserAccountEmpty: e => !e.user.account
				}),
				Xm = Object(o.b)(Ym, e => ({
					setInternalPromos: () => e(Object(l.e)())
				})),
				$m = i.a.main("Main", Zm.a),
				eb = i.a.div("Content", Zm.a),
				tb = i.a.div("Modal", Zm.a);
			class nb extends r.a.Component {
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
					} = this.props, a = this.props.match.params;
					switch (!0) {
						case n:
							return null;
						case a.action === pc.a.VIEW_MEMBERS: {
							const {
								channelId: e
							} = this.props.match.params;
							return e && r.a.createElement(vo, {
								channelId: e
							})
						}
						case a.action === pc.a.CREATE:
						case a.action === pc.a.INVITE_MEMBERS:
							return r.a.createElement(Oi, null);
						case t === Ma.a.MINIMIZED:
							return r.a.createElement(Yr.a, null);
						default: {
							const t = qm(a);
							return r.a.createElement(r.a.Fragment, null, r.a.createElement(Jd, {
								routeAction: a.action
							}), r.a.createElement(eb, null, t ? r.a.createElement(tb, null, t) : e && r.a.createElement(Qr, {
								channel: e
							})))
						}
					}
				}
				render() {
					return r.a.createElement($m, {
						id: Aa.a
					}, this.getContent())
				}
			}
			t.b = Xm(nb)
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
		"./src/chat/components/Message/Preview.m.less": function(e, t, n) {
			e.exports = {
				MessagePreview: "_3jmT-9zep7RA7TC5j3FouL",
				messagePreview: "_3jmT-9zep7RA7TC5j3FouL",
				active: "_2lGUX0yuAdDzSX2WjmPrG8",
				unread: "_16OvoKuUZbmePhJ1n_8Gcn"
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
				loadingError: "_3NndSEXY_RxH5czXJ4Rt-A"
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
				f = n.n(g);
			const {
				fbt: O
			} = n("./node_modules/fbt/lib/FbtPublic.js"), {
				minimized: j
			} = u.b, C = r.a.wrapped(i.a, "HiddenCloseButton", f.a);
			C.displayName = "CloseButton";
			const _ = r.a.wrapped(e => s.a.createElement("div", {
					onClick: e.onClick,
					className: e.className,
					style: {
						zIndex: h.a,
						width: "".concat(Object(l.b)(j.width), "px"),
						height: "".concat(Object(l.b)(j.height), "px")
					}
				}, e.children), "Container", f.a),
				E = r.a.span("TitleWithCounter", f.a),
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
				return s.a.createElement(d.a, null, s.a.createElement(_, {
					className: e.className,
					onClick: e.open
				}, s.a.createElement(E, null, O._("Chat", null, {
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
				return f
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

			function f(e) {
				return void 0 !== e ? e : -1
			}
			const O = o.a.wrapped(e => s.a.createElement("div", {
					className: e.className,
					style: {
						zIndex: u.a
					}
				}, e.children), "BasePortalContainer", b.a),
				j = o.a.wrapped(e => s.a.createElement("div", {
					className: e.className,
					style: {
						zIndex: u.a,
						width: "".concat(f(p.width), "px"),
						height: "".concat(f(p.height), "px")
					}
				}, e.children), "EmbedPortalContainer", b.a),
				C = o.a.wrapped(e => s.a.createElement("div", {
					className: e.className,
					style: {
						zIndex: u.a,
						width: "".concat(f(g.width), "px"),
						height: "".concat(f(g.height), "px")
					}
				}, e.children), "HiddenPortalContainer", b.a),
				_ = o.a.wrapped(i.a, "MinimizedRedesignPortalContainer", b.a),
				E = O,
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
						return s.a.createElement(E, null, e.children);
					case d.a.MINIMIZED:
						return s.a.createElement(_, null);
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
				f = l.a.wrapped(e => s.a.createElement("div", {
					role: "progressbar",
					className: e.className,
					style: {
						zIndex: e.zIndex || 1
					}
				}, e.children), "Wrapper", b.a),
				O = Object(d.a)({
					isNightmode: e => (e => !(e.user.prefs.globalTheme !== h))(e)
				});
			var j = Object(o.b)(O)(e => s.a.createElement(f, {
					zIndex: e.zIndex || 1
				}, s.a.createElement(p, null, s.a.createElement(g, {
					src: e.isNightmode ? "".concat(i.a.assetPath, "/img/loader_2orbit_loop.gif") : "".concat(i.a.assetPath, "/img/loader_2orbit_loop_nightmode.gif"),
					alt: "Loading"
				})))),
				C = n("./src/chat/components/CloseIcon/index.tsx"),
				_ = n("./src/chat/selectors/app.ts");
			const E = Object(d.a)({
				isHidden: _.e,
				isReady: _.f,
				alert: _.b,
				experiments: _.a
			});
			var v = Object(o.b)(E)(e => e.isHidden ? null : e.isReady && e.experiments ? e.children : s.a.createElement(s.a.Fragment, null, s.a.createElement(C.a, null), s.a.createElement(j, {
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
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "e", (function() {
				return x
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/lib/opener/index.ts"),
				i = n("./src/chat/controls/Svg/index.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var d = e => s.a.createElement(i.a, l({}, e, {
				viewBox: "0 0 16 16"
			}), s.a.createElement("path", {
				d: "M11.829 6.722l1.677-3.145A.802.802 0 0 0 12.8 2.4H3.2a.8.8 0 0 0-.8.8v10.243a.8.8 0 1 0 1.6 0v-2.4h8.8a.799.799 0 0 0 .706-1.176L11.83 6.722z"
			}));

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var h = e => s.a.createElement(i.a, u({}, e, {
				viewBox: "0 0 16 16"
			}), s.a.createElement("path", {
				d: "M12.817 7.491a.798.798 0 0 1-.234.566L9.52 11.12a.798.798 0 0 1-1.132 0l-1.13-1.132-4.292 4.291a.797.797 0 0 1-1.132 0 .8.8 0 0 1 0-1.131l4.292-4.291-1.131-1.132a.8.8 0 0 1 0-1.13L8.057 3.53c.3-.3.831-.3 1.131 0l3.395 3.394c.15.15.234.354.234.566zM3.863 6.263a.8.8 0 0 1-.566-1.366L6.36 1.834a.8.8 0 0 1 1.131 1.131L4.43 6.028a.798.798 0 0 1-.566.235zm10.417 2.36a.8.8 0 0 1 0 1.13l-3.063 3.063a.798.798 0 0 1-1.13 0 .8.8 0 0 1 0-1.131l3.061-3.062a.8.8 0 0 1 1.132 0z"
			}));

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var b = e => s.a.createElement(i.a, m({}, e, {
					viewBox: "0 0 16 16"
				}), s.a.createElement("path", {
					d: "M7.634 10.034L8.67 9H1.8a.8.8 0 1 1 0-1.6h6.869L7.634 6.366a.8.8 0 1 1 1.132-1.132l2.399 2.4a.8.8 0 0 1 0 1.132l-2.4 2.4a.798.798 0 0 1-1.13 0 .8.8 0 0 1 0-1.132zM12.2 1c1.323 0 2.4 1.077 2.4 2.4V13c0 1.323-1.077 2.4-2.4 2.4H6.6A2.403 2.403 0 0 1 4.2 13v-.8a.8.8 0 1 1 1.6 0v.8c0 .44.358.8.8.8h5.6a.8.8 0 0 0 .8-.8V3.4a.8.8 0 0 0-.8-.8H6.6a.8.8 0 0 0-.8.8v.8a.8.8 0 1 1-1.6 0v-.8C4.2 2.077 5.277 1 6.6 1h5.6z",
					fillRule: "evenodd"
				})),
				p = n("./src/chat/icons/svgs/Trash/index.tsx"),
				g = n("./src/chat/controls/Button/index.m.less"),
				f = n.n(g);
			const O = r.a.a("Button", f.a),
				j = r.a.button("Button", f.a),
				C = r.a.button("MessageIconButton", f.a),
				_ = e => {
					const t = Object(c.a)({
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
					return e.href ? s.a.createElement(O, {
						href: e.href,
						target: o.c.BLANK,
						rel: o.b,
						title: e.title,
						className: t,
						tabIndex: 0,
						style: n
					}, e.children) : s.a.createElement(j, {
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
				E = r.a.wrapped(_, "IconButton", f.a),
				v = e => s.a.createElement(C, e, s.a.createElement(d, null)),
				y = e => s.a.createElement(C, e, s.a.createElement(p.a, null)),
				I = e => s.a.createElement(C, e, s.a.createElement(h, null)),
				x = e => s.a.createElement(C, e, s.a.createElement(b, null))
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
			const f = r.a.wrapped(e => s.a.createElement("circle", {
				className: e.className,
				cy: "10",
				cx: "10",
				r: "9"
			}), "StyledCircle", p.a);
			var O = e => s.a.createElement(o.a, g({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("g", null, s.a.createElement(f, null))),
				j = n("./src/chat/controls/Checkbox/index.m.less"),
				C = n.n(j);
			const _ = r.a.input("HiddenInput", C.a),
				E = r.a.wrapped(m, "Checked", C.a),
				v = r.a.wrapped(O, "Unchecked", C.a),
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
			}, s.a.createElement(y, null, e.children && !e.rightPosition && s.a.createElement(I, null, e.children), s.a.createElement(x, null, s.a.createElement(_, {
				tabIndex: 0,
				type: e.type || "checkbox",
				checked: e.checked,
				disabled: e.disabled,
				name: e.name,
				value: e.value,
				onChange: e.onChange,
				id: e.id
			}), s.a.createElement(E, null), s.a.createElement(v, null)), e.children && e.rightPosition && s.a.createElement(I, null, e.children)))
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
				}, e.count),
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
					super(e), this.node = null, this.handleClick = this.handleClick.bind(this), this.handleClickInside = this.handleClickInside.bind(this), this.handleClickOutside = this.handleClickOutside.bind(this)
				}
				componentWillMount() {
					document.addEventListener("mousedown", this.handleClick, !0)
				}
				componentWillUnmount() {
					document.removeEventListener("mousedown", this.handleClick, !0)
				}
				handleClick(e) {
					this.node && this.node.contains(e.target) ? this.handleClickInside() : this.handleClickOutside()
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
						ref: e => this.node = e,
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
				TextButton: "_2F4ieidWvJgru4jmXmYsRQ",
				textButton: "_2F4ieidWvJgru4jmXmYsRQ",
				hidden: "sRFrUtJMs7GSDjwvxlxm_",
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
					}, 30 * i.Cb)
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
				l = n("./src/lib/messageIframeParent/index.ts"),
				d = n("./src/chat/actions/channel.ts"),
				u = n("./src/chat/actions/container.ts"),
				h = n("./src/chat/actions/message/unreadCount.ts"),
				m = n("./src/chat/actions/promo/index.ts"),
				b = n("./src/chat/constants/container.ts"),
				p = n("./src/chat/customMiddleware/noop.ts"),
				g = n("./src/chat/helpers/unreadCount.ts"),
				f = n("./src/chat/helpers/urls/index.ts"),
				O = n("./src/chat/selectors/promos.ts"),
				j = n("./src/chat/tracking/events/platform.ts");
			! function(e) {
				e.Navigate = "navigate.chat", e.Websocket = "websocket.chat", e.Expand = "expand.chat", e.UnreadCount = "unreadCount.chat"
			}(a || (a = {}));
			const C = c()(e => {
				window.addEventListener("message", t => {
					const n = (e => {
						try {
							return JSON.parse(e.data)
						} catch (t) {
							return
						}
					})(t);
					if (n) switch (n.type) {
						case a.Navigate: {
							const t = Object(o.parse)(n.data.href).pathname || f.rootUrl;
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
							a && a.meta && a.meta.name === i.yb.CHAT_MINIMIZE && e.dispatch(Object(d.P)());
							const {
								action: s,
								noun: c,
								source: r
							} = n.data.telemetry;
							Object(j.a)(t, c, r, s);
							break
						}
					}
				})
			});
			t.a = e => "undefined" == typeof window ? p.a : (C(e), t => n => {
				switch (n.type) {
					case m.a:
					case h.a: {
						const t = Object(O.b)(e.getState()),
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
			var a = n("./node_modules/js-cookie/src/js.cookie.js"),
				s = n.n(a),
				c = n("./node_modules/lodash/pick.js"),
				r = n.n(c),
				o = n("./src/config.ts"),
				i = n("./src/chat/actions/theme.ts");
			const l = new Set([i.THEME_CHANGED]);
			t.a = e => t => n => {
				const a = t(n);
				if (l.has(n.type)) {
					const t = e.getState().user,
						n = {
							prefs: r()(t.prefs, ["layout", "globalTheme", "subscriptionsPinned"]),
							language: t.language
						};
					s.a.set("USER", btoa(JSON.stringify(n)), {
						domain: o.a.cookieDomain
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
				f = n("./src/chat/selectors/platform.ts"),
				O = n("./src/chat/selectors/sendbird.ts");
			const j = (e, t) => {
				const n = t && t.type === o.SIZE_CHANGED ? t.payload : e.container.size,
					a = n === b.a.MINIMIZED || n === b.a.HIDDEN,
					s = t && t.type === l.a ? t.payload && t.payload.routeMatch && t.payload.routeMatch.route.meta.name === c.yb.CHAT_MINIMIZE : e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name === c.yb.CHAT_MINIMIZE;
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
				Object(f.a)(e.getState()) === c.yb.CHAT_MINIMIZE ? s()(async () => {
					j(e.getState()) ? n() : (await e.dispatch(Object(d.m)(!1)), e.getState().sendbird.session.token && await e.dispatch(Object(i.b)()))
				}) : n();
				return i => g => {
					const f = e.getState(),
						C = Object(O.b)(f) === p.b.Closed,
						_ = Object(O.e)(f);
					switch (g.type) {
						case o.SIZE_CHANGED: {
							if (!g.payload) break;
							const t = g.payload !== b.a.MINIMIZED && g.payload !== b.a.HIDDEN;
							t && (clearTimeout(a), a = null), C && t && !_ && n(), !_ || g.payload !== b.a.HIDDEN && g.payload !== b.a.MINIMIZED || (a = setTimeout(() => {
								e.dispatch(Object(h.f)())
							}, 10 * c.bb));
							break
						}
						case l.a: {
							const t = j(f, g);
							C && t ? n() : t && e.dispatch(Object(r.P)());
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
			var a = n("./src/chat/actions/message/unreadCount.ts"),
				s = n("./src/chat/customMiddleware/noop.ts"),
				c = n("./src/chat/selectors/app.ts");
			t.a = e => {
				const t = "undefined" != typeof window;
				if (!t) return s.a;
				const n = window.document.title;
				return s => r => {
					const o = s(r),
						i = e.getState(),
						l = Object(c.d)(i);
					switch (r.type) {
						case a.a: {
							const {
								basicChannelCount: e,
								subredditChannelCount: a
							} = r.payload;
							t && !l && (window.document.title = e > 0 ? "(".concat(e, ") ").concat(n) : a > 0 ? "(*) ".concat(n) : n)
						}
					}
					return o
				}
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
			const l = 5 * c.bb;
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
				return e => t => (t.type !== o.a && t.type !== o.c || d(t.payload), t.type === r.w && c(), t.type === o.b && (clearTimeout(n), n = null), e(t))
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
				f = n("./src/telemetry/models/Timer.ts"),
				O = n("./src/chat/tracking/fields/chat.ts"),
				j = n("./src/chat/tracking/fields/common.ts");
			const C = e => ({
					type: e
				}),
				_ = e => ({
					millis: e
				});
			var E = n("./src/chat/tracking/events/chatPreview.ts"),
				v = n("./src/chat/tracking/events/chatView.ts"),
				y = n("./src/chat/tracking/events/contactsList.ts"),
				I = n("./src/chat/tracking/events/invitationInbox.ts"),
				x = n("./src/chat/tracking/events/messagesInbox.ts");
			const S = s()((e, t) => ((e, t) => {
					Object(p.a)(Object.assign({
						noun: "inbox_new",
						source: g.b.ChatPerformance,
						action: g.a.Load,
						chat: Object.assign({}, Object(O.o)(e), Object(O.q)(e)),
						timer: Object.assign({}, C(f.TimerType.ChatLoadInboxNew), _(t))
					}, Object(j.a)(e)))
				})(e, (e => Date.now() - e)(t))),
				k = s()(e => Object(b.d)(e) && N(e)),
				N = e => {
					e.sidebarTabs.activeIndex === h.a.DirectChannels ? Object(x.e)(e) : Object(x.f)(e)
				},
				w = Object(c.c)((e, t, n) => {
					Object(m.J)(e) ? ((e, t) => {
						Object(p.a)(Object.assign({
							noun: "channel_cached",
							source: g.b.ChatPerformance,
							action: g.a.Load,
							chat: Object.assign({}, Object(O.g)(e)),
							timer: Object.assign({}, C(f.TimerType.ChatLoadChannelCached), _(t))
						}, Object(j.a)(e)))
					})(t, n) : ((e, t) => {
						Object(p.a)(Object.assign({
							noun: "channel_new",
							source: g.b.ChatPerformance,
							action: g.a.Load,
							chat: Object.assign({}, Object(O.g)(e)),
							timer: Object.assign({}, C(f.TimerType.ChatLoadChannelNew), _(t))
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
						T(c), k(c);
						break;
					case r.q:
						S(c, e), (e => {
							Object(b.c)(e) === u.a.VIEW_INVITE && Object(I.g)(e)
						})(c), (e => Object(b.g)(e) && Object(v.c)(e))(c), w(c), (e => {
							Object(b.c)(e) === u.a.VIEW_JOIN && Object(E.b)(e)
						})(c);
						break;
					case o.k:
					case l.c:
						S(c, e);
						break;
					case d.b:
						N(c)
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
				Object(o.c)(l, e, 5 * i.bb)
			}, 5 * i.Cb, {
				leading: !1,
				trailing: !0
			});
			let h;
			const m = () => {
				h && clearInterval(h), h = setInterval(() => {
					void 0 === Object(o.a)(l) && Object(c.b)()
				}, 5 * i.bb)
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
				l = Object(o.b)(i.n.CHAT, "unread_message_count", a), u(t.messages.unread.basicChannelCount), m();
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
				method: a.ab.GET,
				data: {
					raw_json: 1
				}
			}), r = async (e, t) => Object(s.a)(e, {
				data: {
					account_id: t,
					raw_json: 1
				},
				endpoint: "".concat(e.apiUrl, "/api/block_user"),
				method: a.ab.POST
			}), o = async (e, t) => Object(s.a)(e, {
				endpoint: "".concat(e.apiUrl, "/user/").concat(t, "/about"),
				method: a.ab.GET,
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
					method: a.ab.POST,
					endpoint: "".concat(e.apiUrl, "/api/report_user"),
					data: {
						reason: t.reason,
						user: t.userNickname
					}
				}),
				l = (e, t, n) => {
					const c = Object(o.c)(t, n);
					return Object(s.a)(e, {
						method: a.ab.POST,
						endpoint: "".concat(e.apiUrl, "/api/report_user"),
						data: {
							details: JSON.stringify(c),
							reason: t.reason,
							user: t.userNickname
						}
					})
				},
				d = (e, t) => Object(s.a)(e, {
					method: a.ab.GET,
					endpoint: "".concat(e.apiUrl, "/api/user_data_by_account_ids"),
					data: {
						raw_json: 1,
						ids: t.join(",")
					}
				}),
				u = e => Object(s.a)(e, {
					method: a.ab.GET,
					endpoint: "".concat(e.apiUrl, "/prefs/blocked.json")
				}),
				h = e => Object(s.a)(Object(c.a)(e, [r.a]), {
					method: a.ab.POST,
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
						a.push(e.substring(s, c)), a.push(n(i, o, d, l)), s = r
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
			const c = 3;

			function r(e) {
				if (e.contact_account_id || e.id) return {
					id: e.contact_account_id || "".concat(a.vb.Account, "_").concat(e.id),
					name: e.name,
					lastInteraction: e.last_interaction,
					created: e.created_utc,
					linkKarma: e.link_karma,
					commentKarma: e.comment_karma,
					profileImg: e.profile_img,
					isNSFW: e.profile_over_18
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
			const c = "".concat(a.vb.Account, "_"),
				r = e => {
					const t = {};
					for (const n in e) t[n] = o(Object.assign({
						id: n
					}, e[n]));
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
						return Object.assign({}, e, {
							fetchingChannels: !0
						});
					case s.i:
						return Object.assign({}, e, {
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
						return Object.assign({}, e, {
							fetchingChannels: !1,
							hasMoreChannels: r,
							sortedKeys: [...e.sortedKeys, ...c]
						})
					}
					case s.t: {
						const {
							channelId: n
						} = t.payload;
						return Object.assign({}, e, {
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						})
					}
					case s.v:
					case s.m: {
						const {
							channelId: n
						} = t.payload;
						return Object.assign({}, e, {
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						})
					}
					case s.y: {
						const n = t.payload.channel.channelId;
						return e.sortedKeys.indexOf(n) > -1 ? Object.assign({}, e, {
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						}) : e
					}
					case s.x: {
						const {
							channel: n
						} = t.payload;
						return e.sortedKeys.includes(n.channelId) ? e : Object.assign({}, e, {
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
							return Object.assign({}, e, {
								fetchingChannels: !0
							});
						case s.k:
							return Object.assign({}, e, {
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
							return Object.assign({}, e, {
								fetchingChannels: !1,
								hasMoreChannels: r,
								sortedKeys: [...e.sortedKeys, ...c]
							})
						}
						case s.v:
						case s.m: {
							const {
								channelId: n
							} = t.payload;
							return Object.assign({}, e, {
								sortedKeys: e.sortedKeys.filter(e => e !== n)
							})
						}
						case s.t: {
							const {
								channelId: n
							} = t.payload;
							return Object.assign({}, e, {
								sortedKeys: [n, ...e.sortedKeys]
							})
						}
						case s.f: {
							const n = Object.keys(t.payload);
							return Object.assign({}, e, {
								sortedKeys: o()([...n, ...e.sortedKeys])
							})
						}
						case s.u:
						case m.a: {
							const {
								channelId: n
							} = t.payload;
							return e.sortedKeys.includes(n) ? Object.assign({}, e, {
								sortedKeys: o()([n, ...e.sortedKeys])
							}) : e
						}
						default:
							return e
					}
				},
				g = n("./node_modules/lodash/first.js"),
				f = n.n(g),
				O = n("./node_modules/lodash/forEach.js"),
				j = n.n(O),
				C = n("./node_modules/lodash/omit.js"),
				_ = n.n(C),
				E = n("./node_modules/lodash/reduce.js"),
				v = n.n(E),
				y = n("./src/chat/actions/channel/dropdown.ts"),
				I = n("./src/chat/actions/channel/subreddit.ts"),
				x = n("./src/chat/actions/message/inboxScroller.ts"),
				S = n("./src/chat/constants/channels.ts");
			const k = {};
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.f:
						return Object.assign({}, e, t.payload);
					case s.b:
					case s.a:
					case I.e:
					case I.f: {
						const {
							channels: n
						} = t.payload, a = v()(e, (e, t, a) => n[a] && t.channelState === S.b.PARTIAL && (e[a] = n[a]) && e || e, {});
						return Object.assign({}, n, e, a)
					}
					case I.g: {
						const {
							channels: n
						} = t.payload, a = Object.assign({}, n, e);
						return j()(n, (e, t) => {
							a[t].channelState === S.b.UNSORTED && (a[t].channelState = S.b.PARTIAL)
						}), a
					}
					case s.o: {
						const n = t.payload,
							a = e[n];
						return !a || a && 0 === a.unreadMessageCount ? e : Object.assign({}, e, {
							[n]: Object.assign({}, a, {
								unreadMessageCount: 0,
								unreadMentionCount: 0
							})
						})
					}
					case s.t:
					case I.b: {
						const {
							channelId: n
						} = t.payload, a = Object.assign({}, e[n], {
							channelState: S.b.JOINED
						});
						return Object.assign({}, e, {
							[a.channelId]: a
						})
					}
					case s.y: {
						const n = t.payload.channel,
							a = e[n.channelId],
							s = Object.assign({}, a, _()(n, "hasMoreMessages", "isMessageListLoaded")),
							c = {
								[n.channelId]: s
							};
						return Object.assign({}, e, c)
					}
					case I.m:
					case s.x: {
						const n = t.payload.channel,
							a = e[n.channelId],
							s = Object.assign({}, a, n, {
								channelState: S.b.INVITED
							}),
							c = {
								[n.channelId]: s
							};
						return Object.assign({}, e, c)
					}
					case s.w: {
						const {
							channel: n
						} = t.payload;
						return Object.assign({}, e, {
							[n.channelId]: n
						})
					}
					case s.m: {
						const {
							channelId: n
						} = t.payload;
						return _()(e, n)
					}
					case s.v: {
						const {
							channelId: n,
							isRecommended: a
						} = t.payload, s = Object.assign({}, e[n], {
							channelState: a ? S.b.PARTIAL : S.b.UNSORTED
						});
						return Object.assign({}, e, {
							[s.channelId]: s
						})
					}
					case y.a: {
						const {
							channelId: n,
							name: a
						} = t.payload, s = Object.assign({}, e[n], {
							name: a
						});
						return Object.assign({}, e, {
							[n]: Object.assign({}, s)
						})
					}
					case m.a: {
						const n = t.payload.channelId,
							a = Number(f()(Object.keys(t.payload.message))),
							s = Object.assign({}, e[n], {
								lastMessage: t.payload.message[a]
							});
						return Object.assign({}, e, {
							[n]: s
						})
					}
					case m.g: {
						const n = t.payload;
						return Object.assign({}, e, {
							[n]: Object.assign({}, e[n], {
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
						return Object.assign({}, e, {
							[a]: Object.assign({}, e[a], {
								isMessageListLoaded: !0,
								hasMoreMessages: n,
								fetchingMessages: !1,
								fetchingMessagesError: !1
							})
						})
					}
					case m.f: {
						const n = t.payload;
						return Object.assign({}, e, {
							[n]: Object.assign({}, e[n], {
								fetchingMessages: !1,
								fetchingMessagesError: !0
							})
						})
					}
					case s.l: {
						const {
							channelId: n
						} = t.payload;
						return Object.assign({}, e, {
							[n]: Object.assign({}, e[n], {
								fetchingFirstMessage: !0
							})
						})
					}
					case s.s: {
						const {
							channelId: n,
							firstMessageId: a
						} = t.payload;
						return Object.assign({}, e, {
							[n]: Object.assign({}, e[n], {
								fetchingFirstMessage: !1,
								firstMessageId: a
							})
						})
					}
					case x.b: {
						const {
							channelId: n
						} = t.payload;
						return Object.assign({}, e, {
							[n]: Object.assign({}, e[n], {
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
						const n = Object.assign({}, e, {
							isLoaded: !1
						});
						if (t.payload) {
							const e = t.payload.channelId;
							e && (n.channelId = e)
						}
						return n
					}
					case s.q:
						return Object.assign({}, e, {
							isLoaded: !0
						});
					case s.v:
					case s.m:
						return t.payload.channelId !== e.channelId ? e : Object.assign({}, e, {
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
						return Object.assign({}, e, {
							fetchingChannels: !0
						});
					case I.i:
						return Object.assign({}, e, {
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
					case s.v:
					case s.m:
					case I.b: {
						const {
							channelId: n
						} = t.payload;
						return e.sortedKeys.includes(n) ? Object.assign({}, e, {
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						}) : e
					}
					case I.m: {
						const n = t.payload.channel;
						return Object.assign({}, e, {
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
				R = (e, t, n) => Object.assign({}, e, {
					[t.toLowerCase()]: e[t.toLowerCase()].filter(e => e !== n)
				});
			var P = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case I.j:
						return Object.assign({}, e, {
							fetchingChannels: !0
						});
					case I.k:
						return Object.assign({}, e, {
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
					case s.v:
					case s.m: {
						const {
							channelId: n,
							subredditName: a
						} = t.payload, s = a && a.toLowerCase();
						if (!e.sortedKeys[s] || !e.sortedKeys[s].includes(n)) return e;
						const c = e.sortedKeys[s].length <= 1 ? _()(e.sortedKeys, s) : R(e.sortedKeys, s, n);
						return Object.assign({}, e, {
							sortedKeys: c
						})
					}
					case s.w: {
						const {
							sortedKeys: n
						} = e, {
							channelId: a
						} = t.payload.channel;
						for (const t in n) e.sortedKeys[t.toLowerCase()].includes(a) && R(n, t.toLowerCase(), a);
						return Object.assign({}, e, {
							sortedKeys: n
						})
					}
					default:
						return e
				}
			};
			const B = {
				sortedKeys: []
			};
			var H = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
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
							return Object.assign({}, e, {
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
				z = Object(a.c)({
					banned: A,
					invited: L,
					joined: P,
					kicked: H,
					recommended: K
				}),
				G = Object(a.c)({
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
					models: N,
					selected: T,
					subreddit: z
				}),
				W = n("./src/chat/actions/user.ts");
			var V = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.b:
							return !0;
						default:
							return e
					}
				},
				q = n("./node_modules/lodash/values.js"),
				J = n.n(q),
				Z = n("./src/chat/actions/sendbird/index.ts");
			const Q = "search",
				Y = "contacts",
				X = {};
			var $ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Z.g:
						return Object.assign({}, e, t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
							loaded: !0,
							userId: t.id,
							valid: !0,
							method: Y
						}, e), {}));
					case Z.b:
						return Object.assign({}, t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
							loaded: !0,
							userId: t.id,
							valid: !0,
							method: Y
						}, e), {}), e);
					case Z.d: {
						const n = t.payload.username;
						return Object.assign({}, e, {
							[n]: {
								loaded: !1,
								userId: null,
								valid: !1,
								method: Q
							}
						})
					}
					case Z.e: {
						const {
							payload: {
								contact: n,
								username: a,
								valid: s
							}
						} = t, c = !!(s && n && n.id);
						return Object.assign({}, e, {
							[a.toLowerCase()]: {
								loaded: !0,
								userId: n ? n.id : null,
								valid: c,
								method: Q
							}
						})
					}
					case W.i: {
						const n = t.payload;
						return Object.assign({}, e, J()(n).reduce((e, t) => (e[t.name.toLowerCase()] = {
							loaded: !0,
							userId: t.id,
							valid: !0,
							method: Q
						}, e), {}))
					}
					case W.c: {
						const {
							username: n
						} = t.payload;
						return n ? _()(e, n) : e
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
					case Z.g:
						return Object.assign({}, e, t.payload.reduce((t, n) => (t[n.id] = Object.assign({}, e[n.id], n), t), {}));
					case Z.e: {
						const {
							payload: {
								contact: n
							}
						} = t;
						return n ? Object.assign({}, e, {
							[n.id]: n
						}) : e
					}
					case W.i:
						return Object.assign({}, e, t.payload || {});
					case W.c: {
						const {
							userId: n
						} = t.payload;
						return n ? Object.assign({}, e, {
							[n]: Object.assign({}, e[n], {
								isBlocked: !0
							})
						}) : e
					}
					case W.b: {
						const {
							blockedContacts: n
						} = t.payload;
						return Object.assign({}, e, n)
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
					case W.h:
						return [...e, t.payload];
					case W.k:
						return e.filter(e => e !== t.payload);
					case W.j:
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
						case Z.g:
							return [...e, ...t.payload.map(e => e.id)];
						case W.c:
							return e.filter(e => e !== t.payload.userId);
						default:
							return e
					}
				},
				re = Object(a.c)({
					fetchedBlockedUsers: V,
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
							if (ie.b[t.payload]) return Object.assign({}, e, {
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
				fe = n("./node_modules/lodash/uniqBy.js"),
				Oe = n.n(fe),
				je = n("./src/chat/actions/members.ts");
			const Ce = {};
			var _e = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ce,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.b: {
						const {
							channelId: n
						} = t.payload;
						return Object.assign({}, e, {
							[n]: Object.assign({}, e[n], {
								fetchingMembers: !0
							})
						})
					}
					case je.c: {
						const {
							channelId: n,
							hasMoreMembers: a
						} = t.payload;
						return Object.assign({}, e, {
							[n]: Object.assign({}, e[n], {
								hasMoreMembers: a,
								fetchingMembers: !1
							})
						})
					}
					case je.a: {
						const {
							channelId: n,
							members: a
						} = t.payload, s = ge()(a), c = e[n] && e[n].model || [], r = Oe()([...c, ...s], "id");
						return Object.assign({}, e, {
							[n]: Object.assign({}, e[n], {
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
			var Ee = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case m.b:
					case m.k:
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
						return Object.assign({}, e, n)
					}
					case m.a:
						return Object.assign({}, e, t.payload.message);
					case m.h:
						return Object.assign({}, e, t.payload);
					case m.d:
					case m.i:
						return _()(e, t.payload);
					case m.e: {
						const {
							messages: n
						} = t.payload;
						return Object.assign({}, e, n)
					}
					case s.n: {
						const n = t.payload;
						return Object.assign({}, _()(e, ...n))
					}
					case x.a: {
						const {
							messageIdList: n
						} = t.payload;
						return _()(e, n)
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
							return Object.assign({}, e, {
								[n.clientMessageId]: n
							})
						}
						case m.l: {
							const {
								clientMessageId: n,
								toggle: a
							} = t.payload;
							if (n) {
								const t = e[n];
								return Object.assign({}, e, {
									[n]: Object.assign({}, t, {
										error: a
									})
								})
							}
							return Object.assign({}, e)
						}
						case m.a:
						case m.j: {
							const {
								clientMessageId: n
							} = t.payload;
							return Object.assign({}, n ? _()(e, n) : e)
						}
						default:
							return e
					}
				},
				Se = n("./node_modules/lodash/isEqual.js"),
				ke = n.n(Se),
				Ne = n("./src/chat/actions/message/unreadCount.ts");
			const we = {
				basicChannelCount: 0,
				subredditChannelCount: 0,
				subredditMentionCount: 0
			};
			var Te = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : we,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ne.a:
							return ke()(e, t.payload) ? e : Object.assign({}, e, t.payload)
					}
					return e
				},
				Me = Object(a.c)({
					firstLoaded: Ee,
					models: ye,
					pending: xe,
					unread: Te
				}),
				Ae = n("./src/chat/reducers/meta/index.ts"),
				De = n("./src/chat/reducers/platform/index.ts"),
				Le = n("./src/chat/reducers/promos/index.ts"),
				Ue = n("./src/chat/actions/sendbird/config.ts");
			const Re = {
				maxMessageLength: void 0
			};
			var Pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Ue.b:
						return Object.assign({}, e, t.payload);
					default:
						return e
				}
			};
			const Be = {
				host: void 0
			};
			var He = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ue.c:
							return Object.assign({}, e, t.payload);
						default:
							return e
					}
				},
				Fe = n("./src/chat/actions/sendbird/sdk.ts"),
				Ke = n("./src/chat/constants/sendbird.ts");
			const ze = {
				connectionStatus: Ke.b.Closed,
				initialized: !1
			};
			var Ge = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ze,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Fe.a:
						return Object.assign({}, e, {
							initialized: !0,
							connectionStatus: Ke.b.Open
						});
					case Fe.c: {
						const n = Object.assign({}, t.payload);
						return Object.assign({}, e, {
							error: n,
							connectionStatus: Ke.b.Closed
						})
					}
					case Fe.b:
						return Object.assign({}, e, {
							connectionStatus: Ke.b.Closed
						});
					case Fe.d: {
						const {
							connectionStatus: n
						} = t.payload;
						return Object.assign({}, e, {
							connectionStatus: n
						})
					}
					default:
						return e
				}
			};
			const We = {
				expires: void 0,
				token: void 0,
				active: !1
			};
			var Ve = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : We,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Z.h:
							return Object.assign({}, e, t.payload);
						case Z.a:
							return Object.assign({}, e, {
								active: !0
							});
						case Z.c:
							return Object.assign({}, e, {
								active: !1
							});
						default:
							return e
					}
				},
				qe = Object(a.c)({
					globalSettings: Pe,
					proxy: He,
					session: Ve,
					sdk: Ge
				}),
				Je = n("./src/chat/actions/sidebar.ts");
			const Ze = n("./src/chat/constants/sidebar.ts").a.SubredditChannels;
			var Qe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ze,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Je.b: {
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
						case Je.a: {
							const {
								channelId: n,
								tabIndex: a
							} = t.payload;
							return Object.assign({}, e, {
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
							return Object.assign({}, e, t.payload);
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
							return Object.assign({}, e, rt()(s, "id"))
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
				ft = n("./src/chat/actions/toast.ts");
			var Ot = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ft.a:
							return null;
						case ft.b: {
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
			var _t = function() {
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
				Et = n("./src/chat/actions/typingIndicator.ts");
			const vt = {
				usernames: []
			};

			function yt(e, t) {
				return e === t || (0 === e.length && 0 === t.length || !(0 === e.length && t.length > 0) && (!(e.length > 0 && 0 === t.length) && (1 === e.length && 1 === t.length ? e[0] === t[0] : 2 === e.length && 2 === t.length ? e[0] === t[0] && e[1] === t[1] : 3 === e.length && 3 === t.length ? e[0] === t[0] && e[1] === t[1] && e[2] === t[2] : ke()(e, t))))
			}
			var It = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Et.a: {
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
			var kt = Object(St.a)((e, t) => {
				switch (void 0 === e && (e = null), t.type) {
					case W.a: {
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
						return e ? Object.assign({}, e, {
							seenSubredditChatFtux: !0
						}) : null;
					default:
						return e
				}
			}, null);
			const Nt = {
				userSubredditChatEnabled: !1
			};
			var wt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Z.f:
					case Ue.a: {
						const {
							userSubredditChatEnabled: n
						} = t.payload || Nt;
						return Object.assign({}, e, t.payload, {
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
					case W.d:
						return t.payload;
					default:
						return e
				}
			};
			const At = he.x;
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
					case W.e:
						return t.payload;
					default:
						return e
				}
			};
			const Rt = {
				globalTheme: mt.a
			};
			var Pt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case ht.THEME_CHANGED: {
						const {
							themeKey: n
						} = t.payload;
						return Object.assign({}, e, {
							globalTheme: n
						})
					}
					default:
						return e
				}
			};
			var Bt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case W.f:
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
						case W.g:
							return t.payload;
						default:
							return e
					}
				},
				zt = Object(a.c)({
					account: kt,
					chatExperiments: wt,
					experiments: Mt,
					language: Dt,
					loid: Ut,
					prefs: Pt,
					reddaid: Bt,
					session: Ft,
					sessionTracker: Kt
				});
			t.a = Object(a.c)({
				channels: G,
				contacts: re,
				container: de,
				emojis: be,
				members: _e,
				messages: Me,
				meta: Ae.b,
				platform: De.b,
				promos: Le.b,
				sendbird: qe,
				sidebarTabs: $e,
				sitewideRules: nt,
				subreddits: dt,
				themes: gt,
				toast: Ot,
				tooltipId: _t,
				typingIndicator: It,
				user: zt,
				lastAction: ut.a
			})
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
						routeMatch: Object.assign({}, n, {
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
							h = Object.assign({}, h, {
								[l]: e
							})
						}
						return Object.assign({}, e, {
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
						return Object.assign({}, e, {
							metas: Object.assign({}, e.metas, {
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
						return Object.assign({}, e, {
							[n]: !0
						})
					}
					case a.b: {
						const n = t.payload;
						return Object.assign({}, e, {
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
					chunk: s.o.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.yb.CHAT
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
					chunk: s.o.CHAT_EMPTY,
					component: l,
					exact: !0,
					meta: {
						name: s.yb.CHAT_EMPTY
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
					chunk: s.o.CHAT_MINIMIZE,
					component: u,
					exact: !0,
					meta: {
						name: s.yb.CHAT_MINIMIZE
					},
					path: "/chat/minimize/"
				},
				m = ["/chat/", "/chat/channel/:action(create)/", "/chat/channel/:channelId/:action(block|decline|delete|invite|invited|kick|members|leave|nsfw|report)?/:attr(invite|message|user)?/:attrId?", "/chat/r/:subredditName/channel/:channelId/:action(ban|block|decline|delete|deny|invite|invited|join|kick|leave|lock_confirmation|members|private|report)?/:attr(invite|message|user)?/:attrId?"],
				b = {
					action: c.a,
					chunk: s.o.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.yb.CHAT
					},
					path: m
				},
				p = ["/chat/user_id/:userIds/"],
				g = {
					action: c.d,
					chunk: s.o.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.yb.CHAT
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
				chunk: a.o.CHAT,
				exact: !0,
				meta: {
					name: a.yb.CHAT
				},
				path: "/chat/*"
			};
			const c = [...n("./src/chat/routes/chat.ts").b, s];
			t.a = c
		},
		"./src/chat/selectors/channels/next.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/chat/constants/channels.ts"),
				s = n("./src/chat/constants/sidebar.ts"),
				c = n("./src/chat/selectors/channels.ts"),
				r = n("./src/chat/selectors/experiments.ts"),
				o = n("./src/chat/selectors/subreddit.ts");
			const i = e => {
					const {
						channels: t
					} = e, n = t.subreddit.invited.sortedKeys[0], s = Object(o.b)(e, n);
					return {
						channelId: n,
						subredditName: s && s.name,
						channelAction: a.a.VIEW_INVITE
					}
				},
				l = e => {
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
				d = e => {
					const {
						channels: t
					} = e, n = t.subreddit.recommended.sortedKeys[0], s = Object(o.b)(e, n);
					return {
						channelId: n,
						subredditName: s && s.name,
						channelAction: a.a.VIEW_JOIN
					}
				},
				u = e => [i(e), l(e), d(e)],
				h = e => {
					const {
						channels: t
					} = e;
					return {
						channelId: t.invited.sortedKeys[0],
						channelAction: a.a.VIEW_INVITE
					}
				},
				m = e => {
					const {
						channels: t
					} = e;
					return {
						channelId: t.joined.sortedKeys[0]
					}
				},
				b = e => [h(e), m(e)],
				p = e => {
					const t = Object(c.k)(e);
					return {
						channelId: t && t.channelId
					}
				},
				g = e => e.find(e => !!e.channelId),
				f = (e, t) => {
					const n = t === s.a.SubredditChannels ? u(e) : b(e),
						a = g(n);
					return a && a.channelId
				},
				O = (e, t) => {
					const n = Object(r.b)(e),
						a = [...t ? [p(e)] : [], ...n ? u(e) : [], ...b(e)];
					return g(a)
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
				return f
			})), n.d(t, "d", (function() {
				return O
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
				f = (e, t) => {
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
				O = e => e.contacts.models
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
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			}));
			var a = n("./node_modules/lodash/sortBy.js"),
				s = n.n(a),
				c = n("./src/chat/selectors/channels.ts");
			const r = e => {
					const t = Object(c.x)(e);
					if (t) return e.members[t]
				},
				o = e => {
					const t = r(e);
					if (t) return t.fetchingMembers
				},
				i = e => {
					const t = r(e);
					if (t) return t.hasMoreMembers
				},
				l = (e, t) => {
					if (t && e.members[t]) {
						const n = e.members[t];
						if (n.model) {
							const t = n.model.map(t => u(t, e.contacts.models));
							return h(t)
						}
					}
				},
				d = (e, t) => {
					const n = t[e.id];
					return {
						id: e.id,
						name: e.name,
						isBlockedByMe: n && void 0 !== n.isBlocked ? n.isBlocked : e.isBlocked || !1,
						isOnline: !1,
						isNSFW: !(!n || void 0 === n.isNSFW) && n.isNSFW,
						lastSeenAt: "",
						profileUrl: e.profileImg || n && n.profileImg || "",
						state: ""
					}
				},
				u = (e, t) => {
					const n = t[e.id];
					return n ? {
						id: e.id,
						name: e.name,
						isBlockedByMe: void 0 !== n.isBlocked ? n.isBlocked : e.isBlockedByMe,
						isOnline: e.isOnline,
						isNSFW: void 0 !== n.isNSFW && n.isNSFW,
						lastSeenAt: e.lastSeenAt,
						profileUrl: e.profileUrl,
						state: e.state
					} : e
				},
				h = e => {
					if (!e) return [];
					const t = [],
						n = [],
						a = [],
						c = [];
					e.forEach(e => {
						e.isNSFW && e.isBlockedByMe ? n.push(e) : e.isNSFW ? a.push(e) : e.isBlockedByMe ? t.push(e) : c.push(e)
					});
					const r = e => e.name && e.name.toLowerCase();
					return [...s()(t, r), ...s()(n, r), ...s()(a, r), ...s()(c, r)]
				},
				m = e => {
					const t = r(e);
					if (t) return t.model
				},
				b = (e, t) => {
					const n = r(e);
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
				l = e => e.platform.currentPage && e.platform.currentPage.queryParams,
				d = e => !(!s(e) || c(e))
		},
		"./src/chat/selectors/sendbird.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
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
			n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return h
			}));
			var a = n("./node_modules/lodash/isEmpty.js"),
				s = n.n(a),
				c = n("./node_modules/lodash/map.js"),
				r = n.n(c),
				o = n("./src/chat/models/Channel/index.ts"),
				i = n("./src/chat/selectors/channels.ts");
			const l = e => e.subreddits && e.subreddits.models,
				d = (e, t) => {
					const n = l(e);
					return n && n[t]
				},
				u = (e, t) => {
					const n = t ? Object(i.h)(e, t) : Object(i.w)(e);
					if (n && n.type === o.a.Subreddit) {
						const {
							customData: t
						} = n;
						return d(e, t.subredditId)
					}
				},
				h = e => {
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
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return g
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
				d = e => {
					const t = s.a.get(o.f);
					return {
						id: (e.user.sessionTracker || t).split(".")[0]
					}
				},
				u = e => ({
					id: e.user.account ? e.user.account.id : "accessed_chat_without_login",
					isLoggedIn: !!e.user.account
				}),
				h = e => {
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
				m = e => ({}),
				b = e => e.meta.externalData.post,
				p = e => e.meta.externalData.comment,
				g = e => e.meta.externalData.profile
		},
		"./src/chat/singleton/SendbirdSDK.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return U
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
				d = n("./src/chat/actions/channel.ts"),
				u = n("./node_modules/react-router-redux/es/index.js"),
				h = n("./src/chat/constants/channels.ts"),
				m = n("./src/chat/helpers/urls/index.ts"),
				b = n("./src/chat/selectors/channels.ts"),
				p = n("./src/chat/selectors/subreddit.ts");
			const g = e => async (t, n) => {
				const a = n(),
					s = Object(b.w)(a),
					c = Object(p.b)(a, e),
					r = c && c.name.toLowerCase();
				r && (t(Object(d.M)({
					channelId: e,
					subredditName: r
				})), s && s.channelId === e && t(Object(u.b)(Object(m.channelAction)(e, h.a.DENY, r))))
			};
			var f = n("./src/chat/actions/channel/subreddit.ts"),
				O = n("./src/chat/actions/message/index.ts"),
				j = n("./src/chat/actions/sendbird/index.ts"),
				C = n("./src/chat/actions/sendbird/sdk.ts"),
				_ = n("./src/chat/actions/toast.ts"),
				E = n("./src/chat/actions/typingIndicator.ts"),
				v = n("./src/chat/constants/batchSizes.ts"),
				y = n("./src/chat/constants/messages.ts"),
				I = n("./src/chat/constants/sendbird.ts"),
				x = n("./src/chat/constants/toast.ts"),
				S = n("./src/chat/helpers/errors.ts"),
				k = n("./src/chat/models/Channel/index.ts"),
				N = n("./src/chat/models/Channel/platform.ts"),
				w = n("./src/chat/models/Channel/subreddit.ts"),
				T = n("./src/chat/models/Channel/utils/index.ts"),
				M = n("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				A = n("./src/chat/models/Message/index.ts"),
				D = n("./src/chat/models/User/member.ts");
			const {
				sendbirdAppId: L
			} = a.a;
			var U;
			! function(e) {
				e.VIEW_PRIVATE = "view_private", e.KICKED = "kicked", e.BANNED = "banned"
			}(U || (U = {}));
			const R = new class {
				constructor() {
					this.dispatch = c.a, this.channels = {}, this.channelUniqueHandlerID = [], this.connectionUniqueHandlerID = [], this.switchChannel = (e, t) => {
						if (this.channel = e, t) return Promise.resolve([]); {
							this.subredditChannelMembersQuery = this.channel.createMemberListQuery(), this.memberListQuery = this.channel.createMemberListQuery(), this.createPreviousMessageListQuery();
							const e = this.getPreviousMessages(y.c.USER);
							return Promise.all([e])
						}
					}, (this.self = new o.a({
						appId: L
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
						toast: x.a.ConnectionPending
					})), this.dispatch(Object(j.m)())
				}
				onReconnectStarted() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: I.b.Pending
						},
						n = {
							toast: x.a.ConnectionPending
						};
					e.onReconnectStarted = () => {
						this.dispatch(Object(C.h)(t)), this.dispatch(Object(_.e)(n))
					}, this.self.addConnectionHandler("CONNECTION_CHANGE", e), this.connectionUniqueHandlerID.push("CONNECTION_CHANGE")
				}
				onReconnectSucceeded() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: I.b.Open
						};
					e.onReconnectSucceeded = () => {
						this.dispatch(Object(C.h)(t)), this.dispatch(Object(_.e)({
							toast: x.a.ConnectionOpen
						})), Object(i.setTimeout)(() => this.dispatch(Object(_.d)()), 3 * l.Cb), this.dispatch(Object(O.q)(!0)), this.dispatch(Object(d.F)())
					}, this.self.addConnectionHandler("RECONNECT_SUCCEEDED", e), this.connectionUniqueHandlerID.push("RECONNECT_SUCCEEDED")
				}
				onReconnectFailed() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: I.b.Closed
						};
					e.onReconnectFailed = () => {
						this.dispatch(Object(C.h)(t)), this.dispatch(Object(_.e)({
							toast: x.a.ConnectionClosed
						}))
					}, this.self.addConnectionHandler("RECONNECT_FAILED", e), this.connectionUniqueHandlerID.push("RECONNECT_FAILED")
				}
				onReceiveInvite() {
					const e = new this.self.ChannelHandler;
					e.onUserReceivedInvitation = e => {
						const t = Object(k.f)(e);
						this.dispatch(Object(d.S)(t))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_INVITE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_INVITE")
				}
				onReceiveMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageReceived = (e, t) => {
						const n = Object(k.f)(e);
						this.dispatch(Object(d.R)(n));
						const a = Object(A.b)(t);
						a && this.dispatch(Object(O.r)(a))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_MESSAGE")
				}
				onUpdateMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageUpdated = (e, t) => {
						const n = Object(k.f)(e);
						this.dispatch(Object(d.R)(n));
						const a = Object(A.b)(t);
						a && this.dispatch(Object(O.r)(a))
					}, this.self.addChannelHandler("UPDATE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("UPDATE_CHANNEL_MESSAGE")
				}
				onDeleteMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageDeleted = (e, t) => {
						this.dispatch(Object(O.t)(t))
					}, this.self.addChannelHandler("DELETE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("DELETE_CHANNEL_MESSAGE")
				}
				onTypingStatusUpdated() {
					const e = new this.self.ChannelHandler;
					e.onTypingStatusUpdated = e => {
						const t = Object(M.a)(e.url),
							n = e.getTypingMembers().map(e => e.nickname);
						this.dispatch(Object(E.b)({
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
							this.dispatch(Object(d.S)(t, !0))
						}, this.self.addChannelHandler(s, a), this.channelUniqueHandlerID.push(s)
					})
				}
				onChannelChanged() {
					const e = new this.self.ChannelHandler;
					e.onChannelChanged = e => {
						const t = Object(k.f)(e);
						this.dispatch(Object(d.S)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_CHANGED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_CHANGED")
				}
				onChannelDeleted() {
					const e = new this.self.ChannelHandler;
					e.onChannelDeleted = e => {
						const t = Object(M.a)(e);
						this.dispatch(g(t))
					}, this.self.addChannelHandler("ON_CHANNEL_DELETED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_DELETED")
				}
				onChannelMuted() {
					const e = new this.self.ChannelHandler;
					e.onUserMuted = e => {
						const t = Object(k.f)(e);
						this.dispatch(Object(d.S)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_MUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_MUTED")
				}
				onChannelUnmuted() {
					const e = new this.self.ChannelHandler;
					e.onUserUnmuted = e => {
						const t = Object(k.f)(e);
						this.dispatch(Object(d.S)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNMUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNMUTED")
				}
				onChannelLocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelFrozen = e => {
						const t = Object(k.f)(e);
						this.dispatch(Object(d.S)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_LOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_LOCKED")
				}
				onChannelUnlocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelUnfrozen = e => {
						const t = Object(k.f)(e);
						this.dispatch(Object(d.S)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNLOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNLOCKED")
				}
				mapCodeToError(e) {
					switch (e) {
						case 400750:
							return U.KICKED;
						case 400751:
							return U.BANNED;
						default:
							return U.VIEW_PRIVATE
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
							Object(S.b)("Error: can't join subreddit channel"), n({
								error: this.mapCodeToError(e.code)
							})
						}) : e()
					})
				}
				updatePartialChannelModel(e, t) {
					const {
						PARTIAL: n,
						UNSORTED: a
					} = h.b;
					t === n && e.channelState === a && (e.channelState = n, this.dispatch(Object(d.T)(e)))
				}
				getChannelByChannelId(e) {
					return new Promise((t, n) => {
						const a = Object(T.a)(e);
						this.self.GroupChannel.getChannel(a, (e, a) => {
							a ? (Object(S.b)("Error: can't get channel by id"), n(a)) : t(e)
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
							this.dispatch(Object(d.T)(n)), t(n)
						}).catch(e => {
							Object(S.b)("Error: can't add channel by id"), n(e)
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
								const t = Object(N.a)(e, h.b.JOINED);
								this.dispatch(Object(d.T)(t)), this.switchChannel(r).then(e => {
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
						const n = Object(w.b)(e);
						n && this.dispatch(Object(f.s)(n, t.userId))
					}, this.self.addChannelHandler("CHANNEL_USER_KICKED", e), this.channelUniqueHandlerID.push("CHANNEL_USER_KICKED")
				}
				kickUserFromChannel(e, t, n) {
					return new Promise((a, s) => this.channel ? (this.channel.banUserWithUserId(e, t, n, (e, t) => e ? a() : s(t)), a()) : a())
				}
				getExistingChannels(e, t) {
					return new Promise((n, a) => {
						let s;
						e === h.b.INVITED && t === h.f.NonSuper ? this.channelListQueryInvited ? s = this.channelListQueryInvited : (this.channelListQueryInvited = this.self.GroupChannel.createMyGroupChannelListQuery(), s = this.channelListQueryInvited) : e === h.b.JOINED && t === h.f.NonSuper ? this.channelListQueryJoined ? s = this.channelListQueryJoined : (this.channelListQueryJoined = this.self.GroupChannel.createMyGroupChannelListQuery(), s = this.channelListQueryJoined) : e === h.b.JOINED && t === h.f.Super ? this.channelListQueryJoinedSubreddit ? s = this.channelListQueryJoinedSubreddit : (this.channelListQueryJoinedSubreddit = this.self.GroupChannel.createMyGroupChannelListQuery(), s = this.channelListQueryJoinedSubreddit) : e === h.b.INVITED && t === h.f.Super && (this.channelListQueryInvitedSubreddit ? s = this.channelListQueryInvitedSubreddit : (this.channelListQueryInvitedSubreddit = this.self.GroupChannel.createMyGroupChannelListQuery(), s = this.channelListQueryInvitedSubreddit)), s.includeEmpty = !0, s.limit = v.a.Channels, s.memberStateFilter = this.self.GroupChannel.memberState[e], s.superChannelFilter = t, s.hasNext ? s.next((e, t) => {
							if (t) 800170 !== t.code && a(t);
							else {
								const t = s.hasNext;
								n({
									channels: e,
									hasMoreChannels: t
								})
							}
						}) : n()
					})
				}
				getSubredditChannelMembers() {
					return new Promise((e, t) => {
						this.subredditChannelMembersQuery && this.subredditChannelMembersQuery.hasNext && this.subredditChannelMembersQuery.next((n, a) => {
							if (!a && this.subredditChannelMembersQuery) {
								const t = this.subredditChannelMembersQuery.hasNext;
								e({
									members: n,
									hasMoreMembers: t
								})
							} else t(a)
						})
					})
				}
				getChannelMembersStartsWith(e) {
					return new Promise((t, n) => {
						if (!this.channel) return n(new Error("this.channel is null or undefined"));
						this.memberListQuery = this.channel.createMemberListQuery(), this.memberListQuery ? (this.memberListQuery.nicknameStartsWithFilter = e, this.memberListQuery.next((e, a) => {
							if (a) n(a);
							else {
								const n = this.memberListQuery && this.memberListQuery.hasNext || !1;
								t({
									members: e,
									hasMoreMembers: n
								})
							}
						})) : n(Error("this.memberListQuery is null or undefined"))
					})
				}
				searchMemberByName(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return new Promise((n, a) => {
						if (!this.channel) return a(new Error("this.channel is null or undefined"));
						this.memberListQuery = this.channel.createMemberListQuery(), this.memberListQuery ? (this.memberListQuery.nicknameStartsWithFilter = e, this.memberListQuery.next((a, s) => {
							const c = Object(D.a)(a),
								r = c.filter(n => t && n && n.name === e || !t && n);
							c.length && this.dispatch(Object(j.i)(c)), n(r)
						})) : a(Error("this.memberListQuery is null or undefined"))
					})
				}
				startTypingIndicator() {
					this.channel && this.channel.startTyping()
				}
				endTypingIndicator() {
					this.channel && this.channel.endTyping()
				}
				getPreviousMessages(e, t) {
					return new Promise((n, a) => {
						if (this.channel) {
							const s = {};
							t && this.createPreviousMessageListQuery(), this.messageListQuery ? this.messageListQuery.load(v.a.Messages, !0, e, (e, t) => {
								if (!t && this.messageListQuery) {
									e.forEach(e => {
										s[e.messageId] = Object(A.b)(e)
									});
									const {
										hasMore: t
									} = this.messageListQuery;
									n({
										messages: s,
										hasMore: t
									})
								} else a()
							}) : a()
						} else a()
					})
				}
				addMessage(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					return new Promise((a, s) => {
						if (this.channel) {
							const c = new(0, this.self.UserMessageParams);
							if (c.data = t, c.message = e, n && n.length) {
								const e = this.self;
								c.mentionType = e.BaseMessageParams.MentionType.USERS, c.mentionedUserIds = n
							}
							this.channel.sendUserMessage(c, (e, t) => {
								t ? s() : a(Object(A.b)(e))
							})
						}
					})
				}
				createPreviousMessageListQuery() {
					this.channel && (this.messageListQuery = this.channel.createPreviousMessageListQuery())
				}
				deleteMessage(e) {
					return new Promise(t => {
						if (this.channel) {
							const n = e;
							this.channel.deleteMessage(n, (e, n) => {
								n || t(e)
							})
						}
					})
				}
				getFirstMessage() {
					return new Promise((e, t) => {
						this.channel ? this.channel.getNextMessagesByTimestamp(0, !0, 1, !0, "", "", (t, n) => {
							n || e(t)
						}) : t()
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
				setMyCountPreference(e) {
					return new Promise(t => {
						this.channel && this.channel.setMyCountPreference(e, () => t())
					})
				}
				resetChannelMessageListQuery() {
					return new Promise((e, t) => {
						this.channel ? (this.messageListQuery = this.channel.createPreviousMessageListQuery(), e()) : t("this.channel does not exist")
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
						chat: Object.assign({}, Object(s.g)(e), Object(s.A)(e), Object(s.p)(e), Object(s.s)(e)),
						subreddit: Object.assign({}, Object(r.a)(e), Object(r.b)(e))
					}, Object(c.a)(e)))
				},
				l = e => {
					Object(o.a)(Object.assign({
						noun: "join",
						source: a.b.ChatPreview,
						action: a.a.Click,
						chat: Object.assign({}, Object(s.g)(e), Object(s.A)(e), Object(s.p)(e), Object(s.s)(e)),
						subreddit: Object.assign({}, Object(r.a)(e), Object(r.b)(e))
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
					chat: Object.assign({}, Object(s.A)(e), Object(s.p)(e), Object(s.g)(e)),
					subreddit: Object.assign({}, Object(r.a)(e), Object(r.b)(e))
				}, Object(c.a)(e))),
				l = (e, t) => Object(o.a)(Object.assign({
					noun: "chat_member_block",
					source: a.b.ChatSettings,
					action: a.a.Submit,
					chat: Object.assign({}, Object(s.A)(e), Object(s.p)(e), Object(s.g)(e), Object(s.b)(t)),
					subreddit: Object.assign({}, Object(r.a)(e), Object(r.b)(e))
				}, Object(c.a)(e))),
				d = e => {
					Object(o.a)(Object.assign({
						noun: "view_member",
						source: a.b.ChatSettings,
						action: a.a.Click,
						chat: Object.assign({}, Object(s.A)(e), Object(s.p)(e), Object(s.u)(e), Object(s.g)(e))
					}, Object(c.a)(e)))
				},
				u = (e, t) => {
					Object(o.a)(Object.assign({
						noun: "chat_member_report",
						source: a.b.ChatSettings,
						action: a.a.Submit,
						chat: Object.assign({}, Object(s.A)(e), Object(s.p)(e), Object(s.g)(e), Object(s.w)(t)),
						subreddit: Object.assign({}, Object(r.a)(e), Object(r.b)(e))
					}, Object(c.a)(e)))
				},
				h = e => Object(o.a)(Object.assign({
					noun: "leave_group",
					source: a.b.ChatSettings,
					action: a.a.Click,
					chat: Object.assign({}, Object(s.A)(e), Object(s.p)(e), Object(s.g)(e), Object(s.y)(e)),
					subreddit: Object.assign({}, Object(r.a)(e), Object(r.b)(e))
				}, Object(c.a)(e))),
				m = (e, t, n) => Object(o.a)(Object.assign({
					noun: t ? "lock_room" : "unlock_room",
					source: a.b.ChatSettings,
					action: n ? a.a.Click : a.a.View,
					chat: Object.assign({}, Object(s.A)(e), Object(s.p)(e), Object(s.g)(e)),
					subreddit: Object.assign({}, Object(r.a)(e), Object(r.b)(e))
				}, Object(c.a)(e)))
		},
		"./src/chat/tracking/events/chatView.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return h
			}));
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/tracking/fields/chat.ts"),
				c = n("./src/chat/tracking/fields/common.ts"),
				r = n("./src/chat/tracking/fields/subreddit.ts"),
				o = n("./src/chat/tracking/sendEvent.ts");
			const i = e => Object(o.a)(Object.assign({
					noun: "chat",
					source: a.b.ChatView,
					action: a.a.View,
					chat: Object.assign({}, Object(s.A)(e), Object(s.p)(e), Object(s.g)(e), Object(s.s)(e), Object(s.l)(e), Object(s.y)(e)),
					subreddit: Object.assign({}, Object(r.a)(e), Object(r.b)(e))
				}, Object(c.a)(e))),
				l = (e, t) => {
					Object(o.a)(Object.assign({
						noun: "chat_message",
						source: a.b.ChatView,
						action: a.a.Submit,
						chat: Object.assign({}, Object(s.A)(e), Object(s.p)(e), Object(s.g)(e), Object(s.s)(e, 0), Object(s.n)(e, t), Object(s.x)(e, t), Object(s.y)(e)),
						subreddit: Object.assign({}, Object(r.a)(e), Object(r.b)(e))
					}, Object(c.a)(e)))
				},
				d = (e, t) => {
					Object(o.a)(Object.assign({
						noun: "chat_message_failed",
						source: a.b.ChatView,
						action: a.a.View,
						chat: Object.assign({}, Object(s.A)(e), Object(s.p)(e), Object(s.g)(e), Object(s.s)(e, 0), Object(s.t)(e, t), Object(s.x)(e), Object(s.y)(e)),
						subreddit: Object.assign({}, Object(r.a)(e), Object(r.b)(e))
					}, Object(c.a)(e)))
				},
				u = (e, t, n) => {
					Object(o.a)(Object.assign({
						noun: "report_message",
						source: a.b.ChatView,
						action: a.a.Submit,
						chat: Object.assign({}, Object(s.A)(e), Object(s.p)(e), Object(s.g)(e), Object(s.s)(e, 0), Object(s.m)(t), Object(s.n)(e, t), Object(s.v)(n), Object(s.x)(e, t), Object(s.y)(e)),
						subreddit: Object.assign({}, Object(r.a)(e), Object(r.b)(e))
					}, Object(c.a)(e)))
				},
				h = e => {
					Object(o.a)(Object.assign({
						noun: "history",
						source: a.b.ChatView,
						action: a.a.View,
						chat: Object.assign({}, Object(s.A)(e), Object(s.p)(e), Object(s.g)(e), Object(s.y)(e)),
						subreddit: Object.assign({}, Object(r.a)(e), Object(r.b)(e))
					}, Object(c.a)(e)))
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
						chat: Object.assign({}, Object(c.c)(e), Object(c.d)(e))
					}, Object(r.a)(e)))
				},
				l = (e, t) => {
					Object(a.a)(Object.assign({
						noun: "contact_add",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: Object.assign({}, Object(c.e)(e), Object(c.a)(e, t), Object(c.c)(e), Object(c.g)(e), Object(c.f)(e), Object(c.B)(e, t))
					}, Object(r.a)(e)))
				},
				d = e => {
					Object(a.a)(Object.assign({
						noun: "alert_invalid_user",
						source: s.b.ContactsList,
						action: s.a.View,
						chat: Object.assign({}, Object(c.A)(e), Object(c.c)(e), Object(c.d)(e), Object(c.g)(e), Object(c.B)(e, "search"), Object(c.f)(e))
					}, Object(r.a)(e)))
				},
				u = (e, t) => {
					Object(a.a)(Object.assign({
						noun: "alert_invalid_channel",
						source: s.b.ContactsList,
						action: s.a.View,
						chat: Object.assign({}, Object(c.A)(e), Object(c.c)(e), Object(c.d)(e), Object(c.g)(e), Object(c.B)(e, t), Object(c.f)(e))
					}, Object(r.a)(e)))
				},
				h = (e, t) => {
					Object(a.a)(Object.assign({
						noun: "create_chat",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: Object.assign({}, Object(c.A)(e, t), Object(c.c)(e), Object(c.d)(e), Object(c.g)(e, t), Object(c.f)(e))
					}, Object(r.a)(e)))
				},
				m = e => {
					Object(a.a)(Object.assign({
						noun: "close_contacts",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: Object.assign({}, Object(c.e)(e), Object(c.c)(e), Object(c.d)(e), Object(c.g)(e), Object(c.f)(e))
					}, Object(r.a)(e)))
				},
				b = e => {
					Object(a.a)(Object.assign({
						noun: "add_to_chat",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: Object.assign({}, Object(c.A)(e), Object(c.p)(e), Object(c.g)(e), Object(c.d)(e), Object(c.f)(e)),
						subreddit: Object.assign({}, Object(o.a)(e), Object(o.b)(e))
					}, Object(r.a)(e)))
				}
		},
		"./src/chat/tracking/events/invitationInbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
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
			const i = e => Object(a.a)(Object.assign({
					noun: "inbox",
					source: s.b.InvitationInbox,
					action: s.a.View,
					chat: Object.assign({}, Object(c.j)(e, "room"), Object(c.q)(e))
				}, Object(r.a)(e))),
				l = e => Object(a.a)(Object.assign({
					noun: "invitation",
					source: s.b.InvitationInbox,
					action: s.a.View,
					chat: Object.assign({}, Object(c.j)(e), Object(c.k)(e), Object(c.h)(e), Object(c.i)(e), Object(c.p)(e)),
					subreddit: Object.assign({}, Object(o.a)(e), Object(o.b)(e))
				}, Object(r.a)(e))),
				d = e => Object(a.a)(Object.assign({
					noun: "invitation_accept",
					source: s.b.InvitationInbox,
					action: s.a.Click,
					chat: Object.assign({}, Object(c.j)(e), Object(c.k)(e), Object(c.h)(e), Object(c.i)(e), Object(c.p)(e)),
					subreddit: Object.assign({}, Object(o.a)(e), Object(o.b)(e))
				}, Object(r.a)(e))),
				u = e => Object(a.a)(Object.assign({
					noun: "invitation_decline",
					source: s.b.InvitationInbox,
					action: s.a.Click,
					chat: Object.assign({}, Object(c.j)(e), Object(c.k)(e), Object(c.h)(e), Object(c.i)(e), Object(c.p)(e)),
					subreddit: Object.assign({}, Object(o.a)(e), Object(o.b)(e))
				}, Object(r.a)(e))),
				h = e => Object(a.a)(Object.assign({
					noun: "invitation_view_member",
					source: s.b.InvitationInbox,
					action: s.a.Click,
					chat: Object.assign({}, Object(c.j)(e), Object(c.k)(e), Object(c.h)(e), Object(c.i)(e), Object(c.p)(e)),
					subreddit: Object.assign({}, Object(o.a)(e), Object(o.b)(e))
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
						chat: Object.assign({}, Object(r.o)(e), Object(r.z)(e), Object(r.q)(e, !1))
					}, Object(o.a)(e)))
				},
				u = e => {
					Object(i.a)(Object.assign({
						noun: "rooms_inbox",
						source: l.b.MessageInbox,
						action: l.a.View,
						chat: Object.assign({}, Object(r.r)(e), Object(r.q)(e, !0))
					}, Object(o.a)(e)))
				},
				h = e => {
					Object(i.a)(Object.assign({
						noun: "create_chat",
						source: l.b.MessageInbox,
						action: l.a.Click,
						chat: Object.assign({}, Object(r.o)(e), Object(r.z)(e), Object(r.q)(e))
					}, Object(o.a)(e)))
				},
				m = e => {
					Object(i.a)(Object.assign({
						noun: "close_chat",
						source: l.b.MessageInbox,
						action: l.a.Click,
						chat: Object.assign({}, Object(r.o)(e), Object(r.q)(e))
					}, Object(o.a)(e), {
						actionInfo: Object.assign({}, c(e), Object(a.a)(e))
					}))
				},
				b = e => {
					Object(i.a)(Object.assign({
						noun: "rooms_tooltip_523",
						source: l.b.MessageInbox,
						action: l.a.View,
						chat: Object.assign({}, Object(r.o)(e), Object(r.q)(e))
					}, Object(o.a)(e)))
				},
				p = e => {
					Object(i.a)(Object.assign({
						noun: "dismiss_rooms_tooltip_523",
						source: l.b.MessageInbox,
						action: l.a.Click,
						chat: Object.assign({}, Object(r.o)(e), Object(r.q)(e))
					}, Object(o.a)(e)))
				},
				g = e => {
					Object(i.a)(Object.assign({
						noun: "minimize_chat",
						source: l.b.MessageInbox,
						action: l.a.Click,
						chat: Object.assign({}, Object(r.o)(e), Object(r.q)(e))
					}, Object(o.a)(e), {
						actionInfo: Object.assign({}, c(e), Object(a.a)(e))
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
						chat: Object.assign({}, Object(c.g)(e), Object(c.u)(e), Object(c.p)(e), Object(c.z)(e), Object(c.A)(e))
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
			})), n.d(t, "A", (function() {
				return b
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "E", (function() {
				return f
			})), n.d(t, "D", (function() {
				return O
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "x", (function() {
				return C
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "C", (function() {
				return E
			})), n.d(t, "z", (function() {
				return v
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "q", (function() {
				return S
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "t", (function() {
				return N
			})), n.d(t, "B", (function() {
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
			})), n.d(t, "w", (function() {
				return U
			})), n.d(t, "u", (function() {
				return R
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "d", (function() {
				return B
			})), n.d(t, "l", (function() {
				return H
			})), n.d(t, "y", (function() {
				return F
			})), n.d(t, "m", (function() {
				return K
			})), n.d(t, "v", (function() {
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
				f = (e, t) => {
					return {
						type: (t && t.length) > 2 ? a.Group : a.Direct
					}
				},
				O = (e, t) => {
					const {
						members: n
					} = E(e, t);
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
				_ = e => {
					const t = Object(l.k)(e);
					return {
						sender_user_id: t && t.inviter && t.inviter.id
					}
				},
				E = (e, t) => (t.push(e.user.account.id), {
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
				k = (e, t) => ({
					message_type: Object(u.g)(e, t) || "text"
				}),
				N = (e, t) => {
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
				R = e => {
					const t = Object(l.m)(e),
						n = !(!t || t.type !== i.a.Direct),
						a = Object(l.u)(e),
						s = a && a.length && a[0].id;
					return {
						recipient_user_id: n ? s : null
					}
				},
				P = (e, t) => {
					const n = Object(d.b)(e, t);
					return {
						recipient_user_id: n ? n.id : null
					}
				},
				B = e => {
					const t = Object(d.k)(e);
					return {
						recipient_user_id: 1 === t.length ? t[0] : null
					}
				},
				H = e => ({
					is_member: Object(l.O)(e)
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
				z = e => ({
					report_reason: e
				})
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
					user: Object(c.h)(e),
					screen: Object(c.f)(e),
					session: Object(c.g)(e),
					referrer: Object(c.e)(e),
					actionInfo: Object(c.a)(e)
				}),
				o = e => ({
					comment: Object(c.b)(e),
					post: Object(c.c)(e),
					profile: Object(c.d)(e)
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
							e.keyCode === l.D && this.props.onKeyDown(e)
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
				return f
			})), n.d(t, "a", (function() {
				return O
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
				f = e => {
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
						f = {
							bottom: c.bottom,
							center: c.top + c.height / 2,
							top: c.top
						} [o[1]] + {
							bottom: -i.height,
							center: -i.height / 2,
							top: 0
						} [l[1]],
						O = {
							left: c.left,
							center: c.left + c.width / 2,
							right: c.right
						} [o[0]] + {
							left: 0,
							center: -i.width / 2,
							right: -i.width
						} [l[0]];
					let j, C;
					s ? (j = f - u, C = O - h) : (C = m + h + O, j = b + u + f);
					const _ = {
							left: C,
							top: j
						},
						E = {
							bottom: Math.max(0, j + i.height - g),
							left: Math.max(0, 0 - C),
							right: Math.max(0, C + i.width - p),
							top: Math.max(0, 0 - j)
						};
					if (p > 320 && g > 667 && !r && (Boolean(E.left) !== Boolean(E.right) && (E.left ? _.left = 0 : _.left -= E.right), Boolean(E.top) !== Boolean(E.bottom) && (E.top ? _.top = 0 : _.top -= E.bottom)), a && t) {
						const e = t.getBoundingClientRect();
						_.top = _.top - e.top, _.left = _.left - e.left
					}
					return {
						overflow: E,
						style: _
					}
				};

			function O(e, t) {
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
							O = l.getBoundingClientRect(),
							j = f({
								container: t,
								containerHeight: a,
								excludeContainerPosition: o,
								isOverlayOff: d,
								isFixed: !!i,
								targetBox: O,
								targetPosition: u || p,
								tooltipSize: {
									height: m.height,
									width: m.width
								},
								tooltipPosition: h || g
							}),
							C = s()(e, "target", "targetPosition", "tooltipPosition"),
							_ = e.style ? Object.assign({}, j.style, e.style) : j.style;
						return r.a.createElement(n, b({}, C, {
							overflow: j.overflow,
							style: _,
							targetBox: O
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
			const o = (e, t, n) => {
					const a = n[t];
					class o extends s.a.PureComponent {
						render() {
							const t = this.props,
								{
									className: n,
									innerRef: o
								} = t,
								i = r(t, ["className", "innerRef"]);
							return s.a.createElement(e, Object.assign({}, i, {
								ref: o,
								className: Object(c.a)(a, n)
							}))
						}
					}
					return o.cssClassName = a, o.displayName = t, o
				},
				i = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noindex", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview", "svg", "animate", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "switch", "symbol", "text", "textPath", "tspan", "use", "view"].reduce((e, t) => (e[t] = (e, n) => o(t, e, n), e), {});
			t.a = Object.assign({}, i, {
				wrapped: (e, t, n) => {
					const a = n[t];
					class o extends s.a.PureComponent {
						render() {
							const t = this.props,
								{
									className: n
								} = t,
								o = r(t, ["className"]);
							return s.a.createElement(e, Object.assign({}, o, {
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
				return f
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "h", (function() {
				return E
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
				f = s()().tlds(r.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				O = m.normalize;
			m.normalize = e => {
				O.call(m, e), !e.schema && e.url.startsWith("http:") && (e.url = "https:".concat(e.url.slice(5)))
			};
			const j = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				C = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !d(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				E = e => {
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
//# sourceMappingURL=Chat~RedesignChat.10f038f34a2963e2ac11.js.map