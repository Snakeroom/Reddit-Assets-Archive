// https://www.redditstatic.com/desktop2x/ContributorRequestRequestModal.46c52d1e12f17271b024.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ContributorRequestRequestModal"], {
		"./src/reddit/components/ContributorRequestFlow/RequestModal/index.m.less": function(e, t, a) {
			e.exports = {
				requestModal: "_27TCiQwLZWWlFgG7t0oukF",
				icon: "_3FpdtrZ4Qhlog7NlIb2vAc",
				subredditIcon: "_1azgCQXYDaIZr6oKZqw_vj",
				ModalBody: "_1Qof37a979-QG1OLOBJc2V",
				modalBody: "_1Qof37a979-QG1OLOBJc2V",
				ModalHeader: "_1EjKGJfFqj40_coL0u2kFX",
				modalHeader: "_1EjKGJfFqj40_coL0u2kFX",
				ModalTitle: "_2uFmM79ezVYxcsYH55jyqR",
				modalTitle: "_2uFmM79ezVYxcsYH55jyqR",
				Title: "_3fGlFo7GNRVESb99pO5aH-",
				title: "_3fGlFo7GNRVESb99pO5aH-",
				Description: "_3fdg_9Zvp6zpXL5FMiY4ME",
				description: "_3fdg_9Zvp6zpXL5FMiY4ME",
				Component: "_1o3pDfAXeDo-a8XUIf7xfa",
				component: "_1o3pDfAXeDo-a8XUIf7xfa"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "ModalHeader", (function() {
				return j
			})), a.d(t, "ModalTitle", (function() {
				return k
			})), a.d(t, "CloseIcon", (function() {
				return N
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				n = a("./node_modules/react/index.js"),
				o = a.n(n),
				i = a("./node_modules/react-redux/es/index.js"),
				l = a("./node_modules/reselect/es/index.js"),
				d = a("./src/higherOrderComponents/asModal/index.tsx"),
				c = a("./src/reddit/actions/modal.ts"),
				u = a("./src/reddit/actions/subreddit.ts"),
				m = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				b = a("./src/reddit/components/SubredditIcon/index.tsx"),
				_ = a("./src/reddit/components/TrackingHelper/index.tsx"),
				h = a("./src/reddit/constants/modals.ts"),
				x = a("./src/reddit/controls/TextButton/index.tsx"),
				f = a("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				C = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				v = a("./src/reddit/models/SubredditRestrictions/index.ts"),
				q = a("./src/reddit/models/Theme/index.ts"),
				E = a("./src/reddit/selectors/platform.ts"),
				R = a("./src/reddit/selectors/structuredStyles.ts"),
				y = a("./src/reddit/selectors/subreddit.ts"),
				g = a("./src/reddit/components/ContributorRequestFlow/RequestModal/index.m.less"),
				F = a.n(g),
				I = a("./src/lib/lessComponent.tsx");
			const S = I.a.wrapped(m.e, "ModalBody", F.a),
				j = I.a.wrapped(m.i, "ModalHeader", F.a),
				k = I.a.div("ModalTitle", F.a),
				M = I.a.div("Title", F.a),
				O = I.a.div("Description", F.a),
				N = I.a.wrapped(m.b, "CloseIcon", F.a);
			class T extends o.a.Component {
				constructor(e) {
					super(e), this.onTextAreaChange = e => {
						this.setState({
							message: e.target.value
						})
					}, this.onCancelRequest = () => {
						this.props.sendEvent(Object(f.b)("cancel")), this.props.toggleContributorRequestModal()
					}, this.state = {
						message: r.fbt._("I would like to become an approved user of this community so I can {restrictions}", [r.fbt._param("restrictions", v.d[this.props.restrictions]())], {
							hk: "3tcbxn"
						})
					}
				}
				render() {
					if (!this.props.subreddit || !this.props.subredditAboutInfo) return null;
					const e = this.props.subreddit.displayText,
						t = this.props.subredditAboutInfo.disableContributorRequests,
						a = this.props.theme ? Object(q.e)(this.props.theme.newCommunityTheme.widgetColors.sidebarWidgetHeaderColor) : "";
					return o.a.createElement(S, {
						className: F.a.requestModal
					}, o.a.createElement(j, null, o.a.createElement(C.a, null, o.a.createElement("div", null, o.a.createElement(k, {
						style: {
							color: a
						}
					}, r.fbt._("Become an approved user of", null, {
						hk: "u33RG"
					})), o.a.createElement(M, {
						style: {
							color: a
						}
					}, o.a.createElement(b.b, {
						className: F.a.subredditIcon,
						iconUrl: this.props.subredditIcon.url,
						primaryColor: this.props.subredditIcon.color
					}), o.a.createElement("span", null, e))), o.a.createElement(x.a, {
						onClick: this.onCancelRequest
					}, o.a.createElement(N, null)))), o.a.createElement(m.l, null, t ? o.a.createElement(O, null, r.fbt._("The moderators have disabled requests in this community. Check the community rules for more details.", null, {
						hk: "2J5GoK"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(O, null, r.fbt._("Only approved users can {restrictions} in {displayName}. To become an approved user, send a request to the moderators.", [r.fbt._param("restrictions", v.d[this.props.restrictions]()), r.fbt._param("displayName", e)], {
						hk: "1q9PJW"
					})), o.a.createElement(p.c, {
						className: F.a.textarea,
						label: r.fbt._("Request to moderators", null, {
							hk: "4hiUqP"
						}),
						value: this.state.message,
						onChange: this.onTextAreaChange,
						state: void 0,
						required: !0
					}))), o.a.createElement(m.g, null, t ? o.a.createElement(m.r, {
						onClick: () => this.props.toggleContributorRequestModal()
					}, r.fbt._("ok", null, {
						hk: "22zWTN"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
						"data-redditstyle": !0,
						onClick: this.onCancelRequest
					}, r.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(m.r, {
						onClick: () => {
							this.props.sendEvent(Object(f.b)("request_approval")), this.props.makeContributorRequest(e, this.state.message, this.props.restrictions), this.props.toggleContributorRequestModal()
						}
					}, r.fbt._("Send Request", null, {
						hk: "1UMaEr"
					})))))
				}
			}
			t.default = I.a.wrapped(Object(s.a)(Object(d.a)(Object(i.b)(() => Object(l.c)({
				subredditAboutInfo: y.g,
				restrictions: y.q,
				subreddit: E.e,
				subredditIcon: R.b
			}), e => ({
				makeContributorRequest: (t, a, r) => e(Object(u.n)(t, a, r)),
				toggleContributorRequestModal: () => e(Object(c.i)(h.a.CONTRIBUTOR_REQUEST))
			}))(Object(_.c)(T)))), "Component", F.a)
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, a) {
			e.exports = {
				input: "_21N5nyVpBzbYCGTZ5WIri4",
				field: "_3K-rjepIoTAwKn_2B6UjSe",
				textareaField: "_3MvsRRj8v7ENJxFd2FRVzJ",
				textareaContainer: "_2q-RFz4xm8SXUM0zMrr8fq",
				mValid: "_2SuoSID5jS_A8otvMZNbUx",
				mInvalid: "_10eyptxJ3JPt74-_F9S7Y2",
				mWhiteField: "ywq-YkM3-987lbv_INHu_",
				control: "f_d5CYdNQxWwaGxH1SK7O",
				hasState: "_2N0IHX_0DbIGyJAPD5co-v",
				textarea: "_3zFItbRAgic4B5QFRuG51C",
				label: "_25QcYBzdEJtMuM4oKa6C_E",
				required: "_237-Cb_7kzH90efX4m0ikl",
				icon: "_3DmUjRewdA0uXlriQWqBi6",
				Invalid: "_1G5fQQh3gLl4hc3DIMA5j3",
				invalid: "_1G5fQQh3gLl4hc3DIMA5j3"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "d", (function() {
				return _
			})), a.d(t, "a", (function() {
				return h
			})), a.d(t, "b", (function() {
				return f
			})), a.d(t, "c", (function() {
				return C
			}));
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/lessComponent.tsx"),
				i = a("./src/reddit/controls/Input/index.tsx"),
				l = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = a.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = o.a.div("icon", c.a),
				p = o.a.textarea("textarea", c.a),
				b = o.a.span("Invalid", c.a);
			var _, h;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(_ || (_ = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(h || (h = {}));
			const x = e => s.a.createElement("div", {
					className: Object(n.a)(e.isRequired && c.a.required, e.className, {
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[c.a.mValid]: e.state === _.Valid,
							[c.a.mInvalid]: e.state === _.Invalid,
							[c.a.mWhiteField]: e.backgroundColorState === h.WhiteFields
						}
					})
				}, s.a.createElement("label", {
					className: Object(n.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && s.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && s.a.createElement(m, {
					className: Object(n.a)({
						[c.a.mValid]: e.state === _.Valid,
						[c.a.mInvalid]: e.state === _.Invalid
					})
				}, e.state === _.Valid && s.a.createElement(l.a, null), e.state === _.Invalid && s.a.createElement(b, null, "!")))),
				f = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: r,
						isRequired: o,
						label: l,
						onKeyDown: d,
						state: m,
						...p
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: a,
						isRequired: o,
						label: l,
						state: m
					}, s.a.createElement(i.a, u({}, p, {
						className: Object(n.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: r,
						onKeyDown: d
					})))
				},
				C = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: r,
						isRequired: o,
						label: i,
						onKeyDown: l,
						state: d,
						...m
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: a,
						isRequired: o,
						label: i,
						state: d,
						isTextarea: !0
					}, s.a.createElement(p, u({}, m, {
						className: Object(n.a)({
							[c.a.mWhiteField]: e.backgroundColorState === h.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: r,
						onKeyDown: l
					})))
				}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./src/lib/lessComponent.tsx"),
				s = a("./src/reddit/controls/Input/index.m.less"),
				n = a.n(s);
			t.a = r.a.input("input", n.a)
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "b", (function() {
				return n
			}));
			var r = a("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					...r.q(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: r.nb(t)
				}),
				n = e => t => ({
					...r.q(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: r.nb(t)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ContributorRequestRequestModal.46c52d1e12f17271b024.js.map