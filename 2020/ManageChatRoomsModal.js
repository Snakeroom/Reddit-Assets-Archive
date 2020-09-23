// https://www.redditstatic.com/desktop2x/ManageChatRoomsModal.30e40e6d6e6fea018ff5.js
// Retrieved at 9/23/2020, 4:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ManageChatRoomsModal"], {
		"./node_modules/lodash/_basePullAt.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseUnset.js"),
				s = n("./node_modules/lodash/_isIndex.js"),
				o = Array.prototype.splice;
			e.exports = function(e, t) {
				for (var n = e ? t.length : 0, r = n - 1; n--;) {
					var l = t[n];
					if (n == r || l !== i) {
						var i = l;
						s(l) ? o.call(e, l, 1) : a(e, l)
					}
				}
				return e
			}
		},
		"./node_modules/lodash/orderBy.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseOrderBy.js"),
				s = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n, o) {
				return null == e ? [] : (s(t) || (t = null == t ? [] : [t]), s(n = o ? void 0 : n) || (n = null == n ? [] : [n]), a(e, t, n))
			}
		},
		"./node_modules/lodash/remove.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_baseIteratee.js"),
				s = n("./node_modules/lodash/_basePullAt.js");
			e.exports = function(e, t) {
				var n = [];
				if (!e || !e.length) return n;
				var o = -1,
					r = [],
					l = e.length;
				for (t = a(t, 3); ++o < l;) {
					var i = e[o];
					t(i, o, e) && (n.push(i), r.push(o))
				}
				return s(e, r), n
			}
		},
		"./node_modules/lodash/transform.js": function(e, t, n) {
			var a = n("./node_modules/lodash/_arrayEach.js"),
				s = n("./node_modules/lodash/_baseCreate.js"),
				o = n("./node_modules/lodash/_baseForOwn.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				l = n("./node_modules/lodash/_getPrototype.js"),
				i = n("./node_modules/lodash/isArray.js"),
				d = n("./node_modules/lodash/isBuffer.js"),
				c = n("./node_modules/lodash/isFunction.js"),
				u = n("./node_modules/lodash/isObject.js"),
				m = n("./node_modules/lodash/isTypedArray.js");
			e.exports = function(e, t, n) {
				var h = i(e),
					p = h || d(e) || m(e);
				if (t = r(t, 4), null == n) {
					var g = e && e.constructor;
					n = p ? h ? new g : [] : u(e) && c(g) ? s(l(e)) : {}
				}
				return (p ? a : o)(e, (function(e, a, s) {
					return t(n, e, a, s)
				})), n
			}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				i = n.n(l);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(r.b, {
				className: Object(o.a)(e.className, i.a.container, e.text.length >= e.maxChars ? i.a.mOverflow : null)
			}, d._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [d._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/ManageChatRoomsModal/ChannelForm.m.less": function(e, t, n) {
			e.exports = {
				Checkbox: "SWJAS5It43TV2WCSu08kg",
				checkbox: "SWJAS5It43TV2WCSu08kg",
				ErrorMarker: "_3FPdallpeFHxMSVvU3cBDj",
				errorMarker: "_3FPdallpeFHxMSVvU3cBDj"
			}
		},
		"./src/reddit/components/ManageChatRoomsModal/Delete.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_1HodwCTe0_q_iHMU0gtqas",
				primaryButton: "_1HodwCTe0_q_iHMU0gtqas"
			}
		},
		"./src/reddit/components/ManageChatRoomsModal/Listing.m.less": function(e, t, n) {
			e.exports = {
				ModalHeader: "_3c9O0s5V72UVzY0WkrVc0l",
				modalHeader: "_3c9O0s5V72UVzY0WkrVc0l",
				SubredditChannelList: "_1UuUFiyXHhI-BEjZIX9LIS",
				subredditChannelList: "_1UuUFiyXHhI-BEjZIX9LIS",
				ModalHeadButton: "_1zLo9rmt-ILqGBbKdqtcFS",
				modalHeadButton: "_1zLo9rmt-ILqGBbKdqtcFS"
			}
		},
		"./src/reddit/components/ManageChatRoomsModal/Settings.m.less": function(e, t, n) {
			e.exports = {
				Checkbox: "_3nr2467jLuAHEEH0r2xj4V",
				checkbox: "_3nr2467jLuAHEEH0r2xj4V"
			}
		},
		"./src/reddit/components/ManageChatRoomsModal/SettingsSubscreens/Regex.m.less": function(e, t, n) {
			e.exports = {
				CountText: "FmgykLV6MdHUoRX8ka_wy",
				countText: "FmgykLV6MdHUoRX8ka_wy",
				ErrorText: "_1QiISSulAeP7hIRargB2CY",
				errorText: "_1QiISSulAeP7hIRargB2CY"
			}
		},
		"./src/reddit/components/ManageChatRoomsModal/_Controls.m.less": function(e, t, n) {
			e.exports = {
				DeleteButton: "_2T5drSkoGP_fx47iw5fGeD",
				deleteButton: "_2T5drSkoGP_fx47iw5fGeD",
				PrimaryButton: "dKH7yz1Tr1Z8tW8khmh1i",
				primaryButton: "dKH7yz1Tr1Z8tW8khmh1i",
				Textarea: "_2kSKPwsoY33ut4u9PJii4V",
				textarea: "_2kSKPwsoY33ut4u9PJii4V",
				ChatSettingsInput: "_13MQdBaimzq-nlxF1Lo_tC",
				chatSettingsInput: "_13MQdBaimzq-nlxF1Lo_tC",
				ChatSettingsLongerInput: "_1fKme3v23VsIDi8Gt2CN7D",
				chatSettingsLongerInput: "_1fKme3v23VsIDi8Gt2CN7D",
				Toggle: "_2KI7cmBjsdscIsgoueXGWg",
				toggle: "_2KI7cmBjsdscIsgoueXGWg",
				List: "_3sqLx91MHWD78BwIIszndJ",
				list: "_3sqLx91MHWD78BwIIszndJ",
				ListItem: "_27MGlBF-e_3KI2GigtMFh",
				listItem: "_27MGlBF-e_3KI2GigtMFh",
				ErrorMarker: "_3gzf66opVWsyQCDUlVkNOE",
				errorMarker: "_3gzf66opVWsyQCDUlVkNOE"
			}
		},
		"./src/reddit/components/ManageChatRoomsModal/_DomainFilterDropDown.m.less": function(e, t, n) {
			e.exports = {
				DropdownTarget: "_15iUdvHDpajmnnNISLAZeI",
				dropdownTarget: "_15iUdvHDpajmnnNISLAZeI",
				DropdownRow: "_3KugeLr2ZxKMP2CaLJSKqY",
				dropdownRow: "_3KugeLr2ZxKMP2CaLJSKqY",
				DropdownTriangle: "RRbeZRU71Vjk5w2e5pQxW",
				dropdownTriangle: "RRbeZRU71Vjk5w2e5pQxW"
			}
		},
		"./src/reddit/components/ManageChatRoomsModal/_ManageChatRoomsModal.m.less": function(e, t, n) {
			e.exports = {
				ModalBody: "_1HCMS-BSBmdwCes_LaFKUK",
				modalBody: "_1HCMS-BSBmdwCes_LaFKUK",
				CloseIcon: "_2IaB33vEoQZoZqVGAbV6Sv",
				closeIcon: "_2IaB33vEoQZoZqVGAbV6Sv",
				CloseButton: "bJ1iKhjEo46f8dHPKcyfz",
				closeButton: "bJ1iKhjEo46f8dHPKcyfz"
			}
		},
		"./src/reddit/components/ManageChatRoomsModal/_ManageChatRoomsModal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./node_modules/fbt/lib/FbtPublic.js"),
				u = n("./node_modules/lodash/isEqual.js"),
				m = n.n(u),
				h = n("./src/reddit/actions/chat/subredditChannel.ts"),
				p = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				g = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				_ = n("./src/reddit/components/ManageChatRoomsModal/_Controls.m.less"),
				x = n.n(_);
			const E = i.a.button("DeleteButton", x.a),
				f = i.a.wrapped(b.f, "PrimaryButton", x.a),
				S = i.a.wrapped(g.i, "Textarea", x.a),
				k = i.a.input("ChatSettingsInput", x.a),
				M = i.a.input("ChatSettingsLongerInput", x.a),
				v = (i.a.wrapped(C.a, "Toggle", x.a), i.a.ol("List", x.a)),
				w = i.a.li("ListItem", x.a),
				O = i.a.span("ErrorMarker", x.a),
				j = e => s.a.createElement("button", {
					className: e.className,
					type: "button",
					onClick: e.onChange,
					role: "checkbox",
					"aria-checked": e.checked
				}, e.checked ? s.a.createElement(g.b, null) : s.a.createElement(g.a, null));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var I = n("./src/higherOrderComponents/asTooltip.tsx"),
				D = n("./src/reddit/actions/tooltip.ts"),
				y = n("./src/reddit/controls/Dropdown/index.tsx"),
				L = n("./src/reddit/controls/Dropdown/Row.tsx"),
				T = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				R = n("./src/reddit/selectors/tooltip.ts"),
				A = n("./src/reddit/components/ManageChatRoomsModal/_DomainFilterDropDown.m.less"),
				N = n.n(A);
			const B = i.a.button("DropdownTarget", N.a),
				P = i.a.wrapped(L.b, "DropdownRow", N.a),
				F = i.a.wrapped(T.b, "DropdownTriangle", N.a),
				U = Object(r.c)({
					isOpen: (e, t) => Object(R.b)(t.id)(e)
				}),
				H = Object(o.b)(U, (e, t) => ({
					openDropdown: () => {
						e(Object(D.h)({
							tooltipId: t.id
						}))
					}
				})),
				K = Object(I.a)(y.a);
			var W = H(e => s.a.createElement(s.a.Fragment, null, s.a.createElement(B, {
					type: "button",
					id: e.id,
					tabIndex: 0,
					onClick: e.openDropdown
				}, e.selected.display || e.selected.value.toString(), s.a.createElement(F, null)), s.a.createElement(K, {
					isOpen: e.isOpen,
					isOverlay: !0,
					tooltipId: e.id
				}, e.items.map((t, n) => s.a.createElement(P, {
					key: e.id + "_OPTION_" + n,
					displayText: t.display || t.value.toString(),
					isSelected: e.selected.value === t.value,
					onClick: n => {
						n.preventDefault(), e.onClick(t)
					}
				}))))),
				V = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				G = n("./src/reddit/components/ManageChatRoomsModal/_Modal.m.less"),
				z = n.n(G);
			const Z = i.a.form("ModalForm", z.a),
				X = i.a.wrapped(V.n, "ModalSmallText", z.a),
				J = i.a.wrapped(V.e, "ModalDescriptionText", z.a),
				q = i.a.wrapped(V.g, "ModalFormItemRow", z.a),
				Q = i.a.wrapped(V.g, "ModalFormItemColumn", z.a),
				Y = i.a.div("ModalFormColumn", z.a),
				$ = i.a.wrapped(X, "ModalLabelText", z.a);
			var ee = n("./src/reddit/components/TrackingHelper/index.tsx"),
				te = n("./src/reddit/constants/chat.ts"),
				ne = n("./src/reddit/constants/modals.ts");
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			const ae = (e, t, n) => {
				if (!t) return !1;
				const a = t.toLocaleString().toLowerCase().split(","),
					s = e.trim().toLowerCase();
				return s !== (n && n.trim().toLowerCase()) && a.includes(s)
			};
			var se = n("./src/reddit/helpers/trackers/chat.ts"),
				oe = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				re = n("./src/reddit/models/SubredditChannel/index.ts"),
				le = n("./src/reddit/selectors/activeModalId.ts"),
				ie = n("./src/reddit/selectors/subredditChannel.ts"),
				de = n("./src/reddit/components/ManageChatRoomsModal/ChannelForm.m.less"),
				ce = n.n(de);
			const ue = i.a.wrapped(O, "ErrorMarker", ce.a),
				me = i.a.wrapped(j, "Checkbox", ce.a),
				he = Object(r.c)({
					channelNames: ie.d,
					subredditChannel: (e, t) => {
						let {
							isEditing: n
						} = t;
						return n && Object(ie.b)(e) || void 0
					},
					currentModalId: le.a
				});
			class pe extends s.a.Component {
				constructor(e) {
					super(e), this.isChanged = () => !m()(this.props.subredditChannel, this.state.subredditChannel), this.isValid = () => {
						const {
							doesNameExistError: e,
							subredditChannel: t
						} = this.state, n = t && t.name.trim() || "", a = t && t.description.trim() || "";
						return n.length > 0 && n.length <= te.b && a.length > 0 && a.length <= te.a && !e
					}, this.defaultMinimumAcctAge = {
						display: "No Minimum",
						value: 0
					}, this.getMinimumAcctAgeOptions = () => [this.defaultMinimumAcctAge, {
						display: "10 minutes",
						value: 600
					}, {
						display: "1 hour",
						value: 3600
					}, {
						display: "1 day",
						value: 86400
					}, {
						display: "7 days",
						value: 604800
					}, {
						display: "30 Days",
						value: 2592e3
					}], this.getSelectedMinimumAge = e => this.getMinimumAcctAgeOptions().find(t => t.value === e), this.defaultNewMemberAge = {
						display: "Off",
						value: 0
					}, this.getNewMemberAgeOptions = () => [this.defaultNewMemberAge, {
						display: "10 minutes",
						value: 600
					}], this.getSelectedNewMemberAge = e => this.getNewMemberAgeOptions().find(t => t.value === e), this.onNameInputChange = e => {
						const t = e.currentTarget.value,
							{
								channelNames: n,
								subredditChannel: a
							} = this.props,
							s = a && a.name,
							o = ae(t, n, s);
						this.setState(e => Object.assign(Object.assign({}, e), {
							doesNameExistError: o,
							subredditChannel: Object.assign(Object.assign({}, e.subredditChannel), {
								name: t
							})
						}))
					}, this.onDescriptionAreaChange = e => {
						const t = e.currentTarget.value;
						this.setState(e => Object.assign(Object.assign({}, e), {
							subredditChannel: Object.assign(Object.assign({}, e.subredditChannel), {
								description: t
							})
						}))
					}, this.onCheckboxChange = e => {
						e.preventDefault(), e.stopPropagation();
						const t = this.state.subredditChannel.type === re.c.Private ? re.c.Public : re.c.Private;
						this.setState(e => Object.assign(Object.assign({}, e), {
							subredditChannel: Object.assign(Object.assign({}, e.subredditChannel), {
								type: t
							})
						}))
					}, this.onSelectMinimumAcctAge = e => {
						this.setState(t => Object.assign(Object.assign({}, t), {
							subredditChannel: Object.assign(Object.assign({}, t.subredditChannel), {
								minimumAcctAge: e.value
							})
						}))
					}, this.onSelectNewMemberAge = e => {
						this.setState(t => Object.assign(Object.assign({}, t), {
							subredditChannel: Object.assign(Object.assign({}, t.subredditChannel), {
								newMemberAge: e.value
							})
						}))
					}, this.onCreateChannel = async () => {
						const {
							createSubredditChannel: e,
							modalToggled: t,
							sendEvent: n,
							subredditId: a
						} = this.props, {
							name: s,
							description: o,
							type: r,
							minimumAcctAge: l,
							newMemberAge: i
						} = this.state.subredditChannel, d = await e(a, {
							room: s,
							description: o,
							subreddit: a,
							roomType: r,
							minimumAcctAge: l,
							newMemberAge: i
						});
						d && (n(Object(se.g)(d)), t(ne.a.MANAGE_SUBREDDIT_CHAT))
					}, this.onEditChannel = async () => {
						const {
							editSubredditChannel: e,
							modalToggled: t,
							sendEvent: n,
							subredditChannel: a
						} = this.props, {
							name: s,
							description: o,
							minimumAcctAge: r,
							newMemberAge: l
						} = this.state.subredditChannel;
						a && (await e(a, {
							room: s,
							description: o,
							minimumAcctAge: r,
							newMemberAge: l
						}), a && (n(Object(se.i)(a)), t(ne.a.MANAGE_SUBREDDIT_CHAT)))
					}, this.onDelete = e => {
						e.preventDefault(), this.props.toggleDeleteModal()
					}, this.onReset = e => {
						e.preventDefault(), this.props.currentModalId && this.props.modalToggled(this.props.currentModalId)
					}, this.onSubmit = e => {
						e.preventDefault(), this.isValid() && (this.props.isEditing ? this.onEditChannel() : this.onCreateChannel())
					}, this.props.sendEvent(Object(se.k)()), this.state = {
						doesNameExistError: !1,
						subredditChannel: Object.assign(Object.assign({}, re.b), this.props.subredditChannel)
					}
				}
				render() {
					const {
						props: {
							isEditing: e
						},
						state: {
							doesNameExistError: t,
							subredditChannel: {
								description: n,
								isModQueue: a,
								minimumAcctAge: o,
								name: r,
								newMemberAge: l,
								type: i
							}
						}
					} = this;
					return s.a.createElement(Z, {
						onSubmit: this.onSubmit,
						onReset: this.onReset
					}, s.a.createElement(V.h, null, s.a.createElement(V.p, null, e ? c.fbt._("Edit Room", null, {
						hk: "49xYWz"
					}) : c.fbt._("Create Room", null, {
						hk: "1NcP2X"
					}))), s.a.createElement(V.k, null, s.a.createElement(V.g, null, s.a.createElement(X, null, c.fbt._("Name", null, {
						hk: "4CvrbF"
					})), s.a.createElement(g.c, {
						placeholder: c.fbt._("Ex: cat-facts", null, {
							hk: "3Wlbxz"
						}),
						defaultValue: r,
						onChange: this.onNameInputChange
					}), t && s.a.createElement(ue, null, c.fbt._("A chatroom already exists with this name.", null, {
						hk: "3hu126"
					})), s.a.createElement(p.a, {
						text: r,
						maxChars: te.b
					})), s.a.createElement(V.g, null, s.a.createElement(X, null, c.fbt._("Description", null, {
						hk: "42weBh"
					})), s.a.createElement(S, {
						defaultValue: n,
						onChange: this.onDescriptionAreaChange,
						placeholder: c.fbt._("Ex: This channel is for sharing cat facts", null, {
							hk: "1Iu1EC"
						})
					}), s.a.createElement(p.a, {
						maxChars: te.a,
						text: n
					})), !e && s.a.createElement(V.g, null, s.a.createElement($, null, c.fbt._("Private", null, {
						hk: "HJpTN"
					})), s.a.createElement(me, {
						checked: i === re.c.Private,
						onChange: this.onCheckboxChange
					}), s.a.createElement(J, null, c.fbt._("Private channels are only visible to people who have been invited to them.", null, {
						hk: "257D8b"
					}))), s.a.createElement(V.g, null, s.a.createElement(X, null, c.fbt._("Minimum account age", null, {
						hk: "3eARK5"
					})), s.a.createElement(W, {
						id: "minimumAgeDropDown",
						items: this.getMinimumAcctAgeOptions(),
						selected: this.getSelectedMinimumAge(o) || this.defaultMinimumAcctAge,
						onClick: this.onSelectMinimumAcctAge
					}), s.a.createElement(J, null, c.fbt._("People will be unable to send messages until their accounts reach this age", null, {
						hk: "4zrOeI"
					}))), s.a.createElement(V.g, null, s.a.createElement(X, null, c.fbt._("New member muting", null, {
						hk: "ZDkMo"
					})), s.a.createElement(W, {
						id: "newMemberMutingDropDown",
						items: this.getNewMemberAgeOptions(),
						selected: this.getSelectedNewMemberAge(l) || this.defaultNewMemberAge,
						onClick: this.onSelectNewMemberAge
					}), s.a.createElement(J, null, c.fbt._("All new room members will be unable to send messages for this duration after joining", null, {
						hk: "2THB5c"
					}))), e && !a && s.a.createElement(E, {
						type: "button",
						onClick: this.onDelete
					}, s.a.createElement(oe.a, null), c.fbt._("Delete Room", null, {
						hk: "2h6q0B"
					}))), s.a.createElement(V.f, null, s.a.createElement(V.a, {
						type: "reset"
					}, c.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(f, {
						type: "submit",
						disabled: !(this.isValid() && this.isChanged())
					}, e ? c.fbt._("Save Changes", null, {
						hk: "1Indjg"
					}) : c.fbt._("Create Room", null, {
						hk: "QirfA"
					}))))
				}
			}
			var ge = Object(o.b)(he, e => ({
					modalToggled: t => e(Object(d.i)(t)),
					editSubredditChannel: (t, n) => e(Object(h.k)(t, n)),
					createSubredditChannel: (t, n) => e(Object(h.i)(t, n)),
					toggleDeleteModal: () => e(Object(d.i)(ne.a.DELETE_SUBREDDIT_CHAT))
				}))(Object(ee.c)(pe)),
				be = n("./src/reddit/components/ManageChatRoomsModal/Delete.m.less"),
				Ce = n.n(be);
			const _e = i.a.wrapped(b.f, "PrimaryButton", Ce.a),
				xe = Object(r.c)({
					subredditChannel: ie.b
				});
			class Ee extends s.a.Component {
				constructor() {
					super(...arguments), this.onDeleteChannel = () => {
						const {
							deleteSubredditChannel: e,
							modalToggled: t,
							subredditChannel: n
						} = this.props;
						n && e(n).then(() => {
							this.props.sendEvent(Object(se.h)(n)), t(ne.a.MANAGE_SUBREDDIT_CHAT)
						})
					}
				}
				render() {
					const {
						modalToggled: e,
						subredditChannel: t
					} = this.props;
					return s.a.createElement("div", null, s.a.createElement(V.h, null, s.a.createElement(V.p, null, t && "".concat(c.fbt._("Delete", null, {
						hk: "38E65A"
					}), "\n               ").concat(t.name))), s.a.createElement(V.k, null, s.a.createElement(V.o, null, c.fbt._("Are you sure you want to delete this room? This action cannot be undone.", null, {
						hk: "1OMvap"
					}))), s.a.createElement(V.f, null, s.a.createElement(V.a, {
						onClick: () => e(ne.a.EDIT_SUBREDDIT_CHAT)
					}, c.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(_e, {
						onClick: () => this.onDeleteChannel()
					}, c.fbt._("Delete Room", null, {
						hk: "1husCY"
					}))))
				}
			}
			var fe = Object(o.b)(xe, e => ({
					modalToggled: t => e(Object(d.i)(t)),
					deleteSubredditChannel: t => e(Object(h.j)(t))
				}))(Object(ee.c)(Ee)),
				Se = n("./src/reddit/components/SubredditChannelList/index.tsx"),
				ke = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				Me = n("./src/reddit/layout/row/Inline/index.tsx"),
				ve = n("./src/reddit/selectors/chat.ts"),
				we = n("./src/reddit/components/ManageChatRoomsModal/Listing.m.less"),
				Oe = n.n(we);
			const {
				fbt: je
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ie = i.a.wrapped(V.h, "ModalHeader", Oe.a), De = i.a.wrapped(Se.b, "SubredditChannelList", Oe.a), ye = i.a.button("ModalHeadButton", Oe.a), Le = Object(r.c)({
				isModerator: ve.e
			});
			class Te extends s.a.Component {
				render() {
					const {
						props: {
							onAddClick: e,
							onSettingsClick: t,
							isModerator: n,
							subredditId: a
						}
					} = this;
					return s.a.createElement("div", null, s.a.createElement(Ie, null, s.a.createElement(V.p, null, je._("Rooms", null, {
						hk: "TpZ9p"
					})), n && s.a.createElement(Me.a, null, s.a.createElement(ye, {
						onClick: t
					}, s.a.createElement(ke.a, null), je._("Settings", null, {
						hk: "r8zYB"
					})), s.a.createElement(ye, {
						onClick: e
					}, je._("+ Add room", null, {
						hk: "2nISIO"
					})))), a && s.a.createElement(De, {
						subredditId: a,
						onAddChannel: e,
						parentContext: Se.a.Modal
					}))
				}
			}
			var Re = Object(o.b)(Le)(Te),
				Ae = n("./src/reddit/actions/chat/subredditSettings.ts");
			var Ne = e => {
					let {
						onCancel: t,
						onDone: n,
						settings: a
					} = e;
					return s.a.createElement(Z, {
						onSubmit: e => {
							e.preventDefault();
							const s = e.currentTarget.elements.BannedWords;
							if (s) {
								const e = s.value;
								a.bannedWords === e ? t() : n({
									settings: {
										bannedWords: e,
										subredditId: ""
									}
								})
							}
						}
					}, s.a.createElement(V.h, null, s.a.createElement(V.p, null, c.fbt._("Custom list of banned words", null, {
						hk: "3vV3ZV"
					}))), s.a.createElement(V.k, null, s.a.createElement(Q, null, s.a.createElement(X, null, c.fbt._("Banned words", null, {
						hk: "32rfzC"
					})), s.a.createElement(J, null, c.fbt._("List comma separated words to ban", null, {
						hk: "3yZ9bl"
					})), s.a.createElement(S, {
						defaultValue: a && a.bannedWords,
						name: "BannedWords",
						placeholder: c.fbt._("Ex: poop, dogs, cats, fools", null, {
							hk: "1Wmi8E"
						})
					}))), s.a.createElement(V.f, null, s.a.createElement(V.a, {
						type: "reset",
						onClick: t
					}, c.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(f, {
						type: "submit"
					}, c.fbt._("Save List", null, {
						hk: "1FANhN"
					}))))
				},
				Be = n("./src/reddit/endpoints/chat/index.ts");
			var Pe = e => {
					let {
						onCancel: t,
						onDone: n,
						settings: a
					} = e;
					const o = a.domainFilterOption === Be.a.ALLOW_APPROVED_DOMAINS;
					return s.a.createElement(Z, {
						onSubmit: e => {
							e.preventDefault();
							const s = e.currentTarget.elements.EditDomains;
							if (s) {
								const e = s.value;
								a.domains === e ? t() : n({
									settings: {
										domains: e,
										subredditId: ""
									}
								})
							}
						}
					}, s.a.createElement(V.h, null, s.a.createElement(V.p, null, c.fbt._("Configure domains", null, {
						hk: "2uvV8w"
					}))), s.a.createElement(V.k, null, s.a.createElement(Q, null, s.a.createElement(X, null, o ? c.fbt._("Approved domains", null, {
						hk: "3k4EgS"
					}) : c.fbt._("Banned domains", null, {
						hk: "11qMqU"
					})), s.a.createElement(S, {
						defaultValue: a && a.domains,
						name: "EditDomains",
						placeholder: c.fbt._("Ex: google.com, youtube.com, imgur.com", null, {
							hk: "4AMdIe"
						})
					}))), s.a.createElement(V.f, null, s.a.createElement(V.a, {
						type: "reset",
						onClick: t
					}, c.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(f, {
						type: "submit"
					}, c.fbt._("Save", null, {
						hk: "1nfEIH"
					}))))
				},
				Fe = n("./node_modules/lodash/find.js"),
				Ue = n.n(Fe),
				He = n("./node_modules/lodash/remove.js"),
				Ke = n.n(He),
				We = n("./node_modules/uuid/v4.js"),
				Ve = n.n(We),
				Ge = n("./src/reddit/components/ManageChatRoomsModal/SettingsSubscreens/Regex.m.less"),
				ze = n.n(Ge);

			function Ze(e, t, n) {
				return {
					id: n || Ve()(),
					name: e,
					regex: t
				}
			}
			const Xe = i.a.div("CountText", ze.a),
				Je = i.a.wrapped(Xe, "ErrorText", ze.a),
				qe = "RegexName",
				Qe = "Regex";
			class Ye extends s.a.Component {
				constructor(e) {
					super(e), this.isValid = this.isValid.bind(this), this.isValidRegex = this.isValidRegex.bind(this), this.onNameChange = this.onNameChange.bind(this), this.onRegexSettingsDelete = this.onRegexSettingsDelete.bind(this), this.onRegexSettingsUpdate = this.onRegexSettingsUpdate.bind(this), this.onRegexChange = this.onRegexChange.bind(this);
					const t = Ye.getSelectedRegex(e.selectedRegexId, e.settings.regexes);
					this.state = {
						nameLength: t.name.length,
						regexLength: t.regex.length
					}
				}
				static getSelectedRegex(e, t) {
					return Ue()(t, t => t.id === e) || {
						id: Ve()(),
						regex: "",
						name: ""
					}
				}
				onRegexSettingsUpdate(e) {
					e.preventDefault();
					const {
						props: {
							onDone: t,
							selectedRegexId: n,
							settings: a
						}
					} = this, s = e.currentTarget.elements[qe], o = e.currentTarget.elements[Qe];
					if (s && o) {
						const e = s.value.trim(),
							r = o.value.trim(),
							l = a.regexes ? [...a.regexes] : [],
							i = Ke()(l, e => e.id !== n);
						t({
							settings: Object.assign(Object.assign({}, a), {
								regexes: [Ze(e, r, n), ...i]
							})
						})
					}
				}
				onRegexSettingsDelete(e) {
					e.preventDefault();
					const {
						props: {
							onDone: t,
							selectedRegexId: n,
							settings: a,
							settings: {
								regexes: s
							}
						}
					} = this, o = s ? [...s] : [], r = Ke()(o, e => e.id !== n);
					t({
						settings: Object.assign(Object.assign({}, a), {
							regexes: r
						})
					})
				}
				onNameChange(e) {
					e.preventDefault(), this.setState({
						nameLength: e.currentTarget.value.trim().length
					})
				}
				onRegexChange(e) {
					e.preventDefault(), this.setState({
						regexLength: e.currentTarget.value.trim().length
					})
				}
				isValid() {
					const {
						isValidRegex: e,
						state: {
							nameLength: t
						}
					} = this;
					return t > 0 && e()
				}
				isValidRegex() {
					const {
						state: {
							regexLength: e
						}
					} = this;
					return e > 0 && e <= te.d
				}
				render() {
					const {
						isValid: e,
						isValidRegex: t,
						onNameChange: n,
						onRegexChange: a,
						onRegexSettingsDelete: o,
						props: {
							onCancel: r,
							selectedRegexId: l,
							settings: {
								regexes: i
							}
						},
						state: {
							regexLength: d
						}
					} = this, {
						name: u,
						regex: m
					} = Ye.getSelectedRegex(l, i);
					return s.a.createElement(Z, {
						onSubmit: this.onRegexSettingsUpdate
					}, s.a.createElement(V.h, null, s.a.createElement(V.p, null, c.fbt._("Configure regex rule", null, {
						hk: "3Ur4ma"
					}))), s.a.createElement(V.k, null, s.a.createElement(Q, null, s.a.createElement(X, null, c.fbt._("Rule name", null, {
						hk: "46id3M"
					})), s.a.createElement(M, {
						name: qe,
						defaultValue: u,
						placeholder: c.fbt._("Rule name", null, {
							hk: "qpRLk"
						}),
						onChange: n
					})), s.a.createElement(Q, null, s.a.createElement(X, null, c.fbt._("Regex to evaluate all messages with", null, {
						hk: "1P0up5"
					})), s.a.createElement(S, {
						name: Qe,
						defaultValue: m,
						placeholder: c.fbt._("Ex: poop|dogs|bear(y|ies?)|dogfish?(er|r|r?a|lett?)s?z?", null, {
							hk: "4DWBV9"
						}),
						onChange: a
					}), t() ? s.a.createElement(Xe, null, "".concat(d, "/").concat(te.d)) : s.a.createElement(Je, null, "".concat(d, "/").concat(te.d)))), s.a.createElement(V.f, null, l && s.a.createElement(V.r, {
						type: "button",
						onClick: o
					}, c.fbt._("Delete Rule", null, {
						hk: "3iHCYI"
					})), s.a.createElement(V.a, {
						type: "reset",
						onClick: r
					}, c.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(f, {
						type: "submit",
						disabled: !e()
					}, c.fbt._("Save Rule", null, {
						hk: "oN4Xp"
					}))))
				}
			}
			var $e = Ye,
				et = n("./node_modules/lodash/transform.js"),
				tt = n.n(et);
			var nt = n("./src/reddit/components/ManageChatRoomsModal/Settings.m.less"),
				at = n.n(nt);

			function st() {
				return (st = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const ot = i.a.wrapped(j, "Checkbox", at.a);
			var rt;
			! function(e) {
				e[e.ALLOWED_DOMAINS = 0] = "ALLOWED_DOMAINS", e[e.BANNED_WORDS = 1] = "BANNED_WORDS", e[e.REGEX_RULES = 2] = "REGEX_RULES"
			}(rt || (rt = {}));
			const lt = "DomainFilterDropdown",
				it = Object(r.c)({
					currentModalId: e => Object(le.a)(e) || void 0,
					settings: ve.c
				});
			class dt extends s.a.Component {
				constructor(e) {
					super(e), this.onSetSettings = () => {
						const {
							props: e,
							state: t
						} = this;
						if (t.settings) {
							const n = e.settings ? function(e, t) {
								const n = e;
								return tt()(n, (e, n, a) => {
									m()(n, t[a]) || (e[a] = n)
								})
							}(t.settings, e.settings) : t.settings;
							n.domains && (n.domainFilterOption = t.settings.domainFilterOption);
							const {
								setChatSubredditSettings: a,
								modalToggled: s,
								subredditId: o
							} = this.props;
							a(o, Object.assign({
								subredditId: o
							}, n)).then(() => {
								s(ne.a.MANAGE_SUBREDDIT_CHAT)
							})
						}
					}, this.onRateLimitChange = e => {
						const t = Number(e.currentTarget.value);
						t > 0 && this.setState(e => ({
							settings: Object.assign(Object.assign({}, e.settings), {
								rateLimit: t
							})
						}))
					}, this.onUseDefaultProfanityFilterChange = () => {
						const e = !this.state.settings.useDefaultProfanityFilter;
						this.setState(t => ({
							settings: Object.assign(Object.assign({}, t.settings), {
								useDefaultProfanityFilter: e
							})
						}))
					}, this.props.sendEvent(Object(se.k)()), this.regexRulesAvailable = this.regexRulesAvailable.bind(this), this.onCancelSubScreen = this.onCancelSubScreen.bind(this), this.onRateLimitChange = this.onRateLimitChange.bind(this), this.onSelectDomainFilter = this.onSelectDomainFilter.bind(this), this.onSetSettings = this.onSetSettings.bind(this), this.onShowEditBannedWords = this.onShowEditBannedWords.bind(this), this.onShowEditDomains = this.onShowEditDomains.bind(this), this.onShowEditRegexRules = this.onShowEditRegexRules.bind(this), this.onSubmit = this.onSubmit.bind(this), this.onUpdateState = this.onUpdateState.bind(this), this.state = {
						settings: Object.assign({}, e.settings),
						receivedProps: !1,
						selectedRegexId: void 0,
						settingsSubScreen: void 0
					}
				}
				toggleButtonDisable() {
					return m()(this.props.settings, this.state.settings)
				}
				componentDidMount() {
					this.props.fetchChatSubredditSettings(this.props.subredditId)
				}
				componentWillReceiveProps(e) {
					let {
						settings: t,
						subredditId: n
					} = e;
					!this.state.receivedProps && t && n === t.subredditId && this.setState(e => Object.assign(Object.assign({}, e), {
						receivedProps: !0,
						settings: Object.assign({}, t)
					}))
				}
				onCancelSubScreen() {
					this.setState(dt.resetSubScreen)
				}
				onUpdateState(e) {
					this.setState(t => Object.assign(Object.assign(Object.assign({}, t), dt.resetSubScreen(t)), {
						settings: Object.assign(Object.assign({}, t.settings), e.settings)
					}))
				}
				static resetSubScreen(e) {
					return Object.assign(Object.assign({}, e), {
						settingsSubScreen: void 0,
						selectedRegexId: void 0
					})
				}
				onShowEditBannedWords() {
					this.setState(e => Object.assign(Object.assign({}, e), {
						settingsSubScreen: rt.BANNED_WORDS
					}))
				}
				onShowEditRegexRules(e) {
					this.setState(t => Object.assign(Object.assign({}, t), {
						selectedRegexId: e,
						settingsSubScreen: rt.REGEX_RULES
					}))
				}
				onShowEditDomains() {
					this.setState(e => Object.assign(Object.assign({}, e), {
						settingsSubScreen: rt.ALLOWED_DOMAINS
					}))
				}
				onSelectDomainFilter(e) {
					this.setState(t => Object.assign(Object.assign({}, t), {
						settings: Object.assign(Object.assign({}, t.settings), {
							domainFilterOption: e.value
						})
					}))
				}
				onSubmit(e) {
					e.preventDefault(), this.onSetSettings()
				}
				regexRulesAvailable() {
					const {
						regexes: e = []
					} = this.state.settings, t = te.c - e.length;
					return t < 0 ? 0 : t
				}
				render() {
					const {
						regexRulesAvailable: e,
						props: {
							modalToggled: t,
							currentModalId: n
						},
						state: {
							settings: {
								domainFilterOption: a,
								rateLimit: o,
								regexes: r = [],
								useDefaultProfanityFilter: l
							},
							settingsSubScreen: i
						}
					} = this;
					switch (i) {
						case rt.BANNED_WORDS:
							return s.a.createElement(Ne, st({
								onCancel: this.onCancelSubScreen,
								onDone: this.onUpdateState
							}, this.state));
						case rt.REGEX_RULES:
							return s.a.createElement($e, st({
								onCancel: this.onCancelSubScreen,
								onDone: this.onUpdateState
							}, this.state));
						case rt.ALLOWED_DOMAINS:
							return s.a.createElement(Pe, st({
								onCancel: this.onCancelSubScreen,
								onDone: this.onUpdateState
							}, this.state))
					}
					return s.a.createElement(Z, {
						onSubmit: this.onSubmit
					}, s.a.createElement(V.h, null, s.a.createElement(V.p, null, c.fbt._("Chat Room Settings", null, {
						hk: "1oybiN"
					}))), s.a.createElement(V.k, null, s.a.createElement(q, null, s.a.createElement(Y, null, s.a.createElement(X, null, c.fbt._("Block messages using default banned words list", null, {
						hk: "2353zP"
					})), s.a.createElement(J, null, c.fbt._("Messages with any of these words will fail to send", null, {
						hk: "2ln78N"
					}))), s.a.createElement(Y, null, s.a.createElement(ot, {
						checked: !!l,
						onChange: this.onUseDefaultProfanityFilterChange
					}))), s.a.createElement(q, null, s.a.createElement(Y, null, s.a.createElement(X, null, c.fbt._("Custom list of banned words", null, {
						hk: "42JzPG"
					})), s.a.createElement(J, null, c.fbt._("Messages with any words in your custom will fail to send", null, {
						hk: "2WMyfF"
					}))), s.a.createElement(Y, null, s.a.createElement(b.i, {
						onClick: this.onShowEditBannedWords,
						type: "button"
					}, c.fbt._("Edit Words", null, {
						hk: "1MrmF5"
					})))), s.a.createElement(q, null, s.a.createElement(Y, null, s.a.createElement(X, null, c.fbt._("Custom regex rules (advanced)", null, {
						hk: "4zFW2c"
					})), s.a.createElement(J, null, c.fbt._("Messages caught by regular expression rules will fail to send", null, {
						hk: "xkxd3"
					}))), s.a.createElement(Y, null, s.a.createElement(b.i, {
						disabled: 0 === e(),
						onClick: () => this.onShowEditRegexRules(),
						type: "button"
					}, c.fbt._("Add Rule", null, {
						hk: "HBr7T"
					})))), r && r.length > 0 && s.a.createElement(q, null, s.a.createElement(Y, {
						style: {
							width: "100%"
						}
					}, s.a.createElement(v, null, r.map(e => s.a.createElement(w, {
						key: e.id,
						role: "button",
						tabIndex: 0,
						onClick: () => this.onShowEditRegexRules(e.id)
					}, e.name))), s.a.createElement(J, {
						style: {
							textAlign: "right"
						}
					}, "You can create ".concat(e(), " more rules.")))) || null, s.a.createElement(q, {
						htmlFor: lt
					}, s.a.createElement(Y, null, s.a.createElement(X, null, c.fbt._("Link domains", null, {
						hk: "20PkWW"
					})), s.a.createElement(J, null, c.fbt._("Allow or disallow links from domains", null, {
						hk: "41gK9b"
					})), a === Be.a.ALLOW_APPROVED_DOMAINS ? s.a.createElement(b.i, {
						onClick: this.onShowEditDomains,
						tabIndex: 0,
						type: "button"
					}, c.fbt._("Edit Approved Domains", null, {
						hk: "3BY1XV"
					})) : a === Be.a.BLOCK_BANNED_DOMAINS ? s.a.createElement(b.i, {
						onClick: this.onShowEditDomains,
						tabIndex: 0,
						type: "button"
					}, c.fbt._("Edit Banned Domains", null, {
						hk: "4duHNM"
					})) : null), s.a.createElement(W, {
						id: lt,
						items: [{
							value: Be.a.ALLOW_ALL_DOMAINS
						}, {
							value: Be.a.ALLOW_APPROVED_DOMAINS
						}, {
							value: Be.a.BLOCK_BANNED_DOMAINS
						}, {
							value: Be.a.BLOCK_ALL_DOMAINS
						}],
						selected: a && {
							value: a
						} || {
							value: Be.a.ALLOW_ALL_DOMAINS
						},
						onClick: this.onSelectDomainFilter
					})), s.a.createElement(q, null, s.a.createElement(Y, null, s.a.createElement(X, null, c.fbt._("Message rate limiting (per {duration} seconds)", [c.fbt._param("duration", Be.c.toLocaleString())], {
						hk: "3rblET"
					})), s.a.createElement(J, null, c.fbt._("Each person can send this number of messages in a {duration} second window.", [c.fbt._param("duration", Be.c.toLocaleString())], {
						hk: "2GM7to"
					}))), s.a.createElement(Y, null, s.a.createElement(k, {
						size: 2,
						maxLength: 99,
						min: 1,
						type: "number",
						value: o || Be.b,
						onChange: this.onRateLimitChange
					})))), s.a.createElement(V.f, null, s.a.createElement(V.a, {
						type: "reset",
						onClick: () => t(n)
					}, c.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(f, {
						type: "submit",
						disabled: this.toggleButtonDisable()
					}, c.fbt._("Save Changes", null, {
						hk: "13qHgL"
					}))))
				}
			}
			var ct = Object(o.b)(it, e => ({
					modalToggled: t => e(Object(d.i)(t)),
					fetchChatSubredditSettings: t => e(Object(Ae.b)(t)),
					setChatSubredditSettings: (t, n) => e(Object(Ae.c)(t, n))
				}))(Object(ee.c)(dt)),
				ut = n("./src/reddit/controls/TextButton/index.tsx"),
				mt = n("./src/reddit/components/ManageChatRoomsModal/_ManageChatRoomsModal.m.less"),
				ht = n.n(mt);
			const {
				fbt: pt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), gt = i.a.wrapped(V.d, "ModalBody", ht.a), bt = i.a.wrapped(V.b, "CloseIcon", ht.a), Ct = i.a.wrapped(ut.a, "CloseButton", ht.a), _t = Object(r.c)({
				activeModalId: le.a
			}), xt = Object(o.b)(_t, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					modalToggled: t => e(Object(d.i)(t))
				}
			});
			t.default = Object(l.a)(xt(e => s.a.createElement(gt, null, s.a.createElement(Ct, {
				onClick: () => e.modalToggled(e.activeModalId)
			}, pt._("close", null, {
				hk: "4qEb7D"
			}), s.a.createElement(bt, null)), (e => {
				switch (e.activeModalId) {
					case ne.a.EDIT_SUBREDDIT_CHAT:
						return s.a.createElement(ge, {
							isEditing: !0,
							subredditId: e.subredditId
						});
					case ne.a.CREATE_SUBREDDIT_CHAT:
						return s.a.createElement(ge, {
							subredditId: e.subredditId
						});
					case ne.a.DELETE_SUBREDDIT_CHAT:
						return s.a.createElement(fe, null);
					case ne.a.SUBREDDIT_CHAT_SETTINGS:
						return s.a.createElement(ct, {
							subredditId: e.subredditId
						});
					default:
						return s.a.createElement(Re, {
							subredditId: e.subredditId,
							onAddClick: () => e.modalToggled(ne.a.CREATE_SUBREDDIT_CHAT),
							onSettingsClick: () => e.modalToggled(ne.a.SUBREDDIT_CHAT_SETTINGS)
						})
				}
			})(e))))
		},
		"./src/reddit/components/ManageChatRoomsModal/_Modal.m.less": function(e, t, n) {
			e.exports = {
				ModalForm: "_1a5rafEjfZaMieeJYpXboB",
				modalForm: "_1a5rafEjfZaMieeJYpXboB",
				ModalSmallText: "_13K69L8IINXu9zGU1KBDrY",
				modalSmallText: "_13K69L8IINXu9zGU1KBDrY",
				ModalDescriptionText: "_30CTdaJ2MLtHtCbs24tE-b",
				modalDescriptionText: "_30CTdaJ2MLtHtCbs24tE-b",
				ModalFormItemRow: "anNLpCTt43XincUg_xQrg",
				modalFormItemRow: "anNLpCTt43XincUg_xQrg",
				ModalFormItemColumn: "_3c1_jZvu7pfT6PkUddFZ3G",
				modalFormItemColumn: "_3c1_jZvu7pfT6PkUddFZ3G",
				ModalLabelText: "_1XT_Xv-Vx6TU5lLow9roIM",
				modalLabelText: "_1XT_Xv-Vx6TU5lLow9roIM"
			}
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
				return r
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "n", (function() {
				return i
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "j", (function() {
				return f
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(s);
			const r = a.a.section("FormPage", o.a),
				l = a.a.h1("HomePageTitle", o.a),
				i = a.a.button("HomePageBreadcrumb", o.a),
				d = a.a.div("HomePageGroup", o.a),
				c = a.a.h1("FormPageTitle", o.a),
				u = a.a.div("FormPageSection", o.a),
				m = a.a.div("FormGroup", o.a),
				h = a.a.h2("FormGroupTitle", o.a),
				p = a.a.div("FormElement", o.a),
				g = a.a.div("FormGroupDescription", o.a),
				b = a.a.div("FormItem", o.a),
				C = a.a.h3("FormElementTitle", o.a),
				_ = a.a.div("FormElementDescription", o.a),
				x = a.a.div("FormElementError", o.a),
				E = a.a.div("FormElementSubGroup", o.a),
				f = a.a.li("FormListItem", o.a)
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
				return h
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "g", (function() {
				return x
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/ModalInput.tsx"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				r = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(d);
			const u = a.a.wrapped(s.a, "ModalInput", c.a),
				m = a.a.input("Input", c.a),
				h = a.a.wrapped(i.a, "RadioOn", c.a),
				p = a.a.wrapped(l.a, "RadioOff", c.a),
				g = a.a.wrapped(o.a, "Checkbox", c.a),
				b = a.a.wrapped(r.a, "CheckboxSelected", c.a),
				C = a.a.textarea("Textarea", c.a),
				_ = a.a.label("StyledLabel", c.a),
				x = a.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/components/SubredditChannelList/index.m.less": function(e, t, n) {
			e.exports = {
				PrimaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				primaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				ModalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				modalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				ModalText: "_3HL4gEFxPNzkrPu94hblvT",
				modalText: "_3HL4gEFxPNzkrPu94hblvT",
				ItemLink: "vByM_anguY6xuCJEcusmJ",
				itemLink: "vByM_anguY6xuCJEcusmJ",
				Detail: "_1hkd6aDOGqeroDz5-yntAS",
				detail: "_1hkd6aDOGqeroDz5-yntAS",
				DescText: "_2Kwn1xR6xMSka95C9d72vF",
				descText: "_2Kwn1xR6xMSka95C9d72vF",
				Title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				Header: "tLKlMoU4-CQkARSxZg_yj",
				header: "tLKlMoU4-CQkARSxZg_yj",
				ChatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				chatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				PlanetIcon: "hsKCEb94KysCjbHbmbhzx",
				planetIcon: "hsKCEb94KysCjbHbmbhzx",
				Pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				Group: "dfN8kolCvNCsNzzf9W39l",
				group: "dfN8kolCvNCsNzzf9W39l",
				Key: "_2fgNZYjyiPjn_UlFwxeaVr",
				key: "_2fgNZYjyiPjn_UlFwxeaVr",
				SubredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				subredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				EditButton: "_21mAHvYUh9NgVPMyp45QZJ",
				editButton: "_21mAHvYUh9NgVPMyp45QZJ",
				ShowAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				showAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				ChannelName: "KIQLM-ci4WJOXrwjTsEzx",
				channelName: "KIQLM-ci4WJOXrwjTsEzx",
				HeaderText: "_3n6CTc1D2t_MfB0tNSgiAj",
				headerText: "_3n6CTc1D2t_MfB0tNSgiAj"
			}
		},
		"./src/reddit/components/SubredditChannelList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Q
			}));
			var a = n("./node_modules/lodash/orderBy.js"),
				s = n.n(a),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				l = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/opener/index.ts"),
				u = n("./src/chat/helpers/urls/index.ts"),
				m = n("./src/reddit/actions/chat/subredditChannel.ts"),
				h = n("./src/reddit/actions/chat/toggle.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				g = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				b = n("./src/reddit/components/SubredditIcon/index.tsx"),
				C = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/constants/modals.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/helpers/trackers/chat.ts"),
				f = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				S = n("./src/reddit/icons/svgs/Chat/index.tsx"),
				k = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				M = n("./src/reddit/icons/svgs/GroupChat/index.tsx"),
				v = n("./src/reddit/icons/svgs/Key/index.tsx"),
				w = n("./src/reddit/models/SubredditChannel/index.ts"),
				O = n("./src/reddit/selectors/chat.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/subredditChannel.ts"),
				D = n("./src/reddit/components/SubredditChannelList/index.m.less"),
				y = n.n(D);
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), T = d.a.wrapped(g.g, "ModalFormItem", y.a), R = d.a.wrapped(x.f, "PrimaryButton", y.a), A = d.a.wrapped(g.o, "ModalText", y.a), N = d.a.a("ItemLink", y.a), B = d.a.p("Detail", y.a), P = d.a.p("DescText", y.a), F = d.a.div("Title", y.a), U = d.a.div("Header", y.a), H = d.a.wrapped(S.a, "ChatIcon", y.a), K = d.a.wrapped(k.a, "PlanetIcon", y.a), W = d.a.wrapped(f.a, "Pencil", y.a), V = d.a.wrapped(M.a, "Group", y.a), G = d.a.wrapped(v.a, "Key", y.a), z = d.a.wrapped(b.b, "SubredditIcon", y.a), Z = d.a.button("EditButton", y.a), X = d.a.button("ShowAllLink", y.a), J = d.a.span("ChannelName", y.a), q = d.a.div("HeaderText", y.a);
			var Q;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Widget = 1] = "Widget"
			}(Q || (Q = {}));
			const Y = Object(i.c)({
					isCollectionReady: I.e,
					isModerator: O.e,
					selectedSubreddit: j.S,
					shouldRequestCollection: I.f,
					subredditChannels: I.a
				}),
				$ = Object(l.b)(Y, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						toggleModal: () => e(Object(p.i)(_.a.MANAGE_SUBREDDIT_CHAT)),
						toggleCreateModal: () => e(Object(p.i)(_.a.CREATE_SUBREDDIT_CHAT)),
						toggleEditModal: () => e(Object(p.i)(_.a.EDIT_SUBREDDIT_CHAT)),
						fetchSubredditChannels: t => e(Object(m.l)(t)),
						onChatLinkClick: (t, n) => e(Object(h.c)({
							channelId: t,
							subredditName: n
						})),
						onSelectChannel: t => e(Object(m.m)({
							channelId: t
						}))
					}
				});
			class ee extends r.a.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					this.fetchChannelList()
				}
				fetchChannelList() {
					this.props.shouldRequestCollection && this.props.fetchSubredditChannels(this.props.selectedSubreddit.id)
				}
				getDisplayChannelList() {
					return this.props.subredditChannels && this.props.maxChannels ? this.props.subredditChannels.slice(0, this.props.maxChannels) : this.props.subredditChannels || []
				}
				displayShowAllLink() {
					return !!(this.props.maxChannels && this.props.subredditChannels && this.props.maxChannels < this.props.subredditChannels.length)
				}
				displayChannelsList() {
					const {
						props: {
							maxChannels: e,
							subredditChannels: t
						}
					} = this;
					if (t) {
						const n = s()(t, ["name"]);
						return e ? n.slice(0, e) : n
					}
					return []
				}
				onItemClick(e) {
					const {
						channelId: t
					} = e, {
						selectedSubreddit: n,
						onChatLinkClick: a
					} = this.props;
					a(t, n.name), this.trackItemClick(e)
				}
				trackItemClick(e) {
					const {
						Joined: t
					} = w.a, {
						channelId: n,
						channelState: a
					} = e, {
						Widget: s,
						Modal: o
					} = Q, {
						parentContext: r,
						sendEvent: l
					} = this.props;
					return r === s && a === t ? l(Object(E.c)(n)) : r === s ? l(Object(E.e)(n)) : r === o && a === t ? l(Object(E.a)(n)) : r === o ? l(Object(E.b)(n)) : void 0
				}
				onShowAllClick() {
					const {
						sendEvent: e,
						toggleModal: t
					} = this.props;
					t && (t(), e(Object(E.d)()))
				}
				getLinkURL(e) {
					const {
						selectedSubreddit: t
					} = this.props;
					return Object(u.channelUrl)(e.channelId, t.name)
				}
				render() {
					const {
						props: {
							className: e,
							isCollectionReady: t,
							isModerator: n,
							onAddChannel: a,
							toggleEditModal: s,
							selectedSubreddit: o,
							onSelectChannel: l,
							toggleCreateModal: i
						}
					} = this;
					if (!t) return null;
					const d = this.displayChannelsList();
					return r.a.createElement("div", {
						className: e
					}, d.length ? r.a.createElement(T, null, d.map((e, t) => r.a.createElement(N, {
						key: "item-link-".concat(t),
						href: this.getLinkURL(e),
						target: c.c.BLANK,
						rel: c.b,
						onClick: t => {
							this.onItemClick(e), t.stopPropagation(), t.preventDefault()
						}
					}, r.a.createElement(F, {
						key: "item-link-title-".concat(t)
					}, r.a.createElement(H, {
						key: "item-link-icon-".concat(t)
					}), o.icon.url ? r.a.createElement(z, {
						key: "subreddit-icon-".concat(t),
						iconUrl: o.icon.url
					}) : r.a.createElement(K, {
						key: "planet-".concat(t),
						isSmall: !0
					}), r.a.createElement(U, {
						key: "item-header-".concat(t)
					}, r.a.createElement(q, {
						key: "item-header-text-".concat(t)
					}, r.a.createElement(B, {
						key: "item-detail-".concat(t)
					}, o.name, L._({
						"*": "• {number} Members",
						_1: "• 1 Member"
					}, [L._plural(e.membersCount, "number")], {
						hk: "4bUTpG"
					})), r.a.createElement(J, {
						key: "channel-name-".concat(t)
					}, e.type === w.c.Public ? r.a.createElement(V, null) : r.a.createElement(G, null), e.name)), n && r.a.createElement(Z, {
						key: "button-".concat(t),
						onClick: t => {
							l(e.channelId), s(), t.stopPropagation(), t.preventDefault(), this.props.sendEvent(Object(E.l)())
						}
					}, r.a.createElement(W, null)))), e.description && r.a.createElement(P, {
						key: "desc-text-".concat(t)
					}, e.description))), this.displayShowAllLink() && r.a.createElement(X, {
						type: "button",
						onClick: () => this.onShowAllClick()
					}, L._("See more", null, {
						hk: "lhTm0"
					}))) : n ? r.a.createElement(T, null, r.a.createElement(A, null, L._("Create your first room and get your community chatting in real time.", null, {
						hk: "2zKL0L"
					})), r.a.createElement(R, {
						onClick: a || i
					}, L._("+ Add room", null, {
						hk: "2vBAvZ"
					}))) : r.a.createElement(T, null, r.a.createElement(A, null, L._("There are no joined chatrooms yet", null, {
						hk: "3n65KN"
					}))))
				}
			}
			t.b = $(Object(C.c)(ee))
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/lodash/throttle.js"),
				s = n.n(a),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = n("./src/reddit/controls/Dropdown/index.m.less"),
				h = n.n(m),
				p = n("./src/reddit/controls/Dropdown/row.m.less"),
				g = n.n(p);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var C = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
				}
				return n
			};
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = s()(() => {
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
					}, n = Object(l.a)(g.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? r.a.createElement(i.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && r.a.createElement("span", {
						className: n
					}, e.children), r.a.createElement("span", {
						className: Object(l.a)(g.a.text, e.textClassName)
					}, e.displayText)) : r.a.createElement(u.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: s()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? r.a.createElement("div", null, e.children) : r.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && r.a.createElement("span", {
						className: Object(l.a)(g.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && r.a.createElement(c.a, {
						className: g.a.checkmark
					}), e.showDropdownTriangle && r.a.createElement(d.a, {
						className: h.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, n = C(e, ["className"]);
				const a = Object(l.a)(g.a.row, t, {
					[g.a.mIsInteractive]: !n.noHover,
					[g.a.mIsSelected]: n.isSelected,
					[g.a.topics]: n.isTopicsStyle
				});
				return r.a.createElement(_, b({
					className: a
				}, n))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
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
			var a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/InternalLink/index.tsx"),
				o = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				r = n.n(o);
			t.a = a.a.wrapped(s.a, "unstyledInternalLink", r.a)
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				l = n.n(r);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(o.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", l.a);
			t.a = i
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				r = n("./src/reddit/icons/fonts/Pencil/index.m.less"),
				l = n.n(r);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: "".concat(Object(o.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", l.a);
			t.a = i
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/GroupChat/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", {
					transform: "translate(-26.000000, -37.000000)"
				}, s.a.createElement("path", {
					d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Key/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ManageChatRoomsModal.30e40e6d6e6fea018ff5.js.map