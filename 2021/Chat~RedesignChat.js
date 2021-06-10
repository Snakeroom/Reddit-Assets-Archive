// https://www.redditstatic.com/desktop2x/Chat~RedesignChat.1debee0daa1733e5e6ce.js
// Retrieved at 6/10/2021, 3:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Chat~RedesignChat"], {
		"./src/chat/actions/apiRequestHeaders.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "API_REQUEST_HEADERS__set"
		},
		"./src/chat/actions/channel.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return P
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "d", (function() {
				return U
			})), n.d(t, "q", (function() {
				return B
			})), n.d(t, "p", (function() {
				return F
			})), n.d(t, "r", (function() {
				return H
			})), n.d(t, "h", (function() {
				return G
			})), n.d(t, "c", (function() {
				return V
			})), n.d(t, "v", (function() {
				return W
			})), n.d(t, "w", (function() {
				return z
			})), n.d(t, "x", (function() {
				return K
			})), n.d(t, "u", (function() {
				return q
			})), n.d(t, "k", (function() {
				return Z
			})), n.d(t, "l", (function() {
				return Q
			})), n.d(t, "i", (function() {
				return J
			})), n.d(t, "j", (function() {
				return Y
			})), n.d(t, "a", (function() {
				return X
			})), n.d(t, "b", (function() {
				return $
			})), n.d(t, "t", (function() {
				return ee
			})), n.d(t, "s", (function() {
				return te
			})), n.d(t, "n", (function() {
				return ne
			})), n.d(t, "o", (function() {
				return se
			})), n.d(t, "m", (function() {
				return ae
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
				return Oe
			})), n.d(t, "N", (function() {
				return _e
			})), n.d(t, "J", (function() {
				return ve
			})), n.d(t, "B", (function() {
				return Ne
			})), n.d(t, "A", (function() {
				return Te
			})), n.d(t, "H", (function() {
				return Ae
			})), n.d(t, "P", (function() {
				return Me
			})), n.d(t, "O", (function() {
				return Pe
			})), n.d(t, "E", (function() {
				return Ve
			})), n.d(t, "F", (function() {
				return ze
			})), n.d(t, "G", (function() {
				return Ke
			})), n.d(t, "D", (function() {
				return Ze
			})), n.d(t, "z", (function() {
				return Qe
			})), n.d(t, "M", (function() {
				return Je
			})), n.d(t, "I", (function() {
				return Ye
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/isEqual.js"),
				a = n.n(s),
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
				f = n("./src/chat/constants/sendbird.ts"),
				g = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				O = n("./src/chat/endpoints/sendbird/index.ts"),
				C = n("./src/chat/helpers/errors.ts"),
				E = n("./src/chat/helpers/urls/index.ts"),
				j = n("./src/chat/models/Channel/index.ts"),
				_ = n("./src/chat/models/Channel/utils/index.ts"),
				v = n("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				I = n("./src/chat/models/User/inviter.ts"),
				x = n("./src/chat/models/User/member.ts");
			var y = n("./src/chat/selectors/channels.ts");
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
				T = e => {
					const t = Object(y.j)(e);
					return {
						channelId: t && t.channelId
					}
				},
				A = e => e.find(e => !!e.channelId);
			var M = n("./src/chat/selectors/platform.ts"),
				k = n("./src/chat/selectors/promos.ts"),
				D = n("./src/chat/singleton/SendbirdSDK.ts");
			const P = "CHANNEL__ADD_SUCCESS",
				R = "CHANNEL__ADD_FAIL",
				L = "CHANNEL__CREATE_CHANNEL_START",
				U = "CHANNEL__CREATE_CHANNEL_END",
				B = "CHANNEL__SELECT_BEGIN",
				F = "CHANNEL__RESET_UNREAD_COUNT",
				H = "CHANNEL__SELECT_END",
				G = "CHANNEL__EXPAND_INVITE_LIST",
				V = "CHANNEL__COLLAPSE_INVITE_LIST",
				W = "CHANNEL__UPDATE_MODEL",
				z = "CHANNEL__INVITED_UPDATE",
				K = "CHANNEL__JOINED_UPDATE",
				q = "CHANNEL__SET_UPDATED_CHANNEL_ON_TOP",
				Z = "CHANNEL__FETCHING_JOINED_CHANNELS",
				Q = "CHANNEL__FETCHING_JOINED_CHANNELS_FAILED",
				J = "CHANNEL__FETCHING_INVITED_CHANNELS",
				Y = "CHANNEL__FETCHING_INVITED_CHANNELS_FAILED",
				X = "CHANNEL__ADD_EXISTING_INVITED_CHANNELS",
				$ = "CHANNEL__ADD_EXISTING_JOINED_CHANNELS",
				ee = "CHANNEL__SET_INVITED_CHANNEL_TO_JOINED",
				te = "CHANNEL__SET_EXISTING_CHANNELS_END",
				ne = "CHANNEL__REMOVE_CHANNEL",
				se = "CHANNEL__RESET_CHANNEL_MESSAGE_LIST",
				ae = "CHANNEL__FETCH_FIRST_MESSAGE",
				re = Object(o.a)(ne),
				ce = e => async t => {
					t(re({
						channelId: e
					}))
				}, oe = Object(o.a)(ee), ie = e => async (t, n, {
					apiContext: s
				}) => {
					const a = n(),
						{
							user: {
								session: c
							},
							contacts: {
								models: o
							}
						} = a;
					if (!e) throw new C.a("accepted channelId", e);
					if (!c) throw new C.a("session", c);
					const i = Object(y.j)(a),
						d = i && i.firstMessageId,
						u = !!(i && d && i.hasMoreMessages),
						h = Object(y.b)(a, o),
						m = Object(k.a)(a);
					if (h && m) return void t(Object(r.b)(Object(E.channelAction)(e, b.a.VIEW_NSFW_CONFIRMATION)));
					await Object(O.a)(s(), c, e), u && t(Object(l.s)(d)), t(oe({
						channelId: e
					}));
					const p = Object(E.getRedirectURL)(Object(E.channelUrl)(e));
					t(Object(r.b)(p))
				}, le = e => async (t, n, {
					apiContext: s
				}) => {
					const {
						user: {
							session: a
						}
					} = n();
					if (!a) throw new C.a("session", a);
					try {
						await Object(O.c)(s(), a, e)
					} catch (r) {
						return Object(C.b)(`Error declining channel: ${r.message}`)
					}
					t((e => async t => t(ce(e)))(e)), t(Object(d.b)()), t(Me(b.b.INVITED))
				}, de = Object(o.a)(z), ue = Object(o.a)(K), he = Object(o.a)(W), me = e => async t => {
					t(he({
						channel: e
					}))
				}, pe = e => async t => {
					await t(de({
						channel: e
					})), t((e => async (t, n) => {
						const s = n().user.account.id,
							a = e.members.filter(e => e.id !== s).map(e => e.id);
						t(Object(m.v)(a))
					})(e))
				}, be = (e, t) => async (n, s) => {
					if (e) {
						const r = s(),
							c = Object(y.g)(r, e.channelId);
						if (e.channelState !== b.b.INVITED && !c || t) return;
						if (e = fe(r, e), a()(e, c)) return;
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
								Object(C.b)("Error updating channel. ChannelState not found.")
						}
						n(Object(d.b)())
					}
				}, fe = (e, t) => {
					return Object(M.d)(e) === t.channelId && (t.unreadMessageCount = 0), t
				}, ge = Object(o.a)(q), Oe = e => async t => {
					const {
						channelId: n
					} = e;
					t(ge({
						channelId: n
					}))
				}, Ce = Object(o.a)(F), Ee = Object(o.a)(B), je = Object(o.a)(H), _e = () => async (e, t) => {
					const n = t(),
						s = Object(M.d)(n),
						a = Object(M.c)(n),
						{
							CREATE: c,
							DENY: o,
							VIEW_JOIN: d
						} = b.a;
					if (!n.platform.currentPage) return;
					const {
						activeIndex: h
					} = n.sidebar;
					s && (await e(Object(u.g)({
						channelId: s,
						tabIndex: h
					})), e(Object(u.h)(!1))), await e(Object(i.f)());
					const m = s && Object(y.g)(n, s);
					if (!m && (a === o || a === c)) return;
					const p = !(!m || m.channelState !== b.b.JOINED);
					if (m && p && a && b.h.includes(a)) {
						const t = Object(E.getRedirectURL)(Object(E.channelUrl)(m.channelId));
						e(Object(r.b)(t))
					} else if (m && s) {
						e(Ee({
							channelId: s
						}));
						const t = await D.a.enterChannel(m, !1);
						if (t && !t.error) {
							const {
								messageListData: n
							} = t.data;
							await e(Object(l.p)(n, m.channelId)), await e(je()), e(ve(s))
						} else e(Object(l.B)()), e(je())
					} else {
						const t = n.sendbird.sdk.connectionStatus === f.b.Open;
						if (!m && s && t) {
							const t = await D.a.addChannelModelByChannelId(s);
							if (t && !a) {
								const n = Object(E.getRedirectURL)(Object(E.channelAction)(t.channelId, d));
								return void e(Object(r.b)(n))
							}
						}
						e(Pe()), e(Object(l.B)())
					}
				}, ve = e => async (t, n) => {
					const s = n(),
						a = e || Object(M.d)(s);
					a && (await t(Ce(a)), await D.a.markChannelAsRead(), t(Object(d.b)()))
				}, Ie = Object(o.a)(L), xe = Object(o.a)(P), ye = Object(o.a)(R), Se = Object(o.a)(U), we = (e, t, n) => {
					const s = e.map(e => ({
						user_id: e,
						nickname: t[e].name
					}));
					if (n) {
						const {
							id: e,
							name: t
						} = n; - 1 === s.findIndex(t => t.user_id === e) && s.unshift({
							user_id: e,
							nickname: t
						})
					}
					return s
				}, Ne = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					const c = s(),
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
						n(Ie());
						const s = we(e, l, o);
						if (s.length < 2) return;
						const c = await Object(O.b)(a(), i, s, t);
						if (c.ok) {
							const e = function(e, t) {
									return {
										channelId: Object(v.a)(e.channel_url),
										channelSendbirdUrl: e.channel_url,
										channelState: Object(_.b)(t),
										fetchingFirstMessage: !1,
										fetchingMessages: !1,
										fetchingMessagesError: !1,
										hasMoreMessages: !1,
										isMessageListLoaded: !1,
										inviter: Object(I.b)(e.inviter),
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
										members: Object(x.a)(e.members)
									}
								}(c.body, b.b.JOINED),
								{
									channelId: t
								} = e,
								s = Object(E.getRedirectURL)(Object(E.channelUrl)(t));
							u.sortedKeys.includes(t) ? (n(ie(t)), n(Object(h.l)(t))) : d.sortedKeys.includes(t) ? (n(Object(r.b)(s)), n(Object(h.l)(t))) : (await n(xe({
								[t]: e
							})), n(Object(h.l)(t)), n(Object(r.b)(s)))
						} else n(ye()), n(Object(h.M)(e));
						n(Se())
					}
				}, Te = e => async t => {
					e = e.slice(0, 1), await t(Object(m.v)(e)), t(Ne(e)), location.origin === c.a.oldRedditUrl && t(Object(h.m)(e))
				}, Ae = e => async (t, n, {
					apiContext: s
				}) => {
					const a = n(),
						{
							user: {
								account: c,
								session: o
							},
							contacts: {
								models: i
							}
						} = a,
						l = Object(y.w)(a, "channelSendbirdUrl");
					if (c && o) {
						const n = we(e, i);
						(await Object(O.j)(s(), o, n, l)).body ? (t(Object(h.d)()), t(Object(r.a)())) : Object(C.b)("Error inviting user to existing channel")
					}
				}, Me = e => async (t, n) => {
					const s = n(),
						a = e === b.b.INVITED,
						r = S(s),
						c = w(s);
					a ? r.channelId ? t(De(r)) : t(De(c)) : c.channelId ? t(De(c)) : t(ke())
				}, ke = () => async (e, t) => {
					const n = t();
					if (n.channels.firstLoaded) {
						const t = ((e, t) => {
							const n = [...t ? [T(e)] : [], ...N(e)];
							return A(n)
						})(n, !!n.platform.currentPage);
						e(De(t))
					}
				}, De = e => async t => {
					if (e && e.channelId) {
						if (e.channelAction) {
							const n = Object(E.getRedirectURL)(Object(E.channelAction)(e.channelId, e.channelAction));
							t(Object(r.c)(n))
						} else {
							const n = Object(E.getRedirectURL)(Object(E.channelUrl)(e.channelId));
							t(Object(r.c)(n))
						}
						return
					}
					const n = Object(E.getRedirectURL)(E.rootUrl);
					t(Object(r.c)(n))
				}, Pe = e => async (t, n) => {
					const {
						platform: {
							currentPage: s
						}
					} = n();
					if (s && s.urlParams.userIds) {
						const e = s.urlParams.userIds.split(",");
						return t(Te(e))
					}
					if (e) return t(Me(e));
					const a = Object(g.b)(n());
					if (a) {
						const e = Object(y.g)(n(), a);
						if (e) {
							const n = Object(E.getChannelUrl)(e),
								s = Object(E.getRedirectURL)(n);
							return void t(Object(r.b)(s))
						}
					}
					return t(ke())
				}, Re = Object(o.a)(J), Le = Object(o.a)(Y), Ue = Object(o.a)(Z), Be = Object(o.a)(Q), Fe = Object(o.a)(X), He = Object(o.a)($), Ge = Object(o.a)(te), Ve = () => async (e, t) => {
					await Promise.all([e(qe()), e(ze()), e(Ke())]);
					const n = t().channels.models;
					await e(We(n)), e(Ge()), e(_e())
				}, We = e => async t => {
					const n = Object(_.c)(e, [j.a.Direct, j.a.Group, j.a.Subreddit]);
					if (!n) return;
					const s = {};
					for (const e in n) {
						const t = n[e];
						t.channelState !== b.b.PARTIAL && (s[t.channelId] = t)
					}
					if (s) {
						const e = [];
						for (const t in s) s[t].members.map(t => e.push(t.id));
						t(Object(m.v)(e))
					}
				}, ze = () => async (e, t) => {
					e(Re());
					const n = await D.a.getExistingChannels(b.b.INVITED).catch(() => null);
					if (n) {
						const {
							hasMoreChannels: t
						} = n, s = Object(j.d)(n.channels);
						return e(We(s)), void e(Fe({
							channels: s,
							hasMoreChannels: t
						}))
					}
					e(Le()), Object(C.b)("Error fetching invited channels")
				}, Ke = () => async (e, t) => {
					e(Ue());
					const n = await D.a.getExistingChannels(b.b.JOINED).catch(t => {
						Object(C.b)(t), e(Be())
					});
					if (n) {
						const {
							hasMoreChannels: s
						} = n, a = Object(j.d)(n.channels), r = Object(y.q)(t());
						return e(He({
							channels: a,
							hasMoreChannels: s
						})), void(s && r < p.a.InitChannels && e(Ke()))
					}
					e(Be())
				}, qe = () => async (e, t) => {
					const n = t(),
						s = Object(M.d)(n);
					s && await D.a.addChannelModelByChannelId(s)
				}, Ze = Object(o.a)(G), Qe = Object(o.a)(V), Je = Object(o.a)(se), Ye = e => async (t, n) => {
					const s = n(),
						a = Object(y.w)(s, "channelState");
					D.a.leaveChannel().then(() => t(ce(e))).then(() => t(Me(a))).catch(e => Object(C.b)(`Error leaving channels: ${e.message}`))
				}
		},
		"./src/chat/actions/channel/dropdown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "b", (function() {
				return A
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
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
				INVITE_MEMBERS: f,
				LEAVE: g,
				VIEW_MEMBERS: O
			} = l.a, C = () => async (e, t) => {
				const n = t(),
					{
						channelId: a
					} = Object(m.s)(n),
					r = Object(h.getRedirectURL)(Object(h.channelAction)(a, f));
				e(Object(s.b)(r))
			}, E = () => async (e, t) => {
				const n = t(),
					{
						channelId: a
					} = Object(m.s)(n),
					r = Object(h.getRedirectURL)(Object(h.channelAction)(a, g));
				e(Object(s.b)(r))
			}, j = e => async t => {
				t(Object(c.b)()), t(Object(o.c)({
					tooltipId: e
				})), t(Object(i.P)())
			}, _ = e => async t => {
				e && (t(Object(i.q)()), window.open(Object(h.viewProfileUrl)(e)))
			}, v = () => async (e, t) => {
				const n = t(),
					{
						channelId: a
					} = Object(m.s)(n),
					r = Object(h.getRedirectURL)(Object(h.channelAction)(a, O));
				e(Object(s.b)(r))
			}, I = "CHANNEL__UPDATE_CHANNEL_NAME", x = Object(a.a)(I), y = e => async (t, n) => {
				const s = Object(m.s)(n());
				if (s) {
					const n = {
							...s,
							name: e
						},
						a = {
							...s
						};
					t(x(n)), await p.a.updateChannel(n).catch(e => {
						Object(u.b)(e), t(x(a))
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
				apiContext: s
			}) => {
				await Promise.all([Object(d.l)(s(), e.channelId), p.a.setPushPreference(e.channelId, !0)]).then(() => {
					const s = Object(m.g)(n(), e);
					s && t(Object(r.R)({
						...s,
						isNotifsMuted: !0
					}))
				}).catch(u.b)
			}, T = e => async (t, n, {
				apiContext: s
			}) => {
				await Promise.all([Object(d.n)(s(), e.channelId), p.a.setPushPreference(e.channelId, !1)]).then(() => {
					const s = Object(m.g)(n(), e);
					s && t(Object(r.R)({
						...s,
						isNotifsMuted: !1
					}))
				}).catch(u.b)
			}, A = e => async (t, n) => {
				const a = n(),
					r = Object(m.g)(a, e);
				if (r) {
					const e = Object(h.getRedirectURL)(Object(h.channelAction)(r.channelId, b));
					t(Object(s.b)(e))
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
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/chat/selectors/channels.ts");
			const r = "CHANNEL__MESSAGE_QUICK_REPLY_ADD_USER_ID",
				c = "CHANNEL__MESSAGE_QUICK_REPLY_REMOVE_USER_ID",
				o = Object(s.a)(r),
				i = Object(s.a)(c),
				l = e => async (t, n) => {
					const s = n(),
						r = Object(a.m)(s, e);
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
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/chat/endpoints/users/index.ts");
			const r = "EXPERIMENTS__REQUEST_PENDING",
				c = "EXPERIMENTS__REQUEST_LOADED",
				o = "EXPERIMENTS__REQUEST_FAILED",
				i = Object(s.a)(c),
				l = Object(s.a)(r),
				d = Object(s.a)(o),
				u = e => async (t, n, {
					gqlContext: s
				}) => {
					t(l());
					const r = await Object(a.a)(s());
					if (r.ok) {
						const n = r.body;
						if (n.data.errors) t(d({
							errors: n.data.errors
						}));
						else {
							const s = n.data.experimentVariants.map(e => ({
								...e,
								isOverride: !1
							}));
							t(i({
								data: s,
								queryParams: null == e ? void 0 : e.match.queryParams
							}))
						}
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
				return C
			})), n.d(t, "i", (function() {
				return I
			})), n.d(t, "j", (function() {
				return x
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/chat/actions/toast.ts"),
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
				f = Object(s.a)(l),
				g = Object(s.a)(d),
				O = Object(s.a)(u),
				C = Object(s.a)(i),
				E = Object(s.a)(h),
				j = Object(s.a)(m),
				_ = Object(s.a)(p),
				v = Object(s.a)(b),
				I = e => async (t, n, {
					gqlContext: s
				}) => {
					const i = n(),
						l = Object(o.g)(i),
						d = Object(o.c)(i);
					if (!l || d) {
						t(f()), t(C(""));
						const n = await Object(c.b)(s(), {
							first: e
						});
						if ((null == n ? void 0 : n.ok) && !(null == n ? void 0 : n.error)) {
							const e = n.body,
								s = y(e);
							t(g(s))
						} else t(Object(a.e)({
							toast: r.a.SomethingWentWrong
						})), t(Object(a.c)(3)), t(O())
					}
				}, x = (e, t) => async (n, s, {
					gqlContext: i
				}) => {
					var l, d;
					if (!t) return;
					const u = s(),
						h = Object(o.c)(u),
						m = Object(o.b)(u),
						p = t === m,
						b = p ? null === (l = u.gifs.search.models[t]) || void 0 === l ? void 0 : l.pageInfo.endCursor : "";
					if ((null === (d = u.gifs.search.models[t]) || void 0 === d ? void 0 : d.ids.length) && !h && !p) n(v(t)), n(C(t));
					else if (Object(o.e)(u) || !b) {
						n(v(t)), n(E({
							query: t,
							cursor: b
						}));
						const s = await Object(c.c)(i(), {
							first: e,
							query: t,
							after: b
						});
						if ((null == s ? void 0 : s.ok) && !(null == s ? void 0 : s.error)) {
							const e = s.body,
								a = y(e, t);
							n(j({
								cursor: b,
								gifsData: a
							}))
						} else n(Object(a.e)({
							toast: r.a.SomethingWentWrong
						})), n(Object(a.c)(3)), n(_({
							cursor: b,
							query: t
						}))
					}
				}, y = (e, t = "") => {
					const n = e && e.data,
						s = n && n.gifs,
						a = s && s.pageInfo,
						r = s && s.edges;
					return {
						version: null == s ? void 0 : s.version,
						provider: null == s ? void 0 : s.provider,
						pageInfo: a,
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
				return f
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "f", (function() {
				return v
			}));
			var s = n("./node_modules/lodash/isEqual.js"),
				a = n.n(s),
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
				}) => async (n, s) => {
					const a = s(),
						r = Object(l.t)(a);
					if (r) {
						n(m({
							channelId: r
						}));
						const s = e ? await u.a.getChannelMembersStartsWith(r, e).catch(e => Object(o.b)(`Error getting channel members: ${e.message}`)) : await u.a.getChannelMembers(r, t).catch(e => Object(o.b)(`Error getting subreddit channel members: ${e.message}`));
						if (s) {
							const {
								hasMoreMembers: e,
								members: t
							} = s;
							n(E(r, t, e))
						} else n(p())
					}
				}, f = "MEMBERS__FETCHING_MEMBERS_COMPLETED", g = Object(r.a)(f), O = "MEMBERS__ADD_CHANNEL_MEMBERS", C = Object(r.a)(O), E = (e, t, n) => async (s, r, {
					apiContext: o
				}) => {
					const l = t.map(e => e.userId),
						u = await Object(c.e)(o(), l);
					if (u.ok) {
						const n = r(),
							c = Object(i.a)(u.body),
							o = t.reduce((e, t) => {
								const {
									userId: s
								} = t, r = c[s];
								if (r) {
									const c = n.contacts.models[s],
										o = Object(d.e)(r, t, c),
										i = e[s];
									e[s] = a()(o, i) ? i : o
								}
								return e
							}, {});
						s(C({
							channelId: e,
							members: o
						}))
					}
					s(g({
						channelId: e,
						hasMoreMembers: n
					}))
				}, j = "MEMBERS__REMOVE_CHANNEL_MEMBERS", _ = Object(r.a)(j), v = () => async e => {
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
			var s = n("./node_modules/lodash/sortBy.js"),
				a = n.n(s),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/constants/batchSizes.ts"),
				o = n("./src/chat/selectors/channels.ts"),
				i = n("./src/chat/singleton/SendbirdSDK.ts");
			const l = e => async (t, n) => {
				const s = Object(o.t)(n()),
					r = (e => {
						return a()(e, "createAt").splice(0, e.length - c.a.Messages).map(e => e.messageId)
					})(e);
				s && (t(u({
					messageIdList: r
				})), t(m({
					channelId: s
				})), i.b.resetPreviousMessageListQuery())
			}, d = "MESSAGE__REMOVE_MESSAGES_FROM_CURRENT_CHANNEL", u = Object(r.a)(d), h = "CHANNEL__RESET_HAS_MORE_MESSAGES", m = Object(r.a)(h)
		},
		"./src/chat/actions/message/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "o", (function() {
				return B
			})), n.d(t, "q", (function() {
				return F
			})), n.d(t, "y", (function() {
				return H
			})), n.d(t, "m", (function() {
				return G
			})), n.d(t, "k", (function() {
				return W
			})), n.d(t, "x", (function() {
				return z
			})), n.d(t, "i", (function() {
				return Z
			})), n.d(t, "v", (function() {
				return J
			})), n.d(t, "b", (function() {
				return Y
			})), n.d(t, "p", (function() {
				return $
			})), n.d(t, "l", (function() {
				return ee
			})), n.d(t, "B", (function() {
				return te
			})), n.d(t, "d", (function() {
				return ne
			})), n.d(t, "s", (function() {
				return se
			})), n.d(t, "r", (function() {
				return ae
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
				return fe
			})), n.d(t, "n", (function() {
				return ge
			})), n.d(t, "C", (function() {
				return Ce
			})), n.d(t, "h", (function() {
				return Ee
			})), n.d(t, "u", (function() {
				return je
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/flatten.js"),
				a = n.n(s),
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
				f = n("./src/lib/makeRequest/index.ts");
			const g = p.a.embedlyApiKey,
				O = e => e && e.length > 0 && e[0] ? e[0].url : void 0,
				C = e => e.filter(e => !m()(e)).map(e => ({
					name: e.provider_name,
					providerDisplay: e.provider_display,
					title: e.title,
					description: e.description,
					faviconUrl: e.favicon_url,
					imageUrl: O(e.images),
					url: e.url
				}));
			var E = n("./src/chat/actions/message/richUnit.ts"),
				j = n("./src/chat/actions/surveyTrigger/index.ts"),
				_ = n("./src/chat/endpoints/gifs/index.ts"),
				v = n("./src/chat/endpoints/sendbird/index.ts"),
				I = n("./src/chat/helpers/errors.ts"),
				x = n("./src/chat/helpers/urls/index.ts"),
				y = n("./src/chat/models/Message/index.ts"),
				S = n("./src/chat/models/Message/adapter.ts"),
				w = n("./src/chat/selectors/app.ts"),
				N = n("./src/chat/selectors/channels.ts"),
				T = n("./src/chat/selectors/contacts.ts"),
				A = n("./src/chat/selectors/messages.ts"),
				M = n("./src/chat/singleton/SendbirdSDK.ts");
			const k = "MESSAGE__ADD_ONE",
				D = Object(o.a)(k),
				P = (e, t, n) => async (s, a) => {
					const r = a(),
						c = Object(S.b)(n),
						o = await R(t, r);
					M.a.addMessage(t, n, o).then(t => {
						const n = {
							[t.messageId]: t
						};
						s(D({
							message: n,
							channelId: e,
							clientMessageId: c
						})), s(Object(d.J)(t.messageId)), s(Object(E.c)(t))
					}).catch(e => {
						if (c) {
							const t = `${e.code}: ${e.message}`;
							s(Object(d.O)(c, t)), s(V({
								clientMessageId: c,
								toggle: !0
							}))
						}
					})
				}, R = async (e, t) => {
					const n = Object(c.d)(e);
					if (!n.length) return [];
					const s = [];
					return [...n.map(e => {
						const n = Object(T.f)(t, e);
						return n || s.push(e), n && n.id
					}).filter(e => e), ...(s.length && a()(await Promise.all(s.slice(0, 3).map(e => M.a.searchMemberByName(e, !0)))) || []).map(e => e && e.id).filter(e => e)]
				}, L = "MESSAGE__ADD_PENDING_ONE", U = Object(o.a)(L), B = (e, t) => async (n, s, {
					gqlContext: a
				}) => {
					const r = s(),
						c = {
							height: t.downsized.dimensions.height,
							width: t.downsized.dimensions.width,
							id: t.id,
							title: t.title,
							url: t.downsized.url
						},
						o = Object(y.b)(r, e, JSON.stringify(c), u.c.GIF),
						i = {
							channelId: e,
							messageData: o.data,
							message: t.downsized.url
						};
					await n(U(o)), Object(_.a)(a(), {
						input: i
					})
				}, F = (e, t, n) => async (s, a) => {
					var r;
					const o = a(),
						i = c.b.match(t),
						d = 1 === (null == i ? void 0 : i.length) && 1 === t.trim().split(" ").length;
					if (Object(x.isRedditLink)(null === (r = null == i ? void 0 : i[0]) || void 0 === r ? void 0 : r.url) && d) s(K(e, t));
					else if (d) s(q(e, t));
					else {
						const a = Object(y.b)(o, e, t, n);
						s(U(a)), s(P(e, t, a.data))
					}
					s(Object(l.removeUserIdFormQuickReplyListByChannelId)(e))
				}, H = (e, t) => async (n, s) => {
					const a = s(),
						r = Object(A.f)(a, t);
					r && (n(V({
						clientMessageId: t,
						toggle: !1
					})), n(P(e, r.messageData.value, r.data)))
				}, G = "MESSAGE__TOGGLE_PENDING_MESSAGE_ERROR", V = Object(o.a)(G), W = "MESSAGE__REMOVE_PENDING_ONE", z = Object(o.a)(W), K = (e, t) => async (n, s) => {
					const a = s(),
						r = Object(x.getChatUnitType)(t),
						c = Object(y.b)(a, e, t, r.type);
					c && (n(U(c)), n(P(e, c.messageData.value, c.data)))
				}, q = (e, t) => async (n, s) => {
					const a = s(),
						r = c.f.match(t);
					if (!r.length || r.length > 1) return Object(I.b)(`We only support 1 link per text but ${r.length} given`);
					const o = r[0].url,
						i = u.c.EMBED;
					let l = {
						url: t
					};
					const d = Object(y.b)(a, e, JSON.stringify(l), i);
					if (d) {
						n(U(d));
						const t = await (async ({
							chars: e,
							scheme: t,
							url: n
						}) => Object(f.b)({
							endpoint: "https://api.embed.ly/1/extract",
							method: b.hb.GET,
							data: {
								key: g,
								url: n,
								scheme: t,
								chars: e
							}
						}).then(e => e.ok && Array.isArray(e.body) ? e.body : [e.body]).then(C))({
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
							const s = JSON.stringify(l),
								a = JSON.stringify(Object(S.a)(s, i, d.clientMessageId));
							n(P(e, l.url, a))
						}
					}
				}, Z = "MESSAGE__RECEIVE_ADD_ONE", Q = Object(o.a)(Z), J = e => async (t, n) => {
					const {
						messageId: s,
						messageData: {
							clientMessageId: a
						}
					} = e, r = n(), c = Object(N.t)(r) === e.channelId;
					Object(w.b)(r) && c && t(Object(i.J)(e.channelId));
					const o = Boolean(Object(A.f)(r, a));
					await t(Q({
						[s]: e
					})), t(Object(E.c)(e)), o && t(Object(d.L)(s))
				}, Y = "MESSAGE__ADD_LIST", X = Object(o.a)(Y), $ = (e, t) => async n => {
					n(X({
						channelId: t,
						...e
					})), n(Object(E.d)(e)), n(Object(j.b)())
				}, ee = "MESSAGE__SET_MESSAGE_LIST_IS_LOADED", te = Object(o.a)(ee), ne = "MESSAGE__DELETE_ONE", se = Object(o.a)(ne), ae = e => async (t, n) => {
					const s = n(),
						a = Object(A.b)(s, e);
					a && a.messageType === u.d.USER && M.a.deleteMessage(a).then(() => t(se(a.messageId))).then(() => t(Object(r.a)()))
				}, re = "MESSAGE__RECEIVE_DELETE_ONE", ce = Object(o.a)(re), oe = e => async (t, n) => {
					t(ce(e))
				}, ie = "MESSAGE__GET_PREVIOUS_MESSAGES_START", le = "MESSAGE__GET_PREVIOUS_MESSAGES_END", de = "MESSAGE__GET_PREVIOUS_MESSAGES_ERROR", ue = Object(o.a)(ie), he = Object(o.a)(le), me = Object(o.a)(de), pe = e => async (t, n) => {
					const s = Object(N.w)(n(), "channelId");
					t(ue(s)), t(Object(d.R)()), s && await M.a.getPreviousMessages(e).then(e => {
						t(he({
							channelId: s,
							...e
						})), t(Object(E.d)(e))
					}).catch(() => t(me(s)))
				}, be = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					try {
						await Object(v.i)(a(), t, e)
					} catch (r) {
						Object(I.b)(r)
					}
				}, fe = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					try {
						await Object(v.d)(a(), t, e)
					} catch (r) {
						Object(I.b)(r)
					}
				}, ge = "MESSAGE__UNCOLLAPSE", Oe = Object(o.a)(ge), Ce = e => async t => {
					t(Oe(e))
				}, Ee = "MESSAGE__HIDE_REPORT_PROMPT_FOR_COLLAPSE_MESSAGE", je = Object(o.a)(Ee)
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
				return g
			}));
			var s = n("./node_modules/lodash/uniq.js"),
				a = n.n(s),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/constants/messages.ts"),
				o = n("./src/graphql/operations/ChatUnitDetails.json"),
				i = n("./src/lib/makeGqlRequest/index.ts");
			var l = n("./src/lib/constants/index.ts");
			const d = "MESSAGE__UNITS_DATA_RECEIVED",
				u = "MESSAGE__RESET_RICH_UNITS_DATA_RECEIVED",
				h = Object(r.a)(d),
				m = (e, t) => {
					var n, s, a, r;
					const {
						messageId: o
					} = t;
					if ((null === (n = null == t ? void 0 : t.messageData) || void 0 === n ? void 0 : n.type) === c.c.POST || (null === (s = null == t ? void 0 : t.messageData) || void 0 === s ? void 0 : s.type) === c.c.COMMENT || (null === (a = null == t ? void 0 : t.messageData) || void 0 === a ? void 0 : a.type) === c.c.SUBREDDIT || (null === (r = null == t ? void 0 : t.messageData) || void 0 === r ? void 0 : r.type) === c.c.USER_POST) {
						const {
							chatUnitId: n,
							type: s
						} = t.messageData;
						e[s].push({
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
					m(n, e), t(f(n))
				}, b = e => async (t, n) => {
					const s = {
						post: [],
						userPost: [],
						comment: [],
						subreddit: []
					};
					for (const a in e.messages) {
						const t = e.messages[a];
						m(s, t)
					}
					t(f(s))
				}, f = e => async (t, n, {
					gqlContext: s
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
						d = e => e.startsWith(l.Fb.Comment) || e.startsWith(l.Fb.Post);
					for (const o in e) {
						const t = a()(e[o].reduce((e, t) => t.chatUnitId && (d(t.chatUnitId) || "subreddit" === o) && e.push(t.chatUnitId) && e || e, []));
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
						}))(s(), r);
						if (null == e ? void 0 : e.ok) {
							const n = e => Boolean(e && e.id && e.postInfo && e.postInfo.subreddit && e.authorInfo && e.authorInfo.displayName),
								s = e => Boolean(e && e.id && e.title && e.url && e.authorInfo && e.authorInfo.displayName),
								a = e => s(e),
								r = e => s(e),
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
								})), e.posts && (e.posts = e.posts.filter(a).map(e => ({
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
				}, g = Object(r.a)(u)
		},
		"./src/chat/actions/message/unreadCount.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/debounce.js"),
				a = n.n(s),
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
					} catch (s) {
						Object(d.b)(`Error getting proxy unread count: ${s}`)
					}
				}, b = a()((e, t, n) => async (s, a, {
					apiContext: r
				}) => {
					const o = a();
					let i;
					(i = "number" == typeof e || "number" == typeof t || "number" == typeof n ? {
						basicChannelCount: e || 0,
						subredditChannelCount: t || 0,
						subredditMentionCount: n || 0
					} : await p(o, r)) && !c()(o.messages.unread, i) && await s(m(i))
				}, o.Nb, {
					leading: !0
				})
		},
		"./src/chat/actions/meta.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "META_RECEIVED", (function() {
				return a
			})), n.d(t, "metaReceived", (function() {
				return r
			})), n.d(t, "SET_EXTERNAL_DATA", (function() {
				return c
			})), n.d(t, "setExternalData", (function() {
				return o
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const a = "META__META_RECEIVED",
				r = Object(s.a)(a),
				c = "META__SET_EXTERNAL_DATA",
				o = Object(s.a)(c)
		},
		"./src/chat/actions/notifications.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/lodash/noop.js"),
				a = n.n(s),
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
				p = (e, t) => async (n, s, l) => {
					if (Object(i.d)(s())) return;
					(e => {
						Object(d.a)({
							...m(e, !0),
							action: u.c.Request,
							source: u.b.Notification
						})
					})(s()), Object(c.a)(e, t, () => {
						n(Object(o.n)()), n(Object(o.m)()), (e => {
							Object(d.a)({
								...h(e),
								action: u.c.View,
								source: u.b.Popup
							})
						})(s())
					}, (e, t) => {
						n(Object(o.k)()), e && (t ? (e => {
							Object(d.a)({
								...h(e),
								action: u.c.Block,
								source: u.b.Popup
							})
						})(s()) : (e => {
							Object(d.a)({
								...h(e),
								action: u.c.Close,
								source: u.b.Popup
							})
						})(s()))
					}, () => {
						n(Object(o.l)()), Object(r.b)(l.gqlContext), (e => {
							Object(d.a)({
								...h(e),
								action: u.c.Allow,
								source: u.b.Popup
							})
						})(s())
					}, a.a)
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
			var s = n("./src/chat/actions/channel.ts"),
				a = n("./src/chat/actions/sidebar.ts"),
				r = n("./src/chat/actions/user.ts"),
				c = n("./src/chat/selectors/platform.ts");

			function o(e) {
				return t => async (n, s, o) => {
					const i = Object(c.e)(s());
					n(Object(a.e)(i)), await Object(r.l)()(n, s, o), await Object(r.o)()(n, s, o), await e(t)(n, s, o)
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
						e(Object(s.A)(t))
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
			var s = n("./src/lib/areUrlsEqual/index.ts"),
				a = n("./src/lib/logs/timing.js"),
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
						})), !u || !Object(s.a)(u.url, e))) {
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
								Object(a.b)({
									duration: e,
									meta: t
								})
							}
						}
						n.match.params.subredditName && r(Object(o.l)()), n.match.params.channelId && r(Object(c.N)())
					}
				}, h = Object(r.a)(i)
		},
		"./src/chat/actions/promo/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/cache/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts");
			var c = n("./src/chat/models/Promo/index.ts");
			var o = e => {
					const t = Object(s.b)("chat.promo") || [];
					return e = (e => {
						switch (e) {
							case c.c.LegacySubredditChatFtux:
								return c.a.SubredditChatFtux;
							case c.c.LegacyNSFWWarning:
								return c.b.NSFWWarning;
							default:
								return e
						}
					})(e), t.includes(e)
				},
				i = n("./src/chat/actions/promo/constants.ts");
			const l = Object(r.a)(i.a),
				d = Object(r.a)(i.b),
				u = e => async t => {
					t(d(e)), (e => {
						if (!o(e)) {
							const t = [...Object(s.b)("chat.promo") || [], e];
							Object(s.d)("chat.promo", t, a.kc)
						}
					})(e)
				}, h = () => async e => {
					Object.keys(c.b).forEach(t => {
						o(c.b[t]) || e(l(c.b[t]))
					})
				}
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
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/chat/endpoints/sendbird/index.ts");
			const r = "SENDBIRD_CONFIG__PROXY",
				c = Object(s.a)(r),
				o = "SENDBIRD_CONFIG__GLOBAL_SETTINGS",
				i = Object(s.a)(o),
				l = "SENDBIRD_CONFIG__USER_EXPERIMENTS",
				d = Object(s.a)(l),
				u = () => async (e, t, {
					apiContext: n
				}) => {
					const s = await Object(a.e)(n());
					s.ok && await Promise.all([e(c({
						host: s.body.proxy_host
					})), e(i({
						maxMessageLength: parseInt(s.body.max_message_length, 10)
					})), e(d({
						userSubredditChatEnabled: s.body.user_subreddit_chat_enabled
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
				return g
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "l", (function() {
				return A
			}));
			var s = n("./src/lib/cache/index.ts"),
				a = n("./src/lib/constants/index.ts"),
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
				f = Object(r.a)(b),
				g = (e = !0) => async (t, n, {
					apiContext: r
				}) => {
					const c = n(),
						{
							account: o,
							session: l
						} = c.user;
					if (l && o) {
						let n;
						const c = Object(s.c)(a.o.CHAT, a.w.CHAT_SENDBIRD_SESSION_KEY, o.id),
							d = Object(s.b)(c);
						if (d && d.token) n = d;
						else {
							const e = await Object(i.g)(r(), l);
							if (e.ok) {
								const {
									valid_until: t,
									sb_access_token: a
								} = e.body;
								n = {
									expires: t,
									token: a
								}, Object(s.d)(c, n, new Date(t))
							}
						}
						if (n) return void t(f({
							...n,
							active: e
						}))
					}
					t(p())
				}, O = "SENDBIRD__ADD_MEMBERS_TO_KNOWN_CONTACTS", C = Object(r.a)(O), E = "SENDBIRD__SET_REDDIT_CONTACT_LIST", j = 6 * a.O, _ = Object(r.a)(E), v = () => async (e, t, {
					apiContext: n
				}) => {
					const r = t(),
						c = r.contacts.models,
						o = Object(s.c)(a.o.CHAT, a.w.CHAT_SENDBIRD_CONTACTS_KEY, r.user.account.id),
						d = Object(s.b)(o);
					if (d && d.version === l.a) return void e(_(d.data));
					const u = t().user.session;
					if (!u) return;
					const h = await Object(i.f)(n(), u, 25),
						m = Object(l.c)(h.body).map(e => c[e.id] ? c[e.id] : e),
						p = {
							version: l.a,
							data: m
						};
					Object(s.d)(o, p, j), e(_(m))
				}, I = "SENDBIRD__IDENTIFY_CONTACT_BEGIN", x = "SENDBIRD__IDENTIFY_CONTACT_END", y = Object(r.a)(I), S = Object(r.a)(x), w = e => async (t, n, {
					apiContext: s
				}) => {
					if (e.username === a.C) return;
					Object(d.c)(n(), e.username) || (t(y({
						username: e.username
					})), Object(o.b)(s(), e.username).then(n => {
						if (n.ok) {
							const s = Object(l.d)(n.body.data);
							if (s) return t(S({
								username: e.username,
								contact: s,
								valid: !0
							}))
						} else t(Object(c.N)(e.username));
						t(S({
							username: e.username,
							valid: !1
						}))
					}))
				}, N = "SENDBIRD__OPT_IN", T = Object(r.a)(N), A = () => async (e, t, {
					apiContext: n
				}) => {
					Object(u.h)(t()) || (e(T({
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
				return f
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "g", (function() {
				return I
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/chat/actions/channel.ts"),
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
				f = "SENDBIRD_SDK__DISCONNECT",
				g = "SENDBIRD_SDK__UPDATE_CONNECTION_STATUS",
				O = Object(s.a)(p),
				C = Object(s.a)(b),
				E = e => async (t, n) => {
					const s = n(),
						o = Object(u.d)(s),
						p = Object(u.c)(s),
						b = Object(u.b)(s),
						f = Object(h.d)(s),
						g = {
							connectionStatus: l.b.Closed
						};
					if (f && b && p) {
						const {
							id: n
						} = f;
						o && t(Object(i.e)({
							toast: d.a.ConnectionPending
						})), e = e || p.token, m.a.connect(b, e, n, t).then(e => {
							if (e.error) t(O(e.error)), t(v({
								...g
							})), t(Object(i.e)({
								toast: d.a.ConnectionClosed
							}));
							else {
								if (t(C()), o) {
									const e = !0;
									t(Object(r.t)(e)), t(Object(i.e)({
										toast: d.a.ConnectionOpen
									})), t(Object(i.c)(3))
								}
								t(Object(c.b)()), t(Object(a.E)())
							}
						})
					}
				}, j = Object(s.a)(f), _ = () => async e => {
					m.a.disconnect().then(() => {
						e(j()), e(Object(o.j)())
					})
				}, v = Object(s.a)(g), I = () => m.a.reconnect()
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
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts");
			const c = "SESSION__USER_AUTHENTICATED",
				o = "SESSION__USER_LOGGED_OUT",
				i = "SESSION__USER_REAUTHENTICATED",
				l = (Object(s.a)(c), Object(s.a)(i)),
				d = Object(s.a)(o),
				u = () => async (e, t, {
					apiContext: n
				}) => {
					const s = t().user.session;
					if (s) {
						const t = await ((e, t) => Object(r.a)(e, {
							data: t,
							endpoint: "/refreshproxy",
							method: a.hb.POST
						}))(n(), s);
						if (t.ok) {
							const n = t.body;
							if (n.unsafeLoggedOut) return void(s.unsafeLoggedOut || e(d()));
							e(l(n))
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
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts");
			var i = n("./node_modules/fbt/lib/FbtPublic.js");
			const l = "SITEWIDE_RULES_LOADED",
				d = Object(s.a)(l),
				u = () => async (e, t, {
					apiContext: n
				}) => {
					const s = t();
					if (!s.user || !s.user.language) return;
					if (s.sitewideRules && s.sitewideRules.length) return;
					const l = await (e => Object(r.a)(Object(c.a)(e, [o.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: a.hb.GET
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
			var s = n("./src/lib/makeActionCreator/index.ts");
			let a, r;
			const c = "REDDIT__START_SURVEY",
				o = Object(s.a)(c),
				i = (e = 8e3) => async t => {
					r || (a && clearTimeout(a), a = setTimeout(() => {
						t(o()), r = !0
					}, e))
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
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/constants/index.ts");
			const r = "TOAST__RESET_TOAST",
				c = Object(s.a)(r),
				o = "TOAST__UPDATE_TOAST",
				i = Object(s.a)(o),
				l = e => async (t, n) => {
					setTimeout(() => t(c()), e * a.Nb)
				}
		},
		"./src/chat/actions/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return o
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const a = "TOOLTIP__DROPDOWN_TOGGLED",
				r = "TOOLTIP__DROPDOWN_UNSET",
				c = Object(s.a)(a),
				o = Object(s.a)(r)
		},
		"./src/chat/actions/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "J", (function() {
				return j
			})), n.d(t, "O", (function() {
				return _
			})), n.d(t, "K", (function() {
				return v
			})), n.d(t, "R", (function() {
				return I
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "P", (function() {
				return y
			})), n.d(t, "H", (function() {
				return S
			})), n.d(t, "w", (function() {
				return w
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "y", (function() {
				return T
			})), n.d(t, "B", (function() {
				return A
			})), n.d(t, "A", (function() {
				return M
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "u", (function() {
				return D
			})), n.d(t, "F", (function() {
				return P
			})), n.d(t, "S", (function() {
				return R
			})), n.d(t, "I", (function() {
				return L
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "N", (function() {
				return B
			})), n.d(t, "M", (function() {
				return F
			})), n.d(t, "l", (function() {
				return H
			})), n.d(t, "h", (function() {
				return G
			})), n.d(t, "d", (function() {
				return V
			})), n.d(t, "o", (function() {
				return W
			})), n.d(t, "p", (function() {
				return z
			})), n.d(t, "q", (function() {
				return K
			})), n.d(t, "n", (function() {
				return q
			})), n.d(t, "i", (function() {
				return Z
			})), n.d(t, "e", (function() {
				return Q
			})), n.d(t, "v", (function() {
				return J
			})), n.d(t, "m", (function() {
				return Y
			})), n.d(t, "g", (function() {
				return X
			})), n.d(t, "s", (function() {
				return $
			})), n.d(t, "x", (function() {
				return ee
			})), n.d(t, "z", (function() {
				return te
			})), n.d(t, "C", (function() {
				return ne
			})), n.d(t, "Q", (function() {
				return se
			})), n.d(t, "E", (function() {
				return ae
			})), n.d(t, "b", (function() {
				return re
			})), n.d(t, "D", (function() {
				return ce
			})), n.d(t, "t", (function() {
				return oe
			})), n.d(t, "L", (function() {
				return ie
			})), n.d(t, "G", (function() {
				return le
			}));
			var s = n("./src/telemetry/models/Event.ts"),
				a = n("./src/chat/components/MessageInput/index.tsx"),
				r = n("./src/chat/constants/channels.ts"),
				c = n("./src/chat/selectors/channels.ts"),
				o = n("./src/chat/selectors/contacts.ts"),
				i = n("./src/chat/selectors/gifs.ts"),
				l = n("./src/chat/selectors/platform.ts"),
				d = n("./src/chat/tracking/fields/chat.ts"),
				u = n("./src/chat/tracking/fields/common.ts"),
				h = n("./src/chat/tracking/sendEvent.ts");
			var m = n("./src/chat/selectors/telemetry.ts");
			var p = n("./src/chat/tracking/events/chatView.ts"),
				b = n("./src/chat/tracking/events/contactsList.ts");
			var f = n("./src/chat/tracking/events/invitationInbox.ts"),
				g = n("./src/chat/tracking/events/messagesInbox.ts");
			var O, C;
			! function(e) {
				e.AWARD_RECEIVED = "award_received"
			}(O || (O = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND", e[e.THIRD = 3] = "THIRD"
			}(C || (C = {}));
			const E = () => async (e, t) => {
				Object(g.b)(t())
			}, j = e => async (t, n) => {
				Object(p.d)(n(), e)
			}, _ = (e, t) => async (n, s) => {
				Object(p.g)(s(), e, t)
			}, v = (e, t) => async (n, s) => {
				Object(p.e)(s(), e, t)
			}, I = () => async (e, t) => {
				Object(p.h)(t())
			}, x = () => async (e, t) => {
				Object(p.a)(t())
			}, y = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "chat_settings",
					source: s.b.ChatSettings,
					action: s.a.View,
					chat: {
						...Object(d.A)(e),
						...Object(d.q)(e),
						...Object(d.g)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, S = () => async (e, t) => {
				const n = Object(c.r)(t());
				if (n && n.length) {
					const e = n[0].id;
					((e, t) => Object(h.a)({
						noun: "chat_member_block",
						source: s.b.ChatSettings,
						action: s.a.Submit,
						chat: {
							...Object(d.A)(e),
							...Object(d.q)(e),
							...Object(d.g)(e),
							...Object(d.b)(t)
						},
						...Object(u.a)(e)
					}))(t(), e)
				}
			}, w = () => async (e, t) => {
				const n = t();
				Object(l.c)(n) !== r.a.VIEW_INVITE && (e => {
					Object(h.a)({
						noun: "view_profile",
						source: s.b.ChatSettings,
						action: s.a.Click,
						chat: {
							...Object(d.A)(e),
							...Object(d.q)(e),
							...Object(d.u)(e),
							...Object(d.g)(e)
						},
						...Object(u.a)(e)
					})
				})(n)
			}, N = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "leave_chat",
					source: s.b.ChatSettings,
					action: s.a.Click,
					chat: {
						...Object(d.A)(e),
						...Object(d.q)(e),
						...Object(d.g)(e),
						...Object(d.y)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, T = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "leave_chat",
					source: s.b.ChatSettings,
					action: s.a.Confirm,
					chat: {
						...Object(d.A)(e),
						...Object(d.q)(e),
						...Object(d.g)(e),
						...Object(d.y)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, A = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "badging",
					source: s.b.ChatSettings,
					action: s.a.Enable,
					chat: {
						...Object(d.A)(e),
						...Object(d.q)(e),
						...Object(d.g)(e),
						...Object(d.y)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, M = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "badging",
					source: s.b.ChatSettings,
					action: s.a.Disable,
					chat: {
						...Object(d.A)(e),
						...Object(d.q)(e),
						...Object(d.g)(e),
						...Object(d.y)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, k = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "add_to_group",
					source: s.b.ChatSettings,
					action: s.a.Click,
					chat: {
						...Object(d.A)(e),
						...Object(d.q)(e),
						...Object(d.g)(e),
						...Object(d.y)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, D = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "rename_group",
					source: s.b.ChatSettings,
					action: s.a.Click,
					chat: {
						...Object(d.A)(e),
						...Object(d.q)(e),
						...Object(d.g)(e),
						...Object(d.y)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, P = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "rename_group",
					source: s.b.ChatSettings,
					action: s.a.Save,
					chat: {
						...Object(d.A)(e),
						...Object(d.q)(e),
						...Object(d.g)(e),
						...Object(d.y)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, R = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "view_members",
					source: s.b.ChatSettings,
					action: s.a.Click,
					chat: {
						...Object(d.A)(e),
						...Object(d.q)(e),
						...Object(d.g)(e),
						...Object(d.y)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, L = e => async (t, n) => {
				((e, t) => {
					Object(h.a)({
						noun: "chat_member_report",
						source: s.b.ChatSettings,
						action: s.a.Submit,
						chat: {
							...Object(d.A)(e),
							...Object(d.q)(e),
							...Object(d.g)(e),
							...Object(d.w)(t)
						},
						...Object(u.a)(e)
					})
				})(n(), e)
			}, U = e => async (t, n) => {
				Object(b.c)(n(), e)
			}, B = e => async (t, n) => {
				Object(o.c)(n(), e) && Object(b.f)(n())
			}, F = e => async (t, n) => {
				const s = n(),
					a = e && e.filter(e => e !== s.user.account.id),
					r = a && a[0],
					c = s.contacts.models[r],
					i = c && c.name,
					l = Object(o.a)(n(), i);
				l && Object(b.e)(n(), l)
			}, H = e => async (t, n) => {
				Object(b.d)(n(), e)
			}, G = () => async (e, t) => {
				Object(b.b)(t())
			}, V = () => async (e, t) => {
				Object(b.a)(t())
			}, W = e => async (t, n) => {
				const s = n(),
					a = Object(c.f)(s, e);
				a && Object(f.d)(s, a, O.AWARD_RECEIVED)
			}, z = e => async (t, n) => {
				const s = n(),
					a = Object(c.f)(s, e);
				a && Object(f.e)(s, a, O.AWARD_RECEIVED)
			}, K = () => async (e, t) => {
				const n = t();
				Object(l.c)(n) === r.a.VIEW_INVITE && Object(f.f)(n)
			}, q = () => async (e, t) => {
				const n = t();
				Object(f.c)(n)
			}, Z = () => async (e, t) => {
				Object(f.b)(t())
			}, Q = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "edit_theme",
					source: s.b.ChatSettings,
					action: s.a.Click,
					chat: {
						...Object(d.A)(e),
						...Object(d.q)(e),
						...Object(d.g)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, J = e => async (t, n) => {
				((e, t) => Object(h.a)({
					noun: "select_theme",
					source: s.b.ChatSettings,
					action: s.a.Click,
					chat: {
						...Object(d.A)(e),
						...Object(d.q)(e),
						...Object(d.g)(e)
					},
					...Object(u.a)(e),
					actionInfo: {
						...Object(m.a)(e),
						settingValue: t
					}
				}))(n(), e)
			}, Y = e => async (t, n) => {
				((e, t) => {
					Object(h.a)({
						noun: "create_chat",
						source: s.b.UserHovercard,
						action: s.a.Click,
						chat: {
							...Object(d.E)(e, t),
							...Object(d.C)(e, t),
							...Object(d.D)(e, t)
						},
						...Object(u.a)(e),
						...Object(u.b)(e)
					})
				})(n(), e)
			}, X = () => async (e, t) => {
				Object(g.a)(t())
			}, $ = () => async (e, t) => {
				Object(g.c)(t())
			}, ee = e => async (t, n) => {
				const r = n();
				r.tooltipId === e && (e === a.b && (e => {
					Object(h.a)({
						noun: "snoomoji",
						source: s.b.ChatKeyboard,
						action: s.a.Click,
						chat: {
							...Object(d.A)(e),
							...Object(d.q)(e),
							...Object(d.g)(e)
						},
						...Object(u.a)(e)
					})
				})(r), e === a.a && (e => {
					Object(h.a)({
						noun: "share_gif",
						source: s.b.ChatKeyboard,
						action: s.a.Click,
						chat: {
							...Object(d.A)(e),
							...Object(d.q)(e),
							...Object(d.g)(e)
						},
						...Object(u.a)(e)
					})
				})(r))
			}, te = () => async (e, t) => {
				(e => {
					Object(h.a)({
						noun: "other_message",
						source: s.b.ChatView,
						action: s.a.ModDelete,
						chat: {
							...Object(d.A)(e),
							...Object(d.q)(e),
							...Object(d.g)(e),
							...Object(d.s)(e),
							...Object(d.o)(e),
							...Object(d.x)(e)
						},
						...Object(u.a)(e)
					})
				})(t())
			}, ne = e => async (t, n) => {
				const a = n(),
					r = Object(l.b)(a),
					c = (e => {
						switch (e) {
							case s.b.ChatSettings:
								return s.b.ChatSettings;
							default:
								return s.b.ChatView
						}
					})(r && r.source);
				((e, t, n) => {
					Object(h.a)({
						noun: "user",
						source: n,
						action: s.a.Kick,
						chat: {
							...Object(d.A)(e),
							...Object(d.q)(e),
							...Object(d.g)(e),
							...Object(d.s)(e),
							...Object(d.o)(e),
							...Object(d.x)(e)
						},
						...Object(u.a)(e),
						actionInfo: {
							settingValue: t,
							...Object(m.a)(e)
						}
					})
				})(n(), e, c)
			}, se = e => async (t, n) => {
				Object(f.h)(n(), e)
			}, ae = e => async (t, n) => {
				Object(f.h)(n(), e)
			}, re = (e, t) => async (n, s) => {
				Object(f.a)(s(), e, t)
			}, ce = (e, t) => async (n, s) => {
				Object(f.g)(s(), e, t)
			}, oe = (e, t) => async (n, s) => {
				Object(p.b)(s(), e, t, O.AWARD_RECEIVED)
			}, ie = e => async (t, n) => {
				t(j(e)), t((() => async (e, t) => {
					const n = t(),
						s = Object(i.b)(n);
					Object(p.c)(t(), s)
				})())
			}, le = e => async (t, n) => {
				((e, t) => {
					Object(h.a)({
						noun: s.e.UserId,
						source: s.f.Experiment,
						action: s.d.Expose,
						experiment: {
							...t
						},
						chat: {
							...Object(d.A)(e),
							...Object(d.g)(e)
						},
						...Object(u.a)(e)
					})
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
			var s = n("./node_modules/lodash/isEqual.js"),
				a = n.n(s),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/selectors/channels.ts");
			const o = "TYPING_INDICATOR__UPDATE",
				i = Object(r.a)(o),
				l = ({
					channelId: e,
					usernames: t
				}) => async (n, s) => {
					const r = Object(c.w)(s(), "channelId"),
						o = s().typingIndicator.usernames,
						l = e === r,
						d = t.length > 3 && o.length > 3,
						u = !a()(t, o);
					l && u && !d && n(i({
						usernames: t
					}))
				}
		},
		"./src/chat/actions/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "q", (function() {
				return w
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "u", (function() {
				return k
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "v", (function() {
				return F
			})), n.d(t, "h", (function() {
				return H
			})), n.d(t, "m", (function() {
				return V
			})), n.d(t, "k", (function() {
				return W
			})), n.d(t, "t", (function() {
				return z
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "s", (function() {
				return q
			})), n.d(t, "c", (function() {
				return Z
			})), n.d(t, "n", (function() {
				return Y
			})), n.d(t, "b", (function() {
				return X
			})), n.d(t, "o", (function() {
				return te
			})), n.d(t, "p", (function() {
				return se
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/chunk.js"),
				a = n.n(s),
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
				f = n("./src/chat/helpers/errors.ts"),
				g = n("./src/chat/models/Channel/index.ts"),
				O = n("./src/chat/models/Contact/index.ts"),
				C = n("./src/chat/models/Experiment/index.ts"),
				E = n("./src/chat/models/User/index.ts"),
				j = n("./src/chat/selectors/channels.ts"),
				_ = n("./src/chat/singleton/SendbirdSDK.ts");
			const v = "USER__ACCOUNT_FETCH_COMPLETED",
				I = "USER__REDDAID_RECEIVED",
				x = "USER__LOID_RECEIVED",
				y = "USER__SESSION_TRACKER_RECEIVED",
				S = "FETCH_EXPERIMENTS_COMPLETED",
				w = Object(i.a)(x),
				N = Object(i.a)("USER__ACCOUNT_FETCH_PENDING"),
				T = Object(i.a)(v),
				A = Object(i.a)("USER__ACCOUNT_FETCH_FAILED"),
				M = Object(i.a)(I),
				k = Object(i.a)(y),
				D = Object(i.a)(S),
				P = () => async (e, t, {
					apiContext: n
				}) => {
					const s = t(),
						{
							session: a,
							account: r,
							experiments: o
						} = s.user;
					if (!a || r && !c()(o)) return;
					e(N());
					const i = await Object(m.c)(n());
					if (i.ok && i.body && i.body.features) {
						const {
							body: t,
							body: {
								features: n
							}
						} = i, s = Object(E.b)(t), a = Object(C.a)(n), r = !!s.prefNightmode;
						e(T(s)), e(D(a)), e(Object(d.switchTheme)(r))
					} else e(A(i.error))
				}, R = "USER__USERS_FETCH_COMPLETED", L = Object(i.a)("USER__USERS_FETCH_PENDING"), U = Object(i.a)(R), B = Object(i.a)("USER__USERS_FETCH_FAILED"), F = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().contacts.models,
						c = e.filter(e => !r[e]),
						o = a()(c, 100);
					if (!c.length) return;
					t(L(e));
					const i = await Promise.all(o.map(e => Object(b.e)(s(), e))).catch(() => []);
					for (const e of i)
						if (e.ok) {
							const n = Object(E.a)(e.body);
							t(U(n))
						} else t(B())
				}, H = "USERS__USERS_ADD_SELECTED", G = Object(i.a)(H), V = e => async t => {
					t(G(e)), t(Object(u.j)(e))
				}, W = "USERS__USERS_REMOVE_SELECTED", z = Object(i.a)(W), K = "USERS__USERS_REMOVE_ALL_SELECTED", q = Object(i.a)(K), Z = "USERS__BLOCK_USER_COMPLETED", Q = Object(i.a)(Z), J = Object(i.a)("USERS__BLOCK_USER_FAILED"), Y = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					const r = s(),
						c = r.contacts.models[e],
						i = c && c.name,
						d = Object(j.s)(r),
						u = Object(j.h)(r) || h.b.JOINED,
						p = d && d.type === g.a.Direct,
						b = Object(j.j)(r);
					if (!b) throw new f.a("currentChannel", b);
					const O = b.channelId;
					if (!O) throw new f.a("blockedChannelId", O);
					const C = await Object(m.a)(a(), e);
					C && C.ok && p ? (await _.a.hideChannel(), n(Q({
						userId: e,
						username: i
					})), t || (n(Object(l.K)(O)), n(Object(l.O)(u)))) : C && C.ok && !p ? (n(Q({
						userId: e,
						username: i
					})), t || n(Object(o.a)())) : C && n(J(C.error))
				}, X = "BLOCKED_USER_LIST_FETCH_COMPLETED", $ = Object(i.a)("BLOCKED_USER_LIST_FETCH_FAILED"), ee = Object(i.a)(X), te = () => async (e, t, {
					apiContext: n
				}) => {
					const {
						contacts: s
					} = t();
					if (!s.fetchedBlockedUsers) {
						const t = await Object(b.d)(n());
						if (t.ok && t.body && t.body.data) {
							const {
								children: n
							} = t.body.data, {
								models: a
							} = s, r = {};
							n.forEach(e => {
								if (a[e.id]) r[e.id] = {
									...a[e.id],
									isBlocked: !0
								};
								else {
									const {
										date: t,
										...n
									} = e;
									r[e.id] = {
										...O.b,
										...n,
										isBlocked: !0
									}
								}
							}), e(ee({
								blockedContacts: r
							}))
						} else e($(t.error))
					}
				}, ne = Object(i.a)("MODERATOR__KICK_USER"), se = (e, t, n) => async (s, a, {
					apiContext: r
				}) => {
					await Object(p.k)(r(), e, t, n).then(() => {
						s(ne({
							userId: t
						})), s(Object(o.a)())
					}).catch(f.b)
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
				return f
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/chat/actions/tooltip.ts"),
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
				t(Object(a.c)({
					tooltipId: e
				})), t(Object(r.P)())
			}, p = e => async (t, n) => {
				const a = n(),
					r = Object(i.d)(a);
				if (r) {
					const n = Object(o.getRedirectURL)(Object(o.userActionUrl)(r, e, d));
					t(Object(s.b)(n))
				}
			}, b = e => async (t, n) => {
				const a = n(),
					r = Object(i.d)(a);
				if (r) {
					const n = Object(o.getRedirectURL)(Object(o.userActionUrl)(r, e, u));
					t(Object(s.b)(n))
				}
			}, f = e => async (t, n) => {
				const a = n(),
					r = Object(i.d)(a);
				r && t(Object(s.b)(Object(o.userActionUrl)(r, e, h, {
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
				gradient: "YBmiF_k8e6V87NzALylZY",
				DropdownTrigger: "_2g2FuE9xJbJ5iuYJEimir3",
				dropdownTrigger: "_2g2FuE9xJbJ5iuYJEimir3",
				isFullSize: "_3piMgZDajikeEGHJZ1KNH8",
				Settings: "raiulWwI-qWpXbahTw6ZH",
				settings: "raiulWwI-qWpXbahTw6ZH",
				OptionsContainer: "_2SD7gK3ClN3qyUchNQuteD",
				optionsContainer: "_2SD7gK3ClN3qyUchNQuteD"
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
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
				userId: s
			}) => a.a.createElement("span", {
				className: Object(r.a)(e, {
					[i.a.small]: t
				})
			}, n ? a.a.createElement(a.a.Fragment, null, a.a.createElement(u, {
				userId: s
			}), a.a.createElement(h, {
				userId: n
			})) : a.a.createElement(d, {
				userId: s,
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
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
				f = n("./src/chat/icons/Userpic/index.tsx"),
				g = n("./src/chat/models/Channel/index.ts"),
				O = n("./src/chat/selectors/channels.ts"),
				C = n("./src/chat/selectors/members.ts"),
				E = n("./src/chat/selectors/user.ts"),
				j = n("./src/chat/components/ChatMemberList/index.m.less"),
				_ = n.n(j);
			const v = l.a.wrapped(u.a, "MemberActionDropdown", _.a),
				I = l.a.wrapped(({
					className: e,
					children: t,
					onClick: n
				}) => r.a.createElement("li", {
					onClick: n,
					className: e
				}, t), "ListItem", _.a),
				x = l.a.span("IconContainer", _.a),
				y = l.a.wrapped(m.a, "Title", _.a),
				S = l.a.span("Warning", _.a),
				w = l.a.span("Info", _.a),
				N = Object(p.a)({
					channelType: e => Object(O.w)(e, "type"),
					members: (e, t) => t.members || Object(C.b)(e, t.channelId) || [],
					currentUserId: E.a
				}),
				T = Object(c.b)(N, e => ({
					onViewProfile: t => {
						e(Object(d.q)()), e(Object(d.w)()).then(() => {
							window.open(`${o.a.redditUrl}/user/${t}`)
						})
					}
				})),
				A = ({
					className: e,
					channelId: t,
					channelType: n,
					currentUserId: a,
					members: c,
					minimal: o,
					modIndicator: l,
					onClick: d,
					onSelectName: u,
					onViewProfile: m,
					selectIndex: p,
					useNSFWIcons: O
				}) => (((e, t, n) => {
					if (n && void 0 !== t && e.length >= t) {
						const s = e[t];
						s && n(s.name)
					}
				})(c, p, u), r.a.createElement("ul", {
					className: e
				}, c && c.map((e, c) => r.a.createElement(I, {
					key: e.name,
					className: Object(i.a)(h.a, {
						[_.a.selected]: p === c,
						[_.a.withMenu]: !o
					}),
					onClick: () => {
						d ? d(e.name) : m(e.name)
					}
				}, r.a.createElement(x, null, O && e.isNSFW ? r.a.createElement(b.b, null) : r.a.createElement(f.a, {
					userId: e.id
				})), r.a.createElement(y, null, e.name), e.isModerator && l && r.a.createElement(w, null, n && n === g.a.Subreddit ? s.fbt._("Moderator", null, {
					hk: "48EtBe"
				}) : s.fbt._("Host", null, {
					hk: "4berci"
				})), e.isNSFW && r.a.createElement(S, null, s.fbt._("NSFW", null, {
					hk: "36qPno"
				})), e.isBlockedByMe && r.a.createElement(S, null, s.fbt._("Blocked", null, {
					hk: "1RUrSV"
				})), !o && e.id !== a && r.a.createElement(v, {
					channelId: t,
					containerClassName: h.a,
					dropdownIndex: c,
					id: `MemberAction--Select-${c}`,
					userId: e.id,
					isBlockedUser: e.isBlockedByMe
				})))));
			A.displayName = "ChatMemberList", t.a = T(A)
		},
		"./src/chat/components/CloseIcon/index.m.less": function(e, t, n) {
			e.exports = {
				IconButton: "_2SeZKjVwSpNwqshVnDJkYF",
				iconButton: "_2SeZKjVwSpNwqshVnDJkYF"
			}
		},
		"./src/chat/components/CloseIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = e => r.a.createElement(p.a, b({}, e, {
				viewBox: "0 0 20 20"
			}), r.a.createElement("polygon", {
				points: "18.442 2.442 17.558 1.558 10 9.116 2.442 1.558 1.558 2.442 9.116 10 1.558 17.558 2.442 18.442 10 10.884 17.558 18.442 18.442 17.558 10.884 10 18.442 2.442"
			}));
			f.displayName = "NavClose";
			var g = n("./src/chat/selectors/app.ts"),
				O = n("./src/chat/components/CloseIcon/index.m.less"),
				C = n.n(O);
			t.a = ({
				className: e
			}) => {
				const t = Object(c.d)();
				Object(c.e)(g.a);
				return r.a.createElement(h.c, {
					className: Object(o.a)(C.a.IconButton, e),
					onClick: Object(m.b)(() => {
						t(Object(i.sizeChanged)(u.a.HIDDEN)), t(Object(d.g)()), t(Object(l.b)())
					}),
					title: s.fbt._("Close chat", null, {
						hk: "4dFacQ"
					})
				}, r.a.createElement(f, null))
			}
		},
		"./src/chat/components/CrisisFlow/CrisisFlowPage.m.less": function(e, t, n) {
			e.exports = {
				CrisisImageContainer: "_36-nbOUnhrDYzwY3XUDdbz",
				crisisImageContainer: "_36-nbOUnhrDYzwY3XUDdbz",
				CrisisTitle: "_2aQjqtQ-OZ46anpylzLZtW",
				crisisTitle: "_2aQjqtQ-OZ46anpylzLZtW",
				CrisisDescription: "_2gvKomdzFtwSLEb27AEHwR",
				crisisDescription: "_2gvKomdzFtwSLEb27AEHwR"
			}
		},
		"./src/chat/components/CrisisFlow/CrisisFlowPage.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/config.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/components/CrisisFlow/CrisisFlowPage.m.less"),
				i = n.n(o),
				l = n("./src/chat/components/CrisisFlow/CrisisMainPage/index.m.less"),
				d = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = c.a.div("CrisisContent", d.a), m = c.a.div("CrisisImageContainer", i.a), p = c.a.img("CrisisImage", d.a), b = c.a.h2("CrisisTitle", i.a), f = c.a.p("CrisisDescription", i.a);
			var g = e => a.a.createElement(h, null, a.a.createElement(m, null, a.a.createElement(p, {
				src: `${r.a.assetPath}/img/crisis-line-icon.png`
			})), a.a.createElement(b, null, u._("Would you like Reddit to reach out to {username} ?", [u._param("username", a.a.createElement("span", null, "u/", e.username))], {
				hk: "3RFVlj"
			})), a.a.createElement(f, null, u._("We’ve partnered with {ctl} to provide redditors with support from trained Crisis Counselors, and will reach out (confidentially) to let {username} know that there are people who are here for them.", [u._param("ctl", a.a.createElement("a", {
				href: "https://www.crisistextline.org/",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "Crisis Text Line")), u._param("username", a.a.createElement("strong", null, "u/", e.username))], {
				hk: "srFNa"
			})));
			var O = e => a.a.createElement("svg", {
				className: e.className,
				width: "7",
				height: "12",
				viewBox: "0 0 7 12",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M0.21967 11.7803C-0.0732233 11.4874 -0.0732233 11.0126 0.21967 10.7197L4.68934 6.25L0.21967 1.78033C-0.0732233 1.48744 -0.0732233 1.01256 0.21967 0.71967C0.512563 0.426777 0.987437 0.426777 1.28033 0.71967L6.28033 5.71967C6.57322 6.01256 6.57322 6.48744 6.28033 6.78033L1.28033 11.7803C0.987437 12.0732 0.512563 12.0732 0.21967 11.7803Z",
				fill: "#D3D6DA"
			}));
			var C = e => a.a.createElement("svg", {
				className: e.className,
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M12.504 1.40581C10.8548 0.436577 8.91582 0.0822804 7.03046 0.405669C5.1451 0.729058 3.43503 1.70926 2.20312 3.17267C0.971219 4.63608 0.296983 6.48826 0.299833 8.40115H0.299805L0.299872 8.40828C0.313102 9.81313 0.695242 11.187 1.40423 12.3936L0.35366 15.2932C0.235566 15.6192 0.315178 15.984 0.558332 16.2311C0.801486 16.4782 1.16495 16.5636 1.49275 16.4508L4.41155 15.4461C4.8205 15.6752 5.24681 15.8723 5.68667 16.0356C6.15267 16.2085 6.67064 15.971 6.84359 15.505C7.01655 15.039 6.77899 14.521 6.31299 14.348C5.85073 14.1765 5.40714 13.9583 4.98911 13.6968C4.75881 13.5527 4.47577 13.5204 4.21892 13.6088L2.68747 14.1359L3.246 12.5944C3.34354 12.3252 3.30716 12.0256 3.14802 11.7876C2.47615 10.7827 2.1119 9.60363 2.09983 8.3949C2.09845 6.90836 2.62279 5.46917 3.58017 4.33187C4.53832 3.19367 5.86837 2.43129 7.33476 2.17976C8.80115 1.92824 10.3092 2.2038 11.5919 2.95764C12.8746 3.71149 13.8491 4.89497 14.3428 6.29846C14.5078 6.76735 15.0216 7.01375 15.4905 6.84881C15.9594 6.68386 16.2058 6.17004 16.0408 5.70115C15.4061 3.89665 14.1531 2.37504 12.504 1.40581ZM18.8305 8.17201C17.1805 7.45435 15.3385 7.30651 13.5952 7.75182C11.8518 8.19714 10.3064 9.21026 9.20265 10.6313C8.09895 12.0524 7.49983 13.8005 7.49983 15.5998H7.49979L7.49987 15.6083C7.5131 17.0132 7.89524 18.387 8.60423 19.5937L7.55365 22.4932C7.43556 22.8192 7.51517 23.184 7.75833 23.4311C8.00148 23.6782 8.36494 23.7637 8.69274 23.6508L11.6074 22.6476C13.0373 23.4576 14.6834 23.8153 16.3272 23.6671C18.1192 23.5055 19.8065 22.7519 21.1227 21.525C22.4389 20.2982 23.3092 18.668 23.5961 16.8917C23.8831 15.1154 23.5705 13.2941 22.7075 11.7152C21.8446 10.1363 20.4805 8.88968 18.8305 8.17201ZM14.0406 9.49583C15.3966 9.14947 16.8292 9.26445 18.1126 9.82264C19.3959 10.3808 20.4569 11.3504 21.1281 12.5785C21.7992 13.8065 22.0424 15.2231 21.8192 16.6046C21.596 17.9862 20.9191 19.2541 19.8954 20.2083C18.8717 21.1625 17.5594 21.7487 16.1655 21.8744C14.7717 22.0001 13.3757 21.658 12.1978 20.9023C11.9661 20.7537 11.6792 20.7192 11.4189 20.8088L9.88747 21.336L10.446 19.7944C10.5435 19.5252 10.5072 19.2256 10.348 18.9876C9.67627 17.9829 9.31203 16.8041 9.29983 15.5956C9.30077 14.1976 9.76668 12.8396 10.6242 11.7354C11.4827 10.6302 12.6847 9.84218 14.0406 9.49583Z",
				fill: "#1A1A1B"
			}));
			var E = e => a.a.createElement("svg", {
				className: e.className,
				width: "22",
				height: "24",
				viewBox: "0 0 22 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M10.6816 0C9.46749 0 8.3031 0.482306 7.44459 1.34082C6.58608 2.19932 6.10377 3.36371 6.10377 4.57783V7.08038C6.10377 8.29449 6.58608 9.45888 7.44459 10.3174C8.3031 11.1759 9.46749 11.6582 10.6816 11.6582C11.8957 11.6582 13.0601 11.1759 13.9186 10.3174C14.7771 9.45888 15.2594 8.29449 15.2594 7.08038V4.57783C15.2594 3.36371 14.7771 2.19933 13.9186 1.34082C13.0601 0.482306 11.8957 0 10.6816 0ZM8.73939 2.63562C9.2545 2.12052 9.95313 1.83113 10.6816 1.83113C11.4101 1.83113 12.1087 2.12052 12.6238 2.63562C13.1389 3.15073 13.4283 3.84936 13.4283 4.57783V7.08038C13.4283 7.80885 13.1389 8.50748 12.6238 9.02258C12.1087 9.53769 11.4101 9.82707 10.6816 9.82707C9.95313 9.82707 9.2545 9.53769 8.73939 9.02258C8.22429 8.50748 7.9349 7.80885 7.9349 7.08038V4.57783C7.9349 3.84936 8.22429 3.15073 8.73939 2.63562Z",
				fill: "#1A1A1B"
			}), a.a.createElement("path", {
				d: "M5.79858 13.6236C4.2607 13.6236 2.78581 14.2345 1.69837 15.322C0.610921 16.4094 0 17.8843 0 19.4222V23.0844C0 23.5901 0.409913 24 0.915566 24C1.42122 24 1.83113 23.5901 1.83113 23.0844V19.4222C1.83113 18.3699 2.24913 17.3608 2.99317 16.6168C3.73721 15.8727 4.74635 15.4547 5.79858 15.4547H15.5646C16.6169 15.4547 17.626 15.8727 18.37 16.6168C19.1141 17.3608 19.5321 18.3699 19.5321 19.4222V23.0844C19.5321 23.5901 19.942 24 20.4476 24C20.9533 24 21.3632 23.5901 21.3632 23.0844V19.4222C21.3632 17.8843 20.7523 16.4094 19.6648 15.322C18.5774 14.2345 17.1025 13.6236 15.5646 13.6236H5.79858Z",
				fill: "#1A1A1B"
			}));
			var j = e => a.a.createElement("svg", {
					className: e.className,
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("circle", {
					cx: "32",
					cy: "32",
					r: "32",
					fill: "#46D160",
					"fill-opacity": "0.2"
				}), a.a.createElement("path", {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M50.4967 21.6638L47.1391 18.3038C46.6879 17.8526 46.0783 17.6006 45.4423 17.6006C44.8039 17.6006 44.1943 17.8526 43.7455 18.3038L26.9599 35.087L20.2567 28.3838C19.3207 27.4454 17.8015 27.4454 16.8631 28.3838L13.5031 31.7438C12.5647 32.6822 12.5647 34.2014 13.5031 35.1374L25.2631 46.8974C25.7335 47.3654 26.3455 47.6006 26.9599 47.6006C27.5743 47.6006 28.1887 47.3654 28.6567 46.8974L50.4967 25.0574C51.4351 24.119 51.4351 22.6022 50.4967 21.6638Z",
					fill: "#46D160"
				})),
				_ = n("./src/chat/components/CrisisFlow/CrisisThankYouPage/index.m.less"),
				v = n.n(_);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = c.a.div("CrisisImageContainer", i.a), y = c.a.h2("CrisisTitle", i.a), S = c.a.p("CrisisDescription", i.a), w = c.a.div("CrisisOtherActions", v.a), N = c.a.h4("CrisisOtherActionsTitle", v.a), T = c.a.div("CrisisLinkIconContainer", v.a), A = c.a.div("CrisisLinkText", v.a), M = c.a.h3("CrisisLinkTitle", v.a), k = c.a.p("CrisisLinkDescription", v.a);
			var D = e => a.a.createElement("div", {
				className: v.a.CrisisThankYouPage
			}, a.a.createElement(x, null, a.a.createElement(j, {
				className: v.a.CrisisTickImage
			})), a.a.createElement(y, null, I._("Thanks for caring about your fellow redditor", null, {
				hk: "1ePh84"
			})), a.a.createElement(S, null, I._("We’ve reached out to {username} . By letting us know, you’ve helped connect them to people who are there to listen and provide support.", [I._param("username", a.a.createElement("span", null, "u/", e.username))], {
				hk: "3X1mGY"
			})), a.a.createElement(w, null, a.a.createElement(N, null, I._("Other things you can do", null, {
				hk: "4oCunD"
			})), a.a.createElement("a", {
				href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
				target: "_blank",
				rel: "noopener noreferrer",
				className: v.a.CrisisLink
			}, a.a.createElement(T, null, a.a.createElement(C, null)), a.a.createElement(A, null, a.a.createElement(M, null, I._("Learn how to help someone in crisis", null, {
				hk: "3HohFx"
			})), a.a.createElement(k, null, I._("Get advice on what you can say and how to be supportive.", null, {
				hk: "1NHS5d"
			}))), a.a.createElement(O, {
				className: v.a.CrisisLinkArrow
			})), a.a.createElement("a", {
				href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/how-do-i-get-myself-support-after-helping-someone",
				target: "_blank",
				rel: "noopener noreferrer",
				className: v.a.CrisisLink
			}, a.a.createElement(T, null, a.a.createElement(E, null)), a.a.createElement(A, null, a.a.createElement(M, null, I._("Get yourself support", null, {
				hk: "kTT0U"
			})), a.a.createElement(k, null, I._("If this has brought up difficult emotions, there are people and resources here for you too.", null, {
				hk: "37R4JZ"
			}))), a.a.createElement(O, {
				className: v.a.CrisisLinkArrow
			}))));
			class P extends a.a.Component {
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement(s.Fragment, null, e.ctlSubmitted ? a.a.createElement(D, {
						username: e.username
					}) : a.a.createElement(g, {
						username: e.username
					}))
				}
			}
			t.a = P
		},
		"./src/chat/components/CrisisFlow/CrisisFooter/index.m.less": function(e, t, n) {
			e.exports = {
				CrisisFooter: "vfdnIWIISdzhZPUT-GCpq",
				crisisFooter: "vfdnIWIISdzhZPUT-GCpq",
				CrisisButton: "_1EhJSqQWOUyLY9L3mizgW8",
				crisisButton: "_1EhJSqQWOUyLY9L3mizgW8",
				CrisisSubmitButton: "_3iSz2lu1_8DIgksxdsm00h",
				crisisSubmitButton: "_3iSz2lu1_8DIgksxdsm00h",
				loadingIcon: "_2dyNxI1eokPfsDrnYttq5_"
			}
		},
		"./src/chat/components/CrisisFlow/CrisisMainPage/index.m.less": function(e, t, n) {
			e.exports = {
				CrisisContent: "_2_t_z_OLpHPRlGpX9LWcUx",
				crisisContent: "_2_t_z_OLpHPRlGpX9LWcUx",
				CrisisImage: "_2l51ospAcUcxLIqWyEdRU8",
				crisisImage: "_2l51ospAcUcxLIqWyEdRU8"
			}
		},
		"./src/chat/components/CrisisFlow/CrisisThankYouPage/index.m.less": function(e, t, n) {
			e.exports = {
				CrisisThankYouPage: "_1YGZOKyQ3CHF5tXLhJgx7t",
				crisisThankYouPage: "_1YGZOKyQ3CHF5tXLhJgx7t",
				CrisisTickImage: "_2MyVl8FWmUTuR5sX7j5lju",
				crisisTickImage: "_2MyVl8FWmUTuR5sX7j5lju",
				CrisisOtherActions: "_2YX-3vbrvj1foRzrNO4EtV",
				crisisOtherActions: "_2YX-3vbrvj1foRzrNO4EtV",
				CrisisOtherActionsTitle: "jCtWrgos0ZHYQTyvBeSv1",
				crisisOtherActionsTitle: "jCtWrgos0ZHYQTyvBeSv1",
				CrisisLink: "_2qHrunDTUgtPpGiOYhBaEv",
				crisisLink: "_2qHrunDTUgtPpGiOYhBaEv",
				CrisisLinkIconContainer: "_3dqV_XDoe08eNBZxDpZZ-c",
				crisisLinkIconContainer: "_3dqV_XDoe08eNBZxDpZZ-c",
				CrisisLinkText: "_1WBlqVZP7G0b4kIXTQZ10r",
				crisisLinkText: "_1WBlqVZP7G0b4kIXTQZ10r",
				CrisisLinkTitle: "_2b34ISXcVjXaDFnRDckToY",
				crisisLinkTitle: "_2b34ISXcVjXaDFnRDckToY",
				CrisisLinkDescription: "_3V7_SCN7iGSKuTWFnjCFI",
				crisisLinkDescription: "_3V7_SCN7iGSKuTWFnjCFI",
				CrisisLinkArrow: "_1f9Ywkur82OvdSaZmbqICg",
				crisisLinkArrow: "_1f9Ywkur82OvdSaZmbqICg"
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
		"./src/chat/components/FormBuilder/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "chat-components-FormBuilder",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~chat-components-FormBuilder~reddit-components-FormBuilder"), n.e("chat-components-FormBuilder")]).then(n.bind(null, "./src/chat/components/FormBuilder/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/chat/components/FormBuilder/index.tsx"
				}
			})
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
				return zt
			}));
			var s = n("./node_modules/lodash/isEqual.js"),
				a = n.n(s),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/actions/promo/index.ts"),
				u = n("./node_modules/lodash/map.js"),
				h = n.n(u),
				m = n("./node_modules/lodash/sortBy.js"),
				p = n.n(m),
				b = n("./src/lib/constants/index.ts"),
				f = n("./src/chat/actions/channel.ts"),
				g = n("./src/chat/actions/message/index.ts"),
				O = n("./src/chat/actions/message/inboxScroller.ts"),
				C = n("./src/chat/actions/message/richUnit.ts"),
				E = n("./src/chat/helpers/time/index.tsx"),
				j = n("./src/chat/components/DateSplitter/index.m.less"),
				_ = n.n(j);
			var v = e => c.a.createElement("div", {
					className: _.a.TimeWrapper
				}, c.a.createElement("time", {
					className: _.a.Time
				}, Object(E.a)(e.date))),
				I = n("./node_modules/fbt/lib/FbtPublic.js"),
				x = n("./src/chat/helpers/json.ts"),
				y = n("./src/chat/icons/Userpic/index.tsx"),
				S = n("./src/chat/components/Intro/index.m.less"),
				w = n.n(S);
			const N = l.a.span("Wrapper", w.a),
				T = l.a.div("ChannelDescription", w.a),
				A = l.a.ul("Users", w.a),
				M = l.a.li("User", w.a),
				k = l.a.span("UserTitle", w.a);
			var D = ({
					channel: e,
					users: t
				}) => c.a.createElement(N, null, c.a.createElement(A, null, t.map((e, t, n) => c.a.createElement(M, {
					key: e.id
				}, c.a.createElement(y.a, {
					height: "16px",
					width: "16px",
					userId: e.id
				}), c.a.createElement(k, null, `${e.name}${t<n.length-1?",":""}`)))), c.a.createElement(T, null, (e => {
					try {
						const t = e.data && Object(x.a)(e.data, {
							welcome_text: ""
						});
						if (t && t.welcome_text) return t && t.welcome_text
					} catch (t) {}
					return I.fbt._("This is the start of a beautiful thing. Say something nice, or share a cat fact.", null, {
						hk: "J8whX"
					})
				})(e))),
				P = n("./src/chat/components/Message/Bubble.tsx"),
				R = n("./src/chat/components/Message/LinkedText.tsx"),
				L = n("./src/chat/components/Message/SystemMessage.m.less"),
				U = n.n(L);
			const B = l.a.wrapped(R.a, "LinkedText", U.a);
			var F = l.a.wrapped(e => {
					const {
						message: t,
						className: n
					} = e, {
						messageData: {
							value: s,
							highlights: a
						}
					} = t;
					return c.a.createElement("div", {
						className: n
					}, c.a.createElement(B, {
						value: s,
						highlighMentionGroupLinks: a
					}))
				}, "SystemMessage", U.a),
				H = n("./src/chat/components/MessageInput/index.tsx"),
				G = n("./src/chat/actions/tracking.ts"),
				V = n("./src/chat/components/MessageQuickReplyPicker/index.m.less"),
				W = n.n(V),
				z = n("./src/chat/components/Snoomoji/index.tsx"),
				K = n("./src/chat/constants/messages.ts"),
				q = n("./src/chat/selectors/channels.ts");
			const Z = ["upvote", "snoo"],
				Q = l.a.div("SnooWrapper", W.a),
				J = l.a.wrapped(e => {
					const {
						className: t,
						text: n,
						type: s,
						onReply: a
					} = e;
					return c.a.createElement("button", {
						tabIndex: 0,
						className: t,
						onClick: () => a(n)
					}, (() => {
						switch (s) {
							case K.c.TEXT:
								return n;
							case K.c.SNOOMOJI:
								return c.a.createElement(Q, null, c.a.createElement(z.a, {
									iconName: n
								}))
						}
					})())
				}, "ReplyItem", W.a);
			var Y = l.a.wrapped(e => {
					const {
						className: t,
						channelId: n
					} = e, s = Object(o.d)();
					return Object(o.e)(e => Object(q.M)(e, n)) ? c.a.createElement("div", {
						className: t
					}, c.a.createElement(J, {
						type: K.c.TEXT,
						text: I.fbt._("Thanks for the award!", null, {
							hk: "3aibi5"
						}),
						onReply: e => {
							s(Object(g.q)(n, String(e).trim(), K.c.TEXT)), s(Object(G.t)(G.a.FIRST, String(e).trim()))
						}
					}), Z.map((e, t) => c.a.createElement(J, {
						type: K.c.SNOOMOJI,
						key: e,
						text: e,
						onReply: e => {
							s(Object(g.q)(n, e, K.c.SNOOMOJI)), s(Object(G.t)(t + 2, e))
						}
					}))) : null
				}, "MessageQuickReplyPicker", W.a),
				X = n("./src/chat/components/OverlayNav/index.tsx"),
				$ = n("./src/chat/components/Scroller/index.tsx"),
				ee = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				te = n("./src/chat/models/Channel/index.ts"),
				ne = n("./src/chat/components/TypingIndicator/index.m.less"),
				se = n.n(ne);
			const ae = l.a.span("IndicatorText", se.a);
			ae.displayName = "IndicatorText";
			var re = e => c.a.createElement(ae, {
					className: e.className
				}, ((e, t) => e === te.a.Direct ? I.fbt._("is typing...", null, {
					hk: "UTaH4"
				}) : 1 === t.length ? I.fbt._("{firstUser} is typing...", [I.fbt._param("firstUser", t[0])], {
					hk: "480JMK"
				}) : 2 === t.length ? I.fbt._("{firstUser} and {secondUser} are typing", [I.fbt._param("firstUser", t[0]), I.fbt._param("secondUser", t[1])], {
					hk: "3zfAnp"
				}) : t.length > 2 ? I.fbt._("Several people are typing...", null, {
					hk: "39edn3"
				}) : void 0)(e.channelType, e.usernames)),
				ce = n("./src/chat/constants/batchSizes.ts"),
				oe = n("./src/chat/helpers/chatSelector.ts"),
				ie = n("./src/chat/selectors/app.ts"),
				le = n("./src/chat/selectors/richUnits.ts"),
				de = n("./src/chat/components/MessageList/index.m.less"),
				ue = n.n(de),
				he = n("./src/chat/selectors/theme.ts");
			const {
				fbt: me
			} = n("./node_modules/fbt/lib/FbtPublic.js"), pe = l.a.wrapped(e => {
				const {
					className: t,
					innerRef: n,
					autoScrollBottom: s,
					children: a,
					loadMoreRows: r
				} = e;
				return c.a.createElement($.b, {
					loadMoreRows: r,
					autoScrollBottom: s,
					ref: n,
					className: t
				}, a)
			}, "Scroller", ue.a), be = l.a.div("Container", ue.a), fe = l.a.div("ReverseCol", ue.a), ge = l.a.span("LoadingIndicator", ue.a), Oe = l.a.span("LoadingError", ue.a), Ce = l.a.div("TypingIndicatorWrapper", ue.a), Ee = l.a.span("UserName", ue.a), je = Object(oe.a)({
				currentUser: e => e.user.account,
				channelMessages: e => Object(q.u)(e),
				channelPendingMessages: e => Object(q.v)(e),
				fetchingMessages: e => Object(q.w)(e, "fetchingMessages"),
				fetchingMessagesError: e => Object(q.w)(e, "fetchingMessagesError"),
				hasMoreMessages: e => Object(q.w)(e, "hasMoreMessages"),
				isMessageListLoaded: e => Object(q.w)(e, "isMessageListLoaded"),
				isModerator: e => Object(q.a)(e),
				typingIndicatorUsernames: e => e.typingIndicator.usernames,
				isChatMinimized: ie.a,
				isRichUnitDataReceived: e => Object(le.b)(e),
				isFullSize: ie.e,
				showPrompt: he.c
			}), _e = Object(o.b)(je, e => ({
				getPreviousMessages: () => e(Object(g.t)()),
				removeAndResetMessages: t => e(Object(O.c)(t)),
				resetChannelMessageList: t => e(Object(f.M)(t)),
				resetRichUnisDataReceived: () => e(Object(C.e)())
			})), ve = 30, Ie = 2 * ce.a.Messages;
			class xe extends c.a.Component {
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
							case te.a.Group:
								return this.props.channel.name;
							default:
								return this.getOtherMemberName()
						}
					}, this.isSplitterDisplayed = (e, t, n) => {
						if (0 === t) return !0;
						const s = new Date(e.createdAt),
							a = this.getPreviousTime(t, n);
						if (a) {
							const e = new Date(a);
							return s.getFullYear() !== e.getFullYear() || s.getMonth() !== e.getMonth() || s.getDate() !== e.getDate()
						}
						return !1
					}, this.isSystemMessageDisplayed = (e, t) => {
						const {
							mentionType: n,
							mentionedUsers: s,
							messageType: a
						} = t;
						if (a !== K.d.SYSTEM) return !1;
						if (n === K.b.CHANNEL) return !0;
						if (n === K.b.USERS && Array.isArray(s)) {
							const t = 0 === s.length,
								n = s.some(t => e.id === t.userId);
							return t || n
						}
						return !1
					}, this.renderMessages = () => {
						const {
							channelMessages: e,
							channelPendingMessages: t,
							currentUser: n,
							isChatMinimized: s,
							channel: a,
							isModerator: r
						} = this.props;
						if (e.length) {
							return p()([...e, ...t], "createdAt").map((e, t, o) => {
								const {
									createdAt: l,
									sender: d
								} = e, u = d && d.userId, h = this.getPreviousTime(t, o), m = this.getNextTime(t, o), p = this.getPreviousUserId(t, o), f = this.isSplitterDisplayed(e, t, o), g = p === u, O = this.getNextUserId(t, o) === u, C = l - h < 5 * b.ib, E = m && m - l < 5 * b.ib, j = !O || O && !E, _ = e.messageType === K.d.SYSTEM && this.isSystemMessageDisplayed(n, e), I = this.isLastCurrentUserMessage(t, o), x = ((e, t, a) => {
									const {
										sender: o
									} = e, i = o && o.userId, l = n.id === i;
									return c.a.createElement(P.a, {
										className: ue.a.MessageItemBubble,
										message: e,
										fromCurrentUser: l,
										withButton: !0,
										isChatEmbedded: s,
										showUserPic: t,
										isLastCurrentUserMessage: a,
										isCurrentUserChannelMod: r
									})
								})(e, j, Boolean(I)), y = ((e, t, s) => {
									const {
										sender: r
									} = e, o = a.type === te.a.Group, l = n.id === (null == r ? void 0 : r.userId);
									return !(t && s) && (null == r ? void 0 : r.nickname) && (null == r ? void 0 : r.userId) && o && c.a.createElement(Ee, {
										className: Object(i.a)(ue.a.UserName, {
											[ue.a.currentUser]: l
										})
									}, null == r ? void 0 : r.nickname)
								})(e, g, C), S = f && c.a.createElement(v, {
									date: l
								});
								switch (e.messageType) {
									case K.d.PENDING:
									case K.d.USER:
										return c.a.createElement(c.a.Fragment, {
											key: e.createdAt
										}, S, c.a.createElement(c.a.Fragment, null, y, x));
									case K.d.SYSTEM:
										return _ && c.a.createElement(c.a.Fragment, {
											key: e.createdAt
										}, S, c.a.createElement(F, {
											className: ue.a.SystemBubble,
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
					return !a()(this.props, e) || !a()(this.state, t)
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
					if (t.length > ve && this.isChannelSwitched(e)) {
						const e = t.length - ve,
							s = t.slice(0, e);
						n(h()(s, ({
							messageId: e
						}) => String(e)))
					}
				}
				removeResetTooOldMessages() {
					var e;
					const t = this.props.channelMessages.length > Ie,
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
				getNextUserId(e, t) {
					var n;
					const s = t[e + 1];
					return null === (n = null == s ? void 0 : s.sender) || void 0 === n ? void 0 : n.userId
				}
				getPreviousTime(e, t) {
					let n = NaN;
					return e > 0 && (n = t[e - 1].createdAt), n
				}
				isLastCurrentUserMessage(e, t) {
					const {
						currentUser: n,
						showPrompt: s
					} = this.props, {
						sender: a
					} = t[e];
					return !(n.id !== (null == a ? void 0 : a.userId) || !s) && (e === t.length - 1 || !t.slice(e + 1).some(e => {
						var t;
						return (null === (t = e.sender) || void 0 === t ? void 0 : t.userId) === (null == a ? void 0 : a.userId)
					}))
				}
				getNextTime(e, t) {
					const n = t[e + 1];
					return null == n ? void 0 : n.createdAt
				}
				loadMoreRows() {
					const {
						fetchingMessages: e,
						hasMoreMessages: t,
						getPreviousMessages: n,
						isMessageListLoaded: s
					} = this.props;
					if (!e && t && s) return n()
				}
				render() {
					const {
						props: {
							channel: e,
							channelId: t,
							fetchingMessagesError: n,
							getPreviousMessages: s,
							isMessageListLoaded: a,
							isModerator: r,
							hasMoreMessages: o,
							typingIndicatorUsernames: l,
							isFullSize: d
						},
						loadMoreRows: u
					} = this, h = this.renderMessages(), m = this.getTitle(), p = !o && a && e.members;
					return c.a.createElement(be, null, c.a.createElement(X.a, {
						channelId: t,
						showMenu: !0,
						title: m,
						channelType: null == e ? void 0 : e.type,
						showMembers: !0
					}), c.a.createElement(fe, {
						className: Object(i.a)(ue.a.ReverseCol, {
							[ue.a.isFullSize]: d
						})
					}, c.a.createElement(pe, {
						autoScrollBottom: !0,
						innerRef: this.scroller,
						loadMoreRows: u
					}, n && c.a.createElement(Oe, {
						onClick: s
					}, me._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})), p ? c.a.createElement(D, {
						users: e.members,
						channel: e
					}) : n ? c.a.createElement(Oe, {
						onClick: s
					}, me._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})) : a ? c.a.createElement(ge, null, me._("Loading history...", null, {
						hk: "4tLHUG"
					})) : c.a.createElement(ee.e, null), h)), c.a.createElement(Ce, {
						className: Object(i.a)(ue.a.TypingIndicatorWrapper, {
							[ue.a.isFullSize]: d
						})
					}, e && l.length ? c.a.createElement(re, {
						usernames: l,
						channelType: e.type
					}) : null), c.a.createElement(Y, {
						className: ue.a.MessageQuickReplyPicker,
						channelId: e.channelId
					}), c.a.createElement(H.c, {
						className: ue.a.MessageInput,
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
			var ye = _e(xe),
				Se = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				we = n("./src/higherOrderComponents/makeAsync.tsx"),
				Ne = n("./src/lib/loadWithRetries/index.ts");
			const Te = () => null;
			var Ae = Object(we.a)({
				ErrorComponent: Te,
				getComponent: () => Object(Ne.a)(() => n.e("OverlayChatMembers").then(n.bind(null, "./src/chat/components/OverlayChatMembers/index.tsx"))).then(e => e.default),
				LoadingComponent: Te
			});
			const Me = () => null;
			var ke = Object(we.a)({
					ErrorComponent: Me,
					getComponent: () => Object(Ne.a)(() => n.e("OverlayCreateChannel").then(n.bind(null, "./src/chat/components/OverlayCreateChannel/index.tsx"))).then(e => e.default),
					LoadingComponent: Me
				}),
				De = n("./src/chat/components/Sidebar/index.tsx"),
				Pe = n("./src/chat/constants/channels.ts"),
				Re = n("./src/chat/constants/container.ts"),
				Le = n("./src/chat/constants/page.ts");
			const Ue = () => null;
			var Be = Object(we.a)({
				ErrorComponent: Ue,
				getComponent: () => Object(Ne.a)(() => n.e("OverlayBlockUser").then(n.bind(null, "./src/chat/components/OverlayBlockUser/index.tsx"))).then(e => e.default),
				LoadingComponent: Ue
			});
			const Fe = () => null;
			var He = Object(we.a)({
				ErrorComponent: Fe,
				getComponent: () => Object(Ne.a)(() => n.e("OverlayChannelInvited").then(n.bind(null, "./src/chat/components/OverlayChannelInvited/index.tsx"))).then(e => e.default),
				LoadingComponent: Fe
			});
			const Ge = () => null;
			var Ve = Object(we.a)({
				ErrorComponent: Ge,
				getComponent: () => Object(Ne.a)(() => n.e("OverlayChannelRemoval").then(n.bind(null, "./src/chat/components/OverlayChannelRemoval/index.tsx"))).then(e => e.default),
				LoadingComponent: Ge
			});
			const We = () => null;
			var ze = Object(we.a)({
				ErrorComponent: We,
				getComponent: () => Object(Ne.a)(() => n.e("OverlayDeleteMessage").then(n.bind(null, "./src/chat/components/OverlayDeleteMessage/index.tsx"))).then(e => e.default),
				LoadingComponent: We
			});
			const Ke = () => null;
			var qe = Object(we.a)({
				ErrorComponent: Ke,
				getComponent: () => Object(Ne.a)(() => n.e("OverlayDirectsEmptyState").then(n.bind(null, "./src/chat/components/OverlayDirectsEmptyState/index.tsx"))).then(e => e.default),
				LoadingComponent: Ke
			});
			const Ze = () => null;
			var Qe = Object(we.a)({
				ErrorComponent: Ze,
				getComponent: () => Object(Ne.a)(() => n.e("OverlayHideChannel").then(n.bind(null, "./src/chat/components/OverlayHideChannel/index.tsx"))).then(e => e.default),
				LoadingComponent: Ze
			});
			const Je = () => null;
			var Ye = Object(we.a)({
				ErrorComponent: Je,
				getComponent: () => Object(Ne.a)(() => n.e("OverlayKickUser").then(n.bind(null, "./src/chat/components/OverlayKickUser/index.tsx"))).then(e => e.default),
				LoadingComponent: Je
			});
			const Xe = () => null;
			var $e = Object(we.a)({
				ErrorComponent: Xe,
				getComponent: () => Object(Ne.a)(() => n.e("OverlayLeaveChannel").then(n.bind(null, "./src/chat/components/OverlayLeaveChannel/index.tsx"))).then(e => e.default),
				LoadingComponent: Xe
			});
			const et = () => null;
			var tt = Object(we.a)({
				ErrorComponent: et,
				getComponent: () => Object(Ne.a)(() => n.e("OverlayNSFWWarning").then(n.bind(null, "./src/chat/components/OverlayNSFWWarning/index.tsx"))).then(e => e.default),
				LoadingComponent: et
			});
			const nt = () => null;
			var st = Object(we.a)({
					ErrorComponent: nt,
					getComponent: () => Object(Ne.a)(() => n.e("OverlayReport").then(n.bind(null, "./src/chat/components/OverlayReport/index.tsx"))).then(e => e.default),
					LoadingComponent: nt
				}),
				at = n("./src/config.ts"),
				rt = n("./node_modules/lodash/get.js"),
				ct = n.n(rt),
				ot = n("./node_modules/react-router-redux/es/index.js"),
				it = n("./node_modules/reselect/es/index.js"),
				lt = n("./src/reddit/actions/reportFlow/index.ts"),
				dt = n("./src/reddit/actions/toaster.ts"),
				ut = n("./src/chat/components/FormBuilder/async.tsx"),
				ht = n("./src/graphql/operations/ReportForm.json"),
				mt = n("./src/lib/makeGqlRequest/index.ts");
			var pt = n("./src/reddit/contexts/ApiContext.tsx"),
				bt = n("./src/reddit/models/ReportFlow/index.ts"),
				ft = n("./src/reddit/models/Toast/index.ts"),
				gt = n("./src/chat/components/OverlayReport/index.m.less"),
				Ot = n.n(gt),
				Ct = n("./src/chat/actions/user.ts"),
				Et = n("./src/graphql/operations/ReportChatMessage.json");
			const jt = (e, t) => Object(mt.a)(e, {
				...Et,
				variables: t
			});
			var _t = n("./src/chat/routes/chat.ts"),
				vt = n("./src/chat/selectors/messages.ts");
			var It;
			! function(e) {
				e.Enabled = "enabled"
			}(It || (It = {}));
			const xt = Object(it.a)(e => e.experiments.models, e => {
				var t;
				return (null === (t = e.ae_reporting_revamp_d2x_chat) || void 0 === t ? void 0 : t.variant) === It.Enabled
			});
			var yt = n("./src/chat/selectors/user.ts"),
				St = n("./src/chat/components/CrisisFlow/CrisisFlowPage.tsx"),
				wt = n("./src/chat/components/CrisisFlow/CrisisFooter/index.m.less"),
				Nt = n.n(wt);
			const {
				fbt: Tt
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function At(e) {
				const {
					thankYouControls: t,
					onCloseReportFlow: n,
					onCrisisFlowSubmit: s
				} = e;
				return c.a.createElement("div", {
					className: Nt.a.CrisisFooter
				}, t ? null : c.a.createElement("a", {
					className: Nt.a.CrisisButton,
					"data-redditstyle": !0,
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					target: "_blank",
					rel: "noopener noreferrer"
				}, Tt._("Other Options", null, {
					hk: "1RadlV"
				})), c.a.createElement("button", {
					className: Nt.a.CrisisSubmitButton,
					"data-redditstyle": !0,
					onClick: t ? n : s
				}, t ? Tt._("Ok", null, {
					hk: "3Pp8M4"
				}) : Tt._("Yes", null, {
					hk: "12gtn"
				})))
			}
			const Mt = l.a.div("ReportLoaderWrapper", Ot.a),
				kt = l.a.img("LoadingIcon", Ot.a),
				Dt = "2.0",
				Pt = Object(it.c)({
					user: (e, t) => t.attr === _t.a.User ? e.contacts.models[t.attrId] : void 0,
					message: (e, t) => t.attr === _t.a.Invite || t.attr === _t.a.Message ? Object(vt.b)(e, Number(t.attrId)) : void 0,
					messageList: e => Object(q.x)(e),
					currentUserId: (e, t) => Object(yt.a)(e),
					container: e => e && e.container && e.container.size,
					isNightMode: e => Object(he.b)(e),
					inReportingRevampSelector: e => xt(e)
				}),
				Rt = Object(o.b)(Pt, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(lt.b)())
					},
					onChannelBlock: t => {
						e(Ct.n(t)), e(G.H())
					},
					showFailToast: () => e(Object(dt.f)({
						kind: ft.b.Error,
						text: I.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					})),
					onCancel: () => e(Object(ot.a)())
				})),
				Lt = async (e, t, n) => {
					var s;
					const a = await ((e, {
						itemId: t,
						formVersion: n,
						hostAppName: s
					}) => Object(mt.a)(e, {
						...ht,
						variables: {
							itemId: t,
							hostAppName: s,
							formVersion: n
						}
					}))(e, {
						itemId: t,
						formVersion: n
					});
					if (a && a.ok) {
						const e = null === (s = a.body.data.reportForm) || void 0 === s ? void 0 : s.form;
						return e ? JSON.parse(e) : null
					}
				};
			class Ut extends c.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCancel) return this.props.onCancel()
					}, this.onOpenCtlFlow = () => {
						this.props.postMessage && this.props.postMessage({
							type: "openCtl"
						}), this.setState({
							ctlFlowOpened: !0
						})
					}, this.onReportSubmit = async (e, t) => {
						const {
							props: {
								gqlContext: n,
								showFailToast: s,
								message: a
							}
						} = this;
						if (!a || !a.sender) return;
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: r,
							ruleType: c
						} = e, o = {
							fromHelpDesk: !1,
							senderRedditorId: a.sender.userId,
							sendbirdId: String(a.messageId),
							channelUrl: a.channelSendbirdUrl
						};
						"site" === c && (o.siteRule = ct()(t, r.ref).value || ct()(t, r.ref));
						(await (() => jt(n(), {
							input: o
						}))()).ok || s()
					}, this.onCrisisFlowSubmit = async () => {
						const {
							props: {
								gqlContext: e,
								showFailToast: t,
								message: n
							}
						} = this;
						if (!n || !n.sender) return;
						const s = {
							fromHelpDesk: !1,
							senderRedditorId: n.sender.userId,
							sendbirdId: String(n.messageId),
							channelUrl: n.channelSendbirdUrl,
							siteRule: bt.b.SELF_HARM
						};
						this.setState({
							showCrisisFlowThankYouPage: !0
						}), (await (() => jt(e(), {
							input: s
						}))()).ok || t()
					}, this.state = {
						ctlFlowOpened: !1,
						hasLoaded: !1,
						showCrisisFlowThankYouPage: !1
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					if (!this.props.message) return;
					const e = `CHAT_${this.props.message.channelId}_${this.props.message.messageId}`;
					Lt(this.props.gqlContext(), e, Dt).then(e => {
						e && this.setState({
							formComponent: e.component,
							formState: e.state,
							hasLoaded: !0
						})
					}), document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					var e, t;
					const {
						props: {
							message: n,
							onChannelBlock: s,
							isNightMode: a,
							inReportingRevampSelector: r
						},
						state: {
							formComponent: o,
							formState: i,
							ctlFlowOpened: l,
							hasLoaded: d,
							showCrisisFlowThankYouPage: u
						}
					} = this, h = null === (e = null == n ? void 0 : n.sender) || void 0 === e ? void 0 : e.nickname, m = null === (t = null == n ? void 0 : n.sender) || void 0 === t ? void 0 : t.userId;
					return l && h ? c.a.createElement(c.a.Fragment, null, c.a.createElement(St.a, {
						username: h,
						ctlSubmitted: u
					}), r && c.a.createElement(At, {
						onCrisisFlowSubmit: this.onCrisisFlowSubmit,
						onCloseReportFlow: this.handleReportFlowClose,
						thankYouControls: u
					})) : o && i && d && m ? c.a.createElement(ut.a, {
						formComponent: o,
						formState: i,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: "Submit a Report",
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => s(m),
						variant: this.props.container
					}) : c.a.createElement(Mt, null, c.a.createElement(kt, {
						src: a ? `${at.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${at.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			var Bt = Object(pt.b)(Rt(Ut)),
				Ft = n("./src/chat/constants/users.ts");
			const Ht = e => e.channelId ? e.action === Pe.a.VIEW_INVITE && e.channelId ? c.a.createElement(He, {
				channelId: e.channelId
			}) : e.action === Pe.a.VIEW_MEMBERS && e.channelId ? c.a.createElement(Ae, {
				channelId: e.channelId
			}) : e.action === Pe.a.LEAVE && e.channelId ? c.a.createElement($e, {
				channelId: e.channelId
			}) : e.action === Pe.a.VIEW_NSFW_CONFIRMATION && e.channelId ? c.a.createElement(tt, {
				channelId: e.channelId
			}) : e.action === Pe.a.HIDE_CHANNEL && e.channelId ? c.a.createElement(Qe, {
				channelId: e.channelId
			}) : e.action === Ft.a.Block && e.attrId && e.channelId ? c.a.createElement(Be, {
				channelId: e.channelId,
				blockedUserId: e.attrId
			}) : e.action === K.a.DELETE && e.channelId && e.attrId ? c.a.createElement(ze, {
				channelId: e.channelId,
				messageId: parseInt(e.attrId)
			}) : e.action === K.a.REPORT && e.attr && e.attrId && e.channelId ? e.inReportRevamp ? c.a.createElement(Bt, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : c.a.createElement(st, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : e.action === Ft.a.Kick && e.attr && e.attrId && e.channelId ? c.a.createElement(Ye, {
				channelId: e.channelId,
				attr: e.attr,
				attrId: e.attrId
			}) : e.action === Pe.a.DENY && e.channelId ? c.a.createElement(Ve, {
				channelId: e.channelId
			}) : void 0 : c.a.createElement(qe, null);
			var Gt = n("./src/chat/selectors/sidebar.ts"),
				Vt = n("./src/chat/components/FrameContent/index.m.less"),
				Wt = n.n(Vt);
			const zt = Wt.a.Main,
				Kt = Object(oe.a)({
					channel: e => Object(q.k)(e),
					container: e => e && e.container && e.container.size,
					isUserAccountEmpty: e => !e.user.account,
					isSidebarVisible: e => Object(Gt.b)(e),
					inReportingRevampSelector: e => xt(e)
				}),
				qt = Object(o.b)(Kt, e => ({
					setInternalPromos: () => e(Object(d.b)())
				})),
				Zt = l.a.main("Main", Wt.a),
				Qt = l.a.div("Content", Wt.a),
				Jt = l.a.div("Modal", Wt.a);
			class Yt extends c.a.Component {
				componentDidMount() {
					this.props.setInternalPromos()
				}
				shouldComponentUpdate(e, t) {
					return !a()(this.props, e) || !a()(this.state, t)
				}
				getContent() {
					const {
						channel: e,
						container: t,
						isUserAccountEmpty: n,
						isSidebarVisible: s,
						inReportingRevampSelector: a
					} = this.props, {
						action: r,
						channelId: o
					} = this.props.match.params;
					switch (!0) {
						case n:
							return null;
						case r === Pe.a.VIEW_MEMBERS:
							return o && c.a.createElement(Ae, {
								channelId: o
							});
						case r === Pe.a.CREATE:
						case r === Pe.a.INVITE_MEMBERS:
							return c.a.createElement(ke, null);
						case t === Re.a.MINIMIZED:
							return c.a.createElement(Se.a, null);
						default: {
							const n = Ht({
								...this.props.match.params,
								inReportRevamp: a
							});
							return c.a.createElement(c.a.Fragment, null, c.a.createElement(De.b, null), c.a.createElement(Qt, {
								className: Object(i.a)(Wt.a.Content, {
									[Wt.a.hidden]: s,
									[Wt.a.isFullSize]: t === Re.a.FULL
								})
							}, n ? c.a.createElement(Jt, null, n) : e && o && c.a.createElement(ye, {
								channelId: o,
								channel: e
							})))
						}
					}
				}
				render() {
					return c.a.createElement(Zt, {
						id: Le.a
					}, this.getContent())
				}
			}
			t.b = qt(Yt)
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/difference.js"),
				r = n.n(a),
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
				f = n("./src/chat/controls/Button/index.tsx"),
				g = n("./src/chat/controls/Dropdown/index.tsx"),
				O = n("./src/chat/controls/Dropdown/Row.tsx"),
				C = n("./src/chat/helpers/chatSelector.ts"),
				E = n("./src/chat/helpers/dom.ts"),
				j = n("./src/chat/icons/svgs/MenuOverflow/index.tsx"),
				_ = n("./src/chat/selectors/channels.ts"),
				v = n("./src/chat/components/MemberActionDropdown/index.m.less"),
				I = n.n(v);
			const x = ["t2_2ednvld6"],
				y = m.a.wrapped(e => l.a.createElement("span", {
					className: Object(h.a)({
						[I.a.active]: e.id === e.dropdownId
					}, e.className)
				}, e.children), "Wrapper", I.a),
				S = Object(u.a)(m.a.wrapped(g.a, "Component", I.a)),
				w = m.a.wrapped(O.a, "DropdownRow", I.a),
				N = m.a.wrapped(f.c, "IconButton", I.a),
				T = e => l.a.createElement("span", {
					className: e.className,
					id: e.id,
					onClick: e.onClick,
					role: "button"
				}, l.a.createElement(N, null, l.a.createElement(j.a, null))),
				A = Object(C.a)({
					dropdownId: e => e.tooltipId || "",
					currentUserIsChannelMod: _.a
				}),
				M = Object(d.b)(A, (e, t) => ({
					onOpenDropdown: () => e(Object(p.c)(t.id)),
					onBlockUser: t => e(Object(p.a)(t)),
					onReportUser: t => e(Object(p.d)(t)),
					onKickUser: t => e(Object(p.b)(t))
				}));
			class k extends i.Component {
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
							Kick: s
						} = b.b;
						return e && !t ? r()(b.c.members, [n, s]) : t ? e ? r()(b.c.members, [n]) : b.c.members : r()(b.c.members, [s])
					}, this.getDropdownOptionDisplayText = e => {
						switch (e) {
							case b.b.Block:
								return s.fbt._("Block", null, {
									hk: "t44ep"
								});
							case b.b.Report:
								return s.fbt._("Report", null, {
									hk: "4oVcnd"
								});
							case b.b.Kick:
								return s.fbt._("Kick", null, {
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
							id: s,
							onOpenDropdown: a,
							userId: r
						},
						getDropdownOptions: c,
						getContainer: o
					} = this;
					if (x.includes(r)) return null;
					const i = c();
					return !!i.length && l.a.createElement(y, {
						className: e,
						id: s,
						dropdownId: t
					}, l.a.createElement(T, {
						id: s,
						menu: !0,
						onClick: Object(E.b)(a)
					}), l.a.createElement(S, {
						tooltipId: s,
						isOpen: t === s,
						container: o(n),
						closeOnClickOutside: !0
					}, i.map((e, t) => l.a.createElement(w, {
						key: t,
						displayText: this.getDropdownOptionDisplayText(e),
						onClick: Object(E.b)(() => this.onOptionClick(e))
					}))))
				}
			}
			t.a = M(k)
		},
		"./src/chat/components/Message/ActionButtonGroup.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3XbiiumtyFt3sE7RwhZepo",
				wrapper: "_3XbiiumtyFt3sE7RwhZepo",
				ActionButton: "_1y_b1drkqSJBFVthfMESWB",
				actionButton: "_1y_b1drkqSJBFVthfMESWB",
				Button: "_1s74knoYl9B6bY4nx0H69",
				button: "_1s74knoYl9B6bY4nx0H69",
				single: "_3WvuEEqQH21wxYEeQQ2bFo"
			}
		},
		"./src/chat/components/Message/Bubble.m.less": function(e, t, n) {
			e.exports = {
				MessageBubble: "_1nAhIjgz7pfSX4_5eYD8-T",
				messageBubble: "_1nAhIjgz7pfSX4_5eYD8-T",
				gif: "_2YTpZRXwHDVam86JVzrZTJ",
				UserPic: "_3sST4ddDLTxzMfIc5eBdaS",
				userPic: "_3sST4ddDLTxzMfIc5eBdaS",
				UserPick: "_1wCT_zMie38gppYtkQ_c6E",
				userPick: "_1wCT_zMie38gppYtkQ_c6E",
				disabled: "_1wNcvJbWLV0ZNzE0xAGErH",
				withBorder: "_3ey3bKaKuSVt2EZD-7y5ng",
				currentUser: "_33X8hGUdBNhl9th7LARwP1",
				Text: "_3KjL8K7hstfpAp1iHVTUhd",
				text: "_3KjL8K7hstfpAp1iHVTUhd",
				richUnit: "_3N2oHhZ_g79ncEZwOAfDRR",
				richUnitResponsive: "XTNb-pweAVrXczr8DlGFQ",
				dark: "_1bCd4DBKF0Osr6neFkpLF3",
				noPadding: "_2eOcmx1Iy9TgQi7MqKKdZG",
				embed: "_2dIiouXl96NoZ6MRrNI4VN",
				Snoo: "GrZzft2XLFp0NKhLfZaMc",
				snoo: "GrZzft2XLFp0NKhLfZaMc",
				MessageItemBubble: "_19iAGNPVtW4H4cmtpESqQs",
				messageItemBubble: "_19iAGNPVtW4H4cmtpESqQs",
				ThemePrompt: "dhxT66k8GZefPv1JnCUPR",
				themePrompt: "dhxT66k8GZefPv1JnCUPR",
				Content: "SdnZ8URMdHpflx_vM_Hdv",
				content: "SdnZ8URMdHpflx_vM_Hdv",
				MessageBubbleWrapper: "_3IQMHU_GNd4ifJm6q8ngGX",
				messageBubbleWrapper: "_3IQMHU_GNd4ifJm6q8ngGX",
				BubbleMenu: "_1H8qvb5MfxLxWX7VGoM_tM",
				bubbleMenu: "_1H8qvb5MfxLxWX7VGoM_tM",
				TimestampWrapper: "MoAp6p9o9U6fMF6vW1Acz",
				timestampWrapper: "MoAp6p9o9U6fMF6vW1Acz",
				MenuOverflowVertical: "_3w1zIdtTOEjsdJmFs_5tFV",
				menuOverflowVertical: "_3w1zIdtTOEjsdJmFs_5tFV",
				active: "_1mBJrXtKxlwXS4S32panAs"
			}
		},
		"./src/chat/components/Message/Bubble.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/combineRefs/index.tsx"),
				l = n("./src/lib/hooks/useTooltip.ts"),
				d = n("./src/chat/actions/theme.ts"),
				u = n("./src/chat/actions/tracking.ts"),
				h = n("./src/chat/components/ChatIcon/index.tsx"),
				m = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./src/chat/constants/messages.ts"),
				b = n("./src/chat/constants/users.ts"),
				f = n("./src/chat/controls/Button/index.tsx"),
				g = n("./src/chat/helpers/urls/index.ts"),
				O = n("./src/telemetry/models/Event.ts"),
				C = n("./src/chat/components/Message/ActionButtonGroup.m.less"),
				E = n.n(C);
			const j = ({
				children: e,
				onClick: t
			}) => r.a.createElement("span", {
				className: E.a.ActionButton,
				onClick: t
			}, e);
			var _ = e => {
					const {
						channelId: t,
						message: {
							messageId: n,
							sender: s
						},
						fromCurrentUser: i,
						inPreview: l,
						isMod: d
					} = e, u = null == s ? void 0 : s.userId, h = Object(c.d)(), C = Object(a.useCallback)(() => {
						h(Object(m.b)(Object(g.messageActionUrl)(t, n, p.a.DELETE)))
					}, [h, t, n]), _ = Object(a.useCallback)(() => {
						h(Object(m.b)(Object(g.inviteMessageActionUrl)(t, n, p.a.REPORT)))
					}, [h, t, n]), v = Object(a.useCallback)(() => {
						h(Object(m.b)(Object(g.messageActionUrl)(t, n, p.a.REPORT)))
					}, [h, t, n]), I = Object(a.useCallback)(() => {
						u && h(Object(m.b)(Object(g.userActionUrl)(t, u, b.a.Kick, {
							source: O.b.ChatView
						})))
					}, [h, t, u]);
					return r.a.createElement("div", {
						className: Object(o.a)(E.a.Wrapper, {
							[E.a.single]: !d || i
						})
					}, d && !i ? r.a.createElement(r.a.Fragment, null, r.a.createElement(j, {
						onClick: C
					}, r.a.createElement(f.e, {
						className: E.a.Button
					})), r.a.createElement(j, {
						onClick: () => l ? _() : v()
					}, r.a.createElement(f.b, {
						className: E.a.Button
					})), r.a.createElement(j, {
						onClick: I
					}, r.a.createElement(f.d, {
						className: E.a.Button
					}))) : i ? r.a.createElement(j, {
						onClick: C
					}, r.a.createElement(f.e, {
						className: E.a.Button
					})) : r.a.createElement(j, {
						onClick: () => l ? _() : v()
					}, r.a.createElement(f.b, {
						className: E.a.Button
					})))
				},
				v = n("./src/lib/lessComponent.tsx"),
				I = n("./src/chat/actions/message/index.ts"),
				x = n("./src/chat/controls/TextButton.tsx"),
				y = n("./src/chat/components/Message/CollapsedMessage.m.less"),
				S = n.n(y);
			var w = Object(c.b)(void 0, (e, t) => ({
					uncollapseMessage: () => {
						e(Object(I.C)(t)), e(Object(u.E)(t.messageId))
					},
					viewCollapsedMessage: () => {
						e(Object(u.Q)(t.messageId))
					}
				}))(v.a.wrapped(({
					className: e,
					uncollapseMessage: t,
					viewCollapsedMessage: n
				}) => r.a.createElement("div", {
					onLoad: n,
					className: e
				}, s.fbt._("This message has been collapsed due to potentially offensive language.", null, {
					hk: "4qscuz"
				}), r.a.createElement("div", null, r.a.createElement(x.a, {
					onClick: t
				}, s.fbt._("View Message", null, {
					hk: "QjaEs"
				})))), "CollapsedMessage", S.a)),
				N = n("./src/chat/components/Message/FailedMenu.m.less"),
				T = n.n(N);
			const A = v.a.div("ButtonControls", T.a),
				M = v.a.span("Text", T.a),
				k = v.a.wrapped(f.a, "Button", T.a);
			class D extends a.Component {
				constructor() {
					super(...arguments), this.handleResend = () => this.props.onResend(this.props.clientMessageId), this.handleDelete = () => this.props.onDelete(this.props.clientMessageId)
				}
				render() {
					return r.a.createElement(A, null, r.a.createElement(M, null, s.fbt._("Failed to send", null, {
						hk: "2feF2H"
					})), r.a.createElement(k, {
						primaryNoBorder: !0,
						onClick: this.handleResend
					}, s.fbt._("Resend", null, {
						hk: "cXpU3"
					})), r.a.createElement(k, {
						warningNoBorder: !0,
						onClick: this.handleDelete
					}, s.fbt._("Delete", null, {
						hk: "2dtAT"
					})))
				}
			}
			var P = Object(c.b)(void 0, (e, {
					channelId: t
				}) => ({
					onResend: n => e(Object(I.y)(t, n)),
					onDelete: t => e(Object(I.x)({
						clientMessageId: t
					}))
				}))(D),
				R = n("./src/chat/components/Message/LinkedText.tsx"),
				L = n("./src/chat/components/Message/OffensiveMessageReportPrompt.m.less"),
				U = n.n(L);
			const B = v.a.wrapped(x.a, "Regular", U.a),
				F = v.a.wrapped(x.a, "Active", U.a),
				H = Object(c.b)(void 0, (e, t) => ({
					cancel: () => {
						e(Object(I.u)(t)), e(Object(u.b)(t.channelId, t.messageId))
					},
					reportMessage: () => {
						e(Object(m.b)(Object(g.inviteMessageActionUrl)(t.channelId, t.messageId, p.a.REPORT))), e(Object(I.u)(t)), e(Object(u.D)(t.channelId, t.messageId))
					}
				}));
			var G = v.a.wrapped(H(e => r.a.createElement("div", {
					className: e.className
				}, s.fbt._("Was this message offensive?", null, {
					hk: "1sBVkd"
				}), r.a.createElement("div", null, r.a.createElement(B, {
					onClick: () => e.cancel(e)
				}, s.fbt._("No", null, {
					hk: "SG3Y"
				})), r.a.createElement(F, {
					onClick: () => e.reportMessage(e)
				}, s.fbt._("Yes", null, {
					hk: "3ONldA"
				}))))), "OffensiveMessageReport", U.a),
				V = n("./src/higherOrderComponents/makeAsync.tsx"),
				W = n("./src/lib/loadWithRetries/index.ts");
			const z = () => null;
			var K = Object(V.a)({
				ErrorComponent: z,
				getComponent: () => Object(W.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CommentRichUnit")]).then(n.bind(null, "./src/chat/components/Message/RichUnit/Comment/CommentRichUnit.tsx"))).then(e => e.default),
				LoadingComponent: z
			});
			const q = () => null;
			var Z = Object(V.a)({
				ErrorComponent: q,
				getComponent: () => Object(W.a)(() => n.e("ExternalLinkUnit").then(n.bind(null, "./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.tsx"))).then(e => e.default),
				LoadingComponent: q
			});
			const Q = () => null;
			var J = Object(V.a)({
					ErrorComponent: Q,
					getComponent: () => Object(W.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("PostRichUnit")]).then(n.bind(null, "./src/chat/components/Message/RichUnit/Post/PostRichUnit.tsx"))).then(e => e.default),
					LoadingComponent: Q
				}),
				Y = n("./src/lib/opener/index.ts"),
				X = n("./src/lib/prettyPrintNumber/index.ts"),
				$ = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.tsx"),
				ee = n("./src/chat/components/Message/RichUnit/commonComponents/Header.tsx"),
				te = n("./src/chat/components/Message/RichUnit/commonComponents/ImageContent.tsx"),
				ne = n("./src/chat/components/Message/RichUnit/Subreddit/SubredditRichUnit.m.less"),
				se = n.n(ne);
			const ae = v.a.div("Delimiter", se.a),
				re = v.a.wrapped(te.a, "ImageContent", se.a),
				ce = v.a.wrapped(({
					className: e,
					imageUrl: t = "",
					title: n,
					subredditType: s,
					isNsfw: a
				}) => r.a.createElement("div", {
					className: e,
					tabIndex: 0
				}, r.a.createElement(re, {
					url: t,
					title: n,
					subredditType: s,
					isNsfw: a,
					isSubreddit: !0
				})), "Content", se.a),
				oe = v.a.wrapped(({
					className: e,
					darkBackground: t,
					richUnitData: n,
					richUnitData: {
						subscribersCount: s = 0,
						activeCount: a = 0
					}
				}) => {
					var c, i, l, d;
					const u = `${Object(X.b)(s)} members • ${Object(X.b)(a)} online`,
						h = `/r/${n.id}`;
					return r.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(Y.d)(t, "_blank")
							})(e, h)
						},
						className: Object(o.a)(e, {
							[se.a.dark]: t
						})
					}, r.a.createElement(ee.a, {
						subredditName: n.id,
						iconUrl: null === (c = null == n ? void 0 : n.styles) || void 0 === c ? void 0 : c.icon,
						subredditTitle: n.title
					}), (null === (i = n.styles) || void 0 === i ? void 0 : i.bannerBackgroundImage) || !(null == n ? void 0 : n.subredditType) && !(null === (l = n.styles) || void 0 === l ? void 0 : l.bannerBackgroundImage) ? null : r.a.createElement(ae, null), (null == n ? void 0 : n.subredditType) && r.a.createElement(ce, {
						imageUrl: null === (d = null == n ? void 0 : n.styles) || void 0 === d ? void 0 : d.bannerBackgroundImage,
						title: (null == n ? void 0 : n.publicDescriptionText) || "",
						subredditType: (null == n ? void 0 : n.subredditType) || "",
						isNsfw: Boolean(null == n ? void 0 : n.isNsfw)
					}), r.a.createElement($.a, {
						isSubreddit: !0,
						metaInfo: u
					}))
				}, "SubredditRichUnit", se.a);
			var ie = v.a.wrapped(({
					className: e,
					darkBackground: t,
					richUnitData: n
				}) => r.a.createElement("div", {
					className: e
				}, r.a.createElement(oe, {
					darkBackground: t,
					richUnitData: n
				})), "RichUnitWrapper", se.a),
				le = n("./node_modules/lodash/isEmpty.js"),
				de = n.n(le),
				ue = n("./src/chat/controls/Svg/index.tsx");
			var he = e => r.a.createElement(ue.a, {
					className: e.className,
					viewBox: "0 0 14 11"
				}, r.a.createElement("path", {
					d: "M13.1656,4.55472 L12.0464,3.43472 C11.896,3.28432 11.6928,3.20032 11.4808,3.20032 C11.268,3.20032 11.0648,3.28432 10.9152,3.43472 L5.32,9.02912 L3.0856,6.79472 C2.7736,6.48192 2.2672,6.48192 1.9544,6.79472 L0.8344,7.91472 C0.5216,8.22752 0.5216,8.73392 0.8344,9.04592 L4.7544,12.96592 C4.9112,13.12192 5.1152,13.20032 5.32,13.20032 C5.5248,13.20032 5.7296,13.12192 5.8856,12.96592 L13.1656,5.68592 C13.4784,5.37312 13.4784,4.86752 13.1656,4.55472",
					transform: "translate(0 -3)"
				})),
				me = n("./src/chat/icons/svgs/Trash/index.tsx"),
				pe = n("./src/chat/components/MessageReportDialog/ActionMenu.m.less"),
				be = n.n(pe);
			const {
				fbt: fe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ge = v.a.wrapped(he, "Approve", be.a), Oe = v.a.wrapped(me.a, "Trash", be.a), Ce = v.a.div("ButtonControls", be.a), Ee = v.a.wrapped(f.a, "Button", be.a), je = v.a.span("ButtonText", be.a);
			class _e extends a.Component {
				render() {
					const {
						onDelete: e,
						onIgnore: t,
						reportedChannelId: n,
						reportedMessageId: s
					} = this.props;
					return r.a.createElement(Ce, null, r.a.createElement(Ee, {
						primaryNoBorder: !0,
						onClick: () => e(s, n)
					}, r.a.createElement(Oe, null), r.a.createElement(je, null, fe._("Delete Message", null, {
						hk: "3ksti7"
					}))), r.a.createElement(Ee, {
						primaryNoBorder: !0,
						onClick: () => t(s, n)
					}, r.a.createElement(ge, null), r.a.createElement(je, null, fe._("Ignore Report", null, {
						hk: "1QScZP"
					}))))
				}
			}
			var ve = Object(c.b)(void 0, e => ({
					onDelete: (t, n) => e(Object(I.z)(t, n)),
					onIgnore: (t, n) => e(Object(I.A)(t, n))
				}))(_e),
				Ie = n("./src/chat/components/MemberActionDropdown/index.tsx"),
				xe = n("./src/config.ts"),
				ye = n("./src/chat/helpers/time/index.tsx"),
				Se = n("./src/chat/controls/TimeStamp/index.m.less"),
				we = n.n(Se);
			var Ne = v.a.wrapped(e => {
					const t = "number" == typeof e.date ? new Date(e.date) : e.date;
					return r.a.createElement("time", {
						className: e.className,
						dateTime: Object(ye.c)(t),
						title: Object(ye.b)(t)
					}, e.children)
				}, "TimeStamp", we.a),
				Te = n("./src/chat/components/MessageHeader/index.m.less"),
				Ae = n.n(Te);
			const Me = v.a.wrapped(Ne, "TimeStamp", Ae.a),
				ke = v.a.span("UserName", Ae.a);
			var De = v.a.wrapped(e => r.a.createElement("a", {
				target: Y.c.BLANK,
				rel: Y.b,
				className: e.className,
				href: `${xe.a.redditUrl}/user/${e.nickname}`
			}, r.a.createElement(h.a, {
				userId: e.userId,
				isSmall: !0
			}), r.a.createElement(r.a.Fragment, null, r.a.createElement(ke, null, e.nickname), r.a.createElement(Me, {
				date: e.createdAt
			}, Object(ye.d)(new Date(e.createdAt))), e.children)), "UserHeader", Ae.a);
			var Pe = e => r.a.createElement(ue.a, {
				className: e.className,
				disable: !0,
				viewBox: "0 0 16 16"
			}, r.a.createElement("g", {
				transform: "translate(-26.000000, -37.000000)"
			}, r.a.createElement("path", {
				d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
			})));

			function Re() {
				return (Re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Le = e => r.a.createElement(ue.a, Re({}, e, {
					viewBox: "0 0 16 16"
				}), r.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				})),
				Ue = n("./src/chat/icons/svgs/MenuOverflow/index.tsx"),
				Be = n("./src/chat/components/MessageReportDialog/Header.m.less"),
				Fe = n.n(Be);
			const He = v.a.wrapped(Pe, "Group", Fe.a),
				Ge = v.a.wrapped(Le, "Key", Fe.a),
				Ve = v.a.wrapped(Ie.a, "MemberActionDropdown", Fe.a),
				We = v.a.wrapped(De, "MessageHeaderLink", Fe.a),
				ze = v.a.h5("ChannelName", Fe.a),
				Ke = v.a.span("TextOverflow", Fe.a),
				qe = v.a.wrapped(f.c, "IconButton", Fe.a),
				Ze = v.a.div("Header", Fe.a);
			var Qe = e => {
					const {
						channelId: t,
						channelIsPublic: n,
						channelName: s,
						messageCreatedAt: a,
						messageId: c,
						reportedUserId: o,
						reportedUserName: i
					} = e, l = `UserAction--Item-${c}`;
					return r.a.createElement(Ze, null, r.a.createElement(We, {
						createdAt: a,
						nickname: i,
						userId: o
					}, r.a.createElement(ze, null, n ? r.a.createElement(He, null) : r.a.createElement(Ge, null), r.a.createElement(Ke, null, s))), r.a.createElement(Ve, {
						channelId: t,
						containerClassName: l,
						className: l,
						dropdownIndex: 0,
						id: `UserAction--Select-${c}`,
						isBlockedUser: !1,
						userId: o
					}, r.a.createElement(qe, null, r.a.createElement(Ue.a, null))))
				},
				Je = n("./src/chat/components/MessageReportDialog/index.m.less"),
				Ye = n.n(Je);
			const {
				fbt: Xe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $e = v.a.p("ReasonText", Ye.a), et = v.a.p("DeleteText", Ye.a), tt = v.a.p("AcceptText", Ye.a);
			var nt = e => {
					const {
						actions: t,
						channelId: n,
						channelIsPublic: s,
						channelName: a,
						messageCreatedAt: c,
						messageValue: o,
						messageId: i,
						reason: l,
						reportedUserId: d,
						reportedUserName: u,
						reporterUserName: h
					} = e.report;
					return r.a.createElement(r.a.Fragment, null, n && a && s && i && c && d && u && r.a.createElement(Qe, {
						channelId: n,
						channelIsPublic: s,
						channelName: a,
						messageCreatedAt: c,
						messageId: i,
						reportedUserId: d,
						reportedUserName: u
					}), o, r.a.createElement($e, null, Xe._("Reported for {reason}", [Xe._param("reason", l)], {
						hk: "2BwGqI"
					}), " ", h && Xe._("by /u{reporter}", [Xe._param("reporter", h)], {
						hk: "1hrZNZ"
					})), t && t.deleted && r.a.createElement(et, null, Xe._("Deleted by {username}", [Xe._param("username", `u/${t.deleted.userName}`)], {
						hk: "4mxZZS"
					})), t && t.ignored && r.a.createElement(tt, null, Xe._("Approved by {username}", [Xe._param("username", `u/${t.ignored.userName}`)], {
						hk: "m22OH"
					})), de()(t) && r.a.createElement(ve, {
						reportedMessageId: e.message.messageId,
						reportedChannelId: e.message.channelId
					}))
				},
				st = n("./src/chat/components/Snoomoji/index.tsx"),
				at = n("./src/chat/constants/experiments.ts"),
				rt = n("./src/chat/controls/Gif/index.tsx");
			const ct = () => null;
			var ot = Object(V.a)({
					ErrorComponent: ct,
					getComponent: () => Object(W.a)(() => Promise.resolve().then(n.bind(null, "./src/chat/controls/TooltipHooked/TooltipHooked.tsx"))).then(e => e.default),
					LoadingComponent: ct
				}),
				it = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts");

			function lt() {
				return (lt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var dt = e => r.a.createElement(ue.a, lt({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("path", {
					d: "M10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5Z"
				}), r.a.createElement("path", {
					d: "M10 6C10.8284 6 11.5 5.32843 11.5 4.5C11.5 3.67157 10.8284 3 10 3C9.17157 3 8.5 3.67157 8.5 4.5C8.5 5.32843 9.17157 6 10 6Z"
				}), r.a.createElement("path", {
					d: "M10 17C10.8284 17 11.5 16.3284 11.5 15.5C11.5 14.6716 10.8284 14 10 14C9.17157 14 8.5 14.6716 8.5 15.5C8.5 16.3284 9.17157 17 10 17Z"
				})),
				ut = n("./src/chat/models/RichUnit/index.ts"),
				ht = n("./src/chat/selectors/experiments.ts"),
				mt = n("./src/chat/selectors/richUnits.ts"),
				pt = n("./src/chat/components/Message/Bubble.m.less"),
				bt = n.n(pt);
			const {
				PENDING: ft,
				USER: gt
			} = p.d, {
				POST: Ot,
				USER_POST: Ct,
				COMMENT: Et,
				SNOOMOJI: jt,
				SUBREDDIT: _t,
				EMBED: vt,
				GIF: It
			} = p.c, xt = () => {
				const e = Object(c.d)(),
					t = Object(c.e)(ht.c),
					n = Object(c.e)(e => Object(ht.a)(e, at.b.UiRefreshBubblePreset));
				return n && e(Object(u.G)(n)), t ? r.a.createElement("div", {
					className: bt.a.ThemePrompt,
					tabIndex: 0
				}, r.a.createElement("button", {
					className: bt.a.Content,
					onClick: () => {
						e(Object(d.clickThemePrompt)()), e(Object(u.f)())
					}
				}, "🖍 ", s.fbt._("Change chat theme", null, {
					hk: "4F8P45"
				}))) : null
			}, yt = r.a.forwardRef(({
				className: e,
				children: t,
				disabled: n,
				withBorder: s,
				fromCurrentUser: a,
				inPreview: c,
				isEmbedded: d,
				message: u,
				showUserPic: m,
				noPadding: p
			}, b) => {
				var f, g;
				const O = Object(l.b)(Object(it.d)(Boolean(a)));
				return r.a.createElement("span", {
					onMouseEnter: O.show,
					onMouseLeave: O.hide,
					ref: Object(i.a)(b, O.target.ref),
					className: Object(o.a)(e, {
						[bt.a.dark]: !a,
						[bt.a.disabled]: n,
						[bt.a.withBorder]: s,
						[bt.a.currentUser]: a,
						[bt.a.embed]: d,
						[bt.a.noPadding]: p,
						[bt.a.gif]: (null == u ? void 0 : u.messageData.type) === It && !c
					})
				}, t, m && (null === (f = null == u ? void 0 : u.sender) || void 0 === f ? void 0 : f.userId) && r.a.createElement(h.a, {
					className: bt.a.UserPic,
					userId: null === (g = null == u ? void 0 : u.sender) || void 0 === g ? void 0 : g.userId
				}), (null == u ? void 0 : u.createdAt) && r.a.createElement(ot, {
					arrowProps: O.arrowProps,
					popperProps: O.popperProps,
					visible: O.visible,
					styled: !0,
					isCloseOnHover: !0,
					hide: O.hide
				}, r.a.createElement("span", {
					className: bt.a.TimestampWrapper
				}, Object(ye.d)(new Date(u.createdAt)))))
			});

			function St(e) {
				return "messageId" in e && "channelId" in e
			}

			function wt(e, t) {
				return !(e.messageData.type !== p.c.EMBED || !e.messageData.embed || t) || !(e.messageData.type !== p.c.POST && e.messageData.type !== p.c.USER_POST && e.messageData.type !== p.c.COMMENT && e.messageData.type !== p.c.SUBREDDIT || t)
			}
			t.a = e => {
				const {
					className: t,
					fromCurrentUser: n = !1,
					isChatEmbedded: a,
					isCurrentUserChannelMod: i,
					message: d,
					isLastCurrentUserMessage: u,
					inPreview: h,
					showUserPic: m,
					withButton: b
				} = e, f = Object(c.e)(e => Object(mt.a)(e, d.messageData)), g = Object(l.b)(Object(it.a)(n)), O = Object(l.b)(Object(it.b)());
				if (!d) return null;
				const {
					type: C,
					report: E,
					collapsedInvitePreview: j
				} = d.messageData, v = d.messageType === ft && d.error && d.clientMessageId, I = C !== jt && (C !== It || C === It && h), x = b && !v && !E, y = d.messageType === gt && x, S = ((e, t, n, a, c) => {
					var o, i, l, d;
					const {
						messageType: u,
						messageData: h,
						messageData: {
							highlights: m,
							value: p
						}
					} = e;
					if (t && h.type !== jt) return h.type === It ? s.fbt._("Sent a GIF", null, {
						hk: "1x1QrK"
					}) : p;
					const b = r.a.createElement(R.a, {
						className: bt.a.Text,
						value: p,
						highlighMentionGroupLinks: m
					});
					switch (h.type) {
						case vt:
							const {
								embed: e
							} = h;
							return u !== ft && e ? r.a.createElement(Z, {
								name: e.name,
								title: e.title,
								thumbnailUrl: e.imageUrl,
								href: e.url,
								providerDisplay: e.providerDisplay,
								darkBackground: n,
								faviconUrl: e.faviconUrl
							}) : b;
						case Ot:
						case Ct:
							return (null == a ? void 0 : a.type) !== Ot && (null == a ? void 0 : a.type) !== Ct || (null == a ? void 0 : a.removedByCategory) === ut.b.Deleted ? b : r.a.createElement(J, {
								darkBackground: n,
								postUrl: p,
								highlights: m,
								richUnitData: a
							});
						case Et:
							return a && (null == a ? void 0 : a.type) === Et && !a.deletedAt ? r.a.createElement(K, {
								darkBackground: n,
								commentUrl: p,
								highlights: m,
								richUnitData: a
							}) : b;
						case _t:
							return a && a.type === _t ? r.a.createElement(ie, {
								darkBackground: n,
								richUnitData: a
							}) : b;
						case jt:
							return r.a.createElement("div", {
								className: bt.a.Snoo
							}, r.a.createElement(st.a, {
								iconName: p
							}));
						case It: {
							const e = !c && (null === (o = h.gif) || void 0 === o ? void 0 : o.width) || 0,
								t = Math.min(258 / e, 1);
							return r.a.createElement(rt.a, {
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
				})(d, h, !n, f, a), N = ((e, t, n, s, a, c) => r.a.createElement(ot, {
					popperProps: e.popperProps,
					visible: e.visible,
					arrowProps: e.arrowProps,
					hide: e.hide
				}, n && !s ? r.a.createElement("button", {
					onClick: () => {
						t.visible ? t.hide() : t.show()
					},
					className: bt.a.BubbleMenu,
					ref: t.target.ref
				}, r.a.createElement(dt, {
					className: Object(o.a)(bt.a.MenuOverflowVertical, {
						[bt.a.active]: t.visible
					})
				})) : r.a.createElement(_, {
					className: bt.a.ActionButtonGroup,
					message: c,
					fromCurrentUser: s,
					inPreview: a,
					isMod: n,
					channelId: c.channelId
				}), r.a.createElement(ot, {
					arrowProps: t.arrowProps,
					popperProps: t.popperProps,
					visible: t.visible,
					hide: t.hide,
					isInstant: !0,
					styled: !0
				}, r.a.createElement(_, {
					className: bt.a.ActionButtonGroup,
					message: c,
					fromCurrentUser: s,
					inPreview: a,
					isMod: n,
					channelId: c.channelId
				}))))(g, O, i, n, h, d);
				return r.a.createElement("span", {
					className: Object(o.a)(bt.a.MessageItemBubble, t),
					onMouseEnter: g.show,
					onMouseLeave: () => {
						g.hide(), O.hide()
					}
				}, r.a.createElement(yt, {
					ref: g.target.ref,
					fromCurrentUser: n,
					inPreview: h,
					withButton: x,
					withBorder: I,
					message: d,
					disabled: !!v,
					showUserPic: m,
					isEmbedded: a,
					className: Object(o.a)(bt.a.MessageBubble, (f || d.messageData.type === p.c.EMBED) && !h && {
						[bt.a.richUnit]: wt(d, !a),
						[bt.a.richUnitResponsive]: wt(d, a)
					})
				}, E && d.messageType === gt ? r.a.createElement(nt, {
					report: E,
					message: d
				}) : h && St(d) && function(e) {
					return Boolean(null == e ? void 0 : e.shouldCollapse)
				}(j) ? r.a.createElement(w, {
					channelId: d.channelId,
					messageId: d.messageId
				}) : S), y && N, u && r.a.createElement(xt, null), h && St(d) && function(e) {
					return Boolean(!(null == e ? void 0 : e.shouldCollapse) && (null == e ? void 0 : e.shouldShowReportPrompt))
				}(j) && r.a.createElement(G, {
					channelId: d.channelId,
					messageId: d.messageId
				}), v && r.a.createElement(P, {
					channelId: d.channelId,
					clientMessageId: v
				}))
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
		"./src/chat/components/Message/LinkedText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/linkMatchers/customLinks.ts"),
				o = n("./src/lib/opener/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/chat/helpers/linkParser/index.ts"),
				d = n("./src/chat/components/Message/Link.m.less"),
				u = n.n(d);
			const h = r.a.wrapped(e => a.a.createElement("a", {
					className: Object(i.a)(e.className, {
						[u.a.noUnderline]: e.noUnderline
					}),
					href: Object(l.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children), "Link", u.a),
				m = r.a.span("LinkedText", u.a),
				p = r.a.span("NameWrapper", u.a),
				b = r.a.span("Name", u.a),
				f = r.a.span("DetailsWrapper", u.a),
				g = r.a.span("Title", u.a),
				O = r.a.p("Description", u.a),
				C = e => a.a.createElement(h, {
					noUnderline: e.noUnderline,
					href: Object(l.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children),
				E = e => e.isEmbed ? (e => a.a.createElement(C, e, a.a.createElement(p, null, a.a.createElement(b, null, e.name)), a.a.createElement(f, null, a.a.createElement("span", null, a.a.createElement(g, null, e.title), a.a.createElement(O, null, e.description)))))(e) : (e => e.href ? a.a.createElement(C, e, e.children) : a.a.createElement(m, e, e.children))(e);
			var j = n("./src/chat/components/Message/LinkedText.m.less"),
				_ = n.n(j);
			const v = r.a.pre("MessageText", _.a),
				I = (e, t, n, s, r) => a.a.createElement(E, {
					key: r || e,
					href: e,
					target: n,
					rel: o.b,
					noUnderline: s === c.d.mention || s === c.d.profile || s === c.d.profileFull || s === c.d.subreddit || s === c.d.subredditFull
				}, t);
			t.a = r.a.wrapped(e => {
				const {
					value: t,
					highlighMentionGroupLinks: n,
					className: s
				} = e, r = !(!n || !n.length), c = Object(l.a)(t, r, I);
				return a.a.createElement(v, {
					tabIndex: 0,
					className: s
				}, c)
			}, "LinkedText", _.a)
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
		"./src/chat/components/Message/RichUnit/commonComponents/Footer.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.m.less"),
				o = n.n(c);
			const i = r.a.div("MetaInfo", o.a);
			t.a = r.a.wrapped(({
				className: e,
				metaInfo: t,
				isSubreddit: n
			}) => a.a.createElement("div", {
				className: e
			}, a.a.createElement(i, {
				tabIndex: 0
			}, t), n ? a.a.createElement("div", {
				className: o.a.OnlineIndicator
			}, "•") : null), "Footer", o.a)
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
		"./src/chat/components/Message/RichUnit/commonComponents/Header.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/opener/index.ts"),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/chat/controls/Svg/index.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var u = e => c.a.createElement(l.a, d({}, e, {
					viewBox: "0 0 20 20"
				}), c.a.createElement("path", {
					d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
				})),
				h = n("./src/chat/components/Message/RichUnit/commonComponents/Header.m.less"),
				m = n.n(h);
			const p = i.a.img("SubredditIcon", m.a),
				b = i.a.wrapped(u, "PlanetIcon", m.a),
				f = i.a.wrapped(e => {
					const {
						className: t,
						subredditName: n,
						authorName: r,
						isPostComment: i,
						redditorName: l,
						subredditTitle: d
					} = e, u = n ? `r/${n}` : "", h = l ? `u/${l}` : "", p = `u/${r||l}`;
					return c.a.createElement("div", {
						className: t,
						onClick: e => e.stopPropagation()
					}, c.a.createElement(o.a, {
						className: m.a.SubredditName,
						to: `/${u||h}`,
						target: a.c.BLANK,
						rel: a.b
					}, u || h), d ? c.a.createElement(o.a, {
						className: m.a.SubredditTitle,
						to: `/${u||h}`,
						target: a.c.BLANK,
						rel: a.b
					}, d) : c.a.createElement(o.a, {
						className: m.a.AuthorName,
						to: `/${p}`,
						target: a.c.BLANK,
						rel: a.b
					}, i ? `${s.fbt._("Comment by",null,{hk:"1pyLSv"})} ` : null, p))
				}, "SubredditInfo", m.a);
			t.a = i.a.wrapped(e => {
				const {
					className: t,
					subredditName: n,
					authorName: s,
					isPostComment: r,
					redditorName: i,
					iconUrl: l,
					subredditTitle: d
				} = e, u = n ? `r/${n}` : "", h = i ? `u/${i}` : "";
				return c.a.createElement("div", {
					className: t
				}, c.a.createElement(o.a, {
					to: `/${u||h}`,
					target: a.c.BLANK,
					rel: a.b,
					className: m.a.Link
				}, l ? c.a.createElement(p, {
					src: l
				}) : c.a.createElement(b, null)), c.a.createElement(f, {
					subredditName: n,
					redditorName: i,
					authorName: s,
					isPostComment: r,
					iconUrl: l,
					subredditTitle: d
				}))
			}, "Header", m.a)
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
		"./src/chat/components/Message/RichUnit/commonComponents/ImageContent.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Svg/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = e => r.a.createElement(o.a, i({}, e, {
				viewBox: "0 0 12 12"
			}), r.a.createElement("path", {
				d: "M10.1018 4.12719C9.8205 4.12719 9.54825 4.18869 9.3 4.30419C8.62425 3.91569 7.8315 3.65769 6.987 3.54219L7.3335 1.91169L8.121 2.07969C8.33475 2.69544 8.91375 3.14169 9.60075 3.14169C10.4662 3.14169 11.1713 2.43669 11.1713 1.57119C11.1713 0.704939 10.4662 -6.10352e-05 9.60075 -6.10352e-05C9.10275 -6.10352e-05 8.66325 0.236939 8.37525 0.599939L6.91125 0.288689C6.507 0.205439 6.108 0.460439 6.02175 0.866189L5.4975 3.32919C5.4855 3.38694 5.4945 3.44244 5.496 3.49944C4.47075 3.56919 3.50025 3.84144 2.69925 4.30344C2.451 4.18794 2.1795 4.12719 1.899 4.12719C0.852 4.12719 0 4.97919 0 6.02619C0 6.58269 0.2445 7.10244 0.65175 7.45719C0.67725 9.65544 3.0165 11.3722 5.99775 11.3722C8.9775 11.3722 11.316 9.65769 11.3438 7.46094C11.7533 7.10694 12 6.58494 12 6.02619C12 4.97919 11.1488 4.12719 10.1018 4.12719Z"
			}));

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var u = e => r.a.createElement(o.a, d({}, e, {
				viewBox: "0 0 24 20"
			}), r.a.createElement("path", {
				d: "M9.672,12.952a1.956,1.956,0,0,0-2.766,0l-3.36,3.36V17.5a1.627,1.627,0,0,0,1.625,1.625H15.845Z"
			}), r.a.createElement("path", {
				d: "M2.171,5.5a3,3,0,0,1,3-3H15.8A1.627,1.627,0,0,0,14.171.875h-12A1.627,1.627,0,0,0,.546,2.5v12a1.627,1.627,0,0,0,1.625,1.625Z"
			}), r.a.createElement("path", {
				d: "M13.642,7.238a1.544,1.544,0,1,0,1.544,1.544A1.546,1.546,0,0,0,13.642,7.238Z"
			}), r.a.createElement("path", {
				d: "M17.171,3.875h-12A1.627,1.627,0,0,0,3.546,5.5v9.356l2.632-2.632a2.988,2.988,0,0,1,4.221,0l6.89,6.889A1.621,1.621,0,0,0,18.8,17.5V5.5A1.627,1.627,0,0,0,17.171,3.875Zm-3.529,7.48a2.573,2.573,0,1,1,2.573-2.573A2.576,2.576,0,0,1,13.642,11.355Z"
			}));

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var m = e => r.a.createElement(o.a, h({}, e, {
				viewBox: "0 0 12 12"
			}), r.a.createElement("path", {
				d: "M6.36644 6.69771C6.32969 6.87045 6.17666 6.99437 5.99963 6.99437C5.82259 6.99437 5.67031 6.87045 5.63281 6.69771L4.88267 3.19264C4.85941 3.08149 4.88642 2.96583 4.95843 2.87796C5.02894 2.78934 5.13621 2.73827 5.24948 2.73827H6.74977C6.86304 2.73827 6.97031 2.78934 7.04157 2.87796C7.11283 2.96583 7.14059 3.08149 7.11658 3.19264L6.36644 6.69771ZM6.53222 9.40293C6.3897 9.54562 6.19466 9.61998 5.99962 9.61998C5.80459 9.61998 5.60955 9.54562 5.46702 9.40293C5.332 9.25948 5.24948 9.07172 5.24948 8.86895C5.24948 8.67368 5.332 8.47916 5.46702 8.34322C5.75208 8.05858 6.25467 8.06534 6.53222 8.34322C6.66725 8.47916 6.74977 8.67368 6.74977 8.86895C6.74977 9.07172 6.66725 9.26699 6.53222 9.40293ZM11.5604 4.93053L7.06032 0.425835C6.49322 -0.141945 5.50603 -0.141945 4.93893 0.425835L0.439582 4.93053C0.156029 5.21442 0 5.59144 0 5.99324C0 6.39429 0.156029 6.77131 0.439582 7.0552L4.93893 11.5599C5.22248 11.8438 5.59905 12 5.99962 12C6.4002 12 6.77677 11.8438 7.06032 11.5599L11.5604 7.0552C11.844 6.77131 12 6.39429 12 5.99324C12 5.59144 11.844 5.21442 11.5604 4.93053Z",
				fill: "#FF3881"
			}));

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var b = e => r.a.createElement(o.a, p({}, e, {
				viewBox: "0 0 9 10"
			}), r.a.createElement("path", {
				d: "M6.82396 4.11179C6.2307 4.70506 5.19696 4.70506 4.6037 4.11179C3.99195 3.49943 3.99195 2.50389 4.6037 1.89153C4.90064 1.5952 5.29491 1.43195 5.71383 1.43195C6.13336 1.43195 6.52764 1.5952 6.82396 1.89153C7.43571 2.50389 7.43571 3.49943 6.82396 4.11179ZM7.6952 1.02054C7.166 0.491346 6.46247 0.199951 5.71396 0.199951C4.96545 0.199951 4.26253 0.491346 3.73272 1.02054C2.79077 1.9631 2.66571 3.4133 3.34892 4.49571L1.67263 6.17261L0.900714 6.94453C0.900714 6.94453 0.900098 6.94515 0.899482 6.94576C0.898866 6.94576 0.89825 6.94638 0.89825 6.947L0.126947 7.7183C-0.11393 7.95918 -0.11393 8.34852 0.126947 8.5894L0.898866 9.36193H0.899482C0.899482 9.36255 0.899482 9.36255 0.899482 9.36255L1.15699 9.61945C1.27712 9.74019 1.43483 9.79995 1.59254 9.79995C1.75026 9.79995 1.90797 9.74019 2.0281 9.61945C2.26836 9.37918 2.26836 8.98922 2.0281 8.74834L1.76997 8.49083C1.58454 8.30478 1.58515 8.00291 1.76997 7.81748L1.7712 7.81687C1.95171 7.63698 2.26466 7.63575 2.44517 7.81687L2.70268 8.07438C2.94294 8.31464 3.3329 8.31464 3.57378 8.07438C3.81404 7.83412 3.81404 7.44354 3.57378 7.20327L2.97929 6.60816L4.22064 5.36681C4.6642 5.64835 5.17614 5.80421 5.71396 5.80421C6.46247 5.80421 7.166 5.5122 7.6952 4.98301C8.78808 3.89074 8.78808 2.1128 7.6952 1.02054Z"
			}));

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var g = e => r.a.createElement(o.a, f({}, e, {
					viewBox: "0 0 10 6"
				}), r.a.createElement("path", {
					d: "M9.62406 2.8827L7.96986 1.2285C6.33186 -0.4095 3.66786 -0.4095 2.02986 1.2285L0.375657 2.8827C0.141057 3.1173 0.141057 3.4965 0.375657 3.7311C0.610257 3.9657 0.989457 3.9657 1.22406 3.7311L2.87826 2.0769C2.91786 2.0373 2.96406 2.0097 3.00546 1.9731C2.74926 2.3547 2.59986 2.8131 2.59986 3.3069C2.59986 4.6323 3.67446 5.7069 4.99986 5.7069C6.32526 5.7069 7.39986 4.6323 7.39986 3.3069C7.39986 2.8131 7.24986 2.3547 6.99426 1.9731C7.03566 2.0097 7.08186 2.0373 7.12146 2.0769L8.77566 3.7311C8.89266 3.8481 9.04626 3.9069 9.19986 3.9069C9.35346 3.9069 9.50706 3.8481 9.62406 3.7311C9.85866 3.4965 9.85866 3.1173 9.62406 2.8827Z"
				})),
				O = n("./src/chat/components/Message/RichUnit/commonComponents/ImageContent.m.less"),
				C = n.n(O);
			const E = c.a.img("Image", C.a),
				j = c.a.wrapped(m, "NSFWIcon", C.a),
				_ = c.a.wrapped(b, "PrivateIcon", C.a),
				v = c.a.wrapped(g, "RestrictedIcon", C.a),
				I = c.a.wrapped(l, "EmployeesOnlyIcon", C.a),
				x = c.a.wrapped(({
					className: e
				}) => r.a.createElement("div", {
					className: e
				}, r.a.createElement(j, null), " ", s.fbt._("nsfw", null, {
					hk: "6M6nL"
				})), "NSFWIndicator", C.a),
				y = c.a.wrapped(({
					className: e
				}) => r.a.createElement("div", {
					className: e
				}, r.a.createElement(_, null), " ", s.fbt._("private", null, {
					hk: "3xzh8w"
				})), "PrivateIndicator", C.a),
				S = c.a.wrapped(({
					className: e
				}) => r.a.createElement("div", {
					className: e
				}, r.a.createElement(v, null), " ", s.fbt._("restricted", null, {
					hk: "2lC88Z"
				})), "RestrictedIndicator", C.a),
				w = c.a.wrapped(({
					className: e
				}) => r.a.createElement("div", {
					className: e
				}, r.a.createElement(I, null), " ", s.fbt._("employees only", null, {
					hk: "3uDhE6"
				})), "EmployeesOnlyIndicator", C.a),
				N = c.a.wrapped(({
					className: e,
					subredditType: t,
					isNsfw: n
				}) => {
					return r.a.createElement("div", {
						className: e
					}, n ? r.a.createElement(x, null) : null, (e => {
						switch (e) {
							case "RESTRICTED":
								return r.a.createElement(S, null);
							case "EMPLOYEES_ONLY":
								return r.a.createElement(w, null);
							case "PRIVATE":
								return r.a.createElement(y, null);
							default:
								return null
						}
					})(t))
				}, "SubredditTypeIndicator", C.a),
				T = c.a.wrapped(({
					className: e,
					url: t
				}) => r.a.createElement("div", {
					className: e
				}, r.a.createElement(E, {
					src: t
				})), "ImageContainer", C.a),
				A = c.a.div("Title", C.a),
				M = c.a.wrapped(u, "GalleryIcon", C.a),
				k = c.a.wrapped(({
					className: e,
					url: t,
					title: n,
					isGallery: s,
					isNsfw: a,
					subredditType: c,
					isSubreddit: o
				}) => r.a.createElement("div", {
					className: e
				}, t ? r.a.createElement(T, {
					url: t
				}) : null, o ? r.a.createElement(N, {
					isNsfw: a,
					subredditType: c
				}) : null, n ? r.a.createElement(A, null, n) : null, s ? r.a.createElement(M, null) : null), "ImagePostRichUnit", C.a);
			t.a = k
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
			var s = n("./node_modules/lodash/noop.js"),
				a = n.n(s),
				r = n("./node_modules/lodash/throttle.js"),
				c = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				h = n("./src/chat/actions/channel/draftMessage.ts"),
				m = n("./src/chat/actions/gifs/index.ts"),
				p = n("./src/chat/actions/message/index.ts"),
				b = n("./src/chat/actions/surveyTrigger/index.ts"),
				f = n("./src/chat/actions/tooltip.ts"),
				g = n("./src/chat/actions/tracking.ts");
			const O = function(e, t) {
					let n = "",
						s = 0,
						a = t,
						r = t;
					const c = e.charAt(t - 1);
					if (!/\s|\n|\r/g.test(c)) {
						const c = e.replace(/[\n]/gm, " ");
						s = c.substring(0, t).split(/\s/).length - 1;
						const o = new RegExp(`^(?:[^ ]* ){${s}}([^ |\n]*)`, "g").exec(c) || [],
							i = o && o[0] || "";
						n = o && o[1] || "", a = i.length - n.length, r = i.length
					}
					return {
						word: n,
						count: s,
						posStart: a,
						posEnd: r
					}
				},
				C = function(e, t) {
					const {
						word: n
					} = O(e, t);
					return {
						hasUsername: /^(@|u\/)(\w+)?$/g.test(n),
						username: function(e) {
							return (/^(@|u\/)(\w+)/g.exec(e) || [])[2] || ""
						}(n)
					}
				},
				E = function(e, t, n) {
					const {
						word: s,
						posStart: a,
						posEnd: r
					} = O(e, n), c = (/^(@|u\/)/gm.exec(s) || [])[1];
					if (!s) return {
						textUpdate: e,
						posEndUpdate: r
					};
					const o = c + t,
						{
							text: i,
							posEnd: l
						} = function(e, t, n, s) {
							const a = e.substring(0, n),
								r = a + t;
							return {
								text: r + e.substring(s),
								posStart: a.length,
								posEnd: r.length
							}
						}(e, o, a, r);
					return {
						textUpdate: i,
						posEndUpdate: l
					}
				};
			var j = n("./src/higherOrderComponents/asTooltip.tsx"),
				_ = n("./src/chat/components/Scroller/index.tsx"),
				v = n("./src/chat/constants/page.ts"),
				I = n("./src/chat/controls/Dropdown/index.tsx"),
				x = n("./src/chat/selectors/app.ts"),
				y = n("./src/chat/selectors/theme.ts"),
				S = n("./src/chat/selectors/tooltip.ts"),
				w = n("./src/chat/components/MessageTooltip/index.m.less"),
				N = n.n(w);
			const T = "MessageInputTooltip--Container",
				A = u.a.wrapped(Object(j.a)(I.a), "Dropdown", N.a),
				M = u.a.div("DropdownWrapper", N.a),
				k = u.a.wrapped(({
					className: e,
					children: t
				}) => {
					const n = Object(l.e)(y.b);
					return i.a.createElement("div", {
						className: Object(d.a)(e, {
							[N.a.night]: n
						})
					}, t)
				}, "Picker", N.a),
				D = u.a.span("Arrow", N.a);
			u.a.wrapped(e => {
				const t = Object(l.e)(x.d);
				return i.a.createElement(_.b, {
					className: Object(d.a)(e.className, {
						[N.a.embedded]: t
					})
				}, e.children)
			}, "PickerWrapper", N.a).displayName = "PickerWrapper";
			var P = ({
					id: e,
					isOpen: t,
					children: n,
					arrowOffset: s = 45,
					isArrowShow: a = !0
				}) => {
					const r = Object(l.e)(Object(S.b)(e)),
						c = Object(l.d)();
					return i.a.createElement(A, {
						tooltipId: T,
						container: document.getElementById(v.a),
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
					}, i.a.createElement(M, {
						onClick: () => c(Object(f.d)())
					}, i.a.createElement(k, null, n, a && i.a.createElement(D, {
						style: {
							right: `${s}px`
						}
					}))))
				},
				R = n("./node_modules/fbt/lib/FbtPublic.js"),
				L = n("./node_modules/lodash/debounce.js"),
				U = n.n(L),
				B = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				F = n("./src/chat/controls/Gif/index.tsx"),
				H = n("./src/chat/controls/Svg/index.tsx");

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var V = e => i.a.createElement(H.a, G({}, e, {
				viewBox: "0 0 20 20"
			}), i.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375Zm3.53,12.1-1.06,1.06L10,11.061,7.53,13.53,6.47,12.47,8.939,10,6.47,7.53,7.53,6.47,10,8.939,12.47,6.47l1.06,1.06L11.061,10Z"
			}));

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var z = e => i.a.createElement(H.a, W({}, e, {
					viewBox: "0 0 20 20"
				}), i.a.createElement("g", {
					id: "icons_flat"
				}, i.a.createElement("path", {
					d: "M19.7,18.3l-4.5-4.5c2.9-3.7,2.3-9.1-1.4-12s-9.1-2.3-12,1.4s-2.3,9.1,1.4,12c3.1,2.4,7.5,2.4,10.6,0l4.5,4.5L19.7,18.3z M8.5,15C4.9,15,2,12.1,2,8.5S4.9,2,8.5,2S15,4.9,15,8.5C15,12.1,12.1,15,8.5,15z"
				}))),
				K = n("./src/chat/selectors/gifs.ts"),
				q = n("./src/chat/components/MessageTooltip/Picker/Gif/index.m.less"),
				Z = n.n(q);
			const Q = u.a.wrapped(F.a, "Gif", Z.a),
				J = u.a.div("Column", Z.a),
				Y = u.a.wrapped(z, "SearchIcon", Z.a),
				X = u.a.wrapped(({
					children: e,
					className: t
				}) => {
					const n = Object(l.e)(x.d);
					return i.a.createElement("div", {
						className: Object(d.a)(t, {
							[Z.a.embedded]: n
						})
					}, e)
				}, "Wrapper", Z.a),
				$ = u.a.wrapped(({
					className: e,
					children: t,
					isVisible: n,
					onClick: s
				}) => n ? i.a.createElement("div", {
					className: e,
					onClick: s
				}, t) : null, "ClearIcon", Z.a),
				ee = u.a.wrapped(({
					className: e
				}) => {
					const t = Object(l.e)(K.b),
						[n, s] = Object(o.useState)(() => t),
						a = Object(o.useRef)(null),
						r = Object(l.d)(),
						c = Object(o.useCallback)(U()(e => {
							(null == e ? void 0 : e.length) >= 2 ? r(Object(m.j)(10, e)) : r(Object(m.k)(""))
						}, 500), []);
					return Object(o.useEffect)(() => {
						var e;
						null === (e = null == a ? void 0 : a.current) || void 0 === e || e.focus()
					}), i.a.createElement("div", {
						className: e,
						onClick: e => e.stopPropagation()
					}, i.a.createElement(Y, null), i.a.createElement("input", {
						className: Z.a.SearchBar,
						ref: a,
						value: n,
						placeholder: R.fbt._("Search GIPHY", null, {
							hk: "3eUT8S"
						}),
						tabIndex: 0,
						onChange: e => {
							(e => {
								s(e), c(e)
							})(e.currentTarget.value)
						}
					}), i.a.createElement($, {
						onClick: async () => {
							(null == a ? void 0 : a.current) && (await r(Object(m.k)("")), s(""), a.current.focus(), r(Object(m.i)(20)))
						},
						isVisible: Boolean(n)
					}, i.a.createElement(V, null)))
				}, "SearchBarWrapper", Z.a),
				te = u.a.wrapped(({
					className: e,
					onPickGif: t
				}) => {
					const n = Object(l.d)(),
						s = Object(l.e)(K.a),
						a = Object(l.e)(K.d),
						r = Object(o.useRef)(null),
						c = Object(l.e)(K.b),
						d = Object(l.e)(K.c),
						u = Object(l.e)(K.f);
					Object(o.useEffect)(() => {
						var e;
						(null === (e = null == r ? void 0 : r.current) || void 0 === e ? void 0 : e.scrollToTop) && r.current.scrollToTop()
					}, [c]), Object(o.useEffect)(() => {
						(null == s ? void 0 : s.length) || n(Object(m.i)(20))
					}, []);
					const h = (e = !1) => (null == s ? void 0 : s.length) ? s.map((n, s) => {
						if (Boolean(s % 2) === e) return i.a.createElement(Q, {
							source: n.fixed_width.url,
							key: n.id,
							height: n.fixed_width.dimensions.height,
							title: n.title,
							isPreview: !0,
							onClick: () => (e => {
								t(e)
							})(n)
						})
					}) : null;
					return i.a.createElement(_.b, {
						className: e,
						ref: r,
						loadMoreRows: () => n(Object(m.j)(10, c)),
						isLoadMoreRowsComplete: (() => !!a) || d
					}, i.a.createElement(i.a.Fragment, null, i.a.createElement(J, null, h(), u ? Object(B.a)({
						height: B.f.XS
					}) : a ? Object(B.b)(B.c.FIRST) : null), i.a.createElement(J, null, h(!0), u ? Object(B.a)({
						height: B.f.S
					}) : null, a && !u ? Object(B.b)(B.c.SECOND) : null)))
				}, "GifListWrapper", Z.a);
			var ne = ({
					onPickGif: e
				}) => i.a.createElement(X, null, i.a.createElement(ee, null), i.a.createElement(te, {
					onPickGif: e
				})),
				se = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/chat/components/Snoomoji/index.tsx")),
				ae = n("./src/chat/icons/Snoo/index.tsx"),
				re = n("./src/chat/components/MessageTooltip/Picker/Snoomoji/index.m.less"),
				ce = n.n(re);
			const oe = u.a.div("IconWrapper", ce.a);
			oe.displayName = "IconWrapper";
			const ie = u.a.div("LoadingIndicator", ce.a),
				le = u.a.wrapped(({
					children: e,
					className: t
				}) => i.a.createElement("div", {
					className: t
				}, e), "Wrapper", ce.a);
			var de = ({
					onPickSnoomoji: e
				}) => {
					const [t, n] = Object(o.useState)(!1), s = Object(l.e)(x.d), a = Object(o.useCallback)(() => {
						Promise.all(ae.b.map(e => new Promise(t => {
							const n = new Image;
							n.onload = () => t(), n.src = ae.a[e]
						}))).then(() => n(!0))
					}, []);
					Object(o.useEffect)(() => {
						a()
					}, [a]);
					return i.a.createElement(_.b, {
						className: Object(d.a)(ce.a.Scroller, {
							[ce.a.embedded]: s
						})
					}, t ? i.a.createElement(le, null, (() => ae.b.map((t, n) => i.a.createElement(oe, {
						key: `icon-${n}`,
						onClick: () => e(t)
					}, i.a.createElement(se.a, {
						iconName: t
					}))))()) : i.a.createElement(ie, null, R.fbt._("Loading snoomoji...", null, {
						hk: "39nqLy"
					})))
				},
				ue = n("./src/lib/constants/index.ts"),
				he = n("./src/chat/actions/members.ts"),
				me = n("./src/chat/components/ChatMemberList/index.tsx"),
				pe = n("./src/chat/helpers/chatSelector.ts"),
				be = n("./src/chat/selectors/channels.ts"),
				fe = n("./src/chat/selectors/members.ts"),
				ge = n("./src/chat/components/MessageTooltip/Picker/Userlist/index.m.less"),
				Oe = n.n(ge);
			const Ce = u.a.div("LoadingIndicator", Oe.a),
				Ee = u.a.wrapped(me.a, "ChatMemberList", Oe.a),
				je = u.a.wrapped(({
					children: e,
					className: t
				}) => i.a.createElement("div", {
					className: t
				}, e), "Wrapper", Oe.a),
				_e = Object(pe.a)({
					channelId: be.t,
					channelMembers: fe.f,
					hasMoreMembers: fe.d,
					fetchingMembers: fe.a,
					isEmbedded: x.d
				});
			class ve extends o.Component {
				constructor(e) {
					super(e), this.fetchedFilter = "", this.isMount = !1, this.fetchSubredditChannelUsers = U()((e = "") => {
						this.props.fetchSubredditChannelUsers(e)
					}, ue.Nb, {
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
					const s = t && t.length && t.filter(t => t.name.toLowerCase().startsWith(e.toLowerCase())) || t || [];
					return s.length || n || this.fetchedFilter === e || (this.fetchedFilter = e, this.fetchSubredditChannelUsers(e)), s || []
				}
				renderContent() {
					const {
						channelId: e,
						onPickUserName: t,
						onSelectUserName: n,
						fetchingMembers: s
					} = this.props;
					return this.members = this.filterMembers(), this.members && this.members.length && e ? i.a.createElement(je, null, i.a.createElement(Ee, {
						minimal: !0,
						channelId: e,
						members: this.members,
						modIndicator: !0,
						onClick: t,
						onSelectName: n,
						selectIndex: this.state.selectIndex,
						useNSFWIcons: !0
					})) : s || this.members && this.members.length ? i.a.createElement(Ce, null, R.fbt._("Loading members...", null, {
						hk: "23phIt"
					})) : i.a.createElement(Ce, null, R.fbt._("Member not found!", null, {
						hk: "4DkpQe"
					}))
				}
				render() {
					const {
						isEmbedded: e
					} = this.props;
					return i.a.createElement(_.b, {
						className: Object(d.a)(Oe.a.Scroller, {
							[Oe.a.embedded]: e
						})
					}, this.renderContent())
				}
			}
			var Ie = Object(l.b)(_e, e => ({
					fetchSubredditChannelUsers: t => e(Object(he.e)({
						filter: t
					}))
				}))(ve),
				xe = n("./src/chat/constants/experiments.ts"),
				ye = n("./src/chat/constants/messages.ts"),
				Se = n("./src/chat/controls/Button/index.tsx"),
				we = n("./src/chat/constants/keys.ts"),
				Ne = n("./src/chat/singleton/SendbirdSDK.ts"),
				Te = n("./src/chat/controls/ContentEditable/index.m.less"),
				Ae = n.n(Te);
			const Me = 19,
				ke = 12,
				De = 6,
				Pe = u.a.textarea("Textarea", Ae.a);
			class Re extends i.a.Component {
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
					this.props.channelId !== e.channelId && this.textarea && (this.textarea.value = e.draftText || "", this.handleSizing()), this.textarea && this.textarea.value ? Ne.a.startTypingIndicator() : Ne.a.endTypingIndicator(), this.textarea && e.textUpdate && (this.textarea.value = e.textUpdate, this.props.onChangeOnce(this.textarea.value), this.handleSizing()), this.textarea && this.textarea.value && e.clearText && (this.clearTextAndDropInputHeight(), this.props.onChangeOnce(""), this.handleSizing()), e.cursorPosition && this.textarea && (this.textarea.selectionStart = e.cursorPosition.selectionStart, this.textarea.selectionEnd = e.cursorPosition.selectionEnd)
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
					e.key !== we.g || e.shiftKey || (e.preventDefault(), this.props.onSubmit()), this.handleCursor()
				}
				handleKeyDown(e) {
					e.key === we.d && (this.props.onArrowUp(e), this.handleSizing()), e.key === we.a && (this.props.onArrowDown(e), this.handleSizing()), e.key === we.h && this.props.onKeyEsc(e), this.props.onKeyDown(e)
				}
				handleSizing() {
					if (this.textarea) {
						const e = this.textarea;
						e.style.height = "auto", e.style.height = e.scrollHeight + this.offset + "px", e.scrollHeight > 2 * Me + ke ? e.style.paddingTop = "0px" : e.style.paddingTop = "12px", e.scrollHeight > Me * De + 1 ? e.style.overflowY = "scroll" : e.style.overflowY = "hidden"
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
					return i.a.createElement(Pe, {
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
						placeholder: R.fbt._("Message", null, {
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
			var Le = n("./src/chat/helpers/dom.ts");

			function Ue() {
				return (Ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Be = e => i.a.createElement(H.a, Ue({}, e, {
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
				})))),
				Fe = n("./src/chat/models/Theme/index.ts");

			function He() {
				return (He = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Ge = e => {
				const t = Object(l.e)(y.a);
				return i.a.createElement(H.a, He({}, e, {
					viewBox: "0 0 24 24"
				}), (() => {
					let e;
					if (t) {
						const n = Fe.f[t];
						n && (e = i.a.createElement("defs", null, i.a.createElement("linearGradient", {
							id: "linear-gradient",
							gradientTransform: `rotate(${Fe.d})`
						}, n.stops.map((e, t) => i.a.createElement("stop", {
							key: `${t}-${e.offset}-${e.color}`,
							offset: `${e.offset}`,
							stopColor: `${e.color}`
						})))))
					}
					return i.a.createElement(i.a.Fragment, null, e, i.a.createElement("path", {
						style: e ? {
							fill: "url(#linear-gradient)"
						} : void 0,
						d: "M22.6559 10.8L2.39994 0.65995C2.15389 0.529239 1.87278 0.47974 1.59687 0.518539C1.32096 0.557338 1.06441 0.682447 0.863944 0.87595C0.656797 1.06381 0.51403 1.3121 0.455877 1.58564C0.397725 1.85917 0.427136 2.14407 0.539944 2.39995L4.58394 12L0.539944 21.6C0.429918 21.8544 0.401998 22.1368 0.460075 22.4078C0.518153 22.6788 0.659334 22.925 0.863944 23.112C1.10992 23.3469 1.43582 23.4798 1.77594 23.484C1.99315 23.4934 2.20883 23.4436 2.39994 23.34L22.6559 13.2C22.8781 13.0879 23.0648 12.9164 23.1952 12.7045C23.3256 12.4927 23.3947 12.2487 23.3947 12C23.3947 11.7512 23.3256 11.5072 23.1952 11.2954C23.0648 11.0835 22.8781 10.912 22.6559 10.8Z"
					}))
				})())
			};

			function Ve() {
				return (Ve = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var We = e => i.a.createElement(H.a, Ve({}, e, {
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
				ze = n("./src/chat/selectors/experiments.ts"),
				Ke = n("./src/chat/components/MessageInput/index.m.less"),
				qe = n.n(Ke);
			const Ze = "MessageInputTooltip--Snoomoji",
				Qe = "MessageInputTooltip--Gif",
				Je = "MessageInputTooltip--Userlist",
				Ye = 5e3,
				Xe = 85,
				$e = u.a.wrapped(Se.c, "SubmitButton", qe.a);
			$e.displayName = "SubmitButton";
			const et = u.a.wrapped(Ge, "SendIcon", qe.a),
				tt = u.a.form("Form", qe.a),
				nt = u.a.div("Wrapper", qe.a),
				st = u.a.div("InputWrapper", qe.a),
				at = u.a.div("Icons", qe.a),
				rt = u.a.wrapped(Re, "ContentEditable", qe.a),
				ct = i.a.memo((function() {
					const e = Object(l.d)(),
						t = Object(l.e)(S.a),
						n = Object(l.e)(ze.b),
						s = Object(l.e)(e => Object(ze.a)(e, xe.b.ChatMediaGiphy));
					s && e(Object(g.G)(s));
					return n ? i.a.createElement(ot, {
						onMouseDown: () => {
							e(Object(f.c)({
								tooltipId: Qe
							})), e(Object(g.x)(Qe))
						},
						active: t === Qe
					}, i.a.createElement(Be, {
						isFilled: t === Qe
					})) : null
				})),
				ot = u.a.wrapped(e => i.a.createElement("div", {
					className: Object(d.a)({
						[qe.a.active]: e.active
					}, e.className),
					onMouseDown: Object(Le.b)(e.onMouseDown)
				}, e.children), "IconButton", qe.a),
				it = Object(pe.a)({
					activeDropdownId: e => e.tooltipId || void 0,
					draftMessage: (e, t) => Object(be.n)(e, t.channelId),
					isFullSize: x.e
				}),
				lt = Object(l.b)(it, (e, {
					channelId: t
				}) => ({
					onSubmitText: n => e(Object(p.q)(t, n.trim(), ye.c.TEXT)),
					onSubmitSnoo: n => e(Object(p.q)(t, n.trim(), ye.c.SNOOMOJI)),
					onSubmitGif: n => {
						e(Object(p.o)(t, n)), e(Object(m.k)(""))
					},
					toggleSnoomojiTooltip: t => {
						e(Object(f.c)({
							tooltipId: t
						})), e(Object(g.x)(t))
					},
					toggleGifTooltip: t => {
						e(Object(f.c)({
							tooltipId: t
						})), e(Object(g.x)(t))
					},
					toggleUserlistTooltip: t => {
						e(Object(f.c)({
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
					closeUserlistTooltip: () => e(Object(f.d)()),
					startSurveyTimer: () => e(Object(b.b)())
				}));
			class dt extends o.PureComponent {
				constructor(e) {
					super(e), this.selectUserName = "", this.cursorPosition = {
						selectionStart: 0,
						selectionEnd: 0
					}, this.updateDraftText = e => {
						const {
							saveDraft: t,
							deleteDraft: n,
							channelId: s
						} = this.props, a = e.trim();
						a ? t(s, a) : n(s)
					}, this.handleChangeText = e => {
						this.setState({
							text: e.trim()
						})
					}, this.handleInputBlur = e => {
						this.updateDraftText(e)
					}, this.handleChangeOnce = e => {
						this.toggleUserlistTooltipByTextChange(e), this.cleanChildProps()
					}, this.sendEnabled = () => !!this.state.text, this.onArrowUpUserlistListener = a.a, this.onArrowDownUserlistListener = a.a, this.startIdleTimerThrottle = c()(() => {
						this.props.startSurveyTimer()
					}, Ye), this.handleSubmitText = this.handleSubmitText.bind(this), this.handleSubmitSnoo = this.handleSubmitSnoo.bind(this), this.onPickGifHandler = this.onPickGifHandler.bind(this);
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
						deleteDraft: s
					} = this.props;
					this.sendEnabled() && (this.isUserlistPopupOpened() ? (this.onPickUserName(this.selectUserName || this.state.inputUserName), this.props.toggleUserlistTooltip(Je)) : (t(this.state.text), n && n(), this.clearText(), s(e)))
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
						textUpdate: s,
						posEndUpdate: a
					} = E(t, e, n);
					this.setState({
						textUpdate: s,
						text: s
					}, () => {
						this.reFocusCursorPosition(a), this.props.toggleUserlistTooltip(Je)
					})
				}
				toggleUserlistTooltipByTextChange(e) {
					const {
						selectionEnd: t
					} = this.cursorPosition, {
						hasUsername: n,
						username: s
					} = C(e, t), a = this.isUserlistPopupOpened();
					return (n && !a || !n && a) && this.props.toggleUserlistTooltip(Je), this.setState({
						inputUserName: s
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
						toggleSnoomojiTooltip: s,
						draftMessage: a,
						isFullSize: r
					} = this.props;
					return i.a.createElement(tt, {
						tabIndex: 0,
						className: Object(d.a)(t, {
							[qe.a.isFullSize]: r
						}),
						id: T,
						onSubmit: Object(Le.b)(this.handleSubmitText)
					}, i.a.createElement(nt, null, i.a.createElement(st, null, i.a.createElement(rt, {
						channelId: n,
						clearText: this.state.clearText,
						cursorPosition: this.cursorPosition,
						draftText: a || "",
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
					}), i.a.createElement(at, null, i.a.createElement(ct, null), i.a.createElement(ot, {
						onMouseDown: () => s(Ze),
						active: e === Ze
					}, i.a.createElement(We, {
						isFilled: e === Ze
					})), i.a.createElement(P, {
						id: Ze
					}, i.a.createElement(de, {
						onPickSnoomoji: this.handleSubmitSnoo
					})), i.a.createElement(P, {
						id: Qe,
						arrowOffset: Xe
					}, i.a.createElement(ne, {
						onPickGif: this.onPickGifHandler
					})), i.a.createElement(P, {
						id: Je,
						isArrowShow: !1
					}, i.a.createElement(Ie, {
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
			t.c = lt(dt)
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
				messageQuickReplyPicker: "_3_NY36lHeA1_XkDd7-y151",
				UserName: "_3HuV3C87ffXCPkDXrcxhN4",
				userName: "_3HuV3C87ffXCPkDXrcxhN4",
				currentUser: "_10PTipXiGWFcfWe_AElCbK"
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/actions/container.ts"),
				l = n("./src/chat/components/CloseIcon/index.tsx"),
				d = n("./src/chat/components/ThemeProvider/index.tsx"),
				u = n("./src/chat/constants/container.ts"),
				h = n("./src/chat/controls/Counter/index.tsx"),
				m = n("./src/chat/helpers/chatSelector.ts"),
				p = n("./src/chat/selectors/unreadCounter.ts"),
				b = n("./src/chat/components/MinimizedPortalContainer/index.m.less"),
				f = n.n(b);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), {
				minimized: O
			} = u.b, C = o.a.wrapped(l.a, "HiddenCloseButton", f.a);
			C.displayName = "CloseButton";
			const E = o.a.wrapped(e => a.a.createElement("div", {
					onClick: e.onClick,
					className: e.className,
					style: {
						width: `${O.width}px`,
						height: `${O.height}px`
					}
				}, e.children), "Container", f.a),
				j = o.a.span("TitleWithCounter", f.a),
				_ = Object(m.a)({
					unreadCount: p.a
				}),
				v = Object(r.b)(_, e => ({
					close: () => e(Object(i.sizeChanged)(u.a.HIDDEN)),
					open: () => e(Object(i.sizeChanged)(u.a.EMBED))
				}));
			t.a = v(e => {
				const {
					unread: t,
					count: n
				} = e.unreadCount, s = n > 0 ? n : void 0;
				return a.a.createElement(d.a, null, a.a.createElement(E, {
					key: n,
					className: Object(c.a)(e.className, {
						[f.a.unread]: t
					}),
					onClick: e.open
				}, a.a.createElement(j, null, g._("Chat", null, {
					hk: "3ZWpRR"
				}), t && a.a.createElement(h.b, {
					count: s
				})), a.a.createElement(C, null)))
			})
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
				ArrowLeftHeader: "_3XIy0iUc824IWRgOI0Qeuo",
				arrowLeftHeader: "_3XIy0iUc824IWRgOI0Qeuo",
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
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
				b = n("./src/lib/hooks/useOnClickOutside.ts"),
				f = n("./src/lib/hooks/useTooltip.ts"),
				g = n("./src/chat/actions/channel/dropdown.ts"),
				O = n("./src/chat/actions/tooltip.ts"),
				C = n("./src/chat/actions/user/dropdown.ts"),
				E = n("./src/lib/lessComponent.tsx"),
				j = n("./src/chat/actions/theme.ts"),
				_ = n("./src/chat/helpers/chatSelector.ts"),
				v = n("./src/chat/controls/Svg/index.tsx");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var x = e => a.a.createElement(v.a, I({}, e, {
					viewBox: "0 0 59.077 59.077"
				}), a.a.createElement("g", null, a.a.createElement("path", {
					d: "M55.906,28.463c-0.235,0.129-0.469,0.258-0.711,0.379c-11.339,5.68-25.186,1.072-30.864-10.268   C21.8,13.517,21.22,7.726,22.699,2.268L23.315,0l-2.061,1.129C9.807,7.402,5.107,21.605,10.554,33.464   c0.231,0.501,0.826,0.722,1.326,0.491c0.502-0.23,0.723-0.824,0.492-1.326C7.684,22.424,11.164,10.333,20.253,4.09   c-0.891,5.221-0.102,10.602,2.289,15.379c5.952,11.884,20.155,16.965,32.216,11.78c-2.045,5.346-6.026,9.775-11.183,12.357   c-3.167,1.586-6.557,2.407-10.074,2.438c-0.638,0.007-1.285-0.016-1.917-0.063c-0.551-0.05-1.031,0.371-1.072,0.922   c-0.041,0.551,0.371,1.031,0.922,1.072c0.617,0.046,1.244,0.07,1.867,0.07c0.073,0,0.146,0,0.218-0.001   c3.825-0.034,7.51-0.926,10.952-2.65c6.357-3.183,11.071-8.95,12.935-15.822l0.562-2.239L55.906,28.463z"
				}), a.a.createElement("path", {
					d: "M31.271,43.412c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.179,0.867-0.5c0.276-0.479,0.112-1.09-0.366-1.366   l-2.83-1.634l2.83-1.634c0.479-0.276,0.643-0.888,0.366-1.366c-0.277-0.479-0.89-0.642-1.366-0.366l-2.83,1.634v-3.268   c0-0.552-0.447-1-1-1s-1,0.448-1,1v3.268l-2.83-1.634c-0.478-0.276-1.09-0.113-1.366,0.366c-0.276,0.479-0.112,1.09,0.366,1.366   l2.83,1.634l-2.83,1.634c-0.479,0.276-0.643,0.888-0.366,1.366c0.186,0.321,0.521,0.5,0.867,0.5c0.17,0,0.342-0.043,0.499-0.134   l2.83-1.634v3.268c0,0.552,0.447,1,1,1s1-0.448,1-1v-3.268L31.271,43.412z"
				}), a.a.createElement("path", {
					d: "M11.637,37.046c-0.277-0.479-0.89-0.642-1.366-0.366l-2.83,1.634v-3.268c0-0.552-0.447-1-1-1s-1,0.448-1,1v3.268   l-2.83-1.634c-0.478-0.276-1.09-0.113-1.366,0.366c-0.276,0.479-0.112,1.09,0.366,1.366l2.83,1.634l-2.83,1.634   c-0.479,0.276-0.643,0.888-0.366,1.366c0.186,0.321,0.521,0.5,0.867,0.5c0.17,0,0.342-0.043,0.499-0.134l2.83-1.634v3.268   c0,0.552,0.447,1,1,1s1-0.448,1-1v-3.268l2.83,1.634c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.179,0.867-0.5   c0.276-0.479,0.112-1.09-0.366-1.366l-2.83-1.634l2.83-1.634C11.749,38.136,11.913,37.524,11.637,37.046z"
				}), a.a.createElement("path", {
					d: "M22.637,50.077c-0.277-0.479-0.89-0.642-1.366-0.366l-2.83,1.634v-3.268c0-0.552-0.447-1-1-1s-1,0.448-1,1v3.268   l-2.83-1.634c-0.478-0.276-1.09-0.112-1.366,0.366s-0.112,1.09,0.366,1.366l2.83,1.634l-2.83,1.634   c-0.479,0.276-0.643,0.888-0.366,1.366c0.186,0.321,0.521,0.5,0.867,0.5c0.17,0,0.342-0.043,0.499-0.134l2.83-1.634v3.268   c0,0.552,0.447,1,1,1s1-0.448,1-1v-3.268l2.83,1.634c0.157,0.091,0.329,0.134,0.499,0.134c0.346,0,0.682-0.179,0.867-0.5   c0.276-0.479,0.112-1.09-0.366-1.366l-2.83-1.634l2.83-1.634C22.749,51.167,22.913,50.556,22.637,50.077z"
				}))),
				y = n("./src/chat/components/ThemeSwitcher/index.m.less"),
				S = n.n(y);
			const w = Object(_.a)({
					theme: e => e.user.prefs.globalTheme
				}),
				N = Object(r.b)(w, (e, t) => ({
					changeModeClicked: () => e(Object(j.themeToggle)())
				})),
				T = E.a.div("Wrapper", S.a);
			N(({
				changeModeClicked: e,
				theme: t
			}) => a.a.createElement(T, {
				onClick: e
			}, a.a.createElement(x, {
				active: !0
			})));
			var A = n("./src/chat/constants/channels.ts"),
				M = n("./src/chat/constants/dropdown.ts"),
				k = n("./src/chat/controls/Dropdown/Row.tsx"),
				D = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				P = n("./src/chat/controls/TooltipHooked/TooltipHooked.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var L = e => a.a.createElement(v.a, R({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("g", {
				id: "icons_flat"
			}, a.a.createElement("polygon", {
				points: "19,9 11,9 11,1 9,1 9,9 1,9 1,11 9,11 9,19 11,19 11,11 19,11 \t"
			})));

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var B = e => a.a.createElement(v.a, U({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 15.5C7.568 15.5 6.248 15.029 5.172 14.242L14.242 5.172C15.029 6.248 15.5 7.568 15.5 9C15.5 12.584 12.584 15.5 9 15.5ZM2.5 9C2.5 5.416 5.416 2.5 9 2.5C10.432 2.5 11.752 2.971 12.828 3.758L3.758 12.828C2.971 11.752 2.5 10.432 2.5 9ZM9 0.5C4.313 0.5 0.5 4.313 0.5 9C0.5 13.687 4.313 17.5 9 17.5C13.687 17.5 17.5 13.687 17.5 9C17.5 4.313 13.687 0.5 9 0.5Z"
			}));

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var H = e => a.a.createElement(v.a, F({}, e, {
					viewBox: "0 0 20 20"
				}), a.a.createElement("path", {
					d: "M16.345 14.931L17.707 16.293C18.098 16.684 18.098 17.316 17.707 17.707C17.512 17.902 17.256 18 17 18C16.744 18 16.488 17.902 16.293 17.707L0.293 1.70701C-0.0979999 1.31601 -0.0979999 0.684006 0.293 0.293006C0.684 -0.0979941 1.316 -0.0979941 1.707 0.293006L4.493 3.07901C5.591 1.81601 7.199 1.01001 9 1.01001C12.303 1.01001 14.99 3.69701 14.99 7.00001L15 11.998C15 12.552 15.449 13 16 13C16.552 13 17 13.447 17 14C17 14.431 16.726 14.789 16.345 14.931ZM3.0103 6.99801L3.0003 12C3.0003 12.552 2.5513 13 2.0003 13C1.4483 13 1.0003 13.447 1.0003 14C1.0003 14.553 1.4483 15 2.0003 15H11.5863L3.0383 6.45201C3.0213 6.63201 3.0103 6.81301 3.0103 6.99801ZM8 16H7C7 17.103 7.897 18 9 18C10.103 18 11 17.103 11 16H10H8Z"
				})),
				G = n("./src/chat/icons/svgs/Edit/index.tsx");

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var W = e => a.a.createElement(v.a, V({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				d: "M14 10.9882C14 11.5422 14.449 11.9902 15 11.9902C15.552 11.9902 16 12.4372 16 12.9902C16 13.5432 15.552 13.9902 15 13.9902H1C0.448 13.9902 0 13.5432 0 12.9902C0 12.4372 0.448 11.9902 1 11.9902C1.551 11.9902 2 11.5422 2 10.9902L2.01 5.9882C2.01 2.6872 4.697 0.000198364 8 0.000198364C11.303 0.000198364 13.99 2.6872 13.99 5.9902L14 10.9882ZM6 14.9902H7H9H10C10 16.0932 9.103 16.9902 8 16.9902C6.897 16.9902 6 16.0932 6 14.9902Z"
			}));

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var K = e => a.a.createElement(v.a, z({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, a.a.createElement("path", {
				d: "M19.862,9.572A10.571,10.571,0,0,0,10,2.875a10.7,10.7,0,0,0-2.944.417L9.785,6.021a3.953,3.953,0,0,1,4.193,4.193l3.648,3.649a10.7,10.7,0,0,0,2.237-3.435A1.156,1.156,0,0,0,19.862,9.572Z"
			}), a.a.createElement("path", {
				d: "M2.928,4.343l.679.679A10.591,10.591,0,0,0,.138,9.572a1.154,1.154,0,0,0,0,.855,10.6,10.6,0,0,0,2.425,3.649,10.569,10.569,0,0,0,12.073,1.973l1.021,1.022,1.414-1.414L4.342,2.929Zm4.244,8.483A3.989,3.989,0,0,1,6.565,7.98l5.454,5.454A3.99,3.99,0,0,1,7.172,12.826Z"
			})));

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Z = e => a.a.createElement(v.a, q({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M7 0H14C15.654 0 17 1.346 17 3V15C17 16.654 15.654 18 14 18H7C5.346 18 4 16.654 4 15V14C4 13.448 4.447 13 5 13C5.553 13 6 13.448 6 14V15C6 15.551 6.448 16 7 16H14C14.552 16 15 15.551 15 15V3C15 2.449 14.552 2 14 2H7C6.448 2 6 2.449 6 3V4C6 4.552 5.553 5 5 5C4.447 5 4 4.552 4 4V3C4 1.346 5.346 0 7 0ZM8.293 12.707C7.902 12.316 7.902 11.684 8.293 11.293L9.586 10H1C0.447 10 0 9.552 0 9C0 8.448 0.447 8 1 8H9.586L8.293 6.707C7.902 6.316 7.902 5.684 8.293 5.293C8.684 4.902 9.316 4.902 9.707 5.293L12.706 8.293C12.799 8.385 12.872 8.495 12.923 8.618C13.024 8.862 13.024 9.138 12.923 9.382C12.872 9.505 12.799 9.615 12.706 9.708L9.707 12.707C9.512 12.902 9.256 13 9 13C8.744 13 8.488 12.902 8.293 12.707Z"
			}));

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var J = e => a.a.createElement(v.a, Q({}, e, {
					viewBox: "0 0 20 20"
				}), a.a.createElement("path", {
					d: "M2.01557 4.0152V13.4922C2.01557 13.6692 2.04557 13.8372 2.08857 14.0002H0.999573C0.447573 14.0002 -0.000427246 13.5532 -0.000427246 13.0002V1.0002C-0.000427246 0.4472 0.447573 0.000200272 0.999573 0.000200272H12.9996C13.5526 0.000200272 13.9996 0.4472 13.9996 1.0002V2.0892C13.8366 2.0462 13.6686 2.0152 13.4926 2.0152H4.01557C2.91157 2.0152 2.01557 2.9112 2.01557 4.0152ZM4.99997 14C4.99997 14.276 5.22397 14.5 5.49997 14.5H13.5C13.776 14.5 14 14.276 14 14C14 12.07 12.43 10.5 10.5 10.5H8.49997C6.56997 10.5 4.99997 12.07 4.99997 14ZM12 7.00002C12 5.62102 10.878 4.50002 9.49997 4.50002C8.12197 4.50002 6.99997 5.62102 6.99997 7.00002C6.99997 8.37902 8.12197 9.50002 9.49997 9.50002C10.878 9.50002 12 8.37902 12 7.00002ZM3.99997 3.00002H15C15.552 3.00002 16 3.44702 16 4.00002V15C16 15.553 15.552 16 15 16H3.99997C3.44797 16 2.99997 15.553 2.99997 15V4.00002C2.99997 3.44702 3.44797 3.00002 3.99997 3.00002Z"
				})),
				Y = n("./src/chat/icons/svgs/helpers.tsx"),
				X = n("./src/chat/models/Theme/index.ts");

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var ee = e => {
					return a.a.createElement(v.a, $({}, e, {
						viewBox: "0 0 20 20"
					}), (() => {
						let e;
						const t = X.f[X.c.VANITY];
						return t && (e = a.a.createElement(Y.a, {
							rotate: X.d,
							gradient: t,
							id: "settings-linear-gradient"
						})), a.a.createElement(a.a.Fragment, null, e, a.a.createElement("path", {
							d: "M10,6.875A3.125,3.125,0,1,0,13.125,10,3.129,3.129,0,0,0,10,6.875Zm0,5A1.875,1.875,0,1,1,11.875,10,1.877,1.877,0,0,1,10,11.875Z"
						}), a.a.createElement("path", {
							d: "M19.549,8.849a1.124,1.124,0,0,0-1.116-.974H17.4a.915.915,0,0,1-.828-.608.906.906,0,0,1,.163-1l.722-.723a1.127,1.127,0,0,0,.1-1.495,9.631,9.631,0,0,0-1.608-1.608,1.129,1.129,0,0,0-1.494.1l-.724.724a.92.92,0,0,1-1.018.155.906.906,0,0,1-.588-.82V1.567A1.123,1.123,0,0,0,11.151.451a8.782,8.782,0,0,0-2.3,0,1.123,1.123,0,0,0-.974,1.116V2.6a.915.915,0,0,1-.608.828.907.907,0,0,1-1-.163l-.723-.722a1.126,1.126,0,0,0-1.495-.1A9.631,9.631,0,0,0,2.443,4.051a1.127,1.127,0,0,0,.1,1.494l.724.724a.917.917,0,0,1,.155,1.018.906.906,0,0,1-.82.588H1.567a1.123,1.123,0,0,0-1.116.974,8.754,8.754,0,0,0,0,2.3,1.123,1.123,0,0,0,1.116.974H2.6a.915.915,0,0,1,.828.608.906.906,0,0,1-.163,1l-.722.723a1.127,1.127,0,0,0-.1,1.495,9.707,9.707,0,0,0,1.608,1.608,1.13,1.13,0,0,0,1.494-.1l.724-.724a.916.916,0,0,1,1.018-.155.906.906,0,0,1,.588.82v1.031a1.123,1.123,0,0,0,.974,1.116,8.754,8.754,0,0,0,2.3,0,1.123,1.123,0,0,0,.974-1.116V17.4a.915.915,0,0,1,.608-.828.906.906,0,0,1,1,.163l.724.724a1.132,1.132,0,0,0,1.494.1,9.707,9.707,0,0,0,1.608-1.608,1.127,1.127,0,0,0-.1-1.494l-.724-.724a.917.917,0,0,1-.155-1.018.906.906,0,0,1,.82-.588h1.031a1.123,1.123,0,0,0,1.116-.974,8.754,8.754,0,0,0,0-2.3Zm-1.226,2.026H17.4a2.224,2.224,0,0,0-1.549,3.741l.65.65A8.459,8.459,0,0,1,15.266,16.5l-.65-.65A2.224,2.224,0,0,0,10.875,17.4v.921a7.216,7.216,0,0,1-1.75,0V17.4A2.159,2.159,0,0,0,7.747,15.42a2.154,2.154,0,0,0-2.363.433l-.65.65A8.459,8.459,0,0,1,3.5,15.266l.65-.65A2.224,2.224,0,0,0,2.6,10.875H1.677a7.388,7.388,0,0,1,0-1.75H2.6A2.159,2.159,0,0,0,4.58,7.747a2.152,2.152,0,0,0-.433-2.363l-.65-.65A8.362,8.362,0,0,1,4.734,3.5l.65.65a2.162,2.162,0,0,0,2.382.425A2.15,2.15,0,0,0,9.125,2.6V1.677a7.216,7.216,0,0,1,1.75,0V2.6A2.159,2.159,0,0,0,12.253,4.58a2.158,2.158,0,0,0,2.363-.433l.65-.65A8.362,8.362,0,0,1,16.5,4.734l-.65.65a2.16,2.16,0,0,0-.425,2.382A2.15,2.15,0,0,0,17.4,9.125h.921a7.388,7.388,0,0,1,0,1.75Z"
						}))
					})())
				},
				te = n("./src/chat/models/Channel/index.ts"),
				ne = n("./src/chat/reducers/sidebar/sideBarAppearance/index.ts"),
				se = n("./src/chat/selectors/app.ts"),
				ae = n("./src/chat/selectors/channels.ts"),
				re = n("./src/chat/selectors/experiments.ts"),
				ce = n("./src/chat/selectors/theme.ts"),
				oe = n("./src/chat/selectors/user.ts"),
				ie = n("./src/chat/components/ChannelHeaderDropdown/index.m.less"),
				le = n.n(ie),
				de = n("./src/chat/constants/experiments.ts");
			const ue = e => {
					switch (e) {
						case M.b.AddToGroup:
							return {
								text: h.fbt._("Add to group", null, {
									hk: "3ZCBwZ"
								}), icon: a.a.createElement(L, null)
							};
						case M.b.Block:
							return {
								text: h.fbt._("Block", null, {
									hk: "1s7OxS"
								}), icon: a.a.createElement(B, null)
							};
						case M.b.ChangeTheme:
							return {
								text: h.fbt._("Change theme", null, {
									hk: "1J6Ajx"
								}), icon: a.a.createElement(G.a, null), className: "changeTheme"
							};
						case M.b.Leave:
							return {
								text: h.fbt._("Leave group", null, {
									hk: "zStpq"
								}), icon: a.a.createElement(Z, null)
							};
						case M.b.LeaveRoom:
							return {
								text: h.fbt._("Leave room", null, {
									hk: "42PJCV"
								}), icon: a.a.createElement(Z, null)
							};
						case M.b.MuteBadging:
							return {
								text: h.fbt._("Disable notification badging", null, {
									hk: "4BzTkp"
								}), icon: a.a.createElement(H, null)
							};
						case M.b.MuteNotifs:
							return {
								text: h.fbt._("Mute Notifications", null, {
									hk: "3EpiuE"
								}), icon: a.a.createElement(H, null)
							};
						case M.b.Profile:
							return {
								text: h.fbt._("View Profile", null, {
									hk: "3qjq7q"
								}), icon: a.a.createElement(J, null)
							};
						case M.b.RenameGroup:
							return {
								text: h.fbt._("Rename group", null, {
									hk: "hTeQ"
								}), icon: a.a.createElement(G.a, null)
							};
						case M.b.UnmuteBadging:
							return {
								text: h.fbt._("Enable notification badging", null, {
									hk: "87Nfa"
								}), icon: a.a.createElement(W, null)
							};
						case M.b.UnmuteNotifs:
							return {
								text: h.fbt._("Unmute notifications", null, {
									hk: "2TcEwL"
								}), icon: a.a.createElement(W, null)
							};
						case M.b.ViewMembers:
							return {
								text: h.fbt._("View members", null, {
									hk: "PC84"
								}), icon: a.a.createElement(J, null)
							};
						case M.b.Hide:
							return {
								text: h.fbt._("Hide chat", null, {
									hk: "4e3NQf"
								}), icon: a.a.createElement(K, null)
							};
						case M.b.HideGroup:
							return {
								text: h.fbt._("Hide group", null, {
									hk: "PS4Ak"
								}), icon: a.a.createElement(K, null)
							};
						default:
							return {
								text: "Unknown item", icon: a.a.createElement("span", null)
							}
					}
				},
				he = Object(_.a)({
					currentUserId: oe.a,
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => e.tooltipId === t || "OverlayNavTooltip--Default" === e.tooltipId,
					channel: ae.g,
					isModerator: ae.a,
					isChannelLocked: ae.G,
					isChannelBadgingMuted: ae.E,
					isChannelNotifsMuted: ae.H,
					isChannelHidden: ae.F,
					isFullSize: se.e,
					isThemesEnabled: re.g,
					isSparkles: re.f,
					isShowPrompt: ce.c
				});
			var me = Object(r.b)(he, (e, t) => ({
					onInviteToChannel: () => {
						e(Object(g.c)()), e(Object(d.c)())
					},
					onLeaveChannel: () => e(Object(g.d)()),
					onViewMembers: () => {
						e(Object(g.k)()), e(Object(d.S)())
					},
					onBlockUser: t => e(Object(C.a)(t)),
					onChangeTheme: () => {
						e(Object(l.f)(ne.a.THEMES)), e(Object(d.e)())
					},
					onViewProfile: t => {
						e(Object(g.l)(t)), e(Object(d.w)())
					},
					onOpenDropdown: t => e(Object(g.i)(t)),
					onMuteBadging: () => {
						e(Object(g.e)(t)), e(Object(d.A)())
					},
					onUnmuteBadging: () => {
						e(Object(g.g)(t)), e(Object(d.B)())
					},
					onMuteNotifs: () => e(Object(g.f)(t)),
					onUnmuteNotifs: () => e(Object(g.h)(t)),
					onHideChannel: () => {
						e(Object(g.b)(t)), e(Object(d.r)())
					},
					closeTooltip: () => e(Object(O.d)()),
					showSidebar: () => e(Object(l.h)(!0))
				}))(e => {
					const {
						channel: t,
						currentUserId: n,
						isChannelBadgingMuted: s,
						isChannelNotifsMuted: o,
						isChannelHidden: i,
						isThemesEnabled: l
					} = e, u = Object(r.d)(), m = Object(r.e)(e => Object(re.a)(e, de.b.UiRefreshBubblePreset));
					m && u(Object(d.G)(m));
					const g = Object(f.b)(Object(D.c)());
					Object(b.a)("OverlayNavTooltip--Default", g.hide);
					const O = s => {
							const {
								onInviteToChannel: a,
								onBlockUser: r,
								onChangeTheme: c,
								onLeaveChannel: o,
								toggleChannelNameInput: i,
								onViewMembers: l,
								onMuteBadging: d,
								onUnmuteBadging: u,
								onMuteNotifs: h,
								onUnmuteNotifs: m,
								onHideChannel: b,
								showSidebar: f
							} = e;
							switch (g.hide(), s) {
								case M.b.AddToGroup:
									return a();
								case M.b.Block: {
									const e = (() => t && t.members.find(e => e.id !== n))();
									return e && r(e.id)
								}
								case M.b.ChangeTheme:
									return f(), c();
								case M.b.Leave:
								case M.b.LeaveRoom:
									return o();
								case M.b.Profile:
									return C();
								case M.b.RenameGroup:
									return i();
								case M.b.ViewMembers:
									return l();
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
						},
						C = () => {
							const {
								channel: t,
								currentUserId: n,
								onViewProfile: s,
								inviterName: a
							} = e;
							if (t && t.channelState === A.b.JOINED) {
								const e = t.members.find(e => e.id !== n);
								if (e && e.name) return s(e.name)
							}
							return a && s(a)
						},
						{
							closeTooltip: E,
							isFullSize: j,
							isSparkles: _,
							isShowPrompt: v
						} = e,
						I = (() => {
							if (t) switch (t.type) {
								case te.a.Direct:
									return M.c.directChannel.filter(e => M.d.muteBadging(e, s)).filter(e => M.d.unmuteBadging(e, s)).filter(e => M.d.muteNotifs(e, o)).filter(e => M.d.unmuteNotifs(e, o)).filter(e => M.d.hideChannel(e, i)).filter(e => M.d.changeTheme(e, l));
								case te.a.Group:
									return M.c.groupChannel.filter(e => M.d.muteBadging(e, s)).filter(e => M.d.unmuteBadging(e, s)).filter(e => M.d.muteNotifs(e, o)).filter(e => M.d.unmuteNotifs(e, o)).filter(e => M.d.hideChannel(e, i)).filter(e => M.d.changeTheme(e, l))
							}
						})();
					return a.a.createElement(a.a.Fragment, null, !1, a.a.createElement("button", {
						onClick: e => (e => {
							e.stopPropagation(), null == g || g.toggle()
						})(e),
						ref: g.target.ref,
						className: Object(c.a)(le.a.DropdownTrigger, {
							[le.a.isFullSize]: j
						}),
						title: h.fbt._("Settings", null, {
							hk: "4lO98u"
						})
					}, a.a.createElement(ee, {
						className: Object(c.a)(le.a.Settings, {
							[le.a.gradient]: _ && v
						})
					})), a.a.createElement(P.default, {
						arrowProps: g.arrowProps,
						popperProps: g.popperProps,
						visible: g.visible,
						hide: g.hide,
						isInstant: !0,
						noArrow: !0,
						styled: !0
					}, a.a.createElement("div", {
						className: le.a.OptionsContainer,
						id: "OverlayNavTooltip--Default"
					}, I && I.map((e, t) => a.a.createElement(k.a, {
						className: Object(c.a)(le.a.DropdownRow, {
							[le.a.gradient]: _ && v && e === M.b.ChangeTheme
						}),
						key: t,
						displayText: ue(e).text,
						onClick: () => {
							O(e), E()
						}
					}, ue(e).icon)))))
				}),
				pe = n("./src/chat/components/CloseIcon/index.tsx"),
				be = n("./src/chat/constants/container.ts"),
				fe = n("./src/chat/controls/Button/index.tsx");

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Oe = e => a.a.createElement(v.a, ge({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				d: "M10,15.625a.623.623,0,0,1-.442-.183l-9-9,.884-.884L10,14.116l8.558-8.558.884.884-9,9A.623.623,0,0,1,10,15.625Z"
			}));

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			Oe.displayName = "NavMinimize";
			const Ee = e => a.a.createElement(v.a, Ce({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				d: "M15.838,16.5a1.377,1.377,0,0,1-1.375,1.375h-11A1.377,1.377,0,0,1,2.088,16.5V5.5A1.377,1.377,0,0,1,3.463,4.125H7.11V2.875H3.463A2.629,2.629,0,0,0,.838,5.5v11a2.629,2.629,0,0,0,2.625,2.625h11A2.629,2.629,0,0,0,17.088,16.5V12.9h-1.25Z"
			}), a.a.createElement("path", {
				d: "M18.5.875h-5v1.25h3.491L8.558,10.558l.884.884,8.433-8.433V6.5h1.25v-5A.625.625,0,0,0,18.5.875Z"
			}));
			Ee.displayName = "NavPopout";
			var je = n("./src/chat/components/OverlayNavButtonGroup/index.m.less"),
				_e = n.n(je);
			var ve = Object(r.b)(() => Object(_.a)({
					containerSize: e => e.container.size,
					inviterName: ae.D,
					isReady: se.g
				}), e => ({
					close: () => e(Object(i.sizeChanged)(be.a.HIDDEN)),
					minimize: () => {
						e(Object(i.sizeChanged)(be.a.MINIMIZED)), e(Object(d.s)())
					},
					popout: () => e(Object(i.popoutOpened)())
				}))(({
					channelId: e,
					containerSize: t,
					dropdownId: n,
					showMenu: s,
					inviterName: r,
					isReady: c,
					minimize: o,
					popout: i,
					toggleChannelNameInput: l
				}) => {
					const d = c && t === be.a.EMBED;
					return a.a.createElement("div", {
						className: _e.a.Wrapper
					}, s && e && a.a.createElement(me, {
						channelId: e,
						dropdownId: n,
						inviterName: r,
						toggleChannelNameInput: l
					}), d && a.a.createElement(a.a.Fragment, null, a.a.createElement(fe.c, {
						className: _e.a.IconButton,
						onClick: i,
						title: h.fbt._("Open chat in new window", null, {
							hk: "3S8f7W"
						})
					}, a.a.createElement(Ee, null)), a.a.createElement(fe.c, {
						className: _e.a.IconButton,
						onClick: o,
						title: h.fbt._("Minimize chat", null, {
							hk: "1gym9X"
						})
					}, a.a.createElement(Oe, null)), a.a.createElement(pe.a, {
						className: _e.a.CloseButton
					})))
				}),
				Ie = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				xe = n("./src/chat/controls/Counter/index.tsx"),
				ye = n("./src/chat/components/RenameGroupInput/index.m.less"),
				Se = n.n(ye);
			const we = E.a.wrapped(e => a.a.createElement("span", {
					className: Object(c.a)({
						[Se.a.visible]: e.isVisible
					}, e.className)
				}, e.children), "InputWrapper", Se.a),
				Ne = E.a.div("InputContent", Se.a),
				Te = E.a.span("InputControls", Se.a),
				Ae = E.a.wrapped(fe.a, "CancelButton", Se.a),
				Me = E.a.wrapped(fe.a, "SaveButton", Se.a);
			class ke extends s.Component {
				constructor() {
					super(...arguments), this.displayName = "RenameGroupInput", this.state = {
						groupName: this.props.name || ""
					}, this.getAvailableCharacters = () => A.e - this.state.groupName.length, this.handleChannelNameInput = e => this.setState({
						groupName: e
					}), this.submitGroupName = () => {
						this.props.onUpdateChannelName(this.state.groupName.trim()), this.props.hideChannelNameInput(), this.props.saveRenamedGroup()
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
						handleChannelNameInput: s,
						submitGroupName: r
					} = this, c = this.getAvailableCharacters();
					return a.a.createElement(we, {
						isVisible: t
					}, a.a.createElement(Ne, null, a.a.createElement(Ie.a, {
						handleChannelNameInput: s,
						placeholder: h.fbt._("Rename group", null, {
							hk: "1mjXbx"
						}),
						withBackground: !0,
						value: n
					}, a.a.createElement(xe.a, {
						count: c
					})), a.a.createElement(Te, null, a.a.createElement(Ae, {
						secondaryNoBorder: !0,
						onClick: e
					}, h.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(Me, {
						primaryNoBorder: !0,
						disabled: c < 0 || c >= A.e,
						onClick: r
					}, h.fbt._("Save", null, {
						hk: "1qAtYt"
					})))))
				}
			}
			var De = Object(r.b)(void 0, e => ({
					onUpdateChannelName: t => e(Object(g.j)(t)),
					saveRenamedGroup: () => e(Object(d.F)())
				}))(ke),
				Pe = n("./src/chat/components/ToastNotification/index.tsx"),
				Re = n("./src/chat/helpers/dom.ts"),
				Le = n("./src/chat/helpers/urls/index.ts");

			function Ue() {
				return (Ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Be = e => a.a.createElement(v.a, Ue({}, e, {
					viewBox: "0 0 20 20"
				}), a.a.createElement("path", {
					d: "M19,9.375H2.509l7.933-7.933L9.558.558l-9,9a.625.625,0,0,0,0,.884l9,9,.884-.884L2.509,10.625H19Z"
				})),
				Fe = n("./src/chat/components/OverlayNav/index.m.less"),
				He = n.n(Fe);
			const Ge = ({
					userName: e
				}) => {
					const t = Object(Le.viewProfileUrl)(e);
					return a.a.createElement("a", {
						onClick: e => e.stopPropagation(),
						target: o.c.BLANK,
						rel: o.b,
						className: He.a.UserProfileTitle,
						href: t
					}, e)
				},
				Ve = Object(_.a)({
					isEmbedded: se.d,
					iconMembers: (e, t) => Object(ae.o)(e, t.channelId),
					isFullSize: se.e
				}),
				We = Object(r.b)(Ve, e => ({
					minimize: () => {
						e(Object(i.sizeChanged)(be.a.MINIMIZED)), e(Object(d.s)())
					},
					toggleSidebar: () => e(Object(l.h)(!0)),
					clickRenameGroup: () => e(Object(d.u)())
				}));
			class ze extends s.Component {
				constructor(e) {
					super(e), this.hideChannelNameInput = () => this.setState({
						isRenameGroupInputVisible: !1
					}), this.toggleChannelNameInput = () => this.setState(e => (e.isRenameGroupInputVisible || this.props.clickRenameGroup(), {
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
							isEmbedded: s,
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
							isRenameGroupInputVisible: f
						},
						hideChannelNameInput: g,
						toggleChannelNameInput: O
					} = this;
					return a.a.createElement("nav", {
						className: Object(c.a)(He.a.Nav, {
							[He.a.isFullSize]: b
						})
					}, a.a.createElement(fe.c, {
						onClick: m,
						className: Object(c.a)(He.a.IconButton, {
							[He.a.isFullSize]: b
						})
					}, a.a.createElement(Be, {
						className: He.a.ArrowLeft
					})), a.a.createElement("span", {
						onClick: s ? Object(Re.b)(r) : void 0,
						className: Object(c.a)(He.a.TitleWrapper, {
							[He.a.embed]: s
						})
					}, p && h && h.firstUser && a.a.createElement(u.a, {
						className: Object(c.a)(He.a.ChatIcon, {
							[He.a.isFullSize]: b
						}),
						userId: h.firstUser.id,
						secondUserId: null === (e = h.secondUser) || void 0 === e ? void 0 : e.id
					}), d === te.a.Direct ? a.a.createElement(Ge, {
						userName: l
					}) : a.a.createElement("span", {
						className: He.a.Title
					}, l), a.a.createElement("span", {
						className: He.a.SubTitle
					}, i)), a.a.createElement(ve, {
						channelId: t,
						toggleChannelNameInput: O,
						showMenu: !!o,
						dropdownId: n
					}), t && l && a.a.createElement(De, {
						channelId: t,
						name: l,
						isVisible: f,
						hideChannelNameInput: g
					}), a.a.createElement(Pe.a, null))
				}
			}
			t.a = We(ze)
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
				listItem: "_2qQcEGZtboU7wa6nmfyOoD",
				ReportLoaderWrapper: "_19m8sEzbvjItitsmTuQ8JP",
				reportLoaderWrapper: "_19m8sEzbvjItitsmTuQ8JP",
				LoadingIcon: "_3dey9NyTU-utAKmWvKM2o5",
				loadingIcon: "_3dey9NyTU-utAKmWvKM2o5"
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
				return j
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
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
			var f = () => a.a.createElement(p.a, null, a.a.createElement(h.a, {
					title: i.fbt._("Fetching messages", null, {
						hk: "2MERJq"
					})
				}), a.a.createElement(b, null, a.a.createElement(m.e, null))),
				g = n("./src/chat/components/Sidebar/index.tsx"),
				O = n("./src/chat/selectors/app.ts");
			var C = ({
					children: e
				}) => {
					const t = Object(o.e)(O.f),
						n = Object(o.e)(O.c);
					return t ? null : n ? e : a.a.createElement(a.a.Fragment, null, a.a.createElement(g.a, null, a.a.createElement("span", {
						style: {
							paddingTop: "45px",
							background: "var(--layout-body)"
						}
					}, a.a.createElement(m.d, null))), a.a.createElement(f, null))
				},
				E = n("./src/chat/components/ThemeProvider/index.tsx");

			function j(e, t) {
				return a.a.createElement(E.a, {
					className: c.a
				}, a.a.createElement(e, null, a.a.createElement(r.d, {
					component: e => a.a.createElement(C, null, a.a.createElement(r.f, {
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
			var s = n("./node_modules/lodash/debounce.js"),
				a = n.n(s),
				r = n("./node_modules/lodash/isEqual.js"),
				c = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/components/Scroller/index.m.less"),
				u = n.n(d);
			class h extends i.a.Component {
				constructor(e) {
					super(e), this.isUserScrolling = !1, this.list = null, this.previousScrollHeight = 0, this.scrollHandlers = [], this._isBatchLoading = !1, this.debounceScrollToBottom = a()(() => this.scrollToBottom(!0), 1, {
						leading: !1,
						trailing: !0
					}), this.debounceScrollToTop = a()(() => this.scrollToTop(!0), 1, {
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
						} = e, s = n > 0;
						s && this.isScrolledToBottom(n) ? (this.debounceScrollToBottom(), e.preventDefault()) : !s && -n > t && (this.debounceScrollToTop(), e.preventDefault())
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
							const s = t && this.isScrolledToTop(1),
								a = !t && this.isScrolledToBottom(1);
							!s && !a || this.isBatchLoading || (this._isBatchLoading = !0, this.previousScrollHeight = e, n())
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
							scrollTop: s
						} = this.list;
						return (e || this.safeScrollPadding()) > n - t - s
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
		"./src/chat/components/Sidebar/ChannelsPanel/index.m.less": function(e, t, n) {
			e.exports = {
				Header: "_2WUlLsFSOnLb33dNA9kf50",
				header: "_2WUlLsFSOnLb33dNA9kf50",
				Body: "_1ybOoJLXdiKZz_P7hQ0NrO",
				body: "_1ybOoJLXdiKZz_P7hQ0NrO",
				CreateChannelWrapper: "_3fm6B23q_UaNACabKI4LsU",
				createChannelWrapper: "_3fm6B23q_UaNACabKI4LsU"
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
				hidden: "_2LCL99h1LFi6gbdVp7LCYi"
			}
		},
		"./src/chat/components/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Ne
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/chat/actions/channel.ts"),
				d = n("./node_modules/lodash/values.js"),
				u = n.n(d),
				h = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				m = n("./src/chat/components/ChatIcon/index.tsx"),
				p = n("./src/chat/constants/messages.ts"),
				b = n("./src/chat/helpers/linkParser/index.ts"),
				f = n("./src/chat/models/Message/index.ts"),
				g = n("./src/chat/components/Message/Preview.m.less"),
				O = n.n(g);
			const C = e => {
					const {
						message: t,
						isInvited: n
					} = e, s = (({
						currentUserId: e,
						isGroup: t,
						message: n
					}) => t && n && n.sender ? e === n.sender.userId ? o.fbt._("You:", null, {
						hk: "wP43r"
					}) : `${n.sender.nickname}:` : "")(e);
					if ((null == t ? void 0 : t.messageType) === p.d.SYSTEM && (null == t ? void 0 : t.customType) === f.a.AWARDING) return [s, " ", o.fbt._("Sent a note with an award", null, {
						hk: "4FSnF0"
					})];
					if (n) return [o.fbt._("Wants to message you", null, {
						hk: "3CbciS"
					})];
					if (!t) return [];
					switch (t.messageData.type) {
						case p.c.TEXT: {
							const {
								value: e
							} = t.messageData;
							return [s, " ", Object(b.b)(e) ? o.fbt._("Shared a link", null, {
								hk: "4bNVW7"
							}) : e]
						}
						case p.c.POST:
							return [s, " ", o.fbt._("Shared a post", null, {
								hk: "1hd8l1"
							}), " ", t.messageData.subreddit];
						case p.c.COMMENT:
							return [s, " ", o.fbt._("Shared a comment", null, {
								hk: "1cCjoi"
							}), " ", t.messageData.subreddit];
						case p.c.EMBED:
							return [s, " ", o.fbt._("Shared a link", null, {
								hk: "4bNVW7"
							}), " ", t.messageData.value];
						case p.c.SUBREDDIT:
							return [s, " ", o.fbt._("Shared a community", null, {
								hk: "t78ZE"
							}), " ", t.messageData.subreddit];
						case p.c.SNOOMOJI:
							return [s, " ", o.fbt._("Sent a Snoomoji", null, {
								hk: "4hD30K"
							})];
						case p.c.GIF:
							return [s, " ", o.fbt._("Sent a Gif", null, {
								hk: "2DVhUf"
							})];
						default:
							return []
					}
				},
				E = i.a.wrapped(e => a.a.createElement("sub", {
					className: Object(c.a)(e.className, {
						[O.a.active]: e.isActive,
						[O.a.unread]: e.isInvited || e.isUnread
					})
				}, C(e)), "MessagePreview", O.a);
			var j = n("./src/chat/constants/channels.ts"),
				_ = n("./src/chat/controls/Counter/index.tsx"),
				v = n("./src/chat/helpers/chatSelector.ts"),
				I = n("./src/chat/helpers/urls/index.ts"),
				x = n("./src/chat/controls/Svg/index.tsx");
			var y = e => a.a.createElement(x.a, {
					className: e.className,
					disable: !0,
					viewBox: "0 0 9 12"
				}, a.a.createElement("g", {
					transform: "translate(-321.000000, -286.000000)"
				}, a.a.createElement("path", {
					d: "M328.379326,295.820899 L329.259195,297.344876 L329.259195,297.344876 C329.33686,297.479395 329.29077,297.651405 329.15625,297.72907 L329.15625,297.72907 C329.02173,297.806735 328.84972,297.760645 328.772055,297.626126 L322.303305,286.421922 L322.303305,286.421922 C322.22564,286.287402 322.27173,286.115392 322.40625,286.037727 L322.40625,286.037727 L322.40625,286.037727 C322.54077,285.960062 322.71278,286.006152 322.790445,286.140672 L323.811767,287.909655 C324.114951,287.754406 324.444225,287.640531 324.791552,287.575791 C324.78955,287.555022 324.784974,287.534806 324.784974,287.513206 C324.784974,287.131053 325.105006,286.820899 325.49997,286.820899 C325.894933,286.820899 326.214965,287.131053 326.214965,287.513206 C326.214965,287.534806 326.210389,287.555022 326.208387,287.575791 C327.841151,287.88013 329.074947,289.270283 329.074947,290.94013 L329.074947,293.333299 C329.074947,294.039453 329.364664,294.716806 329.880318,295.216099 L329.894618,295.229945 C330.119699,295.447883 329.960398,295.820899 329.641796,295.820899 L328.379326,295.820899 Z M326.996393,295.820899 L321.358143,295.820899 C321.039827,295.820899 320.88024,295.447883 321.105321,295.229945 L321.119621,295.216099 C321.635276,294.716806 321.924992,294.039453 321.924992,293.333299 L321.924992,290.94013 C321.924992,290.051737 322.274213,289.242509 322.846942,288.633839 L326.996393,295.820899 Z M325.78125,297.508399 C325.151952,297.508399 324.611984,297.045274 324.375,296.383399 L327.1875,296.383399 C326.950516,297.045274 326.410548,297.508399 325.78125,297.508399 Z"
				}))),
				S = n("./src/chat/selectors/channels.ts"),
				w = n("./src/chat/selectors/contacts.ts"),
				N = n("./src/chat/components/ChatListItem/index.m.less"),
				T = n.n(N);
			const A = i.a.wrapped(m.a, "ChatIcon", T.a),
				M = i.a.div("ItemTitle", T.a),
				k = i.a.div("ItemControls", T.a),
				D = i.a.span("ChannelName", T.a),
				P = i.a.div("Description", T.a),
				R = i.a.wrapped(e => a.a.createElement("h4", {
					className: Object(c.a)(e.className, {
						[T.a.active]: e.active,
						[T.a.unread]: e.unread
					})
				}, e.children), "ItemTitleName", T.a),
				L = Object(v.a)({
					inviterContact: (e, t) => {
						const n = e.channels.models[t.channelId];
						return Object(w.d)(e, n)
					},
					iconMembers: (e, t) => Object(S.o)(e, t.channelId),
					channelName: (e, t) => Object(S.i)(e, t.channelId)
				});
			var U = Object(r.b)(L)(i.a.wrapped(e => {
					var t;
					const {
						className: n,
						channelId: s,
						currentUserId: r,
						isGroup: o,
						isSelected: i,
						channelState: l,
						message: d,
						muted: u,
						unread: m,
						mentionCount: p,
						iconMembers: b,
						channelName: f
					} = e, g = l === j.b.INVITED, O = g ? Object(I.channelAction)(s, j.a.VIEW_INVITE) : Object(I.channelUrl)(s), C = Object(I.getRedirectURL)(O);
					return a.a.createElement(h.a, {
						to: C,
						className: Object(c.a)(n, {
							[T.a.selected]: i,
							[T.a.unread]: m
						})
					}, u && a.a.createElement(k, null, a.a.createElement(y, null)), b && b.firstUser && a.a.createElement(A, {
						userId: b.firstUser.id,
						secondUserId: null === (t = b.secondUser) || void 0 === t ? void 0 : t.id
					}), a.a.createElement(M, null, a.a.createElement(R, {
						unread: m || g,
						active: i
					}, a.a.createElement(D, null, f)), a.a.createElement(P, null, a.a.createElement(E, {
						currentUserId: r,
						isGroup: o,
						isInvited: g,
						isUnread: m,
						isActive: i,
						message: d
					}), !!p && a.a.createElement(_.b, {
						count: p
					}))))
				}, "ChatListItem", T.a)),
				B = n("./src/chat/components/Sidebar/SidebarDivider/index.m.less"),
				F = n.n(B);
			const H = i.a.div("Divider", F.a),
				G = e => a.a.createElement(H, null, e.children);
			var V = n("./src/chat/actions/tracking.ts"),
				W = n("./src/chat/controls/InviteExpander/index.m.less"),
				z = n.n(W),
				K = n("./src/chat/controls/TextButton.tsx");
			const q = i.a.div("ButtonContainer", z.a),
				Z = i.a.div("LoadingIndicator", z.a);
			class Q extends a.a.Component {
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
						hasMoreInvitedChannels: s,
						inviteListExpanded: a
					} = this.props;
					a ? s && !n && a && t() : e(), this.props.onTrackExpandToggle(!0)
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
					return t ? a.a.createElement(Z, {
						role: "progressbar"
					}, o.fbt._("Loading channels...", null, {
						hk: "4gUIDq"
					})) : a.a.createElement(q, {
						className: e
					}, a.a.createElement(K.a, {
						onClick: this.onExpand,
						hidden: n && !s
					}, o.fbt._("Show more", null, {
						hk: "3aeUi6"
					})), a.a.createElement(K.a, {
						onClick: this.onCollapse,
						hidden: !n
					}, o.fbt._("Collapse", null, {
						hk: "aLyRg"
					})))
				}
			}
			var J = Object(r.b)(null, e => ({
					onTrackExpandToggle: t => e(t ? Object(V.n)() : Object(V.i)()),
					expandInviteList: () => e(Object(l.D)()),
					collapseInviteList: () => e(Object(l.z)()),
					fetchInvitedChannels: () => e(Object(l.F)())
				}))(Q),
				Y = n("./src/chat/models/Channel/index.ts"),
				X = n("./src/chat/selectors/user.ts");
			const $ = Object(v.a)({
				currentUserId: X.a,
				invitedChannels: S.C,
				selectedChannelId: e => Object(S.w)(e, "channelId"),
				fetchingInvitedChannels: S.c,
				inviteListExpanded: S.B,
				hasMoreInvitedChannels: S.z
			});
			var ee = Object(r.b)($)(e => {
					const {
						currentUserId: t,
						fetchingInvitedChannels: n,
						hasMoreInvitedChannels: s,
						invitedChannels: r,
						inviteListExpanded: c,
						selectedChannelId: i
					} = e;
					let l = r.slice(0, 2);
					return c && (l = r), r && r.length ? a.a.createElement(a.a.Fragment, null, a.a.createElement(G, null, o.fbt._("Requests", null, {
						hk: "eDJtL"
					})), u()(l).map((e, n) => {
						const {
							channelId: s,
							lastMessage: r,
							channelState: c,
							unreadMessageCount: o,
							unreadMentionCount: l
						} = e;
						return a.a.createElement(U, {
							key: s,
							channelId: s,
							channelState: c,
							isSelected: s === i,
							isGroup: e.type === Y.a.Group,
							message: r,
							unread: !!o,
							mentionCount: l,
							currentUserId: t
						})
					}), r.length > 2 ? a.a.createElement(J, {
						fetchingInvitedChannels: n,
						hasMoreInvitedChannels: s,
						inviteListExpanded: c
					}) : null) : null
				}),
				te = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				ne = n("./src/chat/components/BasicJoined/index.m.less"),
				se = n.n(ne);
			const ae = i.a.p("Text", se.a),
				re = Object(v.a)({
					currentUserId: X.a,
					fetchingJoinedChannels: S.d,
					hasMoreJoinedChannels: S.A,
					joinedChannels: S.L,
					selectedChannelId: e => Object(S.w)(e, "channelId"),
					hasInvitedChannels: S.y
				});
			var ce = Object(r.b)(re, e => ({
					fetchJoinedChannels: () => e(Object(l.G)())
				}))(e => {
					const {
						className: t,
						currentUserId: n,
						fetchingJoinedChannels: s,
						joinedChannels: r,
						selectedChannelId: c,
						hasInvitedChannels: i
					} = e;
					return a.a.createElement("div", {
						className: t
					}, i && a.a.createElement(G, null, o.fbt._("Chats", null, {
						hk: "Bzl0R"
					})), (!r || !r.length) && a.a.createElement(ae, null, o.fbt._("All the direct chats that you're in will show up here", null, {
						hk: "4A1UXC"
					})), r.map(e => {
						const {
							channelId: t,
							lastMessage: s,
							channelState: r,
							unreadMessageCount: o,
							unreadMentionCount: i
						} = e;
						return a.a.createElement(U, {
							key: t,
							channelId: t,
							channelState: r,
							isSelected: t === c,
							isGroup: e.type === Y.a.Group,
							message: s,
							unread: !!o,
							mentionCount: i,
							currentUserId: n
						})
					}), s && a.a.createElement(te.d, null))
				}),
				oe = n("./src/chat/components/Scroller/index.tsx"),
				ie = n("./node_modules/react-router-redux/es/index.js"),
				le = n("./src/chat/icons/svgs/ChatNew/index.tsx"),
				de = n("./src/chat/components/Sidebar/CreateChannel/index.m.less"),
				ue = n.n(de);
			var he = Object(r.b)(null, e => ({
					createChannel: () => {
						const t = Object(I.getRedirectURL)(Object(I.channelUrl)("create"));
						e(Object(ie.b)(t)), e(Object(V.k)())
					}
				}))(e => a.a.createElement("button", {
					className: ue.a.Button,
					onClick: e.createChannel,
					title: o.fbt._("Start a new chat", null, {
						hk: "3C4ek3"
					}),
					tabIndex: 0
				}, a.a.createElement(le.a, {
					className: ue.a.ChatNew
				}))),
				me = n("./src/chat/components/Sidebar/ChannelsPanel/index.m.less"),
				pe = n.n(me);
			const be = i.a.div("Header", pe.a),
				fe = i.a.div("Body", pe.a),
				ge = i.a.div("CreateChannelWrapper", pe.a),
				Oe = Object(v.a)({
					fetchingJoinedChannels: S.d,
					hasMoreJoinedChannels: S.A
				});
			var Ce = Object(r.b)(Oe, e => ({
					fetchJoinedChannels: () => e(Object(l.G)())
				}))(e => {
					const {
						fetchingJoinedChannels: t,
						fetchJoinedChannels: n,
						hasMoreJoinedChannels: s
					} = e;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(be, null, o.fbt._("Chat", null, {
						hk: "2by6VV"
					}), a.a.createElement(_.b, null), a.a.createElement(ge, null, a.a.createElement(he, null))), a.a.createElement(oe.b, {
						loadMoreRows: () => {
							!t && s && n()
						}
					}, a.a.createElement(fe, null, a.a.createElement(ee, null), a.a.createElement(ce, null))))
				}),
				Ee = n("./src/higherOrderComponents/makeAsync.tsx"),
				je = n("./src/lib/loadWithRetries/index.ts");
			const _e = () => null;
			var ve = Object(Ee.a)({
					ErrorComponent: _e,
					getComponent: () => Object(je.a)(() => n.e("ThemePanel").then(n.bind(null, "./src/chat/components/Sidebar/ThemePanel/index.tsx"))).then(e => e.default),
					LoadingComponent: _e
				}),
				Ie = n("./src/chat/reducers/sidebar/sideBarAppearance/index.ts"),
				xe = n("./src/chat/selectors/app.ts"),
				ye = n("./src/chat/selectors/sidebar.ts"),
				Se = n("./src/chat/components/Sidebar/index.m.less"),
				we = n.n(Se);
			const Ne = ({
					children: e
				}) => {
					const t = Object(r.e)(ye.b),
						n = Object(r.e)(xe.e),
						s = Object(r.e)(xe.a);
					return a.a.createElement("div", {
						className: Object(c.a)(we.a.Wrapper, {
							[we.a.hidden]: !t,
							[we.a.embed]: s,
							[we.a.isFullSize]: null == n || n
						})
					}, e)
				},
				Te = a.a.memo((function(e) {
					const t = Object(r.e)(ye.a);
					return a.a.createElement(Ne, e, (() => t === Ie.a.CHANNELS ? a.a.createElement(Ce, null) : t === Ie.a.THEMES ? a.a.createElement(ve, null) : void 0)())
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
				return a
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			}));
			var s, a, r, c = n("./node_modules/react/index.js"),
				o = n.n(c),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.m.less"),
				d = n.n(l);
			! function(e) {
				e.XXS = "w30", e.XS = "w40", e.S = "w50", e.M = "w60", e.L = "w70", e.XL = "w80", e.XXL = "w90"
			}(s || (s = {})),
			function(e) {
				e[e.XXS = 70] = "XXS", e[e.XS = 85] = "XS", e[e.S = 110] = "S", e[e.M = 165] = "M", e[e.L = 200] = "L"
			}(a || (a = {})),
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
					width: s.S
				}), o.a.createElement(u, {
					width: s.XL
				}), o.a.createElement(u, {
					width: s.XXS
				}), o.a.createElement(u, {
					width: s.S
				}), o.a.createElement(u, {
					width: s.L
				}), o.a.createElement(u, {
					width: s.XXS
				})),
				p = () => o.a.createElement("ol", null, o.a.createElement(h, {
					width: s.L
				}), o.a.createElement(h, {
					width: s.XL
				}), o.a.createElement(h, {
					width: s.S
				}), o.a.createElement(h, {
					width: s.M
				}), o.a.createElement(h, {
					width: s.L
				}), o.a.createElement(h, {
					width: s.XL
				})),
				b = ({
					height: e
				}) => o.a.createElement("div", {
					className: d.a.gifPlaceholder,
					style: {
						height: `${e}px`
					}
				}),
				f = e => o.a.createElement("div", {
					className: d.a.GifSkeletonPlaceholderWrapper
				}, e === r.FIRST ? o.a.createElement(o.a.Fragment, null, o.a.createElement(b, {
					height: a.S
				}), o.a.createElement(b, {
					height: a.XS
				}), o.a.createElement(b, {
					height: a.M
				})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(b, {
					height: a.M
				}), o.a.createElement(b, {
					height: a.XS
				}), o.a.createElement(b, {
					height: a.S
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/icons/Snoo/index.tsx"),
				o = n("./src/chat/components/Snoomoji/index.m.less"),
				i = n.n(o);
			const l = r.a.img("SnooImg", i.a);
			t.a = e => {
				const {
					className: t,
					iconName: n
				} = e, s = n && c.a[n] || c.a.smile;
				return a.a.createElement(l, {
					className: t,
					src: s
				})
			}
		},
		"./src/chat/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/index.tsx");
			const i = Object(c.a)(e => e.themes.current, e => e.themes.chatTheme, (e, t) => ({
				theme: {
					...e,
					...t
				}
			}));
			t.a = Object(r.b)(i)(e => {
				const {
					className: t,
					children: n,
					theme: s
				} = e;
				return a.a.createElement(o.e, {
					className: t,
					isRootOrUniqueClassName: o.c,
					theme: s
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
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
				f = n.n(b);
			const g = [d.a.ConnectionClosed, d.a.ConnectionPending],
				O = [d.a.SomethingWentWrong],
				C = e => g.includes(e),
				E = e => O.includes(e),
				j = i.a.wrapped(e => r.a.createElement("span", {
					className: Object(o.a)(e.className, {
						[f.a.pending]: C(e.toast),
						[f.a.error]: E(e.toast)
					}),
					style: {
						height: e.toast ? "2.5em" : "0"
					}
				}, e.children), "Wrapper", f.a),
				_ = i.a.span("Text", f.a),
				v = i.a.img("SnooImg", f.a);
			v.displayName = "SnooImg";
			const I = i.a.button("Button", f.a);
			I.displayName = "Button";
			const x = i.a.wrapped(h.a, "RefreshIcon", f.a),
				y = Object(u.a)({
					toast: e => e.toast
				}),
				S = Object(c.b)(y),
				w = r.a.createElement(v, {
					src: m
				}),
				N = r.a.createElement(v, {
					src: p
				}),
				T = ({
					className: e,
					toast: t
				}) => r.a.createElement(j, {
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
							return s.fbt._("Found the internet!", null, {
								hk: "3jLr8W"
							});
						case d.a.ConnectionPending:
							return s.fbt._("Looking for the internet...", null, {
								hk: "1JPRuh"
							});
						case d.a.ConnectionClosed:
							return s.fbt._("Hmm, no internet?", null, {
								hk: "134peM"
							});
						case d.a.SomethingWentWrong:
							return s.fbt._("Oops! Something went wrong", null, {
								hk: "4CGwU7"
							});
						default:
							return null
					}
				})(t)), t && (e => e === d.a.ConnectionClosed ? r.a.createElement(I, {
					onClick: l.g
				}, r.a.createElement(x, null)) : null)(t));
			T.displayName = "ToastNotification";
			t.a = S(T)
		},
		"./src/chat/components/TypingIndicator/index.m.less": function(e, t, n) {
			e.exports = {
				IndicatorText: "_9ILBgizV58pKhJFWM-mPy",
				indicatorText: "_9ILBgizV58pKhJFWM-mPy"
			}
		},
		"./src/chat/constants/batchSizes.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e[e.Channels = 10] = "Channels", e[e.InitChannels = 50] = "InitChannels", e[e.Messages = 40] = "Messages"
				}(s || (s = {}))
		},
		"./src/chat/constants/dropdown.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "c", (function() {
					return C
				})), n.d(t, "d", (function() {
					return E
				})), n.d(t, "a", (function() {
					return j
				})),
				function(e) {
					e.AddToGroup = "addToGroup", e.Block = "block", e.ChangeTheme = "changeTheme", e.Hide = "hide", e.HideGroup = "hideGroup", e.Kick = "kick", e.Leave = "leave", e.LeaveRoom = "leaveRoom", e.MuteBadging = "muteBadging", e.MuteNotifs = "muteNotifs", e.Profile = "profile", e.Report = "report", e.RenameGroup = "renameGroup", e.UnmuteBadging = "unmuteBadging", e.UnmuteNotifs = "unmuteNotifs", e.ViewMembers = "members"
				}(s || (s = {}));
			const {
				AddToGroup: a,
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
				ViewMembers: f,
				ChangeTheme: g
			} = s, O = [d, p, u, b], C = {
				directChannel: [h, g, r, ...O, c],
				groupChannel: [a, m, g, f, ...O, o, l],
				members: [r, i]
			}, E = {
				muteBadging: (e, t) => !(e === d && t),
				unmuteBadging: (e, t) => !(e === p && !t),
				muteNotifs: (e, t) => !(e === u && t),
				unmuteNotifs: (e, t) => !(e === b && !t),
				hideChannel: (e, t) => !((e === c || e === o) && t),
				changeTheme: (e, t) => !(e === g && !t)
			}, j = "dropdown-container"
		},
		"./src/chat/constants/keys.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "g", (function() {
				return a
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
			const s = "Backspace",
				a = "Enter",
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
				return s
			}));
			const s = "tooltip-container"
		},
		"./src/chat/constants/sidebar.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e[e.SubredditChannels = 0] = "SubredditChannels", e[e.DirectChannels = 1] = "DirectChannels"
				}(s || (s = {}))
		},
		"./src/chat/constants/toast.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.ConnectionClosed = "connectionClosed", e.ConnectionPending = "connectionPending", e.ConnectionOpen = "connectionOpen", e.SomethingWentWrong = "somethingWentWrong"
				}(s || (s = {}))
		},
		"./src/chat/constants/users.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Block = "block", e.Kick = "kick", e.Report = "report"
				}(s || (s = {}))
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
				return j
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "d", (function() {
				return x
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/opener/index.ts"),
				l = n("./src/chat/controls/Svg/index.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
				f = n.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = o.a.a("Button", f.a),
				C = o.a.button("Button", f.a),
				E = o.a.button("MessageIconButton", f.a),
				j = e => {
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
					return e.href ? r.a.createElement(O, {
						href: e.href,
						target: i.c.BLANK,
						rel: i.b,
						title: e.title,
						className: t,
						tabIndex: 0,
						style: n
					}, e.children) : r.a.createElement(C, {
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
				_ = o.a.wrapped(j, "IconButton", f.a),
				v = e => r.a.createElement(E, g({}, e, {
					title: s.fbt._("Report message", null, {
						hk: "2XKeNq"
					})
				}), r.a.createElement(u, null)),
				I = e => r.a.createElement(E, g({}, e, {
					title: s.fbt._("Delete message", null, {
						hk: "Z4Zm0"
					})
				}), r.a.createElement(p.a, null)),
				x = e => r.a.createElement(E, g({}, e, {
					title: s.fbt._("Kick user", null, {
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/controls/ChannelNameInput/index.m.less"),
				o = n.n(c);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = r.a.input("Input", o.a),
				d = r.a.wrapped(e => a.a.createElement("label", {
					className: e.className
				}, a.a.createElement(l, {
					placeholder: e.placeholder,
					onChange: e.onChange,
					value: e.value
				}), e.children), "NameInput", o.a);
			class u extends a.a.Component {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = e.currentTarget.value;
						this.props.handleChannelNameInput(t)
					}
				}
				render() {
					return a.a.createElement(d, i({
						withBackground: this.props.withBackground,
						onChange: this.onChange
					}, this.props), this.props.children)
				}
			}
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/selectors/unreadCounter.ts"),
				l = n("./src/chat/controls/Counter/index.m.less"),
				d = n.n(l);
			const u = e => a.a.createElement("span", {
					className: e.className
				}, e.count ? e.count : ""),
				h = o.a.wrapped(u, "Counter", d.a),
				m = ({
					className: e,
					count: t
				}) => a.a.createElement(h, {
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
					const t = Object(r.e)(i.c);
					return (null == t ? void 0 : t.basicChannelCount.unread) ? a.a.createElement(p, {
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.tsx"),
				i = n("./src/chat/controls/Dropdown/Row.m.less"),
				l = n.n(i);
			const d = c.a.div("IconWrapper", l.a),
				u = c.a.span("Text", l.a);
			t.a = c.a.wrapped(e => a.a.createElement(o.a, {
				id: e.id,
				className: Object(r.a)(e.className, {
					[l.a.selected]: e.isSelected
				}),
				onClick: e.onClick ? e.onClick : () => {},
				role: "button"
			}, e.children && a.a.createElement(d, null, e.children), a.a.createElement(u, null, e.displayText)), "Component", l.a)
		},
		"./src/chat/controls/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_1W4rx6zj3WfNob8r3IC3NP",
				component: "_1W4rx6zj3WfNob8r3IC3NP"
			}
		},
		"./src/chat/controls/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/actions/tooltip.ts"),
				i = n("./src/chat/controls/Dropdown/index.m.less"),
				l = n.n(i);
			class d extends s.Component {
				constructor(e) {
					super(e), this.elem = a.a.createRef(), this.handleClick = this.handleClick.bind(this), this.handleClickInside = this.handleClickInside.bind(this), this.handleClickOutside = this.handleClickOutside.bind(this)
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
					return a.a.createElement("div", {
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
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
					isPreview: o,
					height: i = 200,
					title: d = ""
				}) => {
					const [u, h] = Object(s.useState)(!1);
					return Object(s.useEffect)(() => {
						let e = !0;
						return new Promise(e => {
							const n = new Image;
							n.onload = () => e(), n.src = t
						}).then(() => e && h(!0)), () => {
							e = !1
						}
					}), a.a.createElement("div", {
						className: e,
						style: {
							height: u || o ? "auto" : "200px",
							width: u || o ? "auto" : "250px",
							maxHeight: "200px"
						}
					}, u ? a.a.createElement(l, {
						onClick: () => n && n(),
						src: t,
						title: d,
						style: {
							height: o ? `${+i*(r||.75)}px` : "auto",
							maxHeight: "200px"
						}
					}) : a.a.createElement(c.a, {
						height: o ? +i * (r || .75) : 200
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/selectors/app.ts"),
				l = n("./src/chat/controls/Overlay/index.m.less"),
				d = n.n(l);
			const u = o.a.div("Content", d.a),
				h = o.a.wrapped(e => {
					const t = e.form ? "form" : "div",
						[n, s, o] = a.a.Children.toArray(e.children),
						l = {
							className: e.className,
							onSubmit: e.onSubmit
						},
						h = Object(r.e)(i.e),
						m = a.a.createElement(a.a.Fragment, null, n, e.innerContent ? s : a.a.createElement(u, {
							className: Object(c.a)(d.a.Content, {
								[d.a.isFullSize]: h
							})
						}, s), o);
					return a.a.createElement(t, l, m)
				}, "Overlay", d.a);
			h.displayName = "Overlay", t.a = h
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
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
						active: s,
						hover: c
					} = e;
				return a.a.createElement("svg", {
					className: Object(r.a)(e.className, {
						[i.a.disable]: n,
						[i.a.active]: s,
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/TextButton.m.less"),
				i = n.n(o);
			const l = c.a.wrapped(e => a.a.createElement("button", {
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Title/index.m.less"),
				i = n.n(o);
			const l = c.a.wrapped(({
				bold: e,
				children: t,
				className: n
			}) => a.a.createElement("h4", {
				className: Object(r.a)({
					[i.a.bold]: e
				}, n)
			}, t), "Title", i.a)
		},
		"./src/chat/controls/TooltipHooked/TooltipConfig.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = {
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 3]
						}
					}, {
						name: "arrow",
						options: {
							padding: 5
						}
					}, {
						name: "preventOverflow",
						options: {
							altAxis: !0
						}
					}, {
						name: "flip",
						options: {
							fallbackPlacements: []
						}
					}]
				},
				a = e => ({
					placement: e ? "right" : "left",
					...s,
					modifiers: [...s.modifiers, {
						name: "preventOverflow",
						options: {
							padding: e ? {
								right: 13
							} : 0
						}
					}]
				}),
				r = () => ({
					placement: "top",
					...s,
					modifiers: [...s.modifiers, {
						name: "flip",
						options: {
							fallbackPlacements: ["left"]
						}
					}]
				}),
				c = e => ({
					placement: e ? "left" : "right",
					...s
				}),
				o = () => ({
					placement: "bottom-start",
					...s,
					modifiers: [...s.modifiers, {
						name: "preventOverflow",
						options: {
							padding: {
								right: 100
							}
						}
					}]
				})
		},
		"./src/chat/controls/TooltipHooked/TooltipHooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_1COswbLUVMVjnhF9iZHqQ4",
				tooltip: "AxFFdvMbo2xXr6OCphBiA",
				visible: "_3m3jKYhbht7XVpVtCUwaSo"
			}
		},
		"./src/chat/controls/TooltipHooked/TooltipHooked.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/chat/controls/TooltipHooked/TooltipHooked.m.less"),
				o = n.n(c);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.default = a.a.memo((function({
				visible: e,
				...t
			}) {
				const [n, c] = Object(s.useState)(e);
				return Object(s.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, c(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), c(!1)
					}
				}, [e]), e ? t.styled ? a.a.createElement("div", i({
					className: Object(r.a)(o.a.tooltip, {
						[o.a.visible]: n || t.isInstant
					})
				}, t.popperProps, {
					onMouseEnter: () => t.isCloseOnHover && t.hide()
				}), t.children, n && !t.noArrow && a.a.createElement("div", i({
					className: o.a.arrow
				}, t.arrowProps))) : a.a.createElement("div", t.popperProps, t.children) : null
			}))
		},
		"./src/chat/customMiddleware/iframeDispatcher.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/once.js"),
				a = n.n(s),
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
				f = n("./src/chat/selectors/promos.ts"),
				g = n("./src/chat/tracking/sendEvent.ts"),
				O = n("./src/telemetry/models/Event.ts"),
				C = n("./src/chat/tracking/fields/chat.ts"),
				E = n("./src/chat/tracking/fields/common.ts");
			var j;
			! function(e) {
				e.Navigate = "navigate.chat", e.Websocket = "websocket.chat", e.Expand = "expand.chat", e.UnreadCount = "unreadCount.chat"
			}(j || (j = {}));
			const _ = e => t => {
					const n = (e => {
						try {
							return "object" == typeof e.data ? e.data : JSON.parse(e.data)
						} catch (t) {
							return
						}
					})(t);
					if (n) switch (n.type) {
						case j.Navigate: {
							const t = Object(c.parse)(n.data.href).pathname || b.rootUrl,
								s = Object(b.getRedirectURL)(t);
							e.dispatch(Object(r.b)(s)), e.dispatch(Object(d.sizeChanged)(h.a.EMBED));
							break
						}
						case j.Websocket:
							e.dispatch(Object(u.b)());
							break;
						case j.Expand: {
							const t = e.getState();
							e.dispatch(Object(d.sizeChanged)(h.a.EMBED));
							const s = t.platform.currentPage;
							s && s.meta && s.meta.name === o.Jb.CHAT_MINIMIZE && e.dispatch(Object(l.O)());
							const {
								action: a,
								noun: r,
								source: c
							} = n.data.telemetry;
							((e, t, n, s) => {
								Object(g.a)({
									noun: t || "chat",
									source: n || O.b.Nav,
									action: s || O.a.Click,
									chat: {
										...Object(C.g)(e),
										...Object(C.u)(e),
										...Object(C.q)(e),
										...Object(C.z)(e),
										...Object(C.A)(e)
									},
									...Object(E.a)(e)
								})
							})(t, r, c, a);
							break
						}
					}
				},
				v = a()(e => {
					window.addEventListener("message", _(e)), window.navigator.serviceWorker.addEventListener("message", _(e))
				});
			t.a = e => "undefined" == typeof window ? m.a : (window.addEventListener("load", () => {
				v(e)
			}), t => n => {
				switch (n.type) {
					case u.a: {
						const t = Object(f.b)(e.getState()),
							s = {
								...n.payload
							},
							{
								unread: a,
								count: r
							} = Object(p.a)(s, t);
						Object(i.a)({
							type: j.UnreadCount,
							data: {
								unread: a,
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
			var s = n("./src/lib/cache/index.ts"),
				a = n("./src/lib/constants/index.ts"),
				r = n("./src/chat/actions/sidebar.ts"),
				c = n("./src/chat/customMiddleware/noop.ts");
			let o;
			const i = e => {
				const t = e.user.account && e.user.account.id;
				return o = Object(s.c)(a.o.CHAT, a.w.CHAT_LAST_SELECTED_CHANNEL_ID_KEY, t || "unknown"), Object(s.b)(o)
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
				return o = Object(s.c)(a.o.CHAT, a.w.CHAT_LAST_SELECTED_CHANNEL_ID_KEY, i), e => t => {
					const n = e(t);
					switch (t.type) {
						case r.a:
							Object(s.d)(o, t.payload.channelId, a.nb)
					}
					return n
				}
			}
		},
		"./src/chat/customMiddleware/loggedOutPreferencesSync.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/pick.js"),
				a = n.n(s),
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
					s = new Date;
				s.setFullYear(s.getFullYear() + 2), l.a.set(u, btoa(JSON.stringify(n)), Object(d.a)(2))
			}
			const m = new Set([r.GLOBAL_THEME_CHANGED]);
			t.a = e => t => n => {
				const s = t(n);
				if (m.has(n.type)) {
					const t = e.getState().user;
					h({
						prefs: a()(t.prefs, ["layout", "globalTheme", "subscriptionsPinned"])
					})
				}
				return s
			}
		},
		"./src/chat/customMiddleware/sendbirdToken.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/defer.js"),
				a = n.n(s),
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
				f = n("./src/chat/customMiddleware/noop.ts"),
				g = n("./src/chat/selectors/platform.ts"),
				O = n("./src/chat/selectors/sendbird.ts");
			const C = (e, t) => {
				const n = t && t.type === o.SIZE_CHANGED ? t.payload : e.container.size,
					s = n === p.a.MINIMIZED || n === p.a.HIDDEN,
					a = t && t.type === l.a ? t.payload && t.payload.routeMatch && t.payload.routeMatch.route.meta.name === r.Jb.CHAT_MINIMIZE : e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name === r.Jb.CHAT_MINIMIZE;
				return !s && a
			};
			t.a = e => {
				if ("undefined" == typeof window) return f.a;
				let t;
				const n = () => {
					const {
						session: n
					} = e.getState().sendbird;
					n.expires && n.active ? (n => {
						const s = new Date,
							a = new Date(n.expires || 0),
							r = Math.floor(.9 * (a.getTime() - s.getTime()));
						t = setTimeout(() => {
							e.dispatch(Object(d.m)())
						}, r)
					})(n) : a()(() => e.dispatch(Object(d.m)()))
				};
				let s;
				Object(g.a)(e.getState()) === r.Jb.CHAT_MINIMIZE ? a()(async () => {
					C(e.getState()) ? n() : (await e.dispatch(Object(d.m)(!1)), e.getState().sendbird.session.token && await e.dispatch(Object(i.b)()))
				}) : n();
				return i => f => {
					const g = e.getState(),
						E = Object(O.a)(g) === b.b.Closed,
						j = Object(O.e)(g);
					switch (f.type) {
						case o.SIZE_CHANGED: {
							if (!f.payload) break;
							const t = f.payload !== p.a.MINIMIZED && f.payload !== p.a.HIDDEN;
							t && (clearTimeout(s), s = null), E && t && !j && n(), !j || f.payload !== p.a.HIDDEN && f.payload !== p.a.MINIMIZED || (s = setTimeout(() => {
								e.dispatch(Object(h.f)())
							}, 10 * r.ib));
							break
						}
						case l.a: {
							const t = C(g, f);
							E && t ? n() : t && e.dispatch(Object(c.O)());
							break
						}
						case d.h:
							if (!f.payload) break;
							if (!f.payload.active) break;
							a()(async () => {
								if (await e.dispatch(Object(u.d)()), f.payload && f.payload.token) {
									const {
										token: t
									} = f.payload;
									await e.dispatch(Object(h.e)(t))
								}
							});
							break;
						case m.b:
							e.dispatch(Object(h.f)()), clearTimeout(t), clearTimeout(s), t = null, s = null
					}
					return i(f)
				}
			}
		},
		"./src/chat/customMiddleware/title.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/chat/actions/message/unreadCount.ts"),
				a = n("./src/chat/customMiddleware/noop.ts"),
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
					const a = t(n),
						r = e.getState();
					if (!Object(c.d)(r) && n.type === s.a) {
						const {
							basicChannelCount: e,
							subredditChannelCount: t
						} = n.payload;
						((e, t) => {
							var n, s;
							const a = null === (s = null === (n = null === window || void 0 === window ? void 0 : window.document) || void 0 === n ? void 0 : n.title) || void 0 === s ? void 0 : s.replace(o, "");
							e > 0 ? (i(e), window.document.title = `(${e}) ${a}`) : t > 0 ? (i(1), window.document.title = `(*) ${a}`) : (i(0), window.document.title = a)
						})(e, t)
					}
					return a
				} : a.a
			}
		},
		"./src/chat/customMiddleware/tokenRefresher.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/throttle.js"),
				a = n.n(s),
				r = n("./src/lib/constants/index.ts"),
				c = n("./src/chat/actions/channel.ts"),
				o = n("./src/chat/actions/session.ts"),
				i = n("./src/chat/helpers/errors.ts");
			const l = 5 * r.ib;
			t.a = e => {
				const t = a()(() => {
					e.dispatch(Object(o.d)())
				}, l);
				let n, s;
				const r = () => {
						const n = e.getState().user.session;
						if (!n || !s) return;
						const a = new Date(n.expires),
							r = s + Math.floor(.8 * (a.getTime() - s));
						Date.now() > r && t && t()
					},
					d = e => {
						s = Date.now();
						const a = new Date(e.expires).getTime() - s,
							r = .8 + .1 * Math.random(),
							c = Math.min(Math.floor(r * e.expiresIn * 1e3), Math.floor(r * a));
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
			var s = n("./node_modules/lodash/once.js"),
				a = n.n(s),
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
				f = n("./src/telemetry/models/Timer.ts"),
				g = n("./src/chat/tracking/fields/chat.ts"),
				O = n("./src/chat/tracking/fields/common.ts");
			const C = e => ({
					type: e
				}),
				E = e => ({
					millis: e
				});
			var j = n("./src/chat/tracking/events/chatView.ts"),
				_ = n("./src/chat/tracking/events/contactsList.ts"),
				v = n("./src/chat/tracking/events/invitationInbox.ts"),
				I = n("./src/chat/tracking/events/messagesInbox.ts");
			const x = a()((e, t) => ((e, t) => {
					Object(p.a)({
						noun: "inbox_new",
						source: b.b.ChatPerformance,
						action: b.a.Load,
						chat: {
							...Object(g.p)(e),
							...Object(g.r)(e)
						},
						timer: {
							...C(f.TimerType.ChatLoadInboxNew),
							...E(t)
						},
						...Object(O.a)(e)
					})
				})(e, (e => Date.now() - e)(t))),
				y = a()(e => Object(m.d)(e) && S(e)),
				S = e => {
					Object(I.d)(e)
				},
				w = Object(r.c)((e, t, n) => {
					Object(h.J)(e) ? ((e, t) => {
						Object(p.a)({
							noun: "channel_cached",
							source: b.b.ChatPerformance,
							action: b.a.Load,
							chat: {
								...Object(g.g)(e)
							},
							timer: {
								...C(f.TimerType.ChatLoadChannelCached),
								...E(t)
							},
							...Object(O.a)(e)
						})
					})(t, n) : ((e, t) => {
						Object(p.a)({
							noun: "channel_new",
							source: b.b.ChatPerformance,
							action: b.a.Load,
							chat: {
								...Object(g.g)(e)
							},
							timer: {
								...C(f.TimerType.ChatLoadChannelNew),
								...E(t)
							},
							...Object(O.a)(e)
						})
					})(t, n)
				}),
				N = e => {
					Object(m.c)(e) === u.a.CREATE && Object(_.g)(e)
				},
				T = e => {
					Object(m.c)(e) === u.a.VIEW_JOIN && (e => {
						Object(p.a)({
							noun: "preview",
							source: b.b.ChatPreview,
							action: b.a.View,
							chat: {
								...Object(g.g)(e),
								...Object(g.A)(e),
								...Object(g.q)(e),
								...Object(g.s)(e)
							},
							...Object(O.a)(e)
						})
					})(e)
				};
			t.a = e => t => n => s => {
				const a = n(s),
					r = t.getState();
				switch (s.type) {
					case i.a:
						x(r, e), N(r);
						break;
					case c.q:
						w(r, !0);
						break;
					case c.s:
						N(r), y(r);
						break;
					case c.r:
						x(r, e), (e => {
							Object(m.c)(e) === u.a.VIEW_INVITE && Object(v.i)(e)
						})(r), (e => Object(m.f)(e) && Object(j.f)(e))(r), w(r), T(r);
						break;
					case o.l:
					case l.c:
						x(r, e);
						break;
					case d.b:
						S(r)
				}
				return a
			}
		},
		"./src/chat/customMiddleware/unreadMessageCount.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/debounce.js"),
				a = n.n(s),
				r = n("./src/chat/actions/message/unreadCount.ts"),
				c = n("./src/chat/customMiddleware/noop.ts"),
				o = n("./src/lib/cache/index.ts"),
				i = n("./src/lib/constants/index.ts");
			let l, d;
			const u = a()(e => {
				Object(o.d)(l, e, 5 * i.ib)
			}, 5 * i.Nb, {
				leading: !1,
				trailing: !0
			});
			let h;
			const m = () => {
				h && clearInterval(h), h = setInterval(() => {
					void 0 === Object(o.b)(l) && Object(r.b)()
				}, 5 * i.ib)
			};
			t.a = e => {
				if ("undefined" == typeof window) return c.a;
				const t = e.getState(),
					{
						user: {
							account: n
						}
					} = t,
					s = n && n.id || "unknown";
				l = Object(o.c)(i.o.CHAT, i.w.CHAT_UNREAD_MESSAGE_COUNT_KEY, s), u(t.messages.unread.basicChannelCount), m();
				try {
					window.parent.addEventListener("focus", m)
				} catch (a) {}
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
			var s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts");
			const r = async e => Object(a.a)(e, {
				endpoint: `${e.apiUrl}/api/v1/me`,
				method: s.hb.GET,
				data: {
					raw_json: 1
				}
			}), c = async (e, t) => Object(a.a)(e, {
				data: {
					account_id: t,
					raw_json: 1
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.hb.POST
			}), o = async (e, t) => Object(a.a)(e, {
				endpoint: `${e.apiUrl}/user/${t}/about`,
				method: s.hb.GET,
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
			var s = n("./src/graphql/operations/CreateChatGifMessage.json"),
				a = n("./src/graphql/operations/GetTrendingChatGifs.json"),
				r = n("./src/graphql/operations/SearchChatGifs.json"),
				c = n("./src/lib/makeGqlRequest/index.ts");
			const o = (e, t) => Object(c.a)(e, {
					...a,
					variables: t
				}),
				i = (e, t) => Object(c.a)(e, {
					...r,
					variables: t
				}),
				l = (e, t) => Object(c.a)(e, {
					...s,
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
			var s = n("./src/graphql/operations/ExperimentVariantsShort.json"),
				a = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/chat/models/Message/report.ts");
			const i = (e, t) => Object(r.a)(e, {
					method: a.hb.POST,
					endpoint: `${e.apiUrl}/api/report_user`,
					data: {
						reason: t.reason,
						user: t.userNickname
					}
				}),
				l = (e, t, n) => {
					const s = Object(o.c)(t, n);
					return Object(r.a)(e, {
						method: a.hb.POST,
						endpoint: `${e.apiUrl}/api/report_user`,
						data: {
							details: JSON.stringify(s),
							reason: t.reason,
							user: t.userNickname
						}
					})
				},
				d = (e, t) => Object(r.a)(e, {
					method: a.hb.GET,
					endpoint: `${e.apiUrl}/api/user_data_by_account_ids`,
					data: {
						raw_json: 1,
						ids: t.join(",")
					}
				}),
				u = e => Object(r.a)(e, {
					method: a.hb.GET,
					endpoint: `${e.apiUrl}/prefs/blocked.json`
				}),
				h = e => Object(c.a)(e, {
					...s
				})
		},
		"./src/chat/helpers/chatSelector.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/lodash/isEqual.js"),
				a = n.n(s),
				r = n("./node_modules/reselect/es/index.js");
			const c = Object(r.b)(r.d, a.a),
				o = e => Object(r.c)(e, c)
		},
		"./src/chat/helpers/dom.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			const s = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				a = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/chat/helpers/linkParser/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			}));
			var s = n("./src/lib/linkMatchers/index.ts");
			const a = e => !!s.f.test(e),
				r = (e, t, n) => {
					const s = [];
					let a = 0;
					return t.forEach(({
						index: t,
						lastIndex: r,
						text: c,
						url: o,
						schema: i
					}) => {
						const l = "mailto:" === i ? "_self" : "_blank";
						s.push(e.substring(a, t)), s.push(n(o, c, l, i, `link-${t}-${c}`)), a = r
					}), s.push(e.substring(a, e.length)), s
				},
				c = /^(((file|https?|ftps?):)?\/|mailto:)/i,
				o = e => {
					if (void 0 === e) return e;
					return e.match(c) ? e : "#"
				};
			t.a = (e, t, n) => {
				const a = Object(s.c)(e, t);
				return a && a.length ? r(e, a, n) : e
			}
		},
		"./src/chat/helpers/modifyInitialData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "h", (function() {
				return v
			}));
			var s = n("./node_modules/history/esm/history.js"),
				a = n("./node_modules/lodash/uniqueId.js"),
				r = n.n(a),
				c = n("./src/lib/env/index.ts"),
				o = n("./src/lib/matchRoute/index.ts"),
				i = n("./src/chat/actions/platform.ts"),
				l = n("./src/chat/constants/theme.ts"),
				d = n("./src/chat/models/Theme/index.ts"),
				u = n("./src/chat/reducers/meta/index.ts"),
				h = n("./src/chat/reducers/platform/index.ts"),
				m = n("./src/chat/reducers/promos/index.ts"),
				p = n("./src/chat/reducers/sidebar/sideBarAppearance/index.ts"),
				b = n("./src/chat/selectors/platform.ts");
			const f = (e, t) => (e.chat && e.chat.promos && (t.promos = {
					...m.a,
					...e.chat.promos
				}), t),
				g = (e, t) => {
					const {
						account: n,
						language: s,
						loid: a,
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
						language: s,
						loid: a,
						prefs: r,
						reddaid: c,
						sessionTracker: i,
						session: o && o.unsafeLoggedOut ? null : o
					}, t
				},
				O = e => (e.meta = {
					...u.a,
					isRedesign: !0
				}, e),
				C = e => {
					if (e.user && e.user.prefs && e.user.prefs.nightmode) {
						const {
							NIGHT: t,
							REDDIT: n
						} = l.b, {
							nightmode: s
						} = e.user.prefs, a = s ? t : n;
						e.themes = {
							current: d.e[a],
							chatTheme: null,
							cached: {}
						}, e.user.prefs.globalTheme = a
					}
					return e
				},
				E = (e, t, n) => {
					const a = r()(),
						c = Object(s.c)(t.location.pathname, void 0, a),
						l = Object(o.a)(Object(s.e)(c), n),
						d = Object(h.b)(h.a, Object(i.e)({
							location: c,
							action: "PUSH",
							routeMatch: l
						}));
					return e.platform = {
						...d
					}, e
				},
				j = e => {
					const t = Object(b.e)(e);
					return e.sidebar = {
						activeIndex: t,
						lastChannelIdPerTab: {},
						sideBarAppearance: {
							isSidebarVisible: !1,
							sideBarComponentType: p.a.CHANNELS
						}
					}, e
				},
				_ = (e, t) => {
					const n = {};
					if (t) {
						const s = /^experiment_(.*)$/i,
							a = e => {
								const t = e.match(s);
								if (null !== t) return t[1]
							};
						for (const r in t) {
							const s = a(r);
							s && (n[s.toLowerCase()] = {
								...e[s.toLowerCase()] || {},
								name: s.toLowerCase(),
								variant: t[r] || "",
								isOverride: !0
							})
						}
					}
					return n
				},
				v = (e, t) => {
					var n, s, a, r, o;
					const i = {},
						l = null === (n = e.platform.currentPage) || void 0 === n ? void 0 : n.queryParams;
					for (const c in null === (a = null === (s = null == e ? void 0 : e.user) || void 0 === s ? void 0 : s.experiments) || void 0 === a ? void 0 : a.byName) i[c] = {
						...null === (o = null === (r = null == e ? void 0 : e.user) || void 0 === r ? void 0 : r.experiments) || void 0 === o ? void 0 : o.byName[c],
						isOverride: !1
					};
					const d = _(i, l);
					return t.experiments = {
						models: {
							...i,
							...Object(c.b)() ? {} : d
						},
						api: {
							isPending: !1,
							errors: []
						}
					}, t
				}
		},
		"./src/chat/helpers/time/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/constants/index.ts");
			const r = (new Date).setHours(0, 0, 0, 0),
				c = new Intl.DateTimeFormat(void 0, {
					hour: "numeric",
					minute: "2-digit"
				}).format,
				o = (e, t = !0) => {
					const n = r - a.z,
						c = new Date(r).setDate(1),
						o = new Date(c).setMonth(0),
						d = new Date(e);
					return e >= r && !t ? null : e >= r ? s.fbt._("Today", null, {
						hk: "1W0rfJ"
					}) : e >= n ? s.fbt._("Yesterday", null, {
						hk: "2GVGk3"
					}) : e >= c ? l(d) : e >= o ? l(d) : i(d)
				},
				i = new Intl.DateTimeFormat(void 0, {
					day: "numeric",
					month: "short",
					year: "2-digit"
				}).format,
				l = new Intl.DateTimeFormat(void 0, {
					day: "numeric",
					month: "short"
				}).format,
				d = new Intl.DateTimeFormat(void 0, {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric"
				}).format,
				u = e => e.toISOString()
		},
		"./src/chat/helpers/unreadCount.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/chat/models/Promo/index.ts");
			const a = {
					basicChannelCount: {
						count: 0,
						unread: !1
					},
					subredditChannelCount: {
						count: 0,
						unread: !1
					}
				},
				r = e => {
					const t = {};
					for (const n in e) t[n] = {
						count: e[n],
						unread: !!e[n]
					};
					return {
						...a,
						...t
					}
				},
				c = (e, t) => {
					const {
						basicChannelCount: n,
						subredditChannelCount: a
					} = r(e), c = Object(s.d)(t), o = Object(s.e)(c), i = n.count;
					return {
						count: i,
						unread: o || !!i || !!a.count
					}
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/controls/Svg/index.tsx"),
				o = n("./src/chat/icons/Nsfw/index.m.less"),
				i = n.n(o);
			const l = e => a.a.createElement(c.a, {
					width: e.width,
					height: e.height,
					className: e.className,
					viewBox: "0 0 200 200"
				}, a.a.createElement("g", null, a.a.createElement("rect", {
					width: "100%",
					height: "100%",
					fill: "white"
				}), a.a.createElement("path", {
					fill: "#000000",
					d: "M0 100v100h200V0H0v100zm82.1-20.3c2 .4 2.9.2 2.9-.8 0-.8.3-.9.9-.4 1.2 1.4 2.2 12.5 1 12.5-.5 0-.9-.7-.9-1.6 0-.9-1.5-3.1-3.4-5C77.2 79 70 79.9 70 86c0 3 3.1 6.1 10.8 11 7.6 4.7 9.9 9.9 6.8 15.8-2.5 4.8-9.1 6.9-16.2 5.1-3.6-.9-4.8-.9-5.4.1-1.1 1.8-1.7.2-2.4-6.5-.6-5.1-.5-5.7.6-4.1 4 6 7.4 8.8 11 8.9 4.5.1 7.8-2.5 7.8-6.3 0-3.4-1.3-4.9-8.5-9.7-10-6.7-11.9-10.2-8.8-16.3 2-3.8 7.1-6.3 11.2-5.4 1.3.3 3.6.8 5.2 1.1zM39.8 93.1L51 107.3V95.4c0-12.5-.3-13.5-3.5-14.9-1.7-.8-1.6-.9 1.2-1.3 1.8-.2 5-.2 7 0l3.8.4-2.7 1.2-2.8 1.1-.2 18.8-.3 18.8-13.2-16.3L27 86.9v28l2.8 1.5c2.6 1.5 2.4 1.5-4.8 1.5-6 0-7-.2-5-1 1.3-.6 2.8-1.5 3.2-2.2.4-.7.8-8 .8-16.3 0-15.8-.3-17-5-18.7-.8-.3 1-.6 4-.6l5.5-.1 11.3 14.1zM125 83c0 4.2-1.4 5.4-2.3 2-.7-2.7-4.6-4-11.8-4H105v15.1l6.3-.3c5.3-.3 6.3-.6 7.2-2.6 1.7-3.8 2.5-2.4 2.5 4.3 0 6.7-.8 8.1-2.5 4.2-.9-1.9-1.9-2.2-7.2-2.5l-6.3-.3v8.5c0 8.3 0 8.5 2.8 9.4 2.1.8.9 1-6.3 1-6.9 0-8.4-.2-6.4-.9 3.4-1.2 3.9-3.8 3.9-18.4 0-14.6-.5-17.2-3.9-18.4-1.9-.7 2-1 13.7-1L125 79v4zm13.3-2.5l-2.2 1.6 3 8.1c1.6 4.5 3.8 10 4.8 12.2l1.7 4.1 3.1-8c3-8 3-8 1.3-12.4-.9-2.4-2.8-5-4.1-5.7-2.2-1.2-1.5-1.3 6.1-1.3 5.8 0 7.8.3 6.4.9-1.2.5-2.5 1.3-2.8 1.8-.5.9 7.3 22.4 8.6 23.7.3.3 2.5-4.7 4.9-11.1l4.3-11.7-2.3-1.8-2.3-1.9 5.8.1c5.5 0 5.8.1 3.8 1.5-1.5 1-4.2 7.1-8.5 19.4-3.5 9.9-6.7 18-7 18-.3 0-2.5-5.2-4.9-11.5-2.3-6.3-4.6-11.3-5-11-.4.2-2.4 5.3-4.5 11.2-2.1 5.9-4.1 11.2-4.5 11.6-.4.5-1.8-2.2-3-6-5.5-16.5-11.1-29.9-13.2-31.5-2.2-1.7-2.1-1.8 5.2-1.8 7 0 7.3.1 5.3 1.5z"
				}))),
				d = r.a.wrapped(l, "NSFWIcon", i.a),
				u = r.a.wrapped(l, "SmallNSFWIcon", i.a)
		},
		"./src/chat/icons/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/config.ts");
			const a = ["snoo_heart_eyes_pride", "snoo_give_upvote_pride", "upvote_pride", "snoo", "snoo_simple_smile", "snoo_smile", "snoo_joy", "snoo_tongue", "snoo_wink", "snoo_sad", "snoo_biblethump", "snoo_angry", "snoo_disapproval", "snoo_trollface", "snoo_dealwithit", "snoo_facepalm", "snoo_shrug", "snoo_scream", "snoo_thoughtful", "snoo_surprised", "snoo_hearteyes", "snoo_hug", "snoo_feelsbadman", "snoo_feelsgoodman", "snoo_putback", "snoo_tableflip", "upvote", "downvote", "karma", "cake", "redditgold", "illuminati", "kappa", "sloth", "cat_blep", "pupper", "partyparrot", "orly", "hamster", "doge"],
				r = {
					simple_smile: `${s.a.assetPath}/img/snoomoji/snoo_simple_smile.png`,
					smile: `${s.a.assetPath}/img/snoomoji/snoo_smile.png`,
					joy: `${s.a.assetPath}/img/snoomoji/snoo_joy.png`,
					tongue: `${s.a.assetPath}/img/snoomoji/snoo_tongue.png`,
					wink: `${s.a.assetPath}/img/snoomoji/snoo_wink.png`,
					sad: `${s.a.assetPath}/img/snoomoji/snoo_sad.png`,
					biblethump: `${s.a.assetPath}/img/snoomoji/snoo_cry.png`,
					angry: `${s.a.assetPath}/img/snoomoji/snoo_angry.png`,
					disapproval: `${s.a.assetPath}/img/snoomoji/snoo_disapproval.png`,
					trollface: `${s.a.assetPath}/img/snoomoji/snoo_trollface.png`,
					dealwithit: `${s.a.assetPath}/img/snoomoji/snoo_dealwithit.png`,
					facepalm: `${s.a.assetPath}/img/snoomoji/snoo_facepalm.png`,
					shrug: `${s.a.assetPath}/img/snoomoji/snoo_shrug.png`,
					scream: `${s.a.assetPath}/img/snoomoji/snoo_scream.png`,
					thoughtful: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`,
					surprised: `${s.a.assetPath}/img/snoomoji/snoo_surprised.png`,
					hearteyes: `${s.a.assetPath}/img/snoomoji/snoo_hearteyes.png`,
					tableflip: `${s.a.assetPath}/img/snoomoji/snoo_tableflip.png`,
					putback: `${s.a.assetPath}/img/snoomoji/snoo_putback.png`,
					hug: `${s.a.assetPath}/img/snoomoji/snoo_hug.png`,
					feelsbadman: `${s.a.assetPath}/img/snoomoji/snoo_feelsbadman.png`,
					feelsgoodman: `${s.a.assetPath}/img/snoomoji/snoo_feelsgoodman.png`,
					snoo: `${s.a.assetPath}/img/snoomoji/snoo.png`,
					snoo_simple_smile: `${s.a.assetPath}/img/snoomoji/snoo_simple_smile.png`,
					slightly_smiling: `${s.a.assetPath}/img/snoomoji/snoo_simple_smile.png`,
					snoo_smile: `${s.a.assetPath}/img/snoomoji/snoo_smile.png`,
					snoo_joy: `${s.a.assetPath}/img/snoomoji/snoo_joy.png`,
					snoo_tongue: `${s.a.assetPath}/img/snoomoji/snoo_tongue.png`,
					stuck_out_tongue: `${s.a.assetPath}/img/snoomoji/snoo_tongue.png`,
					snoo_wink: `${s.a.assetPath}/img/snoomoji/snoo_wink.png`,
					snoo_sad: `${s.a.assetPath}/img/snoomoji/snoo_sad.png`,
					snoo_biblethump: `${s.a.assetPath}/img/snoomoji/snoo_cry.png`,
					cry: `${s.a.assetPath}/img/snoomoji/snoo_cry.png`,
					snoo_angry: `${s.a.assetPath}/img/snoomoji/snoo_angry.png`,
					snoo_disapproval: `${s.a.assetPath}/img/snoomoji/snoo_disapproval.png`,
					snoo_trollface: `${s.a.assetPath}/img/snoomoji/snoo_trollface.png`,
					snoo_dealwithit: `${s.a.assetPath}/img/snoomoji/snoo_dealwithit.png`,
					sunglasses: `${s.a.assetPath}/img/snoomoji/snoo_dealwithit.png`,
					snoo_facepalm: `${s.a.assetPath}/img/snoomoji/snoo_facepalm.png`,
					snoo_shrug: `${s.a.assetPath}/img/snoomoji/snoo_shrug.png`,
					snoo_scream: `${s.a.assetPath}/img/snoomoji/snoo_scream.png`,
					snoo_thoughtful: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`,
					snoo_surprised: `${s.a.assetPath}/img/snoomoji/snoo_surprised.png`,
					flushed: `${s.a.assetPath}/img/snoomoji/snoo_surprised.png`,
					snoo_hearteyes: `${s.a.assetPath}/img/snoomoji/snoo_hearteyes.png`,
					heart_eyes: `${s.a.assetPath}/img/snoomoji/snoo_hearteyes.png`,
					snoo_tableflip: `${s.a.assetPath}/img/snoomoji/snoo_tableflip.png`,
					table_flip: `${s.a.assetPath}/img/snoomoji/snoo_tableflip.png`,
					snoo_putback: `${s.a.assetPath}/img/snoomoji/snoo_putback.png`,
					table: `${s.a.assetPath}/img/snoomoji/snoo_putback.png`,
					snoo_hug: `${s.a.assetPath}/img/snoomoji/snoo_hug.png`,
					snoo_feelsbadman: `${s.a.assetPath}/img/snoomoji/snoo_feelsbadman.png`,
					feels_bad_man: `${s.a.assetPath}/img/snoomoji/snoo_feelsbadman.png`,
					snoo_feelsgoodman: `${s.a.assetPath}/img/snoomoji/snoo_feelsgoodman.png`,
					feels_good_man: `${s.a.assetPath}/img/snoomoji/snoo_feelsgoodman.png`,
					upvote: `${s.a.assetPath}/img/snoomoji/upvote.png`,
					downvote: `${s.a.assetPath}/img/snoomoji/downvote.png`,
					karma: `${s.a.assetPath}/img/snoomoji/karma.png`,
					cake: `${s.a.assetPath}/img/snoomoji/cake.png`,
					redditgold: `${s.a.assetPath}/img/snoomoji/redditgold.png`,
					gold: `${s.a.assetPath}/img/snoomoji/redditgold.png`,
					illuminati: `${s.a.assetPath}/img/snoomoji/illuminati.png`,
					kappa: `${s.a.assetPath}/img/snoomoji/kappa.png`,
					sloth: `${s.a.assetPath}/img/snoomoji/sloth.png`,
					cat_blep: `${s.a.assetPath}/img/snoomoji/cat_blep.png`,
					pupper: `${s.a.assetPath}/img/snoomoji/pupper.png`,
					partyparrot: `${s.a.assetPath}/img/snoomoji/partyparrot.gif`,
					party_parrot: `${s.a.assetPath}/img/snoomoji/partyparrot.gif`,
					orly: `${s.a.assetPath}/img/snoomoji/orly.png`,
					o_rly_owl: `${s.a.assetPath}/img/snoomoji/orly.png`,
					party_pigeon: `${s.a.assetPath}/img/snoomoji/orly.png`,
					partypigeon: `${s.a.assetPath}/img/snoomoji/orly.png`,
					hamster: `${s.a.assetPath}/img/snoomoji/hamster.png`,
					doge: `${s.a.assetPath}/img/snoomoji/doge.png`,
					upvote_pride: `${s.a.assetPath}/img/snoomoji/upvote_pride.png`,
					snoo_heart_eyes_pride: `${s.a.assetPath}/img/snoomoji/heart_eyes_pride.png`,
					snoo_give_upvote_pride: `${s.a.assetPath}/img/snoomoji/give_upvote_pride.png`
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
			var s = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
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
				f = n.n(b);
			const g = l.a.i("FallbackAvatar", f.a),
				O = l.a.wrapped(g, "FallbackAvatarWrapper", f.a),
				C = l.a.wrapped(e => {
					const t = Object(o.e)(m.d),
						{
							className: n,
							height: a,
							width: r,
							userId: l
						} = e,
						{
							processingAvatarImageUrl: d
						} = s.a;
					let u = {
						height: a,
						width: r
					};
					if (t) return c.a.createElement(p.a, {
						userId: l,
						className: n,
						style: u
					});
					const b = (e => e.replace(i.Fb.Account + "_", ""))(l),
						{
							avatar: f,
							color: g
						} = (e => {
							const t = h.length,
								n = parseInt(e, 36),
								s = n % 20 + 1,
								a = Math.floor(n / 20) % t;
							return {
								avatar: ("0" + s).slice(-2),
								color: h[a]
							}
						})(b),
						O = `${d}/avatar_default_${f}_${g}.png`;
					return u = {
						...u,
						backgroundColor: g,
						backgroundImage: `url(${O})`
					}, c.a.createElement("i", {
						className: n,
						style: u
					})
				}, "SnooIcon", f.a);
			class E extends c.a.Component {
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
						profileImg: s,
						name: r
					} = this.props, {
						profileImgFailed: o
					} = this.state, i = {
						height: t,
						width: n
					};
					return o || !s ? c.a.createElement(O, {
						style: i,
						className: e,
						title: `${r} ${a.fbt._("Snoovatar",null,{hk:"1jT1ZL"})}`
					}) : c.a.createElement("img", {
						style: i,
						onError: this.onError,
						className: e,
						src: s,
						alt: `${r} ${a.fbt._("Snoovatar",null,{hk:"1jT1ZL"})}`
					})
				}
			}
			const j = l.a.wrapped(E, "VoicesAvatar", f.a),
				_ = Object(d.a)({
					contact: (e, t) => e.contacts.models[t.userId],
					currentUser: e => e.user.account
				}),
				v = Object(o.b)(_);
			t.a = v(e => {
				const {
					className: t,
					contact: n,
					currentUser: s,
					height: a,
					width: r,
					userId: o
				} = e, i = o === s.id, {
					profileImg: l = "",
					name: d = ""
				} = i ? s : n || {};
				return n && n.isNSFW && !i ? c.a.createElement(u.b, {
					className: t,
					height: a,
					width: r
				}) : l ? c.a.createElement(j, {
					className: t,
					height: a,
					width: r,
					profileImg: l,
					name: d
				}) : c.a.createElement(C, {
					className: t,
					height: a,
					width: r,
					userId: o
				})
			})
		},
		"./src/chat/icons/svgs/ChatNew/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/chat/controls/Svg/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement(r.a, c({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				d: "M16.8,3.2A9.619,9.619,0,0,0,.491,8.5a9.506,9.506,0,0,0,1.145,6.237l-1.181,3.9a.725.725,0,0,0,.893.907l3.99-1.143a9.5,9.5,0,0,0,4.654,1.218,9.835,9.835,0,0,0,1.551-.124A9.619,9.619,0,0,0,16.8,3.2ZM14,10.75H10.75V14H9.25V10.75H6V9.25H9.25V6h1.5V9.25H14Z"
			}))
		},
		"./src/chat/icons/svgs/Edit/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/chat/controls/Svg/index.tsx"),
				c = n("./src/chat/models/Theme/index.ts"),
				o = n("./src/chat/icons/svgs/helpers.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				return a.a.createElement(r.a, i({}, e, {
					viewBox: "0 0 24 20"
				}), (() => {
					let e;
					const t = c.f[c.c.VANITY];
					return t && (e = a.a.createElement(o.a, {
						rotate: c.d,
						gradient: t,
						id: "edit-linear-gradient"
					})), a.a.createElement(a.a.Fragment, null, e, a.a.createElement("path", {
						d: "M10.8,4.029,1.214,13.405a1.135,1.135,0,0,0-.339.805V18A1.127,1.127,0,0,0,2,19.125H5.79a1.134,1.134,0,0,0,.8-.338L15.971,9.2Z"
					}), a.a.createElement("path", {
						d: "M18.25,3.159,16.841,1.75a2.634,2.634,0,0,0-3.692-.021L11.692,3.155l5.153,5.153,1.426-1.457A2.634,2.634,0,0,0,18.25,3.159Z"
					}))
				})())
			}
		},
		"./src/chat/icons/svgs/MenuOverflow/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/chat/controls/Svg/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement(r.a, c({}, e, {
				viewBox: "0 0 14 4"
			}), a.a.createElement("g", {
				transform: "translate(-475.000000, -286.000000)"
			}, a.a.createElement("path", {
				d: "M485.479375,287.804009 C485.479375,288.796214 486.265328,289.608018 487.225938,289.608018 C488.186547,289.608018 488.9725,288.796214 488.9725,287.804009 C488.9725,286.811804 488.186547,286 487.225938,286 C486.265328,286 485.479375,286.811804 485.479375,287.804009 M480.239688,287.804009 C480.239688,288.796214 481.025641,289.608018 481.98625,289.608018 C482.946859,289.608018 483.732813,288.796214 483.732813,287.804009 C483.732813,286.811804 482.946859,286 481.98625,286 C481.025641,286 480.239688,286.811804 480.239688,287.804009 M478.493125,287.804009 C478.493125,286.811804 477.707172,286 476.746563,286 C475.785953,286 475,286.811804 475,287.804009 C475,288.796214 475.785953,289.608018 476.746563,289.608018 C477.707172,289.608018 478.493125,288.796214 478.493125,287.804009"
			})))
		},
		"./src/chat/icons/svgs/Refresh/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/chat/controls/Svg/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement(r.a, c({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				d: "M18 9a1 1 0 0 1 1 1v2c0 2.757-2.243 5-5 5H5v1.5a.5.5 0 0 1-.82.384l-3-2.5a.497.497 0 0 1 0-.768l3-2.5A.5.5 0 0 1 5 13.5V15h9c1.654 0 3-1.346 3-3v-2a1 1 0 0 1 1-1zM2 11a1 1 0 0 1-1-1V8c0-2.757 2.243-5 5-5h9V1.5a.5.5 0 0 1 .82-.384l3 2.5a.497.497 0 0 1 0 .768l-3 2.5A.5.5 0 0 1 15 6.5V5H6C4.346 5 3 6.346 3 8v2a1 1 0 0 1-1 1z"
			}))
		},
		"./src/chat/icons/svgs/Trash/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/chat/controls/Svg/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement(r.a, c({}, e, {
				viewBox: "0 0 16 16"
			}), a.a.createElement("path", {
				d: "M10.845 11.6c0 .22-.182.4-.407.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.225 0 .407.18.407.4v4.4zm-2.438 0c0 .22-.183.4-.407.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.224 0 .407.18.407.4v4.4zm-2.439 0c0 .22-.182.4-.406.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.224 0 .406.18.406.4v4.4zm6.426-6.8c.225 0 .406.18.406.4v8c0 .662-.547 1.2-1.219 1.2H4.42c-.672 0-1.219-.538-1.219-1.2v-8c0-.22.181-.4.407-.4h8.787zm0-2.4c.224 0 .406.18.406.4v.8c0 .22-.182.4-.407.4H3.606a.403.403 0 0 1-.406-.4v-.8c0-.22.182-.4.406-.4H6.01l.602-.666a.411.411 0 0 1 .304-.134h2.166c.116 0 .226.049.304.134l.602.666h2.404z",
				fillRule: "evenodd"
			}))
		},
		"./src/chat/icons/svgs/helpers.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = ({
				id: e,
				rotate: t,
				gradient: n
			}) => a.a.createElement("defs", null, a.a.createElement("linearGradient", {
				id: e,
				gradientTransform: `rotate(${t})`
			}, n.stops.map((e, t) => a.a.createElement("stop", {
				key: `${t}-${e.offset}-${e.color}`,
				offset: `${e.offset}`,
				stopColor: `${e.color}`
			}))))
		},
		"./src/chat/models/Contact/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/lib/constants/index.ts");

			function a(e) {
				return e ? e.map(c).filter(e => !!e) : []
			}
			const r = 4;

			function c(e) {
				if (e.contact_account_id || e.id) return {
					id: e.contact_account_id || `${s.Fb.Account}_${e.id}`,
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
				return s
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = e => Object.keys(e).reduce((t, n) => {
					const s = e[n];
					return "boolean" == typeof s && (t[n] = s), "object" == typeof s && (t[n] = a(s)), t
				}, {}),
				a = e => ({
					experimentId: e.experiment_id,
					owner: e.owner,
					variant: e.variant
				}),
				r = e => {
					const {
						id: t,
						experimentName: n,
						name: s,
						version: a,
						isOverride: r
					} = e;
					return {
						id: parseInt(t),
						name: n,
						variant: null != s ? s : "",
						version: a,
						isOverride: r
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
			var s = n("./node_modules/lodash/sortBy.js"),
				a = n.n(s),
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
					const s = a()(n, ["createdAt"]),
						r = s.findIndex(({
							messageId: e
						}) => e === t.messageId),
						o = Math.max(r - 20, 0),
						i = r + 20;
					return s.slice(o, i).reduce((t, n) => {
						const s = c(e, n);
						return s && t.push(s), t
					}, [])
				},
				i = (e, t) => t ? {
					sendbirdChatMessage: e,
					sendbirdEphemeralChatLog: t
				} : {
					sendbirdChatMessage: e
				}
		},
		"./src/chat/models/Promo/index.ts": function(e, t, n) {
			"use strict";
			var s, a, r;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return a
				})), n.d(t, "c", (function() {
					return r
				})), n.d(t, "d", (function() {
					return c
				})), n.d(t, "e", (function() {
					return o
				})),
				function(e) {
					e.SubredditChatFtux = "displaySubredditChatFtux"
				}(s || (s = {})),
				function(e) {
					e.NSFWWarning = "displayNSFWWarning"
				}(a || (a = {})),
				function(e) {
					e.LegacyNSFWWarning = "nsfwWarning", e.LegacySubredditChatFtux = "firstTimeUserExp"
				}(r || (r = {}));
			const c = e => {
					const t = {};
					for (const n in e) switch (n) {
						case s.SubredditChatFtux:
							t[n] = e[n]
					}
					return t
				},
				o = e => {
					for (const t in e)
						if (!0 === e[t]) return !0;
					return !1
				}
		},
		"./src/chat/models/RichUnit/index.ts": function(e, t, n) {
			"use strict";
			var s, a;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(s || (s = {})),
				function(e) {
					e.TEXT = "text", e.POLL = "poll", e.LINK = "link", e.IMAGE = "image", e.GALLERY = "gallery"
				}(a || (a = {}))
		},
		"./src/chat/models/Theme/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "a", (function() {
				return T
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./src/reddit/constants/theme.ts"),
				r = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/chat/constants/theme.ts");
			const o = "#006DC6",
				i = "#B44AC0",
				l = "#FF6600",
				d = "#BE0039",
				u = "#6A5CFF",
				h = "#5349DA";
			var m = n("./src/reddit/constants/colors.ts"),
				p = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const {
				REDDIT: b,
				NIGHT: f
			} = a.b, g = e => r.d[e].newRedditTheme;
			var O;
			! function(e) {
				e.NONE = "none", e.UNDERLINE = "underline"
			}(O || (O = {}));
			const C = "22.5";
			var E;
			! function(e) {
				e.BASIC = "basic", e.ORANGERED = "orangered", e.VANITY = "vanity", e.SERIOUS = "serious"
			}(E || (E = {}));
			const j = {
					[E.ORANGERED]: {
						stops: [{
							offset: "11.68%",
							color: d
						}, {
							offset: "88.32%",
							color: l
						}]
					},
					[E.VANITY]: {
						stops: [{
							offset: "11.68%",
							color: h
						}, {
							offset: "88.32%",
							color: i
						}]
					},
					[E.SERIOUS]: {
						stops: [{
							offset: "11.68%",
							color: o
						}, {
							offset: "88.32%",
							color: u
						}]
					}
				},
				_ = e => {
					return `linear-gradient(22.5deg, ${j[e].stops.map(e=>`${e.color} ${e.offset}`).join(", ")})`
				},
				v = {
					bubble: {
						background: _(E.VANITY),
						color: m.b.white,
						border: m.b.transparent,
						link: {
							color: m.b.white,
							textDecoration: O.UNDERLINE
						}
					}
				},
				I = {
					bubble: {
						background: _(E.SERIOUS),
						color: m.b.white,
						border: m.b.transparent,
						link: {
							color: m.b.white,
							textDecoration: O.UNDERLINE
						}
					}
				},
				x = {
					bubble: {
						background: _(E.ORANGERED),
						color: m.b.white,
						border: m.b.transparent,
						link: {
							color: m.b.white,
							textDecoration: O.UNDERLINE
						}
					}
				},
				y = {
					activity: {
						icon: {
							default: g(b).actionIcon,
							active: m.b.op,
							disable: Object(s.a)(.5, m.b.white),
							hover: Object(s.a)(.5, m.b.white),
							contrast: g(b).bodyText,
							nsfw: {
								bg: m.b.black,
								text: m.b.white
							}
						},
						text: {
							regular: g(b).bodyText,
							active: m.b.op,
							fade: Object(s.a)(.4, m.b.white),
							light: g(b).actionIcon,
							warning: m.b.warning,
							highlight: m.b.white,
							success: m.b.approved
						},
						button: {
							primary: m.b.alienblue,
							secondary: g(b).metaText
						},
						buttonSecondary: {
							active: m.b.alienblue
						},
						send: {
							disable: Object(s.a)(.5, m.b.white),
							hover: Object(s.a)(.08, m.b.op)
						},
						checkbox: {
							checked: m.b.alienblue,
							checkmark: m.b.white,
							unchecked: g(b).body,
							uncheckedBorder: Object(s.a)(.3, m.b.white)
						},
						input: {
							border: m.b.defaultFlair,
							focusColor: m.b.white,
							focusBg: m.b.approved,
							ownerBg: g(b).line,
							color: g(b).bodyText,
							error: m.b.warning,
							channelRename: Object(s.a)(.1, m.b.white),
							background: Object(s.g)(Object(s.a)(.3, m.b.white), .1)
						},
						link: {
							staticUnderline: m.b.alienblue,
							staticText: m.b.op,
							hoverText: m.b.snoo
						},
						minimizedPortal: {
							backgroundColor: {
								unreadInitial: g(b).active,
								unreadFinal: g(b).highlight
							},
							color: {
								unreadInitial: m.b.white,
								unreadFinal: m.b.black
							}
						}
					},
					layout: {
						body: g(b).body,
						colsBorder: g(b).line,
						controlsBorder: Object(s.g)(m.b.black, .15),
						header: {
							counterBg: m.b.snoo,
							counterText: m.b.white
						},
						scrollbar: Object(s.a)(.2, m.b.white),
						scrollbarHover: Object(s.a)(.4, m.b.white),
						timeStamp: {
							tooltip: {
								background: g(b).body
							}
						},
						dropdown: {
							border: m.b.transparent
						}
					},
					message: {
						list: {
							item: {
								ownerBg: g(b).inactive,
								button: g(b).actionIcon,
								richItem: g(b).metaText,
								richItemBorder: g(b).postLine,
								onlineIndicator: m.b.approved,
								white: m.b.white
							}
						}
					},
					subreddit: {
						iconBg: m.b.alienblue
					},
					sidebar: {
						background: Object(s.g)(Object(s.a)(.3, m.b.white), .1),
						subreddit: {
							background: {
								active: m.b.alienblue,
								hover: g(b).canvas
							}
						},
						basic: {
							background: {
								active: m.b.alienblue,
								hover: g(b).canvas
							}
						},
						text: {
							divider: Object(s.a)(.5, m.b.white)
						},
						item: {
							hover: g(b).field,
							active: g(b).postLine,
							selected: g(b).inactive,
							text: {
								active: g(b).titleText
							}
						},
						footer: {
							background: g(b).field
						}
					},
					toast: {
						pending: m.b.black,
						success: m.b.approved,
						error: m.b.orangered
					},
					skeleton: {
						field: g(b).field,
						inactive: g(b).inactive
					},
					boxShadow: Object(s.g)(20, 120, 120, .11),
					bubbleActions: {
						hover: g(b).line
					},
					bubble: {
						background: m.b.transparent,
						color: g(b).bodyText,
						border: g(b).line,
						link: {
							color: m.b.op,
							textDecoration: O.NONE
						}
					}
				},
				S = {
					activity: {
						icon: {
							default: g(f).postIcon,
							active: m.b.alienblue,
							disable: Object(s.a)(.5, m.b.white),
							hover: Object(s.a)(.5, m.b.white),
							contrast: Object(s.a)(.4, g(f).bodyText),
							nsfw: {
								bg: m.b.black,
								text: m.b.white
							}
						},
						text: {
							regular: g(f).bodyText,
							active: m.b.op,
							fade: Object(s.a)(.4, m.b.white),
							light: g(f).actionIcon,
							warning: m.b.warning,
							highlight: m.b.white,
							success: m.b.approved
						},
						button: {
							primary: m.b.alienblue,
							secondary: g(f).metaText
						},
						buttonSecondary: {
							active: m.b.lightboxHeaderText
						},
						send: {
							disable: Object(s.a)(.5, m.b.white),
							hover: Object(s.a)(.08, m.b.op)
						},
						checkbox: {
							checked: m.b.alienblue,
							checkmark: m.b.white,
							unchecked: g(f).body,
							uncheckedBorder: Object(s.a)(.3, m.b.white)
						},
						input: {
							border: m.b.defaultFlair,
							focusColor: m.b.white,
							focusBg: m.b.approved,
							ownerBg: g(f).line,
							color: g(f).bodyText,
							error: m.b.warning,
							channelRename: Object(s.a)(.1, m.b.white),
							background: Object(s.g)(Object(s.a)(.3, m.b.white), .1)
						},
						link: {
							staticUnderline: m.b.alienblue,
							staticText: m.b.op,
							hoverText: m.b.snoo
						},
						minimizedPortal: {
							backgroundColor: {
								unreadInitial: g(f).active,
								unreadFinal: g(f).highlight
							},
							color: {
								unreadInitial: m.b.white,
								unreadFinal: m.b.white
							}
						}
					},
					layout: {
						body: g(f).body,
						colsBorder: g(f).line,
						controlsBorder: Object(s.g)(m.b.white, .15),
						header: {
							counterBg: m.b.snoo,
							counterText: m.b.white
						},
						scrollbar: Object(s.a)(.2, g(f).bodyText),
						scrollbarHover: Object(s.a)(.1, g(f).bodyText),
						timeStamp: {
							tooltip: {
								background: g(f).inactive
							}
						},
						dropdown: {
							border: g(f).line
						}
					},
					message: {
						list: {
							item: {
								ownerBg: g(f).inactive,
								button: g(f).actionIcon,
								richItem: g(f).metaText,
								richItemBorder: p.a.metaText,
								onlineIndicator: m.b.approved,
								white: m.b.white
							}
						}
					},
					subreddit: {
						iconBg: m.b.alienblue
					},
					sidebar: {
						background: Object(s.g)(Object(s.a)(.4, m.b.white), .1),
						subreddit: {
							background: {
								active: m.b.alienblue,
								hover: Object(s.h)(.2, g(f).canvas)
							}
						},
						basic: {
							background: {
								active: m.b.alienblue,
								hover: Object(s.h)(.2, g(f).canvas)
							}
						},
						text: {
							divider: Object(s.a)(.5, m.b.white)
						},
						item: {
							hover: g(f).field,
							active: g(f).postLine,
							selected: g(f).placeholder,
							text: {
								active: g(f).titleText
							}
						},
						footer: {
							background: g(f).field
						}
					},
					toast: {
						pending: m.b.black,
						success: m.b.approved,
						error: m.b.orangered
					},
					skeleton: {
						field: g(f).field,
						inactive: g(f).inactive
					},
					boxShadow: Object(s.g)(20, 120, 120, 0),
					bubbleActions: {
						hover: g(f).field
					},
					bubble: {
						background: m.b.transparent,
						color: g(f).bodyText,
						border: g(f).line,
						link: {
							color: m.b.op,
							textDecoration: O.NONE
						}
					}
				},
				w = {
					[c.b.REDDIT]: y,
					[c.b.NIGHT]: S
				},
				N = {
					[E.ORANGERED]: x,
					[E.VANITY]: v,
					[E.SERIOUS]: I
				},
				T = [E.BASIC, E.ORANGERED, E.VANITY, E.SERIOUS]
		},
		"./src/chat/models/User/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/convertToCamelCase/index.ts");
			const r = `${s.Fb.Account}_`,
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
				return Object(a.a)(t)
			}
		},
		"./src/chat/reducers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Lt
			}));
			var s = n("./node_modules/redux/es/redux.js"),
				a = n("./node_modules/lodash/omit.js"),
				r = n.n(a),
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
				f = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/uniq.js")),
				g = n.n(f),
				O = n("./src/chat/models/Channel/index.ts"),
				C = n("./src/chat/models/Channel/utils/index.ts");
			const E = {
				fetchingChannels: !1,
				hasMoreChannels: !1,
				sortedKeys: []
			};
			var j = (e = E, t) => {
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
							hasMoreChannels: s
						} = t.payload, a = Object(C.c)(n, [O.a.Direct, O.a.Group]);
						if (!a) return e;
						const r = Object.keys(a),
							c = s && !!r.length;
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
							sortedKeys: g()([n.channelId, ...e.sortedKeys])
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
			var v = n("./src/chat/actions/message/index.ts");
			const I = {
				fetchingChannels: !1,
				hasMoreChannels: !0,
				sortedKeys: []
			};
			var x = (e = I, t) => {
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
								hasMoreChannels: s
							} = t.payload, a = Object(C.c)(n, [O.a.Direct, O.a.Group]);
							if (!a) return e;
							const r = Object.keys(a),
								c = s && !!r.length;
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
								sortedKeys: g()([...n, ...e.sortedKeys])
							}
						}
						case p.u:
						case v.a: {
							const {
								channelId: n
							} = t.payload;
							return e.sortedKeys.includes(n) ? {
								...e,
								sortedKeys: g()([n, ...e.sortedKeys])
							} : e
						}
						default:
							return e
					}
				},
				y = n("./node_modules/lodash/first.js"),
				S = n.n(y),
				w = n("./node_modules/lodash/reduce.js"),
				N = n.n(w),
				T = n("./src/chat/actions/channel/dropdown.ts"),
				A = n("./src/chat/actions/message/inboxScroller.ts"),
				M = n("./src/chat/constants/channels.ts");
			const k = {};
			var D = (e = k, t) => {
				switch (t.type) {
					case p.g:
						return {
							...e, ...t.payload
						};
					case p.b:
					case p.a: {
						const {
							channels: n
						} = t.payload, s = N()(e, (e, t, s) => n[s] && t.channelState === M.b.PARTIAL && (e[s] = n[s]) && e || e, {});
						return {
							...n,
							...e,
							...s
						}
					}
					case p.p: {
						const n = t.payload,
							s = e[n];
						return !s || s && 0 === s.unreadMessageCount ? e : {
							...e,
							[n]: {
								...s,
								unreadMessageCount: 0,
								unreadMentionCount: 0
							}
						}
					}
					case p.t: {
						const {
							channelId: n
						} = t.payload, s = {
							...e[n],
							channelState: M.b.JOINED
						};
						return {
							...e,
							[s.channelId]: s
						}
					}
					case p.x: {
						const n = t.payload.channel,
							s = {
								...e[n.channelId],
								...r()(n, "hasMoreMessages", "isMessageListLoaded")
							},
							a = {
								[n.channelId]: s
							};
						return {
							...e,
							...a
						}
					}
					case p.w: {
						const n = t.payload.channel,
							s = {
								...e[n.channelId],
								...n,
								channelState: M.b.INVITED
							},
							a = {
								[n.channelId]: s
							};
						return {
							...e,
							...a
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
					case T.a: {
						const {
							channelId: n,
							name: s
						} = t.payload, a = {
							...e[n],
							name: s
						};
						return {
							...e,
							[n]: {
								...a
							}
						}
					}
					case v.a: {
						const n = t.payload.channelId,
							s = Number(S()(Object.keys(t.payload.message))),
							a = {
								...e[n],
								lastMessage: t.payload.message[s]
							};
						return {
							...e,
							[n]: a
						}
					}
					case v.g: {
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
					case v.b:
					case v.e: {
						const {
							hasMore: n,
							channelId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								isMessageListLoaded: !0,
								hasMoreMessages: n,
								fetchingMessages: !1,
								fetchingMessagesError: !1
							}
						}
					}
					case v.f: {
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
					case A.b: {
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
			const P = {
				channelId: void 0,
				isLoaded: !1
			};
			var R = (e = P, t) => {
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
				L = Object(s.c)({
					draftMessages: m,
					firstLoaded: b,
					invited: j,
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
					joined: x,
					models: D,
					selected: R,
					messageQuickReplyUsers: i
				}),
				U = n("./src/chat/actions/user.ts");
			var B = (e = !1, t) => {
					switch (t.type) {
						case U.b:
							return !0;
						default:
							return e
					}
				},
				F = n("./node_modules/lodash/values.js"),
				H = n.n(F),
				G = n("./src/chat/actions/sendbird/index.ts");
			const V = "search",
				W = "contacts",
				z = {};
			var K = (e = z, t) => {
				switch (t.type) {
					case G.g:
						return {
							...e, ...t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: W
							}, e), {})
						};
					case G.b:
						return {
							...t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: W
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
								method: V
							}
						}
					}
					case G.e: {
						const {
							payload: {
								contact: n,
								username: s,
								valid: a
							}
						} = t, r = !!(a && n && n.id);
						return {
							...e,
							[s.toLowerCase()]: {
								loaded: !0,
								userId: n ? n.id : null,
								valid: r,
								method: V
							}
						}
					}
					case U.i: {
						const n = t.payload;
						return {
							...e,
							...H()(n).reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: V
							}, e), {})
						}
					}
					case U.c: {
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
					case U.i:
						return {
							...e, ...t.payload || {}
						};
					case U.c: {
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
					case U.b: {
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
					case U.h:
						return [...e, t.payload];
					case U.k:
						return e.filter(e => e !== t.payload);
					case U.j:
						return Q;
					default:
						return e
				}
			};
			const Y = [];
			var X = (e = Y, t) => {
					switch (t.type) {
						case G.g:
							return [...e, ...t.payload.map(e => e.id)];
						case U.c:
							return e.filter(e => e !== t.payload.userId);
						default:
							return e
					}
				},
				$ = Object(s.c)({
					fetchedBlockedUsers: B,
					knownContacts: K,
					models: Z,
					selectedUserIds: J,
					suggestedKeys: X
				}),
				ee = n("./src/chat/actions/container.ts"),
				te = n("./src/chat/constants/container.ts");
			const ne = {
				size: te.a.EMBED
			};
			var se = (e = ne, t) => {
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
				ae = n("./src/lib/env/index.ts"),
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
							const s = Object(ae.b)() ? null : null === (n = null == t ? void 0 : t.payload) || void 0 === n ? void 0 : n.queryParams,
								a = Object(oe.b)(t.payload.data),
								r = Object(ce.e)(a, s);
							return {
								...e,
								models: {
									...e.models,
									...a,
									...r
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
					var n, s;
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
											ids: [...(null === (s = e.search.models[t.payload.query]) || void 0 === s ? void 0 : s.ids) || []]
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
				fe = n.n(be),
				ge = n("./src/chat/actions/members.ts");
			const Oe = {};
			var Ce = (e = Oe, t) => {
				switch (t.type) {
					case ge.b: {
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
					case ge.c: {
						const {
							channelId: n,
							hasMoreMembers: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								hasMoreMembers: s,
								fetchingMembers: !1
							}
						}
					}
					case ge.a: {
						const {
							channelId: n,
							members: s
						} = t.payload, a = pe()(s), r = e[n] && e[n].model || [], c = fe()([...r, ...a], "id");
						return {
							...e,
							[n]: {
								...e[n],
								model: c
							}
						}
					}
					case ge.d:
						return {};
					default:
						return e
				}
			};
			var Ee = (e = !1, t) => {
				switch (t.type) {
					case v.b:
					case v.l:
						return !0;
					default:
						return e
				}
			};
			const je = {};
			var _e = (e = je, t) => {
				switch (t.type) {
					case v.b: {
						const {
							messages: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case v.a:
						return {
							...e, ...t.payload.message
						};
					case v.i:
						return {
							...e, ...t.payload
						};
					case v.d:
					case v.j:
						return r()(e, t.payload);
					case v.e: {
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
					case A.a: {
						const {
							messageIdList: n
						} = t.payload;
						return r()(e, n)
					}
					case v.n: {
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
					case v.h: {
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
			const ve = {};
			var Ie = (e = ve, t) => {
					var n, s;
					switch (t.type) {
						case v.i: {
							const a = H()(t.payload);
							if (a.length && (null === (s = null === (n = a[0]) || void 0 === n ? void 0 : n.messageData) || void 0 === s ? void 0 : s.clientMessageId)) {
								const t = a[0].messageData.clientMessageId;
								return {
									...r()(e, t)
								}
							}
							return e
						}
						case v.c: {
							const n = t.payload;
							return {
								...e,
								[n.clientMessageId]: n
							}
						}
						case v.m: {
							const {
								clientMessageId: n,
								toggle: s
							} = t.payload;
							if (n) {
								const t = e[n];
								return {
									...e,
									[n]: {
										...t,
										error: s
									}
								}
							}
							return {
								...e
							}
						}
						case v.a:
						case v.k: {
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
				xe = n("./src/chat/actions/message/richUnit.ts");
			const ye = {
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
			var we = (e = ye, t) => {
					var n, s, a, r;
					switch (t.type) {
						case xe.b:
							return {
								...e, posts: {
									...e.posts,
									...Se((null === (n = t.payload) || void 0 === n ? void 0 : n.posts) || {})
								}, userPosts: {
									...e.userPosts,
									...Se((null === (s = t.payload) || void 0 === s ? void 0 : s.userPosts) || {})
								}, comments: {
									...e.comments,
									...Se((null === (a = t.payload) || void 0 === a ? void 0 : a.comments) || {})
								}, subreddits: {
									...e.subreddits,
									...Se((null === (r = t.payload) || void 0 === r ? void 0 : r.subreddits) || {})
								}, dataReceived: !0
							};
						case xe.a:
							return {
								...e, dataReceived: !1
							};
						default:
							return e
					}
				},
				Ne = n("./node_modules/lodash/isEqual.js"),
				Te = n.n(Ne),
				Ae = n("./src/chat/actions/message/unreadCount.ts");
			const Me = {
				basicChannelCount: 0,
				subredditChannelCount: 0,
				subredditMentionCount: 0
			};
			var ke = (e = Me, t) => {
					switch (t.type) {
						case Ae.a:
							return Te()(e, t.payload) ? e : {
								...e,
								...t.payload
							}
					}
					return e
				},
				De = Object(s.c)({
					firstLoaded: Ee,
					models: _e,
					pending: Ie,
					unread: ke,
					richUnits: we
				}),
				Pe = n("./src/chat/reducers/meta/index.ts"),
				Re = n("./src/chat/reducers/platform/index.ts"),
				Le = n("./src/chat/reducers/promos/index.ts"),
				Ue = n("./src/chat/actions/sendbird/config.ts");
			const Be = {
				maxMessageLength: void 0
			};
			var Fe = (e = Be, t) => {
				switch (t.type) {
					case Ue.b:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const He = {
				host: void 0
			};
			var Ge = (e = He, t) => {
					switch (t.type) {
						case Ue.c:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Ve = n("./src/chat/actions/sendbird/sdk.ts"),
				We = n("./src/chat/constants/sendbird.ts");
			const ze = {
				connectionStatus: We.b.Closed,
				initialized: !1
			};
			var Ke = (e = ze, t) => {
				switch (t.type) {
					case Ve.a:
						return {
							...e, initialized: !0, connectionStatus: We.b.Open
						};
					case Ve.c: {
						const n = {
							...t.payload
						};
						return {
							...e,
							error: n,
							connectionStatus: We.b.Closed
						}
					}
					case Ve.b:
						return {
							...e, connectionStatus: We.b.Closed
						};
					case Ve.d: {
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
				Qe = Object(s.c)({
					globalSettings: Fe,
					proxy: Ge,
					session: Ze,
					sdk: Ke
				}),
				Je = n("./src/chat/actions/sidebar.ts");
			const Ye = n("./src/chat/constants/sidebar.ts").a.DirectChannels;
			var Xe = (e = Ye, t) => {
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
								tabIndex: s
							} = t.payload;
							return {
								...e,
								[s]: n
							}
						}
						default:
							return e
					}
				},
				tt = n("./src/chat/reducers/sidebar/sideBarAppearance/index.ts"),
				nt = Object(s.c)({
					activeIndex: Xe,
					lastChannelIdPerTab: et,
					sideBarAppearance: tt.b
				}),
				st = n("./src/chat/actions/sitewideRules.ts");
			const at = [];
			var rt = (e = at, t) => {
					switch (t.type) {
						case st.a:
							return t.payload;
						default:
							return e
					}
				},
				ct = n("./src/chat/reducers/subscribe.ts"),
				ot = n("./src/chat/actions/theme.ts"),
				it = n("./src/chat/constants/theme.ts"),
				lt = n("./src/chat/models/Theme/index.ts");
			const dt = {
				current: lt.e[it.a],
				chatTheme: null,
				chatThemeKey: lt.c.BASIC,
				chatPreviewThemeKey: lt.c.BASIC,
				cached: {},
				isShowPrompt: !0
			};
			var ut = (e = dt, t) => {
					switch (t.type) {
						case ot.GLOBAL_THEME_CHANGED:
							return e.current = lt.e[t.payload.themeKey], {
								...e
							};
						case ot.CHAT_THEME_CHANGED:
							return {
								...e, chatTheme: lt.b[t.payload.themeKey], chatPreviewThemeKey: t.payload.themeKey
							};
						case ot.CHAT_THEME_APPLIED:
							return {
								...e, chatThemeKey: t.payload.themeKey
							};
						case ot.CHAT_THEME_CANCELED:
							return {
								...e, chatTheme: e.chatThemeKey ? lt.b[e.chatThemeKey] : null, chatPreviewThemeKey: e.chatThemeKey
							};
						case ot.CHAT_THEME_PROMPT_CLICKED:
							return {
								...e, isShowPrompt: !1
							};
						case ot.CHAT_THEME_RESTORED:
							return {
								...e, chatTheme: lt.b[t.payload.themeKey], chatThemeKey: t.payload.themeKey, chatPreviewThemeKey: t.payload.themeKey
							};
						case ot.CHAT_THEME_SHOW_PROMPT_COUNT_SET:
							return {
								...e, isShowPrompt: t.payload <= ot.MAX_SHOW_PROMPT_COUNT
							};
						case Je.c:
							return t.payload === tt.a.THEMES ? {
								...e,
								isShowPrompt: !1
							} : e;
						default:
							return e
					}
				},
				ht = n("./src/chat/actions/toast.ts");
			var mt = (e = null, t) => {
					switch (t.type) {
						case ht.a:
							return null;
						case ht.b: {
							const {
								toast: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				pt = n("./src/chat/actions/platform.ts"),
				bt = n("./src/chat/actions/tooltip.ts");
			var ft = (e = null, t) => {
					switch (t.type) {
						case bt.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case bt.b:
						case pt.a:
							return null;
						default:
							return e
					}
				},
				gt = n("./src/chat/actions/typingIndicator.ts");
			const Ot = {
				usernames: []
			};
			var Ct = (e = Ot, t) => {
					switch (t.type) {
						case gt.a: {
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
								return Te()(e, t)
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
				Et = n("./src/lib/reducers/addAuthentication/index.ts");
			var jt = Object(Et.a)((e = null, t) => {
				switch (t.type) {
					case U.a: {
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
			const _t = {
				userSubredditChatEnabled: !1
			};
			var vt = (e = _t, t) => {
				switch (t.type) {
					case G.f:
					case Ue.a: {
						const {
							userSubredditChatEnabled: n
						} = t.payload || _t;
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
					case U.d:
						return t.payload;
					default:
						return e
				}
			};
			const yt = n("./src/lib/constants/index.ts").B;
			var St = Object(Et.a)((e = yt, t) => (t.type, e), yt);
			const wt = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var Nt = (e = wt, t) => {
				switch (t.type) {
					case U.e:
						return t.payload;
					default:
						return e
				}
			};
			const Tt = {
				globalTheme: it.a
			};
			var At = (e = Tt, t) => {
				switch (t.type) {
					case ot.GLOBAL_THEME_CHANGED: {
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
			var Mt = (e = "", t) => {
					switch (t.type) {
						case U.f:
							return t.payload;
						default:
							return e
					}
				},
				kt = n("./src/chat/actions/session.ts");
			var Dt = (e = null, t) => {
				switch (t.type) {
					case kt.a:
					case kt.c:
						return t.payload;
					case kt.b:
						return null;
					default:
						return e
				}
			};
			var Pt = (e = "", t) => {
					switch (t.type) {
						case U.g:
							return t.payload;
						default:
							return e
					}
				},
				Rt = Object(s.c)({
					account: jt,
					chatExperiments: vt,
					experiments: xt,
					language: St,
					loid: Nt,
					prefs: At,
					reddaid: Mt,
					session: Dt,
					sessionTracker: Pt
				});
			const Lt = {
				channels: L,
				contacts: $,
				container: se,
				experiments: le,
				gifs: he,
				members: Ce,
				messages: De,
				meta: Pe.b,
				platform: Re.b,
				promos: Le.b,
				sendbird: Qe,
				sidebar: nt,
				sitewideRules: rt,
				themes: ut,
				toast: mt,
				tooltipId: ft,
				typingIndicator: Ct,
				user: Rt,
				lastAction: ct.a
			}
		},
		"./src/chat/reducers/meta/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/chat/actions/meta.ts");
			const a = {
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
			t.b = (e = a, t) => {
				switch (t.type) {
					case s.META_RECEIVED:
						return t.payload;
					case s.SET_EXTERNAL_DATA:
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
			var s = n("./node_modules/history/esm/history.js"),
				a = n("./src/chat/actions/platform.ts");
			const r = {
				currentPage: null,
				referrers: {},
				metas: {}
			};
			t.b = (e = r, t) => {
				switch (t.type) {
					case a.a: {
						if (!t.payload) return e;
						const n = e.currentPage,
							a = t.payload,
							{
								routeMatch: r,
								location: c
							} = a,
							{
								key: o
							} = c;
						if (void 0 === o) return e;
						const i = Object(s.e)(c),
							l = r ? ((e, t, n, s) => {
								const {
									action: a,
									...r
								} = n.route;
								return {
									key: e,
									locationState: s.state,
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
						if ("PUSH" === a.action) {
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
					case a.c: {
						if (!t.payload) return e;
						const {
							key: n,
							title: s,
							description: a,
							icon: r,
							type: c
						} = t.payload;
						return {
							...e,
							metas: {
								...e.metas,
								[n]: {
									description: a,
									icon: r,
									title: s,
									type: c
								}
							}
						}
					}
					case a.b:
						return t.payload, e;
					default:
						return e
				}
			}
		},
		"./src/chat/reducers/promos/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/chat/actions/promo/constants.ts");
			const a = {
				displayNSFWWarning: !1,
				displaySubredditChatFtux: !1
			};
			t.b = (e = a, t) => {
				switch (t.type) {
					case s.a: {
						const n = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					case s.b: {
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
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				r = n("./src/chat/actions/page.ts"),
				c;
			! function(e) {
				e.Invite = "invite", e.Message = "message", e.User = "user"
			}(c || (c = {}));
			const o = Object(s.a)({
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
					chunk: a.q.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: a.Jb.CHAT
					},
					path: "/chat/"
				},
				l = Object(s.a)({
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
					chunk: a.q.CHAT_EMPTY,
					component: l,
					exact: !0,
					meta: {
						name: a.Jb.CHAT_EMPTY
					},
					path: "/chat/empty/"
				},
				u = Object(s.a)({
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
					chunk: a.q.CHAT_MINIMIZE,
					component: u,
					exact: !0,
					meta: {
						name: a.Jb.CHAT_MINIMIZE
					},
					path: "/chat/minimize/"
				},
				m = ["/chat/", "/chat/channel/:action(create)/", "/chat/channel/:channelId/:action(block|hide|delete|invite|invited|kick|members|leave|nsfw|report)?/:attr(invite|message|user)?/:attrId?"],
				p = {
					action: r.a,
					chunk: a.q.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: a.Jb.CHAT
					},
					path: m
				},
				b = ["/chat/user_id/:userIds/"],
				f = {
					action: r.d,
					chunk: a.q.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: a.Jb.CHAT
					},
					path: b
				};
			t.b = [i, d, h, p, f]
		},
		"./src/chat/routes/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts");
			var a = {
				action: n("./src/chat/actions/page.ts").b,
				chunk: s.q.CHAT,
				exact: !0,
				meta: {
					name: s.Jb.CHAT
				},
				path: "/chat/*"
			};
			const r = [...n("./src/chat/routes/chat.ts").b, a];
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
				return f
			})), n.d(t, "f", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/values.js"),
				a = n.n(s),
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
					return a()(e.contacts.models).find(e => e.id === t)
				},
				l = (e, t) => {
					return a()(e.contacts.models).find(e => e.name.toLowerCase() === t.toLowerCase())
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
				f = e => {
					const {
						selectedUserIds: t
					} = e.contacts;
					return t.length && t.map(t => {
						const n = i(e, t);
						return n && n.id
					})
				},
				g = (e, t) => {
					const n = l(e, t);
					if (n) return {
						name: t,
						id: n.id
					};
					const s = d(e, t);
					if (s && s.userId) return {
						name: t,
						id: s.userId
					};
					const a = Object(r.c)(e, t);
					return a ? {
						name: t,
						id: a.id
					} : void 0
				}
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
				return f
			}));
			var s = n("./node_modules/lodash/values.js"),
				a = n.n(s),
				r = n("./node_modules/reselect/es/index.js");
			const c = e => e.gifs,
				o = Object(r.a)(c, e => a()(e.models)),
				i = Object(r.a)(c, e => e.search.inputQuery),
				l = Object(r.a)(c, i, (e, t) => {
					var n;
					const s = null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.ids;
					return (null == s ? void 0 : s.length) ? s : []
				}),
				d = Object(r.a)(c, e => Boolean(e.trending.modelIds.length)),
				u = Object(r.a)(c, l, i, (e, t, n) => !n || n && !t.length && !e.search.models[n].pending ? e.trending.modelIds : n && t.length ? t : n && !t.length && e.search.models[n].pending ? [] : void 0),
				h = Object(r.a)(o, u, (e, t) => {
					if (t) return e.filter(e => t.includes(e.id))
				}),
				m = Object(r.a)(c, i, (e, t) => {
					var n;
					let s = e.trending.api.pending;
					return t && (s = null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.pending), s
				}),
				p = Object(r.a)(c, i, (e, t) => {
					var n;
					return t ? null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.hasError : e.trending.api.hasError
				}),
				b = Object(r.a)(c, i, (e, t) => {
					var n;
					return null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.pageInfo.hasNextPage
				}),
				f = Object(r.a)(c, i, (e, t) => Boolean(t && e.search.models[t].pending && e.search.models[t].ids.length))
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
			var s = n("./node_modules/lodash/sortBy.js"),
				a = n.n(s),
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
						s = [],
						r = [],
						c = [];
					e.forEach(e => {
						e.isModerator ? t.push(e) : e.isNSFW && e.isBlockedByMe ? s.push(e) : e.isNSFW ? r.push(e) : e.isBlockedByMe ? n.push(e) : c.push(e)
					});
					const o = e => e.name && e.name.toLowerCase();
					return [...a()(t, o), ...a()(n, o), ...a()(s, o), ...a()(r, o), ...a()(c, o)]
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
				return a
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
			var s = n("./src/chat/constants/sidebar.ts");
			const a = e => e.platform && e.platform.currentPage && e.platform.currentPage.urlParams.channelId,
				r = e => e.platform && e.platform.currentPage && e.platform.currentPage.urlParams.action,
				c = e => e.platform && e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name,
				o = e => s.a.DirectChannels,
				i = e => {
					var t, n;
					return null === (n = null === (t = e.platform) || void 0 === t ? void 0 : t.currentPage) || void 0 === n ? void 0 : n.queryParams
				},
				l = e => !(!a(e) || r(e))
		},
		"./src/chat/selectors/promos.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = e => e.promos,
				a = e => e.promos.displayNSFWWarning
		},
		"./src/chat/selectors/richUnits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/chat/constants/messages.ts"),
				a = n("./src/chat/models/RichUnit/index.ts");
			const r = (e, t) => {
					switch (t.type) {
						case s.c.POST: {
							const {
								chatUnitId: n
							} = t, s = e.messages.richUnits.posts[n.toLowerCase()];
							if ((null == s ? void 0 : s.removedByCategory) !== a.b.Deleted) return s;
							break
						}
						case s.c.USER_POST: {
							const {
								chatUnitId: n
							} = t, s = e.messages.richUnits.userPosts[n.toLowerCase()];
							if ((null == s ? void 0 : s.removedByCategory) !== a.b.Deleted) return s;
							break
						}
						case s.c.COMMENT: {
							const {
								chatUnitId: n
							} = t, s = e.messages.richUnits.comments[n.toLowerCase()];
							if (!(null == s ? void 0 : s.deletedAt)) return s;
							break
						}
						case s.c.SUBREDDIT: {
							const {
								chatUnitId: n
							} = t;
							return e.messages.richUnits.subreddits[n.toLowerCase()]
						}
					}
				},
				c = e => e.messages.richUnits.dataReceived
		},
		"./src/chat/selectors/sendbird.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return o
			}));
			const s = e => e.sendbird.sdk.connectionStatus,
				a = e => e.sendbird.sdk.initialized,
				r = e => e.sendbird.proxy.host,
				c = e => e.sendbird.session,
				o = e => e.sendbird.session.active
		},
		"./src/chat/selectors/sidebar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./src/chat/constants/sidebar.ts");
			const s = e => e.sidebar.sideBarAppearance.isSidebarVisible,
				a = e => e.sidebar.sideBarAppearance.sideBarComponentType
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
				return f
			})), n.d(t, "e", (function() {
				return g
			}));
			var s = n("./node_modules/js-cookie/src/js.cookie.js"),
				a = n.n(s),
				r = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				c = n.n(r),
				o = n("./src/lib/constants/cookie.ts"),
				i = n("./src/chat/selectors/app.ts");
			const l = e => ({
					pageType: Object(i.d)(e) ? "chat" : "chat_fullscreen"
				}),
				d = e => e.meta.platform || void 0,
				u = e => {
					const t = a.a.get(o.g);
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
				f = e => e.meta.externalData.comment,
				g = e => e.meta.externalData.profile
		},
		"./src/chat/selectors/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/reselect/es/index.js");
			const a = e => t => t.tooltipId === e,
				r = Object(s.a)(e => e.tooltipId, e => e)
		},
		"./src/chat/selectors/unreadCounter.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			}));
			var s = n("./src/chat/helpers/unreadCount.ts"),
				a = n("./src/chat/selectors/channels.ts"),
				r = n("./src/chat/selectors/promos.ts");
			const c = e => e.messages.unread,
				o = e => {
					const t = Object(a.p)(e);
					return e.messages.unread.basicChannelCount - t || 0
				},
				i = e => {
					const t = c(e),
						n = Object(r.b)(e);
					return Object(s.a)(t, n)
				},
				l = e => {
					const t = c(e);
					return Object(s.b)(t)
				}
		},
		"./src/chat/singleton/SendbirdSDK.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				a = n("./node_modules/lodash/noop.js"),
				r = n.n(a),
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
			const f = e => async (t, n) => {
				const s = n(),
					a = Object(b.s)(s);
				if (t(Object(u.L)({
						channelId: e
					})), a && a.channelId === e) {
					const n = Object(p.getRedirectURL)(Object(p.channelAction)(e, m.a.DENY));
					t(Object(h.b)(n))
				}
			};
			var g = n("./src/chat/selectors/user.ts");
			const O = (e, t) => async (n, s) => {
				const a = s(),
					{
						channelId: r
					} = e,
					c = Object(b.t)(a),
					o = Object(g.a)(a);
				if (t === o && (n(Object(u.K)(r)), r === c)) {
					const e = Object(p.getRedirectURL)(Object(p.channelAction)(r, m.a.DENY));
					n(Object(h.b)(e))
				}
			};
			var C = n("./src/chat/actions/message/index.ts"),
				E = n("./src/chat/actions/sendbird/index.ts"),
				j = n("./src/chat/actions/sendbird/sdk.ts"),
				_ = n("./src/chat/actions/toast.ts"),
				v = n("./src/chat/actions/typingIndicator.ts"),
				I = n("./src/chat/constants/batchSizes.ts"),
				x = n("./src/chat/constants/messages.ts"),
				y = n("./src/chat/constants/sendbird.ts"),
				S = n("./src/chat/constants/toast.ts"),
				w = n("./src/chat/helpers/errors.ts"),
				N = n("./src/chat/models/Channel/index.ts"),
				T = n("./src/chat/models/Channel/utils/index.ts"),
				A = n("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				M = n("./src/chat/models/Message/index.ts"),
				k = n("./src/chat/models/User/member.ts");
			const {
				sendbirdAppId: D
			} = s.a;
			const P = new class {
				constructor() {
					this.dispatch = r.a, this.channels = {}, this.channelUniqueHandlerID = [], this.connectionUniqueHandlerID = [], this.switchChannel = (e, t) => {
						if (this.channel = e, t) return Promise.resolve([]); {
							this.channelMembersQuery = this.channel.createMemberListQuery(), this.memberListQuery = this.channel.createMemberListQuery();
							const e = !0,
								t = this.getPreviousMessages(e);
							return Promise.all([t])
						}
					}, (this.self = new o.a({
						appId: D
					})).Options.typingIndicatorThrottle = 1e4
				}
				connect(e, t, n, s) {
					return new Promise(a => {
						this.dispatch = s, this.self.connect(n, t, `https://${e}`, `wss://${e}`, (e, t) => {
							this.toggleUpdateListeners(!0), a({
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
					})), this.dispatch(Object(E.m)())
				}
				onReconnectStarted() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: y.b.Pending
						},
						n = {
							toast: S.a.ConnectionPending
						};
					e.onReconnectStarted = () => {
						this.dispatch(Object(j.h)(t)), this.dispatch(Object(_.e)(n))
					}, this.self.addConnectionHandler("CONNECTION_CHANGE", e), this.connectionUniqueHandlerID.push("CONNECTION_CHANGE")
				}
				onReconnectSucceeded() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: y.b.Open
						};
					e.onReconnectSucceeded = () => {
						this.dispatch(Object(j.h)(t)), this.dispatch(Object(_.e)({
							toast: S.a.ConnectionOpen
						})), Object(i.setTimeout)(() => this.dispatch(Object(_.d)()), 3 * l.Nb);
						this.dispatch(Object(C.t)(!0)), this.dispatch(Object(u.E)())
					}, this.self.addConnectionHandler("RECONNECT_SUCCEEDED", e), this.connectionUniqueHandlerID.push("RECONNECT_SUCCEEDED")
				}
				onReconnectFailed() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: y.b.Closed
						};
					e.onReconnectFailed = () => {
						this.dispatch(Object(j.h)(t)), this.dispatch(Object(_.e)({
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
						const s = Object(M.c)(t);
						s && this.dispatch(Object(C.v)(s))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_MESSAGE")
				}
				onUpdateMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageUpdated = (e, t) => {
						const n = Object(N.e)(e);
						this.dispatch(Object(u.Q)(n));
						const s = Object(M.c)(t);
						s && this.dispatch(Object(C.v)(s))
					}, this.self.addChannelHandler("UPDATE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("UPDATE_CHANNEL_MESSAGE")
				}
				onDeleteMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageDeleted = (e, t) => {
						this.dispatch(Object(C.w)(t))
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
							s = new this.self.ChannelHandler,
							a = e[n];
						s[n] = e => {
							const t = Object(N.e)(e);
							this.dispatch(Object(u.R)(t, !0))
						}, this.self.addChannelHandler(a, s), this.channelUniqueHandlerID.push(a)
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
						const t = Object(A.a)(e);
						this.dispatch(f(t))
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
						UNSORTED: s
					} = m.b;
					t === n && e.channelState === s && (e.channelState = n, this.dispatch(Object(u.S)(e)))
				}
				getChannelByChannelId(e) {
					return new Promise((t, n) => {
						const s = Object(T.a)(e);
						this.self.GroupChannel.getChannel(s, (e, s) => {
							s ? (Object(w.b)("Error: can't get channel by id"), n(s)) : t(e)
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
					return new Promise(s => {
						const a = (e = {}) => ({
							data: e
						});
						if (!this.isConnected()) return s(a());
						const {
							channelId: r
						} = e, c = this.channels[r];
						if (c && !t) return this.switchChannel(c, n).then(([e]) => s(a({
							messageListData: e
						}))).catch(() => s(a()));
						this.getChannelByChannelId(r).then(t => {
							if (!t) return s(a());
							this.channels[r] = t;
							const c = Object(N.e)(t);
							this.updatePartialChannelModel(c, e.channelState), this.switchChannel(t, n).then(([e]) => s(a({
								messageListData: e
							}))).catch(() => s(a()))
						}).catch(() => s(a()))
					})
				}
				updateChannel({
					name: e,
					coverUrl: t,
					data: n
				}) {
					return new Promise((s, a) => {
						this.channel ? this.channel.updateChannel(e, t, n, (e, t) => e ? s() : a(t)) : a("No channel selected")
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
						n && this.dispatch(O(n, t.userId))
					}, this.self.addChannelHandler("CHANNEL_USER_KICKED", e), this.channelUniqueHandlerID.push("CHANNEL_USER_KICKED")
				}
				getExistingChannels(e) {
					return new Promise((t, n) => {
						let s;
						if (e === m.b.INVITED ? this.channelListQueryInvited ? s = this.channelListQueryInvited : (this.channelListQueryInvited = this.self.GroupChannel.createMyGroupChannelListQuery(), s = this.channelListQueryInvited) : e === m.b.JOINED && (this.channelListQueryJoined ? s = this.channelListQueryJoined : (this.channelListQueryJoined = this.self.GroupChannel.createMyGroupChannelListQuery(), s = this.channelListQueryJoined)), s)
							if (s.includeEmpty = !0, s.limit = I.a.Channels, s.order = m.d.LATEST_MESSAGE, s.memberStateFilter = e === m.b.INVITED ? m.g.INVITED : m.g.JOINED, s.superChannelFilter = "all", s.customTypesFilter = ["direct", "group"], s.hasNext) {
								const e = s._token;
								s.next((n, a) => {
									if (!a && s) {
										let a = s.hasNext;
										const r = s._token;
										s && e && r && e === r && (a = !1, d.c.withScope(t => {
											t.setExtra("info", {
												query: JSON.stringify(s),
												currentNextToken: e,
												undatedNextToken: r
											}), d.c.captureMessage("Chat paging request infinite looping!")
										})), t({
											channels: n,
											hasMoreChannels: a
										})
									} else 800170 !== a.code && t()
								})
							} else t();
						else n()
					})
				}
				getChannelMembers(e, t) {
					return new Promise((n, s) => {
						const a = this.channels[e];
						if (!a) return s(new Error("this.channel is null or undefined"));
						this.channelMembersQuery = this.channelMembersQuery && t ? this.channelMembersQuery : a.createMemberListQuery(), this.channelMembersQuery && this.channelMembersQuery.hasNext && this.channelMembersQuery.next((e, t) => {
							if (!t && this.channelMembersQuery) {
								const t = this.channelMembersQuery.hasNext;
								n({
									members: e,
									hasMoreMembers: t
								})
							} else s(t)
						})
					})
				}
				getChannelMembersStartsWith(e, t) {
					return new Promise((n, s) => {
						const a = this.channels[e];
						if (!a) return s(new Error("this.channel is null or undefined"));
						this.memberListQuery = a.createMemberListQuery(), this.memberListQuery ? (this.memberListQuery.nicknameStartsWithFilter = t, this.memberListQuery.next((e, t) => {
							if (t) s(t);
							else {
								const t = this.memberListQuery && this.memberListQuery.hasNext || !1;
								n({
									members: e,
									hasMoreMembers: t
								})
							}
						})) : s(Error("this.memberListQuery is null or undefined"))
					})
				}
				searchMemberByName(e, t = !1) {
					return new Promise((n, s) => {
						if (!this.channel) return s(new Error("this.channel is null or undefined"));
						this.memberListQuery = this.channel.createMemberListQuery(), this.memberListQuery ? (this.memberListQuery.nicknameStartsWithFilter = e, this.memberListQuery.next((s, a) => {
							const r = Object(k.a)(s),
								c = r.filter(n => t && n && n.name === e || !t && n);
							r.length && this.dispatch(Object(E.i)(r)), n(c)
						})) : s(Error("this.memberListQuery is null or undefined"))
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
						e && this.createPreviousMessageListQuery(), this.channel && this.prevMessageListQuery ? (this.prevMessageListQuery.reverse = !0, this.prevMessageListQuery.limit = I.a.Messages, this.prevMessageListQuery.load((e, s) => {
							if (!s && this.prevMessageListQuery) {
								const n = {},
									{
										hasMore: s
									} = this.prevMessageListQuery;
								e.forEach(e => {
									const t = Object(M.c)(e);
									t && (n[t.messageId] = t)
								}), t({
									messages: n,
									hasMore: s
								})
							} else Object(w.b)(`Error with getting previous messages from Sendbird: ${s}`), n()
						})) : (Object(w.b)("Sendbird channel does not exist"), n())
					})
				}
				addMessage(e, t, n = []) {
					return new Promise((s, a) => {
						if (this.channel) {
							const r = new(0, this.self.UserMessageParams);
							r.data = t, r.message = e, n && n.length && (r.mentionType = x.b.USERS, r.mentionedUserIds = n), this.channel.sendUserMessage(r, (e, t) => {
								if (t) Object(w.b)(`Error with sending the message to Sendbird: ${t}`), a(t);
								else {
									const t = Object(M.c)(e);
									if (t && t.messageType === x.d.USER) return s(t);
									Object(w.b)(`Unsupported message type: ${t&&t.messageType}`), a()
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
					return new Promise((n, s) => {
						const a = this.channels[e];
						a && a.setMyCountPreference(t, (e, t) => t ? s(t) : n())
					})
				}
				setPushPreference(e, t) {
					return new Promise((n, s) => {
						const a = this.channels[e],
							r = !t;
						a && a.setPushPreference(r, (e, t) => t ? s(t) : n())
					})
				}
				resetPreviousMessageListQuery() {
					return new Promise((e, t) => {
						this.channel ? (this.createPreviousMessageListQuery(), e()) : t("this.channel does not exist")
					})
				}
			};
			t.a = P
		},
		"./src/chat/tracking/events/chatView.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "a", (function() {
				return O
			}));
			var s = n("./src/telemetry/models/Event.ts"),
				a = n("./src/chat/selectors/telemetry.ts"),
				r = n("./src/chat/tracking/fields/chat.ts"),
				c = n("./src/chat/tracking/fields/common.ts"),
				o = n("./src/chat/constants/messages.ts"),
				i = n("./src/chat/selectors/messages.ts");
			const l = (e, t) => {
				var n, s, a, r, c;
				const l = Object(i.c)(e, t);
				return l && l.type === o.c.GIF ? {
					id: null === (n = l.gif) || void 0 === n ? void 0 : n.id,
					caption: null === (s = l.gif) || void 0 === s ? void 0 : s.title,
					url: null === (a = l.gif) || void 0 === a ? void 0 : a.url,
					width: null === (r = l.gif) || void 0 === r ? void 0 : r.width,
					height: null === (c = l.gif) || void 0 === c ? void 0 : c.height
				} : {}
			};
			var d = n("./src/chat/tracking/sendEvent.ts");
			const u = e => Object(d.a)({
					noun: "chat",
					source: s.b.ChatView,
					action: s.a.View,
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
						source: s.b.ChatView,
						action: s.a.Submit,
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
						source: s.b.ChatView,
						action: s.a.View,
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
							...Object(a.a)(e)
						}
					})
				},
				p = (e, t, n) => {
					Object(d.a)({
						noun: "report_message",
						source: s.b.ChatView,
						action: s.a.Submit,
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
						source: s.b.ChatView,
						action: s.a.View,
						chat: {
							...Object(r.A)(e),
							...Object(r.q)(e),
							...Object(r.g)(e),
							...Object(r.y)(e)
						},
						...Object(c.a)(e)
					})
				},
				f = (e, t, n, o) => {
					Object(d.a)({
						noun: "quick_response",
						source: s.b.ChatView,
						action: s.a.Click,
						chat: {
							...Object(r.A)(e),
							...Object(r.q)(e),
							...Object(r.g)(e),
							...Object(r.y)(e)
						},
						...Object(c.a)(e),
						actionInfo: {
							...Object(a.a)(e),
							reason: o,
							position: t,
							paneName: n
						}
					})
				},
				g = (e, t) => {
					Object(d.a)({
						noun: "gif",
						source: s.b.Chat,
						action: s.a.Search,
						chat: {
							...Object(r.A)(e),
							...Object(r.q)(e),
							...Object(r.g)(e)
						},
						...Object(c.a)(e),
						actionInfo: {
							...Object(a.a)(e),
							settingValue: t
						}
					})
				},
				O = e => {
					Object(d.a)({
						noun: "prompt_theme",
						source: s.b.ChatView,
						action: s.a.Click,
						chat: {
							...Object(r.A)(e),
							...Object(r.q)(e),
							...Object(r.g)(e)
						},
						...Object(c.a)(e)
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
			var s = n("./src/chat/tracking/sendEvent.ts"),
				a = n("./src/telemetry/models/Event.ts"),
				r = n("./src/chat/tracking/fields/chat.ts"),
				c = n("./src/chat/tracking/fields/common.ts");
			const o = e => {
					Object(s.a)({
						noun: "contacts",
						source: a.b.ContactsList,
						action: a.a.View,
						chat: {
							...Object(r.c)(e),
							...Object(r.d)(e)
						},
						...Object(c.a)(e)
					})
				},
				i = (e, t) => {
					Object(s.a)({
						noun: "contact_add",
						source: a.b.ContactsList,
						action: a.a.Click,
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
					Object(s.a)({
						noun: "alert_invalid_user",
						source: a.b.ContactsList,
						action: a.a.View,
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
					Object(s.a)({
						noun: "alert_invalid_channel",
						source: a.b.ContactsList,
						action: a.a.View,
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
					Object(s.a)({
						noun: "create_chat",
						source: a.b.ContactsList,
						action: a.a.Click,
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
					Object(s.a)({
						noun: "close_contacts",
						source: a.b.ContactsList,
						action: a.a.Click,
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
					Object(s.a)({
						noun: "add_to_chat",
						source: a.b.ContactsList,
						action: a.a.Click,
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
				return f
			})), n.d(t, "g", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/telemetry/models/Event.ts"),
				a = n("./src/chat/selectors/telemetry.ts"),
				r = n("./src/chat/tracking/fields/chat.ts"),
				c = n("./src/chat/tracking/fields/common.ts"),
				o = n("./src/chat/tracking/sendEvent.ts");
			const i = e => Object(o.a)({
					noun: "invitation",
					source: s.b.InvitationInbox,
					action: s.a.View,
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
					source: s.b.InvitationInbox,
					action: s.a.Click,
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
					source: s.b.InvitationInbox,
					action: s.a.Click,
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
						...Object(a.a)(e),
						reason: n
					}
				}),
				u = e => Object(o.a)({
					noun: "invitation_view_member",
					source: s.b.InvitationInbox,
					action: s.a.Click,
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
						source: s.b.InvitationInbox,
						action: s.a.Click,
						...Object(c.a)(e)
					})
				},
				m = e => {
					Object(o.a)({
						noun: "collapse",
						source: s.b.InvitationInbox,
						action: s.a.Click,
						...Object(c.a)(e)
					})
				},
				p = new Set,
				b = (e, t) => {
					p.has(t) || (p.add(t), Object(o.a)({
						noun: "collapsed_message",
						source: s.b.Chat,
						action: s.a.View,
						chat: {
							message_id: t
						},
						...Object(c.a)(e)
					}))
				},
				f = (e, t, n) => {
					Object(o.a)({
						noun: "collapsed_message",
						source: s.b.Chat,
						action: s.a.Approve,
						chat: {
							id: t,
							message_id: n
						},
						...Object(c.a)(e)
					})
				},
				g = (e, t, n) => {
					Object(o.a)({
						noun: "collapsed_message",
						source: s.b.Chat,
						action: s.a.Report,
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
			var s = n("./src/chat/selectors/telemetry.ts"),
				a = n("./src/chat/tracking/fields/chat.ts"),
				r = n("./src/chat/tracking/fields/common.ts"),
				c = n("./src/chat/tracking/sendEvent.ts"),
				o = n("./src/telemetry/models/Event.ts");
			const i = e => {
					Object(c.a)({
						noun: "inbox",
						source: o.b.MessageInbox,
						action: o.a.View,
						chat: {
							...Object(a.p)(e),
							...Object(a.z)(e),
							...Object(a.r)(e)
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
							...Object(a.p)(e),
							...Object(a.z)(e),
							...Object(a.r)(e)
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
							...Object(a.p)(e),
							...Object(a.r)(e)
						},
						...Object(r.a)(e),
						actionInfo: {
							...Object(s.a)(e)
						}
					})
				},
				u = e => {
					Object(c.a)({
						noun: "minimize_chat",
						source: o.b.MessageInbox,
						action: o.a.Click,
						chat: {
							...Object(a.p)(e),
							...Object(a.r)(e)
						},
						...Object(r.a)(e),
						actionInfo: {
							...Object(s.a)(e)
						}
					})
				}
		},
		"./src/chat/tracking/fields/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return p
			})), n.d(t, "A", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "E", (function() {
				return O
			})), n.d(t, "D", (function() {
				return C
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "C", (function() {
				return v
			})), n.d(t, "z", (function() {
				return I
			})), n.d(t, "s", (function() {
				return x
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "r", (function() {
				return S
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "t", (function() {
				return N
			})), n.d(t, "B", (function() {
				return T
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "i", (function() {
				return D
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "w", (function() {
				return R
			})), n.d(t, "u", (function() {
				return L
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "d", (function() {
				return B
			})), n.d(t, "l", (function() {
				return F
			})), n.d(t, "y", (function() {
				return H
			})), n.d(t, "n", (function() {
				return G
			})), n.d(t, "v", (function() {
				return V
			})), n.d(t, "m", (function() {
				return W
			}));
			var s, a = n("./node_modules/lodash/difference.js"),
				r = n.n(a),
				c = n("./node_modules/lodash/isEmpty.js"),
				o = n.n(c),
				i = n("./src/chat/models/Channel/index.ts"),
				l = n("./src/chat/selectors/channels.ts"),
				d = n("./src/chat/selectors/contacts.ts"),
				u = n("./src/chat/selectors/messages.ts"),
				h = n("./src/chat/selectors/unreadCounter.ts");
			! function(e) {
				e.Direct = "direct", e.Group = "group"
			}(s || (s = {}));
			const m = e => {
					switch (e) {
						case i.a.Direct:
							return s.Direct;
						case i.a.Group:
							return s.Group
					}
				},
				p = (e, t) => {
					const n = t ? Object(l.g)(e, t) : Object(l.j)(e);
					return n && {
						id: n.channelSendbirdUrl
					}
				},
				b = (e, t) => {
					const n = t ? Object(l.g)(e, t) : Object(l.l)(e);
					if (n) {
						const {
							type: e
						} = n, t = m(e);
						return t && {
							type: t
						}
					}
				},
				f = e => {
					return {
						type: Object(d.k)(e) > 1 ? s.Group : s.Direct
					}
				},
				g = e => {
					const t = Object(d.k)(e);
					return {
						number_members: t ? t + 1 : 0
					}
				},
				O = (e, t) => {
					return {
						type: (t && t.length) > 2 ? s.Group : s.Direct
					}
				},
				C = (e, t) => {
					const {
						members: n
					} = v(e, t);
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
				j = (e, t) => {
					const n = Object(u.d)(e, t);
					return {
						sender_user_id: n && n.userId || e.user.account.id
					}
				},
				_ = e => {
					const t = Object(l.j)(e);
					return {
						sender_user_id: t && t.inviter && t.inviter.id
					}
				},
				v = (e, t) => (t.push(e.user.account.id), {
					members: t
				}),
				I = e => ({
					number_unreads: Object(h.b)(e)
				}),
				x = (e, t) => {
					const n = Object(l.l)(e),
						s = n && n.unreadMessageCount;
					return {
						number_unreads: "number" == typeof t ? t : s || 0
					}
				},
				y = e => ({
					number_channels: Object(l.q)(e)
				}),
				S = e => ({
					number_pending_invites: Object(l.p)(e)
				}),
				w = (e, t) => ({
					message_type: Object(u.e)(e, t) || "text"
				}),
				N = (e, t) => {
					const n = Object(u.f)(e, t);
					return n && {
						message_type: n.messageData.type
					}
				},
				T = (e, t, n) => {
					const s = Object(d.a)(e, t);
					return {
						user_added_method: n || (s || null)
					}
				},
				A = e => {
					let t = !1;
					const n = Object(d.e)(e),
						s = Object(l.e)(e);
					return n && n.length && s && s.length && (t = !!s.find(e => o()(r()(n.sort(), e.sort())))), {
						existing_channel: t
					}
				},
				M = e => {
					const t = Object(l.l)(e);
					return {
						invitation_id: t ? t.channelSendbirdUrl : null
					}
				},
				k = (e, t) => {
					if (t) return {
						invitation_type: t
					};
					const n = Object(l.l)(e),
						s = n && m(n.type);
					return s && {
						invitation_type: s
					}
				},
				D = e => {
					const t = Object(l.l)(e);
					return {
						invitation_timestamp: t ? t.createdAt : null
					}
				},
				P = e => ({
					blocked_user_id: e || null
				}),
				R = e => ({
					reported_user_id: e || null
				}),
				L = e => {
					const t = Object(l.l)(e),
						n = !(!t || t.type !== i.a.Direct),
						s = Object(l.r)(e),
						a = s && s.length && s[0].id;
					return {
						recipient_user_id: n ? a : null
					}
				},
				U = (e, t) => {
					const n = Object(d.b)(e, t);
					return {
						recipient_user_id: n ? n.id : null
					}
				},
				B = e => {
					const t = Object(d.j)(e);
					return {
						recipient_user_id: 1 === t.length ? t[0] : null
					}
				},
				F = e => ({
					is_member: Object(l.K)(e)
				}),
				H = e => {
					const t = Object(l.k)(e);
					return t && {
						shown_history: !!t.lastMessage
					}
				},
				G = e => ({
					message_id: e
				}),
				V = e => ({
					report_reason: e
				}),
				W = (e, t) => {
					const n = Object(u.c)(e, t);
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
			var s = n("./src/config.ts"),
				a = n("./src/chat/constants/container.ts"),
				r = n("./src/chat/selectors/telemetry.ts");
			const c = e => ({
					app: {
						name: e.meta.isRedesign || e.container.size === a.a.FULL ? s.a.telemetry.appName.chat2x : s.a.telemetry.appName.chatR2
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
			var s = n("./src/telemetry/index.ts"),
				a = n("./src/chat/helpers/errors.ts");
			const r = e => {
				if (e.session && e.session.id) try {
					Object(s.a)(e)
				} catch (t) {
					Object(a.b)(`Error sending telemetry event: ${t}`)
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
		"./src/graphql/operations/ReportChatMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"fd819ca5f0fa"}')
		},
		"./src/graphql/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"404920cc0308"}')
		},
		"./src/graphql/operations/SearchChatGifs.json": function(e) {
			e.exports = JSON.parse('{"id":"01a298f0be11"}')
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
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
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js");

			function a(e, t) {
				const n = Object(s.useCallback)(n => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(n.target) || t(n))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return window.addEventListener("click", n), () => {
						window.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				a = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const c = Object(s.freeze)({
				modifiers: []
			});

			function o(e) {
				let t = "object" == typeof e ? e : c;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", c.modifiers)), t
			}

			function i(e) {
				const [t, n] = Object(a.useState)(null), [c, i] = Object(a.useState)(null), [l, d] = Object(a.useState)(null), [u, h] = Object(a.useState)(!1), m = Object(a.useCallback)(async () => h(!0), []), p = Object(a.useCallback)(() => h(!1), []), b = Object(a.useCallback)(() => h(!u), [u]), f = Object(a.useMemo)(() => {
					const t = o(e);
					return l ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: l
						}
					})) : t
				}, [l, e]), {
					attributes: g,
					styles: O,
					update: C
				} = Object(r.a)(t, c, f);
				return Object(a.useMemo)(() => ({
					arrowProps: {
						ref: d,
						style: O.arrow,
						...g.arrow
					},
					hide: p,
					popperProps: {
						ref: i,
						style: O.popper,
						...g.popper
					},
					show: m,
					target: {
						element: t,
						ref: n
					},
					toggle: b,
					visible: u,
					update: C
				}), [d, g, i, p, m, O, t, n, b, u, C])
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
				return f
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return v
			}));
			var s = n("./node_modules/linkify-it/index.js"),
				a = n.n(s),
				r = n("./node_modules/tlds/index.js"),
				c = n.n(r),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./node_modules/lodash/values.js"),
				l = n.n(i);
			const d = e => l()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				h = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				m = a()().tlds(c.a).set({
					fuzzyIP: !0
				}),
				p = a()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				b = h(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				f = h(a()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				g = a()().tlds(c.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				O = a()().tlds(c.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subredditFullUrl.config).add(o.g.subredditFull.prefix, o.g.subredditFullUrl.config),
				C = m.normalize;
			m.normalize = e => {
				C.call(m, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const E = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				j = e => {
					return [...f.match(e) || [], ...p.match(e) || []].map(e => !d(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				v = e => {
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
			var s = n("./src/lib/localStorageAvailable/index.ts"),
				a = n("./src/lib/notifications/constants.ts"),
				r = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const c = async (e, t, n, c, o, i) => {
				if (Object(s.a)()) {
					const t = localStorage.getItem(a.h),
						n = (new Date).getTime();
					if (!e && t && parseInt(t) + a.i > n) return void i();
					localStorage.setItem(a.h, n.toString())
				}
				const l = Object(r.a)();
				if (l === a.c.BrowserUnsupported || l === a.c.LocalStorageUnavailable || l === a.c.NotAllRequiredAPIsSupported) return void i();
				if ("denied" === Notification.permission) return c(!1, !1), void i();
				if ("granted" === Notification.permission) return o(!1), void i();
				const d = localStorage.getItem(a.f);
				if (t || !d || d !== a.g) switch (n(), await Notification.requestPermission()) {
					case "granted":
						o(!0);
						break;
					case "denied":
						c(!0, !0);
						break;
					default:
						c(!0, !1), localStorage.setItem(a.f, a.g)
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
			var s = n("./src/config.ts"),
				a = n("./src/graphql/operations/RegisterWebPushToken.json"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/serviceWorker/index.ts"),
				o = n("./src/lib/timezone/index.ts"),
				i = e => {
					const t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"),
						n = window.atob(t),
						s = new Uint8Array(n.length);
					for (let a = 0; a < n.length; ++a) s[a] = n.charCodeAt(a);
					return s
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
							applicationServerKey: i(s.a.pushNotificationApplicationServerKey)
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
							...a,
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
				return a
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = "/sw.js";
			async function a(e) {
				if ("undefined" != typeof window && "serviceWorker" in navigator) return navigator.serviceWorker.register(s, e)
			}
			const r = (e, t) => {
				navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
					command: e,
					payload: t
				})
			}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)(() => n.e("ReportFlow").then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(s.a)(() => n.e("ReportFlow").then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				c = Object(s.a)(() => n.e("ReportFlow").then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				defaultAvatar: "_8gjnVWVhueS_hMv9By4wh"
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				i = n.n(o);
			t.a = ({
				className: e,
				style: t = {},
				userId: n
			}) => {
				const {
					processingAvatarImageUrl: a
				} = s.a, o = `url(${a}/defaults/avatar_default_${(e=>{let t=0;for(const n of e)t+=n.charCodeAt();return t%8})(n)}.png)`;
				return r.a.createElement("div", {
					className: Object(c.a)(i.a.avatar, e),
					style: {
						...t,
						backgroundImage: o
					}
				})
			}
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const c = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				o = Object(s.createContext)(c);

			function i(e) {
				const t = t => a.a.createElement(o.Consumer, null, ({
					apiContext: n,
					gqlContext: s
				}) => a.a.createElement(e, r({
					apiContext: n,
					gqlContext: s
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/layout/row/Inline/index.m.less"),
				r = n.n(a);
			t.a = s.a.div("inlineRow", r.a)
		},
		"./src/reddit/models/ReportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			}));
			var s, a, r;
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(s || (s = {})),
			function(e) {
				e.HARASSMENT_AT_ME = "HARASSMENT_AT_ME", e.HARASSMENT_AT_SOMEONE_ELSE = "HARASSSOMEONE_ELSENT_AT_ME", e.VIOLENCE_AT_ME = "VIOLENCE_AT_ME", e.VIOLENCE_AT_SOMEONE_ELSE = "VIOLENCE_AT_SOMEONE_ELSE", e.HATE_CONTENT = "HATE_CONTENT", e.MINOR_SEXUALIZATION = "HARASSMENT_AT_ME", e.PII_ABOUT_ME = "PII_ABOUT_ME", e.PII_ABOUT_SOMEONE_ELSE = "PII_ABOUT_SOMEONE_ELSE", e.INVOLUNTARY_PORN_SELF = "INVOLUNTARY_PORN_SELF", e.INVOLUNTARY_PORN_OTHER = "INVOLUNTARY_PORN_OTHER", e.PROHIBITED_SALES = "PROHIBITED_SALES", e.REPORT_BUTTON_ABUSE = "REPORT_BUTTON_ABUSE", e.IMPERSONATION_SELF = "IMPERSONATION_SELF", e.IMPERSONATION_OTHER = "IMPERSONATION_OTHER", e.COPYRIGHT_SELF = "COPYRIGHT_SELF", e.COPYRIGHT_OTHER = "COPYRIGHT_OTHER", e.TRADEMARK_SELF = "TRADEMARK_SELF", e.TRADEMARK_OTHER = "TRADEMARK_OTHER", e.NETZDG = "NETZDG", e.SELF_HARM = "SELF_HARM", e.SPAM_LINK_FARMING = "SPAM_LINK_FARMING", e.SPAM_UNSOLICITED_PMS = "SPAM_UNSOLICITED_PMS", e.SPAM_COMMENT_FLOODING = "SPAM_COMMENT_FLOODING", e.SPAM_MALWARE = "SPAM_MALWARE", e.SPAM_BOTS = "SPAM_BOTS", e.MISINFORMATION_HEALTH = "MISINFORMATION_HEALTH", e.MISINFORMATION_POLITICS = "MISINFORMATION_POLITICS", e.MISINFORMATION_FABRICATION = "MISINFORMATION_FABRICATION", e.MISINFORMATION_CONSPIRACY = "MISINFORMATION_CONSPIRACY", e.BAN_EVASION = "BAN_EVASION", e.VOTE_MANIPULATION = "VOTE_MANIPULATION"
			}(a || (a = {})),
			function(e) {
				e.R2 = "R2"
			}(r || (r = {}));
			const c = new Set(Object.values(r))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Chat~RedesignChat.1debee0daa1733e5e6ce.js.map