// https://www.redditstatic.com/desktop2x/SubredditInlineEditing.97fc1269077da0be2ca9.js
// Retrieved at 3/10/2020, 5:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditInlineEditing"], {
		"./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/models/Tags/index.ts"),
				c = s("./src/reddit/selectors/tags.ts"),
				l = s("./src/reddit/selectors/user.ts");
			const p = Object(d.c)({
				selectedOptions: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(c.v)(e, {
						subredditId: s
					})
				},
				language: l.O
			});
			t.a = Object(i.b)(p)(e => o.a.createElement(o.a.Fragment, null, Object(r.a)(e.language, "communityTopics.numSelected", {
				part: e.selectedOptions.length,
				whole: a.a
			})))
		},
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less": function(e, t, s) {
			e.exports = {
				suggestedTopicsContainer: "_3qCTJNZ-iSCZa0wyVfs6my",
				relatedText: "_389N9jvZJu60U3E7vIF00n",
				closeIcon: "M40GQ3RaivlkCl8WQ-pXo",
				plusIcon: "_2OYvdU1reofcbKMJ0wvC_x",
				suggestedTopic: "_1RmiLhJpOUx_hgduPf3F5O",
				closeIconContainer: "sHLJV3zATRod0k1f_m71I",
				suggestedTopicText: "_1-rmQV4Wee08Dt-h2GyW-o"
			}
		},
		"./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				d = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/tags/index.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/reddit/icons/svgs/Close/index.tsx"),
				u = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/components/CommunityTopics/SuggestedTopics/index.m.less"),
				h = s.n(m);
			var b = e => i.a.createElement("span", {
					className: h.a.suggestedTopic,
					onClick: () => e.onSuggestedTopicSelected(e.suggestedTopic)
				}, i.a.createElement(u.a, {
					className: h.a.plusIcon
				}), i.a.createElement("span", {
					className: h.a.suggestedTopicText
				}, e.suggestedTopic.displayText), i.a.createElement("span", {
					className: h.a.closeIconContainer,
					onClick: t => {
						t.preventDefault(), t.stopPropagation(), e.onSuggestedTopicDismissed(e.suggestedTopic)
					}
				}, i.a.createElement(p.a, {
					className: h.a.closeIcon
				}))),
				g = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				O = s("./src/reddit/models/Tags/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				T = s("./src/reddit/selectors/tags.ts");
			const I = Object(r.c)({
					suggestedOptions: (e, t) => {
						let {
							subredditId: s
						} = t;
						const n = Object(T.B)(e, {
								itemId: s
							}),
							o = Object(T.v)(e, {
								subredditId: s
							}),
							i = Object(T.z)(e, {
								subredditId: s
							});
						return n.filter(e => !!e.id && i !== e.id && !o.find(t => !!t.id && t.id === e.id))
					}
				}),
				S = Object(d.b)(I, (e, t) => {
					let {
						subredditId: s,
						onOptionSelected: o,
						context: i
					} = t;
					return {
						onSuggestedOptionDismissed: t => {
							e(Object(c.r)(s, [], [{
								subredditId: s,
								tagId: t.id,
								isRelevant: !1
							}], i, !0))
						},
						onSuggestedOptionSelected: t => {
							e((e, d) => {
								const r = d();
								Object(T.v)(r, {
									subredditId: s
								}).length >= O.a ? e(Object(l.e)(Object.assign({}, Object(l.d)(n.fbt._("You can only add up to {max number of topics} community topics", [n.fbt._param("max number of topics", O.a.toString())], {
									hk: "1OySAh"
								}), x.b.Error), {
									duration: l.a
								}))) : (e(Object(c.n)({
									subredditId: s,
									option: t
								})), Object(g.c)(d(), s, t, {
									context: i
								}), o && o(t))
							})
						}
					}
				});
			t.a = S(e => e.suggestedOptions.length ? i.a.createElement("div", {
				className: Object(a.a)(h.a.suggestedTopicsContainer, e.className)
			}, e.children || i.a.createElement("span", {
				className: h.a.relatedText
			}, n.fbt._("Related:", null, {
				hk: "1qt7CO"
			})), e.suggestedOptions.map(t => i.a.createElement(b, {
				key: t.id,
				suggestedTopic: t,
				onSuggestedTopicSelected: e.onSuggestedOptionSelected,
				onSuggestedTopicDismissed: e.onSuggestedOptionDismissed
			}))) : null)
		},
		"./src/reddit/components/CommunityTopics/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				r = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/actions/tags/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/components/MultiOptionSelect/index.tsx"),
				p = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				u = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/models/Tags/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/tags.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CommunityTopics/index.m.less"),
				x = s.n(O);
			const T = Object(d.c)({
				availableSubredditTags: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(b.d)(e, {
						subredditId: s
					})
				},
				subredditTags: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(b.s)(e, {
						itemId: s
					})
				},
				availableGlobalOptions: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(b.a)(e, {
						thingId: s
					})
				},
				selectedOptions: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(b.v)(e, {
						subredditId: s
					})
				},
				isLoading: e => Object(b.E)(e),
				currentInput: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(b.l)(e, {
						subredditId: s
					})
				},
				language: e => Object(g.O)(e)
			});
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.onOptionsChanged = e => {
						const t = e.filter(e => e.selected),
							s = e.filter(e => !e.selected);
						this.onOptionsSelected(t), s.forEach(e => this.onOptionDeselected(e))
					}, this.onFocus = () => {
						this.props.onSearchBarFocused(), this.props.onFocus && this.props.onFocus()
					}
				}
				onOptionsSelected(e) {
					const t = m.a - this.props.selectedOptions.length,
						s = e.filter(e => !!e.displayText.trim()),
						n = s.slice(0, t);
					n.forEach(e => {
						if (!e.id) {
							const t = Object(b.c)(e.displayText, this.props.availableSubredditTags);
							t && (e = Object(m.f)(t, !0))
						}
						this.props.optionSelected(Object.assign({}, e, {
							displayText: e.displayText.trim()
						}))
					}), n.length !== s.length && this.props.onMaxTopicsHit()
				}
				onOptionDeselected(e) {
					this.props.optionDeselected(e)
				}
				render() {
					return o.a.createElement("div", {
						className: x.a.communityTopicsContainer
					}, o.a.createElement(l.a, {
						readOnlyMode: this.props.readOnlyMode,
						addText: Object(u.c)("Add"),
						allowFreeTextEntry: !0,
						availableOptions: this.props.availableGlobalOptions,
						childClassNames: this.props.childClassNames,
						dropdownHeaderText: Object(u.c)("Suggested topics"),
						input: this.props.currentInput,
						isError: this.props.selectedOptions.length > m.a,
						isLoading: this.props.isLoading,
						maxOptionLength: m.b,
						maxOptionsToDisplay: this.props.maxTopicsToDisplay,
						onSearchBarFocus: this.onFocus,
						onSearchBarBlur: this.props.onBlur,
						onInputChanged: e => {
							this.props.onInputChanged(e)
						},
						onOptionsChanged: this.onOptionsChanged,
						selectedOptions: this.props.selectedOptions,
						selectedOptionComponent: this.props.selectedOptionComponent,
						splitOnCommaPress: !0
					}, this.props.children))
				}
			}
			t.b = Object(i.b)(T, (e, t) => {
				let {
					subredditId: s,
					context: n
				} = t;
				return {
					optionSelected: t => {
						e(Object(a.n)({
							subredditId: s,
							option: t
						})), e((e, o) => {
							p.e(o(), s, t, {
								context: n
							})
						})
					},
					optionDeselected: t => {
						e(Object(a.m)({
							subredditId: s,
							option: t
						})), e((e, o) => {
							p.d(o(), s, t, {
								context: n
							})
						})
					},
					onInputChanged: t => e(Object(a.l)({
						subredditId: s,
						input: t
					})),
					onSearchBarFocused: () => e((e, t) => {
						p.b(t(), s, {
							context: n
						})
					}),
					onMaxTopicsHit: () => e((e, t) => {
						e(Object(c.e)(Object.assign({}, Object(c.d)(Object(r.a)(Object(g.O)(t()), "communityTopics.maxTopicsHit", {
							max: m.a
						}), h.b.Error), {
							duration: c.a
						})))
					})
				}
			})(I)
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/InfoTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_23szEekH5XXtj16r9ijFFV",
				infoIcon: "Cna4lAhBSoUi4u9zdD3b4",
				activeInfoIcon: "_3AV4m36yvm9V73ErKKmXfe"
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/SelectedOptionComponent/index.m.less": function(e, t, s) {
			e.exports = {
				selectedOption: "_1sIE8VfrjZG1yETeSYNt8R",
				readOnlySelectedOption: "_2rKcTMTmSO59ljJ0QB38cQ",
				closeIcon: "_2UHIx3M8FVQ2t3bxAaUMt6",
				fakeOption: "_2HhHTqfIc2uUBvPpElSx3b",
				selectedOptionError: "_2RT4W2XoPWhuCDxgdLOCyx",
				plusIcon: "_1Wlw6VAlBp8UW7eHpfZR9H"
			}
		},
		"./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/tags/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/CommunityTopics/index.tsx"),
				u = s("./src/reddit/components/CommunityTopics/NumTopicsSelected.tsx"),
				m = s("./src/reddit/components/CommunityTopics/PrimaryTopic/index.tsx"),
				h = s("./src/reddit/components/CommunityTopics/SuggestedTopics/index.tsx"),
				b = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/Placeholder/index.tsx"),
				g = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/icons/svgs/Close/index.tsx")),
				O = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				x = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/SelectedOptionComponent/index.m.less"),
				T = s.n(x);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var S = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = (e, t) => [T.a.selectedOption, "number" == typeof t && e.displayText.length > t ? T.a.selectedOptionError : null], f = e => {
				const {
					innerRef: t,
					onClickHandler: s,
					onFocus: n,
					option: i,
					maxLength: d
				} = e, a = S(e, ["innerRef", "onClickHandler", "onFocus", "option", "maxLength"]);
				return o.a.createElement("div", I({}, a, {
					className: Object(r.a)(...E(i, d), T.a.readOnlySelectedOption),
					ref: e.innerRef
				}), e.option.displayText)
			}, j = e => {
				const {
					innerRef: t,
					onClickHandler: s,
					option: n,
					maxLength: i
				} = e, d = S(e, ["innerRef", "onClickHandler", "option", "maxLength"]);
				return o.a.createElement("div", I({}, d, {
					onClick: s,
					className: Object(r.a)(...E(n, i)),
					ref: e.innerRef
				}), e.option.displayText, o.a.createElement(g.a, {
					className: T.a.closeIcon
				}))
			}, y = () => o.a.createElement("div", {
				className: Object(r.a)(T.a.selectedOption, T.a.readOnlySelectedOption, T.a.fakeOption)
			}, o.a.createElement(O.a, {
				className: T.a.plusIcon
			}), C._("Add subtopics", null, {
				hk: "aLm7V"
			}));
			var v = s("./src/reddit/components/SubredditUnsavedChangesModal/index.tsx"),
				_ = s("./src/reddit/helpers/readOnlyMode/index.ts"),
				N = s("./src/reddit/helpers/trackers/communityTopics.ts"),
				k = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				F = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				w = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/tags.ts"),
				P = s("./src/reddit/constants/colors.ts"),
				R = s("./src/reddit/selectors/tooltip.ts"),
				L = s("./node_modules/uuid/v4.js"),
				B = s.n(L),
				M = s("./src/reddit/components/ContentTooltip/index.tsx"),
				H = s("./src/reddit/icons/fonts/Info/index.tsx"),
				A = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/InfoTooltip/index.m.less"),
				U = s.n(A);
			const {
				fbt: G
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = Object(d.c)({
				activeTooltipId: R.a
			}), q = Object(i.b)(K, e => ({
				onHideTooltip: () => e(Object(l.i)()),
				onShowTooltip: t => e(Object(l.f)({
					tooltipId: t
				}))
			})), V = "inline-editing-topics-tooltip-", W = {
				top: P.a.alienblue,
				bottom: P.a.alienblue
			};
			class X extends o.a.Component {
				constructor(e) {
					super(e), this.onShowTooltip = () => {
						this.props.onShowTooltip(this.state.tooltipId)
					}, this.state = {
						tooltipId: ""
					}
				}
				makeUniqueTooltipId() {
					return "".concat(V).concat(B()())
				}
				componentDidMount() {
					this.setState({
						tooltipId: this.makeUniqueTooltipId()
					})
				}
				tooltipIsOpen() {
					return this.state.tooltipId === this.props.activeTooltipId
				}
				render() {
					return o.a.createElement("span", {
						id: this.state.tooltipId,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.props.onHideTooltip
					}, o.a.createElement(H.a, {
						className: Object(r.a)(U.a.infoIcon, {
							[U.a.activeInfoIcon]: this.tooltipIsOpen()
						})
					}), o.a.createElement(M.a, {
						tooltipId: this.state.tooltipId,
						defaultTooltipPosition: "bottom",
						caretColor: W
					}, o.a.createElement("div", {
						className: U.a.container
					}, G._("Adding community topics allow people to find your community. Add a primary topic and sub topics to be discovered more easily.", null, {
						hk: "2PLIUO"
					}))))
				}
			}
			var J = q(X),
				Q = s("./src/reddit/components/InlineSubredditEditing/InlineCommunityTopics/index.m.less"),
				Z = s.n(Q);
			const {
				fbt: Y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), z = 4, $ = Object(d.c)({
				haveData: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(D.n)(e, {
						itemId: s
					})
				},
				hasPendingChanges: D.o,
				hasSecondaryTags: D.p,
				unsavedChangesModalIsOpen: Object(w.b)(v.a),
				isLoading: e => Object(D.E)(e),
				selectedPrimaryTag: D.A
			}), ee = Object(i.b)($, (e, t) => {
				let {
					subredditId: s,
					context: n
				} = t;
				return {
					onTopicsRequested: () => e(Object(c.k)(s, n)),
					onSaveRequested: () => e(Object(c.i)(s, n, !0)),
					resetSelection: () => e(Object(c.g)(s)),
					openUnsavedChangesModal: () => {
						e(Object(l.i)()), e(Object(a.h)(v.a))
					}
				}
			}), te = {
				optionsListDropdownClassName: Z.a.optionsListDropdown,
				searchBarClassName: Z.a.searchBar
			};
			class se extends o.a.Component {
				constructor(e) {
					super(e), this.focusGrabber = o.a.createRef(), this.topicsEditorContainer = o.a.createRef(), this.isSaving = !1, this.onFocus = () => {
						this.setState({
							isEditing: !0
						}, () => {
							this.focusTopicsEditor()
						})
					}, this.onSuggestedOptionSelected = e => {
						this.state.isEditing ? this.onFocus() : this.onSave()
					}, this.onBlur = e => {
						this.isBlurringToChildOrContainer(e) || (this.props.hasPendingChanges ? this.isSaving || this.props.openUnsavedChangesModal() : this.setState({
							isEditing: !1
						}))
					}, this.onCancel = () => {
						this.setState({
							isEditing: !1
						}), this.props.resetSelection()
					}, this.onSave = () => {
						this.isSaving = !0, this.props.onSaveRequested(), this.setState({
							isEditing: !1
						})
					}, this.state = {
						isEditing: !1
					}
				}
				componentDidMount() {
					this.props.haveData || this.props.onTopicsRequested()
				}
				componentWillReceiveProps(e) {
					this.props.isLoading && !e.isLoading && this.isSaving && (this.isSaving = !1)
				}
				isBlurringToChildOrContainer(e) {
					return e.relatedTarget === this.topicsEditorContainer.current || this.topicsEditorContainer.current && this.topicsEditorContainer.current.contains(e.relatedTarget)
				}
				renderControlRow() {
					const {
						subredditId: e
					} = this.props;
					return o.a.createElement("div", {
						className: Z.a.controlRow
					}, o.a.createElement("span", {
						className: Z.a.numSelected
					}, o.a.createElement(u.a, {
						subredditId: e
					})), o.a.createElement("span", {
						className: Z.a.cancel,
						onClick: this.onCancel
					}, Y._("Cancel", null, {
						hk: "3OZmBh"
					})), o.a.createElement("span", {
						className: Z.a.save,
						onClick: this.onSave
					}, Y._("Save", null, {
						hk: "1JNPXe"
					})))
				}
				renderEmptyState() {
					const {
						hasSecondaryTags: e,
						selectedPrimaryTag: t
					} = this.props;
					return t || e ? o.a.createElement("div", {
						tabIndex: -1,
						className: Z.a.emptyStateContainer,
						onFocus: this.onFocus,
						onClick: this.onFocus
					}, o.a.createElement(y, null)) : null
				}
				shouldRenderSecondaryTagEmptyState() {
					const {
						hasSecondaryTags: e,
						hasPendingChanges: t
					} = this.props, {
						isEditing: s
					} = this.state;
					return !s && !t && !e
				}
				renderTitle() {
					const {
						selectedPrimaryTag: e
					} = this.props;
					return o.a.createElement(o.a.Fragment, null, !e && o.a.createElement("span", {
						className: Z.a.newBadge
					}, Y._("New", null, {
						hk: "3LXNw5"
					})), Y._("Community topics", null, {
						hk: "1wRqKt"
					}), o.a.createElement(J, null))
				}
				renderFocusGrabber() {
					return o.a.createElement("span", {
						ref: this.focusGrabber,
						tabIndex: -1
					})
				}
				focusTopicsEditor() {
					this.focusGrabber.current && this.focusGrabber.current.focus()
				}
				renderTopicsEditor() {
					const {
						subredditId: e
					} = this.props, {
						isEditing: t
					} = this.state;
					return o.a.createElement("div", {
						className: Object(r.a)(Z.a.inlineTopicsContainer, {
							[Z.a.inlineTopicsContainerEditing]: t
						}),
						tabIndex: -1,
						ref: this.topicsEditorContainer,
						onBlur: this.onBlur
					}, o.a.createElement(p.b, {
						context: N.a.idCard,
						subredditId: e,
						selectedOptionComponent: t ? j : f,
						onFocus: this.onFocus,
						onBlur: this.onBlur,
						childClassNames: te,
						readOnlyMode: t ? _.a.editable : _.a.focusableReadOnly,
						maxTopicsToDisplay: t ? void 0 : z
					}, !t && o.a.createElement(F.a, {
						className: Z.a.pencil
					}), this.renderFocusGrabber()), t && this.renderControlRow())
				}
				renderSubtext() {
					return o.a.createElement("div", {
						className: Z.a.titleSubtext
					}, o.a.createElement(k.a, {
						className: Z.a.modIcon
					}), Y._("Only visible to mods", null, {
						hk: "3DMuXs"
					}))
				}
				renderPlaceholder() {
					return o.a.createElement("div", {
						className: Z.a.container
					}, o.a.createElement(b.a, null))
				}
				render() {
					const {
						context: e,
						haveData: t,
						subredditId: s,
						unsavedChangesModalIsOpen: n
					} = this.props;
					return t ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Z.a.container
					}, o.a.createElement("div", {
						className: Z.a.title
					}, this.renderTitle(), this.renderSubtext()), o.a.createElement(m.b, {
						subredditId: s,
						shouldShowTooltip: !0
					}), this.shouldRenderSecondaryTagEmptyState() ? this.renderEmptyState() : this.renderTopicsEditor(), o.a.createElement(h.a, {
						context: e,
						className: Object(r.a)(Z.a.relatedTopicsContainer, {
							[Z.a.relatedTopicsContainerEmptyState]: this.shouldRenderSecondaryTagEmptyState()
						}),
						subredditId: s,
						onOptionSelected: this.onSuggestedOptionSelected
					}, o.a.createElement("div", {
						className: Z.a.relatedTopicsCopy
					}, Y._("Related topics", null, {
						hk: "2Hw7ep"
					})))), n && o.a.createElement(v.b, {
						onCancel: this.onFocus,
						onSave: this.onSave,
						onDiscard: this.onCancel
					})) : this.renderPlaceholder()
				}
			}
			t.default = ee(se)
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, s) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/Info/index.m.less"),
				r = s.n(d);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(i.b)("info"), " ").concat(e.className)
			}), "InfoIcon", r.a);
			t.a = a
		}
	}
]);
//# sourceMappingURL=SubredditInlineEditing.97fc1269077da0be2ca9.js.map