// https://www.redditstatic.com/desktop2x/BannedUserModal.2c5ce27340ab568b28fe.js
// Retrieved at 6/7/2023, 1:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BannedUserModal"], {
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
				a = n("./node_modules/lodash/get.js"),
				r = n.n(a),
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
				g = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const x = (e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
				endpoint: Object(f.a)(Object(g.a)(`${e.apiUrl}/api/v1/${t}/banned`)),
				method: m.pb.GET,
				data: n
			});
			var _ = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				C = n("./src/reddit/models/SubredditModeration/index.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/activeModalId.ts"),
				v = n("./src/reddit/selectors/bannedUser.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				k = n("./src/reddit/actions/subredditModeration/constants.ts"),
				O = n("./src/lib/initializeClient/installReducer.ts"),
				j = n("./node_modules/redux/es/redux.js");
			var M = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.s:
					case k.r:
						return null;
					case k.q:
						return t.payload;
					default:
						return e
				}
			};
			const R = {};
			var L = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.s: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, a = Object(C.e)(n, s);
							return {
								...e,
								[a]: !0
							}
						}
						case k.r:
						case k.q: {
							const {
								subredditId: n,
								fetchedToken: s
							} = t.payload, a = Object(C.e)(n, s);
							return {
								...e,
								[a]: !1
							}
						}
						default:
							return e
					}
				},
				I = Object(j.c)({
					error: M,
					pending: L
				});
			const B = {};
			var U = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.r: {
							const {
								fetchedToken: n,
								subredditId: s
							} = t.payload, a = Object(C.e)(s, n);
							return {
								...e,
								[a]: !0
							}
						}
						default:
							return e
					}
				},
				T = n("./src/reddit/actions/inContextModeration.ts");
			var N = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case T.a:
						return t.payload;
					default:
						return e
				}
			};
			const P = {};
			var A = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.r: {
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
				D = n("./node_modules/icepick/icepick.js");
			const F = {};
			var q = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.p:
					case k.r: {
						const {
							subredditId: n,
							bannedUsers: s
						} = t.payload;
						return Object(D.merge)(e, {
							[n]: s
						})
					}
					case k.w: {
						const {
							subredditId: n,
							userId: s
						} = t.payload;
						return Object(D.unsetIn)(e, [n, s])
					}
					default:
						return e
				}
			};
			var H = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case k.v:
					case k.u:
						return null;
					case k.t:
						return t.payload;
					default:
						return e
				}
			};
			var W = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.v:
							return !0;
						case k.u:
						case k.t:
							return !1;
						default:
							return e
					}
				},
				X = Object(j.c)({
					error: H,
					pending: W
				});
			var G = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.v:
						case k.t:
							return null;
						case k.u: {
							const e = t.payload.bannedUserIds[0];
							return e ? t.payload.bannedUsers[e] : null
						}
						default:
							return e
					}
				},
				J = Object(j.c)({
					api: X,
					result: G
				});
			const Z = {};
			var Q = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case k.r: {
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
						case k.w: {
							const {
								subredditId: n,
								userId: s
							} = t.payload;
							return {
								[n]: e[n].filter(e => e !== s)
							}
						}
						case k.p: {
							const {
								subredditId: n,
								bannedUserIds: s
							} = t.payload, a = s[0];
							return a && e[n] && -1 === e[n].indexOf(a) ? {
								[n]: [a, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				K = Object(j.c)({
					api: I,
					fetchedTokens: U,
					inContext: N,
					loadMore: A,
					models: q,
					search: J,
					userOrder: Q
				});
			Object(O.a)({
				features: {
					banned: K
				}
			});
			const z = Object(o.a)(k.s),
				V = Object(o.a)(k.r),
				Y = Object(o.a)(k.q),
				$ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (n, s, a) => {
						let {
							apiContext: r
						} = a;
						const o = s(),
							d = t.after || "",
							i = Object(C.e)(e, d),
							l = o.features.banned.fetchedTokens[i];
						if (o.features.banned.api.pending[i] || l) return;
						n(z({
							subredditId: e,
							fetchedToken: d
						}));
						const c = o.subreddits.models[e].name,
							u = await x(r(), c, t);
						u.ok ? n(V({
							...u.body,
							fetchedToken: d
						})) : n(Y({
							subredditId: e,
							fetchedToken: d
						}))
					}
				},
				ee = Object(o.a)(k.v),
				te = Object(o.a)(k.u),
				ne = Object(o.a)(k.t),
				se = (e, t) => async (n, s, a) => {
					let {
						apiContext: r
					} = a;
					const o = s().subreddits.models[e].name,
						d = {
							username: Object(_.a)(t)
						};
					n(ee());
					const i = await x(r(), o, d);
					i.ok ? n(te(i.body)) : n(ne(i.error))
				}, ae = Object(o.a)(k.p), re = Object(o.a)(k.w), oe = (e, t, n) => async (a, o, i) => {
					let {
						apiContext: l
					} = i;
					const u = o(),
						g = u.subreddits.models[e].url,
						C = u.subreddits.models[e].name;
					t.username = Object(_.a)(t.username), a(Object(d.h)(n));
					const S = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
						endpoint: Object(f.a)(`${e.apiUrl}${t}api/friend`),
						method: m.pb.POST,
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
					}))(l(), g, t);
					if (S.ok) {
						a(Object(d.e)(n));
						const e = {
							username: t.username
						};
						a(Object(c.f)({
							kind: y.b.SuccessMod,
							text: s.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const r = await x(l(), C, e);
						r.ok && a(ae(r.body))
					} else {
						a(Object(d.f)(n, S.error));
						const e = r()(S, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(c.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, de = (e, t) => async (n, a, o) => {
					let {
						apiContext: d
					} = o;
					const i = a().subreddits.models[e].url,
						l = await ((e, t, n) => Object(p.a)(Object(b.a)(e, [h.a]), {
							endpoint: Object(f.a)(`${e.apiUrl}${t}api/unfriend`),
							method: m.pb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(d(), i, t);
					if (l.ok) n(re({
						subredditId: e,
						userId: t
					})), n(Object(c.f)({
						kind: y.b.SuccessMod,
						text: s.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = r()(l, "body.json.errors[0][1]", s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(c.f)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, s) => {
					const a = s();
					await Promise.all([(async () => {
						if (!Object(S.b)(u.a.BAN_USER)(a) && !Object(w.U)(a, {
								subredditId: e
							})) {
							const t = Object(w.X)(a, {
								subredditId: e
							});
							await n(Object(l.o)(t.name))
						}
					})(), (async () => {
						const s = Object(E.Db)(a, {
							userName: t
						});
						if (!s) return;
						const r = Object(v.h)(a, {
							subredditId: e
						});
						r && r[s.id] || await n($(e, {
							username: t
						}))
					})()]), n(Object(i.i)(u.a.BAN_USER))
				}
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/DaysInput.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
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
				g = d.a.div("BanLengthContainer", u.a),
				x = d.a.div("CheckboxWrapper", u.a),
				_ = d.a.div("PermanentCheckbox", u.a);
			t.a = e => r.a.createElement(i.h, null, r.a.createElement(i.k, null, s.fbt._("How long?", null, {
				hk: "1InKw6"
			})), r.a.createElement(g, null, r.a.createElement(m, {
				className: Object(o.a)({
					[u.a.isDisabled]: e.isDurationPermanent
				})
			}, r.a.createElement(b, {
				tabIndex: 0,
				disabled: e.isDurationPermanent,
				onChange: e.onChangeDuration,
				min: "0",
				type: "number",
				value: void 0 !== e.duration && null !== e.duration ? e.duration : ""
			}), r.a.createElement(p, null, s.fbt._("Days", null, {
				hk: "2TkJg0"
			}))), r.a.createElement(h, {
				onClick: e.togglePermanent
			}, r.a.createElement(_, {
				onKeyDown: e.togglePermanent
			}, r.a.createElement(x, {
				tabIndex: 0
			}, e.isDurationPermanent ? r.a.createElement(l.b, null) : r.a.createElement(l.a, null))), r.a.createElement(f, null, s.fbt._("Permanent", null, {
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
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
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
					subredditRules: m.W
				}),
				g = Object(o.b)(f);
			class x extends r.a.Component {
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
					return r.a.createElement("div", {
						className: b.a.Container
					}, r.a.createElement("button", {
						className: b.a.dropdownTarget,
						onClick: this.handleToggleDropdown
					}, r.a.createElement("div", {
						className: b.a.targetText
					}, e.reason || s.fbt._("None", null, {
						hk: "1IYbYO"
					})), r.a.createElement(u.b, null)), t.isOpen && r.a.createElement(l.a, {
						className: b.a.Dropdown,
						isOverlay: !0
					}, this.getRuleShortNames().map((t, n) => r.a.createElement(c.b, {
						key: t,
						className: b.a.DropdownRow,
						displayText: t,
						index: n,
						isSelected: e.reason === t,
						onClick: e => this.handleSelectReason(e, t)
					}))))
				}
			}
			t.a = g(x)
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
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
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
				g = n("./src/reddit/icons/svgs/Unban/index.tsx"),
				x = n("./src/reddit/layout/row/RightAlign/index.tsx"),
				_ = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				C = n("./src/reddit/models/ApiRequestState/index.ts"),
				y = n("./src/reddit/models/SubredditModeration/index.ts"),
				S = n("./src/reddit/selectors/apiRequestState.ts"),
				v = n("./src/reddit/selectors/bannedUser.ts"),
				w = n("./src/reddit/components/BannedUserList/AddBannedUserModal/DaysInput.tsx"),
				E = n("./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.tsx"),
				k = n("./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.m.less"),
				O = n.n(k);
			const j = 300,
				M = 5e3,
				R = l.a.wrapped(g.a, "Unban", O.a),
				L = l.a.wrapped(p.s, "UnbanButton", O.a),
				I = l.a.wrapped(p.p, "ModalText", O.a),
				B = l.a.div("DescriptionText", O.a),
				U = l.a.span("Bullet", O.a),
				T = l.a.wrapped(B, "VisibilityNote", O.a),
				N = l.a.wrapped(p.g, "ModalFooter", O.a),
				P = l.a.div("FooterRow", O.a),
				A = Object(d.c)({
					apiRequestStates: S.a,
					user(e, t) {
						if (t.user) return t.user;
						const {
							username: n,
							subredditId: s
						} = t;
						return n ? Object(v.b)(e, {
							username: n,
							subredditId: s
						}) : void 0
					}
				}),
				D = Object(o.b)(A, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						onBanUser: (t, s, a, r, o, d, i) => e(Object(u.b)(n, {
							username: t,
							modNote: s,
							duration: a,
							banMessage: r,
							reason: o,
							contextId: d
						}, i)),
						releaseRequest: t => e(Object(c.g)(t))
					}
				});
			class F extends r.a.Component {
				constructor(e) {
					super(e), this.onRemove = () => {
						const {
							props: e
						} = this;
						e.onUnbanUser && e.onUnbanUser(), e.toggleModal(), e.trackEventWithName("remove")()
					}, this.onChangeModNote = e => {
						e.currentTarget.value.length <= j && this.setState({
							modNote: e.currentTarget.value
						})
					}, this.onChangeBanDuration = e => {
						const t = Number(e.currentTarget.value);
						"number" == typeof t && (t < 0 || t > y.b || this.setState({
							duration: t
						}))
					}, this.canSave = () => !this.isApiRequestInProgress() && (!!this.state.reason && (!!Object(f.a)(this.state.username) && (!(!this.state.durationIsPermanent && !this.state.duration) && !(this.state.banMessage && this.state.banMessage.length > M)))), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						let n = t.durationIsPermanent ? null : t.duration;
						const s = e.user && null != e.user.duration && e.user.duration === n;
						null != n && s && (n += 1);
						const a = Object(C.b)();
						e.onBanUser(t.username, t.modNote, n, t.banMessage, t.reason, t.contextId, a), this.setState({
							apiRequestId: a
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
					} = this, n = e.username || e.user && e.user.username || "", a = e.user && e.user.bannedAtUTC;
					return r.a.createElement(p.e, {
						onClick: this.handleModalBodyClick
					}, r.a.createElement(p.i, null, r.a.createElement(_.a, null, r.a.createElement(p.q, null, a ? s.fbt._("Edit ban for: {username}", [s.fbt._param("username", `u/${n}`)], {
						hk: "2eWbbe"
					}) : s.fbt._("Ban a user: {username}", [s.fbt._param("username", n && `u/${n}`)], {
						hk: "1pLEsE"
					})), r.a.createElement(h.a, {
						onClick: e.toggleModal
					}, r.a.createElement(p.b, null)))), r.a.createElement(p.l, null, !n && r.a.createElement(p.h, null, r.a.createElement(p.k, null, s.fbt._("Enter username", null, {
						hk: "1CnwdN"
					})), r.a.createElement(p.j, {
						autoFocus: !0,
						"data-redditstyle": !0,
						onChange: e => this.setState({
							username: e.currentTarget.value
						}),
						placeholder: s.fbt._("u/username", null, {
							hk: "5wNow"
						}),
						value: t.username
					})), r.a.createElement(p.h, null, r.a.createElement(p.k, null, s.fbt._("Reason for ban", null, {
						hk: "dGjdF"
					})), r.a.createElement(E.a, {
						onDropdownApi: this.setDropdownApi,
						onSelectReason: e => this.setState({
							reason: e
						}),
						reason: t.reason,
						subredditId: e.subredditId
					})), r.a.createElement(p.h, null, r.a.createElement(p.k, null, s.fbt._("Mod Note", null, {
						hk: "2di7R1"
					})), r.a.createElement(p.j, {
						"data-redditstyle": !0,
						onChange: this.onChangeModNote,
						placeholder: s.fbt._("Mod note", null, {
							hk: "4t4DGf"
						}),
						value: t.modNote
					}), r.a.createElement(m.a, {
						maxChars: j,
						text: t.modNote
					})), r.a.createElement(w.a, {
						duration: t.duration,
						isDurationPermanent: t.durationIsPermanent,
						onChangeDuration: this.onChangeBanDuration,
						togglePermanent: this.togglePermanent
					})), r.a.createElement(N, null, r.a.createElement(P, null, r.a.createElement(I, null, s.fbt._("Note to include in ban message", null, {
						hk: "44jlkB"
					}), r.a.createElement(U, null, "•"))), r.a.createElement(P, null, r.a.createElement(p.t, {
						onChange: e => this.setState({
							banMessage: e.currentTarget.value
						}),
						placeholder: s.fbt._("Reason they were banned", null, {
							hk: "rhFot"
						}),
						value: t.banMessage,
						"data-redditstyle": !0
					})), r.a.createElement(P, null, r.a.createElement(m.a, {
						maxChars: M,
						text: t.banMessage
					})), r.a.createElement(P, null, e.onUnbanUser ? r.a.createElement(L, {
						onClick: this.onRemove
					}, r.a.createElement(R, null), s.fbt._("Unban", null, {
						hk: "3zNsVi"
					})) : r.a.createElement(T, null, r.a.createElement(U, null, "•"), s.fbt._("Visible to banned user", null, {
						hk: "1PQbxq"
					})), r.a.createElement(x.a, null, r.a.createElement(p.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(b.l, {
						className: O.a.PrimaryButton,
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, a ? s.fbt._("Edit Ban", null, {
						hk: "4laqjI"
					}) : s.fbt._("Ban user", null, {
						hk: "3vVKWt"
					}))))))
				}
			}
			t.default = Object(i.a)(D(F))
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
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				d = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				i = n.n(d);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(o.b, {
				className: Object(r.a)(e.className, i.a.container, e.text.length >= e.maxChars ? i.a.mOverflow : null)
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
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "j", (function() {
				return y
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				r = n.n(a);
			const o = s.a.section("FormPage", r.a),
				d = s.a.h1("HomePageTitle", r.a),
				i = s.a.button("HomePageBreadcrumb", r.a),
				l = s.a.div("HomePageGroup", r.a),
				c = s.a.h1("FormPageTitle", r.a),
				u = s.a.div("FormPageSection", r.a),
				m = s.a.div("FormGroup", r.a),
				p = s.a.h2("FormGroupTitle", r.a),
				b = s.a.div("FormElement", r.a),
				h = s.a.div("FormGroupDescription", r.a),
				f = s.a.div("FormItem", r.a),
				g = s.a.h3("FormElementTitle", r.a),
				x = s.a.div("FormElementDescription", r.a),
				_ = s.a.div("FormElementError", r.a),
				C = s.a.div("FormElementSubGroup", r.a),
				y = s.a.li("FormListItem", r.a)
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
				return g
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "g", (function() {
				return _
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/ModalInput.tsx"),
				r = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(l);
			const u = s.a.wrapped(a.a, "ModalInput", c.a),
				m = s.a.input("Input", c.a),
				p = s.a.wrapped(i.a, "RadioOn", c.a),
				b = s.a.wrapped(d.a, "RadioOff", c.a),
				h = s.a.wrapped(r.a, "Checkbox", c.a),
				f = s.a.wrapped(o.a, "CheckboxSelected", c.a),
				g = s.a.textarea("Textarea", c.a),
				x = s.a.label("StyledLabel", c.a),
				_ = s.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/helpers/isValidUsername/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/helpers/normalizeUsername/index.tsx");
			t.a = e => {
				const t = Object(s.a)(e.trim());
				return t.length > 2 && t.length <= 20
			}
		},
		"./src/reddit/icons/svgs/Unban/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
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
				a = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = n.n(a);
			t.a = s.a.div("rightAligned", r.a)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BannedUserModal.2c5ce27340ab568b28fe.js.map