// https://www.redditstatic.com/desktop2x/Chat~RedesignChat.e06d2d5ae4ad1ef02ab3.js
// Retrieved at 8/18/2021, 10:00:06 AM by Reddit Dataminer v1.0.0
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
				return H
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "f", (function() {
				return V
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "q", (function() {
				return W
			})), n.d(t, "p", (function() {
				return K
			})), n.d(t, "r", (function() {
				return Z
			})), n.d(t, "h", (function() {
				return q
			})), n.d(t, "c", (function() {
				return Q
			})), n.d(t, "v", (function() {
				return J
			})), n.d(t, "w", (function() {
				return Y
			})), n.d(t, "x", (function() {
				return X
			})), n.d(t, "u", (function() {
				return $
			})), n.d(t, "k", (function() {
				return ee
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "i", (function() {
				return ne
			})), n.d(t, "j", (function() {
				return se
			})), n.d(t, "a", (function() {
				return ae
			})), n.d(t, "b", (function() {
				return re
			})), n.d(t, "t", (function() {
				return ce
			})), n.d(t, "s", (function() {
				return oe
			})), n.d(t, "n", (function() {
				return ie
			})), n.d(t, "o", (function() {
				return le
			})), n.d(t, "m", (function() {
				return de
			})), n.d(t, "J", (function() {
				return ue
			})), n.d(t, "I", (function() {
				return he
			})), n.d(t, "y", (function() {
				return pe
			})), n.d(t, "B", (function() {
				return be
			})), n.d(t, "Q", (function() {
				return Ee
			})), n.d(t, "P", (function() {
				return je
			})), n.d(t, "O", (function() {
				return Ie
			})), n.d(t, "L", (function() {
				return we
			})), n.d(t, "H", (function() {
				return Ne
			})), n.d(t, "A", (function() {
				return De
			})), n.d(t, "z", (function() {
				return Le
			})), n.d(t, "F", (function() {
				return Re
			})), n.d(t, "N", (function() {
				return Ue
			})), n.d(t, "M", (function() {
				return He
			})), n.d(t, "C", (function() {
				return Qe
			})), n.d(t, "D", (function() {
				return Ye
			})), n.d(t, "E", (function() {
				return Xe
			})), n.d(t, "K", (function() {
				return et
			})), n.d(t, "G", (function() {
				return tt
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/isEqual.js"),
				a = n.n(s),
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
				f = n("./src/chat/constants/batchSizes.ts"),
				g = n("./src/chat/constants/channels.ts"),
				O = n("./src/chat/constants/sendbird.ts"),
				E = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				C = n("./src/lib/makeGqlRequest/index.ts"),
				j = n("./src/redditGQL/operations/DeclineChatChannelInvite.json"),
				_ = n("./src/redditGQL/operations/LeaveChatChannel.json");
			var v = n("./src/chat/endpoints/sendbird/index.ts"),
				I = n("./src/chat/helpers/errors.ts"),
				x = n("./src/chat/helpers/urls/index.ts"),
				y = n("./src/chat/models/Channel/index.ts"),
				S = n("./src/chat/models/Channel/utils/index.ts"),
				w = n("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				N = n("./src/chat/models/User/inviter.ts"),
				T = n("./src/chat/models/User/member.ts");
			var A = n("./src/chat/selectors/channels.ts");
			const M = (e, t) => {
					const {
						channels: n
					} = e;
					let s;
					if (t) {
						const e = n.invited.sortedKeys.indexOf(t);
						s = n.invited.sortedKeys[e + 1]
					} else s = n.invited.sortedKeys[0];
					return {
						channelId: s,
						channelAction: g.a.VIEW_INVITE
					}
				},
				k = e => {
					const {
						channels: t
					} = e;
					return {
						channelId: t.joined.sortedKeys[0]
					}
				},
				P = e => [M(e), k(e)],
				D = e => {
					const t = Object(A.m)(e);
					return {
						channelId: t && t.channelId
					}
				},
				L = e => e.find(e => !!e.channelId);
			var R = n("./src/chat/selectors/experiments.ts"),
				U = n("./src/chat/selectors/platform.ts"),
				F = n("./src/chat/selectors/promos.ts"),
				B = n("./src/chat/singleton/SendbirdSDK.ts");
			const H = "CHANNEL__ADD_SUCCESS",
				G = "CHANNEL__ADD_FAIL",
				V = "CHANNEL__CREATE_CHANNEL_START",
				z = "CHANNEL__CREATE_CHANNEL_END",
				W = "CHANNEL__SELECT_BEGIN",
				K = "CHANNEL__RESET_UNREAD_COUNT",
				Z = "CHANNEL__SELECT_END",
				q = "CHANNEL__EXPAND_INVITE_LIST",
				Q = "CHANNEL__COLLAPSE_INVITE_LIST",
				J = "CHANNEL__UPDATE_MODEL",
				Y = "CHANNEL__INVITED_UPDATE",
				X = "CHANNEL__JOINED_UPDATE",
				$ = "CHANNEL__SET_UPDATED_CHANNEL_ON_TOP",
				ee = "CHANNEL__FETCHING_JOINED_CHANNELS",
				te = "CHANNEL__FETCHING_JOINED_CHANNELS_FAILED",
				ne = "CHANNEL__FETCHING_INVITED_CHANNELS",
				se = "CHANNEL__FETCHING_INVITED_CHANNELS_FAILED",
				ae = "CHANNEL__ADD_EXISTING_INVITED_CHANNELS",
				re = "CHANNEL__ADD_EXISTING_JOINED_CHANNELS",
				ce = "CHANNEL__SET_INVITED_CHANNEL_TO_JOINED",
				oe = "CHANNEL__SET_EXISTING_CHANNELS_END",
				ie = "CHANNEL__REMOVE_CHANNEL",
				le = "CHANNEL__RESET_CHANNEL_MESSAGE_LIST",
				de = "CHANNEL__FETCH_FIRST_MESSAGE",
				ue = Object(o.a)(ie),
				he = e => async t => {
					t(ue({
						channelId: e
					}))
				}, me = Object(o.a)(ce), pe = e => async (t, n, {
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
					if (!e) throw new I.a("accepted channelId", e);
					if (!c) throw new I.a("session", c);
					const i = Object(A.m)(a),
						l = i && i.firstMessageId,
						u = !!(i && l && i.hasMoreMessages),
						h = Object(A.b)(a, o),
						m = Object(F.a)(a);
					if (h && m) return void t(Object(r.b)(Object(x.channelAction)(e, g.a.VIEW_NSFW_CONFIRMATION)));
					await Object(v.a)(s(), c, e), u && t(Object(d.s)(l)), t(me({
						channelId: e
					}));
					const p = Object(x.getRedirectURL)(Object(x.channelUrl)(e));
					t(Object(r.b)(p))
				}, be = (e, t, n) => async (s, a, {
					gqlContext: r
				}) => {
					var c, o, i;
					const l = a(),
						{
							user: {
								session: d
							}
						} = l;
					if (!Object(A.i)(l, e) || !t) return;
					if (!d) throw new I.a("session", d);
					const h = Object(R.c)(l),
						p = Object(R.e)(l),
						b = {
							channelSendbirdId: e,
							inviterUserId: t.id,
							shouldBlockInviter: !n && (h || p),
							shouldReportInviter: !n && p
						},
						f = await ((e, t) => Object(C.a)(e, {
							...j,
							variables: t
						}))(r(), {
							input: b
						});
					if ((null === (o = null === (c = f.error) || void 0 === c ? void 0 : c.fields) || void 0 === o ? void 0 : o.length) || (e => Boolean(e && e.data && e.data.declineChatChannelInvite))(f.body) && (null === (i = f.body.data.declineChatChannelInvite.errors) || void 0 === i ? void 0 : i.length)) return s(Object(m.e)()), Object(I.b)(`Error declining invite: ${f.error}`);
					s(Object(u.b)()), await s(Ue(g.b.INVITED, e)), s((e => async t => t(he(e)))(e))
				}, fe = Object(o.a)(Y), ge = Object(o.a)(X), Oe = Object(o.a)(J), Ee = e => async t => {
					t(Oe({
						channel: e
					}))
				}, Ce = e => async t => {
					await t(fe({
						channel: e
					})), t((e => async (t, n) => {
						const s = n().user.account.id,
							a = e.members.filter(e => e.id !== s).map(e => e.id);
						t(Object(b.v)(a))
					})(e))
				}, je = (e, t) => async (n, s) => {
					if (e) {
						const r = s(),
							c = Object(A.i)(r, e.channelId);
						if (e.channelState !== g.b.INVITED && !c || t) return;
						if (e = _e(r, e), a()(e, c)) return;
						switch (e.channelState) {
							case g.b.INVITED:
								await n(Ce(e));
								break;
							case g.b.JOINED:
								await n(ge({
									channel: e
								}));
								break;
							default:
								Object(I.b)("Error updating channel. ChannelState not found.")
						}
						n(Object(u.b)())
					}
				}, _e = (e, t) => {
					return Object(U.d)(e) === t.channelId && (t.unreadMessageCount = 0), t
				}, ve = Object(o.a)($), Ie = e => async t => {
					const {
						channelId: n
					} = e;
					t(ve({
						channelId: n
					}))
				}, xe = Object(o.a)(K), ye = Object(o.a)(W), Se = Object(o.a)(Z), we = () => async (e, t) => {
					const n = t(),
						s = Object(U.d)(n),
						a = Object(U.c)(n),
						{
							CREATE: c,
							DENY: o,
							VIEW_JOIN: u
						} = g.a;
					if (!n.platform.currentPage) return;
					s && (await e(Object(h.d)(s)), e(Object(h.f)(!1))), await e(Object(l.f)()), e(Object(i.i)());
					const m = s && Object(A.i)(n, s);
					if (!m && (a === o || a === c)) return;
					const p = !(!m || m.channelState !== g.b.JOINED);
					if (m && p && a && g.h.includes(a)) {
						const t = Object(x.getRedirectURL)(Object(x.channelUrl)(m.channelId));
						e(Object(r.b)(t))
					} else if (m && s) {
						e(ye({
							channelId: s
						}));
						const t = await B.a.enterChannel(m, !1);
						if (t && !t.error) {
							const {
								messageListData: n
							} = t.data;
							await e(Object(d.p)(n, m.channelId)), await e(Se()), e(Ne(s))
						} else e(Object(d.B)()), e(Se())
					} else {
						const t = n.sendbird.sdk.connectionStatus === O.b.Open;
						if (!m && s && t) {
							const t = await B.a.addChannelModelByChannelId(s);
							if (t && !a) {
								const n = Object(x.getRedirectURL)(Object(x.channelAction)(t.channelId, u));
								return void e(Object(r.b)(n))
							}
						}
						e(He()), e(Object(d.B)())
					}
				}, Ne = e => async (t, n) => {
					const s = n(),
						a = e || Object(U.d)(s);
					a && (await t(xe(a)), await B.a.markChannelAsRead(), t(Object(u.b)()))
				}, Te = Object(o.a)(V), Ae = Object(o.a)(H), Me = Object(o.a)(G), ke = Object(o.a)(z), Pe = (e, t, n) => {
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
				}, De = (e, t) => async (n, s, {
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
						n(Te());
						const s = Pe(e, l, o);
						if (s.length < 2) return;
						const c = await Object(v.b)(a(), i, s, t);
						if (c.ok) {
							const e = function(e, t) {
									return {
										channelId: Object(w.a)(e.channel_url),
										channelSendbirdUrl: e.channel_url,
										channelState: Object(S.b)(t),
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
										type: Object(S.d)(e),
										lastMessage: void 0,
										unreadMessageCount: e.unread_message_count,
										unreadMentionCount: e.unread_mention_count,
										members: Object(T.a)(e.members)
									}
								}(c.body, g.b.JOINED),
								{
									channelId: t
								} = e,
								s = Object(x.getRedirectURL)(Object(x.channelUrl)(t));
							u.sortedKeys.includes(t) ? (n(pe(t)), n(Object(p.l)(t))) : d.sortedKeys.includes(t) ? (n(Object(r.b)(s)), n(Object(p.l)(t))) : (await n(Ae({
								[t]: e
							})), n(Object(p.l)(t)), n(Object(r.b)(s)))
						} else n(Me()), n(Object(p.O)(e));
						n(ke())
					}
				}, Le = e => async t => {
					e = e.slice(0, 1), await t(Object(b.v)(e)), t(De(e)), location.origin === c.a.oldRedditUrl && t(Object(p.m)(e))
				}, Re = e => async (t, n, {
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
						l = Object(A.A)(a, "channelSendbirdUrl");
					if (c && o) {
						const n = Pe(e, i);
						(await Object(v.i)(s(), o, n, l)).body ? (t(Object(p.d)()), t(Object(r.a)())) : Object(I.b)("Error inviting user to existing channel")
					}
				}, Ue = (e, t) => async (n, s) => {
					const a = s(),
						r = e === g.b.INVITED,
						c = M(a, t),
						o = k(a);
					r ? c.channelId ? n(Be(c)) : n(Be(o)) : o.channelId ? n(Be(o)) : n(Fe())
				}, Fe = () => async (e, t) => {
					const n = t();
					if (n.channels.firstLoaded) {
						const t = ((e, t) => {
							const n = [...t ? [D(e)] : [], ...P(e)];
							return L(n)
						})(n, !!n.platform.currentPage);
						e(Be(t))
					}
				}, Be = e => async t => {
					if (e && e.channelId) {
						if (e.channelAction) {
							const n = Object(x.getRedirectURL)(Object(x.channelAction)(e.channelId, e.channelAction));
							t(Object(r.c)(n))
						} else {
							const n = Object(x.getRedirectURL)(Object(x.channelUrl)(e.channelId));
							t(Object(r.c)(n))
						}
						return
					}
					const n = Object(x.getRedirectURL)(x.rootUrl);
					t(Object(r.c)(n))
				}, He = e => async (t, n) => {
					const {
						platform: {
							currentPage: s
						}
					} = n();
					if (s && s.urlParams.userIds) {
						const e = s.urlParams.userIds.split(",");
						return t(Le(e))
					}
					if (e) return t(Ue(e));
					const a = Object(E.b)(n());
					if (a) {
						const e = Object(A.i)(n(), a);
						if (e) {
							const n = Object(x.getChannelUrl)(e),
								s = Object(x.getRedirectURL)(n);
							return void t(Object(r.b)(s))
						}
					}
					return t(Fe())
				}, Ge = Object(o.a)(ne), Ve = Object(o.a)(se), ze = Object(o.a)(ee), We = Object(o.a)(te), Ke = Object(o.a)(ae), Ze = Object(o.a)(re), qe = Object(o.a)(oe), Qe = () => async (e, t) => {
					await Promise.all([e($e()), e(Ye()), e(Xe())]);
					const n = t().channels.models;
					await e(Je(n)), e(qe()), e(we())
				}, Je = e => async t => {
					const n = Object(S.c)(e, [y.a.Direct, y.a.Group]);
					if (!n) return;
					const s = {};
					for (const e in n) {
						const t = n[e];
						t.channelState !== g.b.PARTIAL && (s[t.channelId] = t)
					}
					if (s) {
						const e = [];
						for (const t in s) s[t].members.map(t => e.push(t.id));
						t(Object(b.v)(e))
					}
				}, Ye = () => async (e, t) => {
					e(Ge());
					const n = await B.a.getExistingChannels(g.b.INVITED).catch(() => null);
					if (n) {
						const {
							hasMoreChannels: t
						} = n, s = Object(y.f)(n.channels);
						return e(Je(s)), void e(Ke({
							channels: s,
							hasMoreChannels: t
						}))
					}
					e(Ve()), Object(I.b)("Error fetching invited channels")
				}, Xe = () => async (e, t) => {
					e(ze());
					const n = await B.a.getExistingChannels(g.b.JOINED).catch(t => {
						Object(I.b)(t), e(We())
					});
					if (n) {
						const {
							hasMoreChannels: s
						} = n, a = Object(y.f)(n.channels), r = Object(A.u)(t());
						return e(Ze({
							channels: a,
							hasMoreChannels: s
						})), void(s && r < f.a.InitChannels && e(Xe()))
					}
					e(We())
				}, $e = () => async (e, t) => {
					const n = t(),
						s = Object(U.d)(n);
					s && await B.a.addChannelModelByChannelId(s)
				}, et = (Object(o.a)(q), Object(o.a)(Q), Object(o.a)(le)), tt = e => async (t, n, {
					gqlContext: s
				}) => {
					var a, r, c;
					const o = n(),
						i = Object(A.A)(o, "channelState"),
						l = {
							channelSendbirdId: e
						},
						d = await ((e, t) => Object(C.a)(e, {
							..._,
							variables: t
						}))(s(), {
							input: l
						});
					if ((null === (r = null === (a = d.error) || void 0 === a ? void 0 : a.fields) || void 0 === r ? void 0 : r.length) || (e => Boolean(e && e.data && e.data.leaveChatChannel))(d.body) && (null === (c = d.body.data.leaveChatChannel.errors) || void 0 === c ? void 0 : c.length)) return t(Object(m.e)()), Object(I.b)(`Error leaving channels: ${d.error}`);
					await t(Ue(i, e)), t(he(e))
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
				return _
			})), n.d(t, "a", (function() {
				return v
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
				p = n("./src/chat/selectors/experiments.ts"),
				b = n("./src/chat/singleton/SendbirdSDK.ts");
			const {
				INVITE_MEMBERS: f,
				LEAVE: g,
				VIEW_MEMBERS: O
			} = l.a, E = () => async (e, t) => {
				const n = t(),
					{
						channelId: a
					} = Object(m.w)(n),
					r = Object(h.getRedirectURL)(Object(h.channelAction)(a, f));
				e(Object(s.b)(r))
			}, C = e => async t => {
				t(Object(c.b)()), t(Object(o.c)({
					tooltipId: e
				})), t(Object(i.S)())
			}, j = e => async t => {
				e && (t(Object(i.r)()), window.open(Object(h.viewProfileUrl)(e)))
			}, _ = () => async (e, t) => {
				const n = t(),
					{
						channelId: a
					} = Object(m.w)(n),
					r = Object(h.getRedirectURL)(Object(h.channelAction)(a, O));
				e(Object(s.b)(r))
			}, v = "CHANNEL__UPDATE_CHANNEL_NAME", I = Object(a.a)(v), x = e => async (t, n) => {
				const s = Object(m.w)(n());
				if (s) {
					const n = {
							...s,
							name: e
						},
						a = {
							...s
						};
					t(I(n)), await b.a.updateChannel(n).catch(e => {
						Object(u.b)(e), t(I(a))
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
				apiContext: s
			}) => {
				const a = n(),
					c = Object(p.d)(a);
				await Promise.all([Object(d.k)(s(), e.channelId, c), b.a.setPushPreference(e.channelId, !0)]).then(() => {
					const n = Object(m.i)(a, e);
					n && t(Object(r.P)({
						...n,
						isNotifsMuted: !0
					}))
				}).catch(u.b)
			}, N = e => async (t, n, {
				apiContext: s
			}) => {
				const a = n(),
					c = Object(p.d)(a);
				await Promise.all([Object(d.m)(s(), e.channelId, c), b.a.setPushPreference(e.channelId, !1)]).then(() => {
					const n = Object(m.i)(a, e);
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
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/chat/selectors/channels.ts");
			const r = "CHANNEL__MESSAGE_QUICK_REPLY_ADD_USER_ID",
				c = "CHANNEL__MESSAGE_QUICK_REPLY_REMOVE_USER_ID",
				o = Object(s.a)(r),
				i = Object(s.a)(c),
				l = e => async (t, n) => {
					const s = n(),
						r = Object(a.q)(s, e);
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
								queryParams: e
							}))
						}
					}
				}
		},
		"./src/chat/actions/gifs/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "k", (function() {
				return I
			})), n.d(t, "i", (function() {
				return y
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/chat/actions/toast.ts"),
				r = n("./src/chat/endpoints/gifs/index.ts"),
				c = n("./src/chat/selectors/gifs.ts");
			const o = "GIF__SET_SEARCH_QUERY",
				i = "GIF__FETCH_TRENDING_START",
				l = "GIF__FETCH_TRENDING_SUCCESS",
				d = "GIF__FETCH_TRENDING_ERROR",
				u = "GIF__SEARCH_START",
				h = "GIF__SEARCH_SUCCESS",
				m = "GIF__SEARCH_ERROR",
				p = "GIF__CLEAR_ERROR",
				b = Object(s.a)(i),
				f = Object(s.a)(l),
				g = Object(s.a)(d),
				O = Object(s.a)(o),
				E = Object(s.a)(u),
				C = Object(s.a)(h),
				j = Object(s.a)(m),
				_ = Object(s.a)(p),
				v = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						i = Object(c.g)(o),
						l = Object(c.c)(o);
					if (!i || l) {
						t(b()), t(O(""));
						const n = await Object(r.b)(s(), {
							first: e
						});
						if ((null == n ? void 0 : n.ok) && !(null == n ? void 0 : n.error)) {
							const e = n.body,
								s = x(e);
							t(f(s))
						} else t(Object(a.e)()), t(g())
					}
				}, I = (e, t) => async (n, s, {
					gqlContext: o
				}) => {
					var i, l;
					if (!t) return;
					const d = s(),
						u = Object(c.c)(d),
						h = Object(c.b)(d),
						m = t === h,
						p = m ? null === (i = d.gifs.search.models[t]) || void 0 === i ? void 0 : i.pageInfo.endCursor : "";
					if ((null === (l = d.gifs.search.models[t]) || void 0 === l ? void 0 : l.ids.length) && !u && !m) n(O(t));
					else if (Object(c.e)(d) || !p) {
						u && n(_(t)), n(E({
							query: t,
							cursor: p
						}));
						const s = await Object(r.c)(o(), {
							first: e,
							query: t,
							after: p
						});
						if ((null == s ? void 0 : s.ok) && !(null == s ? void 0 : s.error)) {
							const e = s.body,
								a = x(e, t);
							n(C({
								cursor: p,
								gifsData: a
							}))
						} else n(Object(a.e)()), n(j({
							cursor: p,
							query: t
						}))
					}
				}, x = (e, t = "") => {
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
				}, y = () => async (e, t) => {
					Object(c.b)(t()) && e(O(""))
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
						r = Object(l.x)(a);
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
							n(C(r, t, e))
						} else n(p())
					}
				}, f = "MEMBERS__FETCHING_MEMBERS_COMPLETED", g = Object(r.a)(f), O = "MEMBERS__ADD_CHANNEL_MEMBERS", E = Object(r.a)(O), C = (e, t, n) => async (s, r, {
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
						s(E({
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
				const s = Object(o.x)(n()),
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
				return R
			})), n.d(t, "o", (function() {
				return F
			})), n.d(t, "q", (function() {
				return B
			})), n.d(t, "y", (function() {
				return H
			})), n.d(t, "m", (function() {
				return G
			})), n.d(t, "k", (function() {
				return z
			})), n.d(t, "x", (function() {
				return W
			})), n.d(t, "i", (function() {
				return q
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
				return Ee
			})), n.d(t, "h", (function() {
				return Ce
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
				P = Object(o.a)(k),
				D = (e, t, n) => async (s, a) => {
					const r = a(),
						c = Object(S.b)(n),
						o = await L(t, r);
					M.a.addMessage(t, n, o).then(t => {
						const n = {
							[t.messageId]: t
						};
						s(P({
							message: n,
							channelId: e,
							clientMessageId: c
						})), s(Object(d.K)(t.messageId)), s(Object(C.c)(t))
					}).catch(e => {
						if (c) {
							const t = `${e.code}: ${e.message}`;
							s(Object(d.R)(c, t)), s(V({
								clientMessageId: c,
								toggle: !0
							}))
						}
					})
				}, L = async (e, t) => {
					const n = Object(c.d)(e);
					if (!n.length) return [];
					const s = [];
					return [...n.map(e => {
						const n = Object(T.f)(t, e);
						return n || s.push(e), n && n.id
					}).filter(e => e), ...(s.length && a()(await Promise.all(s.slice(0, 3).map(e => M.a.searchMemberByName(e, !0)))) || []).map(e => e && e.id).filter(e => e)]
				}, R = "MESSAGE__ADD_PENDING_ONE", U = Object(o.a)(R), F = (e, t) => async (n, s, {
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
				}, B = (e, t, n) => async (s, a) => {
					var r;
					const o = a(),
						i = c.b.match(t),
						d = 1 === (null == i ? void 0 : i.length) && 1 === t.trim().split(" ").length;
					if (Object(x.isRedditLink)(null === (r = null == i ? void 0 : i[0]) || void 0 === r ? void 0 : r.url) && d) s(K(e, t));
					else if (d) s(Z(e, t));
					else {
						const a = Object(y.b)(o, e, t, n);
						s(U(a)), s(D(e, t, a.data))
					}
					s(Object(l.removeUserIdFormQuickReplyListByChannelId)(e))
				}, H = (e, t) => async (n, s) => {
					const a = s(),
						r = Object(A.f)(a, t);
					r && (n(V({
						clientMessageId: t,
						toggle: !1
					})), n(D(e, r.messageData.value, r.data)))
				}, G = "MESSAGE__TOGGLE_PENDING_MESSAGE_ERROR", V = Object(o.a)(G), z = "MESSAGE__REMOVE_PENDING_ONE", W = Object(o.a)(z), K = (e, t) => async (n, s) => {
					const a = s(),
						r = Object(x.getChatUnitType)(t),
						c = Object(y.b)(a, e, t, r.type);
					c && (n(U(c)), n(D(e, c.messageData.value, c.data)))
				}, Z = (e, t) => async (n, s) => {
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
							const s = JSON.stringify(l),
								a = JSON.stringify(Object(S.a)(s, i, d.clientMessageId));
							n(D(e, l.url, a))
						}
					}
				}, q = "MESSAGE__RECEIVE_ADD_ONE", Q = Object(o.a)(q), J = e => async (t, n) => {
					const {
						messageId: s,
						messageData: {
							clientMessageId: a
						}
					} = e, r = n(), c = Object(N.x)(r) === e.channelId;
					Object(w.b)(r) && c && t(Object(i.H)(e.channelId));
					const o = Boolean(Object(A.f)(r, a));
					await t(Q({
						[s]: e
					})), t(Object(C.c)(e)), o && t(Object(d.M)(s))
				}, Y = "MESSAGE__ADD_LIST", X = Object(o.a)(Y), $ = (e, t) => async n => {
					n(X({
						channelId: t,
						...e
					})), n(Object(C.d)(e)), n(Object(j.b)())
				}, ee = "MESSAGE__SET_MESSAGE_LIST_IS_LOADED", te = Object(o.a)(ee), ne = "MESSAGE__DELETE_ONE", se = Object(o.a)(ne), ae = e => async (t, n) => {
					const s = n(),
						a = Object(A.b)(s, e);
					a && a.messageType === u.d.USER && M.a.deleteMessage(a).then(() => t(se(a.messageId))).then(() => t(Object(r.a)()))
				}, re = "MESSAGE__RECEIVE_DELETE_ONE", ce = Object(o.a)(re), oe = e => async (t, n) => {
					t(ce(e))
				}, ie = "MESSAGE__GET_PREVIOUS_MESSAGES_START", le = "MESSAGE__GET_PREVIOUS_MESSAGES_END", de = "MESSAGE__GET_PREVIOUS_MESSAGES_ERROR", ue = Object(o.a)(ie), he = Object(o.a)(le), me = Object(o.a)(de), pe = e => async (t, n) => {
					const s = Object(N.A)(n(), "channelId");
					t(ue(s)), t(Object(d.U)()), s && await M.a.getPreviousMessages(e).then(e => {
						t(he({
							channelId: s,
							...e
						})), t(Object(C.d)(e))
					}).catch(() => t(me(s)))
				}, be = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					try {
						await Object(v.h)(a(), t, e)
					} catch (r) {
						Object(I.b)(r)
					}
				}, fe = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					try {
						await Object(v.c)(a(), t, e)
					} catch (r) {
						Object(I.b)(r)
					}
				}, ge = "MESSAGE__UNCOLLAPSE", Oe = Object(o.a)(ge), Ee = e => async t => {
					t(Oe(e))
				}, Ce = "MESSAGE__HIDE_REPORT_PROMPT_FOR_COLLAPSE_MESSAGE", je = Object(o.a)(Ce)
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
				o = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/ChatUnitDetails.json");
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
						const e = await ((e, t) => Object(o.a)(e, {
							...i,
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
						const e = await Object(l.g)(t(), n);
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
				}, o.Ob, {
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
				return c
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return l
			}));
			var s = n("./src/chat/actions/channel.ts"),
				a = n("./src/chat/actions/user.ts");

			function r(e) {
				return t => async (n, s, r) => {
					await Object(a.l)()(n, s, r), await Object(a.o)()(n, s, r), await e(t)(n, s, r)
				}
			}
			const c = r(e => async (e, t, n) => {}),
				o = r(e => async (e, t, n) => {}),
				i = r(e => async (e, t, n) => {}),
				l = r(e => async (e, t) => {
					const {
						platform: {
							currentPage: n
						}
					} = t();
					if (n && n.urlParams.userIds) {
						const t = n.urlParams.userIds.split(",");
						e(Object(s.z)(t))
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
						n.match.params.subredditName && r(Object(o.l)()), n.match.params.channelId && r(Object(c.L)())
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
							Object(s.d)("chat.promo", t, a.lc)
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
					const s = await Object(a.d)(n());
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
				return E
			})), n.d(t, "g", (function() {
				return C
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
							const e = await Object(i.f)(r(), l);
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
				}, O = "SENDBIRD__ADD_MEMBERS_TO_KNOWN_CONTACTS", E = Object(r.a)(O), C = "SENDBIRD__SET_REDDIT_CONTACT_LIST", j = 6 * a.O, _ = Object(r.a)(C), v = () => async (e, t, {
					apiContext: n
				}) => {
					const r = t(),
						c = r.contacts.models,
						o = Object(s.c)(a.o.CHAT, a.w.CHAT_SENDBIRD_CONTACTS_KEY, r.user.account.id),
						d = Object(s.b)(o);
					if (d && d.version === l.a) return void e(_(d.data));
					const u = t().user.session;
					if (!u) return;
					const h = await Object(i.e)(n(), u, 25),
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
						} else t(Object(c.P)(e.username));
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
					})), Object(i.l)(n()))
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
				return C
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
				E = Object(s.a)(b),
				C = e => async (t, n) => {
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
						o && t(Object(i.f)({
							toast: d.a.ConnectionPending
						})), e = e || p.token, m.a.connect(b, e, n, t).then(e => {
							if (e.error) t(O(e.error)), t(v({
								...g
							})), t(Object(i.f)({
								toast: d.a.ConnectionClosed
							}));
							else {
								if (t(E()), o) {
									const e = !0;
									t(Object(r.t)(e)), t(Object(i.f)({
										toast: d.a.ConnectionOpen
									})), t(Object(i.c)(3))
								}
								t(Object(c.b)()), t(Object(a.C)())
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
				return c
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/chat/constants/toast.ts"),
				r = n("./src/lib/constants/index.ts");
			const c = "TOAST__RESET_TOAST",
				o = Object(s.a)(c),
				i = "TOAST__UPDATE_TOAST",
				l = Object(s.a)(i),
				d = e => async (t, n) => {
					setTimeout(() => t(o()), e * r.Ob)
				}, u = (e = 3) => async (t, n) => {
					t(l({
						toast: a.a.SomethingWentWrong
					})), t(d(e))
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
				return E
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "K", (function() {
				return j
			})), n.d(t, "R", (function() {
				return _
			})), n.d(t, "L", (function() {
				return v
			})), n.d(t, "U", (function() {
				return I
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "Q", (function() {
				return y
			})), n.d(t, "y", (function() {
				return S
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "S", (function() {
				return N
			})), n.d(t, "I", (function() {
				return T
			})), n.d(t, "w", (function() {
				return A
			})), n.d(t, "z", (function() {
				return M
			})), n.d(t, "C", (function() {
				return k
			})), n.d(t, "B", (function() {
				return P
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "u", (function() {
				return L
			})), n.d(t, "H", (function() {
				return R
			})), n.d(t, "V", (function() {
				return U
			})), n.d(t, "J", (function() {
				return F
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "P", (function() {
				return H
			})), n.d(t, "O", (function() {
				return G
			})), n.d(t, "l", (function() {
				return V
			})), n.d(t, "i", (function() {
				return z
			})), n.d(t, "d", (function() {
				return W
			})), n.d(t, "n", (function() {
				return K
			})), n.d(t, "p", (function() {
				return Z
			})), n.d(t, "r", (function() {
				return q
			})), n.d(t, "o", (function() {
				return Q
			})), n.d(t, "q", (function() {
				return J
			})), n.d(t, "f", (function() {
				return Y
			})), n.d(t, "v", (function() {
				return X
			})), n.d(t, "E", (function() {
				return $
			})), n.d(t, "N", (function() {
				return ee
			})), n.d(t, "m", (function() {
				return te
			})), n.d(t, "h", (function() {
				return ne
			})), n.d(t, "s", (function() {
				return se
			})), n.d(t, "x", (function() {
				return ae
			})), n.d(t, "A", (function() {
				return re
			})), n.d(t, "D", (function() {
				return ce
			})), n.d(t, "T", (function() {
				return oe
			})), n.d(t, "G", (function() {
				return ie
			})), n.d(t, "b", (function() {
				return le
			})), n.d(t, "F", (function() {
				return de
			})), n.d(t, "t", (function() {
				return ue
			})), n.d(t, "M", (function() {
				return he
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
				b = n("./src/chat/tracking/events/contactsList.ts"),
				f = (n("./src/chat/tracking/events/experiment.ts"), n("./src/chat/tracking/events/invitationInbox.ts")),
				g = n("./src/chat/tracking/events/messagesInbox.ts");
			var O, E;
			! function(e) {
				e.AWARD_RECEIVED = "award_received"
			}(O || (O = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND", e[e.THIRD = 3] = "THIRD"
			}(E || (E = {}));
			const C = () => async (e, t) => {
				Object(g.b)(t())
			}, j = e => async (t, n) => {
				Object(p.f)(n(), e)
			}, _ = (e, t) => async (n, s) => {
				Object(p.j)(s(), e, t)
			}, v = (e, t) => async (n, s) => {
				Object(p.g)(s(), e, t)
			}, I = () => async (e, t) => {
				Object(p.k)(t())
			}, x = () => async (e, t) => {
				Object(p.a)(t())
			}, y = () => async (e, t) => {
				Object(p.h)(t())
			}, S = (e, t) => async (n, s) => {
				Object(p.d)(s(), e, t)
			}, w = () => async (e, t) => {
				Object(p.b)(t())
			}, N = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "chat_settings",
					source: s.b.ChatSettings,
					action: s.a.View,
					chat: {
						...Object(d.z)(e),
						...Object(d.p)(e),
						...Object(d.f)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, T = e => async (t, n) => {
				((e, t) => Object(h.a)({
					noun: "chat_member_block",
					source: s.b.ChatSettings,
					action: s.a.Submit,
					chat: {
						...Object(d.z)(e),
						...Object(d.p)(e),
						...Object(d.f)(e)
					},
					targetUser: {
						id: t
					},
					...Object(u.a)(e)
				}))(n(), e)
			}, A = () => async (e, t) => {
				const n = t();
				Object(l.c)(n) !== r.a.VIEW_INVITE && (e => {
					Object(h.a)({
						noun: "view_profile",
						source: s.b.ChatSettings,
						action: s.a.Click,
						chat: {
							...Object(d.z)(e),
							...Object(d.p)(e),
							...Object(d.t)(e),
							...Object(d.f)(e)
						},
						...Object(u.a)(e)
					})
				})(n)
			}, M = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "leave_chat",
					source: s.b.ChatSettings,
					action: s.a.Confirm,
					chat: {
						...Object(d.z)(e),
						...Object(d.p)(e),
						...Object(d.f)(e),
						...Object(d.x)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, k = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "badging",
					source: s.b.ChatSettings,
					action: s.a.Enable,
					chat: {
						...Object(d.z)(e),
						...Object(d.p)(e),
						...Object(d.f)(e),
						...Object(d.x)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, P = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "badging",
					source: s.b.ChatSettings,
					action: s.a.Disable,
					chat: {
						...Object(d.z)(e),
						...Object(d.p)(e),
						...Object(d.f)(e),
						...Object(d.x)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, D = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "add_to_group",
					source: s.b.ChatSettings,
					action: s.a.Click,
					chat: {
						...Object(d.z)(e),
						...Object(d.p)(e),
						...Object(d.f)(e),
						...Object(d.x)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, L = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "rename_group",
					source: s.b.ChatSettings,
					action: s.a.Click,
					chat: {
						...Object(d.z)(e),
						...Object(d.p)(e),
						...Object(d.f)(e),
						...Object(d.x)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, R = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "rename_group",
					source: s.b.ChatSettings,
					action: s.a.Save,
					chat: {
						...Object(d.z)(e),
						...Object(d.p)(e),
						...Object(d.f)(e),
						...Object(d.x)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, U = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "view_members",
					source: s.b.ChatSettings,
					action: s.a.Click,
					chat: {
						...Object(d.z)(e),
						...Object(d.p)(e),
						...Object(d.f)(e),
						...Object(d.x)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, F = e => async (t, n) => {
				((e, t) => {
					Object(h.a)({
						noun: "chat_member_report",
						source: s.b.ChatSettings,
						action: s.a.Submit,
						chat: {
							...Object(d.z)(e),
							...Object(d.p)(e),
							...Object(d.f)(e),
							...Object(d.v)(t)
						},
						...Object(u.a)(e)
					})
				})(n(), e)
			}, B = e => async (t, n) => {
				Object(b.c)(n(), e)
			}, H = e => async (t, n) => {
				Object(o.c)(n(), e) && Object(b.f)(n())
			}, G = e => async (t, n) => {
				const s = n(),
					a = e && e.filter(e => e !== s.user.account.id),
					r = a && a[0],
					c = s.contacts.models[r],
					i = c && c.name,
					l = Object(o.a)(n(), i);
				l && Object(b.e)(n(), l)
			}, V = e => async (t, n) => {
				Object(b.d)(n(), e)
			}, z = () => async (e, t) => {
				Object(b.b)(t())
			}, W = () => async (e, t) => {
				Object(b.a)(t())
			}, K = e => async (t, n) => {
				const s = n(),
					a = Object(c.h)(s, e);
				Object(f.d)(s, a, a ? O.AWARD_RECEIVED : void 0)
			}, Z = e => async (t, n) => {
				const s = n(),
					a = Object(c.h)(s, e);
				Object(f.f)(s, a, a ? O.AWARD_RECEIVED : void 0)
			}, q = () => async (e, t) => {
				const n = t();
				Object(l.c)(n) === r.a.VIEW_INVITE && Object(f.h)(n)
			}, Q = () => async (e, t) => {
				const n = t();
				Object(l.c)(n) === r.a.VIEW_INVITE && Object(f.e)(n)
			}, J = () => async (e, t) => {
				const n = t();
				Object(l.c)(n) === r.a.VIEW_INVITE && Object(f.g)(n)
			}, Y = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "edit_theme",
					source: s.b.ChatSettings,
					action: s.a.Click,
					chat: {
						...Object(d.z)(e),
						...Object(d.p)(e),
						...Object(d.f)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, X = e => async (t, n) => {
				((e, t) => Object(h.a)({
					noun: "select_theme",
					source: s.b.ChatSettings,
					action: s.a.Click,
					chat: {
						...Object(d.z)(e),
						...Object(d.p)(e),
						...Object(d.f)(e)
					},
					...Object(u.a)(e),
					actionInfo: {
						...Object(m.a)(e),
						settingValue: t
					}
				}))(n(), e)
			}, $ = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "channel",
					source: s.b.ChatSettings,
					action: s.a.Mute,
					chat: {
						...Object(d.z)(e),
						...Object(d.p)(e),
						...Object(d.f)(e),
						...Object(d.x)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, ee = () => async (e, t) => {
				(e => Object(h.a)({
					noun: "channel",
					source: s.b.ChatSettings,
					action: s.a.Unmute,
					chat: {
						...Object(d.z)(e),
						...Object(d.p)(e),
						...Object(d.f)(e),
						...Object(d.x)(e)
					},
					...Object(u.a)(e)
				}))(t())
			}, te = e => async (t, n) => {
				((e, t) => {
					Object(h.a)({
						noun: "create_chat",
						source: s.b.UserHovercard,
						action: s.a.Click,
						chat: {
							...Object(d.D)(e, t),
							...Object(d.B)(e, t),
							...Object(d.C)(e, t)
						},
						...Object(u.a)(e),
						...Object(u.b)(e)
					})
				})(n(), e)
			}, ne = () => async (e, t) => {
				Object(g.a)(t())
			}, se = () => async (e, t) => {
				Object(g.c)(t())
			}, ae = e => async (t, n) => {
				const r = n();
				r.tooltipId === e && (e === a.b && (e => {
					Object(h.a)({
						noun: "snoomoji",
						source: s.b.ChatKeyboard,
						action: s.a.Click,
						chat: {
							...Object(d.z)(e),
							...Object(d.p)(e),
							...Object(d.f)(e)
						},
						...Object(u.a)(e)
					})
				})(r), e === a.a && (e => {
					Object(h.a)({
						noun: "share_gif",
						source: s.b.ChatKeyboard,
						action: s.a.Click,
						chat: {
							...Object(d.z)(e),
							...Object(d.p)(e),
							...Object(d.f)(e)
						},
						...Object(u.a)(e)
					})
				})(r))
			}, re = () => async (e, t) => {
				(e => {
					Object(h.a)({
						noun: "other_message",
						source: s.b.ChatView,
						action: s.a.ModDelete,
						chat: {
							...Object(d.z)(e),
							...Object(d.p)(e),
							...Object(d.f)(e),
							...Object(d.r)(e),
							...Object(d.n)(e),
							...Object(d.w)(e)
						},
						...Object(u.a)(e)
					})
				})(t())
			}, ce = e => async (t, n) => {
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
							...Object(d.z)(e),
							...Object(d.p)(e),
							...Object(d.f)(e),
							...Object(d.r)(e),
							...Object(d.n)(e),
							...Object(d.w)(e)
						},
						...Object(u.a)(e),
						actionInfo: {
							settingValue: t,
							...Object(m.a)(e)
						}
					})
				})(n(), e, c)
			}, oe = e => async (t, n) => {
				Object(f.j)(n(), e)
			}, ie = e => async (t, n) => {
				Object(f.j)(n(), e)
			}, le = (e, t) => async (n, s) => {
				Object(f.a)(s(), e, t)
			}, de = (e, t) => async (n, s) => {
				Object(f.i)(s(), e, t)
			}, ue = (e, t) => async (n, s) => {
				Object(p.c)(s(), e, t, O.AWARD_RECEIVED)
			}, he = e => async (t, n) => {
				t(j(e)), t((() => async (e, t) => {
					const n = t(),
						s = Object(i.b)(n);
					Object(p.e)(t(), s)
				})())
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
					const r = Object(c.A)(s(), "channelId"),
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
				return D
			})), n.d(t, "i", (function() {
				return L
			})), n.d(t, "v", (function() {
				return B
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
				E = n("./src/chat/models/Experiment/index.ts"),
				C = n("./src/chat/models/User/index.ts"),
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
				P = Object(i.a)(S),
				D = () => async (e, t, {
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
						} = i, s = Object(C.b)(t), a = Object(E.a)(n), r = !!s.prefNightmode;
						e(T(s)), e(P(a)), e(Object(d.switchTheme)(r))
					} else e(A(i.error))
				}, L = "USER__USERS_FETCH_COMPLETED", R = Object(i.a)("USER__USERS_FETCH_PENDING"), U = Object(i.a)(L), F = Object(i.a)("USER__USERS_FETCH_FAILED"), B = e => async (t, n, {
					apiContext: s
				}) => {
					const r = n().contacts.models,
						c = e.filter(e => !r[e]),
						o = a()(c, 100);
					if (!c.length) return;
					t(R(e));
					const i = await Promise.all(o.map(e => Object(b.e)(s(), e))).catch(() => []);
					for (const e of i)
						if (e.ok) {
							const n = Object(C.a)(e.body);
							t(U(n))
						} else t(F())
				}, H = "USERS__USERS_ADD_SELECTED", G = Object(i.a)(H), V = e => async t => {
					t(G(e)), t(Object(u.j)(e))
				}, z = "USERS__USERS_REMOVE_SELECTED", W = Object(i.a)(z), K = "USERS__USERS_REMOVE_ALL_SELECTED", Z = Object(i.a)(K), q = "USERS__BLOCK_USER_COMPLETED", Q = Object(i.a)(q), J = Object(i.a)("USERS__BLOCK_USER_FAILED"), Y = (e, t) => async (n, s, {
					apiContext: a
				}) => {
					const r = s(),
						c = r.contacts.models[e],
						i = c && c.name,
						d = Object(j.w)(r),
						u = Object(j.k)(r) || h.b.JOINED,
						p = d && d.type === g.a.Direct,
						b = Object(j.m)(r);
					if (!b) throw new f.a("currentChannel", b);
					const O = b.channelId;
					if (!O) throw new f.a("blockedChannelId", O);
					const E = await Object(m.a)(a(), e);
					E && E.ok && p ? (await _.a.hideChannel(), n(Q({
						userId: e,
						username: i
					})), t || (n(Object(l.I)(O)), n(Object(l.M)(u)))) : E && E.ok && !p ? (n(Q({
						userId: e,
						username: i
					})), t || n(Object(o.a)())) : E && n(J(E.error))
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
					await Object(p.j)(r(), e, t, n).then(() => {
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
				})), t(Object(r.S)())
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
				userId: s,
				onClick: c
			}) => a.a.createElement("button", {
				tabIndex: 0,
				className: Object(r.a)(e, {
					[i.a.small]: t
				}),
				onClick: c
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
		"./src/chat/components/ChatList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/chat/components/ChatIcon/index.tsx"),
				l = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/chat/constants/messages.ts"),
				h = n("./src/chat/helpers/linkParser/index.ts"),
				m = n("./src/chat/models/Message/index.ts"),
				p = n("./src/chat/components/Message/Preview.m.less"),
				b = n.n(p);
			const f = e => {
					const {
						message: t,
						isInvited: n
					} = e, s = (({
						currentUserId: e,
						isGroup: t,
						message: n
					}) => t && n && n.sender ? e === n.sender.userId ? l.fbt._("You:", null, {
						hk: "wP43r"
					}) : `${n.sender.nickname}:` : "")(e);
					if ((null == t ? void 0 : t.messageType) === u.d.SYSTEM && (null == t ? void 0 : t.customType) === m.a.AWARDING) return [s, " ", l.fbt._("Sent a note with an award", null, {
						hk: "4FSnF0"
					})];
					if (n) return [l.fbt._("Wants to message you", null, {
						hk: "3CbciS"
					})];
					if (!t) return [];
					switch (t.messageData.type) {
						case u.c.TEXT: {
							const {
								value: e
							} = t.messageData;
							return [s, " ", Object(h.b)(e) ? l.fbt._("Shared a link", null, {
								hk: "4bNVW7"
							}) : e]
						}
						case u.c.POST:
							return [s, " ", l.fbt._("Shared a post", null, {
								hk: "1hd8l1"
							}), " ", t.messageData.subreddit];
						case u.c.COMMENT:
							return [s, " ", l.fbt._("Shared a comment", null, {
								hk: "1cCjoi"
							}), " ", t.messageData.subreddit];
						case u.c.EMBED:
							return [s, " ", l.fbt._("Shared a link", null, {
								hk: "4bNVW7"
							}), " ", t.messageData.value];
						case u.c.SUBREDDIT:
							return [s, " ", l.fbt._("Shared a community", null, {
								hk: "t78ZE"
							}), " ", t.messageData.subreddit];
						case u.c.SNOOMOJI:
							return [s, " ", l.fbt._("Sent a Snoomoji", null, {
								hk: "4hD30K"
							})];
						case u.c.GIF:
							return [s, " ", l.fbt._("Sent a Gif", null, {
								hk: "2DVhUf"
							})];
						default:
							return []
					}
				},
				g = d.a.wrapped(e => a.a.createElement("sub", {
					className: Object(o.a)(e.className, {
						[b.a.active]: e.isActive,
						[b.a.unread]: e.isInvited || e.isUnread
					})
				}, f(e)), "MessagePreview", b.a);
			var O = n("./src/chat/constants/channels.ts"),
				E = n("./src/chat/controls/Counter/index.tsx"),
				C = n("./src/chat/helpers/urls/index.ts"),
				j = n("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				_ = n("./src/chat/selectors/channels.ts"),
				v = n("./src/chat/selectors/experiments.ts"),
				I = n("./src/chat/components/ChatListItem/index.m.less"),
				x = n.n(I);
			const y = ({
				active: e,
				children: t,
				unread: n
			}) => a.a.createElement("h4", {
				className: Object(o.a)(x.a.ItemTitleName, {
					[x.a.active]: e,
					[x.a.unread]: n
				})
			}, t);
			var S = ({
					channelId: e,
					currentUserId: t,
					isGroup: n,
					isSelected: l,
					channelState: d,
					message: u,
					unread: h,
					mentionCount: m
				}) => {
					var p;
					const b = Object(r.e)(t => Object(_.s)(t, e)),
						f = Object(r.e)(t => Object(_.l)(t, e)),
						I = Object(r.e)(t => Object(_.J)(t, {
							channelId: e
						})),
						S = Object(r.e)(v.d),
						w = d === O.b.INVITED,
						N = Object(s.useMemo)(() => w ? Object(C.channelAction)(e, O.a.VIEW_INVITE) : Object(C.channelUrl)(e), [w, e]),
						T = Object(s.useMemo)(() => Object(C.getRedirectURL)(N), [N]);
					return a.a.createElement(c.a, {
						to: T,
						className: Object(o.a)(x.a.ChatListItem, {
							[x.a.selected]: l,
							[x.a.unread]: h
						})
					}, (null == b ? void 0 : b.firstUser) && a.a.createElement(i.a, {
						className: x.a.ChatIcon,
						userId: b.firstUser.id,
						secondUserId: null === (p = b.secondUser) || void 0 === p ? void 0 : p.id
					}), a.a.createElement("div", {
						className: x.a.ItemTitle
					}, a.a.createElement(y, {
						unread: h || w,
						active: l
					}, a.a.createElement("span", {
						className: x.a.ChannelName
					}, f)), a.a.createElement("div", {
						className: x.a.Description
					}, a.a.createElement(g, {
						currentUserId: t,
						isGroup: n,
						isInvited: w,
						isUnread: h,
						isActive: l,
						message: u
					}), !!m && a.a.createElement(E.b, {
						count: m
					}))), I && S && a.a.createElement(j.a, {
						className: x.a.NotificationDisabledIcon,
						isFilled: !0
					}))
				},
				w = n("./src/chat/models/Channel/index.ts"),
				N = n("./src/chat/selectors/user.ts");
			t.a = ({
				channels: e
			}) => {
				const t = Object(r.e)(N.a),
					n = Object(r.e)(_.n);
				return a.a.createElement(a.a.Fragment, null, e.map(e => {
					const {
						channelId: s,
						lastMessage: r,
						channelState: c,
						unreadMessageCount: o,
						unreadMentionCount: i
					} = e;
					return a.a.createElement(S, {
						key: s,
						channelId: s,
						channelState: c,
						isSelected: s === n,
						isGroup: e.type === w.a.Group,
						message: r,
						unread: !!o,
						mentionCount: i,
						currentUserId: t
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
				g = n("./src/chat/selectors/channels.ts"),
				O = n("./src/chat/selectors/members.ts"),
				E = n("./src/chat/selectors/user.ts"),
				C = n("./src/chat/components/ChatMemberList/index.m.less"),
				j = n.n(C);
			const _ = l.a.wrapped(u.a, "MemberActionDropdown", j.a),
				v = l.a.wrapped(({
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
					channelType: e => Object(g.A)(e, "type"),
					members: (e, t) => t.members || Object(O.b)(e, t.channelId) || [],
					currentUserId: E.a
				}),
				N = Object(c.b)(w, e => ({
					onViewProfile: t => {
						e(Object(d.r)()), e(Object(d.w)()).then(() => {
							window.open(`${o.a.redditUrl}/user/${t}`)
						})
					}
				})),
				T = ({
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
					useNSFWIcons: g
				}) => (((e, t, n) => {
					if (n && void 0 !== t && e.length >= t) {
						const s = e[t];
						s && n(s.name)
					}
				})(c, p, u), r.a.createElement("ul", {
					className: e
				}, c && c.map((e, c) => r.a.createElement(v, {
					key: e.name,
					className: Object(i.a)(h.a, {
						[j.a.selected]: p === c,
						[j.a.withMenu]: !o
					}),
					onClick: () => {
						d ? d(e.name) : m(e.name)
					}
				}, r.a.createElement(I, null, g && e.isNSFW ? r.a.createElement(b.b, null) : r.a.createElement(f.a, {
					userId: e.id
				})), r.a.createElement(x, null, e.name), e.isModerator && l && r.a.createElement(S, null, n && s.fbt._("Host", null, {
					hk: "4berci"
				})), e.isNSFW && r.a.createElement(y, null, s.fbt._("NSFW", null, {
					hk: "36qPno"
				})), e.isBlockedByMe && r.a.createElement(y, null, s.fbt._("Blocked", null, {
					hk: "1RUrSV"
				})), !o && e.id !== a && r.a.createElement(_, {
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
				E = n.n(O);
			t.a = ({
				className: e
			}) => {
				const t = Object(c.d)();
				Object(c.e)(g.a);
				return r.a.createElement(h.c, {
					className: Object(o.a)(E.a.IconButton, e),
					onClick: Object(m.b)(() => {
						t(Object(i.sizeChanged)(u.a.HIDDEN)), t(Object(d.h)()), t(Object(l.b)())
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
			var E = e => a.a.createElement("svg", {
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
			var C = e => a.a.createElement("svg", {
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
			var P = e => a.a.createElement("div", {
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
			}, a.a.createElement(T, null, a.a.createElement(E, null)), a.a.createElement(A, null, a.a.createElement(M, null, I._("Learn how to help someone in crisis", null, {
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
			}, a.a.createElement(T, null, a.a.createElement(C, null)), a.a.createElement(A, null, a.a.createElement(M, null, I._("Get yourself support", null, {
				hk: "kTT0U"
			})), a.a.createElement(k, null, I._("If this has brought up difficult emotions, there are people and resources here for you too.", null, {
				hk: "37R4JZ"
			}))), a.a.createElement(O, {
				className: v.a.CrisisLinkArrow
			}))));
			class D extends a.a.Component {
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement(s.Fragment, null, e.ctlSubmitted ? a.a.createElement(P, {
						username: e.username
					}) : a.a.createElement(g, {
						username: e.username
					}))
				}
			}
			t.a = D
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
				return vt
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
				b = n("./src/chat/actions/channel.ts"),
				f = n("./src/chat/actions/message/index.ts"),
				g = n("./src/chat/actions/message/inboxScroller.ts"),
				O = n("./src/chat/actions/message/richUnit.ts"),
				E = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/chat/helpers/json.ts"),
				j = n("./src/chat/icons/Userpic/index.tsx"),
				_ = n("./src/chat/components/Intro/index.m.less"),
				v = n.n(_);
			const I = l.a.span("Wrapper", v.a),
				x = l.a.div("ChannelDescription", v.a),
				y = l.a.ul("Users", v.a),
				S = l.a.li("User", v.a),
				w = l.a.span("UserTitle", v.a);
			var N = ({
					channel: e,
					users: t
				}) => c.a.createElement(I, null, c.a.createElement(y, null, t.map((e, t, n) => c.a.createElement(S, {
					key: e.id
				}, c.a.createElement(j.a, {
					height: "16px",
					width: "16px",
					userId: e.id
				}), c.a.createElement(w, null, `${e.name}${t<n.length-1?",":""}`)))), c.a.createElement(x, null, (e => {
					try {
						const t = e.data && Object(C.a)(e.data, {
							welcome_text: ""
						});
						if (t && t.welcome_text) return t && t.welcome_text
					} catch (t) {}
					return E.fbt._("This is the start of a beautiful thing. Say something nice, or share a cat fact.", null, {
						hk: "J8whX"
					})
				})(e))),
				T = n("./src/chat/components/MessageInput/index.tsx"),
				A = n("./src/chat/components/MessageList/Messages/index.tsx"),
				M = n("./src/chat/actions/tracking.ts"),
				k = n("./src/chat/components/MessageQuickReplyPicker/index.m.less"),
				P = n.n(k),
				D = n("./src/chat/components/Snoomoji/index.tsx"),
				L = n("./src/chat/constants/messages.ts"),
				R = n("./src/chat/selectors/channels.ts");
			const U = ["upvote", "snoo"],
				F = l.a.div("SnooWrapper", P.a),
				B = l.a.wrapped(e => {
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
							case L.c.TEXT:
								return n;
							case L.c.SNOOMOJI:
								return c.a.createElement(F, null, c.a.createElement(D.a, {
									iconName: n
								}))
						}
					})())
				}, "ReplyItem", P.a);
			var H = l.a.wrapped(e => {
					const {
						className: t,
						channelId: n
					} = e, s = Object(o.d)();
					return Object(o.e)(e => Object(R.N)(e, n)) ? c.a.createElement("div", {
						className: t
					}, c.a.createElement(B, {
						type: L.c.TEXT,
						text: E.fbt._("Thanks for the award!", null, {
							hk: "3aibi5"
						}),
						onReply: e => {
							s(Object(f.q)(n, String(e).trim(), L.c.TEXT)), s(Object(M.t)(M.a.FIRST, String(e).trim()))
						}
					}), U.map((e, t) => c.a.createElement(B, {
						type: L.c.SNOOMOJI,
						key: e,
						text: e,
						onReply: e => {
							s(Object(f.q)(n, e, L.c.SNOOMOJI)), s(Object(M.t)(t + 2, e))
						}
					}))) : null
				}, "MessageQuickReplyPicker", P.a),
				G = n("./src/chat/components/OverlayNav/index.tsx"),
				V = n("./src/chat/components/Scroller/index.tsx"),
				z = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				W = n("./src/chat/models/Channel/index.ts"),
				K = n("./src/chat/components/TypingIndicator/index.m.less"),
				Z = n.n(K);
			var q = ({
					channelType: e
				}) => {
					const t = Object(o.e)(e => e.typingIndicator.usernames);
					return (null == t ? void 0 : t.length) ? c.a.createElement("span", {
						className: Object(i.a)(Z.a.IndicatorText)
					}, ((e, t) => e === W.a.Direct ? E.fbt._("is typing...", null, {
						hk: "UTaH4"
					}) : 1 === t.length ? E.fbt._("{firstUser} is typing...", [E.fbt._param("firstUser", t[0])], {
						hk: "480JMK"
					}) : 2 === t.length ? E.fbt._("{firstUser} and {secondUser} are typing", [E.fbt._param("firstUser", t[0]), E.fbt._param("secondUser", t[1])], {
						hk: "3zfAnp"
					}) : t.length > 2 ? E.fbt._("Several people are typing...", null, {
						hk: "39edn3"
					}) : void 0)(e, t)) : null
				},
				Q = n("./src/chat/constants/batchSizes.ts"),
				J = n("./src/chat/helpers/chatSelector.ts"),
				Y = n("./src/chat/selectors/app.ts"),
				X = n("./src/chat/selectors/richUnits.ts"),
				$ = n("./src/chat/selectors/theme.ts"),
				ee = n("./src/chat/components/MessageList/index.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), se = Object(J.a)({
				currentUser: e => e.user.account,
				channelMessages: (e, {
					channel: {
						channelId: t
					}
				}) => Object(R.y)(e, t),
				channelPendingMessages: e => Object(R.z)(e),
				fetchingMessages: e => Object(R.A)(e, "fetchingMessages"),
				fetchingMessagesError: e => Object(R.A)(e, "fetchingMessagesError"),
				hasMoreMessages: e => Object(R.A)(e, "hasMoreMessages"),
				isMessageListLoaded: e => Object(R.A)(e, "isMessageListLoaded"),
				isModerator: e => Object(R.a)(e),
				isChatMinimized: Y.a,
				isRichUnitDataReceived: e => Object(X.b)(e),
				isFullSize: Y.e,
				showPrompt: $.c
			}), ae = Object(o.b)(se, e => ({
				getPreviousMessages: () => e(Object(f.t)()),
				removeAndResetMessages: t => e(Object(g.c)(t)),
				resetChannelMessageList: t => e(Object(b.K)(t)),
				resetRichUnisDataReceived: () => e(Object(O.e)())
			})), re = 30, ce = 2 * Q.a.Messages;
			class oe extends c.a.Component {
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
							case W.a.Group:
								return this.props.channel.name;
							default:
								return this.getOtherMemberName()
						}
					}, this.isSystemMessageDisplayed = (e, t) => {
						const {
							mentionType: n,
							mentionedUsers: s,
							messageType: a
						} = t;
						if (a !== L.d.SYSTEM) return !1;
						if (n === L.b.CHANNEL) return !0;
						if (n === L.b.USERS && Array.isArray(s)) {
							const t = 0 === s.length,
								n = s.some(t => e.id === t.userId);
							return t || n
						}
						return !1
					}, this.renderMessages = () => {
						const {
							currentUser: e,
							channel: t,
							channelPendingMessages: n,
							channelMessages: s
						} = this.props;
						if (s.length) {
							const a = p()([...s, ...n], "createdAt");
							return c.a.createElement(A.a, {
								channelType: t.type,
								currentUserId: e.id,
								messageList: a,
								channelId: t.channelId
							})
						}
					}, this.loadMoreRows = this.loadMoreRows.bind(this)
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
					if (t.length > re && this.isChannelSwitched(e)) {
						const e = t.length - re,
							s = t.slice(0, e);
						n(h()(s, ({
							messageId: e
						}) => String(e)))
					}
				}
				removeResetTooOldMessages() {
					var e;
					const t = this.props.channelMessages.length > ce,
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
							fetchingMessagesError: t,
							getPreviousMessages: n,
							isMessageListLoaded: s,
							isModerator: a,
							hasMoreMessages: r,
							isFullSize: o
						},
						loadMoreRows: l
					} = this, d = this.getTitle(), u = this.renderMessages(), h = !r && s && e.members;
					return c.a.createElement("div", {
						className: te.a.Container
					}, c.a.createElement(G.a, {
						channelId: e.channelId,
						showMenu: !0,
						title: d,
						channelType: null == e ? void 0 : e.type,
						showMembers: !0
					}), c.a.createElement("div", {
						className: Object(i.a)(te.a.ReverseCol, {
							[te.a.isFullSize]: o
						})
					}, c.a.createElement(V.b, {
						className: te.a.Scroller,
						autoScrollBottom: !0,
						ref: this.scroller,
						loadMoreRows: l
					}, t && c.a.createElement("span", {
						className: te.a.LoadingError,
						onClick: n
					}, ne._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})), h ? c.a.createElement(N, {
						users: e.members,
						channel: e
					}) : t ? c.a.createElement("span", {
						className: te.a.LoadingError,
						onClick: n
					}, ne._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})) : s ? c.a.createElement("span", {
						className: te.a.LoadingIndicator
					}, ne._("Loading history...", null, {
						hk: "4tLHUG"
					})) : c.a.createElement(z.e, null), u)), c.a.createElement("div", {
						className: Object(i.a)(te.a.TypingIndicatorWrapper, {
							[te.a.isFullSize]: o
						})
					}, e ? c.a.createElement(q, {
						channelType: e.type
					}) : null), c.a.createElement(H, {
						className: te.a.MessageQuickReplyPicker,
						channelId: e.channelId
					}), c.a.createElement(T.c, {
						className: te.a.MessageInput,
						channelId: e.channelId,
						isLocked: e.isFrozen,
						isModerator: a,
						isMuted: e.isUserMuted,
						onSubmit: () => {
							this.scroller.current && this.scroller.current.scrollToBottom()
						}
					}))
				}
			}
			var ie = ae(oe),
				le = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				de = n("./src/higherOrderComponents/makeAsync.tsx"),
				ue = n("./src/lib/loadWithRetries/index.ts");
			const he = () => null;
			var me = Object(de.a)({
				ErrorComponent: he,
				getComponent: () => Object(ue.a)(() => n.e("OverlayChatMembers").then(n.bind(null, "./src/chat/components/OverlayChatMembers/index.tsx"))).then(e => e.default),
				LoadingComponent: he
			});
			const pe = () => null;
			var be = Object(de.a)({
					ErrorComponent: pe,
					getComponent: () => Object(ue.a)(() => n.e("OverlayCreateChannel").then(n.bind(null, "./src/chat/components/OverlayCreateChannel/index.tsx"))).then(e => e.default),
					LoadingComponent: pe
				}),
				fe = n("./src/chat/components/Sidebar/index.tsx"),
				ge = n("./src/chat/constants/channels.ts"),
				Oe = n("./src/chat/constants/container.ts"),
				Ee = n("./src/chat/constants/page.ts");
			const Ce = () => null;
			var je = Object(de.a)({
				ErrorComponent: Ce,
				getComponent: () => Object(ue.a)(() => n.e("OverlayBlockUser").then(n.bind(null, "./src/chat/components/OverlayBlockUser/index.tsx"))).then(e => e.default),
				LoadingComponent: Ce
			});
			const _e = () => null;
			var ve = Object(de.a)({
				ErrorComponent: _e,
				getComponent: () => Object(ue.a)(() => n.e("OverlayChannelInvited").then(n.bind(null, "./src/chat/components/OverlayChannelInvited/index.tsx"))).then(e => e.default),
				LoadingComponent: _e
			});
			const Ie = () => null;
			var xe = Object(de.a)({
				ErrorComponent: Ie,
				getComponent: () => Object(ue.a)(() => n.e("OverlayChannelRemoval").then(n.bind(null, "./src/chat/components/OverlayChannelRemoval/index.tsx"))).then(e => e.default),
				LoadingComponent: Ie
			});
			const ye = () => null;
			var Se = Object(de.a)({
				ErrorComponent: ye,
				getComponent: () => Object(ue.a)(() => n.e("OverlayDeleteMessage").then(n.bind(null, "./src/chat/components/OverlayDeleteMessage/index.tsx"))).then(e => e.default),
				LoadingComponent: ye
			});
			const we = () => null;
			var Ne = Object(de.a)({
				ErrorComponent: we,
				getComponent: () => Object(ue.a)(() => n.e("OverlayDirectsEmptyState").then(n.bind(null, "./src/chat/components/OverlayDirectsEmptyState/index.tsx"))).then(e => e.default),
				LoadingComponent: we
			});
			const Te = () => null;
			var Ae = Object(de.a)({
				ErrorComponent: Te,
				getComponent: () => Object(ue.a)(() => n.e("OverlayKickUser").then(n.bind(null, "./src/chat/components/OverlayKickUser/index.tsx"))).then(e => e.default),
				LoadingComponent: Te
			});
			const Me = () => null;
			var ke = Object(de.a)({
				ErrorComponent: Me,
				getComponent: () => Object(ue.a)(() => n.e("OverlayNSFWWarning").then(n.bind(null, "./src/chat/components/OverlayNSFWWarning/index.tsx"))).then(e => e.default),
				LoadingComponent: Me
			});
			const Pe = () => null;
			var De = Object(de.a)({
					ErrorComponent: Pe,
					getComponent: () => Object(ue.a)(() => n.e("OverlayReport").then(n.bind(null, "./src/chat/components/OverlayReport/index.tsx"))).then(e => e.default),
					LoadingComponent: Pe
				}),
				Le = n("./src/config.ts"),
				Re = n("./node_modules/lodash/get.js"),
				Ue = n.n(Re),
				Fe = n("./node_modules/react-router-redux/es/index.js"),
				Be = n("./node_modules/reselect/es/index.js"),
				He = n("./src/reddit/actions/reportFlow/index.ts"),
				Ge = n("./src/reddit/actions/toaster.ts"),
				Ve = n("./src/chat/components/FormBuilder/async.tsx"),
				ze = n("./src/lib/makeGqlRequest/index.ts"),
				We = n("./src/redditGQL/operations/ReportForm.json");
			var Ke = n("./src/reddit/contexts/ApiContext.tsx"),
				Ze = n("./src/reddit/models/ReportFlow/index.ts"),
				qe = n("./src/reddit/models/Toast/index.ts"),
				Qe = n("./src/chat/components/OverlayReport/index.m.less"),
				Je = n.n(Qe),
				Ye = n("./src/chat/actions/user.ts"),
				Xe = n("./src/chat/components/CrisisFlow/CrisisFlowPage.tsx"),
				$e = n("./src/chat/components/CrisisFlow/CrisisFooter/index.m.less"),
				et = n.n($e);
			const {
				fbt: tt
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function nt(e) {
				const {
					thankYouControls: t,
					onCloseReportFlow: n,
					onCrisisFlowSubmit: s
				} = e;
				return c.a.createElement("div", {
					className: et.a.CrisisFooter
				}, t ? null : c.a.createElement("a", {
					className: et.a.CrisisButton,
					"data-redditstyle": !0,
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					target: "_blank",
					rel: "noopener noreferrer"
				}, tt._("Other Options", null, {
					hk: "1RadlV"
				})), c.a.createElement("button", {
					className: et.a.CrisisSubmitButton,
					"data-redditstyle": !0,
					onClick: t ? n : s
				}, t ? tt._("Ok", null, {
					hk: "3Pp8M4"
				}) : tt._("Yes", null, {
					hk: "12gtn"
				})))
			}
			var st = n("./src/redditGQL/operations/ReportChatMessage.json");
			const at = (e, t) => Object(ze.a)(e, {
				...st,
				variables: t
			});
			var rt = n("./src/chat/routes/chat.ts"),
				ct = n("./src/chat/selectors/messages.ts");
			var ot;
			! function(e) {
				e.Enabled = "enabled"
			}(ot || (ot = {}));
			const it = Object(Be.a)(e => e.experiments.models, e => {
				var t;
				return (null === (t = e.ae_reporting_revamp_d2x_chat) || void 0 === t ? void 0 : t.variant) === ot.Enabled
			});
			var lt = n("./src/chat/selectors/user.ts");
			const dt = l.a.div("ReportLoaderWrapper", Je.a),
				ut = l.a.img("LoadingIcon", Je.a),
				ht = "2.0",
				mt = Object(Be.c)({
					user: (e, t) => t.attr === rt.a.User ? e.contacts.models[t.attrId] : void 0,
					message: (e, t) => t.attr === rt.a.Invite || t.attr === rt.a.Message ? Object(ct.b)(e, Number(t.attrId)) : void 0,
					messageList: e => Object(R.B)(e),
					currentUserId: (e, t) => Object(lt.a)(e),
					container: e => e && e.container && e.container.size,
					isNightMode: e => Object($.b)(e),
					inReportingRevampSelector: e => it(e)
				}),
				pt = Object(o.b)(mt, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(He.b)())
					},
					onChannelBlock: t => {
						e(Ye.n(t)), e(M.I(t))
					},
					showFailToast: () => e(Object(Ge.f)({
						kind: qe.b.Error,
						text: E.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					})),
					onCancel: () => e(Object(Fe.a)()),
					submitReportMessage: (t, n) => e(Object(M.L)(t, n))
				})),
				bt = async (e, t, n) => {
					var s;
					const a = await ((e, {
						itemId: t,
						formVersion: n,
						hostAppName: s
					}) => Object(ze.a)(e, {
						...We,
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
			class ft extends c.a.Component {
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
								message: a,
								submitReportMessage: r
							}
						} = this;
						if (!a || !a.sender) return;
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: c,
							ruleType: o
						} = e, i = {
							fromHelpDesk: !1,
							senderRedditorId: a.sender.userId,
							sendbirdId: String(a.messageId),
							channelUrl: a.channelSendbirdUrl
						};
						"site" === o && (i.siteRule = Ue()(t, c.ref).value || Ue()(t, c.ref));
						(await (() => at(n(), {
							input: i
						}))()).ok || s(), i.siteRule && r(a.messageId, i.siteRule)
					}, this.onCrisisFlowSubmit = async () => {
						const {
							props: {
								gqlContext: e,
								showFailToast: t,
								message: n,
								submitReportMessage: s
							}
						} = this;
						if (!n || !n.sender) return;
						const a = {
							fromHelpDesk: !1,
							senderRedditorId: n.sender.userId,
							sendbirdId: String(n.messageId),
							channelUrl: n.channelSendbirdUrl,
							siteRule: Ze.b.SELF_HARM
						};
						this.setState({
							showCrisisFlowThankYouPage: !0
						}), (await (() => at(e(), {
							input: a
						}))()).ok || t(), s(n.messageId, Ze.b.SELF_HARM)
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
					bt(this.props.gqlContext(), e, ht).then(e => {
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
					return l && h ? c.a.createElement(c.a.Fragment, null, c.a.createElement(Xe.a, {
						username: h,
						ctlSubmitted: u
					}), r && c.a.createElement(nt, {
						onCrisisFlowSubmit: this.onCrisisFlowSubmit,
						onCloseReportFlow: this.handleReportFlowClose,
						thankYouControls: u
					})) : o && i && d && m ? c.a.createElement(Ve.a, {
						formComponent: o,
						formState: i,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: "Submit a Report",
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => s(m),
						variant: this.props.container
					}) : c.a.createElement(dt, null, c.a.createElement(ut, {
						src: a ? `${Le.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${Le.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			var gt = Object(Ke.b)(pt(ft)),
				Ot = n("./src/chat/constants/users.ts");
			const Et = e => e.channelId ? e.action === ge.a.VIEW_INVITE && e.channelId ? c.a.createElement(ve, {
				channelId: e.channelId
			}) : e.action === ge.a.VIEW_MEMBERS && e.channelId ? c.a.createElement(me, {
				channelId: e.channelId
			}) : e.action === ge.a.VIEW_NSFW_CONFIRMATION && e.channelId ? c.a.createElement(ke, {
				channelId: e.channelId
			}) : e.action === Ot.a.Block && e.attrId && e.channelId ? c.a.createElement(je, {
				channelId: e.channelId,
				blockedUserId: e.attrId
			}) : e.action === L.a.DELETE && e.channelId && e.attrId ? c.a.createElement(Se, {
				channelId: e.channelId,
				messageId: parseInt(e.attrId)
			}) : e.action === L.a.REPORT && e.attr && e.attrId && e.channelId ? e.inReportRevamp ? c.a.createElement(gt, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : c.a.createElement(De, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : e.action === Ot.a.Kick && e.attr && e.attrId && e.channelId ? c.a.createElement(Ae, {
				channelId: e.channelId,
				attr: e.attr,
				attrId: e.attrId
			}) : e.action === ge.a.DENY && e.channelId ? c.a.createElement(xe, {
				channelId: e.channelId
			}) : void 0 : c.a.createElement(Ne, null);
			var Ct = n("./src/chat/selectors/sidebar.ts"),
				jt = n("./src/chat/components/FrameContent/index.m.less"),
				_t = n.n(jt);
			const vt = _t.a.Main,
				It = Object(J.a)({
					channel: e => Object(R.o)(e),
					container: e => e && e.container && e.container.size,
					isUserAccountEmpty: e => !e.user.account,
					isSidebarVisible: e => Object(Ct.b)(e),
					inReportingRevampSelector: e => it(e)
				}),
				xt = Object(o.b)(It, e => ({
					setInternalPromos: () => e(Object(d.b)())
				})),
				yt = l.a.main("Main", _t.a),
				St = l.a.div("Content", _t.a),
				wt = l.a.div("Modal", _t.a);
			class Nt extends c.a.Component {
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
						case r === ge.a.VIEW_MEMBERS:
							return o && c.a.createElement(me, {
								channelId: o
							});
						case r === ge.a.CREATE:
						case r === ge.a.INVITE_MEMBERS:
							return c.a.createElement(be, null);
						case t === Oe.a.MINIMIZED:
							return c.a.createElement(le.a, null);
						default: {
							const n = Et({
								...this.props.match.params,
								inReportRevamp: a
							});
							return c.a.createElement(c.a.Fragment, null, c.a.createElement(fe.b, null), c.a.createElement(St, {
								className: Object(i.a)(_t.a.Content, {
									[_t.a.hidden]: s,
									[_t.a.isFullSize]: t === Oe.a.FULL
								})
							}, n ? c.a.createElement(wt, null, n) : e && o && c.a.createElement(ie, {
								channel: e
							})))
						}
					}
				}
				render() {
					return c.a.createElement(yt, {
						id: Ee.a
					}, this.getContent())
				}
			}
			t.b = xt(Nt)
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
				E = n("./src/chat/helpers/chatSelector.ts"),
				C = n("./src/chat/helpers/dom.ts"),
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
				A = Object(E.a)({
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
						onClick: Object(C.b)(a)
					}), l.a.createElement(S, {
						tooltipId: s,
						isOpen: t === s,
						container: o(n),
						closeOnClickOutside: !0
					}, i.map((e, t) => l.a.createElement(w, {
						key: t,
						displayText: this.getDropdownOptionDisplayText(e),
						onClick: Object(C.b)(() => this.onOptionClick(e))
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
				d = n("./src/lib/opener/index.ts"),
				u = n("./src/chat/actions/theme.ts"),
				h = n("./src/chat/actions/tracking.ts"),
				m = n("./src/chat/components/ChatIcon/index.tsx"),
				p = n("./node_modules/react-router-redux/es/index.js"),
				b = n("./src/chat/constants/messages.ts"),
				f = n("./src/chat/constants/users.ts"),
				g = n("./src/chat/controls/Button/index.tsx"),
				O = n("./src/chat/helpers/urls/index.ts"),
				E = n("./src/telemetry/models/Event.ts"),
				C = n("./src/chat/components/Message/ActionButtonGroup.m.less"),
				j = n.n(C);
			const _ = ({
				children: e,
				onClick: t
			}) => r.a.createElement("span", {
				className: j.a.ActionButton,
				onClick: t
			}, e);
			var v = e => {
					const {
						channelId: t,
						message: {
							messageId: n,
							sender: s
						},
						fromCurrentUser: i,
						inPreview: l,
						isMod: d
					} = e, u = null == s ? void 0 : s.userId, h = Object(c.d)(), m = Object(a.useCallback)(() => {
						h(Object(p.b)(Object(O.messageActionUrl)(t, n, b.a.DELETE)))
					}, [h, t, n]), C = Object(a.useCallback)(() => {
						h(Object(p.b)(Object(O.inviteMessageActionUrl)(t, n, b.a.REPORT)))
					}, [h, t, n]), v = Object(a.useCallback)(() => {
						h(Object(p.b)(Object(O.messageActionUrl)(t, n, b.a.REPORT)))
					}, [h, t, n]), I = Object(a.useCallback)(() => {
						u && h(Object(p.b)(Object(O.userActionUrl)(t, u, f.a.Kick, {
							source: E.b.ChatView
						})))
					}, [h, t, u]);
					return r.a.createElement("div", {
						className: Object(o.a)(j.a.Wrapper, {
							[j.a.single]: !d || i
						})
					}, d && !i ? r.a.createElement(r.a.Fragment, null, r.a.createElement(_, {
						onClick: m
					}, r.a.createElement(g.e, {
						className: j.a.Button
					})), r.a.createElement(_, {
						onClick: () => l ? C() : v()
					}, r.a.createElement(g.b, {
						className: j.a.Button
					})), r.a.createElement(_, {
						onClick: I
					}, r.a.createElement(g.d, {
						className: j.a.Button
					}))) : i ? r.a.createElement(_, {
						onClick: m
					}, r.a.createElement(g.e, {
						className: j.a.Button
					})) : r.a.createElement(_, {
						onClick: () => l ? C() : v()
					}, r.a.createElement(g.b, {
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
						e(Object(x.C)(t)), e(Object(h.G)(t.messageId))
					},
					viewCollapsedMessage: () => {
						e(Object(h.T)(t.messageId))
					}
				}))(I.a.wrapped(({
					className: e,
					uncollapseMessage: t,
					viewCollapsedMessage: n
				}) => r.a.createElement("div", {
					onLoad: n,
					className: e
				}, s.fbt._("This message has been collapsed due to potentially offensive language.", null, {
					hk: "4qscuz"
				}), r.a.createElement("div", null, r.a.createElement(y.a, {
					onClick: t
				}, s.fbt._("View Message", null, {
					hk: "QjaEs"
				})))), "CollapsedMessage", w.a)),
				T = n("./src/chat/components/Message/FailedMenu.m.less"),
				A = n.n(T);
			const M = I.a.div("ButtonControls", A.a),
				k = I.a.span("Text", A.a),
				P = I.a.wrapped(g.a, "Button", A.a);
			class D extends a.Component {
				constructor() {
					super(...arguments), this.handleResend = () => this.props.onResend(this.props.clientMessageId), this.handleDelete = () => this.props.onDelete(this.props.clientMessageId)
				}
				render() {
					return r.a.createElement(M, null, r.a.createElement(k, null, s.fbt._("Failed to send", null, {
						hk: "2feF2H"
					})), r.a.createElement(P, {
						noBorder: !0,
						onClick: this.handleResend
					}, s.fbt._("Resend", null, {
						hk: "cXpU3"
					})), r.a.createElement(P, {
						warningNoBorder: !0,
						onClick: this.handleDelete
					}, s.fbt._("Delete", null, {
						hk: "4lt26q"
					})))
				}
			}
			var L = Object(c.b)(void 0, (e, {
					channelId: t
				}) => ({
					onResend: n => e(Object(x.y)(t, n)),
					onDelete: t => e(Object(x.x)({
						clientMessageId: t
					}))
				}))(D),
				R = n("./src/chat/components/Message/LinkedText.tsx"),
				U = n("./src/chat/components/Message/OffensiveMessageReportPrompt.m.less"),
				F = n.n(U);
			const B = I.a.wrapped(y.a, "Regular", F.a),
				H = I.a.wrapped(y.a, "Active", F.a),
				G = Object(c.b)(void 0, (e, t) => ({
					cancel: () => {
						e(Object(x.u)(t)), e(Object(h.b)(t.channelId, t.messageId))
					},
					reportMessage: () => {
						e(Object(p.b)(Object(O.inviteMessageActionUrl)(t.channelId, t.messageId, b.a.REPORT))), e(Object(x.u)(t)), e(Object(h.F)(t.channelId, t.messageId))
					}
				}));
			var V = I.a.wrapped(G(e => r.a.createElement("div", {
					className: e.className
				}, s.fbt._("Was this message offensive?", null, {
					hk: "1sBVkd"
				}), r.a.createElement("div", null, r.a.createElement(B, {
					onClick: () => e.cancel(e)
				}, s.fbt._("No", null, {
					hk: "SG3Y"
				})), r.a.createElement(H, {
					onClick: () => e.reportMessage(e)
				}, s.fbt._("Yes", null, {
					hk: "3ONldA"
				}))))), "OffensiveMessageReport", F.a),
				z = n("./src/higherOrderComponents/makeAsync.tsx"),
				W = n("./src/lib/loadWithRetries/index.ts");
			const K = () => null;
			var Z = Object(z.a)({
				ErrorComponent: K,
				getComponent: () => Object(W.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CommentRichUnit")]).then(n.bind(null, "./src/chat/components/Message/RichUnit/Comment/CommentRichUnit.tsx"))).then(e => e.default),
				LoadingComponent: K
			});
			const q = () => null;
			var Q = Object(z.a)({
				ErrorComponent: q,
				getComponent: () => Object(W.a)(() => n.e("ExternalLinkUnit").then(n.bind(null, "./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.tsx"))).then(e => e.default),
				LoadingComponent: q
			});
			const J = () => null;
			var Y = Object(z.a)({
					ErrorComponent: J,
					getComponent: () => Object(W.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("PostRichUnit")]).then(n.bind(null, "./src/chat/components/Message/RichUnit/Post/PostRichUnit.tsx"))).then(e => e.default),
					LoadingComponent: J
				}),
				X = n("./src/lib/prettyPrintNumber/index.ts"),
				$ = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.tsx"),
				ee = n("./src/chat/components/Message/RichUnit/commonComponents/Header.tsx"),
				te = n("./src/chat/components/Message/RichUnit/commonComponents/ImageContent.tsx"),
				ne = n("./src/chat/components/Message/RichUnit/Subreddit/SubredditRichUnit.m.less"),
				se = n.n(ne);
			const ae = I.a.div("Delimiter", se.a),
				re = I.a.wrapped(te.a, "ImageContent", se.a),
				ce = I.a.wrapped(({
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
				oe = I.a.wrapped(({
					className: e,
					darkBackground: t,
					richUnitData: n,
					richUnitData: {
						subscribersCount: s = 0,
						activeCount: a = 0
					}
				}) => {
					var c, i, l, u;
					const h = `${Object(X.b)(s)} members • ${Object(X.b)(a)} online`,
						m = `/r/${n.id}`;
					return r.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(d.d)(t, "_blank")
							})(e, m)
						},
						className: Object(o.a)(e, {
							[se.a.dark]: t
						})
					}, r.a.createElement(ee.a, {
						subredditName: n.id,
						iconUrl: null === (c = null == n ? void 0 : n.styles) || void 0 === c ? void 0 : c.icon,
						subredditTitle: n.title
					}), (null === (i = n.styles) || void 0 === i ? void 0 : i.bannerBackgroundImage) || !(null == n ? void 0 : n.subredditType) && !(null === (l = n.styles) || void 0 === l ? void 0 : l.bannerBackgroundImage) ? null : r.a.createElement(ae, null), (null == n ? void 0 : n.subredditType) && r.a.createElement(ce, {
						imageUrl: null === (u = null == n ? void 0 : n.styles) || void 0 === u ? void 0 : u.bannerBackgroundImage,
						title: (null == n ? void 0 : n.publicDescriptionText) || "",
						subredditType: (null == n ? void 0 : n.subredditType) || "",
						isNsfw: Boolean(null == n ? void 0 : n.isNsfw)
					}), r.a.createElement($.a, {
						isSubreddit: !0,
						metaInfo: h
					}))
				}, "SubredditRichUnit", se.a);
			var ie = I.a.wrapped(({
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ge = I.a.wrapped(he, "Approve", be.a), Oe = I.a.wrapped(me.a, "Trash", be.a), Ee = I.a.div("ButtonControls", be.a), Ce = I.a.wrapped(g.a, "Button", be.a), je = I.a.span("ButtonText", be.a);
			class _e extends a.Component {
				render() {
					const {
						onDelete: e,
						onIgnore: t,
						reportedChannelId: n,
						reportedMessageId: s
					} = this.props;
					return r.a.createElement(Ee, null, r.a.createElement(Ce, {
						noBorder: !0,
						onClick: () => e(s, n)
					}, r.a.createElement(Oe, null), r.a.createElement(je, null, fe._("Delete Message", null, {
						hk: "3ksti7"
					}))), r.a.createElement(Ce, {
						noBorder: !0,
						onClick: () => t(s, n)
					}, r.a.createElement(ge, null), r.a.createElement(je, null, fe._("Ignore Report", null, {
						hk: "1QScZP"
					}))))
				}
			}
			var ve = Object(c.b)(void 0, e => ({
					onDelete: (t, n) => e(Object(x.z)(t, n)),
					onIgnore: (t, n) => e(Object(x.A)(t, n))
				}))(_e),
				Ie = n("./src/chat/components/MemberActionDropdown/index.tsx"),
				xe = n("./src/config.ts"),
				ye = n("./src/chat/helpers/time/index.tsx"),
				Se = n("./src/chat/controls/TimeStamp/index.m.less"),
				we = n.n(Se);
			var Ne = I.a.wrapped(e => {
					const t = "number" == typeof e.date ? new Date(e.date) : e.date;
					return r.a.createElement("time", {
						className: e.className,
						dateTime: Object(ye.c)(t),
						title: Object(ye.b)(t)
					}, e.children)
				}, "TimeStamp", we.a),
				Te = n("./src/chat/components/MessageHeader/index.m.less"),
				Ae = n.n(Te);
			const Me = I.a.wrapped(Ne, "TimeStamp", Ae.a),
				ke = I.a.span("UserName", Ae.a);
			var Pe = I.a.wrapped(e => r.a.createElement("a", {
				target: d.c.BLANK,
				rel: d.b,
				className: e.className,
				href: `${xe.a.redditUrl}/user/${e.nickname}`
			}, r.a.createElement(m.a, {
				userId: e.userId,
				isSmall: !0
			}), r.a.createElement(r.a.Fragment, null, r.a.createElement(ke, null, e.nickname), r.a.createElement(Me, {
				date: e.createdAt
			}, Object(ye.d)(new Date(e.createdAt))), e.children)), "UserHeader", Ae.a);
			var De = e => r.a.createElement(ue.a, {
				className: e.className,
				disable: !0,
				viewBox: "0 0 16 16"
			}, r.a.createElement("g", {
				transform: "translate(-26.000000, -37.000000)"
			}, r.a.createElement("path", {
				d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
			})));

			function Le() {
				return (Le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Re = e => r.a.createElement(ue.a, Le({}, e, {
					viewBox: "0 0 16 16"
				}), r.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				})),
				Ue = n("./src/chat/icons/svgs/MenuOverflow/index.tsx"),
				Fe = n("./src/chat/components/MessageReportDialog/Header.m.less"),
				Be = n.n(Fe);
			const He = I.a.wrapped(De, "Group", Be.a),
				Ge = I.a.wrapped(Re, "Key", Be.a),
				Ve = I.a.wrapped(Ie.a, "MemberActionDropdown", Be.a),
				ze = I.a.wrapped(Pe, "MessageHeaderLink", Be.a),
				We = I.a.h5("ChannelName", Be.a),
				Ke = I.a.span("TextOverflow", Be.a),
				Ze = I.a.wrapped(g.c, "IconButton", Be.a),
				qe = I.a.div("Header", Be.a);
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
					return r.a.createElement(qe, null, r.a.createElement(ze, {
						createdAt: a,
						nickname: i,
						userId: o
					}, r.a.createElement(We, null, n ? r.a.createElement(He, null) : r.a.createElement(Ge, null), r.a.createElement(Ke, null, s))), r.a.createElement(Ve, {
						channelId: t,
						containerClassName: l,
						className: l,
						dropdownIndex: 0,
						id: `UserAction--Select-${c}`,
						isBlockedUser: !1,
						userId: o
					}, r.a.createElement(Ze, null, r.a.createElement(Ue.a, null))))
				},
				Je = n("./src/chat/components/MessageReportDialog/index.m.less"),
				Ye = n.n(Je);
			const {
				fbt: Xe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), $e = I.a.p("ReasonText", Ye.a), et = I.a.p("DeleteText", Ye.a), tt = I.a.p("AcceptText", Ye.a);
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
				at = n("./src/chat/controls/Gif/index.tsx");
			const rt = () => null;
			var ct = Object(z.a)({
					ErrorComponent: rt,
					getComponent: () => Object(W.a)(() => Promise.resolve().then(n.bind(null, "./src/chat/controls/TooltipHooked/TooltipHooked.tsx"))).then(e => e.default),
					LoadingComponent: rt
				}),
				ot = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				it = n("./src/chat/helpers/dom.ts");

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
			} = b.d, {
				POST: Ot,
				USER_POST: Et,
				COMMENT: Ct,
				SNOOMOJI: jt,
				SUBREDDIT: _t,
				EMBED: vt,
				GIF: It
			} = b.c, xt = () => {
				const e = Object(c.d)();
				return Object(c.e)(ht.b) ? r.a.createElement("div", {
					className: bt.a.ThemePrompt,
					tabIndex: 0
				}, r.a.createElement("button", {
					className: bt.a.Content,
					onClick: () => {
						e(Object(u.clickThemePrompt)()), e(Object(h.g)())
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
				isEmbedded: u,
				message: h,
				showUserPic: p,
				noPadding: b
			}, f) => {
				var g, E;
				const C = Object(l.b)(Object(ot.d)(Boolean(a)));
				return r.a.createElement("span", {
					onMouseEnter: C.show,
					onMouseLeave: C.hide,
					ref: Object(i.a)(f, C.target.ref),
					className: Object(o.a)(e, {
						[bt.a.dark]: !a,
						[bt.a.disabled]: n,
						[bt.a.withBorder]: s,
						[bt.a.currentUser]: a,
						[bt.a.embed]: u,
						[bt.a.noPadding]: b,
						[bt.a.gif]: (null == h ? void 0 : h.messageData.type) === It && !c
					})
				}, t, p && (null === (g = null == h ? void 0 : h.sender) || void 0 === g ? void 0 : g.userId) && r.a.createElement(m.a, {
					onClick: Object(it.b)(() => {
						var e;
						const t = null === (e = null == h ? void 0 : h.sender) || void 0 === e ? void 0 : e.nickname;
						if (t) {
							const e = Object(O.viewProfileUrl)(t);
							Object(d.d)(e, "_blank")
						}
					}),
					className: bt.a.UserPic,
					userId: null === (E = null == h ? void 0 : h.sender) || void 0 === E ? void 0 : E.userId
				}), (null == h ? void 0 : h.createdAt) && r.a.createElement(ct, {
					arrowProps: C.arrowProps,
					popperProps: C.popperProps,
					visible: C.visible,
					styled: !0,
					isCloseOnHover: !0,
					hide: C.hide
				}, r.a.createElement("span", {
					className: bt.a.TimestampWrapper
				}, Object(ye.d)(new Date(h.createdAt)))))
			});

			function St(e) {
				return "messageId" in e && "channelId" in e
			}

			function wt(e, t) {
				return !(e.messageData.type !== b.c.EMBED || !e.messageData.embed || t) || !(e.messageData.type !== b.c.POST && e.messageData.type !== b.c.USER_POST && e.messageData.type !== b.c.COMMENT && e.messageData.type !== b.c.SUBREDDIT || t)
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
					withButton: p
				} = e, f = Object(c.e)(e => Object(mt.a)(e, d.messageData)), g = Object(l.b)(Object(ot.a)(n)), O = Object(l.b)(Object(ot.b)());
				if (!d) return null;
				const {
					type: E,
					report: C,
					collapsedInvitePreview: j
				} = d.messageData, _ = d.messageType === ft && d.error && d.clientMessageId, I = E !== jt && (E !== It || E === It && h), x = p && !_ && !C, y = d.messageType === gt && x, S = ((e, t, n, a, c) => {
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
							return u !== ft && e ? r.a.createElement(Q, {
								name: e.name,
								title: e.title,
								thumbnailUrl: e.imageUrl,
								href: e.url,
								providerDisplay: e.providerDisplay,
								darkBackground: n,
								faviconUrl: e.faviconUrl
							}) : b;
						case Ot:
						case Et:
							return (null == a ? void 0 : a.type) !== Ot && (null == a ? void 0 : a.type) !== Et || (null == a ? void 0 : a.removedByCategory) === ut.b.Deleted ? b : r.a.createElement(Y, {
								darkBackground: n,
								postUrl: p,
								highlights: m,
								richUnitData: a
							});
						case Ct:
							return a && (null == a ? void 0 : a.type) === Ct && !a.deletedAt ? r.a.createElement(Z, {
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
							return r.a.createElement(at.a, {
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
				})(d, h, !n, f, a), w = ((e, t, n, s, a, c) => r.a.createElement(ct, {
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
				})) : r.a.createElement(v, {
					className: bt.a.ActionButtonGroup,
					message: c,
					fromCurrentUser: s,
					inPreview: a,
					isMod: n,
					channelId: c.channelId
				}), r.a.createElement(ct, {
					arrowProps: t.arrowProps,
					popperProps: t.popperProps,
					visible: t.visible,
					hide: t.hide,
					isInstant: !0,
					styled: !0
				}, r.a.createElement(v, {
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
					disabled: !!_,
					showUserPic: m,
					isEmbedded: a,
					className: Object(o.a)(bt.a.MessageBubble, (f || d.messageData.type === b.c.EMBED) && !h && {
						[bt.a.richUnit]: wt(d, !a),
						[bt.a.richUnitResponsive]: wt(d, a)
					})
				}, C && d.messageType === gt ? r.a.createElement(nt, {
					report: C,
					message: d
				}) : h && St(d) && function(e) {
					return Boolean(null == e ? void 0 : e.shouldCollapse)
				}(j) ? r.a.createElement(N, {
					channelId: d.channelId,
					messageId: d.messageId
				}) : S), y && w, u && r.a.createElement(xt, null), h && St(d) && function(e) {
					return Boolean(!(null == e ? void 0 : e.shouldCollapse) && (null == e ? void 0 : e.shouldShowReportPrompt))
				}(j) && r.a.createElement(V, {
					channelId: d.channelId,
					messageId: d.messageId
				}), _ && r.a.createElement(L, {
					channelId: d.channelId,
					clientMessageId: _
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
				E = e => a.a.createElement(h, {
					noUnderline: e.noUnderline,
					href: Object(l.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children),
				C = e => e.isEmbed ? (e => a.a.createElement(E, e, a.a.createElement(p, null, a.a.createElement(b, null, e.name)), a.a.createElement(f, null, a.a.createElement("span", null, a.a.createElement(g, null, e.title), a.a.createElement(O, null, e.description)))))(e) : (e => e.href ? a.a.createElement(E, e, e.children) : a.a.createElement(m, e, e.children))(e);
			var j = n("./src/chat/components/Message/LinkedText.m.less"),
				_ = n.n(j);
			const v = r.a.pre("MessageText", _.a),
				I = (e, t, n, s, r) => a.a.createElement(C, {
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
				E = n.n(O);
			const C = c.a.img("Image", E.a),
				j = c.a.wrapped(m, "NSFWIcon", E.a),
				_ = c.a.wrapped(b, "PrivateIcon", E.a),
				v = c.a.wrapped(g, "RestrictedIcon", E.a),
				I = c.a.wrapped(l, "EmployeesOnlyIcon", E.a),
				x = c.a.wrapped(({
					className: e
				}) => r.a.createElement("div", {
					className: e
				}, r.a.createElement(j, null), " ", s.fbt._("nsfw", null, {
					hk: "6M6nL"
				})), "NSFWIndicator", E.a),
				y = c.a.wrapped(({
					className: e
				}) => r.a.createElement("div", {
					className: e
				}, r.a.createElement(_, null), " ", s.fbt._("private", null, {
					hk: "3xzh8w"
				})), "PrivateIndicator", E.a),
				S = c.a.wrapped(({
					className: e
				}) => r.a.createElement("div", {
					className: e
				}, r.a.createElement(v, null), " ", s.fbt._("restricted", null, {
					hk: "2lC88Z"
				})), "RestrictedIndicator", E.a),
				w = c.a.wrapped(({
					className: e
				}) => r.a.createElement("div", {
					className: e
				}, r.a.createElement(I, null), " ", s.fbt._("employees only", null, {
					hk: "3uDhE6"
				})), "EmployeesOnlyIndicator", E.a),
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
				}, "SubredditTypeIndicator", E.a),
				T = c.a.wrapped(({
					className: e,
					url: t
				}) => r.a.createElement("div", {
					className: e
				}, r.a.createElement(C, {
					src: t
				})), "ImageContainer", E.a),
				A = c.a.div("Title", E.a),
				M = c.a.wrapped(u, "GalleryIcon", E.a),
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
				}) : null, n ? r.a.createElement(A, null, n) : null, s ? r.a.createElement(M, null) : null), "ImagePostRichUnit", E.a);
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
				return Ve
			})), n.d(t, "a", (function() {
				return ze
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
				E = function(e, t) {
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
				C = function(e, t, n) {
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
				P = u.a.span("Arrow", N.a);
			u.a.wrapped(e => {
				const t = Object(l.e)(x.d);
				return i.a.createElement(_.b, {
					className: Object(d.a)(e.className, {
						[N.a.embedded]: t
					})
				}, e.children)
			}, "PickerWrapper", N.a).displayName = "PickerWrapper";
			var D = ({
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
					}, i.a.createElement(k, null, n, a && i.a.createElement(P, {
						style: {
							right: `${s}px`
						}
					}))))
				},
				L = n("./node_modules/fbt/lib/FbtPublic.js"),
				R = n("./node_modules/lodash/debounce.js"),
				U = n.n(R),
				F = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				B = n("./src/chat/controls/Gif/index.tsx"),
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

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var W = e => i.a.createElement(H.a, z({}, e, {
					viewBox: "0 0 20 20"
				}), i.a.createElement("g", {
					id: "icons_flat"
				}, i.a.createElement("path", {
					d: "M19.7,18.3l-4.5-4.5c2.9-3.7,2.3-9.1-1.4-12s-9.1-2.3-12,1.4s-2.3,9.1,1.4,12c3.1,2.4,7.5,2.4,10.6,0l4.5,4.5L19.7,18.3z M8.5,15C4.9,15,2,12.1,2,8.5S4.9,2,8.5,2S15,4.9,15,8.5C15,12.1,12.1,15,8.5,15z"
				}))),
				K = n("./src/chat/selectors/gifs.ts"),
				Z = n("./src/chat/components/MessageTooltip/Picker/Gif/index.m.less"),
				q = n.n(Z);
			const Q = ({
					children: e
				}) => {
					const t = Object(l.e)(x.d);
					return i.a.createElement("div", {
						className: Object(d.a)(q.a.Wrapper, {
							[q.a.embedded]: t
						})
					}, e)
				},
				J = ({
					children: e,
					isVisible: t,
					onClick: n
				}) => t ? i.a.createElement("div", {
					className: q.a.ClearIcon,
					onClick: n
				}, e) : null,
				Y = () => {
					const e = Object(l.e)(K.b),
						[t, n] = Object(o.useState)(() => e),
						s = Object(o.useRef)(null),
						a = Object(l.d)(),
						r = Object(o.useCallback)(U()(e => {
							(null == e ? void 0 : e.length) >= 2 ? a(Object(m.k)(10, e)) : a(Object(m.l)(""))
						}, 500), []);
					return Object(o.useEffect)(() => {
						var e;
						null === (e = null == s ? void 0 : s.current) || void 0 === e || e.focus()
					}, [s]), i.a.createElement("div", {
						className: q.a.SearchBarWrapper,
						onClick: e => e.stopPropagation()
					}, i.a.createElement(W, {
						className: q.a.SearchIcon
					}), i.a.createElement("input", {
						className: q.a.SearchBar,
						ref: s,
						value: t,
						placeholder: L.fbt._("Search", null, {
							hk: "3ixhgZ"
						}),
						tabIndex: 0,
						onChange: e => {
							(e => {
								n(e), r(e)
							})(e.currentTarget.value)
						}
					}), i.a.createElement(J, {
						onClick: async () => {
							(null == s ? void 0 : s.current) && (await a(Object(m.l)("")), n(""), s.current.focus(), a(Object(m.j)(20)))
						},
						isVisible: Boolean(t)
					}, i.a.createElement(V, null)))
				},
				X = ({
					onPickGif: e
				}) => {
					const t = Object(l.d)(),
						n = Object(l.e)(K.a),
						s = Object(l.e)(K.d),
						a = Object(o.useRef)(null),
						r = Object(l.e)(K.b),
						c = Object(l.e)(K.c),
						d = Object(l.e)(K.f);
					Object(o.useEffect)(() => {
						var e;
						(null === (e = null == a ? void 0 : a.current) || void 0 === e ? void 0 : e.scrollToTop) && a.current.scrollToTop()
					}, [r]), Object(o.useEffect)(() => {
						(null == n ? void 0 : n.length) || t(Object(m.j)(20))
					}, []);
					const u = (t = !1) => (null == n ? void 0 : n.length) ? n.map((n, s) => {
						if (Boolean(s % 2) === t) return i.a.createElement(B.a, {
							className: q.a.Gif,
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
					return i.a.createElement(_.b, {
						className: q.a.GifListWrapper,
						ref: a,
						loadMoreRows: () => t(Object(m.k)(10, r)),
						isLoadMoreRowsComplete: (() => !!s) || c
					}, i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: q.a.Column
					}, u(), d ? Object(F.a)({
						height: F.f.XS
					}) : s ? Object(F.b)(F.c.FIRST) : null), i.a.createElement("div", {
						className: q.a.Column
					}, u(!0), d ? Object(F.a)({
						height: F.f.S
					}) : null, s && !d ? Object(F.b)(F.c.SECOND) : null)))
				};
			var $ = ({
					onPickGif: e
				}) => i.a.createElement(Q, null, i.a.createElement(Y, null), i.a.createElement(X, {
					onPickGif: e
				})),
				ee = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/chat/components/Snoomoji/index.tsx")),
				te = n("./src/chat/icons/Snoo/index.tsx"),
				ne = n("./src/chat/components/MessageTooltip/Picker/Snoomoji/index.m.less"),
				se = n.n(ne);
			const ae = u.a.div("IconWrapper", se.a);
			ae.displayName = "IconWrapper";
			const re = u.a.div("LoadingIndicator", se.a),
				ce = u.a.wrapped(({
					children: e,
					className: t
				}) => i.a.createElement("div", {
					className: t
				}, e), "Wrapper", se.a);
			var oe = ({
					onPickSnoomoji: e
				}) => {
					const [t, n] = Object(o.useState)(!1), s = Object(l.e)(x.d), a = Object(o.useCallback)(() => {
						Promise.all(te.b.map(e => new Promise(t => {
							const n = new Image;
							n.onload = () => t(), n.src = te.a[e]
						}))).then(() => n(!0))
					}, []);
					Object(o.useEffect)(() => {
						a()
					}, [a]);
					return i.a.createElement(_.b, {
						className: Object(d.a)(se.a.Scroller, {
							[se.a.embedded]: s
						})
					}, t ? i.a.createElement(ce, null, (() => te.b.map((t, n) => i.a.createElement(ae, {
						key: `icon-${n}`,
						onClick: () => e(t)
					}, i.a.createElement(ee.a, {
						iconName: t
					}))))()) : i.a.createElement(re, null, L.fbt._("Loading snoomoji...", null, {
						hk: "39nqLy"
					})))
				},
				ie = n("./src/lib/constants/index.ts"),
				le = n("./src/chat/actions/members.ts"),
				de = n("./src/chat/components/ChatMemberList/index.tsx"),
				ue = n("./src/chat/helpers/chatSelector.ts"),
				he = n("./src/chat/selectors/channels.ts"),
				me = n("./src/chat/selectors/members.ts"),
				pe = n("./src/chat/components/MessageTooltip/Picker/Userlist/index.m.less"),
				be = n.n(pe);
			const fe = u.a.div("LoadingIndicator", be.a),
				ge = u.a.wrapped(de.a, "ChatMemberList", be.a),
				Oe = u.a.wrapped(({
					children: e,
					className: t
				}) => i.a.createElement("div", {
					className: t
				}, e), "Wrapper", be.a),
				Ee = Object(ue.a)({
					channelId: he.x,
					channelMembers: me.f,
					hasMoreMembers: me.d,
					fetchingMembers: me.a,
					isEmbedded: x.d
				});
			class Ce extends o.Component {
				constructor(e) {
					super(e), this.fetchedFilter = "", this.isMount = !1, this.fetchSubredditChannelUsers = U()((e = "") => {
						this.props.fetchSubredditChannelUsers(e)
					}, ie.Ob, {
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
					return this.members = this.filterMembers(), this.members && this.members.length && e ? i.a.createElement(Oe, null, i.a.createElement(ge, {
						minimal: !0,
						channelId: e,
						members: this.members,
						modIndicator: !0,
						onClick: t,
						onSelectName: n,
						selectIndex: this.state.selectIndex,
						useNSFWIcons: !0
					})) : s || this.members && this.members.length ? i.a.createElement(fe, null, L.fbt._("Loading members...", null, {
						hk: "23phIt"
					})) : i.a.createElement(fe, null, L.fbt._("Member not found!", null, {
						hk: "4DkpQe"
					}))
				}
				render() {
					const {
						isEmbedded: e
					} = this.props;
					return i.a.createElement(_.b, {
						className: Object(d.a)(be.a.Scroller, {
							[be.a.embedded]: e
						})
					}, this.renderContent())
				}
			}
			var je = Object(l.b)(Ee, e => ({
					fetchSubredditChannelUsers: t => e(Object(le.e)({
						filter: t
					}))
				}))(Ce),
				_e = n("./src/chat/constants/messages.ts"),
				ve = n("./src/chat/controls/Button/index.tsx"),
				Ie = n("./src/chat/constants/keys.ts"),
				xe = n("./src/chat/singleton/SendbirdSDK.ts"),
				ye = n("./src/chat/controls/ContentEditable/index.m.less"),
				Se = n.n(ye);
			const we = 19,
				Ne = 12,
				Te = 6,
				Ae = u.a.textarea("Textarea", Se.a);
			class Me extends i.a.Component {
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
					this.props.channelId !== e.channelId && this.textarea && (this.textarea.value = e.draftText || "", this.handleSizing()), this.textarea && this.textarea.value ? xe.a.startTypingIndicator() : xe.a.endTypingIndicator(), this.textarea && e.textUpdate && (this.textarea.value = e.textUpdate, this.props.onChangeOnce(this.textarea.value), this.handleSizing()), this.textarea && this.textarea.value && e.clearText && (this.clearTextAndDropInputHeight(), this.props.onChangeOnce(""), this.handleSizing()), e.cursorPosition && this.textarea && (this.textarea.selectionStart = e.cursorPosition.selectionStart, this.textarea.selectionEnd = e.cursorPosition.selectionEnd)
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
					e.key !== Ie.g || e.shiftKey || (e.preventDefault(), this.props.onSubmit()), this.handleCursor()
				}
				handleKeyDown(e) {
					e.key === Ie.d && (this.props.onArrowUp(e), this.handleSizing()), e.key === Ie.a && (this.props.onArrowDown(e), this.handleSizing()), e.key === Ie.h && this.props.onKeyEsc(e), this.props.onKeyDown(e)
				}
				handleSizing() {
					if (this.textarea) {
						const e = this.textarea;
						e.style.height = "auto", e.style.height = e.scrollHeight + this.offset + "px", e.scrollHeight > 2 * we + Ne ? e.style.paddingTop = "0px" : e.style.paddingTop = "12px", e.scrollHeight > we * Te + 1 ? e.style.overflowY = "scroll" : e.style.overflowY = "hidden"
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
					return i.a.createElement(Ae, {
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
			var ke = n("./src/chat/helpers/dom.ts");

			function Pe() {
				return (Pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var De = e => i.a.createElement(H.a, Pe({}, e, {
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
				Le = n("./src/chat/models/Theme/index.ts");

			function Re() {
				return (Re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Ue = e => {
				const t = Object(l.e)(y.a);
				return i.a.createElement(H.a, Re({}, e, {
					viewBox: "0 0 24 24"
				}), (() => {
					let e;
					if (t) {
						const n = Le.f[t];
						n && (e = i.a.createElement("defs", null, i.a.createElement("linearGradient", {
							id: "linear-gradient",
							gradientTransform: `rotate(${Le.d})`
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

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Be = e => i.a.createElement(H.a, Fe({}, e, {
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
				}))),
				He = n("./src/chat/components/MessageInput/index.m.less"),
				Ge = n.n(He);
			const Ve = "MessageInputTooltip--Snoomoji",
				ze = "MessageInputTooltip--Gif",
				We = "MessageInputTooltip--Userlist",
				Ke = 5e3,
				Ze = 85,
				qe = u.a.wrapped(ve.c, "SubmitButton", Ge.a);
			qe.displayName = "SubmitButton";
			const Qe = u.a.wrapped(Ue, "SendIcon", Ge.a),
				Je = u.a.form("Form", Ge.a),
				Ye = u.a.div("Wrapper", Ge.a),
				Xe = u.a.div("InputWrapper", Ge.a),
				$e = u.a.div("Icons", Ge.a),
				et = u.a.wrapped(Me, "ContentEditable", Ge.a),
				tt = i.a.memo((function() {
					const e = Object(l.d)(),
						t = Object(l.e)(S.a);
					return Object(l.e)(he.I) ? null : i.a.createElement(nt, {
						onMouseDown: () => {
							e(Object(f.c)({
								tooltipId: ze
							})), e(Object(g.x)(ze))
						},
						active: t === ze
					}, i.a.createElement(De, {
						isFilled: t === ze
					}))
				})),
				nt = u.a.wrapped(e => i.a.createElement("div", {
					className: Object(d.a)({
						[Ge.a.active]: e.active
					}, e.className),
					onMouseDown: Object(ke.b)(e.onMouseDown)
				}, e.children), "IconButton", Ge.a),
				st = Object(ue.a)({
					activeDropdownId: e => e.tooltipId || void 0,
					draftMessage: (e, t) => Object(he.r)(e, t.channelId),
					isFullSize: x.e
				}),
				at = Object(l.b)(st, (e, {
					channelId: t
				}) => ({
					onSubmitText: n => e(Object(p.q)(t, n.trim(), _e.c.TEXT)),
					onSubmitSnoo: n => e(Object(p.q)(t, n.trim(), _e.c.SNOOMOJI)),
					onSubmitGif: n => {
						e(Object(p.o)(t, n)), e(Object(m.l)(""))
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
			class rt extends o.PureComponent {
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
					}, Ke), this.handleSubmitText = this.handleSubmitText.bind(this), this.handleSubmitSnoo = this.handleSubmitSnoo.bind(this), this.onPickGifHandler = this.onPickGifHandler.bind(this);
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
					this.sendEnabled() && (this.isUserlistPopupOpened() ? (this.onPickUserName(this.selectUserName || this.state.inputUserName), this.props.toggleUserlistTooltip(We)) : (t(this.state.text), n && n(), this.clearText(), s(e)))
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
					} = C(t, e, n);
					this.setState({
						textUpdate: s,
						text: s
					}, () => {
						this.reFocusCursorPosition(a), this.props.toggleUserlistTooltip(We)
					})
				}
				toggleUserlistTooltipByTextChange(e) {
					const {
						selectionEnd: t
					} = this.cursorPosition, {
						hasUsername: n,
						username: s
					} = E(e, t), a = this.isUserlistPopupOpened();
					return (n && !a || !n && a) && this.props.toggleUserlistTooltip(We), this.setState({
						inputUserName: s
					})
				}
				isUserlistPopupOpened() {
					return this.props.activeDropdownId === We
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
					return i.a.createElement(Je, {
						tabIndex: 0,
						className: Object(d.a)(t, {
							[Ge.a.isFullSize]: r
						}),
						id: T,
						onSubmit: Object(ke.b)(this.handleSubmitText)
					}, i.a.createElement(Ye, null, i.a.createElement(Xe, null, i.a.createElement(et, {
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
					}), i.a.createElement($e, null, i.a.createElement(tt, null), i.a.createElement(nt, {
						onMouseDown: () => s(Ve),
						active: e === Ve
					}, i.a.createElement(Be, {
						isFilled: e === Ve
					})), i.a.createElement(D, {
						id: Ve
					}, i.a.createElement(oe, {
						onPickSnoomoji: this.handleSubmitSnoo
					})), i.a.createElement(D, {
						id: ze,
						arrowOffset: Ze
					}, i.a.createElement($, {
						onPickGif: this.onPickGifHandler
					})), i.a.createElement(D, {
						id: We,
						isArrowShow: !1
					}, i.a.createElement(je, {
						bindArrowDown: e => this.onArrowDownUserlistListener = e,
						bindArrowUp: e => this.onArrowUpUserlistListener = e,
						inputUserName: this.state.inputUserName,
						onPickUserName: e => this.onPickUserName(e),
						onSelectUserName: e => this.selectUserName = e
					})))), i.a.createElement(qe, {
						type: "submit",
						disabled: !this.sendEnabled()
					}, i.a.createElement(Qe, null))))
				}
			}
			t.c = at(rt)
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
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/chat/helpers/time/index.tsx"),
				l = n("./src/chat/components/DateSplitter/index.m.less"),
				d = n.n(l);
			var u = e => a.a.createElement("div", {
					className: d.a.TimeWrapper
				}, a.a.createElement("time", {
					className: d.a.Time
				}, Object(i.a)(e.date))),
				h = n("./src/chat/components/Message/Bubble.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/chat/components/Message/LinkedText.tsx"),
				b = n("./src/chat/components/Message/SystemMessage.m.less"),
				f = n.n(b);
			const g = m.a.wrapped(p.a, "LinkedText", f.a);
			var O = m.a.wrapped(e => {
					const {
						message: t,
						className: n
					} = e, {
						messageData: {
							value: s,
							highlights: r
						}
					} = t;
					return a.a.createElement("div", {
						className: n
					}, a.a.createElement(g, {
						value: s,
						highlighMentionGroupLinks: r
					}))
				}, "SystemMessage", f.a),
				E = n("./src/chat/models/Channel/index.ts"),
				C = n("./src/chat/components/Message/UserName/index.m.less"),
				j = n.n(C);
			var _ = ({
					className: e,
					message: t,
					channelType: n,
					sameAsPrevUser: s,
					inTimeRange: r,
					currentUserId: o
				}) => {
					const {
						sender: i
					} = t, l = n === E.a.Group, d = o === (null == i ? void 0 : i.userId);
					return (!s || !r) && (null == i ? void 0 : i.nickname) && (null == i ? void 0 : i.userId) && l ? a.a.createElement("span", {
						className: Object(c.a)(j.a.UserName, {
							[j.a.currentUser]: Boolean(d && o)
						}, e)
					}, null == i ? void 0 : i.nickname) : null
				},
				v = n("./src/chat/constants/messages.ts"),
				I = n("./src/chat/selectors/app.ts"),
				x = n("./src/chat/selectors/channels.ts"),
				y = n("./src/chat/selectors/theme.ts"),
				S = n("./src/chat/components/MessageList/Messages/index.m.less"),
				w = n.n(S);
			const N = (e, t) => {
					let n = NaN;
					return e > 0 && (n = t[e - 1].createdAt), n
				},
				T = ({
					message: e,
					showUserPic: t,
					isLastCurrentUserMessage: n,
					currentUserId: s,
					inPreview: o,
					isLastInChain: i
				}) => {
					const {
						sender: l
					} = e, d = s === (l && l.userId), u = Object(r.e)(I.a), m = Object(r.e)(x.a);
					return a.a.createElement(h.a, {
						className: Object(c.a)(w.a.MessageItemBubble, {
							[w.a.lastInChain]: i
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
				inPreview: s,
				channelId: c
			}) => {
				const i = Object(r.e)(y.c),
					l = Object(r.e)(e => Object(x.y)(e, c));
				return l.length ? a.a.createElement(a.a.Fragment, null, n.map((n, r, c) => {
					const {
						createdAt: l,
						sender: d
					} = n, h = d && d.userId, m = N(r, c), p = ((e, t) => {
						const n = t[e + 1];
						return null == n ? void 0 : n.createdAt
					})(r, c), b = ((e, t) => {
						if (e > 0) {
							const {
								sender: n
							} = t[e - 1];
							return n && n.userId
						}
					})(r, c), f = ((e, t, n) => {
						if (0 === t) return !0;
						const s = new Date(e.createdAt),
							a = N(t, n);
						if (a) {
							const e = new Date(a);
							return s.getFullYear() !== e.getFullYear() || s.getMonth() !== e.getMonth() || s.getDate() !== e.getDate()
						}
						return !1
					})(n, r, c), g = ((e, t) => {
						var n;
						const s = t[e + 1];
						return null === (n = null == s ? void 0 : s.sender) || void 0 === n ? void 0 : n.userId
					})(r, c), E = b === h, C = g === h, j = l - m < 5 * o.ib, I = p && p - l < 5 * o.ib, x = !C || C && !I, y = n.messageType === v.d.SYSTEM && ((e, t) => {
						const {
							mentionType: n,
							mentionedUsers: s,
							messageType: a
						} = e;
						if (a !== v.d.SYSTEM) return !1;
						if (n === v.b.CHANNEL) return !0;
						if (n === v.b.USERS && Array.isArray(s)) {
							const e = 0 === s.length,
								n = s.some(e => t === e.userId);
							return e || n
						}
						return !1
					})(n, e), S = Boolean(((t, n) => {
						const {
							sender: s
						} = n[t];
						return !(e !== (null == s ? void 0 : s.userId) || !i) && (t === n.length - 1 || !n.slice(t + 1).some(e => {
							var t;
							return (null === (t = e.sender) || void 0 === t ? void 0 : t.userId) === (null == s ? void 0 : s.userId)
						}))
					})(r, c)), A = f && a.a.createElement(u, {
						date: l
					});
					switch (n.messageType) {
						case v.d.PENDING:
						case v.d.USER:
							return a.a.createElement(a.a.Fragment, {
								key: n.createdAt
							}, A, a.a.createElement(a.a.Fragment, null, a.a.createElement(_, {
								message: n,
								sameAsPrevUser: E,
								inTimeRange: j,
								channelType: t,
								currentUserId: e
							}), a.a.createElement(T, {
								message: n,
								isLastCurrentUserMessage: S,
								showUserPic: x,
								currentUserId: e,
								inPreview: s,
								isLastInChain: !!g && !C
							})));
						case v.d.SYSTEM:
							return y && a.a.createElement(a.a.Fragment, {
								key: n.createdAt
							}, A, a.a.createElement(O, {
								className: w.a.SystemBubble,
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
			} = u.b, E = o.a.wrapped(l.a, "HiddenCloseButton", f.a);
			E.displayName = "CloseButton";
			const C = o.a.wrapped(e => a.a.createElement("div", {
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
				return a.a.createElement(d.a, null, a.a.createElement(C, {
					key: n,
					className: Object(c.a)(e.className, {
						[f.a.unread]: t
					}),
					onClick: e.open
				}, a.a.createElement(j, null, g._("Chat", null, {
					hk: "3ZWpRR"
				}), t && a.a.createElement(h.b, {
					count: s
				})), a.a.createElement(E, null)))
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
				g = n("./src/chat/actions/channel.ts"),
				O = n("./src/chat/actions/channel/dropdown.ts"),
				E = n("./src/chat/actions/tooltip.ts"),
				C = n("./src/chat/actions/user/dropdown.ts"),
				j = n("./src/lib/lessComponent.tsx"),
				_ = n("./src/chat/actions/theme.ts"),
				v = n("./src/chat/helpers/chatSelector.ts"),
				I = n("./src/chat/controls/Svg/index.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var y = e => a.a.createElement(I.a, x({}, e, {
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
				S = n("./src/chat/components/ThemeSwitcher/index.m.less"),
				w = n.n(S);
			const N = Object(v.a)({
					theme: e => e.user.prefs.globalTheme
				}),
				T = Object(r.b)(N, (e, t) => ({
					changeModeClicked: () => e(Object(_.themeToggle)())
				})),
				A = j.a.div("Wrapper", w.a);
			T(({
				changeModeClicked: e,
				theme: t
			}) => a.a.createElement(A, {
				onClick: e
			}, a.a.createElement(y, {
				active: !0
			})));
			var M = n("./src/chat/constants/channels.ts"),
				k = n("./src/chat/constants/dropdown.ts"),
				P = n("./src/chat/controls/Dropdown/Row.tsx"),
				D = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				L = n("./src/chat/controls/TooltipHooked/TooltipHooked.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var U = e => a.a.createElement(I.a, R({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, a.a.createElement("path", {
				d: "M12.5,10.875h-5A6.633,6.633,0,0,0,.875,17.5V18A1.127,1.127,0,0,0,2,19.125H18A1.127,1.127,0,0,0,19.125,18v-.5A6.633,6.633,0,0,0,12.5,10.875Zm5.375,7H2.125V17.5A5.381,5.381,0,0,1,7.5,12.125h5A5.381,5.381,0,0,1,17.875,17.5Z"
			}), a.a.createElement("path", {
				d: "M10,9.625A4.625,4.625,0,1,0,5.375,5,4.631,4.631,0,0,0,10,9.625ZM13.375,5a3.354,3.354,0,0,1-.59,1.9L8.1,2.215A3.371,3.371,0,0,1,13.375,5ZM7.215,3.1,11.9,7.785A3.371,3.371,0,0,1,7.215,3.1Z"
			})));
			var F = ({
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
				})))),
				B = n("./src/chat/models/Theme/index.ts");

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var G = e => {
					return a.a.createElement(I.a, H({}, e, {
						viewBox: "0 0 20 20"
					}), (() => {
						let e;
						const t = B.f[B.c.VANITY];
						return t && (e = a.a.createElement(F, {
							rotate: B.d,
							gradient: t,
							id: "edit-linear-gradient"
						})), a.a.createElement(a.a.Fragment, null, e, a.a.createElement("path", {
							d: "M17.235,4.351,15.649,2.765a1.626,1.626,0,0,0-2.3,0L.765,15.351a1.628,1.628,0,0,0,0,2.3l1.586,1.586a1.627,1.627,0,0,0,2.3,0L17.235,6.649A1.628,1.628,0,0,0,17.235,4.351Zm-13.47,14a.374.374,0,0,1-.53,0L1.649,16.765a.375.375,0,0,1,0-.53l8.6-8.6L12.366,9.75ZM16.351,5.765l-3.1,3.1L11.134,6.75l3.1-3.1a.377.377,0,0,1,.53,0l1.586,1.586A.375.375,0,0,1,16.351,5.765Z"
						}), a.a.createElement("path", {
							d: "M6.875,4.5V5h1.25V4.5A1.377,1.377,0,0,1,9.5,3.125H10V1.875H9.5A1.377,1.377,0,0,1,8.125.5V0H6.875V.5A1.377,1.377,0,0,1,5.5,1.875H5v1.25h.5A1.377,1.377,0,0,1,6.875,4.5ZM7.5,2.2a2.534,2.534,0,0,0,.3.3,2.534,2.534,0,0,0-.3.3,2.534,2.534,0,0,0-.3-.3A2.534,2.534,0,0,0,7.5,2.2Z"
						}), a.a.createElement("path", {
							d: "M19.7.875A.576.576,0,0,1,19.125.3V0h-1.25V.3A.576.576,0,0,1,17.3.875H17v1.25h.3a.576.576,0,0,1,.575.575V3h1.25V2.7a.576.576,0,0,1,.575-.575H20V.875Z"
						}), a.a.createElement("path", {
							d: "M18.125,10.3V10h-1.25v.3a.576.576,0,0,1-.575.575H16v1.25h.3a.576.576,0,0,1,.575.575V13h1.25v-.3a.576.576,0,0,1,.575-.575H19v-1.25h-.3A.576.576,0,0,1,18.125,10.3Z"
						}))
					})())
				},
				V = n("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				z = n("./src/chat/icons/svgs/Edit/index.tsx");

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var K = e => a.a.createElement(I.a, W({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				d: "M9,18H8a2,2,0,0,0,4,0H9Z"
			}), a.a.createElement("path", {
				d: "M17.364,10.98a2.738,2.738,0,0,1-1.209-2.267L16.15,7.084a6.15,6.15,0,0,0-12.3,0l0,1.632A2.737,2.737,0,0,1,2.636,10.98,3.988,3.988,0,0,0,.875,14.291v.681A1.127,1.127,0,0,0,2,16.1H18a1.127,1.127,0,0,0,1.125-1.125v-.681A3.988,3.988,0,0,0,17.364,10.98Zm.511,3.867H2.125v-.556a2.739,2.739,0,0,1,1.21-2.275,3.988,3.988,0,0,0,1.76-3.3l0-1.633a4.9,4.9,0,1,1,9.8,0l0,1.631a3.988,3.988,0,0,0,1.76,3.3,2.739,2.739,0,0,1,1.21,2.275Z"
			}));

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var q = e => a.a.createElement(I.a, Z({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, a.a.createElement("path", {
				d: "M17.647,19.562h-16A1.126,1.126,0,0,1,.522,18.438v-.5a6.633,6.633,0,0,1,6.625-6.626h5a6.633,6.633,0,0,1,6.625,6.626v.5A1.126,1.126,0,0,1,17.647,19.562ZM1.772,18.312h15.75v-.374a5.382,5.382,0,0,0-5.375-5.376h-5a5.382,5.382,0,0,0-5.375,5.376Z"
			}), a.a.createElement("path", {
				d: "M13.234,6.68h-.456a3.379,3.379,0,1,1-1.2-4h1.652V2.554a4.615,4.615,0,1,0-3.587,7.508,4.6,4.6,0,0,0,3.587-1.741Z"
			}), a.a.createElement("polygon", {
				points: "19.477 4.055 15.859 4.055 15.859 0.438 14.609 0.438 14.609 4.055 10.992 4.055 10.992 5.305 14.609 5.305 14.609 8.923 15.859 8.923 15.859 5.305 19.477 5.305 19.477 4.055"
			})));

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var J = e => a.a.createElement(I.a, Q({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				d: "M10.058,12.558l.884.884,3-3a.625.625,0,0,0,0-.884l-3-3-.884.884,1.933,1.933H1v1.25H11.991Z"
			}), a.a.createElement("path", {
				d: "M16.5.875H6.5A2.629,2.629,0,0,0,3.875,3.5v.833h1.25V3.5A1.377,1.377,0,0,1,6.5,2.125h10A1.377,1.377,0,0,1,17.875,3.5v13A1.377,1.377,0,0,1,16.5,17.875H6.5A1.377,1.377,0,0,1,5.125,16.5v-.833H3.875V16.5A2.629,2.629,0,0,0,6.5,19.125h10A2.629,2.629,0,0,0,19.125,16.5V3.5A2.629,2.629,0,0,0,16.5.875Z"
			}));

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var X = e => a.a.createElement(I.a, Y({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM5.764,17.212a3.37,3.37,0,0,1,3.269-2.587h1.934a3.37,3.37,0,0,1,3.269,2.587,8.3,8.3,0,0,1-8.472,0Zm9.556-.749a4.627,4.627,0,0,0-4.353-3.088H9.033A4.627,4.627,0,0,0,4.68,16.463a8.375,8.375,0,1,1,10.64,0Z"
			}), a.a.createElement("path", {
				d: "M10,5.375A3.125,3.125,0,1,0,13.125,8.5,3.129,3.129,0,0,0,10,5.375Zm0,5A1.875,1.875,0,1,1,11.875,8.5,1.877,1.877,0,0,1,10,10.375Z"
			}));

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
					return a.a.createElement(I.a, $({}, e, {
						viewBox: "0 0 20 20"
					}), (() => {
						let e;
						const t = B.f[B.c.VANITY];
						return t && (e = a.a.createElement(F, {
							rotate: B.d,
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
				ne = n("./src/chat/selectors/app.ts"),
				se = n("./src/chat/selectors/channels.ts"),
				ae = n("./src/chat/selectors/experiments.ts"),
				re = n("./src/chat/selectors/theme.ts"),
				ce = n("./src/chat/selectors/user.ts"),
				oe = n("./src/chat/components/ChannelHeaderDropdown/index.m.less"),
				ie = n.n(oe);
			const le = e => {
					switch (e) {
						case k.b.AddToGroup:
							return {
								text: h.fbt._("Invite members", null, {
									hk: "ChZv0"
								}), icon: a.a.createElement(q, null)
							};
						case k.b.Block:
							return {
								text: h.fbt._("Block", null, {
									hk: "1s7OxS"
								}), icon: a.a.createElement(U, null)
							};
						case k.b.ChangeTheme:
							return {
								text: h.fbt._("Change theme", null, {
									hk: "1J6Ajx"
								}), icon: a.a.createElement(G, null), className: "changeTheme"
							};
						case k.b.Leave:
							return {
								text: h.fbt._("Leave chat", null, {
									hk: "41t86n"
								}), icon: a.a.createElement(J, null)
							};
						case k.b.LeaveGroup:
							return {
								text: h.fbt._("Leave group", null, {
									hk: "zStpq"
								}), icon: a.a.createElement(J, null)
							};
						case k.b.MuteBadging:
							return {
								text: h.fbt._("Disable notification badging", null, {
									hk: "4BzTkp"
								}), icon: a.a.createElement(V.a, null)
							};
						case k.b.MuteNotifs:
							return {
								text: h.fbt._("Mute notifications", null, {
									hk: "O4LsY"
								}), icon: a.a.createElement(V.a, null)
							};
						case k.b.Profile:
							return {
								text: h.fbt._("View profile", null, {
									hk: "3i84FE"
								}), icon: a.a.createElement(X, null)
							};
						case k.b.RenameGroup:
							return {
								text: h.fbt._("Rename group", null, {
									hk: "hTeQ"
								}), icon: a.a.createElement(z.a, null)
							};
						case k.b.UnmuteBadging:
							return {
								text: h.fbt._("Enable notification badging", null, {
									hk: "87Nfa"
								}), icon: a.a.createElement(K, null)
							};
						case k.b.UnmuteNotifs:
							return {
								text: h.fbt._("Unmute notifications", null, {
									hk: "2TcEwL"
								}), icon: a.a.createElement(K, null)
							};
						case k.b.ViewMembers:
							return {
								text: h.fbt._("View members", null, {
									hk: "PC84"
								}), icon: a.a.createElement(X, null)
							};
						default:
							return {
								text: "Unknown item", icon: a.a.createElement("span", null)
							}
					}
				},
				de = Object(v.a)({
					currentUserId: ce.a,
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => e.tooltipId === t || "OverlayNavTooltip--Default" === e.tooltipId,
					channel: se.i,
					isModerator: se.a,
					isChannelBadgingMuted: se.H,
					isChannelNotifsMuted: se.J,
					isFullSize: ne.e,
					isThemesEnabled: ae.g,
					showSparkles: re.d,
					isQuickActionsEnabled: ae.d
				});
			var ue = Object(r.b)(de, (e, t) => ({
					onInviteToChannel: () => {
						e(Object(O.b)()), e(Object(d.c)())
					},
					onLeaveChannel: () => {
						e(Object(g.G)(t.channelId)), e(Object(d.z)())
					},
					onViewMembers: () => {
						e(Object(O.i)()), e(Object(d.V)())
					},
					onBlockUser: t => e(Object(C.a)(t)),
					onChangeTheme: () => {
						e(Object(_.clickThemeSettings)()), e(Object(d.f)())
					},
					onViewProfile: t => {
						e(Object(O.j)(t)), e(Object(d.w)())
					},
					onOpenDropdown: t => e(Object(O.g)(t)),
					onMuteBadging: () => {
						e(Object(O.c)(t)), e(Object(d.B)())
					},
					onUnmuteBadging: () => {
						e(Object(O.e)(t)), e(Object(d.C)())
					},
					onMuteNotifs: () => {
						e(Object(O.d)(t)), e(Object(d.E)())
					},
					onUnmuteNotifs: () => {
						e(Object(O.f)(t)), e(Object(d.N)())
					},
					closeTooltip: () => e(Object(E.d)()),
					showSidebar: () => e(Object(l.f)(!0))
				}))(e => {
					const {
						channel: t,
						currentUserId: n,
						isChannelBadgingMuted: s,
						isChannelNotifsMuted: r,
						isThemesEnabled: o,
						isQuickActionsEnabled: i
					} = e, l = Object(f.b)(Object(D.c)());
					Object(b.a)("OverlayNavTooltip--Default", l.hide);
					const d = s => {
							const {
								onInviteToChannel: a,
								onBlockUser: r,
								onChangeTheme: c,
								onLeaveChannel: o,
								toggleChannelNameInput: i,
								onViewMembers: d,
								onMuteBadging: h,
								onUnmuteBadging: m,
								onMuteNotifs: b,
								onUnmuteNotifs: f,
								showSidebar: g
							} = e;
							switch (l.hide(), s) {
								case k.b.AddToGroup:
									return a();
								case k.b.Block: {
									const e = (() => t && t.members.find(e => e.id !== n))();
									return e && r(e.id)
								}
								case k.b.ChangeTheme:
									return g(), c();
								case k.b.Leave:
								case k.b.LeaveGroup:
									return o();
								case k.b.Profile:
									return u();
								case k.b.RenameGroup:
									return i();
								case k.b.ViewMembers:
									return d();
								case k.b.MuteBadging:
									return h();
								case k.b.UnmuteBadging:
									return m();
								case k.b.MuteNotifs:
									return b();
								case k.b.UnmuteNotifs:
									return f();
								default:
									return p.a
							}
						},
						u = () => {
							const {
								channel: t,
								currentUserId: n,
								onViewProfile: s,
								inviterName: a
							} = e;
							if (t && t.channelState === M.b.JOINED) {
								const e = t.members.find(e => e.id !== n);
								if (e && e.name) return s(e.name)
							}
							return a && s(a)
						},
						{
							closeTooltip: m,
							isFullSize: g,
							showSparkles: O
						} = e,
						E = (() => {
							if (t) switch (t.type) {
								case te.a.Direct:
									return k.c.directChannel.filter(e => k.d.muteBadging(e, s, i)).filter(e => k.d.unmuteBadging(e, s, i)).filter(e => k.d.muteNotifs(e, r)).filter(e => k.d.unmuteNotifs(e, r)).filter(e => k.d.changeTheme(e, o));
								case te.a.Group:
									return k.c.groupChannel.filter(e => k.d.muteBadging(e, s, i)).filter(e => k.d.unmuteBadging(e, s, i)).filter(e => k.d.muteNotifs(e, r)).filter(e => k.d.unmuteNotifs(e, r)).filter(e => k.d.changeTheme(e, o))
							}
						})();
					return a.a.createElement(a.a.Fragment, null, !1, a.a.createElement("button", {
						onClick: e => (e => {
							e.stopPropagation(), null == l || l.toggle()
						})(e),
						ref: l.target.ref,
						className: Object(c.a)(ie.a.DropdownTrigger, {
							[ie.a.isFullSize]: g
						}),
						title: h.fbt._("Settings", null, {
							hk: "4lO98u"
						})
					}, a.a.createElement(ee, {
						className: Object(c.a)(ie.a.Settings, {
							[ie.a.gradient]: O && o
						})
					})), a.a.createElement(L.default, {
						arrowProps: l.arrowProps,
						popperProps: l.popperProps,
						visible: l.visible,
						hide: l.hide,
						isInstant: !0,
						noArrow: !0,
						styled: !0
					}, a.a.createElement("div", {
						className: ie.a.OptionsContainer,
						id: "OverlayNavTooltip--Default"
					}, E && E.map((e, t) => a.a.createElement(P.a, {
						className: Object(c.a)(ie.a.DropdownRow, {
							[ie.a.gradient]: O && o && e === k.b.ChangeTheme
						}),
						key: t,
						displayText: le(e).text,
						onClick: () => {
							d(e), m()
						}
					}, le(e).icon)))))
				}),
				he = n("./src/chat/components/CloseIcon/index.tsx"),
				me = n("./src/chat/constants/container.ts"),
				pe = n("./src/chat/controls/Button/index.tsx");

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const fe = e => a.a.createElement(I.a, be({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				d: "M10,15.625a.623.623,0,0,1-.442-.183l-9-9,.884-.884L10,14.116l8.558-8.558.884.884-9,9A.623.623,0,0,1,10,15.625Z"
			}));

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			fe.displayName = "NavMinimize";
			const Oe = e => a.a.createElement(I.a, ge({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				d: "M15.838,16.5a1.377,1.377,0,0,1-1.375,1.375h-11A1.377,1.377,0,0,1,2.088,16.5V5.5A1.377,1.377,0,0,1,3.463,4.125H7.11V2.875H3.463A2.629,2.629,0,0,0,.838,5.5v11a2.629,2.629,0,0,0,2.625,2.625h11A2.629,2.629,0,0,0,17.088,16.5V12.9h-1.25Z"
			}), a.a.createElement("path", {
				d: "M18.5.875h-5v1.25h3.491L8.558,10.558l.884.884,8.433-8.433V6.5h1.25v-5A.625.625,0,0,0,18.5.875Z"
			}));
			Oe.displayName = "NavPopout";
			var Ee = n("./src/chat/components/OverlayNavButtonGroup/index.m.less"),
				Ce = n.n(Ee);
			var je = Object(r.b)(() => Object(v.a)({
					containerSize: e => e.container.size,
					inviterName: se.G,
					isReady: ne.g
				}), e => ({
					close: () => e(Object(i.sizeChanged)(me.a.HIDDEN)),
					minimize: () => {
						e(Object(i.sizeChanged)(me.a.MINIMIZED)), e(Object(d.s)())
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
					const d = c && t === me.a.EMBED;
					return a.a.createElement("div", {
						className: Ce.a.Wrapper
					}, s && e && a.a.createElement(ue, {
						channelId: e,
						dropdownId: n,
						inviterName: r,
						toggleChannelNameInput: l
					}), d && a.a.createElement(a.a.Fragment, null, a.a.createElement(pe.c, {
						className: Ce.a.IconButton,
						onClick: i,
						title: h.fbt._("Open chat in new window", null, {
							hk: "3S8f7W"
						})
					}, a.a.createElement(Oe, null)), a.a.createElement(pe.c, {
						className: Ce.a.IconButton,
						onClick: o,
						title: h.fbt._("Minimize chat", null, {
							hk: "1gym9X"
						})
					}, a.a.createElement(fe, null)), a.a.createElement(he.a, {
						className: Ce.a.CloseButton
					})))
				}),
				_e = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				ve = n("./src/chat/controls/Counter/index.tsx"),
				Ie = n("./src/chat/components/RenameGroupInput/index.m.less"),
				xe = n.n(Ie);
			const ye = j.a.wrapped(e => a.a.createElement("span", {
					className: Object(c.a)({
						[xe.a.visible]: e.isVisible
					}, e.className)
				}, e.children), "InputWrapper", xe.a),
				Se = j.a.div("InputContent", xe.a),
				we = j.a.span("InputControls", xe.a),
				Ne = j.a.wrapped(pe.a, "CancelButton", xe.a),
				Te = j.a.wrapped(pe.a, "SaveButton", xe.a);
			class Ae extends s.Component {
				constructor() {
					super(...arguments), this.displayName = "RenameGroupInput", this.state = {
						groupName: this.props.name || ""
					}, this.getAvailableCharacters = () => M.e - this.state.groupName.length, this.handleChannelNameInput = e => this.setState({
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
					return a.a.createElement(ye, {
						isVisible: t
					}, a.a.createElement(Se, null, a.a.createElement(_e.a, {
						handleChannelNameInput: s,
						placeholder: h.fbt._("Rename group", null, {
							hk: "1mjXbx"
						}),
						withBackground: !0,
						value: n
					}, a.a.createElement(ve.a, {
						count: c
					})), a.a.createElement(we, null, a.a.createElement(Ne, {
						secondaryNoBorder: !0,
						onClick: e
					}, h.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(Te, {
						noBorder: !0,
						disabled: c < 0 || c >= M.e,
						onClick: r
					}, h.fbt._("Save", null, {
						hk: "4yMsMq"
					})))))
				}
			}
			var Me = Object(r.b)(void 0, e => ({
					onUpdateChannelName: t => e(Object(O.h)(t)),
					saveRenamedGroup: () => e(Object(d.H)())
				}))(Ae),
				ke = n("./src/chat/components/ToastNotification/index.tsx"),
				Pe = n("./src/chat/helpers/dom.ts"),
				De = n("./src/chat/helpers/urls/index.ts"),
				Le = n("./src/chat/icons/svgs/ArrowLeft/index.tsx"),
				Re = n("./src/chat/components/OverlayNav/index.m.less"),
				Ue = n.n(Re);
			const Fe = ({
					userName: e
				}) => {
					const t = Object(De.viewProfileUrl)(e);
					return a.a.createElement("a", {
						onClick: e => e.stopPropagation(),
						target: o.c.BLANK,
						rel: o.b,
						className: Ue.a.UserProfileTitle,
						href: t
					}, e)
				},
				Be = Object(v.a)({
					isEmbedded: ne.d,
					iconMembers: (e, t) => Object(se.s)(e, t.channelId),
					isFullSize: ne.e
				}),
				He = Object(r.b)(Be, e => ({
					minimize: () => {
						e(Object(i.sizeChanged)(me.a.MINIMIZED)), e(Object(d.s)())
					},
					toggleSidebar: () => e(Object(l.f)(!0)),
					clickRenameGroup: () => e(Object(d.u)())
				}));
			class Ge extends s.Component {
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
						className: Object(c.a)(Ue.a.Nav, {
							[Ue.a.isFullSize]: b
						})
					}, a.a.createElement(pe.c, {
						onClick: m,
						className: Object(c.a)(Ue.a.IconButton, {
							[Ue.a.isFullSize]: b
						})
					}, a.a.createElement(Le.a, {
						className: Ue.a.ArrowLeft
					})), a.a.createElement("span", {
						onClick: s ? Object(Pe.b)(r) : void 0,
						className: Object(c.a)(Ue.a.TitleWrapper, {
							[Ue.a.embed]: s
						})
					}, p && h && h.firstUser && a.a.createElement(u.a, {
						className: Object(c.a)(Ue.a.ChatIcon, {
							[Ue.a.isFullSize]: b
						}),
						userId: h.firstUser.id,
						secondUserId: null === (e = h.secondUser) || void 0 === e ? void 0 : e.id
					}), d === te.a.Direct ? a.a.createElement(a.a.Fragment, null, a.a.createElement(Fe, {
						userName: l
					})) : a.a.createElement("span", {
						className: Ue.a.Title
					}, l), a.a.createElement("span", {
						className: Ue.a.SubTitle
					}, i)), a.a.createElement(je, {
						channelId: t,
						toggleChannelNameInput: O,
						showMenu: !!o,
						dropdownId: n
					}), t && l && a.a.createElement(Me, {
						channelId: t,
						name: l,
						isVisible: f,
						hideChannelNameInput: g
					}), a.a.createElement(ke.a, null))
				}
			}
			t.a = He(Ge)
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
			var E = ({
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
				C = n("./src/chat/components/ThemeProvider/index.tsx");

			function j(e, t) {
				return a.a.createElement(C.a, {
					className: c.a
				}, a.a.createElement(e, null, a.a.createElement(r.d, {
					component: e => a.a.createElement(E, null, a.a.createElement(r.f, {
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
				return ee
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
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
			}) => a.a.createElement("div", {
				className: Object(c.a)(m.a.Divider, t)
			}, e);
			var b = n("./src/chat/controls/TextButton.tsx"),
				f = n("./src/chat/reducers/sidebar/sideBarAppearance/index.ts"),
				g = n("./src/chat/selectors/channels.ts"),
				O = n("./src/chat/components/BasicInvited/index.m.less"),
				E = n.n(O);
			var C = () => {
					const e = Object(r.d)(),
						t = Object(r.e)(g.F),
						n = Object(r.e)(g.D),
						c = Object(r.e)(g.c),
						h = Object(s.useCallback)(() => {
							n && !c && e(i.D), e(Object(l.e)(f.a.INVITED_CHANNELS)), e(Object(d.e)())
						}, [e, n, c]),
						m = t.slice(0, 2);
					return t && t.length ? a.a.createElement(a.a.Fragment, null, a.a.createElement(p, {
						className: E.a.SidebarDivider
					}, o.fbt._("Invites", null, {
						hk: "1NWeVa"
					}), t.length > 2 ? a.a.createElement(b.a, {
						onClick: h
					}, o.fbt._("See all", null, {
						hk: "mkJIj"
					}), " (", t.length, ")") : null), a.a.createElement(u.a, {
						channels: Object.values(m)
					})) : null
				},
				j = n("./src/lib/lessComponent.tsx"),
				_ = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				v = n("./src/chat/controls/ChannelsFilter/index.tsx"),
				I = n("./src/chat/helpers/chatSelector.ts"),
				x = n("./src/chat/selectors/experiments.ts"),
				y = n("./src/chat/selectors/user.ts"),
				S = n("./src/chat/components/BasicJoined/index.m.less"),
				w = n.n(S);
			const N = j.a.p("Text", w.a),
				T = Object(I.a)({
					currentUserId: y.a,
					fetchingJoinedChannels: g.d,
					hasMoreJoinedChannels: g.E,
					joinedChannels: g.f,
					selectedChannelId: e => Object(g.A)(e, "channelId"),
					hasInvitedChannels: g.C,
					isChannelsFilterEnabled: x.a
				});
			var A = Object(r.b)(T)(e => {
					const {
						className: t,
						fetchingJoinedChannels: n,
						joinedChannels: s,
						hasInvitedChannels: r,
						isChannelsFilterEnabled: c
					} = e;
					return a.a.createElement("div", {
						className: t
					}, r && a.a.createElement(p, null, o.fbt._("Chats", null, {
						hk: "Bzl0R"
					})), (!s || !s.length) && a.a.createElement(N, null, o.fbt._("All the direct chats that you're in will show up here", null, {
						hk: "4A1UXC"
					})), c && a.a.createElement(v.a, null), a.a.createElement(u.a, {
						channels: s
					}), n && a.a.createElement(_.d, null))
				}),
				M = n("./src/chat/components/Scroller/index.tsx"),
				k = n("./node_modules/react-router-redux/es/index.js"),
				P = n("./src/chat/helpers/urls/index.ts"),
				D = n("./src/chat/icons/svgs/ChatNew/index.tsx"),
				L = n("./src/chat/components/Sidebar/CreateChannel/index.m.less"),
				R = n.n(L);
			var U = Object(r.b)(null, e => ({
					createChannel: () => {
						const t = Object(P.getRedirectURL)(Object(P.channelUrl)("create"));
						e(Object(k.b)(t)), e(Object(d.k)())
					}
				}))(e => a.a.createElement("button", {
					className: R.a.Button,
					onClick: e.createChannel,
					title: o.fbt._("Start a new chat", null, {
						hk: "3C4ek3"
					}),
					tabIndex: 0
				}, a.a.createElement(D.a, {
					className: R.a.ChatNew
				}))),
				F = n("./src/chat/controls/Counter/index.tsx"),
				B = n("./src/chat/components/Sidebar/ChannelsPanel/index.m.less"),
				H = n.n(B);
			const G = Object(I.a)({
				fetchingJoinedChannels: g.d,
				hasMoreJoinedChannels: g.E
			});
			var V = Object(r.b)(G, e => ({
					fetchJoinedChannels: () => e(Object(i.E)())
				}))(e => {
					const {
						fetchingJoinedChannels: t,
						fetchJoinedChannels: n,
						hasMoreJoinedChannels: s
					} = e;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: H.a.Header
					}, a.a.createElement("span", {
						className: H.a.HeaderMessage
					}, o.fbt._("Chat", null, {
						hk: "2by6VV"
					})), a.a.createElement(F.b, null), a.a.createElement("div", {
						className: H.a.CreateChannelWrapper
					}, a.a.createElement(U, null))), a.a.createElement(M.b, {
						loadMoreRows: () => {
							!t && s && n()
						}
					}, a.a.createElement("div", {
						className: H.a.Body
					}, a.a.createElement(C, null), a.a.createElement(A, null))))
				}),
				z = n("./src/higherOrderComponents/makeAsync.tsx"),
				W = n("./src/lib/loadWithRetries/index.ts");
			const K = () => null;
			var Z = Object(z.a)({
				ErrorComponent: K,
				getComponent: () => Object(W.a)(() => n.e("InvitedChannelsPanel").then(n.bind(null, "./src/chat/components/Sidebar/InvitedChannelsPanel/index.tsx"))).then(e => e.default),
				LoadingComponent: K
			});
			const q = () => null;
			var Q = Object(z.a)({
					ErrorComponent: q,
					getComponent: () => Object(W.a)(() => n.e("ThemePanel").then(n.bind(null, "./src/chat/components/Sidebar/ThemePanel/index.tsx"))).then(e => e.default),
					LoadingComponent: q
				}),
				J = n("./src/chat/selectors/app.ts"),
				Y = n("./src/chat/selectors/sidebar.ts"),
				X = n("./src/chat/components/Sidebar/index.m.less"),
				$ = n.n(X);
			const ee = ({
					children: e
				}) => {
					const t = Object(r.e)(Y.b),
						n = Object(r.e)(J.e),
						s = Object(r.e)(J.a);
					return a.a.createElement("div", {
						className: Object(c.a)($.a.Wrapper, {
							[$.a.hidden]: !t,
							[$.a.embed]: s,
							[$.a.isFullSize]: null == n || n
						})
					}, e)
				},
				te = a.a.memo((function(e) {
					const t = Object(r.e)(Y.a);
					return a.a.createElement(ee, e, (() => t === f.a.CHANNELS ? a.a.createElement(V, null) : t === f.a.THEMES ? a.a.createElement(Q, null) : t === f.a.INVITED_CHANNELS ? a.a.createElement(Z, null) : void 0)())
				}));
			t.b = te
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
				E = e => g.includes(e),
				C = e => O.includes(e),
				j = i.a.wrapped(e => r.a.createElement("span", {
					className: Object(o.a)(e.className, {
						[f.a.pending]: E(e.toast),
						[f.a.error]: C(e.toast)
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
					return O
				})), n.d(t, "d", (function() {
					return E
				})), n.d(t, "a", (function() {
					return C
				})),
				function(e) {
					e.AddToGroup = "addToGroup", e.Block = "block", e.ChangeTheme = "changeTheme", e.Kick = "kick", e.Leave = "leave", e.LeaveGroup = "leaveGroup", e.MuteBadging = "muteBadging", e.MuteNotifs = "muteNotifs", e.Profile = "profile", e.Report = "report", e.RenameGroup = "renameGroup", e.UnmuteBadging = "unmuteBadging", e.UnmuteNotifs = "unmuteNotifs", e.ViewMembers = "members"
				}(s || (s = {}));
			const {
				AddToGroup: a,
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
				ChangeTheme: f
			} = s, g = [l, m, d, p], O = {
				directChannel: [u, f, r, ...g, o],
				groupChannel: [a, b, f, h, ...g, i],
				members: [r, c]
			}, E = {
				muteBadging: (e, t, n) => !(e === l && (n || t)),
				unmuteBadging: (e, t, n) => !(e === m && (n || !t)),
				muteNotifs: (e, t) => !(e === d && t),
				unmuteNotifs: (e, t) => !(e === p && !t),
				changeTheme: (e, t) => !(e === f && !t)
			}, C = "dropdown-container"
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
				E = o.a.button("Button", f.a),
				C = o.a.button("MessageIconButton", f.a),
				j = e => {
					const t = Object(c.a)({
							[f.a.primaryStyles]: e.primary,
							[f.a.secondaryStyles]: e.secondary,
							[f.a.noBorder]: e.noBorder,
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
				_ = o.a.wrapped(j, "IconButton", f.a),
				v = e => r.a.createElement(C, g({}, e, {
					title: s.fbt._("Report message", null, {
						hk: "2XKeNq"
					})
				}), r.a.createElement(u, null)),
				I = e => r.a.createElement(C, g({}, e, {
					title: s.fbt._("Delete message", null, {
						hk: "Z4Zm0"
					})
				}), r.a.createElement(p.a, null)),
				x = e => r.a.createElement(C, g({}, e, {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
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
					b = Object(a.useMemo)(() => e ? m : n, [n, m, e]),
					f = Object(a.useCallback)(n => {
						t(Object(i.d)({
							filter: n,
							isForInvitedChannels: e
						}));
						const s = e ? "invite" : "chat_tab";
						t(Object(l.y)(Object(u.h)(n), s))
					}, [t, e]);
				return r.a.createElement("div", {
					className: p.a.ChannelsFilter
				}, Object.values(u.b).map(e => r.a.createElement(d.a, {
					key: e,
					onClick: () => f(e),
					className: Object(o.a)(p.a.ChannelsFilterItem, {
						[p.a.selected]: b === e
					})
				}, s.fbt._("{FilterName}", [s.fbt._param("FilterName", e)], {
					hk: "43TtvD"
				}))))
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
				E = n("./src/chat/tracking/fields/chat.ts"),
				C = n("./src/chat/tracking/fields/common.ts");
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
							s && s.meta && s.meta.name === o.Jb.CHAT_MINIMIZE && e.dispatch(Object(l.M)());
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
										...Object(E.f)(e),
										...Object(E.t)(e),
										...Object(E.p)(e),
										...Object(E.y)(e),
										...Object(E.z)(e)
									},
									...Object(C.a)(e)
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
							Object(s.d)(o, t.payload, a.nb)
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
			const E = (e, t) => {
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
					E(e.getState()) ? n() : (await e.dispatch(Object(d.m)(!1)), e.getState().sendbird.session.token && await e.dispatch(Object(i.b)()))
				}) : n();
				return i => f => {
					const g = e.getState(),
						C = Object(O.a)(g) === b.b.Closed,
						j = Object(O.e)(g);
					switch (f.type) {
						case o.SIZE_CHANGED: {
							if (!f.payload) break;
							const t = f.payload !== p.a.MINIMIZED && f.payload !== p.a.HIDDEN;
							t && (clearTimeout(s), s = null), C && t && !j && n(), !j || f.payload !== p.a.HIDDEN && f.payload !== p.a.MINIMIZED || (s = setTimeout(() => {
								e.dispatch(Object(h.f)())
							}, 10 * r.ib));
							break
						}
						case l.a: {
							const t = E(g, f);
							C && t ? n() : t && e.dispatch(Object(c.M)());
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
				r = n("./src/chat/selectors/app.ts"),
				c = n("./src/lib/safeBadgeUpdate.ts");
			const o = /^\([\d*]+?\)\s+/;
			t.a = e => {
				return "undefined" != typeof window ? t => n => {
					const a = t(n),
						i = e.getState();
					if (!Object(r.d)(i) && n.type === s.a) {
						const {
							basicChannelCount: e,
							subredditChannelCount: t
						} = n.payload;
						((e, t) => {
							var n, s;
							const a = null === (s = null === (n = null === window || void 0 === window ? void 0 : window.document) || void 0 === n ? void 0 : n.title) || void 0 === s ? void 0 : s.replace(o, "");
							e > 0 ? (Object(c.a)(e), window.document.title = `(${e}) ${a}`) : t > 0 ? (Object(c.a)(1), window.document.title = `(*) ${a}`) : (Object(c.a)(0), window.document.title = a)
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
				d = n("./src/chat/constants/channels.ts"),
				u = n("./src/chat/selectors/channels.ts"),
				h = n("./src/chat/selectors/platform.ts"),
				m = n("./src/chat/tracking/sendEvent.ts"),
				p = n("./src/telemetry/models/Event.ts"),
				b = n("./src/telemetry/models/Timer.ts"),
				f = n("./src/chat/tracking/fields/chat.ts"),
				g = n("./src/chat/tracking/fields/common.ts");
			const O = e => ({
					type: e
				}),
				E = e => ({
					millis: e
				});
			var C = n("./src/chat/tracking/events/chatView.ts"),
				j = n("./src/chat/tracking/events/contactsList.ts"),
				_ = n("./src/chat/tracking/events/invitationInbox.ts"),
				v = n("./src/chat/tracking/events/messagesInbox.ts");
			const I = a()((e, t) => ((e, t) => {
					Object(m.a)({
						noun: "inbox_new",
						source: p.b.ChatPerformance,
						action: p.a.Load,
						chat: {
							...Object(f.o)(e),
							...Object(f.q)(e)
						},
						timer: {
							...O(b.TimerType.ChatLoadInboxNew),
							...E(t)
						},
						...Object(g.a)(e)
					})
				})(e, (e => Date.now() - e)(t))),
				x = a()(e => Object(h.d)(e) && y(e)),
				y = e => {
					Object(v.d)(e)
				},
				S = Object(r.c)((e, t, n) => {
					Object(u.L)(e) ? ((e, t) => {
						Object(m.a)({
							noun: "channel_cached",
							source: p.b.ChatPerformance,
							action: p.a.Load,
							chat: {
								...Object(f.f)(e)
							},
							timer: {
								...O(b.TimerType.ChatLoadChannelCached),
								...E(t)
							},
							...Object(g.a)(e)
						})
					})(t, n) : ((e, t) => {
						Object(m.a)({
							noun: "channel_new",
							source: p.b.ChatPerformance,
							action: p.a.Load,
							chat: {
								...Object(f.f)(e)
							},
							timer: {
								...O(b.TimerType.ChatLoadChannelNew),
								...E(t)
							},
							...Object(g.a)(e)
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
								...Object(f.f)(e),
								...Object(f.z)(e),
								...Object(f.p)(e),
								...Object(f.r)(e)
							},
							...Object(g.a)(e)
						})
					})(e)
				};
			t.a = e => t => n => s => {
				const a = n(s),
					r = t.getState();
				switch (s.type) {
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
							Object(h.c)(e) === d.a.VIEW_INVITE && Object(_.k)(e)
						})(r), (e => Object(h.e)(e) && Object(C.i)(e))(r), S(r), N(r);
						break;
					case o.l:
					case l.c:
						I(r, e)
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
			}, 5 * i.Ob, {
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
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/CreateChatGifMessage.json"),
				r = n("./src/redditGQL/operations/GetTrendingChatGifs.json"),
				c = n("./src/redditGQL/operations/SearchChatGifs.json");
			const o = (e, t) => Object(s.a)(e, {
					...r,
					variables: t
				}),
				i = (e, t) => Object(s.a)(e, {
					...c,
					variables: t
				}),
				l = (e, t) => Object(s.a)(e, {
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
			var s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/ExperimentVariantsShort.json"),
				o = n("./src/chat/models/Message/report.ts");
			const i = (e, t) => Object(a.a)(e, {
					method: s.hb.POST,
					endpoint: `${e.apiUrl}/api/report_user`,
					data: {
						reason: t.reason,
						user: t.userNickname
					}
				}),
				l = (e, t, n) => {
					const r = Object(o.c)(t, n);
					return Object(a.a)(e, {
						method: s.hb.POST,
						endpoint: `${e.apiUrl}/api/report_user`,
						data: {
							details: JSON.stringify(r),
							reason: t.reason,
							user: t.userNickname
						}
					})
				},
				d = (e, t) => Object(a.a)(e, {
					method: s.hb.GET,
					endpoint: `${e.apiUrl}/api/user_data_by_account_ids`,
					data: {
						raw_json: 1,
						ids: t.join(",")
					}
				}),
				u = e => Object(a.a)(e, {
					method: s.hb.GET,
					endpoint: `${e.apiUrl}/prefs/blocked.json`
				}),
				h = e => Object(r.a)(e, {
					...c
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
				o = e => {
					const t = r - a.z,
						n = new Date(r).setDate(1),
						c = new Date(n).setMonth(0),
						o = new Date(e);
					return e >= r ? s.fbt._("Today", null, {
						hk: "1W0rfJ"
					}) : e >= t ? s.fbt._("Yesterday", null, {
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
				E = l.a.wrapped(e => {
					const t = Object(o.e)(m.f),
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
			const j = l.a.wrapped(C, "VoicesAvatar", f.a),
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
				}) : c.a.createElement(E, {
					className: t,
					height: a,
					width: r,
					userId: o
				})
			})
		},
		"./src/chat/icons/svgs/ArrowLeft/index.tsx": function(e, t, n) {
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
			}), e.isFilled ? a.a.createElement("path", {
				d: "M19,9H3.914l7.293-7.293L9.793.293l-9,9a1,1,0,0,0,0,1.414l9,9,1.414-1.414L3.914,11H19Z"
			}) : a.a.createElement("path", {
				d: "M19,9.375H2.509l7.933-7.933L9.558.558l-9,9a.625.625,0,0,0,0,.884l9,9,.884-.884L2.509,10.625H19Z"
			}))
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
		"./src/chat/icons/svgs/DisableNotifications/index.tsx": function(e, t, n) {
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
			}), e.isFilled ? a.a.createElement("g", {
				id: "icons_flat"
			}, a.a.createElement("path", {
				d: "M11,18H9H8c0,1.1,0.9,2,2,2s2-0.9,2-2H11z"
			}), a.a.createElement("path", {
				d: "M19.1,14.9v-0.7c0-1.3-0.7-2.5-1.8-3.3c-0.8-0.5-1.2-1.4-1.2-2.3V7.1c0-3.4-2.7-6.2-6.1-6.2c-1.7,0-3.2,0.7-4.4,1.8 l13.1,13.1C19,15.6,19.1,15.3,19.1,14.9z"
			}), a.a.createElement("path", {
				d: "M19.4,18.5l-18-18L0.6,1.4l3.6,3.6C4,5.7,3.8,6.4,3.9,7.1v1.6c0,0.9-0.4,1.8-1.2,2.3c-1.1,0.7-1.7,2-1.8,3.3v0.7 c0,0.6,0.5,1.1,1.1,1.1h13.2l3.3,3.4L19.4,18.5z"
			})) : a.a.createElement(a.a.Fragment, null, a.a.createElement("path", {
				d: "M9,18H8a2,2,0,0,0,4,0H9Z"
			}), a.a.createElement("path", {
				d: "M10,2.184a4.906,4.906,0,0,1,4.9,4.9l0,1.631a3.988,3.988,0,0,0,1.76,3.3,2.739,2.739,0,0,1,1.21,2.275v.556h-.114l.966.966a1.11,1.11,0,0,0,.4-.841v-.681a3.988,3.988,0,0,0-1.761-3.311,2.738,2.738,0,0,1-1.209-2.267L16.15,7.084a6.148,6.148,0,0,0-10.5-4.346l.884.884A4.882,4.882,0,0,1,10,2.184Z"
			}), a.a.createElement("path", {
				d: "M19.442,18.558l-18-18-.884.884L4.194,5.079a6.04,6.04,0,0,0-.344,2l0,1.632A2.737,2.737,0,0,1,2.636,10.98,3.988,3.988,0,0,0,.875,14.291v.681A1.127,1.127,0,0,0,2,16.1H15.212l3.346,3.345ZM2.125,14.847v-.556a2.739,2.739,0,0,1,1.21-2.275,3.988,3.988,0,0,0,1.76-3.3l0-1.633A4.576,4.576,0,0,1,5.215,6.1l8.747,8.748Z"
			})))
		},
		"./src/chat/icons/svgs/Edit/index.tsx": function(e, t, n) {
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
			}), e.isFilled ? a.a.createElement(a.a.Fragment, null, a.a.createElement("path", {
				d: "M10.8,4.029,1.214,13.405a1.135,1.135,0,0,0-.339.805V18A1.127,1.127,0,0,0,2,19.125H5.79a1.134,1.134,0,0,0,.8-.338L15.971,9.2Z"
			}), a.a.createElement("path", {
				d: "M18.25,3.159,16.841,1.75a2.634,2.634,0,0,0-3.692-.021L11.692,3.155l5.153,5.153,1.426-1.457A2.634,2.634,0,0,0,18.25,3.159Z"
			})) : a.a.createElement("path", {
				d: "M18.25,3.159,16.841,1.75a2.634,2.634,0,0,0-3.692-.021L1.214,13.405a1.135,1.135,0,0,0-.339.805V18A1.127,1.127,0,0,0,2,19.125H5.79a1.134,1.134,0,0,0,.8-.338L18.271,6.851A2.634,2.634,0,0,0,18.25,3.159ZM5.79,17.875H2.124L2.087,14.3l9.771-9.559,3.4,3.406Zm11.587-11.9L16.136,7.252,12.751,3.867l1.272-1.244a1.381,1.381,0,0,1,1.934.011l1.409,1.409A1.381,1.381,0,0,1,17.377,5.977Z"
			}))
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
				return I
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "a", (function() {
				return D
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./src/reddit/constants/theme.ts"),
				r = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/chat/constants/theme.ts");
			const o = "#006DC6",
				i = "#B44AC0",
				l = "#FF6600",
				d = "#E9EBED",
				u = "#989CA0",
				h = "#898D90",
				m = "#BE0039",
				p = "#5A5C5E",
				b = "#242424",
				f = "#6A5CFF",
				g = "#5349DA";
			var O = n("./src/reddit/constants/colors.ts"),
				E = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const {
				REDDIT: C,
				NIGHT: j
			} = a.b, _ = e => r.d[e].newRedditTheme;
			var v;
			! function(e) {
				e.NONE = "none", e.UNDERLINE = "underline"
			}(v || (v = {}));
			const I = "22.5";
			var x;
			! function(e) {
				e.BASIC = "basic", e.ORANGERED = "orangered", e.VANITY = "vanity", e.SERIOUS = "serious"
			}(x || (x = {}));
			const y = {
					[x.ORANGERED]: {
						stops: [{
							offset: "11.68%",
							color: m
						}, {
							offset: "88.32%",
							color: l
						}]
					},
					[x.VANITY]: {
						stops: [{
							offset: "11.68%",
							color: g
						}, {
							offset: "88.32%",
							color: i
						}]
					},
					[x.SERIOUS]: {
						stops: [{
							offset: "11.68%",
							color: o
						}, {
							offset: "88.32%",
							color: f
						}]
					}
				},
				S = e => {
					return `linear-gradient(22.5deg, ${y[e].stops.map(e=>`${e.color} ${e.offset}`).join(", ")})`
				},
				w = {
					bubble: {
						background: S(x.VANITY),
						color: O.b.white,
						border: O.b.transparent,
						link: {
							color: O.b.white,
							textDecoration: v.UNDERLINE
						},
						channelsFilter: {
							background: S(x.VANITY),
							selected: O.b.white
						}
					}
				},
				N = {
					bubble: {
						background: S(x.SERIOUS),
						color: O.b.white,
						border: O.b.transparent,
						link: {
							color: O.b.white,
							textDecoration: v.UNDERLINE
						},
						channelsFilter: {
							background: S(x.SERIOUS),
							selected: O.b.white
						}
					}
				},
				T = {
					bubble: {
						background: S(x.ORANGERED),
						color: O.b.white,
						border: O.b.transparent,
						link: {
							color: O.b.white,
							textDecoration: v.UNDERLINE
						},
						channelsFilter: {
							background: S(x.ORANGERED),
							selected: O.b.white
						}
					}
				},
				A = {
					activity: {
						icon: {
							default: _(C).actionIcon,
							active: O.b.op,
							disable: Object(s.a)(.5, O.b.white),
							hover: Object(s.a)(.5, O.b.white),
							contrast: _(C).bodyText,
							nsfw: {
								bg: O.b.black,
								text: O.b.white
							}
						},
						text: {
							regular: _(C).bodyText,
							active: O.b.op,
							fade: Object(s.a)(.4, O.b.white),
							light: _(C).actionIcon,
							warning: O.b.warning,
							highlight: O.b.white,
							success: O.b.approved,
							meta: _(C).metaText
						},
						button: {
							primary: O.b.alienblue,
							secondary: _(C).metaText,
							chatFilterColor: p
						},
						buttonSecondary: {
							active: O.b.alienblue
						},
						send: {
							disable: Object(s.a)(.5, O.b.white),
							hover: Object(s.a)(.08, O.b.op)
						},
						checkbox: {
							checked: O.b.alienblue,
							checkmark: O.b.white,
							unchecked: _(C).body,
							uncheckedBorder: Object(s.a)(.3, O.b.white)
						},
						input: {
							border: O.b.defaultFlair,
							focusColor: O.b.white,
							focusBg: O.b.approved,
							ownerBg: _(C).line,
							color: _(C).bodyText,
							error: O.b.warning,
							channelRename: Object(s.a)(.1, O.b.white),
							background: Object(s.g)(Object(s.a)(.3, O.b.white), .1)
						},
						link: {
							staticUnderline: O.b.alienblue,
							staticText: O.b.op,
							hoverText: O.b.snoo
						},
						minimizedPortal: {
							backgroundColor: {
								unreadInitial: _(C).active,
								unreadFinal: _(C).highlight
							},
							color: {
								unreadInitial: O.b.white,
								unreadFinal: O.b.black
							}
						}
					},
					layout: {
						body: _(C).body,
						colsBorder: _(C).line,
						controlsBorder: Object(s.g)(O.b.black, .15),
						header: {
							counterBg: O.b.snoo,
							counterText: O.b.white
						},
						scrollbar: Object(s.a)(.2, O.b.white),
						scrollbarHover: Object(s.a)(.4, O.b.white),
						timeStamp: {
							tooltip: {
								background: _(C).body
							}
						},
						dropdown: {
							border: O.b.transparent
						}
					},
					message: {
						list: {
							item: {
								ownerBg: _(C).inactive,
								button: _(C).actionIcon,
								richItem: _(C).metaText,
								richItemBorder: _(C).postLine,
								onlineIndicator: O.b.approved,
								white: O.b.white
							}
						}
					},
					subreddit: {
						iconBg: O.b.alienblue
					},
					sidebar: {
						background: Object(s.g)(Object(s.a)(.3, O.b.white), .1),
						subreddit: {
							background: {
								active: O.b.alienblue,
								hover: _(C).canvas
							}
						},
						basic: {
							background: {
								active: O.b.alienblue,
								hover: _(C).canvas
							}
						},
						text: {
							divider: Object(s.a)(.5, O.b.white)
						},
						item: {
							hover: _(C).field,
							active: _(C).postLine,
							selected: _(C).inactive,
							text: {
								active: _(C).titleText
							}
						},
						footer: {
							background: _(C).field
						}
					},
					toast: {
						pending: O.b.black,
						success: O.b.approved,
						error: O.b.orangered
					},
					skeleton: {
						field: _(C).field,
						inactive: _(C).inactive
					},
					boxShadow: Object(s.g)(20, 120, 120, .11),
					bubbleActions: {
						hover: _(C).line
					},
					bubble: {
						background: O.b.transparent,
						color: _(C).bodyText,
						border: _(C).line,
						link: {
							color: O.b.op,
							textDecoration: v.NONE
						},
						channelsFilter: {
							background: d,
							selected: p
						}
					},
					editName: Object(s.a)(.1, _(C).inactive)
				},
				M = {
					activity: {
						icon: {
							default: _(j).postIcon,
							active: O.b.alienblue,
							disable: Object(s.a)(.5, O.b.white),
							hover: Object(s.a)(.5, O.b.white),
							contrast: Object(s.a)(.4, _(j).bodyText),
							nsfw: {
								bg: O.b.black,
								text: O.b.white
							}
						},
						text: {
							regular: _(j).bodyText,
							active: O.b.op,
							fade: Object(s.a)(.4, O.b.white),
							light: _(j).actionIcon,
							warning: O.b.warning,
							highlight: O.b.white,
							success: O.b.approved,
							meta: _(j).metaText
						},
						button: {
							primary: O.b.alienblue,
							secondary: _(j).metaText,
							chatFilterColor: h
						},
						buttonSecondary: {
							active: O.b.lightboxHeaderText
						},
						send: {
							disable: Object(s.a)(.5, O.b.white),
							hover: Object(s.a)(.08, O.b.op)
						},
						checkbox: {
							checked: O.b.alienblue,
							checkmark: O.b.white,
							unchecked: _(j).body,
							uncheckedBorder: Object(s.a)(.3, O.b.white)
						},
						input: {
							border: O.b.defaultFlair,
							focusColor: O.b.white,
							focusBg: O.b.approved,
							ownerBg: _(j).line,
							color: _(j).bodyText,
							error: O.b.warning,
							channelRename: Object(s.a)(.1, O.b.white),
							background: Object(s.g)(Object(s.a)(.3, O.b.white), .1)
						},
						link: {
							staticUnderline: O.b.alienblue,
							staticText: O.b.op,
							hoverText: O.b.snoo
						},
						minimizedPortal: {
							backgroundColor: {
								unreadInitial: _(j).active,
								unreadFinal: _(j).highlight
							},
							color: {
								unreadInitial: O.b.white,
								unreadFinal: O.b.white
							}
						}
					},
					layout: {
						body: _(j).body,
						colsBorder: _(j).line,
						controlsBorder: Object(s.g)(O.b.white, .15),
						header: {
							counterBg: O.b.snoo,
							counterText: O.b.white
						},
						scrollbar: Object(s.a)(.2, _(j).bodyText),
						scrollbarHover: Object(s.a)(.1, _(j).bodyText),
						timeStamp: {
							tooltip: {
								background: _(j).inactive
							}
						},
						dropdown: {
							border: _(j).line
						}
					},
					message: {
						list: {
							item: {
								ownerBg: _(j).inactive,
								button: _(j).actionIcon,
								richItem: _(j).metaText,
								richItemBorder: E.a.metaText,
								onlineIndicator: O.b.approved,
								white: O.b.white
							}
						}
					},
					subreddit: {
						iconBg: O.b.alienblue
					},
					sidebar: {
						background: Object(s.g)(Object(s.a)(.4, O.b.white), .1),
						subreddit: {
							background: {
								active: O.b.alienblue,
								hover: Object(s.h)(.2, _(j).canvas)
							}
						},
						basic: {
							background: {
								active: O.b.alienblue,
								hover: Object(s.h)(.2, _(j).canvas)
							}
						},
						text: {
							divider: Object(s.a)(.5, O.b.white)
						},
						item: {
							hover: _(j).field,
							active: _(j).postLine,
							selected: _(j).placeholder,
							text: {
								active: _(j).titleText
							}
						},
						footer: {
							background: _(j).field
						}
					},
					toast: {
						pending: O.b.black,
						success: O.b.approved,
						error: O.b.orangered
					},
					skeleton: {
						field: _(j).field,
						inactive: _(j).inactive
					},
					boxShadow: Object(s.g)(20, 120, 120, 0),
					bubbleActions: {
						hover: _(j).field
					},
					bubble: {
						background: O.b.transparent,
						color: _(j).bodyText,
						border: _(j).line,
						link: {
							color: O.b.op,
							textDecoration: v.NONE
						},
						channelsFilter: {
							background: b,
							selected: u
						}
					},
					editName: _(j).inactive
				},
				k = {
					[c.b.REDDIT]: A,
					[c.b.NIGHT]: M
				},
				P = {
					[x.ORANGERED]: T,
					[x.VANITY]: w,
					[x.SERIOUS]: N
				},
				D = [x.BASIC, x.ORANGERED, x.VANITY, x.SERIOUS]
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
				return Ut
			}));
			var s = n("./node_modules/redux/es/redux.js"),
				a = n("./src/chat/actions/channelsFilter/index.ts"),
				r = n("./src/chat/models/Channel/index.ts");
			const c = {
				selectedJoinedFilter: r.b.ALL,
				selectedInvitedFilter: r.b.ALL
			};
			var o = (e = c, t) => {
					switch (t.type) {
						case a.b: {
							const {
								payload: {
									isForInvitedChannels: n,
									filter: s
								}
							} = t;
							return {
								...e,
								...Object(r.d)(e, s, n)
							}
						}
						case a.a:
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
			var f = (e = !1, t) => {
					switch (t.type) {
						case b.s:
							return !0;
						default:
							return e
					}
				},
				g = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/uniq.js")),
				O = n.n(g),
				E = n("./src/chat/models/Channel/utils/index.ts");
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
							hasMoreChannels: s
						} = t.payload, a = Object(E.c)(n, [r.a.Direct, r.a.Group]);
						if (!a) return e;
						const c = Object.keys(a),
							o = s && !!c.length;
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
			var _ = (e = !1, t) => {
					switch (t.type) {
						case b.c:
							return !1;
						case b.h:
							return !0;
						default:
							return e
					}
				},
				v = n("./src/chat/actions/message/index.ts");
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
								hasMoreChannels: s
							} = t.payload, a = Object(E.c)(n, [r.a.Direct, r.a.Group]);
							if (!a) return e;
							const c = Object.keys(a),
								o = s && !!c.length;
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
						case v.a: {
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
				A = n("./node_modules/lodash/reduce.js"),
				M = n.n(A),
				k = n("./src/chat/actions/channel/dropdown.ts"),
				P = n("./src/chat/actions/message/inboxScroller.ts"),
				D = n("./src/chat/constants/channels.ts");
			const L = {};
			var R = (e = L, t) => {
				switch (t.type) {
					case b.g:
						return {
							...e, ...t.payload
						};
					case b.b:
					case b.a: {
						const {
							channels: n
						} = t.payload, s = M()(e, (e, t, s) => n[s] && t.channelState === D.b.PARTIAL && (e[s] = n[s]) && e || e, {});
						return {
							...n,
							...e,
							...s
						}
					}
					case b.p: {
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
					case b.t: {
						const {
							channelId: n
						} = t.payload, s = {
							...e[n],
							channelState: D.b.JOINED
						};
						return {
							...e,
							[s.channelId]: s
						}
					}
					case b.x: {
						const n = t.payload.channel,
							s = {
								...e[n.channelId],
								...u()(n, "hasMoreMessages", "isMessageListLoaded")
							},
							a = {
								[n.channelId]: s
							};
						return {
							...e,
							...a
						}
					}
					case b.w: {
						const n = t.payload.channel,
							s = {
								...e[n.channelId],
								...n,
								channelState: D.b.INVITED
							},
							a = {
								[n.channelId]: s
							};
						return {
							...e,
							...a
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
					case k.a: {
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
							s = Number(T()(Object.keys(t.payload.message))),
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
			const U = {
				channelId: void 0,
				isLoaded: !1
			};
			var F = (e = U, t) => {
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
			var B = Object(s.c)({
					channelsFilter: o,
					draftMessages: p,
					firstLoaded: f,
					invited: j,
					inviteListExpanded: _,
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
					models: R,
					selected: F,
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
					case W.g:
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
			var Y = (e = J, t) => {
				switch (t.type) {
					case W.g:
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
			const X = [];
			var $ = (e = X, t) => {
				switch (t.type) {
					case H.h:
						return [...e, t.payload];
					case H.k:
						return e.filter(e => e !== t.payload);
					case H.j:
						return X;
					default:
						return e
				}
			};
			const ee = [];
			var te = (e = ee, t) => {
					switch (t.type) {
						case W.g:
							return [...e, ...t.payload.map(e => e.id)];
						case H.c:
							return e.filter(e => e !== t.payload.userId);
						default:
							return e
					}
				},
				ne = Object(s.c)({
					fetchedBlockedUsers: G,
					knownContacts: Q,
					models: Y,
					selectedUserIds: $,
					suggestedKeys: te
				}),
				se = n("./src/chat/actions/container.ts"),
				ae = n("./src/chat/constants/container.ts");
			const re = {
				size: ae.a.EMBED
			};
			var ce = (e = re, t) => {
					switch (t.type) {
						case se.SIZE_CHANGED:
							if (ae.b[t.payload]) return {
								...e,
								size: t.payload
							};
						default:
							return e
					}
				},
				oe = n("./src/lib/makeActionCreator/index.ts");
			Object(oe.a)("EDIT_NICKNAME__SET_POPUP_VISIBILITY_COUNT"), Object(oe.a)("EDIT_NICKNAME__CLOSE_POPUP");
			const ie = {
				isShowPopupCounterExpired: !0,
				IsShowPopup: !0
			};
			var le = (e = ie, t) => {
					switch (t.type) {
						case "EDIT_NICKNAME__SET_POPUP_VISIBILITY_COUNT":
							return {
								...e, isShowPopupCounterExpired: t.payload <= 5
							};
						case "EDIT_NICKNAME__CLOSE_POPUP":
							return {
								...e, IsShowPopup: !1
							};
						default:
							return e
					}
				},
				de = n("./src/lib/env/index.ts"),
				ue = n("./src/chat/actions/experiments/index.ts"),
				he = n("./src/chat/models/Experiment/index.ts");
			const me = {
				api: {
					isPending: !1,
					errors: []
				},
				models: {}
			};
			var pe = (e = me, t) => {
					var n;
					switch (t.type) {
						case ue.c:
							return {
								...e, api: {
									...e.api,
									isPending: !0,
									errors: []
								}
							};
						case ue.b: {
							const s = Object(de.b)() ? null : null === (n = null == t ? void 0 : t.payload) || void 0 === n ? void 0 : n.queryParams,
								a = Object(he.b)(t.payload.data),
								r = ((e, t) => {
									var n, s;
									const a = {};
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
												a[r.toLowerCase()] = {
													...c,
													name: r.toLowerCase(),
													variant: t[o] || "",
													isOverride: !0,
													id: null !== (n = null == c ? void 0 : c.id) && void 0 !== n ? n : -1,
													version: null !== (s = null == c ? void 0 : c.version) && void 0 !== s ? s : "-1"
												}
											}
										}
									}
									return a
								})(a, s);
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
						case ue.a:
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
				be = n("./src/chat/actions/gifs/index.ts");
			const fe = {
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
			var ge = (e = fe, t) => {
					var n, s, a;
					switch (t.type) {
						case be.c:
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
						case be.f:
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
						case be.d:
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
						case be.g:
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
											ids: [...(null === (a = e.search.models[e.search.inputQuery]) || void 0 === a ? void 0 : a.ids) || [], ...t.payload.gifsData.models.map(e => e.id)]
										}
									}
								}
							};
						case be.b:
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
						case be.e:
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
						case be.h:
							return {
								...e, search: {
									...e.search,
									inputQuery: t.payload
								}
							};
						case be.a:
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
				Oe = n("./node_modules/lodash/toArray.js"),
				Ee = n.n(Oe),
				Ce = n("./node_modules/lodash/uniqBy.js"),
				je = n.n(Ce),
				_e = n("./src/chat/actions/members.ts");
			const ve = {};
			var Ie = (e = ve, t) => {
				switch (t.type) {
					case _e.b: {
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
					case _e.c: {
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
					case _e.a: {
						const {
							channelId: n,
							members: s
						} = t.payload, a = Ee()(s), r = e[n] && e[n].model || [], c = je()([...r, ...a], "id");
						return {
							...e,
							[n]: {
								...e[n],
								model: c
							}
						}
					}
					case _e.d:
						return {};
					default:
						return e
				}
			};
			var xe = (e = !1, t) => {
				switch (t.type) {
					case v.b:
					case v.l:
						return !0;
					default:
						return e
				}
			};
			const ye = {};
			var Se = (e = ye, t) => {
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
						return u()(e, t.payload);
					case v.e: {
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
			const we = {};
			var Ne = (e = we, t) => {
					var n, s;
					switch (t.type) {
						case v.i: {
							const a = z()(t.payload);
							if (a.length && (null === (s = null === (n = a[0]) || void 0 === n ? void 0 : n.messageData) || void 0 === s ? void 0 : s.clientMessageId)) {
								const t = a[0].messageData.clientMessageId;
								return {
									...u()(e, t)
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
								...n ? u()(e, n) : e
							}
						}
						default:
							return e
					}
				},
				Te = n("./src/chat/actions/message/richUnit.ts");
			const Ae = {
					posts: {},
					userPosts: {},
					comments: {},
					subreddits: {},
					dataReceived: !1
				},
				Me = e => e.length ? e.reduce((e, t) => (null == t ? void 0 : t.id) ? {
					...e,
					[t.id.toLowerCase()]: t
				} : e, {}) : {};
			var ke = (e = Ae, t) => {
					var n, s, a, r;
					switch (t.type) {
						case Te.b:
							return {
								...e, posts: {
									...e.posts,
									...Me((null === (n = t.payload) || void 0 === n ? void 0 : n.posts) || {})
								}, userPosts: {
									...e.userPosts,
									...Me((null === (s = t.payload) || void 0 === s ? void 0 : s.userPosts) || {})
								}, comments: {
									...e.comments,
									...Me((null === (a = t.payload) || void 0 === a ? void 0 : a.comments) || {})
								}, subreddits: {
									...e.subreddits,
									...Me((null === (r = t.payload) || void 0 === r ? void 0 : r.subreddits) || {})
								}, dataReceived: !0
							};
						case Te.a:
							return {
								...e, dataReceived: !1
							};
						default:
							return e
					}
				},
				Pe = n("./node_modules/lodash/isEqual.js"),
				De = n.n(Pe),
				Le = n("./src/chat/actions/message/unreadCount.ts");
			const Re = {
				basicChannelCount: 0,
				subredditChannelCount: 0,
				subredditMentionCount: 0
			};
			var Ue = (e = Re, t) => {
					switch (t.type) {
						case Le.a:
							return De()(e, t.payload) ? e : {
								...e,
								...t.payload
							}
					}
					return e
				},
				Fe = Object(s.c)({
					firstLoaded: xe,
					models: Se,
					pending: Ne,
					unread: Ue,
					richUnits: ke
				}),
				Be = n("./src/chat/reducers/meta/index.ts"),
				He = n("./src/chat/reducers/platform/index.ts"),
				Ge = n("./src/chat/reducers/promos/index.ts"),
				Ve = n("./src/chat/actions/sendbird/config.ts");
			const ze = {
				maxMessageLength: void 0
			};
			var We = (e = ze, t) => {
				switch (t.type) {
					case Ve.b:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Ke = {
				host: void 0
			};
			var Ze = (e = Ke, t) => {
					switch (t.type) {
						case Ve.c:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				qe = n("./src/chat/actions/sendbird/sdk.ts"),
				Qe = n("./src/chat/constants/sendbird.ts");
			const Je = {
				connectionStatus: Qe.b.Closed,
				initialized: !1
			};
			var Ye = (e = Je, t) => {
				switch (t.type) {
					case qe.a:
						return {
							...e, initialized: !0, connectionStatus: Qe.b.Open
						};
					case qe.c: {
						const n = {
							...t.payload
						};
						return {
							...e,
							error: n,
							connectionStatus: Qe.b.Closed
						}
					}
					case qe.b:
						return {
							...e, connectionStatus: Qe.b.Closed
						};
					case qe.d: {
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
			const Xe = {
				expires: void 0,
				token: void 0,
				active: !1
			};
			var $e = (e = Xe, t) => {
					switch (t.type) {
						case W.h:
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
				et = Object(s.c)({
					globalSettings: We,
					proxy: Ze,
					session: $e,
					sdk: Ye
				}),
				tt = n("./src/chat/reducers/sidebar/sideBarAppearance/index.ts"),
				nt = Object(s.c)({
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
				ot = n("./src/chat/actions/sidebar.ts"),
				it = n("./src/chat/actions/theme.ts"),
				lt = n("./src/chat/constants/theme.ts"),
				dt = n("./src/chat/models/Theme/index.ts");
			const ut = {
				current: dt.e[lt.a],
				chatTheme: null,
				chatThemeKey: dt.c.BASIC,
				chatPreviewThemeKey: dt.c.BASIC,
				cached: {},
				isShowPrompt: !0,
				isShowSparkles: !0
			};
			var ht = (e = ut, t) => {
					switch (t.type) {
						case it.GLOBAL_THEME_CHANGED:
							return e.current = dt.e[t.payload.themeKey], {
								...e
							};
						case it.CHAT_THEME_CHANGED:
							return {
								...e, chatTheme: dt.b[t.payload.themeKey], chatPreviewThemeKey: t.payload.themeKey
							};
						case it.CHAT_THEME_APPLIED:
							return {
								...e, chatThemeKey: t.payload.themeKey
							};
						case it.CHAT_THEME_CANCELED:
							return {
								...e, chatTheme: e.chatThemeKey ? dt.b[e.chatThemeKey] : null, chatPreviewThemeKey: e.chatThemeKey
							};
						case it.CHAT_THEME_SETTINGS_CLICKED:
							return {
								...e, isShowPrompt: !1, isShowSparkles: !1
							};
						case it.CHAT_THEME_PROMPT_CLICKED:
							return {
								...e, isShowPrompt: !1
							};
						case it.CHAT_THEME_RESTORED:
							return {
								...e, chatTheme: dt.b[t.payload.themeKey], chatThemeKey: t.payload.themeKey, chatPreviewThemeKey: t.payload.themeKey
							};
						case it.CHAT_THEME_SHOW_PROMPT_COUNT_SET:
							return {
								...e, isShowPrompt: t.payload <= it.MAX_SHOW_PROMPT_COUNT, isShowSparkles: t.payload <= it.MAX_SHOW_COLORED_SETTINGS
							};
						case ot.b:
							return t.payload === tt.a.THEMES ? {
								...e,
								isShowPrompt: !1
							} : e;
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
				ft = n("./src/chat/actions/tooltip.ts");
			var gt = (e = null, t) => {
					switch (t.type) {
						case ft.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case ft.b:
						case bt.a:
							return null;
						default:
							return e
					}
				},
				Ot = n("./src/chat/actions/typingIndicator.ts");
			const Et = {
				usernames: []
			};
			var Ct = (e = Et, t) => {
					switch (t.type) {
						case Ot.a: {
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
								return De()(e, t)
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
				jt = n("./src/lib/reducers/addAuthentication/index.ts");
			var _t = Object(jt.a)((e = null, t) => {
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
			const vt = {
				userSubredditChatEnabled: !1
			};
			var It = (e = vt, t) => {
				switch (t.type) {
					case W.f:
					case Ve.a: {
						const {
							userSubredditChatEnabled: n
						} = t.payload || vt;
						return {
							...e,
							...t.payload,
							userSubredditChatEnabled: e.userSubredditChatEnabled || n
						}
					}
				}
				return e
			};
			const xt = {};
			var yt = (e = xt, t) => {
				switch (t.type) {
					case H.d:
						return t.payload;
					default:
						return e
				}
			};
			const St = n("./src/lib/constants/index.ts").B;
			var wt = Object(jt.a)((e = St, t) => (t.type, e), St);
			const Nt = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var Tt = (e = Nt, t) => {
				switch (t.type) {
					case H.e:
						return t.payload;
					default:
						return e
				}
			};
			const At = {
				globalTheme: lt.a
			};
			var Mt = (e = At, t) => {
				switch (t.type) {
					case it.GLOBAL_THEME_CHANGED: {
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
			var kt = (e = "", t) => {
					switch (t.type) {
						case H.f:
							return t.payload;
						default:
							return e
					}
				},
				Pt = n("./src/chat/actions/session.ts");
			var Dt = (e = null, t) => {
				switch (t.type) {
					case Pt.a:
					case Pt.c:
						return t.payload;
					case Pt.b:
						return null;
					default:
						return e
				}
			};
			var Lt = (e = "", t) => {
					switch (t.type) {
						case H.g:
							return t.payload;
						default:
							return e
					}
				},
				Rt = Object(s.c)({
					account: _t,
					chatExperiments: It,
					experiments: yt,
					language: wt,
					loid: Tt,
					prefs: Mt,
					reddaid: kt,
					session: Dt,
					sessionTracker: Lt
				});
			const Ut = {
				channels: B,
				contacts: ne,
				container: ce,
				editNickname: le,
				experiments: pe,
				gifs: ge,
				members: Ie,
				messages: Fe,
				meta: Be.b,
				platform: He.b,
				promos: Ge.b,
				sendbird: et,
				sidebar: nt,
				sitewideRules: rt,
				themes: ht,
				toast: pt,
				tooltipId: gt,
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
				u = Object(r.a)(c, l, i, (e, t, n) => {
					var s, a;
					return !n || n && !t.length && !(null === (s = e.search.models[n]) || void 0 === s ? void 0 : s.pending) ? e.trending.modelIds : n && t.length ? t : n && !t.length && (null === (a = e.search.models[n]) || void 0 === a ? void 0 : a.pending) ? [] : void 0
				}),
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
				f = Object(r.a)(c, i, (e, t) => {
					var n, s;
					return Boolean(t && (null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.pending) && (null === (s = e.search.models[t]) || void 0 === s ? void 0 : s.ids.length))
				})
		},
		"./src/chat/selectors/platform.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return o
			}));
			const s = e => e.platform && e.platform.currentPage && e.platform.currentPage.urlParams.channelId,
				a = e => e.platform && e.platform.currentPage && e.platform.currentPage.urlParams.action,
				r = e => e.platform && e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name,
				c = e => {
					var t, n;
					return null === (n = null === (t = e.platform) || void 0 === t ? void 0 : t.currentPage) || void 0 === n ? void 0 : n.queryParams
				},
				o = e => !(!s(e) || a(e))
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
			const s = e => e.sidebar.sideBarAppearance.isSidebarVisible,
				a = e => e.sidebar.sideBarAppearance.sideBarComponentType
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
		"./src/chat/singleton/SendbirdSDK.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return D
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
					a = Object(b.w)(s);
				if (t(Object(u.J)({
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
					c = Object(b.x)(a),
					o = Object(g.a)(a);
				if (t === o && (n(Object(u.I)(r)), r === c)) {
					const e = Object(p.getRedirectURL)(Object(p.channelAction)(r, m.a.DENY));
					n(Object(h.b)(e))
				}
			};
			var E = n("./src/chat/actions/message/index.ts"),
				C = n("./src/chat/actions/sendbird/index.ts"),
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
				sendbirdAppId: P
			} = s.a;
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
						appId: P
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
					this.dispatch(Object(_.f)({
						toast: S.a.ConnectionPending
					})), this.dispatch(Object(C.m)())
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
						this.dispatch(Object(j.h)(t)), this.dispatch(Object(_.f)(n))
					}, this.self.addConnectionHandler("CONNECTION_CHANGE", e), this.connectionUniqueHandlerID.push("CONNECTION_CHANGE")
				}
				onReconnectSucceeded() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: y.b.Open
						};
					e.onReconnectSucceeded = () => {
						this.dispatch(Object(j.h)(t)), this.dispatch(Object(_.f)({
							toast: S.a.ConnectionOpen
						})), Object(i.setTimeout)(() => this.dispatch(Object(_.d)()), 3 * l.Ob);
						this.dispatch(Object(E.t)(!0)), this.dispatch(Object(u.C)())
					}, this.self.addConnectionHandler("RECONNECT_SUCCEEDED", e), this.connectionUniqueHandlerID.push("RECONNECT_SUCCEEDED")
				}
				onReconnectFailed() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: y.b.Closed
						};
					e.onReconnectFailed = () => {
						this.dispatch(Object(j.h)(t)), this.dispatch(Object(_.f)({
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
						const s = Object(M.c)(t);
						s && this.dispatch(Object(E.v)(s))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_MESSAGE")
				}
				onUpdateMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageUpdated = (e, t) => {
						const n = Object(N.g)(e);
						this.dispatch(Object(u.O)(n));
						const s = Object(M.c)(t);
						s && this.dispatch(Object(E.v)(s))
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
							const t = Object(N.g)(e);
							this.dispatch(Object(u.P)(t, !0))
						}, this.self.addChannelHandler(a, s), this.channelUniqueHandlerID.push(a)
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
						const t = Object(A.a)(e);
						this.dispatch(f(t))
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
						UNSORTED: s
					} = m.b;
					t === n && e.channelState === s && (e.channelState = n, this.dispatch(Object(u.Q)(e)))
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
							const n = Object(N.g)(e);
							if (!n) return t();
							this.dispatch(Object(u.Q)(n)), t(n)
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
							const c = Object(N.g)(t);
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
							r.length && this.dispatch(Object(C.i)(r)), n(c)
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
			t.a = D
		},
		"./src/chat/tracking/events/chatView.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return u
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "d", (function() {
				return j
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
						...Object(r.z)(e),
						...Object(r.p)(e),
						...Object(r.f)(e),
						...Object(r.r)(e),
						...Object(r.k)(e),
						...Object(r.x)(e)
					},
					...Object(c.a)(e)
				}),
				h = (e, t) => {
					Object(d.a)({
						noun: "chat_message",
						source: s.b.ChatView,
						action: s.a.Submit,
						chat: {
							...Object(r.z)(e),
							...Object(r.p)(e),
							...Object(r.f)(e),
							...Object(r.r)(e, 0),
							...Object(r.n)(e, t),
							...Object(r.w)(e, t),
							...Object(r.x)(e)
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
				b = e => {
					Object(d.a)({
						noun: "history",
						source: s.b.ChatView,
						action: s.a.View,
						chat: {
							...Object(r.z)(e),
							...Object(r.p)(e),
							...Object(r.f)(e),
							...Object(r.x)(e)
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
							...Object(r.z)(e),
							...Object(r.p)(e),
							...Object(r.f)(e),
							...Object(r.x)(e)
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
							...Object(r.z)(e),
							...Object(r.p)(e),
							...Object(r.f)(e)
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
						source: s.b.Chat,
						action: s.a.View,
						chat: {
							...Object(r.z)(e),
							...Object(r.p)(e),
							...Object(r.f)(e)
						},
						...Object(c.a)(e)
					})
				},
				E = e => {
					Object(d.a)({
						noun: "all_invites",
						source: s.b.ChatView,
						action: s.a.Click,
						chat: {
							...Object(r.z)(e),
							...Object(r.f)(e)
						},
						...Object(c.a)(e)
					})
				},
				C = e => {
					Object(d.a)({
						noun: "all_invites",
						source: s.b.ChatView,
						action: s.a.View,
						chat: {
							...Object(r.z)(e),
							...Object(r.f)(e)
						},
						...Object(c.a)(e)
					})
				},
				j = (e, t, n) => {
					Object(d.a)({
						noun: "type_filter",
						source: s.b.ChatView,
						action: s.a.Click,
						chat: {
							...Object(r.z)(e),
							...Object(r.f)(e)
						},
						...Object(c.a)(e),
						actionInfo: {
							...Object(a.a)(e),
							type: t,
							pageType: n
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
							...Object(r.b)(e),
							...Object(r.c)(e)
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
					Object(s.a)({
						noun: "alert_invalid_user",
						source: a.b.ContactsList,
						action: a.a.View,
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
					Object(s.a)({
						noun: "alert_invalid_channel",
						source: a.b.ContactsList,
						action: a.a.View,
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
					Object(s.a)({
						noun: "create_chat",
						source: a.b.ContactsList,
						action: a.a.Click,
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
					Object(s.a)({
						noun: "close_contacts",
						source: a.b.ContactsList,
						action: a.a.Click,
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
					Object(s.a)({
						noun: "add_to_chat",
						source: a.b.ContactsList,
						action: a.a.Click,
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
				return g
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "i", (function() {
				return E
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
					source: s.b.InvitationInbox,
					action: s.a.Click,
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
					source: s.b.InvitationInbox,
					action: s.a.Click,
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
						...Object(a.a)(e),
						reason: n
					}
				}),
				u = e => Object(o.a)({
					noun: "block",
					source: s.b.InvitationInbox,
					action: s.a.Click,
					chat: {
						...Object(r.i)(e),
						...Object(r.j)(e),
						...Object(r.g)(e),
						...Object(r.h)(e),
						...Object(r.p)(e)
					},
					...Object(c.a)(e)
				}),
				h = e => Object(o.a)({
					noun: "spam",
					source: s.b.InvitationInbox,
					action: s.a.Click,
					chat: {
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
					source: s.b.InvitationInbox,
					action: s.a.Click,
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
						source: s.b.InvitationInbox,
						action: s.a.Click,
						...Object(c.a)(e)
					})
				},
				b = e => {
					Object(o.a)({
						noun: "collapse",
						source: s.b.InvitationInbox,
						action: s.a.Click,
						...Object(c.a)(e)
					})
				},
				f = new Set,
				g = (e, t) => {
					f.has(t) || (f.add(t), Object(o.a)({
						noun: "collapsed_message",
						source: s.b.Chat,
						action: s.a.View,
						chat: {
							message_id: t
						},
						...Object(c.a)(e)
					}))
				},
				O = (e, t, n) => {
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
				E = (e, t, n) => {
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
							...Object(a.o)(e),
							...Object(a.y)(e),
							...Object(a.q)(e)
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
							...Object(a.o)(e),
							...Object(a.y)(e),
							...Object(a.q)(e)
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
							...Object(a.o)(e),
							...Object(a.q)(e)
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
							...Object(a.o)(e),
							...Object(a.q)(e)
						},
						...Object(r.a)(e),
						actionInfo: {
							...Object(s.a)(e)
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
					update: E
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
					update: E
				}), [d, g, i, p, m, O, t, n, b, u, E])
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
				return C
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
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subredditFullUrl.config).add(o.g.subredditFull.prefix, o.g.subredditFullUrl.config),
				E = m.normalize;
			m.normalize = e => {
				E.call(m, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const C = (e, t) => {
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
				a = n("./src/redditGQL/operations/RegisterWebPushToken.json"),
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
		"./src/lib/safeBadgeUpdate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/throwDevError.ts");
			const a = e => {
				const t = null === window || void 0 === window ? void 0 : window.navigator;
				if (t && "setAppBadge" in t && "clearAppBadge" in t) {
					(e >= 0 ? t.setAppBadge(e) : t.clearAppBadge()).catch(e => Object(s.a)(e))
				}
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
			const a = Object(s.a)(() => Promise.all([n.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(s.a)(() => Promise.all([n.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				c = Object(s.a)(() => Promise.all([n.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
				e.R2 = "R2", e.MWEB = "MWEB", e.D2X = "D2X"
			}(r || (r = {}));
			const c = new Set(Object.values(r))
		},
		"./src/redditGQL/operations/ChatUnitDetails.json": function(e) {
			e.exports = JSON.parse('{"id":"0e3adbb8d3c9"}')
		},
		"./src/redditGQL/operations/CreateChatGifMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"3c7c0b56eebb"}')
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Chat~RedesignChat.e06d2d5ae4ad1ef02ab3.js.map