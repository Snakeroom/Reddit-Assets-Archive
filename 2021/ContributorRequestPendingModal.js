// https://www.redditstatic.com/desktop2x/ContributorRequestPendingModal.b5b2b59dbed716c2102f.js
// Retrieved at 12/6/2021, 1:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ContributorRequestPendingModal", "ContributorRequestRequestModal"], {
		"./src/reddit/components/ContributorRequestFlow/PendingModal/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "kHmrHO0TlUatR2WQAWOs",
				titleFontH2: "a308N7IxGFIaTC1wqgnqv",
				titleFontH3: "_2Hs4ivMJohIlbUC-A8RUV1",
				titleFontH4: "_30Bgw_GCHem_R3AaaCfafN",
				titleFontH5: "_38pmXPkFZiFiQjkQVTepO0",
				titleFontH6: "_2v_3umwlscspURYtmzsOW4",
				metadataFont: "_3xC5SGiSgSwlzu0iOoFyk1",
				flairFont: "_1pTlKLk59p5VrbKmAUxFfx",
				labelsFont: "_20sSCgnXQdjEl3E7wcQRXc",
				actionFont: "pZIae_e_izjnnWk-ADnkA",
				smallButtonFont: "qWjRNd5fF1ab_LntB3X4j",
				largeButtonFont: "_2nYKHBmUaLzir7AFXPsMtl",
				strongTextFont: "_19jPuO1nLWeIcORtgEIErB",
				tabFont: "_3FfewpBR_4VCrgXIZ-_RX7",
				buttonFontXS: "_28m1kECsvxGkZwUb4SXqk-",
				buttonFontXs: "_28m1kECsvxGkZwUb4SXqk-",
				buttonFontS: "_1vbPMPr4V1cUYTDrFl47pT",
				buttonFontM: "_3Sgdp9qG6HtHkFdg0reTJf",
				buttonFontL: "_4mpGMfYeXp4CoHJkINMik",
				buttonFontXL: "_9g7VJne8rYQYUPzux2Wlq",
				buttonFontXl: "_9g7VJne8rYQYUPzux2Wlq",
				bodyFontH1: "_1Ye4ULbwrro6areweHd2Sx",
				bodyFontH2: "_3HrFqmd2yZoeSdnZAEOPtu",
				bodyFontH3: "_3wg_GGIamegiuXVAOx0jXF",
				bodyFontH4: "_2ckyzMtuspkiV5nyNCTLcV",
				bodyFontH5: "_1ubFFVN9SVMiUSN9OAxrcz",
				bodyFontH6: "_2XQiK7u09Z8hMppSi4HquI",
				bodyFont: "_20828B8NYtXTVy7i4u5l8p",
				bodyFontSmall: "_34mk61kYhwo60DGJVxLSPv",
				bodyFontMono: "_1hTcMMnVRQ0sewN_z99GAa",
				Component: "_2sBoAyFDM9hFHkT2UjE5Ep",
				component: "_2sBoAyFDM9hFHkT2UjE5Ep",
				DescriptionPending: "_94bbeDxkn_amKuGqD_ba2",
				descriptionPending: "_94bbeDxkn_amKuGqD_ba2",
				ModalBody: "_2ipSTk6TFcwbY5X_lMQJjr",
				modalBody: "_2ipSTk6TFcwbY5X_lMQJjr"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/TextButton/index.tsx"),
				b = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				_ = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				x = n("./src/reddit/selectors/platform.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				F = n("./src/reddit/components/ContributorRequestFlow/PendingModal/index.m.less"),
				f = n.n(F),
				h = n("./src/lib/lessComponent.tsx");
			const E = h.a.div("DescriptionPending", f.a),
				g = h.a.wrapped(u.e, "ModalBody", f.a),
				k = Object(i.c)({
					restrictions: C.m,
					subreddit: x.e
				}),
				q = Object(a.b)(k, e => ({
					openContributorRequestPendingModal: () => e(Object(l.i)(m.a.CONTRIBUTOR_REQUEST_PENDING))
				}));
			class y extends r.a.Component {
				render() {
					const {
						openContributorRequestPendingModal: e,
						restrictions: t,
						subreddit: n
					} = this.props;
					if (!n) return null;
					const o = t === _.e.Comment ? _.a.Create : _.a.Draft;
					return r.a.createElement(g, null, r.a.createElement(c.ModalHeader, null, r.a.createElement(b.a, null, r.a.createElement(c.ModalTitle, null, s.fbt._("Request sent and pending...", null, {
						hk: "8x2US"
					})), r.a.createElement(p.a, {
						onClick: () => e()
					}, r.a.createElement(c.CloseIcon, null)))), r.a.createElement(u.l, null, r.a.createElement(E, null, s.fbt._("Your request to {restrictions} to {displayName} was sent and is pending. In the meantime, you can {action} a post and browse the community.", [s.fbt._param("restrictions", _.d[t]()), s.fbt._param("displayName", n.displayText), s.fbt._param("action", _.c[o]())], {
						hk: "2cTcEi"
					}))), r.a.createElement(u.g, null, r.a.createElement(u.r, {
						onClick: () => e()
					}, s.fbt._("ok", null, {
						hk: "Uhgei"
					}))))
				}
			}
			t.default = h.a.wrapped(Object(d.a)(q(y)), "Component", f.a)
		},
		"./src/reddit/components/ContributorRequestFlow/RequestModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "ModalHeader", (function() {
				return S
			})), n.d(t, "ModalTitle", (function() {
				return j
			})), n.d(t, "CloseIcon", (function() {
				return w
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/subreddit.ts"),
				m = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				b = n("./src/reddit/components/SubredditIcon/index.tsx"),
				_ = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/modals.ts"),
				C = n("./src/reddit/controls/TextButton/index.tsx"),
				F = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				f = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				E = n("./src/reddit/models/Theme/index.ts"),
				g = n("./src/reddit/selectors/platform.ts"),
				k = n("./src/reddit/selectors/structuredStyles.ts"),
				q = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/components/ContributorRequestFlow/RequestModal/index.m.less"),
				R = n.n(y),
				M = n("./src/lib/lessComponent.tsx");
			const v = M.a.wrapped(m.e, "ModalBody", R.a),
				S = M.a.wrapped(m.i, "ModalHeader", R.a),
				j = M.a.div("ModalTitle", R.a),
				I = M.a.div("Title", R.a),
				T = M.a.div("Description", R.a),
				w = M.a.wrapped(m.b, "CloseIcon", R.a);
			class O extends a.a.Component {
				constructor(e) {
					super(e), this.onTextAreaChange = e => {
						this.setState({
							message: e.target.value
						})
					}, this.onCancelRequest = () => {
						this.props.sendEvent(Object(F.b)("cancel")), this.props.toggleContributorRequestModal()
					}, this.state = {
						message: s.fbt._("I would like to become an approved user of this community so I can {restrictions}", [s.fbt._param("restrictions", h.d[this.props.restrictions]())], {
							hk: "3tcbxn"
						})
					}
				}
				render() {
					if (!this.props.subreddit || !this.props.subredditAboutInfo) return null;
					const e = this.props.subreddit.displayText,
						t = this.props.subredditAboutInfo.disableContributorRequests,
						n = this.props.theme ? Object(E.f)(this.props.theme.newCommunityTheme.widgetColors.sidebarWidgetHeaderColor) : "";
					return a.a.createElement(v, {
						className: R.a.requestModal
					}, a.a.createElement(S, null, a.a.createElement(f.a, null, a.a.createElement("div", null, a.a.createElement(j, {
						style: {
							color: n
						}
					}, s.fbt._("Become an approved user of", null, {
						hk: "u33RG"
					})), a.a.createElement(I, {
						style: {
							color: n
						}
					}, a.a.createElement(b.b, {
						className: R.a.subredditIcon,
						iconUrl: this.props.subredditIcon.url,
						primaryColor: this.props.subredditIcon.color
					}), a.a.createElement("span", null, e))), a.a.createElement(C.a, {
						onClick: this.onCancelRequest
					}, a.a.createElement(w, null)))), a.a.createElement(m.l, null, t ? a.a.createElement(T, null, s.fbt._("The moderators have disabled requests in this community. Check the community rules for more details.", null, {
						hk: "2J5GoK"
					})) : a.a.createElement(a.a.Fragment, null, a.a.createElement(T, null, s.fbt._("Only approved users can {restrictions} in {displayName}. To become an approved user, send a request to the moderators.", [s.fbt._param("restrictions", h.d[this.props.restrictions]()), s.fbt._param("displayName", e)], {
						hk: "1q9PJW"
					})), a.a.createElement(p.c, {
						className: R.a.textarea,
						label: s.fbt._("Request to moderators", null, {
							hk: "4hiUqP"
						}),
						value: this.state.message,
						onChange: this.onTextAreaChange,
						state: void 0,
						required: !0
					}))), a.a.createElement(m.g, null, t ? a.a.createElement(m.r, {
						onClick: () => this.props.toggleContributorRequestModal()
					}, s.fbt._("ok", null, {
						hk: "22zWTN"
					})) : a.a.createElement(a.a.Fragment, null, a.a.createElement(m.a, {
						"data-redditstyle": !0,
						onClick: this.onCancelRequest
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), a.a.createElement(m.r, {
						onClick: () => {
							this.props.sendEvent(Object(F.b)("request_approval")), this.props.makeContributorRequest(e, this.state.message, this.props.restrictions), this.props.toggleContributorRequestModal()
						}
					}, s.fbt._("Send Request", null, {
						hk: "1UMaEr"
					})))))
				}
			}
			t.default = M.a.wrapped(Object(o.a)(Object(l.a)(Object(i.b)(() => Object(d.c)({
				subredditAboutInfo: q.g,
				restrictions: q.m,
				subreddit: g.e,
				subredditIcon: k.b
			}), e => ({
				makeContributorRequest: (t, n, s) => e(Object(u.n)(t, n, s)),
				toggleContributorRequestModal: () => e(Object(c.i)(x.a.CONTRIBUTOR_REQUEST))
			}))(Object(_.c)(O)))), "Component", R.a)
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return _
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Input/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = a.a.div("icon", c.a),
				p = a.a.textarea("textarea", c.a),
				b = a.a.span("Invalid", c.a);
			var _, x;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(_ || (_ = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(x || (x = {}));
			const C = e => o.a.createElement("div", {
					className: Object(r.a)(e.isRequired && c.a.required, e.className, {
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[c.a.mValid]: e.state === _.Valid,
							[c.a.mInvalid]: e.state === _.Invalid,
							[c.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
						}
					})
				}, o.a.createElement("label", {
					className: Object(r.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && o.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && o.a.createElement(m, {
					className: Object(r.a)({
						[c.a.mValid]: e.state === _.Valid,
						[c.a.mInvalid]: e.state === _.Invalid
					})
				}, e.state === _.Valid && o.a.createElement(d.a, null), e.state === _.Invalid && o.a.createElement(b, null, "!")))),
				F = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: s,
						isRequired: a,
						label: d,
						onKeyDown: l,
						state: m,
						...p
					} = e;
					return o.a.createElement(C, {
						backgroundColorState: t,
						className: n,
						isRequired: a,
						label: d,
						state: m
					}, o.a.createElement(i.a, u({}, p, {
						className: Object(r.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: l
					})))
				},
				f = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: s,
						isRequired: a,
						label: i,
						onKeyDown: d,
						state: l,
						...m
					} = e;
					return o.a.createElement(C, {
						backgroundColorState: t,
						className: n,
						isRequired: a,
						label: i,
						state: l,
						isTextarea: !0
					}, o.a.createElement(p, u({}, m, {
						className: Object(r.a)({
							[c.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: d
					})))
				}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Input/index.m.less"),
				r = n.n(o);
			t.a = s.a.input("input", r.a)
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...s.defaults(t),
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: s.subreddit(t)
				}),
				r = e => t => ({
					...s.defaults(t),
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: s.subreddit(t)
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ContributorRequestPendingModal.b5b2b59dbed716c2102f.js.map