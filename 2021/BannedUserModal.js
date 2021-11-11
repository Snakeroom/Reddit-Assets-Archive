// https://www.redditstatic.com/desktop2x/BannedUserModal.3c7f8db0913ff840f0f6.js
// Retrieved at 11/11/2021, 4:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BannedUserModal"], {
		"./src/reddit/actions/inContextModeration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "INCONTEXT__BANNED",
				a = "INCONTEXT__MUTED",
				o = Object(s.a)(r),
				d = Object(s.a)(a)
		},
		"./src/reddit/actions/subredditModeration/ban.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return $
			})), n.d(t, "d", (function() {
				return se
			})), n.d(t, "b", (function() {
				return oe
			})), n.d(t, "e", (function() {
				return de
			})), n.d(t, "a", (function() {
				return ie
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/get.js"),
				a = n.n(r),
				o = n("./src/lib/makeActionCreator/index.ts"),
				d = n("./src/reddit/actions/apiRequestState.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/subreddit.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				f = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				x = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const _ = (e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
				endpoint: Object(f.a)(Object(x.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.jb.GET,
				data: n
			});
			var y = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				g = n("./src/reddit/models/SubredditModeration/index.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				w = n("./src/reddit/selectors/activeModalId.ts"),
				S = n("./src/reddit/selectors/bannedUser.ts"),
				k = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/subredditModeration/constants.ts"),
				O = n("./src/lib/initializeClient/installReducer.ts"),
				M = n("./node_modules/redux/es/redux.js");
			var v = (e = null, t) => {
				switch (t.type) {
					case j.o:
					case j.n:
						return null;
					case j.m:
						return t.payload;
					default:
						return e
				}
			};
			const I = {};
			var R = (e = I, t) => {
					switch (t.type) {
						case j.o: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(g.d)(n, s);
							return {
								...e,
								[r]: !0
							}
						}
						case j.n:
						case j.m: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(g.d)(n, s);
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				N = Object(M.c)({
					error: v,
					pending: R
				});
			const T = {};
			var B = (e = T, t) => {
					switch (t.type) {
						case j.n: {
							const {
								fetchedToken: n,
								subredditId: s
							} = t.payload, r = Object(g.d)(s, n);
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				U = n("./src/reddit/actions/inContextModeration.ts");
			var D = (e = null, t) => {
				switch (t.type) {
					case U.a:
						return t.payload;
					default:
						return e
				}
			};
			const P = {};
			var L = (e = P, t) => {
					switch (t.type) {
						case j.n: {
							const {
								subredditId: e,
								after: n
							} = t.payload;
							return {
								[e]: n
							}
						}
						default:
							return e
					}
				},
				A = n("./node_modules/icepick/icepick.js");
			const F = {};
			var q = (e = F, t) => {
				switch (t.type) {
					case j.l:
					case j.n: {
						const {
							subredditId: n,
							bannedUsers: s
						} = t.payload;
						return Object(A.merge)(e, {
							[n]: s
						})
					}
					case j.s: {
						const {
							subredditId: n,
							userId: s
						} = t.payload;
						return Object(A.unsetIn)(e, [n, s])
					}
					default:
						return e
				}
			};
			var H = (e = null, t) => {
				switch (t.type) {
					case j.r:
					case j.q:
						return null;
					case j.p:
						return t.payload;
					default:
						return e
				}
			};
			var W = (e = !1, t) => {
					switch (t.type) {
						case j.r:
							return !0;
						case j.q:
						case j.p:
							return !1;
						default:
							return e
					}
				},
				X = Object(M.c)({
					error: H,
					pending: W
				});
			var G = (e = null, t) => {
					switch (t.type) {
						case j.r:
						case j.p:
							return null;
						case j.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				K = Object(M.c)({
					api: X,
					result: G
				});
			const J = {};
			var Q = (e = J, t) => {
					switch (t.type) {
						case j.n: {
							const {
								subredditId: n,
								bannedUserIds: s
							} = t.payload;
							return e[n] ? {
								...e,
								[n]: [...e[n], ...s]
							} : {
								...e,
								[n]: s
							}
						}
						case j.s: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== s)
							}
						}
						case j.l: {
							const {
								subredditId: n,
								bannedUserIds: s
							} = t.payload, r = s[0];
							return r && e[n] && -1 === e[n].indexOf(r) ? {
								[n]: [r, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				z = Object(M.c)({
					api: N,
					fetchedTokens: B,
					inContext: D,
					loadMore: L,
					models: q,
					search: K,
					userOrder: Q
				});
			Object(O.a)({
				features: {
					banned: z
				}
			});
			const V = Object(o.a)(j.o),
				Z = Object(o.a)(j.n),
				Y = Object(o.a)(j.m),
				$ = (e, t = {}) => async (n, s, {
					apiContext: r
				}) => {
					const a = s(),
						o = t.after || "",
						d = Object(g.d)(e, o),
						i = a.features.banned.fetchedTokens[d];
					if (a.features.banned.api.pending[d] || i) return;
					n(V({
						subredditId: e,
						fetchedToken: o
					}));
					const l = a.subreddits.models[e].name,
						c = await _(r(), l, t);
					c.ok ? n(Z({
						...c.body,
						fetchedToken: o
					})) : n(Y({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(j.r), te = Object(o.a)(j.q), ne = Object(o.a)(j.p), se = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s().subreddits.models[e].name,
						o = {
							username: Object(y.a)(t)
						};
					n(ee());
					const d = await _(r(), a, o);
					d.ok ? n(te(d.body)) : n(ne(d.error))
				}, re = Object(o.a)(j.l), ae = Object(o.a)(j.s), oe = (e, t, n) => async (r, o, {
					apiContext: i
				}) => {
					const l = o(),
						u = l.subreddits.models[e].url,
						f = l.subreddits.models[e].name;
					t.username = Object(y.a)(t.username), r(Object(d.h)(n));
					const x = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.jb.POST,
						data: {
							api_type: "json",
							ban_reason: n.reason,
							ban_message: n.banMessage,
							duration: n.duration,
							name: n.username,
							note: n.modNote,
							ban_context: n.contextId,
							type: "banned"
						}
					}))(i(), u, t);
					if (x.ok) {
						r(Object(d.e)(n));
						const e = {
							username: t.username
						};
						r(Object(c.f)({
							kind: C.b.SuccessMod,
							text: s.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const a = await _(i(), f, e);
						a.ok && r(re(a.body))
					} else {
						r(Object(d.f)(n, x.error));
						const e = a()(x, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(c.f)({
							kind: C.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const d = r().subreddits.models[e].url,
						i = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(o(), d, t);
					if (i.ok) n(ae({
						subredditId: e,
						userId: t
					})), n(Object(c.f)({
						kind: C.b.SuccessMod,
						text: s.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(i, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(c.f)({
							kind: C.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, s) => {
					const r = s();
					await Promise.all([(async () => {
						if (!Object(w.b)(u.a.BAN_USER)(r) && !Object(k.N)(r, {
								subredditId: e
							})) {
							const t = Object(k.Q)(r, {
								subredditId: e
							});
							await n(Object(l.o)(t.name))
						}
					})(), (async () => {
						const s = Object(E.nb)(r, {
							userName: t
						});
						if (!s) return;
						const a = Object(S.h)(r, {
							subredditId: e
						});
						a && a[s.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(i.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/DaysInput.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				c = n("./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.m.less"),
				u = n.n(c);
			const m = d.a.div("BanLength", u.a),
				p = d.a.wrapped(i.p, "BanLengthDays", u.a),
				b = d.a.wrapped(i.j, "NumberInput", u.a),
				h = d.a.div("StyledPermanentLabel", u.a),
				f = d.a.div("DescriptionText", u.a),
				x = d.a.div("BanLengthContainer", u.a),
				_ = d.a.div("CheckboxWrapper", u.a),
				y = d.a.div("PermanentCheckbox", u.a);
			t.a = e => a.a.createElement(i.h, null, a.a.createElement(i.k, null, s.fbt._("How long?", null, {
				hk: "1InKw6"
			})), a.a.createElement(x, null, a.a.createElement(m, {
				className: Object(o.a)({
					[u.a.isDisabled]: e.isDurationPermanent
				})
			}, a.a.createElement(b, {
				tabIndex: 0,
				disabled: e.isDurationPermanent,
				onChange: e.onChangeDuration,
				min: "0",
				type: "number",
				value: void 0 !== e.duration && null !== e.duration ? e.duration : ""
			}), a.a.createElement(p, null, s.fbt._("Days", null, {
				hk: "2TkJg0"
			}))), a.a.createElement(h, {
				onClick: e.togglePermanent
			}, a.a.createElement(y, {
				onKeyDown: e.togglePermanent
			}, a.a.createElement(_, {
				tabIndex: 0
			}, e.isDurationPermanent ? a.a.createElement(l.b, null) : a.a.createElement(l.a, null))), a.a.createElement(f, null, s.fbt._("Permanent", null, {
				hk: "172B1w"
			})))))
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.m.less": function(e, t, n) {
			e.exports = {
				Container: "cCcS9FtX9EtCZndWE2KoT",
				container: "cCcS9FtX9EtCZndWE2KoT",
				Dropdown: "_2SggQ3MVXsSCJaJnZohv5W",
				dropdown: "_2SggQ3MVXsSCJaJnZohv5W",
				Row: "_2_cyr9JIpA0CtkJpzPGSMX",
				row: "_2_cyr9JIpA0CtkJpzPGSMX",
				dropdownTarget: "_16JYr1_9yGQHSLHdyiWlGz",
				targetText: "_2A6qbw0TmdARh8bjwQ2ofj",
				DropdownRow: "_2lfpXKpvpeZ4oyQ-CMp9Le",
				dropdownRow: "_2lfpXKpvpeZ4oyQ-CMp9Le"
			}
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				u = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.m.less"),
				b = n.n(p);
			const h = [() => s.fbt._("Spam", null, {
					hk: "1I8OLD"
				}), () => s.fbt._("Personal and confidential information", null, {
					hk: "gBQdH"
				}), () => s.fbt._("Threatening, harassing, or inciting violence", null, {
					hk: "2To19l"
				})],
				f = Object(d.c)({
					subredditRules: m.P
				}),
				x = Object(o.b)(f);
			class _ extends a.a.Component {
				constructor(e) {
					super(e), this.api = null, this.closeDropdown = () => {
						this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.handleToggleDropdown = () => this.setState({
						isOpen: !this.state.isOpen
					}), this.handleSelectReason = (e, t) => {
						this.props.onSelectReason(t), e.key !== i.b.Tab && e.preventDefault(), this.closeDropdown()
					}, this.getRuleShortNames = () => {
						return [...this.props.subredditRules ? this.props.subredditRules.map(e => e.shortName) : [], ...h.map(e => e().toString()), "other"]
					}, this.state = {
						isOpen: !1,
						activeRow: -1
					}, this.api = {
						closeDropdown: this.closeDropdown
					}
				}
				componentDidMount() {
					this.props.onDropdownApi && this.props.onDropdownApi(this.api)
				}
				UNSAFE_componentWillMount() {
					this.props.onDropdownApi && this.props.onDropdownApi(null)
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return a.a.createElement("div", {
						className: b.a.Container
					}, a.a.createElement("button", {
						className: b.a.dropdownTarget,
						onClick: this.handleToggleDropdown
					}, a.a.createElement("div", {
						className: b.a.targetText
					}, e.reason || s.fbt._("None", null, {
						hk: "1IYbYO"
					})), a.a.createElement(u.b, null)), t.isOpen && a.a.createElement(l.a, {
						className: b.a.Dropdown,
						isOverlay: !0
					}, this.getRuleShortNames().map((t, n) => a.a.createElement(c.b, {
						key: t,
						className: b.a.DropdownRow,
						displayText: t,
						index: n,
						isSelected: e.reason === t,
						onClick: e => this.handleSelectReason(e, t)
					}))))
				}
			}
			t.a = x(_)
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.m.less": function(e, t, n) {
			e.exports = {
				Unban: "_1MjK_ZbXYkYgjvnYRxXErB",
				unban: "_1MjK_ZbXYkYgjvnYRxXErB",
				UnbanButton: "yByd-IEj7iofnvyb9tmne",
				unbanButton: "yByd-IEj7iofnvyb9tmne",
				PrimaryButton: "EM-EsR6tL9UA_MTsXHtS0",
				primaryButton: "EM-EsR6tL9UA_MTsXHtS0",
				ModalText: "_2Y9SCHsLMT105713rB10IV",
				modalText: "_2Y9SCHsLMT105713rB10IV",
				BanLength: "_14KS1Rt4ecAeHrAVFStL2n",
				banLength: "_14KS1Rt4ecAeHrAVFStL2n",
				isDisabled: "_3FQWLp6TeLNW0P14RMTGUn",
				BanLengthDays: "_34HussaQod-Yr8UQii6_EM",
				banLengthDays: "_34HussaQod-Yr8UQii6_EM",
				NumberInput: "_2_hBB86aqyqySSaODRHCt8",
				numberInput: "_2_hBB86aqyqySSaODRHCt8",
				StyledPermanentLabel: "_28lH71X854yinMNr2pzLlV",
				styledPermanentLabel: "_28lH71X854yinMNr2pzLlV",
				DescriptionText: "_2qrQzheLoaZZVefsJXThbW",
				descriptionText: "_2qrQzheLoaZZVefsJXThbW",
				BanLengthContainer: "Wt-OAd3PRXDzyks4SeiTT",
				banLengthContainer: "Wt-OAd3PRXDzyks4SeiTT",
				Bullet: "LusCMd8yHS-4_9XlhZpDY",
				bullet: "LusCMd8yHS-4_9XlhZpDY",
				VisibilityNote: "_1znuUPndM3k-XpOdaInCRt",
				visibilityNote: "_1znuUPndM3k-XpOdaInCRt",
				PermanentCheckbox: "_2yikAT1fG9F2gljm8b0FM5",
				permanentCheckbox: "_2yikAT1fG9F2gljm8b0FM5",
				ModalFooter: "Zfyj5B049nkMNmpt2F4PK",
				modalFooter: "Zfyj5B049nkMNmpt2F4PK",
				FooterRow: "ayyLCu5N-CWR6bsdVNMwW",
				footerRow: "ayyLCu5N-CWR6bsdVNMwW",
				CheckboxWrapper: "_33C5Xe1t7nuSQoLX8Nkpay",
				checkboxWrapper: "_33C5Xe1t7nuSQoLX8Nkpay"
			}
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/actions/apiRequestState.ts"),
				u = n("./src/reddit/actions/subredditModeration/ban.ts"),
				m = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				p = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/TextButton/index.tsx"),
				f = n("./src/reddit/helpers/isValidUsername/index.tsx"),
				x = n("./src/reddit/icons/svgs/Unban/index.tsx"),
				_ = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				y = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				g = n("./src/reddit/models/ApiRequestState/index.ts"),
				C = n("./src/reddit/models/SubredditModeration/index.ts"),
				w = n("./src/reddit/selectors/apiRequestState.ts"),
				S = n("./src/reddit/selectors/bannedUser.ts"),
				k = n("./src/reddit/components/BannedUserList/AddBannedUserModal/DaysInput.tsx"),
				E = n("./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.tsx"),
				j = n("./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.m.less"),
				O = n.n(j);
			const M = 300,
				v = 1e3,
				I = l.a.wrapped(x.a, "Unban", O.a),
				R = l.a.wrapped(p.s, "UnbanButton", O.a),
				N = l.a.wrapped(p.p, "ModalText", O.a),
				T = l.a.div("DescriptionText", O.a),
				B = l.a.span("Bullet", O.a),
				U = l.a.wrapped(T, "VisibilityNote", O.a),
				D = l.a.wrapped(p.g, "ModalFooter", O.a),
				P = l.a.div("FooterRow", O.a),
				L = Object(d.c)({
					apiRequestStates: w.a,
					user(e, t) {
						if (t.user) return t.user;
						const {
							username: n,
							subredditId: s
						} = t;
						return n ? Object(S.b)(e, {
							username: n,
							subredditId: s
						}) : void 0
					}
				}),
				A = Object(o.b)(L, (e, {
					subredditId: t
				}) => ({
					onBanUser: (n, s, r, a, o, d, i) => e(Object(u.b)(t, {
						username: n,
						modNote: s,
						duration: r,
						banMessage: a,
						reason: o,
						contextId: d
					}, i)),
					releaseRequest: t => e(Object(c.g)(t))
				}));
			class F extends a.a.Component {
				constructor(e) {
					super(e), this.onRemove = () => {
						const {
							props: e
						} = this;
						e.onUnbanUser && e.onUnbanUser(), e.toggleModal(), e.trackEventWithName("remove")()
					}, this.onChangeModNote = e => {
						e.currentTarget.value.length <= M && this.setState({
							modNote: e.currentTarget.value
						})
					}, this.onChangeBanDuration = e => {
						const t = Number(e.currentTarget.value);
						"number" == typeof t && (t < 0 || t > C.b || this.setState({
							duration: t
						}))
					}, this.canSave = () => !this.isApiRequestInProgress() && (!!this.state.reason && (!!Object(f.a)(this.state.username) && (!(!this.state.durationIsPermanent && !this.state.duration) && !(this.state.banMessage && this.state.banMessage.length > v)))), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						let n = t.durationIsPermanent ? null : t.duration;
						const s = e.user && null != e.user.duration && e.user.duration === n;
						null != n && s && (n += 1);
						const r = Object(g.b)();
						e.onBanUser(t.username, t.modNote, n, t.banMessage, t.reason, t.contextId, r), this.setState({
							apiRequestId: r
						})
					}, this.handleModalBodyClick = () => {
						this.dropdownApi && this.dropdownApi.closeDropdown()
					}, this.togglePermanent = e => {
						e.key && "Enter" !== e.key || this.setState({
							durationIsPermanent: !this.state.durationIsPermanent,
							duration: void 0
						})
					}, this.setDropdownApi = e => this.dropdownApi = e;
					const {
						contextId: t,
						user: n
					} = this.props;
					this.state = {
						banMessage: n && n.banMessage || "",
						duration: n && null !== n.duration ? n.duration : void 0,
						durationIsPermanent: !n || null === n.duration,
						modNote: n && n.modNote || "",
						reason: n && n.reason || "",
						username: n && n.username || e.username || "",
						contextId: n && (n.commentId || n.postId) || t || void 0,
						apiRequestId: void 0
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					if (this.state.apiRequestId) {
						const t = e.apiRequestStates[this.state.apiRequestId];
						t && t.apiRequestStatus === g.a.Complete && this.onSubmitRequestComplete()
					}
				}
				isApiRequestInProgress() {
					if (!this.state.apiRequestId) return !1;
					const e = this.props.apiRequestStates[this.state.apiRequestId];
					return !!e && e.apiRequestStatus === g.a.Pending
				}
				componentWillUnmount() {
					this.state.apiRequestId && this.props.releaseRequest(this.state.apiRequestId)
				}
				onSubmitRequestComplete() {
					const {
						props: e
					} = this;
					e.user ? e.trackEventWithName("edit")() : e.trackAddEvent(), e.toggleModal()
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = e.username || e.user && e.user.username || "", r = e.user && e.user.bannedAtUTC;
					return a.a.createElement(p.e, {
						onClick: this.handleModalBodyClick
					}, a.a.createElement(p.i, null, a.a.createElement(y.a, null, a.a.createElement(p.q, null, r ? s.fbt._("Edit ban for: {username}", [s.fbt._param("username", `u/${n}`)], {
						hk: "2eWbbe"
					}) : s.fbt._("Ban a user: {username}", [s.fbt._param("username", n && `u/${n}`)], {
						hk: "1pLEsE"
					})), a.a.createElement(h.a, {
						onClick: e.toggleModal
					}, a.a.createElement(p.b, null)))), a.a.createElement(p.l, null, !n && a.a.createElement(p.h, null, a.a.createElement(p.k, null, s.fbt._("Enter username", null, {
						hk: "1CnwdN"
					})), a.a.createElement(p.j, {
						autoFocus: !0,
						"data-redditstyle": !0,
						onChange: e => this.setState({
							username: e.currentTarget.value
						}),
						placeholder: s.fbt._("u/username", null, {
							hk: "5wNow"
						}),
						value: t.username
					})), a.a.createElement(p.h, null, a.a.createElement(p.k, null, s.fbt._("Reason for ban", null, {
						hk: "dGjdF"
					})), a.a.createElement(E.a, {
						onDropdownApi: this.setDropdownApi,
						onSelectReason: e => this.setState({
							reason: e
						}),
						reason: t.reason,
						subredditId: e.subredditId
					})), a.a.createElement(p.h, null, a.a.createElement(p.k, null, s.fbt._("Mod Note", null, {
						hk: "2di7R1"
					})), a.a.createElement(p.j, {
						"data-redditstyle": !0,
						onChange: this.onChangeModNote,
						placeholder: s.fbt._("Mod note", null, {
							hk: "4t4DGf"
						}),
						value: t.modNote
					}), a.a.createElement(m.a, {
						maxChars: M,
						text: t.modNote
					})), a.a.createElement(k.a, {
						duration: t.duration,
						isDurationPermanent: t.durationIsPermanent,
						onChangeDuration: this.onChangeBanDuration,
						togglePermanent: this.togglePermanent
					})), a.a.createElement(D, null, a.a.createElement(P, null, a.a.createElement(N, null, s.fbt._("Note to include in ban message", null, {
						hk: "44jlkB"
					}), a.a.createElement(B, null, "•"))), a.a.createElement(P, null, a.a.createElement(p.t, {
						onChange: e => this.setState({
							banMessage: e.currentTarget.value
						}),
						placeholder: s.fbt._("Reason they were banned", null, {
							hk: "rhFot"
						}),
						value: t.banMessage,
						"data-redditstyle": !0
					})), a.a.createElement(P, null, a.a.createElement(m.a, {
						maxChars: v,
						text: t.banMessage
					})), a.a.createElement(P, null, e.onUnbanUser ? a.a.createElement(R, {
						onClick: this.onRemove
					}, a.a.createElement(I, null), s.fbt._("Unban", null, {
						hk: "3zNsVi"
					})) : a.a.createElement(U, null, a.a.createElement(B, null, "•"), s.fbt._("Visible to banned user", null, {
						hk: "1PQbxq"
					})), a.a.createElement(_.a, null, a.a.createElement(p.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(b.l, {
						className: O.a.PrimaryButton,
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, r ? s.fbt._("Edit Ban", null, {
						hk: "4laqjI"
					}) : s.fbt._("Ban user", null, {
						hk: "3vVKWt"
					}))))))
				}
			}
			t.default = Object(i.a)(A(F))
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				d = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				i = n.n(d);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(o.b, {
				className: Object(a.a)(e.className, i.a.container, e.text.length >= e.maxChars ? i.a.mOverflow : null)
			}, l._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [l._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "p", (function() {
				return d
			})), n.d(t, "n", (function() {
				return i
			})), n.d(t, "o", (function() {
				return l
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "j", (function() {
				return C
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(r);
			const o = s.a.section("FormPage", a.a),
				d = s.a.h1("HomePageTitle", a.a),
				i = s.a.button("HomePageBreadcrumb", a.a),
				l = s.a.div("HomePageGroup", a.a),
				c = s.a.h1("FormPageTitle", a.a),
				u = s.a.div("FormPageSection", a.a),
				m = s.a.div("FormGroup", a.a),
				p = s.a.h2("FormGroupTitle", a.a),
				b = s.a.div("FormElement", a.a),
				h = s.a.div("FormGroupDescription", a.a),
				f = s.a.div("FormItem", a.a),
				x = s.a.h3("FormElementTitle", a.a),
				_ = s.a.div("FormElementDescription", a.a),
				y = s.a.div("FormElementError", a.a),
				g = s.a.div("FormElementSubGroup", a.a),
				C = s.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "g", (function() {
				return y
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(l);
			const u = s.a.wrapped(r.a, "ModalInput", c.a),
				m = s.a.input("Input", c.a),
				p = s.a.wrapped(i.a, "RadioOn", c.a),
				b = s.a.wrapped(d.a, "RadioOff", c.a),
				h = s.a.wrapped(a.a, "Checkbox", c.a),
				f = s.a.wrapped(o.a, "CheckboxSelected", c.a),
				x = s.a.textarea("Textarea", c.a),
				_ = s.a.label("StyledLabel", c.a),
				y = s.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				h = n.n(b);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends o.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(d.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? o.a.createElement(i.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href,
						disabled: e.disabled
					}), e.children && o.a.createElement("span", {
						className: n
					}, e.children), o.a.createElement("span", {
						className: Object(d.a)(h.a.text, e.textClassName)
					}, e.displayText)) : o.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						disabled: e.disabled,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? o.a.createElement("div", null, e.children) : o.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && o.a.createElement("span", {
						className: Object(d.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(c.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(d.a)(h.a.row, e, {
					[h.a.mIsInteractive]: !t.noHover,
					[h.a.mIsSelected]: t.isSelected,
					[h.a.topics]: t.isTopicsStyle
				});
				return o.a.createElement(x, f({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				a = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				o = n.n(a);
			t.a = s.a.wrapped(r.a, "unstyledInternalLink", o.a)
		},
		"./src/reddit/helpers/isValidUsername/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/helpers/normalizeUsername/index.tsx");
			t.a = e => {
				const t = Object(s.a)(e.trim());
				return t.length > 2 && t.length <= 20
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(a.b)("caret_down",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				a = n.n(r);
			t.a = s.a.div("rightAligned", a.a)
		},
		"./src/reddit/selectors/apiRequestState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e.apiRequestState
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BannedUserModal.3c7f8db0913ff840f0f6.js.map