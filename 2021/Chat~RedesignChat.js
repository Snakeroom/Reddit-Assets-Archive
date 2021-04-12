// https://www.redditstatic.com/desktop2x/Chat~RedesignChat.9cee0e219cf50186e9b4.js
// Retrieved at 4/12/2021, 5:10:09 PM by Reddit Dataminer v1.0.0
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
			n.d(t, "f", (function() {
				return A
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "p", (function() {
				return L
			})), n.d(t, "o", (function() {
				return R
			})), n.d(t, "q", (function() {
				return B
			})), n.d(t, "g", (function() {
				return H
			})), n.d(t, "c", (function() {
				return F
			})), n.d(t, "u", (function() {
				return G
			})), n.d(t, "v", (function() {
				return W
			})), n.d(t, "w", (function() {
				return z
			})), n.d(t, "t", (function() {
				return V
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "k", (function() {
				return Z
			})), n.d(t, "h", (function() {
				return q
			})), n.d(t, "i", (function() {
				return Q
			})), n.d(t, "a", (function() {
				return J
			})), n.d(t, "b", (function() {
				return Y
			})), n.d(t, "s", (function() {
				return X
			})), n.d(t, "r", (function() {
				return $
			})), n.d(t, "m", (function() {
				return ee
			})), n.d(t, "n", (function() {
				return te
			})), n.d(t, "l", (function() {
				return ne
			})), n.d(t, "K", (function() {
				return ae
			})), n.d(t, "J", (function() {
				return se
			})), n.d(t, "x", (function() {
				return ce
			})), n.d(t, "B", (function() {
				return oe
			})), n.d(t, "R", (function() {
				return ue
			})), n.d(t, "Q", (function() {
				return me
			})), n.d(t, "P", (function() {
				return fe
			})), n.d(t, "M", (function() {
				return Oe
			})), n.d(t, "I", (function() {
				return ve
			})), n.d(t, "A", (function() {
				return xe
			})), n.d(t, "z", (function() {
				return we
			})), n.d(t, "G", (function() {
				return Ne
			})), n.d(t, "O", (function() {
				return Se
			})), n.d(t, "N", (function() {
				return Me
			})), n.d(t, "D", (function() {
				return He
			})), n.d(t, "E", (function() {
				return Ge
			})), n.d(t, "F", (function() {
				return We
			})), n.d(t, "C", (function() {
				return Ve
			})), n.d(t, "y", (function() {
				return Ke
			})), n.d(t, "L", (function() {
				return Ze
			})), n.d(t, "H", (function() {
				return qe
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				r = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/chat/actions/members.ts"),
				i = n("./src/chat/actions/message/index.ts"),
				l = n("./src/chat/actions/message/unreadCount.ts"),
				d = (n("./src/chat/actions/platform.ts"), n("./src/chat/actions/sidebar.ts")),
				u = n("./src/chat/actions/tracking.ts"),
				h = n("./src/chat/actions/user.ts"),
				m = n("./src/chat/constants/batchSizes.ts"),
				p = n("./src/chat/constants/channels.ts"),
				b = n("./src/chat/constants/sendbird.ts"),
				f = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				g = n("./src/chat/endpoints/sendbird/index.ts"),
				C = n("./src/chat/helpers/errors.ts"),
				E = n("./src/chat/helpers/urls/index.ts"),
				O = n("./src/chat/models/Channel/index.ts"),
				v = n("./src/chat/models/Channel/utils/index.ts"),
				_ = n("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				j = n("./src/chat/models/User/inviter.ts"),
				y = n("./src/chat/models/User/member.ts");
			var I = n("./src/chat/selectors/channels.ts");
			const x = e => {
					const {
						channels: t
					} = e;
					return {
						channelId: t.invited.sortedKeys[0],
						channelAction: p.a.VIEW_INVITE
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
				N = e => [x(e), w(e)],
				S = e => {
					const t = Object(I.h)(e);
					return {
						channelId: t && t.channelId
					}
				},
				k = e => e.find(e => !!e.channelId);
			var T = n("./src/chat/selectors/platform.ts"),
				M = n("./src/chat/selectors/promos.ts"),
				U = n("./src/chat/singleton/SendbirdSDK.ts");
			const A = "CHANNEL__ADD_SUCCESS",
				D = "CHANNEL__ADD_FAIL",
				P = "CHANNEL__CREATE_CHANNEL_START",
				L = "CHANNEL__SELECT_BEGIN",
				R = "CHANNEL__RESET_UNREAD_COUNT",
				B = "CHANNEL__SELECT_END",
				H = "CHANNEL__EXPAND_INVITE_LIST",
				F = "CHANNEL__COLLAPSE_INVITE_LIST",
				G = "CHANNEL__UPDATE_MODEL",
				W = "CHANNEL__INVITED_UPDATE",
				z = "CHANNEL__JOINED_UPDATE",
				V = "CHANNEL__SET_UPDATED_CHANNEL_ON_TOP",
				K = "CHANNEL__FETCHING_JOINED_CHANNELS",
				Z = "CHANNEL__FETCHING_JOINED_CHANNELS_FAILED",
				q = "CHANNEL__FETCHING_INVITED_CHANNELS",
				Q = "CHANNEL__FETCHING_INVITED_CHANNELS_FAILED",
				J = "CHANNEL__ADD_EXISTING_INVITED_CHANNELS",
				Y = "CHANNEL__ADD_EXISTING_JOINED_CHANNELS",
				X = "CHANNEL__SET_INVITED_CHANNEL_TO_JOINED",
				$ = "CHANNEL__SET_EXISTING_CHANNELS_END",
				ee = "CHANNEL__REMOVE_CHANNEL",
				te = "CHANNEL__RESET_CHANNEL_MESSAGE_LIST",
				ne = "CHANNEL__FETCH_FIRST_MESSAGE",
				ae = Object(c.a)(ee),
				se = e => async t => {
					t(ae({
						channelId: e
					}))
				}, re = Object(c.a)(X), ce = e => async (t, n) => {
					const a = n(),
						{
							channels: {
								selected: s
							},
							contacts: {
								models: c
							}
						} = a,
						o = e || s.channelId;
					if (!o) throw new C.a("accepted channelId", e);
					const l = Object(I.h)(a),
						d = l && l.firstMessageId,
						u = !!(l && d && l.hasMoreMessages),
						h = Object(I.b)(a, c),
						m = Object(M.a)(a);
					h && m ? t(Object(r.b)(Object(E.channelAction)(o, p.a.VIEW_NSFW_CONFIRMATION))) : await U.a.acceptChannelInvite().then(() => u && t(Object(i.r)(d))).then(() => t(re({
						channelId: o
					}))).then(() => t(Object(r.b)(Object(E.channelUrl)(o))))
				}, oe = () => async (e, t) => {
					const n = t(),
						a = Object(I.s)(n, "channelState"),
						s = Object(I.s)(n, "channelId"),
						r = n.channels.models[s];
					if (!s) throw new C.a("declinedChannelId", s);
					if (!a) throw new C.a("declinedChannelType", a);
					try {
						await U.a.declineChannelInvite()
					} catch (c) {
						return Object(C.b)(`Error declining channel: ${c.message}`)
					}
					e((e => async t => t(se(e)))(s)), e(Object(l.b)()), e(Se(r.channelState))
				}, ie = Object(c.a)(W), le = Object(c.a)(z), de = Object(c.a)(G), ue = e => async t => {
					t(de({
						channel: e
					}))
				}, he = e => async t => {
					await t(ie({
						channel: e
					})), t((e => async (t, n) => {
						const a = n().user.account.id,
							s = e.members.filter(e => e.id !== a).map(e => e.id);
						t(Object(h.v)(s))
					})(e))
				}, me = (e, t) => async (n, a) => {
					if (e) {
						const r = a(),
							c = Object(I.f)(r, e.channelId);
						if (e.channelState !== p.b.INVITED && !c || t) return;
						if (e = pe(r, e), s()(e, c)) return;
						switch (e.channelState) {
							case p.b.INVITED:
								await n(he(e));
								break;
							case p.b.JOINED:
								await n(le({
									channel: e
								}));
								break;
							default:
								Object(C.b)("Error updating channel. ChannelState not found.")
						}
						n(Object(l.b)())
					}
				}, pe = (e, t) => {
					return Object(T.d)(e) === t.channelId && (t.unreadMessageCount = 0), t
				}, be = Object(c.a)(V), fe = e => async t => {
					const {
						channelId: n
					} = e;
					t(be({
						channelId: n
					}))
				}, ge = Object(c.a)(R), Ce = Object(c.a)(L), Ee = Object(c.a)(B), Oe = () => async (e, t) => {
					const n = t(),
						a = Object(T.d)(n),
						s = Object(T.c)(n),
						{
							CREATE: c,
							DENY: l,
							VIEW_JOIN: u
						} = p.a;
					if (!n.platform.currentPage) return;
					const {
						activeIndex: h
					} = n.sidebarTabs;
					a && e(Object(d.d)({
						channelId: a,
						tabIndex: h
					})), await e(Object(o.f)());
					const m = a && Object(I.f)(n, a);
					if (!m && (s === l || s === c)) return;
					const f = !(!m || m.channelState !== p.b.JOINED);
					if (m && f && s && p.h.includes(s)) e(Object(r.b)(Object(E.channelUrl)(m.channelId)));
					else if (m && a) {
						e(Ce({
							channelId: a
						}));
						const t = await U.a.enterChannel(m, !1);
						if (t && !t.error) {
							const {
								messageListData: n
							} = t.data;
							await e(Object(i.o)(n, m.channelId)), await e(Ee()), e(ve(a))
						} else e(Object(i.A)()), e(Ee())
					} else {
						const t = n.sendbird.sdk.connectionStatus === b.b.Open;
						if (!m && a && t) {
							const t = await U.a.addChannelModelByChannelId(a);
							if (t && !s) return void e(Object(r.b)(Object(E.channelAction)(t.channelId, u)))
						}
						e(Me()), e(Object(i.A)())
					}
				}, ve = e => async (t, n) => {
					const a = n(),
						s = e || Object(T.d)(a);
					s && (await t(ge(s)), await U.a.markChannelAsRead(), t(Object(l.b)()))
				}, _e = Object(c.a)(P), je = Object(c.a)(A), ye = Object(c.a)(D), Ie = (e, t, n) => {
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
				}, xe = (e, t) => async (n, a, {
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
								invited: h
							}
						} = c;
					if (o && i) {
						n(_e());
						const a = Ie(e, l, o);
						if (a.length < 2) return;
						const c = await Object(g.a)(s(), i, a, t);
						if (c.ok) {
							const t = function(e, t) {
									return {
										channelId: Object(_.a)(e.channel_url),
										channelSendbirdUrl: e.channel_url,
										channelState: Object(v.b)(t),
										fetchingFirstMessage: !1,
										fetchingMessages: !1,
										fetchingMessagesError: !1,
										hasMoreMessages: !1,
										isMessageListLoaded: !1,
										inviter: Object(j.b)(e.inviter),
										coverUrl: e.cover_url,
										createdAt: e.created_at,
										customType: e.custom_type,
										data: e.data,
										maxLengthMessage: -1,
										memberCount: e.member_count,
										name: e.name,
										type: Object(v.d)(e),
										lastMessage: void 0,
										unreadMessageCount: e.unread_message_count,
										unreadMentionCount: e.unread_mention_count,
										members: Object(y.a)(e.members)
									}
								}(c.body, p.b.JOINED),
								{
									channelId: a
								} = t;
							h.sortedKeys.includes(a) ? (n(ce(a)), n(Object(u.h)(e, a))) : d.sortedKeys.includes(a) ? (n(Object(r.b)(Object(E.channelUrl)(a))), n(Object(u.h)(e, a))) : (await n(je({
								[a]: t
							})), n(Object(u.h)(e, a)), n(Object(r.b)(Object(E.channelUrl)(a))))
						} else n(ye()), n(Object(u.y)(e))
					}
				}, we = e => async t => {
					e = e.slice(0, 1), await t(Object(h.v)(e)), t(xe(e)), t(Object(u.i)(e))
				}, Ne = e => async (t, n, {
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
						l = Object(I.s)(s, "channelSendbirdUrl");
					if (c && o) {
						const n = Ie(e, i);
						(await Object(g.h)(a(), o, n, l)).body ? (t(Object(u.b)()), t(Object(r.a)())) : Object(C.b)("Error inviting user to existing channel")
					}
				}, Se = e => async (t, n) => {
					const a = n(),
						s = e === p.b.INVITED,
						r = x(a),
						c = w(a);
					s ? r.channelId ? t(Te(r)) : t(Te(c)) : c.channelId ? t(Te(c)) : t(ke())
				}, ke = () => async (e, t) => {
					const n = t();
					if (n.channels.firstLoaded) {
						const t = ((e, t) => {
							const n = [...t ? [S(e)] : [], ...N(e)];
							return k(n)
						})(n, !!n.platform.currentPage);
						e(Te(t))
					}
				}, Te = e => async t => {
					e && e.channelId ? e.channelAction ? t(Object(r.c)(Object(E.channelAction)(e.channelId, e.channelAction))) : t(Object(r.c)(Object(E.channelUrl)(e.channelId))) : t(Object(r.c)(E.rootUrl))
				}, Me = e => async (t, n) => {
					const {
						platform: {
							currentPage: a
						}
					} = n();
					if (a && a.urlParams.userIds) {
						const e = a.urlParams.userIds.split(",");
						return t(we(e))
					}
					if (e) return t(Se(e));
					const s = Object(f.b)(n());
					if (s) {
						const e = Object(I.f)(n(), s);
						if (e) {
							const n = Object(E.getChannelUrl)(e);
							return void t(Object(r.b)(n))
						}
					}
					return t(ke())
				}, Ue = Object(c.a)(q), Ae = Object(c.a)(Q), De = Object(c.a)(K), Pe = Object(c.a)(Z), Le = Object(c.a)(J), Re = Object(c.a)(Y), Be = Object(c.a)($), He = () => async (e, t) => {
					await Promise.all([e(ze()), e(Ge()), e(We())]);
					const n = t().channels.models;
					await e(Fe(n)), e(Be()), e(Oe())
				}, Fe = e => async t => {
					const n = Object(v.c)(e, [O.a.Direct, O.a.Group, O.a.Subreddit]);
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
				}, Ge = () => async (e, t) => {
					e(Ue());
					const n = await U.a.getExistingChannels(p.b.INVITED).catch(() => null);
					if (n) {
						const {
							hasMoreChannels: t
						} = n, a = Object(O.c)(n.channels);
						return e(Fe(a)), void e(Le({
							channels: a,
							hasMoreChannels: t
						}))
					}
					e(Ae()), Object(C.b)("Error fetching invited channels")
				}, We = () => async (e, t) => {
					e(De());
					const n = await U.a.getExistingChannels(p.b.JOINED).catch(t => {
						Object(C.b)(t), e(Pe())
					});
					if (n) {
						const {
							hasMoreChannels: a
						} = n, s = Object(O.c)(n.channels), r = Object(I.m)(t());
						return e(Re({
							channels: s,
							hasMoreChannels: a
						})), void(a && r < m.a.InitChannels && e(We()))
					}
					e(Pe())
				}, ze = () => async (e, t) => {
					const n = t(),
						a = Object(T.d)(n);
					a && await U.a.addChannelModelByChannelId(a)
				}, Ve = Object(c.a)(H), Ke = Object(c.a)(F), Ze = Object(c.a)(te), qe = e => async (t, n) => {
					const a = n(),
						s = Object(I.s)(a, "channelState");
					U.a.leaveChannel().then(() => t(se(e))).then(() => t(Se(s))).catch(e => Object(C.b)(`Error leaving channels: ${e.message}`))
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
				return w
			})), n.d(t, "g", (function() {
				return N
			})), n.d(t, "f", (function() {
				return S
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
				INVITE_MEMBERS: f,
				LEAVE: g,
				VIEW_MEMBERS: C
			} = l.a, E = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(m.o)(n);
				e(Object(a.b)(Object(h.channelAction)(s, f)))
			}, O = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(m.o)(n);
				e(Object(a.b)(Object(h.channelAction)(s, g)))
			}, v = e => async t => {
				t(Object(c.b)()), t(Object(o.c)({
					tooltipId: e
				})), t(Object(i.B)())
			}, _ = e => async t => {
				e && (t(Object(i.m)()), t(Object(i.p)()).then(() => {
					window.open(Object(h.viewProfileUrl)(e))
				}))
			}, j = () => async (e, t) => {
				const n = t(),
					{
						channelId: s
					} = Object(m.o)(n);
				e(Object(a.b)(Object(h.channelAction)(s, C)))
			}, y = "CHANNEL__UPDATE_CHANNEL_NAME", I = Object(s.a)(y), x = e => async (t, n) => {
				const a = Object(m.o)(n());
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
			}, w = ({
				channelId: e
			}) => async () => {
				p.a.setMyCountPreference(e, l.c.Off).catch(u.b)
			}, N = ({
				channelId: e
			}) => async () => {
				p.a.setMyCountPreference(e, l.c.All).catch(u.b)
			}, S = e => async (t, n, {
				apiContext: a
			}) => {
				await Promise.all([Object(d.j)(a(), e.channelId), p.a.setPushPreference(e.channelId, !0)]).then(() => {
					const a = Object(m.f)(n(), e);
					a && t(Object(r.Q)({
						...a,
						isNotifsMuted: !0
					}))
				}).catch(u.b)
			}, k = e => async (t, n, {
				apiContext: a
			}) => {
				await Promise.all([Object(d.l)(a(), e.channelId), p.a.setPushPreference(e.channelId, !1)]).then(() => {
					const a = Object(m.f)(n(), e);
					a && t(Object(r.Q)({
						...a,
						isNotifsMuted: !1
					}))
				}).catch(u.b)
			}, T = e => async (t, n) => {
				const s = n(),
					r = Object(m.f)(s, e);
				r ? t(Object(a.b)(Object(h.channelAction)(r.channelId, b))) : Object(u.b)("Error opening the channel's hide confirmation flow")
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
						r = Object(l.p)(s);
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
				}, f = "MEMBERS__FETCHING_MEMBERS_COMPLETED", g = Object(r.a)(f), C = "MEMBERS__ADD_CHANNEL_MEMBERS", E = Object(r.a)(C), O = (e, t, n) => async (a, r, {
					apiContext: o
				}) => {
					const l = t.map(e => e.userId),
						u = await Object(c.d)(o(), l);
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
					a(g({
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
				const a = Object(o.p)(n()),
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
				return T
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "p", (function() {
				return L
			})), n.d(t, "x", (function() {
				return R
			})), n.d(t, "m", (function() {
				return B
			})), n.d(t, "k", (function() {
				return F
			})), n.d(t, "w", (function() {
				return G
			})), n.d(t, "i", (function() {
				return V
			})), n.d(t, "u", (function() {
				return Z
			})), n.d(t, "b", (function() {
				return q
			})), n.d(t, "o", (function() {
				return J
			})), n.d(t, "l", (function() {
				return Y
			})), n.d(t, "A", (function() {
				return X
			})), n.d(t, "d", (function() {
				return $
			})), n.d(t, "r", (function() {
				return ee
			})), n.d(t, "q", (function() {
				return te
			})), n.d(t, "j", (function() {
				return ne
			})), n.d(t, "v", (function() {
				return se
			})), n.d(t, "g", (function() {
				return re
			})), n.d(t, "e", (function() {
				return ce
			})), n.d(t, "f", (function() {
				return oe
			})), n.d(t, "s", (function() {
				return ue
			})), n.d(t, "z", (function() {
				return he
			})), n.d(t, "y", (function() {
				return me
			})), n.d(t, "n", (function() {
				return pe
			})), n.d(t, "B", (function() {
				return fe
			})), n.d(t, "h", (function() {
				return ge
			})), n.d(t, "t", (function() {
				return Ce
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/flatten.js"),
				s = n.n(a),
				r = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/linkMatchers/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/chat/actions/channel.ts"),
				l = n("./src/chat/actions/tracking.ts"),
				d = n("./src/chat/constants/messages.ts"),
				u = n("./node_modules/lodash/isEmpty.js"),
				h = n.n(u),
				m = n("./src/config.ts"),
				p = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/makeRequest/index.ts");
			const f = m.a.embedlyApiKey,
				g = e => e && e.length > 0 && e[0] ? e[0].url : void 0,
				C = e => e.filter(e => !h()(e)).map(e => ({
					name: e.provider_name,
					providerDisplay: e.provider_display,
					title: e.title,
					description: e.description,
					faviconUrl: e.favicon_url,
					imageUrl: g(e.images),
					url: e.url
				}));
			var E = n("./src/chat/actions/message/richUnit.ts"),
				O = n("./src/chat/actions/surveyTrigger/index.ts"),
				v = n("./src/chat/endpoints/sendbird/index.ts"),
				_ = n("./src/chat/helpers/errors.ts"),
				j = n("./src/chat/helpers/urls/index.ts"),
				y = n("./src/chat/models/Message/index.ts"),
				I = n("./src/chat/models/Message/adapter.ts"),
				x = n("./src/chat/selectors/app.ts"),
				w = n("./src/chat/selectors/channels.ts"),
				N = n("./src/chat/selectors/contacts.ts"),
				S = n("./src/chat/selectors/messages.ts"),
				k = n("./src/chat/singleton/SendbirdSDK.ts");
			const T = "MESSAGE__ADD_ONE",
				M = Object(o.a)(T),
				U = (e, t, n) => async (a, s) => {
					const r = s(),
						c = Object(I.b)(n),
						o = await A(t, r, a);
					k.a.addMessage(t, n, o).then(t => {
						const n = {
							[t.messageId]: t
						};
						a(M({
							message: n,
							channelId: e,
							clientMessageId: c
						})), a(Object(l.w)(t.messageId)), a(Object(E.c)(t))
					}).catch(e => {
						if (c) {
							const t = `${e.code}: ${e.message}`;
							a(Object(l.A)(c, t)), a(H({
								clientMessageId: c,
								toggle: !0
							}))
						}
					})
				}, A = async (e, t, n) => {
					const a = Object(c.d)(e);
					if (!a.length) return [];
					const r = [];
					return [...a.map(e => {
						const n = Object(N.f)(t, e);
						return n || r.push(e), n && n.id
					}).filter(e => e), ...(r.length && s()(await Promise.all(r.slice(0, 3).map(e => k.a.searchMemberByName(e, !0)))) || []).map(e => e && e.id).filter(e => e)]
				}, D = "MESSAGE__ADD_PENDING_ONE", P = Object(o.a)(D), L = (e, t, n) => async (a, s) => {
					var r;
					const o = s(),
						i = c.b.match(t),
						l = 1 === (null == i ? void 0 : i.length) && 1 === t.trim().split(" ").length;
					if (Object(j.isRedditLink)(null === (r = null == i ? void 0 : i[0]) || void 0 === r ? void 0 : r.url) && l) a(W(e, t));
					else if (l) a(z(e, t));
					else {
						const s = Object(y.b)(o, e, t, n);
						a(P(s)), a(U(e, t, s.data))
					}
				}, R = (e, t) => async (n, a) => {
					const s = a(),
						r = Object(S.i)(s, t);
					r && (n(H({
						clientMessageId: t,
						toggle: !1
					})), n(U(e, r.messageData.value, r.data)))
				}, B = "MESSAGE__TOGGLE_PENDING_MESSAGE_ERROR", H = Object(o.a)(B), F = "MESSAGE__REMOVE_PENDING_ONE", G = Object(o.a)(F), W = (e, t) => async (n, a) => {
					const s = a(),
						r = Object(j.getChatUnitType)(t),
						c = Object(y.b)(s, e, t, r.type);
					c && (n(P(c)), n(U(e, c.messageData.value, c.data)))
				}, z = (e, t) => async (n, a) => {
					const s = a(),
						r = c.f.match(t);
					if (!r.length || r.length > 1) return Object(_.b)(`We only support 1 link per text but ${r.length} given`);
					const o = r[0].url,
						i = d.c.EMBED;
					let l = {
						url: t
					};
					const u = Object(y.b)(s, e, JSON.stringify(l), i);
					if (u) {
						n(P(u));
						const t = await (async ({
							chars: e,
							scheme: t,
							url: n
						}) => Object(b.b)({
							endpoint: "https://api.embed.ly/1/extract",
							method: p.cb.GET,
							data: {
								key: f,
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
							const a = JSON.stringify(l),
								s = JSON.stringify(Object(I.a)(a, i, u.clientMessageId));
							n(U(e, l.url, s))
						}
					}
				}, V = "MESSAGE__RECEIVE_ADD_ONE", K = Object(o.a)(V), Z = e => async (t, n) => {
					const a = n(),
						s = Object(w.p)(a) === e.channelId;
					Object(x.b)(a) && s && t(Object(i.I)(e.channelId)), t(K({
						[e.messageId]: e
					})), t(Object(E.c)(e))
				}, q = "MESSAGE__ADD_LIST", Q = Object(o.a)(q), J = (e, t) => async n => {
					n(Q({
						channelId: t,
						...e
					})), n(Object(E.d)(e)), n(Object(O.b)())
				}, Y = "MESSAGE__SET_MESSAGE_LIST_IS_LOADED", X = Object(o.a)(Y), $ = "MESSAGE__DELETE_ONE", ee = Object(o.a)($), te = e => async (t, n) => {
					const a = n(),
						s = Object(S.d)(a, e);
					s && s.messageType === d.d.USER && k.a.deleteMessage(s).then(() => t(ee(s.messageId))).then(() => t(Object(r.a)()))
				}, ne = "MESSAGE__RECEIVE_DELETE_ONE", ae = Object(o.a)(ne), se = e => async (t, n) => {
					t(ae(e))
				}, re = "MESSAGE__GET_PREVIOUS_MESSAGES_START", ce = "MESSAGE__GET_PREVIOUS_MESSAGES_END", oe = "MESSAGE__GET_PREVIOUS_MESSAGES_ERROR", ie = Object(o.a)(re), le = Object(o.a)(ce), de = Object(o.a)(oe), ue = e => async (t, n) => {
					const a = Object(w.s)(n(), "channelId");
					t(ie(a)), t(Object(l.D)()), a && await k.a.getPreviousMessages(e).then(e => t(le({
						channelId: a,
						...e
					}))).catch(() => t(de(a)))
				}, he = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					try {
						await Object(v.g)(s(), t, e)
					} catch (r) {
						Object(_.b)(r)
					}
				}, me = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					try {
						await Object(v.b)(s(), t, e)
					} catch (r) {
						Object(_.b)(r)
					}
				}, pe = "MESSAGE__UNCOLLAPSE", be = Object(o.a)(pe), fe = e => async t => {
					t(be(e))
				}, ge = "MESSAGE__HIDE_REPORT_PROMPT_FOR_COLLAPSE_MESSAGE", Ce = Object(o.a)(ge)
		},
		"./src/chat/actions/message/richUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			}));
			var a = n("./node_modules/lodash/uniq.js"),
				s = n.n(a),
				r = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/chat/constants/messages.ts"),
				o = n("./src/graphql/operations/ChatUnitDetails.json"),
				i = n("./src/lib/makeGqlRequest/index.ts");
			const l = "MESSAGE__UNITS_DATA_RECEIVED",
				d = "MESSAGE__RESET_RICH_UNITS_DATA_RECEIVED",
				u = Object(r.a)(l),
				h = (e, t) => {
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
				m = e => async t => {
					const n = {
						post: [],
						userPost: [],
						comment: [],
						subreddit: []
					};
					h(n, e), t(b(n))
				}, p = e => async (t, n) => {
					const a = {
						post: [],
						userPost: [],
						comment: [],
						subreddit: []
					};
					for (const s in e.messages) {
						const t = e.messages[s];
						h(a, t)
					}
					t(b(a))
				}, b = e => async (t, n, {
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
					};
					for (const o in e) {
						const t = s()(e[o].reduce((e, t) => t.chatUnitId && e.push(t.chatUnitId) && e || e, []));
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
							const n = e.body.data;
							n.comments && (n.comments = n.comments.map(e => {
								var t;
								return (null === (t = null == e ? void 0 : e.postInfo) || void 0 === t ? void 0 : t.subreddit) && {
									...e,
									type: c.c.COMMENT
								}
							})), n.posts && (n.posts = n.posts.map(e => ({
								...e,
								type: c.c.POST
							}))), n.userPosts && (n.userPosts = n.userPosts.map(e => ({
								...e,
								type: c.c.USER_POST
							}))), n.subreddits && (n.subreddits = n.subreddits.map(e => ({
								...e,
								type: c.c.SUBREDDIT
							}))), t(u(n))
						}
					}
				}, f = Object(r.a)(d)
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
						const e = await Object(l.f)(t(), n);
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
				}, o.Ib, {
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
					n(Object(s.c)(i)), await Object(r.l)()(n, a, o), await Object(r.o)()(n, a, o), await e(t)(n, a, o)
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
						n.match.params.subredditName && r(Object(o.l)()), n.match.params.channelId && r(Object(c.M)())
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
					const a = await Object(s.c)(n());
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
				return g
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
				return N
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "l", (function() {
				return T
			}));
			var a, s = n("./src/lib/cache/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/chat/actions/tracking.ts"),
				i = n("./src/chat/endpoints/accounts/index.ts"),
				l = n("./src/chat/endpoints/sendbird/index.ts"),
				d = n("./src/chat/models/Contact/index.ts"),
				u = n("./src/chat/selectors/contacts.ts");
			! function(e) {
				e.SubredditChat = "chat_subreddit", e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(a || (a = {}));
			const h = "SENDBIRD__DEACTIVATE_SENDBIRD_SESSION",
				m = "SENDBIRD__ACTIVATE_SENDBIRD_SESSION",
				p = Object(c.a)(h),
				b = "SENDBIRD__SET_SENDBIRD_SESSION",
				f = Object(c.a)(b),
				g = (e = !0) => async (t, n, {
					apiContext: a
				}) => {
					const c = n(),
						{
							account: o,
							session: i
						} = c.user;
					if (i && o) {
						let n;
						const c = Object(s.b)(r.o.CHAT, "session", o.id),
							d = Object(s.a)(c);
						if (d && d.token) n = d;
						else {
							const e = await Object(l.e)(a(), i);
							if (e.ok) {
								const {
									valid_until: t,
									sb_access_token: a
								} = e.body;
								n = {
									expires: t,
									token: a
								}, Object(s.c)(c, n, new Date(t))
							}
						}
						if (n) return void t(f({
							...n,
							active: e
						}))
					}
					t(p())
				}, C = "SENDBIRD__ADD_MEMBERS_TO_KNOWN_CONTACTS", E = Object(c.a)(C), O = "SENDBIRD__SET_REDDIT_CONTACT_LIST", v = 6 * r.J, _ = Object(c.a)(O), j = () => async (e, t, {
					apiContext: n
				}) => {
					const a = t(),
						c = a.contacts.models,
						o = Object(s.b)(r.o.CHAT, "contacts", a.user.account.id),
						i = Object(s.a)(o);
					if (i && i.version === d.a) return void e(_(i.data));
					const u = t().user.session;
					if (!u) return;
					const h = await Object(l.d)(n(), u, 25),
						m = Object(d.c)(h.body).map(e => c[e.id] ? c[e.id] : e),
						p = {
							version: d.a,
							data: m
						};
					Object(s.c)(o, p, v), e(_(m))
				}, y = "SENDBIRD__IDENTIFY_CONTACT_BEGIN", I = "SENDBIRD__IDENTIFY_CONTACT_END", x = Object(c.a)(y), w = Object(c.a)(I), N = e => async (t, n, {
					apiContext: a
				}) => {
					if (e.username === r.A) return;
					Object(u.c)(n(), e.username) || (t(x({
						username: e.username
					})), Object(i.b)(a(), e.username).then(n => {
						if (n.ok) {
							const a = Object(d.d)(n.body.data);
							if (a) return t(w({
								username: e.username,
								contact: a,
								valid: !0
							}))
						} else t(Object(o.z)(e.username));
						t(w({
							username: e.username,
							valid: !1
						}))
					}))
				}, S = "SENDBIRD__OPT_IN", k = Object(c.a)(S), T = () => async (e, t, {
					apiContext: n
				}) => {
					(e => !!e.user.experiments[a.SubredditChat] || !!e.user.chatExperiments.userSubredditChatEnabled)(t()) || (e(k({
						userSubredditChatEnabled: !0
					})), Object(l.k)(n()))
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
				f = "SENDBIRD_SDK__DISCONNECT",
				g = "SENDBIRD_SDK__UPDATE_CONNECTION_STATUS",
				C = Object(a.a)(p),
				E = Object(a.a)(b),
				O = e => async (t, n) => {
					const a = n(),
						o = Object(u.d)(a),
						p = Object(u.c)(a),
						b = Object(u.b)(a),
						f = Object(h.d)(a),
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
							if (e.error) t(C(e.error)), t(j({
								...g
							})), t(Object(i.e)({
								toast: d.a.ConnectionClosed
							}));
							else {
								if (t(E()), o) {
									const e = !0;
									t(Object(r.s)(e)), t(Object(i.e)({
										toast: d.a.ConnectionOpen
									})), t(Object(i.c)(3))
								}
								t(Object(c.b)()), t(Object(s.D)())
							}
						})
					}
				}, v = Object(a.a)(f), _ = () => async e => {
					m.a.disconnect().then(() => {
						e(v()), e(Object(o.j)())
					})
				}, j = Object(a.a)(g), y = () => m.a.reconnect()
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
							method: s.cb.POST
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
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			const s = "SIDEBAR__SET_SIDEBAR_ACTIVE_INDEX",
				r = Object(a.a)(s),
				c = e => async (t, n) => {
					const a = n();
					e !== a.sidebarTabs.activeIndex && t(r({
						activeIndex: e
					}))
				}, o = "SIDEBAR__SET_LAST_CHANNEL_ID_PER_TAB", i = Object(a.a)(o)
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
						method: s.cb.GET
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
					setTimeout(() => t(c()), e * s.Ib)
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
			n.d(t, "g", (function() {
				return f
			})), n.d(t, "w", (function() {
				return g
			})), n.d(t, "A", (function() {
				return C
			})), n.d(t, "x", (function() {
				return E
			})), n.d(t, "D", (function() {
				return O
			})), n.d(t, "B", (function() {
				return v
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "z", (function() {
				return w
			})), n.d(t, "y", (function() {
				return N
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "k", (function() {
				return M
			})), n.d(t, "l", (function() {
				return U
			})), n.d(t, "m", (function() {
				return A
			})), n.d(t, "j", (function() {
				return D
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "i", (function() {
				return L
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "o", (function() {
				return B
			})), n.d(t, "E", (function() {
				return H
			})), n.d(t, "q", (function() {
				return F
			})), n.d(t, "r", (function() {
				return G
			})), n.d(t, "C", (function() {
				return W
			})), n.d(t, "t", (function() {
				return z
			})), n.d(t, "a", (function() {
				return V
			})), n.d(t, "s", (function() {
				return K
			}));
			var a = n("./src/telemetry/models/Event.ts"),
				s = n("./src/chat/constants/channels.ts"),
				r = n("./src/chat/selectors/channels.ts"),
				c = n("./src/chat/selectors/contacts.ts"),
				o = n("./src/chat/selectors/platform.ts"),
				i = n("./src/chat/tracking/fields/chat.ts"),
				l = n("./src/chat/tracking/fields/common.ts"),
				d = n("./src/chat/tracking/sendEvent.ts");
			var u = n("./src/chat/tracking/events/chatView.ts"),
				h = n("./src/chat/tracking/events/contactsList.ts"),
				m = n("./src/chat/tracking/events/invitationInbox.ts"),
				p = n("./src/chat/tracking/events/messagesInbox.ts"),
				b = n("./src/chat/selectors/telemetry.ts");
			const f = () => async (e, t) => {
				Object(p.b)(t())
			}, g = e => async (t, n) => {
				Object(u.a)(n(), e)
			}, C = (e, t) => async (n, a) => {
				Object(u.d)(a(), e, t)
			}, E = (e, t) => async (n, a) => {
				Object(u.b)(a(), e, t)
			}, O = () => async (e, t) => {
				Object(u.e)(t())
			}, v = () => async (e, t) => {
				(e => Object(d.a)({
					noun: "chat_settings",
					source: a.b.ChatSettings,
					action: a.a.View,
					chat: {
						...Object(i.A)(e),
						...Object(i.q)(e),
						...Object(i.g)(e)
					},
					...Object(l.a)(e)
				}))(t())
			}, _ = () => async (e, t) => {
				const n = Object(r.n)(t());
				if (n && n.length) {
					const e = n[0].id;
					((e, t) => Object(d.a)({
						noun: "chat_member_block",
						source: a.b.ChatSettings,
						action: a.a.Submit,
						chat: {
							...Object(i.A)(e),
							...Object(i.q)(e),
							...Object(i.g)(e),
							...Object(i.b)(t)
						},
						...Object(l.a)(e)
					}))(t(), e)
				}
			}, j = () => async (e, t) => {
				const n = t();
				Object(o.c)(n) !== s.a.VIEW_INVITE && (e => {
					Object(d.a)({
						noun: "view_member",
						source: a.b.ChatSettings,
						action: a.a.Click,
						chat: {
							...Object(i.A)(e),
							...Object(i.q)(e),
							...Object(i.u)(e),
							...Object(i.g)(e)
						},
						...Object(l.a)(e)
					})
				})(n)
			}, y = () => async (e, t) => {
				(e => Object(d.a)({
					noun: "leave_group",
					source: a.b.ChatSettings,
					action: a.a.Click,
					chat: {
						...Object(i.A)(e),
						...Object(i.q)(e),
						...Object(i.g)(e),
						...Object(i.y)(e)
					},
					...Object(l.a)(e)
				}))(t())
			}, I = e => async (t, n) => {
				((e, t) => {
					Object(d.a)({
						noun: "chat_member_report",
						source: a.b.ChatSettings,
						action: a.a.Submit,
						chat: {
							...Object(i.A)(e),
							...Object(i.q)(e),
							...Object(i.g)(e),
							...Object(i.w)(t)
						},
						...Object(l.a)(e)
					})
				})(n(), e)
			}, x = e => async (t, n) => {
				Object(h.c)(n(), e)
			}, w = e => async (t, n) => {
				Object(c.c)(n(), e) && Object(h.f)(n())
			}, N = e => async (t, n) => {
				const a = n(),
					s = e && e.filter(e => e !== a.user.account.id),
					r = s && s[0],
					o = a.contacts.models[r],
					i = o && o.name,
					l = Object(c.a)(n(), i);
				l && Object(h.e)(n(), l)
			}, S = (e, t) => async (e, n) => {
				Object(h.d)(n(), t)
			}, k = () => async (e, t) => {
				Object(h.b)(t())
			}, T = () => async (e, t) => {
				Object(h.a)(t())
			}, M = () => async (e, t) => {
				Object(m.d)(t())
			}, U = () => async (e, t) => {
				Object(m.e)(t())
			}, A = () => async (e, t) => {
				const n = t();
				Object(o.c)(n) === s.a.VIEW_INVITE && Object(m.f)(n)
			}, D = () => async (e, t) => {
				const n = t();
				Object(m.c)(n)
			}, P = () => async (e, t) => {
				Object(m.b)(t())
			}, L = e => async (t, n) => {
				((e, t) => {
					Object(d.a)({
						noun: "create_chat",
						source: a.b.UserHovercard,
						action: a.a.Click,
						chat: {
							...Object(i.E)(e, t),
							...Object(i.C)(e, t),
							...Object(i.D)(e, t)
						},
						...Object(l.a)(e),
						...Object(l.b)(e)
					})
				})(n(), e)
			}, R = () => async (e, t) => {
				Object(p.a)(t())
			}, B = () => async (e, t) => {
				Object(p.c)(t())
			}, H = e => async (t, n) => {
				const s = n();
				s.tooltipId !== e && (e => {
					Object(d.a)({
						noun: "snoomoji",
						source: a.b.ChatKeyboard,
						action: a.a.View,
						chat: {
							...Object(i.A)(e),
							...Object(i.q)(e),
							...Object(i.g)(e)
						},
						...Object(l.a)(e)
					})
				})(s)
			}, F = () => async (e, t) => {
				(e => {
					Object(d.a)({
						noun: "other_message",
						source: a.b.ChatView,
						action: a.a.ModDelete,
						chat: {
							...Object(i.A)(e),
							...Object(i.q)(e),
							...Object(i.g)(e),
							...Object(i.s)(e),
							...Object(i.o)(e),
							...Object(i.x)(e)
						},
						...Object(l.a)(e)
					})
				})(t())
			}, G = e => async (t, n) => {
				const s = n(),
					r = Object(o.b)(s),
					c = (e => {
						switch (e) {
							case a.b.ChatSettings:
								return a.b.ChatSettings;
							default:
								return a.b.ChatView
						}
					})(r && r.source);
				((e, t, n) => {
					Object(d.a)({
						noun: "user",
						source: n,
						action: a.a.Kick,
						chat: {
							...Object(i.A)(e),
							...Object(i.q)(e),
							...Object(i.g)(e),
							...Object(i.s)(e),
							...Object(i.o)(e),
							...Object(i.x)(e)
						},
						...Object(l.a)(e),
						actionInfo: {
							settingValue: t,
							...Object(b.a)(e)
						}
					})
				})(n(), e, c)
			}, W = e => async (t, n) => {
				Object(m.h)(n(), e)
			}, z = e => async (t, n) => {
				Object(m.h)(n(), e)
			}, V = (e, t) => async (n, a) => {
				Object(m.a)(a(), e, t)
			}, K = (e, t) => async (n, a) => {
				Object(m.g)(a(), e, t)
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
					const r = Object(c.s)(a(), "channelId"),
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
				return w
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "u", (function() {
				return U
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "v", (function() {
				return H
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "m", (function() {
				return W
			})), n.d(t, "k", (function() {
				return z
			})), n.d(t, "t", (function() {
				return V
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
				f = n("./src/chat/helpers/errors.ts"),
				g = n("./src/chat/models/Channel/index.ts"),
				C = n("./src/chat/models/Contact/index.ts");
			const E = e => ({
				experimentId: e.experiment_id,
				owner: e.owner,
				variant: e.variant
			});
			var O = n("./src/chat/models/User/index.ts"),
				v = n("./src/chat/selectors/channels.ts"),
				_ = n("./src/chat/singleton/SendbirdSDK.ts");
			const j = "USER__ACCOUNT_FETCH_COMPLETED",
				y = "USER__REDDAID_RECEIVED",
				I = "USER__LOID_RECEIVED",
				x = "USER__SESSION_TRACKER_RECEIVED",
				w = "FETCH_EXPERIMENTS_COMPLETED",
				N = Object(i.a)(I),
				S = Object(i.a)("USER__ACCOUNT_FETCH_PENDING"),
				k = Object(i.a)(j),
				T = Object(i.a)("USER__ACCOUNT_FETCH_FAILED"),
				M = Object(i.a)(y),
				U = Object(i.a)(x),
				A = Object(i.a)(w),
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
					e(S());
					const i = await Object(m.c)(n());
					if (i.ok && i.body && i.body.features) {
						const {
							body: t,
							body: {
								features: n
							}
						} = i, a = Object(O.b)(t), s = (e => Object.keys(e).reduce((t, n) => {
							const a = e[n];
							return "boolean" == typeof a && (t[n] = a), "object" == typeof a && (t[n] = E(a)), t
						}, {}))(n), r = !!a.prefNightmode;
						e(k(a)), e(A(s)), e(Object(d.switchTheme)(r))
					} else e(T(i.error))
				}, P = "USER__USERS_FETCH_COMPLETED", L = Object(i.a)("USER__USERS_FETCH_PENDING"), R = Object(i.a)(P), B = Object(i.a)("USER__USERS_FETCH_FAILED"), H = e => async (t, n, {
					apiContext: a
				}) => {
					const r = n().contacts.models,
						c = e.filter(e => !r[e]),
						o = s()(c, 100);
					if (!c.length) return;
					t(L(e));
					const i = await Promise.all(o.map(e => Object(b.d)(a(), e))).catch(() => []);
					for (const e of i)
						if (e.ok) {
							const n = Object(O.a)(e.body);
							t(R(n))
						} else t(B())
				}, F = "USERS__USERS_ADD_SELECTED", G = Object(i.a)(F), W = e => async t => {
					t(G(e)), t(Object(u.f)(e))
				}, z = "USERS__USERS_REMOVE_SELECTED", V = Object(i.a)(z), K = "USERS__USERS_REMOVE_ALL_SELECTED", Z = Object(i.a)(K), q = "USERS__BLOCK_USER_COMPLETED", Q = Object(i.a)(q), J = Object(i.a)("USERS__BLOCK_USER_FAILED"), Y = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					const r = a(),
						c = r.contacts.models[e],
						i = c && c.name,
						d = Object(v.o)(r),
						u = Object(v.g)(r) || h.b.JOINED,
						p = d && d.type === g.a.Direct,
						b = Object(v.h)(r);
					if (!b) throw new f.a("currentChannel", b);
					const C = b.channelId;
					if (!C) throw new f.a("blockedChannelId", C);
					const E = await Object(m.a)(s(), e);
					E && E.ok && p ? (await _.a.hideChannel(), n(Q({
						userId: e,
						username: i
					})), t || (n(Object(l.J)(C)), n(Object(l.N)(u)))) : E && E.ok && !p ? (n(Q({
						userId: e,
						username: i
					})), t || n(Object(o.a)())) : E && n(J(E.error))
				}, X = "BLOCKED_USER_LIST_FETCH_COMPLETED", $ = Object(i.a)("BLOCKED_USER_LIST_FETCH_FAILED"), ee = Object(i.a)(X), te = () => async (e, t, {
					apiContext: n
				}) => {
					const {
						contacts: a
					} = t();
					if (!a.fetchedBlockedUsers) {
						const t = await Object(b.c)(n());
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
					await Object(p.i)(r(), e, t, n).then(() => {
						a(ne({
							userId: t
						})), a(Object(o.a)())
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
				})), t(Object(r.B)())
			}, p = e => async (t, n) => {
				const s = n(),
					r = Object(i.d)(s);
				r && t(Object(a.b)(Object(o.userActionUrl)(r, e, d)))
			}, b = e => async (t, n) => {
				const s = n(),
					r = Object(i.d)(s);
				r && t(Object(a.b)(Object(o.userActionUrl)(r, e, u)))
			}, f = e => async (t, n) => {
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
				dropdownTrigger: "_2g2FuE9xJbJ5iuYJEimir3"
			}
		},
		"./src/chat/components/ChatIcon/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_31wl61nRiy0UL2YxoDjz2D",
				iconWrapper: "_31wl61nRiy0UL2YxoDjz2D",
				UserPic: "_3ySraB4IKMuPpSKN6ylke3",
				userPic: "_3ySraB4IKMuPpSKN6ylke3",
				small: "_1eHyYpoZd3GdzOZ3OVmBWS",
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
				className: e
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
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/actions/container.ts"),
				l = n("./src/chat/actions/surveyTrigger/index.ts"),
				d = n("./src/chat/actions/tracking.ts"),
				u = n("./src/chat/constants/container.ts"),
				h = n("./src/chat/controls/Button/index.tsx"),
				m = n("./src/chat/helpers/dom.ts"),
				p = n("./src/chat/icons/svgs/NavClose/index.tsx"),
				b = n("./src/chat/selectors/app.ts"),
				f = n("./src/chat/components/CloseIcon/index.m.less"),
				g = n.n(f);
			const C = o.a.wrapped(h.c, "IconButton", g.a);
			t.a = e => {
				const t = Object(c.d)();
				Object(c.e)(b.a);
				return r.a.createElement(C, {
					className: e.className,
					onClick: Object(m.b)(() => {
						t(Object(i.sizeChanged)(u.a.HIDDEN)), t(Object(d.c)()), t(Object(l.b)())
					}),
					title: a.fbt._("Close chat", null, {
						hk: "4dFacQ"
					})
				}, r.a.createElement(p.a, null))
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
				Modal: "Jz9-gUKS4kLBzcOh-ylJF",
				modal: "Jz9-gUKS4kLBzcOh-ylJF"
			}
		},
		"./src/chat/components/FrameContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Id
			}));
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/lessComponent.tsx"),
				l = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/lib/cache/index.ts")),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts");
			var h = n("./src/chat/models/Promo/index.ts");
			var m = e => {
					const t = Object(l.a)("chat.promo") || [];
					return e = (e => {
						switch (e) {
							case h.c.LegacySubredditChatFtux:
								return h.a.SubredditChatFtux;
							case h.c.LegacyNSFWWarning:
								return h.b.NSFWWarning;
							default:
								return e
						}
					})(e), t.includes(e)
				},
				p = n("./src/chat/actions/promo/constants.ts");
			const b = Object(u.a)(p.a),
				f = Object(u.a)(p.b),
				g = e => async t => {
					t(f(e)), (e => {
						if (!m(e)) {
							const t = [...Object(l.a)("chat.promo") || [], e];
							Object(l.c)("chat.promo", t, d.ec)
						}
					})(e)
				};
			var C = n("./node_modules/lodash/map.js"),
				E = n.n(C),
				O = n("./node_modules/lodash/sortBy.js"),
				v = n.n(O),
				_ = n("./src/chat/actions/channel.ts"),
				j = n("./src/chat/actions/message/index.ts"),
				y = n("./src/chat/actions/message/inboxScroller.ts"),
				I = n("./src/chat/actions/message/richUnit.ts"),
				x = n("./node_modules/fbt/lib/FbtPublic.js");
			const w = (new Date).setHours(0, 0, 0, 0),
				N = new Intl.DateTimeFormat(void 0, {
					hour: "2-digit",
					minute: "2-digit"
				}).format,
				S = new Intl.DateTimeFormat(void 0, {
					day: "numeric",
					month: "short",
					year: "2-digit"
				}).format,
				k = new Intl.DateTimeFormat(void 0, {
					day: "numeric",
					month: "short"
				}).format,
				T = new Intl.DateTimeFormat(void 0, {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric"
				}).format,
				M = e => e.toISOString();
			var U = n("./src/chat/components/DateSplitter/index.m.less"),
				A = n.n(U);
			const D = i.a.div("TimeWrapper", A.a),
				P = i.a.time("Time", A.a);
			var L = e => c.a.createElement(D, null, c.a.createElement(P, null, (e => {
					const t = w - d.x,
						n = new Date(w).setDate(1),
						a = new Date(n).setMonth(0),
						s = new Date(e);
					return e >= w ? x.fbt._("Today", null, {
						hk: "1W0rfJ"
					}) : e >= t ? x.fbt._("Yesterday", null, {
						hk: "2GVGk3"
					}) : e >= n ? k(s) : e >= a ? k(s) : S(s)
				})(e.date))),
				R = n("./src/chat/helpers/json.ts"),
				B = n("./src/chat/icons/Userpic/index.tsx"),
				H = n("./src/chat/components/Intro/index.m.less"),
				F = n.n(H);
			const G = i.a.span("Wrapper", F.a),
				W = i.a.div("ChannelDescription", F.a),
				z = i.a.ul("Users", F.a),
				V = i.a.li("User", F.a),
				K = i.a.span("UserTitle", F.a);
			var Z = ({
					channel: e,
					users: t
				}) => c.a.createElement(G, null, c.a.createElement(z, null, t.map((e, t, n) => c.a.createElement(V, {
					key: e.id
				}, c.a.createElement(B.a, {
					height: "16px",
					width: "16px",
					userId: e.id
				}), c.a.createElement(K, null, `${e.name}${t<n.length-1?",":""}`)))), c.a.createElement(W, null, (e => {
					try {
						const t = e.data && Object(R.a)(e.data, {
							welcome_text: ""
						});
						if (t && t.welcome_text) return t && t.welcome_text
					} catch (t) {}
					return x.fbt._("This is the start of a beautiful thing. Say something nice, or share a cat fact.", null, {
						hk: "J8whX"
					})
				})(e))),
				q = n("./src/lib/classNames/index.ts"),
				Q = n("./node_modules/react-router-redux/es/index.js"),
				J = n("./src/chat/constants/messages.ts"),
				Y = n("./src/chat/constants/users.ts"),
				X = n("./src/chat/controls/Button/index.tsx"),
				$ = n("./src/chat/helpers/chatSelector.ts"),
				ee = n("./src/chat/helpers/urls/index.ts"),
				te = n("./src/chat/selectors/channels.ts"),
				ne = n("./src/telemetry/models/Event.ts"),
				ae = n("./src/chat/components/Message/ActionButtonGroup.m.less"),
				se = n.n(ae);
			const re = i.a.span("Wrapper", se.a),
				ce = i.a.span("ActionButton", se.a),
				oe = Object($.a)({
					channel: te.o,
					isMod: te.a
				});
			var ie = Object(o.b)(oe, e => ({
					onDeleteMessage: (t, n) => e(Object(Q.b)(Object(ee.messageActionUrl)(t, n, J.a.DELETE))),
					onReportMessage: (t, n) => e(Object(Q.b)(Object(ee.messageActionUrl)(t, n, J.a.REPORT))),
					onReportInvitedMessage: (t, n) => e(Object(Q.b)(Object(ee.inviteMessageActionUrl)(t, n, J.a.REPORT))),
					onKickUser: (t, n) => e(Object(Q.b)(Object(ee.userActionUrl)(t, n, Y.a.Kick, {
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
					}, c.a.createElement(X.e, null)), c.a.createElement(ce, {
						onClick: () => o ? u(h, a) : d(h, a)
					}, c.a.createElement(X.b, null)), c.a.createElement(ce, {
						onClick: () => s && l(h, s.userId)
					}, c.a.createElement(X.d, null))) : r ? c.a.createElement(ce, {
						onClick: () => i(h, a)
					}, c.a.createElement(X.e, null)) : c.a.createElement(ce, {
						onClick: () => o ? u(h, a) : d(h, a)
					}, c.a.createElement(X.b, null))) : null
				}),
				le = n("./src/chat/actions/tracking.ts"),
				de = n("./src/chat/controls/TextButton.tsx"),
				ue = n("./src/chat/components/Message/CollapsedMessage.m.less"),
				he = n.n(ue);
			var me = Object(o.b)(void 0, (e, t) => ({
					uncollapseMessage: () => {
						e(Object(j.B)(t)), e(Object(le.t)(t.messageId))
					},
					viewCollapsedMessage: () => {
						e(Object(le.C)(t.messageId))
					}
				}))(i.a.wrapped(({
					className: e,
					uncollapseMessage: t,
					viewCollapsedMessage: n
				}) => c.a.createElement("div", {
					onLoad: n,
					className: e
				}, x.fbt._("This message has been collapsed due to potentially offensive language.", null, {
					hk: "4qscuz"
				}), c.a.createElement("div", null, c.a.createElement(de.a, {
					onClick: t
				}, x.fbt._("View Message", null, {
					hk: "QjaEs"
				})))), "CollapsedMessage", he.a)),
				pe = n("./src/chat/components/Message/FailedMenu.m.less"),
				be = n.n(pe);
			const fe = i.a.div("ButtonControls", be.a),
				ge = i.a.span("Text", be.a),
				Ce = i.a.wrapped(X.a, "Button", be.a);
			class Ee extends r.Component {
				constructor() {
					super(...arguments), this.handleResend = () => this.props.onResend(this.props.clientMessageId), this.handleDelete = () => this.props.onDelete(this.props.clientMessageId)
				}
				render() {
					return c.a.createElement(fe, null, c.a.createElement(ge, null, x.fbt._("Failed to send", null, {
						hk: "2feF2H"
					})), c.a.createElement(Ce, {
						primaryNoBorder: !0,
						onClick: this.handleResend
					}, x.fbt._("Resend", null, {
						hk: "cXpU3"
					})), c.a.createElement(Ce, {
						warningNoBorder: !0,
						onClick: this.handleDelete
					}, x.fbt._("Delete", null, {
						hk: "2dtAT"
					})))
				}
			}
			var Oe = Object(o.b)(void 0, (e, {
					channelId: t
				}) => ({
					onResend: n => e(Object(j.x)(t, n)),
					onDelete: t => e(Object(j.w)({
						clientMessageId: t
					}))
				}))(Ee),
				ve = n("./src/lib/linkMatchers/customLinks.ts"),
				_e = n("./src/lib/opener/index.ts"),
				je = n("./src/chat/helpers/linkParser/index.ts"),
				ye = n("./src/chat/components/Message/Link.m.less"),
				Ie = n.n(ye);
			const xe = i.a.wrapped(e => c.a.createElement("a", {
					className: Object(q.a)(e.className, {
						[Ie.a.noUnderline]: e.noUnderline
					}),
					href: Object(je.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children), "Link", Ie.a),
				we = i.a.span("LinkedText", Ie.a),
				Ne = i.a.span("NameWrapper", Ie.a),
				Se = i.a.span("Name", Ie.a),
				ke = i.a.span("DetailsWrapper", Ie.a),
				Te = i.a.span("Title", Ie.a),
				Me = i.a.p("Description", Ie.a),
				Ue = e => c.a.createElement(xe, {
					noUnderline: e.noUnderline,
					href: Object(je.c)(e.href),
					target: e.target,
					rel: e.rel
				}, e.children),
				Ae = e => e.isEmbed ? (e => c.a.createElement(Ue, e, c.a.createElement(Ne, null, c.a.createElement(Se, null, e.name)), c.a.createElement(ke, null, c.a.createElement("span", null, c.a.createElement(Te, null, e.title), c.a.createElement(Me, null, e.description)))))(e) : (e => e.href ? c.a.createElement(Ue, e, e.children) : c.a.createElement(we, e, e.children))(e);
			var De = n("./src/chat/components/Message/LinkedText.m.less"),
				Pe = n.n(De);
			const Le = i.a.pre("MessageText", Pe.a),
				Re = (e, t, n, a, s) => c.a.createElement(Ae, {
					key: s || e,
					href: e,
					target: n,
					rel: _e.b,
					noUnderline: a === ve.d.mention || a === ve.d.profile || a === ve.d.profileFull || a === ve.d.subreddit || a === ve.d.subredditFull
				}, t);
			var Be = i.a.wrapped(e => {
					const {
						value: t,
						highlighMentionGroupLinks: n,
						className: a
					} = e, s = !(!n || !n.length), r = Object(je.a)(t, s, Re);
					return c.a.createElement(Le, {
						tabIndex: 0,
						className: a
					}, r)
				}, "LinkedText", Pe.a),
				He = n("./src/chat/components/Message/OffensiveMessageReportPrompt.m.less"),
				Fe = n.n(He);
			const Ge = i.a.wrapped(de.a, "Regular", Fe.a),
				We = i.a.wrapped(de.a, "Active", Fe.a),
				ze = Object(o.b)(void 0, (e, t) => ({
					cancel: () => {
						e(Object(j.t)(t)), e(Object(le.a)(t.channelId, t.messageId))
					},
					reportMessage: () => {
						e(Object(Q.b)(Object(ee.inviteMessageActionUrl)(t.channelId, t.messageId, J.a.REPORT))), e(Object(j.t)(t)), e(Object(le.s)(t.channelId, t.messageId))
					}
				}));
			var Ve = i.a.wrapped(ze(e => c.a.createElement("div", {
					className: e.className
				}, x.fbt._("Was this message offensive?", null, {
					hk: "1sBVkd"
				}), c.a.createElement("div", null, c.a.createElement(Ge, {
					onClick: () => e.cancel(e)
				}, x.fbt._("No", null, {
					hk: "SG3Y"
				})), c.a.createElement(We, {
					onClick: () => e.reportMessage(e)
				}, x.fbt._("Yes", null, {
					hk: "3ONldA"
				}))))), "OffensiveMessageReport", Fe.a),
				Ke = n("./src/lib/prettyPrintNumber/index.ts"),
				Ze = n("./src/chat/components/Message/RichUnit/Comment/CommentRichUnit.m.less"),
				qe = n.n(Ze),
				Qe = n("./src/chat/components/Message/RichUnit/commonComponents/Footer.m.less"),
				Je = n.n(Qe);
			const Ye = i.a.div("MetaInfo", Je.a);
			var Xe = i.a.wrapped(({
					className: e,
					metaInfo: t,
					isSubreddit: n
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(Ye, {
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
			const rt = i.a.img("SubredditIcon", st.a),
				ct = i.a.wrapped(nt, "PlanetIcon", st.a),
				ot = i.a.wrapped(e => {
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
					}, s ? `${x.fbt._("Comment by",null,{hk:"1pyLSv"})} ` : null, d))
				}, "SubredditInfo", st.a);
			var it = i.a.wrapped(e => {
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
				ht = i.a.wrapped(Be, "LinkedText", qe.a),
				mt = i.a.div("Delimiter", qe.a),
				pt = i.a.wrapped(e => {
					var t;
					const {
						className: n
					} = e;
					let a;
					return (null === (t = e.content) || void 0 === t ? void 0 : t.html) && (a = ut(e.content.html)), c.a.createElement("div", {
						className: n,
						tabIndex: 0
					}, c.a.createElement(ht, {
						value: a,
						highlighMentionGroupLinks: []
					}))
				}, "Content", qe.a),
				bt = i.a.wrapped(({
					className: e,
					darkBackground: t,
					highlights: n,
					richUnitData: {
						score: a,
						content: s,
						authorInfo: r,
						authorInfo: {
							displayName: o
						},
						postInfo: {
							subreddit: {
								name: i,
								styles: {
									icon: l
								}
							}
						}
					},
					commentUrl: d
				}) => {
					const u = `${Object(Ke.b)(a)} points`;
					return c.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(_e.d)(t, "_blank")
							})(e, d)
						},
						className: Object(q.a)(e, {
							[qe.a.dark]: t
						})
					}, c.a.createElement(c.a.Fragment, null, c.a.createElement(it, {
						authorName: o,
						subredditName: i,
						iconUrl: l
					}), c.a.createElement(mt, null), c.a.createElement(pt, {
						authorInfo: r,
						content: s,
						highlights: n,
						darkBackground: t
					}), c.a.createElement(Xe, {
						metaInfo: u
					})))
				}, "RichCommentUnit", qe.a);
			var ft = i.a.wrapped(({
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
				})), "RichUnitWrapper", qe.a),
				gt = n("./src/chat/components/Message/RichUnit/ExternalLink/ExternalLinkUnit.m.less"),
				Ct = n.n(gt);
			const Et = i.a.div("ProviderDisplay", Ct.a),
				Ot = i.a.div("Delimiter", Ct.a),
				vt = i.a.wrapped(Be, "Link", Ct.a),
				_t = i.a.img("Image", Ct.a),
				jt = i.a.img("Favicon", Ct.a),
				yt = i.a.div("Title", Ct.a),
				It = i.a.wrapped(e => {
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
				xt = i.a.wrapped(e => {
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
				wt = i.a.wrapped(e => {
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
				Nt = i.a.wrapped(e => {
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
				St = i.a.wrapped(e => {
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
				kt = i.a.wrapped(e => {
					const {
						className: t,
						url: n,
						title: a
					} = e;
					return c.a.createElement("div", {
						className: t
					}, n ? c.a.createElement(St, {
						url: n
					}) : null, c.a.createElement(yt, null, a))
				}, "Content", Ct.a),
				Tt = i.a.wrapped(e => {
					const {
						className: t,
						providerDisplay: n
					} = e;
					return c.a.createElement("div", {
						className: t,
						tabIndex: 0
					}, c.a.createElement(Et, null, n))
				}, "Footer", Ct.a),
				Mt = i.a.wrapped(e => {
					const {
						className: t,
						darkBackground: n,
						name: a = "",
						href: s = "",
						providerDisplay: r = "",
						thumbnailUrl: o = "",
						title: i = "",
						faviconUrl: l = ""
					} = e;
					return c.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(_e.d)(t, "_blank")
							})(e, s)
						},
						className: Object(q.a)(t, {
							[Ct.a.dark]: n
						})
					}, c.a.createElement(wt, {
						name: a,
						link: s,
						faviconUrl: l
					}), o ? null : c.a.createElement(Ot, null), c.a.createElement(Nt, {
						thumbnailUrl: o,
						title: i,
						darkBackground: n
					}), c.a.createElement(Tt, {
						providerDisplay: r
					}))
				}, "ExternalLinkUnit", Ct.a);
			var Ut = i.a.wrapped(e => {
				const {
					className: t
				} = e;
				return c.a.createElement("div", {
					className: t
				}, c.a.createElement(Mt, e), " ")
			}, "RichUnitWrapper", Ct.a);

			function At() {
				return (At = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Dt = e => c.a.createElement(et.a, At({}, e, {
				viewBox: "0 0 12 12"
			}), c.a.createElement("path", {
				d: "M10.1018 4.12719C9.8205 4.12719 9.54825 4.18869 9.3 4.30419C8.62425 3.91569 7.8315 3.65769 6.987 3.54219L7.3335 1.91169L8.121 2.07969C8.33475 2.69544 8.91375 3.14169 9.60075 3.14169C10.4662 3.14169 11.1713 2.43669 11.1713 1.57119C11.1713 0.704939 10.4662 -6.10352e-05 9.60075 -6.10352e-05C9.10275 -6.10352e-05 8.66325 0.236939 8.37525 0.599939L6.91125 0.288689C6.507 0.205439 6.108 0.460439 6.02175 0.866189L5.4975 3.32919C5.4855 3.38694 5.4945 3.44244 5.496 3.49944C4.47075 3.56919 3.50025 3.84144 2.69925 4.30344C2.451 4.18794 2.1795 4.12719 1.899 4.12719C0.852 4.12719 0 4.97919 0 6.02619C0 6.58269 0.2445 7.10244 0.65175 7.45719C0.67725 9.65544 3.0165 11.3722 5.99775 11.3722C8.9775 11.3722 11.316 9.65769 11.3438 7.46094C11.7533 7.10694 12 6.58494 12 6.02619C12 4.97919 11.1488 4.12719 10.1018 4.12719Z"
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
			var Lt = e => c.a.createElement(et.a, Pt({}, e, {
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

			function Rt() {
				return (Rt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Bt = e => c.a.createElement(et.a, Rt({}, e, {
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
				zt = n("./src/chat/components/Message/RichUnit/commonComponents/ImageContent.m.less"),
				Vt = n.n(zt);
			const Kt = i.a.img("Image", Vt.a),
				Zt = i.a.wrapped(Bt, "NSFWIcon", Vt.a),
				qt = i.a.wrapped(Ft, "PrivateIcon", Vt.a),
				Qt = i.a.wrapped(Wt, "RestrictedIcon", Vt.a),
				Jt = i.a.wrapped(Dt, "EmployeesOnlyIcon", Vt.a),
				Yt = i.a.wrapped(({
					className: e
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(Zt, null), " ", x.fbt._("nsfw", null, {
					hk: "6M6nL"
				})), "NSFWIndicator", Vt.a),
				Xt = i.a.wrapped(({
					className: e
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(qt, null), " ", x.fbt._("private", null, {
					hk: "3xzh8w"
				})), "PrivateIndicator", Vt.a),
				$t = i.a.wrapped(({
					className: e
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(Qt, null), " ", x.fbt._("restricted", null, {
					hk: "2lC88Z"
				})), "RestrictedIndicator", Vt.a),
				en = i.a.wrapped(({
					className: e
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(Jt, null), " ", x.fbt._("employees only", null, {
					hk: "3uDhE6"
				})), "EmployeesOnlyIndicator", Vt.a),
				tn = i.a.wrapped(({
					className: e,
					subredditType: t,
					isNsfw: n
				}) => {
					return c.a.createElement("div", {
						className: e
					}, n ? c.a.createElement(Yt, null) : null, (e => {
						switch (e) {
							case "RESTRICTED":
								return c.a.createElement($t, null);
							case "EMPLOYEES_ONLY":
								return c.a.createElement(en, null);
							case "PRIVATE":
								return c.a.createElement(Xt, null);
							default:
								return null
						}
					})(t))
				}, "SubredditTypeIndicator", Vt.a),
				nn = i.a.wrapped(({
					className: e,
					url: t
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(Kt, {
					src: t
				})), "ImageContainer", Vt.a),
				an = i.a.div("Title", Vt.a),
				sn = i.a.wrapped(Lt, "GalleryIcon", Vt.a);
			var rn = i.a.wrapped(({
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
				}) : null, n ? c.a.createElement(an, null, n) : null, a ? c.a.createElement(sn, null) : null), "ImagePostRichUnit", Vt.a),
				cn = n("./src/chat/components/Message/RichUnit/Post/LinkPostRichUnit.m.less"),
				on = n.n(cn);
			const ln = i.a.div("Title", on.a),
				dn = i.a.div("Link", on.a);
			var un = i.a.wrapped(({
					className: e,
					title: t,
					link: n
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(ln, null, t), c.a.createElement(dn, {
					onClick: e => {
						e.stopPropagation(), Object(_e.d)(n, "_blank")
					}
				}, n)), "LinkPostRichUnit", on.a),
				hn = n("./src/chat/components/Message/RichUnit/Post/PollPostRichUnit.m.less"),
				mn = n.n(hn);

			function pn() {
				return (pn = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var bn = e => c.a.createElement(et.a, pn({}, e, {
				viewBox: "0 0 24 20"
			}), c.a.createElement("path", {
				d: "M10.0001 18.5C8.03331 18.5048 6.12572 17.8275 4.60244 16.5833C3.07916 15.3392 2.03445 13.6053 1.64637 11.6772C1.25829 9.74911 1.55086 7.74609 2.47421 6.00952C3.39756 4.27296 4.89454 2.91033 6.71003 2.15388C8.52552 1.39742 10.5472 1.29396 12.4304 1.86111C14.3136 2.42827 15.9419 3.63095 17.0377 5.26417C18.1335 6.8974 18.629 8.86009 18.4398 10.8177C18.2506 12.7754 17.3884 14.6069 16.0001 16C15.2139 16.7913 14.2791 17.4195 13.2494 17.8485C12.2198 18.2775 11.1155 18.4989 10.0001 18.5ZM10.0001 3.50001C8.49637 3.50177 7.03978 4.02483 5.87847 4.98009C4.71716 5.93535 3.92298 7.2637 3.63122 8.73883C3.33946 10.214 3.56818 11.7446 4.2784 13.0701C4.98863 14.3955 6.13643 15.4336 7.52625 16.0077C8.91608 16.5818 10.4619 16.6562 11.9005 16.2183C13.339 15.7804 14.5813 14.8573 15.4155 13.6063C16.2498 12.3552 16.6245 10.8536 16.4758 9.35726C16.3271 7.86092 15.6642 6.46241 14.6001 5.40001C13.9964 4.79577 13.2792 4.31685 12.4898 3.99077C11.7003 3.6647 10.8542 3.49791 10.0001 3.50001Z"
			}));
			const fn = i.a.wrapped(Be, "LinkedText", mn.a),
				gn = i.a.div("Title", mn.a),
				Cn = i.a.wrapped(bn, "Checkbox", mn.a),
				En = i.a.div("OptionText", mn.a),
				On = i.a.wrapped(({
					option: e,
					className: t
				}) => c.a.createElement("div", {
					className: t
				}, c.a.createElement(Cn, null), c.a.createElement(En, null, e.text)), "Option", mn.a),
				vn = i.a.div("TotalVotesCount", mn.a),
				_n = i.a.div("Delimiter", mn.a),
				jn = i.a.wrapped(({
					className: e,
					options: t,
					totalVoteCount: n
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(vn, null, n, " votes"), c.a.createElement(_n, null), t.map((e, t) => c.a.createElement(On, {
					key: t + e.text,
					option: e
				}))), "OptionsContainer", mn.a);
			var yn = i.a.wrapped(({
					className: e,
					title: t,
					content: n,
					options: a,
					totalVoteCount: s,
					darkBackground: r,
					highlights: o
				}) => c.a.createElement("div", {
					className: Object(q.a)(e, {
						[mn.a.dark]: r
					})
				}, c.a.createElement(jn, {
					options: a,
					totalVoteCount: s
				}), c.a.createElement(gn, null, t), n ? c.a.createElement(fn, {
					value: n,
					highlighMentionGroupLinks: o
				}) : null), "PollPostRichUnit", mn.a),
				In = n("./src/chat/components/Message/RichUnit/Post/PostRichUnit.m.less"),
				xn = n.n(In),
				wn = n("./src/chat/components/Message/RichUnit/Post/TextPostRichUnit.m.less"),
				Nn = n.n(wn);
			const Sn = i.a.wrapped(Be, "LinkedText", Nn.a),
				kn = i.a.div("Title", Nn.a);
			var Tn = i.a.wrapped(({
					className: e,
					title: t,
					content: n,
					highlights: a
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(kn, null, t), c.a.createElement(Sn, {
					value: n,
					highlighMentionGroupLinks: a
				})), "TextPostRichUnit", Nn.a),
				Mn = n("./src/chat/models/Message/index.ts");

			function Un() {
				return (Un = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const An = i.a.wrapped(Tn, "TextPostRichUnit", xn.a),
				Dn = i.a.wrapped(un, "LinkPostRichUnit", xn.a),
				Pn = i.a.wrapped(rn, "ImagePostRichUnit", xn.a),
				Ln = i.a.wrapped(yn, "PollPostRichUnit", xn.a),
				Rn = i.a.div("Delimiter", xn.a),
				Bn = e => {
					var t, n, a, s, r, c;
					return e.poll ? Mn.a.POLL : (null === (a = null === (n = null === (t = e.gallery) || void 0 === t ? void 0 : t.items[0]) || void 0 === n ? void 0 : n.media) || void 0 === a ? void 0 : a.normal) ? Mn.a.GALLERY : (null === (r = null === (s = e.media) || void 0 === s ? void 0 : s.still) || void 0 === r ? void 0 : r.normal) ? Mn.a.IMAGE : (null === (c = e.content) || void 0 === c ? void 0 : c.html) ? Mn.a.TEXT : Mn.a.LINK
				},
				Hn = i.a.wrapped(e => {
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
						var t, n, o, i, l, d, u, h, m, p, b, f, g, C, E, O;
						switch (s) {
							case Mn.a.TEXT:
								return c.a.createElement(An, {
									title: e.title,
									content: r,
									highlights: e.highlights
								});
							case Mn.a.POLL:
								return c.a.createElement(Ln, {
									title: e.title,
									content: r,
									options: (null === (t = e.poll) || void 0 === t ? void 0 : t.options) || [],
									totalVoteCount: (null === (n = e.poll) || void 0 === n ? void 0 : n.totalVoteCount) || 0,
									darkBackground: e.darkBackground,
									highlights: e.highlights
								});
							case Mn.a.IMAGE:
								return c.a.createElement(Pn, {
									url: (a ? null === (l = null === (i = null === (o = e.media) || void 0 === o ? void 0 : o.still) || void 0 === i ? void 0 : i.obfuscate) || void 0 === l ? void 0 : l.url : null === (h = null === (u = null === (d = e.media) || void 0 === d ? void 0 : d.still) || void 0 === u ? void 0 : u.normal) || void 0 === h ? void 0 : h.url) || "",
									title: e.title
								});
							case Mn.a.GALLERY:
								return c.a.createElement(Pn, {
									url: (a ? null === (f = null === (b = null === (p = null === (m = e.gallery) || void 0 === m ? void 0 : m.items[0]) || void 0 === p ? void 0 : p.media) || void 0 === b ? void 0 : b.obfuscate) || void 0 === f ? void 0 : f.url : null === (O = null === (E = null === (C = null === (g = e.gallery) || void 0 === g ? void 0 : g.items[0]) || void 0 === C ? void 0 : C.media) || void 0 === E ? void 0 : E.normal) || void 0 === O ? void 0 : O.url) || "",
									title: e.title,
									isGallery: !0
								});
							case Mn.a.LINK:
								return c.a.createElement(Dn, {
									title: e.title,
									link: e.url
								});
							default:
								return null
						}
					})())
				}, "Content", xn.a),
				Fn = i.a.wrapped(({
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
					var i, l;
					const d = Bn(a);
					let u, h;
					a.type === J.c.POST ? u = a.subreddit : a.type === J.c.USER_POST && (h = a.redditor);
					const m = `${Object(Ke.b)(s)} points • ${Object(Ke.b)(r)} comments`;
					return c.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(_e.d)(t, "_blank")
							})(e, o)
						},
						className: Object(q.a)(e, {
							[xn.a.dark]: t
						})
					}, c.a.createElement(it, {
						authorName: null === (i = a.authorInfo) || void 0 === i ? void 0 : i.displayName,
						subredditName: null == u ? void 0 : u.name,
						redditorName: null == h ? void 0 : h.displayName,
						isPostComment: h,
						iconUrl: u ? u.styles.icon : null === (l = h.icon) || void 0 === l ? void 0 : l.url
					}), d === Mn.a.LINK || d === Mn.a.TEXT ? c.a.createElement(Rn, null) : null, c.a.createElement(Hn, Un({}, a, {
						highlights: n,
						darkBackground: t
					})), c.a.createElement(Xe, {
						metaInfo: m
					}))
				}, "RichPostUnit", xn.a);
			var Gn = i.a.wrapped(({
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
				zn = n.n(Wn);
			const Vn = i.a.div("Delimiter", zn.a),
				Kn = i.a.wrapped(rn, "ImageContent", zn.a),
				Zn = i.a.wrapped(({
					className: e,
					imageUrl: t,
					title: n,
					subredditType: a,
					isNsfw: s
				}) => c.a.createElement("div", {
					className: e,
					tabIndex: 0
				}, c.a.createElement(Kn, {
					url: t,
					title: n,
					subredditType: a,
					isNsfw: s,
					isSubreddit: !0
				})), "Content", zn.a),
				qn = i.a.wrapped(({
					className: e,
					darkBackground: t,
					richUnitData: n,
					richUnitData: {
						subscribersCount: a = 0,
						activeCount: s = 0
					}
				}) => {
					const r = `${Object(Ke.b)(a)} members • ${Object(Ke.b)(s)} online`,
						o = `/r/${n.id}`;
					return c.a.createElement("button", {
						onClick: e => {
							((e, t) => {
								e.stopPropagation(), Object(_e.d)(t, "_blank")
							})(e, o)
						},
						className: Object(q.a)(e, {
							[zn.a.dark]: t
						})
					}, c.a.createElement(it, {
						subredditName: n.id,
						iconUrl: n.styles.icon,
						subredditTitle: n.title
					}), n.styles.bannerBackgroundImage ? null : c.a.createElement(Vn, null), c.a.createElement(Zn, {
						imageUrl: n.styles.bannerBackgroundImage,
						title: n.publicDescriptionText,
						subredditType: n.subredditType,
						isNsfw: n.isNsfw
					}), c.a.createElement(Xe, {
						isSubreddit: !0,
						metaInfo: r
					}))
				}, "SubredditRichUnit", zn.a);
			var Qn = i.a.wrapped(({
					className: e,
					darkBackground: t,
					richUnitData: n
				}) => c.a.createElement("div", {
					className: e
				}, c.a.createElement(qn, {
					darkBackground: t,
					richUnitData: n
				})), "RichUnitWrapper", zn.a),
				Jn = n("./node_modules/lodash/isEmpty.js"),
				Yn = n.n(Jn);
			var Xn = e => c.a.createElement(et.a, {
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), aa = i.a.wrapped(Xn, "Approve", ta.a), sa = i.a.wrapped($n.a, "Trash", ta.a), ra = i.a.div("ButtonControls", ta.a), ca = i.a.wrapped(X.a, "Button", ta.a), oa = i.a.span("ButtonText", ta.a);
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
					onDelete: (t, n) => e(Object(j.y)(t, n)),
					onIgnore: (t, n) => e(Object(j.z)(t, n))
				}))(ia),
				da = n("./node_modules/lodash/difference.js"),
				ua = n.n(da),
				ha = n("./node_modules/lodash/noop.js"),
				ma = n.n(ha),
				pa = n("./src/higherOrderComponents/asTooltip.tsx"),
				ba = n("./src/chat/actions/user/dropdown.ts"),
				fa = n("./src/chat/constants/dropdown.ts"),
				ga = n("./src/chat/controls/Dropdown/index.tsx"),
				Ca = n("./src/chat/controls/Dropdown/Row.tsx"),
				Ea = n("./src/chat/helpers/dom.ts");

			function Oa() {
				return (Oa = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var va = e => c.a.createElement(et.a, Oa({}, e, {
					viewBox: "0 0 14 4"
				}), c.a.createElement("g", {
					transform: "translate(-475.000000, -286.000000)"
				}, c.a.createElement("path", {
					d: "M485.479375,287.804009 C485.479375,288.796214 486.265328,289.608018 487.225938,289.608018 C488.186547,289.608018 488.9725,288.796214 488.9725,287.804009 C488.9725,286.811804 488.186547,286 487.225938,286 C486.265328,286 485.479375,286.811804 485.479375,287.804009 M480.239688,287.804009 C480.239688,288.796214 481.025641,289.608018 481.98625,289.608018 C482.946859,289.608018 483.732813,288.796214 483.732813,287.804009 C483.732813,286.811804 482.946859,286 481.98625,286 C481.025641,286 480.239688,286.811804 480.239688,287.804009 M478.493125,287.804009 C478.493125,286.811804 477.707172,286 476.746563,286 C475.785953,286 475,286.811804 475,287.804009 C475,288.796214 475.785953,289.608018 476.746563,289.608018 C477.707172,289.608018 478.493125,288.796214 478.493125,287.804009"
				}))),
				_a = n("./src/chat/components/MemberActionDropdown/index.m.less"),
				ja = n.n(_a);
			const ya = ["t2_2ednvld6"],
				Ia = i.a.wrapped(e => c.a.createElement("span", {
					className: Object(q.a)({
						[ja.a.active]: e.id === e.dropdownId
					}, e.className)
				}, e.children), "Wrapper", ja.a),
				xa = Object(pa.a)(i.a.wrapped(ga.a, "Component", ja.a)),
				wa = i.a.wrapped(Ca.a, "DropdownRow", ja.a),
				Na = i.a.wrapped(X.c, "IconButton", ja.a),
				Sa = e => c.a.createElement("span", {
					className: e.className,
					id: e.id,
					onClick: e.onClick,
					role: "button"
				}, c.a.createElement(Na, null, c.a.createElement(va, null))),
				ka = Object($.a)({
					dropdownId: e => e.tooltipId || "",
					currentUserIsChannelMod: te.a
				});
			class Ta extends r.Component {
				constructor() {
					super(...arguments), this.onOptionClick = e => {
						switch (e) {
							case fa.b.Block:
								return this.props.onBlockUser(this.props.userId);
							case fa.b.Report:
								return this.props.onReportUser(this.props.userId);
							case fa.b.Kick:
								return this.props.onKickUser(this.props.userId);
							default:
								return ma.a
						}
					}, this.getContainer = e => document.getElementsByClassName(this.props.containerClassName || fa.a)[e], this.getDropdownOptions = () => {
						const {
							isBlockedUser: e,
							currentUserIsChannelMod: t
						} = this.props, {
							Block: n,
							Kick: a
						} = fa.b;
						return e && !t ? ua()(fa.c.members, [n, a]) : t ? e ? ua()(fa.c.members, [n]) : fa.c.members : ua()(fa.c.members, [a])
					}, this.getDropdownOptionDisplayText = e => {
						switch (e) {
							case fa.b.Block:
								return x.fbt._("Block", null, {
									hk: "t44ep"
								});
							case fa.b.Report:
								return x.fbt._("Report", null, {
									hk: "4oVcnd"
								});
							case fa.b.Kick:
								return x.fbt._("Kick", null, {
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
						getDropdownOptions: o,
						getContainer: i
					} = this;
					if (ya.includes(r)) return null;
					const l = o();
					return !!l.length && c.a.createElement(Ia, {
						className: e,
						id: a,
						dropdownId: t
					}, c.a.createElement(Sa, {
						id: a,
						menu: !0,
						onClick: Object(Ea.b)(s)
					}), c.a.createElement(xa, {
						tooltipId: a,
						isOpen: t === a,
						container: i(n),
						closeOnClickOutside: !0
					}, l.map((e, t) => c.a.createElement(wa, {
						key: t,
						displayText: this.getDropdownOptionDisplayText(e),
						onClick: Object(Ea.b)(() => this.onOptionClick(e))
					}))))
				}
			}
			var Ma = Object(o.b)(ka, (e, t) => ({
					onOpenDropdown: () => e(Object(ba.c)(t.id)),
					onBlockUser: t => e(Object(ba.a)(t)),
					onReportUser: t => e(Object(ba.d)(t)),
					onKickUser: t => e(Object(ba.b)(t))
				}))(Ta),
				Ua = n("./src/config.ts"),
				Aa = n("./src/chat/components/ChatIcon/index.tsx"),
				Da = n("./src/chat/controls/TimeStamp/index.m.less"),
				Pa = n.n(Da);
			var La = i.a.wrapped(e => {
					const t = "number" == typeof e.date ? new Date(e.date) : e.date;
					return c.a.createElement("time", {
						className: e.className,
						dateTime: M(t),
						title: T(t)
					}, e.children)
				}, "TimeStamp", Pa.a),
				Ra = n("./src/chat/components/MessageHeader/index.m.less"),
				Ba = n.n(Ra);
			const Ha = i.a.wrapped(La, "TimeStamp", Ba.a),
				Fa = i.a.span("UserName", Ba.a);
			var Ga = i.a.wrapped(e => c.a.createElement("a", {
				target: _e.c.BLANK,
				rel: _e.b,
				className: e.className,
				href: `${Ua.a.redditUrl}/user/${e.nickname}`
			}, c.a.createElement(Aa.a, {
				userId: e.userId,
				isSmall: !0
			}), c.a.createElement(c.a.Fragment, null, c.a.createElement(Fa, null, e.nickname), c.a.createElement(Ha, {
				date: e.createdAt
			}, N(new Date(e.createdAt))), e.children)), "UserHeader", Ba.a);
			var Wa = e => c.a.createElement(et.a, {
				className: e.className,
				disable: !0,
				viewBox: "0 0 16 16"
			}, c.a.createElement("g", {
				transform: "translate(-26.000000, -37.000000)"
			}, c.a.createElement("path", {
				d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
			})));

			function za() {
				return (za = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var Va = e => c.a.createElement(et.a, za({}, e, {
					viewBox: "0 0 16 16"
				}), c.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				})),
				Ka = n("./src/chat/components/MessageReportDialog/Header.m.less"),
				Za = n.n(Ka);
			const qa = i.a.wrapped(Wa, "Group", Za.a),
				Qa = i.a.wrapped(Va, "Key", Za.a),
				Ja = i.a.wrapped(Ma, "MemberActionDropdown", Za.a),
				Ya = i.a.wrapped(Ga, "MessageHeaderLink", Za.a),
				Xa = i.a.h5("ChannelName", Za.a),
				$a = i.a.span("TextOverflow", Za.a),
				es = i.a.wrapped(X.c, "IconButton", Za.a),
				ts = i.a.div("Header", Za.a);
			var ns = e => {
					const {
						channelId: t,
						channelIsPublic: n,
						channelName: a,
						messageCreatedAt: s,
						messageId: r,
						reportedUserId: o,
						reportedUserName: i
					} = e, l = `UserAction--Item-${r}`;
					return c.a.createElement(ts, null, c.a.createElement(Ya, {
						createdAt: s,
						nickname: i,
						userId: o
					}, c.a.createElement(Xa, null, n ? c.a.createElement(qa, null) : c.a.createElement(Qa, null), c.a.createElement($a, null, a))), c.a.createElement(Ja, {
						channelId: t,
						containerClassName: l,
						className: l,
						dropdownIndex: 0,
						id: `UserAction--Select-${r}`,
						isBlockedUser: !1,
						userId: o
					}, c.a.createElement(es, null, c.a.createElement(va, null))))
				},
				as = n("./src/chat/components/MessageReportDialog/index.m.less"),
				ss = n.n(as);
			const {
				fbt: rs
			} = n("./node_modules/fbt/lib/FbtPublic.js"), cs = i.a.p("ReasonText", ss.a), os = i.a.p("DeleteText", ss.a), is = i.a.p("AcceptText", ss.a);
			var ls = e => {
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
				return c.a.createElement(c.a.Fragment, null, n && s && a && i && r && d && u && c.a.createElement(ns, {
					channelId: n,
					channelIsPublic: a,
					channelName: s,
					messageCreatedAt: r,
					messageId: i,
					reportedUserId: d,
					reportedUserName: u
				}), o, c.a.createElement(cs, null, rs._("Reported for {reason}", [rs._param("reason", l)], {
					hk: "2BwGqI"
				}), " ", h && rs._("by /u{reporter}", [rs._param("reporter", h)], {
					hk: "1hrZNZ"
				})), t && t.deleted && c.a.createElement(os, null, rs._("Deleted by {username}", [rs._param("username", `u/${t.deleted.userName}`)], {
					hk: "4mxZZS"
				})), t && t.ignored && c.a.createElement(is, null, rs._("Approved by {username}", [rs._param("username", `u/${t.ignored.userName}`)], {
					hk: "m22OH"
				})), Yn()(t) && c.a.createElement(la, {
					reportedMessageId: e.message.messageId,
					reportedChannelId: e.message.channelId
				}))
			};
			const ds = ["snoo_heart_eyes_pride", "snoo_give_upvote_pride", "upvote_pride", "snoo", "snoo_simple_smile", "snoo_smile", "snoo_joy", "snoo_tongue", "snoo_wink", "snoo_sad", "snoo_biblethump", "snoo_angry", "snoo_disapproval", "snoo_trollface", "snoo_dealwithit", "snoo_facepalm", "snoo_shrug", "snoo_scream", "snoo_thoughtful", "snoo_surprised", "snoo_hearteyes", "snoo_hug", "snoo_feelsbadman", "snoo_feelsgoodman", "snoo_putback", "snoo_tableflip", "upvote", "downvote", "karma", "cake", "redditgold", "illuminati", "kappa", "sloth", "cat_blep", "pupper", "partyparrot", "orly", "hamster", "doge"];
			var us = {
					simple_smile: `${Ua.a.assetPath}/img/snoomoji/snoo_simple_smile.png`,
					smile: `${Ua.a.assetPath}/img/snoomoji/snoo_smile.png`,
					joy: `${Ua.a.assetPath}/img/snoomoji/snoo_joy.png`,
					tongue: `${Ua.a.assetPath}/img/snoomoji/snoo_tongue.png`,
					wink: `${Ua.a.assetPath}/img/snoomoji/snoo_wink.png`,
					sad: `${Ua.a.assetPath}/img/snoomoji/snoo_sad.png`,
					biblethump: `${Ua.a.assetPath}/img/snoomoji/snoo_cry.png`,
					angry: `${Ua.a.assetPath}/img/snoomoji/snoo_angry.png`,
					disapproval: `${Ua.a.assetPath}/img/snoomoji/snoo_disapproval.png`,
					trollface: `${Ua.a.assetPath}/img/snoomoji/snoo_trollface.png`,
					dealwithit: `${Ua.a.assetPath}/img/snoomoji/snoo_dealwithit.png`,
					facepalm: `${Ua.a.assetPath}/img/snoomoji/snoo_facepalm.png`,
					shrug: `${Ua.a.assetPath}/img/snoomoji/snoo_shrug.png`,
					scream: `${Ua.a.assetPath}/img/snoomoji/snoo_scream.png`,
					thoughtful: `${Ua.a.assetPath}/img/snoomoji/snoo_thoughtful.png`,
					surprised: `${Ua.a.assetPath}/img/snoomoji/snoo_surprised.png`,
					hearteyes: `${Ua.a.assetPath}/img/snoomoji/snoo_hearteyes.png`,
					tableflip: `${Ua.a.assetPath}/img/snoomoji/snoo_tableflip.png`,
					putback: `${Ua.a.assetPath}/img/snoomoji/snoo_putback.png`,
					hug: `${Ua.a.assetPath}/img/snoomoji/snoo_hug.png`,
					feelsbadman: `${Ua.a.assetPath}/img/snoomoji/snoo_feelsbadman.png`,
					feelsgoodman: `${Ua.a.assetPath}/img/snoomoji/snoo_feelsgoodman.png`,
					snoo: `${Ua.a.assetPath}/img/snoomoji/snoo.png`,
					snoo_simple_smile: `${Ua.a.assetPath}/img/snoomoji/snoo_simple_smile.png`,
					slightly_smiling: `${Ua.a.assetPath}/img/snoomoji/snoo_simple_smile.png`,
					snoo_smile: `${Ua.a.assetPath}/img/snoomoji/snoo_smile.png`,
					snoo_joy: `${Ua.a.assetPath}/img/snoomoji/snoo_joy.png`,
					snoo_tongue: `${Ua.a.assetPath}/img/snoomoji/snoo_tongue.png`,
					stuck_out_tongue: `${Ua.a.assetPath}/img/snoomoji/snoo_tongue.png`,
					snoo_wink: `${Ua.a.assetPath}/img/snoomoji/snoo_wink.png`,
					snoo_sad: `${Ua.a.assetPath}/img/snoomoji/snoo_sad.png`,
					snoo_biblethump: `${Ua.a.assetPath}/img/snoomoji/snoo_cry.png`,
					cry: `${Ua.a.assetPath}/img/snoomoji/snoo_cry.png`,
					snoo_angry: `${Ua.a.assetPath}/img/snoomoji/snoo_angry.png`,
					snoo_disapproval: `${Ua.a.assetPath}/img/snoomoji/snoo_disapproval.png`,
					snoo_trollface: `${Ua.a.assetPath}/img/snoomoji/snoo_trollface.png`,
					snoo_dealwithit: `${Ua.a.assetPath}/img/snoomoji/snoo_dealwithit.png`,
					sunglasses: `${Ua.a.assetPath}/img/snoomoji/snoo_dealwithit.png`,
					snoo_facepalm: `${Ua.a.assetPath}/img/snoomoji/snoo_facepalm.png`,
					snoo_shrug: `${Ua.a.assetPath}/img/snoomoji/snoo_shrug.png`,
					snoo_scream: `${Ua.a.assetPath}/img/snoomoji/snoo_scream.png`,
					snoo_thoughtful: `${Ua.a.assetPath}/img/snoomoji/snoo_thoughtful.png`,
					snoo_surprised: `${Ua.a.assetPath}/img/snoomoji/snoo_surprised.png`,
					flushed: `${Ua.a.assetPath}/img/snoomoji/snoo_surprised.png`,
					snoo_hearteyes: `${Ua.a.assetPath}/img/snoomoji/snoo_hearteyes.png`,
					heart_eyes: `${Ua.a.assetPath}/img/snoomoji/snoo_hearteyes.png`,
					snoo_tableflip: `${Ua.a.assetPath}/img/snoomoji/snoo_tableflip.png`,
					table_flip: `${Ua.a.assetPath}/img/snoomoji/snoo_tableflip.png`,
					snoo_putback: `${Ua.a.assetPath}/img/snoomoji/snoo_putback.png`,
					table: `${Ua.a.assetPath}/img/snoomoji/snoo_putback.png`,
					snoo_hug: `${Ua.a.assetPath}/img/snoomoji/snoo_hug.png`,
					snoo_feelsbadman: `${Ua.a.assetPath}/img/snoomoji/snoo_feelsbadman.png`,
					feels_bad_man: `${Ua.a.assetPath}/img/snoomoji/snoo_feelsbadman.png`,
					snoo_feelsgoodman: `${Ua.a.assetPath}/img/snoomoji/snoo_feelsgoodman.png`,
					feels_good_man: `${Ua.a.assetPath}/img/snoomoji/snoo_feelsgoodman.png`,
					upvote: `${Ua.a.assetPath}/img/snoomoji/upvote.png`,
					downvote: `${Ua.a.assetPath}/img/snoomoji/downvote.png`,
					karma: `${Ua.a.assetPath}/img/snoomoji/karma.png`,
					cake: `${Ua.a.assetPath}/img/snoomoji/cake.png`,
					redditgold: `${Ua.a.assetPath}/img/snoomoji/redditgold.png`,
					gold: `${Ua.a.assetPath}/img/snoomoji/redditgold.png`,
					illuminati: `${Ua.a.assetPath}/img/snoomoji/illuminati.png`,
					kappa: `${Ua.a.assetPath}/img/snoomoji/kappa.png`,
					sloth: `${Ua.a.assetPath}/img/snoomoji/sloth.png`,
					cat_blep: `${Ua.a.assetPath}/img/snoomoji/cat_blep.png`,
					pupper: `${Ua.a.assetPath}/img/snoomoji/pupper.png`,
					partyparrot: `${Ua.a.assetPath}/img/snoomoji/partyparrot.gif`,
					party_parrot: `${Ua.a.assetPath}/img/snoomoji/partyparrot.gif`,
					orly: `${Ua.a.assetPath}/img/snoomoji/orly.png`,
					o_rly_owl: `${Ua.a.assetPath}/img/snoomoji/orly.png`,
					party_pigeon: `${Ua.a.assetPath}/img/snoomoji/orly.png`,
					partypigeon: `${Ua.a.assetPath}/img/snoomoji/orly.png`,
					hamster: `${Ua.a.assetPath}/img/snoomoji/hamster.png`,
					doge: `${Ua.a.assetPath}/img/snoomoji/doge.png`,
					upvote_pride: `${Ua.a.assetPath}/img/snoomoji/upvote_pride.png`,
					snoo_heart_eyes_pride: `${Ua.a.assetPath}/img/snoomoji/heart_eyes_pride.png`,
					snoo_give_upvote_pride: `${Ua.a.assetPath}/img/snoomoji/give_upvote_pride.png`
				},
				hs = n("./src/chat/components/Snoomoji/index.m.less"),
				ms = n.n(hs);
			const ps = i.a.img("SnooImg", ms.a);
			var bs = e => {
					const {
						className: t,
						iconName: n
					} = e, a = n && us[n] || us.smile;
					return c.a.createElement(ps, {
						className: t,
						src: a
					})
				},
				fs = n("./src/chat/selectors/messages.ts"),
				gs = n("./src/chat/components/Message/Bubble.m.less"),
				Cs = n.n(gs);
			const {
				PENDING: Es,
				USER: Os
			} = J.d, {
				POST: vs,
				USER_POST: _s,
				COMMENT: js,
				SNOOMOJI: ys,
				SUBREDDIT: Is,
				EMBED: xs
			} = J.c, ws = i.a.wrapped(ie, "ActionButtonGroup", Cs.a), Ns = i.a.wrapped(Be, "Text", Cs.a), Ss = i.a.wrapped(Gn, "RichPostUnit", Cs.a), ks = i.a.wrapped(ft, "RichCommentUnit", Cs.a), Ts = i.a.wrapped(Ut, "ExternalLinkUnit", Cs.a), Ms = i.a.wrapped(Qn, "SubredditRichUnit", Cs.a), Us = i.a.wrapped(e => c.a.createElement("div", {
				className: Object(q.a)(e.className, {
					[Cs.a.dark]: e.darkBackground,
					[Cs.a.disabled]: e.disabled,
					[Cs.a.withBorder]: e.withBorder
				})
			}, e.children, e.withButton && e.message && e.message.messageType === Os && c.a.createElement(ws, {
				message: e.message,
				fromCurrentUser: e.fromCurrentUser,
				fromInvite: e.fromInvite
			})), "MessageBubble", Cs.a), As = i.a.div("Snoo", Cs.a);

			function Ds(e) {
				return "messageId" in e && "channelId" in e
			}

			function Ps(e, t) {
				return !(e.messageData.type !== J.c.EMBED || !e.messageData.embed || t) || !(e.messageData.type !== J.c.POST && e.messageData.type !== J.c.USER_POST && e.messageData.type !== J.c.COMMENT && e.messageData.type !== J.c.SUBREDDIT || t)
			}
			var Ls = i.a.wrapped(e => {
					const {
						className: t,
						darkBackground: n,
						fromCurrentUser: a,
						fromInvite: s,
						message: r,
						withButton: i,
						inPreview: l,
						isChatEmbedded: d
					} = e;
					if (r) {
						const {
							type: e,
							report: u,
							collapsedInvitePreview: h
						} = r.messageData;
						let m;
						if (r.messageData.type === J.c.POST) {
							const {
								chatUnitId: e
							} = r.messageData;
							m = Object(o.e)(t => Object(fs.j)(t, e))
						}
						if (r.messageData.type === J.c.USER_POST) {
							const {
								chatUnitId: e
							} = r.messageData;
							m = Object(o.e)(t => Object(fs.m)(t, e))
						}
						if (r.messageData.type === J.c.COMMENT) {
							const {
								chatUnitId: e
							} = r.messageData;
							m = Object(o.e)(t => Object(fs.b)(t, e))
						}
						if (r.messageData.type === J.c.SUBREDDIT) {
							const {
								chatUnitId: e
							} = r.messageData;
							m = Object(o.e)(t => Object(fs.k)(t, e))
						}
						const p = ((e, t, n, a) => {
								const {
									messageType: s,
									messageData: r,
									messageData: {
										highlights: o,
										value: i
									}
								} = e;
								if (t && r.type !== ys) return i;
								const l = c.a.createElement(Ns, {
									value: i,
									highlighMentionGroupLinks: o
								});
								switch (r.type) {
									case xs:
										const {
											embed: e
										} = r;
										return s !== Es && e ? c.a.createElement(Ts, {
											name: e.name,
											title: e.title,
											thumbnailUrl: e.imageUrl,
											href: e.url,
											providerDisplay: e.providerDisplay,
											darkBackground: n,
											faviconUrl: e.faviconUrl
										}) : c.a.createElement(Ns, {
											value: i,
											highlighMentionGroupLinks: o
										});
									case vs:
									case _s:
										return (null == a ? void 0 : a.type) === vs || (null == a ? void 0 : a.type) === _s ? c.a.createElement(Ss, {
											darkBackground: n,
											postUrl: i,
											highlights: o,
											richUnitData: a
										}) : l;
									case js:
										return a && a.type === js ? c.a.createElement(ks, {
											darkBackground: n,
											commentUrl: i,
											highlights: o,
											richUnitData: a
										}) : l;
									case Is:
										return a && a.type === Is ? c.a.createElement(Ms, {
											darkBackground: n,
											richUnitData: a
										}) : l;
									case ys:
										return c.a.createElement(As, null, c.a.createElement(bs, {
											iconName: i
										}));
									default:
										return l
								}
							})(r, l, n, m),
							b = r.messageType === Es && r.error && r.clientMessageId;
						return c.a.createElement("div", {
							className: Object(q.a)(t, (m || r.messageData.type === J.c.EMBED) && {
								[Cs.a.richUnit]: Ps(r, !d),
								[Cs.a.richUnitResponsive]: Ps(r, d)
							})
						}, c.a.createElement(Us, {
							darkBackground: n,
							fromCurrentUser: a,
							fromInvite: s,
							withButton: i && !b && !u,
							withBorder: e !== ys,
							message: r,
							disabled: !!b
						}, u && r.messageType === Os ? c.a.createElement(ls, {
							report: u,
							message: r
						}) : s && Ds(r) && function(e) {
							return Boolean(null == e ? void 0 : e.shouldCollapse)
						}(h) ? c.a.createElement(me, {
							channelId: r.channelId,
							messageId: r.messageId
						}) : p), s && Ds(r) && function(e) {
							return Boolean(!(null == e ? void 0 : e.shouldCollapse) && (null == e ? void 0 : e.shouldShowReportPrompt))
						}(h) && c.a.createElement(Ve, {
							channelId: r.channelId,
							messageId: r.messageId
						}), b && c.a.createElement(Oe, {
							channelId: r.channelId,
							clientMessageId: b
						}))
					}
					return null
				}, "MessageItemBubble", Cs.a),
				Rs = n("./src/chat/components/Message/SystemMessage.m.less"),
				Bs = n.n(Rs);
			const Hs = i.a.wrapped(Be, "LinkedText", Bs.a);
			var Fs = i.a.wrapped(e => {
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
					}, c.a.createElement(Hs, {
						value: a,
						highlighMentionGroupLinks: s
					}))
				}, "SystemMessage", Bs.a),
				Gs = n("./node_modules/lodash/throttle.js"),
				Ws = n.n(Gs),
				zs = n("./src/chat/actions/channel/draftMessage.ts"),
				Vs = n("./src/chat/actions/surveyTrigger/index.ts"),
				Ks = n("./src/chat/actions/tooltip.ts");
			const Zs = function(e, t) {
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
				qs = function(e, t) {
					const {
						word: n
					} = Zs(e, t);
					return {
						hasUsername: /^(@|u\/)(\w+)?$/g.test(n),
						username: function(e) {
							return (/^(@|u\/)(\w+)/g.exec(e) || [])[2] || ""
						}(n)
					}
				},
				Qs = function(e, t, n) {
					const {
						word: a,
						posStart: s,
						posEnd: r
					} = Zs(e, n), c = (/^(@|u\/)/gm.exec(a) || [])[1];
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
			var Js = n("./src/chat/components/Scroller/index.tsx"),
				Ys = n("./src/chat/constants/container.ts"),
				Xs = n("./src/chat/constants/page.ts"),
				$s = n("./src/chat/icons/svgs/NavClose/index.tsx"),
				er = n("./src/chat/components/MessageTooltip/index.m.less"),
				tr = n.n(er);
			const nr = "MessageInputTooltip--Container",
				ar = i.a.wrapped(Object(pa.a)(ga.a), "Dropdown", tr.a),
				sr = i.a.div("DropdownWrapper", tr.a),
				rr = i.a.div("Picker", tr.a),
				cr = i.a.h4("PickerHeader", tr.a),
				or = i.a.wrapped(X.c, "IconButton", tr.a),
				ir = i.a.wrapped(e => c.a.createElement(Js.b, {
					className: Object(q.a)(e.className, {
						[tr.a.embedded]: e.isEmbedded
					})
				}, e.children), "PickerWrapper", tr.a);
			ir.displayName = "PickerWrapper";
			const lr = Object($.a)({
				dropdownIsOpen: (e, t) => e.tooltipId === t.id,
				isEmbedded: e => !(!e.container || e.container.size !== Ys.a.EMBED)
			});
			var dr = Object(o.b)(lr, e => ({
					closeTooltip: () => e(Object(Ks.d)())
				}))(e => c.a.createElement(ar, {
					tooltipId: nr,
					container: document.getElementById(Xs.a),
					isOpen: e.isOpen || e.dropdownIsOpen,
					targetPosition: ["left", "top"],
					excludeContainerPosition: !0,
					closeOnClickOutside: !0,
					isOverlayOff: !0
				}, c.a.createElement(sr, {
					onClick: () => e.closeTooltip()
				}, c.a.createElement(rr, null, c.a.createElement(cr, null, e.title, c.a.createElement(or, null, c.a.createElement($s.a, null))), c.a.createElement(ir, {
					isEmbedded: e.isEmbedded
				}, e.children))))),
				ur = n("./node_modules/lodash/times.js"),
				hr = n.n(ur),
				mr = n("./src/chat/components/MessageTooltip/Picker/Snoomoji.m.less"),
				pr = n.n(mr);
			const br = 15,
				fr = i.a.div("IconWrapper", pr.a);
			fr.displayName = "IconWrapper";
			const gr = i.a.span("EmptyIcons", pr.a),
				Cr = i.a.div("LoadingIndicator", pr.a),
				Er = i.a.div("Wrapper", pr.a);
			class Or extends r.Component {
				constructor(e) {
					super(e), this.loadCounter = 0, this.snooIcons = us, this.snoomojiIconOrder = this.getSnoomojiPickerOrder(), this.state = {
						isReady: !!this.props.isReady
					}
				}
				componentDidMount() {
					this.preloadIcons()
				}
				getSnoomojiPickerOrder() {
					return ds
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
					return this.snoomojiIconOrder.map((e, t) => c.a.createElement(fr, {
						key: `icon-${t}`,
						onClick: () => this.props.onPickSnoomoji(e)
					}, c.a.createElement(bs, {
						iconName: e
					})))
				}
				renderBlankItems() {
					return this.snoomojiIconOrder && hr()(Math.ceil(100 / br), e => c.a.createElement(gr, {
						key: `empty-${e}`
					}))
				}
				render() {
					return this.state.isReady ? c.a.createElement(Er, null, this.renderSnooIcons(), this.renderBlankItems()) : c.a.createElement(Cr, null, x.fbt._("Loading snoomoji...", null, {
						hk: "39nqLy"
					}))
				}
			}
			var vr = Or,
				_r = n("./node_modules/lodash/debounce.js"),
				jr = n.n(_r),
				yr = n("./src/chat/actions/members.ts"),
				Ir = n("./src/chat/controls/Title/index.m.less"),
				xr = n.n(Ir);
			const wr = i.a.wrapped(({
				bold: e,
				children: t,
				className: n
			}) => c.a.createElement("h4", {
				className: Object(q.a)({
					[xr.a.bold]: e
				}, n)
			}, t), "Title", xr.a);
			var Nr = n("./src/chat/icons/Nsfw/index.tsx"),
				Sr = n("./src/chat/models/Channel/index.ts"),
				kr = n("./src/chat/selectors/members.ts"),
				Tr = n("./src/chat/selectors/user.ts"),
				Mr = n("./src/chat/components/ChatMemberList/index.m.less"),
				Ur = n.n(Mr);
			const Ar = i.a.wrapped(Ma, "MemberActionDropdown", Ur.a),
				Dr = i.a.wrapped(({
					className: e,
					children: t,
					onClick: n
				}) => c.a.createElement("li", {
					onClick: n,
					className: e
				}, t), "ListItem", Ur.a),
				Pr = i.a.span("IconContainer", Ur.a),
				Lr = i.a.wrapped(wr, "Title", Ur.a),
				Rr = i.a.span("Warning", Ur.a),
				Br = i.a.span("Info", Ur.a),
				Hr = Object($.a)({
					channelType: e => Object(te.s)(e, "type"),
					members: (e, t) => t.members || Object(kr.b)(e, t.channelId) || [],
					currentUserId: Tr.a
				}),
				Fr = Object(o.b)(Hr, e => ({
					onViewProfile: t => {
						e(Object(le.m)()), e(Object(le.p)()).then(() => {
							window.open(`${Ua.a.redditUrl}/user/${t}`)
						})
					}
				})),
				Gr = ({
					className: e,
					channelId: t,
					channelType: n,
					currentUserId: a,
					members: s,
					minimal: r,
					modIndicator: o,
					onClick: i,
					onSelectName: l,
					onViewProfile: d,
					selectIndex: u,
					useNSFWIcons: h
				}) => (((e, t, n) => {
					if (n && void 0 !== t && e.length >= t) {
						const a = e[t];
						a && n(a.name)
					}
				})(s, u, l), c.a.createElement("ul", {
					className: e
				}, s && s.map((e, s) => c.a.createElement(Dr, {
					key: e.name,
					className: Object(q.a)(fa.a, {
						[Ur.a.selected]: u === s,
						[Ur.a.withMenu]: !r
					}),
					onClick: () => {
						i ? i(e.name) : d(e.name)
					}
				}, c.a.createElement(Pr, null, h && e.isNSFW ? c.a.createElement(Nr.b, null) : c.a.createElement(B.a, {
					userId: e.id
				})), c.a.createElement(Lr, null, e.name), e.isModerator && o && c.a.createElement(Br, null, n && n === Sr.a.Subreddit ? x.fbt._("Moderator", null, {
					hk: "48EtBe"
				}) : x.fbt._("Host", null, {
					hk: "4berci"
				})), e.isNSFW && c.a.createElement(Rr, null, x.fbt._("NSFW", null, {
					hk: "36qPno"
				})), e.isBlockedByMe && c.a.createElement(Rr, null, x.fbt._("Blocked", null, {
					hk: "1RUrSV"
				})), !r && e.id !== a && c.a.createElement(Ar, {
					channelId: t,
					containerClassName: fa.a,
					dropdownIndex: s,
					id: `MemberAction--Select-${s}`,
					userId: e.id,
					isBlockedUser: e.isBlockedByMe
				})))));
			Gr.displayName = "ChatMemberList";
			var Wr = Fr(Gr),
				zr = n("./src/chat/components/MessageTooltip/Picker/Userlist.m.less"),
				Vr = n.n(zr);
			const Kr = i.a.div("LoadingIndicator", Vr.a),
				Zr = i.a.wrapped(Wr, "ChatMemberList", Vr.a),
				qr = i.a.div("Wrapper", Vr.a),
				Qr = Object($.a)({
					channelId: te.p,
					channelMembers: kr.f,
					hasMoreMembers: kr.d,
					fetchingMembers: kr.a
				});
			class Jr extends r.Component {
				constructor(e) {
					super(e), this.fetchedFilter = "", this.isMount = !1, this.fetchSubredditChannelUsers = jr()((e = "") => {
						this.props.fetchSubredditChannelUsers(e)
					}, d.Ib, {
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
					this.isMount = !0, this.props.onMountChange(this.isMount);
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
					this.isMount = !1, this.props.onMountChange(this.isMount)
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
					return this.members = this.filterMembers(), this.members && this.members.length && e ? c.a.createElement(qr, null, c.a.createElement(Zr, {
						minimal: !0,
						channelId: e,
						members: this.members,
						modIndicator: !0,
						onClick: t,
						onSelectName: n,
						selectIndex: this.state.selectIndex,
						useNSFWIcons: !0
					})) : a || this.members && this.members.length ? c.a.createElement(Kr, null, x.fbt._("Loading members...", null, {
						hk: "23phIt"
					})) : c.a.createElement(Kr, null, x.fbt._("Member not found!", null, {
						hk: "4DkpQe"
					}))
				}
			}
			var Yr = Object(o.b)(Qr, e => ({
				fetchSubredditChannelUsers: t => e(Object(yr.e)({
					filter: t
				}))
			}))(Jr);
			const Xr = "Backspace",
				$r = "Enter",
				ec = "Escape",
				tc = "ArrowLeft",
				nc = "ArrowUp",
				ac = "ArrowRight",
				sc = "ArrowDown",
				rc = "Delete";
			var cc = n("./src/chat/singleton/SendbirdSDK.ts"),
				oc = n("./src/chat/controls/ContentEditable/index.m.less"),
				ic = n.n(oc);
			const lc = 19,
				dc = 12,
				uc = 6,
				hc = i.a.textarea("Textarea", ic.a);
			class mc extends c.a.Component {
				constructor(e) {
					super(e), this.offset = 0, this.emitChange = this.emitChange.bind(this), this.emitChangeOnce = this.emitChangeOnce.bind(this), this.handleCursor = this.handleCursor.bind(this), this.handleKeyPress = this.handleKeyPress.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleSizing = this.handleSizing.bind(this), this._ref = c.a.createRef()
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
					this.props.channelId !== e.channelId && this.textarea && (this.textarea.value = e.draftText || "", this.handleSizing()), this.textarea && this.textarea.value ? cc.a.startTypingIndicator() : cc.a.endTypingIndicator(), this.textarea && e.textUpdate && (this.textarea.value = e.textUpdate, this.props.onChangeOnce(this.textarea.value), this.handleSizing()), this.textarea && this.textarea.value && e.clearText && (this.clearTextAndDropInputHeight(), this.props.onChangeOnce(""), this.handleSizing()), e.cursorPosition && this.textarea && (this.textarea.selectionStart = e.cursorPosition.selectionStart, this.textarea.selectionEnd = e.cursorPosition.selectionEnd)
				}
				componentDidUpdate() {
					this.textarea && this.textarea.focus()
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
					e.key !== $r || e.shiftKey || (e.preventDefault(), this.props.onSubmit()), this.handleCursor()
				}
				handleKeyDown(e) {
					if (e.key === nc && (this.props.onArrowUp(e), this.handleSizing(), this.textarea)) {
						const {
							selectionStart: e,
							selectionEnd: t
						} = this.textarea;
						0 === e && 0 === t && this.props.onSetBlur()
					}
					e.key === sc && (this.props.onArrowDown(e), this.handleSizing()), e.key === ec && this.props.onKeyEsc(e), this.props.onKeyDown(e)
				}
				handleSizing() {
					if (this.textarea) {
						const e = this.textarea;
						e.style.height = "auto", e.style.height = e.scrollHeight + this.offset + "px", e.scrollHeight > 2 * lc + dc ? e.style.paddingTop = "0px" : e.style.paddingTop = "12px", e.scrollHeight > lc * uc + 1 ? e.style.overflowY = "scroll" : e.style.overflowY = "hidden"
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
					return c.a.createElement(hc, {
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
						placeholder: x.fbt._("Message", null, {
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

			function pc() {
				return (pc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var bc = e => c.a.createElement(et.a, pc({}, e, {
				viewBox: "0 0 24 24"
			}), c.a.createElement("path", {
				d: "M22.6559 10.8L2.39994 0.65995C2.15389 0.529239 1.87278 0.47974 1.59687 0.518539C1.32096 0.557338 1.06441 0.682447 0.863944 0.87595C0.656797 1.06381 0.51403 1.3121 0.455877 1.58564C0.397725 1.85917 0.427136 2.14407 0.539944 2.39995L4.58394 12L0.539944 21.6C0.429918 21.8544 0.401998 22.1368 0.460075 22.4078C0.518153 22.6788 0.659334 22.925 0.863944 23.112C1.10992 23.3469 1.43582 23.4798 1.77594 23.484C1.99315 23.4934 2.20883 23.4436 2.39994 23.34L22.6559 13.2C22.8781 13.0879 23.0648 12.9164 23.1952 12.7045C23.3256 12.4927 23.3947 12.2487 23.3947 12C23.3947 11.7512 23.3256 11.5072 23.1952 11.2954C23.0648 11.0835 22.8781 10.912 22.6559 10.8Z"
			}));

			function fc() {
				return (fc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var gc = e => c.a.createElement(et.a, fc({}, e, {
					viewBox: "0 0 20 20"
				}), c.a.createElement("path", {
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
				})),
				Cc = n("./src/chat/components/MessageInput/index.m.less"),
				Ec = n.n(Cc);
			const Oc = "MessageInputTooltip--Snoomoji",
				vc = "MessageInputTooltip--Userlist",
				_c = 5e3,
				jc = i.a.wrapped(X.c, "SubmitButton", Ec.a);
			jc.displayName = "SubmitButton";
			const yc = i.a.wrapped(bc, "SendIcon", Ec.a),
				Ic = i.a.form("Form", Ec.a),
				xc = i.a.div("Wrapper", Ec.a),
				wc = i.a.div("InputWrapper", Ec.a),
				Nc = i.a.div("Icons", Ec.a),
				Sc = i.a.wrapped(mc, "ContentEditable", Ec.a),
				kc = i.a.wrapped(e => c.a.createElement("div", {
					className: Object(q.a)({
						[Ec.a.active]: e.active
					}, e.className),
					onMouseDown: Object(Ea.b)(e.onMouseDown)
				}, e.children), "IconButton", Ec.a),
				Tc = Object($.a)({
					activeDropdownId: e => e.tooltipId || void 0,
					draftMessage: (e, t) => Object(te.k)(e, t.channelId)
				});
			class Mc extends r.PureComponent {
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
					}, this.sendEnabled = () => !!this.state.text, this.onArrowUpUserlistListener = ma.a, this.onArrowDownUserlistListener = ma.a, this.startIdleTimerThrottle = Ws()(() => {
						this.props.startSurveyTimer()
					}, _c), this.handleSubmitText = this.handleSubmitText.bind(this), this.handleSubmitSnoo = this.handleSubmitSnoo.bind(this);
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
						channelId: t,
						isFocused: n
					} = this.props;
					if (t !== e.channelId) {
						this.updateDraftText(this.state.text);
						const t = e.draftMessage || "";
						this.setState({
							text: t
						}, () => this.reFocusCursorPosition(t.length))
					}
					e.isFocused !== n && e.isFocused && this.reFocusCursorPosition(this.state.text.length)
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
					this.sendEnabled() && (this.isUserlistPopupOpened() ? (this.onPickUserName(this.selectUserName || this.state.inputUserName), this.props.toggleUserlistTooltip(vc)) : (t(this.state.text), n && n(), this.clearText(), a(e)))
				}
				handleSubmitSnoo(e) {
					const {
						onSubmitSnoo: t,
						onSubmit: n
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
					} = Qs(t, e, n);
					this.setState({
						textUpdate: a,
						text: a
					}, () => {
						this.reFocusCursorPosition(s), this.props.toggleUserlistTooltip(vc)
					})
				}
				toggleUserlistTooltipByTextChange(e) {
					const {
						selectionEnd: t
					} = this.cursorPosition, {
						hasUsername: n,
						username: a
					} = qs(e, t), s = this.isUserlistPopupOpened();
					return (n && !s || !n && s) && this.props.toggleUserlistTooltip(vc), this.setState({
						inputUserName: a
					})
				}
				isUserlistPopupOpened() {
					return this.props.activeDropdownId === vc
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
						draftMessage: s
					} = this.props;
					return c.a.createElement(Ic, {
						tabIndex: 0,
						className: t,
						id: nr,
						onSubmit: Object(Ea.b)(this.handleSubmitText)
					}, c.a.createElement(xc, null, c.a.createElement(wc, null, c.a.createElement(Sc, {
						channelId: n,
						clearText: this.state.clearText,
						cursorPosition: this.cursorPosition,
						draftText: s || "",
						onArrowDown: e => this.onArrowDownUserlistListener(e),
						onArrowUp: e => this.onArrowUpUserlistListener(e),
						onBlur: this.handleInputBlur,
						onChange: this.handleChangeText,
						onChangeCursor: e => this.cursorPosition = e,
						onChangeOnce: this.handleChangeOnce,
						onKeyDown: this.startIdleTimerThrottle,
						onKeyEsc: () => this.props.closeUserlistTooltip(),
						onSetBlur: () => this.props.onChangeFocus(!1),
						onSubmit: this.handleSubmitText,
						textUpdate: this.state.textUpdate
					}), c.a.createElement(Nc, null, c.a.createElement(kc, {
						onMouseDown: () => a(Oc),
						active: e === Oc
					}, c.a.createElement(gc, null)), c.a.createElement(dr, {
						id: Oc,
						title: x.fbt._("Choose Snoomoji", null, {
							hk: "qOyxa"
						})
					}, c.a.createElement(vr, {
						onPickSnoomoji: this.handleSubmitSnoo
					})), c.a.createElement(dr, {
						id: vc,
						title: `u/${this.state.inputUserName}`
					}, c.a.createElement(Yr, {
						bindArrowDown: e => this.onArrowDownUserlistListener = e,
						bindArrowUp: e => this.onArrowUpUserlistListener = e,
						inputUserName: this.state.inputUserName,
						onMountChange: e => this.props.onChangeFocus(e),
						onPickUserName: e => this.onPickUserName(e),
						onSelectUserName: e => this.selectUserName = e
					})))), c.a.createElement(jc, {
						type: "submit",
						disabled: !this.sendEnabled()
					}, c.a.createElement(yc, null))))
				}
			}
			var Uc = Object(o.b)(Tc, (e, {
					channelId: t
				}) => ({
					onSubmitText: n => e(Object(j.p)(t, n.trim(), J.c.TEXT)),
					onSubmitSnoo: n => e(Object(j.p)(t, n.trim(), J.c.SNOOMOJI)),
					toggleSnoomojiTooltip: t => {
						e(Object(le.E)(t)), e(Object(Ks.c)({
							tooltipId: t
						}))
					},
					toggleUserlistTooltip: t => {
						e(Object(Ks.c)({
							tooltipId: t
						}))
					},
					saveDraft: (t, n) => {
						e(Object(zs.e)({
							channelId: t,
							messageValue: n
						}))
					},
					deleteDraft: t => {
						e(Object(zs.f)(t))
					},
					closeUserlistTooltip: () => e(Object(Ks.d)()),
					startSurveyTimer: () => e(Object(Vs.b)())
				}))(Mc),
				Ac = n("./src/chat/components/MessageList/index.m.less"),
				Dc = n.n(Ac),
				Pc = n("./src/chat/components/OverlayNav/index.tsx"),
				Lc = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				Rc = n("./src/chat/components/TypingIndicator/index.m.less"),
				Bc = n.n(Rc);
			const Hc = i.a.span("IndicatorText", Bc.a);
			Hc.displayName = "IndicatorText";
			var Fc = e => c.a.createElement(Hc, {
					className: e.className
				}, ((e, t) => e === Sr.a.Direct ? x.fbt._("is typing...", null, {
					hk: "UTaH4"
				}) : 1 === t.length ? x.fbt._("{firstUser} is typing...", [x.fbt._param("firstUser", t[0])], {
					hk: "480JMK"
				}) : 2 === t.length ? x.fbt._("{firstUser} and {secondUser} are typing", [x.fbt._param("firstUser", t[0]), x.fbt._param("secondUser", t[1])], {
					hk: "3zfAnp"
				}) : t.length > 2 ? x.fbt._("Several people are typing...", null, {
					hk: "39edn3"
				}) : void 0)(e.channelType, e.usernames)),
				Gc = n("./src/chat/constants/batchSizes.ts"),
				Wc = n("./src/chat/selectors/app.ts");
			const {
				fbt: zc
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Vc = i.a.wrapped(Fs, "SystemBubble", Dc.a), Kc = i.a.wrapped(Ls, "MessageItemBubble", Dc.a), Zc = i.a.wrapped(e => {
				const {
					className: t,
					innerRef: n,
					autoScrollBottom: a,
					children: s,
					loadMoreRows: r,
					onFocus: o,
					onKeyDown: i
				} = e;
				return c.a.createElement(Js.b, {
					loadMoreRows: r,
					autoScrollBottom: a,
					ref: n,
					className: t,
					onFocus: o,
					onKeyDown: i
				}, s)
			}, "Scroller", Dc.a), qc = i.a.div("Container", Dc.a), Qc = i.a.div("ReverseCol", Dc.a), Jc = i.a.wrapped(Uc, "MessageInput", Dc.a), Yc = i.a.span("LoadingIndicator", Dc.a), Xc = i.a.span("LoadingError", Dc.a), $c = i.a.div("TypingIndicatorWrapper", Dc.a), eo = Object($.a)({
				currentUser: e => e.user.account,
				channelMessages: e => Object(te.q)(e),
				channelPendingMessages: e => Object(te.r)(e),
				fetchingMessages: e => Object(te.s)(e, "fetchingMessages"),
				fetchingMessagesError: e => Object(te.s)(e, "fetchingMessagesError"),
				hasMoreMessages: e => Object(te.s)(e, "hasMoreMessages"),
				isMessageListLoaded: e => Object(te.s)(e, "isMessageListLoaded"),
				isModerator: e => Object(te.a)(e),
				typingIndicatorUsernames: e => e.typingIndicator.usernames,
				isChatEmbedded: e => Object(Wc.d)(e),
				isRichUnitDataReceived: e => Object(fs.o)(e)
			}), to = Object(o.b)(eo, e => ({
				getPreviousMessages: () => e(Object(j.s)()),
				removeAndResetMessages: t => e(Object(y.c)(t)),
				resetChannelMessageList: t => e(Object(_.L)(t)),
				resetRichUnisDataReceived: () => e(Object(I.e)())
			})), no = 30, ao = 2 * Gc.a.Messages;
			class so extends c.a.Component {
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
							case Sr.a.Group:
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
							return v()([...e, ...t], "createdAt").map((e, t, s) => {
								const {
									createdAt: r,
									sender: o
								} = e, i = o && o.userId, l = o && o.nickname, u = this.isSplitterDisplayed(e, t, s), h = this.getPreviousTime(t, s), m = this.getPreviousUserId(t, s) === i, p = r - h < 5 * d.db, b = !(m && p), f = e.messageType === J.d.SYSTEM && this.isSystemMessageDisplayed(n, e), g = u && c.a.createElement(L, {
									date: r
								}), C = b && l && i && c.a.createElement(Ga, {
									createdAt: r,
									userId: i,
									nickname: l
								}), E = (e => {
									const {
										sender: t
									} = e, s = t && t.userId, r = n.id === s;
									return c.a.createElement(Kc, {
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
										}, g, c.a.createElement(c.a.Fragment, null, C, E));
									case J.d.SYSTEM:
										return f && c.a.createElement(c.a.Fragment, {
											key: e.createdAt
										}, g, c.a.createElement(Vc, {
											message: e
										}));
									default:
										return null
								}
							})
						}
					}, this.getPreviousTime = this.getPreviousTime.bind(this), this.getPreviousUserId = this.getPreviousUserId.bind(this), this.loadMoreRows = this.loadMoreRows.bind(this), this.scrollerKeyDownHandler = this.scrollerKeyDownHandler.bind(this), this.state = {
						isMessageInputFocused: !0
					}
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
					if (t.length > no && this.isChannelSwitched(e)) {
						const e = t.length - no,
							a = t.slice(0, e);
						n(E()(a, ({
							messageId: e
						}) => String(e)))
					}
				}
				removeResetTooOldMessages() {
					var e;
					const t = this.props.channelMessages.length > ao,
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
				scrollerKeyDownHandler(e) {
					var t, n;
					e.key === sc && (null === (n = null === (t = this.scroller) || void 0 === t ? void 0 : t.current) || void 0 === n ? void 0 : n.isScrolledToBottom(1)) && this.setState({
						isMessageInputFocused: !0
					})
				}
				changeMessageInputFocus(e) {
					this.setState({
						isMessageInputFocused: e
					})
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
							typingIndicatorUsernames: i
						},
						loadMoreRows: l,
						scrollerKeyDownHandler: d
					} = this, u = this.renderMessages(), h = this.getTitle(), m = !o && s && e.members;
					return c.a.createElement(qc, null, c.a.createElement(Pc.a, {
						channelId: t,
						showMenu: !0,
						title: h,
						channelType: null == e ? void 0 : e.type
					}), c.a.createElement(Qc, null, c.a.createElement(Zc, {
						autoScrollBottom: !0,
						innerRef: this.scroller,
						loadMoreRows: l,
						onFocus: () => this.changeMessageInputFocus(!1),
						onKeyDown: d
					}, n && c.a.createElement(Xc, {
						onClick: a
					}, zc._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})), m ? c.a.createElement(Z, {
						users: e.members,
						channel: e
					}) : n ? c.a.createElement(Xc, {
						onClick: a
					}, zc._("Something went wrong. Please try again.", null, {
						hk: "2NoQnC"
					})) : s ? c.a.createElement(Yc, null, zc._("Loading history...", null, {
						hk: "4tLHUG"
					})) : c.a.createElement(Lc.b, null), u)), c.a.createElement($c, null, e && i.length ? c.a.createElement(Fc, {
						usernames: i,
						channelType: e.type
					}) : null), c.a.createElement(Jc, {
						channelId: e.channelId,
						isFocused: this.state.isMessageInputFocused,
						isLocked: e.isFrozen,
						isModerator: r,
						isMuted: e.isUserMuted,
						onChangeFocus: e => {
							this.changeMessageInputFocus(e), this.scroller.current && this.scroller.current.setFocus()
						},
						onSubmit: () => {
							this.scroller.current && this.scroller.current.scrollToBottom()
						}
					}))
				}
			}
			var ro = to(so),
				co = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				oo = n("./src/chat/constants/channels.ts"),
				io = n("./src/chat/controls/Overlay/index.tsx"),
				lo = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				uo = n.n(lo);
			const ho = i.a.wrapped(X.a, "Button", uo.a),
				mo = Object(o.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(Ea.b)(() => e(Object(Q.a)()))
				})),
				po = i.a.div("OverlayControlBar", uo.a),
				bo = mo(e => c.a.createElement(po, {
					className: Object(q.a)({
						[uo.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? c.a.createElement(ho, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, x.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : c.a.createElement(ho, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || x.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && c.a.createElement(ho, {
					type: "submit",
					primary: !0,
					onClick: e.primaryButtonAction || e.onSubmit,
					disabled: e.primaryButtonDisabled
				}, e.primaryButtonText || x.fbt._("Submit", null, {
					hk: "2Iwjdv"
				}))));
			bo.displayName = "OverlayControlBar";
			var fo = bo,
				go = n("./src/chat/components/ToastNotification/index.tsx"),
				Co = n("./src/chat/controls/OverlayHeader/index.m.less"),
				Eo = n.n(Co);
			const Oo = i.a.header("Header", Eo.a),
				vo = i.a.h1("Title", Eo.a),
				_o = i.a.span("Normal", Eo.a),
				jo = i.a.span("Warning", Eo.a);
			var yo = ({
					message: e,
					title: t,
					warning: n
				}) => {
					const a = n ? jo : _o;
					return c.a.createElement(Oo, null, c.a.createElement(vo, null, t), c.a.createElement(a, null, e), c.a.createElement(go.a, null))
				},
				Io = n("./src/chat/components/OverlayChatMembers/index.m.less"),
				xo = n.n(Io);
			const wo = i.a.wrapped(Js.b, "Scroller", xo.a),
				No = i.a.div("LoadingIndicator", xo.a),
				So = Object($.a)({
					channelType: e => Object(te.s)(e, "type"),
					currentChannel: te.h,
					memberCount: e => Object(te.s)(e, "memberCount"),
					members: e => Object(kr.f)(e),
					fetchingMembers: kr.a,
					hasMoreMembers: kr.d
				});
			var ko = Object(o.b)(So, e => ({
					fetchChannelMembers: t => e(Object(yr.e)({
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
						} = n, l = e === oo.b.INVITED, d = e === oo.b.JOINED, u = () => {
							!o && i && r({
								loadMore: !0
							})
						}, h = () => !!o;
						return o || s.length || r(), c.a.createElement(io.a, {
							form: !0,
							innerContent: !0
						}, c.a.createElement(yo, {
							title: x.fbt._({
								"*": "{number of members} group members",
								_1: "1 group member"
							}, [x.fbt._plural(a, "number of members")], {
								hk: "4phXDa"
							})
						}), c.a.createElement(wo, {
							loadMoreRows: u,
							isLoadMoreRowsComplete: h,
							threshold: 0
						}, c.a.createElement(Wr, {
							channelId: t,
							members: s,
							modIndicator: !0,
							useNSFWIcons: l || d
						}), o && c.a.createElement(No, {
							role: "progressbar"
						}, x.fbt._("Loading members...", null, {
							hk: "2sCDrM"
						}))), c.a.createElement(fo, {
							secondaryButtonOnly: !0,
							secondaryButtonText: x.fbt._("Done", null, {
								hk: "2xerWP"
							})
						}))
					}
					return null
				})),
				To = n("./node_modules/lodash/uniqBy.js"),
				Mo = n.n(To),
				Uo = n("./src/chat/actions/sendbird/index.ts"),
				Ao = n("./src/chat/actions/user.ts"),
				Do = n("./node_modules/lodash/last.js"),
				Po = n.n(Do),
				Lo = n("./src/chat/components/SearchBar/index.m.less"),
				Ro = n.n(Lo);
			const Bo = i.a.span("Bubble", Ro.a),
				Ho = i.a.span("SearchBarLabel", Ro.a),
				Fo = i.a.span("SearchBarField", Ro.a),
				Go = i.a.input("SearchBarInput", Ro.a),
				Wo = i.a.wrapped(Js.b, "SearchBarWrapper", Ro.a);
			class zo extends c.a.Component {
				constructor(e) {
					super(e), this.bubbleRefs = {}, this.timeoutToken = null, this.onBubbleKey = e => t => {
						switch (t.key) {
							case rc:
							case Xr: {
								const t = this.searchBarInputRef.current;
								return t && t.focus(), this.props.onUnselect(e.id)
							}
							case tc: {
								const e = t.target;
								if (e.previousElementSibling) {
									e.previousElementSibling.focus()
								}
								break
							}
							case ac: {
								const e = t.target;
								if (e.nextElementSibling) {
									e.nextElementSibling.focus()
								}
							}
						}
					}, this.onBubbleKey = this.onBubbleKey.bind(this), this.onFilterChange = this.onFilterChange.bind(this), this.stopEnter = this.stopEnter.bind(this), this.searchKeyHandler = this.searchKeyHandler.bind(this), this.searchBarInputRef = c.a.createRef()
				}
				stopEnter(e) {
					e.key === $r && e.preventDefault()
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
						case $r:
							return n((() => s.id)());
						case tc:
						case rc:
						case Xr:
							if (0 === r().length) {
								const e = Po()(this.props.selectedContacts);
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
					return c.a.createElement(Wo, {
						autoScrollBottom: !0
					}, c.a.createElement(Ho, null, x.fbt._("To:", null, {
						hk: "2eyFcf"
					})), c.a.createElement(Fo, null, n && n.length > 0 && n.map((e, t) => c.a.createElement(Bo, {
						key: `selected-contact-${t}`,
						tabIndex: 0,
						onKeyDown: Object(Ea.a)(this.onBubbleKey(e)),
						innerRef: t => {
							t && (this.bubbleRefs[e.name] = t)
						}
					}, e.name)), c.a.createElement(Go, {
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
			zo.defaultProps = {
				onIdentifyContactTimeout: 1e3
			};
			var Vo = n("./src/chat/controls/Checkbox/index.tsx"),
				Ko = n("./src/chat/components/SelectableUser/index.m.less"),
				Zo = n.n(Ko);
			const qo = i.a.wrapped(Vo.a, "Checkbox", Zo.a),
				Qo = i.a.wrapped(B.a, "UserPic", Zo.a),
				Jo = i.a.span("Name", Zo.a);
			class Yo extends r.Component {
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
					return c.a.createElement(qo, {
						type: "checkbox",
						name: n,
						value: t,
						onChange: s,
						checked: a(e),
						id: e
					}, c.a.createElement(Qo, {
						userId: e
					}), c.a.createElement(Jo, null, t))
				}
			}
			var Xo = n("./src/chat/components/UnselectableUser/index.m.less"),
				$o = n.n(Xo);
			const ei = i.a.span("Wrapper", $o.a),
				ti = i.a.span("Content", $o.a),
				ni = i.a.wrapped(B.a, "UserPic", $o.a),
				ai = i.a.span("Name", $o.a),
				si = i.a.span("Context", $o.a);
			class ri extends r.Component {
				render() {
					const {
						contact: {
							id: e,
							name: t
						},
						context: n
					} = this.props;
					return c.a.createElement(ei, null, c.a.createElement(ti, null, c.a.createElement(ni, {
						userId: e
					}), c.a.createElement(ai, null, t)), c.a.createElement(si, null, n))
				}
			}
			var ci = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				oi = n("./src/chat/controls/Counter/index.tsx"),
				ii = n("./src/chat/selectors/contacts.ts"),
				li = n("./src/chat/selectors/platform.ts"),
				di = n("./src/chat/components/OverlayCreateChannel/index.m.less"),
				ui = n.n(di);
			const hi = "contactForm",
				mi = i.a.div("Content", ui.a),
				pi = i.a.wrapped(Vo.a, "Checkbox", ui.a),
				bi = i.a.wrapped(Js.b, "Scroller", ui.a),
				fi = i.a.div("ListItem", ui.a),
				gi = i.a.div("ListItemHeader", ui.a),
				Ci = i.a.h4("ChatListHeader", ui.a),
				Ei = i.a.span("Name", ui.a),
				Oi = i.a.span("Error", ui.a),
				vi = i.a.wrapped(ci.a, "ChannelNameInput", ui.a),
				_i = i.a.div("OverlayContent", ui.a),
				ji = i.a.wrapped(e => c.a.createElement("div", {
					className: Object(q.a)(e.className, {
						[ui.a.shown]: e.isShown
					})
				}, e.children), "ChannelNameWrapper", ui.a);
			ji.displayName = "ChannelNameWrapper";
			const yi = e => e.toLocaleLowerCase(),
				Ii = Object($.a)({
					channelAction: e => Object(li.c)(e),
					channel: e => Object(te.h)(e),
					contacts: ii.h,
					currentUserName: Tr.b,
					existingGroupUsers: e => {
						const t = Object(te.s)(e, "members");
						return t && t.map(e => e.id)
					},
					isCreatingChannel: te.E,
					loadedContacts: ii.i,
					knownContacts: ii.g,
					memberCount: e => Object(te.s)(e, "memberCount"),
					selectedUsers: ii.j,
					selectedUsersCount: ii.k
				}),
				xi = Object(o.b)(Ii, e => ({
					onCreateNewChannel: (t, n) => e(Object(_.A)(t, n)),
					onInviteUsersToExistingChannel: t => e(Object(_.G)(t)),
					onIdentifyContact: t => e(Object(Uo.k)({
						username: t
					})),
					onCancelAndGoBack: () => {
						e(Object(Q.a)()), e(Object(le.d)())
					},
					onSelectUser: t => e(Object(Ao.m)(t)),
					onUnselectUser: t => e(Object(Ao.t)(t)),
					removeAllSelectedUsers: () => e(Object(Ao.s)()),
					requestSuggestedContacts: () => e(Object(Uo.n)())
				}));
			class wi extends c.a.Component {
				constructor(e) {
					super(e), this.isUserSelected = e => this.props.selectedUsers.includes(e), this.isCreateChannelURLAction = () => this.props.channelAction === oo.a.CREATE, this.isInviteMembersURLAction = () => this.props.channelAction === oo.a.INVITE_MEMBERS, this.isExistingGroupUser = e => !(!(this.isInviteMembersURLAction() && this.props.existingGroupUsers && this.props.existingGroupUsers.includes(e)) || this.isUserSelected(e)), this.hasTooManyMembers = () => {
						const {
							isCreatingChannel: e,
							memberCount: t,
							selectedUsersCount: n
						} = this.props;
						if (e) return n > oo.f;
						return (n || 0) + (t || 0) > oo.f
					}, this.isSubmitDisabled = e => {
						const {
							isCreatingChannel: t,
							selectedUsersCount: n
						} = this.props, a = this.isCreateChannelURLAction(), s = e < 0, r = n > 1, c = this.hasTooManyMembers();
						return !n || t || a && r && (s || c) || !a && c
					}, this.getInviteMembersText = () => x.fbt._("Add to group", null, {
						hk: "4n0y9e"
					}), this.primaryButtonText = () => this.isInviteMembersURLAction() ? this.getInviteMembersText() : x.fbt._("Start a chat", null, {
						hk: "4BZNdM"
					}), this.getBlockedContactText = e => e.isBlocked ? x.fbt._("blocked", null, {
						hk: "3BVDae"
					}) : !1 === e.acceptChats ? x.fbt._("unable to message this account", null, {
						hk: "SDEZ3"
					}) : x.fbt._("already in group", null, {
						hk: "1z5QI7"
					}), this.getOverlayTitle = () => this.isCreateChannelURLAction() ? x.fbt._("Create Group", null, {
						hk: "1SQOf3"
					}) : this.getInviteMembersText(), this.getOverlayMessage = () => {
						const {
							selectedUsersCount: e
						} = this.props;
						return e === oo.f ? x.fbt._("Maximum group size reached", null, {
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
					s.includes(t) ? a(t) : (r < oo.f || r < 1) && (this.setState(e => ({
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
						for (const a in e) yi(e[a].id) === t && n.push(e[a])
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
					return t ? e.filter(e => yi(e.name).includes(yi(t)) && !e.isBlocked) : e
				}
				getLoadedContact() {
					return this.props.loadedContacts.find(e => e && yi(e.name) === yi(this.state.filter))
				}
				getIsValidUser(e) {
					const t = this.props.knownContacts[yi(e)];
					return !t || !t.loaded || t.valid
				}
				availableCharacters(e) {
					return oo.e - e.length
				}
				getGroupName() {
					const e = this.state.groupName.trim();
					if (e) return e;
					let t = this.getSelectedContacts();
					if (!t.length) return "";
					let {
						currentUserName: n
					} = this.props;
					for (; t.length && n.length + t[0].name.length <= oo.e;) n = n + ", " + t[0].name, t = t.splice(1, t.length - 1);
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
					} = this, p = this.getSelectedContacts(), b = this.getFilteredContacts(), f = this.getLoadedContact(), g = !!a && !f, C = !!f, E = !this.getIsValidUser(a), O = this.handleChannelNameInput, v = this.availableCharacters(r), _ = this.isSubmitDisabled(v), j = this.primaryButtonText(), y = this.isCreateChannelURLAction(), I = n >= oo.f;
					return c.a.createElement(io.a, {
						className: e,
						onSubmit: Object(Ea.a)(h),
						innerContent: !0,
						form: !0
					}, c.a.createElement(_i, null, c.a.createElement(yo, {
						message: this.getOverlayMessage(),
						title: this.getOverlayTitle(),
						warning: I
					}), c.a.createElement(mi, null, y && c.a.createElement(ji, {
						isShown: n > 1
					}, c.a.createElement(vi, {
						handleChannelNameInput: O,
						placeholder: x.fbt._("Group name", null, {
							hk: "3YSrvu"
						})
					}, c.a.createElement(oi.a, {
						count: v
					}))), c.a.createElement(zo, {
						innerRef: this.searchBarElement,
						filter: a,
						resetFilter: s,
						selectedContacts: p,
						onFilterReset: l,
						onFilterContacts: d,
						onIdentifyContact: t,
						onUnselect: this.props.onUnselectUser
					}), c.a.createElement(bi, {
						loadMoreRows: ma.a,
						threshold: 0
					}, Mo()(b, e => e.name).map(e => c.a.createElement(fi, {
						key: e.name
					}, i(e.id) || e.isBlocked || !1 === e.acceptChats ? c.a.createElement(ri, {
						contact: e,
						context: this.getBlockedContactText(e)
					}) : c.a.createElement(Yo, {
						formName: hi,
						contact: e,
						onChange: u,
						isChecked: o
					}))), (g || C) && c.a.createElement(gi, null, c.a.createElement(Ci, null, x.fbt._("Click to add", null, {
						hk: "4khdH7"
					}))), g && !C && c.a.createElement(fi, null, c.a.createElement(pi, {
						type: "checkbox",
						disabled: !0,
						name: hi,
						value: a,
						onChange: u
					}, c.a.createElement(Ei, null, a, E && c.a.createElement(Oi, null, x.fbt._("User doesn't exist", null, {
						hk: "2nKv7P"
					}))))), C && f && c.a.createElement(fi, null, !y && (i(f.id) || f.isBlocked) || !1 === f.acceptChats ? c.a.createElement(ri, {
						contact: f,
						context: this.getBlockedContactText(f)
					}) : c.a.createElement(Yo, {
						formName: hi,
						contact: f,
						onChange: u,
						isChecked: o
					})))), c.a.createElement(fo, {
						primaryButtonText: j,
						primaryButtonDisabled: _,
						secondaryButtonAction: m
					})))
				}
			}
			wi.displayName = "OverlayCreateChannel";
			var Ni = xi(wi),
				Si = n("./src/chat/components/Sidebar/index.tsx"),
				ki = n("./src/chat/components/OverlayBlockUser/index.m.less"),
				Ti = n.n(ki);
			const Mi = i.a.div("Container", Ti.a),
				Ui = i.a.p("Text", Ti.a),
				Ai = Object($.a)({
					blockedUser: (e, t) => e.contacts.models[t.blockedUserId]
				});
			var Di = Object(o.b)(Ai, e => ({
					onChannelBlock: t => {
						e(Ao.n(t)), e(le.u())
					}
				}))(e => {
					const {
						blockedUser: t,
						blockedUserId: n,
						onChannelBlock: a
					} = e, s = t ? t.name : x.fbt._("user", null, {
						hk: "3ddTpU"
					});
					return c.a.createElement(io.a, null, c.a.createElement(Pc.a, {
						channelId: e.channelId,
						title: x.fbt._("Block {username}", [x.fbt._param("username", s)], {
							hk: "2aTkTS"
						})
					}), c.a.createElement(Mi, null, c.a.createElement(Ui, null, x.fbt._("Are you sure you want to block this user?", null, {
						hk: "31Tn9j"
					})), c.a.createElement(Ui, null, x.fbt._("You will no longer see their comments, posts, and messages. They will not know that you've blocked them. You will no longer get notifications from this user.", null, {
						hk: "veMnN"
					}))), c.a.createElement(fo, {
						primaryButtonText: x.fbt._("Block", null, {
							hk: "8i5gq"
						}),
						primaryButtonAction: () => a(n)
					}))
				}),
				Pi = n("./src/lib/timeAgo/index.ts"),
				Li = n("./src/chat/controls/MediaObject/index.m.less"),
				Ri = n.n(Li);
			const Bi = i.a.wrapped(e => {
				const [t, n, a] = c.a.Children.toArray(e.children);
				return c.a.createElement("div", {
					className: e.className
				}, t, n, a)
			}, "MediaObject", Ri.a);
			var Hi = n("./src/chat/components/OverlayChannelInvited/index.m.less"),
				Fi = n.n(Hi);
			const Gi = "OverlayNavTooltip--ChatRequest",
				Wi = i.a.div("Container", Fi.a),
				zi = i.a.div("TitleContainer", Fi.a),
				Vi = i.a.wrapped(Nr.a, "NSFWIcon", Fi.a),
				Ki = i.a.wrapped(B.a, "UserPic", Fi.a),
				Zi = i.a.span("WarningTextNSFW", Fi.a),
				qi = i.a.p("Text", Fi.a),
				Qi = i.a.wrapped(Bi, "MediaObject", Fi.a),
				Ji = i.a.span("LightText", Fi.a),
				Yi = i.a.wrapped(e => c.a.createElement("span", {
					className: e.className
				}, e.children), "LightTextSmall", Fi.a);
			Yi.displayName = "LightTextSmall";
			const Xi = i.a.b("Warning", Fi.a),
				$i = i.a.wrapped(Ls, "MessageItemBubble", Fi.a),
				el = i.a.wrapped(e => c.a.createElement("p", {
					className: Object(q.a)(e.className, {
						[Fi.a.count]: !!e.count
					})
				}, e.children), "MemberListHeader", Fi.a),
				tl = Object($.a)({
					currentUserId: Tr.a,
					channel: e => Object(te.h)(e),
					inviterContact: (e, t) => {
						const n = Object(te.f)(e, t);
						return n && Object(ii.d)(e, n)
					},
					channelMessages: e => Object(te.q)(e),
					isChatEmbedded: e => Object(Wc.d)(e)
				}),
				nl = Object(o.b)(tl, e => ({
					onAcceptChannelRequest: () => {
						e(Object(_.x)()), e(Object(le.k)())
					},
					onDeclineChannelRequest: t => {
						e(Object(_.B)()), e(Object(le.l)())
					},
					getPreviousMessages: j.s
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
			class al extends c.a.Component {
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
						t.type === Sr.a.Direct && !t.firstMessageId && !t.fetchingFirstMessage && a && n()
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
						} = e, a = x.fbt._("Redditor since {amount of time}", [x.fbt._param("amount of time", Object(Pi.a)(n))], {
							hk: "37XXLN"
						}), s = x.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [x.fbt._plural(t, "karma count")], {
							hk: "4uraW2"
						});
						return c.a.createElement(Yi, null, a, " • ", s)
					}
				}
				renderPreviewMessages() {
					if (this.props.channel && this.props.channelMessages && this.props.channelMessages.length) {
						const {
							isChatEmbedded: e
						} = this.props, t = v()([...this.props.channelMessages], "createdAt");
						return c.a.createElement(Wi, null, c.a.createElement(Ji, null, x.fbt._("Preview of this chat", null, {
							hk: "42xxX4"
						})), t.map(t => c.a.createElement(c.a.Fragment, {
							key: t.createdAt
						}, c.a.createElement($i, {
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
					return this.props.hasBlockedUsers() && c.a.createElement(qi, null, c.a.createElement(Xi, null, x.fbt._("Heads up: you previously blocked at least one person in this group.", null, {
						hk: "1vpXV1"
					})), x.fbt._("If you join, you'll be able to see any messages they send. They'll remain blocked on the rest of Reddit.", null, {
						hk: "1vGIVA"
					}))
				}
				renderMemberListHeader(e, t) {
					const n = e.length,
						a = t || x.fbt._("group", null, {
							hk: "1ixukL"
						});
					return c.a.createElement(el, {
						count: n
					}, x.fbt._({
						"*": "{number} Redditors in {channelName}",
						_1: "1 Redditor in {channelName}"
					}, [x.fbt._plural(n, "number"), x.fbt._param("channelName", a)], {
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
						return c.a.createElement(c.a.Fragment, null, this.renderBlockedUserHeader(), this.renderMemberListHeader(r, s), c.a.createElement(Wr, {
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
						href: `${Ua.a.redditUrl}/user/${t.inviter.name}`
					}, c.a.createElement(Qi, null, n ? c.a.createElement(Vi, null) : c.a.createElement(Ki, {
						userId: t.inviter.id
					}), c.a.createElement(zi, null, c.a.createElement(wr, {
						bold: !0
					}, t.inviter.name), n && c.a.createElement(Zi, null, x.fbt._("NSFW", null, {
						hk: "3rI4EF"
					}))), this.renderUserInfo())), c.a.createElement(qi, null, x.fbt._("Accept their request if you'd like to continue the conversation. We won't notify them if you decline.", null, {
						hk: "1wbHBD"
					})), t && t.type === Sr.a.Group ? this.renderMembersList() : this.renderPreviewMessages())
				}
				render() {
					const {
						props: {
							channel: e,
							channelId: t,
							onAcceptChannelRequest: n
						},
						onDeclineChannelRequest: a
					} = this, s = e && e.type === Sr.a.Direct, r = s ? x.fbt._("Chat Request", null, {
						hk: "1sWJM0"
					}) : x.fbt._("Group invite", null, {
						hk: "JPFyz"
					});
					return c.a.createElement(io.a, null, c.a.createElement(Pc.a, {
						channelId: t,
						title: r,
						showMenu: s,
						dropdownId: Gi
					}), c.a.createElement(Js.b, null, this.renderContent()), c.a.createElement(fo, {
						secondaryButtonText: x.fbt._("Decline", null, {
							hk: "3rdClY"
						}),
						secondaryButtonAction: a,
						primaryButtonText: x.fbt._("Accept", null, {
							hk: "249yqF"
						}),
						primaryButtonAction: n
					}))
				}
			}
			al.displayName = "OverlayChannelInvited";
			var sl, rl = nl(al);
			! function(e) {
				e.DEFAULT = "default", e.BANNED = "banned", e.KICKED = "kicked"
			}(sl || (sl = {}));
			var cl = n("./src/chat/components/OverlayChannelRemoval/index.m.less"),
				ol = n.n(cl);
			const il = i.a.p("SubHeader", ol.a),
				ll = i.a.span("Header", ol.a),
				dl = e => {
					switch (e) {
						case sl.BANNED:
							return x.fbt._("Banned", null, {
								hk: "45AEK1"
							});
						case sl.KICKED:
							return x.fbt._("Kicked", null, {
								hk: "20JwrF"
							});
						case sl.DEFAULT:
						default:
							return x.fbt._("Removed", null, {
								hk: "3yZ2SQ"
							})
					}
				};
			var ul = e => c.a.createElement(io.a, null, c.a.createElement(Pc.a, {
				channelId: e.channelId,
				title: dl(e.status)
			}), c.a.createElement(c.a.Fragment, null, c.a.createElement(ll, null, (e => {
				switch (e) {
					case sl.BANNED:
						return x.fbt._("You are banned from this room.", null, {
							hk: "2MKZpa"
						});
					case sl.KICKED:
						return x.fbt._("You are temporarily kicked from this room.", null, {
							hk: "48m5JB"
						});
					case sl.DEFAULT:
					default:
						return x.fbt._("You have been removed from this room.", null, {
							hk: "46tIu8"
						})
				}
			})(e.status)), c.a.createElement(il, null, (e => {
				switch (e) {
					case sl.BANNED:
						return x.fbt._("You are banned from this room and may not join until you are unbanned.", null, {
							hk: "1SH7uY"
						});
					case sl.KICKED:
						return x.fbt._("You are temporarily kicked from this room and may not join until you are no longer kicked.", null, {
							hk: "1QQa96"
						});
					case sl.DEFAULT:
					default:
						return x.fbt._("You have been removed from this room.", null, {
							hk: "46tIu8"
						})
				}
			})(e.status))));
			const hl = Object(u.a)("OVERLAY_CLOSE");
			var ml = n("./src/chat/components/OverlayDeleteMessage/index.m.less"),
				pl = n.n(ml);
			const bl = i.a.div("Container", pl.a),
				fl = i.a.p("Text", pl.a),
				gl = Object($.a)({
					isModerator: te.a,
					message: (e, t) => Object(fs.d)(e, t.messageId),
					senderUserId: (e, t) => Object(fs.g)(e, t.messageId),
					isChatEmbedded: e => Object(Wc.d)(e)
				});
			class Cl extends r.Component {
				render() {
					const {
						channelId: e,
						message: t,
						onConfirmationClick: n,
						isChatEmbedded: a
					} = this.props;
					return c.a.createElement(io.a, null, c.a.createElement(Pc.a, {
						channelId: e,
						title: x.fbt._("Delete message", null, {
							hk: "1ZCVBI"
						})
					}), c.a.createElement(bl, null, c.a.createElement(fl, null, x.fbt._("Are you sure you want to delete this message?", null, {
						hk: "3cAxYZ"
					}), c.a.createElement("br", null), x.fbt._("You can't undo this.", null, {
						hk: "4ockoK"
					})), t && c.a.createElement(Ls, {
						message: t,
						fromCurrentUser: !0,
						fromInvite: !1,
						darkBackground: !0,
						withButton: !1,
						isChatEmbedded: a
					})), c.a.createElement(fo, {
						primaryButtonText: x.fbt._("Delete", null, {
							hk: "vtGdC"
						}),
						primaryButtonAction: () => n()
					}))
				}
			}
			var El = Object(o.b)(gl, (e, t) => ({
					onConfirmationClick: () => ((e, t) => {
						e(Object(j.q)(t)), e(Object(le.q)())
					})(e, t.messageId),
					onCancel: () => e(hl())
				}))(Cl),
				Ol = n("./src/chat/components/OverlayDirectsEmptyState/index.m.less"),
				vl = n.n(Ol);
			const _l = i.a.div("OverlayContent", vl.a),
				jl = i.a.img("Image", vl.a),
				yl = i.a.div("Info", vl.a),
				Il = i.a.h4("Header", vl.a),
				xl = i.a.p("Text", vl.a);
			var wl = Object(o.b)(null, e => ({
					onCreateMessage: () => e(Object(Q.b)(Object(ee.channelUrl)("create")))
				}))(e => c.a.createElement(io.a, {
					innerContent: !0
				}, c.a.createElement(Pc.a, {
					title: x.fbt._("Start chatting", null, {
						hk: "3B5dRm"
					})
				}), c.a.createElement(_l, null, c.a.createElement(jl, {
					src: `${Ua.a.assetPath}/img/chat/empty-hero.png`
				}), c.a.createElement(yl, null, c.a.createElement(Il, null, x.fbt._("Start a direct chat", null, {
					hk: "4qVzlj"
				})), c.a.createElement(xl, null, x.fbt._("You can start a new direct chat with the button below or from someone's profile", null, {
					hk: "3wS0vs"
				})))), c.a.createElement(fo, {
					primaryButtonText: x.fbt._("New Chat", null, {
						hk: "33WSw"
					}),
					primaryButtonAction: e.onCreateMessage,
					primaryButtonOnly: !0
				}))),
				Nl = n("./src/chat/actions/message/unreadCount.ts"),
				Sl = n("./src/chat/helpers/errors.ts");
			var kl = n("./src/chat/components/OverlayHideChannel/index.m.less"),
				Tl = n.n(kl);
			const Ml = i.a.p("Text", Tl.a);
			Ml.displayName = "Text";
			var Ul = Object(o.b)(null, e => ({
					onHideChannelRequest: () => e((() => async (e, t) => {
						const n = t(),
							a = Object(te.h)(n);
						if (!a) throw new Sl.a("hideChannel", a);
						try {
							await cc.a.hideChannel()
						} catch (s) {
							return Object(Sl.b)(`Error hiding channel: ${s.message}`)
						}
						e(Object(_.J)(a.channelId)), e(Object(_.O)(a.channelState)), e(Object(Nl.b)())
					})())
				}))(({
					channelId: e,
					onHideChannelRequest: t
				}) => c.a.createElement(io.a, null, c.a.createElement(Pc.a, {
					channelId: e,
					title: x.fbt._("Hide channel?", null, {
						hk: "2tS9C7"
					})
				}), c.a.createElement(Ml, null, x.fbt._("Hiding this channel will remove it from your chat inbox until someone else in the channel sends another message.", null, {
					hk: "2obYDP"
				})), c.a.createElement(fo, {
					primaryButtonText: x.fbt._("Hide", null, {
						hk: "1mv2YH"
					}),
					primaryButtonAction: () => t()
				}))),
				Al = n("./src/chat/routes/chat.ts"),
				Dl = n("./src/chat/components/OverlayKickUser/index.m.less"),
				Pl = n.n(Dl);
			const Ll = "kickUser",
				Rl = i.a.p("SubHeader", Pl.a),
				Bl = i.a.span("Title", Pl.a),
				Hl = i.a.span("Header", Pl.a),
				Fl = i.a.wrapped(Vo.a, "Checkbox", Pl.a),
				Gl = i.a.div("ListItem", Pl.a),
				Wl = i.a.div("OverlayContent", Pl.a);
			var zl;
			! function(e) {
				e[e.TenMins = 600] = "TenMins", e[e.OneHour = 3600] = "OneHour", e[e.OneDay = 86400] = "OneDay", e[e.ThreeDays = 259200] = "ThreeDays", e[e.Permanently = -1] = "Permanently"
			}(zl || (zl = {}));
			const Vl = () => ({
					[zl.TenMins]: x.fbt._("10 minutes", null, {
						hk: "3y8skZ"
					}),
					[zl.OneHour]: x.fbt._("1 hour", null, {
						hk: "mgKhy"
					}),
					[zl.OneDay]: x.fbt._("1 day", null, {
						hk: "37HQV9"
					}),
					[zl.ThreeDays]: x.fbt._("3 days", null, {
						hk: "2R7GCT"
					}),
					[zl.Permanently]: x.fbt._("Permanently", null, {
						hk: "2CHcpm"
					})
				}),
				Kl = Object($.a)({
					message: (e, t) => t.attr === Al.a.Message ? e.messages.models[t.attrId] : void 0,
					user: (e, t) => t.attr === Al.a.User ? e.contacts.models[t.attrId] : void 0
				});
			class Zl extends r.Component {
				constructor(e) {
					super(e), this.onSubmit = e => {
						const {
							attrId: t,
							channelId: n,
							onKickUser: a
						} = this.props;
						e.target[Ll].forEach(({
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
					return c.a.createElement(c.a.Fragment, null, c.a.createElement(Hl, null, x.fbt._("Are you sure you want to kick {username} from this room?", [x.fbt._param("username", n)], {
						hk: "n1L3B"
					})), c.a.createElement(Rl, null, x.fbt._("They'll be able to join again once the kick duration is over.", null, {
						hk: "4zi1U1"
					})))
				}
				render() {
					const e = Vl(),
						{
							channelId: t
						} = this.props;
					return c.a.createElement(io.a, {
						onSubmit: Object(Ea.a)(this.onSubmit),
						form: !0,
						innerContent: !0
					}, c.a.createElement(Pc.a, {
						channelId: t,
						title: x.fbt._("Confirm Kick", null, {
							hk: "1upcSi"
						})
					}), c.a.createElement(Wl, null, c.a.createElement(Js.b, null, this.renderIntro(), c.a.createElement(Bl, null, x.fbt._("Kick Duration", null, {
						hk: "4nENS8"
					})), Object.keys(e).map(t => c.a.createElement(Gl, {
						key: t
					}, c.a.createElement(Fl, {
						type: "radio",
						name: Ll,
						value: t
					}, e[t]))))), c.a.createElement(fo, {
						primaryButtonText: x.fbt._("Kick", null, {
							hk: "10O2jX"
						}),
						secondaryButtonText: x.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})
					}))
				}
			}
			var ql = Object(o.b)(Kl, e => ({
					onKickUser: (t, n, a) => {
						e(Object(Ao.p)(t, n, a)), e(Object(le.r)(a))
					}
				}))(Zl),
				Ql = n("./src/chat/components/OverlayLeaveChannel/index.m.less"),
				Jl = n.n(Ql);
			const Yl = i.a.div("Container", Jl.a),
				Xl = i.a.p("Text", Jl.a),
				$l = i.a.wrapped(Xl, "TextBold", Jl.a);
			var ed = Object(o.b)(void 0, e => ({
					onChannelLeave: t => {
						e(Object(le.n)()), e(Object(_.H)(t))
					}
				}))(e => {
					const {
						channelId: t,
						onChannelLeave: n
					} = e;
					return c.a.createElement(io.a, null, c.a.createElement(Pc.a, {
						channelId: t,
						title: x.fbt._("Are you sure", null, {
							hk: "4fJTRG"
						})
					}), c.a.createElement(Yl, null, c.a.createElement($l, null, x.fbt._("Leave group chat?", null, {
						hk: "vEsVO"
					})), c.a.createElement(Xl, null, x.fbt._("You will be removed from the group and no longer receive new messages. You will not be able to join this group again unless you receive another invite.", null, {
						hk: "3oISyF"
					}))), c.a.createElement(fo, {
						primaryButtonText: x.fbt._("Leave", null, {
							hk: "1s8gFw"
						}),
						primaryButtonAction: () => n(t)
					}))
				}),
				td = n("./src/chat/components/OverlayNSFWWarning/index.m.less"),
				nd = n.n(td);
			const ad = i.a.div("Container", nd.a),
				sd = i.a.p("Text", nd.a);
			var rd = Object(o.b)(null, e => ({
					onAccept: () => {
						e(g(h.b.NSFWWarning)), e(Object(_.x)())
					}
				}))(e => c.a.createElement(io.a, null, c.a.createElement(Pc.a, {
					channelId: e.channelId,
					title: x.fbt._("NSFW User", null, {
						hk: "3W2Bw2"
					})
				}), c.a.createElement(ad, null, c.a.createElement(sd, null, x.fbt._("One or more users in this chat are marked as NSFW (not safe for work), which means they tend to post explicit content elsewhere on Reddit. This doesn't necessarily mean that the content of this chat is explicit.", null, {
					hk: "4cRpQH"
				}))), c.a.createElement(fo, {
					primaryButtonText: x.fbt._("Accept", null, {
						hk: "2ILlth"
					}),
					primaryButtonAction: e.onAccept
				}))),
				cd = n("./src/chat/endpoints/users/index.ts"),
				od = n("./src/chat/models/Message/report.ts");
			var id = n("./src/higherOrderComponents/makeAsync.tsx"),
				ld = n("./src/lib/loadWithRetries/index.ts");
			const dd = () => null;
			var ud = Object(id.a)({
				ErrorComponent: dd,
				getComponent: () => Object(ld.a)(() => n.e("ChatReportFlow").then(n.bind(null, "./src/chat/components/ReportFlow/index.tsx"))).then(e => e.default),
				LoadingComponent: dd
			});
			const hd = "reportReason";
			var md;
			! function(e) {
				e.Threats = "threats", e.Violence = "violence", e.Personal = "personal", e.Impersonation = "impersonation", e.MinorSexualization = "minorSexualization"
			}(md || (md = {}));
			var pd = n("./src/chat/models/ReportFlow/index.ts"),
				bd = n("./src/chat/components/OverlayReport/index.m.less"),
				fd = n.n(bd);
			const gd = i.a.wrapped(Vo.a, "Checkbox", fd.a),
				Cd = i.a.div("ListItem", fd.a),
				Ed = Object($.a)({
					user: (e, t) => t.attr === Al.a.User ? e.contacts.models[t.attrId] : void 0,
					message: (e, t) => t.attr === Al.a.Invite || t.attr === Al.a.Message ? Object(fs.d)(e, Number(t.attrId)) : void 0,
					messageList: e => Object(te.t)(e),
					currentUserId: (e, t) => Object(Tr.a)(e)
				});
			class Od extends r.Component {
				constructor(e) {
					super(e), this.selectReason = e => this.setState({
						selectedReason: e
					}), this.isMessageReportFlow = () => this.props.attr === Al.a.Invite || this.props.attr === Al.a.Message, this.isSubmitDisabled = () => !this.state.selectedReason, this.isCTLControls = () => this.state.currentFlow === pd.a.CrisisTextLine && !this.state.ctlSubmitted, this.isSingleButton = () => this.state.currentFlow === pd.a.CrisisTextLine && !0 === this.state.ctlSubmitted || this.state.currentFlow === pd.a.BlockUser || this.state.currentFlow === pd.a.FileComplaint, this.nextReportFlow = () => {
						const {
							selectedReason: e
						} = this.state, t = e && e.requestCrisisSupport ? pd.a.CrisisTextLine : e && e.fileComplaint ? pd.a.FileComplaint : pd.a.BlockUser;
						this.setState({
							currentFlow: t
						})
					}, this.getMessageReportFlow = () => {
						const {
							message: e
						} = this.props;
						if (e && e.sender) return c.a.createElement(ud, {
							onRuleChange: e => this.selectReason(e),
							currentFlow: this.state.currentFlow,
							blockedUserId: e.sender.userId,
							blockedUserName: e.sender.nickname,
							ctlSubmitted: this.state.ctlSubmitted
						})
					}, this.getReportReasonText = e => {
						switch (e) {
							case md.Threats:
								return x.fbt._("Threatens, harrasses, or bullies", null, {
									hk: "9lzw2"
								});
							case md.Violence:
								return x.fbt._("It threatens violence or physical harm", null, {
									hk: "2LziPg"
								});
							case md.Personal:
								return x.fbt._("It's personal and confidential information", null, {
									hk: "2w0qDN"
								});
							case md.Impersonation:
								return x.fbt._("Impersonation", null, {
									hk: "2dg9bu"
								});
							case md.MinorSexualization:
								return x.fbt._("It's sexual or suggestive content involving minors", null, {
									hk: "Ofq3r"
								})
						}
					}, this.getUserReportFlow = () => E()(md, e => {
						const t = this.getReportReasonText(e);
						return c.a.createElement(Cd, {
							key: t
						}, c.a.createElement(gd, {
							type: "radio",
							value: t,
							name: hd,
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
						if (s && s.requestCrisisSupport && e && e.messageType === J.d.USER) return a === pd.a.CrisisTextLine ? (n(s.reasonText, e, t), this.setState({
							ctlSubmitted: !0
						})) : this.nextReportFlow();
						s && s.reasonText && e && e.messageType === J.d.USER && (n(s.reasonText, e, t), this.nextReportFlow())
					}, this.state = {
						selectedReason: void 0,
						currentFlow: this.props.attr === Al.a.Invite ? pd.a.Invite : pd.a.Default,
						ctlSubmitted: !1
					}
				}
				render() {
					const {
						channelId: e,
						message: t,
						user: n
					} = this.props;
					return c.a.createElement(io.a, {
						onSubmit: Object(Ea.a)(this.onSubmit),
						form: !0
					}, c.a.createElement(Pc.a, {
						channelId: e,
						title: x.fbt._("Reason for report", null, {
							hk: "EqHEf"
						})
					}), c.a.createElement(Js.a, null, this.isMessageReportFlow() ? t && this.getMessageReportFlow() : n && this.getUserReportFlow()), c.a.createElement(fo, {
						primaryButtonText: this.isCTLControls() ? x.fbt._("Yes", null, {
							hk: "1nxheD"
						}) : x.fbt._("Submit", null, {
							hk: "2Iwjdv"
						}),
						primaryButtonDisabled: this.isSubmitDisabled(),
						secondaryButtonOnly: this.isSingleButton(),
						secondaryButtonCTLOptions: this.isCTLControls(),
						secondaryButtonText: this.isSingleButton() ? x.fbt._("Close", null, {
							hk: "4gbyAA"
						}) : x.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})
					}))
				}
			}
			var vd = Object(o.b)(Ed, e => ({
				onReportUser: (t, n) => {
					e(Object(le.v)(n.id)), e((e => async (t, n, {
						apiContext: a
					}) => {
						const {
							user: s,
							reason: r
						} = e, c = {
							reason: r,
							userNickname: s.name
						};
						await Object(cd.a)(a(), c)
					})({
						user: n,
						reason: t
					})).then(() => e(Object(Q.a)()))
				},
				onReportMessage: (t, n, a) => {
					e(Object(le.x)(n.messageId, t)), e(((e, t, n) => async (a, s, {
						apiContext: r
					}) => {
						const c = Object(od.a)(e, t),
							o = Object(od.b)(e, t, n);
						c && await Object(cd.b)(r(), c, o)
					})(t, n, a))
				}
			}))(Od);
			const _d = e => e.channelId ? e.action === oo.a.VIEW_INVITE && e.channelId ? c.a.createElement(rl, {
				channelId: e.channelId
			}) : e.action === oo.a.VIEW_MEMBERS && e.channelId ? c.a.createElement(ko, {
				channelId: e.channelId
			}) : e.action === oo.a.LEAVE && e.channelId ? c.a.createElement(ed, {
				channelId: e.channelId
			}) : e.action === oo.a.VIEW_NSFW_CONFIRMATION && e.channelId ? c.a.createElement(rd, {
				channelId: e.channelId
			}) : e.action === oo.a.HIDE_CHANNEL && e.channelId ? c.a.createElement(Ul, {
				channelId: e.channelId
			}) : e.action === Y.a.Block && e.attrId && e.channelId ? c.a.createElement(Di, {
				channelId: e.channelId,
				blockedUserId: e.attrId
			}) : e.action === J.a.DELETE && e.channelId && e.attrId ? c.a.createElement(El, {
				channelId: e.channelId,
				messageId: parseInt(e.attrId)
			}) : e.action === J.a.REPORT && e.attr && e.attrId && e.channelId ? c.a.createElement(vd, {
				attr: e.attr,
				attrId: e.attrId,
				channelId: e.channelId
			}) : e.action === Y.a.Kick && e.attr && e.attrId && e.channelId ? c.a.createElement(ql, {
				channelId: e.channelId,
				attr: e.attr,
				attrId: e.attrId
			}) : e.action === oo.a.DENY && e.channelId ? c.a.createElement(ul, {
				channelId: e.channelId
			}) : void 0 : c.a.createElement(wl, null);
			var jd = n("./src/chat/components/FrameContent/index.m.less"),
				yd = n.n(jd);
			const Id = yd.a.Main,
				xd = Object($.a)({
					channel: e => Object(te.i)(e),
					container: e => e && e.container && e.container.size,
					isUserAccountEmpty: e => !e.user.account
				}),
				wd = Object(o.b)(xd, e => ({
					setInternalPromos: () => e((() => async e => {
						Object.keys(h.b).forEach(t => {
							m(h.b[t]) || e(b(h.b[t]))
						})
					})())
				})),
				Nd = i.a.main("Main", yd.a),
				Sd = i.a.div("Content", yd.a),
				kd = i.a.div("Modal", yd.a);
			class Td extends c.a.Component {
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
						case a === oo.a.VIEW_MEMBERS:
							return s && c.a.createElement(ko, {
								channelId: s
							});
						case a === oo.a.CREATE:
						case a === oo.a.INVITE_MEMBERS:
							return c.a.createElement(Ni, null);
						case t === Ys.a.MINIMIZED:
							return c.a.createElement(co.a, null);
						default: {
							const t = _d(this.props.match.params);
							return c.a.createElement(c.a.Fragment, null, c.a.createElement(Si.b, null), c.a.createElement(Sd, null, t ? c.a.createElement(kd, null, t) : e && s && c.a.createElement(ro, {
								channelId: s,
								channel: e
							})))
						}
					}
				}
				render() {
					return c.a.createElement(Nd, {
						id: Xs.a
					}, this.getContent())
				}
			}
			t.b = wd(Td)
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
				d = n("./src/chat/components/PortalContainer/index.tsx"),
				u = n("./src/chat/components/ThemeProvider/index.tsx"),
				h = n("./src/chat/constants/container.ts"),
				m = n("./src/chat/constants/zIndex.ts"),
				p = n("./src/chat/controls/Counter/index.tsx"),
				b = n("./src/chat/helpers/chatSelector.ts"),
				f = n("./src/chat/selectors/messages.ts"),
				g = n("./src/chat/components/MinimizedPortalContainer/index.m.less"),
				C = n.n(g);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), {
				minimized: O
			} = h.b, v = o.a.wrapped(l.a, "HiddenCloseButton", C.a);
			v.displayName = "CloseButton";
			const _ = o.a.wrapped(e => s.a.createElement("div", {
					onClick: e.onClick,
					className: e.className,
					style: {
						zIndex: m.a,
						width: `${Object(d.b)(O.width)}px`,
						height: `${Object(d.b)(O.height)}px`
					}
				}, e.children), "Container", C.a),
				j = o.a.span("TitleWithCounter", C.a),
				y = Object(b.a)({
					unreadCount: f.a
				}),
				I = Object(r.b)(y, e => ({
					close: () => e(Object(i.sizeChanged)(h.a.HIDDEN)),
					open: () => e(Object(i.sizeChanged)(h.a.EMBED))
				}));
			t.a = I(e => {
				const {
					unread: t,
					count: n
				} = e.unreadCount, a = n > 0 ? n : void 0;
				return s.a.createElement(u.a, null, s.a.createElement(_, {
					key: n,
					className: Object(c.a)(e.className, {
						[C.a.unread]: t
					}),
					onClick: e.open
				}, s.a.createElement(j, null, E._("Chat", null, {
					hk: "3ZWpRR"
				}), t && s.a.createElement(p.b, {
					count: a
				})), s.a.createElement(v, null)))
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
				Info: "_15H9nq23PhCdUwj2pSyA0S",
				info: "_15H9nq23PhCdUwj2pSyA0S",
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
				TitleWrapper: "_1FXx-0D9q_ppO-Wvhxl2SH",
				titleWrapper: "_1FXx-0D9q_ppO-Wvhxl2SH",
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
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./src/lib/opener/index.ts"),
				i = n("./src/chat/actions/container.ts"),
				l = n("./src/chat/actions/tracking.ts"),
				d = n("./node_modules/fbt/lib/FbtPublic.js"),
				u = n("./node_modules/lodash/noop.js"),
				h = n.n(u),
				m = n("./src/higherOrderComponents/asTooltip.tsx"),
				p = n("./src/lib/copyToClipboard/index.ts"),
				b = n("./src/chat/actions/channel/dropdown.ts"),
				f = n("./src/chat/actions/tooltip.ts"),
				g = n("./src/chat/actions/user/dropdown.ts"),
				C = n("./src/chat/actions/theme.ts"),
				E = n("./src/chat/helpers/chatSelector.ts"),
				O = n("./src/chat/controls/Svg/index.tsx");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var _ = e => s.a.createElement(O.a, v({}, e, {
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
				j = n("./src/chat/components/ThemeSwitcher/index.m.less"),
				y = n.n(j);
			const I = Object(E.a)({
					theme: e => e.user.prefs.globalTheme
				}),
				x = Object(r.b)(I, (e, t) => ({
					changeModeClicked: () => e(Object(C.themeToggle)())
				})),
				w = c.a.div("Wrapper", y.a);
			x(({
				changeModeClicked: e,
				theme: t
			}) => s.a.createElement(w, {
				onClick: e
			}, s.a.createElement(_, {
				active: !0
			})));
			var N = n("./src/chat/constants/channels.ts"),
				S = n("./src/chat/constants/dropdown.ts"),
				k = n("./src/chat/constants/page.ts"),
				T = n("./src/chat/controls/Button/index.tsx"),
				M = n("./src/chat/controls/Dropdown/index.tsx"),
				U = n("./src/chat/controls/Dropdown/Row.tsx"),
				A = n("./src/chat/helpers/urls/index.ts");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var P = e => s.a.createElement(O.a, D({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				d: "M16,8H12V4a1,1,0,0,0-1-1H9A1,1,0,0,0,8,4V8H4A1,1,0,0,0,3,9v2a1,1,0,0,0,1,1H8v4a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V12h4a1,1,0,0,0,1-1V9A1,1,0,0,0,16,8Z"
			}));

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var R = e => s.a.createElement(O.a, L({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M9 15.5C7.568 15.5 6.248 15.029 5.172 14.242L14.242 5.172C15.029 6.248 15.5 7.568 15.5 9C15.5 12.584 12.584 15.5 9 15.5ZM2.5 9C2.5 5.416 5.416 2.5 9 2.5C10.432 2.5 11.752 2.971 12.828 3.758L3.758 12.828C2.971 11.752 2.5 10.432 2.5 9ZM9 0.5C4.313 0.5 0.5 4.313 0.5 9C0.5 13.687 4.313 17.5 9 17.5C13.687 17.5 17.5 13.687 17.5 9C17.5 4.313 13.687 0.5 9 0.5Z"
			}));

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var H = e => s.a.createElement(O.a, B({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				d: "M16.345 14.931L17.707 16.293C18.098 16.684 18.098 17.316 17.707 17.707C17.512 17.902 17.256 18 17 18C16.744 18 16.488 17.902 16.293 17.707L0.293 1.70701C-0.0979999 1.31601 -0.0979999 0.684006 0.293 0.293006C0.684 -0.0979941 1.316 -0.0979941 1.707 0.293006L4.493 3.07901C5.591 1.81601 7.199 1.01001 9 1.01001C12.303 1.01001 14.99 3.69701 14.99 7.00001L15 11.998C15 12.552 15.449 13 16 13C16.552 13 17 13.447 17 14C17 14.431 16.726 14.789 16.345 14.931ZM3.0103 6.99801L3.0003 12C3.0003 12.552 2.5513 13 2.0003 13C1.4483 13 1.0003 13.447 1.0003 14C1.0003 14.553 1.4483 15 2.0003 15H11.5863L3.0383 6.45201C3.0213 6.63201 3.0103 6.81301 3.0103 6.99801ZM8 16H7C7 17.103 7.897 18 9 18C10.103 18 11 17.103 11 16H10H8Z"
			}));

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var G = e => s.a.createElement(O.a, F({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				d: "M14 10.9882C14 11.5422 14.449 11.9902 15 11.9902C15.552 11.9902 16 12.4372 16 12.9902C16 13.5432 15.552 13.9902 15 13.9902H1C0.448 13.9902 0 13.5432 0 12.9902C0 12.4372 0.448 11.9902 1 11.9902C1.551 11.9902 2 11.5422 2 10.9902L2.01 5.9882C2.01 2.6872 4.697 0.000198364 8 0.000198364C11.303 0.000198364 13.99 2.6872 13.99 5.9902L14 10.9882ZM6 14.9902H7H9H10C10 16.0932 9.103 16.9902 8 16.9902C6.897 16.9902 6 16.0932 6 14.9902Z"
			}));

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var z = e => s.a.createElement(O.a, W({}, e, {
				viewBox: "1 0 23 20"
			}), s.a.createElement("g", null, s.a.createElement("path", {
				d: "M4.59,8 L2.29,10.29a1,1 0,0 0,1.41 1.41L6,9.41Z"
			}), s.a.createElement("path", {
				d: "M6,11a4,4 0,0 0,5.34 3.75l-5.1,-5.1A4,4 0,0 0,6 11Z"
			}), s.a.createElement("path", {
				d: "M18.71,17.29l-5,-5A3.87,3.87 0,0 0,14 11a4,4 0,0 0,-0.68 -2.22c0.07,0.06 0.15,0.11 0.21,0.17l2.76,2.76a1,1 0,0 0,1.41 -1.41L14.95,7.54A7,7 0,0 0,7.42 6L2.71,1.29A1,1 0,0 0,1.29 2.71l16,16a1,1 0,0 0,1.41 -1.41Z"
			})));

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var K = e => s.a.createElement(O.a, V({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M7 0H14C15.654 0 17 1.346 17 3V15C17 16.654 15.654 18 14 18H7C5.346 18 4 16.654 4 15V14C4 13.448 4.447 13 5 13C5.553 13 6 13.448 6 14V15C6 15.551 6.448 16 7 16H14C14.552 16 15 15.551 15 15V3C15 2.449 14.552 2 14 2H7C6.448 2 6 2.449 6 3V4C6 4.552 5.553 5 5 5C4.447 5 4 4.552 4 4V3C4 1.346 5.346 0 7 0ZM8.293 12.707C7.902 12.316 7.902 11.684 8.293 11.293L9.586 10H1C0.447 10 0 9.552 0 9C0 8.448 0.447 8 1 8H9.586L8.293 6.707C7.902 6.316 7.902 5.684 8.293 5.293C8.684 4.902 9.316 4.902 9.707 5.293L12.706 8.293C12.799 8.385 12.872 8.495 12.923 8.618C13.024 8.862 13.024 9.138 12.923 9.382C12.872 9.505 12.799 9.615 12.706 9.708L9.707 12.707C9.512 12.902 9.256 13 9 13C8.744 13 8.488 12.902 8.293 12.707Z"
			}));

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var q = e => s.a.createElement(O.a, Z({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), s.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}));

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var J = e => s.a.createElement(O.a, Q({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				d: "M2.01557 4.0152V13.4922C2.01557 13.6692 2.04557 13.8372 2.08857 14.0002H0.999573C0.447573 14.0002 -0.000427246 13.5532 -0.000427246 13.0002V1.0002C-0.000427246 0.4472 0.447573 0.000200272 0.999573 0.000200272H12.9996C13.5526 0.000200272 13.9996 0.4472 13.9996 1.0002V2.0892C13.8366 2.0462 13.6686 2.0152 13.4926 2.0152H4.01557C2.91157 2.0152 2.01557 2.9112 2.01557 4.0152ZM4.99997 14C4.99997 14.276 5.22397 14.5 5.49997 14.5H13.5C13.776 14.5 14 14.276 14 14C14 12.07 12.43 10.5 10.5 10.5H8.49997C6.56997 10.5 4.99997 12.07 4.99997 14ZM12 7.00002C12 5.62102 10.878 4.50002 9.49997 4.50002C8.12197 4.50002 6.99997 5.62102 6.99997 7.00002C6.99997 8.37902 8.12197 9.50002 9.49997 9.50002C10.878 9.50002 12 8.37902 12 7.00002ZM3.99997 3.00002H15C15.552 3.00002 16 3.44702 16 4.00002V15C16 15.553 15.552 16 15 16H3.99997C3.44797 16 2.99997 15.553 2.99997 15V4.00002C2.99997 3.44702 3.44797 3.00002 3.99997 3.00002Z"
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
			var X = e => s.a.createElement(O.a, Y({}, e, {
				viewBox: "0 0 24 20"
			}), s.a.createElement("path", {
				d: "M14.06 0.854L16.146 2.94C16.731 3.525 16.731 4.476 16.146 5.061L14.31 6.897C14.212 6.995 14.084 7.044 13.957 7.044C13.829 7.044 13.701 6.995 13.603 6.897L10.103 3.397C9.908 3.202 9.908 2.885 10.103 2.69L11.939 0.854C12.524 0.269 13.475 0.269 14.06 0.854ZM8.689 4.104C8.884 3.909 9.201 3.909 9.396 4.104L12.896 7.604C13.091 7.799 13.091 8.116 12.896 8.311L4.353 16.854C4.259 16.948 4.132 17 4 17H0.5C0.223 17 0 16.777 0 16.5V13C0 12.868 0.052 12.741 0.146 12.647L8.689 4.104Z"
			}));

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var ee = e => s.a.createElement(O.a, $({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("path", {
					d: "M10,6.875A3.125,3.125,0,1,0,13.125,10,3.129,3.129,0,0,0,10,6.875Zm0,5A1.875,1.875,0,1,1,11.875,10,1.877,1.877,0,0,1,10,11.875Z"
				}), s.a.createElement("path", {
					d: "M19.549,8.849a1.124,1.124,0,0,0-1.116-.974H17.4a.915.915,0,0,1-.828-.608.906.906,0,0,1,.163-1l.722-.723a1.127,1.127,0,0,0,.1-1.495,9.631,9.631,0,0,0-1.608-1.608,1.129,1.129,0,0,0-1.494.1l-.724.724a.92.92,0,0,1-1.018.155.906.906,0,0,1-.588-.82V1.567A1.123,1.123,0,0,0,11.151.451a8.782,8.782,0,0,0-2.3,0,1.123,1.123,0,0,0-.974,1.116V2.6a.915.915,0,0,1-.608.828.907.907,0,0,1-1-.163l-.723-.722a1.126,1.126,0,0,0-1.495-.1A9.631,9.631,0,0,0,2.443,4.051a1.127,1.127,0,0,0,.1,1.494l.724.724a.917.917,0,0,1,.155,1.018.906.906,0,0,1-.82.588H1.567a1.123,1.123,0,0,0-1.116.974,8.754,8.754,0,0,0,0,2.3,1.123,1.123,0,0,0,1.116.974H2.6a.915.915,0,0,1,.828.608.906.906,0,0,1-.163,1l-.722.723a1.127,1.127,0,0,0-.1,1.495,9.707,9.707,0,0,0,1.608,1.608,1.13,1.13,0,0,0,1.494-.1l.724-.724a.916.916,0,0,1,1.018-.155.906.906,0,0,1,.588.82v1.031a1.123,1.123,0,0,0,.974,1.116,8.754,8.754,0,0,0,2.3,0,1.123,1.123,0,0,0,.974-1.116V17.4a.915.915,0,0,1,.608-.828.906.906,0,0,1,1,.163l.724.724a1.132,1.132,0,0,0,1.494.1,9.707,9.707,0,0,0,1.608-1.608,1.127,1.127,0,0,0-.1-1.494l-.724-.724a.917.917,0,0,1-.155-1.018.906.906,0,0,1,.82-.588h1.031a1.123,1.123,0,0,0,1.116-.974,8.754,8.754,0,0,0,0-2.3Zm-1.226,2.026H17.4a2.224,2.224,0,0,0-1.549,3.741l.65.65A8.459,8.459,0,0,1,15.266,16.5l-.65-.65A2.224,2.224,0,0,0,10.875,17.4v.921a7.216,7.216,0,0,1-1.75,0V17.4A2.159,2.159,0,0,0,7.747,15.42a2.154,2.154,0,0,0-2.363.433l-.65.65A8.459,8.459,0,0,1,3.5,15.266l.65-.65A2.224,2.224,0,0,0,2.6,10.875H1.677a7.388,7.388,0,0,1,0-1.75H2.6A2.159,2.159,0,0,0,4.58,7.747a2.152,2.152,0,0,0-.433-2.363l-.65-.65A8.362,8.362,0,0,1,4.734,3.5l.65.65a2.162,2.162,0,0,0,2.382.425A2.15,2.15,0,0,0,9.125,2.6V1.677a7.216,7.216,0,0,1,1.75,0V2.6A2.159,2.159,0,0,0,12.253,4.58a2.158,2.158,0,0,0,2.363-.433l.65-.65A8.362,8.362,0,0,1,16.5,4.734l-.65.65a2.16,2.16,0,0,0-.425,2.382A2.15,2.15,0,0,0,17.4,9.125h.921a7.388,7.388,0,0,1,0,1.75Z"
				})),
				te = n("./src/chat/models/Channel/index.ts"),
				ne = n("./src/chat/selectors/channels.ts"),
				ae = n("./src/chat/selectors/user.ts"),
				se = n("./src/chat/components/ChannelHeaderDropdown/index.m.less"),
				re = n.n(se);
			const ce = "OverlayNavTooltip--Default",
				oe = c.a.wrapped(Object(m.a)(M.a), "Dropdown", re.a);
			oe.displayName = "Dropdown";
			const ie = c.a.wrapped(U.a, "DropdownRow", re.a);
			ie.displayName = "DropdownRow";
			const le = c.a.wrapped(T.c, "DropdownTrigger", re.a),
				de = e => {
					switch (e) {
						case S.b.AddToGroup:
							return {
								text: d.fbt._("Add to group", null, {
									hk: "3ZCBwZ"
								}), icon: s.a.createElement(P, null)
							};
						case S.b.Block:
							return {
								text: d.fbt._("Block", null, {
									hk: "1s7OxS"
								}), icon: s.a.createElement(R, null)
							};
						case S.b.CopyLink:
							return {
								text: d.fbt._("Copy link", null, {
									hk: "2OPNVI"
								}), icon: s.a.createElement(q, null)
							};
						case S.b.Leave:
							return {
								text: d.fbt._("Leave group", null, {
									hk: "zStpq"
								}), icon: s.a.createElement(K, null)
							};
						case S.b.LeaveRoom:
							return {
								text: d.fbt._("Leave room", null, {
									hk: "42PJCV"
								}), icon: s.a.createElement(K, null)
							};
						case S.b.MuteBadging:
							return {
								text: d.fbt._("Disable notification badging", null, {
									hk: "4BzTkp"
								}), icon: s.a.createElement(H, null)
							};
						case S.b.MuteNotifs:
							return {
								text: d.fbt._("Mute Notifications", null, {
									hk: "3EpiuE"
								}), icon: s.a.createElement(H, null)
							};
						case S.b.Profile:
							return {
								text: d.fbt._("View Profile", null, {
									hk: "3qjq7q"
								}), icon: s.a.createElement(J, null)
							};
						case S.b.RenameGroup:
							return {
								text: d.fbt._("Rename group", null, {
									hk: "hTeQ"
								}), icon: s.a.createElement(X, null)
							};
						case S.b.UnmuteBadging:
							return {
								text: d.fbt._("Enable notification badging", null, {
									hk: "87Nfa"
								}), icon: s.a.createElement(G, null)
							};
						case S.b.UnmuteNotifs:
							return {
								text: d.fbt._("Unmute notifications", null, {
									hk: "2TcEwL"
								}), icon: s.a.createElement(G, null)
							};
						case S.b.ViewMembers:
							return {
								text: d.fbt._("View members", null, {
									hk: "PC84"
								}), icon: s.a.createElement(J, null)
							};
						case S.b.Hide:
							return {
								text: d.fbt._("Hide chat", null, {
									hk: "4e3NQf"
								}), icon: s.a.createElement(z, null)
							};
						case S.b.HideGroup:
							return {
								text: d.fbt._("Hide group", null, {
									hk: "PS4Ak"
								}), icon: s.a.createElement(z, null)
							};
						default:
							return {
								text: "Unknown item", icon: s.a.createElement("span", null)
							}
					}
				},
				ue = Object(E.a)({
					currentUserId: ae.a,
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => e.tooltipId === t || e.tooltipId === ce,
					channel: ne.f,
					isModerator: ne.a,
					isChannelLocked: ne.C,
					isChannelBadgingMuted: ne.A,
					isChannelNotifsMuted: ne.D,
					isChannelHidden: ne.B
				});
			var he = Object(r.b)(ue, (e, t) => ({
					onInviteToChannel: () => e(Object(b.c)()),
					onLeaveChannel: () => e(Object(b.d)()),
					onViewMembers: () => e(Object(b.k)()),
					onBlockUser: t => e(Object(g.a)(t)),
					onViewProfile: t => e(Object(b.l)(t)),
					onOpenDropdown: t => e(Object(b.i)(t)),
					onMuteBadging: () => e(Object(b.e)(t)),
					onUnmuteBadging: () => e(Object(b.g)(t)),
					onMuteNotifs: () => e(Object(b.f)(t)),
					onUnmuteNotifs: () => e(Object(b.h)(t)),
					onHideChannel: () => e(Object(b.b)(t)),
					closeTooltip: () => e(Object(f.d)())
				}))(e => {
					const {
						channel: t,
						currentUserId: n,
						isChannelBadgingMuted: a,
						isChannelNotifsMuted: r,
						isChannelHidden: c
					} = e, o = a => {
						const {
							onInviteToChannel: s,
							onBlockUser: r,
							onLeaveChannel: c,
							toggleChannelNameInput: o,
							onViewMembers: l,
							onMuteBadging: d,
							onUnmuteBadging: u,
							onMuteNotifs: m,
							onUnmuteNotifs: b,
							onHideChannel: f
						} = e;
						switch (a) {
							case S.b.AddToGroup:
								return s();
							case S.b.Block: {
								const e = (() => t && t.members.find(e => e.id !== n))();
								return e && r(e.id)
							}
							case S.b.Leave:
							case S.b.LeaveRoom:
								return c();
							case S.b.Profile:
								return i();
							case S.b.RenameGroup:
								return o();
							case S.b.ViewMembers:
								return l();
							case S.b.CopyLink: {
								const {
									channelId: t
								} = e;
								if (t) {
									const e = Object(A.getShortChannelUrl)(t);
									Object(p.a)(e)
								}
								return
							}
							case S.b.MuteBadging:
								return d();
							case S.b.UnmuteBadging:
								return u();
							case S.b.MuteNotifs:
								return m();
							case S.b.UnmuteNotifs:
								return b();
							case S.b.Hide:
							case S.b.HideGroup:
								return f();
							default:
								return h.a
						}
					}, i = () => {
						const {
							channel: t,
							currentUserId: n,
							onViewProfile: a,
							inviterName: s
						} = e;
						if (t && t.channelState === N.b.JOINED) {
							const e = t.members.find(e => e.id !== n);
							if (e && e.name) return a(e.name)
						}
						return s && a(s)
					}, {
						dropdownId: l = ce,
						dropdownIsOpen: u,
						onOpenDropdown: m,
						closeTooltip: b
					} = e, f = (() => {
						if (t) switch (t.type) {
							case te.a.Direct:
								return S.c.directChannel.filter(e => S.d.muteBadging(e, a)).filter(e => S.d.unmuteBadging(e, a)).filter(e => S.d.muteNotifs(e, r)).filter(e => S.d.unmuteNotifs(e, r)).filter(e => S.d.hideChannel(e, c));
							case te.a.Group:
								return S.c.groupChannel.filter(e => S.d.muteBadging(e, a)).filter(e => S.d.unmuteBadging(e, a)).filter(e => S.d.muteNotifs(e, r)).filter(e => S.d.unmuteNotifs(e, r)).filter(e => S.d.hideChannel(e, c))
						}
					})();
					return s.a.createElement(s.a.Fragment, null, !1, s.a.createElement(le, {
						id: l,
						onMouseDown: e => {
							e.stopPropagation(), m(l)
						},
						title: d.fbt._("Settings", null, {
							hk: "4lO98u"
						})
					}, s.a.createElement(ee, null)), s.a.createElement(oe, {
						isOpen: u,
						tooltipId: l,
						container: document.getElementById(k.a),
						excludeContainerPosition: !0,
						closeOnClickOutside: !0
					}, f && f.map((e, t) => s.a.createElement(ie, {
						key: t,
						displayText: de(e).text,
						onClick: () => {
							o(e), b()
						}
					}, de(e).icon))))
				}),
				me = n("./src/chat/components/CloseIcon/index.tsx"),
				pe = n("./src/chat/constants/container.ts");

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const fe = e => s.a.createElement(O.a, be({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M10,15.625a.623.623,0,0,1-.442-.183l-9-9,.884-.884L10,14.116l8.558-8.558.884.884-9,9A.623.623,0,0,1,10,15.625Z"
			}));

			function ge() {
				return (ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			fe.displayName = "NavMinimize";
			const Ce = e => s.a.createElement(O.a, ge({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M15.838,16.5a1.377,1.377,0,0,1-1.375,1.375h-11A1.377,1.377,0,0,1,2.088,16.5V5.5A1.377,1.377,0,0,1,3.463,4.125H7.11V2.875H3.463A2.629,2.629,0,0,0,.838,5.5v11a2.629,2.629,0,0,0,2.625,2.625h11A2.629,2.629,0,0,0,17.088,16.5V12.9h-1.25Z"
			}), s.a.createElement("path", {
				d: "M18.5.875h-5v1.25h3.491L8.558,10.558l.884.884,8.433-8.433V6.5h1.25v-5A.625.625,0,0,0,18.5.875Z"
			}));
			Ce.displayName = "NavPopout";
			var Ee = n("./src/chat/selectors/app.ts"),
				Oe = n("./src/chat/components/OverlayNavButtonGroup/index.m.less"),
				ve = n.n(Oe);
			const _e = c.a.wrapped(T.c, "IconButton", ve.a),
				je = c.a.wrapped(me.a, "CloseButton", ve.a);
			je.displayName = "CloseButton";
			const ye = c.a.span("Wrapper", ve.a);
			var Ie = Object(r.b)(() => Object(E.a)({
					containerSize: e => e.container.size,
					inviterName: ne.z,
					isReady: Ee.f
				}), e => ({
					close: () => e(Object(i.sizeChanged)(pe.a.HIDDEN)),
					minimize: () => {
						e(Object(i.sizeChanged)(pe.a.MINIMIZED)), e(Object(l.o)())
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
					const u = c && t === pe.a.EMBED;
					return s.a.createElement(ye, null, a && s.a.createElement(he, {
						channelId: e,
						dropdownId: n,
						inviterName: r,
						toggleChannelNameInput: l
					}), u && s.a.createElement(s.a.Fragment, null, s.a.createElement(_e, {
						onClick: i,
						title: d.fbt._("Open chat in new window", null, {
							hk: "3S8f7W"
						})
					}, s.a.createElement(Ce, null)), s.a.createElement(_e, {
						onClick: o,
						title: d.fbt._("Minimize chat", null, {
							hk: "1gym9X"
						})
					}, s.a.createElement(fe, null)), s.a.createElement(je, null)))
				}),
				xe = n("./src/lib/classNames/index.ts"),
				we = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				Ne = n("./src/chat/controls/Counter/index.tsx"),
				Se = n("./src/chat/components/RenameGroupInput/index.m.less"),
				ke = n.n(Se);
			const Te = c.a.wrapped(e => s.a.createElement("span", {
					className: Object(xe.a)({
						[ke.a.visible]: e.isVisible
					}, e.className)
				}, e.children), "InputWrapper", ke.a),
				Me = c.a.div("InputContent", ke.a),
				Ue = c.a.span("InputControls", ke.a),
				Ae = c.a.wrapped(T.a, "CancelButton", ke.a),
				De = c.a.wrapped(T.a, "SaveButton", ke.a);
			class Pe extends a.Component {
				constructor() {
					super(...arguments), this.displayName = "RenameGroupInput", this.state = {
						groupName: this.props.name || ""
					}, this.getAvailableCharacters = () => N.e - this.state.groupName.length, this.handleChannelNameInput = e => this.setState({
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
					return s.a.createElement(Te, {
						isVisible: t
					}, s.a.createElement(Me, null, s.a.createElement(we.a, {
						handleChannelNameInput: a,
						placeholder: d.fbt._("Rename group", null, {
							hk: "1mjXbx"
						}),
						withBackground: !0,
						value: n
					}, s.a.createElement(Ne.a, {
						count: c
					})), s.a.createElement(Ue, null, s.a.createElement(Ae, {
						secondaryNoBorder: !0,
						onClick: e
					}, d.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(De, {
						primaryNoBorder: !0,
						disabled: c < 0 || c >= N.e,
						onClick: r
					}, d.fbt._("Save", null, {
						hk: "1qAtYt"
					})))))
				}
			}
			var Le = Object(r.b)(void 0, e => ({
					onUpdateChannelName: t => e(Object(b.j)(t))
				}))(Pe),
				Re = n("./src/chat/components/ToastNotification/index.tsx"),
				Be = n("./src/chat/helpers/dom.ts"),
				He = n("./src/chat/components/OverlayNav/index.m.less"),
				Fe = n.n(He);
			const Ge = c.a.nav("Nav", Fe.a),
				We = c.a.span("TitleWrapper", Fe.a),
				ze = c.a.span("Title", Fe.a);
			ze.displayName = "Title";
			const Ve = c.a.span("SubTitle", Fe.a);
			Ve.displayName = "SubTitle";
			const Ke = c.a.wrapped(({
					className: e,
					userName: t
				}) => {
					const n = Object(A.viewProfileUrl)(t);
					return s.a.createElement("a", {
						onClick: e => e.stopPropagation(),
						target: o.c.BLANK,
						rel: o.b,
						className: e,
						href: n
					}, t)
				}, "UserProfileTitle", Fe.a),
				Ze = Object(E.a)({
					isEmbedded: Ee.d
				}),
				qe = Object(r.b)(Ze, e => ({
					minimize: () => {
						e(Object(i.sizeChanged)(pe.a.MINIMIZED)), e(Object(l.o)())
					}
				}));
			class Qe extends a.Component {
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
					const {
						props: {
							channelId: e,
							dropdownId: t,
							isEmbedded: n,
							minimize: a,
							showMenu: r,
							subTitle: c,
							title: o,
							channelType: i
						},
						state: {
							isRenameGroupInputVisible: l
						},
						hideChannelNameInput: d,
						toggleChannelNameInput: u
					} = this;
					return s.a.createElement(Ge, null, s.a.createElement(We, {
						onClick: n ? Object(Be.b)(a) : void 0
					}, i === te.a.Direct ? s.a.createElement(Ke, {
						userName: o
					}) : s.a.createElement(ze, null, o), s.a.createElement(Ve, null, c)), e && s.a.createElement(Ie, {
						channelId: e,
						toggleChannelNameInput: u,
						showMenu: !!r,
						dropdownId: t
					}), e && o && s.a.createElement(Le, {
						channelId: e,
						name: o,
						isVisible: l,
						hideChannelNameInput: d
					}), s.a.createElement(Re.a, null))
				}
			}
			t.a = qe(Qe)
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
				return g
			})), n.d(t, "a", (function() {
				return I
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/CSSVariableProvider/index.tsx"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				l = n("./src/chat/components/Root/index.tsx"),
				d = n("./src/chat/constants/container.ts"),
				u = n("./src/chat/constants/zIndex.ts"),
				h = n("./src/chat/helpers/chatSelector.ts"),
				m = n("./src/chat/components/PortalContainer/index.m.less"),
				p = n.n(m);
			const {
				embed: b,
				hidden: f
			} = d.b;

			function g(e) {
				return void 0 !== e ? e : -1
			}
			const C = o.a.wrapped(e => s.a.createElement("div", {
					className: e.className,
					style: {
						zIndex: u.a
					}
				}, e.children), "BasePortalContainer", p.a),
				E = o.a.wrapped(e => s.a.createElement("div", {
					className: e.className,
					style: {
						zIndex: u.a,
						width: `${g(b.width)}px`,
						height: `${g(b.height)}px`
					}
				}, e.children), "EmbedPortalContainer", p.a),
				O = o.a.wrapped(e => s.a.createElement("div", {
					className: e.className,
					style: {
						zIndex: u.a,
						width: `${g(f.width)}px`,
						height: `${g(f.height)}px`
					}
				}, e.children), "HiddenPortalContainer", p.a),
				v = o.a.wrapped(i.a, "MinimizedRedesignPortalContainer", p.a),
				_ = C,
				j = Object(h.a)({
					container: e => e && e.container && e.container.size
				});

			function y(e) {
				switch (e.container) {
					case d.a.EMBED:
						return s.a.createElement(E, null, e.children);
					case d.a.HIDDEN:
						return s.a.createElement(O, null, e.children);
					case d.a.FULL:
						return s.a.createElement(_, null, e.children);
					case d.a.MINIMIZED:
						return s.a.createElement(v, null);
					default:
						return s.a.createElement(E, null, e.children)
				}
			}

			function I(e, t) {
				const n = Object(r.b)(j)(y);
				return s.a.createElement("div", null, Object(c.d)(s.a.createElement(n, null, Object(l.a)(e, t)), document.body))
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
				return _
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
			const b = l.a.div("OverlayContent", u.a),
				f = l.a.div("Info", u.a);
			var g = () => s.a.createElement(p.a, {
					innerContent: !0
				}, s.a.createElement(h.a, {
					title: i.fbt._("Fetching messages", null, {
						hk: "2MERJq"
					})
				}), s.a.createElement(b, null, s.a.createElement(f, null, s.a.createElement(m.b, null)))),
				C = n("./src/chat/components/Sidebar/index.tsx"),
				E = n("./src/chat/selectors/app.ts");
			var O = ({
					children: e
				}) => {
					const t = Object(o.e)(E.e),
						n = Object(o.e)(E.c);
					return t ? null : n ? e : s.a.createElement(s.a.Fragment, null, s.a.createElement(C.a, null, s.a.createElement(m.a, null)), s.a.createElement(g, null))
				},
				v = n("./src/chat/components/ThemeProvider/index.tsx");

			function _(e, t) {
				return s.a.createElement(v.a, {
					className: c.a
				}, s.a.createElement(e, null, s.a.createElement(r.d, {
					component: e => s.a.createElement(O, null, s.a.createElement(r.f, {
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
					}), this.addScrollHandlers = this.addScrollHandlers.bind(this), this.preventParentScroll = this.preventParentScroll.bind(this), this.paginateContent = this.paginateContent.bind(this), this.handleFocus = this.handleFocus.bind(this), this.scrollHandlers = [this.preventParentScroll, this.paginateContent]
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
				handleFocus() {
					var e;
					this.props.onFocus && (null === (e = this.props) || void 0 === e || e.onFocus())
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
						className: t,
						onKeyDown: n
					} = this.props;
					return i.a.createElement(m, {
						className: t,
						innerRef: e => this.list = e,
						onFocus: this.handleFocus,
						onKeyDown: n,
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
				return Se
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./src/lib/lessComponent.tsx"),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./src/chat/actions/tracking.ts"),
				d = n("./src/chat/components/Sidebar/CreateChannel/index.m.less"),
				u = n.n(d),
				h = n("./src/chat/helpers/urls/index.ts"),
				m = n("./src/chat/icons/svgs/ChatNew/index.tsx");
			const p = c.a.wrapped(m.a, "ChatNew", u.a),
				b = c.a.span("Button", u.a);
			var f = Object(o.b)(null, e => ({
					createChannel: () => {
						e(Object(i.b)(Object(h.channelUrl)("create"))), e(Object(l.g)())
					}
				}))(e => r.a.createElement(b, {
					onClick: e.createChannel,
					title: a.fbt._("Start a new chat", null, {
						hk: "3C4ek3"
					}),
					tabIndex: 0
				}, r.a.createElement(p, null))),
				g = n("./src/chat/actions/channel.ts"),
				C = n("./node_modules/lodash/values.js"),
				E = n.n(C),
				O = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				v = n("./src/lib/classNames/index.ts"),
				_ = n("./src/chat/components/ChatIcon/index.tsx"),
				j = n("./src/chat/constants/messages.ts"),
				y = n("./src/chat/helpers/linkParser/index.ts"),
				I = n("./src/chat/components/Message/Preview.m.less"),
				x = n.n(I);
			const w = e => {
					if (e.isInvited) return [a.fbt._("Wants to message you", null, {
						hk: "3CbciS"
					})];
					if (!e.message) return [];
					const t = (({
						currentUserId: e,
						isGroup: t,
						message: n
					}) => t && n && n.sender ? e === n.sender.userId ? a.fbt._("You:", null, {
						hk: "wP43r"
					}) : `${n.sender.nickname}:` : "")(e);
					switch (e.message.messageData.type) {
						case j.c.TEXT: {
							const {
								value: n
							} = e.message.messageData;
							return [t, " ", Object(y.b)(n) ? a.fbt._("Shared a link", null, {
								hk: "4bNVW7"
							}) : n]
						}
						case j.c.POST:
							return [t, " ", a.fbt._("Shared a post", null, {
								hk: "1hd8l1"
							}), " ", e.message.messageData.subreddit];
						case j.c.COMMENT:
							return [t, " ", a.fbt._("Shared a comment", null, {
								hk: "1cCjoi"
							}), " ", e.message.messageData.subreddit];
						case j.c.EMBED:
							return [t, " ", a.fbt._("Shared a link", null, {
								hk: "4bNVW7"
							}), " ", e.message.messageData.value];
						case j.c.SUBREDDIT:
							return [t, " ", a.fbt._("Shared a community", null, {
								hk: "t78ZE"
							}), " ", e.message.messageData.subreddit];
						case j.c.SNOOMOJI:
							return [t, " ", a.fbt._("Sent a Snoomoji", null, {
								hk: "4hD30K"
							})];
						default:
							return []
					}
				},
				N = c.a.wrapped(e => r.a.createElement("sub", {
					className: Object(v.a)(e.className, {
						[x.a.active]: e.isActive,
						[x.a.unread]: e.isInvited || e.isUnread
					})
				}, w(e)), "MessagePreview", x.a);
			var S = n("./src/chat/constants/channels.ts"),
				k = n("./src/chat/controls/Counter/index.tsx"),
				T = n("./src/chat/helpers/chatSelector.ts"),
				M = n("./src/chat/controls/Svg/index.tsx");
			var U = e => r.a.createElement(M.a, {
					className: e.className,
					disable: !0,
					viewBox: "0 0 9 12"
				}, r.a.createElement("g", {
					transform: "translate(-321.000000, -286.000000)"
				}, r.a.createElement("path", {
					d: "M328.379326,295.820899 L329.259195,297.344876 L329.259195,297.344876 C329.33686,297.479395 329.29077,297.651405 329.15625,297.72907 L329.15625,297.72907 C329.02173,297.806735 328.84972,297.760645 328.772055,297.626126 L322.303305,286.421922 L322.303305,286.421922 C322.22564,286.287402 322.27173,286.115392 322.40625,286.037727 L322.40625,286.037727 L322.40625,286.037727 C322.54077,285.960062 322.71278,286.006152 322.790445,286.140672 L323.811767,287.909655 C324.114951,287.754406 324.444225,287.640531 324.791552,287.575791 C324.78955,287.555022 324.784974,287.534806 324.784974,287.513206 C324.784974,287.131053 325.105006,286.820899 325.49997,286.820899 C325.894933,286.820899 326.214965,287.131053 326.214965,287.513206 C326.214965,287.534806 326.210389,287.555022 326.208387,287.575791 C327.841151,287.88013 329.074947,289.270283 329.074947,290.94013 L329.074947,293.333299 C329.074947,294.039453 329.364664,294.716806 329.880318,295.216099 L329.894618,295.229945 C330.119699,295.447883 329.960398,295.820899 329.641796,295.820899 L328.379326,295.820899 Z M326.996393,295.820899 L321.358143,295.820899 C321.039827,295.820899 320.88024,295.447883 321.105321,295.229945 L321.119621,295.216099 C321.635276,294.716806 321.924992,294.039453 321.924992,293.333299 L321.924992,290.94013 C321.924992,290.051737 322.274213,289.242509 322.846942,288.633839 L326.996393,295.820899 Z M325.78125,297.508399 C325.151952,297.508399 324.611984,297.045274 324.375,296.383399 L327.1875,296.383399 C326.950516,297.045274 326.410548,297.508399 325.78125,297.508399 Z"
				}))),
				A = n("./src/chat/selectors/contacts.ts"),
				D = n("./src/chat/components/ChatListItem/index.m.less"),
				P = n.n(D);
			const L = c.a.wrapped(_.a, "ChatIcon", P.a),
				R = c.a.div("ItemTitle", P.a),
				B = c.a.div("ItemControls", P.a),
				H = c.a.span("ChannelName", P.a),
				F = c.a.div("Description", P.a),
				G = c.a.wrapped(e => r.a.createElement("h4", {
					className: Object(v.a)(e.className, {
						[P.a.active]: e.active,
						[P.a.unread]: e.unread
					})
				}, e.children), "ItemTitleName", P.a),
				W = Object(T.a)({
					inviterContact: (e, t) => {
						const n = e.channels.models[t.channelId];
						return Object(A.d)(e, n)
					}
				});
			var z = Object(o.b)(W)(c.a.wrapped(e => {
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
						muted: m,
						unread: p,
						mentionCount: b
					} = e, f = o === S.b.INVITED, g = f ? Object(h.channelAction)(n, S.a.VIEW_INVITE) : Object(h.channelUrl)(n);
					return r.a.createElement(O.a, {
						to: g,
						className: Object(v.a)(t, {
							[P.a.selected]: c,
							[P.a.unread]: p
						})
					}, m && r.a.createElement(B, null, r.a.createElement(U, null)), r.a.createElement(L, {
						userId: i,
						secondUserId: l
					}), r.a.createElement(R, null, r.a.createElement(G, {
						unread: p || f,
						active: c
					}, r.a.createElement(H, null, d)), r.a.createElement(F, null, r.a.createElement(N, {
						currentUserId: a,
						isGroup: s,
						isInvited: f,
						isUnread: p,
						isActive: c,
						message: u
					}), !!b && r.a.createElement(k.b, {
						count: b
					}))))
				}, "ChatListItem", P.a)),
				V = n("./src/chat/components/Sidebar/SidebarDivider/index.m.less"),
				K = n.n(V);
			const Z = c.a.div("Divider", K.a),
				q = e => r.a.createElement(Z, null, e.children);
			var Q = n("./src/chat/controls/InviteExpander/index.m.less"),
				J = n.n(Q),
				Y = n("./src/chat/controls/TextButton.tsx");
			const X = c.a.div("ButtonContainer", J.a),
				$ = c.a.div("LoadingIndicator", J.a);
			class ee extends r.a.Component {
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
					return t ? r.a.createElement($, {
						role: "progressbar"
					}, a.fbt._("Loading channels...", null, {
						hk: "4gUIDq"
					})) : r.a.createElement(X, {
						className: e
					}, r.a.createElement(Y.a, {
						onClick: this.onExpand,
						hidden: n && !s
					}, a.fbt._("Show more", null, {
						hk: "3aeUi6"
					})), r.a.createElement(Y.a, {
						onClick: this.onCollapse,
						hidden: !n
					}, a.fbt._("Collapse", null, {
						hk: "aLyRg"
					})))
				}
			}
			var te = Object(o.b)(null, e => ({
					onTrackExpandToggle: t => e(t ? Object(l.j)() : Object(l.e)()),
					expandInviteList: () => e(Object(g.C)()),
					collapseInviteList: () => e(Object(g.y)()),
					fetchInvitedChannels: () => e(Object(g.E)())
				}))(ee),
				ne = n("./src/chat/models/Channel/index.ts");
			const ae = (e, t) => t.type === ne.a.Group ? t.name && "Group Channel" !== t.name ? t.name : t.members.map(e => e.name).join(", ") : e.firstUser.name,
				se = (e, t) => {
					const n = t.channelState === S.b.JOINED,
						a = t.channelState === S.b.INVITED;
					let s, r, c;
					for (const o of t.members) o.id === e ? r = o : o.id === (t.inviter && t.inviter.id) ? c = o : (!s || s.name.toLocaleLowerCase() > o.name.toLocaleLowerCase()) && (s = o);
					return t.type === ne.a.Direct ? {
						firstUser: s || t.inviter
					} : n && r && !s && !c ? {
						firstUser: r
					} : n && r && c ? {
						firstUser: r,
						secondUser: c
					} : n && r && s ? {
						firstUser: r,
						secondUser: s
					} : a && r && c ? {
						firstUser: r,
						secondUser: c
					} : a && r && t.inviter ? {
						firstUser: r,
						secondUser: t.inviter
					} : {
						firstUser: t.inviter
					}
				};
			var re = n("./src/chat/selectors/channels.ts"),
				ce = n("./src/chat/selectors/user.ts");
			const oe = Object(T.a)({
				currentUserId: ce.a,
				invitedChannels: re.y,
				selectedChannelId: e => Object(re.s)(e, "channelId"),
				fetchingInvitedChannels: re.c,
				inviteListExpanded: re.x,
				hasMoreInvitedChannels: re.v
			});
			var ie = Object(o.b)(oe)(e => {
					const {
						currentUserId: t,
						fetchingInvitedChannels: n,
						hasMoreInvitedChannels: s,
						invitedChannels: c,
						inviteListExpanded: o,
						selectedChannelId: i
					} = e;
					let l = c.slice(0, 2);
					return o && (l = c), c && c.length ? r.a.createElement(r.a.Fragment, null, r.a.createElement(q, null, a.fbt._("Requests", null, {
						hk: "eDJtL"
					})), E()(l).map((e, n) => {
						const a = se(t, e),
							{
								channelId: s,
								lastMessage: c,
								channelState: o,
								unreadMessageCount: l,
								unreadMentionCount: d
							} = e;
						return r.a.createElement(z, {
							key: s,
							channelId: s,
							channelState: o,
							name: ae(a, e),
							isSelected: s === i,
							isGroup: e.type === ne.a.Group,
							message: c,
							unread: !!l,
							mentionCount: d,
							currentUserId: t,
							userId: a && a.firstUser ? a && a.firstUser.id : "",
							secondUserId: a && a.secondUser ? a && a.secondUser.id : ""
						})
					}), c.length > 2 ? r.a.createElement(te, {
						fetchingInvitedChannels: n,
						hasMoreInvitedChannels: s,
						inviteListExpanded: o
					}) : null) : null
				}),
				le = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				de = n("./src/chat/components/BasicJoined/index.m.less"),
				ue = n.n(de);
			const he = c.a.p("Text", ue.a),
				me = Object(T.a)({
					currentUserId: ce.a,
					fetchingJoinedChannels: re.d,
					hasMoreJoinedChannels: re.w,
					joinedChannels: re.H,
					selectedChannelId: e => Object(re.s)(e, "channelId"),
					hasInvitedChannels: re.u
				});
			var pe = Object(o.b)(me, e => ({
					fetchJoinedChannels: () => e(Object(g.F)())
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
					}, i && r.a.createElement(q, null, a.fbt._("Chats", null, {
						hk: "Bzl0R"
					})), (!c || !c.length) && r.a.createElement(he, null, a.fbt._("All the direct chats that you're in will show up here", null, {
						hk: "4A1UXC"
					})), c.map(e => {
						const t = se(n, e),
							{
								channelId: a,
								lastMessage: s,
								channelState: c,
								unreadMessageCount: i,
								unreadMentionCount: l
							} = e;
						return r.a.createElement(z, {
							key: a,
							channelId: a,
							channelState: c,
							name: ae(t, e),
							isSelected: a === o,
							isGroup: e.type === ne.a.Group,
							message: s,
							unread: !!i,
							mentionCount: l,
							currentUserId: n,
							userId: t && t.firstUser ? t && t.firstUser.id : "",
							secondUserId: t && t.secondUser ? t && t.secondUser.id : ""
						})
					}), s && r.a.createElement(le.a, null))
				}),
				be = n("./src/chat/components/Scroller/index.tsx"),
				fe = n("./src/chat/components/Sidebar/DirectsPanel/index.m.less"),
				ge = n.n(fe);
			const Ce = c.a.wrapped(be.b, "Scroller", ge.a),
				Ee = Object(T.a)({
					fetchingJoinedChannels: re.d,
					hasMoreJoinedChannels: re.w
				});
			var Oe = Object(o.b)(Ee, e => ({
					fetchJoinedChannels: () => e(Object(g.F)())
				}))(e => {
					const {
						fetchingJoinedChannels: t,
						fetchJoinedChannels: n,
						hasMoreJoinedChannels: a
					} = e;
					return r.a.createElement(Ce, {
						loadMoreRows: () => {
							!t && a && n()
						},
						threshold: 0
					}, r.a.createElement(ie, null), r.a.createElement(pe, null))
				}),
				ve = n("./src/chat/components/Sidebar/index.m.less"),
				_e = n.n(ve);
			class je extends s.Component {
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
			const ye = c.a.div("Wrapper", _e.a),
				Ie = c.a.wrapped(je, "Tabs", _e.a),
				xe = c.a.wrapped(({
					children: e,
					className: t
				}) => r.a.createElement("div", {
					className: t
				}, e), "TabList", _e.a),
				we = c.a.wrapped(({
					active: e,
					children: t,
					className: n
				}) => r.a.createElement("div", {
					className: Object(v.a)(n, {
						[_e.a.active]: e
					})
				}, t), "Tab", _e.a),
				Ne = c.a.div("CreateChannelWrapper", _e.a),
				Se = e => {
					const {
						children: t
					} = e;
					return r.a.createElement(ye, null, r.a.createElement(Ie, null, r.a.createElement(xe, null, r.a.createElement(we, null, a.fbt._("Chat", null, {
						hk: "2by6VV"
					}), r.a.createElement(k.b, null), r.a.createElement(Ne, null, r.a.createElement(f, null)))), t))
				},
				ke = r.a.memo((function(e) {
					return r.a.createElement(Se, e, r.a.createElement(Oe, null))
				}));
			t.b = ke
		},
		"./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.m.less": function(e, t, n) {
			e.exports = {
				placeholderWrapper: "hqcDdVTJOpp-hF4RbvBSW",
				placeholderBody: "_3dFum9eW5nOaVI6VJ0M5Zs",
				placeholderAvatar: "_37RHvnrtqVT9M5__WmURXe",
				placeholderChannelContent: "_19Hsl7P85oEzmiSo1VutwH",
				placeholderMessageContent: "_1v9KmS8wDdLOHsiFvWdtIF",
				animation: "_1lS5iWxhcJqk-ShxyxC6tw",
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
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return h
			}));
			var a, s = n("./node_modules/react/index.js"),
				r = n.n(s),
				c = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.m.less"),
				o = n.n(c),
				i = n("./src/lib/classNames/index.ts");
			! function(e) {
				e.XXS = "w30", e.XS = "w40", e.S = "w50", e.M = "w60", e.L = "w70", e.XL = "w80", e.XXL = "w90"
			}(a || (a = {}));
			const l = ({
					width: e
				}) => r.a.createElement("li", {
					className: Object(i.a)(o.a.placeholderWrapper, o.a[e])
				}, r.a.createElement("span", {
					className: Object(i.a)(o.a.placeholderMessageContent)
				})),
				d = ({
					width: e
				}) => r.a.createElement("li", {
					className: Object(i.a)(o.a.placeholderWrapper, o.a[e])
				}, r.a.createElement("span", {
					className: Object(i.a)(o.a.placeholderAvatar)
				}), r.a.createElement("span", {
					className: Object(i.a)(o.a.placeholderChannelContent)
				})),
				u = () => r.a.createElement("ol", null, r.a.createElement(l, {
					width: a.S
				}), r.a.createElement(l, {
					width: a.XL
				}), r.a.createElement(l, {
					width: a.XXS
				}), r.a.createElement(l, {
					width: a.S
				}), r.a.createElement(l, {
					width: a.L
				}), r.a.createElement(l, {
					width: a.XXS
				})),
				h = () => r.a.createElement("ol", null, r.a.createElement(d, {
					width: a.L
				}), r.a.createElement(d, {
					width: a.XL
				}), r.a.createElement(d, {
					width: a.S
				}), r.a.createElement(d, {
					width: a.M
				}), r.a.createElement(d, {
					width: a.L
				}), r.a.createElement(d, {
					width: a.XL
				}))
		},
		"./src/chat/components/Snoomoji/index.m.less": function(e, t, n) {
			e.exports = {
				SnooImg: "_1b2msiYMaWuRyunCT4E35G",
				snooImg: "_1b2msiYMaWuRyunCT4E35G"
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
				f = n.n(b);
			const g = [d.a.ConnectionClosed, d.a.ConnectionPending],
				C = e => g.includes(e),
				E = i.a.wrapped(e => r.a.createElement("span", {
					className: Object(o.a)(e.className, {
						[f.a.pending]: C(e.toast)
					}),
					style: {
						height: e.toast ? "2.5em" : "0"
					}
				}, e.children), "Wrapper", f.a),
				O = i.a.span("Text", f.a),
				v = i.a.img("SnooImg", f.a);
			v.displayName = "SnooImg";
			const _ = i.a.button("Button", f.a);
			_.displayName = "Button";
			const j = i.a.wrapped(h.a, "RefreshIcon", f.a),
				y = Object(u.a)({
					toast: e => e.toast
				}),
				I = Object(c.b)(y),
				x = r.a.createElement(v, {
					src: m
				}),
				w = r.a.createElement(v, {
					src: p
				}),
				N = ({
					className: e,
					toast: t
				}) => r.a.createElement(E, {
					toast: t,
					className: e
				}, t && (e => {
					switch (e) {
						case d.a.ConnectionOpen:
							return x;
						case d.a.ConnectionPending:
						case d.a.ConnectionClosed:
							return w;
						default:
							return null
					}
				})(t), r.a.createElement(O, null, t && (e => {
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
						default:
							return null
					}
				})(t)), t && (e => e === d.a.ConnectionClosed ? r.a.createElement(_, {
					onClick: l.g
				}, r.a.createElement(j, null)) : null)(t));
			N.displayName = "ToastNotification";
			t.a = I(N)
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
				ViewMembers: f
			} = a, g = [d, p, u, b], C = {
				directChannel: [h, r, ...g, c],
				groupChannel: [s, m, f, ...g, o, l],
				members: [r, i]
			}, E = {
				muteBadging: (e, t) => !(e === d && t),
				unmuteBadging: (e, t) => !(e === p && !t),
				muteNotifs: (e, t) => !(e === u && t),
				unmuteNotifs: (e, t) => !(e === b && !t),
				hideChannel: (e, t) => !((e === c || e === o) && t)
			}, O = "dropdown-container"
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
		"./src/chat/constants/zIndex.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			const a = 51
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
				f = n.n(b);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const C = o.a.a("Button", f.a),
				E = o.a.button("Button", f.a),
				O = o.a.button("MessageIconButton", f.a),
				v = e => {
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
				_ = o.a.wrapped(v, "IconButton", f.a),
				j = e => r.a.createElement(O, g({}, e, {
					title: a.fbt._("Report message", null, {
						hk: "2XKeNq"
					})
				}), r.a.createElement(u, null)),
				y = e => r.a.createElement(O, g({}, e, {
					title: a.fbt._("Delete message", null, {
						hk: "Z4Zm0"
					})
				}), r.a.createElement(p.a, null)),
				I = e => r.a.createElement(O, g({}, e, {
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

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const g = c.a.wrapped(e => s.a.createElement("circle", {
				className: e.className,
				cy: "10",
				cx: "10",
				r: "9"
			}), "StyledCircle", b.a);
			var C = e => s.a.createElement(o.a, f({}, e, {
					viewBox: "0 0 20 20"
				}), s.a.createElement("g", null, s.a.createElement(g, null))),
				E = n("./src/chat/controls/Checkbox/index.m.less"),
				O = n.n(E);
			const v = c.a.input("HiddenInput", O.a),
				_ = c.a.wrapped(m, "Checked", O.a),
				j = c.a.wrapped(C, "Unchecked", O.a),
				y = c.a.span("Wrapper", O.a),
				I = c.a.span("Content", O.a),
				x = c.a.span("Control", O.a),
				w = c.a.label("CheckInput", O.a);
			t.a = e => s.a.createElement(w, {
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
		"./src/chat/controls/Overlay/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/controls/Overlay/index.m.less"),
				o = n.n(c);
			const i = r.a.div("Content", o.a),
				l = r.a.wrapped(e => {
					const t = e.form ? "form" : "div",
						[n, a, r] = s.a.Children.toArray(e.children),
						c = {
							className: e.className,
							onSubmit: e.onSubmit
						},
						o = s.a.createElement(s.a.Fragment, null, n, e.innerContent ? a : s.a.createElement(i, null, a), r);
					return s.a.createElement(t, c, o)
				}, "Overlay", o.a);
			l.displayName = "Overlay", t.a = l
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
				f = n("./src/chat/selectors/promos.ts"),
				g = n("./src/chat/tracking/sendEvent.ts"),
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
							const t = Object(c.parse)(n.data.href).pathname || b.rootUrl;
							e.dispatch(Object(r.b)(t)), e.dispatch(Object(d.sizeChanged)(h.a.EMBED));
							break
						}
						case v.Websocket:
							e.dispatch(Object(u.b)());
							break;
						case v.Expand: {
							const t = e.getState();
							e.dispatch(Object(d.sizeChanged)(h.a.EMBED));
							const a = t.platform.currentPage;
							a && a.meta && a.meta.name === o.Eb.CHAT_MINIMIZE && e.dispatch(Object(l.N)());
							const {
								action: s,
								noun: r,
								source: c
							} = n.data.telemetry;
							((e, t, n, a) => {
								Object(g.a)({
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
						const t = Object(f.b)(e.getState()),
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
				return o = Object(a.b)(s.o.CHAT, "last_selected_channel_id", t || "unknown"), Object(a.a)(o)
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
				return o = Object(a.b)(s.o.CHAT, "last_selected_channel_id", i), e => t => {
					const n = e(t);
					switch (t.type) {
						case r.a:
							Object(a.c)(o, t.payload.channelId, s.ib)
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
				f = n("./src/chat/customMiddleware/noop.ts"),
				g = n("./src/chat/selectors/platform.ts"),
				C = n("./src/chat/selectors/sendbird.ts");
			const E = (e, t) => {
				const n = t && t.type === o.SIZE_CHANGED ? t.payload : e.container.size,
					a = n === p.a.MINIMIZED || n === p.a.HIDDEN,
					s = t && t.type === l.a ? t.payload && t.payload.routeMatch && t.payload.routeMatch.route.meta.name === r.Eb.CHAT_MINIMIZE : e.platform.currentPage && e.platform.currentPage.meta && e.platform.currentPage.meta.name === r.Eb.CHAT_MINIMIZE;
				return !a && s
			};
			t.a = e => {
				if ("undefined" == typeof window) return f.a;
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
				Object(g.a)(e.getState()) === r.Eb.CHAT_MINIMIZE ? s()(async () => {
					E(e.getState()) ? n() : (await e.dispatch(Object(d.m)(!1)), e.getState().sendbird.session.token && await e.dispatch(Object(i.b)()))
				}) : n();
				return i => f => {
					const g = e.getState(),
						O = Object(C.a)(g) === b.b.Closed,
						v = Object(C.e)(g);
					switch (f.type) {
						case o.SIZE_CHANGED: {
							if (!f.payload) break;
							const t = f.payload !== p.a.MINIMIZED && f.payload !== p.a.HIDDEN;
							t && (clearTimeout(a), a = null), O && t && !v && n(), !v || f.payload !== p.a.HIDDEN && f.payload !== p.a.MINIMIZED || (a = setTimeout(() => {
								e.dispatch(Object(h.f)())
							}, 10 * r.db));
							break
						}
						case l.a: {
							const t = E(g, f);
							O && t ? n() : t && e.dispatch(Object(c.N)());
							break
						}
						case d.h:
							if (!f.payload) break;
							if (!f.payload.active) break;
							s()(async () => {
								if (await e.dispatch(Object(u.d)()), f.payload && f.payload.token) {
									const {
										token: t
									} = f.payload;
									await e.dispatch(Object(h.e)(t))
								}
							});
							break;
						case m.b:
							e.dispatch(Object(h.f)()), clearTimeout(t), clearTimeout(a), t = null, a = null
					}
					return i(f)
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
			const l = 5 * r.db;
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
				return e => t => (t.type !== o.a && t.type !== o.c || d(t.payload), t.type === c.u && r(), t.type === o.b && (clearTimeout(n), n = null), e(t))
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
				f = n("./src/telemetry/models/Timer.ts"),
				g = n("./src/chat/tracking/fields/chat.ts"),
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
							...Object(g.p)(e),
							...Object(g.r)(e)
						},
						timer: {
							...E(f.TimerType.ChatLoadInboxNew),
							...O(t)
						},
						...Object(C.a)(e)
					})
				})(e, (e => Date.now() - e)(t))),
				x = s()(e => Object(m.d)(e) && w(e)),
				w = e => {
					Object(y.d)(e)
				},
				N = Object(r.c)((e, t, n) => {
					Object(h.F)(e) ? ((e, t) => {
						Object(p.a)({
							noun: "channel_cached",
							source: b.b.ChatPerformance,
							action: b.a.Load,
							chat: {
								...Object(g.g)(e)
							},
							timer: {
								...E(f.TimerType.ChatLoadChannelCached),
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
								...Object(g.g)(e)
							},
							timer: {
								...E(f.TimerType.ChatLoadChannelNew),
								...O(t)
							},
							...Object(C.a)(e)
						})
					})(t, n)
				}),
				S = e => {
					Object(m.c)(e) === u.a.CREATE && Object(_.g)(e)
				},
				k = e => {
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
							...Object(C.a)(e)
						})
					})(e)
				};
			t.a = e => t => n => a => {
				const s = n(a),
					r = t.getState();
				switch (a.type) {
					case i.a:
						I(r, e), S(r);
						break;
					case c.p:
						N(r, !0);
						break;
					case c.r:
						S(r), x(r);
						break;
					case c.q:
						I(r, e), (e => {
							Object(m.c)(e) === u.a.VIEW_INVITE && Object(j.i)(e)
						})(r), (e => Object(m.f)(e) && Object(v.c)(e))(r), N(r), k(r);
						break;
					case o.l:
					case l.c:
						I(r, e);
						break;
					case d.b:
						w(r)
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
				Object(o.c)(l, e, 5 * i.db)
			}, 5 * i.Ib, {
				leading: !1,
				trailing: !0
			});
			let h;
			const m = () => {
				h && clearInterval(h), h = setInterval(() => {
					void 0 === Object(o.a)(l) && Object(r.b)()
				}, 5 * i.db)
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
				l = Object(o.b)(i.o.CHAT, "unread_message_count", a), u(t.messages.unread.basicChannelCount), m();
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
				method: a.cb.GET,
				data: {
					raw_json: 1
				}
			}), c = async (e, t) => Object(s.a)(e, {
				data: {
					account_id: t,
					raw_json: 1
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: a.cb.POST
			}), o = async (e, t) => Object(s.a)(e, {
				endpoint: `${e.apiUrl}/user/${t}/about`,
				method: a.cb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/chat/endpoints/users/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return l
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/chat/models/Message/report.ts");
			const c = (e, t) => Object(s.a)(e, {
					method: a.cb.POST,
					endpoint: `${e.apiUrl}/api/report_user`,
					data: {
						reason: t.reason,
						user: t.userNickname
					}
				}),
				o = (e, t, n) => {
					const c = Object(r.c)(t, n);
					return Object(s.a)(e, {
						method: a.cb.POST,
						endpoint: `${e.apiUrl}/api/report_user`,
						data: {
							details: JSON.stringify(c),
							reason: t.reason,
							user: t.userNickname
						}
					})
				},
				i = (e, t) => Object(s.a)(e, {
					method: a.cb.GET,
					endpoint: `${e.apiUrl}/api/user_data_by_account_ids`,
					data: {
						raw_json: 1,
						ids: t.join(",")
					}
				}),
				l = e => Object(s.a)(e, {
					method: a.cb.GET,
					endpoint: `${e.apiUrl}/prefs/blocked.json`
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
				m = n("./src/chat/icons/Userpic/index.m.less"),
				p = n.n(m);
			const b = l.a.i("FallbackAvatar", p.a),
				f = l.a.wrapped(b, "FallbackAvatarWrapper", p.a),
				g = l.a.wrapped(e => {
					const {
						className: t,
						height: n,
						width: s,
						userId: r
					} = e, {
						processingAvatarImageUrl: o
					} = a.a, l = (e => e.replace(i.Ab.Account + "_", ""))(r), {
						avatar: d,
						color: u
					} = (e => {
						const t = h.length,
							n = parseInt(e, 36),
							a = n % 20 + 1,
							s = Math.floor(n / 20) % t;
						return {
							avatar: ("0" + a).slice(-2),
							color: h[s]
						}
					})(l), m = {
						backgroundColor: u,
						backgroundImage: `url(${`${o}/avatar_default_${d}_${u}.png`})`,
						height: n,
						width: s
					};
					return c.a.createElement("i", {
						className: t,
						style: m
					})
				}, "SnooIcon", p.a);
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
					return o || !a ? c.a.createElement(f, {
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
			const E = l.a.wrapped(C, "VoicesAvatar", p.a),
				O = Object(d.a)({
					contact: (e, t) => e.contacts.models[t.userId],
					currentUser: e => e.user.account
				}),
				v = Object(o.b)(O);
			t.a = v(e => {
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
				}) : l ? c.a.createElement(E, {
					className: t,
					height: s,
					width: r,
					profileImg: l,
					name: d
				}) : c.a.createElement(g, {
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
			}));
			o.displayName = "NavClose"
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
					id: e.contact_account_id || `${a.Ab.Account}_${e.id}`,
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
					success: o.b.approved
				},
				skeleton: {
					field: u(l).field,
					inactive: u(l).inactive
				}
			}, m = {
				activity: {
					icon: {
						default: u(d).postIcon,
						active: o.b.op,
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
					success: o.b.approved
				},
				skeleton: {
					field: u(d).field,
					inactive: u(d).inactive
				}
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
			const r = `${a.Ab.Account}_`,
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
				return yt
			}));
			var a = n("./node_modules/redux/es/redux.js"),
				s = n("./node_modules/lodash/keyBy.js"),
				r = n.n(s),
				c = n("./node_modules/lodash/omit.js"),
				o = n.n(c),
				i = n("./src/chat/actions/channel/draftMessage.ts");
			const l = {};
			var d = (e = l, t) => {
					switch (t.type) {
						case i.b:
							return {
								...e, [t.payload.channelId]: t.payload
							};
						case i.a:
							return {
								...e, ...r()(t.payload, "channelId")
							};
						case i.c:
							return o()(e, t.payload);
						default:
							return e
					}
				},
				u = n("./src/chat/actions/channel.ts");
			var h = (e = !1, t) => {
					switch (t.type) {
						case u.r:
							return !0;
						default:
							return e
					}
				},
				m = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/lodash/uniq.js")),
				p = n.n(m),
				b = n("./src/chat/models/Channel/index.ts"),
				f = n("./src/chat/models/Channel/utils/index.ts");
			const g = {
				fetchingChannels: !1,
				hasMoreChannels: !1,
				sortedKeys: []
			};
			var C = (e = g, t) => {
				switch (t.type) {
					case u.h:
						return {
							...e, fetchingChannels: !0
						};
					case u.i:
						return {
							...e, fetchingChannels: !1
						};
					case u.a: {
						const {
							channels: n,
							hasMoreChannels: a
						} = t.payload, s = Object(f.c)(n, [b.a.Direct, b.a.Group]);
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
					case u.s:
					case u.m: {
						const {
							channelId: n
						} = t.payload;
						return {
							...e,
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						}
					}
					case u.w: {
						const n = t.payload.channel.channelId;
						return e.sortedKeys.indexOf(n) > -1 ? {
							...e,
							sortedKeys: e.sortedKeys.filter(e => e !== n)
						} : e
					}
					case u.v: {
						const {
							channel: n
						} = t.payload;
						return e.sortedKeys.includes(n.channelId) ? e : {
							...e,
							sortedKeys: p()([n.channelId, ...e.sortedKeys])
						}
					}
					default:
						return e
				}
			};
			var E = (e = !1, t) => {
				switch (t.type) {
					case u.c:
						return !1;
					case u.g:
						return !0;
					default:
						return e
				}
			};
			var O = n("./src/chat/actions/message/index.ts");
			const v = {
				fetchingChannels: !1,
				hasMoreChannels: !0,
				sortedKeys: []
			};
			var _ = (e = v, t) => {
					switch (t.type) {
						case u.j:
							return {
								...e, fetchingChannels: !0
							};
						case u.k:
							return {
								...e, fetchingChannels: !1
							};
						case u.b: {
							const {
								channels: n,
								hasMoreChannels: a
							} = t.payload, s = Object(f.c)(n, [b.a.Direct, b.a.Group]);
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
						case u.m: {
							const {
								channelId: n
							} = t.payload;
							return {
								...e,
								sortedKeys: e.sortedKeys.filter(e => e !== n)
							}
						}
						case u.s: {
							const {
								channelId: n
							} = t.payload;
							return {
								...e,
								sortedKeys: [n, ...e.sortedKeys]
							}
						}
						case u.f: {
							const n = Object.keys(t.payload);
							return {
								...e,
								sortedKeys: p()([...n, ...e.sortedKeys])
							}
						}
						case u.t:
						case O.a: {
							const {
								channelId: n
							} = t.payload;
							return e.sortedKeys.includes(n) ? {
								...e,
								sortedKeys: p()([n, ...e.sortedKeys])
							} : e
						}
						default:
							return e
					}
				},
				j = n("./node_modules/lodash/first.js"),
				y = n.n(j),
				I = n("./node_modules/lodash/reduce.js"),
				x = n.n(I),
				w = n("./src/chat/actions/channel/dropdown.ts"),
				N = n("./src/chat/actions/message/inboxScroller.ts"),
				S = n("./src/chat/constants/channels.ts");
			const k = {};
			var T = (e = k, t) => {
				switch (t.type) {
					case u.f:
						return {
							...e, ...t.payload
						};
					case u.b:
					case u.a: {
						const {
							channels: n
						} = t.payload, a = x()(e, (e, t, a) => n[a] && t.channelState === S.b.PARTIAL && (e[a] = n[a]) && e || e, {});
						return {
							...n,
							...e,
							...a
						}
					}
					case u.o: {
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
					case u.s: {
						const {
							channelId: n
						} = t.payload, a = {
							...e[n],
							channelState: S.b.JOINED
						};
						return {
							...e,
							[a.channelId]: a
						}
					}
					case u.w: {
						const n = t.payload.channel,
							a = {
								...e[n.channelId],
								...o()(n, "hasMoreMessages", "isMessageListLoaded")
							},
							s = {
								[n.channelId]: a
							};
						return {
							...e,
							...s
						}
					}
					case u.v: {
						const n = t.payload.channel,
							a = {
								...e[n.channelId],
								...n,
								channelState: S.b.INVITED
							},
							s = {
								[n.channelId]: a
							};
						return {
							...e,
							...s
						}
					}
					case u.u: {
						const {
							channel: n
						} = t.payload;
						return {
							...e,
							[n.channelId]: n
						}
					}
					case u.m: {
						const {
							channelId: n
						} = t.payload;
						return o()(e, n)
					}
					case w.a: {
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
					case O.a: {
						const n = t.payload.channelId,
							a = Number(y()(Object.keys(t.payload.message))),
							s = {
								...e[n],
								lastMessage: t.payload.message[a]
							};
						return {
							...e,
							[n]: s
						}
					}
					case O.g: {
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
					case O.b:
					case O.e: {
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
					case O.f: {
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
					case u.l: {
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
					case N.b: {
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
			const M = {
				channelId: void 0,
				isLoaded: !1
			};
			var U = (e = M, t) => {
					switch (t.type) {
						case u.p: {
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
						case u.q:
							return {
								...e, isLoaded: !0
							};
						case u.m:
							return t.payload.channelId !== e.channelId ? e : {
								...e,
								channelId: ""
							};
						default:
							return e
					}
				},
				A = Object(a.c)({
					draftMessages: d,
					firstLoaded: h,
					invited: C,
					inviteListExpanded: E,
					isCreatingChannel: (e = !1, t) => {
						switch (t.type) {
							case u.e:
								return !0;
							case u.f:
							case u.d:
								return !1;
							default:
								return e
						}
					},
					joined: _,
					models: T,
					selected: U
				}),
				D = n("./src/chat/actions/user.ts");
			var P = (e = !1, t) => {
					switch (t.type) {
						case D.b:
							return !0;
						default:
							return e
					}
				},
				L = n("./node_modules/lodash/values.js"),
				R = n.n(L),
				B = n("./src/chat/actions/sendbird/index.ts");
			const H = "search",
				F = "contacts",
				G = {};
			var W = (e = G, t) => {
				switch (t.type) {
					case B.g:
						return {
							...e, ...t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: F
							}, e), {})
						};
					case B.b:
						return {
							...t.payload.reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: F
							}, e), {}), ...e
						};
					case B.d: {
						const n = t.payload.username;
						return {
							...e,
							[n]: {
								loaded: !1,
								userId: null,
								valid: !1,
								method: H
							}
						}
					}
					case B.e: {
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
								method: H
							}
						}
					}
					case D.i: {
						const n = t.payload;
						return {
							...e,
							...R()(n).reduce((e, t) => (e[t.name.toLowerCase()] = {
								loaded: !0,
								userId: t.id,
								valid: !0,
								method: H
							}, e), {})
						}
					}
					case D.c: {
						const {
							username: n
						} = t.payload;
						return n ? o()(e, n) : e
					}
					default:
						return e
				}
			};
			const z = {};
			var V = (e = z, t) => {
				switch (t.type) {
					case B.g:
						return {
							...e, ...t.payload.reduce((t, n) => (t[n.id] = {
								...e[n.id],
								...n
							}, t), {})
						};
					case B.e: {
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
					case D.i:
						return {
							...e, ...t.payload || {}
						};
					case D.c: {
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
					case D.b: {
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
			const K = [];
			var Z = (e = K, t) => {
				switch (t.type) {
					case D.h:
						return [...e, t.payload];
					case D.k:
						return e.filter(e => e !== t.payload);
					case D.j:
						return K;
					default:
						return e
				}
			};
			const q = [];
			var Q = (e = q, t) => {
					switch (t.type) {
						case B.g:
							return [...e, ...t.payload.map(e => e.id)];
						case D.c:
							return e.filter(e => e !== t.payload.userId);
						default:
							return e
					}
				},
				J = Object(a.c)({
					fetchedBlockedUsers: P,
					knownContacts: W,
					models: V,
					selectedUserIds: Z,
					suggestedKeys: Q
				}),
				Y = n("./src/chat/actions/container.ts"),
				X = n("./src/chat/constants/container.ts");
			const $ = {
				size: X.a.EMBED
			};
			var ee = (e = $, t) => {
					switch (t.type) {
						case Y.SIZE_CHANGED:
							if (X.b[t.payload]) return {
								...e,
								size: t.payload
							};
						default:
							return e
					}
				},
				te = n("./node_modules/lodash/toArray.js"),
				ne = n.n(te),
				ae = n("./node_modules/lodash/uniqBy.js"),
				se = n.n(ae),
				re = n("./src/chat/actions/members.ts");
			const ce = {};
			var oe = (e = ce, t) => {
				switch (t.type) {
					case re.b: {
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
					case re.c: {
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
					case re.a: {
						const {
							channelId: n,
							members: a
						} = t.payload, s = ne()(a), r = e[n] && e[n].model || [], c = se()([...r, ...s], "id");
						return {
							...e,
							[n]: {
								...e[n],
								model: c
							}
						}
					}
					case re.d:
						return {};
					default:
						return e
				}
			};
			var ie = (e = !1, t) => {
				switch (t.type) {
					case O.b:
					case O.l:
						return !0;
					default:
						return e
				}
			};
			const le = {};
			var de = (e = le, t) => {
				switch (t.type) {
					case O.b: {
						const {
							messages: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case O.a:
						return {
							...e, ...t.payload.message
						};
					case O.i:
						return {
							...e, ...t.payload
						};
					case O.d:
					case O.j:
						return o()(e, t.payload);
					case O.e: {
						const {
							messages: n
						} = t.payload;
						return {
							...e,
							...n
						}
					}
					case u.n: {
						const n = t.payload;
						return {
							...o()(e, ...n)
						}
					}
					case N.a: {
						const {
							messageIdList: n
						} = t.payload;
						return o()(e, n)
					}
					case O.n: {
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
					case O.h: {
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
			const ue = {};
			var he = (e = ue, t) => {
					switch (t.type) {
						case O.c: {
							const n = t.payload;
							return {
								...e,
								[n.clientMessageId]: n
							}
						}
						case O.m: {
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
						case O.a:
						case O.k: {
							const {
								clientMessageId: n
							} = t.payload;
							return {
								...n ? o()(e, n) : e
							}
						}
						default:
							return e
					}
				},
				me = n("./src/chat/actions/message/richUnit.ts");
			const pe = {
					posts: {},
					userPosts: {},
					comments: {},
					subreddits: {},
					dataReceived: !1
				},
				be = e => e.length ? e.reduce((e, t) => (null == t ? void 0 : t.id) ? {
					...e,
					[t.id.toLowerCase()]: t
				} : e, {}) : {};
			var fe = (e = pe, t) => {
					var n, a, s, r;
					switch (t.type) {
						case me.b:
							return {
								...e, posts: {
									...e.posts,
									...be((null === (n = t.payload) || void 0 === n ? void 0 : n.posts) || {})
								}, userPosts: {
									...e.userPosts,
									...be((null === (a = t.payload) || void 0 === a ? void 0 : a.userPosts) || {})
								}, comments: {
									...e.comments,
									...be((null === (s = t.payload) || void 0 === s ? void 0 : s.comments) || {})
								}, subreddits: {
									...e.subreddits,
									...be((null === (r = t.payload) || void 0 === r ? void 0 : r.subreddits) || {})
								}, dataReceived: !0
							};
						case me.a:
							return {
								...e, dataReceived: !1
							};
						default:
							return e
					}
				},
				ge = n("./node_modules/lodash/isEqual.js"),
				Ce = n.n(ge),
				Ee = n("./src/chat/actions/message/unreadCount.ts");
			const Oe = {
				basicChannelCount: 0,
				subredditChannelCount: 0,
				subredditMentionCount: 0
			};
			var ve = (e = Oe, t) => {
					switch (t.type) {
						case Ee.a:
							return Ce()(e, t.payload) ? e : {
								...e,
								...t.payload
							}
					}
					return e
				},
				_e = Object(a.c)({
					firstLoaded: ie,
					models: de,
					pending: he,
					unread: ve,
					richUnits: fe
				}),
				je = n("./src/chat/reducers/meta/index.ts"),
				ye = n("./src/chat/reducers/platform/index.ts"),
				Ie = n("./src/chat/reducers/promos/index.ts"),
				xe = n("./src/chat/actions/sendbird/config.ts");
			const we = {
				maxMessageLength: void 0
			};
			var Ne = (e = we, t) => {
				switch (t.type) {
					case xe.b:
						return {
							...e, ...t.payload
						};
					default:
						return e
				}
			};
			const Se = {
				host: void 0
			};
			var ke = (e = Se, t) => {
					switch (t.type) {
						case xe.c:
							return {
								...e, ...t.payload
							};
						default:
							return e
					}
				},
				Te = n("./src/chat/actions/sendbird/sdk.ts"),
				Me = n("./src/chat/constants/sendbird.ts");
			const Ue = {
				connectionStatus: Me.b.Closed,
				initialized: !1
			};
			var Ae = (e = Ue, t) => {
				switch (t.type) {
					case Te.a:
						return {
							...e, initialized: !0, connectionStatus: Me.b.Open
						};
					case Te.c: {
						const n = {
							...t.payload
						};
						return {
							...e,
							error: n,
							connectionStatus: Me.b.Closed
						}
					}
					case Te.b:
						return {
							...e, connectionStatus: Me.b.Closed
						};
					case Te.d: {
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
			const De = {
				expires: void 0,
				token: void 0,
				active: !1
			};
			var Pe = (e = De, t) => {
					switch (t.type) {
						case B.h:
							return {
								...e, ...t.payload
							};
						case B.a:
							return {
								...e, active: !0
							};
						case B.c:
							return {
								...e, active: !1
							};
						default:
							return e
					}
				},
				Le = Object(a.c)({
					globalSettings: Ne,
					proxy: ke,
					session: Pe,
					sdk: Ae
				}),
				Re = n("./src/chat/actions/sidebar.ts");
			const Be = n("./src/chat/constants/sidebar.ts").a.DirectChannels;
			var He = (e = Be, t) => {
				switch (t.type) {
					case Re.b: {
						const {
							activeIndex: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Fe = {};
			var Ge = (e = Fe, t) => {
					switch (t.type) {
						case Re.a: {
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
				},
				We = Object(a.c)({
					activeIndex: He,
					lastChannelIdPerTab: Ge
				}),
				ze = n("./src/chat/actions/sitewideRules.ts");
			const Ve = [];
			var Ke = (e = Ve, t) => {
					switch (t.type) {
						case ze.a:
							return t.payload;
						default:
							return e
					}
				},
				Ze = n("./src/chat/reducers/subscribe.ts"),
				qe = n("./src/chat/actions/theme.ts"),
				Qe = n("./src/chat/constants/theme.ts"),
				Je = n("./src/chat/models/Theme/index.ts");
			const Ye = {
				current: Je.a[Qe.a],
				cached: {}
			};
			var Xe = (e = Ye, t) => {
					switch (t.type) {
						case qe.THEME_CHANGED:
							return e.current = Je.a[t.payload.themeKey], {
								...e
							};
						default:
							return e
					}
				},
				$e = n("./src/chat/actions/toast.ts");
			var et = (e = null, t) => {
					switch (t.type) {
						case $e.a:
							return null;
						case $e.b: {
							const {
								toast: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				tt = n("./src/chat/actions/platform.ts"),
				nt = n("./src/chat/actions/tooltip.ts");
			var at = (e = null, t) => {
					switch (t.type) {
						case nt.a: {
							const {
								tooltipId: n
							} = t.payload;
							return e === n ? null : n
						}
						case nt.b:
						case tt.a:
							return null;
						default:
							return e
					}
				},
				st = n("./src/chat/actions/typingIndicator.ts");
			const rt = {
				usernames: []
			};
			var ct = (e = rt, t) => {
					switch (t.type) {
						case st.a: {
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
								return Ce()(e, t)
							}(n, e.usernames) ? e : {
								usernames: n
							}
						}
						case u.p:
							return {
								usernames: []
							};
						default:
							return e
					}
				},
				ot = n("./src/lib/reducers/addAuthentication/index.ts");
			var it = Object(ot.a)((e = null, t) => {
				switch (t.type) {
					case D.a: {
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
			const lt = {
				userSubredditChatEnabled: !1
			};
			var dt = (e = lt, t) => {
				switch (t.type) {
					case B.f:
					case xe.a: {
						const {
							userSubredditChatEnabled: n
						} = t.payload || lt;
						return {
							...e,
							...t.payload,
							userSubredditChatEnabled: e.userSubredditChatEnabled || n
						}
					}
				}
				return e
			};
			const ut = {};
			var ht = (e = ut, t) => {
				switch (t.type) {
					case D.d:
						return t.payload;
					default:
						return e
				}
			};
			const mt = n("./src/lib/constants/index.ts").z;
			var pt = Object(ot.a)((e = mt, t) => (t.type, e), mt);
			const bt = {
				blob: "",
				loid: "",
				loidCreated: "",
				version: -1
			};
			var ft = (e = bt, t) => {
				switch (t.type) {
					case D.e:
						return t.payload;
					default:
						return e
				}
			};
			const gt = {
				globalTheme: Qe.a
			};
			var Ct = (e = gt, t) => {
				switch (t.type) {
					case qe.THEME_CHANGED: {
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
			var Et = (e = "", t) => {
					switch (t.type) {
						case D.f:
							return t.payload;
						default:
							return e
					}
				},
				Ot = n("./src/chat/actions/session.ts");
			var vt = (e = null, t) => {
				switch (t.type) {
					case Ot.a:
					case Ot.c:
						return t.payload;
					case Ot.b:
						return null;
					default:
						return e
				}
			};
			var _t = (e = "", t) => {
					switch (t.type) {
						case D.g:
							return t.payload;
						default:
							return e
					}
				},
				jt = Object(a.c)({
					account: it,
					chatExperiments: dt,
					experiments: ht,
					language: pt,
					loid: ft,
					prefs: Ct,
					reddaid: Et,
					session: vt,
					sessionTracker: _t
				});
			const yt = {
				channels: A,
				contacts: J,
				container: ee,
				members: oe,
				messages: _e,
				meta: je.b,
				platform: ye.b,
				promos: Ie.b,
				sendbird: Le,
				sidebarTabs: We,
				sitewideRules: Ke,
				themes: Xe,
				toast: et,
				tooltipId: at,
				typingIndicator: ct,
				user: jt,
				lastAction: Ze.a
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
						name: s.Eb.CHAT
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
						name: s.Eb.CHAT_EMPTY
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
						name: s.Eb.CHAT_MINIMIZE
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
						name: s.Eb.CHAT
					},
					path: m
				},
				b = ["/chat/user_id/:userIds/"],
				f = {
					action: r.d,
					chunk: s.p.CHAT,
					component: o,
					exact: !0,
					meta: {
						name: s.Eb.CHAT
					},
					path: b
				};
			t.b = [i, d, h, p, f]
		},
		"./src/chat/routes/index.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/constants/index.ts");
			var s = {
				action: n("./src/chat/actions/page.ts").b,
				chunk: a.p.CHAT,
				exact: !0,
				meta: {
					name: a.Eb.CHAT
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
				return f
			})), n.d(t, "f", (function() {
				return g
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
					const t = Object(c.p)(e);
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
					isModerator: Object(r.b)(t.role),
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
				f = e => e.meta.externalData.comment,
				g = e => e.meta.externalData.profile
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
			const f = e => async (t, n) => {
				const a = n(),
					s = Object(b.o)(a);
				t(Object(u.K)({
					channelId: e
				})), s && s.channelId === e && t(Object(h.b)(Object(p.channelAction)(e, m.a.DENY)))
			};
			var g = n("./src/chat/selectors/user.ts");
			const C = (e, t) => async (n, a) => {
				const s = a(),
					{
						channelId: r
					} = e,
					c = Object(b.p)(s),
					o = Object(g.a)(s);
				t === o && (n(Object(u.J)(r)), r === c && n(Object(h.b)(Object(p.channelAction)(r, m.a.DENY))))
			};
			var E = n("./src/chat/actions/message/index.ts"),
				O = n("./src/chat/actions/sendbird/index.ts"),
				v = n("./src/chat/actions/sendbird/sdk.ts"),
				_ = n("./src/chat/actions/toast.ts"),
				j = n("./src/chat/actions/typingIndicator.ts"),
				y = n("./src/chat/constants/batchSizes.ts"),
				I = n("./src/chat/constants/messages.ts"),
				x = n("./src/chat/constants/sendbird.ts"),
				w = n("./src/chat/constants/toast.ts"),
				N = n("./src/chat/helpers/errors.ts"),
				S = n("./src/chat/models/Channel/index.ts"),
				k = n("./src/chat/models/Channel/utils/index.ts"),
				T = n("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),
				M = n("./src/chat/models/Message/index.ts"),
				U = n("./src/chat/models/User/member.ts");
			const {
				sendbirdAppId: A
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
					this.dispatch(Object(_.e)({
						toast: w.a.ConnectionPending
					})), this.dispatch(Object(O.m)())
				}
				onReconnectStarted() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: x.b.Pending
						},
						n = {
							toast: w.a.ConnectionPending
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
							toast: w.a.ConnectionOpen
						})), Object(i.setTimeout)(() => this.dispatch(Object(_.d)()), 3 * l.Ib);
						this.dispatch(Object(E.s)(!0)), this.dispatch(Object(u.D)())
					}, this.self.addConnectionHandler("RECONNECT_SUCCEEDED", e), this.connectionUniqueHandlerID.push("RECONNECT_SUCCEEDED")
				}
				onReconnectFailed() {
					const e = new this.self.ConnectionHandler,
						t = {
							connectionStatus: x.b.Closed
						};
					e.onReconnectFailed = () => {
						this.dispatch(Object(v.h)(t)), this.dispatch(Object(_.e)({
							toast: w.a.ConnectionClosed
						}))
					}, this.self.addConnectionHandler("RECONNECT_FAILED", e), this.connectionUniqueHandlerID.push("RECONNECT_FAILED")
				}
				onReceiveInvite() {
					const e = new this.self.ChannelHandler;
					e.onUserReceivedInvitation = e => {
						const t = Object(S.d)(e);
						this.dispatch(Object(u.Q)(t))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_INVITE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_INVITE")
				}
				onReceiveMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageReceived = (e, t) => {
						const n = Object(S.d)(e);
						this.dispatch(Object(u.P)(n));
						const a = Object(M.c)(t);
						a && this.dispatch(Object(E.u)(a))
					}, this.self.addChannelHandler("RECEIVE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("RECEIVE_CHANNEL_MESSAGE")
				}
				onUpdateMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageUpdated = (e, t) => {
						const n = Object(S.d)(e);
						this.dispatch(Object(u.P)(n));
						const a = Object(M.c)(t);
						a && this.dispatch(Object(E.u)(a))
					}, this.self.addChannelHandler("UPDATE_CHANNEL_MESSAGE", e), this.channelUniqueHandlerID.push("UPDATE_CHANNEL_MESSAGE")
				}
				onDeleteMessage() {
					const e = new this.self.ChannelHandler;
					e.onMessageDeleted = (e, t) => {
						this.dispatch(Object(E.v)(t))
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
							const t = Object(S.d)(e);
							this.dispatch(Object(u.Q)(t, !0))
						}, this.self.addChannelHandler(s, a), this.channelUniqueHandlerID.push(s)
					})
				}
				onChannelChanged() {
					const e = new this.self.ChannelHandler;
					e.onChannelChanged = e => {
						const t = Object(S.d)(e);
						this.dispatch(Object(u.Q)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_CHANGED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_CHANGED")
				}
				onChannelDeleted() {
					const e = new this.self.ChannelHandler;
					e.onChannelDeleted = e => {
						const t = Object(T.a)(e);
						this.dispatch(f(t))
					}, this.self.addChannelHandler("ON_CHANNEL_DELETED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_DELETED")
				}
				onChannelMuted() {
					const e = new this.self.ChannelHandler;
					e.onUserMuted = e => {
						const t = Object(S.d)(e);
						this.dispatch(Object(u.Q)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_MUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_MUTED")
				}
				onChannelUnmuted() {
					const e = new this.self.ChannelHandler;
					e.onUserUnmuted = e => {
						const t = Object(S.d)(e);
						this.dispatch(Object(u.Q)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNMUTED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNMUTED")
				}
				onChannelLocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelFrozen = e => {
						const t = Object(S.d)(e);
						this.dispatch(Object(u.Q)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_LOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_LOCKED")
				}
				onChannelUnlocked() {
					const e = new this.self.ChannelHandler;
					e.onChannelUnfrozen = e => {
						const t = Object(S.d)(e);
						this.dispatch(Object(u.Q)(t))
					}, this.self.addChannelHandler("ON_CHANNEL_UNLOCKED", e), this.channelUniqueHandlerID.push("ON_CHANNEL_UNLOCKED")
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
						const a = Object(k.a)(e);
						this.self.GroupChannel.getChannel(a, (e, a) => {
							a ? (Object(N.b)("Error: can't get channel by id"), n(a)) : t(e)
						})
					})
				}
				addChannelModelByChannelId(e) {
					return new Promise((t, n) => {
						this.getChannelByChannelId(e).then(e => {
							if (!e) return t();
							const n = Object(S.d)(e);
							if (!n) return t();
							this.dispatch(Object(u.R)(n)), t(n)
						}).catch(e => {
							Object(N.b)("Error: can't add channel by id"), n(e)
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
							const c = Object(S.d)(t);
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
						const n = Object(S.d)(e);
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
							const r = Object(U.a)(a),
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
							} else Object(N.b)(`Error with getting previous messages from Sendbird: ${a}`), n()
						})) : (Object(N.b)("Sendbird channel does not exist"), n())
					})
				}
				addMessage(e, t, n = []) {
					return new Promise((a, s) => {
						if (this.channel) {
							const r = new(0, this.self.UserMessageParams);
							r.data = t, r.message = e, n && n.length && (r.mentionType = I.b.USERS, r.mentionedUserIds = n), this.channel.sendUserMessage(r, (e, t) => {
								if (t) Object(N.b)(`Error with sending the message to Sendbird: ${t}`), s(t);
								else {
									const t = Object(M.c)(e);
									if (t && t.messageType === I.d.USER) return a(t);
									Object(N.b)(`Unsupported message type: ${t&&t.messageType}`), s()
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
				s = n("./src/chat/selectors/telemetry.ts"),
				r = n("./src/chat/tracking/fields/chat.ts"),
				c = n("./src/chat/tracking/fields/common.ts"),
				o = n("./src/chat/tracking/sendEvent.ts");
			const i = e => Object(o.a)({
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
				l = (e, t) => {
					Object(o.a)({
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
						...Object(c.a)(e)
					})
				},
				d = (e, t, n) => {
					Object(o.a)({
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
				u = (e, t, n) => {
					Object(o.a)({
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
				h = e => {
					Object(o.a)({
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
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/chat/tracking/sendEvent.ts"),
				s = n("./src/telemetry/models/Event.ts"),
				r = n("./src/chat/tracking/fields/chat.ts"),
				c = n("./src/chat/tracking/fields/common.ts");
			const o = e => Object(a.a)({
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
				i = e => Object(a.a)({
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
					...Object(c.a)(e)
				}),
				l = e => Object(a.a)({
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
					...Object(c.a)(e)
				}),
				d = e => Object(a.a)({
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
				u = e => {
					Object(a.a)({
						noun: "expand",
						source: s.b.InvitationInbox,
						action: s.a.Click,
						...Object(c.a)(e)
					})
				},
				h = e => {
					Object(a.a)({
						noun: "collapse",
						source: s.b.InvitationInbox,
						action: s.a.Click,
						...Object(c.a)(e)
					})
				},
				m = new Set,
				p = (e, t) => {
					m.has(t) || (m.add(t), Object(a.a)({
						noun: "collapsed_message",
						source: s.b.Chat,
						action: s.a.View,
						chat: {
							message_id: t
						},
						...Object(c.a)(e)
					}))
				},
				b = (e, t, n) => {
					Object(a.a)({
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
				f = (e, t, n) => {
					Object(a.a)({
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
				return f
			})), n.d(t, "E", (function() {
				return g
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
				return w
			})), n.d(t, "t", (function() {
				return N
			})), n.d(t, "B", (function() {
				return S
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "j", (function() {
				return M
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "b", (function() {
				return A
			})), n.d(t, "w", (function() {
				return D
			})), n.d(t, "u", (function() {
				return P
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "d", (function() {
				return R
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
					const n = t ? Object(l.f)(e, t) : Object(l.h)(e);
					return n && {
						id: n.channelSendbirdUrl
					}
				},
				p = (e, t) => {
					const n = t ? Object(l.f)(e, t) : Object(l.j)(e);
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
				f = e => {
					const t = Object(d.k)(e);
					return {
						number_members: t ? t + 1 : 0
					}
				},
				g = (e, t) => {
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
					const t = Object(l.j)(e);
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
					const t = Object(l.h)(e);
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
					const n = Object(l.j)(e),
						a = n && n.unreadMessageCount;
					return {
						number_unreads: "number" == typeof t ? t : a || 0
					}
				},
				I = e => ({
					number_channels: Object(l.m)(e)
				}),
				x = e => ({
					number_pending_invites: Object(l.l)(e)
				}),
				w = (e, t) => ({
					message_type: Object(u.h)(e, t) || "text"
				}),
				N = (e, t) => {
					const n = Object(u.i)(e, t);
					return n && {
						message_type: n.messageData.type
					}
				},
				S = (e, t, n) => {
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
					const t = Object(l.j)(e);
					return {
						invitation_id: t ? t.channelSendbirdUrl : null
					}
				},
				M = (e, t) => {
					if (t) return {
						invitation_type: t
					};
					const n = Object(l.j)(e),
						a = n && h(n.type);
					return a && {
						invitation_type: a
					}
				},
				U = e => {
					const t = Object(l.j)(e);
					return {
						invitation_timestamp: t ? t.createdAt : null
					}
				},
				A = e => ({
					blocked_user_id: e || null
				}),
				D = e => ({
					reported_user_id: e || null
				}),
				P = e => {
					const t = Object(l.j)(e),
						n = !(!t || t.type !== i.a.Direct),
						a = Object(l.n)(e),
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
				R = e => {
					const t = Object(d.j)(e);
					return {
						recipient_user_id: 1 === t.length ? t[0] : null
					}
				},
				B = e => ({
					is_member: Object(l.G)(e)
				}),
				H = e => {
					const t = Object(l.i)(e);
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
			e.exports = JSON.parse('{"id":"10d167243317"}')
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
				r = n.n(s),
				c = n("./node_modules/react/index.js"),
				o = n.n(c),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/overlayEvents.ts");

			function u(e, t) {
				class n extends c.Component {
					constructor(e) {
						super(e), this.handleKeyDown = e => {
							e.keyCode === l.F && this.props.onKeyDown(e)
						}, this.handleMouseClick = e => {
							this.props.onMouseClick(e)
						}, this.handleResize = r()(e => {
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
				return E
			})), n.d(t, "a", (function() {
				return O
			}));
			var a = n("./node_modules/lodash/omit.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/fastdom/index.ts"),
				l = n("./src/reddit/components/Portal/index.tsx"),
				d = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				u = n("./src/higherOrderComponents/sizeMe.tsx"),
				h = n("./src/reddit/components/HiddenDiv.m.less"),
				m = n.n(h),
				p = n("./src/lib/lessComponent.tsx").a.div("Component", m.a),
				b = n("./src/reddit/hooks/useCoreStyleExperiments.ts");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const g = ["left", "bottom"],
				C = ["left", "top"],
				E = ({
					container: e,
					containerHeight: t,
					excludeContainerPosition: n,
					isFixed: a,
					targetBox: s,
					isOverlayOff: r,
					targetPosition: c,
					tooltipSize: o,
					tooltipPosition: i
				}) => {
					const l = document.body,
						d = l.clientTop || 0,
						u = l.clientLeft || 0,
						[h, m, p, b] = e ? [e.scrollLeft, e.scrollTop, e.scrollWidth, t || e.scrollHeight] : [window.pageXOffset, window.pageYOffset, window.innerWidth, document.body.scrollHeight],
						f = {
							bottom: s.bottom,
							center: s.top + s.height / 2,
							top: s.top
						} [c[1]] + {
							bottom: -o.height,
							center: -o.height / 2,
							top: 0
						} [i[1]],
						g = {
							left: s.left,
							center: s.left + s.width / 2,
							right: s.right
						} [c[0]] + {
							left: 0,
							center: -o.width / 2,
							right: -o.width
						} [i[0]];
					let C, E;
					a ? (C = f - d, E = g - u) : (E = h + u + g, C = m + d + f);
					const O = {
							left: E,
							top: C
						},
						v = {
							bottom: Math.max(0, C + o.height - b),
							left: Math.max(0, 0 - E),
							right: Math.max(0, E + o.width - p),
							top: Math.max(0, 0 - C)
						};
					if (p > 320 && b > 667 && !r && (Boolean(v.left) !== Boolean(v.right) && (v.left ? O.left = 0 : O.left -= v.right), Boolean(v.top) !== Boolean(v.bottom) && (v.top ? O.top = 0 : O.top -= v.bottom)), n && e) {
						const t = e.getBoundingClientRect();
						O.top = O.top - t.top, O.left = O.left - t.left
					}
					return {
						overflow: v,
						style: O
					}
				};

			function O(e, t) {
				const n = Object(d.b)(e, t),
					a = Object(u.a)(e => {
						const t = Object(b.a)(),
							{
								container: a,
								containerHeight: r,
								domEl: i,
								excludeContainerPosition: l,
								isFixed: d,
								target: u,
								isOverlayOff: h,
								targetPosition: m,
								tooltipPosition: p
							} = e;
						if (!u || !i) return null;
						const O = i.getBoundingClientRect(),
							v = u.getBoundingClientRect(),
							_ = E({
								container: a,
								containerHeight: r,
								excludeContainerPosition: l,
								isOverlayOff: h,
								isFixed: !!d,
								targetBox: v,
								targetPosition: m || g,
								tooltipSize: {
									height: O.height,
									width: O.width
								},
								tooltipPosition: p || C
							}),
							j = s()(e, "target", "targetPosition", "tooltipPosition"),
							y = e.style ? {
								..._.style,
								...e.style
							} : _.style;
						return c.a.createElement(n, f({}, j, {
							className: Object(o.a)(e.className, t ? "isInIcons2020" : "isNotInIcons2020"),
							overflow: _.overflow,
							style: y,
							targetBox: v
						}))
					});
				class h extends r.Component {
					constructor() {
						super(...arguments), this.state = {
							containerHeight: null,
							isOpen: !1,
							mounted: !1
						}, this.target = null
					}
					componentDidMount() {
						this.target = this.props.tooltipTarget || document.getElementById(this.props.tooltipId), this.props.isOpen && i.a.write(() => {
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
						if (!this.props.isOpen) return this.props.renderContentsHidden ? c.a.createElement(p, null, this.props.children) : null;
						const {
							isOpen: e,
							tooltipId: t,
							tooltipTarget: n
						} = this.props, {
							containerHeight: r,
							mounted: o
						} = this.state, i = s()(this.props, "isOpen"), d = t ? this.target : n, u = `${e}-${o}-${t||""}`;
						return c.a.createElement(l.a, {
							key: u,
							container: this.props.container
						}, c.a.createElement(a, f({}, i, {
							containerHeight: r,
							target: d
						})))
					}
				}
				return h
			}
		},
		"./src/higherOrderComponents/makeAsync.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);

			function r(e) {
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
				r = n("./node_modules/react/index.js"),
				c = n.n(r),
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
			class u extends r.Component {
				render() {
					return r.Children.only(this.props.children)
				}
			}
			u.displayName = "SizeMeReferenceWrapper";
			const h = ({
				style: e
			}) => {
				const t = {
					style: e || {
						width: "100%",
						height: "100%"
					}
				};
				return c.a.createElement("div", t)
			};
			h.displayName = "SizeMePlaceholder", t.a = function(e) {
				const t = function(e) {
					const t = t => {
						const {
							domEl: n,
							explicitRef: a,
							placeholder: r,
							size: o,
							style: i
						} = t, d = s()(t, "explicitRef", "size", "style"), m = "object" != typeof o || "number" != typeof o.width && "number" != typeof o.height, p = {
							domEl: n,
							style: i
						};
						"object" == typeof o && (p.size = o);
						const b = m && !1 !== r ? c.a.createElement(h, {
							style: i
						}) : c.a.createElement(e, l({}, p, d));
						return c.a.createElement(u, {
							ref: a
						}, b)
					};
					return t.displayName = `SizeMeRenderer(${d(e)})`, t
				}(e);
				class n extends c.a.Component {
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
						const e = {
							...this.state
						};
						return c.a.createElement(t, l({
							domEl: this.domEl,
							explicitRef: this.refCallback,
							size: e
						}, this.props))
					}
				}
				return n.displayName = `SizeMe(${d(e)})`, n
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
		"./src/lib/lessComponent.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts");
			const c = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noindex", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "webview", "svg", "animate", "animateMotion", "animateTransform", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "switch", "symbol", "text", "textPath", "tspan", "use", "view"],
				o = (e, t, n) => {
					const a = n[t];
					class c extends s.a.PureComponent {
						render() {
							const {
								className: t,
								innerRef: n,
								...c
							} = this.props;
							return s.a.createElement(e, {
								...c,
								ref: n,
								className: Object(r.a)(a, t)
							})
						}
					}
					return c.cssClassName = a, c.displayName = t, c
				},
				i = {};
			for (const l of c) i[l] = (e, t) => o(l, e, t);
			t.a = {
				...i,
				wrapped: (e, t, n) => {
					const a = n[t];
					class c extends s.a.PureComponent {
						render() {
							const {
								className: t,
								...n
							} = this.props;
							return s.a.createElement(e, {
								...n,
								className: Object(r.a)(a, t)
							})
						}
					}
					return c.cssClassName = a, c.displayName = t, c
				}
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
				f = h(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				g = s()().tlds(c.a).set({
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
					return (g.match(e) || []).filter(e => {
						const n = d(e.text);
						return !n || n && t
					})
				},
				v = e => {
					return [...f.match(e) || [], ...p.match(e) || []].map(e => !d(e.text) && e.text.replace(o.a, "")).filter(e => e)
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
		"./src/lib/opener/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return c
			}));
			const a = {
					SELF: "_self",
					BLANK: "_blank",
					PARENT: "_parent",
					TOP: "_top"
				},
				s = "noopener",
				r = `${s} ${"noreferrer"}`,
				c = `${s} ${"nofollow"} ${"ugc"}`;
			t.d = (e, t = a.SELF, n) => {
				if (t === a.BLANK) {
					const a = window.open("", t, n);
					null != a ? (a.opener = null, a.location.href = e) : window.location.href = e
				} else window.location.href = e
			}
		},
		"./src/lib/prettyPrintNumber/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return u
			}));
			const a = e => {
					const t = e.split(".");
					return [t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")].concat(t.slice(1)).join(".")
				},
				s = 1e3,
				r = 100 * s,
				c = 10 * r,
				o = 100 * c,
				i = 10 * o,
				l = 100 * i,
				d = 51;

			function u(e, t) {
				return (null == t ? void 0 : t.displayFull) ? a(e.toString()) : e >= l - d ? `${Math.floor(e/i)}b` : e >= i - d && e < l - d ? `${(e/i).toFixed(1)}b` : e >= o - d && e < i - d ? `${Math.floor(e/c)}m` : e >= c - d && e < o - d ? `${(e/c).toFixed(1)}m` : e >= r - d && e < c - d ? `${Math.floor(e/s)}k` : e >= s && e < r - d ? (null == t ? void 0 : t.roundDown) ? `${h(e,s)}k` : `${(e/s).toFixed(1)}k` : String(e)
			}
			const h = (e, t, n = 1) => {
				const a = Math.pow(10, n);
				return (Math.floor(e / (t / a)) / a).toFixed(n)
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
		"./src/reddit/components/HiddenDiv.m.less": function(e, t, n) {
			e.exports = {
				Component: "_1VhYfuKTAdUU_3j4cMjkr5",
				component: "_1VhYfuKTAdUU_3j4cMjkr5"
			}
		},
		"./src/reddit/components/Portal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./node_modules/react/index.js"),
				s = n("./src/lib/CSSVariableProvider/index.tsx");
			class r extends a.PureComponent {
				render() {
					const {
						children: e,
						container: t
					} = this.props;
					return Object(s.d)(e, t || document.body)
				}
			}
		},
		"./src/reddit/contexts/CoreStyleExperiments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var a, s = n("./node_modules/react/index.js"),
				r = n.n(s);
			! function(e) {
				e.Icons = "icons2020"
			}(a || (a = {}));
			const c = r.a.createContext({
				[a.Icons]: !1
			});
			t.b = c
		},
		"./src/reddit/hooks/useCoreStyleExperiments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./node_modules/react/index.js"),
				s = n("./src/reddit/contexts/CoreStyleExperiments.ts");
			const r = () => Object(a.useContext)(s.b)[s.a.Icons]
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Chat~RedesignChat.9cee0e219cf50186e9b4.js.map