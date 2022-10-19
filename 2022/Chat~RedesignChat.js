// https://www.redditstatic.com/desktop2x/Chat~RedesignChat.82fc6c91b0a661541b02.js
// Retrieved at 10/19/2022, 2:10:05 PM by Reddit Dataminer v1.0.0
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
				return Z
			})), n.d(t, "e", (function() {
				return Q
			})), n.d(t, "f", (function() {
				return Y
			})), n.d(t, "d", (function() {
				return X
			})), n.d(t, "q", (function() {
				return J
			})), n.d(t, "p", (function() {
				return $
			})), n.d(t, "r", (function() {
				return ee
			})), n.d(t, "h", (function() {
				return te
			})), n.d(t, "c", (function() {
				return ne
			})), n.d(t, "w", (function() {
				return ae
			})), n.d(t, "x", (function() {
				return se
			})), n.d(t, "y", (function() {
				return ce
			})), n.d(t, "v", (function() {
				return re
			})), n.d(t, "k", (function() {
				return oe
			})), n.d(t, "l", (function() {
				return ie
			})), n.d(t, "i", (function() {
				return le
			})), n.d(t, "j", (function() {
				return de
			})), n.d(t, "a", (function() {
				return ue
			})), n.d(t, "b", (function() {
				return he
			})), n.d(t, "u", (function() {
				return me
			})), n.d(t, "t", (function() {
				return be
			})), n.d(t, "n", (function() {
				return pe
			})), n.d(t, "o", (function() {
				return ge
			})), n.d(t, "m", (function() {
				return fe
			})), n.d(t, "s", (function() {
				return Oe
			})), n.d(t, "L", (function() {
				return ve
			})), n.d(t, "K", (function() {
				return Ee
			})), n.d(t, "z", (function() {
				return _e
			})), n.d(t, "C", (function() {
				return Ce
			})), n.d(t, "W", (function() {
				return Se
			})), n.d(t, "V", (function() {
				return we
			})), n.d(t, "U", (function() {
				return Me
			})), n.d(t, "N", (function() {
				return Ue
			})), n.d(t, "O", (function() {
				return Re
			})), n.d(t, "J", (function() {
				return Be
			})), n.d(t, "B", (function() {
				return ze
			})), n.d(t, "A", (function() {
				return Ke
			})), n.d(t, "G", (function() {
				return qe
			})), n.d(t, "Q", (function() {
				return Ze
			})), n.d(t, "T", (function() {
				return Ye
			})), n.d(t, "S", (function() {
				return Xe
			})), n.d(t, "R", (function() {
				return Je
			})), n.d(t, "P", (function() {
				return tt
			})), n.d(t, "D", (function() {
				return lt
			})), n.d(t, "E", (function() {
				return ut
			})), n.d(t, "F", (function() {
				return ht
			})), n.d(t, "M", (function() {
				return bt
			})), n.d(t, "H", (function() {
				return pt
			})), n.d(t, "I", (function() {
				return gt
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				c = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/config.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/chat/actions/gifs/index.ts"),
				l = n("./src/chat/actions/inviteLink/localStorage.ts"),
				d = n("./src/chat/actions/liveChat/index.ts"),
				u = n("./src/chat/actions/members.ts"),
				h = n("./src/chat/actions/message/index.ts"),
				m = n("./src/chat/actions/message/unreadCount.ts"),
				b = (n("./src/chat/actions/platform.ts"), n("./src/chat/actions/sidebar.ts")),
				p = n("./src/chat/actions/toast.ts"),
				g = n("./src/chat/actions/tracking.ts"),
				f = n("./src/chat/actions/user.ts"),
				O = n("./src/chat/constants/batchSizes.ts"),
				v = n("./src/chat/constants/channels.ts"),
				E = n("./src/chat/constants/messages.ts"),
				j = n("./src/chat/constants/sendbird.ts"),
				_ = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				C = n("./src/lib/makeGqlRequest/index.ts"),
				I = n("./src/redditGQL/operations/DeclineChatChannelInvite.json"),
				y = n("./src/redditGQL/operations/LeaveChatChannel.json");
			var x = n("./src/chat/endpoints/sendbird/index.ts"),
				S = n("./src/chat/helpers/errors.ts"),
				N = n("./src/chat/helpers/time/index.tsx"),
				w = n("./src/chat/helpers/urls/index.ts"),
				k = n("./src/chat/models/Channel/index.ts"),
				T = n("./src/chat/models/Channel/utils.ts"),
				M = n("./src/chat/models/User/inviter.ts"),
				A = n("./src/chat/models/User/member.ts");
			var L = n("./src/chat/models/Sidebar/index.ts"),
				D = n("./src/chat/selectors/channels.ts");
			const U = (e, t) => {
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
						channelAction: v.a.VIEW_INVITE
					}
				},
				P = e => {
					const {
						channels: t
					} = e;
					return {
						channelId: t.joined.sortedKeys[0]
					}
				},
				R = e => [U(e), P(e)],
				B = e => {
					const t = Object(D.n)(e);
					return {
						channelId: t && t.channelId
					}
				},
				H = e => e.find(e => !!e.channelId);
			var F = n("./src/chat/selectors/channelsFilter.ts"),
				G = n("./src/chat/selectors/experiments.ts"),
				V = n("./src/chat/selectors/liveChat/index.ts"),
				W = n("./node_modules/reselect/es/index.js");
			const z = Object(W.a)(V.e, e => e[0]);
			var K = n("./src/chat/selectors/platform.ts"),
				q = n("./src/chat/singleton/SendbirdSDK.ts");
			const Z = "CHANNEL__ADD_SUCCESS",
				Q = "CHANNEL__ADD_FAIL",
				Y = "CHANNEL__CREATE_CHANNEL_START",
				X = "CHANNEL__CREATE_CHANNEL_END",
				J = "CHANNEL__SELECT_BEGIN",
				$ = "CHANNEL__RESET_UNREAD_COUNT",
				ee = "CHANNEL__SELECT_END",
				te = "CHANNEL__EXPAND_INVITE_LIST",
				ne = "CHANNEL__COLLAPSE_INVITE_LIST",
				ae = "CHANNEL__UPDATE_MODEL",
				se = "CHANNEL__INVITED_UPDATE",
				ce = "CHANNEL__JOINED_UPDATE",
				re = "CHANNEL__SET_UPDATED_CHANNEL_ON_TOP",
				oe = "CHANNEL__FETCHING_JOINED_CHANNELS",
				ie = "CHANNEL__FETCHING_JOINED_CHANNELS_FAILED",
				le = "CHANNEL__FETCHING_INVITED_CHANNELS",
				de = "CHANNEL__FETCHING_INVITED_CHANNELS_FAILED",
				ue = "CHANNEL__ADD_EXISTING_INVITED_CHANNELS",
				he = "CHANNEL__ADD_EXISTING_JOINED_CHANNELS",
				me = "CHANNEL__SET_INVITED_CHANNEL_TO_JOINED",
				be = "CHANNEL__SET_EXISTING_CHANNELS_END",
				pe = "CHANNEL__REMOVE_CHANNEL",
				ge = "CHANNEL__RESET_CHANNEL_MESSAGE_LIST",
				fe = "CHANNEL__FETCH_FIRST_MESSAGE",
				Oe = "CHANNEL__SELECT_LIVE_CHAT_POST",
				ve = Object(o.a)(pe),
				Ee = e => async t => {
					t(ve({
						channelId: e
					}))
				}, je = Object(o.a)(me), _e = e => async (t, n, a) => {
					let {
						apiContext: s
					} = a;
					const r = n(),
						{
							user: {
								session: o
							}
						} = r;
					if (!e) throw new S.a("accepted channelId", e);
					if (!o) throw new S.a("session", o);
					const i = Object(D.n)(r),
						l = i && i.firstMessageId,
						d = !!(i && l && i.hasMoreMessages);
					await Object(x.a)(s(), o, e), d && t(Object(h.u)(l)), t(je({
						channelId: e
					}));
					const u = Object(w.getRedirectURL)(Object(w.channelUrl)(e));
					t(Object(c.b)(u))
				}, Ce = (e, t, n) => async (a, s, c) => {
					let {
						gqlContext: r
					} = c;
					var o, i, l;
					const d = s(),
						{
							user: {
								session: u
							}
						} = d;
					if (!Object(D.i)(d, e) || !t) return;
					if (!u) throw new S.a("session", u);
					const h = Object(G.v)(d),
						b = Object(G.x)(d),
						g = {
							channelSendbirdId: e,
							inviterUserId: t.id,
							shouldBlockInviter: !n && (h || b),
							shouldReportInviter: !n && b
						},
						f = await ((e, t) => Object(C.a)(e, {
							...I,
							variables: t
						}))(r(), {
							input: g
						});
					if ((null === (i = null === (o = f.error) || void 0 === o ? void 0 : o.fields) || void 0 === i ? void 0 : i.length) || (e => Boolean(e && e.data && e.data.declineChatChannelInvite))(f.body) && (null === (l = f.body.data.declineChatChannelInvite.errors) || void 0 === l ? void 0 : l.length)) return a(Object(p.e)()), Object(S.b)(`Error declining invite: ${f.error}`);
					a(Object(m.c)()), await a(Ze(v.b.INVITED, e)), a((e => async t => t(Ee(e)))(e))
				}, Ie = Object(o.a)(se), ye = Object(o.a)(ce), xe = Object(o.a)(ae), Se = e => async t => {
					t(xe({
						channel: e
					}))
				}, Ne = e => async t => {
					await t(Ie({
						channel: e
					})), t((e => async (t, n) => {
						const a = n().user.account.id,
							s = e.members.filter(e => e.id !== a).map(e => e.id);
						t(Object(f.t)(s))
					})(e))
				}, we = (e, t) => async (n, a) => {
					if (e) {
						const c = a(),
							r = Object(D.i)(c, e.channelId);
						if (e.channelState !== v.b.INVITED && !r || t) return;
						if (e = ke(c, e), s()(e, r)) return;
						switch (e.channelState) {
							case v.b.INVITED:
								await n(Ne(e));
								break;
							case v.b.JOINED:
								await n(ye({
									channel: e
								}));
								break;
							default:
								Object(S.b)("Error updating channel. ChannelState not found.")
						}
						n(Object(m.c)())
					}
				}, ke = (e, t) => {
					return Object(K.e)(e) === t.channelId && (t.unreadMessageCount = 0), t
				}, Te = Object(o.a)(re), Me = e => async (t, n) => {
					const {
						channelId: a
					} = e, s = e.type === k.b.Direct, c = e.channelState === v.b.JOINED;
					!Object(D.i)(n(), e.channelId) && s && c && await t(Fe({
						[a]: e
					})), t(Te({
						channelId: a
					}))
				}, Ae = Object(o.a)($), Le = Object(o.a)(J), De = Object(o.a)(ee), Ue = () => async (e, t) => {
					const n = t(),
						a = Object(K.e)(n),
						s = Object(K.d)(n),
						{
							CREATE: r,
							DENY: o,
							VIEW_JOIN: d,
							SHARE: m,
							INVITE_LINK_SETTINGS: p
						} = v.a,
						g = Object(l.a)(n);
					if (g) return void e(Ke([g]));
					if (s === p) return;
					if (!n.platform.currentPage) return;
					a && (await e(Object(b.d)(a)), e(Object(b.f)(!1))), await e(Object(u.f)()), e(Object(i.i)());
					const f = a && Object(D.i)(n, a);
					if (!f && (s === o || s === r || s === m)) return;
					const O = !(!f || f.channelState !== v.b.JOINED);
					if (f && O && s && v.j.includes(s)) {
						const t = Object(w.getRedirectURL)(Object(w.channelUrl)(f.channelId));
						e(Object(c.b)(t))
					} else if (f && a) {
						e(Le({
							channelId: a
						}));
						const {
							previousMessagesData: t
						} = await q.a.enterChannel(f, !1);
						t ? (await e(Object(h.p)(t, f.channelId)), await e(De()), e(Be(a))) : (e(Object(h.B)()), e(De()))
					} else {
						const t = n.sendbird.sdk.connectionStatus === j.b.Open;
						if (!f && a && t) {
							const t = await q.a.addChannelModelByChannelId(a);
							if (t && !s) {
								const n = Object(w.getRedirectURL)(Object(w.channelAction)(t.channelId, d));
								return void e(Object(c.b)(n))
							}
						}
						e(tt()), e(Object(h.B)())
					}
				}, Pe = Object(o.a)(Oe), Re = () => async (e, t) => {
					const n = t(),
						a = Object(K.f)(n);
					a && (e(Object(b.d)(a)), e(Object(d.updateLastReadAtTimestamp)({
						postId: a,
						lastReadAt: Object(N.b)(new Date)
					})), e(Pe({
						postId: a
					})))
				}, Be = e => async (t, n) => {
					const a = n(),
						s = e || Object(K.e)(a);
					s && (await t(Ae(s)), await q.a.markChannelAsRead(), t(Object(m.c)()))
				}, He = Object(o.a)(Y), Fe = Object(o.a)(Z), Ge = Object(o.a)(Q), Ve = Object(o.a)(X), We = (e, t, n) => {
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
				}, ze = (e, t, n) => async (a, s, r) => {
					let {
						apiContext: o
					} = r;
					const i = s(),
						{
							user: {
								account: l,
								session: d
							},
							contacts: {
								models: u
							},
							channels: {
								joined: m,
								invited: b
							}
						} = i;
					if (l && d) {
						a(He());
						const s = We(e, u, l);
						if (s.length < 2) return;
						const r = await Object(x.b)(o(), d, s, t);
						if (r.ok) {
							const e = function(e, t) {
									return {
										channelId: Object(T.f)(e.channel_url),
										channelSendbirdUrl: e.channel_url,
										channelState: Object(T.b)(t),
										fetchingFirstMessage: !1,
										fetchingMessages: !1,
										fetchingMessagesError: !1,
										hasMoreMessages: !1,
										isMessageListLoaded: !1,
										inviter: Object(M.b)(e.inviter),
										coverUrl: e.cover_url,
										createdAt: e.created_at,
										customType: e.custom_type,
										data: e.data,
										maxLengthMessage: -1,
										memberCount: e.member_count,
										name: e.name,
										type: Object(T.d)(e),
										lastMessage: void 0,
										unreadMessageCount: e.unread_message_count,
										unreadMentionCount: e.unread_mention_count,
										members: Object(A.b)(e.members)
									}
								}(r.body, v.b.JOINED),
								{
									channelId: t
								} = e,
								s = Object(w.getRedirectURL)(Object(w.channelUrl)(t));
							b.sortedKeys.includes(t) ? (a(_e(t)), a(Object(g.m)(t))) : m.sortedKeys.includes(t) ? (a(Object(c.b)(s)), a(Object(g.m)(t))) : (await a(Fe({
								[t]: e
							})), a(Object(g.m)(t)), await a(Object(c.b)(s))), n && (await q.a.enterChannel(e), await a(Object(h.r)(t, n, E.c.TEXT)))
						} else a(Ge()), a(Object(g.fb)(e));
						a(Ve())
					}
				}, Ke = e => async t => {
					e = e.slice(0, 1), await t(Object(f.t)(e)), t(ze(e)), location.origin === r.a.oldRedditUrl && t(Object(g.n)(e))
				}, qe = e => async (t, n, a) => {
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
						d = Object(D.E)(r, "channelSendbirdUrl"),
						u = Object(K.d)(r);
					if (o && i) {
						const n = We(e, l);
						if ((await Object(x.j)(s(), i, n, d)).body && u === v.a.INVITE_MEMBERS) {
							t(Object(g.d)());
							const e = Object(w.getRedirectURL)(Object(w.channelUrl)(Object(T.f)(d)));
							t(Object(c.b)(e)), t(Object(b.e)(L.a.CHANNELS))
						} else Object(S.b)("Error inviting user to existing channel")
					}
				}, Ze = (e, t) => async (n, a) => {
					const s = a(),
						c = e === v.b.INVITED,
						r = U(s, t),
						o = P(s);
					c ? r.channelId ? n(et({
						nextChannelInfo: r
					})) : n(et({
						nextChannelInfo: o
					})) : o.channelId ? n(et({
						nextChannelInfo: o
					})) : n($e())
				}, Qe = () => async e => {
					const t = Object(w.getRedirectURL)(w.rootUrl);
					e(Object(c.c)(t))
				}, Ye = () => async (e, t) => {
					const n = t(),
						a = z(n);
					if (null != a && a.post.id) {
						const t = {
							postId: a.post.id
						};
						e(et({
							nextLiveChatPostInfo: t
						}))
					} else Object(F.a)(n) !== k.g.Live ? e(Xe()) : e(Qe())
				}, Xe = () => async (e, t) => {
					const n = t(),
						a = P(n);
					a.channelId ? e(et({
						nextChannelInfo: a
					})) : e(Qe())
				}, Je = () => async (e, t) => {
					const n = t(),
						a = U(n);
					a.channelId ? e(et({
						nextChannelInfo: a
					})) : e(Qe())
				}, $e = () => async (e, t) => {
					const n = t();
					if (n.channels.firstLoaded) {
						const t = ((e, t) => {
							const n = [...t ? [B(e)] : [], ...R(e)];
							return H(n)
						})(n, !!n.platform.currentPage);
						e(et({
							nextChannelInfo: t
						}))
					}
				}, et = e => async t => {
					const {
						nextChannelInfo: n,
						nextLiveChatPostInfo: a
					} = e;
					if (null == a ? void 0 : a.postId) {
						const e = Object(w.getRedirectURL)(Object(w.liveChatUrl)(a.postId));
						return void t(Object(c.c)(e))
					}
					if (n && n.channelId) {
						if (n.channelAction) {
							const e = Object(w.getRedirectURL)(Object(w.channelAction)(n.channelId, n.channelAction));
							t(Object(c.c)(e))
						} else {
							const e = Object(w.getRedirectURL)(Object(w.channelUrl)(n.channelId));
							t(Object(c.c)(e))
						}
						return
					}
					const s = Object(w.getRedirectURL)(w.rootUrl);
					t(Object(c.c)(s))
				}, tt = e => async (t, n) => {
					const {
						platform: {
							currentPage: a
						}
					} = n();
					if (a && a.urlParams.userIds) {
						const e = a.urlParams.userIds.split(",");
						return t(Ke(e))
					}
					if (e) return t(Ze(e));
					const s = Object(_.b)(n());
					if (s) {
						if (Object(V.c)(n(), s)) {
							const e = Object(w.getRedirectURL)(Object(w.liveChatUrl)(s));
							return void t(Object(c.b)(e))
						}
						const e = Object(D.i)(n(), s);
						if (e) {
							const n = Object(w.getChannelUrl)(e),
								a = Object(w.getRedirectURL)(n);
							return void t(Object(c.b)(a))
						}
					}
					return t($e())
				}, nt = Object(o.a)(le), at = Object(o.a)(de), st = Object(o.a)(oe), ct = Object(o.a)(ie), rt = Object(o.a)(ue), ot = Object(o.a)(he), it = Object(o.a)(be), lt = () => async (e, t) => {
					await Promise.all([e(mt()), e(ut()), e(ht())]).catch(S.b);
					const n = t().channels.models;
					await e(dt(n)), e(it()), e(Ue())
				}, dt = e => async t => {
					const n = Object(T.c)(e, [k.b.Direct, k.b.Group]);
					if (!n) return;
					const a = {};
					for (const e in n) {
						const t = n[e];
						t.channelState !== v.b.PARTIAL && (a[t.channelId] = t)
					}
					if (a) {
						const e = [];
						for (const t in a) a[t].members.map(t => e.push(t.id));
						t(Object(f.t)(e))
					}
				}, ut = e => async (t, n) => {
					t(nt());
					const a = await q.a.getExistingChannels(v.b.INVITED).catch(() => null);
					if (a) {
						const {
							hasMoreChannels: s
						} = a, c = Object(k.i)(a.channels), r = Object(D.x)(n());
						return t(dt(c)), t(rt({
							channels: c,
							hasMoreChannels: s
						})), void(s && r < O.a.InitChannels && (null == e ? void 0 : e.recursively) && t(ut({
							recursively: null == e ? void 0 : e.recursively
						})))
					}
					t(at()), Object(S.b)("Error fetching invited channels")
				}, ht = () => async (e, t) => {
					var n;
					e(st());
					const a = await q.a.getExistingChannels(v.b.JOINED).catch(t => {
						Object(S.b)(t), e(ct())
					});
					if (a) {
						const {
							hasMoreChannels: s
						} = a, c = Object(k.i)(a.channels), r = Object(D.y)(t()) + (null === (n = a.channels) || void 0 === n ? void 0 : n.length);
						return e(ot({
							channels: c,
							hasMoreChannels: s
						})), void(s && r < O.a.InitChannels && e(ht()))
					}
					e(ct())
				}, mt = () => async (e, t) => {
					const n = t(),
						{
							INVITE_LINK_SETTINGS: a
						} = v.a,
						s = Object(K.e)(n),
						c = Object(K.d)(n);
					s && c !== a && await q.a.addChannelModelByChannelId(s).catch(() => e(tt()))
				}, bt = (Object(o.a)(te), Object(o.a)(ne), Object(o.a)(ge)), pt = e => async (t, n, a) => {
					let {
						gqlContext: s
					} = a;
					var c, r, o;
					const i = n(),
						l = Object(D.E)(i, "channelState");
					t(Object(g.J)());
					const d = {
							channelSendbirdId: e
						},
						u = await ((e, t) => Object(C.a)(e, {
							...y,
							variables: t
						}))(s(), {
							input: d
						});
					if ((null === (r = null === (c = u.error) || void 0 === c ? void 0 : c.fields) || void 0 === r ? void 0 : r.length) || (e => Boolean(e && e.data && e.data.leaveChatChannel))(u.body) && (null === (o = u.body.data.leaveChatChannel.errors) || void 0 === o ? void 0 : o.length)) return t(Object(p.e)()), Object(S.b)(`Error leaving channels: ${u.error}`);
					await t(Ee(e)), t(Ze(l, e))
				}, gt = e => async t => {
					t(Object(g.K)(e)), t(Object(d.removeLiveChatPost)({
						postId: e
					})), await t(Object(d.deleteLiveChatAssociation)(e)), t(Ye())
				}
		},
		"./src/chat/actions/channel/dropdown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return _
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "e", (function() {
				return M
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "i", (function() {
				return L
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/actions/channel.ts"),
				r = n("./src/chat/actions/surveyTrigger/index.ts"),
				o = n("./src/chat/actions/toast.ts"),
				i = n("./src/chat/actions/tooltip.ts"),
				l = n("./src/chat/actions/tracking.ts"),
				d = n("./src/chat/constants/channels.ts"),
				u = n("./src/chat/constants/toast.ts"),
				h = n("./src/chat/endpoints/sendbird/index.ts"),
				m = n("./src/chat/helpers/errors.ts"),
				b = n("./src/chat/helpers/urls/index.ts"),
				p = n("./src/chat/selectors/channels.ts"),
				g = n("./src/chat/selectors/experiments.ts"),
				f = n("./src/chat/singleton/SendbirdSDK.ts");
			const {
				INVITE_MEMBERS: O,
				LEAVE: v,
				VIEW_ABOUT: E,
				START_GROUP: j
			} = d.a, _ = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(p.A)(n),
					c = Object(b.getRedirectURL)(Object(b.channelAction)(s, O));
				e(Object(a.b)(c))
			}, C = (e, t) => async n => {
				const s = Object(b.getRedirectURL)(Object(b.inviteLinkSettingsUrl)(e, !!t));
				n(Object(a.b)(s))
			}, I = e => async t => {
				t(Object(r.b)()), t(Object(i.c)({
					tooltipId: e
				})), t(Object(l.jb)())
			}, y = e => async t => {
				e && (t(Object(l.u)()), window.open(Object(b.viewProfileUrl)(e)))
			}, x = () => async (e, t) => {
				const n = t(),
					s = Object(p.o)(n);
				if (!s) return;
				const c = Object(b.getRedirectURL)(Object(b.channelAction)(s, E));
				e(Object(l.pb)()), e(Object(a.b)(c))
			}, S = "CHANNEL__UPDATE_CHANNEL_NAME", N = Object(s.a)(S), w = e => async (t, n) => {
				const a = Object(p.A)(n());
				if (a) {
					const n = {
							...a,
							name: e
						},
						s = {
							...a
						};
					t(N(n)), await f.a.updateChannel(n).then(() => {
						t(Object(o.g)({
							toast: u.a.ChangesSaved
						})), t(Object(o.c)())
					}).catch(e => {
						Object(m.b)(e), t(N(s))
					})
				}
			}, k = () => async (e, t) => {
				const n = Object(p.o)(t());
				n && f.a.setMyCountPreference(n, d.c.Off).catch(m.b)
			}, T = () => async (e, t) => {
				const n = Object(p.o)(t());
				n && f.a.setMyCountPreference(n, d.c.All).catch(m.b)
			}, M = () => async (e, t, n) => {
				let {
					apiContext: a
				} = n;
				const s = t(),
					r = Object(p.o)(s),
					i = Object(g.w)(s);
				r && (e(Object(l.S)()), await Promise.all([Object(h.m)(a(), r, i), f.a.setPushPreference(r, !0)]).then(() => {
					e(Object(o.g)({
						toast: u.a.MuteNotifications
					})), e(Object(o.c)());
					const t = Object(p.i)(s, r);
					t && e(Object(c.V)({
						...t,
						isNotifsMuted: !0
					}))
				}).catch(m.b))
			}, A = () => async (e, t, n) => {
				let {
					apiContext: a
				} = n;
				const s = t(),
					r = Object(p.o)(s),
					i = Object(g.w)(s);
				r && (e(Object(l.eb)()), await Promise.all([Object(h.o)(a(), r, i), f.a.setPushPreference(r, !1)]).then(() => {
					e(Object(o.g)({
						toast: u.a.UnmuteNotifications
					})), e(Object(o.c)());
					const t = Object(p.i)(s, r);
					t && e(Object(c.V)({
						...t,
						isNotifsMuted: !1
					}))
				}).catch(m.b))
			}, L = () => async (e, t) => {
				const n = t(),
					s = Object(p.o)(n);
				if (!s) return;
				const c = Object(b.getRedirectURL)(Object(b.channelAction)(s, j));
				e(Object(a.b)(c))
			}
		},
		"./src/chat/actions/channel/hide.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var a = n("./src/chat/actions/channel.ts"),
				s = n("./src/chat/actions/message/unreadCount.ts"),
				c = n("./src/chat/helpers/errors.ts"),
				r = n("./src/chat/selectors/channels.ts"),
				o = n("./src/chat/singleton/SendbirdSDK.ts");
			const i = () => async (e, t) => {
				const n = t(),
					i = Object(r.n)(n);
				if (!i) throw new c.a("hideChannel", i);
				try {
					await o.a.hideChannel()
				} catch (l) {
					return Object(c.b)(`Error hiding channel: ${l.message}`)
				}
				await e(Object(a.K)(i.channelId)), e(Object(a.Q)(i.channelState, i.channelId)), e(Object(s.c)())
			}
		},
		"./src/chat/actions/channel/messageQuickReply.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "MESSAGE_QUICK_REPLY_ADD_USER_ID", (function() {
				return c
			})), n.d(t, "MESSAGE_QUICK_REPLY_REMOVE_USER_ID", (function() {
				return r
			})), n.d(t, "messageQuickReplyAddUserIdAction", (function() {
				return o
			})), n.d(t, "messageQuickReplyRemoveUserIdAction", (function() {
				return i
			})), n.d(t, "removeUserIdFormQuickReplyListByChannelId", (function() {
				return l
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/selectors/channels.ts");
			const c = "CHANNEL__MESSAGE_QUICK_REPLY_ADD_USER_ID",
				r = "CHANNEL__MESSAGE_QUICK_REPLY_REMOVE_USER_ID",
				o = Object(a.a)(c),
				i = Object(a.a)(r),
				l = () => async (e, t) => {
					const n = t(),
						a = Object(s.u)(n);
					a && e(i(a))
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
				return b
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "i", (function() {
				return N
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/actions/toast.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/GetTrendingChatGifs.json"),
				o = n("./src/redditGQL/operations/SearchChatGifs.json");
			var i = n("./src/chat/selectors/gifs.ts");
			const l = "GIF__SET_SEARCH_QUERY",
				d = "GIF__FETCH_TRENDING_START",
				u = "GIF__FETCH_TRENDING_SUCCESS",
				h = "GIF__FETCH_TRENDING_ERROR",
				m = "GIF__SEARCH_START",
				b = "GIF__SEARCH_SUCCESS",
				p = "GIF__SEARCH_ERROR",
				g = "GIF__CLEAR_ERROR",
				f = Object(a.a)(d),
				O = Object(a.a)(u),
				v = Object(a.a)(h),
				E = Object(a.a)(l),
				j = Object(a.a)(m),
				_ = Object(a.a)(b),
				C = Object(a.a)(p),
				I = Object(a.a)(g),
				y = e => async (t, n, a) => {
					let {
						gqlContext: o
					} = a;
					const l = n(),
						d = Object(i.g)(l),
						u = Object(i.c)(l);
					if (!d || u) {
						t(f()), t(E(""));
						const n = await ((e, t) => Object(c.a)(e, {
							...r,
							variables: t
						}))(o(), {
							first: e
						});
						if ((null == n ? void 0 : n.ok) && !(null == n ? void 0 : n.error)) {
							const e = n.body,
								a = S(e);
							t(O(a))
						} else t(Object(s.e)()), t(v())
					}
				}, x = (e, t) => async (n, a, r) => {
					let {
						gqlContext: l
					} = r;
					var d, u;
					if (!t) return;
					const h = a(),
						m = Object(i.c)(h),
						b = Object(i.b)(h),
						p = t === b,
						g = p ? null === (d = h.gifs.search.models[t]) || void 0 === d ? void 0 : d.pageInfo.endCursor : "";
					if ((null === (u = h.gifs.search.models[t]) || void 0 === u ? void 0 : u.ids.length) && !m && !p) n(E(t));
					else if (Object(i.e)(h) || !g) {
						m && n(I(t)), n(j({
							query: t,
							cursor: g
						}));
						const a = await ((e, t) => Object(c.a)(e, {
							...o,
							variables: t
						}))(l(), {
							first: e,
							query: t,
							after: g
						});
						if ((null == a ? void 0 : a.ok) && !(null == a ? void 0 : a.error)) {
							const e = a.body,
								s = S(e, t);
							n(_({
								cursor: g,
								gifsData: s
							}))
						} else n(Object(s.e)()), n(C({
							cursor: g,
							query: t
						}))
					}
				}, S = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
					const n = e && e.data,
						a = n && n.gifs,
						s = a && a.pageInfo,
						c = a && a.edges,
						r = null == a ? void 0 : a.version,
						o = null == a ? void 0 : a.provider,
						i = c.map(e => e.node);
					return {
						version: r,
						provider: o,
						pageInfo: s,
						models: i,
						query: t
					}
				}, N = () => async (e, t) => {
					Object(i.b)(t()) && e(E(""))
				}
		},
		"./src/chat/actions/invitePolicy/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return v
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/actions/toast.ts"),
				c = n("./src/chat/actions/tracking.ts"),
				r = n("./src/chat/constants/toast.ts"),
				o = n("./src/chat/endpoints/sendbird/index.ts"),
				i = n("./src/chat/models/InvitePolicy/index.ts"),
				l = n("./src/chat/selectors/user.ts");
			const d = "INVITE_POLICY__FETCH_INVITE_POLICY_SUCCESS",
				u = Object(a.a)(d),
				h = Object(a.a)("INVITE_POLICY__FETCH_INVITE_POLICY_PENDING"),
				m = Object(a.a)("INVITE_POLICY__FETCH_INVITE_POLICY_FAILURE"),
				b = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					e(h());
					const s = await Object(o.d)(a());
					if (s.ok) {
						const t = {
							...s.body
						};
						console.log(t), e(u({
							invitePolicy: i.a[t.invite_policy]
						}))
					} else e(m(s.error))
				}, p = "INVITE_POLICY__SAVE_INVITE_POLICY_SUCCESS", g = Object(a.a)("INVITE_POLICY__SAVE_INVITE_POLICY_PENDING"), f = Object(a.a)("INVITE_POLICY__SAVE_INVITE_POLICY_FAILURE"), O = Object(a.a)(p), v = e => async (t, n, a) => {
					let {
						apiContext: d
					} = a;
					const u = n(),
						h = Object(l.d)(u),
						m = Object(i.b)(e),
						b = Object(i.b)(h);
					if (m) {
						t(g());
						const e = await Object(o.n)(m, d());
						if (e.ok) {
							const e = i.a[m];
							t(O({
								invitePolicy: e
							})), t(Object(c.V)(m, b)), t(Object(s.g)({
								toast: r.a.ChangesSaved
							})), t(Object(s.c)())
						} else t(f(e.error)), t(Object(s.g)({
							toast: r.a.SomethingWentWrong
						})), t(Object(s.c)())
					}
				}
		},
		"./src/chat/actions/liveChat/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "UPDATE_LAST_READ_AT_TIMESTAMP", (function() {
				return l
			})), n.d(t, "UPDATE_LAST_COMMENT_CREATED_AT_TIMESTAMP", (function() {
				return d
			})), n.d(t, "REMOVE_LIVE_CHAT_POST", (function() {
				return u
			})), n.d(t, "FETCH_LIVE_CHATS_PENDING", (function() {
				return h
			})), n.d(t, "FETCH_LIVE_CHATS_SUCCESS", (function() {
				return m
			})), n.d(t, "DELETE_LIVE_CHAT_ASSOCIATION_PENDING", (function() {
				return b
			})), n.d(t, "DELETE_LIVE_CHAT_ASSOCIATION_SUCCESS", (function() {
				return p
			})), n.d(t, "updateLastReadAtTimestamp", (function() {
				return g
			})), n.d(t, "updateLastCommentCreatedAtTimestamp", (function() {
				return f
			})), n.d(t, "removeLiveChatPost", (function() {
				return O
			})), n.d(t, "fetchLiveChats", (function() {
				return C
			})), n.d(t, "createLiveChatAssociation", (function() {
				return I
			})), n.d(t, "deleteLiveChatAssociation", (function() {
				return y
			})), n.d(t, "fetchActiveUsersInLiveChats", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/actions/toast.ts"),
				c = n("./src/chat/endpoints/livechats/index.ts"),
				r = n("./src/chat/selectors/experiments.ts"),
				o = n("./src/chat/selectors/liveChat/index.ts"),
				i = n("./src/lib/activeUserCountByLiveChatId/actions.ts");
			const l = "LIVECHAT__UPDATE_LAST_READ_AT_TIMESTAMP",
				d = "LIVECHAT__UPDATE_LAST_COMMENT_CREATED_AT_TIMESTAMP",
				u = "LIVECHAT__REMOVE_LIVE_CHAT_POST",
				h = "LIVECHAT__FETCH_LIVE_CHATS_PENDING",
				m = "LIVECHAT__FETCH_LIVE_CHATS_SUCCESS",
				b = "LIVECHAT__DELETE_LIVE_CHAT_ASSOCIATION",
				p = "LIVECHAT__DELETE_LIVE_CHAT_SUCCESS",
				g = Object(a.a)(l),
				f = Object(a.a)(d),
				O = Object(a.a)(u),
				v = Object(a.a)(h),
				E = Object(a.a)(m),
				j = Object(a.a)(b),
				_ = Object(a.a)(p),
				C = () => async (e, t, n) => {
					var a, s, r, o, i;
					e(v());
					const l = await Object(c.c)(n.gqlContext()),
						d = (null === (i = null === (o = null === (r = null === (s = null === (a = null == l ? void 0 : l.body) || void 0 === a ? void 0 : a.data) || void 0 === s ? void 0 : s.identity) || void 0 === r ? void 0 : r.chatTabLiveChats) || void 0 === o ? void 0 : o.edges) || void 0 === i ? void 0 : i.map(e => e.node)) || [];
					e(E({
						liveChats: d
					}))
				}, I = e => async (t, n, a) => {
					let {
						gqlContext: s
					} = a;
					const r = n(),
						i = Object(o.c)(r, e);
					i && i.engagementType && await Object(c.a)(s(), {
						postId: e,
						engagementType: i.engagementType
					})
				}, y = e => async (t, n, a) => {
					t(j({
						postId: e
					})), (await Object(c.b)(a.gqlContext(), e)).ok ? t(_({
						postId: e
					})) : t(Object(s.e)())
				};
			const x = async (e, t, n) => {
				const a = function(e) {
					return Object.values(e.channels.liveChat.models).map(e => e.post.id)
				}(t());
				Object(i.b)(a, Object(r.t)(t()), Boolean(t().user.account), e, n)
			}
		},
		"./src/chat/actions/members.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "f", (function() {
				return y
			}));
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				c = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/chat/endpoints/users/index.ts"),
				i = n("./src/chat/helpers/errors.ts"),
				l = n("./src/chat/helpers/urls/index.ts"),
				d = n("./src/chat/models/User/index.ts"),
				u = n("./src/chat/selectors/channels.ts"),
				h = n("./src/chat/selectors/members.ts"),
				m = n("./src/chat/singleton/SendbirdSDK.ts");
			const b = "MEMBERS__FETCHING_MEMBERS",
				p = Object(r.a)(b),
				g = Object(r.a)("MEMBERS__FETCHING_MEMBERS_FAILED"),
				f = e => {
					let {
						filter: t,
						loadMore: n
					} = e;
					return async (e, a) => {
						const s = a(),
							r = Object(u.o)(s);
						if (r) {
							e(p({
								channelId: r
							}));
							const a = t ? await m.a.getChannelMembersStartsWith(r, t).catch(e => Object(i.b)(`Error getting channel members: ${e.message}`)) : await m.a.getChannelMembers(r, n).catch(t => {
								const n = Object(l.getRedirectURL)(Object(l.channelUrl)(r));
								e(Object(c.b)(n)), Object(i.b)(`Error getting subreddit channel members: ${t.message}`)
							});
							if (a) {
								const {
									hasMoreMembers: t,
									members: n
								} = a;
								e(_(r, n, t))
							} else e(g())
						}
					}
				},
				O = "MEMBERS__FETCHING_MEMBERS_COMPLETED",
				v = Object(r.a)(O),
				E = "MEMBERS__ADD_CHANNEL_MEMBERS",
				j = Object(r.a)(E),
				_ = (e, t, n) => async (a, c, r) => {
					let {
						gqlContext: i
					} = r;
					const l = t.map(e => e.userId),
						u = await Object(o.b)(i(), {
							ids: l
						});
					if (u.ok && Object(o.c)(u.body)) {
						const n = c(),
							r = Object(d.b)(u.body.data.redditorsInfoByIds);
						if (!r) return;
						const o = t.reduce((e, t) => {
							const {
								userId: a
							} = t, c = r[a];
							if (c) {
								const r = n.contacts.models[a],
									o = Object(h.f)(c, t, r),
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
					a(v({
						channelId: e,
						hasMoreMembers: n
					}))
				}, C = "MEMBERS__REMOVE_CHANNEL_MEMBERS", I = Object(r.a)(C), y = () => async e => {
					e(I())
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
				const a = Object(o.B)(n()),
					c = (e => {
						return s()(e, "createAt").splice(0, e.length - r.a.Messages).map(e => e.messageId)
					})(e);
				a && (t(u({
					messageIdList: c
				})), t(m({
					channelId: a
				})), i.b.resetPreviousMessageListQuery())
			}, d = "MESSAGE__REMOVE_MESSAGES_FROM_CURRENT_CHANNEL", u = Object(c.a)(d), h = "CHANNEL__RESET_HAS_MORE_MESSAGES", m = Object(c.a)(h)
		},
		"./src/chat/actions/message/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return M
			})), n.d(t, "c", (function() {
				return U
			})), n.d(t, "o", (function() {
				return R
			})), n.d(t, "q", (function() {
				return B
			})), n.d(t, "s", (function() {
				return H
			})), n.d(t, "r", (function() {
				return F
			})), n.d(t, "A", (function() {
				return G
			})), n.d(t, "m", (function() {
				return V
			})), n.d(t, "k", (function() {
				return z
			})), n.d(t, "z", (function() {
				return K
			})), n.d(t, "i", (function() {
				return Q
			})), n.d(t, "x", (function() {
				return X
			})), n.d(t, "b", (function() {
				return J
			})), n.d(t, "p", (function() {
				return ee
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "B", (function() {
				return ne
			})), n.d(t, "d", (function() {
				return ae
			})), n.d(t, "u", (function() {
				return se
			})), n.d(t, "t", (function() {
				return ce
			})), n.d(t, "j", (function() {
				return re
			})), n.d(t, "y", (function() {
				return ie
			})), n.d(t, "g", (function() {
				return le
			})), n.d(t, "e", (function() {
				return de
			})), n.d(t, "f", (function() {
				return ue
			})), n.d(t, "v", (function() {
				return pe
			})), n.d(t, "n", (function() {
				return ge
			})), n.d(t, "C", (function() {
				return Oe
			})), n.d(t, "h", (function() {
				return ve
			})), n.d(t, "w", (function() {
				return Ee
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/flatten.js"),
				s = n.n(a),
				c = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/linkMatchers/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/chat/actions/channel.ts"),
				l = n("./src/chat/actions/channel/messageQuickReply.ts"),
				d = n("./src/chat/actions/tracking.ts"),
				u = n("./src/chat/constants/messages.ts"),
				h = n("./node_modules/lodash/isEmpty.js"),
				m = n.n(h),
				b = n("./src/config.ts"),
				p = n("./src/lib/constants/index.ts"),
				g = n("./src/lib/makeRequest/index.ts");
			const f = b.a.embedlyApiKey,
				O = e => e && e.length > 0 && e[0] ? e[0].url : void 0,
				v = e => e.filter(e => !m()(e)).map(e => ({
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
				_ = n("./src/chat/endpoints/messages/index.tsx"),
				C = (n("./src/chat/endpoints/sendbird/index.ts"), n("./src/chat/helpers/errors.ts")),
				I = n("./src/chat/helpers/urls/index.ts"),
				y = n("./src/chat/models/Message/index.ts"),
				x = n("./src/chat/models/Message/adapter.ts"),
				S = n("./src/chat/selectors/app.ts"),
				N = n("./src/chat/selectors/channels.ts"),
				w = n("./src/chat/selectors/contacts.ts"),
				k = n("./src/chat/selectors/messages.ts"),
				T = n("./src/chat/singleton/SendbirdSDK.ts");
			const M = "MESSAGE__ADD_ONE",
				A = Object(o.a)(M),
				L = (e, t, n) => async (a, s) => {
					const c = s(),
						r = Object(x.c)(n),
						o = await D(t, c);
					return T.a.addMessage(t, n, o).then(t => {
						const n = {
							[t.messageId]: t
						};
						return a(A({
							message: n,
							channelId: e,
							clientMessageId: r
						})), a(Object(d.bb)(t)), a(Object(E.c)(t)), t.messageId
					}).catch(e => {
						if (r) {
							const t = `${e.code}: ${e.message}`;
							a(Object(d.ib)(r, t)), a(W({
								clientMessageId: r,
								toggle: !0
							}))
						}
						return null
					})
				}, D = async (e, t) => {
					const n = Object(r.d)(e);
					if (!n.length) return [];
					const a = [];
					return [...n.map(e => {
						const n = Object(w.f)(t, e);
						return n || a.push(e), n && n.id
					}).filter(e => e), ...(a.length && s()(await Promise.all(a.slice(0, 3).map(e => T.a.searchMemberByName(e, !0)))) || []).map(e => e && e.id).filter(e => e)]
				}, U = "MESSAGE__ADD_PENDING_ONE", P = Object(o.a)(U), R = (e, t) => async (n, a, s) => {
					let {
						gqlContext: c
					} = s;
					const r = a(),
						o = {
							height: t.downsized.dimensions.height,
							width: t.downsized.dimensions.width,
							id: t.id,
							title: t.title,
							url: t.downsized.url
						},
						i = Object(y.b)(r, e, JSON.stringify(o), u.c.GIF);
					await n(P(i));
					const l = {
						channelId: e,
						messageData: i.data,
						message: t.downsized.url
					};
					if (!(await Object(_.a)(c(), {
							input: l
						})).ok) {
						const {
							clientMessageId: e
						} = i;
						n(Object(d.ib)(e)), n(W({
							clientMessageId: e,
							toggle: !0
						}))
					}
				}, B = (e, t) => async (n, a, s) => {
					let {
						gqlContext: c
					} = s;
					const r = a(),
						o = Object(y.b)(r, e, JSON.stringify({
							is_hidden: !0,
							image: {}
						}), u.c.IMAGE, t.id);
					n(P(o));
					const i = {
							channelId: e,
							messageData: o.data,
							message: t.metadata.localUrl,
							messageType: u.c.IMAGE.toUpperCase()
						},
						l = await Object(_.a)(c(), {
							input: i
						});
					if (l.ok && Object(_.b)(l.body)) {
						const {
							message: e
						} = l.body.data.createChatMessage;
						return {
							messageId: Number(e.messageId),
							redditId: e.messageRedditId
						}
					}
				}, H = (e, t, n) => async (a, s) => {
					if (!e.length) return;
					for await (const c of e) {
						const e = Object(N.i)(s(), c);
						(null == e ? void 0 : e.channelId) && (await T.a.enterChannel(e), await a(F(c, t, n)))
					}
					const r = Object(I.getRedirectURL)(Object(I.channelUrl)(e[e.length - 1]));
					a(Object(c.b)(r))
				}, F = (e, t, n) => async (a, s) => {
					var c;
					const o = s(),
						i = r.b.match(t),
						d = 1 === (null == i ? void 0 : i.length) && 1 === t.trim().split(" ").length;
					if (Object(I.isRedditLink)(null === (c = null == i ? void 0 : i[0]) || void 0 === c ? void 0 : c.url) && d) await a(q(e, t));
					else if (d) await a(Z(e, t));
					else {
						const s = Object(y.b)(o, e, t, n);
						a(P(s)), await a(L(e, t, s.data))
					}
					a(Object(l.removeUserIdFormQuickReplyListByChannelId)())
				}, G = (e, t) => async (n, a) => {
					const s = a(),
						c = Object(k.f)(s, t);
					c && (n(W({
						clientMessageId: t,
						toggle: !1
					})), await n(L(e, c.messageData.value, c.data)))
				}, V = "MESSAGE__TOGGLE_PENDING_MESSAGE_ERROR", W = Object(o.a)(V), z = "MESSAGE__REMOVE_PENDING_ONE", K = Object(o.a)(z), q = (e, t) => async (n, a) => {
					const s = a(),
						c = Object(I.getChatUnitType)(t),
						r = Object(y.b)(s, e, t, c.type);
					r && (n(P(r)), await n(L(e, r.messageData.value, r.data)))
				}, Z = (e, t) => async (n, a) => {
					const s = a(),
						c = r.f.match(t);
					if (!c.length || c.length > 1) return Object(C.b)(`We only support 1 link per text but ${c.length} given`);
					const o = c[0].url,
						i = u.c.EMBED;
					let l = {
						url: t
					};
					const d = Object(y.b)(s, e, JSON.stringify(l), i);
					if (d) {
						n(P(d));
						const t = await (async e => {
							let {
								chars: t,
								scheme: n,
								url: a
							} = e;
							return Object(g.b)({
								endpoint: "https://api.embed.ly/1/extract",
								method: p.ob.GET,
								data: {
									key: f,
									url: a,
									scheme: n,
									chars: t
								}
							}).then(e => e.ok && Array.isArray(e.body) ? e.body : [e.body]).then(v)
						})({
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
								s = JSON.stringify(Object(x.b)(a, i, d.clientMessageId));
							await n(L(e, l.url, s))
						}
					}
				}, Q = "MESSAGE__RECEIVE_ADD_ONE", Y = Object(o.a)(Q), X = e => async (t, n) => {
					const {
						messageId: a,
						messageData: {
							clientMessageId: s
						}
					} = e, c = n(), r = Object(N.B)(c) === e.channelId, o = Object(S.e)(c), l = Object(k.f)(c, s), u = Object(k.b)(c, a);
					o && r && t(Object(i.J)(e.channelId)), l ? (e.createdAt = l.createdAt, t(Object(d.db)(e))) : u && (e.createdAt = u.createdAt), await t(Y({
						[a]: e
					})), t(Object(E.c)(e))
				}, J = "MESSAGE__ADD_LIST", $ = Object(o.a)(J), ee = (e, t) => async n => {
					e && n($({
						channelId: t,
						...e
					})), n(Object(E.d)(e)), n(Object(j.b)())
				}, te = "MESSAGE__SET_MESSAGE_LIST_IS_LOADED", ne = Object(o.a)(te), ae = "MESSAGE__DELETE_ONE", se = Object(o.a)(ae), ce = e => async (t, n) => {
					const a = n(),
						s = Object(k.b)(a, e);
					s && s.messageType === u.d.USER && T.a.deleteMessage(s).then(() => t(se(s.messageId))).then(() => t(Object(c.a)()))
				}, re = "MESSAGE__RECEIVE_DELETE_ONE", oe = Object(o.a)(re), ie = e => async (t, n) => {
					t(oe(e))
				}, le = "MESSAGE__GET_PREVIOUS_MESSAGES_START", de = "MESSAGE__GET_PREVIOUS_MESSAGES_END", ue = "MESSAGE__GET_PREVIOUS_MESSAGES_ERROR", he = Object(o.a)(le), me = Object(o.a)(de), be = Object(o.a)(ue), pe = e => async (t, n) => {
					const a = Object(N.E)(n(), "channelId");
					t(he(a)), t(Object(d.mb)()), a && await T.a.getPreviousMessages(e).then(e => {
						t(me({
							channelId: a,
							...e
						})), t(Object(E.d)(e))
					}).catch(() => t(be(a)))
				}, ge = "MESSAGE__UNCOLLAPSE", fe = Object(o.a)(ge), Oe = e => async t => {
					t(fe(e))
				}, ve = "MESSAGE__HIDE_REPORT_PROMPT_FOR_COLLAPSE_MESSAGE", Ee = Object(o.a)(ve)
		},
		"./src/chat/actions/message/reactions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/actions/toast.ts"),
				c = n("./src/chat/endpoints/reactions/index.ts"),
				r = n("./src/chat/models/MessageReaction/index.ts"),
				o = n("./src/chat/selectors/reactions.ts");
			const i = "MESSAGE__REACTION_UPDATE",
				l = Object(a.a)(i),
				d = (e, t) => async (n, a, i) => {
					let {
						gqlContext: u
					} = i;
					const h = a(),
						m = Object(o.c)(h, e.messageSendbirdId),
						b = m.find(t => t.key === e.reactionIconKey) || e.type !== r.a.ADD ? m.reduce((t, n) => {
							if (n.key === e.reactionIconKey) {
								const a = {
									...n,
									userIds: e.type === r.a.ADD ? [...new Set([...n.userIds, e.userId])] : n.userIds.filter(t => t !== e.userId)
								};
								return a.userIds.length > 0 ? [...t, a] : t
							}
							return [...t, n]
						}, []) : [...m, {
							key: e.reactionIconKey,
							userIds: [e.userId]
						}];
					if (n(l({
							reactions: b,
							messageId: e.messageSendbirdId
						})), !t) {
						const {
							userId: t,
							messageSendbirdId: a,
							...o
						} = e, i = {
							...o,
							messageSendbirdId: a.toString()
						}, l = await Object(c.e)(u(), i);
						Object(c.c)(l) && (n(d({
							...e,
							type: i.type === r.a.ADD ? r.a.DELETE : r.a.ADD
						}, !0)), n(Object(s.g)({
							customErrorMessage: l.data.updateChatMessageReaction.errors[0].message
						})))
					}
				}
		},
		"./src/chat/actions/message/richUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "f", (function() {
				return C
			}));
			var a = n("./node_modules/lodash/uniq.js"),
				s = n.n(a),
				c = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/chat/constants/messages.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/ChatUnitDetails.json");
			var l = n("./src/chat/selectors/richUnits.ts"),
				d = n("./src/lib/constants/index.ts");
			const u = "MESSAGE__UNITS_DATA_RECEIVED",
				h = "MESSAGE__RESET_RICH_UNITS_DATA_RECEIVED",
				m = e => Boolean(e && e.id && e.postInfo && e.postInfo.subreddit && e.authorInfo && e.authorInfo.displayName),
				b = e => Boolean(e && e.id && e.title && e.url && e.authorInfo && e.authorInfo.displayName),
				p = e => Boolean(e && e.id && e.title && e.url && e.redditor && e.redditor.displayName),
				g = e => Boolean(e && e.id && e.title && e.subredditType),
				f = Object(c.a)(u),
				O = (e, t) => {
					var n, a, s, c;
					const o = {
						post: [],
						userPost: [],
						comment: [],
						subreddit: []
					};
					if ((null === (n = null == e ? void 0 : e.messageData) || void 0 === n ? void 0 : n.type) === r.c.POST || (null === (a = null == e ? void 0 : e.messageData) || void 0 === a ? void 0 : a.type) === r.c.COMMENT || (null === (s = null == e ? void 0 : e.messageData) || void 0 === s ? void 0 : s.type) === r.c.SUBREDDIT || (null === (c = null == e ? void 0 : e.messageData) || void 0 === c ? void 0 : c.type) === r.c.USER_POST) {
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
				v = e => async (t, n) => {
					const a = O(e, n());
					t(_(a))
				}, E = e => async (t, n) => {
					const a = {
						post: [],
						userPost: [],
						comment: []
					};
					if (!Boolean(Object(l.a)(n(), e))) {
						switch (e.type) {
							case r.c.POST:
								a.post.push(e.value);
								break;
							case r.c.USER_POST:
								a.userPost.push(e.value);
								break;
							case r.c.COMMENT:
								a.comment.push(e.value)
						}
						t(_(a))
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
						t(_(a))
					}
				}, _ = e => async (t, n, a) => {
					let {
						gqlContext: c
					} = a;
					const l = {
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
						u = e => e.startsWith(d.Nb.Comment) || e.startsWith(d.Nb.Post);
					for (const o in e) {
						const t = s()(e[o].reduce((e, t) => t && (u(t) || "subreddit" === o) && e.push(t) && e || e, []));
						switch (o) {
							case r.c.POST:
								t.length && (l.postsIds = t, l.includePosts = !0);
								break;
							case r.c.USER_POST:
								t.length && (l.userPostsIds = t, l.includeUserPosts = !0);
								break;
							case r.c.COMMENT:
								t.length && (l.commentsIds = t, l.includeComments = !0);
								break;
							case r.c.SUBREDDIT:
								t.length && (l.subredditsNames = t, l.includeSubreddits = !0)
						}
					}
					if (l.includePosts || l.includeComments || l.includeUserPosts || l.includeSubreddits) {
						const e = await ((e, t) => Object(o.a)(e, {
							...i,
							variables: t
						}))(c(), l);
						if (null == e ? void 0 : e.ok) {
							const n = e.body;
							if ((e => Boolean(e && e.data && (e.data.comments || e.data.posts || e.data.userPosts || e.data.subreddits)))(n)) {
								const e = n.data;
								e.comments && (e.comments = e.comments.filter(m).map(e => {
									var t;
									return (null === (t = null == e ? void 0 : e.postInfo) || void 0 === t ? void 0 : t.subreddit) && {
										...e,
										type: r.c.COMMENT
									}
								})), e.posts && (e.posts = e.posts.filter(b).map(e => ({
									...e,
									type: r.c.POST
								}))), e.userPosts && (e.userPosts = e.userPosts.filter(p).map(e => ({
									...e,
									type: r.c.USER_POST
								}))), e.subreddits && (e.subreddits = e.subreddits.filter(g).map(e => ({
									...e,
									type: r.c.SUBREDDIT
								}))), t(f(e))
							}
						}
					}
				}, C = Object(c.a)(h)
		},
		"./src/chat/actions/messageReactions/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			}));
			const a = "REACTION__FETCH_REACTION_LIST_FINISH",
				s = "REACTION__SET_SELECTED_MESSAGE_ID",
				c = "REACTION__RESET_SELECTED_MESSAGE_ID"
		},
		"./src/chat/actions/messageReactions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/throwDevError.ts"),
				c = n("./src/chat/actions/messageReactions/constants.ts"),
				r = n("./src/chat/endpoints/reactions/index.ts");
			const o = Object(a.a)(c.a),
				i = Object(a.a)(c.c),
				l = (Object(a.a)(c.b), () => async (e, t, n) => {
					let {
						gqlContext: a
					} = n;
					try {
						const t = await Object(r.d)(a(), {
							query: "",
							first: r.a
						});
						t.ok && Object(r.b)(t.body) && e(o(d(t.body.data.searchChatMessageReactionIcons.edges)))
					} catch (c) {
						Object(s.a)(c)
					}
				}),
				d = e => e.reduce((e, t) => t.node.altText && t.node.key && t.node.url ? [...e, t.node] : e, [])
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
				return b
			}));
			var a = n("./node_modules/lodash/noop.js"),
				s = n.n(a),
				c = n("./src/lib/notifications/token.ts"),
				r = n("./src/lib/notifications/index.ts"),
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
				b = (e, t) => async (n, a, l) => {
					if (Object(i.g)(a())) return;
					(e => {
						Object(d.a)({
							...m(e, !0),
							action: u.c.Request,
							source: u.b.Notification
						})
					})(a()), Object(r.b)(e, t, () => {
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
						n(Object(o.m)()), Object(c.b)(l.gqlContext), (e => {
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
				c = n("./src/chat/helpers/urls/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js");

			function o(e) {
				return t => async (n, a, c) => {
					await Object(s.k)()(n, a, c), await Object(s.n)()(n, a, c), await e(t)(n, a, c)
				}
			}
			const i = o(e => async (e, t, n) => {}),
				l = o(e => async (e, t, n) => {}),
				d = o(e => async (e, t, n) => {}),
				u = o(e => async (e, t) => {
					console.log("userPageRequeste");
					const {
						platform: {
							currentPage: n
						}
					} = t();
					if (n && n.urlParams.userIds) {
						const t = n.urlParams.userIds.split(",");
						e(Object(a.A)(t))
					}
				}),
				h = o(e => async (e, t) => {
					const {
						platform: {
							currentPage: n
						}
					} = t(), a = Object(c.getRedirectURL)(Object(c.channelUrl)("share"));
					a.search = null == n ? void 0 : n.queryParams.url, e(Object(r.b)(a))
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
				c = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/chat/actions/channel.ts");
			const o = "PLATFORM__HISTORY_LOCATION_SET",
				i = "PLATFORM__INITIAL_REFERRER_SET",
				l = "PLATFORM__PAGE_META_SET",
				d = (e, t, n) => async (c, o, i) => {
					const l = Date.now(),
						d = o().platform.currentPage;
					if (!n) return;
					if (c(u({
							action: t,
							location: e,
							routeMatch: n
						})), d && Object(a.a)(d.url, e)) return;
					if (n) {
						const {
							match: e
						} = n;
						await n.route.action(e)(c, o, i);
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
					const h = n.match.params.postId,
						m = n.match.params.channelId;
					h ? c(Object(r.O)()) : m && c(Object(r.N)())
				}, u = Object(c.a)(o)
		},
		"./src/chat/actions/renameGroupChat/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			const s = "CHANNEL__SET_VISIBILITY_RENAME_GROUP_CHAT",
				c = Object(a.a)(s)
		},
		"./src/chat/actions/sendbird/config.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "f", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/endpoints/sendbird/index.ts"),
				c = n("./src/chat/helpers/json.ts");
			const r = "SENDBIRD_CONFIG__PROXY",
				o = Object(a.a)(r),
				i = "SENDBIRD_CONFIG__GLOBAL_SETTINGS",
				l = Object(a.a)(i),
				d = "SENDBIRD_CONFIG__USER_EXPERIMENTS",
				u = Object(a.a)(d),
				h = "SENDBIRD_CONFIG__SET_SENDBIRD_REACTIONS ",
				m = Object(a.a)(h),
				b = "SENDBIRD_CONFIG__SET_MEDIA_HOST ",
				p = Object(a.a)(b),
				g = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					const c = await Object(s.e)(a());
					if (c.ok) {
						const t = f(c.body.reactions.short_list);
						await Promise.all([e(o({
							host: c.body.proxy_host
						})), e(l({
							maxMessageLength: parseInt(c.body.max_message_length, 10)
						})), e(u({
							userSubredditChatEnabled: c.body.user_subreddit_chat_enabled
						})), t.map(e => new Promise(t => {
							const n = new Image;
							n.onload = () => t(), n.src = e.url
						})), e(m({
							reactions: f(c.body.reactions.short_list)
						})), e(p(c.body.media_host))])
					}
				}, f = e => {
					const t = Object(c.a)(JSON.stringify(e), []);
					return t.length ? t.map(e => ({
						key: e.key,
						url: e.url,
						altText: e.alt_text
					})) : []
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
				return b
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "j", (function() {
				return N
			}));
			var a = n("./src/lib/cache/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/chat/actions/tracking.ts"),
				o = n("./src/chat/endpoints/accounts/index.ts"),
				i = n("./src/chat/endpoints/sendbird/index.ts"),
				l = n("./src/chat/models/Contact/index.ts"),
				d = n("./src/chat/selectors/contacts.ts");
			const u = "SENDBIRD__DEACTIVATE_SENDBIRD_SESSION",
				h = "SENDBIRD__ACTIVATE_SENDBIRD_SESSION",
				m = Object(c.a)(u),
				b = "SENDBIRD__SET_SENDBIRD_SESSION",
				p = Object(c.a)(b),
				g = function() {
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
							const c = Object(a.c)(s.r.CHAT, s.A.CHAT_SENDBIRD_SESSION_KEY, l.id),
								o = Object(a.b)(c);
							if (o && o.token) n = o;
							else {
								const e = await Object(i.g)(r(), d);
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
							if (n) return void t(p({
								...n,
								active: e
							}))
						}
						t(m())
					}
				},
				f = () => async (e, t) => {
					const n = t(),
						{
							account: c,
							session: r
						} = n.user;
					if (r && c) {
						const e = Object(a.c)(s.r.CHAT, s.A.CHAT_SENDBIRD_SESSION_KEY, c.id);
						if (Object(a.b)(e)) {
							const t = {};
							Object(a.d)(e, t, new Date)
						}
					}
				}, O = "SENDBIRD__ADD_MEMBERS_TO_KNOWN_CONTACTS", v = Object(c.a)(O), E = "SENDBIRD__SET_REDDIT_CONTACT_LIST", j = 6 * s.U, _ = Object(c.a)(E), C = () => async (e, t, n) => {
					let {
						apiContext: c
					} = n;
					const r = t(),
						o = r.contacts.models,
						d = Object(a.c)(s.r.CHAT, s.A.CHAT_SENDBIRD_CONTACTS_KEY, r.user.account.id),
						u = Object(a.b)(d);
					if (u && u.version === l.a) return void e(_(u.data));
					const h = t().user.session;
					if (!h) return;
					const m = await Object(i.f)(c(), h, 25),
						b = Object(l.c)(m.body).map(e => o[e.id] ? o[e.id] : e),
						p = {
							version: l.a,
							data: b
						};
					Object(a.d)(d, p, j), e(_(b))
				}, I = "SENDBIRD__IDENTIFY_CONTACT_BEGIN", y = "SENDBIRD__IDENTIFY_CONTACT_END", x = Object(c.a)(I), S = Object(c.a)(y), N = e => async (t, n, a) => {
					let {
						apiContext: c
					} = a;
					if (e.username === s.H) return;
					Object(d.c)(n(), e.username) || (t(x({
						username: e.username
					})), Object(o.b)(c(), e.username).then(n => {
						if (n.ok) {
							const a = Object(l.e)(n.body.data);
							if (a) return t(S({
								username: e.username,
								contact: a,
								valid: !0
							}))
						} else t(Object(r.gb)(e.username));
						t(S({
							username: e.username,
							valid: !1
						}))
					}))
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
				return E
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "h", (function() {
				return C
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
				v = Object(a.a)(p),
				E = e => async (t, n) => {
					const a = n(),
						o = Object(u.f)(a),
						b = Object(u.e)(a),
						p = Object(u.c)(a),
						g = Object(h.e)(a),
						f = {
							connectionStatus: l.b.Closed
						};
					if (g && p && b) {
						const {
							id: n
						} = g;
						o && t(Object(i.g)({
							toast: d.a.ConnectionPending
						})), e = e || b.token;
						try {
							if (await m.a.connect(p, e, n, t), t(v()), o) {
								const e = !0;
								t(Object(c.v)(e)), t(Object(i.g)({
									toast: d.a.ConnectionOpen
								})), t(Object(i.c)(3))
							}
							t(Object(r.c)()), t(Object(s.D)())
						} catch (E) {
							const {
								code: e,
								message: n
							} = E;
							t(O({
								active: !1,
								code: e,
								message: n
							})), t(C({
								...f
							})), t(Object(i.e)())
						}
					}
				}, j = Object(a.a)(g), _ = () => async e => {
					await m.a.disconnect(), e(j()), e(Object(o.i)())
				}, C = Object(a.a)(f), I = Object(a.a)("SENDBIRD_SDK__RECONNECT_SENDBIRD"), y = () => async e => {
					m.a.reconnect(), e(I())
				}
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
							method: s.ob.POST
						}))(a(), r);
						if (t.ok) {
							const n = t.body;
							if (n.unsafeLoggedOut) return void(r.unsafeLoggedOut || e(d()));
							e(l(n))
						}
					}
				}
		},
		"./src/chat/actions/surveyTrigger/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			let s, c;
			const r = "REDDIT__START_SURVEY",
				o = Object(a.a)(r),
				i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8e3;
					return async t => {
						c || (s && clearTimeout(s), s = setTimeout(() => {
							t(o()), c = !0
						}, e))
					}
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
			n.d(t, "a", (function() {
				return I
			})), n.d(t, "kb", (function() {
				return y
			})), n.d(t, "qb", (function() {
				return x
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "bb", (function() {
				return N
			})), n.d(t, "ib", (function() {
				return w
			})), n.d(t, "cb", (function() {
				return k
			})), n.d(t, "ob", (function() {
				return T
			})), n.d(t, "z", (function() {
				return M
			})), n.d(t, "A", (function() {
				return A
			})), n.d(t, "X", (function() {
				return L
			})), n.d(t, "N", (function() {
				return D
			})), n.d(t, "mb", (function() {
				return U
			})), n.d(t, "L", (function() {
				return P
			})), n.d(t, "E", (function() {
				return R
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "hb", (function() {
				return H
			})), n.d(t, "H", (function() {
				return F
			})), n.d(t, "h", (function() {
				return G
			})), n.d(t, "F", (function() {
				return V
			})), n.d(t, "p", (function() {
				return W
			})), n.d(t, "nb", (function() {
				return z
			})), n.d(t, "jb", (function() {
				return K
			})), n.d(t, "Z", (function() {
				return q
			})), n.d(t, "D", (function() {
				return Z
			})), n.d(t, "J", (function() {
				return Q
			})), n.d(t, "K", (function() {
				return Y
			})), n.d(t, "P", (function() {
				return X
			})), n.d(t, "O", (function() {
				return J
			})), n.d(t, "c", (function() {
				return $
			})), n.d(t, "B", (function() {
				return ee
			})), n.d(t, "W", (function() {
				return te
			})), n.d(t, "pb", (function() {
				return ne
			})), n.d(t, "V", (function() {
				return ae
			})), n.d(t, "o", (function() {
				return se
			})), n.d(t, "x", (function() {
				return ce
			})), n.d(t, "R", (function() {
				return re
			})), n.d(t, "ab", (function() {
				return oe
			})), n.d(t, "k", (function() {
				return ie
			})), n.d(t, "gb", (function() {
				return le
			})), n.d(t, "fb", (function() {
				return de
			})), n.d(t, "m", (function() {
				return ue
			})), n.d(t, "j", (function() {
				return he
			})), n.d(t, "d", (function() {
				return me
			})), n.d(t, "q", (function() {
				return be
			})), n.d(t, "s", (function() {
				return pe
			})), n.d(t, "u", (function() {
				return ge
			})), n.d(t, "r", (function() {
				return fe
			})), n.d(t, "t", (function() {
				return Oe
			})), n.d(t, "f", (function() {
				return ve
			})), n.d(t, "C", (function() {
				return Ee
			})), n.d(t, "S", (function() {
				return je
			})), n.d(t, "eb", (function() {
				return _e
			})), n.d(t, "n", (function() {
				return Ce
			})), n.d(t, "i", (function() {
				return Ie
			})), n.d(t, "w", (function() {
				return ye
			})), n.d(t, "G", (function() {
				return xe
			})), n.d(t, "I", (function() {
				return Se
			})), n.d(t, "v", (function() {
				return Ne
			})), n.d(t, "Y", (function() {
				return we
			})), n.d(t, "M", (function() {
				return ke
			})), n.d(t, "Q", (function() {
				return Te
			})), n.d(t, "lb", (function() {
				return Me
			})), n.d(t, "U", (function() {
				return Ae
			})), n.d(t, "b", (function() {
				return Le
			})), n.d(t, "T", (function() {
				return De
			})), n.d(t, "y", (function() {
				return Ue
			})), n.d(t, "db", (function() {
				return Pe
			})), n.d(t, "g", (function() {
				return Re
			}));
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/components/MessageInput/constants.ts"),
				c = n("./src/chat/constants/channels.ts"),
				r = n("./src/chat/constants/messages.ts"),
				o = n("./src/chat/selectors/channels.ts"),
				i = n("./src/chat/selectors/contacts.ts"),
				l = n("./src/chat/selectors/gifs.ts"),
				d = n("./src/chat/selectors/platform.ts"),
				u = n("./src/chat/tracking/fields/chat.ts"),
				h = n("./src/chat/tracking/fields/common.ts"),
				m = n("./src/chat/tracking/sendEvent.ts");
			var b = n("./src/chat/selectors/telemetry.ts");
			var p = n("./src/chat/selectors/liveChat/index.ts"),
				g = n("./src/chat/tracking/fields/subreddit.ts");
			var f = n("./src/chat/tracking/events/chatView.ts"),
				O = n("./src/chat/tracking/events/contactsList.ts"),
				v = (n("./src/chat/tracking/events/experiment.ts"), n("./src/lib/constants/index.ts")),
				E = n("./src/chat/tracking/fields/actionInfo.ts");
			var j = n("./src/chat/tracking/events/invitationInbox.ts"),
				_ = n("./src/chat/tracking/events/messagesInbox.ts");
			var C, I;
			! function(e) {
				e.AWARD_RECEIVED = "award_received"
			}(C || (C = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND", e[e.THIRD = 3] = "THIRD"
			}(I || (I = {}));
			const y = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "screen",
					source: a.b.Global,
					action: a.a.View,
					...Object(h.a)(e),
					actionInfo: {
						...Object(E.a)(),
						...Object(E.b)(e)
					}
				}))(t())
			}, x = e => async (t, n) => {
				((e, t) => {
					const n = Object(p.c)(e, t);
					n && Object(m.a)({
						noun: "screen",
						source: a.b.Global,
						action: a.a.View,
						post: {
							id: t,
							commentType: v.B.Chat
						},
						subreddit: Object(g.a)(n),
						...Object(h.a)(e),
						actionInfo: {
							pageType: "post_detail",
							...Object(E.b)(e),
							...Object(E.c)(e, n),
							...Object(E.d)(n)
						}
					})
				})(n(), e)
			}, S = () => async (e, t) => {
				Object(_.b)(t())
			}, N = e => async (t, n) => {
				Object(f.o)(n(), e)
			}, w = (e, t) => async (n, a) => {
				Object(f.s)(a(), e, t)
			}, k = (e, t) => async (n, a) => {
				Object(f.p)(a(), e, t)
			}, T = () => async (e, t) => {
				Object(f.v)(t())
			}, M = () => async (e, t) => {
				Object(f.f)(t())
			}, A = () => async (e, t) => {
				Object(f.g)(t())
			}, L = (e, t, n, a) => async (s, c) => {
				Object(f.n)(c(), e, t, n, a)
			}, D = (e, t, n) => async (a, s) => {
				Object(f.l)(s(), e, t, n)
			}, U = () => async (e, t) => {
				Object(f.t)(t())
			}, P = () => async (e, t) => {
				Object(f.k)(t())
			}, R = () => async (e, t) => {
				Object(f.h)(t())
			}, B = () => async (e, t) => {
				Object(f.a)(t())
			}, H = () => async (e, t) => {
				Object(f.q)(t())
			}, F = e => async (t, n) => {
				Object(f.j)(n(), e)
			}, G = () => async (e, t) => {
				Object(f.b)(t())
			}, V = () => async (e, t) => {
				Object(f.i)(t())
			}, W = () => async (e, t) => {
				Object(f.c)(t())
			}, z = e => async (t, n) => {
				Object(f.u)(n(), e)
			}, K = () => async (e, t) => {
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
			}, q = e => async (t, n) => {
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
			}, Z = () => async (e, t) => {
				const n = t();
				Object(d.d)(n) !== c.a.VIEW_INVITE && (e => {
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
			}, Q = () => async (e, t) => {
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
			}, Y = e => async (t, n) => {
				((e, t) => {
					const n = Object(p.c)(e, t);
					n && Object(m.a)({
						noun: "leave_chat",
						source: a.b.ChatSettings,
						action: a.a.Confirm,
						chat: Object(u.z)(e),
						subreddit: Object(g.a)(n),
						post: {
							id: t
						},
						...Object(h.a)(e)
					})
				})(n(), e)
			}, X = () => async (e, t) => {
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
			}, J = () => async (e, t) => {
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
			}, $ = () => async (e, t) => {
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
			}, ee = () => async (e, t) => {
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
			}, te = () => async (e, t) => {
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
			}, ne = () => async (e, t) => {
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
			}, ae = (e, t) => async (n, s) => {
				((e, t, n) => Object(m.a)({
					noun: "settings_privacy",
					source: a.b.ChatSettings,
					action: a.a.Save,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e)
					},
					...Object(h.a)(e),
					setting: {
						value: t,
						oldValue: n
					}
				}))(s(), e, t)
			}, se = e => async (t, n) => {
				((e, t) => Object(m.a)({
					noun: "create_link",
					source: a.b.ChatSettings,
					action: a.a.Click,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e)
					},
					...Object(h.a)(e),
					actionInfo: {
						...Object(b.a)(e),
						reason: t
					}
				}))(n(), e)
			}, ce = () => async (e, t) => {
				(e => Object(m.a)({
					noun: "neuter_links",
					source: a.b.ChatSettings,
					action: a.a.Click,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e)
					},
					...Object(h.a)(e)
				}))(t())
			}, re = (e, t) => async (n, s) => {
				((e, t, n) => Object(m.a)({
					noun: "sharing_link",
					source: a.b.ChatSettings,
					action: a.a.Limit,
					chat: {
						...Object(u.z)(e),
						...Object(u.p)(e),
						...Object(u.f)(e)
					},
					...Object(h.a)(e),
					actionInfo: {
						...Object(b.a)(e),
						type: t,
						settingValue: n
					}
				}))(s(), e, t)
			}, oe = e => async (t, n) => {
				((e, t) => Object(m.a)({
					source: a.f.UserReport,
					action: a.d.Click,
					noun: a.e.BlockUser,
					targetUser: {
						id: t
					},
					...Object(h.a)(e)
				}))(n(), e)
			}, ie = e => async (t, n) => {
				Object(O.c)(n(), e)
			}, le = e => async (t, n) => {
				Object(i.c)(n(), e) && Object(O.f)(n())
			}, de = e => async (t, n) => {
				const a = n(),
					s = e && e.filter(e => e !== a.user.account.id),
					c = s && s[0],
					r = a.contacts.models[c],
					o = r && r.name,
					l = Object(i.a)(n(), o);
				l && Object(O.e)(n(), l)
			}, ue = e => async (t, n) => {
				Object(O.d)(n(), e)
			}, he = () => async (e, t) => {
				Object(O.b)(t())
			}, me = () => async (e, t) => {
				Object(O.a)(t())
			}, be = e => async (t, n) => {
				const a = n(),
					s = Object(o.h)(a, e);
				Object(j.d)(a, s, s ? C.AWARD_RECEIVED : void 0)
			}, pe = e => async (t, n) => {
				const a = n(),
					s = Object(o.h)(a, e);
				Object(j.f)(a, s, s ? C.AWARD_RECEIVED : void 0)
			}, ge = () => async (e, t) => {
				const n = t();
				Object(d.d)(n) === c.a.VIEW_INVITE && Object(j.h)(n)
			}, fe = () => async (e, t) => {
				const n = t();
				Object(d.d)(n) === c.a.VIEW_INVITE && Object(j.e)(n)
			}, Oe = (e, t) => async (n, a) => {
				const s = a();
				if (Object(d.d)(s) === c.a.VIEW_INVITE) {
					const n = t.pop(),
						a = null == n ? void 0 : n.messageId;
					Object(j.g)(s, e, a)
				}
			}, ve = () => async (e, t) => {
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
			}, Ee = e => async (t, n) => {
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
						...Object(b.a)(e),
						settingValue: t
					}
				}))(n(), e)
			}, je = () => async (e, t) => {
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
			}, _e = () => async (e, t) => {
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
			}, Ce = e => async (t, n) => {
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
			}, Ie = () => async (e, t) => {
				Object(_.a)(t())
			}, ye = () => async (e, t) => {
				Object(_.c)(t())
			}, xe = e => async (t, n) => {
				const c = n();
				c.tooltipId === e && (e === s.e && (e => {
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
				})(c), e === s.b && (e => {
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
				})(c))
			}, Se = e => async (t, n) => {
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
							...Object(b.a)(e),
							settingValue: t
						}
					})
				})(n(), e)
			}, Ne = () => async (e, t) => {
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
			}, we = e => async (t, n) => {
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
							...Object(b.a)(e),
							settingValue: t
						}
					})
				})(n(), e)
			}, ke = () => async (e, t) => {
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
			}, Te = e => async (t, n) => {
				const s = n(),
					c = Object(d.c)(s),
					r = (e => {
						switch (e) {
							case a.b.ChatSettings:
								return a.b.ChatSettings;
							default:
								return a.b.ChatView
						}
					})(c && c.source);
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
							...Object(b.a)(e)
						}
					})
				})(n(), e, r)
			}, Me = e => async (t, n) => {
				Object(j.j)(n(), e)
			}, Ae = e => async (t, n) => {
				Object(j.j)(n(), e)
			}, Le = (e, t) => async (n, a) => {
				Object(j.a)(a(), e, t)
			}, De = (e, t) => async (n, a) => {
				Object(j.i)(a(), e, t)
			}, Ue = (e, t) => async (n, a) => {
				Object(f.e)(a(), e, t, C.AWARD_RECEIVED)
			}, Pe = e => async (t, n) => {
				switch (e.messageData.type) {
					case r.c.GIF:
						t((() => async (e, t) => {
							const n = t(),
								a = Object(l.b)(n);
							Object(f.m)(t(), a)
						})());
						break;
					case r.c.IMAGE:
						t(N(e))
				}
			}, Re = e => async (t, n) => {
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
						const c = Object(r.E)(a(), "channelId"),
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
		"./src/chat/actions/uploads/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return O
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "d", (function() {
				return w
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/actions/message/index.ts"),
				c = n("./src/chat/actions/toast.ts"),
				r = n("./src/lib/constants/index.ts"),
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
				const c = await Object(i.b)({
					data: d(e, t.uploadLeaseHeaders),
					endpoint: t.uploadLeaseUrl,
					method: r.ob.POST,
					type: null,
					setup: a
				});
				if ("string" == typeof c.body) try {
					const e = (() => Object(o.a)(() => n.e("vendors~xml2js").then(n.t.bind(null, "./node_modules/xml2js/lib/xml2js.js", 7))).then(e => e.default))();
					(await e).parseString(c.body, (e, t) => {
						c.body = t
					}), s = !0
				} catch (u) {
					Object(l.b)(u)
				}
				return s
			}, h = n("./src/redditGQL/operations/CreateMediaUploadLease.json"), m = n("./src/redditGQL/operations/SubmitMediaUpload.json"), b = n("./src/lib/makeGqlRequest/index.ts");
			var p = n("./src/chat/models/Uploads/index.ts"),
				g = n("./src/chat/selectors/channels.ts"),
				f = n("./src/chat/selectors/uploads.ts");
			const O = "FILE_DROP__TOGGLE_IS_OVER",
				v = Object(a.a)(O),
				E = "UPLOAD__ADD_PENDING",
				j = Object(a.a)(E),
				_ = "UPLOAD__CHANGE_STATUS",
				C = Object(a.a)(_),
				I = e => async (t, n) => {
					const a = n(),
						s = Object(g.o)(a);
					s && t(C({
						id: e,
						channelId: s,
						status: p.c.Canceled
					}))
				}, y = "UPLOAD__CHANGE_PROGRESS", x = Object(a.a)(y), S = e => {
					let {
						id: t,
						file: n,
						metadata: {
							mimetype: a
						}
					} = e;
					return async (e, s, c) => {
						let {
							gqlContext: r
						} = c;
						const o = {
								input: {
									mimetype: a
								}
							},
							i = await ((e, t) => Object(b.a)(e, {
								...h,
								variables: t
							}))(r(), o);
						if (i.ok && (e => {
								var t, n;
								return Boolean(null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.createMediaUploadLease) || void 0 === n ? void 0 : n.mediaId)
							})(i.body)) {
							const {
								mediaId: a,
								uploadLease: s
							} = i.body.data.createMediaUploadLease;
							return await u(n, s, n => (((e, t, n) => {
								t.on("progress", t => {
									if ("upload" === t.direction) {
										const a = {
											percent: t.percent,
											total: t.total,
											uploaded: t.loaded
										};
										n(x({
											id: e,
											progress: a
										}))
									}
								})
							})(t, n, e), n)) ? a : null
						}
					}
				}, N = (e, t) => async (n, a, s) => {
					let {
						gqlContext: c
					} = s;
					const r = {
							input: {
								mediaId: e,
								redditId: t
							}
						},
						o = await ((e, t) => Object(b.a)(e, {
							...m,
							variables: t
						}))(c(), r);
					return o.ok && (e => {
						var t, n;
						return Boolean(null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.submitMedia) || void 0 === n ? void 0 : n.ok)
					})(o.body)
				};
			class w {
				constructor(e) {
					this.uploads = [], this.createMessage = () => async (e, t) => {
						if (this.setActiveUploads(t()), !this.uploads.length) return e(Object(c.e)());
						const n = this.channelId,
							a = this.uploads.map(async t => {
								const {
									id: a
								} = t;
								e(C({
									id: a,
									channelId: n,
									status: p.c.Submit
								}));
								const c = await e(Object(s.q)(n, t));
								c ? (t.messageId = c.messageId, t.redditId = c.redditId) : e(C({
									id: a,
									channelId: n,
									status: p.c.Failed
								}))
							});
						await Promise.all(a)
					}, this.uploadMedia = () => async (e, t) => {
						if (!this.uploads.length || !this.channelId) return e(Object(c.e)());
						const n = this.channelId;
						this.uploads.forEach(async t => {
							const {
								id: a,
								redditId: s
							} = t;
							if (!s) return void e(C({
								id: a,
								channelId: n,
								status: p.c.Failed
							}));
							e(C({
								id: a,
								channelId: n,
								status: p.c.Uploading
							}));
							const c = await e(S(t));
							c ? (e(C({
								id: a,
								channelId: n,
								status: p.c.Processing
							})), await e(N(c, s)) ? e(C({
								id: a,
								channelId: n,
								status: p.c.Success
							})) : e(C({
								id: a,
								channelId: n,
								status: p.c.Failed
							}))) : e(C({
								id: a,
								channelId: n,
								status: p.c.Failed
							}))
						})
					}, this.channelId = e
				}
				setActiveUploads(e) {
					this.uploads = Object(f.b)(e)
				}
			}
		},
		"./src/chat/actions/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "k", (function() {
				return A
			})), n.d(t, "h", (function() {
				return L
			})), n.d(t, "t", (function() {
				return R
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "l", (function() {
				return F
			})), n.d(t, "j", (function() {
				return G
			})), n.d(t, "r", (function() {
				return V
			})), n.d(t, "i", (function() {
				return W
			})), n.d(t, "q", (function() {
				return z
			})), n.d(t, "c", (function() {
				return K
			})), n.d(t, "m", (function() {
				return Q
			})), n.d(t, "b", (function() {
				return Y
			})), n.d(t, "n", (function() {
				return $
			})), n.d(t, "o", (function() {
				return te
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
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
				O = n("./src/chat/models/Contact/index.ts"),
				v = n("./src/chat/models/Experiment/index.ts"),
				E = n("./src/chat/models/User/index.ts"),
				j = n("./src/chat/selectors/channels.ts"),
				_ = n("./src/chat/singleton/SendbirdSDK.ts");
			const C = "USER__ACCOUNT_FETCH_COMPLETED",
				I = "USER__LOID_RECEIVED",
				y = "USER__SESSION_TRACKER_RECEIVED",
				x = "FETCH_EXPERIMENTS_COMPLETED",
				S = Object(i.a)(I),
				N = Object(i.a)("USER__ACCOUNT_FETCH_PENDING"),
				w = Object(i.a)(C),
				k = Object(i.a)("USER__ACCOUNT_FETCH_FAILED"),
				T = Object(i.a)(y),
				M = Object(i.a)(x),
				A = () => async (e, t, n) => {
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
					e(N());
					const l = await Object(m.c)(a());
					if (l.ok && l.body && l.body.features) {
						const {
							body: t,
							body: {
								features: n
							}
						} = l, a = Object(E.a)(t), s = Object(v.a)(n), c = !!a.prefNightmode;
						e(w(a)), e(M(s)), e(Object(d.switchTheme)(c))
					} else e(k(l.error))
				}, L = "USER__USERS_FETCH_COMPLETED", D = Object(i.a)("USER__USERS_FETCH_PENDING"), U = Object(i.a)(L), P = Object(i.a)("USER__USERS_FETCH_FAILED"), R = e => async (t, n, a) => {
					let {
						gqlContext: c
					} = a;
					const r = n().contacts.models,
						o = e.filter(e => !r[e]),
						i = s()(o, 100);
					if (!o.length) return;
					t(D(e));
					const l = await Promise.all(i.map(e => Object(p.b)(c(), {
						ids: e
					}))).catch(() => []);
					for (const e of l)
						if (e.ok && Object(p.c)(e.body)) {
							const n = Object(E.b)(e.body.data.redditorsInfoByIds);
							n ? t(U(n)) : Object(g.b)(`Failed to normalize RedditorsInfoByIds: ${e.body.data.redditorsInfoByIds}`)
						} else t(P())
				}, B = "USERS__USERS_ADD_SELECTED", H = Object(i.a)(B), F = e => async t => {
					t(H(e)), t(Object(u.k)(e))
				}, G = "USERS__USERS_REMOVE_SELECTED", V = Object(i.a)(G), W = "USERS__USERS_REMOVE_ALL_SELECTED", z = Object(i.a)(W), K = "USERS__BLOCK_USER_COMPLETED", q = Object(i.a)(K), Z = Object(i.a)("USERS__BLOCK_USER_FAILED"), Q = e => async (t, n, a) => {
					let {
						apiContext: s
					} = a;
					const c = n(),
						r = c.contacts.models[e],
						i = r && r.name,
						d = Object(j.A)(c),
						u = Object(j.k)(c) || h.b.JOINED,
						b = d && d.type === f.b.Direct,
						p = Object(j.n)(c);
					if (!p) throw new g.a("currentChannel", p);
					const O = p.channelId;
					if (!O) throw new g.a("blockedChannelId", O);
					const v = await Object(m.a)(s(), e);
					v && v.ok && b ? (await _.a.hideChannel(), t(q({
						userId: e,
						username: i
					})), t(Object(l.K)(O)), t(Object(l.P)(u))) : v && v.ok && !b ? (t(q({
						userId: e,
						username: i
					})), t(Object(o.a)())) : v && t(Z(v.error))
				}, Y = "BLOCKED_USER_LIST_FETCH_COMPLETED", X = Object(i.a)("BLOCKED_USER_LIST_FETCH_FAILED"), J = Object(i.a)(Y), $ = () => async (e, t, n) => {
					let {
						apiContext: a
					} = n;
					const {
						contacts: s
					} = t();
					if (!s.fetchedBlockedUsers) {
						const t = await Object(p.d)(a());
						if (t.ok && t.body && t.body.data) {
							const {
								children: n
							} = t.body.data, {
								models: a
							} = s, c = {};
							n.forEach(e => {
								if (a[e.id]) c[e.id] = {
									...a[e.id],
									isBlocked: !0
								};
								else {
									const {
										date: t,
										...n
									} = e;
									c[e.id] = {
										...O.b,
										...n,
										isBlocked: !0
									}
								}
							}), e(J({
								blockedContacts: c
							}))
						} else e(X(t.error))
					}
				}, ee = Object(i.a)("MODERATOR__KICK_USER"), te = (e, t) => async (n, a, s) => {
					let {
						apiContext: c
					} = s;
					const r = Object(j.o)(a());
					r && await Object(b.l)(c(), r, e, t).then(() => {
						n(ee({
							userId: e
						}))
					}).catch(g.b)
				}
		},
		"./src/chat/actions/whiteList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "f", (function() {
				return w
			}));
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/chat/actions/toast.ts"),
				c = n("./src/chat/constants/toast.ts"),
				r = n("./src/config.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeApiRequest/index.ts"),
				l = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				d = n.n(l),
				u = n("./src/lib/addQueryParams/index.ts");

			function h(e) {
				const {
					protocol: t,
					host: n
				} = d.a.parse(e), a = `${t}//${n}` === r.a.oauthUrl ? r.a.telemetry.appName.redesignR2 : r.a.telemetry.appName.redesign, s = {
					redditWebClient: a,
					app: `${a}-client-production`
				};
				return Object(u.a)(e, s)
			}
			var m = n("./src/lib/omitHeaders/index.ts");
			var b = n("./src/chat/models/Contact/index.ts");
			const p = "USER_WHITELIST__FETCH_WHITELIST_SUCCESS",
				g = "USER_WHITELIST__ADD_TO_WHITELIST_SUCCESS",
				f = "USER_WHITELIST__REMOVE_FORM_WHITELIST_SUCCESS",
				O = Object(a.a)("USER_WHITELIST__FETCH_WHITELIST_FAILURE"),
				v = Object(a.a)("USER_WHITELIST__FETCH_WHITELIST_PENDING"),
				E = Object(a.a)(p),
				j = Object(a.a)("USER_WHITELIST__ADD_TO_WHITELIST_PENDING"),
				_ = Object(a.a)(g),
				C = Object(a.a)("USER_WHITELIST__ADD_TO_WHITELIST_FAILED"),
				I = Object(a.a)("USER_WHITELIST__REMOVE_FORM_WHITELIST_PENDING"),
				y = Object(a.a)(f),
				x = Object(a.a)("USER_WHITELIST__REMOVE_FORM_WHITELIST"),
				S = e => async (t, n, a) => {
					let {
						apiContext: s
					} = a;
					t(v());
					const c = await ((e, t) => Object(i.a)(e, {
						endpoint: h(`${r.a.gatewayUrl}/desktopapi/v1/prefs`),
						method: o.ob.GET,
						data: {
							timestamp: t ? Date.now() : void 0
						}
					}))(s(), e);
					c.ok ? c.body && t(E(Object(b.d)(c.body.whitelistedUsers))) : t(O())
				}, N = e => async (t, n, a) => {
					let {
						apiContext: r
					} = a;
					t(j());
					const l = await (async (e, t) => Object(i.a)(Object(m.a)(e, ["reddit-user_id"]), {
						data: {
							name: t
						},
						endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
						method: o.ob.POST
					}))(r(), e);
					l.ok ? l.body.id && t(_(l.body.id)) : (t(C()), t(Object(s.g)({
						toast: c.a.SomethingWentWrong
					})), t(Object(s.c)()))
				}, w = e => async (t, n, a) => {
					let {
						apiContext: r
					} = a;
					t(I()), (await (async (e, t) => Object(i.a)(Object(m.a)(e, ["reddit-user_id"]), {
						data: {
							name: t
						},
						endpoint: `${e.apiUrl}/api/remove_whitelisted`,
						method: o.ob.POST
					}))(r(), e.name)).ok ? t(y(e.id)) : (t(x()), t(Object(s.g)({
						toast: c.a.SomethingWentWrong
					})), t(Object(s.c)()))
				}
		},
		"./src/chat/components/BasicInvited/index.m.less": function(e, t, n) {
			e.exports = {
				BasicInvited: "_3-KlmxMBfDRzsIokqshZMA",
				basicInvited: "_3-KlmxMBfDRzsIokqshZMA",
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
		"./src/chat/components/BlockedUserPrompt/index.m.less": function(e, t, n) {
			e.exports = {
				blockedUserMessage: "_3Rf-Qa9_ukiAOb8MrqdPP2",
				iconWrapper: "_1UwYdOFMbAmnmenMtc1okl",
				infoIcon: "_1foGeoZo-UtDIlodALfNi9"
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
				optionsContainer: "_2SD7gK3ClN3qyUchNQuteD",
				Tooltip: "_2PCg9I2i8a1mdk09NEmocu",
				tooltip: "_2PCg9I2i8a1mdk09NEmocu"
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
				c = n("./node_modules/react/index.js"),
				r = n.n(c),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				l = n("./src/chat/components/ChatIcon/index.m.less"),
				d = n.n(l),
				u = n("./src/chat/icons/Userpic/index.tsx");
			const h = i.a.wrapped(u.a, "UserPic", d.a),
				m = i.a.wrapped(h, "TopUserpic", d.a),
				b = i.a.wrapped(h, "BottomUserpic", d.a),
				p = s()(e => {
					if (e) {
						return 20 * (e / 32) + "px"
					}
					return "20px"
				}),
				g = s()(e => e + "px" || !1);
			t.a = i.a.wrapped(e => {
				let {
					className: t,
					isSmall: n,
					secondUserId: a,
					userId: s,
					onClick: c,
					customPicSize: i,
					isFlipping: l
				} = e;
				const u = g(i),
					f = p(i);
				return r.a.createElement("div", {
					role: "button",
					tabIndex: 0,
					className: Object(o.a)(t, {
						[d.a.small]: n
					}),
					onClick: c,
					style: {
						height: u,
						width: u
					}
				}, a ? r.a.createElement(r.a.Fragment, null, r.a.createElement(m, {
					userId: s,
					height: f,
					width: f
				}), r.a.createElement(b, {
					userId: a,
					height: f,
					width: f
				})) : r.a.createElement(h, {
					height: u,
					width: u,
					userId: s,
					isFlipping: l,
					className: Object(o.a)(t, {
						[d.a.small]: n
					})
				}))
			}, "IconWrapper", d.a)
		},
		"./src/chat/components/ChatList/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/hooks/usePrevious.ts"),
				o = n("./src/chat/actions/settings/index.ts"),
				i = n("./src/chat/components/ChatListItem/index.tsx"),
				l = n("./src/chat/models/Channel/index.ts"),
				d = n("./src/chat/selectors/channels.ts"),
				u = n("./src/chat/selectors/user.ts");
			t.a = e => {
				let {
					channels: t
				} = e;
				const n = Object(c.d)(),
					h = Object(c.e)(u.a),
					m = Object(c.e)(d.o),
					b = Object(r.a)(m),
					p = Object(c.e)(e => b && Object(d.m)(e, b)),
					g = Object(a.useCallback)(() => {
						n(Object(o.d)())
					}, [n]);
				return Object(a.useEffect)(() => {
					b !== m && p === l.b.Group && g()
				}, [b, m, p, g]), s.a.createElement(s.a.Fragment, null, t.map(e => {
					const {
						channelId: t,
						lastMessage: n,
						channelState: a,
						unreadMessageCount: c,
						unreadMentionCount: r,
						channelData: o
					} = e;
					return s.a.createElement(i.a, {
						key: t,
						channelId: t,
						channelData: o,
						channelState: a,
						isSelected: t === m,
						isGroup: e.type === l.b.Group,
						message: n,
						unread: !!c,
						mentionCount: r,
						currentUserId: h,
						unreadMessageCount: c
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
				UnreadCounter: "_2_356AZLLuANUJ8g-ByYZA",
				unreadCounter: "_2_356AZLLuANUJ8g-ByYZA",
				ItemControls: "Vq8lNsMCbhivjYa37NfXE",
				itemControls: "Vq8lNsMCbhivjYa37NfXE",
				ChannelName: "_2O9bxNWfKdVw3DGR5RL3qM",
				channelName: "_2O9bxNWfKdVw3DGR5RL3qM",
				NotificationDisabledIcon: "_37mhpYJBT3e1_IrXsG97Pm",
				notificationDisabledIcon: "_37mhpYJBT3e1_IrXsG97Pm"
			}
		},
		"./src/chat/components/ChatListItem/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/chat/components/ChatIcon/index.tsx"),
				l = n("./node_modules/fbt/lib/FbtPublic.js"),
				d = n("./src/chat/constants/messages.ts"),
				u = n("./src/chat/helpers/linkParser/index.ts"),
				h = n("./src/chat/models/Channel/index.ts"),
				m = n("./src/chat/models/Message/adapter.ts"),
				b = n("./src/chat/selectors/experiments.ts"),
				p = n("./src/chat/components/Message/Preview.m.less"),
				g = n.n(p);
			const f = e => {
					var t, n, a;
					const {
						message: r,
						isInvited: o,
						channelData: i
					} = e, p = (e => {
						let {
							currentUserId: t,
							isGroup: n,
							message: a
						} = e;
						return a && a.sender && (n || (null == a ? void 0 : a.messageData.type) !== d.c.TEXT) ? t === a.sender.userId ? l.fbt._("You:", null, {
							hk: "wP43r"
						}) : `${a.sender.nickname}:` : ""
					})(e), g = Object(c.e)(b.q);
					if (o && (null == i ? void 0 : i.creationReason) === h.a.AWARDING) return s.a.createElement(s.a.Fragment, null, l.fbt._("Sent a note with an award", null, {
						hk: "4FSnF0"
					}));
					if (!r) return null;
					if (r.messageData.collapsedInvitePreview) return s.a.createElement(s.a.Fragment, null, l.fbt._("Wants to message you", null, {
						hk: "3CbciS"
					}));
					if (o && !g) return s.a.createElement(s.a.Fragment, null, l.fbt._("Wants to message you", null, {
						hk: "3CbciS"
					}));
					switch (r.messageData.type) {
						case d.c.TEXT: {
							const {
								value: e
							} = r.messageData;
							return s.a.createElement(s.a.Fragment, null, [p, " ", Object(u.b)(e) ? l.fbt._("shared a link", null, {
								hk: "1skIrg"
							}) : e])
						}
						case d.c.USER_POST:
						case d.c.POST:
							return s.a.createElement(s.a.Fragment, null, [p, " ", l.fbt._("shared a post", null, {
								hk: "17xxRY"
							}), " ", r.messageData.subreddit]);
						case d.c.COMMENT:
							return s.a.createElement(s.a.Fragment, null, [p, " ", l.fbt._("shared a comment", null, {
								hk: "1esXqZ"
							}), " ", r.messageData.subreddit]);
						case d.c.EMBED:
							return s.a.createElement(s.a.Fragment, null, [p, " ", l.fbt._("shared a link", null, {
								hk: "1skIrg"
							}), " ", r.messageData.value]);
						case d.c.SUBREDDIT:
							return s.a.createElement(s.a.Fragment, null, [p, " ", l.fbt._("shared a community", null, {
								hk: "2GsP2Q"
							}), " ", r.messageData.subreddit]);
						case d.c.SNOOMOJI:
							return s.a.createElement(s.a.Fragment, null, [p, " ", l.fbt._("sent a snoomoji", null, {
								hk: "gRkQH"
							})]);
						case d.c.GIF:
							return s.a.createElement(s.a.Fragment, null, [p, " ", l.fbt._("sent a gif", null, {
								hk: "kIiXZ"
							})]);
						case d.c.IMAGE: {
							const c = e.currentUserId !== (null === (t = null == r ? void 0 : r.sender) || void 0 === t ? void 0 : t.userId);
							return (null === (n = r.messageData.image) || void 0 === n ? void 0 : n.phase) === m.a.PreUpload ? c ? s.a.createElement(s.a.Fragment, null, [null === (a = null == r ? void 0 : r.sender) || void 0 === a ? void 0 : a.nickname, " ", l.fbt._("is sending you an image", null, {
								hk: "f5lD3"
							})]) : s.a.createElement(s.a.Fragment, null, l.fbt._("You are sending an image", null, {
								hk: "1xxKMD"
							})) : s.a.createElement(s.a.Fragment, null, [p, " ", l.fbt._("sent an image", null, {
								hk: "3IN7Ud"
							})])
						}
						default:
							return null
					}
				},
				O = e => s.a.createElement("sub", {
					className: Object(o.a)(g.a.MessagePreview, {
						[g.a.active]: e.isActive,
						[g.a.unread]: e.isInvited || e.isUnread
					})
				}, s.a.createElement(f, e));
			var v = n("./src/chat/constants/channels.ts"),
				E = n("./src/chat/controls/Counter/index.tsx"),
				j = n("./src/chat/helpers/urls/index.ts"),
				_ = n("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				C = n("./src/chat/selectors/channels.ts"),
				I = n("./src/chat/components/ChatListItem/index.m.less"),
				y = n.n(I);
			const x = e => {
				let {
					active: t,
					children: n,
					unread: a
				} = e;
				return s.a.createElement("h4", {
					className: Object(o.a)(y.a.ItemTitleName, {
						[y.a.active]: t,
						[y.a.unread]: a
					})
				}, n)
			};
			t.a = e => {
				let {
					channelId: t,
					channelData: n,
					currentUserId: l,
					isGroup: d,
					isSelected: u,
					channelState: h,
					message: m,
					unread: p,
					mentionCount: g = 0,
					unreadMessageCount: f = 0
				} = e;
				var I;
				const S = Object(c.e)(e => Object(C.w)(e, t)),
					N = Object(c.e)(e => Object(C.l)(e, t)),
					w = Object(c.e)(e => Object(C.N)(e, t)),
					k = Object(c.e)(b.w),
					T = h === v.b.INVITED,
					M = Object(a.useMemo)(() => T ? Object(j.channelAction)(t, v.a.VIEW_INVITE) : Object(j.channelUrl)(t), [T, t]),
					A = Object(a.useMemo)(() => Object(j.getRedirectURL)(M), [M]),
					L = Object(a.useMemo)(() => d ? g : f, [g, f, d]);
				return s.a.createElement(r.a, {
					to: A,
					className: Object(o.a)(y.a.ChatListItem, {
						[y.a.selected]: u,
						[y.a.unread]: p
					})
				}, (null == S ? void 0 : S.firstUser) && s.a.createElement(i.a, {
					className: y.a.ChatIcon,
					userId: S.firstUser.id,
					secondUserId: null === (I = S.secondUser) || void 0 === I ? void 0 : I.id
				}), s.a.createElement("div", {
					className: y.a.ItemTitle
				}, s.a.createElement(x, {
					unread: p || T,
					active: u
				}, s.a.createElement("span", {
					className: y.a.ChannelName
				}, N)), s.a.createElement("div", {
					className: y.a.Description
				}, s.a.createElement(O, {
					currentUserId: l,
					isGroup: d,
					isInvited: T,
					isUnread: p,
					isActive: u,
					message: m,
					channelData: n
				}), s.a.createElement(E.b, {
					count: L,
					className: y.a.UnreadCounter
				}))), w && k && s.a.createElement(_.a, {
					className: y.a.NotificationDisabledIcon,
					isFilled: !0
				}))
			}
		},
		"./src/chat/components/ChatMemberList/index.m.less": function(e, t, n) {
			e.exports = {
				ListItem: "_1r5uWTYsfJO7mPIndnsjxX",
				listItem: "_1r5uWTYsfJO7mPIndnsjxX",
				InfoWrapper: "guQfnIkZPWOLVlm4PdcSd",
				infoWrapper: "guQfnIkZPWOLVlm4PdcSd",
				MemberActionDropdown: "_35hMJITNiOe39zEBZZIhTb",
				memberActionDropdown: "_35hMJITNiOe39zEBZZIhTb",
				selected: "_3pi1mfWzFHB0awpfsGqhRY",
				withMenu: "KMmw-k4V45HXPFE1XL2S5",
				IconContainer: "_1sD1FML2DnIYX9pKhe9bWr",
				iconContainer: "_1sD1FML2DnIYX9pKhe9bWr",
				Title: "gwMzsQ4nu6WVY2c9v7Mus",
				title: "gwMzsQ4nu6WVY2c9v7Mus",
				Warning: "Z3RlgS8V_RlK5YYIfJ2C4",
				warning: "Z3RlgS8V_RlK5YYIfJ2C4",
				InfoSplitter: "_2oEuiXIlvwlP-gx7H43MZN",
				infoSplitter: "_2oEuiXIlvwlP-gx7H43MZN",
				Info: "_3rIxy-XZtD_FuN9IeEaIYU",
				info: "_3rIxy-XZtD_FuN9IeEaIYU"
			}
		},
		"./src/chat/components/ChatMemberList/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				c = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/chat/actions/tracking.ts"),
				d = n("./node_modules/lodash/difference.js"),
				u = n.n(d),
				h = n("./src/lib/hooks/useTooltip.ts"),
				m = n("./src/chat/components/Modals/BlockUser/index.tsx"),
				b = n("./src/chat/components/Modals/KickUser/index.tsx"),
				p = n("./src/chat/components/Modals/ModalOverlay/index.tsx"),
				g = n("./src/chat/constants/dropdown.ts"),
				f = n("./src/chat/controls/Button/index.tsx"),
				O = n("./src/chat/controls/Dropdown/Row.tsx"),
				v = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				E = n("./src/chat/controls/TooltipHooked/TooltipHooked.tsx"),
				j = n("./src/chat/helpers/dom.ts"),
				_ = n("./src/chat/controls/Svg/index.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var I = e => c.a.createElement(_.a, C({}, e, {
					viewBox: "0 0 14 4"
				}), c.a.createElement("g", {
					transform: "translate(-475.000000, -286.000000)"
				}, c.a.createElement("path", {
					d: "M485.479375,287.804009 C485.479375,288.796214 486.265328,289.608018 487.225938,289.608018 C488.186547,289.608018 488.9725,288.796214 488.9725,287.804009 C488.9725,286.811804 488.186547,286 487.225938,286 C486.265328,286 485.479375,286.811804 485.479375,287.804009 M480.239688,287.804009 C480.239688,288.796214 481.025641,289.608018 481.98625,289.608018 C482.946859,289.608018 483.732813,288.796214 483.732813,287.804009 C483.732813,286.811804 482.946859,286 481.98625,286 C481.025641,286 480.239688,286.811804 480.239688,287.804009 M478.493125,287.804009 C478.493125,286.811804 477.707172,286 476.746563,286 C475.785953,286 475,286.811804 475,287.804009 C475,288.796214 475.785953,289.608018 476.746563,289.608018 C477.707172,289.608018 478.493125,288.796214 478.493125,287.804009"
				}))),
				y = n("./src/chat/selectors/channels.ts"),
				x = n("./src/chat/selectors/members.ts"),
				S = n("./src/chat/components/MemberActionDropdown/index.m.less"),
				N = n.n(S);
			var w = e => {
					let {
						isBlockedUser: t,
						userId: n
					} = e;
					const o = p.d,
						i = Object(r.e)(y.a),
						l = Object(h.b)(Object(v.a)()),
						[d, _] = Object(s.useState)(!1),
						[C, S] = Object(s.useState)(!1),
						w = Object(r.e)(e => Object(x.c)(e, n)),
						k = e => {
							switch (e) {
								case g.b.Block:
									return a.fbt._("Block", null, {
										hk: "t44ep"
									});
								case g.b.Kick:
									return a.fbt._("Kick", null, {
										hk: "oXEqT"
									});
								default:
									return ""
							}
						},
						T = e => {
							switch (e) {
								case g.b.Block:
									return void _(!0);
								case g.b.Kick:
									return void S(!0);
								default:
									return
							}
						};
					return c.a.createElement("span", {
						className: N.a.Wrapper,
						onClick: l.toggle,
						onMouseLeave: l.hide
					}, c.a.createElement(f.d, {
						className: N.a.IconButton,
						title: a.fbt._("Member options", null, {
							hk: "1y0AHl"
						})
					}, c.a.createElement("span", {
						ref: l.target.ref
					}, c.a.createElement(I, null))), c.a.createElement(E.default, {
						arrowProps: l.arrowProps,
						popperProps: l.popperProps,
						visible: l.visible,
						hide: l.hide,
						isInstant: !0,
						noArrow: !0,
						styled: !0
					}, c.a.createElement("div", {
						className: N.a.OptionsContainer
					}, (() => {
						const {
							Block: e,
							Kick: n
						} = g.b;
						return t && !i ? u()(g.c.members, [e, n]) : i ? t ? u()(g.c.members, [e]) : g.c.members : u()(g.c.members, [n])
					})().map((e, t) => c.a.createElement(O.a, {
						className: N.a.DropdownRow,
						key: t,
						displayText: k(e),
						onClick: Object(j.b)(() => T(e))
					})))), w ? c.a.createElement(o.Provider, {
						value: () => {
							_(!1), S(!1)
						}
					}, d ? c.a.createElement(m.a, {
						userToBlock: w
					}) : null, C ? c.a.createElement(b.a, {
						userToKick: w
					}) : null) : null)
				},
				k = n("./src/chat/controls/Title/index.tsx"),
				T = n("./src/chat/icons/Nsfw/index.tsx"),
				M = n("./src/chat/icons/Userpic/index.tsx"),
				A = n("./src/chat/selectors/user.ts"),
				L = n("./src/chat/components/ChatMemberList/index.m.less"),
				D = n.n(L);
			const U = e => {
				let {
					children: t,
					className: n
				} = e;
				return c.a.createElement("li", {
					className: n
				}, t)
			};
			t.a = e => {
				let {
					className: t,
					channelId: n,
					selectIndex: d,
					minimal: u,
					onClick: h,
					useNSFWIcons: m,
					modIndicator: b,
					onSelectName: p
				} = e;
				const f = Object(r.d)(),
					O = Object(r.e)(e => Object(x.b)(e, n) || []),
					v = Object(r.e)(e => Object(y.E)(e, "type")),
					E = Object(r.e)(A.a);
				return Object(s.useEffect)(() => {
					((e, t, n) => {
						if (n && void 0 !== t && e.length >= t) {
							const a = e[t];
							a && n(a.name)
						}
					})(O, d, p)
				}, [O, d, p]), c.a.createElement("ul", {
					className: t
				}, O && O.map((e, t) => c.a.createElement(U, {
					key: e.name,
					className: Object(i.a)(D.a.ListItem, g.a, {
						[D.a.selected]: d === t
					})
				}, c.a.createElement("span", {
					className: D.a.InfoWrapper,
					onClick: () => {
						h ? h(e.name) : (async e => {
							f(Object(l.u)()), await f(Object(l.D)()), window.open(`${o.a.redditUrl}/user/${e}`)
						})(e.name)
					}
				}, c.a.createElement("span", {
					className: D.a.IconContainer
				}, m && e.isNSFW ? c.a.createElement(T.b, null) : c.a.createElement(M.a, {
					userId: e.id
				})), c.a.createElement(k.a, {
					className: D.a.Title
				}, e.name)), e.isModerator && b && c.a.createElement(c.a.Fragment, null, c.a.createElement("span", {
					className: D.a.InfoSplitter
				}, " • "), c.a.createElement("span", {
					className: D.a.Info
				}, v && a.fbt._("Host", null, {
					hk: "4berci"
				}))), e.isNSFW && c.a.createElement("span", {
					className: D.a.Warning
				}, a.fbt._("NSFW", null, {
					hk: "36qPno"
				})), e.isBlockedByMe && c.a.createElement("span", {
					className: D.a.Warning
				}, a.fbt._("Blocked", null, {
					hk: "1RUrSV"
				})), !u && e.id !== E && c.a.createElement("div", {
					className: D.a.MemberActionDropdown
				}, c.a.createElement(w, {
					userId: e.id,
					isBlockedUser: e.isBlockedByMe
				})))))
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
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/chat/actions/container.ts"),
				l = n("./src/chat/actions/surveyTrigger/index.ts"),
				d = n("./src/chat/actions/tracking.ts"),
				u = n("./src/chat/constants/container.ts"),
				h = n("./src/chat/controls/Button/index.tsx"),
				m = n("./src/chat/helpers/dom.ts"),
				b = n("./src/chat/icons/svgs/NavClose/index.tsx"),
				p = n("./src/chat/selectors/app.ts"),
				g = n("./src/chat/components/CloseIcon/index.m.less"),
				f = n.n(g);
			t.a = e => {
				let {
					className: t
				} = e;
				const n = Object(r.d)();
				Object(r.e)(p.d);
				return c.a.createElement(h.d, {
					className: Object(o.a)(f.a.IconButton, t),
					onClick: Object(m.b)(() => {
						n(Object(i.sizeChanged)(u.a.HIDDEN)), n(Object(d.i)()), n(Object(l.b)())
					}),
					title: a.fbt._("Close chat", null, {
						hk: "4dFacQ"
					})
				}, c.a.createElement(b.a, null))
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
				return Hc
			}));
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				c = n("./node_modules/react/index.js"),
				r = n.n(c),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/chat/actions/tracking.ts"),
				d = n("./src/chat/actions/uploads/index.ts"),
				u = n("./src/chat/helpers/dom.ts"),
				h = n("./src/chat/components/FileUploader/FileDrop/index.m.less"),
				m = n.n(h);
			var b = e => {
					let {
						dropZoneRef: t,
						onChange: n
					} = e;
					const a = Object(o.d)(),
						[s, l] = Object(c.useState)(!1),
						h = Object(c.useRef)(null),
						b = h.current,
						p = t.current;
					return Object(c.useEffect)(() => {
						p && b && (b.ondragleave = Object(u.b)(() => {
							s && (l(!1), a(Object(d.h)({
								isOver: !1,
								isDrop: !1
							})))
						}), p.ondragenter = Object(u.b)(() => {
							s || (l(!0), a(Object(d.h)({
								isOver: !0,
								isDrop: !1
							})))
						}), p.ondragover = Object(u.b)(), p.ondrop = Object(u.b)(e => {
							var t, c;
							if (s) {
								l(!1);
								const n = !!(null === (t = null == e ? void 0 : e.dataTransfer) || void 0 === t ? void 0 : t.files.length);
								a(Object(d.h)({
									isOver: !1,
									isDrop: n
								}))
							}(null === (c = null == e ? void 0 : e.dataTransfer) || void 0 === c ? void 0 : c.files.length) && n(e.dataTransfer.files, e)
						}))
					}), r.a.createElement("div", {
						ref: h,
						className: Object(i.a)(m.a.FileDrop, {
							[m.a.isOver]: s
						})
					})
				},
				p = n("./src/chat/controls/Svg/index.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var f = e => r.a.createElement(p.a, g({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("path", {
					d: "M18.859 3.712A2.611 2.611 0 0 0 17 2.939h-2.182l-1.163-1.6a1.128 1.128 0 0 0-.91-.464h-5.49a1.13 1.13 0 0 0-.91.463l-1.163 1.6H3A2.629 2.629 0 0 0 .375 5.563V15.5A2.629 2.629 0 0 0 3 18.125h13.969a2.63 2.63 0 0 0 2.624-2.616l.031-9.936a2.609 2.609 0 0 0-.765-1.861ZM18.343 15.5a1.378 1.378 0 0 1-1.374 1.371H3A1.377 1.377 0 0 1 1.625 15.5V5.563A1.377 1.377 0 0 1 3 4.188h2.818l1.5-2.063h5.364l1.5 2.063H17a1.374 1.374 0 0 1 1.374 1.38Z"
				}), r.a.createElement("path", {
					d: "M10 5.375A4.625 4.625 0 1 0 14.625 10 4.631 4.631 0 0 0 10 5.375Zm0 8A3.375 3.375 0 1 1 13.375 10 3.379 3.379 0 0 1 10 13.375Z"
				})),
				O = n("./src/chat/components/FileUploader/ImageInput/index.m.less"),
				v = n.n(O);
			var E = e => r.a.createElement("label", {
					className: e.className,
					tabIndex: 0
				}, e.children ? e.children : r.a.createElement(f, {
					className: v.a.Icon
				}), r.a.createElement("input", {
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
					className: v.a.Input
				})),
				j = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/chat/actions/toast.ts")),
				_ = n("./src/chat/models/Uploads/index.ts"),
				C = n("./src/chat/selectors/channels.ts"),
				I = n("./src/chat/selectors/uploads.ts");
			const {
				ActiveFilesLimitExceeded: y,
				UnsupportedBrowser: x,
				InvalidMediaType: S,
				FileSizeLimitExceeded: N
			} = _.a, w = new Set(Object.values(_.d)), k = e => {
				const t = (e => {
						if (window.URL && window.URL.createObjectURL) return window.URL.createObjectURL(e)
					})(e),
					n = (e => {
						if (!e) return;
						const t = e.replace("image/", "").toUpperCase();
						return w.has(t) ? t : null
					})(e.type),
					a = e.size;
				return t ? n ? n === _.d.GIF && a > 41943040 ? {
					error: N
				} : a > 20971520 ? {
					error: N
				} : {
					metadata: {
						localUrl: t,
						mimetype: n,
						size: a
					}
				} : {
					error: S
				} : {
					error: x
				}
			};
			var T = () => {
				const e = Object(o.d)(),
					{
						isOver: t,
						isDrop: n
					} = Object(o.e)(I.a),
					a = Object(o.e)(I.b),
					s = Object(o.e)(C.o),
					c = a.length >= 8;
				return {
					uploads: a,
					isDrop: n,
					isOver: t,
					isLimited: c,
					setFiles: (t, n) => {
						if (c) return void e(Object(j.f)([y]));
						let {
							activeUploads: r,
							errors: o
						} = ((e, t) => {
							const n = [];
							return {
								activeUploads: [...e].map(e => {
									const {
										error: a,
										metadata: s
									} = k(e);
									return a && n.push(a), s && Object(_.e)(e, s, t)
								}).filter(e => e),
								errors: n
							}
						})(t, n);
						const i = 8 - (r.length + a.length);
						i < 0 && (r = r.splice(0, i), o = o.push(y) && o || []), s && r.length ? r.forEach(t => (e => new Promise(t => {
							const n = new Image;
							n.onerror = () => t({}), n.onload = () => t({
								height: n.height,
								width: n.width
							}), n.src = e
						}))(t.metadata.localUrl).then(n => {
							let {
								height: a,
								width: c
							} = n;
							t.metadata.height = a, t.metadata.width = c, e(Object(d.f)({
								upload: t,
								channelId: s
							}))
						})) : o.length && e(Object(j.f)(o))
					}
				}
			};

			function M(e) {
				const t = Object(o.d)(),
					{
						setFiles: n
					} = T();
				return r.a.createElement(b, {
					dropZoneRef: e.dropZoneRef,
					onChange: e => {
						n(e, _.b.Drop), t(Object(l.I)(e.length))
					}
				})
			}

			function A(e) {
				const t = Object(o.d)(),
					{
						setFiles: n
					} = T();
				return r.a.createElement(E, {
					className: e.className,
					onChange: e => {
						n(e, _.b.Gallery), t(Object(l.v)())
					}
				}, e.children)
			}
			var L = n("./src/chat/actions/liveChat/index.ts"),
				D = n("./src/chat/components/OverlayNav/index.tsx"),
				U = n("./src/chat/selectors/liveChat/index.ts"),
				P = n("./src/chat/components/LiveChatIframe/index.m.less"),
				R = n.n(P),
				B = n("./src/chat/selectors/experiments.ts"),
				H = n("./node_modules/lodash/noop.js"),
				F = n.n(H),
				G = n("./src/realtime/GQLSubscription/async.tsx");
			var V = e => {
					let {
						postId: t
					} = e;
					var n;
					const [a, s] = Object(c.useState)(!0), i = Object(o.d)(), d = Object(o.e)(e => Object(U.c)(e, t)), u = Object(c.useMemo)(() => ({
						input: {
							channel: {
								teamOwner: "CONTENT_AND_COMMUNITIES",
								postID: t,
								category: "USER_IS_READING_POST"
							}
						}
					}), [t]), h = Object(o.e)(B.t);
					if (Object(c.useEffect)(() => {
							s(!0);
							const e = t;
							return () => {
								i(Object(L.createLiveChatAssociation)(e))
							}
						}, [i, t]), !d) return null;
					return r.a.createElement("div", {
						className: R.a.Container
					}, a ? r.a.createElement("div", {
						className: R.a.LoaderWrapper
					}, r.a.createElement("i", {
						className: `icon icon-load ${R.a.LoaderIcon}`
					})) : null, r.a.createElement(D.a, {
						title: null !== (n = d.post.title) && void 0 !== n ? n : "",
						showMenu: !0
					}), h && r.a.createElement(G.a, {
						variables: u,
						onData: F.a,
						queryKey: "userIsReadingPost"
					}), r.a.createElement("iframe", {
						key: t,
						className: R.a.Iframe,
						src: `${d.post.permalink}?livechat_embed=true`,
						onLoad: () => {
							i(Object(l.qb)(d.post.id)), s(!1)
						}
					}))
				},
				W = n("./node_modules/lodash/debounce.js"),
				z = n.n(W),
				K = n("./node_modules/lodash/map.js"),
				q = n.n(K),
				Z = n("./node_modules/lodash/sortBy.js"),
				Q = n.n(Z),
				Y = n("./src/chat/actions/channel.ts"),
				X = n("./src/chat/actions/container.ts"),
				J = n("./src/chat/actions/message/index.ts"),
				$ = n("./src/chat/actions/message/inboxScroller.ts"),
				ee = n("./src/chat/actions/message/richUnit.ts"),
				te = n("./src/chat/constants/channels.ts"),
				ne = n("./src/chat/icons/svgs/InfoIcon/index.tsx"),
				ae = n("./src/chat/components/BlockedUserPrompt/index.m.less"),
				se = n.n(ae);
			const {
				fbt: ce
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var re = e => {
					let {
						hasJoinedChat: t,
						channelState: n
					} = e;
					return r.a.createElement("span", {
						className: se.a.blockedUserMessage
					}, n === te.b.JOINED && r.a.createElement("span", {
						className: se.a.iconWrapper
					}, r.a.createElement(ne.a, {
						className: se.a.infoIcon,
						isFilled: !0
					}), ce._("Only visible to you", null, {
						hk: "1KPOVD"
					})), t ? ce._("An account you blocked just joined this chat. Stay and see each other's messages and activity or silently leave.", null, {
						hk: "1Wr2Y0"
					}) : ce._("An account you blocked is in the chat. Stay and see each other's messages and activity or silently leave.", null, {
						hk: "4oHZil"
					}))
				},
				oe = n("./src/chat/models/Channel/index.ts");
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var le = e => {
					let {
						channel: t
					} = e;
					const n = t.type === oe.b.Direct,
						a = t.members.filter(e => e.isBlockedByMe);
					if (n) {
						const e = null == a ? void 0 : a[0];
						if (e) return r.a.createElement("span", {
							className: se.a.blockedUserMessage
						}, ie._("@{name} blocked", [ie._param("name", null == e ? void 0 : e.name)], {
							hk: "wJJtg"
						}))
					} else {
						if (t.members.filter(e => e.state === oe.f.Joined && e.isBlockedByMe).length) return r.a.createElement(re, {
							hasJoinedChat: !0,
							channelState: t.channelState
						});
						if (null == a ? void 0 : a.length) return r.a.createElement(re, {
							hasJoinedChat: !1,
							channelState: t.channelState
						})
					}
					return null
				},
				de = n("./src/chat/controls/Button/index.tsx"),
				ue = n("./src/chat/icons/svgs/Close/index.tsx");

			function he() {
				return (he = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var me = e => r.a.createElement(p.a, he({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("g", {
					id: "icons_flat"
				}, r.a.createElement("polygon", {
					points: "19,9 11,9 11,1 9,1 9,9 1,9 1,11 9,11 9,19 11,19 11,11 19,11"
				}))),
				be = n("./src/chat/components/FileUploader/FilePreview/index.m.less"),
				pe = n.n(be);
			var ge = () => {
					const e = Object(o.d)(),
						{
							uploads: t,
							isDrop: n,
							isOver: a,
							isLimited: s
						} = T(),
						c = Object(o.e)(C.M),
						l = t.map(t => r.a.createElement("div", {
							className: pe.a.Item,
							key: `item-${t.metadata.localUrl}`
						}, r.a.createElement(de.d, {
							className: pe.a.CloseButton,
							onClick: () => e(Object(d.g)(t.id))
						}, r.a.createElement(ue.a, null)), r.a.createElement("img", {
							className: pe.a.Image,
							src: t.metadata.localUrl,
							key: `image-${t.metadata.localUrl}`
						}))),
						u = (a || n || l.length) && !s || s && a ? r.a.createElement(A, {
							className: Object(i.a)(pe.a.Placeholder, {
								[pe.a.isLimited]: s
							}),
							key: "item-placeholder"
						}, r.a.createElement(me, {
							className: pe.a.Icon
						})) : null;
					return !l && !u || c ? null : r.a.createElement("div", {
						className: pe.a.Preview
					}, l, u)
				},
				fe = n("./node_modules/fbt/lib/FbtPublic.js"),
				Oe = n("./src/chat/actions/channel/dropdown.ts"),
				ve = n("./src/chat/actions/inviteLink/index.ts"),
				Ee = n("./src/chat/icons/svgs/InviteMember/index.tsx"),
				je = n("./src/chat/icons/svgs/Link/index.tsx"),
				_e = n("./src/chat/icons/svgs/Profile/index.tsx"),
				Ce = n("./src/chat/icons/Userpic/index.tsx"),
				Ie = n("./src/chat/components/Intro/index.m.less"),
				ye = n.n(Ie);
			var xe = e => {
					let {
						users: t,
						channel: n
					} = e;
					const a = Object(o.d)(),
						s = Object(o.e)(B.h);
					return r.a.createElement("span", {
						className: ye.a.Wrapper
					}, r.a.createElement("ul", {
						className: ye.a.Users
					}, t.map((e, t, n) => r.a.createElement("li", {
						className: ye.a.User,
						key: e.id
					}, r.a.createElement(Ce.a, {
						height: "16px",
						width: "16px",
						userId: e.id
					}), r.a.createElement("span", {
						className: ye.a.UserTitle
					}, `${e.name}${t<n.length-1?",":""}`)))), n.type === oe.b.Group && r.a.createElement("div", {
						className: ye.a.IconButtons
					}, s && r.a.createElement(de.b, {
						className: ye.a.IconButton,
						text: fe.fbt._("Copy link", null, {
							hk: "2Aapc1"
						}),
						onClick: () => {
							(null == n ? void 0 : n.channelId) && a(Object(ve.e)(n.channelId))
						}
					}, r.a.createElement(je.a, null)), r.a.createElement(de.b, {
						className: ye.a.IconButton,
						text: fe.fbt._("Members", null, {
							hk: "3IBb8c"
						}),
						onClick: () => {
							a(Object(Oe.k)())
						}
					}, r.a.createElement(_e.a, null)), r.a.createElement(de.b, {
						className: ye.a.IconButton,
						text: fe.fbt._("Invite", null, {
							hk: "3DLcPk"
						}),
						onClick: () => {
							a(Object(Oe.c)())
						}
					}, r.a.createElement(Ee.a, null))))
				},
				Se = n("./node_modules/lodash/throttle.js"),
				Ne = n.n(Se),
				we = n("./src/chat/actions/channel/draftMessage.ts"),
				ke = n("./src/chat/actions/gifs/index.ts");
			const Te = "/";
			var Me = n("./node_modules/react-router-redux/es/index.js"),
				Ae = n("./src/lib/constants/index.ts"),
				Le = n("./src/telemetry/models/Event.ts"),
				De = n("./src/chat/actions/tooltip.ts"),
				Ue = n("./src/chat/components/MessageInput/constants.ts"),
				Pe = n("./src/chat/constants/messages.ts"),
				Re = n("./src/chat/icons/Snoo/index.tsx");
			const Be = function(e, t) {
					let n = "",
						a = 0,
						s = t,
						c = t;
					const r = e.charAt(t - 1);
					if (!/\s|\n|\r/g.test(r)) {
						const r = e.replace(/[\n]/gm, " ");
						a = r.substring(0, t).split(/\s/).length - 1;
						const o = new RegExp(`^(?:[^ ]* ){${a}}([^ |\n]*)`, "g").exec(r) || [],
							i = o && o[0] || "";
						n = o && o[1] || "", s = i.length - n.length, c = i.length
					}
					return {
						word: n,
						count: a,
						posStart: s,
						posEnd: c
					}
				},
				He = function(e) {
					return (/^(@|u\/)([^\s]+)/g.exec(e) || [])[2] || ""
				},
				Fe = function(e, t) {
					const {
						word: n
					} = Be(e, t);
					return {
						hasUsername: /^(@|u\/)([^\s]+)?$/g.test(n),
						username: He(n)
					}
				},
				Ge = function(e, t, n) {
					const {
						word: a,
						posStart: s,
						posEnd: c
					} = Be(e, n), r = (/^(@|u\/)/gm.exec(a) || [])[1];
					if (!a) return {
						textUpdate: e,
						posEndUpdate: c
					};
					const o = r + t,
						{
							text: i,
							posEnd: l
						} = function(e, t, n, a) {
							const s = e.substring(0, n),
								c = s + t;
							return {
								text: c + e.substring(a),
								posStart: s.length,
								posEnd: c.length
							}
						}(e, o, s, c);
					return {
						textUpdate: i,
						posEndUpdate: l
					}
				},
				Ve = e => Boolean(e.match(/^(\/)(\w+)?$/g));
			var We, ze = n("./src/chat/constants/users.ts"),
				Ke = n("./src/chat/endpoints/accounts/index.ts"),
				qe = n("./src/chat/endpoints/sendbird/index.ts"),
				Ze = n("./src/chat/helpers/urls/index.ts"),
				Qe = n("./src/chat/models/Channel/utils.ts"),
				Ye = n("./src/chat/models/Contact/index.ts"),
				Xe = n("./src/chat/selectors/contacts.ts");
			! function(e) {
				e.GIF = "gif", e.SNOOMOJI = "snoomoji", e.INVITE = "invite", e.MEMBERS = "members", e.MUTE = "mute", e.UNMUTE = "unmute", e.LEAVE = "leave", e.KICK = "kick", e.NEW_CHAT = "new_chat", e.DIRECT = "direct", e.TEXT_EMOJI = "text_emoji"
			}(We || (We = {}));
			const {
				Group: Je
			} = oe.b, $e = {
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
			}, et = e => {
				let {
					commandValue: t,
					channelId: n
				} = e;
				return async (e, a, s) => {
					let {
						apiContext: c
					} = s;
					const r = a(),
						{
							user: {
								session: o
							}
						} = r;
					if (n && t && o) {
						const e = Object(C.i)(a(), n);
						if ((null == e ? void 0 : e.type) === oe.b.Group) {
							if (t === Ae.H) return;
							let e = [];
							const s = Object(Xe.c)(a(), t);
							if (s) e = [{
								user_id: s.id,
								nickname: s.name
							}];
							else {
								const n = await Object(Ke.b)(c(), t);
								if (n.ok) {
									const t = Object(Ye.e)(n.body.data);
									t && (e = [{
										user_id: t.id,
										nickname: t.name
									}])
								}
							}
							e.length && await Object(qe.j)(c(), o, e, Object(Qe.a)(n))
						}
					}
				}
			}, tt = e => {
				let {
					channelId: t,
					commandShortcut: n
				} = e;
				return async e => {
					if (t && n) {
						const a = $e[n];
						a && e(Object(J.r)(t, a, Pe.c.TEXT))
					}
				}
			}, nt = [{
				name: We.GIF,
				command: "giphy",
				aliases: ["gif", "g"],
				description: "Giphy",
				example: "/giphy query · /gif query · /g query",
				action: e => {
					let {
						commandValue: t
					} = e;
					return async e => {
						t && e(Object(ke.l)(t)), e(Object(De.c)({
							tooltipId: Ue.b
						}))
					}
				}
			}, {
				name: We.SNOOMOJI,
				command: "snoomoji",
				aliases: ["s"],
				description: "Add a snoomoji",
				example: "/snoomoji name · /s name",
				action: e => {
					let {
						commandValue: t,
						channelId: n
					} = e;
					return async e => {
						t && n && Re.b.includes(t) ? e(Object(J.r)(n, t.trim(), Pe.c.SNOOMOJI)) : e(Object(De.c)({
							tooltipId: Ue.e
						}))
					}
				}
			}, {
				name: We.INVITE,
				command: "invite",
				description: "Invite",
				example: "/invite username",
				channelType: Je,
				action: et
			}, {
				name: We.MEMBERS,
				command: "members",
				channelType: Je,
				aliases: ["m"],
				description: "Display group chat's member list",
				example: "/members · /m",
				action: e => {
					let {
						channelId: t
					} = e;
					return async (e, n) => {
						if (t) {
							const a = Object(C.i)(n(), t);
							(null == a ? void 0 : a.type) === oe.b.Group && e(Object(Oe.k)())
						}
					}
				}
			}, {
				name: We.MUTE,
				command: "mute",
				description: "Mute this chat",
				action: () => async (e, t) => {
					e(Object(Oe.e)())
				}
			}, {
				name: We.UNMUTE,
				command: "unmute",
				description: "Unmute this chat",
				action: e => {
					let {
						channelId: t
					} = e;
					return async (e, t) => {
						e(Object(Oe.g)())
					}
				}
			}, {
				name: We.LEAVE,
				command: "leave",
				description: "Leave this chat",
				action: e => {
					let {
						channelId: t
					} = e;
					return async (e, n) => {
						t && e(Object(Y.H)(t))
					}
				}
			}, {
				name: We.KICK,
				command: "kick",
				description: "Kick a user from this chat",
				channelType: Je,
				example: "/kick u/username",
				action: e => {
					let {
						commandValue: t,
						channelId: n
					} = e;
					return async (e, a, s) => {
						let {
							apiContext: c
						} = s;
						const r = a(),
							{
								user: {
									session: o
								}
							} = r;
						if (!Object(C.a)(r)) return;
						const i = He(t);
						if (n && i && o) {
							const t = Object(C.i)(a(), n);
							if ((null == t ? void 0 : t.type) === oe.b.Group) {
								if (i === Ae.H) return;
								let t;
								const s = Object(Xe.c)(a(), i);
								if (s) t = s.id;
								else {
									const e = await Object(Ke.b)(c(), i);
									if (e.ok) {
										const n = Object(Ye.e)(e.body.data);
										n && (t = n.id)
									}
								}
								t && e(Object(Me.b)(Object(Ze.userActionUrl)(n, t, ze.a.Kick, {
									source: Le.b.ChatView
								})))
							}
						}
					}
				}
			}, {
				name: We.NEW_CHAT,
				command: "new",
				description: "Start new chat",
				action: () => async e => {
					const t = Object(Ze.getRedirectURL)(Object(Ze.channelUrl)("create"));
					e(Object(Me.b)(t))
				}
			}, {
				name: We.DIRECT,
				command: "dm",
				description: "Direct message someone in this chat",
				example: "/dm u/username",
				action: e => {
					let {
						commandValue: t
					} = e;
					return async (e, n) => {
						if (!t) return;
						const a = Object(C.s)(n(), t);
						if (a) {
							const t = Object(Ze.getRedirectURL)(Object(Ze.channelUrl)(a.channelId));
							e(Object(Me.b)(t))
						} else e(et({
							commandValue: t
						}))
					}
				}
			}, ...Object.keys($e).map(e => ({
				name: We.TEXT_EMOJI,
				command: e,
				description: $e[e],
				action: tt
			}))], at = (e, t) => async n => {
				nt.forEach(async a => {
					var s;
					const c = (e => {
							const t = e.map(e => `${Te}${e}`).join("|");
							return new RegExp(`^(${t})?(\\s.+)?$`, "i")
						})([...(null === (s = a.aliases) || void 0 === s ? void 0 : s.length) ? a.aliases : [], a.command]),
						r = e.match(c);
					if (null == r ? void 0 : r.length) {
						const e = r[1].replace("/", "");
						n(Object(l.Y)(e));
						const s = r[2];
						await n(a.action({
							commandValue: null == s ? void 0 : s.trim(),
							channelId: t,
							commandShortcut: e
						})), n(Object(we.f)(t))
					}
				})
			};
			var st = n("./src/chat/actions/surveyTrigger/index.ts"),
				ct = n("./src/higherOrderComponents/asTooltip.tsx"),
				rt = n("./src/chat/components/Scroller/index.tsx"),
				ot = n("./src/chat/constants/page.ts"),
				it = n("./src/chat/controls/Dropdown/index.tsx"),
				lt = n("./src/chat/selectors/app.ts"),
				dt = n("./src/chat/selectors/tooltip.ts"),
				ut = n("./src/chat/components/MessageTooltip/index.m.less"),
				ht = n.n(ut);
			const mt = "MessageInputTooltip--Container",
				bt = 15,
				pt = Object(ct.a)(it.a),
				gt = e => {
					let {
						children: t
					} = e;
					return r.a.createElement("div", {
						className: ht.a.Picker
					}, t)
				};
			var ft = e => {
				let {
					id: t,
					isOpen: n,
					children: a,
					arrowOffset: s = bt,
					shouldArrowShow: c = !0
				} = e;
				const l = Object(o.e)(Object(dt.b)(t)),
					d = Object(o.d)();
				return r.a.createElement(pt, {
					className: Object(i.a)(ht.a.Dropdown, {
						[ht.a.noArrow]: !c
					}),
					tooltipId: mt,
					container: document.getElementById(ot.a),
					isOpen: n || l,
					targetPosition: ["left", "bottom"],
					excludeContainerPosition: !0,
					closeOnClickOutside: !0,
					isOverlayOff: !0,
					style: {
						top: "unset",
						left: "unset",
						right: "358px",
						bottom: c ? "70px" : "50px"
					}
				}, r.a.createElement("div", {
					className: ht.a.DropdownWrapper,
					onClick: () => d(Object(De.d)())
				}, r.a.createElement(gt, null, a, c && r.a.createElement("span", {
					className: ht.a.Arrow,
					style: {
						right: `${s}px`
					}
				}))))
			};
			var Ot = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				vt = n("./src/chat/controls/Gif/index.tsx");

			function Et() {
				return (Et = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var jt = e => r.a.createElement(p.a, Et({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? r.a.createElement("path", {
					d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375Zm3.53,12.1-1.06,1.06L10,11.061,7.53,13.53,6.47,12.47,8.939,10,6.47,7.53,7.53,6.47,10,8.939,12.47,6.47l1.06,1.06L11.061,10Z"
				}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("path", {
					d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375Zm0,18A8.375,8.375,0,1,1,18.375,10,8.384,8.384,0,0,1,10,18.375Z"
				}), r.a.createElement("polygon", {
					points: "12.558 6.558 10 9.116 7.442 6.558 6.558 7.442 9.116 10 6.558 12.558 7.442 13.442 10 10.884 12.558 13.442 13.442 12.558 10.884 10 13.442 7.442 12.558 6.558"
				}))),
				_t = n("./src/chat/icons/svgs/Search/index.tsx"),
				Ct = n("./src/chat/selectors/gifs.ts"),
				It = n("./src/chat/components/MessageTooltip/Picker/Gif/index.m.less"),
				yt = n.n(It);
			const xt = e => {
					let {
						children: t
					} = e;
					const n = Object(o.e)(lt.g);
					return r.a.createElement("div", {
						className: Object(i.a)(yt.a.Wrapper, {
							[yt.a.embedded]: n
						})
					}, t)
				},
				St = e => {
					let {
						children: t,
						isVisible: n,
						onClick: a
					} = e;
					return n ? r.a.createElement("div", {
						className: yt.a.ClearIcon,
						onClick: a
					}, t) : null
				},
				Nt = () => {
					const e = Object(o.e)(Ct.b),
						[t, n] = Object(c.useState)(() => e),
						a = Object(c.useRef)(null),
						s = Object(o.d)(),
						i = Object(c.useCallback)(z()(e => {
							(null == e ? void 0 : e.length) >= 2 ? s(Object(ke.k)(10, e)) : s(Object(ke.l)(""))
						}, 500), []);
					return Object(c.useEffect)(() => {
						var e;
						null === (e = null == a ? void 0 : a.current) || void 0 === e || e.focus()
					}, [a]), r.a.createElement("div", {
						className: yt.a.SearchBarWrapper,
						onClick: e => e.stopPropagation()
					}, r.a.createElement(_t.a, {
						className: yt.a.SearchIcon
					}), r.a.createElement("input", {
						className: yt.a.SearchBar,
						ref: a,
						value: t,
						placeholder: fe.fbt._("Search", null, {
							hk: "3ixhgZ"
						}),
						tabIndex: 0,
						onChange: e => {
							(e => {
								n(e), i(e)
							})(e.currentTarget.value)
						}
					}), r.a.createElement(St, {
						onClick: async () => {
							(null == a ? void 0 : a.current) && (await s(Object(ke.l)("")), n(""), a.current.focus(), s(Object(ke.j)(20)))
						},
						isVisible: Boolean(t)
					}, r.a.createElement(jt, null)))
				},
				wt = e => {
					let {
						onPickGif: t
					} = e;
					const n = Object(o.d)(),
						a = Object(o.e)(Ct.a),
						s = Object(o.e)(Ct.d),
						i = Object(c.useRef)(null),
						l = Object(o.e)(Ct.b),
						d = Object(o.e)(Ct.c),
						u = Object(o.e)(Ct.f),
						h = e => {
							t(e)
						};
					Object(c.useEffect)(() => {
						var e;
						(null === (e = null == i ? void 0 : i.current) || void 0 === e ? void 0 : e.scrollToTop) && i.current.scrollToTop()
					}, [l]), Object(c.useEffect)(() => {
						(null == a ? void 0 : a.length) || l || n(Object(ke.j)(20)), l && n(Object(ke.k)(10, l))
					}, []);
					const m = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						return (null == a ? void 0 : a.length) ? a.map((t, n) => {
							if (Boolean(n % 2) === e) return r.a.createElement(vt.a, {
								className: yt.a.Gif,
								source: t.fixed_width.url,
								key: t.id,
								height: t.fixed_width.dimensions.height,
								title: t.title,
								isPreview: !0,
								onClick: () => h(t)
							})
						}) : null
					};
					return r.a.createElement(rt.a, {
						className: yt.a.GifListWrapper,
						ref: i,
						loadMoreRows: () => n(Object(ke.k)(10, l)),
						isLoadMoreRowsComplete: (() => !!s) || d
					}, r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: yt.a.Column
					}, m(), u ? Object(Ot.c)({
						height: Ot.f.XS
					}) : s ? Object(Ot.a)(Ot.b.FIRST) : null), r.a.createElement("div", {
						className: yt.a.Column
					}, m(!0), u ? Object(Ot.c)({
						height: Ot.f.S
					}) : null, s && !u ? Object(Ot.a)(Ot.b.SECOND) : null)))
				};
			var kt = e => {
					let {
						onPickGif: t
					} = e;
					return r.a.createElement(xt, null, r.a.createElement(Nt, null), r.a.createElement(wt, {
						onPickGif: t
					}))
				},
				Tt = n("./src/config.ts"),
				Mt = n("./src/chat/icons/svgs/ChatNew/index.tsx"),
				At = n("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				Lt = n("./src/chat/icons/svgs/EnableNotifications/index.tsx");

			function Dt() {
				return (Dt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ut = e => r.a.createElement(p.a, Dt({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? r.a.createElement("path", {
				d: "M10 .875A9.125 9.125 0 1019.125 10 9.135 9.135 0 0010 .875zM11.107 15a1.242 1.242 0 01-.465.462 1.342 1.342 0 01-1.3 0 1.236 1.236 0 01-.465-.465 1.287 1.287 0 01-.167-.65 1.306 1.306 0 01.167-.653 1.251 1.251 0 01.465-.471 1.27 1.27 0 01.653-.175 1.253 1.253 0 01.649.175A1.322 1.322 0 0111.107 15zm1.781-6.251a2.423 2.423 0 01-.407.646 8.565 8.565 0 01-.629.615q-.335.3-.53.513A1.922 1.922 0 0011 11a1.375 1.375 0 00-.13.6v.6H9.049v-.574a2.411 2.411 0 01.181-.963 2.479 2.479 0 01.435-.694 7.663 7.663 0 01.663-.632q.287-.254.454-.421a1.56 1.56 0 00.277-.372.93.93 0 00.109-.445.856.856 0 00-.15-.5 1.029 1.029 0 00-.407-.346 1.262 1.262 0 00-.564-.127 1.314 1.314 0 00-.608.145 1.153 1.153 0 00-.448.4 1.035 1.035 0 00-.174.566H6.93a2.887 2.887 0 01.417-1.486 2.822 2.822 0 011.118-1.042 3.441 3.441 0 011.63-.377 3.483 3.483 0 011.518.322 2.535 2.535 0 011.059.9 2.331 2.331 0 01.383 1.318 2.136 2.136 0 01-.167.875z"
			}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("path", {
				d: "M10 .875A9.125 9.125 0 1019.125 10 9.135 9.135 0 0010 .875zm0 17A7.875 7.875 0 1117.875 10 7.884 7.884 0 0110 17.875z"
			}), r.a.createElement("path", {
				d: "M10.479 13.635a1.085 1.085 0 00-.547-.141 1.035 1.035 0 00-.537.145 1.009 1.009 0 00-.379.388 1.1 1.1 0 00-.137.547 1.018 1.018 0 00.143.533 1.045 1.045 0 00.387.38 1.056 1.056 0 00.536.14 1.076 1.076 0 00.54-.14 1.008 1.008 0 00.387-.385 1.08 1.08 0 00.14-.541 1.05 1.05 0 00-.533-.926zM11.507 5.641a3.213 3.213 0 00-1.425-.309 3.15 3.15 0 00-1.535.368 2.646 2.646 0 00-1.028.974 2.52 2.52 0 00-.363 1.312h1.463a1.172 1.172 0 01.181-.661 1.327 1.327 0 01.516-.468 1.623 1.623 0 011.415-.017 1.212 1.212 0 01.5.431 1.1 1.1 0 01.181.618 1.063 1.063 0 01-.119.5 1.56 1.56 0 01-.3.4 9.531 9.531 0 01-.492.43 6.846 6.846 0 00-.656.585 2.292 2.292 0 00-.431.656 2.206 2.206 0 00-.178.919v.766h1.429v-.793a1.281 1.281 0 01.13-.58 1.824 1.824 0 01.321-.459c.128-.132.3-.3.533-.493a7.691 7.691 0 00.633-.584 2.279 2.279 0 00.41-.622 2.015 2.015 0 00.167-.85A2.262 2.262 0 0012.5 6.5a2.41 2.41 0 00-.993-.859z"
			})));

			function Pt() {
				return (Pt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Rt = e => r.a.createElement(p.a, Pt({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("path", {
					d: "M16.8,3.2A9.62,9.62,0,0,0,.491,8.5a9.506,9.506,0,0,0,1.146,6.237L.453,18.647a.726.726,0,0,0,.9.9l3.99-1.143a9.483,9.483,0,0,0,4.652,1.218,9.841,9.841,0,0,0,1.553-.124A9.62,9.62,0,0,0,16.8,3.2Zm1.464,8.176a8.414,8.414,0,0,1-6.919,6.9A8.3,8.3,0,0,1,5.74,17.2l-.232-.138L1.93,18.084l1.063-3.512-.144-.239a8.28,8.28,0,0,1-1.123-5.64,8.378,8.378,0,1,1,16.54,2.678Z"
				}), r.a.createElement("path", {
					d: "M10,5.375A4.625,4.625,0,1,0,14.625,10,4.631,4.631,0,0,0,10,5.375ZM6.625,10a3.354,3.354,0,0,1,.59-1.9L11.9,12.785A3.371,3.371,0,0,1,6.625,10Zm6.16,1.9L8.1,7.215A3.371,3.371,0,0,1,12.785,11.9Z"
				})),
				Bt = n("./src/chat/icons/svgs/Leave/index.tsx");

			function Ht() {
				return (Ht = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ft = e => r.a.createElement(p.a, Ht({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? r.a.createElement(r.a.Fragment, null, r.a.createElement("rect", {
					x: "7",
					y: "9",
					width: "12",
					height: "2"
				}), r.a.createElement("rect", {
					x: "7",
					y: "3",
					width: "12",
					height: "2"
				}), r.a.createElement("rect", {
					x: "7",
					y: "15",
					width: "12",
					height: "2"
				}), r.a.createElement("circle", {
					cx: "3",
					cy: "4",
					r: "2"
				}), r.a.createElement("circle", {
					cx: "3",
					cy: "10",
					r: "2"
				}), r.a.createElement("circle", {
					cx: "3",
					cy: "16",
					r: "2"
				})) : r.a.createElement(r.a.Fragment, null, r.a.createElement("rect", {
					x: "7",
					y: "9.375",
					width: "12",
					height: "1.25"
				}), r.a.createElement("rect", {
					x: "7",
					y: "3.375",
					width: "12",
					height: "1.25"
				}), r.a.createElement("rect", {
					x: "7",
					y: "15.375",
					width: "12",
					height: "1.25"
				}), r.a.createElement("circle", {
					cx: "3",
					cy: "4",
					r: "1.5"
				}), r.a.createElement("circle", {
					cx: "3",
					cy: "10",
					r: "1.5"
				}), r.a.createElement("circle", {
					cx: "3",
					cy: "16",
					r: "1.5"
				}))),
				Gt = n("./src/chat/icons/svgs/Smile/index.tsx");

			function Vt() {
				return (Vt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Wt = e => r.a.createElement(p.a, Vt({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? r.a.createElement("path", {
					d: "M16.64 6.9a2.841 2.841 0 00-1.308.316 10.363 10.363 0 00-4.618-1.341l.743-4.123 2.422.515a1.493 1.493 0 10.2-1.235L11.59.5a1.124 1.124 0 00-1.34.9l-.8 4.459a10.371 10.371 0 00-4.787 1.356 2.859 2.859 0 00-3.108 4.763v.042c0 3.409 3.786 6.18 8.445 6.18s8.441-2.773 8.441-6.182v-.035A2.859 2.859 0 0016.64 6.9z"
				}) : r.a.createElement("path", {
					d: "M19.769 9.086a3.189 3.189 0 00-3.129-2.56 2.933 2.933 0 00-1.276.29 10.781 10.781 0 00-4.74-1.326l.811-3.742 2.444.52a1.493 1.493 0 10.2-1.235L11.573.5a1.126 1.126 0 00-1.333.862L9.344 5.5a10.742 10.742 0 00-4.693 1.3A3.179 3.179 0 00.235 9.074a3.228 3.228 0 00-.017 1.18 3.1 3.1 0 00.9 1.7l.057.06v.108c.071 3.618 3.943 6.452 8.815 6.452s8.74-2.831 8.814-6.433v-.122l.037-.037a3.136 3.136 0 00.929-1.725 3.218 3.218 0 00-.001-1.171zm-1.221.957a1.9 1.9 0 01-.571 1.049l-.391.4-.026.615c-.06 2.928-3.382 5.222-7.564 5.222s-7.507-2.3-7.565-5.239l-.024-.59L2 11.072a1.87 1.87 0 01-.552-1.03 2 2 0 01.01-.723 1.926 1.926 0 012.88-1.269l.332.209L5 8.05a9.385 9.385 0 014.67-1.331h.706a9.4 9.4 0 014.64 1.348l.342.217.342-.224a1.694 1.694 0 01.941-.284 1.935 1.935 0 011.9 1.55 1.964 1.964 0 01.007.717z"
				})),
				zt = n("./src/chat/components/MessageTooltip/Picker/SlashCommandList/index.m.less"),
				Kt = n.n(zt);
			var qt = e => {
					let {
						channelId: t,
						inputCommand: n,
						bindArrowDown: a,
						bindArrowUp: s,
						onSelectCommand: l,
						onPickCommand: d,
						unbindListeners: u
					} = e;
					const h = Object(o.e)(e => Object(C.m)(e, t)),
						m = Object(o.e)(lt.g),
						[b, p] = Object(c.useState)(0),
						g = Object(c.useMemo)(() => {
							return nt.filter(e => !e.channelType || e.channelType === h).filter(e => {
								var t;
								return [...(null === (t = e.aliases) || void 0 === t ? void 0 : t.length) ? e.aliases : [], e.command].join("").includes(n)
							})
						}, [h, n]),
						f = Object(c.useCallback)(e => {
							p(e => Math.max(e - 1, 0)), e.preventDefault(), e.stopPropagation()
						}, []),
						O = Object(c.useCallback)(e => {
							p(e => Math.min(e + 1, g.length - 1)), e.preventDefault(), e.stopPropagation()
						}, [g]),
						v = Object(c.useMemo)(() => {
							var e;
							return g.length ? l(null === (e = g[b]) || void 0 === e ? void 0 : e.command) : l(""), g.length ? r.a.createElement("div", {
								className: Kt.a.Command
							}, g.map((e, t) => r.a.createElement("button", {
								className: Object(i.a)(Kt.a.CommandItem, {
									[Kt.a.selected]: b === t
								}),
								key: e.command,
								onClick: () => d(e.command)
							}, (e => {
								switch (e.name) {
									case We.GIF:
										return r.a.createElement("img", {
											src: `${Tt.a.assetPath}/img/giphy/giphy.png`,
											className: Kt.a.CommandItemIcon
										});
									case We.INVITE:
										return r.a.createElement(Ee.a, {
											className: Kt.a.CommandItemIcon
										});
									case We.MUTE:
										return r.a.createElement(At.a, {
											className: Kt.a.CommandItemIcon
										});
									case We.UNMUTE:
										return r.a.createElement(Lt.a, {
											className: Kt.a.CommandItemIcon
										});
									case We.KICK:
										return r.a.createElement(Rt, {
											className: Kt.a.CommandItemIcon
										});
									case We.MEMBERS:
										return r.a.createElement(Ft, {
											className: Kt.a.CommandItemIcon
										});
									case We.LEAVE:
										return r.a.createElement(Bt.a, {
											className: Kt.a.CommandItemIcon
										});
									case We.NEW_CHAT:
									case We.DIRECT:
										return r.a.createElement(Mt.a, {
											className: Kt.a.CommandItemIcon
										});
									case We.TEXT_EMOJI:
										return r.a.createElement(Gt.a, {
											className: Kt.a.CommandItemIcon
										});
									case We.SNOOMOJI:
										return r.a.createElement(Wt, {
											className: Kt.a.CommandItemIcon
										});
									default:
										return null
								}
							})(e), r.a.createElement("div", {
								className: Kt.a.CommandItemMetadata
							}, r.a.createElement("span", {
								className: Kt.a.CommandItemMetadataDescription
							}, e.description && fe.fbt._("{Description}", [fe.fbt._param("Description", e.description)], {
								hk: "223KqZ"
							})), r.a.createElement("span", {
								className: Kt.a.CommandItemMetadataExample
							}, e.example ? e.example : `/${e.command}`))))) : r.a.createElement("div", {
								className: Kt.a.ErrorMessage
							}, r.a.createElement(Ut, {
								className: Kt.a.ErrorMessageIcon
							}), r.a.createElement("div", {
								className: Kt.a.ErrorMessageContent
							}, r.a.createElement("span", {
								className: Kt.a.ErrorMessageContentHeader
							}, fe.fbt._("Hmm... that didn’t work", null, {
								hk: "SVy4g"
							})), r.a.createElement("span", {
								className: Kt.a.ErrorMessageContentBody
							}, fe.fbt._("try another keyword or phrase", null, {
								hk: "1dSsbn"
							}))))
						}, [g, b, d, l]);
					return Object(c.useEffect)(() => (s(f), a(O), () => {
						u()
					}), [s, a, f, O, u]), Object(c.useEffect)(() => {
						b > g.length && p(0)
					}, [b, g.length]), r.a.createElement(rt.a, {
						className: Object(i.a)(Kt.a.Scroller, {
							[Kt.a.embedded]: m
						})
					}, v)
				},
				Zt = n("./src/lib/lessComponent.tsx"),
				Qt = n("./src/chat/components/Snoomoji/index.tsx"),
				Yt = n("./src/chat/components/MessageTooltip/Picker/icons.list.m.less"),
				Xt = n.n(Yt);
			const Jt = Zt.a.div("IconWrapper", Xt.a);
			Jt.displayName = "IconWrapper";
			const $t = Zt.a.div("LoadingIndicator", Xt.a),
				en = Zt.a.wrapped(e => {
					let {
						children: t,
						className: n
					} = e;
					return r.a.createElement("div", {
						className: n
					}, t)
				}, "Wrapper", Xt.a);
			var tn = e => {
					let {
						onPickSnoomoji: t
					} = e;
					const [n, a] = Object(c.useState)(!1), s = Object(o.e)(lt.g), l = Object(c.useCallback)(() => {
						Promise.all(Re.b.map(e => new Promise(t => {
							const n = new Image;
							n.onload = () => t(), n.src = Re.a[e]
						}))).then(() => a(!0))
					}, []);
					Object(c.useEffect)(() => {
						l()
					}, [l]);
					return r.a.createElement(rt.a, {
						className: Object(i.a)(Xt.a.Scroller, {
							[Xt.a.embedded]: s
						})
					}, n ? r.a.createElement(en, null, (() => Re.b.map((e, n) => r.a.createElement(Jt, {
						key: `icon-${n}`,
						onClick: () => t(e)
					}, r.a.createElement(Qt.a, {
						className: Xt.a.Icon,
						iconName: e
					}))))()) : r.a.createElement($t, null, fe.fbt._("Loading snoomoji...", null, {
						hk: "39nqLy"
					})))
				},
				nn = n("./src/chat/actions/members.ts"),
				an = n("./src/chat/components/ChatMemberList/index.tsx"),
				sn = n("./src/chat/helpers/chatSelector.ts"),
				cn = n("./src/chat/selectors/members.ts"),
				rn = n("./src/chat/components/MessageTooltip/Picker/Userlist/index.m.less"),
				on = n.n(rn);
			const ln = Zt.a.div("LoadingIndicator", on.a),
				dn = Zt.a.wrapped(an.a, "ChatMemberList", on.a),
				un = Zt.a.wrapped(e => {
					let {
						children: t,
						className: n
					} = e;
					return r.a.createElement("div", {
						className: n
					}, t)
				}, "Wrapper", on.a),
				hn = Object(sn.a)({
					channelId: C.B,
					channelMembers: cn.g,
					hasMoreMembers: cn.e,
					fetchingMembers: cn.a,
					isEmbedded: lt.g
				});
			class mn extends c.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.fetchedFilter = "", this.isMount = !1, this.fetchSubredditChannelUsers = z()((function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
						t.props.fetchSubredditChannelUsers(e)
					}), Ae.Xb, {
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
					return this.members = this.filterMembers(), this.members && this.members.length && e ? r.a.createElement(un, null, r.a.createElement(dn, {
						minimal: !0,
						channelId: e,
						modIndicator: !0,
						onClick: t,
						onSelectName: n,
						selectIndex: this.state.selectIndex,
						useNSFWIcons: !0
					})) : a || this.members && this.members.length ? r.a.createElement(ln, null, fe.fbt._("Loading members...", null, {
						hk: "23phIt"
					})) : r.a.createElement(ln, null, fe.fbt._("Member not found!", null, {
						hk: "4DkpQe"
					}))
				}
				render() {
					const {
						isEmbedded: e
					} = this.props;
					return r.a.createElement(rt.a, {
						className: Object(i.a)(on.a.Scroller, {
							[on.a.embedded]: e
						})
					}, this.renderContent())
				}
			}
			var bn = Object(o.b)(hn, e => ({
					fetchSubredditChannelUsers: t => e(Object(nn.e)({
						filter: t
					}))
				}))(mn),
				pn = n("./src/chat/constants/keys.ts"),
				gn = n("./src/chat/singleton/SendbirdSDK.ts"),
				fn = n("./src/chat/controls/ContentEditable/index.m.less"),
				On = n.n(fn);
			const vn = 19,
				En = 12,
				jn = 6,
				_n = Zt.a.textarea("Textarea", On.a);
			class Cn extends r.a.Component {
				constructor(e) {
					super(e), this.offset = 0, this.emitChange = this.emitChange.bind(this), this.emitChangeOnce = this.emitChangeOnce.bind(this), this.handleCursor = this.handleCursor.bind(this), this.handleKeyPress = this.handleKeyPress.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleSizing = this.handleSizing.bind(this), this._ref = r.a.createRef()
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
					this.props.channelId !== e.channelId && this.textarea && (this.textarea.value = e.draftText || "", this.handleSizing()), this.textarea && this.textarea.value ? gn.a.startTypingIndicator() : gn.a.endTypingIndicator(), this.textarea && e.textUpdate && (this.textarea.value = e.textUpdate, this.props.onChangeOnce(this.textarea.value), this.handleSizing()), this.textarea && this.textarea.value && e.clearText && (this.clearTextAndDropInputHeight(), this.props.onChangeOnce(""), this.handleSizing()), e.cursorPosition && this.textarea && (this.textarea.selectionStart = e.cursorPosition.selectionStart, this.textarea.selectionEnd = e.cursorPosition.selectionEnd)
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
					e.key !== pn.g || e.shiftKey || (e.preventDefault(), this.props.onSubmit()), this.handleCursor()
				}
				handleKeyDown(e) {
					e.key === pn.d && (this.props.onArrowUp(e), this.handleSizing()), e.key === pn.a && (this.props.onArrowDown(e), this.handleSizing()), e.key === pn.h && this.props.onKeyEsc(e), this.props.onKeyDown(e)
				}
				handleSizing() {
					if (this.textarea) {
						const e = this.textarea;
						e.style.height = "auto", e.style.height = e.scrollHeight + this.offset + "px", e.scrollHeight > 2 * vn + En ? e.style.paddingTop = "0px" : e.style.paddingTop = "12px", e.scrollHeight > vn * jn + 1 ? e.style.overflowY = "scroll" : e.style.overflowY = "hidden"
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
					return r.a.createElement(_n, {
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
						placeholder: fe.fbt._("Message", null, {
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

			function In() {
				return (In = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var yn = e => r.a.createElement(p.a, In({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? r.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, r.a.createElement("path", {
					d: "M18.226,4.087a3.958,3.958,0,0,0-2.313-2.313,16.817,16.817,0,0,0-11.827,0A3.963,3.963,0,0,0,1.773,4.087a16.756,16.756,0,0,0,0,11.826,3.963,3.963,0,0,0,2.313,2.313,16.744,16.744,0,0,0,11.827,0,3.958,3.958,0,0,0,2.313-2.313,16.741,16.741,0,0,0,0-11.826ZM9,10.53a2.486,2.486,0,0,1-.34,1.293,2.4,2.4,0,0,1-.953.9,2.955,2.955,0,0,1-1.417.328,3.247,3.247,0,0,1-1.579-.386A2.811,2.811,0,0,1,3.6,11.583,3.108,3.108,0,0,1,3.2,10a3.052,3.052,0,0,1,.411-1.583A2.832,2.832,0,0,1,4.74,7.335,3.37,3.37,0,0,1,6.356,6.95a3.827,3.827,0,0,1,.986.128,3.414,3.414,0,0,1,.879.369l-.5,1.169a1.314,1.314,0,0,0-.563-.357,2.3,2.3,0,0,0-.754-.124A1.733,1.733,0,0,0,4.541,9.983a2.064,2.064,0,0,0,.232.99,1.7,1.7,0,0,0,1.542.925,1.681,1.681,0,0,0,.746-.162,1.238,1.238,0,0,0,.513-.443,1.118,1.118,0,0,0,.183-.622H6.124V9.619L9,9.6Zm2.5,2.454H10.182V7.016H11.5Zm5-4.8H14.362V9.577h1.79v1.169h-1.79v2.238H13.044V7.016H16.5Z"
				})) : r.a.createElement(r.a.Fragment, null, r.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, r.a.createElement("path", {
					d: "M4.711,12.664A2.8,2.8,0,0,1,3.6,11.583,3.108,3.108,0,0,1,3.2,10a3.052,3.052,0,0,1,.411-1.583A2.832,2.832,0,0,1,4.74,7.335,3.37,3.37,0,0,1,6.356,6.95a3.827,3.827,0,0,1,.986.128,3.414,3.414,0,0,1,.879.369l-.5,1.169a1.314,1.314,0,0,0-.563-.357,2.3,2.3,0,0,0-.754-.124A1.733,1.733,0,0,0,4.541,9.983a2.064,2.064,0,0,0,.232.99,1.7,1.7,0,0,0,1.542.925,1.681,1.681,0,0,0,.746-.162,1.238,1.238,0,0,0,.513-.443,1.118,1.118,0,0,0,.183-.622H6.124V9.619L9,9.6v.928a2.486,2.486,0,0,1-.34,1.293,2.4,2.4,0,0,1-.953.9,2.955,2.955,0,0,1-1.417.328A3.247,3.247,0,0,1,4.711,12.664Z"
				}), r.a.createElement("path", {
					d: "M10.182,7.016H11.5v5.968H10.182Z"
				}), r.a.createElement("path", {
					d: "M13.044,7.016H16.5V8.185H14.362V9.577h1.79v1.169h-1.79v2.238H13.044Z"
				}), r.a.createElement("path", {
					d: "M10,19.305a16.751,16.751,0,0,1-5.914-1.079,3.963,3.963,0,0,1-2.313-2.313,16.756,16.756,0,0,1,0-11.826A3.963,3.963,0,0,1,4.086,1.774a16.817,16.817,0,0,1,11.827,0,3.958,3.958,0,0,1,2.313,2.313,16.741,16.741,0,0,1,0,11.826,3.958,3.958,0,0,1-2.313,2.313A16.742,16.742,0,0,1,10,19.305Zm0-17.36a15.5,15.5,0,0,0-5.473,1A2.71,2.71,0,0,0,2.943,4.527a15.506,15.506,0,0,0,0,10.946,2.71,2.71,0,0,0,1.584,1.583,15.557,15.557,0,0,0,10.946,0,2.711,2.711,0,0,0,1.583-1.583,15.491,15.491,0,0,0,0-10.946h0a2.711,2.711,0,0,0-1.583-1.583A15.5,15.5,0,0,0,10,1.945Z"
				})))),
				xn = n("./src/chat/models/Theme/index.ts"),
				Sn = n("./src/chat/selectors/theme.ts");

			function Nn() {
				return (Nn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var wn = e => {
					const t = Object(o.e)(Sn.a);
					return r.a.createElement(p.a, Nn({}, e, {
						viewBox: "0 0 24 24"
					}), (() => {
						let e;
						if (t) {
							const n = xn.f[t];
							n && (e = r.a.createElement("defs", null, r.a.createElement("linearGradient", {
								id: "linear-gradient",
								gradientTransform: `rotate(${xn.d})`
							}, n.stops.map((e, t) => r.a.createElement("stop", {
								key: `${t}-${e.offset}-${e.color}`,
								offset: `${e.offset}`,
								stopColor: `${e.color}`
							})))))
						}
						return r.a.createElement(r.a.Fragment, null, e, r.a.createElement("path", {
							style: e ? {
								fill: "url(#linear-gradient)"
							} : void 0,
							d: "M22.6559 10.8L2.39994 0.65995C2.15389 0.529239 1.87278 0.47974 1.59687 0.518539C1.32096 0.557338 1.06441 0.682447 0.863944 0.87595C0.656797 1.06381 0.51403 1.3121 0.455877 1.58564C0.397725 1.85917 0.427136 2.14407 0.539944 2.39995L4.58394 12L0.539944 21.6C0.429918 21.8544 0.401998 22.1368 0.460075 22.4078C0.518153 22.6788 0.659334 22.925 0.863944 23.112C1.10992 23.3469 1.43582 23.4798 1.77594 23.484C1.99315 23.4934 2.20883 23.4436 2.39994 23.34L22.6559 13.2C22.8781 13.0879 23.0648 12.9164 23.1952 12.7045C23.3256 12.4927 23.3947 12.2487 23.3947 12C23.3947 11.7512 23.3256 11.5072 23.1952 11.2954C23.0648 11.0835 22.8781 10.912 22.6559 10.8Z"
						}))
					})())
				},
				kn = n("./src/chat/actions/uploads/prompt.ts"),
				Tn = n("./src/lib/hooks/useOnClickOutside.ts"),
				Mn = n("./src/lib/hooks/useTooltip.ts"),
				An = n("./src/chat/components/MessageInput/IconButton/index.m.less"),
				Ln = n.n(An);
			var Dn = e => r.a.createElement("div", {
					className: Object(i.a)(Ln.a.IconButton, {
						[Ln.a.active]: e.active
					}, e.className),
					onMouseDown: Object(u.b)(e.onMouseDown)
				}, e.children),
				Un = n("./src/chat/controls/TooltipHooked/loader.tsx"),
				Pn = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				Rn = n("./src/chat/components/MessageInput/ImageUploader/index.m.less"),
				Bn = n.n(Rn);
			var Hn = r.a.memo((function(e) {
					let {
						channelId: t
					} = e;
					const n = Object(o.d)(),
						a = Object(o.e)(e => Object(C.C)(e, t)),
						s = Object(o.e)(C.M),
						i = Object(o.e)(e => Object(B.n)(e, t)),
						d = Object(o.e)(I.e),
						u = Object(Mn.b)(Object(Pn.c)()),
						h = {
							...u.arrowProps,
							style: {
								...u.arrowProps.style,
								borderTop: "5px solid var(--prompt-tooltip-background)",
								left: "3px"
							}
						},
						m = Object(c.useCallback)(() => {
							u.hide(), n(Object(kn.c)(kn.b.LAST))
						}, [u, n]);
					return Object(Tn.a)("Prompt-id", u.hide), Object(c.useEffect)(() => {
						d && setTimeout(() => {
							u.show(), n(Object(l.ob)())
						})
					}, [d]), i && (!s || s && a.length > 0) ? r.a.createElement(r.a.Fragment, null, d && r.a.createElement(Un.a, {
						arrowProps: h,
						popperProps: u.popperProps,
						visible: u.visible,
						hide: u.hide,
						styled: !0,
						isInstant: !0
					}, r.a.createElement("button", {
						className: Bn.a.Tooltip,
						onClick: m,
						id: "Prompt-id"
					}, fe.fbt._("New! Try media sharing", null, {
						hk: "16k719"
					}))), r.a.createElement("span", {
						ref: u.target.ref,
						role: "button",
						tabIndex: 0,
						onClick: m
					}, r.a.createElement(Dn, {
						className: Bn.a.ImageUploader
					}, r.a.createElement(A, null)))) : null
				})),
				Fn = n("./src/chat/components/MessageInput/index.m.less"),
				Gn = n.n(Fn);
			const Vn = r.a.memo((function() {
					const e = Object(o.d)(),
						t = Object(o.e)(dt.a);
					return Object(o.e)(C.M) ? null : r.a.createElement(Wn, {
						onMouseDown: () => {
							e(Object(De.c)({
								tooltipId: Ue.b
							})), e(Object(l.G)(Ue.b))
						},
						active: t === Ue.b
					}, r.a.createElement(yn, {
						isFilled: t === Ue.b
					}))
				})),
				Wn = e => r.a.createElement("div", {
					className: Object(i.a)(Gn.a.IconButton, {
						[Gn.a.active]: e.active
					}, e.className),
					onMouseDown: Object(u.b)(e.onMouseDown)
				}, e.children),
				zn = Object(sn.a)({
					activeDropdownId: e => e.tooltipId || void 0,
					draftMessage: (e, t) => Object(C.v)(e, t.channelId),
					hasUploadsToSubmit: (e, t) => Object(I.d)(e, t.channelId),
					isFullSize: lt.h,
					isChatContainerFocused: lt.c,
					isImageShareEnabled: (e, t) => Object(B.n)(e, t.channelId),
					isChannelInPendingState: C.M,
					isShortcutsSlashCommandEnabled: B.z
				});
			class Kn extends c.PureComponent {
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
							scrollToBottom: c,
							onSubmitSlashCommand: r,
							isShortcutsSlashCommandEnabled: o
						} = this.props;
						c && c();
						const i = !!this.state.text || !!this.state.inputCommand,
							l = this.props.hasUploadsToSubmit;
						if (this.isUserlistPopupOpened()) this.onPickUserName(this.selectUserName || this.state.inputUserName), this.props.toggleUserlistTooltip(Ue.f);
						else if (l || i) {
							if (l) {
								const t = new d.d(e);
								await a(t), s(t)
							}
							i && (this.isSlashCommandListPopupOpened() && o ? (this.onPickCommand(this.selectedCommand || this.state.inputCommand), this.props.toggleSlashCommandListTooltip(Ue.d)) : (this.state.text.startsWith(Te) && o ? r(this.state.text) : n(this.state.text), this.clearText(), t(e))), c && c()
						}
					}, this.sendEnabled = () => !!this.state.text || this.props.hasUploadsToSubmit, this.onArrowUpUserlistListener = F.a, this.onArrowDownUserlistListener = F.a, this.startIdleTimerThrottle = Ne()(() => {
						this.props.startSurveyTimer()
					}, Ue.g), this.onMessageInputKeydown = () => {
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
					} = Ge(t, e, n);
					this.setState({
						textUpdate: a,
						text: a
					}, () => {
						this.reFocusCursorPosition(s), this.props.toggleUserlistTooltip(Ue.f)
					})
				}
				onPickCommand(e) {
					const t = Te + e;
					this.setState({
						textUpdate: t,
						text: t
					}, () => {
						this.reFocusCursorPosition(t.length), this.props.toggleSlashCommandListTooltip(Ue.d)
					})
				}
				toggleUserlistTooltipByTextChange(e) {
					const {
						selectionEnd: t
					} = this.cursorPosition, {
						hasUsername: n,
						username: a
					} = Fe(e, t), s = this.isUserlistPopupOpened();
					return (n && !s || !n && s) && this.props.toggleUserlistTooltip(Ue.f), this.setState({
						inputUserName: a
					})
				}
				toggleCommandsTooltipByTextChange(e) {
					const t = this.isSlashCommandListPopupOpened();
					(!t && Ve(e) || t && !Ve(e)) && this.props.toggleSlashCommandListTooltip(Ue.d), this.setState({
						inputCommand: e.replace(Te, "")
					})
				}
				isSlashCommandListPopupOpened() {
					return this.props.activeDropdownId === Ue.d
				}
				isUserlistPopupOpened() {
					return this.props.activeDropdownId === Ue.f
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
						isChatContainerFocused: c,
						isShortcutsSlashCommandEnabled: o
					} = this.props;
					return r.a.createElement("form", {
						tabIndex: 0,
						className: Object(i.a)(Gn.a.Form, {
							[Gn.a.isFullSize]: s
						}),
						id: mt,
						onSubmit: Object(u.b)(this.handleSubmitInput)
					}, r.a.createElement("div", {
						className: Gn.a.Wrapper
					}, r.a.createElement(Hn, {
						channelId: t
					}), r.a.createElement("div", {
						className: Gn.a.InputWrapper
					}, r.a.createElement(Cn, {
						className: Gn.a.ContentEditable,
						channelId: t,
						clearText: this.state.clearText,
						cursorPosition: this.cursorPosition,
						draftText: a || "",
						isFocusingPrevented: Boolean(e) || !c,
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
					}), o && r.a.createElement(ft, {
						id: Ue.d,
						shouldArrowShow: !1
					}, r.a.createElement(qt, {
						channelId: t,
						bindArrowDown: e => this.onArrowDownUserlistListener = e,
						bindArrowUp: e => this.onArrowUpUserlistListener = e,
						inputCommand: this.state.inputCommand,
						onPickCommand: e => this.onPickCommand(e),
						onSelectCommand: e => this.selectedCommand = e,
						unbindListeners: () => {
							this.onArrowUpUserlistListener = F.a, this.onArrowDownUserlistListener = F.a
						}
					})), r.a.createElement("div", {
						className: Gn.a.Icons
					}, r.a.createElement(Vn, null), r.a.createElement(Wn, {
						onMouseDown: () => n(Ue.e),
						active: e === Ue.e
					}, r.a.createElement(Gt.a, {
						isFilled: e === Ue.e
					})), r.a.createElement(ft, {
						id: Ue.e
					}, r.a.createElement(tn, {
						onPickSnoomoji: this.handleSubmitSnoo
					})), r.a.createElement(ft, {
						id: Ue.b,
						arrowOffset: Ue.a
					}, r.a.createElement(kt, {
						onPickGif: this.onPickGifHandler
					})), r.a.createElement(ft, {
						id: Ue.f,
						shouldArrowShow: !1
					}, r.a.createElement(bn, {
						bindArrowDown: e => this.onArrowDownUserlistListener = e,
						bindArrowUp: e => this.onArrowUpUserlistListener = e,
						inputUserName: this.state.inputUserName,
						onPickUserName: e => this.onPickUserName(e),
						onSelectUserName: e => this.selectUserName = e
					})))), r.a.createElement(de.d, {
						className: Gn.a.SubmitButton,
						type: "submit",
						disabled: !this.sendEnabled()
					}, r.a.createElement(wn, null))))
				}
			}
			var qn = Object(o.b)(zn, (e, t) => {
					let {
						channelId: n
					} = t;
					return {
						onSubmitText: t => e(Object(J.r)(n, t.trim(), Pe.c.TEXT)),
						onSubmitSnoo: t => e(Object(J.r)(n, t.trim(), Pe.c.SNOOMOJI)),
						onSubmitGif: t => {
							e(Object(J.o)(n, t)), e(Object(ke.l)(""))
						},
						onSubmitMedia: t => e(t.createMessage()),
						onUploadMedia: t => e(t.uploadMedia()),
						toggleSnoomojiTooltip: t => {
							e(Object(De.c)({
								tooltipId: t
							})), e(Object(l.G)(t))
						},
						toggleGifTooltip: t => {
							e(Object(De.c)({
								tooltipId: t
							})), e(Object(l.G)(t))
						},
						toggleUserlistTooltip: t => {
							e(Object(De.c)({
								tooltipId: t
							}))
						},
						saveDraft: (t, n) => {
							e(Object(we.e)({
								channelId: t,
								messageValue: n
							}))
						},
						deleteDraft: t => {
							e(Object(we.f)(t))
						},
						closeUserlistTooltip: () => e(Object(De.d)()),
						startSurveyTimer: () => e(Object(st.b)()),
						uploadShowPromptCountSet: () => e(Object(kn.c)(kn.b.LAST)),
						commandsChecker: t => e(at(t, n)),
						onSubmitSlashCommand: t => e(at(t, n)),
						toggleSlashCommandListTooltip: t => {
							e(Object(De.c)({
								tooltipId: t
							}))
						}
					}
				})(Kn),
				Zn = n("./src/chat/helpers/time/index.tsx"),
				Qn = n("./src/chat/components/DateSplitter/index.m.less"),
				Yn = n.n(Qn);
			var Xn = e => r.a.createElement("div", {
					className: Yn.a.TimeWrapper
				}, r.a.createElement("time", {
					className: Yn.a.Time
				}, Object(Zn.a)(e.date))),
				Jn = n("./src/chat/components/Message/Bubble.tsx"),
				$n = n("./src/chat/components/Message/LinkedText.tsx"),
				ea = n("./src/chat/components/Message/SystemMessage.m.less"),
				ta = n.n(ea);
			const na = Zt.a.wrapped($n.a, "LinkedText", ta.a);
			var aa = Zt.a.wrapped(e => {
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
					}, r.a.createElement(na, {
						value: a,
						highlighMentionGroupLinks: s
					}))
				}, "SystemMessage", ta.a),
				sa = n("./src/chat/components/Message/UserName/index.m.less"),
				ca = n.n(sa);
			var ra = e => {
					let {
						className: t,
						message: n,
						channelType: a,
						sameAsPrevUser: s,
						inTimeRange: c,
						currentUserId: o
					} = e;
					const {
						sender: l
					} = n, d = a === oe.b.Group, u = o === (null == l ? void 0 : l.userId);
					return (!s || !c) && (null == l ? void 0 : l.nickname) && (null == l ? void 0 : l.userId) && d ? r.a.createElement("span", {
						className: Object(i.a)(ca.a.UserName, {
							[ca.a.currentUser]: Boolean(u && o)
						}, t)
					}, null == l ? void 0 : l.nickname) : null
				},
				oa = n("./node_modules/lodash/xorBy.js"),
				ia = n.n(oa),
				la = n("./src/lib/hooks/usePrevious.ts"),
				da = n("./src/lib/prettyPrintNumber/index.ts"),
				ua = n("./src/chat/actions/message/reactions.ts"),
				ha = n("./src/chat/models/MessageReaction/index.ts"),
				ma = n("./src/chat/selectors/reactions.ts"),
				ba = n("./src/chat/selectors/user.ts"),
				pa = n("./src/chat/components/Reactions/MessageReactions/index.m.less"),
				ga = n.n(pa);
			const fa = r.a.memo((function(e) {
				let {
					channelId: t,
					currentUserId: n,
					userIds: a,
					messageId: s,
					reactionKey: d,
					isNew: u
				} = e;
				const h = a.length,
					m = Object(o.e)(e => Object(ma.b)(e, d)),
					b = Object(la.a)(h),
					p = Object(o.d)(),
					g = Object(o.e)(B.j),
					f = Object(c.useRef)(Ne()(e => {
						p(Object(ua.b)({
							channelSendbirdId: t,
							messageSendbirdId: s,
							reactionIconKey: d,
							type: e ? ha.a.DELETE : ha.a.ADD,
							userId: n
						})), p(e ? Object(l.N)(s, 0, d) : Object(l.X)(s, 0, d, "add_to_existing"))
					}, 800)),
					O = Object(c.useMemo)(() => Boolean(a.find(e => e === n)), [n, a]),
					v = Object(c.useMemo)(() => {
						if (b !== h) return b
					}, [h, b]),
					E = Object(c.useMemo)(() => void 0 !== v && v < h, [h, v]);
				return m ? r.a.createElement("span", {
					className: Object(i.a)(ga.a.ReactionWrapper, {
						[ga.a.userReacted]: O,
						[ga.a.new]: u
					}),
					onClick: () => g && f.current(O)
				}, r.a.createElement("img", {
					className: ga.a.ReactionIcon,
					src: m.url
				}), h > 1 && r.a.createElement("span", {
					className: ga.a.ReactionCounterContainer,
					key: h
				}, r.a.createElement("span", {
					style: {
						animationDuration: 2 === h && E ? "0s" : "0.5s"
					},
					className: Object(i.a)(ga.a.TranslationContainer, {
						[ga.a.up]: !!v && E,
						[ga.a.down]: !!v && !E
					})
				}, v && r.a.createElement("span", {
					className: ga.a.ReactionCounter
				}, Object(da.b)(v - 1)), r.a.createElement("span", {
					className: ga.a.ReactionCounter,
					title: `${v||h}`
				}, Object(da.b)(v || h)), v && r.a.createElement("span", {
					className: ga.a.ReactionCounter
				}, Object(da.b)(v + 1))))) : null
			}));
			var Oa = r.a.memo(e => {
					let {
						isCurrentUser: t,
						channelId: n,
						messageId: a
					} = e;
					const s = Object(o.e)(e => Object(ma.c)(e, a)),
						l = Object(la.a)(s),
						d = Object(c.useMemo)(() => {
							if (l && l.length < s.length) return ia()(l, s, "key")[0].key
						}, [s, l]),
						u = Object(o.e)(ba.a);
					return s.length ? r.a.createElement("div", {
						className: Object(i.a)(ga.a.ReactionsWrapper, {
							[ga.a.reversed]: t
						})
					}, s.map(e => r.a.createElement(fa, {
						channelId: n,
						currentUserId: u,
						messageId: a,
						key: e.key,
						isNew: d === e.key,
						userIds: e.userIds,
						reactionKey: e.key
					}))) : null
				}),
				va = n("./src/chat/components/MessageList/Messages/index.m.less"),
				Ea = n.n(va);
			const ja = (e, t) => {
					let n = NaN;
					return e > 0 && (n = t[e - 1].createdAt), n
				},
				_a = e => {
					let {
						message: t,
						showUserPic: n,
						isLastCurrentUserMessage: a,
						currentUserId: s,
						inPreview: c,
						isLastInChain: l
					} = e;
					const {
						sender: d
					} = t, u = s === (d && d.userId), h = Object(o.e)(lt.d), m = Object(o.e)(C.a);
					return r.a.createElement(Jn.a, {
						className: Object(i.a)(Ea.a.MessageItemBubble, {
							[Ea.a.lastInChain]: l
						}),
						message: t,
						fromCurrentUser: u,
						withButton: !0,
						isChatEmbedded: h,
						showUserPic: n,
						isLastCurrentUserMessage: a,
						isCurrentUserChannelMod: m,
						inPreview: c
					})
				};
			var Ca = e => {
					let {
						currentUserId: t,
						channelType: n,
						messageList: a,
						inPreview: s
					} = e;
					const c = Object(o.e)(Sn.d);
					return a.length ? r.a.createElement(r.a.Fragment, null, a.map((e, a, o) => {
						var i;
						const {
							createdAt: l,
							sender: d
						} = e, u = d && d.userId, h = ja(a, o), m = ((e, t) => {
							const n = t[e + 1];
							return null == n ? void 0 : n.createdAt
						})(a, o), b = ((e, t) => {
							if (e > 0) {
								const {
									sender: n
								} = t[e - 1];
								return n && n.userId
							}
						})(a, o), p = ((e, t, n) => {
							if (0 === t) return !0;
							const a = new Date(e.createdAt),
								s = ja(t, n);
							if (s) {
								const e = new Date(s);
								return a.getFullYear() !== e.getFullYear() || a.getMonth() !== e.getMonth() || a.getDate() !== e.getDate()
							}
							return !1
						})(e, a, o), g = ((e, t) => {
							var n;
							const a = t[e + 1];
							return null === (n = null == a ? void 0 : a.sender) || void 0 === n ? void 0 : n.userId
						})(a, o), f = b === u, O = g === u, v = l - h < 5 * Ae.pb, E = m && m - l < 5 * Ae.pb, j = !O || O && !E, _ = e.messageType === Pe.d.SYSTEM && ((e, t) => {
							const {
								mentionType: n,
								mentionedUsers: a,
								messageType: s
							} = e;
							if (s !== Pe.d.SYSTEM) return !1;
							if (n === Pe.b.CHANNEL) return !0;
							if (n === Pe.b.USERS && Array.isArray(a)) {
								const e = 0 === a.length,
									n = a.some(e => t === e.userId);
								return e || n
							}
							return !1
						})(e, t), C = Boolean(((e, n) => {
							const {
								sender: a
							} = n[e];
							return !(t !== (null == a ? void 0 : a.userId) || !c) && (e === n.length - 1 || !n.slice(e + 1).some(e => {
								var t;
								return (null === (t = e.sender) || void 0 === t ? void 0 : t.userId) === (null == a ? void 0 : a.userId)
							}))
						})(a, o)), I = p && r.a.createElement(Xn, {
							date: l
						}), y = e.messageData.clientMessageId || e.createdAt;
						switch (e.messageType) {
							case Pe.d.PENDING:
							case Pe.d.USER:
								return r.a.createElement(r.a.Fragment, {
									key: y
								}, I, r.a.createElement(r.a.Fragment, null, r.a.createElement(ra, {
									message: e,
									sameAsPrevUser: f,
									inTimeRange: v,
									channelType: n,
									currentUserId: t
								}), r.a.createElement(_a, {
									message: e,
									isLastCurrentUserMessage: C,
									showUserPic: j,
									currentUserId: t,
									inPreview: s,
									isLastInChain: !(!g || e.messageType === Pe.d.USER && e.reactions.length) && !O
								}), e.messageType === Pe.d.USER ? r.a.createElement(Oa, {
									channelId: e.channelId,
									messageId: e.messageId,
									isCurrentUser: t === (null === (i = e.sender) || void 0 === i ? void 0 : i.userId)
								}) : null));
							case Pe.d.SYSTEM:
								return _ && r.a.createElement(r.a.Fragment, {
									key: e.createdAt
								}, I, r.a.createElement(aa, {
									className: Ea.a.SystemBubble,
									message: e
								}));
							default:
								return null
						}
					})) : null
				},
				Ia = n("./src/chat/components/MessageQuickReplyPicker/index.m.less"),
				ya = n.n(Ia);
			const xa = ["upvote", "snoo"],
				Sa = Zt.a.div("SnooWrapper", ya.a),
				Na = Zt.a.wrapped(e => {
					const {
						className: t,
						text: n,
						type: a,
						onReply: s
					} = e;
					return r.a.createElement("button", {
						tabIndex: 0,
						className: t,
						onClick: () => s(n)
					}, (() => {
						switch (a) {
							case Pe.c.TEXT:
								return n;
							case Pe.c.SNOOMOJI:
								return r.a.createElement(Sa, null, r.a.createElement(Qt.a, {
									iconName: n
								}))
						}
					})())
				}, "ReplyItem", ya.a);
			var wa = Zt.a.wrapped(e => {
					const {
						className: t,
						channelId: n
					} = e, a = Object(o.d)();
					return Object(o.e)(t => Object(C.R)(t, e.lastMessage)) ? r.a.createElement("div", {
						className: t
					}, r.a.createElement(Na, {
						type: Pe.c.TEXT,
						text: fe.fbt._("Thanks for the award!", null, {
							hk: "3aibi5"
						}),
						onReply: e => {
							a(Object(J.r)(n, String(e).trim(), Pe.c.TEXT)), a(Object(l.y)(l.a.FIRST, String(e).trim()))
						}
					}), xa.map((e, t) => r.a.createElement(Na, {
						type: Pe.c.SNOOMOJI,
						key: e,
						text: e,
						onReply: e => {
							a(Object(J.r)(n, e, Pe.c.SNOOMOJI)), a(Object(l.y)(t + 2, e))
						}
					}))) : null
				}, "MessageQuickReplyPicker", ya.a),
				ka = n("./src/chat/actions/messageReactions/index.ts"),
				Ta = n("./src/chat/selectors/messages.ts");
			var Ma = () => {
					const e = Object(o.d)(),
						[t, n] = Object(c.useState)(!1),
						a = Object(o.e)(ma.a),
						s = Object(o.e)(lt.g),
						d = Object(o.e)(ma.d),
						u = Object(o.e)(e => Object(Ta.b)(e, d)),
						h = Object(o.e)(ba.a);
					Object(c.useEffect)(() => {
						a.length || (async () => {
							await e(Object(ka.a)())
						})()
					}, [a, e]);
					const m = Object(c.useCallback)(() => {
						Promise.all(a.map(e => new Promise(t => {
							const n = new Image;
							n.onload = () => t(), n.src = e.url
						}))).then(() => n(!0))
					}, [a]);
					Object(c.useEffect)(() => {
						m()
					}, [m]);
					return r.a.createElement(rt.a, {
						className: Object(i.a)(Xt.a.Scroller, {
							[Xt.a.embedded]: s
						})
					}, a.length && t ? r.a.createElement("div", {
						className: Xt.a.Wrapper
					}, (() => a.map((t, n) => t.url && t.key ? r.a.createElement("div", {
						className: Xt.a.IconWrapper,
						key: `icon-${n}`,
						onClick: () => (t => {
							if (u && u.messageType === Pe.d.USER) {
								const n = u.reactions.find(e => e.key === t),
									a = !!Boolean(n) && Boolean(null == n ? void 0 : n.userIds.find(e => e === h));
								e(Object(ua.b)({
									channelSendbirdId: u.channelId,
									messageSendbirdId: u.messageId,
									reactionIconKey: t,
									type: ha.a.ADD,
									userId: h
								})), a || e(Object(l.X)(u.messageId, 0, t, "bottom_sheet"))
							}
						})(t.key)
					}, r.a.createElement("img", {
						className: Xt.a.Icon,
						src: t.url,
						alt: t.altText
					})) : null))()) : r.a.createElement("div", {
						className: Xt.a.LoadingIndicator
					}, fe.fbt._("Loading reactions...", null, {
						hk: "3KoJZd"
					})))
				},
				Aa = n("./src/chat/components/TypingIndicator/index.m.less"),
				La = n.n(Aa);
			var Da = e => {
					let {
						channelType: t
					} = e;
					const n = Object(o.e)(e => e.typingIndicator.usernames);
					return (null == n ? void 0 : n.length) ? r.a.createElement("span", {
						className: Object(i.a)(La.a.IndicatorText)
					}, ((e, t) => e === oe.b.Direct ? fe.fbt._("is typing...", null, {
						hk: "UTaH4"
					}) : 1 === t.length ? fe.fbt._("{firstUser} is typing...", [fe.fbt._param("firstUser", t[0])], {
						hk: "480JMK"
					}) : 2 === t.length ? fe.fbt._("{firstUser} and {secondUser} are typing", [fe.fbt._param("firstUser", t[0]), fe.fbt._param("secondUser", t[1])], {
						hk: "3zfAnp"
					}) : t.length > 2 ? fe.fbt._("Several people are typing...", null, {
						hk: "39edn3"
					}) : void 0)(t, n)) : null
				},
				Ua = n("./src/chat/constants/batchSizes.ts"),
				Pa = n("./src/chat/selectors/richUnits.ts"),
				Ra = n("./src/chat/components/MessageList/index.m.less"),
				Ba = n.n(Ra);
			const {
				fbt: Ha
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Fa = Object(sn.a)({
				currentUser: e => e.user.account,
				channelMessages: (e, t) => {
					let {
						channel: {
							channelId: n
						}
					} = t;
					return Object(C.C)(e, n)
				},
				channelPendingMessages: e => Object(C.D)(e),
				fetchingMessages: e => Object(C.E)(e, "fetchingMessages"),
				fetchingMessagesError: e => Object(C.E)(e, "fetchingMessagesError"),
				hasMoreMessages: e => Object(C.E)(e, "hasMoreMessages"),
				isMessageListLoaded: e => Object(C.E)(e, "isMessageListLoaded"),
				isModerator: e => Object(C.a)(e),
				isChatMinimized: lt.d,
				isRichUnitDataReceived: e => Object(Pa.c)(e),
				isFullSize: lt.h,
				showPrompt: Sn.d,
				isImageShareEnabled: (e, t) => Object(B.n)(e, t.channel.channelId),
				isChannelInPendingState: C.M,
				isBlockedUserMessageEnabled: B.d,
				hasBlockedUsers: (e, t) => Object(C.G)(e, t.channel.channelId)
			}), Ga = Object(o.b)(Fa, e => ({
				getPreviousMessages: () => e(Object(J.v)()),
				removeAndResetMessages: t => e(Object($.c)(t)),
				resetChannelMessageList: t => e(Object(Y.M)(t)),
				resetRichUnisDataReceived: () => e(Object(ee.f)()),
				windowSizeChanged: t => e(Object(X.windowSizeChangedAction)(t))
			})), Va = 30, Wa = 2 * Ua.a.Messages, za = 100;
			class Ka extends r.a.Component {
				constructor(e) {
					super(e), this.getWindowDimensions = () => {
						const {
							innerWidth: e,
							innerHeight: t
						} = window;
						return {
							width: e,
							height: t
						}
					}, this.windowResize = () => {
						const e = this.getWindowDimensions();
						this.props.windowSizeChanged(e.width)
					}, this.getOtherMemberName = () => {
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
							case oe.b.Group:
								return this.props.channel.name;
							default:
								return this.getOtherMemberName()
						}
					}, this.scroller = r.a.createRef(), this.loadMoreRows = this.loadMoreRows.bind(this)
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
				componentDidMount() {
					this.props.isFullSize && (this.windowResize(), window.addEventListener("resize", z()(this.windowResize, za)))
				}
				componentWillUnmount() {
					window.removeEventListener("resize", z()(this.windowResize, za))
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
					if (t.length > Va && this.isChannelSwitched(e)) {
						const e = t.length - Va,
							a = t.slice(0, e);
						n(q()(a, e => {
							let {
								messageId: t
							} = e;
							return String(t)
						}))
					}
				}
				removeResetTooOldMessages() {
					var e;
					const t = this.props.channelMessages.length > Wa,
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
							channelPendingMessages: t,
							channelMessages: n,
							currentUser: a,
							fetchingMessagesError: s,
							getPreviousMessages: c,
							isMessageListLoaded: o,
							isModerator: l,
							hasMoreMessages: d,
							isFullSize: u,
							isImageShareEnabled: h,
							isChannelInPendingState: m,
							isBlockedUserMessageEnabled: b,
							hasBlockedUsers: p
						},
						loadMoreRows: g
					} = this, f = this.getTitle(), O = Q()([...n, ...t], "createdAt"), v = !d && o && e.members, E = (null == e ? void 0 : e.type) === oe.b.Direct && p && b;
					return r.a.createElement("div", {
						className: Ba.a.Container
					}, r.a.createElement(D.a, {
						channelId: e.channelId,
						showMenu: !0,
						title: f,
						channelType: null == e ? void 0 : e.type,
						showMembers: !0,
						withBorder: !0
					}), r.a.createElement("div", {
						className: Object(i.a)(Ba.a.ReverseCol, {
							[Ba.a.isFullSize]: u
						})
					}, r.a.createElement(rt.a, {
						className: Ba.a.Scroller,
						autoScrollBottom: !0,
						ref: this.scroller,
						loadMoreRows: g
					}, v ? r.a.createElement(xe, {
						users: e.members,
						channel: e
					}) : s ? r.a.createElement("span", {
						className: Ba.a.LoadingError,
						onClick: c
					}, Ha._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})) : o ? r.a.createElement("span", {
						className: Ba.a.LoadingIndicator
					}, Ha._("Loading history...", null, {
						hk: "4tLHUG"
					})) : r.a.createElement(Ot.e, null), O.length ? r.a.createElement(Ca, {
						channelType: e.type,
						currentUserId: a.id,
						messageList: O
					}) : null)), r.a.createElement("div", {
						className: Object(i.a)(Ba.a.TypingIndicatorWrapper, {
							[Ba.a.isFullSize]: u
						})
					}, e ? r.a.createElement(Da, {
						channelType: e.type
					}) : null), r.a.createElement(wa, {
						className: Ba.a.MessageQuickReplyPicker,
						channelId: e.channelId,
						lastMessage: O[O.length - 1]
					}), h && !m && r.a.createElement(ge, null), b && e ? r.a.createElement(le, {
						channel: e
					}) : null, r.a.createElement(ft, {
						id: Ue.c,
						shouldArrowShow: !1
					}, r.a.createElement(Ma, null)), !E && r.a.createElement(qn, {
						className: Ba.a.MessageInput,
						channelId: e.channelId,
						isLocked: e.isFrozen,
						isModerator: l,
						isMuted: e.isUserMuted,
						scrollToBottom: () => {
							this.scroller.current && this.scroller.current.scrollToBottom()
						}
					}))
				}
			}
			var qa = Ga(Ka),
				Za = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				Qa = n("./src/higherOrderComponents/makeAsync.tsx"),
				Ya = n("./src/lib/loadWithRetries/index.ts");
			const Xa = () => null;
			var Ja = Object(Qa.a)({
					ErrorComponent: Xa,
					getComponent: () => Object(Ya.a)(() => n.e("OverlayCreateChannel").then(n.bind(null, "./src/chat/components/OverlayCreateChannel/index.tsx"))).then(e => e.default),
					LoadingComponent: Xa
				}),
				$a = n("./src/chat/components/ChatIcon/index.tsx"),
				es = n("./src/lib/opener/index.ts"),
				ts = n("./src/chat/components/Message/RichUnit/Comment/loader.tsx"),
				ns = n("./src/chat/components/Message/RichUnit/Post/loader.tsx"),
				as = n("./src/chat/components/OverlayShareToChat/RichUnit/index.m.less"),
				ss = n.n(as);
			const {
				POST: cs,
				USER_POST: rs,
				COMMENT: os
			} = Pe.c;
			var is = e => {
					let {
						chatUnitTypeData: t,
						message: n
					} = e;
					const a = Object(o.e)(e => Object(Pa.a)(e, t));
					return r.a.createElement("div", {
						className: ss.a.Wrapper
					}, a ? ((e, t) => {
						switch (t.type) {
							case rs:
							case cs:
								return r.a.createElement(ns.a, {
									postUrl: e,
									richUnitData: t,
									isSharedToChat: !0
								});
							case os:
								return r.a.createElement(ts.a, {
									richUnitData: t,
									commentUrl: e,
									isSharedToChat: !0
								});
							default:
								return null
						}
					})(n, a) : r.a.createElement("div", {
						role: "button",
						tabIndex: 0,
						className: ss.a.Link,
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(es.e)(t, "_blank")
							})(e, n)
						}
					}, n))
				},
				ls = n("./src/chat/controls/Checkbox/index.tsx"),
				ds = n("./src/chat/controls/Overlay/index.tsx"),
				us = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				hs = n("./src/chat/controls/OverlayHeader/index.m.less"),
				ms = n.n(hs);
			const bs = Zt.a.header("Header", ms.a),
				ps = Zt.a.h1("Title", ms.a),
				gs = Zt.a.span("Normal", ms.a),
				fs = Zt.a.span("Warning", ms.a);
			var Os = e => {
					let {
						message: t,
						title: n,
						warning: a
					} = e;
					const s = a ? fs : gs;
					return r.a.createElement(bs, null, r.a.createElement(ps, null, n), r.a.createElement(s, null, t))
				},
				vs = n("./src/chat/components/OverlayShareToChat/index.m.less"),
				Es = n.n(vs);
			const {
				fbt: js
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _s = e => {
				let {
					channelId: t,
					onClick: n,
					channelFilterValue: a
				} = e;
				var s;
				const [i, l] = Object(c.useState)(!1), d = Object(o.e)(e => Object(C.w)(e, t)), u = Object(o.e)(e => Object(C.l)(e, t)), h = Object(c.useCallback)(() => {
					l(e => (n(!e, t), !e))
				}, [n, t]);
				return Object(c.useMemo)(() => !u || !!a && !u.toLowerCase().includes(a.toLowerCase()), [u, a]) ? null : r.a.createElement("div", {
					className: Es.a.Channel
				}, r.a.createElement(ls.a, {
					checked: i,
					onChange: h,
					className: Es.a.Checkbox
				}, r.a.createElement("div", {
					className: Es.a.CheckboxContent
				}, (null == d ? void 0 : d.firstUser) && r.a.createElement($a.a, {
					className: Es.a.ChannelIcon,
					userId: d.firstUser.id,
					secondUserId: null === (s = d.secondUser) || void 0 === s ? void 0 : s.id,
					isSmall: !0
				}), r.a.createElement("div", {
					className: Es.a.ChannelName
				}, u))))
			}, Cs = e => {
				let {
					onChannelClick: t,
					channels: n,
					chatUnitTypeData: a,
					message: s,
					shouldShowChannels: c,
					searchRef: o,
					channelsFilter: i,
					setChannelsFilter: l,
					onClickCreateNewChannel: d
				} = e;
				return r.a.createElement("div", {
					className: Es.a.Content
				}, r.a.createElement(is, {
					chatUnitTypeData: a,
					message: s
				}), c && r.a.createElement("div", {
					className: Es.a.SearchInput
				}, r.a.createElement("label", {
					htmlFor: "channelSearch",
					className: Es.a.Label
				}, r.a.createElement(_t.a, null)), r.a.createElement("input", {
					ref: o,
					placeholder: "Search chats",
					className: Es.a.Input,
					type: "text",
					value: i,
					onChange: e => {
						l(e.target.value)
					},
					id: "channelSearch"
				})), r.a.createElement("div", {
					className: Es.a.NewChat
				}, r.a.createElement("span", {
					className: Es.a.NewChatContent,
					onClick: d,
					role: "button",
					tabIndex: 0
				}, r.a.createElement(Mt.a, {
					className: Es.a.NewChatIcon
				}), js._("new chat", null, {
					hk: "2JtgH4"
				}))), !c && r.a.createElement("div", {
					className: Es.a.LoadingIndicator
				}, js._("Loading Channels", null, {
					hk: "7Nhm8"
				})), n && c && r.a.createElement(rt.a, {
					className: Es.a.Scroller
				}, n.map(e => r.a.createElement(_s, {
					channelId: e.channelId,
					onClick: t,
					channelFilterValue: i,
					key: e.channelId
				}))))
			};
			var Is = e => {
					let {
						message: t
					} = e;
					const n = Object(o.d)(),
						a = Object(o.f)(),
						s = Object(c.useRef)(null),
						[i, d] = Object(c.useState)([]),
						[u, h] = Object(c.useState)([]),
						[m, b] = Object(c.useState)(""),
						[p, g] = Object(c.useState)(!1),
						f = Object(o.e)(C.J),
						O = Object(o.e)(C.y),
						v = Object(c.useMemo)(() => O >= Ua.a.InitChannels || !f, [O, f]),
						E = Object(c.useCallback)(() => {
							const e = Object(Ze.getShareToNewChatUrl)(t);
							n(Object(Me.b)(e))
						}, [n, t]),
						j = Object(c.useCallback)((e, t) => {
							h(n => e ? [...n, t] : n.filter(e => e !== t))
						}, []),
						_ = Object(c.useMemo)(() => Object(Ze.getChatUnitType)(t), [t]),
						I = Object(c.useMemo)(() => !Boolean(u.length), [u]),
						y = Object(c.useMemo)(() => js._({
							"*": "Share to {amount of chats} chats",
							_1: "Share to {amount of chats} chat"
						}, [js._param("amount of chats", u.length || ""), js._plural(u.length)], {
							hk: "2O8DGN"
						}), [u]);
					Object(c.useEffect)(() => {
						n(Object(ee.e)(_))
					}, [_, n]), Object(c.useEffect)(() => {
						(null == s ? void 0 : s.current) && s.current.focus()
					}, []), Object(c.useEffect)(() => {
						if (v) {
							const e = a.getState();
							Object(C.e)(e).length ? d(Object(C.e)(e)) : E()
						}
					}, [a, E, v]);
					return r.a.createElement(ds.a, null, r.a.createElement(Os, {
						title: js._("Share to chat", null, {
							hk: "MfUYD"
						})
					}), r.a.createElement(Cs, {
						channels: i,
						channelsFilter: m,
						chatUnitTypeData: _,
						shouldShowChannels: v,
						message: t,
						onChannelClick: j,
						onClickCreateNewChannel: () => {
							E()
						},
						searchRef: s,
						setChannelsFilter: b
					}), r.a.createElement(us.a, {
						primaryButtonText: y,
						primaryButtonDisabled: I || p,
						secondaryButtonAction: () => {
							n(Object(Y.P)())
						},
						primaryButtonAction: () => {
							g(!0), n(Object(J.s)(u, t, Pe.c.TEXT)), n(Object(l.L)())
						}
					}))
				},
				ys = n("./src/chat/components/Sidebar/index.tsx"),
				xs = n("./src/chat/actions/sendbird/sdk.ts"),
				Ss = n("./src/chat/constants/toast.ts");

			function Ns() {
				return (Ns = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ws = e => r.a.createElement(p.a, Ns({}, e, {
				viewBox: "0 0 24 21"
			}), r.a.createElement("path", {
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), r.a.createElement("path", {
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zm.1-3.3c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), r.a.createElement("path", {
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}));

			function ks() {
				return (ks = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ts = e => r.a.createElement(p.a, ks({}, e, {
					viewBox: "0 0 24 25"
				}), r.a.createElement("path", {
					d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
				}), r.a.createElement("path", {
					fill: "#FFF",
					d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
				}), r.a.createElement("path", {
					d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
				}), r.a.createElement("path", {
					fill: "#FFF",
					d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
				})),
				Ms = n("./src/chat/components/ToastNotification/index.m.less"),
				As = n.n(Ms);
			const Ls = [Ss.a.ConnectionClosed, Ss.a.ConnectionPending],
				Ds = [Ss.a.SomethingWentWrong, Ss.a.ShareLinkRateLimit, Ss.a.ShareLinkGone, Ss.a.ShareLinkInvalidRequest, Ss.a.ShareLinkNotFound, _.a.UnsupportedBrowser, _.a.InvalidMediaType, _.a.FileSizeLimitExceeded, _.a.ActiveFilesLimitExceeded],
				Us = [Ss.a.LinkDisabled, Ss.a.ChangesSaved, Ss.a.MuteNotifications, Ss.a.UnmuteNotifications],
				Ps = e => Ls.includes(e),
				Rs = e => Ds.includes(e),
				Bs = e => Us.includes(e);
			var Hs = () => {
					const e = Object(o.e)(e => e.toast.toast),
						t = Object(o.e)(e => e.toast.customErrorMessage),
						n = Object(o.d)(),
						a = Object(o.e)(lt.h);
					return r.a.createElement("div", {
						className: Object(i.a)(As.a.Wrapper, {
							[As.a.show]: !!e || !!t
						})
					}, (e || t) && r.a.createElement("div", {
						className: Object(i.a)(As.a.Content, {
							[As.a.pending]: Ps(e),
							[As.a.error]: Boolean(t) || Rs(e),
							[As.a.info]: Bs(e),
							[As.a.isFullSize]: a
						})
					}, r.a.createElement("button", {
						className: As.a.CloseButton,
						onClick: () => {
							n(Object(j.c)(0))
						}
					}, r.a.createElement(ue.a, {
						className: As.a.CloseButtonIcon
					})), r.a.createElement("div", {
						className: As.a.InfoWrapper
					}, r.a.createElement("div", {
						className: As.a.Icon
					}, t ? r.a.createElement(ws, null) : e && (e => {
						switch (e) {
							case Ss.a.LinkCopied:
							case Ss.a.LinkDisabled:
							case Ss.a.ConnectionOpen:
							case Ss.a.ChangesSaved:
							case Ss.a.MuteNotifications:
							case Ss.a.UnmuteNotifications:
								return r.a.createElement(Ts, null);
							case Ss.a.ConnectionPending:
							case Ss.a.ConnectionClosed:
							case Ss.a.SomethingWentWrong:
							case Ss.a.ShareLinkRateLimit:
							case Ss.a.ShareLinkGone:
							case Ss.a.ShareLinkInvalidRequest:
							case Ss.a.ShareLinkNotFound:
							case _.a.UnsupportedBrowser:
							case _.a.InvalidMediaType:
							case _.a.FileSizeLimitExceeded:
							case _.a.ActiveFilesLimitExceeded:
								return r.a.createElement(ws, null);
							default:
								return null
						}
					})(e)), r.a.createElement("div", {
						className: As.a.Message
					}, t || e && (e => {
						switch (e) {
							case _.a.ActiveFilesLimitExceeded:
								return fe.fbt._("Oops! Too many files per message", null, {
									hk: "2x9klR"
								});
							case Ss.a.ConnectionOpen:
								return fe.fbt._("Found the internet!", null, {
									hk: "3jLr8W"
								});
							case Ss.a.ConnectionPending:
								return fe.fbt._("Looking for the internet...", null, {
									hk: "1JPRuh"
								});
							case Ss.a.ConnectionClosed:
								return fe.fbt._("Hmm, no internet?", null, {
									hk: "134peM"
								});
							case Ss.a.ChangesSaved:
								return fe.fbt._("Changes saved", null, {
									hk: "1FxMVf"
								});
							case Ss.a.SomethingWentWrong:
								return fe.fbt._("Oops! Something went wrong", null, {
									hk: "4CGwU7"
								});
							case Ss.a.LinkCopied:
								return fe.fbt._("Link copied!", null, {
									hk: "1YEENU"
								});
							case Ss.a.LinkDisabled:
								return fe.fbt._("Your links have been reset", null, {
									hk: "4i3xdA"
								});
							case Ss.a.MuteNotifications:
								return fe.fbt._("Notifications muted", null, {
									hk: "3RNnH2"
								});
							case _.a.UnsupportedBrowser:
								return fe.fbt._("Oops! Unsupported browser for Media uploading", null, {
									hk: "3incN0"
								});
							case _.a.InvalidMediaType:
								return fe.fbt._("Oops! Chat only supports files in JPEG, PNG and GIF format", null, {
									hk: "8s0vB"
								});
							case _.a.FileSizeLimitExceeded:
								return fe.fbt._("Oops! Media file size limit exceeded. {Max gif file size}MB for GIF and {Max image file size}MB for JPEG and PNG", [fe.fbt._param("Max gif file size", String(40)), fe.fbt._param("Max image file size", String(20))], {
									hk: "2twjo7"
								});
							case Ss.a.ShareLinkRateLimit:
								return fe.fbt._("That didn't work, try joining the chat later", null, {
									hk: "30uvo2"
								});
							case Ss.a.ShareLinkInvalidRequest:
							case Ss.a.ShareLinkNotFound:
							case Ss.a.ShareLinkGone:
								return fe.fbt._("This link has expired", null, {
									hk: "3GpAgM"
								});
							case Ss.a.UnmuteNotifications:
								return fe.fbt._("Notifications unmuted", null, {
									hk: "33DlwH"
								});
							default:
								return null
						}
					})(e)), r.a.createElement("button", {
						className: As.a.ActionButton,
						onClick: () => {
							if (e) {
								const t = (e => {
									switch (e) {
										case Ss.a.ConnectionClosed:
											return xs.g;
										case Ss.a.MuteNotifications:
											return Oe.g;
										case Ss.a.UnmuteNotifications:
											return Oe.e;
										default:
											return null
									}
								})(e);
								t && n(t())
							}
						}
					}, e && (e => {
						switch (e) {
							case Ss.a.ConnectionClosed:
								return fe.fbt._("RECONNECT", null, {
									hk: "3jJ04G"
								});
							case Ss.a.MuteNotifications:
								return fe.fbt._("UNMUTE", null, {
									hk: "2Ucq6J"
								});
							case Ss.a.UnmuteNotifications:
								return fe.fbt._("MUTE", null, {
									hk: "28ou5Z"
								});
							default:
								return ""
						}
					})(e)))))
				},
				Fs = n("./src/chat/constants/container.ts");
			const Gs = () => null;
			var Vs = Object(Qa.a)({
					ErrorComponent: Gs,
					getComponent: () => Object(Ya.a)(() => n.e("OverlayBlockUser").then(n.bind(null, "./src/chat/components/OverlayBlockUser/index.tsx"))).then(e => e.default),
					LoadingComponent: Gs
				}),
				Ws = n("./src/chat/actions/channelsFilter/index.ts"),
				zs = n("./src/chat/components/UserMetaInfo/index.m.less"),
				Ks = n.n(zs);
			var qs = e => {
					let {
						contact: t
					} = e;
					return r.a.createElement("div", {
						className: Ks.a.UserMetaInfo
					}, ((e, t) => {
						const n = (new Date).getTime(),
							a = Math.round(Math.abs((e - n) / Ae.E)),
							s = Math.round(Math.abs((e - n) / Ae.yc));
						let c = "";
						const r = `${a}${fe.fbt._("d",null,{hk:"1d5Wxl"})}`,
							o = `${s}${fe.fbt._("y",null,{hk:"3DaEfY"})}`;
						return c = s < 1 ? `${r}` : `${o}`, `${`${Object(da.b)(t||0)} ${fe.fbt._("karma",null,{hk:"4cmcG"})}`} • ${fe.fbt._("redditor for {amount of time}",[fe.fbt._param("amount of time",c)],{hk:"3o8EdY"})}`
					})(t.created, t.totalKarma))
				},
				Zs = n("./src/chat/controls/MediaObject/index.m.less"),
				Qs = n.n(Zs);
			const Ys = Zt.a.wrapped(e => {
				const [t, n, a] = r.a.Children.toArray(e.children);
				return r.a.createElement("div", {
					className: e.className
				}, t, n, a)
			}, "MediaObject", Qs.a);
			var Xs = n("./src/chat/controls/Title/index.tsx"),
				Js = n("./src/chat/icons/Nsfw/index.tsx"),
				$s = n("./src/chat/selectors/channelsFilter.ts"),
				ec = n("./src/chat/icons/svgs/Block/index.tsx"),
				tc = n("./src/chat/components/OverlayChannelInvited/BlockedUsersPreview/index.m.less"),
				nc = n.n(tc);
			const {
				fbt: ac
			} = n("./node_modules/fbt/lib/FbtPublic.js"), sc = e => {
				let {
					userId: t
				} = e;
				return r.a.createElement("div", {
					className: nc.a.UserIcon
				}, r.a.createElement($a.a, {
					key: t,
					userId: t,
					customPicSize: 40
				}), r.a.createElement("div", {
					className: nc.a.SubIconWrapper
				}, r.a.createElement(ec.a, {
					className: nc.a.SubIcon,
					isFilled: !0
				})))
			};
			var cc = () => {
					const e = Object(o.e)(C.n),
						t = null == e ? void 0 : e.members.reduce((e, t) => t.isBlockedByMe ? [...e, t.name] : e, []),
						n = t && t.length <= 4 ? 4 : 3,
						a = (null == t ? void 0 : t.length) ? (null == t ? void 0 : t.length) - n : 0;
					return r.a.createElement("div", {
						className: nc.a.BlockedUsersPreview
					}, r.a.createElement("div", {
						className: nc.a.MembersIcons
					}, null == e ? void 0 : e.members.reduce((e, t) => t.isBlockedByMe ? [...e, r.a.createElement(sc, {
						key: t.id,
						userId: t.id
					})] : e, []).slice(0, n)), r.a.createElement("div", {
						className: nc.a.Message
					}, r.a.createElement("span", {
						className: nc.a.WarningMessage
					}, ac._("Heads up: you've blocked {name}", [ac._param("name", null == t ? void 0 : t.slice(0, n).join(", "))], {
						hk: "22NnY"
					}), a > 0 && r.a.createElement(r.a.Fragment, null, " ", ac._({
						"*": "and {totalOthersBlocked} others",
						_1: "and 1 other"
					}, [ac._plural(a, "totalOthersBlocked")], {
						hk: "1eT3ED"
					})), " ", ac._("in this chat", null, {
						hk: "CP5Sx"
					})), ac._(". If you accept you'll be able to see each other's messages and activity. They'll remain blocked on the rest of Reddit.", null, {
						hk: "2p46CR"
					})))
				},
				rc = n("./src/chat/components/OverlayChannelInvited/index.m.less"),
				oc = n.n(rc);
			const {
				fbt: ic
			} = n("./node_modules/fbt/lib/FbtPublic.js"), lc = e => {
				let {
					children: t
				} = e;
				return r.a.createElement("span", {
					className: oc.a.LightTextSmall
				}, t)
			}, dc = e => {
				let {
					inviterContact: t
				} = e;
				return t ? r.a.createElement(lc, null, r.a.createElement(qs, {
					contact: t
				})) : null
			}, uc = e => {
				let {
					channelInviter: t,
					inviterContact: n,
					channelMessages: a,
					channelType: s,
					channelId: c,
					onViewMembers: o
				} = e;
				const i = n && !!n.isNSFW;
				return t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("a", {
					target: es.d.BLANK,
					rel: es.c,
					href: `${Tt.a.redditUrl}/user/${t.name}`
				}, r.a.createElement(Ys, {
					className: oc.a.MediaObject
				}, i ? r.a.createElement(Js.a, {
					className: oc.a.NSFWIcon
				}) : r.a.createElement(Ce.a, {
					className: oc.a.UserPic,
					userId: t.id
				}), r.a.createElement("div", {
					className: oc.a.TitleContainer
				}, r.a.createElement(Xs.a, {
					className: oc.a.Title,
					bold: !0
				}, t.name), i && r.a.createElement("span", {
					className: oc.a.WarningTextNSFW
				}, ic._("NSFW", null, {
					hk: "3rI4EF"
				}))), r.a.createElement(dc, {
					inviterContact: n
				}))), r.a.createElement("div", {
					className: oc.a.ActionButtonsWrapper
				}, r.a.createElement(de.b, {
					className: oc.a.IconButton,
					text: ic._("Members", null, {
						hk: "3IBb8c"
					}),
					onClick: o
				}, r.a.createElement(_e.a, null))), void 0 !== s && c && r.a.createElement(hc, {
					channelType: s,
					channelMessages: a
				}), r.a.createElement("div", {
					className: oc.a.Container
				})) : null
			}, hc = e => {
				let {
					channelType: t,
					channelMessages: n
				} = e;
				const a = Q()([...n], "createdAt");
				return n && n.length ? r.a.createElement(Ca, {
					channelType: t,
					messageList: a,
					inPreview: !0
				}) : null
			}, mc = e => {
				let {
					userName: t
				} = e;
				return r.a.createElement("p", null, ic._("Accept to chat with {userName}{=. If you ignore, the chat request will be removed, and we won’t let the sender know.}", [ic._param("userName", r.a.createElement("span", {
					className: oc.a.BoldText
				}, t)), ic._param("=. If you ignore, the chat request will be removed, and we won’t let the sender know.", r.a.createElement("span", null, ic._(". If you ignore, the chat request will be removed, and we won’t let the sender know.", null, {
					hk: "3PxerO"
				})))], {
					hk: "4pQEpv"
				}))
			}, bc = e => {
				let {
					userName: t,
					isQuickActionBlock: n
				} = e;
				return n ? ic._("Are you sure you want to block {userName}", [ic._param("userName", r.a.createElement("span", {
					className: oc.a.BoldText
				}, ` ${t}?`))], {
					hk: "12VekN"
				}) : ic._("Are you sure you want to mark this chat as spam? You will also block {userName}", [ic._param("userName", r.a.createElement("span", {
					className: oc.a.BoldText
				}, ` ${t}?`))], {
					hk: "1teJQL"
				})
			};
			var pc = e => {
				let {
					channelId: t
				} = e;
				var n, a;
				const s = Object(o.d)(),
					[i, d] = Object(c.useState)(!1),
					u = Object(o.e)($s.a),
					h = Object(o.e)(B.s);
				Object(c.useEffect)(() => {
					d(!1)
				}, [t]);
				const m = Object(o.e)(e => Object(C.j)(e, t)),
					b = Object(o.e)(e => Object(Xe.d)(e, t)),
					p = Object(o.e)(e => Object(C.C)(e, t)),
					g = Object(o.e)(B.v),
					f = Object(o.e)(B.x),
					O = Object(o.e)(B.d),
					v = Object(o.e)(B.e),
					E = g ? ic._("Block", null, {
						hk: "4CA4VX"
					}) : ic._("Mark as spam", null, {
						hk: "3Iy1wd"
					}),
					j = (null == m ? void 0 : m.type) === oe.b.Direct,
					_ = j ? ic._("Chat Request", null, {
						hk: "1sWJM0"
					}) : ic._("Group invite", null, {
						hk: "JPFyz"
					}),
					I = m && m.members.some(e => e.isBlockedByMe);
				return r.a.createElement(ds.a, null, r.a.createElement(D.a, {
					channelId: t,
					title: _,
					showMenu: j
				}), r.a.createElement(rt.a, {
					className: oc.a.Scroller
				}, r.a.createElement(uc, {
					channelInviter: null == m ? void 0 : m.inviter,
					channelMessages: p,
					inviterContact: b,
					channelId: null == m ? void 0 : m.channelId,
					channelType: null == m ? void 0 : m.type,
					onViewMembers: () => {
						s(Object(Oe.k)())
					}
				})), r.a.createElement("div", {
					className: oc.a.OverlayControlBarWrapper
				}, i ? r.a.createElement(us.a, {
					className: oc.a.OverlayControlBar,
					secondaryButtonText: ic._("Nevermind", null, {
						hk: "30ppMU"
					}),
					primaryButtonText: E,
					primaryButtonAction: () => {
						b && (s(Object(Y.C)(t, b)), g && s(Object(l.r)()), f && s(Object(l.t)(t, p)))
					},
					secondaryButtonAction: () => {
						s(Object(Y.Q)(te.b.INVITED, t))
					}
				}, r.a.createElement(bc, {
					userName: null === (n = null == m ? void 0 : m.inviter) || void 0 === n ? void 0 : n.name,
					isQuickActionBlock: g
				})) : r.a.createElement(us.a, {
					className: oc.a.OverlayControlBar,
					secondaryButtonText: ic._("Ignore", null, {
						hk: "1ws6QH"
					}),
					secondaryButtonAction: () => {
						b && (s(Object(Y.C)(t, b, !0)), s(Object(l.s)(t)))
					},
					primaryButtonText: ic._("Accept", null, {
						hk: "249yqF"
					}),
					primaryButtonAction: () => {
						s(Object(Y.z)(t)), s(Object(l.q)(t)), h && u === oe.g.Requests && s(Object(Ws.d)({
							filter: oe.g.ALL
						}))
					},
					primaryButtonBlock: g || f,
					primaryButtonBlockText: E,
					primaryButtonBlockAction: () => d(!0)
				}, r.a.createElement(r.a.Fragment, null, r.a.createElement(mc, {
					userName: null === (a = null == m ? void 0 : m.inviter) || void 0 === a ? void 0 : a.name
				}), O && I && !v && m ? r.a.createElement(cc, null) : null))))
			};
			const gc = () => null;
			var fc = Object(Qa.a)({
				ErrorComponent: gc,
				getComponent: () => Object(Ya.a)(() => n.e("OverlayChannelRemoval").then(n.bind(null, "./src/chat/components/OverlayChannelRemoval/index.tsx"))).then(e => e.default),
				LoadingComponent: gc
			});
			const Oc = () => null;
			var vc = Object(Qa.a)({
					ErrorComponent: Oc,
					getComponent: () => Object(Ya.a)(() => n.e("OverlayDeleteMessage").then(n.bind(null, "./src/chat/components/OverlayDeleteMessage/index.tsx"))).then(e => e.default),
					LoadingComponent: Oc
				}),
				Ec = n("./src/chat/components/OverlayDirectsEmptySkeletonState/index.tsx");
			const jc = () => null;
			var _c = Object(Qa.a)({
				ErrorComponent: jc,
				getComponent: () => Object(Ya.a)(() => n.e("OverlayDirectsEmptyState").then(n.bind(null, "./src/chat/components/OverlayDirectsEmptyState/index.tsx"))).then(e => e.default),
				LoadingComponent: jc
			});
			const Cc = () => null;
			var Ic = Object(Qa.a)({
				ErrorComponent: Cc,
				getComponent: () => Object(Ya.a)(() => n.e("OverlayGroupAbout").then(n.bind(null, "./src/chat/components/OverlayGroupAbout/index.tsx"))).then(e => e.default),
				LoadingComponent: Cc
			});
			const yc = () => null;
			var xc = Object(Qa.a)({
				ErrorComponent: yc,
				getComponent: () => Object(Ya.a)(() => n.e("OverlayLinkSharingSettings").then(n.bind(null, "./src/chat/components/OverlayLinkSharingSettings/index.tsx"))).then(e => e.default),
				LoadingComponent: yc
			});
			const Sc = () => null;
			var Nc = Object(Qa.a)({
				ErrorComponent: Sc,
				getComponent: () => Object(Ya.a)(() => n.e("OverlayNSFWWarning").then(n.bind(null, "./src/chat/components/OverlayNSFWWarning/index.tsx"))).then(e => e.default),
				LoadingComponent: Sc
			});
			const wc = () => null;
			var kc = Object(Qa.a)({
				ErrorComponent: wc,
				getComponent: () => Object(Ya.a)(() => n.e("OverlayPrivacyAndSupport").then(n.bind(null, "./src/chat/components/OverlayPrivacyAndSupport/index.tsx"))).then(e => e.default),
				LoadingComponent: wc
			});
			const Tc = () => null;
			var Mc = Object(Qa.a)({
				ErrorComponent: Tc,
				getComponent: () => Object(Ya.a)(() => n.e("ChatOverlayReport").then(n.bind(null, "./src/chat/components/OverlayReport/index.tsx"))).then(e => e.default),
				LoadingComponent: Tc
			});
			const Ac = () => null;
			var Lc = Object(Qa.a)({
				ErrorComponent: Ac,
				getComponent: () => Object(Ya.a)(() => n.e("OverlayThemes").then(n.bind(null, "./src/chat/components/OverlayThemes/index.tsx"))).then(e => e.default),
				LoadingComponent: Ac
			});
			const Dc = e => e.userIds ? r.a.createElement(Ec.a, null) : e.action === te.a.CREATE || e.action === te.a.START_GROUP ? r.a.createElement(Ja, null) : e.channelId ? e.action === te.a.VIEW_INVITE && e.channelId ? r.a.createElement(pc, {
				channelId: e.channelId
			}) : e.action === te.a.VIEW_ABOUT && e.channelId ? r.a.createElement(Ic, {
				channelId: e.channelId
			}) : e.action === te.a.INVITE_MEMBERS && e.channelId ? r.a.createElement(Ja, null) : e.action === te.a.VIEW_NSFW_CONFIRMATION && e.channelId ? r.a.createElement(Nc, {
				channelId: e.channelId
			}) : e.action === te.a.THEMES && e.channelId ? r.a.createElement(Lc, null) : e.action === ze.a.Block && e.attrId && e.channelId ? r.a.createElement(Vs, {
				channelId: e.channelId,
				blockedUserId: e.attrId
			}) : e.action === Pe.a.DELETE && e.channelId && e.attrId ? r.a.createElement(vc, {
				channelId: e.channelId,
				messageId: parseInt(e.attrId)
			}) : e.action === Pe.a.REPORT && e.attr && e.attrId && e.channelId ? r.a.createElement(Mc, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : e.action === te.a.DENY && e.channelId ? r.a.createElement(fc, {
				channelId: e.channelId
			}) : e.action === te.a.INVITE_LINK_SETTINGS && e.channelId ? r.a.createElement(xc, {
				inviteLinkDataModelId: e.channelId,
				isForDirect: !!e.attr
			}) : e.action === te.a.PRIVACY_SUPPORT && e.channelId ? r.a.createElement(kc, null) : void 0 : r.a.createElement(_c, null);
			var Uc = n("./src/chat/selectors/platform.ts"),
				Pc = n("./src/chat/selectors/sidebar.ts"),
				Rc = n("./src/chat/components/FrameContent/index.m.less"),
				Bc = n.n(Rc);
			const Hc = Bc.a.Main,
				Fc = Object(sn.a)({
					channel: C.p,
					container: lt.a,
					userAccount: ba.e,
					isSidebarVisible: Pc.b,
					isImageShareEnabled: (e, t) => Object(B.n)(e, t.match.params.channelId),
					isChannelInPendingState: C.M,
					queryParamsFromUrl: Uc.c,
					isLiveChatInChatTabEnabled: e => Object(B.s)(e)
				}),
				Gc = Object(o.b)(Fc, e => ({
					fetchLiveChats: () => e(Object(L.fetchLiveChats)()),
					sendChatTabViewEvent: () => e(Object(l.kb)())
				}));
			class Vc extends r.a.Component {
				constructor() {
					super(...arguments), this.mainRef = r.a.createRef()
				}
				shouldComponentUpdate(e, t) {
					return !s()(this.props, e) || !s()(this.state, t)
				}
				componentDidMount() {
					this.props.isLiveChatInChatTabEnabled && (this.props.fetchLiveChats(), this.props.sendChatTabViewEvent())
				}
				getContent() {
					const {
						channel: e,
						container: t,
						userAccount: n,
						isSidebarVisible: a,
						isImageShareEnabled: s,
						isChannelInPendingState: c,
						queryParamsFromUrl: o
					} = this.props, {
						action: l,
						channelId: d,
						postId: u
					} = this.props.match.params;
					switch (!0) {
						case !n:
							return null;
						case l === te.a.SHARE: {
							const e = o && o.message;
							return this.props.location.search && e && r.a.createElement(Is, {
								message: e
							})
						}
						case l === te.a.SHARE_NEW_CHANNEL: {
							const e = o && o.message;
							return r.a.createElement(Ja, {
								messageValue: e
							})
						}
						case t === Fs.a.MINIMIZED:
							return r.a.createElement(Za.a, null);
						default: {
							let n;
							if (u) n = r.a.createElement(V, {
								postId: u
							});
							else {
								const t = Dc({
									...this.props.match.params
								});
								t ? n = r.a.createElement("div", {
									className: Bc.a.Modal
								}, t) : e && d && (n = r.a.createElement(r.a.Fragment, null, r.a.createElement(qa, {
									channel: e
								}), s && !c && r.a.createElement(M, {
									dropZoneRef: this.mainRef
								})))
							}
							return r.a.createElement("div", {
								className: Bc.a.Main
							}, r.a.createElement(ys.b, null), r.a.createElement("div", {
								ref: this.mainRef,
								className: Object(i.a)(Bc.a.Content, {
									[Bc.a.hidden]: a,
									[Bc.a.isFullSize]: t === Fs.a.FULL
								})
							}, n))
						}
					}
				}
				render() {
					return r.a.createElement("main", {
						className: Bc.a.Main,
						id: ot.a
					}, this.getContent(), r.a.createElement(Hs, null))
				}
			}
			t.b = Gc(Vc)
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
				userTitle: "_2MAeUeEw0C9eRjZ5ETlKtA",
				IconButtons: "_32MfHTKpPYMHivpKgO9PVO",
				iconButtons: "_32MfHTKpPYMHivpKgO9PVO",
				IconButton: "_3VPQNDPEWhBHYNbUFUBLSW",
				iconButton: "_3VPQNDPEWhBHYNbUFUBLSW"
			}
		},
		"./src/chat/components/LiveChatIframe/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1X5iJoOr9l27dR2bNW81PJ",
				container: "_1X5iJoOr9l27dR2bNW81PJ",
				LoaderWrapper: "_32j20nAVUQ79kITEP7jvBQ",
				loaderWrapper: "_32j20nAVUQ79kITEP7jvBQ",
				LoaderIcon: "_1J8CQjbNYiDVlqaaqOenrM",
				loaderIcon: "_1J8CQjbNYiDVlqaaqOenrM",
				spin: "_32w2CWCZI5RoG_oOangou8",
				Iframe: "_1-yWdURsmK2tfjWb6GY1A9",
				iframe: "_1-yWdURsmK2tfjWb6GY1A9"
			}
		},
		"./src/chat/components/LiveChatListItem/index.m.less": function(e, t, n) {
			e.exports = {
				LiveChatListItem: "_145hehZtyGvH0RNtGm1Ks9",
				liveChatListItem: "_145hehZtyGvH0RNtGm1Ks9",
				selected: "_5tChBRck1OQMr7qoAZP1T",
				SubredditIcon: "_2rC9jt5KFXXNZ__feVIzGG",
				subredditIcon: "_2rC9jt5KFXXNZ__feVIzGG",
				Icon: "_2CV195IfwfGlP5D0X4gAl-",
				icon: "_2CV195IfwfGlP5D0X4gAl-",
				DefaultIcon: "i96uk_MsXzLKrajYmJ-Z6",
				defaultIcon: "i96uk_MsXzLKrajYmJ-Z6",
				DefaultIconDark: "_17BpanoT_tNfQE8dGsUTg5",
				defaultIconDark: "_17BpanoT_tNfQE8dGsUTg5",
				LiveLabel: "_3THmbpQB_oyQ3Fw9uEtcbF",
				liveLabel: "_3THmbpQB_oyQ3Fw9uEtcbF",
				PostDetails: "_1SfC57L3vJCQC6dRc5pmbO",
				postDetails: "_1SfC57L3vJCQC6dRc5pmbO",
				PostTitle: "tEsnqMHX_sQ61Yz4ETHLC",
				postTitle: "tEsnqMHX_sQ61Yz4ETHLC",
				PostMetadata: "_2qFwK0rq_b1y40BDyOoHge",
				postMetadata: "_2qFwK0rq_b1y40BDyOoHge",
				Clock: "_2qFBGz2GuRWoQ1QMT8L7Z",
				clock: "_2qFBGz2GuRWoQ1QMT8L7Z",
				unreadCounterContainer: "TI-8aj1oBFpSkWCayF4Hx",
				AnimatedRings: "_1mCZNiYDCAJEYP0jHUXD-p",
				animatedRings: "_1mCZNiYDCAJEYP0jHUXD-p",
				ringInner: "_2nfSu7KlAsybS3B1LcigI4",
				ringMiddle: "_1VhE0BY-RlzJF2pysGRdTE",
				ringOuter: "lh59Rqjf6eq_yBKNePVE_",
				animatedRing: "BwY5ryoYIj5iuLrcV6pf_",
				reverbInner: "Ftlv8r9bP3L0ob4Oa8Dtf",
				reverbMiddle: "_1v1PUYv9WY4fdwPRbaVia5",
				reverbOuter: "_1EMYAOa3ctlCyDg1GNgjw_",
				"marquee-when-overflow": "_2qCtwDNk8HCAS4IHHuHj3S",
				marqueeWhenOverflow: "_2qCtwDNk8HCAS4IHHuHj3S"
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
				OptionsContainer: "_888MHsCf-A3Qic064GKDN",
				optionsContainer: "_888MHsCf-A3Qic064GKDN",
				IconButton: "_2ZCSEIUbXFLRFwa3VeJF8h",
				iconButton: "_2ZCSEIUbXFLRFwa3VeJF8h"
			}
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
				currentUser: "_33X8hGUdBNhl9th7LARwP1",
				withBorder: "_3ey3bKaKuSVt2EZD-7y5ng",
				withSettings: "_3N9RSHaPwK5VHtiJHn06ot",
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
				MenuWrapper: "_38kQpxB13RNTmB6pi0RGRe",
				menuWrapper: "_38kQpxB13RNTmB6pi0RGRe",
				reverse: "eIZJBQCcymVXMS3txx--6",
				BubbleMenu: "_1H8qvb5MfxLxWX7VGoM_tM",
				bubbleMenu: "_1H8qvb5MfxLxWX7VGoM_tM",
				ReactionsMenu: "_3ULDvJ2SXeZICpnHaVzkTa",
				reactionsMenu: "_3ULDvJ2SXeZICpnHaVzkTa",
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
				c = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/combineRefs/index.tsx"),
				l = n("./src/lib/hooks/useTooltip.ts"),
				d = n("./src/lib/opener/index.ts"),
				u = n("./src/chat/actions/theme.ts"),
				h = n("./src/chat/actions/tracking.ts"),
				m = n("./src/chat/components/ChatIcon/index.tsx"),
				b = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./src/chat/components/Modals/KickUser/index.tsx"),
				g = n("./src/chat/components/Modals/ModalOverlay/index.tsx"),
				f = n("./src/chat/constants/messages.ts"),
				O = n("./src/chat/controls/Button/index.tsx"),
				v = n("./src/chat/helpers/urls/index.ts"),
				E = n("./src/chat/models/User/member.ts"),
				j = n("./src/chat/components/Message/ActionButtonGroup.m.less"),
				_ = n.n(j);
			const C = e => {
				let {
					children: t,
					onClick: n
				} = e;
				return c.a.createElement("span", {
					className: _.a.ActionButton,
					onClick: n
				}, t)
			};
			var I = e => {
					const t = g.d,
						[n, a] = Object(s.useState)(!1),
						{
							channelId: i,
							message: {
								messageId: l,
								sender: d
							},
							fromCurrentUser: u,
							inPreview: h,
							isMod: m
						} = e,
						j = null == d ? void 0 : d.userId,
						I = Object(E.a)(d),
						y = Object(r.d)(),
						x = Object(s.useCallback)(() => {
							y(Object(b.b)(Object(v.messageActionUrl)(i, l, f.a.DELETE)))
						}, [y, i, l]),
						S = Object(s.useCallback)(() => {
							y(Object(b.b)(Object(v.inviteMessageActionUrl)(i, l, f.a.REPORT)))
						}, [y, i, l]),
						N = Object(s.useCallback)(() => {
							y(Object(b.b)(Object(v.messageActionUrl)(i, l, f.a.REPORT)))
						}, [y, i, l]);
					return c.a.createElement("div", {
						className: Object(o.a)(_.a.Wrapper, {
							[_.a.single]: !m || u
						})
					}, m && !u ? c.a.createElement(c.a.Fragment, null, c.a.createElement(C, {
						onClick: x
					}, c.a.createElement(O.f, {
						className: _.a.Button
					})), c.a.createElement(C, {
						onClick: () => h ? S() : N()
					}, c.a.createElement(O.c, {
						className: _.a.Button
					})), c.a.createElement(C, {
						onClick: () => {
							j && a(!0)
						}
					}, c.a.createElement(O.e, {
						className: _.a.Button
					}))) : u ? c.a.createElement(C, {
						onClick: x
					}, c.a.createElement(O.f, {
						className: _.a.Button
					})) : c.a.createElement(C, {
						onClick: () => h ? S() : N()
					}, c.a.createElement(O.c, {
						className: _.a.Button
					})), c.a.createElement(t.Provider, {
						value: () => {
							a(!1)
						}
					}, n ? c.a.createElement(p.a, {
						userToKick: I
					}) : null))
				},
				y = n("./src/lib/lessComponent.tsx"),
				x = n("./src/chat/actions/message/index.ts"),
				S = n("./src/chat/controls/TextButton.tsx"),
				N = n("./src/chat/components/Message/CollapsedMessage.m.less"),
				w = n.n(N);
			var k = Object(r.b)(void 0, (e, t) => ({
					uncollapseMessage: () => {
						e(Object(x.C)(t)), e(Object(h.U)(t.messageId))
					},
					viewCollapsedMessage: () => {
						e(Object(h.lb)(t.messageId))
					}
				}))(y.a.wrapped(e => {
					let {
						className: t,
						uncollapseMessage: n,
						viewCollapsedMessage: s
					} = e;
					return c.a.createElement("div", {
						onLoad: s,
						className: t
					}, a.fbt._("This message has been collapsed due to potentially offensive language.", null, {
						hk: "4qscuz"
					}), c.a.createElement("div", null, c.a.createElement(S.a, {
						onClick: n
					}, a.fbt._("View Message", null, {
						hk: "QjaEs"
					}))))
				}, "CollapsedMessage", w.a)),
				T = n("./src/chat/components/Message/FailedMenu.m.less"),
				M = n.n(T);
			const A = y.a.div("ButtonControls", M.a),
				L = y.a.span("Text", M.a),
				D = y.a.wrapped(O.a, "Button", M.a);
			class U extends s.Component {
				constructor() {
					super(...arguments), this.handleResend = () => this.props.onResend(this.props.clientMessageId), this.handleDelete = () => this.props.onDelete(this.props.clientMessageId)
				}
				render() {
					return c.a.createElement(A, null, c.a.createElement(L, null, a.fbt._("Failed to send", null, {
						hk: "2feF2H"
					})), c.a.createElement(D, {
						noBorder: !0,
						onClick: this.handleResend
					}, a.fbt._("Resend", null, {
						hk: "cXpU3"
					})), c.a.createElement(D, {
						warningNoBorder: !0,
						onClick: this.handleDelete
					}, a.fbt._("Delete", null, {
						hk: "4lt26q"
					})))
				}
			}
			var P = Object(r.b)(void 0, (e, t) => {
					let {
						channelId: n
					} = t;
					return {
						onResend: t => e(Object(x.A)(n, t)),
						onDelete: t => e(Object(x.z)({
							clientMessageId: t
						}))
					}
				})(U),
				R = n("./src/chat/components/Message/LinkedText.tsx"),
				B = n("./src/lib/portal/index.tsx"),
				H = n("./src/chat/constants/keys.ts"),
				F = n("./src/chat/icons/svgs/NavClose/index.tsx"),
				G = n("./src/chat/components/MediaPreview/index.m.less"),
				V = n.n(G);
			var W = e => {
					let {
						onClose: t,
						url: n
					} = e;
					const a = Object(s.useRef)(null);
					Object(s.useEffect)(() => {
						(null == a ? void 0 : a.current) && a.current.focus()
					}, []);
					const r = Object(s.useCallback)(e => {
						e.key === H.h && t()
					}, [t]);
					return c.a.createElement(B.a, null, c.a.createElement("div", {
						ref: a,
						className: V.a.MediaPreview,
						onClick: t,
						onKeyDown: r,
						tabIndex: 0,
						role: "button",
						"aria-pressed": "false"
					}, c.a.createElement(O.d, {
						className: V.a.CloseIcon
					}, c.a.createElement(F.a, null)), n && c.a.createElement("img", {
						className: V.a.Image,
						src: n,
						onClick: e => e.stopPropagation()
					})))
				},
				z = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx");
			var K = n("./src/chat/helpers/linkParser/index.ts"),
				q = n("./src/chat/models/Message/adapter.ts"),
				Z = n("./src/chat/models/Uploads/index.ts"),
				Q = n("./src/chat/selectors/app.ts"),
				Y = n("./src/chat/selectors/uploads.ts"),
				X = n("./src/chat/components/Message/Media/index.m.less"),
				J = n.n(X);
			const {
				fbt: $
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ee = {
				[Z.c.Submit]: J.a.submit,
				[Z.c.Uploading]: J.a.uploading,
				[Z.c.Processing]: J.a.processing
			};
			var te = e => {
					let {
						messageDataType: t,
						uploadId: n,
						uploadedImage: a,
						fromCurrentUser: i,
						inPreview: l
					} = e;
					var d, u, m, b;
					const p = Object(r.d)(),
						[g, f] = Object(s.useState)(!1),
						O = Object(r.e)(Q.b),
						v = Object(r.e)(e => Object(Y.c)(e, n)),
						[E, j] = Object(s.useState)(!1),
						_ = Boolean((null == v ? void 0 : v.status) === Z.c.Failed),
						C = Boolean((null == v ? void 0 : v.status) === Z.c.Success),
						I = Boolean((null == v ? void 0 : v.status) === Z.c.Canceled),
						y = !(_ || I || C || !v),
						x = v && ee[v.status],
						S = l && !g ? null == a ? void 0 : a.blurredUrl : (null == a ? void 0 : a.url) || (null === (d = null == v ? void 0 : v.metadata) || void 0 === d ? void 0 : d.localUrl),
						N = (null == a ? void 0 : a.width) || (null === (u = null == v ? void 0 : v.metadata) || void 0 === u ? void 0 : u.width),
						w = (null == a ? void 0 : a.height) || (null === (m = null == v ? void 0 : v.metadata) || void 0 === m ? void 0 : m.height),
						k = Object(s.useMemo)(() => {
							if (w && N) return (e => {
								let {
									maxHeight: t,
									maxWidth: n,
									originalHeight: a,
									originalWidth: s
								} = e;
								if (a <= t && s <= n) return {
									width: s,
									height: a
								};
								const c = Math.min(n / s, t / a);
								return {
									width: s * c,
									height: a * c
								}
							})({
								maxHeight: O < 960 ? 270 : 300,
								maxWidth: O < 960 ? 230 : 470,
								originalHeight: w,
								originalWidth: N
							})
						}, [w, N, O]),
						T = (null == k ? void 0 : k.height) && `${k.height}px`,
						M = (null == k ? void 0 : k.width) && `${k.width}px`;
					return (null == a ? void 0 : a.phase) !== q.a.PreUpload || i ? c.a.createElement("div", {
						className: J.a.ImageWrapper
					}, !_ && E && S && c.a.createElement(W, {
						onClose: () => j(!1),
						url: S
					}), c.a.createElement(c.a.Fragment, null, !g && l ? c.a.createElement("button", {
						onClick: () => f(!0),
						className: J.a.BlurOverlay,
						style: {
							height: T,
							width: M
						}
					}, $._("Click to view", null, {
						hk: "3QiGd9"
					})) : null, c.a.createElement("button", {
						className: J.a.MediaWrapper,
						onClick: () => {
							j(!0), p(Object(h.g)(t))
						}
					}, c.a.createElement("img", {
						key: n,
						style: {
							height: T,
							width: M
						},
						className: Object(o.a)(J.a.MediaImage, {
							[J.a.failed]: _
						}),
						src: Object(K.c)(S)
					}), y && c.a.createElement("div", {
						className: Object(o.a)(J.a.ProgressBar, x)
					}, (null === (b = null == v ? void 0 : v.progress) || void 0 === b ? void 0 : b.percent) && c.a.createElement("div", {
						className: J.a.UploadingIndicatorWrapper
					}, c.a.createElement("div", {
						className: J.a.UploadingIndicator,
						style: {
							width: `${Number(v.progress.percent).toFixed(2)}%`
						}
					}))))), _ && c.a.createElement("div", {
						className: J.a.FailedText
					}, $._("Failed to upload", null, {
						hk: "wy9r9"
					}))) : c.a.createElement(z.c, {
						height: null == k ? void 0 : k.height,
						width: null == k ? void 0 : k.width
					})
				},
				ne = n("./src/chat/components/Message/OffensiveMessageReportPrompt.m.less"),
				ae = n.n(ne);
			const se = y.a.wrapped(S.a, "Regular", ae.a),
				ce = y.a.wrapped(S.a, "Active", ae.a),
				re = Object(r.b)(void 0, (e, t) => ({
					cancel: () => {
						e(Object(x.w)(t)), e(Object(h.b)(t.channelId, t.messageId))
					},
					reportOffensiveMessage: () => {
						e(Object(b.b)(Object(v.inviteMessageActionUrl)(t.channelId, t.messageId, f.a.REPORT))), e(Object(x.w)(t)), e(Object(h.T)(t.channelId, t.messageId))
					}
				}));
			var oe = y.a.wrapped(re(e => c.a.createElement("div", {
					className: e.className
				}, a.fbt._("Was this message offensive?", null, {
					hk: "1sBVkd"
				}), c.a.createElement("div", null, c.a.createElement(se, {
					onClick: () => e.cancel(e)
				}, a.fbt._("No", null, {
					hk: "SG3Y"
				})), c.a.createElement(ce, {
					onClick: () => e.reportOffensiveMessage(e)
				}, a.fbt._("Yes", null, {
					hk: "3ONldA"
				}))))), "OffensiveMessageReport", ae.a),
				ie = n("./src/chat/components/Message/RichUnit/Comment/loader.tsx"),
				le = n("./src/higherOrderComponents/makeAsync.tsx"),
				de = n("./src/lib/loadWithRetries/index.ts");
			const ue = () => null;
			var he = Object(le.a)({
					ErrorComponent: ue,
					getComponent: () => Object(de.a)(() => n.e("ExternalLinkUnit").then(n.bind(null, "./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.tsx"))).then(e => e.default),
					LoadingComponent: ue
				}),
				me = n("./src/chat/components/Message/RichUnit/Post/loader.tsx"),
				be = n("./src/lib/prettyPrintNumber/index.ts"),
				pe = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.tsx"),
				ge = n("./src/chat/components/Message/RichUnit/commonComponents/Header.tsx"),
				fe = n("./src/chat/components/Message/RichUnit/commonComponents/ImageContent.tsx"),
				Oe = n("./src/chat/components/Message/RichUnit/Subreddit/SubredditRichUnit.m.less"),
				ve = n.n(Oe);
			const Ee = y.a.div("Delimiter", ve.a),
				je = y.a.wrapped(fe.a, "ImageContent", ve.a),
				_e = y.a.wrapped(e => {
					let {
						className: t,
						imageUrl: n = "",
						title: a,
						subredditType: s,
						isNsfw: r
					} = e;
					return c.a.createElement("div", {
						className: t,
						tabIndex: 0
					}, c.a.createElement(je, {
						url: n,
						title: a,
						subredditType: s,
						isNsfw: r,
						isSubreddit: !0
					}))
				}, "Content", ve.a),
				Ce = y.a.wrapped(e => {
					let {
						className: t,
						darkBackground: n,
						richUnitData: a,
						richUnitData: {
							subscribersCount: s = 0,
							activeCount: r = 0
						}
					} = e;
					var i, l, u, h;
					const m = `${Object(be.b)(s)} members • ${Object(be.b)(r)} online`,
						b = `/r/${a.id}`;
					return c.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(d.e)(t, "_blank")
							})(e, b)
						},
						className: Object(o.a)(t, {
							[ve.a.dark]: n
						})
					}, c.a.createElement(ge.a, {
						subredditName: a.id,
						iconUrl: null === (i = null == a ? void 0 : a.styles) || void 0 === i ? void 0 : i.icon,
						subredditTitle: a.title
					}), (null === (l = a.styles) || void 0 === l ? void 0 : l.bannerBackgroundImage) || !(null == a ? void 0 : a.subredditType) && !(null === (u = a.styles) || void 0 === u ? void 0 : u.bannerBackgroundImage) ? null : c.a.createElement(Ee, null), (null == a ? void 0 : a.subredditType) && c.a.createElement(_e, {
						imageUrl: null === (h = null == a ? void 0 : a.styles) || void 0 === h ? void 0 : h.bannerBackgroundImage,
						title: (null == a ? void 0 : a.publicDescriptionText) || "",
						subredditType: (null == a ? void 0 : a.subredditType) || "",
						isNsfw: Boolean(null == a ? void 0 : a.isNsfw)
					}), c.a.createElement(pe.a, {
						isSubreddit: !0,
						metaInfo: m
					}))
				}, "SubredditRichUnit", ve.a);
			var Ie = y.a.wrapped(e => {
					let {
						className: t,
						darkBackground: n,
						richUnitData: a
					} = e;
					return c.a.createElement("div", {
						className: t
					}, c.a.createElement(Ce, {
						darkBackground: n,
						richUnitData: a
					}))
				}, "RichUnitWrapper", ve.a),
				ye = n("./src/chat/actions/message/reactions.ts"),
				xe = n("./src/chat/actions/messageReactions/index.ts"),
				Se = n("./src/chat/actions/tooltip.ts"),
				Ne = n("./src/chat/components/MessageInput/constants.ts"),
				we = n("./src/chat/controls/Svg/index.tsx");

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Te = e => c.a.createElement(we.a, ke({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? c.a.createElement("g", {
					id: "icons_flat"
				}, c.a.createElement("polygon", {
					points: "19,9 11,9 11,1 9,1 9,9 1,9 1,11 9,11 9,19 11,19 11,11 19,11 \t"
				})) : c.a.createElement("g", {
					id: "icons_flat"
				}, c.a.createElement("polygon", {
					points: "19,9.4 10.6,9.4 10.6,1 9.4,1 9.4,9.4 1,9.4 1,10.6 9.4,10.6 9.4,19 10.6,19 10.6,10.6 19,10.6 \t"
				}))),
				Me = n("./src/chat/models/MessageReaction/index.ts"),
				Ae = n("./src/chat/selectors/sendbird.ts"),
				Le = n("./src/chat/selectors/user.ts"),
				De = n("./src/chat/components/Reactions/ReactionsTray/index.m.less"),
				Ue = n.n(De);
			var Pe = e => {
					let {
						message: t,
						onClick: n
					} = e;
					const a = Object(r.d)();
					Object(s.useEffect)(() => {
						a(Object(h.z)())
					}, [a]);
					const o = Object(r.e)(Le.a),
						i = Object(r.e)(Ae.d),
						l = Object(s.useCallback)(e => {
							const s = t.reactions.find(t => t.key === e),
								c = !!Boolean(s) && Boolean(null == s ? void 0 : s.userIds.find(e => e === o));
							a(Object(ye.b)({
								channelSendbirdId: t.channelId,
								messageSendbirdId: t.messageId,
								reactionIconKey: e,
								type: Me.a.ADD,
								userId: o
							})), n();
							const r = null == i ? void 0 : i.findIndex(t => t.key === e);
							r && (c || a(Object(h.X)(t.messageId, r + 1, e, "bar")))
						}, [n, t, a, o, i]);
					return i ? c.a.createElement("div", {
						className: Ue.a.ReactionsContainer
					}, c.a.createElement("div", {
						className: Ue.a.ReactionsIcons
					}, i.map((e, t) => c.a.createElement("span", {
						key: t,
						onClick: () => l(e.key),
						className: Ue.a.ReactionIcon,
						style: {
							animationDelay: `${.3/7*t+.1}s`,
							animationDuration: "0.3s"
						}
					}, c.a.createElement("img", {
						className: Ue.a.ReactionImage,
						src: e.url,
						alt: e.altText
					})))), c.a.createElement("span", {
						className: Ue.a.AddIcon,
						onClick: () => {
							n(), a(Object(xe.b)(t.messageId)), a(Object(Se.c)({
								tooltipId: Ne.c
							})), a(Object(h.A)())
						}
					}, c.a.createElement(Te, {
						isFilled: !0
					}))) : null
				},
				Re = n("./src/chat/components/Snoomoji/index.tsx"),
				Be = n("./src/chat/controls/Gif/index.tsx"),
				He = n("./src/chat/controls/TooltipHooked/loader.tsx"),
				Fe = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				Ge = n("./src/chat/helpers/dom.ts"),
				Ve = n("./src/chat/helpers/time/index.tsx");

			function We() {
				return (We = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ze = e => c.a.createElement(we.a, We({}, e, {
					viewBox: "0 0 20 20"
				}), c.a.createElement("path", {
					d: "M10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5Z"
				}), c.a.createElement("path", {
					d: "M10 6C10.8284 6 11.5 5.32843 11.5 4.5C11.5 3.67157 10.8284 3 10 3C9.17157 3 8.5 3.67157 8.5 4.5C8.5 5.32843 9.17157 6 10 6Z"
				}), c.a.createElement("path", {
					d: "M10 17C10.8284 17 11.5 16.3284 11.5 15.5C11.5 14.6716 10.8284 14 10 14C9.17157 14 8.5 14.6716 8.5 15.5C8.5 16.3284 9.17157 17 10 17Z"
				})),
				Ke = n("./src/chat/icons/svgs/Smile/index.tsx"),
				qe = n("./src/chat/models/RichUnit/index.ts"),
				Ze = n("./src/chat/selectors/experiments.ts"),
				Qe = n("./src/chat/selectors/richUnits.ts"),
				Ye = n("./src/chat/components/Message/Bubble.m.less"),
				Xe = n.n(Ye),
				Je = n("./src/chat/models/Sidebar/index.ts"),
				$e = n("./src/chat/selectors/sidebar.ts");
			const {
				PENDING: et,
				USER: tt
			} = f.d, {
				POST: nt,
				USER_POST: at,
				COMMENT: st,
				SNOOMOJI: ct,
				SUBREDDIT: rt,
				EMBED: ot,
				GIF: it,
				IMAGE: lt
			} = f.c, dt = () => {
				const e = Object(r.d)();
				return Object(r.e)(Ze.u) ? c.a.createElement("div", {
					className: Xe.a.ThemePrompt,
					tabIndex: 0
				}, c.a.createElement("button", {
					className: Xe.a.Content,
					onClick: () => {
						e(Object(u.clickThemePrompt)()), e(Object(h.h)())
					}
				}, a.fbt._("🖍 Change chat theme", null, {
					hk: "3pXdk4"
				}))) : null
			}, ut = c.a.forwardRef((e, t) => {
				let {
					className: n,
					children: a,
					disabled: s,
					withBorder: u,
					fromCurrentUser: h,
					inPreview: b,
					isEmbedded: p,
					message: g,
					showUserPic: f,
					noPadding: O
				} = e;
				var E, j;
				const _ = Object(l.b)(Object(Fe.h)(Boolean(h))),
					C = Object(r.e)(e => Object(Ze.n)(e, null == g ? void 0 : g.channelId)),
					I = Object(r.e)(e => Object(Ze.m)(e)),
					y = Object(r.e)($e.a) === Je.a.SETTINGS,
					x = C || !I;
				return c.a.createElement("span", {
					onMouseEnter: e => {
						var t;
						n && (null === (t = e.target) || void 0 === t ? void 0 : t.classList.contains(n)) && _.show()
					},
					onMouseLeave: _.hide,
					ref: Object(i.a)(t, _.target.ref),
					className: Object(o.a)(n, {
						[Xe.a.dark]: !h,
						[Xe.a.disabled]: s,
						[Xe.a.withBorder]: u,
						[Xe.a.currentUser]: h,
						[Xe.a.embed]: p,
						[Xe.a.noPadding]: O,
						[Xe.a.gif]: (null == g ? void 0 : g.messageData.type) === it && !b,
						[Xe.a.media]: (null == g ? void 0 : g.messageData.type) === lt && x,
						[Xe.a.withSettings]: y && !p
					})
				}, a, f && (null === (E = null == g ? void 0 : g.sender) || void 0 === E ? void 0 : E.userId) && c.a.createElement(m.a, {
					onClick: Object(Ge.b)(() => {
						var e;
						const t = null === (e = null == g ? void 0 : g.sender) || void 0 === e ? void 0 : e.nickname;
						if (t) {
							const e = Object(v.viewProfileUrl)(t);
							Object(d.e)(e, "_blank")
						}
					}),
					className: Xe.a.UserPic,
					userId: null === (j = null == g ? void 0 : g.sender) || void 0 === j ? void 0 : j.userId,
					isFlipping: !0
				}), (null == g ? void 0 : g.createdAt) && c.a.createElement(He.a, {
					arrowProps: _.arrowProps,
					popperProps: _.popperProps,
					visible: _.visible,
					styled: !0,
					isCloseOnHover: !0,
					hide: _.hide
				}, c.a.createElement("span", {
					className: Xe.a.TimestampWrapper
				}, Object(Ve.c)(new Date(g.createdAt)))))
			});

			function ht(e) {
				return "messageId" in e && "channelId" in e
			}

			function mt(e, t) {
				return !(e.messageData.type !== f.c.EMBED || !e.messageData.embed || t) || !(e.messageData.type !== f.c.POST && e.messageData.type !== f.c.USER_POST && e.messageData.type !== f.c.COMMENT && e.messageData.type !== f.c.SUBREDDIT || t)
			}
			t.a = e => {
				const {
					className: t,
					fromCurrentUser: n = !1,
					isChatEmbedded: d,
					isCurrentUserChannelMod: u,
					message: h,
					isLastCurrentUserMessage: m,
					inPreview: b,
					showUserPic: p,
					withButton: g
				} = e, O = Object(r.e)(e => Object(Qe.b)(e, h.messageData)), v = Object(r.e)(Ze.j), E = Object(l.b)(Object(Fe.b)(n)), j = Object(l.b)(Object(Fe.d)()), _ = Object(l.b)(Object(Fe.e)(n)), C = Object(r.e)(e => Object(Ze.n)(e, h.channelId)), y = Object(r.e)(e => Object(Ze.m)(e)), [x, S] = Object(s.useState)(), N = Object(s.useRef)(x);
				Object(s.useEffect)(() => (N.current = x, clearTimeout(Number(N.current))), [x]);
				const w = C || !y;
				if (!h) return null;
				const {
					type: T,
					report: M,
					collapsedInvitePreview: A
				} = h.messageData, L = h.messageType === et && h.error && h.clientMessageId, D = T !== ct && T !== lt && (T !== it || T === it && b), U = g && !L && !M, B = h.messageType === tt && U, H = ((e, t, n, s, r, o) => {
					var i, l, d, u, h;
					const {
						messageType: m,
						messageData: b,
						messageData: {
							highlights: p,
							value: g
						}
					} = e, f = a.fbt._("Sent a media", null, {
						hk: "3fWrfX"
					}), O = c.a.createElement(R.a, {
						className: Xe.a.Text,
						value: g,
						highlighMentionGroupLinks: p
					});
					if (t && b.type !== ct && b.type !== lt) return b.type === it ? a.fbt._("Sent a GIF", null, {
						hk: "1x1QrK"
					}) : O;
					switch (b.type) {
						case ot:
							const {
								embed: e
							} = b;
							return m !== et && e ? c.a.createElement(he, {
								name: e.name,
								title: e.title,
								thumbnailUrl: e.imageUrl,
								href: e.url,
								providerDisplay: e.providerDisplay,
								darkBackground: !n,
								faviconUrl: e.faviconUrl
							}) : O;
						case nt:
						case at:
							return (null == s ? void 0 : s.type) !== nt && (null == s ? void 0 : s.type) !== at || (null == s ? void 0 : s.removedByCategory) === qe.b.Deleted ? O : c.a.createElement(me.a, {
								darkBackground: !n,
								postUrl: g,
								highlights: p,
								richUnitData: s
							});
						case st:
							return s && (null == s ? void 0 : s.type) === st && !s.deletedAt ? c.a.createElement(ie.a, {
								darkBackground: !n,
								commentUrl: g,
								highlights: p,
								richUnitData: s
							}) : O;
						case rt:
							return s && s.type === rt ? c.a.createElement(Ie, {
								darkBackground: !n,
								richUnitData: s
							}) : O;
						case ct:
							return c.a.createElement("div", {
								className: Xe.a.Snoo
							}, c.a.createElement(Re.a, {
								iconName: g
							}));
						case it: {
							const e = !r && (null === (i = b.gif) || void 0 === i ? void 0 : i.width) || 0,
								t = Math.min(258 / e, 1);
							return c.a.createElement(Be.a, {
								imageScale: t,
								source: g,
								title: null === (l = b.gif) || void 0 === l ? void 0 : l.title,
								height: null === (d = b.gif) || void 0 === d ? void 0 : d.height,
								width: null === (u = b.gif) || void 0 === u ? void 0 : u.width
							})
						}
						case lt: {
							const e = b.clientMessageId;
							return !o || t && !(null === (h = b.image) || void 0 === h ? void 0 : h.blurredUrl) ? f : c.a.createElement(te, {
								messageDataType: b.type,
								uploadId: e,
								uploadedImage: b.image,
								fromCurrentUser: n,
								inPreview: t
							})
						}
						default:
							return O
					}
				})(h, b, n, O, d, w), F = ((e, t, n, s, r, i, l, d) => c.a.createElement(He.a, {
					popperProps: e.popperProps,
					visible: e.visible,
					arrowProps: e.arrowProps,
					hide: e.hide
				}, c.a.createElement("div", {
					className: Object(o.a)(Xe.a.MenuWrapper, {
						[Xe.a.reverse]: i
					})
				}, s && c.a.createElement("button", {
					title: a.fbt._("Add reaction", null, {
						hk: "2HMtlm"
					}),
					onClick: () => {
						n.visible ? n.hide() : n.show()
					},
					className: Xe.a.ReactionsMenu
				}, c.a.createElement(Ke.a, {
					isFilled: !0
				})), r && !i ? c.a.createElement("button", {
					onClick: () => {
						t.visible ? t.hide() : t.show()
					},
					className: Xe.a.BubbleMenu,
					ref: t.target.ref
				}, c.a.createElement(ze, {
					className: Object(o.a)(Xe.a.MenuOverflowVertical, {
						[Xe.a.active]: t.visible
					})
				})) : c.a.createElement(I, {
					className: Xe.a.ActionButtonGroup,
					message: d,
					fromCurrentUser: i,
					inPreview: l,
					isMod: r,
					channelId: d.channelId
				})), c.a.createElement(He.a, {
					arrowProps: t.arrowProps,
					popperProps: t.popperProps,
					visible: t.visible,
					hide: t.hide,
					isInstant: !0,
					styled: !0
				}, c.a.createElement(I, {
					className: Xe.a.ActionButtonGroup,
					message: d,
					fromCurrentUser: i,
					inPreview: l,
					isMod: r,
					channelId: d.channelId
				}))))(E, j, _, v, u, n, b, h);
				return c.a.createElement("span", {
					className: Object(o.a)(Xe.a.MessageItemBubble, t),
					onMouseEnter: () => {
						clearTimeout(Number(N.current)), E.show()
					},
					onMouseLeave: () => {
						E.hide(), j.hide(), clearTimeout(Number(N.current)), S(setTimeout(() => {
							_.hide()
						}, 1e3))
					}
				}, c.a.createElement(ut, {
					ref: Object(i.a)(E.target.ref, _.target.ref),
					fromCurrentUser: n,
					inPreview: b,
					withButton: U,
					withBorder: D,
					message: h,
					disabled: !!L,
					showUserPic: p,
					isEmbedded: d,
					className: Object(o.a)(Xe.a.MessageBubble, (O || h.messageData.type === f.c.EMBED) && !b && {
						[Xe.a.richUnit]: mt(h, !d),
						[Xe.a.richUnitResponsive]: mt(h, d)
					})
				}, h.messageType === f.d.USER && c.a.createElement(He.a, {
					arrowProps: _.arrowProps,
					popperProps: _.popperProps,
					visible: _.visible,
					hide: _.hide,
					noArrow: !0
				}, c.a.createElement(Pe, {
					message: h,
					onClick: () => {
						_.hide()
					}
				})), b && ht(h) && function(e) {
					return Boolean(null == e ? void 0 : e.shouldCollapse)
				}(A) ? c.a.createElement(k, {
					channelId: h.channelId,
					messageId: h.messageId
				}) : H), B && F, m && c.a.createElement(dt, null), b && ht(h) && function(e) {
					return Boolean(!(null == e ? void 0 : e.shouldCollapse) && (null == e ? void 0 : e.shouldShowReportPrompt))
				}(A) && c.a.createElement(oe, {
					channelId: h.channelId,
					messageId: h.messageId
				}), L && c.a.createElement(P, {
					channelId: h.channelId,
					clientMessageId: L
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
				c = n("./src/lib/lessComponent.tsx"),
				r = n("./src/lib/linkMatchers/customLinks.ts"),
				o = n("./src/lib/opener/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/chat/helpers/linkParser/index.ts"),
				d = n("./src/chat/components/Message/Link.m.less"),
				u = n.n(d);
			const h = c.a.wrapped(e => s.a.createElement("a", {
					className: Object(i.a)(e.className, {
						[u.a.noUnderline]: e.noUnderline
					}),
					href: Object(l.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children), "Link", u.a),
				m = c.a.span("LinkedText", u.a),
				b = c.a.span("NameWrapper", u.a),
				p = c.a.span("Name", u.a),
				g = c.a.span("DetailsWrapper", u.a),
				f = c.a.span("Title", u.a),
				O = c.a.p("Description", u.a),
				v = e => s.a.createElement(h, {
					noUnderline: e.noUnderline,
					href: Object(l.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children),
				E = e => e.isEmbed ? (e => s.a.createElement(v, e, s.a.createElement(b, null, s.a.createElement(p, null, e.name)), s.a.createElement(g, null, s.a.createElement("span", null, s.a.createElement(f, null, e.title), s.a.createElement(O, null, e.description)))))(e) : (e => e.href ? s.a.createElement(v, e, e.children) : s.a.createElement(m, e, e.children))(e);
			var j = n("./src/chat/components/Message/LinkedText.m.less"),
				_ = n.n(j);
			const C = c.a.pre("MessageText", _.a),
				I = (e, t, n, a, c) => s.a.createElement(E, {
					key: c || e,
					href: e,
					target: n,
					rel: o.c,
					noUnderline: a === r.d.mention || a === r.d.profile || a === r.d.profileFull || a === r.d.subreddit || a === r.d.subredditFull
				}, t);
			t.a = c.a.wrapped(e => {
				const {
					value: t,
					highlighMentionGroupLinks: n,
					className: a
				} = e, c = !(!n || !n.length), r = Object(l.a)(t, c, I);
				return s.a.createElement(C, {
					tabIndex: 0,
					className: a
				}, r)
			}, "LinkedText", _.a)
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
				failedText: "_1JbaEP7BOugQX_jbR4Z612",
				ImageWrapper: "_1lV29-hciaw-NEpFclgo2",
				imageWrapper: "_1lV29-hciaw-NEpFclgo2",
				BlurOverlay: "_1Vt977poeDGFeKBjqAA4dy",
				blurOverlay: "_1Vt977poeDGFeKBjqAA4dy"
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
			const c = () => null;
			t.a = Object(a.a)({
				ErrorComponent: c,
				getComponent: () => Object(s.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CommentRichUnit")]).then(n.bind(null, "./src/chat/components/Message/RichUnit/Comment/CommentRichUnit.tsx"))).then(e => e.default),
				LoadingComponent: c
			})
		},
		"./src/chat/components/Message/RichUnit/Post/loader.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const c = () => null;
			t.a = Object(a.a)({
				ErrorComponent: c,
				getComponent: () => Object(s.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("PostRichUnit")]).then(n.bind(null, "./src/chat/components/Message/RichUnit/Post/PostRichUnit.tsx"))).then(e => e.default),
				LoadingComponent: c
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
				c = n("./src/lib/lessComponent.tsx"),
				r = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.m.less"),
				o = n.n(r);
			const i = c.a.div("MetaInfo", o.a);
			t.a = c.a.wrapped(e => {
				let {
					className: t,
					metaInfo: n,
					isSubreddit: a
				} = e;
				return s.a.createElement("div", {
					className: t
				}, s.a.createElement(i, {
					tabIndex: 0
				}, n), a ? s.a.createElement("div", {
					className: o.a.OnlineIndicator
				}, "•") : null)
			}, "Footer", o.a)
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
				c = n("./node_modules/react/index.js"),
				r = n.n(c),
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
			var u = e => r.a.createElement(l.a, d({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("path", {
					d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
				})),
				h = n("./src/chat/components/Message/RichUnit/commonComponents/Header.m.less"),
				m = n.n(h),
				b = n("./src/lib/classNames/index.ts");
			const p = i.a.img("SubredditIcon", m.a),
				g = i.a.wrapped(u, "PlanetIcon", m.a),
				f = i.a.wrapped(e => {
					const {
						className: t,
						subredditName: n,
						authorName: c,
						isPostComment: i,
						redditorName: l,
						subredditTitle: d,
						isSharedToChat: u
					} = e, h = n ? `r/${n}` : "", p = l ? `u/${l}` : "", g = `u/${c||l}`;
					return r.a.createElement("div", {
						className: Object(b.a)(t, {
							[m.a.isSharedToChat]: u
						}),
						onClick: e => e.stopPropagation()
					}, r.a.createElement(o.a, {
						className: m.a.SubredditName,
						to: `/${h||p}`,
						target: s.d.BLANK,
						rel: s.c
					}, h || p), u && r.a.createElement("span", {
						className: m.a.HeaderDivider
					}, " • "), d ? r.a.createElement(o.a, {
						className: m.a.SubredditTitle,
						to: `/${h||p}`,
						target: s.d.BLANK,
						rel: s.c
					}, d) : r.a.createElement(o.a, {
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
					isPostComment: c,
					redditorName: i,
					iconUrl: l,
					subredditTitle: d,
					isSharedToChat: u
				} = e, h = n ? `r/${n}` : "", O = i ? `u/${i}` : "";
				return r.a.createElement("div", {
					className: Object(b.a)(t, {
						[m.a.isSharedToChat]: u
					})
				}, r.a.createElement(o.a, {
					to: `/${h||O}`,
					target: s.d.BLANK,
					rel: s.c,
					className: m.a.Link
				}, l ? r.a.createElement(p, {
					src: l
				}) : r.a.createElement(g, null)), r.a.createElement(f, {
					subredditName: n,
					redditorName: i,
					authorName: a,
					isPostComment: c,
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
				c = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
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
			var l = e => c.a.createElement(o.a, i({}, e, {
				viewBox: "0 0 12 12"
			}), c.a.createElement("path", {
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
			var u = e => c.a.createElement(o.a, d({}, e, {
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

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var m = e => c.a.createElement(o.a, h({}, e, {
				viewBox: "0 0 12 12"
			}), c.a.createElement("path", {
				d: "M6.36644 6.69771C6.32969 6.87045 6.17666 6.99437 5.99963 6.99437C5.82259 6.99437 5.67031 6.87045 5.63281 6.69771L4.88267 3.19264C4.85941 3.08149 4.88642 2.96583 4.95843 2.87796C5.02894 2.78934 5.13621 2.73827 5.24948 2.73827H6.74977C6.86304 2.73827 6.97031 2.78934 7.04157 2.87796C7.11283 2.96583 7.14059 3.08149 7.11658 3.19264L6.36644 6.69771ZM6.53222 9.40293C6.3897 9.54562 6.19466 9.61998 5.99962 9.61998C5.80459 9.61998 5.60955 9.54562 5.46702 9.40293C5.332 9.25948 5.24948 9.07172 5.24948 8.86895C5.24948 8.67368 5.332 8.47916 5.46702 8.34322C5.75208 8.05858 6.25467 8.06534 6.53222 8.34322C6.66725 8.47916 6.74977 8.67368 6.74977 8.86895C6.74977 9.07172 6.66725 9.26699 6.53222 9.40293ZM11.5604 4.93053L7.06032 0.425835C6.49322 -0.141945 5.50603 -0.141945 4.93893 0.425835L0.439582 4.93053C0.156029 5.21442 0 5.59144 0 5.99324C0 6.39429 0.156029 6.77131 0.439582 7.0552L4.93893 11.5599C5.22248 11.8438 5.59905 12 5.99962 12C6.4002 12 6.77677 11.8438 7.06032 11.5599L11.5604 7.0552C11.844 6.77131 12 6.39429 12 5.99324C12 5.59144 11.844 5.21442 11.5604 4.93053Z",
				fill: "#FF3881"
			}));

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var p = e => c.a.createElement(o.a, b({}, e, {
				viewBox: "0 0 9 10"
			}), c.a.createElement("path", {
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
			var f = e => c.a.createElement(o.a, g({}, e, {
					viewBox: "0 0 10 6"
				}), c.a.createElement("path", {
					d: "M9.62406 2.8827L7.96986 1.2285C6.33186 -0.4095 3.66786 -0.4095 2.02986 1.2285L0.375657 2.8827C0.141057 3.1173 0.141057 3.4965 0.375657 3.7311C0.610257 3.9657 0.989457 3.9657 1.22406 3.7311L2.87826 2.0769C2.91786 2.0373 2.96406 2.0097 3.00546 1.9731C2.74926 2.3547 2.59986 2.8131 2.59986 3.3069C2.59986 4.6323 3.67446 5.7069 4.99986 5.7069C6.32526 5.7069 7.39986 4.6323 7.39986 3.3069C7.39986 2.8131 7.24986 2.3547 6.99426 1.9731C7.03566 2.0097 7.08186 2.0373 7.12146 2.0769L8.77566 3.7311C8.89266 3.8481 9.04626 3.9069 9.19986 3.9069C9.35346 3.9069 9.50706 3.8481 9.62406 3.7311C9.85866 3.4965 9.85866 3.1173 9.62406 2.8827Z"
				})),
				O = n("./src/chat/components/Message/RichUnit/commonComponents/ImageContent.m.less"),
				v = n.n(O);
			const E = () => c.a.createElement("div", {
					className: v.a.NSFWIndicator
				}, c.a.createElement(m, {
					className: v.a.NSFWIcon
				}), a.fbt._("nsfw", null, {
					hk: "6M6nL"
				})),
				j = () => c.a.createElement("div", {
					className: v.a.PrivateIndicator
				}, c.a.createElement(p, null), " ", a.fbt._("private", null, {
					hk: "3xzh8w"
				})),
				_ = () => c.a.createElement("div", {
					className: v.a.RestrictedIndicator
				}, c.a.createElement(f, {
					className: v.a.RestrictedIcon
				}), a.fbt._("restricted", null, {
					hk: "2lC88Z"
				})),
				C = () => c.a.createElement("div", {
					className: v.a.EmployeesOnlyIndicator
				}, c.a.createElement(l, {
					className: v.a.EmployeesOnlyIcon
				}), a.fbt._("employees only", null, {
					hk: "3uDhE6"
				})),
				I = e => {
					let {
						subredditType: t,
						isNsfw: n
					} = e;
					return c.a.createElement("div", {
						className: v.a.SubredditTypeIndicator
					}, n ? c.a.createElement(E, null) : null, (e => {
						switch (e) {
							case "RESTRICTED":
								return c.a.createElement(_, null);
							case "EMPLOYEES_ONLY":
								return c.a.createElement(C, null);
							case "PRIVATE":
								return c.a.createElement(j, null);
							default:
								return null
						}
					})(t))
				},
				y = e => {
					let {
						url: t,
						isSharedToChat: n
					} = e;
					return c.a.createElement("div", {
						className: Object(r.a)(v.a.ImageContainer, {
							[v.a.isSharedToChat]: n
						})
					}, c.a.createElement("img", {
						className: v.a.Image,
						src: t
					}))
				};
			t.a = e => {
				let {
					url: t,
					title: n,
					isGallery: a,
					isNsfw: s,
					subredditType: o,
					isSubreddit: i,
					isSharedToChat: l,
					className: d
				} = e;
				return c.a.createElement("div", {
					className: Object(r.a)(d, v.a.ImagePostRichUnit)
				}, c.a.createElement("div", {
					className: v.a.ImagePostRichUnitContent
				}, t && !l ? c.a.createElement(y, {
					url: t
				}) : null, i ? c.a.createElement(I, {
					isNsfw: s,
					subredditType: o
				}) : null, n ? c.a.createElement("div", {
					className: Object(r.a)(v.a.Title, {
						[v.a.isSharedToChat]: l
					})
				}, n) : null, a ? c.a.createElement(u, {
					className: v.a.GalleryIcon
				}) : null), t && l ? c.a.createElement(y, {
					url: t,
					isSharedToChat: l
				}) : null)
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
		"./src/chat/components/Message/UserName/index.m.less": function(e, t, n) {
			e.exports = {
				UserName: "_3u1axj5t1vNnI-LhnJlcTP",
				userName: "_3u1axj5t1vNnI-LhnJlcTP",
				currentUser: "_3K-jESbfWlTLoB4gXr6WSa"
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
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			}));
			const a = "MessageInputTooltip--Snoomoji",
				s = "MessageInputTooltip--Gif",
				c = "MessageInputTooltip--Userlist",
				r = "MessageInputTooltip--Reactions",
				o = "MessageInputTooltip--SlashCommandList",
				i = 5e3,
				l = 53
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
		"./src/chat/components/MessageTooltip/Picker/icons.list.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2QkwCm298khta3YAmikvhv",
				iconWrapper: "_2QkwCm298khta3YAmikvhv",
				Icon: "_1seDziVArgAhjM0byt5OHB",
				icon: "_1seDziVArgAhjM0byt5OHB",
				EmptyIcons: "_3GShrUyAV4weqBOgagWWbJ",
				emptyIcons: "_3GShrUyAV4weqBOgagWWbJ",
				LoadingIndicator: "T_WjnOSIXggB62trXohBC",
				loadingIndicator: "T_WjnOSIXggB62trXohBC",
				Wrapper: "_3ke8M7OjZhoNcEgcXeBEIt",
				wrapper: "_3ke8M7OjZhoNcEgcXeBEIt",
				Scroller: "_36xfIM0JwcdDnccXHOh8fX",
				scroller: "_36xfIM0JwcdDnccXHOh8fX",
				embedded: "_1O766JdJYSunIn7TFnC9r9"
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
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/actions/container.ts"),
				l = n("./src/chat/components/CloseIcon/index.tsx"),
				d = n("./src/chat/components/ThemeProvider/index.tsx"),
				u = n("./src/chat/constants/container.ts"),
				h = n("./src/chat/controls/Counter/index.tsx"),
				m = n("./src/chat/helpers/chatSelector.ts"),
				b = n("./src/chat/selectors/unreadCounter.ts"),
				p = n("./src/chat/components/MinimizedPortalContainer/index.m.less"),
				g = n.n(p);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), {
				minimized: O
			} = u.b, v = o.a.wrapped(l.a, "HiddenCloseButton", g.a);
			v.displayName = "CloseButton";
			const E = o.a.wrapped(e => s.a.createElement("div", {
					onClick: e.onClick,
					className: e.className,
					style: {
						width: `${O.width}px`,
						height: `${O.height}px`
					}
				}, e.children), "Container", g.a),
				j = o.a.span("TitleWithCounter", g.a),
				_ = Object(m.a)({
					unreadCount: b.e,
					hasNewMessages: b.b
				}),
				C = Object(c.b)(_, e => ({
					close: () => e(Object(i.sizeChanged)(u.a.HIDDEN)),
					open: () => e(Object(i.sizeChanged)(u.a.EMBED))
				}));
			t.a = C(e => s.a.createElement(d.a, null, s.a.createElement(E, {
				key: e.unreadCount,
				className: Object(r.a)(e.className, {
					[g.a.unread]: e.unreadCount > 0
				}),
				onClick: e.open
			}, s.a.createElement(j, null, f._("Chat", null, {
				hk: "3ZWpRR"
			}), s.a.createElement(h.b, {
				count: e.unreadCount,
				isEmptyCounter: e.hasNewMessages && !e.unreadCount
			})), s.a.createElement(v, null))))
		},
		"./src/chat/components/Modals/BlockUser/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/chat/actions/tracking.ts"),
				o = n("./src/chat/actions/user.ts"),
				i = n("./src/chat/components/Modals/ModalOverlay/index.tsx");
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					userToBlock: t
				} = e;
				const n = Object(c.d)();
				return s.a.createElement(i.c, {
					isWarning: !0,
					submit: () => {
						n(Object(o.m)(t.id)), n(Object(r.Z)(t.id))
					},
					submitButtonText: l._("Yes, Block", null, {
						hk: "1CXBSl"
					})
				}, s.a.createElement(i.b, null, l._("Block {userName}?", [l._param("userName", `u/${t.name}`)], {
					hk: "4fEug3"
				})), s.a.createElement(i.a, null, l._("You'll no longer see comments, posts, messages, or notifications from them, and they won't know you blocked them. Messages from them will still appear in group chats.", null, {
					hk: "44kKs8"
				})))
			}
		},
		"./src/chat/components/Modals/KickUser/index.m.less": function(e, t, n) {
			e.exports = {
				DropDownSection: "ISsn6s9Y0yk_6Fqk3hy8i",
				dropDownSection: "ISsn6s9Y0yk_6Fqk3hy8i",
				DropDownSectionLabel: "_22knx6PQiEuZG2X6C-wlq7",
				dropDownSectionLabel: "_22knx6PQiEuZG2X6C-wlq7",
				DropdownOptionsContainer: "_30aWcq9T0qilmgmMbTDmnu",
				dropdownOptionsContainer: "_30aWcq9T0qilmgmMbTDmnu",
				Option: "LkCqTSkJxzXvuwy98rXdq",
				option: "LkCqTSkJxzXvuwy98rXdq",
				OptionValue: "_3TrTrYwiFAnh4Fwujp6kj",
				optionValue: "_3TrTrYwiFAnh4Fwujp6kj",
				OptionValueIcon: "_1K6hjPEy-m5XtYlqAD8uVy",
				optionValueIcon: "_1K6hjPEy-m5XtYlqAD8uVy"
			}
		},
		"./src/chat/components/Modals/KickUser/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/hooks/useOnClickOutside.ts"),
				o = n("./src/lib/hooks/useTooltip.ts"),
				i = n("./src/chat/actions/tracking.ts"),
				l = n("./src/chat/actions/user.ts"),
				d = n("./src/chat/components/Modals/ModalOverlay/index.tsx"),
				u = n("./src/chat/controls/Dropdown/Row.tsx"),
				h = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				m = n("./src/chat/controls/TooltipHooked/TooltipHooked.tsx"),
				b = n("./src/chat/icons/svgs/CaretDown/index.tsx"),
				p = n("./src/chat/components/Modals/KickUser/index.m.less"),
				g = n.n(p);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var O;
			! function(e) {
				e[e.TenMins = 600] = "TenMins", e[e.OneHour = 3600] = "OneHour", e[e.OneDay = 86400] = "OneDay", e[e.ThreeDays = 259200] = "ThreeDays", e[e.Permanently = -1] = "Permanently"
			}(O || (O = {}));
			t.a = e => {
				let {
					userToKick: t
				} = e;
				const n = Object(c.d)(),
					p = (() => ({
						[O.TenMins]: f._("10 minutes", null, {
							hk: "3y8skZ"
						}),
						[O.OneHour]: f._("1 hour", null, {
							hk: "mgKhy"
						}),
						[O.OneDay]: f._("1 day", null, {
							hk: "37HQV9"
						}),
						[O.ThreeDays]: f._("3 days", null, {
							hk: "2R7GCT"
						}),
						[O.Permanently]: f._("Permanently", null, {
							hk: "2CHcpm"
						})
					}))(),
					[v, E] = Object(a.useState)(O.TenMins),
					j = Object(o.b)(Object(h.a)(25));
				Object(r.a)("DROPDOWN_ID", () => {
					j.hide()
				});
				return Object(a.useEffect)(() => {}), s.a.createElement(d.c, {
					isWarning: !0,
					submit: () => {
						n(Object(l.o)(t.id, v)), n(Object(i.Q)(v))
					},
					submitButtonText: f._("Yes, Kick", null, {
						hk: "3pRuFm"
					})
				}, s.a.createElement(d.b, null, f._("Kick {userName}?", [f._param("userName", `u/${t.name}`)], {
					hk: "4kJk6w"
				})), s.a.createElement(d.a, null, f._("The user will be able to join again once the kick duration is over.", null, {
					hk: "4D2FKq"
				}), s.a.createElement("div", {
					className: g.a.DropDownSection,
					id: "DROPDOWN_ID"
				}, s.a.createElement("div", {
					className: g.a.DropDownSectionLabel
				}, f._("Kick duration", null, {
					hk: "1EIFS3"
				})), s.a.createElement("div", {
					className: g.a.Option
				}, s.a.createElement("span", {
					className: g.a.OptionValue
				}, p[v]), s.a.createElement("button", {
					onClick: j.show
				}, s.a.createElement("span", {
					ref: j.target.ref
				}, s.a.createElement(b.a, {
					className: g.a.OptionValueIcon
				})))), s.a.createElement(m.default, {
					arrowProps: j.arrowProps,
					popperProps: j.popperProps,
					visible: j.visible,
					hide: j.hide,
					isInstant: !0,
					noArrow: !0,
					styled: !0
				}, s.a.createElement("div", null, s.a.createElement("div", {
					className: g.a.DropdownOptionsContainer,
					id: "DROPDOWN_ID"
				}, Object.keys(p).map(e => s.a.createElement(u.a, {
					key: e,
					displayText: p[e],
					onClick: () => (e => {
						E(Number(e)), j.hide()
					})(e),
					isSelected: p[e] === p[v]
				}))))))))
			}
		},
		"./src/chat/components/Modals/ModalOverlay/index.m.less": function(e, t, n) {
			e.exports = {
				Overlay: "_1J0kzH5tIfeNGZDucKBCbh",
				overlay: "_1J0kzH5tIfeNGZDucKBCbh",
				Container: "_7bRaT2CH6YhnBHsZFBZry",
				container: "_7bRaT2CH6YhnBHsZFBZry",
				popIn: "za2H9ymF9A9FGYCLxCE2C",
				Header: "ajRVnd4vOD316t3-XU-_m",
				header: "ajRVnd4vOD316t3-XU-_m",
				CloseButton: "_1UfU7ykE3iGdGzHUaVYRII",
				closeButton: "_1UfU7ykE3iGdGzHUaVYRII",
				Body: "_2gLQjmDoN1mzVjSAEXsRDS",
				body: "_2gLQjmDoN1mzVjSAEXsRDS",
				ActionButtons: "s8krgnvmx4brFd-7ggPb8",
				actionButtons: "s8krgnvmx4brFd-7ggPb8",
				warning: "_3tiOKZuxjp4II3dQ73VxJd",
				Confirm: "_1ZJEnKEEArlZnzHIZheVbu",
				confirm: "_1ZJEnKEEArlZnzHIZheVbu",
				Cancel: "_2dcKTJW3qhfqpT8D2w_V2O",
				cancel: "_2dcKTJW3qhfqpT8D2w_V2O"
			}
		},
		"./src/chat/components/Modals/ModalOverlay/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return h
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/portal/index.tsx"),
				o = n("./src/chat/controls/Button/index.tsx"),
				i = n("./src/chat/icons/svgs/Close/index.tsx"),
				l = n("./src/chat/components/Modals/ModalOverlay/index.m.less"),
				d = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = s.a.createContext(() => {}), m = e => {
				let {
					children: t
				} = e;
				return s.a.createElement("div", {
					className: d.a.Text
				}, t)
			}, b = e => {
				let {
					children: t
				} = e;
				return s.a.createElement("div", {
					className: d.a.Body
				}, t)
			};
			t.c = e => {
				let {
					children: t,
					isWarning: n,
					submit: l,
					submitButtonText: m
				} = e;
				const [b, p] = s.a.Children.toArray(t), g = Object(a.useContext)(h);
				return s.a.createElement(r.a, null, s.a.createElement("div", {
					className: d.a.Overlay
				}, s.a.createElement("div", {
					className: d.a.Container
				}, s.a.createElement("div", {
					className: d.a.Header
				}, b, s.a.createElement(i.a, {
					className: d.a.CloseButton,
					onClick: g
				})), p, s.a.createElement("div", {
					className: Object(c.a)(d.a.ActionButtons, {
						[d.a.warning]: n
					})
				}, s.a.createElement(o.a, {
					className: d.a.Cancel,
					secondary: !0,
					onClick: g
				}, u._("Cancel", null, {
					hk: "2TSLl5"
				})), s.a.createElement(o.a, {
					primary: !0,
					className: d.a.Confirm,
					onClick: () => {
						l(), g()
					}
				}, m || u._("Submit", null, {
					hk: "4aU3dh"
				}))))))
			}
		},
		"./src/chat/components/OverlayChannelInvited/BlockedUsersPreview/index.m.less": function(e, t, n) {
			e.exports = {
				BlockedUsersPreview: "_17LjLpr9drUxMm-xCBPd_y",
				blockedUsersPreview: "_17LjLpr9drUxMm-xCBPd_y",
				MembersIcons: "_2YBi2RidPqaY_pft6HEY8_",
				membersIcons: "_2YBi2RidPqaY_pft6HEY8_",
				WarningMessage: "-v_VLDF00oxLTXISPu7Bk",
				warningMessage: "-v_VLDF00oxLTXISPu7Bk",
				UserIcon: "_3nK_OJ9_E5iKO9B560UVqV",
				userIcon: "_3nK_OJ9_E5iKO9B560UVqV",
				SubIconWrapper: "_16pfEGpiCMHMVKDd-jnLB",
				subIconWrapper: "_16pfEGpiCMHMVKDd-jnLB",
				SubIcon: "_204U2yibK5dGVc3HCSAD7L",
				subIcon: "_204U2yibK5dGVc3HCSAD7L"
			}
		},
		"./src/chat/components/OverlayChannelInvited/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2_usm-6VxbuOWiTnRHrW6_",
				container: "_2_usm-6VxbuOWiTnRHrW6_",
				TitleContainer: "_286hA91kPPTG16FrntDjnI",
				titleContainer: "_286hA91kPPTG16FrntDjnI",
				Title: "_2VM6vj7YAvos5YYrk4BZm",
				title: "_2VM6vj7YAvos5YYrk4BZm",
				NSFWIcon: "KMxUr4-PgnXZGf5PDaXpK",
				nsfwIcon: "KMxUr4-PgnXZGf5PDaXpK",
				UserPic: "_1VfnsRlasisMwqxtizmNQG",
				userPic: "_1VfnsRlasisMwqxtizmNQG",
				WarningTextNSFW: "_2J7sY3CGM_vmQmlMoGfZrh",
				warningTextNsfw: "_2J7sY3CGM_vmQmlMoGfZrh",
				MediaObject: "_2P47kg53Xxq3BQhzoaYl9a",
				mediaObject: "_2P47kg53Xxq3BQhzoaYl9a",
				LightTextSmall: "_2EZY5lK_rrQ9EWQLO-bTOa",
				lightTextSmall: "_2EZY5lK_rrQ9EWQLO-bTOa",
				BoldText: "_2UTzA9v9vTPII2cDuGNytT",
				boldText: "_2UTzA9v9vTPII2cDuGNytT",
				Scroller: "YjLnqfZg0dHuiTDoGknCl",
				scroller: "YjLnqfZg0dHuiTDoGknCl",
				ActionButtonsWrapper: "_2IPlfRVGFmkPQm8Sq3LgGL",
				actionButtonsWrapper: "_2IPlfRVGFmkPQm8Sq3LgGL",
				IconButton: "dHwDh7DaproJWLlU1ewDQ",
				iconButton: "dHwDh7DaproJWLlU1ewDQ"
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
		"./src/chat/components/OverlayDirectsEmptySkeletonState/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				c = n.n(s),
				r = n("./src/chat/components/OverlayNav/index.tsx"),
				o = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				i = n("./src/chat/controls/Overlay/index.tsx"),
				l = n("./src/chat/components/OverlayDirectsEmptySkeletonState/index.m.less"),
				d = n.n(l);
			t.a = () => c.a.createElement(i.a, {
				className: d.a.Overlay
			}, c.a.createElement(r.a, {
				title: a.fbt._("Loading chats", null, {
					hk: "4CMduv"
				}),
				withBorder: !0
			}), c.a.createElement("div", {
				className: d.a.OverlayContent
			}, c.a.createElement(o.e, null)))
		},
		"./src/chat/components/OverlayNav/index.m.less": function(e, t, n) {
			e.exports = {
				Group: "_1YPPlxZVDby6iOxA_2zGt5",
				group: "_1YPPlxZVDby6iOxA_2zGt5",
				Key: "_2VJvEvcJEb5Qi5bR-kioln",
				key: "_2VJvEvcJEb5Qi5bR-kioln",
				Nav: "_3CVk8skSg_xIxuTdTvDN73",
				nav: "_3CVk8skSg_xIxuTdTvDN73",
				withBorder: "_19HyK1DUlHx5x7quLBuG4A",
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
				UserName: "_1N0deXJi1sk88jl4lItroD",
				userName: "_1N0deXJi1sk88jl4lItroD",
				easyAccess: "_1aemjzBo5Zm7OAgIaGEwJT",
				LinkIcon: "_19xKLCVee3HuYFdRa-D-Hw",
				linkIcon: "_19xKLCVee3HuYFdRa-D-Hw",
				SubTitle: "AxqaQ2FQrA19yH4bFOCfx",
				subTitle: "AxqaQ2FQrA19yH4bFOCfx",
				isWarning: "VfeLM1QSNnCldK5gQU1Ac",
				HostLabel: "_1nnalnUYFc5R_TK6cXS_tR",
				hostLabel: "_1nnalnUYFc5R_TK6cXS_tR"
			}
		},
		"./src/chat/components/OverlayNav/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/chat/actions/container.ts"),
				i = n("./src/chat/actions/inviteLink/index.ts"),
				l = n("./src/chat/actions/renameGroupChat/index.ts"),
				d = n("./src/chat/actions/sidebar.ts"),
				u = n("./src/chat/actions/tracking.ts"),
				h = n("./src/chat/components/ChatIcon/index.tsx"),
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./node_modules/lodash/noop.js"),
				p = n.n(b),
				g = n("./src/lib/combineRefs/index.tsx"),
				f = n("./src/lib/hooks/useOnClickOutside.ts"),
				O = n("./src/lib/hooks/useTooltip.ts"),
				v = n("./src/chat/actions/channel.ts"),
				E = n("./src/chat/actions/channel/dropdown.ts"),
				j = n("./src/chat/actions/channel/hide.ts"),
				_ = n("./src/chat/actions/settings/index.ts"),
				C = n("./node_modules/react-router-redux/es/index.js"),
				I = (n("./src/chat/actions/tooltip.ts"), n("./src/chat/constants/users.ts")),
				y = n("./src/chat/helpers/urls/index.ts"),
				x = n("./src/chat/selectors/platform.ts");
			n("./src/telemetry/models/Event.ts");
			const {
				Block: S,
				Report: N,
				Kick: w
			} = I.a;
			var k = n("./src/lib/lessComponent.tsx"),
				T = n("./src/chat/actions/theme.ts"),
				M = n("./src/chat/helpers/chatSelector.ts"),
				A = n("./src/chat/controls/Svg/index.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var D = e => s.a.createElement(A.a, L({}, e, {
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
				U = n("./src/chat/components/ThemeSwitcher/index.m.less"),
				P = n.n(U);
			const R = Object(M.a)({
					theme: e => e.user.prefs.globalTheme
				}),
				B = Object(c.b)(R, (e, t) => ({
					changeModeClicked: () => e(Object(T.themeToggle)())
				})),
				H = k.a.div("Wrapper", P.a);
			B(e => {
				let {
					changeModeClicked: t,
					theme: n
				} = e;
				return s.a.createElement(H, {
					onClick: t
				}, s.a.createElement(D, {
					active: !0
				}))
			});
			var F = n("./src/chat/constants/channels.ts"),
				G = n("./src/chat/constants/dropdown.ts"),
				V = n("./src/chat/controls/Dropdown/Row.tsx"),
				W = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				z = n("./src/chat/controls/TooltipHooked/TooltipHooked.tsx"),
				K = n("./src/chat/icons/svgs/Block/index.tsx"),
				q = n("./src/chat/icons/svgs/ChangeTheme/index.tsx"),
				Z = n("./src/chat/icons/svgs/DisableNotifications/index.tsx");

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Y = e => s.a.createElement(A.a, Q({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
					d: "M10.8,4.029,1.214,13.405a1.135,1.135,0,0,0-.339.805V18A1.127,1.127,0,0,0,2,19.125H5.79a1.134,1.134,0,0,0,.8-.338L15.971,9.2Z"
				}), s.a.createElement("path", {
					d: "M18.25,3.159,16.841,1.75a2.634,2.634,0,0,0-3.692-.021L11.692,3.155l5.153,5.153,1.426-1.457A2.634,2.634,0,0,0,18.25,3.159Z"
				})) : s.a.createElement("path", {
					d: "M18.25,3.159,16.841,1.75a2.634,2.634,0,0,0-3.692-.021L1.214,13.405a1.135,1.135,0,0,0-.339.805V18A1.127,1.127,0,0,0,2,19.125H5.79a1.134,1.134,0,0,0,.8-.338L18.271,6.851A2.634,2.634,0,0,0,18.25,3.159ZM5.79,17.875H2.124L2.087,14.3l9.771-9.559,3.4,3.406Zm11.587-11.9L16.136,7.252,12.751,3.867l1.272-1.244a1.381,1.381,0,0,1,1.934.011l1.409,1.409A1.381,1.381,0,0,1,17.377,5.977Z"
				})),
				X = n("./src/chat/icons/svgs/EnableNotifications/index.tsx"),
				J = n("./src/chat/icons/svgs/InviteMember/index.tsx"),
				$ = n("./src/chat/icons/svgs/Leave/index.tsx"),
				ee = n("./src/chat/icons/svgs/Link/index.tsx"),
				te = n("./src/chat/icons/svgs/Profile/index.tsx"),
				ne = n("./src/chat/icons/svgs/helpers.tsx"),
				ae = n("./src/chat/models/Theme/index.ts");

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ce = e => {
					return s.a.createElement(A.a, se({}, e, {
						viewBox: "0 0 20 20"
					}), (() => {
						let t;
						const n = ae.f[ae.c.VANITY];
						return n && (t = s.a.createElement(ne.a, {
							rotate: ae.d,
							gradient: n,
							id: "settings-linear-gradient"
						})), s.a.createElement(s.a.Fragment, null, t, e.isFilled ? s.a.createElement("path", {
							d: "M19.549,8.849a1.124,1.124,0,0,0-1.116-.974H17.4a.915.915,0,0,1-.828-.608.906.906,0,0,1,.163-1l.722-.723a1.127,1.127,0,0,0,.1-1.495,9.631,9.631,0,0,0-1.608-1.608,1.129,1.129,0,0,0-1.494.1l-.724.724a.919.919,0,0,1-1.018.155.906.906,0,0,1-.588-.82V1.567A1.123,1.123,0,0,0,11.151.451a8.782,8.782,0,0,0-2.3,0,1.123,1.123,0,0,0-.974,1.116V2.6a.915.915,0,0,1-.608.828.909.909,0,0,1-1-.163l-.723-.722a1.126,1.126,0,0,0-1.495-.1A9.631,9.631,0,0,0,2.443,4.051a1.127,1.127,0,0,0,.1,1.494l.724.724a.917.917,0,0,1,.155,1.018.906.906,0,0,1-.82.588H1.567a1.123,1.123,0,0,0-1.116.974,8.754,8.754,0,0,0,0,2.3,1.123,1.123,0,0,0,1.116.974H2.6a.915.915,0,0,1,.828.608.906.906,0,0,1-.163,1l-.722.723a1.127,1.127,0,0,0-.1,1.495,9.707,9.707,0,0,0,1.608,1.608,1.131,1.131,0,0,0,1.494-.1l.724-.724a.916.916,0,0,1,1.018-.155.906.906,0,0,1,.588.82v1.031a1.123,1.123,0,0,0,.974,1.116,8.754,8.754,0,0,0,2.3,0,1.123,1.123,0,0,0,.974-1.116V17.4a.915.915,0,0,1,.608-.828.9.9,0,0,1,1,.163l.724.724a1.131,1.131,0,0,0,1.494.1,9.707,9.707,0,0,0,1.608-1.608,1.127,1.127,0,0,0-.1-1.494l-.724-.724a.917.917,0,0,1-.155-1.018.906.906,0,0,1,.82-.588h1.031a1.123,1.123,0,0,0,1.116-.974,8.754,8.754,0,0,0,0-2.3ZM10,13.125A3.125,3.125,0,1,1,13.125,10,3.129,3.129,0,0,1,10,13.125Z"
						}) : s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
							d: "M10,6.875A3.125,3.125,0,1,0,13.125,10,3.129,3.129,0,0,0,10,6.875Zm0,5A1.875,1.875,0,1,1,11.875,10,1.877,1.877,0,0,1,10,11.875Z"
						}), s.a.createElement("path", {
							d: "M19.549,8.849a1.124,1.124,0,0,0-1.116-.974H17.4a.915.915,0,0,1-.828-.608.906.906,0,0,1,.163-1l.722-.723a1.127,1.127,0,0,0,.1-1.495,9.631,9.631,0,0,0-1.608-1.608,1.129,1.129,0,0,0-1.494.1l-.724.724a.92.92,0,0,1-1.018.155.906.906,0,0,1-.588-.82V1.567A1.123,1.123,0,0,0,11.151.451a8.782,8.782,0,0,0-2.3,0,1.123,1.123,0,0,0-.974,1.116V2.6a.915.915,0,0,1-.608.828.907.907,0,0,1-1-.163l-.723-.722a1.126,1.126,0,0,0-1.495-.1A9.631,9.631,0,0,0,2.443,4.051a1.127,1.127,0,0,0,.1,1.494l.724.724a.917.917,0,0,1,.155,1.018.906.906,0,0,1-.82.588H1.567a1.123,1.123,0,0,0-1.116.974,8.754,8.754,0,0,0,0,2.3,1.123,1.123,0,0,0,1.116.974H2.6a.915.915,0,0,1,.828.608.906.906,0,0,1-.163,1l-.722.723a1.127,1.127,0,0,0-.1,1.495,9.707,9.707,0,0,0,1.608,1.608,1.13,1.13,0,0,0,1.494-.1l.724-.724a.916.916,0,0,1,1.018-.155.906.906,0,0,1,.588.82v1.031a1.123,1.123,0,0,0,.974,1.116,8.754,8.754,0,0,0,2.3,0,1.123,1.123,0,0,0,.974-1.116V17.4a.915.915,0,0,1,.608-.828.906.906,0,0,1,1,.163l.724.724a1.132,1.132,0,0,0,1.494.1,9.707,9.707,0,0,0,1.608-1.608,1.127,1.127,0,0,0-.1-1.494l-.724-.724a.917.917,0,0,1-.155-1.018.906.906,0,0,1,.82-.588h1.031a1.123,1.123,0,0,0,1.116-.974,8.754,8.754,0,0,0,0-2.3Zm-1.226,2.026H17.4a2.224,2.224,0,0,0-1.549,3.741l.65.65A8.459,8.459,0,0,1,15.266,16.5l-.65-.65A2.224,2.224,0,0,0,10.875,17.4v.921a7.216,7.216,0,0,1-1.75,0V17.4A2.159,2.159,0,0,0,7.747,15.42a2.154,2.154,0,0,0-2.363.433l-.65.65A8.459,8.459,0,0,1,3.5,15.266l.65-.65A2.224,2.224,0,0,0,2.6,10.875H1.677a7.388,7.388,0,0,1,0-1.75H2.6A2.159,2.159,0,0,0,4.58,7.747a2.152,2.152,0,0,0-.433-2.363l-.65-.65A8.362,8.362,0,0,1,4.734,3.5l.65.65a2.162,2.162,0,0,0,2.382.425A2.15,2.15,0,0,0,9.125,2.6V1.677a7.216,7.216,0,0,1,1.75,0V2.6A2.159,2.159,0,0,0,12.253,4.58a2.158,2.158,0,0,0,2.363-.433l.65-.65A8.362,8.362,0,0,1,16.5,4.734l-.65.65a2.16,2.16,0,0,0-.425,2.382A2.15,2.15,0,0,0,17.4,9.125h.921a7.388,7.388,0,0,1,0,1.75Z"
						})))
					})())
				},
				re = n("./src/chat/models/Channel/index.ts"),
				oe = n("./src/chat/models/Sidebar/index.ts"),
				ie = n("./src/chat/selectors/app.ts"),
				le = n("./src/chat/selectors/channels.ts"),
				de = n("./src/chat/selectors/experiments.ts"),
				ue = n("./src/chat/selectors/settings.ts"),
				he = n("./src/chat/selectors/sidebar.ts"),
				me = n("./src/chat/selectors/theme.ts"),
				be = n("./src/chat/selectors/user.ts"),
				pe = n("./src/chat/components/ChannelHeaderDropdown/index.m.less"),
				ge = n.n(pe);
			const fe = e => {
					switch (e) {
						case G.b.AddToGroup:
							return {
								text: m.fbt._("Invite members", null, {
									hk: "ChZv0"
								}), icon: s.a.createElement(J.a, null)
							};
						case G.b.Block:
							return {
								text: m.fbt._("Block", null, {
									hk: "1s7OxS"
								}), icon: s.a.createElement(K.a, null)
							};
						case G.b.CopyInviteLink:
							return {
								text: m.fbt._("Copy Invite Link", null, {
									hk: "3zt0MJ"
								}), icon: s.a.createElement(ee.a, null)
							};
						case G.b.ChangeTheme:
							return {
								text: m.fbt._("Change theme", null, {
									hk: "1J6Ajx"
								}), icon: s.a.createElement(q.a, null), className: "changeTheme"
							};
						case G.b.Leave:
							return {
								text: m.fbt._("Leave chat", null, {
									hk: "41t86n"
								}), icon: s.a.createElement($.a, null)
							};
						case G.b.LeaveGroup:
							return {
								text: m.fbt._("Leave group", null, {
									hk: "zStpq"
								}), icon: s.a.createElement($.a, null)
							};
						case G.b.ManageInviteLink:
							return {
								text: m.fbt._("Manage invite link", null, {
									hk: "3SBP09"
								}), icon: s.a.createElement(ce, null)
							};
						case G.b.MuteBadging:
							return {
								text: m.fbt._("Disable notification badging", null, {
									hk: "4BzTkp"
								}), icon: s.a.createElement(Z.a, null)
							};
						case G.b.MuteNotifs:
							return {
								text: m.fbt._("Mute notifications", null, {
									hk: "O4LsY"
								}), icon: s.a.createElement(Z.a, null)
							};
						case G.b.Profile:
							return {
								text: m.fbt._("View profile", null, {
									hk: "3i84FE"
								}), icon: s.a.createElement(te.a, null)
							};
						case G.b.RenameGroup:
							return {
								text: m.fbt._("Rename group", null, {
									hk: "hTeQ"
								}), icon: s.a.createElement(Y, null)
							};
						case G.b.UnmuteBadging:
							return {
								text: m.fbt._("Enable notification badging", null, {
									hk: "87Nfa"
								}), icon: s.a.createElement(X.a, null)
							};
						case G.b.UnmuteNotifs:
							return {
								text: m.fbt._("Unmute notifications", null, {
									hk: "2TcEwL"
								}), icon: s.a.createElement(X.a, null)
							};
						case G.b.ViewMembers:
							return {
								text: m.fbt._("View members", null, {
									hk: "PC84"
								}), icon: s.a.createElement(te.a, null)
							};
						default:
							return {
								text: "Unknown item", icon: s.a.createElement("span", null)
							}
					}
				},
				Oe = Object(M.a)({
					currentUserId: be.a,
					channel: le.n,
					isModerator: le.a,
					isChannelBadgingMuted: le.L,
					isChannelNotifsMuted: (e, t) => {
						let {
							channelId: n
						} = t;
						return Boolean(n && Object(le.N)(e, n))
					},
					isFullSize: ie.h,
					isThemesEnabled: de.A,
					showSparkles: me.e,
					isQuickActionsEnabled: de.w,
					isLinkSharingEnabledExperiment: de.i
				});
			var ve = Object(c.b)(Oe, (e, t) => ({
					onInviteToChannel: () => {
						e(Object(E.c)()), e(Object(u.c)())
					},
					onInviteLinkSettings: () => {
						e(Object(_.e)(_.b.SESSION_LAST)), t.channelId && e(Object(E.b)(t.channelId))
					},
					onLeaveDirectChannel: () => {
						e(Object(j.a)()), e(Object(u.J)())
					},
					onLeaveGroupChannel: () => {
						t.channelId && e(Object(v.H)(t.channelId)), e(Object(u.J)())
					},
					onViewMembers: () => {
						e(Object(E.k)()), e(Object(u.pb)())
					},
					onBlockUser: t => e((e => async (t, n) => {
						const a = n(),
							s = Object(x.e)(a);
						if (s) {
							const n = Object(y.getRedirectURL)(Object(y.userActionUrl)(s, e, S));
							t(Object(C.b)(n))
						}
					})(t)),
					onChangeTheme: () => {
						e(Object(_.h)()), e(Object(u.f)())
					},
					onViewProfile: t => {
						e(Object(E.l)(t)), e(Object(u.D)())
					},
					onOpenDropdown: t => e(Object(E.h)(t)),
					onMuteBadging: () => {
						e(Object(E.d)()), e(Object(u.O)())
					},
					onUnmuteBadging: () => {
						e(Object(E.f)()), e(Object(u.P)())
					},
					onMuteNotifs: () => {
						e(Object(E.e)()), e(Object(u.S)())
					},
					onUnmuteNotifs: () => {
						e(Object(E.g)()), e(Object(u.eb)())
					},
					showSidebar: () => e(Object(d.f)(!0))
				}))(e => {
					const {
						channel: t,
						currentUserId: n,
						isChannelBadgingMuted: o,
						isChannelNotifsMuted: i,
						isThemesEnabled: l,
						isQuickActionsEnabled: d,
						isLinkSharingEnabledExperiment: h,
						isModerator: b
					} = e, v = Object(c.d)(), E = Object(c.e)(ue.a), j = Object(c.e)(ue.b), C = Object(c.e)(de.c), I = Object(c.e)(de.b), y = Object(c.e)(he.a), x = Object(c.e)(de.k), S = y === oe.a.SETTINGS, N = Object(O.b)(Object(W.f)()), w = Object(O.b)(Object(W.g)()), k = {
						...w.arrowProps,
						style: {
							...w.arrowProps.style,
							borderBottom: "5px solid var(--prompt-tooltip-background)"
						}
					}, T = Object(a.useMemo)(() => (null == t ? void 0 : t.type) === re.b.Group, [t]), M = T && E && !j && (C || I);
					Object(a.useEffect)(() => {
						let e;
						return T && (e = setTimeout(() => {
							null == w || w.show()
						})), clearTimeout(e)
					}, [T]);
					Object(f.a)("OverlayNavTooltip--Default", N.hide);
					const A = a => {
							const {
								onBlockUser: s,
								onChangeTheme: c,
								onInviteToChannel: r,
								onLeaveDirectChannel: o,
								onLeaveGroupChannel: i,
								onMuteNotifs: l,
								onUnmuteBadging: d,
								onUnmuteNotifs: u,
								onViewMembers: h,
								onMuteBadging: m,
								showSidebar: b,
								toggleChannelNameInput: g
							} = e;
							switch (N.hide(), a) {
								case G.b.AddToGroup:
									return r();
								case G.b.Block: {
									const e = (() => t && t.members.find(e => e.id !== n))();
									return e && s(e.id)
								}
								case G.b.ChangeTheme:
									return b(), c();
								case G.b.Leave:
									return o();
								case G.b.LeaveGroup:
									return i();
								case G.b.Profile:
									return L();
								case G.b.RenameGroup:
									return g();
								case G.b.ViewMembers:
									return h();
								case G.b.ManageInviteLink:
									return P();
								case G.b.MuteBadging:
									return m();
								case G.b.UnmuteBadging:
									return d();
								case G.b.MuteNotifs:
									return l();
								case G.b.UnmuteNotifs:
									return u();
								default:
									return p.a
							}
						},
						L = () => {
							const {
								channel: t,
								currentUserId: n,
								onViewProfile: a,
								inviterName: s
							} = e;
							if (t && t.channelState === F.b.JOINED) {
								const e = t.members.find(e => e.id !== n);
								if (e && e.name) return a(e.name)
							}
							return s && a(s)
						},
						{
							isFullSize: D,
							showSparkles: U,
							onInviteLinkSettings: P
						} = e,
						R = (() => {
							if (t) switch (t.type) {
								case re.b.Direct:
									return G.c.directChannel.filter(e => G.d.muteBadging(e, o, d) && G.d.unmuteBadging(e, o, d) && G.d.muteNotifs(e, i) && G.d.unmuteNotifs(e, i) && G.d.changeTheme(e, l));
								case re.b.Group:
									return G.c.groupChannel.filter(e => G.d.muteBadging(e, o, d) && G.d.unmuteBadging(e, o, d) && G.d.muteNotifs(e, i) && G.d.unmuteNotifs(e, i) && G.d.changeTheme(e, l) && G.d.linkSettings(e, h && b))
							}
						})();
					return s.a.createElement(s.a.Fragment, null, !1, s.a.createElement("button", {
						tabIndex: 1,
						onClick: e => (e => {
							e.stopPropagation(), x ? null == N || N.toggle() : v(Object(_.i)()), v(Object(_.d)())
						})(e),
						ref: Object(g.a)(N.target.ref, w.target.ref),
						className: Object(r.a)(ge.a.DropdownTrigger, {
							[ge.a.isFullSize]: D
						}),
						title: m.fbt._("Settings", null, {
							hk: "4lO98u"
						})
					}, s.a.createElement(ce, {
						isFilled: S,
						className: Object(r.a)(ge.a.Settings, {
							[ge.a.gradient]: U && l
						})
					})), M && s.a.createElement(z.default, {
						arrowProps: k,
						popperProps: w.popperProps,
						visible: w.visible,
						hide: w.hide,
						isInstant: !0,
						styled: !0
					}, s.a.createElement("button", {
						className: ge.a.Tooltip,
						onClick: () => {
							v(P()), v(Object(u.E)())
						}
					}, m.fbt._("You can invite others by sharing the chat URL", null, {
						hk: "4A6k9w"
					}))), s.a.createElement(z.default, {
						arrowProps: N.arrowProps,
						popperProps: N.popperProps,
						visible: N.visible,
						hide: N.hide,
						isInstant: !0,
						noArrow: !0,
						styled: !0
					}, s.a.createElement("div", {
						className: ge.a.OptionsContainer,
						id: "OverlayNavTooltip--Default"
					}, R && R.map((e, t) => s.a.createElement(V.a, {
						className: Object(r.a)(ge.a.DropdownRow, {
							[ge.a.gradient]: U && l && e === G.b.ChangeTheme
						}),
						key: t,
						displayText: fe(e).text,
						onClick: () => {
							A(e)
						},
						isStepper: fe(e).isStepper
					}, fe(e).icon)))))
				}),
				Ee = n("./src/chat/components/CloseIcon/index.tsx"),
				je = n("./src/chat/constants/container.ts"),
				_e = n("./src/chat/controls/Button/index.tsx");

			function Ce() {
				return (Ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const Ie = e => s.a.createElement(A.a, Ce({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M10,15.625a.623.623,0,0,1-.442-.183l-9-9,.884-.884L10,14.116l8.558-8.558.884.884-9,9A.623.623,0,0,1,10,15.625Z"
			}));

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			Ie.displayName = "NavMinimize";
			const xe = e => s.a.createElement(A.a, ye({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M15.838,16.5a1.377,1.377,0,0,1-1.375,1.375h-11A1.377,1.377,0,0,1,2.088,16.5V5.5A1.377,1.377,0,0,1,3.463,4.125H7.11V2.875H3.463A2.629,2.629,0,0,0,.838,5.5v11a2.629,2.629,0,0,0,2.625,2.625h11A2.629,2.629,0,0,0,17.088,16.5V12.9h-1.25Z"
			}), s.a.createElement("path", {
				d: "M18.5.875h-5v1.25h3.491L8.558,10.558l.884.884,8.433-8.433V6.5h1.25v-5A.625.625,0,0,0,18.5.875Z"
			}));
			xe.displayName = "NavPopout";
			var Se = n("./src/chat/components/OverlayNavButtonGroup/index.m.less"),
				Ne = n.n(Se);
			var we = Object(c.b)(() => Object(M.a)({
					containerSize: e => e.container.size,
					inviterName: le.K,
					isReady: ie.j
				}), e => ({
					close: () => e(Object(o.sizeChanged)(je.a.HIDDEN)),
					minimize: () => {
						e(Object(o.sizeChanged)(je.a.MINIMIZED)), e(Object(u.w)())
					},
					popout: () => e(Object(o.popoutOpened)())
				}))(e => {
					let {
						channelId: t,
						containerSize: n,
						dropdownId: a,
						showMenu: c,
						inviterName: r,
						isReady: o,
						minimize: i,
						popout: l,
						toggleChannelNameInput: d
					} = e;
					const u = o && n === je.a.EMBED;
					return s.a.createElement("div", {
						className: Ne.a.Wrapper
					}, c && s.a.createElement(ve, {
						channelId: t,
						dropdownId: a,
						inviterName: r,
						toggleChannelNameInput: d
					}), u && s.a.createElement(s.a.Fragment, null, s.a.createElement(_e.d, {
						className: Ne.a.IconButton,
						onClick: l,
						title: m.fbt._("Open chat in new window", null, {
							hk: "3S8f7W"
						})
					}, s.a.createElement(xe, null)), s.a.createElement(_e.d, {
						className: Ne.a.IconButton,
						onClick: i,
						title: m.fbt._("Minimize chat", null, {
							hk: "1gym9X"
						})
					}, s.a.createElement(Ie, null)), s.a.createElement(Ee.a, {
						className: Ne.a.CloseButton
					})))
				}),
				ke = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				Te = n("./src/chat/controls/Counter/index.tsx");
			var Me = n("./src/chat/components/RenameGroupInput/index.m.less"),
				Ae = n.n(Me);
			const Le = k.a.wrapped(e => s.a.createElement("span", {
					className: Object(r.a)({
						[Ae.a.visible]: e.isVisible
					}, e.className)
				}, e.children), "InputWrapper", Ae.a),
				De = k.a.div("InputContent", Ae.a),
				Ue = k.a.span("InputControls", Ae.a),
				Pe = k.a.wrapped(_e.a, "CancelButton", Ae.a),
				Re = k.a.wrapped(_e.a, "SaveButton", Ae.a),
				Be = Object(M.a)({
					isVisible: e => {
						return (e => e.renameGroupChat)(e).ivVisible
					}
				});
			class He extends a.Component {
				constructor() {
					super(...arguments), this.displayName = "RenameGroupInput", this.state = {
						groupName: this.props.name || ""
					}, this.getAvailableCharacters = () => F.g - this.state.groupName.length, this.hideChannelNameInput = () => {}, this.handleChannelNameInput = e => this.setState({
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
						submitGroupName: c
					} = this, r = this.getAvailableCharacters();
					return s.a.createElement(Le, {
						isVisible: t
					}, s.a.createElement(De, null, s.a.createElement(ke.a, {
						className: Ae.a.ChannelNameInput,
						handleChannelNameInput: a,
						placeholder: m.fbt._("Rename group", null, {
							hk: "1mjXbx"
						}),
						withBackground: !0,
						value: n,
						maxLength: F.g
					}, s.a.createElement(Te.a, {
						count: r
					})), s.a.createElement(Ue, null, s.a.createElement(Pe, {
						secondaryNoBorder: !0,
						onClick: e
					}, m.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(Re, {
						noBorder: !0,
						disabled: r < 0 || r >= F.g,
						onClick: c
					}, m.fbt._("Save", null, {
						hk: "4yMsMq"
					})))))
				}
			}
			var Fe = Object(c.b)(Be, e => ({
					onUpdateChannelName: t => e(Object(E.j)(t)),
					saveRenamedGroup: () => e(Object(u.W)()),
					hideChannelNameInput: () => e(Object(l.b)({
						isVisible: !1
					}))
				}))(He),
				Ge = n("./src/chat/helpers/dom.ts"),
				Ve = n("./src/chat/icons/svgs/ArrowLeft/index.tsx"),
				We = n("./src/chat/components/OverlayNav/index.m.less"),
				ze = n.n(We);
			const {
				fbt: Ke
			} = n("./node_modules/fbt/lib/FbtPublic.js"), qe = e => {
				let {
					userName: t,
					channelId: n,
					channelType: a
				} = e;
				const o = Object(c.e)(de.a),
					l = Object(c.e)(de.b),
					d = Object(c.e)(le.a),
					h = Object(c.e)(ie.h),
					m = o || l,
					b = Object(c.d)();
				return s.a.createElement("span", {
					onClick: Object(Ge.b)(() => {
						m && a === re.b.Group && (b(Object(i.e)(n)), b(Object(u.o)(i.b.EASY_ACCESS)))
					}),
					className: Object(r.a)(ze.a.UserProfileTitle, {
						[ze.a.easyAccess]: m && a === re.b.Group,
						[ze.a.isFullSize]: h
					})
				}, s.a.createElement("span", {
					className: ze.a.UserName,
					title: t
				}, t), d && a === re.b.Group ? s.a.createElement(s.a.Fragment, null, s.a.createElement("span", null, " • "), s.a.createElement("span", {
					className: ze.a.HostLabel
				}, Ke._("Host", null, {
					hk: "1dh50y"
				}))) : null, m && a === re.b.Group && s.a.createElement(ee.a, {
					className: ze.a.LinkIcon
				}))
			}, Ze = Object(M.a)({
				isEmbedded: ie.g,
				iconMembers: (e, t) => Object(le.w)(e, t.channelId),
				isFullSize: ie.h
			}), Qe = Object(c.b)(Ze, e => ({
				minimize: () => {
					e(Object(o.sizeChanged)(je.a.MINIMIZED)), e(Object(u.w)())
				},
				toggleSidebar: () => e(Object(d.f)(!0)),
				clickRenameGroupTracking: () => e(Object(u.B)()),
				showRenameGroupChat: () => e(Object(l.b)({
					isVisible: !0
				}))
			}));
			class Ye extends a.Component {
				constructor(e) {
					super(e), this.showChannelNameInput = () => {
						this.props.showRenameGroupChat(), this.props.clickRenameGroupTracking()
					}, this.state = {
						channelId: e.channelId
					}
				}
				static getDerivedStateFromProps(e, t) {
					return e.channelId !== t.channelId ? {
						channelId: e.channelId
					} : null
				}
				render() {
					var e;
					const {
						props: {
							channelId: t,
							className: n,
							dropdownId: a,
							isEmbedded: c,
							minimize: o,
							showMenu: i,
							subTitle: l,
							title: d,
							channelType: u,
							iconMembers: m,
							toggleSidebar: b,
							showMembers: p,
							isFullSize: g,
							hasWarning: f,
							withBorder: O
						},
						showChannelNameInput: v
					} = this;
					return s.a.createElement("nav", {
						className: Object(r.a)(ze.a.Nav, {
							[ze.a.isFullSize]: g,
							[ze.a.withBorder]: O
						}, n)
					}, s.a.createElement(_e.d, {
						onClick: b,
						className: Object(r.a)(ze.a.IconButton, {
							[ze.a.isFullSize]: g
						})
					}, s.a.createElement(Ve.a, {
						className: ze.a.ArrowLeft
					})), s.a.createElement("span", {
						onClick: c ? Object(Ge.b)(o) : void 0,
						className: Object(r.a)(ze.a.TitleWrapper, {
							[ze.a.embed]: c
						})
					}, p && m && m.firstUser && s.a.createElement(h.a, {
						className: Object(r.a)(ze.a.ChatIcon, {
							[ze.a.isFullSize]: g
						}),
						userId: m.firstUser.id,
						secondUserId: null === (e = m.secondUser) || void 0 === e ? void 0 : e.id
					}), t && void 0 !== u ? s.a.createElement(qe, {
						userName: d,
						channelId: t,
						channelType: u
					}) : s.a.createElement("span", {
						className: ze.a.Title
					}, d), s.a.createElement("span", {
						className: Object(r.a)(ze.a.SubTitle, {
							[ze.a.isWarning]: f
						})
					}, l)), s.a.createElement(we, {
						channelId: t,
						toggleChannelNameInput: v,
						showMenu: !!i,
						dropdownId: a
					}), t && d && s.a.createElement(Fe, {
						channelId: t,
						name: d
					}))
				}
			}
			t.a = Qe(Ye)
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
		"./src/chat/components/Reactions/MessageReactions/index.m.less": function(e, t, n) {
			e.exports = {
				ReactionsWrapper: "coNAUwKfPDYkfY-x6RJkT",
				reactionsWrapper: "coNAUwKfPDYkfY-x6RJkT",
				reversed: "ZT7SQZ5NYp0OKYHI7URtP",
				ReactionWrapper: "_2na6spitdv5U9yHrjndCmR",
				reactionWrapper: "_2na6spitdv5U9yHrjndCmR",
				userReacted: "_1VnUNxhJW9KdhZPeK2gUC2",
				new: "_3ckJsMQz0a1y12Nei_PkFw",
				popIn: "IbI_OS9pKen0aZ29rCF7y",
				ReactionIcon: "lb6l2c9eAoo77HRVFW0bU",
				reactionIcon: "lb6l2c9eAoo77HRVFW0bU",
				ReactionCounterContainer: "_1gL3LE8k7ZTXoHPAxMH35g",
				reactionCounterContainer: "_1gL3LE8k7ZTXoHPAxMH35g",
				TranslationContainer: "_2J4OTgZVCOdITSod_WlDz6",
				translationContainer: "_2J4OTgZVCOdITSod_WlDz6",
				up: "_20DJsFevI0RwFsRGrYrDDf",
				down: "_2fxcb_xGpZ45lHlx8K2Av8",
				ReactionCounter: "_1pQgISE0nzwfgUL2Xs89jw",
				reactionCounter: "_1pQgISE0nzwfgUL2Xs89jw"
			}
		},
		"./src/chat/components/Reactions/ReactionsTray/index.m.less": function(e, t, n) {
			e.exports = {
				ReactionsContainer: "_2wXBUAe_zZXzF7bdLRKto4",
				reactionsContainer: "_2wXBUAe_zZXzF7bdLRKto4",
				popIn: "_2I2ZHBldTz0d4_5sB1fblb",
				ReactionsIcons: "_31Z5f4RD19smr156RzAbeK",
				reactionsIcons: "_31Z5f4RD19smr156RzAbeK",
				ReactionIcon: "_1bS-Q_oUGFA-_n2-x5dJhX",
				reactionIcon: "_1bS-Q_oUGFA-_n2-x5dJhX",
				jumping: "_2nmFNrFpCSjcy9rJKTmdJK",
				ReactionImage: "_3SvumaWAaaXy0g1xzNlIbI",
				reactionImage: "_3SvumaWAaaXy0g1xzNlIbI",
				AddIcon: "_3yCcYzEmhaeqK9hWrV0ORy",
				addIcon: "_3yCcYzEmhaeqK9hWrV0ORy"
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
				ChannelNameInput: "_35JFG3Lohu6uXHvGyIvxhx",
				channelNameInput: "_35JFG3Lohu6uXHvGyIvxhx",
				InputControls: "_1zk-MS9-Wk_eyGcUZvopQX",
				inputControls: "_1zk-MS9-Wk_eyGcUZvopQX"
			}
		},
		"./src/chat/components/Root/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-router/esm/react-router.js"),
				r = (n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./src/chat/components/FrameContent/index.tsx")),
				o = n("./src/config.ts"),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/lib/env/index.ts"),
				d = n("./src/lib/opener/index.ts"),
				u = n("./src/chat/actions/container.ts"),
				h = n("./src/chat/actions/inviteLink/localStorage.ts"),
				m = n("./src/chat/actions/sidebar.ts"),
				b = n("./src/chat/components/OverlayDirectsEmptySkeletonState/index.tsx"),
				p = n("./src/chat/components/Sidebar/index.tsx"),
				g = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				f = n("./src/chat/constants/container.ts"),
				O = (n("./src/chat/helpers/urls/index.ts"), n("./src/chat/selectors/app.ts")),
				v = n("./src/chat/selectors/inviteLink.ts"),
				E = n("./src/chat/selectors/platform.ts");
			var j = e => {
					let {
						children: t
					} = e;
					const n = Object(i.d)(),
						a = Object(i.e)(O.i),
						c = Object(i.e)(O.f),
						r = Object(i.e)(E.h),
						j = Object(i.e)(E.j),
						_ = Object(i.e)(E.i),
						C = Object(i.e)(E.e),
						I = Object(i.e)(v.e),
						y = a || I;
					return I && (_ ? n(Object(h.c)()) : r ? n(Object(h.d)()) : j && C && n(Object(m.d)(C)), n(Object(u.sizeChanged)(f.a.EMBED)), Object(l.b)() && Object(d.e)(o.a.redditUrl)), y ? null : c ? t : s.a.createElement(s.a.Fragment, null, s.a.createElement(p.a, null, s.a.createElement("span", {
						style: {
							paddingTop: "45px",
							background: "var(--layout-body)"
						}
					}, s.a.createElement(g.d, null))), s.a.createElement(b.a, null))
				},
				_ = n("./src/chat/components/ThemeProvider/index.tsx");

			function C(e, t) {
				return s.a.createElement(_.a, {
					className: r.a
				}, s.a.createElement(e, null, s.a.createElement(c.d, {
					component: e => s.a.createElement(j, null, s.a.createElement(c.f, {
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
			var a = n("./node_modules/lodash/debounce.js"),
				s = n.n(a),
				c = n("./node_modules/lodash/isEqual.js"),
				r = n.n(c),
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
					return !r()(this.props, e) || !r()(this.state, t)
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
			m.displayName = "Scroller", t.a = h
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
				isFullSize: "_1bdrOnTDt7vqIPHo6hy4UR",
				hidden: "_2LCL99h1LFi6gbdVp7LCYi"
			}
		},
		"./src/chat/components/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Ye
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/chat/actions/sidebar.ts"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/chat/actions/channel.ts"),
				d = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/chat/actions/tracking.ts")),
				u = n("./src/chat/components/ChatList/index.tsx"),
				h = n("./src/chat/components/Sidebar/SidebarDivider/index.m.less"),
				m = n.n(h);
			const b = e => {
				let {
					children: t,
					className: n
				} = e;
				return s.a.createElement("div", {
					className: Object(r.a)(m.a.Divider, n)
				}, t)
			};
			var p = n("./src/chat/controls/TextButton.tsx"),
				g = n("./src/chat/models/Sidebar/index.ts"),
				f = n("./src/chat/selectors/channels.ts"),
				O = n("./src/chat/selectors/experiments.ts"),
				v = n("./src/chat/selectors/unreadCounter.ts"),
				E = n("./src/chat/components/BasicInvited/index.m.less"),
				j = n.n(E);
			var _ = () => {
					const e = Object(c.d)(),
						t = Object(c.e)(f.d),
						n = Object(c.e)(f.I),
						r = Object(c.e)(f.b),
						h = Object(c.e)(v.a),
						m = Object(c.e)(O.s),
						E = Object(a.useCallback)(() => {
							n && !r && e(Object(l.E)({
								recursively: !0
							})), e(Object(o.e)(g.a.INVITED_CHANNELS)), e(Object(d.e)())
						}, [e, n, r]),
						_ = Object(a.useMemo)(() => m ? t : t.slice(0, 2), [t, m]),
						C = Object(a.useMemo)(() => m ? 1 / 0 : 2, [m]);
					return t && t.length ? s.a.createElement("div", {
						className: j.a.BasicInvited
					}, s.a.createElement(b, {
						className: j.a.SidebarDivider
					}, !m && i.fbt._("Invites", null, {
						hk: "1NWeVa"
					}), h > C ? s.a.createElement(p.a, {
						onClick: E
					}, i.fbt._("See all", null, {
						hk: "mkJIj"
					}), " (", h, ")") : null), s.a.createElement(u.a, {
						channels: Object.values(_)
					})) : null
				},
				C = n("./src/lib/lessComponent.tsx"),
				I = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				y = n("./src/chat/helpers/chatSelector.ts"),
				x = n("./src/chat/selectors/user.ts"),
				S = n("./src/chat/components/BasicJoined/index.m.less"),
				N = n.n(S);
			const w = C.a.p("Text", N.a),
				k = Object(y.a)({
					currentUserId: x.a,
					fetchingJoinedChannels: f.c,
					hasMoreJoinedChannels: f.J,
					joinedChannels: f.e,
					selectedChannelId: e => Object(f.E)(e, "channelId"),
					hasInvitedChannels: f.H,
					isLiveChatInChatTabEnabled: O.s
				});
			var T = Object(c.b)(k)(e => {
					const {
						className: t,
						fetchingJoinedChannels: n,
						joinedChannels: a,
						hasInvitedChannels: c,
						isLiveChatInChatTabEnabled: r
					} = e;
					return s.a.createElement("div", {
						className: t
					}, !r && c && s.a.createElement(b, null, i.fbt._("Chats", null, {
						hk: "Bzl0R"
					})), (!a || !a.length) && s.a.createElement(w, null, i.fbt._("All the direct chats that you're in will show up here", null, {
						hk: "4A1UXC"
					})), s.a.createElement(u.a, {
						channels: a
					}), n && s.a.createElement(I.d, null))
				}),
				M = n("./node_modules/lodash/throttle.js"),
				A = n.n(M),
				L = n("./node_modules/classnames/index.js"),
				D = n.n(L),
				U = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				P = n("./src/lib/intersectionObserver/index.ts"),
				R = n("./src/chat/actions/liveChat/index.ts"),
				B = n("./src/chat/controls/Counter/index.tsx"),
				H = n("./src/chat/helpers/urls/index.ts"),
				F = n("./src/lib/env/index.ts");
			const G = new Map,
				V = e => e,
				W = new Set;
			var z;
			! function(e) {
				e.NEW_COMMENT = "new_comment", e.UPDATE_COMMENT = "update_comment", e.UPDATE_COMMENT_SCORE = "update_comment_score", e.DELETE_COMMENT = "delete_comment", e.REMOVE_COMMENT = "remove_comment", e.USER_JOIN = "join_system_message"
			}(z || (z = {}));
			const K = {
					backoffTime: 2e3,
					connectionAttempts: 0,
					jitterAmount: 3e3,
					maximumRetries: 9
				},
				q = (e, t) => {
					const n = V(t),
						a = G.get(n);
					a && a.socket && (a.isClosePlanned = !0, a.socket.close())
				},
				Z = (e, t, n, a) => {
					const s = V(t),
						c = G.get(s);
					if (c && (c.socket.readyState === WebSocket.CONNECTING || c.socket.readyState === WebSocket.OPEN)) return;
					const r = {
						socket: new WebSocket(e),
						retries: n,
						uniqueId: t,
						url: e,
						isClosePlanned: !1
					};
					G.set(s, r), r.socket.addEventListener("open", () => {
						r.retries = {
							...K
						}
					}), r.socket.addEventListener("message", X.bind(null, a)), r.socket.addEventListener("close", Q.bind(null, s, a)), r.socket.addEventListener("error", J.bind(null, s)), window && window.addEventListener("beforeunload", q.bind(null, e, t))
				},
				Q = (e, t, n) => {
					const a = G.get(e);
					a && (a.isClosePlanned ? G.delete(e) : Y(e, t))
				},
				Y = (e, t) => {
					const n = G.get(e);
					if (!n) return;
					const {
						retries: {
							backoffTime: a,
							connectionAttempts: s,
							jitterAmount: c,
							maximumRetries: r
						},
						socket: o,
						uniqueId: i,
						url: l
					} = n;
					if (G.delete(e), s < r && o.readyState !== WebSocket.OPEN) {
						const e = a * Math.pow(2, s),
							r = Math.random() * c - c / 2,
							o = Math.round(e + r),
							d = {
								...n.retries,
								connectionAttempts: s + 1
							};
						setTimeout(() => {
							Z(l, i, d, t)
						}, o), Object(F.a)() && console.debug(`Connection reset, retrying in ${o}ms`)
					}
				},
				X = (e, t) => {
					if (t && t.data) try {
						e(JSON.parse(t.data))
					} catch (t) {
						Object(F.a)() && console.error(t)
					}
				},
				J = (e, t) => {
					const n = G.get(e);
					n && n.isClosePlanned && n.socket && n.socket.readyState === WebSocket.CLOSED ? G.delete(e) : Object(F.a)() && console.error(t)
				},
				$ = {};
			var ee = e => {
					let {
						postId: t,
						liveCommentsUrl: n,
						callback: s
					} = e;
					const r = Object(c.e)(O.r);
					Object(a.useEffect)(() => {
						if (r) return;
						const e = t,
							a = n;
						let c = !0;
						return (e => new Promise(t => {
							const {
								cb: n,
								url: a,
								uniqueId: s
							} = e;
							W.has(s) ? t() : (W.add(s), setTimeout(() => {
								W.delete(s), Z(a, s, {
									...K
								}, n), t()
							}, 1))
						}))({
							uniqueId: e,
							url: a,
							cb: e => {
								if (c) switch (e.type) {
									case z.NEW_COMMENT: {
										const t = e.payload.name;
										!(!t || !$[t]) || s(e.payload);
										break
									}
									case z.DELETE_COMMENT:
									case z.REMOVE_COMMENT: {
										const t = e.payload.name;
										$[t] = z.REMOVE_COMMENT;
										break
									}
								}
							}
						}), () => {
							q(0, e), c = !1
						}
					}, [t, n, s, r])
				},
				te = n("./src/chat/controls/Svg/index.tsx");

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ae = e => s.a.createElement(te.a, ne({
					viewBox: "0 0 12 12"
				}, e), s.a.createElement("path", {
					d: "M8.1348 8.6652L5.625 6.1554V2.4H6.375V5.8446L8.6652 8.1348L8.1348 8.6652ZM12 6C12 4.81332 11.6481 3.65328 10.9888 2.66658C10.3295 1.67989 9.39246 0.910851 8.2961 0.456726C7.19975 0.0025997 5.99335 -0.11622 4.82946 0.115291C3.66558 0.346802 2.59648 0.918247 1.75736 1.75736C0.918247 2.59648 0.346802 3.66558 0.115291 4.82946C-0.11622 5.99335 0.0025997 7.19975 0.456726 8.2961C0.910851 9.39246 1.67989 10.3295 2.66658 10.9888C3.65328 11.6481 4.81332 12 6 12C7.59077 11.9983 9.11587 11.3656 10.2407 10.2407C11.3656 9.11587 11.9983 7.59077 12 6ZM11.25 6C11.25 7.03835 10.9421 8.05339 10.3652 8.91675C9.78834 9.7801 8.9684 10.453 8.00909 10.8504C7.04978 11.2477 5.99418 11.3517 4.97578 11.1491C3.95738 10.9466 3.02192 10.4465 2.28769 9.71231C1.55347 8.97809 1.05345 8.04263 0.85088 7.02423C0.648308 6.00583 0.752275 4.95023 1.14964 3.99091C1.547 3.0316 2.2199 2.21166 3.08326 1.63479C3.94662 1.05791 4.96165 0.750003 6 0.750003C7.3919 0.751591 8.72634 1.30522 9.71056 2.28945C10.6948 3.27367 11.2484 4.6081 11.25 6Z",
					fill: "#737577"
				})),
				se = n("./src/chat/selectors/liveChat/index.ts"),
				ce = n("./src/chat/selectors/theme.ts"),
				re = n("./src/redditGQL/types.ts"),
				oe = n("./src/chat/components/LiveChatListItem/index.m.less"),
				ie = n.n(oe);
			const le = () => s.a.createElement("svg", {
					className: ie.a.ringInner,
					xmlns: "http://www.w3.org/2000/svg",
					width: "41",
					height: "41",
					viewBox: "0 0 41 41",
					fill: "none"
				}, s.a.createElement("rect", {
					opacity: "0.8",
					x: "1.93444",
					y: "1.15466",
					width: "38.5",
					height: "38.5",
					rx: "23",
					stroke: "url(#paint0_linear_284_569805)",
					strokeWidth: "2"
				}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
					id: "paint0_linear_284_569805",
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, s.a.createElement("stop", {
					stopColor: "#FF538C"
				}), s.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})))),
				de = () => s.a.createElement("svg", {
					className: ie.a.ringMiddle,
					xmlns: "http://www.w3.org/2000/svg",
					width: "47",
					height: "47",
					viewBox: "0 0 47 47",
					fill: "none"
				}, s.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "45.5",
					height: "45.5",
					rx: "27",
					stroke: "url(#paint0_linear_284_569806)"
				}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
					id: "paint0_linear_284_569806",
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, s.a.createElement("stop", {
					stopColor: "#FF538C"
				}), s.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})))),
				ue = () => s.a.createElement("svg", {
					className: ie.a.ringOuter,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, s.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "54.5",
					height: "54.5",
					rx: "31.25",
					stroke: "url(#paint0_linear_284_569807)",
					strokeWidth: "0.5"
				}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
					id: "paint0_linear_284_569807",
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, s.a.createElement("stop", {
					stopColor: "#FF538C"
				}), s.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				})))),
				he = e => s.a.createElement("div", {
					className: ie.a.AnimatedRings
				}, s.a.createElement(le, null), s.a.createElement(de, null), s.a.createElement(ue, null), e.children);
			var me = n("./src/lib/prettyPrintNumber/index.ts");
			const be = e => {
				return e.length > 1 && e.startsWith("/") && e.endsWith("/") ? e.slice(1, e.length - 1) : e
			};
			var pe = e => {
				let {
					liveChatPostModel: t,
					isSelected: n
				} = e;
				var o, l;
				const u = Object(c.d)(),
					h = Object(a.useRef)(null),
					[m, b] = Object(a.useState)(!1),
					p = t.post,
					g = Object(a.useMemo)(() => Object(H.getRedirectURL)(Object(H.liveChatUrl)(p.id)), [p.id]),
					f = Object(c.e)(e => Object(se.g)(e, p.id)),
					O = Object(c.e)(ce.b),
					v = ((e, t) => {
						const n = e.post,
							c = Object(a.useMemo)(() => be(n.subreddit.path), [n.subreddit.path]),
							r = t && t > 1 ? i.fbt._("{user count} here", [i.fbt._param("user count", Object(me.b)(t))], {
								hk: "2UMwVj"
							}) + " · " : "";
						switch (e.engagementType) {
							case re.n.Previewed:
								return s.a.createElement(s.a.Fragment, null, s.a.createElement(ae, {
									className: ie.a.Clock
								}), i.fbt._("Visited · {active user count}{subreddit path}", [i.fbt._param("active user count", r), i.fbt._param("subreddit path", c)], {
									hk: "3E63i7"
								}));
							case re.n.Participated:
							default:
								return i.fbt._("{active user count}{subreddit path}", [i.fbt._param("active user count", r), i.fbt._param("subreddit path", c)], {
									hk: "inwJF"
								})
						}
					})(t, Object(c.e)(e => Object(se.b)(e, p.id))),
					E = Object(a.useCallback)(e => {
						(null == e ? void 0 : e.full_date) && (n && u(Object(R.updateLastReadAtTimestamp)({
							postId: p.id,
							lastReadAt: e.full_date
						})), u(Object(R.updateLastCommentCreatedAtTimestamp)({
							postId: p.id,
							lastCommentedAt: e.full_date
						})))
					}, [u, p.id, n]);
				return ee({
					postId: p.id,
					liveCommentsUrl: p.liveCommentsWebsocket,
					callback: E
				}), Object(a.useEffect)(() => {
					if (m || !h.current) return;
					const e = h.current;
					return Object(P.a)(e, (e, t) => {
						t && (u(Object(d.nb)(p.id)), b(!0))
					}), () => Object(P.b)(e)
				}, [m, p.id, u]), s.a.createElement(U.a, {
					to: g
				}, s.a.createElement("div", {
					className: Object(r.a)(ie.a.LiveChatListItem, {
						[ie.a.selected]: n
					}),
					ref: h
				}, s.a.createElement("div", {
					className: ie.a.SubredditIcon
				}, s.a.createElement(he, null, (null === (o = p.subreddit.styles) || void 0 === o ? void 0 : o.icon) ? s.a.createElement("img", {
					className: ie.a.Icon,
					src: null === (l = p.subreddit.styles) || void 0 === l ? void 0 : l.icon
				}) : s.a.createElement("i", {
					className: D()(`${ie.a.DefaultIcon} icon icon-community`, {
						[ie.a.DefaultIconDark]: O
					})
				})), s.a.createElement("span", {
					className: ie.a.LiveLabel
				}, i.fbt._("LIVE", null, {
					hk: "1N5y3d"
				}))), s.a.createElement("div", {
					className: ie.a.PostDetails
				}, s.a.createElement("h4", {
					className: ie.a.PostTitle
				}, p.title), s.a.createElement("p", {
					className: ie.a.PostMetadata
				}, v)), f && s.a.createElement("div", {
					className: ie.a.unreadCounterContainer
				}, s.a.createElement(B.b, {
					className: ie.a.unreadCounter,
					isEmptyCounter: !0
				}))))
			};
			var ge = e => {
					let {
						className: t
					} = e;
					const n = Object(a.useRef)(!0),
						[r, o] = Object(a.useState)([]),
						i = Object(c.e)(se.e),
						l = Object(c.e)(f.q),
						d = Object(a.useCallback)(A()(e => {
							n.current && o(e)
						}, 2e3), []);
					return Object(a.useEffect)(() => () => {
						n.current = !1
					}, []), Object(a.useEffect)(() => d(i), [i, d]), s.a.createElement("div", {
						className: t
					}, r.map(e => s.a.createElement(pe, {
						key: e.post.id,
						liveChatPostModel: e,
						isSelected: e.post.id === (null == l ? void 0 : l.post.id)
					})), !1)
				},
				fe = n("./src/chat/components/Scroller/index.tsx"),
				Oe = n("./node_modules/react-router-redux/es/index.js"),
				ve = n("./src/chat/constants/channels.ts"),
				Ee = n("./src/chat/icons/svgs/ChatNew/index.tsx"),
				je = n("./src/chat/selectors/platform.ts"),
				_e = n("./src/chat/components/Sidebar/CreateChannel/index.m.less"),
				Ce = n.n(_e);
			var Ie = () => {
					const e = Object(c.d)(),
						t = Object(c.e)(je.d) === ve.a.CREATE;
					return s.a.createElement("button", {
						className: Ce.a.Button,
						onClick: () => {
							const n = Object(H.getRedirectURL)(Object(H.channelUrl)(ve.a.CREATE));
							t ? e(Object(l.P)()) : (e(Object(Oe.b)(n)), e(Object(d.l)()))
						},
						title: i.fbt._("Start a new chat", null, {
							hk: "3C4ek3"
						}),
						tabIndex: 0
					}, s.a.createElement(Ee.a, {
						className: Ce.a.ChatNew,
						isFilled: t
					}))
				},
				ye = n("./src/chat/controls/ChannelsFilter/index.tsx"),
				xe = n("./src/chat/models/Channel/index.ts"),
				Se = n("./src/chat/selectors/channelsFilter.ts"),
				Ne = n("./src/chat/actions/settings/index.ts"),
				we = n("./src/lib/hooks/usePrevious.ts"),
				ke = n("./src/chat/components/ChatListItem/index.tsx");
			var Te = e => {
					let {
						className: t
					} = e;
					const n = Object(a.useRef)(!0),
						[r, o] = Object(a.useState)([]),
						i = Object(c.e)(f.g),
						l = Object(c.e)(f.q);
					Object(a.useEffect)(() => () => {
						n.current = !1
					}, []);
					const d = Object(a.useCallback)(A()(e => {
						n.current && o(e)
					}, 2e3), []);
					Object(a.useEffect)(() => d(i), [i, d]);
					const u = Object(c.d)(),
						h = Object(c.e)(x.a),
						m = Object(c.e)(f.o),
						b = Object(we.a)(m),
						p = Object(c.e)(e => b && Object(f.m)(e, b)),
						g = Object(a.useCallback)(() => {
							u(Object(Ne.d)())
						}, [u]);
					return Object(a.useEffect)(() => {
						b !== m && p === xe.b.Group && g()
					}, [b, m, p, g]), s.a.createElement("div", {
						className: t
					}, r.map(e => Object(se.f)(e) ? s.a.createElement(pe, {
						key: e.post.id,
						liveChatPostModel: e,
						isSelected: e.post.id === (null == l ? void 0 : l.post.id)
					}) : s.a.createElement(ke.a, {
						key: e.channelId,
						channelId: e.channelId,
						channelData: e.channelData,
						channelState: e.channelState,
						isSelected: e.channelId === m,
						isGroup: e.type === xe.b.Group,
						message: e.lastMessage,
						unread: !!e.unreadMessageCount,
						mentionCount: e.unreadMentionCount,
						currentUserId: h,
						unreadMessageCount: e.unreadMessageCount
					})), !1)
				},
				Me = n("./src/chat/components/Sidebar/ChannelsPanel/index.m.less"),
				Ae = n.n(Me);
			const Le = () => {
				const e = Object(c.e)(Se.a),
					t = Object(c.e)(O.s);
				switch (e) {
					case xe.g.Live:
						return s.a.createElement(ge, null);
					case xe.g.Messages:
						return s.a.createElement(T, null);
					case xe.g.Requests:
						return s.a.createElement(_, null);
					default:
						return t ? s.a.createElement(Te, null) : s.a.createElement(s.a.Fragment, null, s.a.createElement(_, null), s.a.createElement(T, null))
				}
			};
			var De = () => {
					const e = Object(c.d)(),
						t = Object(c.e)(f.c),
						n = Object(c.e)(f.J),
						a = Object(c.e)(v.e),
						r = Object(c.e)(v.b),
						o = Object(c.e)(O.f),
						d = Object(c.e)(O.s);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: Ae.a.Header
					}, s.a.createElement("span", {
						className: Ae.a.HeaderMessage
					}, i.fbt._("Chat", null, {
						hk: "2by6VV"
					})), !d && s.a.createElement(B.b, {
						count: a,
						isEmptyCounter: r && !a
					}), s.a.createElement("div", {
						className: Ae.a.CreateChannelWrapper
					}, s.a.createElement(Ie, null))), o && s.a.createElement(ye.a, null), s.a.createElement(fe.a, {
						loadMoreRows: () => {
							!t && n && e(Object(l.F)())
						},
						isLoadMoreRowsComplete: () => !!t || !n
					}, s.a.createElement("div", {
						className: Ae.a.Body
					}, s.a.createElement(Le, null))))
				},
				Ue = n("./src/higherOrderComponents/makeAsync.tsx"),
				Pe = n("./src/lib/loadWithRetries/index.ts");
			const Re = () => null;
			var Be = Object(Ue.a)({
				ErrorComponent: Re,
				getComponent: () => Object(Pe.a)(() => n.e("InvitedChannelsPanel").then(n.bind(null, "./src/chat/components/Sidebar/InvitedChannelsPanel/index.tsx"))).then(e => e.default),
				LoadingComponent: Re
			});
			const He = () => null;
			var Fe = Object(Ue.a)({
					ErrorComponent: He,
					getComponent: () => Object(Pe.a)(() => n.e("SettingsPanel").then(n.bind(null, "./src/chat/components/Sidebar/SettingsPanel/index.tsx"))).then(e => e.default),
					LoadingComponent: He
				}),
				Ge = n("./src/chat/models/Settings/index.ts"),
				Ve = n("./src/chat/selectors/app.ts"),
				We = n("./src/chat/selectors/sidebar.ts"),
				ze = n("./src/chat/components/Sidebar/index.m.less"),
				Ke = n.n(ze);
			const {
				CHANNELS: qe,
				INVITED_CHANNELS: Ze,
				SETTINGS: Qe
			} = g.a, Ye = e => {
				let {
					children: t,
					isSettings: n
				} = e;
				const a = Object(c.e)(We.b),
					o = Object(c.e)(Ve.h),
					i = Object(c.e)(Ve.d);
				return s.a.createElement("div", {
					className: Object(r.a)(Ke.a.Wrapper, {
						[Ke.a.hidden]: !a,
						[Ke.a.embed]: i,
						[Ke.a.isFullSize]: !n && o
					})
				}, t)
			}, Xe = s.a.memo((function() {
				const e = Object(c.d)(),
					t = Object(c.e)(We.a),
					n = Object(c.e)(je.d),
					r = Object(c.e)(f.n),
					i = Object(c.e)(f.q);
				Object(a.useEffect)(() => {
					n && r && Object(Ge.b)(n) ? e(Object(o.e)(g.a.SETTINGS)) : n || e(Object(o.e)(g.a.CHANNELS))
				}, []);
				return s.a.createElement(Ye, {
					isSettings: Boolean(t === Qe && r)
				}, (() => t === Qe && i ? s.a.createElement(Fe, {
					liveChatPost: i
				}) : t === Qe && r ? s.a.createElement(Fe, {
					channel: r
				}) : t === qe ? s.a.createElement(De, null) : t === Ze ? s.a.createElement(Be, null) : void 0)())
			}));
			t.b = Xe
		},
		"./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.m.less": function(e, t, n) {
			e.exports = {
				placeholderWrapper: "hqcDdVTJOpp-hF4RbvBSW",
				placeholderBody: "_3dFum9eW5nOaVI6VJ0M5Zs",
				placeholderAvatar: "_37RHvnrtqVT9M5__WmURXe",
				placeholderChannelContent: "_19Hsl7P85oEzmiSo1VutwH",
				placeholderMessageContent: "_1v9KmS8wDdLOHsiFvWdtIF",
				animation: "_1lS5iWxhcJqk-ShxyxC6tw",
				mediaPlaceholder: "_2JjaVUdKpjnOQIGa7ncTv6",
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
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return g
			}));
			var a, s, c, r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
			}(c || (c = {}));
			const u = e => {
					let {
						width: t
					} = e;
					return o.a.createElement("li", {
						className: Object(i.a)(d.a.placeholderWrapper, d.a[t])
					}, o.a.createElement("span", {
						className: Object(i.a)(d.a.placeholderMessageContent)
					}))
				},
				h = e => {
					let {
						width: t
					} = e;
					return o.a.createElement("li", {
						className: Object(i.a)(d.a.placeholderWrapper, d.a[t])
					}, o.a.createElement("span", {
						className: Object(i.a)(d.a.placeholderAvatar)
					}), o.a.createElement("span", {
						className: Object(i.a)(d.a.placeholderChannelContent)
					}))
				},
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
				b = () => o.a.createElement("ol", null, o.a.createElement(h, {
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
				p = e => {
					let {
						height: t,
						width: n
					} = e;
					return o.a.createElement("div", {
						className: d.a.mediaPlaceholder,
						style: {
							height: `${t}px`,
							width: `${n}px`
						}
					})
				},
				g = e => o.a.createElement("div", {
					className: d.a.GifSkeletonPlaceholderWrapper
				}, e === c.FIRST ? o.a.createElement(o.a.Fragment, null, o.a.createElement(p, {
					height: s.S
				}), o.a.createElement(p, {
					height: s.XS
				}), o.a.createElement(p, {
					height: s.M
				})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(p, {
					height: s.M
				}), o.a.createElement(p, {
					height: s.XS
				}), o.a.createElement(p, {
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
				c = n("./src/lib/lessComponent.tsx"),
				r = n("./src/chat/icons/Snoo/index.tsx"),
				o = n("./src/chat/components/Snoomoji/index.m.less"),
				i = n.n(o);
			const l = c.a.img("SnooImg", i.a);
			t.a = e => {
				const {
					className: t,
					iconName: n
				} = e, a = n && r.a[n] || r.a.smile;
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
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/CSSVariableProvider/index.tsx");
			const i = Object(r.a)(e => e.themes.current, e => e.themes.chatTheme, (e, t) => ({
				theme: {
					...e,
					...t
				}
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
				Content: "_3vOueepI8cZMh-qcANaCHK",
				content: "_3vOueepI8cZMh-qcANaCHK",
				pending: "_3-akkAdjwf5GRaaBFDvNJN",
				CloseButton: "_2uLWJD97sNCjLZ_jZEIkru",
				closeButton: "_2uLWJD97sNCjLZ_jZEIkru",
				info: "_1jF6SLDL9wUKFXNU-AhSIJ",
				error: "_8ITP3xa7S8y9rpIFxDx1f",
				InfoWrapper: "_3nb9rLnqnFkmptNekrR5Vh",
				infoWrapper: "_3nb9rLnqnFkmptNekrR5Vh",
				Icon: "_1mOHMnzTkh1-qPoTDReE7G",
				icon: "_1mOHMnzTkh1-qPoTDReE7G",
				isFullSize: "_1nkpBi7L6Kj4cXnLxjSTH1",
				Message: "fV1NUWcnbzwk-XqZd7NSN",
				message: "fV1NUWcnbzwk-XqZd7NSN",
				CloseButtonIcon: "_3kM3sBuo_f0ssLT7PMuVZi",
				closeButtonIcon: "_3kM3sBuo_f0ssLT7PMuVZi",
				ActionButton: "_3zWKfuODsYPYAvT26jv3d1",
				actionButton: "_3zWKfuODsYPYAvT26jv3d1",
				show: "_2jU5UTaYgAVVDUUDL87QS3",
				popIn: "_1QwKxwiSsHf8XNWosmxWuY"
			}
		},
		"./src/chat/components/TypingIndicator/index.m.less": function(e, t, n) {
			e.exports = {
				IndicatorText: "_9ILBgizV58pKhJFWM-mPy",
				indicatorText: "_9ILBgizV58pKhJFWM-mPy"
			}
		},
		"./src/chat/components/UserMetaInfo/index.m.less": function(e, t, n) {
			e.exports = {
				UserMetaInfo: "_2r0uJ2GzPuQtWArSB1SkRL",
				userMetaInfo: "_2r0uJ2GzPuQtWArSB1SkRL"
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
					return v
				})), n.d(t, "d", (function() {
					return E
				})), n.d(t, "a", (function() {
					return j
				})),
				function(e) {
					e.AddToGroup = "addToGroup", e.Block = "block", e.ChangeTheme = "changeTheme", e.CopyInviteLink = "copyInviteLink", e.Kick = "kick", e.Leave = "leave", e.LeaveGroup = "leaveGroup", e.ManageInviteLink = "manageInviteLink", e.MuteBadging = "muteBadging", e.MuteNotifs = "muteNotifs", e.Profile = "profile", e.Report = "report", e.RenameGroup = "renameGroup", e.UnmuteBadging = "unmuteBadging", e.UnmuteNotifs = "unmuteNotifs", e.ViewMembers = "members"
				}(a || (a = {}));
			const {
				AddToGroup: s,
				Block: c,
				Kick: r,
				Leave: o,
				LeaveGroup: i,
				ManageInviteLink: l,
				MuteBadging: d,
				MuteNotifs: u,
				Profile: h,
				RenameGroup: m,
				UnmuteBadging: b,
				UnmuteNotifs: p,
				ViewMembers: g,
				ChangeTheme: f
			} = a, O = [d, b, u, p], v = {
				directChannel: [h, f, c, ...O, o],
				groupChannel: [g, s, l, m, f, ...O, i],
				members: [c, r]
			}, E = {
				muteBadging: (e, t, n) => !(e === d && (n || t)),
				unmuteBadging: (e, t, n) => !(e === b && (n || !t)),
				muteNotifs: (e, t) => !(e === u && t),
				unmuteNotifs: (e, t) => !(e === p && !t),
				changeTheme: (e, t) => !(e === f && !t),
				linkSettings: (e, t) => !(e === l && !t)
			}, j = "dropdown-container"
		},
		"./src/chat/constants/keys.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "g", (function() {
				return s
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "b", (function() {
				return r
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
				c = "Escape",
				r = "ArrowLeft",
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
				isSmall: "_1WOAy0ckE7VM7eFstZoHLq",
				IconButton: "_1PhPhuhKHqFwivRAkg2DkH",
				iconButton: "_1PhPhuhKHqFwivRAkg2DkH",
				MessageIconButton: "_1C9dkDKKpS1LYs4gYdxFyL",
				messageIconButton: "_1C9dkDKKpS1LYs4gYdxFyL",
				CircleIconButtonWrapper: "gcekXJIUco-hfqQvC-vWJ",
				circleIconButtonWrapper: "gcekXJIUco-hfqQvC-vWJ",
				CircleIconButton: "_3A67l1M-XQVLGm-Avn2D7w",
				circleIconButton: "_3A67l1M-XQVLGm-Avn2D7w",
				isActionButton: "_3LVz-pr8V50isBEEh01eD",
				IconLabel: "_1dUQXPapkYKCQOd8UOmAYn",
				iconLabel: "_1dUQXPapkYKCQOd8UOmAYn"
			}
		},
		"./src/chat/controls/Button/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "b", (function() {
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
				viewBox: "0 0 16 16"
			}), c.a.createElement("path", {
				d: "M7.634 10.034L8.67 9H1.8a.8.8 0 1 1 0-1.6h6.869L7.634 6.366a.8.8 0 1 1 1.132-1.132l2.399 2.4a.8.8 0 0 1 0 1.132l-2.4 2.4a.798.798 0 0 1-1.13 0 .8.8 0 0 1 0-1.132zM12.2 1c1.323 0 2.4 1.077 2.4 2.4V13c0 1.323-1.077 2.4-2.4 2.4H6.6A2.403 2.403 0 0 1 4.2 13v-.8a.8.8 0 1 1 1.6 0v.8c0 .44.358.8.8.8h5.6a.8.8 0 0 0 .8-.8V3.4a.8.8 0 0 0-.8-.8H6.6a.8.8 0 0 0-.8.8v.8a.8.8 0 1 1-1.6 0v-.8C4.2 2.077 5.277 1 6.6 1h5.6z",
				fillRule: "evenodd"
			}));

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
					d: "M10.845 11.6c0 .22-.182.4-.407.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.225 0 .407.18.407.4v4.4zm-2.438 0c0 .22-.183.4-.407.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.224 0 .407.18.407.4v4.4zm-2.439 0c0 .22-.182.4-.406.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.224 0 .406.18.406.4v4.4zm6.426-6.8c.225 0 .406.18.406.4v8c0 .662-.547 1.2-1.219 1.2H4.42c-.672 0-1.219-.538-1.219-1.2v-8c0-.22.181-.4.407-.4h8.787zm0-2.4c.224 0 .406.18.406.4v.8c0 .22-.182.4-.407.4H3.606a.403.403 0 0 1-.406-.4v-.8c0-.22.182-.4.406-.4H6.01l.602-.666a.411.411 0 0 1 .304-.134h2.166c.116 0 .226.049.304.134l.602.666h2.404z",
					fillRule: "evenodd"
				})),
				g = n("./src/chat/controls/Button/index.m.less"),
				f = n.n(g),
				O = n("./src/chat/helpers/dom.ts");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const E = o.a.a("Button", f.a),
				j = o.a.button("Button", f.a),
				_ = o.a.button("MessageIconButton", f.a),
				C = e => {
					const t = Object(r.a)({
							[f.a.primaryStyles]: e.primary,
							[f.a.secondaryStyles]: e.secondary,
							[f.a.noBorder]: e.noBorder,
							[f.a.warningNoBorder]: e.warningNoBorder,
							[f.a.secondaryNoBorder]: e.secondaryNoBorder,
							[f.a.isSmall]: e.isSmall
						}, e.className),
						n = {
							height: e.height || void 0,
							width: e.width || void 0
						};
					return e.href ? c.a.createElement(E, {
						href: e.href,
						target: i.d.BLANK,
						rel: i.c,
						title: e.title,
						className: t,
						tabIndex: 0,
						style: n
					}, e.children) : c.a.createElement(j, {
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
				I = o.a.wrapped(C, "IconButton", f.a),
				y = e => c.a.createElement(_, v({}, e, {
					title: a.fbt._("Report message", null, {
						hk: "2XKeNq"
					})
				}), c.a.createElement(u, null)),
				x = e => c.a.createElement(_, v({}, e, {
					title: a.fbt._("Delete message", null, {
						hk: "Z4Zm0"
					})
				}), c.a.createElement(p, null)),
				S = e => c.a.createElement(_, v({}, e, {
					title: a.fbt._("Kick user", null, {
						hk: "5PnyH"
					})
				}), c.a.createElement(m, null)),
				N = e => {
					let {
						className: t,
						children: n,
						onClick: a,
						text: s
					} = e;
					return c.a.createElement("button", {
						className: Object(r.a)(f.a.CircleIconButtonWrapper, t, {
							[f.a.isActionButton]: !!a
						}),
						onClick: Object(O.b)(a)
					}, c.a.createElement("span", {
						className: f.a.CircleIconButton
					}, n), s && c.a.createElement("span", {
						className: f.a.IconLabel
					}, s))
				}
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
				c = n("./src/lib/lessComponent.tsx"),
				r = n("./src/chat/controls/ChannelNameInput/index.m.less"),
				o = n.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const l = c.a.input("Input", o.a),
				d = c.a.wrapped(e => s.a.createElement("label", {
					className: e.className
				}, s.a.createElement(l, {
					placeholder: e.placeholder,
					onChange: e.onChange,
					value: e.value,
					maxLength: e.maxLength
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
		"./src/chat/controls/ChannelsFilter/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/classNames/index.ts")),
				o = n("./src/chat/actions/channelsFilter/index.ts"),
				i = n("./src/chat/actions/tracking.ts"),
				l = n("./src/chat/controls/Button/index.tsx"),
				d = n("./src/chat/controls/Counter/index.tsx"),
				u = n("./src/chat/models/Channel/index.ts"),
				h = n("./src/chat/selectors/channelsFilter.ts"),
				m = n("./src/chat/selectors/unreadCounter.ts"),
				b = n("./src/chat/controls/ChannelsFilter/v1/index.m.less"),
				p = n.n(b);
			const {
				ALL: g,
				DirectsOnly: f,
				GroupsOnly: O
			} = u.c;
			var v = () => {
					const e = Object(c.d)(),
						t = Object(c.e)(h.a),
						n = Object(c.e)(m.c),
						b = Object(c.e)(m.d),
						v = Object(a.useCallback)(t => {
							e(Object(o.d)({
								filter: t
							})), e(Object(i.H)(Object(u.k)(t)))
						}, [e]);
					return s.a.createElement("div", {
						className: p.a.ChannelsFilter
					}, Object.values(u.c).map(e => s.a.createElement(l.a, {
						key: e,
						onClick: () => v(e),
						className: Object(r.a)(p.a.ChannelsFilterItem, {
							[p.a.selected]: t === e
						})
					}, u.e[e](), (e => t !== g && t !== e && e !== g && (e === f && n || e === O && b))(e) && s.a.createElement(d.b, {
						className: p.a.UnreadIndicator,
						isEmptyCounter: !0
					}))))
				},
				E = n("./src/higherOrderComponents/asTooltip.tsx"),
				j = n("./src/chat/actions/channel.ts"),
				_ = n("./src/chat/actions/tooltip.ts"),
				C = n("./src/chat/constants/page.ts"),
				I = n("./src/chat/controls/Dropdown/index.tsx");
			var y = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg",
					onClick: e.onClick
				}, s.a.createElement("g", null, s.a.createElement("polygon", {
					fill: "inherit",
					points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
				}))),
				x = n("./src/chat/selectors/tooltip.ts"),
				S = n("./src/chat/controls/ChannelsFilter/v2/index.m.less"),
				N = n.n(S);
			const w = Object(E.a)(I.a),
				k = [u.g.ALL, u.g.Live, u.g.Messages, u.g.Requests],
				T = e => {
					let {
						value: t,
						isCurrentlySelected: n,
						showChevronDownIcon: a,
						onChannelFilterSelection: c,
						showUnreadIndicator: o
					} = e;
					return s.a.createElement(l.a, {
						onClick: () => c(t),
						className: Object(r.a)(N.a.DropdownMenuItem, {
							[N.a.bold]: n
						})
					}, s.a.createElement("div", null, s.a.createElement("span", null, u.e[t]()), o && s.a.createElement(d.b, {
						className: N.a.UnreadIndicator,
						isEmptyCounter: !0
					})), a && s.a.createElement(y, {
						className: N.a.ChevronDown
					}))
				};
			var M = () => {
					const e = Object(c.d)(),
						t = Object(c.e)(h.a),
						n = Object(c.e)(m.a),
						r = Object(c.e)(Object(x.b)("ChatFilter--Container")),
						b = Object(a.useCallback)(() => e(Object(_.c)({
							tooltipId: "ChatFilter--Container"
						})), [e]),
						p = Object(a.useCallback)(t => {
							switch (t) {
								case u.g.Live:
									e(Object(j.T)());
									break;
								case u.g.Messages:
									e(Object(j.S)());
									break;
								case u.g.Requests:
									e(Object(j.R)());
									break;
								default:
									e(Object(j.P)())
							}
						}, [e]),
						g = Object(a.useCallback)(n => {
							e(Object(o.d)({
								filter: n
							})), e(Object(i.H)(Object(u.k)(n))), t !== n && (p(n), b())
						}, [e, t, b, p]),
						f = Object(a.useCallback)(e => e !== u.g.Requests || n > 0, [n]),
						O = Object(a.useCallback)(e => !![u.g.Requests, u.g.ALL].includes(e) && n > 0, [n]),
						v = Object(a.useMemo)(() => k.map((e, n) => f(e) && s.a.createElement(T, {
							key: e,
							value: e,
							isCurrentlySelected: t === e,
							showChevronDownIcon: 0 === n,
							onChannelFilterSelection: g,
							showUnreadIndicator: O(e)
						})).filter(Boolean), [g, t, f, O]);
					return s.a.createElement("div", {
						className: N.a.ChannelsFilter
					}, s.a.createElement(l.a, {
						key: "Selected",
						id: "ChatFilter--Container",
						onClick: b,
						className: N.a.ChannelsFilterItem
					}, s.a.createElement("span", null, t), O(t) && s.a.createElement(d.b, {
						className: N.a.UnreadIndicator,
						isEmptyCounter: !0
					}), s.a.createElement(y, {
						className: N.a.ChevronDownSelected
					}), s.a.createElement(w, {
						className: N.a.DropdownMenu,
						tooltipId: "ChatFilter--Container",
						container: document.getElementById(C.a),
						isOpen: r,
						targetPosition: ["left", "top"],
						excludeContainerPosition: !0,
						closeOnClickOutside: !0,
						isOverlayOff: !0
					}, s.a.createElement("div", {
						className: N.a.DropdownMenuItemContainer
					}, v))))
				},
				A = n("./src/chat/selectors/experiments.ts");
			t.a = () => {
				return Object(c.e)(A.s) ? s.a.createElement(M, null) : s.a.createElement(v, null)
			}
		},
		"./src/chat/controls/ChannelsFilter/v1/index.m.less": function(e, t, n) {
			e.exports = {
				ChannelsFilter: "_1w7nIFDl9F213fjhuI83p1",
				channelsFilter: "_1w7nIFDl9F213fjhuI83p1",
				ChannelsFilterItem: "M6xyVe2T7ylLubVm01qvA",
				channelsFilterItem: "M6xyVe2T7ylLubVm01qvA",
				selected: "_1lBf4eYjPcWffrxyUpeDMJ",
				UnreadIndicator: "_3Z4hSLT2wzj8ACIHKkruFY",
				unreadIndicator: "_3Z4hSLT2wzj8ACIHKkruFY"
			}
		},
		"./src/chat/controls/ChannelsFilter/v2/index.m.less": function(e, t, n) {
			e.exports = {
				ChannelsFilter: "rUHztYjHWKwaeGiYzlpuK",
				channelsFilter: "rUHztYjHWKwaeGiYzlpuK",
				ChannelsFilterItem: "_3ORL_UD0FJ0GgoqyYu9drq",
				channelsFilterItem: "_3ORL_UD0FJ0GgoqyYu9drq",
				UnreadIndicator: "_2yllYmTtv4HxKRs-Vq8QjW",
				unreadIndicator: "_2yllYmTtv4HxKRs-Vq8QjW",
				DropdownMenu: "_1uGPNR_HZyY4641ws-9HwS",
				dropdownMenu: "_1uGPNR_HZyY4641ws-9HwS",
				DropdownMenuItemContainer: "_1ow-3oIxphPFcVrECNMz-T",
				dropdownMenuItemContainer: "_1ow-3oIxphPFcVrECNMz-T",
				DropdownMenuItem: "TRpKsPNu872zUz4N-oAUw",
				dropdownMenuItem: "TRpKsPNu872zUz4N-oAUw",
				bold: "_3XneR1K36ZVMPb9SwhdwTz",
				ChevronDown: "dnrJviuno5pCHnvXKQTal",
				chevronDown: "dnrJviuno5pCHnvXKQTal",
				ChevronDownSelected: "_2464wthxD_L1CaWQDlFS_W",
				chevronDownSelected: "_2464wthxD_L1CaWQDlFS_W"
			}
		},
		"./src/chat/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckInput: "_1_de1ouiEaWxe0lu0R54Zf",
				checkInput: "_1_de1ouiEaWxe0lu0R54Zf",
				Content: "_1RHO7h5PWuKEmC8QD2KnOB",
				content: "_1RHO7h5PWuKEmC8QD2KnOB",
				HiddenInput: "_3Q1_Do5LHdBSUlaIowvrfb",
				hiddenInput: "_3Q1_Do5LHdBSUlaIowvrfb",
				Checked: "_2rAAUOr_BEoWHcPUCIHPl_",
				checked: "_2rAAUOr_BEoWHcPUCIHPl_",
				Unchecked: "lKC5fIFqmLCg9yYtpR5rw",
				unchecked: "lKC5fIFqmLCg9yYtpR5rw",
				Wrapper: "_1SMteSSKECXjIaZTOLZ2z-",
				wrapper: "_1SMteSSKECXjIaZTOLZ2z-",
				Control: "aKXv6qpFIjz-_IZOZsYLz",
				control: "aKXv6qpFIjz-_IZOZsYLz",
				TextCheckbox: "_3Jh1kevH8qvlqGTvpXRW3v",
				textCheckbox: "_3Jh1kevH8qvlqGTvpXRW3v"
			}
		},
		"./src/chat/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				c = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.tsx"),
				l = n("./src/chat/icons/svgs/Checkbox/unchecked.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const h = o.a.wrapped(e => c.a.createElement("circle", {
				className: e.className,
				cy: "10",
				cx: "10",
				r: "8"
			}), "StyledCircle", d.a);
			var m = e => c.a.createElement(i.a, u({}, e, {
				viewBox: "0 0 20 20"
			}), c.a.createElement("g", null, c.a.createElement(h, null)));

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var p = e => c.a.createElement(i.a, b({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? c.a.createElement("g", null, c.a.createElement("path", {
					d: "M10,0.4c-5.3,0-9.6,4.3-9.6,9.6s4.3,9.6,9.6,9.6s9.6-4.3,9.6-9.6S15.3,0.4,10,0.4C10,0.4,10,0.4,10,0.4z M8.8,13.1H8.5H8.2 L8,12.9l-1.9-1.9l0.9-0.9l1.6,1.6l4.6-4.6l0.9,0.9L8.8,13.1z"
				})) : c.a.createElement("g", null, c.a.createElement("path", {
					d: "M10,19.6c-5.3,0-9.6-4.3-9.6-9.6S4.7,0.4,10,0.4s9.6,4.3,9.6,9.6S15.3,19.6,10,19.6C10,19.6,10,19.6,10,19.6z M10,1.6 c-4.6,0-8.4,3.8-8.4,8.4s3.8,8.4,8.4,8.4s8.4-3.8,8.4-8.4c0,0,0,0,0,0C18.4,5.4,14.6,1.6,10,1.6z"
				}), c.a.createElement("polygon", {
					points: "8.5,13.1 8.2,13.1 8,12.9 6.1,10.9 6.9,10.1 8.5,11.6 13.1,7.1 13.9,7.9 8.8,13.1 \t"
				}))),
				g = n("./src/chat/controls/Checkbox/index.m.less"),
				f = n.n(g);
			t.a = e => c.a.createElement("label", {
				className: Object(r.a)(f.a.CheckInput, e.className, {
					[f.a.checked]: e.checked
				}),
				style: {
					height: e.height || void 0,
					width: e.width || void 0
				}
			}, c.a.createElement("span", {
				className: f.a.Wrapper
			}, e.children && !e.rightPosition && c.a.createElement("span", {
				className: f.a.Content
			}, e.children), c.a.createElement("span", {
				className: f.a.Control
			}, c.a.createElement("input", {
				className: f.a.HiddenInput,
				tabIndex: 0,
				type: e.type || "checkbox",
				checked: e.checked,
				disabled: e.disabled,
				name: e.name,
				value: e.value,
				onChange: e.onChange,
				id: e.id
			}), e.isTextCheckbox ? e.checked ? c.a.createElement("span", {
				className: f.a.TextCheckbox
			}, a.fbt._("Remove", null, {
				hk: "1jARrY"
			})) : c.a.createElement("span", {
				className: f.a.TextCheckbox
			}, a.fbt._("Add", null, {
				hk: "1BBeP5"
			})) : null, e.isTextCheckbox ? null : e.checked ? c.a.createElement(p, {
				isFilled: !0
			}) : c.a.createElement(m, null)), e.children && e.rightPosition && c.a.createElement("span", {
				className: f.a.Content
			}, e.children)))
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
				return i
			})), n.d(t, "b", (function() {
				return l
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/chat/controls/Counter/index.m.less"),
				o = n.n(r);
			const i = e => {
					let {
						count: t
					} = e;
					return t ? s.a.createElement("span", {
						className: Object(c.a)(o.a.Counter, {
							[o.a.count]: t < 0
						})
					}, t) : null
				},
				l = e => {
					let {
						count: t = 0,
						isEmptyCounter: n,
						className: a
					} = e;
					return t || n ? s.a.createElement("span", {
						className: Object(c.a)(o.a.UnreadCounter, a, {
							[o.a.isEmpty]: n
						})
					}, t > 0 && (t < 100 ? t : "99+")) : null
				}
		},
		"./src/chat/controls/Dropdown/Row.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "qKe4d1r36F9OOtq-XhVf9",
				iconWrapper: "qKe4d1r36F9OOtq-XhVf9",
				Text: "_1QLRzzdhJM_LEu2w38yEOx",
				text: "_1QLRzzdhJM_LEu2w38yEOx",
				Component: "tN3ccVHcnPD-hU9Iy1MAV",
				component: "tN3ccVHcnPD-hU9Iy1MAV",
				StepperArrow: "_2mStmXGyIAbdk2gCPdils1",
				stepperArrow: "_2mStmXGyIAbdk2gCPdils1",
				selected: "_1yVvFtI4g78_7OjOGhP26K"
			}
		},
		"./src/chat/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/chat/controls/Svg/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var i = e => s.a.createElement(r.a, o({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? s.a.createElement("path", {
					d: "M19.207,9.293l-9-9L8.793,1.707,16.086,9H1v2H16.086L8.793,18.293l1.414,1.414,9-9A1,1,0,0,0,19.207,9.293Z"
				}) : s.a.createElement("path", {
					d: "M19.442,9.558l-9-9-.884.884,7.933,7.933H1v1.25H17.491L9.558,18.558l.884.884,9-9A.625.625,0,0,0,19.442,9.558Z"
				})),
				l = n("./src/chat/controls/Dropdown/Row.m.less"),
				d = n.n(l);
			t.a = e => s.a.createElement("button", {
				id: e.id,
				className: Object(c.a)(d.a.Component, e.className, {
					[d.a.selected]: e.isSelected
				}),
				onClick: e.onClick ? e.onClick : () => {},
				tabIndex: e.tabIndex || 0
			}, e.children && s.a.createElement("div", {
				className: d.a.IconWrapper
			}, e.children), s.a.createElement("span", {
				className: d.a.Text
			}, e.displayText), e.isStepper && s.a.createElement("span", {
				className: d.a.StepperArrow
			}, s.a.createElement(i, null)))
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
			const u = Object(c.b)(void 0, e => ({
				closeTooltip: () => e(Object(o.d)())
			}))(d);
			t.a = r.a.wrapped(u, "Component", l.a)
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
				c = n("./src/lib/lessComponent.tsx"),
				r = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				o = n("./src/chat/controls/Gif/index.m.less"),
				i = n.n(o);
			const l = 200,
				d = c.a.img("Image", i.a),
				u = c.a.wrapped(e => {
					let {
						className: t,
						source: n,
						onClick: c,
						imageScale: o,
						isPreview: i,
						height: u = l,
						title: h = ""
					} = e;
					const [m, b] = Object(a.useState)(!1);
					return Object(a.useEffect)(() => {
						let e = !0;
						return new Promise(e => {
							const t = new Image;
							t.onload = () => e(), t.src = n
						}).then(() => e && b(!0)), () => {
							e = !1
						}
					}), s.a.createElement("div", {
						className: t,
						style: {
							height: m || i ? "auto" : `${l}px`,
							width: m || i ? "auto" : "250px",
							maxHeight: `${l}px`
						}
					}, m ? s.a.createElement(d, {
						onClick: () => c && c(),
						src: n,
						title: h,
						style: {
							height: i ? `${+u*(o||.7)}px` : "auto",
							maxHeight: `${l}px`
						}
					}) : s.a.createElement(r.c, {
						height: i ? +u * (o || .7) : l
					}))
				}, "Gif", i.a);
			t.a = u
		},
		"./src/chat/controls/MediaObject/index.m.less": function(e, t, n) {
			e.exports = {
				MediaObject: "Q7TqGkVgPLQj2DDlAsN1q",
				mediaObject: "Q7TqGkVgPLQj2DDlAsN1q"
			}
		},
		"./src/chat/controls/Overlay/index.m.less": function(e, t, n) {
			e.exports = {
				OverlayWrapper: "OMYuZfmLVrNcDB_vOFVbV",
				overlayWrapper: "OMYuZfmLVrNcDB_vOFVbV",
				settings: "_16IHHTQvuk8x9ftVH3jC9T",
				Overlay: "_249eIqU0mX7GU1qrI9k3F3",
				overlay: "_249eIqU0mX7GU1qrI9k3F3",
				Content: "_2JIrSX2iUneCfhMGppuv22",
				content: "_2JIrSX2iUneCfhMGppuv22",
				isFullSize: "EMDomkYEjP7w6g0rn8KNX"
			}
		},
		"./src/chat/controls/Overlay/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
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
						h = Object(c.e)(i.h),
						m = s.a.createElement(s.a.Fragment, null, n, e.innerContent ? a : s.a.createElement(u, {
							className: Object(r.a)(d.a.Content, {
								[d.a.isFullSize]: h
							})
						}, a), o);
					return s.a.createElement("div", {
						className: Object(r.a)(d.a.OverlayWrapper, {
							[d.a.settings]: e.isSettings
						})
					}, s.a.createElement(t, l, m))
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
				c = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				i = n("./src/config.ts"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/chat/controls/Button/index.tsx"),
				u = n("./src/chat/helpers/dom.ts"),
				h = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				m = n.n(h);
			const b = Object(r.b)(void 0, e => ({
				onSubmit: () => {},
				onCancel: Object(u.b)(() => e(Object(o.a)()))
			}))(e => c.a.createElement("div", {
				className: Object(l.a)({
					[m.a.primary]: e.primaryButtonOnly
				}, m.a.OverlayControlBar, e.className)
			}, e.children && c.a.createElement("span", {
				className: m.a.HeaderText
			}, e.children), c.a.createElement("div", {
				className: m.a.ButtonsWrapper
			}, e.primaryButtonBlock && c.a.createElement(d.a, {
				onClick: e.primaryButtonBlockAction || e.onCancel,
				className: Object(l.a)(m.a.Button, m.a.NoBorderPrimaryButton),
				secondary: !0,
				noBorder: !0
			}, e.primaryButtonBlockText || a.fbt._("Block", null, {
				hk: "4CA4VX"
			})), !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? c.a.createElement(d.a, {
				className: m.a.Button,
				href: `${i.a.redditHelpUrl}/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting`,
				secondary: !0
			}, a.fbt._("Other Options", null, {
				hk: "1RadlV"
			})) : c.a.createElement(d.a, {
				className: m.a.Button,
				onClick: e.secondaryButtonAction || e.onCancel,
				primary: !!e.secondaryButtonOnly,
				secondary: !e.secondaryButtonOnly
			}, e.secondaryButtonText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			}))), !e.secondaryButtonOnly && c.a.createElement(d.a, {
				className: m.a.Button,
				type: "submit",
				primary: !0,
				onClick: e.primaryButtonAction || e.onSubmit,
				disabled: e.primaryButtonDisabled
			}, e.primaryButtonText || a.fbt._("Submit", null, {
				hk: "4aU3dh"
			})))));
			b.displayName = "OverlayControlBar", t.a = b
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
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/TextButton.m.less"),
				i = n.n(o);
			const l = r.a.wrapped(e => s.a.createElement("button", {
				onClick: e.onClick,
				className: Object(c.a)(e.className, {
					[i.a.hidden]: e.hidden
				})
			}, e.children), "TextButton", i.a);
			t.a = l
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
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Title/index.m.less"),
				i = n.n(o);
			const l = r.a.wrapped(e => {
				let {
					bold: t,
					children: n,
					className: a
				} = e;
				return s.a.createElement("h4", {
					className: Object(c.a)({
						[i.a.bold]: t
					}, a)
				}, n)
			}, "Title", i.a)
		},
		"./src/chat/controls/TooltipHooked/TooltipConfig.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return s
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
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
				c = () => ({
					placement: "top",
					...a,
					modifiers: [...a.modifiers, {
						name: "flip",
						options: {
							fallbackPlacements: ["left"]
						}
					}]
				}),
				r = e => ({
					placement: e ? "left" : "right",
					...a
				}),
				o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
					return {
						placement: "bottom-start",
						...a,
						modifiers: [...a.modifiers, {
							name: "preventOverflow",
							options: {
								padding: {
									right: e
								}
							}
						}]
					}
				},
				i = () => ({
					placement: "top-start",
					...a,
					modifiers: [...a.modifiers, {
						name: "offset",
						options: {
							offset: [0, 15]
						}
					}]
				}),
				l = () => ({
					placement: "bottom-end",
					...a,
					modifiers: [...a.modifiers, {
						name: "offset",
						options: {
							offset: [10, 10]
						}
					}]
				}),
				d = e => ({
					placement: e ? "top-start" : "top-end",
					...a,
					modifiers: [...a.modifiers, {
						name: "flip",
						options: e ? {
							fallbackPlacements: ["top-start", "top-end", "bottom-start", "bottom-end"]
						} : {
							fallbackPlacements: ["top-end", "top-start", "bottom-end", "bottom-start"]
						}
					}]
				}),
				u = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 12;
					return {
						placement: "bottom-start",
						...a,
						modifiers: [...a.modifiers, {
							name: "preventOverflow",
							options: {
								padding: {
									right: e
								}
							}
						}, {
							name: "offset",
							options: {
								offset: [0, 0]
							}
						}, {
							name: "flip",
							options: {
								fallbackPlacements: ["bottom-start", "top-start"]
							}
						}]
					}
				}
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
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/chat/controls/TooltipHooked/TooltipHooked.m.less"),
				o = n.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.default = s.a.memo((function(e) {
				let {
					visible: t,
					...n
				} = e;
				const [r, l] = Object(a.useState)(t);
				return Object(a.useEffect)(() => {
					let e = window.setTimeout(() => {
						e = void 0, l(t)
					}, 0);
					return () => {
						e && window.clearTimeout(e), l(!1)
					}
				}, [t]), t ? n.styled ? s.a.createElement("div", i({
					className: Object(c.a)(o.a.tooltip, {
						[o.a.visible]: r || n.isInstant
					})
				}, n.popperProps, {
					onMouseEnter: () => n.isCloseOnHover && n.hide()
				}), n.children, r && !n.noArrow && s.a.createElement("div", i({
					className: o.a.arrow
				}, n.arrowProps))) : s.a.createElement("div", {
					...n.popperProps,
					style: {
						...n.popperProps.style,
						zIndex: 1
					}
				}, n.children) : null
			}))
		},
		"./src/chat/controls/TooltipHooked/loader.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const c = () => null;
			t.a = Object(a.a)({
				ErrorComponent: c,
				getComponent: () => Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/chat/controls/TooltipHooked/TooltipHooked.tsx"))).then(e => e.default),
				LoadingComponent: c
			})
		},
		"./src/chat/customMiddleware/iframeDispatcher.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/once.js"),
				s = n.n(a),
				c = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/postParentMessage/index.ts"),
				l = n("./src/chat/actions/channel.ts"),
				d = n("./src/chat/actions/container.ts"),
				u = n("./src/chat/actions/message/unreadCount.ts"),
				h = n("./src/chat/constants/container.ts"),
				m = n("./src/chat/customMiddleware/noop.ts");
			var b = n("./src/chat/helpers/urls/index.ts"),
				p = n("./src/chat/tracking/sendEvent.ts"),
				g = n("./src/telemetry/models/Event.ts"),
				f = n("./src/chat/tracking/fields/chat.ts"),
				O = n("./src/chat/tracking/fields/common.ts");
			var v;
			! function(e) {
				e.Navigate = "navigate.chat", e.Websocket = "websocket.chat", e.Expand = "expand.chat", e.UnreadCount = "unreadCount.chat"
			}(v || (v = {}));
			const E = e => t => {
					const n = (e => {
						try {
							return "object" == typeof e.data ? e.data : JSON.parse(e.data)
						} catch (t) {
							return
						}
					})(t);
					if (n) switch (n.type) {
						case v.Navigate: {
							const t = Object(r.parse)(n.data.href).pathname || b.rootUrl,
								a = Object(b.getRedirectURL)(t);
							e.dispatch(Object(c.b)(a)), e.dispatch(Object(d.sizeChanged)(h.a.EMBED));
							break
						}
						case v.Websocket:
							e.dispatch(Object(u.c)());
							break;
						case v.Expand: {
							const t = e.getState();
							e.dispatch(Object(d.sizeChanged)(h.a.EMBED));
							const a = t.platform.currentPage;
							a && a.meta && a.meta.name === o.Sb.CHAT_MINIMIZE && e.dispatch(Object(l.P)());
							const {
								action: s,
								noun: c,
								source: r
							} = n.data.telemetry;
							((e, t, n, a) => {
								Object(p.a)({
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
							})(t, c, r, s);
							break
						}
					}
				},
				j = s()(e => {
					window.addEventListener("message", E(e)), window.navigator.serviceWorker.addEventListener("message", E(e))
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
							type: v.UnreadCount,
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
		"./src/chat/customMiddleware/loggedOutPreferencesSync.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/pick.js"),
				s = n.n(a),
				c = n("./src/chat/actions/theme.ts"),
				r = n("./node_modules/Base64/base64.js"),
				o = n("./node_modules/icepick/icepick.js"),
				i = n("./node_modules/js-cookie/dist/js.cookie.js"),
				l = n.n(i),
				d = n("./src/lib/permanentCookieOptions.ts");
			const u = "USER";

			function h(e) {
				const t = function() {
						const e = l.a.get(u);
						if (e) try {
							return JSON.parse(Object(r.atob)(e))
						} catch (t) {
							0
						}
					}(),
					n = Object(o.merge)(t || {}, e),
					a = new Date;
				a.setFullYear(a.getFullYear() + 2), l.a.set(u, btoa(JSON.stringify(n)), Object(d.a)(2))
			}
			const m = new Set([c.GLOBAL_THEME_CHANGED]);
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
				f = n("./src/chat/selectors/experiments.ts"),
				O = n("./src/chat/selectors/inviteLink.ts"),
				v = n("./src/chat/selectors/platform.ts"),
				E = n("./src/chat/selectors/sendbird.ts");
			const j = (e, t) => {
				const n = t && t.type === o.SIZE_CHANGED ? t.payload : e.container.size,
					a = n === b.a.MINIMIZED || n === b.a.HIDDEN,
					s = t && t.type === l.a ? t.payload && t.payload.routeMatch && t.payload.routeMatch.route.meta.name === c.Sb.CHAT_MINIMIZE : e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name === c.Sb.CHAT_MINIMIZE;
				return !a && s
			};
			t.a = e => {
				if ("undefined" == typeof window) return g.a;
				let t;
				const n = () => {
					const n = e.getState();
					if (Object(O.e)(n)) return;
					const {
						session: a
					} = n.sendbird;
					a.expires && a.active ? (n => {
						const a = new Date,
							s = new Date(n.expires || 0),
							c = Math.floor(.9 * (s.getTime() - a.getTime()));
						t = setTimeout(() => {
							e.dispatch(Object(d.k)())
						}, c)
					})(a) : s()(() => e.dispatch(Object(d.k)()))
				};
				let a;
				Object(v.a)(e.getState()) === c.Sb.CHAT_MINIMIZE ? s()(async () => {
					j(e.getState()) ? n() : (await e.dispatch(Object(d.k)(!1)), e.getState().sendbird.session.token && await e.dispatch(Object(i.c)()))
				}) : n();
				return i => g => {
					const v = e.getState(),
						_ = Object(f.h)(v),
						C = Object(O.e)(v),
						I = Object(E.b)(v) === p.b.Closed,
						y = Object(E.g)(v);
					switch (g.type) {
						case o.SIZE_CHANGED: {
							if (!g.payload) break;
							const t = g.payload !== b.a.MINIMIZED && g.payload !== b.a.HIDDEN;
							t && (clearTimeout(a), a = null), I && t && !y && n(), !y || g.payload !== b.a.HIDDEN && g.payload !== b.a.MINIMIZED || (a = setTimeout(() => {
								e.dispatch(Object(h.f)())
							}, 10 * c.pb));
							break
						}
						case l.a: {
							const t = j(v, g);
							I && t ? n() : t && e.dispatch(Object(r.P)());
							break
						}
						case d.g:
							if (C && _) break;
							if (!g.payload) break;
							if (!g.payload.active) break;
							s()(async () => {
								if (await e.dispatch(Object(u.f)()), g.payload && g.payload.token) {
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
		"./src/chat/customMiddleware/stateObserver/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/chat/actions/liveChat/index.ts"),
				s = n("./src/chat/selectors/liveChat/index.ts");

			function c(e) {
				return function(e) {
					return Object.values(e.channels.liveChat.models).some(t => void 0 === Object(s.b)(e, t.post.id))
				}(e)
			}

			function r(e, t, n) {
				(function(e, t) {
					return e.channels.liveChat.models !== t.channels.liveChat.models
				})(e, t) && function(e, t) {
					c(e) && t(a.fetchActiveUsersInLiveChats)
				}(t, n)
			}
			t.a = e => t => n => {
				const a = e.getState(),
					s = t(n);
				return r(a, e.getState(), e.dispatch), s
			}
		},
		"./src/chat/customMiddleware/title.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/chat/actions/message/unreadCount.ts"),
				s = n("./src/chat/customMiddleware/noop.ts"),
				c = n("./src/chat/selectors/app.ts"),
				r = n("./src/lib/safeBadgeUpdate.ts");
			const o = /^\([\d*]+?\)\s+/;
			t.a = e => {
				return "undefined" != typeof window ? t => n => {
					const s = t(n),
						i = e.getState();
					if (!Object(c.g)(i) && n.type === a.a) {
						const {
							unreadMessages: e,
							hasNewMessages: t
						} = n.payload;
						((e, t) => {
							var n, a;
							const s = null === (a = null === (n = null === window || void 0 === window ? void 0 : window.document) || void 0 === n ? void 0 : n.title) || void 0 === a ? void 0 : a.replace(o, "");
							e > 0 ? (Object(r.a)(e), window.document.title = `(${e}) ${s}`) : !e && t ? (Object(r.a)(1), window.document.title = `(*) ${s}`) : (Object(r.a)(0), window.document.title = s)
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
			const l = 5 * c.pb;
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
					Object(i.b)(`Token Refresher Error: ${h}`)
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
				d = n("./src/chat/constants/channels.ts"),
				u = n("./src/chat/selectors/channels.ts"),
				h = n("./src/chat/selectors/platform.ts"),
				m = n("./src/chat/tracking/sendEvent.ts"),
				b = n("./src/telemetry/models/Event.ts"),
				p = n("./src/telemetry/models/Timer.ts"),
				g = n("./src/chat/tracking/fields/chat.ts"),
				f = n("./src/chat/tracking/fields/common.ts");
			const O = e => ({
					type: e
				}),
				v = e => ({
					millis: e
				});
			var E = n("./src/chat/tracking/events/chatView.ts"),
				j = n("./src/chat/tracking/events/contactsList.ts"),
				_ = n("./src/chat/tracking/events/invitationInbox.ts"),
				C = n("./src/chat/tracking/events/messagesInbox.ts");
			const I = s()((e, t) => ((e, t) => {
					Object(m.a)({
						noun: "inbox_new",
						source: b.b.ChatPerformance,
						action: b.a.Load,
						chat: {
							...Object(g.o)(e),
							...Object(g.q)(e)
						},
						timer: {
							...O(p.TimerType.ChatLoadInboxNew),
							...v(t)
						},
						...Object(f.a)(e)
					})
				})(e, (e => Date.now() - e)(t))),
				y = s()(e => Object(h.e)(e) && x(e)),
				x = e => {
					Object(C.d)(e)
				},
				S = Object(c.c)((e, t, n) => {
					Object(u.P)(e) ? ((e, t) => {
						Object(m.a)({
							noun: "channel_cached",
							source: b.b.ChatPerformance,
							action: b.a.Load,
							chat: {
								...Object(g.f)(e)
							},
							timer: {
								...O(p.TimerType.ChatLoadChannelCached),
								...v(t)
							},
							...Object(f.a)(e)
						})
					})(t, n) : ((e, t) => {
						Object(m.a)({
							noun: "channel_new",
							source: b.b.ChatPerformance,
							action: b.a.Load,
							chat: {
								...Object(g.f)(e)
							},
							timer: {
								...O(p.TimerType.ChatLoadChannelNew),
								...v(t)
							},
							...Object(f.a)(e)
						})
					})(t, n)
				}),
				N = e => {
					Object(h.d)(e) === d.a.CREATE && Object(j.g)(e)
				},
				w = e => {
					Object(h.d)(e) === d.a.VIEW_JOIN && (e => {
						Object(m.a)({
							noun: "preview",
							source: b.b.ChatPreview,
							action: b.a.View,
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
					c = t.getState();
				switch (a.type) {
					case i.a:
						I(c, e), N(c);
						break;
					case r.q:
						S(c, !0);
						break;
					case r.t:
						N(c), y(c);
						break;
					case r.r:
						I(c, e), (e => {
							Object(h.d)(e) === d.a.VIEW_INVITE && Object(_.k)(e)
						})(c), (e => Object(h.g)(e) && Object(E.r)(e))(c), S(c), w(c);
						break;
					case r.s:
						(e => !!Object(h.f)(e) && Object(E.d)(e))(c);
						break;
					case o.l:
					case l.c:
						I(c, e)
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
				Object(o.d)(l, e, 5 * i.pb)
			}, 5 * i.Xb, {
				leading: !1,
				trailing: !0
			});
			let h;
			const m = () => {
				h && clearInterval(h), h = setInterval(() => {
					void 0 === Object(o.b)(l) && Object(c.c)()
				}, 5 * i.pb)
			};
			t.a = e => {
				if ("undefined" == typeof window) return r.a;
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
				l = Object(o.c)(i.r.CHAT, i.A.CHAT_UNREAD_MESSAGE_COUNT_KEY, s), u(a.unreadMessages), m();
				try {
					window.parent.addEventListener("focus", m)
				} catch (h) {}
				return e => t => {
					const n = e(t);
					switch (t.type) {
						case c.a: {
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
				endpoint: `${e.apiUrl}/api/v1/me`,
				method: a.ob.GET,
				data: {
					raw_json: 1
				}
			}), r = async (e, t) => Object(s.a)(e, {
				data: {
					account_id: t,
					raw_json: 1
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: a.ob.POST
			}), o = async (e, t) => Object(s.a)(e, {
				endpoint: `${e.apiUrl}/user/${t}/about`,
				method: a.ob.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/chat/endpoints/messages/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var a = n("./src/redditGQL/operations/CreateChatMessage.json"),
				s = n("./src/redditGQL/operations/ReportChatMessage.json"),
				c = n("./src/lib/makeGqlRequest/index.ts");
			const r = (e, t) => Object(c.a)(e, {
					...s,
					variables: t
				}),
				o = e => {
					var t, n, a, s, c, r;
					return Boolean(null === (a = null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.createChatMessage) || void 0 === n ? void 0 : n.message) || void 0 === a ? void 0 : a.messageId) && Boolean(null === (r = null === (c = null === (s = null == e ? void 0 : e.data) || void 0 === s ? void 0 : s.createChatMessage) || void 0 === c ? void 0 : c.message) || void 0 === r ? void 0 : r.messageRedditId)
				},
				i = (e, t) => Object(c.a)(e, {
					...a,
					variables: t
				})
		},
		"./src/chat/endpoints/reactions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			}));
			var a = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/SearchChatMessageReactionIcons.json"),
				c = n("./src/redditGQL/operations/UpdateChatMessageReaction.json");
			const r = 100,
				o = e => {
					var t;
					return Boolean(e && e.data && (null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.searchChatMessageReactionIcons))
				},
				i = e => {
					var t;
					return Boolean(e && e.data && (null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.errors))
				},
				l = (e, t) => Object(a.a)(e, {
					...c,
					variables: {
						input: t
					}
				}),
				d = (e, t) => Object(a.a)(e, {
					...s,
					variables: t
				})
		},
		"./src/chat/endpoints/users/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/ExperimentVariantsShort.json"),
				o = n("./src/redditGQL/operations/RedditorsInfoByIds.json");
			const i = e => {
					var t;
					return Boolean(null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.redditorsInfoByIds)
				},
				l = e => Object(s.a)(e, {
					method: a.ob.GET,
					endpoint: `${e.apiUrl}/prefs/blocked.json`
				}),
				d = e => Object(c.a)(e, {
					...r
				}),
				u = (e, t) => Object(c.a)(e, {
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
			var a = n("./src/lib/linkMatchers/index.ts");
			const s = e => !!a.f.test(e),
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
						a.push(e.substring(s, c)), a.push(n(i, o, d, l, `link-${c}-${o}`)), s = r
					}), a.push(e.substring(s, e.length)), a
				},
				r = /^(((file|(blob:)?https?|ftps?):)?\/|mailto:)/i,
				o = e => {
					if (void 0 === e) return e;
					return e.match(r) ? e : "#"
				};
			t.a = (e, t, n) => {
				const s = Object(a.c)(e, t);
				return s && s.length ? c(e, s, n) : e
			}
		},
		"./src/chat/helpers/time/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const c = (new Date).setHours(0, 0, 0, 0),
				r = new Intl.DateTimeFormat(void 0, {
					hour: "numeric",
					minute: "2-digit"
				}).format,
				o = e => {
					const t = c - s.E,
						n = new Date(c).setDate(1),
						r = new Date(n).setMonth(0),
						o = new Date(e);
					return e >= c ? a.fbt._("Today", null, {
						hk: "1W0rfJ"
					}) : e >= t ? a.fbt._("Yesterday", null, {
						hk: "2GVGk3"
					}) : e >= n ? l(o) : e >= r ? l(o) : i(o)
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
				d = (new Intl.DateTimeFormat(void 0, {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric"
				}).format, e => e.toISOString())
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
				c = n("./src/lib/lessComponent.tsx"),
				r = n("./src/chat/controls/Svg/index.tsx"),
				o = n("./src/chat/icons/Nsfw/index.m.less"),
				i = n.n(o);
			const l = e => s.a.createElement(r.a, {
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
				d = c.a.wrapped(l, "NSFWIcon", i.a),
				u = c.a.wrapped(l, "SmallNSFWIcon", i.a)
		},
		"./src/chat/icons/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			}));
			var a = n("./src/config.ts");
			const s = ["snoo_heart_eyes_pride", "snoo_give_upvote_pride", "upvote_pride", "snoo", "snoo_simple_smile", "snoo_smile", "snoo_joy", "snoo_tongue", "snoo_wink", "snoo_sad", "snoo_biblethump", "snoo_angry", "snoo_disapproval", "snoo_trollface", "snoo_dealwithit", "snoo_facepalm", "snoo_shrug", "snoo_scream", "snoo_thoughtful", "snoo_surprised", "snoo_hearteyes", "snoo_hug", "snoo_feelsbadman", "snoo_feelsgoodman", "snoo_putback", "snoo_tableflip", "upvote", "downvote", "karma", "cake", "redditgold", "illuminati", "kappa", "sloth", "cat_blep", "pupper", "partyparrot", "orly", "hamster", "doge"],
				c = {
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
			t.a = c
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
				voicesAvatar: "_3WnOjkciK_EV9-9Ak459rx",
				isFlipped: "_3yMZKCP8S3UPVEmSpkDyrX"
			}
		},
		"./src/chat/icons/Userpic/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./node_modules/react/index.js"),
				r = n.n(c),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/chat/helpers/chatSelector.ts"),
				h = n("./src/chat/icons/Nsfw/index.tsx"),
				m = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				b = n("./src/chat/selectors/experiments.ts"),
				p = n("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				g = n("./src/chat/icons/Userpic/index.m.less"),
				f = n.n(g);
			const O = d.a.i("FallbackAvatar", f.a),
				v = d.a.wrapped(O, "FallbackAvatarWrapper", f.a),
				E = d.a.wrapped(e => {
					const t = Object(o.e)(b.y),
						{
							className: n,
							height: s,
							width: c,
							userId: i
						} = e,
						{
							processingAvatarImageUrl: d
						} = a.a;
					let u = {
						height: s,
						width: c
					};
					if (t) return r.a.createElement(p.a, {
						userId: i,
						className: n,
						style: u
					});
					const h = (e => e.replace(l.Nb.Account + "_", ""))(i),
						{
							avatar: g,
							color: f
						} = (e => {
							const t = m.length,
								n = parseInt(e, 36),
								a = n % 20 + 1,
								s = Math.floor(n / 20) % t;
							return {
								avatar: ("0" + a).slice(-2),
								color: m[s]
							}
						})(h),
						O = `${d}/avatar_default_${g}_${f}.png`;
					return u = {
						...u,
						backgroundColor: f,
						backgroundImage: `url(${O})`
					}, r.a.createElement("i", {
						className: n,
						style: u
					})
				}, "SnooIcon", f.a);
			class j extends r.a.Component {
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
						name: c,
						isFlipped: o
					} = this.props, {
						profileImgFailed: l
					} = this.state, d = {
						height: t,
						width: n
					};
					return l ? r.a.createElement(v, {
						style: d,
						className: e,
						title: `${c} ${s.fbt._("Snoovatar",null,{hk:"1jT1ZL"})}`
					}) : r.a.createElement("img", {
						style: d,
						onError: this.onError,
						className: Object(i.a)(e, {
							[f.a.isFlipped]: o
						}),
						src: a,
						alt: `${c} ${s.fbt._("Snoovatar",null,{hk:"1jT1ZL"})}`
					})
				}
			}
			const _ = d.a.wrapped(j, "VoicesAvatar", f.a),
				C = Object(u.a)({
					contact: (e, t) => e.contacts.models[t.userId],
					currentUser: e => e.user.account
				}),
				I = Object(o.b)(C);
			t.a = I(e => {
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
				if (n && n.isNSFW && !i) return r.a.createElement(h.b, {
					className: t,
					height: s,
					width: c
				});
				if (l) {
					const n = e.isFlipping && (e => e.indexOf("profileIcon_snoo") > -1 || (null == e ? void 0 : e.indexOf("snoovatar/avatars")) > -1 || (null == e ? void 0 : e.indexOf("avatar_default")) > -1 || e.endsWith("snoovatar_anonymous.svg"))(l) && i;
					return r.a.createElement(_, {
						className: t,
						height: s,
						width: c,
						profileImg: l,
						name: d,
						isFlipped: n
					})
				}
				return r.a.createElement(E, {
					className: t,
					height: s,
					width: c,
					userId: o
				})
			})
		},
		"./src/chat/icons/svgs/ArrowLeft/index.tsx": function(e, t, n) {
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
			}), e.isFilled ? s.a.createElement("path", {
				d: "M19,9H3.914l7.293-7.293L9.793.293l-9,9a1,1,0,0,0,0,1.414l9,9,1.414-1.414L3.914,11H19Z"
			}) : s.a.createElement("path", {
				d: "M19,9.375H2.509l7.933-7.933L9.558.558l-9,9a.625.625,0,0,0,0,.884l9,9,.884-.884L2.509,10.625H19Z"
			}))
		},
		"./src/chat/icons/svgs/Block/index.tsx": function(e, t, n) {
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
			}), e.isFilled ? s.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, s.a.createElement("path", {
				d: "M12.5,10.875h-5A6.633,6.633,0,0,0,.875,17.5V18A1.127,1.127,0,0,0,2,19.125H18A1.127,1.127,0,0,0,19.125,18v-.5A6.633,6.633,0,0,0,12.5,10.875Z"
			}), s.a.createElement("path", {
				d: "M10,10A5,5,0,1,0,5,5,5.006,5.006,0,0,0,10,10ZM7,5a2.951,2.951,0,0,1,.3-1.285L11.285,7.7A2.951,2.951,0,0,1,10,8,3,3,0,0,1,7,5Zm6,0a2.951,2.951,0,0,1-.3,1.285L8.715,2.3A2.951,2.951,0,0,1,10,2,3,3,0,0,1,13,5Z"
			})) : s.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, s.a.createElement("path", {
				d: "M12.5,10.875h-5A6.633,6.633,0,0,0,.875,17.5V18A1.127,1.127,0,0,0,2,19.125H18A1.127,1.127,0,0,0,19.125,18v-.5A6.633,6.633,0,0,0,12.5,10.875Zm5.375,7H2.125V17.5A5.381,5.381,0,0,1,7.5,12.125h5A5.381,5.381,0,0,1,17.875,17.5Z"
			}), s.a.createElement("path", {
				d: "M10,9.625A4.625,4.625,0,1,0,5.375,5,4.631,4.631,0,0,0,10,9.625ZM13.375,5a3.354,3.354,0,0,1-.59,1.9L8.1,2.215A3.371,3.371,0,0,1,13.375,5ZM7.215,3.1,11.9,7.785A3.371,3.371,0,0,1,7.215,3.1Z"
			})))
		},
		"./src/chat/icons/svgs/CaretDown/index.tsx": function(e, t, n) {
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
			}), e.isFilled ? s.a.createElement("path", {
				d: "M10 13.5a1 1 0 0 1-.707-.293l-5-5 1.414-1.414L10 11.086l4.293-4.293 1.414 1.414-5 5A1 1 0 0 1 10 13.5Z"
			}) : s.a.createElement("path", {
				d: "M10 13.125a.623.623 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.623.623 0 0 1-.442.183Z"
			}))
		},
		"./src/chat/icons/svgs/ChangeTheme/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/chat/controls/Svg/index.tsx"),
				r = n("./src/chat/icons/svgs/helpers.tsx"),
				o = n("./src/chat/models/Theme/index.ts");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				return s.a.createElement(c.a, i({}, e, {
					viewBox: "0 0 20 20"
				}), (() => {
					let e;
					const t = o.f[o.c.VANITY];
					return t && (e = s.a.createElement(r.a, {
						rotate: o.d,
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
				viewBox: "0 0 20 20"
			}), e.isFilled ? s.a.createElement("path", {
				d: "M16.8,3.2A9.619,9.619,0,0,0,.491,8.5a9.506,9.506,0,0,0,1.145,6.237l-1.181,3.9a.725.725,0,0,0,.893.907l3.99-1.143a9.5,9.5,0,0,0,4.654,1.218,9.835,9.835,0,0,0,1.551-.124A9.619,9.619,0,0,0,16.8,3.2ZM14,10.75H10.75V14H9.25V10.75H6V9.25H9.25V6h1.5V9.25H14Z"
			}) : s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
				d: "M16.8,3.2A9.619,9.619,0,0,0,.491,8.5a9.506,9.506,0,0,0,1.145,6.237l-1.181,3.9a.725.725,0,0,0,.893.907l3.99-1.143a9.5,9.5,0,0,0,4.654,1.218,9.835,9.835,0,0,0,1.551-.124A9.619,9.619,0,0,0,16.8,3.2Zm1.465,8.176a8.411,8.411,0,0,1-6.919,6.9A8.29,8.29,0,0,1,5.74,17.2l-.232-.138L1.93,18.083l1.063-3.511-.145-.239a8.28,8.28,0,0,1-1.121-5.64,8.377,8.377,0,1,1,16.539,2.678Z"
			}), s.a.createElement("polygon", {
				points: "10.625 6 9.375 6 9.375 9.375 6 9.375 6 10.625 9.375 10.625 9.375 14 10.625 14 10.625 10.625 14 10.625 14 9.375 10.625 9.375 10.625 6"
			})))
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

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", c({
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
		"./src/chat/icons/svgs/EnableNotifications/index.tsx": function(e, t, n) {
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
				d: "M9,18H8a2,2,0,0,0,4,0H9Z"
			}), s.a.createElement("path", {
				d: "M17.364,10.98a2.738,2.738,0,0,1-1.209-2.267L16.15,7.084a6.15,6.15,0,0,0-12.3,0l0,1.632A2.737,2.737,0,0,1,2.636,10.98,3.988,3.988,0,0,0,.875,14.291v.681A1.127,1.127,0,0,0,2,16.1H18a1.127,1.127,0,0,0,1.125-1.125v-.681A3.988,3.988,0,0,0,17.364,10.98Zm.511,3.867H2.125v-.556a2.739,2.739,0,0,1,1.21-2.275,3.988,3.988,0,0,0,1.76-3.3l0-1.633a4.9,4.9,0,1,1,9.8,0l0,1.631a3.988,3.988,0,0,0,1.76,3.3,2.739,2.739,0,0,1,1.21,2.275Z"
			}))
		},
		"./src/chat/icons/svgs/InfoIcon/index.tsx": function(e, t, n) {
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
			}), e.isFilled ? s.a.createElement("path", {
				d: "M10,.875A9.125,9.125,0,1,0,19.125,10,9.135,9.135,0,0,0,10,.875Zm1.087,14.643H8.913V8.162h2.174Zm.058-8.852A1.35,1.35,0,1,1,11.319,6,1.3,1.3,0,0,1,11.145,6.666Z"
			}) : s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
				d: "M10,.875A9.125,9.125,0,1,0,19.125,10,9.135,9.135,0,0,0,10,.875Zm0,17A7.875,7.875,0,1,1,17.875,10,7.884,7.884,0,0,1,10,17.875Z"
			}), s.a.createElement("rect", {
				x: "9.2",
				y: "8.217",
				width: "1.613",
				height: "7.301"
			}), s.a.createElement("path", {
				d: "M10.554,5.189a1.08,1.08,0,1,0,0,1.873,1.085,1.085,0,0,0,0-1.873Z"
			})))
		},
		"./src/chat/icons/svgs/InviteMember/index.tsx": function(e, t, n) {
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
				d: "M10.058,12.558l.884.884,3-3a.625.625,0,0,0,0-.884l-3-3-.884.884,1.933,1.933H1v1.25H11.991Z"
			}), s.a.createElement("path", {
				d: "M16.5.875H6.5A2.629,2.629,0,0,0,3.875,3.5v.833h1.25V3.5A1.377,1.377,0,0,1,6.5,2.125h10A1.377,1.377,0,0,1,17.875,3.5v13A1.377,1.377,0,0,1,16.5,17.875H6.5A1.377,1.377,0,0,1,5.125,16.5v-.833H3.875V16.5A2.629,2.629,0,0,0,6.5,19.125h10A2.629,2.629,0,0,0,19.125,16.5V3.5A2.629,2.629,0,0,0,16.5.875Z"
			}))
		},
		"./src/chat/icons/svgs/Link/index.tsx": function(e, t, n) {
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
			}), e.isFilled ? s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
				d: "M12.6,14.5c-0.4,0.4-2.2,2.2-2.6,2.6c-1.3,1.2-3.3,1.2-4.6,0c-1.3-1.3-1.3-3.3,0-4.6c0.5-0.5,2.2-2.2,2.6-2.6l0,0 C8.8,9.1,9.9,8.8,11,9l1.6-1.6c-2-1-4.4-0.6-5.9,1l0,0C6.1,8.9,4.4,10.7,4,11.1c-2,2-2,5.4,0,7.4s5.4,2,7.4,0 c0.5-0.5,2.2-2.2,2.6-2.6c1-1,1.5-2.3,1.5-3.7c0-0.2,0-0.5-0.1-0.7C15.5,11.5,12.8,14.3,12.6,14.5z"
			}), s.a.createElement("path", {
				d: "M16,1.5L16,1.5c-2-2-5.4-2-7.4,0C8.1,1.9,6.4,3.7,6,4.1C4.9,5.3,4.3,6.8,4.5,8.4c0,0,5-5.1,5.5-5.5c1.3-1.3,3.3-1.3,4.6,0 c0,0,0,0,0,0l0,0c1.3,1.3,1.3,3.3,0,4.6c0,0,0,0,0,0c-0.4,0.4-2.2,2.2-2.6,2.6c-0.8,0.7-1.9,1.1-2.9,0.8l-1.6,1.6 c2,1,4.4,0.6,5.9-1c0.5-0.5,2.2-2.2,2.6-2.6C18.1,6.8,18.1,3.5,16,1.5C16,1.5,16,1.5,16,1.5z"
			})) : s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
				d: "M13.9,12.4c-0.1,0.9-0.4,1.7-1,2.3c-0.4,0.4-2.2,2.2-2.6,2.6c-1.4,1.4-3.7,1.4-5.1,0l0,0c-1.4-1.4-1.4-3.7,0-5.1 c0.5-0.5,2.2-2.2,2.6-2.6l0,0c1.1-1,2.7-1.3,4-0.7C12,8.6,12.7,8,12.7,8c-1.9-1.1-4.3-0.8-5.8,0.8l0,0c-0.5,0.5-2.2,2.2-2.6,2.6 c-1.9,1.9-1.9,5,0,6.9l0,0c1.9,1.9,5,1.9,6.9,0c0,0,0,0,0,0c0.5-0.5,2.2-2.2,2.6-2.6c0.9-0.9,1.4-2.1,1.4-3.4c0-0.3,0-0.6-0.1-0.9 L13.9,12.4z"
			}), s.a.createElement("path", {
				d: "M15.7,1.7L15.7,1.7c-1.9-1.9-5-1.9-6.9,0c0,0,0,0,0,0C8.4,2.2,6.7,3.9,6.3,4.4C5.1,5.5,4.6,7.2,4.9,8.8 C5.2,8.4,5.7,8,6.1,7.6c0.1-0.9,0.4-1.7,1-2.3c0.5-0.5,2.2-2.2,2.6-2.6c1.4-1.4,3.7-1.4,5.1,0c0,0,0,0,0,0l0,0 c1.4,1.4,1.4,3.7,0,5.1c0,0,0,0,0,0c-0.4,0.4-2.2,2.2-2.6,2.6c-1.1,1-2.7,1.3-4,0.7c-0.3,0.3-0.5,0.5-0.8,0.8L7.3,12 c1.9,1.1,4.3,0.8,5.8-0.8c0.5-0.5,2.2-2.2,2.6-2.6C17.6,6.7,17.6,3.6,15.7,1.7C15.7,1.7,15.7,1.7,15.7,1.7L15.7,1.7z"
			})))
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
			}), s.a.createElement("polygon", {
				points: "18.442 2.442 17.558 1.558 10 9.116 2.442 1.558 1.558 2.442 9.116 10 1.558 17.558 2.442 18.442 10 10.884 17.558 18.442 18.442 17.558 10.884 10 18.442 2.442"
			}))
		},
		"./src/chat/icons/svgs/Profile/index.tsx": function(e, t, n) {
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
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM5.764,17.212a3.37,3.37,0,0,1,3.269-2.587h1.934a3.37,3.37,0,0,1,3.269,2.587,8.3,8.3,0,0,1-8.472,0Zm9.556-.749a4.627,4.627,0,0,0-4.353-3.088H9.033A4.627,4.627,0,0,0,4.68,16.463a8.375,8.375,0,1,1,10.64,0Z"
			}), s.a.createElement("path", {
				d: "M10,5.375A3.125,3.125,0,1,0,13.125,8.5,3.129,3.129,0,0,0,10,5.375Zm0,5A1.875,1.875,0,1,1,11.875,8.5,1.877,1.877,0,0,1,10,10.375Z"
			}))
		},
		"./src/chat/icons/svgs/Search/index.tsx": function(e, t, n) {
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
			}), e.isFilled ? s.a.createElement("path", {
				d: "m19.7 18.3-4.5-4.5c2.9-3.7 2.3-9.1-1.4-12S4.7-.5 1.8 3.2s-2.3 9.1 1.4 12c3.1 2.4 7.5 2.4 10.6 0l4.5 4.5 1.4-1.4zM8.5 15C4.9 15 2 12.1 2 8.5S4.9 2 8.5 2 15 4.9 15 8.5 12.1 15 8.5 15z"
			}) : s.a.createElement("path", {
				d: "m19.4 18.6-4.8-4.8c2.9-3.4 2.5-8.6-.9-11.5S5.2-.2 2.3 3.2s-2.5 8.6.9 11.5c3.1 2.6 7.6 2.6 10.6 0l4.8 4.8.8-.9zM8.5 15.4c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9c0 3.8-3.1 6.9-6.9 6.9z"
			}))
		},
		"./src/chat/icons/svgs/Smile/index.tsx": function(e, t, n) {
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
			}), e.isFilled ? s.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375ZM4.5,9A1.5,1.5,0,1,1,6,10.5,1.5,1.5,0,0,1,4.5,9Zm9.114,4.431A4.378,4.378,0,0,1,10,15.2a4.378,4.378,0,0,1-3.614-1.773l-.431-.613,1.227-.863.432.614A2.92,2.92,0,0,0,10,13.7a2.92,2.92,0,0,0,2.386-1.135l.432-.614,1.227.863ZM14,10.5A1.5,1.5,0,1,1,15.5,9,1.5,1.5,0,0,1,14,10.5Z"
			}) : s.a.createElement(s.a.Fragment, null, s.a.createElement("path", {
				d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375Zm0,18A8.375,8.375,0,1,1,18.375,10,8.384,8.384,0,0,1,10,18.375Z"
			}), s.a.createElement("path", {
				d: "M10,13.829a3.047,3.047,0,0,1-2.489-1.188l-1.022.718A4.252,4.252,0,0,0,10,15.079a4.252,4.252,0,0,0,3.511-1.72l-1.022-.718A3.047,3.047,0,0,1,10,13.829Z"
			}), s.a.createElement("circle", {
				cx: "6",
				cy: "9",
				r: "1.5"
			}), s.a.createElement("circle", {
				cx: "14",
				cy: "9",
				r: "1.5"
			})))
		},
		"./src/chat/icons/svgs/helpers.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => {
				let {
					id: t,
					rotate: n,
					gradient: a
				} = e;
				return s.a.createElement("defs", null, s.a.createElement("linearGradient", {
					id: t,
					gradientTransform: `rotate(${n})`
				}, a.stops.map((e, t) => s.a.createElement("stop", {
					key: `${t}-${e.offset}-${e.color}`,
					offset: `${e.offset}`,
					stopColor: `${e.color}`
				}))))
			}
		},
		"./src/chat/models/Contact/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return l
			}));
			var a = n("./src/lib/constants/index.ts");

			function s(e) {
				return e ? e.map(r).filter(e => !!e) : []
			}
			const c = 6;

			function r(e) {
				if (e.contact_account_id || e.id) return {
					id: e.contact_account_id || `${a.Nb.Account}_${e.id}`,
					name: e.name,
					created: 1e3 * e.created_utc,
					profileImg: e.profile_img,
					isNSFW: e.profile_over_18,
					acceptChats: e.accept_chats,
					totalKarma: e.link_karma + e.comment_karma
				}
			}
			const o = {
					id: "",
					name: "",
					profileImg: "",
					created: 0,
					isNSFW: !1
				},
				i = e => ({
					created: e.date * a.Xb,
					id: e.id,
					name: e.name,
					profileImg: e.icon_img
				}),
				l = e => e.map(i)
		},
		"./src/chat/models/Experiment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
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
				c = e => {
					const {
						id: t,
						experimentName: n,
						name: a,
						version: s,
						isOverride: c
					} = e;
					return {
						id: parseInt(t),
						name: n,
						variant: null != a ? a : "",
						version: s,
						isOverride: null != c && c
					}
				},
				r = e => {
					const t = {};
					for (const n of e) t[n.experimentName.toLowerCase()] = c(n);
					return t
				}
		},
		"./src/chat/models/InvitePolicy/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a, s = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.anybody = "Everyone", e.account_age_30_days = "Accounts older than 30 days", e.nobody = "Nobody"
			}(a || (a = {}));
			const c = [a.anybody, a.account_age_30_days, a.nobody],
				r = {
					[a.anybody]: () => s.fbt._("Everyone", null, {
						hk: "YHmqV"
					}),
					[a.account_age_30_days]: () => s.fbt._("Accounts older than 30 days", null, {
						hk: "1g4Gwx"
					}),
					[a.nobody]: () => s.fbt._("Nobody", null, {
						hk: "2m0XS"
					})
				},
				o = e => {
					const t = r[e];
					return t && t()
				},
				i = e => Object.keys(a).find(t => a[t] === e)
		},
		"./src/chat/models/MessageReaction/index.ts": function(e, t, n) {
			"use strict";
			var a;
			n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.ADD = "ADD", e.DELETE = "DELETE"
				}(a || (a = {}))
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
		"./src/chat/models/Settings/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return r
			}));
			var a = n("./src/chat/constants/channels.ts");
			const s = [a.a.INVITE_LINK_SETTINGS, a.a.INVITE_MEMBERS, a.a.THEMES, a.a.VIEW_ABOUT, a.a.START_GROUP];
			var c;
			! function(e) {
				e[e.MARK_ALL_AS_READ = 0] = "MARK_ALL_AS_READ", e[e.BLOCK_USER = 1] = "BLOCK_USER", e[e.LEAVE_GROUP = 2] = "LEAVE_GROUP", e[e.LEAVE_CHAT = 3] = "LEAVE_CHAT"
			}(c || (c = {}));
			const r = e => s.includes(e)
		},
		"./src/chat/models/Theme/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "a", (function() {
				return w
			}));
			var a = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/constants/theme.ts"),
				c = n("./src/reddit/models/Theme/index.ts"),
				r = n("./src/chat/constants/theme.ts"),
				o = n("./src/lib/constants/colors.ts"),
				i = n("./src/reddit/constants/colors.ts"),
				l = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const {
				REDDIT: d,
				NIGHT: u
			} = s.b, h = e => c.d[e].newRedditTheme;
			var m;
			! function(e) {
				e.NONE = "none", e.UNDERLINE = "underline"
			}(m || (m = {}));
			const b = "22.5";
			var p;
			! function(e) {
				e.BASIC = "basic", e.BERRY = "berry", e.UNICORN = "unicorn", e.ORANGERED = "orangered", e.PERIWINKLE = "periwinkle", e.OCEAN = "ocean", e.ROYAL = "royal", e.VANITY = "vanity", e.SERIOUS = "serious"
			}(p || (p = {}));
			const g = {
					[p.BERRY]: {
						stops: [{
							offset: "11.68%",
							color: o.a.berry600
						}, {
							offset: "88.32%",
							color: o.a.sakura500
						}]
					},
					[p.ORANGERED]: {
						stops: [{
							offset: "11.68%",
							color: o.a.orangeRed600
						}, {
							offset: "88.32%",
							color: o.a.mango500
						}]
					},
					[p.OCEAN]: {
						stops: [{
							offset: "11.68%",
							color: o.a.mint600
						}, {
							offset: "88.32%",
							color: o.a.alien500
						}]
					},
					[p.VANITY]: {
						stops: [{
							offset: "11.68%",
							color: o.a.periwinkle600
						}, {
							offset: "88.32%",
							color: o.a.berry500
						}]
					},
					[p.ROYAL]: {
						stops: [{
							offset: "11.68%",
							color: o.a.alien600
						}, {
							offset: "88.32%",
							color: o.a.periwinkle500
						}]
					},
					[p.SERIOUS]: {
						stops: [{
							offset: "11.68%",
							color: o.a.alien500
						}, {
							offset: "88.32%",
							color: o.a.periwinkle300
						}]
					},
					[p.UNICORN]: {
						stops: [{
							offset: "11.68%",
							color: o.a.periwinkle500
						}, {
							offset: "88.32%",
							color: o.a.berry300
						}]
					}
				},
				f = e => {
					return `linear-gradient(22.5deg, ${g[e].stops.map(e=>`${e.color} ${e.offset}`).join(", ")})`
				},
				O = {
					bubble: {
						background: f(p.BERRY),
						color: i.a.white,
						border: i.a.transparent,
						link: {
							color: i.a.white,
							textDecoration: m.UNDERLINE
						},
						channelsFilter: {
							background: f(p.BERRY),
							selected: i.a.white
						}
					}
				},
				v = {
					bubble: {
						background: f(p.VANITY),
						color: i.a.white,
						border: i.a.transparent,
						link: {
							color: i.a.white,
							textDecoration: m.UNDERLINE
						},
						channelsFilter: {
							background: f(p.VANITY),
							selected: i.a.white
						}
					}
				},
				E = {
					bubble: {
						background: f(p.SERIOUS),
						color: i.a.white,
						border: i.a.transparent,
						link: {
							color: i.a.white,
							textDecoration: m.UNDERLINE
						},
						channelsFilter: {
							background: f(p.SERIOUS),
							selected: i.a.white
						}
					}
				},
				j = {
					bubble: {
						background: f(p.ROYAL),
						color: i.a.white,
						border: i.a.transparent,
						link: {
							color: i.a.white,
							textDecoration: m.UNDERLINE
						},
						channelsFilter: {
							background: f(p.ROYAL),
							selected: i.a.white
						}
					}
				},
				_ = {
					bubble: {
						background: f(p.OCEAN),
						color: i.a.white,
						border: i.a.transparent,
						link: {
							color: i.a.white,
							textDecoration: m.UNDERLINE
						},
						channelsFilter: {
							background: f(p.OCEAN),
							selected: i.a.white
						}
					}
				},
				C = {
					bubble: {
						background: f(p.ORANGERED),
						color: i.a.white,
						border: i.a.transparent,
						link: {
							color: i.a.white,
							textDecoration: m.UNDERLINE
						},
						channelsFilter: {
							background: f(p.ORANGERED),
							selected: i.a.white
						}
					}
				},
				I = {
					bubble: {
						background: f(p.UNICORN),
						color: i.a.white,
						border: i.a.transparent,
						link: {
							color: i.a.white,
							textDecoration: m.UNDERLINE
						},
						channelsFilter: {
							background: f(p.UNICORN),
							selected: i.a.white
						}
					}
				},
				y = {
					activity: {
						icon: {
							default: h(d).actionIcon,
							active: i.a.alienblue,
							disable: Object(a.a)(.5, i.a.white),
							hover: Object(a.a)(.5, i.a.white),
							contrast: h(d).bodyText,
							toaster: h(d).bodyText,
							nsfw: {
								bg: i.a.black,
								text: i.a.white
							},
							subIcon: {
								backgroundColor: i.a.white
							}
						},
						text: {
							regular: h(d).bodyText,
							active: i.a.alienblue,
							fade: Object(a.a)(.4, i.a.white),
							light: h(d).actionIcon,
							warning: i.a.warning,
							highlight: i.a.white,
							success: i.a.approved,
							meta: h(d).metaText
						},
						button: {
							primary: i.a.alienblue,
							secondary: h(d).metaText,
							chatFilterColor: o.a.orca50,
							newChatFilter: {
								defaultBg: i.a.white,
								activeBg: i.a.black,
								defaultBorder: o.a.narwhal200,
								activeBorder: i.a.transparent,
								defaultText: i.a.black,
								activeText: i.a.white
							}
						},
						buttonPrimary: {
							color: i.a.white
						},
						buttonSecondary: {
							active: i.a.alienblue
						},
						send: {
							disable: Object(a.a)(.5, i.a.white),
							hover: Object(a.a)(.08, i.a.op)
						},
						checkbox: {
							checked: i.a.alienblue,
							checkmark: i.a.white,
							unchecked: h(d).body,
							uncheckedBorder: h(d).placeholder
						},
						input: {
							border: i.a.defaultFlair,
							focusColor: i.a.white,
							focusBg: i.a.approved,
							ownerBg: h(d).line,
							color: h(d).bodyText,
							error: o.a.orangeRed600,
							channelRename: Object(a.a)(.1, i.a.white),
							background: Object(a.f)(Object(a.a)(.3, i.a.white), .1)
						},
						link: {
							staticUnderline: i.a.alienblue,
							staticText: i.a.op,
							hoverText: i.a.snoo
						},
						minimizedPortal: {
							backgroundColor: {
								unreadInitial: h(d).active,
								unreadFinal: h(d).highlight
							},
							color: {
								unreadInitial: i.a.white,
								unreadFinal: i.a.black
							}
						}
					},
					layout: {
						body: h(d).body,
						colsBorder: h(d).line,
						controlsBorder: Object(a.f)(i.a.black, .15),
						header: {
							counterBg: i.a.snoo,
							counterText: i.a.white
						},
						scrollbar: Object(a.a)(.2, i.a.white),
						scrollbarHover: Object(a.a)(.4, i.a.white),
						timeStamp: {
							tooltip: {
								background: h(d).body
							}
						},
						dropdown: {
							border: "none"
						},
						overlayBackground: i.a.overlayBackground,
						overlayReportFlow: i.a.overlayReportFlow
					},
					message: {
						list: {
							item: {
								ownerBg: h(d).inactive,
								button: h(d).actionIcon,
								richItem: h(d).metaText,
								richItemBorder: h(d).postLine,
								onlineIndicator: i.a.approved,
								white: i.a.white
							}
						}
					},
					subreddit: {
						iconBg: i.a.alienblue
					},
					sidebar: {
						background: Object(a.f)(Object(a.a)(.3, i.a.white), .1),
						subreddit: {
							background: {
								active: i.a.alienblue,
								hover: h(d).canvas
							}
						},
						basic: {
							background: {
								active: i.a.alienblue,
								hover: h(d).canvas
							}
						},
						text: {
							divider: Object(a.a)(.5, i.a.white)
						},
						item: {
							hover: h(d).field,
							active: h(d).postLine,
							selected: h(d).inactive,
							text: {
								active: h(d).titleText
							}
						},
						footer: {
							background: h(d).field
						}
					},
					toast: {
						pending: i.a.black,
						success: i.a.approved,
						error: i.a.orangered
					},
					skeleton: {
						field: h(d).field,
						inactive: h(d).inactive
					},
					boxShadow: Object(a.f)(20, 120, 120, .11),
					bubbleActions: {
						hover: h(d).line
					},
					bubble: {
						background: i.a.transparent,
						color: h(d).bodyText,
						border: h(d).line,
						link: {
							color: i.a.op,
							textDecoration: m.NONE
						},
						channelsFilter: {
							background: o.a.narwhal200,
							selected: o.a.orca50
						}
					},
					editName: Object(a.a)(.1, h(d).inactive),
					uploads: {
						progress: {
							background: o.a.narwhal300,
							bar: o.a.alien600
						}
					},
					prompt: {
						tooltip: {
							background: o.a.alien600
						}
					},
					searchBar: {
						backgroundColor: h(d).placeholder
					},
					newChat: {
						inviteLink: {
							borderColor: o.a.narwhal300
						}
					},
					addReaction: {
						backgroundColor: h(d).inactive,
						iconFill: h(u).postIcon
					},
					settings: {
						color: h(d).bodyText,
						panelBackground: h(d).body,
						panelItemHoverBackground: h(d).field,
						panelItemSelectedBackground: h(d).line,
						dropdownItemHoverBackground: h(d).highlight
					},
					overlay: {
						headerColor: h(d).bodyText,
						backgroundColor: h(d).field,
						inputBackground: h(d).body,
						searchBarBackground: h(d).field
					},
					modal: {
						buttonsBackground: o.a.narwhal200,
						primaryButtonWarning: i.a.warning,
						secondaryButton: h(d).metaText
					}
				},
				x = {
					activity: {
						icon: {
							default: h(u).postIcon,
							active: i.a.alienblue,
							disable: Object(a.a)(.5, i.a.white),
							hover: Object(a.a)(.5, i.a.white),
							contrast: Object(a.a)(.4, h(u).bodyText),
							toaster: h(d).bodyText,
							nsfw: {
								bg: i.a.black,
								text: i.a.white
							},
							subIcon: {
								backgroundColor: i.a.white
							}
						},
						text: {
							regular: h(u).bodyText,
							active: i.a.alienblue,
							fade: Object(a.a)(.4, i.a.white),
							light: h(u).actionIcon,
							warning: i.a.warning,
							highlight: i.a.white,
							success: i.a.approved,
							meta: h(u).metaText
						},
						button: {
							primary: i.a.alienblue,
							secondary: h(u).metaText,
							chatFilterColor: o.a.narwhal700,
							newChatFilter: {
								defaultBg: i.a.transparent,
								activeBg: i.a.white,
								defaultBorder: o.a.orca200,
								activeBorder: i.a.transparent,
								defaultText: i.a.white,
								activeText: i.a.black
							}
						},
						buttonPrimary: {
							color: h(u).bodyText
						},
						buttonSecondary: {
							active: h(u).bodyText
						},
						send: {
							disable: Object(a.a)(.5, i.a.white),
							hover: Object(a.a)(.08, i.a.op)
						},
						checkbox: {
							checked: i.a.alienblue,
							checkmark: i.a.white,
							unchecked: h(u).body,
							uncheckedBorder: h(u).metaText
						},
						input: {
							border: i.a.defaultFlair,
							focusColor: i.a.white,
							focusBg: i.a.approved,
							ownerBg: h(u).line,
							color: h(u).bodyText,
							error: o.a.orangeRed600,
							channelRename: Object(a.a)(.1, i.a.white),
							background: Object(a.f)(Object(a.a)(.3, i.a.white), .1)
						},
						link: {
							staticUnderline: i.a.alienblue,
							staticText: i.a.op,
							hoverText: i.a.snoo
						},
						minimizedPortal: {
							backgroundColor: {
								unreadInitial: h(u).active,
								unreadFinal: h(u).highlight
							},
							color: {
								unreadInitial: i.a.white,
								unreadFinal: i.a.white
							}
						}
					},
					layout: {
						body: h(u).body,
						colsBorder: h(u).line,
						controlsBorder: Object(a.f)(i.a.white, .15),
						header: {
							counterBg: i.a.snoo,
							counterText: i.a.white
						},
						scrollbar: Object(a.a)(.2, h(u).bodyText),
						scrollbarHover: Object(a.a)(.1, h(u).bodyText),
						timeStamp: {
							tooltip: {
								background: h(u).inactive
							}
						},
						dropdown: {
							border: h(u).line
						},
						overlayBackground: i.a.overlayBackground,
						overlayReportFlow: i.a.overlayReportFlow
					},
					message: {
						list: {
							item: {
								ownerBg: h(u).inactive,
								button: h(u).actionIcon,
								richItem: h(u).metaText,
								richItemBorder: l.a.metaText,
								onlineIndicator: i.a.approved,
								white: i.a.white
							}
						}
					},
					subreddit: {
						iconBg: i.a.alienblue
					},
					sidebar: {
						background: Object(a.f)(Object(a.a)(.4, i.a.white), .1),
						subreddit: {
							background: {
								active: i.a.alienblue,
								hover: Object(a.g)(.2, h(u).canvas)
							}
						},
						basic: {
							background: {
								active: i.a.alienblue,
								hover: Object(a.g)(.2, h(u).canvas)
							}
						},
						text: {
							divider: Object(a.a)(.5, i.a.white)
						},
						item: {
							hover: h(u).field,
							active: h(u).postLine,
							selected: h(u).placeholder,
							text: {
								active: h(u).titleText
							}
						},
						footer: {
							background: h(u).field
						}
					},
					toast: {
						pending: i.a.black,
						success: i.a.approved,
						error: i.a.orangered
					},
					skeleton: {
						field: h(u).field,
						inactive: h(u).inactive
					},
					boxShadow: Object(a.f)(20, 120, 120, 0),
					bubbleActions: {
						hover: h(u).field
					},
					bubble: {
						background: i.a.transparent,
						color: h(u).bodyText,
						border: h(u).line,
						link: {
							color: i.a.op,
							textDecoration: m.NONE
						},
						channelsFilter: {
							background: o.a.orca600,
							selected: o.a.narwhal600
						}
					},
					editName: h(u).inactive,
					uploads: {
						progress: {
							background: o.a.narwhal300,
							bar: o.a.alien600
						}
					},
					prompt: {
						tooltip: {
							background: o.a.alien600
						}
					},
					searchBar: {
						backgroundColor: o.a.nightTone1
					},
					newChat: {
						inviteLink: {
							borderColor: h(u).inactive
						}
					},
					addReaction: {
						backgroundColor: h(u).postIcon,
						iconFill: h(u).body
					},
					settings: {
						color: o.a.nightTone4,
						panelBackground: o.a.nightTone1,
						panelItemHoverBackground: o.a.nightTone3,
						panelItemSelectedBackground: o.a.nightTone2,
						dropdownItemHoverBackground: o.a.nightTone5
					},
					overlay: {
						headerColor: i.a.white,
						backgroundColor: h(u).body,
						inputBackground: o.a.nightTone6,
						searchBarBackground: o.a.nightTone3
					},
					modal: {
						buttonsBackground: o.a.orca200,
						primaryButtonWarning: i.a.warning,
						secondaryButton: h(u).bodyText
					}
				},
				S = {
					[r.b.REDDIT]: y,
					[r.b.NIGHT]: x
				},
				N = {
					[p.ORANGERED]: C,
					[p.BERRY]: O,
					[p.UNICORN]: I,
					[p.VANITY]: v,
					[p.SERIOUS]: E,
					[p.OCEAN]: _,
					[p.ROYAL]: j
				},
				w = [p.BASIC, p.ORANGERED, p.BERRY, p.UNICORN, p.VANITY, p.ROYAL, p.OCEAN, p.SERIOUS]
		},
		"./src/chat/models/User/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/convertToCamelCase/index.ts");
			const c = `${a.Nb.Account}_`,
				r = e => {
					if (null == e ? void 0 : e.length) return e.reduce((e, t) => {
						const n = function(e) {
							var t, n;
							return (null == e ? void 0 : e.profile) && {
								id: e.id,
								name: e.name,
								created: e.profile && new Date(e.profile.createdAt).getTime(),
								profileImg: e.profile.styles.legacyIcon.url || e.profile.styles.icon,
								isNSFW: e.profile.isNsfw,
								totalKarma: null === (t = e.karma) || void 0 === t ? void 0 : t.total,
								snooAvatarUrl: null === (n = e.snoovatarIcon) || void 0 === n ? void 0 : n.url
							}
						}(t);
						return n ? {
							...e,
							[n.id]: n
						} : e
					}, {})
				};
			const o = e => {
				const t = (e => (e && e.id && (e.id.includes(c) ? e.id = e.id : e.id = c + e.id), e))(e);
				return Object(s.a)(t)
			}
		},
		"./src/chat/reducers/experiments/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = (e, t) => {
				var n, a;
				const s = {};
				if (t) {
					const c = /^experiment_(.*)$/i,
						r = e => {
							const t = e.match(c);
							if (null !== t) return t[1]
						};
					for (const o in t) {
						const c = r(o);
						if (c) {
							const r = e[c.toLowerCase()] || {};
							s[c.toLowerCase()] = {
								...r,
								name: c.toLowerCase(),
								variant: t[o] || "",
								isOverride: !0,
								id: null !== (n = null == r ? void 0 : r.id) && void 0 !== n ? n : -1,
								version: null !== (a = null == r ? void 0 : r.version) && void 0 !== a ? a : "-1"
							}
						}
					}
				}
				return s
			}
		},
		"./src/chat/reducers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return In
			}));
			var a = n("./node_modules/redux/es/redux.js"),
				s = n("./src/chat/actions/channelsFilter/index.ts"),
				c = n("./src/chat/models/Channel/index.ts");
			const r = {
				filter: c.c.ALL
			};
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.b:
						case s.a:
							return t.payload;
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
			var b = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				p = n("./src/chat/actions/channel.ts");
			var g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case p.t:
							return !0;
						default:
							return e
					}
				},
				f = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/uniq.js")),
				O = n.n(f),
				v = n("./src/chat/models/Channel/utils.ts");
			const E = {
				fetchingChannels: !1,
				hasMoreChannels: !1,
				sortedKeys: []
			};
			var j = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
						} = t.payload, s = Object(v.c)(n, [c.b.Direct, c.b.Group]);
						if (!s) return e;
						const r = Object.keys(s),
							o = a && !!r.length;
						return {
							...e,
							fetchingChannels: !1,
							hasMoreChannels: o,
							sortedKeys: [...e.sortedKeys, ...r]
						}
					}
					case p.u:
					case p.n: {
						const {
							channelId: n
						} = t.payload;
						return {
							...e,
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						}
					}
					case p.y: {
						const n = t.payload.channel.channelId;
						return e.sortedKeys.indexOf(n) > -1 ? {
							...e,
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						} : e
					}
					case p.x: {
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
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case p.c:
							return !1;
						case p.h:
							return !0;
						default:
							return e
					}
				},
				C = n("./src/chat/actions/message/index.ts");
			const I = {
				fetchingChannels: !1,
				hasMoreChannels: !0,
				sortedKeys: []
			};
			var y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
							} = t.payload, s = Object(v.c)(n, [c.b.Direct, c.b.Group]);
							if (!s) return e;
							const r = Object.keys(s),
								o = a && !!r.length;
							return {
								...e,
								fetchingChannels: !1,
								hasMoreChannels: o,
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
						case p.u: {
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
								sortedKeys: O()([...n, ...e.sortedKeys])
							}
						}
						case p.v:
						case C.a: {
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
				x = n("./src/chat/actions/liveChat/index.ts"),
				S = n("./src/chat/selectors/liveChat/index.ts"),
				N = n("./src/redditGQL/types.ts");
			const w = (e, t) => e ? t && Object(S.a)(t) > Object(S.a)(e) ? t : e : t,
				k = e => {
					var t;
					return !!(null === (t = e.post.moderationInfo) || void 0 === t ? void 0 : t.isRemoved)
				},
				T = e => {
					return !!e.post.talkRoom
				},
				M = e => {
					var t;
					return (null === (t = e.post.media) || void 0 === t ? void 0 : t.typeHint) === N.r.Rpan
				},
				A = (e, t, n) => e[t] ? {
					...e,
					[t]: {
						...e[t],
						...n
					}
				} : e;
			var L = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case x.UPDATE_LAST_READ_AT_TIMESTAMP: {
							const {
								postId: n,
								lastReadAt: a
							} = t.payload;
							return A(e, n, {
								lastReadAt: a
							})
						}
						case x.UPDATE_LAST_COMMENT_CREATED_AT_TIMESTAMP: {
							const {
								postId: n,
								lastCommentedAt: a
							} = t.payload;
							return A(e, n, {
								lastCommentedAt: a
							})
						}
						case x.REMOVE_LIVE_CHAT_POST: {
							const {
								postId: n
							} = t.payload;
							return n ? u()(e, n) : e
						}
						case x.FETCH_LIVE_CHATS_SUCCESS: {
							const {
								liveChats: n
							} = t.payload;
							return n.reduce((t, n) => {
								var a, s;
								if (!n.post.id || k(n) || M(n) || T(n)) return t;
								const c = n.post.id,
									r = e[c];
								return r ? {
									...t,
									[c]: {
										...n,
										lastReadAt: w(null !== (a = r.lastReadAt) && void 0 !== a ? a : "", n.lastReadAt),
										lastCommentedAt: w(null !== (s = r.lastCommentedAt) && void 0 !== s ? s : "", n.lastCommentedAt)
									}
								} : {
									...t,
									[c]: n
								}
							}, {})
						}
						default:
							return e
					}
				},
				D = Object(a.c)({
					models: L
				}),
				U = n("./src/chat/actions/channel/messageQuickReply.ts");
			const P = {};
			var R = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case U.MESSAGE_QUICK_REPLY_ADD_USER_ID:
							return {
								...e, [t.payload]: t.payload
							};
						case U.MESSAGE_QUICK_REPLY_REMOVE_USER_ID:
							return u()(e, t.payload);
						default:
							return e
					}
				},
				B = n("./node_modules/lodash/first.js"),
				H = n.n(B),
				F = n("./node_modules/lodash/reduce.js"),
				G = n.n(F),
				V = n("./src/chat/actions/channel/dropdown.ts"),
				W = n("./src/chat/actions/message/inboxScroller.ts"),
				z = n("./src/chat/constants/channels.ts");
			const K = {};
			var q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.g:
						return {
							...e, ...t.payload
						};
					case p.b:
					case p.a: {
						const {
							channels: n
						} = t.payload, a = G()(e, (e, t, a) => n[a] && t.channelState === z.b.PARTIAL && (e[a] = n[a]) && e || e, {});
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
					case p.u: {
						const {
							channelId: n
						} = t.payload, a = {
							...e[n],
							channelState: z.b.JOINED
						};
						return {
							...e,
							[a.channelId]: a
						}
					}
					case p.y: {
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
					case p.x: {
						const n = t.payload.channel,
							a = {
								...e[n.channelId],
								...n,
								channelState: z.b.INVITED
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
						return u()(e, n)
					}
					case V.a: {
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
					case C.a: {
						const n = t.payload.channelId,
							a = Number(H()(Object.keys(t.payload.message))),
							s = {
								...e[n],
								lastMessage: t.payload.message[a]
							};
						return {
							...e,
							[n]: s
						}
					}
					case C.g: {
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
					case C.b:
					case C.e: {
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
					case C.f: {
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
					case W.b: {
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
			const Z = {
				channelId: void 0,
				postId: void 0,
				isLoaded: !1
			};
			var Q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case p.q: {
						const n = {
							...e,
							postId: void 0,
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
					case x.REMOVE_LIVE_CHAT_POST:
						return t.payload.postId !== e.postId ? e : {
							...e,
							postId: ""
						};
					case p.s:
						return {
							...e, channelId: void 0, postId: t.payload.postId, isLoaded: !0
						};
					default:
						return e
				}
			};
			var Y = Object(a.c)({
					channelsFilter: o,
					draftMessages: b,
					firstLoaded: g,
					invited: j,
					inviteListExpanded: _,
					isCreatingChannel: function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							t = arguments.length > 1 ? arguments[1] : void 0;
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
					joined: y,
					models: q,
					selected: Q,
					messageQuickReplyUsers: R,
					liveChat: D
				}),
				X = n("./src/chat/actions/user.ts");
			var J = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case X.b:
							return !0;
						default:
							return e
					}
				},
				$ = n("./node_modules/lodash/values.js"),
				ee = n.n($),
				te = n("./src/chat/actions/sendbird/index.ts"),
				ne = n("./src/chat/actions/whiteList/index.ts");
			const ae = "search",
				se = "contacts",
				ce = {};
			var re = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case te.f:
					case ne.b:
						return {
							...e, ...t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: se
							}, e), {})
						};
					case te.b:
						return {
							...t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: se
							}, e), {}), ...e
						};
					case te.d: {
						const n = t.payload.username;
						return {
							...e,
							[n]: {
								loaded: !1,
								userId: null,
								valid: !1,
								method: ae
							}
						}
					}
					case te.e: {
						const {
							payload: {
								contact: n,
								username: a,
								valid: s
							}
						} = t, c = !!(s && n && n.id);
						return {
							...e,
							[a.toLowerCase()]: {
								loaded: !0,
								userId: n ? n.id : null,
								valid: c,
								method: ae
							}
						}
					}
					case X.h: {
						const n = t.payload;
						return {
							...e,
							...ee()(n).reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: ae
							}, e), {})
						}
					}
					case X.c: {
						const {
							username: n
						} = t.payload;
						return n ? u()(e, n) : e
					}
					default:
						return e
				}
			};
			const oe = {};
			var ie = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oe,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case te.f:
					case ne.b:
						return {
							...e, ...t.payload.reduce((t, n) => (t[n.id] = {
								...e[n.id],
								...n
							}, t), {})
						};
					case te.e: {
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
					case X.h:
						return {
							...e, ...t.payload || {}
						};
					case X.c: {
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
					case X.b: {
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
			const le = [];
			var de = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case X.g:
						return [...e, t.payload];
					case X.j:
						return e.filter(e => e !== t.payload);
					case X.i:
						return le;
					default:
						return e
				}
			};
			const ue = [];
			var he = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ue,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case ne.b:
							return t.payload.map(e => e.id);
						case ne.a:
							return [...e, t.payload];
						case ne.c:
							return e.filter(e => e !== t.payload);
						default:
							return e
					}
				},
				me = Object(a.c)({
					fetchedBlockedUsers: J,
					knownContacts: re,
					models: ie,
					selectedUserIds: de,
					whiteListKeys: he
				}),
				be = n("./src/chat/actions/container.ts"),
				pe = n("./src/chat/constants/container.ts");
			const ge = {
				size: pe.a.EMBED,
				isFocused: !1,
				windowWidth: 0
			};
			var fe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case be.SIZE_CHANGED:
							return pe.b[t.payload] ? {
								...e,
								size: t.payload
							} : e;
						case be.FOCUS_CHANGED:
							return {
								...e, isFocused: !e.isFocused
							};
						case be.WINDOW_SIZE_CHANGED:
							return {
								...e, windowWidth: t.payload
							};
						default:
							return e
					}
				},
				Oe = n("./src/lib/env/index.ts"),
				ve = n("./src/lib/makeActionCreator/index.ts");
			n("./src/chat/endpoints/users/index.ts");
			Object(ve.a)("EXPERIMENTS__REQUEST_LOADED"), Object(ve.a)("EXPERIMENTS__REQUEST_PENDING"), Object(ve.a)("EXPERIMENTS__REQUEST_FAILED");
			var Ee = n("./src/chat/models/Experiment/index.ts"),
				je = n("./src/chat/reducers/experiments/helpers.ts");
			const _e = {
				api: {
					isPending: !1,
					errors: []
				},
				models: {}
			};
			var Ce = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _e,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n;
					switch (t.type) {
						case "EXPERIMENTS__REQUEST_PENDING":
							return {
								...e, api: {
									...e.api,
									isPending: !0,
									errors: []
								}
							};
						case "EXPERIMENTS__REQUEST_LOADED": {
							const a = Object(Oe.b)() ? null : null === (n = null == t ? void 0 : t.payload) || void 0 === n ? void 0 : n.queryParams,
								s = Object(Ee.b)(t.payload.data),
								c = Object(je.a)(s, a);
							return {
								...e,
								models: {
									...e.models,
									...s,
									...c
								},
								api: {
									...e.api,
									isPending: !1
								}
							}
						}
						case "EXPERIMENTS__REQUEST_FAILED":
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
				Ie = n("./src/chat/actions/gifs/index.ts");
			const ye = {
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
			var xe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, a, s;
					switch (t.type) {
						case Ie.c:
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
						case Ie.f:
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
						case Ie.d:
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
						case Ie.g:
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
						case Ie.b:
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
						case Ie.e:
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
						case Ie.h:
							return {
								...e, search: {
									...e.search,
									inputQuery: t.payload
								}
							};
						case Ie.a:
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
				Se = n("./src/chat/actions/inviteLink/constants.ts");
			const Ne = {};
			var we = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ne,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Se.f:
							return t.payload;
						case Se.a:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId],
									durationLabel: t.payload.durationLabel
								}
							};
						case Se.b:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId] || {},
									maxUsersCount: t.payload.maxUsersCount
								}
							};
						case Se.g:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId] || {},
									isRevokeInviteLinksRequestPending: !0,
									inviteLink: "",
									errors: []
								}
							};
						case Se.k:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId] || {},
									isCreateInviteLinkRequestPending: !0,
									errors: []
								}
							};
						case Se.h:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId] || {},
									isRevokeInviteLinksRequestPending: !1
								}
							};
						case Se.l:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId] || {},
									inviteLink: t.payload.inviteLink,
									isCreateInviteLinkRequestPending: !1
								}
							};
						case Se.i:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId] || {},
									isRevokeInviteLinksRequestPending: !1,
									errors: t.payload.errors
								}
							};
						case Se.m:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId] || {},
									isCreateInviteLinkRequestPending: !1,
									errors: t.payload.errors
								}
							};
						default:
							return e
					}
				},
				ke = n("./node_modules/lodash/toArray.js"),
				Te = n.n(ke),
				Me = n("./node_modules/lodash/uniqBy.js"),
				Ae = n.n(Me),
				Le = n("./src/chat/actions/members.ts");
			const De = {};
			var Ue = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : De,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Le.b: {
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
					case Le.c: {
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
					case Le.a: {
						const {
							channelId: n,
							members: a
						} = t.payload, s = Te()(a), c = e[n] && e[n].model || [], r = Ae()([...c, ...s], "id");
						return {
							...e,
							[n]: {
								...e[n],
								model: r
							}
						}
					}
					case Le.d:
						return {};
					default:
						return e
				}
			};
			var Pe = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.b:
					case C.l:
						return !0;
					default:
						return e
				}
			};
			const Re = {};
			var Be = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Re,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case C.b: {
						const {
							messages: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case C.a:
						return {
							...e, ...t.payload.message
						};
					case C.i:
						return {
							...e, ...t.payload
						};
					case C.d:
					case C.j:
						return u()(e, t.payload);
					case C.e: {
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
							...u()(e, ...n)
						}
					}
					case W.a: {
						const {
							messageIdList: n
						} = t.payload;
						return u()(e, n)
					}
					case C.n: {
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
					case C.h: {
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
			const He = {};
			var Fe = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, a;
					switch (t.type) {
						case C.i: {
							const s = ee()(t.payload);
							if (s.length && (null === (a = null === (n = s[0]) || void 0 === n ? void 0 : n.messageData) || void 0 === a ? void 0 : a.clientMessageId)) {
								const t = s[0].messageData.clientMessageId;
								return {
									...u()(e, t)
								}
							}
							return e
						}
						case C.c: {
							const n = t.payload;
							return {
								...e,
								[n.clientMessageId]: n
							}
						}
						case C.m: {
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
						case C.a:
						case C.k: {
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
				Ge = n("./src/chat/actions/message/reactions.ts");
			const Ve = {};
			var We = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ve,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case C.b: {
							const {
								messages: e
							} = t.payload;
							return Object.keys(e).reduce((t, n) => {
								const {
									messageId: a,
									reactions: s
								} = e[n];
								return {
									...t,
									[a]: s
								}
							}, {})
						}
						case Ge.a:
							return {
								...e, [t.payload.messageId]: t.payload.reactions
							};
						default:
							return e
					}
				},
				ze = n("./src/chat/actions/message/richUnit.ts");
			const Ke = {
					posts: {},
					userPosts: {},
					comments: {},
					subreddits: {},
					dataReceived: !1
				},
				qe = e => e.length ? e.reduce((e, t) => (null == t ? void 0 : t.id) ? {
					...e,
					[t.id.toLowerCase()]: t
				} : e, {}) : {};
			var Ze = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, a, s, c;
					switch (t.type) {
						case ze.b:
							return {
								...e, posts: {
									...e.posts,
									...qe((null === (n = t.payload) || void 0 === n ? void 0 : n.posts) || {})
								}, userPosts: {
									...e.userPosts,
									...qe((null === (a = t.payload) || void 0 === a ? void 0 : a.userPosts) || {})
								}, comments: {
									...e.comments,
									...qe((null === (s = t.payload) || void 0 === s ? void 0 : s.comments) || {})
								}, subreddits: {
									...e.subreddits,
									...qe((null === (c = t.payload) || void 0 === c ? void 0 : c.subreddits) || {})
								}, dataReceived: !0
							};
						case ze.a:
							return {
								...e, dataReceived: !1
							};
						default:
							return e
					}
				},
				Qe = n("./node_modules/lodash/isEqual.js"),
				Ye = n.n(Qe),
				Xe = n("./src/chat/actions/message/unreadCount.ts");
			const Je = {
				unreadMessages: 0,
				hasNewMessages: !1,
				unacceptedInvites: 0,
				chatDirectUnacceptedInvites: 0,
				chatGroupUnacceptedInvites: 0,
				unreadMentions: 0
			};
			var $e = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Je,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Xe.a:
							return Ye()(e, t.payload) ? e : {
								...e,
								...t.payload
							}
					}
					return e
				},
				et = Object(a.c)({
					firstLoaded: Pe,
					models: Be,
					pending: Fe,
					reactions: We,
					unread: $e,
					richUnits: Ze
				}),
				tt = n("./src/chat/reducers/meta/index.ts"),
				nt = n("./src/chat/reducers/platform/index.ts"),
				at = n("./src/chat/actions/messageReactions/constants.ts");
			const st = {
				models: {},
				selectedMessageId: null
			};
			var ct = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : st,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case at.a: {
							const n = t.payload.reduce((e, t) => t.key ? {
								...e,
								[t.key]: {
									...t
								}
							} : e, {});
							return {
								...e,
								models: n
							}
						}
						case at.c:
							return {
								...e, selectedMessageId: t.payload
							};
						case at.b:
							return {
								...e, selectedMessageId: null
							};
						default:
							return e
					}
				},
				rt = n("./src/chat/actions/renameGroupChat/index.ts");
			const ot = {
				ivVisible: !1
			};
			var it = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ot,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case rt.a:
							return {
								...e, ivVisible: t.payload.isVisible
							};
						default:
							return e
					}
				},
				lt = n("./src/chat/actions/sendbird/config.ts");
			const dt = {
				maxMessageLength: void 0
			};
			var ut = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.c:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const ht = {
				host: void 0
			};
			var mt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ht,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.d:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const bt = {
				reactions: {},
				mediaHost: ""
			};
			var pt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case lt.e: {
							const n = t.payload.reactions.reduce((e, t) => {
								if (null == t ? void 0 : t.key) return {
									...e,
									[t.key]: t
								}
							}, {});
							return {
								...e,
								reactions: n
							}
						}
						case lt.b:
							return {
								...e, mediaHost: t.payload
							};
						default:
							return e
					}
				},
				gt = n("./src/chat/actions/sendbird/sdk.ts"),
				ft = n("./src/chat/constants/sendbird.ts");
			const Ot = {
				connectionStatus: ft.b.Closed,
				initialized: !1
			};
			var vt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ot,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case gt.a:
						return {
							...e, initialized: !0, connectionStatus: ft.b.Open
						};
					case gt.c: {
						const n = {
							...t.payload
						};
						return {
							...e,
							error: n,
							connectionStatus: ft.b.Closed
						}
					}
					case gt.b:
						return {
							...e, connectionStatus: ft.b.Closed
						};
					case gt.d: {
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
			const Et = {
				expires: void 0,
				token: void 0,
				active: !1
			};
			var jt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Et,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case te.g:
							return {
								...e, ...t.payload
							};
						case te.a:
							return {
								...e, active: !0
							};
						case te.c:
							return {
								...e, active: !1
							};
						default:
							return e
					}
				},
				_t = Object(a.c)({
					globalSettings: ut,
					proxy: mt,
					reactions: pt,
					session: jt,
					sdk: vt
				}),
				Ct = n("./src/chat/actions/settings/index.ts");
			const It = {
				showChatLinkPromptCount: 0,
				isChatLinkPromptHidden: !1
			};
			var yt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : It,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ct.c:
							return {
								...e, showChatLinkPromptCount: t.payload
							};
						case Ct.a:
							return {
								...e, isChatLinkPromptHidden: !0
							};
						default:
							return e
					}
				},
				xt = n("./src/chat/actions/sidebar.ts");
			const St = {
				isSidebarVisible: !1,
				sideBarComponentType: n("./src/chat/models/Sidebar/index.ts").a.CHANNELS
			};
			var Nt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : St,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case xt.c:
							return {
								...e, isSidebarVisible: t.payload
							};
						case xt.b:
							return {
								...e, sideBarComponentType: t.payload
							};
						default:
							return e
					}
				},
				wt = Object(a.c)({
					sideBarAppearance: Nt
				}),
				kt = n("./src/chat/reducers/subscribe.ts"),
				Tt = n("./src/chat/actions/theme.ts"),
				Mt = n("./src/chat/constants/theme.ts"),
				At = n("./src/chat/models/Theme/index.ts");
			const Lt = {
				current: At.e[Mt.a],
				chatTheme: null,
				chatThemeKey: At.c.BASIC,
				chatPreviewThemeKey: At.c.BASIC,
				cached: {},
				isShowPrompt: !0,
				isShowSparkles: !0
			};
			var Dt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tt.GLOBAL_THEME_CHANGED:
							return e.current = At.e[t.payload.themeKey], {
								...e
							};
						case Tt.CHAT_THEME_CHANGED:
							return {
								...e, chatTheme: At.b[t.payload.themeKey], chatPreviewThemeKey: t.payload.themeKey
							};
						case Tt.CHAT_THEME_APPLIED:
							return {
								...e, chatThemeKey: t.payload.themeKey
							};
						case Tt.CHAT_THEME_CANCELED:
							return {
								...e, chatTheme: e.chatThemeKey ? At.b[e.chatThemeKey] : null, chatPreviewThemeKey: e.chatThemeKey
							};
						case Tt.CHAT_THEME_SETTINGS_CLICKED:
							return {
								...e, isShowPrompt: !1, isShowSparkles: !1
							};
						case Tt.CHAT_THEME_PROMPT_CLICKED:
							return {
								...e, isShowPrompt: !1
							};
						case Tt.CHAT_THEME_RESTORED:
							return {
								...e, chatTheme: At.b[t.payload.themeKey], chatThemeKey: t.payload.themeKey, chatPreviewThemeKey: t.payload.themeKey
							};
						case Tt.CHAT_THEME_SHOW_PROMPT_COUNT_SET:
							return {
								...e, isShowPrompt: t.payload <= Tt.MAX_SHOW_PROMPT_COUNT, isShowSparkles: t.payload <= Tt.MAX_SHOW_COLORED_SETTINGS
							};
						default:
							return e
					}
				},
				Ut = n("./src/chat/actions/toast.ts");
			const Pt = {
				toast: null,
				customErrorMessage: null
			};
			var Rt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Pt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ut.a:
							return Pt;
						case Ut.b: {
							const {
								toast: n,
								customErrorMessage: a
							} = t.payload;
							return {
								...e,
								toast: n,
								customErrorMessage: a
							}
						}
						default:
							return e
					}
				},
				Bt = n("./src/chat/actions/platform.ts"),
				Ht = n("./src/chat/actions/tooltip.ts");
			var Ft = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Ht.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case Ht.b:
						case Bt.a:
							return null;
						default:
							return e
					}
				},
				Gt = n("./src/chat/actions/typingIndicator.ts");
			const Vt = {
				usernames: []
			};

			function Wt(e, t) {
				return e === t || (0 === e.length && 0 === t.length || !(0 === e.length && t.length > 0) && (!(e.length > 0 && 0 === t.length) && (1 === e.length && 1 === t.length ? e[0] === t[0] : 2 === e.length && 2 === t.length ? e[0] === t[0] && e[1] === t[1] : 3 === e.length && 3 === t.length ? e[0] === t[0] && e[1] === t[1] && e[2] === t[2] : Ye()(e, t))))
			}
			var zt = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Gt.a: {
							const {
								usernames: n
							} = t.payload;
							return Wt(n, e.usernames) ? e : {
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
				Kt = n("./src/chat/actions/uploads/index.ts"),
				qt = n("./src/chat/models/Uploads/index.ts");
			const Zt = {};
			var Qt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zt,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Kt.a: {
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
					case Kt.c: {
						const {
							id: n,
							channelId: a,
							status: s
						} = t.payload;
						if (s === qt.c.Submit) return {
							[a]: []
						};
						if (s === qt.c.Canceled) {
							const t = new Set([...e[a] || []]);
							return {
								[a]: [...t.delete(n) && t || t]
							}
						}
						return e
					}
					case p.q: {
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
			var Yt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Kt.e:
						return t.payload.isDrop;
					case Ut.b:
					case Kt.a:
						return !1;
					default:
						return e
				}
			};
			var Xt = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case Kt.e:
						return t.payload.isOver;
					default:
						return e
				}
			};
			const Jt = {};
			Kt.c;
			var $t = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jt,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Kt.a: {
							const {
								upload: n
							} = t.payload;
							return {
								...e,
								[n.id]: {
									...n,
									status: qt.c.Pending
								}
							}
						}
						case Kt.c: {
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
						case Kt.b: {
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
				en = n("./src/chat/actions/uploads/prompt.ts");
			const tn = {
				count: 0
			};
			var nn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case en.a:
							return {
								count: t.payload
							};
						default:
							return e
					}
				},
				an = Object(a.c)({
					activeUploads: Qt,
					isDrop: Yt,
					isOver: Xt,
					models: $t,
					prompt: nn
				}),
				sn = n("./src/lib/reducers/addAuthentication/index.ts");
			var cn = Object(sn.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case X.a: {
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
			}), null);
			const rn = {
				userSubredditChatEnabled: !1
			};
			var on = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rn,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case lt.a: {
						const {
							userSubredditChatEnabled: n
						} = t.payload || rn;
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
			const ln = {};
			var dn = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ln,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case X.d:
						return t.payload;
					default:
						return e
				}
			};
			const un = n("./src/lib/constants/index.ts").G;
			var hn = Object(sn.a)((function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : un,
					t = arguments.length > 1 ? arguments[1] : void 0;
				return t.type, e
			}), un);
			const mn = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var bn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case X.e:
							return t.payload;
						default:
							return e
					}
				},
				pn = n("./src/chat/actions/invitePolicy/index.ts"),
				gn = n("./src/chat/models/InvitePolicy/index.ts");
			const fn = {
				globalTheme: Mt.a,
				invitePolicy: gn.a.anybody
			};
			var On = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fn,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case Tt.GLOBAL_THEME_CHANGED: {
							const {
								themeKey: n
							} = t.payload;
							return {
								...e,
								globalTheme: n
							}
						}
						case pn.a:
						case pn.b: {
							const {
								invitePolicy: n
							} = t.payload;
							return {
								...e,
								invitePolicy: n
							}
						}
						default:
							return e
					}
				},
				vn = n("./src/chat/actions/session.ts");
			var En = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case vn.a:
					case vn.c:
						return t.payload;
					case vn.b:
						return null;
					default:
						return e
				}
			};
			var jn = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case X.f:
							return t.payload;
						default:
							return e
					}
				},
				_n = Object(a.c)({
					account: cn,
					chatExperiments: on,
					experiments: dn,
					language: hn,
					loid: bn,
					prefs: On,
					session: En,
					sessionTracker: jn
				}),
				Cn = n("./src/lib/activeUserCountByLiveChatId/reducers/index.ts");
			const In = {
				channels: Y,
				contacts: me,
				container: fe,
				experiments: Ce,
				inviteLinkSettings: we,
				gifs: xe,
				members: Ue,
				messages: et,
				reactionsList: ct,
				meta: tt.b,
				platform: nt.b,
				renameGroupChat: it,
				sendbird: _t,
				settingsDropdown: yt,
				sidebar: wt,
				themes: Dt,
				toast: Rt,
				tooltipId: Ft,
				typingIndicator: zt,
				user: _n,
				uploads: an,
				activeUserCountByLiveChatId: Cn.a,
				lastAction: kt.a
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
				region: "",
				city: "",
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
				return c
			}));
			var a = n("./node_modules/history/esm/history.js"),
				s = n("./src/chat/actions/platform.ts");
			const c = {
					currentPage: null,
					referrers: {},
					metas: {}
				},
				r = (e, t) => ({
					key: e,
					locationState: {},
					queryParams: {},
					routeMatch: null,
					status: 404,
					url: t,
					urlParams: {}
				}),
				o = (e, t, n, a) => {
					const {
						action: s,
						...c
					} = n.route;
					return {
						key: e,
						locationState: a.state,
						meta: n.route.meta,
						queryParams: n.match.queryParams,
						routeMatch: {
							...n,
							route: c
						},
						status: 200,
						url: t,
						urlParams: n.match.params
					}
				};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a: {
						if (!t.payload) return e;
						const n = e.currentPage,
							s = t.payload,
							{
								routeMatch: c,
								location: i
							} = s,
							{
								key: l
							} = i;
						if (void 0 === l) return e;
						const d = Object(a.e)(i),
							u = c ? o(l, d, c, i) : r(l, d);
						let {
							referrers: h
						} = e;
						if ("PUSH" === s.action) {
							const e = n && n.url || "";
							h = {
								...h,
								[l]: e
							}
						}
						return {
							...e,
							referrers: h,
							currentPage: u
						}
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
						return {
							...e,
							metas: {
								...e.metas,
								[n]: {
									description: s,
									icon: c,
									title: a,
									type: r
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
					chunk: s.u.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Sb.CHAT
					},
					path: ["/chat", "/chat/"]
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
					chunk: s.u.CHAT_EMPTY,
					component: l,
					exact: !0,
					meta: {
						name: s.Sb.CHAT_EMPTY
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
					chunk: s.u.CHAT_MINIMIZE,
					component: u,
					exact: !0,
					meta: {
						name: s.Sb.CHAT_MINIMIZE
					},
					path: "/chat/minimize/"
				},
				m = ["/chat", "/chat/", "/chat/:action(share|share_new)/", "/chat/channel/:action(create)/", "/chat/channel/:channelId/:action(block|hide|delete|invite|invite_link_settings|themes|invited|kick|about|leave|privacy_support|nsfw|report|start_group)?/:attr(invite|message|user)?/:attrId?"],
				b = {
					action: c.a,
					chunk: s.u.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Sb.CHAT
					},
					path: m
				},
				p = {
					action: c.a,
					chunk: s.u.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Sb.CHAT
					},
					path: "/chat/livechat/:postId/"
				},
				g = ["/chat/user_id/:userIds/"],
				f = {
					action: c.e,
					chunk: s.u.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Sb.CHAT
					},
					path: g
				},
				O = {
					action: c.d,
					chunk: s.u.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Sb.CHAT
					},
					path: ["/chat/share"]
				};
			t.b = [i, d, h, b, f, O, p]
		},
		"./src/chat/routes/index.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/constants/index.ts");
			var s = {
				action: n("./src/chat/actions/page.ts").b,
				chunk: a.u.CHAT,
				exact: !0,
				meta: {
					name: a.Sb.CHAT
				},
				path: "/chat(.*)"
			};
			const c = [...n("./src/chat/routes/chat.ts").b, s];
			t.a = c
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
				return b
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "f", (function() {
				return g
			}));
			var a = n("./node_modules/lodash/values.js"),
				s = n.n(a),
				c = n("./node_modules/reselect/es/index.js");
			const r = e => e.gifs,
				o = Object(c.a)(r, e => s()(e.models)),
				i = Object(c.a)(r, e => e.search.inputQuery),
				l = Object(c.a)(r, i, (e, t) => {
					var n;
					const a = null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.ids;
					return (null == a ? void 0 : a.length) ? a : []
				}),
				d = Object(c.a)(r, e => Boolean(e.trending.modelIds.length)),
				u = Object(c.a)(r, l, i, (e, t, n) => {
					var a, s;
					return !n || n && !t.length && !(null === (a = e.search.models[n]) || void 0 === a ? void 0 : a.pending) ? e.trending.modelIds : n && t.length ? t : n && !t.length && (null === (s = e.search.models[n]) || void 0 === s ? void 0 : s.pending) ? [] : void 0
				}),
				h = Object(c.a)(o, u, (e, t) => {
					if (t) return e.filter(e => t.includes(e.id))
				}),
				m = Object(c.a)(r, i, (e, t) => {
					var n, a;
					let s = null === (n = e.trending.api) || void 0 === n ? void 0 : n.pending;
					return t && (s = null === (a = e.search.models[t]) || void 0 === a ? void 0 : a.pending), s
				}),
				b = Object(c.a)(r, i, (e, t) => {
					var n;
					return t ? null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.hasError : e.trending.api.hasError
				}),
				p = Object(c.a)(r, i, (e, t) => {
					var n;
					return null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.pageInfo.hasNextPage
				}),
				g = Object(c.a)(r, i, (e, t) => {
					var n, a;
					return Boolean(t && (null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.pending) && (null === (a = e.search.models[t]) || void 0 === a ? void 0 : a.ids.length))
				})
		},
		"./src/chat/selectors/reactions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/reselect/es/index.js"),
				s = n("./src/chat/selectors/sendbird.ts");
			const c = e => e.reactionsList,
				r = Object(a.a)(e => (e => e.messages.reactions)(e), (e, t) => t, (e, t) => e[t] || []),
				o = e => {
					const t = c(e).selectedMessageId;
					if (t) return t
				},
				i = e => {
					const t = c(e).models;
					return Object.keys(t).map(e => t[e])
				},
				l = (e, t) => {
					return {
						url: Object(s.a)(e) + t,
						key: t
					}
				}
		},
		"./src/chat/selectors/richUnits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var a = n("./src/chat/constants/messages.ts"),
				s = n("./src/chat/models/RichUnit/index.ts");
			const c = (e, t) => {
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
				r = (e, t) => {
					if (t.type === a.c.COMMENT || t.type === a.c.POST || t.type === a.c.USER_POST || t.type === a.c.SUBREDDIT) {
						const n = {
							type: t.type,
							value: t.chatUnitId
						};
						return c(e, n)
					}
				},
				o = e => e.messages.richUnits.dataReceived,
				i = (e, t) => c(e, t)
		},
		"./src/chat/selectors/sendbird.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const a = e => e.sendbird.sdk.connectionStatus,
				s = e => e.sendbird.sdk.initialized,
				c = e => e.sendbird.proxy.host,
				r = e => e.sendbird.session,
				o = e => e.sendbird.session.active,
				i = e => {
					const t = e.sendbird.reactions.reactions;
					if (t) return Object.keys(t).map(e => t[e])
				},
				l = e => e.sendbird.reactions.mediaHost
		},
		"./src/chat/selectors/tooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/reselect/es/index.js");
			const s = e => t => t.tooltipId === e,
				c = Object(a.a)(e => e.tooltipId, e => e)
		},
		"./src/chat/singleton/SendbirdSDK.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return G
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/config.ts"),
				s = n("./node_modules/lodash/noop.js"),
				c = n.n(s),
				r = n("./node_modules/promise-retry/index.js"),
				o = n.n(r),
				i = n("./node_modules/sendbird/SendBird.min.js"),
				l = n.n(i),
				d = n("./node_modules/timers-browserify/main.js"),
				u = n("./src/lib/constants/index.ts"),
				h = n("./src/lib/sentry/index.ts"),
				m = n("./src/chat/actions/channel.ts"),
				b = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./src/chat/constants/channels.ts"),
				g = n("./src/chat/helpers/urls/index.ts"),
				f = n("./src/chat/selectors/channels.ts");
			const O = e => async (t, n) => {
				const a = n(),
					s = Object(f.A)(a);
				if (t(Object(m.L)({
						channelId: e
					})), s && s.channelId === e) {
					const n = Object(g.getRedirectURL)(Object(g.channelAction)(e, p.a.DENY));
					t(Object(b.b)(n))
				}
			};
			var v = n("./src/chat/selectors/user.ts");
			const E = (e, t) => async (n, a) => {
				const s = a(),
					{
						channelId: c
					} = e,
					r = Object(f.B)(s),
					o = Object(v.a)(s);
				if (t === o && (n(Object(m.K)(c)), c === r)) {
					const e = Object(g.getRedirectURL)(Object(g.channelAction)(c, p.a.DENY));
					n(Object(b.b)(e))
				}
			};
			var j = n("./src/chat/actions/message/index.ts"),
				_ = n("./src/chat/actions/message/reactions.ts"),
				C = n("./src/chat/actions/sendbird/index.ts"),
				I = n("./src/chat/actions/sendbird/sdk.ts"),
				y = n("./src/chat/actions/session.ts"),
				x = n("./src/chat/actions/toast.ts"),
				S = n("./src/chat/actions/typingIndicator.ts"),
				N = n("./src/chat/constants/batchSizes.ts"),
				w = n("./src/chat/constants/messages.ts"),
				k = n("./src/chat/constants/sendbird.ts"),
				T = n("./src/chat/constants/toast.ts"),
				M = n("./src/chat/helpers/errors.ts"),
				A = n("./src/chat/models/Channel/index.ts"),
				L = n("./src/chat/models/Channel/utils.ts"),
				D = n("./src/chat/models/Message/index.ts"),
				U = n("./src/chat/models/MessageReaction/index.ts"),
				P = n("./src/chat/models/User/member.ts");
			const R = 2,
				B = 1e3,
				H = 100,
				F = 200;
			const G = new class {
				constructor() {
					var e = this;
					this.dispatch = c.a, this.channels = {}, this.channelUniqueHandlerID = [], this.connectionUniqueHandlerID = [], this.connect = async (e, t, n, a) => {
						const s = `https://${e}`,
							c = `wss://${e}`;
						if (!this.isConnected()) return this.dispatch = a, this.onSessionUpdate(), o()(async e => {
							try {
								const e = await this.self.connect(n, t, s, c);
								return this.toggleUpdateListeners(!0), e
							} catch (a) {
								e(a)
							}
						}, {
							minTimeout: H,
							maxTimeout: F,
							randomize: !0,
							retries: R
						})
					}, this.disconnect = async () => {
						this.isConnected() && (this.toggleUpdateListeners(!1), await this.self.disconnect())
					}, this.reconnect = async function() {
						let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						e.dispatch(Object(x.g)({
							toast: T.a.ConnectionPending
						})), t && (await e.disconnect(), await e.dispatch(Object(y.d)())), await e.dispatch(Object(C.l)()), e.dispatch(Object(C.k)())
					}, this.switchChannel = async (e, t) => {
						if (this.channel = e, t) return;
						this.channelMembersQuery = this.channel.createMemberListQuery(), this.memberListQuery = this.channel.createMemberListQuery();
						return await this.getPreviousMessages(!0)
					}, this.enterChannel = async (e, t, n) => {
						if (this.isConnected()) {
							const {
								channelId: a
							} = e, s = this.channels[a];
							if (s && !t) {
								return {
									previousMessagesData: await this.switchChannel(s, n)
								}
							}
							const c = await this.getChannelByChannelId(a);
							if (c) {
								this.channels[a] = c;
								const t = Object(A.j)(c);
								return this.updatePartialChannelModel(t, e.channelState), {
									previousMessagesData: await this.switchChannel(c, n)
								}
							}
						}
						return {}
					}, this.hideChannel = async () => {
						if (this.channel) {
							const e = !1,
								t = !0;
							await this.channel.hide(e, t)
						}
					}, (this.self = new l.a({
						appId: a.a.sendbirdAppId
					})).Options.typingIndicatorThrottle = B
				}
				isConnected() {
					return !!this.self.currentUser
				}
				toggleUpdateListeners(e) {
					e ? (this.onChannelChanged(), this.onChannelHidden(), this.onChannelDeleted(), this.onChannelMuted(), this.onChannelUnmuted(), this.onChannelLocked(), this.onChannelUnlocked(), this.onReceiveInvite(), this.onReceiveMessage(), this.onUpdateMessage(), this.onDeleteMessage(), this.onUserActions(), this.onUserKicked(), this.onTypingStatusUpdated(), this.onReactionUpdated(), this.onReconnectStarted(), this.onReconnectSucceeded(), this.onReconnectFailed()) : (this.channelUniqueHandlerID.length && this.channelUniqueHandlerID.forEach(e => {
						this.self.removeChannelHandler(e)
					}), this.connectionUniqueHandlerID.length && this.channelUniqueHandlerID.forEach(e => {
						this.self.removeConnectionHandler(e)
					}))
				}
				onSessionUpdate() {
					const e = new this.self.SessionHandler;
					e.onSessionClosed = () => {
						this.reconnect(!0)
					}, e.onSessionError = () => {
						this.reconnect(!0)
					}, this.self.setSessionHandler(e)
				}
				onReconnectStarted() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: k.b.Pending
						},
						n = {
							toast: T.a.ConnectionPending
						};
					e.onReconnectStarted = () => {
						this.dispatch(Object(I.h)(t)), this.dispatch(Object(x.g)(n))
					}, this.self.addConnectionHandler("CONNECTION_CHANGE", e), this.connectionUniqueHandlerID.push("CONNECTION_CHANGE")
				}
				onReconnectSucceeded() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: k.b.Open
						};
					e.onReconnectSucceeded = () => {
						this.dispatch(Object(I.h)(t)), this.dispatch(Object(x.g)({
							toast: T.a.ConnectionOpen
						})), Object(d.setTimeout)(() => this.dispatch(Object(x.d)()), 3 * u.Xb);
						this.dispatch(Object(j.v)(!0)), this.dispatch(Object(m.D)())
					}, this.self.addConnectionHandler("RECONNECT_SUCCEEDED", e), this.connectionUniqueHandlerID.push("RECONNECT_SUCCEEDED")
				}
				onReconnectFailed() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: k.b.Closed
						};
					e.onReconnectFailed = () => {
						this.dispatch(Object(I.h)(t)), this.dispatch(Object(x.g)({
							toast: T.a.ConnectionClosed
						}))
					}, this.self.addConnectionHandler("RECONNECT_FAILED", e), this.connectionUniqueHandlerID.push("RECONNECT_FAILED")
				}
				onReceiveInvite() {
					const e = new this.self.ChannelHandler;
					e.onUserReceivedInvitation = e => {
						const t = Object(A.j)(e);
						this.dispatch(Object(m.V)(t))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_INVITE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_INVITE")
				}
				onReceiveMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageReceived = (e, t) => {
						const n = Object(A.j)(e);
						this.dispatch(Object(m.U)(n));
						const a = Object(D.c)(t);
						a && this.dispatch(Object(j.x)(a))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_MESSAGE")
				}
				onUpdateMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageUpdated = (e, t) => {
						const n = Object(A.j)(e);
						this.dispatch(Object(m.U)(n));
						const a = Object(D.c)(t);
						a && this.dispatch(Object(j.x)(a))
					}, this.self.addChannelHandler("UPDATE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("UPDATE_CHANNEL_MESSAGE")
				}
				onDeleteMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageDeleted = (e, t) => {
						this.dispatch(Object(j.y)(t))
					}, this.self.addChannelHandler("DELETE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("DELETE_CHANNEL_MESSAGE")
				}
				onTypingStatusUpdated() {
					const e = new this.self.ChannelHandler;
					e.onTypingStatusUpdated = e => {
						const t = Object(L.f)(e.url),
							n = e.getTypingMembers().map(e => e.nickname);
						this.dispatch(Object(S.b)({
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
							const t = Object(A.j)(e);
							this.dispatch(Object(m.V)(t, !0))
						}, this.self.addChannelHandler(s, a), this.channelUniqueHandlerID.push(s)
					})
				}
				onReactionUpdated() {
					const e = new this.self.ChannelHandler;
					e.onReactionUpdated = (e, t) => {
						const n = Object(A.j)(e);
						this.dispatch(Object(_.b)({
							channelSendbirdId: n.channelId,
							messageSendbirdId: t.messageId,
							reactionIconKey: t.key,
							type: U.a[t.operation.toUpperCase()],
							userId: t.userId
						}, !0))
					}, this.self.addChannelHandler("ON_REACTION_UPDATED", e), this.channelUniqueHandlerID.push("ON_REACTION_UPDATED")
				}
				onChannelChanged() {
					const e = new this.self.ChannelHandler;
					e.onChannelChanged = e => {
						const t = Object(A.j)(e);
						this.dispatch(Object(m.V)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_CHANGED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_CHANGED")
				}
				onChannelHidden() {
					const e = new this.self.ChannelHandler;
					e.onChannelHidden = e => {
						Object(L.b)(void 0, e.myMemberState) === p.b.INVITED && this.dispatch(Object(m.K)(Object(L.f)(e.url)))
					}, this.self.addChannelHandler("ON_CHANNEL_HIDDEN", e), this.channelUniqueHandlerID.push("ON_CHANNEL_HIDDEN")
				}
				onChannelDeleted() {
					const e = new this.self.ChannelHandler;
					e.onChannelDeleted = e => {
						const t = Object(L.f)(e);
						this.dispatch(O(t))
					}, this.self.addChannelHandler("ON_CHANNEL_DELETED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_DELETED")
				}
				onChannelMuted() {
					const e = new this.self.ChannelHandler;
					e.onUserMuted = e => {
						const t = Object(A.j)(e);
						this.dispatch(Object(m.V)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_MUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_MUTED")
				}
				onChannelUnmuted() {
					const e = new this.self.ChannelHandler;
					e.onUserUnmuted = e => {
						const t = Object(A.j)(e);
						this.dispatch(Object(m.V)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNMUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNMUTED")
				}
				onChannelLocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelFrozen = e => {
						const t = Object(A.j)(e);
						this.dispatch(Object(m.V)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_LOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_LOCKED")
				}
				onChannelUnlocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelUnfrozen = e => {
						const t = Object(A.j)(e);
						this.dispatch(Object(m.V)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNLOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNLOCKED")
				}
				updatePartialChannelModel(e, t) {
					const {
						PARTIAL: n,
						UNSORTED: a
					} = p.b;
					t === n && e.channelState === a && (e.channelState = n, this.dispatch(Object(m.W)(e)))
				}
				getChannelByChannelId(e) {
					return new Promise((t, n) => {
						const a = Object(L.a)(e);
						this.self.GroupChannel.getChannel(a, (e, a) => {
							a ? n(a) : t(e)
						})
					})
				}
				addChannelModelByChannelId(e) {
					return new Promise((t, n) => {
						this.getChannelByChannelId(e).then(e => {
							if (!e) return t();
							const n = Object(A.j)(e);
							if (!n) return t();
							this.dispatch(Object(m.W)(n)), t(n)
						}).catch(e => {
							n(e)
						})
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
						const n = Object(A.j)(e);
						n && this.dispatch(E(n, t.userId))
					}, this.self.addChannelHandler("CHANNEL_USER_KICKED", e), this.channelUniqueHandlerID.push("CHANNEL_USER_KICKED")
				}
				getExistingChannels(e) {
					return new Promise((t, n) => {
						let a;
						if (e === p.b.INVITED ? this.channelListQueryInvited ? a = this.channelListQueryInvited : (this.channelListQueryInvited = this.self.GroupChannel.createMyGroupChannelListQuery(), a = this.channelListQueryInvited) : e === p.b.JOINED && (this.channelListQueryJoined ? a = this.channelListQueryJoined : (this.channelListQueryJoined = this.self.GroupChannel.createMyGroupChannelListQuery(), a = this.channelListQueryJoined)), a)
							if (a.includeEmpty = !0, a.limit = N.a.Channels, a.order = p.d.LATEST_MESSAGE, a.memberStateFilter = e === p.b.INVITED ? p.i.INVITED : p.i.JOINED, a.superChannelFilter = "all", a.customTypesFilter = ["direct", "group"], a.hasNext) {
								const e = a._token;
								a.next((n, s) => {
									if (!s && a) {
										let s = a.hasNext;
										const c = a._token;
										a && e && c && e === c && (s = !1, h.c.withScope(t => {
											t.setExtra("info", {
												query: JSON.stringify(a),
												currentNextToken: e,
												undatedNextToken: c
											}), h.c.captureMessage("Chat paging request infinite looping!")
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
				searchMemberByName(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return new Promise((n, a) => {
						if (!this.channel) return a(new Error("this.channel is null or undefined"));
						this.memberListQuery = this.channel.createMemberListQuery(), this.memberListQuery ? (this.memberListQuery.nicknameStartsWithFilter = e, this.memberListQuery.next((a, s) => {
							const c = Object(P.b)(a),
								r = c.filter(n => t && n && n.name === e || !t && n);
							c.length && this.dispatch(Object(C.h)(c)), n(r)
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
						e && this.createPreviousMessageListQuery(), this.channel && this.prevMessageListQuery ? (this.prevMessageListQuery.reverse = !0, this.prevMessageListQuery.limit = N.a.Messages, this.prevMessageListQuery.includeReactions = !0, this.prevMessageListQuery.load((e, a) => {
							if (!a && this.prevMessageListQuery) {
								const n = {},
									{
										hasMore: a
									} = this.prevMessageListQuery;
								e.forEach(e => {
									const t = Object(D.c)(e);
									t && (n[t.messageId] = t)
								}), t({
									messages: n,
									hasMore: a
								})
							} else Object(M.b)(`Error with getting previous messages from Sendbird: ${a}`), n()
						})) : (Object(M.b)("Sendbird channel does not exist"), n())
					})
				}
				addMessage(e, t) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
					return new Promise((a, s) => {
						if (this.channel) {
							const c = new(0, this.self.UserMessageParams);
							c.data = t, c.message = e, n && n.length && (c.mentionType = w.b.USERS, c.mentionedUserIds = n), this.channel.sendUserMessage(c, (e, t) => {
								if (t) Object(M.b)(`Error with sending the message to Sendbird: ${t}`), s(t);
								else {
									const t = Object(D.c)(e);
									if (t && t.messageType === w.d.USER) return a(t);
									Object(M.b)(`Unsupported message type: ${t&&t.messageType}`), s()
								}
							})
						}
					})
				}
				createPreviousMessageListQuery() {
					this.channel && (this.prevMessageListQuery = this.channel.createPreviousMessageListQuery())
				}
				addReaction(e, t) {
					return new Promise(n => {
						if (this.channel) {
							const a = e;
							this.channel.addReaction(a, t, (e, t) => {
								t ? Object(M.b)(`Error with adding reactions to the message on Sendbird: ${t}`) : n(e)
							})
						}
					})
				}
				deleteMessage(e) {
					return new Promise(t => {
						if (this.channel) {
							const n = e;
							this.channel.deleteMessage(n, (e, n) => {
								n ? Object(M.b)(`Error with deleting the message on Sendbird: ${n}`) : t(e)
							})
						}
					})
				}
				getFirstMessage() {
					return new Promise((e, t) => {
						this.channel ? this.channel.getNextMessagesByTimestamp(0, !0, 1, !0, "", "", (t, n) => {
							n ? Object(M.b)(`Error with getting first message from Sendbird: ${n}`) : e(t)
						}) : (Object(M.b)("Sendbird channel does not exist"), t())
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
			t.a = G
		},
		"./src/chat/tracking/events/chatView.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return f
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "s", (function() {
				return j
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "j", (function() {
				return w
			})), n.d(t, "v", (function() {
				return k
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "h", (function() {
				return M
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "g", (function() {
				return L
			})), n.d(t, "n", (function() {
				return D
			})), n.d(t, "l", (function() {
				return U
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "c", (function() {
				return R
			}));
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/selectors/channels.ts"),
				c = n("./src/chat/selectors/liveChat/index.ts"),
				r = n("./src/chat/selectors/telemetry.ts"),
				o = n("./src/chat/tracking/fields/actionInfo.ts"),
				i = n("./src/chat/tracking/fields/chat.ts"),
				l = n("./src/chat/tracking/fields/common.ts"),
				d = n("./src/chat/constants/messages.ts"),
				u = n("./src/chat/selectors/messages.ts"),
				h = n("./src/chat/selectors/uploads.ts");
			const m = (e, t) => {
					var n, a, s, c, r;
					const o = Object(u.c)(e, t);
					return o && o.type === d.c.GIF ? {
						id: null === (n = o.gif) || void 0 === n ? void 0 : n.id,
						caption: null === (a = o.gif) || void 0 === a ? void 0 : a.title,
						url: null === (s = o.gif) || void 0 === s ? void 0 : s.url,
						width: null === (c = o.gif) || void 0 === c ? void 0 : c.width,
						height: null === (r = o.gif) || void 0 === r ? void 0 : r.height
					} : {}
				},
				b = (e, t, n) => {
					var a;
					const s = n || Object(u.c)(e, t),
						c = Object(h.c)(e, null == s ? void 0 : s.clientMessageId);
					return {
						reason: (null == c ? void 0 : c.source) && String(c.source) || void 0,
						type: (null === (a = null == c ? void 0 : c.metadata) || void 0 === a ? void 0 : a.mimetype) && String(c.metadata.mimetype).toLowerCase() || void 0
					}
				};
			var p = n("./src/chat/tracking/fields/subreddit.ts"),
				g = n("./src/chat/tracking/sendEvent.ts");
			const f = e => Object(g.a)({
					noun: "chat",
					source: a.b.ChatView,
					action: a.a.View,
					chat: {
						...Object(i.z)(e),
						...Object(i.p)(e),
						...Object(i.f)(e),
						...Object(i.r)(e),
						...Object(i.k)(e),
						...Object(i.x)(e)
					},
					...Object(l.a)(e)
				}),
				O = (e, t) => {
					const n = Object(c.c)(e, t);
					if (!n) return;
					const s = null == n ? void 0 : n.post;
					Object(g.a)({
						noun: "chat_tab_item",
						source: a.b.ChatTab,
						action: a.a.View,
						chat: Object(i.E)(e, s.id),
						post: {
							id: s.id
						},
						subreddit: Object(p.a)(n),
						...Object(l.a)(e),
						actionInfo: {
							...Object(o.d)(n),
							...Object(o.c)(e, n),
							...Object(o.a)(),
							...Object(o.b)(e)
						}
					})
				},
				v = e => {
					const t = Object(s.q)(e);
					if (!t) return;
					const n = null == t ? void 0 : t.post;
					Object(g.a)({
						noun: "chat_tab_item",
						source: a.b.ChatTab,
						action: a.a.Click,
						chat: Object(i.E)(e, n.id),
						post: {
							id: n.id
						},
						subreddit: Object(p.a)(t),
						...Object(l.a)(e),
						actionInfo: {
							...Object(o.d)(t),
							...Object(o.c)(e, t),
							...Object(o.a)(),
							...Object(o.b)(e)
						}
					})
				},
				E = (e, t) => {
					const {
						messageId: n,
						messageData: s,
						sender: c
					} = t;
					Object(g.a)({
						noun: "chat_message",
						source: a.b.ChatView,
						action: a.a.Submit,
						chat: {
							...Object(i.z)(e),
							...Object(i.p)(e),
							...Object(i.f)(e),
							...Object(i.r)(e, 0),
							...Object(i.n)(e, n, s),
							...Object(i.w)(e, n, c),
							...Object(i.x)(e)
						},
						media: {
							...m(e, n)
						},
						...Object(l.a)(e),
						actionInfo: {
							...Object(r.a)(e),
							...b(e, n, s)
						}
					})
				},
				j = (e, t, n) => {
					Object(g.a)({
						noun: "chat_message_failed",
						source: a.b.ChatView,
						action: a.a.View,
						chat: {
							...Object(i.z)(e),
							...Object(i.p)(e),
							...Object(i.f)(e),
							...Object(i.r)(e, 0),
							...Object(i.s)(e, t),
							...Object(i.w)(e),
							...Object(i.x)(e),
							...Object(i.l)(e, t)
						},
						...Object(l.a)(e),
						actionInfo: {
							reason: n,
							...Object(r.a)(e)
						}
					})
				},
				_ = (e, t, n) => {
					Object(g.a)({
						noun: "report_message",
						source: a.b.ChatView,
						action: a.a.Submit,
						chat: {
							...Object(i.z)(e),
							...Object(i.p)(e),
							...Object(i.f)(e),
							...Object(i.r)(e, 0),
							...Object(i.m)(t),
							...Object(i.n)(e, t),
							...Object(i.u)(n),
							...Object(i.w)(e, t),
							...Object(i.x)(e)
						},
						...Object(l.a)(e)
					})
				},
				C = e => {
					Object(g.a)({
						noun: "history",
						source: a.b.ChatView,
						action: a.a.View,
						chat: {
							...Object(i.z)(e),
							...Object(i.p)(e),
							...Object(i.f)(e),
							...Object(i.x)(e)
						},
						...Object(l.a)(e)
					})
				},
				I = (e, t, n, s) => {
					Object(g.a)({
						noun: "quick_response",
						source: a.b.ChatView,
						action: a.a.Click,
						chat: {
							...Object(i.z)(e),
							...Object(i.p)(e),
							...Object(i.f)(e),
							...Object(i.x)(e)
						},
						...Object(l.a)(e),
						actionInfo: {
							...Object(r.a)(e),
							reason: s,
							position: t,
							paneName: n
						}
					})
				},
				y = (e, t) => {
					Object(g.a)({
						noun: "gif",
						source: a.b.Chat,
						action: a.a.Search,
						chat: {
							...Object(i.z)(e),
							...Object(i.p)(e),
							...Object(i.f)(e)
						},
						...Object(l.a)(e),
						actionInfo: {
							...Object(r.a)(e),
							settingValue: t
						}
					})
				},
				x = e => {
					Object(g.a)({
						noun: "prompt_theme",
						source: a.b.Chat,
						action: a.a.View,
						chat: {
							...Object(i.z)(e),
							...Object(i.p)(e),
							...Object(i.f)(e)
						},
						...Object(l.a)(e)
					})
				},
				S = e => {
					Object(g.a)({
						noun: "all_invites",
						source: a.b.ChatView,
						action: a.a.Click,
						chat: {
							...Object(i.z)(e),
							...Object(i.f)(e)
						},
						...Object(l.a)(e)
					})
				},
				N = e => {
					Object(g.a)({
						noun: "all_invites",
						source: a.b.ChatView,
						action: a.a.View,
						chat: {
							...Object(i.z)(e),
							...Object(i.f)(e)
						},
						...Object(l.a)(e)
					})
				},
				w = (e, t) => {
					Object(g.a)({
						noun: "type_filter",
						source: a.b.ChatView,
						action: a.a.Click,
						chat: {
							...Object(i.z)(e),
							...Object(i.f)(e)
						},
						...Object(l.a)(e),
						actionInfo: {
							...Object(r.a)(e),
							type: t
						}
					})
				},
				k = e => {
					Object(g.a)({
						noun: "prompt_image",
						source: a.b.ChatView,
						action: a.a.View,
						chat: {
							...Object(i.z)(e),
							...Object(i.f)(e)
						},
						...Object(l.a)(e)
					})
				},
				T = e => {
					Object(g.a)({
						noun: "share_chat",
						source: a.b.Chat,
						action: a.a.Click,
						chat: {
							...Object(i.z)(e),
							...Object(i.f)(e)
						},
						...Object(l.a)(e)
					})
				},
				M = e => {
					Object(g.a)({
						noun: "share_tooltip",
						source: a.b.Chat,
						action: a.a.Click,
						chat: {
							...Object(i.z)(e),
							...Object(i.f)(e)
						},
						...Object(l.a)(e)
					})
				},
				A = e => {
					Object(g.a)({
						noun: "reactions",
						source: a.b.Chat,
						action: a.a.Click,
						chat: {
							...Object(i.z)(e),
							...Object(i.f)(e)
						},
						...Object(l.a)(e)
					})
				},
				L = e => {
					Object(g.a)({
						noun: "reactions_menu",
						source: a.b.Chat,
						action: a.a.Click,
						chat: {
							...Object(i.z)(e),
							...Object(i.f)(e)
						},
						...Object(l.a)(e)
					})
				},
				D = (e, t, n, s, c) => {
					Object(g.a)({
						noun: "chat_message",
						source: a.b.ChatView,
						action: a.a.Submit,
						chat: {
							...Object(i.z)(e),
							...Object(i.f)(e),
							message_type: "reaction"
						},
						...Object(l.a)(e),
						actionInfo: {
							...Object(r.a)(e),
							settingValue: t,
							position: n,
							type: s,
							reason: "reaction",
							pageType: c
						}
					})
				},
				U = (e, t, n, s) => {
					Object(g.a)({
						noun: "message",
						source: a.b.Chat,
						action: a.a.Delete,
						chat: {
							...Object(i.z)(e),
							...Object(i.f)(e),
							message_type: "reaction"
						},
						...Object(l.a)(e),
						actionInfo: {
							...Object(r.a)(e),
							settingValue: t,
							position: n,
							type: s,
							reason: "reaction"
						}
					})
				},
				P = e => {
					Object(g.a)({
						noun: "start_chatting",
						source: a.b.ChatView,
						action: a.a.Click,
						...Object(l.a)(e)
					})
				},
				R = e => Object(g.a)({
					noun: "discover_live",
					source: a.b.LiveChat,
					action: a.a.Click,
					...Object(l.a)(e),
					actionInfo: {
						pageType: "home",
						paneName: "chat_tab_empty_state"
					}
				})
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
				c = n("./src/chat/tracking/fields/chat.ts"),
				r = n("./src/chat/tracking/fields/common.ts");
			const o = e => {
					Object(a.a)({
						noun: "contacts",
						source: s.b.ContactsList,
						action: s.a.View,
						chat: {
							...Object(c.b)(e),
							...Object(c.c)(e)
						},
						...Object(r.a)(e)
					})
				},
				i = (e, t) => {
					Object(a.a)({
						noun: "contact_add",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: {
							...Object(c.d)(e),
							...Object(c.a)(e, t),
							...Object(c.b)(e),
							...Object(c.f)(e),
							...Object(c.e)(e),
							...Object(c.A)(e, t)
						},
						...Object(r.a)(e)
					})
				},
				l = e => {
					Object(a.a)({
						noun: "alert_invalid_user",
						source: s.b.ContactsList,
						action: s.a.View,
						chat: {
							...Object(c.z)(e),
							...Object(c.b)(e),
							...Object(c.c)(e),
							...Object(c.f)(e),
							...Object(c.A)(e, "search"),
							...Object(c.e)(e)
						},
						...Object(r.a)(e)
					})
				},
				d = (e, t) => {
					Object(a.a)({
						noun: "alert_invalid_channel",
						source: s.b.ContactsList,
						action: s.a.View,
						chat: {
							...Object(c.z)(e),
							...Object(c.b)(e),
							...Object(c.c)(e),
							...Object(c.f)(e),
							...Object(c.A)(e, t),
							...Object(c.e)(e)
						},
						...Object(r.a)(e)
					})
				},
				u = (e, t) => {
					Object(a.a)({
						noun: "create_chat",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: {
							...Object(c.z)(e, t),
							...Object(c.b)(e),
							...Object(c.c)(e),
							...Object(c.f)(e, t),
							...Object(c.e)(e)
						},
						...Object(r.a)(e)
					})
				},
				h = e => {
					Object(a.a)({
						noun: "close_contacts",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: {
							...Object(c.d)(e),
							...Object(c.b)(e),
							...Object(c.c)(e),
							...Object(c.f)(e),
							...Object(c.e)(e)
						},
						...Object(r.a)(e)
					})
				},
				m = e => {
					Object(a.a)({
						noun: "add_to_chat",
						source: s.b.ContactsList,
						action: s.a.Click,
						chat: {
							...Object(c.z)(e),
							...Object(c.p)(e),
							...Object(c.f)(e),
							...Object(c.c)(e),
							...Object(c.e)(e)
						},
						...Object(r.a)(e)
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
				return b
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "i", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/selectors/telemetry.ts"),
				c = n("./src/chat/tracking/fields/chat.ts"),
				r = n("./src/chat/tracking/fields/common.ts"),
				o = n("./src/chat/tracking/sendEvent.ts");
			const i = e => Object(o.a)({
					noun: "invitation",
					source: a.b.InvitationInbox,
					action: a.a.View,
					chat: {
						...Object(c.i)(e),
						...Object(c.j)(e),
						...Object(c.g)(e),
						...Object(c.h)(e),
						...Object(c.p)(e)
					},
					...Object(r.a)(e)
				}),
				l = (e, t, n) => Object(o.a)({
					noun: "invitation_accept",
					source: a.b.InvitationInbox,
					action: a.a.Click,
					chat: {
						...Object(c.i)(e),
						...Object(c.j)(e),
						...Object(c.g)(e),
						...Object(c.h)(e),
						...Object(c.p)(e)
					},
					goldPurchase: {
						awardId: t
					},
					...Object(r.a)(e),
					actionInfo: {
						...Object(r.a)(e).actionInfo,
						reason: n
					}
				}),
				d = (e, t, n) => Object(o.a)({
					noun: "invitation_decline",
					source: a.b.InvitationInbox,
					action: a.a.Click,
					chat: {
						...Object(c.i)(e),
						...Object(c.j)(e),
						...Object(c.g)(e),
						...Object(c.h)(e),
						...Object(c.p)(e)
					},
					goldPurchase: {
						awardId: t
					},
					...Object(r.a)(e),
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
						...Object(c.i)(e),
						...Object(c.j)(e),
						...Object(c.g)(e),
						...Object(c.h)(e),
						...Object(c.p)(e)
					},
					...Object(r.a)(e)
				}),
				h = (e, t, n) => Object(o.a)({
					noun: "spam",
					source: a.b.InvitationInbox,
					action: a.a.Click,
					chat: {
						id: t,
						message_id: n,
						...Object(c.i)(e),
						...Object(c.j)(e),
						...Object(c.g)(e),
						...Object(c.h)(e),
						...Object(c.p)(e)
					},
					...Object(r.a)(e)
				}),
				m = e => Object(o.a)({
					noun: "invitation_view_member",
					source: a.b.InvitationInbox,
					action: a.a.Click,
					chat: {
						...Object(c.i)(e),
						...Object(c.j)(e),
						...Object(c.g)(e),
						...Object(c.h)(e),
						...Object(c.p)(e)
					},
					...Object(r.a)(e)
				}),
				b = e => {
					Object(o.a)({
						noun: "expand",
						source: a.b.InvitationInbox,
						action: a.a.Click,
						...Object(r.a)(e)
					})
				},
				p = e => {
					Object(o.a)({
						noun: "collapse",
						source: a.b.InvitationInbox,
						action: a.a.Click,
						...Object(r.a)(e)
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
						...Object(r.a)(e)
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
						...Object(r.a)(e)
					})
				},
				v = (e, t, n) => {
					Object(o.a)({
						noun: "collapsed_message",
						source: a.b.Chat,
						action: a.a.Report,
						chat: {
							id: t,
							message_id: n
						},
						...Object(r.a)(e)
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
				c = n("./src/chat/tracking/fields/common.ts"),
				r = n("./src/chat/tracking/sendEvent.ts"),
				o = n("./src/telemetry/models/Event.ts");
			const i = e => {
					Object(r.a)({
						noun: "inbox",
						source: o.b.MessageInbox,
						action: o.a.View,
						chat: {
							...Object(s.o)(e),
							...Object(s.y)(e),
							...Object(s.q)(e)
						},
						...Object(c.a)(e)
					})
				},
				l = e => {
					Object(r.a)({
						noun: "create_chat",
						source: o.b.MessageInbox,
						action: o.a.Click,
						chat: {
							...Object(s.o)(e),
							...Object(s.y)(e),
							...Object(s.q)(e)
						},
						...Object(c.a)(e)
					})
				},
				d = e => {
					Object(r.a)({
						noun: "close_chat",
						source: o.b.MessageInbox,
						action: o.a.Click,
						chat: {
							...Object(s.o)(e),
							...Object(s.q)(e)
						},
						...Object(c.a)(e),
						actionInfo: {
							...Object(a.a)(e)
						}
					})
				},
				u = e => {
					Object(r.a)({
						noun: "minimize_chat",
						source: o.b.MessageInbox,
						action: o.a.Click,
						chat: {
							...Object(s.o)(e),
							...Object(s.q)(e)
						},
						...Object(c.a)(e),
						actionInfo: {
							...Object(a.a)(e)
						}
					})
				}
		},
		"./src/chat/tracking/fields/actionInfo.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			var a = n("./src/chat/models/Channel/index.ts"),
				s = n("./src/chat/selectors/channelsFilter.ts"),
				c = n("./src/chat/selectors/liveChat/index.ts"),
				r = n("./src/redditGQL/types.ts");
			const o = {
					[r.n.Previewed]: "recently_viewed",
					[r.n.Participated]: "engaged",
					[r.n.Unknown]: "unknown"
				},
				i = e => {
					return {
						reason: e.engagementType ? o[e.engagementType] : ""
					}
				},
				l = (e, t) => {
					const n = Object(c.e)(e).findIndex(e => e.post.id === t.post.id);
					return {
						position: -1 !== n ? n + 1 : n
					}
				},
				d = () => ({
					pageType: "live_chat"
				}),
				u = e => {
					var t;
					const n = Object(s.a)(e);
					return {
						paneName: null !== (t = a.d[n]) && void 0 !== t ? t : ""
					}
				}
		},
		"./src/chat/tracking/fields/subreddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = e => {
				var t, n, a, s;
				const c = null == e ? void 0 : e.post;
				return {
					name: null !== (n = null === (t = null == c ? void 0 : c.subreddit) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : "unknown subreddit name",
					id: null !== (s = null === (a = null == c ? void 0 : c.subreddit) || void 0 === a ? void 0 : a.id) && void 0 !== s ? s : "unknown subreddit id"
				}
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
			}
		},
		"./src/lib/constants/colors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = {
				alien500: "#3690ea",
				alien600: "#006dc6",
				berry300: "#e4abff",
				berry500: "#b44ac0",
				berry600: "#9c3cac",
				mango500: "#ffd635",
				mango600: "#ff6600",
				mint600: "#009eaa",
				narwhal100: "#f1f23f5",
				narwhal200: "#e9ebed",
				narwhal300: "#d4d7d9",
				narwhal600: "#989ca0",
				narwhal700: "#898d90",
				orangeRed600: "#fb133a",
				orangeRed700: "#be0039",
				orca50: "#5a5c5e",
				orca200: "#464748",
				orca300: "#3a3a3a",
				orca600: "#242424",
				orca700: "#1E1E1E",
				periwinkle300: "#94b3ff",
				periwinkle500: "#6a5cff",
				periwinkle600: "#5349da",
				sakura500: "#ff3881",
				error: "#ea0027",
				white: "#ffffff",
				black: "#000000",
				nightTone1: "#282829",
				nightTone2: "#343536",
				nightTone3: "#3A3A3C",
				nightTone4: "#D8DADC",
				nightTone5: "#1A232C",
				nightTone6: "#29292A"
			}
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
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/react/index.js");

			function s(e) {
				const t = Object(a.useRef)();
				return Object(a.useEffect)(() => {
					t.current = e
				}), t.current
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
				c = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const r = Object(a.freeze)({
				modifiers: []
			});

			function o(e) {
				let t = "object" == typeof e ? e : r;
				return Array.isArray(t.modifiers) || (t = Object(a.assoc)(t, "modifiers", r.modifiers)), t
			}

			function i(e) {
				const [t, n] = Object(s.useState)(null), [r, i] = Object(s.useState)(null), [l, d] = Object(s.useState)(null), [u, h] = Object(s.useState)(!1), m = Object(s.useCallback)(async () => h(!0), []), b = Object(s.useCallback)(() => h(!1), []), p = Object(s.useCallback)(() => h(!u), [u]), g = Object(s.useMemo)(() => {
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
					update: v
				} = Object(c.a)(t, r, g);
				return Object(s.useMemo)(() => ({
					arrowProps: {
						ref: d,
						style: O.arrow,
						...f.arrow
					},
					hide: b,
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
					toggle: p,
					visible: u,
					update: v
				}), [d, f, i, b, m, O, t, n, p, u, v])
			}
		},
		"./src/lib/intersectionObserver/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			let a;
			const s = new Map,
				c = new Map;
			"undefined" != typeof window && (n("./node_modules/intersection-observer/intersection-observer.js"), a = new IntersectionObserver(e => {
				e.forEach(e => {
					const t = e.target,
						n = e.intersectionRatio > 0;
					if (n !== !!c.get(t)) {
						c.set(t, n);
						const a = s.get(t);
						if (a) {
							a(e, n && !!c.get(t))
						}
					}
				})
			}, {
				threshold: [.001]
			}));
			const r = (e, t) => {
					try {
						s.set(e, t), a && a.observe(e)
					} catch (n) {
						0
					}
				},
				o = e => {
					try {
						s.delete(e), a && a.unobserve(e)
					} catch (t) {
						0
					}
				}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return C
			}));
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
				O = s()().tlds(r.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subredditFullUrl.config).add(o.g.subredditFull.prefix, o.g.subredditFullUrl.config),
				v = m.normalize;
			m.normalize = e => {
				v.call(m, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const E = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				j = e => {
					return [...g.match(e) || [], ...b.match(e) || []].map(e => !d(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				_ = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				C = e => {
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
		"./src/lib/notifications/token.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var a = n("./src/config.ts"),
				s = n("./src/redditGQL/operations/RegisterWebPushToken.json"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/lib/serviceWorker/index.ts"),
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
						return Object(c.a)(e(), {
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
		"./src/reddit/components/Econ/DefaultAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				defaultAvatar: "_8gjnVWVhueS_hMv9By4wh"
			}
		},
		"./src/reddit/components/Econ/DefaultAvatar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				c = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Econ/DefaultAvatar/index.m.less"),
				i = n.n(o);
			t.a = e => {
				let {
					className: t,
					style: n = {},
					userId: s
				} = e;
				const {
					processingAvatarImageUrl: o
				} = a.a, l = `url(${o}/defaults/v2/avatar_default_${(e=>{let t=0;for(const n of e)t+=n.charCodeAt();return t%8})(s)}.png)`;
				return c.a.createElement("div", {
					className: Object(r.a)(i.a.avatar, t),
					style: {
						...n,
						backgroundImage: l
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

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const r = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					},
					gqlRealtime2Context: () => {
						throw new Error("Component attempted to make an API request with no GqlRealtime2Context")
					}
				},
				o = Object(a.createContext)(r);

			function i(e) {
				const t = t => s.a.createElement(o.Consumer, null, n => {
					let {
						apiContext: a,
						gqlContext: r,
						gqlRealtime2Context: o
					} = n;
					return s.a.createElement(e, c({
						apiContext: a,
						gqlContext: r,
						gqlRealtime2Context: o
					}, t))
				});
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/redditGQL/operations/ChatUnitDetails.json": function(e) {
			e.exports = JSON.parse('{"id":"0e3adbb8d3c9"}')
		},
		"./src/redditGQL/operations/CreateChatMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"b0bb6207e12d"}')
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
			e.exports = JSON.parse('{"id":"b722cdefdc5c"}')
		},
		"./src/redditGQL/operations/RegisterWebPushToken.json": function(e) {
			e.exports = JSON.parse('{"id":"197650c1946c"}')
		},
		"./src/redditGQL/operations/ReportChatMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"fd819ca5f0fa"}')
		},
		"./src/redditGQL/operations/SearchChatGifs.json": function(e) {
			e.exports = JSON.parse('{"id":"01a298f0be11"}')
		},
		"./src/redditGQL/operations/SearchChatMessageReactionIcons.json": function(e) {
			e.exports = JSON.parse('{"id":"e44f60cbfc09"}')
		},
		"./src/redditGQL/operations/UpdateChatMessageReaction.json": function(e) {
			e.exports = JSON.parse('{"id":"2a0ff72d302a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Chat~RedesignChat.82fc6c91b0a661541b02.js.map