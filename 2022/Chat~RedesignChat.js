// https://www.redditstatic.com/desktop2x/Chat~RedesignChat.185d7efaddcb0e14ba69.js
// Retrieved at 1/18/2022, 11:20:14 AM by Reddit Dataminer v1.0.0
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
				return J
			})), n.d(t, "x", (function() {
				return Y
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
				return je
			})), n.d(t, "P", (function() {
				return ve
			})), n.d(t, "O", (function() {
				return Ie
			})), n.d(t, "L", (function() {
				return Ne
			})), n.d(t, "H", (function() {
				return we
			})), n.d(t, "A", (function() {
				return Le
			})), n.d(t, "z", (function() {
				return Ue
			})), n.d(t, "F", (function() {
				return Pe
			})), n.d(t, "N", (function() {
				return Re
			})), n.d(t, "M", (function() {
				return Fe
			})), n.d(t, "C", (function() {
				return Qe
			})), n.d(t, "D", (function() {
				return Je
			})), n.d(t, "E", (function() {
				return Ye
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
				l = n("./src/chat/actions/inviteLink/localStorage.ts"),
				d = n("./src/chat/actions/members.ts"),
				u = n("./src/chat/actions/message/index.ts"),
				h = n("./src/chat/actions/message/unreadCount.ts"),
				m = (n("./src/chat/actions/platform.ts"), n("./src/chat/actions/sidebar.ts")),
				p = n("./src/chat/actions/toast.ts"),
				b = n("./src/chat/actions/tracking.ts"),
				g = n("./src/chat/actions/user.ts"),
				f = n("./src/chat/constants/batchSizes.ts"),
				O = n("./src/chat/constants/channels.ts"),
				j = n("./src/chat/constants/messages.ts"),
				E = n("./src/chat/constants/sendbird.ts"),
				v = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				_ = n("./src/lib/makeGqlRequest/index.ts"),
				C = n("./src/redditGQL/operations/DeclineChatChannelInvite.json"),
				I = n("./src/redditGQL/operations/LeaveChatChannel.json");
			var y = n("./src/chat/endpoints/sendbird/index.ts"),
				x = n("./src/chat/helpers/errors.ts"),
				S = n("./src/chat/helpers/urls/index.ts"),
				N = n("./src/chat/models/Channel/index.ts"),
				w = n("./src/chat/models/Channel/utils.ts"),
				k = n("./src/chat/models/User/inviter.ts"),
				M = n("./src/chat/models/User/member.ts");
			var T = n("./src/chat/selectors/channels.ts");
			const D = (e, t) => {
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
						channelAction: O.a.VIEW_INVITE
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
				L = e => [D(e), A(e)],
				U = e => {
					const t = Object(T.m)(e);
					return {
						channelId: t && t.channelId
					}
				},
				P = e => e.find(e => !!e.channelId);
			var R = n("./src/chat/selectors/experiments.ts"),
				B = n("./src/chat/selectors/platform.ts"),
				H = n("./src/chat/singleton/SendbirdSDK.ts");
			const F = "CHANNEL__ADD_SUCCESS",
				G = "CHANNEL__ADD_FAIL",
				z = "CHANNEL__CREATE_CHANNEL_START",
				V = "CHANNEL__CREATE_CHANNEL_END",
				W = "CHANNEL__SELECT_BEGIN",
				K = "CHANNEL__RESET_UNREAD_COUNT",
				Z = "CHANNEL__SELECT_END",
				q = "CHANNEL__EXPAND_INVITE_LIST",
				Q = "CHANNEL__COLLAPSE_INVITE_LIST",
				X = "CHANNEL__UPDATE_MODEL",
				J = "CHANNEL__INVITED_UPDATE",
				Y = "CHANNEL__JOINED_UPDATE",
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
					const o = Object(T.m)(s),
						i = o && o.firstMessageId,
						l = !!(o && i && o.hasMoreMessages);
					await Object(y.a)(a(), r, e), l && t(Object(u.u)(i)), t(me({
						channelId: e
					}));
					const d = Object(S.getRedirectURL)(Object(S.channelUrl)(e));
					t(Object(c.b)(d))
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
					if (!Object(T.h)(l, e) || !t) return;
					if (!d) throw new x.a("session", d);
					const u = Object(R.p)(l),
						m = Object(R.r)(l),
						b = {
							channelSendbirdId: e,
							inviterUserId: t.id,
							shouldBlockInviter: !n && (u || m),
							shouldReportInviter: !n && m
						},
						g = await ((e, t) => Object(_.a)(e, {
							...C,
							variables: t
						}))(c(), {
							input: b
						});
					if ((null === (o = null === (r = g.error) || void 0 === r ? void 0 : r.fields) || void 0 === o ? void 0 : o.length) || (e => Boolean(e && e.data && e.data.declineChatChannelInvite))(g.body) && (null === (i = g.body.data.declineChatChannelInvite.errors) || void 0 === i ? void 0 : i.length)) return a(Object(p.e)()), Object(x.b)(`Error declining invite: ${g.error}`);
					a(Object(h.c)()), await a(Re(O.b.INVITED, e)), a((e => async t => t(he(e)))(e))
				}, ge = Object(o.a)(J), fe = Object(o.a)(Y), Oe = Object(o.a)(X), je = e => async t => {
					t(Oe({
						channel: e
					}))
				}, Ee = e => async t => {
					await t(ge({
						channel: e
					})), t((e => async (t, n) => {
						const a = n().user.account.id,
							s = e.members.filter(e => e.id !== a).map(e => e.id);
						t(Object(g.v)(s))
					})(e))
				}, ve = (e, t) => async (n, a) => {
					if (e) {
						const c = a(),
							r = Object(T.h)(c, e.channelId);
						if (e.channelState !== O.b.INVITED && !r || t) return;
						if (e = _e(c, e), s()(e, r)) return;
						switch (e.channelState) {
							case O.b.INVITED:
								await n(Ee(e));
								break;
							case O.b.JOINED:
								await n(fe({
									channel: e
								}));
								break;
							default:
								Object(x.b)("Error updating channel. ChannelState not found.")
						}
						n(Object(h.c)())
					}
				}, _e = (e, t) => {
					return Object(B.e)(e) === t.channelId && (t.unreadMessageCount = 0), t
				}, Ce = Object(o.a)($), Ie = e => async (t, n) => {
					const {
						channelId: a
					} = e, s = e.type === N.b.Direct, c = e.channelState === O.b.JOINED;
					!Object(T.h)(n(), e.channelId) && s && c && await t(Me({
						[a]: e
					})), t(Ce({
						channelId: a
					}))
				}, ye = Object(o.a)(K), xe = Object(o.a)(W), Se = Object(o.a)(Z), Ne = () => async (e, t) => {
					const n = t(),
						a = Object(B.e)(n),
						s = Object(B.d)(n),
						{
							CREATE: r,
							DENY: o,
							VIEW_JOIN: h,
							SHARE: p,
							VIEW_INVITE: b,
							INVITE_LINK_SETTINGS: g
						} = O.a,
						f = Object(l.a)(n);
					if (f) return void e(Ue([f]));
					if (s === g) return;
					if (!n.platform.currentPage) return;
					a && (await e(Object(m.d)(a)), e(Object(m.f)(!1))), await e(Object(d.f)()), e(Object(i.i)());
					const j = a && Object(T.h)(n, a);
					if (!j && (s === o || s === r || s === p)) return;
					const v = !(!j || j.channelState !== O.b.JOINED);
					if (j && v && s && O.j.includes(s)) {
						const t = Object(S.getRedirectURL)(Object(S.channelUrl)(j.channelId));
						e(Object(c.b)(t))
					} else if (j && a) {
						if (e(xe({
								channelId: a
							})), void 0 !== s && s !== b) return;
						const {
							previousMessagesData: t
						} = await H.a.enterChannel(j, !1);
						t ? (await e(Object(u.p)(t, j.channelId)), await e(Se()), e(we(a))) : (e(Object(u.B)()), e(Se()))
					} else {
						const t = n.sendbird.sdk.connectionStatus === E.b.Open;
						if (!j && a && t) {
							const t = await H.a.addChannelModelByChannelId(a);
							if (t && !s) {
								const n = Object(S.getRedirectURL)(Object(S.channelAction)(t.channelId, h));
								return void e(Object(c.b)(n))
							}
						}
						e(Fe()), e(Object(u.B)())
					}
				}, we = e => async (t, n) => {
					const a = n(),
						s = e || Object(B.e)(a);
					s && (await t(ye(s)), await H.a.markChannelAsRead(), t(Object(h.c)()))
				}, ke = Object(o.a)(z), Me = Object(o.a)(F), Te = Object(o.a)(G), De = Object(o.a)(V), Ae = (e, t, n) => {
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
				}, Le = (e, t, n) => async (a, s, {
					apiContext: r
				}) => {
					const o = s(),
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
						a(ke());
						const s = Ae(e, d, i);
						if (s.length < 2) return;
						const o = await Object(y.b)(r(), l, s, t);
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
										inviter: Object(k.b)(e.inviter),
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
										members: Object(M.a)(e.members)
									}
								}(o.body, O.b.JOINED),
								{
									channelId: t
								} = e,
								s = Object(S.getRedirectURL)(Object(S.channelUrl)(t));
							m.sortedKeys.includes(t) ? (a(pe(t)), a(Object(b.m)(t))) : h.sortedKeys.includes(t) ? (a(Object(c.b)(s)), a(Object(b.m)(t))) : (await a(Me({
								[t]: e
							})), a(Object(b.m)(t)), await a(Object(c.b)(s))), n && (await H.a.enterChannel(e), await a(Object(u.r)(t, n, j.c.TEXT)))
						} else a(Te()), a(Object(b.ab)(e));
						a(De())
					}
				}, Ue = e => async t => {
					e = e.slice(0, 1), await t(Object(g.v)(e)), t(Le(e)), location.origin === r.a.oldRedditUrl && t(Object(b.n)(e))
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
						l = Object(T.B)(s, "channelSendbirdUrl"),
						d = Object(B.d)(s);
					if (r && o) {
						const n = Ae(e, i);
						(await Object(y.i)(a(), o, n, l)).body && d === O.a.INVITE_MEMBERS ? (t(Object(b.d)()), t(Object(c.a)())) : Object(x.b)("Error inviting user to existing channel")
					}
				}, Re = (e, t) => async (n, a) => {
					const s = a(),
						c = e === O.b.INVITED,
						r = D(s, t),
						o = A(s);
					c ? r.channelId ? n(He(r)) : n(He(o)) : o.channelId ? n(He(o)) : n(Be())
				}, Be = () => async (e, t) => {
					const n = t();
					if (n.channels.firstLoaded) {
						const t = ((e, t) => {
							const n = [...t ? [U(e)] : [], ...L(e)];
							return P(n)
						})(n, !!n.platform.currentPage);
						e(He(t))
					}
				}, He = e => async t => {
					if (e && e.channelId) {
						if (e.channelAction) {
							const n = Object(S.getRedirectURL)(Object(S.channelAction)(e.channelId, e.channelAction));
							t(Object(c.c)(n))
						} else {
							const n = Object(S.getRedirectURL)(Object(S.channelUrl)(e.channelId));
							t(Object(c.c)(n))
						}
						return
					}
					const n = Object(S.getRedirectURL)(S.rootUrl);
					t(Object(c.c)(n))
				}, Fe = e => async (t, n) => {
					const {
						platform: {
							currentPage: a
						}
					} = n();
					if (a && a.urlParams.userIds) {
						const e = a.urlParams.userIds.split(",");
						return t(Ue(e))
					}
					if (e) return t(Re(e));
					const s = Object(v.b)(n());
					if (s) {
						const e = Object(T.h)(n(), s);
						if (e) {
							const n = Object(S.getChannelUrl)(e),
								a = Object(S.getRedirectURL)(n);
							return void t(Object(c.b)(a))
						}
					}
					return t(Be())
				}, Ge = Object(o.a)(ne), ze = Object(o.a)(ae), Ve = Object(o.a)(ee), We = Object(o.a)(te), Ke = Object(o.a)(se), Ze = Object(o.a)(ce), qe = Object(o.a)(oe), Qe = () => async (e, t) => {
					await Promise.all([e($e()), e(Je()), e(Ye())]).catch(x.b);
					const n = t().channels.models;
					await e(Xe(n)), e(qe()), e(Ne())
				}, Xe = e => async t => {
					const n = Object(w.c)(e, [N.b.Direct, N.b.Group]);
					if (!n) return;
					const a = {};
					for (const e in n) {
						const t = n[e];
						t.channelState !== O.b.PARTIAL && (a[t.channelId] = t)
					}
					if (a) {
						const e = [];
						for (const t in a) a[t].members.map(t => e.push(t.id));
						t(Object(g.v)(e))
					}
				}, Je = e => async (t, n) => {
					t(Ge());
					const a = await H.a.getExistingChannels(O.b.INVITED).catch(() => null);
					if (a) {
						const {
							hasMoreChannels: s
						} = a, c = Object(N.g)(a.channels), r = Object(T.u)(n());
						return t(Xe(c)), t(Ke({
							channels: c,
							hasMoreChannels: s
						})), void(s && r < f.a.InitChannels && (null == e ? void 0 : e.recursively) && t(Je({
							recursively: null == e ? void 0 : e.recursively
						})))
					}
					t(ze()), Object(x.b)("Error fetching invited channels")
				}, Ye = () => async (e, t) => {
					var n;
					e(Ve());
					const a = await H.a.getExistingChannels(O.b.JOINED).catch(t => {
						Object(x.b)(t), e(We())
					});
					if (a) {
						const {
							hasMoreChannels: s
						} = a, c = Object(N.g)(a.channels), r = Object(T.v)(t()) + (null === (n = a.channels) || void 0 === n ? void 0 : n.length);
						return e(Ze({
							channels: c,
							hasMoreChannels: s
						})), void(s && r < f.a.InitChannels && e(Ye()))
					}
					e(We())
				}, $e = () => async (e, t) => {
					const n = t(),
						{
							INVITE_LINK_SETTINGS: a
						} = O.a,
						s = Object(B.e)(n),
						c = Object(B.d)(n);
					s && c !== a && await H.a.addChannelModelByChannelId(s).catch(() => e(Fe()))
				}, et = (Object(o.a)(q), Object(o.a)(Q), Object(o.a)(le)), tt = e => async (t, n, {
					gqlContext: a
				}) => {
					var s, c, r;
					const o = n(),
						i = Object(T.B)(o, "channelState");
					t(Object(b.H)());
					const l = {
							channelSendbirdId: e
						},
						d = await ((e, t) => Object(_.a)(e, {
							...I,
							variables: t
						}))(a(), {
							input: l
						});
					if ((null === (c = null === (s = d.error) || void 0 === s ? void 0 : s.fields) || void 0 === c ? void 0 : c.length) || (e => Boolean(e && e.data && e.data.leaveChatChannel))(d.body) && (null === (r = d.body.data.leaveChatChannel.errors) || void 0 === r ? void 0 : r.length)) return t(Object(p.e)()), Object(x.b)(`Error leaving channels: ${d.error}`);
					await t(he(e)), t(Re(i, e))
				}
		},
		"./src/chat/actions/channel/dropdown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return j
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "e", (function() {
				return w
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
			} = l.a, j = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(m.x)(n),
					c = Object(h.getRedirectURL)(Object(h.channelAction)(s, g));
				e(Object(a.b)(c))
			}, E = (e, t) => async n => {
				const s = Object(h.getRedirectURL)(Object(h.inviteLinkSettingsUrl)(e, !!t));
				n(Object(a.b)(s))
			}, v = e => async t => {
				t(Object(r.b)()), t(Object(o.c)({
					tooltipId: e
				})), t(Object(i.eb)())
			}, _ = e => async t => {
				e && (t(Object(i.t)()), window.open(Object(h.viewProfileUrl)(e)))
			}, C = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(m.x)(n),
					c = Object(h.getRedirectURL)(Object(h.channelAction)(s, O));
				e(Object(i.ib)()), e(Object(a.b)(c))
			}, I = "CHANNEL__UPDATE_CHANNEL_NAME", y = Object(s.a)(I), x = e => async (t, n) => {
				const a = Object(m.x)(n());
				if (a) {
					const n = {
							...a,
							name: e
						},
						s = {
							...a
						};
					t(y(n)), await b.a.updateChannel(n).catch(e => {
						Object(u.b)(e), t(y(s))
					})
				}
			}, S = ({
				channelId: e
			}) => async () => {
				b.a.setMyCountPreference(e, l.c.Off).catch(u.b)
			}, N = ({
				channelId: e
			}) => async () => {
				b.a.setMyCountPreference(e, l.c.All).catch(u.b)
			}, w = e => async (t, n, {
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
				t(Object(i.Z)()), await Promise.all([Object(d.m)(a(), e, r), b.a.setPushPreference(e, !1)]).then(() => {
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
				p = "GIF__SEARCH_SUCCESS",
				b = "GIF__SEARCH_ERROR",
				g = "GIF__CLEAR_ERROR",
				f = Object(a.a)(d),
				O = Object(a.a)(u),
				j = Object(a.a)(h),
				E = Object(a.a)(l),
				v = Object(a.a)(m),
				_ = Object(a.a)(p),
				C = Object(a.a)(b),
				I = Object(a.a)(g),
				y = e => async (t, n, {
					gqlContext: a
				}) => {
					const o = n(),
						l = Object(i.g)(o),
						d = Object(i.c)(o);
					if (!l || d) {
						t(f()), t(E(""));
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
						} else t(Object(s.e)()), t(j())
					}
				}, x = (e, t) => async (n, a, {
					gqlContext: r
				}) => {
					var l, d;
					if (!t) return;
					const u = a(),
						h = Object(i.c)(u),
						m = Object(i.b)(u),
						p = t === m,
						b = p ? null === (l = u.gifs.search.models[t]) || void 0 === l ? void 0 : l.pageInfo.endCursor : "";
					if ((null === (d = u.gifs.search.models[t]) || void 0 === d ? void 0 : d.ids.length) && !h && !p) n(E(t));
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
							n(_({
								cursor: b,
								gifsData: s
							}))
						} else n(Object(s.e)()), n(C({
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
				}, N = () => async (e, t) => {
					Object(i.b)(t()) && e(E(""))
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
				return C
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
							n(E(c, t, e))
						} else n(p())
					}
				}, g = "MEMBERS__FETCHING_MEMBERS_COMPLETED", f = Object(c.a)(g), O = "MEMBERS__ADD_CHANNEL_MEMBERS", j = Object(c.a)(O), E = (e, t, n) => async (a, c, {
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
						a(j({
							channelId: e,
							members: o
						}))
					}
					a(f({
						channelId: e,
						hasMoreMembers: n
					}))
				}, v = "MEMBERS__REMOVE_CHANNEL_MEMBERS", _ = Object(c.a)(v), C = () => async e => {
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
				return T
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
				return z
			})), n.d(t, "k", (function() {
				return W
			})), n.d(t, "z", (function() {
				return K
			})), n.d(t, "i", (function() {
				return Q
			})), n.d(t, "x", (function() {
				return J
			})), n.d(t, "b", (function() {
				return Y
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
				return be
			})), n.d(t, "n", (function() {
				return ge
			})), n.d(t, "C", (function() {
				return Oe
			})), n.d(t, "h", (function() {
				return je
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
				p = n("./src/config.ts"),
				b = n("./src/lib/constants/index.ts"),
				g = n("./src/lib/makeRequest/index.ts");
			const f = p.a.embedlyApiKey,
				O = e => e && e.length > 0 && e[0] ? e[0].url : void 0,
				j = e => e.filter(e => !m()(e)).map(e => ({
					name: e.provider_name,
					providerDisplay: e.provider_display,
					title: e.title,
					description: e.description,
					faviconUrl: e.favicon_url,
					imageUrl: O(e.images),
					url: e.url
				}));
			var E = n("./src/chat/actions/message/richUnit.ts"),
				v = n("./src/chat/actions/surveyTrigger/index.ts"),
				_ = n("./src/chat/endpoints/messages/index.tsx"),
				C = (n("./src/chat/endpoints/sendbird/index.ts"), n("./src/chat/helpers/errors.ts")),
				I = n("./src/chat/helpers/urls/index.ts"),
				y = n("./src/chat/models/Message/index.ts"),
				x = n("./src/chat/models/Message/adapter.ts"),
				S = n("./src/chat/selectors/app.ts"),
				N = n("./src/chat/selectors/channels.ts"),
				w = n("./src/chat/selectors/contacts.ts"),
				k = n("./src/chat/selectors/messages.ts"),
				M = n("./src/chat/singleton/SendbirdSDK.ts");
			const T = "MESSAGE__ADD_ONE",
				D = Object(o.a)(T),
				A = (e, t, n) => async (a, s) => {
					const c = s(),
						r = Object(x.c)(n),
						o = await L(t, c);
					return M.a.addMessage(t, n, o).then(t => {
						const n = {
							[t.messageId]: t
						};
						return a(D({
							message: n,
							channelId: e,
							clientMessageId: r
						})), a(Object(d.W)(t)), a(Object(E.c)(t)), t.messageId
					}).catch(e => {
						if (r) {
							const t = `${e.code}: ${e.message}`;
							a(Object(d.db)(r, t)), a(V({
								clientMessageId: r,
								toggle: !0
							}))
						}
						return null
					})
				}, L = async (e, t) => {
					const n = Object(r.d)(e);
					if (!n.length) return [];
					const a = [];
					return [...n.map(e => {
						const n = Object(w.f)(t, e);
						return n || a.push(e), n && n.id
					}).filter(e => e), ...(a.length && s()(await Promise.all(a.slice(0, 3).map(e => M.a.searchMemberByName(e, !0)))) || []).map(e => e && e.id).filter(e => e)]
				}, U = "MESSAGE__ADD_PENDING_ONE", P = Object(o.a)(U), R = (e, t) => async (n, a, {
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
					await n(P(o));
					const i = {
						channelId: e,
						messageData: o.data,
						message: t.downsized.url
					};
					if (!(await Object(_.a)(s(), {
							input: i
						})).ok) {
						const {
							clientMessageId: e
						} = o;
						n(Object(d.db)(e)), n(V({
							clientMessageId: e,
							toggle: !0
						}))
					}
				}, B = (e, t) => async (n, a, {
					gqlContext: s
				}) => {
					const c = a(),
						r = Object(y.b)(c, e, JSON.stringify({
							is_hidden: !0,
							image: {}
						}), u.c.IMAGE, t.id);
					n(P(r));
					const o = {
							channelId: e,
							messageData: r.data,
							message: t.metadata.localUrl,
							messageType: u.c.IMAGE.toUpperCase()
						},
						i = await Object(_.a)(s(), {
							input: o
						});
					if (i.ok && Object(_.b)(i.body)) {
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
						(null == e ? void 0 : e.channelId) && (await M.a.enterChannel(e), await a(F(c, t, n)))
					}
					const r = Object(I.getRedirectURL)(Object(I.channelUrl)(e[e.length - 1]));
					a(Object(c.b)(r))
				}, F = (e, t, n) => async (a, s) => {
					var c;
					const o = s(),
						i = r.b.match(t),
						d = 1 === (null == i ? void 0 : i.length) && 1 === t.trim().split(" ").length;
					if (Object(I.isRedditLink)(null === (c = null == i ? void 0 : i[0]) || void 0 === c ? void 0 : c.url) && d) await a(Z(e, t));
					else if (d) await a(q(e, t));
					else {
						const s = Object(y.b)(o, e, t, n);
						a(P(s)), await a(A(e, t, s.data))
					}
					a(Object(l.removeUserIdFormQuickReplyListByChannelId)(e))
				}, G = (e, t) => async (n, a) => {
					const s = a(),
						c = Object(k.f)(s, t);
					c && (n(V({
						clientMessageId: t,
						toggle: !1
					})), await n(A(e, c.messageData.value, c.data)))
				}, z = "MESSAGE__TOGGLE_PENDING_MESSAGE_ERROR", V = Object(o.a)(z), W = "MESSAGE__REMOVE_PENDING_ONE", K = Object(o.a)(W), Z = (e, t) => async (n, a) => {
					const s = a(),
						c = Object(I.getChatUnitType)(t),
						r = Object(y.b)(s, e, t, c.type);
					r && (n(P(r)), await n(A(e, r.messageData.value, r.data)))
				}, q = (e, t) => async (n, a) => {
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
						}).then(e => e.ok && Array.isArray(e.body) ? e.body : [e.body]).then(j))({
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
							await n(A(e, l.url, s))
						}
					}
				}, Q = "MESSAGE__RECEIVE_ADD_ONE", X = Object(o.a)(Q), J = e => async (t, n) => {
					const {
						messageId: a,
						messageData: {
							clientMessageId: s
						}
					} = e, c = n(), r = Object(N.y)(c) === e.channelId, o = Object(S.e)(c), l = Object(k.f)(c, s), u = Object(k.b)(c, a);
					o && r && t(Object(i.H)(e.channelId)), l ? (e.createdAt = l.createdAt, t(Object(d.Y)(e))) : u && (e.createdAt = u.createdAt), await t(X({
						[a]: e
					})), t(Object(E.c)(e))
				}, Y = "MESSAGE__ADD_LIST", $ = Object(o.a)(Y), ee = (e, t) => async n => {
					e && n($({
						channelId: t,
						...e
					})), n(Object(E.d)(e)), n(Object(v.b)())
				}, te = "MESSAGE__SET_MESSAGE_LIST_IS_LOADED", ne = Object(o.a)(te), ae = "MESSAGE__DELETE_ONE", se = Object(o.a)(ae), ce = e => async (t, n) => {
					const a = n(),
						s = Object(k.b)(a, e);
					s && s.messageType === u.d.USER && M.a.deleteMessage(s).then(() => t(se(s.messageId))).then(() => t(Object(c.a)()))
				}, re = "MESSAGE__RECEIVE_DELETE_ONE", oe = Object(o.a)(re), ie = e => async (t, n) => {
					t(oe(e))
				}, le = "MESSAGE__GET_PREVIOUS_MESSAGES_START", de = "MESSAGE__GET_PREVIOUS_MESSAGES_END", ue = "MESSAGE__GET_PREVIOUS_MESSAGES_ERROR", he = Object(o.a)(le), me = Object(o.a)(de), pe = Object(o.a)(ue), be = e => async (t, n) => {
					const a = Object(N.B)(n(), "channelId");
					t(he(a)), t(Object(d.gb)()), a && await M.a.getPreviousMessages(e).then(e => {
						t(me({
							channelId: a,
							...e
						})), t(Object(E.d)(e))
					}).catch(() => t(pe(a)))
				}, ge = "MESSAGE__UNCOLLAPSE", fe = Object(o.a)(ge), Oe = e => async t => {
					t(fe(e))
				}, je = "MESSAGE__HIDE_REPORT_PROMPT_FOR_COLLAPSE_MESSAGE", Ee = Object(o.a)(je)
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
				return j
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "d", (function() {
				return v
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
				j = e => async (t, n) => {
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
						t(_(a))
					}
				}, _ = e => async (t, n, {
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
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "b", (function() {
				return p
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
				p = "SENDBIRD_CONFIG__SET_MEDIA_HOST ",
				b = Object(a.a)(p),
				g = () => async (e, t, {
					apiContext: n
				}) => {
					const a = await Object(s.d)(n());
					if (a.ok) {
						const t = f(a.body.reactions.short_list);
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
							reactions: f(a.body.reactions.short_list)
						})), e(b(a.body.media_host))])
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
				return p
			})), n.d(t, "k", (function() {
				return g
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "h", (function() {
				return j
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
				}, f = () => async (e, t) => {
					const n = t(),
						{
							account: c,
							session: r
						} = n.user;
					if (r && c) {
						const e = Object(a.c)(s.q.CHAT, s.y.CHAT_SENDBIRD_SESSION_KEY, c.id);
						if (Object(a.b)(e)) {
							const t = {};
							Object(a.d)(e, t, new Date)
						}
					}
				}, O = "SENDBIRD__ADD_MEMBERS_TO_KNOWN_CONTACTS", j = Object(c.a)(O), E = "SENDBIRD__SET_REDDIT_CONTACT_LIST", v = 6 * s.Q, _ = Object(c.a)(E), C = () => async (e, t, {
					apiContext: n
				}) => {
					const c = t(),
						r = c.contacts.models,
						o = Object(a.c)(s.q.CHAT, s.y.CHAT_SENDBIRD_CONTACTS_KEY, c.user.account.id),
						d = Object(a.b)(o);
					if (d && d.version === l.a) return void e(_(d.data));
					const u = t().user.session;
					if (!u) return;
					const h = await Object(i.e)(n(), u, 25),
						m = Object(l.c)(h.body).map(e => r[e.id] ? r[e.id] : e),
						p = {
							version: l.a,
							data: m
						};
					Object(a.d)(o, p, v), e(_(m))
				}, I = "SENDBIRD__IDENTIFY_CONTACT_BEGIN", y = "SENDBIRD__IDENTIFY_CONTACT_END", x = Object(c.a)(I), S = Object(c.a)(y), N = e => async (t, n, {
					apiContext: a
				}) => {
					if (e.username === s.E) return;
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
						} else t(Object(r.bb)(e.username));
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
				return p
			})), n.d(t, "a", (function() {
				return b
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
			const p = "SENDBIRD_SDK__CONNECT_FAIL",
				b = "SENDBIRD_SDK__CONNECT_SUCCESS",
				g = "SENDBIRD_SDK__DISCONNECT",
				f = "SENDBIRD_SDK__UPDATE_CONNECTION_STATUS",
				O = Object(a.a)(p),
				j = Object(a.a)(b),
				E = e => async (t, n) => {
					const a = n(),
						o = Object(u.f)(a),
						p = Object(u.e)(a),
						b = Object(u.c)(a),
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
						})), e = e || p.token;
						try {
							if (await m.a.connect(b, e, n, t), t(j()), o) {
								const e = !0;
								t(Object(c.v)(e)), t(Object(i.g)({
									toast: d.a.ConnectionOpen
								})), t(Object(i.c)(3))
							}
							t(Object(r.c)()), t(Object(s.C)())
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
				}, v = Object(a.a)(g), _ = () => async e => {
					await m.a.disconnect(), e(v()), e(Object(o.i)())
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
				return E
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "W", (function() {
				return _
			})), n.d(t, "db", (function() {
				return C
			})), n.d(t, "X", (function() {
				return I
			})), n.d(t, "hb", (function() {
				return y
			})), n.d(t, "y", (function() {
				return x
			})), n.d(t, "z", (function() {
				return S
			})), n.d(t, "T", (function() {
				return N
			})), n.d(t, "K", (function() {
				return w
			})), n.d(t, "gb", (function() {
				return k
			})), n.d(t, "I", (function() {
				return M
			})), n.d(t, "D", (function() {
				return T
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "cb", (function() {
				return A
			})), n.d(t, "F", (function() {
				return L
			})), n.d(t, "h", (function() {
				return U
			})), n.d(t, "eb", (function() {
				return P
			})), n.d(t, "V", (function() {
				return R
			})), n.d(t, "C", (function() {
				return B
			})), n.d(t, "H", (function() {
				return H
			})), n.d(t, "M", (function() {
				return F
			})), n.d(t, "L", (function() {
				return G
			})), n.d(t, "c", (function() {
				return z
			})), n.d(t, "A", (function() {
				return V
			})), n.d(t, "S", (function() {
				return W
			})), n.d(t, "ib", (function() {
				return K
			})), n.d(t, "o", (function() {
				return Z
			})), n.d(t, "w", (function() {
				return q
			})), n.d(t, "O", (function() {
				return Q
			})), n.d(t, "k", (function() {
				return X
			})), n.d(t, "bb", (function() {
				return J
			})), n.d(t, "ab", (function() {
				return Y
			})), n.d(t, "m", (function() {
				return $
			})), n.d(t, "j", (function() {
				return ee
			})), n.d(t, "d", (function() {
				return te
			})), n.d(t, "p", (function() {
				return ne
			})), n.d(t, "r", (function() {
				return ae
			})), n.d(t, "t", (function() {
				return se
			})), n.d(t, "q", (function() {
				return ce
			})), n.d(t, "s", (function() {
				return re
			})), n.d(t, "f", (function() {
				return oe
			})), n.d(t, "B", (function() {
				return ie
			})), n.d(t, "P", (function() {
				return le
			})), n.d(t, "Z", (function() {
				return de
			})), n.d(t, "n", (function() {
				return ue
			})), n.d(t, "i", (function() {
				return he
			})), n.d(t, "v", (function() {
				return me
			})), n.d(t, "E", (function() {
				return pe
			})), n.d(t, "G", (function() {
				return be
			})), n.d(t, "u", (function() {
				return ge
			})), n.d(t, "U", (function() {
				return fe
			})), n.d(t, "J", (function() {
				return Oe
			})), n.d(t, "N", (function() {
				return je
			})), n.d(t, "fb", (function() {
				return Ee
			})), n.d(t, "R", (function() {
				return ve
			})), n.d(t, "b", (function() {
				return _e
			})), n.d(t, "Q", (function() {
				return Ce
			})), n.d(t, "x", (function() {
				return Ie
			})), n.d(t, "Y", (function() {
				return ye
			})), n.d(t, "g", (function() {
				return xe
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
			var j, E;
			! function(e) {
				e.AWARD_RECEIVED = "award_received"
			}(j || (j = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND", e[e.THIRD = 3] = "THIRD"
			}(E || (E = {}));
			const v = () => async (e, t) => {
				Object(O.b)(t())
			}, _ = e => async (t, n) => {
				Object(b.l)(n(), e)
			}, C = (e, t) => async (n, a) => {
				Object(b.p)(a(), e, t)
			}, I = (e, t) => async (n, a) => {
				Object(b.m)(a(), e, t)
			}, y = () => async (e, t) => {
				Object(b.r)(t())
			}, x = () => async (e, t) => {
				Object(b.d)(t())
			}, S = () => async (e, t) => {
				Object(b.e)(t())
			}, N = (e, t, n, a) => async (s, c) => {
				Object(b.k)(c(), e, t, n, a)
			}, w = (e, t, n) => async (a, s) => {
				Object(b.i)(s(), e, t, n)
			}, k = () => async (e, t) => {
				Object(b.q)(t())
			}, M = () => async (e, t) => {
				Object(b.h)(t())
			}, T = () => async (e, t) => {
				Object(b.f)(t())
			}, D = () => async (e, t) => {
				Object(b.a)(t())
			}, A = () => async (e, t) => {
				Object(b.n)(t())
			}, L = e => async (t, n) => {
				Object(b.g)(n(), e)
			}, U = () => async (e, t) => {
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
			}, R = e => async (t, n) => {
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
			}, H = () => async (e, t) => {
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
			}, F = () => async (e, t) => {
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
				Object(g.c)(n(), e)
			}, J = e => async (t, n) => {
				Object(i.c)(n(), e) && Object(g.f)(n())
			}, Y = e => async (t, n) => {
				const a = n(),
					s = e && e.filter(e => e !== a.user.account.id),
					c = s && s[0],
					r = a.contacts.models[c],
					o = r && r.name,
					l = Object(i.a)(n(), o);
				l && Object(g.e)(n(), l)
			}, $ = e => async (t, n) => {
				Object(g.d)(n(), e)
			}, ee = () => async (e, t) => {
				Object(g.b)(t())
			}, te = () => async (e, t) => {
				Object(g.a)(t())
			}, ne = e => async (t, n) => {
				const a = n(),
					s = Object(o.g)(a, e);
				Object(f.d)(a, s, s ? j.AWARD_RECEIVED : void 0)
			}, ae = e => async (t, n) => {
				const a = n(),
					s = Object(o.g)(a, e);
				Object(f.f)(a, s, s ? j.AWARD_RECEIVED : void 0)
			}, se = () => async (e, t) => {
				const n = t();
				Object(d.d)(n) === c.a.VIEW_INVITE && Object(f.h)(n)
			}, ce = () => async (e, t) => {
				const n = t();
				Object(d.d)(n) === c.a.VIEW_INVITE && Object(f.e)(n)
			}, re = (e, t) => async (n, a) => {
				const s = a();
				if (Object(d.d)(s) === c.a.VIEW_INVITE) {
					const n = t.pop(),
						a = null == n ? void 0 : n.messageId;
					Object(f.g)(s, e, a)
				}
			}, oe = () => async (e, t) => {
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
			}, ie = e => async (t, n) => {
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
			}, le = () => async (e, t) => {
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
			}, de = () => async (e, t) => {
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
			}, ue = e => async (t, n) => {
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
			}, he = () => async (e, t) => {
				Object(O.a)(t())
			}, me = () => async (e, t) => {
				Object(O.c)(t())
			}, pe = e => async (t, n) => {
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
			}, be = e => async (t, n) => {
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
			}, ge = () => async (e, t) => {
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
			}, fe = e => async (t, n) => {
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
			}, Oe = () => async (e, t) => {
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
			}, Ee = e => async (t, n) => {
				Object(f.j)(n(), e)
			}, ve = e => async (t, n) => {
				Object(f.j)(n(), e)
			}, _e = (e, t) => async (n, a) => {
				Object(f.a)(a(), e, t)
			}, Ce = (e, t) => async (n, a) => {
				Object(f.i)(a(), e, t)
			}, Ie = (e, t) => async (n, a) => {
				Object(b.c)(a(), e, t, j.AWARD_RECEIVED)
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
						t(_(e))
				}
			}, xe = e => async (t, n) => {
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
				return j
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "f", (function() {
				return v
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
				j = Object(a.a)(O),
				E = "UPLOAD__ADD_PENDING",
				v = Object(a.a)(E),
				_ = "UPLOAD__CHANGE_STATUS",
				C = Object(a.a)(_),
				I = e => async (t, n) => {
					const a = n(),
						s = Object(g.n)(a);
					s && t(C({
						id: e,
						channelId: s,
						status: b.c.Canceled
					}))
				}, y = "UPLOAD__CHANGE_PROGRESS", x = Object(a.a)(y), S = ({
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
									n(x({
										id: e,
										progress: a
									}))
								}
							})
						})(e, t, a), t)) ? n : null
					}
				}, N = (e, t) => async (n, a, {
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
									status: b.c.Submit
								}));
								const c = await e(Object(s.q)(n, t));
								c ? (t.messageId = c.messageId, t.redditId = c.redditId) : e(C({
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
							if (!s) return void e(C({
								id: a,
								channelId: n,
								status: b.c.Failed
							}));
							e(C({
								id: a,
								channelId: n,
								status: b.c.Uploading
							}));
							const c = await e(S(t));
							c ? (e(C({
								id: a,
								channelId: n,
								status: b.c.Processing
							})), await e(N(c, s)) ? e(C({
								id: a,
								channelId: n,
								status: b.c.Success
							})) : e(C({
								id: a,
								channelId: n,
								status: b.c.Failed
							}))) : e(C({
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
				return C
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "r", (function() {
				return T
			})), n.d(t, "u", (function() {
				return D
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "v", (function() {
				return H
			})), n.d(t, "h", (function() {
				return F
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
				return J
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
				j = n("./src/chat/models/Experiment/index.ts"),
				E = n("./src/chat/models/User/index.ts"),
				v = n("./src/chat/selectors/channels.ts"),
				_ = n("./src/chat/singleton/SendbirdSDK.ts");
			const C = "USER__ACCOUNT_FETCH_COMPLETED",
				I = "USER__REDDAID_RECEIVED",
				y = "USER__LOID_RECEIVED",
				x = "USER__SESSION_TRACKER_RECEIVED",
				S = "FETCH_EXPERIMENTS_COMPLETED",
				N = Object(i.a)(y),
				w = Object(i.a)("USER__ACCOUNT_FETCH_PENDING"),
				k = Object(i.a)(C),
				M = Object(i.a)("USER__ACCOUNT_FETCH_FAILED"),
				T = Object(i.a)(I),
				D = Object(i.a)(x),
				A = Object(i.a)(S),
				L = () => async (e, t, {
					apiContext: n
				}) => {
					const a = t(),
						{
							session: s,
							account: c,
							experiments: o
						} = a.user;
					if (!s || c && !r()(o)) return;
					e(w());
					const i = await Object(m.c)(n());
					if (i.ok && i.body && i.body.features) {
						const {
							body: t,
							body: {
								features: n
							}
						} = i, a = Object(E.a)(t), s = Object(j.a)(n), c = !!a.prefNightmode;
						e(k(a)), e(A(s)), e(Object(d.switchTheme)(c))
					} else e(M(i.error))
				}, U = "USER__USERS_FETCH_COMPLETED", P = Object(i.a)("USER__USERS_FETCH_PENDING"), R = Object(i.a)(U), B = Object(i.a)("USER__USERS_FETCH_FAILED"), H = e => async (t, n, {
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
							const n = Object(E.b)(e.body.data.redditorsInfoByIds);
							n ? t(R(n)) : Object(g.b)(`Failed to normalize RedditorsInfoByIds: ${e.body.data.redditorsInfoByIds}`)
						} else t(B())
				}, F = "USERS__USERS_ADD_SELECTED", G = Object(i.a)(F), z = e => async t => {
					t(G(e)), t(Object(u.k)(e))
				}, V = "USERS__USERS_REMOVE_SELECTED", W = Object(i.a)(V), K = "USERS__USERS_REMOVE_ALL_SELECTED", Z = Object(i.a)(K), q = "USERS__BLOCK_USER_COMPLETED", Q = Object(i.a)(q), X = Object(i.a)("USERS__BLOCK_USER_FAILED"), J = (e, t) => async (n, a, {
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
					const j = await Object(m.a)(s(), e);
					j && j.ok && p ? (await _.a.hideChannel(), n(Q({
						userId: e,
						username: i
					})), t || (n(Object(l.I)(O)), n(Object(l.M)(u)))) : j && j.ok && !p ? (n(Q({
						userId: e,
						username: i
					})), t || n(Object(o.a)())) : j && n(X(j.error))
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
			})), n.d(t, "b", (function() {
				return b
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
				})), t(Object(c.eb)())
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
			const j = e => {
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
				E = e => s.a.createElement("sub", {
					className: Object(l.a)(O.a.MessagePreview, {
						[O.a.active]: e.isActive,
						[O.a.unread]: e.isInvited || e.isUnread
					})
				}, s.a.createElement(j, e));
			var v = n("./src/chat/constants/channels.ts"),
				_ = n("./src/chat/controls/Counter/index.tsx"),
				C = n("./src/chat/helpers/urls/index.ts"),
				I = n("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				y = n("./src/chat/selectors/channels.ts"),
				x = n("./src/chat/components/ChatListItem/index.m.less"),
				S = n.n(x);
			const N = ({
				active: e,
				children: t,
				unread: n
			}) => s.a.createElement("h4", {
				className: Object(l.a)(S.a.ItemTitleName, {
					[S.a.active]: e,
					[S.a.unread]: n
				})
			}, t);
			var w = ({
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
					const O = Object(c.e)(t => Object(y.t)(t, e)),
						j = Object(c.e)(t => Object(y.k)(t, e)),
						x = Object(c.e)(t => Object(y.K)(t, {
							channelId: e
						})),
						w = Object(c.e)(g.q),
						k = u === v.b.INVITED,
						M = Object(a.useMemo)(() => k ? Object(C.channelAction)(e, v.a.VIEW_INVITE) : Object(C.channelUrl)(e), [k, e]),
						T = Object(a.useMemo)(() => Object(C.getRedirectURL)(M), [M]),
						D = Object(a.useMemo)(() => r ? p : b, [p, b, r]);
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
					}, s.a.createElement(N, {
						unread: m || k,
						active: o
					}, s.a.createElement("span", {
						className: S.a.ChannelName
					}, j)), s.a.createElement("div", {
						className: S.a.Description
					}, s.a.createElement(E, {
						currentUserId: n,
						isGroup: r,
						isInvited: k,
						isUnread: m,
						isActive: o,
						message: h,
						channelData: t
					}), s.a.createElement(_.b, {
						count: D
					}))), x && w && s.a.createElement(I.a, {
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
					i = Object(c.e)(y.n),
					l = Object(r.a)(i),
					d = Object(c.e)(e => l && Object(y.l)(e, l)),
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
					return s.a.createElement(w, {
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
				d = n("./node_modules/lodash/difference.js"),
				u = n.n(d),
				h = n("./src/higherOrderComponents/asTooltip.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				p = n("./src/chat/actions/user/dropdown.ts"),
				b = n("./src/chat/constants/dropdown.ts"),
				g = n("./src/chat/controls/Button/index.tsx"),
				f = n("./src/chat/controls/Dropdown/index.tsx"),
				O = n("./src/chat/controls/Dropdown/Row.tsx"),
				j = n("./src/chat/helpers/chatSelector.ts"),
				E = n("./src/chat/helpers/dom.ts"),
				v = n("./src/chat/controls/Svg/index.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var C = e => c.a.createElement(v.a, _({}, e, {
					viewBox: "0 0 14 4"
				}), c.a.createElement("g", {
					transform: "translate(-475.000000, -286.000000)"
				}, c.a.createElement("path", {
					d: "M485.479375,287.804009 C485.479375,288.796214 486.265328,289.608018 487.225938,289.608018 C488.186547,289.608018 488.9725,288.796214 488.9725,287.804009 C488.9725,286.811804 488.186547,286 487.225938,286 C486.265328,286 485.479375,286.811804 485.479375,287.804009 M480.239688,287.804009 C480.239688,288.796214 481.025641,289.608018 481.98625,289.608018 C482.946859,289.608018 483.732813,288.796214 483.732813,287.804009 C483.732813,286.811804 482.946859,286 481.98625,286 C481.025641,286 480.239688,286.811804 480.239688,287.804009 M478.493125,287.804009 C478.493125,286.811804 477.707172,286 476.746563,286 C475.785953,286 475,286.811804 475,287.804009 C475,288.796214 475.785953,289.608018 476.746563,289.608018 C477.707172,289.608018 478.493125,288.796214 478.493125,287.804009"
				}))),
				I = n("./src/chat/selectors/channels.ts"),
				y = n("./src/chat/components/MemberActionDropdown/index.m.less"),
				x = n.n(y);
			const S = m.a.wrapped(e => c.a.createElement("span", {
					className: Object(i.a)({
						[x.a.active]: e.id === e.dropdownId
					}, e.className)
				}, e.children), "Wrapper", x.a),
				N = Object(h.a)(m.a.wrapped(f.a, "Component", x.a)),
				w = m.a.wrapped(O.a, "DropdownRow", x.a),
				k = m.a.wrapped(g.d, "IconButton", x.a),
				M = e => c.a.createElement("span", {
					className: e.className,
					id: e.id,
					onClick: e.onClick,
					role: "button"
				}, c.a.createElement(k, null, c.a.createElement(C, null))),
				T = Object(j.a)({
					dropdownId: e => e.tooltipId || "",
					currentUserIsChannelMod: I.a
				});
			class D extends s.Component {
				constructor() {
					super(...arguments), this.onOptionClick = e => {
						switch (e) {
							case b.b.Block:
								return this.props.onBlockUser(this.props.userId);
							case b.b.Kick:
								return this.props.onKickUser(this.props.userId);
							default:
								return
						}
					}, this.getContainer = e => document.getElementsByClassName(this.props.containerClassName || b.a)[e], this.getDropdownOptions = () => {
						const {
							isBlockedUser: e,
							currentUserIsChannelMod: t
						} = this.props, {
							Block: n,
							Kick: a
						} = b.b;
						return e && !t ? u()(b.c.members, [n, a]) : t ? e ? u()(b.c.members, [n]) : b.c.members : u()(b.c.members, [a])
					}, this.getDropdownOptionDisplayText = e => {
						switch (e) {
							case b.b.Block:
								return a.fbt._("Block", null, {
									hk: "t44ep"
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
							onOpenDropdown: s
						},
						getDropdownOptions: r,
						getContainer: o
					} = this, i = r();
					return !!i.length && c.a.createElement(S, {
						className: e,
						id: a,
						dropdownId: t
					}, c.a.createElement(M, {
						id: a,
						menu: !0,
						onClick: Object(E.b)(s)
					}), c.a.createElement(N, {
						tooltipId: a,
						isOpen: t === a,
						container: o(n),
						closeOnClickOutside: !0
					}, i.map((e, t) => c.a.createElement(w, {
						key: t,
						displayText: this.getDropdownOptionDisplayText(e),
						onClick: Object(E.b)(() => this.onOptionClick(e))
					}))))
				}
			}
			var A = Object(r.b)(T, (e, t) => ({
					onOpenDropdown: () => e(Object(p.c)(t.id)),
					onBlockUser: t => e(Object(p.a)(t)),
					onKickUser: t => e(Object(p.b)(t))
				}))(D),
				L = n("./src/chat/controls/Title/index.tsx"),
				U = n("./src/chat/icons/Nsfw/index.tsx"),
				P = n("./src/chat/icons/Userpic/index.tsx"),
				R = n("./src/chat/selectors/members.ts"),
				B = n("./src/chat/selectors/user.ts"),
				H = n("./src/chat/components/ChatMemberList/index.m.less"),
				F = n.n(H);
			const G = ({
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
				selectIndex: d,
				minimal: u,
				onClick: h,
				useNSFWIcons: m,
				modIndicator: p,
				onSelectName: g
			}) => {
				const f = Object(r.d)(),
					O = Object(r.e)(e => t || Object(R.b)(e, n) || []),
					j = Object(r.e)(e => Object(I.B)(e, "type")),
					E = Object(r.e)(B.a);
				return Object(s.useEffect)(() => {
					((e, t, n) => {
						if (n && void 0 !== t && e.length >= t) {
							const a = e[t];
							a && n(a.name)
						}
					})(t, d, g)
				}, [t, d, g]), c.a.createElement("ul", {
					className: e
				}, O && O.map((e, t) => c.a.createElement(G, {
					key: e.name,
					className: Object(i.a)(F.a.ListItem, b.a, {
						[F.a.selected]: d === t,
						[F.a.withMenu]: !u
					}),
					onClick: () => {
						h ? h(e.name) : (async e => {
							f(Object(l.t)()), await f(Object(l.C)()), window.open(`${o.a.redditUrl}/user/${e}`)
						})(e.name)
					}
				}, c.a.createElement("span", {
					className: F.a.IconContainer
				}, m && e.isNSFW ? c.a.createElement(U.b, null) : c.a.createElement(P.a, {
					userId: e.id
				})), c.a.createElement(L.a, {
					className: F.a.Title
				}, e.name), e.isModerator && p && c.a.createElement("span", {
					className: F.a.Info
				}, j && a.fbt._("Host", null, {
					hk: "4berci"
				})), e.isNSFW && c.a.createElement("span", {
					className: F.a.Warning
				}, a.fbt._("NSFW", null, {
					hk: "36qPno"
				})), e.isBlockedByMe && c.a.createElement("span", {
					className: F.a.Warning
				}, a.fbt._("Blocked", null, {
					hk: "1RUrSV"
				})), !u && e.id !== E && c.a.createElement(A, {
					className: F.a.MemberActionDropdown,
					channelId: n,
					containerClassName: b.a,
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
				return Oc
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
				j = n.n(O);
			var E = e => r.a.createElement("label", {
					className: e.className,
					tabIndex: 0
				}, e.children ? e.children : r.a.createElement(f, {
					className: j.a.Icon
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
					className: j.a.Input
				})),
				v = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/chat/actions/toast.ts")),
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
			var M = () => {
				const e = Object(o.d)(),
					{
						isOver: t,
						isDrop: n
					} = Object(o.e)(I.a),
					a = Object(o.e)(I.b),
					s = Object(o.e)(C.n),
					c = a.length >= 8;
				return {
					uploads: a,
					isDrop: n,
					isOver: t,
					isLimited: c,
					setFiles: (t, n) => {
						if (c) return void e(Object(v.f)([y]));
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
						n(e, _.b.Drop), t(Object(l.G)(e.length))
					}
				})
			}

			function D(e) {
				const t = Object(o.d)(),
					{
						setFiles: n
					} = M();
				return r.a.createElement(E, {
					className: e.className,
					onChange: e => {
						n(e, _.b.Gallery), t(Object(l.u)())
					}
				}, e.children)
			}
			var A = n("./node_modules/lodash/debounce.js"),
				L = n.n(A),
				U = n("./node_modules/lodash/map.js"),
				P = n.n(U),
				R = n("./node_modules/lodash/sortBy.js"),
				B = n.n(R),
				H = n("./src/chat/actions/channel.ts"),
				F = n("./src/chat/actions/container.ts"),
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
				J = n("./src/chat/models/Channel/index.ts");
			const {
				fbt: Y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var $ = ({
					channel: e
				}) => {
					const t = e.type === J.b.Direct,
						n = e.members.filter(e => e.isBlockedByMe);
					if (t) {
						const e = null == n ? void 0 : n[0];
						if (e) return r.a.createElement("span", {
							className: K.a.blockedUserMessage
						}, Y._("@{name} blocked", [Y._param("name", null == e ? void 0 : e.name)], {
							hk: "wJJtg"
						}))
					} else {
						if (e.members.filter(e => e.state === J.e.Joined && e.isBlockedByMe).length) return r.a.createElement(X, {
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
						c = Object(o.e)(C.J),
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
						u = (a || n || l.length) && !s || s && a ? r.a.createElement(D, {
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
					}, `${e.name}${t<n.length-1?",":""}`)))), t.type === J.b.Group && r.a.createElement("div", {
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
				je = n.n(Oe),
				Ee = n("./node_modules/lodash/throttle.js"),
				ve = n.n(Ee),
				_e = n("./src/chat/actions/channel/draftMessage.ts"),
				Ce = n("./src/chat/actions/gifs/index.ts");
			const Ie = "/";
			var ye = n("./node_modules/react-router-redux/es/index.js"),
				xe = n("./src/lib/constants/index.ts"),
				Se = n("./src/telemetry/models/Event.ts"),
				Ne = n("./src/chat/actions/tooltip.ts"),
				we = n("./src/chat/components/MessageInput/constants.ts"),
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
				De = function(e) {
					return (/^(@|u\/)([^\s]+)/g.exec(e) || [])[2] || ""
				},
				Ae = function(e, t) {
					const {
						word: n
					} = Te(e, t);
					return {
						hasUsername: /^(@|u\/)([^\s]+)?$/g.test(n),
						username: De(n)
					}
				},
				Le = function(e, t, n) {
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
				Ue = e => Boolean(e.match(/^(\/)(\w+)?$/g));
			var Pe, Re = n("./src/chat/constants/users.ts"),
				Be = n("./src/chat/endpoints/accounts/index.ts"),
				He = n("./src/chat/endpoints/sendbird/index.ts"),
				Fe = n("./src/chat/helpers/urls/index.ts"),
				Ge = n("./src/chat/models/Channel/utils.ts"),
				ze = n("./src/chat/models/Contact/index.ts"),
				Ve = n("./src/chat/selectors/contacts.ts");
			! function(e) {
				e.GIF = "gif", e.SNOOMOJI = "snoomoji", e.INVITE = "invite", e.MEMBERS = "members", e.MUTE = "mute", e.UNMUTE = "unmute", e.LEAVE = "leave", e.KICK = "kick", e.NEW_CHAT = "new_chat", e.DIRECT = "direct", e.TEXT_EMOJI = "text_emoji"
			}(Pe || (Pe = {}));
			const {
				Group: We
			} = J.b, Ke = {
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
					const n = Object(C.h)(a(), t);
					if ((null == n ? void 0 : n.type) === J.b.Group) {
						if (e === xe.E) return;
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
						n.length && await Object(He.i)(s(), r, n, Object(Ge.a)(t))
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
					e && t(Object(Ce.l)(e)), t(Object(Ne.c)({
						tooltipId: we.b
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
					e && t && Me.b.includes(e) ? n(Object(G.r)(t, e.trim(), ke.c.SNOOMOJI)) : n(Object(Ne.c)({
						tooltipId: we.e
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
						const a = Object(C.h)(n(), e);
						(null == a ? void 0 : a.type) === J.b.Group && t(Object(ie.j)())
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
					e && t(Object(H.G)(e))
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
					if (!Object(C.a)(c)) return;
					const o = De(e);
					if (t && o && r) {
						const e = Object(C.h)(a(), t);
						if ((null == e ? void 0 : e.type) === J.b.Group) {
							if (o === xe.E) return;
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
							e && n(Object(ye.b)(Object(Fe.userActionUrl)(t, e, Re.a.Kick, {
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
					const t = Object(Fe.getRedirectURL)(Object(Fe.channelUrl)("create"));
					e(Object(ye.b)(t))
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
					const a = Object(C.q)(n(), e);
					if (a) {
						const e = Object(Fe.getRedirectURL)(Object(Fe.channelUrl)(a.channelId));
						t(Object(ye.b)(e))
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
						})), n(Object(_e.f)(t))
					}
				})
			};
			var Je = n("./src/chat/actions/surveyTrigger/index.ts"),
				Ye = n("./src/higherOrderComponents/asTooltip.tsx"),
				$e = n("./src/chat/components/Scroller/index.tsx");
			const et = "tooltip-container";
			var tt = n("./src/chat/controls/Dropdown/index.tsx"),
				nt = n("./src/chat/selectors/app.ts"),
				at = n("./node_modules/reselect/es/index.js");
			const st = Object(at.a)(e => e.tooltipId, e => e);
			var ct = n("./src/chat/components/MessageTooltip/index.m.less"),
				rt = n.n(ct);
			const ot = "MessageInputTooltip--Container",
				it = Object(Ye.a)(tt.a),
				lt = ({
					children: e
				}) => r.a.createElement("div", {
					className: rt.a.Picker
				}, e);
			var dt = ({
				id: e,
				isOpen: t,
				children: n,
				arrowOffset: a = 15,
				shouldArrowShow: s = !0
			}) => {
				const c = Object(o.e)((e => t => t.tooltipId === e)(e)),
					l = Object(o.d)();
				return r.a.createElement(it, {
					className: Object(i.a)(rt.a.Dropdown, {
						[rt.a.noArrow]: !s
					}),
					tooltipId: ot,
					container: document.getElementById(et),
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
					className: rt.a.DropdownWrapper,
					onClick: () => l(Object(Ne.d)())
				}, r.a.createElement(lt, null, n, s && r.a.createElement("span", {
					className: rt.a.Arrow,
					style: {
						right: `${a}px`
					}
				}))))
			};
			var ut = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				ht = n("./src/chat/controls/Gif/index.tsx");

			function mt() {
				return (mt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var pt = e => r.a.createElement(b.a, mt({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? r.a.createElement("path", {
					d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375Zm3.53,12.1-1.06,1.06L10,11.061,7.53,13.53,6.47,12.47,8.939,10,6.47,7.53,7.53,6.47,10,8.939,12.47,6.47l1.06,1.06L11.061,10Z"
				}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("path", {
					d: "M10,.375A9.625,9.625,0,1,0,19.625,10,9.636,9.636,0,0,0,10,.375Zm0,18A8.375,8.375,0,1,1,18.375,10,8.384,8.384,0,0,1,10,18.375Z"
				}), r.a.createElement("polygon", {
					points: "12.558 6.558 10 9.116 7.442 6.558 6.558 7.442 9.116 10 6.558 12.558 7.442 13.442 10 10.884 12.558 13.442 13.442 12.558 10.884 10 13.442 7.442 12.558 6.558"
				}))),
				bt = n("./src/chat/icons/svgs/Search/index.tsx"),
				gt = n("./src/chat/selectors/gifs.ts"),
				ft = n("./src/chat/components/MessageTooltip/Picker/Gif/index.m.less"),
				Ot = n.n(ft);
			const jt = ({
					children: e
				}) => {
					const t = Object(o.e)(nt.g);
					return r.a.createElement("div", {
						className: Object(i.a)(Ot.a.Wrapper, {
							[Ot.a.embedded]: t
						})
					}, e)
				},
				Et = ({
					children: e,
					isVisible: t,
					onClick: n
				}) => t ? r.a.createElement("div", {
					className: Ot.a.ClearIcon,
					onClick: n
				}, e) : null,
				vt = () => {
					const e = Object(o.e)(gt.b),
						[t, n] = Object(c.useState)(() => e),
						a = Object(c.useRef)(null),
						s = Object(o.d)(),
						i = Object(c.useCallback)(L()(e => {
							(null == e ? void 0 : e.length) >= 2 ? s(Object(Ce.k)(10, e)) : s(Object(Ce.l)(""))
						}, 500), []);
					return Object(c.useEffect)(() => {
						var e;
						null === (e = null == a ? void 0 : a.current) || void 0 === e || e.focus()
					}, [a]), r.a.createElement("div", {
						className: Ot.a.SearchBarWrapper,
						onClick: e => e.stopPropagation()
					}, r.a.createElement(bt.a, {
						className: Ot.a.SearchIcon
					}), r.a.createElement("input", {
						className: Ot.a.SearchBar,
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
							(null == a ? void 0 : a.current) && (await s(Object(Ce.l)("")), n(""), a.current.focus(), s(Object(Ce.j)(20)))
						},
						isVisible: Boolean(t)
					}, r.a.createElement(pt, null)))
				},
				_t = ({
					onPickGif: e
				}) => {
					const t = Object(o.d)(),
						n = Object(o.e)(gt.a),
						a = Object(o.e)(gt.d),
						s = Object(c.useRef)(null),
						i = Object(o.e)(gt.b),
						l = Object(o.e)(gt.c),
						d = Object(o.e)(gt.f);
					Object(c.useEffect)(() => {
						var e;
						(null === (e = null == s ? void 0 : s.current) || void 0 === e ? void 0 : e.scrollToTop) && s.current.scrollToTop()
					}, [i]), Object(c.useEffect)(() => {
						(null == n ? void 0 : n.length) || i || t(Object(Ce.j)(20)), i && t(Object(Ce.k)(10, i))
					}, []);
					const u = (t = !1) => (null == n ? void 0 : n.length) ? n.map((n, a) => {
						if (Boolean(a % 2) === t) return r.a.createElement(ht.a, {
							className: Ot.a.Gif,
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
					return r.a.createElement($e.a, {
						className: Ot.a.GifListWrapper,
						ref: s,
						loadMoreRows: () => t(Object(Ce.k)(10, i)),
						isLoadMoreRowsComplete: (() => !!a) || l
					}, r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Ot.a.Column
					}, u(), d ? Object(ut.c)({
						height: ut.f.XS
					}) : a ? Object(ut.a)(ut.b.FIRST) : null), r.a.createElement("div", {
						className: Ot.a.Column
					}, u(!0), d ? Object(ut.c)({
						height: ut.f.S
					}) : null, a && !d ? Object(ut.a)(ut.b.SECOND) : null)))
				};
			var Ct = ({
					onPickGif: e
				}) => r.a.createElement(jt, null, r.a.createElement(vt, null), r.a.createElement(_t, {
					onPickGif: e
				})),
				It = n("./src/config.ts"),
				yt = n("./src/chat/icons/svgs/ChatNew/index.tsx"),
				xt = n("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				St = n("./src/chat/icons/svgs/EnableNotifications/index.tsx");

			function Nt() {
				return (Nt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var wt = e => r.a.createElement(b.a, Nt({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? r.a.createElement("path", {
				d: "M10 .875A9.125 9.125 0 1019.125 10 9.135 9.135 0 0010 .875zM11.107 15a1.242 1.242 0 01-.465.462 1.342 1.342 0 01-1.3 0 1.236 1.236 0 01-.465-.465 1.287 1.287 0 01-.167-.65 1.306 1.306 0 01.167-.653 1.251 1.251 0 01.465-.471 1.27 1.27 0 01.653-.175 1.253 1.253 0 01.649.175A1.322 1.322 0 0111.107 15zm1.781-6.251a2.423 2.423 0 01-.407.646 8.565 8.565 0 01-.629.615q-.335.3-.53.513A1.922 1.922 0 0011 11a1.375 1.375 0 00-.13.6v.6H9.049v-.574a2.411 2.411 0 01.181-.963 2.479 2.479 0 01.435-.694 7.663 7.663 0 01.663-.632q.287-.254.454-.421a1.56 1.56 0 00.277-.372.93.93 0 00.109-.445.856.856 0 00-.15-.5 1.029 1.029 0 00-.407-.346 1.262 1.262 0 00-.564-.127 1.314 1.314 0 00-.608.145 1.153 1.153 0 00-.448.4 1.035 1.035 0 00-.174.566H6.93a2.887 2.887 0 01.417-1.486 2.822 2.822 0 011.118-1.042 3.441 3.441 0 011.63-.377 3.483 3.483 0 011.518.322 2.535 2.535 0 011.059.9 2.331 2.331 0 01.383 1.318 2.136 2.136 0 01-.167.875z"
			}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("path", {
				d: "M10 .875A9.125 9.125 0 1019.125 10 9.135 9.135 0 0010 .875zm0 17A7.875 7.875 0 1117.875 10 7.884 7.884 0 0110 17.875z"
			}), r.a.createElement("path", {
				d: "M10.479 13.635a1.085 1.085 0 00-.547-.141 1.035 1.035 0 00-.537.145 1.009 1.009 0 00-.379.388 1.1 1.1 0 00-.137.547 1.018 1.018 0 00.143.533 1.045 1.045 0 00.387.38 1.056 1.056 0 00.536.14 1.076 1.076 0 00.54-.14 1.008 1.008 0 00.387-.385 1.08 1.08 0 00.14-.541 1.05 1.05 0 00-.533-.926zM11.507 5.641a3.213 3.213 0 00-1.425-.309 3.15 3.15 0 00-1.535.368 2.646 2.646 0 00-1.028.974 2.52 2.52 0 00-.363 1.312h1.463a1.172 1.172 0 01.181-.661 1.327 1.327 0 01.516-.468 1.623 1.623 0 011.415-.017 1.212 1.212 0 01.5.431 1.1 1.1 0 01.181.618 1.063 1.063 0 01-.119.5 1.56 1.56 0 01-.3.4 9.531 9.531 0 01-.492.43 6.846 6.846 0 00-.656.585 2.292 2.292 0 00-.431.656 2.206 2.206 0 00-.178.919v.766h1.429v-.793a1.281 1.281 0 01.13-.58 1.824 1.824 0 01.321-.459c.128-.132.3-.3.533-.493a7.691 7.691 0 00.633-.584 2.279 2.279 0 00.41-.622 2.015 2.015 0 00.167-.85A2.262 2.262 0 0012.5 6.5a2.41 2.41 0 00-.993-.859z"
			})));

			function kt() {
				return (kt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Mt = e => r.a.createElement(b.a, kt({}, e, {
					viewBox: "0 0 20 20"
				}), r.a.createElement("path", {
					d: "M16.8,3.2A9.62,9.62,0,0,0,.491,8.5a9.506,9.506,0,0,0,1.146,6.237L.453,18.647a.726.726,0,0,0,.9.9l3.99-1.143a9.483,9.483,0,0,0,4.652,1.218,9.841,9.841,0,0,0,1.553-.124A9.62,9.62,0,0,0,16.8,3.2Zm1.464,8.176a8.414,8.414,0,0,1-6.919,6.9A8.3,8.3,0,0,1,5.74,17.2l-.232-.138L1.93,18.084l1.063-3.512-.144-.239a8.28,8.28,0,0,1-1.123-5.64,8.378,8.378,0,1,1,16.54,2.678Z"
				}), r.a.createElement("path", {
					d: "M10,5.375A4.625,4.625,0,1,0,14.625,10,4.631,4.631,0,0,0,10,5.375ZM6.625,10a3.354,3.354,0,0,1,.59-1.9L11.9,12.785A3.371,3.371,0,0,1,6.625,10Zm6.16,1.9L8.1,7.215A3.371,3.371,0,0,1,12.785,11.9Z"
				})),
				Tt = n("./src/chat/icons/svgs/Leave/index.tsx");

			function Dt() {
				return (Dt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var At = e => r.a.createElement(b.a, Dt({}, e, {
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

			function Ut() {
				return (Ut = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Pt = e => r.a.createElement(b.a, Ut({}, e, {
					viewBox: "0 0 20 20"
				}), e.isFilled ? r.a.createElement("path", {
					d: "M16.64 6.9a2.841 2.841 0 00-1.308.316 10.363 10.363 0 00-4.618-1.341l.743-4.123 2.422.515a1.493 1.493 0 10.2-1.235L11.59.5a1.124 1.124 0 00-1.34.9l-.8 4.459a10.371 10.371 0 00-4.787 1.356 2.859 2.859 0 00-3.108 4.763v.042c0 3.409 3.786 6.18 8.445 6.18s8.441-2.773 8.441-6.182v-.035A2.859 2.859 0 0016.64 6.9z"
				}) : r.a.createElement("path", {
					d: "M19.769 9.086a3.189 3.189 0 00-3.129-2.56 2.933 2.933 0 00-1.276.29 10.781 10.781 0 00-4.74-1.326l.811-3.742 2.444.52a1.493 1.493 0 10.2-1.235L11.573.5a1.126 1.126 0 00-1.333.862L9.344 5.5a10.742 10.742 0 00-4.693 1.3A3.179 3.179 0 00.235 9.074a3.228 3.228 0 00-.017 1.18 3.1 3.1 0 00.9 1.7l.057.06v.108c.071 3.618 3.943 6.452 8.815 6.452s8.74-2.831 8.814-6.433v-.122l.037-.037a3.136 3.136 0 00.929-1.725 3.218 3.218 0 00-.001-1.171zm-1.221.957a1.9 1.9 0 01-.571 1.049l-.391.4-.026.615c-.06 2.928-3.382 5.222-7.564 5.222s-7.507-2.3-7.565-5.239l-.024-.59L2 11.072a1.87 1.87 0 01-.552-1.03 2 2 0 01.01-.723 1.926 1.926 0 012.88-1.269l.332.209L5 8.05a9.385 9.385 0 014.67-1.331h.706a9.4 9.4 0 014.64 1.348l.342.217.342-.224a1.694 1.694 0 01.941-.284 1.935 1.935 0 011.9 1.55 1.964 1.964 0 01.007.717z"
				})),
				Rt = n("./src/chat/components/MessageTooltip/Picker/SlashCommandList/index.m.less"),
				Bt = n.n(Rt);
			var Ht = ({
					channelId: e,
					inputCommand: t,
					bindArrowDown: n,
					bindArrowUp: a,
					onSelectCommand: s,
					onPickCommand: l,
					unbindListeners: d
				}) => {
					const u = Object(o.e)(t => Object(C.l)(t, e)),
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
								className: Bt.a.Command
							}, b.map((e, t) => r.a.createElement("button", {
								className: Object(i.a)(Bt.a.CommandItem, {
									[Bt.a.selected]: m === t
								}),
								key: e.command,
								onClick: () => l(e.command)
							}, (e => {
								switch (e.name) {
									case Pe.GIF:
										return r.a.createElement("img", {
											src: `${It.a.assetPath}/img/giphy/giphy.png`,
											className: Bt.a.CommandItemIcon
										});
									case Pe.INVITE:
										return r.a.createElement(de.a, {
											className: Bt.a.CommandItemIcon
										});
									case Pe.MUTE:
										return r.a.createElement(xt.a, {
											className: Bt.a.CommandItemIcon
										});
									case Pe.UNMUTE:
										return r.a.createElement(St.a, {
											className: Bt.a.CommandItemIcon
										});
									case Pe.KICK:
										return r.a.createElement(Mt, {
											className: Bt.a.CommandItemIcon
										});
									case Pe.MEMBERS:
										return r.a.createElement(At, {
											className: Bt.a.CommandItemIcon
										});
									case Pe.LEAVE:
										return r.a.createElement(Tt.a, {
											className: Bt.a.CommandItemIcon
										});
									case Pe.NEW_CHAT:
									case Pe.DIRECT:
										return r.a.createElement(yt.a, {
											className: Bt.a.CommandItemIcon
										});
									case Pe.TEXT_EMOJI:
										return r.a.createElement(Lt.a, {
											className: Bt.a.CommandItemIcon
										});
									case Pe.SNOOMOJI:
										return r.a.createElement(Pt, {
											className: Bt.a.CommandItemIcon
										});
									default:
										return null
								}
							})(e), r.a.createElement("div", {
								className: Bt.a.CommandItemMetadata
							}, r.a.createElement("span", {
								className: Bt.a.CommandItemMetadataDescription
							}, e.description && oe.fbt._("{Description}", [oe.fbt._param("Description", e.description)], {
								hk: "223KqZ"
							})), r.a.createElement("span", {
								className: Bt.a.CommandItemMetadataExample
							}, e.example ? e.example : `/${e.command}`))))) : r.a.createElement("div", {
								className: Bt.a.ErrorMessage
							}, r.a.createElement(wt, {
								className: Bt.a.ErrorMessageIcon
							}), r.a.createElement("div", {
								className: Bt.a.ErrorMessageContent
							}, r.a.createElement("span", {
								className: Bt.a.ErrorMessageContentHeader
							}, oe.fbt._("Hmm... that didn’t work", null, {
								hk: "SVy4g"
							})), r.a.createElement("span", {
								className: Bt.a.ErrorMessageContentBody
							}, oe.fbt._("try another keyword or phrase", null, {
								hk: "1dSsbn"
							}))))
						}, [b, m, l, s]);
					return Object(c.useEffect)(() => (a(g), n(f), () => {
						d()
					}), [a, n, g, f, d]), Object(c.useEffect)(() => {
						m > b.length && p(0)
					}, [m, b.length]), r.a.createElement($e.a, {
						className: Object(i.a)(Bt.a.Scroller, {
							[Bt.a.embedded]: h
						})
					}, O)
				},
				Ft = n("./src/lib/lessComponent.tsx"),
				Gt = n("./src/chat/components/Snoomoji/index.tsx"),
				zt = n("./src/chat/components/MessageTooltip/Picker/icons.list.m.less"),
				Vt = n.n(zt);
			const Wt = Ft.a.div("IconWrapper", Vt.a);
			Wt.displayName = "IconWrapper";
			const Kt = Ft.a.div("LoadingIndicator", Vt.a),
				Zt = Ft.a.wrapped(({
					children: e,
					className: t
				}) => r.a.createElement("div", {
					className: t
				}, e), "Wrapper", Vt.a);
			var qt = ({
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
					return r.a.createElement($e.a, {
						className: Object(i.a)(Vt.a.Scroller, {
							[Vt.a.embedded]: a
						})
					}, t ? r.a.createElement(Zt, null, (() => Me.b.map((t, n) => r.a.createElement(Wt, {
						key: `icon-${n}`,
						onClick: () => e(t)
					}, r.a.createElement(Gt.a, {
						className: Vt.a.Icon,
						iconName: t
					}))))()) : r.a.createElement(Kt, null, oe.fbt._("Loading snoomoji...", null, {
						hk: "39nqLy"
					})))
				},
				Qt = n("./src/chat/actions/members.ts"),
				Xt = n("./src/chat/components/ChatMemberList/index.tsx"),
				Jt = n("./src/chat/helpers/chatSelector.ts"),
				Yt = n("./src/chat/selectors/members.ts"),
				$t = n("./src/chat/components/MessageTooltip/Picker/Userlist/index.m.less"),
				en = n.n($t);
			const tn = Ft.a.div("LoadingIndicator", en.a),
				nn = Ft.a.wrapped(Xt.a, "ChatMemberList", en.a),
				an = Ft.a.wrapped(({
					children: e,
					className: t
				}) => r.a.createElement("div", {
					className: t
				}, e), "Wrapper", en.a),
				sn = Object(Jt.a)({
					channelId: C.y,
					channelMembers: Yt.f,
					hasMoreMembers: Yt.d,
					fetchingMembers: Yt.a,
					isEmbedded: nt.g
				});
			class cn extends c.Component {
				constructor(e) {
					super(e), this.fetchedFilter = "", this.isMount = !1, this.fetchSubredditChannelUsers = L()((e = "") => {
						this.props.fetchSubredditChannelUsers(e)
					}, xe.Rb, {
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
					return this.members = this.filterMembers(), this.members && this.members.length && e ? r.a.createElement(an, null, r.a.createElement(nn, {
						minimal: !0,
						channelId: e,
						members: this.members,
						modIndicator: !0,
						onClick: t,
						onSelectName: n,
						selectIndex: this.state.selectIndex,
						useNSFWIcons: !0
					})) : a || this.members && this.members.length ? r.a.createElement(tn, null, oe.fbt._("Loading members...", null, {
						hk: "23phIt"
					})) : r.a.createElement(tn, null, oe.fbt._("Member not found!", null, {
						hk: "4DkpQe"
					}))
				}
				render() {
					const {
						isEmbedded: e
					} = this.props;
					return r.a.createElement($e.a, {
						className: Object(i.a)(en.a.Scroller, {
							[en.a.embedded]: e
						})
					}, this.renderContent())
				}
			}
			var rn = Object(o.b)(sn, e => ({
					fetchSubredditChannelUsers: t => e(Object(Qt.e)({
						filter: t
					}))
				}))(cn),
				on = n("./src/chat/constants/keys.ts"),
				ln = n("./src/chat/singleton/SendbirdSDK.ts"),
				dn = n("./src/chat/controls/ContentEditable/index.m.less"),
				un = n.n(dn);
			const hn = 19,
				mn = 12,
				pn = 6,
				bn = Ft.a.textarea("Textarea", un.a);
			class gn extends r.a.Component {
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
					this.props.channelId !== e.channelId && this.textarea && (this.textarea.value = e.draftText || "", this.handleSizing()), this.textarea && this.textarea.value ? ln.a.startTypingIndicator() : ln.a.endTypingIndicator(), this.textarea && e.textUpdate && (this.textarea.value = e.textUpdate, this.props.onChangeOnce(this.textarea.value), this.handleSizing()), this.textarea && this.textarea.value && e.clearText && (this.clearTextAndDropInputHeight(), this.props.onChangeOnce(""), this.handleSizing()), e.cursorPosition && this.textarea && (this.textarea.selectionStart = e.cursorPosition.selectionStart, this.textarea.selectionEnd = e.cursorPosition.selectionEnd)
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
					e.key !== on.g || e.shiftKey || (e.preventDefault(), this.props.onSubmit()), this.handleCursor()
				}
				handleKeyDown(e) {
					e.key === on.d && (this.props.onArrowUp(e), this.handleSizing()), e.key === on.a && (this.props.onArrowDown(e), this.handleSizing()), e.key === on.h && this.props.onKeyEsc(e), this.props.onKeyDown(e)
				}
				handleSizing() {
					if (this.textarea) {
						const e = this.textarea;
						e.style.height = "auto", e.style.height = e.scrollHeight + this.offset + "px", e.scrollHeight > 2 * hn + mn ? e.style.paddingTop = "0px" : e.style.paddingTop = "12px", e.scrollHeight > hn * pn + 1 ? e.style.overflowY = "scroll" : e.style.overflowY = "hidden"
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
					return r.a.createElement(bn, {
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

			function fn() {
				return (fn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var On = e => r.a.createElement(b.a, fn({}, e, {
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
				jn = n("./src/chat/models/Theme/index.ts"),
				En = n("./src/chat/selectors/theme.ts");

			function vn() {
				return (vn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var _n = e => {
					const t = Object(o.e)(En.a);
					return r.a.createElement(b.a, vn({}, e, {
						viewBox: "0 0 24 24"
					}), (() => {
						let e;
						if (t) {
							const n = jn.f[t];
							n && (e = r.a.createElement("defs", null, r.a.createElement("linearGradient", {
								id: "linear-gradient",
								gradientTransform: `rotate(${jn.d})`
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
				In = n("./src/lib/hooks/useOnClickOutside.ts"),
				yn = n("./src/lib/hooks/useTooltip.ts"),
				xn = n("./src/chat/components/MessageInput/IconButton/index.m.less"),
				Sn = n.n(xn);
			var Nn = e => r.a.createElement("div", {
					className: Object(i.a)(Sn.a.IconButton, {
						[Sn.a.active]: e.active
					}, e.className),
					onMouseDown: Object(u.b)(e.onMouseDown)
				}, e.children),
				wn = n("./src/chat/controls/TooltipHooked/loader.tsx"),
				kn = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				Mn = n("./src/chat/components/MessageInput/ImageUploader/index.m.less"),
				Tn = n.n(Mn);
			var Dn = r.a.memo((function({
					channelId: e
				}) {
					const t = Object(o.d)(),
						n = Object(o.e)(t => Object(C.z)(t, e)),
						a = Object(o.e)(C.J),
						s = Object(o.e)(t => Object(pe.k)(t, e)),
						i = Object(o.e)(I.e),
						d = Object(yn.b)(Object(kn.b)()),
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
					return Object(In.a)("Prompt-id", d.hide), Object(c.useEffect)(() => {
						i && setTimeout(() => {
							d.show(), t(Object(l.hb)())
						})
					}, [i]), s && (!a || a && n.length > 0) ? r.a.createElement(r.a.Fragment, null, i && r.a.createElement(wn.a, {
						arrowProps: u,
						popperProps: d.popperProps,
						visible: d.visible,
						hide: d.hide,
						styled: !0,
						isInstant: !0
					}, r.a.createElement("button", {
						className: Tn.a.Tooltip,
						onClick: h,
						id: "Prompt-id"
					}, oe.fbt._("New! Try media sharing", null, {
						hk: "16k719"
					}))), r.a.createElement("span", {
						ref: d.target.ref,
						role: "button",
						tabIndex: 0,
						onClick: h
					}, r.a.createElement(Nn, {
						className: Tn.a.ImageUploader
					}, r.a.createElement(D, null)))) : null
				})),
				An = n("./src/chat/components/MessageInput/index.m.less"),
				Ln = n.n(An);
			const Un = r.a.memo((function() {
					const e = Object(o.d)(),
						t = Object(o.e)(st);
					return Object(o.e)(C.J) ? null : r.a.createElement(Pn, {
						onMouseDown: () => {
							e(Object(Ne.c)({
								tooltipId: we.b
							})), e(Object(l.E)(we.b))
						},
						active: t === we.b
					}, r.a.createElement(On, {
						isFilled: t === we.b
					}))
				})),
				Pn = e => r.a.createElement("div", {
					className: Object(i.a)(Ln.a.IconButton, {
						[Ln.a.active]: e.active
					}, e.className),
					onMouseDown: Object(u.b)(e.onMouseDown)
				}, e.children),
				Rn = Object(Jt.a)({
					activeDropdownId: e => e.tooltipId || void 0,
					draftMessage: (e, t) => Object(C.s)(e, t.channelId),
					hasUploadsToSubmit: (e, t) => Object(I.d)(e, t.channelId),
					isFullSize: nt.h,
					isChatContainerFocused: nt.c,
					isImageShareEnabled: (e, t) => Object(pe.k)(e, t.channelId),
					isChannelInPendingState: C.J,
					isShortcutsSlashCommandEnabled: pe.t
				});
			class Bn extends c.PureComponent {
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
						if (this.isUserlistPopupOpened()) this.onPickUserName(this.selectUserName || this.state.inputUserName), this.props.toggleUserlistTooltip(we.f);
						else if (l || i) {
							if (l) {
								const t = new d.d(e);
								await a(t), s(t)
							}
							i && (this.isSlashCommandListPopupOpened() && o ? (this.onPickCommand(this.selectedCommand || this.state.inputCommand), this.props.toggleSlashCommandListTooltip(we.d)) : (this.state.text.startsWith(Ie) && o ? r(this.state.text) : n(this.state.text), this.clearText(), t(e))), c && c()
						}
					}, this.sendEnabled = () => !!this.state.text || this.props.hasUploadsToSubmit, this.onArrowUpUserlistListener = je.a, this.onArrowDownUserlistListener = je.a, this.startIdleTimerThrottle = ve()(() => {
						this.props.startSurveyTimer()
					}, we.g), this.onMessageInputKeydown = () => {
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
					} = Le(t, e, n);
					this.setState({
						textUpdate: a,
						text: a
					}, () => {
						this.reFocusCursorPosition(s), this.props.toggleUserlistTooltip(we.f)
					})
				}
				onPickCommand(e) {
					const t = Ie + e;
					this.setState({
						textUpdate: t,
						text: t
					}, () => {
						this.reFocusCursorPosition(t.length), this.props.toggleSlashCommandListTooltip(we.d)
					})
				}
				toggleUserlistTooltipByTextChange(e) {
					const {
						selectionEnd: t
					} = this.cursorPosition, {
						hasUsername: n,
						username: a
					} = Ae(e, t), s = this.isUserlistPopupOpened();
					return (n && !s || !n && s) && this.props.toggleUserlistTooltip(we.f), this.setState({
						inputUserName: a
					})
				}
				toggleCommandsTooltipByTextChange(e) {
					const t = this.isSlashCommandListPopupOpened();
					(!t && Ue(e) || t && !Ue(e)) && this.props.toggleSlashCommandListTooltip(we.d), this.setState({
						inputCommand: e.replace(Ie, "")
					})
				}
				isSlashCommandListPopupOpened() {
					return this.props.activeDropdownId === we.d
				}
				isUserlistPopupOpened() {
					return this.props.activeDropdownId === we.f
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
						id: ot,
						onSubmit: Object(u.b)(this.handleSubmitInput)
					}, r.a.createElement("div", {
						className: Ln.a.Wrapper
					}, r.a.createElement(Dn, {
						channelId: t
					}), r.a.createElement("div", {
						className: Ln.a.InputWrapper
					}, r.a.createElement(gn, {
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
					}), o && r.a.createElement(dt, {
						id: we.d,
						shouldArrowShow: !1
					}, r.a.createElement(Ht, {
						channelId: t,
						bindArrowDown: e => this.onArrowDownUserlistListener = e,
						bindArrowUp: e => this.onArrowUpUserlistListener = e,
						inputCommand: this.state.inputCommand,
						onPickCommand: e => this.onPickCommand(e),
						onSelectCommand: e => this.selectedCommand = e,
						unbindListeners: () => {
							this.onArrowUpUserlistListener = je.a, this.onArrowDownUserlistListener = je.a
						}
					})), r.a.createElement("div", {
						className: Ln.a.Icons
					}, r.a.createElement(Un, null), r.a.createElement(Pn, {
						onMouseDown: () => n(we.e),
						active: e === we.e
					}, r.a.createElement(Lt.a, {
						isFilled: e === we.e
					})), r.a.createElement(dt, {
						id: we.e
					}, r.a.createElement(qt, {
						onPickSnoomoji: this.handleSubmitSnoo
					})), r.a.createElement(dt, {
						id: we.b,
						arrowOffset: we.a
					}, r.a.createElement(Ct, {
						onPickGif: this.onPickGifHandler
					})), r.a.createElement(dt, {
						id: we.f,
						shouldArrowShow: !1
					}, r.a.createElement(rn, {
						bindArrowDown: e => this.onArrowDownUserlistListener = e,
						bindArrowUp: e => this.onArrowUpUserlistListener = e,
						inputUserName: this.state.inputUserName,
						onPickUserName: e => this.onPickUserName(e),
						onSelectUserName: e => this.selectUserName = e
					})))), r.a.createElement(ee.d, {
						className: Ln.a.SubmitButton,
						type: "submit",
						disabled: !this.sendEnabled()
					}, r.a.createElement(_n, null))))
				}
			}
			var Hn = Object(o.b)(Rn, (e, {
					channelId: t
				}) => ({
					onSubmitText: n => e(Object(G.r)(t, n.trim(), ke.c.TEXT)),
					onSubmitSnoo: n => e(Object(G.r)(t, n.trim(), ke.c.SNOOMOJI)),
					onSubmitGif: n => {
						e(Object(G.o)(t, n)), e(Object(Ce.l)(""))
					},
					onSubmitMedia: t => e(t.createMessage()),
					onUploadMedia: t => e(t.uploadMedia()),
					toggleSnoomojiTooltip: t => {
						e(Object(Ne.c)({
							tooltipId: t
						})), e(Object(l.E)(t))
					},
					toggleGifTooltip: t => {
						e(Object(Ne.c)({
							tooltipId: t
						})), e(Object(l.E)(t))
					},
					toggleUserlistTooltip: t => {
						e(Object(Ne.c)({
							tooltipId: t
						}))
					},
					saveDraft: (t, n) => {
						e(Object(_e.e)({
							channelId: t,
							messageValue: n
						}))
					},
					deleteDraft: t => {
						e(Object(_e.f)(t))
					},
					closeUserlistTooltip: () => e(Object(Ne.d)()),
					startSurveyTimer: () => e(Object(Je.b)()),
					uploadShowPromptCountSet: () => e(Object(Cn.c)(Cn.b.LAST)),
					commandsChecker: n => e(Xe(n, t)),
					onSubmitSlashCommand: n => e(Xe(n, t)),
					toggleSlashCommandListTooltip: t => {
						e(Object(Ne.c)({
							tooltipId: t
						}))
					}
				}))(Bn),
				Fn = n("./src/chat/helpers/time/index.tsx"),
				Gn = n("./src/chat/components/DateSplitter/index.m.less"),
				zn = n.n(Gn);
			var Vn = e => r.a.createElement("div", {
					className: zn.a.TimeWrapper
				}, r.a.createElement("time", {
					className: zn.a.Time
				}, Object(Fn.a)(e.date))),
				Wn = n("./src/chat/components/Message/Bubble.tsx"),
				Kn = n("./src/chat/components/Message/LinkedText.tsx"),
				Zn = n("./src/chat/components/Message/SystemMessage.m.less"),
				qn = n.n(Zn);
			const Qn = Ft.a.wrapped(Kn.a, "LinkedText", qn.a);
			var Xn = Ft.a.wrapped(e => {
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
					}, r.a.createElement(Qn, {
						value: a,
						highlighMentionGroupLinks: s
					}))
				}, "SystemMessage", qn.a),
				Jn = n("./src/chat/components/Message/UserName/index.m.less"),
				Yn = n.n(Jn);
			var $n = ({
					className: e,
					message: t,
					channelType: n,
					sameAsPrevUser: a,
					inTimeRange: s,
					currentUserId: c
				}) => {
					const {
						sender: o
					} = t, l = n === J.b.Group, d = c === (null == o ? void 0 : o.userId);
					return (!a || !s) && (null == o ? void 0 : o.nickname) && (null == o ? void 0 : o.userId) && l ? r.a.createElement("span", {
						className: Object(i.a)(Yn.a.UserName, {
							[Yn.a.currentUser]: Boolean(d && c)
						}, e)
					}, null == o ? void 0 : o.nickname) : null
				},
				ea = n("./node_modules/lodash/xorBy.js"),
				ta = n.n(ea),
				na = n("./src/lib/hooks/usePrevious.ts"),
				aa = n("./src/lib/prettyPrintNumber/index.ts"),
				sa = n("./src/chat/actions/message/reactions.ts"),
				ca = n("./src/chat/models/MessageReaction/index.ts"),
				ra = n("./src/chat/selectors/reactions.ts"),
				oa = n("./src/chat/selectors/user.ts"),
				ia = n("./src/chat/components/Reactions/MessageReactions/index.m.less"),
				la = n.n(ia);
			const da = r.a.memo((function({
				channelId: e,
				currentUserId: t,
				userIds: n,
				messageId: a,
				reactionKey: s,
				isNew: d
			}) {
				const u = n.length,
					h = Object(o.e)(e => Object(ra.b)(e, s)),
					m = Object(na.a)(u),
					p = Object(o.d)(),
					b = Object(o.e)(pe.i),
					g = Object(c.useRef)(ve()(n => {
						p(Object(sa.b)({
							channelSendbirdId: e,
							messageSendbirdId: a,
							reactionIconKey: s,
							type: n ? ca.a.DELETE : ca.a.ADD,
							userId: t
						})), p(n ? Object(l.K)(a, 0, s) : Object(l.T)(a, 0, s, "add_to_existing"))
					}, 800)),
					f = Object(c.useMemo)(() => Boolean(n.find(e => e === t)), [t, n]),
					O = Object(c.useMemo)(() => {
						if (m !== u) return m
					}, [u, m]),
					j = Object(c.useMemo)(() => void 0 !== O && O < u, [u, O]);
				return h ? r.a.createElement("span", {
					className: Object(i.a)(la.a.ReactionWrapper, {
						[la.a.userReacted]: f,
						[la.a.new]: d
					}),
					onClick: () => b && g.current(f)
				}, r.a.createElement("img", {
					className: la.a.ReactionIcon,
					src: h.url
				}), u > 1 && r.a.createElement("span", {
					className: la.a.ReactionCounterContainer,
					key: u
				}, r.a.createElement("span", {
					style: {
						animationDuration: 2 === u && j ? "0s" : "0.5s"
					},
					className: Object(i.a)(la.a.TranslationContainer, {
						[la.a.up]: !!O && j,
						[la.a.down]: !!O && !j
					})
				}, O && r.a.createElement("span", {
					className: la.a.ReactionCounter
				}, Object(aa.b)(O - 1)), r.a.createElement("span", {
					className: la.a.ReactionCounter,
					title: `${O||u}`
				}, Object(aa.b)(O || u)), O && r.a.createElement("span", {
					className: la.a.ReactionCounter
				}, Object(aa.b)(O + 1))))) : null
			}));
			var ua = r.a.memo(({
					isCurrentUser: e,
					channelId: t,
					messageId: n
				}) => {
					const a = Object(o.e)(e => Object(ra.c)(e, n)),
						s = Object(na.a)(a),
						l = Object(c.useMemo)(() => {
							if (s && s.length < a.length) return ta()(s, a, "key")[0].key
						}, [a, s]),
						d = Object(o.e)(oa.a);
					return a.length ? r.a.createElement("div", {
						className: Object(i.a)(la.a.ReactionsWrapper, {
							[la.a.reversed]: e
						})
					}, a.map(e => r.a.createElement(da, {
						channelId: t,
						currentUserId: d,
						messageId: n,
						key: e.key,
						isNew: l === e.key,
						userIds: e.userIds,
						reactionKey: e.key
					}))) : null
				}),
				ha = n("./src/chat/components/MessageList/Messages/index.m.less"),
				ma = n.n(ha);
			const pa = (e, t) => {
					let n = NaN;
					return e > 0 && (n = t[e - 1].createdAt), n
				},
				ba = ({
					message: e,
					showUserPic: t,
					isLastCurrentUserMessage: n,
					currentUserId: a,
					inPreview: s,
					isLastInChain: c
				}) => {
					const {
						sender: l
					} = e, d = a === (l && l.userId), u = Object(o.e)(nt.d), h = Object(o.e)(C.a);
					return r.a.createElement(Wn.a, {
						className: Object(i.a)(ma.a.MessageItemBubble, {
							[ma.a.lastInChain]: c
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
			var ga = ({
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
						} = n, u = d && d.userId, h = pa(c, o), m = ((e, t) => {
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
								s = pa(t, n);
							if (s) {
								const e = new Date(s);
								return a.getFullYear() !== e.getFullYear() || a.getMonth() !== e.getMonth() || a.getDate() !== e.getDate()
							}
							return !1
						})(n, c, o), g = ((e, t) => {
							var n;
							const a = t[e + 1];
							return null === (n = null == a ? void 0 : a.sender) || void 0 === n ? void 0 : n.userId
						})(c, o), f = p === u, O = g === u, j = l - h < 5 * xe.kb, E = m && m - l < 5 * xe.kb, v = !O || O && !E, _ = n.messageType === ke.d.SYSTEM && ((e, t) => {
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
						})(n, e), C = Boolean(((t, n) => {
							const {
								sender: a
							} = n[t];
							return !(e !== (null == a ? void 0 : a.userId) || !s) && (t === n.length - 1 || !n.slice(t + 1).some(e => {
								var t;
								return (null === (t = e.sender) || void 0 === t ? void 0 : t.userId) === (null == a ? void 0 : a.userId)
							}))
						})(c, o)), I = b && r.a.createElement(Vn, {
							date: l
						}), y = n.messageData.clientMessageId || n.createdAt;
						switch (n.messageType) {
							case ke.d.PENDING:
							case ke.d.USER:
								return r.a.createElement(r.a.Fragment, {
									key: y
								}, I, r.a.createElement(r.a.Fragment, null, r.a.createElement($n, {
									message: n,
									sameAsPrevUser: f,
									inTimeRange: j,
									channelType: t,
									currentUserId: e
								}), r.a.createElement(ba, {
									message: n,
									isLastCurrentUserMessage: C,
									showUserPic: v,
									currentUserId: e,
									inPreview: a,
									isLastInChain: !(!g || n.messageType === ke.d.USER && n.reactions.length) && !O
								}), n.messageType === ke.d.USER ? r.a.createElement(ua, {
									channelId: n.channelId,
									messageId: n.messageId,
									isCurrentUser: e === (null === (i = n.sender) || void 0 === i ? void 0 : i.userId)
								}) : null));
							case ke.d.SYSTEM:
								return _ && r.a.createElement(r.a.Fragment, {
									key: n.createdAt
								}, I, r.a.createElement(Xn, {
									className: ma.a.SystemBubble,
									message: n
								}));
							default:
								return null
						}
					})) : null
				},
				fa = n("./src/chat/components/MessageQuickReplyPicker/index.m.less"),
				Oa = n.n(fa);
			const ja = ["upvote", "snoo"],
				Ea = Ft.a.div("SnooWrapper", Oa.a),
				va = Ft.a.wrapped(e => {
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
								return r.a.createElement(Ea, null, r.a.createElement(Gt.a, {
									iconName: n
								}))
						}
					})())
				}, "ReplyItem", Oa.a);
			var _a = Ft.a.wrapped(e => {
					const {
						className: t,
						channelId: n
					} = e, a = Object(o.d)();
					return Object(o.e)(t => Object(C.O)(t, n, e.lastMessage)) ? r.a.createElement("div", {
						className: t
					}, r.a.createElement(va, {
						type: ke.c.TEXT,
						text: oe.fbt._("Thanks for the award!", null, {
							hk: "3aibi5"
						}),
						onReply: e => {
							a(Object(G.r)(n, String(e).trim(), ke.c.TEXT)), a(Object(l.x)(l.a.FIRST, String(e).trim()))
						}
					}), ja.map((e, t) => r.a.createElement(va, {
						type: ke.c.SNOOMOJI,
						key: e,
						text: e,
						onReply: e => {
							a(Object(G.r)(n, e, ke.c.SNOOMOJI)), a(Object(l.x)(t + 2, e))
						}
					}))) : null
				}, "MessageQuickReplyPicker", Oa.a),
				Ca = n("./src/chat/actions/messageReactions/index.ts"),
				Ia = n("./src/chat/selectors/messages.ts");
			var ya = () => {
					const e = Object(o.d)(),
						[t, n] = Object(c.useState)(!1),
						a = Object(o.e)(ra.a),
						s = Object(o.e)(nt.g),
						d = Object(o.e)(ra.d),
						u = Object(o.e)(e => Object(Ia.b)(e, d)),
						h = Object(o.e)(oa.a);
					Object(c.useEffect)(() => {
						a.length || (async () => {
							await e(Object(Ca.a)())
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
					return r.a.createElement($e.a, {
						className: Object(i.a)(Vt.a.Scroller, {
							[Vt.a.embedded]: s
						})
					}, a.length && t ? r.a.createElement("div", {
						className: Vt.a.Wrapper
					}, (() => a.map((t, n) => t.url && t.key ? r.a.createElement("div", {
						className: Vt.a.IconWrapper,
						key: `icon-${n}`,
						onClick: () => (t => {
							if (u && u.messageType === ke.d.USER) {
								const n = u.reactions.find(e => e.key === t),
									a = !!Boolean(n) && Boolean(null == n ? void 0 : n.userIds.find(e => e === h));
								e(Object(sa.b)({
									channelSendbirdId: u.channelId,
									messageSendbirdId: u.messageId,
									reactionIconKey: t,
									type: ca.a.ADD,
									userId: h
								})), a || e(Object(l.T)(u.messageId, 0, t, "bottom_sheet"))
							}
						})(t.key)
					}, r.a.createElement("img", {
						className: Vt.a.Icon,
						src: t.url,
						alt: t.altText
					})) : null))()) : r.a.createElement("div", {
						className: Vt.a.LoadingIndicator
					}, oe.fbt._("Loading reactions...", null, {
						hk: "3KoJZd"
					})))
				},
				xa = n("./src/chat/components/OverlayNav/index.tsx"),
				Sa = n("./src/chat/components/TypingIndicator/index.m.less"),
				Na = n.n(Sa);
			var wa = ({
					channelType: e
				}) => {
					const t = Object(o.e)(e => e.typingIndicator.usernames);
					return (null == t ? void 0 : t.length) ? r.a.createElement("span", {
						className: Object(i.a)(Na.a.IndicatorText)
					}, ((e, t) => e === J.b.Direct ? oe.fbt._("is typing...", null, {
						hk: "UTaH4"
					}) : 1 === t.length ? oe.fbt._("{firstUser} is typing...", [oe.fbt._param("firstUser", t[0])], {
						hk: "480JMK"
					}) : 2 === t.length ? oe.fbt._("{firstUser} and {secondUser} are typing", [oe.fbt._param("firstUser", t[0]), oe.fbt._param("secondUser", t[1])], {
						hk: "3zfAnp"
					}) : t.length > 2 ? oe.fbt._("Several people are typing...", null, {
						hk: "39edn3"
					}) : void 0)(e, t)) : null
				},
				ka = n("./src/chat/constants/batchSizes.ts"),
				Ma = n("./src/chat/selectors/richUnits.ts"),
				Ta = n("./src/chat/components/MessageList/index.m.less"),
				Da = n.n(Ta);
			const {
				fbt: Aa
			} = n("./node_modules/fbt/lib/FbtPublic.js"), La = Object(Jt.a)({
				currentUser: e => e.user.account,
				channelMessages: (e, {
					channel: {
						channelId: t
					}
				}) => Object(C.z)(e, t),
				channelPendingMessages: e => Object(C.A)(e),
				fetchingMessages: e => Object(C.B)(e, "fetchingMessages"),
				fetchingMessagesError: e => Object(C.B)(e, "fetchingMessagesError"),
				hasMoreMessages: e => Object(C.B)(e, "hasMoreMessages"),
				isMessageListLoaded: e => Object(C.B)(e, "isMessageListLoaded"),
				isModerator: e => Object(C.a)(e),
				isChatMinimized: nt.d,
				isRichUnitDataReceived: e => Object(Ma.c)(e),
				isFullSize: nt.h,
				showPrompt: En.c,
				isImageShareEnabled: (e, t) => Object(pe.k)(e, t.channel.channelId),
				isChannelInPendingState: C.J,
				isBlockedUserMessageEnabled: pe.d,
				hasBlockedUsers: (e, t) => Object(C.D)(e, t.channel.channelId)
			}), Ua = Object(o.b)(La, e => ({
				getPreviousMessages: () => e(Object(G.v)()),
				removeAndResetMessages: t => e(Object(z.c)(t)),
				resetChannelMessageList: t => e(Object(H.K)(t)),
				resetRichUnisDataReceived: () => e(Object(V.f)()),
				windowSizeChanged: t => e(Object(F.windowSizeChangedAction)(t))
			})), Pa = 30, Ra = 2 * ka.a.Messages, Ba = 100;
			class Ha extends r.a.Component {
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
							case J.b.Group:
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
					this.props.isFullSize && (this.windowResize(), window.addEventListener("resize", L()(this.windowResize, Ba)))
				}
				componentWillUnmount() {
					window.removeEventListener("resize", L()(this.windowResize, Ba))
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
					if (t.length > Pa && this.isChannelSwitched(e)) {
						const e = t.length - Pa,
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
					} = this, f = this.getTitle(), O = B()([...n, ...t], "createdAt"), j = !d && o && e.members, E = (null == e ? void 0 : e.type) === J.b.Direct && b && p;
					return r.a.createElement("div", {
						className: Da.a.Container
					}, r.a.createElement(xa.a, {
						channelId: e.channelId,
						showMenu: !0,
						title: f,
						channelType: null == e ? void 0 : e.type,
						showMembers: !0
					}), r.a.createElement("div", {
						className: Object(i.a)(Da.a.ReverseCol, {
							[Da.a.isFullSize]: u
						})
					}, r.a.createElement($e.a, {
						className: Da.a.Scroller,
						autoScrollBottom: !0,
						ref: this.scroller,
						loadMoreRows: g
					}, j ? r.a.createElement(fe, {
						users: e.members,
						channel: e
					}) : s ? r.a.createElement("span", {
						className: Da.a.LoadingError,
						onClick: c
					}, Aa._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})) : o ? r.a.createElement("span", {
						className: Da.a.LoadingIndicator
					}, Aa._("Loading history...", null, {
						hk: "4tLHUG"
					})) : r.a.createElement(ut.e, null), O.length ? r.a.createElement(ga, {
						channelType: e.type,
						currentUserId: a.id,
						messageList: O
					}) : null)), r.a.createElement("div", {
						className: Object(i.a)(Da.a.TypingIndicatorWrapper, {
							[Da.a.isFullSize]: u
						})
					}, e ? r.a.createElement(wa, {
						channelType: e.type
					}) : null), r.a.createElement(_a, {
						className: Da.a.MessageQuickReplyPicker,
						channelId: e.channelId,
						lastMessage: O[O.length - 1]
					}), h && !m && r.a.createElement(re, null), p && e ? r.a.createElement($, {
						channel: e
					}) : null, r.a.createElement(dt, {
						id: we.c,
						shouldArrowShow: !1
					}, r.a.createElement(ya, null)), !E && r.a.createElement(Hn, {
						className: Da.a.MessageInput,
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
			var Fa = Ua(Ha),
				Ga = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				za = n("./src/higherOrderComponents/makeAsync.tsx"),
				Va = n("./src/lib/loadWithRetries/index.ts");
			const Wa = () => null;
			var Ka = Object(za.a)({
				ErrorComponent: Wa,
				getComponent: () => Object(Va.a)(() => n.e("OverlayChatMembers").then(n.bind(null, "./src/chat/components/OverlayChatMembers/index.tsx"))).then(e => e.default),
				LoadingComponent: Wa
			});
			const Za = () => null;
			var qa = Object(za.a)({
					ErrorComponent: Za,
					getComponent: () => Object(Va.a)(() => n.e("OverlayCreateChannel").then(n.bind(null, "./src/chat/components/OverlayCreateChannel/index.tsx"))).then(e => e.default),
					LoadingComponent: Za
				}),
				Qa = n("./src/chat/components/ChatIcon/index.tsx"),
				Xa = n("./src/lib/opener/index.ts"),
				Ja = n("./src/chat/components/Message/RichUnit/Comment/loader.tsx"),
				Ya = n("./src/chat/components/Message/RichUnit/Post/loader.tsx"),
				$a = n("./src/chat/components/OverlayShareToChat/RichUnit/index.m.less"),
				es = n.n($a);
			const {
				POST: ts,
				USER_POST: ns,
				COMMENT: as
			} = ke.c;
			var ss = ({
					chatUnitTypeData: e,
					message: t
				}) => {
					const n = Object(o.e)(t => Object(Ma.a)(t, e));
					return r.a.createElement("div", {
						className: es.a.Wrapper
					}, n ? ((e, t) => {
						switch (t.type) {
							case ns:
							case ts:
								return r.a.createElement(Ya.a, {
									postUrl: e,
									richUnitData: t,
									isSharedToChat: !0
								});
							case as:
								return r.a.createElement(Ja.a, {
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
						className: es.a.Link,
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(Xa.e)(t, "_blank")
							})(e, t)
						}
					}, t))
				},
				cs = n("./src/chat/controls/Checkbox/index.tsx"),
				rs = n("./src/chat/controls/Overlay/index.tsx"),
				os = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				is = n("./src/chat/controls/OverlayHeader/index.tsx"),
				ls = n("./src/chat/components/OverlayShareToChat/index.m.less"),
				ds = n.n(ls);
			const {
				fbt: us
			} = n("./node_modules/fbt/lib/FbtPublic.js"), hs = ({
				channelId: e,
				onClick: t,
				channelFilterValue: n
			}) => {
				var a;
				const [s, i] = Object(c.useState)(!1), l = Object(o.e)(t => Object(C.t)(t, e)), d = Object(o.e)(t => Object(C.k)(t, e)), u = Object(c.useCallback)(() => {
					i(n => (t(!n, e), !n))
				}, [t, e]);
				return Object(c.useMemo)(() => !d || !!n && !d.toLowerCase().includes(n.toLowerCase()), [d, n]) ? null : r.a.createElement("div", {
					className: ds.a.Channel
				}, r.a.createElement(cs.a, {
					checked: s,
					onChange: u,
					className: ds.a.Checkbox
				}, r.a.createElement("div", {
					className: ds.a.CheckboxContent
				}, (null == l ? void 0 : l.firstUser) && r.a.createElement(Qa.a, {
					className: ds.a.ChannelIcon,
					userId: l.firstUser.id,
					secondUserId: null === (a = l.secondUser) || void 0 === a ? void 0 : a.id,
					isSmall: !0
				}), r.a.createElement("div", {
					className: ds.a.ChannelName
				}, d))))
			}, ms = ({
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
				className: ds.a.Content
			}, r.a.createElement(ss, {
				chatUnitTypeData: n,
				message: a
			}), s && r.a.createElement("div", {
				className: ds.a.SearchInput
			}, r.a.createElement("label", {
				htmlFor: "channelSearch",
				className: ds.a.Label
			}, r.a.createElement(bt.a, null)), r.a.createElement("input", {
				ref: c,
				placeholder: "Search chats",
				className: ds.a.Input,
				type: "text",
				value: o,
				onChange: e => {
					i(e.target.value)
				},
				id: "channelSearch"
			})), r.a.createElement("div", {
				className: ds.a.NewChat
			}, r.a.createElement("span", {
				className: ds.a.NewChatContent,
				onClick: l,
				role: "button",
				tabIndex: 0
			}, r.a.createElement(yt.a, {
				className: ds.a.NewChatIcon
			}), us._("new chat", null, {
				hk: "2JtgH4"
			}))), !s && r.a.createElement("div", {
				className: ds.a.LoadingIndicator
			}, us._("Loading Channels", null, {
				hk: "7Nhm8"
			})), t && s && r.a.createElement($e.a, {
				className: ds.a.Scroller
			}, t.map(t => r.a.createElement(hs, {
				channelId: t.channelId,
				onClick: e,
				channelFilterValue: o,
				key: t.channelId
			}))));
			var ps = ({
					message: e
				}) => {
					const t = Object(o.d)(),
						n = Object(o.f)(),
						a = Object(c.useRef)(null),
						[s, i] = Object(c.useState)([]),
						[d, u] = Object(c.useState)([]),
						[h, m] = Object(c.useState)(""),
						[p, b] = Object(c.useState)(!1),
						g = Object(o.e)(C.G),
						f = Object(o.e)(C.v),
						O = Object(c.useMemo)(() => f >= ka.a.InitChannels || !g, [f, g]),
						j = Object(c.useCallback)(() => {
							const n = Object(Fe.getShareToNewChatUrl)(e);
							t(Object(ye.b)(n))
						}, [t, e]),
						E = Object(c.useCallback)((e, t) => {
							u(n => e ? [...n, t] : n.filter(e => e !== t))
						}, []),
						v = Object(c.useMemo)(() => Object(Fe.getChatUnitType)(e), [e]),
						_ = Object(c.useMemo)(() => !Boolean(d.length), [d]),
						I = Object(c.useMemo)(() => us._({
							"*": "Share to {amount of chats} chats",
							_1: "Share to {amount of chats} chat"
						}, [us._param("amount of chats", d.length || ""), us._plural(d.length)], {
							hk: "2O8DGN"
						}), [d]);
					Object(c.useEffect)(() => {
						t(Object(V.e)(v))
					}, [v, t]), Object(c.useEffect)(() => {
						(null == a ? void 0 : a.current) && a.current.focus()
					}, []), Object(c.useEffect)(() => {
						if (O) {
							const e = n.getState();
							Object(C.e)(e).length ? i(Object(C.e)(e)) : j()
						}
					}, [n, j, O]);
					return r.a.createElement(rs.a, null, r.a.createElement(is.a, {
						title: us._("Share to chat", null, {
							hk: "MfUYD"
						})
					}), r.a.createElement(ms, {
						channels: s,
						channelsFilter: h,
						chatUnitTypeData: v,
						shouldShowChannels: O,
						message: e,
						onChannelClick: E,
						onClickCreateNewChannel: () => {
							j()
						},
						searchRef: a,
						setChannelsFilter: m
					}), r.a.createElement(os.a, {
						primaryButtonText: I,
						primaryButtonDisabled: _ || p,
						secondaryButtonAction: () => {
							t(Object(H.M)())
						},
						primaryButtonAction: () => {
							b(!0), t(Object(G.s)(d, e, ke.c.TEXT)), t(Object(l.I)())
						}
					}))
				},
				bs = n("./src/chat/components/Sidebar/index.tsx"),
				gs = n("./src/chat/actions/sendbird/sdk.ts"),
				fs = n("./src/chat/constants/toast.ts");

			function Os() {
				return (Os = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var js = e => r.a.createElement(b.a, Os({}, e, {
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

			function Es() {
				return (Es = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var vs = e => r.a.createElement(b.a, Es({}, e, {
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
				_s = n("./src/chat/components/ToastNotification/index.m.less"),
				Cs = n.n(_s);
			const Is = [fs.a.ConnectionClosed, fs.a.ConnectionPending],
				ys = [fs.a.SomethingWentWrong, fs.a.ShareLinkRateLimit, fs.a.ShareLinkGone, fs.a.ShareLinkInvalidRequest, fs.a.ShareLinkNotFound, _.a.UnsupportedBrowser, _.a.InvalidMediaType, _.a.FileSizeLimitExceeded, _.a.ActiveFilesLimitExceeded],
				xs = [fs.a.LinkDisabled],
				Ss = e => Is.includes(e),
				Ns = e => ys.includes(e),
				ws = e => xs.includes(e);
			var ks = () => {
					const e = Object(o.e)(e => e.toast.toast),
						t = Object(o.e)(e => e.toast.customErrorMessage),
						n = Object(o.d)(),
						a = Object(o.e)(nt.h);
					return r.a.createElement("div", {
						className: Object(i.a)(Cs.a.Wrapper, {
							[Cs.a.show]: !!e || !!t
						})
					}, (e || t) && r.a.createElement("div", {
						className: Object(i.a)(Cs.a.Content, {
							[Cs.a.pending]: Ss(e),
							[Cs.a.error]: Boolean(t) || Ns(e),
							[Cs.a.info]: ws(e),
							[Cs.a.isFullSize]: a
						})
					}, r.a.createElement("button", {
						className: Cs.a.CloseButton,
						onClick: () => {
							n(Object(v.c)(0))
						}
					}, r.a.createElement(te.a, {
						className: Cs.a.CloseButtonIcon
					})), r.a.createElement("div", {
						className: Cs.a.InfoWrapper
					}, r.a.createElement("div", {
						className: Cs.a.Icon
					}, t ? r.a.createElement(js, null) : e && (e => {
						switch (e) {
							case fs.a.LinkCopied:
							case fs.a.LinkDisabled:
							case fs.a.ConnectionOpen:
								return r.a.createElement(vs, null);
							case fs.a.ConnectionPending:
							case fs.a.ConnectionClosed:
							case fs.a.SomethingWentWrong:
							case fs.a.ShareLinkRateLimit:
							case fs.a.ShareLinkGone:
							case fs.a.ShareLinkInvalidRequest:
							case fs.a.ShareLinkNotFound:
							case _.a.UnsupportedBrowser:
							case _.a.InvalidMediaType:
							case _.a.FileSizeLimitExceeded:
							case _.a.ActiveFilesLimitExceeded:
								return r.a.createElement(js, null);
							default:
								return null
						}
					})(e)), r.a.createElement("div", {
						className: Cs.a.Message
					}, t || e && (e => {
						switch (e) {
							case fs.a.ConnectionOpen:
								return oe.fbt._("Found the internet!", null, {
									hk: "3jLr8W"
								});
							case fs.a.ConnectionPending:
								return oe.fbt._("Looking for the internet...", null, {
									hk: "1JPRuh"
								});
							case fs.a.ConnectionClosed:
								return oe.fbt._("Hmm, no internet?", null, {
									hk: "134peM"
								});
							case fs.a.SomethingWentWrong:
								return oe.fbt._("Oops! Something went wrong", null, {
									hk: "4CGwU7"
								});
							case fs.a.LinkCopied:
								return oe.fbt._("Link copied!", null, {
									hk: "1YEENU"
								});
							case fs.a.LinkDisabled:
								return oe.fbt._("Your invite links have been reset", null, {
									hk: "l8FWi"
								});
							case _.a.UnsupportedBrowser:
								return oe.fbt._("Oops! Unsupported browser for Media uploading", null, {
									hk: "3incN0"
								});
							case _.a.InvalidMediaType:
								return oe.fbt._("Oops! Chat only supports files in JPEG, PNG and GIF format", null, {
									hk: "8s0vB"
								});
							case _.a.FileSizeLimitExceeded:
								return oe.fbt._("Oops! Media file size limit exceeded. {Max gif file size}MB for GIF and {Max image file size}MB for JPEG and PNG", [oe.fbt._param("Max gif file size", String(40)), oe.fbt._param("Max image file size", String(20))], {
									hk: "2twjo7"
								});
							case fs.a.ShareLinkRateLimit:
								return oe.fbt._("That didn't work, try joining the chat later", null, {
									hk: "30uvo2"
								});
							case fs.a.ShareLinkInvalidRequest:
							case fs.a.ShareLinkNotFound:
							case fs.a.ShareLinkGone:
								return oe.fbt._("This link has expired", null, {
									hk: "3GpAgM"
								});
							case _.a.ActiveFilesLimitExceeded:
								return oe.fbt._("Oops! Too many files per message", null, {
									hk: "2x9klR"
								});
							default:
								return null
						}
					})(e)), r.a.createElement("button", {
						className: Cs.a.ActionButton,
						onClick: () => {
							if (e) {
								const t = (e => {
									switch (e) {
										case fs.a.ConnectionClosed:
											return gs.g;
										default:
											return null
									}
								})(e);
								t && n(t())
							}
						}
					}, e && (e => {
						switch (e) {
							case fs.a.ConnectionClosed:
								return oe.fbt._("RECONNECT", null, {
									hk: "3jJ04G"
								});
							default:
								return ""
						}
					})(e)))))
				},
				Ms = n("./src/chat/constants/channels.ts"),
				Ts = n("./src/chat/constants/container.ts");
			const Ds = () => null;
			var As = Object(za.a)({
					ErrorComponent: Ds,
					getComponent: () => Object(Va.a)(() => n.e("OverlayBlockUser").then(n.bind(null, "./src/chat/components/OverlayBlockUser/index.tsx"))).then(e => e.default),
					LoadingComponent: Ds
				}),
				Ls = n("./src/chat/components/UserMetaInfo/index.tsx"),
				Us = n("./src/chat/controls/MediaObject/index.m.less"),
				Ps = n.n(Us);
			const Rs = Ft.a.wrapped(e => {
				const [t, n, a] = r.a.Children.toArray(e.children);
				return r.a.createElement("div", {
					className: e.className
				}, t, n, a)
			}, "MediaObject", Ps.a);
			var Bs = n("./src/chat/controls/Title/index.tsx"),
				Hs = n("./src/chat/icons/Nsfw/index.tsx"),
				Fs = n("./src/chat/components/OverlayChannelInvited/index.m.less"),
				Gs = n.n(Fs);
			const {
				fbt: zs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Vs = ({
				children: e
			}) => r.a.createElement("span", {
				className: Gs.a.LightTextSmall
			}, e), Ws = ({
				inviterContact: e
			}) => e ? r.a.createElement(Vs, null, r.a.createElement(Ls.a, {
				contact: e
			})) : null, Ks = ({
				channelInviter: e,
				inviterContact: t,
				channelMessages: n,
				channelType: a,
				channelId: s
			}) => {
				const c = t && !!t.isNSFW;
				return e ? r.a.createElement(r.a.Fragment, null, r.a.createElement("a", {
					target: Xa.d.BLANK,
					rel: Xa.c,
					href: `${It.a.redditUrl}/user/${e.name}`
				}, r.a.createElement(Rs, {
					className: Gs.a.MediaObject
				}, c ? r.a.createElement(Hs.a, {
					className: Gs.a.NSFWIcon
				}) : r.a.createElement(me.a, {
					className: Gs.a.UserPic,
					userId: e.id
				}), r.a.createElement("div", {
					className: Gs.a.TitleContainer
				}, r.a.createElement(Bs.a, {
					className: Gs.a.Title,
					bold: !0
				}, e.name), c && r.a.createElement("span", {
					className: Gs.a.WarningTextNSFW
				}, zs._("NSFW", null, {
					hk: "3rI4EF"
				}))), r.a.createElement(Ws, {
					inviterContact: t
				}))), void 0 !== a && s && r.a.createElement(Zs, {
					channelType: a,
					channelMessages: n
				}), r.a.createElement("div", {
					className: Gs.a.Container
				})) : null
			}, Zs = ({
				channelType: e,
				channelMessages: t
			}) => {
				const n = B()([...t], "createdAt");
				return t && t.length ? r.a.createElement(ga, {
					channelType: e,
					messageList: n,
					inPreview: !0
				}) : null
			}, qs = ({
				userName: e
			}) => r.a.createElement("p", null, zs._("Accept to chat with {userName}{restText}", [zs._param("userName", r.a.createElement("span", {
				className: Gs.a.BoldText
			}, e)), zs._param("restText", r.a.createElement("span", null, ". If you ignore, the chat request will be removed, and we won’t let the sender know."))], {
				hk: "3FVxLq"
			})), Qs = ({
				userName: e,
				isQuickActionBlock: t
			}) => t ? zs._("Are you sure you want to block {userName}", [zs._param("userName", r.a.createElement("span", {
				className: Gs.a.BoldText
			}, ` ${e}?`))], {
				hk: "12VekN"
			}) : zs._("Are you sure you want to mark this chat as spam? You will also block {userName}", [zs._param("userName", r.a.createElement("span", {
				className: Gs.a.BoldText
			}, ` ${e}?`))], {
				hk: "1teJQL"
			});
			var Xs = ({
				channelId: e
			}) => {
				var t, n;
				const a = Object(o.d)(),
					[s, i] = Object(c.useState)(!1);
				Object(c.useEffect)(() => {
					i(!1)
				}, [e]);
				const d = Object(o.e)(t => Object(C.i)(t, e)),
					u = Object(o.e)(t => Object(Ve.d)(t, e)),
					h = Object(o.e)(t => Object(C.z)(t, e)),
					m = Object(o.e)(pe.p),
					p = Object(o.e)(pe.r),
					b = Object(c.useCallback)(() => {
						a(Object(H.y)(e)), a(Object(l.p)(e))
					}, [a, e]),
					g = Object(c.useCallback)(() => {
						u && (a(Object(H.B)(e, u, !0)), a(Object(l.r)(e)))
					}, [a, e, u]),
					f = Object(c.useCallback)(() => {
						u && (a(Object(H.B)(e, u)), m && a(Object(l.q)()), p && a(Object(l.s)(e, h)))
					}, [a, e, u, m, p, h]),
					O = Object(c.useCallback)(() => {
						a(Object(H.N)(Ms.b.INVITED, e))
					}, [a, e]),
					j = Object(c.useMemo)(() => m ? zs._("Block", null, {
						hk: "4CA4VX"
					}) : zs._("Mark as spam", null, {
						hk: "3Iy1wd"
					}), [m]),
					E = Object(c.useMemo)(() => (null == d ? void 0 : d.type) === J.b.Direct, [d]),
					v = Object(c.useMemo)(() => E ? zs._("Chat Request", null, {
						hk: "1sWJM0"
					}) : zs._("Group invite", null, {
						hk: "JPFyz"
					}), [E]);
				return r.a.createElement(rs.a, null, r.a.createElement(xa.a, {
					channelId: e,
					title: v,
					showMenu: E
				}), r.a.createElement($e.a, {
					className: Gs.a.Scroller
				}, r.a.createElement(Ks, {
					channelInviter: null == d ? void 0 : d.inviter,
					channelMessages: h,
					inviterContact: u,
					channelId: null == d ? void 0 : d.channelId,
					channelType: null == d ? void 0 : d.type
				})), r.a.createElement("div", {
					className: Gs.a.OverlayControlBarWrapper
				}, s ? r.a.createElement(os.a, {
					className: Gs.a.OverlayControlBar,
					secondaryButtonText: zs._("Nevermind", null, {
						hk: "30ppMU"
					}),
					primaryButtonText: j,
					primaryButtonAction: f,
					secondaryButtonAction: O
				}, r.a.createElement(Qs, {
					userName: null === (t = null == d ? void 0 : d.inviter) || void 0 === t ? void 0 : t.name,
					isQuickActionBlock: m
				})) : r.a.createElement(os.a, {
					className: Gs.a.OverlayControlBar,
					secondaryButtonText: zs._("Ignore", null, {
						hk: "1ws6QH"
					}),
					secondaryButtonAction: g,
					primaryButtonText: zs._("Accept", null, {
						hk: "249yqF"
					}),
					primaryButtonAction: b,
					primaryButtonBlock: m || p,
					primaryButtonBlockText: j,
					primaryButtonBlockAction: () => i(!0)
				}, r.a.createElement(qs, {
					userName: null === (n = null == d ? void 0 : d.inviter) || void 0 === n ? void 0 : n.name
				}))))
			};
			const Js = () => null;
			var Ys = Object(za.a)({
				ErrorComponent: Js,
				getComponent: () => Object(Va.a)(() => n.e("OverlayChannelRemoval").then(n.bind(null, "./src/chat/components/OverlayChannelRemoval/index.tsx"))).then(e => e.default),
				LoadingComponent: Js
			});
			const $s = () => null;
			var ec = Object(za.a)({
					ErrorComponent: $s,
					getComponent: () => Object(Va.a)(() => n.e("OverlayDeleteMessage").then(n.bind(null, "./src/chat/components/OverlayDeleteMessage/index.tsx"))).then(e => e.default),
					LoadingComponent: $s
				}),
				tc = n("./src/chat/components/OverlayDirectsEmptySkeletonState/index.tsx");
			const nc = () => null;
			var ac = Object(za.a)({
				ErrorComponent: nc,
				getComponent: () => Object(Va.a)(() => n.e("OverlayDirectsEmptyState").then(n.bind(null, "./src/chat/components/OverlayDirectsEmptyState/index.tsx"))).then(e => e.default),
				LoadingComponent: nc
			});
			const sc = () => null;
			var cc = Object(za.a)({
				ErrorComponent: sc,
				getComponent: () => Object(Va.a)(() => n.e("OverlayKickUser").then(n.bind(null, "./src/chat/components/OverlayKickUser/index.tsx"))).then(e => e.default),
				LoadingComponent: sc
			});
			const rc = () => null;
			var oc = Object(za.a)({
				ErrorComponent: rc,
				getComponent: () => Object(Va.a)(() => n.e("OverlayLinkSharingSettings").then(n.bind(null, "./src/chat/components/OverlayLinkSharingSettings/index.tsx"))).then(e => e.default),
				LoadingComponent: rc
			});
			const ic = () => null;
			var lc = Object(za.a)({
				ErrorComponent: ic,
				getComponent: () => Object(Va.a)(() => n.e("OverlayNSFWWarning").then(n.bind(null, "./src/chat/components/OverlayNSFWWarning/index.tsx"))).then(e => e.default),
				LoadingComponent: ic
			});
			const dc = () => null;
			var uc = Object(za.a)({
				ErrorComponent: dc,
				getComponent: () => Object(Va.a)(() => n.e("ChatOverlayReport").then(n.bind(null, "./src/chat/components/OverlayReport/index.tsx"))).then(e => e.default),
				LoadingComponent: dc
			});
			const hc = e => e.userIds ? r.a.createElement(tc.a, null) : e.channelId ? e.action === Ms.a.VIEW_INVITE && e.channelId ? r.a.createElement(Xs, {
				channelId: e.channelId
			}) : e.action === Ms.a.VIEW_MEMBERS && e.channelId ? r.a.createElement(Ka, {
				channelId: e.channelId
			}) : e.action === Ms.a.VIEW_NSFW_CONFIRMATION && e.channelId ? r.a.createElement(lc, {
				channelId: e.channelId
			}) : e.action === Re.a.Block && e.attrId && e.channelId ? r.a.createElement(As, {
				channelId: e.channelId,
				blockedUserId: e.attrId
			}) : e.action === ke.a.DELETE && e.channelId && e.attrId ? r.a.createElement(ec, {
				channelId: e.channelId,
				messageId: parseInt(e.attrId)
			}) : e.action === ke.a.REPORT && e.attr && e.attrId && e.channelId && e.inReportRevamp ? r.a.createElement(uc, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : e.action === Re.a.Kick && e.attr && e.attrId && e.channelId ? r.a.createElement(cc, {
				channelId: e.channelId,
				attr: e.attr,
				attrId: e.attrId
			}) : e.action === Ms.a.DENY && e.channelId ? r.a.createElement(Ys, {
				channelId: e.channelId
			}) : e.action === Ms.a.INVITE_LINK_SETTINGS && e.channelId ? r.a.createElement(oc, {
				inviteLinkDataModelId: e.channelId,
				isForDirect: !!e.attr
			}) : void 0 : r.a.createElement(ac, null);
			var mc = n("./src/chat/selectors/platform.ts"),
				pc = n("./src/chat/selectors/reportRevamp.ts"),
				bc = n("./src/chat/selectors/sidebar.ts"),
				gc = n("./src/chat/components/FrameContent/index.m.less"),
				fc = n.n(gc);
			const Oc = fc.a.Main,
				jc = Object(Jt.a)({
					channel: C.o,
					container: nt.a,
					userAccount: oa.d,
					isSidebarVisible: bc.b,
					inReportingRevampSelector: pc.a,
					isImageShareEnabled: (e, t) => Object(pe.k)(e, t.match.params.channelId),
					isChannelInPendingState: C.J,
					queryParamsFromUrl: mc.c
				}),
				Ec = Object(o.b)(jc);
			class vc extends r.a.Component {
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
						case d === Ms.a.SHARE: {
							const e = l && l.message;
							return this.props.location.search && e && r.a.createElement(ps, {
								message: e
							})
						}
						case d === Ms.a.VIEW_MEMBERS:
							return u && r.a.createElement(Ka, {
								channelId: u
							});
						case d === Ms.a.SHARE_NEW_CHANNEL:
						case d === Ms.a.CREATE:
						case d === Ms.a.INVITE_MEMBERS: {
							let e;
							return d === Ms.a.SHARE_NEW_CHANNEL && (e = l && l.message), r.a.createElement(qa, {
								messageValue: e
							})
						}
						case t === Ts.a.MINIMIZED:
							return r.a.createElement(Ga.a, null);
						default: {
							const n = hc({
								...this.props.match.params,
								inReportRevamp: s
							});
							return r.a.createElement("div", {
								className: fc.a.Main
							}, r.a.createElement(bs.b, null), r.a.createElement("div", {
								ref: this.mainRef,
								className: Object(i.a)(fc.a.Content, {
									[fc.a.hidden]: a,
									[fc.a.isFullSize]: t === Ts.a.FULL
								})
							}, n ? r.a.createElement("div", {
								className: fc.a.Modal
							}, n) : e && u && r.a.createElement(r.a.Fragment, null, r.a.createElement(Fa, {
								channel: e
							}), c && !o && r.a.createElement(T, {
								dropZoneRef: this.mainRef
							}))))
						}
					}
				}
				render() {
					return r.a.createElement("main", {
						className: fc.a.Main,
						id: et
					}, this.getContent(), r.a.createElement(ks, null))
				}
			}
			t.b = Ec(vc)
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
				j = n("./src/chat/selectors/reportRevamp.ts"),
				E = n("./src/telemetry/models/Event.ts"),
				v = n("./src/chat/components/Message/ActionButtonGroup.m.less"),
				_ = n.n(v);
			const C = ({
				children: e,
				onClick: t
			}) => c.a.createElement("span", {
				className: _.a.ActionButton,
				onClick: t
			}, e);
			var I = e => {
					const {
						channelId: t,
						message: {
							messageId: n,
							sender: a
						},
						fromCurrentUser: i,
						inPreview: l,
						isMod: d
					} = e, u = null == a ? void 0 : a.userId, h = Object(r.e)(j.a), m = Object(r.d)(), v = Object(s.useCallback)(() => {
						m(Object(p.b)(Object(O.messageActionUrl)(t, n, b.a.DELETE)))
					}, [m, t, n]), I = Object(s.useCallback)(() => {
						m(Object(p.b)(Object(O.inviteMessageActionUrl)(t, n, b.a.REPORT)))
					}, [m, t, n]), y = Object(s.useCallback)(() => {
						m(Object(p.b)(Object(O.messageActionUrl)(t, n, b.a.REPORT)))
					}, [m, t, n]), x = Object(s.useCallback)(() => {
						u && m(Object(p.b)(Object(O.userActionUrl)(t, u, g.a.Kick, {
							source: E.b.ChatView
						})))
					}, [m, t, u]);
					return c.a.createElement("div", {
						className: Object(o.a)(_.a.Wrapper, {
							[_.a.single]: !d || i
						})
					}, d && !i ? c.a.createElement(c.a.Fragment, null, c.a.createElement(C, {
						onClick: v
					}, c.a.createElement(f.f, {
						className: _.a.Button
					})), h && c.a.createElement(C, {
						onClick: () => l ? I() : y()
					}, c.a.createElement(f.c, {
						className: _.a.Button
					})), c.a.createElement(C, {
						onClick: x
					}, c.a.createElement(f.e, {
						className: _.a.Button
					}))) : i ? c.a.createElement(C, {
						onClick: v
					}, c.a.createElement(f.f, {
						className: _.a.Button
					})) : h ? c.a.createElement(C, {
						onClick: () => l ? I() : y()
					}, c.a.createElement(f.c, {
						className: _.a.Button
					})) : null)
				},
				y = n("./src/lib/lessComponent.tsx"),
				x = n("./src/chat/actions/message/index.ts"),
				S = n("./src/chat/controls/TextButton.tsx"),
				N = n("./src/chat/components/Message/CollapsedMessage.m.less"),
				w = n.n(N);
			var k = Object(r.b)(void 0, (e, t) => ({
					uncollapseMessage: () => {
						e(Object(x.C)(t)), e(Object(h.R)(t.messageId))
					},
					viewCollapsedMessage: () => {
						e(Object(h.fb)(t.messageId))
					}
				}))(y.a.wrapped(({
					className: e,
					uncollapseMessage: t,
					viewCollapsedMessage: n
				}) => c.a.createElement("div", {
					onLoad: n,
					className: e
				}, a.fbt._("This message has been collapsed due to potentially offensive language.", null, {
					hk: "4qscuz"
				}), c.a.createElement("div", null, c.a.createElement(S.a, {
					onClick: t
				}, a.fbt._("View Message", null, {
					hk: "QjaEs"
				})))), "CollapsedMessage", w.a)),
				M = n("./src/chat/components/Message/FailedMenu.m.less"),
				T = n.n(M);
			const D = y.a.div("ButtonControls", T.a),
				A = y.a.span("Text", T.a),
				L = y.a.wrapped(f.a, "Button", T.a);
			class U extends s.Component {
				constructor() {
					super(...arguments), this.handleResend = () => this.props.onResend(this.props.clientMessageId), this.handleDelete = () => this.props.onDelete(this.props.clientMessageId)
				}
				render() {
					return c.a.createElement(D, null, c.a.createElement(A, null, a.fbt._("Failed to send", null, {
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
			var P = Object(r.b)(void 0, (e, {
					channelId: t
				}) => ({
					onResend: n => e(Object(x.A)(t, n)),
					onDelete: t => e(Object(x.z)({
						clientMessageId: t
					}))
				}))(U),
				R = n("./src/chat/components/Message/LinkedText.tsx"),
				B = n("./src/lib/portal/index.tsx"),
				H = n("./src/chat/constants/keys.ts"),
				F = n("./src/chat/icons/svgs/NavClose/index.tsx"),
				G = n("./src/chat/components/MediaPreview/index.m.less"),
				z = n.n(G);
			var V = ({
					onClose: e,
					url: t
				}) => {
					const n = Object(s.useRef)(null);
					Object(s.useEffect)(() => {
						(null == n ? void 0 : n.current) && n.current.focus()
					}, []);
					const a = Object(s.useCallback)(t => {
						t.key === H.h && e()
					}, [e]);
					return c.a.createElement(B.a, null, c.a.createElement("div", {
						ref: n,
						className: z.a.MediaPreview,
						onClick: e,
						onKeyDown: a,
						tabIndex: 0,
						role: "button",
						"aria-pressed": "false"
					}, c.a.createElement(f.d, {
						className: z.a.CloseIcon
					}, c.a.createElement(F.a, null)), t && c.a.createElement("img", {
						className: z.a.Image,
						src: t,
						onClick: e => e.stopPropagation()
					})))
				},
				W = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx");
			var K = n("./src/chat/helpers/linkParser/index.ts"),
				Z = n("./src/chat/models/Message/adapter.ts"),
				q = n("./src/chat/models/Uploads/index.ts"),
				Q = n("./src/chat/selectors/app.ts"),
				X = n("./src/chat/selectors/uploads.ts"),
				J = n("./src/chat/components/Message/Media/index.m.less"),
				Y = n.n(J);
			const $ = {
				[q.c.Submit]: Y.a.submit,
				[q.c.Uploading]: Y.a.uploading,
				[q.c.Processing]: Y.a.processing
			};
			var ee = ({
					messageDataType: e,
					uploadId: t,
					uploadedImage: n,
					fromCurrentUser: i
				}) => {
					var l, d, u, m;
					const p = Object(r.d)(),
						b = Object(r.e)(Q.b),
						g = Object(r.e)(e => Object(X.c)(e, t)),
						[f, O] = Object(s.useState)(!1),
						j = Boolean((null == g ? void 0 : g.status) === q.c.Failed),
						E = Boolean((null == g ? void 0 : g.status) === q.c.Success),
						v = Boolean((null == g ? void 0 : g.status) === q.c.Canceled),
						_ = !(j || v || E || !g),
						C = g && $[g.status],
						I = (null == n ? void 0 : n.url) || (null === (l = null == g ? void 0 : g.metadata) || void 0 === l ? void 0 : l.localUrl),
						y = (null == n ? void 0 : n.width) || (null === (d = null == g ? void 0 : g.metadata) || void 0 === d ? void 0 : d.width),
						x = (null == n ? void 0 : n.height) || (null === (u = null == g ? void 0 : g.metadata) || void 0 === u ? void 0 : u.height),
						S = Object(s.useMemo)(() => {
							if (x && y) return (({
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
								originalHeight: x,
								originalWidth: y
							})
						}, [x, y, b]);
					return (null == n ? void 0 : n.phase) !== Z.a.PreUpload || i ? c.a.createElement(c.a.Fragment, null, !j && f && I && c.a.createElement(V, {
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
							[Y.a.failed]: j
						}),
						src: Object(K.c)(I)
					}), _ && c.a.createElement("div", {
						className: Object(o.a)(Y.a.ProgressBar, C)
					}, (null === (m = null == g ? void 0 : g.progress) || void 0 === m ? void 0 : m.percent) && c.a.createElement("div", {
						className: Y.a.UploadingIndicatorWrapper
					}, c.a.createElement("div", {
						className: Y.a.UploadingIndicator,
						style: {
							width: `${Number(g.progress.percent).toFixed(2)}%`
						}
					})))), j && c.a.createElement("div", {
						className: Y.a.FailedText
					}, a.fbt._("Failed to upload", null, {
						hk: "wy9r9"
					}))) : c.a.createElement(W.c, {
						height: null == S ? void 0 : S.height,
						width: null == S ? void 0 : S.width
					})
				},
				te = n("./src/chat/components/Message/OffensiveMessageReportPrompt.m.less"),
				ne = n.n(te);
			const ae = y.a.wrapped(S.a, "Regular", ne.a),
				se = y.a.wrapped(S.a, "Active", ne.a),
				ce = Object(r.b)(void 0, (e, t) => ({
					cancel: () => {
						e(Object(x.w)(t)), e(Object(h.b)(t.channelId, t.messageId))
					},
					reportOffensiveMessage: () => {
						e(Object(p.b)(Object(O.inviteMessageActionUrl)(t.channelId, t.messageId, b.a.REPORT))), e(Object(x.w)(t)), e(Object(h.Q)(t.channelId, t.messageId))
					}
				}));
			var re = y.a.wrapped(ce(e => c.a.createElement("div", {
					className: e.className
				}, a.fbt._("Was this message offensive?", null, {
					hk: "1sBVkd"
				}), c.a.createElement("div", null, c.a.createElement(ae, {
					onClick: () => e.cancel(e)
				}, a.fbt._("No", null, {
					hk: "SG3Y"
				})), c.a.createElement(se, {
					onClick: () => e.reportOffensiveMessage(e)
				}, a.fbt._("Yes", null, {
					hk: "3ONldA"
				}))))), "OffensiveMessageReport", ne.a),
				oe = n("./src/chat/components/Message/RichUnit/Comment/loader.tsx"),
				ie = n("./src/higherOrderComponents/makeAsync.tsx"),
				le = n("./src/lib/loadWithRetries/index.ts");
			const de = () => null;
			var ue = Object(ie.a)({
					ErrorComponent: de,
					getComponent: () => Object(le.a)(() => n.e("ExternalLinkUnit").then(n.bind(null, "./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.tsx"))).then(e => e.default),
					LoadingComponent: de
				}),
				he = n("./src/chat/components/Message/RichUnit/Post/loader.tsx"),
				me = n("./src/lib/prettyPrintNumber/index.ts"),
				pe = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.tsx"),
				be = n("./src/chat/components/Message/RichUnit/commonComponents/Header.tsx"),
				ge = n("./src/chat/components/Message/RichUnit/commonComponents/ImageContent.tsx"),
				fe = n("./src/chat/components/Message/RichUnit/Subreddit/SubredditRichUnit.m.less"),
				Oe = n.n(fe);
			const je = y.a.div("Delimiter", Oe.a),
				Ee = y.a.wrapped(ge.a, "ImageContent", Oe.a),
				ve = y.a.wrapped(({
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
				})), "Content", Oe.a),
				_e = y.a.wrapped(({
					className: e,
					darkBackground: t,
					richUnitData: n,
					richUnitData: {
						subscribersCount: a = 0,
						activeCount: s = 0
					}
				}) => {
					var r, i, l, u;
					const h = `${Object(me.b)(a)} members • ${Object(me.b)(s)} online`,
						m = `/r/${n.id}`;
					return c.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(d.e)(t, "_blank")
							})(e, m)
						},
						className: Object(o.a)(e, {
							[Oe.a.dark]: t
						})
					}, c.a.createElement(be.a, {
						subredditName: n.id,
						iconUrl: null === (r = null == n ? void 0 : n.styles) || void 0 === r ? void 0 : r.icon,
						subredditTitle: n.title
					}), (null === (i = n.styles) || void 0 === i ? void 0 : i.bannerBackgroundImage) || !(null == n ? void 0 : n.subredditType) && !(null === (l = n.styles) || void 0 === l ? void 0 : l.bannerBackgroundImage) ? null : c.a.createElement(je, null), (null == n ? void 0 : n.subredditType) && c.a.createElement(ve, {
						imageUrl: null === (u = null == n ? void 0 : n.styles) || void 0 === u ? void 0 : u.bannerBackgroundImage,
						title: (null == n ? void 0 : n.publicDescriptionText) || "",
						subredditType: (null == n ? void 0 : n.subredditType) || "",
						isNsfw: Boolean(null == n ? void 0 : n.isNsfw)
					}), c.a.createElement(pe.a, {
						isSubreddit: !0,
						metaInfo: h
					}))
				}, "SubredditRichUnit", Oe.a);
			var Ce = y.a.wrapped(({
					className: e,
					darkBackground: t,
					richUnitData: n
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(_e, {
					darkBackground: t,
					richUnitData: n
				})), "RichUnitWrapper", Oe.a),
				Ie = n("./src/chat/actions/message/reactions.ts"),
				ye = n("./src/chat/actions/messageReactions/index.ts"),
				xe = n("./src/chat/actions/tooltip.ts"),
				Se = n("./src/chat/components/MessageInput/constants.ts"),
				Ne = n("./src/chat/controls/Svg/index.tsx");

			function we() {
				return (we = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ke = e => c.a.createElement(Ne.a, we({}, e, {
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
				Te = n("./src/chat/selectors/sendbird.ts"),
				De = n("./src/chat/selectors/user.ts"),
				Ae = n("./src/chat/components/Reactions/ReactionsTray/index.m.less"),
				Le = n.n(Ae);
			var Ue = ({
					message: e,
					onClick: t
				}) => {
					const n = Object(r.d)();
					Object(s.useEffect)(() => {
						n(Object(h.y)())
					}, [n]);
					const a = Object(r.e)(De.a),
						o = Object(r.e)(Te.d),
						i = Object(s.useCallback)(s => {
							const c = e.reactions.find(e => e.key === s),
								r = !!Boolean(c) && Boolean(null == c ? void 0 : c.userIds.find(e => e === a));
							n(Object(Ie.b)({
								channelSendbirdId: e.channelId,
								messageSendbirdId: e.messageId,
								reactionIconKey: s,
								type: Me.a.ADD,
								userId: a
							})), t();
							const i = null == o ? void 0 : o.findIndex(e => e.key === s);
							i && (r || n(Object(h.T)(e.messageId, i + 1, s, "bar")))
						}, [t, e, n, a, o]);
					return o ? c.a.createElement("div", {
						className: Le.a.ReactionsContainer
					}, c.a.createElement("div", {
						className: Le.a.ReactionsIcons
					}, o.map((e, t) => c.a.createElement("span", {
						key: t,
						onClick: () => i(e.key),
						className: Le.a.ReactionIcon,
						style: {
							animationDelay: `${.3/7*t+.1}s`,
							animationDuration: "0.3s"
						}
					}, c.a.createElement("img", {
						className: Le.a.ReactionImage,
						src: e.url,
						alt: e.altText
					})))), c.a.createElement("span", {
						className: Le.a.AddIcon,
						onClick: () => {
							t(), n(Object(ye.b)(e.messageId)), n(Object(xe.c)({
								tooltipId: Se.c
							})), n(Object(h.z)())
						}
					}, c.a.createElement(ke, {
						isFilled: !0
					}))) : null
				},
				Pe = n("./src/chat/components/Snoomoji/index.tsx"),
				Re = n("./src/chat/controls/Gif/index.tsx"),
				Be = n("./src/chat/controls/TooltipHooked/loader.tsx"),
				He = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				Fe = n("./src/chat/helpers/dom.ts"),
				Ge = n("./src/chat/helpers/time/index.tsx");

			function ze() {
				return (ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Ve = e => c.a.createElement(Ne.a, ze({}, e, {
					viewBox: "0 0 20 20"
				}), c.a.createElement("path", {
					d: "M10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5Z"
				}), c.a.createElement("path", {
					d: "M10 6C10.8284 6 11.5 5.32843 11.5 4.5C11.5 3.67157 10.8284 3 10 3C9.17157 3 8.5 3.67157 8.5 4.5C8.5 5.32843 9.17157 6 10 6Z"
				}), c.a.createElement("path", {
					d: "M10 17C10.8284 17 11.5 16.3284 11.5 15.5C11.5 14.6716 10.8284 14 10 14C9.17157 14 8.5 14.6716 8.5 15.5C8.5 16.3284 9.17157 17 10 17Z"
				})),
				We = n("./src/chat/icons/svgs/Smile/index.tsx"),
				Ke = n("./src/chat/models/RichUnit/index.ts"),
				Ze = n("./src/chat/selectors/experiments.ts"),
				qe = n("./src/chat/selectors/richUnits.ts"),
				Qe = n("./src/chat/components/Message/Bubble.m.less"),
				Xe = n.n(Qe);
			const {
				PENDING: Je,
				USER: Ye
			} = b.d, {
				POST: $e,
				USER_POST: et,
				COMMENT: tt,
				SNOOMOJI: nt,
				SUBREDDIT: at,
				EMBED: st,
				GIF: ct,
				IMAGE: rt
			} = b.c, ot = () => {
				const e = Object(r.d)();
				return Object(r.e)(Ze.o) ? c.a.createElement("div", {
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
			}, it = c.a.forwardRef(({
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
				var j, E;
				const v = Object(l.b)(Object(He.g)(Boolean(s))),
					_ = Object(r.e)(e => Object(Ze.k)(e, null == p ? void 0 : p.channelId)),
					C = Object(r.e)(e => Object(Ze.j)(e)),
					I = _ || !C;
				return c.a.createElement("span", {
					onMouseEnter: t => {
						var n;
						e && (null === (n = t.target) || void 0 === n ? void 0 : n.classList.contains(e)) && v.show()
					},
					onMouseLeave: v.hide,
					ref: Object(i.a)(f, v.target.ref),
					className: Object(o.a)(e, {
						[Xe.a.dark]: !s,
						[Xe.a.disabled]: n,
						[Xe.a.withBorder]: a,
						[Xe.a.currentUser]: s,
						[Xe.a.embed]: h,
						[Xe.a.noPadding]: g,
						[Xe.a.gif]: (null == p ? void 0 : p.messageData.type) === ct && !u,
						[Xe.a.media]: (null == p ? void 0 : p.messageData.type) === rt && !u && I
					})
				}, t, b && (null === (j = null == p ? void 0 : p.sender) || void 0 === j ? void 0 : j.userId) && c.a.createElement(m.a, {
					onClick: Object(Fe.b)(() => {
						var e;
						const t = null === (e = null == p ? void 0 : p.sender) || void 0 === e ? void 0 : e.nickname;
						if (t) {
							const e = Object(O.viewProfileUrl)(t);
							Object(d.e)(e, "_blank")
						}
					}),
					className: Xe.a.UserPic,
					userId: null === (E = null == p ? void 0 : p.sender) || void 0 === E ? void 0 : E.userId,
					isFlipping: !0
				}), (null == p ? void 0 : p.createdAt) && c.a.createElement(Be.a, {
					arrowProps: v.arrowProps,
					popperProps: v.popperProps,
					visible: v.visible,
					styled: !0,
					isCloseOnHover: !0,
					hide: v.hide
				}, c.a.createElement("span", {
					className: Xe.a.TimestampWrapper
				}, Object(Ge.b)(new Date(p.createdAt)))))
			});

			function lt(e) {
				return "messageId" in e && "channelId" in e
			}

			function dt(e, t) {
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
				} = e, O = Object(r.e)(e => Object(qe.b)(e, h.messageData)), j = Object(r.e)(Ze.i), E = Object(l.b)(Object(He.a)(n)), v = Object(l.b)(Object(He.c)()), _ = Object(l.b)(Object(He.d)(n)), C = Object(r.e)(e => Object(Ze.k)(e, h.channelId)), y = Object(r.e)(e => Object(Ze.j)(e)), [x, S] = Object(s.useState)(), N = Object(s.useRef)(x);
				Object(s.useEffect)(() => {
					N.current = x
				}, [x]);
				const w = C || !y;
				if (!h) return null;
				const {
					type: M,
					report: T,
					collapsedInvitePreview: D
				} = h.messageData, A = h.messageType === Je && h.error && h.clientMessageId, L = M !== nt && (M !== ct || M === ct && p), U = f && !A && !T, B = h.messageType === Ye && U, H = ((e, t, n, s, r, o) => {
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
					}), f = c.a.createElement(R.a, {
						className: Xe.a.Text,
						value: b,
						highlighMentionGroupLinks: p
					});
					if (t && m.type !== nt) return m.type === ct ? a.fbt._("Sent a GIF", null, {
						hk: "1x1QrK"
					}) : m.type === rt ? g : f;
					switch (m.type) {
						case st:
							const {
								embed: e
							} = m;
							return h !== Je && e ? c.a.createElement(ue, {
								name: e.name,
								title: e.title,
								thumbnailUrl: e.imageUrl,
								href: e.url,
								providerDisplay: e.providerDisplay,
								darkBackground: !n,
								faviconUrl: e.faviconUrl
							}) : f;
						case $e:
						case et:
							return (null == s ? void 0 : s.type) !== $e && (null == s ? void 0 : s.type) !== et || (null == s ? void 0 : s.removedByCategory) === Ke.b.Deleted ? f : c.a.createElement(he.a, {
								darkBackground: !n,
								postUrl: b,
								highlights: p,
								richUnitData: s
							});
						case tt:
							return s && (null == s ? void 0 : s.type) === tt && !s.deletedAt ? c.a.createElement(oe.a, {
								darkBackground: !n,
								commentUrl: b,
								highlights: p,
								richUnitData: s
							}) : f;
						case at:
							return s && s.type === at ? c.a.createElement(Ce, {
								darkBackground: !n,
								richUnitData: s
							}) : f;
						case nt:
							return c.a.createElement("div", {
								className: Xe.a.Snoo
							}, c.a.createElement(Pe.a, {
								iconName: b
							}));
						case ct: {
							const e = !r && (null === (i = m.gif) || void 0 === i ? void 0 : i.width) || 0,
								t = Math.min(258 / e, 1);
							return c.a.createElement(Re.a, {
								imageScale: t,
								source: b,
								title: null === (l = m.gif) || void 0 === l ? void 0 : l.title,
								height: null === (d = m.gif) || void 0 === d ? void 0 : d.height,
								width: null === (u = m.gif) || void 0 === u ? void 0 : u.width
							})
						}
						case rt: {
							const e = m.clientMessageId;
							return o ? c.a.createElement(ee, {
								messageDataType: m.type,
								uploadId: e,
								uploadedImage: m.image,
								fromCurrentUser: n
							}) : g
						}
						default:
							return f
					}
				})(h, p, n, O, d, w), F = ((e, t, n, s, r, i, l, d) => c.a.createElement(Be.a, {
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
				}, c.a.createElement(We.a, {
					isFilled: !0
				})), r && !i ? c.a.createElement("button", {
					onClick: () => {
						t.visible ? t.hide() : t.show()
					},
					className: Xe.a.BubbleMenu,
					ref: t.target.ref
				}, c.a.createElement(Ve, {
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
				})), c.a.createElement(Be.a, {
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
				}))))(E, v, _, j, u, n, p, h);
				return c.a.createElement("span", {
					className: Object(o.a)(Xe.a.MessageItemBubble, t),
					onMouseEnter: () => {
						clearTimeout(Number(N.current)), E.show()
					},
					onMouseLeave: () => {
						E.hide(), v.hide(), clearTimeout(Number(N.current)), S(setTimeout(() => {
							_.hide()
						}, 1e3))
					}
				}, c.a.createElement(it, {
					ref: Object(i.a)(E.target.ref, _.target.ref),
					fromCurrentUser: n,
					inPreview: p,
					withButton: U,
					withBorder: L,
					message: h,
					disabled: !!A,
					showUserPic: g,
					isEmbedded: d,
					className: Object(o.a)(Xe.a.MessageBubble, (O || h.messageData.type === b.c.EMBED) && !p && {
						[Xe.a.richUnit]: dt(h, !d),
						[Xe.a.richUnitResponsive]: dt(h, d)
					})
				}, h.messageType === b.d.USER && c.a.createElement(Be.a, {
					arrowProps: _.arrowProps,
					popperProps: _.popperProps,
					visible: _.visible,
					hide: _.hide,
					noArrow: !0
				}, c.a.createElement(Ue, {
					message: h,
					onClick: () => {
						_.hide()
					}
				})), p && lt(h) && function(e) {
					return Boolean(null == e ? void 0 : e.shouldCollapse)
				}(D) ? c.a.createElement(k, {
					channelId: h.channelId,
					messageId: h.messageId
				}) : H), B && F, m && c.a.createElement(ot, null), p && lt(h) && function(e) {
					return Boolean(!(null == e ? void 0 : e.shouldCollapse) && (null == e ? void 0 : e.shouldShowReportPrompt))
				}(D) && c.a.createElement(re, {
					channelId: h.channelId,
					messageId: h.messageId
				}), A && c.a.createElement(P, {
					channelId: h.channelId,
					clientMessageId: A
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
				j = e => s.a.createElement(h, {
					noUnderline: e.noUnderline,
					href: Object(l.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children),
				E = e => e.isEmbed ? (e => s.a.createElement(j, e, s.a.createElement(p, null, s.a.createElement(b, null, e.name)), s.a.createElement(g, null, s.a.createElement("span", null, s.a.createElement(f, null, e.title), s.a.createElement(O, null, e.description)))))(e) : (e => e.href ? s.a.createElement(j, e, e.children) : s.a.createElement(m, e, e.children))(e);
			var v = n("./src/chat/components/Message/LinkedText.m.less"),
				_ = n.n(v);
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
				j = n.n(O);
			const E = () => c.a.createElement("div", {
					className: j.a.NSFWIndicator
				}, c.a.createElement(m, {
					className: j.a.NSFWIcon
				}), a.fbt._("nsfw", null, {
					hk: "6M6nL"
				})),
				v = () => c.a.createElement("div", {
					className: j.a.PrivateIndicator
				}, c.a.createElement(b, null), " ", a.fbt._("private", null, {
					hk: "3xzh8w"
				})),
				_ = () => c.a.createElement("div", {
					className: j.a.RestrictedIndicator
				}, c.a.createElement(f, {
					className: j.a.RestrictedIcon
				}), a.fbt._("restricted", null, {
					hk: "2lC88Z"
				})),
				C = () => c.a.createElement("div", {
					className: j.a.EmployeesOnlyIndicator
				}, c.a.createElement(l, {
					className: j.a.EmployeesOnlyIcon
				}), a.fbt._("employees only", null, {
					hk: "3uDhE6"
				})),
				I = ({
					subredditType: e,
					isNsfw: t
				}) => {
					return c.a.createElement("div", {
						className: j.a.SubredditTypeIndicator
					}, t ? c.a.createElement(E, null) : null, (e => {
						switch (e) {
							case "RESTRICTED":
								return c.a.createElement(_, null);
							case "EMPLOYEES_ONLY":
								return c.a.createElement(C, null);
							case "PRIVATE":
								return c.a.createElement(v, null);
							default:
								return null
						}
					})(e))
				},
				y = ({
					url: e,
					isSharedToChat: t
				}) => c.a.createElement("div", {
					className: Object(r.a)(j.a.ImageContainer, {
						[j.a.isSharedToChat]: t
					})
				}, c.a.createElement("img", {
					className: j.a.Image,
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
				className: Object(r.a)(l, j.a.ImagePostRichUnit)
			}, c.a.createElement("div", {
				className: j.a.ImagePostRichUnitContent
			}, e && !i ? c.a.createElement(y, {
				url: e
			}) : null, o ? c.a.createElement(I, {
				isNsfw: a,
				subredditType: s
			}) : null, t ? c.a.createElement("div", {
				className: Object(r.a)(j.a.Title, {
					[j.a.isSharedToChat]: i
				})
			}, t) : null, n ? c.a.createElement(u, {
				className: j.a.GalleryIcon
			}) : null), e && i ? c.a.createElement(y, {
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
				p = n("./src/chat/selectors/unreadCounter.ts"),
				b = n("./src/chat/components/MinimizedPortalContainer/index.m.less"),
				g = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), {
				minimized: O
			} = u.b, j = o.a.wrapped(l.a, "HiddenCloseButton", g.a);
			j.displayName = "CloseButton";
			const E = o.a.wrapped(e => s.a.createElement("div", {
					onClick: e.onClick,
					className: e.className,
					style: {
						width: `${O.width}px`,
						height: `${O.height}px`
					}
				}, e.children), "Container", g.a),
				v = o.a.span("TitleWithCounter", g.a),
				_ = Object(m.a)({
					unreadCount: p.c,
					hasNewMessages: p.b
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
			}, s.a.createElement(v, null, f._("Chat", null, {
				hk: "3ZWpRR"
			}), s.a.createElement(h.b, {
				count: e.unreadCount,
				isEmptyCounter: e.hasNewMessages && !e.unreadCount
			})), s.a.createElement(j, null))))
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
				j = n("./src/chat/actions/channel.ts"),
				E = n("./src/chat/actions/channel/dropdown.ts"),
				v = n("./src/chat/actions/message/unreadCount.ts"),
				_ = n("./src/chat/helpers/errors.ts"),
				C = n("./src/chat/selectors/channels.ts"),
				I = n("./src/chat/singleton/SendbirdSDK.ts");
			var y = n("./src/chat/actions/settingsDropdown/index.ts"),
				x = n("./src/chat/actions/theme.ts"),
				S = n("./src/chat/actions/user/dropdown.ts"),
				N = n("./src/lib/lessComponent.tsx"),
				w = n("./src/chat/helpers/chatSelector.ts"),
				k = n("./src/chat/controls/Svg/index.tsx");

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var T = e => s.a.createElement(k.a, M({}, e, {
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
				D = n("./src/chat/components/ThemeSwitcher/index.m.less"),
				A = n.n(D);
			const L = Object(w.a)({
					theme: e => e.user.prefs.globalTheme
				}),
				U = Object(c.b)(L, (e, t) => ({
					changeModeClicked: () => e(Object(x.themeToggle)())
				})),
				P = N.a.div("Wrapper", A.a);
			U(({
				changeModeClicked: e,
				theme: t
			}) => s.a.createElement(P, {
				onClick: e
			}, s.a.createElement(T, {
				active: !0
			})));
			var R = n("./src/chat/constants/channels.ts"),
				B = n("./src/chat/constants/dropdown.ts"),
				H = n("./src/chat/controls/Dropdown/Row.tsx"),
				F = n("./src/chat/controls/TooltipHooked/TooltipConfig.ts"),
				G = n("./src/chat/controls/TooltipHooked/TooltipHooked.tsx");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var V = e => s.a.createElement(k.a, z({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				id: "icons_flat",
				"data-name": "icons flat"
			}, s.a.createElement("path", {
				d: "M12.5,10.875h-5A6.633,6.633,0,0,0,.875,17.5V18A1.127,1.127,0,0,0,2,19.125H18A1.127,1.127,0,0,0,19.125,18v-.5A6.633,6.633,0,0,0,12.5,10.875Zm5.375,7H2.125V17.5A5.381,5.381,0,0,1,7.5,12.125h5A5.381,5.381,0,0,1,17.875,17.5Z"
			}), s.a.createElement("path", {
				d: "M10,9.625A4.625,4.625,0,1,0,5.375,5,4.631,4.631,0,0,0,10,9.625ZM13.375,5a3.354,3.354,0,0,1-.59,1.9L8.1,2.215A3.371,3.371,0,0,1,13.375,5ZM7.215,3.1,11.9,7.785A3.371,3.371,0,0,1,7.215,3.1Z"
			})));
			var W = ({
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
				K = n("./src/chat/models/Theme/index.ts");

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var q = e => {
					return s.a.createElement(k.a, Z({}, e, {
						viewBox: "0 0 20 20"
					}), (() => {
						let e;
						const t = K.f[K.c.VANITY];
						return t && (e = s.a.createElement(W, {
							rotate: K.d,
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
				Q = n("./src/chat/icons/svgs/DisableNotifications/index.tsx"),
				X = n("./src/chat/icons/svgs/Edit/index.tsx"),
				J = n("./src/chat/icons/svgs/EnableNotifications/index.tsx"),
				Y = n("./src/chat/icons/svgs/InviteMember/index.tsx"),
				$ = n("./src/chat/icons/svgs/Leave/index.tsx"),
				ee = n("./src/chat/icons/svgs/Link/index.tsx"),
				te = n("./src/chat/icons/svgs/Profile/index.tsx");

			function ne() {
				return (ne = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ae = e => {
					return s.a.createElement(k.a, ne({}, e, {
						viewBox: "0 0 20 20"
					}), (() => {
						let e;
						const t = K.f[K.c.VANITY];
						return t && (e = s.a.createElement(W, {
							rotate: K.d,
							gradient: t,
							id: "settings-linear-gradient"
						})), s.a.createElement(s.a.Fragment, null, e, s.a.createElement("path", {
							d: "M10,6.875A3.125,3.125,0,1,0,13.125,10,3.129,3.129,0,0,0,10,6.875Zm0,5A1.875,1.875,0,1,1,11.875,10,1.877,1.877,0,0,1,10,11.875Z"
						}), s.a.createElement("path", {
							d: "M19.549,8.849a1.124,1.124,0,0,0-1.116-.974H17.4a.915.915,0,0,1-.828-.608.906.906,0,0,1,.163-1l.722-.723a1.127,1.127,0,0,0,.1-1.495,9.631,9.631,0,0,0-1.608-1.608,1.129,1.129,0,0,0-1.494.1l-.724.724a.92.92,0,0,1-1.018.155.906.906,0,0,1-.588-.82V1.567A1.123,1.123,0,0,0,11.151.451a8.782,8.782,0,0,0-2.3,0,1.123,1.123,0,0,0-.974,1.116V2.6a.915.915,0,0,1-.608.828.907.907,0,0,1-1-.163l-.723-.722a1.126,1.126,0,0,0-1.495-.1A9.631,9.631,0,0,0,2.443,4.051a1.127,1.127,0,0,0,.1,1.494l.724.724a.917.917,0,0,1,.155,1.018.906.906,0,0,1-.82.588H1.567a1.123,1.123,0,0,0-1.116.974,8.754,8.754,0,0,0,0,2.3,1.123,1.123,0,0,0,1.116.974H2.6a.915.915,0,0,1,.828.608.906.906,0,0,1-.163,1l-.722.723a1.127,1.127,0,0,0-.1,1.495,9.707,9.707,0,0,0,1.608,1.608,1.13,1.13,0,0,0,1.494-.1l.724-.724a.916.916,0,0,1,1.018-.155.906.906,0,0,1,.588.82v1.031a1.123,1.123,0,0,0,.974,1.116,8.754,8.754,0,0,0,2.3,0,1.123,1.123,0,0,0,.974-1.116V17.4a.915.915,0,0,1,.608-.828.906.906,0,0,1,1,.163l.724.724a1.132,1.132,0,0,0,1.494.1,9.707,9.707,0,0,0,1.608-1.608,1.127,1.127,0,0,0-.1-1.494l-.724-.724a.917.917,0,0,1-.155-1.018.906.906,0,0,1,.82-.588h1.031a1.123,1.123,0,0,0,1.116-.974,8.754,8.754,0,0,0,0-2.3Zm-1.226,2.026H17.4a2.224,2.224,0,0,0-1.549,3.741l.65.65A8.459,8.459,0,0,1,15.266,16.5l-.65-.65A2.224,2.224,0,0,0,10.875,17.4v.921a7.216,7.216,0,0,1-1.75,0V17.4A2.159,2.159,0,0,0,7.747,15.42a2.154,2.154,0,0,0-2.363.433l-.65.65A8.459,8.459,0,0,1,3.5,15.266l.65-.65A2.224,2.224,0,0,0,2.6,10.875H1.677a7.388,7.388,0,0,1,0-1.75H2.6A2.159,2.159,0,0,0,4.58,7.747a2.152,2.152,0,0,0-.433-2.363l-.65-.65A8.362,8.362,0,0,1,4.734,3.5l.65.65a2.162,2.162,0,0,0,2.382.425A2.15,2.15,0,0,0,9.125,2.6V1.677a7.216,7.216,0,0,1,1.75,0V2.6A2.159,2.159,0,0,0,12.253,4.58a2.158,2.158,0,0,0,2.363-.433l.65-.65A8.362,8.362,0,0,1,16.5,4.734l-.65.65a2.16,2.16,0,0,0-.425,2.382A2.15,2.15,0,0,0,17.4,9.125h.921a7.388,7.388,0,0,1,0,1.75Z"
						}))
					})())
				},
				se = n("./src/chat/models/Channel/index.ts"),
				ce = n("./src/chat/selectors/app.ts"),
				re = n("./src/chat/selectors/experiments.ts"),
				oe = n("./src/chat/selectors/settingsDropdown.ts"),
				ie = n("./src/chat/selectors/theme.ts"),
				le = n("./src/chat/selectors/user.ts"),
				de = n("./src/chat/components/ChannelHeaderDropdown/index.m.less"),
				ue = n.n(de);
			const he = e => {
					switch (e) {
						case B.b.AddToGroup:
							return {
								text: m.fbt._("Invite members", null, {
									hk: "ChZv0"
								}), icon: s.a.createElement(Y.a, null)
							};
						case B.b.Block:
							return {
								text: m.fbt._("Block", null, {
									hk: "1s7OxS"
								}), icon: s.a.createElement(V, null)
							};
						case B.b.CopyInviteLink:
							return {
								text: m.fbt._("Copy Invite Link", null, {
									hk: "3zt0MJ"
								}), icon: s.a.createElement(ee.a, null)
							};
						case B.b.ChangeTheme:
							return {
								text: m.fbt._("Change theme", null, {
									hk: "1J6Ajx"
								}), icon: s.a.createElement(q, null), className: "changeTheme"
							};
						case B.b.Leave:
							return {
								text: m.fbt._("Leave chat", null, {
									hk: "41t86n"
								}), icon: s.a.createElement($.a, null)
							};
						case B.b.LeaveGroup:
							return {
								text: m.fbt._("Leave group", null, {
									hk: "zStpq"
								}), icon: s.a.createElement($.a, null)
							};
						case B.b.ManageInviteLink:
							return {
								text: m.fbt._("Manage invite link", null, {
									hk: "3SBP09"
								}), icon: s.a.createElement(ae, null)
							};
						case B.b.MuteBadging:
							return {
								text: m.fbt._("Disable notification badging", null, {
									hk: "4BzTkp"
								}), icon: s.a.createElement(Q.a, null)
							};
						case B.b.MuteNotifs:
							return {
								text: m.fbt._("Mute notifications", null, {
									hk: "O4LsY"
								}), icon: s.a.createElement(Q.a, null)
							};
						case B.b.Profile:
							return {
								text: m.fbt._("View profile", null, {
									hk: "3i84FE"
								}), icon: s.a.createElement(te.a, null)
							};
						case B.b.RenameGroup:
							return {
								text: m.fbt._("Rename group", null, {
									hk: "hTeQ"
								}), icon: s.a.createElement(X.a, null)
							};
						case B.b.UnmuteBadging:
							return {
								text: m.fbt._("Enable notification badging", null, {
									hk: "87Nfa"
								}), icon: s.a.createElement(J.a, null)
							};
						case B.b.UnmuteNotifs:
							return {
								text: m.fbt._("Unmute notifications", null, {
									hk: "2TcEwL"
								}), icon: s.a.createElement(J.a, null)
							};
						case B.b.ViewMembers:
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
				me = Object(w.a)({
					currentUserId: le.a,
					channel: C.h,
					isModerator: C.a,
					isChannelBadgingMuted: C.I,
					isChannelNotifsMuted: C.K,
					isFullSize: ce.h,
					isThemesEnabled: re.u,
					showSparkles: ie.d,
					isQuickActionsEnabled: re.q,
					isLinkSharingEnabledExperiment: re.h
				});
			var pe = Object(c.b)(me, (e, t) => ({
					onInviteToChannel: () => {
						e(Object(E.c)()), e(Object(u.c)())
					},
					onInviteLinkSettings: () => {
						e(Object(y.e)(y.b.SESSION_LAST)), e(Object(E.b)(t.channelId))
					},
					onLeaveDirectChannel: () => {
						e((() => async (e, t) => {
							const n = t(),
								a = Object(C.m)(n);
							if (!a) throw new _.a("hideChannel", a);
							try {
								await I.a.hideChannel()
							} catch (s) {
								return Object(_.b)(`Error hiding channel: ${s.message}`)
							}
							await e(Object(j.I)(a.channelId)), e(Object(j.N)(a.channelState, a.channelId)), e(Object(v.c)())
						})()), e(Object(u.H)())
					},
					onLeaveGroupChannel: () => {
						e(Object(j.G)(t.channelId)), e(Object(u.H)())
					},
					onViewMembers: () => {
						e(Object(E.j)()), e(Object(u.ib)())
					},
					onBlockUser: t => e(Object(S.a)(t)),
					onChangeTheme: () => {
						e(Object(x.clickThemeSettings)()), e(Object(u.f)())
					},
					onViewProfile: t => {
						e(Object(E.k)(t)), e(Object(u.C)())
					},
					onOpenDropdown: t => e(Object(E.h)(t)),
					onMuteBadging: () => {
						e(Object(E.d)(t)), e(Object(u.L)())
					},
					onUnmuteBadging: () => {
						e(Object(E.f)(t)), e(Object(u.M)())
					},
					onMuteNotifs: () => {
						e(Object(E.e)(t.channelId)), e(Object(u.P)())
					},
					onUnmuteNotifs: () => {
						e(Object(E.g)(t.channelId)), e(Object(u.Z)())
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
					} = e, j = Object(c.d)(), E = Object(c.e)(oe.a), v = Object(c.e)(oe.b), _ = Object(c.e)(re.c), C = Object(c.e)(re.b), I = Object(O.b)(Object(F.e)()), x = Object(O.b)(Object(F.f)()), S = {
						...x.arrowProps,
						style: {
							...x.arrowProps.style,
							borderBottom: "5px solid var(--prompt-tooltip-background)"
						}
					}, N = Object(a.useMemo)(() => (null == t ? void 0 : t.type) === se.b.Group, [t]), w = N && E && !v && (_ || C);
					Object(a.useEffect)(() => {
						N && setTimeout(() => {
							null == x || x.show()
						})
					}, [N]);
					Object(f.a)("OverlayNavTooltip--Default", I.hide);
					const k = a => {
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
								showSidebar: p,
								toggleChannelNameInput: g
							} = e;
							switch (I.hide(), a) {
								case B.b.AddToGroup:
									return r();
								case B.b.Block: {
									const e = (() => t && t.members.find(e => e.id !== n))();
									return e && s(e.id)
								}
								case B.b.ChangeTheme:
									return p(), c();
								case B.b.Leave:
									return o();
								case B.b.LeaveGroup:
									return i();
								case B.b.Profile:
									return M();
								case B.b.RenameGroup:
									return g();
								case B.b.ViewMembers:
									return h();
								case B.b.ManageInviteLink:
									return A();
								case B.b.MuteBadging:
									return m();
								case B.b.UnmuteBadging:
									return d();
								case B.b.MuteNotifs:
									return l();
								case B.b.UnmuteNotifs:
									return u();
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
							if (t && t.channelState === R.b.JOINED) {
								const e = t.members.find(e => e.id !== n);
								if (e && e.name) return a(e.name)
							}
							return s && a(s)
						},
						{
							isFullSize: T,
							showSparkles: D,
							onInviteLinkSettings: A
						} = e,
						L = (() => {
							if (t) switch (t.type) {
								case se.b.Direct:
									return B.c.directChannel.filter(e => B.d.muteBadging(e, o, d) && B.d.unmuteBadging(e, o, d) && B.d.muteNotifs(e, i) && B.d.unmuteNotifs(e, i) && B.d.changeTheme(e, l));
								case se.b.Group:
									return B.c.groupChannel.filter(e => B.d.muteBadging(e, o, d) && B.d.unmuteBadging(e, o, d) && B.d.muteNotifs(e, i) && B.d.unmuteNotifs(e, i) && B.d.changeTheme(e, l) && B.d.linkSettings(e, h && p))
							}
						})();
					return s.a.createElement(s.a.Fragment, null, !1, s.a.createElement("button", {
						tabIndex: 1,
						onClick: e => (e => {
							e.stopPropagation(), null == I || I.toggle(), j(Object(y.d)())
						})(e),
						ref: Object(g.a)(I.target.ref, x.target.ref),
						className: Object(r.a)(ue.a.DropdownTrigger, {
							[ue.a.isFullSize]: T
						}),
						title: m.fbt._("Settings", null, {
							hk: "4lO98u"
						})
					}, s.a.createElement(ae, {
						className: Object(r.a)(ue.a.Settings, {
							[ue.a.gradient]: D && l
						})
					})), w && s.a.createElement(G.default, {
						arrowProps: S,
						popperProps: x.popperProps,
						visible: x.visible,
						hide: x.hide,
						isInstant: !0,
						styled: !0
					}, s.a.createElement("button", {
						className: ue.a.Tooltip,
						onClick: () => {
							j(A()), j(Object(u.D)())
						}
					}, m.fbt._("You can invite others by sharing the chat URL", null, {
						hk: "4A6k9w"
					}))), s.a.createElement(G.default, {
						arrowProps: I.arrowProps,
						popperProps: I.popperProps,
						visible: I.visible,
						hide: I.hide,
						isInstant: !0,
						noArrow: !0,
						styled: !0
					}, s.a.createElement("div", {
						className: ue.a.OptionsContainer,
						id: "OverlayNavTooltip--Default"
					}, L && L.map((e, t) => s.a.createElement(H.a, {
						className: Object(r.a)(ue.a.DropdownRow, {
							[ue.a.gradient]: D && l && e === B.b.ChangeTheme
						}),
						key: t,
						displayText: he(e).text,
						onClick: () => {
							k(e)
						},
						isStepper: he(e).isStepper
					}, he(e).icon)))))
				}),
				be = n("./src/chat/components/CloseIcon/index.tsx"),
				ge = n("./src/chat/constants/container.ts"),
				fe = n("./src/chat/controls/Button/index.tsx");

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const je = e => s.a.createElement(k.a, Oe({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M10,15.625a.623.623,0,0,1-.442-.183l-9-9,.884-.884L10,14.116l8.558-8.558.884.884-9,9A.623.623,0,0,1,10,15.625Z"
			}));

			function Ee() {
				return (Ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			je.displayName = "NavMinimize";
			const ve = e => s.a.createElement(k.a, Ee({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M15.838,16.5a1.377,1.377,0,0,1-1.375,1.375h-11A1.377,1.377,0,0,1,2.088,16.5V5.5A1.377,1.377,0,0,1,3.463,4.125H7.11V2.875H3.463A2.629,2.629,0,0,0,.838,5.5v11a2.629,2.629,0,0,0,2.625,2.625h11A2.629,2.629,0,0,0,17.088,16.5V12.9h-1.25Z"
			}), s.a.createElement("path", {
				d: "M18.5.875h-5v1.25h3.491L8.558,10.558l.884.884,8.433-8.433V6.5h1.25v-5A.625.625,0,0,0,18.5.875Z"
			}));
			ve.displayName = "NavPopout";
			var _e = n("./src/chat/components/OverlayNavButtonGroup/index.m.less"),
				Ce = n.n(_e);
			var Ie = Object(c.b)(() => Object(w.a)({
					containerSize: e => e.container.size,
					inviterName: C.H,
					isReady: ce.j
				}), e => ({
					close: () => e(Object(o.sizeChanged)(ge.a.HIDDEN)),
					minimize: () => {
						e(Object(o.sizeChanged)(ge.a.MINIMIZED)), e(Object(u.v)())
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
					const d = r && t === ge.a.EMBED;
					return s.a.createElement("div", {
						className: Ce.a.Wrapper
					}, a && e && s.a.createElement(pe, {
						channelId: e,
						dropdownId: n,
						inviterName: c,
						toggleChannelNameInput: l
					}), d && s.a.createElement(s.a.Fragment, null, s.a.createElement(fe.d, {
						className: Ce.a.IconButton,
						onClick: i,
						title: m.fbt._("Open chat in new window", null, {
							hk: "3S8f7W"
						})
					}, s.a.createElement(ve, null)), s.a.createElement(fe.d, {
						className: Ce.a.IconButton,
						onClick: o,
						title: m.fbt._("Minimize chat", null, {
							hk: "1gym9X"
						})
					}, s.a.createElement(je, null)), s.a.createElement(be.a, {
						className: Ce.a.CloseButton
					})))
				}),
				ye = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				xe = n("./src/chat/controls/Counter/index.tsx");
			var Se = n("./src/chat/components/RenameGroupInput/index.m.less"),
				Ne = n.n(Se);
			const we = N.a.wrapped(e => s.a.createElement("span", {
					className: Object(r.a)({
						[Ne.a.visible]: e.isVisible
					}, e.className)
				}, e.children), "InputWrapper", Ne.a),
				ke = N.a.div("InputContent", Ne.a),
				Me = N.a.span("InputControls", Ne.a),
				Te = N.a.wrapped(fe.a, "CancelButton", Ne.a),
				De = N.a.wrapped(fe.a, "SaveButton", Ne.a),
				Ae = Object(w.a)({
					isVisible: e => {
						return (e => e.renameGroupChat)(e).ivVisible
					}
				});
			class Le extends a.Component {
				constructor() {
					super(...arguments), this.displayName = "RenameGroupInput", this.state = {
						groupName: this.props.name || ""
					}, this.getAvailableCharacters = () => R.g - this.state.groupName.length, this.hideChannelNameInput = () => {}, this.handleChannelNameInput = e => this.setState({
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
					return s.a.createElement(we, {
						isVisible: t
					}, s.a.createElement(ke, null, s.a.createElement(ye.a, {
						className: Ne.a.ChannelNameInput,
						handleChannelNameInput: a,
						placeholder: m.fbt._("Rename group", null, {
							hk: "1mjXbx"
						}),
						withBackground: !0,
						value: n
					}, s.a.createElement(xe.a, {
						count: r
					})), s.a.createElement(Me, null, s.a.createElement(Te, {
						secondaryNoBorder: !0,
						onClick: e
					}, m.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(De, {
						noBorder: !0,
						disabled: r < 0 || r >= R.g,
						onClick: c
					}, m.fbt._("Save", null, {
						hk: "4yMsMq"
					})))))
				}
			}
			var Ue = Object(c.b)(Ae, e => ({
					onUpdateChannelName: t => e(Object(E.i)(t)),
					saveRenamedGroup: () => e(Object(u.S)()),
					hideChannelNameInput: () => e(Object(l.b)({
						isVisible: !1
					}))
				}))(Le),
				Pe = n("./src/chat/helpers/dom.ts"),
				Re = n("./src/chat/icons/svgs/ArrowLeft/index.tsx"),
				Be = n("./src/chat/components/OverlayNav/index.m.less"),
				He = n.n(Be);
			const {
				fbt: Fe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ge = ({
				userName: e,
				channelId: t,
				channelType: n
			}) => {
				const a = Object(c.e)(re.a),
					o = Object(c.e)(re.b),
					l = Object(c.e)(C.a),
					d = a || o,
					h = Object(c.d)();
				return s.a.createElement("span", {
					onClick: Object(Pe.b)(() => {
						d && n === se.b.Group && (h(Object(i.e)(t)), h(Object(u.o)(i.b.EASY_ACCESS)))
					}),
					className: Object(r.a)(He.a.UserProfileTitle, {
						[He.a.easyAccess]: d && n === se.b.Group
					})
				}, e, l && n === se.b.Group ? s.a.createElement(s.a.Fragment, null, s.a.createElement("span", null, " • "), s.a.createElement("span", {
					className: He.a.HostLabel
				}, Fe._("Host", null, {
					hk: "1dh50y"
				}))) : null, d && n === se.b.Group && s.a.createElement(ee.a, {
					className: He.a.LinkIcon
				}))
			}, ze = Object(w.a)({
				isEmbedded: ce.g,
				iconMembers: (e, t) => Object(C.t)(e, t.channelId),
				isFullSize: ce.h
			}), Ve = Object(c.b)(ze, e => ({
				minimize: () => {
					e(Object(o.sizeChanged)(ge.a.MINIMIZED)), e(Object(u.v)())
				},
				toggleSidebar: () => e(Object(d.f)(!0)),
				clickRenameGroupTracking: () => e(Object(u.A)()),
				showRenameGroupChat: () => e(Object(l.b)({
					isVisible: !0
				}))
			}));
			class We extends a.Component {
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
						className: Object(r.a)(He.a.Nav, {
							[He.a.isFullSize]: g
						}, n)
					}, s.a.createElement(fe.d, {
						onClick: p,
						className: Object(r.a)(He.a.IconButton, {
							[He.a.isFullSize]: g
						})
					}, s.a.createElement(Re.a, {
						className: He.a.ArrowLeft
					})), s.a.createElement("span", {
						onClick: c ? Object(Pe.b)(o) : void 0,
						className: Object(r.a)(He.a.TitleWrapper, {
							[He.a.embed]: c
						})
					}, b && m && m.firstUser && s.a.createElement(h.a, {
						className: Object(r.a)(He.a.ChatIcon, {
							[He.a.isFullSize]: g
						}),
						userId: m.firstUser.id,
						secondUserId: null === (e = m.secondUser) || void 0 === e ? void 0 : e.id
					}), t && void 0 !== u ? s.a.createElement(Ge, {
						userName: d,
						channelId: t,
						channelType: u
					}) : s.a.createElement("span", {
						className: He.a.Title
					}, d), s.a.createElement("span", {
						className: He.a.SubTitle
					}, l)), s.a.createElement(Ie, {
						channelId: t,
						toggleChannelNameInput: f,
						showMenu: !!i,
						dropdownId: a
					}), t && d && s.a.createElement(Ue, {
						channelId: t,
						name: d
					}))
				}
			}
			t.a = Ve(We)
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
				p = n("./src/chat/components/OverlayDirectsEmptySkeletonState/index.tsx"),
				b = n("./src/chat/components/Sidebar/index.tsx"),
				g = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				f = n("./src/chat/constants/container.ts"),
				O = (n("./src/chat/helpers/urls/index.ts"), n("./src/chat/selectors/app.ts")),
				j = n("./src/chat/selectors/inviteLink.ts"),
				E = n("./src/chat/selectors/platform.ts");
			var v = ({
					children: e
				}) => {
					const t = Object(i.d)(),
						n = Object(i.e)(O.i),
						a = Object(i.e)(O.f),
						c = Object(i.e)(E.g),
						r = Object(i.e)(E.i),
						v = Object(i.e)(E.h),
						_ = Object(i.e)(E.e),
						C = Object(i.e)(j.f),
						I = n || C;
					return C && (v ? t(Object(h.c)()) : c ? t(Object(h.d)()) : r && _ && t(Object(m.d)(_)), t(Object(u.sizeChanged)(f.a.EMBED)), Object(l.b)() && Object(d.e)(o.a.redditUrl)), I ? null : a ? e : s.a.createElement(s.a.Fragment, null, s.a.createElement(b.a, null, s.a.createElement("span", {
						style: {
							paddingTop: "45px",
							background: "var(--layout-body)"
						}
					}, s.a.createElement(g.d, null))), s.a.createElement(p.a, null))
				},
				_ = n("./src/chat/components/ThemeProvider/index.tsx");

			function C(e, t) {
				return s.a.createElement(_.a, {
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
				j = n("./src/chat/components/BasicInvited/index.m.less"),
				E = n.n(j);
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
						j = t.slice(0, 2);
					return t && t.length ? s.a.createElement("div", {
						className: E.a.BasicInvited
					}, s.a.createElement(p, {
						className: E.a.SidebarDivider
					}, o.fbt._("Invites", null, {
						hk: "1NWeVa"
					}), h > 2 ? s.a.createElement(b.a, {
						onClick: m
					}, o.fbt._("See all", null, {
						hk: "mkJIj"
					}), " (", h, ")") : null), s.a.createElement(u.a, {
						channels: Object.values(j)
					})) : null
				},
				_ = n("./src/lib/lessComponent.tsx"),
				C = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				I = n("./src/chat/helpers/chatSelector.ts"),
				y = n("./src/chat/selectors/user.ts"),
				x = n("./src/chat/components/BasicJoined/index.m.less"),
				S = n.n(x);
			const N = _.a.p("Text", S.a),
				w = Object(I.a)({
					currentUserId: y.a,
					fetchingJoinedChannels: f.c,
					hasMoreJoinedChannels: f.G,
					joinedChannels: f.e,
					selectedChannelId: e => Object(f.B)(e, "channelId"),
					hasInvitedChannels: f.E
				});
			var k = Object(c.b)(w)(e => {
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
					})), (!a || !a.length) && s.a.createElement(N, null, o.fbt._("All the direct chats that you're in will show up here", null, {
						hk: "4A1UXC"
					})), s.a.createElement(u.a, {
						channels: a
					}), n && s.a.createElement(C.d, null))
				}),
				M = n("./src/chat/components/Scroller/index.tsx"),
				T = n("./node_modules/react-router-redux/es/index.js"),
				D = n("./src/chat/helpers/urls/index.ts"),
				A = n("./src/chat/icons/svgs/ChatNew/index.tsx"),
				L = n("./src/chat/components/Sidebar/CreateChannel/index.m.less"),
				U = n.n(L);
			var P = () => {
					const e = Object(c.d)();
					return s.a.createElement("button", {
						className: U.a.Button,
						onClick: () => {
							const t = Object(D.getRedirectURL)(Object(D.channelUrl)("create"));
							e(Object(T.b)(t)), e(Object(d.l)())
						},
						title: o.fbt._("Start a new chat", null, {
							hk: "3C4ek3"
						}),
						tabIndex: 0
					}, s.a.createElement(A.a, {
						className: U.a.ChatNew,
						isFilled: !0
					}))
				},
				R = n("./src/chat/controls/ChannelsFilter/index.tsx"),
				B = n("./src/chat/controls/Counter/index.tsx"),
				H = n("./src/chat/selectors/experiments.ts"),
				F = n("./src/chat/components/Sidebar/ChannelsPanel/index.m.less"),
				G = n.n(F);
			var z = () => {
					const e = Object(c.d)(),
						t = Object(c.e)(f.c),
						n = Object(c.e)(f.G),
						a = Object(c.e)(O.c),
						r = Object(c.e)(O.b),
						l = Object(c.e)(H.e);
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
					}, s.a.createElement(P, null))), l && s.a.createElement(R.a, null), s.a.createElement(M.a, {
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
				J = n("./src/chat/selectors/sidebar.ts"),
				Y = n("./src/chat/components/Sidebar/index.m.less"),
				$ = n.n(Y);
			const ee = ({
					children: e
				}) => {
					const t = Object(c.e)(J.b),
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
					const t = Object(c.e)(J.a);
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
					c = Math.round(Math.abs((e - n) / r.pc));
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
					return j
				})), n.d(t, "d", (function() {
					return E
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
			} = a, O = [d, p, u, b], j = {
				directChannel: [h, f, c, ...O, o],
				groupChannel: [g, s, l, m, f, ...O, i],
				members: [c, r]
			}, E = {
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

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var b = e => c.a.createElement(l.a, p({}, e, {
					viewBox: "0 0 16 16"
				}), c.a.createElement("path", {
					d: "M10.845 11.6c0 .22-.182.4-.407.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.225 0 .407.18.407.4v4.4zm-2.438 0c0 .22-.183.4-.407.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.224 0 .407.18.407.4v4.4zm-2.439 0c0 .22-.182.4-.406.4a.403.403 0 0 1-.406-.4V7.2c0-.22.182-.4.406-.4.224 0 .406.18.406.4v4.4zm6.426-6.8c.225 0 .406.18.406.4v8c0 .662-.547 1.2-1.219 1.2H4.42c-.672 0-1.219-.538-1.219-1.2v-8c0-.22.181-.4.407-.4h8.787zm0-2.4c.224 0 .406.18.406.4v.8c0 .22-.182.4-.407.4H3.606a.403.403 0 0 1-.406-.4v-.8c0-.22.182-.4.406-.4H6.01l.602-.666a.411.411 0 0 1 .304-.134h2.166c.116 0 .226.049.304.134l.602.666h2.404z",
					fillRule: "evenodd"
				})),
				g = n("./src/chat/controls/Button/index.m.less"),
				f = n.n(g),
				O = n("./src/chat/helpers/dom.ts");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const E = o.a.a("Button", f.a),
				v = o.a.button("Button", f.a),
				_ = o.a.button("MessageIconButton", f.a),
				C = e => {
					const t = Object(r.a)({
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
					return e.href ? c.a.createElement(E, {
						href: e.href,
						target: i.d.BLANK,
						rel: i.c,
						title: e.title,
						className: t,
						tabIndex: 0,
						style: n
					}, e.children) : c.a.createElement(v, {
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
				y = e => c.a.createElement(_, j({}, e, {
					title: a.fbt._("Report message", null, {
						hk: "2XKeNq"
					})
				}), c.a.createElement(u, null)),
				x = e => c.a.createElement(_, j({}, e, {
					title: a.fbt._("Delete message", null, {
						hk: "Z4Zm0"
					})
				}), c.a.createElement(b, null)),
				S = e => c.a.createElement(_, j({}, e, {
					title: a.fbt._("Kick user", null, {
						hk: "5PnyH"
					})
				}), c.a.createElement(m, null)),
				N = ({
					className: e,
					children: t,
					onClick: n,
					text: a
				}) => c.a.createElement("button", {
					className: Object(r.a)(f.a.CircleIconButtonWrapper, e, {
						[f.a.isActionButton]: !!n
					}),
					onClick: Object(O.b)(n)
				}, c.a.createElement("span", {
					className: f.a.CircleIconButton
				}, t), a && c.a.createElement("span", {
					className: f.a.IconLabel
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
				j = n("./src/chat/controls/Checkbox/index.m.less"),
				E = n.n(j);
			const v = r.a.input("HiddenInput", E.a),
				_ = r.a.wrapped(m, "Checked", E.a),
				C = r.a.wrapped(O, "Unchecked", E.a),
				I = r.a.span("Wrapper", E.a),
				y = r.a.span("Content", E.a),
				x = r.a.span("Control", E.a),
				S = r.a.label("CheckInput", E.a);
			t.a = e => s.a.createElement(S, {
				className: Object(c.a)(e.className, {
					[E.a.checked]: e.checked
				}),
				style: {
					height: e.height || void 0,
					width: e.width || void 0
				}
			}, s.a.createElement(I, null, e.children && !e.rightPosition && s.a.createElement(y, null, e.children), s.a.createElement(x, null, s.a.createElement(v, {
				tabIndex: 0,
				type: e.type || "checkbox",
				checked: e.checked,
				disabled: e.disabled,
				name: e.name,
				value: e.value,
				onChange: e.onChange,
				id: e.id
			}), s.a.createElement(_, null), s.a.createElement(C, null)), e.children && e.rightPosition && s.a.createElement(y, null, e.children)))
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
			var j;
			! function(e) {
				e.Navigate = "navigate.chat", e.Websocket = "websocket.chat", e.Expand = "expand.chat", e.UnreadCount = "unreadCount.chat"
			}(j || (j = {}));
			const E = e => t => {
					const n = (e => {
						try {
							return "object" == typeof e.data ? e.data : JSON.parse(e.data)
						} catch (t) {
							return
						}
					})(t);
					if (n) switch (n.type) {
						case j.Navigate: {
							const t = Object(r.parse)(n.data.href).pathname || p.rootUrl,
								a = Object(p.getRedirectURL)(t);
							e.dispatch(Object(c.b)(a)), e.dispatch(Object(d.sizeChanged)(h.a.EMBED));
							break
						}
						case j.Websocket:
							e.dispatch(Object(u.c)());
							break;
						case j.Expand: {
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
					window.addEventListener("message", E(e)), window.navigator.serviceWorker.addEventListener("message", E(e))
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
							type: j.UnreadCount,
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
				l = n("./src/chat/actions/platform.ts"),
				d = n("./src/chat/actions/sendbird/index.ts"),
				u = n("./src/chat/actions/sendbird/config.ts"),
				h = n("./src/chat/actions/sendbird/sdk.ts"),
				m = n("./src/chat/actions/session.ts"),
				p = n("./src/chat/constants/container.ts"),
				b = n("./src/chat/constants/sendbird.ts"),
				g = n("./src/chat/customMiddleware/noop.ts"),
				f = n("./src/chat/selectors/experiments.ts"),
				O = n("./src/chat/selectors/inviteLink.ts"),
				j = n("./src/chat/selectors/platform.ts"),
				E = n("./src/chat/selectors/sendbird.ts");
			const v = (e, t) => {
				const n = t && t.type === o.SIZE_CHANGED ? t.payload : e.container.size,
					a = n === p.a.MINIMIZED || n === p.a.HIDDEN,
					s = t && t.type === l.a ? t.payload && t.payload.routeMatch && t.payload.routeMatch.route.meta.name === c.Mb.CHAT_MINIMIZE : e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name === c.Mb.CHAT_MINIMIZE;
				return !a && s
			};
			t.a = e => {
				if ("undefined" == typeof window) return g.a;
				let t;
				const n = () => {
					const n = e.getState();
					if (Object(O.f)(n)) return;
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
				Object(j.a)(e.getState()) === c.Mb.CHAT_MINIMIZE ? s()(async () => {
					v(e.getState()) ? n() : (await e.dispatch(Object(d.k)(!1)), e.getState().sendbird.session.token && await e.dispatch(Object(i.c)()))
				}) : n();
				return i => g => {
					const j = e.getState(),
						_ = Object(f.g)(j),
						C = Object(O.f)(j),
						I = Object(E.b)(j) === b.b.Closed,
						y = Object(E.g)(j);
					switch (g.type) {
						case o.SIZE_CHANGED: {
							if (!g.payload) break;
							const t = g.payload !== p.a.MINIMIZED && g.payload !== p.a.HIDDEN;
							t && (clearTimeout(a), a = null), I && t && !y && n(), !y || g.payload !== p.a.HIDDEN && g.payload !== p.a.MINIMIZED || (a = setTimeout(() => {
								e.dispatch(Object(h.f)())
							}, 10 * c.kb));
							break
						}
						case l.a: {
							const t = v(j, g);
							I && t ? n() : t && e.dispatch(Object(r.M)());
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
				j = e => ({
					millis: e
				});
			var E = n("./src/chat/tracking/events/chatView.ts"),
				v = n("./src/chat/tracking/events/contactsList.ts"),
				_ = n("./src/chat/tracking/events/invitationInbox.ts"),
				C = n("./src/chat/tracking/events/messagesInbox.ts");
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
							...j(t)
						},
						...Object(f.a)(e)
					})
				})(e, (e => Date.now() - e)(t))),
				y = s()(e => Object(h.e)(e) && x(e)),
				x = e => {
					Object(C.d)(e)
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
								...j(t)
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
								...j(t)
							},
							...Object(f.a)(e)
						})
					})(t, n)
				}),
				N = e => {
					Object(h.d)(e) === d.a.CREATE && Object(v.g)(e)
				},
				w = e => {
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
						I(c, e), N(c);
						break;
					case r.q:
						S(c, !0);
						break;
					case r.s:
						N(c), y(c);
						break;
					case r.r:
						I(c, e), (e => {
							Object(h.d)(e) === d.a.VIEW_INVITE && Object(_.k)(e)
						})(c), (e => Object(h.f)(e) && Object(E.o)(e))(c), S(c), w(c);
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
					method: a.jb.GET,
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
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
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
				}).format;
			new Intl.DateTimeFormat(void 0, {
				month: "numeric",
				day: "numeric",
				year: "numeric",
				hour: "numeric",
				minute: "numeric",
				second: "numeric"
			}).format
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
				j = d.a.wrapped(O, "FallbackAvatarWrapper", f.a),
				E = d.a.wrapped(e => {
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
					return l ? r.a.createElement(j, {
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
			const _ = d.a.wrapped(v, "VoicesAvatar", f.a),
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
				return y
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "a", (function() {
				return U
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
			var j = n("./src/reddit/constants/colors.ts"),
				E = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const {
				REDDIT: v,
				NIGHT: _
			} = s.b, C = e => c.d[e].newRedditTheme;
			var I;
			! function(e) {
				e.NONE = "none", e.UNDERLINE = "underline"
			}(I || (I = {}));
			const y = "22.5";
			var x;
			! function(e) {
				e.BASIC = "basic", e.ORANGERED = "orangered", e.VANITY = "vanity", e.SERIOUS = "serious"
			}(x || (x = {}));
			const S = {
					[x.ORANGERED]: {
						stops: [{
							offset: "11.68%",
							color: p
						}, {
							offset: "88.32%",
							color: l
						}]
					},
					[x.VANITY]: {
						stops: [{
							offset: "11.68%",
							color: O
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
				N = e => {
					return `linear-gradient(22.5deg, ${S[e].stops.map(e=>`${e.color} ${e.offset}`).join(", ")})`
				},
				w = {
					bubble: {
						background: N(x.VANITY),
						color: j.a.white,
						border: j.a.transparent,
						link: {
							color: j.a.white,
							textDecoration: I.UNDERLINE
						},
						channelsFilter: {
							background: N(x.VANITY),
							selected: j.a.white
						}
					}
				},
				k = {
					bubble: {
						background: N(x.SERIOUS),
						color: j.a.white,
						border: j.a.transparent,
						link: {
							color: j.a.white,
							textDecoration: I.UNDERLINE
						},
						channelsFilter: {
							background: N(x.SERIOUS),
							selected: j.a.white
						}
					}
				},
				M = {
					bubble: {
						background: N(x.ORANGERED),
						color: j.a.white,
						border: j.a.transparent,
						link: {
							color: j.a.white,
							textDecoration: I.UNDERLINE
						},
						channelsFilter: {
							background: N(x.ORANGERED),
							selected: j.a.white
						}
					}
				},
				T = {
					activity: {
						icon: {
							default: C(v).actionIcon,
							active: j.a.op,
							disable: Object(a.a)(.5, j.a.white),
							hover: Object(a.a)(.5, j.a.white),
							contrast: C(v).bodyText,
							nsfw: {
								bg: j.a.black,
								text: j.a.white
							}
						},
						text: {
							regular: C(v).bodyText,
							active: j.a.op,
							fade: Object(a.a)(.4, j.a.white),
							light: C(v).actionIcon,
							warning: j.a.warning,
							highlight: j.a.white,
							success: j.a.approved,
							meta: C(v).metaText
						},
						button: {
							primary: j.a.alienblue,
							secondary: C(v).metaText,
							chatFilterColor: b
						},
						buttonSecondary: {
							active: j.a.alienblue
						},
						send: {
							disable: Object(a.a)(.5, j.a.white),
							hover: Object(a.a)(.08, j.a.op)
						},
						checkbox: {
							checked: j.a.alienblue,
							checkmark: j.a.white,
							unchecked: C(v).body,
							uncheckedBorder: Object(a.a)(.3, j.a.white)
						},
						input: {
							border: j.a.defaultFlair,
							focusColor: j.a.white,
							focusBg: j.a.approved,
							ownerBg: C(v).line,
							color: C(v).bodyText,
							error: j.a.warning,
							channelRename: Object(a.a)(.1, j.a.white),
							background: Object(a.f)(Object(a.a)(.3, j.a.white), .1)
						},
						link: {
							staticUnderline: j.a.alienblue,
							staticText: j.a.op,
							hoverText: j.a.snoo
						},
						minimizedPortal: {
							backgroundColor: {
								unreadInitial: C(v).active,
								unreadFinal: C(v).highlight
							},
							color: {
								unreadInitial: j.a.white,
								unreadFinal: j.a.black
							}
						}
					},
					layout: {
						body: C(v).body,
						colsBorder: C(v).line,
						controlsBorder: Object(a.f)(j.a.black, .15),
						header: {
							counterBg: j.a.snoo,
							counterText: j.a.white
						},
						scrollbar: Object(a.a)(.2, j.a.white),
						scrollbarHover: Object(a.a)(.4, j.a.white),
						timeStamp: {
							tooltip: {
								background: C(v).body
							}
						},
						dropdown: {
							border: "none"
						},
						overlayBackground: j.a.overlayBackground
					},
					message: {
						list: {
							item: {
								ownerBg: C(v).inactive,
								button: C(v).actionIcon,
								richItem: C(v).metaText,
								richItemBorder: C(v).postLine,
								onlineIndicator: j.a.approved,
								white: j.a.white
							}
						}
					},
					subreddit: {
						iconBg: j.a.alienblue
					},
					sidebar: {
						background: Object(a.f)(Object(a.a)(.3, j.a.white), .1),
						subreddit: {
							background: {
								active: j.a.alienblue,
								hover: C(v).canvas
							}
						},
						basic: {
							background: {
								active: j.a.alienblue,
								hover: C(v).canvas
							}
						},
						text: {
							divider: Object(a.a)(.5, j.a.white)
						},
						item: {
							hover: C(v).field,
							active: C(v).postLine,
							selected: C(v).inactive,
							text: {
								active: C(v).titleText
							}
						},
						footer: {
							background: C(v).field
						}
					},
					toast: {
						pending: j.a.black,
						success: j.a.approved,
						error: j.a.orangered
					},
					skeleton: {
						field: C(v).field,
						inactive: C(v).inactive
					},
					boxShadow: Object(a.f)(20, 120, 120, .11),
					bubbleActions: {
						hover: C(v).line
					},
					bubble: {
						background: j.a.transparent,
						color: C(v).bodyText,
						border: C(v).line,
						link: {
							color: j.a.op,
							textDecoration: I.NONE
						},
						channelsFilter: {
							background: d,
							selected: b
						}
					},
					editName: Object(a.a)(.1, C(v).inactive),
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
						backgroundColor: C(v).placeholder
					},
					newChat: {
						inviteLink: {
							borderColor: u
						}
					},
					addReaction: {
						backgroundColor: C(v).inactive,
						iconFill: C(_).postIcon
					}
				},
				D = {
					activity: {
						icon: {
							default: C(_).postIcon,
							active: j.a.alienblue,
							disable: Object(a.a)(.5, j.a.white),
							hover: Object(a.a)(.5, j.a.white),
							contrast: Object(a.a)(.4, C(_).bodyText),
							nsfw: {
								bg: j.a.black,
								text: j.a.white
							}
						},
						text: {
							regular: C(_).bodyText,
							active: j.a.op,
							fade: Object(a.a)(.4, j.a.white),
							light: C(_).actionIcon,
							warning: j.a.warning,
							highlight: j.a.white,
							success: j.a.approved,
							meta: C(_).metaText
						},
						button: {
							primary: j.a.alienblue,
							secondary: C(_).metaText,
							chatFilterColor: m
						},
						buttonSecondary: {
							active: j.a.lightboxHeaderText
						},
						send: {
							disable: Object(a.a)(.5, j.a.white),
							hover: Object(a.a)(.08, j.a.op)
						},
						checkbox: {
							checked: j.a.alienblue,
							checkmark: j.a.white,
							unchecked: C(_).body,
							uncheckedBorder: Object(a.a)(.3, j.a.white)
						},
						input: {
							border: j.a.defaultFlair,
							focusColor: j.a.white,
							focusBg: j.a.approved,
							ownerBg: C(_).line,
							color: C(_).bodyText,
							error: j.a.warning,
							channelRename: Object(a.a)(.1, j.a.white),
							background: Object(a.f)(Object(a.a)(.3, j.a.white), .1)
						},
						link: {
							staticUnderline: j.a.alienblue,
							staticText: j.a.op,
							hoverText: j.a.snoo
						},
						minimizedPortal: {
							backgroundColor: {
								unreadInitial: C(_).active,
								unreadFinal: C(_).highlight
							},
							color: {
								unreadInitial: j.a.white,
								unreadFinal: j.a.white
							}
						}
					},
					layout: {
						body: C(_).body,
						colsBorder: C(_).line,
						controlsBorder: Object(a.f)(j.a.white, .15),
						header: {
							counterBg: j.a.snoo,
							counterText: j.a.white
						},
						scrollbar: Object(a.a)(.2, C(_).bodyText),
						scrollbarHover: Object(a.a)(.1, C(_).bodyText),
						timeStamp: {
							tooltip: {
								background: C(_).inactive
							}
						},
						dropdown: {
							border: C(_).line
						},
						overlayBackground: j.a.overlayBackground
					},
					message: {
						list: {
							item: {
								ownerBg: C(_).inactive,
								button: C(_).actionIcon,
								richItem: C(_).metaText,
								richItemBorder: E.a.metaText,
								onlineIndicator: j.a.approved,
								white: j.a.white
							}
						}
					},
					subreddit: {
						iconBg: j.a.alienblue
					},
					sidebar: {
						background: Object(a.f)(Object(a.a)(.4, j.a.white), .1),
						subreddit: {
							background: {
								active: j.a.alienblue,
								hover: Object(a.g)(.2, C(_).canvas)
							}
						},
						basic: {
							background: {
								active: j.a.alienblue,
								hover: Object(a.g)(.2, C(_).canvas)
							}
						},
						text: {
							divider: Object(a.a)(.5, j.a.white)
						},
						item: {
							hover: C(_).field,
							active: C(_).postLine,
							selected: C(_).placeholder,
							text: {
								active: C(_).titleText
							}
						},
						footer: {
							background: C(_).field
						}
					},
					toast: {
						pending: j.a.black,
						success: j.a.approved,
						error: j.a.orangered
					},
					skeleton: {
						field: C(_).field,
						inactive: C(_).inactive
					},
					boxShadow: Object(a.f)(20, 120, 120, 0),
					bubbleActions: {
						hover: C(_).field
					},
					bubble: {
						background: j.a.transparent,
						color: C(_).bodyText,
						border: C(_).line,
						link: {
							color: j.a.op,
							textDecoration: I.NONE
						},
						channelsFilter: {
							background: g,
							selected: h
						}
					},
					editName: C(_).inactive,
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
						backgroundColor: C(_).placeholder
					},
					newChat: {
						inviteLink: {
							borderColor: C(_).inactive
						}
					},
					addReaction: {
						backgroundColor: C(_).postIcon,
						iconFill: C(_).body
					}
				},
				A = {
					[r.b.REDDIT]: T,
					[r.b.NIGHT]: D
				},
				L = {
					[x.ORANGERED]: M,
					[x.VANITY]: w,
					[x.SERIOUS]: k
				},
				U = [x.BASIC, x.ORANGERED, x.VANITY, x.SERIOUS]
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
				return ln
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
				j = n("./src/chat/models/Channel/utils.ts");
			const E = {
				fetchingChannels: !1,
				hasMoreChannels: !1,
				sortedKeys: []
			};
			var v = (e = E, t) => {
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
						} = t.payload, s = Object(j.c)(n, [c.b.Direct, c.b.Group]);
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
				C = n("./src/chat/actions/message/index.ts");
			const I = {
				fetchingChannels: !1,
				hasMoreChannels: !0,
				sortedKeys: []
			};
			var y = (e = I, t) => {
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
							} = t.payload, s = Object(j.c)(n, [c.b.Direct, c.b.Group]);
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
				x = n("./src/chat/actions/channel/messageQuickReply.ts");
			const S = {};
			var N = (e = S, t) => {
					switch (t.type) {
						case x.MESSAGE_QUICK_REPLY_ADD_USER_ID:
							return {
								...e, [t.payload]: t.payload
							};
						case x.MESSAGE_QUICK_REPLY_REMOVE_USER_ID:
							return u()(e, t.payload);
						default:
							return e
					}
				},
				w = n("./node_modules/lodash/first.js"),
				k = n.n(w),
				M = n("./node_modules/lodash/reduce.js"),
				T = n.n(M),
				D = n("./src/chat/actions/channel/dropdown.ts"),
				A = n("./src/chat/actions/message/inboxScroller.ts"),
				L = n("./src/chat/constants/channels.ts");
			const U = {};
			var P = (e = U, t) => {
				switch (t.type) {
					case b.g:
						return {
							...e, ...t.payload
						};
					case b.b:
					case b.a: {
						const {
							channels: n
						} = t.payload, a = T()(e, (e, t, a) => n[a] && t.channelState === L.b.PARTIAL && (e[a] = n[a]) && e || e, {});
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
					case D.a: {
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
			var H = Object(a.c)({
					channelsFilter: o,
					draftMessages: p,
					firstLoaded: g,
					invited: v,
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
					joined: y,
					models: P,
					selected: B,
					messageQuickReplyUsers: N
				}),
				F = n("./src/chat/actions/user.ts");
			var G = (e = !1, t) => {
					switch (t.type) {
						case F.b:
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
					case F.i: {
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
					case F.c: {
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
			var J = (e = X, t) => {
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
					case F.i:
						return {
							...e, ...t.payload || {}
						};
					case F.c: {
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
					case F.b: {
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
					case F.h:
						return [...e, t.payload];
					case F.k:
						return e.filter(e => e !== t.payload);
					case F.j:
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
						case F.c:
							return e.filter(e => e !== t.payload.userId);
						default:
							return e
					}
				},
				ne = Object(a.c)({
					fetchedBlockedUsers: G,
					knownContacts: Q,
					models: J,
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
				je = n("./node_modules/lodash/toArray.js"),
				Ee = n.n(je),
				ve = n("./node_modules/lodash/uniqBy.js"),
				_e = n.n(ve),
				Ce = n("./src/chat/actions/members.ts");
			const Ie = {};
			var ye = (e = Ie, t) => {
				switch (t.type) {
					case Ce.b: {
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
					case Ce.c: {
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
					case Ce.a: {
						const {
							channelId: n,
							members: a
						} = t.payload, s = Ee()(a), c = e[n] && e[n].model || [], r = _e()([...c, ...s], "id");
						return {
							...e,
							[n]: {
								...e[n],
								model: r
							}
						}
					}
					case Ce.d:
						return {};
					default:
						return e
				}
			};
			var xe = (e = !1, t) => {
				switch (t.type) {
					case C.b:
					case C.l:
						return !0;
					default:
						return e
				}
			};
			const Se = {};
			var Ne = (e = Se, t) => {
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
					case b.o: {
						const n = t.payload;
						return {
							...u()(e, ...n)
						}
					}
					case A.a: {
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
			const we = {};
			var ke = (e = we, t) => {
					var n, a;
					switch (t.type) {
						case C.i: {
							const s = V()(t.payload);
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
				Me = n("./src/chat/actions/message/reactions.ts");
			const Te = {};
			var De = (e = Te, t) => {
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
						case Me.a:
							return {
								...e, [t.payload.messageId]: t.payload.reactions
							};
						default:
							return e
					}
				},
				Ae = n("./src/chat/actions/message/richUnit.ts");
			const Le = {
					posts: {},
					userPosts: {},
					comments: {},
					subreddits: {},
					dataReceived: !1
				},
				Ue = e => e.length ? e.reduce((e, t) => (null == t ? void 0 : t.id) ? {
					...e,
					[t.id.toLowerCase()]: t
				} : e, {}) : {};
			var Pe = (e = Le, t) => {
					var n, a, s, c;
					switch (t.type) {
						case Ae.b:
							return {
								...e, posts: {
									...e.posts,
									...Ue((null === (n = t.payload) || void 0 === n ? void 0 : n.posts) || {})
								}, userPosts: {
									...e.userPosts,
									...Ue((null === (a = t.payload) || void 0 === a ? void 0 : a.userPosts) || {})
								}, comments: {
									...e.comments,
									...Ue((null === (s = t.payload) || void 0 === s ? void 0 : s.comments) || {})
								}, subreddits: {
									...e.subreddits,
									...Ue((null === (c = t.payload) || void 0 === c ? void 0 : c.subreddits) || {})
								}, dataReceived: !0
							};
						case Ae.a:
							return {
								...e, dataReceived: !1
							};
						default:
							return e
					}
				},
				Re = n("./node_modules/lodash/isEqual.js"),
				Be = n.n(Re),
				He = n("./src/chat/actions/message/unreadCount.ts");
			const Fe = {
				unreadMessages: 0,
				hasNewMessages: !1,
				unacceptedInvites: 0
			};
			var Ge = (e = Fe, t) => {
					switch (t.type) {
						case He.a:
							return Be()(e, t.payload) ? e : {
								...e,
								...t.payload
							}
					}
					return e
				},
				ze = Object(a.c)({
					firstLoaded: xe,
					models: Ne,
					pending: ke,
					reactions: De,
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
			var Je = (e = Xe, t) => {
					switch (t.type) {
						case Qe.a:
							return {
								...e, ivVisible: t.payload.isVisible
							};
						default:
							return e
					}
				},
				Ye = n("./src/chat/actions/sendbird/config.ts");
			const $e = {
				maxMessageLength: void 0
			};
			var et = (e = $e, t) => {
				switch (t.type) {
					case Ye.c:
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
					case Ye.d:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const at = {
				reactions: {},
				mediaHost: ""
			};
			var st = (e = at, t) => {
					switch (t.type) {
						case Ye.e: {
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
						case Ye.b:
							return {
								...e, mediaHost: t.payload
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
				ft = n("./src/chat/reducers/subscribe.ts"),
				Ot = n("./src/chat/actions/sidebar.ts"),
				jt = n("./src/chat/actions/theme.ts"),
				Et = n("./src/chat/constants/theme.ts"),
				vt = n("./src/chat/models/Theme/index.ts");
			const _t = {
				current: vt.e[Et.a],
				chatTheme: null,
				chatThemeKey: vt.c.BASIC,
				chatPreviewThemeKey: vt.c.BASIC,
				cached: {},
				isShowPrompt: !0,
				isShowSparkles: !0
			};
			var Ct = (e = _t, t) => {
					switch (t.type) {
						case jt.GLOBAL_THEME_CHANGED:
							return e.current = vt.e[t.payload.themeKey], {
								...e
							};
						case jt.CHAT_THEME_CHANGED:
							return {
								...e, chatTheme: vt.b[t.payload.themeKey], chatPreviewThemeKey: t.payload.themeKey
							};
						case jt.CHAT_THEME_APPLIED:
							return {
								...e, chatThemeKey: t.payload.themeKey
							};
						case jt.CHAT_THEME_CANCELED:
							return {
								...e, chatTheme: e.chatThemeKey ? vt.b[e.chatThemeKey] : null, chatPreviewThemeKey: e.chatThemeKey
							};
						case jt.CHAT_THEME_SETTINGS_CLICKED:
							return {
								...e, isShowPrompt: !1, isShowSparkles: !1
							};
						case jt.CHAT_THEME_PROMPT_CLICKED:
							return {
								...e, isShowPrompt: !1
							};
						case jt.CHAT_THEME_RESTORED:
							return {
								...e, chatTheme: vt.b[t.payload.themeKey], chatThemeKey: t.payload.themeKey, chatPreviewThemeKey: t.payload.themeKey
							};
						case jt.CHAT_THEME_SHOW_PROMPT_COUNT_SET:
							return {
								...e, isShowPrompt: t.payload <= jt.MAX_SHOW_PROMPT_COUNT, isShowSparkles: t.payload <= jt.MAX_SHOW_COLORED_SETTINGS
							};
						case Ot.b:
							return t.payload === bt.a.THEMES ? {
								...e,
								isShowPrompt: !1
							} : e;
						default:
							return e
					}
				},
				It = n("./src/chat/actions/toast.ts");
			const yt = {
				toast: null,
				customErrorMessage: null
			};
			var xt = (e = yt, t) => {
					switch (t.type) {
						case It.a:
							return yt;
						case It.b: {
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
				St = n("./src/chat/actions/platform.ts"),
				Nt = n("./src/chat/actions/tooltip.ts");
			var wt = (e = null, t) => {
					switch (t.type) {
						case Nt.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case Nt.b:
						case St.a:
							return null;
						default:
							return e
					}
				},
				kt = n("./src/chat/actions/typingIndicator.ts");
			const Mt = {
				usernames: []
			};
			var Tt = (e = Mt, t) => {
					switch (t.type) {
						case kt.a: {
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
				Dt = n("./src/chat/actions/uploads/index.ts"),
				At = n("./src/chat/models/Uploads/index.ts");
			const Lt = {};
			var Ut = (e = Lt, t) => {
				switch (t.type) {
					case Dt.a: {
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
					case Dt.c: {
						const {
							id: n,
							channelId: a,
							status: s
						} = t.payload;
						if (s === At.c.Submit) return {
							[a]: []
						};
						if (s === At.c.Canceled) {
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
			var Pt = (e = !1, t) => {
				switch (t.type) {
					case Dt.e:
						return t.payload.isDrop;
					case It.b:
					case Dt.a:
						return !1;
					default:
						return e
				}
			};
			var Rt = (e = !1, t) => {
				switch (t.type) {
					case Dt.e:
						return t.payload.isOver;
					default:
						return e
				}
			};
			const Bt = {};
			Dt.c;
			var Ht = (e = Bt, t) => {
					switch (t.type) {
						case Dt.a: {
							const {
								upload: n
							} = t.payload;
							return {
								...e,
								[n.id]: {
									...n,
									status: At.c.Pending
								}
							}
						}
						case Dt.c: {
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
						case Dt.b: {
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
				Ft = n("./src/chat/actions/uploads/prompt.ts");
			const Gt = {
				count: 0
			};
			var zt = (e = Gt, t) => {
					switch (t.type) {
						case Ft.a:
							return {
								count: t.payload
							};
						default:
							return e
					}
				},
				Vt = Object(a.c)({
					activeUploads: Ut,
					isDrop: Pt,
					isOver: Rt,
					models: Ht,
					prompt: zt
				}),
				Wt = n("./src/lib/reducers/addAuthentication/index.ts");
			var Kt = Object(Wt.a)((e = null, t) => {
				switch (t.type) {
					case F.a: {
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
			const Zt = {
				userSubredditChatEnabled: !1
			};
			var qt = (e = Zt, t) => {
				switch (t.type) {
					case Ye.a: {
						const {
							userSubredditChatEnabled: n
						} = t.payload || Zt;
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
			const Qt = {};
			var Xt = (e = Qt, t) => {
				switch (t.type) {
					case F.d:
						return t.payload;
					default:
						return e
				}
			};
			const Jt = n("./src/lib/constants/index.ts").D;
			var Yt = Object(Wt.a)((e = Jt, t) => (t.type, e), Jt);
			const $t = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var en = (e = $t, t) => {
				switch (t.type) {
					case F.e:
						return t.payload;
					default:
						return e
				}
			};
			const tn = {
				globalTheme: Et.a
			};
			var nn = (e = tn, t) => {
				switch (t.type) {
					case jt.GLOBAL_THEME_CHANGED: {
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
			var an = (e = "", t) => {
					switch (t.type) {
						case F.f:
							return t.payload;
						default:
							return e
					}
				},
				sn = n("./src/chat/actions/session.ts");
			var cn = (e = null, t) => {
				switch (t.type) {
					case sn.a:
					case sn.c:
						return t.payload;
					case sn.b:
						return null;
					default:
						return e
				}
			};
			var rn = (e = "", t) => {
					switch (t.type) {
						case F.g:
							return t.payload;
						default:
							return e
					}
				},
				on = Object(a.c)({
					account: Kt,
					chatExperiments: qt,
					experiments: Xt,
					language: Yt,
					loid: en,
					prefs: nn,
					reddaid: an,
					session: cn,
					sessionTracker: rn
				});
			const ln = {
				channels: H,
				contacts: ne,
				container: re,
				experiments: he,
				inviteLinkSettings: Oe,
				gifs: be,
				members: ye,
				messages: ze,
				reactionsList: qe,
				meta: Ve.b,
				platform: We.b,
				renameGroupChat: Je,
				sendbird: ut,
				settingsDropdown: pt,
				sidebar: gt,
				themes: Ct,
				toast: xt,
				tooltipId: wt,
				typingIndicator: Tt,
				user: on,
				uploads: Vt,
				lastAction: ft.a
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
		"./src/chat/selectors/reportRevamp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/reselect/es/index.js");
			var s;
			! function(e) {
				e.Enabled = "enabled"
			}(s || (s = {}));
			const c = Object(a.a)(e => e.experiments.models, e => {
				var t;
				return (null === (t = e.ae_reporting_revamp_d2x_chat) || void 0 === t ? void 0 : t.variant) === s.Enabled
			})
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
				p = n("./node_modules/react-router-redux/es/index.js"),
				b = n("./src/chat/constants/channels.ts"),
				g = n("./src/chat/helpers/urls/index.ts"),
				f = n("./src/chat/selectors/channels.ts");
			const O = e => async (t, n) => {
				const a = n(),
					s = Object(f.x)(a);
				if (t(Object(m.J)({
						channelId: e
					})), s && s.channelId === e) {
					const n = Object(g.getRedirectURL)(Object(g.channelAction)(e, b.a.DENY));
					t(Object(p.b)(n))
				}
			};
			var j = n("./src/chat/selectors/user.ts");
			const E = (e, t) => async (n, a) => {
				const s = a(),
					{
						channelId: c
					} = e,
					r = Object(f.y)(s),
					o = Object(j.a)(s);
				if (t === o && (n(Object(m.I)(c)), c === r)) {
					const e = Object(g.getRedirectURL)(Object(g.channelAction)(c, b.a.DENY));
					n(Object(p.b)(e))
				}
			};
			var v = n("./src/chat/actions/message/index.ts"),
				_ = n("./src/chat/actions/message/reactions.ts"),
				C = n("./src/chat/actions/sendbird/index.ts"),
				I = n("./src/chat/actions/sendbird/sdk.ts"),
				y = n("./src/chat/actions/session.ts"),
				x = n("./src/chat/actions/toast.ts"),
				S = n("./src/chat/actions/typingIndicator.ts"),
				N = n("./src/chat/constants/batchSizes.ts"),
				w = n("./src/chat/constants/messages.ts"),
				k = n("./src/chat/constants/sendbird.ts"),
				M = n("./src/chat/constants/toast.ts"),
				T = n("./src/chat/helpers/errors.ts"),
				D = n("./src/chat/models/Channel/index.ts"),
				A = n("./src/chat/models/Channel/utils.ts"),
				L = n("./src/chat/models/Message/index.ts"),
				U = n("./src/chat/models/MessageReaction/index.ts"),
				P = n("./src/chat/models/User/member.ts");
			const R = 2,
				B = 1e3,
				H = 100,
				F = 200;
			const G = new class {
				constructor() {
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
					}, this.reconnect = async (e = !1) => {
						this.dispatch(Object(x.g)({
							toast: M.a.ConnectionPending
						})), e && (await this.disconnect(), await this.dispatch(Object(y.d)())), await this.dispatch(Object(C.l)()), this.dispatch(Object(C.k)())
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
								const t = Object(D.h)(c);
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
					e ? (this.onChannelChanged(), this.onChannelDeleted(), this.onChannelMuted(), this.onChannelUnmuted(), this.onChannelLocked(), this.onChannelUnlocked(), this.onReceiveInvite(), this.onReceiveMessage(), this.onUpdateMessage(), this.onDeleteMessage(), this.onUserActions(), this.onUserKicked(), this.onTypingStatusUpdated(), this.onReactionUpdated(), this.onReconnectStarted(), this.onReconnectSucceeded(), this.onReconnectFailed()) : (this.channelUniqueHandlerID.length && this.channelUniqueHandlerID.forEach(e => {
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
							toast: M.a.ConnectionPending
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
							toast: M.a.ConnectionOpen
						})), Object(d.setTimeout)(() => this.dispatch(Object(x.d)()), 3 * u.Rb);
						this.dispatch(Object(v.v)(!0)), this.dispatch(Object(m.C)())
					}, this.self.addConnectionHandler("RECONNECT_SUCCEEDED", e), this.connectionUniqueHandlerID.push("RECONNECT_SUCCEEDED")
				}
				onReconnectFailed() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: k.b.Closed
						};
					e.onReconnectFailed = () => {
						this.dispatch(Object(I.h)(t)), this.dispatch(Object(x.g)({
							toast: M.a.ConnectionClosed
						}))
					}, this.self.addConnectionHandler("RECONNECT_FAILED", e), this.connectionUniqueHandlerID.push("RECONNECT_FAILED")
				}
				onReceiveInvite() {
					const e = new this.self.ChannelHandler;
					e.onUserReceivedInvitation = e => {
						const t = Object(D.h)(e);
						this.dispatch(Object(m.P)(t))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_INVITE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_INVITE")
				}
				onReceiveMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageReceived = (e, t) => {
						const n = Object(D.h)(e);
						this.dispatch(Object(m.O)(n));
						const a = Object(L.c)(t);
						a && this.dispatch(Object(v.x)(a))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_MESSAGE")
				}
				onUpdateMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageUpdated = (e, t) => {
						const n = Object(D.h)(e);
						this.dispatch(Object(m.O)(n));
						const a = Object(L.c)(t);
						a && this.dispatch(Object(v.x)(a))
					}, this.self.addChannelHandler("UPDATE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("UPDATE_CHANNEL_MESSAGE")
				}
				onDeleteMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageDeleted = (e, t) => {
						this.dispatch(Object(v.y)(t))
					}, this.self.addChannelHandler("DELETE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("DELETE_CHANNEL_MESSAGE")
				}
				onTypingStatusUpdated() {
					const e = new this.self.ChannelHandler;
					e.onTypingStatusUpdated = e => {
						const t = Object(A.f)(e.url),
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
							const t = Object(D.h)(e);
							this.dispatch(Object(m.P)(t, !0))
						}, this.self.addChannelHandler(s, a), this.channelUniqueHandlerID.push(s)
					})
				}
				onReactionUpdated() {
					const e = new this.self.ChannelHandler;
					e.onReactionUpdated = (e, t) => {
						const n = Object(D.h)(e);
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
						const t = Object(D.h)(e);
						this.dispatch(Object(m.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_CHANGED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_CHANGED")
				}
				onChannelDeleted() {
					const e = new this.self.ChannelHandler;
					e.onChannelDeleted = e => {
						const t = Object(A.f)(e);
						this.dispatch(O(t))
					}, this.self.addChannelHandler("ON_CHANNEL_DELETED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_DELETED")
				}
				onChannelMuted() {
					const e = new this.self.ChannelHandler;
					e.onUserMuted = e => {
						const t = Object(D.h)(e);
						this.dispatch(Object(m.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_MUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_MUTED")
				}
				onChannelUnmuted() {
					const e = new this.self.ChannelHandler;
					e.onUserUnmuted = e => {
						const t = Object(D.h)(e);
						this.dispatch(Object(m.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNMUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNMUTED")
				}
				onChannelLocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelFrozen = e => {
						const t = Object(D.h)(e);
						this.dispatch(Object(m.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_LOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_LOCKED")
				}
				onChannelUnlocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelUnfrozen = e => {
						const t = Object(D.h)(e);
						this.dispatch(Object(m.P)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNLOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNLOCKED")
				}
				updatePartialChannelModel(e, t) {
					const {
						PARTIAL: n,
						UNSORTED: a
					} = b.b;
					t === n && e.channelState === a && (e.channelState = n, this.dispatch(Object(m.Q)(e)))
				}
				getChannelByChannelId(e) {
					return new Promise((t, n) => {
						const a = Object(A.a)(e);
						this.self.GroupChannel.getChannel(a, (e, a) => {
							a ? n(a) : t(e)
						})
					})
				}
				addChannelModelByChannelId(e) {
					return new Promise((t, n) => {
						this.getChannelByChannelId(e).then(e => {
							if (!e) return t();
							const n = Object(D.h)(e);
							if (!n) return t();
							this.dispatch(Object(m.Q)(n)), t(n)
						}).catch(e => {
							n(e)
						})
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
						const n = Object(D.h)(e);
						n && this.dispatch(E(n, t.userId))
					}, this.self.addChannelHandler("CHANNEL_USER_KICKED", e), this.channelUniqueHandlerID.push("CHANNEL_USER_KICKED")
				}
				getExistingChannels(e) {
					return new Promise((t, n) => {
						let a;
						if (e === b.b.INVITED ? this.channelListQueryInvited ? a = this.channelListQueryInvited : (this.channelListQueryInvited = this.self.GroupChannel.createMyGroupChannelListQuery(), a = this.channelListQueryInvited) : e === b.b.JOINED && (this.channelListQueryJoined ? a = this.channelListQueryJoined : (this.channelListQueryJoined = this.self.GroupChannel.createMyGroupChannelListQuery(), a = this.channelListQueryJoined)), a)
							if (a.includeEmpty = !0, a.limit = N.a.Channels, a.order = b.d.LATEST_MESSAGE, a.memberStateFilter = e === b.b.INVITED ? b.i.INVITED : b.i.JOINED, a.superChannelFilter = "all", a.customTypesFilter = ["direct", "group"], a.hasNext) {
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
				searchMemberByName(e, t = !1) {
					return new Promise((n, a) => {
						if (!this.channel) return a(new Error("this.channel is null or undefined"));
						this.memberListQuery = this.channel.createMemberListQuery(), this.memberListQuery ? (this.memberListQuery.nicknameStartsWithFilter = e, this.memberListQuery.next((a, s) => {
							const c = Object(P.a)(a),
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
									const t = Object(L.c)(e);
									t && (n[t.messageId] = t)
								}), t({
									messages: n,
									hasMore: a
								})
							} else Object(T.b)(`Error with getting previous messages from Sendbird: ${a}`), n()
						})) : (Object(T.b)("Sendbird channel does not exist"), n())
					})
				}
				addMessage(e, t, n = []) {
					return new Promise((a, s) => {
						if (this.channel) {
							const c = new(0, this.self.UserMessageParams);
							c.data = t, c.message = e, n && n.length && (c.mentionType = w.b.USERS, c.mentionedUserIds = n), this.channel.sendUserMessage(c, (e, t) => {
								if (t) Object(T.b)(`Error with sending the message to Sendbird: ${t}`), s(t);
								else {
									const t = Object(L.c)(e);
									if (t && t.messageType === w.d.USER) return a(t);
									Object(T.b)(`Unsupported message type: ${t&&t.messageType}`), s()
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
								t ? Object(T.b)(`Error with adding reactions to the message on Sendbird: ${t}`) : n(e)
							})
						}
					})
				}
				deleteMessage(e) {
					return new Promise(t => {
						if (this.channel) {
							const n = e;
							this.channel.deleteMessage(n, (e, n) => {
								n ? Object(T.b)(`Error with deleting the message on Sendbird: ${n}`) : t(e)
							})
						}
					})
				}
				getFirstMessage() {
					return new Promise((e, t) => {
						this.channel ? this.channel.getNextMessagesByTimestamp(0, !0, 1, !0, "", "", (t, n) => {
							n ? Object(T.b)(`Error with getting first message from Sendbird: ${n}`) : e(t)
						}) : (Object(T.b)("Sendbird channel does not exist"), t())
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
				return j
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "k", (function() {
				return w
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
				j = (e, t) => {
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
				E = e => {
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
				_ = e => {
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
				C = (e, t) => {
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
				y = e => {
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
				x = e => {
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
				N = e => {
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
				w = (e, t, n, o, i) => {
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
				return j
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
				j = (e, t, n) => {
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
					update: j
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
					update: j
				}), [d, f, i, p, m, O, t, n, b, u, j])
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
				return E
			})), n.d(t, "d", (function() {
				return v
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
				j = m.normalize;
			m.normalize = e => {
				j.call(m, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const E = (e, t) => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Chat~RedesignChat.185d7efaddcb0e14ba69.js.map