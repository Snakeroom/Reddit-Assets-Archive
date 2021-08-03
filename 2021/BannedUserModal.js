// https://www.redditstatic.com/desktop2x/BannedUserModal.6f521b09212f7e107426.js
// Retrieved at 8/3/2021, 2:50:08 PM by Reddit Dataminer v1.0.0
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
				c = n("./src/reddit/actions/subreddit.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts"),
				x = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				f = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const _ = (e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
				endpoint: Object(x.a)(Object(f.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.hb.GET,
				data: n
			});
			var g = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				C = n("./src/reddit/models/SubredditModeration/index.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				w = n("./src/reddit/selectors/activeModalId.ts"),
				S = n("./src/reddit/selectors/bannedUser.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/actions/subredditModeration/constants.ts"),
				j = n("./src/lib/initializeClient/installReducer.ts"),
				M = n("./node_modules/redux/es/redux.js");
			var O = (e = null, t) => {
				switch (t.type) {
					case k.o:
					case k.n:
						return null;
					case k.m:
						return t.payload;
					default:
						return e
				}
			};
			const L = {};
			var I = (e = L, t) => {
					switch (t.type) {
						case k.o: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(C.d)(n, s);
							return {
								...e,
								[r]: !0
							}
						}
						case k.n:
						case k.m: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, r = Object(C.d)(n, s);
							return {
								...e,
								[r]: !1
							}
						}
						default:
							return e
					}
				},
				R = Object(M.c)({
					error: O,
					pending: I
				});
			const N = {};
			var B = (e = N, t) => {
					switch (t.type) {
						case k.n: {
							const {
								fetchedToken: n,
								subredditId: s
							} = t.payload, r = Object(C.d)(s, n);
							return {
								...e,
								[r]: !0
							}
						}
						default:
							return e
					}
				},
				T = n("./src/reddit/actions/inContextModeration.ts");
			var U = (e = null, t) => {
				switch (t.type) {
					case T.a:
						return t.payload;
					default:
						return e
				}
			};
			const D = {};
			var P = (e = D, t) => {
					switch (t.type) {
						case k.n: {
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
					case k.l:
					case k.n: {
						const {
							subredditId: n,
							bannedUsers: s
						} = t.payload;
						return Object(A.merge)(e, {
							[n]: s
						})
					}
					case k.s: {
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
					case k.r:
					case k.q:
						return null;
					case k.p:
						return t.payload;
					default:
						return e
				}
			};
			var X = (e = !1, t) => {
					switch (t.type) {
						case k.r:
							return !0;
						case k.q:
						case k.p:
							return !1;
						default:
							return e
					}
				},
				W = Object(M.c)({
					error: H,
					pending: X
				});
			var G = (e = null, t) => {
					switch (t.type) {
						case k.r:
						case k.p:
							return null;
						case k.q: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				K = Object(M.c)({
					api: W,
					result: G
				});
			const J = {};
			var Z = (e = J, t) => {
					switch (t.type) {
						case k.n: {
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
						case k.s: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== s)
							}
						}
						case k.l: {
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
				Q = Object(M.c)({
					api: R,
					fetchedTokens: B,
					inContext: U,
					loadMore: P,
					models: q,
					search: K,
					userOrder: Z
				});
			Object(j.a)({
				features: {
					banned: Q
				}
			});
			const z = Object(o.a)(k.o),
				V = Object(o.a)(k.n),
				Y = Object(o.a)(k.m),
				$ = (e, t = {}) => async (n, s, {
					apiContext: r
				}) => {
					const a = s(),
						o = t.after || "",
						d = Object(C.d)(e, o),
						i = a.features.banned.fetchedTokens[d];
					if (a.features.banned.api.pending[d] || i) return;
					n(z({
						subredditId: e,
						fetchedToken: o
					}));
					const c = a.subreddits.models[e].name,
						l = await _(r(), c, t);
					l.ok ? n(V({
						...l.body,
						fetchedToken: o
					})) : n(Y({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(k.r), te = Object(o.a)(k.q), ne = Object(o.a)(k.p), se = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s().subreddits.models[e].name,
						o = {
							username: Object(g.a)(t)
						};
					n(ee());
					const d = await _(r(), a, o);
					d.ok ? n(te(d.body)) : n(ne(d.error))
				}, re = Object(o.a)(k.l), ae = Object(o.a)(k.s), oe = (e, t, n) => async (r, o, {
					apiContext: i
				}) => {
					const c = o(),
						u = c.subreddits.models[e].url,
						x = c.subreddits.models[e].name;
					t.username = Object(g.a)(t.username), r(Object(d.h)(n));
					const f = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
						endpoint: `${e.apiUrl}${t}api/friend`,
						method: m.hb.POST,
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
					if (f.ok) {
						r(Object(d.e)(n));
						const e = {
							username: t.username
						};
						r(Object(l.f)({
							kind: y.b.SuccessMod,
							text: s.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const a = await _(i(), x, e);
						a.ok && r(re(a.body))
					} else {
						r(Object(d.f)(n, f.error));
						const e = a()(f, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(l.f)({
							kind: y.b.Error,
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
							method: m.hb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(o(), d, t);
					if (i.ok) n(ae({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: y.b.SuccessMod,
						text: s.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = a()(i, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, s) => {
					const r = s();
					await Promise.all([(async () => {
						if (!Object(w.b)(u.a.BAN_USER)(r) && !Object(E.P)(r, {
								subredditId: e
							})) {
							const t = Object(E.S)(r, {
								subredditId: e
							});
							await n(Object(c.o)(t.name))
						}
					})(), (async () => {
						const s = Object(v.mb)(r, {
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
				c = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				l = n("./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.m.less"),
				u = n.n(l);
			const m = d.a.div("BanLength", u.a),
				p = d.a.wrapped(i.o, "BanLengthDays", u.a),
				b = d.a.wrapped(i.i, "NumberInput", u.a),
				h = d.a.div("StyledPermanentLabel", u.a),
				x = d.a.div("DescriptionText", u.a),
				f = d.a.div("BanLengthContainer", u.a),
				_ = d.a.div("CheckboxWrapper", u.a),
				g = d.a.div("PermanentCheckbox", u.a);
			t.a = e => a.a.createElement(i.g, null, a.a.createElement(i.j, null, s.fbt._("How long?", null, {
				hk: "1InKw6"
			})), a.a.createElement(f, null, a.a.createElement(m, {
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
			}, a.a.createElement(g, {
				onKeyDown: e.togglePermanent
			}, a.a.createElement(_, {
				tabIndex: 0
			}, e.isDurationPermanent ? a.a.createElement(c.b, null) : a.a.createElement(c.a, null))), a.a.createElement(x, null, s.fbt._("Permanent", null, {
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
				c = n("./src/reddit/controls/Dropdown/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/Row.tsx"),
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
				x = Object(d.c)({
					subredditRules: m.R
				}),
				f = Object(o.b)(x);
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
					})), a.a.createElement(u.b, null)), t.isOpen && a.a.createElement(c.a, {
						className: b.a.Dropdown,
						isOverlay: !0
					}, this.getRuleShortNames().map((t, n) => a.a.createElement(l.b, {
						key: t,
						className: b.a.DropdownRow,
						displayText: t,
						index: n,
						isSelected: e.reason === t,
						onClick: e => this.handleSelectReason(e, t)
					}))))
				}
			}
			t.a = f(_)
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
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/actions/apiRequestState.ts"),
				u = n("./src/reddit/actions/subredditModeration/ban.ts"),
				m = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				p = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/TextButton/index.tsx"),
				x = n("./src/reddit/helpers/isValidUsername/index.tsx"),
				f = n("./src/reddit/icons/svgs/Unban/index.tsx"),
				_ = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				C = n("./src/reddit/models/ApiRequestState/index.ts"),
				y = n("./src/reddit/models/SubredditModeration/index.ts"),
				w = n("./src/reddit/selectors/apiRequestState.ts"),
				S = n("./src/reddit/selectors/bannedUser.ts"),
				E = n("./src/reddit/components/BannedUserList/AddBannedUserModal/DaysInput.tsx"),
				v = n("./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.tsx"),
				k = n("./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.m.less"),
				j = n.n(k);
			const M = 300,
				O = 1e3,
				L = c.a.wrapped(f.a, "Unban", j.a),
				I = c.a.wrapped(p.r, "UnbanButton", j.a),
				R = c.a.wrapped(p.o, "ModalText", j.a),
				N = c.a.div("DescriptionText", j.a),
				B = c.a.span("Bullet", j.a),
				T = c.a.wrapped(N, "VisibilityNote", j.a),
				U = c.a.wrapped(p.f, "ModalFooter", j.a),
				D = c.a.div("FooterRow", j.a),
				P = Object(d.c)({
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
				A = Object(o.b)(P, (e, {
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
					releaseRequest: t => e(Object(l.g)(t))
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
						"number" == typeof t && (t < 0 || t > y.b || this.setState({
							duration: t
						}))
					}, this.canSave = () => !this.isApiRequestInProgress() && (!!this.state.reason && (!!Object(x.a)(this.state.username) && (!(!this.state.durationIsPermanent && !this.state.duration) && !(this.state.banMessage && this.state.banMessage.length > O)))), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						let n = t.durationIsPermanent ? null : t.duration;
						const s = e.user && null != e.user.duration && e.user.duration === n;
						null != n && s && (n += 1);
						const r = Object(C.b)();
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
						t && t.apiRequestStatus === C.a.Complete && this.onSubmitRequestComplete()
					}
				}
				isApiRequestInProgress() {
					if (!this.state.apiRequestId) return !1;
					const e = this.props.apiRequestStates[this.state.apiRequestId];
					return !!e && e.apiRequestStatus === C.a.Pending
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
					return a.a.createElement(p.d, {
						onClick: this.handleModalBodyClick
					}, a.a.createElement(p.h, null, a.a.createElement(g.a, null, a.a.createElement(p.p, null, r ? s.fbt._("Edit ban for: {username}", [s.fbt._param("username", `u/${n}`)], {
						hk: "2eWbbe"
					}) : s.fbt._("Ban a user: {username}", [s.fbt._param("username", n && `u/${n}`)], {
						hk: "1pLEsE"
					})), a.a.createElement(h.a, {
						onClick: e.toggleModal
					}, a.a.createElement(p.b, null)))), a.a.createElement(p.k, null, !n && a.a.createElement(p.g, null, a.a.createElement(p.j, null, s.fbt._("Enter username", null, {
						hk: "1CnwdN"
					})), a.a.createElement(p.i, {
						autoFocus: !0,
						"data-redditstyle": !0,
						onChange: e => this.setState({
							username: e.currentTarget.value
						}),
						placeholder: s.fbt._("u/username", null, {
							hk: "5wNow"
						}),
						value: t.username
					})), a.a.createElement(p.g, null, a.a.createElement(p.j, null, s.fbt._("Reason for ban", null, {
						hk: "dGjdF"
					})), a.a.createElement(v.a, {
						onDropdownApi: this.setDropdownApi,
						onSelectReason: e => this.setState({
							reason: e
						}),
						reason: t.reason,
						subredditId: e.subredditId
					})), a.a.createElement(p.g, null, a.a.createElement(p.j, null, s.fbt._("Mod Note", null, {
						hk: "2di7R1"
					})), a.a.createElement(p.i, {
						"data-redditstyle": !0,
						onChange: this.onChangeModNote,
						placeholder: s.fbt._("Mod note", null, {
							hk: "4t4DGf"
						}),
						value: t.modNote
					}), a.a.createElement(m.a, {
						maxChars: M,
						text: t.modNote
					})), a.a.createElement(E.a, {
						duration: t.duration,
						isDurationPermanent: t.durationIsPermanent,
						onChangeDuration: this.onChangeBanDuration,
						togglePermanent: this.togglePermanent
					})), a.a.createElement(U, null, a.a.createElement(D, null, a.a.createElement(R, null, s.fbt._("Note to include in ban message", null, {
						hk: "44jlkB"
					}), a.a.createElement(B, null, "•"))), a.a.createElement(D, null, a.a.createElement(p.s, {
						onChange: e => this.setState({
							banMessage: e.currentTarget.value
						}),
						placeholder: s.fbt._("Reason they were banned", null, {
							hk: "rhFot"
						}),
						value: t.banMessage,
						"data-redditstyle": !0
					})), a.a.createElement(D, null, a.a.createElement(m.a, {
						maxChars: O,
						text: t.banMessage
					})), a.a.createElement(D, null, e.onUnbanUser ? a.a.createElement(I, {
						onClick: this.onRemove
					}, a.a.createElement(L, null), s.fbt._("Unban", null, {
						hk: "3zNsVi"
					})) : a.a.createElement(T, null, a.a.createElement(B, null, "•"), s.fbt._("Visible to banned user", null, {
						hk: "1PQbxq"
					})), a.a.createElement(_.a, null, a.a.createElement(p.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(b.i, {
						className: j.a.PrimaryButton,
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
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(o.b, {
				className: Object(a.a)(e.className, i.a.container, e.text.length >= e.maxChars ? i.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
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
				return c
			})), n.d(t, "m", (function() {
				return l
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
				return x
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "j", (function() {
				return y
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(r);
			const o = s.a.section("FormPage", a.a),
				d = s.a.h1("HomePageTitle", a.a),
				i = s.a.button("HomePageBreadcrumb", a.a),
				c = s.a.div("HomePageGroup", a.a),
				l = s.a.h1("FormPageTitle", a.a),
				u = s.a.div("FormPageSection", a.a),
				m = s.a.div("FormGroup", a.a),
				p = s.a.h2("FormGroupTitle", a.a),
				b = s.a.div("FormElement", a.a),
				h = s.a.div("FormGroupDescription", a.a),
				x = s.a.div("FormItem", a.a),
				f = s.a.h3("FormElementTitle", a.a),
				_ = s.a.div("FormElementDescription", a.a),
				g = s.a.div("FormElementError", a.a),
				C = s.a.div("FormElementSubGroup", a.a),
				y = s.a.li("FormListItem", a.a)
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
				return x
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "g", (function() {
				return g
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				l = n.n(c);
			const u = s.a.wrapped(r.a, "ModalInput", l.a),
				m = s.a.input("Input", l.a),
				p = s.a.wrapped(i.a, "RadioOn", l.a),
				b = s.a.wrapped(d.a, "RadioOff", l.a),
				h = s.a.wrapped(a.a, "Checkbox", l.a),
				x = s.a.wrapped(o.a, "CheckboxSelected", l.a),
				f = s.a.textarea("Textarea", l.a),
				_ = s.a.label("StyledLabel", l.a),
				g = s.a.input("StyledFileInput", l.a)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Dropdown/row.m.less"),
				h = n.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class f extends o.a.Component {
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
					return e.href ? o.a.createElement(i.a, x({}, t, {
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
					}, e.displayText)) : o.a.createElement(u.a, x({}, t, {
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
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && o.a.createElement(l.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && o.a.createElement(c.a, {
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
				return o.a.createElement(f, x({
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
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				d = n.n(o);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", i({
				className: Object(a.a)(d.a.dropdown, {
					[d.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Unban/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8,6.77247619 L8,6.27380952 L7.5072,6.27380952 L8,6.77247619 Z M7,5.76057143 L7,0.80952381 L11,0.80952381 L11,6.27380952 L10,6.27380952 L10,8.79628571 L15.9072,14.7738095 L15.2,15.4894286 L1,1.12038095 L1.7072,0.404761905 L3,1.71295238 L3,1.00178571 C3,0.44847619 3.4432,0 3.99,0 L4.01,0 C4.5568,0 5,0.44847619 5,1.00178571 L5,3.7367619 L5.8,4.54628571 L5.8,0.80952381 C5.8,0.585690476 5.9792,0.404761905 6.2,0.404761905 C6.4208,0.404761905 6.6,0.585690476 6.6,0.80952381 L6.6,5.35580952 L7,5.76057143 Z M8.2,8.9047619 L10.2,10.9285714 L10.2,14.2706905 C10.2,14.824 9.7568,15.2724762 9.21,15.2724762 L9.19,15.2724762 C8.6432,15.2724762 8.2,14.824 8.2,14.2706905 L8.2,8.9047619 Z M5.8,6.47619048 L6.284,6.96595238 C6.2568,6.97161905 6.2288,6.97485714 6.2,6.97485714 C5.9792,6.97485714 5.8,6.79392857 5.8,6.57009524 L5.8,6.47619048 Z M12.2,0.404761905 C12.4208,0.404761905 12.6,0.586095238 12.6,0.80952381 L12.6,6.67857143 C12.6,6.902 12.4208,7.08333333 12.2,7.08333333 C11.9792,7.08333333 11.8,6.902 11.8,6.67857143 L11.8,0.80952381 C11.8,0.586095238 11.9792,0.404761905 12.2,0.404761905 Z M14.01,0 C14.5568,0 15,0.44847619 15,1.00178571 L15,6.08154762 C15,6.63485714 14.5568,7.08333333 14.01,7.08333333 L13.99,7.08333333 C13.4432,7.08333333 13,6.63485714 13,6.08154762 L13,1.00178571 C13,0.44847619 13.4432,0 13.99,0 L14.01,0 Z M3,4.04761905 L5,6.07142857 L5,6.37783333 C5,6.93114286 4.5568,7.37961905 4.01,7.37961905 L3.99,7.37961905 C3.4432,7.37961905 3,6.93114286 3,6.37783333 L3,4.04761905 Z"
			})))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BannedUserModal.6f521b09212f7e107426.js.map