// https://www.redditstatic.com/desktop2x/Chat~RedesignChat.853cf7bee38ca73aa665.js
// Retrieved at 5/25/2021, 1:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Chat~RedesignChat"], {
		"./src/chat/actions/apiRequestHeaders.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = "API_REQUEST_HEADERS__set"
		},
		"./src/chat/actions/channel.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return D
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "q", (function() {
				return B
			})), n.d(t, "p", (function() {
				return H
			})), n.d(t, "r", (function() {
				return F
			})), n.d(t, "h", (function() {
				return G
			})), n.d(t, "c", (function() {
				return W
			})), n.d(t, "v", (function() {
				return V
			})), n.d(t, "w", (function() {
				return K
			})), n.d(t, "x", (function() {
				return z
			})), n.d(t, "u", (function() {
				return q
			})), n.d(t, "k", (function() {
				return Z
			})), n.d(t, "l", (function() {
				return Q
			})), n.d(t, "i", (function() {
				return J
			})), n.d(t, "j", (function() {
				return X
			})), n.d(t, "a", (function() {
				return Y
			})), n.d(t, "b", (function() {
				return $
			})), n.d(t, "t", (function() {
				return ee
			})), n.d(t, "s", (function() {
				return te
			})), n.d(t, "n", (function() {
				return ne
			})), n.d(t, "o", (function() {
				return ae
			})), n.d(t, "m", (function() {
				return se
			})), n.d(t, "L", (function() {
				return re
			})), n.d(t, "K", (function() {
				return ce
			})), n.d(t, "y", (function() {
				return ie
			})), n.d(t, "C", (function() {
				return le
			})), n.d(t, "S", (function() {
				return me
			})), n.d(t, "R", (function() {
				return be
			})), n.d(t, "Q", (function() {
				return Ce
			})), n.d(t, "N", (function() {
				return _e
			})), n.d(t, "J", (function() {
				return je
			})), n.d(t, "B", (function() {
				return Ne
			})), n.d(t, "A", (function() {
				return ke
			})), n.d(t, "H", (function() {
				return Te
			})), n.d(t, "P", (function() {
				return Me
			})), n.d(t, "O", (function() {
				return De
			})), n.d(t, "E", (function() {
				return We
			})), n.d(t, "F", (function() {
				return Ke
			})), n.d(t, "G", (function() {
				return ze
			})), n.d(t, "D", (function() {
				return Ze
			})), n.d(t, "z", (function() {
				return Qe
			})), n.d(t, "M", (function() {
				return Je
			})), n.d(t, "I", (function() {
				return Xe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				r = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/config.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/chat/actions/members.ts"),
				l = n("./src/chat/actions/message/index.ts"),
				d = n("./src/chat/actions/message/unreadCount.ts"),
				u = (n("./src/chat/actions/platform.ts"), n("./src/chat/actions/sidebar.ts")),
				h = n("./src/chat/actions/tracking.ts"),
				m = n("./src/chat/actions/user.ts"),
				p = n("./src/chat/constants/batchSizes.ts"),
				b = n("./src/chat/constants/channels.ts"),
				g = n("./src/chat/constants/sendbird.ts"),
				f = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				C = n("./src/chat/endpoints/sendbird/index.ts"),
				E = n("./src/chat/helpers/errors.ts"),
				O = n("./src/chat/helpers/urls/index.ts"),
				v = n("./src/chat/models/Channel/index.ts"),
				_ = n("./src/chat/models/Channel/utils/index.ts"),
				j = n("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				y = n("./src/chat/models/User/inviter.ts"),
				I = n("./src/chat/models/User/member.ts");
			var x = n("./src/chat/selectors/channels.ts");
			const S = e => {
					const {
						channels: t
					} = e;
					return {
						channelId: t.invited.sortedKeys[0],
						channelAction: b.a.VIEW_INVITE
					}
				},
				w = e => {
					const {
						channels: t
					} = e;
					return {
						channelId: t.joined.sortedKeys[0]
					}
				},
				N = e => [S(e), w(e)],
				k = e => {
					const t = Object(x.j)(e);
					return {
						channelId: t && t.channelId
					}
				},
				T = e => e.find(e => !!e.channelId);
			var M = n("./src/chat/selectors/platform.ts"),
				A = n("./src/chat/selectors/promos.ts"),
				U = n("./src/chat/singleton/SendbirdSDK.ts");
			const D = "CHANNEL__ADD_SUCCESS",
				R = "CHANNEL__ADD_FAIL",
				L = "CHANNEL__CREATE_CHANNEL_START",
				P = "CHANNEL__CREATE_CHANNEL_END",
				B = "CHANNEL__SELECT_BEGIN",
				H = "CHANNEL__RESET_UNREAD_COUNT",
				F = "CHANNEL__SELECT_END",
				G = "CHANNEL__EXPAND_INVITE_LIST",
				W = "CHANNEL__COLLAPSE_INVITE_LIST",
				V = "CHANNEL__UPDATE_MODEL",
				K = "CHANNEL__INVITED_UPDATE",
				z = "CHANNEL__JOINED_UPDATE",
				q = "CHANNEL__SET_UPDATED_CHANNEL_ON_TOP",
				Z = "CHANNEL__FETCHING_JOINED_CHANNELS",
				Q = "CHANNEL__FETCHING_JOINED_CHANNELS_FAILED",
				J = "CHANNEL__FETCHING_INVITED_CHANNELS",
				X = "CHANNEL__FETCHING_INVITED_CHANNELS_FAILED",
				Y = "CHANNEL__ADD_EXISTING_INVITED_CHANNELS",
				$ = "CHANNEL__ADD_EXISTING_JOINED_CHANNELS",
				ee = "CHANNEL__SET_INVITED_CHANNEL_TO_JOINED",
				te = "CHANNEL__SET_EXISTING_CHANNELS_END",
				ne = "CHANNEL__REMOVE_CHANNEL",
				ae = "CHANNEL__RESET_CHANNEL_MESSAGE_LIST",
				se = "CHANNEL__FETCH_FIRST_MESSAGE",
				re = Object(o.a)(ne),
				ce = e => async t => {
					t(re({
						channelId: e
					}))
				}, oe = Object(o.a)(ee), ie = e => async (t, n, {
					apiContext: a
				}) => {
					const s = n(),
						{
							user: {
								session: c
							},
							contacts: {
								models: o
							}
						} = s;
					if (!e) throw new E.a("accepted channelId", e);
					if (!c) throw new E.a("session", c);
					const i = Object(x.j)(s),
						d = i && i.firstMessageId,
						u = !!(i && d && i.hasMoreMessages),
						h = Object(x.b)(s, o),
						m = Object(A.a)(s);
					if (h && m) return void t(Object(r.b)(Object(O.channelAction)(e, b.a.VIEW_NSFW_CONFIRMATION)));
					await Object(C.a)(a(), c, e), u && t(Object(l.s)(d)), t(oe({
						channelId: e
					}));
					const p = Object(O.getRedirectURL)(Object(O.channelUrl)(e));
					t(Object(r.b)(p))
				}, le = e => async (t, n, {
					apiContext: a
				}) => {
					const {
						user: {
							session: s
						}
					} = n();
					if (!s) throw new E.a("session", s);
					try {
						await Object(C.c)(a(), s, e)
					} catch (r) {
						return Object(E.b)(`Error declining channel: ${r.message}`)
					}
					t((e => async t => t(ce(e)))(e)), t(Object(d.b)()), t(Me(b.b.INVITED))
				}, de = Object(o.a)(K), ue = Object(o.a)(z), he = Object(o.a)(V), me = e => async t => {
					t(he({
						channel: e
					}))
				}, pe = e => async t => {
					await t(de({
						channel: e
					})), t((e => async (t, n) => {
						const a = n().user.account.id,
							s = e.members.filter(e => e.id !== a).map(e => e.id);
						t(Object(m.v)(s))
					})(e))
				}, be = (e, t) => async (n, a) => {
					if (e) {
						const r = a(),
							c = Object(x.g)(r, e.channelId);
						if (e.channelState !== b.b.INVITED && !c || t) return;
						if (e = ge(r, e), s()(e, c)) return;
						switch (e.channelState) {
							case b.b.INVITED:
								await n(pe(e));
								break;
							case b.b.JOINED:
								await n(ue({
									channel: e
								}));
								break;
							default:
								Object(E.b)("Error updating channel. ChannelState not found.")
						}
						n(Object(d.b)())
					}
				}, ge = (e, t) => {
					return Object(M.d)(e) === t.channelId && (t.unreadMessageCount = 0), t
				}, fe = Object(o.a)(q), Ce = e => async t => {
					const {
						channelId: n
					} = e;
					t(fe({
						channelId: n
					}))
				}, Ee = Object(o.a)(H), Oe = Object(o.a)(B), ve = Object(o.a)(F), _e = () => async (e, t) => {
					const n = t(),
						a = Object(M.d)(n),
						s = Object(M.c)(n),
						{
							CREATE: c,
							DENY: o,
							VIEW_JOIN: d
						} = b.a;
					if (!n.platform.currentPage) return;
					const {
						activeIndex: h
					} = n.sidebar;
					a && (await e(Object(u.e)({
						channelId: a,
						tabIndex: h
					})), e(Object(u.f)(!1))), await e(Object(i.f)());
					const m = a && Object(x.g)(n, a);
					if (!m && (s === o || s === c)) return;
					const p = !(!m || m.channelState !== b.b.JOINED);
					if (m && p && s && b.h.includes(s)) {
						const t = Object(O.getRedirectURL)(Object(O.channelUrl)(m.channelId));
						e(Object(r.b)(t))
					} else if (m && a) {
						e(Oe({
							channelId: a
						}));
						const t = await U.a.enterChannel(m, !1);
						if (t && !t.error) {
							const {
								messageListData: n
							} = t.data;
							await e(Object(l.p)(n, m.channelId)), await e(ve()), e(je(a))
						} else e(Object(l.B)()), e(ve())
					} else {
						const t = n.sendbird.sdk.connectionStatus === g.b.Open;
						if (!m && a && t) {
							const t = await U.a.addChannelModelByChannelId(a);
							if (t && !s) {
								const n = Object(O.getRedirectURL)(Object(O.channelAction)(t.channelId, d));
								return void e(Object(r.b)(n))
							}
						}
						e(De()), e(Object(l.B)())
					}
				}, je = e => async (t, n) => {
					const a = n(),
						s = e || Object(M.d)(a);
					s && (await t(Ee(s)), await U.a.markChannelAsRead(), t(Object(d.b)()))
				}, ye = Object(o.a)(L), Ie = Object(o.a)(D), xe = Object(o.a)(R), Se = Object(o.a)(P), we = (e, t, n) => {
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
				}, Ne = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					const c = a(),
						{
							user: {
								account: o,
								session: i
							},
							contacts: {
								models: l
							},
							channels: {
								joined: d,
								invited: u
							}
						} = c;
					if (o && i) {
						n(ye());
						const a = we(e, l, o);
						if (a.length < 2) return;
						const c = await Object(C.b)(s(), i, a, t);
						if (c.ok) {
							const t = function(e, t) {
									return {
										channelId: Object(j.a)(e.channel_url),
										channelSendbirdUrl: e.channel_url,
										channelState: Object(_.b)(t),
										fetchingFirstMessage: !1,
										fetchingMessages: !1,
										fetchingMessagesError: !1,
										hasMoreMessages: !1,
										isMessageListLoaded: !1,
										inviter: Object(y.b)(e.inviter),
										coverUrl: e.cover_url,
										createdAt: e.created_at,
										customType: e.custom_type,
										data: e.data,
										maxLengthMessage: -1,
										memberCount: e.member_count,
										name: e.name,
										type: Object(_.d)(e),
										lastMessage: void 0,
										unreadMessageCount: e.unread_message_count,
										unreadMentionCount: e.unread_mention_count,
										members: Object(I.a)(e.members)
									}
								}(c.body, b.b.JOINED),
								{
									channelId: a
								} = t,
								s = Object(O.getRedirectURL)(Object(O.channelUrl)(a));
							u.sortedKeys.includes(a) ? (n(ie(a)), n(Object(h.i)(e, a))) : d.sortedKeys.includes(a) ? (n(Object(r.b)(s)), n(Object(h.i)(e, a))) : (await n(Ie({
								[a]: t
							})), n(Object(h.i)(e, a)), n(Object(r.b)(s)))
						} else n(xe()), n(Object(h.B)(e));
						n(Se())
					}
				}, ke = e => async t => {
					e = e.slice(0, 1), await t(Object(m.v)(e)), t(Ne(e)), location.origin === c.a.oldRedditUrl && t(Object(h.j)(e))
				}, Te = e => async (t, n, {
					apiContext: a
				}) => {
					const s = n(),
						{
							user: {
								account: c,
								session: o
							},
							contacts: {
								models: i
							}
						} = s,
						l = Object(x.w)(s, "channelSendbirdUrl");
					if (c && o) {
						const n = we(e, i);
						(await Object(C.j)(a(), o, n, l)).body ? (t(Object(h.c)()), t(Object(r.a)())) : Object(E.b)("Error inviting user to existing channel")
					}
				}, Me = e => async (t, n) => {
					const a = n(),
						s = e === b.b.INVITED,
						r = S(a),
						c = w(a);
					s ? r.channelId ? t(Ue(r)) : t(Ue(c)) : c.channelId ? t(Ue(c)) : t(Ae())
				}, Ae = () => async (e, t) => {
					const n = t();
					if (n.channels.firstLoaded) {
						const t = ((e, t) => {
							const n = [...t ? [k(e)] : [], ...N(e)];
							return T(n)
						})(n, !!n.platform.currentPage);
						e(Ue(t))
					}
				}, Ue = e => async t => {
					if (e && e.channelId) {
						if (e.channelAction) {
							const n = Object(O.getRedirectURL)(Object(O.channelAction)(e.channelId, e.channelAction));
							t(Object(r.c)(n))
						} else {
							const n = Object(O.getRedirectURL)(Object(O.channelUrl)(e.channelId));
							t(Object(r.c)(n))
						}
						return
					}
					const n = Object(O.getRedirectURL)(O.rootUrl);
					t(Object(r.c)(n))
				}, De = e => async (t, n) => {
					const {
						platform: {
							currentPage: a
						}
					} = n();
					if (a && a.urlParams.userIds) {
						const e = a.urlParams.userIds.split(",");
						return t(ke(e))
					}
					if (e) return t(Me(e));
					const s = Object(f.b)(n());
					if (s) {
						const e = Object(x.g)(n(), s);
						if (e) {
							const n = Object(O.getChannelUrl)(e),
								a = Object(O.getRedirectURL)(n);
							return void t(Object(r.b)(a))
						}
					}
					return t(Ae())
				}, Re = Object(o.a)(J), Le = Object(o.a)(X), Pe = Object(o.a)(Z), Be = Object(o.a)(Q), He = Object(o.a)(Y), Fe = Object(o.a)($), Ge = Object(o.a)(te), We = () => async (e, t) => {
					await Promise.all([e(qe()), e(Ke()), e(ze())]);
					const n = t().channels.models;
					await e(Ve(n)), e(Ge()), e(_e())
				}, Ve = e => async t => {
					const n = Object(_.c)(e, [v.a.Direct, v.a.Group, v.a.Subreddit]);
					if (!n) return;
					const a = {};
					for (const e in n) {
						const t = n[e];
						t.channelState !== b.b.PARTIAL && (a[t.channelId] = t)
					}
					if (a) {
						const e = [];
						for (const t in a) a[t].members.map(t => e.push(t.id));
						t(Object(m.v)(e))
					}
				}, Ke = () => async (e, t) => {
					e(Re());
					const n = await U.a.getExistingChannels(b.b.INVITED).catch(() => null);
					if (n) {
						const {
							hasMoreChannels: t
						} = n, a = Object(v.d)(n.channels);
						return e(Ve(a)), void e(He({
							channels: a,
							hasMoreChannels: t
						}))
					}
					e(Le()), Object(E.b)("Error fetching invited channels")
				}, ze = () => async (e, t) => {
					e(Pe());
					const n = await U.a.getExistingChannels(b.b.JOINED).catch(t => {
						Object(E.b)(t), e(Be())
					});
					if (n) {
						const {
							hasMoreChannels: a
						} = n, s = Object(v.d)(n.channels), r = Object(x.q)(t());
						return e(Fe({
							channels: s,
							hasMoreChannels: a
						})), void(a && r < p.a.InitChannels && e(ze()))
					}
					e(Be())
				}, qe = () => async (e, t) => {
					const n = t(),
						a = Object(M.d)(n);
					a && await U.a.addChannelModelByChannelId(a)
				}, Ze = Object(o.a)(G), Qe = Object(o.a)(W), Je = Object(o.a)(ae), Xe = e => async (t, n) => {
					const a = n(),
						s = Object(x.w)(a, "channelState");
					U.a.leaveChannel().then(() => t(ce(e))).then(() => t(Me(s))).catch(e => Object(E.b)(`Error leaving channels: ${e.message}`))
				}
		},
		"./src/chat/actions/channel/dropdown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "b", (function() {
				return T
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/chat/actions/channel.ts"),
				c = n("./src/chat/actions/surveyTrigger/index.ts"),
				o = n("./src/chat/actions/tooltip.ts"),
				i = n("./src/chat/actions/tracking.ts"),
				l = n("./src/chat/constants/channels.ts"),
				d = n("./src/chat/endpoints/sendbird/index.ts"),
				u = n("./src/chat/helpers/errors.ts"),
				h = n("./src/chat/helpers/urls/index.ts"),
				m = n("./src/chat/selectors/channels.ts"),
				p = n("./src/chat/singleton/SendbirdSDK.ts");
			const {
				HIDE_CHANNEL: b,
				INVITE_MEMBERS: g,
				LEAVE: f,
				VIEW_MEMBERS: C
			} = l.a, E = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(m.s)(n),
					r = Object(h.getRedirectURL)(Object(h.channelAction)(s, g));
				e(Object(a.b)(r))
			}, O = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(m.s)(n),
					r = Object(h.getRedirectURL)(Object(h.channelAction)(s, f));
				e(Object(a.b)(r))
			}, v = e => async t => {
				t(Object(c.b)()), t(Object(o.c)({
					tooltipId: e
				})), t(Object(i.E)())
			}, _ = e => async t => {
				e && (t(Object(i.n)()), t(Object(i.r)()).then(() => {
					window.open(Object(h.viewProfileUrl)(e))
				}))
			}, j = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(m.s)(n),
					r = Object(h.getRedirectURL)(Object(h.channelAction)(s, C));
				e(Object(a.b)(r))
			}, y = "CHANNEL__UPDATE_CHANNEL_NAME", I = Object(s.a)(y), x = e => async (t, n) => {
				const a = Object(m.s)(n());
				if (a) {
					const n = {
							...a,
							name: e
						},
						s = {
							...a
						};
					t(I(n)), await p.a.updateChannel(n).catch(e => {
						Object(u.b)(e), t(I(s))
					})
				}
			}, S = ({
				channelId: e
			}) => async () => {
				p.a.setMyCountPreference(e, l.c.Off).catch(u.b)
			}, w = ({
				channelId: e
			}) => async () => {
				p.a.setMyCountPreference(e, l.c.All).catch(u.b)
			}, N = e => async (t, n, {
				apiContext: a
			}) => {
				await Promise.all([Object(d.l)(a(), e.channelId), p.a.setPushPreference(e.channelId, !0)]).then(() => {
					const a = Object(m.g)(n(), e);
					a && t(Object(r.R)({
						...a,
						isNotifsMuted: !0
					}))
				}).catch(u.b)
			}, k = e => async (t, n, {
				apiContext: a
			}) => {
				await Promise.all([Object(d.n)(a(), e.channelId), p.a.setPushPreference(e.channelId, !1)]).then(() => {
					const a = Object(m.g)(n(), e);
					a && t(Object(r.R)({
						...a,
						isNotifsMuted: !1
					}))
				}).catch(u.b)
			}, T = e => async (t, n) => {
				const s = n(),
					r = Object(m.g)(s, e);
				if (r) {
					const e = Object(h.getRedirectURL)(Object(h.channelAction)(r.channelId, b));
					t(Object(a.b)(e))
				} else Object(u.b)("Error opening the channel's hide confirmation flow")
			}
		},
		"./src/chat/actions/channel/messageQuickReply.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "MESSAGE_QUICK_REPLY_ADD_USER_ID", (function() {
				return r
			})), n.d(t, "MESSAGE_QUICK_REPLY_REMOVE_USER_ID", (function() {
				return c
			})), n.d(t, "messageQuickReplyAddUserIdAction", (function() {
				return o
			})), n.d(t, "messageQuickReplyRemoveUserIdAction", (function() {
				return i
			})), n.d(t, "removeUserIdFormQuickReplyListByChannelId", (function() {
				return l
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/selectors/channels.ts");
			const r = "CHANNEL__MESSAGE_QUICK_REPLY_ADD_USER_ID",
				c = "CHANNEL__MESSAGE_QUICK_REPLY_REMOVE_USER_ID",
				o = Object(a.a)(r),
				i = Object(a.a)(c),
				l = e => async (t, n) => {
					const a = n(),
						r = Object(s.m)(a, e);
					r && t(i(r))
				}
		},
		"./src/chat/actions/experiments/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return u
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/endpoints/users/index.ts");
			const r = "EXPERIMENTS__REQUEST_PENDING",
				c = "EXPERIMENTS__REQUEST_LOADED",
				o = "EXPERIMENTS__REQUEST_FAILED",
				i = Object(a.a)(c),
				l = Object(a.a)(r),
				d = Object(a.a)(o),
				u = e => async (t, n, {
					gqlContext: a
				}) => {
					t(l());
					const r = await Object(s.a)(a());
					if (r.ok) {
						const n = r.body;
						n.data.errors ? t(d({
							errors: n.data.errors
						})) : t(i({
							data: n.data,
							queryParams: null == e ? void 0 : e.match.queryParams
						}))
					}
				}
		},
		"./src/chat/actions/gifs/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "j", (function() {
				return I
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/actions/toast.ts"),
				r = n("./src/chat/constants/toast.ts"),
				c = n("./src/chat/endpoints/gifs/index.ts"),
				o = n("./src/chat/selectors/gifs.ts");
			const i = "GIF__SET_SEARCH_QUERY",
				l = "GIF__FETCH_TRENDING_START",
				d = "GIF__FETCH_TRENDING_SUCCESS",
				u = "GIF__FETCH_TRENDING_ERROR",
				h = "GIF__SEARCH_START",
				m = "GIF__SEARCH_SUCCESS",
				p = "GIF__SEARCH_ERROR",
				b = "GIF__CLEAR_ERROR",
				g = Object(a.a)(l),
				f = Object(a.a)(d),
				C = Object(a.a)(u),
				E = Object(a.a)(i),
				O = Object(a.a)(h),
				v = Object(a.a)(m),
				_ = Object(a.a)(p),
				j = Object(a.a)(b),
				y = e => async (t, n, {
					gqlContext: a
				}) => {
					const i = n(),
						l = Object(o.g)(i),
						d = Object(o.c)(i);
					if (!l || d) {
						t(g()), t(E(""));
						const n = await Object(c.b)(a(), {
							first: e
						});
						if ((null == n ? void 0 : n.ok) && !(null == n ? void 0 : n.error)) {
							const e = n.body,
								a = x(e);
							t(f(a))
						} else t(Object(s.e)({
							toast: r.a.SomethingWentWrong
						})), t(Object(s.c)(3)), t(C())
					}
				}, I = (e, t) => async (n, a, {
					gqlContext: i
				}) => {
					var l, d;
					if (!t) return;
					const u = a(),
						h = Object(o.c)(u),
						m = Object(o.b)(u),
						p = t === m,
						b = p ? null === (l = u.gifs.search.models[t]) || void 0 === l ? void 0 : l.pageInfo.endCursor : "";
					if ((null === (d = u.gifs.search.models[t]) || void 0 === d ? void 0 : d.ids.length) && !h && !p) n(j(t)), n(E(t));
					else if (Object(o.e)(u) || !b) {
						n(j(t)), n(O({
							query: t,
							cursor: b
						}));
						const a = await Object(c.c)(i(), {
							first: e,
							query: t,
							after: b
						});
						if ((null == a ? void 0 : a.ok) && !(null == a ? void 0 : a.error)) {
							const e = a.body,
								s = x(e, t);
							n(v({
								cursor: b,
								gifsData: s
							}))
						} else n(Object(s.e)({
							toast: r.a.SomethingWentWrong
						})), n(Object(s.c)(3)), n(_({
							cursor: b,
							query: t
						}))
					}
				}, x = (e, t = "") => {
					const n = e && e.data,
						a = n && n.gifs,
						s = a && a.pageInfo,
						r = a && a.edges;
					return {
						version: null == a ? void 0 : a.version,
						provider: null == a ? void 0 : a.provider,
						pageInfo: s,
						models: r.map(e => e.node),
						query: t
					}
				}
		},
		"./src/chat/actions/members.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "f", (function() {
				return j
			}));
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/endpoints/users/index.ts"),
				o = n("./src/chat/helpers/errors.ts"),
				i = n("./src/chat/models/User/index.ts"),
				l = n("./src/chat/selectors/channels.ts"),
				d = n("./src/chat/selectors/members.ts"),
				u = n("./src/chat/singleton/SendbirdSDK.ts");
			const h = "MEMBERS__FETCHING_MEMBERS",
				m = Object(r.a)(h),
				p = Object(r.a)("MEMBERS__FETCHING_MEMBERS_FAILED"),
				b = ({
					filter: e,
					loadMore: t
				}) => async (n, a) => {
					const s = a(),
						r = Object(l.t)(s);
					if (r) {
						n(m({
							channelId: r
						}));
						const a = e ? await u.a.getChannelMembersStartsWith(r, e).catch(e => Object(o.b)(`Error getting channel members: ${e.message}`)) : await u.a.getChannelMembers(r, t).catch(e => Object(o.b)(`Error getting subreddit channel members: ${e.message}`));
						if (a) {
							const {
								hasMoreMembers: e,
								members: t
							} = a;
							n(O(r, t, e))
						} else n(p())
					}
				}, g = "MEMBERS__FETCHING_MEMBERS_COMPLETED", f = Object(r.a)(g), C = "MEMBERS__ADD_CHANNEL_MEMBERS", E = Object(r.a)(C), O = (e, t, n) => async (a, r, {
					apiContext: o
				}) => {
					const l = t.map(e => e.userId),
						u = await Object(c.e)(o(), l);
					if (u.ok) {
						const n = r(),
							c = Object(i.a)(u.body),
							o = t.reduce((e, t) => {
								const {
									userId: a
								} = t, r = c[a];
								if (r) {
									const c = n.contacts.models[a],
										o = Object(d.e)(r, t, c),
										i = e[a];
									e[a] = s()(o, i) ? i : o
								}
								return e
							}, {});
						a(E({
							channelId: e,
							members: o
						}))
					}
					a(f({
						channelId: e,
						hasMoreMembers: n
					}))
				}, v = "MEMBERS__REMOVE_CHANNEL_MEMBERS", _ = Object(r.a)(v), j = () => async e => {
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
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/constants/batchSizes.ts"),
				o = n("./src/chat/selectors/channels.ts"),
				i = n("./src/chat/singleton/SendbirdSDK.ts");
			const l = e => async (t, n) => {
				const a = Object(o.t)(n()),
					r = (e => {
						return s()(e, "createAt").splice(0, e.length - c.a.Messages).map(e => e.messageId)
					})(e);
				a && (t(u({
					messageIdList: r
				})), t(m({
					channelId: a
				})), i.b.resetPreviousMessageListQuery())
			}, d = "MESSAGE__REMOVE_MESSAGES_FROM_CURRENT_CHANNEL", u = Object(r.a)(d), h = "CHANNEL__RESET_HAS_MORE_MESSAGES", m = Object(r.a)(h)
		},
		"./src/chat/actions/message/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return A
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "o", (function() {
				return B
			})), n.d(t, "q", (function() {
				return H
			})), n.d(t, "y", (function() {
				return F
			})), n.d(t, "m", (function() {
				return G
			})), n.d(t, "k", (function() {
				return V
			})), n.d(t, "x", (function() {
				return K
			})), n.d(t, "i", (function() {
				return Z
			})), n.d(t, "v", (function() {
				return J
			})), n.d(t, "b", (function() {
				return X
			})), n.d(t, "p", (function() {
				return $
			})), n.d(t, "l", (function() {
				return ee
			})), n.d(t, "B", (function() {
				return te
			})), n.d(t, "d", (function() {
				return ne
			})), n.d(t, "s", (function() {
				return ae
			})), n.d(t, "r", (function() {
				return se
			})), n.d(t, "j", (function() {
				return re
			})), n.d(t, "w", (function() {
				return oe
			})), n.d(t, "g", (function() {
				return ie
			})), n.d(t, "e", (function() {
				return le
			})), n.d(t, "f", (function() {
				return de
			})), n.d(t, "t", (function() {
				return pe
			})), n.d(t, "A", (function() {
				return be
			})), n.d(t, "z", (function() {
				return ge
			})), n.d(t, "n", (function() {
				return fe
			})), n.d(t, "C", (function() {
				return Ee
			})), n.d(t, "h", (function() {
				return Oe
			})), n.d(t, "u", (function() {
				return ve
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/flatten.js"),
				s = n.n(a),
				r = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/linkMatchers/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/chat/actions/channel.ts"),
				l = n("./src/chat/actions/channel/messageQuickReply.ts"),
				d = n("./src/chat/actions/tracking.ts"),
				u = n("./src/chat/constants/messages.ts"),
				h = n("./node_modules/lodash/isEmpty.js"),
				m = n.n(h),
				p = n("./src/config.ts"),
				b = n("./src/lib/constants/index.ts"),
				g = n("./src/lib/makeRequest/index.ts");
			const f = p.a.embedlyApiKey,
				C = e => e && e.length > 0 && e[0] ? e[0].url : void 0,
				E = e => e.filter(e => !m()(e)).map(e => ({
					name: e.provider_name,
					providerDisplay: e.provider_display,
					title: e.title,
					description: e.description,
					faviconUrl: e.favicon_url,
					imageUrl: C(e.images),
					url: e.url
				}));
			var O = n("./src/chat/actions/message/richUnit.ts"),
				v = n("./src/chat/actions/surveyTrigger/index.ts"),
				_ = n("./src/chat/endpoints/gifs/index.ts"),
				j = n("./src/chat/endpoints/sendbird/index.ts"),
				y = n("./src/chat/helpers/errors.ts"),
				I = n("./src/chat/helpers/urls/index.ts"),
				x = n("./src/chat/models/Message/index.ts"),
				S = n("./src/chat/models/Message/adapter.ts"),
				w = n("./src/chat/selectors/app.ts"),
				N = n("./src/chat/selectors/channels.ts"),
				k = n("./src/chat/selectors/contacts.ts"),
				T = n("./src/chat/selectors/messages.ts"),
				M = n("./src/chat/singleton/SendbirdSDK.ts");
			const A = "MESSAGE__ADD_ONE",
				U = Object(o.a)(A),
				D = (e, t, n) => async (a, s) => {
					const r = s(),
						c = Object(S.b)(n),
						o = await R(t, r);
					M.a.addMessage(t, n, o).then(t => {
						const n = {
							[t.messageId]: t
						};
						a(U({
							message: n,
							channelId: e,
							clientMessageId: c
						})), a(Object(d.y)(t.messageId)), a(Object(O.c)(t))
					}).catch(e => {
						if (c) {
							const t = `${e.code}: ${e.message}`;
							a(Object(d.D)(c, t)), a(W({
								clientMessageId: c,
								toggle: !0
							}))
						}
					})
				}, R = async (e, t) => {
					const n = Object(c.d)(e);
					if (!n.length) return [];
					const a = [];
					return [...n.map(e => {
						const n = Object(k.f)(t, e);
						return n || a.push(e), n && n.id
					}).filter(e => e), ...(a.length && s()(await Promise.all(a.slice(0, 3).map(e => M.a.searchMemberByName(e, !0)))) || []).map(e => e && e.id).filter(e => e)]
				}, L = "MESSAGE__ADD_PENDING_ONE", P = Object(o.a)(L), B = (e, t) => async (n, a, {
					gqlContext: s
				}) => {
					const r = a(),
						c = {
							height: t.downsized.dimensions.height,
							width: t.downsized.dimensions.width,
							id: t.id,
							title: t.title,
							url: t.downsized.url
						},
						o = Object(x.b)(r, e, JSON.stringify(c), u.c.GIF),
						i = {
							channelId: e,
							messageData: o.data,
							message: t.downsized.url
						};
					await n(P(o)), Object(_.a)(s(), {
						input: i
					})
				}, H = (e, t, n) => async (a, s) => {
					var r;
					const o = s(),
						i = c.b.match(t),
						d = 1 === (null == i ? void 0 : i.length) && 1 === t.trim().split(" ").length;
					if (Object(I.isRedditLink)(null === (r = null == i ? void 0 : i[0]) || void 0 === r ? void 0 : r.url) && d) a(z(e, t));
					else if (d) a(q(e, t));
					else {
						const s = Object(x.b)(o, e, t, n);
						a(P(s)), a(D(e, t, s.data))
					}
					a(Object(l.removeUserIdFormQuickReplyListByChannelId)(e))
				}, F = (e, t) => async (n, a) => {
					const s = a(),
						r = Object(T.i)(s, t);
					r && (n(W({
						clientMessageId: t,
						toggle: !1
					})), n(D(e, r.messageData.value, r.data)))
				}, G = "MESSAGE__TOGGLE_PENDING_MESSAGE_ERROR", W = Object(o.a)(G), V = "MESSAGE__REMOVE_PENDING_ONE", K = Object(o.a)(V), z = (e, t) => async (n, a) => {
					const s = a(),
						r = Object(I.getChatUnitType)(t),
						c = Object(x.b)(s, e, t, r.type);
					c && (n(P(c)), n(D(e, c.messageData.value, c.data)))
				}, q = (e, t) => async (n, a) => {
					const s = a(),
						r = c.f.match(t);
					if (!r.length || r.length > 1) return Object(y.b)(`We only support 1 link per text but ${r.length} given`);
					const o = r[0].url,
						i = u.c.EMBED;
					let l = {
						url: t
					};
					const d = Object(x.b)(s, e, JSON.stringify(l), i);
					if (d) {
						n(P(d));
						const t = await (async ({
							chars: e,
							scheme: t,
							url: n
						}) => Object(g.b)({
							endpoint: "https://api.embed.ly/1/extract",
							method: b.eb.GET,
							data: {
								key: f,
								url: n,
								scheme: t,
								chars: e
							}
						}).then(e => e.ok && Array.isArray(e.body) ? e.body : [e.body]).then(E))({
							url: o,
							scheme: "https",
							chars: 140
						});
						if (t) {
							l = {
								...l,
								embed: {
									...t[0],
									url: o
								}
							};
							const a = JSON.stringify(l),
								s = JSON.stringify(Object(S.a)(a, i, d.clientMessageId));
							n(D(e, l.url, s))
						}
					}
				}, Z = "MESSAGE__RECEIVE_ADD_ONE", Q = Object(o.a)(Z), J = e => async (t, n) => {
					const {
						messageId: a,
						messageData: {
							clientMessageId: s
						}
					} = e, r = n(), c = Object(N.t)(r) === e.channelId;
					Object(w.b)(r) && c && t(Object(i.J)(e.channelId)), await t(Q({
						[a]: e
					})), t(Object(d.A)(s, a)), t(Object(O.c)(e))
				}, X = "MESSAGE__ADD_LIST", Y = Object(o.a)(X), $ = (e, t) => async n => {
					n(Y({
						channelId: t,
						...e
					})), n(Object(O.d)(e)), n(Object(v.b)())
				}, ee = "MESSAGE__SET_MESSAGE_LIST_IS_LOADED", te = Object(o.a)(ee), ne = "MESSAGE__DELETE_ONE", ae = Object(o.a)(ne), se = e => async (t, n) => {
					const a = n(),
						s = Object(T.d)(a, e);
					s && s.messageType === u.d.USER && M.a.deleteMessage(s).then(() => t(ae(s.messageId))).then(() => t(Object(r.a)()))
				}, re = "MESSAGE__RECEIVE_DELETE_ONE", ce = Object(o.a)(re), oe = e => async (t, n) => {
					t(ce(e))
				}, ie = "MESSAGE__GET_PREVIOUS_MESSAGES_START", le = "MESSAGE__GET_PREVIOUS_MESSAGES_END", de = "MESSAGE__GET_PREVIOUS_MESSAGES_ERROR", ue = Object(o.a)(ie), he = Object(o.a)(le), me = Object(o.a)(de), pe = e => async (t, n) => {
					const a = Object(N.w)(n(), "channelId");
					t(ue(a)), t(Object(d.G)()), a && await M.a.getPreviousMessages(e).then(e => {
						t(he({
							channelId: a,
							...e
						})), t(Object(O.d)(e))
					}).catch(() => t(me(a)))
				}, be = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					try {
						await Object(j.i)(s(), t, e)
					} catch (r) {
						Object(y.b)(r)
					}
				}, ge = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					try {
						await Object(j.d)(s(), t, e)
					} catch (r) {
						Object(y.b)(r)
					}
				}, fe = "MESSAGE__UNCOLLAPSE", Ce = Object(o.a)(fe), Ee = e => async t => {
					t(Ce(e))
				}, Oe = "MESSAGE__HIDE_REPORT_PROMPT_FOR_COLLAPSE_MESSAGE", ve = Object(o.a)(Oe)
		},
		"./src/chat/actions/message/richUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			}));
			var a = n("./node_modules/lodash/uniq.js"),
				s = n.n(a),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/constants/messages.ts"),
				o = n("./src/graphql/operations/ChatUnitDetails.json"),
				i = n("./src/lib/makeGqlRequest/index.ts");
			var l = n("./src/lib/constants/index.ts");
			const d = "MESSAGE__UNITS_DATA_RECEIVED",
				u = "MESSAGE__RESET_RICH_UNITS_DATA_RECEIVED",
				h = Object(r.a)(d),
				m = (e, t) => {
					var n, a, s, r;
					const {
						messageId: o
					} = t;
					if ((null === (n = null == t ? void 0 : t.messageData) || void 0 === n ? void 0 : n.type) === c.c.POST || (null === (a = null == t ? void 0 : t.messageData) || void 0 === a ? void 0 : a.type) === c.c.COMMENT || (null === (s = null == t ? void 0 : t.messageData) || void 0 === s ? void 0 : s.type) === c.c.SUBREDDIT || (null === (r = null == t ? void 0 : t.messageData) || void 0 === r ? void 0 : r.type) === c.c.USER_POST) {
						const {
							chatUnitId: n,
							type: a
						} = t.messageData;
						e[a].push({
							messageId: o,
							chatUnitId: n
						})
					}
				},
				p = e => async t => {
					const n = {
						post: [],
						userPost: [],
						comment: [],
						subreddit: []
					};
					m(n, e), t(g(n))
				}, b = e => async (t, n) => {
					const a = {
						post: [],
						userPost: [],
						comment: [],
						subreddit: []
					};
					for (const s in e.messages) {
						const t = e.messages[s];
						m(a, t)
					}
					t(g(a))
				}, g = e => async (t, n, {
					gqlContext: a
				}) => {
					const r = {
							commentsIds: [],
							includeComments: !1,
							includePosts: !1,
							includeUserPosts: !1,
							includeSubreddits: !1,
							maxWidth: 320,
							postsIds: [],
							subredditsNames: [],
							userPostsIds: []
						},
						d = e => e.startsWith(l.Cb.Comment) || e.startsWith(l.Cb.Post);
					for (const o in e) {
						const t = s()(e[o].reduce((e, t) => t.chatUnitId && (d(t.chatUnitId) || "subreddit" === o) && e.push(t.chatUnitId) && e || e, []));
						switch (o) {
							case c.c.POST:
								t.length && (r.postsIds = t, r.includePosts = !0);
								break;
							case c.c.USER_POST:
								t.length && (r.userPostsIds = t, r.includeUserPosts = !0);
								break;
							case c.c.COMMENT:
								t.length && (r.commentsIds = t, r.includeComments = !0);
								break;
							case c.c.SUBREDDIT:
								t.length && (r.subredditsNames = t, r.includeSubreddits = !0)
						}
					}
					if (r.includePosts || r.includeComments || r.includeUserPosts || r.includeSubreddits) {
						const e = await ((e, t) => Object(i.a)(e, {
							...o,
							variables: t
						}))(a(), r);
						if (null == e ? void 0 : e.ok) {
							const n = e => Boolean(e && e.id && e.postInfo && e.postInfo.subreddit && e.authorInfo && e.authorInfo.displayName),
								a = e => Boolean(e && e.id && e.title && e.url && e.authorInfo && e.authorInfo.displayName),
								s = e => a(e),
								r = e => a(e),
								o = e => Boolean(e && e.id && e.title && e.subredditType),
								i = e.body;
							if ((e => Boolean(e && e.data && (e.data.comments || e.data.posts || e.data.userPosts || e.data.subreddits)))(i)) {
								const e = i.data;
								e.comments && (e.comments = e.comments.filter(n).map(e => {
									var t;
									return (null === (t = null == e ? void 0 : e.postInfo) || void 0 === t ? void 0 : t.subreddit) && {
										...e,
										type: c.c.COMMENT
									}
								})), e.posts && (e.posts = e.posts.filter(s).map(e => ({
									...e,
									type: c.c.POST
								}))), e.userPosts && (e.userPosts = e.userPosts.filter(r).map(e => ({
									...e,
									type: c.c.USER_POST
								}))), e.subreddits && (e.subreddits = e.subreddits.filter(o).map(e => ({
									...e,
									type: c.c.SUBREDDIT
								}))), t(h(e))
							}
						}
					}
				}, f = Object(r.a)(u)
		},
		"./src/chat/actions/message/unreadCount.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return b
			}));
			var a = n("./node_modules/lodash/debounce.js"),
				s = n.n(a),
				r = n("./node_modules/lodash/isEqual.js"),
				c = n.n(r),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/chat/endpoints/sendbird/index.ts"),
				d = n("./src/chat/helpers/errors.ts"),
				u = n("./src/chat/selectors/user.ts");
			const h = "MESSAGE__SET_UNREAD_COUNT",
				m = Object(i.a)(h),
				p = async (e, t) => {
					const n = Object(u.c)(e);
					if (n) try {
						const e = await Object(l.h)(t(), n);
						return (e => ({
							basicChannelCount: e && Number(e.unread_count) || 0,
							subredditChannelCount: e && Number(e.subreddit_unread_count) ? 1 : 0,
							subredditMentionCount: e && Number(e.subreddit_mention_count) || 0
						}))(e && e.body)
					} catch (a) {
						Object(d.b)(`Error getting proxy unread count: ${a}`)
					}
				}, b = s()((e, t, n) => async (a, s, {
					apiContext: r
				}) => {
					const o = s();
					let i;
					(i = "number" == typeof e || "number" == typeof t || "number" == typeof n ? {
						basicChannelCount: e || 0,
						subredditChannelCount: t || 0,
						subredditMentionCount: n || 0
					} : await p(o, r)) && !c()(o.messages.unread, i) && await a(m(i))
				}, o.Kb, {
					leading: !0
				})
		},
		"./src/chat/actions/meta.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "META_RECEIVED", (function() {
				return s
			})), n.d(t, "metaReceived", (function() {
				return r
			})), n.d(t, "SET_EXTERNAL_DATA", (function() {
				return c
			})), n.d(t, "setExternalData", (function() {
				return o
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			const s = "META__META_RECEIVED",
				r = Object(a.a)(s),
				c = "META__SET_EXTERNAL_DATA",
				o = Object(a.a)(c)
		},
		"./src/chat/actions/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var a = n("./node_modules/lodash/noop.js"),
				s = n.n(a),
				r = n("./src/lib/notifications/token.ts"),
				c = n("./src/lib/notifications/index.ts"),
				o = n("./src/lib/notifications/constants.ts"),
				i = n("./src/chat/selectors/app.ts"),
				l = n("./src/chat/tracking/fields/common.ts"),
				d = n("./src/telemetry/index.ts"),
				u = n("./src/telemetry/models/Event.ts");
			const h = e => ({
					...Object(l.a)(e),
					noun: "desktop_notification_permissions"
				}),
				m = (e, t, n) => ({
					...Object(l.a)(e),
					actionInfo: {
						success: t,
						reason: n
					},
					noun: "push_token"
				}),
				p = (e, t) => async (n, a, l) => {
					if (Object(i.d)(a())) return;
					(e => {
						Object(d.a)({
							...m(e, !0),
							action: u.c.Request,
							source: u.b.Notification
						})
					})(a()), Object(c.a)(e, t, () => {
						n(Object(o.n)()), n(Object(o.m)()), (e => {
							Object(d.a)({
								...h(e),
								action: u.c.View,
								source: u.b.Popup
							})
						})(a())
					}, (e, t) => {
						n(Object(o.k)()), e && (t ? (e => {
							Object(d.a)({
								...h(e),
								action: u.c.Block,
								source: u.b.Popup
							})
						})(a()) : (e => {
							Object(d.a)({
								...h(e),
								action: u.c.Close,
								source: u.b.Popup
							})
						})(a()))
					}, () => {
						n(Object(o.l)()), Object(r.b)(l.gqlContext), (e => {
							Object(d.a)({
								...h(e),
								action: u.c.Allow,
								source: u.b.Popup
							})
						})(a())
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
			var a = n("./src/chat/actions/channel.ts"),
				s = n("./src/chat/actions/sidebar.ts"),
				r = n("./src/chat/actions/user.ts"),
				c = n("./src/chat/selectors/platform.ts");

			function o(e) {
				return t => async (n, a, o) => {
					const i = Object(c.e)(a());
					n(Object(s.d)(i)), await Object(r.l)()(n, a, o), await Object(r.o)()(n, a, o), await e(t)(n, a, o)
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
			var a = n("./src/lib/areUrlsEqual/index.ts"),
				s = n("./src/lib/logs/timing.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/actions/channel.ts"),
				o = n("./src/chat/actions/sendbird/index.ts");
			const i = "PLATFORM__HISTORY_LOCATION_SET",
				l = "PLATFORM__INITIAL_REFERRER_SET",
				d = "PLATFORM__PAGE_META_SET",
				u = (e, t, n) => async (r, i, l) => {
					const d = Date.now(),
						u = i().platform.currentPage;
					if (n && (r(h({
							action: t,
							location: e,
							routeMatch: n
						})), !u || !Object(a.a)(u.url, e))) {
						if (n) {
							const {
								match: e
							} = n;
							await n.route.action(e)(r, i, l);
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
						n.match.params.subredditName && r(Object(o.l)()), n.match.params.channelId && r(Object(c.N)())
					}
				}, h = Object(r.a)(i)
		},
		"./src/chat/actions/sendbird/config.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
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
			const r = "SENDBIRD_CONFIG__PROXY",
				c = Object(a.a)(r),
				o = "SENDBIRD_CONFIG__GLOBAL_SETTINGS",
				i = Object(a.a)(o),
				l = "SENDBIRD_CONFIG__USER_EXPERIMENTS",
				d = Object(a.a)(l),
				u = () => async (e, t, {
					apiContext: n
				}) => {
					const a = await Object(s.e)(n());
					a.ok && await Promise.all([e(c({
						host: a.body.proxy_host
					})), e(i({
						maxMessageLength: parseInt(a.body.max_message_length, 10)
					})), e(d({
						userSubredditChatEnabled: a.body.user_subreddit_chat_enabled
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
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "l", (function() {
				return T
			}));
			var a = n("./src/lib/cache/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/actions/tracking.ts"),
				o = n("./src/chat/endpoints/accounts/index.ts"),
				i = n("./src/chat/endpoints/sendbird/index.ts"),
				l = n("./src/chat/models/Contact/index.ts"),
				d = n("./src/chat/selectors/contacts.ts"),
				u = n("./src/chat/selectors/experiments.ts");
			const h = "SENDBIRD__DEACTIVATE_SENDBIRD_SESSION",
				m = "SENDBIRD__ACTIVATE_SENDBIRD_SESSION",
				p = Object(r.a)(h),
				b = "SENDBIRD__SET_SENDBIRD_SESSION",
				g = Object(r.a)(b),
				f = (e = !0) => async (t, n, {
					apiContext: r
				}) => {
					const c = n(),
						{
							account: o,
							session: l
						} = c.user;
					if (l && o) {
						let n;
						const c = Object(a.c)(s.o.CHAT, "session", o.id),
							d = Object(a.b)(c);
						if (d && d.token) n = d;
						else {
							const e = await Object(i.g)(r(), l);
							if (e.ok) {
								const {
									valid_until: t,
									sb_access_token: s
								} = e.body;
								n = {
									expires: t,
									token: s
								}, Object(a.d)(c, n, new Date(t))
							}
						}
						if (n) return void t(g({
							...n,
							active: e
						}))
					}
					t(p())
				}, C = "SENDBIRD__ADD_MEMBERS_TO_KNOWN_CONTACTS", E = Object(r.a)(C), O = "SENDBIRD__SET_REDDIT_CONTACT_LIST", v = 6 * s.L, _ = Object(r.a)(O), j = () => async (e, t, {
					apiContext: n
				}) => {
					const r = t(),
						c = r.contacts.models,
						o = Object(a.c)(s.o.CHAT, "contacts", r.user.account.id),
						d = Object(a.b)(o);
					if (d && d.version === l.a) return void e(_(d.data));
					const u = t().user.session;
					if (!u) return;
					const h = await Object(i.f)(n(), u, 25),
						m = Object(l.c)(h.body).map(e => c[e.id] ? c[e.id] : e),
						p = {
							version: l.a,
							data: m
						};
					Object(a.d)(o, p, v), e(_(m))
				}, y = "SENDBIRD__IDENTIFY_CONTACT_BEGIN", I = "SENDBIRD__IDENTIFY_CONTACT_END", x = Object(r.a)(y), S = Object(r.a)(I), w = e => async (t, n, {
					apiContext: a
				}) => {
					if (e.username === s.A) return;
					Object(d.c)(n(), e.username) || (t(x({
						username: e.username
					})), Object(o.b)(a(), e.username).then(n => {
						if (n.ok) {
							const a = Object(l.d)(n.body.data);
							if (a) return t(S({
								username: e.username,
								contact: a,
								valid: !0
							}))
						} else t(Object(c.C)(e.username));
						t(S({
							username: e.username,
							valid: !1
						}))
					}))
				}, N = "SENDBIRD__OPT_IN", k = Object(r.a)(N), T = () => async (e, t, {
					apiContext: n
				}) => {
					Object(u.c)(t()) || (e(k({
						userSubredditChatEnabled: !0
					})), Object(i.m)(n()))
				}
		},
		"./src/chat/actions/sendbird/sdk.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "g", (function() {
				return y
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/actions/channel.ts"),
				r = n("./src/chat/actions/message/index.ts"),
				c = n("./src/chat/actions/message/unreadCount.ts"),
				o = n("./src/chat/actions/sendbird/index.ts"),
				i = n("./src/chat/actions/toast.ts"),
				l = n("./src/chat/constants/sendbird.ts"),
				d = n("./src/chat/constants/toast.ts"),
				u = n("./src/chat/selectors/sendbird.ts"),
				h = n("./src/chat/selectors/user.ts"),
				m = n("./src/chat/singleton/SendbirdSDK.ts");
			const p = "SENDBIRD_SDK__CONNECT_FAIL",
				b = "SENDBIRD_SDK__CONNECT_SUCCESS",
				g = "SENDBIRD_SDK__DISCONNECT",
				f = "SENDBIRD_SDK__UPDATE_CONNECTION_STATUS",
				C = Object(a.a)(p),
				E = Object(a.a)(b),
				O = e => async (t, n) => {
					const a = n(),
						o = Object(u.d)(a),
						p = Object(u.c)(a),
						b = Object(u.b)(a),
						g = Object(h.d)(a),
						f = {
							connectionStatus: l.b.Closed
						};
					if (g && b && p) {
						const {
							id: n
						} = g;
						o && t(Object(i.e)({
							toast: d.a.ConnectionPending
						})), e = e || p.token, m.a.connect(b, e, n, t).then(e => {
							if (e.error) t(C(e.error)), t(j({
								...f
							})), t(Object(i.e)({
								toast: d.a.ConnectionClosed
							}));
							else {
								if (t(E()), o) {
									const e = !0;
									t(Object(r.t)(e)), t(Object(i.e)({
										toast: d.a.ConnectionOpen
									})), t(Object(i.c)(3))
								}
								t(Object(c.b)()), t(Object(s.E)())
							}
						})
					}
				}, v = Object(a.a)(g), _ = () => async e => {
					m.a.disconnect().then(() => {
						e(v()), e(Object(o.j)())
					})
				}, j = Object(a.a)(f), y = () => m.a.reconnect()
		},
		"./src/chat/actions/session.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return u
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts");
			const c = "SESSION__USER_AUTHENTICATED",
				o = "SESSION__USER_LOGGED_OUT",
				i = "SESSION__USER_REAUTHENTICATED",
				l = (Object(a.a)(c), Object(a.a)(i)),
				d = Object(a.a)(o),
				u = () => async (e, t, {
					apiContext: n
				}) => {
					const a = t().user.session;
					if (a) {
						const t = await ((e, t) => Object(r.a)(e, {
							data: t,
							endpoint: "/refreshproxy",
							method: s.eb.POST
						}))(n(), a);
						if (t.ok) {
							const n = t.body;
							if (n.unsafeLoggedOut) return void(a.unsafeLoggedOut || e(d()));
							e(l(n))
						}
					}
				}
		},
		"./src/chat/actions/sidebar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			const s = "SIDEBAR__SET_SIDEBAR_ACTIVE_INDEX",
				r = Object(a.a)(s),
				c = e => async (t, n) => {
					const a = n();
					e !== a.sidebar.activeIndex && t(r({
						activeIndex: e
					}))
				}, o = "SIDEBAR__SET_LAST_CHANNEL_ID_PER_TAB", i = Object(a.a)(o), l = "SIDEBAR__TOGGLE_SIDEBAR", d = Object(a.a)(l)
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
				r = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts");
			var i = n("./node_modules/fbt/lib/FbtPublic.js");
			const l = "SITEWIDE_RULES_LOADED",
				d = Object(a.a)(l),
				u = () => async (e, t, {
					apiContext: n
				}) => {
					const a = t();
					if (!a.user || !a.user.language) return;
					if (a.sitewideRules && a.sitewideRules.length) return;
					const l = await (e => Object(r.a)(Object(c.a)(e, [o.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: s.eb.GET
					}))(n());
					if (l.ok) {
						const {
							sitewide_rules: t
						} = l.body;
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
		"./src/chat/actions/surveyTrigger/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			let s, r;
			const c = "REDDIT__START_SURVEY",
				o = Object(a.a)(c),
				i = (e = 8e3) => async t => {
					r || (s && clearTimeout(s), s = setTimeout(() => {
						t(o()), r = !0
					}, e))
				}
		},
		"./src/chat/actions/theme.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "THEME_CHANGED", (function() {
				return r
			})), n.d(t, "themeToggle", (function() {
				return l
			})), n.d(t, "switchTheme", (function() {
				return d
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/constants/theme.ts");
			const r = "THEME_CHANGED",
				{
					REDDIT: c,
					NIGHT: o
				} = s.b,
				i = Object(a.a)(r),
				l = () => async (e, t) => {
					const {
						globalTheme: n
					} = t().user.prefs;
					e(i({
						themeKey: n === c ? o : c
					}))
				}, d = e => async (t, n) => {
					t(i({
						themeKey: e ? o : c
					}))
				}
		},
		"./src/chat/actions/toast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/constants/index.ts");
			const r = "TOAST__RESET_TOAST",
				c = Object(a.a)(r),
				o = "TOAST__UPDATE_TOAST",
				i = Object(a.a)(o),
				l = e => async (t, n) => {
					setTimeout(() => t(c()), e * s.Kb)
				}
		},
		"./src/chat/actions/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return o
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			const s = "TOOLTIP__DROPDOWN_TOGGLED",
				r = "TOOLTIP__DROPDOWN_UNSET",
				c = Object(a.a)(s),
				o = Object(a.a)(r)
		},
		"./src/chat/actions/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "y", (function() {
				return _
			})), n.d(t, "D", (function() {
				return j
			})), n.d(t, "z", (function() {
				return y
			})), n.d(t, "G", (function() {
				return I
			})), n.d(t, "E", (function() {
				return x
			})), n.d(t, "w", (function() {
				return S
			})), n.d(t, "r", (function() {
				return w
			})), n.d(t, "o", (function() {
				return N
			})), n.d(t, "x", (function() {
				return k
			})), n.d(t, "g", (function() {
				return T
			})), n.d(t, "C", (function() {
				return M
			})), n.d(t, "B", (function() {
				return A
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "n", (function() {
				return B
			})), n.d(t, "k", (function() {
				return H
			})), n.d(t, "f", (function() {
				return F
			})), n.d(t, "j", (function() {
				return G
			})), n.d(t, "d", (function() {
				return W
			})), n.d(t, "p", (function() {
				return V
			})), n.d(t, "H", (function() {
				return K
			})), n.d(t, "s", (function() {
				return z
			})), n.d(t, "t", (function() {
				return q
			})), n.d(t, "F", (function() {
				return Z
			})), n.d(t, "v", (function() {
				return Q
			})), n.d(t, "b", (function() {
				return J
			})), n.d(t, "u", (function() {
				return X
			})), n.d(t, "q", (function() {
				return Y
			})), n.d(t, "A", (function() {
				return $
			}));
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/components/MessageInput/index.tsx"),
				r = n("./src/chat/constants/channels.ts"),
				c = n("./src/chat/selectors/channels.ts"),
				o = n("./src/chat/selectors/contacts.ts"),
				i = n("./src/chat/selectors/gifs.ts"),
				l = n("./src/chat/selectors/messages.ts"),
				d = n("./src/chat/selectors/platform.ts"),
				u = n("./src/chat/tracking/fields/chat.ts"),
				h = n("./src/chat/tracking/fields/common.ts"),
				m = n("./src/chat/tracking/sendEvent.ts");
			var p = n("./src/chat/tracking/events/chatView.ts"),
				b = n("./src/chat/tracking/events/contactsList.ts"),
				g = n("./src/chat/tracking/events/invitationInbox.ts"),
				f = n("./src/chat/tracking/events/messagesInbox.ts"),
				C = n("./src/chat/selectors/telemetry.ts");
			var E, O;
			! function(e) {
				e.AWARD_RECEIVED = "award_received"
			}(E || (E = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND", e[e.THIRD = 3] = "THIRD"
			}(O || (O = {}));
			const v = () => async (e, t) => {
				Object(f.b)(t())
			}, _ = e => async (t, n) => {
				Object(p.c)(n(), e)
			}, j = (e, t) => async (n, a) => {
				Object(p.f)(a(), e, t)
			}, y = (e, t) => async (n, a) => {
				Object(p.d)(a(), e, t)
			}, I = () => async (e, t) => {
				Object(p.g)(t())
			}, x = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "chat_settings",
					source: a.b.ChatSettings,
					action: a.a.View,
					chat: {
						...Object(u.A)(e),
						...Object(u.q)(e),
						...Object(u.g)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, S = () => async (e, t) => {
				const n = Object(c.r)(t());
				if (n && n.length) {
					const e = n[0].id;
					((e, t) => Object(m.a)({
						noun: "chat_member_block",
						source: a.b.ChatSettings,
						action: a.a.Submit,
						chat: {
							...Object(u.A)(e),
							...Object(u.q)(e),
							...Object(u.g)(e),
							...Object(u.b)(t)
						},
						...Object(h.a)(e)
					}))(t(), e)
				}
			}, w = () => async (e, t) => {
				const n = t();
				Object(d.c)(n) !== r.a.VIEW_INVITE && (e => {
					Object(m.a)({
						noun: "view_member",
						source: a.b.ChatSettings,
						action: a.a.Click,
						chat: {
							...Object(u.A)(e),
							...Object(u.q)(e),
							...Object(u.u)(e),
							...Object(u.g)(e)
						},
						...Object(h.a)(e)
					})
				})(n)
			}, N = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "leave_group",
					source: a.b.ChatSettings,
					action: a.a.Click,
					chat: {
						...Object(u.A)(e),
						...Object(u.q)(e),
						...Object(u.g)(e),
						...Object(u.y)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, k = e => async (t, n) => {
				((e, t) => {
					Object(m.a)({
						noun: "chat_member_report",
						source: a.b.ChatSettings,
						action: a.a.Submit,
						chat: {
							...Object(u.A)(e),
							...Object(u.q)(e),
							...Object(u.g)(e),
							...Object(u.w)(t)
						},
						...Object(h.a)(e)
					})
				})(n(), e)
			}, T = e => async (t, n) => {
				Object(b.c)(n(), e)
			}, M = e => async (t, n) => {
				Object(o.c)(n(), e) && Object(b.f)(n())
			}, A = e => async (t, n) => {
				const a = n(),
					s = e && e.filter(e => e !== a.user.account.id),
					r = s && s[0],
					c = a.contacts.models[r],
					i = c && c.name,
					l = Object(o.a)(n(), i);
				l && Object(b.e)(n(), l)
			}, U = (e, t) => async (e, n) => {
				Object(b.d)(n(), t)
			}, D = () => async (e, t) => {
				Object(b.b)(t())
			}, R = () => async (e, t) => {
				Object(b.a)(t())
			}, L = e => async (t, n) => {
				const a = n(),
					s = Object(c.f)(a, e);
				s && Object(g.d)(a, s, E.AWARD_RECEIVED)
			}, P = e => async (t, n) => {
				const a = n(),
					s = Object(c.f)(a, e);
				s && Object(g.e)(a, s, E.AWARD_RECEIVED)
			}, B = () => async (e, t) => {
				const n = t();
				Object(d.c)(n) === r.a.VIEW_INVITE && Object(g.f)(n)
			}, H = () => async (e, t) => {
				const n = t();
				Object(g.c)(n)
			}, F = () => async (e, t) => {
				Object(g.b)(t())
			}, G = e => async (t, n) => {
				((e, t) => {
					Object(m.a)({
						noun: "create_chat",
						source: a.b.UserHovercard,
						action: a.a.Click,
						chat: {
							...Object(u.E)(e, t),
							...Object(u.C)(e, t),
							...Object(u.D)(e, t)
						},
						...Object(h.a)(e),
						...Object(h.b)(e)
					})
				})(n(), e)
			}, W = () => async (e, t) => {
				Object(f.a)(t())
			}, V = () => async (e, t) => {
				Object(f.c)(t())
			}, K = e => async (t, n) => {
				const r = n();
				r.tooltipId !== e && (e === s.b && (e => {
					Object(m.a)({
						noun: "snoomoji",
						source: a.b.ChatKeyboard,
						action: a.a.View,
						chat: {
							...Object(u.A)(e),
							...Object(u.q)(e),
							...Object(u.g)(e)
						},
						...Object(h.a)(e)
					})
				})(r), e === s.a && (e => {
					Object(m.a)({
						noun: "gif",
						source: a.b.ChatKeyboard,
						action: a.a.View,
						chat: {
							...Object(u.A)(e),
							...Object(u.q)(e),
							...Object(u.g)(e)
						},
						...Object(h.a)(e)
					})
				})(r))
			}, z = () => async (e, t) => {
				(e => {
					Object(m.a)({
						noun: "other_message",
						source: a.b.ChatView,
						action: a.a.ModDelete,
						chat: {
							...Object(u.A)(e),
							...Object(u.q)(e),
							...Object(u.g)(e),
							...Object(u.s)(e),
							...Object(u.o)(e),
							...Object(u.x)(e)
						},
						...Object(h.a)(e)
					})
				})(t())
			}, q = e => async (t, n) => {
				const s = n(),
					r = Object(d.b)(s),
					c = (e => {
						switch (e) {
							case a.b.ChatSettings:
								return a.b.ChatSettings;
							default:
								return a.b.ChatView
						}
					})(r && r.source);
				((e, t, n) => {
					Object(m.a)({
						noun: "user",
						source: n,
						action: a.a.Kick,
						chat: {
							...Object(u.A)(e),
							...Object(u.q)(e),
							...Object(u.g)(e),
							...Object(u.s)(e),
							...Object(u.o)(e),
							...Object(u.x)(e)
						},
						...Object(h.a)(e),
						actionInfo: {
							settingValue: t,
							...Object(C.a)(e)
						}
					})
				})(n(), e, c)
			}, Z = e => async (t, n) => {
				Object(g.h)(n(), e)
			}, Q = e => async (t, n) => {
				Object(g.h)(n(), e)
			}, J = (e, t) => async (n, a) => {
				Object(g.a)(a(), e, t)
			}, X = (e, t) => async (n, a) => {
				Object(g.g)(a(), e, t)
			}, Y = (e, t) => async (n, a) => {
				Object(p.a)(a(), e, t, E.AWARD_RECEIVED)
			}, $ = (e, t) => async (n, a) => {
				const s = a();
				Boolean(Object(l.i)(s, e)) && (n(_(t)), n((() => async (e, t) => {
					const n = t(),
						a = Object(i.b)(n);
					Object(p.b)(t(), a)
				})()))
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
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/selectors/channels.ts");
			const o = "TYPING_INDICATOR__UPDATE",
				i = Object(r.a)(o),
				l = ({
					channelId: e,
					usernames: t
				}) => async (n, a) => {
					const r = Object(c.w)(a(), "channelId"),
						o = a().typingIndicator.usernames,
						l = e === r,
						d = t.length > 3 && o.length > 3,
						u = !s()(t, o);
					l && u && !d && n(i({
						usernames: t
					}))
				}
		},
		"./src/chat/actions/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "u", (function() {
				return A
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "v", (function() {
				return H
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "m", (function() {
				return W
			})), n.d(t, "k", (function() {
				return V
			})), n.d(t, "t", (function() {
				return K
			})), n.d(t, "j", (function() {
				return z
			})), n.d(t, "s", (function() {
				return q
			})), n.d(t, "c", (function() {
				return Z
			})), n.d(t, "n", (function() {
				return X
			})), n.d(t, "b", (function() {
				return Y
			})), n.d(t, "o", (function() {
				return te
			})), n.d(t, "p", (function() {
				return ae
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/chunk.js"),
				s = n.n(a),
				r = n("./node_modules/lodash/isEmpty.js"),
				c = n.n(r),
				o = n("./node_modules/react-router-redux/es/index.js"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/chat/actions/channel.ts"),
				d = n("./src/chat/actions/theme.ts"),
				u = n("./src/chat/actions/tracking.ts"),
				h = n("./src/chat/constants/channels.ts"),
				m = n("./src/chat/endpoints/accounts/index.ts"),
				p = n("./src/chat/endpoints/sendbird/index.ts"),
				b = n("./src/chat/endpoints/users/index.ts"),
				g = n("./src/chat/helpers/errors.ts"),
				f = n("./src/chat/models/Channel/index.ts"),
				C = n("./src/chat/models/Contact/index.ts"),
				E = n("./src/chat/models/Experiment/index.ts"),
				O = n("./src/chat/models/User/index.ts"),
				v = n("./src/chat/selectors/channels.ts"),
				_ = n("./src/chat/singleton/SendbirdSDK.ts");
			const j = "USER__ACCOUNT_FETCH_COMPLETED",
				y = "USER__REDDAID_RECEIVED",
				I = "USER__LOID_RECEIVED",
				x = "USER__SESSION_TRACKER_RECEIVED",
				S = "FETCH_EXPERIMENTS_COMPLETED",
				w = Object(i.a)(I),
				N = Object(i.a)("USER__ACCOUNT_FETCH_PENDING"),
				k = Object(i.a)(j),
				T = Object(i.a)("USER__ACCOUNT_FETCH_FAILED"),
				M = Object(i.a)(y),
				A = Object(i.a)(x),
				U = Object(i.a)(S),
				D = () => async (e, t, {
					apiContext: n
				}) => {
					const a = t(),
						{
							session: s,
							account: r,
							experiments: o
						} = a.user;
					if (!s || r && !c()(o)) return;
					e(N());
					const i = await Object(m.c)(n());
					if (i.ok && i.body && i.body.features) {
						const {
							body: t,
							body: {
								features: n
							}
						} = i, a = Object(O.b)(t), s = Object(E.a)(n), r = !!a.prefNightmode;
						e(k(a)), e(U(s)), e(Object(d.switchTheme)(r))
					} else e(T(i.error))
				}, R = "USER__USERS_FETCH_COMPLETED", L = Object(i.a)("USER__USERS_FETCH_PENDING"), P = Object(i.a)(R), B = Object(i.a)("USER__USERS_FETCH_FAILED"), H = e => async (t, n, {
					apiContext: a
				}) => {
					const r = n().contacts.models,
						c = e.filter(e => !r[e]),
						o = s()(c, 100);
					if (!c.length) return;
					t(L(e));
					const i = await Promise.all(o.map(e => Object(b.e)(a(), e))).catch(() => []);
					for (const e of i)
						if (e.ok) {
							const n = Object(O.a)(e.body);
							t(P(n))
						} else t(B())
				}, F = "USERS__USERS_ADD_SELECTED", G = Object(i.a)(F), W = e => async t => {
					t(G(e)), t(Object(u.g)(e))
				}, V = "USERS__USERS_REMOVE_SELECTED", K = Object(i.a)(V), z = "USERS__USERS_REMOVE_ALL_SELECTED", q = Object(i.a)(z), Z = "USERS__BLOCK_USER_COMPLETED", Q = Object(i.a)(Z), J = Object(i.a)("USERS__BLOCK_USER_FAILED"), X = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					const r = a(),
						c = r.contacts.models[e],
						i = c && c.name,
						d = Object(v.s)(r),
						u = Object(v.h)(r) || h.b.JOINED,
						p = d && d.type === f.a.Direct,
						b = Object(v.j)(r);
					if (!b) throw new g.a("currentChannel", b);
					const C = b.channelId;
					if (!C) throw new g.a("blockedChannelId", C);
					const E = await Object(m.a)(s(), e);
					E && E.ok && p ? (await _.a.hideChannel(), n(Q({
						userId: e,
						username: i
					})), t || (n(Object(l.K)(C)), n(Object(l.O)(u)))) : E && E.ok && !p ? (n(Q({
						userId: e,
						username: i
					})), t || n(Object(o.a)())) : E && n(J(E.error))
				}, Y = "BLOCKED_USER_LIST_FETCH_COMPLETED", $ = Object(i.a)("BLOCKED_USER_LIST_FETCH_FAILED"), ee = Object(i.a)(Y), te = () => async (e, t, {
					apiContext: n
				}) => {
					const {
						contacts: a
					} = t();
					if (!a.fetchedBlockedUsers) {
						const t = await Object(b.d)(n());
						if (t.ok && t.body && t.body.data) {
							const {
								children: n
							} = t.body.data, {
								models: s
							} = a, r = {};
							n.forEach(e => {
								if (s[e.id]) r[e.id] = {
									...s[e.id],
									isBlocked: !0
								};
								else {
									const {
										date: t,
										...n
									} = e;
									r[e.id] = {
										...C.b,
										...n,
										isBlocked: !0
									}
								}
							}), e(ee({
								blockedContacts: r
							}))
						} else e($(t.error))
					}
				}, ne = Object(i.a)("MODERATOR__KICK_USER"), ae = (e, t, n) => async (a, s, {
					apiContext: r
				}) => {
					await Object(p.k)(r(), e, t, n).then(() => {
						a(ne({
							userId: t
						})), a(Object(o.a)())
					}).catch(g.b)
				}
		},
		"./src/chat/actions/user/dropdown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			}));
			var a = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/chat/actions/tooltip.ts"),
				r = n("./src/chat/actions/tracking.ts"),
				c = n("./src/chat/constants/users.ts"),
				o = n("./src/chat/helpers/urls/index.ts"),
				i = n("./src/chat/selectors/platform.ts"),
				l = n("./src/telemetry/models/Event.ts");
			const {
				Block: d,
				Report: u,
				Kick: h
			} = c.a, m = e => async t => {
				t(Object(s.c)({
					tooltipId: e
				})), t(Object(r.E)())
			}, p = e => async (t, n) => {
				const s = n(),
					r = Object(i.d)(s);
				if (r) {
					const n = Object(o.getRedirectURL)(Object(o.userActionUrl)(r, e, d));
					t(Object(a.b)(n))
				}
			}, b = e => async (t, n) => {
				const s = n(),
					r = Object(i.d)(s);
				if (r) {
					const n = Object(o.getRedirectURL)(Object(o.userActionUrl)(r, e, u));
					t(Object(a.b)(n))
				}
			}, g = e => async (t, n) => {
				const s = n(),
					r = Object(i.d)(s);
				r && t(Object(a.b)(Object(o.userActionUrl)(r, e, h, {
					source: l.b.ChatSettings
				})))
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
				dropdownTrigger: "_2g2FuE9xJbJ5iuYJEimir3",
				isFullSize: "_3piMgZDajikeEGHJZ1KNH8"
			}
		},
		"./src/chat/components/ChatIcon/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_31wl61nRiy0UL2YxoDjz2D",
				iconWrapper: "_31wl61nRiy0UL2YxoDjz2D",
				small: "_1eHyYpoZd3GdzOZ3OVmBWS",
				UserPic: "_3ySraB4IKMuPpSKN6ylke3",
				userPic: "_3ySraB4IKMuPpSKN6ylke3",
				TopUserpic: "_3hrLerMvj3lz0atZrar82R",
				topUserpic: "_3hrLerMvj3lz0atZrar82R",
				BottomUserpic: "_10qnPCOiTCWch5MdQoHupL",
				bottomUserpic: "_10qnPCOiTCWch5MdQoHupL"
			}
		},
		"./src/chat/components/ChatIcon/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/components/ChatIcon/index.m.less"),
				i = n.n(o),
				l = n("./src/chat/icons/Userpic/index.tsx");
			const d = c.a.wrapped(l.a, "UserPic", i.a),
				u = c.a.wrapped(d, "TopUserpic", i.a),
				h = c.a.wrapped(d, "BottomUserpic", i.a);
			t.a = c.a.wrapped(({
				className: e,
				isSmall: t,
				secondUserId: n,
				userId: a
			}) => s.a.createElement("span", {
				className: Object(r.a)(e, {
					[i.a.small]: t
				})
			}, n ? s.a.createElement(s.a.Fragment, null, s.a.createElement(u, {
				userId: a
			}), s.a.createElement(h, {
				userId: n
			})) : s.a.createElement(d, {
				userId: a,
				className: Object(r.a)(e, {
					[i.a.small]: t
				})
			})), "IconWrapper", i.a)
		},
		"./src/chat/components/ChatListItem/index.m.less": function(e, t, n) {
			e.exports = {
				ChatListItem: "_3X4hbg4asgVvLaVYU6dUzs",
				chatListItem: "_3X4hbg4asgVvLaVYU6dUzs",
				selected: "_1kLrU4-nGav42QWAbioHOC",
				unread: "_1ibPLfkwlA3DRLbvoeDQ-z",
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
				ChannelName: "_2O9bxNWfKdVw3DGR5RL3qM",
				channelName: "_2O9bxNWfKdVw3DGR5RL3qM"
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
		"./src/chat/components/ChatMemberList/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/actions/tracking.ts"),
				u = n("./src/chat/components/MemberActionDropdown/index.tsx"),
				h = n("./src/chat/constants/dropdown.ts"),
				m = n("./src/chat/controls/Title/index.tsx"),
				p = n("./src/chat/helpers/chatSelector.ts"),
				b = n("./src/chat/icons/Nsfw/index.tsx"),
				g = n("./src/chat/icons/Userpic/index.tsx"),
				f = n("./src/chat/models/Channel/index.ts"),
				C = n("./src/chat/selectors/channels.ts"),
				E = n("./src/chat/selectors/members.ts"),
				O = n("./src/chat/selectors/user.ts"),
				v = n("./src/chat/components/ChatMemberList/index.m.less"),
				_ = n.n(v);
			const j = l.a.wrapped(u.a, "MemberActionDropdown", _.a),
				y = l.a.wrapped(({
					className: e,
					children: t,
					onClick: n
				}) => r.a.createElement("li", {
					onClick: n,
					className: e
				}, t), "ListItem", _.a),
				I = l.a.span("IconContainer", _.a),
				x = l.a.wrapped(m.a, "Title", _.a),
				S = l.a.span("Warning", _.a),
				w = l.a.span("Info", _.a),
				N = Object(p.a)({
					channelType: e => Object(C.w)(e, "type"),
					members: (e, t) => t.members || Object(E.b)(e, t.channelId) || [],
					currentUserId: O.a
				}),
				k = Object(c.b)(N, e => ({
					onViewProfile: t => {
						e(Object(d.n)()), e(Object(d.r)()).then(() => {
							window.open(`${o.a.redditUrl}/user/${t}`)
						})
					}
				})),
				T = ({
					className: e,
					channelId: t,
					channelType: n,
					currentUserId: s,
					members: c,
					minimal: o,
					modIndicator: l,
					onClick: d,
					onSelectName: u,
					onViewProfile: m,
					selectIndex: p,
					useNSFWIcons: C
				}) => (((e, t, n) => {
					if (n && void 0 !== t && e.length >= t) {
						const a = e[t];
						a && n(a.name)
					}
				})(c, p, u), r.a.createElement("ul", {
					className: e
				}, c && c.map((e, c) => r.a.createElement(y, {
					key: e.name,
					className: Object(i.a)(h.a, {
						[_.a.selected]: p === c,
						[_.a.withMenu]: !o
					}),
					onClick: () => {
						d ? d(e.name) : m(e.name)
					}
				}, r.a.createElement(I, null, C && e.isNSFW ? r.a.createElement(b.b, null) : r.a.createElement(g.a, {
					userId: e.id
				})), r.a.createElement(x, null, e.name), e.isModerator && l && r.a.createElement(w, null, n && n === f.a.Subreddit ? a.fbt._("Moderator", null, {
					hk: "48EtBe"
				}) : a.fbt._("Host", null, {
					hk: "4berci"
				})), e.isNSFW && r.a.createElement(S, null, a.fbt._("NSFW", null, {
					hk: "36qPno"
				})), e.isBlockedByMe && r.a.createElement(S, null, a.fbt._("Blocked", null, {
					hk: "1RUrSV"
				})), !o && e.id !== s && r.a.createElement(j, {
					channelId: t,
					containerClassName: h.a,
					dropdownIndex: c,
					id: `MemberAction--Select-${c}`,
					userId: e.id,
					isBlockedUser: e.isBlockedByMe
				})))));
			T.displayName = "ChatMemberList", t.a = k(T)
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
				r = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/chat/actions/container.ts"),
				l = n("./src/chat/actions/surveyTrigger/index.ts"),
				d = n("./src/chat/actions/tracking.ts"),
				u = n("./src/chat/constants/container.ts"),
				h = n("./src/chat/controls/Button/index.tsx"),
				m = n("./src/chat/helpers/dom.ts"),
				p = n("./src/chat/controls/Svg/index.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const g = e => r.a.createElement(p.a, b({}, e, {
				viewBox: "0 0 20 20"
			}), r.a.createElement("polygon", {
				points: "18.442 2.442 17.558 1.558 10 9.116 2.442 1.558 1.558 2.442 9.116 10 1.558 17.558 2.442 18.442 10 10.884 17.558 18.442 18.442 17.558 10.884 10 18.442 2.442"
			}));
			g.displayName = "NavClose";
			var f = n("./src/chat/selectors/app.ts"),
				C = n("./src/chat/components/CloseIcon/index.m.less"),
				E = n.n(C);
			t.a = ({
				className: e
			}) => {
				const t = Object(c.d)();
				Object(c.e)(f.a);
				return r.a.createElement(h.c, {
					className: Object(o.a)(E.a.IconButton, e),
					onClick: Object(m.b)(() => {
						t(Object(i.sizeChanged)(u.a.HIDDEN)), t(Object(d.d)()), t(Object(l.b)())
					}),
					title: a.fbt._("Close chat", null, {
						hk: "4dFacQ"
					})
				}, r.a.createElement(g, null))
			}
		},
		"./src/chat/components/DateSplitter/index.m.less": function(e, t, n) {
			e.exports = {
				TimeWrapper: "_1XAkyv2F6byrdWJg-SHZ7i",
				timeWrapper: "_1XAkyv2F6byrdWJg-SHZ7i",
				Time: "_2LyKshutzx3TO04UvQTYsq",
				time: "_2LyKshutzx3TO04UvQTYsq"
			}
		},
		"./src/chat/components/FrameContent/index.m.less": function(e, t, n) {
			e.exports = {
				Main: "RaDn8d65cHW3dCPgTkSRN",
				main: "RaDn8d65cHW3dCPgTkSRN",
				Content: "_2K5FjgfpUbS22QcAEaqgts",
				content: "_2K5FjgfpUbS22QcAEaqgts",
				isFullSize: "_1NUakpMI3cTT7fK22x_qpS",
				hidden: "_12VJGwz26aeZ3i6xD4X9vs",
				Modal: "Jz9-gUKS4kLBzcOh-ylJF",
				modal: "Jz9-gUKS4kLBzcOh-ylJF"
			}
		},
		"./src/chat/components/FrameContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Ui
			}));
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/cache/index.ts")),
				u = n("./src/lib/constants/index.ts"),
				h = n("./src/lib/makeActionCreator/index.ts");
			var m = n("./src/chat/models/Promo/index.ts");
			var p = e => {
					const t = Object(d.b)("chat.promo") || [];
					return e = (e => {
						switch (e) {
							case m.c.LegacySubredditChatFtux:
								return m.a.SubredditChatFtux;
							case m.c.LegacyNSFWWarning:
								return m.b.NSFWWarning;
							default:
								return e
						}
					})(e), t.includes(e)
				},
				b = n("./src/chat/actions/promo/constants.ts");
			const g = Object(h.a)(b.a),
				f = Object(h.a)(b.b),
				C = e => async t => {
					t(f(e)), (e => {
						if (!p(e)) {
							const t = [...Object(d.b)("chat.promo") || [], e];
							Object(d.d)("chat.promo", t, u.hc)
						}
					})(e)
				};
			var E = n("./node_modules/lodash/map.js"),
				O = n.n(E),
				v = n("./node_modules/lodash/sortBy.js"),
				_ = n.n(v),
				j = n("./src/chat/actions/channel.ts"),
				y = n("./src/chat/actions/message/index.ts"),
				I = n("./src/chat/actions/message/inboxScroller.ts"),
				x = n("./src/chat/actions/message/richUnit.ts"),
				S = n("./node_modules/fbt/lib/FbtPublic.js");
			const w = (new Date).setHours(0, 0, 0, 0),
				N = new Intl.DateTimeFormat(void 0, {
					hour: "2-digit",
					minute: "2-digit"
				}).format,
				k = new Intl.DateTimeFormat(void 0, {
					day: "numeric",
					month: "short",
					year: "2-digit"
				}).format,
				T = new Intl.DateTimeFormat(void 0, {
					day: "numeric",
					month: "short"
				}).format,
				M = new Intl.DateTimeFormat(void 0, {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric"
				}).format,
				A = e => e.toISOString();
			var U = n("./src/chat/components/DateSplitter/index.m.less"),
				D = n.n(U);
			const R = l.a.div("TimeWrapper", D.a),
				L = l.a.time("Time", D.a);
			var P = e => c.a.createElement(R, null, c.a.createElement(L, null, (e => {
					const t = w - u.x,
						n = new Date(w).setDate(1),
						a = new Date(n).setMonth(0),
						s = new Date(e);
					return e >= w ? S.fbt._("Today", null, {
						hk: "1W0rfJ"
					}) : e >= t ? S.fbt._("Yesterday", null, {
						hk: "2GVGk3"
					}) : e >= n ? T(s) : e >= a ? T(s) : k(s)
				})(e.date))),
				B = n("./src/chat/helpers/json.ts"),
				H = n("./src/chat/icons/Userpic/index.tsx"),
				F = n("./src/chat/components/Intro/index.m.less"),
				G = n.n(F);
			const W = l.a.span("Wrapper", G.a),
				V = l.a.div("ChannelDescription", G.a),
				K = l.a.ul("Users", G.a),
				z = l.a.li("User", G.a),
				q = l.a.span("UserTitle", G.a);
			var Z = ({
					channel: e,
					users: t
				}) => c.a.createElement(W, null, c.a.createElement(K, null, t.map((e, t, n) => c.a.createElement(z, {
					key: e.id
				}, c.a.createElement(H.a, {
					height: "16px",
					width: "16px",
					userId: e.id
				}), c.a.createElement(q, null, `${e.name}${t<n.length-1?",":""}`)))), c.a.createElement(V, null, (e => {
					try {
						const t = e.data && Object(B.a)(e.data, {
							welcome_text: ""
						});
						if (t && t.welcome_text) return t && t.welcome_text
					} catch (t) {}
					return S.fbt._("This is the start of a beautiful thing. Say something nice, or share a cat fact.", null, {
						hk: "J8whX"
					})
				})(e))),
				Q = n("./node_modules/react-router-redux/es/index.js"),
				J = n("./src/chat/constants/messages.ts"),
				X = n("./src/chat/constants/users.ts"),
				Y = n("./src/chat/controls/Button/index.tsx"),
				$ = n("./src/chat/helpers/chatSelector.ts"),
				ee = n("./src/chat/helpers/urls/index.ts"),
				te = n("./src/chat/selectors/channels.ts"),
				ne = n("./src/telemetry/models/Event.ts"),
				ae = n("./src/chat/components/Message/ActionButtonGroup.m.less"),
				se = n.n(ae);
			const re = l.a.span("Wrapper", se.a),
				ce = l.a.span("ActionButton", se.a),
				oe = Object($.a)({
					channel: te.s,
					isMod: te.a
				});
			var ie = Object(o.b)(oe, e => ({
					onDeleteMessage: (t, n) => e(Object(Q.b)(Object(ee.messageActionUrl)(t, n, J.a.DELETE))),
					onReportMessage: (t, n) => e(Object(Q.b)(Object(ee.messageActionUrl)(t, n, J.a.REPORT))),
					onReportInvitedMessage: (t, n) => e(Object(Q.b)(Object(ee.inviteMessageActionUrl)(t, n, J.a.REPORT))),
					onKickUser: (t, n) => e(Object(Q.b)(Object(ee.userActionUrl)(t, n, X.a.Kick, {
						source: ne.b.ChatView
					})))
				}))(e => {
					const {
						isMod: t,
						channel: n,
						message: {
							messageId: a,
							sender: s
						},
						fromCurrentUser: r,
						fromInvite: o,
						onDeleteMessage: i,
						onKickUser: l,
						onReportMessage: d,
						onReportInvitedMessage: u
					} = e, h = n && n.channelId;
					return h ? c.a.createElement(re, {
						className: e.className
					}, t && !r ? c.a.createElement(c.a.Fragment, null, c.a.createElement(ce, {
						onClick: () => i(h, a)
					}, c.a.createElement(Y.e, null)), c.a.createElement(ce, {
						onClick: () => o ? u(h, a) : d(h, a)
					}, c.a.createElement(Y.b, null)), c.a.createElement(ce, {
						onClick: () => s && l(h, s.userId)
					}, c.a.createElement(Y.d, null))) : r ? c.a.createElement(ce, {
						onClick: () => i(h, a)
					}, c.a.createElement(Y.e, null)) : c.a.createElement(ce, {
						onClick: () => o ? u(h, a) : d(h, a)
					}, c.a.createElement(Y.b, null))) : null
				}),
				le = n("./src/chat/actions/tracking.ts"),
				de = n("./src/chat/controls/TextButton.tsx"),
				ue = n("./src/chat/components/Message/CollapsedMessage.m.less"),
				he = n.n(ue);
			var me = Object(o.b)(void 0, (e, t) => ({
					uncollapseMessage: () => {
						e(Object(y.C)(t)), e(Object(le.v)(t.messageId))
					},
					viewCollapsedMessage: () => {
						e(Object(le.F)(t.messageId))
					}
				}))(l.a.wrapped(({
					className: e,
					uncollapseMessage: t,
					viewCollapsedMessage: n
				}) => c.a.createElement("div", {
					onLoad: n,
					className: e
				}, S.fbt._("This message has been collapsed due to potentially offensive language.", null, {
					hk: "4qscuz"
				}), c.a.createElement("div", null, c.a.createElement(de.a, {
					onClick: t
				}, S.fbt._("View Message", null, {
					hk: "QjaEs"
				})))), "CollapsedMessage", he.a)),
				pe = n("./src/chat/components/Message/FailedMenu.m.less"),
				be = n.n(pe);
			const ge = l.a.div("ButtonControls", be.a),
				fe = l.a.span("Text", be.a),
				Ce = l.a.wrapped(Y.a, "Button", be.a);
			class Ee extends r.Component {
				constructor() {
					super(...arguments), this.handleResend = () => this.props.onResend(this.props.clientMessageId), this.handleDelete = () => this.props.onDelete(this.props.clientMessageId)
				}
				render() {
					return c.a.createElement(ge, null, c.a.createElement(fe, null, S.fbt._("Failed to send", null, {
						hk: "2feF2H"
					})), c.a.createElement(Ce, {
						primaryNoBorder: !0,
						onClick: this.handleResend
					}, S.fbt._("Resend", null, {
						hk: "cXpU3"
					})), c.a.createElement(Ce, {
						warningNoBorder: !0,
						onClick: this.handleDelete
					}, S.fbt._("Delete", null, {
						hk: "2dtAT"
					})))
				}
			}
			var Oe = Object(o.b)(void 0, (e, {
					channelId: t
				}) => ({
					onResend: n => e(Object(y.y)(t, n)),
					onDelete: t => e(Object(y.x)({
						clientMessageId: t
					}))
				}))(Ee),
				ve = n("./src/lib/linkMatchers/customLinks.ts"),
				_e = n("./src/lib/opener/index.ts"),
				je = n("./src/chat/helpers/linkParser/index.ts"),
				ye = n("./src/chat/components/Message/Link.m.less"),
				Ie = n.n(ye);
			const xe = l.a.wrapped(e => c.a.createElement("a", {
					className: Object(i.a)(e.className, {
						[Ie.a.noUnderline]: e.noUnderline
					}),
					href: Object(je.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children), "Link", Ie.a),
				Se = l.a.span("LinkedText", Ie.a),
				we = l.a.span("NameWrapper", Ie.a),
				Ne = l.a.span("Name", Ie.a),
				ke = l.a.span("DetailsWrapper", Ie.a),
				Te = l.a.span("Title", Ie.a),
				Me = l.a.p("Description", Ie.a),
				Ae = e => c.a.createElement(xe, {
					noUnderline: e.noUnderline,
					href: Object(je.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children),
				Ue = e => e.isEmbed ? (e => c.a.createElement(Ae, e, c.a.createElement(we, null, c.a.createElement(Ne, null, e.name)), c.a.createElement(ke, null, c.a.createElement("span", null, c.a.createElement(Te, null, e.title), c.a.createElement(Me, null, e.description)))))(e) : (e => e.href ? c.a.createElement(Ae, e, e.children) : c.a.createElement(Se, e, e.children))(e);
			var De = n("./src/chat/components/Message/LinkedText.m.less"),
				Re = n.n(De);
			const Le = l.a.pre("MessageText", Re.a),
				Pe = (e, t, n, a, s) => c.a.createElement(Ue, {
					key: s || e,
					href: e,
					target: n,
					rel: _e.b,
					noUnderline: a === ve.d.mention || a === ve.d.profile || a === ve.d.profileFull || a === ve.d.subreddit || a === ve.d.subredditFull
				}, t);
			var Be = l.a.wrapped(e => {
					const {
						value: t,
						highlighMentionGroupLinks: n,
						className: a
					} = e, s = !(!n || !n.length), r = Object(je.a)(t, s, Pe);
					return c.a.createElement(Le, {
						tabIndex: 0,
						className: a
					}, r)
				}, "LinkedText", Re.a),
				He = n("./src/chat/components/Message/OffensiveMessageReportPrompt.m.less"),
				Fe = n.n(He);
			const Ge = l.a.wrapped(de.a, "Regular", Fe.a),
				We = l.a.wrapped(de.a, "Active", Fe.a),
				Ve = Object(o.b)(void 0, (e, t) => ({
					cancel: () => {
						e(Object(y.u)(t)), e(Object(le.b)(t.channelId, t.messageId))
					},
					reportMessage: () => {
						e(Object(Q.b)(Object(ee.inviteMessageActionUrl)(t.channelId, t.messageId, J.a.REPORT))), e(Object(y.u)(t)), e(Object(le.u)(t.channelId, t.messageId))
					}
				}));
			var Ke = l.a.wrapped(Ve(e => c.a.createElement("div", {
					className: e.className
				}, S.fbt._("Was this message offensive?", null, {
					hk: "1sBVkd"
				}), c.a.createElement("div", null, c.a.createElement(Ge, {
					onClick: () => e.cancel(e)
				}, S.fbt._("No", null, {
					hk: "SG3Y"
				})), c.a.createElement(We, {
					onClick: () => e.reportMessage(e)
				}, S.fbt._("Yes", null, {
					hk: "3ONldA"
				}))))), "OffensiveMessageReport", Fe.a),
				ze = n("./src/lib/prettyPrintNumber/index.ts"),
				qe = n("./src/chat/components/Message/RichUnit/Comment/CommentRichUnit.m.less"),
				Ze = n.n(qe),
				Qe = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.m.less"),
				Je = n.n(Qe);
			const Xe = l.a.div("MetaInfo", Je.a);
			var Ye = l.a.wrapped(({
					className: e,
					metaInfo: t,
					isSubreddit: n
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(Xe, {
					tabIndex: 0
				}, t), n ? c.a.createElement("div", {
					className: Je.a.OnlineIndicator
				}, "•") : null), "Footer", Je.a),
				$e = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				et = n("./src/chat/controls/Svg/index.tsx");

			function tt() {
				return (tt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var nt = e => c.a.createElement(et.a, tt({}, e, {
					viewBox: "0 0 20 20"
				}), c.a.createElement("path", {
					d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
				})),
				at = n("./src/chat/components/Message/RichUnit/commonComponents/Header.m.less"),
				st = n.n(at);
			const rt = l.a.img("SubredditIcon", st.a),
				ct = l.a.wrapped(nt, "PlanetIcon", st.a),
				ot = l.a.wrapped(e => {
					const {
						className: t,
						subredditName: n,
						authorName: a,
						isPostComment: s,
						redditorName: r,
						subredditTitle: o
					} = e, i = n ? `r/${n}` : "", l = r ? `u/${r}` : "", d = `u/${a||r}`;
					return c.a.createElement("div", {
						className: t,
						onClick: e => e.stopPropagation()
					}, c.a.createElement($e.a, {
						className: st.a.SubredditName,
						to: `/${i||l}`,
						target: _e.c.BLANK,
						rel: _e.b
					}, i || l), o ? c.a.createElement($e.a, {
						className: st.a.SubredditTitle,
						to: `/${i||l}`,
						target: _e.c.BLANK,
						rel: _e.b
					}, o) : c.a.createElement($e.a, {
						className: st.a.AuthorName,
						to: `/${d}`,
						target: _e.c.BLANK,
						rel: _e.b
					}, s ? `${S.fbt._("Comment by",null,{hk:"1pyLSv"})} ` : null, d))
				}, "SubredditInfo", st.a);
			var it = l.a.wrapped(e => {
					const {
						className: t,
						subredditName: n,
						authorName: a,
						isPostComment: s,
						redditorName: r,
						iconUrl: o,
						subredditTitle: i
					} = e, l = n ? `r/${n}` : "", d = r ? `u/${r}` : "";
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement($e.a, {
						to: `/${l||d}`,
						target: _e.c.BLANK,
						rel: _e.b,
						className: st.a.Link
					}, o ? c.a.createElement(rt, {
						src: o
					}) : c.a.createElement(ct, null)), c.a.createElement(ot, {
						subredditName: n,
						redditorName: r,
						authorName: a,
						isPostComment: s,
						iconUrl: o,
						subredditTitle: i
					}))
				}, "Header", st.a),
				lt = n("./node_modules/draft-js/lib/Draft.js");
			const dt = /(<span class="md-spoiler-text">).+(<\/span>)/gi,
				ut = e => {
					const t = Object(lt.convertFromHTML)(e.replace(dt, "$1[spoiler]$2"));
					return Object(lt.convertToRaw)(lt.ContentState.createFromBlockArray(t.contentBlocks)).blocks.map(e => e.text.trim() ? e.text : "\n").join(" ")
				},
				ht = l.a.wrapped(Be, "LinkedText", Ze.a),
				mt = l.a.div("Delimiter", Ze.a),
				pt = l.a.wrapped(e => {
					var t;
					const {
						className: n
					} = e;
					let a;
					return (null === (t = e.content) || void 0 === t ? void 0 : t.html) && (a = ut(e.content.html)), c.a.createElement("div", {
						className: n,
						tabIndex: 0
					}, a ? c.a.createElement(ht, {
						value: a,
						highlighMentionGroupLinks: []
					}) : null)
				}, "Content", Ze.a),
				bt = l.a.wrapped(({
					className: e,
					darkBackground: t,
					highlights: n,
					richUnitData: {
						score: a,
						content: s,
						authorInfo: r,
						postInfo: o
					},
					commentUrl: l
				}) => {
					var d, u, h;
					const m = `${Object(ze.b)(a||0)} ${S.fbt._("points",null,{hk:"3TvPLo"})}`;
					return c.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(_e.d)(t, "_blank")
							})(e, l)
						},
						className: Object(i.a)(e, {
							[Ze.a.dark]: t
						})
					}, c.a.createElement(c.a.Fragment, null, c.a.createElement(it, {
						authorName: null == r ? void 0 : r.displayName,
						subredditName: (null === (d = null == o ? void 0 : o.subreddit) || void 0 === d ? void 0 : d.name) || "",
						iconUrl: (null === (h = null === (u = null == o ? void 0 : o.subreddit) || void 0 === u ? void 0 : u.styles) || void 0 === h ? void 0 : h.icon) || ""
					}), c.a.createElement(mt, null), c.a.createElement(pt, {
						authorInfo: r,
						content: s,
						highlights: n,
						darkBackground: t
					}), c.a.createElement(Ye, {
						metaInfo: m
					})))
				}, "RichCommentUnit", Ze.a);
			var gt = l.a.wrapped(({
					className: e,
					commentUrl: t,
					highlights: n,
					darkBackground: a,
					richUnitData: s
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(bt, {
					highlights: n,
					darkBackground: a,
					richUnitData: s,
					commentUrl: t
				})), "RichUnitWrapper", Ze.a),
				ft = n("./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.m.less"),
				Ct = n.n(ft);
			const Et = l.a.div("ProviderDisplay", Ct.a),
				Ot = l.a.div("Delimiter", Ct.a),
				vt = l.a.wrapped(Be, "Link", Ct.a),
				_t = l.a.img("Image", Ct.a),
				jt = l.a.img("Favicon", Ct.a),
				yt = l.a.div("Title", Ct.a),
				It = l.a.wrapped(e => {
					const {
						className: t,
						faviconUrl: n,
						title: a
					} = e;
					return c.a.createElement("div", {
						className: t
					}, n ? c.a.createElement(jt, {
						src: n
					}) : null, c.a.createElement(yt, null, a))
				}, "TitleContent", Ct.a),
				xt = l.a.wrapped(e => {
					const {
						className: t,
						title: n,
						link: a,
						faviconUrl: s
					} = e;
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement(It, {
						title: n,
						faviconUrl: s
					}), c.a.createElement(vt, {
						value: a
					}))
				}, "HeaderContent", Ct.a),
				St = l.a.wrapped(e => {
					const {
						className: t,
						name: n,
						link: a,
						faviconUrl: s
					} = e;
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement(xt, {
						title: n,
						link: a,
						faviconUrl: s
					}))
				}, "Header", Ct.a),
				wt = l.a.wrapped(e => {
					const {
						className: t,
						thumbnailUrl: n,
						title: a
					} = e;
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement(kt, {
						url: n,
						title: a
					}))
				}, "ContentContainer", Ct.a),
				Nt = l.a.wrapped(e => {
					const {
						className: t,
						url: n
					} = e;
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement(_t, {
						src: n
					}))
				}, "ImageContainer", Ct.a),
				kt = l.a.wrapped(e => {
					const {
						className: t,
						url: n,
						title: a
					} = e;
					return c.a.createElement("div", {
						className: t
					}, n ? c.a.createElement(Nt, {
						url: n
					}) : null, c.a.createElement(yt, null, a))
				}, "Content", Ct.a),
				Tt = l.a.wrapped(e => {
					const {
						className: t,
						providerDisplay: n
					} = e;
					return c.a.createElement("div", {
						className: t,
						tabIndex: 0
					}, c.a.createElement(Et, null, n))
				}, "Footer", Ct.a),
				Mt = l.a.wrapped(e => {
					const {
						className: t,
						darkBackground: n,
						name: a = "",
						href: s = "",
						providerDisplay: r = "",
						thumbnailUrl: o = "",
						title: l = "",
						faviconUrl: d = ""
					} = e;
					return c.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(_e.d)(t, "_blank")
							})(e, s)
						},
						className: Object(i.a)(t, {
							[Ct.a.dark]: n
						})
					}, c.a.createElement(St, {
						name: a,
						link: s,
						faviconUrl: d
					}), o ? null : c.a.createElement(Ot, null), c.a.createElement(wt, {
						thumbnailUrl: o,
						title: l,
						darkBackground: n
					}), c.a.createElement(Tt, {
						providerDisplay: r
					}))
				}, "ExternalLinkUnit", Ct.a);
			var At = l.a.wrapped(e => {
				const {
					className: t
				} = e;
				return c.a.createElement("div", {
					className: t
				}, c.a.createElement(Mt, e), " ")
			}, "RichUnitWrapper", Ct.a);

			function Ut() {
				return (Ut = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Dt = e => c.a.createElement(et.a, Ut({}, e, {
				viewBox: "0 0 12 12"
			}), c.a.createElement("path", {
				d: "M10.1018 4.12719C9.8205 4.12719 9.54825 4.18869 9.3 4.30419C8.62425 3.91569 7.8315 3.65769 6.987 3.54219L7.3335 1.91169L8.121 2.07969C8.33475 2.69544 8.91375 3.14169 9.60075 3.14169C10.4662 3.14169 11.1713 2.43669 11.1713 1.57119C11.1713 0.704939 10.4662 -6.10352e-05 9.60075 -6.10352e-05C9.10275 -6.10352e-05 8.66325 0.236939 8.37525 0.599939L6.91125 0.288689C6.507 0.205439 6.108 0.460439 6.02175 0.866189L5.4975 3.32919C5.4855 3.38694 5.4945 3.44244 5.496 3.49944C4.47075 3.56919 3.50025 3.84144 2.69925 4.30344C2.451 4.18794 2.1795 4.12719 1.899 4.12719C0.852 4.12719 0 4.97919 0 6.02619C0 6.58269 0.2445 7.10244 0.65175 7.45719C0.67725 9.65544 3.0165 11.3722 5.99775 11.3722C8.9775 11.3722 11.316 9.65769 11.3438 7.46094C11.7533 7.10694 12 6.58494 12 6.02619C12 4.97919 11.1488 4.12719 10.1018 4.12719Z"
			}));

			function Rt() {
				return (Rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Lt = e => c.a.createElement(et.a, Rt({}, e, {
				viewBox: "0 0 24 20"
			}), c.a.createElement("path", {
				d: "M9.672,12.952a1.956,1.956,0,0,0-2.766,0l-3.36,3.36V17.5a1.627,1.627,0,0,0,1.625,1.625H15.845Z"
			}), c.a.createElement("path", {
				d: "M2.171,5.5a3,3,0,0,1,3-3H15.8A1.627,1.627,0,0,0,14.171.875h-12A1.627,1.627,0,0,0,.546,2.5v12a1.627,1.627,0,0,0,1.625,1.625Z"
			}), c.a.createElement("path", {
				d: "M13.642,7.238a1.544,1.544,0,1,0,1.544,1.544A1.546,1.546,0,0,0,13.642,7.238Z"
			}), c.a.createElement("path", {
				d: "M17.171,3.875h-12A1.627,1.627,0,0,0,3.546,5.5v9.356l2.632-2.632a2.988,2.988,0,0,1,4.221,0l6.89,6.889A1.621,1.621,0,0,0,18.8,17.5V5.5A1.627,1.627,0,0,0,17.171,3.875Zm-3.529,7.48a2.573,2.573,0,1,1,2.573-2.573A2.576,2.576,0,0,1,13.642,11.355Z"
			}));

			function Pt() {
				return (Pt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Bt = e => c.a.createElement(et.a, Pt({}, e, {
				viewBox: "0 0 12 12"
			}), c.a.createElement("path", {
				d: "M6.36644 6.69771C6.32969 6.87045 6.17666 6.99437 5.99963 6.99437C5.82259 6.99437 5.67031 6.87045 5.63281 6.69771L4.88267 3.19264C4.85941 3.08149 4.88642 2.96583 4.95843 2.87796C5.02894 2.78934 5.13621 2.73827 5.24948 2.73827H6.74977C6.86304 2.73827 6.97031 2.78934 7.04157 2.87796C7.11283 2.96583 7.14059 3.08149 7.11658 3.19264L6.36644 6.69771ZM6.53222 9.40293C6.3897 9.54562 6.19466 9.61998 5.99962 9.61998C5.80459 9.61998 5.60955 9.54562 5.46702 9.40293C5.332 9.25948 5.24948 9.07172 5.24948 8.86895C5.24948 8.67368 5.332 8.47916 5.46702 8.34322C5.75208 8.05858 6.25467 8.06534 6.53222 8.34322C6.66725 8.47916 6.74977 8.67368 6.74977 8.86895C6.74977 9.07172 6.66725 9.26699 6.53222 9.40293ZM11.5604 4.93053L7.06032 0.425835C6.49322 -0.141945 5.50603 -0.141945 4.93893 0.425835L0.439582 4.93053C0.156029 5.21442 0 5.59144 0 5.99324C0 6.39429 0.156029 6.77131 0.439582 7.0552L4.93893 11.5599C5.22248 11.8438 5.59905 12 5.99962 12C6.4002 12 6.77677 11.8438 7.06032 11.5599L11.5604 7.0552C11.844 6.77131 12 6.39429 12 5.99324C12 5.59144 11.844 5.21442 11.5604 4.93053Z",
				fill: "#FF3881"
			}));

			function Ht() {
				return (Ht = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ft = e => c.a.createElement(et.a, Ht({}, e, {
				viewBox: "0 0 9 10"
			}), c.a.createElement("path", {
				d: "M6.82396 4.11179C6.2307 4.70506 5.19696 4.70506 4.6037 4.11179C3.99195 3.49943 3.99195 2.50389 4.6037 1.89153C4.90064 1.5952 5.29491 1.43195 5.71383 1.43195C6.13336 1.43195 6.52764 1.5952 6.82396 1.89153C7.43571 2.50389 7.43571 3.49943 6.82396 4.11179ZM7.6952 1.02054C7.166 0.491346 6.46247 0.199951 5.71396 0.199951C4.96545 0.199951 4.26253 0.491346 3.73272 1.02054C2.79077 1.9631 2.66571 3.4133 3.34892 4.49571L1.67263 6.17261L0.900714 6.94453C0.900714 6.94453 0.900098 6.94515 0.899482 6.94576C0.898866 6.94576 0.89825 6.94638 0.89825 6.947L0.126947 7.7183C-0.11393 7.95918 -0.11393 8.34852 0.126947 8.5894L0.898866 9.36193H0.899482C0.899482 9.36255 0.899482 9.36255 0.899482 9.36255L1.15699 9.61945C1.27712 9.74019 1.43483 9.79995 1.59254 9.79995C1.75026 9.79995 1.90797 9.74019 2.0281 9.61945C2.26836 9.37918 2.26836 8.98922 2.0281 8.74834L1.76997 8.49083C1.58454 8.30478 1.58515 8.00291 1.76997 7.81748L1.7712 7.81687C1.95171 7.63698 2.26466 7.63575 2.44517 7.81687L2.70268 8.07438C2.94294 8.31464 3.3329 8.31464 3.57378 8.07438C3.81404 7.83412 3.81404 7.44354 3.57378 7.20327L2.97929 6.60816L4.22064 5.36681C4.6642 5.64835 5.17614 5.80421 5.71396 5.80421C6.46247 5.80421 7.166 5.5122 7.6952 4.98301C8.78808 3.89074 8.78808 2.1128 7.6952 1.02054Z"
			}));

			function Gt() {
				return (Gt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Wt = e => c.a.createElement(et.a, Gt({}, e, {
					viewBox: "0 0 10 6"
				}), c.a.createElement("path", {
					d: "M9.62406 2.8827L7.96986 1.2285C6.33186 -0.4095 3.66786 -0.4095 2.02986 1.2285L0.375657 2.8827C0.141057 3.1173 0.141057 3.4965 0.375657 3.7311C0.610257 3.9657 0.989457 3.9657 1.22406 3.7311L2.87826 2.0769C2.91786 2.0373 2.96406 2.0097 3.00546 1.9731C2.74926 2.3547 2.59986 2.8131 2.59986 3.3069C2.59986 4.6323 3.67446 5.7069 4.99986 5.7069C6.32526 5.7069 7.39986 4.6323 7.39986 3.3069C7.39986 2.8131 7.24986 2.3547 6.99426 1.9731C7.03566 2.0097 7.08186 2.0373 7.12146 2.0769L8.77566 3.7311C8.89266 3.8481 9.04626 3.9069 9.19986 3.9069C9.35346 3.9069 9.50706 3.8481 9.62406 3.7311C9.85866 3.4965 9.85866 3.1173 9.62406 2.8827Z"
				})),
				Vt = n("./src/chat/components/Message/RichUnit/commonComponents/ImageContent.m.less"),
				Kt = n.n(Vt);
			const zt = l.a.img("Image", Kt.a),
				qt = l.a.wrapped(Bt, "NSFWIcon", Kt.a),
				Zt = l.a.wrapped(Ft, "PrivateIcon", Kt.a),
				Qt = l.a.wrapped(Wt, "RestrictedIcon", Kt.a),
				Jt = l.a.wrapped(Dt, "EmployeesOnlyIcon", Kt.a),
				Xt = l.a.wrapped(({
					className: e
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(qt, null), " ", S.fbt._("nsfw", null, {
					hk: "6M6nL"
				})), "NSFWIndicator", Kt.a),
				Yt = l.a.wrapped(({
					className: e
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(Zt, null), " ", S.fbt._("private", null, {
					hk: "3xzh8w"
				})), "PrivateIndicator", Kt.a),
				$t = l.a.wrapped(({
					className: e
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(Qt, null), " ", S.fbt._("restricted", null, {
					hk: "2lC88Z"
				})), "RestrictedIndicator", Kt.a),
				en = l.a.wrapped(({
					className: e
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(Jt, null), " ", S.fbt._("employees only", null, {
					hk: "3uDhE6"
				})), "EmployeesOnlyIndicator", Kt.a),
				tn = l.a.wrapped(({
					className: e,
					subredditType: t,
					isNsfw: n
				}) => {
					return c.a.createElement("div", {
						className: e
					}, n ? c.a.createElement(Xt, null) : null, (e => {
						switch (e) {
							case "RESTRICTED":
								return c.a.createElement($t, null);
							case "EMPLOYEES_ONLY":
								return c.a.createElement(en, null);
							case "PRIVATE":
								return c.a.createElement(Yt, null);
							default:
								return null
						}
					})(t))
				}, "SubredditTypeIndicator", Kt.a),
				nn = l.a.wrapped(({
					className: e,
					url: t
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(zt, {
					src: t
				})), "ImageContainer", Kt.a),
				an = l.a.div("Title", Kt.a),
				sn = l.a.wrapped(Lt, "GalleryIcon", Kt.a);
			var rn = l.a.wrapped(({
					className: e,
					url: t,
					title: n,
					isGallery: a,
					isNsfw: s,
					subredditType: r,
					isSubreddit: o
				}) => c.a.createElement("div", {
					className: e
				}, t ? c.a.createElement(nn, {
					url: t
				}) : null, o ? c.a.createElement(tn, {
					isNsfw: s,
					subredditType: r
				}) : null, n ? c.a.createElement(an, null, n) : null, a ? c.a.createElement(sn, null) : null), "ImagePostRichUnit", Kt.a),
				cn = n("./src/chat/components/Message/RichUnit/Post/LinkPostRichUnit.m.less"),
				on = n.n(cn);
			const ln = l.a.div("Title", on.a),
				dn = l.a.div("Link", on.a);
			var un = l.a.wrapped(({
				className: e,
				title: t,
				link: n
			}) => c.a.createElement("div", {
				className: e
			}, c.a.createElement(ln, null, t), c.a.createElement(dn, {
				onClick: e => {
					e.stopPropagation(), Object(_e.d)(n, "_blank")
				}
			}, n)), "LinkPostRichUnit", on.a);

			function hn() {
				return (hn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var mn = e => c.a.createElement(et.a, hn({}, e, {
					viewBox: "0 0 24 20"
				}), c.a.createElement("path", {
					d: "M10.0001 18.5C8.03331 18.5048 6.12572 17.8275 4.60244 16.5833C3.07916 15.3392 2.03445 13.6053 1.64637 11.6772C1.25829 9.74911 1.55086 7.74609 2.47421 6.00952C3.39756 4.27296 4.89454 2.91033 6.71003 2.15388C8.52552 1.39742 10.5472 1.29396 12.4304 1.86111C14.3136 2.42827 15.9419 3.63095 17.0377 5.26417C18.1335 6.8974 18.629 8.86009 18.4398 10.8177C18.2506 12.7754 17.3884 14.6069 16.0001 16C15.2139 16.7913 14.2791 17.4195 13.2494 17.8485C12.2198 18.2775 11.1155 18.4989 10.0001 18.5ZM10.0001 3.50001C8.49637 3.50177 7.03978 4.02483 5.87847 4.98009C4.71716 5.93535 3.92298 7.2637 3.63122 8.73883C3.33946 10.214 3.56818 11.7446 4.2784 13.0701C4.98863 14.3955 6.13643 15.4336 7.52625 16.0077C8.91608 16.5818 10.4619 16.6562 11.9005 16.2183C13.339 15.7804 14.5813 14.8573 15.4155 13.6063C16.2498 12.3552 16.6245 10.8536 16.4758 9.35726C16.3271 7.86092 15.6642 6.46241 14.6001 5.40001C13.9964 4.79577 13.2792 4.31685 12.4898 3.99077C11.7003 3.6647 10.8542 3.49791 10.0001 3.50001Z"
				})),
				pn = n("./src/chat/components/Message/RichUnit/Post/PollPostRichUnit.m.less"),
				bn = n.n(pn);
			const gn = l.a.wrapped(Be, "LinkedText", bn.a),
				fn = l.a.div("Title", bn.a),
				Cn = l.a.wrapped(mn, "Checkbox", bn.a),
				En = l.a.div("OptionText", bn.a),
				On = l.a.wrapped(({
					option: e,
					className: t
				}) => c.a.createElement("div", {
					className: t
				}, c.a.createElement(Cn, null), c.a.createElement(En, null, e.text)), "Option", bn.a),
				vn = l.a.div("TotalVotesCount", bn.a),
				_n = l.a.div("Delimiter", bn.a),
				jn = l.a.wrapped(({
					className: e,
					options: t,
					totalVoteCount: n
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(vn, null, n, " ", S.fbt._("votes", null, {
					hk: "ObuMl"
				})), c.a.createElement(_n, null), t.map((e, t) => (null == e ? void 0 : e.text) && c.a.createElement(On, {
					key: t + (null == e ? void 0 : e.text) || "",
					option: e
				}))), "OptionsContainer", bn.a);
			var yn = l.a.wrapped(({
					className: e,
					title: t,
					content: n,
					options: a,
					totalVoteCount: s,
					darkBackground: r,
					highlights: o
				}) => c.a.createElement("div", {
					className: Object(i.a)(e, {
						[bn.a.dark]: r
					})
				}, c.a.createElement(jn, {
					options: a,
					totalVoteCount: s
				}), c.a.createElement(fn, null, t), n ? c.a.createElement(gn, {
					value: n,
					highlighMentionGroupLinks: o
				}) : null), "PollPostRichUnit", bn.a),
				In = n("./src/chat/components/Message/RichUnit/Post/PostRichUnit.m.less"),
				xn = n.n(In),
				Sn = n("./src/chat/components/Message/RichUnit/Post/TextPostRichUnit.m.less"),
				wn = n.n(Sn);
			const Nn = l.a.wrapped(Be, "LinkedText", wn.a),
				kn = l.a.div("Title", wn.a);
			var Tn = l.a.wrapped(({
					className: e,
					title: t,
					content: n,
					highlights: a
				}) => c.a.createElement("div", {
					className: e
				}, t ? c.a.createElement(kn, null, t) : null, n ? c.a.createElement(Nn, {
					value: n,
					highlighMentionGroupLinks: a
				}) : null), "TextPostRichUnit", wn.a),
				Mn = n("./src/chat/models/RichUnit/index.ts");

			function An() {
				return (An = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Un = l.a.wrapped(Tn, "TextPostRichUnit", xn.a),
				Dn = l.a.wrapped(un, "LinkPostRichUnit", xn.a),
				Rn = l.a.wrapped(rn, "ImagePostRichUnit", xn.a),
				Ln = l.a.wrapped(yn, "PollPostRichUnit", xn.a),
				Pn = l.a.div("Delimiter", xn.a),
				Bn = e => {
					var t, n, a, s, r, c;
					return e.poll ? Mn.a.POLL : (null === (a = null === (n = null === (t = e.gallery) || void 0 === t ? void 0 : t.items[0]) || void 0 === n ? void 0 : n.media) || void 0 === a ? void 0 : a.normal) ? Mn.a.GALLERY : (null === (r = null === (s = e.media) || void 0 === s ? void 0 : s.still) || void 0 === r ? void 0 : r.normal) ? Mn.a.IMAGE : (null === (c = e.content) || void 0 === c ? void 0 : c.html) ? Mn.a.TEXT : Mn.a.LINK
				},
				Hn = l.a.wrapped(e => {
					var t;
					const {
						className: n,
						isNsfw: a
					} = e, s = Bn(e);
					let r;
					(null === (t = null == e ? void 0 : e.content) || void 0 === t ? void 0 : t.html) && (r = ut(e.content.html));
					return c.a.createElement("div", {
						tabIndex: 0,
						className: n
					}, (() => {
						var t, n, o, i, l, d, u, h, m, p, b, g, f, C, E, O;
						switch (s) {
							case Mn.a.TEXT:
								return c.a.createElement(Un, {
									title: null == e ? void 0 : e.title,
									content: r,
									highlights: e.highlights
								});
							case Mn.a.POLL:
								return c.a.createElement(Ln, {
									title: null == e ? void 0 : e.title,
									content: r,
									options: (null === (t = e.poll) || void 0 === t ? void 0 : t.options) || [],
									totalVoteCount: (null === (n = e.poll) || void 0 === n ? void 0 : n.totalVoteCount) || 0,
									darkBackground: e.darkBackground,
									highlights: e.highlights
								});
							case Mn.a.IMAGE:
								return c.a.createElement(Rn, {
									url: (a ? null === (l = null === (i = null === (o = e.media) || void 0 === o ? void 0 : o.still) || void 0 === i ? void 0 : i.obfuscate) || void 0 === l ? void 0 : l.url : null === (h = null === (u = null === (d = e.media) || void 0 === d ? void 0 : d.still) || void 0 === u ? void 0 : u.normal) || void 0 === h ? void 0 : h.url) || "",
									title: null == e ? void 0 : e.title
								});
							case Mn.a.GALLERY:
								return c.a.createElement(Rn, {
									url: (a ? null === (g = null === (b = null === (p = null === (m = e.gallery) || void 0 === m ? void 0 : m.items[0]) || void 0 === p ? void 0 : p.media) || void 0 === b ? void 0 : b.obfuscate) || void 0 === g ? void 0 : g.url : null === (O = null === (E = null === (C = null === (f = e.gallery) || void 0 === f ? void 0 : f.items[0]) || void 0 === C ? void 0 : C.media) || void 0 === E ? void 0 : E.normal) || void 0 === O ? void 0 : O.url) || "",
									title: null == e ? void 0 : e.title,
									isGallery: !0
								});
							case Mn.a.LINK:
								return (null == e ? void 0 : e.url) ? c.a.createElement(Dn, {
									title: null == e ? void 0 : e.title,
									link: null == e ? void 0 : e.url
								}) : null;
							default:
								return null
						}
					})())
				}, "Content", xn.a),
				Fn = l.a.wrapped(({
					className: e,
					darkBackground: t,
					highlights: n,
					richUnitData: a,
					richUnitData: {
						score: s = 0,
						commentCount: r = 0
					},
					postUrl: o
				}) => {
					var l, d, u;
					const h = Bn(a);
					let m, p;
					a.type === J.c.POST ? m = a.subreddit : a.type === J.c.USER_POST && (p = a.redditor);
					const b = `${Object(ze.b)(s)} points • ${Object(ze.b)(r)} comments`;
					return c.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(_e.d)(t, "_blank")
							})(e, o)
						},
						className: Object(i.a)(e, {
							[xn.a.dark]: t
						})
					}, c.a.createElement(it, {
						authorName: null === (l = a.authorInfo) || void 0 === l ? void 0 : l.displayName,
						subredditName: null == m ? void 0 : m.name,
						redditorName: null == p ? void 0 : p.displayName,
						isPostComment: p,
						iconUrl: m ? null === (d = null == m ? void 0 : m.styles) || void 0 === d ? void 0 : d.icon : null === (u = null == p ? void 0 : p.icon) || void 0 === u ? void 0 : u.url
					}), h === Mn.a.LINK || h === Mn.a.TEXT ? c.a.createElement(Pn, null) : null, c.a.createElement(Hn, An({}, a, {
						highlights: n,
						darkBackground: t
					})), c.a.createElement(Ye, {
						metaInfo: b
					}))
				}, "RichPostUnit", xn.a);
			var Gn = l.a.wrapped(({
					darkBackground: e,
					highlights: t,
					postUrl: n,
					richUnitData: a,
					className: s
				}) => c.a.createElement("div", {
					className: s
				}, c.a.createElement(Fn, {
					darkBackground: e,
					highlights: t,
					richUnitData: a,
					postUrl: n
				})), "RichUnitWrapper", xn.a),
				Wn = n("./src/chat/components/Message/RichUnit/Subreddit/SubredditRichUnit.m.less"),
				Vn = n.n(Wn);
			const Kn = l.a.div("Delimiter", Vn.a),
				zn = l.a.wrapped(rn, "ImageContent", Vn.a),
				qn = l.a.wrapped(({
					className: e,
					imageUrl: t = "",
					title: n,
					subredditType: a,
					isNsfw: s
				}) => c.a.createElement("div", {
					className: e,
					tabIndex: 0
				}, c.a.createElement(zn, {
					url: t,
					title: n,
					subredditType: a,
					isNsfw: s,
					isSubreddit: !0
				})), "Content", Vn.a),
				Zn = l.a.wrapped(({
					className: e,
					darkBackground: t,
					richUnitData: n,
					richUnitData: {
						subscribersCount: a = 0,
						activeCount: s = 0
					}
				}) => {
					var r, o, l, d;
					const u = `${Object(ze.b)(a)} members • ${Object(ze.b)(s)} online`,
						h = `/r/${n.id}`;
					return c.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(_e.d)(t, "_blank")
							})(e, h)
						},
						className: Object(i.a)(e, {
							[Vn.a.dark]: t
						})
					}, c.a.createElement(it, {
						subredditName: n.id,
						iconUrl: null === (r = null == n ? void 0 : n.styles) || void 0 === r ? void 0 : r.icon,
						subredditTitle: n.title
					}), (null === (o = n.styles) || void 0 === o ? void 0 : o.bannerBackgroundImage) || !(null == n ? void 0 : n.subredditType) && !(null === (l = n.styles) || void 0 === l ? void 0 : l.bannerBackgroundImage) ? null : c.a.createElement(Kn, null), (null == n ? void 0 : n.subredditType) && c.a.createElement(qn, {
						imageUrl: null === (d = null == n ? void 0 : n.styles) || void 0 === d ? void 0 : d.bannerBackgroundImage,
						title: (null == n ? void 0 : n.publicDescriptionText) || "",
						subredditType: (null == n ? void 0 : n.subredditType) || "",
						isNsfw: Boolean(null == n ? void 0 : n.isNsfw)
					}), c.a.createElement(Ye, {
						isSubreddit: !0,
						metaInfo: u
					}))
				}, "SubredditRichUnit", Vn.a);
			var Qn = l.a.wrapped(({
					className: e,
					darkBackground: t,
					richUnitData: n
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(Zn, {
					darkBackground: t,
					richUnitData: n
				})), "RichUnitWrapper", Vn.a),
				Jn = n("./node_modules/lodash/isEmpty.js"),
				Xn = n.n(Jn);
			var Yn = e => c.a.createElement(et.a, {
					className: e.className,
					viewBox: "0 0 14 11"
				}, c.a.createElement("path", {
					d: "M13.1656,4.55472 L12.0464,3.43472 C11.896,3.28432 11.6928,3.20032 11.4808,3.20032 C11.268,3.20032 11.0648,3.28432 10.9152,3.43472 L5.32,9.02912 L3.0856,6.79472 C2.7736,6.48192 2.2672,6.48192 1.9544,6.79472 L0.8344,7.91472 C0.5216,8.22752 0.5216,8.73392 0.8344,9.04592 L4.7544,12.96592 C4.9112,13.12192 5.1152,13.20032 5.32,13.20032 C5.5248,13.20032 5.7296,13.12192 5.8856,12.96592 L13.1656,5.68592 C13.4784,5.37312 13.4784,4.86752 13.1656,4.55472",
					transform: "translate(0 -3)"
				})),
				$n = n("./src/chat/icons/svgs/Trash/index.tsx"),
				ea = n("./src/chat/components/MessageReportDialog/ActionMenu.m.less"),
				ta = n.n(ea);
			const {
				fbt: na
			} = n("./node_modules/fbt/lib/FbtPublic.js"), aa = l.a.wrapped(Yn, "Approve", ta.a), sa = l.a.wrapped($n.a, "Trash", ta.a), ra = l.a.div("ButtonControls", ta.a), ca = l.a.wrapped(Y.a, "Button", ta.a), oa = l.a.span("ButtonText", ta.a);
			class ia extends r.Component {
				render() {
					const {
						onDelete: e,
						onIgnore: t,
						reportedChannelId: n,
						reportedMessageId: a
					} = this.props;
					return c.a.createElement(ra, null, c.a.createElement(ca, {
						primaryNoBorder: !0,
						onClick: () => e(a, n)
					}, c.a.createElement(sa, null), c.a.createElement(oa, null, na._("Delete Message", null, {
						hk: "3ksti7"
					}))), c.a.createElement(ca, {
						primaryNoBorder: !0,
						onClick: () => t(a, n)
					}, c.a.createElement(aa, null), c.a.createElement(oa, null, na._("Ignore Report", null, {
						hk: "1QScZP"
					}))))
				}
			}
			var la = Object(o.b)(void 0, e => ({
					onDelete: (t, n) => e(Object(y.z)(t, n)),
					onIgnore: (t, n) => e(Object(y.A)(t, n))
				}))(ia),
				da = n("./src/chat/components/MemberActionDropdown/index.tsx"),
				ua = n("./src/config.ts"),
				ha = n("./src/chat/components/ChatIcon/index.tsx"),
				ma = n("./src/chat/controls/TimeStamp/index.m.less"),
				pa = n.n(ma);
			var ba = l.a.wrapped(e => {
					const t = "number" == typeof e.date ? new Date(e.date) : e.date;
					return c.a.createElement("time", {
						className: e.className,
						dateTime: A(t),
						title: M(t)
					}, e.children)
				}, "TimeStamp", pa.a),
				ga = n("./src/chat/components/MessageHeader/index.m.less"),
				fa = n.n(ga);
			const Ca = l.a.wrapped(ba, "TimeStamp", fa.a),
				Ea = l.a.span("UserName", fa.a);
			var Oa = l.a.wrapped(e => c.a.createElement("a", {
				target: _e.c.BLANK,
				rel: _e.b,
				className: e.className,
				href: `${ua.a.redditUrl}/user/${e.nickname}`
			}, c.a.createElement(ha.a, {
				userId: e.userId,
				isSmall: !0
			}), c.a.createElement(c.a.Fragment, null, c.a.createElement(Ea, null, e.nickname), c.a.createElement(Ca, {
				date: e.createdAt
			}, N(new Date(e.createdAt))), e.children)), "UserHeader", fa.a);
			var va = e => c.a.createElement(et.a, {
				className: e.className,
				disable: !0,
				viewBox: "0 0 16 16"
			}, c.a.createElement("g", {
				transform: "translate(-26.000000, -37.000000)"
			}, c.a.createElement("path", {
				d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
			})));

			function _a() {
				return (_a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ja = e => c.a.createElement(et.a, _a({}, e, {
					viewBox: "0 0 16 16"
				}), c.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				})),
				ya = n("./src/chat/icons/svgs/MenuOverflow/index.tsx"),
				Ia = n("./src/chat/components/MessageReportDialog/Header.m.less"),
				xa = n.n(Ia);
			const Sa = l.a.wrapped(va, "Group", xa.a),
				wa = l.a.wrapped(ja, "Key", xa.a),
				Na = l.a.wrapped(da.a, "MemberActionDropdown", xa.a),
				ka = l.a.wrapped(Oa, "MessageHeaderLink", xa.a),
				Ta = l.a.h5("ChannelName", xa.a),
				Ma = l.a.span("TextOverflow", xa.a),
				Aa = l.a.wrapped(Y.c, "IconButton", xa.a),
				Ua = l.a.div("Header", xa.a);
			var Da = e => {
					const {
						channelId: t,
						channelIsPublic: n,
						channelName: a,
						messageCreatedAt: s,
						messageId: r,
						reportedUserId: o,
						reportedUserName: i
					} = e, l = `UserAction--Item-${r}`;
					return c.a.createElement(Ua, null, c.a.createElement(ka, {
						createdAt: s,
						nickname: i,
						userId: o
					}, c.a.createElement(Ta, null, n ? c.a.createElement(Sa, null) : c.a.createElement(wa, null), c.a.createElement(Ma, null, a))), c.a.createElement(Na, {
						channelId: t,
						containerClassName: l,
						className: l,
						dropdownIndex: 0,
						id: `UserAction--Select-${r}`,
						isBlockedUser: !1,
						userId: o
					}, c.a.createElement(Aa, null, c.a.createElement(ya.a, null))))
				},
				Ra = n("./src/chat/components/MessageReportDialog/index.m.less"),
				La = n.n(Ra);
			const {
				fbt: Pa
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ba = l.a.p("ReasonText", La.a), Ha = l.a.p("DeleteText", La.a), Fa = l.a.p("AcceptText", La.a);
			var Ga = e => {
					const {
						actions: t,
						channelId: n,
						channelIsPublic: a,
						channelName: s,
						messageCreatedAt: r,
						messageValue: o,
						messageId: i,
						reason: l,
						reportedUserId: d,
						reportedUserName: u,
						reporterUserName: h
					} = e.report;
					return c.a.createElement(c.a.Fragment, null, n && s && a && i && r && d && u && c.a.createElement(Da, {
						channelId: n,
						channelIsPublic: a,
						channelName: s,
						messageCreatedAt: r,
						messageId: i,
						reportedUserId: d,
						reportedUserName: u
					}), o, c.a.createElement(Ba, null, Pa._("Reported for {reason}", [Pa._param("reason", l)], {
						hk: "2BwGqI"
					}), " ", h && Pa._("by /u{reporter}", [Pa._param("reporter", h)], {
						hk: "1hrZNZ"
					})), t && t.deleted && c.a.createElement(Ha, null, Pa._("Deleted by {username}", [Pa._param("username", `u/${t.deleted.userName}`)], {
						hk: "4mxZZS"
					})), t && t.ignored && c.a.createElement(Fa, null, Pa._("Approved by {username}", [Pa._param("username", `u/${t.ignored.userName}`)], {
						hk: "m22OH"
					})), Xn()(t) && c.a.createElement(la, {
						reportedMessageId: e.message.messageId,
						reportedChannelId: e.message.channelId
					}))
				},
				Wa = n("./src/chat/components/Snoomoji/index.tsx"),
				Va = n("./src/chat/controls/Gif/index.tsx"),
				Ka = n("./src/chat/selectors/messages.ts"),
				za = n("./src/chat/components/Message/Bubble.m.less"),
				qa = n.n(za);
			const {
				PENDING: Za,
				USER: Qa
			} = J.d, {
				POST: Ja,
				USER_POST: Xa,
				COMMENT: Ya,
				SNOOMOJI: $a,
				SUBREDDIT: es,
				EMBED: ts,
				GIF: ns
			} = J.c, as = l.a.wrapped(Va.a, "Gif", qa.a), ss = l.a.wrapped(ie, "ActionButtonGroup", qa.a), rs = l.a.wrapped(Be, "Text", qa.a), cs = l.a.wrapped(Gn, "RichPostUnit", qa.a), os = l.a.wrapped(gt, "RichCommentUnit", qa.a), is = l.a.wrapped(At, "ExternalLinkUnit", qa.a), ls = l.a.wrapped(Qn, "SubredditRichUnit", qa.a), ds = l.a.wrapped(e => c.a.createElement("div", {
				className: Object(i.a)(e.className, {
					[qa.a.dark]: e.darkBackground,
					[qa.a.disabled]: e.disabled,
					[qa.a.withBorder]: e.withBorder,
					[qa.a.noPadding]: e.noPadding
				})
			}, e.children, e.withButton && e.message && e.message.messageType === Qa && c.a.createElement(ss, {
				message: e.message,
				fromCurrentUser: e.fromCurrentUser,
				fromInvite: e.fromInvite
			})), "MessageBubble", qa.a), us = l.a.div("Snoo", qa.a);

			function hs(e) {
				return "messageId" in e && "channelId" in e
			}

			function ms(e, t) {
				return !(e.messageData.type !== J.c.EMBED || !e.messageData.embed || t) || !(e.messageData.type !== J.c.POST && e.messageData.type !== J.c.USER_POST && e.messageData.type !== J.c.COMMENT && e.messageData.type !== J.c.SUBREDDIT || t)
			}
			var ps = l.a.wrapped(e => {
					const {
						className: t,
						darkBackground: n,
						fromCurrentUser: a,
						fromInvite: s,
						message: r,
						withButton: l,
						inPreview: d,
						isChatEmbedded: u
					} = e;
					if (r) {
						const {
							type: e,
							report: h,
							collapsedInvitePreview: m
						} = r.messageData;
						let p;
						if (r.messageData.type === J.c.POST) {
							const {
								chatUnitId: e
							} = r.messageData;
							p = Object(o.e)(t => Object(Ka.j)(t, e))
						}
						if (r.messageData.type === J.c.USER_POST) {
							const {
								chatUnitId: e
							} = r.messageData;
							p = Object(o.e)(t => Object(Ka.m)(t, e))
						}
						if (r.messageData.type === J.c.COMMENT) {
							const {
								chatUnitId: e
							} = r.messageData;
							p = Object(o.e)(t => Object(Ka.b)(t, e))
						}
						if (r.messageData.type === J.c.SUBREDDIT) {
							const {
								chatUnitId: e
							} = r.messageData;
							p = Object(o.e)(t => Object(Ka.k)(t, e))
						}
						const b = ((e, t, n, a, s) => {
								var r, o, i, l, d;
								const {
									messageType: u,
									messageData: h,
									messageData: {
										highlights: m,
										value: p
									}
								} = e;
								if (t && h.type !== $a) return p;
								const b = c.a.createElement(rs, {
									value: p,
									highlighMentionGroupLinks: m
								});
								switch (h.type) {
									case ts:
										const {
											embed: e
										} = h;
										return u !== Za && e ? c.a.createElement(is, {
											name: e.name,
											title: e.title,
											thumbnailUrl: e.imageUrl,
											href: e.url,
											providerDisplay: e.providerDisplay,
											darkBackground: n,
											faviconUrl: e.faviconUrl
										}) : c.a.createElement(rs, {
											value: p,
											highlighMentionGroupLinks: m
										});
									case Ja:
									case Xa:
										return (null == a ? void 0 : a.type) !== Ja && (null == a ? void 0 : a.type) !== Xa || (null == a ? void 0 : a.removedByCategory) === Mn.b.Deleted ? b : c.a.createElement(cs, {
											darkBackground: n,
											postUrl: p,
											highlights: m,
											richUnitData: a
										});
									case Ya:
										return a && (null == a ? void 0 : a.type) === Ya && !a.deletedAt ? c.a.createElement(os, {
											darkBackground: n,
											commentUrl: p,
											highlights: m,
											richUnitData: a
										}) : b;
									case es:
										return a && a.type === es ? c.a.createElement(ls, {
											darkBackground: n,
											richUnitData: a
										}) : b;
									case $a:
										return c.a.createElement(us, null, c.a.createElement(Wa.a, {
											iconName: p
										}));
									case ns: {
										const e = void 0 !== (null === (r = h.gif) || void 0 === r ? void 0 : r.width) && (null === (o = h.gif) || void 0 === o ? void 0 : o.width),
											t = s && e ? 275 / e : 1;
										return c.a.createElement(as, {
											imageScale: t,
											source: p,
											title: null === (i = h.gif) || void 0 === i ? void 0 : i.title,
											height: null === (l = h.gif) || void 0 === l ? void 0 : l.height,
											width: null === (d = h.gif) || void 0 === d ? void 0 : d.width
										})
									}
									default:
										return b
								}
							})(r, d, n, p, u),
							g = r.messageType === Za && r.error && r.clientMessageId;
						return c.a.createElement("div", {
							className: Object(i.a)(t, (p || r.messageData.type === J.c.EMBED) && {
								[qa.a.richUnit]: ms(r, !u),
								[qa.a.richUnitResponsive]: ms(r, u)
							})
						}, c.a.createElement(ds, {
							darkBackground: n,
							fromCurrentUser: a,
							fromInvite: s,
							withButton: l && !g && !h,
							withBorder: e !== $a && e !== ns,
							message: r,
							disabled: !!g,
							noPadding: e === ns
						}, h && r.messageType === Qa ? c.a.createElement(Ga, {
							report: h,
							message: r
						}) : s && hs(r) && function(e) {
							return Boolean(null == e ? void 0 : e.shouldCollapse)
						}(m) ? c.a.createElement(me, {
							channelId: r.channelId,
							messageId: r.messageId
						}) : b), s && hs(r) && function(e) {
							return Boolean(!(null == e ? void 0 : e.shouldCollapse) && (null == e ? void 0 : e.shouldShowReportPrompt))
						}(m) && c.a.createElement(Ke, {
							channelId: r.channelId,
							messageId: r.messageId
						}), g && c.a.createElement(Oe, {
							channelId: r.channelId,
							clientMessageId: g
						}))
					}
					return null
				}, "MessageItemBubble", qa.a),
				bs = n("./src/chat/components/Message/SystemMessage.m.less"),
				gs = n.n(bs);
			const fs = l.a.wrapped(Be, "LinkedText", gs.a);
			var Cs = l.a.wrapped(e => {
					const {
						message: t,
						className: n
					} = e, {
						messageData: {
							value: a,
							highlights: s
						}
					} = t;
					return c.a.createElement("div", {
						className: n
					}, c.a.createElement(fs, {
						value: a,
						highlighMentionGroupLinks: s
					}))
				}, "SystemMessage", gs.a),
				Es = n("./src/chat/components/MessageInput/index.tsx"),
				Os = n("./src/chat/components/MessageList/index.m.less"),
				vs = n.n(Os),
				_s = n("./src/chat/components/MessageQuickReplyPicker/index.m.less"),
				js = n.n(_s);
			const ys = ["upvote", "snoo"],
				Is = l.a.div("SnooWrapper", js.a),
				xs = l.a.wrapped(e => {
					const {
						className: t,
						text: n,
						type: a,
						onReply: s
					} = e;
					return c.a.createElement("button", {
						tabIndex: 0,
						className: t,
						onClick: () => s(n)
					}, (() => {
						switch (a) {
							case J.c.TEXT:
								return n;
							case J.c.SNOOMOJI:
								return c.a.createElement(Is, null, c.a.createElement(Wa.a, {
									iconName: n
								}))
						}
					})())
				}, "ReplyItem", js.a);
			var Ss = l.a.wrapped(e => {
					const {
						className: t,
						channelId: n
					} = e, a = Object(o.d)();
					return Object(o.e)(e => Object(te.N)(e, n)) ? c.a.createElement("div", {
						className: t
					}, c.a.createElement(xs, {
						type: J.c.TEXT,
						text: S.fbt._("Thanks for the award!", null, {
							hk: "3aibi5"
						}),
						onReply: e => {
							a(Object(y.q)(n, String(e).trim(), J.c.TEXT)), a(Object(le.q)(le.a.FIRST, String(e).trim()))
						}
					}), ys.map((e, t) => c.a.createElement(xs, {
						type: J.c.SNOOMOJI,
						key: e,
						text: e,
						onReply: e => {
							a(Object(y.q)(n, e, J.c.SNOOMOJI)), a(Object(le.q)(t + 2, e))
						}
					}))) : null
				}, "MessageQuickReplyPicker", js.a),
				ws = n("./src/chat/components/OverlayNav/index.tsx"),
				Ns = n("./src/chat/components/Scroller/index.tsx"),
				ks = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				Ts = n("./src/chat/models/Channel/index.ts"),
				Ms = n("./src/chat/components/TypingIndicator/index.m.less"),
				As = n.n(Ms);
			const Us = l.a.span("IndicatorText", As.a);
			Us.displayName = "IndicatorText";
			var Ds = e => c.a.createElement(Us, {
					className: e.className
				}, ((e, t) => e === Ts.a.Direct ? S.fbt._("is typing...", null, {
					hk: "UTaH4"
				}) : 1 === t.length ? S.fbt._("{firstUser} is typing...", [S.fbt._param("firstUser", t[0])], {
					hk: "480JMK"
				}) : 2 === t.length ? S.fbt._("{firstUser} and {secondUser} are typing", [S.fbt._param("firstUser", t[0]), S.fbt._param("secondUser", t[1])], {
					hk: "3zfAnp"
				}) : t.length > 2 ? S.fbt._("Several people are typing...", null, {
					hk: "39edn3"
				}) : void 0)(e.channelType, e.usernames)),
				Rs = n("./src/chat/constants/batchSizes.ts"),
				Ls = n("./src/chat/selectors/app.ts");
			const {
				fbt: Ps
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Bs = l.a.wrapped(Cs, "SystemBubble", vs.a), Hs = l.a.wrapped(ps, "MessageItemBubble", vs.a), Fs = l.a.wrapped(e => {
				const {
					className: t,
					innerRef: n,
					autoScrollBottom: a,
					children: s,
					loadMoreRows: r
				} = e;
				return c.a.createElement(Ns.b, {
					loadMoreRows: r,
					autoScrollBottom: a,
					ref: n,
					className: t
				}, s)
			}, "Scroller", vs.a), Gs = l.a.div("Container", vs.a), Ws = l.a.div("ReverseCol", vs.a), Vs = l.a.wrapped(Es.c, "MessageInput", vs.a), Ks = l.a.span("LoadingIndicator", vs.a), zs = l.a.span("LoadingError", vs.a), qs = l.a.div("TypingIndicatorWrapper", vs.a), Zs = l.a.wrapped(Ss, "MessageQuickReplyPicker", vs.a), Qs = Object($.a)({
				currentUser: e => e.user.account,
				channelMessages: e => Object(te.u)(e),
				channelPendingMessages: e => Object(te.v)(e),
				fetchingMessages: e => Object(te.w)(e, "fetchingMessages"),
				fetchingMessagesError: e => Object(te.w)(e, "fetchingMessagesError"),
				hasMoreMessages: e => Object(te.w)(e, "hasMoreMessages"),
				isMessageListLoaded: e => Object(te.w)(e, "isMessageListLoaded"),
				isModerator: e => Object(te.a)(e),
				typingIndicatorUsernames: e => e.typingIndicator.usernames,
				isChatEmbedded: e => Object(Ls.d)(e),
				isRichUnitDataReceived: e => Object(Ka.o)(e),
				isFullSize: Ls.e
			}), Js = Object(o.b)(Qs, e => ({
				getPreviousMessages: () => e(Object(y.t)()),
				removeAndResetMessages: t => e(Object(I.c)(t)),
				resetChannelMessageList: t => e(Object(j.M)(t)),
				resetRichUnisDataReceived: () => e(Object(x.e)())
			})), Xs = 30, Ys = 2 * Rs.a.Messages;
			class $s extends c.a.Component {
				constructor(e) {
					super(e), this.scroller = c.a.createRef(), this.getOtherMemberName = () => {
						const {
							channel: e,
							currentUser: t
						} = this.props, n = e.members.find(({
							id: e
						}) => e !== t.id);
						return n ? n.name : t.name
					}, this.getTitle = () => {
						switch (this.props.channel.type) {
							case Ts.a.Group:
								return this.props.channel.name;
							default:
								return this.getOtherMemberName()
						}
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
						if (s !== J.d.SYSTEM) return !1;
						if (n === J.b.CHANNEL) return !0;
						if (n === J.b.USERS && Array.isArray(a)) {
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
							isChatEmbedded: a
						} = this.props;
						if (e.length) {
							return _()([...e, ...t], "createdAt").map((e, t, s) => {
								const {
									createdAt: r,
									sender: o
								} = e, i = o && o.userId, l = o && o.nickname, d = this.isSplitterDisplayed(e, t, s), h = this.getPreviousTime(t, s), m = this.getPreviousUserId(t, s) === i, p = r - h < 5 * u.fb, b = !(m && p), g = e.messageType === J.d.SYSTEM && this.isSystemMessageDisplayed(n, e), f = d && c.a.createElement(P, {
									date: r
								}), C = b && l && i && c.a.createElement(Oa, {
									createdAt: r,
									userId: i,
									nickname: l
								}), E = (e => {
									const {
										sender: t
									} = e, s = t && t.userId, r = n.id === s;
									return c.a.createElement(Hs, {
										message: e,
										fromCurrentUser: r,
										fromInvite: !1,
										darkBackground: r,
										withButton: !0,
										isChatEmbedded: a
									})
								})(e);
								switch (e.messageType) {
									case J.d.PENDING:
									case J.d.USER:
										return c.a.createElement(c.a.Fragment, {
											key: e.createdAt
										}, f, c.a.createElement(c.a.Fragment, null, C, E));
									case J.d.SYSTEM:
										return g && c.a.createElement(c.a.Fragment, {
											key: e.createdAt
										}, f, c.a.createElement(Bs, {
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
					e.isRichUnitDataReceived !== this.props.isRichUnitDataReceived && this.props.isRichUnitDataReceived && this.props.resetRichUnisDataReceived(), this.scrollDownOnChannelSwitch(e)
				}
				isChannelSwitched(e) {
					return this.props.channel.channelId !== e.channel.channelId
				}
				scrollDownOnChannelSwitch(e) {
					this.scroller.current && this.isChannelSwitched(e) && this.scroller.current.scrollToBottom()
				}
				resetMessageNumberOnChannelSwitch(e) {
					const {
						channelMessages: t,
						resetChannelMessageList: n
					} = this.props;
					if (t.length > Xs && this.isChannelSwitched(e)) {
						const e = t.length - Xs,
							a = t.slice(0, e);
						n(O()(a, ({
							messageId: e
						}) => String(e)))
					}
				}
				removeResetTooOldMessages() {
					var e;
					const t = this.props.channelMessages.length > Ys,
						n = Boolean(null === (e = this.scroller.current) || void 0 === e ? void 0 : e.isScrolledToBottom());
					t && n && this.props.removeAndResetMessages(this.props.channelMessages)
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
							isModerator: r,
							hasMoreMessages: o,
							typingIndicatorUsernames: l,
							isFullSize: d
						},
						loadMoreRows: u
					} = this, h = this.renderMessages(), m = this.getTitle(), p = !o && s && e.members;
					return c.a.createElement(Gs, null, c.a.createElement(ws.a, {
						channelId: t,
						showMenu: !0,
						title: m,
						channelType: null == e ? void 0 : e.type,
						showMembers: !0
					}), c.a.createElement(Ws, {
						className: Object(i.a)(vs.a.ReverseCol, {
							[vs.a.isFullSize]: d
						})
					}, c.a.createElement(Fs, {
						autoScrollBottom: !0,
						innerRef: this.scroller,
						loadMoreRows: u
					}, n && c.a.createElement(zs, {
						onClick: a
					}, Ps._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})), p ? c.a.createElement(Z, {
						users: e.members,
						channel: e
					}) : n ? c.a.createElement(zs, {
						onClick: a
					}, Ps._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})) : s ? c.a.createElement(Ks, null, Ps._("Loading history...", null, {
						hk: "4tLHUG"
					})) : c.a.createElement(ks.e, null), h)), c.a.createElement(qs, {
						className: Object(i.a)(vs.a.TypingIndicatorWrapper, {
							[vs.a.isFullSize]: d
						})
					}, e && l.length ? c.a.createElement(Ds, {
						usernames: l,
						channelType: e.type
					}) : null), c.a.createElement(Zs, {
						channelId: e.channelId
					}), c.a.createElement(Vs, {
						channelId: e.channelId,
						isLocked: e.isFrozen,
						isModerator: r,
						isMuted: e.isUserMuted,
						onSubmit: () => {
							this.scroller.current && this.scroller.current.scrollToBottom()
						}
					}))
				}
			}
			var er = Js($s),
				tr = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				nr = n("./src/chat/actions/members.ts"),
				ar = n("./src/chat/components/ChatMemberList/index.tsx"),
				sr = n("./src/chat/constants/channels.ts"),
				rr = n("./src/chat/controls/Overlay/index.tsx"),
				cr = n("./src/chat/helpers/dom.ts"),
				or = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				ir = n.n(or);
			const lr = l.a.wrapped(Y.a, "Button", ir.a),
				dr = Object(o.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(cr.b)(() => e(Object(Q.a)()))
				})),
				ur = l.a.div("OverlayControlBar", ir.a),
				hr = dr(e => c.a.createElement(ur, {
					className: Object(i.a)({
						[ir.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? c.a.createElement(lr, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, S.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : c.a.createElement(lr, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || S.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && c.a.createElement(lr, {
					type: "submit",
					primary: !0,
					onClick: e.primaryButtonAction || e.onSubmit,
					disabled: e.primaryButtonDisabled
				}, e.primaryButtonText || S.fbt._("Submit", null, {
					hk: "2Iwjdv"
				}))));
			hr.displayName = "OverlayControlBar";
			var mr = hr,
				pr = n("./src/chat/components/ToastNotification/index.tsx"),
				br = n("./src/chat/controls/OverlayHeader/index.m.less"),
				gr = n.n(br);
			const fr = l.a.header("Header", gr.a),
				Cr = l.a.h1("Title", gr.a),
				Er = l.a.span("Normal", gr.a),
				Or = l.a.span("Warning", gr.a);
			var vr = ({
					message: e,
					title: t,
					warning: n
				}) => {
					const a = n ? Or : Er;
					return c.a.createElement(fr, null, c.a.createElement(Cr, null, t), c.a.createElement(a, null, e), c.a.createElement(pr.a, null))
				},
				_r = n("./src/chat/selectors/members.ts"),
				jr = n("./src/chat/components/OverlayChatMembers/index.m.less"),
				yr = n.n(jr);
			const Ir = l.a.wrapped(Ns.b, "Scroller", yr.a),
				xr = l.a.div("LoadingIndicator", yr.a),
				Sr = Object($.a)({
					channelType: e => Object(te.w)(e, "type"),
					currentChannel: te.j,
					memberCount: e => Object(te.w)(e, "memberCount"),
					members: e => Object(_r.f)(e),
					fetchingMembers: _r.a,
					hasMoreMembers: _r.d
				});
			var wr = Object(o.b)(Sr, e => ({
					fetchChannelMembers: t => e(Object(nr.e)({
						loadMore: t
					}))
				}))((function(e) {
					const {
						channelId: t,
						currentChannel: n,
						memberCount: a,
						members: s,
						fetchChannelMembers: r,
						fetchingMembers: o,
						hasMoreMembers: i
					} = e;
					if (n) {
						const {
							channelState: e
						} = n, l = e === sr.b.INVITED, d = e === sr.b.JOINED, u = () => {
							!o && i && r({
								loadMore: !0
							})
						}, h = () => !!o;
						return o || s.length || r(), c.a.createElement(rr.a, {
							form: !0,
							innerContent: !0
						}, c.a.createElement(vr, {
							title: S.fbt._({
								"*": "{number of members} group members",
								_1: "1 group member"
							}, [S.fbt._plural(a, "number of members")], {
								hk: "4phXDa"
							})
						}), c.a.createElement(Ir, {
							loadMoreRows: u,
							isLoadMoreRowsComplete: h,
							threshold: 0
						}, c.a.createElement(ar.a, {
							channelId: t,
							members: s,
							modIndicator: !0,
							useNSFWIcons: l || d
						}), o && c.a.createElement(xr, {
							role: "progressbar"
						}, S.fbt._("Loading members...", null, {
							hk: "2sCDrM"
						}))), c.a.createElement(mr, {
							secondaryButtonOnly: !0,
							secondaryButtonText: S.fbt._("Done", null, {
								hk: "2xerWP"
							})
						}))
					}
					return null
				})),
				Nr = n("./node_modules/lodash/noop.js"),
				kr = n.n(Nr),
				Tr = n("./node_modules/lodash/uniqBy.js"),
				Mr = n.n(Tr),
				Ar = n("./src/chat/actions/sendbird/index.ts"),
				Ur = n("./src/chat/actions/user.ts"),
				Dr = n("./node_modules/lodash/last.js"),
				Rr = n.n(Dr),
				Lr = n("./src/chat/constants/keys.ts"),
				Pr = n("./src/chat/components/SearchBar/index.m.less"),
				Br = n.n(Pr);
			const Hr = l.a.span("Bubble", Br.a),
				Fr = l.a.span("SearchBarLabel", Br.a),
				Gr = l.a.span("SearchBarField", Br.a),
				Wr = l.a.input("SearchBarInput", Br.a),
				Vr = l.a.wrapped(Ns.b, "SearchBarWrapper", Br.a);
			class Kr extends c.a.Component {
				constructor(e) {
					super(e), this.bubbleRefs = {}, this.timeoutToken = null, this.onBubbleKey = e => t => {
						switch (t.key) {
							case Lr.f:
							case Lr.e: {
								const t = this.searchBarInputRef.current;
								return t && t.focus(), this.props.onUnselect(e.id)
							}
							case Lr.b: {
								const e = t.target;
								if (e.previousElementSibling) {
									e.previousElementSibling.focus()
								}
								break
							}
							case Lr.c: {
								const e = t.target;
								if (e.nextElementSibling) {
									e.nextElementSibling.focus()
								}
							}
						}
					}, this.onBubbleKey = this.onBubbleKey.bind(this), this.onFilterChange = this.onFilterChange.bind(this), this.stopEnter = this.stopEnter.bind(this), this.searchKeyHandler = this.searchKeyHandler.bind(this), this.searchBarInputRef = c.a.createRef()
				}
				stopEnter(e) {
					e.key === Lr.g && e.preventDefault()
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
					} = this, s = e.currentTarget, r = () => s.value;
					switch (this.timeoutToken && clearTimeout(this.timeoutToken), this.timeoutToken = setTimeout(() => {
						r() && n(r())
					}, a), e.key) {
						case Lr.g:
							return n(r());
						case Lr.b:
						case Lr.f:
						case Lr.e:
							if (0 === r().length) {
								const e = Rr()(this.props.selectedContacts);
								if (e && e.name) {
									const t = this.bubbleRefs[e.name];
									t && t.focus()
								}
							}
					}
					return t(r())
				}
				render() {
					const {
						props: {
							filter: e,
							resetFilter: t,
							selectedContacts: n,
							onFilterReset: a
						}
					} = this, s = t ? "" : e;
					return c.a.createElement(Vr, {
						autoScrollBottom: !0
					}, c.a.createElement(Fr, null, S.fbt._("To:", null, {
						hk: "2eyFcf"
					})), c.a.createElement(Gr, null, n && n.length > 0 && n.map((e, t) => c.a.createElement(Hr, {
						key: `selected-contact-${t}`,
						tabIndex: 0,
						onKeyDown: Object(cr.a)(this.onBubbleKey(e)),
						innerRef: t => {
							t && (this.bubbleRefs[e.name] = t)
						}
					}, e.name)), c.a.createElement(Wr, {
						key: "search-bar",
						type: "text",
						autoFocus: !0,
						value: s,
						onFocus: a,
						onChange: this.onFilterChange,
						onKeyDown: this.stopEnter,
						onKeyUp: this.searchKeyHandler,
						innerRef: this.searchBarInputRef
					})))
				}
			}
			Kr.defaultProps = {
				onIdentifyContactTimeout: 1e3
			};
			var zr = n("./src/chat/controls/Checkbox/index.tsx"),
				qr = n("./src/chat/components/SelectableUser/index.m.less"),
				Zr = n.n(qr);
			const Qr = l.a.wrapped(zr.a, "Checkbox", Zr.a),
				Jr = l.a.wrapped(H.a, "UserPic", Zr.a),
				Xr = l.a.span("Name", Zr.a);
			class Yr extends r.Component {
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
					return c.a.createElement(Qr, {
						type: "checkbox",
						name: n,
						value: t,
						onChange: s,
						checked: a(e),
						id: e
					}, c.a.createElement(Jr, {
						userId: e
					}), c.a.createElement(Xr, null, t))
				}
			}
			var $r = n("./src/chat/components/UnselectableUser/index.m.less"),
				ec = n.n($r);
			const tc = l.a.span("Wrapper", ec.a),
				nc = l.a.span("Content", ec.a),
				ac = l.a.wrapped(H.a, "UserPic", ec.a),
				sc = l.a.span("Name", ec.a),
				rc = l.a.span("Context", ec.a);
			class cc extends r.Component {
				render() {
					const {
						contact: {
							id: e,
							name: t
						},
						context: n
					} = this.props;
					return c.a.createElement(tc, null, c.a.createElement(nc, null, c.a.createElement(ac, {
						userId: e
					}), c.a.createElement(sc, null, t)), c.a.createElement(rc, null, n))
				}
			}
			var oc = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				ic = n("./src/chat/controls/Counter/index.tsx"),
				lc = n("./src/chat/selectors/contacts.ts"),
				dc = n("./src/chat/selectors/platform.ts"),
				uc = n("./src/chat/selectors/user.ts"),
				hc = n("./src/chat/components/OverlayCreateChannel/index.m.less"),
				mc = n.n(hc);
			const pc = "contactForm",
				bc = l.a.div("Content", mc.a),
				gc = l.a.wrapped(zr.a, "Checkbox", mc.a),
				fc = l.a.wrapped(Ns.b, "Scroller", mc.a),
				Cc = l.a.div("ListItem", mc.a),
				Ec = l.a.div("ListItemHeader", mc.a),
				Oc = l.a.h4("ChatListHeader", mc.a),
				vc = l.a.span("Name", mc.a),
				_c = l.a.span("Error", mc.a),
				jc = l.a.wrapped(oc.a, "ChannelNameInput", mc.a),
				yc = l.a.div("OverlayContent", mc.a),
				Ic = l.a.wrapped(e => c.a.createElement("div", {
					className: Object(i.a)(e.className, {
						[mc.a.shown]: e.isShown
					})
				}, e.children), "ChannelNameWrapper", mc.a);
			Ic.displayName = "ChannelNameWrapper";
			const xc = e => e.toLocaleLowerCase(),
				Sc = Object($.a)({
					channelAction: e => Object(dc.c)(e),
					channel: e => Object(te.j)(e),
					contacts: lc.h,
					currentUserName: uc.b,
					existingGroupUsers: e => {
						const t = Object(te.w)(e, "members");
						return t && t.map(e => e.id)
					},
					isCreatingChannel: te.J,
					loadedContacts: lc.i,
					knownContacts: lc.g,
					memberCount: e => Object(te.w)(e, "memberCount"),
					selectedUsers: lc.j,
					selectedUsersCount: lc.k
				}),
				wc = Object(o.b)(Sc, e => ({
					onCreateNewChannel: (t, n) => e(Object(j.B)(t, n)),
					onInviteUsersToExistingChannel: t => e(Object(j.H)(t)),
					onIdentifyContact: t => e(Object(Ar.k)({
						username: t
					})),
					onCancelAndGoBack: () => {
						e(Object(Q.a)()), e(Object(le.e)())
					},
					onSelectUser: t => e(Object(Ur.m)(t)),
					onUnselectUser: t => e(Object(Ur.t)(t)),
					removeAllSelectedUsers: () => e(Object(Ur.s)()),
					requestSuggestedContacts: () => e(Object(Ar.n)())
				}));
			class Nc extends c.a.Component {
				constructor(e) {
					super(e), this.isUserSelected = e => this.props.selectedUsers.includes(e), this.isCreateChannelURLAction = () => this.props.channelAction === sr.a.CREATE, this.isInviteMembersURLAction = () => this.props.channelAction === sr.a.INVITE_MEMBERS, this.isExistingGroupUser = e => !(!(this.isInviteMembersURLAction() && this.props.existingGroupUsers && this.props.existingGroupUsers.includes(e)) || this.isUserSelected(e)), this.hasTooManyMembers = () => {
						const {
							isCreatingChannel: e,
							memberCount: t,
							selectedUsersCount: n
						} = this.props;
						if (e) return n > sr.f;
						return (n || 0) + (t || 0) > sr.f
					}, this.isSubmitDisabled = e => {
						const {
							isCreatingChannel: t,
							selectedUsersCount: n
						} = this.props, a = this.isCreateChannelURLAction(), s = e < 0, r = n > 1, c = this.hasTooManyMembers();
						return !n || t || a && r && (s || c) || !a && c
					}, this.getInviteMembersText = () => S.fbt._("Add to group", null, {
						hk: "4n0y9e"
					}), this.primaryButtonText = () => this.isInviteMembersURLAction() ? this.getInviteMembersText() : S.fbt._("Start a chat", null, {
						hk: "4BZNdM"
					}), this.getBlockedContactText = e => e.isBlocked ? S.fbt._("blocked", null, {
						hk: "3BVDae"
					}) : !1 === e.acceptChats ? S.fbt._("unable to message this account", null, {
						hk: "SDEZ3"
					}) : S.fbt._("already in group", null, {
						hk: "1z5QI7"
					}), this.getOverlayTitle = () => this.isCreateChannelURLAction() ? S.fbt._("Create Group", null, {
						hk: "1SQOf3"
					}) : this.getInviteMembersText(), this.getOverlayMessage = () => {
						const {
							selectedUsersCount: e
						} = this.props;
						return e === sr.f ? S.fbt._("Maximum group size reached", null, {
							hk: "7hpRV"
						}) : ""
					}, this.getSelectedContacts = this.getSelectedContacts.bind(this), this.onContactsSelect = this.onContactsSelect.bind(this), this.onFilterContacts = this.onFilterContacts.bind(this), this.onFilterReset = this.onFilterReset.bind(this), this.onSubmit = this.onSubmit.bind(this), this.onCancel = this.onCancel.bind(this), this.handleChannelNameInput = this.handleChannelNameInput.bind(this), this.searchBarElement = c.a.createRef(), this.state = {
						filter: "",
						resetFilter: !1,
						groupName: ""
					}
				}
				UNSAFE_componentWillMount() {
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
							selectedUsersCount: r
						} = this.props;
					s.includes(t) ? a(t) : (r < sr.f || r < 1) && (this.setState(e => ({
						...e,
						resetFilter: !0
					})), n(t)), this.searchBarElement.current && this.searchBarElement.current.focus()
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
						onCreateNewChannel: e,
						onInviteUsersToExistingChannel: t
					} = this.props, n = this.getSelectedContacts().map(e => e.id);
					if (n && n.length) {
						const a = this.getGroupName();
						this.isCreateChannelURLAction() ? e(n, a) : t(n)
					}
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
						for (const a in e) xc(e[a].id) === t && n.push(e[a])
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
					return t ? e.filter(e => xc(e.name).includes(xc(t)) && !e.isBlocked) : e
				}
				getLoadedContact() {
					return this.props.loadedContacts.find(e => e && xc(e.name) === xc(this.state.filter))
				}
				getIsValidUser(e) {
					const t = this.props.knownContacts[xc(e)];
					return !t || !t.loaded || t.valid
				}
				availableCharacters(e) {
					return sr.e - e.length
				}
				getGroupName() {
					const e = this.state.groupName.trim();
					if (e) return e;
					let t = this.getSelectedContacts();
					if (!t.length) return "";
					let {
						currentUserName: n
					} = this.props;
					for (; t.length && n.length + t[0].name.length <= sr.e;) n = n + ", " + t[0].name, t = t.splice(1, t.length - 1);
					return n
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
							groupName: r
						},
						isUserSelected: o,
						isExistingGroupUser: i,
						onFilterReset: l,
						onFilterContacts: d,
						onContactsSelect: u,
						onSubmit: h,
						onCancel: m
					} = this, p = this.getSelectedContacts(), b = this.getFilteredContacts(), g = this.getLoadedContact(), f = !!a && !g, C = !!g, E = !this.getIsValidUser(a), O = this.handleChannelNameInput, v = this.availableCharacters(r), _ = this.isSubmitDisabled(v), j = this.primaryButtonText(), y = this.isCreateChannelURLAction(), I = n >= sr.f;
					return c.a.createElement(rr.a, {
						className: e,
						onSubmit: Object(cr.a)(h),
						innerContent: !0,
						form: !0
					}, c.a.createElement(yc, null, c.a.createElement(vr, {
						message: this.getOverlayMessage(),
						title: this.getOverlayTitle(),
						warning: I
					}), c.a.createElement(bc, null, y && c.a.createElement(Ic, {
						isShown: n > 1
					}, c.a.createElement(jc, {
						handleChannelNameInput: O,
						placeholder: S.fbt._("Group name", null, {
							hk: "3YSrvu"
						})
					}, c.a.createElement(ic.a, {
						count: v
					}))), c.a.createElement(Kr, {
						innerRef: this.searchBarElement,
						filter: a,
						resetFilter: s,
						selectedContacts: p,
						onFilterReset: l,
						onFilterContacts: d,
						onIdentifyContact: t,
						onUnselect: this.props.onUnselectUser
					}), c.a.createElement(fc, {
						loadMoreRows: kr.a,
						threshold: 0
					}, Mr()(b, e => e.name).map(e => c.a.createElement(Cc, {
						key: e.name
					}, i(e.id) || e.isBlocked || !1 === e.acceptChats ? c.a.createElement(cc, {
						contact: e,
						context: this.getBlockedContactText(e)
					}) : c.a.createElement(Yr, {
						formName: pc,
						contact: e,
						onChange: u,
						isChecked: o
					}))), (f || C) && c.a.createElement(Ec, null, c.a.createElement(Oc, null, S.fbt._("Click to add", null, {
						hk: "4khdH7"
					}))), f && !C && c.a.createElement(Cc, null, c.a.createElement(gc, {
						type: "checkbox",
						disabled: !0,
						name: pc,
						value: a,
						onChange: u
					}, c.a.createElement(vc, null, a, E && c.a.createElement(_c, null, S.fbt._("User doesn't exist", null, {
						hk: "2nKv7P"
					}))))), C && g && c.a.createElement(Cc, null, !y && (i(g.id) || g.isBlocked) || !1 === g.acceptChats ? c.a.createElement(cc, {
						contact: g,
						context: this.getBlockedContactText(g)
					}) : c.a.createElement(Yr, {
						formName: pc,
						contact: g,
						onChange: u,
						isChecked: o
					})))), c.a.createElement(mr, {
						primaryButtonText: j,
						primaryButtonDisabled: _,
						secondaryButtonAction: m
					})))
				}
			}
			Nc.displayName = "OverlayCreateChannel";
			var kc = wc(Nc),
				Tc = n("./src/chat/components/Sidebar/index.tsx"),
				Mc = n("./src/chat/constants/container.ts"),
				Ac = n("./src/chat/constants/page.ts"),
				Uc = n("./src/chat/components/OverlayBlockUser/index.m.less"),
				Dc = n.n(Uc);
			const Rc = l.a.div("Container", Dc.a),
				Lc = l.a.p("Text", Dc.a),
				Pc = Object($.a)({
					blockedUser: (e, t) => e.contacts.models[t.blockedUserId]
				});
			var Bc = Object(o.b)(Pc, e => ({
					onChannelBlock: t => {
						e(Ur.n(t)), e(le.w())
					}
				}))(e => {
					const {
						blockedUser: t,
						blockedUserId: n,
						onChannelBlock: a
					} = e, s = t ? t.name : S.fbt._("user", null, {
						hk: "3ddTpU"
					});
					return c.a.createElement(rr.a, null, c.a.createElement(ws.a, {
						channelId: e.channelId,
						title: S.fbt._("Block {username}", [S.fbt._param("username", s)], {
							hk: "2aTkTS"
						})
					}), c.a.createElement(Rc, null, c.a.createElement(Lc, null, S.fbt._("Are you sure you want to block this user?", null, {
						hk: "31Tn9j"
					})), c.a.createElement(Lc, null, S.fbt._("You will no longer see their comments, posts, and messages. They will not know that you've blocked them. You will no longer get notifications from this user.", null, {
						hk: "veMnN"
					}))), c.a.createElement(mr, {
						primaryButtonText: S.fbt._("Block", null, {
							hk: "8i5gq"
						}),
						primaryButtonAction: () => a(n)
					}))
				}),
				Hc = n("./src/lib/timeAgo/index.ts"),
				Fc = n("./src/chat/controls/MediaObject/index.m.less"),
				Gc = n.n(Fc);
			const Wc = l.a.wrapped(e => {
				const [t, n, a] = c.a.Children.toArray(e.children);
				return c.a.createElement("div", {
					className: e.className
				}, t, n, a)
			}, "MediaObject", Gc.a);
			var Vc = n("./src/chat/controls/Title/index.tsx"),
				Kc = n("./src/chat/icons/Nsfw/index.tsx"),
				zc = n("./src/chat/components/OverlayChannelInvited/index.m.less"),
				qc = n.n(zc);
			const Zc = "OverlayNavTooltip--ChatRequest",
				Qc = l.a.div("Container", qc.a),
				Jc = l.a.div("TitleContainer", qc.a),
				Xc = l.a.wrapped(Kc.a, "NSFWIcon", qc.a),
				Yc = l.a.wrapped(H.a, "UserPic", qc.a),
				$c = l.a.span("WarningTextNSFW", qc.a),
				eo = l.a.p("Text", qc.a),
				to = l.a.wrapped(Wc, "MediaObject", qc.a),
				no = l.a.span("LightText", qc.a),
				ao = l.a.wrapped(e => c.a.createElement("span", {
					className: e.className
				}, e.children), "LightTextSmall", qc.a);
			ao.displayName = "LightTextSmall";
			const so = l.a.b("Warning", qc.a),
				ro = l.a.wrapped(ps, "MessageItemBubble", qc.a),
				co = l.a.wrapped(e => c.a.createElement("p", {
					className: Object(i.a)(e.className, {
						[qc.a.count]: !!e.count
					})
				}, e.children), "MemberListHeader", qc.a),
				oo = Object($.a)({
					currentUserId: uc.a,
					channel: e => Object(te.j)(e),
					inviterContact: (e, t) => {
						const n = Object(te.g)(e, t);
						return n && Object(lc.d)(e, n)
					},
					channelMessages: e => Object(te.u)(e),
					isChatEmbedded: e => Object(Ls.d)(e)
				}),
				io = Object(o.b)(oo, e => ({
					onAcceptChannelRequest: t => {
						e(Object(j.y)(t)), e(Object(le.l)(t))
					},
					onDeclineChannelRequest: t => {
						e(Object(j.C)(t)), e(Object(le.m)(t))
					},
					getPreviousMessages: y.t
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					hasBlockedUsers: () => {
						const {
							channel: t
						} = e;
						return !(!t || !t.members.some(e => e.isBlockedByMe))
					}
				}));
			class lo extends c.a.Component {
				constructor(e) {
					super(e), this.renderContent = this.renderContent.bind(this), this.renderUserInfo = this.renderUserInfo.bind(this), this.renderPreviewMessages = this.renderPreviewMessages.bind(this), this.onDeclineChannelRequest = this.onDeclineChannelRequest.bind(this), this.onAcceptChannelRequest = this.onAcceptChannelRequest.bind(this)
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						channel: t,
						getPreviousMessages: n
					} = this.props;
					if (t && e.channel) {
						const a = e.channel.channelId === t.channelId;
						t.type === Ts.a.Direct && !t.firstMessageId && !t.fetchingFirstMessage && a && n()
					}
				}
				onDeclineChannelRequest(e) {
					this.props.onDeclineChannelRequest(e)
				}
				onAcceptChannelRequest() {
					this.props.onAcceptChannelRequest(this.props.channelId)
				}
				renderUserInfo() {
					const {
						inviterContact: e
					} = this.props;
					if (e) {
						const {
							linkKarma: t,
							created: n
						} = e, a = S.fbt._("Redditor since {amount of time}", [S.fbt._param("amount of time", Object(Hc.a)(n))], {
							hk: "37XXLN"
						}), s = S.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [S.fbt._plural(t, "karma count")], {
							hk: "4uraW2"
						});
						return c.a.createElement(ao, null, a, " • ", s)
					}
				}
				renderPreviewMessages() {
					if (this.props.channel && this.props.channelMessages && this.props.channelMessages.length) {
						const {
							isChatEmbedded: e
						} = this.props, t = _()([...this.props.channelMessages], "createdAt");
						return c.a.createElement(Qc, null, c.a.createElement(no, null, S.fbt._("Preview of this chat", null, {
							hk: "42xxX4"
						})), t.map(t => c.a.createElement(c.a.Fragment, {
							key: t.createdAt
						}, c.a.createElement(ro, {
							message: t,
							inPreview: !0,
							fromCurrentUser: !1,
							fromInvite: !0,
							withButton: !0,
							isChatEmbedded: e
						}))))
					}
				}
				renderBlockedUserHeader() {
					return this.props.hasBlockedUsers() && c.a.createElement(eo, null, c.a.createElement(so, null, S.fbt._("Heads up: you previously blocked at least one person in this group.", null, {
						hk: "1vpXV1"
					})), S.fbt._("If you join, you'll be able to see any messages they send. They'll remain blocked on the rest of Reddit.", null, {
						hk: "1vGIVA"
					}))
				}
				renderMemberListHeader(e, t) {
					const n = e.length,
						a = t || S.fbt._("group", null, {
							hk: "1ixukL"
						});
					return c.a.createElement(co, {
						count: n
					}, S.fbt._({
						"*": "{number} Redditors in {channelName}",
						_1: "1 Redditor in {channelName}"
					}, [S.fbt._plural(n, "number"), S.fbt._param("channelName", a)], {
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
						} = e, r = a.filter(({
							id: e
						}) => e !== n);
						return c.a.createElement(c.a.Fragment, null, this.renderBlockedUserHeader(), this.renderMemberListHeader(r, s), c.a.createElement(ar.a, {
							channelId: t,
							members: r,
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
					if (t && t.inviter) return c.a.createElement("div", null, c.a.createElement("a", {
						target: _e.c.BLANK,
						rel: _e.b,
						href: `${ua.a.redditUrl}/user/${t.inviter.name}`
					}, c.a.createElement(to, null, n ? c.a.createElement(Xc, null) : c.a.createElement(Yc, {
						userId: t.inviter.id
					}), c.a.createElement(Jc, null, c.a.createElement(Vc.a, {
						bold: !0
					}, t.inviter.name), n && c.a.createElement($c, null, S.fbt._("NSFW", null, {
						hk: "3rI4EF"
					}))), this.renderUserInfo())), c.a.createElement(eo, null, S.fbt._("Accept their request if you'd like to continue the conversation. We won't notify them if you decline.", null, {
						hk: "1wbHBD"
					})), t && t.type === Ts.a.Group ? this.renderMembersList() : this.renderPreviewMessages())
				}
				render() {
					const {
						props: {
							channel: e,
							channelId: t
						},
						onDeclineChannelRequest: n,
						onAcceptChannelRequest: a
					} = this, s = e && e.type === Ts.a.Direct, r = s ? S.fbt._("Chat Request", null, {
						hk: "1sWJM0"
					}) : S.fbt._("Group invite", null, {
						hk: "JPFyz"
					});
					return c.a.createElement(rr.a, null, c.a.createElement(ws.a, {
						channelId: t,
						title: r,
						showMenu: s,
						dropdownId: Zc
					}), c.a.createElement(Ns.b, null, this.renderContent()), c.a.createElement(mr, {
						secondaryButtonText: S.fbt._("Decline", null, {
							hk: "3rdClY"
						}),
						secondaryButtonAction: () => n(t),
						primaryButtonText: S.fbt._("Accept", null, {
							hk: "249yqF"
						}),
						primaryButtonAction: a
					}))
				}
			}
			lo.displayName = "OverlayChannelInvited";
			var uo, ho = io(lo);
			! function(e) {
				e.DEFAULT = "default", e.BANNED = "banned", e.KICKED = "kicked"
			}(uo || (uo = {}));
			var mo = n("./src/chat/components/OverlayChannelRemoval/index.m.less"),
				po = n.n(mo);
			const bo = l.a.p("SubHeader", po.a),
				go = l.a.span("Header", po.a),
				fo = e => {
					switch (e) {
						case uo.BANNED:
							return S.fbt._("Banned", null, {
								hk: "45AEK1"
							});
						case uo.KICKED:
							return S.fbt._("Kicked", null, {
								hk: "20JwrF"
							});
						case uo.DEFAULT:
						default:
							return S.fbt._("Removed", null, {
								hk: "3yZ2SQ"
							})
					}
				};
			var Co = e => c.a.createElement(rr.a, null, c.a.createElement(ws.a, {
				channelId: e.channelId,
				title: fo(e.status)
			}), c.a.createElement(c.a.Fragment, null, c.a.createElement(go, null, (e => {
				switch (e) {
					case uo.BANNED:
						return S.fbt._("You are banned from this room.", null, {
							hk: "2MKZpa"
						});
					case uo.KICKED:
						return S.fbt._("You are temporarily kicked from this room.", null, {
							hk: "48m5JB"
						});
					case uo.DEFAULT:
					default:
						return S.fbt._("You have been removed from this room.", null, {
							hk: "46tIu8"
						})
				}
			})(e.status)), c.a.createElement(bo, null, (e => {
				switch (e) {
					case uo.BANNED:
						return S.fbt._("You are banned from this room and may not join until you are unbanned.", null, {
							hk: "1SH7uY"
						});
					case uo.KICKED:
						return S.fbt._("You are temporarily kicked from this room and may not join until you are no longer kicked.", null, {
							hk: "1QQa96"
						});
					case uo.DEFAULT:
					default:
						return S.fbt._("You have been removed from this room.", null, {
							hk: "46tIu8"
						})
				}
			})(e.status))));
			const Eo = Object(h.a)("OVERLAY_CLOSE");
			var Oo = n("./src/chat/components/OverlayDeleteMessage/index.m.less"),
				vo = n.n(Oo);
			const _o = l.a.div("Container", vo.a),
				jo = l.a.p("Text", vo.a),
				yo = Object($.a)({
					isModerator: te.a,
					message: (e, t) => Object(Ka.d)(e, t.messageId),
					senderUserId: (e, t) => Object(Ka.g)(e, t.messageId),
					isChatEmbedded: e => Object(Ls.d)(e)
				});
			class Io extends r.Component {
				render() {
					const {
						channelId: e,
						message: t,
						onConfirmationClick: n,
						isChatEmbedded: a
					} = this.props;
					return c.a.createElement(rr.a, null, c.a.createElement(ws.a, {
						channelId: e,
						title: S.fbt._("Delete message", null, {
							hk: "1ZCVBI"
						})
					}), c.a.createElement(_o, null, c.a.createElement(jo, null, S.fbt._("Are you sure you want to delete this message?", null, {
						hk: "3cAxYZ"
					}), c.a.createElement("br", null), S.fbt._("You can't undo this.", null, {
						hk: "4ockoK"
					})), t && c.a.createElement(ps, {
						message: t,
						fromCurrentUser: !0,
						fromInvite: !1,
						darkBackground: !0,
						withButton: !1,
						isChatEmbedded: a
					})), c.a.createElement(mr, {
						primaryButtonText: S.fbt._("Delete", null, {
							hk: "vtGdC"
						}),
						primaryButtonAction: () => n()
					}))
				}
			}
			var xo = Object(o.b)(yo, (e, t) => ({
					onConfirmationClick: () => ((e, t) => {
						e(Object(y.r)(t)), e(Object(le.s)())
					})(e, t.messageId),
					onCancel: () => e(Eo())
				}))(Io),
				So = n("./src/chat/components/OverlayDirectsEmptyState/index.m.less"),
				wo = n.n(So);
			const No = l.a.div("OverlayContent", wo.a),
				ko = l.a.img("Image", wo.a),
				To = l.a.div("Info", wo.a),
				Mo = l.a.h4("Header", wo.a),
				Ao = l.a.p("Text", wo.a);
			var Uo = Object(o.b)(null, e => ({
					onCreateMessage: () => {
						const t = Object(ee.getRedirectURL)(Object(ee.channelUrl)("create"));
						return e(Object(Q.b)(t))
					}
				}))(e => c.a.createElement(rr.a, {
					innerContent: !0
				}, c.a.createElement(ws.a, {
					title: S.fbt._("Start chatting", null, {
						hk: "3B5dRm"
					})
				}), c.a.createElement(No, null, c.a.createElement(ko, {
					src: `${ua.a.assetPath}/img/chat/empty-hero.png`
				}), c.a.createElement(To, null, c.a.createElement(Mo, null, S.fbt._("Start a direct chat", null, {
					hk: "4qVzlj"
				})), c.a.createElement(Ao, null, S.fbt._("You can start a new direct chat with the button below or from someone's profile", null, {
					hk: "3wS0vs"
				})))), c.a.createElement(mr, {
					primaryButtonText: S.fbt._("New Chat", null, {
						hk: "33WSw"
					}),
					primaryButtonAction: e.onCreateMessage,
					primaryButtonOnly: !0
				}))),
				Do = n("./src/chat/actions/message/unreadCount.ts"),
				Ro = n("./src/chat/helpers/errors.ts"),
				Lo = n("./src/chat/singleton/SendbirdSDK.ts");
			var Po = n("./src/chat/components/OverlayHideChannel/index.m.less"),
				Bo = n.n(Po);
			const Ho = l.a.p("Text", Bo.a);
			Ho.displayName = "Text";
			var Fo = Object(o.b)(null, e => ({
					onHideChannelRequest: () => e((() => async (e, t) => {
						const n = t(),
							a = Object(te.j)(n);
						if (!a) throw new Ro.a("hideChannel", a);
						try {
							await Lo.a.hideChannel()
						} catch (s) {
							return Object(Ro.b)(`Error hiding channel: ${s.message}`)
						}
						e(Object(j.K)(a.channelId)), e(Object(j.P)(a.channelState)), e(Object(Do.b)())
					})())
				}))(({
					channelId: e,
					onHideChannelRequest: t
				}) => c.a.createElement(rr.a, null, c.a.createElement(ws.a, {
					channelId: e,
					title: S.fbt._("Hide channel?", null, {
						hk: "2tS9C7"
					})
				}), c.a.createElement(Ho, null, S.fbt._("Hiding this channel will remove it from your chat inbox until someone else in the channel sends another message.", null, {
					hk: "2obYDP"
				})), c.a.createElement(mr, {
					primaryButtonText: S.fbt._("Hide", null, {
						hk: "1mv2YH"
					}),
					primaryButtonAction: () => t()
				}))),
				Go = n("./src/chat/routes/chat.ts"),
				Wo = n("./src/chat/components/OverlayKickUser/index.m.less"),
				Vo = n.n(Wo);
			const Ko = "kickUser",
				zo = l.a.p("SubHeader", Vo.a),
				qo = l.a.span("Title", Vo.a),
				Zo = l.a.span("Header", Vo.a),
				Qo = l.a.wrapped(zr.a, "Checkbox", Vo.a),
				Jo = l.a.div("ListItem", Vo.a),
				Xo = l.a.div("OverlayContent", Vo.a);
			var Yo;
			! function(e) {
				e[e.TenMins = 600] = "TenMins", e[e.OneHour = 3600] = "OneHour", e[e.OneDay = 86400] = "OneDay", e[e.ThreeDays = 259200] = "ThreeDays", e[e.Permanently = -1] = "Permanently"
			}(Yo || (Yo = {}));
			const $o = () => ({
					[Yo.TenMins]: S.fbt._("10 minutes", null, {
						hk: "3y8skZ"
					}),
					[Yo.OneHour]: S.fbt._("1 hour", null, {
						hk: "mgKhy"
					}),
					[Yo.OneDay]: S.fbt._("1 day", null, {
						hk: "37HQV9"
					}),
					[Yo.ThreeDays]: S.fbt._("3 days", null, {
						hk: "2R7GCT"
					}),
					[Yo.Permanently]: S.fbt._("Permanently", null, {
						hk: "2CHcpm"
					})
				}),
				ei = Object($.a)({
					message: (e, t) => t.attr === Go.a.Message ? e.messages.models[t.attrId] : void 0,
					user: (e, t) => t.attr === Go.a.User ? e.contacts.models[t.attrId] : void 0
				});
			class ti extends r.Component {
				constructor(e) {
					super(e), this.onSubmit = e => {
						const {
							attrId: t,
							channelId: n,
							onKickUser: a
						} = this.props;
						e.target[Ko].forEach(({
							checked: e,
							value: s
						}) => {
							if (e) {
								const e = Number(s);
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
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(Zo, null, S.fbt._("Are you sure you want to kick {username} from this room?", [S.fbt._param("username", n)], {
						hk: "n1L3B"
					})), c.a.createElement(zo, null, S.fbt._("They'll be able to join again once the kick duration is over.", null, {
						hk: "4zi1U1"
					})))
				}
				render() {
					const e = $o(),
						{
							channelId: t
						} = this.props;
					return c.a.createElement(rr.a, {
						onSubmit: Object(cr.a)(this.onSubmit),
						form: !0,
						innerContent: !0
					}, c.a.createElement(ws.a, {
						channelId: t,
						title: S.fbt._("Confirm Kick", null, {
							hk: "1upcSi"
						})
					}), c.a.createElement(Xo, null, c.a.createElement(Ns.b, null, this.renderIntro(), c.a.createElement(qo, null, S.fbt._("Kick Duration", null, {
						hk: "4nENS8"
					})), Object.keys(e).map(t => c.a.createElement(Jo, {
						key: t
					}, c.a.createElement(Qo, {
						type: "radio",
						name: Ko,
						value: t
					}, e[t]))))), c.a.createElement(mr, {
						primaryButtonText: S.fbt._("Kick", null, {
							hk: "10O2jX"
						}),
						secondaryButtonText: S.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})
					}))
				}
			}
			var ni = Object(o.b)(ei, e => ({
					onKickUser: (t, n, a) => {
						e(Object(Ur.p)(t, n, a)), e(Object(le.t)(a))
					}
				}))(ti),
				ai = n("./src/chat/components/OverlayLeaveChannel/index.m.less"),
				si = n.n(ai);
			const ri = l.a.div("Container", si.a),
				ci = l.a.p("Text", si.a),
				oi = l.a.wrapped(ci, "TextBold", si.a);
			var ii = Object(o.b)(void 0, e => ({
					onChannelLeave: t => {
						e(Object(le.o)()), e(Object(j.I)(t))
					}
				}))(e => {
					const {
						channelId: t,
						onChannelLeave: n
					} = e;
					return c.a.createElement(rr.a, null, c.a.createElement(ws.a, {
						channelId: t,
						title: S.fbt._("Are you sure", null, {
							hk: "4fJTRG"
						})
					}), c.a.createElement(ri, null, c.a.createElement(oi, null, S.fbt._("Leave group chat?", null, {
						hk: "vEsVO"
					})), c.a.createElement(ci, null, S.fbt._("You will be removed from the group and no longer receive new messages. You will not be able to join this group again unless you receive another invite.", null, {
						hk: "3oISyF"
					}))), c.a.createElement(mr, {
						primaryButtonText: S.fbt._("Leave", null, {
							hk: "1s8gFw"
						}),
						primaryButtonAction: () => n(t)
					}))
				}),
				li = n("./src/chat/components/OverlayNSFWWarning/index.m.less"),
				di = n.n(li);
			const ui = l.a.div("Container", di.a),
				hi = l.a.p("Text", di.a);
			var mi = Object(o.b)(null, e => ({
					onAccept: t => {
						e(C(m.b.NSFWWarning)), e(Object(j.y)(t))
					}
				}))(e => c.a.createElement(rr.a, null, c.a.createElement(ws.a, {
					channelId: e.channelId,
					title: S.fbt._("NSFW User", null, {
						hk: "3W2Bw2"
					})
				}), c.a.createElement(ui, null, c.a.createElement(hi, null, S.fbt._("One or more users in this chat are marked as NSFW (not safe for work), which means they tend to post explicit content elsewhere on Reddit. This doesn't necessarily mean that the content of this chat is explicit.", null, {
					hk: "4cRpQH"
				}))), c.a.createElement(mr, {
					primaryButtonText: S.fbt._("Accept", null, {
						hk: "2ILlth"
					}),
					primaryButtonAction: () => e.onAccept(e.channelId)
				}))),
				pi = n("./src/chat/endpoints/users/index.ts"),
				bi = n("./src/chat/models/Message/report.ts");
			var gi = n("./src/higherOrderComponents/makeAsync.tsx"),
				fi = n("./src/lib/loadWithRetries/index.ts");
			const Ci = () => null;
			var Ei = Object(gi.a)({
				ErrorComponent: Ci,
				getComponent: () => Object(fi.a)(() => n.e("ChatReportFlow").then(n.bind(null, "./src/chat/components/ReportFlow/index.tsx"))).then(e => e.default),
				LoadingComponent: Ci
			});
			const Oi = "reportReason";
			var vi;
			! function(e) {
				e.Threats = "threats", e.Violence = "violence", e.Personal = "personal", e.Impersonation = "impersonation", e.MinorSexualization = "minorSexualization"
			}(vi || (vi = {}));
			var _i = n("./src/chat/models/ReportFlow/index.ts"),
				ji = n("./src/chat/components/OverlayReport/index.m.less"),
				yi = n.n(ji);
			const Ii = l.a.wrapped(zr.a, "Checkbox", yi.a),
				xi = l.a.div("ListItem", yi.a),
				Si = Object($.a)({
					user: (e, t) => t.attr === Go.a.User ? e.contacts.models[t.attrId] : void 0,
					message: (e, t) => t.attr === Go.a.Invite || t.attr === Go.a.Message ? Object(Ka.d)(e, Number(t.attrId)) : void 0,
					messageList: e => Object(te.x)(e),
					currentUserId: (e, t) => Object(uc.a)(e)
				});
			class wi extends r.Component {
				constructor(e) {
					super(e), this.selectReason = e => this.setState({
						selectedReason: e
					}), this.isMessageReportFlow = () => this.props.attr === Go.a.Invite || this.props.attr === Go.a.Message, this.isSubmitDisabled = () => !this.state.selectedReason, this.isCTLControls = () => this.state.currentFlow === _i.a.CrisisTextLine && !this.state.ctlSubmitted, this.isSingleButton = () => this.state.currentFlow === _i.a.CrisisTextLine && !0 === this.state.ctlSubmitted || this.state.currentFlow === _i.a.BlockUser || this.state.currentFlow === _i.a.FileComplaint, this.nextReportFlow = () => {
						const {
							selectedReason: e
						} = this.state, t = e && e.requestCrisisSupport ? _i.a.CrisisTextLine : e && e.fileComplaint ? _i.a.FileComplaint : _i.a.BlockUser;
						this.setState({
							currentFlow: t
						})
					}, this.getMessageReportFlow = () => {
						const {
							message: e
						} = this.props;
						if (e && e.sender) return c.a.createElement(Ei, {
							onRuleChange: e => this.selectReason(e),
							currentFlow: this.state.currentFlow,
							blockedUserId: e.sender.userId,
							blockedUserName: e.sender.nickname,
							ctlSubmitted: this.state.ctlSubmitted
						})
					}, this.getReportReasonText = e => {
						switch (e) {
							case vi.Threats:
								return S.fbt._("Threatens, harrasses, or bullies", null, {
									hk: "9lzw2"
								});
							case vi.Violence:
								return S.fbt._("It threatens violence or physical harm", null, {
									hk: "2LziPg"
								});
							case vi.Personal:
								return S.fbt._("It's personal and confidential information", null, {
									hk: "2w0qDN"
								});
							case vi.Impersonation:
								return S.fbt._("Impersonation", null, {
									hk: "2dg9bu"
								});
							case vi.MinorSexualization:
								return S.fbt._("It's sexual or suggestive content involving minors", null, {
									hk: "Ofq3r"
								})
						}
					}, this.getUserReportFlow = () => O()(vi, e => {
						const t = this.getReportReasonText(e);
						return c.a.createElement(xi, {
							key: t
						}, c.a.createElement(Ii, {
							type: "radio",
							value: t,
							name: Oi,
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
						if (s && s.requestCrisisSupport && e && e.messageType === J.d.USER) return a === _i.a.CrisisTextLine ? (n(s.reasonText, e, t), this.setState({
							ctlSubmitted: !0
						})) : this.nextReportFlow();
						s && s.reasonText && e && e.messageType === J.d.USER && (n(s.reasonText, e, t), this.nextReportFlow())
					}, this.state = {
						selectedReason: void 0,
						currentFlow: this.props.attr === Go.a.Invite ? _i.a.Invite : _i.a.Default,
						ctlSubmitted: !1
					}
				}
				render() {
					const {
						channelId: e,
						message: t,
						user: n
					} = this.props;
					return c.a.createElement(rr.a, {
						onSubmit: Object(cr.a)(this.onSubmit),
						form: !0
					}, c.a.createElement(ws.a, {
						channelId: e,
						title: S.fbt._("Reason for report", null, {
							hk: "EqHEf"
						})
					}), c.a.createElement(Ns.a, null, this.isMessageReportFlow() ? t && this.getMessageReportFlow() : n && this.getUserReportFlow()), c.a.createElement(mr, {
						primaryButtonText: this.isCTLControls() ? S.fbt._("Yes", null, {
							hk: "1nxheD"
						}) : S.fbt._("Submit", null, {
							hk: "2Iwjdv"
						}),
						primaryButtonDisabled: this.isSubmitDisabled(),
						secondaryButtonOnly: this.isSingleButton(),
						secondaryButtonCTLOptions: this.isCTLControls(),
						secondaryButtonText: this.isSingleButton() ? S.fbt._("Close", null, {
							hk: "4gbyAA"
						}) : S.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})
					}))
				}
			}
			var Ni = Object(o.b)(Si, e => ({
				onReportUser: (t, n) => {
					e(Object(le.x)(n.id)), e((e => async (t, n, {
						apiContext: a
					}) => {
						const {
							user: s,
							reason: r
						} = e, c = {
							reason: r,
							userNickname: s.name
						};
						await Object(pi.b)(a(), c)
					})({
						user: n,
						reason: t
					})).then(() => e(Object(Q.a)()))
				},
				onReportMessage: (t, n, a) => {
					e(Object(le.z)(n.messageId, t)), e(((e, t, n) => async (a, s, {
						apiContext: r
					}) => {
						const c = Object(bi.a)(e, t),
							o = Object(bi.b)(e, t, n);
						c && await Object(pi.c)(r(), c, o)
					})(t, n, a))
				}
			}))(wi);
			const ki = e => e.channelId ? e.action === sr.a.VIEW_INVITE && e.channelId ? c.a.createElement(ho, {
				channelId: e.channelId
			}) : e.action === sr.a.VIEW_MEMBERS && e.channelId ? c.a.createElement(wr, {
				channelId: e.channelId
			}) : e.action === sr.a.LEAVE && e.channelId ? c.a.createElement(ii, {
				channelId: e.channelId
			}) : e.action === sr.a.VIEW_NSFW_CONFIRMATION && e.channelId ? c.a.createElement(mi, {
				channelId: e.channelId
			}) : e.action === sr.a.HIDE_CHANNEL && e.channelId ? c.a.createElement(Fo, {
				channelId: e.channelId
			}) : e.action === X.a.Block && e.attrId && e.channelId ? c.a.createElement(Bc, {
				channelId: e.channelId,
				blockedUserId: e.attrId
			}) : e.action === J.a.DELETE && e.channelId && e.attrId ? c.a.createElement(xo, {
				channelId: e.channelId,
				messageId: parseInt(e.attrId)
			}) : e.action === J.a.REPORT && e.attr && e.attrId && e.channelId ? c.a.createElement(Ni, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : e.action === X.a.Kick && e.attr && e.attrId && e.channelId ? c.a.createElement(ni, {
				channelId: e.channelId,
				attr: e.attr,
				attrId: e.attrId
			}) : e.action === sr.a.DENY && e.channelId ? c.a.createElement(Co, {
				channelId: e.channelId
			}) : void 0 : c.a.createElement(Uo, null);
			var Ti = n("./src/chat/selectors/sidebar.ts"),
				Mi = n("./src/chat/components/FrameContent/index.m.less"),
				Ai = n.n(Mi);
			const Ui = Ai.a.Main,
				Di = Object($.a)({
					channel: e => Object(te.k)(e),
					container: e => e && e.container && e.container.size,
					isUserAccountEmpty: e => !e.user.account,
					isSidebarVisible: e => Object(Ti.a)(e)
				}),
				Ri = Object(o.b)(Di, e => ({
					setInternalPromos: () => e((() => async e => {
						Object.keys(m.b).forEach(t => {
							p(m.b[t]) || e(g(m.b[t]))
						})
					})())
				})),
				Li = l.a.main("Main", Ai.a),
				Pi = l.a.div("Content", Ai.a),
				Bi = l.a.div("Modal", Ai.a);
			class Hi extends c.a.Component {
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
						isUserAccountEmpty: n,
						isSidebarVisible: a
					} = this.props, {
						action: s,
						channelId: r
					} = this.props.match.params;
					switch (!0) {
						case n:
							return null;
						case s === sr.a.VIEW_MEMBERS:
							return r && c.a.createElement(wr, {
								channelId: r
							});
						case s === sr.a.CREATE:
						case s === sr.a.INVITE_MEMBERS:
							return c.a.createElement(kc, null);
						case t === Mc.a.MINIMIZED:
							return c.a.createElement(tr.a, null);
						default: {
							const n = ki(this.props.match.params);
							return c.a.createElement(c.a.Fragment, null, c.a.createElement(Tc.b, null), c.a.createElement(Pi, {
								className: Object(i.a)(Ai.a.Content, {
									[Ai.a.hidden]: a,
									[Ai.a.isFullSize]: t === Mc.a.FULL
								})
							}, n ? c.a.createElement(Bi, null, n) : e && r && c.a.createElement(er, {
								channelId: r,
								channel: e
							})))
						}
					}
				}
				render() {
					return c.a.createElement(Li, {
						id: Ac.a
					}, this.getContent())
				}
			}
			t.b = Ri(Hi)
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
		"./src/chat/components/MemberActionDropdown/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/difference.js"),
				r = n.n(s),
				c = n("./node_modules/lodash/noop.js"),
				o = n.n(c),
				i = n("./node_modules/react/index.js"),
				l = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				u = n("./src/higherOrderComponents/asTooltip.tsx"),
				h = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/chat/actions/user/dropdown.ts"),
				b = n("./src/chat/constants/dropdown.ts"),
				g = n("./src/chat/controls/Button/index.tsx"),
				f = n("./src/chat/controls/Dropdown/index.tsx"),
				C = n("./src/chat/controls/Dropdown/Row.tsx"),
				E = n("./src/chat/helpers/chatSelector.ts"),
				O = n("./src/chat/helpers/dom.ts"),
				v = n("./src/chat/icons/svgs/MenuOverflow/index.tsx"),
				_ = n("./src/chat/selectors/channels.ts"),
				j = n("./src/chat/components/MemberActionDropdown/index.m.less"),
				y = n.n(j);
			const I = ["t2_2ednvld6"],
				x = m.a.wrapped(e => l.a.createElement("span", {
					className: Object(h.a)({
						[y.a.active]: e.id === e.dropdownId
					}, e.className)
				}, e.children), "Wrapper", y.a),
				S = Object(u.a)(m.a.wrapped(f.a, "Component", y.a)),
				w = m.a.wrapped(C.a, "DropdownRow", y.a),
				N = m.a.wrapped(g.c, "IconButton", y.a),
				k = e => l.a.createElement("span", {
					className: e.className,
					id: e.id,
					onClick: e.onClick,
					role: "button"
				}, l.a.createElement(N, null, l.a.createElement(v.a, null))),
				T = Object(E.a)({
					dropdownId: e => e.tooltipId || "",
					currentUserIsChannelMod: _.a
				}),
				M = Object(d.b)(T, (e, t) => ({
					onOpenDropdown: () => e(Object(p.c)(t.id)),
					onBlockUser: t => e(Object(p.a)(t)),
					onReportUser: t => e(Object(p.d)(t)),
					onKickUser: t => e(Object(p.b)(t))
				}));
			class A extends i.Component {
				constructor() {
					super(...arguments), this.onOptionClick = e => {
						switch (e) {
							case b.b.Block:
								return this.props.onBlockUser(this.props.userId);
							case b.b.Report:
								return this.props.onReportUser(this.props.userId);
							case b.b.Kick:
								return this.props.onKickUser(this.props.userId);
							default:
								return o.a
						}
					}, this.getContainer = e => document.getElementsByClassName(this.props.containerClassName || b.a)[e], this.getDropdownOptions = () => {
						const {
							isBlockedUser: e,
							currentUserIsChannelMod: t
						} = this.props, {
							Block: n,
							Kick: a
						} = b.b;
						return e && !t ? r()(b.c.members, [n, a]) : t ? e ? r()(b.c.members, [n]) : b.c.members : r()(b.c.members, [a])
					}, this.getDropdownOptionDisplayText = e => {
						switch (e) {
							case b.b.Block:
								return a.fbt._("Block", null, {
									hk: "t44ep"
								});
							case b.b.Report:
								return a.fbt._("Report", null, {
									hk: "4oVcnd"
								});
							case b.b.Kick:
								return a.fbt._("Kick", null, {
									hk: "oXEqT"
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
							userId: r
						},
						getDropdownOptions: c,
						getContainer: o
					} = this;
					if (I.includes(r)) return null;
					const i = c();
					return !!i.length && l.a.createElement(x, {
						className: e,
						id: a,
						dropdownId: t
					}, l.a.createElement(k, {
						id: a,
						menu: !0,
						onClick: Object(O.b)(s)
					}), l.a.createElement(S, {
						tooltipId: a,
						isOpen: t === a,
						container: o(n),
						closeOnClickOutside: !0
					}, i.map((e, t) => l.a.createElement(w, {
						key: t,
						displayText: this.getDropdownOptionDisplayText(e),
						onClick: Object(O.b)(() => this.onOptionClick(e))
					}))))
				}
			}
			t.a = M(A)
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
				noPadding: "_2eOcmx1Iy9TgQi7MqKKdZG",
				MessageText: "_1q32G7u8aTwBaLUSN_06Cl",
				messageText: "_1q32G7u8aTwBaLUSN_06Cl",
				Snoo: "GrZzft2XLFp0NKhLfZaMc",
				snoo: "GrZzft2XLFp0NKhLfZaMc",
				Gif: "_17_NMiPll1aOoCUTA4CST0",
				gif: "_2YTpZRXwHDVam86JVzrZTJ",
				MessageItemBubble: "_19iAGNPVtW4H4cmtpESqQs",
				messageItemBubble: "_19iAGNPVtW4H4cmtpESqQs",
				richUnitResponsive: "XTNb-pweAVrXczr8DlGFQ",
				richUnit: "_3N2oHhZ_g79ncEZwOAfDRR"
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
				unread: "_16OvoKuUZbmePhJ1n_8Gcn"
			}
		},
		"./src/chat/components/Message/RichUnit/Comment/CommentRichUnit.m.less": function(e, t, n) {
			e.exports = {
				RichUnitWrapper: "_45xCSBNy8QOFPTkbYP1ow",
				richUnitWrapper: "_45xCSBNy8QOFPTkbYP1ow",
				RichCommentUnit: "_3-V24A8dg_uw8WyvWl8DjS",
				richCommentUnit: "_3-V24A8dg_uw8WyvWl8DjS",
				dark: "_3WcDH143bIzqJ6nBhVmUYC",
				Delimiter: "uVGFjp8aPVigJcpVnhNn_",
				delimiter: "uVGFjp8aPVigJcpVnhNn_",
				RichUnitLink: "pDofY15WGHpPHv5ruRDhM",
				richUnitLink: "pDofY15WGHpPHv5ruRDhM",
				Content: "_3xmYilwpFjxNQvxATdHqYn",
				content: "_3xmYilwpFjxNQvxATdHqYn",
				LinkedText: "_2F3Jhr-rEU3G_VlDTLTqWX",
				linkedText: "_2F3Jhr-rEU3G_VlDTLTqWX",
				Footer: "_1KdaW-VmNlIj9NNvXFCzhT",
				footer: "_1KdaW-VmNlIj9NNvXFCzhT"
			}
		},
		"./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.m.less": function(e, t, n) {
			e.exports = {
				RichUnitWrapper: "ke6TKb33anNYB1yQYgsle",
				richUnitWrapper: "ke6TKb33anNYB1yQYgsle",
				ExternalLinkUnit: "_1HQ3ZceWl9xONobvLvCDvy",
				externalLinkUnit: "_1HQ3ZceWl9xONobvLvCDvy",
				dark: "n_VW-p7OBeqSM86OQFvrc",
				Delimiter: "_3FShkFdOCAm64rP7Z5VoyF",
				delimiter: "_3FShkFdOCAm64rP7Z5VoyF",
				Header: "_1evF1xj5FEnb1DQt23ZZAu",
				header: "_1evF1xj5FEnb1DQt23ZZAu",
				HeaderContent: "_rXqtEsRddLRprY6eQRYY",
				headerContent: "_rXqtEsRddLRprY6eQRYY",
				TitleContent: "pH2AB-ti61rLtjEEJzE7g",
				titleContent: "pH2AB-ti61rLtjEEJzE7g",
				Favicon: "_1vWsmQ6fTQVi4keqUVew2m",
				favicon: "_1vWsmQ6fTQVi4keqUVew2m",
				Title: "_1vKmyXdyLuXFx0GGtKPCoD",
				title: "_1vKmyXdyLuXFx0GGtKPCoD",
				Link: "_88j1m-GH1XqFAGMJnm76J",
				link: "_88j1m-GH1XqFAGMJnm76J",
				ContentContainer: "_3CYddbzQBL1JfQCaIzBhFo",
				contentContainer: "_3CYddbzQBL1JfQCaIzBhFo",
				Content: "_3Fh9YOztr9HJwmd2llyk7P",
				content: "_3Fh9YOztr9HJwmd2llyk7P",
				ImageContainer: "_3jeImKxWWGIFqKNRTZeTGe",
				imageContainer: "_3jeImKxWWGIFqKNRTZeTGe",
				Image: "mC-gyFEPMirpKUEF-9cUX",
				image: "mC-gyFEPMirpKUEF-9cUX",
				Footer: "_7c8971gyJI3QIAAJMZuxo",
				footer: "_7c8971gyJI3QIAAJMZuxo"
			}
		},
		"./src/chat/components/Message/RichUnit/Post/LinkPostRichUnit.m.less": function(e, t, n) {
			e.exports = {
				LinkPostRichUnit: "_54eTSJ2NgrcqiTZS6J73J",
				linkPostRichUnit: "_54eTSJ2NgrcqiTZS6J73J",
				Title: "_305-E3YNPLgcNAj1BcbIRZ",
				title: "_305-E3YNPLgcNAj1BcbIRZ",
				Link: "_3v61BQtz-N2RyaLdr3mM2I",
				link: "_3v61BQtz-N2RyaLdr3mM2I"
			}
		},
		"./src/chat/components/Message/RichUnit/Post/PollPostRichUnit.m.less": function(e, t, n) {
			e.exports = {
				PollPostRichUnit: "_23yg7TUXFaJHki79g8FtTT",
				pollPostRichUnit: "_23yg7TUXFaJHki79g8FtTT",
				dark: "Dcbz9rcYU5GZC6HZA_9uF",
				OptionsContainer: "_1krDj8ShLOGZv7PYHtxORA",
				optionsContainer: "_1krDj8ShLOGZv7PYHtxORA",
				Delimiter: "_8p6tS1VdGARo0dlPvszCO",
				delimiter: "_8p6tS1VdGARo0dlPvszCO",
				TotalVotesCount: "_3ZkJYJ6Zv_G_Cwnv1dbGXi",
				totalVotesCount: "_3ZkJYJ6Zv_G_Cwnv1dbGXi",
				Option: "Pul0nqfpnTiP9Xpax52XA",
				option: "Pul0nqfpnTiP9Xpax52XA",
				Checkbox: "_2GTWdlOGKXQpgjcEgjmOSv",
				checkbox: "_2GTWdlOGKXQpgjcEgjmOSv",
				OptionText: "_1-bkNeNok8V-i6xI5oXEsu",
				optionText: "_1-bkNeNok8V-i6xI5oXEsu",
				Title: "_1dvvgX0RbBcz5CGIcXtdWJ",
				title: "_1dvvgX0RbBcz5CGIcXtdWJ",
				LinkedText: "N7niT9kCSVYHDB27tNE7Z",
				linkedText: "N7niT9kCSVYHDB27tNE7Z"
			}
		},
		"./src/chat/components/Message/RichUnit/Post/PostRichUnit.m.less": function(e, t, n) {
			e.exports = {
				RichUnitWrapper: "NaHIKsj8G6eHt2D2JJs4F",
				richUnitWrapper: "NaHIKsj8G6eHt2D2JJs4F",
				RichPostUnit: "_2pTUakCavyMVxp8ATHi_4W",
				richPostUnit: "_2pTUakCavyMVxp8ATHi_4W",
				dark: "Os-mLp-BwCj6IrSlhClaA",
				Delimiter: "_1d3j1ZZ4pPIOPICUbTpzjv",
				delimiter: "_1d3j1ZZ4pPIOPICUbTpzjv",
				RichUnitLink: "_5JJv2eGdXwdYlTLPWRlft",
				richUnitLink: "_5JJv2eGdXwdYlTLPWRlft",
				Content: "_1eZHdUdvEHGNm3UEHDHQOK",
				content: "_1eZHdUdvEHGNm3UEHDHQOK",
				ImagePostRichUnit: "_18CBdJen-DV6KF4KSOE2xr",
				imagePostRichUnit: "_18CBdJen-DV6KF4KSOE2xr",
				PollPostRichUnit: "_2MwSRj_LKjAD6r--1wrGY7",
				pollPostRichUnit: "_2MwSRj_LKjAD6r--1wrGY7"
			}
		},
		"./src/chat/components/Message/RichUnit/Post/TextPostRichUnit.m.less": function(e, t, n) {
			e.exports = {
				TextPostRichUnit: "_19px0v0WewwzcrIS6oXYDK",
				textPostRichUnit: "_19px0v0WewwzcrIS6oXYDK",
				Title: "pPYBfWAa_3WcCZotVkuOd",
				title: "pPYBfWAa_3WcCZotVkuOd",
				LinkedText: "HYg0P9aixykU2U0NFpzZ4",
				linkedText: "HYg0P9aixykU2U0NFpzZ4"
			}
		},
		"./src/chat/components/Message/RichUnit/Subreddit/SubredditRichUnit.m.less": function(e, t, n) {
			e.exports = {
				RichUnitWrapper: "_2btMxK03abFHogZjnrefSs",
				richUnitWrapper: "_2btMxK03abFHogZjnrefSs",
				SubredditRichUnit: "FtjFb31zBKzdp5nMpO_Ix",
				subredditRichUnit: "FtjFb31zBKzdp5nMpO_Ix",
				dark: "_2Vl_F_J712zu1zU028wKpK",
				Delimiter: "_3NfIUhHsnAQ1Lbtc97UPPA",
				delimiter: "_3NfIUhHsnAQ1Lbtc97UPPA",
				Content: "LjsdJqSDDAQl6v3pYbHfG",
				content: "LjsdJqSDDAQl6v3pYbHfG",
				ImageContent: "_16Vu-bvTL2fmy1su73CQ0Y",
				imageContent: "_16Vu-bvTL2fmy1su73CQ0Y",
				LinkedText: "_2Ty1qvM37I_x61ogzWxP_c",
				linkedText: "_2Ty1qvM37I_x61ogzWxP_c"
			}
		},
		"./src/chat/components/Message/RichUnit/commonComponents/Footer.m.less": function(e, t, n) {
			e.exports = {
				Footer: "_3GPniyb1Fkm39eDZvdfGF",
				footer: "_3GPniyb1Fkm39eDZvdfGF",
				OnlineIndicator: "_3hCalgmtX2nUZDnA9e3Bdf",
				onlineIndicator: "_3hCalgmtX2nUZDnA9e3Bdf"
			}
		},
		"./src/chat/components/Message/RichUnit/commonComponents/Header.m.less": function(e, t, n) {
			e.exports = {
				Header: "_34nspwaK-gGrunZyKsXhu6",
				header: "_34nspwaK-gGrunZyKsXhu6",
				SubredditInfo: "oIkUuHMS6_PqV6QJ-Fh6x",
				subredditInfo: "oIkUuHMS6_PqV6QJ-Fh6x",
				AuthorName: "vBrYwlP4ttvt6O5A2qNzQ",
				authorName: "vBrYwlP4ttvt6O5A2qNzQ",
				SubredditTitle: "_2fIxSv7J-kRHJ1n6_XEy1r",
				subredditTitle: "_2fIxSv7J-kRHJ1n6_XEy1r",
				PlanetIcon: "_2x1ZpQU-ZTe3X17czqDAtQ",
				planetIcon: "_2x1ZpQU-ZTe3X17czqDAtQ",
				SubredditIcon: "d2mWq7nOmvFlngOaCkFId",
				subredditIcon: "d2mWq7nOmvFlngOaCkFId",
				Link: "_34O3daElUVauAUTnaTGH-_",
				link: "_34O3daElUVauAUTnaTGH-_"
			}
		},
		"./src/chat/components/Message/RichUnit/commonComponents/ImageContent.m.less": function(e, t, n) {
			e.exports = {
				ImagePostRichUnit: "-QzZzTYUzrkrLnieigcbz",
				imagePostRichUnit: "-QzZzTYUzrkrLnieigcbz",
				ImageContainer: "zBwoZQaShFvXaVcJfFZff",
				imageContainer: "zBwoZQaShFvXaVcJfFZff",
				Image: "_3xTsHagCumwkDYfyJPKmF9",
				image: "_3xTsHagCumwkDYfyJPKmF9",
				Title: "_1U6gaNPAZtrz4mb0edcQxj",
				title: "_1U6gaNPAZtrz4mb0edcQxj",
				GalleryIcon: "_1aWUhOymBypsnuvDKOomA8",
				galleryIcon: "_1aWUhOymBypsnuvDKOomA8",
				SubredditTypeIndicator: "AISffKnIZA-W95jfjhe4p",
				subredditTypeIndicator: "AISffKnIZA-W95jfjhe4p",
				NSFWIndicator: "_1-EWmh6N202gzUSFwVdERq",
				nsfwIndicator: "_1-EWmh6N202gzUSFwVdERq",
				NSFWIcon: "_12umzpWR-me93G2Fn1CBqb",
				nsfwIcon: "_12umzpWR-me93G2Fn1CBqb",
				PrivateIndicator: "_3CzmjuzKUQP5sknRNQEhDV",
				privateIndicator: "_3CzmjuzKUQP5sknRNQEhDV",
				PrivateIcon: "_4hASqKRCXK45KuMzEbA51",
				privateIcon: "_4hASqKRCXK45KuMzEbA51",
				RestrictedIndicator: "_3YXmGos4YNTGcLLaGDMsvL",
				restrictedIndicator: "_3YXmGos4YNTGcLLaGDMsvL",
				RestrictedIcon: "_2Sf4hpv6Ohs4ucnkPFeUox",
				restrictedIcon: "_2Sf4hpv6Ohs4ucnkPFeUox",
				EmployeesOnlyIndicator: "_3hLDX0Ii5oQjtDvEjSOFi",
				employeesOnlyIndicator: "_3hLDX0Ii5oQjtDvEjSOFi",
				EmployeesOnlyIcon: "_3ifQfg-D6uqyT_FYE_9bxd",
				employeesOnlyIcon: "_3ifQfg-D6uqyT_FYE_9bxd"
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
				Form: "_1U1dh1DsLuq2PUt8AwKbAc",
				form: "_1U1dh1DsLuq2PUt8AwKbAc",
				isFullSize: "_1FNgJ2a7f92Pl0BdURIzJu",
				Wrapper: "_2ERphYf08pZHF6WWqsLCvA",
				wrapper: "_2ERphYf08pZHF6WWqsLCvA",
				InputWrapper: "lh9ssPWZKUR3-eXgoIPnX",
				inputWrapper: "lh9ssPWZKUR3-eXgoIPnX",
				Icons: "_1H6XmzDZeFebELnU6sY0C0",
				icons: "_1H6XmzDZeFebELnU6sY0C0",
				ContentEditable: "TqpfKgK2FdKbljZzdRLIU",
				contentEditable: "TqpfKgK2FdKbljZzdRLIU",
				IconButton: "_3mRkaGP5f0vxRe_U_Gy02A",
				iconButton: "_3mRkaGP5f0vxRe_U_Gy02A",
				active: "_2DlIVUCHN0i6ffc7V4yOsc"
			}
		},
		"./src/chat/components/MessageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return Ze
			})), n.d(t, "a", (function() {
				return Qe
			}));
			var a = n("./node_modules/lodash/noop.js"),
				s = n.n(a),
				r = n("./node_modules/lodash/throttle.js"),
				c = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				h = n("./src/chat/actions/channel/draftMessage.ts"),
				m = n("./src/chat/actions/message/index.ts"),
				p = n("./src/chat/actions/surveyTrigger/index.ts"),
				b = n("./src/chat/actions/tooltip.ts"),
				g = n("./src/chat/actions/tracking.ts");
			const f = function(e, t) {
					let n = "",
						a = 0,
						s = t,
						r = t;
					const c = e.charAt(t - 1);
					if (!/\s|\n|\r/g.test(c)) {
						const c = e.replace(/[\n]/gm, " ");
						a = c.substring(0, t).split(/\s/).length - 1;
						const o = new RegExp(`^(?:[^ ]* ){${a}}([^ |\n]*)`, "g").exec(c) || [],
							i = o && o[0] || "";
						n = o && o[1] || "", s = i.length - n.length, r = i.length
					}
					return {
						word: n,
						count: a,
						posStart: s,
						posEnd: r
					}
				},
				C = function(e, t) {
					const {
						word: n
					} = f(e, t);
					return {
						hasUsername: /^(@|u\/)(\w+)?$/g.test(n),
						username: function(e) {
							return (/^(@|u\/)(\w+)/g.exec(e) || [])[2] || ""
						}(n)
					}
				},
				E = function(e, t, n) {
					const {
						word: a,
						posStart: s,
						posEnd: r
					} = f(e, n), c = (/^(@|u\/)/gm.exec(a) || [])[1];
					if (!a) return {
						textUpdate: e,
						posEndUpdate: r
					};
					const o = c + t,
						{
							text: i,
							posEnd: l
						} = function(e, t, n, a) {
							const s = e.substring(0, n),
								r = s + t;
							return {
								text: r + e.substring(a),
								posStart: s.length,
								posEnd: r.length
							}
						}(e, o, s, r);
					return {
						textUpdate: i,
						posEndUpdate: l
					}
				};
			var O = n("./src/higherOrderComponents/asTooltip.tsx"),
				v = n("./src/chat/components/Scroller/index.tsx"),
				_ = n("./src/chat/constants/page.ts"),
				j = n("./src/chat/controls/Dropdown/index.tsx"),
				y = n("./src/chat/selectors/app.ts"),
				I = n("./src/chat/constants/theme.ts");
			const {
				NIGHT: x
			} = I.b, S = e => !(e.user.prefs.globalTheme !== x);
			var w = n("./src/chat/selectors/tooltip.ts"),
				N = n("./src/chat/components/MessageTooltip/index.m.less"),
				k = n.n(N);
			const T = "MessageInputTooltip--Container",
				M = u.a.wrapped(Object(O.a)(j.a), "Dropdown", k.a),
				A = u.a.div("DropdownWrapper", k.a),
				U = u.a.wrapped(({
					className: e,
					children: t
				}) => {
					const n = Object(l.e)(S);
					return i.a.createElement("div", {
						className: Object(d.a)(e, {
							[k.a.night]: n
						})
					}, t)
				}, "Picker", k.a),
				D = u.a.span("Arrow", k.a);
			u.a.wrapped(e => {
				const t = Object(l.e)(y.d);
				return i.a.createElement(v.b, {
					className: Object(d.a)(e.className, {
						[k.a.embedded]: t
					})
				}, e.children)
			}, "PickerWrapper", k.a).displayName = "PickerWrapper";
			var R = ({
					id: e,
					isOpen: t,
					children: n,
					arrowOffset: a = 45,
					isArrowShow: s = !0
				}) => {
					const r = Object(l.e)(Object(w.a)(e)),
						c = Object(l.d)();
					return i.a.createElement(M, {
						tooltipId: T,
						container: document.getElementById(_.a),
						isOpen: t || r,
						targetPosition: ["left", "bottom"],
						excludeContainerPosition: !0,
						closeOnClickOutside: !0,
						isOverlayOff: !0,
						style: {
							top: "unset",
							left: "unset",
							bottom: "70px",
							right: "360px"
						}
					}, i.a.createElement(A, {
						onClick: () => c(Object(b.d)())
					}, i.a.createElement(U, null, n, s && i.a.createElement(D, {
						style: {
							right: `${a}px`
						}
					}))))
				},
				L = n("./node_modules/fbt/lib/FbtPublic.js"),
				P = n("./node_modules/lodash/debounce.js"),
				B = n.n(P),
				H = n("./src/chat/actions/gifs/index.ts"),
				F = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				G = n("./src/chat/controls/Gif/index.tsx"),
				W = n("./src/chat/controls/Svg/index.tsx");

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var K = e => i.a.createElement(W.a, V({}, e, {
				viewBox: "0 0 20 20"
			}), i.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375Zm3.53,12.1-1.06,1.06L10,11.061,7.53,13.53,6.47,12.47,8.939,10,6.47,7.53,7.53,6.47,10,8.939,12.47,6.47l1.06,1.06L11.061,10Z"
			}));

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var q = e => i.a.createElement(W.a, z({}, e, {
					viewBox: "0 0 20 20"
				}), i.a.createElement("g", {
					id: "icons_flat"
				}, i.a.createElement("path", {
					d: "M19.7,18.3l-4.5-4.5c2.9-3.7,2.3-9.1-1.4-12s-9.1-2.3-12,1.4s-2.3,9.1,1.4,12c3.1,2.4,7.5,2.4,10.6,0l4.5,4.5L19.7,18.3z M8.5,15C4.9,15,2,12.1,2,8.5S4.9,2,8.5,2S15,4.9,15,8.5C15,12.1,12.1,15,8.5,15z"
				}))),
				Z = n("./src/chat/selectors/gifs.ts"),
				Q = n("./src/chat/components/MessageTooltip/Picker/Gif/index.m.less"),
				J = n.n(Q);
			const X = u.a.wrapped(G.a, "Gif", J.a),
				Y = u.a.div("Column", J.a),
				$ = u.a.wrapped(q, "SearchIcon", J.a),
				ee = u.a.wrapped(({
					children: e,
					className: t
				}) => {
					const n = Object(l.e)(y.d);
					return i.a.createElement("div", {
						className: Object(d.a)(t, {
							[J.a.embedded]: n
						})
					}, e)
				}, "Wrapper", J.a),
				te = u.a.wrapped(({
					className: e,
					children: t,
					isVisible: n,
					onClick: a
				}) => n ? i.a.createElement("div", {
					className: e,
					onClick: a
				}, t) : null, "ClearIcon", J.a),
				ne = u.a.wrapped(({
					className: e
				}) => {
					const t = Object(l.e)(Z.b),
						[n, a] = Object(o.useState)(() => t),
						s = Object(o.useRef)(null),
						r = Object(l.d)(),
						c = Object(o.useCallback)(B()(e => {
							(null == e ? void 0 : e.length) >= 2 ? r(Object(H.j)(10, e)) : r(Object(H.k)(""))
						}, 500), []);
					return Object(o.useEffect)(() => {
						var e;
						null === (e = null == s ? void 0 : s.current) || void 0 === e || e.focus()
					}), i.a.createElement("div", {
						className: e,
						onClick: e => e.stopPropagation()
					}, i.a.createElement($, null), i.a.createElement("input", {
						className: J.a.SearchBar,
						ref: s,
						value: n,
						placeholder: L.fbt._("Search GIPHY", null, {
							hk: "3eUT8S"
						}),
						tabIndex: 0,
						onChange: e => {
							(e => {
								a(e), c(e)
							})(e.currentTarget.value)
						}
					}), i.a.createElement(te, {
						onClick: async () => {
							(null == s ? void 0 : s.current) && (await r(Object(H.k)("")), a(""), s.current.focus(), r(Object(H.i)(20)))
						},
						isVisible: Boolean(n)
					}, i.a.createElement(K, null)))
				}, "SearchBarWrapper", J.a),
				ae = u.a.wrapped(({
					className: e,
					onPickGif: t
				}) => {
					const n = Object(l.d)(),
						a = Object(l.e)(Z.a),
						s = Object(l.e)(Z.d),
						r = Object(o.useRef)(null),
						c = Object(l.e)(Z.b),
						d = Object(l.e)(Z.c),
						u = Object(l.e)(Z.f);
					Object(o.useEffect)(() => {
						var e;
						(null === (e = null == r ? void 0 : r.current) || void 0 === e ? void 0 : e.scrollToTop) && r.current.scrollToTop()
					}, [c]), Object(o.useEffect)(() => {
						(null == a ? void 0 : a.length) || n(Object(H.i)(20))
					}, []);
					const h = (e = !1) => (null == a ? void 0 : a.length) ? a.map((n, a) => {
						if (Boolean(a % 2) === e) return i.a.createElement(X, {
							source: n.fixed_width.url,
							key: n.id,
							height: n.fixed_width.dimensions.height,
							title: n.title,
							onClick: () => (e => {
								t(e)
							})(n)
						})
					}) : null;
					return i.a.createElement(v.b, {
						className: e,
						ref: r,
						loadMoreRows: () => n(Object(H.j)(10, c)),
						isLoadMoreRowsComplete: (() => !!s) || d
					}, i.a.createElement(i.a.Fragment, null, i.a.createElement(Y, null, h(), u ? Object(F.a)({
						height: F.f.XS
					}) : s ? Object(F.b)(F.c.FIRST) : null), i.a.createElement(Y, null, h(!0), u ? Object(F.a)({
						height: F.f.S
					}) : null, s && !u ? Object(F.b)(F.c.SECOND) : null)))
				}, "GifListWrapper", J.a);
			var se = ({
					onPickGif: e
				}) => i.a.createElement(ee, null, i.a.createElement(ne, null), i.a.createElement(ae, {
					onPickGif: e
				})),
				re = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/chat/components/Snoomoji/index.tsx")),
				ce = n("./src/chat/icons/Snoo/index.tsx"),
				oe = n("./src/chat/components/MessageTooltip/Picker/Snoomoji/index.m.less"),
				ie = n.n(oe);
			const le = u.a.div("IconWrapper", ie.a);
			le.displayName = "IconWrapper";
			const de = u.a.div("LoadingIndicator", ie.a),
				ue = u.a.wrapped(({
					children: e,
					className: t
				}) => i.a.createElement("div", {
					className: t
				}, e), "Wrapper", ie.a);
			var he = ({
					onPickSnoomoji: e
				}) => {
					const [t, n] = Object(o.useState)(!1), a = Object(l.e)(y.d), s = Object(o.useCallback)(() => {
						Promise.all(ce.b.map(e => new Promise(t => {
							const n = new Image;
							n.onload = () => t(), n.src = ce.a[e]
						}))).then(() => n(!0))
					}, []);
					Object(o.useEffect)(() => {
						s()
					}, [s]);
					return i.a.createElement(v.b, {
						className: Object(d.a)(ie.a.Scroller, {
							[ie.a.embedded]: a
						})
					}, t ? i.a.createElement(ue, null, (() => ce.b.map((t, n) => i.a.createElement(le, {
						key: `icon-${n}`,
						onClick: () => e(t)
					}, i.a.createElement(re.a, {
						iconName: t
					}))))()) : i.a.createElement(de, null, L.fbt._("Loading snoomoji...", null, {
						hk: "39nqLy"
					})))
				},
				me = n("./src/lib/constants/index.ts"),
				pe = n("./src/chat/actions/members.ts"),
				be = n("./src/chat/components/ChatMemberList/index.tsx"),
				ge = n("./src/chat/helpers/chatSelector.ts"),
				fe = n("./src/chat/selectors/channels.ts"),
				Ce = n("./src/chat/selectors/members.ts"),
				Ee = n("./src/chat/components/MessageTooltip/Picker/Userlist/index.m.less"),
				Oe = n.n(Ee);
			const ve = u.a.div("LoadingIndicator", Oe.a),
				_e = u.a.wrapped(be.a, "ChatMemberList", Oe.a),
				je = u.a.wrapped(({
					children: e,
					className: t
				}) => i.a.createElement("div", {
					className: t
				}, e), "Wrapper", Oe.a),
				ye = Object(ge.a)({
					channelId: fe.t,
					channelMembers: Ce.f,
					hasMoreMembers: Ce.d,
					fetchingMembers: Ce.a,
					isEmbedded: y.d
				});
			class Ie extends o.Component {
				constructor(e) {
					super(e), this.fetchedFilter = "", this.isMount = !1, this.fetchSubredditChannelUsers = B()((e = "") => {
						this.props.fetchSubredditChannelUsers(e)
					}, me.Kb, {
						leading: !0,
						trailing: !1
					}), this.onArrowUpListener = e => {
						this.isMount && (this.setState({
							selectIndex: Math.max(this.state.selectIndex - 1, 0)
						}), e.preventDefault(), e.stopPropagation())
					}, this.onArrowDownListener = e => {
						this.isMount && void 0 !== this.members && (this.setState({
							selectIndex: Math.min(this.state.selectIndex + 1, this.members.length - 1)
						}), e.preventDefault(), e.stopPropagation())
					}, this.props.bindArrowUp(this.onArrowUpListener), this.props.bindArrowDown(this.onArrowDownListener), this.state = {
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
					this.props.bindArrowUp !== e.bindArrowUp && e.bindArrowUp(this.onArrowUpListener), this.props.bindArrowDown !== e.bindArrowDown && e.bindArrowDown(this.onArrowDownListener), this.props.inputUserName !== e.inputUserName && this.setState({
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
				renderContent() {
					const {
						channelId: e,
						onPickUserName: t,
						onSelectUserName: n,
						fetchingMembers: a
					} = this.props;
					return this.members = this.filterMembers(), this.members && this.members.length && e ? i.a.createElement(je, null, i.a.createElement(_e, {
						minimal: !0,
						channelId: e,
						members: this.members,
						modIndicator: !0,
						onClick: t,
						onSelectName: n,
						selectIndex: this.state.selectIndex,
						useNSFWIcons: !0
					})) : a || this.members && this.members.length ? i.a.createElement(ve, null, L.fbt._("Loading members...", null, {
						hk: "23phIt"
					})) : i.a.createElement(ve, null, L.fbt._("Member not found!", null, {
						hk: "4DkpQe"
					}))
				}
				render() {
					const {
						isEmbedded: e
					} = this.props;
					return i.a.createElement(v.b, {
						className: Object(d.a)(Oe.a.Scroller, {
							[Oe.a.embedded]: e
						})
					}, this.renderContent())
				}
			}
			var xe = Object(l.b)(ye, e => ({
					fetchSubredditChannelUsers: t => e(Object(pe.e)({
						filter: t
					}))
				}))(Ie),
				Se = n("./src/chat/constants/messages.ts"),
				we = n("./src/chat/controls/Button/index.tsx"),
				Ne = n("./src/chat/constants/keys.ts"),
				ke = n("./src/chat/singleton/SendbirdSDK.ts"),
				Te = n("./src/chat/controls/ContentEditable/index.m.less"),
				Me = n.n(Te);
			const Ae = 19,
				Ue = 12,
				De = 6,
				Re = u.a.textarea("Textarea", Me.a);
			class Le extends i.a.Component {
				constructor(e) {
					super(e), this.offset = 0, this.emitChange = this.emitChange.bind(this), this.emitChangeOnce = this.emitChangeOnce.bind(this), this.handleCursor = this.handleCursor.bind(this), this.handleKeyPress = this.handleKeyPress.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleSizing = this.handleSizing.bind(this), this._ref = i.a.createRef()
				}
				get textarea() {
					return this._ref.current
				}
				componentDidMount() {
					if (this.textarea) {
						const e = this.textarea;
						this.offset = e.offsetHeight - e.clientHeight, e.value = this.props.draftText || "", this.handleSizing()
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.channelId !== e.channelId && this.textarea && (this.textarea.value = e.draftText || "", this.handleSizing()), this.textarea && this.textarea.value ? ke.a.startTypingIndicator() : ke.a.endTypingIndicator(), this.textarea && e.textUpdate && (this.textarea.value = e.textUpdate, this.props.onChangeOnce(this.textarea.value), this.handleSizing()), this.textarea && this.textarea.value && e.clearText && (this.clearTextAndDropInputHeight(), this.props.onChangeOnce(""), this.handleSizing()), e.cursorPosition && this.textarea && (this.textarea.selectionStart = e.cursorPosition.selectionStart, this.textarea.selectionEnd = e.cursorPosition.selectionEnd)
				}
				componentDidUpdate() {
					this.textarea && !this.props.isFocusingPrevented && this.textarea.focus()
				}
				emitChange(e) {
					const t = e.currentTarget.value;
					this.props.onChange(t), this.handleSizing(), this.handleCursor()
				}
				emitChangeOnce(e) {
					const t = e.currentTarget.value;
					this.props.onChangeOnce(t)
				}
				emitBlur(e) {
					const t = e.currentTarget.value;
					this.props.onBlur(t)
				}
				handleKeyPress(e) {
					e.key !== Ne.g || e.shiftKey || (e.preventDefault(), this.props.onSubmit()), this.handleCursor()
				}
				handleKeyDown(e) {
					e.key === Ne.d && (this.props.onArrowUp(e), this.handleSizing()), e.key === Ne.a && (this.props.onArrowDown(e), this.handleSizing()), e.key === Ne.h && this.props.onKeyEsc(e), this.props.onKeyDown(e)
				}
				handleSizing() {
					if (this.textarea) {
						const e = this.textarea;
						e.style.height = "auto", e.style.height = e.scrollHeight + this.offset + "px", e.scrollHeight > 2 * Ae + Ue ? e.style.paddingTop = "0px" : e.style.paddingTop = "12px", e.scrollHeight > Ae * De + 1 ? e.style.overflowY = "scroll" : e.style.overflowY = "hidden"
					}
				}
				handleCursor() {
					if (this.textarea) {
						const {
							selectionStart: e,
							selectionEnd: t
						} = this.textarea;
						this.props.onChangeCursor({
							selectionStart: e,
							selectionEnd: t
						})
					}
				}
				clearTextAndDropInputHeight() {
					if (this.textarea) {
						const e = this.textarea;
						e.value = "", e.style.height = "auto"
					}
				}
				render() {
					return i.a.createElement(Re, {
						tabIndex: 0,
						innerRef: this._ref,
						rows: 1,
						className: this.props.className,
						"aria-label": "Message #chat",
						"aria-multiline": !0,
						"aria-haspopup": !0,
						autoCorrect: "off",
						autoComplete: "off",
						role: "textbox",
						placeholder: L.fbt._("Message", null, {
							hk: "3fzEsG"
						}),
						onKeyPress: this.handleKeyPress,
						onKeyDown: this.handleKeyDown,
						onFocus: this.emitChange,
						onInput: this.emitChange,
						onBlur: e => {
							this.emitChange(e), this.emitBlur(e)
						},
						onChange: e => {
							this.emitChange(e), this.emitChangeOnce(e)
						}
					})
				}
			}
			var Pe = n("./src/chat/helpers/dom.ts");

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var He = e => i.a.createElement(W.a, Be({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? i.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, i.a.createElement("path", {
				d: "M18.226,4.087a3.958,3.958,0,0,0-2.313-2.313,16.817,16.817,0,0,0-11.827,0A3.963,3.963,0,0,0,1.773,4.087a16.756,16.756,0,0,0,0,11.826,3.963,3.963,0,0,0,2.313,2.313,16.744,16.744,0,0,0,11.827,0,3.958,3.958,0,0,0,2.313-2.313,16.741,16.741,0,0,0,0-11.826ZM9,10.53a2.486,2.486,0,0,1-.34,1.293,2.4,2.4,0,0,1-.953.9,2.955,2.955,0,0,1-1.417.328,3.247,3.247,0,0,1-1.579-.386A2.811,2.811,0,0,1,3.6,11.583,3.108,3.108,0,0,1,3.2,10a3.052,3.052,0,0,1,.411-1.583A2.832,2.832,0,0,1,4.74,7.335,3.37,3.37,0,0,1,6.356,6.95a3.827,3.827,0,0,1,.986.128,3.414,3.414,0,0,1,.879.369l-.5,1.169a1.314,1.314,0,0,0-.563-.357,2.3,2.3,0,0,0-.754-.124A1.733,1.733,0,0,0,4.541,9.983a2.064,2.064,0,0,0,.232.99,1.7,1.7,0,0,0,1.542.925,1.681,1.681,0,0,0,.746-.162,1.238,1.238,0,0,0,.513-.443,1.118,1.118,0,0,0,.183-.622H6.124V9.619L9,9.6Zm2.5,2.454H10.182V7.016H11.5Zm5-4.8H14.362V9.577h1.79v1.169h-1.79v2.238H13.044V7.016H16.5Z"
			})) : i.a.createElement(i.a.Fragment, null, i.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, i.a.createElement("path", {
				d: "M4.711,12.664A2.8,2.8,0,0,1,3.6,11.583,3.108,3.108,0,0,1,3.2,10a3.052,3.052,0,0,1,.411-1.583A2.832,2.832,0,0,1,4.74,7.335,3.37,3.37,0,0,1,6.356,6.95a3.827,3.827,0,0,1,.986.128,3.414,3.414,0,0,1,.879.369l-.5,1.169a1.314,1.314,0,0,0-.563-.357,2.3,2.3,0,0,0-.754-.124A1.733,1.733,0,0,0,4.541,9.983a2.064,2.064,0,0,0,.232.99,1.7,1.7,0,0,0,1.542.925,1.681,1.681,0,0,0,.746-.162,1.238,1.238,0,0,0,.513-.443,1.118,1.118,0,0,0,.183-.622H6.124V9.619L9,9.6v.928a2.486,2.486,0,0,1-.34,1.293,2.4,2.4,0,0,1-.953.9,2.955,2.955,0,0,1-1.417.328A3.247,3.247,0,0,1,4.711,12.664Z"
			}), i.a.createElement("path", {
				d: "M10.182,7.016H11.5v5.968H10.182Z"
			}), i.a.createElement("path", {
				d: "M13.044,7.016H16.5V8.185H14.362V9.577h1.79v1.169h-1.79v2.238H13.044Z"
			}), i.a.createElement("path", {
				d: "M10,19.305a16.751,16.751,0,0,1-5.914-1.079,3.963,3.963,0,0,1-2.313-2.313,16.756,16.756,0,0,1,0-11.826A3.963,3.963,0,0,1,4.086,1.774a16.817,16.817,0,0,1,11.827,0,3.958,3.958,0,0,1,2.313,2.313,16.741,16.741,0,0,1,0,11.826,3.958,3.958,0,0,1-2.313,2.313A16.742,16.742,0,0,1,10,19.305Zm0-17.36a15.5,15.5,0,0,0-5.473,1A2.71,2.71,0,0,0,2.943,4.527a15.506,15.506,0,0,0,0,10.946,2.71,2.71,0,0,0,1.584,1.583,15.557,15.557,0,0,0,10.946,0,2.711,2.711,0,0,0,1.583-1.583,15.491,15.491,0,0,0,0-10.946h0a2.711,2.711,0,0,0-1.583-1.583A15.5,15.5,0,0,0,10,1.945Z"
			}))));

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ge = e => i.a.createElement(W.a, Fe({}, e, {
				viewBox: "0 0 24 24"
			}), i.a.createElement("path", {
				d: "M22.6559 10.8L2.39994 0.65995C2.15389 0.529239 1.87278 0.47974 1.59687 0.518539C1.32096 0.557338 1.06441 0.682447 0.863944 0.87595C0.656797 1.06381 0.51403 1.3121 0.455877 1.58564C0.397725 1.85917 0.427136 2.14407 0.539944 2.39995L4.58394 12L0.539944 21.6C0.429918 21.8544 0.401998 22.1368 0.460075 22.4078C0.518153 22.6788 0.659334 22.925 0.863944 23.112C1.10992 23.3469 1.43582 23.4798 1.77594 23.484C1.99315 23.4934 2.20883 23.4436 2.39994 23.34L22.6559 13.2C22.8781 13.0879 23.0648 12.9164 23.1952 12.7045C23.3256 12.4927 23.3947 12.2487 23.3947 12C23.3947 11.7512 23.3256 11.5072 23.1952 11.2954C23.0648 11.0835 22.8781 10.912 22.6559 10.8Z"
			}));

			function We() {
				return (We = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ve = e => i.a.createElement(W.a, We({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? i.a.createElement("path", {
					d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM4.5,9A1.5,1.5,0,1,1,6,10.5,1.5,1.5,0,0,1,4.5,9Zm9.114,4.431A4.378,4.378,0,0,1,10,15.2a4.378,4.378,0,0,1-3.614-1.773l-.431-.613,1.227-.863.432.614A2.92,2.92,0,0,0,10,13.7a2.92,2.92,0,0,0,2.386-1.135l.432-.614,1.227.863ZM14,10.5A1.5,1.5,0,1,1,15.5,9,1.5,1.5,0,0,1,14,10.5Z"
				}) : i.a.createElement(i.a.Fragment, null, i.a.createElement("path", {
					d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375Zm0,18A8.375,8.375,0,1,1,18.375,10,8.384,8.384,0,0,1,10,18.375Z"
				}), i.a.createElement("path", {
					d: "M10,13.829a3.047,3.047,0,0,1-2.489-1.188l-1.022.718A4.252,4.252,0,0,0,10,15.079a4.252,4.252,0,0,0,3.511-1.72l-1.022-.718A3.047,3.047,0,0,1,10,13.829Z"
				}), i.a.createElement("circle", {
					cx: "6",
					cy: "9",
					r: "1.5"
				}), i.a.createElement("circle", {
					cx: "14",
					cy: "9",
					r: "1.5"
				}), " ")),
				Ke = n("./src/chat/selectors/experiments.ts"),
				ze = n("./src/chat/components/MessageInput/index.m.less"),
				qe = n.n(ze);
			const Ze = "MessageInputTooltip--Snoomoji",
				Qe = "MessageInputTooltip--Gif",
				Je = "MessageInputTooltip--Userlist",
				Xe = 5e3,
				Ye = 85,
				$e = u.a.wrapped(we.c, "SubmitButton", qe.a);
			$e.displayName = "SubmitButton";
			const et = u.a.wrapped(Ge, "SendIcon", qe.a),
				tt = u.a.form("Form", qe.a),
				nt = u.a.div("Wrapper", qe.a),
				at = u.a.div("InputWrapper", qe.a),
				st = u.a.div("Icons", qe.a),
				rt = u.a.wrapped(Le, "ContentEditable", qe.a),
				ct = u.a.wrapped(e => i.a.createElement("div", {
					className: Object(d.a)({
						[qe.a.active]: e.active
					}, e.className),
					onMouseDown: Object(Pe.b)(e.onMouseDown)
				}, e.children), "IconButton", qe.a),
				ot = Object(ge.a)({
					activeDropdownId: e => e.tooltipId || void 0,
					draftMessage: (e, t) => Object(fe.n)(e, t.channelId),
					ifGifsEnabled: e => Object(Ke.a)(e) && !Object(fe.G)(e),
					isFullSize: y.e
				}),
				it = Object(l.b)(ot, (e, {
					channelId: t
				}) => ({
					onSubmitText: n => e(Object(m.q)(t, n.trim(), Se.c.TEXT)),
					onSubmitSnoo: n => e(Object(m.q)(t, n.trim(), Se.c.SNOOMOJI)),
					onSubmitGif: n => {
						e(Object(m.o)(t, n)), e(Object(H.k)(""))
					},
					toggleSnoomojiTooltip: t => {
						e(Object(b.c)({
							tooltipId: t
						})), e(Object(g.H)(t))
					},
					toggleGifTooltip: t => {
						e(Object(b.c)({
							tooltipId: t
						})), e(Object(g.H)(t))
					},
					toggleUserlistTooltip: t => {
						e(Object(b.c)({
							tooltipId: t
						}))
					},
					saveDraft: (t, n) => {
						e(Object(h.e)({
							channelId: t,
							messageValue: n
						}))
					},
					deleteDraft: t => {
						e(Object(h.f)(t))
					},
					closeUserlistTooltip: () => e(Object(b.d)()),
					startSurveyTimer: () => e(Object(p.b)())
				}));
			class lt extends o.PureComponent {
				constructor(e) {
					super(e), this.selectUserName = "", this.cursorPosition = {
						selectionStart: 0,
						selectionEnd: 0
					}, this.updateDraftText = e => {
						const {
							saveDraft: t,
							deleteDraft: n,
							channelId: a
						} = this.props, s = e.trim();
						s ? t(a, s) : n(a)
					}, this.handleChangeText = e => {
						this.setState({
							text: e.trim()
						})
					}, this.handleInputBlur = e => {
						this.updateDraftText(e)
					}, this.handleChangeOnce = e => {
						this.toggleUserlistTooltipByTextChange(e), this.cleanChildProps()
					}, this.sendEnabled = () => !!this.state.text, this.onArrowUpUserlistListener = s.a, this.onArrowDownUserlistListener = s.a, this.startIdleTimerThrottle = c()(() => {
						this.props.startSurveyTimer()
					}, Xe), this.handleSubmitText = this.handleSubmitText.bind(this), this.handleSubmitSnoo = this.handleSubmitSnoo.bind(this), this.onPickGifHandler = this.onPickGifHandler.bind(this);
					const t = this.props.draftMessage || "";
					this.reFocusCursorPosition(t.length), this.state = {
						text: t,
						textUpdate: "",
						inputUserName: "",
						clearText: !1
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						channelId: t
					} = this.props;
					if (t !== e.channelId) {
						this.updateDraftText(this.state.text);
						const t = e.draftMessage || "";
						this.setState({
							text: t
						}, () => this.reFocusCursorPosition(t.length))
					}
				}
				componentWillUnmount() {
					const {
						channelId: e,
						saveDraft: t
					} = this.props;
					t(e, this.state.text.trim())
				}
				cleanChildProps() {
					this.setState({
						textUpdate: "",
						clearText: !1
					})
				}
				clearText() {
					this.setState({
						text: "",
						clearText: !0
					})
				}
				handleSubmitText() {
					const {
						channelId: e,
						onSubmitText: t,
						onSubmit: n,
						deleteDraft: a
					} = this.props;
					this.sendEnabled() && (this.isUserlistPopupOpened() ? (this.onPickUserName(this.selectUserName || this.state.inputUserName), this.props.toggleUserlistTooltip(Je)) : (t(this.state.text), n && n(), this.clearText(), a(e)))
				}
				handleSubmitSnoo(e) {
					const {
						onSubmitSnoo: t,
						onSubmit: n
					} = this.props;
					t(e), n && n()
				}
				onPickGifHandler(e) {
					const {
						onSubmit: t,
						onSubmitGif: n
					} = this.props;
					n(e), t && t()
				}
				onPickUserName(e) {
					const {
						text: t
					} = this.state, {
						selectionEnd: n
					} = this.cursorPosition, {
						textUpdate: a,
						posEndUpdate: s
					} = E(t, e, n);
					this.setState({
						textUpdate: a,
						text: a
					}, () => {
						this.reFocusCursorPosition(s), this.props.toggleUserlistTooltip(Je)
					})
				}
				toggleUserlistTooltipByTextChange(e) {
					const {
						selectionEnd: t
					} = this.cursorPosition, {
						hasUsername: n,
						username: a
					} = C(e, t), s = this.isUserlistPopupOpened();
					return (n && !s || !n && s) && this.props.toggleUserlistTooltip(Je), this.setState({
						inputUserName: a
					})
				}
				isUserlistPopupOpened() {
					return this.props.activeDropdownId === Je
				}
				reFocusCursorPosition(e) {
					this.cursorPosition = {
						selectionStart: e,
						selectionEnd: e
					}
				}
				render() {
					const {
						activeDropdownId: e,
						className: t,
						channelId: n,
						toggleSnoomojiTooltip: a,
						toggleGifTooltip: s,
						draftMessage: r,
						ifGifsEnabled: c,
						isFullSize: o
					} = this.props;
					return i.a.createElement(tt, {
						tabIndex: 0,
						className: Object(d.a)(t, {
							[qe.a.isFullSize]: o
						}),
						id: T,
						onSubmit: Object(Pe.b)(this.handleSubmitText)
					}, i.a.createElement(nt, null, i.a.createElement(at, null, i.a.createElement(rt, {
						channelId: n,
						clearText: this.state.clearText,
						cursorPosition: this.cursorPosition,
						draftText: r || "",
						isFocusingPrevented: Boolean(e),
						onArrowDown: e => this.onArrowDownUserlistListener(e),
						onArrowUp: e => this.onArrowUpUserlistListener(e),
						onBlur: this.handleInputBlur,
						onChange: this.handleChangeText,
						onChangeCursor: e => this.cursorPosition = e,
						onChangeOnce: this.handleChangeOnce,
						onKeyDown: this.startIdleTimerThrottle,
						onKeyEsc: () => this.props.closeUserlistTooltip(),
						onSubmit: this.handleSubmitText,
						textUpdate: this.state.textUpdate
					}), i.a.createElement(st, null, c && i.a.createElement(ct, {
						onMouseDown: () => s(Qe),
						active: e === Qe
					}, i.a.createElement(He, {
						isFilled: e === Qe
					})), i.a.createElement(ct, {
						onMouseDown: () => a(Ze),
						active: e === Ze
					}, i.a.createElement(Ve, {
						isFilled: e === Ze
					})), i.a.createElement(R, {
						id: Ze
					}, i.a.createElement(he, {
						onPickSnoomoji: this.handleSubmitSnoo
					})), i.a.createElement(R, {
						id: Qe,
						arrowOffset: Ye
					}, i.a.createElement(se, {
						onPickGif: this.onPickGifHandler
					})), i.a.createElement(R, {
						id: Je,
						isArrowShow: !1
					}, i.a.createElement(xe, {
						bindArrowDown: e => this.onArrowDownUserlistListener = e,
						bindArrowUp: e => this.onArrowUpUserlistListener = e,
						inputUserName: this.state.inputUserName,
						onPickUserName: e => this.onPickUserName(e),
						onSelectUserName: e => this.selectUserName = e
					})))), i.a.createElement($e, {
						type: "submit",
						disabled: !this.sendEnabled()
					}, i.a.createElement(et, null))))
				}
			}
			t.c = it(lt)
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
				isFullSize: "_3QO_W-G-hksIFDcNiqCWby",
				LoadingIndicator: "ZLheoiA0Ou5i6qztt72Fo",
				loadingIndicator: "ZLheoiA0Ou5i6qztt72Fo",
				LoadingError: "_3NndSEXY_RxH5czXJ4Rt-A",
				loadingError: "_3NndSEXY_RxH5czXJ4Rt-A",
				SystemBubble: "zXSCzweFvK-RhyFTWZ0Eu",
				systemBubble: "zXSCzweFvK-RhyFTWZ0Eu",
				TypingIndicatorWrapper: "_1b-g4iuU52ClVq4jUeFT8g",
				typingIndicatorWrapper: "_1b-g4iuU52ClVq4jUeFT8g",
				MessageQuickReplyPicker: "_3_NY36lHeA1_XkDd7-y151",
				messageQuickReplyPicker: "_3_NY36lHeA1_XkDd7-y151"
			}
		},
		"./src/chat/components/MessageQuickReplyPicker/index.m.less": function(e, t, n) {
			e.exports = {
				MessageQuickReplyPicker: "_1xvAvWcrBapXnEGvrmh3yN",
				messageQuickReplyPicker: "_1xvAvWcrBapXnEGvrmh3yN",
				ReplyItem: "_17IGqTAlpOgSopBuB7U62_",
				replyItem: "_17IGqTAlpOgSopBuB7U62_",
				SnooWrapper: "_2yFY77NTqlzz4qQyAZht0c",
				snooWrapper: "_2yFY77NTqlzz4qQyAZht0c"
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
		"./src/chat/components/MessageTooltip/Picker/Gif/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3v6j-bIuGBEiM2hT2MghjL",
				wrapper: "_3v6j-bIuGBEiM2hT2MghjL",
				embedded: "_2G2_IhVsNJu8ng2DmJgYYA",
				GifListWrapper: "IN3j_jc6v3neF2d4KxLZ4",
				gifListWrapper: "IN3j_jc6v3neF2d4KxLZ4",
				Column: "_17KkPaE72wfeNQDMWw3Hva",
				column: "_17KkPaE72wfeNQDMWw3Hva",
				SearchBarWrapper: "_9zQAqxQU29DIac9Rkg8ME",
				searchBarWrapper: "_9zQAqxQU29DIac9Rkg8ME",
				ClearIcon: "_3gPN6vgDvBFHrrpYRlpNEb",
				clearIcon: "_3gPN6vgDvBFHrrpYRlpNEb",
				SearchIcon: "YraxCMGR44fnchSK1_HF9",
				searchIcon: "YraxCMGR44fnchSK1_HF9",
				SearchBar: "_3BCAjXkO8oiaTHhK716X3",
				searchBar: "_3BCAjXkO8oiaTHhK716X3",
				ErrorIndicator: "h2TN7wHyQiIN5QSNXZf8E",
				errorIndicator: "h2TN7wHyQiIN5QSNXZf8E",
				Gif: "_3jpAyk-Rb8DoqbS4tSad8m",
				gif: "_3jpAyk-Rb8DoqbS4tSad8m"
			}
		},
		"./src/chat/components/MessageTooltip/Picker/Snoomoji/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_1lDKDLig_rrn2bFbRLOqW4",
				iconWrapper: "_1lDKDLig_rrn2bFbRLOqW4",
				EmptyIcons: "_2eF6PwKYoCYDlZck4CNQmW",
				emptyIcons: "_2eF6PwKYoCYDlZck4CNQmW",
				LoadingIndicator: "_3TrVQHgFMJmACitkG7xKPF",
				loadingIndicator: "_3TrVQHgFMJmACitkG7xKPF",
				Wrapper: "Turq55YaWNBO8-QIDfbs8",
				wrapper: "Turq55YaWNBO8-QIDfbs8",
				Scroller: "_3jUUJNS_HIr8j6ROnKGumV",
				scroller: "_3jUUJNS_HIr8j6ROnKGumV",
				embedded: "_2xavI2kO5awV7LipJMe3yO"
			}
		},
		"./src/chat/components/MessageTooltip/Picker/Userlist/index.m.less": function(e, t, n) {
			e.exports = {
				LoadingIndicator: "_67CcLoUsrEWgloZ_-qM6h",
				loadingIndicator: "_67CcLoUsrEWgloZ_-qM6h",
				ChatMemberList: "IJIPa00OJ-vYCKSiQQ85A",
				chatMemberList: "IJIPa00OJ-vYCKSiQQ85A",
				Wrapper: "_2Dxcf4_uSUDZwgZBek76xS",
				wrapper: "_2Dxcf4_uSUDZwgZBek76xS",
				Scroller: "Jk77uP5srzJBOmSZkhG6e",
				scroller: "Jk77uP5srzJBOmSZkhG6e",
				embedded: "T8eBD-qbKTfyAe3c4xx6I"
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
				night: "_1ETjOjsiSdLms_wuDsEQTL",
				PickerWrapper: "_1h1uw7kxU6VJk75NglIHM2",
				pickerWrapper: "_1h1uw7kxU6VJk75NglIHM2",
				Arrow: "_1ZxpddisBCXfjGyXF3sgS2",
				arrow: "_1ZxpddisBCXfjGyXF3sgS2"
			}
		},
		"./src/chat/components/MinimizedPortalContainer/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1FE1o9C7Gk8k6ciF8-oeXx",
				container: "_1FE1o9C7Gk8k6ciF8-oeXx",
				HiddenCloseButton: "_3kOgjtISRZqbdX0TbLj1qf",
				hiddenCloseButton: "_3kOgjtISRZqbdX0TbLj1qf",
				unread: "_3_5vp22XXTWVhB9_9wtM_X",
				fade: "y8-9QiX24znAqzPkQ51Et",
				TitleWithCounter: "_3bzYm5d0EW5ZCDVM6kmYIh",
				titleWithCounter: "_3bzYm5d0EW5ZCDVM6kmYIh"
			}
		},
		"./src/chat/components/MinimizedPortalContainer/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/actions/container.ts"),
				l = n("./src/chat/components/CloseIcon/index.tsx"),
				d = n("./src/chat/components/ThemeProvider/index.tsx"),
				u = n("./src/chat/constants/container.ts"),
				h = n("./src/chat/controls/Counter/index.tsx"),
				m = n("./src/chat/helpers/chatSelector.ts"),
				p = n("./src/chat/selectors/messages.ts"),
				b = n("./src/chat/components/MinimizedPortalContainer/index.m.less"),
				g = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), {
				minimized: C
			} = u.b, E = o.a.wrapped(l.a, "HiddenCloseButton", g.a);
			E.displayName = "CloseButton";
			const O = o.a.wrapped(e => s.a.createElement("div", {
					onClick: e.onClick,
					className: e.className,
					style: {
						width: `${C.width}px`,
						height: `${C.height}px`
					}
				}, e.children), "Container", g.a),
				v = o.a.span("TitleWithCounter", g.a),
				_ = Object(m.a)({
					unreadCount: p.a
				}),
				j = Object(r.b)(_, e => ({
					close: () => e(Object(i.sizeChanged)(u.a.HIDDEN)),
					open: () => e(Object(i.sizeChanged)(u.a.EMBED))
				}));
			t.a = j(e => {
				const {
					unread: t,
					count: n
				} = e.unreadCount, a = n > 0 ? n : void 0;
				return s.a.createElement(d.a, null, s.a.createElement(O, {
					key: n,
					className: Object(c.a)(e.className, {
						[g.a.unread]: t
					}),
					onClick: e.open
				}, s.a.createElement(v, null, f._("Chat", null, {
					hk: "3ZWpRR"
				}), t && s.a.createElement(h.b, {
					count: a
				})), s.a.createElement(E, null)))
			})
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
		"./src/chat/components/OverlayDirectsEmptySkeletonState/index.m.less": function(e, t, n) {
			e.exports = {
				Overlay: "_3JqU01I4UxftcHFL-E_FpR",
				overlay: "_3JqU01I4UxftcHFL-E_FpR",
				OverlayContent: "_1niqeuZHnUSIHHmhgViD3c",
				overlayContent: "_1niqeuZHnUSIHHmhgViD3c",
				Header: "_22RuUCTen9P-FIcrWoCgPp",
				header: "_22RuUCTen9P-FIcrWoCgPp"
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
		"./src/chat/components/OverlayHideChannel/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_307OfV8du-3RF2ziwOucOD",
				text: "_307OfV8du-3RF2ziwOucOD"
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
				isFullSize: "_2eL3yfNvwcgxRj67k4NNvZ",
				IconButton: "_3J_VqiRqDy_VXX-qgm8Opv",
				iconButton: "_3J_VqiRqDy_VXX-qgm8Opv",
				ArrowLeft: "_1gT3NMxapcWN7mKsVy-Iex",
				arrowLeft: "_1gT3NMxapcWN7mKsVy-Iex",
				TitleWrapper: "_1FXx-0D9q_ppO-Wvhxl2SH",
				titleWrapper: "_1FXx-0D9q_ppO-Wvhxl2SH",
				ChatIcon: "_1ZOkwOAtSY9BqsYvjSxu5e",
				chatIcon: "_1ZOkwOAtSY9BqsYvjSxu5e",
				embed: "_1caGKUrOZdt2pgF1aGNot9",
				Title: "ylMZS-KGeMjDd_L-rq4Rq",
				title: "ylMZS-KGeMjDd_L-rq4Rq",
				UserProfileTitle: "_3ljsscYjxBIfRvSCzYzPR1",
				userProfileTitle: "_3ljsscYjxBIfRvSCzYzPR1",
				SubTitle: "AxqaQ2FQrA19yH4bFOCfx",
				subTitle: "AxqaQ2FQrA19yH4bFOCfx"
			}
		},
		"./src/chat/components/OverlayNav/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/opener/index.ts"),
				i = n("./src/chat/actions/container.ts"),
				l = n("./src/chat/actions/sidebar.ts"),
				d = n("./src/chat/actions/tracking.ts"),
				u = n("./src/chat/components/ChatIcon/index.tsx"),
				h = n("./node_modules/fbt/lib/FbtPublic.js"),
				m = n("./node_modules/lodash/noop.js"),
				p = n.n(m),
				b = n("./src/higherOrderComponents/asTooltip.tsx"),
				g = n("./src/lib/copyToClipboard/index.ts"),
				f = n("./src/lib/lessComponent.tsx"),
				C = n("./src/chat/actions/channel/dropdown.ts"),
				E = n("./src/chat/actions/tooltip.ts"),
				O = n("./src/chat/actions/user/dropdown.ts"),
				v = n("./src/chat/actions/theme.ts"),
				_ = n("./src/chat/helpers/chatSelector.ts"),
				j = n("./src/chat/controls/Svg/index.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var I = e => s.a.createElement(j.a, y({}, e, {
					viewBox: "0 0 59.077 59.077"
				}), s.a.createElement("g", null, s.a.createElement("path", {
					d: "M55.906,28.463c-0.235,0.129-0.469,0.258-0.711,0.379c-11.339,5.68-25.186,1.072-30.864-10.268   C21.8,13.517,21.22,7.726,22.699,2.268L23.315,0l-2.061,1.129C9.807,7.402,5.107,21.605,10.554,33.464   c0.231,0.501,0.826,0.722,1.326,0.491c0.502-0.23,0.723-0.824,0.492-1.326C7.684,22.424,11.164,10.333,20.253,4.09   c-0.891,5.221-0.102,10.602,2.289,15.379c5.952,11.884,20.155,16.965,32.216,11.78c-2.045,5.346-6.026,9.775-11.183,12.357   c-3.167,1.586-6.557,2.407-10.074,2.438c-0.638,0.007-1.285-0.016-1.917-0.063c-0.551-0.05-1.031,0.371-1.072,0.922   c-0.041,0.551,0.371,1.031,0.922,1.072c0.617,0.046,1.244,0.07,1.867,0.07c0.073,0,0.146,0,0.218-0.001   c3.825-0.034,7.51-0.926,10.952-2.65c6.357-3.183,11.071-8.95,12.935-15.822l0.562-2.239L55.906,28.463z"
				}), s.a.createElement("path", {
					d: "M31.271,43.412c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.179,0.867-0.5c0.276-0.479,0.112-1.09-0.366-1.366   l-2.83-1.634l2.83-1.634c0.479-0.276,0.643-0.888,0.366-1.366c-0.277-0.479-0.89-0.642-1.366-0.366l-2.83,1.634v-3.268   c0-0.552-0.447-1-1-1s-1,0.448-1,1v3.268l-2.83-1.634c-0.478-0.276-1.09-0.113-1.366,0.366c-0.276,0.479-0.112,1.09,0.366,1.366   l2.83,1.634l-2.83,1.634c-0.479,0.276-0.643,0.888-0.366,1.366c0.186,0.321,0.521,0.5,0.867,0.5c0.17,0,0.342-0.043,0.499-0.134   l2.83-1.634v3.268c0,0.552,0.447,1,1,1s1-0.448,1-1v-3.268L31.271,43.412z"
				}), s.a.createElement("path", {
					d: "M11.637,37.046c-0.277-0.479-0.89-0.642-1.366-0.366l-2.83,1.634v-3.268c0-0.552-0.447-1-1-1s-1,0.448-1,1v3.268   l-2.83-1.634c-0.478-0.276-1.09-0.113-1.366,0.366c-0.276,0.479-0.112,1.09,0.366,1.366l2.83,1.634l-2.83,1.634   c-0.479,0.276-0.643,0.888-0.366,1.366c0.186,0.321,0.521,0.5,0.867,0.5c0.17,0,0.342-0.043,0.499-0.134l2.83-1.634v3.268   c0,0.552,0.447,1,1,1s1-0.448,1-1v-3.268l2.83,1.634c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.179,0.867-0.5   c0.276-0.479,0.112-1.09-0.366-1.366l-2.83-1.634l2.83-1.634C11.749,38.136,11.913,37.524,11.637,37.046z"
				}), s.a.createElement("path", {
					d: "M22.637,50.077c-0.277-0.479-0.89-0.642-1.366-0.366l-2.83,1.634v-3.268c0-0.552-0.447-1-1-1s-1,0.448-1,1v3.268   l-2.83-1.634c-0.478-0.276-1.09-0.112-1.366,0.366s-0.112,1.09,0.366,1.366l2.83,1.634l-2.83,1.634   c-0.479,0.276-0.643,0.888-0.366,1.366c0.186,0.321,0.521,0.5,0.867,0.5c0.17,0,0.342-0.043,0.499-0.134l2.83-1.634v3.268   c0,0.552,0.447,1,1,1s1-0.448,1-1v-3.268l2.83,1.634c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.179,0.867-0.5   c0.276-0.479,0.112-1.09-0.366-1.366l-2.83-1.634l2.83-1.634C22.749,51.167,22.913,50.556,22.637,50.077z"
				}))),
				x = n("./src/chat/components/ThemeSwitcher/index.m.less"),
				S = n.n(x);
			const w = Object(_.a)({
					theme: e => e.user.prefs.globalTheme
				}),
				N = Object(r.b)(w, (e, t) => ({
					changeModeClicked: () => e(Object(v.themeToggle)())
				})),
				k = f.a.div("Wrapper", S.a);
			N(({
				changeModeClicked: e,
				theme: t
			}) => s.a.createElement(k, {
				onClick: e
			}, s.a.createElement(I, {
				active: !0
			})));
			var T = n("./src/chat/constants/channels.ts"),
				M = n("./src/chat/constants/dropdown.ts"),
				A = n("./src/chat/constants/page.ts"),
				U = n("./src/chat/controls/Button/index.tsx"),
				D = n("./src/chat/controls/Dropdown/index.tsx"),
				R = n("./src/chat/controls/Dropdown/Row.tsx"),
				L = n("./src/chat/helpers/urls/index.ts");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var B = e => s.a.createElement(j.a, P({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				d: "M16,8H12V4a1,1,0,0,0-1-1H9A1,1,0,0,0,8,4V8H4A1,1,0,0,0,3,9v2a1,1,0,0,0,1,1H8v4a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V12h4a1,1,0,0,0,1-1V9A1,1,0,0,0,16,8Z"
			}));

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var F = e => s.a.createElement(j.a, H({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 15.5C7.568 15.5 6.248 15.029 5.172 14.242L14.242 5.172C15.029 6.248 15.5 7.568 15.5 9C15.5 12.584 12.584 15.5 9 15.5ZM2.5 9C2.5 5.416 5.416 2.5 9 2.5C10.432 2.5 11.752 2.971 12.828 3.758L3.758 12.828C2.971 11.752 2.5 10.432 2.5 9ZM9 0.5C4.313 0.5 0.5 4.313 0.5 9C0.5 13.687 4.313 17.5 9 17.5C13.687 17.5 17.5 13.687 17.5 9C17.5 4.313 13.687 0.5 9 0.5Z"
			}));

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var W = e => s.a.createElement(j.a, G({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				d: "M16.345 14.931L17.707 16.293C18.098 16.684 18.098 17.316 17.707 17.707C17.512 17.902 17.256 18 17 18C16.744 18 16.488 17.902 16.293 17.707L0.293 1.70701C-0.0979999 1.31601 -0.0979999 0.684006 0.293 0.293006C0.684 -0.0979941 1.316 -0.0979941 1.707 0.293006L4.493 3.07901C5.591 1.81601 7.199 1.01001 9 1.01001C12.303 1.01001 14.99 3.69701 14.99 7.00001L15 11.998C15 12.552 15.449 13 16 13C16.552 13 17 13.447 17 14C17 14.431 16.726 14.789 16.345 14.931ZM3.0103 6.99801L3.0003 12C3.0003 12.552 2.5513 13 2.0003 13C1.4483 13 1.0003 13.447 1.0003 14C1.0003 14.553 1.4483 15 2.0003 15H11.5863L3.0383 6.45201C3.0213 6.63201 3.0103 6.81301 3.0103 6.99801ZM8 16H7C7 17.103 7.897 18 9 18C10.103 18 11 17.103 11 16H10H8Z"
			}));

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var K = e => s.a.createElement(j.a, V({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				d: "M14 10.9882C14 11.5422 14.449 11.9902 15 11.9902C15.552 11.9902 16 12.4372 16 12.9902C16 13.5432 15.552 13.9902 15 13.9902H1C0.448 13.9902 0 13.5432 0 12.9902C0 12.4372 0.448 11.9902 1 11.9902C1.551 11.9902 2 11.5422 2 10.9902L2.01 5.9882C2.01 2.6872 4.697 0.000198364 8 0.000198364C11.303 0.000198364 13.99 2.6872 13.99 5.9902L14 10.9882ZM6 14.9902H7H9H10C10 16.0932 9.103 16.9902 8 16.9902C6.897 16.9902 6 16.0932 6 14.9902Z"
			}));

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var q = e => s.a.createElement(j.a, z({}, e, {
				viewBox: "1 0 23 20"
			}), s.a.createElement("g", null, s.a.createElement("path", {
				d: "M4.59,8 L2.29,10.29a1,1 0,0 0,1.41 1.41L6,9.41Z"
			}), s.a.createElement("path", {
				d: "M6,11a4,4 0,0 0,5.34 3.75l-5.1,-5.1A4,4 0,0 0,6 11Z"
			}), s.a.createElement("path", {
				d: "M18.71,17.29l-5,-5A3.87,3.87 0,0 0,14 11a4,4 0,0 0,-0.68 -2.22c0.07,0.06 0.15,0.11 0.21,0.17l2.76,2.76a1,1 0,0 0,1.41 -1.41L14.95,7.54A7,7 0,0 0,7.42 6L2.71,1.29A1,1 0,0 0,1.29 2.71l16,16a1,1 0,0 0,1.41 -1.41Z"
			})));

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Q = e => s.a.createElement(j.a, Z({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M7 0H14C15.654 0 17 1.346 17 3V15C17 16.654 15.654 18 14 18H7C5.346 18 4 16.654 4 15V14C4 13.448 4.447 13 5 13C5.553 13 6 13.448 6 14V15C6 15.551 6.448 16 7 16H14C14.552 16 15 15.551 15 15V3C15 2.449 14.552 2 14 2H7C6.448 2 6 2.449 6 3V4C6 4.552 5.553 5 5 5C4.447 5 4 4.552 4 4V3C4 1.346 5.346 0 7 0ZM8.293 12.707C7.902 12.316 7.902 11.684 8.293 11.293L9.586 10H1C0.447 10 0 9.552 0 9C0 8.448 0.447 8 1 8H9.586L8.293 6.707C7.902 6.316 7.902 5.684 8.293 5.293C8.684 4.902 9.316 4.902 9.707 5.293L12.706 8.293C12.799 8.385 12.872 8.495 12.923 8.618C13.024 8.862 13.024 9.138 12.923 9.382C12.872 9.505 12.799 9.615 12.706 9.708L9.707 12.707C9.512 12.902 9.256 13 9 13C8.744 13 8.488 12.902 8.293 12.707Z"
			}));

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var X = e => s.a.createElement(j.a, J({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), s.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}));

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var $ = e => s.a.createElement(j.a, Y({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				d: "M2.01557 4.0152V13.4922C2.01557 13.6692 2.04557 13.8372 2.08857 14.0002H0.999573C0.447573 14.0002 -0.000427246 13.5532 -0.000427246 13.0002V1.0002C-0.000427246 0.4472 0.447573 0.000200272 0.999573 0.000200272H12.9996C13.5526 0.000200272 13.9996 0.4472 13.9996 1.0002V2.0892C13.8366 2.0462 13.6686 2.0152 13.4926 2.0152H4.01557C2.91157 2.0152 2.01557 2.9112 2.01557 4.0152ZM4.99997 14C4.99997 14.276 5.22397 14.5 5.49997 14.5H13.5C13.776 14.5 14 14.276 14 14C14 12.07 12.43 10.5 10.5 10.5H8.49997C6.56997 10.5 4.99997 12.07 4.99997 14ZM12 7.00002C12 5.62102 10.878 4.50002 9.49997 4.50002C8.12197 4.50002 6.99997 5.62102 6.99997 7.00002C6.99997 8.37902 8.12197 9.50002 9.49997 9.50002C10.878 9.50002 12 8.37902 12 7.00002ZM3.99997 3.00002H15C15.552 3.00002 16 3.44702 16 4.00002V15C16 15.553 15.552 16 15 16H3.99997C3.44797 16 2.99997 15.553 2.99997 15V4.00002C2.99997 3.44702 3.44797 3.00002 3.99997 3.00002Z"
			}));

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var te = e => s.a.createElement(j.a, ee({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				d: "M14.06 0.854L16.146 2.94C16.731 3.525 16.731 4.476 16.146 5.061L14.31 6.897C14.212 6.995 14.084 7.044 13.957 7.044C13.829 7.044 13.701 6.995 13.603 6.897L10.103 3.397C9.908 3.202 9.908 2.885 10.103 2.69L11.939 0.854C12.524 0.269 13.475 0.269 14.06 0.854ZM8.689 4.104C8.884 3.909 9.201 3.909 9.396 4.104L12.896 7.604C13.091 7.799 13.091 8.116 12.896 8.311L4.353 16.854C4.259 16.948 4.132 17 4 17H0.5C0.223 17 0 16.777 0 16.5V13C0 12.868 0.052 12.741 0.146 12.647L8.689 4.104Z"
			}));

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ae = e => s.a.createElement(j.a, ne({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("path", {
					d: "M10,6.875A3.125,3.125,0,1,0,13.125,10,3.129,3.129,0,0,0,10,6.875Zm0,5A1.875,1.875,0,1,1,11.875,10,1.877,1.877,0,0,1,10,11.875Z"
				}), s.a.createElement("path", {
					d: "M19.549,8.849a1.124,1.124,0,0,0-1.116-.974H17.4a.915.915,0,0,1-.828-.608.906.906,0,0,1,.163-1l.722-.723a1.127,1.127,0,0,0,.1-1.495,9.631,9.631,0,0,0-1.608-1.608,1.129,1.129,0,0,0-1.494.1l-.724.724a.92.92,0,0,1-1.018.155.906.906,0,0,1-.588-.82V1.567A1.123,1.123,0,0,0,11.151.451a8.782,8.782,0,0,0-2.3,0,1.123,1.123,0,0,0-.974,1.116V2.6a.915.915,0,0,1-.608.828.907.907,0,0,1-1-.163l-.723-.722a1.126,1.126,0,0,0-1.495-.1A9.631,9.631,0,0,0,2.443,4.051a1.127,1.127,0,0,0,.1,1.494l.724.724a.917.917,0,0,1,.155,1.018.906.906,0,0,1-.82.588H1.567a1.123,1.123,0,0,0-1.116.974,8.754,8.754,0,0,0,0,2.3,1.123,1.123,0,0,0,1.116.974H2.6a.915.915,0,0,1,.828.608.906.906,0,0,1-.163,1l-.722.723a1.127,1.127,0,0,0-.1,1.495,9.707,9.707,0,0,0,1.608,1.608,1.13,1.13,0,0,0,1.494-.1l.724-.724a.916.916,0,0,1,1.018-.155.906.906,0,0,1,.588.82v1.031a1.123,1.123,0,0,0,.974,1.116,8.754,8.754,0,0,0,2.3,0,1.123,1.123,0,0,0,.974-1.116V17.4a.915.915,0,0,1,.608-.828.906.906,0,0,1,1,.163l.724.724a1.132,1.132,0,0,0,1.494.1,9.707,9.707,0,0,0,1.608-1.608,1.127,1.127,0,0,0-.1-1.494l-.724-.724a.917.917,0,0,1-.155-1.018.906.906,0,0,1,.82-.588h1.031a1.123,1.123,0,0,0,1.116-.974,8.754,8.754,0,0,0,0-2.3Zm-1.226,2.026H17.4a2.224,2.224,0,0,0-1.549,3.741l.65.65A8.459,8.459,0,0,1,15.266,16.5l-.65-.65A2.224,2.224,0,0,0,10.875,17.4v.921a7.216,7.216,0,0,1-1.75,0V17.4A2.159,2.159,0,0,0,7.747,15.42a2.154,2.154,0,0,0-2.363.433l-.65.65A8.459,8.459,0,0,1,3.5,15.266l.65-.65A2.224,2.224,0,0,0,2.6,10.875H1.677a7.388,7.388,0,0,1,0-1.75H2.6A2.159,2.159,0,0,0,4.58,7.747a2.152,2.152,0,0,0-.433-2.363l-.65-.65A8.362,8.362,0,0,1,4.734,3.5l.65.65a2.162,2.162,0,0,0,2.382.425A2.15,2.15,0,0,0,9.125,2.6V1.677a7.216,7.216,0,0,1,1.75,0V2.6A2.159,2.159,0,0,0,12.253,4.58a2.158,2.158,0,0,0,2.363-.433l.65-.65A8.362,8.362,0,0,1,16.5,4.734l-.65.65a2.16,2.16,0,0,0-.425,2.382A2.15,2.15,0,0,0,17.4,9.125h.921a7.388,7.388,0,0,1,0,1.75Z"
				})),
				se = n("./src/chat/models/Channel/index.ts"),
				re = n("./src/chat/selectors/app.ts"),
				ce = n("./src/chat/selectors/channels.ts"),
				oe = n("./src/chat/selectors/user.ts"),
				ie = n("./src/chat/components/ChannelHeaderDropdown/index.m.less"),
				le = n.n(ie);
			const de = "OverlayNavTooltip--Default",
				ue = f.a.wrapped(Object(b.a)(D.a), "Dropdown", le.a);
			ue.displayName = "Dropdown";
			const he = f.a.wrapped(R.a, "DropdownRow", le.a);
			he.displayName = "DropdownRow";
			const me = f.a.wrapped(U.c, "DropdownTrigger", le.a),
				pe = e => {
					switch (e) {
						case M.b.AddToGroup:
							return {
								text: h.fbt._("Add to group", null, {
									hk: "3ZCBwZ"
								}), icon: s.a.createElement(B, null)
							};
						case M.b.Block:
							return {
								text: h.fbt._("Block", null, {
									hk: "1s7OxS"
								}), icon: s.a.createElement(F, null)
							};
						case M.b.CopyLink:
							return {
								text: h.fbt._("Copy link", null, {
									hk: "2OPNVI"
								}), icon: s.a.createElement(X, null)
							};
						case M.b.Leave:
							return {
								text: h.fbt._("Leave group", null, {
									hk: "zStpq"
								}), icon: s.a.createElement(Q, null)
							};
						case M.b.LeaveRoom:
							return {
								text: h.fbt._("Leave room", null, {
									hk: "42PJCV"
								}), icon: s.a.createElement(Q, null)
							};
						case M.b.MuteBadging:
							return {
								text: h.fbt._("Disable notification badging", null, {
									hk: "4BzTkp"
								}), icon: s.a.createElement(W, null)
							};
						case M.b.MuteNotifs:
							return {
								text: h.fbt._("Mute Notifications", null, {
									hk: "3EpiuE"
								}), icon: s.a.createElement(W, null)
							};
						case M.b.Profile:
							return {
								text: h.fbt._("View Profile", null, {
									hk: "3qjq7q"
								}), icon: s.a.createElement($, null)
							};
						case M.b.RenameGroup:
							return {
								text: h.fbt._("Rename group", null, {
									hk: "hTeQ"
								}), icon: s.a.createElement(te, null)
							};
						case M.b.UnmuteBadging:
							return {
								text: h.fbt._("Enable notification badging", null, {
									hk: "87Nfa"
								}), icon: s.a.createElement(K, null)
							};
						case M.b.UnmuteNotifs:
							return {
								text: h.fbt._("Unmute notifications", null, {
									hk: "2TcEwL"
								}), icon: s.a.createElement(K, null)
							};
						case M.b.ViewMembers:
							return {
								text: h.fbt._("View members", null, {
									hk: "PC84"
								}), icon: s.a.createElement($, null)
							};
						case M.b.Hide:
							return {
								text: h.fbt._("Hide chat", null, {
									hk: "4e3NQf"
								}), icon: s.a.createElement(q, null)
							};
						case M.b.HideGroup:
							return {
								text: h.fbt._("Hide group", null, {
									hk: "PS4Ak"
								}), icon: s.a.createElement(q, null)
							};
						default:
							return {
								text: "Unknown item", icon: s.a.createElement("span", null)
							}
					}
				},
				be = Object(_.a)({
					currentUserId: oe.a,
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => e.tooltipId === t || e.tooltipId === de,
					channel: ce.g,
					isModerator: ce.a,
					isChannelLocked: ce.H,
					isChannelBadgingMuted: ce.E,
					isChannelNotifsMuted: ce.I,
					isChannelHidden: ce.F,
					isFullSize: re.e
				});
			var ge = Object(r.b)(be, (e, t) => ({
					onInviteToChannel: () => e(Object(C.c)()),
					onLeaveChannel: () => e(Object(C.d)()),
					onViewMembers: () => e(Object(C.k)()),
					onBlockUser: t => e(Object(O.a)(t)),
					onViewProfile: t => e(Object(C.l)(t)),
					onOpenDropdown: t => e(Object(C.i)(t)),
					onMuteBadging: () => e(Object(C.e)(t)),
					onUnmuteBadging: () => e(Object(C.g)(t)),
					onMuteNotifs: () => e(Object(C.f)(t)),
					onUnmuteNotifs: () => e(Object(C.h)(t)),
					onHideChannel: () => e(Object(C.b)(t)),
					closeTooltip: () => e(Object(E.d)())
				}))(e => {
					const {
						channel: t,
						currentUserId: n,
						isChannelBadgingMuted: a,
						isChannelNotifsMuted: r,
						isChannelHidden: o
					} = e, i = a => {
						const {
							onInviteToChannel: s,
							onBlockUser: r,
							onLeaveChannel: c,
							toggleChannelNameInput: o,
							onViewMembers: i,
							onMuteBadging: d,
							onUnmuteBadging: u,
							onMuteNotifs: h,
							onUnmuteNotifs: m,
							onHideChannel: b
						} = e;
						switch (a) {
							case M.b.AddToGroup:
								return s();
							case M.b.Block: {
								const e = (() => t && t.members.find(e => e.id !== n))();
								return e && r(e.id)
							}
							case M.b.Leave:
							case M.b.LeaveRoom:
								return c();
							case M.b.Profile:
								return l();
							case M.b.RenameGroup:
								return o();
							case M.b.ViewMembers:
								return i();
							case M.b.CopyLink: {
								const {
									channelId: t
								} = e;
								if (t) {
									const e = Object(L.getShortChannelUrl)(t);
									Object(g.a)(e)
								}
								return
							}
							case M.b.MuteBadging:
								return d();
							case M.b.UnmuteBadging:
								return u();
							case M.b.MuteNotifs:
								return h();
							case M.b.UnmuteNotifs:
								return m();
							case M.b.Hide:
							case M.b.HideGroup:
								return b();
							default:
								return p.a
						}
					}, l = () => {
						const {
							channel: t,
							currentUserId: n,
							onViewProfile: a,
							inviterName: s
						} = e;
						if (t && t.channelState === T.b.JOINED) {
							const e = t.members.find(e => e.id !== n);
							if (e && e.name) return a(e.name)
						}
						return s && a(s)
					}, {
						dropdownId: d = de,
						dropdownIsOpen: u,
						onOpenDropdown: m,
						closeTooltip: b,
						isFullSize: f
					} = e, C = (() => {
						if (t) switch (t.type) {
							case se.a.Direct:
								return M.c.directChannel.filter(e => M.d.muteBadging(e, a)).filter(e => M.d.unmuteBadging(e, a)).filter(e => M.d.muteNotifs(e, r)).filter(e => M.d.unmuteNotifs(e, r)).filter(e => M.d.hideChannel(e, o));
							case se.a.Group:
								return M.c.groupChannel.filter(e => M.d.muteBadging(e, a)).filter(e => M.d.unmuteBadging(e, a)).filter(e => M.d.muteNotifs(e, r)).filter(e => M.d.unmuteNotifs(e, r)).filter(e => M.d.hideChannel(e, o))
						}
					})();
					return s.a.createElement(s.a.Fragment, null, !1, s.a.createElement(me, {
						className: Object(c.a)(le.a.DropdownTrigger, {
							[le.a.isFullSize]: f
						}),
						id: d,
						onMouseDown: e => {
							e.stopPropagation(), m(d)
						},
						title: h.fbt._("Settings", null, {
							hk: "4lO98u"
						})
					}, s.a.createElement(ae, null)), s.a.createElement(ue, {
						isOpen: u,
						tooltipId: d,
						container: document.getElementById(A.a),
						excludeContainerPosition: !0,
						closeOnClickOutside: !0
					}, C && C.map((e, t) => s.a.createElement(he, {
						key: t,
						displayText: pe(e).text,
						onClick: () => {
							i(e), b()
						}
					}, pe(e).icon))))
				}),
				fe = n("./src/chat/components/CloseIcon/index.tsx"),
				Ce = n("./src/chat/constants/container.ts");

			function Ee() {
				return (Ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = e => s.a.createElement(j.a, Ee({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M10,15.625a.623.623,0,0,1-.442-.183l-9-9,.884-.884L10,14.116l8.558-8.558.884.884-9,9A.623.623,0,0,1,10,15.625Z"
			}));

			function ve() {
				return (ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			Oe.displayName = "NavMinimize";
			const _e = e => s.a.createElement(j.a, ve({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M15.838,16.5a1.377,1.377,0,0,1-1.375,1.375h-11A1.377,1.377,0,0,1,2.088,16.5V5.5A1.377,1.377,0,0,1,3.463,4.125H7.11V2.875H3.463A2.629,2.629,0,0,0,.838,5.5v11a2.629,2.629,0,0,0,2.625,2.625h11A2.629,2.629,0,0,0,17.088,16.5V12.9h-1.25Z"
			}), s.a.createElement("path", {
				d: "M18.5.875h-5v1.25h3.491L8.558,10.558l.884.884,8.433-8.433V6.5h1.25v-5A.625.625,0,0,0,18.5.875Z"
			}));
			_e.displayName = "NavPopout";
			var je = n("./src/chat/components/OverlayNavButtonGroup/index.m.less"),
				ye = n.n(je);
			var Ie = Object(r.b)(() => Object(_.a)({
					containerSize: e => e.container.size,
					inviterName: ce.D,
					isReady: re.g
				}), e => ({
					close: () => e(Object(i.sizeChanged)(Ce.a.HIDDEN)),
					minimize: () => {
						e(Object(i.sizeChanged)(Ce.a.MINIMIZED)), e(Object(d.p)())
					},
					popout: () => e(Object(i.popoutOpened)())
				}))(({
					channelId: e,
					containerSize: t,
					dropdownId: n,
					showMenu: a,
					inviterName: r,
					isReady: c,
					minimize: o,
					popout: i,
					toggleChannelNameInput: l
				}) => {
					const d = c && t === Ce.a.EMBED;
					return s.a.createElement("div", {
						className: ye.a.Wrapper
					}, a && e && s.a.createElement(ge, {
						channelId: e,
						dropdownId: n,
						inviterName: r,
						toggleChannelNameInput: l
					}), d && s.a.createElement(s.a.Fragment, null, s.a.createElement(U.c, {
						className: ye.a.IconButton,
						onClick: i,
						title: h.fbt._("Open chat in new window", null, {
							hk: "3S8f7W"
						})
					}, s.a.createElement(_e, null)), s.a.createElement(U.c, {
						className: ye.a.IconButton,
						onClick: o,
						title: h.fbt._("Minimize chat", null, {
							hk: "1gym9X"
						})
					}, s.a.createElement(Oe, null)), s.a.createElement(fe.a, {
						className: ye.a.CloseButton
					})))
				}),
				xe = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				Se = n("./src/chat/controls/Counter/index.tsx"),
				we = n("./src/chat/components/RenameGroupInput/index.m.less"),
				Ne = n.n(we);
			const ke = f.a.wrapped(e => s.a.createElement("span", {
					className: Object(c.a)({
						[Ne.a.visible]: e.isVisible
					}, e.className)
				}, e.children), "InputWrapper", Ne.a),
				Te = f.a.div("InputContent", Ne.a),
				Me = f.a.span("InputControls", Ne.a),
				Ae = f.a.wrapped(U.a, "CancelButton", Ne.a),
				Ue = f.a.wrapped(U.a, "SaveButton", Ne.a);
			class De extends a.Component {
				constructor() {
					super(...arguments), this.displayName = "RenameGroupInput", this.state = {
						groupName: this.props.name || ""
					}, this.getAvailableCharacters = () => T.e - this.state.groupName.length, this.handleChannelNameInput = e => this.setState({
						groupName: e
					}), this.submitGroupName = () => {
						this.props.onUpdateChannelName(this.state.groupName.trim()), this.props.hideChannelNameInput()
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.channelId !== e.channelId && (this.setState(() => ({
						groupName: e.name || ""
					})), this.props.hideChannelNameInput()), this.props.name === e.name || this.props.isVisible || this.setState(() => ({
						groupName: e.name || ""
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
						submitGroupName: r
					} = this, c = this.getAvailableCharacters();
					return s.a.createElement(ke, {
						isVisible: t
					}, s.a.createElement(Te, null, s.a.createElement(xe.a, {
						handleChannelNameInput: a,
						placeholder: h.fbt._("Rename group", null, {
							hk: "1mjXbx"
						}),
						withBackground: !0,
						value: n
					}, s.a.createElement(Se.a, {
						count: c
					})), s.a.createElement(Me, null, s.a.createElement(Ae, {
						secondaryNoBorder: !0,
						onClick: e
					}, h.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(Ue, {
						primaryNoBorder: !0,
						disabled: c < 0 || c >= T.e,
						onClick: r
					}, h.fbt._("Save", null, {
						hk: "1qAtYt"
					})))))
				}
			}
			var Re = Object(r.b)(void 0, e => ({
					onUpdateChannelName: t => e(Object(C.j)(t))
				}))(De),
				Le = n("./src/chat/components/ToastNotification/index.tsx"),
				Pe = n("./src/chat/helpers/dom.ts");

			function Be() {
				return (Be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var He = e => s.a.createElement(j.a, Be({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("path", {
					d: "M19,9.375H2.509l7.933-7.933L9.558.558l-9,9a.625.625,0,0,0,0,.884l9,9,.884-.884L2.509,10.625H19Z"
				})),
				Fe = n("./src/chat/components/OverlayNav/index.m.less"),
				Ge = n.n(Fe);
			const We = ({
					userName: e
				}) => {
					const t = Object(L.viewProfileUrl)(e);
					return s.a.createElement("a", {
						onClick: e => e.stopPropagation(),
						target: o.c.BLANK,
						rel: o.b,
						className: Ge.a.UserProfileTitle,
						href: t
					}, e)
				},
				Ve = Object(_.a)({
					isEmbedded: re.d,
					iconMembers: (e, t) => Object(ce.o)(e, t.channelId),
					isFullSize: re.e
				}),
				Ke = Object(r.b)(Ve, e => ({
					minimize: () => {
						e(Object(i.sizeChanged)(Ce.a.MINIMIZED)), e(Object(d.p)())
					},
					toggleSidebar: () => e(Object(l.f)(!0))
				}));
			class ze extends a.Component {
				constructor(e) {
					super(e), this.hideChannelNameInput = () => this.setState({
						isRenameGroupInputVisible: !1
					}), this.toggleChannelNameInput = () => this.setState(e => ({
						isRenameGroupInputVisible: !e.isRenameGroupInputVisible
					})), this.state = {
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
					var e;
					const {
						props: {
							channelId: t,
							dropdownId: n,
							isEmbedded: a,
							minimize: r,
							showMenu: o,
							subTitle: i,
							title: l,
							channelType: d,
							iconMembers: h,
							toggleSidebar: m,
							showMembers: p,
							isFullSize: b
						},
						state: {
							isRenameGroupInputVisible: g
						},
						hideChannelNameInput: f,
						toggleChannelNameInput: C
					} = this;
					return s.a.createElement("nav", {
						className: Object(c.a)(Ge.a.Nav, {
							[Ge.a.isFullSize]: b
						})
					}, s.a.createElement(U.c, {
						onClick: m,
						className: Object(c.a)(Ge.a.IconButton, {
							[Ge.a.isFullSize]: b
						})
					}, s.a.createElement(He, {
						className: Ge.a.ArrowLeft
					})), s.a.createElement("span", {
						onClick: a ? Object(Pe.b)(r) : void 0,
						className: Object(c.a)(Ge.a.TitleWrapper, {
							[Ge.a.embed]: a
						})
					}, p && h && h.firstUser && s.a.createElement(u.a, {
						className: Object(c.a)(Ge.a.ChatIcon, {
							[Ge.a.isFullSize]: b
						}),
						userId: h.firstUser.id,
						secondUserId: null === (e = h.secondUser) || void 0 === e ? void 0 : e.id
					}), d === se.a.Direct ? s.a.createElement(We, {
						userName: l
					}) : s.a.createElement("span", {
						className: Ge.a.Title
					}, l), s.a.createElement("span", {
						className: Ge.a.SubTitle
					}, i)), s.a.createElement(Ie, {
						channelId: t,
						toggleChannelNameInput: C,
						showMenu: !!o,
						dropdownId: n
					}), t && l && s.a.createElement(Re, {
						channelId: t,
						name: l,
						isVisible: g,
						hideChannelNameInput: f
					}), s.a.createElement(Le.a, null))
				}
			}
			t.a = Ke(ze)
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
		"./src/chat/components/OverlayReport/index.m.less": function(e, t, n) {
			e.exports = {
				Checkbox: "_3_ggjAPRo5VjUmv6nJLlil",
				checkbox: "_3_ggjAPRo5VjUmv6nJLlil",
				ListItem: "_2qQcEGZtboU7wa6nmfyOoD",
				listItem: "_2qQcEGZtboU7wa6nmfyOoD"
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
				return v
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-router/esm/react-router.js"),
				c = (n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./src/chat/components/FrameContent/index.tsx")),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/components/OverlayDirectsEmptySkeletonState/index.m.less"),
				u = n.n(d),
				h = n("./src/chat/components/OverlayNav/index.tsx"),
				m = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				p = n("./src/chat/controls/Overlay/index.tsx");
			const b = l.a.div("OverlayContent", u.a);
			var g = () => s.a.createElement(p.a, null, s.a.createElement(h.a, {
					title: i.fbt._("Fetching messages", null, {
						hk: "2MERJq"
					})
				}), s.a.createElement(b, null, s.a.createElement(m.e, null))),
				f = n("./src/chat/components/Sidebar/index.tsx"),
				C = n("./src/chat/selectors/app.ts");
			var E = ({
					children: e
				}) => {
					const t = Object(o.e)(C.f),
						n = Object(o.e)(C.c);
					return t ? null : n ? e : s.a.createElement(s.a.Fragment, null, s.a.createElement(f.a, null, s.a.createElement(m.d, null)), s.a.createElement(g, null))
				},
				O = n("./src/chat/components/ThemeProvider/index.tsx");

			function v(e, t) {
				return s.a.createElement(O.a, {
					className: c.a
				}, s.a.createElement(e, null, s.a.createElement(r.d, {
					component: e => s.a.createElement(E, null, s.a.createElement(r.f, {
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
		"./src/chat/components/Scroller/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var a = n("./node_modules/lodash/debounce.js"),
				s = n.n(a),
				r = n("./node_modules/lodash/isEqual.js"),
				c = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/components/Scroller/index.m.less"),
				u = n.n(d);
			class h extends i.a.Component {
				constructor(e) {
					super(e), this.isUserScrolling = !1, this.list = null, this.previousScrollHeight = 0, this.scrollHandlers = [], this._isBatchLoading = !1, this.debounceScrollToBottom = s()(() => this.scrollToBottom(!0), 1, {
						leading: !1,
						trailing: !0
					}), this.debounceScrollToTop = s()(() => this.scrollToTop(!0), 1, {
						leading: !1,
						trailing: !0
					}), this.addScrollHandlers = this.addScrollHandlers.bind(this), this.preventParentScroll = this.preventParentScroll.bind(this), this.paginateContent = this.paginateContent.bind(this), this.scrollHandlers = [this.preventParentScroll, this.paginateContent]
				}
				get isBatchLoading() {
					return this.props.isLoadMoreRowsComplete ? this.props.isLoadMoreRowsComplete() : this._isBatchLoading
				}
				shouldComponentUpdate(e, t) {
					return !c()(this.props, e) || !c()(this.state, t)
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
				setFocus() {
					this.list && this.list.focus()
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return i.a.createElement(m, {
						className: t,
						innerRef: e => this.list = e,
						tabIndex: 0
					}, e)
				}
			}
			const m = l.a.div("Scroller", u.a);
			m.displayName = "Scroller", t.b = h
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
				Button: "eBsUucD7aSgQuofWx8Jq",
				button: "eBsUucD7aSgQuofWx8Jq",
				ChatNew: "_1epWdlh2iK8Z3OcxO5pWF9",
				chatNew: "_1epWdlh2iK8Z3OcxO5pWF9"
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
		"./src/chat/components/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3Vfwehx1_6SL3j8elUC4s1",
				wrapper: "_3Vfwehx1_6SL3j8elUC4s1",
				embed: "ILOjaUJksxM-7OFet-vBP",
				isFullSize: "_1bdrOnTDt7vqIPHo6hy4UR",
				hidden: "_2LCL99h1LFi6gbdVp7LCYi",
				Tabs: "_1WMBA90B9UJsaA8abIOXkg",
				tabs: "_1WMBA90B9UJsaA8abIOXkg",
				TabList: "_2xkfmbE0b2UUTNI7Pe-SR4",
				tabList: "_2xkfmbE0b2UUTNI7Pe-SR4",
				Tab: "_2wJ9IK0tQpgSzeHzXJyT3D",
				tab: "_2wJ9IK0tQpgSzeHzXJyT3D",
				active: "_3iLNO7R8VMvJ4Dn89SVFVg",
				FirstTimeUserExpPromo: "_29KVZN_UShyL2c0U8mio78",
				firstTimeUserExpPromo: "_29KVZN_UShyL2c0U8mio78",
				CreateChannelWrapper: "_2HEQEW4wQKZLlnrIRyYHWN",
				createChannelWrapper: "_2HEQEW4wQKZLlnrIRyYHWN"
			}
		},
		"./src/chat/components/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return ke
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/chat/actions/tracking.ts"),
				u = n("./src/chat/components/Sidebar/CreateChannel/index.m.less"),
				h = n.n(u),
				m = n("./src/chat/helpers/urls/index.ts"),
				p = n("./src/chat/icons/svgs/ChatNew/index.tsx");
			const b = i.a.wrapped(p.a, "ChatNew", h.a),
				g = i.a.span("Button", h.a);
			var f = Object(c.b)(null, e => ({
					createChannel: () => {
						const t = Object(m.getRedirectURL)(Object(m.channelUrl)("create"));
						e(Object(l.b)(t)), e(Object(d.h)())
					}
				}))(e => r.a.createElement(g, {
					onClick: e.createChannel,
					title: a.fbt._("Start a new chat", null, {
						hk: "3C4ek3"
					}),
					tabIndex: 0
				}, r.a.createElement(b, null))),
				C = n("./src/chat/actions/channel.ts"),
				E = n("./node_modules/lodash/values.js"),
				O = n.n(E),
				v = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = n("./src/chat/components/ChatIcon/index.tsx"),
				j = n("./src/chat/constants/messages.ts"),
				y = n("./src/chat/helpers/linkParser/index.ts"),
				I = n("./src/chat/models/Message/index.ts"),
				x = n("./src/chat/components/Message/Preview.m.less"),
				S = n.n(x);
			const w = e => {
					const {
						message: t,
						isInvited: n
					} = e, s = (({
						currentUserId: e,
						isGroup: t,
						message: n
					}) => t && n && n.sender ? e === n.sender.userId ? a.fbt._("You:", null, {
						hk: "wP43r"
					}) : `${n.sender.nickname}:` : "")(e);
					if ((null == t ? void 0 : t.messageType) === j.d.SYSTEM && (null == t ? void 0 : t.customType) === I.a.AWARDING) return [s, " ", a.fbt._("Sent a note with an award", null, {
						hk: "4FSnF0"
					})];
					if (n) return [a.fbt._("Wants to message you", null, {
						hk: "3CbciS"
					})];
					if (!t) return [];
					switch (t.messageData.type) {
						case j.c.TEXT: {
							const {
								value: e
							} = t.messageData;
							return [s, " ", Object(y.b)(e) ? a.fbt._("Shared a link", null, {
								hk: "4bNVW7"
							}) : e]
						}
						case j.c.POST:
							return [s, " ", a.fbt._("Shared a post", null, {
								hk: "1hd8l1"
							}), " ", t.messageData.subreddit];
						case j.c.COMMENT:
							return [s, " ", a.fbt._("Shared a comment", null, {
								hk: "1cCjoi"
							}), " ", t.messageData.subreddit];
						case j.c.EMBED:
							return [s, " ", a.fbt._("Shared a link", null, {
								hk: "4bNVW7"
							}), " ", t.messageData.value];
						case j.c.SUBREDDIT:
							return [s, " ", a.fbt._("Shared a community", null, {
								hk: "t78ZE"
							}), " ", t.messageData.subreddit];
						case j.c.SNOOMOJI:
							return [s, " ", a.fbt._("Sent a Snoomoji", null, {
								hk: "4hD30K"
							})];
						case j.c.GIF:
							return [s, " ", a.fbt._("Sent a Gif", null, {
								hk: "2DVhUf"
							})];
						default:
							return []
					}
				},
				N = i.a.wrapped(e => r.a.createElement("sub", {
					className: Object(o.a)(e.className, {
						[S.a.active]: e.isActive,
						[S.a.unread]: e.isInvited || e.isUnread
					})
				}, w(e)), "MessagePreview", S.a);
			var k = n("./src/chat/constants/channels.ts"),
				T = n("./src/chat/controls/Counter/index.tsx"),
				M = n("./src/chat/helpers/chatSelector.ts"),
				A = n("./src/chat/controls/Svg/index.tsx");
			var U = e => r.a.createElement(A.a, {
					className: e.className,
					disable: !0,
					viewBox: "0 0 9 12"
				}, r.a.createElement("g", {
					transform: "translate(-321.000000, -286.000000)"
				}, r.a.createElement("path", {
					d: "M328.379326,295.820899 L329.259195,297.344876 L329.259195,297.344876 C329.33686,297.479395 329.29077,297.651405 329.15625,297.72907 L329.15625,297.72907 C329.02173,297.806735 328.84972,297.760645 328.772055,297.626126 L322.303305,286.421922 L322.303305,286.421922 C322.22564,286.287402 322.27173,286.115392 322.40625,286.037727 L322.40625,286.037727 L322.40625,286.037727 C322.54077,285.960062 322.71278,286.006152 322.790445,286.140672 L323.811767,287.909655 C324.114951,287.754406 324.444225,287.640531 324.791552,287.575791 C324.78955,287.555022 324.784974,287.534806 324.784974,287.513206 C324.784974,287.131053 325.105006,286.820899 325.49997,286.820899 C325.894933,286.820899 326.214965,287.131053 326.214965,287.513206 C326.214965,287.534806 326.210389,287.555022 326.208387,287.575791 C327.841151,287.88013 329.074947,289.270283 329.074947,290.94013 L329.074947,293.333299 C329.074947,294.039453 329.364664,294.716806 329.880318,295.216099 L329.894618,295.229945 C330.119699,295.447883 329.960398,295.820899 329.641796,295.820899 L328.379326,295.820899 Z M326.996393,295.820899 L321.358143,295.820899 C321.039827,295.820899 320.88024,295.447883 321.105321,295.229945 L321.119621,295.216099 C321.635276,294.716806 321.924992,294.039453 321.924992,293.333299 L321.924992,290.94013 C321.924992,290.051737 322.274213,289.242509 322.846942,288.633839 L326.996393,295.820899 Z M325.78125,297.508399 C325.151952,297.508399 324.611984,297.045274 324.375,296.383399 L327.1875,296.383399 C326.950516,297.045274 326.410548,297.508399 325.78125,297.508399 Z"
				}))),
				D = n("./src/chat/selectors/channels.ts"),
				R = n("./src/chat/selectors/contacts.ts"),
				L = n("./src/chat/components/ChatListItem/index.m.less"),
				P = n.n(L);
			const B = i.a.wrapped(_.a, "ChatIcon", P.a),
				H = i.a.div("ItemTitle", P.a),
				F = i.a.div("ItemControls", P.a),
				G = i.a.span("ChannelName", P.a),
				W = i.a.div("Description", P.a),
				V = i.a.wrapped(e => r.a.createElement("h4", {
					className: Object(o.a)(e.className, {
						[P.a.active]: e.active,
						[P.a.unread]: e.unread
					})
				}, e.children), "ItemTitleName", P.a),
				K = Object(M.a)({
					inviterContact: (e, t) => {
						const n = e.channels.models[t.channelId];
						return Object(R.d)(e, n)
					},
					iconMembers: (e, t) => Object(D.o)(e, t.channelId),
					channelName: (e, t) => Object(D.i)(e, t.channelId)
				});
			var z = Object(c.b)(K)(i.a.wrapped(e => {
					var t;
					const {
						className: n,
						channelId: a,
						currentUserId: s,
						isGroup: c,
						isSelected: i,
						channelState: l,
						message: d,
						muted: u,
						unread: h,
						mentionCount: p,
						iconMembers: b,
						channelName: g
					} = e, f = l === k.b.INVITED, C = f ? Object(m.channelAction)(a, k.a.VIEW_INVITE) : Object(m.channelUrl)(a), E = Object(m.getRedirectURL)(C);
					return r.a.createElement(v.a, {
						to: E,
						className: Object(o.a)(n, {
							[P.a.selected]: i,
							[P.a.unread]: h
						})
					}, u && r.a.createElement(F, null, r.a.createElement(U, null)), b && b.firstUser && r.a.createElement(B, {
						userId: b.firstUser.id,
						secondUserId: null === (t = b.secondUser) || void 0 === t ? void 0 : t.id
					}), r.a.createElement(H, null, r.a.createElement(V, {
						unread: h || f,
						active: i
					}, r.a.createElement(G, null, g)), r.a.createElement(W, null, r.a.createElement(N, {
						currentUserId: s,
						isGroup: c,
						isInvited: f,
						isUnread: h,
						isActive: i,
						message: d
					}), !!p && r.a.createElement(T.b, {
						count: p
					}))))
				}, "ChatListItem", P.a)),
				q = n("./src/chat/components/Sidebar/SidebarDivider/index.m.less"),
				Z = n.n(q);
			const Q = i.a.div("Divider", Z.a),
				J = e => r.a.createElement(Q, null, e.children);
			var X = n("./src/chat/controls/InviteExpander/index.m.less"),
				Y = n.n(X),
				$ = n("./src/chat/controls/TextButton.tsx");
			const ee = i.a.div("ButtonContainer", Y.a),
				te = i.a.div("LoadingIndicator", Y.a);
			class ne extends r.a.Component {
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
						hasMoreInvitedChannels: s
					} = this.props;
					return t ? r.a.createElement(te, {
						role: "progressbar"
					}, a.fbt._("Loading channels...", null, {
						hk: "4gUIDq"
					})) : r.a.createElement(ee, {
						className: e
					}, r.a.createElement($.a, {
						onClick: this.onExpand,
						hidden: n && !s
					}, a.fbt._("Show more", null, {
						hk: "3aeUi6"
					})), r.a.createElement($.a, {
						onClick: this.onCollapse,
						hidden: !n
					}, a.fbt._("Collapse", null, {
						hk: "aLyRg"
					})))
				}
			}
			var ae = Object(c.b)(null, e => ({
					onTrackExpandToggle: t => e(t ? Object(d.k)() : Object(d.f)()),
					expandInviteList: () => e(Object(C.D)()),
					collapseInviteList: () => e(Object(C.z)()),
					fetchInvitedChannels: () => e(Object(C.F)())
				}))(ne),
				se = n("./src/chat/models/Channel/index.ts"),
				re = n("./src/chat/selectors/user.ts");
			const ce = Object(M.a)({
				currentUserId: re.a,
				invitedChannels: D.C,
				selectedChannelId: e => Object(D.w)(e, "channelId"),
				fetchingInvitedChannels: D.c,
				inviteListExpanded: D.B,
				hasMoreInvitedChannels: D.z
			});
			var oe = Object(c.b)(ce)(e => {
					const {
						currentUserId: t,
						fetchingInvitedChannels: n,
						hasMoreInvitedChannels: s,
						invitedChannels: c,
						inviteListExpanded: o,
						selectedChannelId: i
					} = e;
					let l = c.slice(0, 2);
					return o && (l = c), c && c.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(J, null, a.fbt._("Requests", null, {
						hk: "eDJtL"
					})), O()(l).map((e, n) => {
						const {
							channelId: a,
							lastMessage: s,
							channelState: c,
							unreadMessageCount: o,
							unreadMentionCount: l
						} = e;
						return r.a.createElement(z, {
							key: a,
							channelId: a,
							channelState: c,
							isSelected: a === i,
							isGroup: e.type === se.a.Group,
							message: s,
							unread: !!o,
							mentionCount: l,
							currentUserId: t
						})
					}), c.length > 2 ? r.a.createElement(ae, {
						fetchingInvitedChannels: n,
						hasMoreInvitedChannels: s,
						inviteListExpanded: o
					}) : null) : null
				}),
				ie = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				le = n("./src/chat/components/BasicJoined/index.m.less"),
				de = n.n(le);
			const ue = i.a.p("Text", de.a),
				he = Object(M.a)({
					currentUserId: re.a,
					fetchingJoinedChannels: D.d,
					hasMoreJoinedChannels: D.A,
					joinedChannels: D.M,
					selectedChannelId: e => Object(D.w)(e, "channelId"),
					hasInvitedChannels: D.y
				});
			var me = Object(c.b)(he, e => ({
					fetchJoinedChannels: () => e(Object(C.G)())
				}))(e => {
					const {
						className: t,
						currentUserId: n,
						fetchingJoinedChannels: s,
						joinedChannels: c,
						selectedChannelId: o,
						hasInvitedChannels: i
					} = e;
					return r.a.createElement("div", {
						className: t
					}, i && r.a.createElement(J, null, a.fbt._("Chats", null, {
						hk: "Bzl0R"
					})), (!c || !c.length) && r.a.createElement(ue, null, a.fbt._("All the direct chats that you're in will show up here", null, {
						hk: "4A1UXC"
					})), c.map(e => {
						const {
							channelId: t,
							lastMessage: a,
							channelState: s,
							unreadMessageCount: c,
							unreadMentionCount: i
						} = e;
						return r.a.createElement(z, {
							key: t,
							channelId: t,
							channelState: s,
							isSelected: t === o,
							isGroup: e.type === se.a.Group,
							message: a,
							unread: !!c,
							mentionCount: i,
							currentUserId: n
						})
					}), s && r.a.createElement(ie.d, null))
				}),
				pe = n("./src/chat/components/Scroller/index.tsx"),
				be = n("./src/chat/components/Sidebar/DirectsPanel/index.m.less"),
				ge = n.n(be);
			const fe = i.a.wrapped(pe.b, "Scroller", ge.a),
				Ce = Object(M.a)({
					fetchingJoinedChannels: D.d,
					hasMoreJoinedChannels: D.A
				});
			var Ee = Object(c.b)(Ce, e => ({
					fetchJoinedChannels: () => e(Object(C.G)())
				}))(e => {
					const {
						fetchingJoinedChannels: t,
						fetchJoinedChannels: n,
						hasMoreJoinedChannels: a
					} = e;
					return r.a.createElement(fe, {
						loadMoreRows: () => {
							!t && a && n()
						},
						threshold: 0
					}, r.a.createElement(oe, null), r.a.createElement(me, null))
				}),
				Oe = n("./src/chat/components/Sidebar/index.m.less"),
				ve = n.n(Oe);
			class _e extends s.Component {
				constructor(e) {
					super(e)
				}
				render() {
					const {
						className: e,
						children: t
					} = this.props;
					return r.a.createElement("div", {
						className: e
					}, t)
				}
			}
			var je = n("./src/chat/selectors/app.ts"),
				ye = n("./src/chat/selectors/sidebar.ts");
			const Ie = i.a.div("Wrapper", ve.a),
				xe = i.a.wrapped(_e, "Tabs", ve.a),
				Se = i.a.wrapped(({
					children: e,
					className: t
				}) => r.a.createElement("div", {
					className: t
				}, e), "TabList", ve.a),
				we = i.a.wrapped(({
					active: e,
					children: t,
					className: n
				}) => r.a.createElement("div", {
					className: Object(o.a)(n, {
						[ve.a.active]: e
					})
				}, t), "Tab", ve.a),
				Ne = i.a.div("CreateChannelWrapper", ve.a),
				ke = e => {
					const {
						children: t,
						className: n
					} = e, s = Object(c.e)(ye.a), i = Object(c.e)(je.d), l = Object(c.e)(je.e);
					return r.a.createElement(Ie, {
						className: Object(o.a)(n, {
							[ve.a.hidden]: !s,
							[ve.a.embed]: i,
							[ve.a.isFullSize]: null == l || l
						})
					}, r.a.createElement(xe, null, r.a.createElement(Se, null, r.a.createElement(we, null, a.fbt._("Chat", null, {
						hk: "2by6VV"
					}), r.a.createElement(T.b, null), r.a.createElement(Ne, null, r.a.createElement(f, null)))), t))
				},
				Te = r.a.memo((function(e) {
					return r.a.createElement(ke, e, r.a.createElement(Ee, null))
				}));
			t.b = Te
		},
		"./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.m.less": function(e, t, n) {
			e.exports = {
				placeholderWrapper: "hqcDdVTJOpp-hF4RbvBSW",
				placeholderBody: "_3dFum9eW5nOaVI6VJ0M5Zs",
				placeholderAvatar: "_37RHvnrtqVT9M5__WmURXe",
				placeholderChannelContent: "_19Hsl7P85oEzmiSo1VutwH",
				placeholderMessageContent: "_1v9KmS8wDdLOHsiFvWdtIF",
				animation: "_1lS5iWxhcJqk-ShxyxC6tw",
				gifPlaceholder: "iPOqyM805lfu7apy-uhR",
				GifSkeletonPlaceholderWrapper: "_2yd9FoSzqOcwHYxMV79mIz",
				gifSkeletonPlaceholderWrapper: "_2yd9FoSzqOcwHYxMV79mIz",
				w30: "_1jE3fdsbD0NBi686SE4nrQ",
				w40: "_2cpkeolN8LXSKO8g-J00Ot",
				w50: "_10H7c7bQkyoMU5_QeX62Wh",
				w60: "_3MaVPjay9yqVTwDBBb1SSE",
				w70: "_2sa1V-RtmOGhJdRTXoQpqk",
				w80: "_1EMlf-IQU6zT-2ldWsZkT7",
				w90: "gIHwaKNfxwKK4MrSmYXEq"
			}
		},
		"./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			}));
			var a, s, r, c = n("./node_modules/react/index.js"),
				o = n.n(c),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.m.less"),
				d = n.n(l);
			! function(e) {
				e.XXS = "w30", e.XS = "w40", e.S = "w50", e.M = "w60", e.L = "w70", e.XL = "w80", e.XXL = "w90"
			}(a || (a = {})),
			function(e) {
				e[e.XXS = 70] = "XXS", e[e.XS = 85] = "XS", e[e.S = 110] = "S", e[e.M = 165] = "M", e[e.L = 200] = "L"
			}(s || (s = {})),
			function(e) {
				e[e.FIRST = 0] = "FIRST", e[e.SECOND = 1] = "SECOND"
			}(r || (r = {}));
			const u = ({
					width: e
				}) => o.a.createElement("li", {
					className: Object(i.a)(d.a.placeholderWrapper, d.a[e])
				}, o.a.createElement("span", {
					className: Object(i.a)(d.a.placeholderMessageContent)
				})),
				h = ({
					width: e
				}) => o.a.createElement("li", {
					className: Object(i.a)(d.a.placeholderWrapper, d.a[e])
				}, o.a.createElement("span", {
					className: Object(i.a)(d.a.placeholderAvatar)
				}), o.a.createElement("span", {
					className: Object(i.a)(d.a.placeholderChannelContent)
				})),
				m = () => o.a.createElement("ol", null, o.a.createElement(u, {
					width: a.S
				}), o.a.createElement(u, {
					width: a.XL
				}), o.a.createElement(u, {
					width: a.XXS
				}), o.a.createElement(u, {
					width: a.S
				}), o.a.createElement(u, {
					width: a.L
				}), o.a.createElement(u, {
					width: a.XXS
				})),
				p = () => o.a.createElement("ol", null, o.a.createElement(h, {
					width: a.L
				}), o.a.createElement(h, {
					width: a.XL
				}), o.a.createElement(h, {
					width: a.S
				}), o.a.createElement(h, {
					width: a.M
				}), o.a.createElement(h, {
					width: a.L
				}), o.a.createElement(h, {
					width: a.XL
				})),
				b = ({
					height: e
				}) => o.a.createElement("div", {
					className: d.a.gifPlaceholder,
					style: {
						height: `${e}px`
					}
				}),
				g = e => o.a.createElement("div", {
					className: d.a.GifSkeletonPlaceholderWrapper
				}, e === r.FIRST ? o.a.createElement(o.a.Fragment, null, o.a.createElement(b, {
					height: s.S
				}), o.a.createElement(b, {
					height: s.XS
				}), o.a.createElement(b, {
					height: s.M
				})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(b, {
					height: s.M
				}), o.a.createElement(b, {
					height: s.XS
				}), o.a.createElement(b, {
					height: s.S
				})))
		},
		"./src/chat/components/Snoomoji/index.m.less": function(e, t, n) {
			e.exports = {
				SnooImg: "_1b2msiYMaWuRyunCT4E35G",
				snooImg: "_1b2msiYMaWuRyunCT4E35G"
			}
		},
		"./src/chat/components/Snoomoji/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/icons/Snoo/index.tsx"),
				o = n("./src/chat/components/Snoomoji/index.m.less"),
				i = n.n(o);
			const l = r.a.img("SnooImg", i.a);
			t.a = e => {
				const {
					className: t,
					iconName: n
				} = e, a = n && c.a[n] || c.a.smile;
				return s.a.createElement(l, {
					className: t,
					src: a
				})
			}
		},
		"./src/chat/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/index.tsx");
			const i = Object(c.a)(e => e.themes.current, e => ({
				theme: e
			}));
			t.a = Object(r.b)(i)(e => {
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
				error: "_8ITP3xa7S8y9rpIFxDx1f",
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
		"./src/chat/components/ToastNotification/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/chat/actions/sendbird/sdk.ts"),
				d = n("./src/chat/constants/toast.ts"),
				u = n("./src/chat/helpers/chatSelector.ts"),
				h = n("./src/chat/icons/svgs/Refresh/index.tsx"),
				m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAB/FJREFUWAnFWFtolUcQ/nMxprUp9MFGUZJgSaqlahSRNm2KTUoetD4oKppWxBJsfbAiRQhY0SL4EA2WoJRCrVYMwVta8IJVo9LEaC410ZpYxcQ7ao0arTEn57b9vjn//Oc/yUmiEu3A/Du7Ozvz7ezO7p4TY708ioGrONsd5SA4YNf/94KAopECjtYnbb0N7HXAc3TEYgyjRfocnAVuB5eCm8DuflRfDtFpvM0ahPJVq1aZU6dOmd27dxv0EXQOmNRvJENqA/ON5uyjefPmGa/X6zPGeMGdx48fJ8hjtktOKCpxlgNJjBY3/kjwDPCElJSUtGvXrmUmJSVZgwYNigkEAvFxcXGxw4YNQ7f1Oj8ggn3hpJErgKc2cAP4GMD8lJGR8Q3khydPnkTwjCcYDHauWbOGoIrApIEOVMiq66tLlIS2J+B8V5+KX0EwJSUlZtmyZQTXvGTJEo2gjlfdAS81etz018GaGIMgK1sjRozIRf17cOHixYvfQEl64eDohCBIheBqkUJtCpRN0YBEa7OHh4p+FSK0Iyscy70Tt3r1atnk2PjpiJIC9KGP7apHmZHmGDLB6/kI8fmIRpTVAp24I6Ptr0GoAm8Bp4PTADwRpZsUmLutTzmaIw4gCJL7rmQbo6CzzoD8AZg3w4TMzMyMoUOHJg0ePNh68uSJ1dra2nHlypV/0Mds/tXmDpQkAqUt+neXbn/o6kkcoOCkF8dC921AQL/Pnj07UFpaas6ePWtu375tHj16ZDo6OoIAF3z8+LG5f/++AUBz4sQJU1xcbIYPH34d43jcJIjh6B/66i1o4U2cmJiYDcXN4Dow78tqROZHlL8tXbrUNDU1ma6uLp5pejP4IQfYYFMQJetsp46vvb3d7Nu3z6Smpv4NO19Onz49D+V34B3gkvHjx3+IUqkHSHeUNkHLbN261TQ2NhrcAmblypVcBokGDln4k+sqiFvBKLO9O7v7MIZgvQ8fPjTr168Xe7yTKysrzYYNG6QOH8WKEKUDkoJWSvPz883NmzfFGI1WVFT4586d67tx4wbvUEZDgNlAUX06UrDQlqiWl5f7161bpza7sCp+XIsE+q0NkvtUSIVlWVlZ5sGDB1w7CZP96pD9RBh+v1+iRPl5iUB1cvv37zdbtmxRU/6GhgYC9EydOjXVxhZa2cLCQp7qbTU1NVSWvXThwgUJ+71798QAwQ0UESCBkg4ePGjOnDmjpn32mfq1DVAvAOvTmTNncuM7KLZt22ZOnz4tA93gNAJuJ2q9r1KX2D1e9flG7OzsZNV39OhRBoZ5QIrX5R0+adIkKyEhgUpWTEyMhWPEQjZbrONFIiVHxMaG84l6qs++vsg9jnocp2MnTpxo+Xy8eCyLzzKQlx9QjAL8FxGRBjrFOWbxwFVSQ6xfvHjRqqqqkq7s7GwrPZ2XRv907tw5C49UC+ehlZeXJ0AUJN6JfCvSSMzVq1dZVvIDYjSF3p02bVoAhyzGmOChQ4cMD1uphI4VkcvKymRfzpkzx+Tm5orMJemuJw346D7bs2eP6HJ/paWlmfnz5zuJogkDXT8mbsaNG8ezV0lOFz1iqplF2IdenoHqVJ3U1dWJE5ZKBw4cMJi57h/HqY5liaUzGzduNIiMDKM9HmWHDx+WOvtJSEY/UNHHZzY6J0F0mXNmzJghaY8ZS4rRmM5w4cKFZvPmzWJM21jBmSkgpCPKRyfILk02XoNuwOgK3L1714wcOfJ+cnLymzbA8GZHg9y/o0aN+gKy2bFjB+3JgUyBhL0XESmCdAMNaUX/Uk+Buse42v28z+G7xgbHQlZWUfIVEd/a2vozyl8wGyr4mTBKTAbNarZrH5yoSp+l6rPENJwMtgfxgqB4kx/sVeIi4PADAbKiaaytrbUwYwFBY6QoRqWfx0dfINnnnhBtda/TPILDrr/4sQFSjCBZ5rFjx36CVg5w9mH0hQtnqfZzGbsz+5gIiJCqOSWXGIQiGMQPKEbiPRuRYIlAh4pEcOfOna9AvmJnsl/3jmM1ZFGqe/fuNUwePr9sZ241kW/dumWYfBUVFVJ369m2vZcvXya4P1yAdDWdZdU+ZrQ/Pj5+OTKuCBvXi6xKgCG5TVQJnmSZ+HKurq628KiwhgwZYuFNx19uIrOPh25zc7PcSpMnT9bhUto2CMysWLEidu3atR9DPg5m9Hp9WQtyDGb55/LlyzlrDz96RFCORoxUfX294SHPBwAP3ZaWlv6y12PfvfwpSoq6tKGu8FeUFi1alIKmu0VFRXRCkM4DVQFyuaJtAe3X0q1jy9x8Hvt5dTTsuseKuroiRTm8FyxY8BaaWwoKCpg0NOo8WOnIvZ8ULNvdzHbts/VpI3DkyBHZd1OmTNFffnrkRSLpoyYgN23axJ+T/H1itm/fbtra2giUL2E+zeAzFEUF1b1OHZsJzMebB3uO4Da6fD/V0rr0HdEZOHr0aP6aO4iflvJ7hfvL45HtyeNInPdSBvgD69KlS/K/DGzUg3McD5Fnsas5JDrp3KMn3MDQU08z633IvNBzZ82alZ6TkxM3ZswYC/8qSPbiTSlvO2bxnTt3rPPnz1tYzq5du3bVYswP4DIwiZPnNcRo9kpPA1AHRxhEtGJxI7yNznfAb4GTwa+C+SrxgB+D74GvgvnTVa4KlCQ5zkLiwH8JVPbnM5pmMDjuWYLybMrdANGRLj9lg4x0VPB6ViBcQi4l+ZnpP8ZJaQD2wM13AAAAAElFTkSuQmCC",
				p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAACPtJREFUWAm9WHtQVscVX+DjIVAzRqStVAnUCc7UBx2jKEarFeNYJrHVxvQPtSPTaDL1UbWVf4IZJ6Rm1DQdH4Dji1oZJ1BHJiMyU3V8iw98piWjOID4accCWhEEvtf299vvnpvL55c0NDFn5tzdPXvuOb89u3t2741S3xxFwpQOMedCO8Li0L4Q1fDNqPDi/0tKABPAueDvgJvAATDlZIJl+1snGeS7hYWFurm5WR8/fpyADoAnDBw48Kcon7dQMZrfKnFaSemLFy/2eb1eDfKA/Xv37iVIz7Bhw5pRPgS/Ayb1CaQ4CL7a96e8nzJy5Mgol8tFcJR509LSaK3q1q1bQ1G+Al4J/i1YphvVZ08SjWi4ulpbW6v9fr9ub2/Xq1atIpA8B4SFqLsdbXnXIXo2VYni92D+L7Nnz67PzMysQ/0PlrsEq5yKsgecbLXlPav5bAunM0bT2RbPFajclQbKrxRBbv2vQ3QiTGDc0d2WwYyoqKiXMeU/QjsX/KJVspt6flaeBREQB/aFg0tISFiHfq7BO+A94DXg4WBSuOgGe/r4lMiwJAmwYAvP8vJyRuIF8I/BWeAM8K8TExP1uHHjlqAeSn0GJ86dhiijY59DSBkjIpSDyq/Ak5DnhmRkZPSLiYlRHo9H1dfXq5s3b/LEYOSqwWfBbjCJdmmHLL6lDdH/pl4jnD9/PnegMTRmzJh41N8AX1i3bp0+c+aMOTUePnyonzx5oru6ukz54MED3dTUFGDK2b59u54+ffp/8A43SDb4i4jLpZfvcIocndq2bRsX++/B58HNo0aNuobyOOtlZWWaAHhSgJmUfVY9gNLJaGoeKz4CJ9gFCxYwUh/NnDlzUF5eHs/q1NGjR6dAx7mWDQb0PUUGfVpa2nfRc3nLli26rq5Ot7S0mIS7cOFCfffuXTolIG8AxIRMRvUpdvZB3wyGx+ChQ4cIksfeHZw8T1C2g2+ANyKxJ6EkOQEbgawFNs6eOnWKQLoI5NixYz6ANaAsR+zrE3EAPh9NmAh7b9y4YdYcwfLEuXbtml67di1l/544ceJLBlEISEE8d+PGjTTUw8fly5fNGmKdREO7S0t1SXGxbmxsNDI6D0fhouoA6r99+7YfuzzgdrsZXaLvqqysJMhHOIlSLZD2dAvATQQB8j5+/FgfOXKEde3H6N/98E9m1HhRl1X8TePaYvr68pDBWNHUV69e1XPnzpXo0lQ31j/9/N0CaM+sAPywoaGBit5Hjx7p7u5u1vWf8VIBgLXMytRtLytd9MbPdSumhiROTcN6EEBra6tua2vTbbBD7sRGcZKAPHDggL548aJ0BZARfKmpqQQ5zQJpsHHXkt68dOkSlb1c5CT3/fv6nQFK658laT0jTutf/FDXAGz1yZOmX/TYELAE99prs7RK7K/fnjRBr/pJtn4le4KutmaEeqLLINTU1Dhtebdu3UqA7xtESkVz98qZ+MmJEyfaOjo6XPRHhY6ubpXCPRfTX3l8OGIjY+2Dlv1OioiIwEi0wg1a5b7+utrV0a6K4j9VfwycVWUdNaokJ0fVNzQq0aNubGysGjt2rNOMQgTZlhu4uVwSDEN5f+XKlQeLiooUDnkDMD1lsGpc9Ka6U9mgYp4fodpq61T5iylqzIgRNGKcmUrIw9fToyZRlvADFRkXp5KGj1K/Q/OzxkZbk0CFsKRUZGQwT/fgXVCL1RcRmr1PiiKmQUW7XOrtgjXqg1mvqo8q/qHyM3LUW5WH1aABAxT7nU5okFEhJSUPUvdZiU1Urujn0BFQhDZk8Pcp7UW0cf78eYU8SXnEuXPnWPKQIAUNoiIbJWfDhg3wY5KrScZsdOAo+6yxyZRsyxpi3UmyJpvdbp0J43Cl3SOU3oVyzXvv2aryvujv27ePOdHbgE0KLLeQfwVPhFQEaSfDDWJkNaPJSCX066eGv5BKuWlLlI3A8aAcKNSQlBT117o6tau8QrW3tqiX8ser/DmzjSb7QyMfHR0dQOJ2VVfzbqHyp06dyosKsdkXFpnq1Dlz5nRiHXC0fhkpS45W2uwMJfYLO/UwDbaqU06hFcHAzp07GSDyW2CS4Am28Px8xeK2cu/ePb5vpxs2BKQADQeGekLMdQJI3pG+kNKzevVqgiu00Mis2uCkIh0reOyAPGJYHIUYtpsEw3zG0wf3QVv+Ze9JHy4knEYdFxc3xQIiOEzTGUqTWiDdWVhY+K/Ozs5orCk/1wsZJ4PC4lWlpaWquLhY7dmzR+G4MmsOacno4K+CKigoUMuWLTP6fA9oLb+9C0seuHDhAs/c1hUrVnxqaUhe7v2C1RL0vykpKWEkvACqef3Kzc01lwekAXOOHjx4UCcnJ+vly5ebyyqVhfApoK1bkawz6TKlRA93xZ5p06ZxBFst//YFISw6CLkWZT1WVVRU6Hnz5nkJkBeIUOJNeujQoXr37t2my/r1YasJEFuACmVcOiAf34O/9iVLlgy2ADln1BI9XUgUs9DFaNnbUDYGSwGDJKsnT55s30ocAAjCJsrlkgChl+uV9sePHx/MP5/n4qcROSQSPYqqeKsGwW5wR9IJ2RKakjpZWVnaSk12PztF34oYRUxdPfv37zfg0tPT8yzfEhQHlPBVUfzl+vXradBH4+KIAhCaBiWRBjZt2qQxRabDGWEHKOrxAum5fv26XrRoEcHdw6Cm9xUc9WUNfCxXL2sqjROsOa/cE4nx6NGj3Pk+7F4CcDI/qNj28/p1+vRpjV1KYA/A72NQ/VGSJCDBVpinU4HTK6kmAxGgug+/1Fhyd7mqqqoU/vup7OxsP/Jd5I4dOyLwQRXFFITdblINloPiccmUc+XKFYVPz25cRPll+PHSpUv3bt68uYVpiPbA9lFGQThyrjn2EwiRfTBjxox8TJ2Kj483H+OHDx8+hbVThr5acCfYNWXKlCT8TU1FndcU/t3i5yQjxa81N5hfbP8EN4GFCIyBkGCIPGwZCpBtOiC9CuY64c+gT8CnwV+H+gRMHIUCpNwJUvR4IuBgMLef0JFTP9w7IqM+By0Dt21+lQqNhCPKJauzTidfegSFM/JNyP4LuTh8ZaAXiQ4AAAAASUVORK5CYII=",
				b = n("./src/chat/components/ToastNotification/index.m.less"),
				g = n.n(b);
			const f = [d.a.ConnectionClosed, d.a.ConnectionPending],
				C = [d.a.SomethingWentWrong],
				E = e => f.includes(e),
				O = e => C.includes(e),
				v = i.a.wrapped(e => r.a.createElement("span", {
					className: Object(o.a)(e.className, {
						[g.a.pending]: E(e.toast),
						[g.a.error]: O(e.toast)
					}),
					style: {
						height: e.toast ? "2.5em" : "0"
					}
				}, e.children), "Wrapper", g.a),
				_ = i.a.span("Text", g.a),
				j = i.a.img("SnooImg", g.a);
			j.displayName = "SnooImg";
			const y = i.a.button("Button", g.a);
			y.displayName = "Button";
			const I = i.a.wrapped(h.a, "RefreshIcon", g.a),
				x = Object(u.a)({
					toast: e => e.toast
				}),
				S = Object(c.b)(x),
				w = r.a.createElement(j, {
					src: m
				}),
				N = r.a.createElement(j, {
					src: p
				}),
				k = ({
					className: e,
					toast: t
				}) => r.a.createElement(v, {
					toast: t,
					className: e
				}, t && (e => {
					switch (e) {
						case d.a.ConnectionOpen:
							return w;
						case d.a.ConnectionPending:
						case d.a.ConnectionClosed:
						case d.a.SomethingWentWrong:
							return N;
						default:
							return null
					}
				})(t), r.a.createElement(_, null, t && (e => {
					switch (e) {
						case d.a.ConnectionOpen:
							return a.fbt._("Found the internet!", null, {
								hk: "3jLr8W"
							});
						case d.a.ConnectionPending:
							return a.fbt._("Looking for the internet...", null, {
								hk: "1JPRuh"
							});
						case d.a.ConnectionClosed:
							return a.fbt._("Hmm, no internet?", null, {
								hk: "134peM"
							});
						case d.a.SomethingWentWrong:
							return a.fbt._("Oops! Something went wrong", null, {
								hk: "4CGwU7"
							});
						default:
							return null
					}
				})(t)), t && (e => e === d.a.ConnectionClosed ? r.a.createElement(y, {
					onClick: l.g
				}, r.a.createElement(I, null)) : null)(t));
			k.displayName = "ToastNotification";
			t.a = S(k)
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
		"./src/chat/constants/dropdown.ts": function(e, t, n) {
			"use strict";
			var a;
			n.d(t, "b", (function() {
					return a
				})), n.d(t, "c", (function() {
					return C
				})), n.d(t, "d", (function() {
					return E
				})), n.d(t, "a", (function() {
					return O
				})),
				function(e) {
					e.AddToGroup = "addToGroup", e.Block = "block", e.CopyLink = "copyLink", e.Hide = "hide", e.HideGroup = "hideGroup", e.Kick = "kick", e.Leave = "leave", e.LeaveRoom = "leaveRoom", e.MuteBadging = "muteBadging", e.MuteNotifs = "muteNotifs", e.Profile = "profile", e.Report = "report", e.RenameGroup = "renameGroup", e.UnmuteBadging = "unmuteBadging", e.UnmuteNotifs = "unmuteNotifs", e.ViewMembers = "members"
				}(a || (a = {}));
			const {
				AddToGroup: s,
				Block: r,
				Hide: c,
				HideGroup: o,
				Kick: i,
				Leave: l,
				MuteBadging: d,
				MuteNotifs: u,
				Profile: h,
				RenameGroup: m,
				UnmuteBadging: p,
				UnmuteNotifs: b,
				ViewMembers: g
			} = a, f = [d, p, u, b], C = {
				directChannel: [h, r, ...f, c],
				groupChannel: [s, m, g, ...f, o, l],
				members: [r, i]
			}, E = {
				muteBadging: (e, t) => !(e === d && t),
				unmuteBadging: (e, t) => !(e === p && !t),
				muteNotifs: (e, t) => !(e === u && t),
				unmuteNotifs: (e, t) => !(e === b && !t),
				hideChannel: (e, t) => !((e === c || e === o) && t)
			}, O = "dropdown-container"
		},
		"./src/chat/constants/keys.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "h", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			}));
			const a = "Backspace",
				s = "Enter",
				r = "Escape",
				c = "ArrowLeft",
				o = "ArrowUp",
				i = "ArrowRight",
				l = "ArrowDown",
				d = "Delete"
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
					e.ConnectionClosed = "connectionClosed", e.ConnectionPending = "connectionPending", e.ConnectionOpen = "connectionOpen", e.SomethingWentWrong = "somethingWentWrong"
				}(a || (a = {}))
		},
		"./src/chat/constants/users.ts": function(e, t, n) {
			"use strict";
			var a;
			n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.Block = "block", e.Kick = "kick", e.Report = "report"
				}(a || (a = {}))
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
				return v
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "d", (function() {
				return I
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./src/lib/classNames/index.ts"),
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
			var u = e => r.a.createElement(l.a, d({}, e, {
				viewBox: "0 0 16 16"
			}), r.a.createElement("path", {
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
			var m = e => r.a.createElement(l.a, h({}, e, {
					viewBox: "0 0 16 16"
				}), r.a.createElement("path", {
					d: "M7.634 10.034L8.67 9H1.8a.8.8 0 1 1 0-1.6h6.869L7.634 6.366a.8.8 0 1 1 1.132-1.132l2.399 2.4a.8.8 0 0 1 0 1.132l-2.4 2.4a.798.798 0 0 1-1.13 0 .8.8 0 0 1 0-1.132zM12.2 1c1.323 0 2.4 1.077 2.4 2.4V13c0 1.323-1.077 2.4-2.4 2.4H6.6A2.403 2.403 0 0 1 4.2 13v-.8a.8.8 0 1 1 1.6 0v.8c0 .44.358.8.8.8h5.6a.8.8 0 0 0 .8-.8V3.4a.8.8 0 0 0-.8-.8H6.6a.8.8 0 0 0-.8.8v.8a.8.8 0 1 1-1.6 0v-.8C4.2 2.077 5.277 1 6.6 1h5.6z",
					fillRule: "evenodd"
				})),
				p = n("./src/chat/icons/svgs/Trash/index.tsx"),
				b = n("./src/chat/controls/Button/index.m.less"),
				g = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const C = o.a.a("Button", g.a),
				E = o.a.button("Button", g.a),
				O = o.a.button("MessageIconButton", g.a),
				v = e => {
					const t = Object(c.a)({
							[g.a.primaryStyles]: e.primary,
							[g.a.secondaryStyles]: e.secondary,
							[g.a.primaryNoBorder]: e.primaryNoBorder,
							[g.a.warningNoBorder]: e.warningNoBorder,
							[g.a.secondaryNoBorder]: e.secondaryNoBorder
						}, e.className),
						n = {
							height: e.height || void 0,
							width: e.width || void 0
						};
					return e.href ? r.a.createElement(C, {
						href: e.href,
						target: i.c.BLANK,
						rel: i.b,
						title: e.title,
						className: t,
						tabIndex: 0,
						style: n
					}, e.children) : r.a.createElement(E, {
						type: e.type || "button",
						tabIndex: 0,
						id: e.id,
						className: t,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						disabled: e.disabled,
						title: e.title,
						style: n
					}, e.children)
				},
				_ = o.a.wrapped(v, "IconButton", g.a),
				j = e => r.a.createElement(O, f({}, e, {
					title: a.fbt._("Report message", null, {
						hk: "2XKeNq"
					})
				}), r.a.createElement(u, null)),
				y = e => r.a.createElement(O, f({}, e, {
					title: a.fbt._("Delete message", null, {
						hk: "Z4Zm0"
					})
				}), r.a.createElement(p.a, null)),
				I = e => r.a.createElement(O, f({}, e, {
					title: a.fbt._("Kick user", null, {
						hk: "5PnyH"
					})
				}), r.a.createElement(m, null))
		},
		"./src/chat/controls/ChannelNameInput/index.m.less": function(e, t, n) {
			e.exports = {
				Input: "_2BjAxRl-BYxJgVcYmAQUKV",
				input: "_2BjAxRl-BYxJgVcYmAQUKV",
				NameInput: "_3vihSysDa9MEMS9CcMWUiN",
				nameInput: "_3vihSysDa9MEMS9CcMWUiN"
			}
		},
		"./src/chat/controls/ChannelNameInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/controls/ChannelNameInput/index.m.less"),
				o = n.n(c);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const l = r.a.input("Input", o.a),
				d = r.a.wrapped(e => s.a.createElement("label", {
					className: e.className
				}, s.a.createElement(l, {
					placeholder: e.placeholder,
					onChange: e.onChange,
					value: e.value
				}), e.children), "NameInput", o.a);
			class u extends s.a.Component {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = e.currentTarget.value;
						this.props.handleChannelNameInput(t)
					}
				}
				render() {
					return s.a.createElement(d, i({
						withBackground: this.props.withBackground,
						onChange: this.onChange
					}, this.props), this.props.children)
				}
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
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
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
			const u = c.a.wrapped(e => s.a.createElement("circle", {
					className: e.className,
					cy: "10",
					cx: "10",
					r: "10"
				}), "StyledCircle", l.a),
				h = c.a.wrapped(e => s.a.createElement("path", {
					className: e.className,
					d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z"
				}), "StyledCheckmark", l.a);
			var m = e => s.a.createElement(o.a, d({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("g", null, s.a.createElement(u, null), s.a.createElement(h, null))),
				p = n("./src/chat/icons/svgs/Checkbox/unchecked.m.less"),
				b = n.n(p);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const f = c.a.wrapped(e => s.a.createElement("circle", {
				className: e.className,
				cy: "10",
				cx: "10",
				r: "9"
			}), "StyledCircle", b.a);
			var C = e => s.a.createElement(o.a, g({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("g", null, s.a.createElement(f, null))),
				E = n("./src/chat/controls/Checkbox/index.m.less"),
				O = n.n(E);
			const v = c.a.input("HiddenInput", O.a),
				_ = c.a.wrapped(m, "Checked", O.a),
				j = c.a.wrapped(C, "Unchecked", O.a),
				y = c.a.span("Wrapper", O.a),
				I = c.a.span("Content", O.a),
				x = c.a.span("Control", O.a),
				S = c.a.label("CheckInput", O.a);
			t.a = e => s.a.createElement(S, {
				className: Object(r.a)(e.className, {
					[O.a.checked]: e.checked
				}),
				style: {
					height: e.height || void 0,
					width: e.width || void 0
				}
			}, s.a.createElement(y, null, e.children && !e.rightPosition && s.a.createElement(I, null, e.children), s.a.createElement(x, null, s.a.createElement(v, {
				tabIndex: 0,
				type: e.type || "checkbox",
				checked: e.checked,
				disabled: e.disabled,
				name: e.name,
				value: e.value,
				onChange: e.onChange,
				id: e.id
			}), s.a.createElement(_, null), s.a.createElement(j, null)), e.children && e.rightPosition && s.a.createElement(I, null, e.children)))
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
				return m
			})), n.d(t, "b", (function() {
				return b
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/selectors/messages.ts"),
				l = n("./src/chat/controls/Counter/index.m.less"),
				d = n.n(l);
			const u = e => s.a.createElement("span", {
					className: e.className
				}, e.count ? e.count : ""),
				h = o.a.wrapped(u, "Counter", d.a),
				m = ({
					className: e,
					count: t
				}) => s.a.createElement(h, {
					className: Object(c.a)(e, {
						[d.a.count]: !!t && t < 0
					}),
					count: t
				});
			m.displayName = "Counter";
			const p = o.a.wrapped(u, "UnreadCounter", d.a),
				b = ({
					className: e
				}) => {
					const t = Object(r.e)(i.n);
					return (null == t ? void 0 : t.basicChannelCount.unread) ? s.a.createElement(p, {
						className: Object(c.a)(e, {
							[d.a.count]: !t
						}),
						count: null == t ? void 0 : t.basicChannelCount.count
					}) : null
				};
			b.displayName = "UnreadCounter"
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
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.tsx"),
				i = n("./src/chat/controls/Dropdown/Row.m.less"),
				l = n.n(i);
			const d = c.a.div("IconWrapper", l.a),
				u = c.a.span("Text", l.a);
			t.a = c.a.wrapped(e => s.a.createElement(o.a, {
				id: e.id,
				className: Object(r.a)(e.className, {
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
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/actions/tooltip.ts"),
				i = n("./src/chat/controls/Dropdown/index.m.less"),
				l = n.n(i);
			class d extends a.Component {
				constructor(e) {
					super(e), this.elem = s.a.createRef(), this.handleClick = this.handleClick.bind(this), this.handleClickInside = this.handleClickInside.bind(this), this.handleClickOutside = this.handleClickOutside.bind(this)
				}
				componentDidMount() {
					document.addEventListener("mousedown", this.handleClick, !1)
				}
				componentWillUnmount() {
					document.removeEventListener("mousedown", this.handleClick, !1)
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
			const u = Object(r.b)(void 0, e => ({
				closeTooltip: () => e(Object(o.d)())
			}))(d);
			t.a = c.a.wrapped(u, "Component", l.a)
		},
		"./src/chat/controls/Gif/index.m.less": function(e, t, n) {
			e.exports = {
				Gif: "_2lj57boW5PA-H2G7IgTOJv",
				gif: "_2lj57boW5PA-H2G7IgTOJv",
				Image: "-mpaQxVgSbzLdWPLu9uoL",
				image: "-mpaQxVgSbzLdWPLu9uoL"
			}
		},
		"./src/chat/controls/Gif/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				o = n("./src/chat/controls/Gif/index.m.less"),
				i = n.n(o);
			const l = r.a.img("Image", i.a),
				d = r.a.wrapped(({
					className: e,
					source: t,
					onClick: n,
					imageScale: r,
					height: o = 200,
					width: i,
					title: d = ""
				}) => {
					const [u, h] = Object(a.useState)(!1);
					return Object(a.useEffect)(() => {
						let e = !0;
						return new Promise(e => {
							const n = new Image;
							n.onload = () => e(), n.src = t
						}).then(() => e && h(!0)), () => {
							e = !1
						}
					}), s.a.createElement("div", {
						className: e,
						style: {
							height: `${+o*(r||.75)}px`,
							width: `${i?+i*(r||.75):"auto"}px`
						}
					}, u ? s.a.createElement(l, {
						onClick: () => n && n(),
						src: t,
						title: d,
						style: {
							height: `${+o*(r||.75)}px`
						}
					}) : s.a.createElement(c.a, {
						height: +o * (r || .75)
					}))
				}, "Gif", i.a);
			t.a = d
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
				isFullSize: "EMDomkYEjP7w6g0rn8KNX",
				Overlay: "_249eIqU0mX7GU1qrI9k3F3",
				overlay: "_249eIqU0mX7GU1qrI9k3F3"
			}
		},
		"./src/chat/controls/Overlay/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/selectors/app.ts"),
				l = n("./src/chat/controls/Overlay/index.m.less"),
				d = n.n(l);
			const u = o.a.div("Content", d.a),
				h = o.a.wrapped(e => {
					const t = e.form ? "form" : "div",
						[n, a, o] = s.a.Children.toArray(e.children),
						l = {
							className: e.className,
							onSubmit: e.onSubmit
						},
						h = Object(r.e)(i.e),
						m = s.a.createElement(s.a.Fragment, null, n, e.innerContent ? a : s.a.createElement(u, {
							className: Object(c.a)(d.a.Content, {
								[d.a.isFullSize]: h
							})
						}, a), o);
					return s.a.createElement(t, l, m)
				}, "Overlay", d.a);
			h.displayName = "Overlay", t.a = h
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
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Svg/index.m.less"),
				i = n.n(o);
			t.a = c.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: a,
						hover: c
					} = e;
				return s.a.createElement("svg", {
					className: Object(r.a)(e.className, {
						[i.a.disable]: n,
						[i.a.active]: a,
						[i.a.hover]: !!c
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
		"./src/chat/controls/TextButton.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/TextButton.m.less"),
				i = n.n(o);
			const l = c.a.wrapped(e => s.a.createElement("button", {
				onClick: e.onClick,
				className: Object(r.a)(e.className, {
					[i.a.hidden]: e.hidden
				})
			}, e.children), "TextButton", i.a);
			t.a = l
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
		"./src/chat/controls/Title/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Title/index.m.less"),
				i = n.n(o);
			const l = c.a.wrapped(({
				bold: e,
				children: t,
				className: n
			}) => s.a.createElement("h4", {
				className: Object(r.a)({
					[i.a.bold]: e
				}, n)
			}, t), "Title", i.a)
		},
		"./src/chat/customMiddleware/iframeDispatcher.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/once.js"),
				s = n.n(a),
				r = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/postParentMessage/index.ts"),
				l = n("./src/chat/actions/channel.ts"),
				d = n("./src/chat/actions/container.ts"),
				u = n("./src/chat/actions/message/unreadCount.ts"),
				h = n("./src/chat/constants/container.ts"),
				m = n("./src/chat/customMiddleware/noop.ts"),
				p = n("./src/chat/helpers/unreadCount.ts"),
				b = n("./src/chat/helpers/urls/index.ts"),
				g = n("./src/chat/selectors/promos.ts"),
				f = n("./src/chat/tracking/sendEvent.ts"),
				C = n("./src/telemetry/models/Event.ts"),
				E = n("./src/chat/tracking/fields/chat.ts"),
				O = n("./src/chat/tracking/fields/common.ts");
			var v;
			! function(e) {
				e.Navigate = "navigate.chat", e.Websocket = "websocket.chat", e.Expand = "expand.chat", e.UnreadCount = "unreadCount.chat"
			}(v || (v = {}));
			const _ = e => t => {
					const n = (e => {
						try {
							return "object" == typeof e.data ? e.data : JSON.parse(e.data)
						} catch (t) {
							return
						}
					})(t);
					if (n) switch (n.type) {
						case v.Navigate: {
							const t = Object(c.parse)(n.data.href).pathname || b.rootUrl,
								a = Object(b.getRedirectURL)(t);
							e.dispatch(Object(r.b)(a)), e.dispatch(Object(d.sizeChanged)(h.a.EMBED));
							break
						}
						case v.Websocket:
							e.dispatch(Object(u.b)());
							break;
						case v.Expand: {
							const t = e.getState();
							e.dispatch(Object(d.sizeChanged)(h.a.EMBED));
							const a = t.platform.currentPage;
							a && a.meta && a.meta.name === o.Gb.CHAT_MINIMIZE && e.dispatch(Object(l.O)());
							const {
								action: s,
								noun: r,
								source: c
							} = n.data.telemetry;
							((e, t, n, a) => {
								Object(f.a)({
									noun: t || "chat",
									source: n || C.b.Nav,
									action: a || C.a.Click,
									chat: {
										...Object(E.g)(e),
										...Object(E.u)(e),
										...Object(E.q)(e),
										...Object(E.z)(e),
										...Object(E.A)(e)
									},
									...Object(O.a)(e)
								})
							})(t, r, c, s);
							break
						}
					}
				},
				j = s()(e => {
					window.addEventListener("message", _(e)), window.navigator.serviceWorker.addEventListener("message", _(e))
				});
			t.a = e => "undefined" == typeof window ? m.a : (window.addEventListener("load", () => {
				j(e)
			}), t => n => {
				switch (n.type) {
					case u.a: {
						const t = Object(g.b)(e.getState()),
							a = {
								...n.payload
							},
							{
								unread: s,
								count: r
							} = Object(p.a)(a, t);
						Object(i.a)({
							type: v.UnreadCount,
							data: {
								unread: s,
								count: r
							}
						})
					}
				}
				return t(n)
			})
		},
		"./src/chat/customMiddleware/lastSelectedChannel.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var a = n("./src/lib/cache/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/chat/actions/sidebar.ts"),
				c = n("./src/chat/customMiddleware/noop.ts");
			let o;
			const i = e => {
				const t = e.user.account && e.user.account.id;
				return o = Object(a.c)(s.o.CHAT, "last_selected_channel_id", t || "unknown"), Object(a.b)(o)
			};
			t.a = e => {
				if ("undefined" == typeof window) return c.a;
				const t = e.getState(),
					{
						user: {
							account: n
						}
					} = t,
					i = n && n.id || "unknown";
				return o = Object(a.c)(s.o.CHAT, "last_selected_channel_id", i), e => t => {
					const n = e(t);
					switch (t.type) {
						case r.a:
							Object(a.d)(o, t.payload.channelId, s.kb)
					}
					return n
				}
			}
		},
		"./src/chat/customMiddleware/loggedOutPreferencesSync.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/pick.js"),
				s = n.n(a),
				r = n("./src/chat/actions/theme.ts"),
				c = n("./node_modules/Base64/base64.js"),
				o = n("./node_modules/icepick/icepick.js"),
				i = n("./node_modules/js-cookie/src/js.cookie.js"),
				l = n.n(i),
				d = n("./src/lib/permanentCookieOptions.ts");
			const u = "USER";

			function h(e) {
				const t = function() {
						const e = l.a.get(u);
						if (e) try {
							return JSON.parse(Object(c.atob)(e))
						} catch (t) {
							0
						}
					}(),
					n = Object(o.merge)(t || {}, e),
					a = new Date;
				a.setFullYear(a.getFullYear() + 2), l.a.set(u, btoa(JSON.stringify(n)), Object(d.a)(2))
			}
			const m = new Set([r.THEME_CHANGED]);
			t.a = e => t => n => {
				const a = t(n);
				if (m.has(n.type)) {
					const t = e.getState().user;
					h({
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
				r = n("./src/lib/constants/index.ts"),
				c = n("./src/chat/actions/channel.ts"),
				o = n("./src/chat/actions/container.ts"),
				i = n("./src/chat/actions/message/unreadCount.ts"),
				l = n("./src/chat/actions/platform.ts"),
				d = n("./src/chat/actions/sendbird/index.ts"),
				u = n("./src/chat/actions/sendbird/config.ts"),
				h = n("./src/chat/actions/sendbird/sdk.ts"),
				m = n("./src/chat/actions/session.ts"),
				p = n("./src/chat/constants/container.ts"),
				b = n("./src/chat/constants/sendbird.ts"),
				g = n("./src/chat/customMiddleware/noop.ts"),
				f = n("./src/chat/selectors/platform.ts"),
				C = n("./src/chat/selectors/sendbird.ts");
			const E = (e, t) => {
				const n = t && t.type === o.SIZE_CHANGED ? t.payload : e.container.size,
					a = n === p.a.MINIMIZED || n === p.a.HIDDEN,
					s = t && t.type === l.a ? t.payload && t.payload.routeMatch && t.payload.routeMatch.route.meta.name === r.Gb.CHAT_MINIMIZE : e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name === r.Gb.CHAT_MINIMIZE;
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
							r = Math.floor(.9 * (s.getTime() - a.getTime()));
						t = setTimeout(() => {
							e.dispatch(Object(d.m)())
						}, r)
					})(n) : s()(() => e.dispatch(Object(d.m)()))
				};
				let a;
				Object(f.a)(e.getState()) === r.Gb.CHAT_MINIMIZE ? s()(async () => {
					E(e.getState()) ? n() : (await e.dispatch(Object(d.m)(!1)), e.getState().sendbird.session.token && await e.dispatch(Object(i.b)()))
				}) : n();
				return i => g => {
					const f = e.getState(),
						O = Object(C.a)(f) === b.b.Closed,
						v = Object(C.e)(f);
					switch (g.type) {
						case o.SIZE_CHANGED: {
							if (!g.payload) break;
							const t = g.payload !== p.a.MINIMIZED && g.payload !== p.a.HIDDEN;
							t && (clearTimeout(a), a = null), O && t && !v && n(), !v || g.payload !== p.a.HIDDEN && g.payload !== p.a.MINIMIZED || (a = setTimeout(() => {
								e.dispatch(Object(h.f)())
							}, 10 * r.fb));
							break
						}
						case l.a: {
							const t = E(f, g);
							O && t ? n() : t && e.dispatch(Object(c.O)());
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
				r = n("./src/chat/helpers/errors.ts"),
				c = n("./src/chat/selectors/app.ts");
			const o = /^\([\d*]+?\)\s+/,
				i = e => {
					const t = null === window || void 0 === window ? void 0 : window.navigator;
					if (t && "setAppBadge" in t && "clearAppBadge" in t) {
						(e >= 0 ? t.setAppBadge(e) : t.clearAppBadge()).catch(e => Object(r.b)(e))
					}
				};
			t.a = e => {
				return "undefined" != typeof window ? t => n => {
					const s = t(n),
						r = e.getState();
					if (!Object(c.d)(r) && n.type === a.a) {
						const {
							basicChannelCount: e,
							subredditChannelCount: t
						} = n.payload;
						((e, t) => {
							var n, a;
							const s = null === (a = null === (n = null === window || void 0 === window ? void 0 : window.document) || void 0 === n ? void 0 : n.title) || void 0 === a ? void 0 : a.replace(o, "");
							e > 0 ? (i(e), window.document.title = `(${e}) ${s}`) : t > 0 ? (i(1), window.document.title = `(*) ${s}`) : (i(0), window.document.title = s)
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
				r = n("./src/lib/constants/index.ts"),
				c = n("./src/chat/actions/channel.ts"),
				o = n("./src/chat/actions/session.ts"),
				i = n("./src/chat/helpers/errors.ts");
			const l = 5 * r.fb;
			t.a = e => {
				const t = s()(() => {
					e.dispatch(Object(o.d)())
				}, l);
				let n, a;
				const r = () => {
						const n = e.getState().user.session;
						if (!n || !a) return;
						const s = new Date(n.expires),
							r = a + Math.floor(.8 * (s.getTime() - a));
						Date.now() > r && t && t()
					},
					d = e => {
						a = Date.now();
						const s = new Date(e.expires).getTime() - a,
							r = .8 + .1 * Math.random(),
							c = Math.min(Math.floor(r * e.expiresIn * 1e3), Math.floor(r * s));
						n = setTimeout(t, c)
					},
					u = e.getState();
				u.user.session && d(u.user.session);
				try {
					window.parent.addEventListener("focus", r), window.parent.addEventListener("touchend", r), document.body.addEventListener("mouseenter", r)
				} catch (h) {
					Object(i.b)(`Token Refresher Error: ${h}`)
				}
				return e => t => (t.type !== o.a && t.type !== o.c || d(t.payload), t.type === c.v && r(), t.type === o.b && (clearTimeout(n), n = null), e(t))
			}
		},
		"./src/chat/customMiddleware/tracking.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/once.js"),
				s = n.n(a),
				r = n("./src/lib/logs/timing.js"),
				c = n("./src/chat/actions/channel.ts"),
				o = n("./src/chat/actions/message/index.ts"),
				i = n("./src/chat/actions/platform.ts"),
				l = n("./src/chat/actions/sendbird/index.ts"),
				d = n("./src/chat/actions/sidebar.ts"),
				u = n("./src/chat/constants/channels.ts"),
				h = n("./src/chat/selectors/channels.ts"),
				m = n("./src/chat/selectors/platform.ts"),
				p = n("./src/chat/tracking/sendEvent.ts"),
				b = n("./src/telemetry/models/Event.ts"),
				g = n("./src/telemetry/models/Timer.ts"),
				f = n("./src/chat/tracking/fields/chat.ts"),
				C = n("./src/chat/tracking/fields/common.ts");
			const E = e => ({
					type: e
				}),
				O = e => ({
					millis: e
				});
			var v = n("./src/chat/tracking/events/chatView.ts"),
				_ = n("./src/chat/tracking/events/contactsList.ts"),
				j = n("./src/chat/tracking/events/invitationInbox.ts"),
				y = n("./src/chat/tracking/events/messagesInbox.ts");
			const I = s()((e, t) => ((e, t) => {
					Object(p.a)({
						noun: "inbox_new",
						source: b.b.ChatPerformance,
						action: b.a.Load,
						chat: {
							...Object(f.p)(e),
							...Object(f.r)(e)
						},
						timer: {
							...E(g.TimerType.ChatLoadInboxNew),
							...O(t)
						},
						...Object(C.a)(e)
					})
				})(e, (e => Date.now() - e)(t))),
				x = s()(e => Object(m.d)(e) && S(e)),
				S = e => {
					Object(y.d)(e)
				},
				w = Object(r.c)((e, t, n) => {
					Object(h.K)(e) ? ((e, t) => {
						Object(p.a)({
							noun: "channel_cached",
							source: b.b.ChatPerformance,
							action: b.a.Load,
							chat: {
								...Object(f.g)(e)
							},
							timer: {
								...E(g.TimerType.ChatLoadChannelCached),
								...O(t)
							},
							...Object(C.a)(e)
						})
					})(t, n) : ((e, t) => {
						Object(p.a)({
							noun: "channel_new",
							source: b.b.ChatPerformance,
							action: b.a.Load,
							chat: {
								...Object(f.g)(e)
							},
							timer: {
								...E(g.TimerType.ChatLoadChannelNew),
								...O(t)
							},
							...Object(C.a)(e)
						})
					})(t, n)
				}),
				N = e => {
					Object(m.c)(e) === u.a.CREATE && Object(_.g)(e)
				},
				k = e => {
					Object(m.c)(e) === u.a.VIEW_JOIN && (e => {
						Object(p.a)({
							noun: "preview",
							source: b.b.ChatPreview,
							action: b.a.View,
							chat: {
								...Object(f.g)(e),
								...Object(f.A)(e),
								...Object(f.q)(e),
								...Object(f.s)(e)
							},
							...Object(C.a)(e)
						})
					})(e)
				};
			t.a = e => t => n => a => {
				const s = n(a),
					r = t.getState();
				switch (a.type) {
					case i.a:
						I(r, e), N(r);
						break;
					case c.q:
						w(r, !0);
						break;
					case c.s:
						N(r), x(r);
						break;
					case c.r:
						I(r, e), (e => {
							Object(m.c)(e) === u.a.VIEW_INVITE && Object(j.i)(e)
						})(r), (e => Object(m.f)(e) && Object(v.e)(e))(r), w(r), k(r);
						break;
					case o.l:
					case l.c:
						I(r, e);
						break;
					case d.b:
						S(r)
				}
				return s
			}
		},
		"./src/chat/customMiddleware/unreadMessageCount.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/debounce.js"),
				s = n.n(a),
				r = n("./src/chat/actions/message/unreadCount.ts"),
				c = n("./src/chat/customMiddleware/noop.ts"),
				o = n("./src/lib/cache/index.ts"),
				i = n("./src/lib/constants/index.ts");
			let l, d;
			const u = s()(e => {
				Object(o.d)(l, e, 5 * i.fb)
			}, 5 * i.Kb, {
				leading: !1,
				trailing: !0
			});
			let h;
			const m = () => {
				h && clearInterval(h), h = setInterval(() => {
					void 0 === Object(o.b)(l) && Object(r.b)()
				}, 5 * i.fb)
			};
			t.a = e => {
				if ("undefined" == typeof window) return c.a;
				const t = e.getState(),
					{
						user: {
							account: n
						}
					} = t,
					a = n && n.id || "unknown";
				l = Object(o.c)(i.o.CHAT, "unread_message_count", a), u(t.messages.unread.basicChannelCount), m();
				try {
					window.parent.addEventListener("focus", m)
				} catch (s) {}
				return e => t => {
					const n = e(t);
					switch (t.type) {
						case r.a: {
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
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts");
			const r = async e => Object(s.a)(e, {
				endpoint: `${e.apiUrl}/api/v1/me`,
				method: a.eb.GET,
				data: {
					raw_json: 1
				}
			}), c = async (e, t) => Object(s.a)(e, {
				data: {
					account_id: t,
					raw_json: 1
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: a.eb.POST
			}), o = async (e, t) => Object(s.a)(e, {
				endpoint: `${e.apiUrl}/user/${t}/about`,
				method: a.eb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/chat/endpoints/gifs/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			}));
			var a = n("./src/graphql/operations/CreateChatGifMessage.json"),
				s = n("./src/graphql/operations/GetTrendingChatGifs.json"),
				r = n("./src/graphql/operations/SearchChatGifs.json"),
				c = n("./src/lib/makeGqlRequest/index.ts");
			const o = (e, t) => Object(c.a)(e, {
					...s,
					variables: t
				}),
				i = (e, t) => Object(c.a)(e, {
					...r,
					variables: t
				}),
				l = (e, t) => Object(c.a)(e, {
					...a,
					variables: t
				})
		},
		"./src/chat/endpoints/users/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return h
			}));
			var a = n("./src/graphql/operations/ExperimentVariantsShort.json"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/chat/models/Message/report.ts");
			const i = (e, t) => Object(r.a)(e, {
					method: s.eb.POST,
					endpoint: `${e.apiUrl}/api/report_user`,
					data: {
						reason: t.reason,
						user: t.userNickname
					}
				}),
				l = (e, t, n) => {
					const a = Object(o.c)(t, n);
					return Object(r.a)(e, {
						method: s.eb.POST,
						endpoint: `${e.apiUrl}/api/report_user`,
						data: {
							details: JSON.stringify(a),
							reason: t.reason,
							user: t.userNickname
						}
					})
				},
				d = (e, t) => Object(r.a)(e, {
					method: s.eb.GET,
					endpoint: `${e.apiUrl}/api/user_data_by_account_ids`,
					data: {
						raw_json: 1,
						ids: t.join(",")
					}
				}),
				u = e => Object(r.a)(e, {
					method: s.eb.GET,
					endpoint: `${e.apiUrl}/prefs/blocked.json`
				}),
				h = e => Object(c.a)(e, {
					...a
				})
		},
		"./src/chat/helpers/chatSelector.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				r = n("./node_modules/reselect/es/index.js");
			const c = Object(r.b)(r.d, s.a),
				o = e => Object(r.c)(e, c)
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
			var a = n("./src/lib/linkMatchers/index.ts");
			const s = e => !!a.f.test(e),
				r = (e, t, n) => {
					const a = [];
					let s = 0;
					return t.forEach(({
						index: t,
						lastIndex: r,
						text: c,
						url: o,
						schema: i
					}) => {
						const l = "mailto:" === i ? "_self" : "_blank";
						a.push(e.substring(s, t)), a.push(n(o, c, l, i, `link-${t}-${c}`)), s = r
					}), a.push(e.substring(s, e.length)), a
				},
				c = /^(((file|https?|ftps?):)?\/|mailto:)/i,
				o = e => {
					if (void 0 === e) return e;
					return e.match(c) ? e : "#"
				};
			t.a = (e, t, n) => {
				const s = Object(a.c)(e, t);
				return s && s.length ? r(e, s, n) : e
			}
		},
		"./src/chat/helpers/modifyInitialData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "h", (function() {
				return _
			}));
			var a = n("./node_modules/history/esm/history.js"),
				s = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(s),
				c = n("./src/lib/env/index.ts"),
				o = n("./src/lib/matchRoute/index.ts"),
				i = n("./src/chat/actions/platform.ts"),
				l = n("./src/chat/constants/theme.ts"),
				d = n("./src/chat/models/Theme/index.ts"),
				u = n("./src/chat/reducers/meta/index.ts"),
				h = n("./src/chat/reducers/platform/index.ts"),
				m = n("./src/chat/reducers/promos/index.ts"),
				p = n("./src/chat/selectors/platform.ts");
			const b = (e, t) => (e.chat && e.chat.promos && (t.promos = {
					...m.a,
					...e.chat.promos
				}), t),
				g = (e, t) => {
					const {
						account: n,
						language: a,
						loid: s,
						prefs: r,
						reddaid: c,
						session: o,
						sessionTracker: i
					} = e.user;
					return t.user = {
						...t.user,
						account: n ? {
							commentKarma: n.commentKarma,
							created: n.created,
							inChat: n.inChat,
							id: n.id,
							isNSFW: n.isNSFW,
							linkKarma: n.postKarma,
							name: n.displayText || "",
							prefNightmode: e.user.prefs.nightmode,
							profileImg: n.accountIcon
						} : null,
						language: a,
						loid: s,
						prefs: r,
						reddaid: c,
						sessionTracker: i,
						session: o && o.unsafeLoggedOut ? null : o
					}, t
				},
				f = e => (e.meta = {
					...u.a,
					isRedesign: !0
				}, e),
				C = e => {
					if (e.user && e.user.prefs && e.user.prefs.nightmode) {
						const {
							NIGHT: t,
							REDDIT: n
						} = l.b, {
							nightmode: a
						} = e.user.prefs, s = a ? t : n;
						e.themes = {
							current: d.a[s],
							cached: {}
						}, e.user.prefs.globalTheme = s
					}
					return e
				},
				E = (e, t, n) => {
					const s = r()(),
						c = Object(a.c)(t.location.pathname, void 0, s),
						l = Object(o.a)(Object(a.e)(c), n),
						d = Object(h.b)(h.a, Object(i.e)({
							location: c,
							action: "PUSH",
							routeMatch: l
						}));
					return e.platform = {
						...d
					}, e
				},
				O = e => {
					const t = Object(p.e)(e);
					return e.sidebar = {
						activeIndex: t,
						lastChannelIdPerTab: {},
						sideBarAppearance: {
							isSidebarVisible: !1
						}
					}, e
				},
				v = (e, t) => {
					const n = {};
					if (t) {
						const a = /^experiment_(.*)$/i,
							s = e => {
								const t = e.match(a);
								if (null !== t) return t[1]
							};
						for (const r in t) {
							const a = s(r);
							a && (n[a.toLowerCase()] = {
								...e[a.toLowerCase()] || {},
								name: a.toLowerCase(),
								variant: t[r] || ""
							})
						}
					}
					return n
				},
				_ = (e, t) => {
					var n, a, s, r, o;
					const i = null === (n = e.platform.currentPage) || void 0 === n ? void 0 : n.queryParams,
						l = Object(c.b)() ? {} : v(null === (s = null === (a = null == e ? void 0 : e.user) || void 0 === a ? void 0 : a.experiments) || void 0 === s ? void 0 : s.byName, i);
					return t.experiments = {
						models: {
							...(null === (o = null === (r = null == e ? void 0 : e.user) || void 0 === r ? void 0 : r.experiments) || void 0 === o ? void 0 : o.byName) || {},
							...l
						},
						api: {
							isPending: !1,
							errors: []
						}
					}, t
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
		"./src/chat/icons/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/controls/Svg/index.tsx"),
				o = n("./src/chat/icons/Nsfw/index.m.less"),
				i = n.n(o);
			const l = e => s.a.createElement(c.a, {
					width: e.width,
					height: e.height,
					className: e.className,
					viewBox: "0 0 200 200"
				}, s.a.createElement("g", null, s.a.createElement("rect", {
					width: "100%",
					height: "100%",
					fill: "white"
				}), s.a.createElement("path", {
					fill: "#000000",
					d: "M0 100v100h200V0H0v100zm82.1-20.3c2 .4 2.9.2 2.9-.8 0-.8.3-.9.9-.4 1.2 1.4 2.2 12.5 1 12.5-.5 0-.9-.7-.9-1.6 0-.9-1.5-3.1-3.4-5C77.2 79 70 79.9 70 86c0 3 3.1 6.1 10.8 11 7.6 4.7 9.9 9.9 6.8 15.8-2.5 4.8-9.1 6.9-16.2 5.1-3.6-.9-4.8-.9-5.4.1-1.1 1.8-1.7.2-2.4-6.5-.6-5.1-.5-5.7.6-4.1 4 6 7.4 8.8 11 8.9 4.5.1 7.8-2.5 7.8-6.3 0-3.4-1.3-4.9-8.5-9.7-10-6.7-11.9-10.2-8.8-16.3 2-3.8 7.1-6.3 11.2-5.4 1.3.3 3.6.8 5.2 1.1zM39.8 93.1L51 107.3V95.4c0-12.5-.3-13.5-3.5-14.9-1.7-.8-1.6-.9 1.2-1.3 1.8-.2 5-.2 7 0l3.8.4-2.7 1.2-2.8 1.1-.2 18.8-.3 18.8-13.2-16.3L27 86.9v28l2.8 1.5c2.6 1.5 2.4 1.5-4.8 1.5-6 0-7-.2-5-1 1.3-.6 2.8-1.5 3.2-2.2.4-.7.8-8 .8-16.3 0-15.8-.3-17-5-18.7-.8-.3 1-.6 4-.6l5.5-.1 11.3 14.1zM125 83c0 4.2-1.4 5.4-2.3 2-.7-2.7-4.6-4-11.8-4H105v15.1l6.3-.3c5.3-.3 6.3-.6 7.2-2.6 1.7-3.8 2.5-2.4 2.5 4.3 0 6.7-.8 8.1-2.5 4.2-.9-1.9-1.9-2.2-7.2-2.5l-6.3-.3v8.5c0 8.3 0 8.5 2.8 9.4 2.1.8.9 1-6.3 1-6.9 0-8.4-.2-6.4-.9 3.4-1.2 3.9-3.8 3.9-18.4 0-14.6-.5-17.2-3.9-18.4-1.9-.7 2-1 13.7-1L125 79v4zm13.3-2.5l-2.2 1.6 3 8.1c1.6 4.5 3.8 10 4.8 12.2l1.7 4.1 3.1-8c3-8 3-8 1.3-12.4-.9-2.4-2.8-5-4.1-5.7-2.2-1.2-1.5-1.3 6.1-1.3 5.8 0 7.8.3 6.4.9-1.2.5-2.5 1.3-2.8 1.8-.5.9 7.3 22.4 8.6 23.7.3.3 2.5-4.7 4.9-11.1l4.3-11.7-2.3-1.8-2.3-1.9 5.8.1c5.5 0 5.8.1 3.8 1.5-1.5 1-4.2 7.1-8.5 19.4-3.5 9.9-6.7 18-7 18-.3 0-2.5-5.2-4.9-11.5-2.3-6.3-4.6-11.3-5-11-.4.2-2.4 5.3-4.5 11.2-2.1 5.9-4.1 11.2-4.5 11.6-.4.5-1.8-2.2-3-6-5.5-16.5-11.1-29.9-13.2-31.5-2.2-1.7-2.1-1.8 5.2-1.8 7 0 7.3.1 5.3 1.5z"
				}))),
				d = r.a.wrapped(l, "NSFWIcon", i.a),
				u = r.a.wrapped(l, "SmallNSFWIcon", i.a)
		},
		"./src/chat/icons/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			}));
			var a = n("./src/config.ts");
			const s = ["snoo_heart_eyes_pride", "snoo_give_upvote_pride", "upvote_pride", "snoo", "snoo_simple_smile", "snoo_smile", "snoo_joy", "snoo_tongue", "snoo_wink", "snoo_sad", "snoo_biblethump", "snoo_angry", "snoo_disapproval", "snoo_trollface", "snoo_dealwithit", "snoo_facepalm", "snoo_shrug", "snoo_scream", "snoo_thoughtful", "snoo_surprised", "snoo_hearteyes", "snoo_hug", "snoo_feelsbadman", "snoo_feelsgoodman", "snoo_putback", "snoo_tableflip", "upvote", "downvote", "karma", "cake", "redditgold", "illuminati", "kappa", "sloth", "cat_blep", "pupper", "partyparrot", "orly", "hamster", "doge"],
				r = {
					simple_smile: `${a.a.assetPath}/img/snoomoji/snoo_simple_smile.png`,
					smile: `${a.a.assetPath}/img/snoomoji/snoo_smile.png`,
					joy: `${a.a.assetPath}/img/snoomoji/snoo_joy.png`,
					tongue: `${a.a.assetPath}/img/snoomoji/snoo_tongue.png`,
					wink: `${a.a.assetPath}/img/snoomoji/snoo_wink.png`,
					sad: `${a.a.assetPath}/img/snoomoji/snoo_sad.png`,
					biblethump: `${a.a.assetPath}/img/snoomoji/snoo_cry.png`,
					angry: `${a.a.assetPath}/img/snoomoji/snoo_angry.png`,
					disapproval: `${a.a.assetPath}/img/snoomoji/snoo_disapproval.png`,
					trollface: `${a.a.assetPath}/img/snoomoji/snoo_trollface.png`,
					dealwithit: `${a.a.assetPath}/img/snoomoji/snoo_dealwithit.png`,
					facepalm: `${a.a.assetPath}/img/snoomoji/snoo_facepalm.png`,
					shrug: `${a.a.assetPath}/img/snoomoji/snoo_shrug.png`,
					scream: `${a.a.assetPath}/img/snoomoji/snoo_scream.png`,
					thoughtful: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`,
					surprised: `${a.a.assetPath}/img/snoomoji/snoo_surprised.png`,
					hearteyes: `${a.a.assetPath}/img/snoomoji/snoo_hearteyes.png`,
					tableflip: `${a.a.assetPath}/img/snoomoji/snoo_tableflip.png`,
					putback: `${a.a.assetPath}/img/snoomoji/snoo_putback.png`,
					hug: `${a.a.assetPath}/img/snoomoji/snoo_hug.png`,
					feelsbadman: `${a.a.assetPath}/img/snoomoji/snoo_feelsbadman.png`,
					feelsgoodman: `${a.a.assetPath}/img/snoomoji/snoo_feelsgoodman.png`,
					snoo: `${a.a.assetPath}/img/snoomoji/snoo.png`,
					snoo_simple_smile: `${a.a.assetPath}/img/snoomoji/snoo_simple_smile.png`,
					slightly_smiling: `${a.a.assetPath}/img/snoomoji/snoo_simple_smile.png`,
					snoo_smile: `${a.a.assetPath}/img/snoomoji/snoo_smile.png`,
					snoo_joy: `${a.a.assetPath}/img/snoomoji/snoo_joy.png`,
					snoo_tongue: `${a.a.assetPath}/img/snoomoji/snoo_tongue.png`,
					stuck_out_tongue: `${a.a.assetPath}/img/snoomoji/snoo_tongue.png`,
					snoo_wink: `${a.a.assetPath}/img/snoomoji/snoo_wink.png`,
					snoo_sad: `${a.a.assetPath}/img/snoomoji/snoo_sad.png`,
					snoo_biblethump: `${a.a.assetPath}/img/snoomoji/snoo_cry.png`,
					cry: `${a.a.assetPath}/img/snoomoji/snoo_cry.png`,
					snoo_angry: `${a.a.assetPath}/img/snoomoji/snoo_angry.png`,
					snoo_disapproval: `${a.a.assetPath}/img/snoomoji/snoo_disapproval.png`,
					snoo_trollface: `${a.a.assetPath}/img/snoomoji/snoo_trollface.png`,
					snoo_dealwithit: `${a.a.assetPath}/img/snoomoji/snoo_dealwithit.png`,
					sunglasses: `${a.a.assetPath}/img/snoomoji/snoo_dealwithit.png`,
					snoo_facepalm: `${a.a.assetPath}/img/snoomoji/snoo_facepalm.png`,
					snoo_shrug: `${a.a.assetPath}/img/snoomoji/snoo_shrug.png`,
					snoo_scream: `${a.a.assetPath}/img/snoomoji/snoo_scream.png`,
					snoo_thoughtful: `${a.a.assetPath}/img/snoomoji/snoo_thoughtful.png`,
					snoo_surprised: `${a.a.assetPath}/img/snoomoji/snoo_surprised.png`,
					flushed: `${a.a.assetPath}/img/snoomoji/snoo_surprised.png`,
					snoo_hearteyes: `${a.a.assetPath}/img/snoomoji/snoo_hearteyes.png`,
					heart_eyes: `${a.a.assetPath}/img/snoomoji/snoo_hearteyes.png`,
					snoo_tableflip: `${a.a.assetPath}/img/snoomoji/snoo_tableflip.png`,
					table_flip: `${a.a.assetPath}/img/snoomoji/snoo_tableflip.png`,
					snoo_putback: `${a.a.assetPath}/img/snoomoji/snoo_putback.png`,
					table: `${a.a.assetPath}/img/snoomoji/snoo_putback.png`,
					snoo_hug: `${a.a.assetPath}/img/snoomoji/snoo_hug.png`,
					snoo_feelsbadman: `${a.a.assetPath}/img/snoomoji/snoo_feelsbadman.png`,
					feels_bad_man: `${a.a.assetPath}/img/snoomoji/snoo_feelsbadman.png`,
					snoo_feelsgoodman: `${a.a.assetPath}/img/snoomoji/snoo_feelsgoodman.png`,
					feels_good_man: `${a.a.assetPath}/img/snoomoji/snoo_feelsgoodman.png`,
					upvote: `${a.a.assetPath}/img/snoomoji/upvote.png`,
					downvote: `${a.a.assetPath}/img/snoomoji/downvote.png`,
					karma: `${a.a.assetPath}/img/snoomoji/karma.png`,
					cake: `${a.a.assetPath}/img/snoomoji/cake.png`,
					redditgold: `${a.a.assetPath}/img/snoomoji/redditgold.png`,
					gold: `${a.a.assetPath}/img/snoomoji/redditgold.png`,
					illuminati: `${a.a.assetPath}/img/snoomoji/illuminati.png`,
					kappa: `${a.a.assetPath}/img/snoomoji/kappa.png`,
					sloth: `${a.a.assetPath}/img/snoomoji/sloth.png`,
					cat_blep: `${a.a.assetPath}/img/snoomoji/cat_blep.png`,
					pupper: `${a.a.assetPath}/img/snoomoji/pupper.png`,
					partyparrot: `${a.a.assetPath}/img/snoomoji/partyparrot.gif`,
					party_parrot: `${a.a.assetPath}/img/snoomoji/partyparrot.gif`,
					orly: `${a.a.assetPath}/img/snoomoji/orly.png`,
					o_rly_owl: `${a.a.assetPath}/img/snoomoji/orly.png`,
					party_pigeon: `${a.a.assetPath}/img/snoomoji/orly.png`,
					partypigeon: `${a.a.assetPath}/img/snoomoji/orly.png`,
					hamster: `${a.a.assetPath}/img/snoomoji/hamster.png`,
					doge: `${a.a.assetPath}/img/snoomoji/doge.png`,
					upvote_pride: `${a.a.assetPath}/img/snoomoji/upvote_pride.png`,
					snoo_heart_eyes_pride: `${a.a.assetPath}/img/snoomoji/heart_eyes_pride.png`,
					snoo_give_upvote_pride: `${a.a.assetPath}/img/snoomoji/give_upvote_pride.png`
				};
			t.a = r
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
		"./src/chat/icons/Userpic/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/helpers/chatSelector.ts"),
				u = n("./src/chat/icons/Nsfw/index.tsx"),
				h = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = n("./src/chat/selectors/experiments.ts"),
				p = n("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				b = n("./src/chat/icons/Userpic/index.m.less"),
				g = n.n(b);
			const f = l.a.i("FallbackAvatar", g.a),
				C = l.a.wrapped(f, "FallbackAvatarWrapper", g.a),
				E = l.a.wrapped(e => {
					const t = Object(o.e)(m.b),
						{
							className: n,
							height: s,
							width: r,
							userId: l
						} = e,
						{
							processingAvatarImageUrl: d
						} = a.a;
					let u = {
						height: s,
						width: r
					};
					if (t) return c.a.createElement(p.a, {
						userId: l,
						className: n,
						style: u
					});
					const b = (e => e.replace(i.Cb.Account + "_", ""))(l),
						{
							avatar: g,
							color: f
						} = (e => {
							const t = h.length,
								n = parseInt(e, 36),
								a = n % 20 + 1,
								s = Math.floor(n / 20) % t;
							return {
								avatar: ("0" + a).slice(-2),
								color: h[s]
							}
						})(b),
						C = `${d}/avatar_default_${g}_${f}.png`;
					return u = {
						...u,
						backgroundColor: f,
						backgroundImage: `url(${C})`
					}, c.a.createElement("i", {
						className: n,
						style: u
					})
				}, "SnooIcon", g.a);
			class O extends c.a.Component {
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
						name: r
					} = this.props, {
						profileImgFailed: o
					} = this.state, i = {
						height: t,
						width: n
					};
					return o || !a ? c.a.createElement(C, {
						style: i,
						className: e,
						title: `${r} ${s.fbt._("Snoovatar",null,{hk:"1jT1ZL"})}`
					}) : c.a.createElement("img", {
						style: i,
						onError: this.onError,
						className: e,
						src: a,
						alt: `${r} ${s.fbt._("Snoovatar",null,{hk:"1jT1ZL"})}`
					})
				}
			}
			const v = l.a.wrapped(O, "VoicesAvatar", g.a),
				_ = Object(d.a)({
					contact: (e, t) => e.contacts.models[t.userId],
					currentUser: e => e.user.account
				}),
				j = Object(o.b)(_);
			t.a = j(e => {
				const {
					className: t,
					contact: n,
					currentUser: a,
					height: s,
					width: r,
					userId: o
				} = e, i = o === a.id, {
					profileImg: l = "",
					name: d = ""
				} = i ? a : n || {};
				return n && n.isNSFW && !i ? c.a.createElement(u.b, {
					className: t,
					height: s,
					width: r
				}) : l ? c.a.createElement(v, {
					className: t,
					height: s,
					width: r,
					profileImg: l,
					name: d
				}) : c.a.createElement(E, {
					className: t,
					height: s,
					width: r,
					userId: o
				})
			})
		},
		"./src/chat/icons/svgs/ChatNew/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/chat/controls/Svg/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(r.a, c({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M16.8,3.2A9.619,9.619,0,0,0,.491,8.5a9.506,9.506,0,0,0,1.145,6.237l-1.181,3.9a.725.725,0,0,0,.893.907l3.99-1.143a9.5,9.5,0,0,0,4.654,1.218,9.835,9.835,0,0,0,1.551-.124A9.619,9.619,0,0,0,16.8,3.2ZM14,10.75H10.75V14H9.25V10.75H6V9.25H9.25V6h1.5V9.25H14Z"
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
		"./src/chat/icons/svgs/MenuOverflow/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/chat/controls/Svg/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(r.a, c({}, e, {
				viewBox: "0 0 14 4"
			}), s.a.createElement("g", {
				transform: "translate(-475.000000, -286.000000)"
			}, s.a.createElement("path", {
				d: "M485.479375,287.804009 C485.479375,288.796214 486.265328,289.608018 487.225938,289.608018 C488.186547,289.608018 488.9725,288.796214 488.9725,287.804009 C488.9725,286.811804 488.186547,286 487.225938,286 C486.265328,286 485.479375,286.811804 485.479375,287.804009 M480.239688,287.804009 C480.239688,288.796214 481.025641,289.608018 481.98625,289.608018 C482.946859,289.608018 483.732813,288.796214 483.732813,287.804009 C483.732813,286.811804 482.946859,286 481.98625,286 C481.025641,286 480.239688,286.811804 480.239688,287.804009 M478.493125,287.804009 C478.493125,286.811804 477.707172,286 476.746563,286 C475.785953,286 475,286.811804 475,287.804009 C475,288.796214 475.785953,289.608018 476.746563,289.608018 C477.707172,289.608018 478.493125,288.796214 478.493125,287.804009"
			})))
		},
		"./src/chat/icons/svgs/Refresh/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/chat/controls/Svg/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(r.a, c({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M18 9a1 1 0 0 1 1 1v2c0 2.757-2.243 5-5 5H5v1.5a.5.5 0 0 1-.82.384l-3-2.5a.497.497 0 0 1 0-.768l3-2.5A.5.5 0 0 1 5 13.5V15h9c1.654 0 3-1.346 3-3v-2a1 1 0 0 1 1-1zM2 11a1 1 0 0 1-1-1V8c0-2.757 2.243-5 5-5h9V1.5a.5.5 0 0 1 .82-.384l3 2.5a.497.497 0 0 1 0 .768l-3 2.5A.5.5 0 0 1 15 6.5V5H6C4.346 5 3 6.346 3 8v2a1 1 0 0 1-1 1z"
			}))
		},
		"./src/chat/icons/svgs/Trash/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/chat/controls/Svg/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(r.a, c({}, e, {
				viewBox: "0 0 16 16"
			}), s.a.createElement("path", {
				d: "M10.845 11.6c0 .22-.182.4-.407.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.225 0 .407.18.407.4v4.4zm-2.438 0c0 .22-.183.4-.407.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.224 0 .407.18.407.4v4.4zm-2.439 0c0 .22-.182.4-.406.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.224 0 .406.18.406.4v4.4zm6.426-6.8c.225 0 .406.18.406.4v8c0 .662-.547 1.2-1.219 1.2H4.42c-.672 0-1.219-.538-1.219-1.2v-8c0-.22.181-.4.407-.4h8.787zm0-2.4c.224 0 .406.18.406.4v.8c0 .22-.182.4-.407.4H3.606a.403.403 0 0 1-.406-.4v-.8c0-.22.182-.4.406-.4H6.01l.602-.666a.411.411 0 0 1 .304-.134h2.166c.116 0 .226.049.304.134l.602.666h2.404z",
				fillRule: "evenodd"
			}))
		},
		"./src/chat/models/Contact/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			}));
			var a = n("./src/lib/constants/index.ts");

			function s(e) {
				return e ? e.map(c).filter(e => !!e) : []
			}
			const r = 4;

			function c(e) {
				if (e.contact_account_id || e.id) return {
					id: e.contact_account_id || `${a.Cb.Account}_${e.id}`,
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
		"./src/chat/models/Experiment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const a = e => Object.keys(e).reduce((t, n) => {
					const a = e[n];
					return "boolean" == typeof a && (t[n] = a), "object" == typeof a && (t[n] = s(a)), t
				}, {}),
				s = e => ({
					experimentId: e.experiment_id,
					owner: e.owner,
					variant: e.variant
				}),
				r = e => {
					const {
						id: t,
						experimentName: n,
						name: a,
						version: s
					} = e;
					return {
						id: parseInt(t),
						name: n,
						variant: a || void 0,
						version: s
					}
				},
				c = e => {
					const t = {};
					for (const n of e) t[n.experimentName.toLowerCase()] = r(n);
					return t
				}
		},
		"./src/chat/models/Message/report.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			var a = n("./node_modules/lodash/sortBy.js"),
				s = n.n(a),
				r = n("./src/chat/helpers/errors.ts");
			const c = (e, t) => t && t.sender ? {
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
				} : Object(r.b)(`\n      Error reporting message: ${t&&t.messageId}.\n      The sender is unknown.\n    `),
				o = (e, t, n) => {
					if (!t || !t.sender) return [];
					const a = s()(n, ["createdAt"]),
						r = a.findIndex(({
							messageId: e
						}) => e === t.messageId),
						o = Math.max(r - 20, 0),
						i = r + 20;
					return a.slice(o, i).reduce((t, n) => {
						const a = c(e, n);
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
				return p
			}));
			var a = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/constants/theme.ts"),
				r = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/chat/constants/theme.ts"),
				o = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const {
				REDDIT: l,
				NIGHT: d
			} = s.b, u = e => r.d[e].newRedditTheme, h = {
				activity: {
					icon: {
						default: u(l).actionIcon,
						active: o.b.op,
						disable: Object(a.a)(.5, o.b.white),
						hover: Object(a.a)(.5, o.b.white),
						contrast: u(l).bodyText,
						nsfw: {
							bg: o.b.black,
							text: o.b.white
						}
					},
					text: {
						regular: u(l).bodyText,
						active: o.b.op,
						fade: Object(a.a)(.4, o.b.white),
						light: u(l).actionIcon,
						warning: o.b.warning,
						highlight: o.b.white,
						success: o.b.approved
					},
					button: {
						active: o.b.alienblue
					},
					buttonSecondary: {
						active: o.b.alienblue
					},
					send: {
						disable: Object(a.a)(.5, o.b.white),
						hover: Object(a.a)(.08, o.b.op)
					},
					checkbox: {
						checked: o.b.alienblue,
						checkmark: o.b.white,
						unchecked: u(l).body,
						uncheckedBorder: Object(a.a)(.3, o.b.white)
					},
					input: {
						border: o.b.defaultFlair,
						focusColor: o.b.white,
						focusBg: o.b.approved,
						ownerBg: u(l).line,
						color: u(l).bodyText,
						error: o.b.warning,
						channelRename: Object(a.a)(.1, o.b.white),
						background: Object(a.g)(Object(a.a)(.3, o.b.white), .1)
					},
					link: {
						staticUnderline: o.b.alienblue,
						staticText: o.b.op,
						hoverText: o.b.snoo
					},
					minimizedPortal: {
						backgroundColor: {
							unreadInitial: u(l).active,
							unreadFinal: u(l).highlight
						},
						color: {
							unreadInitial: o.b.white,
							unreadFinal: o.b.black
						}
					}
				},
				layout: {
					body: u(l).body,
					colsBorder: u(l).line,
					controlsBorder: Object(a.g)(o.b.black, .15),
					header: {
						counterBg: o.b.snoo,
						counterText: o.b.white
					},
					scrollbar: Object(a.a)(.2, o.b.white),
					scrollbarHover: Object(a.a)(.4, o.b.white)
				},
				message: {
					list: {
						item: {
							ownerBg: u(l).inactive,
							button: u(l).actionIcon,
							richItem: u(l).metaText,
							richItemBorder: u(l).postLine,
							onlineIndicator: o.b.approved,
							white: o.b.white
						}
					}
				},
				subreddit: {
					iconBg: o.b.alienblue
				},
				sidebar: {
					background: Object(a.g)(Object(a.a)(.3, o.b.white), .1),
					subreddit: {
						background: {
							active: o.b.alienblue,
							hover: u(l).canvas
						}
					},
					basic: {
						background: {
							active: o.b.alienblue,
							hover: u(l).canvas
						}
					},
					text: {
						divider: Object(a.a)(.5, o.b.white)
					},
					item: {
						hover: u(l).field,
						active: u(l).postLine,
						selected: u(l).inactive,
						text: {
							active: u(l).titleText
						}
					}
				},
				toast: {
					pending: o.b.black,
					success: o.b.approved,
					error: o.b.orangered
				},
				skeleton: {
					field: u(l).field,
					inactive: u(l).inactive
				},
				boxShadow: Object(a.g)(20, 120, 120, .11)
			}, m = {
				activity: {
					icon: {
						default: u(d).postIcon,
						active: o.b.alienblue,
						disable: Object(a.a)(.5, o.b.white),
						hover: Object(a.a)(.5, o.b.white),
						contrast: Object(a.a)(.4, u(d).bodyText),
						nsfw: {
							bg: o.b.black,
							text: o.b.white
						}
					},
					text: {
						regular: u(d).bodyText,
						active: o.b.op,
						fade: Object(a.a)(.4, o.b.white),
						light: u(d).actionIcon,
						warning: o.b.warning,
						highlight: o.b.white,
						success: o.b.approved
					},
					button: {
						active: o.b.alienblue
					},
					buttonSecondary: {
						active: o.b.lightboxHeaderText
					},
					send: {
						disable: Object(a.a)(.5, o.b.white),
						hover: Object(a.a)(.08, o.b.op)
					},
					checkbox: {
						checked: o.b.alienblue,
						checkmark: o.b.white,
						unchecked: u(d).body,
						uncheckedBorder: Object(a.a)(.3, o.b.white)
					},
					input: {
						border: o.b.defaultFlair,
						focusColor: o.b.white,
						focusBg: o.b.approved,
						ownerBg: u(d).line,
						color: u(d).bodyText,
						error: o.b.warning,
						channelRename: Object(a.a)(.1, o.b.white),
						background: Object(a.g)(Object(a.a)(.3, o.b.white), .1)
					},
					link: {
						staticUnderline: o.b.alienblue,
						staticText: o.b.op,
						hoverText: o.b.snoo
					},
					minimizedPortal: {
						backgroundColor: {
							unreadInitial: u(d).active,
							unreadFinal: u(d).highlight
						},
						color: {
							unreadInitial: o.b.white,
							unreadFinal: o.b.white
						}
					}
				},
				layout: {
					body: u(d).body,
					colsBorder: u(d).line,
					controlsBorder: Object(a.g)(o.b.white, .15),
					header: {
						counterBg: o.b.snoo,
						counterText: o.b.white
					},
					scrollbar: Object(a.a)(.2, u(d).bodyText),
					scrollbarHover: Object(a.a)(.1, u(d).bodyText)
				},
				message: {
					list: {
						item: {
							ownerBg: u(d).inactive,
							button: u(d).actionIcon,
							richItem: u(d).metaText,
							richItemBorder: i.a.metaText,
							onlineIndicator: o.b.approved,
							white: o.b.white
						}
					}
				},
				subreddit: {
					iconBg: o.b.alienblue
				},
				sidebar: {
					background: Object(a.g)(Object(a.a)(.4, o.b.white), .1),
					subreddit: {
						background: {
							active: o.b.alienblue,
							hover: Object(a.h)(.2, u(d).canvas)
						}
					},
					basic: {
						background: {
							active: o.b.alienblue,
							hover: Object(a.h)(.2, u(d).canvas)
						}
					},
					text: {
						divider: Object(a.a)(.5, o.b.white)
					},
					item: {
						hover: u(d).field,
						active: u(d).postLine,
						selected: u(d).placeholder,
						text: {
							active: u(d).titleText
						}
					}
				},
				toast: {
					pending: o.b.black,
					success: o.b.approved,
					error: o.b.orangered
				},
				skeleton: {
					field: u(d).field,
					inactive: u(d).inactive
				},
				boxShadow: Object(a.g)(20, 120, 120, 0)
			}, p = {
				[c.b.REDDIT]: h,
				[c.b.NIGHT]: m
			}
		},
		"./src/chat/models/User/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/convertToCamelCase/index.ts");
			const r = `${a.Cb.Account}_`,
				c = e => {
					const t = {};
					for (const n in e) t[n] = o({
						...e[n],
						id: n
					});
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
				const t = (e => (e && e.id && (e.id.includes(r) ? e.id = e.id : e.id = r + e.id), e))(e);
				return Object(s.a)(t)
			}
		},
		"./src/chat/reducers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Pt
			}));
			var a = n("./node_modules/redux/es/redux.js"),
				s = n("./node_modules/lodash/omit.js"),
				r = n.n(s),
				c = n("./src/chat/actions/channel/messageQuickReply.ts");
			const o = {};
			var i = (e = o, t) => {
					switch (t.type) {
						case c.MESSAGE_QUICK_REPLY_ADD_USER_ID:
							return {
								...e, [t.payload]: t.payload
							};
						case c.MESSAGE_QUICK_REPLY_REMOVE_USER_ID:
							return r()(e, t.payload);
						default:
							return e
					}
				},
				l = n("./node_modules/lodash/keyBy.js"),
				d = n.n(l),
				u = n("./src/chat/actions/channel/draftMessage.ts");
			const h = {};
			var m = (e = h, t) => {
					switch (t.type) {
						case u.b:
							return {
								...e, [t.payload.channelId]: t.payload
							};
						case u.a:
							return {
								...e, ...d()(t.payload, "channelId")
							};
						case u.c:
							return r()(e, t.payload);
						default:
							return e
					}
				},
				p = n("./src/chat/actions/channel.ts");
			var b = (e = !1, t) => {
					switch (t.type) {
						case p.s:
							return !0;
						default:
							return e
					}
				},
				g = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/uniq.js")),
				f = n.n(g),
				C = n("./src/chat/models/Channel/index.ts"),
				E = n("./src/chat/models/Channel/utils/index.ts");
			const O = {
				fetchingChannels: !1,
				hasMoreChannels: !1,
				sortedKeys: []
			};
			var v = (e = O, t) => {
				switch (t.type) {
					case p.i:
						return {
							...e, fetchingChannels: !0
						};
					case p.j:
						return {
							...e, fetchingChannels: !1
						};
					case p.a: {
						const {
							channels: n,
							hasMoreChannels: a
						} = t.payload, s = Object(E.c)(n, [C.a.Direct, C.a.Group]);
						if (!s) return e;
						const r = Object.keys(s),
							c = a && !!r.length;
						return {
							...e,
							fetchingChannels: !1,
							hasMoreChannels: c,
							sortedKeys: [...e.sortedKeys, ...r]
						}
					}
					case p.t:
					case p.n: {
						const {
							channelId: n
						} = t.payload;
						return {
							...e,
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						}
					}
					case p.x: {
						const n = t.payload.channel.channelId;
						return e.sortedKeys.indexOf(n) > -1 ? {
							...e,
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						} : e
					}
					case p.w: {
						const {
							channel: n
						} = t.payload;
						return e.sortedKeys.includes(n.channelId) ? e : {
							...e,
							sortedKeys: f()([n.channelId, ...e.sortedKeys])
						}
					}
					default:
						return e
				}
			};
			var _ = (e = !1, t) => {
				switch (t.type) {
					case p.c:
						return !1;
					case p.h:
						return !0;
					default:
						return e
				}
			};
			var j = n("./src/chat/actions/message/index.ts");
			const y = {
				fetchingChannels: !1,
				hasMoreChannels: !0,
				sortedKeys: []
			};
			var I = (e = y, t) => {
					switch (t.type) {
						case p.k:
							return {
								...e, fetchingChannels: !0
							};
						case p.l:
							return {
								...e, fetchingChannels: !1
							};
						case p.b: {
							const {
								channels: n,
								hasMoreChannels: a
							} = t.payload, s = Object(E.c)(n, [C.a.Direct, C.a.Group]);
							if (!s) return e;
							const r = Object.keys(s),
								c = a && !!r.length;
							return {
								...e,
								fetchingChannels: !1,
								hasMoreChannels: c,
								sortedKeys: [...e.sortedKeys, ...r]
							}
						}
						case p.n: {
							const {
								channelId: n
							} = t.payload;
							return {
								...e,
								sortedKeys: e.sortedKeys.filter(e => e !== n)
							}
						}
						case p.t: {
							const {
								channelId: n
							} = t.payload;
							return {
								...e,
								sortedKeys: [n, ...e.sortedKeys]
							}
						}
						case p.g: {
							const n = Object.keys(t.payload);
							return {
								...e,
								sortedKeys: f()([...n, ...e.sortedKeys])
							}
						}
						case p.u:
						case j.a: {
							const {
								channelId: n
							} = t.payload;
							return e.sortedKeys.includes(n) ? {
								...e,
								sortedKeys: f()([n, ...e.sortedKeys])
							} : e
						}
						default:
							return e
					}
				},
				x = n("./node_modules/lodash/first.js"),
				S = n.n(x),
				w = n("./node_modules/lodash/reduce.js"),
				N = n.n(w),
				k = n("./src/chat/actions/channel/dropdown.ts"),
				T = n("./src/chat/actions/message/inboxScroller.ts"),
				M = n("./src/chat/constants/channels.ts");
			const A = {};
			var U = (e = A, t) => {
				switch (t.type) {
					case p.g:
						return {
							...e, ...t.payload
						};
					case p.b:
					case p.a: {
						const {
							channels: n
						} = t.payload, a = N()(e, (e, t, a) => n[a] && t.channelState === M.b.PARTIAL && (e[a] = n[a]) && e || e, {});
						return {
							...n,
							...e,
							...a
						}
					}
					case p.p: {
						const n = t.payload,
							a = e[n];
						return !a || a && 0 === a.unreadMessageCount ? e : {
							...e,
							[n]: {
								...a,
								unreadMessageCount: 0,
								unreadMentionCount: 0
							}
						}
					}
					case p.t: {
						const {
							channelId: n
						} = t.payload, a = {
							...e[n],
							channelState: M.b.JOINED
						};
						return {
							...e,
							[a.channelId]: a
						}
					}
					case p.x: {
						const n = t.payload.channel,
							a = {
								...e[n.channelId],
								...r()(n, "hasMoreMessages", "isMessageListLoaded")
							},
							s = {
								[n.channelId]: a
							};
						return {
							...e,
							...s
						}
					}
					case p.w: {
						const n = t.payload.channel,
							a = {
								...e[n.channelId],
								...n,
								channelState: M.b.INVITED
							},
							s = {
								[n.channelId]: a
							};
						return {
							...e,
							...s
						}
					}
					case p.v: {
						const {
							channel: n
						} = t.payload;
						return {
							...e,
							[n.channelId]: n
						}
					}
					case p.n: {
						const {
							channelId: n
						} = t.payload;
						return r()(e, n)
					}
					case k.a: {
						const {
							channelId: n,
							name: a
						} = t.payload, s = {
							...e[n],
							name: a
						};
						return {
							...e,
							[n]: {
								...s
							}
						}
					}
					case j.a: {
						const n = t.payload.channelId,
							a = Number(S()(Object.keys(t.payload.message))),
							s = {
								...e[n],
								lastMessage: t.payload.message[a]
							};
						return {
							...e,
							[n]: s
						}
					}
					case j.g: {
						const n = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								fetchingMessages: !0,
								fetchingMessagesError: !1
							}
						}
					}
					case j.b:
					case j.e: {
						const {
							hasMore: n,
							channelId: a
						} = t.payload;
						return {
							...e,
							[a]: {
								...e[a],
								isMessageListLoaded: !0,
								hasMoreMessages: n,
								fetchingMessages: !1,
								fetchingMessagesError: !1
							}
						}
					}
					case j.f: {
						const n = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								fetchingMessages: !1,
								fetchingMessagesError: !0
							}
						}
					}
					case p.m: {
						const {
							channelId: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								fetchingFirstMessage: !0
							}
						}
					}
					case T.b: {
						const {
							channelId: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								hasMoreMessages: !0
							}
						}
					}
					default:
						return e
				}
			};
			const D = {
				channelId: void 0,
				isLoaded: !1
			};
			var R = (e = D, t) => {
					switch (t.type) {
						case p.q: {
							const n = {
								...e,
								isLoaded: !1
							};
							if (t.payload) {
								const e = t.payload.channelId;
								e && (n.channelId = e)
							}
							return n
						}
						case p.r:
							return {
								...e, isLoaded: !0
							};
						case p.n:
							return t.payload.channelId !== e.channelId ? e : {
								...e,
								channelId: ""
							};
						default:
							return e
					}
				},
				L = Object(a.c)({
					draftMessages: m,
					firstLoaded: b,
					invited: v,
					inviteListExpanded: _,
					isCreatingChannel: (e = !1, t) => {
						switch (t.type) {
							case p.f:
								return !0;
							case p.g:
							case p.e:
							case p.d:
								return !1;
							default:
								return e
						}
					},
					joined: I,
					models: U,
					selected: R,
					messageQuickReplyUsers: i
				}),
				P = n("./src/chat/actions/user.ts");
			var B = (e = !1, t) => {
					switch (t.type) {
						case P.b:
							return !0;
						default:
							return e
					}
				},
				H = n("./node_modules/lodash/values.js"),
				F = n.n(H),
				G = n("./src/chat/actions/sendbird/index.ts");
			const W = "search",
				V = "contacts",
				K = {};
			var z = (e = K, t) => {
				switch (t.type) {
					case G.g:
						return {
							...e, ...t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: V
							}, e), {})
						};
					case G.b:
						return {
							...t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: V
							}, e), {}), ...e
						};
					case G.d: {
						const n = t.payload.username;
						return {
							...e,
							[n]: {
								loaded: !1,
								userId: null,
								valid: !1,
								method: W
							}
						}
					}
					case G.e: {
						const {
							payload: {
								contact: n,
								username: a,
								valid: s
							}
						} = t, r = !!(s && n && n.id);
						return {
							...e,
							[a.toLowerCase()]: {
								loaded: !0,
								userId: n ? n.id : null,
								valid: r,
								method: W
							}
						}
					}
					case P.i: {
						const n = t.payload;
						return {
							...e,
							...F()(n).reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: W
							}, e), {})
						}
					}
					case P.c: {
						const {
							username: n
						} = t.payload;
						return n ? r()(e, n) : e
					}
					default:
						return e
				}
			};
			const q = {};
			var Z = (e = q, t) => {
				switch (t.type) {
					case G.g:
						return {
							...e, ...t.payload.reduce((t, n) => (t[n.id] = {
								...e[n.id],
								...n
							}, t), {})
						};
					case G.e: {
						const {
							payload: {
								contact: n
							}
						} = t;
						return n ? {
							...e,
							[n.id]: n
						} : e
					}
					case P.i:
						return {
							...e, ...t.payload || {}
						};
					case P.c: {
						const {
							userId: n
						} = t.payload;
						return n ? {
							...e,
							[n]: {
								...e[n],
								isBlocked: !0
							}
						} : e
					}
					case P.b: {
						const {
							blockedContacts: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			const Q = [];
			var J = (e = Q, t) => {
				switch (t.type) {
					case P.h:
						return [...e, t.payload];
					case P.k:
						return e.filter(e => e !== t.payload);
					case P.j:
						return Q;
					default:
						return e
				}
			};
			const X = [];
			var Y = (e = X, t) => {
					switch (t.type) {
						case G.g:
							return [...e, ...t.payload.map(e => e.id)];
						case P.c:
							return e.filter(e => e !== t.payload.userId);
						default:
							return e
					}
				},
				$ = Object(a.c)({
					fetchedBlockedUsers: B,
					knownContacts: z,
					models: Z,
					selectedUserIds: J,
					suggestedKeys: Y
				}),
				ee = n("./src/chat/actions/container.ts"),
				te = n("./src/chat/constants/container.ts");
			const ne = {
				size: te.a.EMBED
			};
			var ae = (e = ne, t) => {
					switch (t.type) {
						case ee.SIZE_CHANGED:
							if (te.b[t.payload]) return {
								...e,
								size: t.payload
							};
						default:
							return e
					}
				},
				se = n("./src/lib/env/index.ts"),
				re = n("./src/chat/actions/experiments/index.ts"),
				ce = n("./src/chat/helpers/modifyInitialData.ts"),
				oe = n("./src/chat/models/Experiment/index.ts");
			const ie = {
				api: {
					isPending: !1,
					errors: []
				},
				models: {}
			};
			var le = (e = ie, t) => {
					var n;
					switch (t.type) {
						case re.c:
							return {
								...e, api: {
									...e.api,
									isPending: !0,
									errors: []
								}
							};
						case re.b: {
							const a = Object(se.b)() ? null : null === (n = null == t ? void 0 : t.payload) || void 0 === n ? void 0 : n.queryParams,
								s = Object(ce.e)(e.models, a),
								r = Object(oe.b)(t.payload.data.experimentVariants);
							return {
								...e,
								models: {
									...e.models,
									...r,
									...s
								},
								api: {
									...e.api,
									isPending: !1
								}
							}
						}
						case re.a:
							return {
								...e, api: {
									...e.api,
									errors: t.payload.errors,
									isPending: !1
								}
							};
						default:
							return e
					}
				},
				de = n("./src/chat/actions/gifs/index.ts");
			const ue = {
				models: {},
				trending: {
					version: 1,
					provider: "",
					modelIds: [],
					api: {
						hasError: !1,
						pending: !1
					}
				},
				search: {
					inputQuery: "",
					version: 1,
					provider: "",
					models: {}
				}
			};
			var he = (e = ue, t) => {
					var n, a;
					switch (t.type) {
						case de.c:
							return {
								...e, trending: {
									...e.trending,
									api: {
										...e.trending.api,
										pending: !0,
										hasError: !1
									}
								}, search: {
									...e.search,
									inputQuery: ""
								}
							};
						case de.f:
							return {
								...e, search: {
									...e.search,
									inputQuery: t.payload.query,
									models: {
										...e.search.models,
										[t.payload.query]: {
											pageInfo: {
												...(null === (n = e.search.models[t.payload.query]) || void 0 === n ? void 0 : n.pageInfo) || {},
												currentCursor: t.payload.cursor
											},
											pending: !0,
											hasError: !1,
											ids: [...(null === (a = e.search.models[t.payload.query]) || void 0 === a ? void 0 : a.ids) || []]
										}
									}
								}
							};
						case de.d:
							return {
								...e, models: {
									...e.models,
									...d()(t.payload.models, "id")
								}, trending: {
									api: {
										pending: !1,
										hasError: !1
									},
									modelIds: [...e.trending.modelIds, ...t.payload.models.map(e => e.id)],
									provider: t.payload.provider,
									version: t.payload.version
								}
							};
						case de.g:
							return {
								...e, models: {
									...e.models,
									...d()(t.payload.gifsData.models, "id")
								}, search: {
									...e.search,
									models: {
										...e.search.models,
										[e.search.inputQuery]: {
											hasError: !1,
											pending: !1,
											pageInfo: {
												endCursor: t.payload.gifsData.pageInfo.endCursor,
												hasNextPage: t.payload.gifsData.pageInfo.hasNextPage,
												currentCursor: t.payload.cursor
											},
											ids: [...e.search.models[e.search.inputQuery].ids, ...t.payload.gifsData.models.map(e => e.id)]
										}
									}
								}
							};
						case de.b:
							return {
								...e, trending: {
									...e.trending,
									api: {
										...e.trending.api,
										pending: !1,
										hasError: !0
									}
								}
							};
						case de.e:
							return {
								...e, search: {
									...e.search,
									models: {
										...e.search.models,
										[e.search.inputQuery]: {
											...e.search.models[e.search.inputQuery],
											hasError: !0,
											pending: !1
										}
									}
								}
							};
						case de.h:
							return {
								...e, search: {
									...e.search,
									inputQuery: t.payload
								}
							};
						case de.a:
							return {
								...e, search: {
									...e.search,
									models: {
										...e.search.models,
										[t.query]: {
											...e.search.models[t.query],
											hasError: !1
										}
									}
								}
							};
						default:
							return e
					}
				},
				me = n("./node_modules/lodash/toArray.js"),
				pe = n.n(me),
				be = n("./node_modules/lodash/uniqBy.js"),
				ge = n.n(be),
				fe = n("./src/chat/actions/members.ts");
			const Ce = {};
			var Ee = (e = Ce, t) => {
				switch (t.type) {
					case fe.b: {
						const {
							channelId: n
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								fetchingMembers: !0
							}
						}
					}
					case fe.c: {
						const {
							channelId: n,
							hasMoreMembers: a
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								hasMoreMembers: a,
								fetchingMembers: !1
							}
						}
					}
					case fe.a: {
						const {
							channelId: n,
							members: a
						} = t.payload, s = pe()(a), r = e[n] && e[n].model || [], c = ge()([...r, ...s], "id");
						return {
							...e,
							[n]: {
								...e[n],
								model: c
							}
						}
					}
					case fe.d:
						return {};
					default:
						return e
				}
			};
			var Oe = (e = !1, t) => {
				switch (t.type) {
					case j.b:
					case j.l:
						return !0;
					default:
						return e
				}
			};
			const ve = {};
			var _e = (e = ve, t) => {
				switch (t.type) {
					case j.b: {
						const {
							messages: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case j.a:
						return {
							...e, ...t.payload.message
						};
					case j.i:
						return {
							...e, ...t.payload
						};
					case j.d:
					case j.j:
						return r()(e, t.payload);
					case j.e: {
						const {
							messages: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case p.o: {
						const n = t.payload;
						return {
							...r()(e, ...n)
						}
					}
					case T.a: {
						const {
							messageIdList: n
						} = t.payload;
						return r()(e, n)
					}
					case j.n: {
						const n = e[t.payload.messageId];
						return {
							...e,
							[n.messageId]: {
								...n,
								messageData: {
									...n.messageData,
									collapsedInvitePreview: {
										...n.messageData.collapsedInvitePreview,
										shouldCollapse: !1
									}
								}
							}
						}
					}
					case j.h: {
						const n = e[t.payload.messageId];
						return {
							...e,
							[n.messageId]: {
								...n,
								messageData: {
									...n.messageData,
									collapsedInvitePreview: {
										...n.messageData.collapsedInvitePreview,
										shouldShowReportPrompt: !1
									}
								}
							}
						}
					}
					default:
						return e
				}
			};
			const je = {};
			var ye = (e = je, t) => {
					var n, a;
					switch (t.type) {
						case j.i: {
							const s = F()(t.payload);
							if (s.length && (null === (a = null === (n = s[0]) || void 0 === n ? void 0 : n.messageData) || void 0 === a ? void 0 : a.clientMessageId)) {
								const t = s[0].messageData.clientMessageId;
								return {
									...r()(e, t)
								}
							}
							return e
						}
						case j.c: {
							const n = t.payload;
							return {
								...e,
								[n.clientMessageId]: n
							}
						}
						case j.m: {
							const {
								clientMessageId: n,
								toggle: a
							} = t.payload;
							if (n) {
								const t = e[n];
								return {
									...e,
									[n]: {
										...t,
										error: a
									}
								}
							}
							return {
								...e
							}
						}
						case j.a:
						case j.k: {
							const {
								clientMessageId: n
							} = t.payload;
							return {
								...n ? r()(e, n) : e
							}
						}
						default:
							return e
					}
				},
				Ie = n("./src/chat/actions/message/richUnit.ts");
			const xe = {
					posts: {},
					userPosts: {},
					comments: {},
					subreddits: {},
					dataReceived: !1
				},
				Se = e => e.length ? e.reduce((e, t) => (null == t ? void 0 : t.id) ? {
					...e,
					[t.id.toLowerCase()]: t
				} : e, {}) : {};
			var we = (e = xe, t) => {
					var n, a, s, r;
					switch (t.type) {
						case Ie.b:
							return {
								...e, posts: {
									...e.posts,
									...Se((null === (n = t.payload) || void 0 === n ? void 0 : n.posts) || {})
								}, userPosts: {
									...e.userPosts,
									...Se((null === (a = t.payload) || void 0 === a ? void 0 : a.userPosts) || {})
								}, comments: {
									...e.comments,
									...Se((null === (s = t.payload) || void 0 === s ? void 0 : s.comments) || {})
								}, subreddits: {
									...e.subreddits,
									...Se((null === (r = t.payload) || void 0 === r ? void 0 : r.subreddits) || {})
								}, dataReceived: !0
							};
						case Ie.a:
							return {
								...e, dataReceived: !1
							};
						default:
							return e
					}
				},
				Ne = n("./node_modules/lodash/isEqual.js"),
				ke = n.n(Ne),
				Te = n("./src/chat/actions/message/unreadCount.ts");
			const Me = {
				basicChannelCount: 0,
				subredditChannelCount: 0,
				subredditMentionCount: 0
			};
			var Ae = (e = Me, t) => {
					switch (t.type) {
						case Te.a:
							return ke()(e, t.payload) ? e : {
								...e,
								...t.payload
							}
					}
					return e
				},
				Ue = Object(a.c)({
					firstLoaded: Oe,
					models: _e,
					pending: ye,
					unread: Ae,
					richUnits: we
				}),
				De = n("./src/chat/reducers/meta/index.ts"),
				Re = n("./src/chat/reducers/platform/index.ts"),
				Le = n("./src/chat/reducers/promos/index.ts"),
				Pe = n("./src/chat/actions/sendbird/config.ts");
			const Be = {
				maxMessageLength: void 0
			};
			var He = (e = Be, t) => {
				switch (t.type) {
					case Pe.b:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Fe = {
				host: void 0
			};
			var Ge = (e = Fe, t) => {
					switch (t.type) {
						case Pe.c:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				We = n("./src/chat/actions/sendbird/sdk.ts"),
				Ve = n("./src/chat/constants/sendbird.ts");
			const Ke = {
				connectionStatus: Ve.b.Closed,
				initialized: !1
			};
			var ze = (e = Ke, t) => {
				switch (t.type) {
					case We.a:
						return {
							...e, initialized: !0, connectionStatus: Ve.b.Open
						};
					case We.c: {
						const n = {
							...t.payload
						};
						return {
							...e,
							error: n,
							connectionStatus: Ve.b.Closed
						}
					}
					case We.b:
						return {
							...e, connectionStatus: Ve.b.Closed
						};
					case We.d: {
						const {
							connectionStatus: n
						} = t.payload;
						return {
							...e,
							connectionStatus: n
						}
					}
					default:
						return e
				}
			};
			const qe = {
				expires: void 0,
				token: void 0,
				active: !1
			};
			var Ze = (e = qe, t) => {
					switch (t.type) {
						case G.h:
							return {
								...e, ...t.payload
							};
						case G.a:
							return {
								...e, active: !0
							};
						case G.c:
							return {
								...e, active: !1
							};
						default:
							return e
					}
				},
				Qe = Object(a.c)({
					globalSettings: He,
					proxy: Ge,
					session: Ze,
					sdk: ze
				}),
				Je = n("./src/chat/actions/sidebar.ts");
			const Xe = n("./src/chat/constants/sidebar.ts").a.DirectChannels;
			var Ye = (e = Xe, t) => {
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
			const $e = {};
			var et = (e = $e, t) => {
				switch (t.type) {
					case Je.a: {
						const {
							channelId: n,
							tabIndex: a
						} = t.payload;
						return {
							...e,
							[a]: n
						}
					}
					default:
						return e
				}
			};
			const tt = {
				isSidebarVisible: !1
			};
			var nt = (e = tt, t) => {
					switch (t.type) {
						case Je.c:
							return {
								...e, isSidebarVisible: t.payload
							};
						default:
							return e
					}
				},
				at = Object(a.c)({
					activeIndex: Ye,
					lastChannelIdPerTab: et,
					sideBarAppearance: nt
				}),
				st = n("./src/chat/actions/sitewideRules.ts");
			const rt = [];
			var ct = (e = rt, t) => {
					switch (t.type) {
						case st.a:
							return t.payload;
						default:
							return e
					}
				},
				ot = n("./src/chat/reducers/subscribe.ts"),
				it = n("./src/chat/actions/theme.ts"),
				lt = n("./src/chat/constants/theme.ts"),
				dt = n("./src/chat/models/Theme/index.ts");
			const ut = {
				current: dt.a[lt.a],
				cached: {}
			};
			var ht = (e = ut, t) => {
					switch (t.type) {
						case it.THEME_CHANGED:
							return e.current = dt.a[t.payload.themeKey], {
								...e
							};
						default:
							return e
					}
				},
				mt = n("./src/chat/actions/toast.ts");
			var pt = (e = null, t) => {
					switch (t.type) {
						case mt.a:
							return null;
						case mt.b: {
							const {
								toast: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				bt = n("./src/chat/actions/platform.ts"),
				gt = n("./src/chat/actions/tooltip.ts");
			var ft = (e = null, t) => {
					switch (t.type) {
						case gt.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case gt.b:
						case bt.a:
							return null;
						default:
							return e
					}
				},
				Ct = n("./src/chat/actions/typingIndicator.ts");
			const Et = {
				usernames: []
			};
			var Ot = (e = Et, t) => {
					switch (t.type) {
						case Ct.a: {
							const {
								usernames: n
							} = t.payload;
							return function(e, t) {
								if (e === t) return !0;
								if (0 === e.length && 0 === t.length) return !0;
								if (0 === e.length && t.length > 0) return !1;
								if (e.length > 0 && 0 === t.length) return !1;
								if (1 === e.length && 1 === t.length) return e[0] === t[0];
								if (2 === e.length && 2 === t.length) return e[0] === t[0] && e[1] === t[1];
								if (3 === e.length && 3 === t.length) return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
								return ke()(e, t)
							}(n, e.usernames) ? e : {
								usernames: n
							}
						}
						case p.q:
							return {
								usernames: []
							};
						default:
							return e
					}
				},
				vt = n("./src/lib/reducers/addAuthentication/index.ts");
			var _t = Object(vt.a)((e = null, t) => {
				switch (t.type) {
					case P.a: {
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
							isNSFW: t.payload.isNSFW
						}
					}
					default:
						return e
				}
			}, null);
			const jt = {
				userSubredditChatEnabled: !1
			};
			var yt = (e = jt, t) => {
				switch (t.type) {
					case G.f:
					case Pe.a: {
						const {
							userSubredditChatEnabled: n
						} = t.payload || jt;
						return {
							...e,
							...t.payload,
							userSubredditChatEnabled: e.userSubredditChatEnabled || n
						}
					}
				}
				return e
			};
			const It = {};
			var xt = (e = It, t) => {
				switch (t.type) {
					case P.d:
						return t.payload;
					default:
						return e
				}
			};
			const St = n("./src/lib/constants/index.ts").z;
			var wt = Object(vt.a)((e = St, t) => (t.type, e), St);
			const Nt = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var kt = (e = Nt, t) => {
				switch (t.type) {
					case P.e:
						return t.payload;
					default:
						return e
				}
			};
			const Tt = {
				globalTheme: lt.a
			};
			var Mt = (e = Tt, t) => {
				switch (t.type) {
					case it.THEME_CHANGED: {
						const {
							themeKey: n
						} = t.payload;
						return {
							...e,
							globalTheme: n
						}
					}
					default:
						return e
				}
			};
			var At = (e = "", t) => {
					switch (t.type) {
						case P.f:
							return t.payload;
						default:
							return e
					}
				},
				Ut = n("./src/chat/actions/session.ts");
			var Dt = (e = null, t) => {
				switch (t.type) {
					case Ut.a:
					case Ut.c:
						return t.payload;
					case Ut.b:
						return null;
					default:
						return e
				}
			};
			var Rt = (e = "", t) => {
					switch (t.type) {
						case P.g:
							return t.payload;
						default:
							return e
					}
				},
				Lt = Object(a.c)({
					account: _t,
					chatExperiments: yt,
					experiments: xt,
					language: wt,
					loid: kt,
					prefs: Mt,
					reddaid: At,
					session: Dt,
					sessionTracker: Rt
				});
			const Pt = {
				channels: L,
				contacts: $,
				container: ae,
				experiments: le,
				gifs: he,
				members: Ee,
				messages: Ue,
				meta: De.b,
				platform: Re.b,
				promos: Le.b,
				sendbird: Qe,
				sidebar: at,
				sitewideRules: ct,
				themes: ht,
				toast: pt,
				tooltipId: ft,
				typingIndicator: Ot,
				user: Lt,
				lastAction: ot.a
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
			t.b = (e = s, t) => {
				switch (t.type) {
					case a.META_RECEIVED:
						return t.payload;
					case a.SET_EXTERNAL_DATA:
						return e.externalData = {
							...t.payload
						}, {
							...e
						};
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
			var a = n("./node_modules/history/esm/history.js"),
				s = n("./src/chat/actions/platform.ts");
			const r = {
				currentPage: null,
				referrers: {},
				metas: {}
			};
			t.b = (e = r, t) => {
				switch (t.type) {
					case s.a: {
						if (!t.payload) return e;
						const n = e.currentPage,
							s = t.payload,
							{
								routeMatch: r,
								location: c
							} = s,
							{
								key: o
							} = c;
						if (void 0 === o) return e;
						const i = Object(a.e)(c),
							l = r ? ((e, t, n, a) => {
								const {
									action: s,
									...r
								} = n.route;
								return {
									key: e,
									locationState: a.state,
									meta: n.route.meta,
									queryParams: n.match.queryParams,
									routeMatch: {
										...n,
										route: r
									},
									status: 200,
									url: t,
									urlParams: n.match.params
								}
							})(o, i, r, c) : ((e, t) => ({
								key: e,
								locationState: {},
								queryParams: {},
								routeMatch: null,
								status: 404,
								url: t,
								urlParams: {}
							}))(o, i);
						let {
							referrers: d
						} = e;
						if ("PUSH" === s.action) {
							const e = n && n.url || "";
							d = {
								...d,
								[o]: e
							}
						}
						return {
							...e,
							referrers: d,
							currentPage: l
						}
					}
					case s.c: {
						if (!t.payload) return e;
						const {
							key: n,
							title: a,
							description: s,
							icon: r,
							type: c
						} = t.payload;
						return {
							...e,
							metas: {
								...e.metas,
								[n]: {
									description: s,
									icon: r,
									title: a,
									type: c
								}
							}
						}
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
			t.b = (e = s, t) => {
				switch (t.type) {
					case a.a: {
						const n = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					case a.b: {
						const n = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					default:
						return e
				}
			}
		},
		"./src/chat/routes/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/chat/actions/page.ts"),
				c;
			! function(e) {
				e.Invite = "invite", e.Message = "message", e.User = "user"
			}(c || (c = {}));
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
					action: r.b,
					chunk: s.p.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Gb.CHAT
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
					action: r.b,
					chunk: s.p.CHAT_EMPTY,
					component: l,
					exact: !0,
					meta: {
						name: s.Gb.CHAT_EMPTY
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
					action: r.c,
					chunk: s.p.CHAT_MINIMIZE,
					component: u,
					exact: !0,
					meta: {
						name: s.Gb.CHAT_MINIMIZE
					},
					path: "/chat/minimize/"
				},
				m = ["/chat/", "/chat/channel/:action(create)/", "/chat/channel/:channelId/:action(block|hide|delete|invite|invited|kick|members|leave|nsfw|report)?/:attr(invite|message|user)?/:attrId?"],
				p = {
					action: r.a,
					chunk: s.p.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Gb.CHAT
					},
					path: m
				},
				b = ["/chat/user_id/:userIds/"],
				g = {
					action: r.d,
					chunk: s.p.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Gb.CHAT
					},
					path: b
				};
			t.b = [i, d, h, p, g]
		},
		"./src/chat/routes/index.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/constants/index.ts");
			var s = {
				action: n("./src/chat/actions/page.ts").b,
				chunk: a.p.CHAT,
				exact: !0,
				meta: {
					name: a.Gb.CHAT
				},
				path: "/chat/*"
			};
			const r = [...n("./src/chat/routes/chat.ts").b, s];
			t.a = r
		},
		"./src/chat/selectors/contacts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return c
			})), n.d(t, "i", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "f", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/values.js"),
				s = n.n(a),
				r = n("./src/chat/selectors/members.ts");
			const c = e => e.contacts.suggestedKeys.map(t => e.contacts.models[t]),
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
				p = e => e.contacts.selectedUserIds,
				b = e => p(e).length,
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
					const s = Object(r.c)(e, t);
					return s ? {
						name: t,
						id: s.id
					} : void 0
				}
		},
		"./src/chat/selectors/experiments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var a, s = n("./node_modules/reselect/es/index.js");
			! function(e) {
				e.SubredditChat = "chat_subreddit", e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux", e.EconRpanAvatar = "web_econ_avatar_in_rpan"
			}(a || (a = {}));
			var r;
			! function(e) {
				e.InputOnly = "input_only", e.InputAndGifs = "input_and_gifs"
			}(r || (r = {}));
			const c = e => !!e.user.experiments[a.SubredditChat] || !!e.user.chatExperiments.userSubredditChatEnabled,
				o = e => !!e.user.experiments[a.EconRpanAvatar],
				i = Object(s.a)(e => e.experiments.models, e => {
					var t;
					return (null === (t = e.chat_media_giphy) || void 0 === t ? void 0 : t.variant) === r.InputAndGifs
				})
		},
		"./src/chat/selectors/gifs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "f", (function() {
				return g
			}));
			var a = n("./node_modules/lodash/values.js"),
				s = n.n(a),
				r = n("./node_modules/reselect/es/index.js");
			const c = e => e.gifs,
				o = Object(r.a)(c, e => s()(e.models)),
				i = Object(r.a)(c, e => e.search.inputQuery),
				l = Object(r.a)(c, i, (e, t) => {
					var n;
					const a = null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.ids;
					return (null == a ? void 0 : a.length) ? a : []
				}),
				d = Object(r.a)(c, e => Boolean(e.trending.modelIds.length)),
				u = Object(r.a)(c, l, i, (e, t, n) => !n || n && !t.length && !e.search.models[n].pending ? e.trending.modelIds : n && t.length ? t : n && !t.length && e.search.models[n].pending ? [] : void 0),
				h = Object(r.a)(o, u, (e, t) => {
					if (t) return e.filter(e => t.includes(e.id))
				}),
				m = Object(r.a)(c, i, (e, t) => {
					var n;
					let a = e.trending.api.pending;
					return t && (a = null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.pending), a
				}),
				p = Object(r.a)(c, i, (e, t) => {
					var n;
					return t ? null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.hasError : e.trending.api.hasError
				}),
				b = Object(r.a)(c, i, (e, t) => {
					var n;
					return null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.pageInfo.hasNextPage
				}),
				g = Object(r.a)(c, i, (e, t) => Boolean(t && e.search.models[t].pending && e.search.models[t].ids.length))
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
				return p
			})), n.d(t, "c", (function() {
				return b
			}));
			var a = n("./node_modules/lodash/sortBy.js"),
				s = n.n(a),
				r = n("./src/chat/models/Channel/index.ts"),
				c = n("./src/chat/selectors/channels.ts");
			const o = e => {
					const t = Object(c.t)(e);
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
					isModerator: Object(r.c)(t.role),
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
						r = [],
						c = [];
					e.forEach(e => {
						e.isModerator ? t.push(e) : e.isNSFW && e.isBlockedByMe ? a.push(e) : e.isNSFW ? r.push(e) : e.isBlockedByMe ? n.push(e) : c.push(e)
					});
					const o = e => e.name && e.name.toLowerCase();
					return [...s()(t, o), ...s()(n, o), ...s()(a, o), ...s()(r, o), ...s()(c, o)]
				},
				p = e => {
					const t = o(e);
					return (null == t ? void 0 : t.model) || []
				},
				b = (e, t) => {
					const n = o(e);
					return n && n.model && n.model.find(e => e.name === t)
				}
		},
		"./src/chat/selectors/platform.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return l
			}));
			var a = n("./src/chat/constants/sidebar.ts");
			const s = e => e.platform && e.platform.currentPage && e.platform.currentPage.urlParams.channelId,
				r = e => e.platform && e.platform.currentPage && e.platform.currentPage.urlParams.action,
				c = e => e.platform && e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name,
				o = e => a.a.DirectChannels,
				i = e => {
					var t, n;
					return null === (n = null === (t = e.platform) || void 0 === t ? void 0 : t.currentPage) || void 0 === n ? void 0 : n.queryParams
				},
				l = e => !(!s(e) || r(e))
		},
		"./src/chat/selectors/sendbird.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return o
			}));
			const a = e => e.sendbird.sdk.connectionStatus,
				s = e => e.sendbird.sdk.initialized,
				r = e => e.sendbird.proxy.host,
				c = e => e.sendbird.session,
				o = e => e.sendbird.session.active
		},
		"./src/chat/selectors/sidebar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			n("./src/chat/constants/sidebar.ts");
			const a = e => e.sidebar.sideBarAppearance.isSidebarVisible
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
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			}));
			var a = n("./node_modules/js-cookie/src/js.cookie.js"),
				s = n.n(a),
				r = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				c = n.n(r),
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
						} = c.a.parse(t);
						return {
							domain: e,
							url: t
						}
					}
				},
				p = e => ({}),
				b = e => e.meta.externalData.post,
				g = e => e.meta.externalData.comment,
				f = e => e.meta.externalData.profile
		},
		"./src/chat/selectors/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = e => t => t.tooltipId === e
		},
		"./src/chat/singleton/SendbirdSDK.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return D
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/config.ts"),
				s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				c = n("./node_modules/sendbird/SendBird.min.js"),
				o = n.n(c),
				i = n("./node_modules/timers-browserify/main.js"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/sentry/index.ts"),
				u = n("./src/chat/actions/channel.ts"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				m = n("./src/chat/constants/channels.ts"),
				p = n("./src/chat/helpers/urls/index.ts"),
				b = n("./src/chat/selectors/channels.ts");
			const g = e => async (t, n) => {
				const a = n(),
					s = Object(b.s)(a);
				if (t(Object(u.L)({
						channelId: e
					})), s && s.channelId === e) {
					const n = Object(p.getRedirectURL)(Object(p.channelAction)(e, m.a.DENY));
					t(Object(h.b)(n))
				}
			};
			var f = n("./src/chat/selectors/user.ts");
			const C = (e, t) => async (n, a) => {
				const s = a(),
					{
						channelId: r
					} = e,
					c = Object(b.t)(s),
					o = Object(f.a)(s);
				if (t === o && (n(Object(u.K)(r)), r === c)) {
					const e = Object(p.getRedirectURL)(Object(p.channelAction)(r, m.a.DENY));
					n(Object(h.b)(e))
				}
			};
			var E = n("./src/chat/actions/message/index.ts"),
				O = n("./src/chat/actions/sendbird/index.ts"),
				v = n("./src/chat/actions/sendbird/sdk.ts"),
				_ = n("./src/chat/actions/toast.ts"),
				j = n("./src/chat/actions/typingIndicator.ts"),
				y = n("./src/chat/constants/batchSizes.ts"),
				I = n("./src/chat/constants/messages.ts"),
				x = n("./src/chat/constants/sendbird.ts"),
				S = n("./src/chat/constants/toast.ts"),
				w = n("./src/chat/helpers/errors.ts"),
				N = n("./src/chat/models/Channel/index.ts"),
				k = n("./src/chat/models/Channel/utils/index.ts"),
				T = n("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				M = n("./src/chat/models/Message/index.ts"),
				A = n("./src/chat/models/User/member.ts");
			const {
				sendbirdAppId: U
			} = a.a;
			const D = new class {
				constructor() {
					this.dispatch = r.a, this.channels = {}, this.channelUniqueHandlerID = [], this.connectionUniqueHandlerID = [], this.switchChannel = (e, t) => {
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
						this.dispatch = a, this.self.connect(n, t, `https://${e}`, `wss://${e}`, (e, t) => {
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
					})), this.dispatch(Object(O.m)())
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
						this.dispatch(Object(v.h)(t)), this.dispatch(Object(_.e)(n))
					}, this.self.addConnectionHandler("CONNECTION_CHANGE", e), this.connectionUniqueHandlerID.push("CONNECTION_CHANGE")
				}
				onReconnectSucceeded() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: x.b.Open
						};
					e.onReconnectSucceeded = () => {
						this.dispatch(Object(v.h)(t)), this.dispatch(Object(_.e)({
							toast: S.a.ConnectionOpen
						})), Object(i.setTimeout)(() => this.dispatch(Object(_.d)()), 3 * l.Kb);
						this.dispatch(Object(E.t)(!0)), this.dispatch(Object(u.E)())
					}, this.self.addConnectionHandler("RECONNECT_SUCCEEDED", e), this.connectionUniqueHandlerID.push("RECONNECT_SUCCEEDED")
				}
				onReconnectFailed() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: x.b.Closed
						};
					e.onReconnectFailed = () => {
						this.dispatch(Object(v.h)(t)), this.dispatch(Object(_.e)({
							toast: S.a.ConnectionClosed
						}))
					}, this.self.addConnectionHandler("RECONNECT_FAILED", e), this.connectionUniqueHandlerID.push("RECONNECT_FAILED")
				}
				onReceiveInvite() {
					const e = new this.self.ChannelHandler;
					e.onUserReceivedInvitation = e => {
						const t = Object(N.e)(e);
						this.dispatch(Object(u.R)(t))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_INVITE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_INVITE")
				}
				onReceiveMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageReceived = (e, t) => {
						const n = Object(N.e)(e);
						this.dispatch(Object(u.Q)(n));
						const a = Object(M.c)(t);
						a && this.dispatch(Object(E.v)(a))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_MESSAGE")
				}
				onUpdateMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageUpdated = (e, t) => {
						const n = Object(N.e)(e);
						this.dispatch(Object(u.Q)(n));
						const a = Object(M.c)(t);
						a && this.dispatch(Object(E.v)(a))
					}, this.self.addChannelHandler("UPDATE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("UPDATE_CHANNEL_MESSAGE")
				}
				onDeleteMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageDeleted = (e, t) => {
						this.dispatch(Object(E.w)(t))
					}, this.self.addChannelHandler("DELETE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("DELETE_CHANNEL_MESSAGE")
				}
				onTypingStatusUpdated() {
					const e = new this.self.ChannelHandler;
					e.onTypingStatusUpdated = e => {
						const t = Object(T.a)(e.url),
							n = e.getTypingMembers().map(e => e.nickname);
						this.dispatch(Object(j.b)({
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
							const t = Object(N.e)(e);
							this.dispatch(Object(u.R)(t, !0))
						}, this.self.addChannelHandler(s, a), this.channelUniqueHandlerID.push(s)
					})
				}
				onChannelChanged() {
					const e = new this.self.ChannelHandler;
					e.onChannelChanged = e => {
						const t = Object(N.e)(e);
						this.dispatch(Object(u.R)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_CHANGED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_CHANGED")
				}
				onChannelDeleted() {
					const e = new this.self.ChannelHandler;
					e.onChannelDeleted = e => {
						const t = Object(T.a)(e);
						this.dispatch(g(t))
					}, this.self.addChannelHandler("ON_CHANNEL_DELETED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_DELETED")
				}
				onChannelMuted() {
					const e = new this.self.ChannelHandler;
					e.onUserMuted = e => {
						const t = Object(N.e)(e);
						this.dispatch(Object(u.R)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_MUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_MUTED")
				}
				onChannelUnmuted() {
					const e = new this.self.ChannelHandler;
					e.onUserUnmuted = e => {
						const t = Object(N.e)(e);
						this.dispatch(Object(u.R)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNMUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNMUTED")
				}
				onChannelLocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelFrozen = e => {
						const t = Object(N.e)(e);
						this.dispatch(Object(u.R)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_LOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_LOCKED")
				}
				onChannelUnlocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelUnfrozen = e => {
						const t = Object(N.e)(e);
						this.dispatch(Object(u.R)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNLOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNLOCKED")
				}
				updatePartialChannelModel(e, t) {
					const {
						PARTIAL: n,
						UNSORTED: a
					} = m.b;
					t === n && e.channelState === a && (e.channelState = n, this.dispatch(Object(u.S)(e)))
				}
				getChannelByChannelId(e) {
					return new Promise((t, n) => {
						const a = Object(k.a)(e);
						this.self.GroupChannel.getChannel(a, (e, a) => {
							a ? (Object(w.b)("Error: can't get channel by id"), n(a)) : t(e)
						})
					})
				}
				addChannelModelByChannelId(e) {
					return new Promise((t, n) => {
						this.getChannelByChannelId(e).then(e => {
							if (!e) return t();
							const n = Object(N.e)(e);
							if (!n) return t();
							this.dispatch(Object(u.S)(n)), t(n)
						}).catch(e => {
							Object(w.b)("Error: can't add channel by id"), n(e)
						})
					})
				}
				enterChannel(e, t, n) {
					return new Promise(a => {
						const s = (e = {}) => ({
							data: e
						});
						if (!this.isConnected()) return a(s());
						const {
							channelId: r
						} = e, c = this.channels[r];
						if (c && !t) return this.switchChannel(c, n).then(([e]) => a(s({
							messageListData: e
						}))).catch(() => a(s()));
						this.getChannelByChannelId(r).then(t => {
							if (!t) return a(s());
							this.channels[r] = t;
							const c = Object(N.e)(t);
							this.updatePartialChannelModel(c, e.channelState), this.switchChannel(t, n).then(([e]) => a(s({
								messageListData: e
							}))).catch(() => a(s()))
						}).catch(() => a(s()))
					})
				}
				updateChannel({
					name: e,
					coverUrl: t,
					data: n
				}) {
					return new Promise((a, s) => {
						this.channel ? this.channel.updateChannel(e, t, n, (e, t) => e ? a() : s(t)) : s("No channel selected")
					})
				}
				hideChannel() {
					return new Promise(e => {
						if (this.channel) {
							const t = !1,
								n = !0;
							this.channel.hide(t, n, e)
						} else e()
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
						const n = Object(N.e)(e);
						n && this.dispatch(C(n, t.userId))
					}, this.self.addChannelHandler("CHANNEL_USER_KICKED", e), this.channelUniqueHandlerID.push("CHANNEL_USER_KICKED")
				}
				getExistingChannels(e) {
					return new Promise((t, n) => {
						let a;
						if (e === m.b.INVITED ? this.channelListQueryInvited ? a = this.channelListQueryInvited : (this.channelListQueryInvited = this.self.GroupChannel.createMyGroupChannelListQuery(), a = this.channelListQueryInvited) : e === m.b.JOINED && (this.channelListQueryJoined ? a = this.channelListQueryJoined : (this.channelListQueryJoined = this.self.GroupChannel.createMyGroupChannelListQuery(), a = this.channelListQueryJoined)), a)
							if (a.includeEmpty = !0, a.limit = y.a.Channels, a.order = m.d.LATEST_MESSAGE, a.memberStateFilter = e === m.b.INVITED ? m.g.INVITED : m.g.JOINED, a.superChannelFilter = "all", a.customTypesFilter = ["direct", "group"], a.hasNext) {
								const e = a._token;
								a.next((n, s) => {
									if (!s && a) {
										let s = a.hasNext;
										const r = a._token;
										a && e && r && e === r && (s = !1, d.c.withScope(t => {
											t.setExtra("info", {
												query: JSON.stringify(a),
												currentNextToken: e,
												undatedNextToken: r
											}), d.c.captureMessage("Chat paging request infinite looping!")
										})), t({
											channels: n,
											hasMoreChannels: s
										})
									} else 800170 !== s.code && t()
								})
							} else t();
						else n()
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
				searchMemberByName(e, t = !1) {
					return new Promise((n, a) => {
						if (!this.channel) return a(new Error("this.channel is null or undefined"));
						this.memberListQuery = this.channel.createMemberListQuery(), this.memberListQuery ? (this.memberListQuery.nicknameStartsWithFilter = e, this.memberListQuery.next((a, s) => {
							const r = Object(A.a)(a),
								c = r.filter(n => t && n && n.name === e || !t && n);
							r.length && this.dispatch(Object(O.i)(r)), n(c)
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
									const t = Object(M.c)(e);
									t && (n[t.messageId] = t)
								}), t({
									messages: n,
									hasMore: a
								})
							} else Object(w.b)(`Error with getting previous messages from Sendbird: ${a}`), n()
						})) : (Object(w.b)("Sendbird channel does not exist"), n())
					})
				}
				addMessage(e, t, n = []) {
					return new Promise((a, s) => {
						if (this.channel) {
							const r = new(0, this.self.UserMessageParams);
							r.data = t, r.message = e, n && n.length && (r.mentionType = I.b.USERS, r.mentionedUserIds = n), this.channel.sendUserMessage(r, (e, t) => {
								if (t) Object(w.b)(`Error with sending the message to Sendbird: ${t}`), s(t);
								else {
									const t = Object(M.c)(e);
									if (t && t.messageType === I.d.USER) return a(t);
									Object(w.b)(`Unsupported message type: ${t&&t.messageType}`), s()
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
								n ? Object(w.b)(`Error with deleting the message on Sendbird: ${n}`) : t(e)
							})
						}
					})
				}
				getFirstMessage() {
					return new Promise((e, t) => {
						this.channel ? this.channel.getNextMessagesByTimestamp(0, !0, 1, !0, "", "", (t, n) => {
							n ? Object(w.b)(`Error with getting first message from Sendbird: ${n}`) : e(t)
						}) : (Object(w.b)("Sendbird channel does not exist"), t())
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
							r = !t;
						s && s.setPushPreference(r, (e, t) => t ? a(t) : n())
					})
				}
				resetPreviousMessageListQuery() {
					return new Promise((e, t) => {
						this.channel ? (this.createPreviousMessageListQuery(), e()) : t("this.channel does not exist")
					})
				}
			};
			t.a = D
		},
		"./src/chat/tracking/events/chatView.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			}));
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/selectors/telemetry.ts"),
				r = n("./src/chat/tracking/fields/chat.ts"),
				c = n("./src/chat/tracking/fields/common.ts"),
				o = n("./src/chat/constants/messages.ts"),
				i = n("./src/chat/selectors/messages.ts");
			const l = (e, t) => {
				var n, a, s, r, c;
				const l = Object(i.e)(e, t);
				return l && l.type === o.c.GIF ? {
					id: null === (n = l.gif) || void 0 === n ? void 0 : n.id,
					caption: null === (a = l.gif) || void 0 === a ? void 0 : a.title,
					url: null === (s = l.gif) || void 0 === s ? void 0 : s.url,
					width: null === (r = l.gif) || void 0 === r ? void 0 : r.width,
					height: null === (c = l.gif) || void 0 === c ? void 0 : c.height
				} : {}
			};
			var d = n("./src/chat/tracking/sendEvent.ts");
			const u = e => Object(d.a)({
					noun: "chat",
					source: a.b.ChatView,
					action: a.a.View,
					chat: {
						...Object(r.A)(e),
						...Object(r.q)(e),
						...Object(r.g)(e),
						...Object(r.s)(e),
						...Object(r.l)(e),
						...Object(r.y)(e)
					},
					...Object(c.a)(e)
				}),
				h = (e, t) => {
					Object(d.a)({
						noun: "chat_message",
						source: a.b.ChatView,
						action: a.a.Submit,
						chat: {
							...Object(r.A)(e),
							...Object(r.q)(e),
							...Object(r.g)(e),
							...Object(r.s)(e, 0),
							...Object(r.o)(e, t),
							...Object(r.x)(e, t),
							...Object(r.y)(e)
						},
						media: {
							...l(e, t)
						},
						...Object(c.a)(e)
					})
				},
				m = (e, t, n) => {
					Object(d.a)({
						noun: "chat_message_failed",
						source: a.b.ChatView,
						action: a.a.View,
						chat: {
							...Object(r.A)(e),
							...Object(r.q)(e),
							...Object(r.g)(e),
							...Object(r.s)(e, 0),
							...Object(r.t)(e, t),
							...Object(r.x)(e),
							...Object(r.y)(e),
							...Object(r.m)(e, t)
						},
						...Object(c.a)(e),
						actionInfo: {
							reason: n,
							...Object(s.a)(e)
						}
					})
				},
				p = (e, t, n) => {
					Object(d.a)({
						noun: "report_message",
						source: a.b.ChatView,
						action: a.a.Submit,
						chat: {
							...Object(r.A)(e),
							...Object(r.q)(e),
							...Object(r.g)(e),
							...Object(r.s)(e, 0),
							...Object(r.n)(t),
							...Object(r.o)(e, t),
							...Object(r.v)(n),
							...Object(r.x)(e, t),
							...Object(r.y)(e)
						},
						...Object(c.a)(e)
					})
				},
				b = e => {
					Object(d.a)({
						noun: "history",
						source: a.b.ChatView,
						action: a.a.View,
						chat: {
							...Object(r.A)(e),
							...Object(r.q)(e),
							...Object(r.g)(e),
							...Object(r.y)(e)
						},
						...Object(c.a)(e)
					})
				},
				g = (e, t, n, o) => {
					Object(d.a)({
						noun: "quick_response",
						source: a.b.ChatView,
						action: a.a.Click,
						chat: {
							...Object(r.A)(e),
							...Object(r.q)(e),
							...Object(r.g)(e),
							...Object(r.y)(e)
						},
						...Object(c.a)(e),
						actionInfo: {
							...Object(s.a)(e),
							reason: o,
							position: t,
							paneName: n
						}
					})
				},
				f = (e, t) => {
					Object(d.a)({
						noun: "gif",
						source: a.b.Chat,
						action: a.a.Search,
						chat: {
							...Object(r.A)(e),
							...Object(r.q)(e),
							...Object(r.g)(e)
						},
						...Object(c.a)(e),
						actionInfo: {
							...Object(s.a)(e),
							settingValue: t
						}
					})
				}
		},
		"./src/chat/tracking/events/contactsList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return m
			}));
			var a = n("./src/chat/tracking/sendEvent.ts"),
				s = n("./src/telemetry/models/Event.ts"),
				r = n("./src/chat/tracking/fields/chat.ts"),
				c = n("./src/chat/tracking/fields/common.ts");
			const o = e => {
					Object(a.a)({
						noun: "contacts",
						source: s.b.ContactsList,
						action: s.a.View,
						chat: {
							...Object(r.c)(e),
							...Object(r.d)(e)
						},
						...Object(c.a)(e)
					})
				},
				i = (e, t) => {
					Object(a.a)({
						noun: "contact_add",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: {
							...Object(r.e)(e),
							...Object(r.a)(e, t),
							...Object(r.c)(e),
							...Object(r.g)(e),
							...Object(r.f)(e),
							...Object(r.B)(e, t)
						},
						...Object(c.a)(e)
					})
				},
				l = e => {
					Object(a.a)({
						noun: "alert_invalid_user",
						source: s.b.ContactsList,
						action: s.a.View,
						chat: {
							...Object(r.A)(e),
							...Object(r.c)(e),
							...Object(r.d)(e),
							...Object(r.g)(e),
							...Object(r.B)(e, "search"),
							...Object(r.f)(e)
						},
						...Object(c.a)(e)
					})
				},
				d = (e, t) => {
					Object(a.a)({
						noun: "alert_invalid_channel",
						source: s.b.ContactsList,
						action: s.a.View,
						chat: {
							...Object(r.A)(e),
							...Object(r.c)(e),
							...Object(r.d)(e),
							...Object(r.g)(e),
							...Object(r.B)(e, t),
							...Object(r.f)(e)
						},
						...Object(c.a)(e)
					})
				},
				u = (e, t) => {
					Object(a.a)({
						noun: "create_chat",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: {
							...Object(r.A)(e, t),
							...Object(r.c)(e),
							...Object(r.d)(e),
							...Object(r.g)(e, t),
							...Object(r.f)(e)
						},
						...Object(c.a)(e)
					})
				},
				h = e => {
					Object(a.a)({
						noun: "close_contacts",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: {
							...Object(r.e)(e),
							...Object(r.c)(e),
							...Object(r.d)(e),
							...Object(r.g)(e),
							...Object(r.f)(e)
						},
						...Object(c.a)(e)
					})
				},
				m = e => {
					Object(a.a)({
						noun: "add_to_chat",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: {
							...Object(r.A)(e),
							...Object(r.q)(e),
							...Object(r.g)(e),
							...Object(r.d)(e),
							...Object(r.f)(e)
						},
						...Object(c.a)(e)
					})
				}
		},
		"./src/chat/tracking/events/invitationInbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "g", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/selectors/telemetry.ts"),
				r = n("./src/chat/tracking/fields/chat.ts"),
				c = n("./src/chat/tracking/fields/common.ts"),
				o = n("./src/chat/tracking/sendEvent.ts");
			const i = e => Object(o.a)({
					noun: "invitation",
					source: a.b.InvitationInbox,
					action: a.a.View,
					chat: {
						...Object(r.j)(e),
						...Object(r.k)(e),
						...Object(r.h)(e),
						...Object(r.i)(e),
						...Object(r.q)(e)
					},
					...Object(c.a)(e)
				}),
				l = (e, t, n) => Object(o.a)({
					noun: "invitation_accept",
					source: a.b.InvitationInbox,
					action: a.a.Click,
					chat: {
						...Object(r.j)(e),
						...Object(r.k)(e),
						...Object(r.h)(e),
						...Object(r.i)(e),
						...Object(r.q)(e)
					},
					goldPurchase: {
						awardId: t
					},
					...Object(c.a)(e),
					actionInfo: {
						...Object(c.a)(e).actionInfo,
						reason: n
					}
				}),
				d = (e, t, n) => Object(o.a)({
					noun: "invitation_decline",
					source: a.b.InvitationInbox,
					action: a.a.Click,
					chat: {
						...Object(r.j)(e),
						...Object(r.k)(e),
						...Object(r.h)(e),
						...Object(r.i)(e),
						...Object(r.q)(e)
					},
					goldPurchase: {
						awardId: t
					},
					...Object(c.a)(e),
					actionInfo: {
						...Object(s.a)(e),
						reason: n
					}
				}),
				u = e => Object(o.a)({
					noun: "invitation_view_member",
					source: a.b.InvitationInbox,
					action: a.a.Click,
					chat: {
						...Object(r.j)(e),
						...Object(r.k)(e),
						...Object(r.h)(e),
						...Object(r.i)(e),
						...Object(r.q)(e)
					},
					...Object(c.a)(e)
				}),
				h = e => {
					Object(o.a)({
						noun: "expand",
						source: a.b.InvitationInbox,
						action: a.a.Click,
						...Object(c.a)(e)
					})
				},
				m = e => {
					Object(o.a)({
						noun: "collapse",
						source: a.b.InvitationInbox,
						action: a.a.Click,
						...Object(c.a)(e)
					})
				},
				p = new Set,
				b = (e, t) => {
					p.has(t) || (p.add(t), Object(o.a)({
						noun: "collapsed_message",
						source: a.b.Chat,
						action: a.a.View,
						chat: {
							message_id: t
						},
						...Object(c.a)(e)
					}))
				},
				g = (e, t, n) => {
					Object(o.a)({
						noun: "collapsed_message",
						source: a.b.Chat,
						action: a.a.Approve,
						chat: {
							id: t,
							message_id: n
						},
						...Object(c.a)(e)
					})
				},
				f = (e, t, n) => {
					Object(o.a)({
						noun: "collapsed_message",
						source: a.b.Chat,
						action: a.a.Report,
						chat: {
							id: t,
							message_id: n
						},
						...Object(c.a)(e)
					})
				}
		},
		"./src/chat/tracking/events/messagesInbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var a = n("./src/chat/selectors/telemetry.ts"),
				s = n("./src/chat/tracking/fields/chat.ts"),
				r = n("./src/chat/tracking/fields/common.ts"),
				c = n("./src/chat/tracking/sendEvent.ts"),
				o = n("./src/telemetry/models/Event.ts");
			const i = e => {
					Object(c.a)({
						noun: "inbox",
						source: o.b.MessageInbox,
						action: o.a.View,
						chat: {
							...Object(s.p)(e),
							...Object(s.z)(e),
							...Object(s.r)(e)
						},
						...Object(r.a)(e)
					})
				},
				l = e => {
					Object(c.a)({
						noun: "create_chat",
						source: o.b.MessageInbox,
						action: o.a.Click,
						chat: {
							...Object(s.p)(e),
							...Object(s.z)(e),
							...Object(s.r)(e)
						},
						...Object(r.a)(e)
					})
				},
				d = e => {
					Object(c.a)({
						noun: "close_chat",
						source: o.b.MessageInbox,
						action: o.a.Click,
						chat: {
							...Object(s.p)(e),
							...Object(s.r)(e)
						},
						...Object(r.a)(e),
						actionInfo: {
							...Object(a.a)(e)
						}
					})
				},
				u = e => {
					Object(c.a)({
						noun: "minimize_chat",
						source: o.b.MessageInbox,
						action: o.a.Click,
						chat: {
							...Object(s.p)(e),
							...Object(s.r)(e)
						},
						...Object(r.a)(e),
						actionInfo: {
							...Object(a.a)(e)
						}
					})
				}
		},
		"./src/chat/tracking/fields/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return m
			})), n.d(t, "A", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "E", (function() {
				return f
			})), n.d(t, "D", (function() {
				return C
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "C", (function() {
				return _
			})), n.d(t, "z", (function() {
				return j
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "t", (function() {
				return w
			})), n.d(t, "B", (function() {
				return N
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "j", (function() {
				return M
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "b", (function() {
				return U
			})), n.d(t, "w", (function() {
				return D
			})), n.d(t, "u", (function() {
				return R
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "l", (function() {
				return B
			})), n.d(t, "y", (function() {
				return H
			})), n.d(t, "n", (function() {
				return F
			})), n.d(t, "v", (function() {
				return G
			})), n.d(t, "m", (function() {
				return W
			}));
			var a, s = n("./node_modules/lodash/difference.js"),
				r = n.n(s),
				c = n("./node_modules/lodash/isEmpty.js"),
				o = n.n(c),
				i = n("./src/chat/models/Channel/index.ts"),
				l = n("./src/chat/selectors/channels.ts"),
				d = n("./src/chat/selectors/contacts.ts"),
				u = n("./src/chat/selectors/messages.ts");
			! function(e) {
				e.Direct = "direct", e.Group = "group"
			}(a || (a = {}));
			const h = e => {
					switch (e) {
						case i.a.Direct:
							return a.Direct;
						case i.a.Group:
							return a.Group
					}
				},
				m = (e, t) => {
					const n = t ? Object(l.g)(e, t) : Object(l.j)(e);
					return n && {
						id: n.channelSendbirdUrl
					}
				},
				p = (e, t) => {
					const n = t ? Object(l.g)(e, t) : Object(l.l)(e);
					if (n) {
						const {
							type: e
						} = n, t = h(e);
						return t && {
							type: t
						}
					}
				},
				b = e => {
					return {
						type: Object(d.k)(e) > 1 ? a.Group : a.Direct
					}
				},
				g = e => {
					const t = Object(d.k)(e);
					return {
						number_members: t ? t + 1 : 0
					}
				},
				f = (e, t) => {
					return {
						type: (t && t.length) > 2 ? a.Group : a.Direct
					}
				},
				C = (e, t) => {
					const {
						members: n
					} = _(e, t);
					return {
						number_members: n.length
					}
				},
				E = e => {
					const t = Object(l.l)(e);
					return {
						number_members: t && t.memberCount
					}
				},
				O = (e, t) => {
					const n = Object(u.f)(e, t);
					return {
						sender_user_id: n && n.userId || e.user.account.id
					}
				},
				v = e => {
					const t = Object(l.j)(e);
					return {
						sender_user_id: t && t.inviter && t.inviter.id
					}
				},
				_ = (e, t) => (t.push(e.user.account.id), {
					members: t
				}),
				j = e => ({
					number_unreads: Object(u.l)(e)
				}),
				y = (e, t) => {
					const n = Object(l.l)(e),
						a = n && n.unreadMessageCount;
					return {
						number_unreads: "number" == typeof t ? t : a || 0
					}
				},
				I = e => ({
					number_channels: Object(l.q)(e)
				}),
				x = e => ({
					number_pending_invites: Object(l.p)(e)
				}),
				S = (e, t) => ({
					message_type: Object(u.h)(e, t) || "text"
				}),
				w = (e, t) => {
					const n = Object(u.i)(e, t);
					return n && {
						message_type: n.messageData.type
					}
				},
				N = (e, t, n) => {
					const a = Object(d.a)(e, t);
					return {
						user_added_method: n || (a || null)
					}
				},
				k = e => {
					let t = !1;
					const n = Object(d.e)(e),
						a = Object(l.e)(e);
					return n && n.length && a && a.length && (t = !!a.find(e => o()(r()(n.sort(), e.sort())))), {
						existing_channel: t
					}
				},
				T = e => {
					const t = Object(l.l)(e);
					return {
						invitation_id: t ? t.channelSendbirdUrl : null
					}
				},
				M = (e, t) => {
					if (t) return {
						invitation_type: t
					};
					const n = Object(l.l)(e),
						a = n && h(n.type);
					return a && {
						invitation_type: a
					}
				},
				A = e => {
					const t = Object(l.l)(e);
					return {
						invitation_timestamp: t ? t.createdAt : null
					}
				},
				U = e => ({
					blocked_user_id: e || null
				}),
				D = e => ({
					reported_user_id: e || null
				}),
				R = e => {
					const t = Object(l.l)(e),
						n = !(!t || t.type !== i.a.Direct),
						a = Object(l.r)(e),
						s = a && a.length && a[0].id;
					return {
						recipient_user_id: n ? s : null
					}
				},
				L = (e, t) => {
					const n = Object(d.b)(e, t);
					return {
						recipient_user_id: n ? n.id : null
					}
				},
				P = e => {
					const t = Object(d.j)(e);
					return {
						recipient_user_id: 1 === t.length ? t[0] : null
					}
				},
				B = e => ({
					is_member: Object(l.L)(e)
				}),
				H = e => {
					const t = Object(l.k)(e);
					return t && {
						shown_history: !!t.lastMessage
					}
				},
				F = e => ({
					message_id: e
				}),
				G = e => ({
					report_reason: e
				}),
				W = (e, t) => {
					const n = Object(u.e)(e, t);
					if (n) return {
						message_body: n.value
					}
				}
		},
		"./src/chat/tracking/fields/common.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			}));
			var a = n("./src/config.ts"),
				s = n("./src/chat/constants/container.ts"),
				r = n("./src/chat/selectors/telemetry.ts");
			const c = e => ({
					app: {
						name: e.meta.isRedesign || e.container.size === s.a.FULL ? a.a.telemetry.appName.chat2x : a.a.telemetry.appName.chatR2
					},
					platform: Object(r.b)(e),
					user: Object(r.i)(e),
					screen: Object(r.g)(e),
					session: Object(r.h)(e),
					referrer: Object(r.f)(e),
					actionInfo: Object(r.a)(e)
				}),
				o = e => ({
					comment: Object(r.c)(e),
					post: Object(r.d)(e),
					profile: Object(r.e)(e)
				})
		},
		"./src/chat/tracking/sendEvent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./src/telemetry/index.ts"),
				s = n("./src/chat/helpers/errors.ts");
			const r = e => {
				if (e.session && e.session.id) try {
					Object(a.a)(e)
				} catch (t) {
					Object(s.b)(`Error sending telemetry event: ${t}`)
				}
			}
		},
		"./src/graphql/operations/ChatUnitDetails.json": function(e) {
			e.exports = JSON.parse('{"id":"0e3adbb8d3c9"}')
		},
		"./src/graphql/operations/CreateChatGifMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"3c7c0b56eebb"}')
		},
		"./src/graphql/operations/ExperimentVariantsShort.json": function(e) {
			e.exports = JSON.parse('{"id":"bc53b55777c5"}')
		},
		"./src/graphql/operations/GetTrendingChatGifs.json": function(e) {
			e.exports = JSON.parse('{"id":"5b4e0d028600"}')
		},
		"./src/graphql/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		},
		"./src/graphql/operations/SearchChatGifs.json": function(e) {
			e.exports = JSON.parse('{"id":"01a298f0be11"}')
		},
		"./src/lib/convertToCamelCase/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				const t = {};
				for (const n in e) {
					t[n.replace(/_\w/g, e => e[1].toUpperCase())] = e[n]
				}
				return t
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return j
			}));
			var a = n("./node_modules/linkify-it/index.js"),
				s = n.n(a),
				r = n("./node_modules/tlds/index.js"),
				c = n.n(r),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./node_modules/lodash/values.js"),
				l = n.n(i);
			const d = e => l()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				h = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				m = s()().tlds(c.a).set({
					fuzzyIP: !0
				}),
				p = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				b = h(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				g = h(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				f = s()().tlds(c.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				C = s()().tlds(c.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subredditFullUrl.config).add(o.g.subredditFull.prefix, o.g.subredditFullUrl.config),
				E = m.normalize;
			m.normalize = e => {
				E.call(m, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const O = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				v = e => {
					return [...g.match(e) || [], ...p.match(e) || []].map(e => !d(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				j = e => {
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
				return c
			}));
			var a = n("./src/lib/localStorageAvailable/index.ts"),
				s = n("./src/lib/notifications/constants.ts"),
				r = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const c = async (e, t, n, c, o, i) => {
				if (Object(a.a)()) {
					const t = localStorage.getItem(s.h),
						n = (new Date).getTime();
					if (!e && t && parseInt(t) + s.i > n) return void i();
					localStorage.setItem(s.h, n.toString())
				}
				const l = Object(r.a)();
				if (l === s.c.BrowserUnsupported || l === s.c.LocalStorageUnavailable || l === s.c.NotAllRequiredAPIsSupported) return void i();
				if ("denied" === Notification.permission) return c(!1, !1), void i();
				if ("granted" === Notification.permission) return o(!1), void i();
				const d = localStorage.getItem(s.f);
				if (t || !d || d !== s.g) switch (n(), await Notification.requestPermission()) {
					case "granted":
						o(!0);
						break;
					case "denied":
						c(!0, !0);
						break;
					default:
						c(!0, !1), localStorage.setItem(s.f, s.g)
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
				r = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/serviceWorker/index.ts"),
				o = n("./src/lib/timezone/index.ts"),
				i = e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						n = window.atob(t),
						a = new Uint8Array(n.length);
					for (let s = 0; s < n.length; ++s) a[s] = n.charCodeAt(s);
					return a
				};
			var l;
			! function(e) {
				e[e.Success = 0] = "Success", e[e.FailedGeneric = 1] = "FailedGeneric", e[e.FailedResponse = 2] = "FailedResponse", e[e.FailedGqlReponse = 3] = "FailedGqlReponse", e[e.FailedNoServiceWorker = 4] = "FailedNoServiceWorker", e[e.FailedNoSubscription = 5] = "FailedNoSubscription"
			}(l || (l = {}));
			const d = async e => {
				try {
					const t = await Object(c.a)();
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
						return Object(r.a)(e(), {
							...s,
							variables: n
						})
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
				return r
			}));
			const a = "/sw.js";
			async function s(e) {
				if ("undefined" != typeof window && "serviceWorker" in navigator) return navigator.serviceWorker.register(a, e)
			}
			const r = (e, t) => {
				navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: e,
					payload: t
				})
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				defaultAvatar: "_8gjnVWVhueS_hMv9By4wh"
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				i = n.n(o);
			t.a = ({
				className: e,
				style: t = {},
				userId: n
			}) => {
				const {
					processingAvatarImageUrl: s
				} = a.a, o = `url(${s}/defaults/avatar_default_${(e=>{let t=0;for(const n of e)t+=n.charCodeAt();return t%8})(n)}.png)`;
				return r.a.createElement("div", {
					className: Object(c.a)(i.a.avatar, e),
					style: {
						...t,
						backgroundImage: o
					}
				})
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
				r = n.n(s);
			t.a = a.a.div("inlineRow", r.a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Chat~RedesignChat.853cf7bee38ca73aa665.js.map