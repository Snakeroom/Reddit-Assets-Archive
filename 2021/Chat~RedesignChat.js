// https://www.redditstatic.com/desktop2x/Chat~RedesignChat.b3f3ba553ad55916adf9.js
// Retrieved at 12/9/2021, 8:30:04 PM by Reddit Dataminer v1.0.0
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
				return H
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "f", (function() {
				return z
			})), n.d(t, "d", (function() {
				return V
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
				return X
			})), n.d(t, "w", (function() {
				return Y
			})), n.d(t, "x", (function() {
				return J
			})), n.d(t, "u", (function() {
				return $
			})), n.d(t, "k", (function() {
				return ee
			})), n.d(t, "l", (function() {
				return te
			})), n.d(t, "i", (function() {
				return ne
			})), n.d(t, "j", (function() {
				return ae
			})), n.d(t, "a", (function() {
				return se
			})), n.d(t, "b", (function() {
				return ce
			})), n.d(t, "t", (function() {
				return re
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
				return ve
			})), n.d(t, "O", (function() {
				return Ie
			})), n.d(t, "L", (function() {
				return we
			})), n.d(t, "H", (function() {
				return Ne
			})), n.d(t, "A", (function() {
				return De
			})), n.d(t, "z", (function() {
				return Re
			})), n.d(t, "F", (function() {
				return Pe
			})), n.d(t, "N", (function() {
				return Ue
			})), n.d(t, "M", (function() {
				return He
			})), n.d(t, "C", (function() {
				return Qe
			})), n.d(t, "D", (function() {
				return Ye
			})), n.d(t, "E", (function() {
				return Je
			})), n.d(t, "K", (function() {
				return et
			})), n.d(t, "G", (function() {
				return tt
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				c = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/config.ts"),
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
				j = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				v = n("./src/lib/makeGqlRequest/index.ts"),
				C = n("./src/redditGQL/operations/DeclineChatChannelInvite.json"),
				_ = n("./src/redditGQL/operations/LeaveChatChannel.json");
			var I = n("./src/chat/endpoints/sendbird/index.ts"),
				x = n("./src/chat/helpers/errors.ts"),
				y = n("./src/chat/helpers/urls/index.ts"),
				S = n("./src/chat/models/Channel/index.ts"),
				w = n("./src/chat/models/Channel/utils.ts"),
				N = n("./src/chat/models/User/inviter.ts"),
				k = n("./src/chat/models/User/member.ts");
			var M = n("./src/chat/selectors/channels.ts");
			const T = (e, t) => {
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
				L = e => [T(e), A(e)],
				D = e => {
					const t = Object(M.m)(e);
					return {
						channelId: t && t.channelId
					}
				},
				R = e => e.find(e => !!e.channelId);
			var P = n("./src/chat/selectors/experiments.ts"),
				U = n("./src/chat/selectors/platform.ts"),
				B = n("./src/chat/singleton/SendbirdSDK.ts"),
				F = n("./src/chat/actions/inviteLink/localStorage.ts");
			const H = "CHANNEL__ADD_SUCCESS",
				G = "CHANNEL__ADD_FAIL",
				z = "CHANNEL__CREATE_CHANNEL_START",
				V = "CHANNEL__CREATE_CHANNEL_END",
				W = "CHANNEL__SELECT_BEGIN",
				K = "CHANNEL__RESET_UNREAD_COUNT",
				Z = "CHANNEL__SELECT_END",
				q = "CHANNEL__EXPAND_INVITE_LIST",
				Q = "CHANNEL__COLLAPSE_INVITE_LIST",
				X = "CHANNEL__UPDATE_MODEL",
				Y = "CHANNEL__INVITED_UPDATE",
				J = "CHANNEL__JOINED_UPDATE",
				$ = "CHANNEL__SET_UPDATED_CHANNEL_ON_TOP",
				ee = "CHANNEL__FETCHING_JOINED_CHANNELS",
				te = "CHANNEL__FETCHING_JOINED_CHANNELS_FAILED",
				ne = "CHANNEL__FETCHING_INVITED_CHANNELS",
				ae = "CHANNEL__FETCHING_INVITED_CHANNELS_FAILED",
				se = "CHANNEL__ADD_EXISTING_INVITED_CHANNELS",
				ce = "CHANNEL__ADD_EXISTING_JOINED_CHANNELS",
				re = "CHANNEL__SET_INVITED_CHANNEL_TO_JOINED",
				oe = "CHANNEL__SET_EXISTING_CHANNELS_END",
				ie = "CHANNEL__REMOVE_CHANNEL",
				le = "CHANNEL__RESET_CHANNEL_MESSAGE_LIST",
				de = "CHANNEL__FETCH_FIRST_MESSAGE",
				ue = Object(o.a)(ie),
				he = e => async t => {
					t(ue({
						channelId: e
					}))
				}, me = Object(o.a)(re), pe = e => async (t, n, {
					apiContext: a
				}) => {
					const s = n(),
						{
							user: {
								session: r
							}
						} = s;
					if (!e) throw new x.a("accepted channelId", e);
					if (!r) throw new x.a("session", r);
					const o = Object(M.m)(s),
						i = o && o.firstMessageId,
						l = !!(o && i && o.hasMoreMessages);
					await Object(I.a)(a(), r, e), l && t(Object(d.u)(i)), t(me({
						channelId: e
					}));
					const u = Object(y.getRedirectURL)(Object(y.channelUrl)(e));
					t(Object(c.b)(u))
				}, be = (e, t, n) => async (a, s, {
					gqlContext: c
				}) => {
					var r, o, i;
					const l = s(),
						{
							user: {
								session: d
							}
						} = l;
					if (!Object(M.h)(l, e) || !t) return;
					if (!d) throw new x.a("session", d);
					const h = Object(P.p)(l),
						p = Object(P.r)(l),
						b = {
							channelSendbirdId: e,
							inviterUserId: t.id,
							shouldBlockInviter: !n && (h || p),
							shouldReportInviter: !n && p
						},
						g = await ((e, t) => Object(v.a)(e, {
							...C,
							variables: t
						}))(c(), {
							input: b
						});
					if ((null === (o = null === (r = g.error) || void 0 === r ? void 0 : r.fields) || void 0 === o ? void 0 : o.length) || (e => Boolean(e && e.data && e.data.declineChatChannelInvite))(g.body) && (null === (i = g.body.data.declineChatChannelInvite.errors) || void 0 === i ? void 0 : i.length)) return a(Object(m.e)()), Object(x.b)(`Error declining invite: ${g.error}`);
					a(Object(u.c)()), await a(Ue(f.b.INVITED, e)), a((e => async t => t(he(e)))(e))
				}, ge = Object(o.a)(Y), fe = Object(o.a)(J), Oe = Object(o.a)(X), Ee = e => async t => {
					t(Oe({
						channel: e
					}))
				}, je = e => async t => {
					await t(ge({
						channel: e
					})), t((e => async (t, n) => {
						const a = n().user.account.id,
							s = e.members.filter(e => e.id !== a).map(e => e.id);
						t(Object(b.v)(s))
					})(e))
				}, ve = (e, t) => async (n, a) => {
					if (e) {
						const c = a(),
							r = Object(M.h)(c, e.channelId);
						if (e.channelState !== f.b.INVITED && !r || t) return;
						if (e = Ce(c, e), s()(e, r)) return;
						switch (e.channelState) {
							case f.b.INVITED:
								await n(je(e));
								break;
							case f.b.JOINED:
								await n(fe({
									channel: e
								}));
								break;
							default:
								Object(x.b)("Error updating channel. ChannelState not found.")
						}
						n(Object(u.c)())
					}
				}, Ce = (e, t) => {
					return Object(U.e)(e) === t.channelId && (t.unreadMessageCount = 0), t
				}, _e = Object(o.a)($), Ie = e => async t => {
					const {
						channelId: n
					} = e;
					t(_e({
						channelId: n
					}))
				}, xe = Object(o.a)(K), ye = Object(o.a)(W), Se = Object(o.a)(Z), we = () => async (e, t) => {
					const n = t(),
						a = Object(U.e)(n),
						s = Object(U.d)(n),
						{
							CREATE: r,
							DENY: o,
							VIEW_JOIN: u,
							SHARE: m,
							VIEW_INVITE: p,
							INVITE_LINK_SETTINGS: b
						} = f.a,
						g = Object(F.a)(n);
					if (g) return void e(Re([g]));
					if (s === b) return;
					if (!n.platform.currentPage) return;
					a && (await e(Object(h.d)(a)), e(Object(h.f)(!1))), await e(Object(l.f)()), e(Object(i.i)());
					const O = a && Object(M.h)(n, a);
					if (!O && (s === o || s === r || s === m)) return;
					const j = !(!O || O.channelState !== f.b.JOINED);
					if (O && j && s && f.j.includes(s)) {
						const t = Object(y.getRedirectURL)(Object(y.channelUrl)(O.channelId));
						e(Object(c.b)(t))
					} else if (O && a) {
						if (e(ye({
								channelId: a
							})), void 0 !== s && s !== p) return;
						const t = await B.a.enterChannel(O, !1);
						if (t && !t.error) {
							const {
								messageListData: n
							} = t.data;
							await e(Object(d.p)(n, O.channelId)), await e(Se()), e(Ne(a))
						} else e(Object(d.D)()), e(Se())
					} else {
						const t = n.sendbird.sdk.connectionStatus === E.b.Open;
						if (!O && a && t) {
							const t = await B.a.addChannelModelByChannelId(a);
							if (t && !s) {
								const n = Object(y.getRedirectURL)(Object(y.channelAction)(t.channelId, u));
								return void e(Object(c.b)(n))
							}
						}
						e(He()), e(Object(d.D)())
					}
				}, Ne = e => async (t, n) => {
					const a = n(),
						s = e || Object(U.e)(a);
					s && (await t(xe(s)), await B.a.markChannelAsRead(), t(Object(u.c)()))
				}, ke = Object(o.a)(z), Me = Object(o.a)(H), Te = Object(o.a)(G), Ae = Object(o.a)(V), Le = (e, t, n) => {
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
				}, De = (e, t, n) => async (a, s, {
					apiContext: r
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
						a(ke());
						const s = Le(e, u, i);
						if (s.length < 2) return;
						const o = await Object(I.b)(r(), l, s, t);
						if (o.ok) {
							const e = function(e, t) {
									return {
										channelId: Object(w.f)(e.channel_url),
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
										members: Object(k.a)(e.members)
									}
								}(o.body, f.b.JOINED),
								{
									channelId: t
								} = e,
								s = Object(y.getRedirectURL)(Object(y.channelUrl)(t));
							m.sortedKeys.includes(t) ? (a(pe(t)), a(Object(p.m)(t))) : h.sortedKeys.includes(t) ? (a(Object(c.b)(s)), a(Object(p.m)(t))) : (await a(Me({
								[t]: e
							})), a(Object(p.m)(t)), await a(Object(c.b)(s))), n && (await B.a.enterChannel(e), await a(Object(d.r)(t, n, O.c.TEXT)))
						} else a(Te()), a(Object(p.bb)(e));
						a(Ae())
					}
				}, Re = e => async t => {
					e = e.slice(0, 1), await t(Object(b.v)(e)), t(De(e)), location.origin === r.a.oldRedditUrl && t(Object(p.n)(e))
				}, Pe = e => async (t, n, {
					apiContext: a
				}) => {
					const s = n(),
						{
							user: {
								account: r,
								session: o
							},
							contacts: {
								models: i
							}
						} = s,
						l = Object(M.B)(s, "channelSendbirdUrl"),
						d = Object(U.d)(s);
					if (r && o) {
						const n = Le(e, i);
						(await Object(I.i)(a(), o, n, l)).body && d === f.a.INVITE_MEMBERS ? (t(Object(p.d)()), t(Object(c.a)())) : Object(x.b)("Error inviting user to existing channel")
					}
				}, Ue = (e, t) => async (n, a) => {
					const s = a(),
						c = e === f.b.INVITED,
						r = T(s, t),
						o = A(s);
					c ? r.channelId ? n(Fe(r)) : n(Fe(o)) : o.channelId ? n(Fe(o)) : n(Be())
				}, Be = () => async (e, t) => {
					const n = t();
					if (n.channels.firstLoaded) {
						const t = ((e, t) => {
							const n = [...t ? [D(e)] : [], ...L(e)];
							return R(n)
						})(n, !!n.platform.currentPage);
						e(Fe(t))
					}
				}, Fe = e => async t => {
					if (e && e.channelId) {
						if (e.channelAction) {
							const n = Object(y.getRedirectURL)(Object(y.channelAction)(e.channelId, e.channelAction));
							t(Object(c.c)(n))
						} else {
							const n = Object(y.getRedirectURL)(Object(y.channelUrl)(e.channelId));
							t(Object(c.c)(n))
						}
						return
					}
					const n = Object(y.getRedirectURL)(y.rootUrl);
					t(Object(c.c)(n))
				}, He = e => async (t, n) => {
					const {
						platform: {
							currentPage: a
						}
					} = n();
					if (a && a.urlParams.userIds) {
						const e = a.urlParams.userIds.split(",");
						return t(Re(e))
					}
					if (e) return t(Ue(e));
					const s = Object(j.b)(n());
					if (s) {
						const e = Object(M.h)(n(), s);
						if (e) {
							const n = Object(y.getChannelUrl)(e),
								a = Object(y.getRedirectURL)(n);
							return void t(Object(c.b)(a))
						}
					}
					return t(Be())
				}, Ge = Object(o.a)(ne), ze = Object(o.a)(ae), Ve = Object(o.a)(ee), We = Object(o.a)(te), Ke = Object(o.a)(se), Ze = Object(o.a)(ce), qe = Object(o.a)(oe), Qe = () => async (e, t) => {
					await Promise.all([e($e()), e(Ye()), e(Je())]).catch(x.b);
					const n = t().channels.models;
					await e(Xe(n)), e(qe()), e(we())
				}, Xe = e => async t => {
					const n = Object(w.c)(e, [S.b.Direct, S.b.Group]);
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
				}, Ye = e => async (t, n) => {
					t(Ge());
					const a = await B.a.getExistingChannels(f.b.INVITED).catch(() => null);
					if (a) {
						const {
							hasMoreChannels: s
						} = a, c = Object(S.g)(a.channels), r = Object(M.u)(n());
						return t(Xe(c)), t(Ke({
							channels: c,
							hasMoreChannels: s
						})), void(s && r < g.a.InitChannels && (null == e ? void 0 : e.recursively) && t(Ye({
							recursively: null == e ? void 0 : e.recursively
						})))
					}
					t(ze()), Object(x.b)("Error fetching invited channels")
				}, Je = () => async (e, t) => {
					var n;
					e(Ve());
					const a = await B.a.getExistingChannels(f.b.JOINED).catch(t => {
						Object(x.b)(t), e(We())
					});
					if (a) {
						const {
							hasMoreChannels: s
						} = a, c = Object(S.g)(a.channels), r = Object(M.v)(t()) + (null === (n = a.channels) || void 0 === n ? void 0 : n.length);
						return e(Ze({
							channels: c,
							hasMoreChannels: s
						})), void(s && r < g.a.InitChannels && e(Je()))
					}
					e(We())
				}, $e = () => async (e, t) => {
					const n = t(),
						{
							INVITE_LINK_SETTINGS: a
						} = f.a,
						s = Object(U.e)(n),
						c = Object(U.d)(n);
					s && c !== a && await B.a.addChannelModelByChannelId(s).catch(() => e(He()))
				}, et = (Object(o.a)(q), Object(o.a)(Q), Object(o.a)(le)), tt = e => async (t, n, {
					gqlContext: a
				}) => {
					var s, c, r;
					const o = n(),
						i = Object(M.B)(o, "channelState");
					t(Object(p.H)());
					const l = {
							channelSendbirdId: e
						},
						d = await ((e, t) => Object(v.a)(e, {
							..._,
							variables: t
						}))(a(), {
							input: l
						});
					if ((null === (c = null === (s = d.error) || void 0 === s ? void 0 : s.fields) || void 0 === c ? void 0 : c.length) || (e => Boolean(e && e.data && e.data.leaveChatChannel))(d.body) && (null === (r = d.body.data.leaveChatChannel.errors) || void 0 === r ? void 0 : r.length)) return t(Object(m.e)()), Object(x.b)(`Error leaving channels: ${d.error}`);
					await t(Ue(i, e)), t(he(e))
				}
		},
		"./src/chat/actions/channel/dropdown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "g", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/actions/channel.ts"),
				r = n("./src/chat/actions/surveyTrigger/index.ts"),
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
					c = Object(h.getRedirectURL)(Object(h.channelAction)(s, g));
				e(Object(a.b)(c))
			}, j = (e, t) => async n => {
				const s = Object(h.getRedirectURL)(Object(h.inviteLinkSettingsUrl)(e, !!t));
				n(Object(a.b)(s))
			}, v = e => async t => {
				t(Object(r.b)()), t(Object(o.c)({
					tooltipId: e
				})), t(Object(i.fb)())
			}, C = e => async t => {
				e && (t(Object(i.t)()), window.open(Object(h.viewProfileUrl)(e)))
			}, _ = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(m.x)(n),
					c = Object(h.getRedirectURL)(Object(h.channelAction)(s, O));
				e(Object(i.jb)()), e(Object(a.b)(c))
			}, I = "CHANNEL__UPDATE_CHANNEL_NAME", x = Object(s.a)(I), y = e => async (t, n) => {
				const a = Object(m.x)(n());
				if (a) {
					const n = {
							...a,
							name: e
						},
						s = {
							...a
						};
					t(x(n)), await b.a.updateChannel(n).catch(e => {
						Object(u.b)(e), t(x(s))
					})
				}
			}, S = ({
				channelId: e
			}) => async () => {
				b.a.setMyCountPreference(e, l.c.Off).catch(u.b)
			}, w = ({
				channelId: e
			}) => async () => {
				b.a.setMyCountPreference(e, l.c.All).catch(u.b)
			}, N = e => async (t, n, {
				apiContext: a
			}) => {
				const s = n(),
					r = Object(p.q)(s);
				t(Object(i.P)()), await Promise.all([Object(d.l)(a(), e, r), b.a.setPushPreference(e, !0)]).then(() => {
					const n = Object(m.h)(s, e);
					n && t(Object(c.P)({
						...n,
						isNotifsMuted: !0
					}))
				}).catch(u.b)
			}, k = e => async (t, n, {
				apiContext: a
			}) => {
				const s = n(),
					r = Object(p.q)(s);
				t(Object(i.ab)()), await Promise.all([Object(d.m)(a(), e, r), b.a.setPushPreference(e, !1)]).then(() => {
					const n = Object(m.h)(s, e);
					n && t(Object(c.P)({
						...n,
						isNotifsMuted: !1
					}))
				}).catch(u.b)
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
				l = e => async (t, n) => {
					const a = n(),
						c = Object(s.r)(a, e);
					c && t(i(c))
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
				return j
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "i", (function() {
				return w
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
				p = "GIF__SEARCH_SUCCESS",
				b = "GIF__SEARCH_ERROR",
				g = "GIF__CLEAR_ERROR",
				f = Object(a.a)(d),
				O = Object(a.a)(u),
				E = Object(a.a)(h),
				j = Object(a.a)(l),
				v = Object(a.a)(m),
				C = Object(a.a)(p),
				_ = Object(a.a)(b),
				I = Object(a.a)(g),
				x = e => async (t, n, {
					gqlContext: a
				}) => {
					const o = n(),
						l = Object(i.g)(o),
						d = Object(i.c)(o);
					if (!l || d) {
						t(f()), t(j(""));
						const n = await ((e, t) => Object(c.a)(e, {
							...r,
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
					gqlContext: r
				}) => {
					var l, d;
					if (!t) return;
					const u = a(),
						h = Object(i.c)(u),
						m = Object(i.b)(u),
						p = t === m,
						b = p ? null === (l = u.gifs.search.models[t]) || void 0 === l ? void 0 : l.pageInfo.endCursor : "";
					if ((null === (d = u.gifs.search.models[t]) || void 0 === d ? void 0 : d.ids.length) && !h && !p) n(j(t));
					else if (Object(i.e)(u) || !b) {
						h && n(I(t)), n(v({
							query: t,
							cursor: b
						}));
						const a = await ((e, t) => Object(c.a)(e, {
							...o,
							variables: t
						}))(r(), {
							first: e,
							query: t,
							after: b
						});
						if ((null == a ? void 0 : a.ok) && !(null == a ? void 0 : a.error)) {
							const e = a.body,
								s = S(e, t);
							n(C({
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
						c = a && a.edges;
					return {
						version: null == a ? void 0 : a.version,
						provider: null == a ? void 0 : a.provider,
						pageInfo: s,
						models: c.map(e => e.node),
						query: t
					}
				}, w = () => async (e, t) => {
					Object(i.b)(t()) && e(j(""))
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
				return v
			})), n.d(t, "f", (function() {
				return _
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
				p = Object(c.a)("MEMBERS__FETCHING_MEMBERS_FAILED"),
				b = ({
					filter: e,
					loadMore: t
				}) => async (n, a) => {
					const s = a(),
						c = Object(l.n)(s);
					if (c) {
						n(m({
							channelId: c
						}));
						const a = e ? await u.a.getChannelMembersStartsWith(c, e).catch(e => Object(o.b)(`Error getting channel members: ${e.message}`)) : await u.a.getChannelMembers(c, t).catch(e => Object(o.b)(`Error getting subreddit channel members: ${e.message}`));
						if (a) {
							const {
								hasMoreMembers: e,
								members: t
							} = a;
							n(j(c, t, e))
						} else n(p())
					}
				}, g = "MEMBERS__FETCHING_MEMBERS_COMPLETED", f = Object(c.a)(g), O = "MEMBERS__ADD_CHANNEL_MEMBERS", E = Object(c.a)(O), j = (e, t, n) => async (a, c, {
					gqlContext: o
				}) => {
					const l = t.map(e => e.userId),
						u = await Object(r.b)(o(), {
							ids: l
						});
					if (u.ok && Object(r.c)(u.body)) {
						const n = c(),
							r = Object(i.b)(u.body.data.redditorsInfoByIds);
						if (!r) return;
						const o = t.reduce((e, t) => {
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
						a(E({
							channelId: e,
							members: o
						}))
					}
					a(f({
						channelId: e,
						hasMoreMembers: n
					}))
				}, v = "MEMBERS__REMOVE_CHANNEL_MEMBERS", C = Object(c.a)(v), _ = () => async e => {
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
				const a = Object(o.y)(n()),
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
				return A
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "o", (function() {
				return B
			})), n.d(t, "q", (function() {
				return F
			})), n.d(t, "s", (function() {
				return H
			})), n.d(t, "r", (function() {
				return G
			})), n.d(t, "A", (function() {
				return z
			})), n.d(t, "m", (function() {
				return V
			})), n.d(t, "k", (function() {
				return K
			})), n.d(t, "z", (function() {
				return Z
			})), n.d(t, "i", (function() {
				return X
			})), n.d(t, "x", (function() {
				return J
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
				return ce
			})), n.d(t, "t", (function() {
				return re
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
				return ve
			})), n.d(t, "h", (function() {
				return Ce
			})), n.d(t, "w", (function() {
				return _e
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
			var j = n("./src/chat/actions/message/richUnit.ts"),
				v = n("./src/chat/actions/surveyTrigger/index.ts"),
				C = n("./src/chat/endpoints/messages/index.tsx"),
				_ = n("./src/chat/endpoints/sendbird/index.ts"),
				I = n("./src/chat/helpers/errors.ts"),
				x = n("./src/chat/helpers/urls/index.ts"),
				y = n("./src/chat/models/Message/index.ts"),
				S = n("./src/chat/models/Message/adapter.ts"),
				w = n("./src/chat/selectors/app.ts"),
				N = n("./src/chat/selectors/channels.ts"),
				k = n("./src/chat/selectors/contacts.ts"),
				M = n("./src/chat/selectors/messages.ts"),
				T = n("./src/chat/singleton/SendbirdSDK.ts");
			const A = "MESSAGE__ADD_ONE",
				L = Object(o.a)(A),
				D = (e, t, n) => async (a, s) => {
					const c = s(),
						r = Object(S.c)(n),
						o = await R(t, c);
					return T.a.addMessage(t, n, o).then(t => {
						const n = {
							[t.messageId]: t
						};
						return a(L({
							message: n,
							channelId: e,
							clientMessageId: r
						})), a(Object(d.X)(t)), a(Object(j.c)(t)), t.messageId
					}).catch(e => {
						if (r) {
							const t = `${e.code}: ${e.message}`;
							a(Object(d.eb)(r, t)), a(W({
								clientMessageId: r,
								toggle: !0
							}))
						}
						return null
					})
				}, R = async (e, t) => {
					const n = Object(r.d)(e);
					if (!n.length) return [];
					const a = [];
					return [...n.map(e => {
						const n = Object(k.f)(t, e);
						return n || a.push(e), n && n.id
					}).filter(e => e), ...(a.length && s()(await Promise.all(a.slice(0, 3).map(e => T.a.searchMemberByName(e, !0)))) || []).map(e => e && e.id).filter(e => e)]
				}, P = "MESSAGE__ADD_PENDING_ONE", U = Object(o.a)(P), B = (e, t) => async (n, a, {
					gqlContext: s
				}) => {
					const c = a(),
						r = {
							height: t.downsized.dimensions.height,
							width: t.downsized.dimensions.width,
							id: t.id,
							title: t.title,
							url: t.downsized.url
						},
						o = Object(y.b)(c, e, JSON.stringify(r), u.c.GIF);
					await n(U(o));
					const i = {
						channelId: e,
						messageData: o.data,
						message: t.downsized.url
					};
					if (!(await Object(C.a)(s(), {
							input: i
						})).ok) {
						const {
							clientMessageId: e
						} = o;
						n(Object(d.eb)(e)), n(W({
							clientMessageId: e,
							toggle: !0
						}))
					}
				}, F = (e, t) => async (n, a, {
					gqlContext: s
				}) => {
					const c = a(),
						r = Object(y.b)(c, e, JSON.stringify({
							is_hidden: !0,
							image: {}
						}), u.c.IMAGE, t.id);
					n(U(r));
					const o = {
							channelId: e,
							messageData: r.data,
							message: t.metadata.localUrl,
							messageType: u.c.IMAGE.toUpperCase()
						},
						i = await Object(C.a)(s(), {
							input: o
						});
					if (i.ok && Object(C.b)(i.body)) {
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
					for await (const c of e) {
						const e = Object(N.h)(s(), c);
						(null == e ? void 0 : e.channelId) && (await T.a.enterChannel(e), await a(G(c, t, n)))
					}
					const r = Object(x.getRedirectURL)(Object(x.channelUrl)(e[e.length - 1]));
					a(Object(c.b)(r))
				}, G = (e, t, n) => async (a, s) => {
					var c;
					const o = s(),
						i = r.b.match(t),
						d = 1 === (null == i ? void 0 : i.length) && 1 === t.trim().split(" ").length;
					if (Object(x.isRedditLink)(null === (c = null == i ? void 0 : i[0]) || void 0 === c ? void 0 : c.url) && d) await a(q(e, t));
					else if (d) await a(Q(e, t));
					else {
						const s = Object(y.b)(o, e, t, n);
						a(U(s)), await a(D(e, t, s.data))
					}
					a(Object(l.removeUserIdFormQuickReplyListByChannelId)(e))
				}, z = (e, t) => async (n, a) => {
					const s = a(),
						c = Object(M.f)(s, t);
					c && (n(W({
						clientMessageId: t,
						toggle: !1
					})), await n(D(e, c.messageData.value, c.data)))
				}, V = "MESSAGE__TOGGLE_PENDING_MESSAGE_ERROR", W = Object(o.a)(V), K = "MESSAGE__REMOVE_PENDING_ONE", Z = Object(o.a)(K), q = (e, t) => async (n, a) => {
					const s = a(),
						c = Object(x.getChatUnitType)(t),
						r = Object(y.b)(s, e, t, c.type);
					r && (n(U(r)), await n(D(e, r.messageData.value, r.data)))
				}, Q = (e, t) => async (n, a) => {
					const s = a(),
						c = r.f.match(t);
					if (!c.length || c.length > 1) return Object(I.b)(`We only support 1 link per text but ${c.length} given`);
					const o = c[0].url,
						i = u.c.EMBED;
					let l = {
						url: t
					};
					const d = Object(y.b)(s, e, JSON.stringify(l), i);
					if (d) {
						n(U(d));
						const t = await (async ({
							chars: e,
							scheme: t,
							url: n
						}) => Object(g.b)({
							endpoint: "https://api.embed.ly/1/extract",
							method: b.jb.GET,
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
								s = JSON.stringify(Object(S.b)(a, i, d.clientMessageId));
							await n(D(e, l.url, s))
						}
					}
				}, X = "MESSAGE__RECEIVE_ADD_ONE", Y = Object(o.a)(X), J = e => async (t, n) => {
					const {
						messageId: a,
						messageData: {
							clientMessageId: s
						}
					} = e, c = n(), r = Object(N.y)(c) === e.channelId, o = Object(w.e)(c), l = Object(M.f)(c, s), u = Object(M.b)(c, a);
					o && r && t(Object(i.H)(e.channelId)), l ? (e.createdAt = l.createdAt, t(Object(d.Z)(e))) : u && (e.createdAt = u.createdAt), await t(Y({
						[a]: e
					})), t(Object(j.c)(e))
				}, $ = "MESSAGE__ADD_LIST", ee = Object(o.a)($), te = (e, t) => async n => {
					e && n(ee({
						channelId: t,
						...e
					})), n(Object(j.d)(e)), n(Object(v.b)())
				}, ne = "MESSAGE__SET_MESSAGE_LIST_IS_LOADED", ae = Object(o.a)(ne), se = "MESSAGE__DELETE_ONE", ce = Object(o.a)(se), re = e => async (t, n) => {
					const a = n(),
						s = Object(M.b)(a, e);
					s && s.messageType === u.d.USER && T.a.deleteMessage(s).then(() => t(ce(s.messageId))).then(() => t(Object(c.a)()))
				}, oe = "MESSAGE__RECEIVE_DELETE_ONE", ie = Object(o.a)(oe), le = e => async (t, n) => {
					t(ie(e))
				}, de = "MESSAGE__GET_PREVIOUS_MESSAGES_START", ue = "MESSAGE__GET_PREVIOUS_MESSAGES_END", he = "MESSAGE__GET_PREVIOUS_MESSAGES_ERROR", me = Object(o.a)(de), pe = Object(o.a)(ue), be = Object(o.a)(he), ge = e => async (t, n) => {
					const a = Object(N.B)(n(), "channelId");
					t(me(a)), t(Object(d.hb)()), a && await T.a.getPreviousMessages(e).then(e => {
						t(pe({
							channelId: a,
							...e
						})), t(Object(j.d)(e))
					}).catch(() => t(be(a)))
				}, fe = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					try {
						await Object(_.h)(s(), t, e)
					} catch (c) {
						Object(I.b)(c)
					}
				}, Oe = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					try {
						await Object(_.c)(s(), t, e)
					} catch (c) {
						Object(I.b)(c)
					}
				}, Ee = "MESSAGE__UNCOLLAPSE", je = Object(o.a)(Ee), ve = e => async t => {
					t(je(e))
				}, Ce = "MESSAGE__HIDE_REPORT_PROMPT_FOR_COLLAPSE_MESSAGE", _e = Object(o.a)(Ce)
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
				d = (e, t) => async (n, a, {
					gqlContext: i
				}) => {
					const u = a(),
						h = Object(o.c)(u, e.messageSendbirdId),
						m = h.find(t => t.key === e.reactionIconKey) || e.type !== r.a.ADD ? h.reduce((t, n) => {
							if (n.key === e.reactionIconKey) {
								const a = {
									...n,
									userIds: e.type === r.a.ADD ? [...new Set([...n.userIds, e.userId])] : n.userIds.filter(t => t !== e.userId)
								};
								return a.userIds.length > 0 ? [...t, a] : t
							}
							return [...t, n]
						}, []) : [...h, {
							key: e.reactionIconKey,
							userIds: [e.userId]
						}];
					if (n(l({
							reactions: m,
							messageId: e.messageSendbirdId
						})), !t) {
						const {
							userId: t,
							messageSendbirdId: a,
							...o
						} = e, l = {
							...o,
							messageSendbirdId: a.toString()
						}, u = await Object(c.e)(i(), l);
						Object(c.c)(u) && (n(d({
							...e,
							type: l.type === r.a.ADD ? r.a.DELETE : r.a.ADD
						}, !0)), n(Object(s.g)({
							customErrorMessage: u.data.updateChatMessageReaction.errors[0].message
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
				return E
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "f", (function() {
				return _
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
				p = e => Boolean(e && e.id && e.title && e.url && e.authorInfo && e.authorInfo.displayName),
				b = e => Boolean(e && e.id && e.title && e.url && e.redditor && e.redditor.displayName),
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
				E = e => async (t, n) => {
					const a = O(e, n());
					t(C(a))
				}, j = e => async (t, n) => {
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
						t(C(a))
					}
				}, v = e => async (t, n) => {
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
						t(C(a))
					}
				}, C = e => async (t, n, {
					gqlContext: a
				}) => {
					const c = {
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
						l = e => e.startsWith(d.Ib.Comment) || e.startsWith(d.Ib.Post);
					for (const o in e) {
						const t = s()(e[o].reduce((e, t) => t && (l(t) || "subreddit" === o) && e.push(t) && e || e, []));
						switch (o) {
							case r.c.POST:
								t.length && (c.postsIds = t, c.includePosts = !0);
								break;
							case r.c.USER_POST:
								t.length && (c.userPostsIds = t, c.includeUserPosts = !0);
								break;
							case r.c.COMMENT:
								t.length && (c.commentsIds = t, c.includeComments = !0);
								break;
							case r.c.SUBREDDIT:
								t.length && (c.subredditsNames = t, c.includeSubreddits = !0)
						}
					}
					if (c.includePosts || c.includeComments || c.includeUserPosts || c.includeSubreddits) {
						const e = await ((e, t) => Object(o.a)(e, {
							...i,
							variables: t
						}))(a(), c);
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
								})), e.posts && (e.posts = e.posts.filter(p).map(e => ({
									...e,
									type: r.c.POST
								}))), e.userPosts && (e.userPosts = e.userPosts.filter(b).map(e => ({
									...e,
									type: r.c.USER_POST
								}))), e.subreddits && (e.subreddits = e.subreddits.filter(g).map(e => ({
									...e,
									type: r.c.SUBREDDIT
								}))), t(f(e))
							}
						}
					}
				}, _ = Object(c.a)(h)
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
				l = (Object(a.a)(c.b), () => async (e, t, {
					gqlContext: n
				}) => {
					try {
						const t = await Object(r.d)(n(), {
							query: "",
							first: r.a
						});
						t.ok && Object(r.b)(t.body) && e(o(d(t.body.data.searchChatMessageReactionIcons.edges)))
					} catch (a) {
						Object(s.a)(a)
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
				return p
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
				p = (e, t) => async (n, a, l) => {
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
					await Object(s.l)()(n, a, c), await Object(s.o)()(n, a, c), await e(t)(n, a, c)
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
						e(Object(a.z)(t))
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
					if (n && (c(u({
							action: t,
							location: e,
							routeMatch: n
						})), !d || !Object(a.a)(d.url, e))) {
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
						n.match.params.channelId && c(Object(r.L)())
					}
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
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "e", (function() {
				return p
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
				p = () => async (e, t, {
					apiContext: n
				}) => {
					const a = await Object(s.d)(n());
					if (a.ok) {
						const t = b(a.body.reactions.short_list);
						await Promise.all([e(o({
							host: a.body.proxy_host
						})), e(l({
							maxMessageLength: parseInt(a.body.max_message_length, 10)
						})), e(u({
							userSubredditChatEnabled: a.body.user_subreddit_chat_enabled
						})), t.map(e => new Promise(t => {
							const n = new Image;
							n.onload = () => t(), n.src = e.url
						})), e(m({
							reactions: b(a.body.reactions.short_list)
						}))])
					}
				}, b = e => {
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
				return C
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "j", (function() {
				return S
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
				p = "SENDBIRD__SET_SENDBIRD_SESSION",
				b = Object(c.a)(p),
				g = (e = !0) => async (t, n, {
					apiContext: c
				}) => {
					const r = n(),
						{
							account: o,
							session: l
						} = r.user;
					if (l && o) {
						let n;
						const r = Object(a.c)(s.q.CHAT, s.y.CHAT_SENDBIRD_SESSION_KEY, o.id),
							d = Object(a.b)(r);
						if (d && d.token) n = d;
						else {
							const e = await Object(i.f)(c(), l);
							if (e.ok) {
								const {
									valid_until: t,
									sb_access_token: s
								} = e.body;
								n = {
									expires: t,
									token: s
								}, Object(a.d)(r, n, new Date(t))
							}
						}
						if (n) return void t(b({
							...n,
							active: e
						}))
					}
					t(m())
				}, f = "SENDBIRD__ADD_MEMBERS_TO_KNOWN_CONTACTS", O = Object(c.a)(f), E = "SENDBIRD__SET_REDDIT_CONTACT_LIST", j = 6 * s.Q, v = Object(c.a)(E), C = () => async (e, t, {
					apiContext: n
				}) => {
					const c = t(),
						r = c.contacts.models,
						o = Object(a.c)(s.q.CHAT, s.y.CHAT_SENDBIRD_CONTACTS_KEY, c.user.account.id),
						d = Object(a.b)(o);
					if (d && d.version === l.a) return void e(v(d.data));
					const u = t().user.session;
					if (!u) return;
					const h = await Object(i.e)(n(), u, 25),
						m = Object(l.c)(h.body).map(e => r[e.id] ? r[e.id] : e),
						p = {
							version: l.a,
							data: m
						};
					Object(a.d)(o, p, j), e(v(m))
				}, _ = "SENDBIRD__IDENTIFY_CONTACT_BEGIN", I = "SENDBIRD__IDENTIFY_CONTACT_END", x = Object(c.a)(_), y = Object(c.a)(I), S = e => async (t, n, {
					apiContext: a
				}) => {
					if (e.username === s.E) return;
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
						} else t(Object(r.cb)(e.username));
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
				return j
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "g", (function() {
				return x
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
			const p = "SENDBIRD_SDK__CONNECT_FAIL",
				b = "SENDBIRD_SDK__CONNECT_SUCCESS",
				g = "SENDBIRD_SDK__DISCONNECT",
				f = "SENDBIRD_SDK__UPDATE_CONNECTION_STATUS",
				O = Object(a.a)(p),
				E = Object(a.a)(b),
				j = e => async (t, n) => {
					const a = n(),
						o = Object(u.e)(a),
						p = Object(u.d)(a),
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
									t(Object(c.v)(e)), t(Object(i.g)({
										toast: d.a.ConnectionOpen
									})), t(Object(i.c)(3))
								}
								t(Object(r.c)()), t(Object(s.C)())
							}
						})
					}
				}, v = Object(a.a)(g), C = () => async e => {
					m.a.disconnect().then(() => {
						e(v()), e(Object(o.i)())
					})
				}, _ = Object(a.a)(f), I = Object(a.a)("SENDBIRD_SDK__RECONNECT_SENDBIRD"), x = () => async e => {
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
				u = () => async (e, t, {
					apiContext: n
				}) => {
					const a = t().user.session;
					if (a) {
						const t = await ((e, t) => Object(c.a)(e, {
							data: t,
							endpoint: "/refreshproxy",
							method: s.jb.POST
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
				c = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
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
					const l = await (e => Object(c.a)(Object(r.a)(e, [o.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: s.jb.GET
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
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			let s, c;
			const r = "REDDIT__START_SURVEY",
				o = Object(a.a)(r),
				i = (e = 8e3) => async t => {
					c || (s && clearTimeout(s), s = setTimeout(() => {
						t(o()), c = !0
					}, e))
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
				return j
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "X", (function() {
				return C
			})), n.d(t, "eb", (function() {
				return _
			})), n.d(t, "Y", (function() {
				return I
			})), n.d(t, "ib", (function() {
				return x
			})), n.d(t, "y", (function() {
				return y
			})), n.d(t, "z", (function() {
				return S
			})), n.d(t, "T", (function() {
				return w
			})), n.d(t, "K", (function() {
				return N
			})), n.d(t, "hb", (function() {
				return k
			})), n.d(t, "I", (function() {
				return M
			})), n.d(t, "D", (function() {
				return T
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "db", (function() {
				return L
			})), n.d(t, "F", (function() {
				return D
			})), n.d(t, "h", (function() {
				return R
			})), n.d(t, "fb", (function() {
				return P
			})), n.d(t, "V", (function() {
				return U
			})), n.d(t, "C", (function() {
				return B
			})), n.d(t, "H", (function() {
				return F
			})), n.d(t, "M", (function() {
				return H
			})), n.d(t, "L", (function() {
				return G
			})), n.d(t, "c", (function() {
				return z
			})), n.d(t, "A", (function() {
				return V
			})), n.d(t, "S", (function() {
				return W
			})), n.d(t, "jb", (function() {
				return K
			})), n.d(t, "o", (function() {
				return Z
			})), n.d(t, "w", (function() {
				return q
			})), n.d(t, "O", (function() {
				return Q
			})), n.d(t, "W", (function() {
				return X
			})), n.d(t, "k", (function() {
				return Y
			})), n.d(t, "cb", (function() {
				return J
			})), n.d(t, "bb", (function() {
				return $
			})), n.d(t, "m", (function() {
				return ee
			})), n.d(t, "j", (function() {
				return te
			})), n.d(t, "d", (function() {
				return ne
			})), n.d(t, "p", (function() {
				return ae
			})), n.d(t, "r", (function() {
				return se
			})), n.d(t, "t", (function() {
				return ce
			})), n.d(t, "q", (function() {
				return re
			})), n.d(t, "s", (function() {
				return oe
			})), n.d(t, "f", (function() {
				return ie
			})), n.d(t, "B", (function() {
				return le
			})), n.d(t, "P", (function() {
				return de
			})), n.d(t, "ab", (function() {
				return ue
			})), n.d(t, "n", (function() {
				return he
			})), n.d(t, "i", (function() {
				return me
			})), n.d(t, "v", (function() {
				return pe
			})), n.d(t, "E", (function() {
				return be
			})), n.d(t, "G", (function() {
				return ge
			})), n.d(t, "u", (function() {
				return fe
			})), n.d(t, "U", (function() {
				return Oe
			})), n.d(t, "J", (function() {
				return Ee
			})), n.d(t, "N", (function() {
				return je
			})), n.d(t, "gb", (function() {
				return ve
			})), n.d(t, "R", (function() {
				return Ce
			})), n.d(t, "b", (function() {
				return _e
			})), n.d(t, "Q", (function() {
				return Ie
			})), n.d(t, "x", (function() {
				return xe
			})), n.d(t, "Z", (function() {
				return ye
			})), n.d(t, "g", (function() {
				return Se
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
			var p = n("./src/chat/selectors/telemetry.ts");
			var b = n("./src/chat/tracking/events/chatView.ts"),
				g = n("./src/chat/tracking/events/contactsList.ts"),
				f = (n("./src/chat/tracking/events/experiment.ts"), n("./src/chat/tracking/events/invitationInbox.ts")),
				O = n("./src/chat/tracking/events/messagesInbox.ts");
			var E, j;
			! function(e) {
				e.AWARD_RECEIVED = "award_received"
			}(E || (E = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND", e[e.THIRD = 3] = "THIRD"
			}(j || (j = {}));
			const v = () => async (e, t) => {
				Object(O.b)(t())
			}, C = e => async (t, n) => {
				Object(b.l)(n(), e)
			}, _ = (e, t) => async (n, a) => {
				Object(b.p)(a(), e, t)
			}, I = (e, t) => async (n, a) => {
				Object(b.m)(a(), e, t)
			}, x = () => async (e, t) => {
				Object(b.r)(t())
			}, y = () => async (e, t) => {
				Object(b.d)(t())
			}, S = () => async (e, t) => {
				Object(b.e)(t())
			}, w = (e, t, n, a) => async (s, c) => {
				Object(b.k)(c(), e, t, n, a)
			}, N = (e, t, n) => async (a, s) => {
				Object(b.i)(s(), e, t, n)
			}, k = () => async (e, t) => {
				Object(b.q)(t())
			}, M = () => async (e, t) => {
				Object(b.h)(t())
			}, T = () => async (e, t) => {
				Object(b.f)(t())
			}, A = () => async (e, t) => {
				Object(b.a)(t())
			}, L = () => async (e, t) => {
				Object(b.n)(t())
			}, D = e => async (t, n) => {
				Object(b.g)(n(), e)
			}, R = () => async (e, t) => {
				Object(b.b)(t())
			}, P = () => async (e, t) => {
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
			}, U = e => async (t, n) => {
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
			}, B = () => async (e, t) => {
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
			}, F = () => async (e, t) => {
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
			}, H = () => async (e, t) => {
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
			}, G = () => async (e, t) => {
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
			}, z = () => async (e, t) => {
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
			}, V = () => async (e, t) => {
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
			}, W = () => async (e, t) => {
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
			}, K = () => async (e, t) => {
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
			}, Z = e => async (t, n) => {
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
						...Object(p.a)(e),
						reason: t
					}
				}))(n(), e)
			}, q = () => async (e, t) => {
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
			}, Q = (e, t) => async (n, s) => {
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
						...Object(p.a)(e),
						type: t,
						settingValue: n
					}
				}))(s(), e, t)
			}, X = e => async (t, n) => {
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
			}, Y = e => async (t, n) => {
				Object(g.c)(n(), e)
			}, J = e => async (t, n) => {
				Object(i.c)(n(), e) && Object(g.f)(n())
			}, $ = e => async (t, n) => {
				const a = n(),
					s = e && e.filter(e => e !== a.user.account.id),
					c = s && s[0],
					r = a.contacts.models[c],
					o = r && r.name,
					l = Object(i.a)(n(), o);
				l && Object(g.e)(n(), l)
			}, ee = e => async (t, n) => {
				Object(g.d)(n(), e)
			}, te = () => async (e, t) => {
				Object(g.b)(t())
			}, ne = () => async (e, t) => {
				Object(g.a)(t())
			}, ae = e => async (t, n) => {
				const a = n(),
					s = Object(o.g)(a, e);
				Object(f.d)(a, s, s ? E.AWARD_RECEIVED : void 0)
			}, se = e => async (t, n) => {
				const a = n(),
					s = Object(o.g)(a, e);
				Object(f.f)(a, s, s ? E.AWARD_RECEIVED : void 0)
			}, ce = () => async (e, t) => {
				const n = t();
				Object(d.d)(n) === c.a.VIEW_INVITE && Object(f.h)(n)
			}, re = () => async (e, t) => {
				const n = t();
				Object(d.d)(n) === c.a.VIEW_INVITE && Object(f.e)(n)
			}, oe = (e, t) => async (n, a) => {
				const s = a();
				if (Object(d.d)(s) === c.a.VIEW_INVITE) {
					const n = t.pop(),
						a = null == n ? void 0 : n.messageId;
					Object(f.g)(s, e, a)
				}
			}, ie = () => async (e, t) => {
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
			}, le = e => async (t, n) => {
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
			}, de = () => async (e, t) => {
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
			}, ue = () => async (e, t) => {
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
			}, he = e => async (t, n) => {
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
			}, me = () => async (e, t) => {
				Object(O.a)(t())
			}, pe = () => async (e, t) => {
				Object(O.c)(t())
			}, be = e => async (t, n) => {
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
			}, ge = e => async (t, n) => {
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
			}, fe = () => async (e, t) => {
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
			}, Oe = e => async (t, n) => {
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
			}, Ee = () => async (e, t) => {
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
			}, je = e => async (t, n) => {
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
							...Object(p.a)(e)
						}
					})
				})(n(), e, r)
			}, ve = e => async (t, n) => {
				Object(f.j)(n(), e)
			}, Ce = e => async (t, n) => {
				Object(f.j)(n(), e)
			}, _e = (e, t) => async (n, a) => {
				Object(f.a)(a(), e, t)
			}, Ie = (e, t) => async (n, a) => {
				Object(f.i)(a(), e, t)
			}, xe = (e, t) => async (n, a) => {
				Object(b.c)(a(), e, t, E.AWARD_RECEIVED)
			}, ye = e => async (t, n) => {
				switch (e.messageData.type) {
					case r.c.GIF:
						t((() => async (e, t) => {
							const n = t(),
								a = Object(l.b)(n);
							Object(b.j)(t(), a)
						})());
						break;
					case r.c.IMAGE:
						t(C(e))
				}
			}, Se = e => async (t, n) => {
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
				l = ({
					channelId: e,
					usernames: t
				}) => async (n, a) => {
					const c = Object(r.B)(a(), "channelId"),
						o = a().typingIndicator.usernames,
						l = e === c,
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
				return j
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "c", (function() {
				return C
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
					method: r.jb.POST,
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
			}, h = n("./src/redditGQL/operations/CreateMediaUploadLease.json"), m = n("./src/redditGQL/operations/SubmitMediaUpload.json"), p = n("./src/lib/makeGqlRequest/index.ts");
			var b = n("./src/chat/models/Uploads/index.ts"),
				g = n("./src/chat/selectors/channels.ts"),
				f = n("./src/chat/selectors/uploads.ts");
			const O = "FILE_DROP__TOGGLE_IS_OVER",
				E = Object(a.a)(O),
				j = "UPLOAD__ADD_PENDING",
				v = Object(a.a)(j),
				C = "UPLOAD__CHANGE_STATUS",
				_ = Object(a.a)(C),
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
					gqlContext: c
				}) => {
					const r = {
							input: {
								mimetype: n
							}
						},
						o = await ((e, t) => Object(p.a)(e, {
							...h,
							variables: t
						}))(c(), r);
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
					const c = {
							input: {
								mediaId: e,
								redditId: t
							}
						},
						r = await ((e, t) => Object(p.a)(e, {
							...m,
							variables: t
						}))(s(), c);
					return r.ok && (e => {
						var t, n;
						return Boolean(null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.submitMedia) || void 0 === n ? void 0 : n.ok)
					})(r.body)
				};
			class N {
				constructor(e) {
					this.uploads = [], this.createMessage = () => async (e, t) => {
						if (this.setActiveUploads(t()), !this.uploads.length) return e(Object(c.e)());
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
								const c = await e(Object(s.q)(n, t));
								c ? (t.messageId = c.messageId, t.redditId = c.redditId) : e(_({
									id: a,
									channelId: n,
									status: b.c.Failed
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
							const c = await e(S(t));
							c ? (e(_({
								id: a,
								channelId: n,
								status: b.c.Processing
							})), await e(w(c, s)) ? e(_({
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
					this.uploads = Object(f.b)(e)
				}
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
				return T
			})), n.d(t, "u", (function() {
				return A
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "v", (function() {
				return F
			})), n.d(t, "h", (function() {
				return H
			})), n.d(t, "m", (function() {
				return z
			})), n.d(t, "k", (function() {
				return V
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
				return J
			})), n.d(t, "o", (function() {
				return te
			})), n.d(t, "p", (function() {
				return ae
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
				p = n("./src/chat/endpoints/sendbird/index.ts"),
				b = n("./src/chat/endpoints/users/index.ts"),
				g = n("./src/chat/helpers/errors.ts"),
				f = n("./src/chat/models/Channel/index.ts"),
				O = n("./src/chat/models/Contact/index.ts"),
				E = n("./src/chat/models/Experiment/index.ts"),
				j = n("./src/chat/models/User/index.ts"),
				v = n("./src/chat/selectors/channels.ts"),
				C = n("./src/chat/singleton/SendbirdSDK.ts");
			const _ = "USER__ACCOUNT_FETCH_COMPLETED",
				I = "USER__REDDAID_RECEIVED",
				x = "USER__LOID_RECEIVED",
				y = "USER__SESSION_TRACKER_RECEIVED",
				S = "FETCH_EXPERIMENTS_COMPLETED",
				w = Object(i.a)(x),
				N = Object(i.a)("USER__ACCOUNT_FETCH_PENDING"),
				k = Object(i.a)(_),
				M = Object(i.a)("USER__ACCOUNT_FETCH_FAILED"),
				T = Object(i.a)(I),
				A = Object(i.a)(y),
				L = Object(i.a)(S),
				D = () => async (e, t, {
					apiContext: n
				}) => {
					const a = t(),
						{
							session: s,
							account: c,
							experiments: o
						} = a.user;
					if (!s || c && !r()(o)) return;
					e(N());
					const i = await Object(m.c)(n());
					if (i.ok && i.body && i.body.features) {
						const {
							body: t,
							body: {
								features: n
							}
						} = i, a = Object(j.a)(t), s = Object(E.a)(n), c = !!a.prefNightmode;
						e(k(a)), e(L(s)), e(Object(d.switchTheme)(c))
					} else e(M(i.error))
				}, R = "USER__USERS_FETCH_COMPLETED", P = Object(i.a)("USER__USERS_FETCH_PENDING"), U = Object(i.a)(R), B = Object(i.a)("USER__USERS_FETCH_FAILED"), F = e => async (t, n, {
					gqlContext: a
				}) => {
					const c = n().contacts.models,
						r = e.filter(e => !c[e]),
						o = s()(r, 100);
					if (!r.length) return;
					t(P(e));
					const i = await Promise.all(o.map(e => Object(b.b)(a(), {
						ids: e
					}))).catch(() => []);
					for (const e of i)
						if (e.ok && Object(b.c)(e.body)) {
							const n = Object(j.b)(e.body.data.redditorsInfoByIds);
							n ? t(U(n)) : Object(g.b)(`Failed to normalize RedditorsInfoByIds: ${e.body.data.redditorsInfoByIds}`)
						} else t(B())
				}, H = "USERS__USERS_ADD_SELECTED", G = Object(i.a)(H), z = e => async t => {
					t(G(e)), t(Object(u.k)(e))
				}, V = "USERS__USERS_REMOVE_SELECTED", W = Object(i.a)(V), K = "USERS__USERS_REMOVE_ALL_SELECTED", Z = Object(i.a)(K), q = "USERS__BLOCK_USER_COMPLETED", Q = Object(i.a)(q), X = Object(i.a)("USERS__BLOCK_USER_FAILED"), Y = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					const c = a(),
						r = c.contacts.models[e],
						i = r && r.name,
						d = Object(v.x)(c),
						u = Object(v.j)(c) || h.b.JOINED,
						p = d && d.type === f.b.Direct,
						b = Object(v.m)(c);
					if (!b) throw new g.a("currentChannel", b);
					const O = b.channelId;
					if (!O) throw new g.a("blockedChannelId", O);
					const E = await Object(m.a)(s(), e);
					E && E.ok && p ? (await C.a.hideChannel(), n(Q({
						userId: e,
						username: i
					})), t || (n(Object(l.I)(O)), n(Object(l.M)(u)))) : E && E.ok && !p ? (n(Q({
						userId: e,
						username: i
					})), t || n(Object(o.a)())) : E && n(X(E.error))
				}, J = "BLOCKED_USER_LIST_FETCH_COMPLETED", $ = Object(i.a)("BLOCKED_USER_LIST_FETCH_FAILED"), ee = Object(i.a)(J), te = () => async (e, t, {
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
							} = a, c = {};
							n.forEach(e => {
								if (s[e.id]) c[e.id] = {
									...s[e.id],
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
							}), e(ee({
								blockedContacts: c
							}))
						} else e($(t.error))
					}
				}, ne = Object(i.a)("MODERATOR__KICK_USER"), ae = (e, t, n) => async (a, s, {
					apiContext: c
				}) => {
					await Object(p.k)(c(), e, t, n).then(() => {
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
				c = n("./src/chat/actions/tracking.ts"),
				r = n("./src/chat/constants/users.ts"),
				o = n("./src/chat/helpers/urls/index.ts"),
				i = n("./src/chat/selectors/platform.ts"),
				l = n("./src/telemetry/models/Event.ts");
			const {
				Block: d,
				Report: u,
				Kick: h
			} = r.a, m = e => async t => {
				t(Object(s.c)({
					tooltipId: e
				})), t(Object(c.fb)())
			}, p = e => async (t, n) => {
				const s = n(),
					c = Object(i.e)(s);
				if (c) {
					const n = Object(o.getRedirectURL)(Object(o.userActionUrl)(c, e, d));
					t(Object(a.b)(n))
				}
			}, b = e => async (t, n) => {
				const s = n(),
					c = Object(i.e)(s);
				if (c) {
					const n = Object(o.getRedirectURL)(Object(o.userActionUrl)(c, e, u));
					t(Object(a.b)(n))
				}
			}, g = e => async (t, n) => {
				const s = n(),
					c = Object(i.e)(s);
				c && t(Object(a.b)(Object(o.userActionUrl)(c, e, h, {
					source: l.b.ChatSettings
				})))
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
				customPicSize: c,
				isFlipping: i
			}) => {
				const l = g(c),
					u = b(c);
				return r.a.createElement("div", {
					role: "button",
					tabIndex: 0,
					className: Object(o.a)(e, {
						[d.a.small]: t
					}),
					onClick: s,
					style: {
						height: l,
						width: l
					}
				}, n ? r.a.createElement(r.a.Fragment, null, r.a.createElement(m, {
					userId: a,
					height: u,
					width: u
				}), r.a.createElement(p, {
					userId: n,
					height: u,
					width: u
				})) : r.a.createElement(h, {
					height: l,
					width: l,
					userId: a,
					isFlipping: i,
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
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/hooks/usePrevious.ts"),
				o = n("./src/chat/actions/settingsDropdown/index.ts"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/chat/components/ChatIcon/index.tsx"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/chat/constants/messages.ts"),
				m = n("./src/chat/helpers/linkParser/index.ts"),
				p = n("./src/chat/models/Channel/index.ts"),
				b = n("./src/chat/models/Message/adapter.ts"),
				g = n("./src/chat/selectors/experiments.ts"),
				f = n("./src/chat/components/Message/Preview.m.less"),
				O = n.n(f);
			const E = e => {
					var t, n, a;
					const {
						message: r,
						isInvited: o,
						channelData: i
					} = e, l = (({
						currentUserId: e,
						isGroup: t,
						message: n
					}) => n && n.sender && (t || (null == n ? void 0 : n.messageData.type) !== h.c.TEXT) ? e === n.sender.userId ? u.fbt._("You:", null, {
						hk: "wP43r"
					}) : `${n.sender.nickname}:` : "")(e), d = Object(c.e)(g.n);
					if (o && (null == i ? void 0 : i.creationReason) === p.a.AWARDING) return s.a.createElement(s.a.Fragment, null, u.fbt._("Sent a note with an award", null, {
						hk: "4FSnF0"
					}));
					if (!r) return null;
					if (r.messageData.collapsedInvitePreview) return s.a.createElement(s.a.Fragment, null, u.fbt._("Wants to message you", null, {
						hk: "3CbciS"
					}));
					if (o && !d) return s.a.createElement(s.a.Fragment, null, u.fbt._("Wants to message you", null, {
						hk: "3CbciS"
					}));
					switch (r.messageData.type) {
						case h.c.TEXT: {
							const {
								value: e
							} = r.messageData;
							return s.a.createElement(s.a.Fragment, null, [l, " ", Object(m.b)(e) ? u.fbt._("shared a link", null, {
								hk: "1skIrg"
							}) : e])
						}
						case h.c.USER_POST:
						case h.c.POST:
							return s.a.createElement(s.a.Fragment, null, [l, " ", u.fbt._("shared a post", null, {
								hk: "17xxRY"
							}), " ", r.messageData.subreddit]);
						case h.c.COMMENT:
							return s.a.createElement(s.a.Fragment, null, [l, " ", u.fbt._("shared a comment", null, {
								hk: "1esXqZ"
							}), " ", r.messageData.subreddit]);
						case h.c.EMBED:
							return s.a.createElement(s.a.Fragment, null, [l, " ", u.fbt._("shared a link", null, {
								hk: "1skIrg"
							}), " ", r.messageData.value]);
						case h.c.SUBREDDIT:
							return s.a.createElement(s.a.Fragment, null, [l, " ", u.fbt._("shared a community", null, {
								hk: "2GsP2Q"
							}), " ", r.messageData.subreddit]);
						case h.c.SNOOMOJI:
							return s.a.createElement(s.a.Fragment, null, [l, " ", u.fbt._("sent a snoomoji", null, {
								hk: "gRkQH"
							})]);
						case h.c.GIF:
							return s.a.createElement(s.a.Fragment, null, [l, " ", u.fbt._("sent a gif", null, {
								hk: "kIiXZ"
							})]);
						case h.c.IMAGE: {
							const c = e.currentUserId !== (null === (t = null == r ? void 0 : r.sender) || void 0 === t ? void 0 : t.userId);
							return (null === (n = r.messageData.image) || void 0 === n ? void 0 : n.phase) === b.a.PreUpload ? c ? s.a.createElement(s.a.Fragment, null, [null === (a = null == r ? void 0 : r.sender) || void 0 === a ? void 0 : a.nickname, " ", u.fbt._("is sending you an image", null, {
								hk: "f5lD3"
							})]) : s.a.createElement(s.a.Fragment, null, u.fbt._("You are sending an image", null, {
								hk: "1xxKMD"
							})) : s.a.createElement(s.a.Fragment, null, [l, " ", u.fbt._("sent an image", null, {
								hk: "3IN7Ud"
							})])
						}
						default:
							return null
					}
				},
				j = e => s.a.createElement("sub", {
					className: Object(l.a)(O.a.MessagePreview, {
						[O.a.active]: e.isActive,
						[O.a.unread]: e.isInvited || e.isUnread
					})
				}, s.a.createElement(E, e));
			var v = n("./src/chat/constants/channels.ts"),
				C = n("./src/chat/controls/Counter/index.tsx"),
				_ = n("./src/chat/helpers/urls/index.ts"),
				I = n("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				x = n("./src/chat/selectors/channels.ts"),
				y = n("./src/chat/components/ChatListItem/index.m.less"),
				S = n.n(y);
			const w = ({
				active: e,
				children: t,
				unread: n
			}) => s.a.createElement("h4", {
				className: Object(l.a)(S.a.ItemTitleName, {
					[S.a.active]: e,
					[S.a.unread]: n
				})
			}, t);
			var N = ({
					channelId: e,
					channelData: t,
					currentUserId: n,
					isGroup: r,
					isSelected: o,
					channelState: u,
					message: h,
					unread: m,
					mentionCount: p = 0,
					unreadMessageCount: b = 0
				}) => {
					var f;
					const O = Object(c.e)(t => Object(x.t)(t, e)),
						E = Object(c.e)(t => Object(x.k)(t, e)),
						y = Object(c.e)(t => Object(x.K)(t, {
							channelId: e
						})),
						N = Object(c.e)(g.q),
						k = u === v.b.INVITED,
						M = Object(a.useMemo)(() => k ? Object(_.channelAction)(e, v.a.VIEW_INVITE) : Object(_.channelUrl)(e), [k, e]),
						T = Object(a.useMemo)(() => Object(_.getRedirectURL)(M), [M]),
						A = Object(a.useMemo)(() => r ? p : b, [p, b, r]);
					return s.a.createElement(i.a, {
						to: T,
						className: Object(l.a)(S.a.ChatListItem, {
							[S.a.selected]: o,
							[S.a.unread]: m
						})
					}, (null == O ? void 0 : O.firstUser) && s.a.createElement(d.a, {
						className: S.a.ChatIcon,
						userId: O.firstUser.id,
						secondUserId: null === (f = O.secondUser) || void 0 === f ? void 0 : f.id
					}), s.a.createElement("div", {
						className: S.a.ItemTitle
					}, s.a.createElement(w, {
						unread: m || k,
						active: o
					}, s.a.createElement("span", {
						className: S.a.ChannelName
					}, E)), s.a.createElement("div", {
						className: S.a.Description
					}, s.a.createElement(j, {
						currentUserId: n,
						isGroup: r,
						isInvited: k,
						isUnread: m,
						isActive: o,
						message: h,
						channelData: t
					}), s.a.createElement(C.b, {
						count: A
					}))), y && N && s.a.createElement(I.a, {
						className: S.a.NotificationDisabledIcon,
						isFilled: !0
					}))
				},
				k = n("./src/chat/selectors/user.ts");
			t.a = ({
				channels: e
			}) => {
				const t = Object(c.d)(),
					n = Object(c.e)(k.a),
					i = Object(c.e)(x.n),
					l = Object(r.a)(i),
					d = Object(c.e)(e => l && Object(x.l)(e, l)),
					u = Object(a.useCallback)(() => {
						t(Object(o.d)())
					}, [t]);
				return Object(a.useEffect)(() => {
					l !== i && d === p.b.Group && u()
				}, [l, i, d, u]), s.a.createElement(s.a.Fragment, null, e.map(e => {
					const {
						channelId: t,
						lastMessage: a,
						channelState: c,
						unreadMessageCount: r,
						unreadMentionCount: o,
						channelData: l
					} = e;
					return s.a.createElement(N, {
						key: t,
						channelId: t,
						channelData: l,
						channelState: c,
						isSelected: t === i,
						isGroup: e.type === p.b.Group,
						message: a,
						unread: !!r,
						mentionCount: o,
						currentUserId: n,
						unreadMessageCount: r
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
				c = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/chat/actions/tracking.ts"),
				d = n("./src/chat/components/MemberActionDropdown/index.tsx"),
				u = n("./src/chat/constants/dropdown.ts"),
				h = n("./src/chat/controls/Title/index.tsx"),
				m = n("./src/chat/icons/Nsfw/index.tsx"),
				p = n("./src/chat/icons/Userpic/index.tsx"),
				b = n("./src/chat/selectors/channels.ts"),
				g = n("./src/chat/selectors/members.ts"),
				f = n("./src/chat/selectors/user.ts"),
				O = n("./src/chat/components/ChatMemberList/index.m.less"),
				E = n.n(O);
			const j = ({
				children: e,
				onClick: t,
				className: n
			}) => c.a.createElement("li", {
				onClick: t,
				className: n
			}, e);
			t.a = ({
				className: e,
				members: t,
				channelId: n,
				selectIndex: O,
				minimal: v,
				onClick: C,
				useNSFWIcons: _,
				modIndicator: I,
				onSelectName: x
			}) => {
				const y = Object(r.d)(),
					S = Object(r.e)(e => t || Object(g.b)(e, n) || []),
					w = Object(r.e)(e => Object(b.B)(e, "type")),
					N = Object(r.e)(f.a);
				return Object(s.useEffect)(() => {
					((e, t, n) => {
						if (n && void 0 !== t && e.length >= t) {
							const a = e[t];
							a && n(a.name)
						}
					})(t, O, x)
				}, [t, O, x]), c.a.createElement("ul", {
					className: e
				}, S && S.map((e, t) => c.a.createElement(j, {
					key: e.name,
					className: Object(i.a)(E.a.ListItem, u.a, {
						[E.a.selected]: O === t,
						[E.a.withMenu]: !v
					}),
					onClick: () => {
						C ? C(e.name) : (async e => {
							y(Object(l.t)()), await y(Object(l.C)()), window.open(`${o.a.redditUrl}/user/${e}`)
						})(e.name)
					}
				}, c.a.createElement("span", {
					className: E.a.IconContainer
				}, _ && e.isNSFW ? c.a.createElement(m.b, null) : c.a.createElement(p.a, {
					userId: e.id
				})), c.a.createElement(h.a, {
					className: E.a.Title
				}, e.name), e.isModerator && I && c.a.createElement("span", {
					className: E.a.Info
				}, w && a.fbt._("Host", null, {
					hk: "4berci"
				})), e.isNSFW && c.a.createElement("span", {
					className: E.a.Warning
				}, a.fbt._("NSFW", null, {
					hk: "36qPno"
				})), e.isBlockedByMe && c.a.createElement("span", {
					className: E.a.Warning
				}, a.fbt._("Blocked", null, {
					hk: "1RUrSV"
				})), !v && e.id !== N && c.a.createElement(d.a, {
					className: E.a.MemberActionDropdown,
					channelId: n,
					containerClassName: u.a,
					dropdownIndex: t,
					id: `MemberAction--Select-${t}`,
					userId: e.id,
					isBlockedUser: e.isBlockedByMe
				}))))
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
				p = n("./src/chat/icons/svgs/NavClose/index.tsx"),
				b = n("./src/chat/selectors/app.ts"),
				g = n("./src/chat/components/CloseIcon/index.m.less"),
				f = n.n(g);
			t.a = ({
				className: e
			}) => {
				const t = Object(r.d)();
				Object(r.e)(b.d);
				return c.a.createElement(h.d, {
					className: Object(o.a)(f.a.IconButton, e),
					onClick: Object(m.b)(() => {
						t(Object(i.sizeChanged)(u.a.HIDDEN)), t(Object(d.i)()), t(Object(l.b)())
					}),
					title: a.fbt._("Close chat", null, {
						hk: "4dFacQ"
					})
				}, c.a.createElement(p.a, null))
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
				c = n("./src/config.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/components/CrisisFlow/CrisisFlowPage.m.less"),
				i = n.n(o),
				l = n("./src/chat/components/CrisisFlow/CrisisMainPage/index.m.less"),
				d = n.n(l);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = r.a.div("CrisisContent", d.a), m = r.a.div("CrisisImageContainer", i.a), p = r.a.img("CrisisImage", d.a), b = r.a.h2("CrisisTitle", i.a), g = r.a.p("CrisisDescription", i.a);
			var f = e => s.a.createElement(h, null, s.a.createElement(m, null, s.a.createElement(p, {
				src: `${c.a.assetPath}/img/crisis-line-icon.png`
			})), s.a.createElement(b, null, u._("Would you like Reddit to reach out to {username} ?", [u._param("username", s.a.createElement("span", null, "u/", e.username))], {
				hk: "3RFVlj"
			})), s.a.createElement(g, null, u._("We’ve partnered with {=Crisis Text Line} to provide redditors with support from trained Crisis Counselors, and will reach out (confidentially) to let {username} know that there are people who are here for them.", [u._param("=Crisis Text Line", s.a.createElement("a", {
				href: "https://www.crisistextline.org/",
				target: "_blank",
				rel: "noopener noreferrer"
			}, u._("Crisis Text Line", null, {
				hk: "4ih1Mk"
			}))), u._param("username", s.a.createElement("strong", null, "u/", e.username))], {
				hk: "3eDxpt"
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
			var j = e => s.a.createElement("svg", {
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
			var v = e => s.a.createElement("svg", {
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
				C = n("./src/chat/components/CrisisFlow/CrisisThankYouPage/index.m.less"),
				_ = n.n(C);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = r.a.div("CrisisImageContainer", i.a), y = r.a.h2("CrisisTitle", i.a), S = r.a.p("CrisisDescription", i.a), w = r.a.div("CrisisOtherActions", _.a), N = r.a.h4("CrisisOtherActionsTitle", _.a), k = r.a.div("CrisisLinkIconContainer", _.a), M = r.a.div("CrisisLinkText", _.a), T = r.a.h3("CrisisLinkTitle", _.a), A = r.a.p("CrisisLinkDescription", _.a);
			var L = e => s.a.createElement("div", {
				className: _.a.CrisisThankYouPage
			}, s.a.createElement(x, null, s.a.createElement(v, {
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
			}, s.a.createElement(k, null, s.a.createElement(E, null)), s.a.createElement(M, null, s.a.createElement(T, null, I._("Learn how to help someone in crisis", null, {
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
			}, s.a.createElement(k, null, s.a.createElement(j, null)), s.a.createElement(M, null, s.a.createElement(T, null, I._("Get yourself support", null, {
				hk: "kTT0U"
			})), s.a.createElement(A, null, I._("If this has brought up difficult emotions, there are people and resources here for you too.", null, {
				hk: "37R4JZ"
			}))), s.a.createElement(O, {
				className: _.a.CrisisLinkArrow
			}))));
			class D extends s.a.Component {
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement(a.Fragment, null, e.ctlSubmitted ? s.a.createElement(L, {
						username: e.username
					}) : s.a.createElement(f, {
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
				return Kc
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
			var p = ({
					dropZoneRef: e,
					onChange: t
				}) => {
					const n = Object(o.d)(),
						[a, s] = Object(c.useState)(!1),
						l = Object(c.useRef)(null),
						h = l.current,
						p = e.current;
					return Object(c.useEffect)(() => {
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
							var c, r;
							if (a) {
								s(!1);
								const t = !!(null === (c = null == e ? void 0 : e.dataTransfer) || void 0 === c ? void 0 : c.files.length);
								n(Object(d.h)({
									isOver: !1,
									isDrop: t
								}))
							}(null === (r = null == e ? void 0 : e.dataTransfer) || void 0 === r ? void 0 : r.files.length) && t(e.dataTransfer.files, e)
						}))
					}), r.a.createElement("div", {
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
			var f = e => r.a.createElement(b.a, g({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("path", {
					d: "M18.859 3.712A2.611 2.611 0 0 0 17 2.939h-2.182l-1.163-1.6a1.128 1.128 0 0 0-.91-.464h-5.49a1.13 1.13 0 0 0-.91.463l-1.163 1.6H3A2.629 2.629 0 0 0 .375 5.563V15.5A2.629 2.629 0 0 0 3 18.125h13.969a2.63 2.63 0 0 0 2.624-2.616l.031-9.936a2.609 2.609 0 0 0-.765-1.861ZM18.343 15.5a1.378 1.378 0 0 1-1.374 1.371H3A1.377 1.377 0 0 1 1.625 15.5V5.563A1.377 1.377 0 0 1 3 4.188h2.818l1.5-2.063h5.364l1.5 2.063H17a1.374 1.374 0 0 1 1.374 1.38Z"
				}), r.a.createElement("path", {
					d: "M10 5.375A4.625 4.625 0 1 0 14.625 10 4.631 4.631 0 0 0 10 5.375Zm0 8A3.375 3.375 0 1 1 13.375 10 3.379 3.379 0 0 1 10 13.375Z"
				})),
				O = n("./src/chat/components/FileUploader/ImageInput/index.m.less"),
				E = n.n(O);
			var j = e => r.a.createElement("label", {
					className: e.className,
					tabIndex: 0
				}, e.children ? e.children : r.a.createElement(f, {
					className: E.a.Icon
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
					className: E.a.Input
				})),
				v = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/chat/actions/toast.ts")),
				C = n("./src/chat/models/Uploads/index.ts"),
				_ = n("./src/chat/selectors/channels.ts"),
				I = n("./src/chat/selectors/uploads.ts");
			const {
				ActiveFilesLimitExceeded: x,
				UnsupportedBrowser: y,
				InvalidMediaType: S,
				FileSizeLimitExceeded: w
			} = C.a, N = new Set(Object.values(C.d)), k = e => {
				const t = (e => {
						if (window.URL && window.URL.createObjectURL) return window.URL.createObjectURL(e)
					})(e),
					n = (e => {
						if (!e) return;
						const t = e.replace("image/", "").toUpperCase();
						return N.has(t) ? t : null
					})(e.type),
					a = e.size;
				return t ? n ? n === C.d.GIF && a > 41943040 ? {
					error: w
				} : a > 20971520 ? {
					error: w
				} : {
					metadata: {
						localUrl: t,
						mimetype: n,
						size: a
					}
				} : {
					error: S
				} : {
					error: y
				}
			};
			var M = () => {
				const e = Object(o.d)(),
					{
						isOver: t,
						isDrop: n
					} = Object(o.e)(I.a),
					a = Object(o.e)(I.b),
					s = Object(o.e)(_.n),
					c = a.length >= 8;
				return {
					uploads: a,
					isDrop: n,
					isOver: t,
					isLimited: c,
					setFiles: (t, n) => {
						if (c) return void e(Object(v.f)([x]));
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
									return a && n.push(a), s && Object(C.e)(e, s, t)
								}).filter(e => e),
								errors: n
							}
						})(t, n);
						const i = 8 - (r.length + a.length);
						i < 0 && (r = r.splice(0, i), o = o.push(x) && o || []), s && r.length ? r.forEach(t => (e => new Promise(t => {
							const n = new Image;
							n.onerror = () => t({}), n.onload = () => t({
								height: n.height,
								width: n.width
							}), n.src = e
						}))(t.metadata.localUrl).then(({
							height: n,
							width: a
						}) => {
							t.metadata.height = n, t.metadata.width = a, e(Object(d.f)({
								upload: t,
								channelId: s
							}))
						})) : o.length && e(Object(v.f)(o))
					}
				}
			};

			function T(e) {
				const t = Object(o.d)(),
					{
						setFiles: n
					} = M();
				return r.a.createElement(p, {
					dropZoneRef: e.dropZoneRef,
					onChange: e => {
						n(e, C.b.Drop), t(Object(l.G)(e.length))
					}
				})
			}

			function A(e) {
				const t = Object(o.d)(),
					{
						setFiles: n
					} = M();
				return r.a.createElement(j, {
					className: e.className,
					onChange: e => {
						n(e, C.b.Gallery), t(Object(l.u)())
					}
				}, e.children)
			}
			var L = n("./node_modules/lodash/debounce.js"),
				D = n.n(L),
				R = n("./node_modules/lodash/map.js"),
				P = n.n(R),
				U = n("./node_modules/lodash/sortBy.js"),
				B = n.n(U),
				F = n("./src/chat/actions/channel.ts"),
				H = n("./src/chat/actions/container.ts"),
				G = n("./src/chat/actions/message/index.ts"),
				z = n("./src/chat/actions/message/inboxScroller.ts"),
				V = n("./src/chat/actions/message/richUnit.ts"),
				W = n("./src/chat/components/BlockedUserPrompt/index.m.less"),
				K = n.n(W);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var q = e => r.a.createElement(b.a, Z({}, e, {
				viewBox: "0 0 20 20"
			}), r.a.createElement("path", {
				d: "M10 .875A9.125 9.125 0 1 0 19.125 10 9.135 9.135 0 0 0 10 .875Zm1.087 14.643H8.913V8.162h2.174Zm.058-8.852A1.35 1.35 0 1 1 11.319 6a1.3 1.3 0 0 1-.174.666Z"
			}));
			const {
				fbt: Q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var X = ({
					hasJoinedChat: e
				}) => r.a.createElement("span", {
					className: K.a.blockedUserMessage
				}, r.a.createElement("span", {
					className: K.a.iconWrapper
				}, r.a.createElement(q, {
					className: K.a.infoIcon
				}), Q._("Only visible to you", null, {
					hk: "1KPOVD"
				})), e ? Q._("An account you blocked just joined this chat. Stay and see each other's messages and activity or silently leave.", null, {
					hk: "1Wr2Y0"
				}) : Q._("An account you blocked is in the chat. Stay and see each other's messages and activity or silently leave.", null, {
					hk: "4oHZil"
				})),
				Y = n("./src/chat/models/Channel/index.ts");
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var $ = ({
					channel: e
				}) => {
					const t = e.type === Y.b.Direct,
						n = e.members.filter(e => e.isBlockedByMe);
					if (t) {
						const e = null == n ? void 0 : n[0];
						if (e) return r.a.createElement("span", {
							className: K.a.blockedUserMessage
						}, J._("@{name} blocked", [J._param("name", null == e ? void 0 : e.name)], {
							hk: "wJJtg"
						}))
					} else {
						if (e.members.filter(e => e.state === Y.e.Joined && e.isBlockedByMe).length) return r.a.createElement(X, {
							hasJoinedChat: !0
						});
						if (null == n ? void 0 : n.length) return r.a.createElement(X, {
							hasJoinedChat: !1
						})
					}
					return null
				},
				ee = n("./src/chat/controls/Button/index.tsx"),
				te = n("./src/chat/icons/svgs/Close/index.tsx");

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ae = e => r.a.createElement(b.a, ne({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("g", {
					id: "icons_flat"
				}, r.a.createElement("polygon", {
					points: "19,9 11,9 11,1 9,1 9,9 1,9 1,11 9,11 9,19 11,19 11,11 19,11"
				}))),
				se = n("./src/chat/components/FileUploader/FilePreview/index.m.less"),
				ce = n.n(se);
			var re = () => {
					const e = Object(o.d)(),
						{
							uploads: t,
							isDrop: n,
							isOver: a,
							isLimited: s
						} = M(),
						c = Object(o.e)(_.J),
						l = t.map(t => r.a.createElement("div", {
							className: ce.a.Item,
							key: `item-${t.metadata.localUrl}`
						}, r.a.createElement(ee.d, {
							className: ce.a.CloseButton,
							onClick: () => e(Object(d.g)(t.id))
						}, r.a.createElement(te.a, null)), r.a.createElement("img", {
							className: ce.a.Image,
							src: t.metadata.localUrl,
							key: `image-${t.metadata.localUrl}`
						}))),
						u = (a || n || l.length) && !s || s && a ? r.a.createElement(A, {
							className: Object(i.a)(ce.a.Placeholder, {
								[ce.a.isLimited]: s
							}),
							key: "item-placeholder"
						}, r.a.createElement(ae, {
							className: ce.a.Icon
						})) : null;
					return !l && !u || c ? null : r.a.createElement("div", {
						className: ce.a.Preview
					}, l, u)
				},
				oe = n("./node_modules/fbt/lib/FbtPublic.js"),
				ie = n("./src/chat/actions/channel/dropdown.ts"),
				le = n("./src/chat/actions/inviteLink/index.ts"),
				de = n("./src/chat/icons/svgs/InviteMember/index.tsx"),
				ue = n("./src/chat/icons/svgs/Link/index.tsx"),
				he = n("./src/chat/icons/svgs/Profile/index.tsx"),
				me = n("./src/chat/icons/Userpic/index.tsx"),
				pe = n("./src/chat/selectors/experiments.ts"),
				be = n("./src/chat/components/Intro/index.m.less"),
				ge = n.n(be);
			var fe = ({
					users: e,
					channel: t
				}) => {
					const n = Object(o.d)(),
						a = Object(o.e)(pe.g);
					return r.a.createElement("span", {
						className: ge.a.Wrapper
					}, r.a.createElement("ul", {
						className: ge.a.Users
					}, e.map((e, t, n) => r.a.createElement("li", {
						className: ge.a.User,
						key: e.id
					}, r.a.createElement(me.a, {
						height: "16px",
						width: "16px",
						userId: e.id
					}), r.a.createElement("span", {
						className: ge.a.UserTitle
					}, `${e.name}${t<n.length-1?",":""}`)))), t.type === Y.b.Group && r.a.createElement("div", {
						className: ge.a.IconButtons
					}, a && r.a.createElement(ee.b, {
						className: ge.a.IconButton,
						text: oe.fbt._("Copy link", null, {
							hk: "2Aapc1"
						}),
						onClick: () => {
							(null == t ? void 0 : t.channelId) && n(Object(le.e)(t.channelId))
						}
					}, r.a.createElement(ue.a, null)), r.a.createElement(ee.b, {
						className: ge.a.IconButton,
						text: oe.fbt._("Members", null, {
							hk: "3IBb8c"
						}),
						onClick: () => {
							n(Object(ie.j)())
						}
					}, r.a.createElement(he.a, null)), r.a.createElement(ee.b, {
						className: ge.a.IconButton,
						text: oe.fbt._("Invite", null, {
							hk: "3DLcPk"
						}),
						onClick: () => {
							n(Object(ie.c)())
						}
					}, r.a.createElement(de.a, null))))
				},
				Oe = n("./node_modules/lodash/noop.js"),
				Ee = n.n(Oe),
				je = n("./node_modules/lodash/throttle.js"),
				ve = n.n(je),
				Ce = n("./src/chat/actions/channel/draftMessage.ts"),
				_e = n("./src/chat/actions/gifs/index.ts");
			const Ie = "/";
			var xe = n("./node_modules/react-router-redux/es/index.js"),
				ye = n("./src/lib/constants/index.ts"),
				Se = n("./src/telemetry/models/Event.ts"),
				we = n("./src/chat/actions/tooltip.ts"),
				Ne = n("./src/chat/components/MessageInput/constants.ts"),
				ke = n("./src/chat/constants/messages.ts"),
				Me = n("./src/chat/icons/Snoo/index.tsx");
			const Te = function(e, t) {
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
				Ae = function(e) {
					return (/^(@|u\/)([^\s]+)/g.exec(e) || [])[2] || ""
				},
				Le = function(e, t) {
					const {
						word: n
					} = Te(e, t);
					return {
						hasUsername: /^(@|u\/)([^\s]+)?$/g.test(n),
						username: Ae(n)
					}
				},
				De = function(e, t, n) {
					const {
						word: a,
						posStart: s,
						posEnd: c
					} = Te(e, n), r = (/^(@|u\/)/gm.exec(a) || [])[1];
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
				Re = e => Boolean(e.match(/^(\/)(\w+)?$/g));
			var Pe, Ue = n("./src/chat/constants/users.ts"),
				Be = n("./src/chat/endpoints/accounts/index.ts"),
				Fe = n("./src/chat/endpoints/sendbird/index.ts"),
				He = n("./src/chat/helpers/urls/index.ts"),
				Ge = n("./src/chat/models/Channel/utils.ts"),
				ze = n("./src/chat/models/Contact/index.ts"),
				Ve = n("./src/chat/selectors/contacts.ts");
			! function(e) {
				e.GIF = "gif", e.SNOOMOJI = "snoomoji", e.INVITE = "invite", e.MEMBERS = "members", e.MUTE = "mute", e.UNMUTE = "unmute", e.LEAVE = "leave", e.KICK = "kick", e.NEW_CHAT = "new_chat", e.DIRECT = "direct", e.TEXT_EMOJI = "text_emoji"
			}(Pe || (Pe = {}));
			const {
				Group: We
			} = Y.b, Ke = {
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
			}, Ze = ({
				commandValue: e,
				channelId: t
			}) => async (n, a, {
				apiContext: s
			}) => {
				const c = a(),
					{
						user: {
							session: r
						}
					} = c;
				if (t && e && r) {
					const n = Object(_.h)(a(), t);
					if ((null == n ? void 0 : n.type) === Y.b.Group) {
						if (e === ye.E) return;
						let n = [];
						const c = Object(Ve.c)(a(), e);
						if (c) n = [{
							user_id: c.id,
							nickname: c.name
						}];
						else {
							const t = await Object(Be.b)(s(), e);
							if (t.ok) {
								const e = Object(ze.d)(t.body.data);
								e && (n = [{
									user_id: e.id,
									nickname: e.name
								}])
							}
						}
						n.length && await Object(Fe.i)(s(), r, n, Object(Ge.a)(t))
					}
				}
			}, qe = ({
				channelId: e,
				commandShortcut: t
			}) => async n => {
				if (e && t) {
					const a = Ke[t];
					a && n(Object(G.r)(e, a, ke.c.TEXT))
				}
			}, Qe = [{
				name: Pe.GIF,
				command: "giphy",
				aliases: ["gif", "g"],
				description: "Giphy",
				example: "/giphy query · /gif query · /g query",
				action: ({
					commandValue: e
				}) => async t => {
					e && t(Object(_e.l)(e)), t(Object(we.c)({
						tooltipId: Ne.b
					}))
				}
			}, {
				name: Pe.SNOOMOJI,
				command: "snoomoji",
				aliases: ["s"],
				description: "Add a snoomoji",
				example: "/snoomoji name · /s name",
				action: ({
					commandValue: e,
					channelId: t
				}) => async n => {
					e && t && Me.b.includes(e) ? n(Object(G.r)(t, e.trim(), ke.c.SNOOMOJI)) : n(Object(we.c)({
						tooltipId: Ne.e
					}))
				}
			}, {
				name: Pe.INVITE,
				command: "invite",
				description: "Invite",
				example: "/invite username",
				channelType: We,
				action: Ze
			}, {
				name: Pe.MEMBERS,
				command: "members",
				channelType: We,
				aliases: ["m"],
				description: "Display group chat's member list",
				example: "/members · /m",
				action: ({
					channelId: e
				}) => async (t, n) => {
					if (e) {
						const a = Object(_.h)(n(), e);
						(null == a ? void 0 : a.type) === Y.b.Group && t(Object(ie.j)())
					}
				}
			}, {
				name: Pe.MUTE,
				command: "mute",
				description: "Mute this chat",
				action: ({
					channelId: e
				}) => async (t, n) => {
					e && t(Object(ie.e)(e))
				}
			}, {
				name: Pe.UNMUTE,
				command: "unmute",
				description: "Unmute this chat",
				action: ({
					channelId: e
				}) => async (t, n) => {
					e && t(Object(ie.g)(e))
				}
			}, {
				name: Pe.LEAVE,
				command: "leave",
				description: "Leave this chat",
				action: ({
					channelId: e
				}) => async (t, n) => {
					e && t(Object(F.G)(e))
				}
			}, {
				name: Pe.KICK,
				command: "kick",
				description: "Kick a user from this chat",
				channelType: We,
				example: "/kick u/username",
				action: ({
					commandValue: e,
					channelId: t
				}) => async (n, a, {
					apiContext: s
				}) => {
					const c = a(),
						{
							user: {
								session: r
							}
						} = c;
					if (!Object(_.a)(c)) return;
					const o = Ae(e);
					if (t && o && r) {
						const e = Object(_.h)(a(), t);
						if ((null == e ? void 0 : e.type) === Y.b.Group) {
							if (o === ye.E) return;
							let e;
							const c = Object(Ve.c)(a(), o);
							if (c) e = c.id;
							else {
								const t = await Object(Be.b)(s(), o);
								if (t.ok) {
									const n = Object(ze.d)(t.body.data);
									n && (e = n.id)
								}
							}
							e && n(Object(xe.b)(Object(He.userActionUrl)(t, e, Ue.a.Kick, {
								source: Se.b.ChatView
							})))
						}
					}
				}
			}, {
				name: Pe.NEW_CHAT,
				command: "new",
				description: "Start new chat",
				action: () => async e => {
					const t = Object(He.getRedirectURL)(Object(He.channelUrl)("create"));
					e(Object(xe.b)(t))
				}
			}, {
				name: Pe.DIRECT,
				command: "dm",
				description: "Direct message someone in this chat",
				example: "/dm u/username",
				action: ({
					commandValue: e
				}) => async (t, n) => {
					if (!e) return;
					const a = Object(_.q)(n(), e);
					if (a) {
						const e = Object(He.getRedirectURL)(Object(He.channelUrl)(a.channelId));
						t(Object(xe.b)(e))
					} else t(Ze({
						commandValue: e
					}))
				}
			}, ...Object.keys(Ke).map(e => ({
				name: Pe.TEXT_EMOJI,
				command: e,
				description: Ke[e],
				action: qe
			}))], Xe = (e, t) => async n => {
				Qe.forEach(async a => {
					var s;
					const c = (e => {
							const t = e.map(e => `${Ie}${e}`).join("|");
							return new RegExp(`^(${t})?(\\s.+)?$`, "i")
						})([...(null === (s = a.aliases) || void 0 === s ? void 0 : s.length) ? a.aliases : [], a.command]),
						r = e.match(c);
					if (null == r ? void 0 : r.length) {
						const e = r[1].replace("/", "");
						n(Object(l.U)(e));
						const s = r[2];
						await n(a.action({
							commandValue: null == s ? void 0 : s.trim(),
							channelId: t,
							commandShortcut: e
						})), n(Object(Ce.f)(t))
					}
				})
			};
			var Ye = n("./src/chat/actions/surveyTrigger/index.ts"),
				Je = n("./src/higherOrderComponents/asTooltip.tsx"),
				$e = n("./src/chat/components/Scroller/index.tsx"),
				et = n("./src/chat/constants/page.ts"),
				tt = n("./src/chat/controls/Dropdown/index.tsx"),
				nt = n("./src/chat/selectors/app.ts"),
				at = n("./src/chat/selectors/tooltip.ts"),
				st = n("./src/chat/components/MessageTooltip/index.m.less"),
				ct = n.n(st);
			const rt = "MessageInputTooltip--Container",
				ot = Object(Je.a)(tt.a),
				it = ({
					children: e
				}) => r.a.createElement("div", {
					className: ct.a.Picker
				}, e);
			var lt = ({
				id: e,
				isOpen: t,
				children: n,
				arrowOffset: a = 15,
				shouldArrowShow: s = !0
			}) => {
				const c = Object(o.e)(Object(at.b)(e)),
					l = Object(o.d)();
				return r.a.createElement(ot, {
					className: Object(i.a)(ct.a.Dropdown, {
						[ct.a.noArrow]: !s
					}),
					tooltipId: rt,
					container: document.getElementById(et.a),
					isOpen: t || c,
					targetPosition: ["left", "bottom"],
					excludeContainerPosition: !0,
					closeOnClickOutside: !0,
					isOverlayOff: !0,
					style: {
						top: "unset",
						left: "unset",
						right: "324px",
						bottom: s ? "70px" : "50px"
					}
				}, r.a.createElement("div", {
					className: ct.a.DropdownWrapper,
					onClick: () => l(Object(we.d)())
				}, r.a.createElement(it, null, n, s && r.a.createElement("span", {
					className: ct.a.Arrow,
					style: {
						right: `${a}px`
					}
				}))))
			};
			var dt = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				ut = n("./src/chat/controls/Gif/index.tsx");

			function ht() {
				return (ht = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var mt = e => r.a.createElement(b.a, ht({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? r.a.createElement("path", {
					d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375Zm3.53,12.1-1.06,1.06L10,11.061,7.53,13.53,6.47,12.47,8.939,10,6.47,7.53,7.53,6.47,10,8.939,12.47,6.47l1.06,1.06L11.061,10Z"
				}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("path", {
					d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375Zm0,18A8.375,8.375,0,1,1,18.375,10,8.384,8.384,0,0,1,10,18.375Z"
				}), r.a.createElement("polygon", {
					points: "12.558 6.558 10 9.116 7.442 6.558 6.558 7.442 9.116 10 6.558 12.558 7.442 13.442 10 10.884 12.558 13.442 13.442 12.558 10.884 10 13.442 7.442 12.558 6.558"
				}))),
				pt = n("./src/chat/icons/svgs/Search/index.tsx"),
				bt = n("./src/chat/selectors/gifs.ts"),
				gt = n("./src/chat/components/MessageTooltip/Picker/Gif/index.m.less"),
				ft = n.n(gt);
			const Ot = ({
					children: e
				}) => {
					const t = Object(o.e)(nt.g);
					return r.a.createElement("div", {
						className: Object(i.a)(ft.a.Wrapper, {
							[ft.a.embedded]: t
						})
					}, e)
				},
				Et = ({
					children: e,
					isVisible: t,
					onClick: n
				}) => t ? r.a.createElement("div", {
					className: ft.a.ClearIcon,
					onClick: n
				}, e) : null,
				jt = () => {
					const e = Object(o.e)(bt.b),
						[t, n] = Object(c.useState)(() => e),
						a = Object(c.useRef)(null),
						s = Object(o.d)(),
						i = Object(c.useCallback)(D()(e => {
							(null == e ? void 0 : e.length) >= 2 ? s(Object(_e.k)(10, e)) : s(Object(_e.l)(""))
						}, 500), []);
					return Object(c.useEffect)(() => {
						var e;
						null === (e = null == a ? void 0 : a.current) || void 0 === e || e.focus()
					}, [a]), r.a.createElement("div", {
						className: ft.a.SearchBarWrapper,
						onClick: e => e.stopPropagation()
					}, r.a.createElement(pt.a, {
						className: ft.a.SearchIcon
					}), r.a.createElement("input", {
						className: ft.a.SearchBar,
						ref: a,
						value: t,
						placeholder: oe.fbt._("Search", null, {
							hk: "3ixhgZ"
						}),
						tabIndex: 0,
						onChange: e => {
							(e => {
								n(e), i(e)
							})(e.currentTarget.value)
						}
					}), r.a.createElement(Et, {
						onClick: async () => {
							(null == a ? void 0 : a.current) && (await s(Object(_e.l)("")), n(""), a.current.focus(), s(Object(_e.j)(20)))
						},
						isVisible: Boolean(t)
					}, r.a.createElement(mt, null)))
				},
				vt = ({
					onPickGif: e
				}) => {
					const t = Object(o.d)(),
						n = Object(o.e)(bt.a),
						a = Object(o.e)(bt.d),
						s = Object(c.useRef)(null),
						i = Object(o.e)(bt.b),
						l = Object(o.e)(bt.c),
						d = Object(o.e)(bt.f);
					Object(c.useEffect)(() => {
						var e;
						(null === (e = null == s ? void 0 : s.current) || void 0 === e ? void 0 : e.scrollToTop) && s.current.scrollToTop()
					}, [i]), Object(c.useEffect)(() => {
						(null == n ? void 0 : n.length) || i || t(Object(_e.j)(20)), i && t(Object(_e.k)(10, i))
					}, []);
					const u = (t = !1) => (null == n ? void 0 : n.length) ? n.map((n, a) => {
						if (Boolean(a % 2) === t) return r.a.createElement(ut.a, {
							className: ft.a.Gif,
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
					return r.a.createElement($e.b, {
						className: ft.a.GifListWrapper,
						ref: s,
						loadMoreRows: () => t(Object(_e.k)(10, i)),
						isLoadMoreRowsComplete: (() => !!a) || l
					}, r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: ft.a.Column
					}, u(), d ? Object(dt.c)({
						height: dt.f.XS
					}) : a ? Object(dt.a)(dt.b.FIRST) : null), r.a.createElement("div", {
						className: ft.a.Column
					}, u(!0), d ? Object(dt.c)({
						height: dt.f.S
					}) : null, a && !d ? Object(dt.a)(dt.b.SECOND) : null)))
				};
			var Ct = ({
					onPickGif: e
				}) => r.a.createElement(Ot, null, r.a.createElement(jt, null), r.a.createElement(vt, {
					onPickGif: e
				})),
				_t = n("./src/config.ts"),
				It = n("./src/chat/icons/svgs/ChatNew/index.tsx"),
				xt = n("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				yt = n("./src/chat/icons/svgs/EnableNotifications/index.tsx");

			function St() {
				return (St = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var wt = e => r.a.createElement(b.a, St({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? r.a.createElement("path", {
				d: "M10 .875A9.125 9.125 0 1019.125 10 9.135 9.135 0 0010 .875zM11.107 15a1.242 1.242 0 01-.465.462 1.342 1.342 0 01-1.3 0 1.236 1.236 0 01-.465-.465 1.287 1.287 0 01-.167-.65 1.306 1.306 0 01.167-.653 1.251 1.251 0 01.465-.471 1.27 1.27 0 01.653-.175 1.253 1.253 0 01.649.175A1.322 1.322 0 0111.107 15zm1.781-6.251a2.423 2.423 0 01-.407.646 8.565 8.565 0 01-.629.615q-.335.3-.53.513A1.922 1.922 0 0011 11a1.375 1.375 0 00-.13.6v.6H9.049v-.574a2.411 2.411 0 01.181-.963 2.479 2.479 0 01.435-.694 7.663 7.663 0 01.663-.632q.287-.254.454-.421a1.56 1.56 0 00.277-.372.93.93 0 00.109-.445.856.856 0 00-.15-.5 1.029 1.029 0 00-.407-.346 1.262 1.262 0 00-.564-.127 1.314 1.314 0 00-.608.145 1.153 1.153 0 00-.448.4 1.035 1.035 0 00-.174.566H6.93a2.887 2.887 0 01.417-1.486 2.822 2.822 0 011.118-1.042 3.441 3.441 0 011.63-.377 3.483 3.483 0 011.518.322 2.535 2.535 0 011.059.9 2.331 2.331 0 01.383 1.318 2.136 2.136 0 01-.167.875z"
			}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("path", {
				d: "M10 .875A9.125 9.125 0 1019.125 10 9.135 9.135 0 0010 .875zm0 17A7.875 7.875 0 1117.875 10 7.884 7.884 0 0110 17.875z"
			}), r.a.createElement("path", {
				d: "M10.479 13.635a1.085 1.085 0 00-.547-.141 1.035 1.035 0 00-.537.145 1.009 1.009 0 00-.379.388 1.1 1.1 0 00-.137.547 1.018 1.018 0 00.143.533 1.045 1.045 0 00.387.38 1.056 1.056 0 00.536.14 1.076 1.076 0 00.54-.14 1.008 1.008 0 00.387-.385 1.08 1.08 0 00.14-.541 1.05 1.05 0 00-.533-.926zM11.507 5.641a3.213 3.213 0 00-1.425-.309 3.15 3.15 0 00-1.535.368 2.646 2.646 0 00-1.028.974 2.52 2.52 0 00-.363 1.312h1.463a1.172 1.172 0 01.181-.661 1.327 1.327 0 01.516-.468 1.623 1.623 0 011.415-.017 1.212 1.212 0 01.5.431 1.1 1.1 0 01.181.618 1.063 1.063 0 01-.119.5 1.56 1.56 0 01-.3.4 9.531 9.531 0 01-.492.43 6.846 6.846 0 00-.656.585 2.292 2.292 0 00-.431.656 2.206 2.206 0 00-.178.919v.766h1.429v-.793a1.281 1.281 0 01.13-.58 1.824 1.824 0 01.321-.459c.128-.132.3-.3.533-.493a7.691 7.691 0 00.633-.584 2.279 2.279 0 00.41-.622 2.015 2.015 0 00.167-.85A2.262 2.262 0 0012.5 6.5a2.41 2.41 0 00-.993-.859z"
			})));

			function Nt() {
				return (Nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var kt = e => r.a.createElement(b.a, Nt({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("path", {
					d: "M16.8,3.2A9.62,9.62,0,0,0,.491,8.5a9.506,9.506,0,0,0,1.146,6.237L.453,18.647a.726.726,0,0,0,.9.9l3.99-1.143a9.483,9.483,0,0,0,4.652,1.218,9.841,9.841,0,0,0,1.553-.124A9.62,9.62,0,0,0,16.8,3.2Zm1.464,8.176a8.414,8.414,0,0,1-6.919,6.9A8.3,8.3,0,0,1,5.74,17.2l-.232-.138L1.93,18.084l1.063-3.512-.144-.239a8.28,8.28,0,0,1-1.123-5.64,8.378,8.378,0,1,1,16.54,2.678Z"
				}), r.a.createElement("path", {
					d: "M10,5.375A4.625,4.625,0,1,0,14.625,10,4.631,4.631,0,0,0,10,5.375ZM6.625,10a3.354,3.354,0,0,1,.59-1.9L11.9,12.785A3.371,3.371,0,0,1,6.625,10Zm6.16,1.9L8.1,7.215A3.371,3.371,0,0,1,12.785,11.9Z"
				})),
				Mt = n("./src/chat/icons/svgs/Leave/index.tsx");

			function Tt() {
				return (Tt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var At = e => r.a.createElement(b.a, Tt({}, e, {
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
				Lt = n("./src/chat/icons/svgs/Smile/index.tsx");

			function Dt() {
				return (Dt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Rt = e => r.a.createElement(b.a, Dt({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? r.a.createElement("path", {
					d: "M16.64 6.9a2.841 2.841 0 00-1.308.316 10.363 10.363 0 00-4.618-1.341l.743-4.123 2.422.515a1.493 1.493 0 10.2-1.235L11.59.5a1.124 1.124 0 00-1.34.9l-.8 4.459a10.371 10.371 0 00-4.787 1.356 2.859 2.859 0 00-3.108 4.763v.042c0 3.409 3.786 6.18 8.445 6.18s8.441-2.773 8.441-6.182v-.035A2.859 2.859 0 0016.64 6.9z"
				}) : r.a.createElement("path", {
					d: "M19.769 9.086a3.189 3.189 0 00-3.129-2.56 2.933 2.933 0 00-1.276.29 10.781 10.781 0 00-4.74-1.326l.811-3.742 2.444.52a1.493 1.493 0 10.2-1.235L11.573.5a1.126 1.126 0 00-1.333.862L9.344 5.5a10.742 10.742 0 00-4.693 1.3A3.179 3.179 0 00.235 9.074a3.228 3.228 0 00-.017 1.18 3.1 3.1 0 00.9 1.7l.057.06v.108c.071 3.618 3.943 6.452 8.815 6.452s8.74-2.831 8.814-6.433v-.122l.037-.037a3.136 3.136 0 00.929-1.725 3.218 3.218 0 00-.001-1.171zm-1.221.957a1.9 1.9 0 01-.571 1.049l-.391.4-.026.615c-.06 2.928-3.382 5.222-7.564 5.222s-7.507-2.3-7.565-5.239l-.024-.59L2 11.072a1.87 1.87 0 01-.552-1.03 2 2 0 01.01-.723 1.926 1.926 0 012.88-1.269l.332.209L5 8.05a9.385 9.385 0 014.67-1.331h.706a9.4 9.4 0 014.64 1.348l.342.217.342-.224a1.694 1.694 0 01.941-.284 1.935 1.935 0 011.9 1.55 1.964 1.964 0 01.007.717z"
				})),
				Pt = n("./src/chat/components/MessageTooltip/Picker/SlashCommandList/index.m.less"),
				Ut = n.n(Pt);
			var Bt = ({
					channelId: e,
					inputCommand: t,
					bindArrowDown: n,
					bindArrowUp: a,
					onSelectCommand: s,
					onPickCommand: l,
					unbindListeners: d
				}) => {
					const u = Object(o.e)(t => Object(_.l)(t, e)),
						h = Object(o.e)(nt.g),
						[m, p] = Object(c.useState)(0),
						b = Object(c.useMemo)(() => {
							return Qe.filter(e => !e.channelType || e.channelType === u).filter(e => {
								var n;
								return [...(null === (n = e.aliases) || void 0 === n ? void 0 : n.length) ? e.aliases : [], e.command].join("").includes(t)
							})
						}, [u, t]),
						g = Object(c.useCallback)(e => {
							p(e => Math.max(e - 1, 0)), e.preventDefault(), e.stopPropagation()
						}, []),
						f = Object(c.useCallback)(e => {
							p(e => Math.min(e + 1, b.length - 1)), e.preventDefault(), e.stopPropagation()
						}, [b]),
						O = Object(c.useMemo)(() => {
							var e;
							return b.length ? s(null === (e = b[m]) || void 0 === e ? void 0 : e.command) : s(""), b.length ? r.a.createElement("div", {
								className: Ut.a.Command
							}, b.map((e, t) => r.a.createElement("button", {
								className: Object(i.a)(Ut.a.CommandItem, {
									[Ut.a.selected]: m === t
								}),
								key: e.command,
								onClick: () => l(e.command)
							}, (e => {
								switch (e.name) {
									case Pe.GIF:
										return r.a.createElement("img", {
											src: `${_t.a.assetPath}/img/giphy/giphy.png`,
											className: Ut.a.CommandItemIcon
										});
									case Pe.INVITE:
										return r.a.createElement(de.a, {
											className: Ut.a.CommandItemIcon
										});
									case Pe.MUTE:
										return r.a.createElement(xt.a, {
											className: Ut.a.CommandItemIcon
										});
									case Pe.UNMUTE:
										return r.a.createElement(yt.a, {
											className: Ut.a.CommandItemIcon
										});
									case Pe.KICK:
										return r.a.createElement(kt, {
											className: Ut.a.CommandItemIcon
										});
									case Pe.MEMBERS:
										return r.a.createElement(At, {
											className: Ut.a.CommandItemIcon
										});
									case Pe.LEAVE:
										return r.a.createElement(Mt.a, {
											className: Ut.a.CommandItemIcon
										});
									case Pe.NEW_CHAT:
									case Pe.DIRECT:
										return r.a.createElement(It.a, {
											className: Ut.a.CommandItemIcon
										});
									case Pe.TEXT_EMOJI:
										return r.a.createElement(Lt.a, {
											className: Ut.a.CommandItemIcon
										});
									case Pe.SNOOMOJI:
										return r.a.createElement(Rt, {
											className: Ut.a.CommandItemIcon
										});
									default:
										return null
								}
							})(e), r.a.createElement("div", {
								className: Ut.a.CommandItemMetadata
							}, r.a.createElement("span", {
								className: Ut.a.CommandItemMetadataDescription
							}, e.description && oe.fbt._("{Description}", [oe.fbt._param("Description", e.description)], {
								hk: "223KqZ"
							})), r.a.createElement("span", {
								className: Ut.a.CommandItemMetadataExample
							}, e.example ? e.example : `/${e.command}`))))) : r.a.createElement("div", {
								className: Ut.a.ErrorMessage
							}, r.a.createElement(wt, {
								className: Ut.a.ErrorMessageIcon
							}), r.a.createElement("div", {
								className: Ut.a.ErrorMessageContent
							}, r.a.createElement("span", {
								className: Ut.a.ErrorMessageContentHeader
							}, oe.fbt._("Hmm... that didn’t work", null, {
								hk: "SVy4g"
							})), r.a.createElement("span", {
								className: Ut.a.ErrorMessageContentBody
							}, oe.fbt._("try another keyword or phrase", null, {
								hk: "1dSsbn"
							}))))
						}, [b, m, l, s]);
					return Object(c.useEffect)(() => (a(g), n(f), () => {
						d()
					}), [a, n, g, f, d]), Object(c.useEffect)(() => {
						m > b.length && p(0)
					}, [m, b.length]), r.a.createElement($e.b, {
						className: Object(i.a)(Ut.a.Scroller, {
							[Ut.a.embedded]: h
						})
					}, O)
				},
				Ft = n("./src/lib/lessComponent.tsx"),
				Ht = n("./src/chat/components/Snoomoji/index.tsx"),
				Gt = n("./src/chat/components/MessageTooltip/Picker/icons.list.m.less"),
				zt = n.n(Gt);
			const Vt = Ft.a.div("IconWrapper", zt.a);
			Vt.displayName = "IconWrapper";
			const Wt = Ft.a.div("LoadingIndicator", zt.a),
				Kt = Ft.a.wrapped(({
					children: e,
					className: t
				}) => r.a.createElement("div", {
					className: t
				}, e), "Wrapper", zt.a);
			var Zt = ({
					onPickSnoomoji: e
				}) => {
					const [t, n] = Object(c.useState)(!1), a = Object(o.e)(nt.g), s = Object(c.useCallback)(() => {
						Promise.all(Me.b.map(e => new Promise(t => {
							const n = new Image;
							n.onload = () => t(), n.src = Me.a[e]
						}))).then(() => n(!0))
					}, []);
					Object(c.useEffect)(() => {
						s()
					}, [s]);
					return r.a.createElement($e.b, {
						className: Object(i.a)(zt.a.Scroller, {
							[zt.a.embedded]: a
						})
					}, t ? r.a.createElement(Kt, null, (() => Me.b.map((t, n) => r.a.createElement(Vt, {
						key: `icon-${n}`,
						onClick: () => e(t)
					}, r.a.createElement(Ht.a, {
						className: zt.a.Icon,
						iconName: t
					}))))()) : r.a.createElement(Wt, null, oe.fbt._("Loading snoomoji...", null, {
						hk: "39nqLy"
					})))
				},
				qt = n("./src/chat/actions/members.ts"),
				Qt = n("./src/chat/components/ChatMemberList/index.tsx"),
				Xt = n("./src/chat/helpers/chatSelector.ts"),
				Yt = n("./src/chat/selectors/members.ts"),
				Jt = n("./src/chat/components/MessageTooltip/Picker/Userlist/index.m.less"),
				$t = n.n(Jt);
			const en = Ft.a.div("LoadingIndicator", $t.a),
				tn = Ft.a.wrapped(Qt.a, "ChatMemberList", $t.a),
				nn = Ft.a.wrapped(({
					children: e,
					className: t
				}) => r.a.createElement("div", {
					className: t
				}, e), "Wrapper", $t.a),
				an = Object(Xt.a)({
					channelId: _.y,
					channelMembers: Yt.f,
					hasMoreMembers: Yt.d,
					fetchingMembers: Yt.a,
					isEmbedded: nt.g
				});
			class sn extends c.Component {
				constructor(e) {
					super(e), this.fetchedFilter = "", this.isMount = !1, this.fetchSubredditChannelUsers = D()((e = "") => {
						this.props.fetchSubredditChannelUsers(e)
					}, ye.Rb, {
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
					return this.members = this.filterMembers(), this.members && this.members.length && e ? r.a.createElement(nn, null, r.a.createElement(tn, {
						minimal: !0,
						channelId: e,
						members: this.members,
						modIndicator: !0,
						onClick: t,
						onSelectName: n,
						selectIndex: this.state.selectIndex,
						useNSFWIcons: !0
					})) : a || this.members && this.members.length ? r.a.createElement(en, null, oe.fbt._("Loading members...", null, {
						hk: "23phIt"
					})) : r.a.createElement(en, null, oe.fbt._("Member not found!", null, {
						hk: "4DkpQe"
					}))
				}
				render() {
					const {
						isEmbedded: e
					} = this.props;
					return r.a.createElement($e.b, {
						className: Object(i.a)($t.a.Scroller, {
							[$t.a.embedded]: e
						})
					}, this.renderContent())
				}
			}
			var cn = Object(o.b)(an, e => ({
					fetchSubredditChannelUsers: t => e(Object(qt.e)({
						filter: t
					}))
				}))(sn),
				rn = n("./src/chat/constants/keys.ts"),
				on = n("./src/chat/singleton/SendbirdSDK.ts"),
				ln = n("./src/chat/controls/ContentEditable/index.m.less"),
				dn = n.n(ln);
			const un = 19,
				hn = 12,
				mn = 6,
				pn = Ft.a.textarea("Textarea", dn.a);
			class bn extends r.a.Component {
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
					this.props.channelId !== e.channelId && this.textarea && (this.textarea.value = e.draftText || "", this.handleSizing()), this.textarea && this.textarea.value ? on.a.startTypingIndicator() : on.a.endTypingIndicator(), this.textarea && e.textUpdate && (this.textarea.value = e.textUpdate, this.props.onChangeOnce(this.textarea.value), this.handleSizing()), this.textarea && this.textarea.value && e.clearText && (this.clearTextAndDropInputHeight(), this.props.onChangeOnce(""), this.handleSizing()), e.cursorPosition && this.textarea && (this.textarea.selectionStart = e.cursorPosition.selectionStart, this.textarea.selectionEnd = e.cursorPosition.selectionEnd)
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
					e.key !== rn.g || e.shiftKey || (e.preventDefault(), this.props.onSubmit()), this.handleCursor()
				}
				handleKeyDown(e) {
					e.key === rn.d && (this.props.onArrowUp(e), this.handleSizing()), e.key === rn.a && (this.props.onArrowDown(e), this.handleSizing()), e.key === rn.h && this.props.onKeyEsc(e), this.props.onKeyDown(e)
				}
				handleSizing() {
					if (this.textarea) {
						const e = this.textarea;
						e.style.height = "auto", e.style.height = e.scrollHeight + this.offset + "px", e.scrollHeight > 2 * un + hn ? e.style.paddingTop = "0px" : e.style.paddingTop = "12px", e.scrollHeight > un * mn + 1 ? e.style.overflowY = "scroll" : e.style.overflowY = "hidden"
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
					return r.a.createElement(pn, {
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
						placeholder: oe.fbt._("Message", null, {
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

			function gn() {
				return (gn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var fn = e => r.a.createElement(b.a, gn({}, e, {
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
				On = n("./src/chat/models/Theme/index.ts"),
				En = n("./src/chat/selectors/theme.ts");

			function jn() {
				return (jn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var vn = e => {
					const t = Object(o.e)(En.a);
					return r.a.createElement(b.a, jn({}, e, {
						viewBox: "0 0 24 24"
					}), (() => {
						let e;
						if (t) {
							const n = On.f[t];
							n && (e = r.a.createElement("defs", null, r.a.createElement("linearGradient", {
								id: "linear-gradient",
								gradientTransform: `rotate(${On.d})`
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
				Cn = n("./src/chat/actions/uploads/prompt.ts"),
				_n = n("./src/lib/hooks/useOnClickOutside.ts"),
				In = n("./src/lib/hooks/useTooltip.ts"),
				xn = n("./src/chat/components/MessageInput/IconButton/index.m.less"),
				yn = n.n(xn);
			var Sn = e => r.a.createElement("div", {
					className: Object(i.a)(yn.a.IconButton, {
						[yn.a.active]: e.active
					}, e.className),
					onMouseDown: Object(u.b)(e.onMouseDown)
				}, e.children),
				wn = n("./src/chat/controls/TooltipHooked/loader.tsx"),
				Nn = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				kn = n("./src/chat/components/MessageInput/ImageUploader/index.m.less"),
				Mn = n.n(kn);
			var Tn = r.a.memo((function({
					channelId: e
				}) {
					const t = Object(o.d)(),
						n = Object(o.e)(t => Object(_.z)(t, e)),
						a = Object(o.e)(_.J),
						s = Object(o.e)(t => Object(pe.k)(t, e)),
						i = Object(o.e)(I.e),
						d = Object(In.b)(Object(Nn.b)()),
						u = {
							...d.arrowProps,
							style: {
								...d.arrowProps.style,
								borderTop: "5px solid var(--prompt-tooltip-background)",
								left: "3px"
							}
						},
						h = Object(c.useCallback)(() => {
							d.hide(), t(Object(Cn.c)(Cn.b.LAST))
						}, [d, t]);
					return Object(_n.a)("Prompt-id", d.hide), Object(c.useEffect)(() => {
						i && setTimeout(() => {
							d.show(), t(Object(l.ib)())
						})
					}, [i]), s && (!a || a && n.length > 0) ? r.a.createElement(r.a.Fragment, null, i && r.a.createElement(wn.a, {
						arrowProps: u,
						popperProps: d.popperProps,
						visible: d.visible,
						hide: d.hide,
						styled: !0,
						isInstant: !0
					}, r.a.createElement("button", {
						className: Mn.a.Tooltip,
						onClick: h,
						id: "Prompt-id"
					}, oe.fbt._("New! Try media sharing", null, {
						hk: "16k719"
					}))), r.a.createElement("span", {
						ref: d.target.ref,
						role: "button",
						tabIndex: 0,
						onClick: h
					}, r.a.createElement(Sn, {
						className: Mn.a.ImageUploader
					}, r.a.createElement(A, null)))) : null
				})),
				An = n("./src/chat/components/MessageInput/index.m.less"),
				Ln = n.n(An);
			const Dn = r.a.memo((function() {
					const e = Object(o.d)(),
						t = Object(o.e)(at.a);
					return Object(o.e)(_.J) ? null : r.a.createElement(Rn, {
						onMouseDown: () => {
							e(Object(we.c)({
								tooltipId: Ne.b
							})), e(Object(l.E)(Ne.b))
						},
						active: t === Ne.b
					}, r.a.createElement(fn, {
						isFilled: t === Ne.b
					}))
				})),
				Rn = e => r.a.createElement("div", {
					className: Object(i.a)(Ln.a.IconButton, {
						[Ln.a.active]: e.active
					}, e.className),
					onMouseDown: Object(u.b)(e.onMouseDown)
				}, e.children),
				Pn = Object(Xt.a)({
					activeDropdownId: e => e.tooltipId || void 0,
					draftMessage: (e, t) => Object(_.s)(e, t.channelId),
					hasUploadsToSubmit: (e, t) => Object(I.d)(e, t.channelId),
					isFullSize: nt.h,
					isChatContainerFocused: nt.c,
					isImageShareEnabled: (e, t) => Object(pe.k)(e, t.channelId),
					isChannelInPendingState: _.J,
					isShortcutsSlashCommandEnabled: pe.t
				});
			class Un extends c.PureComponent {
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
						if (this.isUserlistPopupOpened()) this.onPickUserName(this.selectUserName || this.state.inputUserName), this.props.toggleUserlistTooltip(Ne.f);
						else if (l || i) {
							if (l) {
								const t = new d.d(e);
								await a(t), s(t)
							}
							i && (this.isSlashCommandListPopupOpened() && o ? (this.onPickCommand(this.selectedCommand || this.state.inputCommand), this.props.toggleSlashCommandListTooltip(Ne.d)) : (this.state.text.startsWith(Ie) && o ? r(this.state.text) : n(this.state.text), this.clearText(), t(e))), c && c()
						}
					}, this.sendEnabled = () => !!this.state.text || this.props.hasUploadsToSubmit, this.onArrowUpUserlistListener = Ee.a, this.onArrowDownUserlistListener = Ee.a, this.startIdleTimerThrottle = ve()(() => {
						this.props.startSurveyTimer()
					}, Ne.g), this.onMessageInputKeydown = () => {
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
					} = De(t, e, n);
					this.setState({
						textUpdate: a,
						text: a
					}, () => {
						this.reFocusCursorPosition(s), this.props.toggleUserlistTooltip(Ne.f)
					})
				}
				onPickCommand(e) {
					const t = Ie + e;
					this.setState({
						textUpdate: t,
						text: t
					}, () => {
						this.reFocusCursorPosition(t.length), this.props.toggleSlashCommandListTooltip(Ne.d)
					})
				}
				toggleUserlistTooltipByTextChange(e) {
					const {
						selectionEnd: t
					} = this.cursorPosition, {
						hasUsername: n,
						username: a
					} = Le(e, t), s = this.isUserlistPopupOpened();
					return (n && !s || !n && s) && this.props.toggleUserlistTooltip(Ne.f), this.setState({
						inputUserName: a
					})
				}
				toggleCommandsTooltipByTextChange(e) {
					const t = this.isSlashCommandListPopupOpened();
					(!t && Re(e) || t && !Re(e)) && this.props.toggleSlashCommandListTooltip(Ne.d), this.setState({
						inputCommand: e.replace(Ie, "")
					})
				}
				isSlashCommandListPopupOpened() {
					return this.props.activeDropdownId === Ne.d
				}
				isUserlistPopupOpened() {
					return this.props.activeDropdownId === Ne.f
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
						className: Object(i.a)(Ln.a.Form, {
							[Ln.a.isFullSize]: s
						}),
						id: rt,
						onSubmit: Object(u.b)(this.handleSubmitInput)
					}, r.a.createElement("div", {
						className: Ln.a.Wrapper
					}, r.a.createElement(Tn, {
						channelId: t
					}), r.a.createElement("div", {
						className: Ln.a.InputWrapper
					}, r.a.createElement(bn, {
						className: Ln.a.ContentEditable,
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
					}), o && r.a.createElement(lt, {
						id: Ne.d,
						shouldArrowShow: !1
					}, r.a.createElement(Bt, {
						channelId: t,
						bindArrowDown: e => this.onArrowDownUserlistListener = e,
						bindArrowUp: e => this.onArrowUpUserlistListener = e,
						inputCommand: this.state.inputCommand,
						onPickCommand: e => this.onPickCommand(e),
						onSelectCommand: e => this.selectedCommand = e,
						unbindListeners: () => {
							this.onArrowUpUserlistListener = Ee.a, this.onArrowDownUserlistListener = Ee.a
						}
					})), r.a.createElement("div", {
						className: Ln.a.Icons
					}, r.a.createElement(Dn, null), r.a.createElement(Rn, {
						onMouseDown: () => n(Ne.e),
						active: e === Ne.e
					}, r.a.createElement(Lt.a, {
						isFilled: e === Ne.e
					})), r.a.createElement(lt, {
						id: Ne.e
					}, r.a.createElement(Zt, {
						onPickSnoomoji: this.handleSubmitSnoo
					})), r.a.createElement(lt, {
						id: Ne.b,
						arrowOffset: Ne.a
					}, r.a.createElement(Ct, {
						onPickGif: this.onPickGifHandler
					})), r.a.createElement(lt, {
						id: Ne.f,
						shouldArrowShow: !1
					}, r.a.createElement(cn, {
						bindArrowDown: e => this.onArrowDownUserlistListener = e,
						bindArrowUp: e => this.onArrowUpUserlistListener = e,
						inputUserName: this.state.inputUserName,
						onPickUserName: e => this.onPickUserName(e),
						onSelectUserName: e => this.selectUserName = e
					})))), r.a.createElement(ee.d, {
						className: Ln.a.SubmitButton,
						type: "submit",
						disabled: !this.sendEnabled()
					}, r.a.createElement(vn, null))))
				}
			}
			var Bn = Object(o.b)(Pn, (e, {
					channelId: t
				}) => ({
					onSubmitText: n => e(Object(G.r)(t, n.trim(), ke.c.TEXT)),
					onSubmitSnoo: n => e(Object(G.r)(t, n.trim(), ke.c.SNOOMOJI)),
					onSubmitGif: n => {
						e(Object(G.o)(t, n)), e(Object(_e.l)(""))
					},
					onSubmitMedia: t => e(t.createMessage()),
					onUploadMedia: t => e(t.uploadMedia()),
					toggleSnoomojiTooltip: t => {
						e(Object(we.c)({
							tooltipId: t
						})), e(Object(l.E)(t))
					},
					toggleGifTooltip: t => {
						e(Object(we.c)({
							tooltipId: t
						})), e(Object(l.E)(t))
					},
					toggleUserlistTooltip: t => {
						e(Object(we.c)({
							tooltipId: t
						}))
					},
					saveDraft: (t, n) => {
						e(Object(Ce.e)({
							channelId: t,
							messageValue: n
						}))
					},
					deleteDraft: t => {
						e(Object(Ce.f)(t))
					},
					closeUserlistTooltip: () => e(Object(we.d)()),
					startSurveyTimer: () => e(Object(Ye.b)()),
					uploadShowPromptCountSet: () => e(Object(Cn.c)(Cn.b.LAST)),
					commandsChecker: n => e(Xe(n, t)),
					onSubmitSlashCommand: n => e(Xe(n, t)),
					toggleSlashCommandListTooltip: t => {
						e(Object(we.c)({
							tooltipId: t
						}))
					}
				}))(Un),
				Fn = n("./src/chat/helpers/time/index.tsx"),
				Hn = n("./src/chat/components/DateSplitter/index.m.less"),
				Gn = n.n(Hn);
			var zn = e => r.a.createElement("div", {
					className: Gn.a.TimeWrapper
				}, r.a.createElement("time", {
					className: Gn.a.Time
				}, Object(Fn.a)(e.date))),
				Vn = n("./src/chat/components/Message/Bubble.tsx"),
				Wn = n("./src/chat/components/Message/LinkedText.tsx"),
				Kn = n("./src/chat/components/Message/SystemMessage.m.less"),
				Zn = n.n(Kn);
			const qn = Ft.a.wrapped(Wn.a, "LinkedText", Zn.a);
			var Qn = Ft.a.wrapped(e => {
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
					}, r.a.createElement(qn, {
						value: a,
						highlighMentionGroupLinks: s
					}))
				}, "SystemMessage", Zn.a),
				Xn = n("./src/chat/components/Message/UserName/index.m.less"),
				Yn = n.n(Xn);
			var Jn = ({
					className: e,
					message: t,
					channelType: n,
					sameAsPrevUser: a,
					inTimeRange: s,
					currentUserId: c
				}) => {
					const {
						sender: o
					} = t, l = n === Y.b.Group, d = c === (null == o ? void 0 : o.userId);
					return (!a || !s) && (null == o ? void 0 : o.nickname) && (null == o ? void 0 : o.userId) && l ? r.a.createElement("span", {
						className: Object(i.a)(Yn.a.UserName, {
							[Yn.a.currentUser]: Boolean(d && c)
						}, e)
					}, null == o ? void 0 : o.nickname) : null
				},
				$n = n("./node_modules/lodash/xorBy.js"),
				ea = n.n($n),
				ta = n("./src/lib/hooks/usePrevious.ts"),
				na = n("./src/lib/prettyPrintNumber/index.ts"),
				aa = n("./src/chat/actions/message/reactions.ts"),
				sa = n("./src/chat/models/MessageReaction/index.ts"),
				ca = n("./src/chat/selectors/reactions.ts"),
				ra = n("./src/chat/selectors/user.ts"),
				oa = n("./src/chat/components/Reactions/MessageReactions/index.m.less"),
				ia = n.n(oa);
			const la = r.a.memo((function({
				channelId: e,
				currentUserId: t,
				userIds: n,
				messageId: a,
				reactionKey: s,
				isNew: d
			}) {
				const u = n.length,
					h = Object(o.e)(e => Object(ca.b)(e, s)),
					m = Object(ta.a)(u),
					p = Object(o.d)(),
					b = Object(o.e)(pe.i),
					g = Object(c.useRef)(ve()(n => {
						p(Object(aa.b)({
							channelSendbirdId: e,
							messageSendbirdId: a,
							reactionIconKey: s,
							type: n ? sa.a.DELETE : sa.a.ADD,
							userId: t
						})), p(n ? Object(l.K)(a, 0, s) : Object(l.T)(a, 0, s, "add_to_existing"))
					}, 800)),
					f = Object(c.useMemo)(() => Boolean(n.find(e => e === t)), [t, n]),
					O = Object(c.useMemo)(() => {
						if (m !== u) return m
					}, [u, m]),
					E = Object(c.useMemo)(() => void 0 !== O && O < u, [u, O]);
				return h ? r.a.createElement("span", {
					className: Object(i.a)(ia.a.ReactionWrapper, {
						[ia.a.userReacted]: f,
						[ia.a.new]: d
					}),
					onClick: () => b && g.current(f)
				}, r.a.createElement("img", {
					className: ia.a.ReactionIcon,
					src: h.url,
					alt: h.altText
				}), u > 1 && r.a.createElement("span", {
					className: ia.a.ReactionCounterContainer,
					key: u
				}, r.a.createElement("span", {
					style: {
						animationDuration: 2 === u && E ? "0s" : "0.5s"
					},
					className: Object(i.a)(ia.a.TranslationContainer, {
						[ia.a.up]: !!O && E,
						[ia.a.down]: !!O && !E
					})
				}, O && r.a.createElement("span", {
					className: ia.a.ReactionCounter
				}, Object(na.b)(O - 1)), r.a.createElement("span", {
					className: ia.a.ReactionCounter,
					title: `${O||u}`
				}, Object(na.b)(O || u)), O && r.a.createElement("span", {
					className: ia.a.ReactionCounter
				}, Object(na.b)(O + 1))))) : null
			}));
			var da = r.a.memo(({
					isCurrentUser: e,
					channelId: t,
					messageId: n
				}) => {
					const a = Object(o.e)(e => Object(ca.c)(e, n)),
						s = Object(ta.a)(a),
						l = Object(c.useMemo)(() => {
							if (s && s.length < a.length) return ea()(s, a, "key")[0].key
						}, [a, s]),
						d = Object(o.e)(ra.a);
					return a.length ? r.a.createElement("div", {
						className: Object(i.a)(ia.a.ReactionsWrapper, {
							[ia.a.reversed]: e
						})
					}, a.map(e => r.a.createElement(la, {
						channelId: t,
						currentUserId: d,
						messageId: n,
						key: e.key,
						isNew: l === e.key,
						userIds: e.userIds,
						reactionKey: e.key
					}))) : null
				}),
				ua = n("./src/chat/components/MessageList/Messages/index.m.less"),
				ha = n.n(ua);
			const ma = (e, t) => {
					let n = NaN;
					return e > 0 && (n = t[e - 1].createdAt), n
				},
				pa = ({
					message: e,
					showUserPic: t,
					isLastCurrentUserMessage: n,
					currentUserId: a,
					inPreview: s,
					isLastInChain: c
				}) => {
					const {
						sender: l
					} = e, d = a === (l && l.userId), u = Object(o.e)(nt.d), h = Object(o.e)(_.a);
					return r.a.createElement(Vn.a, {
						className: Object(i.a)(ha.a.MessageItemBubble, {
							[ha.a.lastInChain]: c
						}),
						message: e,
						fromCurrentUser: d,
						withButton: !0,
						isChatEmbedded: u,
						showUserPic: t,
						isLastCurrentUserMessage: n,
						isCurrentUserChannelMod: h,
						inPreview: s
					})
				};
			var ba = ({
					currentUserId: e,
					channelType: t,
					messageList: n,
					inPreview: a
				}) => {
					const s = Object(o.e)(En.c);
					return n.length ? r.a.createElement(r.a.Fragment, null, n.map((n, c, o) => {
						var i;
						const {
							createdAt: l,
							sender: d
						} = n, u = d && d.userId, h = ma(c, o), m = ((e, t) => {
							const n = t[e + 1];
							return null == n ? void 0 : n.createdAt
						})(c, o), p = ((e, t) => {
							if (e > 0) {
								const {
									sender: n
								} = t[e - 1];
								return n && n.userId
							}
						})(c, o), b = ((e, t, n) => {
							if (0 === t) return !0;
							const a = new Date(e.createdAt),
								s = ma(t, n);
							if (s) {
								const e = new Date(s);
								return a.getFullYear() !== e.getFullYear() || a.getMonth() !== e.getMonth() || a.getDate() !== e.getDate()
							}
							return !1
						})(n, c, o), g = ((e, t) => {
							var n;
							const a = t[e + 1];
							return null === (n = null == a ? void 0 : a.sender) || void 0 === n ? void 0 : n.userId
						})(c, o), f = p === u, O = g === u, E = l - h < 5 * ye.kb, j = m && m - l < 5 * ye.kb, v = !O || O && !j, C = n.messageType === ke.d.SYSTEM && ((e, t) => {
							const {
								mentionType: n,
								mentionedUsers: a,
								messageType: s
							} = e;
							if (s !== ke.d.SYSTEM) return !1;
							if (n === ke.b.CHANNEL) return !0;
							if (n === ke.b.USERS && Array.isArray(a)) {
								const e = 0 === a.length,
									n = a.some(e => t === e.userId);
								return e || n
							}
							return !1
						})(n, e), _ = Boolean(((t, n) => {
							const {
								sender: a
							} = n[t];
							return !(e !== (null == a ? void 0 : a.userId) || !s) && (t === n.length - 1 || !n.slice(t + 1).some(e => {
								var t;
								return (null === (t = e.sender) || void 0 === t ? void 0 : t.userId) === (null == a ? void 0 : a.userId)
							}))
						})(c, o)), I = b && r.a.createElement(zn, {
							date: l
						}), x = n.messageData.clientMessageId || n.createdAt;
						switch (n.messageType) {
							case ke.d.PENDING:
							case ke.d.USER:
								return r.a.createElement(r.a.Fragment, {
									key: x
								}, I, r.a.createElement(r.a.Fragment, null, r.a.createElement(Jn, {
									message: n,
									sameAsPrevUser: f,
									inTimeRange: E,
									channelType: t,
									currentUserId: e
								}), r.a.createElement(pa, {
									message: n,
									isLastCurrentUserMessage: _,
									showUserPic: v,
									currentUserId: e,
									inPreview: a,
									isLastInChain: !(!g || n.messageType === ke.d.USER && n.reactions.length) && !O
								}), n.messageType === ke.d.USER ? r.a.createElement(da, {
									channelId: n.channelId,
									messageId: n.messageId,
									isCurrentUser: e === (null === (i = n.sender) || void 0 === i ? void 0 : i.userId)
								}) : null));
							case ke.d.SYSTEM:
								return C && r.a.createElement(r.a.Fragment, {
									key: n.createdAt
								}, I, r.a.createElement(Qn, {
									className: ha.a.SystemBubble,
									message: n
								}));
							default:
								return null
						}
					})) : null
				},
				ga = n("./src/chat/components/MessageQuickReplyPicker/index.m.less"),
				fa = n.n(ga);
			const Oa = ["upvote", "snoo"],
				Ea = Ft.a.div("SnooWrapper", fa.a),
				ja = Ft.a.wrapped(e => {
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
							case ke.c.TEXT:
								return n;
							case ke.c.SNOOMOJI:
								return r.a.createElement(Ea, null, r.a.createElement(Ht.a, {
									iconName: n
								}))
						}
					})())
				}, "ReplyItem", fa.a);
			var va = Ft.a.wrapped(e => {
					const {
						className: t,
						channelId: n
					} = e, a = Object(o.d)();
					return Object(o.e)(t => Object(_.O)(t, n, e.lastMessage)) ? r.a.createElement("div", {
						className: t
					}, r.a.createElement(ja, {
						type: ke.c.TEXT,
						text: oe.fbt._("Thanks for the award!", null, {
							hk: "3aibi5"
						}),
						onReply: e => {
							a(Object(G.r)(n, String(e).trim(), ke.c.TEXT)), a(Object(l.x)(l.a.FIRST, String(e).trim()))
						}
					}), Oa.map((e, t) => r.a.createElement(ja, {
						type: ke.c.SNOOMOJI,
						key: e,
						text: e,
						onReply: e => {
							a(Object(G.r)(n, e, ke.c.SNOOMOJI)), a(Object(l.x)(t + 2, e))
						}
					}))) : null
				}, "MessageQuickReplyPicker", fa.a),
				Ca = n("./src/chat/selectors/messages.ts");
			var _a = () => {
					const e = Object(o.d)(),
						[t, n] = Object(c.useState)(!1),
						a = Object(o.e)(ca.a),
						s = Object(o.e)(nt.g),
						d = Object(o.e)(ca.d),
						u = Object(o.e)(e => Object(Ca.b)(e, d)),
						h = Object(o.e)(ra.a),
						m = Object(c.useCallback)(() => {
							Promise.all(a.map(e => new Promise(t => {
								const n = new Image;
								n.onload = () => t(), n.src = e.url
							}))).then(() => n(!0))
						}, [a]);
					Object(c.useEffect)(() => {
						m()
					}, [m]);
					return r.a.createElement($e.b, {
						className: Object(i.a)(zt.a.Scroller, {
							[zt.a.embedded]: s
						})
					}, a.length && t ? r.a.createElement("div", {
						className: zt.a.Wrapper
					}, (() => a.map((t, n) => t.url && t.key ? r.a.createElement("div", {
						className: zt.a.IconWrapper,
						key: `icon-${n}`,
						onClick: () => (t => {
							if (u && u.messageType === ke.d.USER) {
								const n = u.reactions.find(e => e.key === t),
									a = !!Boolean(n) && Boolean(null == n ? void 0 : n.userIds.find(e => e === h));
								e(Object(aa.b)({
									channelSendbirdId: u.channelId,
									messageSendbirdId: u.messageId,
									reactionIconKey: t,
									type: sa.a.ADD,
									userId: h
								})), a || e(Object(l.T)(u.messageId, 0, t, "bottom_sheet"))
							}
						})(t.key)
					}, r.a.createElement("img", {
						className: zt.a.Icon,
						src: t.url,
						alt: t.altText
					})) : null))()) : r.a.createElement("div", {
						className: zt.a.LoadingIndicator
					}, oe.fbt._("Loading reactions...", null, {
						hk: "3KoJZd"
					})))
				},
				Ia = n("./src/chat/components/OverlayNav/index.tsx"),
				xa = n("./src/chat/components/TypingIndicator/index.m.less"),
				ya = n.n(xa);
			var Sa = ({
					channelType: e
				}) => {
					const t = Object(o.e)(e => e.typingIndicator.usernames);
					return (null == t ? void 0 : t.length) ? r.a.createElement("span", {
						className: Object(i.a)(ya.a.IndicatorText)
					}, ((e, t) => e === Y.b.Direct ? oe.fbt._("is typing...", null, {
						hk: "UTaH4"
					}) : 1 === t.length ? oe.fbt._("{firstUser} is typing...", [oe.fbt._param("firstUser", t[0])], {
						hk: "480JMK"
					}) : 2 === t.length ? oe.fbt._("{firstUser} and {secondUser} are typing", [oe.fbt._param("firstUser", t[0]), oe.fbt._param("secondUser", t[1])], {
						hk: "3zfAnp"
					}) : t.length > 2 ? oe.fbt._("Several people are typing...", null, {
						hk: "39edn3"
					}) : void 0)(e, t)) : null
				},
				wa = n("./src/chat/constants/batchSizes.ts"),
				Na = n("./src/chat/selectors/richUnits.ts"),
				ka = n("./src/chat/components/MessageList/index.m.less"),
				Ma = n.n(ka);
			const {
				fbt: Ta
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Aa = Object(Xt.a)({
				currentUser: e => e.user.account,
				channelMessages: (e, {
					channel: {
						channelId: t
					}
				}) => Object(_.z)(e, t),
				channelPendingMessages: e => Object(_.A)(e),
				fetchingMessages: e => Object(_.B)(e, "fetchingMessages"),
				fetchingMessagesError: e => Object(_.B)(e, "fetchingMessagesError"),
				hasMoreMessages: e => Object(_.B)(e, "hasMoreMessages"),
				isMessageListLoaded: e => Object(_.B)(e, "isMessageListLoaded"),
				isModerator: e => Object(_.a)(e),
				isChatMinimized: nt.d,
				isRichUnitDataReceived: e => Object(Na.c)(e),
				isFullSize: nt.h,
				showPrompt: En.c,
				isImageShareEnabled: (e, t) => Object(pe.k)(e, t.channel.channelId),
				isChannelInPendingState: _.J,
				isBlockedUserMessageEnabled: pe.d,
				hasBlockedUsers: (e, t) => Object(_.D)(e, t.channel.channelId)
			}), La = Object(o.b)(Aa, e => ({
				getPreviousMessages: () => e(Object(G.v)()),
				removeAndResetMessages: t => e(Object(z.c)(t)),
				resetChannelMessageList: t => e(Object(F.K)(t)),
				resetRichUnisDataReceived: () => e(Object(V.f)()),
				windowSizeChanged: t => e(Object(H.windowSizeChangedAction)(t))
			})), Da = 30, Ra = 2 * wa.a.Messages, Pa = 100;
			class Ua extends r.a.Component {
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
						} = this.props, n = e.members.find(({
							id: e
						}) => e !== t.id);
						return n ? n.name : t.name
					}, this.getTitle = () => {
						switch (this.props.channel.type) {
							case Y.b.Group:
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
					this.props.isFullSize && (this.windowResize(), window.addEventListener("resize", D()(this.windowResize, Pa)))
				}
				componentWillUnmount() {
					window.removeEventListener("resize", D()(this.windowResize, Pa))
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
					if (t.length > Da && this.isChannelSwitched(e)) {
						const e = t.length - Da,
							a = t.slice(0, e);
						n(P()(a, ({
							messageId: e
						}) => String(e)))
					}
				}
				removeResetTooOldMessages() {
					var e;
					const t = this.props.channelMessages.length > Ra,
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
							isBlockedUserMessageEnabled: p,
							hasBlockedUsers: b
						},
						loadMoreRows: g
					} = this, f = this.getTitle(), O = B()([...n, ...t], "createdAt"), E = !d && o && e.members, j = (null == e ? void 0 : e.type) === Y.b.Direct && b && p;
					return r.a.createElement("div", {
						className: Ma.a.Container
					}, r.a.createElement(Ia.a, {
						channelId: e.channelId,
						showMenu: !0,
						title: f,
						channelType: null == e ? void 0 : e.type,
						showMembers: !0
					}), r.a.createElement("div", {
						className: Object(i.a)(Ma.a.ReverseCol, {
							[Ma.a.isFullSize]: u
						})
					}, r.a.createElement($e.b, {
						className: Ma.a.Scroller,
						autoScrollBottom: !0,
						ref: this.scroller,
						loadMoreRows: g
					}, s && r.a.createElement("span", {
						className: Ma.a.LoadingError,
						onClick: c
					}, Ta._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})), E ? r.a.createElement(fe, {
						users: e.members,
						channel: e
					}) : s ? r.a.createElement("span", {
						className: Ma.a.LoadingError,
						onClick: c
					}, Ta._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})) : o ? r.a.createElement("span", {
						className: Ma.a.LoadingIndicator
					}, Ta._("Loading history...", null, {
						hk: "4tLHUG"
					})) : r.a.createElement(dt.e, null), O.length ? r.a.createElement(ba, {
						channelType: e.type,
						currentUserId: a.id,
						messageList: O
					}) : null)), r.a.createElement("div", {
						className: Object(i.a)(Ma.a.TypingIndicatorWrapper, {
							[Ma.a.isFullSize]: u
						})
					}, e ? r.a.createElement(Sa, {
						channelType: e.type
					}) : null), r.a.createElement(va, {
						className: Ma.a.MessageQuickReplyPicker,
						channelId: e.channelId,
						lastMessage: O[O.length - 1]
					}), h && !m && r.a.createElement(re, null), p && e ? r.a.createElement($, {
						channel: e
					}) : null, r.a.createElement(lt, {
						id: Ne.c,
						shouldArrowShow: !1
					}, r.a.createElement(_a, null)), !j && r.a.createElement(Bn, {
						className: Ma.a.MessageInput,
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
			var Ba = La(Ua),
				Fa = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				Ha = n("./src/higherOrderComponents/makeAsync.tsx"),
				Ga = n("./src/lib/loadWithRetries/index.ts");
			const za = () => null;
			var Va = Object(Ha.a)({
				ErrorComponent: za,
				getComponent: () => Object(Ga.a)(() => n.e("OverlayChatMembers").then(n.bind(null, "./src/chat/components/OverlayChatMembers/index.tsx"))).then(e => e.default),
				LoadingComponent: za
			});
			const Wa = () => null;
			var Ka = Object(Ha.a)({
					ErrorComponent: Wa,
					getComponent: () => Object(Ga.a)(() => n.e("OverlayCreateChannel").then(n.bind(null, "./src/chat/components/OverlayCreateChannel/index.tsx"))).then(e => e.default),
					LoadingComponent: Wa
				}),
				Za = n("./src/chat/components/ChatIcon/index.tsx"),
				qa = n("./src/lib/opener/index.ts"),
				Qa = n("./src/chat/components/Message/RichUnit/Comment/loader.tsx"),
				Xa = n("./src/chat/components/Message/RichUnit/Post/loader.tsx"),
				Ya = n("./src/chat/components/OverlayShareToChat/RichUnit/index.m.less"),
				Ja = n.n(Ya);
			const {
				POST: $a,
				USER_POST: es,
				COMMENT: ts
			} = ke.c;
			var ns = ({
					chatUnitTypeData: e,
					message: t
				}) => {
					const n = Object(o.e)(t => Object(Na.a)(t, e));
					return r.a.createElement("div", {
						className: Ja.a.Wrapper
					}, n ? ((e, t) => {
						switch (t.type) {
							case es:
							case $a:
								return r.a.createElement(Xa.a, {
									postUrl: e,
									richUnitData: t,
									isSharedToChat: !0
								});
							case ts:
								return r.a.createElement(Qa.a, {
									richUnitData: t,
									commentUrl: e,
									isSharedToChat: !0
								});
							default:
								return null
						}
					})(t, n) : r.a.createElement("div", {
						role: "button",
						tabIndex: 0,
						className: Ja.a.Link,
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(qa.e)(t, "_blank")
							})(e, t)
						}
					}, t))
				},
				as = n("./src/chat/controls/Checkbox/index.tsx"),
				ss = n("./src/chat/controls/Overlay/index.tsx"),
				cs = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				rs = n("./src/chat/controls/OverlayHeader/index.tsx"),
				os = n("./src/chat/components/OverlayShareToChat/index.m.less"),
				is = n.n(os);
			const {
				fbt: ls
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ds = ({
				channelId: e,
				onClick: t,
				channelFilterValue: n
			}) => {
				var a;
				const [s, i] = Object(c.useState)(!1), l = Object(o.e)(t => Object(_.t)(t, e)), d = Object(o.e)(t => Object(_.k)(t, e)), u = Object(c.useCallback)(() => {
					i(n => (t(!n, e), !n))
				}, [t, e]);
				return Object(c.useMemo)(() => !d || !!n && !d.toLowerCase().includes(n.toLowerCase()), [d, n]) ? null : r.a.createElement("div", {
					className: is.a.Channel
				}, r.a.createElement(as.a, {
					checked: s,
					onChange: u,
					className: is.a.Checkbox
				}, r.a.createElement("div", {
					className: is.a.CheckboxContent
				}, (null == l ? void 0 : l.firstUser) && r.a.createElement(Za.a, {
					className: is.a.ChannelIcon,
					userId: l.firstUser.id,
					secondUserId: null === (a = l.secondUser) || void 0 === a ? void 0 : a.id,
					isSmall: !0
				}), r.a.createElement("div", {
					className: is.a.ChannelName
				}, d))))
			}, us = ({
				onChannelClick: e,
				channels: t,
				chatUnitTypeData: n,
				message: a,
				shouldShowChannels: s,
				searchRef: c,
				channelsFilter: o,
				setChannelsFilter: i,
				onClickCreateNewChannel: l
			}) => r.a.createElement("div", {
				className: is.a.Content
			}, r.a.createElement(ns, {
				chatUnitTypeData: n,
				message: a
			}), s && r.a.createElement("div", {
				className: is.a.SearchInput
			}, r.a.createElement("label", {
				htmlFor: "channelSearch",
				className: is.a.Label
			}, r.a.createElement(pt.a, null)), r.a.createElement("input", {
				ref: c,
				placeholder: "Search chats",
				className: is.a.Input,
				type: "text",
				value: o,
				onChange: e => {
					i(e.target.value)
				},
				id: "channelSearch"
			})), r.a.createElement("div", {
				className: is.a.NewChat
			}, r.a.createElement("span", {
				className: is.a.NewChatContent,
				onClick: l,
				role: "button",
				tabIndex: 0
			}, r.a.createElement(It.a, {
				className: is.a.NewChatIcon
			}), ls._("new chat", null, {
				hk: "2JtgH4"
			}))), !s && r.a.createElement("div", {
				className: is.a.LoadingIndicator
			}, ls._("Loading Channels", null, {
				hk: "7Nhm8"
			})), t && s && r.a.createElement($e.b, {
				className: is.a.Scroller
			}, t.map(t => r.a.createElement(ds, {
				channelId: t.channelId,
				onClick: e,
				channelFilterValue: o,
				key: t.channelId
			}))));
			var hs = ({
					message: e
				}) => {
					const t = Object(o.d)(),
						n = Object(o.f)(),
						a = Object(c.useRef)(null),
						[s, i] = Object(c.useState)([]),
						[d, u] = Object(c.useState)([]),
						[h, m] = Object(c.useState)(""),
						[p, b] = Object(c.useState)(!1),
						g = Object(o.e)(_.G),
						f = Object(o.e)(_.v),
						O = Object(c.useMemo)(() => f >= wa.a.InitChannels || !g, [f, g]),
						E = Object(c.useCallback)(() => {
							const n = Object(He.getShareToNewChatUrl)(e);
							t(Object(xe.b)(n))
						}, [t, e]),
						j = Object(c.useCallback)((e, t) => {
							u(n => e ? [...n, t] : n.filter(e => e !== t))
						}, []),
						v = Object(c.useMemo)(() => Object(He.getChatUnitType)(e), [e]),
						C = Object(c.useMemo)(() => !Boolean(d.length), [d]),
						I = Object(c.useMemo)(() => ls._({
							"*": "Share to {amount of chats} chats",
							_1: "Share to {amount of chats} chat"
						}, [ls._param("amount of chats", d.length || ""), ls._plural(d.length)], {
							hk: "2O8DGN"
						}), [d]);
					Object(c.useEffect)(() => {
						t(Object(V.e)(v))
					}, [v, t]), Object(c.useEffect)(() => {
						(null == a ? void 0 : a.current) && a.current.focus()
					}, []), Object(c.useEffect)(() => {
						if (O) {
							const e = n.getState();
							Object(_.e)(e).length ? i(Object(_.e)(e)) : E()
						}
					}, [n, E, O]);
					return r.a.createElement(ss.a, null, r.a.createElement(rs.a, {
						title: ls._("Share to chat", null, {
							hk: "MfUYD"
						})
					}), r.a.createElement(us, {
						channels: s,
						channelsFilter: h,
						chatUnitTypeData: v,
						shouldShowChannels: O,
						message: e,
						onChannelClick: j,
						onClickCreateNewChannel: () => {
							E()
						},
						searchRef: a,
						setChannelsFilter: m
					}), r.a.createElement(cs.a, {
						primaryButtonText: I,
						primaryButtonDisabled: C || p,
						secondaryButtonAction: () => {
							t(Object(F.M)())
						},
						primaryButtonAction: () => {
							b(!0), t(Object(G.s)(d, e, ke.c.TEXT)), t(Object(l.I)())
						}
					}))
				},
				ms = n("./src/chat/components/Sidebar/index.tsx"),
				ps = n("./src/chat/actions/sendbird/sdk.ts"),
				bs = n("./src/chat/constants/toast.ts");

			function gs() {
				return (gs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var fs = e => r.a.createElement(b.a, gs({}, e, {
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

			function Os() {
				return (Os = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Es = e => r.a.createElement(b.a, Os({}, e, {
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
				js = n("./src/chat/components/ToastNotification/index.m.less"),
				vs = n.n(js);
			const Cs = [bs.a.ConnectionClosed, bs.a.ConnectionPending],
				_s = [bs.a.SomethingWentWrong, bs.a.ShareLinkRateLimit, bs.a.ShareLinkGone, bs.a.ShareLinkInvalidRequest, bs.a.ShareLinkNotFound, C.a.UnsupportedBrowser, C.a.InvalidMediaType, C.a.FileSizeLimitExceeded, C.a.ActiveFilesLimitExceeded],
				Is = [bs.a.LinkDisabled],
				xs = e => Cs.includes(e),
				ys = e => _s.includes(e),
				Ss = e => Is.includes(e);
			var ws = () => {
					const e = Object(o.e)(e => e.toast.toast),
						t = Object(o.e)(e => e.toast.customErrorMessage),
						n = Object(o.d)(),
						a = Object(o.e)(nt.h);
					return r.a.createElement("div", {
						className: Object(i.a)(vs.a.Wrapper, {
							[vs.a.show]: !!e || !!t
						})
					}, (e || t) && r.a.createElement("div", {
						className: Object(i.a)(vs.a.Content, {
							[vs.a.pending]: xs(e),
							[vs.a.error]: Boolean(t) || ys(e),
							[vs.a.info]: Ss(e),
							[vs.a.isFullSize]: a
						})
					}, r.a.createElement("button", {
						className: vs.a.CloseButton,
						onClick: () => {
							n(Object(v.c)(0))
						}
					}, r.a.createElement(te.a, {
						className: vs.a.CloseButtonIcon
					})), r.a.createElement("div", {
						className: vs.a.InfoWrapper
					}, r.a.createElement("div", {
						className: vs.a.Icon
					}, t ? r.a.createElement(fs, null) : e && (e => {
						switch (e) {
							case bs.a.LinkCopied:
							case bs.a.LinkDisabled:
							case bs.a.ConnectionOpen:
								return r.a.createElement(Es, null);
							case bs.a.ConnectionPending:
							case bs.a.ConnectionClosed:
							case bs.a.SomethingWentWrong:
							case bs.a.ShareLinkRateLimit:
							case bs.a.ShareLinkGone:
							case bs.a.ShareLinkInvalidRequest:
							case bs.a.ShareLinkNotFound:
							case C.a.UnsupportedBrowser:
							case C.a.InvalidMediaType:
							case C.a.FileSizeLimitExceeded:
							case C.a.ActiveFilesLimitExceeded:
								return r.a.createElement(fs, null);
							default:
								return null
						}
					})(e)), r.a.createElement("div", {
						className: vs.a.Message
					}, t || e && (e => {
						switch (e) {
							case bs.a.ConnectionOpen:
								return oe.fbt._("Found the internet!", null, {
									hk: "3jLr8W"
								});
							case bs.a.ConnectionPending:
								return oe.fbt._("Looking for the internet...", null, {
									hk: "1JPRuh"
								});
							case bs.a.ConnectionClosed:
								return oe.fbt._("Hmm, no internet?", null, {
									hk: "134peM"
								});
							case bs.a.SomethingWentWrong:
								return oe.fbt._("Oops! Something went wrong", null, {
									hk: "4CGwU7"
								});
							case bs.a.LinkCopied:
								return oe.fbt._("Link copied!", null, {
									hk: "1YEENU"
								});
							case bs.a.LinkDisabled:
								return oe.fbt._("Your invite links have been reset", null, {
									hk: "l8FWi"
								});
							case C.a.UnsupportedBrowser:
								return oe.fbt._("Oops! Unsupported browser for Media uploading", null, {
									hk: "3incN0"
								});
							case C.a.InvalidMediaType:
								return oe.fbt._("Oops! Chat only supports files in JPEG, PNG and GIF format", null, {
									hk: "8s0vB"
								});
							case C.a.FileSizeLimitExceeded:
								return oe.fbt._("Oops! Media file size limit exceeded. {Max gif file size}MB for GIF and {Max image file size}MB for JPEG and PNG", [oe.fbt._param("Max gif file size", String(40)), oe.fbt._param("Max image file size", String(20))], {
									hk: "2twjo7"
								});
							case bs.a.ShareLinkRateLimit:
								return oe.fbt._("That didn't work, try joining the chat later", null, {
									hk: "30uvo2"
								});
							case bs.a.ShareLinkInvalidRequest:
							case bs.a.ShareLinkNotFound:
							case bs.a.ShareLinkGone:
								return oe.fbt._("This link has expired", null, {
									hk: "3GpAgM"
								});
							case C.a.ActiveFilesLimitExceeded:
								return oe.fbt._("Oops! Too many files per message", null, {
									hk: "2x9klR"
								});
							default:
								return null
						}
					})(e)), r.a.createElement("button", {
						className: vs.a.ActionButton,
						onClick: () => {
							if (e) {
								const t = (e => {
									switch (e) {
										case bs.a.ConnectionClosed:
											return ps.g;
										default:
											return null
									}
								})(e);
								t && n(t())
							}
						}
					}, e && (e => {
						switch (e) {
							case bs.a.ConnectionClosed:
								return oe.fbt._("RECONNECT", null, {
									hk: "3jJ04G"
								});
							default:
								return ""
						}
					})(e)))))
				},
				Ns = n("./src/chat/constants/channels.ts"),
				ks = n("./src/chat/constants/container.ts");
			const Ms = () => null;
			var Ts = Object(Ha.a)({
					ErrorComponent: Ms,
					getComponent: () => Object(Ga.a)(() => n.e("OverlayBlockUser").then(n.bind(null, "./src/chat/components/OverlayBlockUser/index.tsx"))).then(e => e.default),
					LoadingComponent: Ms
				}),
				As = n("./src/chat/components/UserMetaInfo/index.tsx"),
				Ls = n("./src/chat/controls/MediaObject/index.m.less"),
				Ds = n.n(Ls);
			const Rs = Ft.a.wrapped(e => {
				const [t, n, a] = r.a.Children.toArray(e.children);
				return r.a.createElement("div", {
					className: e.className
				}, t, n, a)
			}, "MediaObject", Ds.a);
			var Ps = n("./src/chat/controls/Title/index.tsx"),
				Us = n("./src/chat/icons/Nsfw/index.tsx"),
				Bs = n("./src/chat/components/OverlayChannelInvited/index.m.less"),
				Fs = n.n(Bs);
			const {
				fbt: Hs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Gs = ({
				children: e
			}) => r.a.createElement("span", {
				className: Fs.a.LightTextSmall
			}, e), zs = ({
				inviterContact: e
			}) => e ? r.a.createElement(Gs, null, r.a.createElement(As.a, {
				contact: e
			})) : null, Vs = ({
				channelInviter: e,
				inviterContact: t,
				channelMessages: n,
				channelType: a,
				channelId: s
			}) => {
				const c = t && !!t.isNSFW;
				return e ? r.a.createElement(r.a.Fragment, null, r.a.createElement("a", {
					target: qa.d.BLANK,
					rel: qa.c,
					href: `${_t.a.redditUrl}/user/${e.name}`
				}, r.a.createElement(Rs, {
					className: Fs.a.MediaObject
				}, c ? r.a.createElement(Us.a, {
					className: Fs.a.NSFWIcon
				}) : r.a.createElement(me.a, {
					className: Fs.a.UserPic,
					userId: e.id
				}), r.a.createElement("div", {
					className: Fs.a.TitleContainer
				}, r.a.createElement(Ps.a, {
					className: Fs.a.Title,
					bold: !0
				}, e.name), c && r.a.createElement("span", {
					className: Fs.a.WarningTextNSFW
				}, Hs._("NSFW", null, {
					hk: "3rI4EF"
				}))), r.a.createElement(zs, {
					inviterContact: t
				}))), void 0 !== a && s && r.a.createElement(Ws, {
					channelType: a,
					channelMessages: n
				}), r.a.createElement("div", {
					className: Fs.a.Container
				})) : null
			}, Ws = ({
				channelType: e,
				channelMessages: t
			}) => {
				const n = B()([...t], "createdAt");
				return t && t.length ? r.a.createElement(ba, {
					channelType: e,
					messageList: n,
					inPreview: !0
				}) : null
			}, Ks = ({
				userName: e
			}) => r.a.createElement("p", null, Hs._("Accept to chat with {userName}{restText}", [Hs._param("userName", r.a.createElement("span", {
				className: Fs.a.BoldText
			}, e)), Hs._param("restText", r.a.createElement("span", null, ". If you ignore, the chat request will be removed, and we won’t let the sender know."))], {
				hk: "3FVxLq"
			})), Zs = ({
				userName: e,
				isQuickActionBlock: t
			}) => t ? Hs._("Are you sure you want to block {userName}", [Hs._param("userName", r.a.createElement("span", {
				className: Fs.a.BoldText
			}, ` ${e}?`))], {
				hk: "12VekN"
			}) : Hs._("Are you sure you want to mark this chat as spam? You will also block {userName}", [Hs._param("userName", r.a.createElement("span", {
				className: Fs.a.BoldText
			}, ` ${e}?`))], {
				hk: "1teJQL"
			});
			var qs = ({
				channelId: e
			}) => {
				var t, n;
				const a = Object(o.d)(),
					[s, i] = Object(c.useState)(!1);
				Object(c.useEffect)(() => {
					i(!1)
				}, [e]);
				const d = Object(o.e)(t => Object(_.i)(t, e)),
					u = Object(o.e)(t => Object(Ve.d)(t, e)),
					h = Object(o.e)(t => Object(_.z)(t, e)),
					m = Object(o.e)(pe.p),
					p = Object(o.e)(pe.r),
					b = Object(c.useCallback)(() => {
						a(Object(F.y)(e)), a(Object(l.p)(e))
					}, [a, e]),
					g = Object(c.useCallback)(() => {
						u && (a(Object(F.B)(e, u, !0)), a(Object(l.r)(e)))
					}, [a, e, u]),
					f = Object(c.useCallback)(() => {
						u && (a(Object(F.B)(e, u)), m && a(Object(l.q)()), p && a(Object(l.s)(e, h)))
					}, [a, e, u, m, p, h]),
					O = Object(c.useCallback)(() => {
						a(Object(F.N)(Ns.b.INVITED, e))
					}, [a, e]),
					E = Object(c.useMemo)(() => m ? Hs._("Block", null, {
						hk: "4CA4VX"
					}) : Hs._("Mark as spam", null, {
						hk: "3Iy1wd"
					}), [m]),
					j = Object(c.useMemo)(() => (null == d ? void 0 : d.type) === Y.b.Direct, [d]),
					v = Object(c.useMemo)(() => j ? Hs._("Chat Request", null, {
						hk: "1sWJM0"
					}) : Hs._("Group invite", null, {
						hk: "JPFyz"
					}), [j]);
				return r.a.createElement(ss.a, null, r.a.createElement(Ia.a, {
					channelId: e,
					title: v,
					showMenu: j
				}), r.a.createElement($e.b, {
					className: Fs.a.Scroller
				}, r.a.createElement(Vs, {
					channelInviter: null == d ? void 0 : d.inviter,
					channelMessages: h,
					inviterContact: u,
					channelId: null == d ? void 0 : d.channelId,
					channelType: null == d ? void 0 : d.type
				})), r.a.createElement("div", {
					className: Fs.a.OverlayControlBarWrapper
				}, s ? r.a.createElement(cs.a, {
					className: Fs.a.OverlayControlBar,
					secondaryButtonText: Hs._("Nevermind", null, {
						hk: "30ppMU"
					}),
					primaryButtonText: E,
					primaryButtonAction: f,
					secondaryButtonAction: O
				}, r.a.createElement(Zs, {
					userName: null === (t = null == d ? void 0 : d.inviter) || void 0 === t ? void 0 : t.name,
					isQuickActionBlock: m
				})) : r.a.createElement(cs.a, {
					className: Fs.a.OverlayControlBar,
					secondaryButtonText: Hs._("Ignore", null, {
						hk: "1ws6QH"
					}),
					secondaryButtonAction: g,
					primaryButtonText: Hs._("Accept", null, {
						hk: "249yqF"
					}),
					primaryButtonAction: b,
					primaryButtonBlock: m || p,
					primaryButtonBlockText: E,
					primaryButtonBlockAction: () => i(!0)
				}, r.a.createElement(Ks, {
					userName: null === (n = null == d ? void 0 : d.inviter) || void 0 === n ? void 0 : n.name
				}))))
			};
			const Qs = () => null;
			var Xs = Object(Ha.a)({
				ErrorComponent: Qs,
				getComponent: () => Object(Ga.a)(() => n.e("OverlayChannelRemoval").then(n.bind(null, "./src/chat/components/OverlayChannelRemoval/index.tsx"))).then(e => e.default),
				LoadingComponent: Qs
			});
			const Ys = () => null;
			var Js = Object(Ha.a)({
					ErrorComponent: Ys,
					getComponent: () => Object(Ga.a)(() => n.e("OverlayDeleteMessage").then(n.bind(null, "./src/chat/components/OverlayDeleteMessage/index.tsx"))).then(e => e.default),
					LoadingComponent: Ys
				}),
				$s = n("./src/chat/components/OverlayDirectsEmptySkeletonState/index.tsx");
			const ec = () => null;
			var tc = Object(Ha.a)({
				ErrorComponent: ec,
				getComponent: () => Object(Ga.a)(() => n.e("OverlayDirectsEmptyState").then(n.bind(null, "./src/chat/components/OverlayDirectsEmptyState/index.tsx"))).then(e => e.default),
				LoadingComponent: ec
			});
			const nc = () => null;
			var ac = Object(Ha.a)({
				ErrorComponent: nc,
				getComponent: () => Object(Ga.a)(() => n.e("OverlayKickUser").then(n.bind(null, "./src/chat/components/OverlayKickUser/index.tsx"))).then(e => e.default),
				LoadingComponent: nc
			});
			const sc = () => null;
			var cc = Object(Ha.a)({
				ErrorComponent: sc,
				getComponent: () => Object(Ga.a)(() => n.e("OverlayLinkSharingSettings").then(n.bind(null, "./src/chat/components/OverlayLinkSharingSettings/index.tsx"))).then(e => e.default),
				LoadingComponent: sc
			});
			const rc = () => null;
			var oc = Object(Ha.a)({
				ErrorComponent: rc,
				getComponent: () => Object(Ga.a)(() => n.e("OverlayNSFWWarning").then(n.bind(null, "./src/chat/components/OverlayNSFWWarning/index.tsx"))).then(e => e.default),
				LoadingComponent: rc
			});
			const ic = () => null;
			var lc = Object(Ha.a)({
					ErrorComponent: ic,
					getComponent: () => Object(Ga.a)(() => n.e("OverlayReport").then(n.bind(null, "./src/chat/components/OverlayReport/index.tsx"))).then(e => e.default),
					LoadingComponent: ic
				}),
				dc = n("./node_modules/lodash/get.js"),
				uc = n.n(dc),
				hc = n("./node_modules/reselect/es/index.js"),
				mc = n("./src/reddit/actions/reportFlow/index.ts"),
				pc = n("./src/reddit/actions/toaster.ts"),
				bc = n("./src/chat/components/FormBuilder/async.tsx"),
				gc = n("./src/lib/makeGqlRequest/index.ts"),
				fc = n("./src/redditGQL/operations/ReportForm.json");
			var Oc = n("./src/reddit/contexts/ApiContext.tsx"),
				Ec = n("./src/reddit/models/ReportFlow/index.ts"),
				jc = n("./src/reddit/models/Toast/index.ts"),
				vc = n("./src/chat/components/OverlayReport/index.m.less"),
				Cc = n.n(vc),
				_c = n("./src/chat/actions/user.ts"),
				Ic = n("./src/chat/components/CrisisFlow/CrisisFlowPage.tsx"),
				xc = n("./src/chat/components/CrisisFlow/CrisisFooter/index.m.less"),
				yc = n.n(xc);
			const {
				fbt: Sc
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function wc(e) {
				const {
					thankYouControls: t,
					onCloseReportFlow: n,
					onCrisisFlowSubmit: a
				} = e;
				return r.a.createElement("div", {
					className: yc.a.CrisisFooter
				}, t ? null : r.a.createElement("a", {
					className: yc.a.CrisisButton,
					"data-redditstyle": !0,
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					target: "_blank",
					rel: "noopener noreferrer"
				}, Sc._("Other Options", null, {
					hk: "1RadlV"
				})), r.a.createElement("button", {
					className: yc.a.CrisisSubmitButton,
					"data-redditstyle": !0,
					onClick: t ? n : a
				}, t ? Sc._("Ok", null, {
					hk: "3Pp8M4"
				}) : Sc._("Yes", null, {
					hk: "12gtn"
				})))
			}
			var Nc = n("./src/chat/endpoints/messages/index.tsx"),
				kc = n("./src/chat/routes/chat.ts");
			var Mc;
			! function(e) {
				e.Enabled = "enabled"
			}(Mc || (Mc = {}));
			const Tc = Object(hc.a)(e => e.experiments.models, e => {
					var t;
					return (null === (t = e.ae_reporting_revamp_d2x_chat) || void 0 === t ? void 0 : t.variant) === Mc.Enabled
				}),
				Ac = Ft.a.div("ReportLoaderWrapper", Cc.a),
				Lc = Ft.a.img("LoadingIcon", Cc.a),
				Dc = "2.0",
				Rc = Object(hc.c)({
					user: (e, t) => t.attr === kc.a.User ? e.contacts.models[t.attrId] : void 0,
					message: (e, t) => t.attr === kc.a.Invite || t.attr === kc.a.Message ? Object(Ca.b)(e, Number(t.attrId)) : void 0,
					messageList: e => Object(_.C)(e),
					currentUserId: (e, t) => Object(ra.a)(e),
					container: e => e && e.container && e.container.size,
					isNightMode: e => Object(En.b)(e),
					inReportingRevampSelector: e => Tc(e)
				}),
				Pc = Object(o.b)(Rc, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(mc.b)())
					},
					onChannelBlock: t => {
						e(_c.n(t)), e(l.V(t))
					},
					showFailToast: () => e(Object(pc.f)({
						kind: jc.b.Error,
						text: oe.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					})),
					onCancel: () => e(Object(xe.a)()),
					submitReportMessage: (t, n) => e(Object(l.Y)(t, n))
				})),
				Uc = async (e, t, n) => {
					var a;
					const s = await ((e, {
						itemId: t,
						formVersion: n,
						hostAppName: a
					}) => Object(gc.a)(e, {
						...fc,
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
			class Bc extends r.a.Component {
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
								submitReportMessage: c
							}
						} = this;
						if (!s || !s.sender) return;
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: r,
							ruleType: o
						} = e, i = {
							fromHelpDesk: !1,
							senderRedditorId: s.sender.userId,
							sendbirdId: String(s.messageId),
							channelUrl: s.channelSendbirdUrl
						};
						"site" === o && (i.siteRule = uc()(t, r.ref).value || uc()(t, r.ref));
						(await (() => Object(Nc.c)(n(), {
							input: i
						}))()).ok || a(), i.siteRule && c(s.messageId, i.siteRule)
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
							siteRule: Ec.b.SELF_HARM
						};
						this.setState({
							showCrisisFlowThankYouPage: !0
						}), (await (() => Object(Nc.c)(e(), {
							input: s
						}))()).ok || t(), a(n.messageId, Ec.b.SELF_HARM)
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
					Uc(this.props.gqlContext(), e, Dc).then(e => {
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
							inReportingRevampSelector: c
						},
						state: {
							formComponent: o,
							formState: i,
							ctlFlowOpened: l,
							hasLoaded: d,
							showCrisisFlowThankYouPage: u
						}
					} = this, h = null === (e = null == n ? void 0 : n.sender) || void 0 === e ? void 0 : e.nickname, m = null === (t = null == n ? void 0 : n.sender) || void 0 === t ? void 0 : t.userId;
					return l && h ? r.a.createElement(r.a.Fragment, null, r.a.createElement(Ic.a, {
						username: h,
						ctlSubmitted: u
					}), c && r.a.createElement(wc, {
						onCrisisFlowSubmit: this.onCrisisFlowSubmit,
						onCloseReportFlow: this.handleReportFlowClose,
						thankYouControls: u
					})) : o && i && d && m ? r.a.createElement(bc.a, {
						formComponent: o,
						formState: i,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: "Submit a Report",
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => a(m),
						variant: this.props.container
					}) : r.a.createElement(Ac, null, r.a.createElement(Lc, {
						src: s ? `${_t.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${_t.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			var Fc = Object(Oc.b)(Pc(Bc));
			const Hc = e => e.userIds ? r.a.createElement($s.a, null) : e.channelId ? e.action === Ns.a.VIEW_INVITE && e.channelId ? r.a.createElement(qs, {
				channelId: e.channelId
			}) : e.action === Ns.a.VIEW_MEMBERS && e.channelId ? r.a.createElement(Va, {
				channelId: e.channelId
			}) : e.action === Ns.a.VIEW_NSFW_CONFIRMATION && e.channelId ? r.a.createElement(oc, {
				channelId: e.channelId
			}) : e.action === Ue.a.Block && e.attrId && e.channelId ? r.a.createElement(Ts, {
				channelId: e.channelId,
				blockedUserId: e.attrId
			}) : e.action === ke.a.DELETE && e.channelId && e.attrId ? r.a.createElement(Js, {
				channelId: e.channelId,
				messageId: parseInt(e.attrId)
			}) : e.action === ke.a.REPORT && e.attr && e.attrId && e.channelId ? e.inReportRevamp ? r.a.createElement(Fc, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : r.a.createElement(lc, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : e.action === Ue.a.Kick && e.attr && e.attrId && e.channelId ? r.a.createElement(ac, {
				channelId: e.channelId,
				attr: e.attr,
				attrId: e.attrId
			}) : e.action === Ns.a.DENY && e.channelId ? r.a.createElement(Xs, {
				channelId: e.channelId
			}) : e.action === Ns.a.INVITE_LINK_SETTINGS && e.channelId ? r.a.createElement(cc, {
				inviteLinkDataModelId: e.channelId,
				isForDirect: !!e.attr
			}) : void 0 : r.a.createElement(tc, null);
			var Gc = n("./src/chat/selectors/platform.ts"),
				zc = n("./src/chat/selectors/sidebar.ts"),
				Vc = n("./src/chat/components/FrameContent/index.m.less"),
				Wc = n.n(Vc);
			const Kc = Wc.a.Main,
				Zc = Object(Xt.a)({
					channel: _.o,
					container: nt.a,
					userAccount: ra.d,
					isSidebarVisible: zc.b,
					inReportingRevampSelector: Tc,
					isImageShareEnabled: (e, t) => Object(pe.k)(e, t.match.params.channelId),
					isChannelInPendingState: _.J,
					queryParamsFromUrl: Gc.c
				}),
				qc = Object(o.b)(Zc);
			class Qc extends r.a.Component {
				constructor() {
					super(...arguments), this.mainRef = r.a.createRef()
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
						isImageShareEnabled: c,
						isChannelInPendingState: o,
						queryParamsFromUrl: l
					} = this.props, {
						action: d,
						channelId: u
					} = this.props.match.params;
					switch (!0) {
						case !n:
							return null;
						case d === Ns.a.SHARE: {
							const e = l && l.message;
							return this.props.location.search && e && r.a.createElement(hs, {
								message: e
							})
						}
						case d === Ns.a.VIEW_MEMBERS:
							return u && r.a.createElement(Va, {
								channelId: u
							});
						case d === Ns.a.SHARE_NEW_CHANNEL:
						case d === Ns.a.CREATE:
						case d === Ns.a.INVITE_MEMBERS: {
							let e;
							return d === Ns.a.SHARE_NEW_CHANNEL && (e = l && l.message), r.a.createElement(Ka, {
								messageValue: e
							})
						}
						case t === ks.a.MINIMIZED:
							return r.a.createElement(Fa.a, null);
						default: {
							const n = Hc({
								...this.props.match.params,
								inReportRevamp: s
							});
							return r.a.createElement("div", {
								className: Wc.a.Main
							}, r.a.createElement(ms.b, null), r.a.createElement("div", {
								ref: this.mainRef,
								className: Object(i.a)(Wc.a.Content, {
									[Wc.a.hidden]: a,
									[Wc.a.isFullSize]: t === ks.a.FULL
								})
							}, n ? r.a.createElement("div", {
								className: Wc.a.Modal
							}, n) : e && u && r.a.createElement(r.a.Fragment, null, r.a.createElement(Ba, {
								channel: e
							}), c && !o && r.a.createElement(T, {
								dropZoneRef: this.mainRef
							}))))
						}
					}
				}
				render() {
					return r.a.createElement("main", {
						className: Wc.a.Main,
						id: et.a
					}, this.getContent(), r.a.createElement(ws, null))
				}
			}
			t.b = qc(Qc)
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
				c = n.n(s),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
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
				j = n("./src/chat/selectors/channels.ts"),
				v = n("./src/chat/components/MemberActionDropdown/index.m.less"),
				C = n.n(v);
			const _ = ["t2_2ednvld6"],
				I = u.a.wrapped(e => o.a.createElement("span", {
					className: Object(d.a)({
						[C.a.active]: e.id === e.dropdownId
					}, e.className)
				}, e.children), "Wrapper", C.a),
				x = Object(l.a)(u.a.wrapped(b.a, "Component", C.a)),
				y = u.a.wrapped(g.a, "DropdownRow", C.a),
				S = u.a.wrapped(p.d, "IconButton", C.a),
				w = e => o.a.createElement("span", {
					className: e.className,
					id: e.id,
					onClick: e.onClick,
					role: "button"
				}, o.a.createElement(S, null, o.a.createElement(E.a, null))),
				N = Object(f.a)({
					dropdownId: e => e.tooltipId || "",
					currentUserIsChannelMod: j.a
				}),
				k = Object(i.b)(N, (e, t) => ({
					onOpenDropdown: () => e(Object(h.c)(t.id)),
					onBlockUser: t => e(Object(h.a)(t)),
					onReportUser: t => e(Object(h.d)(t)),
					onKickUser: t => e(Object(h.b)(t))
				}));
			class M extends r.Component {
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
						return e && !t ? c()(m.c.members, [n, a]) : t ? e ? c()(m.c.members, [n]) : m.c.members : c()(m.c.members, [a])
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
							userId: c
						},
						getDropdownOptions: r,
						getContainer: i
					} = this;
					if (_.includes(c)) return null;
					const l = r();
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
			t.a = k(M)
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
				p = n("./node_modules/react-router-redux/es/index.js"),
				b = n("./src/chat/constants/messages.ts"),
				g = n("./src/chat/constants/users.ts"),
				f = n("./src/chat/controls/Button/index.tsx"),
				O = n("./src/chat/helpers/urls/index.ts"),
				E = n("./src/telemetry/models/Event.ts"),
				j = n("./src/chat/components/Message/ActionButtonGroup.m.less"),
				v = n.n(j);
			const C = ({
				children: e,
				onClick: t
			}) => c.a.createElement("span", {
				className: v.a.ActionButton,
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
					} = e, u = null == a ? void 0 : a.userId, h = Object(r.d)(), m = Object(s.useCallback)(() => {
						h(Object(p.b)(Object(O.messageActionUrl)(t, n, b.a.DELETE)))
					}, [h, t, n]), j = Object(s.useCallback)(() => {
						h(Object(p.b)(Object(O.inviteMessageActionUrl)(t, n, b.a.REPORT)))
					}, [h, t, n]), _ = Object(s.useCallback)(() => {
						h(Object(p.b)(Object(O.messageActionUrl)(t, n, b.a.REPORT)))
					}, [h, t, n]), I = Object(s.useCallback)(() => {
						u && h(Object(p.b)(Object(O.userActionUrl)(t, u, g.a.Kick, {
							source: E.b.ChatView
						})))
					}, [h, t, u]);
					return c.a.createElement("div", {
						className: Object(o.a)(v.a.Wrapper, {
							[v.a.single]: !d || i
						})
					}, d && !i ? c.a.createElement(c.a.Fragment, null, c.a.createElement(C, {
						onClick: m
					}, c.a.createElement(f.f, {
						className: v.a.Button
					})), c.a.createElement(C, {
						onClick: () => l ? j() : _()
					}, c.a.createElement(f.c, {
						className: v.a.Button
					})), c.a.createElement(C, {
						onClick: I
					}, c.a.createElement(f.e, {
						className: v.a.Button
					}))) : i ? c.a.createElement(C, {
						onClick: m
					}, c.a.createElement(f.f, {
						className: v.a.Button
					})) : c.a.createElement(C, {
						onClick: () => l ? j() : _()
					}, c.a.createElement(f.c, {
						className: v.a.Button
					})))
				},
				I = n("./src/lib/lessComponent.tsx"),
				x = n("./src/chat/actions/message/index.ts"),
				y = n("./src/chat/controls/TextButton.tsx"),
				S = n("./src/chat/components/Message/CollapsedMessage.m.less"),
				w = n.n(S);
			var N = Object(r.b)(void 0, (e, t) => ({
					uncollapseMessage: () => {
						e(Object(x.E)(t)), e(Object(h.R)(t.messageId))
					},
					viewCollapsedMessage: () => {
						e(Object(h.gb)(t.messageId))
					}
				}))(I.a.wrapped(({
					className: e,
					uncollapseMessage: t,
					viewCollapsedMessage: n
				}) => c.a.createElement("div", {
					onLoad: n,
					className: e
				}, a.fbt._("This message has been collapsed due to potentially offensive language.", null, {
					hk: "4qscuz"
				}), c.a.createElement("div", null, c.a.createElement(y.a, {
					onClick: t
				}, a.fbt._("View Message", null, {
					hk: "QjaEs"
				})))), "CollapsedMessage", w.a)),
				k = n("./src/chat/components/Message/FailedMenu.m.less"),
				M = n.n(k);
			const T = I.a.div("ButtonControls", M.a),
				A = I.a.span("Text", M.a),
				L = I.a.wrapped(f.a, "Button", M.a);
			class D extends s.Component {
				constructor() {
					super(...arguments), this.handleResend = () => this.props.onResend(this.props.clientMessageId), this.handleDelete = () => this.props.onDelete(this.props.clientMessageId)
				}
				render() {
					return c.a.createElement(T, null, c.a.createElement(A, null, a.fbt._("Failed to send", null, {
						hk: "2feF2H"
					})), c.a.createElement(L, {
						noBorder: !0,
						onClick: this.handleResend
					}, a.fbt._("Resend", null, {
						hk: "cXpU3"
					})), c.a.createElement(L, {
						warningNoBorder: !0,
						onClick: this.handleDelete
					}, a.fbt._("Delete", null, {
						hk: "4lt26q"
					})))
				}
			}
			var R = Object(r.b)(void 0, (e, {
					channelId: t
				}) => ({
					onResend: n => e(Object(x.A)(t, n)),
					onDelete: t => e(Object(x.z)({
						clientMessageId: t
					}))
				}))(D),
				P = n("./src/chat/components/Message/LinkedText.tsx"),
				U = n("./src/lib/portal/index.tsx"),
				B = n("./src/chat/constants/keys.ts"),
				F = n("./src/chat/icons/svgs/NavClose/index.tsx"),
				H = n("./src/chat/components/MediaPreview/index.m.less"),
				G = n.n(H);
			var z = ({
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
					return c.a.createElement(U.a, null, c.a.createElement("div", {
						ref: n,
						className: G.a.MediaPreview,
						onClick: e,
						onKeyDown: a,
						tabIndex: 0,
						role: "button",
						"aria-pressed": "false"
					}, c.a.createElement(f.d, {
						className: G.a.CloseIcon
					}, c.a.createElement(F.a, null)), t && c.a.createElement("img", {
						className: G.a.Image,
						src: t,
						onClick: e => e.stopPropagation()
					})))
				},
				V = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx");
			var W = n("./src/chat/helpers/linkParser/index.ts"),
				K = n("./src/chat/models/Message/adapter.ts"),
				Z = n("./src/chat/models/Uploads/index.ts"),
				q = n("./src/chat/selectors/app.ts"),
				Q = n("./src/chat/selectors/uploads.ts"),
				X = n("./src/chat/components/Message/Media/index.m.less"),
				Y = n.n(X);
			const J = {
				[Z.c.Submit]: Y.a.submit,
				[Z.c.Uploading]: Y.a.uploading,
				[Z.c.Processing]: Y.a.processing
			};
			var $ = ({
					messageDataType: e,
					uploadId: t,
					uploadedImage: n,
					fromCurrentUser: i
				}) => {
					var l, d, u, m;
					const p = Object(r.d)(),
						b = Object(r.e)(q.b),
						g = Object(r.e)(e => Object(Q.c)(e, t)),
						[f, O] = Object(s.useState)(!1),
						E = Boolean((null == g ? void 0 : g.status) === Z.c.Failed),
						j = Boolean((null == g ? void 0 : g.status) === Z.c.Success),
						v = Boolean((null == g ? void 0 : g.status) === Z.c.Canceled),
						C = !(E || v || j || !g),
						_ = g && J[g.status],
						I = (null == n ? void 0 : n.url) || (null === (l = null == g ? void 0 : g.metadata) || void 0 === l ? void 0 : l.localUrl),
						x = (null == n ? void 0 : n.width) || (null === (d = null == g ? void 0 : g.metadata) || void 0 === d ? void 0 : d.width),
						y = (null == n ? void 0 : n.height) || (null === (u = null == g ? void 0 : g.metadata) || void 0 === u ? void 0 : u.height),
						S = Object(s.useMemo)(() => {
							if (y && x) return (({
								maxHeight: e,
								maxWidth: t,
								originalHeight: n,
								originalWidth: a
							}) => {
								if (n <= e && a <= t) return {
									width: a,
									height: n
								};
								const s = Math.min(t / a, e / n);
								return {
									width: a * s,
									height: n * s
								}
							})({
								maxHeight: b < 960 ? 270 : 300,
								maxWidth: b < 960 ? 230 : 470,
								originalHeight: y,
								originalWidth: x
							})
						}, [y, x, b]);
					return (null == n ? void 0 : n.phase) !== K.a.PreUpload || i ? c.a.createElement(c.a.Fragment, null, !E && f && I && c.a.createElement(z, {
						onClose: () => O(!1),
						url: I
					}), c.a.createElement("button", {
						className: Y.a.MediaWrapper,
						onClick: () => {
							O(!0), p(Object(h.g)(e))
						}
					}, c.a.createElement("img", {
						key: t,
						style: {
							height: (null == S ? void 0 : S.height) && `${S.height}px`,
							width: (null == S ? void 0 : S.width) && `${S.width}px`
						},
						className: Object(o.a)(Y.a.MediaImage, {
							[Y.a.failed]: E
						}),
						src: Object(W.c)(I)
					}), C && c.a.createElement("div", {
						className: Object(o.a)(Y.a.ProgressBar, _)
					}, (null === (m = null == g ? void 0 : g.progress) || void 0 === m ? void 0 : m.percent) && c.a.createElement("div", {
						className: Y.a.UploadingIndicatorWrapper
					}, c.a.createElement("div", {
						className: Y.a.UploadingIndicator,
						style: {
							width: `${Number(g.progress.percent).toFixed(2)}%`
						}
					})))), E && c.a.createElement("div", {
						className: Y.a.FailedText
					}, a.fbt._("Failed to upload", null, {
						hk: "wy9r9"
					}))) : c.a.createElement(V.c, {
						height: null == S ? void 0 : S.height,
						width: null == S ? void 0 : S.width
					})
				},
				ee = n("./src/chat/components/Message/OffensiveMessageReportPrompt.m.less"),
				te = n.n(ee);
			const ne = I.a.wrapped(y.a, "Regular", te.a),
				ae = I.a.wrapped(y.a, "Active", te.a),
				se = Object(r.b)(void 0, (e, t) => ({
					cancel: () => {
						e(Object(x.w)(t)), e(Object(h.b)(t.channelId, t.messageId))
					},
					reportMessage: () => {
						e(Object(p.b)(Object(O.inviteMessageActionUrl)(t.channelId, t.messageId, b.a.REPORT))), e(Object(x.w)(t)), e(Object(h.Q)(t.channelId, t.messageId))
					}
				}));
			var ce = I.a.wrapped(se(e => c.a.createElement("div", {
					className: e.className
				}, a.fbt._("Was this message offensive?", null, {
					hk: "1sBVkd"
				}), c.a.createElement("div", null, c.a.createElement(ne, {
					onClick: () => e.cancel(e)
				}, a.fbt._("No", null, {
					hk: "SG3Y"
				})), c.a.createElement(ae, {
					onClick: () => e.reportMessage(e)
				}, a.fbt._("Yes", null, {
					hk: "3ONldA"
				}))))), "OffensiveMessageReport", te.a),
				re = n("./src/chat/components/Message/RichUnit/Comment/loader.tsx"),
				oe = n("./src/higherOrderComponents/makeAsync.tsx"),
				ie = n("./src/lib/loadWithRetries/index.ts");
			const le = () => null;
			var de = Object(oe.a)({
					ErrorComponent: le,
					getComponent: () => Object(ie.a)(() => n.e("ExternalLinkUnit").then(n.bind(null, "./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.tsx"))).then(e => e.default),
					LoadingComponent: le
				}),
				ue = n("./src/chat/components/Message/RichUnit/Post/loader.tsx"),
				he = n("./src/lib/prettyPrintNumber/index.ts"),
				me = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.tsx"),
				pe = n("./src/chat/components/Message/RichUnit/commonComponents/Header.tsx"),
				be = n("./src/chat/components/Message/RichUnit/commonComponents/ImageContent.tsx"),
				ge = n("./src/chat/components/Message/RichUnit/Subreddit/SubredditRichUnit.m.less"),
				fe = n.n(ge);
			const Oe = I.a.div("Delimiter", fe.a),
				Ee = I.a.wrapped(be.a, "ImageContent", fe.a),
				je = I.a.wrapped(({
					className: e,
					imageUrl: t = "",
					title: n,
					subredditType: a,
					isNsfw: s
				}) => c.a.createElement("div", {
					className: e,
					tabIndex: 0
				}, c.a.createElement(Ee, {
					url: t,
					title: n,
					subredditType: a,
					isNsfw: s,
					isSubreddit: !0
				})), "Content", fe.a),
				ve = I.a.wrapped(({
					className: e,
					darkBackground: t,
					richUnitData: n,
					richUnitData: {
						subscribersCount: a = 0,
						activeCount: s = 0
					}
				}) => {
					var r, i, l, u;
					const h = `${Object(he.b)(a)} members • ${Object(he.b)(s)} online`,
						m = `/r/${n.id}`;
					return c.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(d.e)(t, "_blank")
							})(e, m)
						},
						className: Object(o.a)(e, {
							[fe.a.dark]: t
						})
					}, c.a.createElement(pe.a, {
						subredditName: n.id,
						iconUrl: null === (r = null == n ? void 0 : n.styles) || void 0 === r ? void 0 : r.icon,
						subredditTitle: n.title
					}), (null === (i = n.styles) || void 0 === i ? void 0 : i.bannerBackgroundImage) || !(null == n ? void 0 : n.subredditType) && !(null === (l = n.styles) || void 0 === l ? void 0 : l.bannerBackgroundImage) ? null : c.a.createElement(Oe, null), (null == n ? void 0 : n.subredditType) && c.a.createElement(je, {
						imageUrl: null === (u = null == n ? void 0 : n.styles) || void 0 === u ? void 0 : u.bannerBackgroundImage,
						title: (null == n ? void 0 : n.publicDescriptionText) || "",
						subredditType: (null == n ? void 0 : n.subredditType) || "",
						isNsfw: Boolean(null == n ? void 0 : n.isNsfw)
					}), c.a.createElement(me.a, {
						isSubreddit: !0,
						metaInfo: h
					}))
				}, "SubredditRichUnit", fe.a);
			var Ce = I.a.wrapped(({
					className: e,
					darkBackground: t,
					richUnitData: n
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(ve, {
					darkBackground: t,
					richUnitData: n
				})), "RichUnitWrapper", fe.a),
				_e = n("./node_modules/lodash/isEmpty.js"),
				Ie = n.n(_e),
				xe = n("./src/chat/controls/Svg/index.tsx");
			var ye = e => c.a.createElement(xe.a, {
					className: e.className,
					viewBox: "0 0 14 11"
				}, c.a.createElement("path", {
					d: "M13.1656,4.55472 L12.0464,3.43472 C11.896,3.28432 11.6928,3.20032 11.4808,3.20032 C11.268,3.20032 11.0648,3.28432 10.9152,3.43472 L5.32,9.02912 L3.0856,6.79472 C2.7736,6.48192 2.2672,6.48192 1.9544,6.79472 L0.8344,7.91472 C0.5216,8.22752 0.5216,8.73392 0.8344,9.04592 L4.7544,12.96592 C4.9112,13.12192 5.1152,13.20032 5.32,13.20032 C5.5248,13.20032 5.7296,13.12192 5.8856,12.96592 L13.1656,5.68592 C13.4784,5.37312 13.4784,4.86752 13.1656,4.55472",
					transform: "translate(0 -3)"
				})),
				Se = n("./src/chat/icons/svgs/Trash/index.tsx"),
				we = n("./src/chat/components/MessageReportDialog/ActionMenu.m.less"),
				Ne = n.n(we);
			const {
				fbt: ke
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Me = I.a.wrapped(ye, "Approve", Ne.a), Te = I.a.wrapped(Se.a, "Trash", Ne.a), Ae = I.a.div("ButtonControls", Ne.a), Le = I.a.wrapped(f.a, "Button", Ne.a), De = I.a.span("ButtonText", Ne.a);
			class Re extends s.Component {
				render() {
					const {
						onDelete: e,
						onIgnore: t,
						reportedChannelId: n,
						reportedMessageId: a
					} = this.props;
					return c.a.createElement(Ae, null, c.a.createElement(Le, {
						noBorder: !0,
						onClick: () => e(a, n)
					}, c.a.createElement(Te, null), c.a.createElement(De, null, ke._("Delete Message", null, {
						hk: "3ksti7"
					}))), c.a.createElement(Le, {
						noBorder: !0,
						onClick: () => t(a, n)
					}, c.a.createElement(Me, null), c.a.createElement(De, null, ke._("Ignore Report", null, {
						hk: "1QScZP"
					}))))
				}
			}
			var Pe = Object(r.b)(void 0, e => ({
					onDelete: (t, n) => e(Object(x.B)(t, n)),
					onIgnore: (t, n) => e(Object(x.C)(t, n))
				}))(Re),
				Ue = n("./src/chat/components/MemberActionDropdown/index.tsx"),
				Be = n("./src/config.ts"),
				Fe = n("./src/chat/helpers/time/index.tsx"),
				He = n("./src/chat/controls/TimeStamp/index.m.less"),
				Ge = n.n(He);
			var ze = I.a.wrapped(e => {
					const t = "number" == typeof e.date ? new Date(e.date) : e.date;
					return c.a.createElement("time", {
						className: e.className,
						dateTime: Object(Fe.c)(t),
						title: Object(Fe.b)(t)
					}, e.children)
				}, "TimeStamp", Ge.a),
				Ve = n("./src/chat/components/MessageHeader/index.m.less"),
				We = n.n(Ve);
			const Ke = I.a.wrapped(ze, "TimeStamp", We.a),
				Ze = I.a.span("UserName", We.a);
			var qe = I.a.wrapped(e => c.a.createElement("a", {
				target: d.d.BLANK,
				rel: d.c,
				className: e.className,
				href: `${Be.a.redditUrl}/user/${e.nickname}`
			}, c.a.createElement(m.a, {
				userId: e.userId,
				isSmall: !0
			}), c.a.createElement(c.a.Fragment, null, c.a.createElement(Ze, null, e.nickname), c.a.createElement(Ke, {
				date: e.createdAt
			}, Object(Fe.d)(new Date(e.createdAt))), e.children)), "UserHeader", We.a);
			var Qe = e => c.a.createElement(xe.a, {
				className: e.className,
				disable: !0,
				viewBox: "0 0 16 16"
			}, c.a.createElement("g", {
				transform: "translate(-26.000000, -37.000000)"
			}, c.a.createElement("path", {
				d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
			})));

			function Xe() {
				return (Xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ye = e => c.a.createElement(xe.a, Xe({}, e, {
					viewBox: "0 0 16 16"
				}), c.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				})),
				Je = n("./src/chat/icons/svgs/MenuOverflow/index.tsx"),
				$e = n("./src/chat/components/MessageReportDialog/Header.m.less"),
				et = n.n($e);
			const tt = I.a.wrapped(Qe, "Group", et.a),
				nt = I.a.wrapped(Ye, "Key", et.a),
				at = I.a.wrapped(Ue.a, "MemberActionDropdown", et.a),
				st = I.a.wrapped(qe, "MessageHeaderLink", et.a),
				ct = I.a.h5("ChannelName", et.a),
				rt = I.a.span("TextOverflow", et.a),
				ot = I.a.wrapped(f.d, "IconButton", et.a),
				it = I.a.div("Header", et.a);
			var lt = e => {
					const {
						channelId: t,
						channelIsPublic: n,
						channelName: a,
						messageCreatedAt: s,
						messageId: r,
						reportedUserId: o,
						reportedUserName: i
					} = e, l = `UserAction--Item-${r}`;
					return c.a.createElement(it, null, c.a.createElement(st, {
						createdAt: s,
						nickname: i,
						userId: o
					}, c.a.createElement(ct, null, n ? c.a.createElement(tt, null) : c.a.createElement(nt, null), c.a.createElement(rt, null, a))), c.a.createElement(at, {
						channelId: t,
						containerClassName: l,
						className: l,
						dropdownIndex: 0,
						id: `UserAction--Select-${r}`,
						isBlockedUser: !1,
						userId: o
					}, c.a.createElement(ot, null, c.a.createElement(Je.a, null))))
				},
				dt = n("./src/chat/components/MessageReportDialog/index.m.less"),
				ut = n.n(dt);
			const {
				fbt: ht
			} = n("./node_modules/fbt/lib/FbtPublic.js"), mt = I.a.p("ReasonText", ut.a), pt = I.a.p("DeleteText", ut.a), bt = I.a.p("AcceptText", ut.a);
			var gt = e => {
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
					return c.a.createElement(c.a.Fragment, null, n && s && a && i && r && d && u && c.a.createElement(lt, {
						channelId: n,
						channelIsPublic: a,
						channelName: s,
						messageCreatedAt: r,
						messageId: i,
						reportedUserId: d,
						reportedUserName: u
					}), o, c.a.createElement(mt, null, ht._("Reported for {reason}", [ht._param("reason", l)], {
						hk: "2BwGqI"
					}), " ", h && ht._("by /u{reporter}", [ht._param("reporter", h)], {
						hk: "1hrZNZ"
					})), t && t.deleted && c.a.createElement(pt, null, ht._("Deleted by {username}", [ht._param("username", `u/${t.deleted.userName}`)], {
						hk: "4mxZZS"
					})), t && t.ignored && c.a.createElement(bt, null, ht._("Approved by {username}", [ht._param("username", `u/${t.ignored.userName}`)], {
						hk: "m22OH"
					})), Ie()(t) && c.a.createElement(Pe, {
						reportedMessageId: e.message.messageId,
						reportedChannelId: e.message.channelId
					}))
				},
				ft = n("./src/chat/actions/message/reactions.ts"),
				Ot = n("./src/chat/actions/messageReactions/index.ts"),
				Et = n("./src/chat/actions/tooltip.ts"),
				jt = n("./src/chat/components/MessageInput/constants.ts");

			function vt() {
				return (vt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ct = e => c.a.createElement(xe.a, vt({}, e, {
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
				_t = n("./src/chat/models/MessageReaction/index.ts"),
				It = n("./src/chat/selectors/sendbird.ts"),
				xt = n("./src/chat/selectors/user.ts"),
				yt = n("./src/chat/components/Reactions/ReactionsTray/index.m.less"),
				St = n.n(yt);
			var wt = ({
					message: e,
					onClick: t
				}) => {
					const n = Object(r.d)();
					Object(s.useEffect)(() => {
						n(Object(h.y)())
					}, [n]);
					const a = Object(r.e)(xt.a),
						o = Object(r.e)(It.c),
						i = Object(s.useCallback)(s => {
							const c = e.reactions.find(e => e.key === s),
								r = !!Boolean(c) && Boolean(null == c ? void 0 : c.userIds.find(e => e === a));
							n(Object(ft.b)({
								channelSendbirdId: e.channelId,
								messageSendbirdId: e.messageId,
								reactionIconKey: s,
								type: _t.a.ADD,
								userId: a
							})), t();
							const i = null == o ? void 0 : o.findIndex(e => e.key === s);
							i && (r || n(Object(h.T)(e.messageId, i + 1, s, "bar")))
						}, [t, e, n, a, o]);
					return o ? c.a.createElement("div", {
						className: St.a.ReactionsContainer
					}, c.a.createElement("div", {
						className: St.a.ReactionsIcons
					}, o.map((e, t) => c.a.createElement("span", {
						key: t,
						onClick: () => i(e.key),
						className: St.a.ReactionIcon,
						style: {
							animationDelay: `${.3/7*t+.1}s`,
							animationDuration: "0.3s"
						}
					}, c.a.createElement("img", {
						className: St.a.ReactionImage,
						src: e.url,
						alt: e.altText
					})))), c.a.createElement("span", {
						className: St.a.AddIcon,
						onClick: () => {
							t(), n(Object(Ot.b)(e.messageId)), n(Object(Et.c)({
								tooltipId: jt.c
							})), n(Object(h.z)())
						}
					}, c.a.createElement(Ct, {
						isFilled: !0
					}))) : null
				},
				Nt = n("./src/chat/components/Snoomoji/index.tsx"),
				kt = n("./src/chat/controls/Gif/index.tsx"),
				Mt = n("./src/chat/controls/TooltipHooked/loader.tsx"),
				Tt = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				At = n("./src/chat/helpers/dom.ts");

			function Lt() {
				return (Lt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Dt = e => c.a.createElement(xe.a, Lt({}, e, {
					viewBox: "0 0 20 20"
				}), c.a.createElement("path", {
					d: "M10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5Z"
				}), c.a.createElement("path", {
					d: "M10 6C10.8284 6 11.5 5.32843 11.5 4.5C11.5 3.67157 10.8284 3 10 3C9.17157 3 8.5 3.67157 8.5 4.5C8.5 5.32843 9.17157 6 10 6Z"
				}), c.a.createElement("path", {
					d: "M10 17C10.8284 17 11.5 16.3284 11.5 15.5C11.5 14.6716 10.8284 14 10 14C9.17157 14 8.5 14.6716 8.5 15.5C8.5 16.3284 9.17157 17 10 17Z"
				})),
				Rt = n("./src/chat/icons/svgs/Smile/index.tsx"),
				Pt = n("./src/chat/models/RichUnit/index.ts"),
				Ut = n("./src/chat/selectors/experiments.ts"),
				Bt = n("./src/chat/selectors/richUnits.ts"),
				Ft = n("./src/chat/components/Message/Bubble.m.less"),
				Ht = n.n(Ft);
			const {
				PENDING: Gt,
				USER: zt
			} = b.d, {
				POST: Vt,
				USER_POST: Wt,
				COMMENT: Kt,
				SNOOMOJI: Zt,
				SUBREDDIT: qt,
				EMBED: Qt,
				GIF: Xt,
				IMAGE: Yt
			} = b.c, Jt = () => {
				const e = Object(r.d)();
				return Object(r.e)(Ut.o) ? c.a.createElement("div", {
					className: Ht.a.ThemePrompt,
					tabIndex: 0
				}, c.a.createElement("button", {
					className: Ht.a.Content,
					onClick: () => {
						e(Object(u.clickThemePrompt)()), e(Object(h.h)())
					}
				}, "🖍 ", a.fbt._("Change chat theme", null, {
					hk: "4F8P45"
				}))) : null
			}, $t = c.a.forwardRef(({
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
				var E, j;
				const v = Object(l.b)(Object(Tt.g)(Boolean(s))),
					C = Object(r.e)(e => Object(Ut.k)(e, null == p ? void 0 : p.channelId)),
					_ = Object(r.e)(e => Object(Ut.j)(e)),
					I = C || !_;
				return c.a.createElement("span", {
					onMouseEnter: t => {
						var n;
						e && (null === (n = t.target) || void 0 === n ? void 0 : n.classList.contains(e)) && v.show()
					},
					onMouseLeave: v.hide,
					ref: Object(i.a)(f, v.target.ref),
					className: Object(o.a)(e, {
						[Ht.a.dark]: !s,
						[Ht.a.disabled]: n,
						[Ht.a.withBorder]: a,
						[Ht.a.currentUser]: s,
						[Ht.a.embed]: h,
						[Ht.a.noPadding]: g,
						[Ht.a.gif]: (null == p ? void 0 : p.messageData.type) === Xt && !u,
						[Ht.a.media]: (null == p ? void 0 : p.messageData.type) === Yt && !u && I
					})
				}, t, b && (null === (E = null == p ? void 0 : p.sender) || void 0 === E ? void 0 : E.userId) && c.a.createElement(m.a, {
					onClick: Object(At.b)(() => {
						var e;
						const t = null === (e = null == p ? void 0 : p.sender) || void 0 === e ? void 0 : e.nickname;
						if (t) {
							const e = Object(O.viewProfileUrl)(t);
							Object(d.e)(e, "_blank")
						}
					}),
					className: Ht.a.UserPic,
					userId: null === (j = null == p ? void 0 : p.sender) || void 0 === j ? void 0 : j.userId,
					isFlipping: !0
				}), (null == p ? void 0 : p.createdAt) && c.a.createElement(Mt.a, {
					arrowProps: v.arrowProps,
					popperProps: v.popperProps,
					visible: v.visible,
					styled: !0,
					isCloseOnHover: !0,
					hide: v.hide
				}, c.a.createElement("span", {
					className: Ht.a.TimestampWrapper
				}, Object(Fe.d)(new Date(p.createdAt)))))
			});

			function en(e) {
				return "messageId" in e && "channelId" in e
			}

			function tn(e, t) {
				return !(e.messageData.type !== b.c.EMBED || !e.messageData.embed || t) || !(e.messageData.type !== b.c.POST && e.messageData.type !== b.c.USER_POST && e.messageData.type !== b.c.COMMENT && e.messageData.type !== b.c.SUBREDDIT || t)
			}
			t.a = e => {
				const {
					className: t,
					fromCurrentUser: n = !1,
					isChatEmbedded: d,
					isCurrentUserChannelMod: u,
					message: h,
					isLastCurrentUserMessage: m,
					inPreview: p,
					showUserPic: g,
					withButton: f
				} = e, O = Object(r.e)(e => Object(Bt.b)(e, h.messageData)), E = Object(r.e)(Ut.i), j = Object(l.b)(Object(Tt.a)(n)), v = Object(l.b)(Object(Tt.c)()), C = Object(l.b)(Object(Tt.d)(n)), I = Object(r.e)(e => Object(Ut.k)(e, h.channelId)), x = Object(r.e)(e => Object(Ut.j)(e)), [y, S] = Object(s.useState)(), w = Object(s.useRef)(y);
				Object(s.useEffect)(() => {
					w.current = y
				}, [y]);
				const k = I || !x;
				if (!h) return null;
				const {
					type: M,
					report: T,
					collapsedInvitePreview: A
				} = h.messageData, L = h.messageType === Gt && h.error && h.clientMessageId, D = M !== Zt && (M !== Xt || M === Xt && p), U = f && !L && !T, B = h.messageType === zt && U, F = ((e, t, n, s, r, o) => {
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
					}), f = c.a.createElement(P.a, {
						className: Ht.a.Text,
						value: b,
						highlighMentionGroupLinks: p
					});
					if (t && m.type !== Zt) return m.type === Xt ? a.fbt._("Sent a GIF", null, {
						hk: "1x1QrK"
					}) : m.type === Yt ? g : f;
					switch (m.type) {
						case Qt:
							const {
								embed: e
							} = m;
							return h !== Gt && e ? c.a.createElement(de, {
								name: e.name,
								title: e.title,
								thumbnailUrl: e.imageUrl,
								href: e.url,
								providerDisplay: e.providerDisplay,
								darkBackground: !n,
								faviconUrl: e.faviconUrl
							}) : f;
						case Vt:
						case Wt:
							return (null == s ? void 0 : s.type) !== Vt && (null == s ? void 0 : s.type) !== Wt || (null == s ? void 0 : s.removedByCategory) === Pt.b.Deleted ? f : c.a.createElement(ue.a, {
								darkBackground: !n,
								postUrl: b,
								highlights: p,
								richUnitData: s
							});
						case Kt:
							return s && (null == s ? void 0 : s.type) === Kt && !s.deletedAt ? c.a.createElement(re.a, {
								darkBackground: !n,
								commentUrl: b,
								highlights: p,
								richUnitData: s
							}) : f;
						case qt:
							return s && s.type === qt ? c.a.createElement(Ce, {
								darkBackground: !n,
								richUnitData: s
							}) : f;
						case Zt:
							return c.a.createElement("div", {
								className: Ht.a.Snoo
							}, c.a.createElement(Nt.a, {
								iconName: b
							}));
						case Xt: {
							const e = !r && (null === (i = m.gif) || void 0 === i ? void 0 : i.width) || 0,
								t = Math.min(258 / e, 1);
							return c.a.createElement(kt.a, {
								imageScale: t,
								source: b,
								title: null === (l = m.gif) || void 0 === l ? void 0 : l.title,
								height: null === (d = m.gif) || void 0 === d ? void 0 : d.height,
								width: null === (u = m.gif) || void 0 === u ? void 0 : u.width
							})
						}
						case Yt: {
							const e = m.clientMessageId;
							return o ? c.a.createElement($, {
								messageDataType: m.type,
								uploadId: e,
								uploadedImage: m.image,
								fromCurrentUser: n
							}) : g
						}
						default:
							return f
					}
				})(h, p, n, O, d, k), H = ((e, t, n, s, r, i, l, d) => c.a.createElement(Mt.a, {
					popperProps: e.popperProps,
					visible: e.visible,
					arrowProps: e.arrowProps,
					hide: e.hide
				}, c.a.createElement("div", {
					className: Object(o.a)(Ht.a.MenuWrapper, {
						[Ht.a.reverse]: i
					})
				}, s && c.a.createElement("button", {
					title: a.fbt._("Add reaction", null, {
						hk: "2HMtlm"
					}),
					onClick: () => {
						n.visible ? n.hide() : n.show()
					},
					className: Ht.a.ReactionsMenu
				}, c.a.createElement(Rt.a, {
					isFilled: !0
				})), r && !i ? c.a.createElement("button", {
					onClick: () => {
						t.visible ? t.hide() : t.show()
					},
					className: Ht.a.BubbleMenu,
					ref: t.target.ref
				}, c.a.createElement(Dt, {
					className: Object(o.a)(Ht.a.MenuOverflowVertical, {
						[Ht.a.active]: t.visible
					})
				})) : c.a.createElement(_, {
					className: Ht.a.ActionButtonGroup,
					message: d,
					fromCurrentUser: i,
					inPreview: l,
					isMod: r,
					channelId: d.channelId
				})), c.a.createElement(Mt.a, {
					arrowProps: t.arrowProps,
					popperProps: t.popperProps,
					visible: t.visible,
					hide: t.hide,
					isInstant: !0,
					styled: !0
				}, c.a.createElement(_, {
					className: Ht.a.ActionButtonGroup,
					message: d,
					fromCurrentUser: i,
					inPreview: l,
					isMod: r,
					channelId: d.channelId
				}))))(j, v, C, E, u, n, p, h);
				return c.a.createElement("span", {
					className: Object(o.a)(Ht.a.MessageItemBubble, t),
					onMouseEnter: () => {
						clearTimeout(Number(w.current)), j.show()
					},
					onMouseLeave: () => {
						j.hide(), v.hide(), clearTimeout(Number(w.current)), S(setTimeout(() => {
							C.hide()
						}, 1e3))
					}
				}, c.a.createElement($t, {
					ref: Object(i.a)(j.target.ref, C.target.ref),
					fromCurrentUser: n,
					inPreview: p,
					withButton: U,
					withBorder: D,
					message: h,
					disabled: !!L,
					showUserPic: g,
					isEmbedded: d,
					className: Object(o.a)(Ht.a.MessageBubble, (O || h.messageData.type === b.c.EMBED) && !p && {
						[Ht.a.richUnit]: tn(h, !d),
						[Ht.a.richUnitResponsive]: tn(h, d)
					})
				}, h.messageType === b.d.USER && c.a.createElement(Mt.a, {
					arrowProps: C.arrowProps,
					popperProps: C.popperProps,
					visible: C.visible,
					hide: C.hide,
					noArrow: !0
				}, c.a.createElement(wt, {
					message: h,
					onClick: () => {
						C.hide()
					}
				})), T && h.messageType === zt ? c.a.createElement(gt, {
					report: T,
					message: h
				}) : p && en(h) && function(e) {
					return Boolean(null == e ? void 0 : e.shouldCollapse)
				}(A) ? c.a.createElement(N, {
					channelId: h.channelId,
					messageId: h.messageId
				}) : F), B && H, m && c.a.createElement(Jt, null), p && en(h) && function(e) {
					return Boolean(!(null == e ? void 0 : e.shouldCollapse) && (null == e ? void 0 : e.shouldShowReportPrompt))
				}(A) && c.a.createElement(ce, {
					channelId: h.channelId,
					messageId: h.messageId
				}), L && c.a.createElement(R, {
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
				p = c.a.span("NameWrapper", u.a),
				b = c.a.span("Name", u.a),
				g = c.a.span("DetailsWrapper", u.a),
				f = c.a.span("Title", u.a),
				O = c.a.p("Description", u.a),
				E = e => s.a.createElement(h, {
					noUnderline: e.noUnderline,
					href: Object(l.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children),
				j = e => e.isEmbed ? (e => s.a.createElement(E, e, s.a.createElement(p, null, s.a.createElement(b, null, e.name)), s.a.createElement(g, null, s.a.createElement("span", null, s.a.createElement(f, null, e.title), s.a.createElement(O, null, e.description)))))(e) : (e => e.href ? s.a.createElement(E, e, e.children) : s.a.createElement(m, e, e.children))(e);
			var v = n("./src/chat/components/Message/LinkedText.m.less"),
				C = n.n(v);
			const _ = c.a.pre("MessageText", C.a),
				I = (e, t, n, a, c) => s.a.createElement(j, {
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
				return s.a.createElement(_, {
					tabIndex: 0,
					className: a
				}, r)
			}, "LinkedText", C.a)
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
			t.a = c.a.wrapped(({
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
				p = n("./src/lib/classNames/index.ts");
			const b = i.a.img("SubredditIcon", m.a),
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
					} = e, h = n ? `r/${n}` : "", b = l ? `u/${l}` : "", g = `u/${c||l}`;
					return r.a.createElement("div", {
						className: Object(p.a)(t, {
							[m.a.isSharedToChat]: u
						}),
						onClick: e => e.stopPropagation()
					}, r.a.createElement(o.a, {
						className: m.a.SubredditName,
						to: `/${h||b}`,
						target: s.d.BLANK,
						rel: s.c
					}, h || b), u && r.a.createElement("span", {
						className: m.a.HeaderDivider
					}, " • "), d ? r.a.createElement(o.a, {
						className: m.a.SubredditTitle,
						to: `/${h||b}`,
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
					className: Object(p.a)(t, {
						[m.a.isSharedToChat]: u
					})
				}, r.a.createElement(o.a, {
					to: `/${h||O}`,
					target: s.d.BLANK,
					rel: s.c,
					className: m.a.Link
				}, l ? r.a.createElement(b, {
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

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var b = e => c.a.createElement(o.a, p({}, e, {
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
				E = n.n(O);
			const j = () => c.a.createElement("div", {
					className: E.a.NSFWIndicator
				}, c.a.createElement(m, {
					className: E.a.NSFWIcon
				}), a.fbt._("nsfw", null, {
					hk: "6M6nL"
				})),
				v = () => c.a.createElement("div", {
					className: E.a.PrivateIndicator
				}, c.a.createElement(b, null), " ", a.fbt._("private", null, {
					hk: "3xzh8w"
				})),
				C = () => c.a.createElement("div", {
					className: E.a.RestrictedIndicator
				}, c.a.createElement(f, {
					className: E.a.RestrictedIcon
				}), a.fbt._("restricted", null, {
					hk: "2lC88Z"
				})),
				_ = () => c.a.createElement("div", {
					className: E.a.EmployeesOnlyIndicator
				}, c.a.createElement(l, {
					className: E.a.EmployeesOnlyIcon
				}), a.fbt._("employees only", null, {
					hk: "3uDhE6"
				})),
				I = ({
					subredditType: e,
					isNsfw: t
				}) => {
					return c.a.createElement("div", {
						className: E.a.SubredditTypeIndicator
					}, t ? c.a.createElement(j, null) : null, (e => {
						switch (e) {
							case "RESTRICTED":
								return c.a.createElement(C, null);
							case "EMPLOYEES_ONLY":
								return c.a.createElement(_, null);
							case "PRIVATE":
								return c.a.createElement(v, null);
							default:
								return null
						}
					})(e))
				},
				x = ({
					url: e,
					isSharedToChat: t
				}) => c.a.createElement("div", {
					className: Object(r.a)(E.a.ImageContainer, {
						[E.a.isSharedToChat]: t
					})
				}, c.a.createElement("img", {
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
			}) => c.a.createElement("div", {
				className: Object(r.a)(l, E.a.ImagePostRichUnit)
			}, c.a.createElement("div", {
				className: E.a.ImagePostRichUnitContent
			}, e && !i ? c.a.createElement(x, {
				url: e
			}) : null, o ? c.a.createElement(I, {
				isNsfw: a,
				subredditType: s
			}) : null, t ? c.a.createElement("div", {
				className: Object(r.a)(E.a.Title, {
					[E.a.isSharedToChat]: i
				})
			}, t) : null, n ? c.a.createElement(u, {
				className: E.a.GalleryIcon
			}) : null), e && i ? c.a.createElement(x, {
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
				p = n("./src/chat/selectors/unreadCounter.ts"),
				b = n("./src/chat/components/MinimizedPortalContainer/index.m.less"),
				g = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), {
				minimized: O
			} = u.b, E = o.a.wrapped(l.a, "HiddenCloseButton", g.a);
			E.displayName = "CloseButton";
			const j = o.a.wrapped(e => s.a.createElement("div", {
					onClick: e.onClick,
					className: e.className,
					style: {
						width: `${O.width}px`,
						height: `${O.height}px`
					}
				}, e.children), "Container", g.a),
				v = o.a.span("TitleWithCounter", g.a),
				C = Object(m.a)({
					unreadCount: p.c,
					hasNewMessages: p.b
				}),
				_ = Object(c.b)(C, e => ({
					close: () => e(Object(i.sizeChanged)(u.a.HIDDEN)),
					open: () => e(Object(i.sizeChanged)(u.a.EMBED))
				}));
			t.a = _(e => s.a.createElement(d.a, null, s.a.createElement(j, {
				key: e.unreadCount,
				className: Object(r.a)(e.className, {
					[g.a.unread]: e.unreadCount > 0
				}),
				onClick: e.open
			}, s.a.createElement(v, null, f._("Chat", null, {
				hk: "3ZWpRR"
			}), s.a.createElement(h.b, {
				count: e.unreadCount,
				isEmptyCounter: e.hasNewMessages && !e.unreadCount
			})), s.a.createElement(E, null))))
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
				scroller: "YjLnqfZg0dHuiTDoGknCl"
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
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/components/OverlayDirectsEmptySkeletonState/index.m.less"),
				i = n.n(o),
				l = n("./src/chat/components/OverlayNav/index.tsx"),
				d = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				u = n("./src/chat/controls/Overlay/index.tsx");
			const h = r.a.div("OverlayContent", i.a);
			t.a = () => c.a.createElement(u.a, null, c.a.createElement(l.a, {
				title: a.fbt._("Fetching messages", null, {
					hk: "2MERJq"
				})
			}), c.a.createElement(h, null, c.a.createElement(d.e, null)))
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
				easyAccess: "_1aemjzBo5Zm7OAgIaGEwJT",
				LinkIcon: "_19xKLCVee3HuYFdRa-D-Hw",
				linkIcon: "_19xKLCVee3HuYFdRa-D-Hw",
				SubTitle: "AxqaQ2FQrA19yH4bFOCfx",
				subTitle: "AxqaQ2FQrA19yH4bFOCfx",
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
				p = n("./node_modules/lodash/noop.js"),
				b = n.n(p),
				g = n("./src/lib/combineRefs/index.tsx"),
				f = n("./src/lib/hooks/useOnClickOutside.ts"),
				O = n("./src/lib/hooks/useTooltip.ts"),
				E = n("./src/chat/actions/channel.ts"),
				j = n("./src/chat/actions/channel/dropdown.ts"),
				v = n("./src/chat/actions/settingsDropdown/index.ts"),
				C = n("./src/chat/actions/theme.ts"),
				_ = n("./src/chat/actions/user/dropdown.ts"),
				I = n("./src/lib/lessComponent.tsx"),
				x = n("./src/chat/helpers/chatSelector.ts"),
				y = n("./src/chat/controls/Svg/index.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var w = e => s.a.createElement(y.a, S({}, e, {
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
				N = n("./src/chat/components/ThemeSwitcher/index.m.less"),
				k = n.n(N);
			const M = Object(x.a)({
					theme: e => e.user.prefs.globalTheme
				}),
				T = Object(c.b)(M, (e, t) => ({
					changeModeClicked: () => e(Object(C.themeToggle)())
				})),
				A = I.a.div("Wrapper", k.a);
			T(({
				changeModeClicked: e,
				theme: t
			}) => s.a.createElement(A, {
				onClick: e
			}, s.a.createElement(w, {
				active: !0
			})));
			var L = n("./src/chat/constants/channels.ts"),
				D = n("./src/chat/constants/dropdown.ts"),
				R = n("./src/chat/controls/Dropdown/Row.tsx"),
				P = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				U = n("./src/chat/controls/TooltipHooked/TooltipHooked.tsx");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var F = e => s.a.createElement(y.a, B({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, s.a.createElement("path", {
				d: "M12.5,10.875h-5A6.633,6.633,0,0,0,.875,17.5V18A1.127,1.127,0,0,0,2,19.125H18A1.127,1.127,0,0,0,19.125,18v-.5A6.633,6.633,0,0,0,12.5,10.875Zm5.375,7H2.125V17.5A5.381,5.381,0,0,1,7.5,12.125h5A5.381,5.381,0,0,1,17.875,17.5Z"
			}), s.a.createElement("path", {
				d: "M10,9.625A4.625,4.625,0,1,0,5.375,5,4.631,4.631,0,0,0,10,9.625ZM13.375,5a3.354,3.354,0,0,1-.59,1.9L8.1,2.215A3.371,3.371,0,0,1,13.375,5ZM7.215,3.1,11.9,7.785A3.371,3.371,0,0,1,7.215,3.1Z"
			})));
			var H = ({
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
				G = n("./src/chat/models/Theme/index.ts");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var V = e => {
					return s.a.createElement(y.a, z({}, e, {
						viewBox: "0 0 20 20"
					}), (() => {
						let e;
						const t = G.f[G.c.VANITY];
						return t && (e = s.a.createElement(H, {
							rotate: G.d,
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
				W = n("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				K = n("./src/chat/icons/svgs/Edit/index.tsx"),
				Z = n("./src/chat/icons/svgs/EnableNotifications/index.tsx"),
				q = n("./src/chat/icons/svgs/InviteMember/index.tsx"),
				Q = n("./src/chat/icons/svgs/Leave/index.tsx"),
				X = n("./src/chat/icons/svgs/Link/index.tsx"),
				Y = n("./src/chat/icons/svgs/Profile/index.tsx");

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var $ = e => {
					return s.a.createElement(y.a, J({}, e, {
						viewBox: "0 0 20 20"
					}), (() => {
						let e;
						const t = G.f[G.c.VANITY];
						return t && (e = s.a.createElement(H, {
							rotate: G.d,
							gradient: t,
							id: "settings-linear-gradient"
						})), s.a.createElement(s.a.Fragment, null, e, s.a.createElement("path", {
							d: "M10,6.875A3.125,3.125,0,1,0,13.125,10,3.129,3.129,0,0,0,10,6.875Zm0,5A1.875,1.875,0,1,1,11.875,10,1.877,1.877,0,0,1,10,11.875Z"
						}), s.a.createElement("path", {
							d: "M19.549,8.849a1.124,1.124,0,0,0-1.116-.974H17.4a.915.915,0,0,1-.828-.608.906.906,0,0,1,.163-1l.722-.723a1.127,1.127,0,0,0,.1-1.495,9.631,9.631,0,0,0-1.608-1.608,1.129,1.129,0,0,0-1.494.1l-.724.724a.92.92,0,0,1-1.018.155.906.906,0,0,1-.588-.82V1.567A1.123,1.123,0,0,0,11.151.451a8.782,8.782,0,0,0-2.3,0,1.123,1.123,0,0,0-.974,1.116V2.6a.915.915,0,0,1-.608.828.907.907,0,0,1-1-.163l-.723-.722a1.126,1.126,0,0,0-1.495-.1A9.631,9.631,0,0,0,2.443,4.051a1.127,1.127,0,0,0,.1,1.494l.724.724a.917.917,0,0,1,.155,1.018.906.906,0,0,1-.82.588H1.567a1.123,1.123,0,0,0-1.116.974,8.754,8.754,0,0,0,0,2.3,1.123,1.123,0,0,0,1.116.974H2.6a.915.915,0,0,1,.828.608.906.906,0,0,1-.163,1l-.722.723a1.127,1.127,0,0,0-.1,1.495,9.707,9.707,0,0,0,1.608,1.608,1.13,1.13,0,0,0,1.494-.1l.724-.724a.916.916,0,0,1,1.018-.155.906.906,0,0,1,.588.82v1.031a1.123,1.123,0,0,0,.974,1.116,8.754,8.754,0,0,0,2.3,0,1.123,1.123,0,0,0,.974-1.116V17.4a.915.915,0,0,1,.608-.828.906.906,0,0,1,1,.163l.724.724a1.132,1.132,0,0,0,1.494.1,9.707,9.707,0,0,0,1.608-1.608,1.127,1.127,0,0,0-.1-1.494l-.724-.724a.917.917,0,0,1-.155-1.018.906.906,0,0,1,.82-.588h1.031a1.123,1.123,0,0,0,1.116-.974,8.754,8.754,0,0,0,0-2.3Zm-1.226,2.026H17.4a2.224,2.224,0,0,0-1.549,3.741l.65.65A8.459,8.459,0,0,1,15.266,16.5l-.65-.65A2.224,2.224,0,0,0,10.875,17.4v.921a7.216,7.216,0,0,1-1.75,0V17.4A2.159,2.159,0,0,0,7.747,15.42a2.154,2.154,0,0,0-2.363.433l-.65.65A8.459,8.459,0,0,1,3.5,15.266l.65-.65A2.224,2.224,0,0,0,2.6,10.875H1.677a7.388,7.388,0,0,1,0-1.75H2.6A2.159,2.159,0,0,0,4.58,7.747a2.152,2.152,0,0,0-.433-2.363l-.65-.65A8.362,8.362,0,0,1,4.734,3.5l.65.65a2.162,2.162,0,0,0,2.382.425A2.15,2.15,0,0,0,9.125,2.6V1.677a7.216,7.216,0,0,1,1.75,0V2.6A2.159,2.159,0,0,0,12.253,4.58a2.158,2.158,0,0,0,2.363-.433l.65-.65A8.362,8.362,0,0,1,16.5,4.734l-.65.65a2.16,2.16,0,0,0-.425,2.382A2.15,2.15,0,0,0,17.4,9.125h.921a7.388,7.388,0,0,1,0,1.75Z"
						}))
					})())
				},
				ee = n("./src/chat/models/Channel/index.ts"),
				te = n("./src/chat/selectors/app.ts"),
				ne = n("./src/chat/selectors/channels.ts"),
				ae = n("./src/chat/selectors/experiments.ts"),
				se = n("./src/chat/selectors/settingsDropdown.ts"),
				ce = n("./src/chat/selectors/theme.ts"),
				re = n("./src/chat/selectors/user.ts"),
				oe = n("./src/chat/components/ChannelHeaderDropdown/index.m.less"),
				ie = n.n(oe);
			const le = e => {
					switch (e) {
						case D.b.AddToGroup:
							return {
								text: m.fbt._("Invite members", null, {
									hk: "ChZv0"
								}), icon: s.a.createElement(q.a, null)
							};
						case D.b.Block:
							return {
								text: m.fbt._("Block", null, {
									hk: "1s7OxS"
								}), icon: s.a.createElement(F, null)
							};
						case D.b.CopyInviteLink:
							return {
								text: m.fbt._("Copy Invite Link", null, {
									hk: "3zt0MJ"
								}), icon: s.a.createElement(X.a, null)
							};
						case D.b.ChangeTheme:
							return {
								text: m.fbt._("Change theme", null, {
									hk: "1J6Ajx"
								}), icon: s.a.createElement(V, null), className: "changeTheme"
							};
						case D.b.Leave:
							return {
								text: m.fbt._("Leave chat", null, {
									hk: "41t86n"
								}), icon: s.a.createElement(Q.a, null)
							};
						case D.b.LeaveGroup:
							return {
								text: m.fbt._("Leave group", null, {
									hk: "zStpq"
								}), icon: s.a.createElement(Q.a, null)
							};
						case D.b.ManageInviteLink:
							return {
								text: m.fbt._("Manage invite link", null, {
									hk: "3SBP09"
								}), icon: s.a.createElement($, null)
							};
						case D.b.MuteBadging:
							return {
								text: m.fbt._("Disable notification badging", null, {
									hk: "4BzTkp"
								}), icon: s.a.createElement(W.a, null)
							};
						case D.b.MuteNotifs:
							return {
								text: m.fbt._("Mute notifications", null, {
									hk: "O4LsY"
								}), icon: s.a.createElement(W.a, null)
							};
						case D.b.Profile:
							return {
								text: m.fbt._("View profile", null, {
									hk: "3i84FE"
								}), icon: s.a.createElement(Y.a, null)
							};
						case D.b.RenameGroup:
							return {
								text: m.fbt._("Rename group", null, {
									hk: "hTeQ"
								}), icon: s.a.createElement(K.a, null)
							};
						case D.b.UnmuteBadging:
							return {
								text: m.fbt._("Enable notification badging", null, {
									hk: "87Nfa"
								}), icon: s.a.createElement(Z.a, null)
							};
						case D.b.UnmuteNotifs:
							return {
								text: m.fbt._("Unmute notifications", null, {
									hk: "2TcEwL"
								}), icon: s.a.createElement(Z.a, null)
							};
						case D.b.ViewMembers:
							return {
								text: m.fbt._("View members", null, {
									hk: "PC84"
								}), icon: s.a.createElement(Y.a, null)
							};
						default:
							return {
								text: "Unknown item", icon: s.a.createElement("span", null)
							}
					}
				},
				de = Object(x.a)({
					currentUserId: re.a,
					channel: ne.h,
					isModerator: ne.a,
					isChannelBadgingMuted: ne.I,
					isChannelNotifsMuted: ne.K,
					isFullSize: te.h,
					isThemesEnabled: ae.u,
					showSparkles: ce.d,
					isQuickActionsEnabled: ae.q,
					isLinkSharingEnabledExperiment: ae.h
				});
			var ue = Object(c.b)(de, (e, t) => ({
					onInviteToChannel: () => {
						e(Object(j.c)()), e(Object(u.c)())
					},
					onInviteLinkSettings: () => {
						e(Object(v.e)(v.b.SESSION_LAST)), e(Object(j.b)(t.channelId))
					},
					onLeaveChannel: () => {
						e(Object(E.G)(t.channelId)), e(Object(u.H)())
					},
					onViewMembers: () => {
						e(Object(j.j)()), e(Object(u.jb)())
					},
					onBlockUser: t => e(Object(_.a)(t)),
					onChangeTheme: () => {
						e(Object(C.clickThemeSettings)()), e(Object(u.f)())
					},
					onViewProfile: t => {
						e(Object(j.k)(t)), e(Object(u.C)())
					},
					onOpenDropdown: t => e(Object(j.h)(t)),
					onMuteBadging: () => {
						e(Object(j.d)(t)), e(Object(u.L)())
					},
					onUnmuteBadging: () => {
						e(Object(j.f)(t)), e(Object(u.M)())
					},
					onMuteNotifs: () => {
						e(Object(j.e)(t.channelId)), e(Object(u.P)())
					},
					onUnmuteNotifs: () => {
						e(Object(j.g)(t.channelId)), e(Object(u.ab)())
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
						isModerator: p
					} = e, E = Object(c.d)(), j = Object(c.e)(se.a), C = Object(c.e)(se.b), _ = Object(c.e)(ae.c), I = Object(c.e)(ae.b), x = Object(O.b)(Object(P.e)()), y = Object(O.b)(Object(P.f)()), S = {
						...y.arrowProps,
						style: {
							...y.arrowProps.style,
							borderBottom: "5px solid var(--prompt-tooltip-background)"
						}
					}, w = Object(a.useMemo)(() => (null == t ? void 0 : t.type) === ee.b.Group, [t]), N = w && j && !C && (_ || I);
					Object(a.useEffect)(() => {
						w && setTimeout(() => {
							null == y || y.show()
						})
					}, [w]);
					Object(f.a)("OverlayNavTooltip--Default", x.hide);
					const k = a => {
							const {
								onInviteToChannel: s,
								onBlockUser: c,
								onChangeTheme: r,
								onLeaveChannel: o,
								toggleChannelNameInput: i,
								onViewMembers: l,
								onMuteBadging: d,
								onUnmuteBadging: u,
								onMuteNotifs: h,
								onUnmuteNotifs: m,
								showSidebar: p
							} = e;
							switch (x.hide(), a) {
								case D.b.AddToGroup:
									return s();
								case D.b.Block: {
									const e = (() => t && t.members.find(e => e.id !== n))();
									return e && c(e.id)
								}
								case D.b.ChangeTheme:
									return p(), r();
								case D.b.Leave:
								case D.b.LeaveGroup:
									return o();
								case D.b.Profile:
									return M();
								case D.b.RenameGroup:
									return i();
								case D.b.ViewMembers:
									return l();
								case D.b.ManageInviteLink:
									return B();
								case D.b.MuteBadging:
									return d();
								case D.b.UnmuteBadging:
									return u();
								case D.b.MuteNotifs:
									return h();
								case D.b.UnmuteNotifs:
									return m();
								default:
									return b.a
							}
						},
						M = () => {
							const {
								channel: t,
								currentUserId: n,
								onViewProfile: a,
								inviterName: s
							} = e;
							if (t && t.channelState === L.b.JOINED) {
								const e = t.members.find(e => e.id !== n);
								if (e && e.name) return a(e.name)
							}
							return s && a(s)
						},
						{
							isFullSize: T,
							showSparkles: A,
							onInviteLinkSettings: B
						} = e,
						F = (() => {
							if (t) switch (t.type) {
								case ee.b.Direct:
									return D.c.directChannel.filter(e => D.d.muteBadging(e, o, d) && D.d.unmuteBadging(e, o, d) && D.d.muteNotifs(e, i) && D.d.unmuteNotifs(e, i) && D.d.changeTheme(e, l));
								case ee.b.Group:
									return D.c.groupChannel.filter(e => D.d.muteBadging(e, o, d) && D.d.unmuteBadging(e, o, d) && D.d.muteNotifs(e, i) && D.d.unmuteNotifs(e, i) && D.d.changeTheme(e, l) && D.d.linkSettings(e, h && p))
							}
						})();
					return s.a.createElement(s.a.Fragment, null, !1, s.a.createElement("button", {
						tabIndex: 1,
						onClick: e => (e => {
							e.stopPropagation(), null == x || x.toggle(), E(Object(v.d)())
						})(e),
						ref: Object(g.a)(x.target.ref, y.target.ref),
						className: Object(r.a)(ie.a.DropdownTrigger, {
							[ie.a.isFullSize]: T
						}),
						title: m.fbt._("Settings", null, {
							hk: "4lO98u"
						})
					}, s.a.createElement($, {
						className: Object(r.a)(ie.a.Settings, {
							[ie.a.gradient]: A && l
						})
					})), N && s.a.createElement(U.default, {
						arrowProps: S,
						popperProps: y.popperProps,
						visible: y.visible,
						hide: y.hide,
						isInstant: !0,
						styled: !0
					}, s.a.createElement("button", {
						className: ie.a.Tooltip,
						onClick: () => {
							E(B()), E(Object(u.D)())
						}
					}, m.fbt._("You can invite others by sharing the chat URL", null, {
						hk: "4A6k9w"
					}))), s.a.createElement(U.default, {
						arrowProps: x.arrowProps,
						popperProps: x.popperProps,
						visible: x.visible,
						hide: x.hide,
						isInstant: !0,
						noArrow: !0,
						styled: !0
					}, s.a.createElement("div", {
						className: ie.a.OptionsContainer,
						id: "OverlayNavTooltip--Default"
					}, F && F.map((e, t) => s.a.createElement(R.a, {
						className: Object(r.a)(ie.a.DropdownRow, {
							[ie.a.gradient]: A && l && e === D.b.ChangeTheme
						}),
						key: t,
						displayText: le(e).text,
						onClick: () => {
							k(e)
						},
						isStepper: le(e).isStepper
					}, le(e).icon)))))
				}),
				he = n("./src/chat/components/CloseIcon/index.tsx"),
				me = n("./src/chat/constants/container.ts"),
				pe = n("./src/chat/controls/Button/index.tsx");

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ge = e => s.a.createElement(y.a, be({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M10,15.625a.623.623,0,0,1-.442-.183l-9-9,.884-.884L10,14.116l8.558-8.558.884.884-9,9A.623.623,0,0,1,10,15.625Z"
			}));

			function fe() {
				return (fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			ge.displayName = "NavMinimize";
			const Oe = e => s.a.createElement(y.a, fe({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M15.838,16.5a1.377,1.377,0,0,1-1.375,1.375h-11A1.377,1.377,0,0,1,2.088,16.5V5.5A1.377,1.377,0,0,1,3.463,4.125H7.11V2.875H3.463A2.629,2.629,0,0,0,.838,5.5v11a2.629,2.629,0,0,0,2.625,2.625h11A2.629,2.629,0,0,0,17.088,16.5V12.9h-1.25Z"
			}), s.a.createElement("path", {
				d: "M18.5.875h-5v1.25h3.491L8.558,10.558l.884.884,8.433-8.433V6.5h1.25v-5A.625.625,0,0,0,18.5.875Z"
			}));
			Oe.displayName = "NavPopout";
			var Ee = n("./src/chat/components/OverlayNavButtonGroup/index.m.less"),
				je = n.n(Ee);
			var ve = Object(c.b)(() => Object(x.a)({
					containerSize: e => e.container.size,
					inviterName: ne.H,
					isReady: te.j
				}), e => ({
					close: () => e(Object(o.sizeChanged)(me.a.HIDDEN)),
					minimize: () => {
						e(Object(o.sizeChanged)(me.a.MINIMIZED)), e(Object(u.v)())
					},
					popout: () => e(Object(o.popoutOpened)())
				}))(({
					channelId: e,
					containerSize: t,
					dropdownId: n,
					showMenu: a,
					inviterName: c,
					isReady: r,
					minimize: o,
					popout: i,
					toggleChannelNameInput: l
				}) => {
					const d = r && t === me.a.EMBED;
					return s.a.createElement("div", {
						className: je.a.Wrapper
					}, a && e && s.a.createElement(ue, {
						channelId: e,
						dropdownId: n,
						inviterName: c,
						toggleChannelNameInput: l
					}), d && s.a.createElement(s.a.Fragment, null, s.a.createElement(pe.d, {
						className: je.a.IconButton,
						onClick: i,
						title: m.fbt._("Open chat in new window", null, {
							hk: "3S8f7W"
						})
					}, s.a.createElement(Oe, null)), s.a.createElement(pe.d, {
						className: je.a.IconButton,
						onClick: o,
						title: m.fbt._("Minimize chat", null, {
							hk: "1gym9X"
						})
					}, s.a.createElement(ge, null)), s.a.createElement(he.a, {
						className: je.a.CloseButton
					})))
				}),
				Ce = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				_e = n("./src/chat/controls/Counter/index.tsx");
			var Ie = n("./src/chat/components/RenameGroupInput/index.m.less"),
				xe = n.n(Ie);
			const ye = I.a.wrapped(e => s.a.createElement("span", {
					className: Object(r.a)({
						[xe.a.visible]: e.isVisible
					}, e.className)
				}, e.children), "InputWrapper", xe.a),
				Se = I.a.div("InputContent", xe.a),
				we = I.a.span("InputControls", xe.a),
				Ne = I.a.wrapped(pe.a, "CancelButton", xe.a),
				ke = I.a.wrapped(pe.a, "SaveButton", xe.a),
				Me = Object(x.a)({
					isVisible: e => {
						return (e => e.renameGroupChat)(e).ivVisible
					}
				});
			class Te extends a.Component {
				constructor() {
					super(...arguments), this.displayName = "RenameGroupInput", this.state = {
						groupName: this.props.name || ""
					}, this.getAvailableCharacters = () => L.g - this.state.groupName.length, this.hideChannelNameInput = () => {}, this.handleChannelNameInput = e => this.setState({
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
					return s.a.createElement(ye, {
						isVisible: t
					}, s.a.createElement(Se, null, s.a.createElement(Ce.a, {
						className: xe.a.ChannelNameInput,
						handleChannelNameInput: a,
						placeholder: m.fbt._("Rename group", null, {
							hk: "1mjXbx"
						}),
						withBackground: !0,
						value: n
					}, s.a.createElement(_e.a, {
						count: r
					})), s.a.createElement(we, null, s.a.createElement(Ne, {
						secondaryNoBorder: !0,
						onClick: e
					}, m.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(ke, {
						noBorder: !0,
						disabled: r < 0 || r >= L.g,
						onClick: c
					}, m.fbt._("Save", null, {
						hk: "4yMsMq"
					})))))
				}
			}
			var Ae = Object(c.b)(Me, e => ({
					onUpdateChannelName: t => e(Object(j.i)(t)),
					saveRenamedGroup: () => e(Object(u.S)()),
					hideChannelNameInput: () => e(Object(l.b)({
						isVisible: !1
					}))
				}))(Te),
				Le = n("./src/chat/helpers/dom.ts"),
				De = n("./src/chat/icons/svgs/ArrowLeft/index.tsx"),
				Re = n("./src/chat/components/OverlayNav/index.m.less"),
				Pe = n.n(Re);
			const {
				fbt: Ue
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Be = ({
				userName: e,
				channelId: t,
				channelType: n
			}) => {
				const a = Object(c.e)(ae.a),
					o = Object(c.e)(ae.b),
					l = Object(c.e)(ne.a),
					d = a || o,
					h = Object(c.d)();
				return s.a.createElement("span", {
					onClick: Object(Le.b)(() => {
						d && n === ee.b.Group && (h(Object(i.e)(t)), h(Object(u.o)(i.b.EASY_ACCESS)))
					}),
					className: Object(r.a)(Pe.a.UserProfileTitle, {
						[Pe.a.easyAccess]: d && n === ee.b.Group
					})
				}, e, l && n === ee.b.Group ? s.a.createElement(s.a.Fragment, null, s.a.createElement("span", null, " • "), s.a.createElement("span", {
					className: Pe.a.HostLabel
				}, Ue._("Host", null, {
					hk: "1dh50y"
				}))) : null, d && n === ee.b.Group && s.a.createElement(X.a, {
					className: Pe.a.LinkIcon
				}))
			}, Fe = Object(x.a)({
				isEmbedded: te.g,
				iconMembers: (e, t) => Object(ne.t)(e, t.channelId),
				isFullSize: te.h
			}), He = Object(c.b)(Fe, e => ({
				minimize: () => {
					e(Object(o.sizeChanged)(me.a.MINIMIZED)), e(Object(u.v)())
				},
				toggleSidebar: () => e(Object(d.f)(!0)),
				clickRenameGroupTracking: () => e(Object(u.A)()),
				showRenameGroupChat: () => e(Object(l.b)({
					isVisible: !0
				}))
			}));
			class Ge extends a.Component {
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
							toggleSidebar: p,
							showMembers: b,
							isFullSize: g
						},
						showChannelNameInput: f
					} = this;
					return s.a.createElement("nav", {
						className: Object(r.a)(Pe.a.Nav, {
							[Pe.a.isFullSize]: g
						}, n)
					}, s.a.createElement(pe.d, {
						onClick: p,
						className: Object(r.a)(Pe.a.IconButton, {
							[Pe.a.isFullSize]: g
						})
					}, s.a.createElement(De.a, {
						className: Pe.a.ArrowLeft
					})), s.a.createElement("span", {
						onClick: c ? Object(Le.b)(o) : void 0,
						className: Object(r.a)(Pe.a.TitleWrapper, {
							[Pe.a.embed]: c
						})
					}, b && m && m.firstUser && s.a.createElement(h.a, {
						className: Object(r.a)(Pe.a.ChatIcon, {
							[Pe.a.isFullSize]: g
						}),
						userId: m.firstUser.id,
						secondUserId: null === (e = m.secondUser) || void 0 === e ? void 0 : e.id
					}), t && void 0 !== u ? s.a.createElement(Be, {
						userName: d,
						channelId: t,
						channelType: u
					}) : s.a.createElement("span", {
						className: Pe.a.Title
					}, d), s.a.createElement("span", {
						className: Pe.a.SubTitle
					}, l)), s.a.createElement(ve, {
						channelId: t,
						toggleChannelNameInput: f,
						showMenu: !!i,
						dropdownId: a
					}), t && d && s.a.createElement(Ae, {
						channelId: t,
						name: d
					}))
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
				return _
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
				p = n("./src/chat/components/OverlayDirectsEmptySkeletonState/index.tsx"),
				b = n("./src/chat/components/Sidebar/index.tsx"),
				g = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				f = n("./src/chat/constants/container.ts"),
				O = (n("./src/chat/helpers/urls/index.ts"), n("./src/chat/selectors/app.ts")),
				E = n("./src/chat/selectors/inviteLink.ts"),
				j = n("./src/chat/selectors/platform.ts");
			var v = ({
					children: e
				}) => {
					const t = Object(i.d)(),
						n = Object(i.e)(O.i),
						a = Object(i.e)(O.f),
						c = Object(i.e)(j.g),
						r = Object(i.e)(j.i),
						v = Object(i.e)(j.h),
						C = Object(i.e)(j.e),
						_ = Object(i.e)(E.f),
						I = n || _;
					return _ && (v ? t(Object(h.c)()) : c ? t(Object(h.d)()) : r && C && t(Object(m.d)(C)), t(Object(u.sizeChanged)(f.a.EMBED)), Object(l.b)() && Object(d.e)(o.a.redditUrl)), I ? null : a ? e : s.a.createElement(s.a.Fragment, null, s.a.createElement(b.a, null, s.a.createElement("span", {
						style: {
							paddingTop: "45px",
							background: "var(--layout-body)"
						}
					}, s.a.createElement(g.d, null))), s.a.createElement(p.a, null))
				},
				C = n("./src/chat/components/ThemeProvider/index.tsx");

			function _(e, t) {
				return s.a.createElement(C.a, {
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
		"./src/chat/components/Scroller/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
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
				className: Object(r.a)(m.a.Divider, t)
			}, e);
			var b = n("./src/chat/controls/TextButton.tsx"),
				g = n("./src/chat/reducers/sidebar/sideBarAppearance/index.ts"),
				f = n("./src/chat/selectors/channels.ts"),
				O = n("./src/chat/selectors/unreadCounter.ts"),
				E = n("./src/chat/components/BasicInvited/index.m.less"),
				j = n.n(E);
			var v = () => {
					const e = Object(c.d)(),
						t = Object(c.e)(f.d),
						n = Object(c.e)(f.F),
						r = Object(c.e)(f.b),
						h = Object(c.e)(O.a),
						m = Object(a.useCallback)(() => {
							n && !r && e(Object(i.D)({
								recursively: !0
							})), e(Object(l.e)(g.a.INVITED_CHANNELS)), e(Object(d.e)())
						}, [e, n, r]),
						E = t.slice(0, 2);
					return t && t.length ? s.a.createElement("div", {
						className: j.a.BasicInvited
					}, s.a.createElement(p, {
						className: j.a.SidebarDivider
					}, o.fbt._("Invites", null, {
						hk: "1NWeVa"
					}), h > 2 ? s.a.createElement(b.a, {
						onClick: m
					}, o.fbt._("See all", null, {
						hk: "mkJIj"
					}), " (", h, ")") : null), s.a.createElement(u.a, {
						channels: Object.values(E)
					})) : null
				},
				C = n("./src/lib/lessComponent.tsx"),
				_ = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				I = n("./src/chat/helpers/chatSelector.ts"),
				x = n("./src/chat/selectors/user.ts"),
				y = n("./src/chat/components/BasicJoined/index.m.less"),
				S = n.n(y);
			const w = C.a.p("Text", S.a),
				N = Object(I.a)({
					currentUserId: x.a,
					fetchingJoinedChannels: f.c,
					hasMoreJoinedChannels: f.G,
					joinedChannels: f.e,
					selectedChannelId: e => Object(f.B)(e, "channelId"),
					hasInvitedChannels: f.E
				});
			var k = Object(c.b)(N)(e => {
					const {
						className: t,
						fetchingJoinedChannels: n,
						joinedChannels: a,
						hasInvitedChannels: c
					} = e;
					return s.a.createElement("div", {
						className: t
					}, c && s.a.createElement(p, null, o.fbt._("Chats", null, {
						hk: "Bzl0R"
					})), (!a || !a.length) && s.a.createElement(w, null, o.fbt._("All the direct chats that you're in will show up here", null, {
						hk: "4A1UXC"
					})), s.a.createElement(u.a, {
						channels: a
					}), n && s.a.createElement(_.d, null))
				}),
				M = n("./src/chat/components/Scroller/index.tsx"),
				T = n("./node_modules/react-router-redux/es/index.js"),
				A = n("./src/chat/helpers/urls/index.ts"),
				L = n("./src/chat/icons/svgs/ChatNew/index.tsx"),
				D = n("./src/chat/components/Sidebar/CreateChannel/index.m.less"),
				R = n.n(D);
			var P = () => {
					const e = Object(c.d)();
					return s.a.createElement("button", {
						className: R.a.Button,
						onClick: () => {
							const t = Object(A.getRedirectURL)(Object(A.channelUrl)("create"));
							e(Object(T.b)(t)), e(Object(d.l)())
						},
						title: o.fbt._("Start a new chat", null, {
							hk: "3C4ek3"
						}),
						tabIndex: 0
					}, s.a.createElement(L.a, {
						className: R.a.ChatNew,
						isFilled: !0
					}))
				},
				U = n("./src/chat/controls/ChannelsFilter/index.tsx"),
				B = n("./src/chat/controls/Counter/index.tsx"),
				F = n("./src/chat/selectors/experiments.ts"),
				H = n("./src/chat/components/Sidebar/ChannelsPanel/index.m.less"),
				G = n.n(H);
			var z = () => {
					const e = Object(c.d)(),
						t = Object(c.e)(f.c),
						n = Object(c.e)(f.G),
						a = Object(c.e)(O.c),
						r = Object(c.e)(O.b),
						l = Object(c.e)(F.e);
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: G.a.Header
					}, s.a.createElement("span", {
						className: G.a.HeaderMessage
					}, o.fbt._("Chat", null, {
						hk: "2by6VV"
					})), s.a.createElement(B.b, {
						count: a,
						isEmptyCounter: r && !a
					}), s.a.createElement("div", {
						className: G.a.CreateChannelWrapper
					}, s.a.createElement(P, null))), l && s.a.createElement(U.a, null), s.a.createElement(M.b, {
						loadMoreRows: () => {
							!t && n && e(Object(i.E)())
						},
						isLoadMoreRowsComplete: () => !!t || !n
					}, s.a.createElement("div", {
						className: G.a.Body
					}, s.a.createElement(v, null), s.a.createElement(k, null))))
				},
				V = n("./src/higherOrderComponents/makeAsync.tsx"),
				W = n("./src/lib/loadWithRetries/index.ts");
			const K = () => null;
			var Z = Object(V.a)({
				ErrorComponent: K,
				getComponent: () => Object(W.a)(() => n.e("InvitedChannelsPanel").then(n.bind(null, "./src/chat/components/Sidebar/InvitedChannelsPanel/index.tsx"))).then(e => e.default),
				LoadingComponent: K
			});
			const q = () => null;
			var Q = Object(V.a)({
					ErrorComponent: q,
					getComponent: () => Object(W.a)(() => n.e("ThemePanel").then(n.bind(null, "./src/chat/components/Sidebar/ThemePanel/index.tsx"))).then(e => e.default),
					LoadingComponent: q
				}),
				X = n("./src/chat/selectors/app.ts"),
				Y = n("./src/chat/selectors/sidebar.ts"),
				J = n("./src/chat/components/Sidebar/index.m.less"),
				$ = n.n(J);
			const ee = ({
					children: e
				}) => {
					const t = Object(c.e)(Y.b),
						n = Object(c.e)(X.h),
						a = Object(c.e)(X.d);
					return s.a.createElement("div", {
						className: Object(r.a)($.a.Wrapper, {
							[$.a.hidden]: !t,
							[$.a.embed]: a,
							[$.a.isFullSize]: null == n || n
						})
					}, e)
				},
				te = s.a.memo((function(e) {
					const t = Object(c.e)(Y.a);
					return s.a.createElement(ee, e, (() => t === g.a.CHANNELS ? s.a.createElement(z, null) : t === g.a.THEMES ? s.a.createElement(Q, null) : t === g.a.INVITED_CHANNELS ? s.a.createElement(Z, null) : void 0)())
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
				return p
			})), n.d(t, "c", (function() {
				return b
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
					height: e,
					width: t
				}) => o.a.createElement("div", {
					className: d.a.mediaPlaceholder,
					style: {
						height: `${e}px`,
						width: `${t}px`
					}
				}),
				g = e => o.a.createElement("div", {
					className: d.a.GifSkeletonPlaceholderWrapper
				}, e === c.FIRST ? o.a.createElement(o.a.Fragment, null, o.a.createElement(b, {
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
		"./src/chat/components/UserMetaInfo/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				c = n.n(s),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/chat/components/UserMetaInfo/index.m.less"),
				l = n.n(i);
			t.a = ({
				contact: e
			}) => c.a.createElement("div", {
				className: l.a.UserMetaInfo
			}, ((e, t) => {
				const n = (new Date).getTime(),
					s = Math.round(Math.abs((e - n) / r.B)),
					c = Math.round(Math.abs((e - n) / r.oc));
				let i = "";
				const l = `${s}${a.fbt._("d",null,{hk:"1d5Wxl"})}`,
					d = `${c}${a.fbt._("y",null,{hk:"3DaEfY"})}`;
				return i = c < 1 ? `${l}` : `${d}`, `${`${Object(o.b)(t||0)} ${a.fbt._("karma",null,{hk:"4cmcG"})}`} • ${a.fbt._("redditor for {amount of time}",[a.fbt._param("amount of time",i)],{hk:"3o8EdY"})}`
			})(e.created, e.totalKarma))
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
					return E
				})), n.d(t, "d", (function() {
					return j
				})), n.d(t, "a", (function() {
					return v
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
				UnmuteBadging: p,
				UnmuteNotifs: b,
				ViewMembers: g,
				ChangeTheme: f
			} = a, O = [d, p, u, b], E = {
				directChannel: [h, f, c, ...O, o],
				groupChannel: [g, s, l, m, f, ...O, i],
				members: [c, r]
			}, j = {
				muteBadging: (e, t, n) => !(e === d && (n || t)),
				unmuteBadging: (e, t, n) => !(e === p && (n || !t)),
				muteNotifs: (e, t) => !(e === u && t),
				unmuteNotifs: (e, t) => !(e === b && !t),
				changeTheme: (e, t) => !(e === f && !t),
				linkSettings: (e, t) => !(e === l && !t)
			}, v = "dropdown-container"
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
				return _
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "b", (function() {
				return S
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
				})),
				p = n("./src/chat/icons/svgs/Trash/index.tsx"),
				b = n("./src/chat/controls/Button/index.m.less"),
				g = n.n(b),
				f = n("./src/chat/helpers/dom.ts");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const E = o.a.a("Button", g.a),
				j = o.a.button("Button", g.a),
				v = o.a.button("MessageIconButton", g.a),
				C = e => {
					const t = Object(r.a)({
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
				_ = o.a.wrapped(C, "IconButton", g.a),
				I = e => c.a.createElement(v, O({}, e, {
					title: a.fbt._("Report message", null, {
						hk: "2XKeNq"
					})
				}), c.a.createElement(u, null)),
				x = e => c.a.createElement(v, O({}, e, {
					title: a.fbt._("Delete message", null, {
						hk: "Z4Zm0"
					})
				}), c.a.createElement(p.a, null)),
				y = e => c.a.createElement(v, O({}, e, {
					title: a.fbt._("Kick user", null, {
						hk: "5PnyH"
					})
				}), c.a.createElement(m, null)),
				S = ({
					className: e,
					children: t,
					onClick: n,
					text: a
				}) => c.a.createElement("button", {
					className: Object(r.a)(g.a.CircleIconButtonWrapper, e, {
						[g.a.isActionButton]: !!n
					}),
					onClick: Object(f.b)(n)
				}, c.a.createElement("span", {
					className: g.a.CircleIconButton
				}, t), a && c.a.createElement("span", {
					className: g.a.IconLabel
				}, a))
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
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/chat/actions/channelsFilter/index.ts"),
				i = n("./src/chat/actions/tracking.ts"),
				l = n("./src/chat/controls/Button/index.tsx"),
				d = n("./src/chat/models/Channel/index.ts"),
				u = n("./src/chat/selectors/channelsFilter.ts"),
				h = n("./src/chat/controls/ChannelsFilter/index.m.less"),
				m = n.n(h);
			t.a = () => {
				const e = Object(c.d)(),
					t = Object(c.e)(u.a),
					n = Object(a.useCallback)(t => {
						e(Object(o.d)({
							filter: t
						})), e(Object(i.F)(Object(d.i)(t)))
					}, [e]);
				return s.a.createElement("div", {
					className: m.a.ChannelsFilter
				}, Object.values(d.c).map(e => s.a.createElement(l.a, {
					key: e,
					onClick: () => n(e),
					className: Object(r.a)(m.a.ChannelsFilterItem, {
						[m.a.selected]: t === e
					})
				}, d.d[e]())))
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
					r: "9"
				}), "StyledCircle", l.a),
				h = r.a.wrapped(e => s.a.createElement("path", {
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
			const f = r.a.wrapped(e => s.a.createElement("circle", {
				className: e.className,
				cy: "10",
				cx: "10",
				r: "8"
			}), "StyledCircle", b.a);
			var O = e => s.a.createElement(o.a, g({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("g", null, s.a.createElement(f, null))),
				E = n("./src/chat/controls/Checkbox/index.m.less"),
				j = n.n(E);
			const v = r.a.input("HiddenInput", j.a),
				C = r.a.wrapped(m, "Checked", j.a),
				_ = r.a.wrapped(O, "Unchecked", j.a),
				I = r.a.span("Wrapper", j.a),
				x = r.a.span("Content", j.a),
				y = r.a.span("Control", j.a),
				S = r.a.label("CheckInput", j.a);
			t.a = e => s.a.createElement(S, {
				className: Object(c.a)(e.className, {
					[j.a.checked]: e.checked
				}),
				style: {
					height: e.height || void 0,
					width: e.width || void 0
				}
			}, s.a.createElement(I, null, e.children && !e.rightPosition && s.a.createElement(x, null, e.children), s.a.createElement(y, null, s.a.createElement(v, {
				tabIndex: 0,
				type: e.type || "checkbox",
				checked: e.checked,
				disabled: e.disabled,
				name: e.name,
				value: e.value,
				onChange: e.onChange,
				id: e.id
			}), s.a.createElement(C, null), s.a.createElement(_, null)), e.children && e.rightPosition && s.a.createElement(x, null, e.children)))
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
			const i = ({
					count: e
				}) => e ? s.a.createElement("span", {
					className: Object(c.a)(o.a.Counter, {
						[o.a.count]: e < 0
					})
				}, e) : null,
				l = ({
					count: e,
					isEmptyCounter: t
				}) => e || t ? s.a.createElement("span", {
					className: Object(c.a)(o.a.UnreadCounter, {
						[o.a.isEmpty]: t
					})
				}, e > 0 && (e < 100 ? e : "99+")) : null
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
			const l = c.a.img("Image", i.a),
				d = c.a.wrapped(({
					className: e,
					source: t,
					onClick: n,
					imageScale: c,
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
							height: o ? `${+i*(c||.7)}px` : "auto",
							maxHeight: "200px"
						}
					}) : s.a.createElement(r.c, {
						height: o ? +i * (c || .7) : 200
					}))
				}, "Gif", i.a);
			t.a = d
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
				c = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				i = n("./src/config.ts"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/chat/controls/Button/index.tsx"),
				u = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				h = n.n(u),
				m = n("./src/chat/helpers/dom.ts");
			const p = Object(r.b)(void 0, e => ({
				onSubmit: () => {},
				onCancel: Object(m.b)(() => e(Object(o.a)()))
			}))(e => c.a.createElement("div", {
				className: Object(l.a)({
					[h.a.primary]: e.primaryButtonOnly,
					[h.a.NoHeaderText]: !e.children
				}, h.a.OverlayControlBar, e.className)
			}, e.children && c.a.createElement("span", {
				className: h.a.HeaderText
			}, e.children), c.a.createElement("div", {
				className: h.a.ButtonsWrapper
			}, e.primaryButtonBlock && c.a.createElement(d.a, {
				onClick: e.primaryButtonBlockAction || e.onCancel,
				className: Object(l.a)(h.a.Button, h.a.NoBorderPrimaryButton),
				secondary: !0,
				noBorder: !0
			}, e.primaryButtonBlockText || a.fbt._("Block", null, {
				hk: "4CA4VX"
			})), !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? c.a.createElement(d.a, {
				className: h.a.Button,
				href: `${i.a.redditHelpUrl}/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting`,
				secondary: !0
			}, a.fbt._("Other Options", null, {
				hk: "1RadlV"
			})) : c.a.createElement(d.a, {
				className: h.a.Button,
				onClick: e.secondaryButtonAction || e.onCancel,
				primary: !!e.secondaryButtonOnly,
				secondary: !e.secondaryButtonOnly
			}, e.secondaryButtonText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			}))), !e.secondaryButtonOnly && c.a.createElement(d.a, {
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
				c = n("./src/lib/lessComponent.tsx"),
				r = n("./src/chat/controls/OverlayHeader/index.m.less"),
				o = n.n(r);
			const i = c.a.header("Header", o.a),
				l = c.a.h1("Title", o.a),
				d = c.a.span("Normal", o.a),
				u = c.a.span("Warning", o.a);
			t.a = ({
				message: e,
				title: t,
				warning: n
			}) => {
				const a = n ? u : d;
				return s.a.createElement(i, null, s.a.createElement(l, null, t), s.a.createElement(a, null, e))
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
				c = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/chat/controls/Title/index.m.less"),
				i = n.n(o);
			const l = r.a.wrapped(({
				bold: e,
				children: t,
				className: n
			}) => s.a.createElement("h4", {
				className: Object(c.a)({
					[i.a.bold]: e
				}, n)
			}, t), "Title", i.a)
		},
		"./src/chat/controls/TooltipHooked/TooltipConfig.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return s
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
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
				o = (e = 100) => ({
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
			t.default = s.a.memo((function({
				visible: e,
				...t
			}) {
				const [n, r] = Object(a.useState)(e);
				return Object(a.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, r(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), r(!1)
					}
				}, [e]), e ? t.styled ? s.a.createElement("div", i({
					className: Object(c.a)(o.a.tooltip, {
						[o.a.visible]: n || t.isInstant
					})
				}, t.popperProps, {
					onMouseEnter: () => t.isCloseOnHover && t.hide()
				}), t.children, n && !t.noArrow && s.a.createElement("div", i({
					className: o.a.arrow
				}, t.arrowProps))) : s.a.createElement("div", {
					...t.popperProps,
					style: {
						...t.popperProps.style,
						zIndex: 1
					}
				}, t.children) : null
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
			var p = n("./src/chat/helpers/urls/index.ts"),
				b = n("./src/chat/tracking/sendEvent.ts"),
				g = n("./src/telemetry/models/Event.ts"),
				f = n("./src/chat/tracking/fields/chat.ts"),
				O = n("./src/chat/tracking/fields/common.ts");
			var E;
			! function(e) {
				e.Navigate = "navigate.chat", e.Websocket = "websocket.chat", e.Expand = "expand.chat", e.UnreadCount = "unreadCount.chat"
			}(E || (E = {}));
			const j = e => t => {
					const n = (e => {
						try {
							return "object" == typeof e.data ? e.data : JSON.parse(e.data)
						} catch (t) {
							return
						}
					})(t);
					if (n) switch (n.type) {
						case E.Navigate: {
							const t = Object(r.parse)(n.data.href).pathname || p.rootUrl,
								a = Object(p.getRedirectURL)(t);
							e.dispatch(Object(c.b)(a)), e.dispatch(Object(d.sizeChanged)(h.a.EMBED));
							break
						}
						case E.Websocket:
							e.dispatch(Object(u.c)());
							break;
						case E.Expand: {
							const t = e.getState();
							e.dispatch(Object(d.sizeChanged)(h.a.EMBED));
							const a = t.platform.currentPage;
							a && a.meta && a.meta.name === o.Mb.CHAT_MINIMIZE && e.dispatch(Object(l.M)());
							const {
								action: s,
								noun: c,
								source: r
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
							})(t, c, r, s);
							break
						}
					}
				},
				v = s()(e => {
					window.addEventListener("message", j(e)), window.navigator.serviceWorker.addEventListener("message", j(e))
				});
			t.a = e => "undefined" == typeof window ? m.a : (window.addEventListener("load", () => {
				v(e)
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
				c = n("./src/chat/actions/sidebar.ts"),
				r = n("./src/chat/customMiddleware/noop.ts");
			let o;
			const i = e => {
				const t = e.user.account && e.user.account.id;
				return o = Object(a.c)(s.q.CHAT, s.y.CHAT_LAST_SELECTED_CHANNEL_ID_KEY, t || "unknown"), Object(a.b)(o)
			};
			t.a = e => {
				if ("undefined" == typeof window) return r.a;
				const t = e.getState(),
					{
						user: {
							account: n
						}
					} = t,
					i = n && n.id || "unknown";
				return o = Object(a.c)(s.q.CHAT, s.y.CHAT_LAST_SELECTED_CHANNEL_ID_KEY, i), e => t => {
					const n = e(t);
					switch (t.type) {
						case c.a:
							Object(a.d)(o, t.payload, s.pb)
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
				c = n("./src/chat/actions/theme.ts"),
				r = n("./node_modules/Base64/base64.js"),
				o = n("./node_modules/icepick/icepick.js"),
				i = n("./node_modules/js-cookie/src/js.cookie.js"),
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
				l = n("./src/chat/actions/messageReactions/index.ts"),
				d = n("./src/chat/actions/platform.ts"),
				u = n("./src/chat/actions/sendbird/index.ts"),
				h = n("./src/chat/actions/sendbird/config.ts"),
				m = n("./src/chat/actions/sendbird/sdk.ts"),
				p = n("./src/chat/actions/session.ts"),
				b = n("./src/chat/constants/container.ts"),
				g = n("./src/chat/constants/sendbird.ts"),
				f = n("./src/chat/customMiddleware/noop.ts"),
				O = n("./src/chat/selectors/experiments.ts"),
				E = n("./src/chat/selectors/inviteLink.ts"),
				j = n("./src/chat/selectors/platform.ts"),
				v = n("./src/chat/selectors/sendbird.ts");
			const C = (e, t) => {
				const n = t && t.type === o.SIZE_CHANGED ? t.payload : e.container.size,
					a = n === b.a.MINIMIZED || n === b.a.HIDDEN,
					s = t && t.type === d.a ? t.payload && t.payload.routeMatch && t.payload.routeMatch.route.meta.name === c.Mb.CHAT_MINIMIZE : e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name === c.Mb.CHAT_MINIMIZE;
				return !a && s
			};
			t.a = e => {
				if ("undefined" == typeof window) return f.a;
				let t;
				const n = () => {
					const n = e.getState();
					if (Object(E.f)(n)) return;
					const {
						session: a
					} = n.sendbird;
					a.expires && a.active ? (n => {
						const a = new Date,
							s = new Date(n.expires || 0),
							c = Math.floor(.9 * (s.getTime() - a.getTime()));
						t = setTimeout(() => {
							e.dispatch(Object(u.k)())
						}, c)
					})(a) : s()(() => e.dispatch(Object(u.k)()))
				};
				let a;
				Object(j.a)(e.getState()) === c.Mb.CHAT_MINIMIZE ? s()(async () => {
					C(e.getState()) ? n() : (await e.dispatch(Object(u.k)(!1)), e.getState().sendbird.session.token && await e.dispatch(Object(i.c)()))
				}) : n();
				return i => f => {
					const j = e.getState(),
						_ = Object(O.g)(j),
						I = Object(E.f)(j),
						x = Object(v.a)(j) === g.b.Closed,
						y = Object(v.f)(j);
					switch (f.type) {
						case o.SIZE_CHANGED: {
							if (!f.payload) break;
							const t = f.payload !== b.a.MINIMIZED && f.payload !== b.a.HIDDEN;
							t && (clearTimeout(a), a = null), x && t && !y && n(), !y || f.payload !== b.a.HIDDEN && f.payload !== b.a.MINIMIZED || (a = setTimeout(() => {
								e.dispatch(Object(m.f)())
							}, 10 * c.kb));
							break
						}
						case d.a: {
							const t = C(j, f);
							x && t ? n() : t && e.dispatch(Object(r.M)());
							break
						}
						case u.g:
							if (I && _) break;
							if (!f.payload) break;
							if (!f.payload.active) break;
							s()(async () => {
								if (await e.dispatch(Object(l.a)()), await e.dispatch(Object(h.e)()), f.payload && f.payload.token) {
									const {
										token: t
									} = f.payload;
									await e.dispatch(Object(m.e)(t))
								}
							});
							break;
						case p.b:
							e.dispatch(Object(m.f)()), clearTimeout(t), clearTimeout(a), t = null, a = null
					}
					return i(f)
				}
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
			const l = 5 * c.kb;
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
			var j = n("./src/chat/tracking/events/chatView.ts"),
				v = n("./src/chat/tracking/events/contactsList.ts"),
				C = n("./src/chat/tracking/events/invitationInbox.ts"),
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
				x = s()(e => Object(h.e)(e) && y(e)),
				y = e => {
					Object(_.d)(e)
				},
				S = Object(c.c)((e, t, n) => {
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
					Object(h.d)(e) === d.a.CREATE && Object(v.g)(e)
				},
				N = e => {
					Object(h.d)(e) === d.a.VIEW_JOIN && (e => {
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
					c = t.getState();
				switch (a.type) {
					case i.a:
						I(c, e), w(c);
						break;
					case r.q:
						S(c, !0);
						break;
					case r.s:
						w(c), x(c);
						break;
					case r.r:
						I(c, e), (e => {
							Object(h.d)(e) === d.a.VIEW_INVITE && Object(C.k)(e)
						})(c), (e => Object(h.f)(e) && Object(j.o)(e))(c), S(c), N(c);
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
				Object(o.d)(l, e, 5 * i.kb)
			}, 5 * i.Rb, {
				leading: !1,
				trailing: !0
			});
			let h;
			const m = () => {
				h && clearInterval(h), h = setInterval(() => {
					void 0 === Object(o.b)(l) && Object(c.c)()
				}, 5 * i.kb)
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
				l = Object(o.c)(i.q.CHAT, i.y.CHAT_UNREAD_MESSAGE_COUNT_KEY, s), u(a.unreadMessages), m();
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
				method: a.jb.GET,
				data: {
					raw_json: 1
				}
			}), r = async (e, t) => Object(s.a)(e, {
				data: {
					account_id: t,
					raw_json: 1
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: a.jb.POST
			}), o = async (e, t) => Object(s.a)(e, {
				endpoint: `${e.apiUrl}/user/${t}/about`,
				method: a.jb.GET,
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
				c = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/redditGQL/operations/ExperimentVariantsShort.json"),
				o = n("./src/redditGQL/operations/RedditorsInfoByIds.json"),
				i = n("./src/chat/models/Message/report.ts");
			const l = e => {
					var t;
					return Boolean(null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.redditorsInfoByIds)
				},
				d = (e, t) => Object(s.a)(e, {
					method: a.jb.POST,
					endpoint: `${e.apiUrl}/api/report_user`,
					data: {
						reason: t.reason,
						user: t.userNickname
					}
				}),
				u = (e, t, n) => {
					const c = Object(i.c)(t, n);
					return Object(s.a)(e, {
						method: a.jb.POST,
						endpoint: `${e.apiUrl}/api/report_user`,
						data: {
							details: JSON.stringify(c),
							reason: t.reason,
							user: t.userNickname
						}
					})
				},
				h = e => Object(s.a)(e, {
					method: a.jb.GET,
					endpoint: `${e.apiUrl}/prefs/blocked.json`
				}),
				m = e => Object(c.a)(e, {
					...r
				}),
				p = (e, t) => Object(c.a)(e, {
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
					return t.forEach(({
						index: t,
						lastIndex: c,
						text: r,
						url: o,
						schema: i
					}) => {
						const l = "mailto:" === i ? "_self" : "_blank";
						a.push(e.substring(s, t)), a.push(n(o, r, l, i, `link-${t}-${r}`)), s = c
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
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const c = (new Date).setHours(0, 0, 0, 0),
				r = new Intl.DateTimeFormat(void 0, {
					hour: "numeric",
					minute: "2-digit"
				}).format,
				o = e => {
					const t = c - s.B,
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
				p = n("./src/chat/selectors/experiments.ts"),
				b = n("./src/reddit/components/Econ/DefaultAvatar/index.tsx"),
				g = n("./src/chat/icons/Userpic/index.m.less"),
				f = n.n(g);
			const O = d.a.i("FallbackAvatar", f.a),
				E = d.a.wrapped(O, "FallbackAvatarWrapper", f.a),
				j = d.a.wrapped(e => {
					const t = Object(o.e)(p.s),
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
					if (t) return r.a.createElement(b.a, {
						userId: i,
						className: n,
						style: u
					});
					const h = (e => e.replace(l.Ib.Account + "_", ""))(i),
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
			class v extends r.a.Component {
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
					return l ? r.a.createElement(E, {
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
			const C = d.a.wrapped(v, "VoicesAvatar", f.a),
				_ = Object(u.a)({
					contact: (e, t) => e.contacts.models[t.userId],
					currentUser: e => e.user.account
				}),
				I = Object(o.b)(_);
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
					return r.a.createElement(C, {
						className: t,
						height: s,
						width: c,
						profileImg: l,
						name: d,
						isFlipped: n
					})
				}
				return r.a.createElement(j, {
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
		"./src/chat/icons/svgs/Edit/index.tsx": function(e, t, n) {
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
		"./src/chat/icons/svgs/MenuOverflow/index.tsx": function(e, t, n) {
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
			const c = 6;

			function r(e) {
				if (e.contact_account_id || e.id) return {
					id: e.contact_account_id || `${a.Ib.Account}_${e.id}`,
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
			}
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
				} : Object(c.b)(`\n      Error reporting message: ${t&&t.messageId}.\n      The sender is unknown.\n    `),
				o = (e, t, n) => {
					if (!t || !t.sender) return [];
					const a = s()(n, ["createdAt"]),
						c = a.findIndex(({
							messageId: e
						}) => e === t.messageId),
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
		"./src/chat/models/Theme/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return x
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "a", (function() {
				return R
			}));
			var a = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/constants/theme.ts"),
				c = n("./src/reddit/models/Theme/index.ts"),
				r = n("./src/chat/constants/theme.ts");
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
				j = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const {
				REDDIT: v,
				NIGHT: C
			} = s.b, _ = e => c.d[e].newRedditTheme;
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
						color: E.a.white,
						border: E.a.transparent,
						link: {
							color: E.a.white,
							textDecoration: I.UNDERLINE
						},
						channelsFilter: {
							background: w(y.VANITY),
							selected: E.a.white
						}
					}
				},
				k = {
					bubble: {
						background: w(y.SERIOUS),
						color: E.a.white,
						border: E.a.transparent,
						link: {
							color: E.a.white,
							textDecoration: I.UNDERLINE
						},
						channelsFilter: {
							background: w(y.SERIOUS),
							selected: E.a.white
						}
					}
				},
				M = {
					bubble: {
						background: w(y.ORANGERED),
						color: E.a.white,
						border: E.a.transparent,
						link: {
							color: E.a.white,
							textDecoration: I.UNDERLINE
						},
						channelsFilter: {
							background: w(y.ORANGERED),
							selected: E.a.white
						}
					}
				},
				T = {
					activity: {
						icon: {
							default: _(v).actionIcon,
							active: E.a.op,
							disable: Object(a.a)(.5, E.a.white),
							hover: Object(a.a)(.5, E.a.white),
							contrast: _(v).bodyText,
							nsfw: {
								bg: E.a.black,
								text: E.a.white
							}
						},
						text: {
							regular: _(v).bodyText,
							active: E.a.op,
							fade: Object(a.a)(.4, E.a.white),
							light: _(v).actionIcon,
							warning: E.a.warning,
							highlight: E.a.white,
							success: E.a.approved,
							meta: _(v).metaText
						},
						button: {
							primary: E.a.alienblue,
							secondary: _(v).metaText,
							chatFilterColor: b
						},
						buttonSecondary: {
							active: E.a.alienblue
						},
						send: {
							disable: Object(a.a)(.5, E.a.white),
							hover: Object(a.a)(.08, E.a.op)
						},
						checkbox: {
							checked: E.a.alienblue,
							checkmark: E.a.white,
							unchecked: _(v).body,
							uncheckedBorder: Object(a.a)(.3, E.a.white)
						},
						input: {
							border: E.a.defaultFlair,
							focusColor: E.a.white,
							focusBg: E.a.approved,
							ownerBg: _(v).line,
							color: _(v).bodyText,
							error: E.a.warning,
							channelRename: Object(a.a)(.1, E.a.white),
							background: Object(a.f)(Object(a.a)(.3, E.a.white), .1)
						},
						link: {
							staticUnderline: E.a.alienblue,
							staticText: E.a.op,
							hoverText: E.a.snoo
						},
						minimizedPortal: {
							backgroundColor: {
								unreadInitial: _(v).active,
								unreadFinal: _(v).highlight
							},
							color: {
								unreadInitial: E.a.white,
								unreadFinal: E.a.black
							}
						}
					},
					layout: {
						body: _(v).body,
						colsBorder: _(v).line,
						controlsBorder: Object(a.f)(E.a.black, .15),
						header: {
							counterBg: E.a.snoo,
							counterText: E.a.white
						},
						scrollbar: Object(a.a)(.2, E.a.white),
						scrollbarHover: Object(a.a)(.4, E.a.white),
						timeStamp: {
							tooltip: {
								background: _(v).body
							}
						},
						dropdown: {
							border: "none"
						},
						overlayBackground: E.a.overlayBackground
					},
					message: {
						list: {
							item: {
								ownerBg: _(v).inactive,
								button: _(v).actionIcon,
								richItem: _(v).metaText,
								richItemBorder: _(v).postLine,
								onlineIndicator: E.a.approved,
								white: E.a.white
							}
						}
					},
					subreddit: {
						iconBg: E.a.alienblue
					},
					sidebar: {
						background: Object(a.f)(Object(a.a)(.3, E.a.white), .1),
						subreddit: {
							background: {
								active: E.a.alienblue,
								hover: _(v).canvas
							}
						},
						basic: {
							background: {
								active: E.a.alienblue,
								hover: _(v).canvas
							}
						},
						text: {
							divider: Object(a.a)(.5, E.a.white)
						},
						item: {
							hover: _(v).field,
							active: _(v).postLine,
							selected: _(v).inactive,
							text: {
								active: _(v).titleText
							}
						},
						footer: {
							background: _(v).field
						}
					},
					toast: {
						pending: E.a.black,
						success: E.a.approved,
						error: E.a.orangered
					},
					skeleton: {
						field: _(v).field,
						inactive: _(v).inactive
					},
					boxShadow: Object(a.f)(20, 120, 120, .11),
					bubbleActions: {
						hover: _(v).line
					},
					bubble: {
						background: E.a.transparent,
						color: _(v).bodyText,
						border: _(v).line,
						link: {
							color: E.a.op,
							textDecoration: I.NONE
						},
						channelsFilter: {
							background: d,
							selected: b
						}
					},
					editName: Object(a.a)(.1, _(v).inactive),
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
					},
					searchBar: {
						backgroundColor: _(v).placeholder
					},
					newChat: {
						inviteLink: {
							borderColor: u
						}
					},
					addReaction: {
						backgroundColor: _(v).inactive,
						iconFill: _(C).postIcon
					}
				},
				A = {
					activity: {
						icon: {
							default: _(C).postIcon,
							active: E.a.alienblue,
							disable: Object(a.a)(.5, E.a.white),
							hover: Object(a.a)(.5, E.a.white),
							contrast: Object(a.a)(.4, _(C).bodyText),
							nsfw: {
								bg: E.a.black,
								text: E.a.white
							}
						},
						text: {
							regular: _(C).bodyText,
							active: E.a.op,
							fade: Object(a.a)(.4, E.a.white),
							light: _(C).actionIcon,
							warning: E.a.warning,
							highlight: E.a.white,
							success: E.a.approved,
							meta: _(C).metaText
						},
						button: {
							primary: E.a.alienblue,
							secondary: _(C).metaText,
							chatFilterColor: m
						},
						buttonSecondary: {
							active: E.a.lightboxHeaderText
						},
						send: {
							disable: Object(a.a)(.5, E.a.white),
							hover: Object(a.a)(.08, E.a.op)
						},
						checkbox: {
							checked: E.a.alienblue,
							checkmark: E.a.white,
							unchecked: _(C).body,
							uncheckedBorder: Object(a.a)(.3, E.a.white)
						},
						input: {
							border: E.a.defaultFlair,
							focusColor: E.a.white,
							focusBg: E.a.approved,
							ownerBg: _(C).line,
							color: _(C).bodyText,
							error: E.a.warning,
							channelRename: Object(a.a)(.1, E.a.white),
							background: Object(a.f)(Object(a.a)(.3, E.a.white), .1)
						},
						link: {
							staticUnderline: E.a.alienblue,
							staticText: E.a.op,
							hoverText: E.a.snoo
						},
						minimizedPortal: {
							backgroundColor: {
								unreadInitial: _(C).active,
								unreadFinal: _(C).highlight
							},
							color: {
								unreadInitial: E.a.white,
								unreadFinal: E.a.white
							}
						}
					},
					layout: {
						body: _(C).body,
						colsBorder: _(C).line,
						controlsBorder: Object(a.f)(E.a.white, .15),
						header: {
							counterBg: E.a.snoo,
							counterText: E.a.white
						},
						scrollbar: Object(a.a)(.2, _(C).bodyText),
						scrollbarHover: Object(a.a)(.1, _(C).bodyText),
						timeStamp: {
							tooltip: {
								background: _(C).inactive
							}
						},
						dropdown: {
							border: _(C).line
						},
						overlayBackground: E.a.overlayBackground
					},
					message: {
						list: {
							item: {
								ownerBg: _(C).inactive,
								button: _(C).actionIcon,
								richItem: _(C).metaText,
								richItemBorder: j.a.metaText,
								onlineIndicator: E.a.approved,
								white: E.a.white
							}
						}
					},
					subreddit: {
						iconBg: E.a.alienblue
					},
					sidebar: {
						background: Object(a.f)(Object(a.a)(.4, E.a.white), .1),
						subreddit: {
							background: {
								active: E.a.alienblue,
								hover: Object(a.g)(.2, _(C).canvas)
							}
						},
						basic: {
							background: {
								active: E.a.alienblue,
								hover: Object(a.g)(.2, _(C).canvas)
							}
						},
						text: {
							divider: Object(a.a)(.5, E.a.white)
						},
						item: {
							hover: _(C).field,
							active: _(C).postLine,
							selected: _(C).placeholder,
							text: {
								active: _(C).titleText
							}
						},
						footer: {
							background: _(C).field
						}
					},
					toast: {
						pending: E.a.black,
						success: E.a.approved,
						error: E.a.orangered
					},
					skeleton: {
						field: _(C).field,
						inactive: _(C).inactive
					},
					boxShadow: Object(a.f)(20, 120, 120, 0),
					bubbleActions: {
						hover: _(C).field
					},
					bubble: {
						background: E.a.transparent,
						color: _(C).bodyText,
						border: _(C).line,
						link: {
							color: E.a.op,
							textDecoration: I.NONE
						},
						channelsFilter: {
							background: g,
							selected: h
						}
					},
					editName: _(C).inactive,
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
					},
					searchBar: {
						backgroundColor: _(C).placeholder
					},
					newChat: {
						inviteLink: {
							borderColor: _(C).inactive
						}
					},
					addReaction: {
						backgroundColor: _(C).postIcon,
						iconFill: _(C).body
					}
				},
				L = {
					[r.b.REDDIT]: T,
					[r.b.NIGHT]: A
				},
				D = {
					[y.ORANGERED]: M,
					[y.VANITY]: N,
					[y.SERIOUS]: k
				},
				R = [y.BASIC, y.ORANGERED, y.VANITY, y.SERIOUS]
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
			const c = `${a.Ib.Account}_`,
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
				return hn
			}));
			var a = n("./node_modules/redux/es/redux.js"),
				s = n("./src/chat/actions/channelsFilter/index.ts"),
				c = n("./src/chat/models/Channel/index.ts");
			const r = {
				filter: c.c.ALL
			};
			var o = (e = r, t) => {
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
			const j = {
				fetchingChannels: !1,
				hasMoreChannels: !1,
				sortedKeys: []
			};
			var v = (e = j, t) => {
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
						} = t.payload, s = Object(E.c)(n, [c.b.Direct, c.b.Group]);
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
			var C = (e = !1, t) => {
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
							} = t.payload, s = Object(E.c)(n, [c.b.Direct, c.b.Group]);
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
				k = n.n(N),
				M = n("./node_modules/lodash/reduce.js"),
				T = n.n(M),
				A = n("./src/chat/actions/channel/dropdown.ts"),
				L = n("./src/chat/actions/message/inboxScroller.ts"),
				D = n("./src/chat/constants/channels.ts");
			const R = {};
			var P = (e = R, t) => {
				switch (t.type) {
					case b.g:
						return {
							...e, ...t.payload
						};
					case b.b:
					case b.a: {
						const {
							channels: n
						} = t.payload, a = T()(e, (e, t, a) => n[a] && t.channelState === D.b.PARTIAL && (e[a] = n[a]) && e || e, {});
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
							channelState: D.b.JOINED
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
								channelState: D.b.INVITED
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
							a = Number(k()(Object.keys(t.payload.message))),
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
					case L.b: {
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
			var B = (e = U, t) => {
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
					invited: v,
					inviteListExpanded: C,
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
					models: P,
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
				z = n("./node_modules/lodash/values.js"),
				V = n.n(z),
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
						} = t, c = !!(s && n && n.id);
						return {
							...e,
							[a.toLowerCase()]: {
								loaded: !0,
								userId: n ? n.id : null,
								valid: c,
								method: K
							}
						}
					}
					case H.i: {
						const n = t.payload;
						return {
							...e,
							...V()(n).reduce((e, t) => (e[t.name.toLowerCase()] = {
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
			const X = {};
			var Y = (e = X, t) => {
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
			const J = [];
			var $ = (e = J, t) => {
				switch (t.type) {
					case H.h:
						return [...e, t.payload];
					case H.k:
						return e.filter(e => e !== t.payload);
					case H.j:
						return J;
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
					models: Y,
					selectedUserIds: $,
					suggestedKeys: te
				}),
				ae = n("./src/chat/actions/container.ts"),
				se = n("./src/chat/constants/container.ts");
			const ce = {
				size: se.a.EMBED,
				isFocused: !1,
				windowWidth: 0
			};
			var re = (e = ce, t) => {
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
						case ae.WINDOW_SIZE_CHANGED:
							return {
								...e, windowWidth: t.payload
							};
						default:
							return e
					}
				},
				oe = n("./src/lib/env/index.ts"),
				ie = n("./src/lib/makeActionCreator/index.ts");
			n("./src/chat/endpoints/users/index.ts");
			Object(ie.a)("EXPERIMENTS__REQUEST_LOADED"), Object(ie.a)("EXPERIMENTS__REQUEST_PENDING"), Object(ie.a)("EXPERIMENTS__REQUEST_FAILED");
			var le = n("./src/chat/models/Experiment/index.ts"),
				de = n("./src/chat/reducers/experiments/helpers.ts");
			const ue = {
				api: {
					isPending: !1,
					errors: []
				},
				models: {}
			};
			var he = (e = ue, t) => {
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
							const a = Object(oe.b)() ? null : null === (n = null == t ? void 0 : t.payload) || void 0 === n ? void 0 : n.queryParams,
								s = Object(le.b)(t.payload.data),
								c = Object(de.a)(s, a);
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
				me = n("./src/chat/actions/gifs/index.ts");
			const pe = {
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
			var be = (e = pe, t) => {
					var n, a, s;
					switch (t.type) {
						case me.c:
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
						case me.f:
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
						case me.d:
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
						case me.g:
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
						case me.b:
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
						case me.e:
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
						case me.h:
							return {
								...e, search: {
									...e.search,
									inputQuery: t.payload
								}
							};
						case me.a:
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
				ge = n("./src/chat/actions/inviteLink/constants.ts");
			const fe = {};
			var Oe = (e = fe, t) => {
					switch (t.type) {
						case ge.f:
							return t.payload;
						case ge.a:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId],
									durationLabel: t.payload.durationLabel
								}
							};
						case ge.b:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId] || {},
									maxUsersCount: t.payload.maxUsersCount
								}
							};
						case ge.g:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId] || {},
									isRevokeInviteLinksRequestPending: !0,
									inviteLink: "",
									errors: []
								}
							};
						case ge.k:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId] || {},
									isCreateInviteLinkRequestPending: !0,
									errors: []
								}
							};
						case ge.h:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId] || {},
									isRevokeInviteLinksRequestPending: !1
								}
							};
						case ge.l:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId] || {},
									inviteLink: t.payload.inviteLink,
									isCreateInviteLinkRequestPending: !1
								}
							};
						case ge.i:
							return {
								...e, [t.payload.inviteLinkDataModelId]: {
									...e[t.payload.inviteLinkDataModelId] || {},
									isRevokeInviteLinksRequestPending: !1,
									errors: t.payload.errors
								}
							};
						case ge.m:
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
				Ee = n("./node_modules/lodash/toArray.js"),
				je = n.n(Ee),
				ve = n("./node_modules/lodash/uniqBy.js"),
				Ce = n.n(ve),
				_e = n("./src/chat/actions/members.ts");
			const Ie = {};
			var xe = (e = Ie, t) => {
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
					case _e.a: {
						const {
							channelId: n,
							members: a
						} = t.payload, s = je()(a), c = e[n] && e[n].model || [], r = Ce()([...c, ...s], "id");
						return {
							...e,
							[n]: {
								...e[n],
								model: r
							}
						}
					}
					case _e.d:
						return {};
					default:
						return e
				}
			};
			var ye = (e = !1, t) => {
				switch (t.type) {
					case _.b:
					case _.l:
						return !0;
					default:
						return e
				}
			};
			const Se = {};
			var we = (e = Se, t) => {
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
					case L.a: {
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
			const Ne = {};
			var ke = (e = Ne, t) => {
					var n, a;
					switch (t.type) {
						case _.i: {
							const s = V()(t.payload);
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
				Me = n("./src/chat/actions/message/reactions.ts");
			const Te = {};
			var Ae = (e = Te, t) => {
					switch (t.type) {
						case _.b: {
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
						case Me.a:
							return {
								...e, [t.payload.messageId]: t.payload.reactions
							};
						default:
							return e
					}
				},
				Le = n("./src/chat/actions/message/richUnit.ts");
			const De = {
					posts: {},
					userPosts: {},
					comments: {},
					subreddits: {},
					dataReceived: !1
				},
				Re = e => e.length ? e.reduce((e, t) => (null == t ? void 0 : t.id) ? {
					...e,
					[t.id.toLowerCase()]: t
				} : e, {}) : {};
			var Pe = (e = De, t) => {
					var n, a, s, c;
					switch (t.type) {
						case Le.b:
							return {
								...e, posts: {
									...e.posts,
									...Re((null === (n = t.payload) || void 0 === n ? void 0 : n.posts) || {})
								}, userPosts: {
									...e.userPosts,
									...Re((null === (a = t.payload) || void 0 === a ? void 0 : a.userPosts) || {})
								}, comments: {
									...e.comments,
									...Re((null === (s = t.payload) || void 0 === s ? void 0 : s.comments) || {})
								}, subreddits: {
									...e.subreddits,
									...Re((null === (c = t.payload) || void 0 === c ? void 0 : c.subreddits) || {})
								}, dataReceived: !0
							};
						case Le.a:
							return {
								...e, dataReceived: !1
							};
						default:
							return e
					}
				},
				Ue = n("./node_modules/lodash/isEqual.js"),
				Be = n.n(Ue),
				Fe = n("./src/chat/actions/message/unreadCount.ts");
			const He = {
				unreadMessages: 0,
				hasNewMessages: !1,
				unacceptedInvites: 0
			};
			var Ge = (e = He, t) => {
					switch (t.type) {
						case Fe.a:
							return Be()(e, t.payload) ? e : {
								...e,
								...t.payload
							}
					}
					return e
				},
				ze = Object(a.c)({
					firstLoaded: ye,
					models: we,
					pending: ke,
					reactions: Ae,
					unread: Ge,
					richUnits: Pe
				}),
				Ve = n("./src/chat/reducers/meta/index.ts"),
				We = n("./src/chat/reducers/platform/index.ts"),
				Ke = n("./src/chat/actions/messageReactions/constants.ts");
			const Ze = {
				models: {},
				selectedMessageId: null
			};
			var qe = (e = Ze, t) => {
					switch (t.type) {
						case Ke.a: {
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
						case Ke.c:
							return {
								...e, selectedMessageId: t.payload
							};
						case Ke.b:
							return {
								...e, selectedMessageId: null
							};
						default:
							return e
					}
				},
				Qe = n("./src/chat/actions/renameGroupChat/index.ts");
			const Xe = {
				ivVisible: !1
			};
			var Ye = (e = Xe, t) => {
					switch (t.type) {
						case Qe.a:
							return {
								...e, ivVisible: t.payload.isVisible
							};
						default:
							return e
					}
				},
				Je = n("./src/chat/actions/sendbird/config.ts");
			const $e = {
				maxMessageLength: void 0
			};
			var et = (e = $e, t) => {
				switch (t.type) {
					case Je.b:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const tt = {
				host: void 0
			};
			var nt = (e = tt, t) => {
				switch (t.type) {
					case Je.c:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const at = {};
			var st = (e = at, t) => {
					switch (t.type) {
						case Je.d:
							return {
								...t.payload.reactions.reduce((e, t) => {
									if (null == t ? void 0 : t.key) return {
										...e,
										[t.key]: t
									}
								}, {})
							};
						default:
							return e
					}
				},
				ct = n("./src/chat/actions/sendbird/sdk.ts"),
				rt = n("./src/chat/constants/sendbird.ts");
			const ot = {
				connectionStatus: rt.b.Closed,
				initialized: !1
			};
			var it = (e = ot, t) => {
				switch (t.type) {
					case ct.a:
						return {
							...e, initialized: !0, connectionStatus: rt.b.Open
						};
					case ct.c: {
						const n = {
							...t.payload
						};
						return {
							...e,
							error: n,
							connectionStatus: rt.b.Closed
						}
					}
					case ct.b:
						return {
							...e, connectionStatus: rt.b.Closed
						};
					case ct.d: {
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
			const lt = {
				expires: void 0,
				token: void 0,
				active: !1
			};
			var dt = (e = lt, t) => {
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
				ut = Object(a.c)({
					globalSettings: et,
					proxy: nt,
					reactions: st,
					session: dt,
					sdk: it
				}),
				ht = n("./src/chat/actions/settingsDropdown/index.ts");
			const mt = {
				showChatLinkPromptCount: 0,
				isChatLinkPromptHidden: !1
			};
			var pt = (e = mt, t) => {
					switch (t.type) {
						case ht.c:
							return {
								...e, showChatLinkPromptCount: t.payload
							};
						case ht.a:
							return {
								...e, isChatLinkPromptHidden: !0
							};
						default:
							return e
					}
				},
				bt = n("./src/chat/reducers/sidebar/sideBarAppearance/index.ts"),
				gt = Object(a.c)({
					sideBarAppearance: bt.b
				}),
				ft = n("./src/chat/actions/sitewideRules.ts");
			const Ot = [];
			var Et = (e = Ot, t) => {
					switch (t.type) {
						case ft.a:
							return t.payload;
						default:
							return e
					}
				},
				jt = n("./src/chat/reducers/subscribe.ts"),
				vt = n("./src/chat/actions/sidebar.ts"),
				Ct = n("./src/chat/actions/theme.ts"),
				_t = n("./src/chat/constants/theme.ts"),
				It = n("./src/chat/models/Theme/index.ts");
			const xt = {
				current: It.e[_t.a],
				chatTheme: null,
				chatThemeKey: It.c.BASIC,
				chatPreviewThemeKey: It.c.BASIC,
				cached: {},
				isShowPrompt: !0,
				isShowSparkles: !0
			};
			var yt = (e = xt, t) => {
					switch (t.type) {
						case Ct.GLOBAL_THEME_CHANGED:
							return e.current = It.e[t.payload.themeKey], {
								...e
							};
						case Ct.CHAT_THEME_CHANGED:
							return {
								...e, chatTheme: It.b[t.payload.themeKey], chatPreviewThemeKey: t.payload.themeKey
							};
						case Ct.CHAT_THEME_APPLIED:
							return {
								...e, chatThemeKey: t.payload.themeKey
							};
						case Ct.CHAT_THEME_CANCELED:
							return {
								...e, chatTheme: e.chatThemeKey ? It.b[e.chatThemeKey] : null, chatPreviewThemeKey: e.chatThemeKey
							};
						case Ct.CHAT_THEME_SETTINGS_CLICKED:
							return {
								...e, isShowPrompt: !1, isShowSparkles: !1
							};
						case Ct.CHAT_THEME_PROMPT_CLICKED:
							return {
								...e, isShowPrompt: !1
							};
						case Ct.CHAT_THEME_RESTORED:
							return {
								...e, chatTheme: It.b[t.payload.themeKey], chatThemeKey: t.payload.themeKey, chatPreviewThemeKey: t.payload.themeKey
							};
						case Ct.CHAT_THEME_SHOW_PROMPT_COUNT_SET:
							return {
								...e, isShowPrompt: t.payload <= Ct.MAX_SHOW_PROMPT_COUNT, isShowSparkles: t.payload <= Ct.MAX_SHOW_COLORED_SETTINGS
							};
						case vt.b:
							return t.payload === bt.a.THEMES ? {
								...e,
								isShowPrompt: !1
							} : e;
						default:
							return e
					}
				},
				St = n("./src/chat/actions/toast.ts");
			const wt = {
				toast: null,
				customErrorMessage: null
			};
			var Nt = (e = wt, t) => {
					switch (t.type) {
						case St.a:
							return wt;
						case St.b: {
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
				kt = n("./src/chat/actions/platform.ts"),
				Mt = n("./src/chat/actions/tooltip.ts");
			var Tt = (e = null, t) => {
					switch (t.type) {
						case Mt.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case Mt.b:
						case kt.a:
							return null;
						default:
							return e
					}
				},
				At = n("./src/chat/actions/typingIndicator.ts");
			const Lt = {
				usernames: []
			};
			var Dt = (e = Lt, t) => {
					switch (t.type) {
						case At.a: {
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
								return Be()(e, t)
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
				Rt = n("./src/chat/actions/uploads/index.ts"),
				Pt = n("./src/chat/models/Uploads/index.ts");
			const Ut = {};
			var Bt = (e = Ut, t) => {
				switch (t.type) {
					case Rt.a: {
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
					case Rt.c: {
						const {
							id: n,
							channelId: a,
							status: s
						} = t.payload;
						if (s === Pt.c.Submit) return {
							[a]: []
						};
						if (s === Pt.c.Canceled) {
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
			var Ft = (e = !1, t) => {
				switch (t.type) {
					case Rt.e:
						return t.payload.isDrop;
					case St.b:
					case Rt.a:
						return !1;
					default:
						return e
				}
			};
			var Ht = (e = !1, t) => {
				switch (t.type) {
					case Rt.e:
						return t.payload.isOver;
					default:
						return e
				}
			};
			const Gt = {};
			Rt.c;
			var zt = (e = Gt, t) => {
					switch (t.type) {
						case Rt.a: {
							const {
								upload: n
							} = t.payload;
							return {
								...e,
								[n.id]: {
									...n,
									status: Pt.c.Pending
								}
							}
						}
						case Rt.c: {
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
						case Rt.b: {
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
				Vt = n("./src/chat/actions/uploads/prompt.ts");
			const Wt = {
				count: 0
			};
			var Kt = (e = Wt, t) => {
					switch (t.type) {
						case Vt.a:
							return {
								count: t.payload
							};
						default:
							return e
					}
				},
				Zt = Object(a.c)({
					activeUploads: Bt,
					isDrop: Ft,
					isOver: Ht,
					models: zt,
					prompt: Kt
				}),
				qt = n("./src/lib/reducers/addAuthentication/index.ts");
			var Qt = Object(qt.a)((e = null, t) => {
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
			const Xt = {
				userSubredditChatEnabled: !1
			};
			var Yt = (e = Xt, t) => {
				switch (t.type) {
					case Je.a: {
						const {
							userSubredditChatEnabled: n
						} = t.payload || Xt;
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
			const Jt = {};
			var $t = (e = Jt, t) => {
				switch (t.type) {
					case H.d:
						return t.payload;
					default:
						return e
				}
			};
			const en = n("./src/lib/constants/index.ts").D;
			var tn = Object(qt.a)((e = en, t) => (t.type, e), en);
			const nn = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var an = (e = nn, t) => {
				switch (t.type) {
					case H.e:
						return t.payload;
					default:
						return e
				}
			};
			const sn = {
				globalTheme: _t.a
			};
			var cn = (e = sn, t) => {
				switch (t.type) {
					case Ct.GLOBAL_THEME_CHANGED: {
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
			var rn = (e = "", t) => {
					switch (t.type) {
						case H.f:
							return t.payload;
						default:
							return e
					}
				},
				on = n("./src/chat/actions/session.ts");
			var ln = (e = null, t) => {
				switch (t.type) {
					case on.a:
					case on.c:
						return t.payload;
					case on.b:
						return null;
					default:
						return e
				}
			};
			var dn = (e = "", t) => {
					switch (t.type) {
						case H.g:
							return t.payload;
						default:
							return e
					}
				},
				un = Object(a.c)({
					account: Qt,
					chatExperiments: Yt,
					experiments: $t,
					language: tn,
					loid: an,
					prefs: cn,
					reddaid: rn,
					session: ln,
					sessionTracker: dn
				});
			const hn = {
				channels: F,
				contacts: ne,
				container: re,
				experiments: he,
				inviteLinkSettings: Oe,
				gifs: be,
				members: xe,
				messages: ze,
				reactionsList: qe,
				meta: Ve.b,
				platform: We.b,
				renameGroupChat: Ye,
				sendbird: ut,
				settingsDropdown: pt,
				sidebar: gt,
				sitewideRules: Et,
				themes: yt,
				toast: Nt,
				tooltipId: Tt,
				typingIndicator: Dt,
				user: un,
				uploads: Zt,
				lastAction: jt.a
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
				return c
			}));
			var a = n("./node_modules/history/esm/history.js"),
				s = n("./src/chat/actions/platform.ts");
			const c = {
				currentPage: null,
				referrers: {},
				metas: {}
			};
			t.b = (e = c, t) => {
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
								key: o
							} = r;
						if (void 0 === o) return e;
						const i = Object(a.e)(r),
							l = c ? ((e, t, n, a) => {
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
							})(o, i, c, r) : ((e, t) => ({
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
					chunk: s.s.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Mb.CHAT
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
					chunk: s.s.CHAT_EMPTY,
					component: l,
					exact: !0,
					meta: {
						name: s.Mb.CHAT_EMPTY
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
					chunk: s.s.CHAT_MINIMIZE,
					component: u,
					exact: !0,
					meta: {
						name: s.Mb.CHAT_MINIMIZE
					},
					path: "/chat/minimize/"
				},
				m = ["/chat/", "/chat/:action(share|share_new)/", "/chat/channel/:action(create)/", "/chat/channel/:channelId/:action(block|hide|delete|invite|invite_link_settings|invited|kick|members|leave|nsfw|report)?/:attr(invite|message|user)?/:attrId?"],
				p = {
					action: c.a,
					chunk: s.s.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Mb.CHAT
					},
					path: m
				},
				b = ["/chat/user_id/:userIds/"],
				g = {
					action: c.e,
					chunk: s.s.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Mb.CHAT
					},
					path: b
				},
				f = {
					action: c.d,
					chunk: s.s.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Mb.CHAT
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
				chunk: a.s.CHAT,
				exact: !0,
				meta: {
					name: a.Mb.CHAT
				},
				path: "/chat/*"
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
				return p
			})), n.d(t, "e", (function() {
				return b
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
				p = Object(c.a)(r, i, (e, t) => {
					var n;
					return t ? null === (n = e.search.models[t]) || void 0 === n ? void 0 : n.hasError : e.trending.api.hasError
				}),
				b = Object(c.a)(r, i, (e, t) => {
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
				return c
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/reselect/es/index.js");
			const s = e => e.reactionsList,
				c = Object(a.a)(e => (e => e.messages.reactions)(e), (e, t) => t, (e, t) => e[t] || []),
				r = e => {
					const t = s(e).selectedMessageId;
					if (t) return t
				},
				o = e => {
					const t = s(e).models;
					return Object.keys(t).map(e => t[e])
				},
				i = (e, t) => {
					return s(e).models[t]
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
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const a = e => e.sendbird.sdk.connectionStatus,
				s = e => e.sendbird.sdk.initialized,
				c = e => e.sendbird.proxy.host,
				r = e => e.sendbird.session,
				o = e => e.sendbird.session.active,
				i = e => {
					const t = e.sendbird.reactions;
					if (t) return Object.keys(t).map(e => t[e])
				}
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
				return c
			}));
			var a = n("./node_modules/reselect/es/index.js");
			const s = e => t => t.tooltipId === e,
				c = Object(a.a)(e => e.tooltipId, e => e)
		},
		"./src/chat/singleton/SendbirdSDK.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
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
						channelId: c
					} = e,
					r = Object(b.y)(s),
					o = Object(f.a)(s);
				if (t === o && (n(Object(u.I)(c)), c === r)) {
					const e = Object(p.getRedirectURL)(Object(p.channelAction)(c, m.a.DENY));
					n(Object(h.b)(e))
				}
			};
			var E = n("./src/chat/actions/message/index.ts"),
				j = n("./src/chat/actions/message/reactions.ts"),
				v = n("./src/chat/actions/sendbird/index.ts"),
				C = n("./src/chat/actions/sendbird/sdk.ts"),
				_ = n("./src/chat/actions/toast.ts"),
				I = n("./src/chat/actions/typingIndicator.ts"),
				x = n("./src/chat/constants/batchSizes.ts"),
				y = n("./src/chat/constants/messages.ts"),
				S = n("./src/chat/constants/sendbird.ts"),
				w = n("./src/chat/constants/toast.ts"),
				N = n("./src/chat/helpers/errors.ts"),
				k = n("./src/chat/models/Channel/index.ts"),
				M = n("./src/chat/models/Channel/utils.ts"),
				T = n("./src/chat/models/Message/index.ts"),
				A = n("./src/chat/models/MessageReaction/index.ts"),
				L = n("./src/chat/models/User/member.ts");
			const {
				sendbirdAppId: D
			} = a.a;
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
						appId: D
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
					e ? (this.onChannelChanged(), this.onChannelDeleted(), this.onChannelMuted(), this.onChannelUnmuted(), this.onChannelLocked(), this.onChannelUnlocked(), this.onReceiveInvite(), this.onReceiveMessage(), this.onUpdateMessage(), this.onDeleteMessage(), this.onUserActions(), this.onUserKicked(), this.onTypingStatusUpdated(), this.onReactionUpdated(), this.onReconnectStarted(), this.onReconnectSucceeded(), this.onReconnectFailed()) : (this.channelUniqueHandlerID.length && this.channelUniqueHandlerID.forEach(e => {
						this.self.removeChannelHandler(e)
					}), this.connectionUniqueHandlerID.length && this.channelUniqueHandlerID.forEach(e => {
						this.self.removeConnectionHandler(e)
					}))
				}
				reconnect() {
					this.dispatch(Object(_.g)({
						toast: w.a.ConnectionPending
					})), this.dispatch(Object(v.k)())
				}
				onReconnectStarted() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: S.b.Pending
						},
						n = {
							toast: w.a.ConnectionPending
						};
					e.onReconnectStarted = () => {
						this.dispatch(Object(C.h)(t)), this.dispatch(Object(_.g)(n))
					}, this.self.addConnectionHandler("CONNECTION_CHANGE", e), this.connectionUniqueHandlerID.push("CONNECTION_CHANGE")
				}
				onReconnectSucceeded() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: S.b.Open
						};
					e.onReconnectSucceeded = () => {
						this.dispatch(Object(C.h)(t)), this.dispatch(Object(_.g)({
							toast: w.a.ConnectionOpen
						})), Object(i.setTimeout)(() => this.dispatch(Object(_.d)()), 3 * l.Rb);
						this.dispatch(Object(E.v)(!0)), this.dispatch(Object(u.C)())
					}, this.self.addConnectionHandler("RECONNECT_SUCCEEDED", e), this.connectionUniqueHandlerID.push("RECONNECT_SUCCEEDED")
				}
				onReconnectFailed() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: S.b.Closed
						};
					e.onReconnectFailed = () => {
						this.dispatch(Object(C.h)(t)), this.dispatch(Object(_.g)({
							toast: w.a.ConnectionClosed
						}))
					}, this.self.addConnectionHandler("RECONNECT_FAILED", e), this.connectionUniqueHandlerID.push("RECONNECT_FAILED")
				}
				onReceiveInvite() {
					const e = new this.self.ChannelHandler;
					e.onUserReceivedInvitation = e => {
						const t = Object(k.h)(e);
						this.dispatch(Object(u.P)(t))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_INVITE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_INVITE")
				}
				onReceiveMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageReceived = (e, t) => {
						const n = Object(k.h)(e);
						this.dispatch(Object(u.O)(n));
						const a = Object(T.c)(t);
						a && this.dispatch(Object(E.x)(a))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_MESSAGE")
				}
				onUpdateMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageUpdated = (e, t) => {
						const n = Object(k.h)(e);
						this.dispatch(Object(u.O)(n));
						const a = Object(T.c)(t);
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
						const t = Object(M.f)(e.url),
							n = e.getTypingMembers().map(e => e.nickname);
						this.dispatch(Object(I.b)({
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
							const t = Object(k.h)(e);
							this.dispatch(Object(u.P)(t, !0))
						}, this.self.addChannelHandler(s, a), this.channelUniqueHandlerID.push(s)
					})
				}
				onReactionUpdated() {
					const e = new this.self.ChannelHandler;
					e.onReactionUpdated = (e, t) => {
						const n = Object(k.h)(e);
						this.dispatch(Object(j.b)({
							channelSendbirdId: n.channelId,
							messageSendbirdId: t.messageId,
							reactionIconKey: t.key,
							type: A.a[t.operation.toUpperCase()],
							userId: t.userId
						}, !0))
					}, this.self.addChannelHandler("ON_REACTION_UPDATED", e), this.channelUniqueHandlerID.push("ON_REACTION_UPDATED")
				}
				onChannelChanged() {
					const e = new this.self.ChannelHandler;
					e.onChannelChanged = e => {
						const t = Object(k.h)(e);
						this.dispatch(Object(u.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_CHANGED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_CHANGED")
				}
				onChannelDeleted() {
					const e = new this.self.ChannelHandler;
					e.onChannelDeleted = e => {
						const t = Object(M.f)(e);
						this.dispatch(g(t))
					}, this.self.addChannelHandler("ON_CHANNEL_DELETED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_DELETED")
				}
				onChannelMuted() {
					const e = new this.self.ChannelHandler;
					e.onUserMuted = e => {
						const t = Object(k.h)(e);
						this.dispatch(Object(u.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_MUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_MUTED")
				}
				onChannelUnmuted() {
					const e = new this.self.ChannelHandler;
					e.onUserUnmuted = e => {
						const t = Object(k.h)(e);
						this.dispatch(Object(u.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNMUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNMUTED")
				}
				onChannelLocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelFrozen = e => {
						const t = Object(k.h)(e);
						this.dispatch(Object(u.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_LOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_LOCKED")
				}
				onChannelUnlocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelUnfrozen = e => {
						const t = Object(k.h)(e);
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
						const a = Object(M.a)(e);
						this.self.GroupChannel.getChannel(a, (e, a) => {
							a ? n(a) : t(e)
						})
					})
				}
				addChannelModelByChannelId(e) {
					return new Promise((t, n) => {
						this.getChannelByChannelId(e).then(e => {
							if (!e) return t();
							const n = Object(k.h)(e);
							if (!n) return t();
							this.dispatch(Object(u.Q)(n)), t(n)
						}).catch(e => {
							n(e)
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
							channelId: c
						} = e, r = this.channels[c];
						if (r && !t) return this.switchChannel(r, n).then(([e]) => a(s({
							messageListData: e
						}))).catch(() => a(s()));
						this.getChannelByChannelId(c).then(t => {
							if (!t) return a(s());
							this.channels[c] = t;
							const r = Object(k.h)(t);
							this.updatePartialChannelModel(r, e.channelState), this.switchChannel(t, n).then(([e]) => a(s({
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
						const n = Object(k.h)(e);
						n && this.dispatch(O(n, t.userId))
					}, this.self.addChannelHandler("CHANNEL_USER_KICKED", e), this.channelUniqueHandlerID.push("CHANNEL_USER_KICKED")
				}
				getExistingChannels(e) {
					return new Promise((t, n) => {
						let a;
						if (e === m.b.INVITED ? this.channelListQueryInvited ? a = this.channelListQueryInvited : (this.channelListQueryInvited = this.self.GroupChannel.createMyGroupChannelListQuery(), a = this.channelListQueryInvited) : e === m.b.JOINED && (this.channelListQueryJoined ? a = this.channelListQueryJoined : (this.channelListQueryJoined = this.self.GroupChannel.createMyGroupChannelListQuery(), a = this.channelListQueryJoined)), a)
							if (a.includeEmpty = !0, a.limit = x.a.Channels, a.order = m.d.LATEST_MESSAGE, a.memberStateFilter = e === m.b.INVITED ? m.i.INVITED : m.i.JOINED, a.superChannelFilter = "all", a.customTypesFilter = ["direct", "group"], a.hasNext) {
								const e = a._token;
								a.next((n, s) => {
									if (!s && a) {
										let s = a.hasNext;
										const c = a._token;
										a && e && c && e === c && (s = !1, d.c.withScope(t => {
											t.setExtra("info", {
												query: JSON.stringify(a),
												currentNextToken: e,
												undatedNextToken: c
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
							const c = Object(L.a)(a),
								r = c.filter(n => t && n && n.name === e || !t && n);
							c.length && this.dispatch(Object(v.h)(c)), n(r)
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
						e && this.createPreviousMessageListQuery(), this.channel && this.prevMessageListQuery ? (this.prevMessageListQuery.reverse = !0, this.prevMessageListQuery.limit = x.a.Messages, this.prevMessageListQuery.includeReactions = !0, this.prevMessageListQuery.load((e, a) => {
							if (!a && this.prevMessageListQuery) {
								const n = {},
									{
										hasMore: a
									} = this.prevMessageListQuery;
								e.forEach(e => {
									const t = Object(T.c)(e);
									t && (n[t.messageId] = t)
								}), t({
									messages: n,
									hasMore: a
								})
							} else Object(N.b)(`Error with getting previous messages from Sendbird: ${a}`), n()
						})) : (Object(N.b)("Sendbird channel does not exist"), n())
					})
				}
				addMessage(e, t, n = []) {
					return new Promise((a, s) => {
						if (this.channel) {
							const c = new(0, this.self.UserMessageParams);
							c.data = t, c.message = e, n && n.length && (c.mentionType = y.b.USERS, c.mentionedUserIds = n), this.channel.sendUserMessage(c, (e, t) => {
								if (t) Object(N.b)(`Error with sending the message to Sendbird: ${t}`), s(t);
								else {
									const t = Object(T.c)(e);
									if (t && t.messageType === y.d.USER) return a(t);
									Object(N.b)(`Unsupported message type: ${t&&t.messageType}`), s()
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
								t ? Object(N.b)(`Error with adding reactions to the message on Sendbird: ${t}`) : n(e)
							})
						}
					})
				}
				deleteMessage(e) {
					return new Promise(t => {
						if (this.channel) {
							const n = e;
							this.channel.deleteMessage(n, (e, n) => {
								n ? Object(N.b)(`Error with deleting the message on Sendbird: ${n}`) : t(e)
							})
						}
					})
				}
				getFirstMessage() {
					return new Promise((e, t) => {
						this.channel ? this.channel.getNextMessagesByTimestamp(0, !0, 1, !0, "", "", (t, n) => {
							n ? Object(N.b)(`Error with getting first message from Sendbird: ${n}`) : e(t)
						}) : (Object(N.b)("Sendbird channel does not exist"), t())
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
			t.a = R
		},
		"./src/chat/tracking/events/chatView.ts": function(e, t, n) {
			"use strict";
			n.d(t, "o", (function() {
				return m
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "p", (function() {
				return b
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "q", (function() {
				return f
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "k", (function() {
				return N
			})), n.d(t, "i", (function() {
				return k
			}));
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/selectors/telemetry.ts"),
				c = n("./src/chat/tracking/fields/chat.ts"),
				r = n("./src/chat/tracking/fields/common.ts"),
				o = n("./src/chat/constants/messages.ts"),
				i = n("./src/chat/selectors/messages.ts"),
				l = n("./src/chat/selectors/uploads.ts");
			const d = (e, t) => {
					var n, a, s, c, r;
					const l = Object(i.c)(e, t);
					return l && l.type === o.c.GIF ? {
						id: null === (n = l.gif) || void 0 === n ? void 0 : n.id,
						caption: null === (a = l.gif) || void 0 === a ? void 0 : a.title,
						url: null === (s = l.gif) || void 0 === s ? void 0 : s.url,
						width: null === (c = l.gif) || void 0 === c ? void 0 : c.width,
						height: null === (r = l.gif) || void 0 === r ? void 0 : r.height
					} : {}
				},
				u = (e, t, n) => {
					var a;
					const s = n || Object(i.c)(e, t),
						c = Object(l.c)(e, null == s ? void 0 : s.clientMessageId);
					return {
						reason: (null == c ? void 0 : c.source) && String(c.source) || void 0,
						type: (null === (a = null == c ? void 0 : c.metadata) || void 0 === a ? void 0 : a.mimetype) && String(c.metadata.mimetype).toLowerCase() || void 0
					}
				};
			var h = n("./src/chat/tracking/sendEvent.ts");
			const m = e => Object(h.a)({
					noun: "chat",
					source: a.b.ChatView,
					action: a.a.View,
					chat: {
						...Object(c.z)(e),
						...Object(c.p)(e),
						...Object(c.f)(e),
						...Object(c.r)(e),
						...Object(c.k)(e),
						...Object(c.x)(e)
					},
					...Object(r.a)(e)
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
							...Object(c.z)(e),
							...Object(c.p)(e),
							...Object(c.f)(e),
							...Object(c.r)(e, 0),
							...Object(c.n)(e, n, o),
							...Object(c.w)(e, n, i),
							...Object(c.x)(e)
						},
						media: {
							...d(e, n)
						},
						...Object(r.a)(e),
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
							...Object(c.z)(e),
							...Object(c.p)(e),
							...Object(c.f)(e),
							...Object(c.r)(e, 0),
							...Object(c.s)(e, t),
							...Object(c.w)(e),
							...Object(c.x)(e),
							...Object(c.l)(e, t)
						},
						...Object(r.a)(e),
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
							...Object(c.z)(e),
							...Object(c.p)(e),
							...Object(c.f)(e),
							...Object(c.r)(e, 0),
							...Object(c.m)(t),
							...Object(c.n)(e, t),
							...Object(c.u)(n),
							...Object(c.w)(e, t),
							...Object(c.x)(e)
						},
						...Object(r.a)(e)
					})
				},
				f = e => {
					Object(h.a)({
						noun: "history",
						source: a.b.ChatView,
						action: a.a.View,
						chat: {
							...Object(c.z)(e),
							...Object(c.p)(e),
							...Object(c.f)(e),
							...Object(c.x)(e)
						},
						...Object(r.a)(e)
					})
				},
				O = (e, t, n, o) => {
					Object(h.a)({
						noun: "quick_response",
						source: a.b.ChatView,
						action: a.a.Click,
						chat: {
							...Object(c.z)(e),
							...Object(c.p)(e),
							...Object(c.f)(e),
							...Object(c.x)(e)
						},
						...Object(r.a)(e),
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
							...Object(c.z)(e),
							...Object(c.p)(e),
							...Object(c.f)(e)
						},
						...Object(r.a)(e),
						actionInfo: {
							...Object(s.a)(e),
							settingValue: t
						}
					})
				},
				j = e => {
					Object(h.a)({
						noun: "prompt_theme",
						source: a.b.Chat,
						action: a.a.View,
						chat: {
							...Object(c.z)(e),
							...Object(c.p)(e),
							...Object(c.f)(e)
						},
						...Object(r.a)(e)
					})
				},
				v = e => {
					Object(h.a)({
						noun: "all_invites",
						source: a.b.ChatView,
						action: a.a.Click,
						chat: {
							...Object(c.z)(e),
							...Object(c.f)(e)
						},
						...Object(r.a)(e)
					})
				},
				C = e => {
					Object(h.a)({
						noun: "all_invites",
						source: a.b.ChatView,
						action: a.a.View,
						chat: {
							...Object(c.z)(e),
							...Object(c.f)(e)
						},
						...Object(r.a)(e)
					})
				},
				_ = (e, t) => {
					Object(h.a)({
						noun: "type_filter",
						source: a.b.ChatView,
						action: a.a.Click,
						chat: {
							...Object(c.z)(e),
							...Object(c.f)(e)
						},
						...Object(r.a)(e),
						actionInfo: {
							...Object(s.a)(e),
							type: t
						}
					})
				},
				I = e => {
					Object(h.a)({
						noun: "prompt_image",
						source: a.b.ChatView,
						action: a.a.View,
						chat: {
							...Object(c.z)(e),
							...Object(c.f)(e)
						},
						...Object(r.a)(e)
					})
				},
				x = e => {
					Object(h.a)({
						noun: "share_chat",
						source: a.b.Chat,
						action: a.a.Click,
						chat: {
							...Object(c.z)(e),
							...Object(c.f)(e)
						},
						...Object(r.a)(e)
					})
				},
				y = e => {
					Object(h.a)({
						noun: "share_tooltip",
						source: a.b.Chat,
						action: a.a.Click,
						chat: {
							...Object(c.z)(e),
							...Object(c.f)(e)
						},
						...Object(r.a)(e)
					})
				},
				S = e => {
					Object(h.a)({
						noun: "reactions",
						source: a.b.Chat,
						action: a.a.Click,
						chat: {
							...Object(c.z)(e),
							...Object(c.f)(e)
						},
						...Object(r.a)(e)
					})
				},
				w = e => {
					Object(h.a)({
						noun: "reactions_menu",
						source: a.b.Chat,
						action: a.a.Click,
						chat: {
							...Object(c.z)(e),
							...Object(c.f)(e)
						},
						...Object(r.a)(e)
					})
				},
				N = (e, t, n, o, i) => {
					Object(h.a)({
						noun: "chat_message",
						source: a.b.ChatView,
						action: a.a.Submit,
						chat: {
							...Object(c.z)(e),
							...Object(c.f)(e),
							message_type: "reaction"
						},
						...Object(r.a)(e),
						actionInfo: {
							...Object(s.a)(e),
							settingValue: t,
							position: n,
							type: o,
							reason: "reaction",
							pageType: i
						}
					})
				},
				k = (e, t, n, o) => {
					Object(h.a)({
						noun: "message",
						source: a.b.Chat,
						action: a.a.Delete,
						chat: {
							...Object(c.z)(e),
							...Object(c.f)(e),
							message_type: "reaction"
						},
						...Object(r.a)(e),
						actionInfo: {
							...Object(s.a)(e),
							settingValue: t,
							position: n,
							type: o,
							reason: "reaction"
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
				p = e => {
					Object(o.a)({
						noun: "expand",
						source: a.b.InvitationInbox,
						action: a.a.Click,
						...Object(r.a)(e)
					})
				},
				b = e => {
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
				E = (e, t, n) => {
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
				const [t, n] = Object(s.useState)(null), [r, i] = Object(s.useState)(null), [l, d] = Object(s.useState)(null), [u, h] = Object(s.useState)(!1), m = Object(s.useCallback)(async () => h(!0), []), p = Object(s.useCallback)(() => h(!1), []), b = Object(s.useCallback)(() => h(!u), [u]), g = Object(s.useMemo)(() => {
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
				} = Object(c.a)(t, r, g);
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
				return j
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "i", (function() {
				return _
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
				f = s()().tlds(r.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				O = s()().tlds(r.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subredditFullUrl.config).add(o.g.subredditFull.prefix, o.g.subredditFullUrl.config),
				E = m.normalize;
			m.normalize = e => {
				E.call(m, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const j = (e, t) => {
					return (f.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				v = e => {
					return [...g.match(e) || [], ...p.match(e) || []].map(e => !d(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				C = (e, t) => {
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
				c = n("./src/lib/localStorageAvailable/index.ts"),
				r = n("./src/lib/notifications/constants.ts"),
				o = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const i = () => {
					if (Object(o.a)() !== r.c.NotificationsSupported) return r.a.Unsupported;
					const e = Object(c.a)() && localStorage.getItem(r.f) === r.g;
					return "granted" === Notification.permission ? r.a.Granted : "denied" === Notification.permission ? r.a.Denied : e ? r.a.Closed : r.a.Default
				},
				l = () => !!Object(c.a)() && (localStorage.removeItem(r.f), !0),
				d = async (e, t, n, o, l, d) => {
					const u = i();
					if (u === r.a.Unsupported) return void d();
					if (Object(c.a)()) {
						const t = localStorage.getItem(r.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + r.i > n) return void d();
						localStorage.setItem(r.h, n.toString())
					}
					if (!t && u === r.a.Denied) return o(!1, !0), void d();
					if (!t && u === r.a.Granted) return l(!1), void d();
					if (!t && u === r.a.Closed) return void d();
					let h = r.a.Default;
					const m = navigator.userAgent;
					switch (Object(s.b)(m) || Object(s.f)(m) ? Object(a.a)(1800).then(() => {
						h === r.a.Default && n()
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
							o(!0, !1), localStorage.setItem(r.f, r.g)
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
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return r
			}));
			var a = n("./src/lib/loadableAction/index.ts");
			const s = Object(a.a)(() => Promise.all([n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				c = Object(a.a)(() => Promise.all([n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				r = Object(a.a)(() => Promise.all([n.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), n.e("ReportFlow")]).then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
			t.a = ({
				className: e,
				style: t = {},
				userId: n
			}) => {
				const {
					processingAvatarImageUrl: s
				} = a.a, o = `url(${s}/defaults/v2/avatar_default_${(e=>{let t=0;for(const n of e)t+=n.charCodeAt();return t%8})(n)}.png)`;
				return c.a.createElement("div", {
					className: Object(r.a)(i.a.avatar, e),
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
					}
				},
				o = Object(a.createContext)(r);

			function i(e) {
				const t = t => s.a.createElement(o.Consumer, null, ({
					apiContext: n,
					gqlContext: a
				}) => s.a.createElement(e, c({
					apiContext: n,
					gqlContext: a
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/models/ReportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			}));
			var a, s, c;
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(a || (a = {})),
			function(e) {
				e.HARASSMENT_AT_ME = "HARASSMENT_AT_ME", e.HARASSMENT_AT_SOMEONE_ELSE = "HARASSSOMEONE_ELSENT_AT_ME", e.VIOLENCE_AT_ME = "VIOLENCE_AT_ME", e.VIOLENCE_AT_SOMEONE_ELSE = "VIOLENCE_AT_SOMEONE_ELSE", e.HATE_CONTENT = "HATE_CONTENT", e.MINOR_SEXUALIZATION = "HARASSMENT_AT_ME", e.PII_ABOUT_ME = "PII_ABOUT_ME", e.PII_ABOUT_SOMEONE_ELSE = "PII_ABOUT_SOMEONE_ELSE", e.INVOLUNTARY_PORN_SELF = "INVOLUNTARY_PORN_SELF", e.INVOLUNTARY_PORN_OTHER = "INVOLUNTARY_PORN_OTHER", e.PROHIBITED_SALES = "PROHIBITED_SALES", e.REPORT_BUTTON_ABUSE = "REPORT_BUTTON_ABUSE", e.IMPERSONATION_SELF = "IMPERSONATION_SELF", e.IMPERSONATION_OTHER = "IMPERSONATION_OTHER", e.COPYRIGHT_SELF = "COPYRIGHT_SELF", e.COPYRIGHT_OTHER = "COPYRIGHT_OTHER", e.TRADEMARK_SELF = "TRADEMARK_SELF", e.TRADEMARK_OTHER = "TRADEMARK_OTHER", e.NETZDG = "NETZDG", e.SELF_HARM = "SELF_HARM", e.SPAM_LINK_FARMING = "SPAM_LINK_FARMING", e.SPAM_UNSOLICITED_PMS = "SPAM_UNSOLICITED_PMS", e.SPAM_COMMENT_FLOODING = "SPAM_COMMENT_FLOODING", e.SPAM_MALWARE = "SPAM_MALWARE", e.SPAM_BOTS = "SPAM_BOTS", e.MISINFORMATION_HEALTH = "MISINFORMATION_HEALTH", e.MISINFORMATION_POLITICS = "MISINFORMATION_POLITICS", e.MISINFORMATION_FABRICATION = "MISINFORMATION_FABRICATION", e.MISINFORMATION_CONSPIRACY = "MISINFORMATION_CONSPIRACY", e.BAN_EVASION = "BAN_EVASION", e.VOTE_MANIPULATION = "VOTE_MANIPULATION"
			}(s || (s = {})),
			function(e) {
				e.R2 = "R2", e.MWEB = "MWEB", e.D2X = "D2X"
			}(c || (c = {}));
			const r = new Set(Object.values(c))
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
		"./src/redditGQL/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"404920cc0308"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Chat~RedesignChat.b3f3ba553ad55916adf9.js.map