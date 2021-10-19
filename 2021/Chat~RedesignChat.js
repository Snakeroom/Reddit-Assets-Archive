// https://www.redditstatic.com/desktop2x/Chat~RedesignChat.93586e10bed40208340a.js
// Retrieved at 10/19/2021, 5:20:10 PM by Reddit Dataminer v1.0.0
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
				return F
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "d", (function() {
				return V
			})), n.d(t, "q", (function() {
				return z
			})), n.d(t, "p", (function() {
				return W
			})), n.d(t, "r", (function() {
				return K
			})), n.d(t, "h", (function() {
				return Z
			})), n.d(t, "c", (function() {
				return q
			})), n.d(t, "v", (function() {
				return Q
			})), n.d(t, "w", (function() {
				return J
			})), n.d(t, "x", (function() {
				return X
			})), n.d(t, "u", (function() {
				return Y
			})), n.d(t, "k", (function() {
				return $
			})), n.d(t, "l", (function() {
				return ee
			})), n.d(t, "i", (function() {
				return te
			})), n.d(t, "j", (function() {
				return ne
			})), n.d(t, "a", (function() {
				return ae
			})), n.d(t, "b", (function() {
				return se
			})), n.d(t, "t", (function() {
				return re
			})), n.d(t, "s", (function() {
				return ce
			})), n.d(t, "n", (function() {
				return oe
			})), n.d(t, "o", (function() {
				return ie
			})), n.d(t, "m", (function() {
				return le
			})), n.d(t, "J", (function() {
				return de
			})), n.d(t, "I", (function() {
				return ue
			})), n.d(t, "y", (function() {
				return me
			})), n.d(t, "B", (function() {
				return pe
			})), n.d(t, "Q", (function() {
				return Oe
			})), n.d(t, "P", (function() {
				return Ce
			})), n.d(t, "O", (function() {
				return _e
			})), n.d(t, "L", (function() {
				return Se
			})), n.d(t, "H", (function() {
				return we
			})), n.d(t, "A", (function() {
				return Pe
			})), n.d(t, "z", (function() {
				return Le
			})), n.d(t, "F", (function() {
				return De
			})), n.d(t, "N", (function() {
				return Ue
			})), n.d(t, "M", (function() {
				return Fe
			})), n.d(t, "C", (function() {
				return qe
			})), n.d(t, "D", (function() {
				return Je
			})), n.d(t, "E", (function() {
				return Xe
			})), n.d(t, "K", (function() {
				return $e
			})), n.d(t, "G", (function() {
				return et
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				r = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/config.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/chat/actions/gifs/index.ts"),
				l = n("./src/chat/actions/members.ts"),
				d = n("./src/chat/actions/message/index.ts"),
				u = n("./src/chat/actions/message/unreadCount.ts"),
				h = (n("./src/chat/actions/platform.ts"), n("./src/chat/actions/sidebar.ts")),
				m = n("./src/chat/actions/toast.ts"),
				p = n("./src/chat/actions/tracking.ts"),
				b = n("./src/chat/actions/user.ts"),
				g = n("./src/chat/constants/batchSizes.ts"),
				f = n("./src/chat/constants/channels.ts"),
				O = n("./src/chat/constants/messages.ts"),
				E = n("./src/chat/constants/sendbird.ts"),
				C = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				j = n("./src/lib/makeGqlRequest/index.ts"),
				v = n("./src/redditGQL/operations/DeclineChatChannelInvite.json"),
				_ = n("./src/redditGQL/operations/LeaveChatChannel.json");
			var I = n("./src/chat/endpoints/sendbird/index.ts"),
				x = n("./src/chat/helpers/errors.ts"),
				y = n("./src/chat/helpers/urls/index.ts"),
				S = n("./src/chat/models/Channel/index.ts"),
				w = n("./src/chat/models/Channel/utils.ts"),
				N = n("./src/chat/models/User/inviter.ts"),
				T = n("./src/chat/models/User/member.ts");
			var M = n("./src/chat/selectors/channels.ts");
			const k = (e, t) => {
					const {
						channels: n
					} = e;
					let a;
					if (t) {
						const e = n.invited.sortedKeys.indexOf(t);
						a = n.invited.sortedKeys[e + 1]
					} else a = n.invited.sortedKeys[0];
					return {
						channelId: a,
						channelAction: f.a.VIEW_INVITE
					}
				},
				A = e => {
					const {
						channels: t
					} = e;
					return {
						channelId: t.joined.sortedKeys[0]
					}
				},
				P = e => [k(e), A(e)],
				L = e => {
					const t = Object(M.m)(e);
					return {
						channelId: t && t.channelId
					}
				},
				D = e => e.find(e => !!e.channelId);
			var U = n("./src/chat/selectors/experiments.ts"),
				R = n("./src/chat/selectors/platform.ts"),
				B = n("./src/chat/singleton/SendbirdSDK.ts");
			const F = "CHANNEL__ADD_SUCCESS",
				H = "CHANNEL__ADD_FAIL",
				G = "CHANNEL__CREATE_CHANNEL_START",
				V = "CHANNEL__CREATE_CHANNEL_END",
				z = "CHANNEL__SELECT_BEGIN",
				W = "CHANNEL__RESET_UNREAD_COUNT",
				K = "CHANNEL__SELECT_END",
				Z = "CHANNEL__EXPAND_INVITE_LIST",
				q = "CHANNEL__COLLAPSE_INVITE_LIST",
				Q = "CHANNEL__UPDATE_MODEL",
				J = "CHANNEL__INVITED_UPDATE",
				X = "CHANNEL__JOINED_UPDATE",
				Y = "CHANNEL__SET_UPDATED_CHANNEL_ON_TOP",
				$ = "CHANNEL__FETCHING_JOINED_CHANNELS",
				ee = "CHANNEL__FETCHING_JOINED_CHANNELS_FAILED",
				te = "CHANNEL__FETCHING_INVITED_CHANNELS",
				ne = "CHANNEL__FETCHING_INVITED_CHANNELS_FAILED",
				ae = "CHANNEL__ADD_EXISTING_INVITED_CHANNELS",
				se = "CHANNEL__ADD_EXISTING_JOINED_CHANNELS",
				re = "CHANNEL__SET_INVITED_CHANNEL_TO_JOINED",
				ce = "CHANNEL__SET_EXISTING_CHANNELS_END",
				oe = "CHANNEL__REMOVE_CHANNEL",
				ie = "CHANNEL__RESET_CHANNEL_MESSAGE_LIST",
				le = "CHANNEL__FETCH_FIRST_MESSAGE",
				de = Object(o.a)(oe),
				ue = e => async t => {
					t(de({
						channelId: e
					}))
				}, he = Object(o.a)(re), me = e => async (t, n, {
					apiContext: a
				}) => {
					const s = n(),
						{
							user: {
								session: c
							}
						} = s;
					if (!e) throw new x.a("accepted channelId", e);
					if (!c) throw new x.a("session", c);
					const o = Object(M.m)(s),
						i = o && o.firstMessageId,
						l = !!(o && i && o.hasMoreMessages);
					await Object(I.a)(a(), c, e), l && t(Object(d.u)(i)), t(he({
						channelId: e
					}));
					const u = Object(y.getRedirectURL)(Object(y.channelUrl)(e));
					t(Object(r.b)(u))
				}, pe = (e, t, n) => async (a, s, {
					gqlContext: r
				}) => {
					var c, o, i;
					const l = s(),
						{
							user: {
								session: d
							}
						} = l;
					if (!Object(M.h)(l, e) || !t) return;
					if (!d) throw new x.a("session", d);
					const h = Object(U.h)(l),
						p = Object(U.j)(l),
						b = {
							channelSendbirdId: e,
							inviterUserId: t.id,
							shouldBlockInviter: !n && (h || p),
							shouldReportInviter: !n && p
						},
						g = await ((e, t) => Object(j.a)(e, {
							...v,
							variables: t
						}))(r(), {
							input: b
						});
					if ((null === (o = null === (c = g.error) || void 0 === c ? void 0 : c.fields) || void 0 === o ? void 0 : o.length) || (e => Boolean(e && e.data && e.data.declineChatChannelInvite))(g.body) && (null === (i = g.body.data.declineChatChannelInvite.errors) || void 0 === i ? void 0 : i.length)) return a(Object(m.e)()), Object(x.b)(`Error declining invite: ${g.error}`);
					a(Object(u.c)()), await a(Ue(f.b.INVITED, e)), a((e => async t => t(ue(e)))(e))
				}, be = Object(o.a)(J), ge = Object(o.a)(X), fe = Object(o.a)(Q), Oe = e => async t => {
					t(fe({
						channel: e
					}))
				}, Ee = e => async t => {
					await t(be({
						channel: e
					})), t((e => async (t, n) => {
						const a = n().user.account.id,
							s = e.members.filter(e => e.id !== a).map(e => e.id);
						t(Object(b.v)(s))
					})(e))
				}, Ce = (e, t) => async (n, a) => {
					if (e) {
						const r = a(),
							c = Object(M.h)(r, e.channelId);
						if (e.channelState !== f.b.INVITED && !c || t) return;
						if (e = je(r, e), s()(e, c)) return;
						switch (e.channelState) {
							case f.b.INVITED:
								await n(Ee(e));
								break;
							case f.b.JOINED:
								await n(ge({
									channel: e
								}));
								break;
							default:
								Object(x.b)("Error updating channel. ChannelState not found.")
						}
						n(Object(u.c)())
					}
				}, je = (e, t) => {
					return Object(R.d)(e) === t.channelId && (t.unreadMessageCount = 0), t
				}, ve = Object(o.a)(Y), _e = e => async t => {
					const {
						channelId: n
					} = e;
					t(ve({
						channelId: n
					}))
				}, Ie = Object(o.a)(W), xe = Object(o.a)(z), ye = Object(o.a)(K), Se = () => async (e, t) => {
					const n = t(),
						a = Object(R.d)(n),
						s = Object(R.c)(n),
						{
							CREATE: c,
							DENY: o,
							VIEW_JOIN: u,
							SHARE: m
						} = f.a;
					if (!n.platform.currentPage) return;
					a && (await e(Object(h.d)(a)), e(Object(h.f)(!1))), await e(Object(l.f)()), e(Object(i.i)());
					const p = a && Object(M.h)(n, a);
					if (!p && (s === o || s === c || s === m)) return;
					const b = !(!p || p.channelState !== f.b.JOINED);
					if (p && b && s && f.h.includes(s)) {
						const t = Object(y.getRedirectURL)(Object(y.channelUrl)(p.channelId));
						e(Object(r.b)(t))
					} else if (p && a) {
						e(xe({
							channelId: a
						}));
						const t = await B.a.enterChannel(p, !1);
						if (t && !t.error) {
							const {
								messageListData: n
							} = t.data;
							await e(Object(d.p)(n, p.channelId)), await e(ye()), e(we(a))
						} else e(Object(d.D)()), e(ye())
					} else {
						const t = n.sendbird.sdk.connectionStatus === E.b.Open;
						if (!p && a && t) {
							const t = await B.a.addChannelModelByChannelId(a);
							if (t && !s) {
								const n = Object(y.getRedirectURL)(Object(y.channelAction)(t.channelId, u));
								return void e(Object(r.b)(n))
							}
						}
						e(Fe()), e(Object(d.D)())
					}
				}, we = e => async (t, n) => {
					const a = n(),
						s = e || Object(R.d)(a);
					s && (await t(Ie(s)), await B.a.markChannelAsRead(), t(Object(u.c)()))
				}, Ne = Object(o.a)(G), Te = Object(o.a)(F), Me = Object(o.a)(H), ke = Object(o.a)(V), Ae = (e, t, n) => {
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
				}, Pe = (e, t, n) => async (a, s, {
					apiContext: c
				}) => {
					const o = s(),
						{
							user: {
								account: i,
								session: l
							},
							contacts: {
								models: u
							},
							channels: {
								joined: h,
								invited: m
							}
						} = o;
					if (i && l) {
						a(Ne());
						const s = Ae(e, u, i);
						if (s.length < 2) return;
						const o = await Object(I.b)(c(), l, s, t);
						if (o.ok) {
							const e = function(e, t) {
									return {
										channelId: Object(w.e)(e.channel_url),
										channelSendbirdUrl: e.channel_url,
										channelState: Object(w.b)(t),
										fetchingFirstMessage: !1,
										fetchingMessages: !1,
										fetchingMessagesError: !1,
										hasMoreMessages: !1,
										isMessageListLoaded: !1,
										inviter: Object(N.b)(e.inviter),
										coverUrl: e.cover_url,
										createdAt: e.created_at,
										customType: e.custom_type,
										data: e.data,
										maxLengthMessage: -1,
										memberCount: e.member_count,
										name: e.name,
										type: Object(w.d)(e),
										lastMessage: void 0,
										unreadMessageCount: e.unread_message_count,
										unreadMentionCount: e.unread_mention_count,
										members: Object(T.a)(e.members)
									}
								}(o.body, f.b.JOINED),
								{
									channelId: t
								} = e,
								s = Object(y.getRedirectURL)(Object(y.channelUrl)(t));
							m.sortedKeys.includes(t) ? (a(me(t)), a(Object(p.m)(t))) : h.sortedKeys.includes(t) ? (a(Object(r.b)(s)), a(Object(p.m)(t))) : (await a(Te({
								[t]: e
							})), a(Object(p.m)(t)), await a(Object(r.b)(s))), n && (await B.a.enterChannel(e), await a(Object(d.r)(t, n, O.c.TEXT)))
						} else a(Me()), a(Object(p.T)(e));
						a(ke())
					}
				}, Le = e => async t => {
					e = e.slice(0, 1), await t(Object(b.v)(e)), t(Pe(e)), location.origin === c.a.oldRedditUrl && t(Object(p.n)(e))
				}, De = e => async (t, n, {
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
						l = Object(M.B)(s, "channelSendbirdUrl"),
						d = Object(R.c)(s);
					if (c && o) {
						const n = Ae(e, i);
						(await Object(I.i)(a(), o, n, l)).body && d === f.a.INVITE_MEMBERS ? (t(Object(p.d)()), t(Object(r.a)())) : Object(x.b)("Error inviting user to existing channel")
					}
				}, Ue = (e, t) => async (n, a) => {
					const s = a(),
						r = e === f.b.INVITED,
						c = k(s, t),
						o = A(s);
					r ? c.channelId ? n(Be(c)) : n(Be(o)) : o.channelId ? n(Be(o)) : n(Re())
				}, Re = () => async (e, t) => {
					const n = t();
					if (n.channels.firstLoaded) {
						const t = ((e, t) => {
							const n = [...t ? [L(e)] : [], ...P(e)];
							return D(n)
						})(n, !!n.platform.currentPage);
						e(Be(t))
					}
				}, Be = e => async t => {
					if (e && e.channelId) {
						if (e.channelAction) {
							const n = Object(y.getRedirectURL)(Object(y.channelAction)(e.channelId, e.channelAction));
							t(Object(r.c)(n))
						} else {
							const n = Object(y.getRedirectURL)(Object(y.channelUrl)(e.channelId));
							t(Object(r.c)(n))
						}
						return
					}
					const n = Object(y.getRedirectURL)(y.rootUrl);
					t(Object(r.c)(n))
				}, Fe = e => async (t, n) => {
					const {
						platform: {
							currentPage: a
						}
					} = n();
					if (a && a.urlParams.userIds) {
						const e = a.urlParams.userIds.split(",");
						return t(Le(e))
					}
					if (e) return t(Ue(e));
					const s = Object(C.b)(n());
					if (s) {
						const e = Object(M.h)(n(), s);
						if (e) {
							const n = Object(y.getChannelUrl)(e),
								a = Object(y.getRedirectURL)(n);
							return void t(Object(r.b)(a))
						}
					}
					return t(Re())
				}, He = Object(o.a)(te), Ge = Object(o.a)(ne), Ve = Object(o.a)($), ze = Object(o.a)(ee), We = Object(o.a)(ae), Ke = Object(o.a)(se), Ze = Object(o.a)(ce), qe = () => async (e, t) => {
					await Promise.all([e(Ye()), e(Je()), e(Xe())]).catch(x.b);
					const n = t().channels.models;
					await e(Qe(n)), e(Ze()), e(Se())
				}, Qe = e => async t => {
					const n = Object(w.c)(e, [S.a.Direct, S.a.Group]);
					if (!n) return;
					const a = {};
					for (const e in n) {
						const t = n[e];
						t.channelState !== f.b.PARTIAL && (a[t.channelId] = t)
					}
					if (a) {
						const e = [];
						for (const t in a) a[t].members.map(t => e.push(t.id));
						t(Object(b.v)(e))
					}
				}, Je = () => async (e, t) => {
					e(He());
					const n = await B.a.getExistingChannels(f.b.INVITED).catch(() => null);
					if (n) {
						const {
							hasMoreChannels: t
						} = n, a = Object(S.f)(n.channels);
						return e(Qe(a)), void e(We({
							channels: a,
							hasMoreChannels: t
						}))
					}
					e(Ge()), Object(x.b)("Error fetching invited channels")
				}, Xe = () => async (e, t) => {
					e(Ve());
					const n = await B.a.getExistingChannels(f.b.JOINED).catch(t => {
						Object(x.b)(t), e(ze())
					});
					if (n) {
						const {
							hasMoreChannels: a
						} = n, s = Object(S.f)(n.channels), r = Object(M.v)(t());
						return e(Ke({
							channels: s,
							hasMoreChannels: a
						})), void(a && r < g.a.InitChannels && e(Xe()))
					}
					e(ze())
				}, Ye = () => async (e, t) => {
					const n = t(),
						a = Object(R.d)(n);
					a && await B.a.addChannelModelByChannelId(a)
				}, $e = (Object(o.a)(Z), Object(o.a)(q), Object(o.a)(ie)), et = e => async (t, n, {
					gqlContext: a
				}) => {
					var s, r, c;
					const o = n(),
						i = Object(M.B)(o, "channelState");
					t(Object(p.C)());
					const l = {
							channelSendbirdId: e
						},
						d = await ((e, t) => Object(j.a)(e, {
							..._,
							variables: t
						}))(a(), {
							input: l
						});
					if ((null === (r = null === (s = d.error) || void 0 === s ? void 0 : s.fields) || void 0 === r ? void 0 : r.length) || (e => Boolean(e && e.data && e.data.leaveChatChannel))(d.body) && (null === (c = d.body.data.leaveChatChannel.errors) || void 0 === c ? void 0 : c.length)) return t(Object(m.e)()), Object(x.b)(`Error leaving channels: ${d.error}`);
					await t(Ue(i, e)), t(ue(e))
				}
		},
		"./src/chat/actions/channel/dropdown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return E
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "f", (function() {
				return N
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
				p = n("./src/chat/selectors/experiments.ts"),
				b = n("./src/chat/singleton/SendbirdSDK.ts");
			const {
				INVITE_MEMBERS: g,
				LEAVE: f,
				VIEW_MEMBERS: O
			} = l.a, E = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(m.x)(n),
					r = Object(h.getRedirectURL)(Object(h.channelAction)(s, g));
				e(Object(a.b)(r))
			}, C = e => async t => {
				t(Object(c.b)()), t(Object(o.c)({
					tooltipId: e
				})), t(Object(i.X)())
			}, j = e => async t => {
				e && (t(Object(i.s)()), window.open(Object(h.viewProfileUrl)(e)))
			}, v = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(m.x)(n),
					r = Object(h.getRedirectURL)(Object(h.channelAction)(s, O));
				e(Object(i.bb)()), e(Object(a.b)(r))
			}, _ = "CHANNEL__UPDATE_CHANNEL_NAME", I = Object(s.a)(_), x = e => async (t, n) => {
				const a = Object(m.x)(n());
				if (a) {
					const n = {
							...a,
							name: e
						},
						s = {
							...a
						};
					t(I(n)), await b.a.updateChannel(n).catch(e => {
						Object(u.b)(e), t(I(s))
					})
				}
			}, y = ({
				channelId: e
			}) => async () => {
				b.a.setMyCountPreference(e, l.c.Off).catch(u.b)
			}, S = ({
				channelId: e
			}) => async () => {
				b.a.setMyCountPreference(e, l.c.All).catch(u.b)
			}, w = e => async (t, n, {
				apiContext: a
			}) => {
				const s = n(),
					c = Object(p.i)(s);
				t(Object(i.I)()), await Promise.all([Object(d.l)(a(), e, c), b.a.setPushPreference(e, !0)]).then(() => {
					const n = Object(m.h)(s, e);
					n && t(Object(r.P)({
						...n,
						isNotifsMuted: !0
					}))
				}).catch(u.b)
			}, N = e => async (t, n, {
				apiContext: a
			}) => {
				const s = n(),
					c = Object(p.i)(s);
				t(Object(i.S)()), await Promise.all([Object(d.m)(a(), e, c), b.a.setPushPreference(e, !1)]).then(() => {
					const n = Object(m.h)(s, e);
					n && t(Object(r.P)({
						...n,
						isNotifsMuted: !1
					}))
				}).catch(u.b)
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
						r = Object(s.r)(a, e);
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
						if (n.data.errors) t(d({
							errors: n.data.errors
						}));
						else {
							const a = n.data.experimentVariants.map(e => ({
								...e,
								isOverride: !1
							}));
							t(i({
								data: a,
								queryParams: e
							}))
						}
					}
				}
		},
		"./src/chat/actions/gifs/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "i", (function() {
				return w
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/actions/toast.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/GetTrendingChatGifs.json"),
				o = n("./src/redditGQL/operations/SearchChatGifs.json");
			var i = n("./src/chat/selectors/gifs.ts");
			const l = "GIF__SET_SEARCH_QUERY",
				d = "GIF__FETCH_TRENDING_START",
				u = "GIF__FETCH_TRENDING_SUCCESS",
				h = "GIF__FETCH_TRENDING_ERROR",
				m = "GIF__SEARCH_START",
				p = "GIF__SEARCH_SUCCESS",
				b = "GIF__SEARCH_ERROR",
				g = "GIF__CLEAR_ERROR",
				f = Object(a.a)(d),
				O = Object(a.a)(u),
				E = Object(a.a)(h),
				C = Object(a.a)(l),
				j = Object(a.a)(m),
				v = Object(a.a)(p),
				_ = Object(a.a)(b),
				I = Object(a.a)(g),
				x = e => async (t, n, {
					gqlContext: a
				}) => {
					const o = n(),
						l = Object(i.g)(o),
						d = Object(i.c)(o);
					if (!l || d) {
						t(f()), t(C(""));
						const n = await ((e, t) => Object(r.a)(e, {
							...c,
							variables: t
						}))(a(), {
							first: e
						});
						if ((null == n ? void 0 : n.ok) && !(null == n ? void 0 : n.error)) {
							const e = n.body,
								a = S(e);
							t(O(a))
						} else t(Object(s.e)()), t(E())
					}
				}, y = (e, t) => async (n, a, {
					gqlContext: c
				}) => {
					var l, d;
					if (!t) return;
					const u = a(),
						h = Object(i.c)(u),
						m = Object(i.b)(u),
						p = t === m,
						b = p ? null === (l = u.gifs.search.models[t]) || void 0 === l ? void 0 : l.pageInfo.endCursor : "";
					if ((null === (d = u.gifs.search.models[t]) || void 0 === d ? void 0 : d.ids.length) && !h && !p) n(C(t));
					else if (Object(i.e)(u) || !b) {
						h && n(I(t)), n(j({
							query: t,
							cursor: b
						}));
						const a = await ((e, t) => Object(r.a)(e, {
							...o,
							variables: t
						}))(c(), {
							first: e,
							query: t,
							after: b
						});
						if ((null == a ? void 0 : a.ok) && !(null == a ? void 0 : a.error)) {
							const e = a.body,
								s = S(e, t);
							n(v({
								cursor: b,
								gifsData: s
							}))
						} else n(Object(s.e)()), n(_({
							cursor: b,
							query: t
						}))
					}
				}, S = (e, t = "") => {
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
				}, w = () => async (e, t) => {
					Object(i.b)(t()) && e(C(""))
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
				return O
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "f", (function() {
				return _
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
						r = Object(l.n)(s);
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
							n(C(r, t, e))
						} else n(p())
					}
				}, g = "MEMBERS__FETCHING_MEMBERS_COMPLETED", f = Object(r.a)(g), O = "MEMBERS__ADD_CHANNEL_MEMBERS", E = Object(r.a)(O), C = (e, t, n) => async (a, r, {
					gqlContext: o
				}) => {
					const l = t.map(e => e.userId),
						u = await Object(c.b)(o(), {
							ids: l
						});
					if (u.ok && Object(c.c)(u.body)) {
						const n = r(),
							c = Object(i.b)(u.body.data.redditorsInfoByIds);
						if (!c) return;
						const o = t.reduce((e, t) => {
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
				}, j = "MEMBERS__REMOVE_CHANNEL_MEMBERS", v = Object(r.a)(j), _ = () => async e => {
					e(v())
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
				const a = Object(o.y)(n()),
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
				return U
			})), n.d(t, "o", (function() {
				return B
			})), n.d(t, "q", (function() {
				return F
			})), n.d(t, "s", (function() {
				return H
			})), n.d(t, "r", (function() {
				return G
			})), n.d(t, "A", (function() {
				return V
			})), n.d(t, "m", (function() {
				return z
			})), n.d(t, "k", (function() {
				return K
			})), n.d(t, "z", (function() {
				return Z
			})), n.d(t, "i", (function() {
				return J
			})), n.d(t, "x", (function() {
				return Y
			})), n.d(t, "b", (function() {
				return $
			})), n.d(t, "p", (function() {
				return te
			})), n.d(t, "l", (function() {
				return ne
			})), n.d(t, "D", (function() {
				return ae
			})), n.d(t, "d", (function() {
				return se
			})), n.d(t, "u", (function() {
				return re
			})), n.d(t, "t", (function() {
				return ce
			})), n.d(t, "j", (function() {
				return oe
			})), n.d(t, "y", (function() {
				return le
			})), n.d(t, "g", (function() {
				return de
			})), n.d(t, "e", (function() {
				return ue
			})), n.d(t, "f", (function() {
				return he
			})), n.d(t, "v", (function() {
				return ge
			})), n.d(t, "C", (function() {
				return fe
			})), n.d(t, "B", (function() {
				return Oe
			})), n.d(t, "n", (function() {
				return Ee
			})), n.d(t, "E", (function() {
				return je
			})), n.d(t, "h", (function() {
				return ve
			})), n.d(t, "w", (function() {
				return _e
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
				O = e => e && e.length > 0 && e[0] ? e[0].url : void 0,
				E = e => e.filter(e => !m()(e)).map(e => ({
					name: e.provider_name,
					providerDisplay: e.provider_display,
					title: e.title,
					description: e.description,
					faviconUrl: e.favicon_url,
					imageUrl: O(e.images),
					url: e.url
				}));
			var C = n("./src/chat/actions/message/richUnit.ts"),
				j = n("./src/chat/actions/surveyTrigger/index.ts"),
				v = n("./src/chat/endpoints/messages/index.tsx"),
				_ = n("./src/chat/endpoints/sendbird/index.ts"),
				I = n("./src/chat/helpers/errors.ts"),
				x = n("./src/chat/helpers/urls/index.ts"),
				y = n("./src/chat/models/Message/index.ts"),
				S = n("./src/chat/models/Message/adapter.ts"),
				w = n("./src/chat/selectors/app.ts"),
				N = n("./src/chat/selectors/channels.ts"),
				T = n("./src/chat/selectors/contacts.ts"),
				M = n("./src/chat/selectors/messages.ts"),
				k = n("./src/chat/singleton/SendbirdSDK.ts");
			const A = "MESSAGE__ADD_ONE",
				P = Object(o.a)(A),
				L = (e, t, n) => async (a, s) => {
					const r = s(),
						c = Object(S.b)(n),
						o = await D(t, r);
					return k.a.addMessage(t, n, o).then(t => {
						const n = {
							[t.messageId]: t
						};
						return a(P({
							message: n,
							channelId: e,
							clientMessageId: c
						})), a(Object(d.P)(t)), a(Object(C.c)(t)), t.messageId
					}).catch(e => {
						if (c) {
							const t = `${e.code}: ${e.message}`;
							a(Object(d.W)(c, t)), a(W({
								clientMessageId: c,
								toggle: !0
							}))
						}
						return null
					})
				}, D = async (e, t) => {
					const n = Object(c.d)(e);
					if (!n.length) return [];
					const a = [];
					return [...n.map(e => {
						const n = Object(T.f)(t, e);
						return n || a.push(e), n && n.id
					}).filter(e => e), ...(a.length && s()(await Promise.all(a.slice(0, 3).map(e => k.a.searchMemberByName(e, !0)))) || []).map(e => e && e.id).filter(e => e)]
				}, U = "MESSAGE__ADD_PENDING_ONE", R = Object(o.a)(U), B = (e, t) => async (n, a, {
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
						o = Object(y.b)(r, e, JSON.stringify(c), u.c.GIF);
					await n(R(o));
					const i = {
						channelId: e,
						messageData: o.data,
						message: t.downsized.url
					};
					if (!(await Object(v.a)(s(), {
							input: i
						})).ok) {
						const {
							clientMessageId: e
						} = o;
						n(Object(d.W)(e)), n(W({
							clientMessageId: e,
							toggle: !0
						}))
					}
				}, F = (e, t) => async (n, a, {
					gqlContext: s
				}) => {
					const r = a(),
						c = Object(y.b)(r, e, JSON.stringify({
							is_hidden: !0,
							image: {}
						}), u.c.IMAGE, t.id);
					n(R(c));
					const o = {
							channelId: e,
							messageData: c.data,
							message: t.metadata.localUrl,
							messageType: u.c.IMAGE.toUpperCase()
						},
						i = await Object(v.a)(s(), {
							input: o
						});
					if (i.ok && Object(v.b)(i.body)) {
						const {
							message: e
						} = i.body.data.createChatMessage;
						return {
							messageId: Number(e.messageId),
							redditId: e.messageRedditId
						}
					}
				}, H = (e, t, n) => async (a, s) => {
					if (!e.length) return;
					for await (const r of e) {
						const e = Object(N.h)(s(), r);
						(null == e ? void 0 : e.channelId) && (await k.a.enterChannel(e), await a(G(r, t, n)))
					}
					const c = Object(x.getRedirectURL)(Object(x.channelUrl)(e[e.length - 1]));
					a(Object(r.b)(c))
				}, G = (e, t, n) => async (a, s) => {
					var r;
					const o = s(),
						i = c.b.match(t),
						d = 1 === (null == i ? void 0 : i.length) && 1 === t.trim().split(" ").length;
					if (Object(x.isRedditLink)(null === (r = null == i ? void 0 : i[0]) || void 0 === r ? void 0 : r.url) && d) await a(q(e, t));
					else if (d) await a(Q(e, t));
					else {
						const s = Object(y.b)(o, e, t, n);
						a(R(s)), await a(L(e, t, s.data))
					}
					a(Object(l.removeUserIdFormQuickReplyListByChannelId)(e))
				}, V = (e, t) => async (n, a) => {
					const s = a(),
						r = Object(M.f)(s, t);
					r && (n(W({
						clientMessageId: t,
						toggle: !1
					})), await n(L(e, r.messageData.value, r.data)))
				}, z = "MESSAGE__TOGGLE_PENDING_MESSAGE_ERROR", W = Object(o.a)(z), K = "MESSAGE__REMOVE_PENDING_ONE", Z = Object(o.a)(K), q = (e, t) => async (n, a) => {
					const s = a(),
						r = Object(x.getChatUnitType)(t),
						c = Object(y.b)(s, e, t, r.type);
					c && (n(R(c)), await n(L(e, c.messageData.value, c.data)))
				}, Q = (e, t) => async (n, a) => {
					const s = a(),
						r = c.f.match(t);
					if (!r.length || r.length > 1) return Object(I.b)(`We only support 1 link per text but ${r.length} given`);
					const o = r[0].url,
						i = u.c.EMBED;
					let l = {
						url: t
					};
					const d = Object(y.b)(s, e, JSON.stringify(l), i);
					if (d) {
						n(R(d));
						const t = await (async ({
							chars: e,
							scheme: t,
							url: n
						}) => Object(g.b)({
							endpoint: "https://api.embed.ly/1/extract",
							method: b.ib.GET,
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
							await n(L(e, l.url, s))
						}
					}
				}, J = "MESSAGE__RECEIVE_ADD_ONE", X = Object(o.a)(J), Y = e => async (t, n) => {
					const {
						messageId: a,
						messageData: {
							clientMessageId: s
						}
					} = e, r = n(), c = Object(N.y)(r) === e.channelId, o = Object(w.d)(r), l = Object(M.f)(r, s), u = Object(M.b)(r, a);
					o && c && t(Object(i.H)(e.channelId)), l ? (e.createdAt = l.createdAt, t(Object(d.R)(e))) : u && (e.createdAt = u.createdAt), await t(X({
						[a]: e
					})), t(Object(C.c)(e))
				}, $ = "MESSAGE__ADD_LIST", ee = Object(o.a)($), te = (e, t) => async n => {
					n(ee({
						channelId: t,
						...e
					})), n(Object(C.d)(e)), n(Object(j.b)())
				}, ne = "MESSAGE__SET_MESSAGE_LIST_IS_LOADED", ae = Object(o.a)(ne), se = "MESSAGE__DELETE_ONE", re = Object(o.a)(se), ce = e => async (t, n) => {
					const a = n(),
						s = Object(M.b)(a, e);
					s && s.messageType === u.d.USER && k.a.deleteMessage(s).then(() => t(re(s.messageId))).then(() => t(Object(r.a)()))
				}, oe = "MESSAGE__RECEIVE_DELETE_ONE", ie = Object(o.a)(oe), le = e => async (t, n) => {
					t(ie(e))
				}, de = "MESSAGE__GET_PREVIOUS_MESSAGES_START", ue = "MESSAGE__GET_PREVIOUS_MESSAGES_END", he = "MESSAGE__GET_PREVIOUS_MESSAGES_ERROR", me = Object(o.a)(de), pe = Object(o.a)(ue), be = Object(o.a)(he), ge = e => async (t, n) => {
					const a = Object(N.B)(n(), "channelId");
					t(me(a)), t(Object(d.Z)()), a && await k.a.getPreviousMessages(e).then(e => {
						t(pe({
							channelId: a,
							...e
						})), t(Object(C.d)(e))
					}).catch(() => t(be(a)))
				}, fe = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					try {
						await Object(_.h)(s(), t, e)
					} catch (r) {
						Object(I.b)(r)
					}
				}, Oe = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					try {
						await Object(_.c)(s(), t, e)
					} catch (r) {
						Object(I.b)(r)
					}
				}, Ee = "MESSAGE__UNCOLLAPSE", Ce = Object(o.a)(Ee), je = e => async t => {
					t(Ce(e))
				}, ve = "MESSAGE__HIDE_REPORT_PROMPT_FOR_COLLAPSE_MESSAGE", _e = Object(o.a)(ve)
		},
		"./src/chat/actions/message/richUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "f", (function() {
				return _
			}));
			var a = n("./node_modules/lodash/uniq.js"),
				s = n.n(a),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/constants/messages.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/ChatUnitDetails.json");
			var l = n("./src/chat/selectors/richUnits.ts"),
				d = n("./src/lib/constants/index.ts");
			const u = "MESSAGE__UNITS_DATA_RECEIVED",
				h = "MESSAGE__RESET_RICH_UNITS_DATA_RECEIVED",
				m = e => Boolean(e && e.id && e.postInfo && e.postInfo.subreddit && e.authorInfo && e.authorInfo.displayName),
				p = e => Boolean(e && e.id && e.title && e.url && e.authorInfo && e.authorInfo.displayName),
				b = e => Boolean(e && e.id && e.title && e.url && e.redditor && e.redditor.displayName),
				g = e => Boolean(e && e.id && e.title && e.subredditType),
				f = Object(r.a)(u),
				O = (e, t) => {
					var n, a, s, r;
					const o = {
						post: [],
						userPost: [],
						comment: [],
						subreddit: []
					};
					if ((null === (n = null == e ? void 0 : e.messageData) || void 0 === n ? void 0 : n.type) === c.c.POST || (null === (a = null == e ? void 0 : e.messageData) || void 0 === a ? void 0 : a.type) === c.c.COMMENT || (null === (s = null == e ? void 0 : e.messageData) || void 0 === s ? void 0 : s.type) === c.c.SUBREDDIT || (null === (r = null == e ? void 0 : e.messageData) || void 0 === r ? void 0 : r.type) === c.c.USER_POST) {
						const {
							chatUnitId: n,
							type: a
						} = e.messageData;
						!Boolean(Object(l.a)(t, {
							type: a,
							value: n
						})) && o[a].push(n)
					}
					return o
				},
				E = e => async (t, n) => {
					const a = O(e, n());
					t(v(a))
				}, C = e => async (t, n) => {
					const a = {
						post: [],
						userPost: [],
						comment: []
					};
					if (!Boolean(Object(l.a)(n(), e))) {
						switch (e.type) {
							case c.c.POST:
								a.post.push(e.value);
								break;
							case c.c.USER_POST:
								a.userPost.push(e.value);
								break;
							case c.c.COMMENT:
								a.comment.push(e.value)
						}
						t(v(a))
					}
				}, j = e => async (t, n) => {
					let a = {
						post: [],
						userPost: [],
						comment: [],
						subreddit: []
					};
					const s = n();
					if (null == e ? void 0 : e.messages) {
						for (const t in e.messages) {
							const n = e.messages[t];
							a = O(n, s)
						}
						t(v(a))
					}
				}, v = e => async (t, n, {
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
						l = e => e.startsWith(d.Hb.Comment) || e.startsWith(d.Hb.Post);
					for (const o in e) {
						const t = s()(e[o].reduce((e, t) => t && (l(t) || "subreddit" === o) && e.push(t) && e || e, []));
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
						const e = await ((e, t) => Object(o.a)(e, {
							...i,
							variables: t
						}))(a(), r);
						if (null == e ? void 0 : e.ok) {
							const n = e.body;
							if ((e => Boolean(e && e.data && (e.data.comments || e.data.posts || e.data.userPosts || e.data.subreddits)))(n)) {
								const e = n.data;
								e.comments && (e.comments = e.comments.filter(m).map(e => {
									var t;
									return (null === (t = null == e ? void 0 : e.postInfo) || void 0 === t ? void 0 : t.subreddit) && {
										...e,
										type: c.c.COMMENT
									}
								})), e.posts && (e.posts = e.posts.filter(p).map(e => ({
									...e,
									type: c.c.POST
								}))), e.userPosts && (e.userPosts = e.userPosts.filter(b).map(e => ({
									...e,
									type: c.c.USER_POST
								}))), e.subreddits && (e.subreddits = e.subreddits.filter(g).map(e => ({
									...e,
									type: c.c.SUBREDDIT
								}))), t(f(e))
							}
						}
					}
				}, _ = Object(r.a)(h)
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
					if (Object(i.f)(a())) return;
					(e => {
						Object(d.a)({
							...m(e, !0),
							action: u.c.Request,
							source: u.b.Notification
						})
					})(a()), Object(c.b)(e, t, () => {
						n(Object(o.o)()), n(Object(o.n)()), (e => {
							Object(d.a)({
								...h(e),
								action: u.c.View,
								source: u.b.Popup
							})
						})(a())
					}, (e, t) => {
						n(Object(o.l)()), e && (t ? (e => {
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
						n(Object(o.m)()), Object(r.b)(l.gqlContext), (e => {
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
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return h
			}));
			var a = n("./src/chat/actions/channel.ts"),
				s = n("./src/chat/actions/user.ts"),
				r = n("./src/chat/helpers/urls/index.ts"),
				c = n("./node_modules/react-router-redux/es/index.js");

			function o(e) {
				return t => async (n, a, r) => {
					await Object(s.l)()(n, a, r), await Object(s.o)()(n, a, r), await e(t)(n, a, r)
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
						e(Object(a.z)(t))
					}
				}),
				h = o(e => async (e, t) => {
					const {
						platform: {
							currentPage: n
						}
					} = t(), a = Object(r.getRedirectURL)(Object(r.channelUrl)("share"));
					a.search = null == n ? void 0 : n.queryParams.url, e(Object(c.b)(a))
				})
		},
		"./src/chat/actions/platform.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			}));
			var a = n("./src/lib/areUrlsEqual/index.ts"),
				s = n("./src/lib/logs/timing.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/actions/channel.ts");
			const o = "PLATFORM__HISTORY_LOCATION_SET",
				i = "PLATFORM__INITIAL_REFERRER_SET",
				l = "PLATFORM__PAGE_META_SET",
				d = (e, t, n) => async (r, o, i) => {
					const l = Date.now(),
						d = o().platform.currentPage;
					if (n && (r(u({
							action: t,
							location: e,
							routeMatch: n
						})), !d || !Object(a.a)(d.url, e))) {
						if (n) {
							const {
								match: e
							} = n;
							await n.route.action(e)(r, o, i);
							const {
								meta: t
							} = n.route;
							if (t) {
								const e = Date.now() - l;
								Object(s.b)({
									duration: e,
									meta: t
								})
							}
						}
						n.match.params.channelId && r(Object(c.L)())
					}
				}, u = Object(r.a)(o)
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
					const a = await Object(s.d)(n());
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
				return u
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "j", (function() {
				return S
			}));
			var a = n("./src/lib/cache/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/actions/tracking.ts"),
				o = n("./src/chat/endpoints/accounts/index.ts"),
				i = n("./src/chat/endpoints/sendbird/index.ts"),
				l = n("./src/chat/models/Contact/index.ts"),
				d = n("./src/chat/selectors/contacts.ts");
			const u = "SENDBIRD__DEACTIVATE_SENDBIRD_SESSION",
				h = "SENDBIRD__ACTIVATE_SENDBIRD_SESSION",
				m = Object(r.a)(u),
				p = "SENDBIRD__SET_SENDBIRD_SESSION",
				b = Object(r.a)(p),
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
						const c = Object(a.c)(s.p.CHAT, s.x.CHAT_SENDBIRD_SESSION_KEY, o.id),
							d = Object(a.b)(c);
						if (d && d.token) n = d;
						else {
							const e = await Object(i.f)(r(), l);
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
						if (n) return void t(b({
							...n,
							active: e
						}))
					}
					t(m())
				}, f = "SENDBIRD__ADD_MEMBERS_TO_KNOWN_CONTACTS", O = Object(r.a)(f), E = "SENDBIRD__SET_REDDIT_CONTACT_LIST", C = 6 * s.P, j = Object(r.a)(E), v = () => async (e, t, {
					apiContext: n
				}) => {
					const r = t(),
						c = r.contacts.models,
						o = Object(a.c)(s.p.CHAT, s.x.CHAT_SENDBIRD_CONTACTS_KEY, r.user.account.id),
						d = Object(a.b)(o);
					if (d && d.version === l.a) return void e(j(d.data));
					const u = t().user.session;
					if (!u) return;
					const h = await Object(i.e)(n(), u, 25),
						m = Object(l.c)(h.body).map(e => c[e.id] ? c[e.id] : e),
						p = {
							version: l.a,
							data: m
						};
					Object(a.d)(o, p, C), e(j(m))
				}, _ = "SENDBIRD__IDENTIFY_CONTACT_BEGIN", I = "SENDBIRD__IDENTIFY_CONTACT_END", x = Object(r.a)(_), y = Object(r.a)(I), S = e => async (t, n, {
					apiContext: a
				}) => {
					if (e.username === s.D) return;
					Object(d.c)(n(), e.username) || (t(x({
						username: e.username
					})), Object(o.b)(a(), e.username).then(n => {
						if (n.ok) {
							const a = Object(l.d)(n.body.data);
							if (a) return t(y({
								username: e.username,
								contact: a,
								valid: !0
							}))
						} else t(Object(c.U)(e.username));
						t(y({
							username: e.username,
							valid: !1
						}))
					}))
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
				return C
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "g", (function() {
				return I
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
				O = Object(a.a)(p),
				E = Object(a.a)(b),
				C = e => async (t, n) => {
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
						o && t(Object(i.g)({
							toast: d.a.ConnectionPending
						})), e = e || p.token, m.a.connect(b, e, n, t).then(e => {
							if (e.error) t(O(e.error)), t(_({
								...f
							})), t(Object(i.g)({
								toast: d.a.ConnectionClosed
							}));
							else {
								if (t(E()), o) {
									const e = !0;
									t(Object(r.v)(e)), t(Object(i.g)({
										toast: d.a.ConnectionOpen
									})), t(Object(i.c)(3))
								}
								t(Object(c.c)()), t(Object(s.C)())
							}
						})
					}
				}, j = Object(a.a)(g), v = () => async e => {
					m.a.disconnect().then(() => {
						e(j()), e(Object(o.i)())
					})
				}, _ = Object(a.a)(f), I = () => m.a.reconnect()
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
							method: s.ib.POST
						}))(n(), a);
						if (t.ok) {
							const n = t.body;
							if (n.unsafeLoggedOut) return void(a.unsafeLoggedOut || e(d()));
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
						method: s.ib.GET
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
		"./src/chat/actions/toast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return h
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/chat/constants/toast.ts");
			const c = "TOAST__RESET_TOAST",
				o = Object(s.a)(c),
				i = "TOAST__UPDATE_TOAST",
				l = Object(s.a)(i),
				d = e => async (t, n) => {
					setTimeout(() => t(o()), e * a.Qb)
				}, u = (e = 3) => async (t, n) => {
					t(l({
						toast: r.a.SomethingWentWrong
					})), t(d(e))
				}, h = (e, t = 3) => async (n, s) => {
					for (const r of e) await new Promise(e => {
						n(l({
							toast: r
						})), n(d(t)), setTimeout(e, t * a.Qb + 300)
					})
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
				return C
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "P", (function() {
				return v
			})), n.d(t, "W", (function() {
				return _
			})), n.d(t, "Q", (function() {
				return I
			})), n.d(t, "ab", (function() {
				return x
			})), n.d(t, "Z", (function() {
				return y
			})), n.d(t, "D", (function() {
				return S
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "V", (function() {
				return N
			})), n.d(t, "A", (function() {
				return T
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "X", (function() {
				return k
			})), n.d(t, "N", (function() {
				return A
			})), n.d(t, "y", (function() {
				return P
			})), n.d(t, "C", (function() {
				return L
			})), n.d(t, "G", (function() {
				return D
			})), n.d(t, "F", (function() {
				return U
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "w", (function() {
				return B
			})), n.d(t, "L", (function() {
				return F
			})), n.d(t, "bb", (function() {
				return H
			})), n.d(t, "O", (function() {
				return G
			})), n.d(t, "k", (function() {
				return V
			})), n.d(t, "U", (function() {
				return z
			})), n.d(t, "T", (function() {
				return W
			})), n.d(t, "m", (function() {
				return K
			})), n.d(t, "j", (function() {
				return Z
			})), n.d(t, "d", (function() {
				return q
			})), n.d(t, "o", (function() {
				return Q
			})), n.d(t, "q", (function() {
				return J
			})), n.d(t, "s", (function() {
				return X
			})), n.d(t, "p", (function() {
				return Y
			})), n.d(t, "r", (function() {
				return $
			})), n.d(t, "f", (function() {
				return ee
			})), n.d(t, "x", (function() {
				return te
			})), n.d(t, "I", (function() {
				return ne
			})), n.d(t, "S", (function() {
				return ae
			})), n.d(t, "n", (function() {
				return se
			})), n.d(t, "i", (function() {
				return re
			})), n.d(t, "u", (function() {
				return ce
			})), n.d(t, "z", (function() {
				return oe
			})), n.d(t, "B", (function() {
				return ie
			})), n.d(t, "t", (function() {
				return le
			})), n.d(t, "M", (function() {
				return de
			})), n.d(t, "E", (function() {
				return ue
			})), n.d(t, "H", (function() {
				return he
			})), n.d(t, "Y", (function() {
				return me
			})), n.d(t, "K", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return be
			})), n.d(t, "J", (function() {
				return ge
			})), n.d(t, "v", (function() {
				return fe
			})), n.d(t, "R", (function() {
				return Oe
			})), n.d(t, "g", (function() {
				return Ee
			}));
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/components/MessageInput/constants.ts"),
				r = n("./src/chat/constants/channels.ts"),
				c = n("./src/chat/constants/messages.ts"),
				o = n("./src/chat/selectors/channels.ts"),
				i = n("./src/chat/selectors/contacts.ts"),
				l = n("./src/chat/selectors/gifs.ts"),
				d = n("./src/chat/selectors/platform.ts"),
				u = n("./src/chat/tracking/fields/chat.ts"),
				h = n("./src/chat/tracking/fields/common.ts"),
				m = n("./src/chat/tracking/sendEvent.ts");
			var p = n("./src/chat/selectors/telemetry.ts");
			var b = n("./src/chat/tracking/events/chatView.ts"),
				g = n("./src/chat/tracking/events/contactsList.ts"),
				f = (n("./src/chat/tracking/events/experiment.ts"), n("./src/chat/tracking/events/invitationInbox.ts")),
				O = n("./src/chat/tracking/events/messagesInbox.ts");
			var E, C;
			! function(e) {
				e.AWARD_RECEIVED = "award_received"
			}(E || (E = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND", e[e.THIRD = 3] = "THIRD"
			}(C || (C = {}));
			const j = () => async (e, t) => {
				Object(O.b)(t())
			}, v = e => async (t, n) => {
				Object(b.g)(n(), e)
			}, _ = (e, t) => async (n, a) => {
				Object(b.k)(a(), e, t)
			}, I = (e, t) => async (n, a) => {
				Object(b.h)(a(), e, t)
			}, x = () => async (e, t) => {
				Object(b.m)(t())
			}, y = () => async (e, t) => {
				Object(b.l)(t())
			}, S = () => async (e, t) => {
				Object(b.e)(t())
			}, w = () => async (e, t) => {
				Object(b.a)(t())
			}, N = () => async (e, t) => {
				Object(b.i)(t())
			}, T = (e, t) => async (n, a) => {
				Object(b.d)(a(), e, t)
			}, M = () => async (e, t) => {
				Object(b.b)(t())
			}, k = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "chat_settings",
					source: a.b.ChatSettings,
					action: a.a.View,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, A = e => async (t, n) => {
				((e, t) => Object(m.a)({
					noun: "chat_member_block",
					source: a.b.ChatSettings,
					action: a.a.Submit,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e)
					},
					targetUser: {
						id: t
					},
					...Object(h.a)(e)
				}))(n(), e)
			}, P = () => async (e, t) => {
				const n = t();
				Object(d.c)(n) !== r.a.VIEW_INVITE && (e => {
					Object(m.a)({
						noun: "view_profile",
						source: a.b.ChatSettings,
						action: a.a.Click,
						chat: {
							...Object(u.z)(e),
							...Object(u.p)(e),
							...Object(u.t)(e),
							...Object(u.f)(e)
						},
						...Object(h.a)(e)
					})
				})(n)
			}, L = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "leave_chat",
					source: a.b.ChatSettings,
					action: a.a.Confirm,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e),
						...Object(u.x)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, D = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "badging",
					source: a.b.ChatSettings,
					action: a.a.Enable,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e),
						...Object(u.x)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, U = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "badging",
					source: a.b.ChatSettings,
					action: a.a.Disable,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e),
						...Object(u.x)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, R = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "add_to_group",
					source: a.b.ChatSettings,
					action: a.a.Click,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e),
						...Object(u.x)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, B = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "rename_group",
					source: a.b.ChatSettings,
					action: a.a.Click,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e),
						...Object(u.x)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, F = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "rename_group",
					source: a.b.ChatSettings,
					action: a.a.Save,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e),
						...Object(u.x)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, H = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "view_members",
					source: a.b.ChatSettings,
					action: a.a.Click,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e),
						...Object(u.x)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, G = e => async (t, n) => {
				((e, t) => {
					Object(m.a)({
						noun: "chat_member_report",
						source: a.b.ChatSettings,
						action: a.a.Submit,
						chat: {
							...Object(u.z)(e),
							...Object(u.p)(e),
							...Object(u.f)(e),
							...Object(u.v)(t)
						},
						...Object(h.a)(e)
					})
				})(n(), e)
			}, V = e => async (t, n) => {
				Object(g.c)(n(), e)
			}, z = e => async (t, n) => {
				Object(i.c)(n(), e) && Object(g.f)(n())
			}, W = e => async (t, n) => {
				const a = n(),
					s = e && e.filter(e => e !== a.user.account.id),
					r = s && s[0],
					c = a.contacts.models[r],
					o = c && c.name,
					l = Object(i.a)(n(), o);
				l && Object(g.e)(n(), l)
			}, K = e => async (t, n) => {
				Object(g.d)(n(), e)
			}, Z = () => async (e, t) => {
				Object(g.b)(t())
			}, q = () => async (e, t) => {
				Object(g.a)(t())
			}, Q = e => async (t, n) => {
				const a = n(),
					s = Object(o.g)(a, e);
				Object(f.d)(a, s, s ? E.AWARD_RECEIVED : void 0)
			}, J = e => async (t, n) => {
				const a = n(),
					s = Object(o.g)(a, e);
				Object(f.f)(a, s, s ? E.AWARD_RECEIVED : void 0)
			}, X = () => async (e, t) => {
				const n = t();
				Object(d.c)(n) === r.a.VIEW_INVITE && Object(f.h)(n)
			}, Y = () => async (e, t) => {
				const n = t();
				Object(d.c)(n) === r.a.VIEW_INVITE && Object(f.e)(n)
			}, $ = (e, t) => async (n, a) => {
				const s = a();
				if (Object(d.c)(s) === r.a.VIEW_INVITE) {
					const n = t.pop(),
						a = null == n ? void 0 : n.messageId;
					Object(f.g)(s, e, a)
				}
			}, ee = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "edit_theme",
					source: a.b.ChatSettings,
					action: a.a.Click,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, te = e => async (t, n) => {
				((e, t) => Object(m.a)({
					noun: "select_theme",
					source: a.b.ChatSettings,
					action: a.a.Click,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e)
					},
					...Object(h.a)(e),
					actionInfo: {
						...Object(p.a)(e),
						settingValue: t
					}
				}))(n(), e)
			}, ne = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "channel",
					source: a.b.ChatSettings,
					action: a.a.Mute,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e),
						...Object(u.x)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, ae = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "channel",
					source: a.b.ChatSettings,
					action: a.a.Unmute,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e),
						...Object(u.x)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, se = e => async (t, n) => {
				((e, t) => {
					Object(m.a)({
						noun: "create_chat",
						source: a.b.UserHovercard,
						action: a.a.Click,
						chat: {
							...Object(u.D)(e, t),
							...Object(u.B)(e, t),
							...Object(u.C)(e, t)
						},
						...Object(h.a)(e),
						...Object(h.b)(e)
					})
				})(n(), e)
			}, re = () => async (e, t) => {
				Object(O.a)(t())
			}, ce = () => async (e, t) => {
				Object(O.c)(t())
			}, oe = e => async (t, n) => {
				const r = n();
				r.tooltipId === e && (e === s.d && (e => {
					Object(m.a)({
						noun: "snoomoji",
						source: a.b.ChatKeyboard,
						action: a.a.Click,
						chat: {
							...Object(u.z)(e),
							...Object(u.p)(e),
							...Object(u.f)(e)
						},
						...Object(h.a)(e)
					})
				})(r), e === s.b && (e => {
					Object(m.a)({
						noun: "share_gif",
						source: a.b.ChatKeyboard,
						action: a.a.Click,
						chat: {
							...Object(u.z)(e),
							...Object(u.p)(e),
							...Object(u.f)(e)
						},
						...Object(h.a)(e)
					})
				})(r))
			}, ie = e => async (t, n) => {
				((e, t) => {
					Object(m.a)({
						noun: "image_gallery",
						source: a.b.ChatKeyboard,
						action: a.a.Complete,
						chat: {
							...Object(u.f)(e),
							...Object(u.z)(e)
						},
						...Object(h.a)(e),
						actionInfo: {
							...Object(p.a)(e),
							settingValue: t
						}
					})
				})(n(), e)
			}, le = () => async (e, t) => {
				(e => {
					Object(m.a)({
						noun: "image_button",
						source: a.b.ChatKeyboard,
						action: a.a.Click,
						chat: {
							...Object(u.f)(e),
							...Object(u.z)(e)
						},
						...Object(h.a)(e)
					})
				})(t())
			}, de = e => async (t, n) => {
				((e, t) => {
					Object(m.a)({
						noun: "shortcut",
						source: a.b.ChatKeyboard,
						action: a.a.Slash,
						chat: {
							...Object(u.z)(e),
							...Object(u.p)(e),
							...Object(u.f)(e)
						},
						...Object(h.a)(e),
						actionInfo: {
							...Object(p.a)(e),
							settingValue: t
						}
					})
				})(n(), e)
			}, ue = () => async (e, t) => {
				(e => {
					Object(m.a)({
						noun: "other_message",
						source: a.b.ChatView,
						action: a.a.ModDelete,
						chat: {
							...Object(u.z)(e),
							...Object(u.p)(e),
							...Object(u.f)(e),
							...Object(u.r)(e),
							...Object(u.n)(e),
							...Object(u.w)(e)
						},
						...Object(h.a)(e)
					})
				})(t()), (e => {
					Object(m.a)({
						noun: "message",
						source: a.b.Chat,
						action: a.a.Delete,
						chat: {
							...Object(u.f)(e),
							...Object(u.z)(e),
							...Object(u.n)(e)
						},
						...Object(h.a)(e)
					})
				})(t())
			}, he = e => async (t, n) => {
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
							...Object(u.z)(e),
							...Object(u.p)(e),
							...Object(u.f)(e),
							...Object(u.r)(e),
							...Object(u.n)(e),
							...Object(u.w)(e)
						},
						...Object(h.a)(e),
						actionInfo: {
							settingValue: t,
							...Object(p.a)(e)
						}
					})
				})(n(), e, c)
			}, me = e => async (t, n) => {
				Object(f.j)(n(), e)
			}, pe = e => async (t, n) => {
				Object(f.j)(n(), e)
			}, be = (e, t) => async (n, a) => {
				Object(f.a)(a(), e, t)
			}, ge = (e, t) => async (n, a) => {
				Object(f.i)(a(), e, t)
			}, fe = (e, t) => async (n, a) => {
				Object(b.c)(a(), e, t, E.AWARD_RECEIVED)
			}, Oe = e => async (t, n) => {
				switch (e.messageData.type) {
					case c.c.GIF:
						t((() => async (e, t) => {
							const n = t(),
								a = Object(l.b)(n);
							Object(b.f)(t(), a)
						})());
						break;
					case c.c.IMAGE:
						t(v(e))
				}
			}, Ee = e => async (t, n) => {
				((e, t) => {
					Object(m.a)({
						noun: "image",
						source: a.b.Chat,
						action: a.a.Click,
						chat: {
							...Object(u.f)(e),
							...Object(u.z)(e),
							...Object(u.n)(e, void 0, void 0, t)
						},
						...Object(h.a)(e)
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
					const r = Object(c.B)(a(), "channelId"),
						o = a().typingIndicator.usernames,
						l = e === r,
						d = t.length > 3 && o.length > 3,
						u = !s()(t, o);
					l && u && !d && n(i({
						usernames: t
					}))
				}
		},
		"./src/chat/actions/uploads/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return O
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return N
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/actions/message/index.ts"),
				r = n("./src/chat/actions/toast.ts"),
				c = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/lib/makeRequest/index.ts"),
				l = n("./src/chat/helpers/errors.ts");
			const d = (e, t) => {
				const n = new FormData;
				return t.forEach(e => {
					e.value && n.append(e.header, e.value)
				}), n.append("file", e), n
			};
			var u = async (e, t, a) => {
				let s = !1;
				const r = await Object(i.b)({
					data: d(e, t.uploadLeaseHeaders),
					endpoint: t.uploadLeaseUrl,
					method: c.ib.POST,
					type: null,
					setup: a
				});
				if ("string" == typeof r.body) try {
					const e = (() => Object(o.a)(() => n.e("vendors~xml2js").then(n.t.bind(null, "./node_modules/xml2js/lib/xml2js.js", 7))).then(e => e.default))();
					(await e).parseString(r.body, (e, t) => {
						r.body = t
					}), s = !0
				} catch (u) {
					Object(l.b)(u)
				}
				return s
			}, h = n("./src/redditGQL/operations/CreateMediaUploadLease.json"), m = n("./src/redditGQL/operations/SubmitMediaUpload.json"), p = n("./src/lib/makeGqlRequest/index.ts");
			var b = n("./src/chat/models/Uploads/index.ts"),
				g = n("./src/chat/selectors/channels.ts"),
				f = n("./src/chat/selectors/uploads.ts");
			const O = "FILE_DROP__TOGGLE_IS_OVER",
				E = Object(a.a)(O),
				C = "UPLOAD__ADD_PENDING",
				j = Object(a.a)(C),
				v = "UPLOAD__CHANGE_STATUS",
				_ = Object(a.a)(v),
				I = e => async (t, n) => {
					const a = n(),
						s = Object(g.n)(a);
					s && t(_({
						id: e,
						channelId: s,
						status: b.c.Canceled
					}))
				}, x = "UPLOAD__CHANGE_PROGRESS", y = Object(a.a)(x), S = ({
					id: e,
					file: t,
					metadata: {
						mimetype: n
					}
				}) => async (a, s, {
					gqlContext: r
				}) => {
					const c = {
							input: {
								mimetype: n
							}
						},
						o = await ((e, t) => Object(p.a)(e, {
							...h,
							variables: t
						}))(r(), c);
					if (o.ok && (e => {
							var t, n;
							return Boolean(null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.createMediaUploadLease) || void 0 === n ? void 0 : n.mediaId)
						})(o.body)) {
						const {
							mediaId: n,
							uploadLease: s
						} = o.body.data.createMediaUploadLease;
						return await u(t, s, t => (((e, t, n) => {
							t.on("progress", t => {
								if ("upload" === t.direction) {
									const a = {
										percent: t.percent,
										total: t.total,
										uploaded: t.loaded
									};
									n(y({
										id: e,
										progress: a
									}))
								}
							})
						})(e, t, a), t)) ? n : null
					}
				}, w = (e, t) => async (n, a, {
					gqlContext: s
				}) => {
					const r = {
							input: {
								mediaId: e,
								redditId: t
							}
						},
						c = await ((e, t) => Object(p.a)(e, {
							...m,
							variables: t
						}))(s(), r);
					return c.ok && (e => {
						var t, n;
						return Boolean(null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.submitMedia) || void 0 === n ? void 0 : n.ok)
					})(c.body)
				};
			class N {
				constructor(e) {
					this.uploads = [], this.createMessage = () => async (e, t) => {
						if (this.setActiveUploads(t()), !this.uploads.length) return e(Object(r.e)());
						const n = this.channelId,
							a = this.uploads.map(async t => {
								const {
									id: a
								} = t;
								e(_({
									id: a,
									channelId: n,
									status: b.c.Submit
								}));
								const r = await e(Object(s.q)(n, t));
								r ? (t.messageId = r.messageId, t.redditId = r.redditId) : e(_({
									id: a,
									channelId: n,
									status: b.c.Failed
								}))
							});
						await Promise.all(a)
					}, this.uploadMedia = () => async (e, t) => {
						if (!this.uploads.length || !this.channelId) return e(Object(r.e)());
						const n = this.channelId;
						this.uploads.forEach(async t => {
							const {
								id: a,
								redditId: s
							} = t;
							if (!s) return void e(_({
								id: a,
								channelId: n,
								status: b.c.Failed
							}));
							e(_({
								id: a,
								channelId: n,
								status: b.c.Uploading
							}));
							const r = await e(S(t));
							r ? (e(_({
								id: a,
								channelId: n,
								status: b.c.Processing
							})), await e(w(r, s)) ? e(_({
								id: a,
								channelId: n,
								status: b.c.Success
							})) : e(_({
								id: a,
								channelId: n,
								status: b.c.Failed
							}))) : e(_({
								id: a,
								channelId: n,
								status: b.c.Failed
							}))
						})
					}, this.channelId = e
				}
				setActiveUploads(e) {
					this.uploads = Object(f.c)(e)
				}
			}
		},
		"./src/chat/actions/uploads/prompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/selectors/uploads.ts");
			const r = "UPLOAD__SHOW_PROMPT_COUNT_SET";
			var c;
			! function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 3] = "SECOND", e[e.LAST = 4] = "LAST"
			}(c || (c = {}));
			const o = Object(a.a)(r),
				i = e => async (t, n) => {
					Object(s.g)(n()) || t(o(e))
				}
		},
		"./src/chat/actions/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
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
				return k
			})), n.d(t, "u", (function() {
				return A
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "i", (function() {
				return D
			})), n.d(t, "v", (function() {
				return F
			})), n.d(t, "h", (function() {
				return H
			})), n.d(t, "m", (function() {
				return V
			})), n.d(t, "k", (function() {
				return z
			})), n.d(t, "t", (function() {
				return W
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "s", (function() {
				return Z
			})), n.d(t, "c", (function() {
				return q
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
				O = n("./src/chat/models/Contact/index.ts"),
				E = n("./src/chat/models/Experiment/index.ts"),
				C = n("./src/chat/models/User/index.ts"),
				j = n("./src/chat/selectors/channels.ts"),
				v = n("./src/chat/singleton/SendbirdSDK.ts");
			const _ = "USER__ACCOUNT_FETCH_COMPLETED",
				I = "USER__REDDAID_RECEIVED",
				x = "USER__LOID_RECEIVED",
				y = "USER__SESSION_TRACKER_RECEIVED",
				S = "FETCH_EXPERIMENTS_COMPLETED",
				w = Object(i.a)(x),
				N = Object(i.a)("USER__ACCOUNT_FETCH_PENDING"),
				T = Object(i.a)(_),
				M = Object(i.a)("USER__ACCOUNT_FETCH_FAILED"),
				k = Object(i.a)(I),
				A = Object(i.a)(y),
				P = Object(i.a)(S),
				L = () => async (e, t, {
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
						} = i, a = Object(C.a)(t), s = Object(E.a)(n), r = !!a.prefNightmode;
						e(T(a)), e(P(s)), e(Object(d.switchTheme)(r))
					} else e(M(i.error))
				}, D = "USER__USERS_FETCH_COMPLETED", U = Object(i.a)("USER__USERS_FETCH_PENDING"), R = Object(i.a)(D), B = Object(i.a)("USER__USERS_FETCH_FAILED"), F = e => async (t, n, {
					gqlContext: a
				}) => {
					const r = n().contacts.models,
						c = e.filter(e => !r[e]),
						o = s()(c, 100);
					if (!c.length) return;
					t(U(e));
					const i = await Promise.all(o.map(e => Object(b.b)(a(), {
						ids: e
					}))).catch(() => []);
					for (const e of i)
						if (e.ok && Object(b.c)(e.body)) {
							const n = Object(C.b)(e.body.data.redditorsInfoByIds);
							n ? t(R(n)) : Object(g.b)(`Failed to normalize RedditorsInfoByIds: ${e.body.data.redditorsInfoByIds}`)
						} else t(B())
				}, H = "USERS__USERS_ADD_SELECTED", G = Object(i.a)(H), V = e => async t => {
					t(G(e)), t(Object(u.k)(e))
				}, z = "USERS__USERS_REMOVE_SELECTED", W = Object(i.a)(z), K = "USERS__USERS_REMOVE_ALL_SELECTED", Z = Object(i.a)(K), q = "USERS__BLOCK_USER_COMPLETED", Q = Object(i.a)(q), J = Object(i.a)("USERS__BLOCK_USER_FAILED"), X = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					const r = a(),
						c = r.contacts.models[e],
						i = c && c.name,
						d = Object(j.x)(r),
						u = Object(j.j)(r) || h.b.JOINED,
						p = d && d.type === f.a.Direct,
						b = Object(j.m)(r);
					if (!b) throw new g.a("currentChannel", b);
					const O = b.channelId;
					if (!O) throw new g.a("blockedChannelId", O);
					const E = await Object(m.a)(s(), e);
					E && E.ok && p ? (await v.a.hideChannel(), n(Q({
						userId: e,
						username: i
					})), t || (n(Object(l.I)(O)), n(Object(l.M)(u)))) : E && E.ok && !p ? (n(Q({
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
						const t = await Object(b.f)(n());
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
				})), t(Object(r.X)())
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
		"./src/chat/components/BasicInvited/index.m.less": function(e, t, n) {
			e.exports = {
				SidebarDivider: "_1334fsVcQSswk1rHu1edx_",
				sidebarDivider: "_1334fsVcQSswk1rHu1edx_"
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
			var a = n("./node_modules/lodash/memoize.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/chat/components/ChatIcon/index.m.less"),
				d = n.n(l),
				u = n("./src/chat/icons/Userpic/index.tsx");
			const h = i.a.wrapped(u.a, "UserPic", d.a),
				m = i.a.wrapped(h, "TopUserpic", d.a),
				p = i.a.wrapped(h, "BottomUserpic", d.a),
				b = s()(e => {
					if (e) {
						return 20 * (e / 32) + "px"
					}
					return "20px"
				}),
				g = s()(e => e + "px" || !1);
			t.a = i.a.wrapped(({
				className: e,
				isSmall: t,
				secondUserId: n,
				userId: a,
				onClick: s,
				customPicSize: r
			}) => {
				const i = g(r),
					l = b(r);
				return c.a.createElement("div", {
					role: "button",
					tabIndex: 0,
					className: Object(o.a)(e, {
						[d.a.small]: t
					}),
					onClick: s,
					style: {
						height: i,
						width: i
					}
				}, n ? c.a.createElement(c.a.Fragment, null, c.a.createElement(m, {
					userId: a,
					height: l,
					width: l
				}), c.a.createElement(p, {
					userId: n,
					height: l,
					width: l
				})) : c.a.createElement(h, {
					height: i,
					width: i,
					userId: a,
					className: Object(o.a)(e, {
						[d.a.small]: t
					})
				}))
			}, "IconWrapper", d.a)
		},
		"./src/chat/components/ChatList/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/chat/components/ChatIcon/index.tsx"),
				l = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./src/chat/constants/messages.ts"),
				u = n("./src/chat/helpers/linkParser/index.ts"),
				h = n("./src/chat/models/Message/index.ts"),
				m = n("./src/chat/selectors/experiments.ts"),
				p = n("./src/chat/components/Message/Preview.m.less"),
				b = n.n(p);
			const g = e => {
					const {
						message: t,
						isInvited: n
					} = e, a = (({
						currentUserId: e,
						isGroup: t,
						message: n
					}) => t && n && n.sender ? e === n.sender.userId ? l.fbt._("You:", null, {
						hk: "wP43r"
					}) : `${n.sender.nickname}:` : "")(e), c = Object(r.e)(m.f);
					if (!t) return null;
					if (t.messageData.collapsedInvitePreview) return s.a.createElement(s.a.Fragment, null, [l.fbt._("Wants to message you", null, {
						hk: "3CbciS"
					})]);
					if ((null == t ? void 0 : t.messageType) === d.d.SYSTEM && (null == t ? void 0 : t.customType) === h.a.AWARDING) return s.a.createElement(s.a.Fragment, null, [a, " ", l.fbt._("Sent a note with an award", null, {
						hk: "4FSnF0"
					})]);
					if (n && !c) return s.a.createElement(s.a.Fragment, null, [l.fbt._("Wants to message you", null, {
						hk: "3CbciS"
					})]);
					switch (t.messageData.type) {
						case d.c.TEXT: {
							const {
								value: e
							} = t.messageData;
							return s.a.createElement(s.a.Fragment, null, [a, " ", Object(u.b)(e) ? l.fbt._("Shared a link", null, {
								hk: "4bNVW7"
							}) : e])
						}
						case d.c.USER_POST:
						case d.c.POST:
							return s.a.createElement(s.a.Fragment, null, [a, " ", l.fbt._("Shared a post", null, {
								hk: "1hd8l1"
							}), " ", t.messageData.subreddit]);
						case d.c.COMMENT:
							return s.a.createElement(s.a.Fragment, null, [a, " ", l.fbt._("Shared a comment", null, {
								hk: "1cCjoi"
							}), " ", t.messageData.subreddit]);
						case d.c.EMBED:
							return s.a.createElement(s.a.Fragment, null, [a, " ", l.fbt._("Shared a link", null, {
								hk: "4bNVW7"
							}), " ", t.messageData.value]);
						case d.c.SUBREDDIT:
							return s.a.createElement(s.a.Fragment, null, [a, " ", l.fbt._("Shared a community", null, {
								hk: "t78ZE"
							}), " ", t.messageData.subreddit]);
						case d.c.SNOOMOJI:
							return s.a.createElement(s.a.Fragment, null, [a, " ", l.fbt._("Sent a Snoomoji", null, {
								hk: "4hD30K"
							})]);
						case d.c.GIF:
							return s.a.createElement(s.a.Fragment, null, [a, " ", l.fbt._("Sent a Gif", null, {
								hk: "2DVhUf"
							})]);
						case d.c.IMAGE:
							return s.a.createElement(s.a.Fragment, null, [a, " ", l.fbt._("Sent a Media File", null, {
								hk: "43eCZI"
							})]);
						default:
							return null
					}
				},
				f = e => s.a.createElement("sub", {
					className: Object(o.a)(b.a.MessagePreview, {
						[b.a.active]: e.isActive,
						[b.a.unread]: e.isInvited || e.isUnread
					})
				}, s.a.createElement(g, e));
			var O = n("./src/chat/constants/channels.ts"),
				E = n("./src/chat/controls/Counter/index.tsx"),
				C = n("./src/chat/helpers/urls/index.ts"),
				j = n("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				v = n("./src/chat/selectors/channels.ts"),
				_ = n("./src/chat/components/ChatListItem/index.m.less"),
				I = n.n(_);
			const x = ({
				active: e,
				children: t,
				unread: n
			}) => s.a.createElement("h4", {
				className: Object(o.a)(I.a.ItemTitleName, {
					[I.a.active]: e,
					[I.a.unread]: n
				})
			}, t);
			var y = ({
					channelId: e,
					currentUserId: t,
					isGroup: n,
					isSelected: l,
					channelState: d,
					message: u,
					unread: h,
					mentionCount: p = 0,
					unreadMessageCount: b = 0
				}) => {
					var g;
					const _ = Object(r.e)(t => Object(v.t)(t, e)),
						y = Object(r.e)(t => Object(v.k)(t, e)),
						S = Object(r.e)(t => Object(v.K)(t, {
							channelId: e
						})),
						w = Object(r.e)(m.i),
						N = d === O.b.INVITED,
						T = Object(a.useMemo)(() => N ? Object(C.channelAction)(e, O.a.VIEW_INVITE) : Object(C.channelUrl)(e), [N, e]),
						M = Object(a.useMemo)(() => Object(C.getRedirectURL)(T), [T]),
						k = Object(a.useMemo)(() => n ? p : b, [p, b, n]);
					return s.a.createElement(c.a, {
						to: M,
						className: Object(o.a)(I.a.ChatListItem, {
							[I.a.selected]: l,
							[I.a.unread]: h
						})
					}, (null == _ ? void 0 : _.firstUser) && s.a.createElement(i.a, {
						className: I.a.ChatIcon,
						userId: _.firstUser.id,
						secondUserId: null === (g = _.secondUser) || void 0 === g ? void 0 : g.id
					}), s.a.createElement("div", {
						className: I.a.ItemTitle
					}, s.a.createElement(x, {
						unread: h || N,
						active: l
					}, s.a.createElement("span", {
						className: I.a.ChannelName
					}, y)), s.a.createElement("div", {
						className: I.a.Description
					}, s.a.createElement(f, {
						currentUserId: t,
						isGroup: n,
						isInvited: N,
						isUnread: h,
						isActive: l,
						message: u
					}), s.a.createElement(E.b, {
						count: k
					}))), S && w && s.a.createElement(j.a, {
						className: I.a.NotificationDisabledIcon,
						isFilled: !0
					}))
				},
				S = n("./src/chat/models/Channel/index.ts"),
				w = n("./src/chat/selectors/user.ts");
			t.a = ({
				channels: e
			}) => {
				const t = Object(r.e)(w.a),
					n = Object(r.e)(v.n);
				return s.a.createElement(s.a.Fragment, null, e.map(e => {
					const {
						channelId: a,
						lastMessage: r,
						channelState: c,
						unreadMessageCount: o,
						unreadMentionCount: i
					} = e;
					return s.a.createElement(y, {
						key: a,
						channelId: a,
						channelState: c,
						isSelected: a === n,
						isGroup: e.type === S.a.Group,
						message: r,
						unread: !!o,
						mentionCount: i,
						currentUserId: t,
						unreadMessageCount: o
					})
				}))
			}
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
				channelName: "_2O9bxNWfKdVw3DGR5RL3qM",
				NotificationDisabledIcon: "_37mhpYJBT3e1_IrXsG97Pm",
				notificationDisabledIcon: "_37mhpYJBT3e1_IrXsG97Pm"
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
				f = n("./src/chat/selectors/channels.ts"),
				O = n("./src/chat/selectors/members.ts"),
				E = n("./src/chat/selectors/user.ts"),
				C = n("./src/chat/components/ChatMemberList/index.m.less"),
				j = n.n(C);
			const v = l.a.wrapped(u.a, "MemberActionDropdown", j.a),
				_ = l.a.wrapped(({
					className: e,
					children: t,
					onClick: n
				}) => r.a.createElement("li", {
					onClick: n,
					className: e
				}, t), "ListItem", j.a),
				I = l.a.span("IconContainer", j.a),
				x = l.a.wrapped(m.a, "Title", j.a),
				y = l.a.span("Warning", j.a),
				S = l.a.span("Info", j.a),
				w = Object(p.a)({
					channelType: e => Object(f.B)(e, "type"),
					members: (e, t) => t.members || Object(O.b)(e, t.channelId) || [],
					currentUserId: E.a
				}),
				N = Object(c.b)(w, e => ({
					onViewProfile: t => {
						e(Object(d.s)()), e(Object(d.y)()).then(() => {
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
					useNSFWIcons: f
				}) => (((e, t, n) => {
					if (n && void 0 !== t && e.length >= t) {
						const a = e[t];
						a && n(a.name)
					}
				})(c, p, u), r.a.createElement("ul", {
					className: e
				}, c && c.map((e, c) => r.a.createElement(_, {
					key: e.name,
					className: Object(i.a)(h.a, {
						[j.a.selected]: p === c,
						[j.a.withMenu]: !o
					}),
					onClick: () => {
						d ? d(e.name) : m(e.name)
					}
				}, r.a.createElement(I, null, f && e.isNSFW ? r.a.createElement(b.b, null) : r.a.createElement(g.a, {
					userId: e.id
				})), r.a.createElement(x, null, e.name), e.isModerator && l && r.a.createElement(S, null, n && a.fbt._("Host", null, {
					hk: "4berci"
				})), e.isNSFW && r.a.createElement(y, null, a.fbt._("NSFW", null, {
					hk: "36qPno"
				})), e.isBlockedByMe && r.a.createElement(y, null, a.fbt._("Blocked", null, {
					hk: "1RUrSV"
				})), !o && e.id !== s && r.a.createElement(v, {
					channelId: t,
					containerClassName: h.a,
					dropdownIndex: c,
					id: `MemberAction--Select-${c}`,
					userId: e.id,
					isBlockedUser: e.isBlockedByMe
				})))));
			T.displayName = "ChatMemberList", t.a = N(T)
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
				p = n("./src/chat/icons/svgs/NavClose/index.tsx"),
				b = n("./src/chat/selectors/app.ts"),
				g = n("./src/chat/components/CloseIcon/index.m.less"),
				f = n.n(g);
			t.a = ({
				className: e
			}) => {
				const t = Object(c.d)();
				Object(c.e)(b.c);
				return r.a.createElement(h.c, {
					className: Object(o.a)(f.a.IconButton, e),
					onClick: Object(m.b)(() => {
						t(Object(i.sizeChanged)(u.a.HIDDEN)), t(Object(d.i)()), t(Object(l.b)())
					}),
					title: a.fbt._("Close chat", null, {
						hk: "4dFacQ"
					})
				}, r.a.createElement(p.a, null))
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/config.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/components/CrisisFlow/CrisisFlowPage.m.less"),
				i = n.n(o),
				l = n("./src/chat/components/CrisisFlow/CrisisMainPage/index.m.less"),
				d = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = c.a.div("CrisisContent", d.a), m = c.a.div("CrisisImageContainer", i.a), p = c.a.img("CrisisImage", d.a), b = c.a.h2("CrisisTitle", i.a), g = c.a.p("CrisisDescription", i.a);
			var f = e => s.a.createElement(h, null, s.a.createElement(m, null, s.a.createElement(p, {
				src: `${r.a.assetPath}/img/crisis-line-icon.png`
			})), s.a.createElement(b, null, u._("Would you like Reddit to reach out to {username} ?", [u._param("username", s.a.createElement("span", null, "u/", e.username))], {
				hk: "3RFVlj"
			})), s.a.createElement(g, null, u._("We’ve partnered with {ctl} to provide redditors with support from trained Crisis Counselors, and will reach out (confidentially) to let {username} know that there are people who are here for them.", [u._param("ctl", s.a.createElement("a", {
				href: "https://www.crisistextline.org/",
				target: "_blank",
				rel: "noopener noreferrer"
			}, "Crisis Text Line")), u._param("username", s.a.createElement("strong", null, "u/", e.username))], {
				hk: "srFNa"
			})));
			var O = e => s.a.createElement("svg", {
				className: e.className,
				width: "7",
				height: "12",
				viewBox: "0 0 7 12",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M0.21967 11.7803C-0.0732233 11.4874 -0.0732233 11.0126 0.21967 10.7197L4.68934 6.25L0.21967 1.78033C-0.0732233 1.48744 -0.0732233 1.01256 0.21967 0.71967C0.512563 0.426777 0.987437 0.426777 1.28033 0.71967L6.28033 5.71967C6.57322 6.01256 6.57322 6.48744 6.28033 6.78033L1.28033 11.7803C0.987437 12.0732 0.512563 12.0732 0.21967 11.7803Z",
				fill: "#D3D6DA"
			}));
			var E = e => s.a.createElement("svg", {
				className: e.className,
				width: "24",
				height: "24",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M12.504 1.40581C10.8548 0.436577 8.91582 0.0822804 7.03046 0.405669C5.1451 0.729058 3.43503 1.70926 2.20312 3.17267C0.971219 4.63608 0.296983 6.48826 0.299833 8.40115H0.299805L0.299872 8.40828C0.313102 9.81313 0.695242 11.187 1.40423 12.3936L0.35366 15.2932C0.235566 15.6192 0.315178 15.984 0.558332 16.2311C0.801486 16.4782 1.16495 16.5636 1.49275 16.4508L4.41155 15.4461C4.8205 15.6752 5.24681 15.8723 5.68667 16.0356C6.15267 16.2085 6.67064 15.971 6.84359 15.505C7.01655 15.039 6.77899 14.521 6.31299 14.348C5.85073 14.1765 5.40714 13.9583 4.98911 13.6968C4.75881 13.5527 4.47577 13.5204 4.21892 13.6088L2.68747 14.1359L3.246 12.5944C3.34354 12.3252 3.30716 12.0256 3.14802 11.7876C2.47615 10.7827 2.1119 9.60363 2.09983 8.3949C2.09845 6.90836 2.62279 5.46917 3.58017 4.33187C4.53832 3.19367 5.86837 2.43129 7.33476 2.17976C8.80115 1.92824 10.3092 2.2038 11.5919 2.95764C12.8746 3.71149 13.8491 4.89497 14.3428 6.29846C14.5078 6.76735 15.0216 7.01375 15.4905 6.84881C15.9594 6.68386 16.2058 6.17004 16.0408 5.70115C15.4061 3.89665 14.1531 2.37504 12.504 1.40581ZM18.8305 8.17201C17.1805 7.45435 15.3385 7.30651 13.5952 7.75182C11.8518 8.19714 10.3064 9.21026 9.20265 10.6313C8.09895 12.0524 7.49983 13.8005 7.49983 15.5998H7.49979L7.49987 15.6083C7.5131 17.0132 7.89524 18.387 8.60423 19.5937L7.55365 22.4932C7.43556 22.8192 7.51517 23.184 7.75833 23.4311C8.00148 23.6782 8.36494 23.7637 8.69274 23.6508L11.6074 22.6476C13.0373 23.4576 14.6834 23.8153 16.3272 23.6671C18.1192 23.5055 19.8065 22.7519 21.1227 21.525C22.4389 20.2982 23.3092 18.668 23.5961 16.8917C23.8831 15.1154 23.5705 13.2941 22.7075 11.7152C21.8446 10.1363 20.4805 8.88968 18.8305 8.17201ZM14.0406 9.49583C15.3966 9.14947 16.8292 9.26445 18.1126 9.82264C19.3959 10.3808 20.4569 11.3504 21.1281 12.5785C21.7992 13.8065 22.0424 15.2231 21.8192 16.6046C21.596 17.9862 20.9191 19.2541 19.8954 20.2083C18.8717 21.1625 17.5594 21.7487 16.1655 21.8744C14.7717 22.0001 13.3757 21.658 12.1978 20.9023C11.9661 20.7537 11.6792 20.7192 11.4189 20.8088L9.88747 21.336L10.446 19.7944C10.5435 19.5252 10.5072 19.2256 10.348 18.9876C9.67627 17.9829 9.31203 16.8041 9.29983 15.5956C9.30077 14.1976 9.76668 12.8396 10.6242 11.7354C11.4827 10.6302 12.6847 9.84218 14.0406 9.49583Z",
				fill: "#1A1A1B"
			}));
			var C = e => s.a.createElement("svg", {
				className: e.className,
				width: "22",
				height: "24",
				viewBox: "0 0 22 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M10.6816 0C9.46749 0 8.3031 0.482306 7.44459 1.34082C6.58608 2.19932 6.10377 3.36371 6.10377 4.57783V7.08038C6.10377 8.29449 6.58608 9.45888 7.44459 10.3174C8.3031 11.1759 9.46749 11.6582 10.6816 11.6582C11.8957 11.6582 13.0601 11.1759 13.9186 10.3174C14.7771 9.45888 15.2594 8.29449 15.2594 7.08038V4.57783C15.2594 3.36371 14.7771 2.19933 13.9186 1.34082C13.0601 0.482306 11.8957 0 10.6816 0ZM8.73939 2.63562C9.2545 2.12052 9.95313 1.83113 10.6816 1.83113C11.4101 1.83113 12.1087 2.12052 12.6238 2.63562C13.1389 3.15073 13.4283 3.84936 13.4283 4.57783V7.08038C13.4283 7.80885 13.1389 8.50748 12.6238 9.02258C12.1087 9.53769 11.4101 9.82707 10.6816 9.82707C9.95313 9.82707 9.2545 9.53769 8.73939 9.02258C8.22429 8.50748 7.9349 7.80885 7.9349 7.08038V4.57783C7.9349 3.84936 8.22429 3.15073 8.73939 2.63562Z",
				fill: "#1A1A1B"
			}), s.a.createElement("path", {
				d: "M5.79858 13.6236C4.2607 13.6236 2.78581 14.2345 1.69837 15.322C0.610921 16.4094 0 17.8843 0 19.4222V23.0844C0 23.5901 0.409913 24 0.915566 24C1.42122 24 1.83113 23.5901 1.83113 23.0844V19.4222C1.83113 18.3699 2.24913 17.3608 2.99317 16.6168C3.73721 15.8727 4.74635 15.4547 5.79858 15.4547H15.5646C16.6169 15.4547 17.626 15.8727 18.37 16.6168C19.1141 17.3608 19.5321 18.3699 19.5321 19.4222V23.0844C19.5321 23.5901 19.942 24 20.4476 24C20.9533 24 21.3632 23.5901 21.3632 23.0844V19.4222C21.3632 17.8843 20.7523 16.4094 19.6648 15.322C18.5774 14.2345 17.1025 13.6236 15.5646 13.6236H5.79858Z",
				fill: "#1A1A1B"
			}));
			var j = e => s.a.createElement("svg", {
					className: e.className,
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("circle", {
					cx: "32",
					cy: "32",
					r: "32",
					fill: "#46D160",
					"fill-opacity": "0.2"
				}), s.a.createElement("path", {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M50.4967 21.6638L47.1391 18.3038C46.6879 17.8526 46.0783 17.6006 45.4423 17.6006C44.8039 17.6006 44.1943 17.8526 43.7455 18.3038L26.9599 35.087L20.2567 28.3838C19.3207 27.4454 17.8015 27.4454 16.8631 28.3838L13.5031 31.7438C12.5647 32.6822 12.5647 34.2014 13.5031 35.1374L25.2631 46.8974C25.7335 47.3654 26.3455 47.6006 26.9599 47.6006C27.5743 47.6006 28.1887 47.3654 28.6567 46.8974L50.4967 25.0574C51.4351 24.119 51.4351 22.6022 50.4967 21.6638Z",
					fill: "#46D160"
				})),
				v = n("./src/chat/components/CrisisFlow/CrisisThankYouPage/index.m.less"),
				_ = n.n(v);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = c.a.div("CrisisImageContainer", i.a), y = c.a.h2("CrisisTitle", i.a), S = c.a.p("CrisisDescription", i.a), w = c.a.div("CrisisOtherActions", _.a), N = c.a.h4("CrisisOtherActionsTitle", _.a), T = c.a.div("CrisisLinkIconContainer", _.a), M = c.a.div("CrisisLinkText", _.a), k = c.a.h3("CrisisLinkTitle", _.a), A = c.a.p("CrisisLinkDescription", _.a);
			var P = e => s.a.createElement("div", {
				className: _.a.CrisisThankYouPage
			}, s.a.createElement(x, null, s.a.createElement(j, {
				className: _.a.CrisisTickImage
			})), s.a.createElement(y, null, I._("Thanks for caring about your fellow redditor", null, {
				hk: "1ePh84"
			})), s.a.createElement(S, null, I._("We’ve reached out to {username} . By letting us know, you’ve helped connect them to people who are there to listen and provide support.", [I._param("username", s.a.createElement("span", null, "u/", e.username))], {
				hk: "3X1mGY"
			})), s.a.createElement(w, null, s.a.createElement(N, null, I._("Other things you can do", null, {
				hk: "4oCunD"
			})), s.a.createElement("a", {
				href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
				target: "_blank",
				rel: "noopener noreferrer",
				className: _.a.CrisisLink
			}, s.a.createElement(T, null, s.a.createElement(E, null)), s.a.createElement(M, null, s.a.createElement(k, null, I._("Learn how to help someone in crisis", null, {
				hk: "3HohFx"
			})), s.a.createElement(A, null, I._("Get advice on what you can say and how to be supportive.", null, {
				hk: "1NHS5d"
			}))), s.a.createElement(O, {
				className: _.a.CrisisLinkArrow
			})), s.a.createElement("a", {
				href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/how-do-i-get-myself-support-after-helping-someone",
				target: "_blank",
				rel: "noopener noreferrer",
				className: _.a.CrisisLink
			}, s.a.createElement(T, null, s.a.createElement(C, null)), s.a.createElement(M, null, s.a.createElement(k, null, I._("Get yourself support", null, {
				hk: "kTT0U"
			})), s.a.createElement(A, null, I._("If this has brought up difficult emotions, there are people and resources here for you too.", null, {
				hk: "37R4JZ"
			}))), s.a.createElement(O, {
				className: _.a.CrisisLinkArrow
			}))));
			class L extends s.a.Component {
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement(a.Fragment, null, e.ctlSubmitted ? s.a.createElement(P, {
						username: e.username
					}) : s.a.createElement(f, {
						username: e.username
					}))
				}
			}
			t.a = L
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
		"./src/chat/components/FileUploader/FileDrop/index.m.less": function(e, t, n) {
			e.exports = {
				FileDrop: "_23gUEpMfKS2qim8H0Ah4zU",
				fileDrop: "_23gUEpMfKS2qim8H0Ah4zU",
				isOver: "_21q5qymZxxXgGAU4k8Ja17"
			}
		},
		"./src/chat/components/FileUploader/FilePreview/index.m.less": function(e, t, n) {
			e.exports = {
				Preview: "_1Z-f0XEpZzmT6AQi_u3J6N",
				preview: "_1Z-f0XEpZzmT6AQi_u3J6N",
				Item: "guNBtPswkjAbHV-Z4Y2qP",
				item: "guNBtPswkjAbHV-Z4Y2qP",
				Placeholder: "kYEu5ymtYorcAtfJi2Ppk",
				placeholder: "kYEu5ymtYorcAtfJi2Ppk",
				Icon: "_1k6bqTZy8a2hnwMV6hRu2w",
				icon: "_1k6bqTZy8a2hnwMV6hRu2w",
				isLimited: "_3hTD6PetiXCJaAqJWS7Cnu",
				Image: "_2LnIGP0kVCeCSDNoE4PVpw",
				image: "_2LnIGP0kVCeCSDNoE4PVpw",
				CloseButton: "_1oj2N1hYztSMWTqjIT2zYE",
				closeButton: "_1oj2N1hYztSMWTqjIT2zYE"
			}
		},
		"./src/chat/components/FileUploader/ImageInput/index.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_1EYW38wfx0cz3XB9Aa1XAT",
				icon: "_1EYW38wfx0cz3XB9Aa1XAT",
				Input: "_21hdKjuRiG_oj4d3vsVHqz",
				input: "_21hdKjuRiG_oj4d3vsVHqz"
			}
		},
		"./src/chat/components/FileUploader/useMedia.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/chat/actions/toast.ts"),
				r = n("./src/chat/actions/uploads/index.ts"),
				c = n("./src/chat/models/Uploads/index.ts"),
				o = n("./src/chat/selectors/channels.ts"),
				i = n("./src/chat/selectors/uploads.ts");
			const {
				ActiveFilesLimitExceeded: l,
				UnsupportedBrowser: d,
				InvalidMediaType: u,
				FileSizeLimitExceeded: h
			} = c.a, m = 1048576, p = 40 * m, b = 20 * m, g = new Set(Object.values(c.d)), f = e => {
				const t = (e => {
						if (window.URL && window.URL.createObjectURL) return window.URL.createObjectURL(e)
					})(e),
					n = (e => {
						if (!e) return;
						const t = e.replace("image/", "").toUpperCase();
						return g.has(t) ? t : null
					})(e.type),
					a = e.size;
				return t ? n ? n === c.d.GIF && a > p ? {
					error: h
				} : a > b ? {
					error: h
				} : {
					metadata: {
						localUrl: t,
						mimetype: n,
						size: a
					}
				} : {
					error: u
				} : {
					error: d
				}
			};
			t.d = () => {
				const e = Object(a.d)(),
					{
						isOver: t,
						isDrop: n
					} = Object(a.e)(i.a),
					d = Object(a.e)(i.c),
					u = Object(a.e)(o.n),
					h = d.length >= 8;
				return {
					uploads: d,
					isDrop: n,
					isOver: t,
					isLimited: h,
					setFiles: (t, n) => {
						if (h) return void e(Object(s.f)([l]));
						let {
							activeUploads: a,
							errors: o
						} = ((e, t) => {
							const n = [];
							return {
								activeUploads: [...e].map(e => {
									const {
										error: a,
										metadata: s
									} = f(e);
									return a && n.push(a), s && Object(c.e)(e, s, t)
								}).filter(e => e),
								errors: n
							}
						})(t, n);
						const i = 8 - (a.length + d.length);
						i < 0 && (a = a.splice(0, i), o = o.push(l) && o || []), u && a.length ? a.forEach(t => (e => new Promise(t => {
							const n = new Image;
							n.onerror = () => t({}), n.onload = () => t({
								height: n.height,
								width: n.width
							}), n.src = e
						}))(t.metadata.localUrl).then(({
							height: n,
							width: a
						}) => {
							t.metadata.height = n, t.metadata.width = a, e(Object(r.f)({
								upload: t,
								channelId: u
							}))
						})) : o.length && e(Object(s.f)(o))
					}
				}
			}
		},
		"./src/chat/components/FormBuilder/async.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(a.a)({
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
				return Ss
			}));
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/chat/actions/tracking.ts"),
				d = n("./src/chat/actions/uploads/index.ts"),
				u = n("./src/chat/helpers/dom.ts"),
				h = n("./src/chat/components/FileUploader/FileDrop/index.m.less"),
				m = n.n(h);
			var p = ({
					dropZoneRef: e,
					onChange: t
				}) => {
					const n = Object(o.d)(),
						[a, s] = Object(r.useState)(!1),
						l = Object(r.useRef)(null),
						h = l.current,
						p = e.current;
					return Object(r.useEffect)(() => {
						p && h && (h.ondragleave = Object(u.b)(() => {
							a && (s(!1), n(Object(d.h)({
								isOver: !1,
								isDrop: !1
							})))
						}), p.ondragenter = Object(u.b)(() => {
							a || (s(!0), n(Object(d.h)({
								isOver: !0,
								isDrop: !1
							})))
						}), p.ondragover = Object(u.b)(), p.ondrop = Object(u.b)(e => {
							a && (s(!1), n(Object(d.h)({
								isOver: !1,
								isDrop: !0
							}))), (null == e ? void 0 : e.dataTransfer) && t(e.dataTransfer.files, e)
						}))
					}), c.a.createElement("div", {
						ref: l,
						className: Object(i.a)(m.a.FileDrop, {
							[m.a.isOver]: a
						})
					})
				},
				b = n("./src/chat/controls/Svg/index.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var f = e => c.a.createElement(b.a, g({}, e, {
					viewBox: "-1 1 22 19"
				}), c.a.createElement("path", {
					d: "M18.859,3.712A2.611,2.611,0,0,0,17,2.939H14.818l-1.163-1.6a1.128,1.128,0,0,0-.91-.464H7.255a1.13,1.13,0,0,0-.91.463l-1.163,1.6H3A2.629,2.629,0,0,0,.375,5.563V15.5A2.629,2.629,0,0,0,3,18.125H16.969a2.63,2.63,0,0,0,2.624-2.616l.031-9.936A2.609,2.609,0,0,0,18.859,3.712ZM18.343,15.5a1.378,1.378,0,0,1-1.374,1.371H3A1.377,1.377,0,0,1,1.625,15.5V5.563A1.377,1.377,0,0,1,3,4.188H5.818l1.5-2.063h5.364l1.5,2.063H17a1.374,1.374,0,0,1,1.374,1.38Z"
				}), c.a.createElement("path", {
					d: "M10,5.375A4.625,4.625,0,1,0,14.625,10,4.631,4.631,0,0,0,10,5.375Zm0,8A3.375,3.375,0,1,1,13.375,10,3.379,3.379,0,0,1,10,13.375Z"
				})),
				O = n("./src/chat/components/FileUploader/ImageInput/index.m.less"),
				E = n.n(O);
			var C = e => c.a.createElement("label", {
					className: e.className,
					tabIndex: 0
				}, e.children ? e.children : c.a.createElement(f, {
					className: E.a.Icon
				}), c.a.createElement("input", {
					id: e.id,
					name: e.name,
					type: "file",
					onChange: t => {
						var n;
						(null === (n = null == t ? void 0 : t.target) || void 0 === n ? void 0 : n.files) && (e.onChange(t.target.files, t), t.currentTarget.value = "", t.target.value = "")
					},
					accept: e.accept || "image/*",
					multiple: e.multiple || !1,
					tabIndex: e.tabIndex || 0,
					className: E.a.Input
				})),
				j = n("./src/chat/components/FileUploader/useMedia.tsx"),
				v = n("./src/chat/models/Uploads/index.ts");

			function _(e) {
				const t = Object(o.d)(),
					{
						setFiles: n
					} = Object(j.d)();
				return c.a.createElement(p, {
					dropZoneRef: e.dropZoneRef,
					onChange: e => {
						n(e, v.b.Drop), t(Object(l.B)(e.length))
					}
				})
			}

			function I(e) {
				const t = Object(o.d)(),
					{
						setFiles: n
					} = Object(j.d)();
				return c.a.createElement(C, {
					className: e.className,
					onChange: e => {
						n(e, v.b.Gallery), t(Object(l.t)())
					}
				}, e.children)
			}
			var x = n("./node_modules/lodash/map.js"),
				y = n.n(x),
				S = n("./node_modules/lodash/sortBy.js"),
				w = n.n(S),
				N = n("./src/chat/actions/channel.ts"),
				T = n("./src/chat/actions/message/index.ts"),
				M = n("./src/chat/actions/message/inboxScroller.ts"),
				k = n("./src/chat/actions/message/richUnit.ts"),
				A = n("./src/chat/controls/Button/index.tsx"),
				P = n("./src/chat/icons/svgs/Close/index.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var D = e => c.a.createElement(b.a, L({}, e, {
					viewBox: "0 0 20 20"
				}), c.a.createElement("g", {
					id: "icons_flat"
				}, c.a.createElement("polygon", {
					points: "19,9 11,9 11,1 9,1 9,9 1,9 1,11 9,11 9,19 11,19 11,11 19,11"
				}))),
				U = n("./src/chat/selectors/channels.ts"),
				R = n("./src/chat/components/FileUploader/FilePreview/index.m.less"),
				B = n.n(R);
			var F = () => {
					const e = Object(o.d)(),
						{
							uploads: t,
							isDrop: n,
							isOver: a,
							isLimited: s
						} = Object(j.d)(),
						r = Object(o.e)(U.J),
						l = t.map(t => c.a.createElement("div", {
							className: B.a.Item,
							key: `item-${t.metadata.localUrl}`
						}, c.a.createElement(A.c, {
							className: B.a.CloseButton,
							onClick: () => e(Object(d.g)(t.id))
						}, c.a.createElement(P.a, null)), c.a.createElement("img", {
							className: B.a.Image,
							src: t.metadata.localUrl,
							key: `image-${t.metadata.localUrl}`
						}))),
						u = (a || n || l.length) && !s || s && a ? c.a.createElement(I, {
							className: Object(i.a)(B.a.Placeholder, {
								[B.a.isLimited]: s
							}),
							key: "item-placeholder"
						}, c.a.createElement(D, {
							className: B.a.Icon
						})) : null;
					return !l && !u || r ? null : c.a.createElement("div", {
						className: B.a.Preview
					}, l, u)
				},
				H = n("./node_modules/fbt/lib/FbtPublic.js"),
				G = n("./src/lib/lessComponent.tsx"),
				V = n("./src/chat/helpers/json.ts"),
				z = n("./src/chat/icons/Userpic/index.tsx"),
				W = n("./src/chat/components/Intro/index.m.less"),
				K = n.n(W);
			const Z = G.a.span("Wrapper", K.a),
				q = G.a.div("ChannelDescription", K.a),
				Q = G.a.ul("Users", K.a),
				J = G.a.li("User", K.a),
				X = G.a.span("UserTitle", K.a);
			var Y = ({
					channel: e,
					users: t
				}) => c.a.createElement(Z, null, c.a.createElement(Q, null, t.map((e, t, n) => c.a.createElement(J, {
					key: e.id
				}, c.a.createElement(z.a, {
					height: "16px",
					width: "16px",
					userId: e.id
				}), c.a.createElement(X, null, `${e.name}${t<n.length-1?",":""}`)))), c.a.createElement(q, null, (e => {
					try {
						const t = e.data && Object(V.a)(e.data, {
							welcome_text: ""
						});
						if (t && t.welcome_text) return t && t.welcome_text
					} catch (t) {}
					return H.fbt._("This is the start of a beautiful thing. Say something nice, or share a cat fact.", null, {
						hk: "J8whX"
					})
				})(e))),
				$ = n("./node_modules/lodash/noop.js"),
				ee = n.n($),
				te = n("./node_modules/lodash/throttle.js"),
				ne = n.n(te),
				ae = n("./src/chat/actions/channel/draftMessage.ts"),
				se = n("./src/chat/actions/gifs/index.ts");
			const re = "/";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var ce = n("./node_modules/react-router-redux/es/index.js"),
				oe = n("./src/lib/constants/index.ts"),
				ie = n("./src/telemetry/models/Event.ts"),
				le = n("./src/chat/actions/tooltip.ts"),
				de = n("./src/chat/components/MessageInput/constants.ts"),
				ue = n("./src/chat/constants/messages.ts"),
				he = n("./src/chat/icons/Snoo/index.tsx"),
				me = n("./src/chat/models/Channel/index.ts"),
				pe = n("./src/chat/actions/channel/dropdown.ts");
			const be = function(e, t) {
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
				ge = function(e) {
					return (/^(@|u\/)([^\s]+)/g.exec(e) || [])[2] || ""
				},
				fe = function(e, t) {
					const {
						word: n
					} = be(e, t);
					return {
						hasUsername: /^(@|u\/)([^\s]+)?$/g.test(n),
						username: ge(n)
					}
				},
				Oe = function(e, t, n) {
					const {
						word: a,
						posStart: s,
						posEnd: r
					} = be(e, n), c = (/^(@|u\/)/gm.exec(a) || [])[1];
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
				},
				Ee = e => Boolean(e.match(/^(\/)(\w+)?$/g));
			var Ce, je = n("./src/chat/constants/users.ts"),
				ve = n("./src/chat/endpoints/accounts/index.ts"),
				_e = n("./src/chat/endpoints/sendbird/index.ts"),
				Ie = n("./src/chat/helpers/urls/index.ts"),
				xe = n("./src/chat/models/Channel/utils.ts"),
				ye = n("./src/chat/models/Contact/index.ts"),
				Se = n("./src/chat/selectors/contacts.ts");
			! function(e) {
				e.GIF = "gif", e.SNOOMOJI = "snoomoji", e.INVITE = "invite", e.MEMBERS = "members", e.MUTE = "mute", e.UNMUTE = "unmute", e.LEAVE = "leave", e.KICK = "kick", e.NEW_CHAT = "new_chat", e.DIRECT = "direct", e.TEXT_EMOJI = "text_emoji"
			}(Ce || (Ce = {}));
			const {
				Group: we
			} = me.a, Ne = {
				shrug: "¯\\_(ツ)_/¯",
				tableflip: "(╯°□°）╯︵ ┻━┻",
				unflip: "┬─┬ ノ( ゜-゜ノ)",
				lennyface: "( ͡° ͜ʖ ͡°)",
				crazy: "(◐‿◑)",
				take_my_energy: "༼ つ ◕_◕ ༽つ",
				kirby: "(っ^‿^)っ",
				deal_with_it: "(▀̿Ĺ̯▀̿ ̿)",
				snowing: "❆❅❉",
				confused: "¯\\(°_o)/¯",
				in_love: "(♥_♥)",
				bummed_out: "(╯_╰)",
				angry: "ヽ(｀⌒´メ)ノ",
				cat: "(=◑ᆺ◐=)",
				dancing: "♪┏(・o･)┛♪",
				doggy: "V●ᴥ●V",
				facepalm: "(/ _ < )",
				flexing: "ᕙ(`▽´)ᕗ",
				happy: "(●＾o＾●)",
				hug: "(っ⌒‿⌒)っ",
				peace: "(^o^)y",
				phone: "(((☎)))",
				rose: "@~)~~~~",
				yummy: "(っ˘ڡ˘ς)"
			}, Te = ({
				commandValue: e,
				channelId: t
			}) => async (n, a, {
				apiContext: s
			}) => {
				const r = a(),
					{
						user: {
							session: c
						}
					} = r;
				if (t && e && c) {
					const n = Object(U.h)(a(), t);
					if ((null == n ? void 0 : n.type) === me.a.Group) {
						if (e === oe.D) return;
						let n = [];
						const r = Object(Se.c)(a(), e);
						if (r) n = [{
							user_id: r.id,
							nickname: r.name
						}];
						else {
							const t = await Object(ve.b)(s(), e);
							if (t.ok) {
								const e = Object(ye.d)(t.body.data);
								e && (n = [{
									user_id: e.id,
									nickname: e.name
								}])
							}
						}
						n.length && await Object(_e.i)(s(), c, n, Object(xe.a)(t))
					}
				}
			}, Me = ({
				channelId: e,
				commandShortcut: t
			}) => async n => {
				if (e && t) {
					const a = Ne[t];
					a && n(Object(T.r)(e, a, ue.c.TEXT))
				}
			}, ke = [{
				name: Ce.GIF,
				command: "giphy",
				aliases: ["gif", "g"],
				description: "Giphy",
				example: "/giphy query · /gif query · /g query",
				action: ({
					commandValue: e
				}) => async t => {
					e && t(Object(se.l)(e)), t(Object(le.c)({
						tooltipId: de.b
					}))
				}
			}, {
				name: Ce.SNOOMOJI,
				command: "snoomoji",
				aliases: ["s"],
				description: "Add a snoomoji",
				example: "/snoomoji name · /s name",
				action: ({
					commandValue: e,
					channelId: t
				}) => async n => {
					e && t && he.b.includes(e) ? n(Object(T.r)(t, e.trim(), ue.c.SNOOMOJI)) : n(Object(le.c)({
						tooltipId: de.d
					}))
				}
			}, {
				name: Ce.INVITE,
				command: "invite",
				description: "Invite",
				example: "/invite username",
				channelType: we,
				action: Te
			}, {
				name: Ce.MEMBERS,
				command: "members",
				channelType: we,
				aliases: ["m"],
				description: "Display group chat's member list",
				example: "/members · /m",
				action: ({
					channelId: e
				}) => async (t, n) => {
					if (e) {
						const a = Object(U.h)(n(), e);
						(null == a ? void 0 : a.type) === me.a.Group && t(Object(pe.i)())
					}
				}
			}, {
				name: Ce.MUTE,
				command: "mute",
				description: "Mute this chat",
				action: ({
					channelId: e
				}) => async (t, n) => {
					e && t(Object(pe.d)(e))
				}
			}, {
				name: Ce.UNMUTE,
				command: "unmute",
				description: "Unmute this chat",
				action: ({
					channelId: e
				}) => async (t, n) => {
					e && t(Object(pe.f)(e))
				}
			}, {
				name: Ce.LEAVE,
				command: "leave",
				description: "Leave this chat",
				action: ({
					channelId: e
				}) => async (t, n) => {
					e && t(Object(N.G)(e))
				}
			}, {
				name: Ce.KICK,
				command: "kick",
				description: "Kick a user from this chat",
				channelType: we,
				example: "/kick u/username",
				action: ({
					commandValue: e,
					channelId: t
				}) => async (n, a, {
					apiContext: s
				}) => {
					const r = a(),
						{
							user: {
								session: c
							}
						} = r;
					if (!Object(U.a)(r)) return;
					const o = ge(e);
					if (t && o && c) {
						const e = Object(U.h)(a(), t);
						if ((null == e ? void 0 : e.type) === me.a.Group) {
							if (o === oe.D) return;
							let e;
							const r = Object(Se.c)(a(), o);
							if (r) e = r.id;
							else {
								const t = await Object(ve.b)(s(), o);
								if (t.ok) {
									const n = Object(ye.d)(t.body.data);
									n && (e = n.id)
								}
							}
							e && n(Object(ce.b)(Object(Ie.userActionUrl)(t, e, je.a.Kick, {
								source: ie.b.ChatView
							})))
						}
					}
				}
			}, {
				name: Ce.NEW_CHAT,
				command: "new",
				description: "Start new chat",
				action: () => async e => {
					const t = Object(Ie.getRedirectURL)(Object(Ie.channelUrl)("create"));
					e(Object(ce.b)(t))
				}
			}, {
				name: Ce.DIRECT,
				command: "dm",
				description: "Direct message someone in this chat",
				example: "/dm u/username",
				action: ({
					commandValue: e
				}) => async (t, n) => {
					if (!e) return;
					const a = Object(U.q)(n(), e);
					if (a) {
						const e = Object(Ie.getRedirectURL)(Object(Ie.channelUrl)(a.channelId));
						t(Object(ce.b)(e))
					} else t(Te({
						commandValue: e
					}))
				}
			}, ...Object.keys(Ne).map(e => ({
				name: Ce.TEXT_EMOJI,
				command: e,
				description: Ne[e],
				action: Me
			}))], Ae = (e, t) => async n => {
				ke.forEach(async a => {
					var s;
					const r = (e => {
							const t = e.map(e => `${re}${e}`).join("|");
							return new RegExp(`^(${t})?(\\s.+)?$`, "i")
						})([...(null === (s = a.aliases) || void 0 === s ? void 0 : s.length) ? a.aliases : [], a.command]),
						c = e.match(r);
					if (null == c ? void 0 : c.length) {
						const e = c[1].replace("/", "");
						n(Object(l.M)(e));
						const s = c[2];
						await n(a.action({
							commandValue: null == s ? void 0 : s.trim(),
							channelId: t,
							commandShortcut: e
						})), n(Object(ae.f)(t))
					}
				})
			};
			var Pe = n("./src/chat/actions/surveyTrigger/index.ts"),
				Le = n("./src/higherOrderComponents/asTooltip.tsx"),
				De = n("./src/chat/components/Scroller/index.tsx"),
				Ue = n("./src/chat/constants/page.ts"),
				Re = n("./src/chat/controls/Dropdown/index.tsx"),
				Be = n("./src/chat/selectors/app.ts"),
				Fe = n("./src/chat/selectors/tooltip.ts"),
				He = n("./src/chat/components/MessageTooltip/index.m.less"),
				Ge = n.n(He);
			const Ve = "MessageInputTooltip--Container",
				ze = Object(Le.a)(Re.a),
				We = ({
					children: e
				}) => c.a.createElement("div", {
					className: Ge.a.Picker
				}, e);
			var Ke = ({
					id: e,
					isOpen: t,
					children: n,
					arrowOffset: a = 15,
					isArrowShow: s = !0
				}) => {
					const r = Object(o.e)(Object(Fe.b)(e)),
						l = Object(o.d)(),
						d = s ? {
							left: "unset",
							right: "360px",
							bottom: "70px"
						} : {
							bottom: "50px"
						};
					return c.a.createElement(ze, {
						className: Object(i.a)(Ge.a.Dropdown, {
							[Ge.a.noArrow]: !s
						}),
						tooltipId: Ve,
						container: document.getElementById(Ue.a),
						isOpen: t || r,
						targetPosition: ["left", "bottom"],
						excludeContainerPosition: !0,
						closeOnClickOutside: !0,
						isOverlayOff: !0,
						style: {
							...d,
							top: "unset"
						}
					}, c.a.createElement("div", {
						className: Ge.a.DropdownWrapper,
						onClick: () => l(Object(le.d)())
					}, c.a.createElement(We, null, n, s && c.a.createElement("span", {
						className: Ge.a.Arrow,
						style: {
							right: `${a}px`
						}
					}))))
				},
				Ze = n("./node_modules/lodash/debounce.js"),
				qe = n.n(Ze);
			var Qe = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				Je = n("./src/chat/controls/Gif/index.tsx");

			function Xe() {
				return (Xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ye = e => c.a.createElement(b.a, Xe({}, e, {
				viewBox: "0 0 20 20"
			}), c.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375Zm3.53,12.1-1.06,1.06L10,11.061,7.53,13.53,6.47,12.47,8.939,10,6.47,7.53,7.53,6.47,10,8.939,12.47,6.47l1.06,1.06L11.061,10Z"
			}));

			function $e() {
				return ($e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var et = e => c.a.createElement(b.a, $e({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? c.a.createElement("path", {
					d: "m19.7 18.3-4.5-4.5c2.9-3.7 2.3-9.1-1.4-12S4.7-.5 1.8 3.2s-2.3 9.1 1.4 12c3.1 2.4 7.5 2.4 10.6 0l4.5 4.5 1.4-1.4zM8.5 15C4.9 15 2 12.1 2 8.5S4.9 2 8.5 2 15 4.9 15 8.5 12.1 15 8.5 15z"
				}) : c.a.createElement("path", {
					d: "m19.4 18.6-4.8-4.8c2.9-3.4 2.5-8.6-.9-11.5S5.2-.2 2.3 3.2s-2.5 8.6.9 11.5c3.1 2.6 7.6 2.6 10.6 0l4.8 4.8.8-.9zM8.5 15.4c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9c0 3.8-3.1 6.9-6.9 6.9z"
				})),
				tt = n("./src/chat/selectors/gifs.ts"),
				nt = n("./src/chat/components/MessageTooltip/Picker/Gif/index.m.less"),
				at = n.n(nt);
			const st = ({
					children: e
				}) => {
					const t = Object(o.e)(Be.f);
					return c.a.createElement("div", {
						className: Object(i.a)(at.a.Wrapper, {
							[at.a.embedded]: t
						})
					}, e)
				},
				rt = ({
					children: e,
					isVisible: t,
					onClick: n
				}) => t ? c.a.createElement("div", {
					className: at.a.ClearIcon,
					onClick: n
				}, e) : null,
				ct = () => {
					const e = Object(o.e)(tt.b),
						[t, n] = Object(r.useState)(() => e),
						a = Object(r.useRef)(null),
						s = Object(o.d)(),
						i = Object(r.useCallback)(qe()(e => {
							(null == e ? void 0 : e.length) >= 2 ? s(Object(se.k)(10, e)) : s(Object(se.l)(""))
						}, 500), []);
					return Object(r.useEffect)(() => {
						var e;
						null === (e = null == a ? void 0 : a.current) || void 0 === e || e.focus()
					}, [a]), c.a.createElement("div", {
						className: at.a.SearchBarWrapper,
						onClick: e => e.stopPropagation()
					}, c.a.createElement(et, {
						className: at.a.SearchIcon
					}), c.a.createElement("input", {
						className: at.a.SearchBar,
						ref: a,
						value: t,
						placeholder: H.fbt._("Search", null, {
							hk: "3ixhgZ"
						}),
						tabIndex: 0,
						onChange: e => {
							(e => {
								n(e), i(e)
							})(e.currentTarget.value)
						}
					}), c.a.createElement(rt, {
						onClick: async () => {
							(null == a ? void 0 : a.current) && (await s(Object(se.l)("")), n(""), a.current.focus(), s(Object(se.j)(20)))
						},
						isVisible: Boolean(t)
					}, c.a.createElement(Ye, null)))
				},
				ot = ({
					onPickGif: e
				}) => {
					const t = Object(o.d)(),
						n = Object(o.e)(tt.a),
						a = Object(o.e)(tt.d),
						s = Object(r.useRef)(null),
						i = Object(o.e)(tt.b),
						l = Object(o.e)(tt.c),
						d = Object(o.e)(tt.f);
					Object(r.useEffect)(() => {
						var e;
						(null === (e = null == s ? void 0 : s.current) || void 0 === e ? void 0 : e.scrollToTop) && s.current.scrollToTop()
					}, [i]), Object(r.useEffect)(() => {
						(null == n ? void 0 : n.length) || i || t(Object(se.j)(20)), i && t(Object(se.k)(10, i))
					}, []);
					const u = (t = !1) => (null == n ? void 0 : n.length) ? n.map((n, a) => {
						if (Boolean(a % 2) === t) return c.a.createElement(Je.a, {
							className: at.a.Gif,
							source: n.fixed_width.url,
							key: n.id,
							height: n.fixed_width.dimensions.height,
							title: n.title,
							isPreview: !0,
							onClick: () => (t => {
								e(t)
							})(n)
						})
					}) : null;
					return c.a.createElement(De.b, {
						className: at.a.GifListWrapper,
						ref: s,
						loadMoreRows: () => t(Object(se.k)(10, i)),
						isLoadMoreRowsComplete: (() => !!a) || l
					}, c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
						className: at.a.Column
					}, u(), d ? Object(Qe.a)({
						height: Qe.f.XS
					}) : a ? Object(Qe.b)(Qe.c.FIRST) : null), c.a.createElement("div", {
						className: at.a.Column
					}, u(!0), d ? Object(Qe.a)({
						height: Qe.f.S
					}) : null, a && !d ? Object(Qe.b)(Qe.c.SECOND) : null)))
				};
			var it = ({
					onPickGif: e
				}) => c.a.createElement(st, null, c.a.createElement(ct, null), c.a.createElement(ot, {
					onPickGif: e
				})),
				lt = n("./src/config.ts"),
				dt = n("./src/chat/icons/svgs/ChatNew/index.tsx"),
				ut = n("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				ht = n("./src/chat/icons/svgs/EnableNotifications/index.tsx");

			function mt() {
				return (mt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var pt = e => c.a.createElement(b.a, mt({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? c.a.createElement("path", {
					d: "M10 .875A9.125 9.125 0 1019.125 10 9.135 9.135 0 0010 .875zM11.107 15a1.242 1.242 0 01-.465.462 1.342 1.342 0 01-1.3 0 1.236 1.236 0 01-.465-.465 1.287 1.287 0 01-.167-.65 1.306 1.306 0 01.167-.653 1.251 1.251 0 01.465-.471 1.27 1.27 0 01.653-.175 1.253 1.253 0 01.649.175A1.322 1.322 0 0111.107 15zm1.781-6.251a2.423 2.423 0 01-.407.646 8.565 8.565 0 01-.629.615q-.335.3-.53.513A1.922 1.922 0 0011 11a1.375 1.375 0 00-.13.6v.6H9.049v-.574a2.411 2.411 0 01.181-.963 2.479 2.479 0 01.435-.694 7.663 7.663 0 01.663-.632q.287-.254.454-.421a1.56 1.56 0 00.277-.372.93.93 0 00.109-.445.856.856 0 00-.15-.5 1.029 1.029 0 00-.407-.346 1.262 1.262 0 00-.564-.127 1.314 1.314 0 00-.608.145 1.153 1.153 0 00-.448.4 1.035 1.035 0 00-.174.566H6.93a2.887 2.887 0 01.417-1.486 2.822 2.822 0 011.118-1.042 3.441 3.441 0 011.63-.377 3.483 3.483 0 011.518.322 2.535 2.535 0 011.059.9 2.331 2.331 0 01.383 1.318 2.136 2.136 0 01-.167.875z"
				}) : c.a.createElement(c.a.Fragment, null, c.a.createElement("path", {
					d: "M10 .875A9.125 9.125 0 1019.125 10 9.135 9.135 0 0010 .875zm0 17A7.875 7.875 0 1117.875 10 7.884 7.884 0 0110 17.875z"
				}), c.a.createElement("path", {
					d: "M10.479 13.635a1.085 1.085 0 00-.547-.141 1.035 1.035 0 00-.537.145 1.009 1.009 0 00-.379.388 1.1 1.1 0 00-.137.547 1.018 1.018 0 00.143.533 1.045 1.045 0 00.387.38 1.056 1.056 0 00.536.14 1.076 1.076 0 00.54-.14 1.008 1.008 0 00.387-.385 1.08 1.08 0 00.14-.541 1.05 1.05 0 00-.533-.926zM11.507 5.641a3.213 3.213 0 00-1.425-.309 3.15 3.15 0 00-1.535.368 2.646 2.646 0 00-1.028.974 2.52 2.52 0 00-.363 1.312h1.463a1.172 1.172 0 01.181-.661 1.327 1.327 0 01.516-.468 1.623 1.623 0 011.415-.017 1.212 1.212 0 01.5.431 1.1 1.1 0 01.181.618 1.063 1.063 0 01-.119.5 1.56 1.56 0 01-.3.4 9.531 9.531 0 01-.492.43 6.846 6.846 0 00-.656.585 2.292 2.292 0 00-.431.656 2.206 2.206 0 00-.178.919v.766h1.429v-.793a1.281 1.281 0 01.13-.58 1.824 1.824 0 01.321-.459c.128-.132.3-.3.533-.493a7.691 7.691 0 00.633-.584 2.279 2.279 0 00.41-.622 2.015 2.015 0 00.167-.85A2.262 2.262 0 0012.5 6.5a2.41 2.41 0 00-.993-.859z"
				}))),
				bt = n("./src/chat/icons/svgs/InviteMember/index.tsx");

			function gt() {
				return (gt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ft = e => c.a.createElement(b.a, gt({}, e, {
					viewBox: "0 0 20 20"
				}), c.a.createElement("path", {
					d: "M16.8,3.2A9.62,9.62,0,0,0,.491,8.5a9.506,9.506,0,0,0,1.146,6.237L.453,18.647a.726.726,0,0,0,.9.9l3.99-1.143a9.483,9.483,0,0,0,4.652,1.218,9.841,9.841,0,0,0,1.553-.124A9.62,9.62,0,0,0,16.8,3.2Zm1.464,8.176a8.414,8.414,0,0,1-6.919,6.9A8.3,8.3,0,0,1,5.74,17.2l-.232-.138L1.93,18.084l1.063-3.512-.144-.239a8.28,8.28,0,0,1-1.123-5.64,8.378,8.378,0,1,1,16.54,2.678Z"
				}), c.a.createElement("path", {
					d: "M10,5.375A4.625,4.625,0,1,0,14.625,10,4.631,4.631,0,0,0,10,5.375ZM6.625,10a3.354,3.354,0,0,1,.59-1.9L11.9,12.785A3.371,3.371,0,0,1,6.625,10Zm6.16,1.9L8.1,7.215A3.371,3.371,0,0,1,12.785,11.9Z"
				})),
				Ot = n("./src/chat/icons/svgs/Leave/index.tsx");

			function Et() {
				return (Et = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ct = e => c.a.createElement(b.a, Et({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? c.a.createElement(c.a.Fragment, null, c.a.createElement("rect", {
				x: "7",
				y: "9",
				width: "12",
				height: "2"
			}), c.a.createElement("rect", {
				x: "7",
				y: "3",
				width: "12",
				height: "2"
			}), c.a.createElement("rect", {
				x: "7",
				y: "15",
				width: "12",
				height: "2"
			}), c.a.createElement("circle", {
				cx: "3",
				cy: "4",
				r: "2"
			}), c.a.createElement("circle", {
				cx: "3",
				cy: "10",
				r: "2"
			}), c.a.createElement("circle", {
				cx: "3",
				cy: "16",
				r: "2"
			})) : c.a.createElement(c.a.Fragment, null, c.a.createElement("rect", {
				x: "7",
				y: "9.375",
				width: "12",
				height: "1.25"
			}), c.a.createElement("rect", {
				x: "7",
				y: "3.375",
				width: "12",
				height: "1.25"
			}), c.a.createElement("rect", {
				x: "7",
				y: "15.375",
				width: "12",
				height: "1.25"
			}), c.a.createElement("circle", {
				cx: "3",
				cy: "4",
				r: "1.5"
			}), c.a.createElement("circle", {
				cx: "3",
				cy: "10",
				r: "1.5"
			}), c.a.createElement("circle", {
				cx: "3",
				cy: "16",
				r: "1.5"
			})));

			function jt() {
				return (jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var vt = e => c.a.createElement(b.a, jt({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? c.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM4.5,9A1.5,1.5,0,1,1,6,10.5,1.5,1.5,0,0,1,4.5,9Zm9.114,4.431A4.378,4.378,0,0,1,10,15.2a4.378,4.378,0,0,1-3.614-1.773l-.431-.613,1.227-.863.432.614A2.92,2.92,0,0,0,10,13.7a2.92,2.92,0,0,0,2.386-1.135l.432-.614,1.227.863ZM14,10.5A1.5,1.5,0,1,1,15.5,9,1.5,1.5,0,0,1,14,10.5Z"
			}) : c.a.createElement(c.a.Fragment, null, c.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375Zm0,18A8.375,8.375,0,1,1,18.375,10,8.384,8.384,0,0,1,10,18.375Z"
			}), c.a.createElement("path", {
				d: "M10,13.829a3.047,3.047,0,0,1-2.489-1.188l-1.022.718A4.252,4.252,0,0,0,10,15.079a4.252,4.252,0,0,0,3.511-1.72l-1.022-.718A3.047,3.047,0,0,1,10,13.829Z"
			}), c.a.createElement("circle", {
				cx: "6",
				cy: "9",
				r: "1.5"
			}), c.a.createElement("circle", {
				cx: "14",
				cy: "9",
				r: "1.5"
			})));

			function _t() {
				return (_t = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var It = e => c.a.createElement(b.a, _t({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? c.a.createElement("path", {
					d: "M16.64 6.9a2.841 2.841 0 00-1.308.316 10.363 10.363 0 00-4.618-1.341l.743-4.123 2.422.515a1.493 1.493 0 10.2-1.235L11.59.5a1.124 1.124 0 00-1.34.9l-.8 4.459a10.371 10.371 0 00-4.787 1.356 2.859 2.859 0 00-3.108 4.763v.042c0 3.409 3.786 6.18 8.445 6.18s8.441-2.773 8.441-6.182v-.035A2.859 2.859 0 0016.64 6.9z"
				}) : c.a.createElement("path", {
					d: "M19.769 9.086a3.189 3.189 0 00-3.129-2.56 2.933 2.933 0 00-1.276.29 10.781 10.781 0 00-4.74-1.326l.811-3.742 2.444.52a1.493 1.493 0 10.2-1.235L11.573.5a1.126 1.126 0 00-1.333.862L9.344 5.5a10.742 10.742 0 00-4.693 1.3A3.179 3.179 0 00.235 9.074a3.228 3.228 0 00-.017 1.18 3.1 3.1 0 00.9 1.7l.057.06v.108c.071 3.618 3.943 6.452 8.815 6.452s8.74-2.831 8.814-6.433v-.122l.037-.037a3.136 3.136 0 00.929-1.725 3.218 3.218 0 00-.001-1.171zm-1.221.957a1.9 1.9 0 01-.571 1.049l-.391.4-.026.615c-.06 2.928-3.382 5.222-7.564 5.222s-7.507-2.3-7.565-5.239l-.024-.59L2 11.072a1.87 1.87 0 01-.552-1.03 2 2 0 01.01-.723 1.926 1.926 0 012.88-1.269l.332.209L5 8.05a9.385 9.385 0 014.67-1.331h.706a9.4 9.4 0 014.64 1.348l.342.217.342-.224a1.694 1.694 0 01.941-.284 1.935 1.935 0 011.9 1.55 1.964 1.964 0 01.007.717z"
				})),
				xt = n("./src/chat/components/MessageTooltip/Picker/SlashCommandList/index.m.less"),
				yt = n.n(xt);
			var St = ({
					channelId: e,
					inputCommand: t,
					bindArrowDown: n,
					bindArrowUp: a,
					onSelectCommand: s,
					onPickCommand: l,
					unbindListeners: d
				}) => {
					const u = Object(o.e)(t => Object(U.l)(t, e)),
						h = Object(o.e)(Be.f),
						[m, p] = Object(r.useState)(0),
						b = Object(r.useMemo)(() => {
							return ke.filter(e => !e.channelType || e.channelType === u).filter(e => {
								var n;
								return [...(null === (n = e.aliases) || void 0 === n ? void 0 : n.length) ? e.aliases : [], e.command].join("").includes(t)
							})
						}, [u, t]),
						g = Object(r.useCallback)(e => {
							p(e => Math.max(e - 1, 0)), e.preventDefault(), e.stopPropagation()
						}, []),
						f = Object(r.useCallback)(e => {
							p(e => Math.min(e + 1, b.length - 1)), e.preventDefault(), e.stopPropagation()
						}, [b]),
						O = Object(r.useMemo)(() => {
							var e;
							return b.length ? s(null === (e = b[m]) || void 0 === e ? void 0 : e.command) : s(""), b.length ? c.a.createElement("div", {
								className: yt.a.Command
							}, b.map((e, t) => c.a.createElement("button", {
								className: Object(i.a)(yt.a.CommandItem, {
									[yt.a.selected]: m === t
								}),
								key: e.command,
								onClick: () => l(e.command)
							}, (e => {
								switch (e.name) {
									case Ce.GIF:
										return c.a.createElement("img", {
											src: `${lt.a.assetPath}/img/giphy/giphy.png`,
											className: yt.a.CommandItemIcon
										});
									case Ce.INVITE:
										return c.a.createElement(bt.a, {
											className: yt.a.CommandItemIcon
										});
									case Ce.MUTE:
										return c.a.createElement(ut.a, {
											className: yt.a.CommandItemIcon
										});
									case Ce.UNMUTE:
										return c.a.createElement(ht.a, {
											className: yt.a.CommandItemIcon
										});
									case Ce.KICK:
										return c.a.createElement(ft, {
											className: yt.a.CommandItemIcon
										});
									case Ce.MEMBERS:
										return c.a.createElement(Ct, {
											className: yt.a.CommandItemIcon
										});
									case Ce.LEAVE:
										return c.a.createElement(Ot.a, {
											className: yt.a.CommandItemIcon
										});
									case Ce.NEW_CHAT:
									case Ce.DIRECT:
										return c.a.createElement(dt.a, {
											className: yt.a.CommandItemIcon
										});
									case Ce.TEXT_EMOJI:
										return c.a.createElement(vt, {
											className: yt.a.CommandItemIcon
										});
									case Ce.SNOOMOJI:
										return c.a.createElement(It, {
											className: yt.a.CommandItemIcon
										});
									default:
										return null
								}
							})(e), c.a.createElement("div", {
								className: yt.a.CommandItemMetadata
							}, c.a.createElement("span", {
								className: yt.a.CommandItemMetadataDescription
							}, e.description && H.fbt._("{Description}", [H.fbt._param("Description", e.description)], {
								hk: "223KqZ"
							})), c.a.createElement("span", {
								className: yt.a.CommandItemMetadataExample
							}, e.example ? e.example : `/${e.command}`))))) : c.a.createElement("div", {
								className: yt.a.ErrorMessage
							}, c.a.createElement(pt, {
								className: yt.a.ErrorMessageIcon
							}), c.a.createElement("div", {
								className: yt.a.ErrorMessageContent
							}, c.a.createElement("span", {
								className: yt.a.ErrorMessageContentHeader
							}, H.fbt._("Hmm... that didn’t work", null, {
								hk: "SVy4g"
							})), c.a.createElement("span", {
								className: yt.a.ErrorMessageContentBody
							}, H.fbt._("try another keyword or phrase", null, {
								hk: "1dSsbn"
							}))))
						}, [b, m, l, s]);
					return Object(r.useEffect)(() => (a(g), n(f), () => {
						d()
					}), [a, n, g, f, d]), Object(r.useEffect)(() => {
						m > b.length && p(0)
					}, [m, b.length]), c.a.createElement(De.b, {
						className: Object(i.a)(yt.a.Scroller, {
							[yt.a.embedded]: h
						})
					}, O)
				},
				wt = n("./src/chat/components/Snoomoji/index.tsx"),
				Nt = n("./src/chat/components/MessageTooltip/Picker/Snoomoji/index.m.less"),
				Tt = n.n(Nt);
			const Mt = G.a.div("IconWrapper", Tt.a);
			Mt.displayName = "IconWrapper";
			const kt = G.a.div("LoadingIndicator", Tt.a),
				At = G.a.wrapped(({
					children: e,
					className: t
				}) => c.a.createElement("div", {
					className: t
				}, e), "Wrapper", Tt.a);
			var Pt = ({
					onPickSnoomoji: e
				}) => {
					const [t, n] = Object(r.useState)(!1), a = Object(o.e)(Be.f), s = Object(r.useCallback)(() => {
						Promise.all(he.b.map(e => new Promise(t => {
							const n = new Image;
							n.onload = () => t(), n.src = he.a[e]
						}))).then(() => n(!0))
					}, []);
					Object(r.useEffect)(() => {
						s()
					}, [s]);
					return c.a.createElement(De.b, {
						className: Object(i.a)(Tt.a.Scroller, {
							[Tt.a.embedded]: a
						})
					}, t ? c.a.createElement(At, null, (() => he.b.map((t, n) => c.a.createElement(Mt, {
						key: `icon-${n}`,
						onClick: () => e(t)
					}, c.a.createElement(wt.a, {
						iconName: t
					}))))()) : c.a.createElement(kt, null, H.fbt._("Loading snoomoji...", null, {
						hk: "39nqLy"
					})))
				},
				Lt = n("./src/chat/actions/members.ts"),
				Dt = n("./src/chat/components/ChatMemberList/index.tsx"),
				Ut = n("./src/chat/helpers/chatSelector.ts"),
				Rt = n("./src/chat/selectors/members.ts"),
				Bt = n("./src/chat/components/MessageTooltip/Picker/Userlist/index.m.less"),
				Ft = n.n(Bt);
			const Ht = G.a.div("LoadingIndicator", Ft.a),
				Gt = G.a.wrapped(Dt.a, "ChatMemberList", Ft.a),
				Vt = G.a.wrapped(({
					children: e,
					className: t
				}) => c.a.createElement("div", {
					className: t
				}, e), "Wrapper", Ft.a),
				zt = Object(Ut.a)({
					channelId: U.y,
					channelMembers: Rt.f,
					hasMoreMembers: Rt.d,
					fetchingMembers: Rt.a,
					isEmbedded: Be.f
				});
			class Wt extends r.Component {
				constructor(e) {
					super(e), this.fetchedFilter = "", this.isMount = !1, this.fetchSubredditChannelUsers = qe()((e = "") => {
						this.props.fetchSubredditChannelUsers(e)
					}, oe.Qb, {
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
					return this.members = this.filterMembers(), this.members && this.members.length && e ? c.a.createElement(Vt, null, c.a.createElement(Gt, {
						minimal: !0,
						channelId: e,
						members: this.members,
						modIndicator: !0,
						onClick: t,
						onSelectName: n,
						selectIndex: this.state.selectIndex,
						useNSFWIcons: !0
					})) : a || this.members && this.members.length ? c.a.createElement(Ht, null, H.fbt._("Loading members...", null, {
						hk: "23phIt"
					})) : c.a.createElement(Ht, null, H.fbt._("Member not found!", null, {
						hk: "4DkpQe"
					}))
				}
				render() {
					const {
						isEmbedded: e
					} = this.props;
					return c.a.createElement(De.b, {
						className: Object(i.a)(Ft.a.Scroller, {
							[Ft.a.embedded]: e
						})
					}, this.renderContent())
				}
			}
			var Kt = Object(o.b)(zt, e => ({
					fetchSubredditChannelUsers: t => e(Object(Lt.e)({
						filter: t
					}))
				}))(Wt),
				Zt = n("./src/chat/constants/keys.ts"),
				qt = n("./src/chat/singleton/SendbirdSDK.ts"),
				Qt = n("./src/chat/controls/ContentEditable/index.m.less"),
				Jt = n.n(Qt);
			const Xt = 19,
				Yt = 12,
				$t = 6,
				en = G.a.textarea("Textarea", Jt.a);
			class tn extends c.a.Component {
				constructor(e) {
					super(e), this.offset = 0, this.emitChange = this.emitChange.bind(this), this.emitChangeOnce = this.emitChangeOnce.bind(this), this.handleCursor = this.handleCursor.bind(this), this.handleKeyPress = this.handleKeyPress.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleSizing = this.handleSizing.bind(this), this._ref = c.a.createRef()
				}
				get textarea() {
					return this._ref.current
				}
				componentDidMount() {
					if (this.textarea) {
						const e = this.textarea;
						this.offset = e.offsetHeight - e.clientHeight, e.value = this.props.draftText || "", this.handleSizing(), this.textarea.focus()
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.channelId !== e.channelId && this.textarea && (this.textarea.value = e.draftText || "", this.handleSizing()), this.textarea && this.textarea.value ? qt.a.startTypingIndicator() : qt.a.endTypingIndicator(), this.textarea && e.textUpdate && (this.textarea.value = e.textUpdate, this.props.onChangeOnce(this.textarea.value), this.handleSizing()), this.textarea && this.textarea.value && e.clearText && (this.clearTextAndDropInputHeight(), this.props.onChangeOnce(""), this.handleSizing()), e.cursorPosition && this.textarea && (this.textarea.selectionStart = e.cursorPosition.selectionStart, this.textarea.selectionEnd = e.cursorPosition.selectionEnd)
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
					e.key !== Zt.g || e.shiftKey || (e.preventDefault(), this.props.onSubmit()), this.handleCursor()
				}
				handleKeyDown(e) {
					e.key === Zt.d && (this.props.onArrowUp(e), this.handleSizing()), e.key === Zt.a && (this.props.onArrowDown(e), this.handleSizing()), e.key === Zt.h && this.props.onKeyEsc(e), this.props.onKeyDown(e)
				}
				handleSizing() {
					if (this.textarea) {
						const e = this.textarea;
						e.style.height = "auto", e.style.height = e.scrollHeight + this.offset + "px", e.scrollHeight > 2 * Xt + Yt ? e.style.paddingTop = "0px" : e.style.paddingTop = "12px", e.scrollHeight > Xt * $t + 1 ? e.style.overflowY = "scroll" : e.style.overflowY = "hidden"
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
					return c.a.createElement(en, {
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
						placeholder: H.fbt._("Message", null, {
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

			function nn() {
				return (nn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var an = e => c.a.createElement(b.a, nn({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? c.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, c.a.createElement("path", {
					d: "M18.226,4.087a3.958,3.958,0,0,0-2.313-2.313,16.817,16.817,0,0,0-11.827,0A3.963,3.963,0,0,0,1.773,4.087a16.756,16.756,0,0,0,0,11.826,3.963,3.963,0,0,0,2.313,2.313,16.744,16.744,0,0,0,11.827,0,3.958,3.958,0,0,0,2.313-2.313,16.741,16.741,0,0,0,0-11.826ZM9,10.53a2.486,2.486,0,0,1-.34,1.293,2.4,2.4,0,0,1-.953.9,2.955,2.955,0,0,1-1.417.328,3.247,3.247,0,0,1-1.579-.386A2.811,2.811,0,0,1,3.6,11.583,3.108,3.108,0,0,1,3.2,10a3.052,3.052,0,0,1,.411-1.583A2.832,2.832,0,0,1,4.74,7.335,3.37,3.37,0,0,1,6.356,6.95a3.827,3.827,0,0,1,.986.128,3.414,3.414,0,0,1,.879.369l-.5,1.169a1.314,1.314,0,0,0-.563-.357,2.3,2.3,0,0,0-.754-.124A1.733,1.733,0,0,0,4.541,9.983a2.064,2.064,0,0,0,.232.99,1.7,1.7,0,0,0,1.542.925,1.681,1.681,0,0,0,.746-.162,1.238,1.238,0,0,0,.513-.443,1.118,1.118,0,0,0,.183-.622H6.124V9.619L9,9.6Zm2.5,2.454H10.182V7.016H11.5Zm5-4.8H14.362V9.577h1.79v1.169h-1.79v2.238H13.044V7.016H16.5Z"
				})) : c.a.createElement(c.a.Fragment, null, c.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, c.a.createElement("path", {
					d: "M4.711,12.664A2.8,2.8,0,0,1,3.6,11.583,3.108,3.108,0,0,1,3.2,10a3.052,3.052,0,0,1,.411-1.583A2.832,2.832,0,0,1,4.74,7.335,3.37,3.37,0,0,1,6.356,6.95a3.827,3.827,0,0,1,.986.128,3.414,3.414,0,0,1,.879.369l-.5,1.169a1.314,1.314,0,0,0-.563-.357,2.3,2.3,0,0,0-.754-.124A1.733,1.733,0,0,0,4.541,9.983a2.064,2.064,0,0,0,.232.99,1.7,1.7,0,0,0,1.542.925,1.681,1.681,0,0,0,.746-.162,1.238,1.238,0,0,0,.513-.443,1.118,1.118,0,0,0,.183-.622H6.124V9.619L9,9.6v.928a2.486,2.486,0,0,1-.34,1.293,2.4,2.4,0,0,1-.953.9,2.955,2.955,0,0,1-1.417.328A3.247,3.247,0,0,1,4.711,12.664Z"
				}), c.a.createElement("path", {
					d: "M10.182,7.016H11.5v5.968H10.182Z"
				}), c.a.createElement("path", {
					d: "M13.044,7.016H16.5V8.185H14.362V9.577h1.79v1.169h-1.79v2.238H13.044Z"
				}), c.a.createElement("path", {
					d: "M10,19.305a16.751,16.751,0,0,1-5.914-1.079,3.963,3.963,0,0,1-2.313-2.313,16.756,16.756,0,0,1,0-11.826A3.963,3.963,0,0,1,4.086,1.774a16.817,16.817,0,0,1,11.827,0,3.958,3.958,0,0,1,2.313,2.313,16.741,16.741,0,0,1,0,11.826,3.958,3.958,0,0,1-2.313,2.313A16.742,16.742,0,0,1,10,19.305Zm0-17.36a15.5,15.5,0,0,0-5.473,1A2.71,2.71,0,0,0,2.943,4.527a15.506,15.506,0,0,0,0,10.946,2.71,2.71,0,0,0,1.584,1.583,15.557,15.557,0,0,0,10.946,0,2.711,2.711,0,0,0,1.583-1.583,15.491,15.491,0,0,0,0-10.946h0a2.711,2.711,0,0,0-1.583-1.583A15.5,15.5,0,0,0,10,1.945Z"
				})))),
				sn = n("./src/chat/models/Theme/index.ts"),
				rn = n("./src/chat/selectors/theme.ts");

			function cn() {
				return (cn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var on = e => {
					const t = Object(o.e)(rn.a);
					return c.a.createElement(b.a, cn({}, e, {
						viewBox: "0 0 24 24"
					}), (() => {
						let e;
						if (t) {
							const n = sn.f[t];
							n && (e = c.a.createElement("defs", null, c.a.createElement("linearGradient", {
								id: "linear-gradient",
								gradientTransform: `rotate(${sn.d})`
							}, n.stops.map((e, t) => c.a.createElement("stop", {
								key: `${t}-${e.offset}-${e.color}`,
								offset: `${e.offset}`,
								stopColor: `${e.color}`
							})))))
						}
						return c.a.createElement(c.a.Fragment, null, e, c.a.createElement("path", {
							style: e ? {
								fill: "url(#linear-gradient)"
							} : void 0,
							d: "M22.6559 10.8L2.39994 0.65995C2.15389 0.529239 1.87278 0.47974 1.59687 0.518539C1.32096 0.557338 1.06441 0.682447 0.863944 0.87595C0.656797 1.06381 0.51403 1.3121 0.455877 1.58564C0.397725 1.85917 0.427136 2.14407 0.539944 2.39995L4.58394 12L0.539944 21.6C0.429918 21.8544 0.401998 22.1368 0.460075 22.4078C0.518153 22.6788 0.659334 22.925 0.863944 23.112C1.10992 23.3469 1.43582 23.4798 1.77594 23.484C1.99315 23.4934 2.20883 23.4436 2.39994 23.34L22.6559 13.2C22.8781 13.0879 23.0648 12.9164 23.1952 12.7045C23.3256 12.4927 23.3947 12.2487 23.3947 12C23.3947 11.7512 23.3256 11.5072 23.1952 11.2954C23.0648 11.0835 22.8781 10.912 22.6559 10.8Z"
						}))
					})())
				},
				ln = n("./src/chat/selectors/experiments.ts"),
				dn = n("./src/chat/selectors/uploads.ts"),
				un = n("./src/chat/actions/uploads/prompt.ts"),
				hn = n("./src/lib/hooks/useOnClickOutside.ts"),
				mn = n("./src/lib/hooks/useTooltip.ts"),
				pn = n("./src/chat/components/MessageInput/IconButton/index.m.less"),
				bn = n.n(pn);
			var gn = e => c.a.createElement("div", {
					className: Object(i.a)(bn.a.IconButton, {
						[bn.a.active]: e.active
					}, e.className),
					onMouseDown: Object(u.b)(e.onMouseDown)
				}, e.children),
				fn = n("./src/chat/controls/TooltipHooked/loader.tsx"),
				On = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				En = n("./src/chat/components/MessageInput/ImageUploader/index.m.less"),
				Cn = n.n(En);
			var jn = c.a.memo((function({
					channelId: e
				}) {
					const t = Object(o.d)(),
						n = Object(o.e)(U.J),
						a = Object(o.e)(t => Object(ln.c)(t, e)),
						s = Object(o.e)(dn.f),
						i = Object(mn.b)(Object(On.b)()),
						d = {
							...i.arrowProps,
							style: {
								...i.arrowProps.style,
								borderTop: "5px solid var(--prompt-tooltip-background)",
								left: "3px"
							}
						},
						u = Object(r.useCallback)(() => {
							i.hide(), t(Object(un.c)(un.b.LAST))
						}, [i, t]);
					return Object(hn.a)("Prompt-id", i.hide), Object(r.useEffect)(() => {
						s && setTimeout(() => {
							i.show(), t(Object(l.ab)())
						})
					}, [s]), a && !n ? c.a.createElement(c.a.Fragment, null, s && c.a.createElement(fn.a, {
						arrowProps: d,
						popperProps: i.popperProps,
						visible: i.visible,
						hide: i.hide,
						styled: !0,
						isInstant: !0
					}, c.a.createElement("button", {
						className: Cn.a.Tooltip,
						onClick: u,
						id: "Prompt-id"
					}, H.fbt._("New! Try media sharing", null, {
						hk: "16k719"
					}))), c.a.createElement("span", {
						ref: i.target.ref,
						role: "button",
						tabIndex: 0,
						onClick: u
					}, c.a.createElement(gn, {
						className: Cn.a.ImageUploader
					}, c.a.createElement(I, null)))) : null
				})),
				vn = n("./src/chat/components/MessageInput/index.m.less"),
				_n = n.n(vn);
			const In = c.a.memo((function() {
					const e = Object(o.d)(),
						t = Object(o.e)(Fe.a);
					return Object(o.e)(U.J) ? null : c.a.createElement(xn, {
						onMouseDown: () => {
							e(Object(le.c)({
								tooltipId: de.b
							})), e(Object(l.z)(de.b))
						},
						active: t === de.b
					}, c.a.createElement(an, {
						isFilled: t === de.b
					}))
				})),
				xn = e => c.a.createElement("div", {
					className: Object(i.a)(_n.a.IconButton, {
						[_n.a.active]: e.active
					}, e.className),
					onMouseDown: Object(u.b)(e.onMouseDown)
				}, e.children),
				yn = Object(Ut.a)({
					activeDropdownId: e => e.tooltipId || void 0,
					draftMessage: (e, t) => Object(U.s)(e, t.channelId),
					hasUploadsToSubmit: (e, t) => Object(dn.e)(e, t.channelId),
					isFullSize: Be.g,
					isChatContainerFocused: Be.b,
					isImageShareEnabled: (e, t) => Object(ln.c)(e, t.channelId),
					isChannelInPendingState: U.J,
					isShortcutsSlashCommandEnabled: ln.l
				});
			class Sn extends r.PureComponent {
				constructor(e) {
					super(e), this.selectUserName = "", this.selectedCommand = "", this.cursorPosition = {
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
						this.toggleUserlistTooltipByTextChange(e), this.props.isShortcutsSlashCommandEnabled && this.toggleCommandsTooltipByTextChange(e), this.cleanChildProps()
					}, this.handleSubmitInput = async () => {
						const {
							channelId: e,
							deleteDraft: t,
							onSubmitText: n,
							onSubmitMedia: a,
							onUploadMedia: s,
							scrollToBottom: r,
							onSubmitSlashCommand: c,
							isShortcutsSlashCommandEnabled: o
						} = this.props;
						r && r();
						const i = !!this.state.text || !!this.state.inputCommand,
							l = this.props.hasUploadsToSubmit;
						if (this.isUserlistPopupOpened()) this.onPickUserName(this.selectUserName || this.state.inputUserName), this.props.toggleUserlistTooltip(de.e);
						else if (l || i) {
							if (l) {
								const t = new d.d(e);
								await a(t), s(t)
							}
							i && (this.isSlashCommandListPopupOpened() && o ? (this.onPickCommand(this.selectedCommand || this.state.inputCommand), this.props.toggleSlashCommandListTooltip(de.c)) : (this.state.text.startsWith(re) && o ? c(this.state.text) : n(this.state.text), this.clearText(), t(e))), r && r()
						}
					}, this.sendEnabled = () => !!this.state.text || this.props.hasUploadsToSubmit, this.onArrowUpUserlistListener = ee.a, this.onArrowDownUserlistListener = ee.a, this.startIdleTimerThrottle = ne()(() => {
						this.props.startSurveyTimer()
					}, de.f), this.onMessageInputKeydown = () => {
						this.props.uploadShowPromptCountSet(), this.startIdleTimerThrottle()
					}, this.handleSubmitInput = this.handleSubmitInput.bind(this), this.handleSubmitSnoo = this.handleSubmitSnoo.bind(this), this.onPickGifHandler = this.onPickGifHandler.bind(this);
					const t = this.props.draftMessage || "";
					this.reFocusCursorPosition(t.length), this.state = {
						text: t,
						textUpdate: "",
						inputUserName: "",
						clearText: !1,
						inputCommand: ""
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
				handleSubmitSnoo(e) {
					const {
						onSubmitSnoo: t,
						scrollToBottom: n
					} = this.props;
					t(e), n && n()
				}
				onPickGifHandler(e) {
					const {
						onSubmitGif: t,
						scrollToBottom: n
					} = this.props;
					t(e), n && n()
				}
				onPickUserName(e) {
					const {
						text: t
					} = this.state, {
						selectionEnd: n
					} = this.cursorPosition, {
						textUpdate: a,
						posEndUpdate: s
					} = Oe(t, e, n);
					this.setState({
						textUpdate: a,
						text: a
					}, () => {
						this.reFocusCursorPosition(s), this.props.toggleUserlistTooltip(de.e)
					})
				}
				onPickCommand(e) {
					const t = re + e;
					this.setState({
						textUpdate: t,
						text: t
					}, () => {
						this.reFocusCursorPosition(t.length), this.props.toggleSlashCommandListTooltip(de.c)
					})
				}
				toggleUserlistTooltipByTextChange(e) {
					const {
						selectionEnd: t
					} = this.cursorPosition, {
						hasUsername: n,
						username: a
					} = fe(e, t), s = this.isUserlistPopupOpened();
					return (n && !s || !n && s) && this.props.toggleUserlistTooltip(de.e), this.setState({
						inputUserName: a
					})
				}
				toggleCommandsTooltipByTextChange(e) {
					const t = this.isSlashCommandListPopupOpened();
					(!t && Ee(e) || t && !Ee(e)) && this.props.toggleSlashCommandListTooltip(de.c), this.setState({
						inputCommand: e.replace(re, "")
					})
				}
				isSlashCommandListPopupOpened() {
					return this.props.activeDropdownId === de.c
				}
				isUserlistPopupOpened() {
					return this.props.activeDropdownId === de.e
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
						channelId: t,
						toggleSnoomojiTooltip: n,
						draftMessage: a,
						isFullSize: s,
						isChatContainerFocused: r,
						isShortcutsSlashCommandEnabled: o
					} = this.props;
					return c.a.createElement("form", {
						tabIndex: 0,
						className: Object(i.a)(_n.a.Form, {
							[_n.a.isFullSize]: s
						}),
						id: Ve,
						onSubmit: Object(u.b)(this.handleSubmitInput)
					}, c.a.createElement("div", {
						className: _n.a.Wrapper
					}, c.a.createElement(jn, {
						channelId: t
					}), c.a.createElement("div", {
						className: _n.a.InputWrapper
					}, c.a.createElement(tn, {
						className: _n.a.ContentEditable,
						channelId: t,
						clearText: this.state.clearText,
						cursorPosition: this.cursorPosition,
						draftText: a || "",
						isFocusingPrevented: Boolean(e) || !r,
						onArrowDown: e => this.onArrowDownUserlistListener(e),
						onArrowUp: e => this.onArrowUpUserlistListener(e),
						onBlur: this.handleInputBlur,
						onChange: this.handleChangeText,
						onChangeCursor: e => this.cursorPosition = e,
						onChangeOnce: this.handleChangeOnce,
						onKeyDown: this.onMessageInputKeydown,
						onKeyEsc: () => this.props.closeUserlistTooltip(),
						onSubmit: this.handleSubmitInput,
						textUpdate: this.state.textUpdate
					}), o && c.a.createElement(Ke, {
						id: de.c,
						isArrowShow: !1
					}, c.a.createElement(St, {
						channelId: t,
						bindArrowDown: e => this.onArrowDownUserlistListener = e,
						bindArrowUp: e => this.onArrowUpUserlistListener = e,
						inputCommand: this.state.inputCommand,
						onPickCommand: e => this.onPickCommand(e),
						onSelectCommand: e => this.selectedCommand = e,
						unbindListeners: () => {
							this.onArrowUpUserlistListener = ee.a, this.onArrowDownUserlistListener = ee.a
						}
					})), c.a.createElement("div", {
						className: _n.a.Icons
					}, c.a.createElement(In, null), c.a.createElement(xn, {
						onMouseDown: () => n(de.d),
						active: e === de.d
					}, c.a.createElement(vt, {
						isFilled: e === de.d
					})), c.a.createElement(Ke, {
						id: de.d
					}, c.a.createElement(Pt, {
						onPickSnoomoji: this.handleSubmitSnoo
					})), c.a.createElement(Ke, {
						id: de.b,
						arrowOffset: de.a
					}, c.a.createElement(it, {
						onPickGif: this.onPickGifHandler
					})), c.a.createElement(Ke, {
						id: de.e,
						isArrowShow: !1
					}, c.a.createElement(Kt, {
						bindArrowDown: e => this.onArrowDownUserlistListener = e,
						bindArrowUp: e => this.onArrowUpUserlistListener = e,
						inputUserName: this.state.inputUserName,
						onPickUserName: e => this.onPickUserName(e),
						onSelectUserName: e => this.selectUserName = e
					})))), c.a.createElement(A.c, {
						className: _n.a.SubmitButton,
						type: "submit",
						disabled: !this.sendEnabled()
					}, c.a.createElement(on, null))))
				}
			}
			var wn = Object(o.b)(yn, (e, {
					channelId: t
				}) => ({
					onSubmitText: n => e(Object(T.r)(t, n.trim(), ue.c.TEXT)),
					onSubmitSnoo: n => e(Object(T.r)(t, n.trim(), ue.c.SNOOMOJI)),
					onSubmitGif: n => {
						e(Object(T.o)(t, n)), e(Object(se.l)(""))
					},
					onSubmitMedia: t => e(t.createMessage()),
					onUploadMedia: t => e(t.uploadMedia()),
					toggleSnoomojiTooltip: t => {
						e(Object(le.c)({
							tooltipId: t
						})), e(Object(l.z)(t))
					},
					toggleGifTooltip: t => {
						e(Object(le.c)({
							tooltipId: t
						})), e(Object(l.z)(t))
					},
					toggleUserlistTooltip: t => {
						e(Object(le.c)({
							tooltipId: t
						}))
					},
					saveDraft: (t, n) => {
						e(Object(ae.e)({
							channelId: t,
							messageValue: n
						}))
					},
					deleteDraft: t => {
						e(Object(ae.f)(t))
					},
					closeUserlistTooltip: () => e(Object(le.d)()),
					startSurveyTimer: () => e(Object(Pe.b)()),
					uploadShowPromptCountSet: () => e(Object(un.c)(un.b.LAST)),
					commandsChecker: n => e(Ae(n, t)),
					onSubmitSlashCommand: n => e(Ae(n, t)),
					toggleSlashCommandListTooltip: t => {
						e(Object(le.c)({
							tooltipId: t
						}))
					}
				}))(Sn),
				Nn = n("./src/chat/components/MessageList/Messages/index.tsx"),
				Tn = n("./src/chat/components/MessageQuickReplyPicker/index.m.less"),
				Mn = n.n(Tn);
			const kn = ["upvote", "snoo"],
				An = G.a.div("SnooWrapper", Mn.a),
				Pn = G.a.wrapped(e => {
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
							case ue.c.TEXT:
								return n;
							case ue.c.SNOOMOJI:
								return c.a.createElement(An, null, c.a.createElement(wt.a, {
									iconName: n
								}))
						}
					})())
				}, "ReplyItem", Mn.a);
			var Ln = G.a.wrapped(e => {
					const {
						className: t,
						channelId: n
					} = e, a = Object(o.d)();
					return Object(o.e)(e => Object(U.O)(e, n)) ? c.a.createElement("div", {
						className: t
					}, c.a.createElement(Pn, {
						type: ue.c.TEXT,
						text: H.fbt._("Thanks for the award!", null, {
							hk: "3aibi5"
						}),
						onReply: e => {
							a(Object(T.r)(n, String(e).trim(), ue.c.TEXT)), a(Object(l.v)(l.a.FIRST, String(e).trim()))
						}
					}), kn.map((e, t) => c.a.createElement(Pn, {
						type: ue.c.SNOOMOJI,
						key: e,
						text: e,
						onReply: e => {
							a(Object(T.r)(n, e, ue.c.SNOOMOJI)), a(Object(l.v)(t + 2, e))
						}
					}))) : null
				}, "MessageQuickReplyPicker", Mn.a),
				Dn = n("./src/chat/components/OverlayNav/index.tsx"),
				Un = n("./src/chat/components/TypingIndicator/index.m.less"),
				Rn = n.n(Un);
			var Bn = ({
					channelType: e
				}) => {
					const t = Object(o.e)(e => e.typingIndicator.usernames);
					return (null == t ? void 0 : t.length) ? c.a.createElement("span", {
						className: Object(i.a)(Rn.a.IndicatorText)
					}, ((e, t) => e === me.a.Direct ? H.fbt._("is typing...", null, {
						hk: "UTaH4"
					}) : 1 === t.length ? H.fbt._("{firstUser} is typing...", [H.fbt._param("firstUser", t[0])], {
						hk: "480JMK"
					}) : 2 === t.length ? H.fbt._("{firstUser} and {secondUser} are typing", [H.fbt._param("firstUser", t[0]), H.fbt._param("secondUser", t[1])], {
						hk: "3zfAnp"
					}) : t.length > 2 ? H.fbt._("Several people are typing...", null, {
						hk: "39edn3"
					}) : void 0)(e, t)) : null
				},
				Fn = n("./src/chat/constants/batchSizes.ts"),
				Hn = n("./src/chat/selectors/richUnits.ts"),
				Gn = n("./src/chat/components/MessageList/index.m.less"),
				Vn = n.n(Gn);
			const {
				fbt: zn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Wn = Object(Ut.a)({
				currentUser: e => e.user.account,
				channelMessages: (e, {
					channel: {
						channelId: t
					}
				}) => Object(U.z)(e, t),
				channelPendingMessages: e => Object(U.A)(e),
				fetchingMessages: e => Object(U.B)(e, "fetchingMessages"),
				fetchingMessagesError: e => Object(U.B)(e, "fetchingMessagesError"),
				hasMoreMessages: e => Object(U.B)(e, "hasMoreMessages"),
				isMessageListLoaded: e => Object(U.B)(e, "isMessageListLoaded"),
				isModerator: e => Object(U.a)(e),
				isChatMinimized: Be.c,
				isRichUnitDataReceived: e => Object(Hn.c)(e),
				isFullSize: Be.g,
				showPrompt: rn.c,
				isImageShareEnabled: (e, t) => Object(ln.c)(e, t.channel.channelId),
				isChannelInPendingState: U.J
			}), Kn = Object(o.b)(Wn, e => ({
				getPreviousMessages: () => e(Object(T.v)()),
				removeAndResetMessages: t => e(Object(M.c)(t)),
				resetChannelMessageList: t => e(Object(N.K)(t)),
				resetRichUnisDataReceived: () => e(Object(k.f)())
			})), Zn = 30, qn = 2 * Fn.a.Messages;
			class Qn extends c.a.Component {
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
							case me.a.Group:
								return this.props.channel.name;
							default:
								return this.getOtherMemberName()
						}
					}, this.renderMessages = () => {
						const {
							currentUser: e,
							channel: t,
							channelPendingMessages: n,
							channelMessages: a
						} = this.props;
						if (a.length) {
							const s = w()([...a, ...n], "createdAt");
							return c.a.createElement(Nn.a, {
								channelType: t.type,
								currentUserId: e.id,
								messageList: s
							})
						}
					}, this.loadMoreRows = this.loadMoreRows.bind(this)
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
					if (t.length > Zn && this.isChannelSwitched(e)) {
						const e = t.length - Zn,
							a = t.slice(0, e);
						n(y()(a, ({
							messageId: e
						}) => String(e)))
					}
				}
				removeResetTooOldMessages() {
					var e;
					const t = this.props.channelMessages.length > qn,
						n = Boolean(null === (e = this.scroller.current) || void 0 === e ? void 0 : e.isScrolledToBottom());
					t && n && this.props.removeAndResetMessages(this.props.channelMessages)
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
							hasMoreMessages: r,
							isFullSize: o,
							isImageShareEnabled: l,
							isChannelInPendingState: d
						},
						loadMoreRows: u
					} = this, h = this.getTitle(), m = this.renderMessages(), p = !r && a && e.members;
					return c.a.createElement("div", {
						className: Vn.a.Container
					}, c.a.createElement(Dn.a, {
						channelId: e.channelId,
						showMenu: !0,
						title: h,
						channelType: null == e ? void 0 : e.type,
						showMembers: !0
					}), c.a.createElement("div", {
						className: Object(i.a)(Vn.a.ReverseCol, {
							[Vn.a.isFullSize]: o
						})
					}, c.a.createElement(De.b, {
						className: Vn.a.Scroller,
						autoScrollBottom: !0,
						ref: this.scroller,
						loadMoreRows: u
					}, t && c.a.createElement("span", {
						className: Vn.a.LoadingError,
						onClick: n
					}, zn._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})), p ? c.a.createElement(Y, {
						users: e.members,
						channel: e
					}) : t ? c.a.createElement("span", {
						className: Vn.a.LoadingError,
						onClick: n
					}, zn._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})) : a ? c.a.createElement("span", {
						className: Vn.a.LoadingIndicator
					}, zn._("Loading history...", null, {
						hk: "4tLHUG"
					})) : c.a.createElement(Qe.e, null), m)), c.a.createElement("div", {
						className: Object(i.a)(Vn.a.TypingIndicatorWrapper, {
							[Vn.a.isFullSize]: o
						})
					}, e ? c.a.createElement(Bn, {
						channelType: e.type
					}) : null), c.a.createElement(Ln, {
						className: Vn.a.MessageQuickReplyPicker,
						channelId: e.channelId
					}), l && !d && c.a.createElement(F, null), c.a.createElement(wn, {
						className: Vn.a.MessageInput,
						channelId: e.channelId,
						isLocked: e.isFrozen,
						isModerator: s,
						isMuted: e.isUserMuted,
						scrollToBottom: () => {
							this.scroller.current && this.scroller.current.scrollToBottom()
						}
					}))
				}
			}
			var Jn = Kn(Qn),
				Xn = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				Yn = n("./src/higherOrderComponents/makeAsync.tsx"),
				$n = n("./src/lib/loadWithRetries/index.ts");
			const ea = () => null;
			var ta = Object(Yn.a)({
				ErrorComponent: ea,
				getComponent: () => Object($n.a)(() => n.e("OverlayChatMembers").then(n.bind(null, "./src/chat/components/OverlayChatMembers/index.tsx"))).then(e => e.default),
				LoadingComponent: ea
			});
			const na = () => null;
			var aa = Object(Yn.a)({
					ErrorComponent: na,
					getComponent: () => Object($n.a)(() => n.e("OverlayCreateChannel").then(n.bind(null, "./src/chat/components/OverlayCreateChannel/index.tsx"))).then(e => e.default),
					LoadingComponent: na
				}),
				sa = n("./src/chat/components/ChatIcon/index.tsx"),
				ra = n("./src/lib/opener/index.ts"),
				ca = n("./src/chat/components/Message/RichUnit/Comment/loader.tsx"),
				oa = n("./src/chat/components/Message/RichUnit/Post/loader.tsx"),
				ia = n("./src/chat/components/OverlayShareToChat/RichUnit/index.m.less"),
				la = n.n(ia);
			const {
				POST: da,
				USER_POST: ua,
				COMMENT: ha
			} = ue.c;
			var ma = ({
					chatUnitTypeData: e,
					message: t
				}) => {
					const n = Object(o.e)(t => Object(Hn.a)(t, e));
					return c.a.createElement("div", {
						className: la.a.Wrapper
					}, n ? ((e, t) => {
						switch (t.type) {
							case ua:
							case da:
								return c.a.createElement(oa.a, {
									postUrl: e,
									richUnitData: t,
									isSharedToChat: !0
								});
							case ha:
								return c.a.createElement(ca.a, {
									richUnitData: t,
									commentUrl: e,
									isSharedToChat: !0
								});
							default:
								return null
						}
					})(t, n) : c.a.createElement("div", {
						role: "button",
						tabIndex: 0,
						className: la.a.Link,
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(ra.e)(t, "_blank")
							})(e, t)
						}
					}, t))
				},
				pa = n("./src/chat/controls/Checkbox/index.tsx"),
				ba = n("./src/chat/controls/Overlay/index.tsx"),
				ga = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				fa = n("./src/chat/controls/OverlayHeader/index.tsx"),
				Oa = n("./src/chat/components/OverlayShareToChat/index.m.less"),
				Ea = n.n(Oa);
			const {
				fbt: Ca
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ja = ({
				channelId: e,
				onClick: t,
				channelFilterValue: n
			}) => {
				var a;
				const [s, i] = Object(r.useState)(!1), l = Object(o.e)(t => Object(U.t)(t, e)), d = Object(o.e)(t => Object(U.k)(t, e)), u = Object(r.useCallback)(() => {
					i(n => (t(!n, e), !n))
				}, [t, e]);
				return Object(r.useMemo)(() => !d || !!n && !d.toLowerCase().includes(n.toLowerCase()), [d, n]) ? null : c.a.createElement("div", {
					className: Ea.a.Channel
				}, c.a.createElement(pa.a, {
					checked: s,
					onChange: u,
					className: Ea.a.Checkbox
				}, c.a.createElement("div", {
					className: Ea.a.CheckboxContent
				}, (null == l ? void 0 : l.firstUser) && c.a.createElement(sa.a, {
					className: Ea.a.ChannelIcon,
					userId: l.firstUser.id,
					secondUserId: null === (a = l.secondUser) || void 0 === a ? void 0 : a.id,
					isSmall: !0
				}), c.a.createElement("div", {
					className: Ea.a.ChannelName
				}, d))))
			}, va = ({
				onChannelClick: e,
				channels: t,
				chatUnitTypeData: n,
				message: a,
				hasMoreJoinedChannels: s,
				searchRef: r,
				channelsFilter: o,
				setChannelsFilter: i,
				onClickCreateNewChannel: l
			}) => c.a.createElement("div", {
				className: Ea.a.Content
			}, c.a.createElement(ma, {
				chatUnitTypeData: n,
				message: a
			}), !s && c.a.createElement("div", {
				className: Ea.a.SearchInput
			}, c.a.createElement("label", {
				htmlFor: "channelSearch",
				className: Ea.a.Label
			}, c.a.createElement(et, null)), c.a.createElement("input", {
				ref: r,
				placeholder: "Search chats",
				className: Ea.a.Input,
				type: "text",
				value: o,
				onChange: e => {
					i(e.target.value)
				},
				id: "channelSearch"
			})), c.a.createElement("div", {
				className: Ea.a.NewChat
			}, c.a.createElement("span", {
				className: Ea.a.NewChatContent,
				onClick: l,
				role: "button",
				tabIndex: 0
			}, c.a.createElement(dt.a, {
				className: Ea.a.NewChatIcon
			}), Ca._("new chat", null, {
				hk: "2JtgH4"
			}))), s && c.a.createElement("div", {
				className: Ea.a.LoadingIndicator
			}, Ca._("Loading Channels", null, {
				hk: "7Nhm8"
			})), t && !s && c.a.createElement(De.b, {
				className: Ea.a.Scroller
			}, t.map(t => c.a.createElement(ja, {
				channelId: t.channelId,
				onClick: e,
				channelFilterValue: o,
				key: t.channelId
			}))));
			var _a = ({
					message: e
				}) => {
					const t = Object(o.d)(),
						n = Object(o.f)(),
						a = Object(r.useRef)(null),
						[s, i] = Object(r.useState)([]),
						[d, u] = Object(r.useState)([]),
						[h, m] = Object(r.useState)(""),
						[p, b] = Object(r.useState)(!1),
						g = Object(o.e)(U.F),
						f = Object(r.useCallback)(() => {
							const n = Object(Ie.getShareToNewChatUrl)(e);
							t(Object(ce.b)(n))
						}, [t, e]),
						O = Object(r.useCallback)((e, t) => {
							u(n => e ? [...n, t] : n.filter(e => e !== t))
						}, []),
						E = Object(r.useMemo)(() => Object(Ie.getChatUnitType)(e), [e]),
						C = Object(r.useMemo)(() => !Boolean(d.length), [d]),
						j = Object(r.useMemo)(() => Ca._({
							"*": "Share to {amount of chats} chats",
							_1: "Share to {amount of chats} chat"
						}, [Ca._param("amount of chats", d.length || ""), Ca._plural(d.length)], {
							hk: "2O8DGN"
						}), [d]);
					Object(r.useEffect)(() => {
						t(Object(k.e)(E))
					}, [E, t]), Object(r.useEffect)(() => {
						(null == a ? void 0 : a.current) && a.current.focus()
					}, []), Object(r.useEffect)(() => {
						if (!g) {
							const e = n.getState();
							Object(U.e)(e).length ? i(Object(U.e)(e)) : f()
						}
					}, [n, g, f]);
					return c.a.createElement(ba.a, null, c.a.createElement(fa.a, {
						title: Ca._("Share to chat", null, {
							hk: "MfUYD"
						})
					}), c.a.createElement(va, {
						channels: s,
						channelsFilter: h,
						chatUnitTypeData: E,
						hasMoreJoinedChannels: g,
						message: e,
						onChannelClick: O,
						onClickCreateNewChannel: () => {
							f()
						},
						searchRef: a,
						setChannelsFilter: m
					}), c.a.createElement(ga.a, {
						primaryButtonText: j,
						primaryButtonDisabled: C || p,
						secondaryButtonAction: () => {
							t(Object(N.M)())
						},
						primaryButtonAction: () => {
							b(!0), t(Object(T.s)(d, e, ue.c.TEXT)), t(Object(l.D)())
						}
					}))
				},
				Ia = n("./src/chat/components/Sidebar/index.tsx"),
				xa = n("./src/chat/constants/channels.ts"),
				ya = n("./src/chat/constants/container.ts");
			const Sa = () => null;
			var wa = Object(Yn.a)({
				ErrorComponent: Sa,
				getComponent: () => Object($n.a)(() => n.e("OverlayBlockUser").then(n.bind(null, "./src/chat/components/OverlayBlockUser/index.tsx"))).then(e => e.default),
				LoadingComponent: Sa
			});
			const Na = () => null;
			var Ta = Object(Yn.a)({
				ErrorComponent: Na,
				getComponent: () => Object($n.a)(() => n.e("OverlayChannelInvited").then(n.bind(null, "./src/chat/components/OverlayChannelInvited/index.tsx"))).then(e => e.default),
				LoadingComponent: Na
			});
			const Ma = () => null;
			var ka = Object(Yn.a)({
				ErrorComponent: Ma,
				getComponent: () => Object($n.a)(() => n.e("OverlayChannelRemoval").then(n.bind(null, "./src/chat/components/OverlayChannelRemoval/index.tsx"))).then(e => e.default),
				LoadingComponent: Ma
			});
			const Aa = () => null;
			var Pa = Object(Yn.a)({
				ErrorComponent: Aa,
				getComponent: () => Object($n.a)(() => n.e("OverlayDeleteMessage").then(n.bind(null, "./src/chat/components/OverlayDeleteMessage/index.tsx"))).then(e => e.default),
				LoadingComponent: Aa
			});
			const La = () => null;
			var Da = Object(Yn.a)({
				ErrorComponent: La,
				getComponent: () => Object($n.a)(() => n.e("OverlayDirectsEmptyState").then(n.bind(null, "./src/chat/components/OverlayDirectsEmptyState/index.tsx"))).then(e => e.default),
				LoadingComponent: La
			});
			const Ua = () => null;
			var Ra = Object(Yn.a)({
				ErrorComponent: Ua,
				getComponent: () => Object($n.a)(() => n.e("OverlayKickUser").then(n.bind(null, "./src/chat/components/OverlayKickUser/index.tsx"))).then(e => e.default),
				LoadingComponent: Ua
			});
			const Ba = () => null;
			var Fa = Object(Yn.a)({
				ErrorComponent: Ba,
				getComponent: () => Object($n.a)(() => n.e("OverlayNSFWWarning").then(n.bind(null, "./src/chat/components/OverlayNSFWWarning/index.tsx"))).then(e => e.default),
				LoadingComponent: Ba
			});
			const Ha = () => null;
			var Ga = Object(Yn.a)({
					ErrorComponent: Ha,
					getComponent: () => Object($n.a)(() => n.e("OverlayReport").then(n.bind(null, "./src/chat/components/OverlayReport/index.tsx"))).then(e => e.default),
					LoadingComponent: Ha
				}),
				Va = n("./node_modules/lodash/get.js"),
				za = n.n(Va),
				Wa = n("./node_modules/reselect/es/index.js"),
				Ka = n("./src/reddit/actions/reportFlow/index.ts"),
				Za = n("./src/reddit/actions/toaster.ts"),
				qa = n("./src/chat/components/FormBuilder/async.tsx"),
				Qa = n("./src/lib/makeGqlRequest/index.ts"),
				Ja = n("./src/redditGQL/operations/ReportForm.json");
			var Xa = n("./src/reddit/contexts/ApiContext.tsx"),
				Ya = n("./src/reddit/models/ReportFlow/index.ts"),
				$a = n("./src/reddit/models/Toast/index.ts"),
				es = n("./src/chat/components/OverlayReport/index.m.less"),
				ts = n.n(es),
				ns = n("./src/chat/actions/user.ts"),
				as = n("./src/chat/components/CrisisFlow/CrisisFlowPage.tsx"),
				ss = n("./src/chat/components/CrisisFlow/CrisisFooter/index.m.less"),
				rs = n.n(ss);
			const {
				fbt: cs
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function os(e) {
				const {
					thankYouControls: t,
					onCloseReportFlow: n,
					onCrisisFlowSubmit: a
				} = e;
				return c.a.createElement("div", {
					className: rs.a.CrisisFooter
				}, t ? null : c.a.createElement("a", {
					className: rs.a.CrisisButton,
					"data-redditstyle": !0,
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					target: "_blank",
					rel: "noopener noreferrer"
				}, cs._("Other Options", null, {
					hk: "1RadlV"
				})), c.a.createElement("button", {
					className: rs.a.CrisisSubmitButton,
					"data-redditstyle": !0,
					onClick: t ? n : a
				}, t ? cs._("Ok", null, {
					hk: "3Pp8M4"
				}) : cs._("Yes", null, {
					hk: "12gtn"
				})))
			}
			var is = n("./src/chat/endpoints/messages/index.tsx"),
				ls = n("./src/chat/routes/chat.ts"),
				ds = n("./src/chat/selectors/messages.ts");
			var us;
			! function(e) {
				e.Enabled = "enabled"
			}(us || (us = {}));
			const hs = Object(Wa.a)(e => e.experiments.models, e => {
				var t;
				return (null === (t = e.ae_reporting_revamp_d2x_chat) || void 0 === t ? void 0 : t.variant) === us.Enabled
			});
			var ms = n("./src/chat/selectors/user.ts");
			const ps = G.a.div("ReportLoaderWrapper", ts.a),
				bs = G.a.img("LoadingIcon", ts.a),
				gs = "2.0",
				fs = Object(Wa.c)({
					user: (e, t) => t.attr === ls.a.User ? e.contacts.models[t.attrId] : void 0,
					message: (e, t) => t.attr === ls.a.Invite || t.attr === ls.a.Message ? Object(ds.b)(e, Number(t.attrId)) : void 0,
					messageList: e => Object(U.C)(e),
					currentUserId: (e, t) => Object(ms.a)(e),
					container: e => e && e.container && e.container.size,
					isNightMode: e => Object(rn.b)(e),
					inReportingRevampSelector: e => hs(e)
				}),
				Os = Object(o.b)(fs, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(Ka.b)())
					},
					onChannelBlock: t => {
						e(ns.n(t)), e(l.N(t))
					},
					showFailToast: () => e(Object(Za.f)({
						kind: $a.b.Error,
						text: H.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					})),
					onCancel: () => e(Object(ce.a)()),
					submitReportMessage: (t, n) => e(Object(l.Q)(t, n))
				})),
				Es = async (e, t, n) => {
					var a;
					const s = await ((e, {
						itemId: t,
						formVersion: n,
						hostAppName: a
					}) => Object(Qa.a)(e, {
						...Ja,
						variables: {
							itemId: t,
							hostAppName: a,
							formVersion: n
						}
					}))(e, {
						itemId: t,
						formVersion: n
					});
					if (s && s.ok) {
						const e = null === (a = s.body.data.reportForm) || void 0 === a ? void 0 : a.form;
						return e ? JSON.parse(e) : null
					}
				};
			class Cs extends c.a.Component {
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
								showFailToast: a,
								message: s,
								submitReportMessage: r
							}
						} = this;
						if (!s || !s.sender) return;
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: c,
							ruleType: o
						} = e, i = {
							fromHelpDesk: !1,
							senderRedditorId: s.sender.userId,
							sendbirdId: String(s.messageId),
							channelUrl: s.channelSendbirdUrl
						};
						"site" === o && (i.siteRule = za()(t, c.ref).value || za()(t, c.ref));
						(await (() => Object(is.c)(n(), {
							input: i
						}))()).ok || a(), i.siteRule && r(s.messageId, i.siteRule)
					}, this.onCrisisFlowSubmit = async () => {
						const {
							props: {
								gqlContext: e,
								showFailToast: t,
								message: n,
								submitReportMessage: a
							}
						} = this;
						if (!n || !n.sender) return;
						const s = {
							fromHelpDesk: !1,
							senderRedditorId: n.sender.userId,
							sendbirdId: String(n.messageId),
							channelUrl: n.channelSendbirdUrl,
							siteRule: Ya.b.SELF_HARM
						};
						this.setState({
							showCrisisFlowThankYouPage: !0
						}), (await (() => Object(is.c)(e(), {
							input: s
						}))()).ok || t(), a(n.messageId, Ya.b.SELF_HARM)
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
					Es(this.props.gqlContext(), e, gs).then(e => {
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
							onChannelBlock: a,
							isNightMode: s,
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
					return l && h ? c.a.createElement(c.a.Fragment, null, c.a.createElement(as.a, {
						username: h,
						ctlSubmitted: u
					}), r && c.a.createElement(os, {
						onCrisisFlowSubmit: this.onCrisisFlowSubmit,
						onCloseReportFlow: this.handleReportFlowClose,
						thankYouControls: u
					})) : o && i && d && m ? c.a.createElement(qa.a, {
						formComponent: o,
						formState: i,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: "Submit a Report",
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => a(m),
						variant: this.props.container
					}) : c.a.createElement(ps, null, c.a.createElement(bs, {
						src: s ? `${lt.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${lt.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			var js = Object(Xa.b)(Os(Cs));
			const vs = e => e.channelId ? e.action === xa.a.VIEW_INVITE && e.channelId ? c.a.createElement(Ta, {
				channelId: e.channelId
			}) : e.action === xa.a.VIEW_MEMBERS && e.channelId ? c.a.createElement(ta, {
				channelId: e.channelId
			}) : e.action === xa.a.VIEW_NSFW_CONFIRMATION && e.channelId ? c.a.createElement(Fa, {
				channelId: e.channelId
			}) : e.action === je.a.Block && e.attrId && e.channelId ? c.a.createElement(wa, {
				channelId: e.channelId,
				blockedUserId: e.attrId
			}) : e.action === ue.a.DELETE && e.channelId && e.attrId ? c.a.createElement(Pa, {
				channelId: e.channelId,
				messageId: parseInt(e.attrId)
			}) : e.action === ue.a.REPORT && e.attr && e.attrId && e.channelId ? e.inReportRevamp ? c.a.createElement(js, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : c.a.createElement(Ga, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : e.action === je.a.Kick && e.attr && e.attrId && e.channelId ? c.a.createElement(Ra, {
				channelId: e.channelId,
				attr: e.attr,
				attrId: e.attrId
			}) : e.action === xa.a.DENY && e.channelId ? c.a.createElement(ka, {
				channelId: e.channelId
			}) : void 0 : c.a.createElement(Da, null);
			var _s = n("./src/chat/selectors/platform.ts"),
				Is = n("./src/chat/selectors/sidebar.ts"),
				xs = n("./src/chat/components/FrameContent/index.m.less"),
				ys = n.n(xs);
			const Ss = ys.a.Main,
				ws = Object(Ut.a)({
					channel: U.o,
					container: Be.a,
					userAccount: ms.d,
					isSidebarVisible: Is.b,
					inReportingRevampSelector: hs,
					isImageShareEnabled: (e, t) => Object(ln.c)(e, t.match.params.channelId),
					isChannelInPendingState: U.J,
					queryParamsFromUrl: _s.b
				}),
				Ns = Object(o.b)(ws);
			class Ts extends c.a.Component {
				constructor() {
					super(...arguments), this.mainRef = c.a.createRef()
				}
				shouldComponentUpdate(e, t) {
					return !s()(this.props, e) || !s()(this.state, t)
				}
				getContent() {
					const {
						channel: e,
						container: t,
						userAccount: n,
						isSidebarVisible: a,
						inReportingRevampSelector: s,
						isImageShareEnabled: r,
						isChannelInPendingState: o,
						queryParamsFromUrl: l
					} = this.props, {
						action: d,
						channelId: u
					} = this.props.match.params;
					switch (!0) {
						case !n:
							return null;
						case d === xa.a.SHARE: {
							const e = l && l.message;
							return this.props.location.search && e && c.a.createElement(_a, {
								message: e
							})
						}
						case d === xa.a.VIEW_MEMBERS:
							return u && c.a.createElement(ta, {
								channelId: u
							});
						case d === xa.a.SHARE_NEW_CHANNEL:
						case d === xa.a.CREATE:
						case d === xa.a.INVITE_MEMBERS: {
							let e;
							return d === xa.a.SHARE_NEW_CHANNEL && (e = l && l.message), c.a.createElement(aa, {
								messageValue: e
							})
						}
						case t === ya.a.MINIMIZED:
							return c.a.createElement(Xn.a, null);
						default: {
							const n = vs({
								...this.props.match.params,
								inReportRevamp: s
							});
							return c.a.createElement("div", {
								className: ys.a.Main
							}, c.a.createElement(Ia.b, null), c.a.createElement("div", {
								ref: this.mainRef,
								className: Object(i.a)(ys.a.Content, {
									[ys.a.hidden]: a,
									[ys.a.isFullSize]: t === ya.a.FULL
								})
							}, n ? c.a.createElement("div", {
								className: ys.a.Modal
							}, n) : e && u && c.a.createElement(c.a.Fragment, null, c.a.createElement(Jn, {
								channel: e
							}), r && !o && c.a.createElement(_, {
								dropZoneRef: this.mainRef
							}))))
						}
					}
				}
				render() {
					return c.a.createElement("main", {
						className: ys.a.Main,
						id: Ue.a
					}, this.getContent())
				}
			}
			t.b = Ns(Ts)
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
		"./src/chat/components/MediaPreview/index.m.less": function(e, t, n) {
			e.exports = {
				MediaPreview: "_3gh0VpcGMVihhBa_csl4Ff",
				mediaPreview: "_3gh0VpcGMVihhBa_csl4Ff",
				Image: "_16iseEonrwYF3oNC9EIqau",
				image: "_16iseEonrwYF3oNC9EIqau",
				CloseIcon: "_1uJhkd92ZGvRHbzWr-Ikcx",
				closeIcon: "_1uJhkd92ZGvRHbzWr-Ikcx"
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
				c = n("./node_modules/react/index.js"),
				o = n.n(c),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				h = n("./src/chat/actions/user/dropdown.ts"),
				m = n("./src/chat/constants/dropdown.ts"),
				p = n("./src/chat/controls/Button/index.tsx"),
				b = n("./src/chat/controls/Dropdown/index.tsx"),
				g = n("./src/chat/controls/Dropdown/Row.tsx"),
				f = n("./src/chat/helpers/chatSelector.ts"),
				O = n("./src/chat/helpers/dom.ts"),
				E = n("./src/chat/icons/svgs/MenuOverflow/index.tsx"),
				C = n("./src/chat/selectors/channels.ts"),
				j = n("./src/chat/components/MemberActionDropdown/index.m.less"),
				v = n.n(j);
			const _ = ["t2_2ednvld6"],
				I = u.a.wrapped(e => o.a.createElement("span", {
					className: Object(d.a)({
						[v.a.active]: e.id === e.dropdownId
					}, e.className)
				}, e.children), "Wrapper", v.a),
				x = Object(l.a)(u.a.wrapped(b.a, "Component", v.a)),
				y = u.a.wrapped(g.a, "DropdownRow", v.a),
				S = u.a.wrapped(p.c, "IconButton", v.a),
				w = e => o.a.createElement("span", {
					className: e.className,
					id: e.id,
					onClick: e.onClick,
					role: "button"
				}, o.a.createElement(S, null, o.a.createElement(E.a, null))),
				N = Object(f.a)({
					dropdownId: e => e.tooltipId || "",
					currentUserIsChannelMod: C.a
				}),
				T = Object(i.b)(N, (e, t) => ({
					onOpenDropdown: () => e(Object(h.c)(t.id)),
					onBlockUser: t => e(Object(h.a)(t)),
					onReportUser: t => e(Object(h.d)(t)),
					onKickUser: t => e(Object(h.b)(t))
				}));
			class M extends c.Component {
				constructor() {
					super(...arguments), this.onOptionClick = e => {
						switch (e) {
							case m.b.Block:
								return this.props.onBlockUser(this.props.userId);
							case m.b.Report:
								return this.props.onReportUser(this.props.userId);
							case m.b.Kick:
								return this.props.onKickUser(this.props.userId);
							default:
								return
						}
					}, this.getContainer = e => document.getElementsByClassName(this.props.containerClassName || m.a)[e], this.getDropdownOptions = () => {
						const {
							isBlockedUser: e,
							currentUserIsChannelMod: t
						} = this.props, {
							Block: n,
							Kick: a
						} = m.b;
						return e && !t ? r()(m.c.members, [n, a]) : t ? e ? r()(m.c.members, [n]) : m.c.members : r()(m.c.members, [a])
					}, this.getDropdownOptionDisplayText = e => {
						switch (e) {
							case m.b.Block:
								return a.fbt._("Block", null, {
									hk: "t44ep"
								});
							case m.b.Report:
								return a.fbt._("Report", null, {
									hk: "4oVcnd"
								});
							case m.b.Kick:
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
						getContainer: i
					} = this;
					if (_.includes(r)) return null;
					const l = c();
					return !!l.length && o.a.createElement(I, {
						className: e,
						id: a,
						dropdownId: t
					}, o.a.createElement(w, {
						id: a,
						menu: !0,
						onClick: Object(O.b)(s)
					}), o.a.createElement(x, {
						tooltipId: a,
						isOpen: t === a,
						container: i(n),
						closeOnClickOutside: !0
					}, l.map((e, t) => o.a.createElement(y, {
						key: t,
						displayText: this.getDropdownOptionDisplayText(e),
						onClick: Object(O.b)(() => this.onOptionClick(e))
					}))))
				}
			}
			t.a = T(M)
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
				media: "_3EuN3p5ivFNtFdQhCEDlvU",
				UserPic: "_3sST4ddDLTxzMfIc5eBdaS",
				userPic: "_3sST4ddDLTxzMfIc5eBdaS",
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/combineRefs/index.tsx"),
				l = n("./src/lib/hooks/useTooltip.ts"),
				d = n("./src/lib/opener/index.ts"),
				u = n("./src/chat/actions/theme.ts"),
				h = n("./src/chat/actions/tracking.ts"),
				m = n("./src/chat/components/ChatIcon/index.tsx"),
				p = n("./node_modules/react-router-redux/es/index.js"),
				b = n("./src/chat/constants/messages.ts"),
				g = n("./src/chat/constants/users.ts"),
				f = n("./src/chat/controls/Button/index.tsx"),
				O = n("./src/chat/helpers/urls/index.ts"),
				E = n("./src/telemetry/models/Event.ts"),
				C = n("./src/chat/components/Message/ActionButtonGroup.m.less"),
				j = n.n(C);
			const v = ({
				children: e,
				onClick: t
			}) => r.a.createElement("span", {
				className: j.a.ActionButton,
				onClick: t
			}, e);
			var _ = e => {
					const {
						channelId: t,
						message: {
							messageId: n,
							sender: a
						},
						fromCurrentUser: i,
						inPreview: l,
						isMod: d
					} = e, u = null == a ? void 0 : a.userId, h = Object(c.d)(), m = Object(s.useCallback)(() => {
						h(Object(p.b)(Object(O.messageActionUrl)(t, n, b.a.DELETE)))
					}, [h, t, n]), C = Object(s.useCallback)(() => {
						h(Object(p.b)(Object(O.inviteMessageActionUrl)(t, n, b.a.REPORT)))
					}, [h, t, n]), _ = Object(s.useCallback)(() => {
						h(Object(p.b)(Object(O.messageActionUrl)(t, n, b.a.REPORT)))
					}, [h, t, n]), I = Object(s.useCallback)(() => {
						u && h(Object(p.b)(Object(O.userActionUrl)(t, u, g.a.Kick, {
							source: E.b.ChatView
						})))
					}, [h, t, u]);
					return r.a.createElement("div", {
						className: Object(o.a)(j.a.Wrapper, {
							[j.a.single]: !d || i
						})
					}, d && !i ? r.a.createElement(r.a.Fragment, null, r.a.createElement(v, {
						onClick: m
					}, r.a.createElement(f.e, {
						className: j.a.Button
					})), r.a.createElement(v, {
						onClick: () => l ? C() : _()
					}, r.a.createElement(f.b, {
						className: j.a.Button
					})), r.a.createElement(v, {
						onClick: I
					}, r.a.createElement(f.d, {
						className: j.a.Button
					}))) : i ? r.a.createElement(v, {
						onClick: m
					}, r.a.createElement(f.e, {
						className: j.a.Button
					})) : r.a.createElement(v, {
						onClick: () => l ? C() : _()
					}, r.a.createElement(f.b, {
						className: j.a.Button
					})))
				},
				I = n("./src/lib/lessComponent.tsx"),
				x = n("./src/chat/actions/message/index.ts"),
				y = n("./src/chat/controls/TextButton.tsx"),
				S = n("./src/chat/components/Message/CollapsedMessage.m.less"),
				w = n.n(S);
			var N = Object(c.b)(void 0, (e, t) => ({
					uncollapseMessage: () => {
						e(Object(x.E)(t)), e(Object(h.K)(t.messageId))
					},
					viewCollapsedMessage: () => {
						e(Object(h.Y)(t.messageId))
					}
				}))(I.a.wrapped(({
					className: e,
					uncollapseMessage: t,
					viewCollapsedMessage: n
				}) => r.a.createElement("div", {
					onLoad: n,
					className: e
				}, a.fbt._("This message has been collapsed due to potentially offensive language.", null, {
					hk: "4qscuz"
				}), r.a.createElement("div", null, r.a.createElement(y.a, {
					onClick: t
				}, a.fbt._("View Message", null, {
					hk: "QjaEs"
				})))), "CollapsedMessage", w.a)),
				T = n("./src/chat/components/Message/FailedMenu.m.less"),
				M = n.n(T);
			const k = I.a.div("ButtonControls", M.a),
				A = I.a.span("Text", M.a),
				P = I.a.wrapped(f.a, "Button", M.a);
			class L extends s.Component {
				constructor() {
					super(...arguments), this.handleResend = () => this.props.onResend(this.props.clientMessageId), this.handleDelete = () => this.props.onDelete(this.props.clientMessageId)
				}
				render() {
					return r.a.createElement(k, null, r.a.createElement(A, null, a.fbt._("Failed to send", null, {
						hk: "2feF2H"
					})), r.a.createElement(P, {
						noBorder: !0,
						onClick: this.handleResend
					}, a.fbt._("Resend", null, {
						hk: "cXpU3"
					})), r.a.createElement(P, {
						warningNoBorder: !0,
						onClick: this.handleDelete
					}, a.fbt._("Delete", null, {
						hk: "4lt26q"
					})))
				}
			}
			var D = Object(c.b)(void 0, (e, {
					channelId: t
				}) => ({
					onResend: n => e(Object(x.A)(t, n)),
					onDelete: t => e(Object(x.z)({
						clientMessageId: t
					}))
				}))(L),
				U = n("./src/chat/components/Message/LinkedText.tsx"),
				R = n("./src/lib/portal/index.tsx"),
				B = n("./src/chat/constants/keys.ts"),
				F = n("./src/chat/icons/svgs/NavClose/index.tsx"),
				H = n("./src/chat/components/MediaPreview/index.m.less"),
				G = n.n(H);
			var V = ({
					onClose: e,
					url: t
				}) => {
					const n = Object(s.useRef)(null);
					Object(s.useEffect)(() => {
						(null == n ? void 0 : n.current) && n.current.focus()
					}, []);
					const a = Object(s.useCallback)(t => {
						t.key === B.h && e()
					}, [e]);
					return r.a.createElement(R.a, null, r.a.createElement("div", {
						ref: n,
						className: G.a.MediaPreview,
						onClick: e,
						onKeyDown: a,
						tabIndex: 0,
						role: "button",
						"aria-pressed": "false"
					}, r.a.createElement(f.c, {
						className: G.a.CloseIcon
					}, r.a.createElement(F.a, null)), t && r.a.createElement("img", {
						className: G.a.Image,
						src: t,
						onClick: e => e.stopPropagation()
					})))
				},
				z = n("./src/chat/helpers/linkParser/index.ts"),
				W = n("./src/chat/models/Uploads/index.ts"),
				K = n("./src/chat/selectors/uploads.ts"),
				Z = n("./src/chat/components/Message/Media/index.m.less"),
				q = n.n(Z);
			const Q = {
				[W.c.Submit]: q.a.submit,
				[W.c.Uploading]: q.a.uploading,
				[W.c.Processing]: q.a.processing
			};
			var J = ({
					messageDataType: e,
					uploadId: t,
					uploadedImage: n
				}) => {
					var i, l, d, u;
					const m = Object(c.d)(),
						[p, b] = Object(s.useState)(!1),
						g = Object(c.e)(e => Object(K.d)(e, t)),
						f = Boolean((null == g ? void 0 : g.status) === W.c.Failed),
						O = Boolean((null == g ? void 0 : g.status) === W.c.Success),
						E = Boolean((null == g ? void 0 : g.status) === W.c.Canceled),
						C = !(f || E || O || !g),
						j = g && Q[g.status],
						v = (null == n ? void 0 : n.url) || (null === (i = null == g ? void 0 : g.metadata) || void 0 === i ? void 0 : i.localUrl),
						_ = (null == n ? void 0 : n.width) || (null === (l = null == g ? void 0 : g.metadata) || void 0 === l ? void 0 : l.width),
						I = (null == n ? void 0 : n.height) || (null === (d = null == g ? void 0 : g.metadata) || void 0 === d ? void 0 : d.height),
						x = Object(s.useMemo)(() => {
							if (!I || !_) return;
							const e = Math.min(164, I || 165),
								t = Math.min(164, 164 / (_ / I)),
								n = Math.min(e, t);
							return Math.ceil(n)
						}, [I, _]);
					return r.a.createElement(r.a.Fragment, null, !f && p && v && r.a.createElement(V, {
						onClose: () => b(!1),
						url: v
					}), r.a.createElement("button", {
						className: q.a.MediaWrapper,
						onClick: () => {
							b(!0), m(Object(h.g)(e))
						}
					}, r.a.createElement("img", {
						key: t,
						style: {
							height: x && `${x}px`
						},
						className: Object(o.a)(q.a.MediaImage, {
							[q.a.failed]: f
						}),
						src: Object(z.c)(v)
					}), C && r.a.createElement("div", {
						className: Object(o.a)(q.a.ProgressBar, j)
					}, (null === (u = null == g ? void 0 : g.progress) || void 0 === u ? void 0 : u.percent) && r.a.createElement("div", {
						className: q.a.UploadingIndicatorWrapper
					}, r.a.createElement("div", {
						className: q.a.UploadingIndicator,
						style: {
							width: `${Number(g.progress.percent).toFixed(2)}%`
						}
					})))), f && r.a.createElement("div", {
						className: q.a.FailedText
					}, a.fbt._("Failed to upload", null, {
						hk: "wy9r9"
					})))
				},
				X = n("./src/chat/components/Message/OffensiveMessageReportPrompt.m.less"),
				Y = n.n(X);
			const $ = I.a.wrapped(y.a, "Regular", Y.a),
				ee = I.a.wrapped(y.a, "Active", Y.a),
				te = Object(c.b)(void 0, (e, t) => ({
					cancel: () => {
						e(Object(x.w)(t)), e(Object(h.b)(t.channelId, t.messageId))
					},
					reportMessage: () => {
						e(Object(p.b)(Object(O.inviteMessageActionUrl)(t.channelId, t.messageId, b.a.REPORT))), e(Object(x.w)(t)), e(Object(h.J)(t.channelId, t.messageId))
					}
				}));
			var ne = I.a.wrapped(te(e => r.a.createElement("div", {
					className: e.className
				}, a.fbt._("Was this message offensive?", null, {
					hk: "1sBVkd"
				}), r.a.createElement("div", null, r.a.createElement($, {
					onClick: () => e.cancel(e)
				}, a.fbt._("No", null, {
					hk: "SG3Y"
				})), r.a.createElement(ee, {
					onClick: () => e.reportMessage(e)
				}, a.fbt._("Yes", null, {
					hk: "3ONldA"
				}))))), "OffensiveMessageReport", Y.a),
				ae = n("./src/chat/components/Message/RichUnit/Comment/loader.tsx"),
				se = n("./src/higherOrderComponents/makeAsync.tsx"),
				re = n("./src/lib/loadWithRetries/index.ts");
			const ce = () => null;
			var oe = Object(se.a)({
					ErrorComponent: ce,
					getComponent: () => Object(re.a)(() => n.e("ExternalLinkUnit").then(n.bind(null, "./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.tsx"))).then(e => e.default),
					LoadingComponent: ce
				}),
				ie = n("./src/chat/components/Message/RichUnit/Post/loader.tsx"),
				le = n("./src/lib/prettyPrintNumber/index.ts"),
				de = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.tsx"),
				ue = n("./src/chat/components/Message/RichUnit/commonComponents/Header.tsx"),
				he = n("./src/chat/components/Message/RichUnit/commonComponents/ImageContent.tsx"),
				me = n("./src/chat/components/Message/RichUnit/Subreddit/SubredditRichUnit.m.less"),
				pe = n.n(me);
			const be = I.a.div("Delimiter", pe.a),
				ge = I.a.wrapped(he.a, "ImageContent", pe.a),
				fe = I.a.wrapped(({
					className: e,
					imageUrl: t = "",
					title: n,
					subredditType: a,
					isNsfw: s
				}) => r.a.createElement("div", {
					className: e,
					tabIndex: 0
				}, r.a.createElement(ge, {
					url: t,
					title: n,
					subredditType: a,
					isNsfw: s,
					isSubreddit: !0
				})), "Content", pe.a),
				Oe = I.a.wrapped(({
					className: e,
					darkBackground: t,
					richUnitData: n,
					richUnitData: {
						subscribersCount: a = 0,
						activeCount: s = 0
					}
				}) => {
					var c, i, l, u;
					const h = `${Object(le.b)(a)} members • ${Object(le.b)(s)} online`,
						m = `/r/${n.id}`;
					return r.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(d.e)(t, "_blank")
							})(e, m)
						},
						className: Object(o.a)(e, {
							[pe.a.dark]: t
						})
					}, r.a.createElement(ue.a, {
						subredditName: n.id,
						iconUrl: null === (c = null == n ? void 0 : n.styles) || void 0 === c ? void 0 : c.icon,
						subredditTitle: n.title
					}), (null === (i = n.styles) || void 0 === i ? void 0 : i.bannerBackgroundImage) || !(null == n ? void 0 : n.subredditType) && !(null === (l = n.styles) || void 0 === l ? void 0 : l.bannerBackgroundImage) ? null : r.a.createElement(be, null), (null == n ? void 0 : n.subredditType) && r.a.createElement(fe, {
						imageUrl: null === (u = null == n ? void 0 : n.styles) || void 0 === u ? void 0 : u.bannerBackgroundImage,
						title: (null == n ? void 0 : n.publicDescriptionText) || "",
						subredditType: (null == n ? void 0 : n.subredditType) || "",
						isNsfw: Boolean(null == n ? void 0 : n.isNsfw)
					}), r.a.createElement(de.a, {
						isSubreddit: !0,
						metaInfo: h
					}))
				}, "SubredditRichUnit", pe.a);
			var Ee = I.a.wrapped(({
					className: e,
					darkBackground: t,
					richUnitData: n
				}) => r.a.createElement("div", {
					className: e
				}, r.a.createElement(Oe, {
					darkBackground: t,
					richUnitData: n
				})), "RichUnitWrapper", pe.a),
				Ce = n("./node_modules/lodash/isEmpty.js"),
				je = n.n(Ce),
				ve = n("./src/chat/controls/Svg/index.tsx");
			var _e = e => r.a.createElement(ve.a, {
					className: e.className,
					viewBox: "0 0 14 11"
				}, r.a.createElement("path", {
					d: "M13.1656,4.55472 L12.0464,3.43472 C11.896,3.28432 11.6928,3.20032 11.4808,3.20032 C11.268,3.20032 11.0648,3.28432 10.9152,3.43472 L5.32,9.02912 L3.0856,6.79472 C2.7736,6.48192 2.2672,6.48192 1.9544,6.79472 L0.8344,7.91472 C0.5216,8.22752 0.5216,8.73392 0.8344,9.04592 L4.7544,12.96592 C4.9112,13.12192 5.1152,13.20032 5.32,13.20032 C5.5248,13.20032 5.7296,13.12192 5.8856,12.96592 L13.1656,5.68592 C13.4784,5.37312 13.4784,4.86752 13.1656,4.55472",
					transform: "translate(0 -3)"
				})),
				Ie = n("./src/chat/icons/svgs/Trash/index.tsx"),
				xe = n("./src/chat/components/MessageReportDialog/ActionMenu.m.less"),
				ye = n.n(xe);
			const {
				fbt: Se
			} = n("./node_modules/fbt/lib/FbtPublic.js"), we = I.a.wrapped(_e, "Approve", ye.a), Ne = I.a.wrapped(Ie.a, "Trash", ye.a), Te = I.a.div("ButtonControls", ye.a), Me = I.a.wrapped(f.a, "Button", ye.a), ke = I.a.span("ButtonText", ye.a);
			class Ae extends s.Component {
				render() {
					const {
						onDelete: e,
						onIgnore: t,
						reportedChannelId: n,
						reportedMessageId: a
					} = this.props;
					return r.a.createElement(Te, null, r.a.createElement(Me, {
						noBorder: !0,
						onClick: () => e(a, n)
					}, r.a.createElement(Ne, null), r.a.createElement(ke, null, Se._("Delete Message", null, {
						hk: "3ksti7"
					}))), r.a.createElement(Me, {
						noBorder: !0,
						onClick: () => t(a, n)
					}, r.a.createElement(we, null), r.a.createElement(ke, null, Se._("Ignore Report", null, {
						hk: "1QScZP"
					}))))
				}
			}
			var Pe = Object(c.b)(void 0, e => ({
					onDelete: (t, n) => e(Object(x.B)(t, n)),
					onIgnore: (t, n) => e(Object(x.C)(t, n))
				}))(Ae),
				Le = n("./src/chat/components/MemberActionDropdown/index.tsx"),
				De = n("./src/config.ts"),
				Ue = n("./src/chat/helpers/time/index.tsx"),
				Re = n("./src/chat/controls/TimeStamp/index.m.less"),
				Be = n.n(Re);
			var Fe = I.a.wrapped(e => {
					const t = "number" == typeof e.date ? new Date(e.date) : e.date;
					return r.a.createElement("time", {
						className: e.className,
						dateTime: Object(Ue.c)(t),
						title: Object(Ue.b)(t)
					}, e.children)
				}, "TimeStamp", Be.a),
				He = n("./src/chat/components/MessageHeader/index.m.less"),
				Ge = n.n(He);
			const Ve = I.a.wrapped(Fe, "TimeStamp", Ge.a),
				ze = I.a.span("UserName", Ge.a);
			var We = I.a.wrapped(e => r.a.createElement("a", {
				target: d.d.BLANK,
				rel: d.c,
				className: e.className,
				href: `${De.a.redditUrl}/user/${e.nickname}`
			}, r.a.createElement(m.a, {
				userId: e.userId,
				isSmall: !0
			}), r.a.createElement(r.a.Fragment, null, r.a.createElement(ze, null, e.nickname), r.a.createElement(Ve, {
				date: e.createdAt
			}, Object(Ue.d)(new Date(e.createdAt))), e.children)), "UserHeader", Ge.a);
			var Ke = e => r.a.createElement(ve.a, {
				className: e.className,
				disable: !0,
				viewBox: "0 0 16 16"
			}, r.a.createElement("g", {
				transform: "translate(-26.000000, -37.000000)"
			}, r.a.createElement("path", {
				d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
			})));

			function Ze() {
				return (Ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var qe = e => r.a.createElement(ve.a, Ze({}, e, {
					viewBox: "0 0 16 16"
				}), r.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				})),
				Qe = n("./src/chat/icons/svgs/MenuOverflow/index.tsx"),
				Je = n("./src/chat/components/MessageReportDialog/Header.m.less"),
				Xe = n.n(Je);
			const Ye = I.a.wrapped(Ke, "Group", Xe.a),
				$e = I.a.wrapped(qe, "Key", Xe.a),
				et = I.a.wrapped(Le.a, "MemberActionDropdown", Xe.a),
				tt = I.a.wrapped(We, "MessageHeaderLink", Xe.a),
				nt = I.a.h5("ChannelName", Xe.a),
				at = I.a.span("TextOverflow", Xe.a),
				st = I.a.wrapped(f.c, "IconButton", Xe.a),
				rt = I.a.div("Header", Xe.a);
			var ct = e => {
					const {
						channelId: t,
						channelIsPublic: n,
						channelName: a,
						messageCreatedAt: s,
						messageId: c,
						reportedUserId: o,
						reportedUserName: i
					} = e, l = `UserAction--Item-${c}`;
					return r.a.createElement(rt, null, r.a.createElement(tt, {
						createdAt: s,
						nickname: i,
						userId: o
					}, r.a.createElement(nt, null, n ? r.a.createElement(Ye, null) : r.a.createElement($e, null), r.a.createElement(at, null, a))), r.a.createElement(et, {
						channelId: t,
						containerClassName: l,
						className: l,
						dropdownIndex: 0,
						id: `UserAction--Select-${c}`,
						isBlockedUser: !1,
						userId: o
					}, r.a.createElement(st, null, r.a.createElement(Qe.a, null))))
				},
				ot = n("./src/chat/components/MessageReportDialog/index.m.less"),
				it = n.n(ot);
			const {
				fbt: lt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), dt = I.a.p("ReasonText", it.a), ut = I.a.p("DeleteText", it.a), ht = I.a.p("AcceptText", it.a);
			var mt = e => {
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
					return r.a.createElement(r.a.Fragment, null, n && s && a && i && c && d && u && r.a.createElement(ct, {
						channelId: n,
						channelIsPublic: a,
						channelName: s,
						messageCreatedAt: c,
						messageId: i,
						reportedUserId: d,
						reportedUserName: u
					}), o, r.a.createElement(dt, null, lt._("Reported for {reason}", [lt._param("reason", l)], {
						hk: "2BwGqI"
					}), " ", h && lt._("by /u{reporter}", [lt._param("reporter", h)], {
						hk: "1hrZNZ"
					})), t && t.deleted && r.a.createElement(ut, null, lt._("Deleted by {username}", [lt._param("username", `u/${t.deleted.userName}`)], {
						hk: "4mxZZS"
					})), t && t.ignored && r.a.createElement(ht, null, lt._("Approved by {username}", [lt._param("username", `u/${t.ignored.userName}`)], {
						hk: "m22OH"
					})), je()(t) && r.a.createElement(Pe, {
						reportedMessageId: e.message.messageId,
						reportedChannelId: e.message.channelId
					}))
				},
				pt = n("./src/chat/components/Snoomoji/index.tsx"),
				bt = n("./src/chat/controls/Gif/index.tsx"),
				gt = n("./src/chat/controls/TooltipHooked/loader.tsx"),
				ft = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				Ot = n("./src/chat/helpers/dom.ts");

			function Et() {
				return (Et = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ct = e => r.a.createElement(ve.a, Et({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("path", {
					d: "M10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5Z"
				}), r.a.createElement("path", {
					d: "M10 6C10.8284 6 11.5 5.32843 11.5 4.5C11.5 3.67157 10.8284 3 10 3C9.17157 3 8.5 3.67157 8.5 4.5C8.5 5.32843 9.17157 6 10 6Z"
				}), r.a.createElement("path", {
					d: "M10 17C10.8284 17 11.5 16.3284 11.5 15.5C11.5 14.6716 10.8284 14 10 14C9.17157 14 8.5 14.6716 8.5 15.5C8.5 16.3284 9.17157 17 10 17Z"
				})),
				jt = n("./src/chat/models/RichUnit/index.ts"),
				vt = n("./src/chat/selectors/experiments.ts"),
				_t = n("./src/chat/selectors/richUnits.ts"),
				It = n("./src/chat/components/Message/Bubble.m.less"),
				xt = n.n(It);
			const {
				PENDING: yt,
				USER: St
			} = b.d, {
				POST: wt,
				USER_POST: Nt,
				COMMENT: Tt,
				SNOOMOJI: Mt,
				SUBREDDIT: kt,
				EMBED: At,
				GIF: Pt,
				IMAGE: Lt
			} = b.c, Dt = () => {
				const e = Object(c.d)();
				return Object(c.e)(vt.g) ? r.a.createElement("div", {
					className: xt.a.ThemePrompt,
					tabIndex: 0
				}, r.a.createElement("button", {
					className: xt.a.Content,
					onClick: () => {
						e(Object(u.clickThemePrompt)()), e(Object(h.h)())
					}
				}, "🖍 ", a.fbt._("Change chat theme", null, {
					hk: "4F8P45"
				}))) : null
			}, Ut = r.a.forwardRef(({
				className: e,
				children: t,
				disabled: n,
				withBorder: a,
				fromCurrentUser: s,
				inPreview: u,
				isEmbedded: h,
				message: p,
				showUserPic: b,
				noPadding: g
			}, f) => {
				var E, C;
				const j = Object(l.b)(Object(ft.e)(Boolean(s))),
					v = Object(c.e)(e => Object(vt.c)(e, null == p ? void 0 : p.channelId)),
					_ = Object(c.e)(e => Object(vt.b)(e)),
					I = v || !_;
				return r.a.createElement("span", {
					onMouseEnter: j.show,
					onMouseLeave: j.hide,
					ref: Object(i.a)(f, j.target.ref),
					className: Object(o.a)(e, {
						[xt.a.dark]: !s,
						[xt.a.disabled]: n,
						[xt.a.withBorder]: a,
						[xt.a.currentUser]: s,
						[xt.a.embed]: h,
						[xt.a.noPadding]: g,
						[xt.a.gif]: (null == p ? void 0 : p.messageData.type) === Pt && !u,
						[xt.a.media]: (null == p ? void 0 : p.messageData.type) === Lt && !u && I
					})
				}, t, b && (null === (E = null == p ? void 0 : p.sender) || void 0 === E ? void 0 : E.userId) && r.a.createElement(m.a, {
					onClick: Object(Ot.b)(() => {
						var e;
						const t = null === (e = null == p ? void 0 : p.sender) || void 0 === e ? void 0 : e.nickname;
						if (t) {
							const e = Object(O.viewProfileUrl)(t);
							Object(d.e)(e, "_blank")
						}
					}),
					className: xt.a.UserPic,
					userId: null === (C = null == p ? void 0 : p.sender) || void 0 === C ? void 0 : C.userId
				}), (null == p ? void 0 : p.createdAt) && r.a.createElement(gt.a, {
					arrowProps: j.arrowProps,
					popperProps: j.popperProps,
					visible: j.visible,
					styled: !0,
					isCloseOnHover: !0,
					hide: j.hide
				}, r.a.createElement("span", {
					className: xt.a.TimestampWrapper
				}, Object(Ue.d)(new Date(p.createdAt)))))
			});

			function Rt(e) {
				return "messageId" in e && "channelId" in e
			}

			function Bt(e, t) {
				return !(e.messageData.type !== b.c.EMBED || !e.messageData.embed || t) || !(e.messageData.type !== b.c.POST && e.messageData.type !== b.c.USER_POST && e.messageData.type !== b.c.COMMENT && e.messageData.type !== b.c.SUBREDDIT || t)
			}
			t.a = e => {
				const {
					className: t,
					fromCurrentUser: n = !1,
					isChatEmbedded: s,
					isCurrentUserChannelMod: i,
					message: d,
					isLastCurrentUserMessage: u,
					inPreview: h,
					showUserPic: m,
					withButton: p
				} = e, g = Object(c.e)(e => Object(_t.b)(e, d.messageData)), f = Object(l.b)(Object(ft.a)(n)), O = Object(l.b)(Object(ft.c)()), E = Object(c.e)(e => Object(vt.c)(e, d.channelId)), C = Object(c.e)(e => Object(vt.b)(e)), j = E || !C;
				if (!d) return null;
				const {
					type: v,
					report: I,
					collapsedInvitePreview: x
				} = d.messageData, y = d.messageType === yt && d.error && d.clientMessageId, S = v !== Mt && (v !== Pt || v === Pt && h), w = p && !y && !I, T = d.messageType === St && w, M = ((e, t, n, s, c, o) => {
					var i, l, d, u;
					const {
						messageType: h,
						messageData: m,
						messageData: {
							highlights: p,
							value: b
						}
					} = e, g = a.fbt._("Sent a media", null, {
						hk: "3fWrfX"
					});
					if (t && m.type !== Mt) return m.type === Pt ? a.fbt._("Sent a GIF", null, {
						hk: "1x1QrK"
					}) : m.type === Lt ? g : b;
					const f = r.a.createElement(U.a, {
						className: xt.a.Text,
						value: b,
						highlighMentionGroupLinks: p
					});
					switch (m.type) {
						case At:
							const {
								embed: e
							} = m;
							return h !== yt && e ? r.a.createElement(oe, {
								name: e.name,
								title: e.title,
								thumbnailUrl: e.imageUrl,
								href: e.url,
								providerDisplay: e.providerDisplay,
								darkBackground: n,
								faviconUrl: e.faviconUrl
							}) : f;
						case wt:
						case Nt:
							return (null == s ? void 0 : s.type) !== wt && (null == s ? void 0 : s.type) !== Nt || (null == s ? void 0 : s.removedByCategory) === jt.b.Deleted ? f : r.a.createElement(ie.a, {
								darkBackground: n,
								postUrl: b,
								highlights: p,
								richUnitData: s
							});
						case Tt:
							return s && (null == s ? void 0 : s.type) === Tt && !s.deletedAt ? r.a.createElement(ae.a, {
								darkBackground: n,
								commentUrl: b,
								highlights: p,
								richUnitData: s
							}) : f;
						case kt:
							return s && s.type === kt ? r.a.createElement(Ee, {
								darkBackground: n,
								richUnitData: s
							}) : f;
						case Mt:
							return r.a.createElement("div", {
								className: xt.a.Snoo
							}, r.a.createElement(pt.a, {
								iconName: b
							}));
						case Pt: {
							const e = !c && (null === (i = m.gif) || void 0 === i ? void 0 : i.width) || 0,
								t = Math.min(258 / e, 1);
							return r.a.createElement(bt.a, {
								imageScale: t,
								source: b,
								title: null === (l = m.gif) || void 0 === l ? void 0 : l.title,
								height: null === (d = m.gif) || void 0 === d ? void 0 : d.height,
								width: null === (u = m.gif) || void 0 === u ? void 0 : u.width
							})
						}
						case Lt: {
							const e = m.clientMessageId;
							return o ? r.a.createElement(J, {
								messageDataType: m.type,
								uploadId: e,
								uploadedImage: m.image
							}) : g
						}
						default:
							return f
					}
				})(d, h, !n, g, s, j), k = ((e, t, n, a, s, c) => r.a.createElement(gt.a, {
					popperProps: e.popperProps,
					visible: e.visible,
					arrowProps: e.arrowProps,
					hide: e.hide
				}, n && !a ? r.a.createElement("button", {
					onClick: () => {
						t.visible ? t.hide() : t.show()
					},
					className: xt.a.BubbleMenu,
					ref: t.target.ref
				}, r.a.createElement(Ct, {
					className: Object(o.a)(xt.a.MenuOverflowVertical, {
						[xt.a.active]: t.visible
					})
				})) : r.a.createElement(_, {
					className: xt.a.ActionButtonGroup,
					message: c,
					fromCurrentUser: a,
					inPreview: s,
					isMod: n,
					channelId: c.channelId
				}), r.a.createElement(gt.a, {
					arrowProps: t.arrowProps,
					popperProps: t.popperProps,
					visible: t.visible,
					hide: t.hide,
					isInstant: !0,
					styled: !0
				}, r.a.createElement(_, {
					className: xt.a.ActionButtonGroup,
					message: c,
					fromCurrentUser: a,
					inPreview: s,
					isMod: n,
					channelId: c.channelId
				}))))(f, O, i, n, h, d);
				return r.a.createElement("span", {
					className: Object(o.a)(xt.a.MessageItemBubble, t),
					onMouseEnter: f.show,
					onMouseLeave: () => {
						f.hide(), O.hide()
					}
				}, r.a.createElement(Ut, {
					ref: f.target.ref,
					fromCurrentUser: n,
					inPreview: h,
					withButton: w,
					withBorder: S,
					message: d,
					disabled: !!y,
					showUserPic: m,
					isEmbedded: s,
					className: Object(o.a)(xt.a.MessageBubble, (g || d.messageData.type === b.c.EMBED) && !h && {
						[xt.a.richUnit]: Bt(d, !s),
						[xt.a.richUnitResponsive]: Bt(d, s)
					})
				}, I && d.messageType === St ? r.a.createElement(mt, {
					report: I,
					message: d
				}) : h && Rt(d) && function(e) {
					return Boolean(null == e ? void 0 : e.shouldCollapse)
				}(x) ? r.a.createElement(N, {
					channelId: d.channelId,
					messageId: d.messageId
				}) : M), T && k, u && r.a.createElement(Dt, null), h && Rt(d) && function(e) {
					return Boolean(!(null == e ? void 0 : e.shouldCollapse) && (null == e ? void 0 : e.shouldShowReportPrompt))
				}(x) && r.a.createElement(ne, {
					channelId: d.channelId,
					messageId: d.messageId
				}), y && r.a.createElement(D, {
					channelId: d.channelId,
					clientMessageId: y
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/linkMatchers/customLinks.ts"),
				o = n("./src/lib/opener/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/chat/helpers/linkParser/index.ts"),
				d = n("./src/chat/components/Message/Link.m.less"),
				u = n.n(d);
			const h = r.a.wrapped(e => s.a.createElement("a", {
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
				g = r.a.span("DetailsWrapper", u.a),
				f = r.a.span("Title", u.a),
				O = r.a.p("Description", u.a),
				E = e => s.a.createElement(h, {
					noUnderline: e.noUnderline,
					href: Object(l.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children),
				C = e => e.isEmbed ? (e => s.a.createElement(E, e, s.a.createElement(p, null, s.a.createElement(b, null, e.name)), s.a.createElement(g, null, s.a.createElement("span", null, s.a.createElement(f, null, e.title), s.a.createElement(O, null, e.description)))))(e) : (e => e.href ? s.a.createElement(E, e, e.children) : s.a.createElement(m, e, e.children))(e);
			var j = n("./src/chat/components/Message/LinkedText.m.less"),
				v = n.n(j);
			const _ = r.a.pre("MessageText", v.a),
				I = (e, t, n, a, r) => s.a.createElement(C, {
					key: r || e,
					href: e,
					target: n,
					rel: o.c,
					noUnderline: a === c.d.mention || a === c.d.profile || a === c.d.profileFull || a === c.d.subreddit || a === c.d.subredditFull
				}, t);
			t.a = r.a.wrapped(e => {
				const {
					value: t,
					highlighMentionGroupLinks: n,
					className: a
				} = e, r = !(!n || !n.length), c = Object(l.a)(t, r, I);
				return s.a.createElement(_, {
					tabIndex: 0,
					className: a
				}, c)
			}, "LinkedText", v.a)
		},
		"./src/chat/components/Message/Media/index.m.less": function(e, t, n) {
			e.exports = {
				MediaWrapper: "_2F9B5pzZJagoK1bpu3O83l",
				mediaWrapper: "_2F9B5pzZJagoK1bpu3O83l",
				MediaImage: "_1w8GKCzZrC-hG--eyzxnMY",
				mediaImage: "_1w8GKCzZrC-hG--eyzxnMY",
				failed: "_1gBrEHNmiJBT8xvx7OlDeR",
				ProgressBar: "bCeMIMBXCQn_CLQ4cymkM",
				progressBar: "bCeMIMBXCQn_CLQ4cymkM",
				submit: "_1i8K9e8juWUKH_BUXzL0Iy",
				uploading: "_9WQ0nf3hFqmZYYpnw3r2t",
				UploadingIndicatorWrapper: "_1q8LYH9D5hlnyntQE0Ur5T",
				uploadingIndicatorWrapper: "_1q8LYH9D5hlnyntQE0Ur5T",
				UploadingIndicator: "_27TbZYRJaDGshxYcEMpKjM",
				uploadingIndicator: "_27TbZYRJaDGshxYcEMpKjM",
				processing: "DvZ1QJIiJhap-xLYfGLBH",
				FailedText: "_1JbaEP7BOugQX_jbR4Z612",
				failedText: "_1JbaEP7BOugQX_jbR4Z612"
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
		"./src/chat/components/Message/RichUnit/Comment/loader.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(a.a)({
				ErrorComponent: r,
				getComponent: () => Object(s.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CommentRichUnit")]).then(n.bind(null, "./src/chat/components/Message/RichUnit/Comment/CommentRichUnit.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/chat/components/Message/RichUnit/Post/loader.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(a.a)({
				ErrorComponent: r,
				getComponent: () => Object(s.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("PostRichUnit")]).then(n.bind(null, "./src/chat/components/Message/RichUnit/Post/PostRichUnit.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.m.less"),
				o = n.n(c);
			const i = r.a.div("MetaInfo", o.a);
			t.a = r.a.wrapped(({
				className: e,
				metaInfo: t,
				isSubreddit: n
			}) => s.a.createElement("div", {
				className: e
			}, s.a.createElement(i, {
				tabIndex: 0
			}, t), n ? s.a.createElement("div", {
				className: o.a.OnlineIndicator
			}, "•") : null), "Footer", o.a)
		},
		"./src/chat/components/Message/RichUnit/commonComponents/Header.m.less": function(e, t, n) {
			e.exports = {
				Header: "_34nspwaK-gGrunZyKsXhu6",
				header: "_34nspwaK-gGrunZyKsXhu6",
				isSharedToChat: "_2LeBx_u8DAMCUMWh4xgL7u",
				HeaderDivider: "_2qmDv9Opsjh-8JEMSnDZeF",
				headerDivider: "_2qmDv9Opsjh-8JEMSnDZeF",
				SubredditInfo: "oIkUuHMS6_PqV6QJ-Fh6x",
				subredditInfo: "oIkUuHMS6_PqV6QJ-Fh6x",
				PlanetIcon: "_2x1ZpQU-ZTe3X17czqDAtQ",
				planetIcon: "_2x1ZpQU-ZTe3X17czqDAtQ",
				SubredditIcon: "d2mWq7nOmvFlngOaCkFId",
				subredditIcon: "d2mWq7nOmvFlngOaCkFId",
				AuthorName: "vBrYwlP4ttvt6O5A2qNzQ",
				authorName: "vBrYwlP4ttvt6O5A2qNzQ",
				SubredditTitle: "_2fIxSv7J-kRHJ1n6_XEy1r",
				subredditTitle: "_2fIxSv7J-kRHJ1n6_XEy1r",
				Link: "_34O3daElUVauAUTnaTGH-_",
				link: "_34O3daElUVauAUTnaTGH-_"
			}
		},
		"./src/chat/components/Message/RichUnit/commonComponents/Header.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/opener/index.ts"),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				o = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/lib/lessComponent.tsx"),
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
					viewBox: "0 0 20 20"
				}), c.a.createElement("path", {
					d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
				})),
				h = n("./src/chat/components/Message/RichUnit/commonComponents/Header.m.less"),
				m = n.n(h),
				p = n("./src/lib/classNames/index.ts");
			const b = i.a.img("SubredditIcon", m.a),
				g = i.a.wrapped(u, "PlanetIcon", m.a),
				f = i.a.wrapped(e => {
					const {
						className: t,
						subredditName: n,
						authorName: r,
						isPostComment: i,
						redditorName: l,
						subredditTitle: d,
						isSharedToChat: u
					} = e, h = n ? `r/${n}` : "", b = l ? `u/${l}` : "", g = `u/${r||l}`;
					return c.a.createElement("div", {
						className: Object(p.a)(t, {
							[m.a.isSharedToChat]: u
						}),
						onClick: e => e.stopPropagation()
					}, c.a.createElement(o.a, {
						className: m.a.SubredditName,
						to: `/${h||b}`,
						target: s.d.BLANK,
						rel: s.c
					}, h || b), u && c.a.createElement("span", {
						className: m.a.HeaderDivider
					}, " • "), d ? c.a.createElement(o.a, {
						className: m.a.SubredditTitle,
						to: `/${h||b}`,
						target: s.d.BLANK,
						rel: s.c
					}, d) : c.a.createElement(o.a, {
						className: m.a.AuthorName,
						to: `/${g}`,
						target: s.d.BLANK,
						rel: s.c
					}, i ? `${a.fbt._("Comment by",null,{hk:"1pyLSv"})} ` : null, g))
				}, "SubredditInfo", m.a);
			t.a = i.a.wrapped(e => {
				const {
					className: t,
					subredditName: n,
					authorName: a,
					isPostComment: r,
					redditorName: i,
					iconUrl: l,
					subredditTitle: d,
					isSharedToChat: u
				} = e, h = n ? `r/${n}` : "", O = i ? `u/${i}` : "";
				return c.a.createElement("div", {
					className: Object(p.a)(t, {
						[m.a.isSharedToChat]: u
					})
				}, c.a.createElement(o.a, {
					to: `/${h||O}`,
					target: s.d.BLANK,
					rel: s.c,
					className: m.a.Link
				}, l ? c.a.createElement(b, {
					src: l
				}) : c.a.createElement(g, null)), c.a.createElement(f, {
					subredditName: n,
					redditorName: i,
					authorName: a,
					isPostComment: r,
					iconUrl: l,
					subredditTitle: d,
					isSharedToChat: u
				}))
			}, "Header", m.a)
		},
		"./src/chat/components/Message/RichUnit/commonComponents/ImageContent.m.less": function(e, t, n) {
			e.exports = {
				ImagePostRichUnit: "-QzZzTYUzrkrLnieigcbz",
				imagePostRichUnit: "-QzZzTYUzrkrLnieigcbz",
				ImagePostRichUnitContent: "KcUdkzo0zGr6ym60NeG1S",
				imagePostRichUnitContent: "KcUdkzo0zGr6ym60NeG1S",
				ImageContainer: "zBwoZQaShFvXaVcJfFZff",
				imageContainer: "zBwoZQaShFvXaVcJfFZff",
				isSharedToChat: "_2DYdid23tkVpzRSI6vcZTL",
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/chat/controls/Svg/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var b = e => r.a.createElement(o.a, p({}, e, {
				viewBox: "0 0 9 10"
			}), r.a.createElement("path", {
				d: "M6.82396 4.11179C6.2307 4.70506 5.19696 4.70506 4.6037 4.11179C3.99195 3.49943 3.99195 2.50389 4.6037 1.89153C4.90064 1.5952 5.29491 1.43195 5.71383 1.43195C6.13336 1.43195 6.52764 1.5952 6.82396 1.89153C7.43571 2.50389 7.43571 3.49943 6.82396 4.11179ZM7.6952 1.02054C7.166 0.491346 6.46247 0.199951 5.71396 0.199951C4.96545 0.199951 4.26253 0.491346 3.73272 1.02054C2.79077 1.9631 2.66571 3.4133 3.34892 4.49571L1.67263 6.17261L0.900714 6.94453C0.900714 6.94453 0.900098 6.94515 0.899482 6.94576C0.898866 6.94576 0.89825 6.94638 0.89825 6.947L0.126947 7.7183C-0.11393 7.95918 -0.11393 8.34852 0.126947 8.5894L0.898866 9.36193H0.899482C0.899482 9.36255 0.899482 9.36255 0.899482 9.36255L1.15699 9.61945C1.27712 9.74019 1.43483 9.79995 1.59254 9.79995C1.75026 9.79995 1.90797 9.74019 2.0281 9.61945C2.26836 9.37918 2.26836 8.98922 2.0281 8.74834L1.76997 8.49083C1.58454 8.30478 1.58515 8.00291 1.76997 7.81748L1.7712 7.81687C1.95171 7.63698 2.26466 7.63575 2.44517 7.81687L2.70268 8.07438C2.94294 8.31464 3.3329 8.31464 3.57378 8.07438C3.81404 7.83412 3.81404 7.44354 3.57378 7.20327L2.97929 6.60816L4.22064 5.36681C4.6642 5.64835 5.17614 5.80421 5.71396 5.80421C6.46247 5.80421 7.166 5.5122 7.6952 4.98301C8.78808 3.89074 8.78808 2.1128 7.6952 1.02054Z"
			}));

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var f = e => r.a.createElement(o.a, g({}, e, {
					viewBox: "0 0 10 6"
				}), r.a.createElement("path", {
					d: "M9.62406 2.8827L7.96986 1.2285C6.33186 -0.4095 3.66786 -0.4095 2.02986 1.2285L0.375657 2.8827C0.141057 3.1173 0.141057 3.4965 0.375657 3.7311C0.610257 3.9657 0.989457 3.9657 1.22406 3.7311L2.87826 2.0769C2.91786 2.0373 2.96406 2.0097 3.00546 1.9731C2.74926 2.3547 2.59986 2.8131 2.59986 3.3069C2.59986 4.6323 3.67446 5.7069 4.99986 5.7069C6.32526 5.7069 7.39986 4.6323 7.39986 3.3069C7.39986 2.8131 7.24986 2.3547 6.99426 1.9731C7.03566 2.0097 7.08186 2.0373 7.12146 2.0769L8.77566 3.7311C8.89266 3.8481 9.04626 3.9069 9.19986 3.9069C9.35346 3.9069 9.50706 3.8481 9.62406 3.7311C9.85866 3.4965 9.85866 3.1173 9.62406 2.8827Z"
				})),
				O = n("./src/chat/components/Message/RichUnit/commonComponents/ImageContent.m.less"),
				E = n.n(O);
			const C = () => r.a.createElement("div", {
					className: E.a.NSFWIndicator
				}, r.a.createElement(m, {
					className: E.a.NSFWIcon
				}), a.fbt._("nsfw", null, {
					hk: "6M6nL"
				})),
				j = () => r.a.createElement("div", {
					className: E.a.PrivateIndicator
				}, r.a.createElement(b, null), " ", a.fbt._("private", null, {
					hk: "3xzh8w"
				})),
				v = () => r.a.createElement("div", {
					className: E.a.RestrictedIndicator
				}, r.a.createElement(f, {
					className: E.a.RestrictedIcon
				}), a.fbt._("restricted", null, {
					hk: "2lC88Z"
				})),
				_ = () => r.a.createElement("div", {
					className: E.a.EmployeesOnlyIndicator
				}, r.a.createElement(l, {
					className: E.a.EmployeesOnlyIcon
				}), a.fbt._("employees only", null, {
					hk: "3uDhE6"
				})),
				I = ({
					subredditType: e,
					isNsfw: t
				}) => {
					return r.a.createElement("div", {
						className: E.a.SubredditTypeIndicator
					}, t ? r.a.createElement(C, null) : null, (e => {
						switch (e) {
							case "RESTRICTED":
								return r.a.createElement(v, null);
							case "EMPLOYEES_ONLY":
								return r.a.createElement(_, null);
							case "PRIVATE":
								return r.a.createElement(j, null);
							default:
								return null
						}
					})(e))
				},
				x = ({
					url: e,
					isSharedToChat: t
				}) => r.a.createElement("div", {
					className: Object(c.a)(E.a.ImageContainer, {
						[E.a.isSharedToChat]: t
					})
				}, r.a.createElement("img", {
					className: E.a.Image,
					src: e
				}));
			t.a = ({
				url: e,
				title: t,
				isGallery: n,
				isNsfw: a,
				subredditType: s,
				isSubreddit: o,
				isSharedToChat: i,
				className: l
			}) => r.a.createElement("div", {
				className: Object(c.a)(l, E.a.ImagePostRichUnit)
			}, r.a.createElement("div", {
				className: E.a.ImagePostRichUnitContent
			}, e && !i ? r.a.createElement(x, {
				url: e
			}) : null, o ? r.a.createElement(I, {
				isNsfw: a,
				subredditType: s
			}) : null, t ? r.a.createElement("div", {
				className: Object(c.a)(E.a.Title, {
					[E.a.isSharedToChat]: i
				})
			}, t) : null, n ? r.a.createElement(u, {
				className: E.a.GalleryIcon
			}) : null), e && i ? r.a.createElement(x, {
				url: e,
				isSharedToChat: i
			}) : null)
		},
		"./src/chat/components/Message/SystemMessage.m.less": function(e, t, n) {
			e.exports = {
				SystemMessage: "_2nARRm49mfeGOwZguO6Qp0",
				systemMessage: "_2nARRm49mfeGOwZguO6Qp0",
				LinkedText: "_20HH1FKf7FsnFm5YEZVUCb",
				linkedText: "_20HH1FKf7FsnFm5YEZVUCb"
			}
		},
		"./src/chat/components/Message/UserName/index.m.less": function(e, t, n) {
			e.exports = {
				UserName: "_3u1axj5t1vNnI-LhnJlcTP",
				userName: "_3u1axj5t1vNnI-LhnJlcTP",
				currentUser: "_3K-jESbfWlTLoB4gXr6WSa"
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
		"./src/chat/components/MessageInput/IconButton/index.m.less": function(e, t, n) {
			e.exports = {
				IconButton: "_1AKAcai0Hg1R83yxIAnmmj",
				iconButton: "_1AKAcai0Hg1R83yxIAnmmj",
				active: "_2kog5zS5TbdY5KF8UmcUYV"
			}
		},
		"./src/chat/components/MessageInput/ImageUploader/index.m.less": function(e, t, n) {
			e.exports = {
				ImageUploader: "_2Vtr9_b8lHSvxwPYkx-3RZ",
				imageUploader: "_2Vtr9_b8lHSvxwPYkx-3RZ",
				Tooltip: "_2LMhJZff8945_s0_DQo77S",
				tooltip: "_2LMhJZff8945_s0_DQo77S"
			}
		},
		"./src/chat/components/MessageInput/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			const a = "MessageInputTooltip--Snoomoji",
				s = "MessageInputTooltip--Gif",
				r = "MessageInputTooltip--Userlist",
				c = "MessageInputTooltip--SlashCommandList",
				o = 5e3,
				i = 53
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
		"./src/chat/components/MessageList/Messages/index.m.less": function(e, t, n) {
			e.exports = {
				MessageItemBubble: "_31Lyli6fu9BEXmz8zz-Lmx",
				messageItemBubble: "_31Lyli6fu9BEXmz8zz-Lmx",
				lastInChain: "_15o91oYXcFSvxebkT4kAQh",
				SystemBubble: "_2-XqdDUjcX_h7JgMCiqLu4",
				systemBubble: "_2-XqdDUjcX_h7JgMCiqLu4"
			}
		},
		"./src/chat/components/MessageList/Messages/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/chat/helpers/time/index.tsx"),
				l = n("./src/chat/components/DateSplitter/index.m.less"),
				d = n.n(l);
			var u = e => s.a.createElement("div", {
					className: d.a.TimeWrapper
				}, s.a.createElement("time", {
					className: d.a.Time
				}, Object(i.a)(e.date))),
				h = n("./src/chat/components/Message/Bubble.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/chat/components/Message/LinkedText.tsx"),
				b = n("./src/chat/components/Message/SystemMessage.m.less"),
				g = n.n(b);
			const f = m.a.wrapped(p.a, "LinkedText", g.a);
			var O = m.a.wrapped(e => {
					const {
						message: t,
						className: n
					} = e, {
						messageData: {
							value: a,
							highlights: r
						}
					} = t;
					return s.a.createElement("div", {
						className: n
					}, s.a.createElement(f, {
						value: a,
						highlighMentionGroupLinks: r
					}))
				}, "SystemMessage", g.a),
				E = n("./src/chat/models/Channel/index.ts"),
				C = n("./src/chat/components/Message/UserName/index.m.less"),
				j = n.n(C);
			var v = ({
					className: e,
					message: t,
					channelType: n,
					sameAsPrevUser: a,
					inTimeRange: r,
					currentUserId: o
				}) => {
					const {
						sender: i
					} = t, l = n === E.a.Group, d = o === (null == i ? void 0 : i.userId);
					return (!a || !r) && (null == i ? void 0 : i.nickname) && (null == i ? void 0 : i.userId) && l ? s.a.createElement("span", {
						className: Object(c.a)(j.a.UserName, {
							[j.a.currentUser]: Boolean(d && o)
						}, e)
					}, null == i ? void 0 : i.nickname) : null
				},
				_ = n("./src/chat/constants/messages.ts"),
				I = n("./src/chat/selectors/app.ts"),
				x = n("./src/chat/selectors/channels.ts"),
				y = n("./src/chat/selectors/theme.ts"),
				S = n("./src/chat/selectors/uploads.ts"),
				w = n("./src/chat/components/MessageList/Messages/index.m.less"),
				N = n.n(w);
			const T = (e, t) => {
					let n = NaN;
					return e > 0 && (n = t[e - 1].createdAt), n
				},
				M = ({
					message: e,
					showUserPic: t,
					isLastCurrentUserMessage: n,
					currentUserId: a,
					inPreview: o,
					isLastInChain: i
				}) => {
					const {
						sender: l
					} = e, d = a === (l && l.userId), u = Object(r.e)(I.c), m = Object(r.e)(x.a);
					return s.a.createElement(h.a, {
						className: Object(c.a)(N.a.MessageItemBubble, {
							[N.a.lastInChain]: i
						}),
						message: e,
						fromCurrentUser: d,
						withButton: !0,
						isChatEmbedded: u,
						showUserPic: t,
						isLastCurrentUserMessage: n,
						isCurrentUserChannelMod: m,
						inPreview: o
					})
				};
			t.a = ({
				currentUserId: e,
				channelType: t,
				messageList: n,
				inPreview: a
			}) => {
				const c = Object(r.e)(y.c),
					i = Object(r.e)(S.b);
				return n.length ? s.a.createElement(s.a.Fragment, null, n.map((n, r, l) => {
					const {
						createdAt: d,
						sender: h
					} = n, m = h && h.userId, p = T(r, l), b = ((e, t) => {
						const n = t[e + 1];
						return null == n ? void 0 : n.createdAt
					})(r, l), g = ((e, t) => {
						if (e > 0) {
							const {
								sender: n
							} = t[e - 1];
							return n && n.userId
						}
					})(r, l), f = ((e, t, n) => {
						if (0 === t) return !0;
						const a = new Date(e.createdAt),
							s = T(t, n);
						if (s) {
							const e = new Date(s);
							return a.getFullYear() !== e.getFullYear() || a.getMonth() !== e.getMonth() || a.getDate() !== e.getDate()
						}
						return !1
					})(n, r, l), E = ((e, t) => {
						var n;
						const a = t[e + 1];
						return null === (n = null == a ? void 0 : a.sender) || void 0 === n ? void 0 : n.userId
					})(r, l), C = g === m, j = E === m, I = d - p < 5 * o.jb, x = b && b - d < 5 * o.jb, y = !j || j && !x, S = n.messageType === _.d.SYSTEM && ((e, t) => {
						const {
							mentionType: n,
							mentionedUsers: a,
							messageType: s
						} = e;
						if (s !== _.d.SYSTEM) return !1;
						if (n === _.b.CHANNEL) return !0;
						if (n === _.b.USERS && Array.isArray(a)) {
							const e = 0 === a.length,
								n = a.some(e => t === e.userId);
							return e || n
						}
						return !1
					})(n, e), w = n.messageType === _.d.USER && ((e, t = []) => {
						if (e.messageData.type === _.c.IMAGE) {
							const {
								isHidden: n,
								clientMessageId: a
							} = e.messageData, s = a && t.includes(a);
							return n && !s
						}
						return !1
					})(n, i), k = Boolean(((t, n) => {
						const {
							sender: a
						} = n[t];
						return !(e !== (null == a ? void 0 : a.userId) || !c) && (t === n.length - 1 || !n.slice(t + 1).some(e => {
							var t;
							return (null === (t = e.sender) || void 0 === t ? void 0 : t.userId) === (null == a ? void 0 : a.userId)
						}))
					})(r, l)), A = f && s.a.createElement(u, {
						date: d
					}), P = n.messageData.clientMessageId || n.createdAt;
					switch (n.messageType) {
						case _.d.PENDING:
						case _.d.USER:
							return !w && s.a.createElement(s.a.Fragment, {
								key: P
							}, A, s.a.createElement(s.a.Fragment, null, s.a.createElement(v, {
								message: n,
								sameAsPrevUser: C,
								inTimeRange: I,
								channelType: t,
								currentUserId: e
							}), s.a.createElement(M, {
								message: n,
								isLastCurrentUserMessage: k,
								showUserPic: y,
								currentUserId: e,
								inPreview: a,
								isLastInChain: !!E && !j
							})));
						case _.d.SYSTEM:
							return S && s.a.createElement(s.a.Fragment, {
								key: n.createdAt
							}, A, s.a.createElement(O, {
								className: N.a.SystemBubble,
								message: n
							}));
						default:
							return null
					}
				})) : null
			}
		},
		"./src/chat/components/MessageList/index.m.less": function(e, t, n) {
			e.exports = {
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
		"./src/chat/components/MessageTooltip/Picker/SlashCommandList/index.m.less": function(e, t, n) {
			e.exports = {
				Command: "jLj0uyijzze_zQ3xy9Hy7",
				command: "jLj0uyijzze_zQ3xy9Hy7",
				CommandItem: "_3Ef-gMSTzjtIF1r0j3vYLL",
				commandItem: "_3Ef-gMSTzjtIF1r0j3vYLL",
				CommandItemMetadata: "_35Ixoo-mKvl82LckIFjaxg",
				commandItemMetadata: "_35Ixoo-mKvl82LckIFjaxg",
				CommandItemMetadataDescription: "_1yh1yV4X_UmfTIue3b-vzS",
				commandItemMetadataDescription: "_1yh1yV4X_UmfTIue3b-vzS",
				CommandItemMetadataExample: "_3Yav3kEvPLcb5qz5ZCD4KA",
				commandItemMetadataExample: "_3Yav3kEvPLcb5qz5ZCD4KA",
				CommandItemIcon: "_3wevgQWkBFTsMfwgFuztgv",
				commandItemIcon: "_3wevgQWkBFTsMfwgFuztgv",
				selected: "vUu62siyFpCmQHToFCRn1",
				Scroller: "_3jlkSIf2tcwDYO1oGRuubc",
				scroller: "_3jlkSIf2tcwDYO1oGRuubc",
				embedded: "_2CBbykXw2r-v8b3bQQAg_y",
				ErrorMessage: "GTaE_pBoGwztKSbStE3Dy",
				errorMessage: "GTaE_pBoGwztKSbStE3Dy",
				ErrorMessageIcon: "kTj1NkTRd7gBKBVloUKk4",
				errorMessageIcon: "kTj1NkTRd7gBKBVloUKk4",
				ErrorMessageContent: "_2zxHkMB7kdPNIyV0lYycVu",
				errorMessageContent: "_2zxHkMB7kdPNIyV0lYycVu",
				ErrorMessageContentHeader: "_19reKbLWVcbidQqvpjujB3",
				errorMessageContentHeader: "_19reKbLWVcbidQqvpjujB3",
				ErrorMessageContentBody: "_1UsAHEXl-2ThJ9KilPotWs",
				errorMessageContentBody: "_1UsAHEXl-2ThJ9KilPotWs"
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
				noArrow: "_2ozCQknNumMYbS7E1wbDNr",
				DropdownWrapper: "_3sO7SmiWrXASRtvv7d_dJk",
				dropdownWrapper: "_3sO7SmiWrXASRtvv7d_dJk",
				Picker: "_1AjUa6WOfWNHT6Hgt6TPmK",
				picker: "_1AjUa6WOfWNHT6Hgt6TPmK",
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
				p = n("./src/chat/selectors/unreadCounter.ts"),
				b = n("./src/chat/components/MinimizedPortalContainer/index.m.less"),
				g = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), {
				minimized: O
			} = u.b, E = o.a.wrapped(l.a, "HiddenCloseButton", g.a);
			E.displayName = "CloseButton";
			const C = o.a.wrapped(e => s.a.createElement("div", {
					onClick: e.onClick,
					className: e.className,
					style: {
						width: `${O.width}px`,
						height: `${O.height}px`
					}
				}, e.children), "Container", g.a),
				j = o.a.span("TitleWithCounter", g.a),
				v = Object(m.a)({
					unreadCount: p.b,
					hasNewMessages: p.a
				}),
				_ = Object(r.b)(v, e => ({
					close: () => e(Object(i.sizeChanged)(u.a.HIDDEN)),
					open: () => e(Object(i.sizeChanged)(u.a.EMBED))
				}));
			t.a = _(e => s.a.createElement(d.a, null, s.a.createElement(C, {
				key: e.unreadCount,
				className: Object(c.a)(e.className, {
					[g.a.unread]: e.unreadCount > 0
				}),
				onClick: e.open
			}, s.a.createElement(j, null, f._("Chat", null, {
				hk: "3ZWpRR"
			}), s.a.createElement(h.b, {
				count: e.unreadCount,
				isEmptyCounter: e.hasNewMessages && !e.unreadCount
			})), s.a.createElement(E, null))))
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
				b = n("./src/lib/hooks/useOnClickOutside.ts"),
				g = n("./src/lib/hooks/useTooltip.ts"),
				f = n("./src/chat/actions/channel.ts"),
				O = n("./src/chat/actions/channel/dropdown.ts"),
				E = n("./src/chat/actions/tooltip.ts"),
				C = n("./src/chat/actions/user/dropdown.ts"),
				j = n("./src/lib/lessComponent.tsx"),
				v = n("./src/chat/actions/theme.ts"),
				_ = n("./src/chat/helpers/chatSelector.ts"),
				I = n("./src/chat/controls/Svg/index.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var y = e => s.a.createElement(I.a, x({}, e, {
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
				S = n("./src/chat/components/ThemeSwitcher/index.m.less"),
				w = n.n(S);
			const N = Object(_.a)({
					theme: e => e.user.prefs.globalTheme
				}),
				T = Object(r.b)(N, (e, t) => ({
					changeModeClicked: () => e(Object(v.themeToggle)())
				})),
				M = j.a.div("Wrapper", w.a);
			T(({
				changeModeClicked: e,
				theme: t
			}) => s.a.createElement(M, {
				onClick: e
			}, s.a.createElement(y, {
				active: !0
			})));
			var k = n("./src/chat/constants/channels.ts"),
				A = n("./src/chat/constants/dropdown.ts"),
				P = n("./src/chat/controls/Dropdown/Row.tsx"),
				L = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				D = n("./src/chat/controls/TooltipHooked/TooltipHooked.tsx");

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var R = e => s.a.createElement(I.a, U({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, s.a.createElement("path", {
				d: "M12.5,10.875h-5A6.633,6.633,0,0,0,.875,17.5V18A1.127,1.127,0,0,0,2,19.125H18A1.127,1.127,0,0,0,19.125,18v-.5A6.633,6.633,0,0,0,12.5,10.875Zm5.375,7H2.125V17.5A5.381,5.381,0,0,1,7.5,12.125h5A5.381,5.381,0,0,1,17.875,17.5Z"
			}), s.a.createElement("path", {
				d: "M10,9.625A4.625,4.625,0,1,0,5.375,5,4.631,4.631,0,0,0,10,9.625ZM13.375,5a3.354,3.354,0,0,1-.59,1.9L8.1,2.215A3.371,3.371,0,0,1,13.375,5ZM7.215,3.1,11.9,7.785A3.371,3.371,0,0,1,7.215,3.1Z"
			})));
			var B = ({
					id: e,
					rotate: t,
					gradient: n
				}) => s.a.createElement("defs", null, s.a.createElement("linearGradient", {
					id: e,
					gradientTransform: `rotate(${t})`
				}, n.stops.map((e, t) => s.a.createElement("stop", {
					key: `${t}-${e.offset}-${e.color}`,
					offset: `${e.offset}`,
					stopColor: `${e.color}`
				})))),
				F = n("./src/chat/models/Theme/index.ts");

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var G = e => {
					return s.a.createElement(I.a, H({}, e, {
						viewBox: "0 0 20 20"
					}), (() => {
						let e;
						const t = F.f[F.c.VANITY];
						return t && (e = s.a.createElement(B, {
							rotate: F.d,
							gradient: t,
							id: "edit-linear-gradient"
						})), s.a.createElement(s.a.Fragment, null, e, s.a.createElement("path", {
							d: "M17.235,4.351,15.649,2.765a1.626,1.626,0,0,0-2.3,0L.765,15.351a1.628,1.628,0,0,0,0,2.3l1.586,1.586a1.627,1.627,0,0,0,2.3,0L17.235,6.649A1.628,1.628,0,0,0,17.235,4.351Zm-13.47,14a.374.374,0,0,1-.53,0L1.649,16.765a.375.375,0,0,1,0-.53l8.6-8.6L12.366,9.75ZM16.351,5.765l-3.1,3.1L11.134,6.75l3.1-3.1a.377.377,0,0,1,.53,0l1.586,1.586A.375.375,0,0,1,16.351,5.765Z"
						}), s.a.createElement("path", {
							d: "M6.875,4.5V5h1.25V4.5A1.377,1.377,0,0,1,9.5,3.125H10V1.875H9.5A1.377,1.377,0,0,1,8.125.5V0H6.875V.5A1.377,1.377,0,0,1,5.5,1.875H5v1.25h.5A1.377,1.377,0,0,1,6.875,4.5ZM7.5,2.2a2.534,2.534,0,0,0,.3.3,2.534,2.534,0,0,0-.3.3,2.534,2.534,0,0,0-.3-.3A2.534,2.534,0,0,0,7.5,2.2Z"
						}), s.a.createElement("path", {
							d: "M19.7.875A.576.576,0,0,1,19.125.3V0h-1.25V.3A.576.576,0,0,1,17.3.875H17v1.25h.3a.576.576,0,0,1,.575.575V3h1.25V2.7a.576.576,0,0,1,.575-.575H20V.875Z"
						}), s.a.createElement("path", {
							d: "M18.125,10.3V10h-1.25v.3a.576.576,0,0,1-.575.575H16v1.25h.3a.576.576,0,0,1,.575.575V13h1.25v-.3a.576.576,0,0,1,.575-.575H19v-1.25h-.3A.576.576,0,0,1,18.125,10.3Z"
						}))
					})())
				},
				V = n("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				z = n("./src/chat/icons/svgs/Edit/index.tsx"),
				W = n("./src/chat/icons/svgs/EnableNotifications/index.tsx"),
				K = n("./src/chat/icons/svgs/InviteMember/index.tsx"),
				Z = n("./src/chat/icons/svgs/Leave/index.tsx");

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Q = e => s.a.createElement(I.a, q({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM5.764,17.212a3.37,3.37,0,0,1,3.269-2.587h1.934a3.37,3.37,0,0,1,3.269,2.587,8.3,8.3,0,0,1-8.472,0Zm9.556-.749a4.627,4.627,0,0,0-4.353-3.088H9.033A4.627,4.627,0,0,0,4.68,16.463a8.375,8.375,0,1,1,10.64,0Z"
			}), s.a.createElement("path", {
				d: "M10,5.375A3.125,3.125,0,1,0,13.125,8.5,3.129,3.129,0,0,0,10,5.375Zm0,5A1.875,1.875,0,1,1,11.875,8.5,1.877,1.877,0,0,1,10,10.375Z"
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
			var X = e => {
					return s.a.createElement(I.a, J({}, e, {
						viewBox: "0 0 20 20"
					}), (() => {
						let e;
						const t = F.f[F.c.VANITY];
						return t && (e = s.a.createElement(B, {
							rotate: F.d,
							gradient: t,
							id: "settings-linear-gradient"
						})), s.a.createElement(s.a.Fragment, null, e, s.a.createElement("path", {
							d: "M10,6.875A3.125,3.125,0,1,0,13.125,10,3.129,3.129,0,0,0,10,6.875Zm0,5A1.875,1.875,0,1,1,11.875,10,1.877,1.877,0,0,1,10,11.875Z"
						}), s.a.createElement("path", {
							d: "M19.549,8.849a1.124,1.124,0,0,0-1.116-.974H17.4a.915.915,0,0,1-.828-.608.906.906,0,0,1,.163-1l.722-.723a1.127,1.127,0,0,0,.1-1.495,9.631,9.631,0,0,0-1.608-1.608,1.129,1.129,0,0,0-1.494.1l-.724.724a.92.92,0,0,1-1.018.155.906.906,0,0,1-.588-.82V1.567A1.123,1.123,0,0,0,11.151.451a8.782,8.782,0,0,0-2.3,0,1.123,1.123,0,0,0-.974,1.116V2.6a.915.915,0,0,1-.608.828.907.907,0,0,1-1-.163l-.723-.722a1.126,1.126,0,0,0-1.495-.1A9.631,9.631,0,0,0,2.443,4.051a1.127,1.127,0,0,0,.1,1.494l.724.724a.917.917,0,0,1,.155,1.018.906.906,0,0,1-.82.588H1.567a1.123,1.123,0,0,0-1.116.974,8.754,8.754,0,0,0,0,2.3,1.123,1.123,0,0,0,1.116.974H2.6a.915.915,0,0,1,.828.608.906.906,0,0,1-.163,1l-.722.723a1.127,1.127,0,0,0-.1,1.495,9.707,9.707,0,0,0,1.608,1.608,1.13,1.13,0,0,0,1.494-.1l.724-.724a.916.916,0,0,1,1.018-.155.906.906,0,0,1,.588.82v1.031a1.123,1.123,0,0,0,.974,1.116,8.754,8.754,0,0,0,2.3,0,1.123,1.123,0,0,0,.974-1.116V17.4a.915.915,0,0,1,.608-.828.906.906,0,0,1,1,.163l.724.724a1.132,1.132,0,0,0,1.494.1,9.707,9.707,0,0,0,1.608-1.608,1.127,1.127,0,0,0-.1-1.494l-.724-.724a.917.917,0,0,1-.155-1.018.906.906,0,0,1,.82-.588h1.031a1.123,1.123,0,0,0,1.116-.974,8.754,8.754,0,0,0,0-2.3Zm-1.226,2.026H17.4a2.224,2.224,0,0,0-1.549,3.741l.65.65A8.459,8.459,0,0,1,15.266,16.5l-.65-.65A2.224,2.224,0,0,0,10.875,17.4v.921a7.216,7.216,0,0,1-1.75,0V17.4A2.159,2.159,0,0,0,7.747,15.42a2.154,2.154,0,0,0-2.363.433l-.65.65A8.459,8.459,0,0,1,3.5,15.266l.65-.65A2.224,2.224,0,0,0,2.6,10.875H1.677a7.388,7.388,0,0,1,0-1.75H2.6A2.159,2.159,0,0,0,4.58,7.747a2.152,2.152,0,0,0-.433-2.363l-.65-.65A8.362,8.362,0,0,1,4.734,3.5l.65.65a2.162,2.162,0,0,0,2.382.425A2.15,2.15,0,0,0,9.125,2.6V1.677a7.216,7.216,0,0,1,1.75,0V2.6A2.159,2.159,0,0,0,12.253,4.58a2.158,2.158,0,0,0,2.363-.433l.65-.65A8.362,8.362,0,0,1,16.5,4.734l-.65.65a2.16,2.16,0,0,0-.425,2.382A2.15,2.15,0,0,0,17.4,9.125h.921a7.388,7.388,0,0,1,0,1.75Z"
						}))
					})())
				},
				Y = n("./src/chat/models/Channel/index.ts"),
				$ = n("./src/chat/selectors/app.ts"),
				ee = n("./src/chat/selectors/channels.ts"),
				te = n("./src/chat/selectors/experiments.ts"),
				ne = n("./src/chat/selectors/theme.ts"),
				ae = n("./src/chat/selectors/user.ts"),
				se = n("./src/chat/components/ChannelHeaderDropdown/index.m.less"),
				re = n.n(se);
			const ce = e => {
					switch (e) {
						case A.b.AddToGroup:
							return {
								text: h.fbt._("Invite members", null, {
									hk: "ChZv0"
								}), icon: s.a.createElement(K.a, null)
							};
						case A.b.Block:
							return {
								text: h.fbt._("Block", null, {
									hk: "1s7OxS"
								}), icon: s.a.createElement(R, null)
							};
						case A.b.ChangeTheme:
							return {
								text: h.fbt._("Change theme", null, {
									hk: "1J6Ajx"
								}), icon: s.a.createElement(G, null), className: "changeTheme"
							};
						case A.b.Leave:
							return {
								text: h.fbt._("Leave chat", null, {
									hk: "41t86n"
								}), icon: s.a.createElement(Z.a, null)
							};
						case A.b.LeaveGroup:
							return {
								text: h.fbt._("Leave group", null, {
									hk: "zStpq"
								}), icon: s.a.createElement(Z.a, null)
							};
						case A.b.MuteBadging:
							return {
								text: h.fbt._("Disable notification badging", null, {
									hk: "4BzTkp"
								}), icon: s.a.createElement(V.a, null)
							};
						case A.b.MuteNotifs:
							return {
								text: h.fbt._("Mute notifications", null, {
									hk: "O4LsY"
								}), icon: s.a.createElement(V.a, null)
							};
						case A.b.Profile:
							return {
								text: h.fbt._("View profile", null, {
									hk: "3i84FE"
								}), icon: s.a.createElement(Q, null)
							};
						case A.b.RenameGroup:
							return {
								text: h.fbt._("Rename group", null, {
									hk: "hTeQ"
								}), icon: s.a.createElement(z.a, null)
							};
						case A.b.UnmuteBadging:
							return {
								text: h.fbt._("Enable notification badging", null, {
									hk: "87Nfa"
								}), icon: s.a.createElement(W.a, null)
							};
						case A.b.UnmuteNotifs:
							return {
								text: h.fbt._("Unmute notifications", null, {
									hk: "2TcEwL"
								}), icon: s.a.createElement(W.a, null)
							};
						case A.b.ViewMembers:
							return {
								text: h.fbt._("View members", null, {
									hk: "PC84"
								}), icon: s.a.createElement(Q, null)
							};
						default:
							return {
								text: "Unknown item", icon: s.a.createElement("span", null)
							}
					}
				},
				oe = Object(_.a)({
					currentUserId: ae.a,
					channel: ee.h,
					isModerator: ee.a,
					isChannelBadgingMuted: ee.I,
					isChannelNotifsMuted: ee.K,
					isFullSize: $.g,
					isThemesEnabled: te.m,
					showSparkles: ne.d,
					isQuickActionsEnabled: te.i
				});
			var ie = Object(r.b)(oe, (e, t) => ({
					onInviteToChannel: () => {
						e(Object(O.b)()), e(Object(d.c)())
					},
					onLeaveChannel: () => {
						e(Object(f.G)(t.channelId))
					},
					onViewMembers: () => {
						e(Object(O.i)())
					},
					onBlockUser: t => e(Object(C.a)(t)),
					onChangeTheme: () => {
						e(Object(v.clickThemeSettings)()), e(Object(d.f)())
					},
					onViewProfile: t => {
						e(Object(O.j)(t)), e(Object(d.y)())
					},
					onOpenDropdown: t => e(Object(O.g)(t)),
					onMuteBadging: () => {
						e(Object(O.c)(t)), e(Object(d.F)())
					},
					onUnmuteBadging: () => {
						e(Object(O.e)(t)), e(Object(d.G)())
					},
					onMuteNotifs: () => {
						e(Object(O.d)(t.channelId))
					},
					onUnmuteNotifs: () => {
						e(Object(O.f)(t.channelId))
					},
					closeTooltip: () => e(Object(E.d)()),
					showSidebar: () => e(Object(l.f)(!0))
				}))(e => {
					const {
						channel: t,
						currentUserId: n,
						isChannelBadgingMuted: a,
						isChannelNotifsMuted: r,
						isThemesEnabled: o,
						isQuickActionsEnabled: i
					} = e, l = Object(g.b)(Object(L.d)());
					Object(b.a)("OverlayNavTooltip--Default", l.hide);
					const d = a => {
							const {
								onInviteToChannel: s,
								onBlockUser: r,
								onChangeTheme: c,
								onLeaveChannel: o,
								toggleChannelNameInput: i,
								onViewMembers: d,
								onMuteBadging: h,
								onUnmuteBadging: m,
								onMuteNotifs: b,
								onUnmuteNotifs: g,
								showSidebar: f
							} = e;
							switch (l.hide(), a) {
								case A.b.AddToGroup:
									return s();
								case A.b.Block: {
									const e = (() => t && t.members.find(e => e.id !== n))();
									return e && r(e.id)
								}
								case A.b.ChangeTheme:
									return f(), c();
								case A.b.Leave:
								case A.b.LeaveGroup:
									return o();
								case A.b.Profile:
									return u();
								case A.b.RenameGroup:
									return i();
								case A.b.ViewMembers:
									return d();
								case A.b.MuteBadging:
									return h();
								case A.b.UnmuteBadging:
									return m();
								case A.b.MuteNotifs:
									return b();
								case A.b.UnmuteNotifs:
									return g();
								default:
									return p.a
							}
						},
						u = () => {
							const {
								channel: t,
								currentUserId: n,
								onViewProfile: a,
								inviterName: s
							} = e;
							if (t && t.channelState === k.b.JOINED) {
								const e = t.members.find(e => e.id !== n);
								if (e && e.name) return a(e.name)
							}
							return s && a(s)
						},
						{
							closeTooltip: m,
							isFullSize: f,
							showSparkles: O
						} = e,
						E = (() => {
							if (t) switch (t.type) {
								case Y.a.Direct:
									return A.c.directChannel.filter(e => A.d.muteBadging(e, a, i)).filter(e => A.d.unmuteBadging(e, a, i)).filter(e => A.d.muteNotifs(e, r)).filter(e => A.d.unmuteNotifs(e, r)).filter(e => A.d.changeTheme(e, o));
								case Y.a.Group:
									return A.c.groupChannel.filter(e => A.d.muteBadging(e, a, i)).filter(e => A.d.unmuteBadging(e, a, i)).filter(e => A.d.muteNotifs(e, r)).filter(e => A.d.unmuteNotifs(e, r)).filter(e => A.d.changeTheme(e, o))
							}
						})();
					return s.a.createElement(s.a.Fragment, null, !1, s.a.createElement("button", {
						onClick: e => (e => {
							e.stopPropagation(), null == l || l.toggle()
						})(e),
						ref: l.target.ref,
						className: Object(c.a)(re.a.DropdownTrigger, {
							[re.a.isFullSize]: f
						}),
						title: h.fbt._("Settings", null, {
							hk: "4lO98u"
						})
					}, s.a.createElement(X, {
						className: Object(c.a)(re.a.Settings, {
							[re.a.gradient]: O && o
						})
					})), s.a.createElement(D.default, {
						arrowProps: l.arrowProps,
						popperProps: l.popperProps,
						visible: l.visible,
						hide: l.hide,
						isInstant: !0,
						noArrow: !0,
						styled: !0
					}, s.a.createElement("div", {
						className: re.a.OptionsContainer,
						id: "OverlayNavTooltip--Default"
					}, E && E.map((e, t) => s.a.createElement(P.a, {
						className: Object(c.a)(re.a.DropdownRow, {
							[re.a.gradient]: O && o && e === A.b.ChangeTheme
						}),
						key: t,
						displayText: ce(e).text,
						onClick: () => {
							d(e), m()
						}
					}, ce(e).icon)))))
				}),
				le = n("./src/chat/components/CloseIcon/index.tsx"),
				de = n("./src/chat/constants/container.ts"),
				ue = n("./src/chat/controls/Button/index.tsx");

			function he() {
				return (he = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const me = e => s.a.createElement(I.a, he({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M10,15.625a.623.623,0,0,1-.442-.183l-9-9,.884-.884L10,14.116l8.558-8.558.884.884-9,9A.623.623,0,0,1,10,15.625Z"
			}));

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			me.displayName = "NavMinimize";
			const be = e => s.a.createElement(I.a, pe({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M15.838,16.5a1.377,1.377,0,0,1-1.375,1.375h-11A1.377,1.377,0,0,1,2.088,16.5V5.5A1.377,1.377,0,0,1,3.463,4.125H7.11V2.875H3.463A2.629,2.629,0,0,0,.838,5.5v11a2.629,2.629,0,0,0,2.625,2.625h11A2.629,2.629,0,0,0,17.088,16.5V12.9h-1.25Z"
			}), s.a.createElement("path", {
				d: "M18.5.875h-5v1.25h3.491L8.558,10.558l.884.884,8.433-8.433V6.5h1.25v-5A.625.625,0,0,0,18.5.875Z"
			}));
			be.displayName = "NavPopout";
			var ge = n("./src/chat/components/OverlayNavButtonGroup/index.m.less"),
				fe = n.n(ge);
			var Oe = Object(r.b)(() => Object(_.a)({
					containerSize: e => e.container.size,
					inviterName: ee.H,
					isReady: $.i
				}), e => ({
					close: () => e(Object(i.sizeChanged)(de.a.HIDDEN)),
					minimize: () => {
						e(Object(i.sizeChanged)(de.a.MINIMIZED)), e(Object(d.u)())
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
					const d = c && t === de.a.EMBED;
					return s.a.createElement("div", {
						className: fe.a.Wrapper
					}, a && e && s.a.createElement(ie, {
						channelId: e,
						dropdownId: n,
						inviterName: r,
						toggleChannelNameInput: l
					}), d && s.a.createElement(s.a.Fragment, null, s.a.createElement(ue.c, {
						className: fe.a.IconButton,
						onClick: i,
						title: h.fbt._("Open chat in new window", null, {
							hk: "3S8f7W"
						})
					}, s.a.createElement(be, null)), s.a.createElement(ue.c, {
						className: fe.a.IconButton,
						onClick: o,
						title: h.fbt._("Minimize chat", null, {
							hk: "1gym9X"
						})
					}, s.a.createElement(me, null)), s.a.createElement(le.a, {
						className: fe.a.CloseButton
					})))
				}),
				Ee = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				Ce = n("./src/chat/controls/Counter/index.tsx"),
				je = n("./src/chat/components/RenameGroupInput/index.m.less"),
				ve = n.n(je);
			const _e = j.a.wrapped(e => s.a.createElement("span", {
					className: Object(c.a)({
						[ve.a.visible]: e.isVisible
					}, e.className)
				}, e.children), "InputWrapper", ve.a),
				Ie = j.a.div("InputContent", ve.a),
				xe = j.a.span("InputControls", ve.a),
				ye = j.a.wrapped(ue.a, "CancelButton", ve.a),
				Se = j.a.wrapped(ue.a, "SaveButton", ve.a);
			class we extends a.Component {
				constructor() {
					super(...arguments), this.displayName = "RenameGroupInput", this.state = {
						groupName: this.props.name || ""
					}, this.getAvailableCharacters = () => k.e - this.state.groupName.length, this.handleChannelNameInput = e => this.setState({
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
						handleChannelNameInput: a,
						submitGroupName: r
					} = this, c = this.getAvailableCharacters();
					return s.a.createElement(_e, {
						isVisible: t
					}, s.a.createElement(Ie, null, s.a.createElement(Ee.a, {
						handleChannelNameInput: a,
						placeholder: h.fbt._("Rename group", null, {
							hk: "1mjXbx"
						}),
						withBackground: !0,
						value: n
					}, s.a.createElement(Ce.a, {
						count: c
					})), s.a.createElement(xe, null, s.a.createElement(ye, {
						secondaryNoBorder: !0,
						onClick: e
					}, h.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(Se, {
						noBorder: !0,
						disabled: c < 0 || c >= k.e,
						onClick: r
					}, h.fbt._("Save", null, {
						hk: "4yMsMq"
					})))))
				}
			}
			var Ne = Object(r.b)(void 0, e => ({
					onUpdateChannelName: t => e(Object(O.h)(t)),
					saveRenamedGroup: () => e(Object(d.L)())
				}))(we),
				Te = n("./src/chat/components/ToastNotification/index.tsx"),
				Me = n("./src/chat/helpers/dom.ts"),
				ke = n("./src/chat/helpers/urls/index.ts"),
				Ae = n("./src/chat/icons/svgs/ArrowLeft/index.tsx"),
				Pe = n("./src/chat/components/OverlayNav/index.m.less"),
				Le = n.n(Pe);
			const De = ({
					userName: e
				}) => {
					const t = Object(ke.viewProfileUrl)(e);
					return s.a.createElement("a", {
						onClick: e => e.stopPropagation(),
						target: o.d.BLANK,
						rel: o.c,
						className: Le.a.UserProfileTitle,
						href: t
					}, e)
				},
				Ue = Object(_.a)({
					isEmbedded: $.f,
					iconMembers: (e, t) => Object(ee.t)(e, t.channelId),
					isFullSize: $.g
				}),
				Re = Object(r.b)(Ue, e => ({
					minimize: () => {
						e(Object(i.sizeChanged)(de.a.MINIMIZED)), e(Object(d.u)())
					},
					toggleSidebar: () => e(Object(l.f)(!0)),
					clickRenameGroup: () => e(Object(d.w)())
				}));
			class Be extends a.Component {
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
						toggleChannelNameInput: O
					} = this;
					return s.a.createElement("nav", {
						className: Object(c.a)(Le.a.Nav, {
							[Le.a.isFullSize]: b
						})
					}, s.a.createElement(ue.c, {
						onClick: m,
						className: Object(c.a)(Le.a.IconButton, {
							[Le.a.isFullSize]: b
						})
					}, s.a.createElement(Ae.a, {
						className: Le.a.ArrowLeft
					})), s.a.createElement("span", {
						onClick: a ? Object(Me.b)(r) : void 0,
						className: Object(c.a)(Le.a.TitleWrapper, {
							[Le.a.embed]: a
						})
					}, p && h && h.firstUser && s.a.createElement(u.a, {
						className: Object(c.a)(Le.a.ChatIcon, {
							[Le.a.isFullSize]: b
						}),
						userId: h.firstUser.id,
						secondUserId: null === (e = h.secondUser) || void 0 === e ? void 0 : e.id
					}), d === Y.a.Direct ? s.a.createElement(s.a.Fragment, null, s.a.createElement(De, {
						userName: l
					})) : s.a.createElement("span", {
						className: Le.a.Title
					}, l), s.a.createElement("span", {
						className: Le.a.SubTitle
					}, i)), s.a.createElement(Oe, {
						channelId: t,
						toggleChannelNameInput: O,
						showMenu: !!o,
						dropdownId: n
					}), t && l && s.a.createElement(Ne, {
						channelId: t,
						name: l,
						isVisible: g,
						hideChannelNameInput: f
					}), s.a.createElement(Te.a, null))
				}
			}
			t.a = Re(Be)
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
		"./src/chat/components/OverlayShareToChat/RichUnit/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "XE2-IJvb9eJ7G259suEtV",
				wrapper: "XE2-IJvb9eJ7G259suEtV",
				Link: "_2lhT5U8gl-PxiWK6BIskc",
				link: "_2lhT5U8gl-PxiWK6BIskc"
			}
		},
		"./src/chat/components/OverlayShareToChat/index.m.less": function(e, t, n) {
			e.exports = {
				Content: "_5ZwV0jkru0LMzGfeviT-x",
				content: "_5ZwV0jkru0LMzGfeviT-x",
				LoadingIndicator: "_3xJknepLPgDXbC6IyorAOg",
				loadingIndicator: "_3xJknepLPgDXbC6IyorAOg",
				SearchInput: "_1iAxc85BLbSgMe-mmq_No1",
				searchInput: "_1iAxc85BLbSgMe-mmq_No1",
				Label: "_2M7vA4b4SUevrq6x9al9ZP",
				label: "_2M7vA4b4SUevrq6x9al9ZP",
				Input: "_2EWrONRbqKKDJVoQZmmQID",
				input: "_2EWrONRbqKKDJVoQZmmQID",
				NewChat: "_1zyJiI2QjGvRaJ_oKryKIt",
				newChat: "_1zyJiI2QjGvRaJ_oKryKIt",
				NewChatContent: "_1iKablF4qZPfk2u-kPC9Ry",
				newChatContent: "_1iKablF4qZPfk2u-kPC9Ry",
				NewChatIcon: "_3NBdl3IOvX1Vb3Yu6RePJg",
				newChatIcon: "_3NBdl3IOvX1Vb3Yu6RePJg",
				Scroller: "_28Wfbw6FDz7vb-PQ47bv_Q",
				scroller: "_28Wfbw6FDz7vb-PQ47bv_Q",
				Channel: "_3MgS-N0V0hiBwOlbDevLzV",
				channel: "_3MgS-N0V0hiBwOlbDevLzV",
				Checkbox: "_3tX4GVz7ZNcuvE-OLuu9G7",
				checkbox: "_3tX4GVz7ZNcuvE-OLuu9G7",
				CheckboxContent: "_3I_hnU7gXIbw4F2tdDb2NE",
				checkboxContent: "_3I_hnU7gXIbw4F2tdDb2NE",
				ChannelIcon: "_2DHym5p_tQzD1ERvn_cCXt",
				channelIcon: "_2DHym5p_tQzD1ERvn_cCXt",
				ChannelName: "_3oHaNrJOKKPnNeNuoEyMpN",
				channelName: "_3oHaNrJOKKPnNeNuoEyMpN"
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
				O = n("./src/chat/selectors/app.ts");
			var E = ({
					children: e
				}) => {
					const t = Object(o.e)(O.h),
						n = Object(o.e)(O.e);
					return t ? null : n ? e : s.a.createElement(s.a.Fragment, null, s.a.createElement(f.a, null, s.a.createElement("span", {
						style: {
							paddingTop: "45px",
							background: "var(--layout-body)"
						}
					}, s.a.createElement(m.d, null))), s.a.createElement(g, null))
				},
				C = n("./src/chat/components/ThemeProvider/index.tsx");

			function j(e, t) {
				return s.a.createElement(C.a, {
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
		"./src/chat/components/Sidebar/ChannelsPanel/index.m.less": function(e, t, n) {
			e.exports = {
				Header: "_2WUlLsFSOnLb33dNA9kf50",
				header: "_2WUlLsFSOnLb33dNA9kf50",
				HeaderMessage: "_2ck6HpsPVpp1ZOkosMG83B",
				headerMessage: "_2ck6HpsPVpp1ZOkosMG83B",
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
				divider: "_24QCVGgaI_yk8y13wbgEWe"
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
				return te
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/chat/actions/channel.ts"),
				l = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/chat/actions/sidebar.ts")),
				d = n("./src/chat/actions/tracking.ts"),
				u = n("./src/chat/components/ChatList/index.tsx"),
				h = n("./src/chat/components/Sidebar/SidebarDivider/index.m.less"),
				m = n.n(h);
			const p = ({
				children: e,
				className: t
			}) => s.a.createElement("div", {
				className: Object(c.a)(m.a.Divider, t)
			}, e);
			var b = n("./src/chat/controls/TextButton.tsx"),
				g = n("./src/chat/reducers/sidebar/sideBarAppearance/index.ts"),
				f = n("./src/chat/selectors/channels.ts"),
				O = n("./src/chat/components/BasicInvited/index.m.less"),
				E = n.n(O);
			var C = () => {
					const e = Object(r.d)(),
						t = Object(r.e)(f.G),
						n = Object(r.e)(f.E),
						c = Object(r.e)(f.b),
						h = Object(a.useCallback)(() => {
							n && !c && e(i.D), e(Object(l.e)(g.a.INVITED_CHANNELS)), e(Object(d.e)())
						}, [e, n, c]),
						m = t.slice(0, 2);
					return t && t.length ? s.a.createElement(s.a.Fragment, null, s.a.createElement(p, {
						className: E.a.SidebarDivider
					}, o.fbt._("Invites", null, {
						hk: "1NWeVa"
					}), t.length > 2 ? s.a.createElement(b.a, {
						onClick: h
					}, o.fbt._("See all", null, {
						hk: "mkJIj"
					}), " (", t.length, ")") : null), s.a.createElement(u.a, {
						channels: Object.values(m)
					})) : null
				},
				j = n("./src/lib/lessComponent.tsx"),
				v = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				_ = n("./src/chat/controls/ChannelsFilter/index.tsx"),
				I = n("./src/chat/helpers/chatSelector.ts"),
				x = n("./src/chat/selectors/experiments.ts"),
				y = n("./src/chat/selectors/user.ts"),
				S = n("./src/chat/components/BasicJoined/index.m.less"),
				w = n.n(S);
			const N = j.a.p("Text", w.a),
				T = Object(I.a)({
					currentUserId: y.a,
					fetchingJoinedChannels: f.c,
					hasMoreJoinedChannels: f.F,
					joinedChannels: f.e,
					selectedChannelId: e => Object(f.B)(e, "channelId"),
					hasInvitedChannels: f.D,
					isChannelsFilterEnabled: x.a
				});
			var M = Object(r.b)(T)(e => {
					const {
						className: t,
						fetchingJoinedChannels: n,
						joinedChannels: a,
						hasInvitedChannels: r,
						isChannelsFilterEnabled: c
					} = e;
					return s.a.createElement("div", {
						className: t
					}, r && s.a.createElement(p, null, o.fbt._("Chats", null, {
						hk: "Bzl0R"
					})), (!a || !a.length) && s.a.createElement(N, null, o.fbt._("All the direct chats that you're in will show up here", null, {
						hk: "4A1UXC"
					})), c && s.a.createElement(_.a, null), s.a.createElement(u.a, {
						channels: a
					}), n && s.a.createElement(v.d, null))
				}),
				k = n("./src/chat/components/Scroller/index.tsx"),
				A = n("./node_modules/react-router-redux/es/index.js"),
				P = n("./src/chat/helpers/urls/index.ts"),
				L = n("./src/chat/icons/svgs/ChatNew/index.tsx"),
				D = n("./src/chat/components/Sidebar/CreateChannel/index.m.less"),
				U = n.n(D);
			var R = () => {
					const e = Object(r.d)();
					return s.a.createElement("button", {
						className: U.a.Button,
						onClick: () => {
							const t = Object(P.getRedirectURL)(Object(P.channelUrl)("create"));
							e(Object(A.b)(t)), e(Object(d.l)())
						},
						title: o.fbt._("Start a new chat", null, {
							hk: "3C4ek3"
						}),
						tabIndex: 0
					}, s.a.createElement(L.a, {
						className: U.a.ChatNew
					}))
				},
				B = n("./src/chat/controls/Counter/index.tsx"),
				F = n("./src/chat/selectors/unreadCounter.ts"),
				H = n("./src/chat/components/Sidebar/ChannelsPanel/index.m.less"),
				G = n.n(H);
			const V = Object(I.a)({
				fetchingJoinedChannels: f.c,
				hasMoreJoinedChannels: f.F,
				unreadCount: F.b,
				hasNewMessages: F.a
			});
			var z = Object(r.b)(V, e => ({
					fetchJoinedChannels: () => e(Object(i.E)())
				}))(e => {
					const {
						fetchingJoinedChannels: t,
						fetchJoinedChannels: n,
						hasMoreJoinedChannels: a,
						unreadCount: r,
						hasNewMessages: c
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: G.a.Header
					}, s.a.createElement("span", {
						className: G.a.HeaderMessage
					}, o.fbt._("Chat", null, {
						hk: "2by6VV"
					})), s.a.createElement(B.b, {
						count: r,
						isEmptyCounter: c && !r
					}), s.a.createElement("div", {
						className: G.a.CreateChannelWrapper
					}, s.a.createElement(R, null))), s.a.createElement(k.b, {
						loadMoreRows: () => {
							!t && a && n()
						}
					}, s.a.createElement("div", {
						className: G.a.Body
					}, s.a.createElement(C, null), s.a.createElement(M, null))))
				}),
				W = n("./src/higherOrderComponents/makeAsync.tsx"),
				K = n("./src/lib/loadWithRetries/index.ts");
			const Z = () => null;
			var q = Object(W.a)({
				ErrorComponent: Z,
				getComponent: () => Object(K.a)(() => n.e("InvitedChannelsPanel").then(n.bind(null, "./src/chat/components/Sidebar/InvitedChannelsPanel/index.tsx"))).then(e => e.default),
				LoadingComponent: Z
			});
			const Q = () => null;
			var J = Object(W.a)({
					ErrorComponent: Q,
					getComponent: () => Object(K.a)(() => n.e("ThemePanel").then(n.bind(null, "./src/chat/components/Sidebar/ThemePanel/index.tsx"))).then(e => e.default),
					LoadingComponent: Q
				}),
				X = n("./src/chat/selectors/app.ts"),
				Y = n("./src/chat/selectors/sidebar.ts"),
				$ = n("./src/chat/components/Sidebar/index.m.less"),
				ee = n.n($);
			const te = ({
					children: e
				}) => {
					const t = Object(r.e)(Y.b),
						n = Object(r.e)(X.g),
						a = Object(r.e)(X.c);
					return s.a.createElement("div", {
						className: Object(c.a)(ee.a.Wrapper, {
							[ee.a.hidden]: !t,
							[ee.a.embed]: a,
							[ee.a.isFullSize]: null == n || n
						})
					}, e)
				},
				ne = s.a.memo((function(e) {
					const t = Object(r.e)(Y.a);
					return s.a.createElement(te, e, (() => t === g.a.CHANNELS ? s.a.createElement(z, null) : t === g.a.THEMES ? s.a.createElement(J, null) : t === g.a.INVITED_CHANNELS ? s.a.createElement(q, null) : void 0)())
				}));
			t.b = ne
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
				d = n("./src/chat/components/FileUploader/useMedia.tsx"),
				u = n("./src/chat/constants/toast.ts"),
				h = n("./src/chat/helpers/chatSelector.ts"),
				m = n("./src/chat/icons/svgs/Refresh/index.tsx"),
				p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAB/FJREFUWAnFWFtolUcQ/nMxprUp9MFGUZJgSaqlahSRNm2KTUoetD4oKppWxBJsfbAiRQhY0SL4EA2WoJRCrVYMwVta8IJVo9LEaC410ZpYxcQ7ao0arTEn57b9vjn//Oc/yUmiEu3A/Du7Ozvz7ezO7p4TY708ioGrONsd5SA4YNf/94KAopECjtYnbb0N7HXAc3TEYgyjRfocnAVuB5eCm8DuflRfDtFpvM0ahPJVq1aZU6dOmd27dxv0EXQOmNRvJENqA/ON5uyjefPmGa/X6zPGeMGdx48fJ8hjtktOKCpxlgNJjBY3/kjwDPCElJSUtGvXrmUmJSVZgwYNigkEAvFxcXGxw4YNQ7f1Oj8ggn3hpJErgKc2cAP4GMD8lJGR8Q3khydPnkTwjCcYDHauWbOGoIrApIEOVMiq66tLlIS2J+B8V5+KX0EwJSUlZtmyZQTXvGTJEo2gjlfdAS81etz018GaGIMgK1sjRozIRf17cOHixYvfQEl64eDohCBIheBqkUJtCpRN0YBEa7OHh4p+FSK0Iyscy70Tt3r1atnk2PjpiJIC9KGP7apHmZHmGDLB6/kI8fmIRpTVAp24I6Ptr0GoAm8Bp4PTADwRpZsUmLutTzmaIw4gCJL7rmQbo6CzzoD8AZg3w4TMzMyMoUOHJg0ePNh68uSJ1dra2nHlypV/0Mds/tXmDpQkAqUt+neXbn/o6kkcoOCkF8dC921AQL/Pnj07UFpaas6ePWtu375tHj16ZDo6OoIAF3z8+LG5f/++AUBz4sQJU1xcbIYPH34d43jcJIjh6B/66i1o4U2cmJiYDcXN4Dow78tqROZHlL8tXbrUNDU1ma6uLp5pejP4IQfYYFMQJetsp46vvb3d7Nu3z6Smpv4NO19Onz49D+V34B3gkvHjx3+IUqkHSHeUNkHLbN261TQ2NhrcAmblypVcBokGDln4k+sqiFvBKLO9O7v7MIZgvQ8fPjTr168Xe7yTKysrzYYNG6QOH8WKEKUDkoJWSvPz883NmzfFGI1WVFT4586d67tx4wbvUEZDgNlAUX06UrDQlqiWl5f7161bpza7sCp+XIsE+q0NkvtUSIVlWVlZ5sGDB1w7CZP96pD9RBh+v1+iRPl5iUB1cvv37zdbtmxRU/6GhgYC9EydOjXVxhZa2cLCQp7qbTU1NVSWvXThwgUJ+71798QAwQ0UESCBkg4ePGjOnDmjpn32mfq1DVAvAOvTmTNncuM7KLZt22ZOnz4tA93gNAJuJ2q9r1KX2D1e9flG7OzsZNV39OhRBoZ5QIrX5R0+adIkKyEhgUpWTEyMhWPEQjZbrONFIiVHxMaG84l6qs++vsg9jnocp2MnTpxo+Xy8eCyLzzKQlx9QjAL8FxGRBjrFOWbxwFVSQ6xfvHjRqqqqkq7s7GwrPZ2XRv907tw5C49UC+ehlZeXJ0AUJN6JfCvSSMzVq1dZVvIDYjSF3p02bVoAhyzGmOChQ4cMD1uphI4VkcvKymRfzpkzx+Tm5orMJemuJw346D7bs2eP6HJ/paWlmfnz5zuJogkDXT8mbsaNG8ezV0lOFz1iqplF2IdenoHqVJ3U1dWJE5ZKBw4cMJi57h/HqY5liaUzGzduNIiMDKM9HmWHDx+WOvtJSEY/UNHHZzY6J0F0mXNmzJghaY8ZS4rRmM5w4cKFZvPmzWJM21jBmSkgpCPKRyfILk02XoNuwOgK3L1714wcOfJ+cnLymzbA8GZHg9y/o0aN+gKy2bFjB+3JgUyBhL0XESmCdAMNaUX/Uk+Buse42v28z+G7xgbHQlZWUfIVEd/a2vozyl8wGyr4mTBKTAbNarZrH5yoSp+l6rPENJwMtgfxgqB4kx/sVeIi4PADAbKiaaytrbUwYwFBY6QoRqWfx0dfINnnnhBtda/TPILDrr/4sQFSjCBZ5rFjx36CVg5w9mH0hQtnqfZzGbsz+5gIiJCqOSWXGIQiGMQPKEbiPRuRYIlAh4pEcOfOna9AvmJnsl/3jmM1ZFGqe/fuNUwePr9sZ241kW/dumWYfBUVFVJ369m2vZcvXya4P1yAdDWdZdU+ZrQ/Pj5+OTKuCBvXi6xKgCG5TVQJnmSZ+HKurq628KiwhgwZYuFNx19uIrOPh25zc7PcSpMnT9bhUto2CMysWLEidu3atR9DPg5m9Hp9WQtyDGb55/LlyzlrDz96RFCORoxUfX294SHPBwAP3ZaWlv6y12PfvfwpSoq6tKGu8FeUFi1alIKmu0VFRXRCkM4DVQFyuaJtAe3X0q1jy9x8Hvt5dTTsuseKuroiRTm8FyxY8BaaWwoKCpg0NOo8WOnIvZ8ULNvdzHbts/VpI3DkyBHZd1OmTNFffnrkRSLpoyYgN23axJ+T/H1itm/fbtra2giUL2E+zeAzFEUF1b1OHZsJzMebB3uO4Da6fD/V0rr0HdEZOHr0aP6aO4iflvJ7hfvL45HtyeNInPdSBvgD69KlS/K/DGzUg3McD5Fnsas5JDrp3KMn3MDQU08z633IvNBzZ82alZ6TkxM3ZswYC/8qSPbiTSlvO2bxnTt3rPPnz1tYzq5du3bVYswP4DIwiZPnNcRo9kpPA1AHRxhEtGJxI7yNznfAb4GTwa+C+SrxgB+D74GvgvnTVa4KlCQ5zkLiwH8JVPbnM5pmMDjuWYLybMrdANGRLj9lg4x0VPB6ViBcQi4l+ZnpP8ZJaQD2wM13AAAAAElFTkSuQmCC",
				b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAACPtJREFUWAm9WHtQVscVX+DjIVAzRqStVAnUCc7UBx2jKEarFeNYJrHVxvQPtSPTaDL1UbWVf4IZJ6Rm1DQdH4Dji1oZJ1BHJiMyU3V8iw98piWjOID4accCWhEEvtf299vvnpvL55c0NDFn5tzdPXvuOb89u3t2741S3xxFwpQOMedCO8Li0L4Q1fDNqPDi/0tKABPAueDvgJvAATDlZIJl+1snGeS7hYWFurm5WR8/fpyADoAnDBw48Kcon7dQMZrfKnFaSemLFy/2eb1eDfKA/Xv37iVIz7Bhw5pRPgS/Ayb1CaQ4CL7a96e8nzJy5Mgol8tFcJR509LSaK3q1q1bQ1G+Al4J/i1YphvVZ08SjWi4ulpbW6v9fr9ub2/Xq1atIpA8B4SFqLsdbXnXIXo2VYni92D+L7Nnz67PzMysQ/0PlrsEq5yKsgecbLXlPav5bAunM0bT2RbPFajclQbKrxRBbv2vQ3QiTGDc0d2WwYyoqKiXMeU/QjsX/KJVspt6flaeBREQB/aFg0tISFiHfq7BO+A94DXg4WBSuOgGe/r4lMiwJAmwYAvP8vJyRuIF8I/BWeAM8K8TExP1uHHjlqAeSn0GJ86dhiijY59DSBkjIpSDyq/Ak5DnhmRkZPSLiYlRHo9H1dfXq5s3b/LEYOSqwWfBbjCJdmmHLL6lDdH/pl4jnD9/PnegMTRmzJh41N8AX1i3bp0+c+aMOTUePnyonzx5oru6ukz54MED3dTUFGDK2b59u54+ffp/8A43SDb4i4jLpZfvcIocndq2bRsX++/B58HNo0aNuobyOOtlZWWaAHhSgJmUfVY9gNLJaGoeKz4CJ9gFCxYwUh/NnDlzUF5eHs/q1NGjR6dAx7mWDQb0PUUGfVpa2nfRc3nLli26rq5Ot7S0mIS7cOFCfffuXTolIG8AxIRMRvUpdvZB3wyGx+ChQ4cIksfeHZw8T1C2g2+ANyKxJ6EkOQEbgawFNs6eOnWKQLoI5NixYz6ANaAsR+zrE3EAPh9NmAh7b9y4YdYcwfLEuXbtml67di1l/544ceJLBlEISEE8d+PGjTTUw8fly5fNGmKdREO7S0t1SXGxbmxsNDI6D0fhouoA6r99+7YfuzzgdrsZXaLvqqysJMhHOIlSLZD2dAvATQQB8j5+/FgfOXKEde3H6N/98E9m1HhRl1X8TePaYvr68pDBWNHUV69e1XPnzpXo0lQ31j/9/N0CaM+sAPywoaGBit5Hjx7p7u5u1vWf8VIBgLXMytRtLytd9MbPdSumhiROTcN6EEBra6tua2vTbbBD7sRGcZKAPHDggL548aJ0BZARfKmpqQQ5zQJpsHHXkt68dOkSlb1c5CT3/fv6nQFK658laT0jTutf/FDXAGz1yZOmX/TYELAE99prs7RK7K/fnjRBr/pJtn4le4KutmaEeqLLINTU1Dhtebdu3UqA7xtESkVz98qZ+MmJEyfaOjo6XPRHhY6ubpXCPRfTX3l8OGIjY+2Dlv1OioiIwEi0wg1a5b7+utrV0a6K4j9VfwycVWUdNaokJ0fVNzQq0aNubGysGjt2rNOMQgTZlhu4uVwSDEN5f+XKlQeLiooUDnkDMD1lsGpc9Ka6U9mgYp4fodpq61T5iylqzIgRNGKcmUrIw9fToyZRlvADFRkXp5KGj1K/Q/OzxkZbk0CFsKRUZGQwT/fgXVCL1RcRmr1PiiKmQUW7XOrtgjXqg1mvqo8q/qHyM3LUW5WH1aABAxT7nU5okFEhJSUPUvdZiU1Urujn0BFQhDZk8Pcp7UW0cf78eYU8SXnEuXPnWPKQIAUNoiIbJWfDhg3wY5KrScZsdOAo+6yxyZRsyxpi3UmyJpvdbp0J43Cl3SOU3oVyzXvv2aryvujv27ePOdHbgE0KLLeQfwVPhFQEaSfDDWJkNaPJSCX066eGv5BKuWlLlI3A8aAcKNSQlBT117o6tau8QrW3tqiX8ser/DmzjSb7QyMfHR0dQOJ2VVfzbqHyp06dyosKsdkXFpnq1Dlz5nRiHXC0fhkpS45W2uwMJfYLO/UwDbaqU06hFcHAzp07GSDyW2CS4Am28Px8xeK2cu/ePb5vpxs2BKQADQeGekLMdQJI3pG+kNKzevVqgiu00Mis2uCkIh0reOyAPGJYHIUYtpsEw3zG0wf3QVv+Ze9JHy4knEYdFxc3xQIiOEzTGUqTWiDdWVhY+K/Ozs5orCk/1wsZJ4PC4lWlpaWquLhY7dmzR+G4MmsOacno4K+CKigoUMuWLTP6fA9oLb+9C0seuHDhAs/c1hUrVnxqaUhe7v2C1RL0vykpKWEkvACqef3Kzc01lwekAXOOHjx4UCcnJ+vly5ebyyqVhfApoK1bkawz6TKlRA93xZ5p06ZxBFst//YFISw6CLkWZT1WVVRU6Hnz5nkJkBeIUOJNeujQoXr37t2my/r1YasJEFuACmVcOiAf34O/9iVLlgy2ADln1BI9XUgUs9DFaNnbUDYGSwGDJKsnT55s30ocAAjCJsrlkgChl+uV9sePHx/MP5/n4qcROSQSPYqqeKsGwW5wR9IJ2RKakjpZWVnaSk12PztF34oYRUxdPfv37zfg0tPT8yzfEhQHlPBVUfzl+vXradBH4+KIAhCaBiWRBjZt2qQxRabDGWEHKOrxAum5fv26XrRoEcHdw6Cm9xUc9WUNfCxXL2sqjROsOa/cE4nx6NGj3Pk+7F4CcDI/qNj28/p1+vRpjV1KYA/A72NQ/VGSJCDBVpinU4HTK6kmAxGgug+/1Fhyd7mqqqoU/vup7OxsP/Jd5I4dOyLwQRXFFITdblINloPiccmUc+XKFYVPz25cRPll+PHSpUv3bt68uYVpiPbA9lFGQThyrjn2EwiRfTBjxox8TJ2Kj483H+OHDx8+hbVThr5acCfYNWXKlCT8TU1FndcU/t3i5yQjxa81N5hfbP8EN4GFCIyBkGCIPGwZCpBtOiC9CuY64c+gT8CnwV+H+gRMHIUCpNwJUvR4IuBgMLef0JFTP9w7IqM+By0Dt21+lQqNhCPKJauzTidfegSFM/JNyP4LuTh8ZaAXiQ4AAAAASUVORK5CYII=",
				g = n("./src/chat/models/Uploads/index.ts"),
				f = n("./src/chat/components/ToastNotification/index.m.less"),
				O = n.n(f);
			const E = [u.a.ConnectionClosed, u.a.ConnectionPending],
				C = [u.a.SomethingWentWrong, g.a.UnsupportedBrowser, g.a.InvalidMediaType, g.a.FileSizeLimitExceeded, g.a.ActiveFilesLimitExceeded],
				j = e => E.includes(e),
				v = e => C.includes(e),
				_ = i.a.wrapped(e => r.a.createElement("span", {
					className: Object(o.a)(e.className, {
						[O.a.pending]: j(e.toast),
						[O.a.error]: v(e.toast)
					}),
					style: {
						height: e.toast ? "2.5em" : "0"
					}
				}, e.children), "Wrapper", O.a),
				I = i.a.span("Text", O.a),
				x = i.a.img("SnooImg", O.a);
			x.displayName = "SnooImg";
			const y = i.a.button("Button", O.a);
			y.displayName = "Button";
			const S = i.a.wrapped(m.a, "RefreshIcon", O.a),
				w = Object(h.a)({
					toast: e => e.toast
				}),
				N = Object(c.b)(w),
				T = r.a.createElement(x, {
					src: p
				}),
				M = r.a.createElement(x, {
					src: b
				}),
				k = ({
					className: e,
					toast: t
				}) => r.a.createElement(_, {
					toast: t,
					className: e
				}, t && (e => {
					switch (e) {
						case u.a.ConnectionOpen:
							return T;
						case u.a.ConnectionPending:
						case u.a.ConnectionClosed:
						case u.a.SomethingWentWrong:
						case g.a.UnsupportedBrowser:
						case g.a.InvalidMediaType:
						case g.a.FileSizeLimitExceeded:
						case g.a.ActiveFilesLimitExceeded:
							return M;
						default:
							return null
					}
				})(t), r.a.createElement(I, null, t && (e => {
					switch (e) {
						case u.a.ConnectionOpen:
							return a.fbt._("Found the internet!", null, {
								hk: "3jLr8W"
							});
						case u.a.ConnectionPending:
							return a.fbt._("Looking for the internet...", null, {
								hk: "1JPRuh"
							});
						case u.a.ConnectionClosed:
							return a.fbt._("Hmm, no internet?", null, {
								hk: "134peM"
							});
						case u.a.SomethingWentWrong:
							return a.fbt._("Oops! Something went wrong", null, {
								hk: "4CGwU7"
							});
						case g.a.UnsupportedBrowser:
							return a.fbt._("Oops! Unsupported browser for Media uploading", null, {
								hk: "3incN0"
							});
						case g.a.InvalidMediaType:
							return a.fbt._("Oops! Chat only supports files in JPEG, PNG and GIF format", null, {
								hk: "8s0vB"
							});
						case g.a.FileSizeLimitExceeded:
							return a.fbt._("Oops! Media file size limit exceeded. {Max gif file size}MB for GIF and {Max image file size}MB for JPEG and PNG", [a.fbt._param("Max gif file size", String(d.a / d.c)), a.fbt._param("Max image file size", String(d.b / d.c))], {
								hk: "2twjo7"
							});
						case g.a.ActiveFilesLimitExceeded:
							return a.fbt._("Oops! Too many files per message", null, {
								hk: "2x9klR"
							});
						default:
							return null
					}
				})(t)), t && (e => e === u.a.ConnectionClosed ? r.a.createElement(y, {
					onClick: l.g
				}, r.a.createElement(S, null)) : null)(t));
			k.displayName = "ToastNotification";
			t.a = N(k)
		},
		"./src/chat/components/TypingIndicator/index.m.less": function(e, t, n) {
			e.exports = {
				IndicatorText: "_9ILBgizV58pKhJFWM-mPy",
				indicatorText: "_9ILBgizV58pKhJFWM-mPy"
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
					return O
				})), n.d(t, "d", (function() {
					return E
				})), n.d(t, "a", (function() {
					return C
				})),
				function(e) {
					e.AddToGroup = "addToGroup", e.Block = "block", e.ChangeTheme = "changeTheme", e.Kick = "kick", e.Leave = "leave", e.LeaveGroup = "leaveGroup", e.MuteBadging = "muteBadging", e.MuteNotifs = "muteNotifs", e.Profile = "profile", e.Report = "report", e.RenameGroup = "renameGroup", e.UnmuteBadging = "unmuteBadging", e.UnmuteNotifs = "unmuteNotifs", e.ViewMembers = "members"
				}(a || (a = {}));
			const {
				AddToGroup: s,
				Block: r,
				Kick: c,
				Leave: o,
				LeaveGroup: i,
				MuteBadging: l,
				MuteNotifs: d,
				Profile: u,
				RenameGroup: h,
				UnmuteBadging: m,
				UnmuteNotifs: p,
				ViewMembers: b,
				ChangeTheme: g
			} = a, f = [l, m, d, p], O = {
				directChannel: [u, g, r, ...f, o],
				groupChannel: [s, b, g, h, ...f, i],
				members: [r, c]
			}, E = {
				muteBadging: (e, t, n) => !(e === l && (n || t)),
				unmuteBadging: (e, t, n) => !(e === m && (n || !t)),
				muteNotifs: (e, t) => !(e === d && t),
				unmuteNotifs: (e, t) => !(e === p && !t),
				changeTheme: (e, t) => !(e === g && !t)
			}, C = "dropdown-container"
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
				noBorder: "_1nCyL_vUGVL18u_E2mCZg4",
				noBorderStyles: "_226W8BEi6TuRBJaz_fqgVK",
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
				return v
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "d", (function() {
				return x
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
			const O = o.a.a("Button", g.a),
				E = o.a.button("Button", g.a),
				C = o.a.button("MessageIconButton", g.a),
				j = e => {
					const t = Object(c.a)({
							[g.a.primaryStyles]: e.primary,
							[g.a.secondaryStyles]: e.secondary,
							[g.a.noBorder]: e.noBorder,
							[g.a.warningNoBorder]: e.warningNoBorder,
							[g.a.secondaryNoBorder]: e.secondaryNoBorder
						}, e.className),
						n = {
							height: e.height || void 0,
							width: e.width || void 0
						};
					return e.href ? r.a.createElement(O, {
						href: e.href,
						target: i.d.BLANK,
						rel: i.c,
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
				v = o.a.wrapped(j, "IconButton", g.a),
				_ = e => r.a.createElement(C, f({}, e, {
					title: a.fbt._("Report message", null, {
						hk: "2XKeNq"
					})
				}), r.a.createElement(u, null)),
				I = e => r.a.createElement(C, f({}, e, {
					title: a.fbt._("Delete message", null, {
						hk: "Z4Zm0"
					})
				}), r.a.createElement(p.a, null)),
				x = e => r.a.createElement(C, f({}, e, {
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
		"./src/chat/controls/ChannelsFilter/index.m.less": function(e, t, n) {
			e.exports = {
				ChannelsFilter: "aIffTH7GLvKVJOicG6cVD",
				channelsFilter: "aIffTH7GLvKVJOicG6cVD",
				ChannelsFilterItem: "_356qP5qn9Z_YK-JE6rofqz",
				channelsFilterItem: "_356qP5qn9Z_YK-JE6rofqz",
				selected: "_2kC1EPoYVFxUu-lQ5y-2fH"
			}
		},
		"./src/chat/controls/ChannelsFilter/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/chat/actions/channelsFilter/index.ts"),
				l = n("./src/chat/actions/tracking.ts"),
				d = n("./src/chat/controls/Button/index.tsx"),
				u = n("./src/chat/models/Channel/index.ts"),
				h = n("./src/chat/selectors/channelsFilter.ts"),
				m = n("./src/chat/controls/ChannelsFilter/index.m.less"),
				p = n.n(m);
			t.a = ({
				isForInvitedChannels: e
			}) => {
				const t = Object(c.d)(),
					n = Object(c.e)(h.b),
					m = Object(c.e)(h.a),
					b = Object(s.useMemo)(() => e ? m : n, [n, m, e]),
					g = Object(s.useCallback)(n => {
						t(Object(i.d)({
							filter: n,
							isForInvitedChannels: e
						}));
						const a = e ? "invite" : "chat_tab";
						t(Object(l.A)(Object(u.h)(n), a))
					}, [t, e]);
				return r.a.createElement("div", {
					className: p.a.ChannelsFilter
				}, Object.values(u.b).map(e => r.a.createElement(d.a, {
					key: e,
					onClick: () => g(e),
					className: Object(o.a)(p.a.ChannelsFilterItem, {
						[p.a.selected]: b === e
					})
				}, a.fbt._("{FilterName}", [a.fbt._param("FilterName", e)], {
					hk: "43TtvD"
				}))))
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
					r: "9"
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
				r: "8"
			}), "StyledCircle", b.a);
			var O = e => s.a.createElement(o.a, g({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("g", null, s.a.createElement(f, null))),
				E = n("./src/chat/controls/Checkbox/index.m.less"),
				C = n.n(E);
			const j = c.a.input("HiddenInput", C.a),
				v = c.a.wrapped(m, "Checked", C.a),
				_ = c.a.wrapped(O, "Unchecked", C.a),
				I = c.a.span("Wrapper", C.a),
				x = c.a.span("Content", C.a),
				y = c.a.span("Control", C.a),
				S = c.a.label("CheckInput", C.a);
			t.a = e => s.a.createElement(S, {
				className: Object(r.a)(e.className, {
					[C.a.checked]: e.checked
				}),
				style: {
					height: e.height || void 0,
					width: e.width || void 0
				}
			}, s.a.createElement(I, null, e.children && !e.rightPosition && s.a.createElement(x, null, e.children), s.a.createElement(y, null, s.a.createElement(j, {
				tabIndex: 0,
				type: e.type || "checkbox",
				checked: e.checked,
				disabled: e.disabled,
				name: e.name,
				value: e.value,
				onChange: e.onChange,
				id: e.id
			}), s.a.createElement(v, null), s.a.createElement(_, null)), e.children && e.rightPosition && s.a.createElement(x, null, e.children)))
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
				unreadCounter: "MkRbNWPhGFV272x8SVGyf",
				isEmpty: "_1QHd2Pk1zCdGfjyWK-Y8AI"
			}
		},
		"./src/chat/controls/Counter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/chat/controls/Counter/index.m.less"),
				o = n.n(c);
			const i = ({
					className: e,
					count: t
				}) => s.a.createElement("span", {
					className: e
				}, t > 0 && (t < 100 ? t : "99+")),
				l = ({
					count: e
				}) => s.a.createElement(i, {
					className: Object(r.a)(o.a.Counter, {
						[o.a.count]: e < 0
					}),
					count: e
				}),
				d = ({
					count: e,
					isEmptyCounter: t
				}) => e || t ? s.a.createElement(i, {
					className: Object(r.a)(o.a.UnreadCounter, {
						[o.a.isEmpty]: t
					}),
					count: e
				}) : null
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
					isPreview: o,
					height: i = 200,
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
							height: u || o ? "auto" : "200px",
							width: u || o ? "auto" : "250px",
							maxHeight: "200px"
						}
					}, u ? s.a.createElement(l, {
						onClick: () => n && n(),
						src: t,
						title: d,
						style: {
							height: o ? `${+i*(r||.75)}px` : "auto",
							maxHeight: "200px"
						}
					}) : s.a.createElement(c.a, {
						height: o ? +i * (r || .75) : 200
					}))
				}, "Gif", i.a);
			t.a = d
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
						h = Object(r.e)(i.g),
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
				NoBorderPrimaryButton: "_2_xFtB6XsnUOGk0YPukDeu",
				noBorderPrimaryButton: "_2_xFtB6XsnUOGk0YPukDeu",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				NoHeaderText: "_1KR6Li0ovE5q7gSH0Rl19G",
				noHeaderText: "_1KR6Li0ovE5q7gSH0Rl19G",
				ButtonsWrapper: "_2-kvEgGOQg3X-keFfUpUa",
				buttonsWrapper: "_2-kvEgGOQg3X-keFfUpUa",
				HeaderText: "_3kD8pfjcLZgRDsMewcOmc4",
				headerText: "_3kD8pfjcLZgRDsMewcOmc4"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				i = n("./src/config.ts"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/chat/controls/Button/index.tsx"),
				u = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				h = n.n(u),
				m = n("./src/chat/helpers/dom.ts");
			const p = Object(c.b)(void 0, e => ({
				onSubmit: () => {},
				onCancel: Object(m.b)(() => e(Object(o.a)()))
			}))(e => r.a.createElement("div", {
				className: Object(l.a)({
					[h.a.primary]: e.primaryButtonOnly,
					[h.a.NoHeaderText]: !e.children
				}, h.a.OverlayControlBar, e.className)
			}, e.children && r.a.createElement("span", {
				className: h.a.HeaderText
			}, e.children), r.a.createElement("div", {
				className: h.a.ButtonsWrapper
			}, e.primaryButtonBlock && r.a.createElement(d.a, {
				onClick: e.primaryButtonBlockAction || e.onCancel,
				className: Object(l.a)(h.a.Button, h.a.NoBorderPrimaryButton),
				secondary: !0,
				noBorder: !0
			}, e.primaryButtonBlockText || a.fbt._("Block", null, {
				hk: "4CA4VX"
			})), !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? r.a.createElement(d.a, {
				className: h.a.Button,
				href: `${i.a.redditHelpUrl}/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting`,
				secondary: !0
			}, a.fbt._("Other Options", null, {
				hk: "1RadlV"
			})) : r.a.createElement(d.a, {
				className: h.a.Button,
				onClick: e.secondaryButtonAction || e.onCancel,
				primary: !!e.secondaryButtonOnly,
				secondary: !e.secondaryButtonOnly
			}, e.secondaryButtonText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			}))), !e.secondaryButtonOnly && r.a.createElement(d.a, {
				className: h.a.Button,
				type: "submit",
				primary: !0,
				onClick: e.primaryButtonAction || e.onSubmit,
				disabled: e.primaryButtonDisabled
			}, e.primaryButtonText || a.fbt._("Submit", null, {
				hk: "4aU3dh"
			})))));
			p.displayName = "OverlayControlBar", t.a = p
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
		"./src/chat/controls/OverlayHeader/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/components/ToastNotification/index.tsx"),
				o = n("./src/chat/controls/OverlayHeader/index.m.less"),
				i = n.n(o);
			const l = r.a.header("Header", i.a),
				d = r.a.h1("Title", i.a),
				u = r.a.span("Normal", i.a),
				h = r.a.span("Warning", i.a);
			t.a = ({
				message: e,
				title: t,
				warning: n
			}) => {
				const a = n ? h : u;
				return s.a.createElement(l, null, s.a.createElement(d, null, t), s.a.createElement(a, null, e), s.a.createElement(c.a, null))
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
					style: t,
					onClick: e.onClick
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
		"./src/chat/controls/TooltipHooked/TooltipConfig.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			const a = {
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
				s = e => ({
					placement: e ? "right" : "left",
					...a,
					modifiers: [...a.modifiers, {
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
					...a,
					modifiers: [...a.modifiers, {
						name: "flip",
						options: {
							fallbackPlacements: ["left"]
						}
					}]
				}),
				c = e => ({
					placement: e ? "left" : "right",
					...a
				}),
				o = () => ({
					placement: "bottom-start",
					...a,
					modifiers: [...a.modifiers, {
						name: "preventOverflow",
						options: {
							padding: {
								right: 100
							}
						}
					}]
				}),
				i = () => ({
					placement: "top-start",
					...a,
					modifiers: [...a.modifiers, {
						name: "offset",
						options: {
							offset: [0, 15]
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/chat/controls/TooltipHooked/TooltipHooked.m.less"),
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
			t.default = s.a.memo((function({
				visible: e,
				...t
			}) {
				const [n, c] = Object(a.useState)(e);
				return Object(a.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, c(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), c(!1)
					}
				}, [e]), e ? t.styled ? s.a.createElement("div", i({
					className: Object(r.a)(o.a.tooltip, {
						[o.a.visible]: n || t.isInstant
					})
				}, t.popperProps, {
					onMouseEnter: () => t.isCloseOnHover && t.hide()
				}), t.children, n && !t.noArrow && s.a.createElement("div", i({
					className: o.a.arrow
				}, t.arrowProps))) : s.a.createElement("div", t.popperProps, t.children) : null
			}))
		},
		"./src/chat/controls/TooltipHooked/loader.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(a.a)({
				ErrorComponent: r,
				getComponent: () => Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/chat/controls/TooltipHooked/TooltipHooked.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
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
				m = n("./src/chat/customMiddleware/noop.ts");
			var p = n("./src/chat/helpers/urls/index.ts"),
				b = n("./src/chat/tracking/sendEvent.ts"),
				g = n("./src/telemetry/models/Event.ts"),
				f = n("./src/chat/tracking/fields/chat.ts"),
				O = n("./src/chat/tracking/fields/common.ts");
			var E;
			! function(e) {
				e.Navigate = "navigate.chat", e.Websocket = "websocket.chat", e.Expand = "expand.chat", e.UnreadCount = "unreadCount.chat"
			}(E || (E = {}));
			const C = e => t => {
					const n = (e => {
						try {
							return "object" == typeof e.data ? e.data : JSON.parse(e.data)
						} catch (t) {
							return
						}
					})(t);
					if (n) switch (n.type) {
						case E.Navigate: {
							const t = Object(c.parse)(n.data.href).pathname || p.rootUrl,
								a = Object(p.getRedirectURL)(t);
							e.dispatch(Object(r.b)(a)), e.dispatch(Object(d.sizeChanged)(h.a.EMBED));
							break
						}
						case E.Websocket:
							e.dispatch(Object(u.c)());
							break;
						case E.Expand: {
							const t = e.getState();
							e.dispatch(Object(d.sizeChanged)(h.a.EMBED));
							const a = t.platform.currentPage;
							a && a.meta && a.meta.name === o.Lb.CHAT_MINIMIZE && e.dispatch(Object(l.M)());
							const {
								action: s,
								noun: r,
								source: c
							} = n.data.telemetry;
							((e, t, n, a) => {
								Object(b.a)({
									noun: t || "chat",
									source: n || g.b.Nav,
									action: a || g.a.Click,
									chat: {
										...Object(f.f)(e),
										...Object(f.t)(e),
										...Object(f.p)(e),
										...Object(f.y)(e),
										...Object(f.z)(e)
									},
									...Object(O.a)(e)
								})
							})(t, r, c, s);
							break
						}
					}
				},
				j = s()(e => {
					window.addEventListener("message", C(e)), window.navigator.serviceWorker.addEventListener("message", C(e))
				});
			t.a = e => "undefined" == typeof window ? m.a : (window.addEventListener("load", () => {
				j(e)
			}), e => t => {
				switch (t.type) {
					case u.a: {
						const e = {
								...t.payload
							},
							{
								unread: n,
								count: a
							} = (e => {
								const {
									unreadMessages: t,
									hasNewMessages: n
								} = e;
								return {
									count: t,
									unread: n
								}
							})(e);
						Object(i.a)({
							type: E.UnreadCount,
							data: {
								unread: n,
								count: a
							}
						})
					}
				}
				return e(t)
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
				return o = Object(a.c)(s.p.CHAT, s.x.CHAT_LAST_SELECTED_CHANNEL_ID_KEY, t || "unknown"), Object(a.b)(o)
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
				return o = Object(a.c)(s.p.CHAT, s.x.CHAT_LAST_SELECTED_CHANNEL_ID_KEY, i), e => t => {
					const n = e(t);
					switch (t.type) {
						case r.a:
							Object(a.d)(o, t.payload, s.ob)
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
			const m = new Set([r.GLOBAL_THEME_CHANGED]);
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
				O = n("./src/chat/selectors/sendbird.ts");
			const E = (e, t) => {
				const n = t && t.type === o.SIZE_CHANGED ? t.payload : e.container.size,
					a = n === p.a.MINIMIZED || n === p.a.HIDDEN,
					s = t && t.type === l.a ? t.payload && t.payload.routeMatch && t.payload.routeMatch.route.meta.name === r.Lb.CHAT_MINIMIZE : e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name === r.Lb.CHAT_MINIMIZE;
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
							e.dispatch(Object(d.k)())
						}, r)
					})(n) : s()(() => e.dispatch(Object(d.k)()))
				};
				let a;
				Object(f.a)(e.getState()) === r.Lb.CHAT_MINIMIZE ? s()(async () => {
					E(e.getState()) ? n() : (await e.dispatch(Object(d.k)(!1)), e.getState().sendbird.session.token && await e.dispatch(Object(i.c)()))
				}) : n();
				return i => g => {
					const f = e.getState(),
						C = Object(O.a)(f) === b.b.Closed,
						j = Object(O.e)(f);
					switch (g.type) {
						case o.SIZE_CHANGED: {
							if (!g.payload) break;
							const t = g.payload !== p.a.MINIMIZED && g.payload !== p.a.HIDDEN;
							t && (clearTimeout(a), a = null), C && t && !j && n(), !j || g.payload !== p.a.HIDDEN && g.payload !== p.a.MINIMIZED || (a = setTimeout(() => {
								e.dispatch(Object(h.f)())
							}, 10 * r.jb));
							break
						}
						case l.a: {
							const t = E(f, g);
							C && t ? n() : t && e.dispatch(Object(c.M)());
							break
						}
						case d.g:
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
				r = n("./src/chat/selectors/app.ts"),
				c = n("./src/lib/safeBadgeUpdate.ts");
			const o = /^\([\d*]+?\)\s+/;
			t.a = e => {
				return "undefined" != typeof window ? t => n => {
					const s = t(n),
						i = e.getState();
					if (!Object(r.f)(i) && n.type === a.a) {
						const {
							unreadMessages: e,
							hasNewMessages: t
						} = n.payload;
						((e, t) => {
							var n, a;
							const s = null === (a = null === (n = null === window || void 0 === window ? void 0 : window.document) || void 0 === n ? void 0 : n.title) || void 0 === a ? void 0 : a.replace(o, "");
							e > 0 ? (Object(c.a)(e), window.document.title = `(${e}) ${s}`) : !e && t ? (Object(c.a)(1), window.document.title = `(*) ${s}`) : (Object(c.a)(0), window.document.title = s)
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
			const l = 5 * r.jb;
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
				d = n("./src/chat/constants/channels.ts"),
				u = n("./src/chat/selectors/channels.ts"),
				h = n("./src/chat/selectors/platform.ts"),
				m = n("./src/chat/tracking/sendEvent.ts"),
				p = n("./src/telemetry/models/Event.ts"),
				b = n("./src/telemetry/models/Timer.ts"),
				g = n("./src/chat/tracking/fields/chat.ts"),
				f = n("./src/chat/tracking/fields/common.ts");
			const O = e => ({
					type: e
				}),
				E = e => ({
					millis: e
				});
			var C = n("./src/chat/tracking/events/chatView.ts"),
				j = n("./src/chat/tracking/events/contactsList.ts"),
				v = n("./src/chat/tracking/events/invitationInbox.ts"),
				_ = n("./src/chat/tracking/events/messagesInbox.ts");
			const I = s()((e, t) => ((e, t) => {
					Object(m.a)({
						noun: "inbox_new",
						source: p.b.ChatPerformance,
						action: p.a.Load,
						chat: {
							...Object(g.o)(e),
							...Object(g.q)(e)
						},
						timer: {
							...O(b.TimerType.ChatLoadInboxNew),
							...E(t)
						},
						...Object(f.a)(e)
					})
				})(e, (e => Date.now() - e)(t))),
				x = s()(e => Object(h.d)(e) && y(e)),
				y = e => {
					Object(_.d)(e)
				},
				S = Object(r.c)((e, t, n) => {
					Object(u.M)(e) ? ((e, t) => {
						Object(m.a)({
							noun: "channel_cached",
							source: p.b.ChatPerformance,
							action: p.a.Load,
							chat: {
								...Object(g.f)(e)
							},
							timer: {
								...O(b.TimerType.ChatLoadChannelCached),
								...E(t)
							},
							...Object(f.a)(e)
						})
					})(t, n) : ((e, t) => {
						Object(m.a)({
							noun: "channel_new",
							source: p.b.ChatPerformance,
							action: p.a.Load,
							chat: {
								...Object(g.f)(e)
							},
							timer: {
								...O(b.TimerType.ChatLoadChannelNew),
								...E(t)
							},
							...Object(f.a)(e)
						})
					})(t, n)
				}),
				w = e => {
					Object(h.c)(e) === d.a.CREATE && Object(j.g)(e)
				},
				N = e => {
					Object(h.c)(e) === d.a.VIEW_JOIN && (e => {
						Object(m.a)({
							noun: "preview",
							source: p.b.ChatPreview,
							action: p.a.View,
							chat: {
								...Object(g.f)(e),
								...Object(g.z)(e),
								...Object(g.p)(e),
								...Object(g.r)(e)
							},
							...Object(f.a)(e)
						})
					})(e)
				};
			t.a = e => t => n => a => {
				const s = n(a),
					r = t.getState();
				switch (a.type) {
					case i.a:
						I(r, e), w(r);
						break;
					case c.q:
						S(r, !0);
						break;
					case c.s:
						w(r), x(r);
						break;
					case c.r:
						I(r, e), (e => {
							Object(h.c)(e) === d.a.VIEW_INVITE && Object(v.k)(e)
						})(r), (e => Object(h.e)(e) && Object(C.j)(e))(r), S(r), N(r);
						break;
					case o.l:
					case l.c:
						I(r, e)
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
				Object(o.d)(l, e, 5 * i.jb)
			}, 5 * i.Qb, {
				leading: !1,
				trailing: !0
			});
			let h;
			const m = () => {
				h && clearInterval(h), h = setInterval(() => {
					void 0 === Object(o.b)(l) && Object(r.c)()
				}, 5 * i.jb)
			};
			t.a = e => {
				if ("undefined" == typeof window) return c.a;
				const t = e.getState(),
					{
						user: {
							account: n
						},
						messages: {
							unread: a
						}
					} = t,
					s = n && n.id || "unknown";
				l = Object(o.c)(i.p.CHAT, i.x.CHAT_UNREAD_MESSAGE_COUNT_KEY, s), u(a.unreadMessages), m();
				try {
					window.parent.addEventListener("focus", m)
				} catch (h) {}
				return e => t => {
					const n = e(t);
					switch (t.type) {
						case r.a: {
							const {
								unreadMessages: e
							} = t.payload;
							e !== d && u(e);
							break
						}
					}
					return n
				}
			}
		},
		"./src/chat/customMiddleware/uploadPrompt.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			}));
			var a = n("./node_modules/lodash/once.js"),
				s = n.n(a),
				r = n("./src/lib/cache/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				o = n("./src/chat/actions/uploads/prompt.ts"),
				i = n("./src/chat/customMiddleware/noop.ts"),
				l = n("./src/chat/selectors/experiments.ts");
			let d;
			const u = s()(e => {
				const t = e.getState(),
					n = t.user.account && t.user.account.id;
				d = Object(r.c)(c.p.CHAT, c.x.CHAT_UPLOAD_PROMPT_COUNT_KEY, n || "unknown");
				const a = Object(r.b)(d),
					s = Object(l.e)(t),
					i = Object(l.d)(t);
				let u = null == a ? 0 : a;
				(s || i) && e.dispatch(Object(o.d)(++u))
			});
			t.a = e => {
				if ("undefined" == typeof window) return i.a;
				const t = e.getState(),
					{
						user: {
							account: n
						}
					} = t,
					a = n && n.id || "unknown";
				return d = Object(r.c)(c.p.CHAT, c.x.CHAT_UPLOAD_PROMPT_COUNT_KEY, a || "unknown"), e => t => {
					const n = e(t);
					switch (t.type) {
						case o.a:
							t.payload <= o.b.LAST && Object(r.d)(d, t.payload, c.nc)
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
				method: a.ib.GET,
				data: {
					raw_json: 1
				}
			}), c = async (e, t) => Object(s.a)(e, {
				data: {
					account_id: t,
					raw_json: 1
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: a.ib.POST
			}), o = async (e, t) => Object(s.a)(e, {
				endpoint: `${e.apiUrl}/user/${t}/about`,
				method: a.ib.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/chat/endpoints/messages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var a = n("./src/redditGQL/operations/CreateChatMessage.json"),
				s = n("./src/redditGQL/operations/ReportChatMessage.json"),
				r = n("./src/lib/makeGqlRequest/index.ts");
			const c = (e, t) => Object(r.a)(e, {
					...s,
					variables: t
				}),
				o = e => {
					var t, n, a, s, r, c;
					return Boolean(null === (a = null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.createChatMessage) || void 0 === n ? void 0 : n.message) || void 0 === a ? void 0 : a.messageId) && Boolean(null === (c = null === (r = null === (s = null == e ? void 0 : e.data) || void 0 === s ? void 0 : s.createChatMessage) || void 0 === r ? void 0 : r.message) || void 0 === c ? void 0 : c.messageRedditId)
				},
				i = (e, t) => Object(r.a)(e, {
					...a,
					variables: t
				})
		},
		"./src/chat/endpoints/users/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/ExperimentVariantsShort.json"),
				o = n("./src/redditGQL/operations/RedditorsInfoByIds.json"),
				i = n("./src/chat/models/Message/report.ts");
			const l = e => {
					var t;
					return Boolean(null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.redditorsInfoByIds)
				},
				d = (e, t) => Object(s.a)(e, {
					method: a.ib.POST,
					endpoint: `${e.apiUrl}/api/report_user`,
					data: {
						reason: t.reason,
						user: t.userNickname
					}
				}),
				u = (e, t, n) => {
					const r = Object(i.c)(t, n);
					return Object(s.a)(e, {
						method: a.ib.POST,
						endpoint: `${e.apiUrl}/api/report_user`,
						data: {
							details: JSON.stringify(r),
							reason: t.reason,
							user: t.userNickname
						}
					})
				},
				h = e => Object(s.a)(e, {
					method: a.ib.GET,
					endpoint: `${e.apiUrl}/prefs/blocked.json`
				}),
				m = e => Object(r.a)(e, {
					...c
				}),
				p = (e, t) => Object(r.a)(e, {
					...o,
					variables: t
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const r = (new Date).setHours(0, 0, 0, 0),
				c = new Intl.DateTimeFormat(void 0, {
					hour: "numeric",
					minute: "2-digit"
				}).format,
				o = e => {
					const t = r - s.A,
						n = new Date(r).setDate(1),
						c = new Date(n).setMonth(0),
						o = new Date(e);
					return e >= r ? a.fbt._("Today", null, {
						hk: "1W0rfJ"
					}) : e >= t ? a.fbt._("Yesterday", null, {
						hk: "2GVGk3"
					}) : e >= n ? l(o) : e >= c ? l(o) : i(o)
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
				O = l.a.wrapped(f, "FallbackAvatarWrapper", g.a),
				E = l.a.wrapped(e => {
					const t = Object(o.e)(m.k),
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
					const b = (e => e.replace(i.Hb.Account + "_", ""))(l),
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
						O = `${d}/avatar_default_${g}_${f}.png`;
					return u = {
						...u,
						backgroundColor: f,
						backgroundImage: `url(${O})`
					}, c.a.createElement("i", {
						className: n,
						style: u
					})
				}, "SnooIcon", g.a);
			class C extends c.a.Component {
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
					return o || !a ? c.a.createElement(O, {
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
			const j = l.a.wrapped(C, "VoicesAvatar", g.a),
				v = Object(d.a)({
					contact: (e, t) => e.contacts.models[t.userId],
					currentUser: e => e.user.account
				}),
				_ = Object(o.b)(v);
			t.a = _(e => {
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
				}) : l ? c.a.createElement(j, {
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
		"./src/chat/icons/svgs/ArrowLeft/index.tsx": function(e, t, n) {
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
			}), e.isFilled ? s.a.createElement("path", {
				d: "M19,9H3.914l7.293-7.293L9.793.293l-9,9a1,1,0,0,0,0,1.414l9,9,1.414-1.414L3.914,11H19Z"
			}) : s.a.createElement("path", {
				d: "M19,9.375H2.509l7.933-7.933L9.558.558l-9,9a.625.625,0,0,0,0,.884l9,9,.884-.884L2.509,10.625H19Z"
			}))
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
			}), e.isFilled ? s.a.createElement("path", {
				d: "M16.8,3.2A9.619,9.619,0,0,0,.491,8.5a9.506,9.506,0,0,0,1.145,6.237l-1.181,3.9a.725.725,0,0,0,.893.907l3.99-1.143a9.5,9.5,0,0,0,4.654,1.218,9.835,9.835,0,0,0,1.551-.124A9.619,9.619,0,0,0,16.8,3.2ZM14,10.75H10.75V14H9.25V10.75H6V9.25H9.25V6h1.5V9.25H14Z"
			}) : s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
				d: "M16.8,3.2A9.619,9.619,0,0,0,.491,8.5a9.506,9.506,0,0,0,1.145,6.237l-1.181,3.9a.725.725,0,0,0,.893.907l3.99-1.143a9.5,9.5,0,0,0,4.654,1.218,9.835,9.835,0,0,0,1.551-.124A9.619,9.619,0,0,0,16.8,3.2Zm1.465,8.176a8.411,8.411,0,0,1-6.919,6.9A8.29,8.29,0,0,1,5.74,17.2l-.232-.138L1.93,18.083l1.063-3.511-.145-.239a8.28,8.28,0,0,1-1.121-5.64,8.377,8.377,0,1,1,16.539,2.678Z"
			}), s.a.createElement("polygon", {
				points: "10.625 6 9.375 6 9.375 9.375 6 9.375 6 10.625 9.375 10.625 9.375 14 10.625 14 10.625 10.625 14 10.625 14 9.375 10.625 9.375 10.625 6"
			})))
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
		"./src/chat/icons/svgs/Close/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"
			}))
		},
		"./src/chat/icons/svgs/DisableNotifications/index.tsx": function(e, t, n) {
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
			}), e.isFilled ? s.a.createElement("g", {
				id: "icons_flat"
			}, s.a.createElement("path", {
				d: "M11,18H9H8c0,1.1,0.9,2,2,2s2-0.9,2-2H11z"
			}), s.a.createElement("path", {
				d: "M19.1,14.9v-0.7c0-1.3-0.7-2.5-1.8-3.3c-0.8-0.5-1.2-1.4-1.2-2.3V7.1c0-3.4-2.7-6.2-6.1-6.2c-1.7,0-3.2,0.7-4.4,1.8 l13.1,13.1C19,15.6,19.1,15.3,19.1,14.9z"
			}), s.a.createElement("path", {
				d: "M19.4,18.5l-18-18L0.6,1.4l3.6,3.6C4,5.7,3.8,6.4,3.9,7.1v1.6c0,0.9-0.4,1.8-1.2,2.3c-1.1,0.7-1.7,2-1.8,3.3v0.7 c0,0.6,0.5,1.1,1.1,1.1h13.2l3.3,3.4L19.4,18.5z"
			})) : s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
				d: "M9,18H8a2,2,0,0,0,4,0H9Z"
			}), s.a.createElement("path", {
				d: "M10,2.184a4.906,4.906,0,0,1,4.9,4.9l0,1.631a3.988,3.988,0,0,0,1.76,3.3,2.739,2.739,0,0,1,1.21,2.275v.556h-.114l.966.966a1.11,1.11,0,0,0,.4-.841v-.681a3.988,3.988,0,0,0-1.761-3.311,2.738,2.738,0,0,1-1.209-2.267L16.15,7.084a6.148,6.148,0,0,0-10.5-4.346l.884.884A4.882,4.882,0,0,1,10,2.184Z"
			}), s.a.createElement("path", {
				d: "M19.442,18.558l-18-18-.884.884L4.194,5.079a6.04,6.04,0,0,0-.344,2l0,1.632A2.737,2.737,0,0,1,2.636,10.98,3.988,3.988,0,0,0,.875,14.291v.681A1.127,1.127,0,0,0,2,16.1H15.212l3.346,3.345ZM2.125,14.847v-.556a2.739,2.739,0,0,1,1.21-2.275,3.988,3.988,0,0,0,1.76-3.3l0-1.633A4.576,4.576,0,0,1,5.215,6.1l8.747,8.748Z"
			})))
		},
		"./src/chat/icons/svgs/Edit/index.tsx": function(e, t, n) {
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
			}), e.isFilled ? s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
				d: "M10.8,4.029,1.214,13.405a1.135,1.135,0,0,0-.339.805V18A1.127,1.127,0,0,0,2,19.125H5.79a1.134,1.134,0,0,0,.8-.338L15.971,9.2Z"
			}), s.a.createElement("path", {
				d: "M18.25,3.159,16.841,1.75a2.634,2.634,0,0,0-3.692-.021L11.692,3.155l5.153,5.153,1.426-1.457A2.634,2.634,0,0,0,18.25,3.159Z"
			})) : s.a.createElement("path", {
				d: "M18.25,3.159,16.841,1.75a2.634,2.634,0,0,0-3.692-.021L1.214,13.405a1.135,1.135,0,0,0-.339.805V18A1.127,1.127,0,0,0,2,19.125H5.79a1.134,1.134,0,0,0,.8-.338L18.271,6.851A2.634,2.634,0,0,0,18.25,3.159ZM5.79,17.875H2.124L2.087,14.3l9.771-9.559,3.4,3.406Zm11.587-11.9L16.136,7.252,12.751,3.867l1.272-1.244a1.381,1.381,0,0,1,1.934.011l1.409,1.409A1.381,1.381,0,0,1,17.377,5.977Z"
			}))
		},
		"./src/chat/icons/svgs/EnableNotifications/index.tsx": function(e, t, n) {
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
				d: "M9,18H8a2,2,0,0,0,4,0H9Z"
			}), s.a.createElement("path", {
				d: "M17.364,10.98a2.738,2.738,0,0,1-1.209-2.267L16.15,7.084a6.15,6.15,0,0,0-12.3,0l0,1.632A2.737,2.737,0,0,1,2.636,10.98,3.988,3.988,0,0,0,.875,14.291v.681A1.127,1.127,0,0,0,2,16.1H18a1.127,1.127,0,0,0,1.125-1.125v-.681A3.988,3.988,0,0,0,17.364,10.98Zm.511,3.867H2.125v-.556a2.739,2.739,0,0,1,1.21-2.275,3.988,3.988,0,0,0,1.76-3.3l0-1.633a4.9,4.9,0,1,1,9.8,0l0,1.631a3.988,3.988,0,0,0,1.76,3.3,2.739,2.739,0,0,1,1.21,2.275Z"
			}))
		},
		"./src/chat/icons/svgs/InviteMember/index.tsx": function(e, t, n) {
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
			}), s.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, s.a.createElement("path", {
				d: "M17.647,19.562h-16A1.126,1.126,0,0,1,.522,18.438v-.5a6.633,6.633,0,0,1,6.625-6.626h5a6.633,6.633,0,0,1,6.625,6.626v.5A1.126,1.126,0,0,1,17.647,19.562ZM1.772,18.312h15.75v-.374a5.382,5.382,0,0,0-5.375-5.376h-5a5.382,5.382,0,0,0-5.375,5.376Z"
			}), s.a.createElement("path", {
				d: "M13.234,6.68h-.456a3.379,3.379,0,1,1-1.2-4h1.652V2.554a4.615,4.615,0,1,0-3.587,7.508,4.6,4.6,0,0,0,3.587-1.741Z"
			}), s.a.createElement("polygon", {
				points: "19.477 4.055 15.859 4.055 15.859 0.438 14.609 0.438 14.609 4.055 10.992 4.055 10.992 5.305 14.609 5.305 14.609 8.923 15.859 8.923 15.859 5.305 19.477 5.305 19.477 4.055"
			})))
		},
		"./src/chat/icons/svgs/Leave/index.tsx": function(e, t, n) {
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
				d: "M10.058,12.558l.884.884,3-3a.625.625,0,0,0,0-.884l-3-3-.884.884,1.933,1.933H1v1.25H11.991Z"
			}), s.a.createElement("path", {
				d: "M16.5.875H6.5A2.629,2.629,0,0,0,3.875,3.5v.833h1.25V3.5A1.377,1.377,0,0,1,6.5,2.125h10A1.377,1.377,0,0,1,17.875,3.5v13A1.377,1.377,0,0,1,16.5,17.875H6.5A1.377,1.377,0,0,1,5.125,16.5v-.833H3.875V16.5A2.629,2.629,0,0,0,6.5,19.125h10A2.629,2.629,0,0,0,19.125,16.5V3.5A2.629,2.629,0,0,0,16.5.875Z"
			}))
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
		"./src/chat/icons/svgs/NavClose/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
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
			const o = e => s.a.createElement(r.a, c({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("polygon", {
				points: "18.442 2.442 17.558 1.558 10 9.116 2.442 1.558 1.558 2.442 9.116 10 1.558 17.558 2.442 18.442 10 10.884 17.558 18.442 18.442 17.558 10.884 10 18.442 2.442"
			}))
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
			const r = 5;

			function c(e) {
				if (e.contact_account_id || e.id) return {
					id: e.contact_account_id || `${a.Hb.Account}_${e.id}`,
					name: e.name,
					created: e.created_utc,
					profileImg: e.profile_img,
					isNSFW: e.profile_over_18,
					acceptChats: e.accept_chats
				}
			}
			const o = {
				id: "",
				name: "",
				profileImg: "",
				created: 0,
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
						version: s,
						isOverride: r
					} = e;
					return {
						id: parseInt(t),
						name: n,
						variant: null != a ? a : "",
						version: s,
						isOverride: null != r && r
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
		"./src/chat/models/RichUnit/index.ts": function(e, t, n) {
			"use strict";
			var a, s;
			n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(a || (a = {})),
				function(e) {
					e.TEXT = "text", e.POLL = "poll", e.LINK = "link", e.IMAGE = "image", e.GALLERY = "gallery"
				}(s || (s = {}))
		},
		"./src/chat/models/Theme/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return x
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "a", (function() {
				return D
			}));
			var a = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/constants/theme.ts"),
				r = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/chat/constants/theme.ts");
			const o = "#006DC6",
				i = "#B44AC0",
				l = "#FF6600",
				d = "#E9EBED",
				u = "#D4D7D9",
				h = "#989CA0",
				m = "#898D90",
				p = "#BE0039",
				b = "#5A5C5E",
				g = "#242424",
				f = "#6A5CFF",
				O = "#5349DA";
			var E = n("./src/reddit/constants/colors.ts"),
				C = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const {
				REDDIT: j,
				NIGHT: v
			} = s.b, _ = e => r.d[e].newRedditTheme;
			var I;
			! function(e) {
				e.NONE = "none", e.UNDERLINE = "underline"
			}(I || (I = {}));
			const x = "22.5";
			var y;
			! function(e) {
				e.BASIC = "basic", e.ORANGERED = "orangered", e.VANITY = "vanity", e.SERIOUS = "serious"
			}(y || (y = {}));
			const S = {
					[y.ORANGERED]: {
						stops: [{
							offset: "11.68%",
							color: p
						}, {
							offset: "88.32%",
							color: l
						}]
					},
					[y.VANITY]: {
						stops: [{
							offset: "11.68%",
							color: O
						}, {
							offset: "88.32%",
							color: i
						}]
					},
					[y.SERIOUS]: {
						stops: [{
							offset: "11.68%",
							color: o
						}, {
							offset: "88.32%",
							color: f
						}]
					}
				},
				w = e => {
					return `linear-gradient(22.5deg, ${S[e].stops.map(e=>`${e.color} ${e.offset}`).join(", ")})`
				},
				N = {
					bubble: {
						background: w(y.VANITY),
						color: E.b.white,
						border: E.b.transparent,
						link: {
							color: E.b.white,
							textDecoration: I.UNDERLINE
						},
						channelsFilter: {
							background: w(y.VANITY),
							selected: E.b.white
						}
					}
				},
				T = {
					bubble: {
						background: w(y.SERIOUS),
						color: E.b.white,
						border: E.b.transparent,
						link: {
							color: E.b.white,
							textDecoration: I.UNDERLINE
						},
						channelsFilter: {
							background: w(y.SERIOUS),
							selected: E.b.white
						}
					}
				},
				M = {
					bubble: {
						background: w(y.ORANGERED),
						color: E.b.white,
						border: E.b.transparent,
						link: {
							color: E.b.white,
							textDecoration: I.UNDERLINE
						},
						channelsFilter: {
							background: w(y.ORANGERED),
							selected: E.b.white
						}
					}
				},
				k = {
					activity: {
						icon: {
							default: _(j).actionIcon,
							active: E.b.op,
							disable: Object(a.a)(.5, E.b.white),
							hover: Object(a.a)(.5, E.b.white),
							contrast: _(j).bodyText,
							nsfw: {
								bg: E.b.black,
								text: E.b.white
							}
						},
						text: {
							regular: _(j).bodyText,
							active: E.b.op,
							fade: Object(a.a)(.4, E.b.white),
							light: _(j).actionIcon,
							warning: E.b.warning,
							highlight: E.b.white,
							success: E.b.approved,
							meta: _(j).metaText
						},
						button: {
							primary: E.b.alienblue,
							secondary: _(j).metaText,
							chatFilterColor: b
						},
						buttonSecondary: {
							active: E.b.alienblue
						},
						send: {
							disable: Object(a.a)(.5, E.b.white),
							hover: Object(a.a)(.08, E.b.op)
						},
						checkbox: {
							checked: E.b.alienblue,
							checkmark: E.b.white,
							unchecked: _(j).body,
							uncheckedBorder: Object(a.a)(.3, E.b.white)
						},
						input: {
							border: E.b.defaultFlair,
							focusColor: E.b.white,
							focusBg: E.b.approved,
							ownerBg: _(j).line,
							color: _(j).bodyText,
							error: E.b.warning,
							channelRename: Object(a.a)(.1, E.b.white),
							background: Object(a.f)(Object(a.a)(.3, E.b.white), .1)
						},
						link: {
							staticUnderline: E.b.alienblue,
							staticText: E.b.op,
							hoverText: E.b.snoo
						},
						minimizedPortal: {
							backgroundColor: {
								unreadInitial: _(j).active,
								unreadFinal: _(j).highlight
							},
							color: {
								unreadInitial: E.b.white,
								unreadFinal: E.b.black
							}
						}
					},
					layout: {
						body: _(j).body,
						colsBorder: _(j).line,
						controlsBorder: Object(a.f)(E.b.black, .15),
						header: {
							counterBg: E.b.snoo,
							counterText: E.b.white
						},
						scrollbar: Object(a.a)(.2, E.b.white),
						scrollbarHover: Object(a.a)(.4, E.b.white),
						timeStamp: {
							tooltip: {
								background: _(j).body
							}
						},
						dropdown: {
							border: E.b.transparent
						},
						overlayBackground: E.b.overlayBackground
					},
					message: {
						list: {
							item: {
								ownerBg: _(j).inactive,
								button: _(j).actionIcon,
								richItem: _(j).metaText,
								richItemBorder: _(j).postLine,
								onlineIndicator: E.b.approved,
								white: E.b.white
							}
						}
					},
					subreddit: {
						iconBg: E.b.alienblue
					},
					sidebar: {
						background: Object(a.f)(Object(a.a)(.3, E.b.white), .1),
						subreddit: {
							background: {
								active: E.b.alienblue,
								hover: _(j).canvas
							}
						},
						basic: {
							background: {
								active: E.b.alienblue,
								hover: _(j).canvas
							}
						},
						text: {
							divider: Object(a.a)(.5, E.b.white)
						},
						item: {
							hover: _(j).field,
							active: _(j).postLine,
							selected: _(j).inactive,
							text: {
								active: _(j).titleText
							}
						},
						footer: {
							background: _(j).field
						}
					},
					toast: {
						pending: E.b.black,
						success: E.b.approved,
						error: E.b.orangered
					},
					skeleton: {
						field: _(j).field,
						inactive: _(j).inactive
					},
					boxShadow: Object(a.f)(20, 120, 120, .11),
					bubbleActions: {
						hover: _(j).line
					},
					bubble: {
						background: E.b.transparent,
						color: _(j).bodyText,
						border: _(j).line,
						link: {
							color: E.b.op,
							textDecoration: I.NONE
						},
						channelsFilter: {
							background: d,
							selected: b
						}
					},
					editName: Object(a.a)(.1, _(j).inactive),
					uploads: {
						progress: {
							background: u,
							bar: o
						}
					},
					prompt: {
						tooltip: {
							background: o
						}
					}
				},
				A = {
					activity: {
						icon: {
							default: _(v).postIcon,
							active: E.b.alienblue,
							disable: Object(a.a)(.5, E.b.white),
							hover: Object(a.a)(.5, E.b.white),
							contrast: Object(a.a)(.4, _(v).bodyText),
							nsfw: {
								bg: E.b.black,
								text: E.b.white
							}
						},
						text: {
							regular: _(v).bodyText,
							active: E.b.op,
							fade: Object(a.a)(.4, E.b.white),
							light: _(v).actionIcon,
							warning: E.b.warning,
							highlight: E.b.white,
							success: E.b.approved,
							meta: _(v).metaText
						},
						button: {
							primary: E.b.alienblue,
							secondary: _(v).metaText,
							chatFilterColor: m
						},
						buttonSecondary: {
							active: E.b.lightboxHeaderText
						},
						send: {
							disable: Object(a.a)(.5, E.b.white),
							hover: Object(a.a)(.08, E.b.op)
						},
						checkbox: {
							checked: E.b.alienblue,
							checkmark: E.b.white,
							unchecked: _(v).body,
							uncheckedBorder: Object(a.a)(.3, E.b.white)
						},
						input: {
							border: E.b.defaultFlair,
							focusColor: E.b.white,
							focusBg: E.b.approved,
							ownerBg: _(v).line,
							color: _(v).bodyText,
							error: E.b.warning,
							channelRename: Object(a.a)(.1, E.b.white),
							background: Object(a.f)(Object(a.a)(.3, E.b.white), .1)
						},
						link: {
							staticUnderline: E.b.alienblue,
							staticText: E.b.op,
							hoverText: E.b.snoo
						},
						minimizedPortal: {
							backgroundColor: {
								unreadInitial: _(v).active,
								unreadFinal: _(v).highlight
							},
							color: {
								unreadInitial: E.b.white,
								unreadFinal: E.b.white
							}
						}
					},
					layout: {
						body: _(v).body,
						colsBorder: _(v).line,
						controlsBorder: Object(a.f)(E.b.white, .15),
						header: {
							counterBg: E.b.snoo,
							counterText: E.b.white
						},
						scrollbar: Object(a.a)(.2, _(v).bodyText),
						scrollbarHover: Object(a.a)(.1, _(v).bodyText),
						timeStamp: {
							tooltip: {
								background: _(v).inactive
							}
						},
						dropdown: {
							border: _(v).line
						},
						overlayBackground: E.b.overlayBackground
					},
					message: {
						list: {
							item: {
								ownerBg: _(v).inactive,
								button: _(v).actionIcon,
								richItem: _(v).metaText,
								richItemBorder: C.a.metaText,
								onlineIndicator: E.b.approved,
								white: E.b.white
							}
						}
					},
					subreddit: {
						iconBg: E.b.alienblue
					},
					sidebar: {
						background: Object(a.f)(Object(a.a)(.4, E.b.white), .1),
						subreddit: {
							background: {
								active: E.b.alienblue,
								hover: Object(a.g)(.2, _(v).canvas)
							}
						},
						basic: {
							background: {
								active: E.b.alienblue,
								hover: Object(a.g)(.2, _(v).canvas)
							}
						},
						text: {
							divider: Object(a.a)(.5, E.b.white)
						},
						item: {
							hover: _(v).field,
							active: _(v).postLine,
							selected: _(v).placeholder,
							text: {
								active: _(v).titleText
							}
						},
						footer: {
							background: _(v).field
						}
					},
					toast: {
						pending: E.b.black,
						success: E.b.approved,
						error: E.b.orangered
					},
					skeleton: {
						field: _(v).field,
						inactive: _(v).inactive
					},
					boxShadow: Object(a.f)(20, 120, 120, 0),
					bubbleActions: {
						hover: _(v).field
					},
					bubble: {
						background: E.b.transparent,
						color: _(v).bodyText,
						border: _(v).line,
						link: {
							color: E.b.op,
							textDecoration: I.NONE
						},
						channelsFilter: {
							background: g,
							selected: h
						}
					},
					editName: _(v).inactive,
					uploads: {
						progress: {
							background: u,
							bar: o
						}
					},
					prompt: {
						tooltip: {
							background: o
						}
					}
				},
				P = {
					[c.b.REDDIT]: k,
					[c.b.NIGHT]: A
				},
				L = {
					[y.ORANGERED]: M,
					[y.VANITY]: N,
					[y.SERIOUS]: T
				},
				D = [y.BASIC, y.ORANGERED, y.VANITY, y.SERIOUS]
		},
		"./src/chat/models/Uploads/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			}));
			var a, s, r, c, o = n("./node_modules/uuid/v4.js"),
				i = n.n(o);
			! function(e) {
				e.Pending = "PENDING", e.Submit = "SUBMIT", e.Uploading = "UPLOADING", e.Processing = "PROCESSING", e.Success = "SUCCESS", e.Failed = "FAILED", e.Canceled = "CANCELED"
			}(a || (a = {})),
			function(e) {
				e.Drop = "drop", e.Gallery = "gallery"
			}(s || (s = {})),
			function(e) {
				e.PNG = "PNG", e.GIF = "GIF", e.JPEG = "JPEG"
			}(r || (r = {})),
			function(e) {
				e[e.UnsupportedBrowser = 0] = "UnsupportedBrowser", e[e.InvalidMediaType = 1] = "InvalidMediaType", e[e.FileSizeLimitExceeded = 2] = "FileSizeLimitExceeded", e[e.ActiveFilesLimitExceeded = 3] = "ActiveFilesLimitExceeded"
			}(c || (c = {}));
			const l = (e, t, n) => ({
				id: i()(),
				file: e,
				source: n,
				status: a.Pending,
				metadata: t
			})
		},
		"./src/chat/models/User/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return o
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/convertToCamelCase/index.ts");
			const r = `${a.Hb.Account}_`,
				c = e => {
					if (null == e ? void 0 : e.length) return e.reduce((e, t) => {
						const n = function(e) {
							var t;
							return (null == e ? void 0 : e.profile) && {
								id: e.id,
								name: e.name,
								created: e.profile && new Date(e.profile.createdAt).getTime(),
								profileImg: e.profile.styles.icon || e.profile.styles.legacyIcon.url,
								isNSFW: e.profile.isNsfw,
								totalKarma: null === (t = e.karma) || void 0 === t ? void 0 : t.total
							}
						}(t);
						return n ? {
							...e,
							[n.id]: n
						} : e
					}, {})
				};
			const o = e => {
				const t = (e => (e && e.id && (e.id.includes(r) ? e.id = e.id : e.id = r + e.id), e))(e);
				return Object(s.a)(t)
			}
		},
		"./src/chat/reducers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Kt
			}));
			var a = n("./node_modules/redux/es/redux.js"),
				s = n("./src/chat/actions/channelsFilter/index.ts"),
				r = n("./src/chat/models/Channel/index.ts");
			const c = {
				selectedJoinedFilter: r.b.ALL,
				selectedInvitedFilter: r.b.ALL
			};
			var o = (e = c, t) => {
					switch (t.type) {
						case s.b: {
							const {
								payload: {
									isForInvitedChannels: n,
									filter: a
								}
							} = t;
							return {
								...e,
								...Object(r.d)(e, a, n)
							}
						}
						case s.a:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				i = n("./node_modules/lodash/keyBy.js"),
				l = n.n(i),
				d = n("./node_modules/lodash/omit.js"),
				u = n.n(d),
				h = n("./src/chat/actions/channel/draftMessage.ts");
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case h.b:
							return {
								...e, [t.payload.channelId]: t.payload
							};
						case h.a:
							return {
								...e, ...l()(t.payload, "channelId")
							};
						case h.c:
							return u()(e, t.payload);
						default:
							return e
					}
				},
				b = n("./src/chat/actions/channel.ts");
			var g = (e = !1, t) => {
					switch (t.type) {
						case b.s:
							return !0;
						default:
							return e
					}
				},
				f = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/uniq.js")),
				O = n.n(f),
				E = n("./src/chat/models/Channel/utils.ts");
			const C = {
				fetchingChannels: !1,
				hasMoreChannels: !1,
				sortedKeys: []
			};
			var j = (e = C, t) => {
				switch (t.type) {
					case b.i:
						return {
							...e, fetchingChannels: !0
						};
					case b.j:
						return {
							...e, fetchingChannels: !1
						};
					case b.a: {
						const {
							channels: n,
							hasMoreChannels: a
						} = t.payload, s = Object(E.c)(n, [r.a.Direct, r.a.Group]);
						if (!s) return e;
						const c = Object.keys(s),
							o = a && !!c.length;
						return {
							...e,
							fetchingChannels: !1,
							hasMoreChannels: o,
							sortedKeys: [...e.sortedKeys, ...c]
						}
					}
					case b.t:
					case b.n: {
						const {
							channelId: n
						} = t.payload;
						return {
							...e,
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						}
					}
					case b.x: {
						const n = t.payload.channel.channelId;
						return e.sortedKeys.indexOf(n) > -1 ? {
							...e,
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						} : e
					}
					case b.w: {
						const {
							channel: n
						} = t.payload;
						return e.sortedKeys.includes(n.channelId) ? e : {
							...e,
							sortedKeys: O()([n.channelId, ...e.sortedKeys])
						}
					}
					default:
						return e
				}
			};
			var v = (e = !1, t) => {
					switch (t.type) {
						case b.c:
							return !1;
						case b.h:
							return !0;
						default:
							return e
					}
				},
				_ = n("./src/chat/actions/message/index.ts");
			const I = {
				fetchingChannels: !1,
				hasMoreChannels: !0,
				sortedKeys: []
			};
			var x = (e = I, t) => {
					switch (t.type) {
						case b.k:
							return {
								...e, fetchingChannels: !0
							};
						case b.l:
							return {
								...e, fetchingChannels: !1
							};
						case b.b: {
							const {
								channels: n,
								hasMoreChannels: a
							} = t.payload, s = Object(E.c)(n, [r.a.Direct, r.a.Group]);
							if (!s) return e;
							const c = Object.keys(s),
								o = a && !!c.length;
							return {
								...e,
								fetchingChannels: !1,
								hasMoreChannels: o,
								sortedKeys: [...e.sortedKeys, ...c]
							}
						}
						case b.n: {
							const {
								channelId: n
							} = t.payload;
							return {
								...e,
								sortedKeys: e.sortedKeys.filter(e => e !== n)
							}
						}
						case b.t: {
							const {
								channelId: n
							} = t.payload;
							return {
								...e,
								sortedKeys: [n, ...e.sortedKeys]
							}
						}
						case b.g: {
							const n = Object.keys(t.payload);
							return {
								...e,
								sortedKeys: O()([...n, ...e.sortedKeys])
							}
						}
						case b.u:
						case _.a: {
							const {
								channelId: n
							} = t.payload;
							return e.sortedKeys.includes(n) ? {
								...e,
								sortedKeys: O()([n, ...e.sortedKeys])
							} : e
						}
						default:
							return e
					}
				},
				y = n("./src/chat/actions/channel/messageQuickReply.ts");
			const S = {};
			var w = (e = S, t) => {
					switch (t.type) {
						case y.MESSAGE_QUICK_REPLY_ADD_USER_ID:
							return {
								...e, [t.payload]: t.payload
							};
						case y.MESSAGE_QUICK_REPLY_REMOVE_USER_ID:
							return u()(e, t.payload);
						default:
							return e
					}
				},
				N = n("./node_modules/lodash/first.js"),
				T = n.n(N),
				M = n("./node_modules/lodash/reduce.js"),
				k = n.n(M),
				A = n("./src/chat/actions/channel/dropdown.ts"),
				P = n("./src/chat/actions/message/inboxScroller.ts"),
				L = n("./src/chat/constants/channels.ts");
			const D = {};
			var U = (e = D, t) => {
				switch (t.type) {
					case b.g:
						return {
							...e, ...t.payload
						};
					case b.b:
					case b.a: {
						const {
							channels: n
						} = t.payload, a = k()(e, (e, t, a) => n[a] && t.channelState === L.b.PARTIAL && (e[a] = n[a]) && e || e, {});
						return {
							...n,
							...e,
							...a
						}
					}
					case b.p: {
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
					case b.t: {
						const {
							channelId: n
						} = t.payload, a = {
							...e[n],
							channelState: L.b.JOINED
						};
						return {
							...e,
							[a.channelId]: a
						}
					}
					case b.x: {
						const n = t.payload.channel,
							a = {
								...e[n.channelId],
								...u()(n, "hasMoreMessages", "isMessageListLoaded")
							},
							s = {
								[n.channelId]: a
							};
						return {
							...e,
							...s
						}
					}
					case b.w: {
						const n = t.payload.channel,
							a = {
								...e[n.channelId],
								...n,
								channelState: L.b.INVITED
							},
							s = {
								[n.channelId]: a
							};
						return {
							...e,
							...s
						}
					}
					case b.v: {
						const {
							channel: n
						} = t.payload;
						return {
							...e,
							[n.channelId]: n
						}
					}
					case b.n: {
						const {
							channelId: n
						} = t.payload;
						return u()(e, n)
					}
					case A.a: {
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
					case _.a: {
						const n = t.payload.channelId,
							a = Number(T()(Object.keys(t.payload.message))),
							s = {
								...e[n],
								lastMessage: t.payload.message[a]
							};
						return {
							...e,
							[n]: s
						}
					}
					case _.g: {
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
					case _.b:
					case _.e: {
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
					case _.f: {
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
					case b.m: {
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
					case P.b: {
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
			const R = {
				channelId: void 0,
				isLoaded: !1
			};
			var B = (e = R, t) => {
				switch (t.type) {
					case b.q: {
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
					case b.r:
						return {
							...e, isLoaded: !0
						};
					case b.n:
						return t.payload.channelId !== e.channelId ? e : {
							...e,
							channelId: ""
						};
					default:
						return e
				}
			};
			var F = Object(a.c)({
					channelsFilter: o,
					draftMessages: p,
					firstLoaded: g,
					invited: j,
					inviteListExpanded: v,
					isCreatingChannel: (e = !1, t) => {
						switch (t.type) {
							case b.f:
								return !0;
							case b.g:
							case b.e:
							case b.d:
								return !1;
							default:
								return e
						}
					},
					joined: x,
					models: U,
					selected: B,
					messageQuickReplyUsers: w
				}),
				H = n("./src/chat/actions/user.ts");
			var G = (e = !1, t) => {
					switch (t.type) {
						case H.b:
							return !0;
						default:
							return e
					}
				},
				V = n("./node_modules/lodash/values.js"),
				z = n.n(V),
				W = n("./src/chat/actions/sendbird/index.ts");
			const K = "search",
				Z = "contacts",
				q = {};
			var Q = (e = q, t) => {
				switch (t.type) {
					case W.f:
						return {
							...e, ...t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: Z
							}, e), {})
						};
					case W.b:
						return {
							...t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: Z
							}, e), {}), ...e
						};
					case W.d: {
						const n = t.payload.username;
						return {
							...e,
							[n]: {
								loaded: !1,
								userId: null,
								valid: !1,
								method: K
							}
						}
					}
					case W.e: {
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
								method: K
							}
						}
					}
					case H.i: {
						const n = t.payload;
						return {
							...e,
							...z()(n).reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: K
							}, e), {})
						}
					}
					case H.c: {
						const {
							username: n
						} = t.payload;
						return n ? u()(e, n) : e
					}
					default:
						return e
				}
			};
			const J = {};
			var X = (e = J, t) => {
				switch (t.type) {
					case W.f:
						return {
							...e, ...t.payload.reduce((t, n) => (t[n.id] = {
								...e[n.id],
								...n
							}, t), {})
						};
					case W.e: {
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
					case H.i:
						return {
							...e, ...t.payload || {}
						};
					case H.c: {
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
					case H.b: {
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
			const Y = [];
			var $ = (e = Y, t) => {
				switch (t.type) {
					case H.h:
						return [...e, t.payload];
					case H.k:
						return e.filter(e => e !== t.payload);
					case H.j:
						return Y;
					default:
						return e
				}
			};
			const ee = [];
			var te = (e = ee, t) => {
					switch (t.type) {
						case W.f:
							return [...e, ...t.payload.map(e => e.id)];
						case H.c:
							return e.filter(e => e !== t.payload.userId);
						default:
							return e
					}
				},
				ne = Object(a.c)({
					fetchedBlockedUsers: G,
					knownContacts: Q,
					models: X,
					selectedUserIds: $,
					suggestedKeys: te
				}),
				ae = n("./src/chat/actions/container.ts"),
				se = n("./src/chat/constants/container.ts");
			const re = {
				size: se.a.EMBED,
				isFocused: !1
			};
			var ce = (e = re, t) => {
					switch (t.type) {
						case ae.SIZE_CHANGED:
							return se.b[t.payload] ? {
								...e,
								size: t.payload
							} : e;
						case ae.FOCUS_CHANGED:
							return {
								...e, isFocused: !e.isFocused
							};
						default:
							return e
					}
				},
				oe = n("./src/lib/env/index.ts"),
				ie = n("./src/chat/actions/experiments/index.ts"),
				le = n("./src/chat/models/Experiment/index.ts");
			const de = {
				api: {
					isPending: !1,
					errors: []
				},
				models: {}
			};
			var ue = (e = de, t) => {
					var n;
					switch (t.type) {
						case ie.c:
							return {
								...e, api: {
									...e.api,
									isPending: !0,
									errors: []
								}
							};
						case ie.b: {
							const a = Object(oe.b)() ? null : null === (n = null == t ? void 0 : t.payload) || void 0 === n ? void 0 : n.queryParams,
								s = Object(le.b)(t.payload.data),
								r = ((e, t) => {
									var n, a;
									const s = {};
									if (t) {
										const r = /^experiment_(.*)$/i,
											c = e => {
												const t = e.match(r);
												if (null !== t) return t[1]
											};
										for (const o in t) {
											const r = c(o);
											if (r) {
												const c = e[r.toLowerCase()] || {};
												s[r.toLowerCase()] = {
													...c,
													name: r.toLowerCase(),
													variant: t[o] || "",
													isOverride: !0,
													id: null !== (n = null == c ? void 0 : c.id) && void 0 !== n ? n : -1,
													version: null !== (a = null == c ? void 0 : c.version) && void 0 !== a ? a : "-1"
												}
											}
										}
									}
									return s
								})(s, a);
							return {
								...e,
								models: {
									...e.models,
									...s,
									...r
								},
								api: {
									...e.api,
									isPending: !1
								}
							}
						}
						case ie.a:
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
				he = n("./src/chat/actions/gifs/index.ts");
			const me = {
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
			var pe = (e = me, t) => {
					var n, a, s;
					switch (t.type) {
						case he.c:
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
						case he.f:
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
						case he.d:
							return {
								...e, models: {
									...e.models,
									...l()(t.payload.models, "id")
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
						case he.g:
							return {
								...e, models: {
									...e.models,
									...l()(t.payload.gifsData.models, "id")
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
											ids: [...(null === (s = e.search.models[e.search.inputQuery]) || void 0 === s ? void 0 : s.ids) || [], ...t.payload.gifsData.models.map(e => e.id)]
										}
									}
								}
							};
						case he.b:
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
						case he.e:
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
						case he.h:
							return {
								...e, search: {
									...e.search,
									inputQuery: t.payload
								}
							};
						case he.a:
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
				be = n("./node_modules/lodash/toArray.js"),
				ge = n.n(be),
				fe = n("./node_modules/lodash/uniqBy.js"),
				Oe = n.n(fe),
				Ee = n("./src/chat/actions/members.ts");
			const Ce = {};
			var je = (e = Ce, t) => {
				switch (t.type) {
					case Ee.b: {
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
					case Ee.c: {
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
					case Ee.a: {
						const {
							channelId: n,
							members: a
						} = t.payload, s = ge()(a), r = e[n] && e[n].model || [], c = Oe()([...r, ...s], "id");
						return {
							...e,
							[n]: {
								...e[n],
								model: c
							}
						}
					}
					case Ee.d:
						return {};
					default:
						return e
				}
			};
			var ve = (e = !1, t) => {
				switch (t.type) {
					case _.b:
					case _.l:
						return !0;
					default:
						return e
				}
			};
			const _e = {};
			var Ie = (e = _e, t) => {
				switch (t.type) {
					case _.b: {
						const {
							messages: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case _.a:
						return {
							...e, ...t.payload.message
						};
					case _.i:
						return {
							...e, ...t.payload
						};
					case _.d:
					case _.j:
						return u()(e, t.payload);
					case _.e: {
						const {
							messages: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case b.o: {
						const n = t.payload;
						return {
							...u()(e, ...n)
						}
					}
					case P.a: {
						const {
							messageIdList: n
						} = t.payload;
						return u()(e, n)
					}
					case _.n: {
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
					case _.h: {
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
			const xe = {};
			var ye = (e = xe, t) => {
					var n, a;
					switch (t.type) {
						case _.i: {
							const s = z()(t.payload);
							if (s.length && (null === (a = null === (n = s[0]) || void 0 === n ? void 0 : n.messageData) || void 0 === a ? void 0 : a.clientMessageId)) {
								const t = s[0].messageData.clientMessageId;
								return {
									...u()(e, t)
								}
							}
							return e
						}
						case _.c: {
							const n = t.payload;
							return {
								...e,
								[n.clientMessageId]: n
							}
						}
						case _.m: {
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
						case _.a:
						case _.k: {
							const {
								clientMessageId: n
							} = t.payload;
							return {
								...n ? u()(e, n) : e
							}
						}
						default:
							return e
					}
				},
				Se = n("./src/chat/actions/message/richUnit.ts");
			const we = {
					posts: {},
					userPosts: {},
					comments: {},
					subreddits: {},
					dataReceived: !1
				},
				Ne = e => e.length ? e.reduce((e, t) => (null == t ? void 0 : t.id) ? {
					...e,
					[t.id.toLowerCase()]: t
				} : e, {}) : {};
			var Te = (e = we, t) => {
					var n, a, s, r;
					switch (t.type) {
						case Se.b:
							return {
								...e, posts: {
									...e.posts,
									...Ne((null === (n = t.payload) || void 0 === n ? void 0 : n.posts) || {})
								}, userPosts: {
									...e.userPosts,
									...Ne((null === (a = t.payload) || void 0 === a ? void 0 : a.userPosts) || {})
								}, comments: {
									...e.comments,
									...Ne((null === (s = t.payload) || void 0 === s ? void 0 : s.comments) || {})
								}, subreddits: {
									...e.subreddits,
									...Ne((null === (r = t.payload) || void 0 === r ? void 0 : r.subreddits) || {})
								}, dataReceived: !0
							};
						case Se.a:
							return {
								...e, dataReceived: !1
							};
						default:
							return e
					}
				},
				Me = n("./node_modules/lodash/isEqual.js"),
				ke = n.n(Me),
				Ae = n("./src/chat/actions/message/unreadCount.ts");
			const Pe = {
				unreadMessages: 0,
				hasNewMessages: !1
			};
			var Le = (e = Pe, t) => {
					switch (t.type) {
						case Ae.a:
							return ke()(e, t.payload) ? e : {
								...e,
								...t.payload
							}
					}
					return e
				},
				De = Object(a.c)({
					firstLoaded: ve,
					models: Ie,
					pending: ye,
					unread: Le,
					richUnits: Te
				}),
				Ue = n("./src/chat/reducers/meta/index.ts"),
				Re = n("./src/chat/reducers/platform/index.ts"),
				Be = n("./src/chat/actions/sendbird/config.ts");
			const Fe = {
				maxMessageLength: void 0
			};
			var He = (e = Fe, t) => {
				switch (t.type) {
					case Be.b:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Ge = {
				host: void 0
			};
			var Ve = (e = Ge, t) => {
					switch (t.type) {
						case Be.c:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				ze = n("./src/chat/actions/sendbird/sdk.ts"),
				We = n("./src/chat/constants/sendbird.ts");
			const Ke = {
				connectionStatus: We.b.Closed,
				initialized: !1
			};
			var Ze = (e = Ke, t) => {
				switch (t.type) {
					case ze.a:
						return {
							...e, initialized: !0, connectionStatus: We.b.Open
						};
					case ze.c: {
						const n = {
							...t.payload
						};
						return {
							...e,
							error: n,
							connectionStatus: We.b.Closed
						}
					}
					case ze.b:
						return {
							...e, connectionStatus: We.b.Closed
						};
					case ze.d: {
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
			var Qe = (e = qe, t) => {
					switch (t.type) {
						case W.g:
							return {
								...e, ...t.payload
							};
						case W.a:
							return {
								...e, active: !0
							};
						case W.c:
							return {
								...e, active: !1
							};
						default:
							return e
					}
				},
				Je = Object(a.c)({
					globalSettings: He,
					proxy: Ve,
					session: Qe,
					sdk: Ze
				}),
				Xe = n("./src/chat/reducers/sidebar/sideBarAppearance/index.ts"),
				Ye = Object(a.c)({
					sideBarAppearance: Xe.b
				}),
				$e = n("./src/chat/actions/sitewideRules.ts");
			const et = [];
			var tt = (e = et, t) => {
					switch (t.type) {
						case $e.a:
							return t.payload;
						default:
							return e
					}
				},
				nt = n("./src/chat/reducers/subscribe.ts"),
				at = n("./src/chat/actions/sidebar.ts"),
				st = n("./src/chat/actions/theme.ts"),
				rt = n("./src/chat/constants/theme.ts"),
				ct = n("./src/chat/models/Theme/index.ts");
			const ot = {
				current: ct.e[rt.a],
				chatTheme: null,
				chatThemeKey: ct.c.BASIC,
				chatPreviewThemeKey: ct.c.BASIC,
				cached: {},
				isShowPrompt: !0,
				isShowSparkles: !0
			};
			var it = (e = ot, t) => {
					switch (t.type) {
						case st.GLOBAL_THEME_CHANGED:
							return e.current = ct.e[t.payload.themeKey], {
								...e
							};
						case st.CHAT_THEME_CHANGED:
							return {
								...e, chatTheme: ct.b[t.payload.themeKey], chatPreviewThemeKey: t.payload.themeKey
							};
						case st.CHAT_THEME_APPLIED:
							return {
								...e, chatThemeKey: t.payload.themeKey
							};
						case st.CHAT_THEME_CANCELED:
							return {
								...e, chatTheme: e.chatThemeKey ? ct.b[e.chatThemeKey] : null, chatPreviewThemeKey: e.chatThemeKey
							};
						case st.CHAT_THEME_SETTINGS_CLICKED:
							return {
								...e, isShowPrompt: !1, isShowSparkles: !1
							};
						case st.CHAT_THEME_PROMPT_CLICKED:
							return {
								...e, isShowPrompt: !1
							};
						case st.CHAT_THEME_RESTORED:
							return {
								...e, chatTheme: ct.b[t.payload.themeKey], chatThemeKey: t.payload.themeKey, chatPreviewThemeKey: t.payload.themeKey
							};
						case st.CHAT_THEME_SHOW_PROMPT_COUNT_SET:
							return {
								...e, isShowPrompt: t.payload <= st.MAX_SHOW_PROMPT_COUNT, isShowSparkles: t.payload <= st.MAX_SHOW_COLORED_SETTINGS
							};
						case at.b:
							return t.payload === Xe.a.THEMES ? {
								...e,
								isShowPrompt: !1
							} : e;
						default:
							return e
					}
				},
				lt = n("./src/chat/actions/toast.ts");
			var dt = (e = null, t) => {
					switch (t.type) {
						case lt.a:
							return null;
						case lt.b: {
							const {
								toast: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				ut = n("./src/chat/actions/platform.ts"),
				ht = n("./src/chat/actions/tooltip.ts");
			var mt = (e = null, t) => {
					switch (t.type) {
						case ht.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case ht.b:
						case ut.a:
							return null;
						default:
							return e
					}
				},
				pt = n("./src/chat/actions/typingIndicator.ts");
			const bt = {
				usernames: []
			};
			var gt = (e = bt, t) => {
					switch (t.type) {
						case pt.a: {
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
						case b.q:
							return {
								usernames: []
							};
						default:
							return e
					}
				},
				ft = n("./src/chat/actions/uploads/index.ts"),
				Ot = n("./src/chat/models/Uploads/index.ts");
			const Et = {};
			var Ct = (e = Et, t) => {
				switch (t.type) {
					case ft.a: {
						const {
							channelId: n,
							upload: {
								id: a
							}
						} = t.payload;
						return {
							[n]: [...new Set([...e[n] || [], a])]
						}
					}
					case ft.c: {
						const {
							id: n,
							channelId: a,
							status: s
						} = t.payload;
						if (s === Ot.c.Submit) return {
							[a]: []
						};
						if (s === Ot.c.Canceled) {
							const t = new Set([...e[a] || []]);
							return {
								[a]: [...t.delete(n) && t || t]
							}
						}
						return e
					}
					case b.q: {
						const {
							channelId: e
						} = t.payload;
						return {
							[e]: []
						}
					}
					default:
						return e
				}
			};
			var jt = (e = !1, t) => {
				switch (t.type) {
					case ft.e:
						return t.payload.isDrop;
					case lt.b:
					case ft.a:
						return !1;
					default:
						return e
				}
			};
			var vt = (e = !1, t) => {
				switch (t.type) {
					case ft.e:
						return t.payload.isOver;
					default:
						return e
				}
			};
			const _t = {};
			ft.c;
			var It = (e = _t, t) => {
					switch (t.type) {
						case ft.a: {
							const {
								upload: n
							} = t.payload;
							return {
								...e,
								[n.id]: {
									...n,
									status: Ot.c.Pending
								}
							}
						}
						case ft.c: {
							const {
								id: n,
								status: a
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									status: a
								}
							}
						}
						case ft.b: {
							const {
								id: n,
								progress: a
							} = t.payload, s = e[n];
							return {
								...e,
								[n]: {
									...s,
									progress: a
								}
							}
						}
						default:
							return e
					}
				},
				xt = n("./src/chat/actions/uploads/prompt.ts");
			const yt = {
				count: 0
			};
			var St = (e = yt, t) => {
					switch (t.type) {
						case xt.a:
							return {
								count: t.payload
							};
						default:
							return e
					}
				},
				wt = Object(a.c)({
					activeUploads: Ct,
					isDrop: jt,
					isOver: vt,
					models: It,
					prompt: St
				}),
				Nt = n("./src/lib/reducers/addAuthentication/index.ts");
			var Tt = Object(Nt.a)((e = null, t) => {
				switch (t.type) {
					case H.a: {
						const e = t.payload.profileImg || t.payload.subreddit && t.payload.subreddit.icon_img || t.payload.iconImg;
						return {
							id: t.payload.id,
							name: t.payload.name,
							profileImg: e,
							features: t.payload.features,
							prefNightmode: t.payload.prefNightmode,
							inChat: t.payload.inChat,
							created: t.payload.created,
							isNSFW: t.payload.isNSFW
						}
					}
					default:
						return e
				}
			}, null);
			const Mt = {
				userSubredditChatEnabled: !1
			};
			var kt = (e = Mt, t) => {
				switch (t.type) {
					case Be.a: {
						const {
							userSubredditChatEnabled: n
						} = t.payload || Mt;
						return {
							...e,
							...t.payload,
							userSubredditChatEnabled: e.userSubredditChatEnabled || n
						}
					}
					default:
						return e
				}
			};
			const At = {};
			var Pt = (e = At, t) => {
				switch (t.type) {
					case H.d:
						return t.payload;
					default:
						return e
				}
			};
			const Lt = n("./src/lib/constants/index.ts").C;
			var Dt = Object(Nt.a)((e = Lt, t) => (t.type, e), Lt);
			const Ut = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var Rt = (e = Ut, t) => {
				switch (t.type) {
					case H.e:
						return t.payload;
					default:
						return e
				}
			};
			const Bt = {
				globalTheme: rt.a
			};
			var Ft = (e = Bt, t) => {
				switch (t.type) {
					case st.GLOBAL_THEME_CHANGED: {
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
			var Ht = (e = "", t) => {
					switch (t.type) {
						case H.f:
							return t.payload;
						default:
							return e
					}
				},
				Gt = n("./src/chat/actions/session.ts");
			var Vt = (e = null, t) => {
				switch (t.type) {
					case Gt.a:
					case Gt.c:
						return t.payload;
					case Gt.b:
						return null;
					default:
						return e
				}
			};
			var zt = (e = "", t) => {
					switch (t.type) {
						case H.g:
							return t.payload;
						default:
							return e
					}
				},
				Wt = Object(a.c)({
					account: Tt,
					chatExperiments: kt,
					experiments: Pt,
					language: Dt,
					loid: Rt,
					prefs: Ft,
					reddaid: Ht,
					session: Vt,
					sessionTracker: zt
				});
			const Kt = {
				channels: F,
				contacts: ne,
				container: ce,
				experiments: ue,
				gifs: pe,
				members: je,
				messages: De,
				meta: Ue.b,
				platform: Re.b,
				sendbird: Je,
				sidebar: Ye,
				sitewideRules: tt,
				themes: it,
				toast: dt,
				tooltipId: mt,
				typingIndicator: gt,
				user: Wt,
				uploads: wt,
				lastAction: nt.a
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
					chunk: s.r.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Lb.CHAT
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
					chunk: s.r.CHAT_EMPTY,
					component: l,
					exact: !0,
					meta: {
						name: s.Lb.CHAT_EMPTY
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
					chunk: s.r.CHAT_MINIMIZE,
					component: u,
					exact: !0,
					meta: {
						name: s.Lb.CHAT_MINIMIZE
					},
					path: "/chat/minimize/"
				},
				m = ["/chat/", "/chat/:action(share|share_new)/", "/chat/channel/:action(create)/", "/chat/channel/:channelId/:action(block|hide|delete|invite|invited|kick|members|leave|nsfw|report)?/:attr(invite|message|user)?/:attrId?"],
				p = {
					action: r.a,
					chunk: s.r.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Lb.CHAT
					},
					path: m
				},
				b = ["/chat/user_id/:userIds/"],
				g = {
					action: r.e,
					chunk: s.r.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Lb.CHAT
					},
					path: b
				},
				f = {
					action: r.d,
					chunk: s.r.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Lb.CHAT
					},
					path: ["/chat/share"]
				};
			t.b = [i, d, h, p, g, f]
		},
		"./src/chat/routes/index.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/constants/index.ts");
			var s = {
				action: n("./src/chat/actions/page.ts").b,
				chunk: a.r.CHAT,
				exact: !0,
				meta: {
					name: a.Lb.CHAT
				},
				path: "/chat/*"
			};
			const r = [...n("./src/chat/routes/chat.ts").b, s];
			t.a = r
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
				u = Object(r.a)(c, l, i, (e, t, n) => {
					var a, s;
					return !n || n && !t.length && !(null === (a = e.search.models[n]) || void 0 === a ? void 0 : a.pending) ? e.trending.modelIds : n && t.length ? t : n && !t.length && (null === (s = e.search.models[n]) || void 0 === s ? void 0 : s.pending) ? [] : void 0
				}),
				h = Object(r.a)(o, u, (e, t) => {
					if (t) return e.filter(e => t.includes(e.id))
				}),
				m = Object(r.a)(c, i, (e, t) => {
					var n, a;
					let s = null === (n = e.trending.api) || void 0 === n ? void 0 : n.pending;
					return t && (s = null === (a = e.search.models[t]) || void 0 === a ? void 0 : a.pending), s
				}),
				p = Object(r.a)(c, i, (e, t) => {
					var n;
					return t ? null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.hasError : e.trending.api.hasError
				}),
				b = Object(r.a)(c, i, (e, t) => {
					var n;
					return null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.pageInfo.hasNextPage
				}),
				g = Object(r.a)(c, i, (e, t) => {
					var n, a;
					return Boolean(t && (null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.pending) && (null === (a = e.search.models[t]) || void 0 === a ? void 0 : a.ids.length))
				})
		},
		"./src/chat/selectors/platform.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return o
			}));
			const a = e => e.platform && e.platform.currentPage && e.platform.currentPage.urlParams.channelId,
				s = e => e.platform && e.platform.currentPage && e.platform.currentPage.urlParams.action,
				r = e => e.platform && e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name,
				c = e => {
					var t, n;
					return null === (n = null === (t = e.platform) || void 0 === t ? void 0 : t.currentPage) || void 0 === n ? void 0 : n.queryParams
				},
				o = e => !(!a(e) || s(e))
		},
		"./src/chat/selectors/richUnits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var a = n("./src/chat/constants/messages.ts"),
				s = n("./src/chat/models/RichUnit/index.ts");
			const r = (e, t) => {
					switch (t.type) {
						case a.c.POST: {
							const {
								value: n
							} = t, a = e.messages.richUnits.posts[n.toLowerCase()];
							if ((null == a ? void 0 : a.removedByCategory) !== s.b.Deleted) return a;
							break
						}
						case a.c.USER_POST: {
							const {
								value: n
							} = t, a = e.messages.richUnits.userPosts[n.toLowerCase()];
							if ((null == a ? void 0 : a.removedByCategory) !== s.b.Deleted) return a;
							break
						}
						case a.c.COMMENT: {
							const {
								value: n
							} = t, a = e.messages.richUnits.comments[n.toLowerCase()];
							if (!(null == a ? void 0 : a.deletedAt)) return a;
							break
						}
						case a.c.SUBREDDIT: {
							const {
								value: n
							} = t;
							return e.messages.richUnits.subreddits[n.toLowerCase()]
						}
					}
				},
				c = (e, t) => {
					if (t.type === a.c.COMMENT || t.type === a.c.POST || t.type === a.c.USER_POST || t.type === a.c.SUBREDDIT) {
						const n = {
							type: t.type,
							value: t.chatUnitId
						};
						return r(e, n)
					}
				},
				o = e => e.messages.richUnits.dataReceived,
				i = (e, t) => r(e, t)
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
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return s
			}));
			const a = e => e.sidebar.sideBarAppearance.isSidebarVisible,
				s = e => e.sidebar.sideBarAppearance.sideBarComponentType
		},
		"./src/chat/selectors/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			var a = n("./node_modules/reselect/es/index.js");
			const s = e => t => t.tooltipId === e,
				r = Object(a.a)(e => e.tooltipId, e => e)
		},
		"./src/chat/selectors/uploads.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/reselect/es/index.js"),
				s = n("./src/chat/actions/uploads/prompt.ts"),
				r = n("./src/chat/models/Uploads/index.ts"),
				c = n("./src/chat/selectors/channels.ts");
			const o = ({
					uploads: {
						isOver: e,
						isDrop: t
					}
				}) => ({
					isOver: e,
					isDrop: t
				}),
				i = e => {
					const t = Object(c.n)(e);
					if (!t) return [];
					const n = e.uploads.activeUploads[t];
					return n && n.map(t => e.uploads.models[t]) || []
				},
				l = (e, t) => {
					const n = e.uploads.activeUploads[t];
					return Boolean(n && n.length)
				},
				d = Object(a.a)(e => Object.values(e.uploads.models).filter(e => e.status !== r.c.Canceled), e => e.map(e => e.id)),
				u = (e, t) => t ? e.uploads.models[t] : void 0,
				h = e => e.uploads.prompt,
				m = Object(a.a)(e => h(e), e => e.count !== s.b.LAST && Object.values(s.b).includes(e.count)),
				p = Object(a.a)(e => h(e), e => e.count === s.b.LAST)
		},
		"./src/chat/singleton/SendbirdSDK.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return P
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
					s = Object(b.x)(a);
				if (t(Object(u.J)({
						channelId: e
					})), s && s.channelId === e) {
					const n = Object(p.getRedirectURL)(Object(p.channelAction)(e, m.a.DENY));
					t(Object(h.b)(n))
				}
			};
			var f = n("./src/chat/selectors/user.ts");
			const O = (e, t) => async (n, a) => {
				const s = a(),
					{
						channelId: r
					} = e,
					c = Object(b.y)(s),
					o = Object(f.a)(s);
				if (t === o && (n(Object(u.I)(r)), r === c)) {
					const e = Object(p.getRedirectURL)(Object(p.channelAction)(r, m.a.DENY));
					n(Object(h.b)(e))
				}
			};
			var E = n("./src/chat/actions/message/index.ts"),
				C = n("./src/chat/actions/sendbird/index.ts"),
				j = n("./src/chat/actions/sendbird/sdk.ts"),
				v = n("./src/chat/actions/toast.ts"),
				_ = n("./src/chat/actions/typingIndicator.ts"),
				I = n("./src/chat/constants/batchSizes.ts"),
				x = n("./src/chat/constants/messages.ts"),
				y = n("./src/chat/constants/sendbird.ts"),
				S = n("./src/chat/constants/toast.ts"),
				w = n("./src/chat/helpers/errors.ts"),
				N = n("./src/chat/models/Channel/index.ts"),
				T = n("./src/chat/models/Channel/utils.ts"),
				M = n("./src/chat/models/Message/index.ts"),
				k = n("./src/chat/models/User/member.ts");
			const {
				sendbirdAppId: A
			} = a.a;
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
						appId: A
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
					this.dispatch(Object(v.g)({
						toast: S.a.ConnectionPending
					})), this.dispatch(Object(C.k)())
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
						this.dispatch(Object(j.h)(t)), this.dispatch(Object(v.g)(n))
					}, this.self.addConnectionHandler("CONNECTION_CHANGE", e), this.connectionUniqueHandlerID.push("CONNECTION_CHANGE")
				}
				onReconnectSucceeded() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: y.b.Open
						};
					e.onReconnectSucceeded = () => {
						this.dispatch(Object(j.h)(t)), this.dispatch(Object(v.g)({
							toast: S.a.ConnectionOpen
						})), Object(i.setTimeout)(() => this.dispatch(Object(v.d)()), 3 * l.Qb);
						this.dispatch(Object(E.v)(!0)), this.dispatch(Object(u.C)())
					}, this.self.addConnectionHandler("RECONNECT_SUCCEEDED", e), this.connectionUniqueHandlerID.push("RECONNECT_SUCCEEDED")
				}
				onReconnectFailed() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: y.b.Closed
						};
					e.onReconnectFailed = () => {
						this.dispatch(Object(j.h)(t)), this.dispatch(Object(v.g)({
							toast: S.a.ConnectionClosed
						}))
					}, this.self.addConnectionHandler("RECONNECT_FAILED", e), this.connectionUniqueHandlerID.push("RECONNECT_FAILED")
				}
				onReceiveInvite() {
					const e = new this.self.ChannelHandler;
					e.onUserReceivedInvitation = e => {
						const t = Object(N.g)(e);
						this.dispatch(Object(u.P)(t))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_INVITE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_INVITE")
				}
				onReceiveMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageReceived = (e, t) => {
						const n = Object(N.g)(e);
						this.dispatch(Object(u.O)(n));
						const a = Object(M.c)(t);
						a && this.dispatch(Object(E.x)(a))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_MESSAGE")
				}
				onUpdateMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageUpdated = (e, t) => {
						const n = Object(N.g)(e);
						this.dispatch(Object(u.O)(n));
						const a = Object(M.c)(t);
						a && this.dispatch(Object(E.x)(a))
					}, this.self.addChannelHandler("UPDATE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("UPDATE_CHANNEL_MESSAGE")
				}
				onDeleteMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageDeleted = (e, t) => {
						this.dispatch(Object(E.y)(t))
					}, this.self.addChannelHandler("DELETE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("DELETE_CHANNEL_MESSAGE")
				}
				onTypingStatusUpdated() {
					const e = new this.self.ChannelHandler;
					e.onTypingStatusUpdated = e => {
						const t = Object(T.e)(e.url),
							n = e.getTypingMembers().map(e => e.nickname);
						this.dispatch(Object(_.b)({
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
							const t = Object(N.g)(e);
							this.dispatch(Object(u.P)(t, !0))
						}, this.self.addChannelHandler(s, a), this.channelUniqueHandlerID.push(s)
					})
				}
				onChannelChanged() {
					const e = new this.self.ChannelHandler;
					e.onChannelChanged = e => {
						const t = Object(N.g)(e);
						this.dispatch(Object(u.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_CHANGED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_CHANGED")
				}
				onChannelDeleted() {
					const e = new this.self.ChannelHandler;
					e.onChannelDeleted = e => {
						const t = Object(T.e)(e);
						this.dispatch(g(t))
					}, this.self.addChannelHandler("ON_CHANNEL_DELETED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_DELETED")
				}
				onChannelMuted() {
					const e = new this.self.ChannelHandler;
					e.onUserMuted = e => {
						const t = Object(N.g)(e);
						this.dispatch(Object(u.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_MUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_MUTED")
				}
				onChannelUnmuted() {
					const e = new this.self.ChannelHandler;
					e.onUserUnmuted = e => {
						const t = Object(N.g)(e);
						this.dispatch(Object(u.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNMUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNMUTED")
				}
				onChannelLocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelFrozen = e => {
						const t = Object(N.g)(e);
						this.dispatch(Object(u.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_LOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_LOCKED")
				}
				onChannelUnlocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelUnfrozen = e => {
						const t = Object(N.g)(e);
						this.dispatch(Object(u.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNLOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNLOCKED")
				}
				updatePartialChannelModel(e, t) {
					const {
						PARTIAL: n,
						UNSORTED: a
					} = m.b;
					t === n && e.channelState === a && (e.channelState = n, this.dispatch(Object(u.Q)(e)))
				}
				getChannelByChannelId(e) {
					return new Promise((t, n) => {
						const a = Object(T.a)(e);
						this.self.GroupChannel.getChannel(a, (e, a) => {
							a ? (Object(w.b)("Error: can't get channel by id"), n(a)) : t(e)
						})
					})
				}
				addChannelModelByChannelId(e) {
					return new Promise((t, n) => {
						this.getChannelByChannelId(e).then(e => {
							if (!e) return t();
							const n = Object(N.g)(e);
							if (!n) return t();
							this.dispatch(Object(u.Q)(n)), t(n)
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
							const c = Object(N.g)(t);
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
						const n = Object(N.g)(e);
						n && this.dispatch(O(n, t.userId))
					}, this.self.addChannelHandler("CHANNEL_USER_KICKED", e), this.channelUniqueHandlerID.push("CHANNEL_USER_KICKED")
				}
				getExistingChannels(e) {
					return new Promise((t, n) => {
						let a;
						if (e === m.b.INVITED ? this.channelListQueryInvited ? a = this.channelListQueryInvited : (this.channelListQueryInvited = this.self.GroupChannel.createMyGroupChannelListQuery(), a = this.channelListQueryInvited) : e === m.b.JOINED && (this.channelListQueryJoined ? a = this.channelListQueryJoined : (this.channelListQueryJoined = this.self.GroupChannel.createMyGroupChannelListQuery(), a = this.channelListQueryJoined)), a)
							if (a.includeEmpty = !0, a.limit = I.a.Channels, a.order = m.d.LATEST_MESSAGE, a.memberStateFilter = e === m.b.INVITED ? m.g.INVITED : m.g.JOINED, a.superChannelFilter = "all", a.customTypesFilter = ["direct", "group"], a.hasNext) {
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
							const r = Object(k.a)(a),
								c = r.filter(n => t && n && n.name === e || !t && n);
							r.length && this.dispatch(Object(C.h)(r)), n(c)
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
						e && this.createPreviousMessageListQuery(), this.channel && this.prevMessageListQuery ? (this.prevMessageListQuery.reverse = !0, this.prevMessageListQuery.limit = I.a.Messages, this.prevMessageListQuery.load((e, a) => {
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
							r.data = t, r.message = e, n && n.length && (r.mentionType = x.b.USERS, r.mentionedUserIds = n), this.channel.sendUserMessage(r, (e, t) => {
								if (t) Object(w.b)(`Error with sending the message to Sendbird: ${t}`), s(t);
								else {
									const t = Object(M.c)(e);
									if (t && t.messageType === x.d.USER) return a(t);
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
			t.a = P
		},
		"./src/chat/tracking/events/chatView.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "e", (function() {
				return x
			}));
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/selectors/telemetry.ts"),
				r = n("./src/chat/tracking/fields/chat.ts"),
				c = n("./src/chat/tracking/fields/common.ts"),
				o = n("./src/chat/constants/messages.ts"),
				i = n("./src/chat/selectors/messages.ts"),
				l = n("./src/chat/selectors/uploads.ts");
			const d = (e, t) => {
					var n, a, s, r, c;
					const l = Object(i.c)(e, t);
					return l && l.type === o.c.GIF ? {
						id: null === (n = l.gif) || void 0 === n ? void 0 : n.id,
						caption: null === (a = l.gif) || void 0 === a ? void 0 : a.title,
						url: null === (s = l.gif) || void 0 === s ? void 0 : s.url,
						width: null === (r = l.gif) || void 0 === r ? void 0 : r.width,
						height: null === (c = l.gif) || void 0 === c ? void 0 : c.height
					} : {}
				},
				u = (e, t, n) => {
					var a;
					const s = n || Object(i.c)(e, t),
						r = Object(l.d)(e, null == s ? void 0 : s.clientMessageId);
					return {
						reason: (null == r ? void 0 : r.source) && String(r.source) || void 0,
						type: (null === (a = null == r ? void 0 : r.metadata) || void 0 === a ? void 0 : a.mimetype) && String(r.metadata.mimetype).toLowerCase() || void 0
					}
				};
			var h = n("./src/chat/tracking/sendEvent.ts");
			const m = e => Object(h.a)({
					noun: "chat",
					source: a.b.ChatView,
					action: a.a.View,
					chat: {
						...Object(r.z)(e),
						...Object(r.p)(e),
						...Object(r.f)(e),
						...Object(r.r)(e),
						...Object(r.k)(e),
						...Object(r.x)(e)
					},
					...Object(c.a)(e)
				}),
				p = (e, t) => {
					const {
						messageId: n,
						messageData: o,
						sender: i
					} = t;
					Object(h.a)({
						noun: "chat_message",
						source: a.b.ChatView,
						action: a.a.Submit,
						chat: {
							...Object(r.z)(e),
							...Object(r.p)(e),
							...Object(r.f)(e),
							...Object(r.r)(e, 0),
							...Object(r.n)(e, n, o),
							...Object(r.w)(e, n, i),
							...Object(r.x)(e)
						},
						media: {
							...d(e, n)
						},
						...Object(c.a)(e),
						actionInfo: {
							...Object(s.a)(e),
							...u(e, n, o)
						}
					})
				},
				b = (e, t, n) => {
					Object(h.a)({
						noun: "chat_message_failed",
						source: a.b.ChatView,
						action: a.a.View,
						chat: {
							...Object(r.z)(e),
							...Object(r.p)(e),
							...Object(r.f)(e),
							...Object(r.r)(e, 0),
							...Object(r.s)(e, t),
							...Object(r.w)(e),
							...Object(r.x)(e),
							...Object(r.l)(e, t)
						},
						...Object(c.a)(e),
						actionInfo: {
							reason: n,
							...Object(s.a)(e)
						}
					})
				},
				g = (e, t, n) => {
					Object(h.a)({
						noun: "report_message",
						source: a.b.ChatView,
						action: a.a.Submit,
						chat: {
							...Object(r.z)(e),
							...Object(r.p)(e),
							...Object(r.f)(e),
							...Object(r.r)(e, 0),
							...Object(r.m)(t),
							...Object(r.n)(e, t),
							...Object(r.u)(n),
							...Object(r.w)(e, t),
							...Object(r.x)(e)
						},
						...Object(c.a)(e)
					})
				},
				f = e => {
					Object(h.a)({
						noun: "history",
						source: a.b.ChatView,
						action: a.a.View,
						chat: {
							...Object(r.z)(e),
							...Object(r.p)(e),
							...Object(r.f)(e),
							...Object(r.x)(e)
						},
						...Object(c.a)(e)
					})
				},
				O = (e, t, n, o) => {
					Object(h.a)({
						noun: "quick_response",
						source: a.b.ChatView,
						action: a.a.Click,
						chat: {
							...Object(r.z)(e),
							...Object(r.p)(e),
							...Object(r.f)(e),
							...Object(r.x)(e)
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
				E = (e, t) => {
					Object(h.a)({
						noun: "gif",
						source: a.b.Chat,
						action: a.a.Search,
						chat: {
							...Object(r.z)(e),
							...Object(r.p)(e),
							...Object(r.f)(e)
						},
						...Object(c.a)(e),
						actionInfo: {
							...Object(s.a)(e),
							settingValue: t
						}
					})
				},
				C = e => {
					Object(h.a)({
						noun: "prompt_theme",
						source: a.b.Chat,
						action: a.a.View,
						chat: {
							...Object(r.z)(e),
							...Object(r.p)(e),
							...Object(r.f)(e)
						},
						...Object(c.a)(e)
					})
				},
				j = e => {
					Object(h.a)({
						noun: "all_invites",
						source: a.b.ChatView,
						action: a.a.Click,
						chat: {
							...Object(r.z)(e),
							...Object(r.f)(e)
						},
						...Object(c.a)(e)
					})
				},
				v = e => {
					Object(h.a)({
						noun: "all_invites",
						source: a.b.ChatView,
						action: a.a.View,
						chat: {
							...Object(r.z)(e),
							...Object(r.f)(e)
						},
						...Object(c.a)(e)
					})
				},
				_ = (e, t, n) => {
					Object(h.a)({
						noun: "type_filter",
						source: a.b.ChatView,
						action: a.a.Click,
						chat: {
							...Object(r.z)(e),
							...Object(r.f)(e)
						},
						...Object(c.a)(e),
						actionInfo: {
							...Object(s.a)(e),
							type: t,
							pageType: n
						}
					})
				},
				I = e => {
					Object(h.a)({
						noun: "prompt_image",
						source: a.b.ChatView,
						action: a.a.View,
						chat: {
							...Object(r.z)(e),
							...Object(r.f)(e)
						},
						...Object(c.a)(e)
					})
				},
				x = e => {
					Object(h.a)({
						noun: "share_chat",
						source: a.b.Chat,
						action: a.a.Click,
						chat: {
							...Object(r.z)(e),
							...Object(r.f)(e)
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
							...Object(r.b)(e),
							...Object(r.c)(e)
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
							...Object(r.d)(e),
							...Object(r.a)(e, t),
							...Object(r.b)(e),
							...Object(r.f)(e),
							...Object(r.e)(e),
							...Object(r.A)(e, t)
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
							...Object(r.z)(e),
							...Object(r.b)(e),
							...Object(r.c)(e),
							...Object(r.f)(e),
							...Object(r.A)(e, "search"),
							...Object(r.e)(e)
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
							...Object(r.z)(e),
							...Object(r.b)(e),
							...Object(r.c)(e),
							...Object(r.f)(e),
							...Object(r.A)(e, t),
							...Object(r.e)(e)
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
							...Object(r.z)(e, t),
							...Object(r.b)(e),
							...Object(r.c)(e),
							...Object(r.f)(e, t),
							...Object(r.e)(e)
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
							...Object(r.d)(e),
							...Object(r.b)(e),
							...Object(r.c)(e),
							...Object(r.f)(e),
							...Object(r.e)(e)
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
							...Object(r.z)(e),
							...Object(r.p)(e),
							...Object(r.f)(e),
							...Object(r.c)(e),
							...Object(r.e)(e)
						},
						...Object(c.a)(e)
					})
				}
		},
		"./src/chat/tracking/events/invitationInbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return i
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "i", (function() {
				return E
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
						...Object(r.i)(e),
						...Object(r.j)(e),
						...Object(r.g)(e),
						...Object(r.h)(e),
						...Object(r.p)(e)
					},
					...Object(c.a)(e)
				}),
				l = (e, t, n) => Object(o.a)({
					noun: "invitation_accept",
					source: a.b.InvitationInbox,
					action: a.a.Click,
					chat: {
						...Object(r.i)(e),
						...Object(r.j)(e),
						...Object(r.g)(e),
						...Object(r.h)(e),
						...Object(r.p)(e)
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
						...Object(r.i)(e),
						...Object(r.j)(e),
						...Object(r.g)(e),
						...Object(r.h)(e),
						...Object(r.p)(e)
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
					noun: "block",
					source: a.b.InvitationInbox,
					action: a.a.Click,
					chat: {
						...Object(r.i)(e),
						...Object(r.j)(e),
						...Object(r.g)(e),
						...Object(r.h)(e),
						...Object(r.p)(e)
					},
					...Object(c.a)(e)
				}),
				h = (e, t, n) => Object(o.a)({
					noun: "spam",
					source: a.b.InvitationInbox,
					action: a.a.Click,
					chat: {
						id: t,
						message_id: n,
						...Object(r.i)(e),
						...Object(r.j)(e),
						...Object(r.g)(e),
						...Object(r.h)(e),
						...Object(r.p)(e)
					},
					...Object(c.a)(e)
				}),
				m = e => Object(o.a)({
					noun: "invitation_view_member",
					source: a.b.InvitationInbox,
					action: a.a.Click,
					chat: {
						...Object(r.i)(e),
						...Object(r.j)(e),
						...Object(r.g)(e),
						...Object(r.h)(e),
						...Object(r.p)(e)
					},
					...Object(c.a)(e)
				}),
				p = e => {
					Object(o.a)({
						noun: "expand",
						source: a.b.InvitationInbox,
						action: a.a.Click,
						...Object(c.a)(e)
					})
				},
				b = e => {
					Object(o.a)({
						noun: "collapse",
						source: a.b.InvitationInbox,
						action: a.a.Click,
						...Object(c.a)(e)
					})
				},
				g = new Set,
				f = (e, t) => {
					g.has(t) || (g.add(t), Object(o.a)({
						noun: "collapsed_message",
						source: a.b.Chat,
						action: a.a.View,
						chat: {
							message_id: t
						},
						...Object(c.a)(e)
					}))
				},
				O = (e, t, n) => {
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
				E = (e, t, n) => {
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
							...Object(s.o)(e),
							...Object(s.y)(e),
							...Object(s.q)(e)
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
							...Object(s.o)(e),
							...Object(s.y)(e),
							...Object(s.q)(e)
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
							...Object(s.o)(e),
							...Object(s.q)(e)
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
							...Object(s.o)(e),
							...Object(s.q)(e)
						},
						...Object(r.a)(e),
						actionInfo: {
							...Object(a.a)(e)
						}
					})
				}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/delay/index.ts": function(e, t, n) {
			"use strict";

			function a(e) {
				return new Promise(t => setTimeout(t, e))
			}
			n.d(t, "a", (function() {
				return a
			}))
		},
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react/index.js");

			function s(e, t) {
				const n = Object(a.useCallback)(n => {
					if (!t) return;
					const a = document.getElementById(e);
					a && (a.contains(n.target) || t(n))
				}, [e, t]);
				Object(a.useEffect)(() => {
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
			var a = n("./node_modules/icepick/icepick.js"),
				s = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const c = Object(a.freeze)({
				modifiers: []
			});

			function o(e) {
				let t = "object" == typeof e ? e : c;
				return Array.isArray(t.modifiers) || (t = Object(a.assoc)(t, "modifiers", c.modifiers)), t
			}

			function i(e) {
				const [t, n] = Object(s.useState)(null), [c, i] = Object(s.useState)(null), [l, d] = Object(s.useState)(null), [u, h] = Object(s.useState)(!1), m = Object(s.useCallback)(async () => h(!0), []), p = Object(s.useCallback)(() => h(!1), []), b = Object(s.useCallback)(() => h(!u), [u]), g = Object(s.useMemo)(() => {
					const t = o(e);
					return l ? Object(a.updateIn)(t, ["modifiers"], e => Object(a.push)(e, {
						name: "arrow",
						options: {
							element: l
						}
					})) : t
				}, [l, e]), {
					attributes: f,
					styles: O,
					update: E
				} = Object(r.a)(t, c, g);
				return Object(s.useMemo)(() => ({
					arrowProps: {
						ref: d,
						style: O.arrow,
						...f.arrow
					},
					hide: p,
					popperProps: {
						ref: i,
						style: O.popper,
						...f.popper
					},
					show: m,
					target: {
						element: t,
						ref: n
					},
					toggle: b,
					visible: u,
					update: E
				}), [d, f, i, p, m, O, t, n, b, u, E])
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
				return O
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return _
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
				O = s()().tlds(c.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subredditFullUrl.config).add(o.g.subredditFull.prefix, o.g.subredditFullUrl.config),
				E = m.normalize;
			m.normalize = e => {
				E.call(m, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const C = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				j = e => {
					return [...g.match(e) || [], ...p.match(e) || []].map(e => !d(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				v = (e, t) => {
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
				return i
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var a = n("./src/lib/delay/index.ts"),
				s = n("./src/lib/getParsedUserAgent/index.ts"),
				r = n("./src/lib/localStorageAvailable/index.ts"),
				c = n("./src/lib/notifications/constants.ts"),
				o = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const i = () => {
					if (Object(o.a)() !== c.c.NotificationsSupported) return c.a.Unsupported;
					const e = Object(r.a)() && localStorage.getItem(c.f) === c.g;
					return "granted" === Notification.permission ? c.a.Granted : "denied" === Notification.permission ? c.a.Denied : e ? c.a.Closed : c.a.Default
				},
				l = () => !!Object(r.a)() && (localStorage.removeItem(c.f), !0),
				d = async (e, t, n, o, l, d) => {
					const u = i();
					if (u === c.a.Unsupported) return void d();
					if (Object(r.a)()) {
						const t = localStorage.getItem(c.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + c.i > n) return void d();
						localStorage.setItem(c.h, n.toString())
					}
					if (!t && u === c.a.Denied) return o(!1, !0), void d();
					if (!t && u === c.a.Granted) return l(!1), void d();
					if (!t && u === c.a.Closed) return void d();
					let h = c.a.Default;
					const m = navigator.userAgent;
					switch (Object(s.b)(m) || Object(s.f)(m) ? Object(a.a)(1800).then(() => {
						h === c.a.Default && n()
					}) : n(), h = await Notification.requestPermission()) {
						case "granted":
							l(!0);
							break;
						case "denied":
							o(!0, !0);
							break;
						case "default":
							d();
							break;
						default:
							o(!0, !1), localStorage.setItem(c.f, c.g)
					}
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
				s = n("./src/redditGQL/operations/RegisterWebPushToken.json"),
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
		"./src/lib/safeBadgeUpdate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./src/lib/throwDevError.ts");
			const s = e => {
				const t = null === window || void 0 === window ? void 0 : window.navigator;
				if (t && "setAppBadge" in t && "clearAppBadge" in t) {
					(e >= 0 ? t.setAppBadge(e) : t.clearAppBadge()).catch(e => Object(a.a)(e))
				}
			}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			}));
			var a = n("./src/lib/loadableAction/index.ts");
			const s = Object(a.a)(() => Promise.all([n.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(a.a)(() => Promise.all([n.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				c = Object(a.a)(() => Promise.all([n.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
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
				o = Object(a.createContext)(c);

			function i(e) {
				const t = t => s.a.createElement(o.Consumer, null, ({
					apiContext: n,
					gqlContext: a
				}) => s.a.createElement(e, r({
					apiContext: n,
					gqlContext: a
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
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				r = n.n(s);
			t.a = a.a.div("inlineRow", r.a)
		},
		"./src/reddit/models/ReportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return c
			}));
			var a, s, r;
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(a || (a = {})),
			function(e) {
				e.HARASSMENT_AT_ME = "HARASSMENT_AT_ME", e.HARASSMENT_AT_SOMEONE_ELSE = "HARASSSOMEONE_ELSENT_AT_ME", e.VIOLENCE_AT_ME = "VIOLENCE_AT_ME", e.VIOLENCE_AT_SOMEONE_ELSE = "VIOLENCE_AT_SOMEONE_ELSE", e.HATE_CONTENT = "HATE_CONTENT", e.MINOR_SEXUALIZATION = "HARASSMENT_AT_ME", e.PII_ABOUT_ME = "PII_ABOUT_ME", e.PII_ABOUT_SOMEONE_ELSE = "PII_ABOUT_SOMEONE_ELSE", e.INVOLUNTARY_PORN_SELF = "INVOLUNTARY_PORN_SELF", e.INVOLUNTARY_PORN_OTHER = "INVOLUNTARY_PORN_OTHER", e.PROHIBITED_SALES = "PROHIBITED_SALES", e.REPORT_BUTTON_ABUSE = "REPORT_BUTTON_ABUSE", e.IMPERSONATION_SELF = "IMPERSONATION_SELF", e.IMPERSONATION_OTHER = "IMPERSONATION_OTHER", e.COPYRIGHT_SELF = "COPYRIGHT_SELF", e.COPYRIGHT_OTHER = "COPYRIGHT_OTHER", e.TRADEMARK_SELF = "TRADEMARK_SELF", e.TRADEMARK_OTHER = "TRADEMARK_OTHER", e.NETZDG = "NETZDG", e.SELF_HARM = "SELF_HARM", e.SPAM_LINK_FARMING = "SPAM_LINK_FARMING", e.SPAM_UNSOLICITED_PMS = "SPAM_UNSOLICITED_PMS", e.SPAM_COMMENT_FLOODING = "SPAM_COMMENT_FLOODING", e.SPAM_MALWARE = "SPAM_MALWARE", e.SPAM_BOTS = "SPAM_BOTS", e.MISINFORMATION_HEALTH = "MISINFORMATION_HEALTH", e.MISINFORMATION_POLITICS = "MISINFORMATION_POLITICS", e.MISINFORMATION_FABRICATION = "MISINFORMATION_FABRICATION", e.MISINFORMATION_CONSPIRACY = "MISINFORMATION_CONSPIRACY", e.BAN_EVASION = "BAN_EVASION", e.VOTE_MANIPULATION = "VOTE_MANIPULATION"
			}(s || (s = {})),
			function(e) {
				e.R2 = "R2", e.MWEB = "MWEB", e.D2X = "D2X"
			}(r || (r = {}));
			const c = new Set(Object.values(r))
		},
		"./src/redditGQL/operations/ChatUnitDetails.json": function(e) {
			e.exports = JSON.parse('{"id":"0e3adbb8d3c9"}')
		},
		"./src/redditGQL/operations/CreateChatMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"b0bb6207e12d"}')
		},
		"./src/redditGQL/operations/CreateMediaUploadLease.json": function(e) {
			e.exports = JSON.parse('{"id":"df597bfa6e5f"}')
		},
		"./src/redditGQL/operations/DeclineChatChannelInvite.json": function(e) {
			e.exports = JSON.parse('{"id":"52783a3ba2dd"}')
		},
		"./src/redditGQL/operations/ExperimentVariantsShort.json": function(e) {
			e.exports = JSON.parse('{"id":"bc53b55777c5"}')
		},
		"./src/redditGQL/operations/GetTrendingChatGifs.json": function(e) {
			e.exports = JSON.parse('{"id":"5b4e0d028600"}')
		},
		"./src/redditGQL/operations/LeaveChatChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"3a709cd80f6d"}')
		},
		"./src/redditGQL/operations/RedditorsInfoByIds.json": function(e) {
			e.exports = JSON.parse('{"id":"8def5eb26278"}')
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		},
		"./src/redditGQL/operations/ReportChatMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"fd819ca5f0fa"}')
		},
		"./src/redditGQL/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"404920cc0308"}')
		},
		"./src/redditGQL/operations/SearchChatGifs.json": function(e) {
			e.exports = JSON.parse('{"id":"01a298f0be11"}')
		},
		"./src/redditGQL/operations/SubmitMediaUpload.json": function(e) {
			e.exports = JSON.parse('{"id":"6a1841b659af"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Chat~RedesignChat.93586e10bed40208340a.js.map